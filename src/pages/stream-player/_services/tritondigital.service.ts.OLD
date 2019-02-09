import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { NotificationsService } from '../_services/notifications.service';
import { Media, MediaObject } from "@ionic-native/media";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { timeoutWith } from 'rxjs/operators';
import { RadioStation } from "../_models/radioStation.model";

// declare var Mediaac;

@Injectable({
	providedIn: 'root'
})
export class TritonDigitalService {
	private isInit = false;
	player: MediaObject;
	is_playing: boolean = true;
	currentSourceIndex = 0;
	selectedStation = '';
	stationName = '97';
	currentStation: RadioStation;
	stations: Array<RadioStation> = [];

	isPlayingObs = new Subject<boolean>();
	isLoadingObs = new Subject<boolean>();
	// public classTestObs = new Subject<string>();

	status: string;
	
	streamingUrl: string;
	sources: string[] = [];
    
	reconnectionDelay: number; // seconds
	public count_streaming_played_subscribe = 0;
	public lastFetchTime: any;

	@Output() played: EventEmitter<any> = new EventEmitter();

	@Output() error: EventEmitter<any> = new EventEmitter();

	constructor(private notifications: NotificationsService, private http: HttpClient, private media: Media) {
		this.streamingUrl = environment.streaming.url['97'];
		console.log('streamingUrl', this.streamingUrl);
		this.play();
		this.status = 'loading';
		// environment.streaming.stations.forEach((station, index) => {
		// 	this.stations.push(new RadioStation(station))
		// });
	}

    resetDelay() {

		// console.log('resetDelay');
        this.reconnectionDelay = 5;  // seconds
	}

	nextDelay() {
		this.reconnectionDelay = this.reconnectionDelay * 2;
		
		// max 1 minute
		if(this.reconnectionDelay > 60) {
			this.reconnectionDelay = 60;
		}

		// console.log('nextDelay', this.reconnectionDelay);
		return this.reconnectionDelay;
	}
	
	playing() {
		return this.is_playing;
	}
    
    /**
	 * Initalizes/loads player
	 *
	 * @return     Promise
	 */
	initPlayer() {

		if(this.isInit)
			return;
		
		this.isInit = true;

		// local dev only because cordova is missing
		if(window.location.href.indexOf('localhost') > 0 || window.location.href.indexOf('myapppresser') > 0) {

			// local dev only

			// console.log('running locally skip initPlayer');
			// fake the rest
			this.is_playing = true;
			this.status = 'loading';
			if( this.selectedStation == this.stationName ) {
				this.notifications.create('warn', 'run locally (97): this.player.play();');
				this.played.emit();
			} else {
				this.notifications.create('warn', 'run locally (97): this.player.pause();');
			}
			
			return;
		}

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
					this.played.emit();
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
				this.isInit = false;
				this.initPlayer();
			}, this.nextDelay());
		});

		if( this.selectedStation == this.stationName ) {
			this.player.play();
		} else {
			this.player.pause();
		}
		
	}

	nextSource() {
		if(this.currentSourceIndex + 1 > length) {
			this.currentSourceIndex = 0;
		}

		return this.sources[this.currentSourceIndex++];
	}

	resume() {
		this.play();
	}

	/**
	 * Plays player
	 *
	 * @return     void
	 */
	play(): void{

		if(this.player && this.selectedStation == this.stationName) {
			if(!this.is_playing && this.status != 'loading')
				this.player.play();
			return;
		}

		//Reset status
		this.status = undefined;
		
		this.resetDelay();
        
		// https://userguides.tritondigital.com/spc/stream/
		
		/**
		 * Implementing the reconnection algorithm:
		 *	1.Initially set the retry delay to a random number from 1 to 5 seconds.
		 *	2.Fetch the stream’s configuration via the provisioning API described previously.
		 *	3.If the provisioning request fails, double the retry delay (up to a maximum of 1 minute), wait for that delay, then try the provisioning request again (i.e., jump back to step 2). Do this until provisioning information is received.
		 *	4.Attempt connection to the first server in the list, using the first port.
		 *	5.If the connection is refused, try the next port. Repeat until all ports for this server have been attempted.  This is done to attempt non-standard ports in case the player is behind a strict firewall.
		 *	6.If the end of the server list is reached, the player should double the retry delay (up to a maximum of 1 minute), then re-fetch the provisioning information with a new request (i.e., jump back to step 2).
		 */

		//Get player sources array, then init player
		this.getPlaySource().then( (sources: string[]) => {
			this.sources = sources;
			console.log(sources);
			this.initPlayer();
		});
    }

	/**
	 * Pauses player
	 *
	 * @return     void
	 */
	pause(): void{
		this.is_playing = false;

		if(this.player) {
			this.player.pause();
		}
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
    
    /**
	 * Generates sources array from PLS playlist file.
	 *
	 * @param      string  playlistURL  The playlist url
	 * @return     Array  Array of source urls
	 */
	private sourceFromPLS(playlistURL) {

		let promise = new Promise((resolve, reject) => {
    		let sources: string[] = [];

    		this.http.get(playlistURL, { responseType: 'text' }).subscribe((res) => {

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
				this.notifications.create('error', 'Error loading PLS file: ' + err.statusText);
				this.notifications.create('error', 'Trying again in ' + this.reconnectionDelay * 2 + ' seconds');

				setTimeout(() => {
					// try again in a few seconds
					this.sourceFromPLS(playlistURL);
				}, this.nextDelay() * 1000);
    		});

		});

  		return promise;
    }
    
    /**
	 * Gets the player source based on environment streaming url
	 *
	 * @return     Array  The player source.
	 */
	private getPlaySource(){

		return new Promise((resolve, reject) => {
    		let sources: any = [];

    		let envSource = this.streamingUrl;

    		if(envSource.split('.').pop() == "pls") {
    			//Parse PLS files
    			this.sourceFromPLS(envSource).then( sources => resolve(sources));
    		} else if(envSource.split('.').pop() == "m3u") {
    			//Parse M3U files
    			// this.sourceFromM3U(envSource).then(sources => resolve(sources))
    		} else {
    			//Standard source url
    			sources.push(envSource);
				resolve(sources);
    		}
		});
	}
}