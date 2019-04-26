import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { NotificationsService } from './notifications.service';
import { Media, MediaObject } from '@ionic-native/media';
import { RadioStation } from "../_models/radioStation.model";
import { Observable, Subject } from 'rxjs';
import { Platform } from 'ionic-angular/platform/platform';
import { BackgroundMode } from '@ionic-native/background-mode';

@Injectable({
	providedIn: 'root'
})
export class StreamingService {

	public stations: Array<RadioStation> = [];
	public currentStation: RadioStation;
	public selectedStationIndex: number = 0;

	public isPlayingObs = new Subject<boolean>();
	public isLoadingObs = new Subject<boolean>();
	public is_playing = false;
	public is_loading = true;
	public player: MediaObject;

	constructor(
		private platform: Platform,
		private notifications: NotificationsService,
		private http: HttpClient,
		private backgroundMode: BackgroundMode,
		public media: Media
	) {
		this.platform.ready().then(() => {
			this.backgroundMode.enable();
			this.getStations();
			this.initFirstStation();
		});
	}

	private getStations() {
		environment.streaming.stations.forEach((station, index) => {

			this.stations.push(new RadioStation(station));
			this.stations[index].isLoading().subscribe(is_loading => {

				console.log('station index ' + index + ' is_loading', is_loading);

				this.isLoadingObs.next(is_loading);
			});

			this.stations[index].isPlaying().subscribe(is_playing => {

				console.log('station index ' + index + ' is_playing', is_playing);

				this.isPlayingObs.next(is_playing);
			});

			this.getStreamingSources(this.stations[index], index);
		});
	}

	play(new_station: string) {

		console.log('play this new station', new_station);

		this.stations.forEach((station: RadioStation, index: number) => {

			console.log('switch to this station?', station.name)

			if(new_station == station.name) {
				this.selectedStationIndex = index;
				if(!station.isCurrentPlayingStation) {
					this.player.release();
					this.initPlayer(station, index);
				}
				station.isCurrentPlayingStation = true;
			} else {
				station.isCurrentPlayingStation = false;
			}
		});
	}

	public initPlayer(station: RadioStation, index) {

		console.log('initPlayer', station);

		this.is_loading = true;
		this.currentStation = station;
		station.startLoading();
		station.resetDelay();

		let source = station.nextSource();
		// source = 'http://cbc_r1_mtl.akacast.akamaistream.net/7/35/451661/v1/rc.akacast.akamaistream.net/cbc_r1_mtl';

		console.log('what is this?????', source);
		console.log('index', index);

		this.player = this.media.create(source);
		
		this.player.onStatusUpdate.subscribe(status => {
			console.log('onStatusUpdate status', status);
			console.log('index', index)
			switch(status) {
				case this.media.MEDIA_STARTING: // 1
					console.log('media is starting');
					this.is_loading = true;
					this.stations[this.selectedStationIndex].isPlayingObs.next(false);
					this.stations[this.selectedStationIndex].isLoadingObs.next(true);
					break;
				case this.media.MEDIA_RUNNING: // 2
					console.log('media is running');
					this.is_loading = false;
					this.is_playing = true;
					this.stations[this.selectedStationIndex].is_playing = true;
					this.stations[this.selectedStationIndex].status = 'playing';
					this.stations[this.selectedStationIndex].isPlayingObs.next(true);
					this.stations[this.selectedStationIndex].isLoadingObs.next(false);
					break;
				case this.media.MEDIA_PAUSED: // 3
					console.log('media is paused');
					this.is_playing = false;
					this.stations[this.selectedStationIndex].isPlayingObs.next(false);
					this.stations[this.selectedStationIndex].is_playing = false;
					this.stations[this.selectedStationIndex].status = 'paused';
					break;
				case this.media.MEDIA_STOPPED: // 4
					console.log('media is stopped');
					this.is_playing = false;
					this.stations[this.selectedStationIndex].is_playing = false;
					this.stations[this.selectedStationIndex].status = 'stopped';
					this.stations[this.selectedStationIndex].isPlayingObs.next(false);
					break;
			}
			
		});

		console.log('done player.onStatusUpdate');
		console.log('set player.onError');
		
		this.player.onError.subscribe(error => {
			console.log('Error!', error);
			station.is_playing = false;
			station.status = null;
			setTimeout(() => {
				this.initPlayer(station, index);
			}, station.nextDelay());
		});

		this.player.play();
	}

	private getStreamingSources(station: RadioStation, index) {
		this.sourceFromPLS(station, index).then(sources => {

			console.log('sourceFromPLS sources', sources);
			
			station.streamingSources = sources;
			
			if(station.autoplay) {
				station.isCurrentPlayingStation = true;
				this.initPlayer(station, index);
			}
		});
	}

	/**
	 * Generates sources array from PLS playlist file.
	 *
	 * @return     Array  Array of source urls
	 */
	private sourceFromPLS( station: RadioStation, index ) {

		let promise = new Promise <Array<string>>((resolve, reject) => {
    		let sources: string[] = [];

    		this.http.get(station.streaming_url, { responseType: 'text' }).subscribe((res) => {

    			//Loop through each line
    			for(let line of res.split('\n')){

    				//If line is playlist "File" line, add the url from it to sources
    				if(line.match(/File[0-9]=/g)){
    					sources.push(line.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g).toString());
    				}
				}
				
				station.resetDelay();

    			resolve(sources);
    		}, (err) => {
				this.notifications.create('error', `Error loading ${name} streaming file: ${err.statusText}`);
				this.notifications.create('error', `Trying again in ${station.reconnectionDelay * 2} seconds`);

				setTimeout(() => {
					// try again in a few seconds
					this.getStreamingSources( station, index );
				}, station.nextDelay() * 1000);
    		});

		});

  		return promise;
	}

	private initFirstStation() {
		if(this.stations && this.stations.length) {
			this.currentStation = this.stations[0];
		} else {
			console.error('No stations URLs set in StreamingService');
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
}
