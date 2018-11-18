webpackJsonp([12],{

/***/ 608:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModalModule", function() { return LoginModalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_modal__ = __webpack_require__(669);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginModalModule = /** @class */ (function () {
    function LoginModalModule() {
    }
    LoginModalModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__login_modal__["a" /* LoginModal */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__login_modal__["a" /* LoginModal */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__login_modal__["a" /* LoginModal */]
            ]
        })
    ], LoginModalModule);
    return LoginModalModule;
}());

//# sourceMappingURL=login-modal.module.js.map

/***/ }),

/***/ 669:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_wplogin_wplogin__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_logins_logins__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_facebook_login_app__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_facebook_fbconnect_settings__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_device__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_logins_login_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_buddypress_bp_provider__ = __webpack_require__(359);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var LoginModal = /** @class */ (function () {
    function LoginModal(navParams, viewCtrl, loadingCtrl, wplogin, logins, events, storage, translate, fbconnectApp, fbconnectvars, toastCtrl, loginservice, Device, bpProvider, platform, sanitizer) {
        var _this = this;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.wplogin = wplogin;
        this.logins = logins;
        this.events = events;
        this.storage = storage;
        this.translate = translate;
        this.fbconnectApp = fbconnectApp;
        this.fbconnectvars = fbconnectvars;
        this.toastCtrl = toastCtrl;
        this.loginservice = loginservice;
        this.Device = Device;
        this.bpProvider = bpProvider;
        this.platform = platform;
        this.sanitizer = sanitizer;
        this.login = {};
        this.user_data = {};
        this.pw_reset = {};
        this.force_login = false;
        this.is_preview = false;
        this.fb_login = false;
        this.show_verification_field = false;
        this.title = '';
        this.show_registration = false;
        this.show_pw_reset = false;
        this.show_reset_code = false;
        this.iphoneX = false;
        if (this.navParams.get('title')) {
            this.title = this.navParams.get('title');
        }
        else {
            this.title = 'Login';
        }
        // login through postmessage sets login_data this way
        events.subscribe('modal:logindata', function (data) {
            _this.setLoginData(data);
        });
        platform.resume.subscribe(function (e) {
            _this.getScreen();
        });
        // get login data on first load
        this.storage.get('user_login').then(function (data) {
            if (data) {
                _this.login_data = data;
            }
        });
        this.storage.get('force_login').then(function (data) {
            if (data) {
                _this.force_login = true;
            }
        });
        this.storage.get('api_register_setting').then(function (data) {
            if (data) {
                _this.api_register_setting = data;
            }
        });
        this.checkUnverified();
        this.initFBLogin();
        this.is_preview = (location.href.indexOf('myapppresser') > 0);
        this.doIphoneX();
    }
    LoginModal.prototype.ionViewWillEnter = function () {
        // save the screen we were on last
        this.getScreen();
    };
    // if we are in the middle of a pw reset or registration, show correct fields
    LoginModal.prototype.getScreen = function () {
        var _this = this;
        this.storage.get('login_screen').then(function (screen) {
            if (screen === 'show_verification_field') {
                _this.show_verification_field = true;
                _this.show_registration = true;
                _this.checkUnverified();
            }
            else if (screen === 'show_reset_code') {
                _this.show_pw_reset = true;
                _this.show_reset_code = true;
                _this.show_registration = false;
            }
        });
    };
    LoginModal.prototype.checkUnverified = function () {
        var _this = this;
        this.storage.get('unverified_user').then(function (data) {
            if (data) {
                _this.show_verification_field = true;
                _this.show_registration = true;
                _this.user_data = data;
            }
        });
    };
    /**
     * The FB login button will only display after settings are received
     *
     * fb_login: true|false to show the button
     */
    LoginModal.prototype.initFBLogin = function () {
        var _this = this;
        this.fb_login = (this.fbconnectvars.get_nonce()) ? true : false;
        if (this.fb_login === false) {
            setTimeout(function () {
                _this.fb_login = (_this.fbconnectvars.get_nonce()) ? true : false;
                if (_this.fb_login === false) {
                    setTimeout(function () {
                        _this.fb_login = (_this.fbconnectvars.get_nonce()) ? true : false;
                    }, 5000); // iOS seems to take longer
                }
            }, 3000); // Slow on first app load
        }
    };
    LoginModal.prototype.doLogin = function () {
        var _this = this;
        this.translate.get('Please enter a valid login.').subscribe(function (text) {
            if (!_this.login)
                _this.presentToast(text);
        });
        this.showSpinner();
        // safety just in case
        setTimeout(function () {
            if (_this.spinner)
                _this.hideSpinner();
        }, 15000);
        this.wplogin.login(this.login).then(function (response) {
            if (!response || response.success === false) {
                _this.loginErr(response);
                return;
            }
            var login_data = response;
            if (login_data && login_data.avatar)
                login_data.avatar = _this.logins.fixProtocolRelativeUrl(login_data.avatar);
            _this.loginSuccess(login_data);
            _this.hideSpinner();
        }, function (err) {
            _this.loginErr(err);
        }).catch(function (e) {
            console.warn(e);
            _this.hideSpinner();
            _this.translate.get('There was a problem connecting to the server.').subscribe(function (text) {
                _this.presentToast(text);
            });
        });
    };
    LoginModal.prototype.loginSuccess = function (login_data) {
        this.storage.set('user_login', login_data);
        this.events.publish('user:login', login_data);
        this.login_data = login_data;
        this.maybeSetCookie(login_data);
        // clean up
        this.resetRegistration();
    };
    LoginModal.prototype.maybeSetCookie = function (login_data, logout) {
        if (logout === void 0) { logout = false; }
        // only do this in the browser
        if (this.platform.is('ios') || this.platform.is('android')) {
            this.dismiss();
            return;
        }
        console.log('Setting cookie via iframe because we are in the browser.');
        var myappp = JSON.parse(window.localStorage.getItem('myappp'));
        var url = myappp.wordpress_url;
        // maybe add token to set cookie. This fixes an issue where auth cookie was not set because of API login
        if (logout) {
            url = url + '?appp=3&wp_logout=true';
            this.storage.remove('wp_logout');
        }
        else if (login_data && login_data.cookie_auth && login_data.cookie_auth != '') {
            url = url + '?appp=3&cookie_auth=' + login_data.cookie_auth;
            login_data.cookie_auth = '';
            this.storage.set('user_login', login_data);
        }
        this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
        console.log('iframe url ' + url);
    };
    LoginModal.prototype.loginErr = function (err) {
        var _this = this;
        console.log(err);
        this.hideSpinner();
        this.translate.get('There was a problem, please try again.').subscribe(function (text) {
            var msg = text;
            if (err.data && err.data.message)
                msg += ' ' + err.data.message;
            _this.presentToast(msg);
        });
    };
    LoginModal.prototype.showResetPassword = function () {
        this.show_pw_reset = true;
        this.show_registration = false;
    };
    LoginModal.prototype.doResetPassword = function () {
        var _this = this;
        console.log(this.pw_reset);
        if (!this.pw_reset.email && !this.pw_reset.code) {
            this.presentToast("Please fill out required fields.");
            return;
        }
        this.showSpinner();
        this.wplogin.resetPassword(this.pw_reset).then(function (data) {
            console.log(data);
            // sent reset code, show the code field
            if (data.got_code) {
                _this.show_reset_code = true;
                _this.storage.set('login_screen', 'show_reset_code');
            }
            // password has been changed, need user to login
            if (data.pw_changed) {
                if (_this.pw_reset.email)
                    _this.login.user = _this.pw_reset.email;
                setTimeout(function () {
                    _this.show_pw_reset = false;
                    _this.storage.remove('login_screen');
                }, 800);
            }
            _this.presentToast(data.message);
            _this.hideSpinner();
        }).catch(function (e) {
            _this.handleErr(e);
            _this.hideSpinner();
        });
    };
    LoginModal.prototype.doFBLogin = function () {
        var _this = this;
        if (typeof this.Device.platform != 'string' && location.port != '8100') {
            this.translate.get('Please try from a device.').subscribe(function (text) {
                _this.presentToast(text);
            });
            return;
        }
        this.events.subscribe('fb:login', function (data) {
            console.log('captured fb login event', data);
            _this.dismiss();
            if (data.redirect_url)
                _this.events.publish('user:login_redirect', data.redirect_url);
        });
        this.fbconnectApp.login();
    };
    LoginModal.prototype.doLogout = function () {
        var _this = this;
        this.showSpinner();
        this.fbconnectvars.loggout();
        this.loginservice.removeLoginStatus();
        this.wplogin.logout().then(function (response) {
            _this.storage.remove('user_login');
            _this.storage.set('wp_logout', true);
            _this.maybeSetCookie(null, true);
            _this.events.publish('user:logout', response);
            _this.login_data = null;
            _this.hideSpinner();
        }, function (err) {
            _this.storage.remove('user_login');
            _this.storage.set('wp_logout', true);
            _this.maybeSetCookie(null, true);
            _this.events.publish('user:logout');
            _this.login_data = null;
            _this.hideSpinner();
            console.log(err);
            _this.translate.get('You are logged out of the app, but there was a problem on the server.').subscribe(function (text) {
                var msg = text;
                if (err.data && err.data.message)
                    msg += ' ' + err.data.message;
                _this.presentToast(msg);
            });
        }).catch(function (e) {
            console.warn(e);
            _this.hideSpinner();
            _this.translate.get('There was a problem connecting to the server.').subscribe(function (text) {
                _this.presentToast(text);
            });
        });
    };
    LoginModal.prototype.setLoginData = function (data) {
        this.login_data = data;
    };
    LoginModal.prototype.register = function (e) {
        if (this.api_register_setting && this.api_register_setting.url === "") {
            this.show_registration = true;
        }
        else {
            var title = e.target.innerText;
            this.dismiss();
            this.events.publish('pushpage', { url: this.api_register_setting.url, title: title, is_register_page: true });
        }
    };
    LoginModal.prototype.showVerificationField = function () {
        this.show_verification_field = true;
    };
    LoginModal.prototype.doApiRegistration = function () {
        var _this = this;
        console.log(this.user_data);
        if (!this.user_data.email || !this.user_data.username || !this.user_data.password) {
            this.presentToast("Please fill out required fields.");
            return;
        }
        this.showSpinner();
        // if we are submitting a verification code, verify and login. Otherwise, register as unverified user
        if (this.user_data.verification) {
            this.verify(this.user_data);
        }
        else {
            this.wplogin.register(this.user_data).then(function (data) {
                console.log(data);
                _this.show_verification_field = true;
                _this.storage.set('login_screen', 'show_verification_field');
                _this.storage.set('unverified_user', _this.user_data);
                _this.presentToast(data);
                _this.hideSpinner();
            }).catch(function (e) {
                _this.handleErr(e);
                _this.hideSpinner();
            });
        }
    };
    // verify user after registration, login if successful
    LoginModal.prototype.verify = function (user_data) {
        var _this = this;
        this.wplogin.verifyUser(this.user_data).then(function (data) {
            console.log(data);
            if (data.success) {
                _this.presentToast('Success! You have been registered.');
                _this.loginSuccess(data);
                _this.show_verification_field = false;
                _this.show_registration = false;
                _this.storage.remove('unverified_user');
                _this.storage.remove('login_screen');
            }
            else if (data.message) {
                _this.presentToast(data.message);
            }
            _this.hideSpinner();
        }).catch(function (e) {
            _this.handleErr(e);
            _this.hideSpinner();
        });
    };
    LoginModal.prototype.resendCode = function () {
        var _this = this;
        if (!this.user_data || !this.user_data.email || !this.user_data.username) {
            this.presentToast('Please enter your email and username, then try again.');
            return;
        }
        this.showSpinner();
        this.wplogin.resendCode(this.user_data).then(function (data) {
            console.log(data);
            if (data) {
                _this.presentToast('Verification code resent.');
            }
            else {
                _this.presentToast('Verification code was not sent, please check your server email settings.');
            }
            _this.hideSpinner();
        }).catch(function (e) {
            _this.handleErr(e);
            _this.hideSpinner();
        });
    };
    LoginModal.prototype.resetRegistration = function () {
        var _this = this;
        this.storage.remove('unverified_user').then(function (data) {
            _this.show_verification_field = false;
            _this.user_data.verification = null;
        });
        this.storage.remove('login_screen');
    };
    LoginModal.prototype.showLoginForm = function () {
        this.show_registration = false;
        this.show_pw_reset = false;
        this.show_reset_code = false;
    };
    LoginModal.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    LoginModal.prototype.showSpinner = function () {
        this.spinner = this.loadingCtrl.create();
        this.spinner.present();
    };
    LoginModal.prototype.hideSpinner = function () {
        this.spinner.dismiss();
    };
    LoginModal.prototype.presentToast = function (msg) {
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
    LoginModal.prototype.handleErr = function (err) {
        console.error('Error with registration', err);
        var msg = "There was a problem, please try again.";
        if (err['_body'] && JSON.parse(err['_body']).message) {
            msg += ' ' + JSON.parse(err['_body']).message;
        }
        this.presentToast(msg);
    };
    LoginModal.prototype.doIphoneX = function () {
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
    LoginModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login-modal',template:/*ion-inline-start:"/Users/matt/projects/alphaweb/funkflex/ap3/src/pages/login-modal/login-modal.html"*/'<ion-header class="{{customClasses}}">\n\n  <ion-toolbar>\n  \n    <ion-title>{{ title | translate }}</ion-title>\n\n    <ion-buttons end>\n      <button ion-button *ngIf="!force_login && !login_data || login_data || (is_preview && force_login)" (click)="dismiss()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content class="{{customClasses}}">\n\n	<form (ngSubmit)="doLogin()" padding *ngIf="!login_data && !show_registration && !show_pw_reset" class="fade-in">\n\n      <ion-item>\n        <ion-label stacked>{{ \'Username\' | translate }}</ion-label>\n        <ion-input type="text" [(ngModel)]="login.user" name="user" autocomplete="on" autocorrect="off" autocapitalize="off" spellcheck="false"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>{{ \'Password\' | translate }}</ion-label>\n        <ion-input type="password" [(ngModel)]="login.pass" name="pass" autocorrect="off" autocapitalize="off" spellcheck="false"></ion-input>\n      </ion-item>\n      \n      <div padding>\n      <button ion-button type="submit" block>{{ \'Submit\' | translate }}</button>\n      </div>\n\n      <div class="appforgotpassword">\n        <button type="button" (click)="showResetPassword()">\n          <span class="forgot-password-text">{{ \'Forgot password?\' | translate }}</span>\n        </button>\n      </div>\n\n      <div *ngIf="fb_login">\n\n          <div class="login-div-wrap">\n            <div><div class="login-div"></div><div class="login-div-text">{{ \'or\' | translate }}</div><div class="login-div"></div></div>\n          </div>\n\n          <div class="appfbconnectlogin">\n            <button type="button" (click)="doFBLogin()">\n              <span class="fb-icon"></span>\n              <span class="fb-login-text">{{ \'Login with Facebook\' | translate }}</span>\n            </button>\n          </div>\n\n      </div>\n\n  </form>\n\n  <div *ngIf="show_registration && !login_data" id="registration-form" class="fade-in">\n\n  <form (ngSubmit)="doApiRegistration()" padding>\n\n    <p [hidden]="show_verification_field">{{ \'Enter your details to register.\' | translate }}</p>\n    \n    <ion-item [hidden]="show_verification_field">\n      <ion-label stacked>{{ \'First name\' | translate }}</ion-label>\n      <ion-input type="text" [(ngModel)]="user_data.first_name" name="first_name" autocomplete="off" autocorrect="on" autocapitalize="on" spellcheck="false"></ion-input>\n    </ion-item>\n    <ion-item [hidden]="show_verification_field">\n      <ion-label stacked>{{ \'Last name\' | translate }}</ion-label>\n      <ion-input type="text" [(ngModel)]="user_data.last_name" name="last_name" autocomplete="on" autocorrect="off" autocapitalize="on" spellcheck="false"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>{{ \'Email\' | translate }}</ion-label>\n      <ion-input type="email" [(ngModel)]="user_data.email" name="email" autocomplete="on" autocorrect="off" autocapitalize="off" spellcheck="false"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>{{ \'Create a username\' | translate }}</ion-label>\n      <ion-input type="text" [(ngModel)]="user_data.username" name="username" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"></ion-input>\n    </ion-item>\n    <ion-item [hidden]="show_verification_field">\n      <ion-label stacked>{{ \'Create a password\' | translate }}</ion-label>\n      <ion-input type="password" [(ngModel)]="user_data.password" name="password" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"></ion-input>\n    </ion-item>\n\n  <div *ngIf="show_verification_field" class="fade-in">\n    \n    <p>{{ \'Check your email for your verification code to complete registration.\' | translate }}</p>\n\n    <ion-item>\n      <ion-label stacked>{{ \'Enter Verification Code\' | translate }}</ion-label>\n      <ion-input type="text" [(ngModel)]="user_data.verification" name="verification" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"></ion-input>\n    </ion-item>\n\n  </div>\n    \n    <div padding>\n    <button ion-button type="submit" block>{{ \'Submit\' | translate }}</button>\n    </div>\n\n  </form>\n\n  <p text-center *ngIf="!show_verification_field" (tap)="showVerificationField()" class="gray-text">{{ \'I have a verification code\' | translate }}</p>\n\n  <p text-center *ngIf="show_verification_field" (tap)="resendCode()" class="gray-text">{{ \'Re-send verification code\' | translate }}</p>\n\n  </div>\n\n  <div *ngIf="show_pw_reset && !login_data && !show_registration" class="fade-in">\n\n      <form (ngSubmit)="doResetPassword()" padding>\n    \n        <p [hidden]="show_reset_code">{{ \'Enter your email to retrieve your reset code.\' | translate }}</p>\n\n        <p [hidden]="!show_reset_code">{{ \'Check your email for your verification code, then enter it here along with your new password.\' | translate }}</p>\n\n        <ion-item [hidden]="show_reset_code">\n          <ion-label stacked>{{ \'Email\' | translate }}</ion-label>\n          <ion-input type="email" [(ngModel)]="pw_reset.email" name="email" autocomplete="on" autocorrect="off" autocapitalize="off" spellcheck="false"></ion-input>\n        </ion-item>\n        <ion-item [hidden]="!show_reset_code">\n          <ion-label stacked>{{ \'Verification code\' | translate }}</ion-label>\n          <ion-input type="text" [(ngModel)]="pw_reset.code" name="code" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"></ion-input>\n        </ion-item>\n        <ion-item [hidden]="!show_reset_code">\n          <ion-label stacked>{{ \'Enter a new password\' | translate }}</ion-label>\n          <ion-input type="text" [(ngModel)]="pw_reset.password" name="password" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"></ion-input>\n        </ion-item>\n        \n        <div padding>\n        <button ion-button type="submit" block>{{ \'Submit\' | translate }}</button>\n        </div>\n    \n      </form>\n    \n  </div>\n\n	<div padding *ngIf="login_data">\n		<p>{{login_data.message}}</p>\n    	<button ion-button block (click)="doLogout()">{{ \'Click here to logout\' | translate }}</button>\n  </div>\n\n  <ion-grid class="modal-footer" *ngIf="!login_data">\n    <ion-row>\n\n      <ion-col *ngIf="api_register_setting && !show_registration">\n\n        <button type="button" ion-button color="light" class="register-link" full (click)="register( $event )">{{ \'Sign Up\' | translate }}</button>\n\n      </ion-col>\n\n      <ion-col *ngIf="api_register_setting && show_registration || show_pw_reset">\n\n        <button type="button" ion-button color="light" class="register-link" full (click)="showLoginForm()">{{ \'Log In\' | translate }}</button>\n\n      </ion-col>\n\n      <ion-col *ngIf="api_register_setting && show_registration && show_verification_field">\n\n        <button type="button" ion-button color="light" class="register-link" full (click)="resetRegistration()">{{ \'Start Over\' | translate }}</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <iframe [src]="iframeUrl" id="loginIframe"></iframe>\n\n</ion-content>'/*ion-inline-end:"/Users/matt/projects/alphaweb/funkflex/ap3/src/pages/login-modal/login-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_wplogin_wplogin__["a" /* WPlogin */],
            __WEBPACK_IMPORTED_MODULE_4__providers_logins_logins__["a" /* Logins */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["d" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_5__providers_facebook_login_app__["a" /* FbConnectApp */],
            __WEBPACK_IMPORTED_MODULE_6__providers_facebook_fbconnect_settings__["a" /* FBConnectAppSettings */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_10__providers_logins_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_11__providers_buddypress_bp_provider__["a" /* BpProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], LoginModal);
    return LoginModal;
}());

//# sourceMappingURL=login-modal.js.map

/***/ })

});
//# sourceMappingURL=12.js.map