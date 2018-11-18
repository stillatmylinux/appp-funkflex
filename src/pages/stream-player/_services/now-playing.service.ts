import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

import * as xml2js from 'xml2js';

// creation and utility methods
import { Observable, Subject, pipe } from 'rxjs';
// operators all come from `rxjs/operators`
import { map, filter, catchError, mergeMap } from 'rxjs/operators';

import { Track } from '../_models/track.model';

@Injectable({
	providedIn: 'root'
})
export class NowPlayingService {

	public recentlyPlayed: Track[] = [];
	public searchedItunes: Track[] = [];

	public npUpdate: EventEmitter<boolean> = new EventEmitter();

	constructor(private http: HttpClient) { }

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
			played_at: dateObj.getTime(),
			duration: 10000
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

			console.log('old search iTunes', existingTrack);

			return Observable.create( observer => {
				observer.next(existingTrack);
				observer.complete();
			});
		} else {

			console.log('search iTunes');

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
	
					console.log(results);
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

	/**
	 * Fetches tracks from now playing service provider
	 *
	 * @param      number  limit   The limit
	 * @return     array   Array of tracks
	 */
	fetch(limit): Observable<Track[]> {
		let dataUrl = environment.now_playing.data_url.replace('{{limit}}', limit);

		console.log('fetching', dataUrl);

		return this.http.get(dataUrl, {
			responseType: 'text'
		}).pipe(
		    map((data: any) => {
		        const results: any = [];

		        let tracksList = [];

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
								tracksList.push(new Track(trackData));
								
								console.log('Track', tracksList[0]);
			        		}
			        	}
			        });
		        }else if(environment.now_playing.provider == 2){
		        	// RadioDJ

		        	// Parse JSON
		        	let trackData = JSON.parse(data);

		        	// Push new track to tracksList
	        		tracksList.push(new Track(trackData));

		        }

		       	// Return formatted tracksList 
		        return tracksList;
		    }
		    )
		);
	}
}
