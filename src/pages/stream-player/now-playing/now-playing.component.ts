import { Component, Input } from '@angular/core';
import { Track } from '../_models/track.model';

@Component({
	selector: 'app-now-playing',
	templateUrl: './now-playing.component.html',
	styles: ['now-playing.component.scss']
})
export class NowPlayingComponent {
	
	@Input() currentTrack: Track;
	@Input() trackLoaded: boolean;

	constructor() {}
}
