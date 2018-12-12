import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

import * as xml2js from 'xml2js';

// creation and utility methods
import { Observable, Subject, pipe } from 'rxjs';
// operators all come from `rxjs/operators`
import { map, filter, catchError, mergeMap } from 'rxjs/operators';

import { Track } from '../_models/track.model';
import { TritonDigitalService } from './tritondigital.service';
import { NotificationsService } from './notifications.service';

@Injectable({
	providedIn: 'root'
})
export class NowPlayingService {

	public recentlyPlayed: Track[] = [];
	public searchedItunes: Track[] = [];

	public npUpdate: EventEmitter<boolean> = new EventEmitter();
	public count_streaming_played_subscribe = 0;
	public lastFetchTime: number = 0;
	public tracksList: Track[] = [];
	private observer: any;
	public trackLoaded: boolean;
	public lastTrackCount: number;
	public trackObs: Observable<Track>;
	public lastTrack: Track;
	public currentTrack: Track;

	constructor(
		private http: HttpClient,
		private streaming: TritonDigitalService,
		private notifications: NotificationsService
	) {
		this.trackLoaded = false;
		this.lastTrackCount = 0;
		this.currentTrack = this.dummyTrack();

		//Load current track onInit
		this.trackObs = this.getCurrentTrackObs();
		this.trackObs.subscribe(track => {

			this.trackLoaded = true;

		});
		
		//Watch when streaming is played to keep now playing up-to-date
		this.streaming.played.subscribe(() => {
			//Set current track
			console.log('streaming.played');
			console.log('Set current track');
			// this.getCurrentTrack();
		});
	}

	/**
	 * Returns a dummy track using default title & artist from environment
	 *
	 * @return     Track  Dummy track object
	 */
	dummyTrack(): Track{
		let dateObj = new Date();
		return new Track({
			title: environment.now_playing.default_title,
			artist: environment.now_playing.default_artist,
			// string otherwise you'll "trim is not a function"
			played_at: dateObj.getTime().toString(),
			duration: '00:00:10'
		});
	}

	/**
	 * Determines if track has been recently played.
	 *
	 * @param      Track   track   The track
	 * @return     boolean  True if has track has been recently played, False otherwise.
	 */
	hasTrackHasBeenRecentlyPlayed(track: Track): boolean{
		return this.recentlyPlayed.find(obj => obj['played_at'] == track['played_at']) !== undefined;
	}

	/**
	 * Gets the recently played list in reverse
	 *
	 * @return     Track[]  The reversed recently played list.
	 */
	getRecentlyPlayed(): Track[]{
		return this.recentlyPlayed.reverse();
	}

	/**
	 * Adds a track to recentlyPlayed array.
	 *
	 * @param      Track  track   The track
	 */
	addRecentlyPlayed(track: Track): void{

		if(track){

			let nextIndex = this.recentlyPlayed.length;

			this.recentlyPlayed[nextIndex] = track;

		}
	}

	/**
	 * Returns environment variable to determine if formatting with iTunes
	 * should be attempted
	 *
	 * @return     boolean  True, False otherwise
	 */
	shouldFormatTracks(): boolean{
		return environment.now_playing.format_tracks;
	}

	/**
	 * Formats a track using iTunes Search API
	 *
	 * @param      Track  track   The track
	 * @return     Track  The formatted track object
	 */
	formatItunes(track: Track){
		let searchUrl = 'https://itunes.apple.com/search?term=';

		searchUrl += encodeURI(track.title + ' by ' + track.artist);
		
		searchUrl += "&limit=1&entity=song";
		
		let existingTrack = this.searchedItunes.find(obj => (obj['title'] == track['title']) && (obj['artist'] == track['artist']));


		if(existingTrack) {

			// console.log('old search iTunes', existingTrack);

			return Observable.create( observer => {
				observer.next(existingTrack);
				observer.complete();
			});
		} else {

			// console.log('search iTunes');

			if(track.title == 'CAMILO COMMERCIAL FREE MIX') {
				// track.cover_art = 'https://i1.sndcdn.com/avatars-000069594518-o46d51-t200x200.jpg';
				track.duration = 600000;
				this.searchedItunes.push(track);
				return Observable.create( observer => {
					observer.next(track);
					observer.complete();
				});
			}

			return this.http.get(searchUrl).pipe(
				map((results: any) => {
	
					// console.log(results);
					if(results.resultCount >= 1){
						results.results.map((result: any) => {
							track.title = result.trackCensoredName;
							track.album = result.collectionCensoredName;
							track.artist = result.artistName;
							track.cover_art = result.artworkUrl100.replace('100x100', '256x256');
						})
					}

					this.searchedItunes.push(track);
	
					return track;
				})
			);
		}

	}

	stopRepeatFetch() {
		let now: any = new Date();
		let currentFetchTime = Math.ceil(now / 1000);

		// console.log('currentFetchTime', currentFetchTime)
		// console.log('this.lastFetchTime', this.lastFetchTime)

		if(this.lastFetchTime + 5 > currentFetchTime) {
			// console.log('stopRepeatFetch stop')
			return true;
		} else {
			// console.log('stopRepeatFetch allow')
			return false;
		}
	}

	setLastFetchTime() {
		let date: any = new Date();
		this.lastFetchTime = Math.ceil(date / 1000);
		// console.log('setLastFetchTime', this.lastFetchTime)
	}

	/**
	 * Fetches tracks from now playing service provider
	 *
	 * @param      number  limit   The limit
	 * @return     array   Array of tracks
	 */
	fetch(limit): Observable<Track[]> {
		let dataUrl = environment.now_playing.data_url.replace('{{limit}}', limit);

		if(this.stopRepeatFetch()) {
			return Observable.create( observer => {
				observer.next(this.tracksList);
				observer.complete();
			});
		}
		
		this.setLastFetchTime();

		console.log('fetching', dataUrl);

		return this.http.get(dataUrl, {
			responseType: 'text'
		}).pipe(
		    map((data: any) => {
		        const results: any = [];

		        this.tracksList = [];

		        if(environment.now_playing.provider == 1){
		        	// Triton Digital

		        	// Parse XML to JSON
			        xml2js.parseString(data, (error, parsed) => {

			        	//If list of tracks is found, begin loop
			        	if(parsed['nowplaying-info-list'] && parsed['nowplaying-info-list']['nowplaying-info']){

			        		//Loop through track properties and populate trackData
			        		for(let track of parsed['nowplaying-info-list']['nowplaying-info']){

			        			//Create track data for later use
			        			let trackData = {};

			        			track['property'].map((prop) => {
			        				if(prop['$']['name'] == "cue_title"){
			        					trackData['title'] = prop['_'];
			        				}else if(prop['$']['name'] == "track_artist_name"){
			        					trackData['artist'] = prop['_'];
			        				}else if(prop['$']['name'] == "track_album_name"){
			        					trackData['album'] = prop['_'];
			        				}else if(prop['$']['name'] == "cue_time_start"){
			        					trackData['played_at'] = prop['_'];
			        				}else if(prop['$']['name'] == "cue_time_duration"){
			        					trackData['duration'] = prop['_'];
			        				}
			        			});

			        			// If track doesn't have played_at grab it from timestamp attribute
			        			if(trackData['played_at'] == undefined){
			        				trackData['played_at'] = track['$']['timestamp'] * 1000;
			        			}

			        			// Push new Track to tracksList
								this.tracksList.push(new Track(trackData));
								
								console.log('NowPlayingService fetch Track', this.tracksList[0]);
			        		}
			        	}
			        });
		        }else if(environment.now_playing.provider == 2){
		        	// RadioDJ

		        	// Parse JSON
		        	let trackData = JSON.parse(data);

		        	// Push new track to tracksList
	        		this.tracksList.push(new Track(trackData));

		        }

		       	// Return formatted tracksList 
		        return this.tracksList;
		    }
		    )
		);
	}

	getCurrentTrackObs(): Observable<Track> {
		return Observable.create( observer => {
			this.observer = observer;
			observer.next(this.dummyTrack());
			
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

		this.fetch(1).subscribe((tracks) => {

			if(tracks && tracks.length === 0)
				return;

			let hasCoverArt = false;
			let _track = tracks[0];
			let timeout = _track.timeUntilEnds();
			
			if(!this.lastTrack || this.lastTrack.title != _track.title) {
				
				this.lastTrack = _track;
				this.lastTrackCount = 0;

				// Only change the playing now if there are two.
				// This ensures that the feed is updating and we are 
				// displaying the correct image

				// if(this.tracksList.length && this.tracksList.length > 1 ) {
				// 	this.currentTrack = _track;
				// } else {
				// 	hasCoverArt = true;
				// 	this.currentTrack = this.dummyTrack();
				// 	this.observer.next(this.currentTrack);
				// 	setTimeout(() => {
				// 		this.getCurrentTrack();
				// 	}, 30000);

				// 	return;
				// }
			}

			// console.log('lastTrack track', this.lastTrack, _track);
			// console.log('lastTrack track titles', this.lastTrack.title, _track.title);

			if(this.lastTrack.title == _track.title) {
				this.lastTrackCount++;
				console.log('lastTrackCount', this.lastTrackCount);
				if(this.lastTrackCount > 30) {
					// using the dummy track if the feed doesn't update
					hasCoverArt = true;
					this.currentTrack = this.dummyTrack();
					this.observer.next(this.currentTrack);
					setTimeout(() => {
						this.getCurrentTrack();
					}, 30000);
					
					return;
				}
			}

			if(!hasCoverArt) {
				//Format current track with iTunes
				this.formatItunes(_track).subscribe((track) => {

					this.trackLoaded = true;
					this.observer.next(track);

					//Push current track to recentlyPlayed if is different that latest
					if(track && !this.hasTrackHasBeenRecentlyPlayed(track)){
						this.addRecentlyPlayed(track);

						//Emit npUpdate event
						this.npUpdate.next(true);
					}

					
					if(this.lastTrackCount > 30) {
						// the feed hasn't updated in a while, check every 30 seconds instead
						timeout = 30000;
					}

					setTimeout(() => {
						this.getCurrentTrack();
					}, timeout);
				}, (error) => {
					setTimeout(() => {
						//Add error notification
						this.notifications.create('error', 'Unable to load now playing information.');

						//Set track with dummy track
						this.currentTrack = this.dummyTrack();
						this.observer.next(this.currentTrack);

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
			}
			
		});

		
	}
}
