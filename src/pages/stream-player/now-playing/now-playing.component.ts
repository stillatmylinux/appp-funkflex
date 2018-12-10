import { Component, OnInit, OnDestroy } from '@angular/core';
import { NowPlayingService } from '../_services/now-playing.service';
import { NotificationsService } from '../_services/notifications.service';
import { Track } from '../_models/track.model';
import { TritonDigitalService } from "../_services/tritondigital.service";
import { Observable } from 'rxjs';

@Component({
	selector: 'app-now-playing',
	templateUrl: './now-playing.component.html',
	styles: ['now-playing.component.scss']
})
export class NowPlayingComponent implements OnInit, OnDestroy {
	
	currentTrack: Track;
	trackObs: Observable<Track>;
	trackLoaded: boolean;
	timeoutId: any;
	observer: any;
	lastTrack: Track;
	lastTrackCount: number;

	constructor(
		private npService: NowPlayingService,
		private streaming: TritonDigitalService,
		private notifications: NotificationsService
	) {}

	ngOnInit() {

		this.trackLoaded = false;
		this.lastTrackCount = 0;

		//Load current track onInit
		this.trackObs = this.getCurrentTrackObs();
		this.trackObs.subscribe(track => {

			this.trackLoaded = true;

			if(!this.lastTrack || this.lastTrack.title != track.title) {
				
				this.lastTrack = track;
				this.lastTrackCount = 0;

				// Only change the playing now if there are two.
				// This ensures that the feed is updating and we are 
				// displaying the correct image

				if(this.npService.tracksList.length && this.npService.tracksList.length > 1 ) {
					this.currentTrack = track;
				} else {
					this.currentTrack = this.npService.dummyTrack();
				}
			}

			if(this.lastTrack.title == track.title) {
				this.lastTrackCount++;
				console.log('lastTrackCount', this.lastTrackCount);
				if(this.lastTrackCount > 30) {
					// using the dummy track if the feed doesn't update
					this.currentTrack = this.npService.dummyTrack();
				}
			}
		});
		
		//Watch when streaming is played to keep now playing up-to-date
		this.streaming.played.subscribe(() => {
			//Set current track
			console.log('streaming.played');
			console.log('Set current track');
			// this.getCurrentTrack();
		});

	}

	getCurrentTrackObs(): Observable<Track> {
		return Observable.create( observer => {
			this.observer = observer;
			observer.next(this.npService.dummyTrack());
			
			// start the recursive function looping
			this.getCurrentTrack();
		});
	}

	/**
	 * Gets and sets the current track.
	 *
	 * @return     void
	 */
	getCurrentTrack() {

		this.npService.fetch(1).subscribe((response) => {
			if(response && response.length === 0)
				return;

			//Format current track with iTunes
			this.npService.formatItunes(response[0]).subscribe((track) => {

				this.trackLoaded = true;
				this.observer.next(track);

				//Push current track to recentlyPlayed if is different that latest
				if(track && !this.npService.hasTrackHasBeenRecentlyPlayed(track)){
					this.npService.addRecentlyPlayed(track);

					//Emit npUpdate event
					this.npService.npUpdate.next(true);
				}

				let timeout = track.timeUntilEnds();
				if(this.lastTrackCount > 30) {
					// the feed hasn't updated in a while, check every 30 seconds instead
					timeout = 30000;
				}

				this.timeoutId = setTimeout(() => {
					this.getCurrentTrack();
				}, timeout);
			}, (error) => {
				setTimeout(() => {
					//Add error notification
					this.notifications.create('error', 'Unable to load now playing information.');

					//Set track with dummy track
					this.currentTrack = this.npService.dummyTrack();

					//Set trackLoaded to true
					if(!this.trackLoaded) {
						this.trackLoaded = true;
					}

					//Set 10 second timeout and check for track again
					setTimeout(() => {
						this.getCurrentTrack();
					}, 30000);
				}, 500);
			});
		});

		
	}

	ngOnDestroy() {
		clearTimeout(this.timeoutId);
	}
}
