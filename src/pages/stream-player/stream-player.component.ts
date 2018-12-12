import { Component, OnInit, NgZone } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { TritonDigitalService } from "./_services/tritondigital.service";
import { NotificationsService } from './_services/notifications.service';
import { FBMessengerService } from "../../providers/facebook/messenger/fb-messenger.service";
import { Track } from './_models/track.model';
import { NowPlayingService } from './_services/now-playing.service';

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

	constructor(
		private http: Http,
		private ngZone: NgZone,
		private fbMsg: FBMessengerService,
		public streaming: TritonDigitalService,
		private npService: NowPlayingService,
    	private notifications: NotificationsService
	) {}

	ngOnInit() {
		this.playlistactive = false;
		this.playeractive = true;
		this.currentTrack = this.npService.dummyTrack();
		this.trackLoaded = true;
		console.log('StreamPlayerComponent ngOnInit');
		this.streaming.isPlaying().subscribe(isPlaying => {
			let msg = 'StreamPlayerComponent stream-player is ' + ((isPlaying) ? 'playing' : 'stopped');
			console.log(msg);
			this.ngZone.run(() => {
				this.isPlaying = isPlaying;
			});
		});

		this.npService.getCurrentTrackObs().subscribe(track => {
			this.ngZone.run(()=>{
				this.currentTrack = track;
				this.trackLoaded = true;
			});
		})

		this.streaming.isLoading().subscribe(isLoading => {
			let msg = 'StreamPlayerComponent stream-player is ' + ((isLoading) ? 'loading' : 'loaded');
			console.log(msg);
			this.ngZone.run(() => {
				this.isLoading = isLoading;
			});
		})
	}
	
	/**
	 * Plays/pauses audio streaming
	 *
	 * @return     void
	 */
	toggleStreamingPlayer(): void {

		this.isLoading = false;

		if(this.streaming.playing()){
			this.streaming.pause();
		} else{
			this.streaming.resume();
		}
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

}
