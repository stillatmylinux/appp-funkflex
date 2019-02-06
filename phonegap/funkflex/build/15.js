webpackJsonp([15],{

/***/ 605:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BpNotificationsModule", function() { return BpNotificationsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bp_notifications__ = __webpack_require__(658);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BpNotificationsModule = /** @class */ (function () {
    function BpNotificationsModule() {
    }
    BpNotificationsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__bp_notifications__["a" /* BpNotifications */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__bp_notifications__["a" /* BpNotifications */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__bp_notifications__["a" /* BpNotifications */]
            ]
        })
    ], BpNotificationsModule);
    return BpNotificationsModule;
}());

//# sourceMappingURL=bp-notifications.module.js.map

/***/ }),

/***/ 658:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BpNotifications; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_globalvars_globalvars__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_header_logo_header_logo__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_device__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_buddypress_bp_provider__ = __webpack_require__(360);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var BpNotifications = /** @class */ (function () {
    function BpNotifications(nav, navParams, globalvars, loadingController, storage, toastCtrl, viewCtrl, platform, headerLogoService, Network, Device, modalCtrl, bpProvider, translate) {
        var _this = this;
        this.nav = nav;
        this.navParams = navParams;
        this.globalvars = globalvars;
        this.loadingController = loadingController;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        this.platform = platform;
        this.headerLogoService = headerLogoService;
        this.Network = Network;
        this.Device = Device;
        this.modalCtrl = modalCtrl;
        this.bpProvider = bpProvider;
        this.translate = translate;
        this.rtlBack = false;
        this.show_header_logo = false;
        this.customClasses = '';
        this.isRequests = false;
        var item = window.localStorage.getItem('myappp');
        this.route = JSON.parse(item).wordpress_url + 'wp-json/ap-bp/v1/notifications';
        if (this.navParams.get('requests')) {
            this.isRequests = true;
            this.route = JSON.parse(item).wordpress_url + 'wp-json/ap-bp/v1/friends/requests';
            this.translate.get('Requests').subscribe(function (text) {
                _this.title = text;
            });
        }
        else {
            this.translate.get('Notifications').subscribe(function (text) {
                _this.title = text;
            });
        }
        // this.setupSegments();
        if (navParams.data.is_home == true) {
            this.doLogo();
        }
        // get login data on first load
        this.storage.get('user_login').then(function (data) {
            if (data && data.user_id) {
                _this.login_data = data;
                _this.getItems();
            }
            else {
                _this.presentToast('Please log in.');
                _this.nav.pop();
            }
        });
    }
    BpNotifications.prototype.ionViewWillEnter = function () {
        if (this.platform.isRTL && this.viewCtrl.enableBack()) {
            this.viewCtrl.showBackButton(false);
            this.rtlBack = true;
        }
    };
    // setupSegments() {
    //   this.notificationSegments = [ { name: 'Friends', value: 'friends' },{ name: 'Requests', value: 'requests' } ];
    //   // fixes iphoneX status bar padding
    //   this.customClasses += ' has-favorites';
    // }
    // segmentChanged() {
    //   switch(this.segment) {
    //     case 'Friends':
    //       this.items = []
    //       this.isRequests = false;
    //       this.segmentArgs = '?user=' + this.login_data.user_id
    //       this.getItems( this.route )
    //       break;
    //     case 'Requests':
    //       this.items = []
    //       this.isRequests = true;
    //       this.segmentArgs = '/requests';
    //       this.getItems( this.route )
    //   }
    // }
    BpNotifications.prototype.getItems = function () {
        this.loading = this.loadingController.create({
            showBackdrop: false,
        });
        this.loading.present(this.loading);
        if (this.isRequests) {
            this.getRequests();
        }
        else {
            this.getNotifications();
        }
    };
    BpNotifications.prototype.getRequests = function () {
        var _this = this;
        this.bpProvider.getItems(this.route, this.login_data, 1).then(function (items) {
            // Loads posts from WordPress API
            _this.items = items;
            // this.storage.set( this.route.substr(-10, 10) + '_bp', items);
            _this.loading.dismiss();
        }).catch(function (err) {
            _this.loading.dismiss();
            _this.handleErr(err);
        });
    };
    BpNotifications.prototype.getNotifications = function () {
        var _this = this;
        // any menu imported from WP has to use same component. Other pages can be added manually with different components
        this.bpProvider.getNotifications(this.login_data).then(function (items) {
            // Loads posts from WordPress API
            _this.items = items;
            _this.loading.dismiss();
        }).catch(function (err) {
            _this.loading.dismiss();
            _this.handleErr(err);
        });
    };
    BpNotifications.prototype.clearNotification = function (notification) {
        var _this = this;
        this.bpProvider.clearNotification(notification, this.login_data).then(function (data) {
            _this.removeFromList(notification);
        }).catch(function (err) {
            _this.handleErr(err);
        });
    };
    BpNotifications.prototype.removeFromList = function (notification) {
        for (var i = this.items.length - 1; i >= 0; i--) {
            if (this.items[i].id === notification.id) {
                this.items.splice(i, 1);
                break;
            }
        }
        // refresh the list
        if (this.items.length) {
            this.items = this.items;
        }
    };
    BpNotifications.prototype.doRefresh = function (refresh) {
        this.getItems();
        // refresh.complete should happen when posts are loaded, not timeout
        setTimeout(function () { return refresh.complete(); }, 500);
    };
    BpNotifications.prototype.acceptFriendship = function (friend, withdraw) {
        var _this = this;
        var friend = friend;
        console.log(friend);
        this.bpProvider.acceptWithdrawFriendship(friend.id, this.login_data, withdraw).then(function (ret) {
            for (var i = _this.items.length - 1; i >= 0; i--) {
                if (_this.items[i].id === friend.id) {
                    console.log(_this.items[i]);
                    _this.items.splice(i, 1);
                    break;
                }
            }
            _this.presentToast(ret);
        }).catch(function (e) {
            _this.presentToast("There was a problem.");
            console.warn(e);
        });
    };
    BpNotifications.prototype.viewNotification = function (notification) {
        switch (notification.component) {
            case 'friends':
                this.showFriendRequests();
                break;
            case 'messages':
                this.nav.push('BpMessages');
                break;
            case 'activity':
                this.nav.push('BpList', { list_route: 'activity' });
                break;
            default:
                this.nav.push('PostDetailsPage', {
                    item: {
                        "content": { "rendered": notification.content },
                        "title": { "rendered": "Notification" }
                    }
                });
        }
    };
    BpNotifications.prototype.showFriendRequests = function () {
        this.nav.push('BpNotifications', {
            requests: true
        });
    };
    BpNotifications.prototype.viewMember = function (member) {
        this.nav.push('BpProfilePage', {
            user_id: member.id,
            login_data: this.login_data
        });
    };
    BpNotifications.prototype.presentToast = function (msg) {
        var _this = this;
        this.translate.get(msg).subscribe(function (translation) {
            var toast = _this.toastCtrl.create({
                message: msg,
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        });
    };
    BpNotifications.prototype.iabLink = function (link) {
        window.open(link, '_blank');
    };
    // changes the back button transition direction if app is RTL
    BpNotifications.prototype.backRtlTransition = function () {
        var obj = {};
        if (this.platform.is('ios'))
            obj = { direction: 'forward' };
        this.nav.pop(obj);
    };
    BpNotifications.prototype.doLogo = function () {
        var _this = this;
        // check if logo file exists. If so, show it
        this.headerLogoService.checkLogo().then(function (data) {
            _this.show_header_logo = true;
            _this.header_logo_url = data;
        }).catch(function (e) {
            // no logo, do nothing
            //console.log(e)
        });
    };
    // make sure user is logged in
    BpNotifications.prototype.loginCheck = function () {
        if (!this.login_data || !this.login_data.user_id) {
            this.presentToast('Please log in.');
            return false;
        }
        return true;
    };
    BpNotifications.prototype.handleErr = function (err) {
        var _this = this;
        console.error('Error getting posts', err);
        this.translate.get('Cannot show items.').subscribe(function (text) {
            var msg = text;
            if (err && err.status == 404) {
                // notifications are disabled in BuddyPress settings
                msg += ' Notifications are not enabled.';
            }
            else if (err['_body'] && JSON.parse(err['_body']).message) {
                msg += ' ' + JSON.parse(err['_body']).message;
            }
            _this.presentToast(msg);
        });
    };
    // maybe add https to avatar url
    BpNotifications.prototype.formatUrl = function (url) {
        if (!url)
            return;
        if (url.indexOf('http') >= 0) {
            return url;
        }
        else {
            return 'https:' + url;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* Content */])
    ], BpNotifications.prototype, "content", void 0);
    BpNotifications = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({template:/*ion-inline-start:"/Users/matt/projects/alphaweb/appp-funkflex/src/pages/bp-notifications/bp-notifications.html"*/'<ion-header>\n\n  <ion-navbar>\n    \n    <ion-buttons start>\n    <button *ngIf="rtlBack||is_registration_page" (click)="backRtlTransition()" ion-button class="custom-back-button">\n        <ion-icon name="arrow-back"></ion-icon>\n        {{ \'Back\' | translate }}\n    </button>\n\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    </ion-buttons>\n\n    <img class="header-logo" *ngIf="show_header_logo" [src]="header_logo_url" />\n\n    <ion-title *ngIf="!show_header_logo">{{ title | translate }}</ion-title>\n\n  </ion-navbar>\n\n  <ion-item *ngIf="notificationSegments" id="favorites-toolbar" color="light">\n\n    <ion-select [(ngModel)]="segment" (ionChange)="segmentChanged()" placeholder="Requests">\n\n      <ion-option *ngFor="let segment of notificationSegments" [value]="segment.name">{{ segment.name | translate }}</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n</ion-header>\n\n<ion-content [ngClass]="customClasses">\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <div *ngIf="!isRequests && items">\n\n    <ion-list no-lines>\n\n        <ion-item *ngFor="let notification of items">\n\n          <p *ngIf="notification.content" (tap)="viewNotification( notification )">{{ notification.content }}</p>\n          \n          <button ion-button item-end clear (tap)="viewNotification( notification )">{{ \'View\' | translate }}</button> <button ion-button item-end color="light" (tap)="clearNotification( notification )">{{ \'Clear\' | translate }}</button>\n          \n        </ion-item>\n\n    </ion-list>\n\n  </div>\n\n  <div *ngIf="isRequests && items">\n\n    <ion-list no-lines>\n\n        <ion-item *ngFor="let request of items">\n          <ion-avatar item-start (tap)="viewMember( request )">\n            <img *ngIf="request.avatar" [src]="formatUrl( request.avatar )">\n            <img *ngIf="!request.avatar" src="assets/default.png">\n          </ion-avatar>\n          <p *ngIf="request.name" (tap)="viewMember( request )"><strong>{{ request.name }}</strong></p>\n          \n          <button ion-button (tap)="acceptFriendship( request, false )">{{ \'Accept\' | translate }}</button>\n          \n        </ion-item>\n\n    </ion-list>\n\n  </div>\n\n  <ion-item *ngIf="!items">{{ \'No items to show.\' | translate }}</ion-item>\n\n  <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>'/*ion-inline-end:"/Users/matt/projects/alphaweb/appp-funkflex/src/pages/bp-notifications/bp-notifications.html"*/,
            selector: 'bp-notifications'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_globalvars_globalvars__["a" /* GlobalVars */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__providers_header_logo_header_logo__["a" /* HeaderLogo */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_8__providers_buddypress_bp_provider__["a" /* BpProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["d" /* TranslateService */]])
    ], BpNotifications);
    return BpNotifications;
}());

//# sourceMappingURL=bp-notifications.js.map

/***/ })

});
//# sourceMappingURL=15.js.map