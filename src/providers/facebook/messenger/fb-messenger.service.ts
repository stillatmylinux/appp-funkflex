import {Injectable} from '@angular/core';
import {Platform, Events, ToastController} from 'ionic-angular';

@Injectable()
export class FBMessengerService {

	constructor(
		public events: Events,
		private platform: Platform,
		private toastCtrl: ToastController
	) { }

	openPage(page) {
		this.events.publish('openpage', page);
	}

	openMessenger() {
		if(!this.platform.is('ios') && !this.platform.is('android')) {
			this.openPage( {url:'https://www.messenger.com/t/funkflex', target:'_blank', extra_classes:'system'} );
		} else if(this.platform.is('ios')) {
			this.openPage( { url:'fb-messenger://user-thread/63447391760', target:'_blank', extra_classes:'system'} );
			this.toastError(true);
		} else if(this.platform.is('android')) {
			this.openPage({url:'fb-messenger://user/63447391760',target:'_blank', extra_classes:'system'});
			this.toastError(false);
		}
	}

	toastError(isIos: boolean) {
		let toast = this.toastCtrl.create({
			message: 'Messenger not installed ',
			showCloseButton: true,
			closeButtonText: "Click Here",
			position: 'top'
		});
		let auto = false;
		setTimeout(() => {
			auto = true;
			if (toast) {
				toast.dismissAll();
			}
		}, 3000);
		toast.onDidDismiss(() => {
			if (!auto) {
				this.openPage( { url:'https://www.messenger.com/t/funkflex', target:'_blank', extra_classes:'system'} );
			}
		});
		toast.present();
	}
}
