webpackJsonp([7],{

/***/ 604:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BpProfilePageModule", function() { return BpProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bp_profile__ = __webpack_require__(657);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_sanitize_html_sanitize_html_module__ = __webpack_require__(619);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var BpProfilePageModule = /** @class */ (function () {
    function BpProfilePageModule() {
    }
    BpProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__bp_profile__["a" /* BpProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__bp_profile__["a" /* BpProfilePage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__pipes_sanitize_html_sanitize_html_module__["a" /* SanitizeHtmlModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__bp_profile__["a" /* BpProfilePage */]
            ]
        })
    ], BpProfilePageModule);
    return BpProfilePageModule;
}());

//# sourceMappingURL=bp-profile.module.js.map

/***/ }),

/***/ 619:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SanitizeHtmlModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sanitize_html__ = __webpack_require__(620);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SanitizeHtmlModule = /** @class */ (function () {
    function SanitizeHtmlModule() {
    }
    SanitizeHtmlModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__sanitize_html__["a" /* SanitizeHtml */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__sanitize_html__["a" /* SanitizeHtml */]]
        })
    ], SanitizeHtmlModule);
    return SanitizeHtmlModule;
}());

//# sourceMappingURL=sanitize-html.module.js.map

/***/ }),

/***/ 620:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SanitizeHtml; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SanitizeHtml = /** @class */ (function () {
    function SanitizeHtml(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    SanitizeHtml.prototype.transform = function (v) {
        return this._sanitizer.bypassSecurityTrustHtml(v);
    };
    SanitizeHtml = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'sanitizeHtml'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], SanitizeHtml);
    return SanitizeHtml;
}());

//# sourceMappingURL=sanitize-html.js.map

/***/ }),

/***/ 657:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BpProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_buddypress_bp_provider__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BpProfilePage = /** @class */ (function () {
    function BpProfilePage(nav, navParams, viewCtrl, platform, events, bpProvider, toastCtrl, loadingCtrl, modalCtrl, storage, translate) {
        var _this = this;
        this.nav = nav;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.platform = platform;
        this.events = events;
        this.bpProvider = bpProvider;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.translate = translate;
        this.rtlBack = false;
        this.isError = false;
        this.isMyProfile = false;
        // set login data after modal login
        events.subscribe('user:login', function (data) {
            _this.login_data = data;
            _this.user_id = _this.login_data.user_id;
            _this.setupUser(true);
        });
    }
    BpProfilePage.prototype.ngOnInit = function () {
        if (this.platform.isRTL && this.viewCtrl.enableBack()) {
            this.viewCtrl.showBackButton(false);
            this.rtlBack = true;
        }
        if (this.navParams) {
            this.user_id = this.navParams.get('user_id');
            this.login_data = this.navParams.get('login_data');
        }
        if (!this.user_id && !this.login_data) {
            this.checkLogin();
        }
        else {
            this.setupUser(true);
        }
    };
    BpProfilePage.prototype.ionViewWillEnter = function () {
        // update profile when cached
        if (this.userData) {
            this.setupUser(false);
        }
        this.getNotifications();
    };
    BpProfilePage.prototype.checkLogin = function () {
        var _this = this;
        // if we are here it's probably because this page was loaded from the menu, not from the members list page
        this.storage.get('user_login').then(function (login_data) {
            if (login_data && login_data.user_id) {
                _this.login_data = login_data;
                _this.user_id = _this.login_data.user_id;
                _this.setupUser(true);
            }
            else {
                _this.isError = true;
            }
        });
    };
    BpProfilePage.prototype.setupUser = function (spinner) {
        var _this = this;
        this.isError = false;
        if (spinner)
            this.showSpinner();
        if (this.user_id === this.login_data.user_id) {
            this.isMyProfile = true;
        }
        this.bpProvider.getItem('members/' + this.user_id, this.login_data).then(function (data) {
            _this.userData = data;
            _this.hideSpinner();
        }).catch(function (e) {
            _this.isError = true;
            console.warn(e);
            _this.hideSpinner();
        });
    };
    BpProfilePage.prototype.userActivity = function (userData) {
        this.nav.push('BpList', {
            list_route: 'activity',
            user_activity: userData.id
        });
    };
    // maybe add https to avatar url
    BpProfilePage.prototype.formatUrl = function (url) {
        if (!url)
            return;
        if (url.indexOf('http') >= 0) {
            return url;
        }
        else {
            return 'https:' + url;
        }
    };
    BpProfilePage.prototype.showMessages = function () {
        this.nav.push('BpMessages');
    };
    BpProfilePage.prototype.notificationsPage = function () {
        this.nav.push('BpNotifications');
    };
    BpProfilePage.prototype.doFriend = function (friendId, unfriend) {
        var _this = this;
        this.showSpinner();
        this.bpProvider.doFriend(friendId, this.login_data, unfriend).then(function (response) {
            _this.presentToast(response);
            _this.hideSpinner();
        }).catch(function (e) {
            _this.translate.get('There was a problem.').subscribe(function (text) {
                var msg = text;
                console.warn(e);
                if (e.status && e.status == 404) {
                    msg = 'Friendship connections are not enabled';
                }
                _this.presentToast(msg);
                _this.hideSpinner();
            });
        });
    };
    BpProfilePage.prototype.message = function (userData) {
        this.nav.push('BpMessages', {
            singleThread: true,
            newThread: true,
            login_data: this.login_data,
            recipients: userData.id
        });
    };
    BpProfilePage.prototype.getNotifications = function () {
        var _this = this;
        if (!this.login_data)
            return;
        this.bpProvider.getNotifications(this.login_data).then(function (items) {
            // Loads posts from WordPress API
            _this.notificationCount = items.length;
        }).catch(function (err) {
            console.warn(err);
        });
    };
    BpProfilePage.prototype.iabLink = function (link) {
        window.open(link, '_blank');
    };
    BpProfilePage.prototype.openLoginModal = function () {
        var loginModal = this.modalCtrl.create('LoginModal');
        loginModal.present();
    };
    BpProfilePage.prototype.presentToast = function (msg) {
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
    BpProfilePage.prototype.showSpinner = function () {
        this.spinner = this.loadingCtrl.create();
        this.spinner.present();
    };
    BpProfilePage.prototype.hideSpinner = function () {
        if (this.spinner) {
            this.spinner.dismiss();
        }
    };
    // changes the back button transition direction if app is RTL
    BpProfilePage.prototype.backRtlTransition = function () {
        var obj = {};
        if (this.platform.is('ios'))
            obj = { direction: 'forward' };
        this.nav.pop(obj);
    };
    BpProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({template:/*ion-inline-start:"/Users/matt/projects/alphaweb/appp-funkflex/src/pages/bp-profile/bp-profile.html"*/'<ion-header>\n	<ion-navbar>\n\n		<ion-buttons start>\n			<button *ngIf="rtlBack" (click)="backRtlTransition()" ion-button class="custom-back-button">\n			    <ion-icon name="arrow-back"></ion-icon>\n			    {{\'Back\' | translate }}\n			</button>\n\n			<button ion-button menuToggle>\n				<ion-icon name="menu"></ion-icon>\n			</button>\n\n		</ion-buttons>\n\n		<ion-title *ngIf="userData">{{ userData.name }}</ion-title>\n\n		<ion-buttons end *ngIf="isMyProfile">\n			<button ion-button (click)="openLoginModal()"><ion-icon name="log-in"></ion-icon> <!-- <span *ngIf="login_data">{{ \'Logout\' | translate }}</span><span *ngIf="!login_data">{{ \'Login\' | translate }}</span> --></button>\n		</ion-buttons>\n		\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n\n	<div *ngIf="userData && userData.appp && userData.appp.above_content" [innerHTML]="userData.appp.above_content | sanitizeHtml"></div>\n\n	<img class="cover-image" *ngIf="userData && userData.cover_image" [src]="userData.cover_image" />\n\n	<ion-card *ngIf="userData">\n\n		<ion-item>\n			<ion-avatar item-start *ngIf="userData.avatar_urls">\n				<img *ngIf="userData.avatar_urls && userData.avatar_urls.full" [src]="formatUrl( userData.avatar_urls.full )">\n				<img *ngIf="!userData.avatar_urls.full" [src]="formatUrl( userData.avatar_urls.thumb )">\n			</ion-avatar>\n			<p class="user-name" *ngIf="userData.name" [innerHTML]="userData.name"></p>\n			<p class="mention-name" *ngIf="userData.mention_name" [innerHTML]="\'@\' + userData.mention_name"></p>\n			<button ion-button block (click)="iabLink(userData.link )" color="light">{{ \'View Full Profile\' | translate }}</button>\n			\n		</ion-item>\n\n		<ion-row *ngIf="!isMyProfile">\n			<ion-col text-center>\n				<button ion-button icon-start small clear (click)="message( userData )"><ion-icon name="chatbubbles"></ion-icon> {{ \'Message\' | translate }}</button>\n			</ion-col>\n			<ion-col text-center>\n				<button ion-button icon-start small clear (click)="userActivity(userData )"><ion-icon name="list"></ion-icon> {{ \'Activity\' | translate }}</button>\n			</ion-col>\n			<ion-col text-center>\n				<button *ngIf="!userData.check_friendship" ion-button icon-start small clear (click)="doFriend(userData.id, false)"><ion-icon name="add"></ion-icon> {{ \'Friend\' | translate }}</button>\n				<button *ngIf="userData.check_friendship" ion-button icon-start small clear (click)="doFriend(userData.id, true)"><ion-icon name="remove-circle"></ion-icon> {{ \'Unfriend\' | translate }}</button>\n			</ion-col>\n		</ion-row>\n\n		<ion-row *ngIf="isMyProfile">\n    		<ion-col text-center>\n				<button ion-button icon-start small clear *ngIf="isMyProfile" block (click)="showMessages()"><ion-icon name="chatbubbles"></ion-icon> {{ \'Messages\' | translate }}</button>\n			</ion-col>\n			<ion-col text-center>\n\n				<button id="notification-button" ion-button icon-start small clear (click)="notificationsPage()"><ion-icon name="notifications"></ion-icon> {{ \'Notifications\' | translate }} <ion-badge color="danger" *ngIf="notificationCount && notificationCount != 0"> {{ notificationCount }}</ion-badge></button>\n\n			</ion-col>\n		</ion-row>\n\n	</ion-card>\n\n	<ion-card class="last-activity" *ngIf="userData && userData.last_activity" (click)="userActivity( userData )">\n		<span class="last-update-header">{{ \'Last update\' | translate }}</span>\n		<ion-card-content [innerHTML]="userData.last_activity.content"></ion-card-content>\n	</ion-card>\n\n	<div *ngIf="userData && userData.appp && userData.appp.below_content" [innerHTML]="userData.appp.below_content | sanitizeHtml"></div>\n	\n	<div *ngIf="isError" padding>\n		<p>{{ \'There is a problem displaying this profile. You may need to login, or log out then log back in.\' | translate }}</p>\n		<button ion-button icon-start small clear (click)="openLoginModal()"><ion-icon name="log-in"></ion-icon> {{ \'Please login\' | translate }}</button>\n	</div>\n\n</ion-content>'/*ion-inline-end:"/Users/matt/projects/alphaweb/appp-funkflex/src/pages/bp-profile/bp-profile.html"*/,
            selector: 'bp-profile'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__providers_buddypress_bp_provider__["a" /* BpProvider */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["d" /* TranslateService */]])
    ], BpProfilePage);
    return BpProfilePage;
}());

//# sourceMappingURL=bp-profile.js.map

/***/ })

});
//# sourceMappingURL=7.js.map