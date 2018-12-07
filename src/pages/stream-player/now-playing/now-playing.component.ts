import { Component, OnInit, NgZone } from '@angular/core';
import { NowPlayingService } from '../_services/now-playing.service';
import { NotificationsService } from '../_services/notifications.service';
import { Track } from '../_models/track.model';
import { TritonDigitalService } from "../_services/tritondigital.service";

@Component({
	selector: 'app-now-playing',
	templateUrl: './now-playing.component.html',
	styles: ['now-playing.component.scss']
})
export class NowPlayingComponent implements OnInit {
	
	currentTrack: Track;
	trackLoaded: boolean;

	constructor(
		private ngZone: NgZone,
		private npService: NowPlayingService,
		private streaming: TritonDigitalService,
		private notifications: NotificationsService
	) {}

	ngOnInit() {

		this.trackLoaded = false;
		this.currentTrack = this.npService.dummyTrack();

		//Load current track onInit
		this.getCurrentTrack();

		//Watch when streaming is played to keep now playing up-to-date
		this.streaming.played.subscribe(() => {
			//Set current track
			this.getCurrentTrack();
		});
	}

	/**
	 * Gets and sets the current track.
	 *
	 * @return     void
	 */
	getCurrentTrack(): void{

		// console.log('getCurrentTrack');
		//Set trackLoaded to false
		// this.trackLoaded = false;


		//Retrieve current track
		this.npService.fetch(1).subscribe((response) => {

			if(response && response.length === 0)
				return;

			//Format current track with iTunes
			this.npService.formatItunes(response[0]).subscribe((response) => {

					//Update currentTrack
					this.currentTrack = response;

					//Set trackLoaded
					this.trackLoaded = true;

					//Set timeout until next expected track
					this.ngZone.runOutsideAngular(()=>{
						setTimeout(() => {
							this.getCurrentTrack();
						}, this.currentTrack.timeUntilEnds());
					})

					//Push current track to recentlyPlayed if is different that latest
					if(response && !this.npService.hasTrackHasBeenRecentlyPlayed(response)){
						this.npService.addRecentlyPlayed(response);

						//Emit npUpdate event
						this.npService.npUpdate.next(true);
					}

			});
			
		}, (error) => {
			setTimeout(() => {
				//Add error notification
				this.notifications.create('error', 'Unable to load now playing information.');

				//Set track with dummy track
				this.currentTrack = this.npService.dummyTrack();

				//Set trackLoaded to true
				this.trackLoaded = true;

				//Set 10 second timeout and check for track again
				setTimeout(() => {
					this.getCurrentTrack();
				}, 30000);
			}, 500);
		});
	}

}
