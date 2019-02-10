import { Component, OnInit, NgZone } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

// import { TritonDigitalService } from "./_services/tritondigital.service";
// import { TritonDigitalService1075 } from "./_services/station1075.service";
import { NotificationsService } from './_services/notifications.service';
import { FBMessengerService } from "../../providers/facebook/messenger/fb-messenger.service";
import { Track } from './_models/track.model';
import { NowPlayingService } from './_services/now-playing.service';
import { NavParams } from 'ionic-angular';
import { StreamingService } from './_services/streaming.service';

@Component({
  selector: 'app-stream-player',
  templateUrl: 'stream-player.component.html'
})
export class StreamPlayerComponent implements OnInit {

	public show_stream_logo: string = '';
	// public stream_logo_url: string = '';
	public logo_exists: boolean;
	public isPlaying: boolean = false;
	public isLoading: boolean = true;
	public playeractive: boolean;
	public playlistactive: boolean;
	public currentTrack: Track;
	public trackLoaded: boolean;
	public tracks: Track[] = [];
	public tracksLoading: boolean;
	public selectedStation = '97';
	public testClass: string = 'test-class-null';

	constructor(
		private http: Http,
		private ngZone: NgZone,
		private fbMsg: FBMessengerService,
		private npService: NowPlayingService,
		public navParams: NavParams,
		private streaming: StreamingService,
    	private notifications: NotificationsService
	) {
		this.playlistactive = false;
		this.playeractive = true;
		this.currentTrack = this.npService.dummyTrack();
		this.trackLoaded = true;
		this.tracksLoading = false;
		this.notifications.create('warn', 'StreamPlayerComponent constructor');
	}

	ngOnInit() {

		// 107.5
		// this.streaming1075.isPlaying().subscribe(isPlaying => {
		// 	let msg = 'StreamPlayerComponent stream-player is ' + ((isPlaying) ? 'playing' : 'stopped');
		// 	console.log(msg);
		// 	this.ngZone.run(() => {
		// 		this.isPlaying = isPlaying;
		// 	});
		// });

		// this.streaming1075.isLoading().subscribe(isLoading => {
		// 	let msg = 'StreamPlayerComponent stream-player is ' + ((isLoading) ? 'loading' : 'loaded');
		// 	console.log(msg);
		// 	this.ngZone.run(() => {
		// 		this.isLoading = isLoading;
		// 	});
		// });
	}

	playStation(station: string) {


		console.log('StreamPlayerComponent playStation station', station)

		this.selectedStation = station;

		// this.notifications.create('warn', 'playStation station ' + station);

		this.streaming.play(station);

		// if(station == '97') {

		// 	this.streaming97.selectedStation = '97';
		// 	this.streaming1075.selectedStation = '97';
			
			
		// 	if(this.streaming1075.player) {
		// 		this.streaming1075.pause();
		// 	}
			
		// 	if(this.streaming97.player) {
		// 		this.isPlaying = true;
		// 		this.streaming97.play();
		// 	} else {
		// 		this.isPlaying = false;
		// 		this.isLoading = true;
		// 		this.streaming97.play();
		// 	}
		// }

		// if(station == '107.5') {

		// 	this.streaming97.selectedStation = '107.5';
		// 	this.streaming1075.selectedStation = '107.5';
			
		// 	if(this.streaming97.player) {
		// 		this.streaming97.pause();
		// 	}

		// 	if(this.streaming1075.player) {
		// 		this.notifications.create('warn', '107.5 has player');
		// 		this.isPlaying = true;
		// 		this.streaming1075.play();
		// 	} else {
		// 		this.notifications.create('warn', '107.5 no player');
		// 		this.isPlaying = false;
		// 		this.isLoading = true;
		// 		this.streaming1075.play();
		// 	}
		// }
	}
	
	/**
	 * Plays/pauses audio streaming97
	 *
	 * @return     void
	 */
	toggleStreamingPlayer(): void {

		// this.notifications.create('warn', 'toggleStreamingPlayer 97 status: ' + this.streaming97.status);
		// this.notifications.create('warn', 'toggleStreamingPlayer 197.5 status: ' + this.streaming1075.status);

		// if(this.streaming97.status == 'loading' || this.streaming1075.status == 'loading') {
		// 	return;
		// }

		// this.isLoading = false;

		// if(this.streaming97.is_playing) {
		// 	this.streaming97.pause();
		// } else if (this.selectedStation == '97') {
		// 	this.streaming97.play();
		// } else if(this.streaming1075.is_playing) {
		// 	this.streaming1075.pause();
		// } else if (this.selectedStation == '107.5') {
		// 	this.streaming1075.play();
		// }
	}
	
	/**
	 * Removes a notification.
	 *
	 * @param      string  id      The identifier
	 * @return     void
	 */
	removeNotification(id: string): void{
		this.notifications.remove(id);
	}
	  
	showPlayer(event) {
		console.log('showPlayer');
		this.ngZone.run(() => {
			this.playeractive = true;
			this.playlistactive = false;
			this.isLoading = false;
		});
	}
	
	showPlaylist(event) {
		console.log('showPlaylist');
		this.ngZone.run(() => {
			this.playeractive = false;
			this.playlistactive = true;
			this.isLoading = false;
		});
	}

	openFBMessenger() {
		this.fbMsg.openMessenger();
	}

	/**
	 * Sets the tracks for the tracklist
	 *
	 * @return     void
	 */
	setTracks(): void{
		//Clone npService's recentlyPlayed array and then reverse newly created one
		this.tracks = Object.assign([], this.npService.recentlyPlayed).reverse();
	}
	
	initTrackList() {

		//Set tracksLoading variable
		this.tracksLoading = true;

		//If iTunes formatting enabled, format all tracks
		if(this.npService.shouldFormatTracks() && this.npService.recentlyPlayed.length){
			//Set tracks
			this.setTracks();
		}

		//Watch npService npUpdate event
		this.npService.npUpdate.subscribe((updated) => {
			this.setTracks();
		});

		//Set tracksLoading to false
		this.tracksLoading = false;
	}

}
