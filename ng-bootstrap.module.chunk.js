webpackJsonp(["ng-bootstrap.module"],{

/***/ "../../../../../dist/ngx-tour-ng-bootstrap/ngx-tour-ng-bootstrap.es5.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NgbTourService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TourNgBootstrapModule; });
/* unused harmony export TourAnchorNgBootstrapDirective */
/* unused harmony export TourStepTemplateComponent */
/* unused harmony export ɵa */
/* unused harmony export ɵb */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_first__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/first.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operator_merge__ = __webpack_require__("../../../../rxjs/_esm5/operator/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_withinviewport__ = __webpack_require__("../../../../../dist/ngx-tour-ng-bootstrap/node_modules/withinviewport/withinviewport.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_withinviewport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_withinviewport__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();










var TourState = {};
TourState.OFF = 0;
TourState.ON = 1;
TourState.PAUSED = 2;
TourState[TourState.OFF] = "OFF";
TourState[TourState.ON] = "ON";
TourState[TourState.PAUSED] = "PAUSED";
var TourService = (function () {
    /**
     * @param {?} router
     */
    function TourService(router$$1) {
        this.router = router$$1;
        this.stepShow$ = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__["a" /* Subject */]();
        this.stepHide$ = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__["a" /* Subject */]();
        this.initialize$ = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__["a" /* Subject */]();
        this.start$ = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__["a" /* Subject */]();
        this.end$ = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__["a" /* Subject */]();
        this.pause$ = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__["a" /* Subject */]();
        this.resume$ = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__["a" /* Subject */]();
        this.anchorRegister$ = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__["a" /* Subject */]();
        this.anchorUnregister$ = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__["a" /* Subject */]();
        this.events$ = Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operator_merge__["a" /* mergeStatic */])(__WEBPACK_IMPORTED_MODULE_5_rxjs_operator_map__["a" /* map */].bind(this.stepShow$)(function (value) { return ({ name: 'stepShow', value: value }); }), __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_map__["a" /* map */].bind(this.stepHide$)(function (value) { return ({ name: 'stepHide', value: value }); }), __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_map__["a" /* map */].bind(this.initialize$)(function (value) { return ({ name: 'initialize', value: value }); }), __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_map__["a" /* map */].bind(this.start$)(function (value) { return ({ name: 'start', value: value }); }), __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_map__["a" /* map */].bind(this.end$)(function (value) { return ({ name: 'end', value: value }); }), __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_map__["a" /* map */].bind(this.pause$)(function (value) { return ({ name: 'pause', value: value }); }), __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_map__["a" /* map */].bind(this.resume$)(function (value) { return ({ name: 'resume', value: value }); }), __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_map__["a" /* map */].bind(this.anchorRegister$)(function (value) { return ({ name: 'anchorRegister', value: value }); }), __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_map__["a" /* map */].bind(this.anchorUnregister$)(function (value) { return ({ name: 'anchorUnregister', value: value }); }));
        this.steps = [];
        this.anchors = {};
        this.status = TourState.OFF;
        this.isHotKeysEnabled = true;
    }
    /**
     * @param {?} steps
     * @param {?=} stepDefaults
     * @return {?}
     */
    TourService.prototype.initialize = function (steps, stepDefaults) {
        if (steps && steps.length > 0) {
            this.status = TourState.OFF;
            this.steps = steps.map(function (step) { return Object.assign({}, stepDefaults, step); });
            this.initialize$.next(this.steps);
        }
    };
    /**
     * @return {?}
     */
    TourService.prototype.disableHotkeys = function () {
        this.isHotKeysEnabled = false;
    };
    /**
     * @return {?}
     */
    TourService.prototype.enableHotkeys = function () {
        this.isHotKeysEnabled = true;
    };
    /**
     * @return {?}
     */
    TourService.prototype.start = function () {
        this.startAt(0);
    };
    /**
     * @param {?} stepId
     * @return {?}
     */
    TourService.prototype.startAt = function (stepId) {
        var _this = this;
        this.status = TourState.ON;
        this.goToStep(this.loadStep(stepId));
        this.start$.next();
        this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* NavigationStart */]; }).first().subscribe(function () {
            if (_this.currentStep) {
                _this.hideStep(_this.currentStep);
            }
        });
    };
    /**
     * @return {?}
     */
    TourService.prototype.end = function () {
        this.status = TourState.OFF;
        this.hideStep(this.currentStep);
        this.currentStep = undefined;
        this.end$.next();
    };
    /**
     * @return {?}
     */
    TourService.prototype.pause = function () {
        this.status = TourState.PAUSED;
        this.hideStep(this.currentStep);
        this.pause$.next();
    };
    /**
     * @return {?}
     */
    TourService.prototype.resume = function () {
        this.status = TourState.ON;
        this.showStep(this.currentStep);
        this.resume$.next();
    };
    /**
     * @param {?=} pause
     * @return {?}
     */
    TourService.prototype.toggle = function (pause) {
        if (pause) {
            if (this.currentStep) {
                this.pause();
            }
            else {
                this.resume();
            }
        }
        else {
            if (this.currentStep) {
                this.end();
            }
            else {
                this.start();
            }
        }
    };
    /**
     * @return {?}
     */
    TourService.prototype.next = function () {
        if (this.hasNext(this.currentStep)) {
            this.goToStep(this.loadStep(this.currentStep.nextStep || this.steps.indexOf(this.currentStep) + 1));
        }
    };
    /**
     * @param {?} step
     * @return {?}
     */
    TourService.prototype.hasNext = function (step) {
        if (!step) {
            console.warn('Can\'t get next step. No currentStep.');
            return false;
        }
        return step.nextStep !== undefined || this.steps.indexOf(step) < this.steps.length - 1;
    };
    /**
     * @return {?}
     */
    TourService.prototype.prev = function () {
        if (this.hasPrev(this.currentStep)) {
            this.goToStep(this.loadStep(this.currentStep.prevStep || this.steps.indexOf(this.currentStep) - 1));
        }
    };
    /**
     * @param {?} step
     * @return {?}
     */
    TourService.prototype.hasPrev = function (step) {
        if (!step) {
            console.warn('Can\'t get previous step. No currentStep.');
            return false;
        }
        return step.prevStep !== undefined || this.steps.indexOf(step) > 0;
    };
    /**
     * @param {?} stepId
     * @return {?}
     */
    TourService.prototype.goto = function (stepId) {
        this.goToStep(this.loadStep(stepId));
    };
    /**
     * @param {?} anchorId
     * @param {?} anchor
     * @return {?}
     */
    TourService.prototype.register = function (anchorId, anchor) {
        if (this.anchors[anchorId]) {
            throw new Error('anchorId ' + anchorId + ' already registered!');
        }
        this.anchors[anchorId] = anchor;
        this.anchorRegister$.next(anchorId);
    };
    /**
     * @param {?} anchorId
     * @return {?}
     */
    TourService.prototype.unregister = function (anchorId) {
        delete this.anchors[anchorId];
        this.anchorUnregister$.next(anchorId);
    };
    /**
     * @return {?}
     */
    TourService.prototype.getStatus = function () {
        return this.status;
    };
    /**
     * @return {?}
     */
    TourService.prototype.isHotkeysEnabled = function () {
        return this.isHotKeysEnabled;
    };
    /**
     * @param {?} step
     * @return {?}
     */
    TourService.prototype.goToStep = function (step) {
        var _this = this;
        if (!step) {
            console.warn('Can\'t go to non-existent step');
            this.end();
            return;
        }
        var /** @type {?} */ navigatePromise = new Promise(function (resolve) { return resolve(true); });
        if (step.route !== undefined && typeof (step.route) === 'string') {
            navigatePromise = this.router.navigateByUrl(step.route);
        }
        else if (step.route && Array.isArray(step.route)) {
            navigatePromise = this.router.navigate(step.route);
        }
        navigatePromise.then(function (navigated) {
            if (navigated !== false) {
                setTimeout(function () { return _this.setCurrentStep(step); });
            }
        });
    };
    /**
     * @param {?} stepId
     * @return {?}
     */
    TourService.prototype.loadStep = function (stepId) {
        if (typeof (stepId) === 'number') {
            return this.steps[stepId];
        }
        else {
            return this.steps.find(function (step) { return step.stepId === stepId; });
        }
    };
    /**
     * @param {?} step
     * @return {?}
     */
    TourService.prototype.setCurrentStep = function (step) {
        var _this = this;
        if (this.currentStep) {
            this.hideStep(this.currentStep);
        }
        this.currentStep = step;
        this.showStep(this.currentStep);
        this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* NavigationStart */]; }).first().subscribe(function () {
            if (_this.currentStep) {
                _this.hideStep(_this.currentStep);
            }
        });
    };
    /**
     * @param {?} step
     * @return {?}
     */
    TourService.prototype.showStep = function (step) {
        var /** @type {?} */ anchor = this.anchors[step && step.anchorId];
        if (!anchor) {
            console.warn('Can\'t attach to unregistered anchor with id ' + step.anchorId);
            this.end();
            return;
        }
        anchor.showTourStep(step);
        this.stepShow$.next(step);
    };
    /**
     * @param {?} step
     * @return {?}
     */
    TourService.prototype.hideStep = function (step) {
        var /** @type {?} */ anchor = this.anchors[step && step.anchorId];
        if (!anchor) {
            return;
        }
        anchor.hideTourStep();
        this.stepHide$.next(step);
    };
    return TourService;
}());
TourService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */] },
];
/**
 * @nocollapse
 */
TourService.ctorParameters = function () {
    return [
        { type: __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], },
    ];
};
var TourHotkeyListenerComponent = (function () {
    /**
     * @param {?} tourService
     */
    function TourHotkeyListenerComponent(tourService) {
        this.tourService = tourService;
    }
    /**
     * Configures hot keys for controlling the tour with the keyboard
     * @param {?} event
     * @return {?}
     */
    TourHotkeyListenerComponent.prototype.onEscapeKey = function (event) {
        if (this.tourService.getStatus() === TourState.ON
            && this.tourService.isHotkeysEnabled()) {
            this.tourService.end();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TourHotkeyListenerComponent.prototype.onArrowRightKey = function (event) {
        if (this.tourService.getStatus() === TourState.ON
            && this.tourService.hasNext(this.tourService.currentStep)
            && this.tourService.isHotkeysEnabled()) {
            this.tourService.next();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TourHotkeyListenerComponent.prototype.onArrowLeftKey = function (event) {
        if (this.tourService.getStatus() === TourState.ON
            && this.tourService.hasPrev(this.tourService.currentStep)
            && this.tourService.isHotkeysEnabled()) {
            this.tourService.prev();
        }
    };
    return TourHotkeyListenerComponent;
}());
TourHotkeyListenerComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'tour-hotkey-listener',
                template: " ",
            },] },
];
/**
 * @nocollapse
 */
TourHotkeyListenerComponent.ctorParameters = function () {
    return [
        { type: TourService, },
    ];
};
TourHotkeyListenerComponent.propDecorators = {
    'onEscapeKey': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */], args: ['window:keydown.Escape',] },],
    'onArrowRightKey': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */], args: ['window:keydown.ArrowRight',] },],
    'onArrowLeftKey': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */], args: ['window:keydown.ArrowLeft',] },],
};
var TourModule = (function () {
    function TourModule() {
    }
    /**
     * @return {?}
     */
    TourModule.forRoot = function () {
        return {
            ngModule: TourModule,
            providers: [
                TourService,
            ],
        };
    };
    return TourModule;
}());
TourModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */], args: [{
                declarations: [TourHotkeyListenerComponent],
                exports: [TourHotkeyListenerComponent],
                imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]],
            },] },
];
/**
 * @nocollapse
 */
TourModule.ctorParameters = function () { return []; };
var NgbTourService = /** @class */ (function (_super) {
    __extends(NgbTourService, _super);
    function NgbTourService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NgbTourService;
}(TourService));
NgbTourService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */] },
];
/**
 * @nocollapse
 */
NgbTourService.ctorParameters = function () { return []; };
var TourStepTemplateService = /** @class */ (function () {
    function TourStepTemplateService() {
    }
    return TourStepTemplateService;
}());
TourStepTemplateService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */] },
];
/**
 * @nocollapse
 */
TourStepTemplateService.ctorParameters = function () { return []; };
var TourAnchorNgBootstrapDirective = /** @class */ (function (_super) {
    __extends(TourAnchorNgBootstrapDirective, _super);
    /**
     * @param {?} tourService
     * @param {?} tourStepTemplate
     * @param {?} _elementRef
     * @param {?} _renderer
     * @param {?} injector
     * @param {?} componentFactoryResolver
     * @param {?} viewContainerRef
     * @param {?} config
     * @param {?} ngZone
     */
    function TourAnchorNgBootstrapDirective(tourService, tourStepTemplate, _elementRef, _renderer, injector, componentFactoryResolver, viewContainerRef, config, ngZone) {
        var _this = _super.call(this, _elementRef, _renderer, injector, componentFactoryResolver, viewContainerRef, config, ngZone) || this;
        _this.tourService = tourService;
        _this.tourStepTemplate = tourStepTemplate;
        _this.element = _elementRef;
        return _this;
    }
    /**
     * @return {?}
     */
    TourAnchorNgBootstrapDirective.prototype.ngOnInit = function () {
        this.tourService.register(this.tourAnchor, this);
    };
    /**
     * @return {?}
     */
    TourAnchorNgBootstrapDirective.prototype.ngOnDestroy = function () {
        this.tourService.unregister(this.tourAnchor);
    };
    /**
     * @param {?} step
     * @return {?}
     */
    TourAnchorNgBootstrapDirective.prototype.showTourStep = function (step) {
        this.ngbPopover = this.tourStepTemplate.template;
        this.popoverTitle = step.title;
        this.container = 'body';
        this.placement = /** @type {?} */ ((step.placement || 'top')
            .replace('before', 'left').replace('after', 'right')
            .replace('below', 'bottom').replace('above', 'top'));
        this.open({ step: step });
        if (!step.preventScrolling) {
            if (!__WEBPACK_IMPORTED_MODULE_9_withinviewport___default()(this.element.nativeElement, { sides: 'bottom' })) {
                ((this.element.nativeElement)).scrollIntoView(false);
            }
            else if (!__WEBPACK_IMPORTED_MODULE_9_withinviewport___default()(this.element.nativeElement, { sides: 'left top right' })) {
                ((this.element.nativeElement)).scrollIntoView(true);
            }
        }
    };
    /**
     * @return {?}
     */
    TourAnchorNgBootstrapDirective.prototype.hideTourStep = function () {
        this.close();
    };
    return TourAnchorNgBootstrapDirective;
}(__WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["a" /* NgbPopover */]));
TourAnchorNgBootstrapDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{
                selector: '[tourAnchor]',
            },] },
];
/**
 * @nocollapse
 */
TourAnchorNgBootstrapDirective.ctorParameters = function () { return [
    { type: NgbTourService, },
    { type: TourStepTemplateService, },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Renderer2 */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Injector */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ComponentFactoryResolver */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewContainerRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["b" /* NgbPopoverConfig */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */], },
]; };
TourAnchorNgBootstrapDirective.propDecorators = {
    'tourAnchor': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
};
var TourStepTemplateComponent = /** @class */ (function (_super) {
    __extends(TourStepTemplateComponent, _super);
    /**
     * @param {?} tourStepTemplateService
     * @param {?} tourService
     */
    function TourStepTemplateComponent(tourStepTemplateService, tourService) {
        var _this = _super.call(this, tourService) || this;
        _this.tourStepTemplateService = tourStepTemplateService;
        _this.tourService = tourService;
        return _this;
    }
    /**
     * @return {?}
     */
    TourStepTemplateComponent.prototype.ngAfterContentInit = function () {
        this.tourStepTemplateService.template = this.stepTemplate || this.defaultTourStepTemplate;
    };
    return TourStepTemplateComponent;
}(TourHotkeyListenerComponent));
TourStepTemplateComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewEncapsulation */].None,
                selector: 'tour-step-template',
                template: "\n    <ng-template #tourStep let-step=\"step\">\n      <p class=\"tour-step-content\">{{step?.content}}</p>\n      <div class=\"tour-step-navigation\">\n        <button *ngIf=\"tourService.hasPrev(step)\" class=\"btn btn-sm btn-default\" (click)=\"tourService.prev()\">\u00AB Prev</button>\n        <button *ngIf=\"tourService.hasNext(step)\" class=\"btn btn-sm btn-default\" (click)=\"tourService.next()\">Next \u00BB</button>\n        <button class=\"btn btn-sm btn-default\" (click)=\"tourService.end()\">End</button>\n      </div>\n    </ng-template>\n  ",
            },] },
];
/**
 * @nocollapse
 */
TourStepTemplateComponent.ctorParameters = function () { return [
    { type: TourStepTemplateService, },
    { type: NgbTourService, },
]; };
TourStepTemplateComponent.propDecorators = {
    'defaultTourStepTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */], args: ['tourStep', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* TemplateRef */] },] },],
    'stepTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ContentChild */], args: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* TemplateRef */],] },],
};
var TourNgBootstrapModule = /** @class */ (function () {
    function TourNgBootstrapModule() {
    }
    /**
     * @return {?}
     */
    TourNgBootstrapModule.forRoot = function () {
        return {
            ngModule: TourNgBootstrapModule,
            providers: [
                TourStepTemplateService
            ].concat(TourModule.forRoot().providers, [
                NgbTourService
            ]),
        };
    };
    return TourNgBootstrapModule;
}());
TourNgBootstrapModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */], args: [{
                declarations: [TourAnchorNgBootstrapDirective, TourStepTemplateComponent],
                exports: [TourAnchorNgBootstrapDirective, TourStepTemplateComponent],
                imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["c" /* NgbPopoverModule */].forRoot()],
            },] },
];
/**
 * @nocollapse
 */
TourNgBootstrapModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=ngx-tour-ng-bootstrap.es5.js.map


/***/ }),

/***/ "../../../../../dist/ngx-tour-ng-bootstrap/node_modules/withinviewport/withinviewport.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Within Viewport
 *
 * @description Determines whether an element is completely within the browser viewport
 * @author      Craig Patik, http://patik.com/
 * @version     2.0.0
 * @date        2016-12-19
 */
(function (root, name, factory) {
    // AMD
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
    // Node and CommonJS-like environments
    else if (typeof module !== 'undefined' && typeof exports === 'object') {
        module.exports = factory();
    }
    // Browser global
    else {
        root[name] = factory();
    }
}(this, 'withinviewport', function () {
    var canUseWindowDimensions = window.innerHeight !== undefined; // IE 8 and lower fail this

    /**
     * Determines whether an element is within the viewport
     * @param  {Object}  elem       DOM Element (required)
     * @param  {Object}  options    Optional settings
     * @return {Boolean}            Whether the element was completely within the viewport
    */
    var withinviewport = function withinviewport (elem, options) {
        var result = false;
        var metadata = {};
        var config = {};
        var settings;
        var isWithin;
        var isContainerTheWindow;
        var elemBoundingRect;
        var containerBoundingRect;
        var scrollBarWidths = [0, 0];
        var sideNamesPattern;
        var sides;
        var side;
        var i;

        // If invoked by the jQuery plugin, get the actual DOM element
        if (typeof jQuery !== 'undefined' && elem instanceof jQuery) {
            elem = elem.get(0);
        }

        if (typeof elem !== 'object' || elem.nodeType !== 1) {
            throw new Error('First argument must be an element');
        }

        // Look for inline settings on the element
        if (elem.getAttribute('data-withinviewport-settings') && window.JSON) {
            metadata = JSON.parse(elem.getAttribute('data-withinviewport-settings'));
        }

        // Settings argument may be a simple string (`top`, `right`, etc)
        if (typeof options === 'string') {
            settings = {sides: options};
        }
        else {
            settings = options || {};
        }

        // Build configuration from defaults and user-provided settings and metadata
        config.container = settings.container || metadata.container || withinviewport.defaults.container || window;
        config.sides  = settings.sides  || metadata.sides  || withinviewport.defaults.sides  || 'all';
        config.top    = settings.top    || metadata.top    || withinviewport.defaults.top    || 0;
        config.right  = settings.right  || metadata.right  || withinviewport.defaults.right  || 0;
        config.bottom = settings.bottom || metadata.bottom || withinviewport.defaults.bottom || 0;
        config.left   = settings.left   || metadata.left   || withinviewport.defaults.left   || 0;

        // Extract the DOM node from a jQuery collection
        if (typeof jQuery !== 'undefined' && config.container instanceof jQuery) {
            config.container = config.container.get(0);
        }

        // Use the window as the container if the user specified the body or a non-element
        if (config.container === document.body || !config.container.nodeType === 1) {
            config.container = window;
        }

        isContainerTheWindow = (config.container === window);

        // Element testing methods
        isWithin = {
            // Element is below the top edge of the viewport
            top: function _isWithin_top () {
                if (isContainerTheWindow) {
                    return (elemBoundingRect.top >= config.top);
                }
                else {
                    return (elemBoundingRect.top >= containerScrollTop - (containerScrollTop - containerBoundingRect.top) + config.top);
                }
            },

            // Element is to the left of the right edge of the viewport
            right: function _isWithin_right () {
                // Note that `elemBoundingRect.right` is the distance from the *left* of the viewport to the element's far right edge

                if (isContainerTheWindow) {
                    return (elemBoundingRect.right <= (containerBoundingRect.right + containerScrollLeft) - config.right);
                }
                else {
                    return (elemBoundingRect.right <= containerBoundingRect.right - scrollBarWidths[0] - config.right);
                }
            },

            // Element is above the bottom edge of the viewport
            bottom: function _isWithin_bottom () {
                var containerHeight;

                if (isContainerTheWindow) {
                    if (canUseWindowDimensions) {
                        containerHeight = config.container.innerHeight;
                    }
                    else {
                        containerHeight = document.documentElement.clientHeight;
                    }
                }
                else {
                    containerHeight = containerBoundingRect.bottom;
                }

                // Note that `elemBoundingRect.bottom` is the distance from the *top* of the viewport to the element's bottom edge
                return (elemBoundingRect.bottom <= containerHeight - scrollBarWidths[1] - config.bottom);
            },

            // Element is to the right of the left edge of the viewport
            left: function _isWithin_left () {
                if (isContainerTheWindow) {
                    return (elemBoundingRect.left >= config.left);
                }
                else {
                    return (elemBoundingRect.left >= containerScrollLeft - (containerScrollLeft - containerBoundingRect.left) + config.left);
                }
            },

            // Element is within all four boundaries
            all: function _isWithin_all () {
                // Test each boundary in order of efficiency and likeliness to be false. This way we can avoid running all four functions on most elements.
                //     1. Top: Quickest to calculate + most likely to be false
                //     2. Bottom: Note quite as quick to calculate, but also very likely to be false
                //     3-4. Left and right are both equally unlikely to be false since most sites only scroll vertically, but left is faster
                return (isWithin.top() && isWithin.bottom() && isWithin.left() && isWithin.right());
            }
        };

        // Get the element's bounding rectangle with respect to the viewport
        elemBoundingRect = elem.getBoundingClientRect();

        // Get viewport dimensions and offsets
        if (isContainerTheWindow) {
            containerBoundingRect = document.documentElement.getBoundingClientRect();
            containerScrollTop = document.body.scrollTop;
            containerScrollLeft = document.body.scrollLeft;
        }
        else {
            containerBoundingRect = config.container.getBoundingClientRect();
            containerScrollTop = config.container.scrollTop;
            containerScrollLeft = config.container.scrollLeft;
        }

        // Don't count the space consumed by scrollbars
        if (containerScrollLeft) {
            scrollBarWidths[0] = 18;
        }

        if (containerScrollTop) {
            scrollBarWidths[1] = 16;
        }

        // Test the element against each side of the viewport that was requested
        sideNamesPattern = /^top$|^right$|^bottom$|^left$|^all$/;
        // Loop through all of the sides
        sides = config.sides.split(' ');
        i = sides.length;
        while (i--) {
            side = sides[i].toLowerCase();

            if (sideNamesPattern.test(side)) {
                if (isWithin[side]()) {
                    result = true;
                }
                else {
                    result = false;

                    // Quit as soon as the first failure is found
                    break;
                }
            }
        }

        return result;
    };

    // Default settings
    withinviewport.prototype.defaults = {
        container: document.body,
        sides: 'all',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };

    withinviewport.defaults = withinviewport.prototype.defaults;

    /**
     * Optional enhancements and shortcuts
     *
     * @description Uncomment or comment these pieces as they apply to your project and coding preferences
     */

    // Shortcut methods for each side of the viewport
    // Example: `withinviewport.top(elem)` is the same as `withinviewport(elem, 'top')`
    withinviewport.prototype.top = function _withinviewport_top (element) {
        return withinviewport(element, 'top');
    };

    withinviewport.prototype.right = function _withinviewport_right (element) {
        return withinviewport(element, 'right');
    };

    withinviewport.prototype.bottom = function _withinviewport_bottom (element) {
        return withinviewport(element, 'bottom');
    };

    withinviewport.prototype.left = function _withinviewport_left (element) {
        return withinviewport(element, 'left');
    };

    return withinviewport;
}));


/***/ }),

/***/ "../../../../../src/app/ng-bootstrap/docs.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>About</h2>\n<p>This is a product tour library built with Angular (2+).  It's inspired by <a tourAnchor=\"angular-ui-tour\" href=\"http://benmarch.github.io/angular-ui-tour\">angular-ui-tour</a>.</p>\n<p><code>TourNgBootstrapModule</code> is an implementation of the tour ui that uses <a href=\"https://ng-bootstrap.github.io\">NgBootstrap</a> popovers to display tour steps.</p>\n\n<h2 tourAnchor=\"installation\">Installation</h2>\n<ol>\n  <li><code>npm install ngx-tour-ng-bootstrap @ng-bootstrap/ng-bootstrap</code></li>\n  <li>Import <code>TourNgBootstrapModule.forRoot()</code> into your app module</li>\n  <li>Make sure <code>RouterModule</code> is imported in your app module</li>\n  <li>Include bootstrap css somehow - i.e. in your <code>index.html</code> add this line:<br>\n      <code>&lt;link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css\" integrity=\"sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M\" crossorigin=\"anonymous\"&gt;</code></li>\n</ol>\n\n<h2 tourAnchor=\"usage\">Usage</h2>\n<ol>\n  <li>Add <code>&lt;tour-step-template&gt;&lt;/tour-step-template&gt;</code> to your root app component</li>\n  <li>\n    Define anchor points for the tour steps by adding the <code>tourAnchor</code> directive throughout your app.\n    <pre><code>&lt;div tourAnchor=\"some.anchor.id\"&gt;...&lt;/div&gt;</code></pre>\n  </li>\n  <li>\n    Define your tour steps using <code>tourService.initialize(steps)</code>\n    <pre>\nthis.tourService.initialize([{{ '{' }}\n  anchorId: 'some.anchor.id',\n  content: 'Some content',\n  title: 'First',\n}, {{ '{' }}\n  anchorId: 'another.anchor.id',\n  content: 'Other content',\n  title: 'Second',\n}]);</pre>\n  </li>\n  <li>Start the tour with <code tourAnchor=\"tourService.start\">tourService.start()</code></li>\n  <li>Check out the <a href=\"https://github.com/isaacplmann/ngx-tour/tree/master/src/app/ng-bootstrap\">demo source code</a> for an example.</li>\n</ol>\n\n<h2>TourService</h2>\n<p>The <code>TourService</code> controls the tour.  Some key functions include:</p>\n<dl>\n  <dt>start()</dt>\n  <dd>Starts the tour</dd>\n  <dt>startAt(stepId: number | string)</dt>\n  <dd>Start the tour at the step with stepId or at the specified index</dd>\n  <dt>end()</dt>\n  <dd>Ends the tour</dd>\n  <dt>pause()</dt>\n  <dd>Pauses the tour</dd>\n  <dt>resume()</dt>\n  <dd>Resumes the tour</dd>\n  <dt>next()</dt>\n  <dd>Goes to the next step</dd>\n  <dt>prev()</dt>\n  <dd>Goes to the previous step</dd>\n</dl>\n\n<h2>Step Configuration</h2>\n<p>Each step can have the following properties.</p>\n<table class=\"table\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Type</th>\n      <th>Default</th>\n      <th>Description</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>stepId</td>\n      <td>string</td>\n      <td>\"\"</td>\n      <td>A unique identifier for the step</td>\n    </tr>\n    <tr tourAnchor=\"config.anchorId\">\n      <td>anchorId</td>\n      <td>string</td>\n      <td>required</td>\n      <td>The anchor to which the step will be attached</td>\n    </tr>\n    <tr>\n      <td>title</td>\n      <td>string</td>\n      <td>\"\"</td>\n      <td>The title of the tour step</td>\n    </tr>\n    <tr>\n      <td>content</td>\n      <td>string</td>\n      <td>\"\"</td>\n      <td>The content text of the tour step</td>\n    </tr>\n    <tr tourAnchor=\"config.route\">\n      <td>route</td>\n      <td>string | UrlSegment[]</td>\n      <td>undefined</td>\n      <td>\n        The route to which the tour should navigate before attempting to show this tour step.\n        If undefined, no navigation is attempted.\n      </td>\n    </tr>\n    <tr tourAnchor=\"config.nextStep\">\n      <td>nextStep</td>\n      <td>number | string</td>\n      <td>undefined</td>\n      <td>The step index or stepId of the next step.  If undefined, the next step in the steps array is used.</td>\n    </tr>\n    <tr>\n      <td>prevStep</td>\n      <td>number | string</td>\n      <td>undefined</td>\n      <td>The step index or stepId of the previous step.  If undefined, the previous step in the steps array is used.</td>\n    </tr>\n    <tr>\n      <td>placement</td>\n      <td>Placement of a popover accepts: \"top\", \"top-left\", \"top-right\", \"bottom\", \"bottom-left\", \"bottom-right\", \"left\", \"left-top\", \"left-bottom\", \"right\", \"right-top\", \"right-bottom\" and array of above values.</td>\n      <td><span tourAnchor=\"config.placement.default\">'top'</span></td>\n      <td>\n        Where the tour step should placed with respect to the anchor. Supports all <a href=\"https://ng-bootstrap.github.io/#/components/popover/api#NgbPopover\">placement options of ng bootstrap</a>.\n      </td>\n    </tr>\n    <tr>\n      <td>preventScrolling</td>\n      <td>boolean</td>\n      <td>false</td>\n      <td>\n        Tour steps automatically scroll to the middle of the screen, if they are off the screen when shown.\n        Setting this value to true will disable the scroll behavior.\n      </td>\n    </tr>\n  </tbody>\n</table>\n\n<h2>Defaults</h2>\n<p>You can set default values in the <code>TourService.initialize</code> function.</p>\n<pre>\nthis.tourService.initialize(steps, {{ '{' }}\n  route: '',\n  placement: 'left',\n  preventScrolling: true,\n});\n</pre>\n<p>Any value explicitly defined in a step will override the default value.</p>\n\n<h2 tourAnchor=\"hotkeys\">Hotkeys</h2>\n<p>\n  Hotkeys are provided using Angular's <code>@HostListener</code> decorator.  Hotkeys are enabled when the tour starts and disabled when the tour ends.\n</p>\n<ul>\n  <li><strong>left arrow</strong><span> - previous step</span></li>\n  <li><strong>right arrow</strong><span> - next step</span></li>\n  <li><strong>esc</strong><span> - end tour</span></li>\n</ul>\n<p>\n  You can disable hotkeys by calling <code>tourService.disableHotkeys()</code> or re-enable with <code>tourService.enableHotkeys()</code>\n</p>\n\n<h2 tourAnchor=\"events\">Event Observables</h2>\n<p>The <code>TourService</code> emits events that can be subscribed to like this:</p>\n<pre>\nthis.tourService.initialize$.subscribe((steps: IStepOption[]) => {{ '{' }}\n  console.log('tour configured with these steps:', steps);\n});\n</pre>\n<table class=\"table\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Payload</th>\n      <th>Emitted When</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>stepShow$</td>\n      <td>IStepOption</td>\n      <td>A step is shown</td>\n    </tr>\n    <tr>\n      <td>stepHide$</td>\n      <td>IStepOption</td>\n      <td>A step is hidden</td>\n    </tr>\n    <tr>\n      <td>initialize$</td>\n      <td>IStepOption[]</td>\n      <td>The tour is configured with a set of steps</td>\n    </tr>\n    <tr>\n      <td>start$</td>\n      <td>IStepOption</td>\n      <td>The tour begins</td>\n    </tr>\n    <tr>\n      <td>end$</td>\n      <td>any</td>\n      <td>The tour ends</td>\n    </tr>\n    <tr>\n      <td>pause$</td>\n      <td>IStepOption</td>\n      <td>The tour is paused</td>\n    </tr>\n    <tr>\n      <td>resume$</td>\n      <td>IStepOption</td>\n      <td>The tour resumes</td>\n    </tr>\n    <tr>\n      <td>anchorRegister$</td>\n      <td>string</td>\n      <td>An anchor is registered with the tour</td>\n    </tr>\n    <tr>\n      <td>anchorUnregister$</td>\n      <td>string</td>\n      <td>An anchor is unregistered from the tour</td>\n    </tr>\n  </tbody>\n</table>\n\n<h2 tourAnchor=\"template\">Custom template</h2>\n<p>\n  You can also customize the tour step template by providing an <code>&lt;ng-template let-step=\"step\" &gt;</code> inside the <code>&lt;tour-step-template&gt;</code>\n</p>\n<p>\n  The default template is equivalent to this:\n</p>\n<pre><code>&lt;tour-step-template&gt;\n  &lt;ng-template let-step=\"step\"&gt;\n    &lt;p class=\"tour-step-content\"&gt;{{ '{{' }}step?.content}}&lt;/p&gt;\n    &lt;div class=\"tour-step-navigation\"&gt;\n      &lt;button *ngIf=\"tourService.hasPrev(step)\" class=\"btn btn-sm btn-default\" (click)=\"tourService.prev()\"&gt;« Prev&lt;/button&gt;\n      &lt;button *ngIf=\"tourService.hasNext(step)\" class=\"btn btn-sm btn-default\" (click)=\"tourService.next()\"&gt;Next »&lt;/button&gt;\n      &lt;button class=\"btn btn-sm btn-default\" (click)=\"tourService.end()\"&gt;End&lt;/button&gt;\n    &lt;/div&gt;\n  &lt;/ng-template&gt;\n&lt;/tour-step-template&gt;\n</code></pre>\n"

/***/ }),

/***/ "../../../../../src/app/ng-bootstrap/docs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DocsComponent = /** @class */ (function () {
    function DocsComponent() {
    }
    DocsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            // tslint:disable-next-line:component-selector
            selector: 'docs',
            template: __webpack_require__("../../../../../src/app/ng-bootstrap/docs.component.html"),
        })
    ], DocsComponent);
    return DocsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/ng-bootstrap/ng-bootstrap.component.html":
/***/ (function(module, exports) {

module.exports = "<a href=\"https://github.com/isaacplmann/ng2-tour\" class=\"btn btn-default\">View on GitHub</a>\n<a style=\"cursor: pointer\" (click)=\"tourService.toggle()\" class=\"btn btn-primary\" tourAnchor=\"start.tour\">Start Demo Tour</a>\n\n<router-outlet></router-outlet>\n<tour-step-template>\n  <!-- <ng-template #jsonTemplate let-step=\"step\">\n      {{ step | json }}\n  </ng-template> -->\n</tour-step-template>\n"

/***/ }),

/***/ "../../../../../src/app/ng-bootstrap/ng-bootstrap.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgBootstrapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ngx_tour_ng_bootstrap__ = __webpack_require__("../../../../../dist/ngx-tour-ng-bootstrap/ngx-tour-ng-bootstrap.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgBootstrapComponent = /** @class */ (function () {
    function NgBootstrapComponent(tourService) {
        this.tourService = tourService;
        this.tourService.events$.subscribe(console.log);
        this.tourService.initialize([{
                anchorId: 'start.tour',
                content: 'Welcome to the Ngx-Tour tour!',
                placement: 'bottom',
                title: 'Welcome',
            }, {
                anchorId: 'angular-ui-tour',
                content: 'Thanks to angular-ui-tour for the inspiration for the library',
                title: 'angular-ui-tour',
            }, {
                anchorId: 'installation',
                content: 'First, install the library...',
                title: 'Installation',
            }, {
                anchorId: 'usage',
                content: '...then use it.',
                title: 'Usage',
            }, {
                anchorId: 'tourService.start',
                content: 'Don\'t forget to actually start the tour.',
                title: 'Start the tour',
            }, {
                anchorId: 'config.anchorId',
                content: 'Every step needs an anchor.',
                title: 'Anchor',
            }, {
                anchorId: 'config.route',
                content: 'Tours can span multiple routes.',
                title: 'Route',
            }, {
                anchorId: 'another.route',
                content: 'Like this!',
                route: 'ng-bootstrap/other',
                title: 'Another Route',
            }, {
                anchorId: 'config.route',
                content: 'And then back again.',
                placement: 'bottom',
                title: 'Route Return',
            }, {
                anchorId: 'config.placement.default',
                content: 'Steps can be positioned around an anchor. You can even have multiple steps use the same anchor.',
                title: 'Placement',
            }, {
                anchorId: 'config.placement.default',
                content: 'Sliiide to the left.',
                placement: 'left',
                title: 'Placement',
            }, {
                anchorId: 'config.placement.default',
                content: 'Sliiide to the right.',
                placement: 'right',
                title: 'Placement',
            }, {
                anchorId: 'config.placement.default',
                content: 'Take it back now y\'all.  One hop this time.',
                placement: 'bottom',
                title: 'Placement',
            }, {
                anchorId: 'config.placement.default',
                content: 'And on the corners - left-top',
                placement: 'left-top',
                title: 'Placement',
            }, {
                anchorId: 'config.placement.default',
                content: 'And on the corners - top-left',
                placement: 'top-left',
                title: 'Placement',
            }, {
                anchorId: 'config.placement.default',
                content: 'And on the corners - top-right',
                placement: 'top-right',
                title: 'Placement',
            }, {
                anchorId: 'config.placement.default',
                content: 'And on the corners - right-top',
                placement: 'right-top',
                title: 'Placement',
            }, {
                anchorId: 'config.placement.default',
                content: 'And on the corners - right-bottom',
                placement: 'right-bottom',
                title: 'Placement',
            }, {
                anchorId: 'config.placement.default',
                content: 'And on the corners - bottom-right',
                placement: 'bottom-right',
                title: 'Placement',
            }, {
                anchorId: 'config.placement.default',
                content: 'And on the corners - bottom-left',
                placement: 'bottom-left',
                title: 'Placement',
            }, {
                anchorId: 'config.placement.default',
                content: 'And on the corners - left-bottom',
                placement: 'left-bottom',
                title: 'Placement',
            }, {
                anchorId: 'hotkeys',
                content: 'Try using the hotkeys to navigate through the tour.',
                title: 'Hotkeys',
            }, {
                anchorId: 'events',
                content: 'You can subscribe to events',
                title: 'Events',
            }], {
            route: 'ng-bootstrap',
        });
        this.tourService.start();
    }
    NgBootstrapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            // tslint:disable-next-line:component-selector
            selector: 'ng-bootstrap-route',
            template: __webpack_require__("../../../../../src/app/ng-bootstrap/ng-bootstrap.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ngx_tour_ng_bootstrap__["b" /* TourService */]])
    ], NgBootstrapComponent);
    return NgBootstrapComponent;
}());



/***/ }),

/***/ "../../../../../src/app/ng-bootstrap/ng-bootstrap.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgBootstrapModule", function() { return NgBootstrapModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_tour_ng_bootstrap__ = __webpack_require__("../../../../../dist/ngx-tour-ng-bootstrap/ngx-tour-ng-bootstrap.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__docs_component__ = __webpack_require__("../../../../../src/app/ng-bootstrap/docs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_component__ = __webpack_require__("../../../../../src/app/ng-bootstrap/ng-bootstrap.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__other_route_component__ = __webpack_require__("../../../../../src/app/ng-bootstrap/other-route.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var NgBootstrapModule = /** @class */ (function () {
    function NgBootstrapModule() {
    }
    NgBootstrapModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_component__["a" /* NgBootstrapComponent */], __WEBPACK_IMPORTED_MODULE_4__docs_component__["a" /* DocsComponent */], __WEBPACK_IMPORTED_MODULE_6__other_route_component__["a" /* OtherRouteComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild([{
                        component: __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_component__["a" /* NgBootstrapComponent */],
                        path: '',
                        children: [{
                                component: __WEBPACK_IMPORTED_MODULE_4__docs_component__["a" /* DocsComponent */],
                                path: '',
                            }, {
                                component: __WEBPACK_IMPORTED_MODULE_6__other_route_component__["a" /* OtherRouteComponent */],
                                path: 'other',
                            }]
                    }]),
                __WEBPACK_IMPORTED_MODULE_3_ngx_tour_ng_bootstrap__["a" /* TourNgBootstrapModule */].forRoot(),
            ],
        })
    ], NgBootstrapModule);
    return NgBootstrapModule;
}());



/***/ }),

/***/ "../../../../../src/app/ng-bootstrap/other-route.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtherRouteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OtherRouteComponent = /** @class */ (function () {
    function OtherRouteComponent() {
    }
    OtherRouteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            // tslint:disable-next-line:component-selector
            selector: 'other-route',
            template: "<p>This is the <strong tourAnchor=\"another.route\">another</strong> route</p>",
        })
    ], OtherRouteComponent);
    return OtherRouteComponent;
}());



/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/accordion/accordion-config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbAccordionConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

/**
 * Configuration service for the NgbAccordion component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the accordions used in the application.
 */
var NgbAccordionConfig = (function () {
    function NgbAccordionConfig() {
        this.closeOthers = false;
    }
    return NgbAccordionConfig;
}());

NgbAccordionConfig.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */] },
];
/** @nocollapse */
NgbAccordionConfig.ctorParameters = function () { return []; };
//# sourceMappingURL=accordion-config.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/accordion/accordion.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return NgbPanelTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return NgbPanelContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NgbPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbAccordion; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_util__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accordion_config__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/accordion/accordion-config.js");



var nextId = 0;
/**
 * This directive should be used to wrap accordion panel titles that need to contain HTML markup or other directives.
 */
var NgbPanelTitle = (function () {
    function NgbPanelTitle(templateRef) {
        this.templateRef = templateRef;
    }
    return NgbPanelTitle;
}());

NgbPanelTitle.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{ selector: 'ng-template[ngbPanelTitle]' },] },
];
/** @nocollapse */
NgbPanelTitle.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* TemplateRef */], },
]; };
/**
 * This directive must be used to wrap accordion panel content.
 */
var NgbPanelContent = (function () {
    function NgbPanelContent(templateRef) {
        this.templateRef = templateRef;
    }
    return NgbPanelContent;
}());

NgbPanelContent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{ selector: 'ng-template[ngbPanelContent]' },] },
];
/** @nocollapse */
NgbPanelContent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* TemplateRef */], },
]; };
/**
 * The NgbPanel directive represents an individual panel with the title and collapsible
 * content
 */
var NgbPanel = (function () {
    function NgbPanel() {
        /**
         *  A flag determining whether the panel is disabled or not.
         *  When disabled, the panel cannot be toggled.
         */
        this.disabled = false;
        /**
         *  An optional id for the panel. The id should be unique.
         *  If not provided, it will be auto-generated.
         */
        this.id = "ngb-panel-" + nextId++;
        /**
         * A flag telling if the panel is currently open
         */
        this.isOpen = false;
    }
    return NgbPanel;
}());

NgbPanel.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{ selector: 'ngb-panel' },] },
];
/** @nocollapse */
NgbPanel.ctorParameters = function () { return []; };
NgbPanel.propDecorators = {
    'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'id': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'title': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'type': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'contentTpl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ContentChild */], args: [NgbPanelContent,] },],
    'titleTpl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ContentChild */], args: [NgbPanelTitle,] },],
};
/**
 * The NgbAccordion directive is a collection of panels.
 * It can assure that only one panel can be opened at a time.
 */
var NgbAccordion = (function () {
    function NgbAccordion(config) {
        /**
         * An array or comma separated strings of panel identifiers that should be opened
         */
        this.activeIds = [];
        /**
         * Whether the closed panels should be hidden without destroying them
         */
        this.destroyOnHide = true;
        /**
         * A panel change event fired right before the panel toggle happens. See NgbPanelChangeEvent for payload details
         */
        this.panelChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.type = config.type;
        this.closeOtherPanels = config.closeOthers;
    }
    /**
     * Programmatically toggle a panel with a given id.
     */
    NgbAccordion.prototype.toggle = function (panelId) {
        var panel = this.panels.find(function (p) { return p.id === panelId; });
        if (panel && !panel.disabled) {
            var defaultPrevented_1 = false;
            this.panelChange.emit({ panelId: panelId, nextState: !panel.isOpen, preventDefault: function () { defaultPrevented_1 = true; } });
            if (!defaultPrevented_1) {
                panel.isOpen = !panel.isOpen;
                if (this.closeOtherPanels) {
                    this._closeOthers(panelId);
                }
                this._updateActiveIds();
            }
        }
    };
    NgbAccordion.prototype.ngAfterContentChecked = function () {
        var _this = this;
        // active id updates
        if (Object(__WEBPACK_IMPORTED_MODULE_1__util_util__["e" /* isString */])(this.activeIds)) {
            this.activeIds = this.activeIds.split(/\s*,\s*/);
        }
        // update panels open states
        this.panels.forEach(function (panel) { return panel.isOpen = !panel.disabled && _this.activeIds.indexOf(panel.id) > -1; });
        // closeOthers updates
        if (this.activeIds.length > 1 && this.closeOtherPanels) {
            this._closeOthers(this.activeIds[0]);
            this._updateActiveIds();
        }
    };
    NgbAccordion.prototype._closeOthers = function (panelId) {
        this.panels.forEach(function (panel) {
            if (panel.id !== panelId) {
                panel.isOpen = false;
            }
        });
    };
    NgbAccordion.prototype._updateActiveIds = function () {
        this.activeIds = this.panels.filter(function (panel) { return panel.isOpen && !panel.disabled; }).map(function (panel) { return panel.id; });
    };
    return NgbAccordion;
}());

NgbAccordion.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'ngb-accordion',
                exportAs: 'ngbAccordion',
                host: { 'role': 'tablist', '[attr.aria-multiselectable]': '!closeOtherPanels' },
                template: "\n    <ng-template ngFor let-panel [ngForOf]=\"panels\">\n      <div class=\"card\">\n        <div role=\"tab\" id=\"{{panel.id}}-header\"\n          [class]=\"'card-header ' + (panel.type ? 'card-'+panel.type: type ? 'card-'+type : '')\" [class.active]=\"panel.isOpen\">\n          <a href (click)=\"!!toggle(panel.id)\" [class.text-muted]=\"panel.disabled\" [attr.tabindex]=\"(panel.disabled ? '-1' : null)\"\n            [attr.aria-expanded]=\"panel.isOpen\" [attr.aria-controls]=\"(panel.isOpen ? panel.id : null)\"\n            [attr.aria-disabled]=\"panel.disabled\">\n            {{panel.title}}<ng-template [ngTemplateOutlet]=\"panel.titleTpl?.templateRef\"></ng-template>\n          </a>\n        </div>\n        <div id=\"{{panel.id}}\" role=\"tabpanel\" [attr.aria-labelledby]=\"panel.id + '-header'\" \n             class=\"card-body {{panel.isOpen ? 'show' : null}}\" *ngIf=\"!destroyOnHide || panel.isOpen\">\n             <ng-template [ngTemplateOutlet]=\"panel.contentTpl.templateRef\"></ng-template>\n        </div>\n      </div>\n    </ng-template>\n  "
            },] },
];
/** @nocollapse */
NgbAccordion.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__accordion_config__["a" /* NgbAccordionConfig */], },
]; };
NgbAccordion.propDecorators = {
    'panels': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ContentChildren */], args: [NgbPanel,] },],
    'activeIds': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'closeOtherPanels': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */], args: ['closeOthers',] },],
    'destroyOnHide': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'type': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'panelChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
};
//# sourceMappingURL=accordion.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/accordion/accordion.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbAccordionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accordion__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/accordion/accordion.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accordion_config__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/accordion/accordion-config.js");
/* unused harmony reexport NgbAccordion */
/* unused harmony reexport NgbPanel */
/* unused harmony reexport NgbPanelTitle */
/* unused harmony reexport NgbPanelContent */
/* unused harmony reexport NgbAccordionConfig */






var NGB_ACCORDION_DIRECTIVES = [__WEBPACK_IMPORTED_MODULE_2__accordion__["a" /* NgbAccordion */], __WEBPACK_IMPORTED_MODULE_2__accordion__["b" /* NgbPanel */], __WEBPACK_IMPORTED_MODULE_2__accordion__["d" /* NgbPanelTitle */], __WEBPACK_IMPORTED_MODULE_2__accordion__["c" /* NgbPanelContent */]];
var NgbAccordionModule = (function () {
    function NgbAccordionModule() {
    }
    NgbAccordionModule.forRoot = function () { return { ngModule: NgbAccordionModule, providers: [__WEBPACK_IMPORTED_MODULE_3__accordion_config__["a" /* NgbAccordionConfig */]] }; };
    return NgbAccordionModule;
}());

NgbAccordionModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */], args: [{ declarations: NGB_ACCORDION_DIRECTIVES, exports: NGB_ACCORDION_DIRECTIVES, imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]] },] },
];
/** @nocollapse */
NgbAccordionModule.ctorParameters = function () { return []; };
//# sourceMappingURL=accordion.module.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/alert/alert-config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbAlertConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

/**
 * Configuration service for the NgbAlert component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the alerts used in the application.
 */
var NgbAlertConfig = (function () {
    function NgbAlertConfig() {
        this.dismissible = true;
        this.type = 'warning';
    }
    return NgbAlertConfig;
}());

NgbAlertConfig.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */] },
];
/** @nocollapse */
NgbAlertConfig.ctorParameters = function () { return []; };
//# sourceMappingURL=alert-config.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/alert/alert.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbAlert; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alert_config__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/alert/alert-config.js");


/**
 * Alerts can be used to provide feedback messages.
 */
var NgbAlert = (function () {
    function NgbAlert(config) {
        /**
         * An event emitted when the close button is clicked. This event has no payload. Only relevant for dismissible alerts.
         */
        this.close = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.dismissible = config.dismissible;
        this.type = config.type;
    }
    NgbAlert.prototype.closeHandler = function () { this.close.emit(null); };
    return NgbAlert;
}());

NgbAlert.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'ngb-alert',
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
                template: "\n    <div [class]=\"'alert alert-' + type + (dismissible ? ' alert-dismissible' : '')\" role=\"alert\">\n      <button *ngIf=\"dismissible\" type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeHandler()\">\n            <span aria-hidden=\"true\">&times;</span>\n      </button>\n      <ng-content></ng-content>\n    </div>\n    "
            },] },
];
/** @nocollapse */
NgbAlert.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__alert_config__["a" /* NgbAlertConfig */], },
]; };
NgbAlert.propDecorators = {
    'dismissible': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'type': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'close': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
};
//# sourceMappingURL=alert.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/alert/alert.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbAlertModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alert__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/alert/alert.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alert_config__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/alert/alert-config.js");
/* unused harmony reexport NgbAlert */
/* unused harmony reexport NgbAlertConfig */






var NgbAlertModule = (function () {
    function NgbAlertModule() {
    }
    NgbAlertModule.forRoot = function () { return { ngModule: NgbAlertModule, providers: [__WEBPACK_IMPORTED_MODULE_3__alert_config__["a" /* NgbAlertConfig */]] }; };
    return NgbAlertModule;
}());

NgbAlertModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */], args: [{ declarations: [__WEBPACK_IMPORTED_MODULE_2__alert__["a" /* NgbAlert */]], exports: [__WEBPACK_IMPORTED_MODULE_2__alert__["a" /* NgbAlert */]], imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]], entryComponents: [__WEBPACK_IMPORTED_MODULE_2__alert__["a" /* NgbAlert */]] },] },
];
/** @nocollapse */
NgbAlertModule.ctorParameters = function () { return []; };
//# sourceMappingURL=alert.module.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/buttons/buttons.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbButtonsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__label__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/buttons/label.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkbox__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/buttons/checkbox.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__radio__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/buttons/radio.js");
/* unused harmony reexport NgbButtonLabel */
/* unused harmony reexport NgbCheckBox */
/* unused harmony reexport NgbRadio */
/* unused harmony reexport NgbRadioGroup */







var NGB_BUTTON_DIRECTIVES = [__WEBPACK_IMPORTED_MODULE_1__label__["a" /* NgbButtonLabel */], __WEBPACK_IMPORTED_MODULE_2__checkbox__["a" /* NgbCheckBox */], __WEBPACK_IMPORTED_MODULE_3__radio__["b" /* NgbRadioGroup */], __WEBPACK_IMPORTED_MODULE_3__radio__["a" /* NgbRadio */]];
var NgbButtonsModule = (function () {
    function NgbButtonsModule() {
    }
    NgbButtonsModule.forRoot = function () { return { ngModule: NgbButtonsModule, providers: [] }; };
    return NgbButtonsModule;
}());

NgbButtonsModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */], args: [{ declarations: NGB_BUTTON_DIRECTIVES, exports: NGB_BUTTON_DIRECTIVES },] },
];
/** @nocollapse */
NgbButtonsModule.ctorParameters = function () { return []; };
//# sourceMappingURL=buttons.module.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/buttons/checkbox.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbCheckBox; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__label__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/buttons/label.js");



var NGB_CHECKBOX_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* forwardRef */])(function () { return NgbCheckBox; }),
    multi: true
};
/**
 * Easily create Bootstrap-style checkbox buttons. A value of a checked button is bound to a variable
 * specified via ngModel.
 */
var NgbCheckBox = (function () {
    function NgbCheckBox(_label) {
        this._label = _label;
        /**
         * A flag indicating if a given checkbox button is disabled.
         */
        this.disabled = false;
        /**
         * Value to be propagated as model when the checkbox is checked.
         */
        this.valueChecked = true;
        /**
         * Value to be propagated as model when the checkbox is unchecked.
         */
        this.valueUnChecked = false;
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    Object.defineProperty(NgbCheckBox.prototype, "focused", {
        set: function (isFocused) {
            this._label.focused = isFocused;
            if (!isFocused) {
                this.onTouched();
            }
        },
        enumerable: true,
        configurable: true
    });
    NgbCheckBox.prototype.onInputChange = function ($event) {
        var modelToPropagate = $event.target.checked ? this.valueChecked : this.valueUnChecked;
        this.onChange(modelToPropagate);
        this.onTouched();
        this.writeValue(modelToPropagate);
    };
    NgbCheckBox.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    NgbCheckBox.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    NgbCheckBox.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
        this._label.disabled = isDisabled;
    };
    NgbCheckBox.prototype.writeValue = function (value) {
        this.checked = value === this.valueChecked;
        this._label.active = this.checked;
    };
    return NgbCheckBox;
}());

NgbCheckBox.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{
                selector: '[ngbButton][type=checkbox]',
                host: {
                    'autocomplete': 'off',
                    '[checked]': 'checked',
                    '[disabled]': 'disabled',
                    '(change)': 'onInputChange($event)',
                    '(focus)': 'focused = true',
                    '(blur)': 'focused = false'
                },
                providers: [NGB_CHECKBOX_VALUE_ACCESSOR]
            },] },
];
/** @nocollapse */
NgbCheckBox.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__label__["a" /* NgbButtonLabel */], },
]; };
NgbCheckBox.propDecorators = {
    'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'valueChecked': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'valueUnChecked': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
};
//# sourceMappingURL=checkbox.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/buttons/label.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbButtonLabel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

var NgbButtonLabel = (function () {
    function NgbButtonLabel() {
    }
    return NgbButtonLabel;
}());

NgbButtonLabel.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{
                selector: '[ngbButtonLabel]',
                host: { '[class.btn]': 'true', '[class.active]': 'active', '[class.disabled]': 'disabled', '[class.focus]': 'focused' }
            },] },
];
/** @nocollapse */
NgbButtonLabel.ctorParameters = function () { return []; };
//# sourceMappingURL=label.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/buttons/radio.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NgbRadioGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbRadio; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__label__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/buttons/label.js");



var NGB_RADIO_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* forwardRef */])(function () { return NgbRadioGroup; }),
    multi: true
};
var nextId = 0;
/**
 * Easily create Bootstrap-style radio buttons. A value of a selected button is bound to a variable
 * specified via ngModel.
 */
var NgbRadioGroup = (function () {
    function NgbRadioGroup() {
        this._radios = new Set();
        this._value = null;
        /**
         * The name of the group. Unless enclosed inputs specify a name, this name is used as the name of the
         * enclosed inputs. If not specified, a name is generated automatically.
         */
        this.name = "ngb-radio-" + nextId++;
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    Object.defineProperty(NgbRadioGroup.prototype, "disabled", {
        get: function () { return this._disabled; },
        set: function (isDisabled) { this.setDisabledState(isDisabled); },
        enumerable: true,
        configurable: true
    });
    NgbRadioGroup.prototype.onRadioChange = function (radio) {
        this.writeValue(radio.value);
        this.onChange(radio.value);
    };
    NgbRadioGroup.prototype.onRadioValueUpdate = function () { this._updateRadiosValue(); };
    NgbRadioGroup.prototype.register = function (radio) { this._radios.add(radio); };
    NgbRadioGroup.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    NgbRadioGroup.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    NgbRadioGroup.prototype.setDisabledState = function (isDisabled) {
        this._disabled = isDisabled;
        this._updateRadiosDisabled();
    };
    NgbRadioGroup.prototype.unregister = function (radio) { this._radios.delete(radio); };
    NgbRadioGroup.prototype.writeValue = function (value) {
        this._value = value;
        this._updateRadiosValue();
    };
    NgbRadioGroup.prototype._updateRadiosValue = function () {
        var _this = this;
        this._radios.forEach(function (radio) { return radio.updateValue(_this._value); });
    };
    NgbRadioGroup.prototype._updateRadiosDisabled = function () { this._radios.forEach(function (radio) { return radio.updateDisabled(); }); };
    return NgbRadioGroup;
}());

NgbRadioGroup.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{
                selector: '[ngbRadioGroup]',
                host: { 'data-toggle': 'buttons', 'role': 'group' },
                providers: [NGB_RADIO_VALUE_ACCESSOR]
            },] },
];
/** @nocollapse */
NgbRadioGroup.ctorParameters = function () { return []; };
NgbRadioGroup.propDecorators = {
    'name': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
};
/**
 * Marks an input of type "radio" as part of the NgbRadioGroup.
 */
var NgbRadio = (function () {
    function NgbRadio(_group, _label, _renderer, _element) {
        this._group = _group;
        this._label = _label;
        this._renderer = _renderer;
        this._element = _element;
        this._value = null;
        this._group.register(this);
    }
    Object.defineProperty(NgbRadio.prototype, "value", {
        get: function () { return this._value; },
        /**
         * You can specify model value of a given radio by binding to the value property.
         */
        set: function (value) {
            this._value = value;
            var stringValue = value ? value.toString() : '';
            this._renderer.setProperty(this._element.nativeElement, 'value', stringValue);
            this._group.onRadioValueUpdate();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbRadio.prototype, "disabled", {
        get: function () { return this._group.disabled || this._disabled; },
        /**
         * A flag indicating if a given radio button is disabled.
         */
        set: function (isDisabled) {
            this._disabled = isDisabled !== false;
            this.updateDisabled();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbRadio.prototype, "focused", {
        set: function (isFocused) {
            if (this._label) {
                this._label.focused = isFocused;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbRadio.prototype, "checked", {
        get: function () { return this._checked; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbRadio.prototype, "nameAttr", {
        get: function () { return this.name || this._group.name; },
        enumerable: true,
        configurable: true
    });
    NgbRadio.prototype.ngOnDestroy = function () { this._group.unregister(this); };
    NgbRadio.prototype.onChange = function () { this._group.onRadioChange(this); };
    NgbRadio.prototype.updateValue = function (value) {
        this._checked = this.value === value;
        this._label.active = this._checked;
    };
    NgbRadio.prototype.updateDisabled = function () { this._label.disabled = this.disabled; };
    return NgbRadio;
}());

NgbRadio.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{
                selector: '[ngbButton][type=radio]',
                host: {
                    '[checked]': 'checked',
                    '[disabled]': 'disabled',
                    '[name]': 'nameAttr',
                    '(change)': 'onChange()',
                    '(focus)': 'focused = true',
                    '(blur)': 'focused = false'
                }
            },] },
];
/** @nocollapse */
NgbRadio.ctorParameters = function () { return [
    { type: NgbRadioGroup, },
    { type: __WEBPACK_IMPORTED_MODULE_2__label__["a" /* NgbButtonLabel */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Renderer2 */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
]; };
NgbRadio.propDecorators = {
    'name': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */], args: ['value',] },],
    'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */], args: ['disabled',] },],
};
//# sourceMappingURL=radio.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/carousel/carousel-config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbCarouselConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

/**
 * Configuration service for the NgbCarousel component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the carousels used in the application.
 */
var NgbCarouselConfig = (function () {
    function NgbCarouselConfig() {
        this.interval = 5000;
        this.wrap = true;
        this.keyboard = true;
    }
    return NgbCarouselConfig;
}());

NgbCarouselConfig.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */] },
];
/** @nocollapse */
NgbCarouselConfig.ctorParameters = function () { return []; };
//# sourceMappingURL=carousel-config.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/carousel/carousel.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NgbSlide */
/* unused harmony export NgbCarousel */
/* unused harmony export NgbSlideEventDirection */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NGB_CAROUSEL_DIRECTIVES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__carousel_config__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/carousel/carousel-config.js");


var nextId = 0;
/**
 * Represents an individual slide to be used within a carousel.
 */
var NgbSlide = (function () {
    function NgbSlide(tplRef) {
        this.tplRef = tplRef;
        /**
         * Unique slide identifier. Must be unique for the entire document for proper accessibility support.
         * Will be auto-generated if not provided.
         */
        this.id = "ngb-slide-" + nextId++;
    }
    return NgbSlide;
}());

NgbSlide.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{ selector: 'ng-template[ngbSlide]' },] },
];
/** @nocollapse */
NgbSlide.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* TemplateRef */], },
]; };
NgbSlide.propDecorators = {
    'id': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
};
/**
 * Directive to easily create carousels based on Bootstrap's markup.
 */
var NgbCarousel = (function () {
    function NgbCarousel(config) {
        /**
         * A carousel slide event fired when the slide transition is completed.
         * See NgbSlideEvent for payload details
         */
        this.slide = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.interval = config.interval;
        this.wrap = config.wrap;
        this.keyboard = config.keyboard;
    }
    NgbCarousel.prototype.ngAfterContentChecked = function () {
        var activeSlide = this._getSlideById(this.activeId);
        this.activeId = activeSlide ? activeSlide.id : (this.slides.length ? this.slides.first.id : null);
    };
    NgbCarousel.prototype.ngOnInit = function () { this._startTimer(); };
    NgbCarousel.prototype.ngOnChanges = function (changes) {
        if ('interval' in changes && !changes['interval'].isFirstChange()) {
            this._restartTimer();
        }
    };
    NgbCarousel.prototype.ngOnDestroy = function () { clearInterval(this._slideChangeInterval); };
    /**
     * Navigate to a slide with the specified identifier.
     */
    NgbCarousel.prototype.select = function (slideId) {
        this.cycleToSelected(slideId, this._getSlideEventDirection(this.activeId, slideId));
        this._restartTimer();
    };
    /**
     * Navigate to the next slide.
     */
    NgbCarousel.prototype.prev = function () {
        this.cycleToPrev();
        this._restartTimer();
    };
    /**
     * Navigate to the next slide.
     */
    NgbCarousel.prototype.next = function () {
        this.cycleToNext();
        this._restartTimer();
    };
    /**
     * Stops the carousel from cycling through items.
     */
    NgbCarousel.prototype.pause = function () { this._stopTimer(); };
    /**
     * Restarts cycling through the carousel slides from left to right.
     */
    NgbCarousel.prototype.cycle = function () { this._startTimer(); };
    NgbCarousel.prototype.cycleToNext = function () { this.cycleToSelected(this._getNextSlide(this.activeId), NgbSlideEventDirection.LEFT); };
    NgbCarousel.prototype.cycleToPrev = function () { this.cycleToSelected(this._getPrevSlide(this.activeId), NgbSlideEventDirection.RIGHT); };
    NgbCarousel.prototype.cycleToSelected = function (slideIdx, direction) {
        var selectedSlide = this._getSlideById(slideIdx);
        if (selectedSlide) {
            if (selectedSlide.id !== this.activeId) {
                this.slide.emit({ prev: this.activeId, current: selectedSlide.id, direction: direction });
            }
            this.activeId = selectedSlide.id;
        }
    };
    NgbCarousel.prototype.keyPrev = function () {
        if (this.keyboard) {
            this.prev();
        }
    };
    NgbCarousel.prototype.keyNext = function () {
        if (this.keyboard) {
            this.next();
        }
    };
    NgbCarousel.prototype._restartTimer = function () {
        this._stopTimer();
        this._startTimer();
    };
    NgbCarousel.prototype._startTimer = function () {
        var _this = this;
        if (this.interval > 0) {
            this._slideChangeInterval = setInterval(function () { _this.cycleToNext(); }, this.interval);
        }
    };
    NgbCarousel.prototype._stopTimer = function () { clearInterval(this._slideChangeInterval); };
    NgbCarousel.prototype._getSlideById = function (slideId) {
        var slideWithId = this.slides.filter(function (slide) { return slide.id === slideId; });
        return slideWithId.length ? slideWithId[0] : null;
    };
    NgbCarousel.prototype._getSlideIdxById = function (slideId) {
        return this.slides.toArray().indexOf(this._getSlideById(slideId));
    };
    NgbCarousel.prototype._getNextSlide = function (currentSlideId) {
        var slideArr = this.slides.toArray();
        var currentSlideIdx = this._getSlideIdxById(currentSlideId);
        var isLastSlide = currentSlideIdx === slideArr.length - 1;
        return isLastSlide ? (this.wrap ? slideArr[0].id : slideArr[slideArr.length - 1].id) :
            slideArr[currentSlideIdx + 1].id;
    };
    NgbCarousel.prototype._getPrevSlide = function (currentSlideId) {
        var slideArr = this.slides.toArray();
        var currentSlideIdx = this._getSlideIdxById(currentSlideId);
        var isFirstSlide = currentSlideIdx === 0;
        return isFirstSlide ? (this.wrap ? slideArr[slideArr.length - 1].id : slideArr[0].id) :
            slideArr[currentSlideIdx - 1].id;
    };
    NgbCarousel.prototype._getSlideEventDirection = function (currentActiveSlideId, nextActiveSlideId) {
        var currentActiveSlideIdx = this._getSlideIdxById(currentActiveSlideId);
        var nextActiveSlideIdx = this._getSlideIdxById(nextActiveSlideId);
        return currentActiveSlideIdx > nextActiveSlideIdx ? NgbSlideEventDirection.RIGHT : NgbSlideEventDirection.LEFT;
    };
    return NgbCarousel;
}());

NgbCarousel.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'ngb-carousel',
                exportAs: 'ngbCarousel',
                host: {
                    'class': 'carousel slide',
                    '[style.display]': '"block"',
                    'tabIndex': '0',
                    '(mouseenter)': 'pause()',
                    '(mouseleave)': 'cycle()',
                    '(keydown.arrowLeft)': 'keyPrev()',
                    '(keydown.arrowRight)': 'keyNext()'
                },
                template: "\n    <ol class=\"carousel-indicators\">\n      <li *ngFor=\"let slide of slides\" [id]=\"slide.id\" [class.active]=\"slide.id === activeId\" \n          (click)=\"cycleToSelected(slide.id, _getSlideEventDirection(activeId, slide.id))\"></li>\n    </ol>\n    <div class=\"carousel-inner\">\n      <div *ngFor=\"let slide of slides\" class=\"carousel-item\" [class.active]=\"slide.id === activeId\">\n        <ng-template [ngTemplateOutlet]=\"slide.tplRef\"></ng-template>\n      </div>\n    </div>\n    <a class=\"carousel-control-prev\" role=\"button\" (click)=\"cycleToPrev()\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" role=\"button\" (click)=\"cycleToNext()\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n    "
            },] },
];
/** @nocollapse */
NgbCarousel.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__carousel_config__["a" /* NgbCarouselConfig */], },
]; };
NgbCarousel.propDecorators = {
    'slides': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ContentChildren */], args: [NgbSlide,] },],
    'interval': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'wrap': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'keyboard': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'activeId': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'slide': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
};
/**
 * Enum to define the carousel slide event direction
 */
var NgbSlideEventDirection;
(function (NgbSlideEventDirection) {
    NgbSlideEventDirection[NgbSlideEventDirection["LEFT"] = 'left'] = "LEFT";
    NgbSlideEventDirection[NgbSlideEventDirection["RIGHT"] = 'right'] = "RIGHT";
})(NgbSlideEventDirection || (NgbSlideEventDirection = {}));
var NGB_CAROUSEL_DIRECTIVES = [NgbCarousel, NgbSlide];
//# sourceMappingURL=carousel.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/carousel/carousel.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbCarouselModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__carousel__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/carousel/carousel.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__carousel_config__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/carousel/carousel-config.js");
/* unused harmony reexport NgbCarousel */
/* unused harmony reexport NgbSlide */
/* unused harmony reexport NgbCarouselConfig */






var NgbCarouselModule = (function () {
    function NgbCarouselModule() {
    }
    NgbCarouselModule.forRoot = function () { return { ngModule: NgbCarouselModule, providers: [__WEBPACK_IMPORTED_MODULE_3__carousel_config__["a" /* NgbCarouselConfig */]] }; };
    return NgbCarouselModule;
}());

NgbCarouselModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */], args: [{ declarations: __WEBPACK_IMPORTED_MODULE_2__carousel__["a" /* NGB_CAROUSEL_DIRECTIVES */], exports: __WEBPACK_IMPORTED_MODULE_2__carousel__["a" /* NGB_CAROUSEL_DIRECTIVES */], imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]] },] },
];
/** @nocollapse */
NgbCarouselModule.ctorParameters = function () { return []; };
//# sourceMappingURL=carousel.module.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/collapse/collapse.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbCollapse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

/**
 * The NgbCollapse directive provides a simple way to hide and show an element with animations.
 */
var NgbCollapse = (function () {
    function NgbCollapse() {
        /**
         * A flag indicating collapsed (true) or open (false) state.
         */
        this.collapsed = false;
    }
    return NgbCollapse;
}());

NgbCollapse.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{
                selector: '[ngbCollapse]',
                exportAs: 'ngbCollapse',
                host: { '[class.collapse]': 'true', '[class.show]': '!collapsed' }
            },] },
];
/** @nocollapse */
NgbCollapse.ctorParameters = function () { return []; };
NgbCollapse.propDecorators = {
    'collapsed': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */], args: ['ngbCollapse',] },],
};
//# sourceMappingURL=collapse.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/collapse/collapse.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbCollapseModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__collapse__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/collapse/collapse.js");
/* unused harmony reexport NgbCollapse */



var NgbCollapseModule = (function () {
    function NgbCollapseModule() {
    }
    NgbCollapseModule.forRoot = function () { return { ngModule: NgbCollapseModule, providers: [] }; };
    return NgbCollapseModule;
}());

NgbCollapseModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */], args: [{ declarations: [__WEBPACK_IMPORTED_MODULE_1__collapse__["a" /* NgbCollapse */]], exports: [__WEBPACK_IMPORTED_MODULE_1__collapse__["a" /* NgbCollapse */]] },] },
];
/** @nocollapse */
NgbCollapseModule.ctorParameters = function () { return []; };
//# sourceMappingURL=collapse.module.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/datepicker/datepicker-config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbDatepickerConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

/**
 * Configuration service for the NgbDatepicker component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the datepickers used in the application.
 */
var NgbDatepickerConfig = (function () {
    function NgbDatepickerConfig() {
        this.displayMonths = 1;
        this.firstDayOfWeek = 1;
        this.navigation = 'select';
        this.outsideDays = 'visible';
        this.showWeekdays = true;
        this.showWeekNumbers = false;
    }
    return NgbDatepickerConfig;
}());

NgbDatepickerConfig.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */] },
];
/** @nocollapse */
NgbDatepickerConfig.ctorParameters = function () { return []; };
//# sourceMappingURL=datepicker-config.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/datepicker/datepicker-day-view.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbDatepickerDayView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

var NgbDatepickerDayView = (function () {
    function NgbDatepickerDayView() {
    }
    NgbDatepickerDayView.prototype.isMuted = function () { return !this.selected && (this.date.month !== this.currentMonth || this.disabled); };
    return NgbDatepickerDayView;
}());

NgbDatepickerDayView.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: '[ngbDatepickerDayView]',
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
                styles: ["\n    :host {\n      text-align: center;\n      width: 2rem;\n      height: 2rem;\n      line-height: 2rem;\n      border-radius: 0.25rem;\n      background: transparent;\n    }\n    :host.outside {\n      opacity: 0.5;\n    }\n  "],
                host: {
                    'class': 'btn-light',
                    '[class.bg-primary]': 'selected',
                    '[class.text-white]': 'selected',
                    '[class.text-muted]': 'isMuted()',
                    '[class.outside]': 'isMuted()',
                    '[class.active]': 'focused'
                },
                template: "{{ date.day }}"
            },] },
];
/** @nocollapse */
NgbDatepickerDayView.ctorParameters = function () { return []; };
NgbDatepickerDayView.propDecorators = {
    'currentMonth': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'date': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'focused': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'selected': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
};
//# sourceMappingURL=datepicker-day-view.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/datepicker/datepicker-i18n.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbDatepickerI18n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NgbDatepickerI18nDefault; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var WEEKDAYS_SHORT = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
var MONTHS_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var MONTHS_FULL = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November',
    'December'
];
/**
 * Type of the service supplying month and weekday names to to NgbDatepicker component.
 * See the i18n demo for how to extend this class and define a custom provider for i18n.
 */
var NgbDatepickerI18n = (function () {
    function NgbDatepickerI18n() {
    }
    return NgbDatepickerI18n;
}());

NgbDatepickerI18n.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */] },
];
/** @nocollapse */
NgbDatepickerI18n.ctorParameters = function () { return []; };
var NgbDatepickerI18nDefault = (function (_super) {
    __extends(NgbDatepickerI18nDefault, _super);
    function NgbDatepickerI18nDefault() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NgbDatepickerI18nDefault.prototype.getWeekdayShortName = function (weekday) { return WEEKDAYS_SHORT[weekday - 1]; };
    NgbDatepickerI18nDefault.prototype.getMonthShortName = function (month) { return MONTHS_SHORT[month - 1]; };
    NgbDatepickerI18nDefault.prototype.getMonthFullName = function (month) { return MONTHS_FULL[month - 1]; };
    return NgbDatepickerI18nDefault;
}(NgbDatepickerI18n));

NgbDatepickerI18nDefault.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */] },
];
/** @nocollapse */
NgbDatepickerI18nDefault.ctorParameters = function () { return []; };
//# sourceMappingURL=datepicker-i18n.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/datepicker/datepicker-input.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbInputDatepicker; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngb_date__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/datepicker/ngb-date.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__datepicker__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/datepicker/datepicker.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngb_date_parser_formatter__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-parser-formatter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_positioning__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/util/positioning.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngb_calendar__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__datepicker_service__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/datepicker/datepicker-service.js");








var NGB_DATEPICKER_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* forwardRef */])(function () { return NgbInputDatepicker; }),
    multi: true
};
var NGB_DATEPICKER_VALIDATOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NG_VALIDATORS */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* forwardRef */])(function () { return NgbInputDatepicker; }),
    multi: true
};
/**
 * A directive that makes it possible to have datepickers on input fields.
 * Manages integration with the input field itself (data entry) and ngModel (validation etc.).
 */
var NgbInputDatepicker = (function () {
    function NgbInputDatepicker(_parserFormatter, _elRef, _vcRef, _renderer, _cfr, ngZone, _service, _calendar) {
        var _this = this;
        this._parserFormatter = _parserFormatter;
        this._elRef = _elRef;
        this._vcRef = _vcRef;
        this._renderer = _renderer;
        this._cfr = _cfr;
        this._service = _service;
        this._calendar = _calendar;
        this._cRef = null;
        /**
            * Placement of a datepicker popup accepts:
            *    "top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right",
            *    "left", "left-top", "left-bottom", "right", "right-top", "right-bottom"
            * and array of above values.
            */
        this.placement = 'bottom-left';
        /**
         * An event fired when navigation happens and currently displayed month changes.
         * See NgbDatepickerNavigateEvent for the payload info.
         */
        this.navigate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this._onChange = function (_) { };
        this._onTouched = function () { };
        this._validatorChange = function () { };
        this._zoneSubscription = ngZone.onStable.subscribe(function () {
            if (_this._cRef) {
                Object(__WEBPACK_IMPORTED_MODULE_5__util_positioning__["a" /* positionElements */])(_this._elRef.nativeElement, _this._cRef.location.nativeElement, _this.placement);
            }
        });
    }
    NgbInputDatepicker.prototype.registerOnChange = function (fn) { this._onChange = fn; };
    NgbInputDatepicker.prototype.registerOnTouched = function (fn) { this._onTouched = fn; };
    NgbInputDatepicker.prototype.registerOnValidatorChange = function (fn) { this._validatorChange = fn; };
    ;
    NgbInputDatepicker.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setProperty(this._elRef.nativeElement, 'disabled', isDisabled);
        if (this.isOpen()) {
            this._cRef.instance.setDisabledState(isDisabled);
        }
    };
    NgbInputDatepicker.prototype.validate = function (c) {
        var value = c.value;
        if (value === null || value === undefined) {
            return null;
        }
        if (!this._calendar.isValid(value)) {
            return { 'ngbDate': { invalid: c.value } };
        }
        if (this.minDate && __WEBPACK_IMPORTED_MODULE_2__ngb_date__["a" /* NgbDate */].from(value).before(__WEBPACK_IMPORTED_MODULE_2__ngb_date__["a" /* NgbDate */].from(this.minDate))) {
            return { 'ngbDate': { requiredBefore: this.minDate } };
        }
        if (this.maxDate && __WEBPACK_IMPORTED_MODULE_2__ngb_date__["a" /* NgbDate */].from(value).after(__WEBPACK_IMPORTED_MODULE_2__ngb_date__["a" /* NgbDate */].from(this.maxDate))) {
            return { 'ngbDate': { requiredAfter: this.maxDate } };
        }
    };
    NgbInputDatepicker.prototype.writeValue = function (value) {
        var ngbDate = value ? new __WEBPACK_IMPORTED_MODULE_2__ngb_date__["a" /* NgbDate */](value.year, value.month, value.day) : null;
        this._model = this._calendar.isValid(value) ? ngbDate : null;
        this._writeModelValue(this._model);
    };
    NgbInputDatepicker.prototype.manualDateChange = function (value, updateView) {
        if (updateView === void 0) { updateView = false; }
        this._model = this._service.toValidDate(this._parserFormatter.parse(value), null);
        this._onChange(this._model ? this._model.toStruct() : (value === '' ? null : value));
        if (updateView && this._model) {
            this._writeModelValue(this._model);
        }
    };
    NgbInputDatepicker.prototype.isOpen = function () { return !!this._cRef; };
    /**
     * Opens the datepicker with the selected date indicated by the ngModel value.
     */
    NgbInputDatepicker.prototype.open = function () {
        var _this = this;
        if (!this.isOpen()) {
            var cf = this._cfr.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_3__datepicker__["a" /* NgbDatepicker */]);
            this._cRef = this._vcRef.createComponent(cf);
            this._applyPopupStyling(this._cRef.location.nativeElement);
            this._cRef.instance.writeValue(this._model);
            this._applyDatepickerInputs(this._cRef.instance);
            this._subscribeForDatepickerOutputs(this._cRef.instance);
            this._cRef.instance.ngOnInit();
            // date selection event handling
            this._cRef.instance.registerOnChange(function (selectedDate) {
                _this.writeValue(selectedDate);
                _this._onChange(selectedDate);
                _this.close();
            });
            // focus handling
            this._cRef.instance.focus();
        }
    };
    /**
     * Closes the datepicker popup.
     */
    NgbInputDatepicker.prototype.close = function () {
        if (this.isOpen()) {
            this._vcRef.remove(this._vcRef.indexOf(this._cRef.hostView));
            this._cRef = null;
        }
    };
    /**
     * Toggles the datepicker popup (opens when closed and closes when opened).
     */
    NgbInputDatepicker.prototype.toggle = function () {
        if (this.isOpen()) {
            this.close();
        }
        else {
            this.open();
        }
    };
    /**
     * Navigates current view to provided date.
     * With default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
     * If nothing or invalid date provided calendar will open current month.
     * Use 'startDate' input as an alternative
     */
    NgbInputDatepicker.prototype.navigateTo = function (date) {
        if (this.isOpen()) {
            this._cRef.instance.navigateTo(date);
        }
    };
    NgbInputDatepicker.prototype.onBlur = function () { this._onTouched(); };
    NgbInputDatepicker.prototype.ngOnChanges = function (changes) {
        if (changes['minDate'] || changes['maxDate']) {
            this._validatorChange();
        }
    };
    NgbInputDatepicker.prototype.ngOnDestroy = function () {
        this.close();
        this._zoneSubscription.unsubscribe();
    };
    NgbInputDatepicker.prototype._applyDatepickerInputs = function (datepickerInstance) {
        var _this = this;
        ['dayTemplate', 'displayMonths', 'firstDayOfWeek', 'markDisabled', 'minDate', 'maxDate', 'navigation',
            'outsideDays', 'showNavigation', 'showWeekdays', 'showWeekNumbers']
            .forEach(function (optionName) {
            if (_this[optionName] !== undefined) {
                datepickerInstance[optionName] = _this[optionName];
            }
        });
        datepickerInstance.startDate = this.startDate || this._model;
    };
    NgbInputDatepicker.prototype._applyPopupStyling = function (nativeElement) {
        this._renderer.addClass(nativeElement, 'dropdown-menu');
        this._renderer.setStyle(nativeElement, 'padding', '0');
    };
    NgbInputDatepicker.prototype._subscribeForDatepickerOutputs = function (datepickerInstance) {
        var _this = this;
        datepickerInstance.navigate.subscribe(function (date) { return _this.navigate.emit(date); });
    };
    NgbInputDatepicker.prototype._writeModelValue = function (model) {
        this._renderer.setProperty(this._elRef.nativeElement, 'value', this._parserFormatter.format(model));
        if (this.isOpen()) {
            this._cRef.instance.writeValue(model);
            this._onTouched();
        }
    };
    return NgbInputDatepicker;
}());

NgbInputDatepicker.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{
                selector: 'input[ngbDatepicker]',
                exportAs: 'ngbDatepicker',
                host: {
                    '(input)': 'manualDateChange($event.target.value)',
                    '(change)': 'manualDateChange($event.target.value, true)',
                    '(keyup.esc)': 'close()',
                    '(blur)': 'onBlur()'
                },
                providers: [NGB_DATEPICKER_VALUE_ACCESSOR, NGB_DATEPICKER_VALIDATOR, __WEBPACK_IMPORTED_MODULE_7__datepicker_service__["a" /* NgbDatepickerService */]]
            },] },
];
/** @nocollapse */
NgbInputDatepicker.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_4__ngb_date_parser_formatter__["b" /* NgbDateParserFormatter */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewContainerRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Renderer2 */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ComponentFactoryResolver */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */], },
    { type: __WEBPACK_IMPORTED_MODULE_7__datepicker_service__["a" /* NgbDatepickerService */], },
    { type: __WEBPACK_IMPORTED_MODULE_6__ngb_calendar__["a" /* NgbCalendar */], },
]; };
NgbInputDatepicker.propDecorators = {
    'dayTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'displayMonths': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'firstDayOfWeek': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'markDisabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'minDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'maxDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'navigation': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'outsideDays': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'placement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'showWeekdays': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'showWeekNumbers': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'startDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'navigate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
};
//# sourceMappingURL=datepicker-input.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/datepicker/datepicker-keymap-service.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbDatepickerKeyMapService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datepicker_service__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/datepicker/datepicker-service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngb_calendar__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_util__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/util/util.js");




var Key;
(function (Key) {
    Key[Key["Enter"] = 13] = "Enter";
    Key[Key["Space"] = 32] = "Space";
    Key[Key["PageUp"] = 33] = "PageUp";
    Key[Key["PageDown"] = 34] = "PageDown";
    Key[Key["End"] = 35] = "End";
    Key[Key["Home"] = 36] = "Home";
    Key[Key["ArrowLeft"] = 37] = "ArrowLeft";
    Key[Key["ArrowUp"] = 38] = "ArrowUp";
    Key[Key["ArrowRight"] = 39] = "ArrowRight";
    Key[Key["ArrowDown"] = 40] = "ArrowDown";
})(Key || (Key = {}));
var NgbDatepickerKeyMapService = (function () {
    function NgbDatepickerKeyMapService(_service, _calendar) {
        var _this = this;
        this._service = _service;
        this._calendar = _calendar;
        _service.model$.subscribe(function (model) {
            _this._minDate = model.minDate;
            _this._maxDate = model.maxDate;
            _this._firstViewDate = model.firstDate;
            _this._lastViewDate = model.lastDate;
        });
    }
    NgbDatepickerKeyMapService.prototype.processKey = function (event) {
        if (Key[Object(__WEBPACK_IMPORTED_MODULE_3__util_util__["i" /* toString */])(event.which)]) {
            switch (event.which) {
                case Key.PageUp:
                    this._service.focusMove(event.shiftKey ? 'y' : 'm', -1);
                    break;
                case Key.PageDown:
                    this._service.focusMove(event.shiftKey ? 'y' : 'm', 1);
                    break;
                case Key.End:
                    this._service.focus(event.shiftKey ? this._maxDate : this._lastViewDate);
                    break;
                case Key.Home:
                    this._service.focus(event.shiftKey ? this._minDate : this._firstViewDate);
                    break;
                case Key.ArrowLeft:
                    this._service.focusMove('d', -1);
                    break;
                case Key.ArrowUp:
                    this._service.focusMove('d', -this._calendar.getDaysPerWeek());
                    break;
                case Key.ArrowRight:
                    this._service.focusMove('d', 1);
                    break;
                case Key.ArrowDown:
                    this._service.focusMove('d', this._calendar.getDaysPerWeek());
                    break;
                case Key.Enter:
                case Key.Space:
                    this._service.focusSelect();
                    break;
                default:
                    return;
            }
            event.preventDefault();
            event.stopPropagation();
        }
    };
    return NgbDatepickerKeyMapService;
}());

NgbDatepickerKeyMapService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */] },
];
/** @nocollapse */
NgbDatepickerKeyMapService.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__datepicker_service__["a" /* NgbDatepickerService */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__ngb_calendar__["a" /* NgbCalendar */], },
]; };
//# sourceMappingURL=datepicker-keymap-service.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/datepicker/datepicker-month-view.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbDatepickerMonthView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngb_date__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/datepicker/ngb-date.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datepicker_i18n__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/datepicker/datepicker-i18n.js");



var NgbDatepickerMonthView = (function () {
    function NgbDatepickerMonthView(i18n) {
        this.i18n = i18n;
        this.select = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    NgbDatepickerMonthView.prototype.doSelect = function (day) {
        if (!day.context.disabled && !this.isHidden(day)) {
            this.select.emit(__WEBPACK_IMPORTED_MODULE_1__ngb_date__["a" /* NgbDate */].from(day.date));
        }
    };
    NgbDatepickerMonthView.prototype.isCollapsed = function (week) {
        return this.outsideDays === 'collapsed' && week.days[0].date.month !== this.month.number &&
            week.days[week.days.length - 1].date.month !== this.month.number;
    };
    NgbDatepickerMonthView.prototype.isHidden = function (day) {
        return (this.outsideDays === 'hidden' || this.outsideDays === 'collapsed') && this.month.number !== day.date.month;
    };
    return NgbDatepickerMonthView;
}());

NgbDatepickerMonthView.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'ngb-datepicker-month-view',
                host: { 'class': 'd-block' },
                styles: ["\n    .ngb-dp-weekday, .ngb-dp-week-number {\n      line-height: 2rem;\n    }\n    .ngb-dp-day, .ngb-dp-weekday, .ngb-dp-week-number {\n      width: 2rem;\n      height: 2rem;\n    }\n    .ngb-dp-day {\n      cursor: pointer;\n    }\n    .ngb-dp-day.disabled, .ngb-dp-day.hidden {\n      cursor: default;\n    }\n  "],
                template: "\n    <div *ngIf=\"showWeekdays\" class=\"ngb-dp-week d-flex\">\n      <div *ngIf=\"showWeekNumbers\" class=\"ngb-dp-weekday\"></div>\n      <div *ngFor=\"let w of month.weekdays\" class=\"ngb-dp-weekday small text-center text-info font-italic\">\n        {{ i18n.getWeekdayShortName(w) }}\n      </div>\n    </div>\n    <ng-template ngFor let-week [ngForOf]=\"month.weeks\">\n      <div *ngIf=\"!isCollapsed(week)\" class=\"ngb-dp-week d-flex\">\n        <div *ngIf=\"showWeekNumbers\" class=\"ngb-dp-week-number small text-center font-italic text-muted\">{{ week.number }}</div>\n        <div *ngFor=\"let day of week.days\" (click)=\"doSelect(day)\" class=\"ngb-dp-day\" [class.disabled]=\"day.context.disabled\"\n         [class.hidden]=\"isHidden(day)\">\n          <ng-template [ngIf]=\"!isHidden(day)\">\n            <ng-template [ngTemplateOutlet]=\"dayTemplate\" [ngTemplateOutletContext]=\"day.context\"></ng-template>\n          </ng-template>\n        </div>\n      </div>\n    </ng-template>\n  "
            },] },
];
/** @nocollapse */
NgbDatepickerMonthView.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__datepicker_i18n__["a" /* NgbDatepickerI18n */], },
]; };
NgbDatepickerMonthView.propDecorators = {
    'dayTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'month': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'outsideDays': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'showWeekdays': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'showWeekNumbers': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'select': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
};
//# sourceMappingURL=datepicker-month-view.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/datepicker/datepicker-navigation-select.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbDatepickerNavigationSelect; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngb_date__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/datepicker/ngb-date.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_util__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__datepicker_i18n__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/datepicker/datepicker-i18n.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngb_calendar__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar.js");





var NgbDatepickerNavigationSelect = (function () {
    function NgbDatepickerNavigationSelect(i18n, calendar) {
        this.i18n = i18n;
        this.calendar = calendar;
        this.years = [];
        this.select = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.months = calendar.getMonths();
    }
    NgbDatepickerNavigationSelect.prototype.ngOnChanges = function (changes) {
        if (changes['maxDate'] || changes['minDate'] || changes['date']) {
            this._generateYears();
            this._generateMonths();
        }
    };
    NgbDatepickerNavigationSelect.prototype.changeMonth = function (month) { this.select.emit(new __WEBPACK_IMPORTED_MODULE_1__ngb_date__["a" /* NgbDate */](this.date.year, Object(__WEBPACK_IMPORTED_MODULE_2__util_util__["h" /* toInteger */])(month), 1)); };
    NgbDatepickerNavigationSelect.prototype.changeYear = function (year) { this.select.emit(new __WEBPACK_IMPORTED_MODULE_1__ngb_date__["a" /* NgbDate */](Object(__WEBPACK_IMPORTED_MODULE_2__util_util__["h" /* toInteger */])(year), this.date.month, 1)); };
    NgbDatepickerNavigationSelect.prototype._generateMonths = function () {
        var _this = this;
        this.months = this.calendar.getMonths();
        if (this.date && this.date.year === this.minDate.year) {
            var index = this.months.findIndex(function (month) { return month === _this.minDate.month; });
            this.months = this.months.slice(index);
        }
        if (this.date && this.date.year === this.maxDate.year) {
            var index = this.months.findIndex(function (month) { return month === _this.maxDate.month; });
            this.months = this.months.slice(0, index + 1);
        }
    };
    NgbDatepickerNavigationSelect.prototype._generateYears = function () {
        var _this = this;
        this.years = Array.from({ length: this.maxDate.year - this.minDate.year + 1 }, function (e, i) { return _this.minDate.year + i; });
    };
    return NgbDatepickerNavigationSelect;
}());

NgbDatepickerNavigationSelect.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'ngb-datepicker-navigation-select',
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
                styles: ["\n    select {\n      /* to align with btn-sm */\n      padding: 0.25rem 0.5rem;\n      font-size: 0.875rem;      \n      line-height: 1.25;\n      /* to cancel the custom height set by custom-select */\n      height: inherit;\n      width: 50%;\n    }\n  "],
                template: "\n    <select\n      [disabled]=\"disabled\"\n      class=\"custom-select d-inline-block\"\n      [value]=\"date?.month\"\n      (change)=\"changeMonth($event.target.value)\"\n      tabindex=\"-1\">\n        <option *ngFor=\"let m of months\" [value]=\"m\">{{ i18n.getMonthShortName(m) }}</option>\n    </select><select\n      [disabled]=\"disabled\"\n      class=\"custom-select d-inline-block\"\n      [value]=\"date?.year\"\n      (change)=\"changeYear($event.target.value)\"\n      tabindex=\"-1\">\n        <option *ngFor=\"let y of years\" [value]=\"y\">{{ y }}</option>\n    </select> \n  "
            },] },
];
/** @nocollapse */
NgbDatepickerNavigationSelect.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_3__datepicker_i18n__["a" /* NgbDatepickerI18n */], },
    { type: __WEBPACK_IMPORTED_MODULE_4__ngb_calendar__["a" /* NgbCalendar */], },
]; };
NgbDatepickerNavigationSelect.propDecorators = {
    'date': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'maxDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'minDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'select': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
};
//# sourceMappingURL=datepicker-navigation-select.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/datepicker/datepicker-navigation.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbDatepickerNavigation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datepicker_view_model__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/datepicker/datepicker-view-model.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datepicker_i18n__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/datepicker/datepicker-i18n.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngb_calendar__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar.js");




var NgbDatepickerNavigation = (function () {
    function NgbDatepickerNavigation(i18n, _calendar) {
        this.i18n = i18n;
        this._calendar = _calendar;
        this.navigation = __WEBPACK_IMPORTED_MODULE_1__datepicker_view_model__["a" /* NavigationEvent */];
        this.navigate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.select = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    NgbDatepickerNavigation.prototype.doNavigate = function (event) { this.navigate.emit(event); };
    NgbDatepickerNavigation.prototype.nextDisabled = function () {
        return this.disabled || (this.maxDate && this._calendar.getNext(this.date, 'm').after(this.maxDate));
    };
    NgbDatepickerNavigation.prototype.prevDisabled = function () {
        var prevDate = this._calendar.getPrev(this.date, 'm');
        return this.disabled || (this.minDate && prevDate.year <= this.minDate.year && prevDate.month < this.minDate.month);
    };
    NgbDatepickerNavigation.prototype.selectDate = function (date) { this.select.emit(date); };
    return NgbDatepickerNavigation;
}());

NgbDatepickerNavigation.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'ngb-datepicker-navigation',
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
                host: { 'class': 'd-flex justify-content-between', '[class.collapsed]': '!showSelect' },
                styles: ["\n    :host {\n      height: 2rem;\n      line-height: 1.85rem;\n    }\n    :host.collapsed {\n      margin-bottom: -2rem;        \n    }\n    .ngb-dp-navigation-chevron::before {\n      border-style: solid;\n      border-width: 0.2em 0.2em 0 0;\n      content: '';\n      display: inline-block;\n      height: 0.75em;\n      transform: rotate(-135deg);\n      -webkit-transform: rotate(-135deg);\n      -ms-transform: rotate(-135deg);\n      width: 0.75em;\n      margin: 0 0 0 0.5rem;\n    }    \n    .ngb-dp-navigation-chevron.right:before {\n      -webkit-transform: rotate(45deg);\n      -ms-transform: rotate(45deg);\n      transform: rotate(45deg);\n      margin: 0 0.5rem 0 0;\n    }\n    .btn-link {\n      cursor: pointer;\n      outline: 0;\n    }\n    .btn-link[disabled] {\n      cursor: not-allowed;\n      opacity: .65;\n    }    \n  "],
                template: "\n    <button type=\"button\" class=\"btn-link\" (click)=\"!!doNavigate(navigation.PREV)\" [disabled]=\"prevDisabled()\" tabindex=\"-1\">\n      <span class=\"ngb-dp-navigation-chevron\"></span>    \n    </button>\n    \n    <ngb-datepicker-navigation-select *ngIf=\"showSelect\" class=\"d-block\" [style.width.rem]=\"months * 9\"\n      [date]=\"date\"\n      [minDate]=\"minDate\"\n      [maxDate]=\"maxDate\"\n      [disabled] = \"disabled\"\n      (select)=\"selectDate($event)\">\n    </ngb-datepicker-navigation-select>\n    \n    <button type=\"button\" class=\"btn-link\" (click)=\"!!doNavigate(navigation.NEXT)\" [disabled]=\"nextDisabled()\" tabindex=\"-1\">\n      <span class=\"ngb-dp-navigation-chevron right\"></span>\n    </button>\n  "
            },] },
];
/** @nocollapse */
NgbDatepickerNavigation.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__datepicker_i18n__["a" /* NgbDatepickerI18n */], },
    { type: __WEBPACK_IMPORTED_MODULE_3__ngb_calendar__["a" /* NgbCalendar */], },
]; };
NgbDatepickerNavigation.propDecorators = {
    'date': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'maxDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'minDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'months': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'showSelect': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'showWeekNumbers': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'navigate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
    'select': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
};
//# sourceMappingURL=datepicker-navigation.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/datepicker/datepicker-service.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbDatepickerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngb_calendar__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngb_date__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/datepicker/ngb-date.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_util__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__datepicker_tools__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/datepicker/datepicker-tools.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/operator/filter.js");







var NgbDatepickerService = (function () {
    function NgbDatepickerService(_calendar) {
        this._calendar = _calendar;
        this._model$ = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["a" /* Subject */]();
        this._state = { disabled: false, displayMonths: 1, firstDayOfWeek: 1, focusVisible: false, months: [], selectedDate: null };
    }
    Object.defineProperty(NgbDatepickerService.prototype, "model$", {
        get: function () { return __WEBPACK_IMPORTED_MODULE_6_rxjs_operator_filter__["a" /* filter */].call(this._model$.asObservable(), function (model) { return model.months.length > 0; }); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbDatepickerService.prototype, "disabled", {
        set: function (disabled) {
            if (this._state.disabled !== disabled) {
                this._nextState({ disabled: disabled });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbDatepickerService.prototype, "displayMonths", {
        set: function (months) {
            if (Object(__WEBPACK_IMPORTED_MODULE_3__util_util__["c" /* isInteger */])(months) && months > 0 && this._state.displayMonths !== months) {
                this._nextState({ displayMonths: months });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbDatepickerService.prototype, "firstDayOfWeek", {
        set: function (firstDayOfWeek) {
            if (Object(__WEBPACK_IMPORTED_MODULE_3__util_util__["c" /* isInteger */])(firstDayOfWeek) && firstDayOfWeek >= 0 && this._state.firstDayOfWeek !== firstDayOfWeek) {
                this._nextState({ firstDayOfWeek: firstDayOfWeek });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbDatepickerService.prototype, "focusVisible", {
        set: function (focusVisible) {
            if (this._state.focusVisible !== focusVisible && !this._state.disabled) {
                this._nextState({ focusVisible: focusVisible });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbDatepickerService.prototype, "maxDate", {
        set: function (date) {
            if (date === undefined || this._calendar.isValid(date) && Object(__WEBPACK_IMPORTED_MODULE_5__datepicker_tools__["d" /* isChangedDate */])(this._state.maxDate, date)) {
                this._nextState({ maxDate: date });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbDatepickerService.prototype, "markDisabled", {
        set: function (markDisabled) {
            if (this._state.markDisabled !== markDisabled) {
                this._nextState({ markDisabled: markDisabled });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbDatepickerService.prototype, "minDate", {
        set: function (date) {
            if (date === undefined || this._calendar.isValid(date) && Object(__WEBPACK_IMPORTED_MODULE_5__datepicker_tools__["d" /* isChangedDate */])(this._state.minDate, date)) {
                this._nextState({ minDate: date });
            }
        },
        enumerable: true,
        configurable: true
    });
    NgbDatepickerService.prototype.focus = function (date) {
        if (!this._state.disabled && this._calendar.isValid(date) && Object(__WEBPACK_IMPORTED_MODULE_5__datepicker_tools__["d" /* isChangedDate */])(this._state.focusDate, date)) {
            this._nextState({ focusDate: date });
        }
    };
    NgbDatepickerService.prototype.focusMove = function (period, number) {
        this.focus(this._calendar.getNext(this._state.focusDate, period, number));
    };
    NgbDatepickerService.prototype.focusSelect = function () {
        if (Object(__WEBPACK_IMPORTED_MODULE_5__datepicker_tools__["e" /* isDateSelectable */])(this._state.months, this._state.focusDate)) {
            this.select(this._state.focusDate);
        }
    };
    NgbDatepickerService.prototype.open = function (date) {
        if (!this._state.disabled && this._calendar.isValid(date)) {
            this._nextState({ firstDate: date });
        }
    };
    NgbDatepickerService.prototype.select = function (date) {
        var validDate = this.toValidDate(date, null);
        if (!this._state.disabled && Object(__WEBPACK_IMPORTED_MODULE_5__datepicker_tools__["d" /* isChangedDate */])(this._state.selectedDate, validDate)) {
            this._nextState({ selectedDate: validDate });
        }
    };
    NgbDatepickerService.prototype.toValidDate = function (date, defaultValue) {
        var ngbDate = __WEBPACK_IMPORTED_MODULE_1__ngb_date__["a" /* NgbDate */].from(date);
        if (defaultValue === undefined) {
            defaultValue = this._calendar.getToday();
        }
        return this._calendar.isValid(ngbDate) ? ngbDate : defaultValue;
    };
    NgbDatepickerService.prototype._nextState = function (patch) {
        var newState = this._updateState(patch);
        this._patchContexts(newState);
        this._state = newState;
        this._model$.next(this._state);
    };
    NgbDatepickerService.prototype._patchContexts = function (state) {
        state.months.forEach(function (month) {
            month.weeks.forEach(function (week) {
                week.days.forEach(function (day) {
                    // patch focus flag
                    if (state.focusDate) {
                        day.context.focused = state.focusDate.equals(day.date) && state.focusVisible;
                    }
                    // override context disabled
                    if (state.disabled === true) {
                        day.context.disabled = true;
                    }
                    // patch selection flag
                    if (state.selectedDate !== undefined) {
                        day.context.selected = state.selectedDate !== null && state.selectedDate.equals(day.date);
                    }
                });
            });
        });
    };
    NgbDatepickerService.prototype._updateState = function (patch) {
        // patching fields
        var state = Object.assign({}, this._state, patch);
        var startDate = state.firstDate;
        // min/max dates changed
        if ('minDate' in patch || 'maxDate' in patch) {
            Object(__WEBPACK_IMPORTED_MODULE_5__datepicker_tools__["c" /* checkMinBeforeMax */])(state.minDate, state.maxDate);
            state.focusDate = Object(__WEBPACK_IMPORTED_MODULE_5__datepicker_tools__["b" /* checkDateInRange */])(state.focusDate, state.minDate, state.maxDate);
            state.firstDate = Object(__WEBPACK_IMPORTED_MODULE_5__datepicker_tools__["b" /* checkDateInRange */])(state.firstDate, state.minDate, state.maxDate);
            startDate = state.focusDate;
        }
        // disabled
        if ('disabled' in patch) {
            state.focusVisible = false;
        }
        // focus date changed
        if ('focusDate' in patch) {
            state.focusDate = Object(__WEBPACK_IMPORTED_MODULE_5__datepicker_tools__["b" /* checkDateInRange */])(state.focusDate, state.minDate, state.maxDate);
            startDate = state.focusDate;
            // nothing to rebuild if only focus changed and it is still visible
            if (state.months.length !== 0 && !state.focusDate.before(state.firstDate) &&
                !state.focusDate.after(state.lastDate)) {
                return state;
            }
        }
        // first date changed
        if ('firstDate' in patch) {
            state.firstDate = Object(__WEBPACK_IMPORTED_MODULE_5__datepicker_tools__["b" /* checkDateInRange */])(state.firstDate, state.minDate, state.maxDate);
            startDate = state.firstDate;
        }
        // rebuilding months
        if (startDate) {
            var forceRebuild = 'firstDayOfWeek' in patch || 'markDisabled' in patch || 'minDate' in patch ||
                'maxDate' in patch || 'disabled' in patch;
            var months = Object(__WEBPACK_IMPORTED_MODULE_5__datepicker_tools__["a" /* buildMonths */])(this._calendar, state.months, startDate, state.minDate, state.maxDate, state.displayMonths, state.firstDayOfWeek, state.markDisabled, forceRebuild);
            // updating months and boundary dates
            state.months = months;
            state.firstDate = months.length > 0 ? months[0].firstDate : undefined;
            state.lastDate = months.length > 0 ? months[months.length - 1].lastDate : undefined;
            // adjusting focus after months were built
            if ('firstDate' in patch) {
                if (state.focusDate === undefined || state.focusDate.before(state.firstDate) ||
                    state.focusDate.after(state.lastDate)) {
                    state.focusDate = startDate;
                }
            }
        }
        return state;
    };
    return NgbDatepickerService;
}());

NgbDatepickerService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["C" /* Injectable */] },
];
/** @nocollapse */
NgbDatepickerService.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__ngb_calendar__["a" /* NgbCalendar */], },
]; };
//# sourceMappingURL=datepicker-service.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/datepicker/datepicker-tools.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = isChangedDate;
/* unused harmony export dateComparator */
/* harmony export (immutable) */ __webpack_exports__["c"] = checkMinBeforeMax;
/* harmony export (immutable) */ __webpack_exports__["b"] = checkDateInRange;
/* harmony export (immutable) */ __webpack_exports__["e"] = isDateSelectable;
/* harmony export (immutable) */ __webpack_exports__["a"] = buildMonths;
/* unused harmony export buildMonth */
/* unused harmony export getFirstViewDate */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngb_date__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/datepicker/ngb-date.js");

function isChangedDate(prev, next) {
    return !dateComparator(prev, next);
}
function dateComparator(prev, next) {
    return (!prev && !next) || (!!prev && !!next && prev.equals(next));
}
function checkMinBeforeMax(minDate, maxDate) {
    if (maxDate && minDate && maxDate.before(minDate)) {
        throw new Error("'maxDate' " + maxDate + " should be greater than 'minDate' " + minDate);
    }
}
function checkDateInRange(date, minDate, maxDate) {
    if (date && minDate && date.before(minDate)) {
        return __WEBPACK_IMPORTED_MODULE_0__ngb_date__["a" /* NgbDate */].from(minDate);
    }
    if (date && maxDate && date.after(maxDate)) {
        return __WEBPACK_IMPORTED_MODULE_0__ngb_date__["a" /* NgbDate */].from(maxDate);
    }
    return date;
}
function isDateSelectable(months, date) {
    var selectable = false;
    var month = months.find(function (curMonth) { return curMonth.year === date.year && curMonth.number === date.month; });
    if (month) {
        month.weeks.find(function (week) {
            var day = week.days.find(function (day) { return date.equals(day.date); });
            if (day && !day.context.disabled) {
                selectable = true;
            }
            return !!day;
        });
    }
    return selectable;
}
function buildMonths(calendar, months, date, minDate, maxDate, displayMonths, firstDayOfWeek, markDisabled, force) {
    var newMonths = [];
    var _loop_1 = function (i) {
        var newDate = calendar.getNext(date, 'm', i);
        var index = months.findIndex(function (month) { return month.firstDate.equals(newDate); });
        if (force || index === -1) {
            newMonths.push(buildMonth(calendar, newDate, minDate, maxDate, firstDayOfWeek, markDisabled));
        }
        else {
            newMonths.push(months[index]);
        }
    };
    for (var i = 0; i < displayMonths; i++) {
        _loop_1(i);
    }
    return newMonths;
}
function buildMonth(calendar, date, minDate, maxDate, firstDayOfWeek, markDisabled) {
    var month = { firstDate: null, lastDate: null, number: date.month, year: date.year, weeks: [], weekdays: [] };
    date = getFirstViewDate(calendar, date, firstDayOfWeek);
    // month has weeks
    for (var week = 0; week < calendar.getWeeksPerMonth(); week++) {
        var days = [];
        // week has days
        for (var day = 0; day < calendar.getDaysPerWeek(); day++) {
            if (week === 0) {
                month.weekdays.push(calendar.getWeekday(date));
            }
            var newDate = new __WEBPACK_IMPORTED_MODULE_0__ngb_date__["a" /* NgbDate */](date.year, date.month, date.day);
            var nextDate = calendar.getNext(newDate);
            // marking date as disabled
            var disabled = !!((minDate && newDate.before(minDate)) || (maxDate && newDate.after(maxDate)));
            if (!disabled && markDisabled) {
                disabled = markDisabled(newDate, { month: month.number, year: month.year });
            }
            // saving first date of the month
            if (month.firstDate === null && newDate.month === month.number) {
                month.firstDate = newDate;
            }
            // saving last date of the month
            if (newDate.month === month.number && nextDate.month !== month.number) {
                month.lastDate = newDate;
            }
            days.push({
                date: newDate,
                context: {
                    date: { year: newDate.year, month: newDate.month, day: newDate.day },
                    currentMonth: month.number,
                    disabled: disabled,
                    focused: false,
                    selected: false
                }
            });
            date = nextDate;
        }
        month.weeks.push({ number: calendar.getWeekNumber(days.map(function (day) { return __WEBPACK_IMPORTED_MODULE_0__ngb_date__["a" /* NgbDate */].from(day.date); }), firstDayOfWeek), days: days });
    }
    return month;
}
function getFirstViewDate(calendar, date, firstDayOfWeek) {
    var currentMonth = date.month;
    var today = new __WEBPACK_IMPORTED_MODULE_0__ngb_date__["a" /* NgbDate */](date.year, date.month, date.day);
    var yesterday = calendar.getPrev(today);
    var firstDayOfCurrentMonthIsAlsoFirstDayOfWeek = function () { return today.month !== yesterday.month && firstDayOfWeek === calendar.getWeekday(today); };
    var reachedTheFirstDayOfTheLastWeekOfPreviousMonth = function () { return today.month !== currentMonth && firstDayOfWeek === calendar.getWeekday(today); };
    // going back in time
    while (!reachedTheFirstDayOfTheLastWeekOfPreviousMonth() && !firstDayOfCurrentMonthIsAlsoFirstDayOfWeek()) {
        today = new __WEBPACK_IMPORTED_MODULE_0__ngb_date__["a" /* NgbDate */](yesterday.year, yesterday.month, yesterday.day);
        yesterday = calendar.getPrev(yesterday);
    }
    return today;
}
//# sourceMappingURL=datepicker-tools.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/datepicker/datepicker-view-model.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationEvent; });
// clang-format on
var NavigationEvent;
(function (NavigationEvent) {
    NavigationEvent[NavigationEvent["PREV"] = 0] = "PREV";
    NavigationEvent[NavigationEvent["NEXT"] = 1] = "NEXT";
})(NavigationEvent || (NavigationEvent = {}));
//# sourceMappingURL=datepicker-view-model.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/datepicker/datepicker.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbDatepicker; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngb_calendar__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngb_date__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/datepicker/ngb-date.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__datepicker_service__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/datepicker/datepicker-service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__datepicker_keymap_service__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/datepicker/datepicker-keymap-service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__datepicker_view_model__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/datepicker/datepicker-view-model.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_util__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__datepicker_config__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/datepicker/datepicker-config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__datepicker_i18n__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/datepicker/datepicker-i18n.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__datepicker_tools__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/datepicker/datepicker-tools.js");











var NGB_DATEPICKER_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* forwardRef */])(function () { return NgbDatepicker; }),
    multi: true
};
/**
 * A lightweight and highly configurable datepicker directive
 */
var NgbDatepicker = (function () {
    function NgbDatepicker(_keyMapService, _service, _calendar, i18n, config, _cd, _elementRef) {
        var _this = this;
        this._keyMapService = _keyMapService;
        this._service = _service;
        this._calendar = _calendar;
        this.i18n = i18n;
        this._cd = _cd;
        this._elementRef = _elementRef;
        /**
         * An event fired when navigation happens and currently displayed month changes.
         * See NgbDatepickerNavigateEvent for the payload info.
         */
        this.navigate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onChange = function (_) { };
        this.onTouched = function () { };
        this.dayTemplate = config.dayTemplate;
        this.displayMonths = config.displayMonths;
        this.firstDayOfWeek = config.firstDayOfWeek;
        this.markDisabled = config.markDisabled;
        this.minDate = config.minDate;
        this.maxDate = config.maxDate;
        this.navigation = config.navigation;
        this.outsideDays = config.outsideDays;
        this.showWeekdays = config.showWeekdays;
        this.showWeekNumbers = config.showWeekNumbers;
        this.startDate = config.startDate;
        this._subscription = _service.model$.subscribe(function (model) {
            var newDate = model.firstDate;
            var oldDate = _this.model ? _this.model.firstDate : null;
            var newSelectedDate = model.selectedDate;
            var oldSelectedDate = _this.model ? _this.model.selectedDate : null;
            _this.model = model;
            // handling selection change
            if (Object(__WEBPACK_IMPORTED_MODULE_10__datepicker_tools__["d" /* isChangedDate */])(newSelectedDate, oldSelectedDate)) {
                _this.onTouched();
                _this.onChange(newSelectedDate ? { year: newSelectedDate.year, month: newSelectedDate.month, day: newSelectedDate.day } :
                    null);
            }
            // emitting navigation event if the first month changes
            if (!newDate.equals(oldDate)) {
                _this.navigate.emit({
                    current: oldDate ? { year: oldDate.year, month: oldDate.month } : null,
                    next: { year: newDate.year, month: newDate.month }
                });
            }
            _cd.markForCheck();
        });
    }
    /**
     * Manually focus the datepicker
     */
    NgbDatepicker.prototype.focus = function () { this._elementRef.nativeElement.focus(); };
    NgbDatepicker.prototype.getHeaderHeight = function () {
        var h = this.showWeekdays ? 6.25 : 4.25;
        return this.displayMonths === 1 || this.navigation !== 'select' ? h - 2 : h;
    };
    NgbDatepicker.prototype.getHeaderMargin = function () {
        var m = this.showWeekdays ? 2 : 0;
        return this.displayMonths !== 1 || this.navigation !== 'select' ? m + 2 : m;
    };
    /**
     * Navigates current view to provided date.
     * With default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
     * If nothing or invalid date provided calendar will open current month.
     * Use 'startDate' input as an alternative
     */
    NgbDatepicker.prototype.navigateTo = function (date) {
        this._service.open(date ? new __WEBPACK_IMPORTED_MODULE_3__ngb_date__["a" /* NgbDate */](date.year, date.month, 1) : this._calendar.getToday());
    };
    NgbDatepicker.prototype.ngOnDestroy = function () { this._subscription.unsubscribe(); };
    NgbDatepicker.prototype.ngOnInit = function () {
        if (this.model === undefined) {
            this._service.displayMonths = Object(__WEBPACK_IMPORTED_MODULE_7__util_util__["h" /* toInteger */])(this.displayMonths);
            this._service.markDisabled = this.markDisabled;
            this._service.firstDayOfWeek = this.firstDayOfWeek;
            this._setDates();
        }
    };
    NgbDatepicker.prototype.ngOnChanges = function (changes) {
        if (changes['displayMonths']) {
            this._service.displayMonths = Object(__WEBPACK_IMPORTED_MODULE_7__util_util__["h" /* toInteger */])(this.displayMonths);
        }
        if (changes['markDisabled']) {
            this._service.markDisabled = this.markDisabled;
        }
        if (changes['firstDayOfWeek']) {
            this._service.firstDayOfWeek = this.firstDayOfWeek;
        }
        this._setDates();
    };
    NgbDatepicker.prototype.onDateSelect = function (date) {
        this._service.focus(date);
        this.writeValue(date);
    };
    NgbDatepicker.prototype.onKeyDown = function (event) { this._keyMapService.processKey(event); };
    NgbDatepicker.prototype.onNavigateDateSelect = function (date) { this._service.open(date); };
    NgbDatepicker.prototype.onNavigateEvent = function (event) {
        switch (event) {
            case __WEBPACK_IMPORTED_MODULE_6__datepicker_view_model__["a" /* NavigationEvent */].PREV:
                this._service.open(this._calendar.getPrev(this.model.firstDate, 'm', 1));
                break;
            case __WEBPACK_IMPORTED_MODULE_6__datepicker_view_model__["a" /* NavigationEvent */].NEXT:
                this._service.open(this._calendar.getNext(this.model.firstDate, 'm', 1));
                break;
        }
    };
    NgbDatepicker.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    NgbDatepicker.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    NgbDatepicker.prototype.setDisabledState = function (isDisabled) { this._service.disabled = isDisabled; };
    NgbDatepicker.prototype.showFocus = function (focusVisible) { this._service.focusVisible = focusVisible; };
    NgbDatepicker.prototype.writeValue = function (value) { this._service.select(value); };
    NgbDatepicker.prototype._setDates = function () {
        var startDate = this._service.toValidDate(this.startDate, this._calendar.getToday());
        var minDate = this._service.toValidDate(this.minDate, this._calendar.getPrev(startDate, 'y', 10));
        var maxDate = this._service.toValidDate(this.maxDate, this._calendar.getPrev(this._calendar.getNext(startDate, 'y', 11)));
        this.minDate = { year: minDate.year, month: minDate.month, day: minDate.day };
        this.maxDate = { year: maxDate.year, month: maxDate.month, day: maxDate.day };
        this._service.minDate = minDate;
        this._service.maxDate = maxDate;
        this.navigateTo(startDate);
    };
    return NgbDatepicker;
}());

NgbDatepicker.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                exportAs: 'ngbDatepicker',
                selector: 'ngb-datepicker',
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
                host: {
                    'class': 'd-inline-block rounded',
                    'tabindex': '0',
                    '[attr.tabindex]': 'model.disabled ? undefined : "0"',
                    '(blur)': 'showFocus(false)',
                    '(focus)': 'showFocus(true)',
                    '(keydown)': 'onKeyDown($event)'
                },
                styles: ["\n    :host {\n      border: 1px solid rgba(0, 0, 0, 0.125);\n    }\n    .ngb-dp-header {\n      border-bottom: 1px solid rgba(0, 0, 0, 0.125);\n    }\n    .ngb-dp-month {\n      pointer-events: none;\n    }\n    ngb-datepicker-month-view {\n      pointer-events: auto;\n    }\n    .ngb-dp-month:first-child {\n      margin-left: 0 !important;\n    }\n    .ngb-dp-month-name {\n      font-size: larger;\n      height: 2rem;\n      line-height: 2rem;\n    }\n  "],
                template: "\n    <ng-template #dt let-date=\"date\" let-currentMonth=\"currentMonth\" let-selected=\"selected\" let-disabled=\"disabled\" let-focused=\"focused\">\n      <div ngbDatepickerDayView\n        [date]=\"date\"\n        [currentMonth]=\"currentMonth\"\n        [selected]=\"selected\"\n        [disabled]=\"disabled\"\n        [focused]=\"focused\">\n      </div>\n    </ng-template>\n\n    <div class=\"ngb-dp-header bg-light pt-1 rounded-top\" [style.height.rem]=\"getHeaderHeight()\"\n         [style.marginBottom.rem]=\"-getHeaderMargin()\">\n      <ngb-datepicker-navigation *ngIf=\"navigation !== 'none'\"\n        [date]=\"model.firstDate\"\n        [minDate]=\"model.minDate\"\n        [maxDate]=\"model.maxDate\"\n        [months]=\"model.months.length\"\n        [disabled]=\"model.disabled\"\n        [showWeekNumbers]=\"showWeekNumbers\"\n        [showSelect]=\"navigation === 'select'\"\n        (navigate)=\"onNavigateEvent($event)\"\n        (select)=\"onNavigateDateSelect($event)\">\n      </ngb-datepicker-navigation>\n    </div>\n\n    <div class=\"ngb-dp-months d-flex px-1 pb-1\">\n      <ng-template ngFor let-month [ngForOf]=\"model.months\" let-i=\"index\">\n        <div class=\"ngb-dp-month d-block ml-3\">\n          <div *ngIf=\"navigation !== 'select' || displayMonths > 1\" class=\"ngb-dp-month-name text-center\">\n            {{ i18n.getMonthFullName(month.number) }} {{ month.year }}\n          </div>\n          <ngb-datepicker-month-view\n            [month]=\"month\"\n            [dayTemplate]=\"dayTemplate || dt\"\n            [showWeekdays]=\"showWeekdays\"\n            [showWeekNumbers]=\"showWeekNumbers\"\n            [outsideDays]=\"(displayMonths === 1 ? outsideDays : 'hidden')\"\n            (select)=\"onDateSelect($event)\">\n          </ngb-datepicker-month-view>\n        </div>\n      </ng-template>\n    </div>\n  ",
                providers: [NGB_DATEPICKER_VALUE_ACCESSOR, __WEBPACK_IMPORTED_MODULE_4__datepicker_service__["a" /* NgbDatepickerService */], __WEBPACK_IMPORTED_MODULE_5__datepicker_keymap_service__["a" /* NgbDatepickerKeyMapService */]]
            },] },
];
/** @nocollapse */
NgbDatepicker.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_5__datepicker_keymap_service__["a" /* NgbDatepickerKeyMapService */], },
    { type: __WEBPACK_IMPORTED_MODULE_4__datepicker_service__["a" /* NgbDatepickerService */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__ngb_calendar__["a" /* NgbCalendar */], },
    { type: __WEBPACK_IMPORTED_MODULE_9__datepicker_i18n__["a" /* NgbDatepickerI18n */], },
    { type: __WEBPACK_IMPORTED_MODULE_8__datepicker_config__["a" /* NgbDatepickerConfig */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
]; };
NgbDatepicker.propDecorators = {
    'dayTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'displayMonths': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'firstDayOfWeek': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'markDisabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'maxDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'minDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'navigation': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'outsideDays': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'showWeekdays': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'showWeekNumbers': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'startDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'navigate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
};
//# sourceMappingURL=datepicker.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/datepicker/datepicker.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbDatepickerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datepicker__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/datepicker/datepicker.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__datepicker_month_view__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/datepicker/datepicker-month-view.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__datepicker_navigation__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/datepicker/datepicker-navigation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__datepicker_input__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/datepicker/datepicker-input.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__datepicker_day_view__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/datepicker/datepicker-day-view.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__datepicker_i18n__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/datepicker/datepicker-i18n.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngb_calendar__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngb_date_parser_formatter__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-parser-formatter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__datepicker_navigation_select__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/datepicker/datepicker-navigation-select.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__datepicker_config__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/datepicker/datepicker-config.js");
/* unused harmony reexport NgbDatepicker */
/* unused harmony reexport NgbInputDatepicker */
/* unused harmony reexport NgbCalendar */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__hijri_ngb_calendar_islamic_civil__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/datepicker/hijri/ngb-calendar-islamic-civil.js");
/* unused harmony reexport NgbCalendarIslamicCivil */
/* unused harmony reexport NgbDatepickerMonthView */
/* unused harmony reexport NgbDatepickerDayView */
/* unused harmony reexport NgbDatepickerNavigation */
/* unused harmony reexport NgbDatepickerNavigationSelect */
/* unused harmony reexport NgbDatepickerConfig */
/* unused harmony reexport NgbDatepickerI18n */
/* unused harmony reexport NgbDateParserFormatter */
























var NgbDatepickerModule = (function () {
    function NgbDatepickerModule() {
    }
    NgbDatepickerModule.forRoot = function () {
        return {
            ngModule: NgbDatepickerModule,
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_9__ngb_calendar__["a" /* NgbCalendar */], useClass: __WEBPACK_IMPORTED_MODULE_9__ngb_calendar__["b" /* NgbCalendarGregorian */] },
                { provide: __WEBPACK_IMPORTED_MODULE_8__datepicker_i18n__["a" /* NgbDatepickerI18n */], useClass: __WEBPACK_IMPORTED_MODULE_8__datepicker_i18n__["b" /* NgbDatepickerI18nDefault */] },
                { provide: __WEBPACK_IMPORTED_MODULE_10__ngb_date_parser_formatter__["b" /* NgbDateParserFormatter */], useClass: __WEBPACK_IMPORTED_MODULE_10__ngb_date_parser_formatter__["a" /* NgbDateISOParserFormatter */] }, __WEBPACK_IMPORTED_MODULE_12__datepicker_config__["a" /* NgbDatepickerConfig */]
            ]
        };
    };
    return NgbDatepickerModule;
}());

NgbDatepickerModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */], args: [{
                declarations: [
                    __WEBPACK_IMPORTED_MODULE_2__datepicker__["a" /* NgbDatepicker */], __WEBPACK_IMPORTED_MODULE_3__datepicker_month_view__["a" /* NgbDatepickerMonthView */], __WEBPACK_IMPORTED_MODULE_4__datepicker_navigation__["a" /* NgbDatepickerNavigation */], __WEBPACK_IMPORTED_MODULE_11__datepicker_navigation_select__["a" /* NgbDatepickerNavigationSelect */], __WEBPACK_IMPORTED_MODULE_7__datepicker_day_view__["a" /* NgbDatepickerDayView */],
                    __WEBPACK_IMPORTED_MODULE_5__datepicker_input__["a" /* NgbInputDatepicker */]
                ],
                exports: [__WEBPACK_IMPORTED_MODULE_2__datepicker__["a" /* NgbDatepicker */], __WEBPACK_IMPORTED_MODULE_5__datepicker_input__["a" /* NgbInputDatepicker */]],
                imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* FormsModule */]],
                entryComponents: [__WEBPACK_IMPORTED_MODULE_2__datepicker__["a" /* NgbDatepicker */]]
            },] },
];
/** @nocollapse */
NgbDatepickerModule.ctorParameters = function () { return []; };
//# sourceMappingURL=datepicker.module.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/datepicker/hijri/ngb-calendar-hijri.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbCalendarHijri; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngb_calendar__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_util__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/util/util.js");
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



var NgbCalendarHijri = (function (_super) {
    __extends(NgbCalendarHijri, _super);
    function NgbCalendarHijri() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NgbCalendarHijri.prototype.getDaysPerWeek = function () { return 7; };
    NgbCalendarHijri.prototype.getMonths = function () { return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; };
    NgbCalendarHijri.prototype.getWeeksPerMonth = function () { return 6; };
    NgbCalendarHijri.prototype.isValid = function (date) {
        return date && Object(__WEBPACK_IMPORTED_MODULE_2__util_util__["d" /* isNumber */])(date.year) && Object(__WEBPACK_IMPORTED_MODULE_2__util_util__["d" /* isNumber */])(date.month) && Object(__WEBPACK_IMPORTED_MODULE_2__util_util__["d" /* isNumber */])(date.day) &&
            !isNaN(this.toGregorian(date).getTime());
    };
    NgbCalendarHijri.prototype.setDay = function (date, day) {
        day = +day;
        var mDays = this.getDaysInIslamicMonth(date.month, date.year);
        if (day <= 0) {
            while (day <= 0) {
                date = this.setMonth(date, date.month - 1);
                mDays = this.getDaysInIslamicMonth(date.month, date.year);
                day += mDays;
            }
        }
        else if (day > mDays) {
            while (day > mDays) {
                day -= mDays;
                date = this.setMonth(date, date.month + 1);
                mDays = this.getDaysInIslamicMonth(date.month, date.year);
            }
        }
        date.day = day;
        return date;
    };
    NgbCalendarHijri.prototype.setMonth = function (date, month) {
        month = +month;
        date.year = date.year + Math.floor((month - 1) / 12);
        date.month = Math.floor(((month - 1) % 12 + 12) % 12) + 1;
        return date;
    };
    NgbCalendarHijri.prototype.setYear = function (date, yearValue) {
        date.year = +yearValue;
        return date;
    };
    NgbCalendarHijri.prototype._isIslamicLeapYear = function (year) { return (14 + 11 * year) % 30 < 11; };
    /**
     * Returns the start of Hijri Month.
     * `month` is 0 for Muharram, 1 for Safar, etc.
     * `year` is any Hijri year.
     */
    NgbCalendarHijri.prototype._getMonthStart = function (year, month) {
        return Math.ceil(29.5 * month) + (year - 1) * 354 + Math.floor((3 + 11 * year) / 30.0);
    };
    /**
     * Returns the start of Hijri year.
     * `year` is any Hijri year.
     */
    NgbCalendarHijri.prototype._getYearStart = function (year) { return (year - 1) * 354 + Math.floor((3 + 11 * year) / 30.0); };
    return NgbCalendarHijri;
}(__WEBPACK_IMPORTED_MODULE_0__ngb_calendar__["a" /* NgbCalendar */]));

NgbCalendarHijri.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */] },
];
/** @nocollapse */
NgbCalendarHijri.ctorParameters = function () { return []; };
//# sourceMappingURL=ngb-calendar-hijri.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/datepicker/hijri/ngb-calendar-islamic-civil.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NgbCalendarIslamicCivil */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngb_calendar_hijri__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/datepicker/hijri/ngb-calendar-hijri.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngb_date__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/datepicker/ngb-date.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



function isGregorianLeapYear(date) {
    var year = date.getFullYear();
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}
function mod(a, b) {
    return a - b * Math.floor(a / b);
}
/**
 * The civil calendar is one type of Hijri calendars used in islamic countries.
 * Uses a fixed cycle of alternating 29- and 30-day months,
 * with a leap day added to the last month of 11 out of every 30 years.
 * http://cldr.unicode.org/development/development-process/design-proposals/islamic-calendar-types
 * All the calculations here are based on the equations from "Calendrical Calculations" By Edward M. Reingold, Nachum
 * Dershowitz.
 */
var GREGORIAN_EPOCH = 1721425.5;
var ISLAMIC_EPOCH = 1948439.5;
var NgbCalendarIslamicCivil = (function (_super) {
    __extends(NgbCalendarIslamicCivil, _super);
    function NgbCalendarIslamicCivil() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns the equivalent islamic(civil) date value for a give input Gregorian date.
     * `gdate` is a JS Date to be converted to Hijri.
     */
    NgbCalendarIslamicCivil.prototype.fromGregorian = function (gdate) {
        var date = new Date(gdate);
        var gYear = date.getFullYear(), gMonth = date.getMonth(), gDay = date.getDate();
        var julianDay = GREGORIAN_EPOCH - 1 + 365 * (gYear - 1) + Math.floor((gYear - 1) / 4) +
            -Math.floor((gYear - 1) / 100) + Math.floor((gYear - 1) / 400) +
            Math.floor((367 * (gMonth + 1) - 362) / 12 + (gMonth + 1 <= 2 ? 0 : isGregorianLeapYear(date) ? -1 : -2) + gDay);
        julianDay = Math.floor(julianDay) + 0.5;
        var days = julianDay - ISLAMIC_EPOCH;
        var hYear = Math.floor((30 * days + 10646) / 10631.0);
        var hMonth = Math.ceil((days - 29 - this._getYearStart(hYear)) / 29.5);
        hMonth = Math.min(hMonth, 11);
        var hDay = Math.ceil(days - this._getMonthStart(hYear, hMonth)) + 1;
        return new __WEBPACK_IMPORTED_MODULE_1__ngb_date__["a" /* NgbDate */](hYear, hMonth + 1, hDay);
    };
    /**
     * Returns the equivalent JS date value for a give input islamic(civil) date.
     * `hijriDate` is an islamic(civil) date to be converted to Gregorian.
     */
    NgbCalendarIslamicCivil.prototype.toGregorian = function (hijriDate) {
        var hYear = hijriDate.year;
        var hMonth = hijriDate.month - 1;
        var hDate = hijriDate.day;
        var julianDay = hDate + Math.ceil(29.5 * hMonth) + (hYear - 1) * 354 + Math.floor((3 + 11 * hYear) / 30) + ISLAMIC_EPOCH - 1;
        var wjd = Math.floor(julianDay - 0.5) + 0.5, depoch = wjd - GREGORIAN_EPOCH, quadricent = Math.floor(depoch / 146097), dqc = mod(depoch, 146097), cent = Math.floor(dqc / 36524), dcent = mod(dqc, 36524), quad = Math.floor(dcent / 1461), dquad = mod(dcent, 1461), yindex = Math.floor(dquad / 365);
        var year = quadricent * 400 + cent * 100 + quad * 4 + yindex;
        if (!(cent === 4 || yindex === 4)) {
            year++;
        }
        var gYearStart = GREGORIAN_EPOCH + 365 * (year - 1) + Math.floor((year - 1) / 4) - Math.floor((year - 1) / 100) +
            Math.floor((year - 1) / 400);
        var yearday = wjd - gYearStart;
        var tjd = GREGORIAN_EPOCH - 1 + 365 * (year - 1) + Math.floor((year - 1) / 4) - Math.floor((year - 1) / 100) +
            Math.floor((year - 1) / 400) + Math.floor(739 / 12 + (isGregorianLeapYear(new Date(year, 3, 1)) ? -1 : -2) + 1);
        var leapadj = wjd < tjd ? 0 : isGregorianLeapYear(new Date(year, 3, 1)) ? 1 : 2;
        var month = Math.floor(((yearday + leapadj) * 12 + 373) / 367);
        var tjd2 = GREGORIAN_EPOCH - 1 + 365 * (year - 1) + Math.floor((year - 1) / 4) - Math.floor((year - 1) / 100) +
            Math.floor((year - 1) / 400) +
            Math.floor((367 * month - 362) / 12 + (month <= 2 ? 0 : isGregorianLeapYear(new Date(year, month - 1, 1)) ? -1 : -2) +
                1);
        var day = wjd - tjd2 + 1;
        return new Date(year, month - 1, day);
    };
    /**
     * Returns the number of days in a specific Hijri month.
     * `month` is 1 for Muharram, 2 for Safar, etc.
     * `year` is any Hijri year.
     */
    NgbCalendarIslamicCivil.prototype.getDaysInIslamicMonth = function (month, year) {
        year = year + Math.floor(month / 13);
        month = ((month - 1) % 12) + 1;
        var length = 29 + month % 2;
        if (month === 12 && this._isIslamicLeapYear(year)) {
            length++;
        }
        return length;
    };
    NgbCalendarIslamicCivil.prototype.getNext = function (date, period, number) {
        if (period === void 0) { period = 'd'; }
        if (number === void 0) { number = 1; }
        date = __WEBPACK_IMPORTED_MODULE_1__ngb_date__["a" /* NgbDate */].from(date);
        switch (period) {
            case 'y':
                date = this.setYear(date, date.year + number);
                date.month = 1;
                date.day = 1;
                return date;
            case 'm':
                date = this.setMonth(date, date.month + number);
                date.day = 1;
                return date;
            case 'd':
                return this.setDay(date, date.day + number);
            default:
                return date;
        }
    };
    NgbCalendarIslamicCivil.prototype.getPrev = function (date, period, number) {
        if (period === void 0) { period = 'd'; }
        if (number === void 0) { number = 1; }
        return this.getNext(date, period, -number);
    };
    NgbCalendarIslamicCivil.prototype.getWeekday = function (date) {
        var day = this.toGregorian(date).getDay();
        // in JS Date Sun=0, in ISO 8601 Sun=7
        return day === 0 ? 7 : day;
    };
    NgbCalendarIslamicCivil.prototype.getWeekNumber = function (week, firstDayOfWeek) {
        // in JS Date Sun=0, in ISO 8601 Sun=7
        if (firstDayOfWeek === 7) {
            firstDayOfWeek = 0;
        }
        var thursdayIndex = (4 + 7 - firstDayOfWeek) % 7;
        var date = week[thursdayIndex];
        var jsDate = this.toGregorian(date);
        jsDate.setDate(jsDate.getDate() + 4 - (jsDate.getDay() || 7)); // Thursday
        var time = jsDate.getTime();
        var MuhDate = this.toGregorian(new __WEBPACK_IMPORTED_MODULE_1__ngb_date__["a" /* NgbDate */](date.year, 1, 1)); // Compare with Muharram 1
        return Math.floor(Math.round((time - MuhDate.getTime()) / 86400000) / 7) + 1;
    };
    NgbCalendarIslamicCivil.prototype.getToday = function () { return this.fromGregorian(new Date()); };
    return NgbCalendarIslamicCivil;
}(__WEBPACK_IMPORTED_MODULE_0__ngb_calendar_hijri__["a" /* NgbCalendarHijri */]));

NgbCalendarIslamicCivil.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["C" /* Injectable */] },
];
/** @nocollapse */
NgbCalendarIslamicCivil.ctorParameters = function () { return []; };
//# sourceMappingURL=ngb-calendar-islamic-civil.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbCalendar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NgbCalendarGregorian; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngb_date__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/datepicker/ngb-date.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_util__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/util/util.js");
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



function fromJSDate(jsDate) {
    return new __WEBPACK_IMPORTED_MODULE_0__ngb_date__["a" /* NgbDate */](jsDate.getFullYear(), jsDate.getMonth() + 1, jsDate.getDate());
}
function toJSDate(date) {
    var jsDate = new Date(date.year, date.month - 1, date.day, 12);
    // this is done avoid 30 -> 1930 conversion
    if (!isNaN(jsDate.getTime())) {
        jsDate.setFullYear(date.year);
    }
    return jsDate;
}
var NgbCalendar = (function () {
    function NgbCalendar() {
    }
    return NgbCalendar;
}());

NgbCalendar.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */] },
];
/** @nocollapse */
NgbCalendar.ctorParameters = function () { return []; };
var NgbCalendarGregorian = (function (_super) {
    __extends(NgbCalendarGregorian, _super);
    function NgbCalendarGregorian() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NgbCalendarGregorian.prototype.getDaysPerWeek = function () { return 7; };
    NgbCalendarGregorian.prototype.getMonths = function () { return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; };
    NgbCalendarGregorian.prototype.getWeeksPerMonth = function () { return 6; };
    NgbCalendarGregorian.prototype.getNext = function (date, period, number) {
        if (period === void 0) { period = 'd'; }
        if (number === void 0) { number = 1; }
        var jsDate = toJSDate(date);
        switch (period) {
            case 'y':
                return new __WEBPACK_IMPORTED_MODULE_0__ngb_date__["a" /* NgbDate */](date.year + number, 1, 1);
            case 'm':
                jsDate = new Date(date.year, date.month + number - 1, 1, 12);
                break;
            case 'd':
                jsDate.setDate(jsDate.getDate() + number);
                break;
            default:
                return date;
        }
        return fromJSDate(jsDate);
    };
    NgbCalendarGregorian.prototype.getPrev = function (date, period, number) {
        if (period === void 0) { period = 'd'; }
        if (number === void 0) { number = 1; }
        return this.getNext(date, period, -number);
    };
    NgbCalendarGregorian.prototype.getWeekday = function (date) {
        var jsDate = toJSDate(date);
        var day = jsDate.getDay();
        // in JS Date Sun=0, in ISO 8601 Sun=7
        return day === 0 ? 7 : day;
    };
    NgbCalendarGregorian.prototype.getWeekNumber = function (week, firstDayOfWeek) {
        // in JS Date Sun=0, in ISO 8601 Sun=7
        if (firstDayOfWeek === 7) {
            firstDayOfWeek = 0;
        }
        var thursdayIndex = (4 + 7 - firstDayOfWeek) % 7;
        var date = week[thursdayIndex];
        var jsDate = toJSDate(date);
        jsDate.setDate(jsDate.getDate() + 4 - (jsDate.getDay() || 7)); // Thursday
        var time = jsDate.getTime();
        jsDate.setMonth(0); // Compare with Jan 1
        jsDate.setDate(1);
        return Math.floor(Math.round((time - jsDate.getTime()) / 86400000) / 7) + 1;
    };
    NgbCalendarGregorian.prototype.getToday = function () { return fromJSDate(new Date()); };
    NgbCalendarGregorian.prototype.isValid = function (date) {
        if (!date || !Object(__WEBPACK_IMPORTED_MODULE_2__util_util__["c" /* isInteger */])(date.year) || !Object(__WEBPACK_IMPORTED_MODULE_2__util_util__["c" /* isInteger */])(date.month) || !Object(__WEBPACK_IMPORTED_MODULE_2__util_util__["c" /* isInteger */])(date.day)) {
            return false;
        }
        var jsDate = toJSDate(date);
        return !isNaN(jsDate.getTime()) && jsDate.getFullYear() === date.year && jsDate.getMonth() + 1 === date.month &&
            jsDate.getDate() === date.day;
    };
    return NgbCalendarGregorian;
}(NgbCalendar));

NgbCalendarGregorian.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */] },
];
/** @nocollapse */
NgbCalendarGregorian.ctorParameters = function () { return []; };
//# sourceMappingURL=ngb-calendar.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-parser-formatter.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NgbDateParserFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbDateISOParserFormatter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_util__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/util/util.js");
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * Abstract type serving as a DI token for the service parsing and formatting dates for the NgbInputDatepicker
 * directive. A default implementation using the ISO 8601 format is provided, but you can provide another implementation
 * to use an alternative format.
 */
var NgbDateParserFormatter = (function () {
    function NgbDateParserFormatter() {
    }
    return NgbDateParserFormatter;
}());

var NgbDateISOParserFormatter = (function (_super) {
    __extends(NgbDateISOParserFormatter, _super);
    function NgbDateISOParserFormatter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NgbDateISOParserFormatter.prototype.parse = function (value) {
        if (value) {
            var dateParts = value.trim().split('-');
            if (dateParts.length === 1 && Object(__WEBPACK_IMPORTED_MODULE_0__util_util__["d" /* isNumber */])(dateParts[0])) {
                return { year: Object(__WEBPACK_IMPORTED_MODULE_0__util_util__["h" /* toInteger */])(dateParts[0]), month: null, day: null };
            }
            else if (dateParts.length === 2 && Object(__WEBPACK_IMPORTED_MODULE_0__util_util__["d" /* isNumber */])(dateParts[0]) && Object(__WEBPACK_IMPORTED_MODULE_0__util_util__["d" /* isNumber */])(dateParts[1])) {
                return { year: Object(__WEBPACK_IMPORTED_MODULE_0__util_util__["h" /* toInteger */])(dateParts[0]), month: Object(__WEBPACK_IMPORTED_MODULE_0__util_util__["h" /* toInteger */])(dateParts[1]), day: null };
            }
            else if (dateParts.length === 3 && Object(__WEBPACK_IMPORTED_MODULE_0__util_util__["d" /* isNumber */])(dateParts[0]) && Object(__WEBPACK_IMPORTED_MODULE_0__util_util__["d" /* isNumber */])(dateParts[1]) && Object(__WEBPACK_IMPORTED_MODULE_0__util_util__["d" /* isNumber */])(dateParts[2])) {
                return { year: Object(__WEBPACK_IMPORTED_MODULE_0__util_util__["h" /* toInteger */])(dateParts[0]), month: Object(__WEBPACK_IMPORTED_MODULE_0__util_util__["h" /* toInteger */])(dateParts[1]), day: Object(__WEBPACK_IMPORTED_MODULE_0__util_util__["h" /* toInteger */])(dateParts[2]) };
            }
        }
        return null;
    };
    NgbDateISOParserFormatter.prototype.format = function (date) {
        return date ?
            date.year + "-" + (Object(__WEBPACK_IMPORTED_MODULE_0__util_util__["d" /* isNumber */])(date.month) ? Object(__WEBPACK_IMPORTED_MODULE_0__util_util__["f" /* padNumber */])(date.month) : '') + "-" + (Object(__WEBPACK_IMPORTED_MODULE_0__util_util__["d" /* isNumber */])(date.day) ? Object(__WEBPACK_IMPORTED_MODULE_0__util_util__["f" /* padNumber */])(date.day) : '') :
            '';
    };
    return NgbDateISOParserFormatter;
}(NgbDateParserFormatter));

//# sourceMappingURL=ngb-date-parser-formatter.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/datepicker/ngb-date.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbDate; });
var NgbDate = (function () {
    function NgbDate(year, month, day) {
        this.year = year;
        this.month = month;
        this.day = day;
    }
    NgbDate.from = function (date) {
        return date ? new NgbDate(date.year, date.month, date.day ? date.day : 1) : null;
    };
    NgbDate.prototype.equals = function (other) {
        return other && this.year === other.year && this.month === other.month && this.day === other.day;
    };
    NgbDate.prototype.before = function (other) {
        if (!other) {
            return false;
        }
        if (this.year === other.year) {
            if (this.month === other.month) {
                return this.day === other.day ? false : this.day < other.day;
            }
            else {
                return this.month < other.month;
            }
        }
        else {
            return this.year < other.year;
        }
    };
    NgbDate.prototype.after = function (other) {
        if (!other) {
            return false;
        }
        if (this.year === other.year) {
            if (this.month === other.month) {
                return this.day === other.day ? false : this.day > other.day;
            }
            else {
                return this.month > other.month;
            }
        }
        else {
            return this.year > other.year;
        }
    };
    NgbDate.prototype.toStruct = function () { return { year: this.year, month: this.month, day: this.day }; };
    NgbDate.prototype.toString = function () { return this.year + "-" + this.month + "-" + this.day; };
    return NgbDate;
}());

//# sourceMappingURL=ngb-date.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/dropdown/dropdown-config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbDropdownConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

/**
 * Configuration service for the NgbDropdown directive.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the dropdowns used in the application.
 */
var NgbDropdownConfig = (function () {
    function NgbDropdownConfig() {
        this.autoClose = true;
        this.placement = 'bottom-left';
    }
    return NgbDropdownConfig;
}());

NgbDropdownConfig.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */] },
];
/** @nocollapse */
NgbDropdownConfig.ctorParameters = function () { return []; };
//# sourceMappingURL=dropdown-config.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/dropdown/dropdown.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NgbDropdownMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return NgbDropdownToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbDropdown; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dropdown_config__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/dropdown/dropdown-config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_positioning__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/util/positioning.js");



/**
 */
var NgbDropdownMenu = (function () {
    function NgbDropdownMenu(dropdown, _elementRef, _renderer) {
        this.dropdown = dropdown;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this.placement = 'bottom';
        this.isOpen = false;
    }
    NgbDropdownMenu.prototype.isEventFrom = function ($event) { return this._elementRef.nativeElement.contains($event.target); };
    NgbDropdownMenu.prototype.position = function (triggerEl, placement) {
        this.applyPlacement(Object(__WEBPACK_IMPORTED_MODULE_2__util_positioning__["a" /* positionElements */])(triggerEl, this._elementRef.nativeElement, placement));
    };
    NgbDropdownMenu.prototype.applyPlacement = function (_placement) {
        // remove the current placement classes
        this._renderer.removeClass(this._elementRef.nativeElement.parentElement, 'dropup');
        this.placement = _placement;
        /**
         * apply the new placement
         * change the class only in case of top to show up arrow
         * or use defualt which is dropdown to show down arrow
         */
        if (_placement.search('^top') !== -1) {
            this._renderer.addClass(this._elementRef.nativeElement.parentElement, 'dropup');
        }
    };
    return NgbDropdownMenu;
}());

NgbDropdownMenu.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{ selector: '[ngbDropdownMenu]', host: { '[class.dropdown-menu]': 'true', '[class.show]': 'dropdown.isOpen()' } },] },
];
/** @nocollapse */
NgbDropdownMenu.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */], args: [Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* forwardRef */])(function () { return NgbDropdown; }),] },] },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Renderer2 */], },
]; };
/**
 * Allows the dropdown to be toggled via click. This directive is optional.
 */
var NgbDropdownToggle = (function () {
    function NgbDropdownToggle(dropdown, _elementRef) {
        this.dropdown = dropdown;
        this._elementRef = _elementRef;
        this.anchorEl = _elementRef.nativeElement;
    }
    NgbDropdownToggle.prototype.toggleOpen = function () { this.dropdown.toggle(); };
    NgbDropdownToggle.prototype.isEventFrom = function ($event) { return this._elementRef.nativeElement.contains($event.target); };
    return NgbDropdownToggle;
}());

NgbDropdownToggle.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{
                selector: '[ngbDropdownToggle]',
                host: {
                    'class': 'dropdown-toggle',
                    'aria-haspopup': 'true',
                    '[attr.aria-expanded]': 'dropdown.isOpen()',
                    '(click)': 'toggleOpen()'
                }
            },] },
];
/** @nocollapse */
NgbDropdownToggle.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */], args: [Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* forwardRef */])(function () { return NgbDropdown; }),] },] },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
]; };
/**
 * Transforms a node into a dropdown.
 */
var NgbDropdown = (function () {
    function NgbDropdown(config, ngZone) {
        var _this = this;
        /**
         *  Defines whether or not the dropdown-menu is open initially.
         */
        this._open = false;
        /**
         *  An event fired when the dropdown is opened or closed.
         *  Event's payload equals whether dropdown is open.
         */
        this.openChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.placement = config.placement;
        this.autoClose = config.autoClose;
        this._zoneSubscription = ngZone.onStable.subscribe(function () { _this._positionMenu(); });
    }
    NgbDropdown.prototype.ngOnInit = function () {
        if (this._menu) {
            this._menu.applyPlacement(Array.isArray(this.placement) ? (this.placement[0]) : this.placement);
        }
    };
    /**
     * Checks if the dropdown menu is open or not.
     */
    NgbDropdown.prototype.isOpen = function () { return this._open; };
    /**
     * Opens the dropdown menu of a given navbar or tabbed navigation.
     */
    NgbDropdown.prototype.open = function () {
        if (!this._open) {
            this._open = true;
            this._positionMenu();
            this.openChange.emit(true);
        }
    };
    /**
     * Closes the dropdown menu of a given navbar or tabbed navigation.
     */
    NgbDropdown.prototype.close = function () {
        if (this._open) {
            this._open = false;
            this.openChange.emit(false);
        }
    };
    /**
     * Toggles the dropdown menu of a given navbar or tabbed navigation.
     */
    NgbDropdown.prototype.toggle = function () {
        if (this.isOpen()) {
            this.close();
        }
        else {
            this.open();
        }
    };
    NgbDropdown.prototype.closeFromClick = function ($event) {
        if (this.autoClose && $event.button !== 2 && !this._isEventFromToggle($event)) {
            if (this.autoClose === true) {
                this.close();
            }
            else if (this.autoClose === 'inside' && this._isEventFromMenu($event)) {
                this.close();
            }
            else if (this.autoClose === 'outside' && !this._isEventFromMenu($event)) {
                this.close();
            }
        }
    };
    NgbDropdown.prototype.closeFromOutsideEsc = function () {
        if (this.autoClose) {
            this.close();
        }
    };
    NgbDropdown.prototype.ngOnDestroy = function () { this._zoneSubscription.unsubscribe(); };
    NgbDropdown.prototype._isEventFromToggle = function ($event) { return this._toggle ? this._toggle.isEventFrom($event) : false; };
    NgbDropdown.prototype._isEventFromMenu = function ($event) { return this._menu ? this._menu.isEventFrom($event) : false; };
    NgbDropdown.prototype._positionMenu = function () {
        if (this.isOpen() && this._menu && this._toggle) {
            this._menu.position(this._toggle.anchorEl, this.placement);
        }
    };
    return NgbDropdown;
}());

NgbDropdown.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{
                selector: '[ngbDropdown]',
                exportAs: 'ngbDropdown',
                host: {
                    '[class.show]': 'isOpen()',
                    '(keyup.esc)': 'closeFromOutsideEsc()',
                    '(document:click)': 'closeFromClick($event)'
                }
            },] },
];
/** @nocollapse */
NgbDropdown.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__dropdown_config__["a" /* NgbDropdownConfig */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */], },
]; };
NgbDropdown.propDecorators = {
    '_menu': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ContentChild */], args: [NgbDropdownMenu,] },],
    '_toggle': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ContentChild */], args: [NgbDropdownToggle,] },],
    'autoClose': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    '_open': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */], args: ['open',] },],
    'placement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'openChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
};
//# sourceMappingURL=dropdown.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/dropdown/dropdown.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbDropdownModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dropdown__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/dropdown/dropdown.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dropdown_config__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/dropdown/dropdown-config.js");
/* unused harmony reexport NgbDropdown */
/* unused harmony reexport NgbDropdownToggle */
/* unused harmony reexport NgbDropdownMenu */
/* unused harmony reexport NgbDropdownConfig */





var NGB_DROPDOWN_DIRECTIVES = [__WEBPACK_IMPORTED_MODULE_1__dropdown__["a" /* NgbDropdown */], __WEBPACK_IMPORTED_MODULE_1__dropdown__["c" /* NgbDropdownToggle */], __WEBPACK_IMPORTED_MODULE_1__dropdown__["b" /* NgbDropdownMenu */]];
var NgbDropdownModule = (function () {
    function NgbDropdownModule() {
    }
    NgbDropdownModule.forRoot = function () { return { ngModule: NgbDropdownModule, providers: [__WEBPACK_IMPORTED_MODULE_2__dropdown_config__["a" /* NgbDropdownConfig */]] }; };
    return NgbDropdownModule;
}());

NgbDropdownModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */], args: [{ declarations: NGB_DROPDOWN_DIRECTIVES, exports: NGB_DROPDOWN_DIRECTIVES },] },
];
/** @nocollapse */
NgbDropdownModule.ctorParameters = function () { return []; };
//# sourceMappingURL=dropdown.module.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NgbRootModule */
/* unused harmony export NgbModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accordion_accordion_module__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/accordion/accordion.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alert_alert_module__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/alert/alert.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__buttons_buttons_module__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/buttons/buttons.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__carousel_carousel_module__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/carousel/carousel.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__collapse_collapse_module__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/collapse/collapse.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__datepicker_datepicker_module__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/datepicker/datepicker.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dropdown_dropdown_module__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/dropdown/dropdown.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modal_modal_module__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/modal/modal.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pagination_pagination_module__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/pagination/pagination.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__popover_popover_module__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/popover/popover.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__progressbar_progressbar_module__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/progressbar/progressbar.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__rating_rating_module__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/rating/rating.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__tabset_tabset_module__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/tabset/tabset.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__timepicker_timepicker_module__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/timepicker/timepicker.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__tooltip_tooltip_module__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/tooltip/tooltip.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__typeahead_typeahead_module__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/typeahead/typeahead.module.js");
/* unused harmony reexport NgbAccordionModule */
/* unused harmony reexport NgbAccordionConfig */
/* unused harmony reexport NgbAccordion */
/* unused harmony reexport NgbPanel */
/* unused harmony reexport NgbPanelTitle */
/* unused harmony reexport NgbPanelContent */
/* unused harmony reexport NgbAlertModule */
/* unused harmony reexport NgbAlertConfig */
/* unused harmony reexport NgbAlert */
/* unused harmony reexport NgbButtonsModule */
/* unused harmony reexport NgbCheckBox */
/* unused harmony reexport NgbRadioGroup */
/* unused harmony reexport NgbCarouselModule */
/* unused harmony reexport NgbCarouselConfig */
/* unused harmony reexport NgbCarousel */
/* unused harmony reexport NgbSlide */
/* unused harmony reexport NgbCollapseModule */
/* unused harmony reexport NgbCollapse */
/* unused harmony reexport NgbCalendar */
/* unused harmony reexport NgbCalendarIslamicCivil */
/* unused harmony reexport NgbDatepickerModule */
/* unused harmony reexport NgbDatepickerI18n */
/* unused harmony reexport NgbDatepickerConfig */
/* unused harmony reexport NgbDateParserFormatter */
/* unused harmony reexport NgbDatepicker */
/* unused harmony reexport NgbInputDatepicker */
/* unused harmony reexport NgbDropdownModule */
/* unused harmony reexport NgbDropdownConfig */
/* unused harmony reexport NgbDropdown */
/* unused harmony reexport NgbModalModule */
/* unused harmony reexport NgbModal */
/* unused harmony reexport NgbActiveModal */
/* unused harmony reexport NgbModalRef */
/* unused harmony reexport ModalDismissReasons */
/* unused harmony reexport NgbPaginationModule */
/* unused harmony reexport NgbPaginationConfig */
/* unused harmony reexport NgbPagination */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_10__popover_popover_module__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_10__popover_popover_module__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_10__popover_popover_module__["a"]; });
/* unused harmony reexport NgbProgressbarModule */
/* unused harmony reexport NgbProgressbarConfig */
/* unused harmony reexport NgbProgressbar */
/* unused harmony reexport NgbRatingModule */
/* unused harmony reexport NgbRatingConfig */
/* unused harmony reexport NgbRating */
/* unused harmony reexport NgbTabsetModule */
/* unused harmony reexport NgbTabsetConfig */
/* unused harmony reexport NgbTabset */
/* unused harmony reexport NgbTab */
/* unused harmony reexport NgbTabContent */
/* unused harmony reexport NgbTabTitle */
/* unused harmony reexport NgbTimepickerModule */
/* unused harmony reexport NgbTimepickerConfig */
/* unused harmony reexport NgbTimepicker */
/* unused harmony reexport NgbTooltipModule */
/* unused harmony reexport NgbTooltipConfig */
/* unused harmony reexport NgbTooltip */
/* unused harmony reexport NgbHighlight */
/* unused harmony reexport NgbTypeaheadModule */
/* unused harmony reexport NgbTypeaheadConfig */
/* unused harmony reexport NgbTypeahead */

































var NGB_MODULES = [
    __WEBPACK_IMPORTED_MODULE_1__accordion_accordion_module__["a" /* NgbAccordionModule */], __WEBPACK_IMPORTED_MODULE_2__alert_alert_module__["a" /* NgbAlertModule */], __WEBPACK_IMPORTED_MODULE_3__buttons_buttons_module__["a" /* NgbButtonsModule */], __WEBPACK_IMPORTED_MODULE_4__carousel_carousel_module__["a" /* NgbCarouselModule */], __WEBPACK_IMPORTED_MODULE_5__collapse_collapse_module__["a" /* NgbCollapseModule */], __WEBPACK_IMPORTED_MODULE_6__datepicker_datepicker_module__["a" /* NgbDatepickerModule */],
    __WEBPACK_IMPORTED_MODULE_7__dropdown_dropdown_module__["a" /* NgbDropdownModule */], __WEBPACK_IMPORTED_MODULE_8__modal_modal_module__["a" /* NgbModalModule */], __WEBPACK_IMPORTED_MODULE_9__pagination_pagination_module__["a" /* NgbPaginationModule */], __WEBPACK_IMPORTED_MODULE_10__popover_popover_module__["c" /* NgbPopoverModule */], __WEBPACK_IMPORTED_MODULE_11__progressbar_progressbar_module__["a" /* NgbProgressbarModule */], __WEBPACK_IMPORTED_MODULE_12__rating_rating_module__["a" /* NgbRatingModule */],
    __WEBPACK_IMPORTED_MODULE_13__tabset_tabset_module__["a" /* NgbTabsetModule */], __WEBPACK_IMPORTED_MODULE_14__timepicker_timepicker_module__["a" /* NgbTimepickerModule */], __WEBPACK_IMPORTED_MODULE_15__tooltip_tooltip_module__["a" /* NgbTooltipModule */], __WEBPACK_IMPORTED_MODULE_16__typeahead_typeahead_module__["a" /* NgbTypeaheadModule */]
];
var NgbRootModule = (function () {
    function NgbRootModule() {
    }
    return NgbRootModule;
}());

NgbRootModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */], args: [{
                imports: [
                    __WEBPACK_IMPORTED_MODULE_2__alert_alert_module__["a" /* NgbAlertModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_3__buttons_buttons_module__["a" /* NgbButtonsModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_5__collapse_collapse_module__["a" /* NgbCollapseModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_11__progressbar_progressbar_module__["a" /* NgbProgressbarModule */].forRoot(),
                    __WEBPACK_IMPORTED_MODULE_15__tooltip_tooltip_module__["a" /* NgbTooltipModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_16__typeahead_typeahead_module__["a" /* NgbTypeaheadModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_1__accordion_accordion_module__["a" /* NgbAccordionModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_4__carousel_carousel_module__["a" /* NgbCarouselModule */].forRoot(),
                    __WEBPACK_IMPORTED_MODULE_6__datepicker_datepicker_module__["a" /* NgbDatepickerModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_7__dropdown_dropdown_module__["a" /* NgbDropdownModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_8__modal_modal_module__["a" /* NgbModalModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_9__pagination_pagination_module__["a" /* NgbPaginationModule */].forRoot(),
                    __WEBPACK_IMPORTED_MODULE_10__popover_popover_module__["c" /* NgbPopoverModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_11__progressbar_progressbar_module__["a" /* NgbProgressbarModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_12__rating_rating_module__["a" /* NgbRatingModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_13__tabset_tabset_module__["a" /* NgbTabsetModule */].forRoot(),
                    __WEBPACK_IMPORTED_MODULE_14__timepicker_timepicker_module__["a" /* NgbTimepickerModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_15__tooltip_tooltip_module__["a" /* NgbTooltipModule */].forRoot()
                ],
                exports: NGB_MODULES
            },] },
];
/** @nocollapse */
NgbRootModule.ctorParameters = function () { return []; };
var NgbModule = (function () {
    function NgbModule() {
    }
    NgbModule.forRoot = function () { return { ngModule: NgbRootModule }; };
    return NgbModule;
}());

NgbModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */], args: [{ imports: NGB_MODULES, exports: NGB_MODULES },] },
];
/** @nocollapse */
NgbModule.ctorParameters = function () { return []; };
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/modal/modal-backdrop.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbModalBackdrop; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

var NgbModalBackdrop = (function () {
    function NgbModalBackdrop() {
    }
    return NgbModalBackdrop;
}());

NgbModalBackdrop.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{ selector: 'ngb-modal-backdrop', template: '', host: { 'class': 'modal-backdrop fade show' } },] },
];
/** @nocollapse */
NgbModalBackdrop.ctorParameters = function () { return []; };
//# sourceMappingURL=modal-backdrop.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/modal/modal-dismiss-reasons.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalDismissReasons; });
var ModalDismissReasons;
(function (ModalDismissReasons) {
    ModalDismissReasons[ModalDismissReasons["BACKDROP_CLICK"] = 0] = "BACKDROP_CLICK";
    ModalDismissReasons[ModalDismissReasons["ESC"] = 1] = "ESC";
})(ModalDismissReasons || (ModalDismissReasons = {}));
//# sourceMappingURL=modal-dismiss-reasons.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/modal/modal-ref.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbActiveModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NgbModalRef; });
/**
 * A reference to an active (currently opened) modal. Instances of this class
 * can be injected into components passed as modal content.
 */
var NgbActiveModal = (function () {
    function NgbActiveModal() {
    }
    /**
     * Can be used to close a modal, passing an optional result.
     */
    NgbActiveModal.prototype.close = function (result) { };
    /**
     * Can be used to dismiss a modal, passing an optional reason.
     */
    NgbActiveModal.prototype.dismiss = function (reason) { };
    return NgbActiveModal;
}());

/**
 * A reference to a newly opened modal.
 */
var NgbModalRef = (function () {
    function NgbModalRef(_windowCmptRef, _contentRef, _backdropCmptRef, _beforeDismiss) {
        var _this = this;
        this._windowCmptRef = _windowCmptRef;
        this._contentRef = _contentRef;
        this._backdropCmptRef = _backdropCmptRef;
        this._beforeDismiss = _beforeDismiss;
        _windowCmptRef.instance.dismissEvent.subscribe(function (reason) { _this.dismiss(reason); });
        this.result = new Promise(function (resolve, reject) {
            _this._resolve = resolve;
            _this._reject = reject;
        });
        this.result.then(null, function () { });
    }
    Object.defineProperty(NgbModalRef.prototype, "componentInstance", {
        /**
         * The instance of component used as modal's content.
         * Undefined when a TemplateRef is used as modal's content.
         */
        get: function () {
            if (this._contentRef.componentRef) {
                return this._contentRef.componentRef.instance;
            }
        },
        // only needed to keep TS1.8 compatibility
        set: function (instance) { },
        enumerable: true,
        configurable: true
    });
    /**
     * Can be used to close a modal, passing an optional result.
     */
    NgbModalRef.prototype.close = function (result) {
        if (this._windowCmptRef) {
            this._resolve(result);
            this._removeModalElements();
        }
    };
    /**
     * Can be used to dismiss a modal, passing an optional reason.
     */
    NgbModalRef.prototype.dismiss = function (reason) {
        if (this._windowCmptRef) {
            if (!this._beforeDismiss || this._beforeDismiss() !== false) {
                this._reject(reason);
                this._removeModalElements();
            }
        }
    };
    NgbModalRef.prototype._removeModalElements = function () {
        var windowNativeEl = this._windowCmptRef.location.nativeElement;
        windowNativeEl.parentNode.removeChild(windowNativeEl);
        this._windowCmptRef.destroy();
        if (this._backdropCmptRef) {
            var backdropNativeEl = this._backdropCmptRef.location.nativeElement;
            backdropNativeEl.parentNode.removeChild(backdropNativeEl);
            this._backdropCmptRef.destroy();
        }
        if (this._contentRef && this._contentRef.viewRef) {
            this._contentRef.viewRef.destroy();
        }
        this._windowCmptRef = null;
        this._backdropCmptRef = null;
        this._contentRef = null;
    };
    return NgbModalRef;
}());

//# sourceMappingURL=modal-ref.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/modal/modal-stack.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbModalStack; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_popup__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/util/popup.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_util__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_backdrop__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/modal/modal-backdrop.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_window__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/modal/modal-window.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modal_ref__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/modal/modal-ref.js");






var NgbModalStack = (function () {
    function NgbModalStack(_applicationRef, _injector, _componentFactoryResolver) {
        this._applicationRef = _applicationRef;
        this._injector = _injector;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._backdropFactory = _componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_3__modal_backdrop__["a" /* NgbModalBackdrop */]);
        this._windowFactory = _componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_4__modal_window__["a" /* NgbModalWindow */]);
    }
    NgbModalStack.prototype.open = function (moduleCFR, contentInjector, content, options) {
        var containerSelector = options.container || 'body';
        var containerEl = document.querySelector(containerSelector);
        if (!containerEl) {
            throw new Error("The specified modal container \"" + containerSelector + "\" was not found in the DOM.");
        }
        var activeModal = new __WEBPACK_IMPORTED_MODULE_5__modal_ref__["a" /* NgbActiveModal */]();
        var contentRef = this._getContentRef(moduleCFR, options.injector || contentInjector, content, activeModal);
        var windowCmptRef;
        var backdropCmptRef;
        var ngbModalRef;
        if (options.backdrop !== false) {
            backdropCmptRef = this._backdropFactory.create(this._injector);
            this._applicationRef.attachView(backdropCmptRef.hostView);
            containerEl.appendChild(backdropCmptRef.location.nativeElement);
        }
        windowCmptRef = this._windowFactory.create(this._injector, contentRef.nodes);
        this._applicationRef.attachView(windowCmptRef.hostView);
        containerEl.appendChild(windowCmptRef.location.nativeElement);
        ngbModalRef = new __WEBPACK_IMPORTED_MODULE_5__modal_ref__["b" /* NgbModalRef */](windowCmptRef, contentRef, backdropCmptRef, options.beforeDismiss);
        activeModal.close = function (result) { ngbModalRef.close(result); };
        activeModal.dismiss = function (reason) { ngbModalRef.dismiss(reason); };
        this._applyWindowOptions(windowCmptRef.instance, options);
        return ngbModalRef;
    };
    NgbModalStack.prototype._applyWindowOptions = function (windowInstance, options) {
        ['backdrop', 'keyboard', 'size', 'windowClass'].forEach(function (optionName) {
            if (Object(__WEBPACK_IMPORTED_MODULE_2__util_util__["b" /* isDefined */])(options[optionName])) {
                windowInstance[optionName] = options[optionName];
            }
        });
    };
    NgbModalStack.prototype._getContentRef = function (moduleCFR, contentInjector, content, context) {
        if (!content) {
            return new __WEBPACK_IMPORTED_MODULE_1__util_popup__["a" /* ContentRef */]([]);
        }
        else if (content instanceof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* TemplateRef */]) {
            var viewRef = content.createEmbeddedView(context);
            this._applicationRef.attachView(viewRef);
            return new __WEBPACK_IMPORTED_MODULE_1__util_popup__["a" /* ContentRef */]([viewRef.rootNodes], viewRef);
        }
        else if (Object(__WEBPACK_IMPORTED_MODULE_2__util_util__["e" /* isString */])(content)) {
            return new __WEBPACK_IMPORTED_MODULE_1__util_popup__["a" /* ContentRef */]([[document.createTextNode("" + content)]]);
        }
        else {
            var contentCmptFactory = moduleCFR.resolveComponentFactory(content);
            var modalContentInjector = __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* ReflectiveInjector */].resolveAndCreate([{ provide: __WEBPACK_IMPORTED_MODULE_5__modal_ref__["a" /* NgbActiveModal */], useValue: context }], contentInjector);
            var componentRef = contentCmptFactory.create(modalContentInjector);
            this._applicationRef.attachView(componentRef.hostView);
            return new __WEBPACK_IMPORTED_MODULE_1__util_popup__["a" /* ContentRef */]([[componentRef.location.nativeElement]], componentRef.hostView, componentRef);
        }
    };
    return NgbModalStack;
}());

NgbModalStack.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */] },
];
/** @nocollapse */
NgbModalStack.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ApplicationRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Injector */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ComponentFactoryResolver */], },
]; };
//# sourceMappingURL=modal-stack.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/modal/modal-window.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbModalWindow; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_dismiss_reasons__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/modal/modal-dismiss-reasons.js");


var NgbModalWindow = (function () {
    function NgbModalWindow(_elRef, _renderer) {
        this._elRef = _elRef;
        this._renderer = _renderer;
        this.backdrop = true;
        this.keyboard = true;
        this.dismissEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    NgbModalWindow.prototype.backdropClick = function ($event) {
        if (this.backdrop === true && this._elRef.nativeElement === $event.target) {
            this.dismiss(__WEBPACK_IMPORTED_MODULE_1__modal_dismiss_reasons__["a" /* ModalDismissReasons */].BACKDROP_CLICK);
        }
    };
    NgbModalWindow.prototype.escKey = function ($event) {
        if (this.keyboard && !$event.defaultPrevented) {
            this.dismiss(__WEBPACK_IMPORTED_MODULE_1__modal_dismiss_reasons__["a" /* ModalDismissReasons */].ESC);
        }
    };
    NgbModalWindow.prototype.dismiss = function (reason) { this.dismissEvent.emit(reason); };
    NgbModalWindow.prototype.ngOnInit = function () {
        this._elWithFocus = document.activeElement;
        this._renderer.addClass(document.body, 'modal-open');
    };
    NgbModalWindow.prototype.ngAfterViewInit = function () {
        if (!this._elRef.nativeElement.contains(document.activeElement)) {
            this._elRef.nativeElement['focus'].apply(this._elRef.nativeElement, []);
        }
    };
    NgbModalWindow.prototype.ngOnDestroy = function () {
        var body = document.body;
        var elWithFocus = this._elWithFocus;
        var elementToFocus;
        if (elWithFocus && elWithFocus['focus'] && body.contains(elWithFocus)) {
            elementToFocus = elWithFocus;
        }
        else {
            elementToFocus = body;
        }
        elementToFocus['focus'].apply(elementToFocus, []);
        this._elWithFocus = null;
        this._renderer.removeClass(body, 'modal-open');
    };
    return NgbModalWindow;
}());

NgbModalWindow.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'ngb-modal-window',
                host: {
                    '[class]': '"modal fade show" + (windowClass ? " " + windowClass : "")',
                    'role': 'dialog',
                    'tabindex': '-1',
                    'style': 'display: block;',
                    '(keyup.esc)': 'escKey($event)',
                    '(click)': 'backdropClick($event)'
                },
                template: "\n    <div [class]=\"'modal-dialog' + (size ? ' modal-' + size : '')\" role=\"document\">\n        <div class=\"modal-content\"><ng-content></ng-content></div>\n    </div>\n    "
            },] },
];
/** @nocollapse */
NgbModalWindow.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Renderer2 */], },
]; };
NgbModalWindow.propDecorators = {
    'backdrop': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'keyboard': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'size': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'windowClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'dismissEvent': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */], args: ['dismiss',] },],
};
//# sourceMappingURL=modal-window.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/modal/modal.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_stack__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/modal/modal-stack.js");


/**
 * A service to open modal windows. Creating a modal is straightforward: create a template and pass it as an argument to
 * the "open" method!
 */
var NgbModal = (function () {
    function NgbModal(_moduleCFR, _injector, _modalStack) {
        this._moduleCFR = _moduleCFR;
        this._injector = _injector;
        this._modalStack = _modalStack;
    }
    /**
     * Opens a new modal window with the specified content and using supplied options. Content can be provided
     * as a TemplateRef or a component type. If you pass a component type as content than instances of those
     * components can be injected with an instance of the NgbActiveModal class. You can use methods on the
     * NgbActiveModal class to close / dismiss modals from "inside" of a component.
     */
    NgbModal.prototype.open = function (content, options) {
        if (options === void 0) { options = {}; }
        return this._modalStack.open(this._moduleCFR, this._injector, content, options);
    };
    return NgbModal;
}());

NgbModal.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */] },
];
/** @nocollapse */
NgbModal.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ComponentFactoryResolver */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Injector */], },
    { type: __WEBPACK_IMPORTED_MODULE_1__modal_stack__["a" /* NgbModalStack */], },
]; };
//# sourceMappingURL=modal.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/modal/modal.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbModalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_backdrop__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/modal/modal-backdrop.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_window__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/modal/modal-window.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_stack__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/modal/modal-stack.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/modal/modal.js");
/* unused harmony reexport NgbModal */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modal_ref__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/modal/modal-ref.js");
/* unused harmony reexport NgbModalRef */
/* unused harmony reexport NgbActiveModal */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modal_dismiss_reasons__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/modal/modal-dismiss-reasons.js");
/* unused harmony reexport ModalDismissReasons */








var NgbModalModule = (function () {
    function NgbModalModule() {
    }
    NgbModalModule.forRoot = function () { return { ngModule: NgbModalModule, providers: [__WEBPACK_IMPORTED_MODULE_4__modal__["a" /* NgbModal */], __WEBPACK_IMPORTED_MODULE_3__modal_stack__["a" /* NgbModalStack */]] }; };
    return NgbModalModule;
}());

NgbModalModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */], args: [{
                declarations: [__WEBPACK_IMPORTED_MODULE_1__modal_backdrop__["a" /* NgbModalBackdrop */], __WEBPACK_IMPORTED_MODULE_2__modal_window__["a" /* NgbModalWindow */]],
                entryComponents: [__WEBPACK_IMPORTED_MODULE_1__modal_backdrop__["a" /* NgbModalBackdrop */], __WEBPACK_IMPORTED_MODULE_2__modal_window__["a" /* NgbModalWindow */]],
                providers: [__WEBPACK_IMPORTED_MODULE_4__modal__["a" /* NgbModal */]]
            },] },
];
/** @nocollapse */
NgbModalModule.ctorParameters = function () { return []; };
//# sourceMappingURL=modal.module.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/pagination/pagination-config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbPaginationConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

/**
 * Configuration service for the NgbPagination component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the paginations used in the application.
 */
var NgbPaginationConfig = (function () {
    function NgbPaginationConfig() {
        this.disabled = false;
        this.boundaryLinks = false;
        this.directionLinks = true;
        this.ellipses = true;
        this.maxSize = 0;
        this.pageSize = 10;
        this.rotate = false;
    }
    return NgbPaginationConfig;
}());

NgbPaginationConfig.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */] },
];
/** @nocollapse */
NgbPaginationConfig.ctorParameters = function () { return []; };
//# sourceMappingURL=pagination-config.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/pagination/pagination.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbPagination; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_util__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pagination_config__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/pagination/pagination-config.js");



/**
 * A directive that will take care of visualising a pagination bar and enable / disable buttons correctly!
 */
var NgbPagination = (function () {
    function NgbPagination(config) {
        this.pageCount = 0;
        this.pages = [];
        /**
         *  Current page.
         */
        this.page = 0;
        /**
         *  An event fired when the page is changed.
         *  Event's payload equals to the newly selected page.
         */
        this.pageChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */](true);
        this.disabled = config.disabled;
        this.boundaryLinks = config.boundaryLinks;
        this.directionLinks = config.directionLinks;
        this.ellipses = config.ellipses;
        this.maxSize = config.maxSize;
        this.pageSize = config.pageSize;
        this.rotate = config.rotate;
        this.size = config.size;
    }
    NgbPagination.prototype.hasPrevious = function () { return this.page > 1; };
    NgbPagination.prototype.hasNext = function () { return this.page < this.pageCount; };
    NgbPagination.prototype.selectPage = function (pageNumber) { this._updatePages(pageNumber); };
    NgbPagination.prototype.ngOnChanges = function (changes) { this._updatePages(this.page); };
    /**
     * @internal
     */
    NgbPagination.prototype.isEllipsis = function (pageNumber) { return pageNumber === -1; };
    /**
     * Appends ellipses and first/last page number to the displayed pages
     */
    NgbPagination.prototype._applyEllipses = function (start, end) {
        if (this.ellipses) {
            if (start > 0) {
                if (start > 1) {
                    this.pages.unshift(-1);
                }
                this.pages.unshift(1);
            }
            if (end < this.pageCount) {
                if (end < (this.pageCount - 1)) {
                    this.pages.push(-1);
                }
                this.pages.push(this.pageCount);
            }
        }
    };
    /**
     * Rotates page numbers based on maxSize items visible.
     * Currently selected page stays in the middle:
     *
     * Ex. for selected page = 6:
     * [5,*6*,7] for maxSize = 3
     * [4,5,*6*,7] for maxSize = 4
     */
    NgbPagination.prototype._applyRotation = function () {
        var start = 0;
        var end = this.pageCount;
        var leftOffset = Math.floor(this.maxSize / 2);
        var rightOffset = this.maxSize % 2 === 0 ? leftOffset - 1 : leftOffset;
        if (this.page <= leftOffset) {
            // very beginning, no rotation -> [0..maxSize]
            end = this.maxSize;
        }
        else if (this.pageCount - this.page < leftOffset) {
            // very end, no rotation -> [len-maxSize..len]
            start = this.pageCount - this.maxSize;
        }
        else {
            // rotate
            start = this.page - leftOffset - 1;
            end = this.page + rightOffset;
        }
        return [start, end];
    };
    /**
     * Paginates page numbers based on maxSize items per page
     */
    NgbPagination.prototype._applyPagination = function () {
        var page = Math.ceil(this.page / this.maxSize) - 1;
        var start = page * this.maxSize;
        var end = start + this.maxSize;
        return [start, end];
    };
    NgbPagination.prototype._setPageInRange = function (newPageNo) {
        var prevPageNo = this.page;
        this.page = Object(__WEBPACK_IMPORTED_MODULE_1__util_util__["a" /* getValueInRange */])(newPageNo, this.pageCount, 1);
        if (this.page !== prevPageNo) {
            this.pageChange.emit(this.page);
        }
    };
    NgbPagination.prototype._updatePages = function (newPage) {
        this.pageCount = Math.ceil(this.collectionSize / this.pageSize);
        if (!Object(__WEBPACK_IMPORTED_MODULE_1__util_util__["d" /* isNumber */])(this.pageCount)) {
            this.pageCount = 0;
        }
        // fill-in model needed to render pages
        this.pages.length = 0;
        for (var i = 1; i <= this.pageCount; i++) {
            this.pages.push(i);
        }
        // set page within 1..max range
        this._setPageInRange(newPage);
        // apply maxSize if necessary
        if (this.maxSize > 0 && this.pageCount > this.maxSize) {
            var start = 0;
            var end = this.pageCount;
            // either paginating or rotating page numbers
            if (this.rotate) {
                _a = this._applyRotation(), start = _a[0], end = _a[1];
            }
            else {
                _b = this._applyPagination(), start = _b[0], end = _b[1];
            }
            this.pages = this.pages.slice(start, end);
            // adding ellipses
            this._applyEllipses(start, end);
        }
        var _a, _b;
    };
    return NgbPagination;
}());

NgbPagination.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'ngb-pagination',
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
                host: { 'role': 'navigation' },
                template: "\n    <ul [class]=\"'pagination' + (size ? ' pagination-' + size : '')\">\n      <li *ngIf=\"boundaryLinks\" class=\"page-item\"\n        [class.disabled]=\"!hasPrevious() || disabled\">\n        <a aria-label=\"First\" class=\"page-link\" href (click)=\"!!selectPage(1)\" [attr.tabindex]=\"(hasPrevious() ? null : '-1')\">\n          <span aria-hidden=\"true\">&laquo;&laquo;</span>\n        </a>\n      </li>\n\n      <li *ngIf=\"directionLinks\" class=\"page-item\"\n        [class.disabled]=\"!hasPrevious() || disabled\">\n        <a aria-label=\"Previous\" class=\"page-link\" href (click)=\"!!selectPage(page-1)\" [attr.tabindex]=\"(hasPrevious() ? null : '-1')\">\n          <span aria-hidden=\"true\">&laquo;</span>\n        </a>\n      </li>\n      <li *ngFor=\"let pageNumber of pages\" class=\"page-item\" [class.active]=\"pageNumber === page\"\n        [class.disabled]=\"isEllipsis(pageNumber) || disabled\">\n        <a *ngIf=\"isEllipsis(pageNumber)\" class=\"page-link\">...</a>\n        <a *ngIf=\"!isEllipsis(pageNumber)\" class=\"page-link\" href (click)=\"!!selectPage(pageNumber)\">\n          {{pageNumber}}\n          <span *ngIf=\"pageNumber === page\" class=\"sr-only\">(current)</span>\n        </a>\n      </li>\n      <li *ngIf=\"directionLinks\" class=\"page-item\" [class.disabled]=\"!hasNext() || disabled\">\n        <a aria-label=\"Next\" class=\"page-link\" href (click)=\"!!selectPage(page+1)\" [attr.tabindex]=\"(hasNext() ? null : '-1')\">\n          <span aria-hidden=\"true\">&raquo;</span>\n        </a>\n      </li>\n\n      <li *ngIf=\"boundaryLinks\" class=\"page-item\" [class.disabled]=\"!hasNext() || disabled\">\n        <a aria-label=\"Last\" class=\"page-link\" href (click)=\"!!selectPage(pageCount)\" [attr.tabindex]=\"(hasNext() ? null : '-1')\">\n          <span aria-hidden=\"true\">&raquo;&raquo;</span>\n        </a>\n      </li>\n    </ul>\n  "
            },] },
];
/** @nocollapse */
NgbPagination.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__pagination_config__["a" /* NgbPaginationConfig */], },
]; };
NgbPagination.propDecorators = {
    'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'boundaryLinks': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'directionLinks': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'ellipses': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'rotate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'collectionSize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'maxSize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'page': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'pageSize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'pageChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
    'size': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
};
//# sourceMappingURL=pagination.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/pagination/pagination.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbPaginationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pagination__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/pagination/pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pagination_config__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/pagination/pagination-config.js");
/* unused harmony reexport NgbPagination */
/* unused harmony reexport NgbPaginationConfig */






var NgbPaginationModule = (function () {
    function NgbPaginationModule() {
    }
    NgbPaginationModule.forRoot = function () { return { ngModule: NgbPaginationModule, providers: [__WEBPACK_IMPORTED_MODULE_3__pagination_config__["a" /* NgbPaginationConfig */]] }; };
    return NgbPaginationModule;
}());

NgbPaginationModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */], args: [{ declarations: [__WEBPACK_IMPORTED_MODULE_2__pagination__["a" /* NgbPagination */]], exports: [__WEBPACK_IMPORTED_MODULE_2__pagination__["a" /* NgbPagination */]], imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]] },] },
];
/** @nocollapse */
NgbPaginationModule.ctorParameters = function () { return []; };
//# sourceMappingURL=pagination.module.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/popover/popover-config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbPopoverConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

/**
 * Configuration service for the NgbPopover directive.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the popovers used in the application.
 */
var NgbPopoverConfig = (function () {
    function NgbPopoverConfig() {
        this.placement = 'top';
        this.triggers = 'click';
    }
    return NgbPopoverConfig;
}());

NgbPopoverConfig.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */] },
];
/** @nocollapse */
NgbPopoverConfig.ctorParameters = function () { return []; };
//# sourceMappingURL=popover-config.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/popover/popover.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NgbPopoverWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbPopover; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_triggers__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/util/triggers.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_positioning__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/util/positioning.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_popup__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/util/popup.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__popover_config__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/popover/popover-config.js");





var nextId = 0;
var NgbPopoverWindow = (function () {
    function NgbPopoverWindow(_element, _renderer) {
        this._element = _element;
        this._renderer = _renderer;
        this.placement = 'top';
    }
    NgbPopoverWindow.prototype.applyPlacement = function (_placement) {
        // remove the current placement classes
        this._renderer.removeClass(this._element.nativeElement, 'bs-popover-' + this.placement.toString().split('-')[0]);
        this._renderer.removeClass(this._element.nativeElement, 'bs-popover-' + this.placement.toString());
        // set the new placement classes
        this.placement = _placement;
        // apply the new placement
        this._renderer.addClass(this._element.nativeElement, 'bs-popover-' + this.placement.toString().split('-')[0]);
        this._renderer.addClass(this._element.nativeElement, 'bs-popover-' + this.placement.toString());
    };
    return NgbPopoverWindow;
}());

NgbPopoverWindow.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'ngb-popover-window',
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
                host: {
                    '[class]': '"popover bs-popover-" + placement.split("-")[0]+" bs-popover-" + placement',
                    'role': 'tooltip',
                    '[id]': 'id'
                },
                template: "\n    <div class=\"arrow\"></div>\n    <h3 class=\"popover-header\">{{title}}</h3><div class=\"popover-body\"><ng-content></ng-content></div>",
                styles: ["\n    :host.bs-popover-top .arrow, :host.bs-popover-bottom .arrow {\n      left: 50%;\n    }\n\n    :host.bs-popover-top-left .arrow, :host.bs-popover-bottom-left .arrow {\n      left: 2em;\n    }\n\n    :host.bs-popover-top-right .arrow, :host.bs-popover-bottom-right .arrow {\n      left: auto;\n      right: 2em;\n    }\n\n    :host.bs-popover-left .arrow, :host.bs-popover-right .arrow {\n      top: 50%;\n    }\n    \n    :host.bs-popover-left-top .arrow, :host.bs-popover-right-top .arrow {\n      top: 0.7em;\n    }\n\n    :host.bs-popover-left-bottom .arrow, :host.bs-popover-right-bottom .arrow {\n      top: auto;\n      bottom: 0.7em;\n    }\n  "]
            },] },
];
/** @nocollapse */
NgbPopoverWindow.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Renderer2 */], },
]; };
NgbPopoverWindow.propDecorators = {
    'placement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'title': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'id': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
};
/**
 * A lightweight, extensible directive for fancy popover creation.
 */
var NgbPopover = (function () {
    function NgbPopover(_elementRef, _renderer, injector, componentFactoryResolver, viewContainerRef, config, ngZone) {
        var _this = this;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        /**
         * Emits an event when the popover is shown
         */
        this.shown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        /**
         * Emits an event when the popover is hidden
         */
        this.hidden = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this._ngbPopoverWindowId = "ngb-popover-" + nextId++;
        this.placement = config.placement;
        this.triggers = config.triggers;
        this.container = config.container;
        this._popupService = new __WEBPACK_IMPORTED_MODULE_3__util_popup__["b" /* PopupService */](NgbPopoverWindow, injector, viewContainerRef, _renderer, componentFactoryResolver);
        this._zoneSubscription = ngZone.onStable.subscribe(function () {
            if (_this._windowRef) {
                _this._windowRef.instance.applyPlacement(Object(__WEBPACK_IMPORTED_MODULE_2__util_positioning__["a" /* positionElements */])(_this._elementRef.nativeElement, _this._windowRef.location.nativeElement, _this.placement, _this.container === 'body'));
            }
        });
    }
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of the popover.
     * The context is an optional value to be injected into the popover template when it is created.
     */
    NgbPopover.prototype.open = function (context) {
        if (!this._windowRef) {
            this._windowRef = this._popupService.open(this.ngbPopover, context);
            this._windowRef.instance.title = this.popoverTitle;
            this._windowRef.instance.id = this._ngbPopoverWindowId;
            this._renderer.setAttribute(this._elementRef.nativeElement, 'aria-describedby', this._ngbPopoverWindowId);
            if (this.container === 'body') {
                window.document.querySelector(this.container).appendChild(this._windowRef.location.nativeElement);
            }
            // apply styling to set basic css-classes on target element, before going for positioning
            this._windowRef.changeDetectorRef.detectChanges();
            this._windowRef.changeDetectorRef.markForCheck();
            // position popover along the element
            this._windowRef.instance.applyPlacement(Object(__WEBPACK_IMPORTED_MODULE_2__util_positioning__["a" /* positionElements */])(this._elementRef.nativeElement, this._windowRef.location.nativeElement, this.placement, this.container === 'body'));
            this.shown.emit();
        }
    };
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of the popover.
     */
    NgbPopover.prototype.close = function () {
        if (this._windowRef) {
            this._renderer.removeAttribute(this._elementRef.nativeElement, 'aria-describedby');
            this._popupService.close();
            this._windowRef = null;
            this.hidden.emit();
        }
    };
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of the popover.
     */
    NgbPopover.prototype.toggle = function () {
        if (this._windowRef) {
            this.close();
        }
        else {
            this.open();
        }
    };
    /**
     * Returns whether or not the popover is currently being shown
     */
    NgbPopover.prototype.isOpen = function () { return this._windowRef != null; };
    NgbPopover.prototype.ngOnInit = function () {
        this._unregisterListenersFn = Object(__WEBPACK_IMPORTED_MODULE_1__util_triggers__["a" /* listenToTriggers */])(this._renderer, this._elementRef.nativeElement, this.triggers, this.open.bind(this), this.close.bind(this), this.toggle.bind(this));
    };
    NgbPopover.prototype.ngOnDestroy = function () {
        this.close();
        this._unregisterListenersFn();
        this._zoneSubscription.unsubscribe();
    };
    return NgbPopover;
}());

NgbPopover.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{ selector: '[ngbPopover]', exportAs: 'ngbPopover' },] },
];
/** @nocollapse */
NgbPopover.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Renderer2 */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Injector */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ComponentFactoryResolver */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewContainerRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_4__popover_config__["a" /* NgbPopoverConfig */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */], },
]; };
NgbPopover.propDecorators = {
    'ngbPopover': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'popoverTitle': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'placement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'triggers': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'container': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'shown': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
    'hidden': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
};
//# sourceMappingURL=popover.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/popover/popover.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return NgbPopoverModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__popover__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/popover/popover.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popover_config__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/popover/popover-config.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__popover__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__popover_config__["a"]; });





var NgbPopoverModule = (function () {
    function NgbPopoverModule() {
    }
    NgbPopoverModule.forRoot = function () { return { ngModule: NgbPopoverModule, providers: [__WEBPACK_IMPORTED_MODULE_2__popover_config__["a" /* NgbPopoverConfig */]] }; };
    return NgbPopoverModule;
}());

NgbPopoverModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */], args: [{ declarations: [__WEBPACK_IMPORTED_MODULE_1__popover__["a" /* NgbPopover */], __WEBPACK_IMPORTED_MODULE_1__popover__["b" /* NgbPopoverWindow */]], exports: [__WEBPACK_IMPORTED_MODULE_1__popover__["a" /* NgbPopover */]], entryComponents: [__WEBPACK_IMPORTED_MODULE_1__popover__["b" /* NgbPopoverWindow */]] },] },
];
/** @nocollapse */
NgbPopoverModule.ctorParameters = function () { return []; };
//# sourceMappingURL=popover.module.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/progressbar/progressbar-config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbProgressbarConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

/**
 * Configuration service for the NgbProgressbar component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the progress bars used in the application.
 */
var NgbProgressbarConfig = (function () {
    function NgbProgressbarConfig() {
        this.max = 100;
        this.animated = false;
        this.striped = false;
        this.showValue = false;
    }
    return NgbProgressbarConfig;
}());

NgbProgressbarConfig.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */] },
];
/** @nocollapse */
NgbProgressbarConfig.ctorParameters = function () { return []; };
//# sourceMappingURL=progressbar-config.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/progressbar/progressbar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbProgressbar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_util__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__progressbar_config__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/progressbar/progressbar-config.js");



/**
 * Directive that can be used to provide feedback on the progress of a workflow or an action.
 */
var NgbProgressbar = (function () {
    function NgbProgressbar(config) {
        /**
         * Current value to be displayed in the progressbar. Should be smaller or equal to "max" value.
         */
        this.value = 0;
        this.max = config.max;
        this.animated = config.animated;
        this.striped = config.striped;
        this.type = config.type;
        this.showValue = config.showValue;
    }
    NgbProgressbar.prototype.getValue = function () { return Object(__WEBPACK_IMPORTED_MODULE_1__util_util__["a" /* getValueInRange */])(this.value, this.max); };
    NgbProgressbar.prototype.getPercentValue = function () { return 100 * this.getValue() / this.max; };
    return NgbProgressbar;
}());

NgbProgressbar.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'ngb-progressbar',
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
                template: "\n    <div class=\"progress\">\n      <div class=\"progress-bar{{type ? ' bg-' + type : ''}}{{animated ? ' progress-bar-animated' : ''}}{{striped ?\n    ' progress-bar-striped' : ''}}\" role=\"progressbar\" [style.width.%]=\"getPercentValue()\"\n    [attr.aria-valuenow]=\"getValue()\" aria-valuemin=\"0\" [attr.aria-valuemax]=\"max\">\n        <span *ngIf=\"showValue\">{{getPercentValue()}}%</span><ng-content></ng-content>\n      </div>\n    </div>\n  "
            },] },
];
/** @nocollapse */
NgbProgressbar.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__progressbar_config__["a" /* NgbProgressbarConfig */], },
]; };
NgbProgressbar.propDecorators = {
    'max': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'animated': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'striped': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'showValue': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'type': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
};
//# sourceMappingURL=progressbar.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/progressbar/progressbar.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbProgressbarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__progressbar__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/progressbar/progressbar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__progressbar_config__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/progressbar/progressbar-config.js");
/* unused harmony reexport NgbProgressbar */
/* unused harmony reexport NgbProgressbarConfig */






var NgbProgressbarModule = (function () {
    function NgbProgressbarModule() {
    }
    NgbProgressbarModule.forRoot = function () { return { ngModule: NgbProgressbarModule, providers: [__WEBPACK_IMPORTED_MODULE_3__progressbar_config__["a" /* NgbProgressbarConfig */]] }; };
    return NgbProgressbarModule;
}());

NgbProgressbarModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */], args: [{ declarations: [__WEBPACK_IMPORTED_MODULE_2__progressbar__["a" /* NgbProgressbar */]], exports: [__WEBPACK_IMPORTED_MODULE_2__progressbar__["a" /* NgbProgressbar */]], imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]] },] },
];
/** @nocollapse */
NgbProgressbarModule.ctorParameters = function () { return []; };
//# sourceMappingURL=progressbar.module.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/rating/rating-config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbRatingConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

/**
 * Configuration service for the NgbRating component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the ratings used in the application.
 */
var NgbRatingConfig = (function () {
    function NgbRatingConfig() {
        this.max = 10;
        this.readonly = false;
        this.resettable = false;
    }
    return NgbRatingConfig;
}());

NgbRatingConfig.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */] },
];
/** @nocollapse */
NgbRatingConfig.ctorParameters = function () { return []; };
//# sourceMappingURL=rating-config.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/rating/rating.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbRating; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rating_config__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/rating/rating-config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_util__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");




var Key;
(function (Key) {
    Key[Key["End"] = 35] = "End";
    Key[Key["Home"] = 36] = "Home";
    Key[Key["ArrowLeft"] = 37] = "ArrowLeft";
    Key[Key["ArrowUp"] = 38] = "ArrowUp";
    Key[Key["ArrowRight"] = 39] = "ArrowRight";
    Key[Key["ArrowDown"] = 40] = "ArrowDown";
})(Key || (Key = {}));
var NGB_RATING_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* forwardRef */])(function () { return NgbRating; }),
    multi: true
};
/**
 * Rating directive that will take care of visualising a star rating bar.
 */
var NgbRating = (function () {
    function NgbRating(config, _changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
        this.contexts = [];
        this.disabled = false;
        /**
         * An event fired when a user is hovering over a given rating.
         * Event's payload equals to the rating being hovered over.
         */
        this.hover = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        /**
         * An event fired when a user stops hovering over a given rating.
         * Event's payload equals to the rating of the last item being hovered over.
         */
        this.leave = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        /**
         * An event fired when a user selects a new rating.
         * Event's payload equals to the newly selected rating.
         */
        this.rateChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */](true);
        this.onChange = function (_) { };
        this.onTouched = function () { };
        this.max = config.max;
        this.readonly = config.readonly;
    }
    NgbRating.prototype.ariaValueText = function () { return this.nextRate + " out of " + this.max; };
    NgbRating.prototype.enter = function (value) {
        if (!this.readonly && !this.disabled) {
            this._updateState(value);
        }
        this.hover.emit(value);
    };
    NgbRating.prototype.handleBlur = function () { this.onTouched(); };
    NgbRating.prototype.handleClick = function (value) { this.update(this.resettable && this.rate === value ? 0 : value); };
    NgbRating.prototype.handleKeyDown = function (event) {
        if (Key[Object(__WEBPACK_IMPORTED_MODULE_2__util_util__["i" /* toString */])(event.which)]) {
            event.preventDefault();
            switch (event.which) {
                case Key.ArrowDown:
                case Key.ArrowLeft:
                    this.update(this.rate - 1);
                    break;
                case Key.ArrowUp:
                case Key.ArrowRight:
                    this.update(this.rate + 1);
                    break;
                case Key.Home:
                    this.update(0);
                    break;
                case Key.End:
                    this.update(this.max);
                    break;
            }
        }
    };
    NgbRating.prototype.ngOnChanges = function (changes) {
        if (changes['rate']) {
            this.update(this.rate);
        }
    };
    NgbRating.prototype.ngOnInit = function () {
        this.contexts = Array.from({ length: this.max }, function () { return ({ fill: 0 }); });
        this._updateState(this.rate);
    };
    NgbRating.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    NgbRating.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    NgbRating.prototype.reset = function () {
        this.leave.emit(this.nextRate);
        this._updateState(this.rate);
    };
    NgbRating.prototype.setDisabledState = function (isDisabled) { this.disabled = isDisabled; };
    NgbRating.prototype.update = function (value, internalChange) {
        if (internalChange === void 0) { internalChange = true; }
        var newRate = Object(__WEBPACK_IMPORTED_MODULE_2__util_util__["a" /* getValueInRange */])(value, this.max, 0);
        if (!this.readonly && !this.disabled && this.rate !== newRate) {
            this.rate = newRate;
            this.rateChange.emit(this.rate);
        }
        if (internalChange) {
            this.onChange(this.rate);
            this.onTouched();
        }
        this._updateState(this.rate);
    };
    NgbRating.prototype.writeValue = function (value) {
        this.update(value, false);
        this._changeDetectorRef.markForCheck();
    };
    NgbRating.prototype._getFillValue = function (index) {
        var diff = this.nextRate - index;
        if (diff >= 1) {
            return 100;
        }
        if (diff < 1 && diff > 0) {
            return Number.parseInt((diff * 100).toFixed(2));
        }
        return 0;
    };
    NgbRating.prototype._updateState = function (nextValue) {
        var _this = this;
        this.nextRate = nextValue;
        this.contexts.forEach(function (context, index) { return context.fill = _this._getFillValue(index); });
    };
    return NgbRating;
}());

NgbRating.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'ngb-rating',
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
                host: {
                    'class': 'd-inline-flex',
                    'tabindex': '0',
                    'role': 'slider',
                    'aria-valuemin': '0',
                    '[attr.aria-valuemax]': 'max',
                    '[attr.aria-valuenow]': 'nextRate',
                    '[attr.aria-valuetext]': 'ariaValueText()',
                    '[attr.aria-disabled]': 'readonly ? true : null',
                    '(blur)': 'handleBlur()',
                    '(keydown)': 'handleKeyDown($event)',
                    '(mouseleave)': 'reset()'
                },
                template: "\n    <ng-template #t let-fill=\"fill\">{{ fill === 100 ? '&#9733;' : '&#9734;' }}</ng-template>\n    <ng-template ngFor [ngForOf]=\"contexts\" let-index=\"index\">\n      <span class=\"sr-only\">({{ index < nextRate ? '*' : ' ' }})</span>\n      <span (mouseenter)=\"enter(index + 1)\" (click)=\"handleClick(index + 1)\" [style.cursor]=\"readonly || disabled ? 'default' : 'pointer'\">\n        <ng-template [ngTemplateOutlet]=\"starTemplate || t\" [ngTemplateOutletContext]=\"contexts[index]\"></ng-template>\n      </span>\n    </ng-template>\n  ",
                providers: [NGB_RATING_VALUE_ACCESSOR]
            },] },
];
/** @nocollapse */
NgbRating.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__rating_config__["a" /* NgbRatingConfig */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */], },
]; };
NgbRating.propDecorators = {
    'max': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'rate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'readonly': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'resettable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'starTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ContentChild */], args: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* TemplateRef */],] },],
    'hover': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
    'leave': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
    'rateChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
};
//# sourceMappingURL=rating.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/rating/rating.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbRatingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rating_config__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/rating/rating-config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rating__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/rating/rating.js");
/* unused harmony reexport NgbRating */
/* unused harmony reexport NgbRatingConfig */






var NgbRatingModule = (function () {
    function NgbRatingModule() {
    }
    NgbRatingModule.forRoot = function () { return { ngModule: NgbRatingModule, providers: [__WEBPACK_IMPORTED_MODULE_2__rating_config__["a" /* NgbRatingConfig */]] }; };
    return NgbRatingModule;
}());

NgbRatingModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */], args: [{ declarations: [__WEBPACK_IMPORTED_MODULE_3__rating__["a" /* NgbRating */]], exports: [__WEBPACK_IMPORTED_MODULE_3__rating__["a" /* NgbRating */]], imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]] },] },
];
/** @nocollapse */
NgbRatingModule.ctorParameters = function () { return []; };
//# sourceMappingURL=rating.module.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/tabset/tabset-config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbTabsetConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

/**
 * Configuration service for the NgbTabset component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the tabsets used in the application.
 */
var NgbTabsetConfig = (function () {
    function NgbTabsetConfig() {
        this.justify = 'start';
        this.orientation = 'horizontal';
        this.type = 'tabs';
    }
    return NgbTabsetConfig;
}());

NgbTabsetConfig.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */] },
];
/** @nocollapse */
NgbTabsetConfig.ctorParameters = function () { return []; };
//# sourceMappingURL=tabset-config.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/tabset/tabset.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return NgbTabTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NgbTabContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return NgbTabset; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tabset_config__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/tabset/tabset-config.js");


var nextId = 0;
/**
 * This directive should be used to wrap tab titles that need to contain HTML markup or other directives.
 */
var NgbTabTitle = (function () {
    function NgbTabTitle(templateRef) {
        this.templateRef = templateRef;
    }
    return NgbTabTitle;
}());

NgbTabTitle.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{ selector: 'ng-template[ngbTabTitle]' },] },
];
/** @nocollapse */
NgbTabTitle.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* TemplateRef */], },
]; };
/**
 * This directive must be used to wrap content to be displayed in a tab.
 */
var NgbTabContent = (function () {
    function NgbTabContent(templateRef) {
        this.templateRef = templateRef;
    }
    return NgbTabContent;
}());

NgbTabContent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{ selector: 'ng-template[ngbTabContent]' },] },
];
/** @nocollapse */
NgbTabContent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* TemplateRef */], },
]; };
/**
 * A directive representing an individual tab.
 */
var NgbTab = (function () {
    function NgbTab() {
        /**
         * Unique tab identifier. Must be unique for the entire document for proper accessibility support.
         */
        this.id = "ngb-tab-" + nextId++;
        /**
         * Allows toggling disabled state of a given state. Disabled tabs can't be selected.
         */
        this.disabled = false;
    }
    return NgbTab;
}());

NgbTab.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{ selector: 'ngb-tab' },] },
];
/** @nocollapse */
NgbTab.ctorParameters = function () { return []; };
NgbTab.propDecorators = {
    'id': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'title': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'contentTpl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ContentChild */], args: [NgbTabContent,] },],
    'titleTpl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ContentChild */], args: [NgbTabTitle,] },],
};
/**
 * A component that makes it easy to create tabbed interface.
 */
var NgbTabset = (function () {
    function NgbTabset(config) {
        /**
         * Whether the closed tabs should be hidden without destroying them
         */
        this.destroyOnHide = true;
        /**
         * A tab change event fired right before the tab selection happens. See NgbTabChangeEvent for payload details
         */
        this.tabChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.type = config.type;
        this.justify = config.justify;
        this.orientation = config.orientation;
    }
    Object.defineProperty(NgbTabset.prototype, "justify", {
        /**
         * The horizontal alignment of the nav with flexbox utilities. Can be one of 'start', 'center', 'end', 'fill' or
         * 'justified'
         * The default value is 'start'.
         */
        set: function (className) {
            if (className === 'fill' || className === 'justified') {
                this.justifyClass = "nav-" + className;
            }
            else {
                this.justifyClass = "justify-content-" + className;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Selects the tab with the given id and shows its associated pane.
     * Any other tab that was previously selected becomes unselected and its associated pane is hidden.
     */
    NgbTabset.prototype.select = function (tabId) {
        var selectedTab = this._getTabById(tabId);
        if (selectedTab && !selectedTab.disabled && this.activeId !== selectedTab.id) {
            var defaultPrevented_1 = false;
            this.tabChange.emit({ activeId: this.activeId, nextId: selectedTab.id, preventDefault: function () { defaultPrevented_1 = true; } });
            if (!defaultPrevented_1) {
                this.activeId = selectedTab.id;
            }
        }
    };
    NgbTabset.prototype.ngAfterContentChecked = function () {
        // auto-correct activeId that might have been set incorrectly as input
        var activeTab = this._getTabById(this.activeId);
        this.activeId = activeTab ? activeTab.id : (this.tabs.length ? this.tabs.first.id : null);
    };
    NgbTabset.prototype._getTabById = function (id) {
        var tabsWithId = this.tabs.filter(function (tab) { return tab.id === id; });
        return tabsWithId.length ? tabsWithId[0] : null;
    };
    return NgbTabset;
}());

NgbTabset.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'ngb-tabset',
                exportAs: 'ngbTabset',
                template: "\n    <ul [class]=\"'nav nav-' + type + (orientation == 'horizontal'?  ' ' + justifyClass : ' flex-column')\" role=\"tablist\">\n      <li class=\"nav-item\" *ngFor=\"let tab of tabs\">\n        <a [id]=\"tab.id\" class=\"nav-link\" [class.active]=\"tab.id === activeId\" [class.disabled]=\"tab.disabled\"\n          href (click)=\"!!select(tab.id)\" role=\"tab\" [attr.tabindex]=\"(tab.disabled ? '-1': undefined)\"\n          [attr.aria-controls]=\"(!destroyOnHide || tab.id === activeId ? tab.id + '-panel' : null)\"\n          [attr.aria-expanded]=\"tab.id === activeId\" [attr.aria-disabled]=\"tab.disabled\">\n          {{tab.title}}<ng-template [ngTemplateOutlet]=\"tab.titleTpl?.templateRef\"></ng-template>\n        </a>\n      </li>\n    </ul>\n    <div class=\"tab-content\">\n      <ng-template ngFor let-tab [ngForOf]=\"tabs\">\n        <div\n          class=\"tab-pane {{tab.id === activeId ? 'active' : null}}\"\n          *ngIf=\"!destroyOnHide || tab.id === activeId\"\n          role=\"tabpanel\"\n          [attr.aria-labelledby]=\"tab.id\" id=\"{{tab.id}}-panel\"\n          [attr.aria-expanded]=\"tab.id === activeId\">\n          <ng-template [ngTemplateOutlet]=\"tab.contentTpl.templateRef\"></ng-template>\n        </div>\n      </ng-template>\n    </div>\n  "
            },] },
];
/** @nocollapse */
NgbTabset.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__tabset_config__["a" /* NgbTabsetConfig */], },
]; };
NgbTabset.propDecorators = {
    'tabs': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ContentChildren */], args: [NgbTab,] },],
    'activeId': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'destroyOnHide': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'justify': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'orientation': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'type': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'tabChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
};
//# sourceMappingURL=tabset.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/tabset/tabset.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbTabsetModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabset__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/tabset/tabset.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabset_config__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/tabset/tabset-config.js");
/* unused harmony reexport NgbTabset */
/* unused harmony reexport NgbTab */
/* unused harmony reexport NgbTabContent */
/* unused harmony reexport NgbTabTitle */
/* unused harmony reexport NgbTabsetConfig */






var NGB_TABSET_DIRECTIVES = [__WEBPACK_IMPORTED_MODULE_2__tabset__["d" /* NgbTabset */], __WEBPACK_IMPORTED_MODULE_2__tabset__["a" /* NgbTab */], __WEBPACK_IMPORTED_MODULE_2__tabset__["b" /* NgbTabContent */], __WEBPACK_IMPORTED_MODULE_2__tabset__["c" /* NgbTabTitle */]];
var NgbTabsetModule = (function () {
    function NgbTabsetModule() {
    }
    NgbTabsetModule.forRoot = function () { return { ngModule: NgbTabsetModule, providers: [__WEBPACK_IMPORTED_MODULE_3__tabset_config__["a" /* NgbTabsetConfig */]] }; };
    return NgbTabsetModule;
}());

NgbTabsetModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */], args: [{ declarations: NGB_TABSET_DIRECTIVES, exports: NGB_TABSET_DIRECTIVES, imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]] },] },
];
/** @nocollapse */
NgbTabsetModule.ctorParameters = function () { return []; };
//# sourceMappingURL=tabset.module.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/timepicker/ngb-time.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbTime; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_util__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/util/util.js");

var NgbTime = (function () {
    function NgbTime(hour, minute, second) {
        this.hour = Object(__WEBPACK_IMPORTED_MODULE_0__util_util__["h" /* toInteger */])(hour);
        this.minute = Object(__WEBPACK_IMPORTED_MODULE_0__util_util__["h" /* toInteger */])(minute);
        this.second = Object(__WEBPACK_IMPORTED_MODULE_0__util_util__["h" /* toInteger */])(second);
    }
    NgbTime.prototype.changeHour = function (step) {
        if (step === void 0) { step = 1; }
        this.updateHour((isNaN(this.hour) ? 0 : this.hour) + step);
    };
    NgbTime.prototype.updateHour = function (hour) {
        if (Object(__WEBPACK_IMPORTED_MODULE_0__util_util__["d" /* isNumber */])(hour)) {
            this.hour = (hour < 0 ? 24 + hour : hour) % 24;
        }
        else {
            this.hour = NaN;
        }
    };
    NgbTime.prototype.changeMinute = function (step) {
        if (step === void 0) { step = 1; }
        this.updateMinute((isNaN(this.minute) ? 0 : this.minute) + step);
    };
    NgbTime.prototype.updateMinute = function (minute) {
        if (Object(__WEBPACK_IMPORTED_MODULE_0__util_util__["d" /* isNumber */])(minute)) {
            this.minute = minute % 60 < 0 ? 60 + minute % 60 : minute % 60;
            this.changeHour(Math.floor(minute / 60));
        }
        else {
            this.minute = NaN;
        }
    };
    NgbTime.prototype.changeSecond = function (step) {
        if (step === void 0) { step = 1; }
        this.updateSecond((isNaN(this.second) ? 0 : this.second) + step);
    };
    NgbTime.prototype.updateSecond = function (second) {
        if (Object(__WEBPACK_IMPORTED_MODULE_0__util_util__["d" /* isNumber */])(second)) {
            this.second = second < 0 ? 60 + second % 60 : second % 60;
            this.changeMinute(Math.floor(second / 60));
        }
        else {
            this.second = NaN;
        }
    };
    NgbTime.prototype.isValid = function (checkSecs) {
        if (checkSecs === void 0) { checkSecs = true; }
        return Object(__WEBPACK_IMPORTED_MODULE_0__util_util__["d" /* isNumber */])(this.hour) && Object(__WEBPACK_IMPORTED_MODULE_0__util_util__["d" /* isNumber */])(this.minute) && (checkSecs ? Object(__WEBPACK_IMPORTED_MODULE_0__util_util__["d" /* isNumber */])(this.second) : true);
    };
    NgbTime.prototype.toString = function () { return (this.hour || 0) + ":" + (this.minute || 0) + ":" + (this.second || 0); };
    return NgbTime;
}());

//# sourceMappingURL=ngb-time.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/timepicker/timepicker-config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbTimepickerConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

/**
 * Configuration service for the NgbTimepicker component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the timepickers used in the application.
 */
var NgbTimepickerConfig = (function () {
    function NgbTimepickerConfig() {
        this.meridian = false;
        this.spinners = true;
        this.seconds = false;
        this.hourStep = 1;
        this.minuteStep = 1;
        this.secondStep = 1;
        this.disabled = false;
        this.readonlyInputs = false;
        this.size = 'medium';
    }
    return NgbTimepickerConfig;
}());

NgbTimepickerConfig.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */] },
];
/** @nocollapse */
NgbTimepickerConfig.ctorParameters = function () { return []; };
//# sourceMappingURL=timepicker-config.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/timepicker/timepicker.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbTimepicker; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_util__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngb_time__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/timepicker/ngb-time.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__timepicker_config__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/timepicker/timepicker-config.js");





var NGB_TIMEPICKER_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* forwardRef */])(function () { return NgbTimepicker; }),
    multi: true
};
/**
 * A lightweight & configurable timepicker directive.
 */
var NgbTimepicker = (function () {
    function NgbTimepicker(config) {
        this.onChange = function (_) { };
        this.onTouched = function () { };
        this.meridian = config.meridian;
        this.spinners = config.spinners;
        this.seconds = config.seconds;
        this.hourStep = config.hourStep;
        this.minuteStep = config.minuteStep;
        this.secondStep = config.secondStep;
        this.disabled = config.disabled;
        this.readonlyInputs = config.readonlyInputs;
        this.size = config.size;
    }
    NgbTimepicker.prototype.writeValue = function (value) {
        this.model = value ? new __WEBPACK_IMPORTED_MODULE_3__ngb_time__["a" /* NgbTime */](value.hour, value.minute, value.second) : new __WEBPACK_IMPORTED_MODULE_3__ngb_time__["a" /* NgbTime */]();
        if (!this.seconds && (!value || !Object(__WEBPACK_IMPORTED_MODULE_2__util_util__["d" /* isNumber */])(value.second))) {
            this.model.second = 0;
        }
    };
    NgbTimepicker.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    NgbTimepicker.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    NgbTimepicker.prototype.setDisabledState = function (isDisabled) { this.disabled = isDisabled; };
    NgbTimepicker.prototype.changeHour = function (step) {
        this.model.changeHour(step);
        this.propagateModelChange();
    };
    NgbTimepicker.prototype.changeMinute = function (step) {
        this.model.changeMinute(step);
        this.propagateModelChange();
    };
    NgbTimepicker.prototype.changeSecond = function (step) {
        this.model.changeSecond(step);
        this.propagateModelChange();
    };
    NgbTimepicker.prototype.updateHour = function (newVal) {
        var isPM = this.model.hour >= 12;
        var enteredHour = Object(__WEBPACK_IMPORTED_MODULE_2__util_util__["h" /* toInteger */])(newVal);
        if (this.meridian && (isPM && enteredHour < 12 || !isPM && enteredHour === 12)) {
            this.model.updateHour(enteredHour + 12);
        }
        else {
            this.model.updateHour(enteredHour);
        }
        this.propagateModelChange();
    };
    NgbTimepicker.prototype.updateMinute = function (newVal) {
        this.model.updateMinute(Object(__WEBPACK_IMPORTED_MODULE_2__util_util__["h" /* toInteger */])(newVal));
        this.propagateModelChange();
    };
    NgbTimepicker.prototype.updateSecond = function (newVal) {
        this.model.updateSecond(Object(__WEBPACK_IMPORTED_MODULE_2__util_util__["h" /* toInteger */])(newVal));
        this.propagateModelChange();
    };
    NgbTimepicker.prototype.toggleMeridian = function () {
        if (this.meridian) {
            this.changeHour(12);
        }
    };
    NgbTimepicker.prototype.formatHour = function (value) {
        if (Object(__WEBPACK_IMPORTED_MODULE_2__util_util__["d" /* isNumber */])(value)) {
            if (this.meridian) {
                return Object(__WEBPACK_IMPORTED_MODULE_2__util_util__["f" /* padNumber */])(value % 12 === 0 ? 12 : value % 12);
            }
            else {
                return Object(__WEBPACK_IMPORTED_MODULE_2__util_util__["f" /* padNumber */])(value % 24);
            }
        }
        else {
            return Object(__WEBPACK_IMPORTED_MODULE_2__util_util__["f" /* padNumber */])(NaN);
        }
    };
    NgbTimepicker.prototype.formatMinSec = function (value) { return Object(__WEBPACK_IMPORTED_MODULE_2__util_util__["f" /* padNumber */])(value); };
    NgbTimepicker.prototype.setFormControlSize = function () { return { 'form-control-sm': this.size === 'small', 'form-control-lg': this.size === 'large' }; };
    NgbTimepicker.prototype.setButtonSize = function () { return { 'btn-sm': this.size === 'small', 'btn-lg': this.size === 'large' }; };
    NgbTimepicker.prototype.ngOnChanges = function (changes) {
        if (changes['seconds'] && !this.seconds && this.model && !Object(__WEBPACK_IMPORTED_MODULE_2__util_util__["d" /* isNumber */])(this.model.second)) {
            this.model.second = 0;
            this.propagateModelChange(false);
        }
    };
    NgbTimepicker.prototype.propagateModelChange = function (touched) {
        if (touched === void 0) { touched = true; }
        if (touched) {
            this.onTouched();
        }
        if (this.model.isValid(this.seconds)) {
            this.onChange({ hour: this.model.hour, minute: this.model.minute, second: this.model.second });
        }
        else {
            this.onChange(null);
        }
    };
    return NgbTimepicker;
}());

NgbTimepicker.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'ngb-timepicker',
                styles: ["\n    .ngb-tp {\n      display: flex;\n      align-items: center;\n    }\n\n    .ngb-tp-hour, .ngb-tp-minute, .ngb-tp-second, .ngb-tp-meridian {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: space-around;\n    }\n\n    .ngb-tp-spacer {\n      width: 1em;\n      text-align: center;\n    }\n\n    .chevron::before {\n      border-style: solid;\n      border-width: 0.29em 0.29em 0 0;\n      content: '';\n      display: inline-block;\n      height: 0.69em;\n      left: 0.05em;\n      position: relative;\n      top: 0.15em;\n      transform: rotate(-45deg);\n      -webkit-transform: rotate(-45deg);\n      -ms-transform: rotate(-45deg);\n      vertical-align: middle;\n      width: 0.71em;\n    }\n\n    .chevron.bottom:before {\n      top: -.3em;\n      -webkit-transform: rotate(135deg);\n      -ms-transform: rotate(135deg);\n      transform: rotate(135deg);\n    }\n\n    .btn-link {\n      outline: 0;\n    }\n\n    .btn-link.disabled {\n      cursor: not-allowed;\n      opacity: .65;\n    }\n\n    input {\n      text-align: center;\n      display: inline-block;\n      width: auto;\n    }\n  "],
                template: "\n    <fieldset [disabled]=\"disabled\" [class.disabled]=\"disabled\">\n      <div class=\"ngb-tp\">\n        <div class=\"ngb-tp-hour\">\n          <button *ngIf=\"spinners\" type=\"button\" class=\"btn-link\" [ngClass]=\"setButtonSize()\" (click)=\"changeHour(hourStep)\"\n            [disabled]=\"disabled\" [class.disabled]=\"disabled\">\n            <span class=\"chevron\"></span>\n            <span class=\"sr-only\">Increment hours</span>\n          </button>\n          <input type=\"text\" class=\"form-control\" [ngClass]=\"setFormControlSize()\" maxlength=\"2\" size=\"2\" placeholder=\"HH\"\n            [value]=\"formatHour(model?.hour)\" (change)=\"updateHour($event.target.value)\"\n            [readonly]=\"readonlyInputs\" [disabled]=\"disabled\" aria-label=\"Hours\">\n          <button *ngIf=\"spinners\" type=\"button\" class=\"btn-link\" [ngClass]=\"setButtonSize()\" (click)=\"changeHour(-hourStep)\"\n            [disabled]=\"disabled\" [class.disabled]=\"disabled\">\n            <span class=\"chevron bottom\"></span>\n            <span class=\"sr-only\">Decrement hours</span>\n          </button>\n        </div>\n        <div class=\"ngb-tp-spacer\">:</div>\n        <div class=\"ngb-tp-minute\">\n          <button *ngIf=\"spinners\" type=\"button\" class=\"btn-link\" [ngClass]=\"setButtonSize()\" (click)=\"changeMinute(minuteStep)\"\n            [disabled]=\"disabled\" [class.disabled]=\"disabled\">\n            <span class=\"chevron\"></span>\n            <span class=\"sr-only\">Increment minutes</span>\n          </button>\n          <input type=\"text\" class=\"form-control\" [ngClass]=\"setFormControlSize()\" maxlength=\"2\" size=\"2\" placeholder=\"MM\"\n            [value]=\"formatMinSec(model?.minute)\" (change)=\"updateMinute($event.target.value)\"\n            [readonly]=\"readonlyInputs\" [disabled]=\"disabled\" aria-label=\"Minutes\">\n          <button *ngIf=\"spinners\" type=\"button\" class=\"btn-link\" [ngClass]=\"setButtonSize()\" (click)=\"changeMinute(-minuteStep)\"\n            [disabled]=\"disabled\" [class.disabled]=\"disabled\">\n            <span class=\"chevron bottom\"></span>\n            <span class=\"sr-only\">Decrement minutes</span>\n          </button>\n        </div>\n        <div *ngIf=\"seconds\" class=\"ngb-tp-spacer\">:</div>\n        <div *ngIf=\"seconds\" class=\"ngb-tp-second\">\n          <button *ngIf=\"spinners\" type=\"button\" class=\"btn-link\" [ngClass]=\"setButtonSize()\" (click)=\"changeSecond(secondStep)\"\n            [disabled]=\"disabled\" [class.disabled]=\"disabled\">\n            <span class=\"chevron\"></span>\n            <span class=\"sr-only\">Increment seconds</span>\n          </button>\n          <input type=\"text\" class=\"form-control\" [ngClass]=\"setFormControlSize()\" maxlength=\"2\" size=\"2\" placeholder=\"SS\"\n            [value]=\"formatMinSec(model?.second)\" (change)=\"updateSecond($event.target.value)\"\n            [readonly]=\"readonlyInputs\" [disabled]=\"disabled\" aria-label=\"Seconds\">\n          <button *ngIf=\"spinners\" type=\"button\" class=\"btn-link\" [ngClass]=\"setButtonSize()\" (click)=\"changeSecond(-secondStep)\"\n            [disabled]=\"disabled\" [class.disabled]=\"disabled\">\n            <span class=\"chevron bottom\"></span>\n            <span class=\"sr-only\">Decrement seconds</span>\n          </button>\n        </div>\n        <div *ngIf=\"meridian\" class=\"ngb-tp-spacer\"></div>\n        <div *ngIf=\"meridian\" class=\"ngb-tp-meridian\">\n          <button type=\"button\" class=\"btn btn-outline-primary\" [ngClass]=\"setButtonSize()\"\n            [disabled]=\"disabled\" [class.disabled]=\"disabled\"\n            (click)=\"toggleMeridian()\">{{model?.hour >= 12 ? 'PM' : 'AM'}}</button>\n        </div>\n      </div>\n    </fieldset>\n  ",
                providers: [NGB_TIMEPICKER_VALUE_ACCESSOR]
            },] },
];
/** @nocollapse */
NgbTimepicker.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_4__timepicker_config__["a" /* NgbTimepickerConfig */], },
]; };
NgbTimepicker.propDecorators = {
    'meridian': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'spinners': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'seconds': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'hourStep': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'minuteStep': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'secondStep': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'readonlyInputs': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'size': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
};
//# sourceMappingURL=timepicker.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/timepicker/timepicker.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbTimepickerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__timepicker__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/timepicker/timepicker.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__timepicker_config__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/timepicker/timepicker-config.js");
/* unused harmony reexport NgbTimepicker */
/* unused harmony reexport NgbTimepickerConfig */






var NgbTimepickerModule = (function () {
    function NgbTimepickerModule() {
    }
    NgbTimepickerModule.forRoot = function () { return { ngModule: NgbTimepickerModule, providers: [__WEBPACK_IMPORTED_MODULE_3__timepicker_config__["a" /* NgbTimepickerConfig */]] }; };
    return NgbTimepickerModule;
}());

NgbTimepickerModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */], args: [{ declarations: [__WEBPACK_IMPORTED_MODULE_2__timepicker__["a" /* NgbTimepicker */]], exports: [__WEBPACK_IMPORTED_MODULE_2__timepicker__["a" /* NgbTimepicker */]], imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]] },] },
];
/** @nocollapse */
NgbTimepickerModule.ctorParameters = function () { return []; };
//# sourceMappingURL=timepicker.module.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/tooltip/tooltip-config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbTooltipConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

/**
 * Configuration service for the NgbTooltip directive.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the tooltips used in the application.
 */
var NgbTooltipConfig = (function () {
    function NgbTooltipConfig() {
        this.placement = 'top';
        this.triggers = 'hover';
    }
    return NgbTooltipConfig;
}());

NgbTooltipConfig.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */] },
];
/** @nocollapse */
NgbTooltipConfig.ctorParameters = function () { return []; };
//# sourceMappingURL=tooltip-config.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/tooltip/tooltip.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NgbTooltipWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbTooltip; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_triggers__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/util/triggers.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_positioning__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/util/positioning.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_popup__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/util/popup.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tooltip_config__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/tooltip/tooltip-config.js");





var nextId = 0;
var NgbTooltipWindow = (function () {
    function NgbTooltipWindow(_element, _renderer) {
        this._element = _element;
        this._renderer = _renderer;
        this.placement = 'top';
    }
    NgbTooltipWindow.prototype.applyPlacement = function (_placement) {
        // remove the current placement classes
        this._renderer.removeClass(this._element.nativeElement, 'bs-tooltip-' + this.placement.toString().split('-')[0]);
        this._renderer.removeClass(this._element.nativeElement, 'bs-tooltip-' + this.placement.toString());
        // set the new placement classes
        this.placement = _placement;
        // apply the new placement
        this._renderer.addClass(this._element.nativeElement, 'bs-tooltip-' + this.placement.toString().split('-')[0]);
        this._renderer.addClass(this._element.nativeElement, 'bs-tooltip-' + this.placement.toString());
    };
    return NgbTooltipWindow;
}());

NgbTooltipWindow.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'ngb-tooltip-window',
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
                host: {
                    '[class]': '"tooltip show bs-tooltip-" + placement.split("-")[0]+" bs-tooltip-" + placement',
                    'role': 'tooltip',
                    '[id]': 'id'
                },
                template: "<div class=\"arrow\"></div><div class=\"tooltip-inner\"><ng-content></ng-content></div>",
                styles: ["\n    :host.bs-tooltip-top .arrow, :host.bs-tooltip-bottom .arrow {\n      left: 50%;\n    }\n\n    :host.bs-tooltip-top-left .arrow, :host.bs-tooltip-bottom-left .arrow {\n      left: 1em;\n    }\n\n    :host.bs-tooltip-top-right .arrow, :host.bs-tooltip-bottom-right .arrow {\n      left: auto;\n      right: 1em;\n    }\n\n    :host.bs-tooltip-left .arrow, :host.bs-tooltip-right .arrow {\n      top: 50%;\n    }\n    \n    :host.bs-tooltip-left-top .arrow, :host.bs-tooltip-right-top .arrow {\n      top: 0.7em;\n    }\n\n    :host.bs-tooltip-left-bottom .arrow, :host.bs-tooltip-right-bottom .arrow {\n      top: auto;\n      bottom: 0.7em;\n    }\n  "]
            },] },
];
/** @nocollapse */
NgbTooltipWindow.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Renderer2 */], },
]; };
NgbTooltipWindow.propDecorators = {
    'placement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'id': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
};
/**
 * A lightweight, extensible directive for fancy tooltip creation.
 */
var NgbTooltip = (function () {
    function NgbTooltip(_elementRef, _renderer, injector, componentFactoryResolver, viewContainerRef, config, ngZone) {
        var _this = this;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        /**
         * Emits an event when the tooltip is shown
         */
        this.shown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        /**
         * Emits an event when the tooltip is hidden
         */
        this.hidden = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this._ngbTooltipWindowId = "ngb-tooltip-" + nextId++;
        this.placement = config.placement;
        this.triggers = config.triggers;
        this.container = config.container;
        this._popupService = new __WEBPACK_IMPORTED_MODULE_3__util_popup__["b" /* PopupService */](NgbTooltipWindow, injector, viewContainerRef, _renderer, componentFactoryResolver);
        this._zoneSubscription = ngZone.onStable.subscribe(function () {
            if (_this._windowRef) {
                _this._windowRef.instance.applyPlacement(Object(__WEBPACK_IMPORTED_MODULE_2__util_positioning__["a" /* positionElements */])(_this._elementRef.nativeElement, _this._windowRef.location.nativeElement, _this.placement, _this.container === 'body'));
            }
        });
    }
    Object.defineProperty(NgbTooltip.prototype, "ngbTooltip", {
        get: function () { return this._ngbTooltip; },
        /**
         * Content to be displayed as tooltip. If falsy, the tooltip won't open.
         */
        set: function (value) {
            this._ngbTooltip = value;
            if (!value && this._windowRef) {
                this.close();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Opens an element’s tooltip. This is considered a “manual” triggering of the tooltip.
     * The context is an optional value to be injected into the tooltip template when it is created.
     */
    NgbTooltip.prototype.open = function (context) {
        if (!this._windowRef && this._ngbTooltip) {
            this._windowRef = this._popupService.open(this._ngbTooltip, context);
            this._windowRef.instance.id = this._ngbTooltipWindowId;
            this._renderer.setAttribute(this._elementRef.nativeElement, 'aria-describedby', this._ngbTooltipWindowId);
            if (this.container === 'body') {
                window.document.querySelector(this.container).appendChild(this._windowRef.location.nativeElement);
            }
            this._windowRef.instance.placement = Array.isArray(this.placement) ? this.placement[0] : this.placement;
            // apply styling to set basic css-classes on target element, before going for positioning
            this._windowRef.changeDetectorRef.detectChanges();
            this._windowRef.changeDetectorRef.markForCheck();
            // position tooltip along the element
            this._windowRef.instance.applyPlacement(Object(__WEBPACK_IMPORTED_MODULE_2__util_positioning__["a" /* positionElements */])(this._elementRef.nativeElement, this._windowRef.location.nativeElement, this.placement, this.container === 'body'));
            this.shown.emit();
        }
    };
    /**
     * Closes an element’s tooltip. This is considered a “manual” triggering of the tooltip.
     */
    NgbTooltip.prototype.close = function () {
        if (this._windowRef != null) {
            this._renderer.removeAttribute(this._elementRef.nativeElement, 'aria-describedby');
            this._popupService.close();
            this._windowRef = null;
            this.hidden.emit();
        }
    };
    /**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of the tooltip.
     */
    NgbTooltip.prototype.toggle = function () {
        if (this._windowRef) {
            this.close();
        }
        else {
            this.open();
        }
    };
    /**
     * Returns whether or not the tooltip is currently being shown
     */
    NgbTooltip.prototype.isOpen = function () { return this._windowRef != null; };
    NgbTooltip.prototype.ngOnInit = function () {
        this._unregisterListenersFn = Object(__WEBPACK_IMPORTED_MODULE_1__util_triggers__["a" /* listenToTriggers */])(this._renderer, this._elementRef.nativeElement, this.triggers, this.open.bind(this), this.close.bind(this), this.toggle.bind(this));
    };
    NgbTooltip.prototype.ngOnDestroy = function () {
        this.close();
        this._unregisterListenersFn();
        this._zoneSubscription.unsubscribe();
    };
    return NgbTooltip;
}());

NgbTooltip.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{ selector: '[ngbTooltip]', exportAs: 'ngbTooltip' },] },
];
/** @nocollapse */
NgbTooltip.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Renderer2 */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Injector */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ComponentFactoryResolver */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewContainerRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_4__tooltip_config__["a" /* NgbTooltipConfig */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */], },
]; };
NgbTooltip.propDecorators = {
    'placement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'triggers': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'container': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'shown': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
    'hidden': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
    'ngbTooltip': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
};
//# sourceMappingURL=tooltip.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/tooltip/tooltip.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbTooltipModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tooltip__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/tooltip/tooltip.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tooltip_config__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/tooltip/tooltip-config.js");
/* unused harmony reexport NgbTooltipConfig */
/* unused harmony reexport NgbTooltip */





var NgbTooltipModule = (function () {
    function NgbTooltipModule() {
    }
    NgbTooltipModule.forRoot = function () { return { ngModule: NgbTooltipModule, providers: [__WEBPACK_IMPORTED_MODULE_2__tooltip_config__["a" /* NgbTooltipConfig */]] }; };
    return NgbTooltipModule;
}());

NgbTooltipModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */], args: [{ declarations: [__WEBPACK_IMPORTED_MODULE_1__tooltip__["a" /* NgbTooltip */], __WEBPACK_IMPORTED_MODULE_1__tooltip__["b" /* NgbTooltipWindow */]], exports: [__WEBPACK_IMPORTED_MODULE_1__tooltip__["a" /* NgbTooltip */]], entryComponents: [__WEBPACK_IMPORTED_MODULE_1__tooltip__["b" /* NgbTooltipWindow */]] },] },
];
/** @nocollapse */
NgbTooltipModule.ctorParameters = function () { return []; };
//# sourceMappingURL=tooltip.module.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/typeahead/highlight.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbHighlight; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_util__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/util/util.js");


var NgbHighlight = (function () {
    function NgbHighlight() {
        this.highlightClass = 'ngb-highlight';
    }
    NgbHighlight.prototype.ngOnChanges = function (changes) {
        var resultStr = Object(__WEBPACK_IMPORTED_MODULE_1__util_util__["i" /* toString */])(this.result);
        var resultLC = resultStr.toLowerCase();
        var termLC = Object(__WEBPACK_IMPORTED_MODULE_1__util_util__["i" /* toString */])(this.term).toLowerCase();
        var currentIdx = 0;
        if (termLC.length > 0) {
            this.parts = resultLC.split(new RegExp("(" + Object(__WEBPACK_IMPORTED_MODULE_1__util_util__["g" /* regExpEscape */])(termLC) + ")")).map(function (part) {
                var originalPart = resultStr.substr(currentIdx, part.length);
                currentIdx += part.length;
                return originalPart;
            });
        }
        else {
            this.parts = [resultStr];
        }
    };
    return NgbHighlight;
}());

NgbHighlight.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'ngb-highlight',
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
                template: "<ng-template ngFor [ngForOf]=\"parts\" let-part let-isOdd=\"odd\">" +
                    "<span *ngIf=\"isOdd\" class=\"{{highlightClass}}\">{{part}}</span><ng-template [ngIf]=\"!isOdd\">{{part}}</ng-template>" +
                    "</ng-template>",
                styles: ["\n    .ngb-highlight {\n      font-weight: bold;\n    }\n  "]
            },] },
];
/** @nocollapse */
NgbHighlight.ctorParameters = function () { return []; };
NgbHighlight.propDecorators = {
    'highlightClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'result': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'term': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
};
//# sourceMappingURL=highlight.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/typeahead/typeahead-config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbTypeaheadConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

/**
 * Configuration service for the NgbTypeahead component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the typeaheads used in the application.
 */
var NgbTypeaheadConfig = (function () {
    function NgbTypeaheadConfig() {
        this.editable = true;
        this.focusFirst = true;
        this.showHint = false;
        this.placement = 'bottom-left';
    }
    return NgbTypeaheadConfig;
}());

NgbTypeaheadConfig.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */] },
];
/** @nocollapse */
NgbTypeaheadConfig.ctorParameters = function () { return []; };
//# sourceMappingURL=typeahead-config.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/typeahead/typeahead-window.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbTypeaheadWindow; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_util__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/util/util.js");


var NgbTypeaheadWindow = (function () {
    function NgbTypeaheadWindow() {
        this.activeIdx = 0;
        /**
         * Flag indicating if the first row should be active initially
         */
        this.focusFirst = true;
        /**
         * A function used to format a given result before display. This function should return a formatted string without any
         * HTML markup
         */
        this.formatter = __WEBPACK_IMPORTED_MODULE_1__util_util__["i" /* toString */];
        /**
         * Event raised when user selects a particular result row
         */
        this.selectEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.activeChangeEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    NgbTypeaheadWindow.prototype.getActive = function () { return this.results[this.activeIdx]; };
    NgbTypeaheadWindow.prototype.markActive = function (activeIdx) {
        this.activeIdx = activeIdx;
        this._activeChanged();
    };
    NgbTypeaheadWindow.prototype.next = function () {
        if (this.activeIdx === this.results.length - 1) {
            this.activeIdx = this.focusFirst ? (this.activeIdx + 1) % this.results.length : -1;
        }
        else {
            this.activeIdx++;
        }
        this._activeChanged();
    };
    NgbTypeaheadWindow.prototype.prev = function () {
        if (this.activeIdx < 0) {
            this.activeIdx = this.results.length - 1;
        }
        else if (this.activeIdx === 0) {
            this.activeIdx = this.focusFirst ? this.results.length - 1 : -1;
        }
        else {
            this.activeIdx--;
        }
        this._activeChanged();
    };
    NgbTypeaheadWindow.prototype.select = function (item) { this.selectEvent.emit(item); };
    NgbTypeaheadWindow.prototype.ngOnInit = function () {
        this.activeIdx = this.focusFirst ? 0 : -1;
        this._activeChanged();
    };
    NgbTypeaheadWindow.prototype._activeChanged = function () {
        this.activeChangeEvent.emit(this.activeIdx >= 0 ? this.id + '-' + this.activeIdx : undefined);
    };
    return NgbTypeaheadWindow;
}());

NgbTypeaheadWindow.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'ngb-typeahead-window',
                exportAs: 'ngbTypeaheadWindow',
                host: { 'class': 'dropdown-menu', 'style': 'display: block', 'role': 'listbox', '[id]': 'id' },
                template: "\n    <ng-template #rt let-result=\"result\" let-term=\"term\" let-formatter=\"formatter\">\n      <ngb-highlight [result]=\"formatter(result)\" [term]=\"term\"></ngb-highlight>\n    </ng-template>\n    <ng-template ngFor [ngForOf]=\"results\" let-result let-idx=\"index\">\n      <button type=\"button\" class=\"dropdown-item\" role=\"option\"\n        [id]=\"id + '-' + idx\"\n        [class.active]=\"idx === activeIdx\"\n        (mouseenter)=\"markActive(idx)\"\n        (click)=\"select(result)\">\n          <ng-template [ngTemplateOutlet]=\"resultTemplate || rt\"\n          [ngTemplateOutletContext]=\"{result: result, term: term, formatter: formatter}\"></ng-template>\n      </button>\n    </ng-template>\n  "
            },] },
];
/** @nocollapse */
NgbTypeaheadWindow.ctorParameters = function () { return []; };
NgbTypeaheadWindow.propDecorators = {
    'id': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'focusFirst': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'results': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'term': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'formatter': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'resultTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'selectEvent': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */], args: ['select',] },],
    'activeChangeEvent': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */], args: ['activeChange',] },],
};
//# sourceMappingURL=typeahead-window.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/typeahead/typeahead.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbTypeahead; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_let__ = __webpack_require__("../../../../rxjs/_esm5/operator/let.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_fromEvent__ = __webpack_require__("../../../../rxjs/_esm5/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_positioning__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/util/positioning.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__typeahead_window__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/typeahead/typeahead-window.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__util_popup__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/util/popup.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__util_util__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__typeahead_config__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/typeahead/typeahead-config.js");












var Key;
(function (Key) {
    Key[Key["Tab"] = 9] = "Tab";
    Key[Key["Enter"] = 13] = "Enter";
    Key[Key["Escape"] = 27] = "Escape";
    Key[Key["ArrowUp"] = 38] = "ArrowUp";
    Key[Key["ArrowDown"] = 40] = "ArrowDown";
})(Key || (Key = {}));
var NGB_TYPEAHEAD_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* forwardRef */])(function () { return NgbTypeahead; }),
    multi: true
};
var nextWindowId = 0;
/**
 * NgbTypeahead directive provides a simple way of creating powerful typeaheads from any text input
 */
var NgbTypeahead = (function () {
    function NgbTypeahead(_elementRef, _viewContainerRef, _renderer, _injector, componentFactoryResolver, config, ngZone) {
        var _this = this;
        this._elementRef = _elementRef;
        this._viewContainerRef = _viewContainerRef;
        this._renderer = _renderer;
        this._injector = _injector;
        /** Placement of a typeahead accepts:
         *    "top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right",
         *    "left", "left-top", "left-bottom", "right", "right-top", "right-bottom"
         * and array of above values.
        */
        this.placement = 'bottom-left';
        /**
         * An event emitted when a match is selected. Event payload is of type NgbTypeaheadSelectItemEvent.
         */
        this.selectItem = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.popupId = "ngb-typeahead-" + nextWindowId++;
        this._onTouched = function () { };
        this._onChange = function (_) { };
        this.container = config.container;
        this.editable = config.editable;
        this.focusFirst = config.focusFirst;
        this.showHint = config.showHint;
        this.placement = config.placement;
        this._valueChanges = Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_fromEvent__["a" /* fromEvent */])(_elementRef.nativeElement, 'input', function ($event) { return $event.target.value; });
        this._resubscribeTypeahead = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this._popupService = new __WEBPACK_IMPORTED_MODULE_9__util_popup__["b" /* PopupService */](__WEBPACK_IMPORTED_MODULE_8__typeahead_window__["a" /* NgbTypeaheadWindow */], _injector, _viewContainerRef, _renderer, componentFactoryResolver);
        this._zoneSubscription = ngZone.onStable.subscribe(function () {
            if (_this.isPopupOpen()) {
                Object(__WEBPACK_IMPORTED_MODULE_7__util_positioning__["a" /* positionElements */])(_this._elementRef.nativeElement, _this._windowRef.location.nativeElement, _this.placement, _this.container === 'body');
            }
        });
    }
    NgbTypeahead.prototype.ngOnInit = function () {
        var _this = this;
        var inputValues$ = __WEBPACK_IMPORTED_MODULE_4_rxjs_operator_do__["a" /* _do */].call(this._valueChanges, function (value) {
            _this._userInput = value;
            if (_this.editable) {
                _this._onChange(value);
            }
        });
        var results$ = __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_let__["a" /* letProto */].call(inputValues$, this.ngbTypeahead);
        var processedResults$ = __WEBPACK_IMPORTED_MODULE_4_rxjs_operator_do__["a" /* _do */].call(results$, function () {
            if (!_this.editable) {
                _this._onChange(undefined);
            }
        });
        var userInput$ = __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_switchMap__["a" /* switchMap */].call(this._resubscribeTypeahead, function () { return processedResults$; });
        this._subscription = this._subscribeToUserInput(userInput$);
    };
    NgbTypeahead.prototype.ngOnDestroy = function () {
        this._closePopup();
        this._unsubscribeFromUserInput();
        this._zoneSubscription.unsubscribe();
    };
    NgbTypeahead.prototype.registerOnChange = function (fn) { this._onChange = fn; };
    NgbTypeahead.prototype.registerOnTouched = function (fn) { this._onTouched = fn; };
    NgbTypeahead.prototype.writeValue = function (value) { this._writeInputValue(this._formatItemForInput(value)); };
    NgbTypeahead.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    NgbTypeahead.prototype.dismissPopup = function () {
        if (this.isPopupOpen()) {
            this._closePopup();
            this._writeInputValue(this._userInput);
        }
    };
    NgbTypeahead.prototype.isPopupOpen = function () { return this._windowRef != null; };
    NgbTypeahead.prototype.handleBlur = function () {
        this._resubscribeTypeahead.next(null);
        this._onTouched();
    };
    NgbTypeahead.prototype.handleKeyDown = function (event) {
        if (!this.isPopupOpen()) {
            return;
        }
        if (Key[Object(__WEBPACK_IMPORTED_MODULE_10__util_util__["i" /* toString */])(event.which)]) {
            switch (event.which) {
                case Key.ArrowDown:
                    event.preventDefault();
                    this._windowRef.instance.next();
                    this._showHint();
                    break;
                case Key.ArrowUp:
                    event.preventDefault();
                    this._windowRef.instance.prev();
                    this._showHint();
                    break;
                case Key.Enter:
                case Key.Tab:
                    var result = this._windowRef.instance.getActive();
                    if (Object(__WEBPACK_IMPORTED_MODULE_10__util_util__["b" /* isDefined */])(result)) {
                        event.preventDefault();
                        event.stopPropagation();
                        this._selectResult(result);
                    }
                    this._closePopup();
                    break;
                case Key.Escape:
                    event.preventDefault();
                    this._resubscribeTypeahead.next(null);
                    this.dismissPopup();
                    break;
            }
        }
    };
    NgbTypeahead.prototype._openPopup = function () {
        var _this = this;
        if (!this.isPopupOpen()) {
            this._windowRef = this._popupService.open();
            this._windowRef.instance.id = this.popupId;
            this._windowRef.instance.selectEvent.subscribe(function (result) { return _this._selectResultClosePopup(result); });
            this._windowRef.instance.activeChangeEvent.subscribe(function (activeId) { return _this.activeDescendant = activeId; });
            if (this.container === 'body') {
                window.document.querySelector(this.container).appendChild(this._windowRef.location.nativeElement);
            }
        }
    };
    NgbTypeahead.prototype._closePopup = function () {
        this._popupService.close();
        this._windowRef = null;
        this.activeDescendant = undefined;
    };
    NgbTypeahead.prototype._selectResult = function (result) {
        var defaultPrevented = false;
        this.selectItem.emit({ item: result, preventDefault: function () { defaultPrevented = true; } });
        this._resubscribeTypeahead.next(null);
        if (!defaultPrevented) {
            this.writeValue(result);
            this._onChange(result);
        }
    };
    NgbTypeahead.prototype._selectResultClosePopup = function (result) {
        this._selectResult(result);
        this._closePopup();
    };
    NgbTypeahead.prototype._showHint = function () {
        if (this.showHint) {
            var userInputLowerCase = this._userInput.toLowerCase();
            var formattedVal = this._formatItemForInput(this._windowRef.instance.getActive());
            if (userInputLowerCase === formattedVal.substr(0, this._userInput.length).toLowerCase()) {
                this._writeInputValue(this._userInput + formattedVal.substr(this._userInput.length));
                this._elementRef.nativeElement['setSelectionRange'].apply(this._elementRef.nativeElement, [this._userInput.length, formattedVal.length]);
            }
            else {
                this.writeValue(this._windowRef.instance.getActive());
            }
        }
    };
    NgbTypeahead.prototype._formatItemForInput = function (item) {
        return item && this.inputFormatter ? this.inputFormatter(item) : Object(__WEBPACK_IMPORTED_MODULE_10__util_util__["i" /* toString */])(item);
    };
    NgbTypeahead.prototype._writeInputValue = function (value) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'value', value);
    };
    NgbTypeahead.prototype._subscribeToUserInput = function (userInput$) {
        var _this = this;
        return userInput$.subscribe(function (results) {
            if (!results || results.length === 0) {
                _this._closePopup();
            }
            else {
                _this._openPopup();
                _this._windowRef.instance.focusFirst = _this.focusFirst;
                _this._windowRef.instance.results = results;
                _this._windowRef.instance.term = _this._elementRef.nativeElement.value;
                if (_this.resultFormatter) {
                    _this._windowRef.instance.formatter = _this.resultFormatter;
                }
                if (_this.resultTemplate) {
                    _this._windowRef.instance.resultTemplate = _this.resultTemplate;
                }
                _this._showHint();
                // The observable stream we are subscribing to might have async steps
                // and if a component containing typeahead is using the OnPush strategy
                // the change detection turn wouldn't be invoked automatically.
                _this._windowRef.changeDetectorRef.detectChanges();
            }
        });
    };
    NgbTypeahead.prototype._unsubscribeFromUserInput = function () {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
        this._subscription = null;
    };
    return NgbTypeahead;
}());

NgbTypeahead.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{
                selector: 'input[ngbTypeahead]',
                host: {
                    '(blur)': 'handleBlur()',
                    '[class.open]': 'isPopupOpen()',
                    '(document:click)': 'dismissPopup()',
                    '(keydown)': 'handleKeyDown($event)',
                    'autocomplete': 'off',
                    'autocapitalize': 'off',
                    'autocorrect': 'off',
                    'role': 'combobox',
                    'aria-multiline': 'false',
                    '[attr.aria-autocomplete]': 'showHint ? "both" : "list"',
                    '[attr.aria-activedescendant]': 'activeDescendant',
                    '[attr.aria-owns]': 'isPopupOpen() ? popupId : null',
                    '[attr.aria-expanded]': 'isPopupOpen()'
                },
                providers: [NGB_TYPEAHEAD_VALUE_ACCESSOR]
            },] },
];
/** @nocollapse */
NgbTypeahead.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewContainerRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Renderer2 */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Injector */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ComponentFactoryResolver */], },
    { type: __WEBPACK_IMPORTED_MODULE_11__typeahead_config__["a" /* NgbTypeaheadConfig */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */], },
]; };
NgbTypeahead.propDecorators = {
    'container': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'editable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'focusFirst': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'inputFormatter': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'ngbTypeahead': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'resultFormatter': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'resultTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'showHint': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'placement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'selectItem': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
};
//# sourceMappingURL=typeahead.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/typeahead/typeahead.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbTypeaheadModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__highlight__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/typeahead/highlight.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__typeahead_window__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/typeahead/typeahead-window.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__typeahead__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/typeahead/typeahead.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__typeahead_config__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/typeahead/typeahead-config.js");
/* unused harmony reexport NgbHighlight */
/* unused harmony reexport NgbTypeaheadWindow */
/* unused harmony reexport NgbTypeaheadConfig */
/* unused harmony reexport NgbTypeahead */










var NgbTypeaheadModule = (function () {
    function NgbTypeaheadModule() {
    }
    NgbTypeaheadModule.forRoot = function () { return { ngModule: NgbTypeaheadModule, providers: [__WEBPACK_IMPORTED_MODULE_5__typeahead_config__["a" /* NgbTypeaheadConfig */]] }; };
    return NgbTypeaheadModule;
}());

NgbTypeaheadModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */], args: [{
                declarations: [__WEBPACK_IMPORTED_MODULE_4__typeahead__["a" /* NgbTypeahead */], __WEBPACK_IMPORTED_MODULE_2__highlight__["a" /* NgbHighlight */], __WEBPACK_IMPORTED_MODULE_3__typeahead_window__["a" /* NgbTypeaheadWindow */]],
                exports: [__WEBPACK_IMPORTED_MODULE_4__typeahead__["a" /* NgbTypeahead */], __WEBPACK_IMPORTED_MODULE_2__highlight__["a" /* NgbHighlight */]],
                imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
                entryComponents: [__WEBPACK_IMPORTED_MODULE_3__typeahead_window__["a" /* NgbTypeaheadWindow */]]
            },] },
];
/** @nocollapse */
NgbTypeaheadModule.ctorParameters = function () { return []; };
//# sourceMappingURL=typeahead.module.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/util/popup.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PopupService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

var ContentRef = (function () {
    function ContentRef(nodes, viewRef, componentRef) {
        this.nodes = nodes;
        this.viewRef = viewRef;
        this.componentRef = componentRef;
    }
    return ContentRef;
}());

var PopupService = (function () {
    function PopupService(type, _injector, _viewContainerRef, _renderer, componentFactoryResolver) {
        this._injector = _injector;
        this._viewContainerRef = _viewContainerRef;
        this._renderer = _renderer;
        this._windowFactory = componentFactoryResolver.resolveComponentFactory(type);
    }
    PopupService.prototype.open = function (content, context) {
        if (!this._windowRef) {
            this._contentRef = this._getContentRef(content, context);
            this._windowRef =
                this._viewContainerRef.createComponent(this._windowFactory, 0, this._injector, this._contentRef.nodes);
        }
        return this._windowRef;
    };
    PopupService.prototype.close = function () {
        if (this._windowRef) {
            this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._windowRef.hostView));
            this._windowRef = null;
            if (this._contentRef.viewRef) {
                this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef));
                this._contentRef = null;
            }
        }
    };
    PopupService.prototype._getContentRef = function (content, context) {
        if (!content) {
            return new ContentRef([]);
        }
        else if (content instanceof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* TemplateRef */]) {
            var viewRef = this._viewContainerRef.createEmbeddedView(content, context);
            return new ContentRef([viewRef.rootNodes], viewRef);
        }
        else {
            return new ContentRef([[this._renderer.createText("" + content)]]);
        }
    };
    return PopupService;
}());

//# sourceMappingURL=popup.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/util/positioning.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Positioning */
/* harmony export (immutable) */ __webpack_exports__["a"] = positionElements;
// previous version:
// https://github.com/angular-ui/bootstrap/blob/07c31d0731f7cb068a1932b8e01d2312b796b4ec/src/position/position.js
var Positioning = (function () {
    function Positioning() {
    }
    Positioning.prototype.getAllStyles = function (element) { return window.getComputedStyle(element); };
    Positioning.prototype.getStyle = function (element, prop) { return this.getAllStyles(element)[prop]; };
    Positioning.prototype.isStaticPositioned = function (element) {
        return (this.getStyle(element, 'position') || 'static') === 'static';
    };
    Positioning.prototype.offsetParent = function (element) {
        var offsetParentEl = element.offsetParent || document.documentElement;
        while (offsetParentEl && offsetParentEl !== document.documentElement && this.isStaticPositioned(offsetParentEl)) {
            offsetParentEl = offsetParentEl.offsetParent;
        }
        return offsetParentEl || document.documentElement;
    };
    Positioning.prototype.position = function (element, round) {
        if (round === void 0) { round = true; }
        var elPosition;
        var parentOffset = { width: 0, height: 0, top: 0, bottom: 0, left: 0, right: 0 };
        if (this.getStyle(element, 'position') === 'fixed') {
            elPosition = element.getBoundingClientRect();
        }
        else {
            var offsetParentEl = this.offsetParent(element);
            elPosition = this.offset(element, false);
            if (offsetParentEl !== document.documentElement) {
                parentOffset = this.offset(offsetParentEl, false);
            }
            parentOffset.top += offsetParentEl.clientTop;
            parentOffset.left += offsetParentEl.clientLeft;
        }
        elPosition.top -= parentOffset.top;
        elPosition.bottom -= parentOffset.top;
        elPosition.left -= parentOffset.left;
        elPosition.right -= parentOffset.left;
        if (round) {
            elPosition.top = Math.round(elPosition.top);
            elPosition.bottom = Math.round(elPosition.bottom);
            elPosition.left = Math.round(elPosition.left);
            elPosition.right = Math.round(elPosition.right);
        }
        return elPosition;
    };
    Positioning.prototype.offset = function (element, round) {
        if (round === void 0) { round = true; }
        var elBcr = element.getBoundingClientRect();
        var viewportOffset = {
            top: window.pageYOffset - document.documentElement.clientTop,
            left: window.pageXOffset - document.documentElement.clientLeft
        };
        var elOffset = {
            height: elBcr.height || element.offsetHeight,
            width: elBcr.width || element.offsetWidth,
            top: elBcr.top + viewportOffset.top,
            bottom: elBcr.bottom + viewportOffset.top,
            left: elBcr.left + viewportOffset.left,
            right: elBcr.right + viewportOffset.left
        };
        if (round) {
            elOffset.height = Math.round(elOffset.height);
            elOffset.width = Math.round(elOffset.width);
            elOffset.top = Math.round(elOffset.top);
            elOffset.bottom = Math.round(elOffset.bottom);
            elOffset.left = Math.round(elOffset.left);
            elOffset.right = Math.round(elOffset.right);
        }
        return elOffset;
    };
    Positioning.prototype.positionElements = function (hostElement, targetElement, placement, appendToBody) {
        var hostElPosition = appendToBody ? this.offset(hostElement, false) : this.position(hostElement, false);
        var targetElStyles = this.getAllStyles(targetElement);
        var targetElBCR = targetElement.getBoundingClientRect();
        var placementPrimary = placement.split('-')[0] || 'top';
        var placementSecondary = placement.split('-')[1] || 'center';
        var targetElPosition = {
            'height': targetElBCR.height || targetElement.offsetHeight,
            'width': targetElBCR.width || targetElement.offsetWidth,
            'top': 0,
            'bottom': targetElBCR.height || targetElement.offsetHeight,
            'left': 0,
            'right': targetElBCR.width || targetElement.offsetWidth
        };
        switch (placementPrimary) {
            case 'top':
                targetElPosition.top =
                    hostElPosition.top - (targetElement.offsetHeight + parseFloat(targetElStyles.marginBottom));
                break;
            case 'bottom':
                targetElPosition.top = hostElPosition.top + hostElPosition.height;
                break;
            case 'left':
                targetElPosition.left =
                    hostElPosition.left - (targetElement.offsetWidth + parseFloat(targetElStyles.marginRight));
                break;
            case 'right':
                targetElPosition.left = hostElPosition.left + hostElPosition.width;
                break;
        }
        switch (placementSecondary) {
            case 'top':
                targetElPosition.top = hostElPosition.top;
                break;
            case 'bottom':
                targetElPosition.top = hostElPosition.top + hostElPosition.height - targetElement.offsetHeight;
                break;
            case 'left':
                targetElPosition.left = hostElPosition.left;
                break;
            case 'right':
                targetElPosition.left = hostElPosition.left + hostElPosition.width - targetElement.offsetWidth;
                break;
            case 'center':
                if (placementPrimary === 'top' || placementPrimary === 'bottom') {
                    targetElPosition.left = hostElPosition.left + hostElPosition.width / 2 - targetElement.offsetWidth / 2;
                }
                else {
                    targetElPosition.top = hostElPosition.top + hostElPosition.height / 2 - targetElement.offsetHeight / 2;
                }
                break;
        }
        targetElPosition.top = Math.round(targetElPosition.top);
        targetElPosition.bottom = Math.round(targetElPosition.bottom);
        targetElPosition.left = Math.round(targetElPosition.left);
        targetElPosition.right = Math.round(targetElPosition.right);
        return targetElPosition;
    };
    // get the availble placements of the target element in the viewport dependeing on the host element
    Positioning.prototype.getAvailablePlacements = function (hostElement, targetElement) {
        var availablePlacements = [];
        var hostElemClientRect = hostElement.getBoundingClientRect();
        var targetElemClientRect = targetElement.getBoundingClientRect();
        var html = document.documentElement;
        // left: check if target width can be placed between host left and viewport start and also height of target is
        // inside viewport
        if (targetElemClientRect.width < hostElemClientRect.left) {
            // check for left only
            if ((hostElemClientRect.top + hostElemClientRect.height / 2 - targetElement.offsetHeight / 2) > 0) {
                availablePlacements.splice(availablePlacements.length, 1, 'left');
            }
            // check for left-top and left-bottom
            this.setSecondaryPlacementForLeftRight(hostElemClientRect, targetElemClientRect, 'left', availablePlacements);
        }
        // top: target height is less than host top
        if (targetElemClientRect.height < hostElemClientRect.top) {
            availablePlacements.splice(availablePlacements.length, 1, 'top');
            this.setSecondaryPlacementForTopBottom(hostElemClientRect, targetElemClientRect, 'top', availablePlacements);
        }
        // right: check if target width can be placed between host right and viewport end and also height of target is
        // inside viewport
        if ((window.innerWidth || html.clientWidth) - hostElemClientRect.right > targetElemClientRect.width) {
            // check for right only
            if ((hostElemClientRect.top + hostElemClientRect.height / 2 - targetElement.offsetHeight / 2) > 0) {
                availablePlacements.splice(availablePlacements.length, 1, 'right');
            }
            // check for right-top and right-bottom
            this.setSecondaryPlacementForLeftRight(hostElemClientRect, targetElemClientRect, 'right', availablePlacements);
        }
        // bottom: check if there is enough space between host bottom and viewport end for target height
        if ((window.innerHeight || html.clientHeight) - hostElemClientRect.bottom > targetElemClientRect.height) {
            availablePlacements.splice(availablePlacements.length, 1, 'bottom');
            this.setSecondaryPlacementForTopBottom(hostElemClientRect, targetElemClientRect, 'bottom', availablePlacements);
        }
        return availablePlacements;
    };
    /**
     * check if secondary placement for left and right are available i.e. left-top, left-bottom, right-top, right-bottom
     * primaryplacement: left|right
     * availablePlacementArr: array in which available placemets to be set
     */
    Positioning.prototype.setSecondaryPlacementForLeftRight = function (hostElemClientRect, targetElemClientRect, primaryPlacement, availablePlacementArr) {
        var html = document.documentElement;
        // check for left-bottom
        if (targetElemClientRect.height <= hostElemClientRect.bottom) {
            availablePlacementArr.splice(availablePlacementArr.length, 1, primaryPlacement + '-bottom');
        }
        if ((window.innerHeight || html.clientHeight) - hostElemClientRect.top >= targetElemClientRect.height) {
            availablePlacementArr.splice(availablePlacementArr.length, 1, primaryPlacement + '-top');
        }
    };
    /**
     * check if secondary placement for top and bottom are available i.e. top-left, top-right, bottom-left, bottom-right
     * primaryplacement: top|bottom
     * availablePlacementArr: array in which available placemets to be set
     */
    Positioning.prototype.setSecondaryPlacementForTopBottom = function (hostElemClientRect, targetElemClientRect, primaryPlacement, availablePlacementArr) {
        var html = document.documentElement;
        // check for left-bottom
        if ((window.innerHeight || html.clientHeight) - hostElemClientRect.left >= targetElemClientRect.width) {
            availablePlacementArr.splice(availablePlacementArr.length, 1, primaryPlacement + '-left');
        }
        if (targetElemClientRect.width <= hostElemClientRect.right) {
            availablePlacementArr.splice(availablePlacementArr.length, 1, primaryPlacement + '-right');
        }
    };
    return Positioning;
}());

var positionService = new Positioning();
/*
 * Accept the placement array and applies the appropriate placement dependent on the viewport.
 * Returns the applied placement.
 * In case of auto placement, placements are selected in order 'top', 'bottom', 'left', 'right'.
 * */
function positionElements(hostElement, targetElement, placement, appendToBody) {
    var placementVals = Array.isArray(placement) ? placement : [placement];
    // replace auto placement with other placements
    var hasAuto = placementVals.findIndex(function (val) { return val === 'auto'; });
    if (hasAuto >= 0) {
        ['top', 'right', 'bottom', 'left'].forEach(function (obj) {
            if (placementVals.find(function (val) { return val.search('^' + obj + '|^' + obj + '-') !== -1; }) == null) {
                placementVals.splice(hasAuto++, 1, obj);
            }
        });
    }
    // coordinates where to position
    var topVal = 0, leftVal = 0;
    var appliedPlacement;
    // get available placements
    var availablePlacements = positionService.getAvailablePlacements(hostElement, targetElement);
    var _loop_1 = function (item, index) {
        // check if passed placement is present in the available placement or otherwise apply the last placement in the
        // passed placement list
        if ((availablePlacements.find(function (val) { return val === item; }) != null) || (placementVals.length === index + 1)) {
            appliedPlacement = item;
            var pos = positionService.positionElements(hostElement, targetElement, item, appendToBody);
            topVal = pos.top;
            leftVal = pos.left;
            return "break";
        }
    };
    // iterate over all the passed placements
    for (var _i = 0, _a = toItemIndexes(placementVals); _i < _a.length; _i++) {
        var _b = _a[_i], item = _b.item, index = _b.index;
        var state_1 = _loop_1(item, index);
        if (state_1 === "break")
            break;
    }
    targetElement.style.top = topVal + "px";
    targetElement.style.left = leftVal + "px";
    return appliedPlacement;
}
// function to get index and item of an array
function toItemIndexes(a) {
    return a.map(function (item, index) { return ({ item: item, index: index }); });
}
//# sourceMappingURL=positioning.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/util/triggers.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Trigger */
/* unused harmony export parseTriggers */
/* harmony export (immutable) */ __webpack_exports__["a"] = listenToTriggers;
var Trigger = (function () {
    function Trigger(open, close) {
        this.open = open;
        this.close = close;
        if (!close) {
            this.close = open;
        }
    }
    Trigger.prototype.isManual = function () { return this.open === 'manual' || this.close === 'manual'; };
    return Trigger;
}());

var DEFAULT_ALIASES = {
    'hover': ['mouseenter', 'mouseleave']
};
function parseTriggers(triggers, aliases) {
    if (aliases === void 0) { aliases = DEFAULT_ALIASES; }
    var trimmedTriggers = (triggers || '').trim();
    if (trimmedTriggers.length === 0) {
        return [];
    }
    var parsedTriggers = trimmedTriggers.split(/\s+/).map(function (trigger) { return trigger.split(':'); }).map(function (triggerPair) {
        var alias = aliases[triggerPair[0]] || triggerPair;
        return new Trigger(alias[0], alias[1]);
    });
    var manualTriggers = parsedTriggers.filter(function (triggerPair) { return triggerPair.isManual(); });
    if (manualTriggers.length > 1) {
        throw 'Triggers parse error: only one manual trigger is allowed';
    }
    if (manualTriggers.length === 1 && parsedTriggers.length > 1) {
        throw 'Triggers parse error: manual trigger can\'t be mixed with other triggers';
    }
    return parsedTriggers;
}
var noopFn = function () { };
function listenToTriggers(renderer, nativeElement, triggers, openFn, closeFn, toggleFn) {
    var parsedTriggers = parseTriggers(triggers);
    var listeners = [];
    if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
        return noopFn;
    }
    parsedTriggers.forEach(function (trigger) {
        if (trigger.open === trigger.close) {
            listeners.push(renderer.listen(nativeElement, trigger.open, toggleFn));
        }
        else {
            listeners.push(renderer.listen(nativeElement, trigger.open, openFn), renderer.listen(nativeElement, trigger.close, closeFn));
        }
    });
    return function () { listeners.forEach(function (unsubscribeFn) { return unsubscribeFn(); }); };
}
//# sourceMappingURL=triggers.js.map

/***/ }),

/***/ "../../../../@ng-bootstrap/ng-bootstrap/util/util.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["h"] = toInteger;
/* harmony export (immutable) */ __webpack_exports__["i"] = toString;
/* harmony export (immutable) */ __webpack_exports__["a"] = getValueInRange;
/* harmony export (immutable) */ __webpack_exports__["e"] = isString;
/* harmony export (immutable) */ __webpack_exports__["d"] = isNumber;
/* harmony export (immutable) */ __webpack_exports__["c"] = isInteger;
/* harmony export (immutable) */ __webpack_exports__["b"] = isDefined;
/* harmony export (immutable) */ __webpack_exports__["f"] = padNumber;
/* harmony export (immutable) */ __webpack_exports__["g"] = regExpEscape;
function toInteger(value) {
    return parseInt("" + value, 10);
}
function toString(value) {
    return (value !== undefined && value !== null) ? "" + value : '';
}
function getValueInRange(value, max, min) {
    if (min === void 0) { min = 0; }
    return Math.max(Math.min(value, max), min);
}
function isString(value) {
    return typeof value === 'string';
}
function isNumber(value) {
    return !isNaN(toInteger(value));
}
function isInteger(value) {
    return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
}
function isDefined(value) {
    return value !== undefined && value !== null;
}
function padNumber(value) {
    if (isNumber(value)) {
        return ("0" + value).slice(-2);
    }
    else {
        return '';
    }
}
function regExpEscape(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}
//# sourceMappingURL=util.js.map

/***/ })

});
//# sourceMappingURL=ng-bootstrap.module.chunk.js.map