import { Component, OnInit, NgZone } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { TritonDigitalService } from "./_services/tritondigital.service";
import { NotificationsService } from './_services/notifications.service';
import { FBMessengerService } from "../../providers/facebook/messenger/fb-messenger.service";

@Component({
  selector: 'app-stream-player',
  templateUrl: 'stream-player.component.html'
})
export class StreamPlayerComponent implements OnInit {

	public radioState: string = 'player';
	public show_stream_logo: string = '';
	public stream_logo_url: string = '';
	public logo_exists: boolean;
	public isPlaying: boolean = false;
	public isLoading: boolean = true;

	constructor(
		private http: Http,
		private ngZone: NgZone,
		private fbMsg: FBMessengerService,
		public streaming: TritonDigitalService,
    	private notifications: NotificationsService
	) {
		this.stream_logo_url = 'assets/stream-logo.png';
		this.addLogo();
	}

	ngOnInit() {
		console.log('StreamPlayerComponent ngOnInit')
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
		})
	}

	loadPlaylist($event) {
		$event.preventDefault();
		$event.stopPropagation();
	
		this.radioState = 'playlist';
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
		this.radioState = 'player';
		this.isLoading = false;
	}
	
	showPlaylist(event) {
		console.log('showPlaylist');
		this.radioState = 'playlist';
		this.isLoading = false;
	}

	openFBMessenger() {
		this.fbMsg.openMessenger();
	}

	addLogo() {
		// check if logo file exists. If so, show it
		this.checkLogo().then( data => {
			
		}).catch( e => {
			// no logo, do nothing
			// console.log(e)
		})
	}

	checkLogo() {

		return new Promise( (resolve, reject) => {
	
				if(this.logo_exists) {
					// logo exists, we already checked
					resolve(this.stream_logo_url);
				} else if(this.logo_exists === false) {
					// logo does not exists, we already checked
					reject();
				} else {
	
					// not sure if logo exists, check please
	
					this.http.get( './' + this.stream_logo_url )
							.subscribe(data => {

								this.logo_exists = true;
		
								// logo file exists, return url 
								resolve(this.stream_logo_url);
							},
							error => {
	
								this.logo_exists = false;
		
								// logo file does not exist
								reject(error);
							});
				}
	
			});
	  }

}
