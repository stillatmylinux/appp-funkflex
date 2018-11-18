webpackJsonp([9],{

/***/ 614:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs__ = __webpack_require__(725);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__tabs__["a" /* TabsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__tabs__["a" /* TabsPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__tabs__["a" /* TabsPage */]
            ]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());

//# sourceMappingURL=tabs.module.js.map

/***/ }),

/***/ 725:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__iframe_iframe__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_logins_login_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_language_language_service__ = __webpack_require__(126);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ModalOptions = /** @class */ (function () {
    function ModalOptions() {
    }
    return ModalOptions;
}());
var TabsPage = /** @class */ (function () {
    function TabsPage(modalCtrl, navParams, events, loginservice, languageservice, nav) {
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.events = events;
        this.loginservice = loginservice;
        this.languageservice = languageservice;
        this.nav = nav;
        this.tabs = [];
        this.login_modal_open = false;
    }
    TabsPage.prototype.ngOnInit = function () {
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
        this.mySelectedIndex = this.navParams.data.tabIndex || 0;
        // root=null if opening in the IAB
        for (var _i = 0, _a = this.navParams.data; _i < _a.length; _i++) {
            var tab = _a[_i];
            var target = this.maybeOpenIAB(tab);
            if (target) {
                tab.root = null;
                tab.target = target;
            }
            if (typeof (tab.extra_classes) !== 'undefined' && (tab.extra_classes.indexOf('loginmodal') >= 0 || tab.extra_classes.indexOf('logoutmodal') >= 0)) {
                tab.root = null;
            }
            this.tabs.push(tab);
        }
    };
    TabsPage.prototype.onIonSelect = function ($event, tab) {
        // yield login
        /**
         * TODO: test again in a newer version of Ionic
         *
         * This feature isn't working because the ionSelect doesn't
         * allow you to $event.stopPropagation() or $event.preventDefault()
         *
         * We need to test the yield login BEFORE transitioning to the selcted tab
         */
        // if(this.yieldLogin($event, tab))
        //   return false;
        if (tab.url && tab.target) {
            var url = tab.url;
            if (tab.target == '_system') {
                var use_language = (typeof (tab.extra_classes) !== 'undefined' && (tab.extra_classes.indexOf('use-language') >= 0));
                url = this.languageservice.removeAppParams(url, use_language);
            }
            this.openIab(url, tab.target);
        }
        if (typeof (tab.extra_classes) !== 'undefined' && (tab.extra_classes.indexOf('loginmodal') >= 0 || tab.extra_classes.indexOf('logoutmodal') >= 0)) {
            this.loginModal({ title: tab.title });
        }
    };
    TabsPage.prototype.loginModal = function (opt) {
        var _this = this;
        var css = (opt && opt.cssClass) ? opt.cssClass : '';
        var params = (opt && opt.title) ? { title: opt.title } : {};
        this.login_modal = this.modalCtrl.create('LoginModal', params, {
            cssClass: css
        });
        this.login_modal.onDidDismiss(function (data) {
            _this.login_modal_open = false;
        });
        if (this.login_modal_open === false) {
            this.login_modal_open = true;
            this.login_modal.present();
        }
    };
    TabsPage.prototype.maybeOpenIAB = function (tab) {
        if (tab.extra_classes &&
            (tab.extra_classes.indexOf('system') >= 0 || tab.extra_classes.indexOf('external') >= 0) &&
            tab.url &&
            tab.url.indexOf('http') === 0) {
            return this.getIabTarget(tab.extra_classes);
        }
        return false;
    };
    TabsPage.prototype.getIabTarget = function (extra_classes) {
        if (extra_classes.indexOf('system') >= 0) {
            return '_system';
        }
        else if (extra_classes.indexOf('external') >= 0) {
            return '_blank';
        }
        return false;
    };
    TabsPage.prototype.openIab = function (link, target, options) {
        if (options === void 0) { options = null; }
        window.open(link, target, options);
    };
    /**
     * Open the login modal if the menu item's extra_classes contains 'yieldlogin'
     * @param tab
     */
    TabsPage.prototype.yieldLogin = function ($event, tab) {
        if (tab && tab.extra_classes && tab.extra_classes.indexOf('yieldlogin') >= 0) {
            if (this.user) { // logged in
                return false;
            }
            else { // logged out, show login modal
                this.events.publish('login:force_login');
                // This portion needs to work before using this function
                // $event.preventDefault();
                // $event.stopPropagation();
                return true;
            }
        }
        return false;
    };
    // ng2 way of adding a listener
    TabsPage.prototype.onMessage = function (event) {
        this.myListeners(event);
    };
    TabsPage.prototype.myListeners = function (e) {
        var _this = this;
        // if it's not our json object, return
        if (e.data.indexOf('{') != 0)
            return;
        var data = JSON.parse(e.data);
        // close all windows and then re-open root page, for LearnDash
        if (data.apppage && data.apppage.root) {
            var page_1 = { title: (data.title ? data.title : ''), component: __WEBPACK_IMPORTED_MODULE_2__iframe_iframe__["a" /* Iframe */], url: data.apppage.url, classes: null, page_type: null, type: null };
            // for learndash, when we have a redirect
            this.nav.popToRoot({ animate: false }).then(function () {
                _this.nav.push(__WEBPACK_IMPORTED_MODULE_2__iframe_iframe__["a" /* Iframe */], page_1);
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:message', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TabsPage.prototype, "onMessage", null);
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/matt/projects/alphaweb/funkflex/ap3/src/pages/tabs/tabs.html"*/'<ion-tabs [selectedIndex]="mySelectedIndex" #myTabs>\n  <ion-tab *ngFor="let tab of tabs" [root]="tab.root" tabTitle="{{tab.title | translate}}" [tabIcon]="tab.icon" [rootParams]="tab" [ngClass]="tab.extra_classes" [show]="tab.show" (ionSelect)="onIonSelect($event, tab);"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Users/matt/projects/alphaweb/funkflex/ap3/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__providers_logins_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_language_language_service__["a" /* LanguageService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ })

});
//# sourceMappingURL=9.js.map