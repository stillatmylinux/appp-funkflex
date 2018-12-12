webpackJsonp([4],{

/***/ 605:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomPageModule", function() { return CustomPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_dynamic_component_index__ = __webpack_require__(658);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_dynamic_component_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_dynamic_component_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__custom_page__ = __webpack_require__(664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_ap_list_ap_list_module__ = __webpack_require__(642);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_ap_slider_ap_slider_module__ = __webpack_require__(643);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var CustomPageModule = /** @class */ (function () {
    function CustomPageModule() {
    }
    CustomPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__custom_page__["a" /* CustomPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__custom_page__["a" /* CustomPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_3_angular2_dynamic_component_index__["DynamicComponentModule"],
                __WEBPACK_IMPORTED_MODULE_5__components_ap_list_ap_list_module__["a" /* ApListComponentModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_ap_slider_ap_slider_module__["a" /* ApSliderComponentModule */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__custom_page__["a" /* CustomPage */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__custom_page__["a" /* CustomPage */]
            ]
        })
    ], CustomPageModule);
    return CustomPageModule;
}());

//# sourceMappingURL=custom-page.module.js.map

/***/ }),

/***/ 640:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(53);
var http_1 = __webpack_require__(16);
var index_1 = __webpack_require__(659);
var Utils_1 = __webpack_require__(662);
var DYNAMIC_SELECTOR = 'DynamicComponent';
var DynamicComponentMetadata = (function () {
    function DynamicComponentMetadata(selector, template) {
        if (selector === void 0) { selector = DYNAMIC_SELECTOR; }
        if (template === void 0) { template = ''; }
        this.selector = selector;
        this.template = template;
    }
    return DynamicComponentMetadata;
}());
exports.DynamicComponentMetadata = DynamicComponentMetadata;
var DynamicComponent = (function () {
    function DynamicComponent(element, viewContainer, compiler, http) {
        this.element = element;
        this.viewContainer = viewContainer;
        this.compiler = compiler;
        this.http = http;
        this.destroyWrapper = false;
    }
    /**
     * @override
     */
    DynamicComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.getComponentTypePromise().then(function (module) {
            _this.compiler.compileModuleAndAllComponentsAsync(module)
                .then(function (moduleWithComponentFactories) {
                if (_this.componentInstance) {
                    _this.componentInstance.destroy();
                }
                _this.componentInstance = _this.viewContainer.createComponent(
                // dynamicComponentClass factory is presented here
                moduleWithComponentFactories.componentFactories.find(function (componentFactory) {
                    return componentFactory.selector === DYNAMIC_SELECTOR
                        || componentFactory.componentType === _this.componentType;
                }));
                _this.applyPropertiesToDynamicComponent(_this.componentInstance.instance);
                // Remove wrapper after render the component
                if (_this.destroyWrapper) {
                    var el = _this.element.nativeElement;
                    if (Utils_1.Utils.isPresent(el.parentNode)) {
                        el.parentNode.removeChild(el);
                    }
                }
            });
        });
    };
    DynamicComponent.prototype.getComponentTypePromise = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (Utils_1.Utils.isPresent(_this.componentTemplate)) {
                resolve(_this.makeComponentModule(_this.componentTemplate));
            }
            else if (Utils_1.Utils.isPresent(_this.componentTemplateUrl)) {
                _this.loadRemoteTemplate(_this.componentTemplateUrl, resolve);
            }
            else {
                resolve(_this.makeComponentModule(null, _this.componentType));
            }
        });
    };
    DynamicComponent.prototype.loadRemoteTemplate = function (url, resolve) {
        var _this = this;
        var requestArgs = { withCredentials: true };
        if (Utils_1.Utils.isPresent(this.componentRemoteTemplateFactory)) {
            requestArgs = this.componentRemoteTemplateFactory.buildRequestOptions();
        }
        this.http.get(url, requestArgs)
            .subscribe(function (response) {
            if (response.status === 301 || response.status === 302) {
                var chainedUrl = response.headers.get('Location');
                console.info('[$DynamicComponent][loadRemoteTemplate] The URL into the chain is:', chainedUrl);
                if (Utils_1.Utils.isPresent(chainedUrl)) {
                    _this.loadRemoteTemplate(chainedUrl, resolve);
                }
                else {
                    console.warn('[$DynamicComponent][loadRemoteTemplate] The URL into the chain is empty. The process of redirect has stopped.');
                }
            }
            else {
                resolve(_this.makeComponentModule(Utils_1.Utils.isPresent(_this.componentRemoteTemplateFactory)
                    ? _this.componentRemoteTemplateFactory.parseResponse(response)
                    : response.text()));
            }
        }, function (response) {
            console.error('[$DynamicComponent][loadRemoteTemplate] Error response:', response);
            resolve(_this.makeComponentModule(''));
        });
    };
    DynamicComponent.prototype.makeComponentModule = function (template, componentType) {
        componentType = this.makeComponent(template, componentType);
        var componentModules = this.componentModules;
        var dynamicComponentModule = (function () {
            function dynamicComponentModule() {
            }
            dynamicComponentModule.decorators = [
                { type: core_1.NgModule, args: [{
                            declarations: [componentType],
                            imports: [common_1.CommonModule].concat(componentModules || [])
                        },] },
            ];
            /** @nocollapse */
            dynamicComponentModule.ctorParameters = [];
            return dynamicComponentModule;
        }());
        return dynamicComponentModule;
    };
    DynamicComponent.prototype.makeComponent = function (template, componentType) {
        var annotationsArray, componentDecorator;
        if (Utils_1.Utils.isPresent(componentType)) {
            annotationsArray = index_1.MetadataHelper.findAnnotationsMetaData(componentType, core_1.Component);
            if (annotationsArray.length) {
                componentDecorator = annotationsArray[0];
                Reflect.set(componentDecorator, 'selector', DYNAMIC_SELECTOR);
            }
        }
        var dynamicComponentClass = (function () {
            function dynamicComponentClass() {
            }
            dynamicComponentClass.decorators = [
                { type: core_1.Component, args: [componentDecorator || { selector: DYNAMIC_SELECTOR, template: template },] },
            ];
            /** @nocollapse */
            dynamicComponentClass.ctorParameters = [];
            return dynamicComponentClass;
        }());
        return dynamicComponentClass;
    };
    DynamicComponent.prototype.applyPropertiesToDynamicComponent = function (instance) {
        var _this = this;
        var metadataHolder = index_1.MetadataHelper.findPropertyMetadata(this, core_1.Input);
        for (var _i = 0, _a = Object.keys(this); _i < _a.length; _i++) {
            var property = _a[_i];
            if (Reflect.has(metadataHolder, property)) {
                if (Reflect.has(instance, property)) {
                    console.warn('[$DynamicComponent][applyPropertiesToDynamicComponent] The property', property, 'will be overwritten for the component', instance);
                }
                Reflect.set(instance, property, Reflect.get(this, property));
            }
        }
        if (Utils_1.Utils.isPresent(this.componentInputData)) {
            var _loop_1 = function(property) {
                if (Reflect.has(instance, property)) {
                    console.warn('[$DynamicComponent][applyPropertiesToDynamicComponent] The property', property, 'will be overwritten for the component', instance);
                }
                var propValue = Reflect.get(this_1.componentInputData, property);
                var attributes = {};
                if (!Utils_1.Utils.isFunction(propValue)) {
                    attributes.set = function (v) { return Reflect.set(_this.componentInputData, property, v); };
                }
                attributes.get = function () { return Reflect.get(_this.componentInputData, property); };
                Reflect.defineProperty(instance, property, attributes);
            };
            var this_1 = this;
            for (var property in this.componentInputData) {
                _loop_1(property);
            }
        }
    };
    DynamicComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: DYNAMIC_SELECTOR,
                    template: ''
                },] },
    ];
    /** @nocollapse */
    DynamicComponent.ctorParameters = [
        { type: core_1.ElementRef, },
        { type: core_1.ViewContainerRef, },
        { type: core_1.Compiler, },
        { type: http_1.Http, },
    ];
    DynamicComponent.propDecorators = {
        'componentType': [{ type: core_1.Input },],
        'componentTemplate': [{ type: core_1.Input },],
        'componentInputData': [{ type: core_1.Input },],
        'componentTemplateUrl': [{ type: core_1.Input },],
        'componentRemoteTemplateFactory': [{ type: core_1.Input },],
        'componentModules': [{ type: core_1.Input },],
    };
    return DynamicComponent;
}());
exports.DynamicComponent = DynamicComponent;
//# sourceMappingURL=DynamicComponent.js.map

/***/ }),

/***/ 641:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.PROP_METADATA = 'propMetadata';
exports.ANNOTATIONS_METADATA = 'annotations';
function PropertyAnnotationFactory(annotationMetadata) {
    var Decorator = function (config) {
        return function (target, propertyKey) {
            var meta = Reflect.getOwnMetadata(exports.PROP_METADATA, target.constructor) || {};
            meta[propertyKey] = meta[propertyKey] || [];
            meta[propertyKey].push(Reflect.construct(annotationMetadata, [config]));
            Reflect.defineMetadata(exports.PROP_METADATA, meta, target.constructor);
        };
    };
    var Annotation = Decorator;
    Annotation.annotationMetadata = annotationMetadata;
    return Annotation;
}
exports.PropertyAnnotationFactory = PropertyAnnotationFactory;
//# sourceMappingURL=MetadataFactory.js.map

/***/ }),

/***/ 642:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApListComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ap_list__ = __webpack_require__(665);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ApListComponentModule = /** @class */ (function () {
    function ApListComponentModule() {
    }
    ApListComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__ap_list__["a" /* ApListComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__ap_list__["a" /* ApListComponent */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__ap_list__["a" /* ApListComponent */]
            ]
        })
    ], ApListComponentModule);
    return ApListComponentModule;
}());

//# sourceMappingURL=ap-list.module.js.map

/***/ }),

/***/ 643:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApSliderComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ap_slider__ = __webpack_require__(666);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ApSliderComponentModule = /** @class */ (function () {
    function ApSliderComponentModule() {
    }
    ApSliderComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__ap_slider__["a" /* ApSliderComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__ap_slider__["a" /* ApSliderComponent */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__ap_slider__["a" /* ApSliderComponent */]
            ]
        })
    ], ApSliderComponentModule);
    return ApSliderComponentModule;
}());

//# sourceMappingURL=ap-slider.module.js.map

/***/ }),

/***/ 658:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DynamicComponent_1 = __webpack_require__(640);
exports.DynamicComponent = DynamicComponent_1.DynamicComponent;
exports.DynamicComponentMetadata = DynamicComponent_1.DynamicComponentMetadata;
var DynamicComponentModule_1 = __webpack_require__(663);
exports.DynamicComponentModule = DynamicComponentModule_1.DynamicComponentModule;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 659:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var MetadataHelper_1 = __webpack_require__(660);
exports.MetadataHelper = MetadataHelper_1.MetadataHelper;
var MetadataFactory_1 = __webpack_require__(641);
exports.PropertyAnnotationFactory = MetadataFactory_1.PropertyAnnotationFactory;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 660:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Utils_1 = __webpack_require__(661);
var MetadataFactory_1 = __webpack_require__(641);
var MetadataHelper = (function () {
    function MetadataHelper() {
    }
    MetadataHelper.findAnnotationsMetaData = function (target, annotation) {
        return MetadataHelper.findMetadata(target, annotation, MetadataFactory_1.ANNOTATIONS_METADATA);
    };
    MetadataHelper.findPropertyMetadata = function (target, annotation) {
        return MetadataHelper.findMetadata(target, annotation, MetadataFactory_1.PROP_METADATA);
    };
    MetadataHelper.findMetadata = function (target, annotation, metadataName) {
        var annotationsSearch = target.constructor === Function;
        var metadataDefinition = Reflect.getMetadata(metadataName, annotationsSearch ? target : target.constructor);
        if (annotationsSearch) {
            return (metadataDefinition || []);
        }
        else {
            var annotationMetadataInstance_1;
            var annotationMetadataHolder_1 = {};
            if (Utils_1.Utils.isPresent(metadataDefinition)) {
                Reflect.ownKeys(metadataDefinition).forEach(function (propertyKey) {
                    var predicate = function (annotationInstance) {
                        var annotationMetadata = annotation.annotationMetadata;
                        return annotationInstance instanceof annotation // Angular2 annotations support
                            || (Utils_1.Utils.isPresent(annotationMetadata) && annotationInstance instanceof annotationMetadata);
                    };
                    if (annotationMetadataInstance_1 = metadataDefinition[propertyKey].find(predicate)) {
                        Reflect.set(annotationMetadataHolder_1, propertyKey, annotationMetadataInstance_1);
                    }
                });
            }
            return annotationMetadataHolder_1;
        }
    };
    return MetadataHelper;
}());
exports.MetadataHelper = MetadataHelper;
//# sourceMappingURL=MetadataHelper.js.map

/***/ }),

/***/ 661:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Utils = (function () {
    function Utils() {
    }
    Utils.isPresent = function (obj) {
        return obj !== undefined && obj !== null;
    };
    Utils.isUndefined = function (obj) {
        return obj === undefined;
    };
    Utils.isString = function (obj) {
        return typeof obj === 'string';
    };
    Utils.isFunction = function (obj) {
        return typeof obj === 'function';
    };
    Utils.isArray = function (obj) {
        return Array.isArray(obj);
    };
    return Utils;
}());
exports.Utils = Utils;
//# sourceMappingURL=Utils.js.map

/***/ }),

/***/ 662:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Utils = (function () {
    function Utils() {
    }
    Utils.isPresent = function (obj) {
        return obj !== undefined && obj !== null;
    };
    Utils.isUndefined = function (obj) {
        return obj === undefined;
    };
    Utils.isString = function (obj) {
        return typeof obj === 'string';
    };
    Utils.isFunction = function (obj) {
        return typeof obj === 'function';
    };
    Utils.isArray = function (obj) {
        return Array.isArray(obj);
    };
    return Utils;
}());
exports.Utils = Utils;
//# sourceMappingURL=Utils.js.map

/***/ }),

/***/ 663:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var DynamicComponent_1 = __webpack_require__(640);
var DynamicComponentModule = (function () {
    function DynamicComponentModule() {
    }
    DynamicComponentModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DynamicComponent_1.DynamicComponent
                    ],
                    exports: [
                        DynamicComponent_1.DynamicComponent
                    ]
                },] },
    ];
    /** @nocollapse */
    DynamicComponentModule.ctorParameters = [];
    return DynamicComponentModule;
}());
exports.DynamicComponentModule = DynamicComponentModule;
//# sourceMappingURL=DynamicComponentModule.js.map

/***/ }),

/***/ 664:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_header_logo_header_logo__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_posts_posts__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_globalvars_globalvars__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_menus_menu_service__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_inapppurchase_inapppurchase__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_analytics_analytics_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__iframe_iframe__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_logins_login_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_ap_list_ap_list_module__ = __webpack_require__(642);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_ap_slider_ap_slider_module__ = __webpack_require__(643);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_network_network_status_service__ = __webpack_require__(364);
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
 * Uses dynamic component creation, see https://github.com/apoterenko/angular2-dynamic-component
 */
var DynamicContext = /** @class */ (function () {
    function DynamicContext() {
    }
    DynamicContext.prototype.onChange = function () {
        //console.log(this.value)
    };
    return DynamicContext;
}());
/** Development mode only -- END */
/**
 * Customizable options for our
 * segments, media, language and login modals
 */
var ModalOptions = /** @class */ (function () {
    function ModalOptions() {
    }
    return ModalOptions;
}());
var CustomPage = /** @class */ (function () {
    function CustomPage(navParams, nav, modalCtrl, renderer, elementRef, viewCtrl, platform, translate, storage, events, toastCtrl, headerLogoService, loginservice, iap, loadingCtrl, postCtrl, globalvars, menuservice, networkstatus, zone, analyticsservice, network) {
        var _this = this;
        this.navParams = navParams;
        this.nav = nav;
        this.modalCtrl = modalCtrl;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.viewCtrl = viewCtrl;
        this.platform = platform;
        this.translate = translate;
        this.storage = storage;
        this.events = events;
        this.toastCtrl = toastCtrl;
        this.headerLogoService = headerLogoService;
        this.loginservice = loginservice;
        this.iap = iap;
        this.loadingCtrl = loadingCtrl;
        this.postCtrl = postCtrl;
        this.globalvars = globalvars;
        this.menuservice = menuservice;
        this.networkstatus = networkstatus;
        this.zone = zone;
        this.analyticsservice = analyticsservice;
        this.network = network;
        this.subscriptions = [];
        this.rtlBack = false;
        this.isRTL = false;
        this.extraModules = [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicModule */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateModule */], __WEBPACK_IMPORTED_MODULE_13__components_ap_list_ap_list_module__["a" /* ApListComponentModule */], __WEBPACK_IMPORTED_MODULE_14__components_ap_slider_ap_slider_module__["a" /* ApSliderComponentModule */]];
        this.show_segments = false;
        this.login_modal_open = false;
        this.show_header_logo = false;
        this.page = 1;
        this.use_dynamic = false;
        /** Development mode only -- START */
        this.inputData = {
            // anything that the template needs access to goes here
            user: this.loginservice.user,
            pages: this.getPages(),
            segments: this.getSegments(),
            platform: this.platform,
            customClasses: this.customClasses,
            customHeaderClasses: this.customHeaderClasses,
            isOffline: this.isOffline,
            isOnline: this.isOnline,
            pushPage: function (page) {
                _this.pushPage(page);
            },
            openPage: function (page) {
                _this.openPage(page);
            },
            back: function () {
                _this.back();
            },
            mediaModal: function (src, img, options) {
                if (img === void 0) { img = null; }
                _this.mediaModal(src, img, options);
            },
            updateData: function () {
                _this.updateData();
            },
            changeRTL: function (event, rtl) {
                _this.changeRTL(event, rtl);
            },
            showSegments: function (options) {
                _this.showSegments(options);
            },
            showLanguages: function (options) {
                _this.showLanguages(options);
            },
            loginModal: function (options) {
                _this.loginModal(options);
            },
            showDownloads: function (options) {
                _this.showDownloads(options);
            },
            buyProduct: function (id) {
                _this.iap.buy(id);
            },
            subscribeNoAds: function (id) {
                _this.iap.subscribeNoAds(id);
            },
            restoreNoAds: function (id) {
                _this.iap.restoreNoAds(id);
            }
        };
    }
    CustomPage.prototype.ngOnInit = function () {
        var _this = this;
        this.use_dynamic = this.globalvars.getUseDynamicPageModule();
        // Initial user settings
        this.user = this.loginservice.user;
        this.inputData.user = this.loginservice.user;
        // Updates to user settings
        this.subscriptions.push(this.loginservice.loginStatus().subscribe(function (user) {
            _this.user = user;
            /** Development mode only -- START */
            _this.inputData.user = user;
            /** Development mode only -- END */
        }));
        this.initNetworkStatus();
        this.pagetitle = this.navParams.data.title;
        this.initIsRTL();
        if (this.navParams.data.is_home == true) {
            this.doLogo();
        }
        // kill vids on android
        if (this.platform.is('android')) {
            this.killVideos();
        }
        this.pages = this.getPages(); // not just pages: this is the whole myappp data
        this.menus = {
            side: this.getSideMenu(),
            tabs: this.getTabs()
        };
        this.segments = this.getSegments();
        var slug = this.navParams.data.slug;
        this.slug = slug;
        /** Development mode only -- START */
        // this.templateUrl = 'custom.html'
        this.templateUrl = 'build/' + slug + '.html?' + this.random(1, 999);
        /** Development mode only -- END */
        this.customClasses = 'custom-page page-' + this.slug;
        this.customHeaderClasses = 'header-' + this.slug;
        this.listener();
    };
    CustomPage.prototype.ionViewWillEnter = function () {
        if (this.slug) {
            this.analyticsservice.trackScreenView('CustomPage', this.slug);
        }
        if (this.platform.isRTL && this.viewCtrl.enableBack()) {
            this.viewCtrl.showBackButton(false);
            this.rtlBack = true;
        }
    };
    CustomPage.prototype.listener = function () {
        // Listen for link clicks, open in in app browser
        this.listenFunc = this.renderer.listen(this.elementRef.nativeElement, 'click', function (event) {
            if (event.target.href && event.target.href.indexOf('http') >= 0) {
                event.preventDefault();
                if (event.target.target && event.target.target) {
                    window.open(event.target.href, event.target.target);
                }
                else {
                    window.open(event.target.href, '_blank');
                }
            }
        });
    };
    // changes the back button transition direction if app is RTL
    CustomPage.prototype.backRtlTransition = function () {
        var obj = {};
        if (this.platform.is('ios'))
            obj = { direction: 'forward' };
        this.nav.pop(obj);
    };
    CustomPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 5000,
            position: 'bottom'
        });
        toast.present();
    };
    // stop videos from playing when app is exited, required by Google
    CustomPage.prototype.killVideos = function () {
        var _this = this;
        this.platform.pause.subscribe(function () {
            var frames = _this.elementRef.nativeElement.getElementsByTagName('iframe');
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
    CustomPage.prototype.random = function (min, max) {
        if (min == null && max == null) {
            max = 1;
        }
        min = +min || 0;
        if (max == null) {
            max = min;
            min = 0;
        }
        return min + Math.floor(Math.random() * ((+max || 0) - min + 1));
    };
    CustomPage.prototype.doLogo = function () {
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
    /**
     * Get side menu index by page slug
     */
    CustomPage.prototype.getMenuIndexBySlug = function (slug) {
        return this.menuservice.getIndexBySlug(slug, this.menus.side);
    };
    /**
     * Get tab menu index by page slug
     * @param slug page slug
     */
    CustomPage.prototype.getTabIndexBySlug = function (slug) {
        return this.menuservice.getIndexBySlug(slug, this.menus.tabs);
    };
    /**
     * Search both menus for a page
     *
     * @param page_slug
     */
    CustomPage.prototype.getPage = function (page_slug) {
        var _this = this;
        var menu_index;
        var page;
        menu_index = this.getMenuIndexBySlug(page_slug);
        if (menu_index || menu_index === 0) {
            return this.menus.side[menu_index];
        }
        menu_index = this.getTabIndexBySlug(page_slug);
        if (menu_index || menu_index === 0) {
            return this.menus.tabs[menu_index];
        }
        // otherwise . . .
        this.translate.get('Page not found').subscribe(function (text) {
            _this.presentToast(text);
        });
        return false;
    };
    /**
     * Adds a view on top of root view (w/ backbutton)
     *
     * @param page
     */
    CustomPage.prototype.pushPage = function (page) {
        if (typeof page === 'string') {
            page = this.getPage(page);
            if (page === false)
                return;
        }
        if (page && page.extra_classes && this.yieldLogin(page.extra_classes))
            return;
        if (page && page.extra_classes && (page.extra_classes.indexOf('loginmodal') >= 0 || page.extra_classes.indexOf('logoutmodal') >= 0)) {
            this.loginModal({ title: page.title });
            return;
        }
        if (page.target === '_blank' && page.extra_classes.indexOf('system') >= 0) {
            window.open(page.url, '_system', null);
            return;
        }
        else if (page.target === '_blank') {
            window.open(page.url, page.target, null);
            return;
        }
        var opt = {};
        if (this.platform.isRTL && this.platform.is('ios'))
            opt = { direction: 'back' };
        var root = this.getPageType(page);
        this.nav.push(root, page, opt);
    };
    /**
     * Set a root view
     *
     * @param page
     */
    CustomPage.prototype.openPage = function (page) {
        if (typeof page === 'string') {
            page = this.getPage(page);
            if (page === false)
                return;
        }
        if (page && page.extra_classes && this.yieldLogin(page.extra_classes))
            return;
        if (page && page.extra_classes && (page.extra_classes.indexOf('loginmodal') >= 0 || page.extra_classes.indexOf('logoutmodal') >= 0)) {
            this.loginModal({ title: page.title });
            return;
        }
        if (page.extra_classes && page.extra_classes.indexOf('desktoptheme') >= 0) {
            var url = new URL(page.url);
            url.searchParams.append('appp_bypass', 'true');
            var iab = window.open(url.toString(), '_blank');
            return;
        }
        else if (page.target === '_blank' && page.extra_classes && page.extra_classes.indexOf('system') >= 0) {
            window.open(page.url, '_system', null);
            return;
        }
        else if (page.target === '_blank') {
            window.open(page.url, page.target, null);
            return;
        }
        var root = this.getPageType(page);
        this.nav.setRoot(root, page);
    };
    CustomPage.prototype.back = function () {
        this.nav.pop();
    };
    CustomPage.prototype.mediaModal = function (src, img, opt) {
        if (img === void 0) { img = null; }
        var css = (opt && opt.cssClass) ? opt.cssClass : '';
        var params = { source: src, image: img };
        if (opt && opt.title) {
            params.title = opt.title;
        }
        var modal = this.modalCtrl.create('MediaPlayer', params, {
            cssClass: css
        });
        modal.present();
    };
    CustomPage.prototype.updateData = function () {
        window.localStorage.removeItem('myappp');
        this.storage.remove('segments');
        this.events.publish('data:update', true);
    };
    CustomPage.prototype.changeRTL = function (event, rtl) {
        if (rtl) {
            this.platform.setDir('rtl', true);
            this.isRTL = true;
        }
        else {
            this.platform.setDir('ltr', true);
            this.isRTL = false;
        }
        this.storage.set('is_rtl', rtl);
    };
    CustomPage.prototype.initIsRTL = function () {
        var _this = this;
        this.storage.get('is_rtl').then(function (value) {
            _this.isRTL = (value === 'true');
        });
    };
    CustomPage.prototype.showSegments = function (opt) {
        var css = (opt && opt.cssClass) ? opt.cssClass : '';
        var params = (opt && opt.title) ? { title: opt.title } : {};
        var modal = this.modalCtrl.create('PushSettings', params, {
            cssClass: css
        });
        modal.present();
    };
    CustomPage.prototype.showDownloads = function (opt) {
        var css = (opt && opt.cssClass) ? opt.cssClass : '';
        var params = (opt && opt.title) ? { title: opt.title } : {};
        var modal = this.modalCtrl.create('DownloadList', params, {
            cssClass: css
        });
        modal.present();
    };
    CustomPage.prototype.showLanguages = function (opt) {
        var css = (opt && opt.cssClass) ? opt.cssClass : '';
        var params = (opt && opt.title) ? { title: opt.title } : {};
        var modal = this.modalCtrl.create('LanguageSettings', params, {
            cssClass: css
        });
        modal.present();
    };
    CustomPage.prototype.loginModal = function (opt) {
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
    /**
   * Open the login modal if the menu item's extra_classes contains 'yieldlogin'
   * @param extra_classes
   */
    CustomPage.prototype.yieldLogin = function (extra_classes) {
        if (extra_classes && extra_classes.indexOf('yieldlogin') >= 0) {
            if (this.user) { // logged in
                return false;
            }
            else { // logged out, show login modal
                this.loginModal();
                return true;
            }
        }
        return false;
    };
    CustomPage.prototype.getPages = function () {
        if (!this.pages) {
            var data = JSON.parse(window.localStorage.getItem('myappp'));
            this.pages = data;
            var menu = [];
            // remove dividers
            if (data && data.menus && data.menus.items) {
                for (var _i = 0, _a = data.menus.items; _i < _a.length; _i++) {
                    var page = _a[_i];
                    if (page.extra_classes && page.extra_classes.indexOf('divider') >= 0) {
                        // skip
                        // console.log('skip', page)
                    }
                    else {
                        menu.push(page);
                    }
                }
                this.pages.menus.items = menu.slice();
            }
        }
        return this.pages;
    };
    CustomPage.prototype.getSegments = function () {
        if (!this.segments)
            this.segments = JSON.parse(window.localStorage.getItem('segments'));
        return this.segments;
    };
    CustomPage.prototype.getSideMenu = function () {
        var myappp = JSON.parse(window.localStorage.getItem('myappp'));
        if (myappp && myappp.menus && myappp.menus.items)
            return myappp.menus.items;
        else
            return [];
    };
    CustomPage.prototype.getTabs = function () {
        var myappp = JSON.parse(window.localStorage.getItem('myappp'));
        if (myappp && myappp.tab_menu && myappp.tab_menu.items)
            return myappp.tab_menu.items;
        else
            return [];
    };
    CustomPage.prototype.getPageModuleName = function (page_id) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])())
            return 'Page' + page_id;
        else
            return 'CustomPage';
    };
    // duplicate in app.component.ts if any updates are made
    CustomPage.prototype.getPageType = function (page) {
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
            else {
                return 'BpList';
            }
        }
        else if (page.type === 'apppages') {
            return this.getPageModuleName(page.page_id);
        }
        else if (page.url && page.type === 'custom' && !page.root) {
            return __WEBPACK_IMPORTED_MODULE_11__iframe_iframe__["a" /* Iframe */];
        }
        else {
            return null;
        }
    };
    CustomPage.prototype.buyProduct = function (id) {
        this.iap.buy(id);
    };
    CustomPage.prototype.subscribeNoAds = function (id) {
        var _this = this;
        this.showSpinner();
        this.iap.subscribeNoAds(id);
        // TODO: convert this to promise, get rid of timeout
        setTimeout(function () {
            _this.hideSpinner();
        }, 3000);
    };
    CustomPage.prototype.restoreNoAds = function (id) {
        var _this = this;
        this.showSpinner();
        this.iap.restoreNoAds(id).then(function (res) {
            console.log(res);
            _this.hideSpinner();
        });
    };
    CustomPage.prototype.showSpinner = function () {
        if (!this.spinner) {
            this.spinner = this.loadingCtrl.create();
            this.spinner.present();
        }
    };
    CustomPage.prototype.hideSpinner = function () {
        var _this = this;
        this.spinner.dismiss().then(function () {
            _this.spinner = null;
        });
    };
    CustomPage.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (subscription) {
            subscription.unsubscribe();
        });
    };
    CustomPage.prototype.initNetworkStatus = function () {
        var _this = this;
        this.isOffline = !this.networkstatus.currentStatus;
        this.isOnline = this.networkstatus.currentStatus;
        /** Development mode only -- START */
        this.inputData.isOffline = !this.networkstatus.currentStatus;
        this.inputData.isOnline = this.networkstatus.currentStatus;
        /** Development mode only -- END */
        this.subscriptions.push(this.networkstatus.networkStatus().subscribe(function (status) {
            // console.log('custom-page network status', status);
            _this.isOffline = !status;
            _this.isOnline = status;
            /** Development mode only -- START */
            _this.zone.run(function () {
                _this.inputData.isOffline = !status;
                _this.inputData.isOnline = status;
            });
            /** Development mode only -- END */
        }));
    };
    CustomPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/matt/projects/alphaweb/appp-funkflex/src/pages/custom-pages/custom-page.html"*/'<ion-header [ngClass]="customHeaderClasses">\n\n	<ion-navbar>\n\n		<ion-buttons start>\n			<button *ngIf="rtlBack" (click)="backRtlTransition()" ion-button class="custom-back-button">\n				<ion-icon name="arrow-back"></ion-icon>\n				{{\'Back\' | translate }}\n			</button>\n			<button ion-button menuToggle>\n				<ion-icon name="menu"></ion-icon>\n			</button>\n\n		</ion-buttons>\n\n		<img class="header-logo" *ngIf="show_header_logo" [src]="header_logo_url" />\n\n		<ion-title *ngIf="!show_header_logo">{{pagetitle | translate}}</ion-title>\n\n	</ion-navbar>\n</ion-header>\n\n<ion-content *ngIf="!use_dynamic" [ngClass]="customClasses">\n\n	Content goes here\n	\n</ion-content>\n<ion-content *ngIf="use_dynamic" [ngClass]="customClasses">\n\n	<DynamicComponent *ngIf="templateUrl"\n    [componentTemplateUrl]="templateUrl" \n    [componentModules]="extraModules"\n		[componentInputData]="inputData"></DynamicComponent>\n\n	<div *ngIf="!templateUrl">Missing templateUrl</div>\n\n</ion-content>'/*ion-inline-end:"/Users/matt/projects/alphaweb/appp-funkflex/src/pages/custom-pages/custom-page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["d" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_header_logo_header_logo__["a" /* HeaderLogo */],
            __WEBPACK_IMPORTED_MODULE_12__providers_logins_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_9__providers_inapppurchase_inapppurchase__["a" /* IAP */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_posts_posts__["a" /* Posts */],
            __WEBPACK_IMPORTED_MODULE_7__providers_globalvars_globalvars__["a" /* GlobalVars */],
            __WEBPACK_IMPORTED_MODULE_8__providers_menus_menu_service__["a" /* MenuService */],
            __WEBPACK_IMPORTED_MODULE_15__providers_network_network_status_service__["a" /* NetworkStatusService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_10__providers_analytics_analytics_service__["a" /* AnalyticsService */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__["a" /* Network */]])
    ], CustomPage);
    return CustomPage;
}());

//# sourceMappingURL=custom-page.js.map

/***/ }),

/***/ 665:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_posts_posts__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_iframe_iframe__ = __webpack_require__(123);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the ApListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ApListComponent = /** @class */ (function () {
    function ApListComponent(nav, navParams, postService, loadingController, storage, toastCtrl, viewCtrl, platform, network, translate, events) {
        this.nav = nav;
        this.navParams = navParams;
        this.postService = postService;
        this.loadingController = loadingController;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        this.platform = platform;
        this.network = network;
        this.translate = translate;
        this.events = events;
        this.card = false;
        this.favorites = false;
        this.infiniteScroll = false;
        this.refresh = false;
        this.page = 1;
        this.loading = false;
    }
    ApListComponent.prototype.ngOnInit = function () {
        if (this.route) {
            this.networkState = this.network.type;
            if (this.networkState === 'none' || this.networkState === 'unknown') {
                // if offline, get posts from storage
                this.getStoredPosts();
            }
            else {
                this.loadPosts();
            }
        }
    };
    // get posts from storage when we are offline
    ApListComponent.prototype.getStoredPosts = function () {
        var _this = this;
        this.storage.get(this.route.substr(-10, 10) + '_posts').then(function (posts) {
            if (posts) {
                _this.items = posts;
            }
            else {
                _this.translate.get('No data available, pull to refresh when you are online.').subscribe(function (text) {
                    _this.presentToast(text);
                });
            }
        });
    };
    ApListComponent.prototype.loadPosts = function () {
        var _this = this;
        this.loading = true;
        this.page = 1;
        // any menu imported from WP has to use same component. Other pages can be added manually with different components
        this.postService.load(this.route, this.page).then(function (items) {
            // Loads posts from WordPress API
            _this.items = items;
            _this.storage.set(_this.route.substr(-10, 10) + '_posts', items);
            // load more right away
            if (_this.infiniteScroll)
                _this.loadMore(null);
            _this.loading = false;
        }).catch(function (err) {
            _this.loading = false;
            console.error('Error getting posts', err);
            _this.translate.get('Error getting posts.').subscribe(function (text) {
                _this.presentToast(text);
            });
        });
    };
    ApListComponent.prototype.loadDetail = function (item) {
        // this is for learndash
        if (this.wp === "true") {
            var newitem = { url: item.link, title: item.title.rendered };
            var data = JSON.parse(window.localStorage.getItem('myappp'));
            if (data.tab_menu && data.tab_menu.items) {
                // push from main component so we don't have nested views
                this.events.publish('pushpage', newitem);
            }
            else {
                this.nav.push(__WEBPACK_IMPORTED_MODULE_6__pages_iframe_iframe__["a" /* Iframe */], newitem);
            }
            return;
        }
        var opt = {};
        if (this.platform.isRTL && this.platform.is('ios'))
            opt = { direction: 'back' };
        this.nav.push('PostDetailsPage', {
            item: item
        }, opt);
    };
    ApListComponent.prototype.loadMore = function (infiniteScroll) {
        var _this = this;
        this.page++;
        this.postService.load(this.route, this.page).then(function (items) {
            // Loads posts from WordPress API
            var length = items["length"];
            if (length === 0) {
                if (infiniteScroll)
                    infiniteScroll.complete();
                return;
            }
            for (var i = 0; i < length; ++i) {
                _this.items.push(items[i]);
            }
            _this.storage.set(_this.route.substr(-10, 10) + '_posts', _this.items);
            if (infiniteScroll)
                infiniteScroll.complete();
        }).catch(function (e) {
            // promise was rejected, usually a 404 or error response from API
            if (infiniteScroll)
                infiniteScroll.complete();
            console.warn(e);
        });
    };
    ApListComponent.prototype.doRefresh = function () {
        this.loadPosts();
    };
    ApListComponent.prototype.addFav = function (slidingItem, item) {
        var _this = this;
        var inArray = false;
        for (var i = this.favoriteItems.length - 1; i >= 0; i--) {
            if (this.favoriteItems[i].id === item.id) {
                inArray = true;
                break;
            }
        }
        // Don't add duplicate favs
        if (inArray === false) {
            this.favoriteItems.push(item);
            this.storage.set(this.route.substr(-10, 10) + '_favorites', this.favoriteItems);
            this.translate.get('Favorite added').subscribe(function (text) {
                _this.presentToast(text);
            });
        }
        else {
            for (var i = this.favoriteItems.length - 1; i >= 0; i--) {
                if (this.favoriteItems[i].id === item.id) {
                    this.favoriteItems.splice(i, 1);
                    break;
                }
            }
            this.storage.set(this.route.substr(-10, 10) + '_favorites', this.favoriteItems);
            // refresh the list
            if (this.favoriteItems.length) {
                this.items = this.favoriteItems;
            }
            else {
                this.showAll();
            }
            this.translate.get('Favorite Removed').subscribe(function (text) {
                _this.presentToast(text);
            });
        }
        slidingItem.close();
    };
    ApListComponent.prototype.showFavorites = function () {
        var _this = this;
        this.storage.get(this.route.substr(-10, 10) + '_favorites').then(function (favorites) {
            if (favorites && favorites.length) {
                _this.favorites = favorites;
                _this.items = favorites;
            }
            else {
                _this.translate.get('No Favorites to show').subscribe(function (text) {
                    _this.presentToast(text);
                });
            }
        });
    };
    ApListComponent.prototype.showAll = function () {
        var _this = this;
        this.storage.get(this.route.substr(-10, 10) + '_posts').then(function (items) {
            _this.items = items;
        });
    };
    ApListComponent.prototype.truncateString = function (string) {
        return string.substring(0, 100);
    };
    ApListComponent.prototype.getBgImage = function (item) {
        if (item.featured_image_urls.large) {
            return item.featured_image_urls.large;
        }
        else if (item.featured_image_urls.medium) {
            return item.featured_image_urls.medium;
        }
    };
    ApListComponent.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            // console.log('Dismissed toast');
        });
        toast.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ApListComponent.prototype, "route", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ApListComponent.prototype, "card", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ApListComponent.prototype, "favorites", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ApListComponent.prototype, "infiniteScroll", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ApListComponent.prototype, "wp", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ApListComponent.prototype, "refresh", void 0);
    ApListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ap-list',template:/*ion-inline-start:"/Users/matt/projects/alphaweb/appp-funkflex/src/components/ap-list/ap-list.html"*/'<div class="list-loading-spinner" *ngIf="loading"><ion-spinner name="bubbles"></ion-spinner></div>\n\n<div *ngIf="refresh && !loading" class="list-refresher">\n  <ion-icon name="refresh" (tap)="doRefresh()"></ion-icon>\n  <span (tap)="doRefresh()">{{ \'Refresh\' | translate }}</span>\n</div>\n\n<ion-list *ngIf="card">\n\n    <ion-card (click)="loadDetail(item)" *ngFor="let item of items">\n      \n      <div class="card-featured-wrap" *ngIf="item.featured_image_urls">\n        <div class="card-featured-image" [ngStyle]="{\'background-image\': \'url(\'+ getBgImage( item ) +\')\'}"></div>\n      </div>\n\n      <div *ngIf="item.appp && item.appp.post_list && item.appp.post_list.above_title" [innerHTML]="item.appp.post_list.above_title"></div>\n\n      <ion-card-content>\n\n        <ion-card-title *ngIf="item.title && item.title.rendered">\n          <h2 [innerHTML]="item.title.rendered"></h2>\n        </ion-card-title>\n\n        <div *ngIf="item.appp && item.appp.post_list && item.appp.post_list.below_title" [innerHTML]="item.appp.post_list.below_title"></div>\n\n        <p *ngIf="item.excerpt && item.excerpt.rendered" [innerHTML]="truncateString( item.excerpt.rendered )"></p>\n\n        <div class="item-content" *ngIf="!item.excerpt && item.content.rendered" [innerHTML]="truncateString( item.content.rendered )"></div>\n\n      </ion-card-content>\n\n      <div *ngIf="item.appp && item.appp.post_list && item.appp.post_list.below_content" [innerHTML]="item.appp.post_list.below_content"></div>\n\n    </ion-card>\n\n</ion-list>\n\n<ion-list *ngIf="!card">\n\n	<ion-item-sliding *ngFor="let item of items" #slidingItem>\n      <button ion-item (click)="loadDetail(item)">\n\n      <ion-avatar item-left *ngIf="item.featured_image_urls">\n        <img *ngIf="item.featured_image_urls && item.featured_image_urls.thumbnail" src="{{item.featured_image_urls.thumbnail}}">\n        <img *ngIf="!item.featured_image_urls || !item.featured_image_urls.thumbnail" src="assets/default.png">\n      </ion-avatar>\n\n      <div *ngIf="item.appp && item.appp.post_list && item.appp.post_list.above_title" [innerHTML]="item.appp.post_list.above_title"></div>\n\n      <h2 *ngIf="item.title && item.title.rendered" [innerHTML]="item.title.rendered"></h2>\n\n      <div *ngIf="item.appp && item.appp.post_list && item.appp.post_list.below_title" [innerHTML]="item.appp.post_list.below_title"></div>\n\n      <p *ngIf="item.excerpt && item.excerpt.rendered" [innerHTML]="truncateString( item.excerpt.rendered )"></p>\n\n      <div class="item-content" *ngIf="!item.excerpt && item.content.rendered" [innerHTML]="truncateString( item.content.rendered )"></div>\n\n      <div *ngIf="item.appp && item.appp.post_list && item.appp.post_list.below_content" [innerHTML]="item.appp.post_list.below_content"></div>\n\n      </button>\n\n      <ion-item-options side="right" *ngIf="favorites">\n        <button ion-button color="primary" (click)="addFav(slidingItem, item)">\n          <ion-icon name="star-outline"></ion-icon>\n          {{ \'Favorite\' | translate }}\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n\n</ion-list>\n\n<ion-infinite-scroll *ngIf="infiniteScroll" (ionInfinite)="loadMore($event)">\n<ion-infinite-scroll-content></ion-infinite-scroll-content>\n</ion-infinite-scroll>'/*ion-inline-end:"/Users/matt/projects/alphaweb/appp-funkflex/src/components/ap-list/ap-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__providers_posts_posts__["a" /* Posts */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["d" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Events */]])
    ], ApListComponent);
    return ApListComponent;
}());

//# sourceMappingURL=ap-list.js.map

/***/ }),

/***/ 666:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApSliderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_posts_posts__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_iframe_iframe__ = __webpack_require__(123);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * For reference: https://github.com/ionic-team/ionic/blob/master/core/src/components/slides/slides.tsx
 */
var ApSliderComponent = /** @class */ (function () {
    function ApSliderComponent(nav, navParams, postService, storage, platform, toastCtrl, viewCtrl, network, translate, events) {
        this.nav = nav;
        this.navParams = navParams;
        this.postService = postService;
        this.storage = storage;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        this.network = network;
        this.translate = translate;
        this.events = events;
        this.card = false;
    }
    ApSliderComponent.prototype.ngAfterViewInit = function () {
        if (this.route) {
            this.networkState = this.network.type;
            if (this.networkState === 'none' || this.networkState === 'unknown') {
                // if offline, get posts from storage
                this.getStoredPosts();
            }
            else {
                this.loadPosts();
            }
        }
        // set options based on input attributes
        if (this.slidesPerView) {
            this.slides.slidesPerView = this.slidesPerView;
        }
        if (this.loop === "true") {
            this.slides.loop = true;
        }
        if (this.freeMode === "true") {
            this.slides.freeMode = true;
        }
        if (this.effect) {
            this.slides.effect = this.effect;
        }
        if (this.paginationType) {
            this.slides.paginationType = this.paginationType;
        }
        if (this.spaceBetween) {
            this.slides.spaceBetween = this.spaceBetween;
        }
    };
    // get posts from storage when we are offline
    ApSliderComponent.prototype.getStoredPosts = function () {
        var _this = this;
        this.storage.get(this.route.substr(-10, 10) + '_slides').then(function (posts) {
            if (posts) {
                _this.items = posts;
            }
            else {
                _this.translate.get('No data available, pull to refresh when you are online.').subscribe(function (text) {
                    _this.presentToast(text);
                });
            }
        });
    };
    ApSliderComponent.prototype.loadPosts = function () {
        var _this = this;
        // any menu imported from WP has to use same component. Other pages can be added manually with different components
        this.postService.load(this.route, '1').then(function (items) {
            // Loads posts from WordPress API
            _this.items = items;
            _this.storage.set(_this.route.substr(-10, 10) + '_slides', items);
            // this is not working
            if (_this.pager === "false") {
                _this.slides.pager = false;
            }
            else {
                _this.slides.pager = true;
            }
        }).catch(function (err) {
            console.error('Error getting posts', err);
            _this.translate.get('Error getting posts.').subscribe(function (text) {
                _this.presentToast(text);
            });
        });
    };
    ApSliderComponent.prototype.loadDetail = function (item) {
        if (this.preventClicks === "true")
            return;
        // this is for learndash
        if (this.wp === "true") {
            var newitem = { url: item.link, title: item.title.rendered };
            var data = JSON.parse(window.localStorage.getItem('myappp'));
            if (data.tab_menu && data.tab_menu.items) {
                // push from main component so we don't have nested views
                this.events.publish('pushpage', newitem);
            }
            else {
                this.nav.push(__WEBPACK_IMPORTED_MODULE_6__pages_iframe_iframe__["a" /* Iframe */], newitem);
            }
            return;
        }
        var opt = {};
        if (this.platform.isRTL && this.platform.is('ios'))
            opt = { direction: 'back' };
        this.nav.push('PostDetailsPage', {
            item: item
        }, opt);
    };
    ApSliderComponent.prototype.truncateString = function (string) {
        return string.substring(0, 50);
    };
    ApSliderComponent.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            // console.log('Dismissed toast');
        });
        toast.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* Slides */])
    ], ApSliderComponent.prototype, "slides", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ApSliderComponent.prototype, "route", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ApSliderComponent.prototype, "pager", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ApSliderComponent.prototype, "slidesPerView", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ApSliderComponent.prototype, "loop", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ApSliderComponent.prototype, "effect", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ApSliderComponent.prototype, "paginationType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ApSliderComponent.prototype, "preventClicks", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ApSliderComponent.prototype, "freeMode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ApSliderComponent.prototype, "wp", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ApSliderComponent.prototype, "spaceBetween", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ApSliderComponent.prototype, "card", void 0);
    ApSliderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ap-slider',template:/*ion-inline-start:"/Users/matt/projects/alphaweb/appp-funkflex/src/components/ap-slider/ap-slider.html"*/'<ion-slides *ngIf="!card" pager>\n\n	<ion-slide *ngFor="let item of items" [ngStyle]="{\'background-image\': \'url(\' + ( item.featured_image_urls.large ? item.featured_image_urls.large : item.featured_image_urls.medium ) + \')\'}" (click)="loadDetail(item)">\n\n		<h3 class="item-title" *ngIf="item.title && item.title.rendered" [innerHTML]="item.title.rendered"></h3>\n\n		<div *ngIf="item.appp && item.appp.post_list && item.appp.post_list.item_content" [innerHTML]="item.appp.post_list.item_content"></div>\n\n	</ion-slide>\n\n</ion-slides>\n\n<ion-slides *ngIf="card" pager>\n\n	<ion-slide *ngFor="let item of items" (click)="loadDetail(item)">\n\n		<ion-card>\n		  \n		  <div class="card-featured-wrap" *ngIf="item.featured_image_urls">\n		    <img *ngIf="item.featured_image_urls.large" src="{{item.featured_image_urls.large}}">\n		    <img *ngIf="!item.featured_image_urls.large && item.featured_image_urls.medium" src="{{item.featured_image_urls.medium}}">\n		  </div>\n\n		  <div *ngIf="item.appp && item.appp.post_list && item.appp.post_list.above_title" [innerHTML]="item.appp.post_list.above_title"></div>\n\n		  <ion-card-content>\n\n		    <ion-card-title *ngIf="item.title && item.title.rendered">\n		      <h2 [innerHTML]="item.title.rendered"></h2>\n		    </ion-card-title>\n\n		    <div *ngIf="item.appp && item.appp.post_list && item.appp.post_list.below_title" [innerHTML]="item.appp.post_list.below_title"></div>\n\n		    <p *ngIf="item.excerpt && item.excerpt.rendered" [innerHTML]="item.excerpt.rendered"></p>\n\n		    <div class="item-content" *ngIf="!item.excerpt && item.content.rendered" [innerHTML]="truncateString( item.content.rendered )"></div>\n\n		  </ion-card-content>\n\n		</ion-card>\n\n	</ion-slide>\n\n</ion-slides>'/*ion-inline-end:"/Users/matt/projects/alphaweb/appp-funkflex/src/components/ap-slider/ap-slider.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__providers_posts_posts__["a" /* Posts */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["d" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Events */]])
    ], ApSliderComponent);
    return ApSliderComponent;
}());

//# sourceMappingURL=ap-slider.js.map

/***/ })

});
//# sourceMappingURL=4.js.map