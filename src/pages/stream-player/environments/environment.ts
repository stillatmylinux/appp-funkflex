// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
	production: false,
	now_playing: {
		provider: 1,
		data_url: 'https://np.tritondigital.com/public/nowplaying?mountName=WQHT&numberToFetch={{limit}}&eventType=track',
		data_aac_url: 'https://np.tritondigital.com/public/nowplaying?mountName=WQHTAAC&numberToFetch={{limit}}&eventType=track',
		generic_cover: './assets/img/Hot-97-NYC-Logo-1.jpg',
		format_tracks: true,
		default_title: '',
		default_artist: ''
	},
	streaming: {
		url: 'https://playerservices.streamtheworld.com/pls/WQHT.pls',
		format: ['mp3'],
		html5: true,
		autoplay: true
	},
	aac_streaming: {
		url: 'https://playerservices.streamtheworld.com/pls/WQHTAAC.pls',
		format: ['aac','mp3'],
		html5: true,
		autoplay: true
	}
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
