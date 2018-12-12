import { Component, Input } from '@angular/core';
import { Track } from '../_models/track.model';

@Component({
	selector: 'app-playlist',
	templateUrl: './playlist.component.html',
	styles: ['playlist.component.scss']
})
export class PlaylistComponent {

	@Input() tracks: Track[];

	@Input() tracksLoading: boolean;

	constructor() { }

}
