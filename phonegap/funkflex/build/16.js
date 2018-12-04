webpackJsonp([16],{

/***/ 603:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BpModalModule", function() { return BpModalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bp_modal__ = __webpack_require__(656);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BpModalModule = /** @class */ (function () {
    function BpModalModule() {
    }
    BpModalModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__bp_modal__["a" /* BpModal */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__bp_modal__["a" /* BpModal */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__bp_modal__["a" /* BpModal */]
            ]
        })
    ], BpModalModule);
    return BpModalModule;
}());

//# sourceMappingURL=bp-modal.module.js.map

/***/ }),

/***/ 656:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BpModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_buddypress_bp_provider__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_action_sheet__ = __webpack_require__(127);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BpModal = /** @class */ (function () {
    function BpModal(navParams, viewCtrl, loadingCtrl, events, storage, translate, toastCtrl, Device, bpProvider, actionSheet, modalCtrl, platform) {
        var _this = this;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.storage = storage;
        this.translate = translate;
        this.toastCtrl = toastCtrl;
        this.Device = Device;
        this.bpProvider = bpProvider;
        this.actionSheet = actionSheet;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.is_preview = false;
        this.title = '';
        this.activity = {};
        this.isReply = false;
        this.isMessage = false;
        this.groupId = null;
        this.i18n = {
            imageSheet: {
                title: 'Choose an image',
                buttonLabels: {
                    takePhoto: 'Take Photo',
                    photoLibrary: 'Photo Library'
                },
                addCancelButtonWithLabel: 'Cancel',
            }
        };
        this.iphoneX = false;
        if (this.navParams.get('title')) {
            this.title = this.navParams.get('title');
        }
        else {
            this.translate.get('Activity').subscribe(function (text) {
                _this.title = text;
            });
        }
        this.setTranslations();
        this.route = this.navParams.get('route');
        if (this.navParams.get('comment') == true) {
            this.isReply = true;
        }
        if (this.navParams.get('message') == true) {
            this.isMessage = true;
        }
        if (this.navParams.get('recipients')) {
            this.recipients = this.navParams.get('recipients');
        }
        if (this.navParams.get('group')) {
            this.groupId = this.navParams.get('group');
        }
        // get login data on first load
        this.storage.get('user_login').then(function (data) {
            if (data && data.user_id) {
                _this.login_data = data;
                if (_this.isMessage && !_this.recipients) {
                    _this.populateRecipients();
                }
            }
            else {
                _this.presentToast('Please logout then log back in.');
            }
        });
        this.is_preview = (location.href.indexOf('myapppresser') > 0);
        this.doIphoneX();
    }
    BpModal.prototype.setTranslations = function () {
        var _this = this;
        this.translate.get(this.i18n.imageSheet.title).subscribe(function (text) {
            _this.i18n.imageSheet.title = text;
            _this.translate.get(_this.i18n.imageSheet.buttonLabels.takePhoto).subscribe(function (text) {
                _this.i18n.imageSheet.buttonLabels.takePhoto = text;
                _this.translate.get(_this.i18n.imageSheet.buttonLabels.takePhoto).subscribe(function (text) {
                    _this.i18n.imageSheet.buttonLabels.takePhoto = text;
                    _this.translate.get(_this.i18n.imageSheet.addCancelButtonWithLabel).subscribe(function (text) {
                        _this.i18n.imageSheet.addCancelButtonWithLabel = text;
                    });
                });
            });
        });
    };
    BpModal.prototype.populateRecipients = function () {
        var _this = this;
        var item = window.localStorage.getItem('myappp');
        var wp_url = JSON.parse(item).wordpress_url;
        var rest_base = 'wp-json/ap-bp/v1/members';
        var route = wp_url + rest_base;
        this.bpProvider.getItems(route + '?scope=friends&user=' + this.login_data.user_id, this.login_data, 1).then(function (items) {
            console.log(items);
            _this.recipientArr = items;
        }).catch(function (e) {
            console.warn(e);
        });
    };
    BpModal.prototype.recipientSelected = function () {
        console.log(this.recipients);
    };
    BpModal.prototype.submitForm = function () {
        var _this = this;
        if (!this.activity && !this.uploadedImage) {
            this.presentToast("Please enter some content.");
            return;
        }
        this.showSpinner();
        if (this.uploadedImage) {
            this.bpProvider.postWithImage(this.login_data, this.activity, this.uploadedImage, this.groupId)
                .then(function (ret) {
                console.log(ret);
                _this.presentToast('Update posted!');
                _this.events.publish('bp-add-activity', ret);
                setTimeout(function () {
                    _this.dismiss();
                }, 500);
                _this.hideSpinner();
            }).catch(function (e) {
                console.warn(e);
                _this.presentToast('There was a problem, please try again.');
                _this.hideSpinner();
            });
        }
        else if (this.isMessage) {
            if (!this.activity.content) {
                this.presentToast('Please enter some content.');
                return;
            }
            var threadId = (this.navParams.data.threadId ? this.navParams.data.threadId : null);
            this.bpProvider.sendMessage(this.recipients, this.login_data, this.activity.subject, this.activity.content, threadId).then(function (ret) {
                console.log(ret);
                if (ret) {
                    _this.presentToast("Message sent.");
                    _this.events.publish('bp-add-message', { subject: _this.activity.subject, content: _this.activity.content, threadId: ret });
                }
                _this.dismiss(ret);
                _this.hideSpinner();
            }).catch(function (e) {
                console.warn(e);
                _this.presentToast('There was a problem, please try again.');
                _this.hideSpinner();
            });
        }
        else {
            if (this.isReply) {
                this.activity.parent = this.navParams.get('parent');
                if (!this.activity.content) {
                    this.presentToast('Please enter some content.');
                    return;
                }
            }
            this.bpProvider.postTextOnly(this.login_data, this.activity, this.groupId)
                .then(function (ret) {
                console.log(ret);
                if (_this.isReply) {
                    _this.presentToast('Comment posted!');
                    _this.events.publish('bp-add-comment', ret);
                }
                else {
                    _this.presentToast('Update posted!');
                    _this.events.publish('bp-add-activity', ret);
                }
                setTimeout(function () {
                    _this.dismiss();
                }, 100);
                _this.hideSpinner();
            }).catch(function (e) {
                console.warn(e);
                _this.presentToast('There was a problem, please try again.');
                _this.hideSpinner();
            });
        }
    };
    BpModal.prototype.imageSheet = function () {
        var _this = this;
        var options = {
            title: this.i18n.imageSheet.title,
            buttonLabels: [
                this.i18n.imageSheet.buttonLabels.takePhoto,
                this.i18n.imageSheet.buttonLabels.photoLibrary
            ],
            addCancelButtonWithLabel: this.i18n.imageSheet.addCancelButtonWithLabel,
            destructiveButtonLast: true
        };
        this.actionSheet.show(options).then(function (buttonIndex) {
            if (buttonIndex === 1) {
                _this.bpProvider.doCamera('camera').then(function (image) {
                    _this.uploadedImage = image;
                });
            }
            else if (buttonIndex === 2) {
                _this.bpProvider.doCamera('library').then(function (image) {
                    console.log(image);
                    _this.uploadedImage = image;
                });
            }
        });
    };
    BpModal.prototype.dismiss = function (data) {
        if (data === void 0) { data = null; }
        this.viewCtrl.dismiss(data);
    };
    BpModal.prototype.showSpinner = function () {
        this.spinner = this.loadingCtrl.create({
            showBackdrop: false
        });
        this.spinner.present(this.spinner);
    };
    BpModal.prototype.hideSpinner = function () {
        this.spinner.dismiss();
    };
    BpModal.prototype.loginModal = function () {
        var login_modal = this.modalCtrl.create('LoginModal');
        login_modal.present();
        this.dismiss();
    };
    BpModal.prototype.presentToast = function (msg) {
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
    BpModal.prototype.doIphoneX = function () {
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
    BpModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'bp-modal',template:/*ion-inline-start:"/Users/matt/projects/alphaweb/appp-funkflex/src/pages/bp-modal/bp-modal.html"*/'<ion-header class="{{customClasses}}">\n\n  <ion-toolbar>\n  \n    <ion-title>{{ title | translate }}</ion-title>\n\n    <ion-buttons end>\n      <button ion-button (click)="dismiss()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content class="{{customClasses}}">\n\n  <form (ngSubmit)="submitForm()" padding *ngIf="login_data">\n\n    <ion-item *ngIf="isMessage && !navParams.data.recipients" class="message-recipients">\n\n      <ion-label *ngIf="!recipientArr?.length">To:</ion-label>\n\n      <ion-select *ngIf="recipientArr?.length" [(ngModel)]="recipients" (ionChange)="recipientSelected()" name="recipients" placeholder="To:">\n\n        <ion-option *ngFor="let recipient of recipientArr" [value]="recipient.id">{{recipient.mention_name}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item *ngIf="isMessage">\n      <ion-input type="text" [(ngModel)]="activity.subject" name="subject" placeholder="Subject"></ion-input>\n    </ion-item>\n    \n    <ion-item>\n\n      <ion-thumbnail item-start *ngIf="uploadedImage">\n        <img class="uploaded-image" [src]="uploadedImage">\n      </ion-thumbnail>\n\n      <ion-textarea class="activity-texarea" placeholder="{{ \'Your message\' | translate }}" autocorrect="on" name="content" [(ngModel)]="activity.content"></ion-textarea>\n    </ion-item>\n\n    \n\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <button ion-button type="submit" block>{{ isReply ? \'Post comment\' : isMessage ? \'Send message\' : \'Post update\' | translate }}</button>\n        </ion-col>\n\n        <ion-col *ngIf="!isReply && !isMessage">\n\n          <ion-item class="fake-button" icon-start color="light" (tap)="imageSheet()">\n            <ion-icon name="camera"></ion-icon>\n            {{ \'Add Image\' | translate }}\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </form>\n\n	<div padding *ngIf="!login_data || !login_data.user_id">\n    	{{ \'Login to post a reply.\' | translate }}\n      <button ion-button (click)="loginModal()">{{ \'Login\' | translate }}</button>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/matt/projects/alphaweb/appp-funkflex/src/pages/bp-modal/bp-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["d" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_5__providers_buddypress_bp_provider__["a" /* BpProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_action_sheet__["a" /* ActionSheet */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
    ], BpModal);
    return BpModal;
}());

//# sourceMappingURL=bp-modal.js.map

/***/ })

});
//# sourceMappingURL=16.js.map