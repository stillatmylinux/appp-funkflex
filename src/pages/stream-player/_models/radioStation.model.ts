import { Media, MediaObject } from "@ionic-native/media";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs/Subject";
import { NotificationsService } from '../_services/notifications.service';
import { Observable } from "rxjs";

export class RadioStation {
	public name: string;
	public streaming_url: string;
	public player: MediaObject;
	public is_playing: boolean = false;
	public currentSourceIndex: number = 0;
	private autoplay:boolean = false;
	private reconnectionDelay: number; // seconds
	private streamingSources: Array<string>;
	public isCurrentPlayingStation: boolean = false;
	public status: string;

	public isPlayingObs = new Subject<boolean>();
	public isLoadingObs = new Subject<boolean>();

	public constructor(
		private station: {name, url, autoplay?},
		private http: HttpClient,
		private media: Media,
		private notifications: NotificationsService
	) {
		this.name = this.station.name;
		this.streaming_url = this.station.url;
		if(this.station.autoplay)
			this.autoplay = this.station.autoplay;

		this.getStreamingSources();
	}

	private getStreamingSources() {
		this.sourceFromPLS().then(sources => {
			
			this.streamingSources = sources;
			
			if(this.autoplay) {
				this.isCurrentPlayingStation = true;

				this.initPlayer();
			}

		});
	}

	public initPlayer() {
		

		// // local dev only because cordova is missing
		// if(window.location.href.indexOf('localhost') > 0 || window.location.href.indexOf('myapppresser') > 0) {

		// 	// local dev only

		// 	// console.log('running locally skip initPlayer');
		// 	// fake the rest
		// 	this.is_playing = true;
		// 	this.status = 'loading';
		// 	if( this.selectedStation == this.stationName ) {
		// 		this.notifications.create('warn', 'run locally (97): this.player.play();');
		// 		this.played.emit();
		// 	} else {
		// 		this.notifications.create('warn', 'run locally (97): this.player.pause();');
		// 	}
			
		// 	return;
		// }

		this.resetDelay();

		let source = this.nextSource();
		
		this.player = this.media.create(source);

		this.player.onStatusUpdate.subscribe(status => {
			console.log('onStatusUpdate status', status);
			switch(status) {
				case this.media.MEDIA_STARTING: // 1
					console.log('media is starting');
					this.isPlayingObs.next(false);
					this.isLoadingObs.next(true);
					break;
				case this.media.MEDIA_RUNNING: // 2
					console.log('media is running');
					this.is_playing = true;
					this.status = 'playing';
					this.isPlayingObs.next(true);
					this.isLoadingObs.next(false);
					break;
				case this.media.MEDIA_PAUSED: // 3
					console.log('media is paused');
					this.isPlayingObs.next(false);
					this.is_playing = false;
					this.status = 'paused';
					break;
				case this.media.MEDIA_STOPPED: // 4
					console.log('media is stopped');
					this.is_playing = false;
					this.status = 'stopped';
					this.isPlayingObs.next(false);
					break;
			}
			
		});
		
        this.player.onError.subscribe(error => {
			console.log('Error!', error);
			this.is_playing = false;
			this.status = null;
			setTimeout(() => {
				this.initPlayer();
			}, this.nextDelay());
		});

		if(this.autoplay && this.isCurrentPlayingStation) {
			this.player.play();
		} else {
			this.player.pause();
		}
	}

	/**
	 * Generates sources array from PLS playlist file.
	 *
	 * @return     Array  Array of source urls
	 */
	private sourceFromPLS() {

		let promise = new Promise <Array<string>>((resolve, reject) => {
    		let sources: string[] = [];

    		this.http.get(this.streaming_url, { responseType: 'text' }).subscribe((res) => {

    			//Loop through each line
    			for(let line of res.split('\n')){

    				//If line is playlist "File" line, add the url from it to sources
    				if(line.match(/File[0-9]=/g)){
    					sources.push(line.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g).toString());
    				}
				}
				
				this.resetDelay();

    			resolve(sources);
    		}, (err) => {
				this.notifications.create('error', `Error loading ${name} streaming file: ${err.statusText}`);
				this.notifications.create('error', `Trying again in ${this.reconnectionDelay * 2} seconds`);

				setTimeout(() => {
					// try again in a few seconds
					this.getStreamingSources();
				}, this.nextDelay() * 1000);
    		});

		});

  		return promise;
	}
	
	resetDelay() {
		this.reconnectionDelay = 5;  // seconds
	}

	/**
	 * Delay in seconds
	 * 
	 * If there are errors contacting the server double the 
	 * next request time and try again.
	 * 
	 * Maximum 60 seconds
	 */
	nextDelay() {
		this.reconnectionDelay = this.reconnectionDelay * 2;
		
		// max 1 minute
		if(this.reconnectionDelay > 60) {
			this.reconnectionDelay = 60;
		}

		return this.reconnectionDelay;
	}

	nextSource() {
		if(this.currentSourceIndex + 1 > length) {
			this.currentSourceIndex = 0;
		}

		return this.streamingSources[this.currentSourceIndex++];
	}

	/**
	 * Determines if player playing
	 *
	 * @return     boolean  True if playing, False otherwise.
	 */
	isPlaying(): Observable<boolean> {
		return this.isPlayingObs;
	}
    
    /**
	 * Determines if player loading/buffering.
	 *
	 * @return     boolean  True if loading, False otherwise.
	 */
	isLoading(): Observable<boolean> {
		return this.isLoadingObs;
	}
}