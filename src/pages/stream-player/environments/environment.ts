// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
	production: false,
	now_playing: {
		data_url: 'https://np.tritondigital.com/public/nowplaying?mountName={{station}}&numberToFetch={{limit}}&eventType=track',
		data_aac_url: 'https://np.tritondigital.com/public/nowplaying?mountName=WQHTAAC&numberToFetch={{limit}}&eventType=track',
		generic_cover: './assets/img/Hot-97-NYC-Logo-1.jpg',
		format_tracks: true,
		default_title: '',
		default_artist: ''
	},
	streaming: {
		url: {
			'97': 'https://playerservices.streamtheworld.com/pls/WQHT.pls',
			'107.5': 'https://playerservices.streamtheworld.com/pls/WBLSFM.pls'
		},
		stations: [
			{
				name: '97',
				callsign: 'WQHT',
				url: 'https://playerservices.streamtheworld.com/pls/WQHT.pls',
				cover_art: './assets/img/Hot-97-NYC-Logo-1.jpg',
				autoplay: true
			},
			{
				name: '107.5',
				callsign: 'WBLSFM',
				url: 'https://playerservices.streamtheworld.com/pls/WBLSFM.pls',
				cover_art: './assets/img/wbls.png',
			},
		],
		format: ['mp3'],
		html5: true
	}
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
