import { Subject } from "rxjs/Subject";
import { NotificationsService } from '../_services/notifications.service';
import { Observable } from "rxjs";

export class RadioStation {
	public name: string;
	public callsign: string;
	public streaming_url: string;
	public cover_art: string;
	public is_playing: boolean = false;
	public currentSourceIndex: number = 0;
	public autoplay:boolean = false;
	public reconnectionDelay: number; // seconds
	public streamingSources: Array<string>;
	public isCurrentPlayingStation: boolean = false;
	public status: string;
	// public media: Media;

	public isPlayingObs = new Subject<boolean>();
	public isLoadingObs = new Subject<boolean>();

	public constructor(
		station: {name, callsign, url, cover_art, autoplay?}
	) {
		this.name = station.name;
		this.callsign = station.callsign;
		this.streaming_url = station.url;
		this.cover_art = station.cover_art;
	
		if(station.autoplay) {
			this.autoplay = station.autoplay;
		}
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

	startLoading() {
		console.log('RadioStation startLoading', true)
		this.isLoadingObs.next(true);
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