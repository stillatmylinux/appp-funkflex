import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { NotificationsService } from '../_services/notifications.service';
import { Media } from "@ionic-native/media";
import { RadioStation } from "../_models/radioStation.model";
import { Observable, Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class StreamingService {

	public stations: Array<RadioStation> = [];
	public currentStation: RadioStation;

	public isPlayingObs = new Subject<boolean>();
	public isLoadingObs = new Subject<boolean>();

	constructor(
		private notifications: NotificationsService,
		private http: HttpClient,
		private media: Media
	) {
		this.getStations();
		this.initFirstStation();
	}

	private getStations() {
		environment.streaming.stations.forEach((station, index) => {

			this.stations.push(new RadioStation(
				station,
				this.http,
				this.media,
				this.notifications
			));


			/**
			 * WHY DO WE NEED TO DO THIS????
			 */

			this.stations[index].isLoading().subscribe(is_loading => {

				// @TODO we need to pass with station is loading too

				this.isLoadingObs.next(is_loading);
			});

			this.stations[index].isPlaying().subscribe(is_playing => {

				// @TODO we need to pass with station is play too

				this.isPlayingObs.next(is_playing);
			});
		});
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