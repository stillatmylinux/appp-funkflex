import { environment } from '../environments/environment';

export class Track {
	title: string;
	artist: string;
	album: string;
	cover_art: string;
	purchase_link: string;
	duration: any;
	played_at: any;
	ends_at: any;

	/**
	 * 
		<?xml version="1.0" encoding="UTF-8"?>
		<nowplaying-info-list>
			<nowplaying-info mountName="WQHTAAC" timestamp="1543777744" type="track">
				<property name="cue_time_duration">
					<![CDATA[00:04:02]]>
				</property>
				<property name="cue_time_start">
					<![CDATA[1543777699424]]>
				</property>
				<property name="cue_title">
					<![CDATA[Walk It Talk It (feat. Drake)]]>
				</property>
				<property name="program_id">
					<![CDATA[{cartNumber}]]>
				</property>
				<property name="track_album_name">
					<![CDATA[Finessed Flow]]>
				</property>
				<property name="track_artist_name">
					<![CDATA[Migos]]>
				</property>
				<property name="track_nowplaying_url">
					<![CDATA[https://metadata.listenlive.co/metadata/song/d3/1a98fa04cdbf5e706007df5505d686f1.json]]>
				</property>
			</nowplaying-info>
		</nowplaying-info-list>


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
	 */

	constructor(data: any){
		
		// console.log(data);

		this.title = (data['title']) ? data['title'].trim() : '';
		this.artist = (data['artist']) ? data['artist'].trim() : '';
		this.album = (data['album']) ? data['album'].trim() : '';
		this.cover_art = (data['cover_art']) ? data['cover_art'].trim() : '';
		this.purchase_link = (data['purchase_link']) ? data['purchase_link'].trim() : '';
		this.duration = (data['duration']) ? data['duration'].trim() : '';
		this.played_at = (data['played_at']) ? data['played_at'].trim() : '';


		let date = new Date();
		// console.log('now', date, this.played_at);

		let played_at = new Date((this.played_at / 1000) * 1000);
		// console.log('played at', played_at);

		if(this.played_at && this.duration){
			var duration = this.formatDurationTime( this.duration );
			this.ends_at = ((this.played_at / 1000) + (duration / 1000)) * 1000;
			// console.log('ends_at', this.ends_at);
		}

		let ends_in = this.ends_at - date.getTime();
		// console.log('timeUntilEnds ends_in', ends_in);

		if(!this.cover_art && environment.now_playing.generic_cover){
			this.cover_art = environment.now_playing.generic_cover;
		}

		if(this.played_at && this.duration){
			this.duration = this.formatDurationTime( this.duration );
			this.ends_at = ((this.played_at / 1000) + (this.duration / 1000)) * 1000;
		}else{
			this.ends_at = (new Date).getTime() + 30000;
		}
	}

	/**
	 * Turns 00:03:12
	 * Into 192000
	 * @param time string
	 */
	formatDurationTime( time ) {
		// console.log('formatDurationTime time', time)
		return (Number(time.split(':')[0])*3600+Number(time.split(':')[1])*60+Number(time.split(':')[2]))*1000;	
	}

	/**
	 * Determines if track has ended.
	 *
	 * @return     boolean  True if has ended, False otherwise.
	 */
	hasEnded(){
		let date = new Date();
		return date.getTime() >= this.ends_at;
	}

	/**
	 * Returns time until track ends
	 *
	 * @return     number  Milliseconds until track ends
	 */
	timeUntilEnds(){
		let date = new Date();
		let ends_in = this.ends_at - date.getTime();
		return (ends_in < 0) ? 10000 : ends_in;
	}

	/**
	 * Returns played_at Date object
	 *
	 * @return     Date  Played_at date object
	 */
	playedAtDate(): Date{
		return new Date(this.played_at);
	}
}