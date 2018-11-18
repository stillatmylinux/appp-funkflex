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

	constructor(data: any){
		this.title = (data['title']) ? data['title'].trim() : '';
		this.artist = (data['artist']) ? data['artist'].trim() : '';
		this.album = (data['album']) ? data['album'].trim() : '';
		this.cover_art = (data['cover_art']) ? data['cover_art'].trim() : '';
		this.purchase_link = (data['purchase_link']) ? data['purchase_link'].trim() : '';
		this.duration = (data['duration']) ? data['duration'].trim() : '';
		this.played_at = (data['played_at']) ? data['played_at'].trim() : '';

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
		console.log('timeUntilEnds ends_in', ends_in);
		return (ends_in < 0) ? 30000 : ends_in;
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