export const environment = {
	production: true,
	now_playing: {
		data_url: 'https://np.tritondigital.com/public/nowplaying?mountName=WSPKFMAAC&numberToFetch={{limit}}&eventType=track',
		generic_cover: './assets/img/generic-cover-art.jpg',
		format_tracks: true,
		default_title: 'Unknown Title',
		default_artist: 'Unknown Artist'
	},
	streaming: {
		url: {
			'97': 'https://playerservices.streamtheworld.com/pls/WQHT.pls',
			'107.5': 'https://playerservices.streamtheworld.com/pls/WBLSFM.pls',
		},
		format: ['mp3'],
		html5: true,
		autoplay: true
	}
};
