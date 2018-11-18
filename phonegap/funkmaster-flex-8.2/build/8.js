webpackJsonp([8],{

/***/ 599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BpGroupPageModule", function() { return BpGroupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bp_group__ = __webpack_require__(652);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_sanitize_html_sanitize_html_module__ = __webpack_require__(618);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var BpGroupPageModule = /** @class */ (function () {
    function BpGroupPageModule() {
    }
    BpGroupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__bp_group__["a" /* BpGroupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__bp_group__["a" /* BpGroupPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__pipes_sanitize_html_sanitize_html_module__["a" /* SanitizeHtmlModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__bp_group__["a" /* BpGroupPage */]
            ]
        })
    ], BpGroupPageModule);
    return BpGroupPageModule;
}());

//# sourceMappingURL=bp-group.module.js.map

/***/ }),

/***/ 618:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SanitizeHtmlModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sanitize_html__ = __webpack_require__(619);
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

/***/ 619:
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

/***/ 652:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BpGroupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_buddypress_bp_provider__ = __webpack_require__(359);
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





var BpGroupPage = /** @class */ (function () {
    function BpGroupPage(nav, navParams, viewCtrl, platform, events, bpProvider, toastCtrl, loadingCtrl, modalCtrl, storage, translate) {
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
        this.join_pending = false;
        // set login data after modal login
        events.subscribe('user:login', function (data) {
            _this.login_data = data;
        });
        if (this.navParams) {
            this.groupId = this.navParams.get('group_id');
        }
        if (!this.groupId)
            return;
        this.storage.get('user_login').then(function (data) {
            if (data) {
                _this.login_data = data;
            }
            _this.setupGroup();
        });
    }
    BpGroupPage.prototype.ionViewWillEnter = function () {
        if (this.platform.isRTL && this.viewCtrl.enableBack()) {
            this.viewCtrl.showBackButton(false);
            this.rtlBack = true;
        }
    };
    BpGroupPage.prototype.setupGroup = function () {
        var _this = this;
        this.bpProvider.getItem('groups/' + this.groupId, this.login_data).then(function (data) {
            console.log(data);
            _this.groupData = data;
        }).catch(function (e) {
            console.warn(e);
        });
    };
    BpGroupPage.prototype.groupActivity = function () {
        this.nav.push('BpList', {
            list_route: 'activity',
            title: this.groupData.name,
            group_id: this.groupId,
            group_link: this.groupData.link
        });
    };
    BpGroupPage.prototype.joinGroup = function () {
        var _this = this;
        if (!this.login_data || !this.login_data.user_id) {
            this.presentToast('Please log in.');
            return;
        }
        this.bpProvider.joinGroup(this.groupData, this.login_data).then(function (data) {
            if (data && !data.status) {
                // deprecated, here for backwards compat
                _this.presentToast('Joined group!');
                _this.groupData.is_user_member = true;
            }
            if (!data.status)
                return;
            _this.presentToast(data.message);
            if (data.status === 'joined_group') {
                _this.groupData.is_user_member = true;
            }
            else if (data.status === 'pending') {
                _this.join_pending = true;
            }
        }).catch(function (e) {
            var msg = '';
            if (e.message) {
                msg = e.message;
            }
            _this.presentToast('Could not join group. ' + msg);
            console.warn(e);
        });
    };
    BpGroupPage.prototype.iabLink = function (link) {
        window.open(link, '_blank');
    };
    BpGroupPage.prototype.openLoginModal = function () {
        var loginModal = this.modalCtrl.create('LoginModal');
        loginModal.present();
    };
    BpGroupPage.prototype.presentToast = function (msg) {
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
    BpGroupPage.prototype.showSpinner = function () {
        this.spinner = this.loadingCtrl.create();
        this.spinner.present();
    };
    BpGroupPage.prototype.hideSpinner = function () {
        this.spinner.dismiss();
    };
    // changes the back button transition direction if app is RTL
    BpGroupPage.prototype.backRtlTransition = function () {
        var obj = {};
        if (this.platform.is('ios'))
            obj = { direction: 'forward' };
        this.nav.pop(obj);
    };
    BpGroupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({template:/*ion-inline-start:"/Users/matt/projects/alphaweb/funkflex/ap3/src/pages/bp-group/bp-group.html"*/'<ion-header>\n	<ion-navbar>\n\n		<ion-buttons start>\n			<button *ngIf="rtlBack" (click)="backRtlTransition()" ion-button class="custom-back-button">\n			    <ion-icon name="arrow-back"></ion-icon>\n			    {{\'Back\' | translate }}\n			</button>\n\n			<button ion-button menuToggle>\n			  <ion-icon name="menu"></ion-icon>\n			</button>\n\n		</ion-buttons>\n\n		<ion-title *ngIf="groupData">{{ groupData.name }}</ion-title>\n		\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n\n	<div *ngIf="groupData">\n\n		<div *ngIf="groupData && groupData.appp && groupData.appp.above_content" [innerHTML]="groupData.appp.above_content | sanitizeHtml"></div>\n\n		<img class="group-cover-image" *ngIf="groupData.cover_image" [src]="groupData.cover_image" />\n\n		<ion-item>\n			<ion-avatar item-start *ngIf="groupData.avatar_urls">\n				<img *ngIf="groupData.avatar_urls && groupData.avatar_urls.full" src="{{groupData.avatar_urls.full}}">\n				<img *ngIf="!groupData.avatar_urls.full" src="{{groupData.avatar_urls.thumb}}">\n			</ion-avatar>\n			<h2 class="group-name" *ngIf="groupData.name" [innerHTML]="groupData.name"></h2>\n			<p style="white-space:normal" *ngIf="groupData.description" [innerHTML]="groupData.description"></p>\n			<p class="member-count">{{ groupData.total_member_count }} {{ \'members\' | translate }}</p>\n		</ion-item>\n\n		<ion-row>\n			<ion-col *ngIf="!groupData.is_user_member" text-center>\n				<button ion-button icon-start small clear (click)="joinGroup()"><span *ngIf="!join_pending"><ion-icon name="add"></ion-icon> {{ \'Join Group\' | translate }}</span> <ion-badge *ngIf="join_pending">{{ \'Pending\' | translate }}</ion-badge></button>\n			</ion-col>\n			<ion-col text-center *ngIf="groupData.is_user_member">\n				<button ion-button icon-start small clear (click)="groupActivity()"><ion-icon name="list"></ion-icon> {{ \'Group Activity\' | translate }}</button>\n			</ion-col>\n			<ion-col text-center>\n				<button ion-button icon-start small clear (click)="iabLink(groupData.link)"><ion-icon name="cog"></ion-icon> {{ \'Group Details\' | translate }}</button>\n			</ion-col>\n		</ion-row>\n\n		<div *ngIf="groupData && groupData.appp && groupData.appp.below_content" [innerHTML]="groupData.appp.below_content | sanitizeHtml"></div>\n\n	</div>\n\n</ion-content>'/*ion-inline-end:"/Users/matt/projects/alphaweb/funkflex/ap3/src/pages/bp-group/bp-group.html"*/,
            selector: 'bp-group'
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
    ], BpGroupPage);
    return BpGroupPage;
}());

//# sourceMappingURL=bp-group.js.map

/***/ })

});
//# sourceMappingURL=8.js.map