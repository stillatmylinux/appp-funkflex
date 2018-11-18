import {Injectable} from '@angular/core';
import { Platform, Events } from 'ionic-angular';

@Injectable()
export class FBMessengerService {

	constructor(
		public events: Events,
		private platform: Platform
	) { }

	openPage(page) {
		this.events.publish('openpage', page);
	}

	openMessenger() {
		if(!this.platform.is('ios') && !this.platform.is('android')) {
			this.openPage( {url:'https://www.messenger.com/t/funkflex', target:'_blank', extra_classes:'system'} );
		} else if(this.platform.is('ios')) {
			this.openPage( { url:'fb-messenger://user-thread/63447391760', target:'_blank', extra_classes:'system'} );
		} else if(this.platform.is('android')) {
			this.openPage({'url':'fb-messenger://user/63447391760',target:'_blank', extra_classes:'system'});
		}
	}
}