import {Component, OnInit, NgZone, ChangeDetectorRef} from '@angular/core';
import 'rxjs/add/operator/map';

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
	public logo_exists: boolean;
	public isPlaying: boolean = false;
	public isLoading: boolean = true;
	public playeractive: boolean;
	public playlistactive: boolean;
	public currentTrack: Track;
	public trackLoaded: boolean;
	public tracks: Array<Track> = [];
	public tracksLoading: boolean;
	public selectedStation = '97';
	public testClass: string = 'test-class-null';

	constructor(
		private ngZone: NgZone,
		private fbMsg: FBMessengerService,
		private npService: NowPlayingService,
		public navParams: NavParams,
		public streaming: StreamingService,
		public notifications: NotificationsService,
		private cd: ChangeDetectorRef
	) {
		this.playlistactive = false;
		this.playeractive = true;
		this.currentTrack = this.npService.dummyTrack();
		this.trackLoaded = true;
		this.tracksLoading = false;
	}

	ngOnInit() {

		this.initTrackList();

		this.streaming.isPlaying().subscribe(isPlaying => {
			let msg = 'StreamPlayerComponent stream-player is ' + ((isPlaying) ? 'playing' : 'stopped');
			console.log(msg);
			this.ngZone.run(() => {
				this.isPlaying = isPlaying;
			});
		});

		this.streaming.isLoading().subscribe(isLoading => {
			let msg = 'StreamPlayerComponent stream-player is ' + ((isLoading) ? 'loading' : 'loaded');
			console.log(msg);
			this.ngZone.run(() => {
				this.isLoading = isLoading;
			});
		});

		this.npService.trackObs.subscribe( track => {
			this.currentTrack = track;
		})
	}

	playStation(station: string) {

		console.log('StreamPlayerComponent playStation station', station)

		if(this.selectedStation == station)
			return;

		this.streaming.is_loading = true;
		this.cd.detectChanges();
		this.selectedStation = station;
		this.streaming.play(station);
		this.currentTrack = this.npService.dummyTrack();
		this.npService.getCurrentTrack();
	}

	/**
	 * Plays/pauses audio streaming97
	 *
	 * @return     void
	 */
	toggleStreamingPlayer(): void {

		if(this.streaming.is_loading) {
			return;
		}

		this.isLoading = false;

		if(this.streaming.is_playing) {
			this.streaming.player.pause();
			this.streaming.is_playing = false;
		} else {
			this.streaming.player.play();
			this.streaming.is_playing = true;
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
