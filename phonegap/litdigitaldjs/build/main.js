webpackJsonp([17],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_notification_model__ = __webpack_require__(583);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationsService = /** @class */ (function () {
    function NotificationsService() {
        this.stack = [];
    }
    /**
     * Creates a notification
     *
     * @param      string  type     The type
     * @param      string  message  The message
     */
    NotificationsService.prototype.create = function (type, message) {
        var _this = this;
        var notification = new __WEBPACK_IMPORTED_MODULE_1__models_notification_model__["a" /* Notification */]({ type: type, message: message });
        this.stack.push(notification);
        setTimeout(function () {
            _this.stack = _this.stack.filter(function (obj) { obj['id'] !== notification['id']; });
        }, 10000);
    };
    /**
     * Removes notification from stack
     *
     * @param      string  id      The identifier
     */
    NotificationsService.prototype.remove = function (id) {
        this.stack = this.stack.filter(function (obj) { obj['id'] !== id; });
    };
    NotificationsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], NotificationsService);
    return NotificationsService;
}());

//# sourceMappingURL=notifications.service.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Iframe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_device__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_header_logo_header_logo__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_language_language_service__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_analytics_analytics_service__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var Iframe = /** @class */ (function () {
    function Iframe(navParams, nav, viewCtrl, platform, loadingController, sanitizer, modalCtrl, storage, el, headerLogoService, languageservice, Keyboard, Device, Geolocation, SocialSharing, events, ga, zone) {
        var _this = this;
        this.navParams = navParams;
        this.nav = nav;
        this.viewCtrl = viewCtrl;
        this.platform = platform;
        this.loadingController = loadingController;
        this.sanitizer = sanitizer;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.el = el;
        this.headerLogoService = headerLogoService;
        this.languageservice = languageservice;
        this.Keyboard = Keyboard;
        this.Device = Device;
        this.Geolocation = Geolocation;
        this.SocialSharing = SocialSharing;
        this.events = events;
        this.ga = ga;
        this.zone = zone;
        this.title = ' ';
        this.loaded = false;
        this.activityModal = false;
        this.checkinModal = false;
        this.showShare = false;
        this.rtlBack = false;
        this.lang = '';
        this.shareUrl = '';
        this.cart_link = '';
        this.showCartLink = false;
        this.show_header_logo = false;
        this.hide_share_icon = false;
        this.is_registration_page = false;
        this.is_cached = false;
        events.subscribe('user:login', function (data) {
            // reload the iframe for a logged in user
            _this.setupURL();
        });
        events.subscribe('user:logout', function (data) {
            // reload the iframe for a logged out user
            _this.setupURL();
        });
    }
    Iframe_1 = Iframe;
    Iframe.prototype.ngOnInit = function () {
        var _this = this;
        this.iframeLoading();
        if (this.navParams.data.is_home == true) {
            this.doLogo();
            // hack to fix spinner appearing too long when iframe is home tab. Caused by language service calls to resetTabs in main component.
            setTimeout(function () {
                if (_this.loading)
                    _this.loading.dismiss().then(function () {
                        _this.loading = null;
                    });
            }, 4000);
        }
        this.setupURL();
        var dataurl = this.navParams.data.url;
        // Show error message if in preview and not using https
        this.previewAlert(this.navParams.data.url);
        var myappp = localStorage.getItem('myappp');
        if (myappp) {
            if (typeof myappp == 'string')
                myappp = JSON.parse(myappp);
            if (myappp && myappp.meta && myappp.meta.share && myappp.meta.share.icon && myappp.meta.share.icon.hide)
                this.hide_share_icon = myappp.meta.share.icon.hide;
        }
    };
    /**
     * Adds the appp=3 to the URL, but makes sure hashtags stay at the end
     * and we don't end up with more than one ?.
     */
    Iframe.prototype.setupURL = function () {
        var url = this.navParams.data.url;
        url = this.languageservice.appendUrlLang(url);
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    Iframe.prototype.ionViewWillEnter = function () {
        // If we have already set the title from WordPress don't use the one from the menu
        if (this.title != this.wp_title) {
            this.title = this.navParams.get('title');
        }
        this.showShare = false;
        if (this.navParams.get('is_register_page') === true) {
            if (this.viewCtrl.enableBack())
                this.viewCtrl.showBackButton(false);
            this.rtlBack = false;
            this.is_registration_page = true;
        }
        else if (this.platform.isRTL && this.viewCtrl.enableBack()) {
            this.viewCtrl.showBackButton(false);
            this.rtlBack = true;
            this.is_registration_page = false;
        }
        if (this.navParams.data.url) {
            this.ga.trackScreenView('Iframe', this.navParams.data.url);
        }
    };
    Iframe.prototype.ionViewDidLoad = function () {
        // set this.iframe for use in cached views
        this.findIframe();
    };
    Iframe.prototype.ionViewDidEnter = function () {
        // this message fires when entering a cached view so we can update any data with ajax. For example, learndash course progress
        if (this.iframe && this.is_cached) {
            this.iframe.contentWindow.postMessage('app_view_enter', '*');
        }
    };
    Iframe.prototype.ionViewWillLeave = function () {
        // Hack to clear page title when going back. Otherwise page title will be from previous page
        window.postMessage(JSON.stringify({ post_title: '', post_url: 'none' }), '*');
        this.is_cached = true;
    };
    Iframe.prototype.iframeLoading = function () {
        var _this = this;
        // set this.loaded so cached pages don't show loading spinner
        if (this.loaded)
            return;
        this.showSpinner();
        window.addEventListener('native.keyboardhide', function (e) {
            _this.notifyThemeKeyboardClosed();
        });
        window.addEventListener('native.keyboardshow', function (e) {
            _this.notifyThemeKeyboardOpened();
        });
        this.platform.pause.subscribe(function () {
            _this.postPauseEvent();
        });
        this.loaded = true;
    };
    Iframe.prototype.showSpinner = function () {
        var _this = this;
        // create only one spinner
        if (typeof this.loading == 'undefined' || this.loaded === null) {
            this.loading = this.loadingController.create({
                showBackdrop: false,
                dismissOnPageChange: false
            });
            this.loading.present().then(function (data) {
                setTimeout(function () {
                    if (_this.loading)
                        _this.loading.dismiss().then(function () {
                            _this.loading = null;
                        });
                }, 8000);
            });
        }
    };
    Iframe.prototype.ionSelected = function () {
        // fires when an active menu item is pressed again, causing a refresh
        var _this = this;
        this.showSpinner();
        var url = this.url;
        this.url = '';
        setTimeout(function () {
            _this.url = url;
        }, 1);
    };
    // ng2 way of adding a listener
    Iframe.prototype.onMessage = function (event) {
        this.myListeners(event);
    };
    Iframe.prototype.myListeners = function (e) {
        var _this = this;
        // get current window so we can find active iframe
        var w = e.target;
        if (e.data === 'site_loaded') {
            if (this.loading)
                this.loading.dismiss().then(function () {
                    _this.loading = null;
                });
        }
        else if (e.data === 'show_spinner') {
            this.showSpinner();
        }
        else if (e.data === 'open_login_modal') {
            this.openLoginModal();
        }
        else if (e.data === 'reload_frame') {
            // need to reload frame on login
            this.iframe = w.document.getElementsByClassName('ap3-iframe')[0];
            var src = this.iframe.src;
            this.iframe.src = src;
        }
        else if (e.data === 'checkin_icon_show' || e.data === 'checkin_modal' /* icon */) {
            this.checkinModal = true;
        }
        else if (e.data === 'checkin_modal_show') {
            // doCheckinModal expects an event target, so we'll simulate one
            var _e = {
                target: this.el.nativeElement.querySelector('.ap3-iframe')
            };
            this.doCheckinModal(_e);
        }
        else if (e.data === 'activity_modal') {
            this.zone.run(function () {
                _this.activityModal = true;
            });
        }
        else if (e.data === 'goback') {
            this.goBack();
        }
        else if (e.data.indexOf('{') === 0) {
            // if it's a json object, parse it
            var parsed = JSON.parse(e.data);
            if (parsed.media) {
                this.mediaModal(parsed.media, parsed.img);
            }
            else if (parsed.activity_modal) {
                // console.log('parsed.iframe_url', parsed.iframe_url);
                // console.log('this.iframe.src', this.iframe.src);
                // console.log('this.navParams.data', this.navParams.data);
                // only add the activity_modal icon to this iframe
                if ((typeof (this.navParams.data.extra_classes) !== 'undefined' && this.navParams.data.extra_classes.indexOf('bp-activity-icon') >= 0) || // show if has extra_class of bp-activity-icon
                    this.iframe.src.indexOf(parsed.iframe_url) == 0 || // show even if one of the URL is missing lang=en
                    this.iframe.src.indexOf('/me?') > 0 || // always show if me page
                    this.iframe.src.indexOf('/me/') > 0 || // always show if me page
                    this.iframe.src == parsed.iframe_url // show if the current iframe sent the message, but don't affect other iframes that are in the stack
                ) {
                    if (typeof (this.navParams.data.extra_classes) !== 'undefined' && this.navParams.data.extra_classes.indexOf('no-bp-activity-icon') >= 0) {
                        this.zone.run(function () {
                            _this.activityModal = false;
                        });
                    }
                    else {
                        this.zone.run(function () {
                            _this.activityModal = true;
                        });
                    }
                }
            }
            else if (parsed.apppkeyboardhelper) {
                if (parsed.apppkeyboardhelper === 'close') {
                    if (this.Keyboard) {
                        this.Keyboard.hide();
                    }
                }
            }
            else if (parsed.cart_link && parsed.cart_link != '') {
                this.cart_link = parsed.cart_link;
                this.changeTitle(parsed.post_title);
                this.showCartLink = true;
            }
            else if (parsed.post_url && parsed.post_url != 'none') {
                this.shareUrl = parsed.post_url;
                this.changeTitle(parsed.post_title);
                if (!this.hide_share_icon)
                    this.showShare = true;
            }
            else if (parsed.post_url && parsed.post_url === 'none') {
                // part of the hack to clear page titles when going back
                this.showShare = false;
                this.changeTitle(this.navParams.get('title'));
            }
            else if (parsed.geo_place) {
                // doCheckinPlaceModal expects an event target, so we'll simulate one
                var _e = {
                    target: this.el.nativeElement.querySelector('.ap3-iframe')
                };
                this.doCheckinPlaceModal(_e, parsed.geo_place);
            }
            else if (parsed.apppgeolocation) {
                // appp-geolocation shortcode
                var _e = {
                    target: this.el.nativeElement.querySelector('.ap3-iframe')
                };
                this.doApppGeolocation(_e);
            }
        }
    };
    Iframe.prototype.changeTitle = function (title) {
        var _this = this;
        if (title === '')
            return;
        // Don't change the title if we already of the one from WordPress
        // Oops! This caused a bug: https://trello.com/c/RvRor5KD
        // if(this.wp_title)
        //     return;
        // zone fixes bug where title didn't update properly on device
        this.zone.run(function () {
            _this.title = title;
            _this.wp_title = title;
        });
    };
    Iframe.prototype.postPauseEvent = function () {
        this.findIframe();
        if (this.iframe && this.iframe.contentWindow) {
            this.iframe.contentWindow.postMessage('{"pause_event":{"platform":"' + this.Device.platform + '"}}', '*');
        }
        else {
            console.warn('contentWindow not found in iframe.ts postPauseEvent()');
        }
    };
    // find the first ancestor with the given class name
    Iframe.prototype.findAncestor = function (el, cls) {
        while ((el = el.parentElement) && !el.classList.contains(cls))
            ;
        return el;
    };
    Iframe.prototype.doActivityModal = function (event) {
        this.findIframeBySelector(event.target);
        if (this.iframe && this.iframe.contentWindow) {
            this.iframe.contentWindow.postMessage('activity', '*');
        }
        else {
            console.warn('contentWindow not found in iframe.ts doActivityModal()');
        }
    };
    Iframe.prototype.doCheckinModal = function (event) {
        var _this = this;
        this.findIframeBySelector(event.target);
        // first message is to show modal, then we send through location
        if (this.iframe && this.iframe.contentWindow) {
            this.iframe.contentWindow.postMessage('checkin', '*');
        }
        else {
            console.warn('contentWindow not found in iframe.ts doCheckinModal()');
        }
        // Do this when checkin button clicked
        this.Geolocation.getCurrentPosition().then(function (position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            console.log('position', position);
            // need to postmessage this
            _this.iframe.contentWindow.postMessage({ lat: latitude, long: longitude }, '*');
        });
    };
    Iframe.prototype.doCheckinPlaceModal = function (event, place) {
        var _this = this;
        this.findIframeBySelector(event.target);
        // Do this when checkin button clicked when it has a place parameter
        this.Geolocation.getCurrentPosition().then(function (position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            console.log('position', position);
            // need to postmessage this
            _this.iframe.contentWindow.postMessage({ geo_place: place, lat: latitude, long: longitude }, '*');
        });
    };
    /**
     *  [appp-geolocation] Geo the location to set the form values
     */
    Iframe.prototype.doApppGeolocation = function (event) {
        var _this = this;
        this.findIframeBySelector(event.target);
        // event on wp's page load containing the shortcode
        this.Geolocation.getCurrentPosition().then(function (position) {
            console.log('Iframe doApppGeolocation position', position);
            var coords = {
                accuracy: position.coords.accuracy,
                altitude: position.coords.altitude,
                altitudeAccuracy: position.coords.altitudeAccuracy,
                heading: position.coords.heading,
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                speed: position.coords.speed
            };
            var message = JSON.stringify({
                apppgeolocation: {
                    coords: coords,
                    timestamp: position.timestamp
                }
            });
            // need to postmessage this
            _this.iframe.contentWindow.postMessage(message, '*');
        }).catch(function (reason) {
            console.log('getCurrentPosition reason', reason);
            var message = JSON.stringify({
                apppgeolocation: {
                    ready: false,
                    message: reason.message
                }
            });
            // need to postmessage this
            _this.iframe.contentWindow.postMessage(message, '*');
        });
    };
    Iframe.prototype.notifyThemeKeyboardClosed = function () {
        this.findIframe();
        this.iframe.contentWindow.postMessage('appp_keyboard_closed', '*');
    };
    Iframe.prototype.notifyThemeKeyboardOpened = function () {
        this.findIframe();
        this.iframe.contentWindow.postMessage('appp_keyboard_opened', '*');
    };
    Iframe.prototype.mediaModal = function (src, img) {
        if (img === void 0) { img = null; }
        var modal = this.modalCtrl.create('MediaPlayer', { source: src, image: img });
        modal.present();
    };
    Iframe.prototype.openLoginModal = function () {
        var modal = this.modalCtrl.create('LoginModal');
        modal.present();
    };
    // Show alert in preview if not using https
    Iframe.prototype.previewAlert = function (url) {
        if (this.Device.platform != 'iOS' && this.Device.platform != 'Android' && url.indexOf('http://') >= 0 && location.port != '8100') {
            alert('Cannot display http pages in browser preview. Please build app for device or use https.');
        }
    };
    // Must send in selector from a click event on the page
    Iframe.prototype.findIframeBySelector = function (el) {
        /*
         Ionic stacks cached views on top of each other, which causes duplicate ids on the page. We need to find the active page in the stack, and send our post messages there. Otherwise message is sent to the wrong page.
        */
        var page = this.findAncestor(el, 'ion-page');
        this.iframe = page.getElementsByClassName('ap3-iframe')[0];
    };
    // find the iframe without a selector
    Iframe.prototype.findIframe = function () {
        /*
         Ionic stacks cached views on top of each other, which causes duplicate ids on the page. We need to find the active page in the stack, and send our post messages there. Otherwise message is sent to the wrong page.
        */
        // only look in active stack
        var components = document.querySelectorAll('#nav wordpress-page');
        for (var i = 0; i < components.length; ++i) {
            if (!components[i].hasAttribute('hidden')) {
                // we are just getting the last component on the page
                var active = components[i];
            }
        }
        // if no tabs
        this.iframe = active.querySelector('#ap3-iframe');
    };
    // changes the back button transition direction if app is RTL
    Iframe.prototype.backRtlTransition = function () {
        var obj = {};
        if (this.platform.is('ios'))
            obj = { direction: 'forward' };
        this.nav.pop(obj);
        if (this.is_registration_page)
            this.events.publish('login:force_login');
    };
    Iframe.prototype.share = function () {
        this.SocialSharing.share(this.title, null, null, this.shareUrl).then(function () {
            // Sharing via email is possible
        }).catch(function () {
            // Sharing via email is not possible
        });
    };
    Iframe.prototype.cartLink = function () {
        this.nav.push(Iframe_1, { 'title': '', 'url': this.cart_link });
    };
    Iframe.prototype.doLogo = function () {
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
    // used by postMessage in applms to dismiss current view
    Iframe.prototype.goBack = function () {
        this.findIframe();
        var page = this.findAncestor(this.iframe, 'ion-page');
        var back = page.getElementsByClassName('back-button')[0];
        back.click();
        return;
    };
    var Iframe_1;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["HostListener"])('window:message', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], Iframe.prototype, "onMessage", null);
    Iframe = Iframe_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({template:/*ion-inline-start:"/Users/matt/projects/alphaweb/appp-funkflex/src/pages/iframe/iframe.html"*/'<ion-header>\n\n	<ion-navbar>\n		\n		<ion-buttons start>\n		<button *ngIf="rtlBack||is_registration_page" (click)="backRtlTransition()" ion-button class="custom-back-button">\n		    <ion-icon name="arrow-back"></ion-icon>\n		    {{ \'Back\' | translate }}\n		</button>\n\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n\n		</ion-buttons>\n\n	    <img class="header-logo" *ngIf="show_header_logo" [src]="header_logo_url" />\n\n    	<ion-title *ngIf="!show_header_logo">{{title | translate}}</ion-title>\n\n	    <ion-buttons end>\n	    <button *ngIf="activityModal" ion-button (click)="doActivityModal($event)">\n			<ion-icon name="ios-create-outline"></ion-icon>\n		</button>\n		<button *ngIf="checkinModal" ion-button (click)="doCheckinModal($event)">\n			<ion-icon name="ios-navigate-outline"></ion-icon>\n		</button>\n		<button *ngIf="showShare" ion-button (click)="share()">\n			<ion-icon name="share"></ion-icon>\n		</button>\n		<button *ngIf="showCartLink" ion-button (click)="cartLink()">\n			<ion-icon name="cart"></ion-icon>\n		</button>\n		</ion-buttons>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n    <iframe *ngIf="url" [src]="url" id="ap3-iframe" class="ap3-iframe" allowfullscreen></iframe>\n</ion-content>'/*ion-inline-end:"/Users/matt/projects/alphaweb/appp-funkflex/src/pages/iframe/iframe.html"*/,
            selector: 'wordpress-page'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* Nav */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_8__providers_header_logo_header_logo__["a" /* HeaderLogo */],
            __WEBPACK_IMPORTED_MODULE_9__providers_language_language_service__["a" /* LanguageService */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_10__providers_analytics_analytics_service__["a" /* AnalyticsService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgZone"]])
    ], Iframe);
    return Iframe;
}());

//# sourceMappingURL=iframe.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_language_model__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__analytics_analytics_service__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LanguageService = /** @class */ (function () {
    function LanguageService(analyticsservice, storage, http) {
        this.analyticsservice = analyticsservice;
        this.storage = storage;
        this.http = http;
        this.langObs = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.hasStoredLanguage = false;
        this.language = new __WEBPACK_IMPORTED_MODULE_5__models_language_model__["a" /* Language */]();
    }
    LanguageService.prototype.setLanguage = function (language) {
        this.language = language;
        this.langObs.next(this.language);
    };
    LanguageService.prototype.initStoredLanguage = function () {
        var _this = this;
        this.storage.get('app_language').then(function (lang) {
            if (lang) {
                _this.hasStoredLanguage = true;
                _this.setCurrentLanguage(lang);
            }
        });
    };
    LanguageService.prototype.setCurrentLanguage = function (language) {
        this.language.code = language.code;
        this.language.dir = language.dir;
        this.analyticsservice.trackEvent('lang', this.language.code);
        this.storage.set('app_language', language);
        this.langObs.next(this.language);
    };
    LanguageService.prototype.setAvailable = function (languages) {
        this.language.available = languages;
    };
    /**
     * The current language: 'en'
     */
    LanguageService.prototype.getCurrentLanguage = function () {
        return this.language.code;
    };
    LanguageService.prototype.removeLanguage = function () {
        this.language = null;
        this.langObs.next(null);
    };
    LanguageService.prototype.languageStatus = function () {
        // return the observable
        return this.langObs;
    };
    LanguageService.prototype.removeAppParams = function (url, use_language) {
        // gather any #
        var url_parts = url.split('#');
        var hash = (url_parts[1]) ? '#' + url_parts[1] : '';
        // gather any ?
        url_parts = url_parts[0].split('?');
        var base_url = url_parts[0];
        var query = url_parts[1];
        query = query.replace('appp=3', '');
        // maybe remove the existing language
        if (use_language === false) {
            query = query.replace(new RegExp("lang=[a-z]{2}", "gm"), '');
        }
        // trim the ampersands
        query = query.replace(/^\&+|\&+$/g, '');
        query = query.replace('&&', '&');
        url = (query) ? base_url + "?" + query : base_url;
        return url + hash;
    };
    LanguageService.prototype.appendUrlLang = function (url) {
        // console.log('LanguageService appendUrlLang start', url);
        var params = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpParams */]();
        // remove the existing language
        url = url.replace(new RegExp("lang=[a-z]{2}", "gm"), '');
        // gather any #
        var url_parts = url.split('#');
        var hash = (url_parts[1]) ? '#' + url_parts[1] : '';
        // gather any ?
        url_parts = url_parts[0].split('?');
        var base_url = url_parts[0];
        var query = url_parts[1];
        if (query && url.indexOf('appp=3') >= 0) {
            // already has appp=3
            params = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpParams */]({
                fromString: query
            });
        }
        else {
            // add the appp=3
            params = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpParams */]({
                fromString: (query) ? query + '&appp=3' : 'appp=3'
            });
        }
        // add the lang=X
        var lang = this.getCurrentLanguage();
        if (lang)
            params = params.append('lang', lang.toString()); // Silly, convert String to primative string
        // put it all together
        url = base_url + '?' + params.toString() + hash;
        // remove empty params
        url = url.replace('&=&', '&');
        // console.log('LanguageService appendUrlLang end', url);
        return url;
    };
    LanguageService.prototype.langFileExists = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var fallbackLang = new __WEBPACK_IMPORTED_MODULE_5__models_language_model__["a" /* Language */]({
                code: 'en',
                dir: 'ltr'
            });
            if (data.default_language) {
                var langDefault_1 = new __WEBPACK_IMPORTED_MODULE_5__models_language_model__["a" /* Language */]({
                    code: data.default_language,
                    dir: (data.meta.rtl) ? 'rtl' : 'ltr'
                });
                _this.http.get('./assets/i18n/' + langDefault_1.code + '.json')
                    .subscribe(function (response) {
                    var new_lang = langDefault_1;
                    var parsedLangData = response.json();
                    if (parsedLangData) {
                        new_lang.dir = (parsedLangData.dir) ? parsedLangData.dir : langDefault_1.dir;
                    }
                    // language file exists, return url 
                    resolve(new_lang);
                }, function (error) {
                    // language file does not exist
                    resolve(fallbackLang);
                });
            }
            else {
                resolve(fallbackLang);
            }
        });
    };
    LanguageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__analytics_analytics_service__["a" /* AnalyticsService */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]])
    ], LanguageService);
    return LanguageService;
}());

//# sourceMappingURL=language.service.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppAds; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_admob_free__ = __webpack_require__(295);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Admob

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var AppAds = /** @class */ (function () {
    function AppAds(admobFree) {
        this.admobFree = admobFree;
    }
    AppAds.prototype.setOptions = function () {
        if (!this.admobFree)
            return;
    };
    AppAds.prototype.createBanner = function (id) {
        console.log('create banner ' + id);
        this.admobFree.banner.config({
            id: id,
            isTesting: false,
            autoShow: true
        });
        this.admobFree.banner.prepare()
            .then(function () {
            console.log('show banner');
        })
            .catch(function (e) { return console.log(e); });
    };
    // interstitial( id ) {
    // 	if( !this.admob )
    //     return;
    // 	this.admob.prepareInterstitial({
    // 		adId: id, 
    // 		autoShow: true,
    // 		adSize: 'SMART_BANNER'
    // 	});
    // }
    AppAds.prototype.hideAll = function () {
        console.log('hiding ads');
        this.admobFree.banner.hide();
    };
    AppAds = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_admob_free__["a" /* AdMobFree */]])
    ], AppAds);
    return AppAds;
}());

//# sourceMappingURL=appads.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StreamingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notifications_service__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_media__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_radioStation_model__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular_platform_platform__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var StreamingService = /** @class */ (function () {
    function StreamingService(platform, notifications, http, media) {
        var _this = this;
        this.platform = platform;
        this.notifications = notifications;
        this.http = http;
        this.media = media;
        this.stations = [];
        this.selectedStationIndex = 0;
        this.isPlayingObs = new __WEBPACK_IMPORTED_MODULE_6_rxjs__["Subject"]();
        this.isLoadingObs = new __WEBPACK_IMPORTED_MODULE_6_rxjs__["Subject"]();
        this.is_playing = false;
        this.is_loading = true;
        this.platform.ready().then(function () {
            _this.getStations();
            _this.initFirstStation();
        });
    }
    StreamingService.prototype.getStations = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].streaming.stations.forEach(function (station, index) {
            _this.stations.push(new __WEBPACK_IMPORTED_MODULE_5__models_radioStation_model__["a" /* RadioStation */](station));
            _this.stations[index].isLoading().subscribe(function (is_loading) {
                console.log('station index ' + index + ' is_loading', is_loading);
                _this.isLoadingObs.next(is_loading);
            });
            _this.stations[index].isPlaying().subscribe(function (is_playing) {
                console.log('station index ' + index + ' is_playing', is_playing);
                _this.isPlayingObs.next(is_playing);
            });
            _this.getStreamingSources(_this.stations[index], index);
        });
    };
    StreamingService.prototype.play = function (new_station) {
        var _this = this;
        console.log('play this new station', new_station);
        this.stations.forEach(function (station, index) {
            console.log('switch to this station?', station.name);
            if (new_station == station.name) {
                _this.selectedStationIndex = index;
                if (!station.isCurrentPlayingStation) {
                    _this.player.pause();
                    _this.initPlayer(station, index);
                }
                station.isCurrentPlayingStation = true;
            }
            else {
                station.isCurrentPlayingStation = false;
            }
        });
    };
    StreamingService.prototype.initPlayer = function (station, index) {
        var _this = this;
        console.log('initPlayer', station);
        this.is_loading = true;
        this.currentStation = station;
        station.startLoading();
        station.resetDelay();
        var source = station.nextSource();
        console.log('what is this?????', source);
        console.log('index', index);
        this.player = this.media.create(source);
        this.player.onStatusUpdate.subscribe(function (status) {
            console.log('onStatusUpdate status', status);
            console.log('index', index);
            switch (status) {
                case _this.media.MEDIA_STARTING: // 1
                    console.log('media is starting');
                    _this.is_loading = true;
                    _this.stations[_this.selectedStationIndex].isPlayingObs.next(false);
                    _this.stations[_this.selectedStationIndex].isLoadingObs.next(true);
                    break;
                case _this.media.MEDIA_RUNNING: // 2
                    console.log('media is running');
                    _this.is_loading = false;
                    _this.is_playing = true;
                    _this.stations[_this.selectedStationIndex].is_playing = true;
                    _this.stations[_this.selectedStationIndex].status = 'playing';
                    _this.stations[_this.selectedStationIndex].isPlayingObs.next(true);
                    _this.stations[_this.selectedStationIndex].isLoadingObs.next(false);
                    break;
                case _this.media.MEDIA_PAUSED: // 3
                    console.log('media is paused');
                    _this.is_playing = false;
                    _this.stations[_this.selectedStationIndex].isPlayingObs.next(false);
                    _this.stations[_this.selectedStationIndex].is_playing = false;
                    _this.stations[_this.selectedStationIndex].status = 'paused';
                    break;
                case _this.media.MEDIA_STOPPED: // 4
                    console.log('media is stopped');
                    _this.is_playing = false;
                    _this.stations[_this.selectedStationIndex].is_playing = false;
                    _this.stations[_this.selectedStationIndex].status = 'stopped';
                    _this.stations[_this.selectedStationIndex].isPlayingObs.next(false);
                    break;
            }
        });
        console.log('done player.onStatusUpdate');
        console.log('set player.onError');
        this.player.onError.subscribe(function (error) {
            console.log('Error!', error);
            station.is_playing = false;
            station.status = null;
            setTimeout(function () {
                _this.initPlayer(station, index);
            }, station.nextDelay());
        });
        this.player.play();
    };
    StreamingService.prototype.getStreamingSources = function (station, index) {
        var _this = this;
        this.sourceFromPLS(station, index).then(function (sources) {
            console.log('sourceFromPLS sources', sources);
            station.streamingSources = sources;
            if (station.autoplay) {
                station.isCurrentPlayingStation = true;
                _this.initPlayer(station, index);
            }
        });
    };
    /**
     * Generates sources array from PLS playlist file.
     *
     * @return     Array  Array of source urls
     */
    StreamingService.prototype.sourceFromPLS = function (station, index) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var sources = [];
            _this.http.get(station.streaming_url, { responseType: 'text' }).subscribe(function (res) {
                //Loop through each line
                for (var _i = 0, _a = res.split('\n'); _i < _a.length; _i++) {
                    var line = _a[_i];
                    //If line is playlist "File" line, add the url from it to sources
                    if (line.match(/File[0-9]=/g)) {
                        sources.push(line.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g).toString());
                    }
                }
                station.resetDelay();
                resolve(sources);
            }, function (err) {
                _this.notifications.create('error', "Error loading " + name + " streaming file: " + err.statusText);
                _this.notifications.create('error', "Trying again in " + station.reconnectionDelay * 2 + " seconds");
                setTimeout(function () {
                    // try again in a few seconds
                    _this.getStreamingSources(station, index);
                }, station.nextDelay() * 1000);
            });
        });
        return promise;
    };
    StreamingService.prototype.initFirstStation = function () {
        if (this.stations && this.stations.length) {
            this.currentStation = this.stations[0];
        }
        else {
            console.error('No stations URLs set in StreamingService');
        }
    };
    /**
    * Determines if player playing
    *
    * @return     boolean  True if playing, False otherwise.
    */
    StreamingService.prototype.isPlaying = function () {
        return this.isPlayingObs;
    };
    /**
     * Determines if player loading/buffering.
     *
     * @return     boolean  True if loading, False otherwise.
     */
    StreamingService.prototype.isLoading = function () {
        return this.isLoadingObs;
    };
    StreamingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7_ionic_angular_platform_platform__["a" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__notifications_service__["a" /* NotificationsService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_media__["a" /* Media */]])
    ], StreamingService);
    return StreamingService;
}());

//# sourceMappingURL=streaming.service.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderLogo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderLogo = /** @class */ (function () {
    function HeaderLogo(http) {
        this.http = http;
        this.url = 'assets/header-logo.png';
    }
    HeaderLogo.prototype.checkLogo = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.logo_exists) {
                // logo exists, we already checked
                resolve(_this.url);
            }
            else if (_this.logo_exists === false) {
                // logo does not exists, we already checked
                reject();
            }
            else {
                // not sure if logo exists, check please
                _this.http.get('./assets/header-logo.png')
                    .subscribe(function (data) {
                    _this.logo_exists = true;
                    // logo file exists, return url 
                    resolve(_this.url);
                }, function (error) {
                    _this.logo_exists = false;
                    // logo file does not exist
                    reject(error);
                });
            }
        });
    };
    HeaderLogo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], HeaderLogo);
    return HeaderLogo;
}());

//# sourceMappingURL=header-logo.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_globalvars_globalvars__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_iframe_iframe__ = __webpack_require__(124);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuService = /** @class */ (function () {
    function MenuService(globalvars) {
        this.globalvars = globalvars;
        this.menu = [];
        this.tabs = [];
    }
    /**
     *
     * @param menuIndex number
     * @param menuType 'menu' or 'tab'
     */
    MenuService.prototype.getMenuItem = function (menuIndex, menuType) {
        if (menuType == 'tab')
            return this.getTab(menuIndex);
        else
            return this.getMenu(menuIndex);
    };
    MenuService.prototype.getMenu = function (index) {
        if (this.menu[index])
            return this.menu[index];
        return false;
    };
    MenuService.prototype.getTab = function (index) {
        if (this.tabs[index])
            return this.tabs[index];
        return false;
    };
    MenuService.prototype.getItemRoot = function (menuItem) {
        var root = __WEBPACK_IMPORTED_MODULE_2__pages_iframe_iframe__["a" /* Iframe */];
        if (menuItem.type === 'apppages' && menuItem.page_type === 'list') {
            root = 'PostList';
        }
        else if (menuItem.type === 'apppages' && menuItem.page_type === 'media-list') {
            root = 'MediaList';
        }
        else if (menuItem.type === 'apppages') {
            root = this.getPageModuleName(menuItem.page_id);
        }
        return root;
    };
    MenuService.prototype.getPageModuleName = function (page_id) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])())
            return 'Page' + page_id;
        if (false === this.globalvars.getUseDynamicPageModule()) // building on remote Ionic builder
            return 'Page' + page_id;
        else
            return 'CustomPage';
    };
    /**
       * Side or tab menus
       * @param slug page slug or URL
       * @param menuType menu type
       */
    MenuService.prototype.getIndexBySlug = function (slug, menuType) {
        var menu_index;
        var count = 0;
        var pages = null;
        if (typeof menuType == 'object') {
            pages = menuType;
        }
        else {
            pages = (menuType == 'tab') ? this.tabs : this.menu;
        }
        if (!pages)
            return menu_index;
        for (var _i = 0, pages_1 = pages; _i < pages_1.length; _i++) {
            var page = pages_1[_i];
            if (page.slug && page.slug == slug) {
                menu_index = count;
            }
            else if (page.url && page.url == slug) {
                menu_index = count;
            }
            count++;
        }
        ;
        if (!menu_index && menu_index !== 0)
            console.log('Are you looking for page slugs?', pages); // you can find the slugs here
        return menu_index;
    };
    MenuService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_globalvars_globalvars__["a" /* GlobalVars */]])
    ], MenuService);
    return MenuService;
}());

//# sourceMappingURL=menu.service.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Language; });
var Language = /** @class */ (function () {
    function Language(data) {
        this.code = 'en';
        this.dir = 'ltr';
        if (data) {
            if (data.code)
                this.code = data.code;
            if (data.dir)
                this.dir = data.dir;
        }
    }
    Language.prototype.isRTL = function () {
        return (this.dir && this.dir == 'rtl');
    };
    return Language;
}());

//# sourceMappingURL=language.model.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Logins; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__facebook_fbconnect_settings__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Logins = /** @class */ (function () {
    function Logins(storage, events, fbconnectvars) {
        this.storage = storage;
        this.events = events;
        this.fbconnectvars = fbconnectvars;
    }
    Logins.prototype.set_force_login = function (status) {
        var _this = this;
        if (status) {
            this.storage.get('user_login').then(function (data) {
                // only show the login modal when logged out
                if (data) {
                    console.log('do not show logout modal');
                }
                else {
                    _this.events.publish('login:force_login');
                }
            });
            this.storage.set('force_login', true).then(function () {
                // nothing
            });
        }
        else {
            this.storage.remove('force_login');
        }
    };
    /**
     * use FB avatar for FB logins and
     * use WP avatar for WP logins
     *
     * @param avatar string or json
     * @return avatar
     */
    Logins.prototype.get_avatar = function (avatar) {
        var avatar_url;
        if (typeof (avatar) == 'object' && avatar.avatar_url)
            avatar_url = avatar.avatar_url;
        else if (typeof (avatar) == 'object' && avatar.avatar)
            avatar_url = avatar.avatar;
        else if (typeof (avatar) == 'string') {
            avatar_url = avatar;
        }
        var fb_avatar = this.get_fb_avatar();
        if (fb_avatar)
            this.avatar = fb_avatar;
        else
            this.avatar = avatar_url;
        this.avatar = this.fixProtocolRelativeUrl(this.avatar);
        return this.avatar;
    };
    Logins.prototype.get_fb_avatar = function () {
        return this.fbconnectvars.get_avatar();
    };
    /**
     * If a URL has a relative protocol, //gravatar.com, we need to force one
     *
     * @param url
     * @param protocol Default: https
     */
    Logins.prototype.fixProtocolRelativeUrl = function (url, protocol) {
        if (!url)
            return '';
        protocol = protocol ? protocol : 'https';
        if (url.indexOf('//') === 0)
            return protocol + ':' + url;
        else
            return url;
    };
    Logins = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__facebook_fbconnect_settings__["a" /* FBConnectAppSettings */]])
    ], Logins);
    return Logins;
}());

//# sourceMappingURL=logins.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Download; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__ = __webpack_require__(296);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Download = /** @class */ (function () {
    function Download(http, events, transfer) {
        this.http = http;
        this.events = events;
        this.transfer = transfer;
    }
    Download.prototype.downloadFile = function (filePath) {
        // console.log( cordova.file.dataDirectory, filePath )
        var _this = this;
        // simulate progress
        this.events.publish('load:progress', 10);
        var fileTransfer = this.transfer.create();
        fileTransfer.onProgress(function (progressEvent) {
            var percent = progressEvent.loaded / progressEvent.total * 100;
            percent = Math.round(percent);
            // only send progress event when number changes
            if (percent === _this.percent) {
                return;
            }
            _this.percent = percent;
            // console.log(percent)
            if (percent > 10) {
                _this.events.publish('load:progress', percent);
            }
        });
        return new Promise(function (resolve, reject) {
            var filename = filePath.replace(/^.*[\\\/]/, '');
            filename = filename.replace(/[\s+]/g, '-');
            fileTransfer.download(filePath, cordova.file.dataDirectory + '/media/' + filename).then(function (entry) {
                console.log('file download success', entry);
                _this.events.publish('load:progress', 80);
                resolve(entry.toURL());
            }, function (error) {
                console.log('file download err', error);
                reject(JSON.stringify(error));
                _this.events.publish('load:progress', 0);
            });
        });
    };
    Download = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__["a" /* FileTransfer */]])
    ], Download);
    return Download;
}());

//# sourceMappingURL=download.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PushService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globalvars_globalvars__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_device__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Push Notifications

  See http://ionicframework.com/docs/v2/native/push/
*/
var PushService = /** @class */ (function () {
    function PushService(http, globalvars, storage, Device) {
        this.http = http;
        this.globalvars = globalvars;
        this.storage = storage;
        this.Device = Device;
    }
    // Subscribe for push through our API service
    PushService.prototype.subscribeDevice = function (token) {
        var _this = this;
        this.platform = this.Device.platform;
        var apiRoot = this.globalvars.getApiRoot();
        this.api = apiRoot + 'wp-json/ap3/v1/subscribe/';
        this.appid = this.globalvars.getAppId();
        var params = '?token=' + token + '&platform=' + this.platform + '&id=' + this.appid;
        return new Promise(function (resolve) {
            _this.http.post(_this.api + params, null, null)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) { return console.warn('subscribeDevice error' + error); });
        });
    };
    // sends device id to WordPress to save as user meta, which we use later to send pushes to specific devices.
    PushService.prototype.sendDeviceToWp = function (id, ajaxurl) {
        var _this = this;
        var params = '?action=ap3_add_device_id&endpoint=' + id;
        // console.log('sending device id to wp: ' + ajaxurl + params );
        return new Promise(function (resolve) {
            _this.http.post(ajaxurl + params, null, null)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) { return console.warn('sendDeviceToWp error', error); });
        });
    };
    // Subscribe to a topic, for push segmenting
    PushService.prototype.subscribeToTopic = function (token, topicArn) {
        var _this = this;
        this.platform = this.Device.platform;
        var apiRoot = this.globalvars.getApiRoot();
        this.api = apiRoot + 'wp-json/ap3/v1/subscribe/';
        this.appid = this.globalvars.getAppId();
        var params = '?token=' + token + '&platform=' + this.platform + '&id=' + this.appid + '&topicarn=' + topicArn;
        return new Promise(function (resolve) {
            _this.http.post(_this.api + params, null, null)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(JSON.parse(data));
            }, function (error) { return console.warn('subscribe topic error' + error); });
        });
    };
    // Unsubscribe. Requires subscriptionArn which is returned after subscribing to a topic.
    PushService.prototype.unsubscribe = function (subscriptionArn) {
        var _this = this;
        var apiRoot = this.globalvars.getApiRoot();
        this.api = apiRoot + 'wp-json/ap3/v1/unsubscribe/';
        var params = '?subscriptionArn=' + subscriptionArn;
        return new Promise(function (resolve) {
            _this.http.post(_this.api + params, null, null)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(JSON.parse(data));
            }, function (error) { return console.warn('Unsubscribe error' + error); });
        });
    };
    PushService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_3__globalvars_globalvars__["a" /* GlobalVars */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_device__["a" /* Device */]])
    ], PushService);
    return PushService;
}());

//# sourceMappingURL=push.js.map

/***/ }),

/***/ 242:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 242;

/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/bp-details/bp-details.module": [
		599,
		1
	],
	"../pages/bp-group/bp-group.module": [
		600,
		8
	],
	"../pages/bp-list/bp-list.module": [
		601,
		3
	],
	"../pages/bp-messages/bp-messages.module": [
		602,
		2
	],
	"../pages/bp-modal/bp-modal.module": [
		603,
		16
	],
	"../pages/bp-notifications/bp-notifications.module": [
		604,
		15
	],
	"../pages/bp-profile/bp-profile.module": [
		605,
		7
	],
	"../pages/custom-pages/custom-page.module": [
		606,
		4
	],
	"../pages/download-list/download-list.module": [
		607,
		14
	],
	"../pages/language-settings/language-settings.module": [
		608,
		13
	],
	"../pages/login-modal/login-modal.module": [
		609,
		12
	],
	"../pages/media-list/media-list.module": [
		610,
		11
	],
	"../pages/media-player/media-player.module": [
		611,
		0
	],
	"../pages/post-details/post-details.module": [
		612,
		5
	],
	"../pages/post-list/post-list.module": [
		613,
		6
	],
	"../pages/push-settings/push-settings.module": [
		614,
		10
	],
	"../pages/tabs/tabs.module": [
		615,
		9
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 283;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppCamera; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_transfer__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_device__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_action_sheet__ = __webpack_require__(128);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the Menus provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var AppCamera = /** @class */ (function () {
    function AppCamera(actionSheet, Camera, Device, Transfer, File) {
        this.actionSheet = actionSheet;
        this.Camera = Camera;
        this.Device = Device;
        this.Transfer = Transfer;
        this.File = File;
        this.options = {
            quality: 50,
            destinationType: this.Camera.DestinationType.FILE_URI,
            correctOrientation: true,
            targetWidth: 1204,
            targetHeight: 1204
        };
        this.appbuddy = false;
    }
    AppCamera.prototype.openSheet = function (appbuddy) {
        var _this = this;
        var buttonLabels = ['Take Photo', 'Photo Library'];
        this.actionSheet.show({
            title: 'Choose an image',
            buttonLabels: buttonLabels,
            addCancelButtonWithLabel: 'Cancel',
            destructiveButtonLast: true
        }).then(function (buttonIndex) {
            if (buttonIndex === 1) {
                _this.takePicture(appbuddy);
            }
            else if (buttonIndex === 2) {
                _this.photoLibrary(appbuddy);
            }
        });
    };
    AppCamera.prototype.takePicture = function (appbuddy) {
        if (appbuddy) {
            this.appbuddy = true;
        }
        this.options.sourceType = this.Camera.PictureSourceType.CAMERA;
        this.doCamera();
    };
    AppCamera.prototype.photoLibrary = function (appbuddy) {
        if (appbuddy) {
            this.appbuddy = true;
        }
        // console.log('appbuddy app-camera.ts', this.appbuddy);
        this.options.sourceType = this.Camera.PictureSourceType.PHOTOLIBRARY;
        this.doCamera();
    };
    AppCamera.prototype.doCamera = function () {
        var _this = this;
        // sneak in the progress bar while taking/choosing photo for better UX
        this.progress_timeout = setTimeout(function () {
            _this.uploadProgress(5, 100);
        }, 1000);
        this.Camera.getPicture(this.options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            // let base64Image = "data:image/jpeg;base64," + imageData;
            _this.uploadPhoto(imageData);
        }, function (err) {
            _this.hideProgress();
            alert(err);
        });
    };
    AppCamera.prototype.findIframe = function () {
        /*
         Ionic stacks cached views on top of each other, which causes duplicate ids on the page. We need to find the active page in the stack, and send our post messages there. Otherwise message is sent to the wrong page.
        */
        var components = document.querySelectorAll('#nav wordpress-page');
        for (var i = 0; i < components.length; ++i) {
            if (!components[i].hasAttribute('hidden')) {
                // we are just getting the last component on the page
                var active = components[i];
            }
        }
        this.iframe = active.querySelector('#ap3-iframe');
        this.iframedoc = this.iframe.contentWindow.document;
    };
    AppCamera.prototype.uploadPhoto = function (camImage) {
        var _this = this;
        console.log('app-camera.ts AppCamera.uploadPhoto camImage', camImage);
        var imageURI = '';
        console.log('typeof camImage', typeof camImage, camImage);
        if (camImage.indexOf('{') === 0) { // from cordova-plugin-camera-with-exif
            var img = JSON.parse(camImage);
            imageURI = img.filename;
        }
        else { // from cordova-plugin-camera
            imageURI = camImage;
        }
        var fileTransfer = this.Transfer.create();
        this.findIframe();
        this.iframedoc = this.iframe.contentWindow.document;
        this.iframewin = this.iframe.contentWindow.window;
        var image = imageURI.substr(imageURI.lastIndexOf('/') + 1);
        var name = image.split("?")[0];
        var anumber = image.split("?")[1];
        var ajaxurl = this.iframewin.apppCore.ajaxurl;
        if ('Android' === this.Device.platform) {
            image = anumber + '.jpg';
        }
        // this creates a random string based on the date
        var d = new Date().toTimeString();
        var random = d.replace(/[\W_]+/g, "").substr(0, 6);
        var options = {
            fileKey: 'appp_cam_file',
            // prepend image name with random string to avoid duplicate upload errors
            fileName: imageURI ? random + image : random,
            mimeType: 'image/jpeg',
            httpMethod: "POST",
            chunkedMode: false
        };
        var params = {
            form_fields: null,
            form_values: null,
            appp_action: null,
            action: null,
            nonce: null,
        };
        var form_fields = [];
        var form_values = [];
        var iterator;
        var form = this.iframedoc.getElementById('appp_camera_form');
        var form_elements = form.elements;
        var shortcode_actions = ['new', 'this', 'library'];
        params.appp_action = 'attach'; // default: attach to BP activity
        // console.log('elements', form_elements);
        for (iterator = 0; iterator < form_elements.length; iterator++) {
            form_fields[iterator] = form_elements[iterator].name;
            form_values[iterator] = form_elements[iterator].value;
            // console.log(form_elements[iterator].name, form_elements[iterator].value);
            // set the action from the shortcode param
            if (form_elements[iterator].name == 'appp_action' && shortcode_actions.indexOf(form_elements[iterator].value) > -1) {
                params.appp_action = form_elements[iterator].value;
                params.action = form_elements[iterator].value;
            }
        }
        params.form_fields = JSON.stringify(form_fields);
        params.form_values = JSON.stringify(form_values);
        // Maybe do appbuddy attach stuff. Difference is the action, nonce, and transfer success function.
        if (this.appbuddy === true) {
            // console.log('appbuddy upload');
            // see appcamera/inc/AppPresser_Camera_Ajax.php
            params.action = 'upload_image';
            if (this.iframedoc.getElementById('apppcamera-upload-image')) { // from appcamera shortcode
                params.nonce = this.iframedoc.getElementById('apppcamera-upload-image').value;
            }
            else if (this.iframedoc.getElementById('attach-photo')) { // from buddypress activity upload
                params.nonce = this.iframedoc.getElementById('attach-photo').getAttribute('data-nonce');
            }
            options.params = params;
            fileTransfer.upload(imageURI, ajaxurl, options, true).then(function (msg) {
                _this.attachWin(msg);
            }).catch(function (FileTransferError) {
                _this.appbuddy = false;
                _this.uploadErr(FileTransferError);
            });
        }
        else {
            // Not appbuddy, do normal photo upload
            this.iframedoc.getElementById('appp_cam_post_title').value = '';
            options.params = params;
            // console.log('uploadPhoto options', options);
            // console.log('fileTransfer.upload(imageURI, encodeURI(ajaxurl), options)', imageURI, encodeURI(ajaxurl), options);
            // console.log('ajaxurl', ajaxurl);
            fileTransfer.upload(imageURI, encodeURI(ajaxurl), options, true).then(function (r) {
                _this.uploadWin(r);
            }).catch(function (FileTransferError) {
                _this.uploadErr(FileTransferError);
            });
        }
        fileTransfer.onProgress(function (e) {
            if (e.lengthComputable) {
                _this.uploadProgress(e.loaded, e.total);
            }
        });
    };
    AppCamera.prototype.uploadProgress = function (loaded, total) {
        if (typeof (this.iframedoc) === "undefined") {
            this.findIframe();
        }
        var progress = this.iframedoc.getElementById('cam-progress');
        progress.style.visibility = 'visible';
        var perc = Math.floor(loaded / total * 100);
        progress.value = perc;
    };
    AppCamera.prototype.hideProgress = function () {
        clearTimeout(this.progress_timeout);
        if (typeof (this.iframedoc) === "undefined") {
            this.findIframe();
        }
        var progress = this.iframedoc.getElementById('cam-progress');
        progress.style.visibility = 'hidden';
        progress.value = 0;
    };
    // handles displaying image in appbuddy activity modal after uploaded
    AppCamera.prototype.attachWin = function (r) {
        // console.log('attach win', r);
        this.findIframe();
        this.iframedoc = this.iframe.contentWindow.document;
        var action = this.iframedoc.getElementById('appp_action').value;
        var imgUrl = this.camUtil(r.response);
        var imgTag = (imgUrl) ? '<img src="' + imgUrl + '">' : '';
        this.iframedoc.getElementById('attach-image').value = imgUrl;
        this.iframedoc.getElementById('image-status').innerHTML = imgTag;
        this.hideProgress();
        this.iframedoc.getElementById('cam-status').innerHTML = '';
        // hide action sheet
        this.iframedoc.getElementById('attach-image-sheet').className =
            this.iframedoc.getElementById('attach-image-sheet').className.replace(/\bactive\b/, 'hide');
        this.appbuddy = false;
    };
    AppCamera.prototype.uploadWin = function (r) {
        // console.log('uploadWin', r);
        // If the nonce fails, this could be a cookie issue. If cookie is not set, nonce will fail.
        if (r.response === 'Nonce Failed') {
            alert("Upload unsuccessful, nonce failed.");
        }
        this.findIframe();
        this.iframedoc = this.iframe.contentWindow.document;
        if (r && r.response) {
            var event_1 = new CustomEvent('appcamera-uploadwin', { 'detail': { response: r.response, iframe: this.iframe.contentWindow } });
            window.document.dispatchEvent(event_1);
        }
        var appcamera = this.iframe.contentWindow.window.appcamera;
        var msg = appcamera.msg.moderation;
        var status = this.iframedoc.getElementById('cam-status');
        if (!appcamera.moderation_on) {
            msg = appcamera.msg.success;
        }
        status.innerHTML = '<p>' + msg + '</p>';
        this.hideProgress();
        // clear message after 5 sec
        setTimeout(function () {
            status.innerHTML = '';
        }, 5000);
    };
    AppCamera.prototype.uploadErr = function (FileTransferError) {
        console.warn(FileTransferError);
        console.log("download error source " + FileTransferError.source);
        console.log("download error target " + FileTransferError.target);
        console.log("upload error code " + FileTransferError.code);
        switch (FileTransferError.code) {
            case FileTransferError.FILE_NOT_FOUND_ERR:
                console.warn('Transfer error: File not found');
                break;
            case FileTransferError.INVALID_URL_ERR:
                console.warn('Transfer error: invalid URL');
                break;
            case FileTransferError.CONNECTION_ERR:
                console.warn('Transfer error: connection');
                break;
            case FileTransferError.ABORT_ERR:
                console.warn('Transfer error: abort');
                break;
            case FileTransferError.NOT_MODIFIED_ERR:
                console.warn('Transfer error: not modified');
                break;
        }
        this.hideProgress();
    };
    // parse and fetch the image url we need
    AppCamera.prototype.camUtil = function (response) {
        var debug = false;
        if (response && response.indexOf("http") > 0) {
            var regex = new RegExp("(\"http(.*)\/upload(.*)\.(jpg|png)\")", "gm");
            var matches = response.match(regex);
            if (debug && matches && matches.length) {
                if (response != matches[0]) {
                    // console.log('attach img raw response', response, matches);
                }
                // console.log('attach img', matches);
            }
            if (matches[0]) {
                return JSON.parse(matches[0]);
            }
        }
        return '';
    };
    AppCamera = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_native_action_sheet__["a" /* ActionSheet */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_transfer__["a" /* Transfer */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */]])
    ], AppCamera);
    return AppCamera;
}());

//# sourceMappingURL=app-camera.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FbConnectIframe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fbconnect_settings__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__logins_login_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_user_model__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/*
  Facebook Connect

  Used when the login is in an iframe

  See http://ionicframework.com/docs/v2/native/facebook/
*/
var FbConnectIframe = /** @class */ (function () {
    function FbConnectIframe(http, storage, events, fbconnectvars, loginservice, Facebook) {
        this.http = http;
        this.storage = storage;
        this.events = events;
        this.fbconnectvars = fbconnectvars;
        this.loginservice = loginservice;
        this.Facebook = Facebook;
    }
    FbConnectIframe.prototype.init = function () {
        var debug = this.fbconnectvars.debug;
        this.findIframe();
        // (<any>) syntax is to avoid typescript errors
        this.iframedoc = this.iframe.contentWindow.document;
        this.iframewin = this.iframe.contentWindow.window;
        if (typeof this.iframewin.apppfb == 'undefined') {
            return;
        }
        if (typeof this.iframewin.apppfb.l10n !== 'undefined') {
            this.fbconnectvars.l10n = this.iframewin.apppfb.l10n;
        }
    };
    FbConnectIframe.prototype.login = function () {
        var _this = this;
        this.init();
        this.Facebook.login(this.fbconnectvars.login_scope).then(function (result) {
            // we get back an auth response here, should save it or something
            _this.statusChangeCallback(result);
        });
        // return false; // so not to submit the form
    };
    FbConnectIframe.prototype.findIframe = function () {
        /*
         Ionic stacks cached views on top of each other, which causes duplicate ids on the page. We need to find the active page in the stack, and send our post messages there. Otherwise message is sent to the wrong page.
        */
        // find our iframe components by tag name
        var components = document.querySelectorAll('#nav wordpress-page');
        for (var i = 0; i < components.length; ++i) {
            if (!components[i].hasAttribute('hidden')) {
                // we are just getting the last component on the page
                var active = components[i];
            }
        }
        this.iframe = active.querySelector('#ap3-iframe');
    };
    // This is called with the results from from FB.getLoginStatus().
    FbConnectIframe.prototype.statusChangeCallback = function (response) {
        // The response object is returned with a status field that lets the
        // app know the current login status of the person.
        // Full docs on the response object can be found in the documentation
        // for FB.getLoginStatus().
        if (response.status === 'connected') {
            // Logged into your app and Facebook.
            this.fbMe(response);
        }
        else if (response.status === 'not_authorized') {
            // The person is logged into Facebook, but not your app.
            this.iframedoc.getElementById('status').innerHTML = this.fbconnectvars.l10n.not_authorized;
        }
        else {
            // The person is not logged into Facebook, so we're not sure if
            // they are logged into this app or not.
            this.iframedoc.getElementById('status').innerHTML = this.fbconnectvars.l10n.fb_not_logged_in;
        }
    };
    FbConnectIframe.prototype.fbMe = function (response) {
        var _this = this;
        this.Facebook.api("/me?fields=" + this.fbconnectvars.verify_me_fields(this.iframewin.apppfb.me_fields), null).then(function (response) {
            _this.fetchUser_Callback(response);
        });
    };
    // This function is called after a callback
    // from retreiving the user's email and fb_id
    FbConnectIframe.prototype.fetchUser_Callback = function (response) {
        var _this = this;
        var redirect_url = false;
        if (this.iframedoc.getElementById('status')) {
            this.iframedoc.getElementById('status').innerHTML = this.fbconnectvars.l10n.login_msg.replace('{{USERNAME}}', response.name);
        }
        // Send user info to WordPress login function
        if (typeof response.name != 'undefined' && typeof response.email != 'undefined') {
            this.fbconnectvars.set_avatar(response);
            this.wplogin(response.name, response.email).then(function (data) {
                // successfully logged in
                var context = _this.iframewin.location.pathname.substring(0, _this.iframewin.location.pathname.lastIndexOf("/"));
                var baseURL = _this.iframewin.location.protocol + '//' + _this.iframewin.location.hostname + (_this.iframewin.location.port ? ':' + _this.iframewin.location.port : '') + context;
                var app_ver = (_this.iframewin.apppCore.ver) ? _this.iframewin.apppCore.ver : '3';
                if (data && data.redirect_url) {
                    redirect_url = _this.fbconnectvars.get_redirect_url(data.redirect_url);
                    if (redirect_url)
                        data.login_redirect = redirect_url;
                }
                _this.loginservice.setLoginStatus(new __WEBPACK_IMPORTED_MODULE_8__models_user_model__["a" /* User */](data));
                _this.storage.set('user_login', data);
                // hide/show menu items in main app component
                _this.events.publish('user:login', data);
                if (redirect_url === false)
                    _this.iframewin.location.href = baseURL + "?appp=" + app_ver;
            });
        }
        else {
            console.log(response);
        }
    };
    // This function is called after a callback
    // from retreiving the user's email and fb_id
    FbConnectIframe.prototype.fetchUser_CallbackError = function (response) {
        this.iframedoc.getElementById('status').innerHTML = this.fbconnectvars.l10n.fetch_user_fail;
    };
    // This function is called when someone finishes with the Login
    // Button.  See the onlogin handler attached to it in the sample
    // code below.
    FbConnectIframe.prototype.checkLoginState = function () {
        var _this = this;
        this.Facebook.getLoginStatus().then(function (result) {
            _this.statusChangeCallback(result);
        });
    };
    /* Returns promise.
     * Usage: this.wplogin(name,email).then( response => { // do something });
     */
    FbConnectIframe.prototype.wplogin = function (name, email) {
        var _this = this;
        var nameStripped = name.replace(/\s+/g, '');
        var params = '?appp=3&action=appp_wp_fblogin&user_email=' + email + '&full_name=' + nameStripped + '&security=' + this.iframewin.apppfb.security;
        return new Promise(function (resolve) {
            _this.http.post(_this.iframewin.apppCore.ajaxurl + params, null)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) { return alert(_this.fbconnectvars.l10n.wp_login_error); });
        });
    };
    FbConnectIframe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_5__fbconnect_settings__["a" /* FBConnectAppSettings */],
            __WEBPACK_IMPORTED_MODULE_7__logins_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__["a" /* Facebook */]])
    ], FbConnectIframe);
    return FbConnectIframe;
}());

//# sourceMappingURL=login-iframe.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppWoo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_in_app_browser__ = __webpack_require__(345);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Appwoo

*/
var AppWoo = /** @class */ (function () {
    function AppWoo(iab) {
        this.iab = iab;
    }
    AppWoo.prototype.paypal = function (paypal_url, redirect) {
        var _this = this;
        this.browser = this.iab.create(paypal_url, '_blank');
        this.browser.on('exit').subscribe(function (value) {
            _this.browserClose(redirect);
        });
        this.browser.on('loadstop').subscribe(function (event) {
            _this.loadstopEvent(event);
        });
    };
    AppWoo.prototype.browserClose = function (redirect) {
        // need to find iframe and change src
        this.findIframe();
        this.iframe.src = redirect;
    };
    AppWoo.prototype.loadstopEvent = function (event) {
        // get base url
        var test_url = event.url.split('/')[2];
        this.findIframe();
        var src = this.iframe.src;
        src = src.split('/')[2];
        // If url in in-app browser is one of our own,
        if (src == test_url) {
            // redirect
            this.iframe.src = event.url;
            // and trigger the in-app browser to close
            this.browser.close();
        }
    };
    AppWoo.prototype.findIframe = function () {
        /*
         Ionic stacks cached views on top of each other, which causes duplicate ids on the page. We need to find the active page in the stack, and send our post messages there. Otherwise message is sent to the wrong page.
        */
        // find our iframe components by tag name
        var components = document.querySelectorAll('#nav wordpress-page');
        for (var i = 0; i < components.length; ++i) {
            if (!components[i].hasAttribute('hidden')) {
                // we are just getting the last component on the page
                var active = components[i];
            }
        }
        this.iframe = active.querySelector('#ap3-iframe');
    };
    AppWoo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], AppWoo);
    return AppWoo;
}());

//# sourceMappingURL=appwoo.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
// on first load, use app-data.json file and save to localstorage.
// check if app needs update in background, set localstorage item
// on next load, if app needs update, go get new data and overwrite localstorage.
*/
var AppData = /** @class */ (function () {
    function AppData(http, Device) {
        this.http = http;
        this.Device = Device;
        this.data = null;
        this.local = false;
        this.updateNeeded = false;
        this.notAuthorized = false;
    }
    /*
     * Get data in this priority:
     * 1. localStorage
     * 2. API
     * 3. app-data.json file
     * If anything fails, we go to the next one
     *
     * App is built with app-data.json file, which is never updated. Only API data and localStorage are updated, so falling back to app-data.json might break stuff, so it's a last resort.
     * If we are not on a device, always get data from the API. This makes sure the preview shows latest changes.
     * Update 8/18: need a way to update data when a new app version is released. If app-data.json ver is higher than local ver, we force an update.
     */
    AppData.prototype.load = function (apiurl) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var item = window.localStorage.getItem('myappp');
            _this.local = JSON.parse(item);
            // convert to a constant to use in promise
            var localData = _this.local;
            var localVer = (localData ? localData.meta.app_update_version : null);
            // get json data first
            _this.getData('app-data.json').then(function (jsonData) {
                _this.updateNeeded = (window.localStorage.getItem('myappp_update') == 'true') ? true : false;
                if (_this.Device.platform != 'iOS' && _this.Device.platform != 'Android') {
                    // if we are not on a device, don't cache data. helps preview update faster
                    // get data from api
                    _this.getData(apiurl).then(function (data) {
                        resolve(data);
                    });
                    return;
                }
                // if app-data.json version is higher, force update
                if (jsonData && localVer && parseFloat(localVer) < parseFloat(jsonData.meta.app_update_version)) {
                    console.log('get updated json');
                    resolve(jsonData);
                }
                else if (localData && _this.updateNeeded != true) {
                    console.log('using localStorage data');
                    // send back localstorage item
                    resolve(localData);
                }
                else if (!localData && _this.updateNeeded != true && jsonData) {
                    console.log('using app-data.json');
                    // get local app-data file
                    resolve(jsonData);
                }
                else {
                    console.log('get data from API');
                    // get data from api
                    _this.getData(apiurl).then(function (data) {
                        resolve(data);
                    })
                        .catch(function (err) {
                        // API is down, or bad url, so we need to get app-data.json file. Send back to app.component.ts line 78
                        if (err.status == 401) { // 401 not authorized
                            // membership expired
                            _this.notAuthorized = true;
                        }
                        reject(err);
                    });
                } // end if statements
            }).catch(function (e) {
                // app-data.json is missing for some reason
                console.warn(e);
                // get data from api
                _this.getData(apiurl).then(function (data) {
                    resolve(data);
                });
            }); // end this.getData()
        }); // end promise
    };
    AppData.prototype.getData = function (url) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(url)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                // we've got back the raw data, now generate the core schedule data
                // and save the data for later reference
                window.localStorage.removeItem('myappp');
                _this.local = window.localStorage.setItem('myappp', JSON.stringify(data));
                resolve(data);
            }, function (error) {
                // API is down, or bad url, send back to line 65
                reject(error);
            });
        });
    };
    /*
     * When you click "go live" in the app builder, it increments the update version, and this function tells the app to get new data on the next load.
     */
    AppData.prototype.checkForUpdates = function (apiurl) {
        var _this = this;
        // if api failed once no need to try it again
        if (this.notAuthorized)
            return; // membership expired
        var item = window.localStorage.getItem('myappp');
        this.local = JSON.parse(item);
        // Runs in the background, and set the app to update on the next load
        // check if local app_update_version and remote version match, set updateNeeded accordingly
        this.http.get(apiurl)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            // we've got back the raw data, now generate the core schedule data
            // and save the data for later reference
            if (_this.local && _this.local.meta && data.meta && _this.local.meta.app_update_version != data.meta.app_update_version) {
                window.localStorage.setItem('myappp_update', 'true');
            }
            else {
                window.localStorage.removeItem('myappp_update');
            }
        });
    };
    AppData.prototype.handleError = function (err) {
        console.warn(err);
    };
    AppData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__["a" /* Device */]])
    ], AppData);
    return AppData;
}());

//# sourceMappingURL=appdata.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppGeo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  AppGeo

*/
var AppGeo = /** @class */ (function () {
    function AppGeo(Geolocation, http) {
        this.Geolocation = Geolocation;
        this.http = http;
        this.geolocation_options = {};
        this.position_options = null;
        this.url = '';
        this.beacon_started = false;
        this.interval_id = 0;
        this.wordpress_url = '';
    }
    AppGeo.prototype.startBeacon = function (geouserpref) {
        console.log('start geolocation beacon');
        if (geouserpref.interval && geouserpref.wordpress_url) {
            if (this.position_options === null) {
                this.setCurrentPositionOptions(geouserpref);
            }
            if (this.position_options && this.beacon_started === false) {
                this.beacon_started = true;
                this.wordpress_url = geouserpref.wordpress_url;
                this.geoLocate_user();
                this.interval_id = this.start_userInterval(geouserpref.interval);
                console.log('start interval_id', this.interval_id);
            }
        }
        else {
            this.stopBeacon('No interval or wordpress_url supplied');
        }
    };
    AppGeo.prototype.stopBeacon = function (msg) {
        console.log('stop interval_id', this.interval_id);
        clearInterval(this.interval_id);
        console.log('geouser beacon stopped', msg);
        this.beacon_started = false;
    };
    AppGeo.prototype.start_userInterval = function (interval) {
        var _this = this;
        if (interval) {
            // check every 60 seconds
            return window.setInterval(function () {
                _this.geoLocate_user();
            }, interval);
        }
        else {
            console.log('geouserpref interval not set');
        }
    };
    ;
    // store location data for user
    AppGeo.prototype.geoLocate_user = function () {
        var _this = this;
        this.Geolocation.getCurrentPosition().then(function (position) {
            _this.onSuccessGeoUser(position);
        }).catch(function (error) {
            _this.stopBeacon(error.message);
        });
    };
    ;
    AppGeo.prototype.getCurrentPositionOptions = function () {
        return this.position_options;
    };
    AppGeo.prototype.setCurrentPositionOptions = function (geouserdata) {
        var timeout, maximumAge, enableHighAccuracy;
        var default_options = {
            timeout: 5000,
            maximumAge: 3000,
            enableHighAccuracy: true,
        };
        var geolocation_options = geouserdata.options;
        if (typeof geolocation_options !== 'undefined') {
            // Timeout
            if (typeof geolocation_options.timeout !== 'undefined') {
                timeout = parseInt(geolocation_options.timeout);
                if (timeout && timeout >= 1000) { // really? at least one second
                    default_options.timeout = timeout;
                }
            }
            // maximumAge
            if (typeof geolocation_options.maximumAge !== 'undefined') {
                maximumAge = parseInt(geolocation_options.maximumAge);
                if (maximumAge && maximumAge >= 1000) {
                    default_options.maximumAge = maximumAge;
                }
            }
            // enableHighAccuracy
            if (typeof geolocation_options.enableHighAccuracy !== 'undefined') {
                enableHighAccuracy = parseInt(geolocation_options.enableHighAccuracy);
                default_options.enableHighAccuracy = (enableHighAccuracy); // force a boolean
            }
        }
        this.position_options = default_options;
    };
    ;
    AppGeo.prototype.onSuccessGeoUser = function (position) {
        var _this = this;
        console.log('longitude', position.coords.longitude);
        console.log('latitude', position.coords.latitude);
        var ajax_url = this.wordpress_url + 'wp-admin/admin-ajax.php?action=appp_geo_user';
        var coords = {
            accuracy: position.coords.accuracy,
            altitude: position.coords.altitude,
            altitudeAccuracy: position.coords.altitudeAccuracy,
            heading: position.coords.heading,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            speed: position.coords.speed
        };
        var data = {
            'position': coords,
            'longitude': position.coords.longitude,
            'latitude': position.coords.latitude
        };
        this.http.post(ajax_url, data).subscribe(function (data) {
            var response = data.json();
            if (response.success === false) {
                _this.stopBeacon(response.data);
            }
        }, function (error) {
            console.log(JSON.stringify(error.json()));
        });
    };
    ;
    AppGeo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]])
    ], AppGeo);
    return AppGeo;
}());

//# sourceMappingURL=appgeo.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StreamPlayerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_notifications_service__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_facebook_messenger_fb_messenger_service__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_now_playing_service__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_streaming_service__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var StreamPlayerComponent = /** @class */ (function () {
    function StreamPlayerComponent(ngZone, fbMsg, npService, navParams, streaming, notifications) {
        this.ngZone = ngZone;
        this.fbMsg = fbMsg;
        this.npService = npService;
        this.navParams = navParams;
        this.streaming = streaming;
        this.notifications = notifications;
        this.show_stream_logo = '';
        this.isPlaying = false;
        this.isLoading = true;
        this.tracks = [];
        this.selectedStation = '97';
        this.testClass = 'test-class-null';
        this.playlistactive = false;
        this.playeractive = true;
        this.currentTrack = this.npService.dummyTrack();
        this.trackLoaded = true;
        this.tracksLoading = false;
    }
    StreamPlayerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initTrackList();
        this.streaming.isPlaying().subscribe(function (isPlaying) {
            var msg = 'StreamPlayerComponent stream-player is ' + ((isPlaying) ? 'playing' : 'stopped');
            console.log(msg);
            _this.ngZone.run(function () {
                _this.isPlaying = isPlaying;
            });
        });
        this.streaming.isLoading().subscribe(function (isLoading) {
            var msg = 'StreamPlayerComponent stream-player is ' + ((isLoading) ? 'loading' : 'loaded');
            console.log(msg);
            _this.ngZone.run(function () {
                _this.isLoading = isLoading;
            });
        });
        this.npService.trackObs.subscribe(function (track) {
            _this.currentTrack = track;
        });
    };
    StreamPlayerComponent.prototype.playStation = function (station) {
        console.log('StreamPlayerComponent playStation station', station);
        if (this.selectedStation == station)
            return;
        this.streaming.is_loading = true;
        this.selectedStation = station;
        this.streaming.play(station);
        this.currentTrack = this.npService.dummyTrack();
        this.npService.getCurrentTrack();
    };
    /**
     * Plays/pauses audio streaming97
     *
     * @return     void
     */
    StreamPlayerComponent.prototype.toggleStreamingPlayer = function () {
        if (this.streaming.is_loading) {
            return;
        }
        this.isLoading = false;
        if (this.streaming.is_playing) {
            this.streaming.player.pause();
            this.streaming.is_playing = false;
        }
        else {
            this.streaming.player.play();
            this.streaming.is_playing = true;
        }
    };
    /**
     * Removes a notification.
     *
     * @param      string  id      The identifier
     * @return     void
     */
    StreamPlayerComponent.prototype.removeNotification = function (id) {
        this.notifications.remove(id);
    };
    StreamPlayerComponent.prototype.showPlayer = function (event) {
        var _this = this;
        console.log('showPlayer');
        this.ngZone.run(function () {
            _this.playeractive = true;
            _this.playlistactive = false;
            _this.isLoading = false;
        });
    };
    StreamPlayerComponent.prototype.showPlaylist = function (event) {
        var _this = this;
        console.log('showPlaylist');
        this.ngZone.run(function () {
            _this.playeractive = false;
            _this.playlistactive = true;
            _this.isLoading = false;
        });
    };
    StreamPlayerComponent.prototype.openFBMessenger = function () {
        this.fbMsg.openMessenger();
    };
    /**
     * Sets the tracks for the tracklist
     *
     * @return     void
     */
    StreamPlayerComponent.prototype.setTracks = function () {
        //Clone npService's recentlyPlayed array and then reverse newly created one
        this.tracks = Object.assign([], this.npService.recentlyPlayed).reverse();
    };
    StreamPlayerComponent.prototype.initTrackList = function () {
        var _this = this;
        //Set tracksLoading variable
        this.tracksLoading = true;
        //If iTunes formatting enabled, format all tracks
        if (this.npService.shouldFormatTracks() && this.npService.recentlyPlayed.length) {
            //Set tracks
            this.setTracks();
        }
        //Watch npService npUpdate event
        this.npService.npUpdate.subscribe(function (updated) {
            _this.setTracks();
        });
        //Set tracksLoading to false
        this.tracksLoading = false;
    };
    StreamPlayerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-stream-player',template:/*ion-inline-start:"/Users/matt/projects/alphaweb/appp-funkflex/src/pages/stream-player/stream-player.component.html"*/'<ion-header>\n\n	<ion-navbar>\n		\n		<ion-buttons start>\n		<button *ngIf="rtlBack||is_registration_page" (click)="backRtlTransition()" ion-button class="custom-back-button">\n		    <ion-icon name="arrow-back"></ion-icon>\n		    {{ \'Back\' | translate }}\n		</button>\n\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n\n		</ion-buttons>\n\n	    <img class="header-logo" *ngIf="show_header_logo" [src]="header_logo_url" />\n\n    	<ion-title *ngIf="!show_header_logo">{{title | translate}}</ion-title>\n\n	    <ion-buttons end>\n            <button ion-button (click)="openFBMessenger()">\n                <ion-icon name="fa-comments"></ion-icon>\n            </button>\n		</ion-buttons>\n    </ion-navbar>\n    \n    <ion-toolbar id="stations-toolbar">\n\n        <button ion-button clear (click)="playStation(\'97\')">\n            97\n            <ion-icon *ngIf="selectedStation == \'97\'" name="fa-volume-up"></ion-icon>\n            <ion-icon *ngIf="selectedStation != \'97\'" name="fa-volume-off"></ion-icon>\n        </button>\n\n        <button ion-button clear (click)="playStation(\'107.5\')">\n            107.5\n            <ion-icon *ngIf="selectedStation == \'107.5\'" name="fa-volume-up"></ion-icon>\n            <ion-icon *ngIf="selectedStation != \'107.5\'" name="fa-volume-off"></ion-icon>\n        </button>\n\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class="streaming-logo">\n        <img src="assets/stream-logo.png" />\n    </div>\n    \n    <div class="main-player">\n        <app-now-playing [currentTrack]="currentTrack" [trackLoaded]="trackLoaded" [class]="playeractive?\'show-now-player\':\'hide-now-player\'"></app-now-playing>\n        <app-playlist [class]="playlistactive?\'show-play-list\':\'hide-play-list\'" [tracks]="tracks" [tracksLoading]="tracksLoading"></app-playlist>\n    </div>\n</ion-content>\n\n\n<div>\n  \n  <div class="notifications" *ngIf="notifications.stack">\n      <div *ngFor="let notification of notifications.stack" class="msg {{ notification.type }}">\n          {{ notification.message }}\n      </div>\n  </div>\n\n  <footer class="main-footer">\n      <div class="inner">\n          <ul class="footer-nav">\n              <li>\n                  <a href="#" (click)="showPlayer($event)">\n                      <i class="fas fa-volume-up"></i> Player\n                  </a>\n              </li>\n              <li class="play-btn" (click)="toggleStreamingPlayer($event)">\n                  <a href="#">\n                      <i class="fas fa-play" *ngIf="!streaming.is_playing && !streaming.is_loading"></i>\n                      <i class="fas fa-pause" *ngIf="streaming.is_playing && !streaming.is_loading"></i>\n                      <i class="fas fa-spinner fa-pulse" *ngIf="streaming.is_loading"></i>\n                  </a>\n              </li>\n              <li>\n                  <a href="#" (click)="showPlaylist($event)">  \n                      <i class="fas fa-clock"></i> Playlist\n                  </a>\n              </li>\n          </ul>\n      </div>\n  </footer>\n</div>'/*ion-inline-end:"/Users/matt/projects/alphaweb/appp-funkflex/src/pages/stream-player/stream-player.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_3__providers_facebook_messenger_fb_messenger_service__["a" /* FBMessengerService */],
            __WEBPACK_IMPORTED_MODULE_4__services_now_playing_service__["a" /* NowPlayingService */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6__services_streaming_service__["a" /* StreamingService */],
            __WEBPACK_IMPORTED_MODULE_2__services_notifications_service__["a" /* NotificationsService */]])
    ], StreamPlayerComponent);
    return StreamPlayerComponent;
}());

//# sourceMappingURL=stream-player.component.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FBMessengerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FBMessengerService = /** @class */ (function () {
    function FBMessengerService(events, platform) {
        this.events = events;
        this.platform = platform;
    }
    FBMessengerService.prototype.openPage = function (page) {
        this.events.publish('openpage', page);
    };
    FBMessengerService.prototype.openMessenger = function () {
        if (!this.platform.is('ios') && !this.platform.is('android')) {
            this.openPage({ url: 'https://www.messenger.com/t/funkflex', target: '_blank', extra_classes: 'system' });
        }
        else if (this.platform.is('ios')) {
            this.openPage({ url: 'fb-messenger://user-thread/63447391760', target: '_blank', extra_classes: 'system' });
        }
        else if (this.platform.is('android')) {
            this.openPage({ 'url': 'fb-messenger://user/63447391760', target: '_blank', extra_classes: 'system' });
        }
    };
    FBMessengerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
    ], FBMessengerService);
    return FBMessengerService;
}());

//# sourceMappingURL=fb-messenger.service.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NowPlayingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_xml2js__ = __webpack_require__(584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_xml2js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_xml2js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_track_model__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__streaming_service__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__notifications_service__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// creation and utility methods




var NowPlayingService = /** @class */ (function () {
    function NowPlayingService(http, streaming, notifications) {
        var _this = this;
        this.http = http;
        this.streaming = streaming;
        this.notifications = notifications;
        this.recentlyPlayed = [];
        this.searchedItunes = [];
        this.npUpdate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.count_streaming_played_subscribe = 0;
        this.lastFetchTime = 0;
        this.tracksList = [];
        this.trackLoaded = false;
        this.lastTrackCount = 0;
        this.errorConnectCount = 0;
        this.currentTrack = this.dummyTrack();
        this.resetDelay();
        //Load current track onInit
        this.trackObs = this.getCurrentTrackObs();
        this.trackObs.subscribe(function (track) {
            _this.trackLoaded = true;
        });
        //Watch when streaming is played to keep now playing up-to-date
        // this.streaming.played.subscribe(() => {
        //Set current track
        // console.log('streaming.played');
        // console.log('Set current track');
        // this.getCurrentTrack();
        // this.notifications.create('warn', 'Set current track for 97');
        // });
    }
    /**
     * Returns a dummy track using default title & artist from environment
     *
     * @return     Track  Dummy track object
     */
    NowPlayingService.prototype.dummyTrack = function () {
        var dateObj = new Date();
        var data = {
            title: __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].now_playing.default_title,
            artist: __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].now_playing.default_artist,
            // string otherwise you'll "trim is not a function"
            played_at: dateObj.getTime().toString(),
            duration: '00:00:10'
        };
        console.log('dummyTrack this.streaming.currentStation', this.streaming.currentStation);
        if (this.streaming.currentStation) {
            console.log('dummyTrack currentStation cover_art', this.streaming.currentStation.cover_art);
            data.cover_art = this.streaming.currentStation.cover_art;
        }
        else {
            console.log('dummyTrack currentStation is empty');
        }
        return new __WEBPACK_IMPORTED_MODULE_5__models_track_model__["a" /* Track */](data);
    };
    NowPlayingService.prototype.resetDelay = function () {
        // console.log('resetDelay');
        this.reconnectionDelay = 5; // seconds
        this.errorConnectCount = 0;
    };
    NowPlayingService.prototype.nextDelay = function () {
        this.reconnectionDelay = this.reconnectionDelay * 2;
        // max 1 minute
        if (this.reconnectionDelay > 60) {
            this.reconnectionDelay = 60;
        }
        console.log('nextDelay', this.reconnectionDelay);
        return this.reconnectionDelay;
    };
    /**
     * Determines if track has been recently played.
     *
     * @param      Track   track   The track
     * @return     boolean  True if has track has been recently played, False otherwise.
     */
    NowPlayingService.prototype.hasTrackHasBeenRecentlyPlayed = function (track) {
        return this.recentlyPlayed.find(function (obj) { return obj['played_at'] == track['played_at']; }) !== undefined;
    };
    /**
     * Gets the recently played list in reverse
     *
     * @return     Track[]  The reversed recently played list.
     */
    NowPlayingService.prototype.getRecentlyPlayed = function () {
        return this.recentlyPlayed.reverse();
    };
    /**
     * Adds a track to recentlyPlayed array.
     *
     * @param      Track  track   The track
     */
    NowPlayingService.prototype.addRecentlyPlayed = function (track) {
        if (track) {
            var nextIndex = this.recentlyPlayed.length;
            this.recentlyPlayed[nextIndex] = track;
        }
    };
    /**
     * Returns environment variable to determine if formatting with iTunes
     * should be attempted
     *
     * @return     boolean  True, False otherwise
     */
    NowPlayingService.prototype.shouldFormatTracks = function () {
        return __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].now_playing.format_tracks;
    };
    NowPlayingService.prototype.getItunesCoverArt = function (track) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!track.title) {
                resolve(track);
            }
            var searchUrl = 'https://itunes.apple.com/search?term=';
            searchUrl += encodeURI(track.title + ' by ' + track.artist);
            searchUrl += "&limit=1&entity=song";
            var existingTrack = _this.searchedItunes.find(function (obj) { return (obj['title'] == track['title']) && (obj['artist'] == track['artist']); });
            if (existingTrack) {
                // console.log('old search iTunes', existingTrack);
                resolve(existingTrack);
            }
            else {
                // console.log('search iTunes');
                if (track.title == 'CAMILO COMMERCIAL FREE MIX') {
                    // track.cover_art = 'https://i1.sndcdn.com/avatars-000069594518-o46d51-t200x200.jpg';
                    track.duration = 600000;
                    _this.searchedItunes.push(track);
                    resolve(track);
                }
                // console.log('searchUrl', searchUrl);
                _this.http.get(searchUrl).toPromise().then(function (response) {
                    // console.log('response', response);
                    if (response.results.length) {
                        var itunesTrack = response.results[0];
                        // console.log('response from iTunes', itunesTrack)
                        // track.title = result.trackCensoredName;
                        track.album = itunesTrack.collectionCensoredName;
                        // track.artist = result.artistName;
                        track.cover_art = itunesTrack.artworkUrl100.replace('100x100', '256x256');
                    }
                    // console.log('hereherehere');
                    _this.searchedItunes.push(track);
                    resolve(track);
                });
            }
        });
    };
    NowPlayingService.prototype.stopRepeatFetch = function () {
        var now = new Date();
        var currentFetchTime = Math.ceil(now / 1000);
        // console.log('currentFetchTime', currentFetchTime)
        // console.log('this.lastFetchTime', this.lastFetchTime)
        if (this.lastFetchTime + 5 > currentFetchTime) {
            // console.log('stopRepeatFetch stop')
            return true;
        }
        else {
            // console.log('stopRepeatFetch allow')
            return false;
        }
    };
    NowPlayingService.prototype.setLastFetchTime = function () {
        var date = new Date();
        this.lastFetchTime = Math.ceil(date / 1000);
        // console.log('setLastFetchTime', this.lastFetchTime)
    };
    NowPlayingService.prototype.fetchTrack = function (limit) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var dataUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].now_playing.data_url.replace('{{limit}}', limit);
            if (_this.streaming.stations.length == 0) {
                // console.log('fetchTrack in 1 second');
                setTimeout(function () { return _this.fetchTrack(limit); }, 1000);
                return;
            }
            dataUrl = dataUrl.replace('{{station}}', _this.streaming.currentStation.callsign);
            if (_this.stopRepeatFetch()) {
                // console.log('stopRepeatFetch yes');
                resolve(_this.tracksList);
            }
            _this.setLastFetchTime();
            // console.log('fetching', dataUrl);
            _this.http.get(dataUrl, { responseType: 'text' })
                .map(function (xml) {
                _this.tracksList = [];
                _this.parseXML(xml);
            })
                .subscribe(function (data) {
                resolve(_this.tracksList);
            }, function (error) {
                // It failed to change the delay for the next fetch
                // @TODO
                reject([_this.dummyTrack()]);
            });
        });
    };
    NowPlayingService.prototype.parseXML = function (xml) {
        // Triton Digital
        var _this = this;
        // Parse XML to JSON
        __WEBPACK_IMPORTED_MODULE_3_xml2js__["parseString"](xml, function (error, parsed) {
            //If list of tracks is found, begin loop
            if (parsed['nowplaying-info-list'] && parsed['nowplaying-info-list']['nowplaying-info']) {
                var _loop_1 = function (track) {
                    //Create track data for later use
                    var trackData = {};
                    track['property'].map(function (prop) {
                        if (prop['$']['name'] == "cue_title") {
                            trackData['title'] = prop['_'];
                        }
                        else if (prop['$']['name'] == "track_artist_name") {
                            trackData['artist'] = prop['_'];
                        }
                        else if (prop['$']['name'] == "track_album_name") {
                            trackData['album'] = prop['_'];
                        }
                        else if (prop['$']['name'] == "cue_time_start") {
                            trackData['played_at'] = prop['_'];
                        }
                        else if (prop['$']['name'] == "cue_time_duration") {
                            trackData['duration'] = prop['_'];
                        }
                    });
                    // If track doesn't have played_at grab it from timestamp attribute
                    if (trackData['played_at'] == undefined) {
                        trackData['played_at'] = track['$']['timestamp'] * 1000;
                    }
                    // Push new Track to tracksList
                    _this.tracksList.push(new __WEBPACK_IMPORTED_MODULE_5__models_track_model__["a" /* Track */](trackData));
                    // console.log('NowPlayingService fetch Track', this.tracksList[0]);
                };
                //Loop through track properties and populate trackData
                for (var _i = 0, _a = parsed['nowplaying-info-list']['nowplaying-info']; _i < _a.length; _i++) {
                    var track = _a[_i];
                    _loop_1(track);
                }
            }
        });
    };
    NowPlayingService.prototype.handleError = function (operation) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].create(function (observer) {
            _this.observer = observer;
            observer.next(_this.dummyTrack());
            // start the recursive function looping
            // this.getCurrentTrack();
        });
    };
    NowPlayingService.prototype.getCurrentTrackObs = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].create(function (observer) {
            _this.observer = observer;
            observer.next(_this.dummyTrack());
            // start the recursive function looping
            _this.getCurrentTrack();
        });
    };
    NowPlayingService.prototype.afterFetchingTrack = function (tracks) {
        var _this = this;
        if (tracks && tracks.length === 0)
            return;
        // console.log('afterFetchingTrack tracks', tracks)
        var hasCoverArt = false;
        var _track = tracks[0];
        var timeout = (this.errorConnectCount) ? this.nextDelay() * 1000 : _track.timeUntilEnds();
        // console.log('timeout for next fetch', timeout);
        if (!this.lastTrack || this.lastTrack.title != _track.title) {
            this.lastTrack = _track;
            this.lastTrackCount = 0;
            // Only change the playing now if there are two.
            // This ensures that the feed is updating and we are 
            // displaying the correct image
            // if(this.tracksList.length && this.tracksList.length > 1 ) {
            // 	this.currentTrack = _track;
            // } else {
            // 	hasCoverArt = true;
            // 	this.currentTrack = this.dummyTrack();
            // 	this.observer.next(this.currentTrack);
            // 	setTimeout(() => {
            // 		this.getCurrentTrack();
            // 	}, 30000);
            // 	return;
            // }
        }
        // console.log('lastTrack track', this.lastTrack, _track);
        // console.log('lastTrack track titles', this.lastTrack.title, _track.title);
        if (this.lastTrack.title == _track.title) {
            this.lastTrackCount++;
            // console.log('lastTrackCount', this.lastTrackCount);
            if (this.lastTrackCount > 30) {
                // using the dummy track if the feed doesn't update
                hasCoverArt = true;
                this.currentTrack = this.dummyTrack();
                this.observer.next(this.currentTrack);
                // console.log('setTimeout for too many lastTrackCount', 30000)
                setTimeout(function () {
                    _this.getCurrentTrack();
                }, 30000);
                return;
            }
        }
        if (!hasCoverArt) {
            console.log('get iTunes cover art', _track);
            this.getItunesCoverArt(_track).then(function (track) {
                console.log('got cover art', track);
                _this.trackLoaded = true;
                _this.observer.next(track);
                //Push current track to recentlyPlayed if is different that latest
                if (track && !_this.hasTrackHasBeenRecentlyPlayed(track)) {
                    _this.addRecentlyPlayed(track);
                    //Emit npUpdate event
                    console.log('Emit npUpdate event');
                    _this.npUpdate.next(true);
                }
                else {
                    console.log('skipping emit npUpdate event');
                }
                if (_this.lastTrackCount > 30) {
                    // the feed hasn't updated in a while, check every 30 seconds instead
                    timeout = 30000;
                }
                // console.log('timeout without coverart', timeout)
                setTimeout(function () {
                    _this.getCurrentTrack();
                }, timeout);
            }).catch(function (error) {
                // console.log('getting iTunes cover art failed');
                setTimeout(function () {
                    //Add error notification
                    _this.notifications.create('error', 'Unable to load now playing information.');
                    //Set track with dummy track
                    _this.currentTrack = _this.dummyTrack();
                    _this.observer.next(_this.currentTrack);
                    //Set trackLoaded to true
                    if (!_this.trackLoaded) {
                        _this.trackLoaded = true;
                    }
                    var retryTimeout = (_this.errorConnectCount === 0) ? 30000 : _this.errorConnectCount * 30000;
                    if (retryTimeout > 60000) {
                        retryTimeout = 60000;
                    }
                    // console.log('retryTimeout', retryTimeout)
                    //Set 10 second timeout and check for track again
                    setTimeout(function () {
                        _this.getCurrentTrack();
                    }, retryTimeout);
                }, 500);
            });
        }
    };
    /**
     * Gets and sets the current track.
     *
     * @return     void
     */
    NowPlayingService.prototype.getCurrentTrack = function () {
        var _this = this;
        this.fetchTrack(1).then(
        // after getting cover art from iTunes
        function (tracks) {
            // console.log('fetching track succeeded');
            _this.resetDelay();
            _this.afterFetchingTrack(tracks);
        }).catch(
        // generic track
        function (tracks) {
            // console.log('fetching track failed');
            _this.errorConnectCount++;
            _this.afterFetchingTrack(tracks);
        });
    };
    NowPlayingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_6__streaming_service__["a" /* StreamingService */],
            __WEBPACK_IMPORTED_MODULE_7__notifications_service__["a" /* NotificationsService */]])
    ], NowPlayingService);
    return NowPlayingService;
}());

//# sourceMappingURL=now-playing.service.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Track; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__(200);

var Track = /** @class */ (function () {
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
    function Track(data) {
        // console.log(data);
        this.title = (data['title']) ? data['title'].trim() : '';
        this.artist = (data['artist']) ? data['artist'].trim() : '';
        this.album = (data['album']) ? data['album'].trim() : '';
        this.cover_art = (data['cover_art']) ? data['cover_art'].trim() : '';
        this.purchase_link = (data['purchase_link']) ? data['purchase_link'].trim() : '';
        this.duration = (data['duration']) ? data['duration'].trim() : '';
        this.played_at = (data['played_at']) ? data['played_at'].trim() : '';
        var date = new Date();
        // console.log('now', date, this.played_at);
        var played_at = new Date((this.played_at / 1000) * 1000);
        // console.log('played at', played_at);
        if (this.played_at && this.duration) {
            var duration = this.formatDurationTime(this.duration);
            this.ends_at = ((this.played_at / 1000) + (duration / 1000)) * 1000;
            // console.log('ends_at', this.ends_at);
        }
        var ends_in = this.ends_at - date.getTime();
        // console.log('timeUntilEnds ends_in', ends_in);
        if (!this.cover_art && __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].now_playing.generic_cover) {
            this.cover_art = __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].now_playing.generic_cover;
        }
        if (this.played_at && this.duration) {
            this.duration = this.formatDurationTime(this.duration);
            this.ends_at = ((this.played_at / 1000) + (this.duration / 1000)) * 1000;
        }
        else {
            this.ends_at = (new Date).getTime() + 30000;
        }
    }
    /**
     * Turns 00:03:12
     * Into 192000
     * @param time string
     */
    Track.prototype.formatDurationTime = function (time) {
        // console.log('formatDurationTime time', time)
        return (Number(time.split(':')[0]) * 3600 + Number(time.split(':')[1]) * 60 + Number(time.split(':')[2])) * 1000;
    };
    /**
     * Determines if track has ended.
     *
     * @return     boolean  True if has ended, False otherwise.
     */
    Track.prototype.hasEnded = function () {
        var date = new Date();
        return date.getTime() >= this.ends_at;
    };
    /**
     * Returns time until track ends
     *
     * @return     number  Milliseconds until track ends
     */
    Track.prototype.timeUntilEnds = function () {
        var date = new Date();
        var ends_in = this.ends_at - date.getTime();
        return (ends_in < 0) ? 10000 : ends_in;
    };
    /**
     * Returns played_at Date object
     *
     * @return     Date  Played_at date object
     */
    Track.prototype.playedAtDate = function () {
        return new Date(this.played_at);
    };
    return Track;
}());

//# sourceMappingURL=track.model.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BpProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_transfer__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_device__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_action_sheet__ = __webpack_require__(128);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/*
 * Services for BuddyPress API
*/
var BpProvider = /** @class */ (function () {
    function BpProvider(http, actionSheet, Camera, Device, Transfer, File) {
        this.http = http;
        this.actionSheet = actionSheet;
        this.Camera = Camera;
        this.Device = Device;
        this.Transfer = Transfer;
        this.File = File;
        this.data = null;
        this.options = {
            quality: 50,
            destinationType: this.Camera.DestinationType.FILE_URI,
            correctOrientation: true,
            targetWidth: 1204,
            targetHeight: 1204
        };
        var item = window.localStorage.getItem('myappp');
        this.url = JSON.parse(item).wordpress_url;
        this.restBase = 'wp-json/ap-bp/v1/';
    }
    // pass full route url with login data. Some routes do not require login.
    BpProvider.prototype.getItems = function (route, login_data, page) {
        var _this = this;
        // set pagination
        if (!page) {
            var page_1 = '1';
        }
        var user_id = (login_data && login_data.user_id ? '&user_id=' + login_data.user_id : '');
        var token = (login_data ? '&token=' + login_data.token : '');
        var concat;
        if (route.indexOf('?') >= 0) {
            concat = '&';
        }
        else {
            concat = '?';
        }
        var url = route + concat + 'page=' + page + user_id + token;
        return new Promise(function (resolve, reject) {
            _this.http.get(url)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                // probably a bad url or 404
                reject(error);
            });
        });
    };
    BpProvider.prototype.getItem = function (route, login_data) {
        var _this = this;
        var concat;
        if (route.indexOf('?') >= 0) {
            concat = '&';
        }
        else {
            concat = '?';
        }
        var user_id = (login_data && login_data.user_id ? 'user_id=' + login_data.user_id : '');
        var token = (login_data && login_data.token && login_data.user_id ? '&token=' + login_data.token : '');
        var url = this.url + this.restBase + route;
        url = url + concat + user_id + token;
        console.log(url);
        return new Promise(function (resolve, reject) {
            _this.http.get(url)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                // probably a bad url or 404
                reject(error);
            });
        });
    };
    BpProvider.prototype.doCamera = function (type) {
        var _this = this;
        if (type === 'camera') {
            this.options.sourceType = this.Camera.PictureSourceType.CAMERA;
        }
        else {
            this.options.sourceType = this.Camera.PictureSourceType.PHOTOLIBRARY;
        }
        return new Promise(function (resolve, reject) {
            _this.Camera.getPicture(_this.options).then(function (imageData) {
                // imageData is either a base64 encoded string or a file URI
                // If it's base64:
                // let base64Image = "data:image/jpeg;base64," + imageData;
                resolve(imageData);
            }, function (err) {
                alert(err);
                reject(err);
            });
        });
    };
    /* Returns promise.
     */
    BpProvider.prototype.postWithImage = function (login_data, activity, camImage, group_id) {
        var _this = this;
        if (!activity.content && camImage) {
            // let people post only an image
            activity.content = '';
        }
        var route = this.url + this.restBase + 'activity';
        return new Promise(function (resolve, reject) {
            var imageURI = '';
            var fileTransfer = _this.Transfer.create();
            var options = {};
            if (camImage.indexOf('{') === 0) { // from cordova-plugin-camera-with-exif
                var img = JSON.parse(camImage);
                imageURI = img.filename;
            }
            else { // from cordova-plugin-camera
                imageURI = camImage;
            }
            var image = imageURI.substr(imageURI.lastIndexOf('/') + 1);
            var name = image.split("?")[0];
            var anumber = image.split("?")[1];
            if ('Android' === _this.Device.platform) {
                image = anumber + '.jpg';
            }
            // this creates a random string based on the date
            var d = new Date().toTimeString();
            var random = d.replace(/[\W_]+/g, "").substr(0, 6);
            options = {
                fileKey: 'activity_image',
                // prepend image name with random string to avoid duplicate upload errors
                fileName: imageURI ? random + image : random,
                mimeType: 'image/jpeg',
                httpMethod: "POST",
                chunkedMode: false
            };
            var params = {
                content: activity.content,
                user_id: login_data.user_id,
                token: login_data.token
            };
            if (group_id) {
                params['primary_id'] = group_id;
            }
            options.params = params;
            fileTransfer.upload(imageURI, route, options, true).then(function (data) {
                console.log(data);
                resolve(JSON.parse(data.response));
            }).catch(function (FileTransferError) {
                _this.handleError(FileTransferError);
                reject(FileTransferError);
            });
        }); // end promise
    };
    /* Returns promise.
     */
    BpProvider.prototype.postTextOnly = function (login_data, activity, group_id) {
        var _this = this;
        var route = this.url + this.restBase + 'activity';
        var data = {
            user_id: login_data.user_id,
            content: activity.content,
            token: login_data.token,
        };
        if (activity.parent) {
            data.type = 'activity_comment';
            data.parent = activity.parent;
            data.id = activity.parent;
        }
        if (group_id) {
            data.type = 'activity_update';
            data.primary_id = group_id;
        }
        return new Promise(function (resolve, reject) {
            _this.http.post(route, data)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                console.log(error);
                reject(error);
            });
        }); // end promise
    };
    BpProvider.prototype.updateItem = function (action, login_data, activity_id) {
        var _this = this;
        var route = this.url + this.restBase + 'activity/' + activity_id;
        var data = {
            user_id: login_data.user_id,
            action: action,
            token: login_data.token
        };
        return new Promise(function (resolve, reject) {
            _this.http.post(route, data)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                console.log(error);
                reject(error);
            });
        }); // end promise
    };
    BpProvider.prototype.joinGroup = function (item, login_data) {
        var _this = this;
        var route = this.url + this.restBase + 'groups/join-group';
        var data = {
            user_id: login_data.user_id,
            group_id: item.id,
            token: login_data.token
        };
        return new Promise(function (resolve, reject) {
            _this.http.post(route, data)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                console.log(error);
                reject(error);
            });
        }); // end promise
    };
    BpProvider.prototype.doFriend = function (friendId, login_data, unfriend) {
        var _this = this;
        var route = this.url + this.restBase + 'friends/friend/' + friendId;
        var action;
        if (unfriend) {
            action = 'remove_friend';
        }
        else {
            action = 'add_friend';
        }
        var data = {
            action: action,
            user_id: login_data.user_id,
            token: login_data.token
        };
        return new Promise(function (resolve, reject) {
            _this.http.post(route, data)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                console.log(error);
                reject(error);
            });
        }); // end promise
    };
    BpProvider.prototype.acceptWithdrawFriendship = function (friendId, login_data, withdraw) {
        var _this = this;
        var route = this.url + this.restBase + 'friends/requests/' + friendId;
        var action;
        if (withdraw) {
            action = 'withdraw';
        }
        else {
            action = 'accept';
        }
        var data = {
            action: action,
            user_id: login_data.user_id,
            token: login_data.token
        };
        return new Promise(function (resolve, reject) {
            _this.http.post(route, data)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                console.log(error);
                reject(error);
            });
        }); // end promise
    };
    BpProvider.prototype.sendMessage = function (recipients, login_data, subject, content, threadId) {
        var _this = this;
        if (!subject) {
            subject = '';
        }
        var route = this.url + this.restBase + 'messages/send';
        var data = {
            recipients: recipients,
            subject: subject,
            content: content,
            user_id: login_data.user_id,
            token: login_data.token,
        };
        if (threadId) {
            data.thread_id = threadId;
        }
        console.log('sendMessage', route, data);
        return new Promise(function (resolve, reject) {
            _this.http.post(route, data)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                console.log(error);
                reject(error);
            });
        }); // end promise
    };
    BpProvider.prototype.getNotifications = function (login_data) {
        // let user_id = ( login_data && login_data.user_id ? '&user_id=' + login_data.user_id : '' );
        // let token = ( login_data ? '&token=' + login_data.token : '' );
        var _this = this;
        var data = '?user_id=' + login_data.user_id + '&token=' + login_data.token;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.url + _this.restBase + 'notifications' + data)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                // probably a bad url or 404
                reject(error);
            });
        });
    };
    BpProvider.prototype.clearNotification = function (notification, login_data) {
        var _this = this;
        var data = {
            user_id: (login_data && login_data.user_id) ? login_data.user_id : '',
            token: (login_data && login_data.token) ? login_data.token : '',
            component: notification.component,
            action: notification.action
        };
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.url + _this.restBase + 'notifications', data)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                // probably a bad url or 404
                reject(error);
            });
        });
    };
    BpProvider.prototype.handleError = function (err) {
        console.warn(err);
    };
    BpProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_action_sheet__["a" /* ActionSheet */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_transfer__["a" /* Transfer */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */]])
    ], BpProvider);
    return BpProvider;
}());

//# sourceMappingURL=bp-provider.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Posts; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the Posts provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var Posts = /** @class */ (function () {
    function Posts(http, storage) {
        this.http = http;
        this.storage = storage;
        this.data = null;
    }
    Posts.prototype.load = function (url, page) {
        var _this = this;
        // set pagination
        if (!page) {
            var page_1 = '1';
        }
        // if (this.data) {
        //   // already loaded data. this is handled elsewhere for now
        //   return Promise.resolve(this.data);
        // }
        return new Promise(function (resolve, reject) {
            var concat;
            // check if url already has a query param
            if (url && url.indexOf('?') > 0) {
                concat = '&';
            }
            else {
                concat = '?';
            }
            _this.storage.get('app_language').then(function (lang) {
                var language = '';
                if (lang && typeof (lang) === 'object') {
                    language = '&lang=' + lang.code;
                }
                else if (lang && typeof (lang) === 'string') {
                    language = '&lang=' + lang;
                }
                _this.http.get(url + concat + 'appp=3&page=' + page + language)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    _this.data = data;
                    resolve(_this.data);
                }, function (error) {
                    // probably a bad url or 404
                    reject(error);
                });
            });
        });
    };
    Posts = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], Posts);
    return Posts;
}());

//# sourceMappingURL=posts.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoUtils; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VideoUtils = /** @class */ (function () {
    function VideoUtils(platform) {
        this.platform = platform;
    }
    // stop videos from playing when app is exited, required by Google
    VideoUtils.prototype.killVideos = function (elementRef) {
        this.platform.pause.subscribe(function () {
            var frames = elementRef.nativeElement.getElementsByTagName('iframe');
            var Vidsrc;
            var _loop_1 = function (i) {
                if (/youtube|wistia|vimeo/.test(frames[i].src)) {
                    Vidsrc = frames[i].src;
                    frames[i].src = '';
                    setTimeout(function () {
                        frames[i].src = Vidsrc;
                    }, 500);
                }
            };
            for (var i in frames) {
                _loop_1(i);
            }
        });
    };
    VideoUtils = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
    ], VideoUtils);
    return VideoUtils;
}());

//# sourceMappingURL=video-utils.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IAP; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_in_app_purchase__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appads_appads__ = __webpack_require__(175);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  In App Purchases

  See http://ionicframework.com/docs/native/in-app-purchase/
  and https://github.com/AlexDisler/cordova-plugin-inapppurchase
*/
var IAP = /** @class */ (function () {
    function IAP(iap, appads, storage) {
        this.iap = iap;
        this.appads = appads;
        this.storage = storage;
    }
    // Get products
    // getProducts( id ) {
    //   console.log('getting products for ' + this.productId )
    //   return new Promise(resolve => {
    //     this.iap.getProducts( [ this.productId ] ).then( products => {
    //       console.log('got products', products)
    //       resolve(products)
    //     })
    //     .catch( err => {
    //       console.log(err)
    //     })
    //   });
    // }
    // buy a product, requires ID that looks like this: com.artofmanliness.artofmanliness.noadssubscription
    IAP.prototype.buy = function (id) {
        var _this = this;
        // we have to get products before we can buy
        this.iap.getProducts([id]).then(function (products) {
            // after we get product, buy it
            _this.iap.buy(id).then(function (result) {
                _this.storage.set('purchases', id);
                _this.appads.hideAll();
            })
                .catch(function (err) {
                alert(err);
                console.log(err);
            });
        })
            .catch(function (err) {
            alert(err);
            console.log(err);
        });
    };
    // buy a product, requires ID that looks like this: com.artofmanliness.artofmanliness.noadssubscription
    IAP.prototype.subscribe = function (id) {
        var _this = this;
        // we have to get products before we can buy
        this.iap.getProducts([id]).then(function (products) {
            // after we get product, buy it
            _this.iap.subscribe(id).then(function (result) {
                _this.storage.set('purchased_' + id, true);
            })
                .catch(function (err) {
                alert(err.errorMessage);
                console.log(err);
            });
        })
            .catch(function (err) {
            alert(err.errorMessage);
            console.log(err);
        });
    };
    // buy a product, then remove ads
    IAP.prototype.subscribeNoAds = function (id) {
        var _this = this;
        // we have to get products before we can buy
        this.iap.getProducts([id]).then(function (products) {
            // after we get product, buy it
            _this.iap.subscribe(id).then(function (result) {
                _this.storage.set('purchased_ad_removal', true);
                _this.appads.hideAll();
            })
                .catch(function (err) {
                var error = 'Error, please try again.';
                if (err && err.message) {
                    error = err.message;
                }
                else if (err && err.errorMessage) {
                    error = err.errorMessage;
                }
                alert(error);
                console.log(err);
            });
        })
            .catch(function (err) {
            var error = 'Error, please try again.';
            if (err && err.message) {
                error = err.message;
            }
            else if (err && err.errorMessage) {
                error = err.errorMessage;
            }
            alert(error);
            console.log(err);
        });
    };
    // buy a product, requires ID from iTunes or Gplay
    // buyProduct( id ) {
    //   console.log('buying ' + id)
    //   return new Promise(resolve => {
    //     this.iap.buy( id ).then( result => {
    //       console.log('bought ', result)
    //       alert("Purchase successful, thank you!")
    //       this.appads.hideAll();
    //       resolve(result)
    //     })
    //     .catch( err => {
    //       console.log(err)
    //     })
    //   });
    // }
    IAP.prototype.restoreNoAds = function (id) {
        var _this = this;
        this.productId = id;
        return new Promise(function (resolve) {
            _this.iap.restorePurchases().then(function (result) {
                for (var i = 0; i < result.length; ++i) {
                    // TODO: check result[i].state for cancelled or refunded
                    if (result[i].productId == _this.productId) {
                        _this.storage.set('purchased_ad_removal', true);
                        _this.appads.hideAll();
                        alert("Purchase restored, thank you!");
                        resolve(result);
                        return;
                    }
                }
                alert('No purchases found to restore.');
                resolve(result);
            })
                .catch(function (err) {
                var error = 'Error, please try again.';
                if (err && err.message) {
                    error = err.message;
                }
                else if (err && err.errorMessage) {
                    error = err.errorMessage;
                }
                alert(error);
                console.log(err);
            });
        });
    };
    IAP = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_in_app_purchase__["a" /* InAppPurchase */],
            __WEBPACK_IMPORTED_MODULE_3__appads_appads__["a" /* AppAds */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], IAP);
    return IAP;
}());

//# sourceMappingURL=inapppurchase.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkStatusService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NetworkStatusService = /** @class */ (function () {
    function NetworkStatusService(network, platform) {
        this.network = network;
        this.platform = platform;
        this.connectionObs = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.currentStatus = null;
        if (window.location && window.location.href && window.location.href.indexOf('localhost') >= 0)
            return;
        // only do this on a device
        if (this.platform.is('ios') || this.platform.is('android')) {
            this.initNetworkWatch();
        }
    }
    NetworkStatusService.prototype.networkStatus = function () {
        // return the observable
        return this.connectionObs;
    };
    /**
     *
     * @param wait optional How long to wait which confirms we have truly lost a connection
     */
    NetworkStatusService.prototype.initNetworkWatch = function (wait) {
        var _this = this;
        wait = (wait) ? wait : 3000;
        if (!this.network)
            return;
        // Initial status
        if (this.network.type === 'none') {
            this.connectionObs.next(false);
            this.currentStatus = false;
        }
        else {
            this.connectionObs.next(true);
            this.currentStatus = true;
        }
        // Subscribe to changes
        this.network.onchange().subscribe(function () {
            console.log('networkstatusservice: network type', _this.network.type);
            // Only change the app's network status if the network type changes and stays
            // consisent for X seconds (wait variable)
            var current_type = _this.network.type;
            // filter out the frequent changes
            setTimeout(function () {
                if (_this.network.type == 'none' && _this.network.type == current_type) {
                    _this.connectionObs.next(false);
                    _this.currentStatus = false;
                }
                else if (_this.network.type != 'none' && _this.network.type == current_type) {
                    _this.connectionObs.next(true);
                    _this.currentStatus = true;
                }
            }, wait);
        }, function (err) { console.warn(err); });
    };
    NetworkStatusService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* Platform */]])
    ], NetworkStatusService);
    return NetworkStatusService;
}());

//# sourceMappingURL=network-status.service.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WPlogin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logins_login_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user_model__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
 * Login to WordPress from the app
*/
var WPlogin = /** @class */ (function () {
    function WPlogin(loginservice, http) {
        this.loginservice = loginservice;
        this.http = http;
        this.data = null;
        var item = window.localStorage.getItem('myappp');
        this.url = JSON.parse(item).wordpress_url;
    }
    /* Returns promise.
     * Usage:
     */
    WPlogin.prototype.login = function (form) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!_this.url)
                reject({ data: { message: "No WordPress URL set. " } });
            var url = _this.url + 'wp-json/appp/v1/login';
            var formData = new FormData();
            formData.append("username", form.user);
            formData.append("password", form.pass);
            var request = new XMLHttpRequest();
            request.open("POST", url);
            request.send(formData);
            request.onload = function (e) {
                if (request.readyState === 4) {
                    if (request.status === 200) {
                        console.log(request.responseText);
                        try {
                            var login_data = JSON.parse(request.responseText);
                            login_data = (login_data.data) ? login_data.data : login_data;
                            if (typeof login_data.username !== 'undefined') {
                                _this.loginservice.setLoginStatus(new __WEBPACK_IMPORTED_MODULE_4__models_user_model__["a" /* User */](login_data));
                            }
                        }
                        catch (error) {
                            console.log(error);
                        }
                        resolve(JSON.parse(request.responseText));
                    }
                    else {
                        if (request.statusText) {
                            reject(request.statusText);
                        }
                        else {
                            reject('Failed, with no response from server');
                        }
                    }
                }
            };
        });
    };
    WPlogin.prototype.logout = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var url = _this.url + 'wp-json/appp/v1/logout';
            _this.http.get(url)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                if (data.success == true)
                    resolve(data);
                reject(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    WPlogin.prototype.register = function (data) {
        var _this = this;
        var url = this.url + 'wp-json/appp/v1/register';
        var params = Object.keys(data).map(function (k) {
            return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
        }).join('&');
        console.log(url + '?' + params);
        return new Promise(function (resolve, reject) {
            _this.http.post(url + '?' + params, null)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                console.log(error);
                reject(error);
            });
        }); // end promise
    };
    WPlogin.prototype.verifyUser = function (data) {
        var _this = this;
        var url = this.url + 'wp-json/appp/v1/verify';
        var params = Object.keys(data).map(function (k) {
            return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
        }).join('&');
        console.log(url + '?' + params);
        return new Promise(function (resolve, reject) {
            _this.http.post(url + '?' + params, null)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                console.log(error);
                reject(error);
            });
        }); // end promise
    };
    WPlogin.prototype.resendCode = function (data) {
        var _this = this;
        var url = this.url + 'wp-json/appp/v1/verify-resend';
        var params = Object.keys(data).map(function (k) {
            return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
        }).join('&');
        console.log(url + '?' + params);
        return new Promise(function (resolve, reject) {
            _this.http.post(url + '?' + params, null)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                console.log(error);
                reject(error);
            });
        }); // end promise
    };
    WPlogin.prototype.resetPassword = function (data) {
        var _this = this;
        var url = this.url + 'wp-json/appp/v1/reset-password';
        var params = Object.keys(data).map(function (k) {
            return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
        }).join('&');
        console.log(url + '?' + params);
        return new Promise(function (resolve, reject) {
            _this.http.post(url + '?' + params, null)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                console.log(error);
                reject(error);
            });
        }); // end promise
    };
    WPlogin.prototype.handleError = function (err) {
        console.warn(err);
    };
    WPlogin = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__logins_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], WPlogin);
    return WPlogin;
}());

//# sourceMappingURL=wplogin.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FbConnectApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fbconnect_settings__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_device__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__logins_login_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_user_model__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/*
  Facebook Connect

  Used when the login is directly in the app

  See http://ionicframework.com/docs/v2/native/facebook/
*/
var FbConnectApp = /** @class */ (function () {
    function FbConnectApp(http, storage, events, fbconnectvars, Facebook, Device, toastCtrl, loginservice, translate) {
        this.http = http;
        this.storage = storage;
        this.events = events;
        this.fbconnectvars = fbconnectvars;
        this.Facebook = Facebook;
        this.Device = Device;
        this.toastCtrl = toastCtrl;
        this.loginservice = loginservice;
        this.translate = translate;
    }
    FbConnectApp.prototype.login = function () {
        var _this = this;
        console.log('this.fbconnectvars.login_scope', this.fbconnectvars.login_scope);
        if (typeof this.Device.platform != 'string' && location.port != '8100') {
            this.translate.get('Please try from a device.').subscribe(function (text) {
                alert(text);
            });
            return;
        }
        this.Facebook.login(this.fbconnectvars.login_scope).then(function (result) {
            // we get back an auth response here, should save it or something
            _this.statusChangeCallback(result);
        });
    };
    // This is called with the results from from FB.getLoginStatus().
    FbConnectApp.prototype.statusChangeCallback = function (response) {
        // The response object is returned with a status field that lets the
        // app know the current login status of the person.
        // Full docs on the response object can be found in the documentation
        // for FB.getLoginStatus().
        if (response.status === 'connected') {
            // Logged into your app and Facebook.
            this.fbMe(response);
        }
        else if (response.status === 'not_authorized') {
            // The person is logged into Facebook, but not your app.
            // @TODO - Handle not authorized message
            console.log(this.fbconnectvars.l10n.not_authorized);
        }
        else {
            // The person is not logged into Facebook, so we're not sure if
            // they are logged into this app or not.
            // @TODO - Handle not loggedin message
            console.log(this.fbconnectvars.l10n.fb_not_logged_in);
        }
    };
    FbConnectApp.prototype.fbMe = function (response) {
        var _this = this;
        this.Facebook.api("/me?fields=" + this.fbconnectvars.me_fields, null).then(function (response) {
            _this.fetchUser_Callback(response);
        });
    };
    FbConnectApp.prototype.fetchUser_Callback = function (response) {
        var _this = this;
        // Send user info to WordPress login function
        if (typeof response.name != 'undefined' && typeof response.email != 'undefined') {
            var login_msg = this.fbconnectvars.l10n.login_msg.replace('{{USERNAME}}', response.name);
            var redirect_url = void 0;
            this.fbconnectvars.set_avatar(response);
            this.events.publish('fb:login', response);
            this.wplogin(response.name, response.email).then(function (data) {
                if (typeof (data) == 'number') {
                    // WP login failure
                    console.warn('WPLogin response was ' + data.toString() + '.  AppFBConnect plugin might not be active');
                    _this.fbconnectvars.loggout().then(function (fb_logout_response) {
                        console.log(fb_logout_response);
                        console.warn('Since WPLogin failed, loggedout() of Facebook now occurred');
                    });
                    _this.translate.get('Login failed').subscribe(function (text) {
                        _this.presentToast(text);
                    });
                    return false;
                }
                _this.loginservice.setLoginStatus(new __WEBPACK_IMPORTED_MODULE_10__models_user_model__["a" /* User */](data));
                console.log('After Facebook and WPLogin, wplogin response', data);
                _this.storage.set('user_login', data);
                // hide/show menu items in main app component
                _this.events.publish('user:login', data);
            });
        }
        else {
            console.log(response);
        }
    };
    FbConnectApp.prototype.wplogin = function (name, email) {
        var _this = this;
        var nameStripped = name.replace(/\s+/g, '');
        var fb_security = this.fbconnectvars.get_nonce();
        var ajaxurl = this.fbconnectvars.get_ajaxurl();
        var params = '?appp=3&action=appp_wp_fblogin&user_email=' + email + '&full_name=' + nameStripped + '&security=' + fb_security;
        return new Promise(function (resolve, reject) {
            console.log('attempt wplogin using fb_nonce: %s', ajaxurl + params);
            _this.http.post(ajaxurl + params, null).map(function (res) { return res.json(); }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                // WPLogin failed, let's try to logout, just in case
                console.log('wplogin failed; try to logout, just in case', error);
                var url = ajaxurl + '?action=apppajaxlogout';
                _this.http.get(url)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) { return console.log('wplogout successful', data); });
                alert(_this.fbconnectvars.l10n.wp_login_error);
                reject(error);
            });
        });
    };
    FbConnectApp.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 5000,
            position: 'bottom'
        });
        toast.present();
    };
    FbConnectApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_5__fbconnect_settings__["a" /* FBConnectAppSettings */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_9__logins_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["d" /* TranslateService */]])
    ], FbConnectApp);
    return FbConnectApp;
}());

//# sourceMappingURL=login-app.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(484);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpLoaderFactory */
/* unused harmony export MyMissingTranslationHandler */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_action_sheet__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_device__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_transfer__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_file_transfer__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_file__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_admob_free__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_facebook__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_in_app_browser__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_keyboard__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_network__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_social_sharing__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_push__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_dialogs__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_geolocation__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_in_app_purchase__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_media__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_streaming_media__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_camera_app_camera__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_posts_posts__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_globalvars_globalvars__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_appads_appads__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_logins_logins__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_facebook_login_iframe__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_facebook_login_app__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_facebook_fbconnect_settings__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_push_push__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_appwoo_appwoo__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__providers_appdata_appdata__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__providers_wplogin_wplogin__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__providers_logins_login_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__providers_language_language_service__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__providers_header_logo_header_logo__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__providers_video_video_utils__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__providers_appgeo_appgeo__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__providers_inapppurchase_inapppurchase__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__providers_download_download__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__providers_buddypress_bp_provider__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__providers_menus_menu_service__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__providers_network_network_status_service__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50_angulartics2_ga__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51_angulartics2_routerlessmodule__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__providers_analytics_analytics_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__pages_stream_player_main_player_main_player_component__ = __webpack_require__(596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__pages_stream_player_now_playing_now_playing_component__ = __webpack_require__(597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__pages_stream_player_playlist_playlist_component__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__providers_facebook_messenger_fb_messenger_service__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__pages_iframe_iframe__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__ionic_storage__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__pages_stream_player_stream_player_component__ = __webpack_require__(352);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























/* Providers */






























/* Other */


// required for ng translate, tells it to look in assets folder for trans files
function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, 'assets/i18n/', '.json');
}
var MyMissingTranslationHandler = /** @class */ (function () {
    function MyMissingTranslationHandler() {
    }
    MyMissingTranslationHandler.prototype.handle = function (params) {
        return params.key;
    };
    return MyMissingTranslationHandler;
}());

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_53__pages_stream_player_main_player_main_player_component__["a" /* MainPlayerComponent */],
                __WEBPACK_IMPORTED_MODULE_54__pages_stream_player_now_playing_now_playing_component__["a" /* NowPlayingComponent */],
                __WEBPACK_IMPORTED_MODULE_55__pages_stream_player_playlist_playlist_component__["a" /* PlaylistComponent */],
                __WEBPACK_IMPORTED_MODULE_59__pages_stream_player_stream_player_component__["a" /* StreamPlayerComponent */],
                __WEBPACK_IMPORTED_MODULE_57__pages_iframe_iframe__["a" /* Iframe */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_53__pages_stream_player_main_player_main_player_component__["a" /* MainPlayerComponent */],
                __WEBPACK_IMPORTED_MODULE_54__pages_stream_player_now_playing_now_playing_component__["a" /* NowPlayingComponent */],
                __WEBPACK_IMPORTED_MODULE_55__pages_stream_player_playlist_playlist_component__["a" /* PlaylistComponent */],
                __WEBPACK_IMPORTED_MODULE_59__pages_stream_player_stream_player_component__["a" /* StreamPlayerComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/bp-details/bp-details.module#BpDetailsPageModule', name: 'BpDetailsPage', segment: 'bp-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bp-group/bp-group.module#BpGroupPageModule', name: 'BpGroupPage', segment: 'bp-group', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bp-list/bp-list.module#BpListModule', name: 'BpList', segment: 'bp-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bp-messages/bp-messages.module#BpMessagesModule', name: 'BpMessages', segment: 'bp-messages', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bp-modal/bp-modal.module#BpModalModule', name: 'BpModal', segment: 'bp-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bp-notifications/bp-notifications.module#BpNotificationsModule', name: 'BpNotifications', segment: 'bp-notifications', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bp-profile/bp-profile.module#BpProfilePageModule', name: 'BpProfilePage', segment: 'bp-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/custom-pages/custom-page.module#CustomPageModule', name: 'CustomPage', segment: 'custom-page', priority: 'high', defaultHistory: [] },
                        { loadChildren: '../pages/download-list/download-list.module#DownloadListModule', name: 'DownloadList', segment: 'download-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/language-settings/language-settings.module#LanguageSettingsModule', name: 'LanguageSettings', segment: 'language-settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login-modal/login-modal.module#LoginModalModule', name: 'LoginModal', segment: 'login-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/media-list/media-list.module#MediaListModule', name: 'MediaList', segment: 'media-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/media-player/media-player.module#MediaPlayerModule', name: 'MediaPlayer', segment: 'media-player', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/post-details/post-details.module#PostDetailsPageModule', name: 'PostDetailsPage', segment: 'post-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/post-list/post-list.module#PostListModule', name: 'PostList', segment: 'post-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/push-settings/push-settings.module#PushSettingsModule', name: 'PushSettings', segment: 'push-settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_58__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_51_angulartics2_routerlessmodule__["a" /* Angulartics2RouterlessModule */].forRoot([__WEBPACK_IMPORTED_MODULE_50_angulartics2_ga__["a" /* Angulartics2GoogleAnalytics */]]),
                __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["b" /* TranslateLoader */],
                        useFactory: (HttpLoaderFactory),
                        deps: [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_59__pages_stream_player_stream_player_component__["a" /* StreamPlayerComponent */],
                __WEBPACK_IMPORTED_MODULE_57__pages_iframe_iframe__["a" /* Iframe */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* IonicErrorHandler */] },
                { provide: __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["a" /* MissingTranslationHandler */], useClass: MyMissingTranslationHandler },
                __WEBPACK_IMPORTED_MODULE_28__providers_camera_app_camera__["a" /* AppCamera */],
                __WEBPACK_IMPORTED_MODULE_29__providers_posts_posts__["a" /* Posts */],
                __WEBPACK_IMPORTED_MODULE_30__providers_globalvars_globalvars__["a" /* GlobalVars */],
                __WEBPACK_IMPORTED_MODULE_52__providers_analytics_analytics_service__["a" /* AnalyticsService */],
                __WEBPACK_IMPORTED_MODULE_31__providers_appads_appads__["a" /* AppAds */],
                __WEBPACK_IMPORTED_MODULE_33__providers_facebook_login_iframe__["a" /* FbConnectIframe */],
                __WEBPACK_IMPORTED_MODULE_34__providers_facebook_login_app__["a" /* FbConnectApp */],
                __WEBPACK_IMPORTED_MODULE_35__providers_facebook_fbconnect_settings__["a" /* FBConnectAppSettings */],
                __WEBPACK_IMPORTED_MODULE_36__providers_push_push__["a" /* PushService */],
                __WEBPACK_IMPORTED_MODULE_37__providers_appwoo_appwoo__["a" /* AppWoo */],
                __WEBPACK_IMPORTED_MODULE_38__providers_appdata_appdata__["a" /* AppData */],
                __WEBPACK_IMPORTED_MODULE_44__providers_appgeo_appgeo__["a" /* AppGeo */],
                __WEBPACK_IMPORTED_MODULE_40__providers_logins_login_service__["a" /* LoginService */],
                __WEBPACK_IMPORTED_MODULE_41__providers_language_language_service__["a" /* LanguageService */],
                __WEBPACK_IMPORTED_MODULE_32__providers_logins_logins__["a" /* Logins */],
                __WEBPACK_IMPORTED_MODULE_39__providers_wplogin_wplogin__["a" /* WPlogin */],
                __WEBPACK_IMPORTED_MODULE_42__providers_header_logo_header_logo__["a" /* HeaderLogo */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_action_sheet__["a" /* ActionSheet */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_transfer__["a" /* Transfer */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_admob_free__["a" /* AdMobFree */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_keyboard__["a" /* Keyboard */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_push__["a" /* Push */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_dialogs__["a" /* Dialogs */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_43__providers_video_video_utils__["a" /* VideoUtils */],
                __WEBPACK_IMPORTED_MODULE_45__providers_inapppurchase_inapppurchase__["a" /* IAP */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_in_app_purchase__["a" /* InAppPurchase */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_media__["a" /* Media */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_streaming_media__["a" /* StreamingMedia */],
                __WEBPACK_IMPORTED_MODULE_46__providers_download_download__["a" /* Download */],
                __WEBPACK_IMPORTED_MODULE_47__providers_buddypress_bp_provider__["a" /* BpProvider */],
                __WEBPACK_IMPORTED_MODULE_48__providers_menus_menu_service__["a" /* MenuService */],
                __WEBPACK_IMPORTED_MODULE_56__providers_facebook_messenger_fb_messenger_service__["a" /* FBMessengerService */],
                __WEBPACK_IMPORTED_MODULE_49__providers_network_network_status_service__["a" /* NetworkStatusService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 555:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 557:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginService = /** @class */ (function () {
    function LoginService(events) {
        this.events = events;
        this.userObs = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.wp_reset_password_url = '';
    }
    LoginService.prototype.setLoginStatus = function (user) {
        this.user = user;
        this.userObs.next(this.user);
    };
    LoginService.prototype.removeLoginStatus = function () {
        this.user = null;
        this.userObs.next(null);
    };
    LoginService.prototype.loginStatus = function () {
        // return the observable
        return this.userObs;
    };
    LoginService.prototype.getPasswordResetUrl = function () {
        if (!this.wp_reset_password_url) {
            var item = window.localStorage.getItem('myappp');
            var wpurl = JSON.parse(item).wordpress_url;
            this.wp_reset_password_url = this.appendUrlModalLogin(wpurl);
        }
        return this.wp_reset_password_url;
    };
    LoginService.prototype.appendUrlModalLogin = function (url) {
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpParams */]();
        // gather any #
        var url_parts = url.split('#');
        var hash = '#app-lost-password';
        // gather any ?
        url_parts = url_parts[0].split('?');
        var base_url = url_parts[0];
        var query = url_parts[1];
        if (query && url.indexOf('appp=3') >= 0) {
            // already has appp=3
            params = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpParams */]({
                fromString: query
            });
        }
        else {
            // add the appp=3
            params = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpParams */]({
                fromString: (query) ? query + '&appp=3' : 'appp=3'
            });
        }
        // put it all together
        url = base_url + '?' + params.toString() + hash;
        // remove empty params
        url = url.replace('&=&', '&');
        return url;
    };
    /**
     * Open the login modal if the menu item's extra_classes contains 'yieldlogin'
     * @param navParams
     */
    LoginService.prototype.yieldLogin = function (navParams) {
        if (navParams && navParams.extra_classes && navParams.extra_classes.indexOf('yieldlogin') >= 0) {
            if (this.user) { // logged in
                return false;
            }
            else { // logged out, show login modal
                console.log('yieldLogin');
                this.events.publish('login:force_login');
                return true;
            }
        }
        return false;
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* Events */]])
    ], LoginService);
    return LoginService;
}());

//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ 582:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_camera_app_camera__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_globalvars_globalvars__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_appads_appads__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_facebook_fbconnect_settings__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_facebook_login_iframe__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_push_push__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_appwoo_appwoo__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_appdata_appdata__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_appgeo_appgeo__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_logins_logins__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_download_download__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_analytics_analytics_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_social_sharing__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_device__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_push__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_dialogs__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_network__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_keyboard__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_storage__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__models_user_model__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_logins_login_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_language_language_service__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_menus_menu_service__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_iframe_iframe__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_stream_player_stream_player_component__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__models_language_model__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_stream_player_services_now_playing_service__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_stream_player_services_streaming_service__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_stream_player_services_notifications_service__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* Framework */





/* Providers (make sure to add to app.module.ts providers too) */












/* Native */

















// import { TritonDigitalService } from '../pages/stream-player/_services/tritondigital.service';


/**
 * Customizable options for our
 * segments, media, language and login modals
 */
var ModalOptions = /** @class */ (function () {
    function ModalOptions() {
    }
    return ModalOptions;
}());
var MyApp = /** @class */ (function () {
    function MyApp(platform, appCamera, menu, globalvars, appads, appgeo, fbconnectvars, fbconnectIframe, loginservice, languageservice, sanitizer, pushService, appwoo, appdata, logins, toastCtrl, loadingCtrl, storage, modalCtrl, events, translate, Keyboard, SplashScreen, StatusBar, Network, SocialSharing, Device, Push, http, Dialogs, zone, config, menuservice, analyticsservice, npService, streaming, 
    // private streaming: TritonDigitalService,
    notifications, download) {
        var _this = this;
        this.platform = platform;
        this.appCamera = appCamera;
        this.menu = menu;
        this.globalvars = globalvars;
        this.appads = appads;
        this.appgeo = appgeo;
        this.fbconnectvars = fbconnectvars;
        this.fbconnectIframe = fbconnectIframe;
        this.loginservice = loginservice;
        this.languageservice = languageservice;
        this.sanitizer = sanitizer;
        this.pushService = pushService;
        this.appwoo = appwoo;
        this.appdata = appdata;
        this.logins = logins;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.translate = translate;
        this.Keyboard = Keyboard;
        this.SplashScreen = SplashScreen;
        this.StatusBar = StatusBar;
        this.Network = Network;
        this.SocialSharing = SocialSharing;
        this.Device = Device;
        this.Push = Push;
        this.http = http;
        this.Dialogs = Dialogs;
        this.zone = zone;
        this.config = config;
        this.menuservice = menuservice;
        this.analyticsservice = analyticsservice;
        this.npService = npService;
        this.streaming = streaming;
        this.notifications = notifications;
        this.download = download;
        this.navparams = [];
        this.showmenu = false;
        this.bothMenus = false;
        this.myLoginModal_open = false;
        this.showLogin = false;
        this.menu_side = "left";
        this.rtl = false;
        this.iphoneX = false;
        this.showingIntro = false;
        this.stopTabReset = false;
        this.isPlaying = false;
        this.isLoading = true;
        this.testClass = 'test-class-off';
        this.initializeApp();
        events.subscribe('user:login', function (data) {
            _this.userLogin(data);
            _this.menu.close();
            _this.analyticsservice.trackEvent('user:login');
        });
        events.subscribe('user:logout', function (data) {
            _this.userLogout(data);
            _this.menu.close();
            _this.analyticsservice.trackEvent('user:logout');
        });
        events.subscribe('data:update', function (obj) {
            _this.fetchData(obj);
        });
        events.subscribe('login:force_login', function () {
            _this.openLoginModal();
        });
        events.subscribe('pushpage', function (page) {
            _this.pushPage(page);
        });
        events.subscribe('openpage', function (page) {
            _this.openPage(page);
        });
        this.npService.getCurrentTrackObs().subscribe(function (track) {
            // this.ngZone.run(() => {
            _this.currentTrack = track;
            _this.trackLoaded = true;
            // });
        });
        // // 97
        // this.streaming.isPlaying().subscribe(isPlaying => {
        // 	let msg = 'StreamPlayerComponent stream-player is ' + ((isPlaying) ? 'playing' : 'stopped');
        // 	console.log(msg);
        // 	// this.ngZone.run(() => {
        // 		this.isPlaying = isPlaying;
        // 	// });
        // });
        // this.streaming97.isLoading().subscribe(isLoading => {
        // 	let msg = 'StreamPlayerComponent stream-player is ' + ((isLoading) ? 'loading' : 'loaded');
        // 	console.log(msg);
        // 	// this.ngZone.run(() => {
        // 		this.isLoading = isLoading;
        // 	// });
        // });
        // this.initTrackList();
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        // Login status
        this.bodyTag = document.getElementsByTagName('body')[0];
        this.loginservice.loginStatus().subscribe(function (user) {
            _this.user = user;
            if (user) {
                _this.bodyTag.classList.add('loggedin');
            }
            else {
                _this.bodyTag.classList.remove('loggedin');
            }
        });
        // TODO: this causes a bug when iframe page is the homepage. It calls resetTabs too many times, which loads iframe.ts twice, causing the spinner to appear for too long.
        this.languageservice.languageStatus().subscribe(function (language) {
            var is_loggedin = (_this.loginservice.user);
            _this.rtl = (language.dir && language.dir == 'rtl');
            var dir = (_this.rtl) ? 'rtl' : 'ltr';
            _this.platform.setDir(dir, true);
            _this.platform.setLang(language.code, true);
            var lang_updated = true;
            _this.resetTabs(is_loggedin, lang_updated);
        });
        // Let's not wait for the data if it's already in local storge
        this.languageservice.initStoredLanguage();
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.apiurl = _this.globalvars.getApi();
            _this.fetchData(false);
            _this.doConnectionEvents();
            _this.attachListeners();
            _this.maybeDoPush();
            _this.doIphoneX();
            // prevents bug where select done button didn't display
            _this.Keyboard.hideFormAccessoryBar(false);
            // Disable scroll fixes webview displacement, but hides content lower on page. Can't use
            //Keyboard.disableScroll(true);
            // check for API updates on resume and on initial load
            _this.platform.resume.subscribe(function () {
                _this.appdata.checkForUpdates(_this.apiurl);
            });
            setTimeout(function () {
                _this.appdata.checkForUpdates(_this.apiurl);
            }, 5000);
            // for pdf viewer in media modal
            window.pdfWorkerSrc = 'assets/lib/pdf-worker.min.js';
        });
    };
    MyApp.prototype.fetchData = function (reset) {
        var _this = this;
        // if refreshing the app, have to reset variables first
        if (reset) {
            this.tabs = [];
            this.pages = null;
            this.bothMenus = false;
            this.navparams = [];
            this.showmenu = false;
        }
        // get our app data, then use it. will return either local data, or get from api
        this.appdata.load(this.apiurl).then(function (data) {
            console.log('Got data', data);
            _this.afterData(data);
        }).catch(function (e) {
            // if there's a problem, default to app-data.json
            console.log('problem getting appdata, getting local json file', e);
            _this.appdata.getData('app-data.json').then(function (data) {
                console.log('Got local data file.');
                _this.afterData(data);
            });
        });
    };
    MyApp.prototype.afterData = function (data) {
        var _this = this;
        this.SplashScreen.hide();
        this.verifyLanguageFile(data).then(function (lang) {
            // set the default language before loading menu
            _this.getSetLang(data).then(function (lang) {
                _this.loadMenu(data);
                _this.showLogin = (data.side_menu_login == "on") ? true : false;
                _this.logins.set_force_login((data.side_menu_force_login == "on"));
                _this.menu_side = (data.meta.menu_right == true) ? "right" : "left";
                _this.rtl = (data.meta.rtl == true) ? true : false;
                if (_this.rtl === true && _this.languageservice.hasStoredLanguage === false)
                    _this.platform.setDir('rtl', true);
                _this.loadStyles(data);
                _this.doStatusBar(data);
                _this.getSetLogin();
            });
        });
        this.apptitle = data.title;
        this.storage.get('purchased_ad_removal').then(function (res) {
            if (!res) {
                _this.maybeDoAds(data);
            }
        });
        if (data.show_registration_link === 'on') {
            this.storage.set('api_register_setting', { "registration": true, "url": data.registration_url });
        }
        if (data.vendors && data.vendors.google_analytics && data.vendors.google_analytics.tracking_id) {
            var tracking_id = data.vendors.google_analytics.tracking_id;
            var basename = data.vendors.google_analytics.basename;
            this.analyticsservice.beginTracking(tracking_id, basename);
            this.analyticsservice.trackEvent('open');
        }
        else {
            console.log('no analytics: missing tracking_id');
        }
    };
    MyApp.prototype.loadMenu = function (data) {
        // console.log('loadmenu', data);
        // any menu imported from WP has to use same component. Other pages can be added manually with different components
        // If we have a tab menu, set that up
        if (data.tab_menu.items) {
            // Add pages manually here, can use different components like this... (then use the slug name to create your page, etc. www/build/custom.html)
            // let e = { 'title': "Downloads", 'type': 'apppages', 'page_type' : 'media-list', 'class': "information-circle", 'slug': 'custom', 'extra_classes': '', 'allow_downloads': '', 'list_route': 'http://appdev.local/wp-json/wp/v2/posts' };
            // data.tab_menu.items.push( e );
            for (var _i = 0, _a = data.tab_menu.items; _i < _a.length; _i++) {
                var item = _a[_i];
                // set component, default is Iframe
                var root = __WEBPACK_IMPORTED_MODULE_30__pages_iframe_iframe__["a" /* Iframe */];
                root = this.getPageType(item);
                // hide the tab if user added class of hide
                item.show = true;
                if (item.extra_classes.indexOf('hide') >= 0 || item.extra_classes.indexOf('loggedin') >= 0) {
                    item.show = false;
                }
                this.navParamsPush(item, root);
            }
            this.tabs = this.navparams;
            this.menuservice.tabs = this.tabs.slice();
            if (typeof this.originalTabs === 'undefined')
                this.originalTabs = this.tabs.slice(); // make a copy
            this.nav.setRoot('TabsPage', this.tabs);
        }
        if (data.menus.items) {
            this.pages = data.menus.items.slice();
            this.menuservice.menu = this.pages.slice();
            this.showmenu = true;
            // Add pages manually here, can use different components like this... (then use the slug name to create your page, etc. www/build/custom.html)
            // let e = { 'title': "Custom Page", 'component': CustomPage, 'class': "information-circle", 'navparams': { slug: 'custom' }, extra_classes: '' };
            // this.pages.push( e );
            // set the home page to the proper component
            if (this.tabs) {
                this.pages.unshift({ 'title': data.tab_menu.name, 'url': '', 'component': 'TabsPage', 'navparams': this.navparams, 'class': 'home', 'extra_classes': 'hide', 'is_home': true });
            }
            else if (!this.tabs && data.menus.items[0].type === 'apppages') {
                // used for custom logo
                data.menus.items[0].is_home = true;
                var root_1 = this.getPageType(data.menus.items[0]);
                this.nav.setRoot(root_1, data.menus.items[0]);
            }
            else {
                // used for custom logo
                data.menus.items[0].is_home = true;
                // anything else uses Iframe component
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_30__pages_iframe_iframe__["a" /* Iframe */], data.menus.items[0]);
            }
        }
        // Only show the intro if there's a slug
        if (data.meta.intro_slug && data.meta.intro_slug != '')
            this.maybeShowIntro(data.meta.intro_slug);
        if (data.tab_menu.items && data.menus.items) {
            // we have both menus, use pushPage on sidemenu
            this.bothMenus = true;
        }
    };
    // construct tab items
    MyApp.prototype.navParamsPush = function (item, root) {
        var page;
        this.navparams.push({
            'title': item.title,
            'url': item.url,
            'root': root,
            'icon': item.class,
            'slug': item.slug,
            'api_route': item.api_route,
            'list_route': item.list_route,
            'list_display': item.list_display,
            'favorites': item.favorites,
            'allow_downloads': item.allow_downloads,
            'extra_classes': item.extra_classes,
            'show': item.show,
            'show_slider': item.show_slider,
            'slide_route': item.slide_route,
            'type': item.type,
            'page_type': item.page_type,
            'page_id': item.page_id,
            'is_home': true,
            'download_list_image': item.download_list_image,
            'download_left_icon': item.download_left_icon,
            'download_right_icon': item.download_right_icon
        });
    };
    // If there is a page called "Intro", show it the first time the app is used
    MyApp.prototype.maybeShowIntro = function (slug) {
        this.introshown = window.localStorage.getItem('app-intro-shown');
        if (this.introshown === "true")
            return;
        this.showingIntro = true;
        var page_id = this.getPageIdBySlug(slug);
        if (!page_id) {
            page_id = this.getTabIndexBySlug(slug);
        }
        if (page_id) {
            var intro = { 'title': "Introduction", 'component': this.getPageModuleName(page_id), 'class': "", 'navparams': { 'slug': slug } };
            this.nav.push(this.getPageModuleName(page_id), intro.navparams);
        }
        else {
            throw ('page_id for intro not found');
        }
        window.localStorage.setItem('app-intro-shown', "true");
    };
    /**
     * Get side menu index by page slug
     */
    MyApp.prototype.getMenuIndexBySlug = function (slug) {
        return this.menuservice.getIndexBySlug(slug, this.pages);
    };
    /**
     * Get tab menu index by page slug
     * @param slug page slug
     */
    MyApp.prototype.getTabIndexBySlug = function (slug) {
        return this.menuservice.getIndexBySlug(slug, this.tabs);
    };
    MyApp.prototype.getPageIdBySlug = function (slug) {
        var page_id = 0;
        if (this.pages && this.pages.length) {
            this.pages.forEach(function (page) {
                if (page.slug && page.slug == slug && page.page_id)
                    page_id = page.page_id;
            });
        }
        else {
            return false;
        }
        return page_id;
    };
    MyApp.prototype.getPageBySlug = function (slug) {
        var mypage;
        if (this.pages && this.pages.length) {
            this.pages.forEach(function (page) {
                if (page.slug && page.slug == slug && page.page_id)
                    mypage = page;
            });
        }
        return mypage;
    };
    // side menu link. determine which func to use
    MyApp.prototype.menuLink = function (p, e) {
        if (p.extra_classes.indexOf('submenu-parent') >= 0) {
            this.doSubMenus(e);
            return;
        }
        if (this.bothMenus || (p.extra_classes && p.extra_classes.indexOf('push-page') >= 0)) {
            this.pushPage(p);
        }
        else {
            this.openPage(p);
        }
    };
    // Handles opening and closing submenus
    MyApp.prototype.doSubMenus = function (e) {
        var button;
        if (e.target.classList && e.target.classList.contains('submenu-parent')) {
            button = e.target;
        }
        else if (e.target.classList) {
            button = e.target.closest('.submenu-parent');
        }
        if (button.classList && button.classList.contains('submenu-parent')) {
            if (button.classList.contains('open-menu')) {
                button.classList.remove('open-menu');
            }
            else {
                button.classList.add('open-menu');
            }
            var el = button.nextSibling;
            while (el.classList && el.classList.contains('submenu-child')) {
                if (el.classList.contains('open')) {
                    el.classList.remove('open');
                }
                else {
                    el.classList.add('open');
                }
                el = el.nextSibling;
            }
            return;
        }
    };
    /**
     * Open the login modal if the menu item's extra_classes contains 'yieldlogin'
     * @param extra_classes
     */
    MyApp.prototype.yieldLogin = function (extra_classes) {
        if (extra_classes && extra_classes.indexOf('yieldlogin') >= 0) {
            if (this.user) { // logged in
                return false;
            }
            else { // logged out, show login modal
                this.openLoginModal();
                return true;
            }
        }
        return false;
    };
    MyApp.prototype.openPage = function (page) {
        var _this = this;
        // don't do anything if someone clicks a nav divider
        if (typeof (page.extra_classes) != "undefined" && page.extra_classes.indexOf('divider') >= 0)
            return;
        if (this.yieldLogin(page.extra_classes))
            return;
        // close the menu when clicking a link from the menu
        this.menu.close();
        if (page.target === '_blank' && typeof (page.extra_classes) !== 'undefined' && page.extra_classes.indexOf('system') >= 0) {
            this.openIab(page.url, '_system', null);
            return;
        }
        else if (page.target === '_blank') {
            this.openIab(page.url, page.target, null);
            return;
        }
        else if (typeof (page.extra_classes) !== 'undefined' && (page.extra_classes.indexOf('loginmodal') >= 0 || page.extra_classes.indexOf('logoutmodal') >= 0)) {
            this.openLoginModal({ title: page.title });
            return;
        }
        var root = this.getPageType(page);
        // console.log('open page root', root, page)
        if (root) {
            this.nav.setRoot(root, page);
        }
        else if (page.url && page.root === "true") {
            // for LearnDash post messages, specifically course completion redirects
            // can't set root on tabs
            var first = this.nav.first();
            if (first.id === "TabsPage") {
                // if root is in the message, we pop to the root via tabs.ts
                return;
            }
            else {
                // learndash redirect with side menu
                this.nav.popToRoot({ animate: false }).then(function () {
                    _this.nav.push(__WEBPACK_IMPORTED_MODULE_30__pages_iframe_iframe__["a" /* Iframe */], page);
                });
                return;
            }
        }
    };
    MyApp.prototype.pushPage = function (page) {
        // don't do anything if someone clicks a nav divider
        if (typeof (page.extra_classes) != "undefined" && page.extra_classes.indexOf('divider') >= 0)
            return;
        if (this.yieldLogin(page.extra_classes))
            return;
        // close the menu when clicking a link from the menu
        this.menu.close();
        if (page.target === '_blank' && page.extra_classes.indexOf('system') >= 0) {
            this.openIab(page.url, '_system', null);
            return;
        }
        else if (page.target === '_blank') {
            this.openIab(page.url, page.target, null);
            return;
        }
        else if (typeof (page.extra_classes) !== 'undefined' && (page.extra_classes.indexOf('loginmodal') >= 0 || page.extra_classes.indexOf('logoutmodal') >= 0)) {
            this.openLoginModal({ title: page.title });
            return;
        }
        var opt = {};
        if (this.rtl === true && this.platform.is('ios'))
            opt = { direction: 'back' };
        var root = this.getPageType(page);
        // console.log('push page type', root)
        this.nav.push(root, page, opt);
    };
    MyApp.prototype.openTab = function (tab_index) {
        this.restoreTabs();
        var tabs = this.nav.getActiveChildNav();
        if (tabs) {
            this.nav.popToRoot({ animate: true }).then(function () {
                tabs.select(tab_index);
            });
        }
    };
    /**
     * Experimental: need to get this.removeNewTab() working
     * @param page object
     */
    MyApp.prototype.openNewTab = function (page) {
        var _this = this;
        this.nav.popToRoot({ animate: true }).then(function () {
            _this.restoreTabs();
            _this.tabs.unshift(page);
            var loggedin = (typeof _this.login_data === 'object');
            _this.resetTabs(loggedin);
            _this.nav.setRoot('TabsPage', _this.navparams);
        });
    };
    /**
     * Restore the original tabs.
     */
    MyApp.prototype.restoreTabs = function () {
        this.tabs = this.originalTabs.slice(); // copy back
    };
    MyApp.prototype.openMenuLink = function (data) {
        var _this = this;
        var page;
        var menu_index;
        if (typeof data.menulink.menu !== 'undefined') { // might be 0; check undefined
            if (typeof data.menulink.menu === 'number')
                menu_index = data.menulink.menu;
            else if (typeof data.menulink.menu === 'string')
                menu_index = this.getMenuIndexBySlug(data.menulink.menu);
            if (typeof menu_index !== 'undefined')
                page = this.pages[menu_index];
        }
        else if (typeof data.menulink.tab_menu !== 'undefined') {
            if (typeof data.menulink.tab_menu === 'number')
                menu_index = data.menulink.tab_menu;
            else if (typeof data.menulink.tab_menu === 'string')
                menu_index = this.getTabIndexBySlug(data.menulink.tab_menu);
            if (typeof menu_index !== 'undefined')
                page = this.tabs[menu_index];
        }
        // Verify logins
        if (page && page.extra_classes) {
            if (page.extra_classes == 'loggedin' && typeof this.login_data != 'object') {
                this.translate.get('Please login').subscribe(function (text) {
                    _this.presentToast(text);
                });
                return;
            }
            if (page.extra_classes == 'loggedout' && typeof this.login_data == 'object') {
                console.log('login_data', this.login_data);
                page = null;
            }
        }
        if (page) {
            if (data.menulink.new_tab) {
                this.openNewTab(page);
            }
            else if (data.menulink.backbtn || typeof data.menulink.menu !== 'undefined') {
                this.pushPage(page);
            }
            else {
                this.openTab(menu_index);
            }
        }
        else {
            this.translate.get('Page not found').subscribe(function (text) {
                _this.presentToast(text);
            });
        }
    };
    MyApp.prototype.getPageModuleName = function (page_id) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])())
            return 'Page' + page_id;
        if (false === this.globalvars.getUseDynamicPageModule()) // building on remote Ionic builder
            return 'Page' + page_id;
        else
            return 'CustomPage';
    };
    MyApp.prototype.doStatusBar = function (data) {
        if (!this.StatusBar)
            return;
        if (data.meta.light_status_bar == true) {
            // Light text, for dark backgrounds
            this.StatusBar.styleLightContent();
        }
        else {
            // Dark text
            this.StatusBar.styleDefault();
        }
        // Android only, background color
        if (this.platform.is('android')) {
            if (data.meta.design && data.meta.design.status_bar_bkg) {
                this.StatusBar.backgroundColorByHexString(data.meta.design.status_bar_bkg);
            }
        }
    };
    MyApp.prototype.doConnectionEvents = function () {
        var _this = this;
        this.networkState = this.Network.type;
        if (this.networkState === 'none' || this.networkState === 'unknown') {
            this.translate.get('You appear to be offline, app functionality may be limited.').subscribe(function (text) {
                _this.presentToast(text);
            });
        }
    };
    MyApp.prototype.loadStyles = function (data) {
        // console.log( data );
        // kinda hacky, but it works
        var styles = "<style>";
        // toolbar color
        styles += ".toolbar-background-md, .toolbar-background-ios, .tabs-md .tabbar, .tabs-ios .tabbar, .custom-page .menu-card { background: " + data.meta.design.toolbar_background + " }";
        // toolbar text
        styles += ".toolbar-content, .toolbar-title, .bar-button-default, .toolbar .bar-button-default:hover, .toolbar .segment-button, .toolbar button.activated, .tabs .tab-button .tab-button-icon, .tab-button .tab-button-text, .tabbar .tab-button[aria-selected=true] .tab-button-icon, ion-toolbar .button { color: " + data.meta.design.toolbar_color + " }";
        // left menu colors
        styles += ".menu-inner .content-md, .menu-inner .content-ios, .menu-inner ion-list .item { color: " + data.meta.design.left_menu_text + "; background-color: " + data.meta.design.left_menu_bg + " }";
        styles += ".menu-inner .loggedin-msg { color: " + data.meta.design.left_menu_text + " }";
        // left menu icon color
        if (data.meta.design.left_menu_icons) {
            styles += "ion-menu .list-md ion-icon, ion-menu .list-ios ion-icon, .menu-inner .submenu-parent::after { color: " + data.meta.design.left_menu_icons + " }";
            styles += ".menu-inner .item-ios[detail-push] .item-inner, .menu-inner button.item-ios:not([detail-none]) .item-inner, .menu-inner a.item-ios:not([detail-none]) .item-inner { background-image: url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2012%2020'><path%20d='M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z'%20fill='" + data.meta.design.left_menu_icons + "'/></svg>\"); }";
        }
        // body text and background
        styles += ".ion-page ion-content, .ion-page ion-list .item { color: " + data.meta.design.text_color + "; background-color: " + data.meta.design.body_bg + " }";
        styles += "p, .item p { color: " + data.meta.design.text_color + " }";
        // buttons
        styles += ".button-primary, .menu-login-button, page-login-modal div > .button, bp-modal .button, bp-list .badge, bp-details .badge, bp-messages .button { background: " + data.meta.design.button_background + "!important; color: " + data.meta.design.button_text + " }";
        styles += "bp-list .button, bp-details .button, bp-group .button, bp-profile .button { color: " + data.meta.design.button_background + " }";
        // headings
        styles += "ion-page h1, ion-page h2, ion-page h3, ion-page h4, ion-page h5, ion-page h6, ion-page ion-list .item h2, ion-page ion-list .item h3, ion-page ion-list .item h4 { color: " + data.meta.design.headings_color + " }";
        // links
        styles += "ion-page ion-content a, ion-page ion-content a:visited { color: " + data.meta.design.link_color + " }";
        styles += data.meta.design.custom_css;
        // hide menu toggle if no left menu
        if (this.showmenu === false) {
            styles += 'ion-navbar .bar-button-menutoggle { display: none !important; }';
        }
        // maybe move menu item to right
        if (this.menu_side === "right" && this.rtl === false || this.menu_side === "left" && this.rtl === true) {
            styles += 'ion-navbar .bar-buttons[start] { order: 7; }';
        }
        styles += "</style>";
        this.styles = this.sanitizer.bypassSecurityTrustHtml(styles);
    };
    /*
    * We are listening for postMessage events from the iframe pages. When something needs to happen, a message is sent from the iframe as a JSON object, such as { iablink: 'http://apppresser.com', target: '_blank', options: '' }. We parse that object here, and do the phonegap stuff like window.open(data.iablink)
    */
    MyApp.prototype.attachListeners = function () {
        var _this = this;
        // When WP site loads, attach our click events
        window.addEventListener('message', function (e) {
            // might be undefined, but we only using strings here
            if (typeof e.data !== 'string' || e.data == '')
                return;
            // console.log('postMessage', e.data);
            if (e.data === 'checkin_success') {
                _this.translate.get('Check in successful!').subscribe(function (text) {
                    _this.presentToast(text);
                });
            }
            else if (e.data === 'logout') {
                _this.userLogout();
            }
            // if it's not our json object, return
            if (e.data.indexOf('{') != 0)
                return;
            var data = JSON.parse(e.data);
            if (data.url) {
                // push a new page
                var page = { title: data.title, component: __WEBPACK_IMPORTED_MODULE_30__pages_iframe_iframe__["a" /* Iframe */], url: data.url, classes: null };
                _this.pushPage(page);
            }
            else if (data.msg) {
                // social sharing was clicked, show that
                _this.SocialSharing.share(data.msg, null, null, data.link);
            }
            else if (data.iablink) {
                // in app browser links
                _this.openIab(data.iablink, data.target, data.options);
            }
            else if (data.camera && data.camera === 'library') {
                if (data.appbuddy === true) {
                    _this.appCamera.photoLibrary(true);
                }
                else {
                    _this.appCamera.photoLibrary(false);
                }
            }
            else if (data.camera && data.camera === 'photo') {
                if (data.appbuddy === true) {
                    _this.appCamera.openSheet(true);
                }
                else {
                    _this.appCamera.takePicture(false);
                }
            }
            else if (data.fblogin) {
                _this.fbconnectIframe.login();
                _this.maybeSendPushId(data.ajaxurl);
            }
            else if (data.paypal_url) {
                _this.appwoo.paypal(data.paypal_url, data.redirect);
            }
            else if (data.loggedin) {
                var avatar = _this.logins.get_avatar(data); // logic for FB or WP
                if (avatar)
                    data.avatar = avatar;
                _this.userLogin(data);
                _this.storage.set('user_login', _this.login_data);
            }
            else if (typeof (data.isloggedin) != "undefined") {
                // make sure app and WP have the same status
                // this is no longer necessary with API login plus cookie fix
                // this.syncLoginStatus( data )
            }
            else if (data.apppage) {
                var page = { title: data.title, component: __WEBPACK_IMPORTED_MODULE_30__pages_iframe_iframe__["a" /* Iframe */], url: data.apppage.url, classes: null, page_type: null, type: null, root: data.apppage.root };
                _this.openPage(page);
            }
            else if (data.geouserpref) {
                _this.appgeo.startBeacon(data.geouserpref);
            }
            else if (data.menulink) {
                _this.openMenuLink(data);
            }
            else if (data.download_url) {
                _this.downloadItem(data);
            }
        }, false); // end eventListener
        if (this.iphoneX) {
            // css hacks for iphone x status bar
            window.addEventListener("orientationchange", function () {
                if (!window.orientation && window.orientation == 0) {
                    _this.customClasses = 'iphoneX-portrait';
                }
                else if (window.orientation && window.orientation === -90) {
                    _this.customClasses = 'iphoneX-landscape';
                }
            }, false);
        }
    };
    MyApp.prototype.openIab = function (link, target, options) {
        if (options === void 0) { options = null; }
        window.open(link, target, options);
    };
    MyApp.prototype.maybeDoAds = function (data) {
        // only show ads on a device
        if (!this.Device.platform)
            return;
        // If we don't have any ads set, stop
        if (data.ads.ios === '' && data.ads.android === '') {
            console.log('No ads');
            return;
        }
        // this.appads.setOptions();
        if (this.Device.platform === 'iOS' && data.ads.ios.banner != '') {
            this.appads.createBanner(data.ads.ios.banner);
        }
        if (this.Device.platform === 'Android' && data.ads.android.banner != '') {
            this.appads.createBanner(data.ads.android.banner);
        }
        // show interstitial like this
        // this.appads.interstitial( data.ads.ios.interstitial );
    };
    MyApp.prototype.maybeDoPush = function () {
        var _this = this;
        var push = null;
        try {
            push = this.Push.init({
                android: {
                    icon: "phonegap",
                    senderID: "[[gcm_sender]]"
                },
                ios: {
                    alert: "true",
                    badge: true,
                    clearBadge: true,
                    sound: 'true'
                },
                windows: {}
            });
        }
        catch (err) {
            console.log(err);
            return;
        }
        if (push.error)
            return;
        push.on('registration').subscribe(function (data) {
            _this.storage.set('deviceToken', data.registrationId);
            _this.regId = data.registrationId;
            _this.storage.get('endpointArn').then(function (res) {
                var update = window.localStorage.getItem('myappp_update');
                // If already subscribed, don't hit API again. Updating API version bypasses so everyone resubscribes.
                if (res && update != 'true') {
                    return;
                }
                // Subscribe through myapppresser.com api
                _this.pushService.subscribeDevice(_this.regId).then(function (result) {
                    var newresult = JSON.parse(result);
                    _this.storage.set('endpointArn', newresult.endpointArn);
                });
            });
        });
        push.on('notification').subscribe(function (data) {
            var isAppPushPostURL = (data.additionalData && data.additionalData.url && data.additionalData.url.indexOf('http') == 0 && data.additionalData.target && data.additionalData.target == '_self');
            var isAppPushCustomURL = (data.additionalData && data.additionalData.url && data.additionalData.url.indexOf('http') == 0);
            var isAppPage = (data.additionalData && data.additionalData.page);
            // Don't allow resetTabs to happen if we need to pushPage from notification: it messes things up
            if (isAppPushPostURL || isAppPushCustomURL || isAppPage) {
                _this.stopTabReset = true;
            }
            _this.Dialogs.alert(data.message, // message
            data.title, // title
            _this.translate.instant('Done') // buttonName
            ).then(function () {
                // Now we can allow resetTabs to happen
                _this.stopTabReset = false;
                // if apppush post URL
                if (isAppPushPostURL) {
                    var page = { title: data.title, component: __WEBPACK_IMPORTED_MODULE_30__pages_iframe_iframe__["a" /* Iframe */], url: data.additionalData.url, classes: null };
                    _this.pushPage(page);
                    return;
                }
                // if there's an external url from apppush custom url field, open in IAB
                if (isAppPushCustomURL) {
                    _this.openIab(data.additionalData.url, '_blank');
                    return;
                }
                // if there's an app page, open it
                if (isAppPage) {
                    var page = data.additionalData.page;
                    // if page is external, fire the in app browser
                    if (page.target === '_blank') {
                        _this.openIab(page.url, page.target);
                        return;
                    }
                    // if they included an app page, load the page
                    _this.pushPage(data.additionalData.page);
                }
            }); // then
        });
        push.on('error').subscribe(function (e) {
            console.log(e.message);
        });
    };
    MyApp.prototype.maybeSendPushId = function (ajaxurl) {
        var _this = this;
        if (!ajaxurl)
            ajaxurl = this.getAjaxURL();
        if (!ajaxurl) {
            console.log('Not able to send endpointArn, missing ajaxurl');
            return;
        }
        this.storage.get('endpointArn').then(function (id) {
            if (id) {
                // ajax call to save this to user meta
                _this.pushService.sendDeviceToWp(id, ajaxurl).then(function (result) {
                    console.log(result);
                });
            }
        });
    };
    MyApp.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 5000,
            position: 'bottom'
        });
        toast.present();
    };
    MyApp.prototype.menuOpened = function () {
        this.menu.swipeEnable(true);
    };
    MyApp.prototype.menuClosed = function () {
        this.menu.swipeEnable(false);
    };
    MyApp.prototype.openLoginModal = function (opt) {
        var _this = this;
        var css = (opt && opt.cssClass) ? opt.cssClass : '';
        var params = (opt && opt.title) ? { title: opt.title } : {};
        if (!this.myLoginModal) {
            this.myLoginModal = this.modalCtrl.create('LoginModal', params, {
                cssClass: css
            });
        }
        this.myLoginModal.onDidDismiss(function (data) {
            _this.myLoginModal_open = false;
        });
        if (this.myLoginModal_open === false) {
            this.myLoginModal_open = true;
            this.myLoginModal.present();
        }
    };
    MyApp.prototype.userLogin = function (data) {
        var _this = this;
        var avatar = this.logins.get_avatar(data);
        if (avatar)
            data.avatar = avatar;
        this.login_data = data;
        this.loginservice.setLoginStatus(new __WEBPACK_IMPORTED_MODULE_26__models_user_model__["a" /* User */](data));
        this.maybeSendPushId();
        // tell the modal we are logged in
        this.events.publish('modal:logindata', data);
        this.translate.get('Login successful').subscribe(function (text) {
            _this.presentToast(text);
        });
        this.maybeLogInOutRedirect(data);
        if (this.pages)
            this.resetSideMenu(true);
        if (this.tabs)
            this.resetTabs(true);
    };
    /**
     * Handle the appp_login_redirect filter from WordPress
     * @param data Login data
     */
    MyApp.prototype.maybeLogInOutRedirect = function (data) {
        var _this = this;
        var redirect;
        if (data.login_redirect)
            redirect = data.login_redirect;
        else if (data.logout_redirect)
            redirect = data.logout_redirect;
        if (redirect) {
            console.log('redirecting to ', redirect);
            var page = void 0;
            var title = '';
            var url = '';
            if (typeof redirect === 'string') {
                url = redirect;
            }
            else if (typeof redirect === 'object') {
                title = redirect.title;
                url = redirect.url;
            }
            if (!url) {
                return;
            }
            else if (url.indexOf('http') === -1) {
                // load by page slug
                var page_slug = url;
                page = this.getPageBySlug(page_slug);
                if (page) {
                    this.pushPage(page);
                }
                else {
                    this.translate.get('Page not found').subscribe(function (text) {
                        _this.presentToast(text);
                    });
                }
            }
            else {
                // load by URL
                page = {
                    title: title,
                    url: url,
                    component: __WEBPACK_IMPORTED_MODULE_30__pages_iframe_iframe__["a" /* Iframe */],
                    classes: null,
                    target: '',
                    extra_classes: '',
                };
                this.stopTabReset = true;
                this.pushPage(page);
                this.stopTabReset = false;
                this.resetTabs(this.loginservice.user);
            }
        }
    };
    MyApp.prototype.userLogout = function (logout_response) {
        // this.storage.remove('user_login').then( () => {
        //   this.presentToast('Logged out successfully.')
        // })
        var _this = this;
        this.login_data = null;
        this.loginservice.removeLoginStatus();
        if (this.tabs && this.pages) {
            this.resetTabs(false);
            this.resetSideMenu(false);
        }
        else if (this.tabs) {
            this.resetTabs(false);
        }
        else {
            this.resetSideMenu(false);
            // this.openPage(this.pages[0])
        }
        this.translate.get('Logout successful').subscribe(function (text) {
            _this.presentToast(text);
        });
        this.storage.get('force_login').then(function (data) {
            if (data) {
                _this.openLoginModal();
            }
            else if (logout_response && logout_response.data && logout_response.data.logout_redirect) {
                _this.maybeLogInOutRedirect(logout_response.data);
            }
        }).catch(function (e) {
            console.warn(e);
        });
    };
    // show or hide menu items on login or logout. resetSideMenu(false) for logout
    MyApp.prototype.resetSideMenu = function (login) {
        for (var _i = 0, _a = this.pages; _i < _a.length; _i++) {
            var item = _a[_i];
            if (login === true && item.extra_classes.indexOf('loggedin') >= 0) {
                item.extra_classes += " show";
            }
            else if (login === false && item.extra_classes.indexOf('loggedin') >= 0) {
                item.extra_classes = item.extra_classes.replace(" show", "");
            }
            else if (login === true && item.extra_classes.indexOf('loggedout') >= 0) {
                item.extra_classes += " hide";
            }
            else if (login === false && item.extra_classes.indexOf('loggedout') >= 0) {
                item.extra_classes = item.extra_classes.replace(" hide", "");
            }
        }
    };
    /**
     * Show or hide tabs on login or logout. resetTabs(false) for logout
     * @param login Boolean
     */
    MyApp.prototype.resetTabs = function (login, lang_updated) {
        var _this = this;
        if (this.stopTabReset)
            return; // We can't reset the tabs now if a push notification has opened the app and has a pushPage included
        this.navparams = [];
        if (typeof (this.tabs) === 'undefined')
            return;
        login = (typeof login === 'undefined') ? false : login;
        for (var _i = 0, _a = this.tabs; _i < _a.length; _i++) {
            var item = _a[_i];
            // set component, default is Iframe
            var root = __WEBPACK_IMPORTED_MODULE_30__pages_iframe_iframe__["a" /* Iframe */];
            if (item.root) {
                root = item.root;
            }
            else {
                root = this.getPageType(item);
            }
            // hide the tab if user added class of hide
            item.show = true;
            if (item.extra_classes.indexOf('hide') >= 0) {
                item.show = false;
            }
            if (!login && item.extra_classes.indexOf('loggedin') >= 0) {
                item.show = false;
            }
            else if (login && item.extra_classes.indexOf('loggedout') >= 0) {
                item.show = false;
            }
            item.class = item.icon;
            // add lang=xx param
            if (root == __WEBPACK_IMPORTED_MODULE_30__pages_iframe_iframe__["a" /* Iframe */] && item.url && item.url.indexOf('http') == 0) {
                // console.log('MyAppp resetTabs Iframe change url start', item.url)
                item.url = this.languageservice.appendUrlLang(item.url);
                // console.log('MyAppp resetTabs Iframe change url end', item.url)
            }
            this.navParamsPush(item, root);
        }
        this.tabs = this.navparams.slice();
        this.menuservice.tabs = this.navparams.slice();
        // "refresh" the view by resetting to home tab
        //this.openPage( { 'title': this.tabs[0].title, 'url': '', 'component': 'TabsPage', 'navparams': this.navparams, 'class': this.tabs[0].icon } )
        this.zone.run(function () {
            // If the login/out has a redirect, we don't want to set the root here
            if (!login || lang_updated) {
                if (lang_updated) {
                    if (_this.showingIntro) {
                        // Don't refresh the tabs if showing the intro now
                        setTimeout(function () {
                            _this.showingIntro = false;
                        }, 6000);
                        return;
                    }
                    // some craziness to update Iframe components in the TabsPage Tab
                    // bug fix: https://trello.com/c/Q3qlMxOU/999-language-options-and-iframe-tab-conflict
                    _this.nav.popToRoot(_this.navparams).then(function () {
                        _this.nav.getActiveChildNav().goToRoot(_this.navparams).then(function () {
                            _this.nav.setRoot('TabsPage', _this.navparams);
                        });
                    });
                }
                else {
                    // reset the tabs
                    _this.nav.setRoot('TabsPage', _this.navparams);
                }
            }
            else {
                // fixes bug where tabs don't reset after login
                _this.nav.setRoot('TabsPage', _this.navparams);
            }
            if (!_this.user) {
                _this.storage.get('force_login').then(function (data) {
                    if (data && !_this.user) {
                        setTimeout(function () {
                            _this.openLoginModal();
                        }, 800); // a little time to load smoother
                    }
                });
            }
        });
    };
    MyApp.prototype.getSetLogin = function () {
        var _this = this;
        this.storage.get('user_login').then(function (data) {
            if (data) {
                var avatar = _this.fbconnectvars.get_avatar();
                if (avatar)
                    data.avatar = avatar;
                _this.login_data = data;
                _this.loginservice.setLoginStatus(new __WEBPACK_IMPORTED_MODULE_26__models_user_model__["a" /* User */](data));
                if (_this.pages)
                    _this.resetSideMenu(true);
                if (_this.tabs)
                    _this.resetTabs(true);
            }
        });
    };
    MyApp.prototype.getSetLang = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (data.languages) {
                _this.storage.set('available_languages', data.languages);
                _this.languageservice.setAvailable(data.languages);
            }
            else {
                _this.storage.remove('available_languages');
                _this.languageservice.setAvailable(null);
            }
            _this.storage.get('app_language').then(function (lang) {
                if (lang) {
                    var language = new __WEBPACK_IMPORTED_MODULE_32__models_language_model__["a" /* Language */](lang);
                    _this.translate.use(language.code);
                    _this.languageservice.setCurrentLanguage(language);
                    _this.setBackBtnText();
                    resolve(lang);
                }
                resolve(null);
            });
        });
    };
    MyApp.prototype.syncLoginStatus = function (data) {
        // sync login status. If WP and app doesn't match up, fix it
        var _this = this;
        if (data.isloggedin == false && this.login_data) {
            // logged out of WP but still logged into app: log out of app
            this.login_data = null;
            this.storage.remove('user_login');
            this.loginservice.removeLoginStatus();
            this.events.publish('modal:logindata', null);
            this.events.publish('user:logout', null);
        }
        else if (data.isloggedin == true && !this.login_data) {
            // logged into WP but logged out of app: log into app
            if (data.avatar_url && data.message) {
                this.login_data = { loggedin: true, avatar: this.logins.get_avatar(data.avatar_url), message: data.message, username: '' };
            }
            else {
                this.login_data = { loggedin: true, username: '' };
            }
            this.storage.set('user_login', this.login_data).then(function () {
                _this.loginservice.setLoginStatus(new __WEBPACK_IMPORTED_MODULE_26__models_user_model__["a" /* User */](_this.login_data));
                _this.events.publish('modal:logindata', _this.login_data);
            });
        }
    };
    MyApp.prototype.getAjaxURL = function () {
        if (!this.ajax_url) {
            var item = window.localStorage.getItem('myappp');
            var myapp = JSON.parse(item);
            if (myapp.wordpress_url) {
                this.ajax_url = myapp.wordpress_url + 'wp-admin/admin-ajax.php';
            }
            else {
                return '';
            }
        }
        return this.ajax_url;
    };
    MyApp.prototype.verifyLanguageFile = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // check if language file exists. If not, default to en.json
            _this.languageservice.langFileExists(data).then(function (data) {
                var langData = data;
                // console.log(`set language to ${langData.code} and dir to ${langData.dir}`);
                _this.rtl = (langData.dir && langData.dir == 'rtl');
                var language = new __WEBPACK_IMPORTED_MODULE_32__models_language_model__["a" /* Language */]({
                    code: langData.code,
                    dir: (langData.dir && langData.dir == 'rtl') ? 'rtl' : 'ltr'
                });
                _this.translate.setDefaultLang(language.code);
                _this.languageservice.setCurrentLanguage(language);
                _this.setBackBtnText();
                resolve(language);
            });
        });
    };
    MyApp.prototype.setBackBtnText = function () {
        var _this = this;
        this.translate.get('Back').subscribe(function (text) {
            console.log('Back ' + text);
            _this.config.set('ios', 'backButtonText', text);
        });
    };
    // download item from WP, add to storage
    MyApp.prototype.downloadItem = function (data) {
        var _this = this;
        if (!this.Device.platform)
            return;
        console.log(data);
        var loading = this.loadingCtrl.create({
            showBackdrop: false,
        });
        loading.present(loading);
        this.download.downloadFile(data.download_url).then(function (downloadUrl) {
            if (!downloadUrl)
                return;
            _this.storage.get('downloads').then(function (downloads) {
                if (downloads) {
                    downloads.push({ title: data.download_title, url: downloadUrl });
                }
                else {
                    downloads = [{ title: data.download_title, url: downloadUrl }];
                }
                _this.storage.set('downloads', downloads);
            });
            _this.translate.get('Download successful.').subscribe(function (text) {
                _this.presentToast(text);
            });
            if (loading)
                loading.dismiss();
        })
            .catch(function (err) {
            console.warn(err);
            if (loading)
                loading.dismiss();
        });
    };
    MyApp.prototype.doIphoneX = function () {
        // hack for iphonex status bar
        if (this.Device && this.Device.model) {
            var model = this.Device.model.toLowerCase();
            if (model.indexOf('iphone10') >= 0) {
                this.iphoneX = true;
                if (this.platform.isLandscape()) {
                    this.customClasses = 'iphoneX-landscape';
                }
                else {
                    this.customClasses = 'iphoneX-portrait';
                }
            }
        }
    };
    MyApp.prototype.getPageType = function (page) {
        console.log('getPageType page', page);
        if (page.url == 'https://myapppresser.com/funkflex/apppages/radio/') {
            return __WEBPACK_IMPORTED_MODULE_31__pages_stream_player_stream_player_component__["a" /* StreamPlayerComponent */];
        }
        if (page.type === 'apppages' && page.page_type === 'list') {
            return 'PostList';
        }
        else if (page.type === 'apppages' && page.page_type === 'media-list') {
            return 'MediaList';
        }
        else if (page.type === 'apppages' && page.page_type === 'bp-list') {
            // maybe load profile page. It has type of bp-list even though it's not a bp-list page. Awkward I know.
            if (page.list_route === 'profile') {
                return 'BpProfilePage';
            }
            else if (page.list_route === 'messages') {
                return 'BpMessages';
            }
            else {
                return 'BpList';
            }
        }
        else if (page.type === 'apppages') {
            return this.getPageModuleName(page.page_id);
        }
        else if (page.url && !page.root) {
            return __WEBPACK_IMPORTED_MODULE_30__pages_iframe_iframe__["a" /* Iframe */];
        }
        else {
            return null;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/matt/projects/alphaweb/appp-funkflex/src/app/app.html"*/'<div [innerHTML]="styles"></div>\n\n<ion-menu class="{{customClasses}}" side="{{menu_side}}" *ngIf="pages" [content]="content" swipeEnabled="false" (ionOpen)="menuOpened()" (ionClose)="menuClosed()">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title></ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <ion-list-header text-wrap *ngIf="login_data">\n        <ion-avatar *ngIf="login_data.avatar">\n          <img [src]="login_data.avatar" />\n        </ion-avatar>\n        <p class="loggedin-msg"><b>{{login_data.message | translate}}</b></p>\n        \n      </ion-list-header>\n\n      <button [ngClass]="p.extra_classes" ion-item *ngFor="let p of pages" (click)="menuLink(p, $event)">\n        <ion-icon *ngIf="p.class" name="{{p.class}}" item-left></ion-icon>\n        {{p.title | translate}}\n      </button>\n\n      <button *ngIf="showLogin" ion-button block icon-left class="menu-login-button" (click)="openLoginModal()">\n      <ion-icon name="log-in"></ion-icon>\n      <span *ngIf="login_data">{{ \'Logout\' | translate }}</span><span *ngIf="!login_data">{{ \'Login\' | translate }}</span></button>\n\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav id="nav" #content swipeBackEnabled="false" class="{{customClasses}}"></ion-nav>'/*ion-inline-end:"/Users/matt/projects/alphaweb/appp-funkflex/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5__providers_camera_app_camera__["a" /* AppCamera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_globalvars_globalvars__["a" /* GlobalVars */],
            __WEBPACK_IMPORTED_MODULE_7__providers_appads_appads__["a" /* AppAds */],
            __WEBPACK_IMPORTED_MODULE_13__providers_appgeo_appgeo__["a" /* AppGeo */],
            __WEBPACK_IMPORTED_MODULE_8__providers_facebook_fbconnect_settings__["a" /* FBConnectAppSettings */],
            __WEBPACK_IMPORTED_MODULE_9__providers_facebook_login_iframe__["a" /* FbConnectIframe */],
            __WEBPACK_IMPORTED_MODULE_27__providers_logins_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_28__providers_language_language_service__["a" /* LanguageService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_10__providers_push_push__["a" /* PushService */],
            __WEBPACK_IMPORTED_MODULE_11__providers_appwoo_appwoo__["a" /* AppWoo */],
            __WEBPACK_IMPORTED_MODULE_12__providers_appdata_appdata__["a" /* AppData */],
            __WEBPACK_IMPORTED_MODULE_14__providers_logins_logins__["a" /* Logins */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_25__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["d" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_24__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_23__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_19__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_21__ionic_native_push__["a" /* Push */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_22__ionic_native_dialogs__["a" /* Dialogs */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Config */],
            __WEBPACK_IMPORTED_MODULE_29__providers_menus_menu_service__["a" /* MenuService */],
            __WEBPACK_IMPORTED_MODULE_16__providers_analytics_analytics_service__["a" /* AnalyticsService */],
            __WEBPACK_IMPORTED_MODULE_33__pages_stream_player_services_now_playing_service__["a" /* NowPlayingService */],
            __WEBPACK_IMPORTED_MODULE_34__pages_stream_player_services_streaming_service__["a" /* StreamingService */],
            __WEBPACK_IMPORTED_MODULE_35__pages_stream_player_services_notifications_service__["a" /* NotificationsService */],
            __WEBPACK_IMPORTED_MODULE_15__providers_download_download__["a" /* Download */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 583:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Notification; });
var Notification = /** @class */ (function () {
    function Notification(data) {
        this.type = data['type'];
        this.message = data['message'];
        //Create random id
        this.id = Math.random().toString(36).substr(2, 9);
    }
    return Notification;
}());

//# sourceMappingURL=notification.model.js.map

/***/ }),

/***/ 593:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadioStation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);

var RadioStation = /** @class */ (function () {
    function RadioStation(station) {
        this.is_playing = false;
        this.currentSourceIndex = 0;
        this.autoplay = false;
        this.isCurrentPlayingStation = false;
        // public media: Media;
        this.isPlayingObs = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
        this.isLoadingObs = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
        this.name = station.name;
        this.callsign = station.callsign;
        this.streaming_url = station.url;
        this.cover_art = station.cover_art;
        if (station.autoplay) {
            this.autoplay = station.autoplay;
        }
    }
    RadioStation.prototype.resetDelay = function () {
        this.reconnectionDelay = 5; // seconds
    };
    /**
     * Delay in seconds
     *
     * If there are errors contacting the server double the
     * next request time and try again.
     *
     * Maximum 60 seconds
     */
    RadioStation.prototype.nextDelay = function () {
        this.reconnectionDelay = this.reconnectionDelay * 2;
        // max 1 minute
        if (this.reconnectionDelay > 60) {
            this.reconnectionDelay = 60;
        }
        return this.reconnectionDelay;
    };
    RadioStation.prototype.nextSource = function () {
        if (this.currentSourceIndex + 1 > length) {
            this.currentSourceIndex = 0;
        }
        return this.streamingSources[this.currentSourceIndex++];
    };
    RadioStation.prototype.startLoading = function () {
        console.log('RadioStation startLoading', true);
        this.isLoadingObs.next(true);
    };
    /**
     * Determines if player playing
     *
     * @return     boolean  True if playing, False otherwise.
     */
    RadioStation.prototype.isPlaying = function () {
        return this.isPlayingObs;
    };
    /**
     * Determines if player loading/buffering.
     *
     * @return     boolean  True if loading, False otherwise.
     */
    RadioStation.prototype.isLoading = function () {
        return this.isLoadingObs;
    };
    return RadioStation;
}());

//# sourceMappingURL=radioStation.model.js.map

/***/ }),

/***/ 596:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPlayerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainPlayerComponent = /** @class */ (function () {
    function MainPlayerComponent() {
    }
    MainPlayerComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('radioState'),
        __metadata("design:type", Object)
    ], MainPlayerComponent.prototype, "radioState", void 0);
    MainPlayerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-main-player',template:/*ion-inline-start:"/Users/matt/projects/alphaweb/appp-funkflex/src/pages/stream-player/main-player/main-player.component.html"*/'<div class="main-player">\n	<app-now-playing *ngIf="radioState==\'player\'"></app-now-playing>\n	<app-playlist *ngIf="radioState==\'playlist\'"></app-playlist>\n</div>'/*ion-inline-end:"/Users/matt/projects/alphaweb/appp-funkflex/src/pages/stream-player/main-player/main-player.component.html"*/,
            styles: ['main-player.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], MainPlayerComponent);
    return MainPlayerComponent;
}());

//# sourceMappingURL=main-player.component.js.map

/***/ }),

/***/ 597:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NowPlayingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_track_model__ = __webpack_require__(359);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NowPlayingComponent = /** @class */ (function () {
    function NowPlayingComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_track_model__["a" /* Track */])
    ], NowPlayingComponent.prototype, "currentTrack", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], NowPlayingComponent.prototype, "trackLoaded", void 0);
    NowPlayingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-now-playing',template:/*ion-inline-start:"/Users/matt/projects/alphaweb/appp-funkflex/src/pages/stream-player/now-playing/now-playing.component.html"*/'<div [ngClass]="{\'show-now-playing\':trackLoaded, \'hide-now-playing\':!trackLoaded}">\n	<div class="cover-art">\n		<img src="{{ currentTrack.cover_art }}">\n	</div>\n\n	<div class="text">\n		<div class="title">{{ currentTrack.title }}</div>\n		<div class="artist" *ngIf="currentTrack.artist"> by {{ currentTrack.artist }}</div>\n	</div>\n</div>\n<div [ngClass]="{\'show-now-playing\':!trackLoaded, \'hide-now-playing\':trackLoaded, \'circle-loader now-playing-loading gray\': true}"></div>'/*ion-inline-end:"/Users/matt/projects/alphaweb/appp-funkflex/src/pages/stream-player/now-playing/now-playing.component.html"*/,
            styles: ['now-playing.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], NowPlayingComponent);
    return NowPlayingComponent;
}());

//# sourceMappingURL=now-playing.component.js.map

/***/ }),

/***/ 598:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PlaylistComponent = /** @class */ (function () {
    function PlaylistComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], PlaylistComponent.prototype, "tracks", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], PlaylistComponent.prototype, "tracksLoading", void 0);
    PlaylistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-playlist',template:/*ion-inline-start:"/Users/matt/projects/alphaweb/appp-funkflex/src/pages/stream-player/playlist/playlist.component.html"*/'<div class="playlist">\n	<div class="circle-loader playlist-loader gray" *ngIf="tracksLoading"></div>\n	<ul *ngIf="tracks?.length && !tracksLoading">\n		<li *ngFor="let track of tracks">\n			<div class="cover-art">\n				<img src="{{ track.cover_art }}" *ngIf="track?.cover_art">\n			</div>\n			<div class="data">\n				<div class="title">\n					{{ track?.title }}\n				</div>\n				<div class="artist">\n					by {{ track?.artist }}\n				</div>\n				<div class="played-at">\n					played at {{ track?.played_at | date:\'h:mma\' }}\n				</div>\n			</div>\n		</li>\n	</ul>\n	<div class="msg warning" *ngIf="!tracks?.length && !tracksLoading">You haven\'t listened long enough!</div>\n</div>'/*ion-inline-end:"/Users/matt/projects/alphaweb/appp-funkflex/src/pages/stream-player/playlist/playlist.component.html"*/,
            styles: ['playlist.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], PlaylistComponent);
    return PlaylistComponent;
}());

//# sourceMappingURL=playlist.component.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalVars; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Store global variables to use throughout app

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var GlobalVars = /** @class */ (function () {
    function GlobalVars(http) {
        this.http = http;
        this.data = null;
        this.useDynamicContentModule = true; // false when using our builder on remote Ionic builder?
        // url should be WP site with AP installed, dynamically changes based on build form
        this.appid = '17';
        this.apiurl = 'https://myapppresser.com/funkflex/';
        this.endpoint = 'wp-json/ap3/v1/app/17';
        this.api = this.apiurl + this.endpoint;
    }
    GlobalVars.prototype.getApi = function () {
        // development API
        if (window.location && window.location.href && window.location.href.indexOf('localhost') >= 0) {
            return 'https://myapppresser.com/funkflex/wp-json/ap3/v1/app/17';
        }
        return this.api;
    };
    GlobalVars.prototype.getApiRoot = function () {
        return this.apiurl;
    };
    GlobalVars.prototype.getAppId = function () {
        return this.appid;
    };
    GlobalVars.prototype.getUseDynamicPageModule = function () {
        return this.useDynamicContentModule;
    };
    GlobalVars = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], GlobalVars);
    return GlobalVars;
}());

//# sourceMappingURL=globalvars.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FBConnectAppSettings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__globalvars_globalvars__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__logins_login_service__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FBConnectAppSettings = /** @class */ (function () {
    function FBConnectAppSettings(globalvars, http, facebook, loginservice, platform) {
        var _this = this;
        this.globalvars = globalvars;
        this.http = http;
        this.facebook = facebook;
        this.loginservice = loginservice;
        this.platform = platform;
        this.app_ver = 3;
        this.debug = false;
        this.login_scope = ['email', 'public_profile'];
        this.me_fields = 'email,name,picture';
        this.l10n = {
            login_msg: 'Thanks for logging in, {{USERNAME}}!',
            fetch_user_fail: 'Sorry, login failed',
            not_authorized: 'Please log into this app.',
            fb_not_logged_in: 'Please log into Facebook.',
            wp_login_error: 'WordPress login error',
            login_fail: 'Login error, please try again.'
        };
        this.platform.ready().then(function (platform) {
            if ('object' === typeof window['facebookConnectPlugin']) {
                _this.get_settings().then(function () {
                    console.log('fb settings should be stored now');
                }, function (error) {
                    console.log(error);
                    if (error == 'LocalStorage not set yet') {
                        setTimeout(function () {
                            _this.get_settings();
                        }, 3000); // let's try again in 3 seconds
                        console.log('let\'s try again in 3 seconds');
                    }
                });
            }
            else {
                console.warn('cordova FacebookConnectPlugin is not installed');
            }
        });
    }
    FBConnectAppSettings.prototype.get_settings = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var myappp = localStorage.getItem('myappp');
            if (myappp) {
                myappp = JSON.parse(myappp);
                if (myappp && myappp.wordpress_url) {
                    _this.wordpress_url = myappp['wordpress_url'];
                    _this.wp_site_addr = (myappp['wp_site_addr']) ? myappp['wp_site_addr'] : '';
                    _this.get_remote_settings().then(function (data) {
                        console.log('Facebook, we will update our settings', data);
                        _this.update_settings(data);
                        resolve();
                    }, function (error) {
                        console.warn(error);
                        console.warn('Facebook login settings are not set. Now the Facebook login button will not display');
                        _this.set_nonce(false);
                    });
                }
                else {
                    reject('Skipping remote login setup: no WP URL');
                }
            }
            else {
                reject('LocalStorage not set yet');
            }
        });
    };
    /**
     *
     * @param data from WordPress API response
     */
    FBConnectAppSettings.prototype.update_settings = function (data) {
        console.log('update_settings', data);
        if (data.security)
            this.set_nonce(data.security);
        if (data.l10n)
            this.l10n = data.l10n;
        if (data.me_fields)
            this.verify_me_fields(data.me_fields);
    };
    /**
     * Call WordPress to get nonce for WPLogin
     */
    FBConnectAppSettings.prototype.get_remote_settings = function () {
        var _this = this;
        var params = 'wp-json/ap3/v1/appfbconnect/settings';
        var data = { id: this.globalvars.getAppId() };
        var wp_json_url = (this.wp_site_addr) ? this.wp_site_addr : this.wordpress_url;
        return new Promise(function (resolve, reject) {
            _this.http.post(wp_json_url + params, data).map(function (res) { return res.json(); }).subscribe(function (data) {
                console.log('data from wordpress', data);
                if (data && data.error) {
                    reject(data.error);
                }
                else {
                    resolve(data);
                }
            }, function (error) {
                if (error.status && error.status == '404') {
                    var msg = 'Using FB Login requires App Facebook Connect 2.6.0+ plugin on ' + _this.wordpress_url;
                    console.error(msg);
                    reject(msg);
                }
            });
        });
    };
    FBConnectAppSettings.prototype.get_redirect_url = function (redirect_url) {
        if (redirect_url) {
            var url = new URL(redirect_url);
            url.searchParams.append('appp', this.app_ver.toString());
            return url.toString();
        }
        else {
            return false;
        }
    };
    FBConnectAppSettings.prototype.verify_me_fields = function (me_fields) {
        // a wp developer can send their own fields
        if (me_fields) {
            this.me_fields = me_fields;
            // required fields for our app
            if (this.me_fields.indexOf('picture') < 0)
                this.me_fields += ',picture';
            if (this.me_fields.indexOf('name') < 0)
                this.me_fields += ',name';
            if (this.me_fields.indexOf('email') < 0)
                this.me_fields += ',email';
        }
        return this.me_fields;
    };
    FBConnectAppSettings.prototype.loggout = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if ('object' === typeof window['facebookConnectPlugin']) {
                _this.facebook.getLoginStatus().then(function (response) {
                    if (response && response.status == 'connected') {
                        _this.facebook.logout();
                    }
                    resolve(response);
                });
            }
            else {
                console.warn('cordova FacebookConnectPlugin is not installed');
            }
            _this.remove_avatar();
        });
    };
    FBConnectAppSettings.prototype.get_nonce = function () {
        return localStorage.getItem('fb_nonce');
    };
    FBConnectAppSettings.prototype.set_nonce = function (security) {
        if (security)
            localStorage.setItem('fb_nonce', security);
        else
            localStorage.removeItem('fb_nonce');
    };
    FBConnectAppSettings.prototype.get_ajaxurl = function () {
        return this.wordpress_url + 'wp-admin/admin-ajax.php';
    };
    FBConnectAppSettings.prototype.get_avatar = function () {
        return localStorage.getItem('fb_avatar');
    };
    FBConnectAppSettings.prototype.set_avatar = function (response) {
        if (response && response.picture && response.picture.data.url)
            localStorage.setItem('fb_avatar', response.picture.data.url);
    };
    FBConnectAppSettings.prototype.remove_avatar = function () {
        localStorage.removeItem('fb_avatar');
    };
    FBConnectAppSettings = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__globalvars_globalvars__["a" /* GlobalVars */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_5__logins_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* Platform */]])
    ], FBConnectAppSettings);
    return FBConnectAppSettings;
}());

//# sourceMappingURL=fbconnect-settings.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnalyticsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angulartics2_ga__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angulartics2__ = __webpack_require__(170);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AnalyticsService = /** @class */ (function () {
    function AnalyticsService(ga, angulartics2) {
        this.ga = ga;
        this.angulartics2 = angulartics2;
        this.isEnabled = false;
        this.isDuplicate = false;
        this.basepath = 'apppresser/';
    }
    AnalyticsService.prototype.beginTracking = function (tracking_id, basename) {
        this.isEnabled = true;
        if (basename) {
            this.basepath = basename + '/';
        }
        (function (i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r;
            i[r] = i[r] || function () {
                (i[r].q = i[r].q || []).push(arguments);
            }, i[r].l = 1 * new Date();
            a = s.createElement(o),
                m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m);
        })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
        // Use localstorage instead of cookies
        var GA_LOCAL_STORAGE_KEY = 'ga:clientId';
        ga('create', tracking_id, {
            'storage': 'none',
            'clientId': localStorage.getItem(GA_LOCAL_STORAGE_KEY)
        });
        ga(function (tracker) {
            localStorage.setItem(GA_LOCAL_STORAGE_KEY, tracker.get('clientId'));
        });
        // allow file:// URLs for our app
        ga('set', 'checkProtocolTask', function () { });
    };
    AnalyticsService.prototype.trackScreenView = function (component, screenname) {
        if (!this.isEnabled)
            return;
        if (!this.isDuplicate) {
            this.setNoDuplicates();
            // https://github.com/angulartics/angulartics2/blob/master/src/lib/providers/ga/ga.ts
            this.ga.pageTrack(this.basepath + component + '/#/' + screenname);
            // console.log(this.basepath + component + '/#/' + screenname);
        }
    };
    AnalyticsService.prototype.setNoDuplicates = function () {
        var _this = this;
        if (this.isDuplicate)
            return;
        this.isDuplicate = true;
        setTimeout(function () {
            _this.isDuplicate = false;
        }, 1000);
    };
    AnalyticsService.prototype.trackEvent = function (event, label) {
        if (!this.isEnabled)
            return;
        var properties = {
            category: 'app'
        };
        if (label)
            properties.label = label;
        this.angulartics2.eventTrack.next({
            action: event,
            properties: properties,
        });
    };
    AnalyticsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angulartics2_ga__["a" /* Angulartics2GoogleAnalytics */],
            __WEBPACK_IMPORTED_MODULE_2_angulartics2__["b" /* Angulartics2 */]])
    ], AnalyticsService);
    return AnalyticsService;
}());

//# sourceMappingURL=analytics.service.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User(data) {
        if (data) {
            this.username = (data.username) ? data.username : '';
            this.firstname = (data.firstname) ? data.firstname : '';
            this.lastname = (data.lastname) ? data.lastname : '';
            this.email = (data.email) ? data.email : '';
            this.avatar = (data.avatar) ? data.avatar : '';
            this.lang = (data.lang) ? data.lang : '';
            this.rtl = (data.rtl);
        }
    }
    return User;
}());

//# sourceMappingURL=user.model.js.map

/***/ })

},[370]);
//# sourceMappingURL=main.js.map