webpackJsonp(["ngx-bootstrap.module"],{

/***/ "../../../../../dist/ngx-tour-ngx-bootstrap/ngx-tour-ngx-bootstrap.es5.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NgxbTourService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TourNgxBootstrapModule; });
/* unused harmony export TourAnchorNgxBootstrapDirective */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_operator_observeOn__ = __webpack_require__("../../../../rxjs/_esm5/operator/observeOn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_scheduler_queue__ = __webpack_require__("../../../../rxjs/_esm5/scheduler/queue.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_operator_scan__ = __webpack_require__("../../../../rxjs/_esm5/operator/scan.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_rxjs_add_observable_from__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/from.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_rxjs_add_operator_toArray__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toArray.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_withinviewport__ = __webpack_require__("../../../../../dist/ngx-tour-ngx-bootstrap/node_modules/withinviewport/withinviewport.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_withinviewport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_withinviewport__);
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
var NgxbTourService = /** @class */ (function (_super) {
    __extends(NgxbTourService, _super);
    function NgxbTourService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NgxbTourService;
}(TourService));
NgxbTourService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */] },
];
/**
 * @nocollapse
 */
NgxbTourService.ctorParameters = function () { return []; };
/**
 * Configuration service for the Popover directive.
 * You can inject this service, typically in your root component, and customize
 * the values of its properties in order to provide default values for all the
 * popovers used in the application.
 */
var PopoverConfig = (function () {
    function PopoverConfig() {
        /**
         * Placement of a popover. Accepts: "top", "bottom", "left", "right", "auto"
         */
        this.placement = 'top';
        /**
         * Specifies events that should trigger. Supports a space separated list of
         * event names.
         */
        this.triggers = 'click';
        this.outsideClick = false;
    }
    PopoverConfig.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */] },
    ];
    /** @nocollapse */
    PopoverConfig.ctorParameters = function () { return []; };
    return PopoverConfig;
}());
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
var Trigger = (function () {
    function Trigger(open, close) {
        this.open = open;
        this.close = close || open;
    }
    Trigger.prototype.isManual = function () {
        return this.open === 'manual' || this.close === 'manual';
    };
    return Trigger;
}());
var DEFAULT_ALIASES = {
    hover: ['mouseover', 'mouseout'],
    focus: ['focusin', 'focusout']
};
function parseTriggers(triggers, aliases) {
    if (aliases === void 0) {
        aliases = DEFAULT_ALIASES;
    }
    var trimmedTriggers = (triggers || '').trim();
    if (trimmedTriggers.length === 0) {
        return [];
    }
    var parsedTriggers = trimmedTriggers
        .split(/\s+/)
        .map(function (trigger) { return trigger.split(':'); })
        .map(function (triggerPair) {
        var alias = aliases[triggerPair[0]] || triggerPair;
        return new Trigger(alias[0], alias[1]);
    });
    var manualTriggers = parsedTriggers.filter(function (triggerPair) {
        return triggerPair.isManual();
    });
    if (manualTriggers.length > 1) {
        throw new Error('Triggers parse error: only one manual trigger is allowed');
    }
    if (manualTriggers.length === 1 && parsedTriggers.length > 1) {
        throw new Error('Triggers parse error: manual trigger can\'t be mixed with other triggers');
    }
    return parsedTriggers;
}
function listenToTriggersV2(renderer, options) {
    var parsedTriggers = parseTriggers(options.triggers);
    var target = options.target;
    // do nothing
    if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
        return Function.prototype;
    }
    // all listeners
    var listeners = [];
    // lazy listeners registration
    var _registerHide = [];
    var registerHide = function () {
        // add hide listeners to unregister array
        _registerHide.forEach(function (fn) { return listeners.push(fn()); });
        // register hide events only once
        _registerHide.length = 0;
    };
    // register open\close\toggle listeners
    parsedTriggers.forEach(function (trigger) {
        var useToggle = trigger.open === trigger.close;
        var showFn = useToggle ? options.toggle : options.show;
        if (!useToggle) {
            _registerHide.push(function () {
                return renderer.listen(target, trigger.close, options.hide);
            });
        }
        listeners.push(renderer.listen(target, trigger.open, function () { return showFn(registerHide); }));
    });
    return function () {
        listeners.forEach(function (unsubscribeFn) { return unsubscribeFn(); });
    };
}
function registerOutsideClick(renderer, options) {
    if (!options.outsideClick) {
        return Function.prototype;
    }
    return renderer.listen('document', 'click', function (event) {
        if (options.target && options.target.contains(event.target)) {
            return;
        }
        if (options.targets &&
            options.targets.some(function (target) { return target.contains(event.target); })) {
            return;
        }
        options.hide();
    });
}
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
var ContentRef = (function () {
    function ContentRef(nodes, viewRef, componentRef) {
        this.nodes = nodes;
        this.viewRef = viewRef;
        this.componentRef = componentRef;
    }
    return ContentRef;
}());
// tslint:disable:max-file-line-count
// todo: add delay support
// todo: merge events onShow, onShown, etc...
// todo: add global positioning configuration?
var ComponentLoader = (function () {
    /**
     * Do not use this directly, it should be instanced via
     * `ComponentLoadFactory.attach`
     * @internal
     */
    // tslint:disable-next-line
    function ComponentLoader(_viewContainerRef, _renderer, _elementRef, _injector, _componentFactoryResolver, _ngZone, _applicationRef, _posService) {
        this._viewContainerRef = _viewContainerRef;
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._injector = _injector;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._ngZone = _ngZone;
        this._applicationRef = _applicationRef;
        this._posService = _posService;
        this.onBeforeShow = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onShown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onBeforeHide = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onHidden = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this._providers = [];
        this._isHiding = false;
        this._listenOpts = {};
        this._globalListener = Function.prototype;
    }
    Object.defineProperty(ComponentLoader.prototype, "isShown", {
        get: function () {
            if (this._isHiding) {
                return false;
            }
            return !!this._componentRef;
        },
        enumerable: true,
        configurable: true
    });
    ComponentLoader.prototype.attach = function (compType) {
        this._componentFactory = this._componentFactoryResolver
            .resolveComponentFactory(compType);
        return this;
    };
    // todo: add behaviour: to target element, `body`, custom element
    ComponentLoader.prototype.to = function (container) {
        this.container = container || this.container;
        return this;
    };
    ComponentLoader.prototype.position = function (opts) {
        this.attachment = opts.attachment || this.attachment;
        this._elementRef = opts.target || this._elementRef;
        return this;
    };
    ComponentLoader.prototype.provide = function (provider) {
        this._providers.push(provider);
        return this;
    };
    // todo: appendChild to element or document.querySelector(this.container)
    ComponentLoader.prototype.show = function (opts) {
        if (opts === void 0) {
            opts = {};
        }
        this._subscribePositioning();
        this._innerComponent = null;
        if (!this._componentRef) {
            this.onBeforeShow.emit();
            this._contentRef = this._getContentRef(opts.content, opts.context);
            var injector = __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* ReflectiveInjector */].resolveAndCreate(this._providers, this._injector);
            this._componentRef = this._componentFactory.create(injector, this._contentRef.nodes);
            this._applicationRef.attachView(this._componentRef.hostView);
            // this._componentRef = this._viewContainerRef
            //   .createComponent(this._componentFactory, 0, injector, this._contentRef.nodes);
            this.instance = this._componentRef.instance;
            Object.assign(this._componentRef.instance, opts);
            if (this.container instanceof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) {
                this.container.nativeElement.appendChild(this._componentRef.location.nativeElement);
            }
            if (this.container === 'body' && typeof document !== 'undefined') {
                document
                    .querySelector(this.container)
                    .appendChild(this._componentRef.location.nativeElement);
            }
            if (!this.container &&
                this._elementRef &&
                this._elementRef.nativeElement.parentElement) {
                this._elementRef.nativeElement.parentElement.appendChild(this._componentRef.location.nativeElement);
            }
            // we need to manually invoke change detection since events registered
            // via
            // Renderer::listen() are not picked up by change detection with the
            // OnPush strategy
            if (this._contentRef.componentRef) {
                this._innerComponent = this._contentRef.componentRef.instance;
                this._contentRef.componentRef.changeDetectorRef.markForCheck();
                this._contentRef.componentRef.changeDetectorRef.detectChanges();
            }
            this._componentRef.changeDetectorRef.markForCheck();
            this._componentRef.changeDetectorRef.detectChanges();
            this.onShown.emit(this._componentRef.instance);
        }
        this._registerOutsideClick();
        return this._componentRef;
    };
    ComponentLoader.prototype.hide = function () {
        if (!this._componentRef) {
            return this;
        }
        this.onBeforeHide.emit(this._componentRef.instance);
        var componentEl = this._componentRef.location.nativeElement;
        componentEl.parentNode.removeChild(componentEl);
        if (this._contentRef.componentRef) {
            this._contentRef.componentRef.destroy();
        }
        this._componentRef.destroy();
        if (this._viewContainerRef && this._contentRef.viewRef) {
            this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef));
        }
        // this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._componentRef.hostView));
        //
        // if (this._contentRef.viewRef && this._viewContainerRef.indexOf(this._contentRef.viewRef) !== -1) {
        //   this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef));
        // }
        this._contentRef = null;
        this._componentRef = null;
        this._removeGlobalListener();
        this.onHidden.emit();
        return this;
    };
    ComponentLoader.prototype.toggle = function () {
        if (this.isShown) {
            this.hide();
            return;
        }
        this.show();
    };
    ComponentLoader.prototype.dispose = function () {
        if (this.isShown) {
            this.hide();
        }
        this._unsubscribePositioning();
        if (this._unregisterListenersFn) {
            this._unregisterListenersFn();
        }
    };
    ComponentLoader.prototype.listen = function (listenOpts) {
        var _this = this;
        this.triggers = listenOpts.triggers || this.triggers;
        this._listenOpts.outsideClick = listenOpts.outsideClick;
        listenOpts.target = listenOpts.target || this._elementRef.nativeElement;
        var hide = (this._listenOpts.hide = function () {
            return listenOpts.hide ? listenOpts.hide() : void _this.hide();
        });
        var show = (this._listenOpts.show = function (registerHide) {
            listenOpts.show ? listenOpts.show(registerHide) : _this.show(registerHide);
            registerHide();
        });
        var toggle = function (registerHide) {
            _this.isShown ? hide() : show(registerHide);
        };
        this._unregisterListenersFn = listenToTriggersV2(this._renderer, {
            target: listenOpts.target,
            triggers: listenOpts.triggers,
            show: show,
            hide: hide,
            toggle: toggle
        });
        return this;
    };
    ComponentLoader.prototype._removeGlobalListener = function () {
        if (this._globalListener) {
            this._globalListener();
            this._globalListener = null;
        }
    };
    ComponentLoader.prototype.attachInline = function (vRef, template) {
        this._inlineViewRef = vRef.createEmbeddedView(template);
        return this;
    };
    ComponentLoader.prototype._registerOutsideClick = function () {
        var _this = this;
        if (!this._componentRef || !this._componentRef.location) {
            return;
        }
        // why: should run after first event bubble
        if (this._listenOpts.outsideClick) {
            var target_1 = this._componentRef.location.nativeElement;
            setTimeout(function () {
                _this._globalListener = registerOutsideClick(_this._renderer, {
                    targets: [target_1, _this._elementRef.nativeElement],
                    outsideClick: _this._listenOpts.outsideClick,
                    hide: function () { return _this._listenOpts.hide(); }
                });
            });
        }
    };
    ComponentLoader.prototype.getInnerComponent = function () {
        return this._innerComponent;
    };
    ComponentLoader.prototype._subscribePositioning = function () {
        var _this = this;
        if (this._zoneSubscription || !this.attachment) {
            return;
        }
        this._zoneSubscription = this._ngZone.onStable.subscribe(function () {
            if (!_this._componentRef) {
                return;
            }
            _this._posService.position({
                element: _this._componentRef.location,
                target: _this._elementRef,
                attachment: _this.attachment,
                appendToBody: _this.container === 'body'
            });
        });
    };
    ComponentLoader.prototype._unsubscribePositioning = function () {
        if (!this._zoneSubscription) {
            return;
        }
        this._zoneSubscription.unsubscribe();
        this._zoneSubscription = null;
    };
    ComponentLoader.prototype._getContentRef = function (content, context) {
        if (!content) {
            return new ContentRef([]);
        }
        if (content instanceof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* TemplateRef */]) {
            if (this._viewContainerRef) {
                var _viewRef = this._viewContainerRef
                    .createEmbeddedView(content, context);
                _viewRef.markForCheck();
                return new ContentRef([_viewRef.rootNodes], _viewRef);
            }
            var viewRef = content.createEmbeddedView({});
            this._applicationRef.attachView(viewRef);
            return new ContentRef([viewRef.rootNodes], viewRef);
        }
        if (typeof content === 'function') {
            var contentCmptFactory = this._componentFactoryResolver.resolveComponentFactory(content);
            var modalContentInjector = __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* ReflectiveInjector */].resolveAndCreate(this._providers.slice(), this._injector);
            var componentRef = contentCmptFactory.create(modalContentInjector);
            this._applicationRef.attachView(componentRef.hostView);
            return new ContentRef([[componentRef.location.nativeElement]], componentRef.hostView, componentRef);
        }
        return new ContentRef([[this._renderer.createText("" + content)]]);
    };
    return ComponentLoader;
}());
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
// previous version:
// https://github.com/angular-ui/bootstrap/blob/07c31d0731f7cb068a1932b8e01d2312b796b4ec/src/position/position.js
// tslint:disable
var Positioning = (function () {
    function Positioning() {
    }
    Positioning.prototype.position = function (element, round) {
        if (round === void 0) {
            round = true;
        }
        var elPosition;
        var parentOffset = {
            width: 0,
            height: 0,
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
        };
        if (this.getStyle(element, 'position') === 'fixed') {
            var bcRect = element.getBoundingClientRect();
            elPosition = {
                width: bcRect.width,
                height: bcRect.height,
                top: bcRect.top,
                bottom: bcRect.bottom,
                left: bcRect.left,
                right: bcRect.right
            };
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
        if (round === void 0) {
            round = true;
        }
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
        var hostElPosition = appendToBody
            ? this.offset(hostElement, false)
            : this.position(hostElement, false);
        var targetElStyles = this.getAllStyles(targetElement);
        var shiftWidth = {
            left: hostElPosition.left,
            center: hostElPosition.left +
                hostElPosition.width / 2 -
                targetElement.offsetWidth / 2,
            right: hostElPosition.left + hostElPosition.width
        };
        var shiftHeight = {
            top: hostElPosition.top,
            center: hostElPosition.top +
                hostElPosition.height / 2 -
                targetElement.offsetHeight / 2,
            bottom: hostElPosition.top + hostElPosition.height
        };
        var targetElBCR = targetElement.getBoundingClientRect();
        var placementPrimary = placement.split(' ')[0] || 'top';
        var placementSecondary = placement.split(' ')[1] || 'center';
        var targetElPosition = {
            height: targetElBCR.height || targetElement.offsetHeight,
            width: targetElBCR.width || targetElement.offsetWidth,
            top: 0,
            bottom: targetElBCR.height || targetElement.offsetHeight,
            left: 0,
            right: targetElBCR.width || targetElement.offsetWidth
        };
        if (placementPrimary === 'auto') {
            var newPlacementPrimary = this.autoPosition(targetElPosition, hostElPosition, targetElement, placementSecondary);
            if (!newPlacementPrimary)
                newPlacementPrimary = this.autoPosition(targetElPosition, hostElPosition, targetElement);
            if (newPlacementPrimary)
                placementPrimary = newPlacementPrimary;
            targetElement.classList.add(placementPrimary);
        }
        switch (placementPrimary) {
            case 'top':
                targetElPosition.top =
                    hostElPosition.top -
                        (targetElement.offsetHeight +
                            parseFloat(targetElStyles.marginBottom));
                targetElPosition.bottom +=
                    hostElPosition.top - targetElement.offsetHeight;
                targetElPosition.left = shiftWidth[placementSecondary];
                targetElPosition.right += shiftWidth[placementSecondary];
                break;
            case 'bottom':
                targetElPosition.top = shiftHeight[placementPrimary];
                targetElPosition.bottom += shiftHeight[placementPrimary];
                targetElPosition.left = shiftWidth[placementSecondary];
                targetElPosition.right += shiftWidth[placementSecondary];
                break;
            case 'left':
                targetElPosition.top = shiftHeight[placementSecondary];
                targetElPosition.bottom += shiftHeight[placementSecondary];
                targetElPosition.left =
                    hostElPosition.left -
                        (targetElement.offsetWidth + parseFloat(targetElStyles.marginRight));
                targetElPosition.right +=
                    hostElPosition.left - targetElement.offsetWidth;
                break;
            case 'right':
                targetElPosition.top = shiftHeight[placementSecondary];
                targetElPosition.bottom += shiftHeight[placementSecondary];
                targetElPosition.left = shiftWidth[placementPrimary];
                targetElPosition.right += shiftWidth[placementPrimary];
                break;
        }
        targetElPosition.top = Math.round(targetElPosition.top);
        targetElPosition.bottom = Math.round(targetElPosition.bottom);
        targetElPosition.left = Math.round(targetElPosition.left);
        targetElPosition.right = Math.round(targetElPosition.right);
        return targetElPosition;
    };
    Positioning.prototype.autoPosition = function (targetElPosition, hostElPosition, targetElement, preferredPosition) {
        if ((!preferredPosition || preferredPosition === 'right') &&
            targetElPosition.left + hostElPosition.left - targetElement.offsetWidth <
                0) {
            return 'right';
        }
        else if ((!preferredPosition || preferredPosition === 'top') &&
            targetElPosition.bottom +
                hostElPosition.bottom +
                targetElement.offsetHeight >
                window.innerHeight) {
            return 'top';
        }
        else if ((!preferredPosition || preferredPosition === 'bottom') &&
            targetElPosition.top + hostElPosition.top - targetElement.offsetHeight < 0) {
            return 'bottom';
        }
        else if ((!preferredPosition || preferredPosition === 'left') &&
            targetElPosition.right +
                hostElPosition.right +
                targetElement.offsetWidth >
                window.innerWidth) {
            return 'left';
        }
        return null;
    };
    Positioning.prototype.getAllStyles = function (element) {
        return window.getComputedStyle(element);
    };
    Positioning.prototype.getStyle = function (element, prop) {
        return this.getAllStyles(element)[prop];
    };
    Positioning.prototype.isStaticPositioned = function (element) {
        return (this.getStyle(element, 'position') || 'static') === 'static';
    };
    Positioning.prototype.offsetParent = function (element) {
        var offsetParentEl = element.offsetParent || document.documentElement;
        while (offsetParentEl &&
            offsetParentEl !== document.documentElement &&
            this.isStaticPositioned(offsetParentEl)) {
            offsetParentEl = offsetParentEl.offsetParent;
        }
        return offsetParentEl || document.documentElement;
    };
    return Positioning;
}());
var positionService = new Positioning();
function positionElements(hostElement, targetElement, placement, appendToBody) {
    var pos = positionService.positionElements(hostElement, targetElement, placement, appendToBody);
    targetElement.style.top = pos.top + "px";
    targetElement.style.left = pos.left + "px";
}
var PositioningService = (function () {
    function PositioningService() {
    }
    PositioningService.prototype.position = function (options) {
        var element = options.element, target = options.target, attachment = options.attachment, appendToBody = options.appendToBody;
        positionElements(_getHtmlElement(target), _getHtmlElement(element), attachment, appendToBody);
    };
    PositioningService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */] },
    ];
    /** @nocollapse */
    PositioningService.ctorParameters = function () { return []; };
    return PositioningService;
}());
function _getHtmlElement(element) {
    // it means that we got a selector
    if (typeof element === 'string') {
        return document.querySelector(element);
    }
    if (element instanceof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) {
        return element.nativeElement;
    }
    return element;
}
var ComponentLoaderFactory = (function () {
    function ComponentLoaderFactory(_componentFactoryResolver, _ngZone, _injector, _posService, _applicationRef) {
        this._componentFactoryResolver = _componentFactoryResolver;
        this._ngZone = _ngZone;
        this._injector = _injector;
        this._posService = _posService;
        this._applicationRef = _applicationRef;
    }
    /**
     *
     * @param _elementRef
     * @param _viewContainerRef
     * @param _renderer
     * @returns {ComponentLoader}
     */
    ComponentLoaderFactory.prototype.createLoader = function (_elementRef, _viewContainerRef, _renderer) {
        return new ComponentLoader(_viewContainerRef, _renderer, _elementRef, this._injector, this._componentFactoryResolver, this._ngZone, this._applicationRef, this._posService);
    };
    ComponentLoaderFactory.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */] },
    ];
    /** @nocollapse */
    ComponentLoaderFactory.ctorParameters = function () {
        return [
            { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ComponentFactoryResolver */], },
            { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */], },
            { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Injector */], },
            { type: PositioningService, },
            { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ApplicationRef */], },
        ];
    };
    return ComponentLoaderFactory;
}());
/*tslint:disable */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * JS version of browser APIs. This library can only run in the browser.
 */
var win = (typeof window !== 'undefined' && window) || {};
var document$1 = win.document;
var location = win.location;
var gc = win['gc'] ? function () { return win['gc'](); } : function () { return null; };
var performance = win['performance'] ? win['performance'] : null;
var Event = win['Event'];
var MouseEvent = win['MouseEvent'];
var KeyboardEvent = win['KeyboardEvent'];
var EventTarget = win['EventTarget'];
var History = win['History'];
var Location = win['Location'];
var EventListener = win['EventListener'];
var guessedVersion;
function _guessBsVersion() {
    if (typeof document === 'undefined') {
        return null;
    }
    var spanEl = document.createElement('span');
    spanEl.innerText = 'test bs version';
    document.body.appendChild(spanEl);
    spanEl.classList.add('d-none');
    var rect = spanEl.getBoundingClientRect();
    document.body.removeChild(spanEl);
    if (!rect) {
        return 'bs3';
    }
    return rect.top === 0 ? 'bs4' : 'bs3';
}
// todo: in ngx-bootstrap, bs4 will became a default one
function isBs3() {
    if (typeof win === 'undefined') {
        return true;
    }
    if (typeof win.__theme === 'undefined') {
        if (guessedVersion) {
            return guessedVersion === 'bs3';
        }
        guessedVersion = _guessBsVersion();
        return guessedVersion === 'bs3';
    }
    return win.__theme !== 'bs4';
}
var PopoverContainerComponent = (function () {
    function PopoverContainerComponent(config) {
        Object.assign(this, config);
    }
    Object.defineProperty(PopoverContainerComponent.prototype, "isBs3", {
        get: function () {
            return isBs3();
        },
        enumerable: true,
        configurable: true
    });
    PopoverContainerComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                    selector: 'popover-container',
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
                    // tslint:disable-next-line
                    host: {
                        '[class]': '"popover in popover-" + placement + " " + "bs-popover-" + placement + " " + placement + " " + containerClass',
                        '[class.show]': '!isBs3',
                        role: 'tooltip',
                        style: 'display:block;'
                    },
                    styles: [
                        "\n    :host.bs-popover-top .arrow, :host.bs-popover-bottom .arrow {\n      left: calc(50% - 5px);\n    }\n    :host.bs-popover-left .arrow, :host.bs-popover-right .arrow {\n      top: calc(50% - 2.5px);\n    }\n  "
                    ],
                    template: "<div class=\"popover-arrow arrow\"></div> <h3 class=\"popover-title popover-header\" *ngIf=\"title\">{{ title }}</h3> <div class=\"popover-content popover-body\"> <ng-content></ng-content> </div> "
                },] },
    ];
    /** @nocollapse */
    PopoverContainerComponent.ctorParameters = function () {
        return [
            { type: PopoverConfig, },
        ];
    };
    PopoverContainerComponent.propDecorators = {
        'placement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'title': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    };
    return PopoverContainerComponent;
}());
/**
 * A lightweight, extensible directive for fancy popover creation.
 */
var PopoverDirective = (function () {
    function PopoverDirective(_elementRef, _renderer, _viewContainerRef, _config, cis) {
        /**
         * Close popover on outside click
         */
        this.outsideClick = false;
        /**
         * Css class for popover container
         */
        this.containerClass = '';
        this._isInited = false;
        this._popover = cis
            .createLoader(_elementRef, _viewContainerRef, _renderer)
            .provide({ provide: PopoverConfig, useValue: _config });
        Object.assign(this, _config);
        this.onShown = this._popover.onShown;
        this.onHidden = this._popover.onHidden;
        // fix: no focus on button on Mac OS #1795
        if (typeof window !== 'undefined') {
            _elementRef.nativeElement.addEventListener('click', function () {
                try {
                    _elementRef.nativeElement.focus();
                }
                catch (err) {
                    return;
                }
            });
        }
    }
    Object.defineProperty(PopoverDirective.prototype, "isOpen", {
        /**
         * Returns whether or not the popover is currently being shown
         */
        get: function () {
            return this._popover.isShown;
        },
        set: function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    PopoverDirective.prototype.show = function () {
        if (this._popover.isShown || !this.popover) {
            return;
        }
        this._popover
            .attach(PopoverContainerComponent)
            .to(this.container)
            .position({ attachment: this.placement })
            .show({
            content: this.popover,
            context: this.popoverContext,
            placement: this.placement,
            title: this.popoverTitle,
            containerClass: this.containerClass
        });
        this.isOpen = true;
    };
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    PopoverDirective.prototype.hide = function () {
        if (this.isOpen) {
            this._popover.hide();
            this.isOpen = false;
        }
    };
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    PopoverDirective.prototype.toggle = function () {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    };
    PopoverDirective.prototype.ngOnInit = function () {
        var _this = this;
        // fix: seems there are an issue with `routerLinkActive`
        // which result in duplicated call ngOnInit without call to ngOnDestroy
        // read more: https://github.com/valor-software/ngx-bootstrap/issues/1885
        if (this._isInited) {
            return;
        }
        this._isInited = true;
        this._popover.listen({
            triggers: this.triggers,
            outsideClick: this.outsideClick,
            show: function () { return _this.show(); }
        });
    };
    PopoverDirective.prototype.ngOnDestroy = function () {
        this._popover.dispose();
    };
    PopoverDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{ selector: '[popover]', exportAs: 'bs-popover' },] },
    ];
    /** @nocollapse */
    PopoverDirective.ctorParameters = function () {
        return [
            { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
            { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Renderer2 */], },
            { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewContainerRef */], },
            { type: PopoverConfig, },
            { type: ComponentLoaderFactory, },
        ];
    };
    PopoverDirective.propDecorators = {
        'popover': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'popoverContext': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'popoverTitle': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'placement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'outsideClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'triggers': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'container': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'containerClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'isOpen': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'onShown': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
        'onHidden': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
    };
    return PopoverDirective;
}());
var PopoverModule = (function () {
    function PopoverModule() {
    }
    PopoverModule.forRoot = function () {
        return {
            ngModule: PopoverModule,
            providers: [PopoverConfig, ComponentLoaderFactory, PositioningService]
        };
    };
    PopoverModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
                    declarations: [PopoverDirective, PopoverContainerComponent],
                    exports: [PopoverDirective],
                    entryComponents: [PopoverContainerComponent]
                },] },
    ];
    /** @nocollapse */
    PopoverModule.ctorParameters = function () { return []; };
    return PopoverModule;
}());
function zeroFill(num, targetLength, forceSign) {
    var absNumber = "" + Math.abs(num);
    var zerosToFill = targetLength - absNumber.length;
    var sign = num >= 0;
    return ((sign ? (forceSign ? '+' : '') : '-') +
        Math.pow(10, Math.max(0, zerosToFill))
            .toString()
            .substr(1) +
        absNumber);
}
function absFloor(number) {
    return number < 0 ? Math.ceil(number) || 0 : Math.floor(number);
}
function createUTCDate(y, m, d, h, M, s, ms) {
    var date = new Date(Date.UTC.apply(null, arguments));
    // the Date.UTC function remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
        date.setUTCFullYear(y);
    }
    return date;
}
function isDateValid(date) {
    return date && !isNaN(date.getTime());
}
function isFunction(fn) {
    return (fn instanceof Function ||
        Object.prototype.toString.call(fn) === '[object Function]');
}
function isArray(input) {
    return (input instanceof Array ||
        Object.prototype.toString.call(input) === '[object Array]');
}
function hasOwnProp(a /*object*/, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
}
function isObject(input /*object*/) {
    // IE8 will treat undefined and null as object if it wasn't for
    // input != null
    return (input != null && Object.prototype.toString.call(input) === '[object Object]');
}
function isUndefined(input) {
    return input === void 0;
}
function toInt(argumentForCoercion) {
    var coercedNumber = +argumentForCoercion;
    var value = 0;
    if (coercedNumber !== 0 && isFinite(coercedNumber)) {
        value = absFloor(coercedNumber);
    }
    return value;
}
var formatFunctions = {};
var formatTokenFunctions = {};
// tslint:disable-next-line
var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
// token:    'M'
// padded:   ['MM', 2]
// ordinal:  'Mo'
// callback: function () { this.month() + 1 }
function addFormatToken(token, padded, ordinal, callback) {
    var func = callback;
    if (token) {
        formatTokenFunctions[token] = func;
    }
    if (padded) {
        var key = padded[0];
        formatTokenFunctions[key] = function (date, format, locale) {
            return zeroFill(func.apply(null, arguments), padded[1], padded[2]);
        };
    }
    if (ordinal) {
        formatTokenFunctions[ordinal] = function (date, format, locale) {
            // todo: fix this
            return locale.ordinal(func.apply(null, arguments), token);
        };
    }
}
function makeFormatFunction(format) {
    var array = format.match(formattingTokens);
    var length = array.length;
    var formatArr = new Array(length);
    for (var i = 0; i < length; i++) {
        formatArr[i] = formatTokenFunctions[array[i]]
            ? formatTokenFunctions[array[i]]
            : removeFormattingTokens(array[i]);
    }
    return function (date, locale) {
        var output = '';
        for (var j = 0; j < length; j++) {
            output += isFunction(formatArr[j])
                ? formatArr[j].call(null, date, format, locale)
                : formatArr[j];
        }
        return output;
    };
}
function removeFormattingTokens(input) {
    if (input.match(/\[[\s\S]/)) {
        return input.replace(/^\[|\]$/g, '');
    }
    return input.replace(/\\/g, '');
}
var defaultTimeUnit = {
    year: 0,
    month: 0,
    day: 0,
    hour: 0,
    minute: 0,
    seconds: 0
};
function createDate(year, month, day, hour, minute, seconds) {
    if (month === void 0) {
        month = 0;
    }
    if (day === void 0) {
        day = 1;
    }
    if (hour === void 0) {
        hour = 0;
    }
    if (minute === void 0) {
        minute = 0;
    }
    if (seconds === void 0) {
        seconds = 0;
    }
    var _date = new Date();
    return new Date(year || _date.getFullYear(), month, day, hour, minute, seconds);
}
function shiftDate(date, unit) {
    var _unit = Object.assign({}, defaultTimeUnit, unit);
    return createDate(date.getFullYear() + _unit.year, date.getMonth() + _unit.month, date.getDate() + _unit.day, date.getHours() + _unit.hour, date.getMinutes() + _unit.minute, date.getSeconds() + _unit.seconds);
}
function setDate(date, unit) {
    return createDate(getNum(date.getFullYear(), unit.year), getNum(date.getMonth(), unit.month), getNum(date.getDate(), unit.day), getNum(date.getHours(), unit.hour), getNum(date.getMinutes(), unit.minute), getNum(date.getSeconds(), unit.seconds));
}
function getNum(def, num) {
    return typeof num === 'number' ? num : def;
}
function getHours(date, isUTC) {
    if (isUTC === void 0) {
        isUTC = false;
    }
    return isUTC ? date.getUTCHours() : date.getHours();
}
function getMinutes(date, isUTC) {
    if (isUTC === void 0) {
        isUTC = false;
    }
    return isUTC ? date.getUTCMinutes() : date.getMinutes();
}
function getSeconds(date, isUTC) {
    if (isUTC === void 0) {
        isUTC = false;
    }
    return isUTC ? date.getUTCSeconds() : date.getSeconds();
}
function getDayOfWeek(date, isUTC) {
    if (isUTC === void 0) {
        isUTC = false;
    }
    return isUTC ? date.getUTCDay() : date.getDay();
}
function getDate(date, isUTC) {
    if (isUTC === void 0) {
        isUTC = false;
    }
    return isUTC ? date.getUTCDate() : date.getDate();
}
function getMonth(date, isUTC) {
    if (isUTC === void 0) {
        isUTC = false;
    }
    return isUTC ? date.getUTCMonth() : date.getMonth();
}
function getFullYear(date, isUTC) {
    if (isUTC === void 0) {
        isUTC = false;
    }
    return isUTC ? date.getUTCFullYear() : date.getFullYear();
}
function getFirstDayOfMonth(date) {
    return createDate(date.getFullYear(), date.getMonth(), 1, date.getHours(), date.getMinutes(), date.getSeconds());
}
function isFirstDayOfWeek(date, firstDayOfWeek) {
    return date.getDay() === firstDayOfWeek;
}
function isSameMonth(date1, date2) {
    if (!date1 || !date2) {
        return false;
    }
    return isSameYear(date1, date2) && getMonth(date1) === getMonth(date2);
}
function isSameYear(date1, date2) {
    if (!date1 || !date2) {
        return false;
    }
    return getFullYear(date1) === getFullYear(date2);
}
function isSameDay(date1, date2) {
    if (!date1 || !date2) {
        return false;
    }
    return (isSameYear(date1, date2) &&
        isSameMonth(date1, date2) &&
        getDate(date1) === getDate(date2));
}
// FORMATTING
function getYear(date) {
    return getFullYear(date).toString();
}
addFormatToken('Y', null, null, function (date) {
    var y = getFullYear(date);
    return y <= 9999 ? '' + y : '+' + y;
});
addFormatToken(null, ['YY', 2], null, function (date) {
    return (getFullYear(date) % 100).toString(10);
});
addFormatToken(null, ['YYYY', 4], null, getYear);
addFormatToken(null, ['YYYYY', 5], null, getYear);
addFormatToken(null, ['YYYYYY', 6, true], null, getYear);
function daysInYear(year) {
    return isLeapYear(year) ? 366 : 365;
}
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
function startOf(date, units) {
    var unit = getDateShift(units);
    return setDate(date, unit);
}
function endOf(date, units) {
    var start = startOf(date, units);
    var shift = (_a = {}, _a[units] = 1, _a);
    var change = shiftDate(start, shift);
    change.setMilliseconds(-1);
    return change;
    var _a;
}
function getDateShift(units) {
    var unit = {};
    switch (units) {
        case 'year':
            unit.month = 0;
        /* falls through */
        case 'month':
            unit.day = 1;
        /* falls through */
        case 'week':
        case 'day':
            unit.hour = 0;
        /* falls through */
        case 'hour':
            unit.minute = 0;
        /* falls through */
        case 'minute':
            unit.seconds = 0;
    }
    return unit;
}
// FORMATTING
addFormatToken('DDD', ['DDDD', 3], 'DDDo', function (date) {
    return getDayOfYear(date).toString(10);
});
function getDayOfYear(date) {
    var date1 = +startOf(date, 'day');
    var date2 = +startOf(date, 'year');
    var someDate = date1 - date2;
    var oneDay = 1000 * 60 * 60 * 24;
    return Math.round(someDate / oneDay) + 1;
}
/**
 *
 * @param {number} year
 * @param {number} dow - start-of-first-week
 * @param {number} doy - start-of-year
 * @returns {number}
 */
function firstWeekOffset(year, dow, doy) {
    // first-week day -- which january is always in the first week (4 for iso, 1 for other)
    var fwd = 7 + dow - doy;
    // first-week day local weekday -- which local weekday is fwd
    var fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
    return -fwdlw + fwd - 1;
}
// https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
function weekOfYear(date, dow, doy) {
    var weekOffset = firstWeekOffset(getFullYear(date), dow, doy);
    var week = Math.floor((getDayOfYear(date) - weekOffset - 1) / 7) + 1;
    var resWeek;
    var resYear;
    if (week < 1) {
        resYear = getFullYear(date) - 1;
        resWeek = week + weeksInYear(resYear, dow, doy);
    }
    else if (week > weeksInYear(getFullYear(date), dow, doy)) {
        resWeek = week - weeksInYear(getFullYear(date), dow, doy);
        resYear = getFullYear(date) + 1;
    }
    else {
        resYear = getFullYear(date);
        resWeek = week;
    }
    return {
        week: resWeek,
        year: resYear
    };
}
function weeksInYear(year, dow, doy) {
    var weekOffset = firstWeekOffset(year, dow, doy);
    var weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
    return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
}
var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
var defaultLongDateFormat = {
    LTS: 'h:mm:ss A',
    LT: 'h:mm A',
    L: 'MM/DD/YYYY',
    LL: 'MMMM D, YYYY',
    LLL: 'MMMM D, YYYY h:mm A',
    LLLL: 'dddd, MMMM D, YYYY h:mm A'
};
var Locale = (function () {
    function Locale(config) {
        if (!!config) {
            this.set(config);
        }
    }
    Locale.prototype.set = function (config) {
        for (var i in config) {
            if (!config.hasOwnProperty(i)) {
                continue;
            }
            var prop = config[i];
            var key = isFunction(prop) ? i : "_" + i;
            this[key] = prop;
        }
        this._config = config;
    };
    // Months
    // LOCALES
    Locale.prototype.months = function (date, format) {
        if (!date) {
            return isArray(this._months)
                ? this._months
                : this._months.standalone;
        }
        if (isArray(this._months)) {
            return this._months[getMonth(date)];
        }
        var key = (this._months.isFormat ||
            MONTHS_IN_FORMAT)
            .test(format)
            ? 'format'
            : 'standalone';
        return this._months[key][getMonth(date)];
    };
    Locale.prototype.monthsShort = function (date, format) {
        if (!date) {
            return isArray(this._monthsShort)
                ? this._monthsShort
                : this._monthsShort.standalone;
        }
        if (isArray(this._monthsShort)) {
            return this._monthsShort[getMonth(date)];
        }
        var key = MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone';
        return this._monthsShort[key][getMonth(date)];
    };
    // Days of week
    // LOCALES
    Locale.prototype.weekdays = function (date, format) {
        var _isArray = isArray(this._weekdays);
        if (!date) {
            return _isArray
                ? this._weekdays
                : this._weekdays.standalone;
        }
        if (_isArray) {
            return this._weekdays[getDayOfWeek(date)];
        }
        var _key = this._weekdays.isFormat.test(format)
            ? 'format'
            : 'standalone';
        return this._weekdays[_key][getDayOfWeek(date)];
    };
    Locale.prototype.weekdaysMin = function (date) {
        return date ? this._weekdaysShort[getDayOfWeek(date)] : this._weekdaysShort;
    };
    Locale.prototype.weekdaysShort = function (date) {
        return date ? this._weekdaysMin[getDayOfWeek(date)] : this._weekdaysMin;
    };
    Locale.prototype.week = function (date) {
        return weekOfYear(date, this._week.dow, this._week.doy).week;
    };
    Locale.prototype.firstDayOfWeek = function () {
        return this._week.dow;
    };
    Locale.prototype.firstDayOfYear = function () {
        return this._week.doy;
    };
    Locale.prototype.meridiem = function (hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'pm' : 'PM';
        }
        return isLower ? 'am' : 'AM';
    };
    Locale.prototype.ordinal = function (num, token) {
        return this._ordinal.replace('%d', num.toString(10));
    };
    Locale.prototype.preparse = function (str) {
        return str;
    };
    Locale.prototype.postformat = function (str) {
        return str;
    };
    Locale.prototype.formatLongDate = function (key) {
        this._longDateFormat = this._longDateFormat ? this._longDateFormat : defaultLongDateFormat;
        var format = this._longDateFormat[key];
        var formatUpper = this._longDateFormat[key.toUpperCase()];
        if (format || !formatUpper) {
            return format;
        }
        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
            return val.slice(1);
        });
        return this._longDateFormat[key];
    };
    return Locale;
}());
var defaultInvalidDate = 'Invalid date';
var defaultLocaleWeek = {
    dow: 0,
    doy: 6 // The week that contains Jan 1st is the first week of the year.
};
var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
var baseConfig = {
    // calendar: defaultCalendar,
    // longDateFormat: defaultLongDateFormat,
    invalidDate: defaultInvalidDate,
    // ordinal: defaultOrdinal,
    // dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
    // relativeTime: defaultRelativeTime,
    months: defaultLocaleMonths,
    monthsShort: defaultLocaleMonthsShort,
    week: defaultLocaleWeek,
    weekdays: defaultLocaleWeekdays,
    weekdaysMin: defaultLocaleWeekdaysMin,
    weekdaysShort: defaultLocaleWeekdaysShort,
    meridiemParse: defaultLocaleMeridiemParse
};
// internal storage for locale config files
var locales = {};
var localeFamilies = {};
var globalLocale;
function chooseLocale(name) {
    return locales[name];
}
// returns locale data
function getLocale(key) {
    if (!key) {
        return globalLocale;
    }
    return chooseLocale(key);
}
function mergeConfigs(parentConfig, childConfig) {
    var res = Object.assign({}, parentConfig);
    for (var childProp in childConfig) {
        if (!hasOwnProp(childConfig, childProp)) {
            continue;
        }
        if (isObject(parentConfig[childProp]) && isObject(childConfig[childProp])) {
            res[childProp] = {};
            Object.assign(res[childProp], parentConfig[childProp]);
            Object.assign(res[childProp], childConfig[childProp]);
        }
        else if (childConfig[childProp] != null) {
            res[childProp] = childConfig[childProp];
        }
        else {
            delete res[childProp];
        }
    }
    for (var parentProp in parentConfig) {
        if (hasOwnProp(parentConfig, parentProp) &&
            !hasOwnProp(childConfig, parentProp) &&
            isObject(parentConfig[parentProp])) {
            // make sure changes to properties don't modify parent config
            res[parentProp] = Object.assign({}, res[parentProp]);
        }
    }
    return res;
}
// This function will load locale and then set the global locale.  If
// no arguments are passed in, it will simply return the current global
// locale key.
function getSetGlobalLocale(key, values) {
    var data;
    if (key) {
        data = isUndefined(values) ? getLocale(key) : defineLocale(key, values);
        if (data) {
            globalLocale = data;
        }
    }
    return globalLocale._abbr;
}
function defineLocale(name, config) {
    if (config === null) {
        // useful for testing
        delete locales[name];
        return null;
    }
    config.abbr = name;
    locales[name] = new Locale(mergeConfigs(baseConfig, config));
    if (localeFamilies[name]) {
        localeFamilies[name].forEach(function (x) {
            defineLocale(x.name, x.config);
        });
    }
    // backwards compat for now: also set the locale
    // make sure we set the locale AFTER all child locales have been
    // created, so we won't end up with the child locale set.
    getSetGlobalLocale(name);
    return locales[name];
}
/**
 * Configuration service, provides default values for the AccordionComponent.
 */
var AccordionConfig = (function () {
    function AccordionConfig() {
        /** Whether the other panels should be closed when a panel is opened */
        this.closeOthers = false;
    }
    AccordionConfig.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */] },
    ];
    /** @nocollapse */
    AccordionConfig.ctorParameters = function () { return []; };
    return AccordionConfig;
}());
/** Displays collapsible content panels for presenting information in a limited amount of space. */
var AccordionComponent = (function () {
    function AccordionComponent(config) {
        this.groups = [];
        Object.assign(this, config);
    }
    AccordionComponent.prototype.closeOtherPanels = function (openGroup) {
        if (!this.closeOthers) {
            return;
        }
        this.groups.forEach(function (group) {
            if (group !== openGroup) {
                group.isOpen = false;
            }
        });
    };
    AccordionComponent.prototype.addGroup = function (group) {
        this.groups.push(group);
    };
    AccordionComponent.prototype.removeGroup = function (group) {
        var index = this.groups.indexOf(group);
        if (index !== -1) {
            this.groups.splice(index, 1);
        }
    };
    AccordionComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                    selector: 'accordion',
                    template: "<ng-content></ng-content>",
                    host: {
                        '[attr.aria-multiselectable]': 'closeOthers',
                        role: 'tablist',
                        class: 'panel-group',
                        style: 'display: block'
                    }
                },] },
    ];
    /** @nocollapse */
    AccordionComponent.ctorParameters = function () {
        return [
            { type: AccordionConfig, },
        ];
    };
    AccordionComponent.propDecorators = {
        'closeOthers': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    };
    return AccordionComponent;
}());
/**
 * ### Accordion heading
 * Instead of using `heading` attribute on the `accordion-group`, you can use
 * an `accordion-heading` attribute on `any` element inside of a group that
 * will be used as group's header template.
 */
var AccordionPanelComponent = (function () {
    function AccordionPanelComponent(accordion) {
        /** Emits when the opened state changes */
        this.isOpenChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this._isOpen = false;
        this.accordion = accordion;
    }
    Object.defineProperty(AccordionPanelComponent.prototype, "isOpen", {
        // Questionable, maybe .panel-open should be on child div.panel element?
        /** Is accordion group open or closed. This property supports two-way binding */
        get: function () {
            return this._isOpen;
        },
        set: function (value) {
            var _this = this;
            if (value !== this.isOpen) {
                if (value) {
                    this.accordion.closeOtherPanels(this);
                }
                this._isOpen = value;
                Promise.resolve(null).then(function () {
                    _this.isOpenChange.emit(value);
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccordionPanelComponent.prototype, "isBs3", {
        get: function () {
            return isBs3();
        },
        enumerable: true,
        configurable: true
    });
    AccordionPanelComponent.prototype.ngOnInit = function () {
        this.panelClass = this.panelClass || 'panel-default';
        this.accordion.addGroup(this);
    };
    AccordionPanelComponent.prototype.ngOnDestroy = function () {
        this.accordion.removeGroup(this);
    };
    AccordionPanelComponent.prototype.toggleOpen = function (event) {
        if (!this.isDisabled) {
            this.isOpen = !this.isOpen;
        }
    };
    AccordionPanelComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                    selector: 'accordion-group, accordion-panel',
                    template: "<div class=\"panel card\" [ngClass]=\"panelClass\"> <div class=\"panel-heading card-header\" role=\"tab\" (click)=\"toggleOpen($event)\"> <div class=\"panel-title\"> <div role=\"button\" class=\"accordion-toggle\" [attr.aria-expanded]=\"isOpen\"> <div *ngIf=\"heading\" [ngClass]=\"{'text-muted': isDisabled}\"> {{ heading }} </div> <ng-content select=\"[accordion-heading]\"></ng-content> </div> </div> </div> <div class=\"panel-collapse collapse\" role=\"tabpanel\" [collapse]=\"!isOpen\"> <div class=\"panel-body card-block card-body\"> <ng-content></ng-content> </div> </div> </div> ",
                    host: {
                        class: 'panel',
                        style: 'display: block'
                    }
                },] },
    ];
    /** @nocollapse */
    AccordionPanelComponent.ctorParameters = function () {
        return [
            { type: AccordionComponent, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */], args: [AccordionComponent,] },] },
        ];
    };
    AccordionPanelComponent.propDecorators = {
        'heading': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'panelClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'isDisabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'isOpenChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
        'isOpen': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */], args: ['class.panel-open',] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    };
    return AccordionPanelComponent;
}());
// todo: add animations when https://github.com/angular/angular/issues/9947 solved
var CollapseDirective = (function () {
    function CollapseDirective(_el, _renderer) {
        this._el = _el;
        this._renderer = _renderer;
        /** This event fires as soon as content collapses */
        this.collapsed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        /** This event fires as soon as content becomes visible */
        this.expanded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        // shown
        this.isExpanded = true;
        // hidden
        this.isCollapsed = false;
        // stale state
        this.isCollapse = true;
        // animation state
        this.isCollapsing = false;
    }
    Object.defineProperty(CollapseDirective.prototype, "collapse", {
        get: function () {
            return this.isExpanded;
        },
        /** A flag indicating visibility of content (shown or hidden) */
        set: function (value) {
            this.isExpanded = value;
            this.toggle();
        },
        enumerable: true,
        configurable: true
    });
    /** allows to manually toggle content visibility */
    CollapseDirective.prototype.toggle = function () {
        if (this.isExpanded) {
            this.hide();
        }
        else {
            this.show();
        }
    };
    /** allows to manually hide content */
    CollapseDirective.prototype.hide = function () {
        this.isCollapse = false;
        this.isCollapsing = true;
        this.isExpanded = false;
        this.isCollapsed = true;
        this.isCollapse = true;
        this.isCollapsing = false;
        this.display = 'none';
        this.collapsed.emit(this);
    };
    /** allows to manually show collapsed content */
    CollapseDirective.prototype.show = function () {
        this.isCollapse = false;
        this.isCollapsing = true;
        this.isExpanded = true;
        this.isCollapsed = false;
        this.display = 'block';
        // this.height = 'auto';
        this.isCollapse = true;
        this.isCollapsing = false;
        this._renderer.setStyle(this._el.nativeElement, 'overflow', 'visible');
        this._renderer.setStyle(this._el.nativeElement, 'height', 'auto');
        this.expanded.emit(this);
    };
    CollapseDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{
                    selector: '[collapse]',
                    exportAs: 'bs-collapse',
                    host: {
                        '[class.collapse]': 'true'
                    }
                },] },
    ];
    /** @nocollapse */
    CollapseDirective.ctorParameters = function () {
        return [
            { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
            { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Renderer2 */], },
        ];
    };
    CollapseDirective.propDecorators = {
        'collapsed': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
        'expanded': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
        'display': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */], args: ['style.display',] },],
        'isExpanded': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */], args: ['class.in',] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */], args: ['class.show',] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */], args: ['attr.aria-expanded',] },],
        'isCollapsed': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */], args: ['attr.aria-hidden',] },],
        'isCollapse': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */], args: ['class.collapse',] },],
        'isCollapsing': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */], args: ['class.collapsing',] },],
        'collapse': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    };
    return CollapseDirective;
}());
var AlertConfig = (function () {
    function AlertConfig() {
        /** default alert type */
        this.type = 'warning';
        /** is alerts are dismissible by default */
        this.dismissible = false;
        /** default time before alert will dismiss */
        this.dismissOnTimeout = undefined;
    }
    AlertConfig.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */] },
    ];
    /** @nocollapse */
    AlertConfig.ctorParameters = function () { return []; };
    return AlertConfig;
}());
/*tslint:disable:no-invalid-this */
function OnChange(defaultValue) {
    var sufix = 'Change';
    return function OnChangeHandler(target, propertyKey) {
        var _key = " __" + propertyKey + "Value";
        Object.defineProperty(target, propertyKey, {
            get: function () {
                return this[_key];
            },
            set: function (value) {
                var prevValue = this[_key];
                this[_key] = value;
                if (prevValue !== value && this[propertyKey + sufix]) {
                    this[propertyKey + sufix].emit(value);
                }
            }
        });
    };
}
/* tslint:enable */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
var AlertComponent = (function () {
    function AlertComponent(_config, changeDetection) {
        var _this = this;
        this.changeDetection = changeDetection;
        /** Alert type.
         * Provides one of four bootstrap supported contextual classes:
         * `success`, `info`, `warning` and `danger`
         */
        this.type = 'warning';
        /** If set, displays an inline "Close" button */
        this.dismissible = false;
        /** Is alert visible */
        this.isOpen = true;
        /** This event fires immediately after close instance method is called,
         * $event is an instance of Alert component.
         */
        this.onClose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        /** This event fires when alert closed, $event is an instance of Alert component */
        this.onClosed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.classes = '';
        this.dismissibleChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        Object.assign(this, _config);
        this.dismissibleChange.subscribe(function (dismissible) {
            _this.classes = _this.dismissible ? 'alert-dismissible' : '';
            _this.changeDetection.markForCheck();
        });
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.dismissOnTimeout) {
            // if dismissOnTimeout used as attr without binding, it will be a string
            setTimeout(function () { return _this.close(); }, parseInt(this.dismissOnTimeout, 10));
        }
    };
    // todo: animation ` If the .fade and .in classes are present on the element,
    // the alert will fade out before it is removed`
    /**
     * Closes an alert by removing it from the DOM.
     */
    AlertComponent.prototype.close = function () {
        if (!this.isOpen) {
            return;
        }
        this.onClose.emit(this);
        this.isOpen = false;
        this.changeDetection.markForCheck();
        this.onClosed.emit(this);
    };
    AlertComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                    selector: 'alert,bs-alert',
                    template: "<ng-template [ngIf]=\"isOpen\"> <div [class]=\"'alert alert-' + type\" role=\"alert\" [ngClass]=\"classes\"> <ng-template [ngIf]=\"dismissible\"> <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\"> <span aria-hidden=\"true\">&times;</span> <span class=\"sr-only\">Close</span> </button> </ng-template> <ng-content></ng-content> </div> </ng-template> ",
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush
                },] },
    ];
    /** @nocollapse */
    AlertComponent.ctorParameters = function () {
        return [
            { type: AlertConfig, },
            { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */], },
        ];
    };
    AlertComponent.propDecorators = {
        'type': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'dismissible': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'dismissOnTimeout': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'isOpen': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'onClose': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
        'onClosed': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
    };
    __decorate([
        OnChange(),
        __metadata("design:type", Object)
    ], AlertComponent.prototype, "dismissible", void 0);
    return AlertComponent;
}());
// tslint:disable:no-use-before-declare
// TODO: config: activeClass - Class to apply to the checked buttons
var CHECKBOX_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_8__angular_forms__["e" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* forwardRef */])(function () { return ButtonCheckboxDirective; }),
    multi: true
};
/**
 * Add checkbox functionality to any element
 */
var ButtonCheckboxDirective = (function () {
    function ButtonCheckboxDirective() {
        /** Truthy value, will be set to ngModel */
        this.btnCheckboxTrue = true;
        /** Falsy value, will be set to ngModel */
        this.btnCheckboxFalse = false;
        this.state = false;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
    }
    // view -> model
    ButtonCheckboxDirective.prototype.onClick = function () {
        if (this.isDisabled) {
            return;
        }
        this.toggle(!this.state);
        this.onChange(this.value);
    };
    ButtonCheckboxDirective.prototype.ngOnInit = function () {
        this.toggle(this.trueValue === this.value);
    };
    Object.defineProperty(ButtonCheckboxDirective.prototype, "trueValue", {
        get: function () {
            return typeof this.btnCheckboxTrue !== 'undefined'
                ? this.btnCheckboxTrue
                : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonCheckboxDirective.prototype, "falseValue", {
        get: function () {
            return typeof this.btnCheckboxFalse !== 'undefined'
                ? this.btnCheckboxFalse
                : false;
        },
        enumerable: true,
        configurable: true
    });
    ButtonCheckboxDirective.prototype.toggle = function (state) {
        this.state = state;
        this.value = this.state ? this.trueValue : this.falseValue;
    };
    // ControlValueAccessor
    // model -> view
    ButtonCheckboxDirective.prototype.writeValue = function (value) {
        this.state = this.trueValue === value;
        this.value = value ? this.trueValue : this.falseValue;
    };
    ButtonCheckboxDirective.prototype.setDisabledState = function (isDisabled) {
        this.isDisabled = isDisabled;
    };
    ButtonCheckboxDirective.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    ButtonCheckboxDirective.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    ButtonCheckboxDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{
                    selector: '[btnCheckbox]',
                    providers: [CHECKBOX_CONTROL_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    ButtonCheckboxDirective.ctorParameters = function () { return []; };
    ButtonCheckboxDirective.propDecorators = {
        'btnCheckboxTrue': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'btnCheckboxFalse': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'state': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */], args: ['class.active',] },],
        'onClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */], args: ['click',] },],
    };
    return ButtonCheckboxDirective;
}());
// tslint:disable:no-use-before-declare
var RADIO_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_8__angular_forms__["e" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* forwardRef */])(function () { return ButtonRadioDirective; }),
    multi: true
};
/**
 * Create radio buttons or groups of buttons.
 * A value of a selected button is bound to a variable specified via ngModel.
 */
var ButtonRadioDirective = (function () {
    function ButtonRadioDirective(el, cdr) {
        this.el = el;
        this.cdr = cdr;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
    }
    Object.defineProperty(ButtonRadioDirective.prototype, "isActive", {
        get: function () {
            return this.btnRadio === this.value;
        },
        enumerable: true,
        configurable: true
    });
    ButtonRadioDirective.prototype.onClick = function () {
        if (this.el.nativeElement.attributes.disabled) {
            return;
        }
        if (this.uncheckable && this.btnRadio === this.value) {
            this.value = undefined;
            this.onTouched();
            this.onChange(this.value);
            return;
        }
        if (this.btnRadio !== this.value) {
            this.value = this.btnRadio;
            this.onTouched();
            this.onChange(this.value);
        }
    };
    ButtonRadioDirective.prototype.ngOnInit = function () {
        this.uncheckable = typeof this.uncheckable !== 'undefined';
    };
    ButtonRadioDirective.prototype.onBlur = function () {
        this.onTouched();
    };
    // ControlValueAccessor
    // model -> view
    ButtonRadioDirective.prototype.writeValue = function (value) {
        this.value = value;
        this.cdr.markForCheck();
    };
    ButtonRadioDirective.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    ButtonRadioDirective.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    ButtonRadioDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{
                    selector: '[btnRadio]',
                    providers: [RADIO_CONTROL_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    ButtonRadioDirective.ctorParameters = function () {
        return [
            { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
            { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */], },
        ];
    };
    ButtonRadioDirective.propDecorators = {
        'btnRadio': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'uncheckable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'isActive': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */], args: ['class.active',] },],
        'onClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */], args: ['click',] },],
    };
    return ButtonRadioDirective;
}());
var LinkedList = (function () {
    function LinkedList() {
        this.length = 0;
        this.asArray = [];
        // Array methods overriding END
    }
    LinkedList.prototype.get = function (position) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            return void 0;
        }
        var current = this.head;
        for (var index = 0; index < position; index++) {
            current = current.next;
        }
        return current.value;
    };
    LinkedList.prototype.add = function (value, position) {
        if (position === void 0) {
            position = this.length;
        }
        if (position < 0 || position > this.length) {
            throw new Error('Position is out of the list');
        }
        var node = {
            value: value,
            next: undefined,
            previous: undefined
        };
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
            this.current = node;
        }
        else {
            if (position === 0) {
                // first node
                node.next = this.head;
                this.head.previous = node;
                this.head = node;
            }
            else if (position === this.length) {
                // last node
                this.tail.next = node;
                node.previous = this.tail;
                this.tail = node;
            }
            else {
                // node in middle
                var currentPreviousNode = this.getNode(position - 1);
                var currentNextNode = currentPreviousNode.next;
                currentPreviousNode.next = node;
                currentNextNode.previous = node;
                node.previous = currentPreviousNode;
                node.next = currentNextNode;
            }
        }
        this.length++;
        this.createInternalArrayRepresentation();
    };
    LinkedList.prototype.remove = function (position) {
        if (position === void 0) {
            position = 0;
        }
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        if (position === 0) {
            // first node
            this.head = this.head.next;
            if (this.head) {
                // there is no second node
                this.head.previous = undefined;
            }
            else {
                // there is no second node
                this.tail = undefined;
            }
        }
        else if (position === this.length - 1) {
            // last node
            this.tail = this.tail.previous;
            this.tail.next = undefined;
        }
        else {
            // middle node
            var removedNode = this.getNode(position);
            removedNode.next.previous = removedNode.previous;
            removedNode.previous.next = removedNode.next;
        }
        this.length--;
        this.createInternalArrayRepresentation();
    };
    LinkedList.prototype.set = function (position, value) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        var node = this.getNode(position);
        node.value = value;
        this.createInternalArrayRepresentation();
    };
    LinkedList.prototype.toArray = function () {
        return this.asArray;
    };
    LinkedList.prototype.findAll = function (fn) {
        var current = this.head;
        var result = [];
        for (var index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result.push({ index: index, value: current.value });
            }
            current = current.next;
        }
        return result;
    };
    // Array methods overriding start
    LinkedList.prototype.push = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        args.forEach(function (arg) {
            _this.add(arg);
        });
        return this.length;
    };
    LinkedList.prototype.pop = function () {
        if (this.length === 0) {
            return undefined;
        }
        var last = this.tail;
        this.remove(this.length - 1);
        return last.value;
    };
    LinkedList.prototype.unshift = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        args.reverse();
        args.forEach(function (arg) {
            _this.add(arg, 0);
        });
        return this.length;
    };
    LinkedList.prototype.shift = function () {
        if (this.length === 0) {
            return undefined;
        }
        var lastItem = this.head.value;
        this.remove();
        return lastItem;
    };
    LinkedList.prototype.forEach = function (fn) {
        var current = this.head;
        for (var index = 0; index < this.length; index++) {
            fn(current.value, index);
            current = current.next;
        }
    };
    LinkedList.prototype.indexOf = function (value) {
        var current = this.head;
        var position = 0;
        for (var index = 0; index < this.length; index++) {
            if (current.value === value) {
                position = index;
                break;
            }
            current = current.next;
        }
        return position;
    };
    LinkedList.prototype.some = function (fn) {
        var current = this.head;
        var result = false;
        while (current && !result) {
            if (fn(current.value)) {
                result = true;
                break;
            }
            current = current.next;
        }
        return result;
    };
    LinkedList.prototype.every = function (fn) {
        var current = this.head;
        var result = true;
        while (current && result) {
            if (!fn(current.value)) {
                result = false;
            }
            current = current.next;
        }
        return result;
    };
    LinkedList.prototype.toString = function () {
        return '[Linked List]';
    };
    LinkedList.prototype.find = function (fn) {
        var current = this.head;
        var result;
        for (var index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result = current.value;
                break;
            }
            current = current.next;
        }
        return result;
    };
    LinkedList.prototype.findIndex = function (fn) {
        var current = this.head;
        var result;
        for (var index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result = index;
                break;
            }
            current = current.next;
        }
        return result;
    };
    LinkedList.prototype.getNode = function (position) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        var current = this.head;
        for (var index = 0; index < position; index++) {
            current = current.next;
        }
        return current;
    };
    LinkedList.prototype.createInternalArrayRepresentation = function () {
        var outArray = [];
        var current = this.head;
        while (current) {
            outArray.push(current.value);
            current = current.next;
        }
        this.asArray = outArray;
    };
    return LinkedList;
}());
var Utils = (function () {
    function Utils() {
    }
    Utils.reflow = function (element) {
        (function (bs) { return bs; })(element.offsetHeight);
    };
    // source: https://github.com/jquery/jquery/blob/master/src/css/var/getStyles.js
    Utils.getStyles = function (elem) {
        // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
        // IE throws on elements created in popups
        // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
        var view = elem.ownerDocument.defaultView;
        if (!view || !view.opener) {
            view = win;
        }
        return view.getComputedStyle(elem);
    };
    return Utils;
}());
var CarouselConfig = (function () {
    function CarouselConfig() {
        /** Default interval of auto changing of slides */
        this.interval = 5000;
        /** Is loop of auto changing of slides can be paused */
        this.noPause = false;
        /** Is slides can wrap from the last to the first slide */
        this.noWrap = false;
    }
    CarouselConfig.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */] },
    ];
    /** @nocollapse */
    CarouselConfig.ctorParameters = function () { return []; };
    return CarouselConfig;
}());
// tslint:disable:max-file-line-count
/***
 * pause (not yet supported) (?string='hover') - event group name which pauses
 * the cycling of the carousel, if hover pauses on mouseenter and resumes on
 * mouseleave keyboard (not yet supported) (?boolean=true) - if false
 * carousel will not react to keyboard events
 * note: swiping not yet supported
 */
/****
 * Problems:
 * 1) if we set an active slide via model changes, .active class remains on a
 * current slide.
 * 2) if we have only one slide, we shouldn't show prev/next nav buttons
 * 3) if first or last slide is active and noWrap is true, there should be
 * "disabled" class on the nav buttons.
 * 4) default interval should be equal 5000
 */
var Direction;
(function (Direction) {
    Direction[Direction["UNKNOWN"] = 0] = "UNKNOWN";
    Direction[Direction["NEXT"] = 1] = "NEXT";
    Direction[Direction["PREV"] = 2] = "PREV";
})(Direction || (Direction = {}));
/**
 * Base element to create carousel
 */
var CarouselComponent = (function () {
    function CarouselComponent(config, ngZone) {
        this.ngZone = ngZone;
        /** Will be emitted when active slide has been changed. Part of two-way-bindable [(activeSlide)] property */
        this.activeSlideChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */](false);
        this._slides = new LinkedList();
        this.destroyed = false;
        Object.assign(this, config);
    }
    Object.defineProperty(CarouselComponent.prototype, "activeSlide", {
        get: function () {
            return this._currentActiveSlide;
        },
        /** Index of currently displayed slide(started for 0) */
        set: function (index) {
            if (this._slides.length && index !== this._currentActiveSlide) {
                this._select(index);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "interval", {
        /**
         * Delay of item cycling in milliseconds. If false, carousel won't cycle
         * automatically.
         */
        get: function () {
            return this._interval;
        },
        set: function (value) {
            this._interval = value;
            this.restartTimer();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "slides", {
        get: function () {
            return this._slides.toArray();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "isBs4", {
        get: function () {
            return !isBs3();
        },
        enumerable: true,
        configurable: true
    });
    CarouselComponent.prototype.ngOnDestroy = function () {
        this.destroyed = true;
    };
    /**
     * Adds new slide. If this slide is first in collection - set it as active
     * and starts auto changing
     * @param slide
     */
    CarouselComponent.prototype.addSlide = function (slide) {
        this._slides.add(slide);
        if (this._slides.length === 1) {
            this._currentActiveSlide = void 0;
            this.activeSlide = 0;
            this.play();
        }
    };
    /**
     * Removes specified slide. If this slide is active - will roll to another
     * slide
     * @param slide
     */
    CarouselComponent.prototype.removeSlide = function (slide) {
        var _this = this;
        var remIndex = this._slides.indexOf(slide);
        if (this._currentActiveSlide === remIndex) {
            // removing of active slide
            var nextSlideIndex_1 = void 0;
            if (this._slides.length > 1) {
                // if this slide last - will roll to first slide, if noWrap flag is
                // FALSE or to previous, if noWrap is TRUE in case, if this slide in
                // middle of collection, index of next slide is same to removed
                nextSlideIndex_1 = !this.isLast(remIndex)
                    ? remIndex
                    : this.noWrap ? remIndex - 1 : 0;
            }
            this._slides.remove(remIndex);
            // prevents exception with changing some value after checking
            setTimeout(function () {
                _this._select(nextSlideIndex_1);
            }, 0);
        }
        else {
            this._slides.remove(remIndex);
            var currentSlideIndex_1 = this.getCurrentSlideIndex();
            setTimeout(function () {
                // after removing, need to actualize index of current active slide
                _this._currentActiveSlide = currentSlideIndex_1;
                _this.activeSlideChange.emit(_this._currentActiveSlide);
            }, 0);
        }
    };
    /**
     * Rolling to next slide
     * @param force: {boolean} if true - will ignore noWrap flag
     */
    CarouselComponent.prototype.nextSlide = function (force) {
        if (force === void 0) {
            force = false;
        }
        this.activeSlide = this.findNextSlideIndex(Direction.NEXT, force);
    };
    /**
     * Rolling to previous slide
     * @param force: {boolean} if true - will ignore noWrap flag
     */
    CarouselComponent.prototype.previousSlide = function (force) {
        if (force === void 0) {
            force = false;
        }
        this.activeSlide = this.findNextSlideIndex(Direction.PREV, force);
    };
    /**
     * Rolling to specified slide
     * @param index: {number} index of slide, which must be shown
     */
    CarouselComponent.prototype.selectSlide = function (index) {
        this.activeSlide = index;
    };
    /**
     * Starts a auto changing of slides
     */
    CarouselComponent.prototype.play = function () {
        if (!this.isPlaying) {
            this.isPlaying = true;
            this.restartTimer();
        }
    };
    /**
     * Stops a auto changing of slides
     */
    CarouselComponent.prototype.pause = function () {
        if (!this.noPause) {
            this.isPlaying = false;
            this.resetTimer();
        }
    };
    /**
     * Finds and returns index of currently displayed slide
     * @returns {number}
     */
    CarouselComponent.prototype.getCurrentSlideIndex = function () {
        return this._slides.findIndex(function (slide) { return slide.active; });
    };
    /**
     * Defines, whether the specified index is last in collection
     * @param index
     * @returns {boolean}
     */
    CarouselComponent.prototype.isLast = function (index) {
        return index + 1 >= this._slides.length;
    };
    /**
     * Defines next slide index, depending of direction
     * @param direction: Direction(UNKNOWN|PREV|NEXT)
     * @param force: {boolean} if TRUE - will ignore noWrap flag, else will
     *   return undefined if next slide require wrapping
     * @returns {any}
     */
    CarouselComponent.prototype.findNextSlideIndex = function (direction, force) {
        var nextSlideIndex = 0;
        if (!force &&
            (this.isLast(this.activeSlide) &&
                direction !== Direction.PREV &&
                this.noWrap)) {
            return void 0;
        }
        switch (direction) {
            case Direction.NEXT:
                // if this is last slide, not force, looping is disabled
                // and need to going forward - select current slide, as a next
                nextSlideIndex = !this.isLast(this._currentActiveSlide)
                    ? this._currentActiveSlide + 1
                    : !force && this.noWrap ? this._currentActiveSlide : 0;
                break;
            case Direction.PREV:
                // if this is first slide, not force, looping is disabled
                // and need to going backward - select current slide, as a next
                nextSlideIndex =
                    this._currentActiveSlide > 0
                        ? this._currentActiveSlide - 1
                        : !force && this.noWrap
                            ? this._currentActiveSlide
                            : this._slides.length - 1;
                break;
            default:
                throw new Error('Unknown direction');
        }
        return nextSlideIndex;
    };
    /**
     * Sets a slide, which specified through index, as active
     * @param index
     * @private
     */
    CarouselComponent.prototype._select = function (index) {
        if (isNaN(index)) {
            this.pause();
            return;
        }
        var currentSlide = this._slides.get(this._currentActiveSlide);
        if (currentSlide) {
            currentSlide.active = false;
        }
        var nextSlide = this._slides.get(index);
        if (nextSlide) {
            this._currentActiveSlide = index;
            nextSlide.active = true;
            this.activeSlide = index;
            this.activeSlideChange.emit(index);
        }
    };
    /**
     * Starts loop of auto changing of slides
     */
    CarouselComponent.prototype.restartTimer = function () {
        var _this = this;
        this.resetTimer();
        var interval = +this.interval;
        if (!isNaN(interval) && interval > 0) {
            this.currentInterval = this.ngZone.runOutsideAngular(function () {
                return setInterval(function () {
                    var nInterval = +_this.interval;
                    _this.ngZone.run(function () {
                        if (_this.isPlaying &&
                            !isNaN(_this.interval) &&
                            nInterval > 0 &&
                            _this.slides.length) {
                            _this.nextSlide();
                        }
                        else {
                            _this.pause();
                        }
                    });
                }, interval);
            });
        }
    };
    /**
     * Stops loop of auto changing of slides
     */
    CarouselComponent.prototype.resetTimer = function () {
        if (this.currentInterval) {
            clearInterval(this.currentInterval);
            this.currentInterval = void 0;
        }
    };
    CarouselComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                    selector: 'carousel',
                    template: "<div (mouseenter)=\"pause()\" (mouseleave)=\"play()\" (mouseup)=\"play()\" class=\"carousel slide\"> <ol class=\"carousel-indicators\" *ngIf=\"slides.length > 1\"> <li *ngFor=\"let slidez of slides; let i = index;\" [class.active]=\"slidez.active === true\" (click)=\"selectSlide(i)\"></li> </ol> <div class=\"carousel-inner\"><ng-content></ng-content></div> <a class=\"left carousel-control carousel-control-prev\" [class.disabled]=\"activeSlide === 0 && noWrap\" (click)=\"previousSlide()\" *ngIf=\"slides.length > 1\"> <span class=\"icon-prev carousel-control-prev-icon\" aria-hidden=\"true\"></span> <span *ngIf=\"isBs4\" class=\"sr-only\">Previous</span> </a> <a class=\"right carousel-control carousel-control-next\" (click)=\"nextSlide()\"  [class.disabled]=\"isLast(activeSlide) && noWrap\" *ngIf=\"slides.length > 1\"> <span class=\"icon-next carousel-control-next-icon\" aria-hidden=\"true\"></span> <span class=\"sr-only\">Next</span> </a> </div> "
                },] },
    ];
    /** @nocollapse */
    CarouselComponent.ctorParameters = function () {
        return [
            { type: CarouselConfig, },
            { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */], },
        ];
    };
    CarouselComponent.propDecorators = {
        'noWrap': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'noPause': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'activeSlideChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
        'activeSlide': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'interval': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    };
    return CarouselComponent;
}());
getSetGlobalLocale('en', {
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal: function (num) {
        var b = num % 10;
        var output = toInt((num % 100) / 10) === 1
            ? 'th'
            : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
        return num + output;
    }
});
getSetGlobalLocale('sv', {
    dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
    ordinal: function (num) {
        var b = num % 10;
        // tslint:disable-next-line:no-bitwise
        var output = (~~(num % 100 / 10) === 1) ? 'e' :
            (b === 1) ? 'a' :
                (b === 2) ? 'a' :
                    (b === 3) ? 'e' : 'e';
        return num + output;
    }
});
addFormatToken('D', ['DD', 2], 'Do', function (date) {
    return getDate(date).toString(10);
});
// FORMATTING
addFormatToken('d', null, 'do', function (date) {
    return getDayOfWeek(date).toString(10);
});
addFormatToken('dd', null, null, function (date, format, locale) {
    return locale.weekdaysShort(date);
});
addFormatToken('ddd', null, null, function (date, format, locale) {
    return locale.weekdaysMin(date);
});
addFormatToken('dddd', null, null, function (date, format, locale) {
    return locale.weekdays(date, format);
});
addFormatToken('e', null, null, function (date) {
    return getDayOfWeek(date).toString(10);
});
addFormatToken('E', null, null, function (date) {
    return getISODayOfWeek(date).toString(10);
});
function getISODayOfWeek(date) {
    return getDayOfWeek(date) || 7;
}
// import { makeGetSet } from '../moment/get-set';
// import { addFormatToken } from '../format/format';
// import { addUnitAlias } from './aliases';
// import { addUnitPriority } from './priorities';
// import { addRegexToken, match1to2, match2, match3to4, match5to6 } from '../parse/regex';
// import { addParseToken } from '../parse/token';
// import { HOUR, MINUTE, SECOND } from './constants';
// import toInt from '../utils/to-int';
// import zeroFill from '../utils/zero-fill';
// import getParsingFlags from '../create/parsing-flags';
// FORMATTING
function hFormat(date) {
    return getHours(date) % 12 || 12;
}
function kFormat(date) {
    return getHours(date) || 24;
}
addFormatToken('H', ['HH', 2], null, function (date, format, locale) {
    return getHours(date).toString(10);
});
addFormatToken('h', ['hh', 2], null, function (date, format, locale) {
    return hFormat(date).toString(10);
});
addFormatToken('k', ['kk', 2], null, function (date, format, locale) {
    return kFormat(date).toString(10);
});
addFormatToken('hmm', null, null, function (date, format, locale) {
    return "" + hFormat(date) + zeroFill(getMinutes(date), 2);
});
addFormatToken('hmmss', null, null, function (date, format, locale) {
    return "" + hFormat(date) + zeroFill(getMinutes(date), 2) + zeroFill(getSeconds(date), 2);
});
addFormatToken('Hmm', null, null, function (date, format, locale) {
    return "" + getHours(date) + zeroFill(getMinutes(date), 2);
});
addFormatToken('Hmmss', null, null, function (date, format, locale) {
    return "" + getHours(date) + zeroFill(getMinutes(date), 2) + zeroFill(getSeconds(date), 2);
});
function meridiem(token, lowercase) {
    addFormatToken(token, null, null, function (date, format, locale) {
        return locale.meridiem(getHours(date), getMinutes(date), lowercase);
    });
}
meridiem('a', true);
meridiem('A', false);
addFormatToken('m', ['mm', 2], null, function (date) {
    return getMinutes(date).toString(10);
});
// FORMATTING
addFormatToken('M', ['MM', 2], 'Mo', function (date, format) {
    return (getMonth(date) + 1).toString();
});
addFormatToken('MMM', null, null, function (date, format, locale) {
    return locale.monthsShort(date, format);
});
addFormatToken('MMMM', null, null, function (date, format, locale) {
    return locale.months(date, format);
});
addFormatToken('s', ['ss', 2], null, function (date) {
    return getSeconds(date).toString(10);
});
addFormatToken('w', ['ww', 2], 'wo', function (date, format, locale) {
    return getWeek(date, locale).toString(10);
});
addFormatToken('W', ['WW', 2], 'Wo', function (date) {
    return getISOWeek(date).toString(10);
});
function getWeek(date, locale) {
    return locale.week(date);
}
function getISOWeek(date) {
    return weekOfYear(date, 1, 4).week;
}
// moment.js
// version : 2.18.1
// authors : Tim Wood, Iskren Chernev, Moment.js contributors
// license : MIT
// momentjs.com
function formatDate(date, format, locale) {
    if (locale === void 0) {
        locale = 'en';
    }
    var _locale = getLocale(locale);
    if (!_locale) {
        throw new Error("Locale \"" + locale + "\" is not defined, please add it with \"defineLocale(...)\"");
    }
    var output = formatMoment(date, format, _locale);
    if (!output) {
        return output;
    }
    return _locale.postformat(output);
}
// format date using native date object
function formatMoment(date, _format, locale) {
    if (!isDateValid(date)) {
        return locale.invalidDate;
    }
    var format = expandFormat(_format, locale);
    formatFunctions[format] =
        formatFunctions[format] || makeFormatFunction(format);
    return formatFunctions[format](date, locale);
}
function expandFormat(_format, locale) {
    var format = _format;
    var i = 5;
    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;
    var replaceLongDateFormatTokens = function (input) {
        return locale.formatLongDate(input) || input;
    };
    localFormattingTokens.lastIndex = 0;
    while (i >= 0 && localFormattingTokens.test(format)) {
        format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
        localFormattingTokens.lastIndex = 0;
        i -= 1;
    }
    return format;
}
var DateFormatter = (function () {
    function DateFormatter() {
    }
    DateFormatter.prototype.format = function (date, format, locale) {
        return formatDate(date, format, locale);
    };
    return DateFormatter;
}());
/* tslint:disable:max-file-line-count */
// const MIN_DATE:Date = void 0;
// const MAX_DATE:Date = void 0;
// const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
/*
 const KEYS = {
 13: 'enter',
 32: 'space',
 33: 'pageup',
 34: 'pagedown',
 35: 'end',
 36: 'home',
 37: 'left',
 38: 'up',
 39: 'right',
 40: 'down'
 };
 */
var DatePickerInnerComponent = (function () {
    function DatePickerInnerComponent() {
        this.selectionDone = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */](undefined);
        this.update = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */](false);
        this.activeDateChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */](undefined);
        this.stepDay = {};
        this.stepMonth = {};
        this.stepYear = {};
        this.modes = ['day', 'month', 'year'];
        this.dateFormatter = new DateFormatter();
    }
    Object.defineProperty(DatePickerInnerComponent.prototype, "activeDate", {
        get: function () {
            return this._activeDate;
        },
        set: function (value) {
            this._activeDate = value;
        },
        enumerable: true,
        configurable: true
    });
    // todo: add formatter value to Date object
    DatePickerInnerComponent.prototype.ngOnInit = function () {
        // todo: use date for unique value
        this.uniqueId = "datepicker--" + Math.floor(Math.random() * 10000);
        if (this.initDate) {
            this.activeDate = this.initDate;
            this.selectedDate = new Date(this.activeDate.valueOf());
            this.update.emit(this.activeDate);
        }
        else if (this.activeDate === undefined) {
            this.activeDate = new Date();
        }
    };
    // this.refreshView should be called here to reflect the changes on the fly
    // tslint:disable-next-line:no-unused-variable
    DatePickerInnerComponent.prototype.ngOnChanges = function (changes) {
        this.refreshView();
        this.checkIfActiveDateGotUpdated(changes.activeDate);
    };
    // Check if activeDate has been update and then emit the activeDateChange with the new date
    DatePickerInnerComponent.prototype.checkIfActiveDateGotUpdated = function (activeDate) {
        if (activeDate && !activeDate.firstChange) {
            var previousValue = activeDate.previousValue;
            if (previousValue &&
                previousValue instanceof Date &&
                previousValue.getTime() !== activeDate.currentValue.getTime()) {
                this.activeDateChange.emit(this.activeDate);
            }
        }
    };
    DatePickerInnerComponent.prototype.setCompareHandler = function (handler, type) {
        if (type === 'day') {
            this.compareHandlerDay = handler;
        }
        if (type === 'month') {
            this.compareHandlerMonth = handler;
        }
        if (type === 'year') {
            this.compareHandlerYear = handler;
        }
    };
    DatePickerInnerComponent.prototype.compare = function (date1, date2) {
        if (date1 === undefined || date2 === undefined) {
            return undefined;
        }
        if (this.datepickerMode === 'day' && this.compareHandlerDay) {
            return this.compareHandlerDay(date1, date2);
        }
        if (this.datepickerMode === 'month' && this.compareHandlerMonth) {
            return this.compareHandlerMonth(date1, date2);
        }
        if (this.datepickerMode === 'year' && this.compareHandlerYear) {
            return this.compareHandlerYear(date1, date2);
        }
        return void 0;
    };
    DatePickerInnerComponent.prototype.setRefreshViewHandler = function (handler, type) {
        if (type === 'day') {
            this.refreshViewHandlerDay = handler;
        }
        if (type === 'month') {
            this.refreshViewHandlerMonth = handler;
        }
        if (type === 'year') {
            this.refreshViewHandlerYear = handler;
        }
    };
    DatePickerInnerComponent.prototype.refreshView = function () {
        if (this.datepickerMode === 'day' && this.refreshViewHandlerDay) {
            this.refreshViewHandlerDay();
        }
        if (this.datepickerMode === 'month' && this.refreshViewHandlerMonth) {
            this.refreshViewHandlerMonth();
        }
        if (this.datepickerMode === 'year' && this.refreshViewHandlerYear) {
            this.refreshViewHandlerYear();
        }
    };
    DatePickerInnerComponent.prototype.dateFilter = function (date, format) {
        return this.dateFormatter.format(date, format, this.locale);
    };
    DatePickerInnerComponent.prototype.isActive = function (dateObject) {
        if (this.compare(dateObject.date, this.activeDate) === 0) {
            this.activeDateId = dateObject.uid;
            return true;
        }
        return false;
    };
    DatePickerInnerComponent.prototype.createDateObject = function (date, format) {
        var dateObject = {};
        dateObject.date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        dateObject.label = this.dateFilter(date, format);
        dateObject.selected = this.compare(date, this.selectedDate) === 0;
        dateObject.disabled = this.isDisabled(date);
        dateObject.current = this.compare(date, new Date()) === 0;
        dateObject.customClass = this.getCustomClassForDate(dateObject.date);
        return dateObject;
    };
    DatePickerInnerComponent.prototype.split = function (arr, size) {
        var arrays = [];
        while (arr.length > 0) {
            arrays.push(arr.splice(0, size));
        }
        return arrays;
    };
    // Fix a hard-reproducible bug with timezones
    // The bug depends on OS, browser, current timezone and current date
    // i.e.
    // var date = new Date(2014, 0, 1);
    // console.log(date.getFullYear(), date.getMonth(), date.getDate(),
    // date.getHours()); can result in "2013 11 31 23" because of the bug.
    DatePickerInnerComponent.prototype.fixTimeZone = function (date) {
        var hours = date.getHours();
        return new Date(date.getFullYear(), date.getMonth(), date.getDate(), hours === 23 ? hours + 2 : 0);
    };
    DatePickerInnerComponent.prototype.select = function (date, isManual) {
        if (isManual === void 0) {
            isManual = true;
        }
        if (this.datepickerMode === this.minMode) {
            if (!this.activeDate) {
                this.activeDate = new Date(0, 0, 0, 0, 0, 0, 0);
            }
            this.activeDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
            if (isManual) {
                this.selectionDone.emit(this.activeDate);
            }
        }
        else {
            this.activeDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
            if (isManual) {
                this.datepickerMode = this.modes[this.modes.indexOf(this.datepickerMode) - 1];
            }
        }
        this.selectedDate = new Date(this.activeDate.valueOf());
        this.update.emit(this.activeDate);
        this.refreshView();
    };
    DatePickerInnerComponent.prototype.move = function (direction) {
        var expectedStep;
        if (this.datepickerMode === 'day') {
            expectedStep = this.stepDay;
        }
        if (this.datepickerMode === 'month') {
            expectedStep = this.stepMonth;
        }
        if (this.datepickerMode === 'year') {
            expectedStep = this.stepYear;
        }
        if (expectedStep) {
            var year = this.activeDate.getFullYear() + direction * (expectedStep.years || 0);
            var month = this.activeDate.getMonth() + direction * (expectedStep.months || 0);
            this.activeDate = new Date(year, month, 1);
            this.refreshView();
            this.activeDateChange.emit(this.activeDate);
        }
    };
    DatePickerInnerComponent.prototype.toggleMode = function (_direction) {
        var direction = _direction || 1;
        if ((this.datepickerMode === this.maxMode && direction === 1) ||
            (this.datepickerMode === this.minMode && direction === -1)) {
            return;
        }
        this.datepickerMode = this.modes[this.modes.indexOf(this.datepickerMode) + direction];
        this.refreshView();
    };
    DatePickerInnerComponent.prototype.getCustomClassForDate = function (date) {
        var _this = this;
        if (!this.customClass) {
            return '';
        }
        // todo: build a hash of custom classes, it will work faster
        var customClassObject = this.customClass.find(function (customClass) {
            return (customClass.date.valueOf() === date.valueOf() &&
                customClass.mode === _this.datepickerMode);
        }, this);
        return customClassObject === undefined ? '' : customClassObject.clazz;
    };
    DatePickerInnerComponent.prototype.compareDateDisabled = function (date1Disabled, date2) {
        if (date1Disabled === undefined || date2 === undefined) {
            return undefined;
        }
        if (date1Disabled.mode === 'day' && this.compareHandlerDay) {
            return this.compareHandlerDay(date1Disabled.date, date2);
        }
        if (date1Disabled.mode === 'month' && this.compareHandlerMonth) {
            return this.compareHandlerMonth(date1Disabled.date, date2);
        }
        if (date1Disabled.mode === 'year' && this.compareHandlerYear) {
            return this.compareHandlerYear(date1Disabled.date, date2);
        }
        return undefined;
    };
    DatePickerInnerComponent.prototype.isDisabled = function (date) {
        var _this = this;
        var isDateDisabled = false;
        if (this.dateDisabled) {
            this.dateDisabled.forEach(function (disabledDate) {
                if (_this.compareDateDisabled(disabledDate, date) === 0) {
                    isDateDisabled = true;
                }
            });
        }
        return (isDateDisabled ||
            (this.minDate && this.compare(date, this.minDate) < 0) ||
            (this.maxDate && this.compare(date, this.maxDate) > 0));
    };
    DatePickerInnerComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                    selector: 'datepicker-inner',
                    template: "\n    <!--&lt;!&ndash;ng-keydown=\"keydown($event)\"&ndash;&gt;-->\n    <div *ngIf=\"datepickerMode\" class=\"well well-sm bg-faded p-a card\" role=\"application\" >\n      <ng-content></ng-content>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    DatePickerInnerComponent.ctorParameters = function () { return []; };
    DatePickerInnerComponent.propDecorators = {
        'locale': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'datepickerMode': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'startingDay': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'yearRange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'minDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'maxDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'minMode': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'maxMode': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'showWeeks': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'formatDay': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'formatMonth': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'formatYear': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'formatDayHeader': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'formatDayTitle': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'formatMonthTitle': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'onlyCurrentMonth': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'shortcutPropagation': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'customClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'monthColLimit': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'yearColLimit': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'dateDisabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'initDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'selectionDone': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
        'update': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
        'activeDateChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
        'activeDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    };
    return DatePickerInnerComponent;
}());
var DatepickerConfig = (function () {
    function DatepickerConfig() {
        this.locale = 'en';
        this.datepickerMode = 'day';
        this.startingDay = 0;
        this.yearRange = 20;
        this.minMode = 'day';
        this.maxMode = 'year';
        this.showWeeks = true;
        this.formatDay = 'DD';
        this.formatMonth = 'MMMM';
        this.formatYear = 'YYYY';
        this.formatDayHeader = 'dd';
        this.formatDayTitle = 'MMMM YYYY';
        this.formatMonthTitle = 'YYYY';
        this.onlyCurrentMonth = false;
        this.monthColLimit = 3;
        this.yearColLimit = 5;
        this.shortcutPropagation = false;
    }
    DatepickerConfig.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */] },
    ];
    /** @nocollapse */
    DatepickerConfig.ctorParameters = function () { return []; };
    return DatepickerConfig;
}());
var DATEPICKER_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_8__angular_forms__["e" /* NG_VALUE_ACCESSOR */],
    // tslint:disable-next-line
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* forwardRef */])(function () { return DatePickerComponent; }),
    multi: true
};
/* tslint:disable:component-selector-name component-selector-type */
/* tslint:enable:component-selector-name component-selector-type */
var DatePickerComponent = (function () {
    function DatePickerComponent(config) {
        /** sets datepicker mode, supports: `day`, `month`, `year` */
        this.datepickerMode = 'day';
        /** if false week numbers will be hidden */
        this.showWeeks = true;
        this.selectionDone = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */](undefined);
        /** callback to invoke when the activeDate is changed. */
        this.activeDateChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */](undefined);
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this._now = new Date();
        this.config = config;
        this.configureOptions();
    }
    Object.defineProperty(DatePickerComponent.prototype, "activeDate", {
        /** currently active date */
        get: function () {
            return this._activeDate || this._now;
        },
        set: function (value) {
            this._activeDate = value;
        },
        enumerable: true,
        configurable: true
    });
    DatePickerComponent.prototype.configureOptions = function () {
        Object.assign(this, this.config);
    };
    DatePickerComponent.prototype.onUpdate = function (event) {
        this.activeDate = event;
        this.onChange(event);
    };
    DatePickerComponent.prototype.onSelectionDone = function (event) {
        this.selectionDone.emit(event);
    };
    DatePickerComponent.prototype.onActiveDateChange = function (event) {
        this.activeDateChange.emit(event);
    };
    // todo: support null value
    DatePickerComponent.prototype.writeValue = function (value) {
        if (this._datePicker.compare(value, this._activeDate) === 0) {
            return;
        }
        if (value && value instanceof Date) {
            this.activeDate = value;
            this._datePicker.select(value, false);
            return;
        }
        this.activeDate = value ? new Date(value) : void 0;
    };
    DatePickerComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    DatePickerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    DatePickerComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                    selector: 'datepicker',
                    template: "\n    <datepicker-inner [activeDate]=\"activeDate\"\n                      (update)=\"onUpdate($event)\"\n                      [locale]=\"config.locale\"\n                      [datepickerMode]=\"datepickerMode\"\n                      [initDate]=\"initDate\"\n                      [minDate]=\"minDate\"\n                      [maxDate]=\"maxDate\"\n                      [minMode]=\"minMode\"\n                      [maxMode]=\"maxMode\"\n                      [showWeeks]=\"showWeeks\"\n                      [formatDay]=\"formatDay\"\n                      [formatMonth]=\"formatMonth\"\n                      [formatYear]=\"formatYear\"\n                      [formatDayHeader]=\"formatDayHeader\"\n                      [formatDayTitle]=\"formatDayTitle\"\n                      [formatMonthTitle]=\"formatMonthTitle\"\n                      [startingDay]=\"startingDay\"\n                      [yearRange]=\"yearRange\"\n                      [customClass]=\"customClass\"\n                      [dateDisabled]=\"dateDisabled\"\n                      [onlyCurrentMonth]=\"onlyCurrentMonth\"\n                      [shortcutPropagation]=\"shortcutPropagation\"\n                      [monthColLimit]=\"monthColLimit\"\n                      [yearColLimit]=\"yearColLimit\"\n                      (selectionDone)=\"onSelectionDone($event)\"\n                      (activeDateChange)=\"onActiveDateChange($event)\">\n      <daypicker tabindex=\"0\"></daypicker>\n      <monthpicker tabindex=\"0\"></monthpicker>\n      <yearpicker tabindex=\"0\"></yearpicker>\n    </datepicker-inner>\n    ",
                    providers: [DATEPICKER_CONTROL_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    DatePickerComponent.ctorParameters = function () {
        return [
            { type: DatepickerConfig, },
        ];
    };
    DatePickerComponent.propDecorators = {
        'datepickerMode': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'initDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'minDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'maxDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'minMode': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'maxMode': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'showWeeks': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'formatDay': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'formatMonth': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'formatYear': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'formatDayHeader': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'formatDayTitle': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'formatMonthTitle': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'startingDay': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'yearRange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'onlyCurrentMonth': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'shortcutPropagation': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'monthColLimit': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'yearColLimit': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'customClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'dateDisabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'activeDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'selectionDone': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
        'activeDateChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
        '_datePicker': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */], args: [DatePickerInnerComponent,] },],
    };
    return DatePickerComponent;
}());
// @deprecated
// tslint:disable
var DayPickerComponent = (function () {
    function DayPickerComponent(datePicker) {
        this.labels = [];
        this.rows = [];
        this.weekNumbers = [];
        this.datePicker = datePicker;
    }
    Object.defineProperty(DayPickerComponent.prototype, "isBs4", {
        get: function () {
            return !isBs3();
        },
        enumerable: true,
        configurable: true
    });
    /*protected getDaysInMonth(year:number, month:number) {
     return ((month === 1) && (year % 4 === 0) &&
     ((year % 100 !== 0) || (year % 400 === 0))) ? 29 : DAYS_IN_MONTH[month];
     }*/
    DayPickerComponent.prototype.ngOnInit = function () {
        var self = this;
        this.datePicker.stepDay = { months: 1 };
        this.datePicker.setRefreshViewHandler(function () {
            var year = this.activeDate.getFullYear();
            var month = this.activeDate.getMonth();
            var firstDayOfMonth = new Date(year, month, 1);
            var difference = this.startingDay - firstDayOfMonth.getDay();
            var numDisplayedFromPreviousMonth = difference > 0 ? 7 - difference : -difference;
            var firstDate = new Date(firstDayOfMonth.getTime());
            if (numDisplayedFromPreviousMonth > 0) {
                firstDate.setDate(-numDisplayedFromPreviousMonth + 1);
            }
            // 42 is the number of days on a six-week calendar
            var _days = self.getDates(firstDate, 42);
            var days = [];
            for (var i = 0; i < 42; i++) {
                var _dateObject = this.createDateObject(_days[i], this.formatDay);
                _dateObject.secondary = _days[i].getMonth() !== month;
                _dateObject.uid = this.uniqueId + '-' + i;
                days[i] = _dateObject;
            }
            self.labels = [];
            for (var j = 0; j < 7; j++) {
                self.labels[j] = {};
                self.labels[j].abbr = this.dateFilter(days[j].date, this.formatDayHeader);
                self.labels[j].full = this.dateFilter(days[j].date, 'EEEE');
            }
            self.title = this.dateFilter(this.activeDate, this.formatDayTitle);
            self.rows = this.split(days, 7);
            if (this.showWeeks) {
                self.weekNumbers = [];
                var thursdayIndex = (4 + 7 - this.startingDay) % 7;
                var numWeeks = self.rows.length;
                for (var curWeek = 0; curWeek < numWeeks; curWeek++) {
                    self.weekNumbers.push(self.getISO8601WeekNumber(self.rows[curWeek][thursdayIndex].date));
                }
            }
        }, 'day');
        this.datePicker.setCompareHandler(function (date1, date2) {
            var d1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
            var d2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
            return d1.getTime() - d2.getTime();
        }, 'day');
        this.datePicker.refreshView();
    };
    DayPickerComponent.prototype.getDates = function (startDate, n) {
        var dates = new Array(n);
        var current = new Date(startDate.getTime());
        var i = 0;
        var date;
        while (i < n) {
            date = new Date(current.getTime());
            date = this.datePicker.fixTimeZone(date);
            dates[i++] = date;
            current = new Date(current.getFullYear(), current.getMonth(), current.getDate() + 1);
        }
        return dates;
    };
    DayPickerComponent.prototype.getISO8601WeekNumber = function (date) {
        var checkDate = new Date(date.getTime());
        // Thursday
        checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
        var time = checkDate.getTime();
        // Compare with Jan 1
        checkDate.setMonth(0);
        checkDate.setDate(1);
        return (Math.floor(Math.round((time - checkDate.getTime()) / 86400000) / 7) + 1);
    };
    // todo: key events implementation
    DayPickerComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                    selector: 'daypicker',
                    template: "\n<table *ngIf=\"datePicker.datepickerMode==='day'\" role=\"grid\" [attr.aria-labelledby]=\"datePicker.uniqueId+'-title'\" aria-activedescendant=\"activeDateId\">\n  <thead>\n    <tr>\n      <th>\n        <button *ngIf=\"!isBs4\"\n                type=\"button\"\n                class=\"btn btn-default btn-secondary btn-sm pull-left float-left\"\n                (click)=\"datePicker.move(-1)\"\n                tabindex=\"-1\">\u2039</button>\n        <button *ngIf=\"isBs4\"\n                type=\"button\"\n                class=\"btn btn-default btn-secondary btn-sm pull-left float-left\"\n                (click)=\"datePicker.move(-1)\"\n                tabindex=\"-1\">&lt;</button>\n      </th>\n      <th [attr.colspan]=\"5 + (datePicker.showWeeks ? 1 : 0)\">\n        <button [id]=\"datePicker.uniqueId + '-title'\"\n                type=\"button\" class=\"btn btn-default btn-secondary btn-sm\"\n                (click)=\"datePicker.toggleMode()\"\n                [disabled]=\"datePicker.datepickerMode === datePicker.maxMode\"\n                [ngClass]=\"{disabled: datePicker.datepickerMode === datePicker.maxMode}\" tabindex=\"-1\" style=\"width:100%;\">\n          <strong>{{ title }}</strong>\n        </button>\n      </th>\n      <th>\n        <button *ngIf=\"!isBs4\"\n                type=\"button\"\n                class=\"btn btn-default btn-secondary btn-sm pull-right float-right\"\n                (click)=\"datePicker.move(1)\"\n                tabindex=\"-1\">\u203A</button>\n        <button *ngIf=\"isBs4\"\n                type=\"button\"\n                class=\"btn btn-default btn-secondary btn-sm pull-right float-right\"\n                (click)=\"datePicker.move(1)\"\n                tabindex=\"-1\">&gt;\n        </button>\n      </th>\n    </tr>\n    <tr>\n      <th *ngIf=\"datePicker.showWeeks\"></th>\n      <th *ngFor=\"let labelz of labels\" class=\"text-center\">\n        <small aria-label=\"labelz.full\"><b>{{ labelz.abbr }}</b></small>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <ng-template ngFor [ngForOf]=\"rows\" let-rowz=\"$implicit\" let-index=\"index\">\n      <tr *ngIf=\"!(datePicker.onlyCurrentMonth && rowz[0].secondary && rowz[6].secondary)\">\n        <td *ngIf=\"datePicker.showWeeks\" class=\"h6\" class=\"text-center\">\n          <em>{{ weekNumbers[index] }}</em>\n        </td>\n        <td *ngFor=\"let dtz of rowz\" class=\"text-center\" role=\"gridcell\" [id]=\"dtz.uid\">\n          <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-sm {{dtz.customClass}}\"\n                  *ngIf=\"!(datePicker.onlyCurrentMonth && dtz.secondary)\"\n                  [ngClass]=\"{'btn-secondary': isBs4 && !dtz.selected && !datePicker.isActive(dtz), 'btn-info': dtz.selected, disabled: dtz.disabled, active: !isBs4 && datePicker.isActive(dtz), 'btn-default': !isBs4}\"\n                  [disabled]=\"dtz.disabled\"\n                  (click)=\"datePicker.select(dtz.date)\" tabindex=\"-1\">\n            <span [ngClass]=\"{'text-muted': dtz.secondary || dtz.current, 'text-info': !isBs4 && dtz.current}\">{{ dtz.label }}</span>\n          </button>\n        </td>\n      </tr>\n    </ng-template>\n  </tbody>\n</table>\n  ",
                    styles: [
                        "\n    :host .btn-secondary {\n      color: #292b2c;\n      background-color: #fff;\n      border-color: #ccc;\n    }\n    :host .btn-info .text-muted {\n      color: #292b2c !important;\n    }\n  "
                    ]
                },] },
    ];
    /** @nocollapse */
    DayPickerComponent.ctorParameters = function () {
        return [
            { type: DatePickerInnerComponent, },
        ];
    };
    return DayPickerComponent;
}());
// @deprecated
// tslint:disable
var MonthPickerComponent = (function () {
    function MonthPickerComponent(datePicker) {
        this.rows = [];
        this.datePicker = datePicker;
    }
    Object.defineProperty(MonthPickerComponent.prototype, "isBs4", {
        get: function () {
            return !isBs3();
        },
        enumerable: true,
        configurable: true
    });
    MonthPickerComponent.prototype.ngOnInit = function () {
        var self = this;
        this.datePicker.stepMonth = { years: 1 };
        this.datePicker.setRefreshViewHandler(function () {
            var months = new Array(12);
            var year = this.activeDate.getFullYear();
            var date;
            for (var i = 0; i < 12; i++) {
                date = new Date(year, i, 1);
                date = this.fixTimeZone(date);
                months[i] = this.createDateObject(date, this.formatMonth);
                months[i].uid = this.uniqueId + '-' + i;
            }
            self.title = this.dateFilter(this.activeDate, this.formatMonthTitle);
            self.rows = this.split(months, self.datePicker.monthColLimit);
        }, 'month');
        this.datePicker.setCompareHandler(function (date1, date2) {
            var d1 = new Date(date1.getFullYear(), date1.getMonth());
            var d2 = new Date(date2.getFullYear(), date2.getMonth());
            return d1.getTime() - d2.getTime();
        }, 'month');
        this.datePicker.refreshView();
    };
    // todo: key events implementation
    MonthPickerComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                    selector: 'monthpicker',
                    template: "\n<table *ngIf=\"datePicker.datepickerMode==='month'\" role=\"grid\">\n  <thead>\n    <tr>\n      <th>\n        <button type=\"button\" class=\"btn btn-default btn-sm pull-left float-left\"\n                (click)=\"datePicker.move(-1)\" tabindex=\"-1\">\u2039</button></th>\n      <th [attr.colspan]=\"((datePicker.monthColLimit - 2) <= 0) ? 1 : datePicker.monthColLimit - 2\">\n        <button [id]=\"datePicker.uniqueId + '-title'\"\n                type=\"button\" class=\"btn btn-default btn-sm\"\n                (click)=\"datePicker.toggleMode()\"\n                [disabled]=\"datePicker.datepickerMode === maxMode\"\n                [ngClass]=\"{disabled: datePicker.datepickerMode === maxMode}\" tabindex=\"-1\" style=\"width:100%;\">\n          <strong>{{ title }}</strong> \n        </button>\n      </th>\n      <th>\n        <button type=\"button\" class=\"btn btn-default btn-sm pull-right float-right\"\n                (click)=\"datePicker.move(1)\" tabindex=\"-1\">\u203A</button>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let rowz of rows\">\n      <td *ngFor=\"let dtz of rowz\" class=\"text-center\" role=\"gridcell\" id=\"{{dtz.uid}}\" [ngClass]=\"dtz.customClass\">\n        <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-default\"\n                [ngClass]=\"{'btn-link': isBs4 && !dtz.selected && !datePicker.isActive(dtz), 'btn-info': dtz.selected || (isBs4 && !dtz.selected && datePicker.isActive(dtz)), disabled: dtz.disabled, active: !isBs4 && datePicker.isActive(dtz)}\"\n                [disabled]=\"dtz.disabled\"\n                (click)=\"datePicker.select(dtz.date)\" tabindex=\"-1\">\n          <span [ngClass]=\"{'text-success': isBs4 && dtz.current, 'text-info': !isBs4 && dtz.current}\">{{ dtz.label }}</span>\n        </button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n  ",
                    styles: [
                        "\n    :host .btn-info .text-success {\n      color: #fff !important;\n    }\n  "
                    ]
                },] },
    ];
    /** @nocollapse */
    MonthPickerComponent.ctorParameters = function () {
        return [
            { type: DatePickerInnerComponent, },
        ];
    };
    return MonthPickerComponent;
}());
// @deprecated
// tslint:disable
var YearPickerComponent = (function () {
    function YearPickerComponent(datePicker) {
        this.rows = [];
        this.datePicker = datePicker;
    }
    Object.defineProperty(YearPickerComponent.prototype, "isBs4", {
        get: function () {
            return !isBs3();
        },
        enumerable: true,
        configurable: true
    });
    YearPickerComponent.prototype.ngOnInit = function () {
        var self = this;
        this.datePicker.stepYear = { years: this.datePicker.yearRange };
        this.datePicker.setRefreshViewHandler(function () {
            var years = new Array(this.yearRange);
            var date;
            var start = self.getStartingYear(this.activeDate.getFullYear());
            for (var i = 0; i < this.yearRange; i++) {
                date = new Date(start + i, 0, 1);
                date = this.fixTimeZone(date);
                years[i] = this.createDateObject(date, this.formatYear);
                years[i].uid = this.uniqueId + '-' + i;
            }
            self.title = [years[0].label, years[this.yearRange - 1].label].join(' - ');
            self.rows = this.split(years, self.datePicker.yearColLimit);
        }, 'year');
        this.datePicker.setCompareHandler(function (date1, date2) {
            return date1.getFullYear() - date2.getFullYear();
        }, 'year');
        this.datePicker.refreshView();
    };
    YearPickerComponent.prototype.getStartingYear = function (year) {
        // todo: parseInt
        return ((year - 1) / this.datePicker.yearRange * this.datePicker.yearRange + 1);
    };
    YearPickerComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                    selector: 'yearpicker',
                    template: "\n<table *ngIf=\"datePicker.datepickerMode==='year'\" role=\"grid\">\n  <thead>\n    <tr>\n      <th>\n        <button type=\"button\" class=\"btn btn-default btn-sm pull-left float-left\"\n                (click)=\"datePicker.move(-1)\" tabindex=\"-1\">\u2039</button>\n      </th>\n      <th [attr.colspan]=\"((datePicker.yearColLimit - 2) <= 0) ? 1 : datePicker.yearColLimit - 2\">\n        <button [id]=\"datePicker.uniqueId + '-title'\" role=\"heading\"\n                type=\"button\" class=\"btn btn-default btn-sm\"\n                (click)=\"datePicker.toggleMode()\"\n                [disabled]=\"datePicker.datepickerMode === datePicker.maxMode\"\n                [ngClass]=\"{disabled: datePicker.datepickerMode === datePicker.maxMode}\" tabindex=\"-1\" style=\"width:100%;\">\n          <strong>{{ title }}</strong>\n        </button>\n      </th>\n      <th>\n        <button type=\"button\" class=\"btn btn-default btn-sm pull-right float-right\"\n                (click)=\"datePicker.move(1)\" tabindex=\"-1\">\u203A</button>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let rowz of rows\">\n      <td *ngFor=\"let dtz of rowz\" class=\"text-center\" role=\"gridcell\">\n        <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-default\"\n                [ngClass]=\"{'btn-link': isBs4 && !dtz.selected && !datePicker.isActive(dtz), 'btn-info': dtz.selected || (isBs4 && !dtz.selected && datePicker.isActive(dtz)), disabled: dtz.disabled, active: !isBs4 && datePicker.isActive(dtz)}\"\n                [disabled]=\"dtz.disabled\"\n                (click)=\"datePicker.select(dtz.date)\" tabindex=\"-1\">\n          <span [ngClass]=\"{'text-success': isBs4 && dtz.current, 'text-info': !isBs4 && dtz.current}\">{{ dtz.label }}</span>\n        </button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n  ",
                    styles: [
                        "\n    :host .btn-info .text-success {\n      color: #fff !important;\n    }\n  "
                    ]
                },] },
    ];
    /** @nocollapse */
    YearPickerComponent.ctorParameters = function () {
        return [
            { type: DatePickerInnerComponent, },
        ];
    };
    return YearPickerComponent;
}());
var BsDatepickerActions = (function () {
    function BsDatepickerActions() {
    }
    BsDatepickerActions.prototype.calculate = function () {
        return { type: BsDatepickerActions.CALCULATE };
    };
    BsDatepickerActions.prototype.format = function () {
        return { type: BsDatepickerActions.FORMAT };
    };
    BsDatepickerActions.prototype.flag = function () {
        return { type: BsDatepickerActions.FLAG };
    };
    BsDatepickerActions.prototype.select = function (date) {
        return {
            type: BsDatepickerActions.SELECT,
            payload: date
        };
    };
    BsDatepickerActions.prototype.changeViewMode = function (event) {
        return {
            type: BsDatepickerActions.CHANGE_VIEWMODE,
            payload: event
        };
    };
    BsDatepickerActions.prototype.navigateTo = function (event) {
        return {
            type: BsDatepickerActions.NAVIGATE_TO,
            payload: event
        };
    };
    BsDatepickerActions.prototype.navigateStep = function (step) {
        return {
            type: BsDatepickerActions.NAVIGATE_OFFSET,
            payload: step
        };
    };
    BsDatepickerActions.prototype.setOptions = function (options) {
        return {
            type: BsDatepickerActions.SET_OPTIONS,
            payload: options
        };
    };
    // date range picker
    BsDatepickerActions.prototype.selectRange = function (value) {
        return {
            type: BsDatepickerActions.SELECT_RANGE,
            payload: value
        };
    };
    BsDatepickerActions.prototype.hoverDay = function (event) {
        return {
            type: BsDatepickerActions.HOVER,
            payload: event.isHovered ? event.cell.date : null
        };
    };
    BsDatepickerActions.prototype.minDate = function (date) {
        return {
            type: BsDatepickerActions.SET_MIN_DATE,
            payload: date
        };
    };
    BsDatepickerActions.prototype.maxDate = function (date) {
        return {
            type: BsDatepickerActions.SET_MAX_DATE,
            payload: date
        };
    };
    BsDatepickerActions.prototype.isDisabled = function (value) {
        return {
            type: BsDatepickerActions.SET_IS_DISABLED,
            payload: value
        };
    };
    BsDatepickerActions.CALCULATE = '[datepicker] calculate dates matrix';
    BsDatepickerActions.FORMAT = '[datepicker] format datepicker values';
    BsDatepickerActions.FLAG = '[datepicker] set flags';
    BsDatepickerActions.SELECT = '[datepicker] select date';
    BsDatepickerActions.NAVIGATE_OFFSET = '[datepicker] shift view date';
    BsDatepickerActions.NAVIGATE_TO = '[datepicker] change view date';
    BsDatepickerActions.SET_OPTIONS = '[datepicker] update render options';
    BsDatepickerActions.HOVER = '[datepicker] hover date';
    BsDatepickerActions.CHANGE_VIEWMODE = '[datepicker] switch view mode';
    BsDatepickerActions.SET_MIN_DATE = '[datepicker] set min date';
    BsDatepickerActions.SET_MAX_DATE = '[datepicker] set max date';
    BsDatepickerActions.SET_IS_DISABLED = '[datepicker] set is disabled';
    BsDatepickerActions.SELECT_RANGE = '[daterangepicker] select dates range';
    BsDatepickerActions.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */] },
    ];
    /** @nocollapse */
    BsDatepickerActions.ctorParameters = function () { return []; };
    return BsDatepickerActions;
}());
var __extends$1 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @copyright ngrx
 */
var MiniStore = (function (_super) {
    __extends$1(MiniStore, _super);
    function MiniStore(_dispatcher, _reducer, state$) {
        var _this = _super.call(this) || this;
        _this._dispatcher = _dispatcher;
        _this._reducer = _reducer;
        _this.source = state$;
        return _this;
    }
    MiniStore.prototype.select = function (pathOrMapFn) {
        var mapped$ = __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_map__["a" /* map */].call(this, pathOrMapFn);
        return __WEBPACK_IMPORTED_MODULE_10_rxjs_operator_distinctUntilChanged__["a" /* distinctUntilChanged */].call(mapped$);
    };
    MiniStore.prototype.lift = function (operator) {
        var store = new MiniStore(this._dispatcher, this._reducer, this);
        store.operator = operator;
        return store;
    };
    MiniStore.prototype.dispatch = function (action) {
        this._dispatcher.next(action);
    };
    MiniStore.prototype.next = function (action) {
        this._dispatcher.next(action);
    };
    MiniStore.prototype.error = function (err) {
        this._dispatcher.error(err);
    };
    MiniStore.prototype.complete = function () {
        /*noop*/
    };
    return MiniStore;
}(__WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["a" /* Observable */]));
var defaultMonthOptions = {
    width: 7,
    height: 6
};
var BsDatepickerConfig = (function () {
    function BsDatepickerConfig() {
        /** CSS class which will be applied to datepicker container,
         * usually used to set color theme
         */
        this.containerClass = 'theme-green';
        // DatepickerRenderOptions
        this.displayMonths = 1;
        /**
         * Allows to hide week numbers in datepicker
         */
        this.showWeekNumbers = true;
        this.dateInputFormat = 'L';
        // range picker
        this.rangeSeparator = ' - ';
        this.rangeInputFormat = 'L';
        // DatepickerFormatOptions
        /**
         * Allows to globally set default locale of datepicker,
         * see documentation on how to enable custom locales
         */
        this.locale = 'en';
        this.monthTitle = 'MMMM';
        this.yearTitle = 'YYYY';
        this.dayLabel = 'D';
        this.monthLabel = 'MMMM';
        this.yearLabel = 'YYYY';
        this.weekNumbers = 'w';
    }
    BsDatepickerConfig.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */] },
    ];
    /** @nocollapse */
    BsDatepickerConfig.ctorParameters = function () { return []; };
    return BsDatepickerConfig;
}());
var _initialView = { date: new Date(), mode: 'day' };
var initialDatepickerState = Object.assign(new BsDatepickerConfig(), {
    view: _initialView,
    selectedRange: [],
    monthViewOptions: defaultMonthOptions
});
var __extends$2 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @copyright ngrx
 */
var MiniState = (function (_super) {
    __extends$2(MiniState, _super);
    function MiniState(_initialState, actionsDispatcher$, reducer) {
        var _this = _super.call(this, _initialState) || this;
        var actionInQueue$ = __WEBPACK_IMPORTED_MODULE_12_rxjs_operator_observeOn__["a" /* observeOn */].call(actionsDispatcher$, __WEBPACK_IMPORTED_MODULE_13_rxjs_scheduler_queue__["a" /* queue */]);
        var state$ = __WEBPACK_IMPORTED_MODULE_14_rxjs_operator_scan__["a" /* scan */].call(actionInQueue$, function (state, action) {
            if (!action) {
                return state;
            }
            return reducer(state, action);
        }, _initialState);
        state$.subscribe(function (value) { return _this.next(value); });
        return _this;
    }
    return MiniState;
}(__WEBPACK_IMPORTED_MODULE_11_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]));
function isAfter(date1, date2, units) {
    if (units === void 0) {
        units = 'milliseconds';
    }
    if (!date1 || !date2) {
        return false;
    }
    if (units === 'milliseconds') {
        return date1.valueOf() > date2.valueOf();
    }
    return date2.valueOf() < startOf(date1, units).valueOf();
}
function isBefore(date1, date2, units) {
    if (units === void 0) {
        units = 'milliseconds';
    }
    if (!date1 || !date2) {
        return false;
    }
    if (units === 'milliseconds') {
        return date1.valueOf() < date2.valueOf();
    }
    return endOf(date1, units).valueOf() < date2.valueOf();
}
function isSame(date1, date2, units) {
    if (units === void 0) {
        units = 'milliseconds';
    }
    if (!date1 || !date2) {
        return false;
    }
    if (units === 'milliseconds') {
        return date1.valueOf() === date2.valueOf();
    }
    var inputMs = date2.valueOf();
    return (startOf(date1, units).valueOf() <= inputMs &&
        inputMs <= endOf(date1, units).valueOf());
}
function isSameOrAfter(date1, date2, units) {
    return isSame(date1, date2, units) || isAfter(date1, date2, units);
}
function isSameOrBefore(date1, date2, units) {
    return isSame(date1, date2, units) || isBefore(date1, date2, units);
}
function getStartingDayOfCalendar(date, options) {
    if (isFirstDayOfWeek(date, options.firstDayOfWeek)) {
        return date;
    }
    var weekDay = getDayOfWeek(date);
    var offset = calculateDateOffset(weekDay, options.firstDayOfWeek);
    return shiftDate(date, { day: -offset });
}
function calculateDateOffset(weekday, startingDayOffset) {
    if (startingDayOffset === 0) {
        return weekday;
    }
    var offset = weekday - startingDayOffset % 7;
    return offset < 0 ? offset + 7 : offset;
}
function isMonthDisabled(date, min, max) {
    var minBound = min && isSameOrBefore(endOf(date, 'month'), min, 'day');
    var maxBound = max && isSameOrAfter(startOf(date, 'month'), max, 'day');
    return minBound || maxBound;
}
function isYearDisabled(date, min, max) {
    var minBound = min && isSameOrBefore(endOf(date, 'year'), min, 'day');
    var maxBound = max && isSameOrAfter(startOf(date, 'year'), max, 'day');
    return minBound || maxBound;
}
function createMatrix(options, fn) {
    var prevValue = options.initialDate;
    var matrix = new Array(options.height);
    for (var i = 0; i < options.height; i++) {
        matrix[i] = new Array(options.width);
        for (var j = 0; j < options.width; j++) {
            matrix[i][j] = fn(prevValue);
            prevValue = shiftDate(prevValue, options.shift);
        }
    }
    return matrix;
}
function calcDaysCalendar(startingDate, options) {
    var firstDay = getFirstDayOfMonth(startingDate);
    var initialDate = getStartingDayOfCalendar(firstDay, options);
    var matrixOptions = {
        width: options.width,
        height: options.height,
        initialDate: initialDate,
        shift: { day: 1 }
    };
    var daysMatrix = createMatrix(matrixOptions, function (date) { return date; });
    return {
        daysMatrix: daysMatrix,
        month: firstDay
    };
}
function formatDaysCalendar(daysCalendar, formatOptions, monthIndex) {
    return {
        month: daysCalendar.month,
        monthTitle: formatDate(daysCalendar.month, formatOptions.monthTitle, formatOptions.locale),
        yearTitle: formatDate(daysCalendar.month, formatOptions.yearTitle, formatOptions.locale),
        weekNumbers: getWeekNumbers(daysCalendar.daysMatrix, formatOptions.weekNumbers, formatOptions.locale),
        weekdays: getShiftedWeekdays(formatOptions.locale),
        weeks: daysCalendar.daysMatrix.map(function (week, weekIndex) {
            return ({
                days: week.map(function (date, dayIndex) {
                    return ({
                        date: date,
                        label: formatDate(date, formatOptions.dayLabel, formatOptions.locale),
                        monthIndex: monthIndex,
                        weekIndex: weekIndex,
                        dayIndex: dayIndex
                    });
                })
            });
        })
    };
}
function getWeekNumbers(daysMatrix, format, locale) {
    return daysMatrix.map(function (days) { return (days[0] ? formatDate(days[0], format, locale) : ''); });
}
function getShiftedWeekdays(locale) {
    var _locale = getLocale(locale);
    var weekdays = _locale.weekdaysShort();
    var firstDayOfWeek = _locale.firstDayOfWeek();
    return weekdays.slice(firstDayOfWeek).concat(weekdays.slice(0, firstDayOfWeek));
}
function flagDaysCalendar(formattedMonth, options) {
    formattedMonth.weeks.forEach(function (week, weekIndex) {
        week.days.forEach(function (day, dayIndex) {
            // datepicker
            var isOtherMonth = !isSameMonth(day.date, formattedMonth.month);
            var isHovered = !isOtherMonth && isSameDay(day.date, options.hoveredDate);
            // date range picker
            var isSelectionStart = !isOtherMonth &&
                options.selectedRange &&
                isSameDay(day.date, options.selectedRange[0]);
            var isSelectionEnd = !isOtherMonth &&
                options.selectedRange &&
                isSameDay(day.date, options.selectedRange[1]);
            var isSelected = (!isOtherMonth && isSameDay(day.date, options.selectedDate)) ||
                isSelectionStart ||
                isSelectionEnd;
            var isInRange = !isOtherMonth &&
                options.selectedRange &&
                isDateInRange(day.date, options.selectedRange, options.hoveredDate);
            var isDisabled = options.isDisabled ||
                isBefore(day.date, options.minDate, 'day') ||
                isAfter(day.date, options.maxDate, 'day');
            // decide update or not
            var newDay = Object.assign({}, day, {
                isOtherMonth: isOtherMonth,
                isHovered: isHovered,
                isSelected: isSelected,
                isSelectionStart: isSelectionStart,
                isSelectionEnd: isSelectionEnd,
                isInRange: isInRange,
                isDisabled: isDisabled
            });
            if (day.isOtherMonth !== newDay.isOtherMonth ||
                day.isHovered !== newDay.isHovered ||
                day.isSelected !== newDay.isSelected ||
                day.isSelectionStart !== newDay.isSelectionStart ||
                day.isSelectionEnd !== newDay.isSelectionEnd ||
                day.isDisabled !== newDay.isDisabled ||
                day.isInRange !== newDay.isInRange) {
                week.days[dayIndex] = newDay;
            }
        });
    });
    // todo: add check for linked calendars
    formattedMonth.hideLeftArrow =
        options.isDisabled ||
            (options.monthIndex > 0 && options.monthIndex !== options.displayMonths);
    formattedMonth.hideRightArrow =
        options.isDisabled ||
            (options.monthIndex < options.displayMonths &&
                options.monthIndex + 1 !== options.displayMonths);
    formattedMonth.disableLeftArrow = isMonthDisabled(shiftDate(formattedMonth.month, { month: -1 }), options.minDate, options.maxDate);
    formattedMonth.disableRightArrow = isMonthDisabled(shiftDate(formattedMonth.month, { month: 1 }), options.minDate, options.maxDate);
    return formattedMonth;
}
function isDateInRange(date, selectedRange, hoveredDate) {
    if (!date || !selectedRange[0]) {
        return false;
    }
    if (selectedRange[1]) {
        return date > selectedRange[0] && date <= selectedRange[1];
    }
    if (hoveredDate) {
        return date > selectedRange[0] && date <= hoveredDate;
    }
    return false;
}
function canSwitchMode(mode) {
    return true;
}
var height = 4;
var width = 3;
var shift = { month: 1 };
function formatMonthsCalendar(viewDate, formatOptions) {
    var initialDate = startOf(viewDate, 'year');
    var matrixOptions = { width: width, height: height, initialDate: initialDate, shift: shift };
    var monthMatrix = createMatrix(matrixOptions, function (date) {
        return ({
            date: date,
            label: formatDate(date, formatOptions.monthLabel, formatOptions.locale)
        });
    });
    return {
        months: monthMatrix,
        monthTitle: '',
        yearTitle: formatDate(viewDate, formatOptions.yearTitle, formatOptions.locale)
    };
}
function flagMonthsCalendar(monthCalendar, options) {
    monthCalendar.months.forEach(function (months, rowIndex) {
        months.forEach(function (month, monthIndex) {
            var isHovered = isSameMonth(month.date, options.hoveredMonth);
            var isDisabled = options.isDisabled ||
                isMonthDisabled(month.date, options.minDate, options.maxDate);
            var newMonth = Object.assign(/*{},*/ month, {
                isHovered: isHovered,
                isDisabled: isDisabled
            });
            if (month.isHovered !== newMonth.isHovered ||
                month.isDisabled !== newMonth.isDisabled) {
                monthCalendar.months[rowIndex][monthIndex] = newMonth;
            }
        });
    });
    // todo: add check for linked calendars
    monthCalendar.hideLeftArrow =
        options.monthIndex > 0 && options.monthIndex !== options.displayMonths;
    monthCalendar.hideRightArrow =
        options.monthIndex < options.displayMonths &&
            options.monthIndex + 1 !== options.displayMonths;
    monthCalendar.disableLeftArrow = isYearDisabled(shiftDate(monthCalendar.months[0][0].date, { year: -1 }), options.minDate, options.maxDate);
    monthCalendar.disableRightArrow = isYearDisabled(shiftDate(monthCalendar.months[0][0].date, { year: 1 }), options.minDate, options.maxDate);
    return monthCalendar;
}
var height$1 = 4;
var width$1 = 4;
var yearsPerCalendar = height$1 * width$1;
var initialShift = (Math.floor(yearsPerCalendar / 2) - 1) * -1;
var shift$1 = { year: 1 };
function formatYearsCalendar(viewDate, formatOptions) {
    var initialDate = shiftDate(viewDate, { year: initialShift });
    var matrixOptions = { width: width$1, height: height$1, initialDate: initialDate, shift: shift$1 };
    var yearsMatrix = createMatrix(matrixOptions, function (date) {
        return ({
            date: date,
            label: formatDate(date, formatOptions.yearLabel, formatOptions.locale)
        });
    });
    var yearTitle = formatYearRangeTitle(yearsMatrix, formatOptions);
    return {
        years: yearsMatrix,
        monthTitle: '',
        yearTitle: yearTitle
    };
}
function formatYearRangeTitle(yearsMatrix, formatOptions) {
    var from$$1 = formatDate(yearsMatrix[0][0].date, formatOptions.yearTitle, formatOptions.locale);
    var to = formatDate(yearsMatrix[height$1 - 1][width$1 - 1].date, formatOptions.yearTitle, formatOptions.locale);
    return from$$1 + " - " + to;
}
function flagYearsCalendar(yearsCalendar, options) {
    yearsCalendar.years.forEach(function (years, rowIndex) {
        years.forEach(function (year, yearIndex) {
            var isHovered = isSameYear(year.date, options.hoveredYear);
            var isDisabled = options.isDisabled ||
                isYearDisabled(year.date, options.minDate, options.maxDate);
            var newMonth = Object.assign(/*{},*/ year, { isHovered: isHovered, isDisabled: isDisabled });
            if (year.isHovered !== newMonth.isHovered ||
                year.isDisabled !== newMonth.isDisabled) {
                yearsCalendar.years[rowIndex][yearIndex] = newMonth;
            }
        });
    });
    // todo: add check for linked calendars
    yearsCalendar.hideLeftArrow =
        options.yearIndex > 0 && options.yearIndex !== options.displayMonths;
    yearsCalendar.hideRightArrow =
        options.yearIndex < options.displayMonths &&
            options.yearIndex + 1 !== options.displayMonths;
    yearsCalendar.disableLeftArrow = isYearDisabled(shiftDate(yearsCalendar.years[0][0].date, { year: -1 }), options.minDate, options.maxDate);
    var i = yearsCalendar.years.length - 1;
    var j = yearsCalendar.years[i].length - 1;
    yearsCalendar.disableRightArrow = isYearDisabled(shiftDate(yearsCalendar.years[i][j].date, { year: 1 }), options.minDate, options.maxDate);
    return yearsCalendar;
}
// tslint:disable:max-file-line-count
function bsDatepickerReducer(state, action) {
    if (state === void 0) {
        state = initialDatepickerState;
    }
    switch (action.type) {
        case BsDatepickerActions.CALCULATE: {
            return calculateReducer(state);
        }
        case BsDatepickerActions.FORMAT: {
            return formatReducer(state, action);
        }
        case BsDatepickerActions.FLAG: {
            return flagReducer(state, action);
        }
        case BsDatepickerActions.NAVIGATE_OFFSET: {
            var date = shiftDate(startOf(state.view.date, 'month'), action.payload);
            var newState = {
                view: {
                    mode: state.view.mode,
                    date: date
                }
            };
            return Object.assign({}, state, newState);
        }
        case BsDatepickerActions.NAVIGATE_TO: {
            var payload = action.payload;
            var date = setDate(state.view.date, payload.unit);
            var mode = payload.viewMode;
            var newState = { view: { date: date, mode: mode } };
            return Object.assign({}, state, newState);
        }
        case BsDatepickerActions.CHANGE_VIEWMODE: {
            if (!canSwitchMode(action.payload)) {
                return state;
            }
            var date = state.view.date;
            var mode = action.payload;
            var newState = { view: { date: date, mode: mode } };
            return Object.assign({}, state, newState);
        }
        case BsDatepickerActions.HOVER: {
            return Object.assign({}, state, { hoveredDate: action.payload });
        }
        case BsDatepickerActions.SELECT: {
            var newState = {
                selectedDate: action.payload,
                view: state.view
            };
            if (action.payload) {
                newState.view = {
                    date: action.payload,
                    mode: state.view.mode
                };
            }
            return Object.assign({}, state, newState);
        }
        case BsDatepickerActions.SET_OPTIONS: {
            var newState = action.payload;
            // looks not really good
            if (newState.value) {
                newState.view = state.view;
                if (isArray(newState.value)) {
                    newState.view = {
                        mode: state.view.mode,
                        date: isDateValid(newState.value[0]) ? newState.value[0] : newState.view.date
                    };
                    newState.selectedRange = newState.value;
                }
                else {
                    newState.view = {
                        mode: state.view.mode,
                        date: newState.value
                    };
                    newState.selectedDate = newState.value;
                }
            }
            return Object.assign({}, state, newState);
        }
        // date range picker
        case BsDatepickerActions.SELECT_RANGE: {
            return Object.assign({}, state, { selectedRange: action.payload });
        }
        case BsDatepickerActions.SET_MIN_DATE: {
            return Object.assign({}, state, {
                minDate: action.payload
            });
        }
        case BsDatepickerActions.SET_MAX_DATE: {
            return Object.assign({}, state, {
                maxDate: action.payload
            });
        }
        case BsDatepickerActions.SET_IS_DISABLED: {
            return Object.assign({}, state, {
                isDisabled: action.payload
            });
        }
        default:
            return state;
    }
}
function calculateReducer(state) {
    // how many calendars
    var displayMonths = state.displayMonths;
    // use selected date on initial rendering if set
    var viewDate = state.view.date;
    if (state.view.mode === 'day') {
        state.monthViewOptions.firstDayOfWeek = getLocale(state.locale).firstDayOfWeek();
        var monthsModel = new Array(displayMonths);
        for (var monthIndex = 0; monthIndex < displayMonths; monthIndex++) {
            // todo: for unlinked calendars it will be harder
            monthsModel[monthIndex] = calcDaysCalendar(viewDate, state.monthViewOptions);
            viewDate = shiftDate(viewDate, { month: 1 });
        }
        return Object.assign({}, state, { monthsModel: monthsModel });
    }
    if (state.view.mode === 'month') {
        var monthsCalendar = new Array(displayMonths);
        for (var calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
            // todo: for unlinked calendars it will be harder
            monthsCalendar[calendarIndex] = formatMonthsCalendar(viewDate, getFormatOptions(state));
            viewDate = shiftDate(viewDate, { year: 1 });
        }
        return Object.assign({}, state, { monthsCalendar: monthsCalendar });
    }
    if (state.view.mode === 'year') {
        var yearsCalendarModel = new Array(displayMonths);
        for (var calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
            // todo: for unlinked calendars it will be harder
            yearsCalendarModel[calendarIndex] = formatYearsCalendar(viewDate, getFormatOptions(state));
            viewDate = shiftDate(viewDate, { year: yearsPerCalendar });
        }
        return Object.assign({}, state, { yearsCalendarModel: yearsCalendarModel });
    }
    return state;
}
function formatReducer(state, action) {
    if (state.view.mode === 'day') {
        var formattedMonths = state.monthsModel.map(function (month, monthIndex) {
            return formatDaysCalendar(month, getFormatOptions(state), monthIndex);
        });
        return Object.assign({}, state, { formattedMonths: formattedMonths });
    }
    // how many calendars
    var displayMonths = state.displayMonths;
    // check initial rendering
    // use selected date on initial rendering if set
    var viewDate = state.view.date;
    if (state.view.mode === 'month') {
        var monthsCalendar = new Array(displayMonths);
        for (var calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
            // todo: for unlinked calendars it will be harder
            monthsCalendar[calendarIndex] = formatMonthsCalendar(viewDate, getFormatOptions(state));
            viewDate = shiftDate(viewDate, { year: 1 });
        }
        return Object.assign({}, state, { monthsCalendar: monthsCalendar });
    }
    if (state.view.mode === 'year') {
        var yearsCalendarModel = new Array(displayMonths);
        for (var calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
            // todo: for unlinked calendars it will be harder
            yearsCalendarModel[calendarIndex] = formatYearsCalendar(viewDate, getFormatOptions(state));
            viewDate = shiftDate(viewDate, { year: 16 });
        }
        return Object.assign({}, state, { yearsCalendarModel: yearsCalendarModel });
    }
    return state;
}
function flagReducer(state, action) {
    if (state.view.mode === 'day') {
        var flaggedMonths = state.formattedMonths.map(function (formattedMonth, monthIndex) {
            return flagDaysCalendar(formattedMonth, {
                isDisabled: state.isDisabled,
                minDate: state.minDate,
                maxDate: state.maxDate,
                hoveredDate: state.hoveredDate,
                selectedDate: state.selectedDate,
                selectedRange: state.selectedRange,
                displayMonths: state.displayMonths,
                monthIndex: monthIndex
            });
        });
        return Object.assign({}, state, { flaggedMonths: flaggedMonths });
    }
    if (state.view.mode === 'month') {
        var flaggedMonthsCalendar = state.monthsCalendar.map(function (formattedMonth, monthIndex) {
            return flagMonthsCalendar(formattedMonth, {
                isDisabled: state.isDisabled,
                minDate: state.minDate,
                maxDate: state.maxDate,
                hoveredMonth: state.hoveredMonth,
                displayMonths: state.displayMonths,
                monthIndex: monthIndex
            });
        });
        return Object.assign({}, state, { flaggedMonthsCalendar: flaggedMonthsCalendar });
    }
    if (state.view.mode === 'year') {
        var yearsCalendarFlagged = state.yearsCalendarModel.map(function (formattedMonth, yearIndex) {
            return flagYearsCalendar(formattedMonth, {
                isDisabled: state.isDisabled,
                minDate: state.minDate,
                maxDate: state.maxDate,
                hoveredYear: state.hoveredYear,
                displayMonths: state.displayMonths,
                yearIndex: yearIndex
            });
        });
        return Object.assign({}, state, { yearsCalendarFlagged: yearsCalendarFlagged });
    }
    return state;
}
function getFormatOptions(state) {
    return {
        locale: state.locale,
        monthTitle: state.monthTitle,
        yearTitle: state.yearTitle,
        dayLabel: state.dayLabel,
        monthLabel: state.monthLabel,
        yearLabel: state.yearLabel,
        weekNumbers: state.weekNumbers
    };
}
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BsDatepickerStore = (function (_super) {
    __extends(BsDatepickerStore, _super);
    function BsDatepickerStore() {
        var _this = this;
        var _dispatcher = new __WEBPACK_IMPORTED_MODULE_11_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]({
            type: '[datepicker] dispatcher init'
        });
        var state = new MiniState(initialDatepickerState, _dispatcher, bsDatepickerReducer);
        _this = _super.call(this, _dispatcher, bsDatepickerReducer, state) || this;
        return _this;
    }
    BsDatepickerStore.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */] },
    ];
    /** @nocollapse */
    BsDatepickerStore.ctorParameters = function () { return []; };
    return BsDatepickerStore;
}(MiniStore));
var BsDatepickerAbstractComponent = (function () {
    function BsDatepickerAbstractComponent() {
        this._customRangesFish = [];
    }
    Object.defineProperty(BsDatepickerAbstractComponent.prototype, "minDate", {
        set: function (value) {
            this._effects.setMinDate(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDatepickerAbstractComponent.prototype, "maxDate", {
        set: function (value) {
            this._effects.setMaxDate(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDatepickerAbstractComponent.prototype, "isDisabled", {
        set: function (value) {
            this._effects.setDisabled(value);
        },
        enumerable: true,
        configurable: true
    });
    BsDatepickerAbstractComponent.prototype.setViewMode = function (event) { };
    BsDatepickerAbstractComponent.prototype.navigateTo = function (event) { };
    BsDatepickerAbstractComponent.prototype.dayHoverHandler = function (event) { };
    BsDatepickerAbstractComponent.prototype.monthHoverHandler = function (event) { };
    BsDatepickerAbstractComponent.prototype.yearHoverHandler = function (event) { };
    BsDatepickerAbstractComponent.prototype.daySelectHandler = function (day) { };
    BsDatepickerAbstractComponent.prototype.monthSelectHandler = function (event) { };
    BsDatepickerAbstractComponent.prototype.yearSelectHandler = function (event) { };
    BsDatepickerAbstractComponent.prototype._stopPropagation = function (event) {
        event.stopPropagation();
    };
    return BsDatepickerAbstractComponent;
}());
var BsDatepickerEffects = (function () {
    function BsDatepickerEffects(_actions) {
        this._actions = _actions;
        this._subs = [];
    }
    BsDatepickerEffects.prototype.init = function (_bsDatepickerStore) {
        this._store = _bsDatepickerStore;
        return this;
    };
    /** setters */
    BsDatepickerEffects.prototype.setValue = function (value) {
        this._store.dispatch(this._actions.select(value));
    };
    BsDatepickerEffects.prototype.setRangeValue = function (value) {
        this._store.dispatch(this._actions.selectRange(value));
    };
    BsDatepickerEffects.prototype.setMinDate = function (value) {
        this._store.dispatch(this._actions.minDate(value));
        return this;
    };
    BsDatepickerEffects.prototype.setMaxDate = function (value) {
        this._store.dispatch(this._actions.maxDate(value));
        return this;
    };
    BsDatepickerEffects.prototype.setDisabled = function (value) {
        this._store.dispatch(this._actions.isDisabled(value));
        return this;
    };
    /* Set rendering options */
    BsDatepickerEffects.prototype.setOptions = function (_config) {
        this._store.dispatch(this._actions.setOptions(_config));
        return this;
    };
    /** view to mode bindings */
    BsDatepickerEffects.prototype.setBindings = function (container) {
        container.daysCalendar = this._store
            .select(function (state) { return state.flaggedMonths; })
            .filter(function (months) { return !!months; });
        // month calendar
        container.monthsCalendar = this._store
            .select(function (state) { return state.flaggedMonthsCalendar; })
            .filter(function (months) { return !!months; });
        // year calendar
        container.yearsCalendar = this._store
            .select(function (state) { return state.yearsCalendarFlagged; })
            .filter(function (years) { return !!years; });
        container.viewMode = this._store.select(function (state) { return state.view.mode; });
        container.options = this._store
            .select(function (state) { return state.showWeekNumbers; })
            .map(function (showWeekNumbers) { return ({ showWeekNumbers: showWeekNumbers }); });
        return this;
    };
    /** event handlers */
    BsDatepickerEffects.prototype.setEventHandlers = function (container) {
        var _this = this;
        container.setViewMode = function (event) {
            _this._store.dispatch(_this._actions.changeViewMode(event));
        };
        container.navigateTo = function (event) {
            _this._store.dispatch(_this._actions.navigateStep(event.step));
        };
        container.dayHoverHandler = function (event) {
            var _cell = event.cell;
            if (_cell.isOtherMonth || _cell.isDisabled) {
                return;
            }
            _this._store.dispatch(_this._actions.hoverDay(event));
            _cell.isHovered = event.isHovered;
        };
        container.monthHoverHandler = function (event) {
            event.cell.isHovered = event.isHovered;
        };
        container.yearHoverHandler = function (event) {
            event.cell.isHovered = event.isHovered;
        };
        /** select handlers */
        // container.daySelectHandler = (day: DayViewModel): void => {
        //   if (day.isOtherMonth || day.isDisabled) {
        //     return;
        //   }
        //   this._store.dispatch(this._actions.select(day.date));
        // };
        container.monthSelectHandler = function (event) {
            if (event.isDisabled) {
                return;
            }
            _this._store.dispatch(_this._actions.navigateTo({
                unit: { month: getMonth(event.date) },
                viewMode: 'day'
            }));
        };
        container.yearSelectHandler = function (event) {
            if (event.isDisabled) {
                return;
            }
            _this._store.dispatch(_this._actions.navigateTo({
                unit: { year: getFullYear(event.date) },
                viewMode: 'month'
            }));
        };
        return this;
    };
    BsDatepickerEffects.prototype.registerDatepickerSideEffects = function () {
        var _this = this;
        this._subs.push(this._store.select(function (state) { return state.view; }).subscribe(function (view) {
            _this._store.dispatch(_this._actions.calculate());
        }));
        // format calendar values on month model change
        this._subs.push(this._store
            .select(function (state) { return state.monthsModel; })
            .filter(function (monthModel) { return !!monthModel; })
            .subscribe(function (month) { return _this._store.dispatch(_this._actions.format()); }));
        // flag day values
        this._subs.push(this._store
            .select(function (state) { return state.formattedMonths; })
            .filter(function (month) { return !!month; })
            .subscribe(function (month) { return _this._store.dispatch(_this._actions.flag()); }));
        // flag day values
        this._subs.push(this._store
            .select(function (state) { return state.selectedDate; })
            .filter(function (selectedDate) { return !!selectedDate; })
            .subscribe(function (selectedDate) { return _this._store.dispatch(_this._actions.flag()); }));
        // flag for date range picker
        this._subs.push(this._store
            .select(function (state) { return state.selectedRange; })
            .filter(function (selectedRange) { return !!selectedRange; })
            .subscribe(function (selectedRange) { return _this._store.dispatch(_this._actions.flag()); }));
        // monthsCalendar
        this._subs.push(this._store
            .select(function (state) { return state.monthsCalendar; })
            .subscribe(function () { return _this._store.dispatch(_this._actions.flag()); }));
        // years calendar
        this._subs.push(this._store
            .select(function (state) { return state.yearsCalendarModel; })
            .filter(function (state) { return !!state; })
            .subscribe(function () { return _this._store.dispatch(_this._actions.flag()); }));
        // on hover
        this._subs.push(this._store
            .select(function (state) { return state.hoveredDate; })
            .filter(function (hoveredDate) { return !!hoveredDate; })
            .subscribe(function (hoveredDate) { return _this._store.dispatch(_this._actions.flag()); }));
        return this;
    };
    BsDatepickerEffects.prototype.destroy = function () {
        for (var _i = 0, _a = this._subs; _i < _a.length; _i++) {
            var sub = _a[_i];
            sub.unsubscribe();
        }
    };
    BsDatepickerEffects.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */] },
    ];
    /** @nocollapse */
    BsDatepickerEffects.ctorParameters = function () {
        return [
            { type: BsDatepickerActions, },
        ];
    };
    return BsDatepickerEffects;
}());
var __extends$3 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BsDatepickerContainerComponent = (function (_super) {
    __extends$3(BsDatepickerContainerComponent, _super);
    function BsDatepickerContainerComponent(_config, _store, _actions, _effects) {
        var _this = _super.call(this) || this;
        _this._config = _config;
        _this._store = _store;
        _this._actions = _actions;
        _this.valueChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        _this._subs = [];
        _this._effects = _effects;
        return _this;
    }
    Object.defineProperty(BsDatepickerContainerComponent.prototype, "value", {
        set: function (value) {
            this._effects.setValue(value);
        },
        enumerable: true,
        configurable: true
    });
    BsDatepickerContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.containerClass = this._config.containerClass;
        this._effects
            .init(this._store)
            .setOptions(this._config)
            .setBindings(this)
            .setEventHandlers(this)
            .registerDatepickerSideEffects();
        // todo: move it somewhere else
        // on selected date change
        this._subs.push(this._store
            .select(function (state) { return state.selectedDate; })
            .subscribe(function (date) { return _this.valueChange.emit(date); }));
    };
    BsDatepickerContainerComponent.prototype.daySelectHandler = function (day) {
        if (day.isOtherMonth || day.isDisabled) {
            return;
        }
        this._store.dispatch(this._actions.select(day.date));
    };
    BsDatepickerContainerComponent.prototype.ngOnDestroy = function () {
        for (var _i = 0, _a = this._subs; _i < _a.length; _i++) {
            var sub = _a[_i];
            sub.unsubscribe();
        }
        this._effects.destroy();
    };
    BsDatepickerContainerComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                    selector: 'bs-datepicker-container',
                    providers: [BsDatepickerStore, BsDatepickerEffects],
                    template: "<!-- days calendar view mode --> <div class=\"bs-datepicker\" [ngClass]=\"containerClass\" *ngIf=\"viewMode | async\"> <div class=\"bs-datepicker-container\"> <!--calendars--> <div class=\"bs-calendar-container\" [ngSwitch]=\"viewMode | async\"> <!--days calendar--> <div *ngSwitchCase=\"'day'\"> <bs-days-calendar-view *ngFor=\"let calendar of (daysCalendar | async)\" [class.bs-datepicker-multiple]=\"(daysCalendar | async).length > 1\" [calendar]=\"calendar\" [options]=\"options | async\" (onNavigate)=\"navigateTo($event)\" (onViewMode)=\"setViewMode($event)\" (onHover)=\"dayHoverHandler($event)\" (onSelect)=\"daySelectHandler($event)\" ></bs-days-calendar-view> </div> <!--months calendar--> <div *ngSwitchCase=\"'month'\"> <bs-month-calendar-view *ngFor=\"let calendar of (monthsCalendar   | async)\" [class.bs-datepicker-multiple]=\"(daysCalendar   | async).length > 1\" [calendar]=\"calendar\" (onNavigate)=\"navigateTo($event)\" (onViewMode)=\"setViewMode($event)\" (onHover)=\"monthHoverHandler($event)\" (onSelect)=\"monthSelectHandler($event)\" ></bs-month-calendar-view> </div> <!--years calendar--> <div *ngSwitchCase=\"'year'\"> <bs-years-calendar-view *ngFor=\"let calendar of (yearsCalendar   | async)\" [class.bs-datepicker-multiple]=\"(daysCalendar | async).length > 1\" [calendar]=\"calendar\" (onNavigate)=\"navigateTo($event)\" (onViewMode)=\"setViewMode($event)\" (onHover)=\"yearHoverHandler($event)\" (onSelect)=\"yearSelectHandler($event)\" ></bs-years-calendar-view> </div> </div> <!--applycancel buttons--> <div class=\"bs-datepicker-buttons\" *ngIf=\"false\"> <button class=\"btn btn-success\">Apply</button> <button class=\"btn btn-default\">Cancel</button> </div> </div> <!--custom dates or date ranges picker--> <div class=\"bs-datepicker-custom-range\" *ngIf=\"false\"> <bs-custom-date-view [ranges]=\"_customRangesFish\"></bs-custom-date-view> </div> </div> ",
                    host: {
                        '(click)': '_stopPropagation($event)',
                        style: 'position: absolute; display: block;'
                    }
                },] },
    ];
    /** @nocollapse */
    BsDatepickerContainerComponent.ctorParameters = function () {
        return [
            { type: BsDatepickerConfig, },
            { type: BsDatepickerStore, },
            { type: BsDatepickerActions, },
            { type: BsDatepickerEffects, },
        ];
    };
    return BsDatepickerContainerComponent;
}(BsDatepickerAbstractComponent));
/** *************** */
// events
/** *************** */
var BsNavigationDirection;
(function (BsNavigationDirection) {
    BsNavigationDirection[BsNavigationDirection["UP"] = 0] = "UP";
    BsNavigationDirection[BsNavigationDirection["DOWN"] = 1] = "DOWN";
})(BsNavigationDirection || (BsNavigationDirection = {}));
var BsDatepickerNavigationViewComponent = (function () {
    function BsDatepickerNavigationViewComponent() {
        this.onNavigate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onViewMode = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    BsDatepickerNavigationViewComponent.prototype.navTo = function (down) {
        this.onNavigate.emit(down ? BsNavigationDirection.DOWN : BsNavigationDirection.UP);
    };
    BsDatepickerNavigationViewComponent.prototype.view = function (viewMode) {
        this.onViewMode.emit(viewMode);
    };
    BsDatepickerNavigationViewComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                    selector: 'bs-datepicker-navigation-view',
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
                    template: "\n    <button class=\"previous\"\n            [disabled]=\"calendar.disableLeftArrow\"\n            [style.visibility]=\"calendar.hideLeftArrow ? 'hidden' : 'visible'\"\n            (click)=\"navTo(true)\"><span>&lsaquo;</span>\n    </button>\n\n    <button class=\"current\"\n            *ngIf=\"calendar.monthTitle\"\n            (click)=\"view('month')\"\n    ><span>{{ calendar.monthTitle }}</span>\n    </button>\n\n    <button class=\"current\" (click)=\"view('year')\"\n    ><span>{{ calendar.yearTitle }}</span></button>\n\n    <button class=\"next\"\n            [disabled]=\"calendar.disableRightArrow\"\n            [style.visibility]=\"calendar.hideRightArrow ? 'hidden' : 'visible'\"\n            (click)=\"navTo(false)\"><span>&rsaquo;</span>\n    </button>\n  "
                },] },
    ];
    /** @nocollapse */
    BsDatepickerNavigationViewComponent.ctorParameters = function () { return []; };
    BsDatepickerNavigationViewComponent.propDecorators = {
        'calendar': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'onNavigate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
        'onViewMode': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
    };
    return BsDatepickerNavigationViewComponent;
}());
var BsDaysCalendarViewComponent = (function () {
    function BsDaysCalendarViewComponent() {
        this.onNavigate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onViewMode = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onHover = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    BsDaysCalendarViewComponent.prototype.navigateTo = function (event) {
        var step = BsNavigationDirection.DOWN === event ? -1 : 1;
        this.onNavigate.emit({ step: { month: step } });
    };
    BsDaysCalendarViewComponent.prototype.changeViewMode = function (event) {
        this.onViewMode.emit(event);
    };
    BsDaysCalendarViewComponent.prototype.selectDay = function (event) {
        this.onSelect.emit(event);
    };
    BsDaysCalendarViewComponent.prototype.hoverDay = function (cell, isHovered) {
        this.onHover.emit({ cell: cell, isHovered: isHovered });
    };
    BsDaysCalendarViewComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                    selector: 'bs-days-calendar-view',
                    // changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n    <bs-calendar-layout>\n      <bs-datepicker-navigation-view\n        [calendar]=\"calendar\"\n        (onNavigate)=\"navigateTo($event)\"\n        (onViewMode)=\"changeViewMode($event)\"\n      ></bs-datepicker-navigation-view>\n\n      <!--days matrix-->\n      <table role=\"grid\" class=\"days weeks\">\n        <thead>\n        <tr>\n          <!--if show weeks-->\n          <th *ngIf=\"options.showWeekNumbers\"></th>\n          <th *ngFor=\"let weekday of calendar.weekdays; let i = index\"\n              aria-label=\"weekday\">{{ calendar.weekdays[i] }}\n          </th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let week of calendar.weeks; let i = index\">\n          <td class=\"week\" *ngIf=\"options.showWeekNumbers\">\n            <span>{{ calendar.weekNumbers[i] }}</span>\n          </td>\n          <td *ngFor=\"let day of week.days\" role=\"gridcell\">\n          <span bsDatepickerDayDecorator\n                [day]=\"day\"\n                (click)=\"selectDay(day)\"\n                (mouseenter)=\"hoverDay(day, true)\"\n                (mouseleave)=\"hoverDay(day, false)\">{{ day.label }}</span>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n\n    </bs-calendar-layout>\n  "
                },] },
    ];
    /** @nocollapse */
    BsDaysCalendarViewComponent.ctorParameters = function () { return []; };
    BsDaysCalendarViewComponent.propDecorators = {
        'calendar': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'options': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'onNavigate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
        'onViewMode': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
        'onSelect': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
        'onHover': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
    };
    return BsDaysCalendarViewComponent;
}());
var __extends$4 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BsDaterangepickerContainerComponent = (function (_super) {
    __extends$4(BsDaterangepickerContainerComponent, _super);
    function BsDaterangepickerContainerComponent(_config, _store, _actions, _effects) {
        var _this = _super.call(this) || this;
        _this._config = _config;
        _this._store = _store;
        _this._actions = _actions;
        _this.valueChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        _this._rangeStack = [];
        _this._subs = [];
        _this._effects = _effects;
        return _this;
    }
    Object.defineProperty(BsDaterangepickerContainerComponent.prototype, "value", {
        set: function (value) {
            this._effects.setRangeValue(value);
        },
        enumerable: true,
        configurable: true
    });
    BsDaterangepickerContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.containerClass = this._config.containerClass;
        this._effects
            .init(this._store)
            .setOptions(this._config)
            .setBindings(this)
            .setEventHandlers(this)
            .registerDatepickerSideEffects();
        // todo: move it somewhere else
        // on selected date change
        this._subs.push(this._store
            .select(function (state) { return state.selectedRange; })
            .subscribe(function (date) { return _this.valueChange.emit(date); }));
    };
    BsDaterangepickerContainerComponent.prototype.daySelectHandler = function (day) {
        if (day.isOtherMonth || day.isDisabled) {
            return;
        }
        // if only one date is already selected
        // and user clicks on previous date
        // start selection from new date
        // but if new date is after initial one
        // than finish selection
        if (this._rangeStack.length === 1) {
            this._rangeStack =
                day.date >= this._rangeStack[0]
                    ? [this._rangeStack[0], day.date]
                    : [day.date];
        }
        if (this._rangeStack.length === 0) {
            this._rangeStack = [day.date];
        }
        this._store.dispatch(this._actions.selectRange(this._rangeStack));
        if (this._rangeStack.length === 2) {
            this._rangeStack = [];
        }
    };
    BsDaterangepickerContainerComponent.prototype.ngOnDestroy = function () {
        for (var _i = 0, _a = this._subs; _i < _a.length; _i++) {
            var sub = _a[_i];
            sub.unsubscribe();
        }
        this._effects.destroy();
    };
    BsDaterangepickerContainerComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                    selector: 'bs-daterangepicker-container',
                    providers: [BsDatepickerStore, BsDatepickerEffects],
                    template: "<!-- days calendar view mode --> <div class=\"bs-datepicker\" [ngClass]=\"containerClass\" *ngIf=\"viewMode | async\"> <div class=\"bs-datepicker-container\"> <!--calendars--> <div class=\"bs-calendar-container\" [ngSwitch]=\"viewMode | async\"> <!--days calendar--> <div *ngSwitchCase=\"'day'\"> <bs-days-calendar-view *ngFor=\"let calendar of (daysCalendar | async)\" [class.bs-datepicker-multiple]=\"(daysCalendar | async).length > 1\" [calendar]=\"calendar\" [options]=\"options | async\" (onNavigate)=\"navigateTo($event)\" (onViewMode)=\"setViewMode($event)\" (onHover)=\"dayHoverHandler($event)\" (onSelect)=\"daySelectHandler($event)\" ></bs-days-calendar-view> </div> <!--months calendar--> <div *ngSwitchCase=\"'month'\"> <bs-month-calendar-view *ngFor=\"let calendar of (monthsCalendar   | async)\" [class.bs-datepicker-multiple]=\"(daysCalendar   | async).length > 1\" [calendar]=\"calendar\" (onNavigate)=\"navigateTo($event)\" (onViewMode)=\"setViewMode($event)\" (onHover)=\"monthHoverHandler($event)\" (onSelect)=\"monthSelectHandler($event)\" ></bs-month-calendar-view> </div> <!--years calendar--> <div *ngSwitchCase=\"'year'\"> <bs-years-calendar-view *ngFor=\"let calendar of (yearsCalendar   | async)\" [class.bs-datepicker-multiple]=\"(daysCalendar | async).length > 1\" [calendar]=\"calendar\" (onNavigate)=\"navigateTo($event)\" (onViewMode)=\"setViewMode($event)\" (onHover)=\"yearHoverHandler($event)\" (onSelect)=\"yearSelectHandler($event)\" ></bs-years-calendar-view> </div> </div> <!--applycancel buttons--> <div class=\"bs-datepicker-buttons\" *ngIf=\"false\"> <button class=\"btn btn-success\">Apply</button> <button class=\"btn btn-default\">Cancel</button> </div> </div> <!--custom dates or date ranges picker--> <div class=\"bs-datepicker-custom-range\" *ngIf=\"false\"> <bs-custom-date-view [ranges]=\"_customRangesFish\"></bs-custom-date-view> </div> </div> ",
                    host: {
                        '(click)': '_stopPropagation($event)',
                        style: 'position: absolute; display: block;'
                    }
                },] },
    ];
    /** @nocollapse */
    BsDaterangepickerContainerComponent.ctorParameters = function () {
        return [
            { type: BsDatepickerConfig, },
            { type: BsDatepickerStore, },
            { type: BsDatepickerActions, },
            { type: BsDatepickerEffects, },
        ];
    };
    return BsDaterangepickerContainerComponent;
}(BsDatepickerAbstractComponent));
var BsDaterangepickerComponent = (function () {
    function BsDaterangepickerComponent(_config, _elementRef, _renderer, _viewContainerRef, cis) {
        this._config = _config;
        /**
         * Placement of a daterangepicker. Accepts: "top", "bottom", "left", "right"
         */
        this.placement = 'bottom';
        /**
         * Specifies events that should trigger. Supports a space separated list of
         * event names.
         */
        this.triggers = 'click';
        /**
         * Close daterangepicker on outside click
         */
        this.outsideClick = true;
        /**
         * A selector specifying the element the daterangepicker should be appended
         * to. Currently only supports "body".
         */
        this.container = 'body';
        /**
         * Emits when daterangepicker value has been changed
         */
        this.bsValueChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this._subs = [];
        this._datepicker = cis.createLoader(_elementRef, _viewContainerRef, _renderer);
        Object.assign(this, _config);
        this.onShown = this._datepicker.onShown;
        this.onHidden = this._datepicker.onHidden;
    }
    Object.defineProperty(BsDaterangepickerComponent.prototype, "isOpen", {
        /**
         * Returns whether or not the daterangepicker is currently being shown
         */
        get: function () {
            return this._datepicker.isShown;
        },
        set: function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDaterangepickerComponent.prototype, "bsValue", {
        /**
         * Initial value of daterangepicker
         */
        set: function (value) {
            if (this._bsValue === value) {
                return;
            }
            this._bsValue = value;
            this.bsValueChange.emit(value);
        },
        enumerable: true,
        configurable: true
    });
    BsDaterangepickerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._datepicker.listen({
            outsideClick: this.outsideClick,
            triggers: this.triggers,
            show: function () { return _this.show(); }
        });
        this.setConfig();
    };
    BsDaterangepickerComponent.prototype.ngOnChanges = function (changes) {
        if (!this._datepickerRef || !this._datepickerRef.instance) {
            return;
        }
        if (changes.minDate) {
            this._datepickerRef.instance.minDate = this.minDate;
        }
        if (changes.maxDate) {
            this._datepickerRef.instance.maxDate = this.maxDate;
        }
        if (changes.isDisabled) {
            this._datepickerRef.instance.isDisabled = this.isDisabled;
        }
    };
    /**
     * Opens an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     */
    BsDaterangepickerComponent.prototype.show = function () {
        var _this = this;
        if (this._datepicker.isShown) {
            return;
        }
        this.setConfig();
        this._datepickerRef = this._datepicker
            .provide({ provide: BsDatepickerConfig, useValue: this._config })
            .attach(BsDaterangepickerContainerComponent)
            .to(this.container)
            .position({ attachment: this.placement })
            .show({ placement: this.placement });
        // if date changes from external source (model -> view)
        this._subs.push(this.bsValueChange.subscribe(function (value) {
            _this._datepickerRef.instance.value = value;
        }));
        // if date changes from picker (view -> model)
        this._subs.push(this._datepickerRef.instance.valueChange
            .filter(function (range) { return range && range[0] && !!range[1]; })
            .subscribe(function (value) {
            _this.bsValue = value;
            _this.hide();
        }));
    };
    /**
     * Set config for daterangepicker
     */
    BsDaterangepickerComponent.prototype.setConfig = function () {
        this._config = Object.assign({}, this._config, { displayMonths: 2 }, this.bsConfig, {
            value: this._bsValue,
            isDisabled: this.isDisabled,
            minDate: this.minDate || this._config.minDate,
            maxDate: this.maxDate || this._config.maxDate
        });
    };
    /**
     * Closes an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     */
    BsDaterangepickerComponent.prototype.hide = function () {
        if (this.isOpen) {
            this._datepicker.hide();
        }
        for (var _i = 0, _a = this._subs; _i < _a.length; _i++) {
            var sub = _a[_i];
            sub.unsubscribe();
        }
    };
    /**
     * Toggles an element’s datepicker. This is considered a “manual” triggering
     * of the datepicker.
     */
    BsDaterangepickerComponent.prototype.toggle = function () {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    };
    BsDaterangepickerComponent.prototype.ngOnDestroy = function () {
        this._datepicker.dispose();
    };
    BsDaterangepickerComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                    selector: 'bs-daterangepicker,[bsDaterangepicker]',
                    exportAs: 'bsDaterangepicker',
                    template: ' '
                },] },
    ];
    /** @nocollapse */
    BsDaterangepickerComponent.ctorParameters = function () {
        return [
            { type: BsDatepickerConfig, },
            { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
            { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Renderer2 */], },
            { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewContainerRef */], },
            { type: ComponentLoaderFactory, },
        ];
    };
    BsDaterangepickerComponent.propDecorators = {
        'placement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'triggers': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'outsideClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'container': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'isOpen': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'onShown': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
        'onHidden': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
        'bsValue': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'bsConfig': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'isDisabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'minDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'maxDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'bsValueChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
    };
    return BsDaterangepickerComponent;
}());
var BsDatepickerComponent = (function () {
    function BsDatepickerComponent(_config, _elementRef, _renderer, _viewContainerRef, cis) {
        this._config = _config;
        /**
         * Placement of a datepicker. Accepts: "top", "bottom", "left", "right"
         */
        this.placement = 'bottom';
        /**
         * Specifies events that should trigger. Supports a space separated list of
         * event names.
         */
        this.triggers = 'click';
        /**
         * Close datepicker on outside click
         */
        this.outsideClick = true;
        /**
         * A selector specifying the element the datepicker should be appended to.
         * Currently only supports "body".
         */
        this.container = 'body';
        /**
         * Emits when datepicker value has been changed
         */
        this.bsValueChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this._subs = [];
        // todo: assign only subset of fields
        Object.assign(this, this._config);
        this._datepicker = cis.createLoader(_elementRef, _viewContainerRef, _renderer);
        this.onShown = this._datepicker.onShown;
        this.onHidden = this._datepicker.onHidden;
    }
    Object.defineProperty(BsDatepickerComponent.prototype, "isOpen", {
        /**
         * Returns whether or not the datepicker is currently being shown
         */
        get: function () {
            return this._datepicker.isShown;
        },
        set: function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDatepickerComponent.prototype, "bsValue", {
        /**
         * Initial value of datepicker
         */
        set: function (value) {
            if (this._bsValue === value) {
                return;
            }
            this._bsValue = value;
            this.bsValueChange.emit(value);
        },
        enumerable: true,
        configurable: true
    });
    BsDatepickerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._datepicker.listen({
            outsideClick: this.outsideClick,
            triggers: this.triggers,
            show: function () { return _this.show(); }
        });
        this.setConfig();
    };
    BsDatepickerComponent.prototype.ngOnChanges = function (changes) {
        if (!this._datepickerRef || !this._datepickerRef.instance) {
            return;
        }
        if (changes.minDate) {
            this._datepickerRef.instance.minDate = this.minDate;
        }
        if (changes.maxDate) {
            this._datepickerRef.instance.maxDate = this.maxDate;
        }
        if (changes.isDisabled) {
            this._datepickerRef.instance.isDisabled = this.isDisabled;
        }
    };
    /**
     * Opens an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     */
    BsDatepickerComponent.prototype.show = function () {
        var _this = this;
        if (this._datepicker.isShown) {
            return;
        }
        this.setConfig();
        this._datepickerRef = this._datepicker
            .provide({ provide: BsDatepickerConfig, useValue: this._config })
            .attach(BsDatepickerContainerComponent)
            .to(this.container)
            .position({ attachment: this.placement })
            .show({ placement: this.placement });
        // if date changes from external source (model -> view)
        this._subs.push(this.bsValueChange.subscribe(function (value) {
            _this._datepickerRef.instance.value = value;
        }));
        // if date changes from picker (view -> model)
        this._subs.push(this._datepickerRef.instance.valueChange.subscribe(function (value) {
            _this.bsValue = value;
            _this.hide();
        }));
    };
    /**
     * Closes an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     */
    BsDatepickerComponent.prototype.hide = function () {
        if (this.isOpen) {
            this._datepicker.hide();
        }
        for (var _i = 0, _a = this._subs; _i < _a.length; _i++) {
            var sub = _a[_i];
            sub.unsubscribe();
        }
    };
    /**
     * Toggles an element’s datepicker. This is considered a “manual” triggering
     * of the datepicker.
     */
    BsDatepickerComponent.prototype.toggle = function () {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    };
    /**
     * Set config for datepicker
     */
    BsDatepickerComponent.prototype.setConfig = function () {
        this._config = Object.assign({}, this._config, this.bsConfig, {
            value: this._bsValue,
            isDisabled: this.isDisabled,
            minDate: this.minDate || this._config.minDate,
            maxDate: this.maxDate || this._config.maxDate
        });
    };
    BsDatepickerComponent.prototype.ngOnDestroy = function () {
        this._datepicker.dispose();
    };
    BsDatepickerComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                    selector: 'bs-datepicker,[bsDatepicker]',
                    exportAs: 'bsDatepicker',
                    template: '<ng-content></ng-content>'
                },] },
    ];
    /** @nocollapse */
    BsDatepickerComponent.ctorParameters = function () {
        return [
            { type: BsDatepickerConfig, },
            { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
            { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Renderer2 */], },
            { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewContainerRef */], },
            { type: ComponentLoaderFactory, },
        ];
    };
    BsDatepickerComponent.propDecorators = {
        'placement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'triggers': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'outsideClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'container': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'isOpen': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'onShown': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
        'onHidden': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
        'bsValue': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'bsConfig': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'isDisabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'minDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'maxDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'bsValueChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
    };
    return BsDatepickerComponent;
}());
var BsDatepickerDayDecoratorComponent = (function () {
    function BsDatepickerDayDecoratorComponent() {
    }
    BsDatepickerDayDecoratorComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                    selector: '[bsDatepickerDayDecorator]',
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
                    host: {
                        '[class.disabled]': 'day.isDisabled',
                        '[class.is-highlighted]': 'day.isHovered',
                        '[class.is-other-month]': 'day.isOtherMonth',
                        '[class.in-range]': 'day.isInRange',
                        '[class.select-start]': 'day.isSelectionStart',
                        '[class.select-end]': 'day.isSelectionEnd',
                        '[class.selected]': 'day.isSelected'
                    },
                    template: "{{ day.label }}"
                },] },
    ];
    /** @nocollapse */
    BsDatepickerDayDecoratorComponent.ctorParameters = function () { return []; };
    BsDatepickerDayDecoratorComponent.propDecorators = {
        'day': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    };
    return BsDatepickerDayDecoratorComponent;
}());
var BsMonthCalendarViewComponent = (function () {
    function BsMonthCalendarViewComponent() {
        this.onNavigate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onViewMode = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onHover = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    BsMonthCalendarViewComponent.prototype.navigateTo = function (event) {
        var step = BsNavigationDirection.DOWN === event ? -1 : 1;
        this.onNavigate.emit({ step: { year: step } });
    };
    BsMonthCalendarViewComponent.prototype.viewMonth = function (month) {
        this.onSelect.emit(month);
    };
    BsMonthCalendarViewComponent.prototype.hoverMonth = function (cell, isHovered) {
        this.onHover.emit({ cell: cell, isHovered: isHovered });
    };
    BsMonthCalendarViewComponent.prototype.changeViewMode = function (event) {
        this.onViewMode.emit(event);
    };
    BsMonthCalendarViewComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                    selector: 'bs-month-calendar-view',
                    template: "\n    <bs-calendar-layout>\n      <bs-datepicker-navigation-view\n        [calendar]=\"calendar\"\n        (onNavigate)=\"navigateTo($event)\"\n        (onViewMode)=\"changeViewMode($event)\"\n      ></bs-datepicker-navigation-view>\n\n      <table role=\"grid\" class=\"months\">\n        <tbody>\n        <tr *ngFor=\"let row of calendar.months\">\n          <td *ngFor=\"let month of row\" role=\"gridcell\"\n              (click)=\"viewMonth(month)\"\n              (mouseenter)=\"hoverMonth(month, true)\"\n              (mouseleave)=\"hoverMonth(month, false)\"\n              [class.disabled]=\"month.isDisabled\"\n              [class.is-highlighted]=\"month.isHovered\">\n            <span>{{ month.label }}</span>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </bs-calendar-layout>\n  "
                },] },
    ];
    /** @nocollapse */
    BsMonthCalendarViewComponent.ctorParameters = function () { return []; };
    BsMonthCalendarViewComponent.propDecorators = {
        'calendar': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'onNavigate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
        'onViewMode': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
        'onSelect': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
        'onHover': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
    };
    return BsMonthCalendarViewComponent;
}());
var BsYearsCalendarViewComponent = (function () {
    function BsYearsCalendarViewComponent() {
        this.onNavigate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onViewMode = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onHover = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    BsYearsCalendarViewComponent.prototype.navigateTo = function (event) {
        var step = BsNavigationDirection.DOWN === event ? -1 : 1;
        this.onNavigate.emit({ step: { year: step * yearsPerCalendar } });
    };
    BsYearsCalendarViewComponent.prototype.viewYear = function (year) {
        this.onSelect.emit(year);
    };
    BsYearsCalendarViewComponent.prototype.hoverYear = function (cell, isHovered) {
        this.onHover.emit({ cell: cell, isHovered: isHovered });
    };
    BsYearsCalendarViewComponent.prototype.changeViewMode = function (event) {
        this.onViewMode.emit(event);
    };
    BsYearsCalendarViewComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                    selector: 'bs-years-calendar-view',
                    template: "\n    <bs-calendar-layout>\n      <bs-datepicker-navigation-view\n        [calendar]=\"calendar\"\n        (onNavigate)=\"navigateTo($event)\"\n        (onViewMode)=\"changeViewMode($event)\"\n      ></bs-datepicker-navigation-view>\n\n      <table role=\"grid\" class=\"years\">\n        <tbody>\n        <tr *ngFor=\"let row of calendar.years\">\n          <td *ngFor=\"let year of row\" role=\"gridcell\"\n              (click)=\"viewYear(year)\"\n              (mouseenter)=\"hoverYear(year, true)\"\n              (mouseleave)=\"hoverYear(year, false)\"\n              [class.disabled]=\"year.isDisabled\"\n              [class.is-highlighted]=\"year.isHovered\">\n            <span>{{ year.label }}</span>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </bs-calendar-layout>\n  "
                },] },
    ];
    /** @nocollapse */
    BsYearsCalendarViewComponent.ctorParameters = function () { return []; };
    BsYearsCalendarViewComponent.propDecorators = {
        'calendar': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'onNavigate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
        'onViewMode': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
        'onSelect': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
        'onHover': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
    };
    return BsYearsCalendarViewComponent;
}());
var BsCustomDatesViewComponent = (function () {
    function BsCustomDatesViewComponent() {
    }
    BsCustomDatesViewComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                    selector: 'bs-custom-date-view',
                    template: "\n    <div class=\"bs-datepicker-predefined-btns\">\n      <button *ngFor=\"let range of ranges\">{{ range.label }}</button>\n      <button *ngIf=\"isCustomRangeShown\">Custom Range</button>\n    </div>\n  ",
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush
                },] },
    ];
    /** @nocollapse */
    BsCustomDatesViewComponent.ctorParameters = function () { return []; };
    BsCustomDatesViewComponent.propDecorators = {
        'isCustomRangeShown': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'ranges': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    };
    return BsCustomDatesViewComponent;
}());
var BsCurrentDateViewComponent = (function () {
    function BsCurrentDateViewComponent() {
    }
    BsCurrentDateViewComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                    selector: 'bs-current-date',
                    template: "<div class=\"current-timedate\"><span>{{ title }}</span></div>"
                },] },
    ];
    /** @nocollapse */
    BsCurrentDateViewComponent.ctorParameters = function () { return []; };
    BsCurrentDateViewComponent.propDecorators = {
        'title': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    };
    return BsCurrentDateViewComponent;
}());
// tslint:disable:max-line-length
var BsTimepickerViewComponent = (function () {
    function BsTimepickerViewComponent() {
        this.ampm = 'ok';
        this.hours = 0;
        this.minutes = 0;
    }
    BsTimepickerViewComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                    selector: 'bs-timepicker',
                    template: "\n    <div class=\"bs-timepicker-container\">\n      <div class=\"bs-timepicker-controls\">\n        <button class=\"bs-decrease\">-</button>\n        <input type=\"text\" [value]=\"hours\" placeholder=\"00\">\n        <button class=\"bs-increase\">+</button>\n      </div>\n      <div class=\"bs-timepicker-controls\">\n        <button class=\"bs-decrease\">-</button>\n        <input type=\"text\" [value]=\"minutes\" placeholder=\"00\">\n        <button class=\"bs-increase\">+</button>\n      </div>\n      <button class=\"switch-time-format\">{{ ampm }}\n        <img\n          src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAABSElEQVQYV3XQPUvDUBQG4HNuagtVqc6KgouCv6GIuIntYBLB9hcIQpLStCAIV7DYmpTcRWcXqZio3Vwc/UCc/QEqfgyKGbr0I7nS1EiHeqYzPO/h5SD0jaxUZjmSLCB+OFb+UFINFwASAEAdpu9gaGXVyAHHFQBkHpKHc6a9dzECvADyY9sqlAMsK9W0jzxDXqeytr3mhQckxSji27TJJ5/rPmIpwJJq3HrtduriYOurv1a4i1p5HnhkG9OFymi0ReoO05cGwb+ayv4dysVygjeFmsP05f8wpZQ8fsdvfmuY9zjWSNqUtgYFVnOVReILYoBFzdQI5/GGFzNHhGbeZnopDGU29sZbscgldmC99w35VOATTycIMMcBXIfpSVGzZhA6C8hh00conln6VQ9TGgV32OEAKQC4DrBq7CJwd0ggR7Vq/rPrfgB+C3sGypY5DAAAAABJRU5ErkJggg==\"\n          alt=\"\">\n      </button>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    BsTimepickerViewComponent.ctorParameters = function () { return []; };
    return BsTimepickerViewComponent;
}());
var BsCalendarLayoutComponent = (function () {
    function BsCalendarLayoutComponent() {
    }
    BsCalendarLayoutComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                    selector: 'bs-calendar-layout',
                    template: "\n    <!-- current date, will be added in nearest releases -->\n    <bs-current-date title=\"hey there\" *ngIf=\"false\"></bs-current-date>\n\n    <!--navigation-->\n    <div class=\"bs-datepicker-head\">\n      <ng-content select=\"bs-datepicker-navigation-view\"></ng-content>\n    </div>\n\n    <div class=\"bs-datepicker-body\">\n      <ng-content></ng-content>\n    </div>\n\n    <!--timepicker-->\n    <bs-timepicker *ngIf=\"false\"></bs-timepicker>\n  "
                },] },
    ];
    /** @nocollapse */
    BsCalendarLayoutComponent.ctorParameters = function () { return []; };
    return BsCalendarLayoutComponent;
}());
var BS_DATEPICKER_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_8__angular_forms__["e" /* NG_VALUE_ACCESSOR */],
    // tslint:disable-next-line
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* forwardRef */])(function () { return BsDatepickerInputDirective; }),
    multi: true
};
var BsDatepickerInputDirective = (function () {
    function BsDatepickerInputDirective(_picker, _renderer, _elRef, changeDetection) {
        var _this = this;
        this._picker = _picker;
        this._renderer = _renderer;
        this._elRef = _elRef;
        this.changeDetection = changeDetection;
        this._onChange = Function.prototype;
        this._onTouched = Function.prototype;
        this._picker.bsValueChange.subscribe(function (v) { return _this._setInputValue(v); });
    }
    BsDatepickerInputDirective.prototype._setInputValue = function (v) {
        var initialDate = formatDate(v, this._picker._config.dateInputFormat, this._picker._config.locale) || '';
        this._renderer.setProperty(this._elRef.nativeElement, 'value', initialDate);
        this._onChange(v);
        this.changeDetection.markForCheck();
    };
    BsDatepickerInputDirective.prototype.onChange = function (event) {
        this.writeValue(event.target.value);
        this._onTouched();
    };
    BsDatepickerInputDirective.prototype.writeValue = function (value) {
        if (!value) {
            this._picker.bsValue = null;
        }
        var _locale = getLocale(this._picker._config.locale);
        if (!_locale) {
            throw new Error("Locale \"" + this._picker._config
                .locale + "\" is not defined, please add it with \"defineLocale(...)\"");
        }
        if (typeof value === 'string') {
            var date = new Date(_locale.preparse(value));
            this._picker.bsValue = isNaN(date.valueOf()) ? null : date;
        }
        if (value instanceof Date) {
            this._picker.bsValue = value;
        }
    };
    BsDatepickerInputDirective.prototype.setDisabledState = function (isDisabled) {
        this._picker.isDisabled = isDisabled;
        if (isDisabled) {
            this._renderer.setAttribute(this._elRef.nativeElement, 'disabled', 'disabled');
            return;
        }
        this._renderer.removeAttribute(this._elRef.nativeElement, 'disabled');
    };
    BsDatepickerInputDirective.prototype.registerOnChange = function (fn) {
        this._onChange = fn;
    };
    BsDatepickerInputDirective.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    BsDatepickerInputDirective.prototype.onBlur = function () {
        this._onTouched();
    };
    BsDatepickerInputDirective.prototype.hide = function () {
        this._picker.hide();
    };
    BsDatepickerInputDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{
                    selector: "input[bsDatepicker]",
                    host: {
                        '(change)': 'onChange($event)',
                        '(keyup.esc)': 'hide()',
                        '(blur)': 'onBlur()'
                    },
                    providers: [BS_DATEPICKER_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    BsDatepickerInputDirective.ctorParameters = function () {
        return [
            { type: BsDatepickerComponent, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Host */] },] },
            { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Renderer2 */], },
            { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
            { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */], },
        ];
    };
    return BsDatepickerInputDirective;
}());
var BS_DATERANGEPICKER_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_8__angular_forms__["e" /* NG_VALUE_ACCESSOR */],
    // tslint:disable-next-line
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* forwardRef */])(function () { return BsDaterangepickerInputDirective; }),
    multi: true
};
var BsDaterangepickerInputDirective = (function () {
    function BsDaterangepickerInputDirective(_picker, _renderer, _elRef, changeDetection) {
        var _this = this;
        this._picker = _picker;
        this._renderer = _renderer;
        this._elRef = _elRef;
        this.changeDetection = changeDetection;
        this._onChange = Function.prototype;
        this._onTouched = Function.prototype;
        this._picker.bsValueChange.subscribe(function (v) { return _this._setInputValue(v); });
    }
    BsDaterangepickerInputDirective.prototype._setInputValue = function (date) {
        var range = '';
        if (date) {
            var start = formatDate(date[0], this._picker._config.rangeInputFormat, this._picker._config.locale) || '';
            var end = formatDate(date[1], this._picker._config.rangeInputFormat, this._picker._config.locale) || '';
            range = (start && end) ? start + this._picker._config.rangeSeparator + end : '';
        }
        this._renderer.setProperty(this._elRef.nativeElement, 'value', range);
        this._onChange(date);
        this.changeDetection.markForCheck();
    };
    BsDaterangepickerInputDirective.prototype.onChange = function (event) {
        this.writeValue(event.target.value);
        this._onTouched();
    };
    BsDaterangepickerInputDirective.prototype.writeValue = function (value) {
        if (!value) {
            this._picker.bsValue = null;
            return;
        }
        var _locale = getLocale(this._picker._config.locale);
        if (!_locale) {
            throw new Error("Locale \"" + this._picker._config
                .locale + "\" is not defined, please add it with \"defineLocale(...)\"");
        }
        if (typeof value === 'string') {
            this._picker.bsValue = value
                .split(this._picker._config.rangeSeparator)
                .map(function (date) { return new Date(_locale.preparse(date)); })
                .map(function (date) { return (isNaN(date.valueOf()) ? null : date); });
        }
        if (Array.isArray(value)) {
            this._picker.bsValue = value;
        }
    };
    BsDaterangepickerInputDirective.prototype.setDisabledState = function (isDisabled) {
        this._picker.isDisabled = isDisabled;
        if (isDisabled) {
            this._renderer.setAttribute(this._elRef.nativeElement, 'disabled', 'disabled');
            return;
        }
        this._renderer.removeAttribute(this._elRef.nativeElement, 'disabled');
    };
    BsDaterangepickerInputDirective.prototype.registerOnChange = function (fn) {
        this._onChange = fn;
    };
    BsDaterangepickerInputDirective.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    BsDaterangepickerInputDirective.prototype.onBlur = function () {
        this._onTouched();
    };
    BsDaterangepickerInputDirective.prototype.hide = function () {
        this._picker.hide();
    };
    BsDaterangepickerInputDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{
                    selector: "input[bsDaterangepicker]",
                    host: {
                        '(change)': 'onChange($event)',
                        '(keyup.esc)': 'hide()',
                        '(blur)': 'onBlur()'
                    },
                    providers: [BS_DATERANGEPICKER_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    BsDaterangepickerInputDirective.ctorParameters = function () {
        return [
            { type: BsDaterangepickerComponent, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Host */] },] },
            { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Renderer2 */], },
            { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
            { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */], },
        ];
    };
    return BsDaterangepickerInputDirective;
}());
var _messagesHash = {};
var _hideMsg = typeof console === 'undefined' || !('warn' in console);
function warnOnce(msg) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* isDevMode */])() || _hideMsg || msg in _messagesHash) {
        return;
    }
    _messagesHash[msg] = true;
    /*tslint:disable-next-line*/
    console.warn(msg);
}
var _exports = [
    BsDatepickerContainerComponent,
    BsDaterangepickerContainerComponent,
    BsDatepickerComponent,
    BsDatepickerInputDirective,
    BsDaterangepickerInputDirective,
    BsDaterangepickerComponent
];
var BsDatepickerModule = (function () {
    function BsDatepickerModule() {
        warnOnce("BsDatepickerModule is under development,\n      BREAKING CHANGES are possible,\n      PLEASE, read changelog");
    }
    BsDatepickerModule.forRoot = function () {
        return {
            ngModule: BsDatepickerModule,
            providers: [
                ComponentLoaderFactory,
                PositioningService,
                BsDatepickerStore,
                BsDatepickerActions,
                BsDatepickerConfig,
                BsDatepickerEffects
            ]
        };
    };
    BsDatepickerModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
                    declarations: [
                        BsDatepickerDayDecoratorComponent,
                        BsCurrentDateViewComponent,
                        BsDatepickerNavigationViewComponent,
                        BsTimepickerViewComponent,
                        BsCalendarLayoutComponent,
                        BsDaysCalendarViewComponent,
                        BsMonthCalendarViewComponent,
                        BsYearsCalendarViewComponent,
                        BsCustomDatesViewComponent
                    ].concat(_exports),
                    entryComponents: [
                        BsDatepickerContainerComponent,
                        BsDaterangepickerContainerComponent
                    ],
                    exports: _exports
                },] },
    ];
    /** @nocollapse */
    BsDatepickerModule.ctorParameters = function () { return []; };
    return BsDatepickerModule;
}());
var modalConfigDefaults = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: false,
    ignoreBackdropClick: false,
    class: '',
    animated: true
};
var CLASS_NAME = {
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    IN: 'in',
    SHOW: 'show' // bs4
};
var DISMISS_REASONS = {
    BACKRDOP: 'backdrop-click',
    ESC: 'esc'
};
/** This component will be added as background layout for modals if enabled */
var ModalBackdropComponent = (function () {
    function ModalBackdropComponent(element, renderer) {
        this._isShown = false;
        this.element = element;
        this.renderer = renderer;
    }
    Object.defineProperty(ModalBackdropComponent.prototype, "isAnimated", {
        get: function () {
            return this._isAnimated;
        },
        set: function (value) {
            this._isAnimated = value;
            // this.renderer.setElementClass(this.element.nativeElement, `${ClassName.FADE}`, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalBackdropComponent.prototype, "isShown", {
        get: function () {
            return this._isShown;
        },
        set: function (value) {
            this._isShown = value;
            if (value) {
                this.renderer.addClass(this.element.nativeElement, "" + CLASS_NAME.IN);
            }
            else {
                this.renderer.removeClass(this.element.nativeElement, "" + CLASS_NAME.IN);
            }
            if (!isBs3()) {
                if (value) {
                    this.renderer.addClass(this.element.nativeElement, "" + CLASS_NAME.SHOW);
                }
                else {
                    this.renderer.removeClass(this.element.nativeElement, "" + CLASS_NAME.SHOW);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    ModalBackdropComponent.prototype.ngOnInit = function () {
        if (this.isAnimated) {
            this.renderer.addClass(this.element.nativeElement, "" + CLASS_NAME.FADE);
            Utils.reflow(this.element.nativeElement);
        }
        this.isShown = true;
    };
    ModalBackdropComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                    selector: 'bs-modal-backdrop',
                    template: ' ',
                    host: { class: CLASS_NAME.BACKDROP }
                },] },
    ];
    /** @nocollapse */
    ModalBackdropComponent.ctorParameters = function () {
        return [
            { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
            { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Renderer2 */], },
        ];
    };
    return ModalBackdropComponent;
}());
/* tslint:disable:max-file-line-count */
// todo: should we support enforce focus in?
// todo: in original bs there are was a way to prevent modal from showing
// todo: original modal had resize events
var TRANSITION_DURATION = 300;
var BACKDROP_TRANSITION_DURATION = 150;
/** Mark any code with directive to show it's content in modal */
var ModalDirective = (function () {
    function ModalDirective(_element, _viewContainerRef, _renderer, clf) {
        this._element = _element;
        this._renderer = _renderer;
        /** This event fires immediately when the `show` instance method is called. */
        this.onShow = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        /** This event is fired when the modal has been made visible to the user
         * (will wait for CSS transitions to complete)
         */
        this.onShown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        /** This event is fired immediately when
         * the hide instance method has been called.
         */
        this.onHide = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        /** This event is fired when the modal has finished being
         * hidden from the user (will wait for CSS transitions to complete).
         */
        this.onHidden = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        // seems like an Options
        this.isAnimated = true;
        this._isShown = false;
        this.isBodyOverflowing = false;
        this.originalBodyPadding = 0;
        this.scrollbarWidth = 0;
        this.timerHideModal = 0;
        this.timerRmBackDrop = 0;
        this.isNested = false;
        this._backdrop = clf.createLoader(_element, _viewContainerRef, _renderer);
    }
    Object.defineProperty(ModalDirective.prototype, "config", {
        get: function () {
            return this._config;
        },
        /** allows to set modal configuration via element property */
        set: function (conf) {
            this._config = this.getConfig(conf);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalDirective.prototype, "isShown", {
        get: function () {
            return this._isShown;
        },
        enumerable: true,
        configurable: true
    });
    ModalDirective.prototype.onClick = function (event) {
        if (this.config.ignoreBackdropClick ||
            this.config.backdrop === 'static' ||
            event.target !== this._element.nativeElement) {
            return;
        }
        this.dismissReason = DISMISS_REASONS.BACKRDOP;
        this.hide(event);
    };
    // todo: consider preventing default and stopping propagation
    ModalDirective.prototype.onEsc = function () {
        if (this.config.keyboard) {
            this.dismissReason = DISMISS_REASONS.ESC;
            this.hide();
        }
    };
    ModalDirective.prototype.ngOnDestroy = function () {
        this.config = void 0;
        if (this._isShown) {
            this._isShown = false;
            this.hideModal();
            this._backdrop.dispose();
        }
    };
    ModalDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._config = this._config || this.getConfig();
        setTimeout(function () {
            if (_this._config.show) {
                _this.show();
            }
        }, 0);
    };
    /* Public methods */
    /** Allows to manually toggle modal visibility */
    ModalDirective.prototype.toggle = function () {
        return this._isShown ? this.hide() : this.show();
    };
    /** Allows to manually open modal */
    ModalDirective.prototype.show = function () {
        var _this = this;
        this.dismissReason = null;
        this.onShow.emit(this);
        if (this._isShown) {
            return;
        }
        clearTimeout(this.timerHideModal);
        clearTimeout(this.timerRmBackDrop);
        this._isShown = true;
        this.checkScrollbar();
        this.setScrollbar();
        if (document$1 && document$1.body) {
            if (document$1.body.classList.contains(CLASS_NAME.OPEN)) {
                this.isNested = true;
            }
            else {
                this._renderer.addClass(document$1.body, CLASS_NAME.OPEN);
            }
        }
        this.showBackdrop(function () {
            _this.showElement();
        });
    };
    /** Allows to manually close modal */
    ModalDirective.prototype.hide = function (event) {
        var _this = this;
        if (event) {
            event.preventDefault();
        }
        this.onHide.emit(this);
        // todo: add an option to prevent hiding
        if (!this._isShown) {
            return;
        }
        clearTimeout(this.timerHideModal);
        clearTimeout(this.timerRmBackDrop);
        this._isShown = false;
        this._renderer.removeClass(this._element.nativeElement, CLASS_NAME.IN);
        if (!isBs3()) {
            this._renderer.removeClass(this._element.nativeElement, CLASS_NAME.SHOW);
        }
        // this._addClassIn = false;
        if (this.isAnimated) {
            this.timerHideModal = setTimeout(function () { return _this.hideModal(); }, TRANSITION_DURATION);
        }
        else {
            this.hideModal();
        }
    };
    /** Private methods @internal */
    ModalDirective.prototype.getConfig = function (config) {
        return Object.assign({}, modalConfigDefaults, config);
    };
    /**
     *  Show dialog
     *  @internal
     */
    ModalDirective.prototype.showElement = function () {
        var _this = this;
        // todo: replace this with component loader usage
        if (!this._element.nativeElement.parentNode ||
            this._element.nativeElement.parentNode.nodeType !== Node.ELEMENT_NODE) {
            // don't move modals dom position
            if (document$1 && document$1.body) {
                document$1.body.appendChild(this._element.nativeElement);
            }
        }
        this._renderer.setAttribute(this._element.nativeElement, 'aria-hidden', 'false');
        this._renderer.setStyle(this._element.nativeElement, 'display', 'block');
        this._renderer.setProperty(this._element.nativeElement, 'scrollTop', 0);
        if (this.isAnimated) {
            Utils.reflow(this._element.nativeElement);
        }
        // this._addClassIn = true;
        this._renderer.addClass(this._element.nativeElement, CLASS_NAME.IN);
        if (!isBs3()) {
            this._renderer.addClass(this._element.nativeElement, CLASS_NAME.SHOW);
        }
        var transitionComplete = function () {
            if (_this._config.focus) {
                _this._element.nativeElement.focus();
            }
            _this.onShown.emit(_this);
        };
        if (this.isAnimated) {
            setTimeout(transitionComplete, TRANSITION_DURATION);
        }
        else {
            transitionComplete();
        }
    };
    /** @internal */
    ModalDirective.prototype.hideModal = function () {
        var _this = this;
        this._renderer.setAttribute(this._element.nativeElement, 'aria-hidden', 'true');
        this._renderer.setStyle(this._element.nativeElement, 'display', 'none');
        this.showBackdrop(function () {
            if (!_this.isNested) {
                if (document$1 && document$1.body) {
                    _this._renderer.removeClass(document$1.body, CLASS_NAME.OPEN);
                }
                _this.resetScrollbar();
            }
            _this.resetAdjustments();
            _this.focusOtherModal();
            _this.onHidden.emit(_this);
        });
    };
    // todo: original show was calling a callback when done, but we can use
    // promise
    /** @internal */
    ModalDirective.prototype.showBackdrop = function (callback) {
        var _this = this;
        if (this._isShown &&
            this.config.backdrop &&
            (!this.backdrop || !this.backdrop.instance.isShown)) {
            this.removeBackdrop();
            this._backdrop
                .attach(ModalBackdropComponent)
                .to('body')
                .show({ isAnimated: this.isAnimated });
            this.backdrop = this._backdrop._componentRef;
            if (!callback) {
                return;
            }
            if (!this.isAnimated) {
                callback();
                return;
            }
            setTimeout(callback, BACKDROP_TRANSITION_DURATION);
        }
        else if (!this._isShown && this.backdrop) {
            this.backdrop.instance.isShown = false;
            var callbackRemove = function () {
                _this.removeBackdrop();
                if (callback) {
                    callback();
                }
            };
            if (this.backdrop.instance.isAnimated) {
                this.timerRmBackDrop = setTimeout(callbackRemove, BACKDROP_TRANSITION_DURATION);
            }
            else {
                callbackRemove();
            }
        }
        else if (callback) {
            callback();
        }
    };
    /** @internal */
    ModalDirective.prototype.removeBackdrop = function () {
        this._backdrop.hide();
    };
    /** Events tricks */
    // no need for it
    // protected setEscapeEvent():void {
    //   if (this._isShown && this._config.keyboard) {
    //     $(this._element).on(Event.KEYDOWN_DISMISS, (event) => {
    //       if (event.which === 27) {
    //         this.hide()
    //       }
    //     })
    //
    //   } else if (!this._isShown) {
    //     $(this._element).off(Event.KEYDOWN_DISMISS)
    //   }
    // }
    // protected setResizeEvent():void {
    // console.log(this.renderer.listenGlobal('', Event.RESIZE));
    // if (this._isShown) {
    //   $(window).on(Event.RESIZE, $.proxy(this._handleUpdate, this))
    // } else {
    //   $(window).off(Event.RESIZE)
    // }
    // }
    ModalDirective.prototype.focusOtherModal = function () {
        if (this._element.nativeElement.parentElement == null)
            return;
        var otherOpenedModals = this._element.nativeElement.parentElement.querySelectorAll('.in[bsModal]');
        if (!otherOpenedModals.length) {
            return;
        }
        otherOpenedModals[otherOpenedModals.length - 1].focus();
    };
    /** @internal */
    ModalDirective.prototype.resetAdjustments = function () {
        this._renderer.setStyle(this._element.nativeElement, 'paddingLeft', '');
        this._renderer.setStyle(this._element.nativeElement, 'paddingRight', '');
    };
    /** Scroll bar tricks */
    /** @internal */
    ModalDirective.prototype.checkScrollbar = function () {
        this.isBodyOverflowing = document$1.body.clientWidth < win.innerWidth;
        this.scrollbarWidth = this.getScrollbarWidth();
    };
    ModalDirective.prototype.setScrollbar = function () {
        if (!document$1) {
            return;
        }
        this.originalBodyPadding = parseInt(win
            .getComputedStyle(document$1.body)
            .getPropertyValue('padding-right') || 0, 10);
        if (this.isBodyOverflowing) {
            document$1.body.style.paddingRight = this.originalBodyPadding +
                this.scrollbarWidth + "px";
        }
    };
    ModalDirective.prototype.resetScrollbar = function () {
        document$1.body.style.paddingRight = this.originalBodyPadding;
    };
    // thx d.walsh
    ModalDirective.prototype.getScrollbarWidth = function () {
        var scrollDiv = this._renderer.createElement('div');
        this._renderer.addClass(scrollDiv, CLASS_NAME.SCROLLBAR_MEASURER);
        this._renderer.appendChild(document$1.body, scrollDiv);
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        this._renderer.removeChild(document$1.body, scrollDiv);
        return scrollbarWidth;
    };
    ModalDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{
                    selector: '[bsModal]',
                    exportAs: 'bs-modal'
                },] },
    ];
    /** @nocollapse */
    ModalDirective.ctorParameters = function () {
        return [
            { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
            { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewContainerRef */], },
            { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Renderer2 */], },
            { type: ComponentLoaderFactory, },
        ];
    };
    ModalDirective.propDecorators = {
        'config': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'onShow': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
        'onShown': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
        'onHide': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
        'onHidden': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
        'onClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */], args: ['click', ['$event'],] },],
        'onEsc': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */], args: ['keydown.esc',] },],
    };
    return ModalDirective;
}());
/** Default dropdown configuration */
var BsDropdownConfig = (function () {
    function BsDropdownConfig() {
        /** default dropdown auto closing behavior */
        this.autoClose = true;
    }
    BsDropdownConfig.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */] },
    ];
    /** @nocollapse */
    BsDropdownConfig.ctorParameters = function () { return []; };
    return BsDropdownConfig;
}());
var BsDropdownState = (function () {
    function BsDropdownState() {
        var _this = this;
        this.direction = 'down';
        this.isOpenChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.isDisabledChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.toggleClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.dropdownMenu = new Promise(function (resolve) {
            _this.resolveDropdownMenu = resolve;
        });
    }
    BsDropdownState.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */] },
    ];
    /** @nocollapse */
    BsDropdownState.ctorParameters = function () { return []; };
    return BsDropdownState;
}());
var BsDropdownContainerComponent = (function () {
    function BsDropdownContainerComponent(_state, cd, _renderer, _element) {
        var _this = this;
        this._state = _state;
        this.cd = cd;
        this._renderer = _renderer;
        this.isOpen = false;
        this._subscription = _state.isOpenChange.subscribe(function (value) {
            _this.isOpen = value;
            var dropdown = _element.nativeElement.querySelector('.dropdown-menu');
            if (dropdown) {
                _this._renderer.addClass(dropdown, 'show');
                if (dropdown.classList.contains('dropdown-menu-right')) {
                    _this._renderer.setStyle(dropdown, 'left', 'auto');
                    _this._renderer.setStyle(dropdown, 'right', '0');
                }
                if (_this.direction === 'up') {
                    _this._renderer.setStyle(dropdown, 'top', 'auto');
                    _this._renderer.setStyle(dropdown, 'transform', 'translateY(-101%)');
                }
            }
            _this.cd.markForCheck();
            _this.cd.detectChanges();
        });
    }
    Object.defineProperty(BsDropdownContainerComponent.prototype, "direction", {
        get: function () {
            return this._state.direction;
        },
        enumerable: true,
        configurable: true
    });
    BsDropdownContainerComponent.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    BsDropdownContainerComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                    selector: 'bs-dropdown-container',
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
                    host: {
                        style: 'display:block;position: absolute;'
                    },
                    template: "\n    <div [class.dropup]=\"direction === 'up'\"\n         [class.dropdown]=\"direction === 'down'\"\n         [class.show]=\"isOpen\"\n         [class.open]=\"isOpen\"><ng-content></ng-content></div>\n  "
                },] },
    ];
    /** @nocollapse */
    BsDropdownContainerComponent.ctorParameters = function () {
        return [
            { type: BsDropdownState, },
            { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */], },
            { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Renderer2 */], },
            { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
        ];
    };
    return BsDropdownContainerComponent;
}());
// tslint:disable:max-file-line-count
var BsDropdownDirective = (function () {
    function BsDropdownDirective(_elementRef, _renderer, _viewContainerRef, _cis, _config, _state) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._viewContainerRef = _viewContainerRef;
        this._cis = _cis;
        this._config = _config;
        this._state = _state;
        // todo: move to component loader
        this._isInlineOpen = false;
        this._subscriptions = [];
        this._isInited = false;
        // set initial dropdown state from config
        this._state.autoClose = this._config.autoClose;
        // create dropdown component loader
        this._dropdown = this._cis
            .createLoader(this._elementRef, this._viewContainerRef, this._renderer)
            .provide({ provide: BsDropdownState, useValue: this._state });
        this.onShown = this._dropdown.onShown;
        this.onHidden = this._dropdown.onHidden;
        this.isOpenChange = this._state.isOpenChange;
    }
    Object.defineProperty(BsDropdownDirective.prototype, "autoClose", {
        get: function () {
            return this._state.autoClose;
        },
        /**
         * Indicates that dropdown will be closed on item or document click,
         * and after pressing ESC
         */
        set: function (value) {
            this._state.autoClose = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "isDisabled", {
        get: function () {
            return this._isDisabled;
        },
        /**
         * Disables dropdown toggle and hides dropdown menu if opened
         */
        set: function (value) {
            this._isDisabled = value;
            this._state.isDisabledChange.emit(value);
            if (value) {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "isOpen", {
        /**
         * Returns whether or not the popover is currently being shown
         */
        get: function () {
            if (this._showInline) {
                return this._isInlineOpen;
            }
            return this._dropdown.isShown;
        },
        set: function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "isBs4", {
        get: function () {
            return !isBs3();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "_showInline", {
        get: function () {
            return !this.container;
        },
        enumerable: true,
        configurable: true
    });
    BsDropdownDirective.prototype.ngOnInit = function () {
        var _this = this;
        // fix: seems there are an issue with `routerLinkActive`
        // which result in duplicated call ngOnInit without call to ngOnDestroy
        // read more: https://github.com/valor-software/ngx-bootstrap/issues/1885
        if (this._isInited) {
            return;
        }
        this._isInited = true;
        // attach DOM listeners
        this._dropdown.listen({
            // because of dropdown inline mode
            outsideClick: false,
            triggers: this.triggers,
            show: function () { return _this.show(); }
        });
        // toggle visibility on toggle element click
        this._subscriptions.push(this._state.toggleClick.subscribe(function (value) { return _this.toggle(value); }));
        // hide dropdown if set disabled while opened
        this._subscriptions.push(this._state.isDisabledChange
            .filter(function (value) { return value; })
            .subscribe(function (value) { return _this.hide(); }));
    };
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    BsDropdownDirective.prototype.show = function () {
        var _this = this;
        if (this.isOpen || this.isDisabled) {
            return;
        }
        if (this._showInline) {
            if (!this._inlinedMenu) {
                this._state.dropdownMenu.then(function (dropdownMenu) {
                    _this._dropdown.attachInline(dropdownMenu.viewContainer, dropdownMenu.templateRef);
                    _this._inlinedMenu = _this._dropdown._inlineViewRef;
                    _this.addBs4Polyfills();
                })
                    .catch();
            }
            this.addBs4Polyfills();
            this._isInlineOpen = true;
            this.onShown.emit(true);
            this._state.isOpenChange.emit(true);
            return;
        }
        this._state.dropdownMenu.then(function (dropdownMenu) {
            // check direction in which dropdown should be opened
            var _dropup = _this.dropup ||
                (typeof _this.dropup !== 'undefined' && _this.dropup);
            _this._state.direction = _dropup ? 'up' : 'down';
            var _placement = _this.placement || (_dropup ? 'top left' : 'bottom left');
            // show dropdown
            _this._dropdown
                .attach(BsDropdownContainerComponent)
                .to(_this.container)
                .position({ attachment: _placement })
                .show({
                content: dropdownMenu.templateRef,
                placement: _placement
            });
            _this._state.isOpenChange.emit(true);
        })
            .catch();
    };
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    BsDropdownDirective.prototype.hide = function () {
        if (!this.isOpen) {
            return;
        }
        if (this._showInline) {
            this.removeShowClass();
            this._isInlineOpen = false;
            this.onHidden.emit(true);
        }
        else {
            this._dropdown.hide();
        }
        this._state.isOpenChange.emit(false);
    };
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    BsDropdownDirective.prototype.toggle = function (value) {
        if (this.isOpen || !value) {
            return this.hide();
        }
        return this.show();
    };
    BsDropdownDirective.prototype.ngOnDestroy = function () {
        // clean up subscriptions and destroy dropdown
        for (var _i = 0, _a = this._subscriptions; _i < _a.length; _i++) {
            var sub = _a[_i];
            sub.unsubscribe();
        }
        this._dropdown.dispose();
    };
    BsDropdownDirective.prototype.addBs4Polyfills = function () {
        if (!isBs3()) {
            this.addShowClass();
            this.checkRightAlignment();
            this.checkDropup();
        }
    };
    BsDropdownDirective.prototype.addShowClass = function () {
        if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
            this._renderer.addClass(this._inlinedMenu.rootNodes[0], 'show');
        }
    };
    BsDropdownDirective.prototype.removeShowClass = function () {
        if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
            this._renderer.removeClass(this._inlinedMenu.rootNodes[0], 'show');
        }
    };
    BsDropdownDirective.prototype.checkRightAlignment = function () {
        if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
            var isRightAligned = this._inlinedMenu.rootNodes[0].classList.contains('dropdown-menu-right');
            this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'left', isRightAligned ? 'auto' : '0');
            this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'right', isRightAligned ? '0' : 'auto');
        }
    };
    BsDropdownDirective.prototype.checkDropup = function () {
        if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
            // a little hack to not break support of bootstrap 4 beta
            this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'top', this.dropup ? 'auto' : '100%');
            this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'transform', this.dropup ? 'translateY(-101%)' : 'translateY(0)');
        }
    };
    BsDropdownDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{
                    selector: '[bsDropdown],[dropdown]',
                    exportAs: 'bs-dropdown',
                    providers: [BsDropdownState],
                    host: {
                        '[class.dropup]': 'dropup',
                        '[class.open]': 'isOpen',
                        '[class.show]': 'isOpen && isBs4'
                    }
                },] },
    ];
    /** @nocollapse */
    BsDropdownDirective.ctorParameters = function () {
        return [
            { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
            { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Renderer2 */], },
            { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewContainerRef */], },
            { type: ComponentLoaderFactory, },
            { type: BsDropdownConfig, },
            { type: BsDropdownState, },
        ];
    };
    BsDropdownDirective.propDecorators = {
        'placement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'triggers': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'container': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'dropup': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'autoClose': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'isDisabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'isOpen': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'isOpenChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
        'onShown': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
        'onHidden': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
    };
    return BsDropdownDirective;
}());
// todo: split
/** Provides default values for Pagination and pager components */
var PaginationConfig = (function () {
    function PaginationConfig() {
        this.main = {
            maxSize: void 0,
            itemsPerPage: 10,
            boundaryLinks: false,
            directionLinks: true,
            firstText: 'First',
            previousText: 'Previous',
            nextText: 'Next',
            lastText: 'Last',
            pageBtnClass: '',
            rotate: true
        };
        this.pager = {
            itemsPerPage: 15,
            previousText: '« Previous',
            nextText: 'Next »',
            pageBtnClass: '',
            align: true
        };
    }
    PaginationConfig.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */] },
    ];
    /** @nocollapse */
    PaginationConfig.ctorParameters = function () { return []; };
    return PaginationConfig;
}());
var PAGER_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_8__angular_forms__["e" /* NG_VALUE_ACCESSOR */],
    // tslint:disable-next-line
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* forwardRef */])(function () { return PagerComponent; }),
    multi: true
};
var PagerComponent = (function () {
    function PagerComponent(renderer, elementRef, paginationConfig, changeDetection) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.changeDetection = changeDetection;
        /** fired when total pages count changes, $event:number equals to total pages count */
        this.numPages = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        /** fired when page was changed, $event:{page, itemsPerPage} equals to
         * object with current page index and number of items per page
         */
        this.pageChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.inited = false;
        this._page = 1;
        this.renderer = renderer;
        this.elementRef = elementRef;
        if (!this.config) {
            this.configureOptions(Object.assign({}, paginationConfig.main, paginationConfig.pager));
        }
    }
    Object.defineProperty(PagerComponent.prototype, "itemsPerPage", {
        /** maximum number of items per page. If value less than 1 will display all items on one page */
        get: function () {
            return this._itemsPerPage;
        },
        set: function (v) {
            this._itemsPerPage = v;
            this.totalPages = this.calculateTotalPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagerComponent.prototype, "totalItems", {
        /** total number of items in all pages */
        get: function () {
            return this._totalItems;
        },
        set: function (v) {
            this._totalItems = v;
            this.totalPages = this.calculateTotalPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagerComponent.prototype, "totalPages", {
        get: function () {
            return this._totalPages;
        },
        set: function (v) {
            this._totalPages = v;
            this.numPages.emit(v);
            if (this.inited) {
                this.selectPage(this.page);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagerComponent.prototype, "page", {
        get: function () {
            return this._page;
        },
        set: function (value) {
            var _previous = this._page;
            this._page = value > this.totalPages ? this.totalPages : value || 1;
            this.changeDetection.markForCheck();
            if (_previous === this._page || typeof _previous === 'undefined') {
                return;
            }
            this.pageChanged.emit({
                page: this._page,
                itemsPerPage: this.itemsPerPage
            });
        },
        enumerable: true,
        configurable: true
    });
    PagerComponent.prototype.configureOptions = function (config) {
        this.config = Object.assign({}, config);
    };
    PagerComponent.prototype.ngOnInit = function () {
        if (typeof window !== 'undefined') {
            this.classMap = this.elementRef.nativeElement.getAttribute('class') || '';
        }
        // watch for maxSize
        this.maxSize =
            typeof this.maxSize !== 'undefined' ? this.maxSize : this.config.maxSize;
        this.rotate =
            typeof this.rotate !== 'undefined' ? this.rotate : this.config.rotate;
        this.boundaryLinks =
            typeof this.boundaryLinks !== 'undefined'
                ? this.boundaryLinks
                : this.config.boundaryLinks;
        this.directionLinks =
            typeof this.directionLinks !== 'undefined'
                ? this.directionLinks
                : this.config.directionLinks;
        this.pageBtnClass =
            typeof this.pageBtnClass !== 'undefined'
                ? this.pageBtnClass
                : this.config.pageBtnClass;
        // base class
        this.itemsPerPage =
            typeof this.itemsPerPage !== 'undefined'
                ? this.itemsPerPage
                : this.config.itemsPerPage;
        this.totalPages = this.calculateTotalPages();
        // this class
        this.pages = this.getPages(this.page, this.totalPages);
        this.inited = true;
    };
    PagerComponent.prototype.writeValue = function (value) {
        this.page = value;
        this.pages = this.getPages(this.page, this.totalPages);
    };
    PagerComponent.prototype.getText = function (key) {
        return this[key + "Text"] || this.config[key + "Text"];
    };
    PagerComponent.prototype.noPrevious = function () {
        return this.page === 1;
    };
    PagerComponent.prototype.noNext = function () {
        return this.page === this.totalPages;
    };
    PagerComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    PagerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    PagerComponent.prototype.selectPage = function (page, event) {
        if (event) {
            event.preventDefault();
        }
        if (!this.disabled) {
            if (event && event.target) {
                var target = event.target;
                target.blur();
            }
            this.writeValue(page);
            this.onChange(this.page);
        }
    };
    // Create page object used in template
    PagerComponent.prototype.makePage = function (num, text, active) {
        return { text: text, number: num, active: active };
    };
    PagerComponent.prototype.getPages = function (currentPage, totalPages) {
        var pages = [];
        // Default page limits
        var startPage = 1;
        var endPage = totalPages;
        var isMaxSized = typeof this.maxSize !== 'undefined' && this.maxSize < totalPages;
        // recompute if maxSize
        if (isMaxSized) {
            if (this.rotate) {
                // Current page is displayed in the middle of the visible ones
                startPage = Math.max(currentPage - Math.floor(this.maxSize / 2), 1);
                endPage = startPage + this.maxSize - 1;
                // Adjust if limit is exceeded
                if (endPage > totalPages) {
                    endPage = totalPages;
                    startPage = endPage - this.maxSize + 1;
                }
            }
            else {
                // Visible pages are paginated with maxSize
                startPage =
                    (Math.ceil(currentPage / this.maxSize) - 1) * this.maxSize + 1;
                // Adjust last page if limit is exceeded
                endPage = Math.min(startPage + this.maxSize - 1, totalPages);
            }
        }
        // Add page number links
        for (var num = startPage; num <= endPage; num++) {
            var page = this.makePage(num, num.toString(), num === currentPage);
            pages.push(page);
        }
        // Add links to move between page sets
        if (isMaxSized && !this.rotate) {
            if (startPage > 1) {
                var previousPageSet = this.makePage(startPage - 1, '...', false);
                pages.unshift(previousPageSet);
            }
            if (endPage < totalPages) {
                var nextPageSet = this.makePage(endPage + 1, '...', false);
                pages.push(nextPageSet);
            }
        }
        return pages;
    };
    // base class
    PagerComponent.prototype.calculateTotalPages = function () {
        var totalPages = this.itemsPerPage < 1
            ? 1
            : Math.ceil(this.totalItems / this.itemsPerPage);
        return Math.max(totalPages || 0, 1);
    };
    PagerComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                    selector: 'pager',
                    template: "<ul class=\"pager\"> <li [class.disabled]=\"noPrevious()\" [class.previous]=\"align\" [ngClass]=\"{'pull-right': align, 'float-right': align}\" class=\"{{ pageBtnClass }}\"> <a href (click)=\"selectPage(page - 1, $event)\">{{ getText('previous') }}</a> </li> <li [class.disabled]=\"noNext()\" [class.next]=\"align\" [ngClass]=\"{'pull-right': align, 'float-right': align}\" class=\"{{ pageBtnClass }}\"> <a href (click)=\"selectPage(page + 1, $event)\">{{ getText('next') }}</a> </li> </ul> ",
                    providers: [PAGER_CONTROL_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    PagerComponent.ctorParameters = function () {
        return [
            { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Renderer2 */], },
            { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
            { type: PaginationConfig, },
            { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */], },
        ];
    };
    PagerComponent.propDecorators = {
        'align': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'maxSize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'boundaryLinks': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'directionLinks': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'firstText': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'previousText': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'nextText': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'lastText': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'rotate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'pageBtnClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'numPages': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
        'pageChanged': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
        'itemsPerPage': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'totalItems': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    };
    return PagerComponent;
}());
var PAGINATION_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_8__angular_forms__["e" /* NG_VALUE_ACCESSOR */],
    // tslint:disable-next-line
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* forwardRef */])(function () { return PaginationComponent; }),
    multi: true
};
var PaginationComponent = (function () {
    function PaginationComponent(renderer, elementRef, paginationConfig, changeDetection) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.changeDetection = changeDetection;
        /** fired when total pages count changes, $event:number equals to total pages count */
        this.numPages = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        /** fired when page was changed, $event:{page, itemsPerPage} equals to object
         * with current page index and number of items per page
         */
        this.pageChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.inited = false;
        this._page = 1;
        this.renderer = renderer;
        this.elementRef = elementRef;
        if (!this.config) {
            this.configureOptions(paginationConfig.main);
        }
    }
    Object.defineProperty(PaginationComponent.prototype, "itemsPerPage", {
        /** maximum number of items per page. If value less than 1 will display all items on one page */
        get: function () {
            return this._itemsPerPage;
        },
        set: function (v) {
            this._itemsPerPage = v;
            this.totalPages = this.calculateTotalPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "totalItems", {
        /** total number of items in all pages */
        get: function () {
            return this._totalItems;
        },
        set: function (v) {
            this._totalItems = v;
            this.totalPages = this.calculateTotalPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "totalPages", {
        get: function () {
            return this._totalPages;
        },
        set: function (v) {
            this._totalPages = v;
            this.numPages.emit(v);
            if (this.inited) {
                this.selectPage(this.page);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "page", {
        get: function () {
            return this._page;
        },
        set: function (value) {
            var _previous = this._page;
            this._page = value > this.totalPages ? this.totalPages : value || 1;
            this.changeDetection.markForCheck();
            if (_previous === this._page || typeof _previous === 'undefined') {
                return;
            }
            this.pageChanged.emit({
                page: this._page,
                itemsPerPage: this.itemsPerPage
            });
        },
        enumerable: true,
        configurable: true
    });
    PaginationComponent.prototype.configureOptions = function (config) {
        this.config = Object.assign({}, config);
    };
    PaginationComponent.prototype.ngOnInit = function () {
        if (typeof window !== 'undefined') {
            this.classMap = this.elementRef.nativeElement.getAttribute('class') || '';
        }
        // watch for maxSize
        this.maxSize =
            typeof this.maxSize !== 'undefined' ? this.maxSize : this.config.maxSize;
        this.rotate =
            typeof this.rotate !== 'undefined' ? this.rotate : this.config.rotate;
        this.boundaryLinks =
            typeof this.boundaryLinks !== 'undefined'
                ? this.boundaryLinks
                : this.config.boundaryLinks;
        this.directionLinks =
            typeof this.directionLinks !== 'undefined'
                ? this.directionLinks
                : this.config.directionLinks;
        this.pageBtnClass =
            typeof this.pageBtnClass !== 'undefined'
                ? this.pageBtnClass
                : this.config.pageBtnClass;
        // base class
        this.itemsPerPage =
            typeof this.itemsPerPage !== 'undefined'
                ? this.itemsPerPage
                : this.config.itemsPerPage;
        this.totalPages = this.calculateTotalPages();
        // this class
        this.pages = this.getPages(this.page, this.totalPages);
        this.inited = true;
    };
    PaginationComponent.prototype.writeValue = function (value) {
        this.page = value;
        this.pages = this.getPages(this.page, this.totalPages);
    };
    PaginationComponent.prototype.getText = function (key) {
        return this[key + "Text"] || this.config[key + "Text"];
    };
    PaginationComponent.prototype.noPrevious = function () {
        return this.page === 1;
    };
    PaginationComponent.prototype.noNext = function () {
        return this.page === this.totalPages;
    };
    PaginationComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    PaginationComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    PaginationComponent.prototype.selectPage = function (page, event) {
        if (event) {
            event.preventDefault();
        }
        if (!this.disabled) {
            if (event && event.target) {
                var target = event.target;
                target.blur();
            }
            this.writeValue(page);
            this.onChange(this.page);
        }
    };
    // Create page object used in template
    PaginationComponent.prototype.makePage = function (num, text, active) {
        return { text: text, number: num, active: active };
    };
    PaginationComponent.prototype.getPages = function (currentPage, totalPages) {
        var pages = [];
        // Default page limits
        var startPage = 1;
        var endPage = totalPages;
        var isMaxSized = typeof this.maxSize !== 'undefined' && this.maxSize < totalPages;
        // recompute if maxSize
        if (isMaxSized) {
            if (this.rotate) {
                // Current page is displayed in the middle of the visible ones
                startPage = Math.max(currentPage - Math.floor(this.maxSize / 2), 1);
                endPage = startPage + this.maxSize - 1;
                // Adjust if limit is exceeded
                if (endPage > totalPages) {
                    endPage = totalPages;
                    startPage = endPage - this.maxSize + 1;
                }
            }
            else {
                // Visible pages are paginated with maxSize
                startPage =
                    (Math.ceil(currentPage / this.maxSize) - 1) * this.maxSize + 1;
                // Adjust last page if limit is exceeded
                endPage = Math.min(startPage + this.maxSize - 1, totalPages);
            }
        }
        // Add page number links
        for (var num = startPage; num <= endPage; num++) {
            var page = this.makePage(num, num.toString(), num === currentPage);
            pages.push(page);
        }
        // Add links to move between page sets
        if (isMaxSized && !this.rotate) {
            if (startPage > 1) {
                var previousPageSet = this.makePage(startPage - 1, '...', false);
                pages.unshift(previousPageSet);
            }
            if (endPage < totalPages) {
                var nextPageSet = this.makePage(endPage + 1, '...', false);
                pages.push(nextPageSet);
            }
        }
        return pages;
    };
    // base class
    PaginationComponent.prototype.calculateTotalPages = function () {
        var totalPages = this.itemsPerPage < 1
            ? 1
            : Math.ceil(this.totalItems / this.itemsPerPage);
        return Math.max(totalPages || 0, 1);
    };
    PaginationComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                    selector: 'pagination',
                    template: "<ul class=\"pagination\" [ngClass]=\"classMap\"> <li class=\"pagination-first page-item\" *ngIf=\"boundaryLinks\" [class.disabled]=\"noPrevious()||disabled\"> <a class=\"page-link\" href (click)=\"selectPage(1, $event)\" [innerHTML]=\"getText('first')\"></a> </li> <li class=\"pagination-prev page-item\" *ngIf=\"directionLinks\" [class.disabled]=\"noPrevious()||disabled\"> <a class=\"page-link\" href (click)=\"selectPage(page - 1, $event)\" [innerHTML]=\"getText('previous')\"></a> </li> <li *ngFor=\"let pg of pages\" [class.active]=\"pg.active\" [class.disabled]=\"disabled&&!pg.active\" class=\"pagination-page page-item\"> <a class=\"page-link\" href (click)=\"selectPage(pg.number, $event)\" [innerHTML]=\"pg.text\"></a> </li> <li class=\"pagination-next page-item\" *ngIf=\"directionLinks\" [class.disabled]=\"noNext()||disabled\"> <a class=\"page-link\" href (click)=\"selectPage(page + 1, $event)\" [innerHTML]=\"getText('next')\"></a></li> <li class=\"pagination-last page-item\" *ngIf=\"boundaryLinks\" [class.disabled]=\"noNext()||disabled\"> <a class=\"page-link\" href (click)=\"selectPage(totalPages, $event)\" [innerHTML]=\"getText('last')\"></a></li> </ul> ",
                    providers: [PAGINATION_CONTROL_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    PaginationComponent.ctorParameters = function () {
        return [
            { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Renderer2 */], },
            { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
            { type: PaginationConfig, },
            { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */], },
        ];
    };
    PaginationComponent.propDecorators = {
        'align': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'maxSize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'boundaryLinks': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'directionLinks': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'firstText': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'previousText': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'nextText': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'lastText': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'rotate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'pageBtnClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'numPages': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
        'pageChanged': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
        'itemsPerPage': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'totalItems': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    };
    return PaginationComponent;
}());
// todo: progress element conflict with bootstrap.css
// todo: need hack: replace host element with div
var ProgressDirective = (function () {
    function ProgressDirective() {
        this.addClass = true;
        this.bars = [];
        this._max = 100;
    }
    Object.defineProperty(ProgressDirective.prototype, "max", {
        /** maximum total value of progress element */
        get: function () {
            return this._max;
        },
        set: function (v) {
            this._max = v;
            this.bars.forEach(function (bar) {
                bar.recalculatePercentage();
            });
        },
        enumerable: true,
        configurable: true
    });
    ProgressDirective.prototype.addBar = function (bar) {
        if (!this.animate) {
            bar.transition = 'none';
        }
        this.bars.push(bar);
    };
    ProgressDirective.prototype.removeBar = function (bar) {
        this.bars.splice(this.bars.indexOf(bar), 1);
    };
    ProgressDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{ selector: 'bs-progress, [progress]' },] },
    ];
    /** @nocollapse */
    ProgressDirective.ctorParameters = function () { return []; };
    ProgressDirective.propDecorators = {
        'animate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'max': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */], args: ['attr.max',] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'addClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */], args: ['class.progress',] },],
    };
    return ProgressDirective;
}());
// todo: number pipe
// todo: use query from progress?
var BarComponent = (function () {
    function BarComponent(progress) {
        this.percent = 0;
        this.progress = progress;
    }
    Object.defineProperty(BarComponent.prototype, "value", {
        /** current value of progress bar */
        get: function () {
            return this._value;
        },
        set: function (v) {
            if (!v && v !== 0) {
                return;
            }
            this._value = v;
            this.recalculatePercentage();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BarComponent.prototype, "setBarWidth", {
        get: function () {
            this.recalculatePercentage();
            return this.isBs3 ? '' : this.percent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BarComponent.prototype, "isBs3", {
        get: function () {
            return isBs3();
        },
        enumerable: true,
        configurable: true
    });
    BarComponent.prototype.ngOnInit = function () {
        this.progress.addBar(this);
    };
    BarComponent.prototype.ngOnDestroy = function () {
        this.progress.removeBar(this);
    };
    BarComponent.prototype.recalculatePercentage = function () {
        this.percent = +(this.value / this.progress.max * 100).toFixed(2);
        var totalPercentage = this.progress.bars
            .reduce(function (total, bar) {
            return total + bar.percent;
        }, 0);
        if (totalPercentage > 100) {
            this.percent -= totalPercentage - 100;
        }
    };
    BarComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                    selector: 'bar',
                    template: "<div class=\"progress-bar\" style=\"min-width: 0;\" role=\"progressbar\" [ngClass]=\"type && 'progress-bar-' + type + ' bg-' + type\" [ngStyle]=\"{width: (isBs3 ? (percent < 100 ? percent : 100) + '%' : '100%'), transition: transition}\" aria-valuemin=\"0\" [attr.aria-valuenow]=\"value\" [attr.aria-valuetext]=\"percent.toFixed(0) + '%'\" [attr.aria-valuemax]=\"max\"> <ng-content></ng-content> </div> "
                },] },
    ];
    /** @nocollapse */
    BarComponent.ctorParameters = function () {
        return [
            { type: ProgressDirective, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Host */] },] },
        ];
    };
    BarComponent.propDecorators = {
        'type': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'setBarWidth': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */], args: ['style.width.%',] },],
    };
    return BarComponent;
}());
var ProgressbarConfig = (function () {
    function ProgressbarConfig() {
        /** if `true` changing value of progress bar will be animated (note: not supported by Bootstrap 4) */
        this.animate = true;
        /** maximum total value of progress element */
        this.max = 100;
    }
    ProgressbarConfig.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */] },
    ];
    /** @nocollapse */
    ProgressbarConfig.ctorParameters = function () { return []; };
    return ProgressbarConfig;
}());
var ProgressbarComponent = (function () {
    function ProgressbarComponent(config) {
        this.isStacked = false;
        Object.assign(this, config);
    }
    Object.defineProperty(ProgressbarComponent.prototype, "value", {
        /** current value of progress bar. Could be a number or array of objects
         * like {"value":15,"type":"info","label":"15 %"}
         */
        set: function (value) {
            this.isStacked = Array.isArray(value);
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressbarComponent.prototype, "isBs3", {
        get: function () {
            return isBs3();
        },
        enumerable: true,
        configurable: true
    });
    ProgressbarComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                    selector: 'progressbar',
                    template: "<div progress [animate]=\"animate\" [max]=\"max\" [style.width]=\"!isBs3 ? '100%' : 'auto'\"> <bar [type]=\"type\" [value]=\"_value\" *ngIf=\"!isStacked\"> <ng-content></ng-content> </bar> <ng-template [ngIf]=\"isStacked\"> <bar *ngFor=\"let item of _value\" [type]=\"item.type\" [value]=\"item.value\">{{ item.label }} </bar> </ng-template> </div> ",
                    styles: [
                        "\n    :host {\n      width: 100%;\n    }\n  "
                    ]
                },] },
    ];
    /** @nocollapse */
    ProgressbarComponent.ctorParameters = function () {
        return [
            { type: ProgressbarConfig, },
        ];
    };
    ProgressbarComponent.propDecorators = {
        'animate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'max': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'type': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    };
    return ProgressbarComponent;
}());
var RATING_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_8__angular_forms__["e" /* NG_VALUE_ACCESSOR */],
    // tslint:disable-next-line
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* forwardRef */])(function () { return RatingComponent; }),
    multi: true
};
var RatingComponent = (function () {
    function RatingComponent(changeDetection) {
        this.changeDetection = changeDetection;
        /** number of icons */
        this.max = 5;
        /** fired when icon selected, $event:number equals to selected rating */
        this.onHover = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        /** fired when icon selected, $event:number equals to previous rating value */
        this.onLeave = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
    }
    RatingComponent.prototype.onKeydown = function (event) {
        if ([37, 38, 39, 40].indexOf(event.which) === -1) {
            return;
        }
        event.preventDefault();
        event.stopPropagation();
        var sign = event.which === 38 || event.which === 39 ? 1 : -1;
        this.rate(this.value + sign);
    };
    RatingComponent.prototype.ngOnInit = function () {
        this.max = typeof this.max !== 'undefined' ? this.max : 5;
        this.titles =
            typeof this.titles !== 'undefined' && this.titles.length > 0
                ? this.titles
                : ['one', 'two', 'three', 'four', 'five'];
        this.range = this.buildTemplateObjects(this.max);
    };
    // model -> view
    RatingComponent.prototype.writeValue = function (value) {
        if (value % 1 !== value) {
            this.value = Math.round(value);
            this.preValue = value;
            this.changeDetection.markForCheck();
            return;
        }
        this.preValue = value;
        this.value = value;
        this.changeDetection.markForCheck();
    };
    RatingComponent.prototype.enter = function (value) {
        if (!this.readonly) {
            this.value = value;
            this.changeDetection.markForCheck();
            this.onHover.emit(value);
        }
    };
    RatingComponent.prototype.reset = function () {
        this.value = this.preValue;
        this.changeDetection.markForCheck();
        this.onLeave.emit(this.value);
    };
    RatingComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    RatingComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    RatingComponent.prototype.rate = function (value) {
        if (!this.readonly && value >= 0 && value <= this.range.length) {
            this.writeValue(value);
            this.onChange(value);
        }
    };
    RatingComponent.prototype.buildTemplateObjects = function (max) {
        var result = [];
        for (var i = 0; i < max; i++) {
            result.push({
                index: i,
                title: this.titles[i] || i + 1
            });
        }
        return result;
    };
    RatingComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                    selector: 'rating',
                    template: "<span (mouseleave)=\"reset()\" (keydown)=\"onKeydown($event)\" tabindex=\"0\" role=\"slider\" aria-valuemin=\"0\" [attr.aria-valuemax]=\"range.length\" [attr.aria-valuenow]=\"value\"> <ng-template #star let-value=\"value\" let-index=\"index\">{{index < value ? '&#9733;' : '&#9734;'}}</ng-template> <ng-template ngFor let-r [ngForOf]=\"range\" let-index=\"index\"> <span class=\"sr-only\">({{ index < value ? '*' : ' ' }})</span> <span class=\"bs-rating-star\" (mouseenter)=\"enter(index + 1)\" (click)=\"rate(index + 1)\" [title]=\"r.title\" [style.cursor]=\"readonly ? 'default' : 'pointer'\" [class.active]=\"index < value\"> <ng-template [ngTemplateOutlet]=\"customTemplate || star\" [ngTemplateOutletContext]=\"{index: index, value: value}\"> </ng-template> </span> </ng-template> </span> ",
                    providers: [RATING_CONTROL_VALUE_ACCESSOR],
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush
                },] },
    ];
    /** @nocollapse */
    RatingComponent.ctorParameters = function () {
        return [
            { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */], },
        ];
    };
    RatingComponent.propDecorators = {
        'max': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'readonly': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'titles': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'customTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'onHover': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
        'onLeave': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
        'onKeydown': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */], args: ['keydown', ['$event'],] },],
    };
    return RatingComponent;
}());
var DraggableItemService = (function () {
    function DraggableItemService() {
        this.onCapture = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__["a" /* Subject */]();
    }
    DraggableItemService.prototype.dragStart = function (item) {
        this.draggableItem = item;
    };
    DraggableItemService.prototype.getItem = function () {
        return this.draggableItem;
    };
    DraggableItemService.prototype.captureItem = function (overZoneIndex, newIndex) {
        if (this.draggableItem.overZoneIndex !== overZoneIndex) {
            this.draggableItem.lastZoneIndex = this.draggableItem.overZoneIndex;
            this.draggableItem.overZoneIndex = overZoneIndex;
            this.onCapture.next(this.draggableItem);
            this.draggableItem = Object.assign({}, this.draggableItem, {
                overZoneIndex: overZoneIndex,
                i: newIndex
            });
        }
        return this.draggableItem;
    };
    DraggableItemService.prototype.onCaptureItem = function () {
        return this.onCapture;
    };
    DraggableItemService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */] },
    ];
    /** @nocollapse */
    DraggableItemService.ctorParameters = function () { return []; };
    return DraggableItemService;
}());
/* tslint:disable */
/* tslint:enable */
var SortableComponent = (function () {
    function SortableComponent(transfer) {
        var _this = this;
        /** class name for items wrapper */
        this.wrapperClass = '';
        /** style object for items wrapper */
        this.wrapperStyle = {};
        /** class name for item */
        this.itemClass = '';
        /** style object for item */
        this.itemStyle = {};
        /** class name for active item */
        this.itemActiveClass = '';
        /** style object for active item */
        this.itemActiveStyle = {};
        /** class name for placeholder */
        this.placeholderClass = '';
        /** style object for placeholder */
        this.placeholderStyle = {};
        /** placeholder item which will be shown if collection is empty */
        this.placeholderItem = '';
        /** fired on array change (reordering, insert, remove), same as <code>ngModelChange</code>.
         *  Returns new items collection as a payload.
         */
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.showPlaceholder = false;
        this.activeItem = -1;
        this.onTouched = Function.prototype;
        this.onChanged = Function.prototype;
        this.transfer = transfer;
        this.currentZoneIndex = SortableComponent.globalZoneIndex++;
        this.transfer
            .onCaptureItem()
            .subscribe(function (item) { return _this.onDrop(item); });
    }
    Object.defineProperty(SortableComponent.prototype, "items", {
        get: function () {
            return this._items;
        },
        set: function (value) {
            this._items = value;
            var out = this.items.map(function (x) { return x.initData; });
            this.onChanged(out);
            this.onChange.emit(out);
        },
        enumerable: true,
        configurable: true
    });
    SortableComponent.prototype.onItemDragstart = function (event, item, i) {
        this.initDragstartEvent(event);
        this.onTouched();
        this.transfer.dragStart({
            event: event,
            item: item,
            i: i,
            initialIndex: i,
            lastZoneIndex: this.currentZoneIndex,
            overZoneIndex: this.currentZoneIndex
        });
    };
    SortableComponent.prototype.onItemDragover = function (event, i) {
        if (!this.transfer.getItem()) {
            return;
        }
        event.preventDefault();
        var dragItem = this.transfer.captureItem(this.currentZoneIndex, this.items.length);
        var newArray = [];
        if (!this.items.length) {
            newArray = [dragItem.item];
        }
        else if (dragItem.i > i) {
            newArray = this.items.slice(0, i).concat([
                dragItem.item
            ], this.items.slice(i, dragItem.i), this.items.slice(dragItem.i + 1));
        }
        else {
            // this.draggedItem.i < i
            newArray = this.items.slice(0, dragItem.i).concat(this.items.slice(dragItem.i + 1, i + 1), [
                dragItem.item
            ], this.items.slice(i + 1));
        }
        this.items = newArray;
        dragItem.i = i;
        this.activeItem = i;
        this.updatePlaceholderState();
    };
    SortableComponent.prototype.cancelEvent = function (event) {
        if (!this.transfer.getItem() || !event) {
            return;
        }
        event.preventDefault();
    };
    SortableComponent.prototype.onDrop = function (item) {
        if (item &&
            item.overZoneIndex !== this.currentZoneIndex &&
            item.lastZoneIndex === this.currentZoneIndex) {
            this.items = this.items.filter(function (x, i) { return i !== item.i; });
            this.updatePlaceholderState();
        }
        this.resetActiveItem(undefined);
    };
    SortableComponent.prototype.resetActiveItem = function (event) {
        this.cancelEvent(event);
        this.activeItem = -1;
    };
    SortableComponent.prototype.registerOnChange = function (callback) {
        this.onChanged = callback;
    };
    SortableComponent.prototype.registerOnTouched = function (callback) {
        this.onTouched = callback;
    };
    SortableComponent.prototype.writeValue = function (value) {
        var _this = this;
        if (value) {
            this.items = value.map(function (x, i) {
                return ({
                    id: i,
                    initData: x,
                    value: _this.fieldName ? x[_this.fieldName] : x
                });
            });
        }
        else {
            this.items = [];
        }
        this.updatePlaceholderState();
    };
    SortableComponent.prototype.updatePlaceholderState = function () {
        this.showPlaceholder = !this._items.length;
    };
    SortableComponent.prototype.getItemStyle = function (isActive) {
        return isActive
            ? Object.assign({}, this.itemStyle, this.itemActiveStyle)
            : this.itemStyle;
    };
    // tslint:disable-next-line
    SortableComponent.prototype.initDragstartEvent = function (event) {
        // it is necessary for mozilla
        // data type should be 'Text' instead of 'text/plain' to keep compatibility
        // with IE
        event.dataTransfer.setData('Text', 'placeholder');
    };
    SortableComponent.globalZoneIndex = 0;
    SortableComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                    selector: 'bs-sortable',
                    exportAs: 'bs-sortable',
                    template: "\n<div\n    [ngClass]=\"wrapperClass\"\n    [ngStyle]=\"wrapperStyle\"\n    [ngStyle]=\"wrapperStyle\"\n    (dragover)=\"cancelEvent($event)\"\n    (dragenter)=\"cancelEvent($event)\"\n    (drop)=\"resetActiveItem($event)\"\n    (mouseleave)=\"resetActiveItem($event)\">\n  <div\n        *ngIf=\"showPlaceholder\"\n        [ngClass]=\"placeholderClass\"\n        [ngStyle]=\"placeholderStyle\"\n        (dragover)=\"onItemDragover($event, 0)\"\n        (dragenter)=\"cancelEvent($event)\"\n    >{{placeholderItem}}</div>\n    <div\n        *ngFor=\"let item of items; let i=index;\"\n        [ngClass]=\"[ itemClass, i === activeItem ? itemActiveClass : '' ]\"\n        [ngStyle]=\"getItemStyle(i === activeItem)\"\n        draggable=\"true\"\n        (dragstart)=\"onItemDragstart($event, item, i)\"\n        (dragend)=\"resetActiveItem($event)\"\n        (dragover)=\"onItemDragover($event, i)\"\n        (dragenter)=\"cancelEvent($event)\"\n    ><ng-template [ngTemplateOutlet]=\"itemTemplate || defItemTemplate\"\n  [ngTemplateOutletContext]=\"{item:item, index: i}\"></ng-template></div>\n</div>\n\n<ng-template #defItemTemplate let-item=\"item\">{{item.value}}</ng-template>  \n",
                    providers: [
                        {
                            provide: __WEBPACK_IMPORTED_MODULE_8__angular_forms__["e" /* NG_VALUE_ACCESSOR */],
                            useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* forwardRef */])(function () { return SortableComponent; }),
                            multi: true
                        }
                    ]
                },] },
    ];
    /** @nocollapse */
    SortableComponent.ctorParameters = function () {
        return [
            { type: DraggableItemService, },
        ];
    };
    SortableComponent.propDecorators = {
        'fieldName': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'wrapperClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'wrapperStyle': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'itemClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'itemStyle': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'itemActiveClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'itemActiveStyle': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'placeholderClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'placeholderStyle': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'placeholderItem': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'itemTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'onChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
    };
    return SortableComponent;
}());
var NgTranscludeDirective = (function () {
    function NgTranscludeDirective(viewRef) {
        this.viewRef = viewRef;
    }
    Object.defineProperty(NgTranscludeDirective.prototype, "ngTransclude", {
        get: function () {
            return this._ngTransclude;
        },
        set: function (templateRef) {
            this._ngTransclude = templateRef;
            if (templateRef) {
                this.viewRef.createEmbeddedView(templateRef);
            }
        },
        enumerable: true,
        configurable: true
    });
    NgTranscludeDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{
                    selector: '[ngTransclude]'
                },] },
    ];
    /** @nocollapse */
    NgTranscludeDirective.ctorParameters = function () {
        return [
            { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewContainerRef */], },
        ];
    };
    NgTranscludeDirective.propDecorators = {
        'ngTransclude': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    };
    return NgTranscludeDirective;
}());
var TabsetConfig = (function () {
    function TabsetConfig() {
        /** provides default navigation context class: 'tabs' or 'pills' */
        this.type = 'tabs';
    }
    TabsetConfig.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */] },
    ];
    /** @nocollapse */
    TabsetConfig.ctorParameters = function () { return []; };
    return TabsetConfig;
}());
// todo: add active event to tab
// todo: fix? mixing static and dynamic tabs position tabs in order of creation
var TabsetComponent = (function () {
    function TabsetComponent(config, renderer) {
        this.renderer = renderer;
        this.clazz = true;
        this.tabs = [];
        this.classMap = {};
        Object.assign(this, config);
    }
    Object.defineProperty(TabsetComponent.prototype, "vertical", {
        /** if true tabs will be placed vertically */
        get: function () {
            return this._vertical;
        },
        set: function (value) {
            this._vertical = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabsetComponent.prototype, "justified", {
        /** if true tabs fill the container and have a consistent width */
        get: function () {
            return this._justified;
        },
        set: function (value) {
            this._justified = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabsetComponent.prototype, "type", {
        /** navigation context class: 'tabs' or 'pills' */
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    TabsetComponent.prototype.ngOnDestroy = function () {
        this.isDestroyed = true;
    };
    TabsetComponent.prototype.addTab = function (tab) {
        this.tabs.push(tab);
        tab.active = this.tabs.length === 1 && typeof tab.active === 'undefined';
    };
    TabsetComponent.prototype.removeTab = function (tab, options) {
        if (options === void 0) {
            options = { reselect: true, emit: true };
        }
        var index = this.tabs.indexOf(tab);
        if (index === -1 || this.isDestroyed) {
            return;
        }
        // Select a new tab if the tab to be removed is selected and not destroyed
        if (options.reselect && tab.active && this.hasAvailableTabs(index)) {
            var newActiveIndex = this.getClosestTabIndex(index);
            this.tabs[newActiveIndex].active = true;
        }
        if (options.emit) {
            tab.removed.emit(tab);
        }
        this.tabs.splice(index, 1);
        if (tab.elementRef.nativeElement.parentNode) {
            this.renderer.removeChild(tab.elementRef.nativeElement.parentNode, tab.elementRef.nativeElement);
        }
    };
    TabsetComponent.prototype.getClosestTabIndex = function (index) {
        var tabsLength = this.tabs.length;
        if (!tabsLength) {
            return -1;
        }
        for (var step = 1; step <= tabsLength; step += 1) {
            var prevIndex = index - step;
            var nextIndex = index + step;
            if (this.tabs[prevIndex] && !this.tabs[prevIndex].disabled) {
                return prevIndex;
            }
            if (this.tabs[nextIndex] && !this.tabs[nextIndex].disabled) {
                return nextIndex;
            }
        }
        return -1;
    };
    TabsetComponent.prototype.hasAvailableTabs = function (index) {
        var tabsLength = this.tabs.length;
        if (!tabsLength) {
            return false;
        }
        for (var i = 0; i < tabsLength; i += 1) {
            if (!this.tabs[i].disabled && i !== index) {
                return true;
            }
        }
        return false;
    };
    TabsetComponent.prototype.setClassMap = function () {
        this.classMap = (_a = {
            'nav-stacked': this.vertical,
            'flex-column': this.vertical,
            'nav-justified': this.justified
        }, _a["nav-" + this.type] = true, _a);
        var _a;
    };
    TabsetComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                    selector: 'tabset',
                    template: "<ul class=\"nav\" [ngClass]=\"classMap\" (click)=\"$event.preventDefault()\"> <li *ngFor=\"let tabz of tabs\" [ngClass]=\"['nav-item', tabz.customClass || '']\" [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\"> <a href=\"javascript:void(0);\" class=\"nav-link\" [attr.id]=\"tabz.id ? tabz.id + '-link' : ''\" [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\" (click)=\"tabz.active = true\"> <span [ngTransclude]=\"tabz.headingRef\">{{ tabz.heading }}</span> <span *ngIf=\"tabz.removable\" (click)=\"$event.preventDefault(); removeTab(tabz);\" class=\"bs-remove-tab\"> &#10060;</span> </a> </li> </ul> <div class=\"tab-content\"> <ng-content></ng-content> </div> "
                },] },
    ];
    /** @nocollapse */
    TabsetComponent.ctorParameters = function () {
        return [
            { type: TabsetConfig, },
            { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Renderer2 */], },
        ];
    };
    TabsetComponent.propDecorators = {
        'vertical': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'justified': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'type': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'clazz': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */], args: ['class.tab-container',] },],
    };
    return TabsetComponent;
}());
var TabDirective = (function () {
    function TabDirective(tabset, elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        /** fired when tab became active, $event:Tab equals to selected instance of Tab component */
        this.select = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        /** fired when tab became inactive, $event:Tab equals to deselected instance of Tab component */
        this.deselect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        /** fired before tab will be removed, $event:Tab equals to instance of removed tab */
        this.removed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.addClass = true;
        this.tabset = tabset;
        this.tabset.addTab(this);
    }
    Object.defineProperty(TabDirective.prototype, "customClass", {
        /** if set, will be added to the tab's class attribute. Multiple classes are supported. */
        get: function () {
            return this._customClass;
        },
        set: function (customClass) {
            var _this = this;
            if (this.customClass) {
                this.customClass.split(' ').forEach(function (cssClass) {
                    _this.renderer.removeClass(_this.elementRef.nativeElement, cssClass);
                });
            }
            this._customClass = customClass ? customClass.trim() : null;
            if (this.customClass) {
                this.customClass.split(' ').forEach(function (cssClass) {
                    _this.renderer.addClass(_this.elementRef.nativeElement, cssClass);
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabDirective.prototype, "active", {
        /** tab active state toggle */
        get: function () {
            return this._active;
        },
        set: function (active) {
            var _this = this;
            if (this._active === active) {
                return;
            }
            if ((this.disabled && active) || !active) {
                if (this._active && !active) {
                    this.deselect.emit(this);
                    this._active = active;
                }
                return;
            }
            this._active = active;
            this.select.emit(this);
            this.tabset.tabs.forEach(function (tab) {
                if (tab !== _this) {
                    tab.active = false;
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    TabDirective.prototype.ngOnInit = function () {
        this.removable = this.removable;
    };
    TabDirective.prototype.ngOnDestroy = function () {
        this.tabset.removeTab(this, { reselect: false, emit: false });
    };
    TabDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{ selector: 'tab, [tab]' },] },
    ];
    /** @nocollapse */
    TabDirective.ctorParameters = function () {
        return [
            { type: TabsetComponent, },
            { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
            { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Renderer2 */], },
        ];
    };
    TabDirective.propDecorators = {
        'heading': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'id': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */], args: ['attr.id',] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'removable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'customClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'active': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */], args: ['class.active',] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'select': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
        'deselect': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
        'removed': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
        'addClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */], args: ['class.tab-pane',] },],
    };
    return TabDirective;
}());
var TimepickerActions = (function () {
    function TimepickerActions() {
    }
    TimepickerActions.prototype.writeValue = function (value) {
        return {
            type: TimepickerActions.WRITE_VALUE,
            payload: value
        };
    };
    TimepickerActions.prototype.changeHours = function (event) {
        return {
            type: TimepickerActions.CHANGE_HOURS,
            payload: event
        };
    };
    TimepickerActions.prototype.changeMinutes = function (event) {
        return {
            type: TimepickerActions.CHANGE_MINUTES,
            payload: event
        };
    };
    TimepickerActions.prototype.changeSeconds = function (event) {
        return {
            type: TimepickerActions.CHANGE_SECONDS,
            payload: event
        };
    };
    TimepickerActions.prototype.setTime = function (value) {
        return {
            type: TimepickerActions.SET_TIME_UNIT,
            payload: value
        };
    };
    TimepickerActions.prototype.updateControls = function (value) {
        return {
            type: TimepickerActions.UPDATE_CONTROLS,
            payload: value
        };
    };
    TimepickerActions.WRITE_VALUE = '[timepicker] write value from ng model';
    TimepickerActions.CHANGE_HOURS = '[timepicker] change hours';
    TimepickerActions.CHANGE_MINUTES = '[timepicker] change minutes';
    TimepickerActions.CHANGE_SECONDS = '[timepicker] change seconds';
    TimepickerActions.SET_TIME_UNIT = '[timepicker] set time unit';
    TimepickerActions.UPDATE_CONTROLS = '[timepicker] update controls';
    TimepickerActions.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */] },
    ];
    /** @nocollapse */
    TimepickerActions.ctorParameters = function () { return []; };
    return TimepickerActions;
}());
var dex = 10;
var hoursPerDay = 24;
var hoursPerDayHalf = 12;
var minutesPerHour = 60;
var secondsPerMinute = 60;
function isValidDate(value) {
    if (!value) {
        return false;
    }
    if (value instanceof Date && isNaN(value.getHours())) {
        return false;
    }
    if (typeof value === 'string') {
        return isValidDate(new Date(value));
    }
    return true;
}
function toNumber(value) {
    if (typeof value === 'number') {
        return value;
    }
    return parseInt(value, dex);
}
function parseHours(value, isPM) {
    if (isPM === void 0) {
        isPM = false;
    }
    var hour = toNumber(value);
    if (isNaN(hour) ||
        hour < 0 ||
        hour > (isPM ? hoursPerDayHalf : hoursPerDay)) {
        return NaN;
    }
    return hour;
}
function parseMinutes(value) {
    var minute = toNumber(value);
    if (isNaN(minute) || minute < 0 || minute > minutesPerHour) {
        return NaN;
    }
    return minute;
}
function parseSeconds(value) {
    var seconds = toNumber(value);
    if (isNaN(seconds) || seconds < 0 || seconds > secondsPerMinute) {
        return NaN;
    }
    return seconds;
}
function parseTime(value) {
    if (typeof value === 'string') {
        return new Date(value);
    }
    return value;
}
function changeTime(value, diff) {
    if (!value) {
        return changeTime(createDate$1(new Date(), 0, 0, 0), diff);
    }
    var hour = value.getHours();
    var minutes = value.getMinutes();
    var seconds = value.getSeconds();
    if (diff.hour) {
        hour = (hour + toNumber(diff.hour)) % hoursPerDay;
        if (hour < 0) {
            hour += hoursPerDay;
        }
    }
    if (diff.minute) {
        minutes = minutes + toNumber(diff.minute);
    }
    if (diff.seconds) {
        seconds = seconds + toNumber(diff.seconds);
    }
    return createDate$1(value, hour, minutes, seconds);
}
function setTime(value, opts) {
    var hour = parseHours(opts.hour);
    var minute = parseMinutes(opts.minute);
    var seconds = parseSeconds(opts.seconds) || 0;
    if (opts.isPM) {
        hour += hoursPerDayHalf;
    }
    // fixme: unreachable code, value is mandatory
    if (!value) {
        if (!isNaN(hour) && !isNaN(minute)) {
            return createDate$1(new Date(), hour, minute, seconds);
        }
        return value;
    }
    if (isNaN(hour) || isNaN(minute)) {
        return value;
    }
    return createDate$1(value, hour, minute, seconds);
}
function createDate$1(value, hours, minutes, seconds) {
    // fixme: unreachable code, value is mandatory
    var _value = value || new Date();
    return new Date(_value.getFullYear(), _value.getMonth(), _value.getDate(), hours, minutes, seconds, _value.getMilliseconds());
}
function padNumber(value) {
    var _value = value.toString();
    if (_value.length > 1) {
        return _value;
    }
    return "0" + _value;
}
function isInputValid(hours, minutes, seconds, isPM) {
    if (seconds === void 0) {
        seconds = '0';
    }
    return !(isNaN(parseHours(hours, isPM))
        || isNaN(parseMinutes(minutes))
        || isNaN(parseSeconds(seconds)));
}
function canChangeValue(state, event) {
    if (state.readonlyInput) {
        return false;
    }
    if (event) {
        if (event.source === 'wheel' && !state.mousewheel) {
            return false;
        }
        if (event.source === 'key' && !state.arrowkeys) {
            return false;
        }
    }
    return true;
}
function canChangeHours(event, controls) {
    if (!event.step) {
        return false;
    }
    if (event.step > 0 && !controls.canIncrementHours) {
        return false;
    }
    if (event.step < 0 && !controls.canDecrementHours) {
        return false;
    }
    return true;
}
function canChangeMinutes(event, controls) {
    if (!event.step) {
        return false;
    }
    if (event.step > 0 && !controls.canIncrementMinutes) {
        return false;
    }
    if (event.step < 0 && !controls.canDecrementMinutes) {
        return false;
    }
    return true;
}
function canChangeSeconds(event, controls) {
    if (!event.step) {
        return false;
    }
    if (event.step > 0 && !controls.canIncrementSeconds) {
        return false;
    }
    if (event.step < 0 && !controls.canDecrementSeconds) {
        return false;
    }
    return true;
}
function getControlsValue(state) {
    var hourStep = state.hourStep, minuteStep = state.minuteStep, secondsStep = state.secondsStep, readonlyInput = state.readonlyInput, mousewheel = state.mousewheel, arrowkeys = state.arrowkeys, showSpinners = state.showSpinners, showMeridian = state.showMeridian, showSeconds = state.showSeconds, meridians = state.meridians, min = state.min, max = state.max;
    return {
        hourStep: hourStep,
        minuteStep: minuteStep,
        secondsStep: secondsStep,
        readonlyInput: readonlyInput,
        mousewheel: mousewheel,
        arrowkeys: arrowkeys,
        showSpinners: showSpinners,
        showMeridian: showMeridian,
        showSeconds: showSeconds,
        meridians: meridians,
        min: min,
        max: max
    };
}
function timepickerControls(value, state) {
    var min = state.min, max = state.max, hourStep = state.hourStep, minuteStep = state.minuteStep, secondsStep = state.secondsStep, showSeconds = state.showSeconds;
    var res = {
        canIncrementHours: true,
        canIncrementMinutes: true,
        canIncrementSeconds: true,
        canDecrementHours: true,
        canDecrementMinutes: true,
        canDecrementSeconds: true
    };
    if (!value) {
        return res;
    }
    // compare dates
    if (max) {
        var _newHour = changeTime(value, { hour: hourStep });
        res.canIncrementHours = max > _newHour;
        if (!res.canIncrementHours) {
            var _newMinutes = changeTime(value, { minute: minuteStep });
            res.canIncrementMinutes = showSeconds
                ? max > _newMinutes
                : max >= _newMinutes;
        }
        if (!res.canIncrementMinutes) {
            var _newSeconds = changeTime(value, { seconds: secondsStep });
            res.canIncrementSeconds = max >= _newSeconds;
        }
    }
    if (min) {
        var _newHour = changeTime(value, { hour: -hourStep });
        res.canDecrementHours = min < _newHour;
        if (!res.canDecrementHours) {
            var _newMinutes = changeTime(value, { minute: -minuteStep });
            res.canDecrementMinutes = showSeconds
                ? min < _newMinutes
                : min <= _newMinutes;
        }
        if (!res.canDecrementMinutes) {
            var _newSeconds = changeTime(value, { seconds: -secondsStep });
            res.canDecrementSeconds = min <= _newSeconds;
        }
    }
    return res;
}
/** Provides default configuration values for timepicker */
var TimepickerConfig = (function () {
    function TimepickerConfig() {
        /** hours change step */
        this.hourStep = 1;
        /** hours change step */
        this.minuteStep = 5;
        /** seconds changes step */
        this.secondsStep = 10;
        /** if true works in 12H mode and displays AM/PM. If false works in 24H mode and hides AM/PM */
        this.showMeridian = true;
        /** meridian labels based on locale */
        this.meridians = ['AM', 'PM'];
        /** if true hours and minutes fields will be readonly */
        this.readonlyInput = false;
        /** if true scroll inside hours and minutes inputs will change time */
        this.mousewheel = true;
        /** if true up/down arrowkeys inside hours and minutes inputs will change time */
        this.arrowkeys = true;
        /** if true spinner arrows above and below the inputs will be shown */
        this.showSpinners = true;
        /** show seconds in timepicker */
        this.showSeconds = false;
    }
    TimepickerConfig.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */] },
    ];
    /** @nocollapse */
    TimepickerConfig.ctorParameters = function () { return []; };
    return TimepickerConfig;
}());
var initialState = {
    value: null,
    config: new TimepickerConfig(),
    controls: {
        canIncrementHours: true,
        canIncrementMinutes: true,
        canIncrementSeconds: true,
        canDecrementHours: true,
        canDecrementMinutes: true,
        canDecrementSeconds: true
    }
};
function timepickerReducer(state, action) {
    if (state === void 0) {
        state = initialState;
    }
    switch (action.type) {
        case TimepickerActions.WRITE_VALUE: {
            return Object.assign({}, state, { value: action.payload });
        }
        case TimepickerActions.CHANGE_HOURS: {
            if (!canChangeValue(state.config, action.payload) ||
                !canChangeHours(action.payload, state.controls)) {
                return state;
            }
            var _newTime = changeTime(state.value, { hour: action.payload.step });
            return Object.assign({}, state, { value: _newTime });
        }
        case TimepickerActions.CHANGE_MINUTES: {
            if (!canChangeValue(state.config, action.payload) ||
                !canChangeMinutes(action.payload, state.controls)) {
                return state;
            }
            var _newTime = changeTime(state.value, { minute: action.payload.step });
            return Object.assign({}, state, { value: _newTime });
        }
        case TimepickerActions.CHANGE_SECONDS: {
            if (!canChangeValue(state.config, action.payload) ||
                !canChangeSeconds(action.payload, state.controls)) {
                return state;
            }
            var _newTime = changeTime(state.value, {
                seconds: action.payload.step
            });
            return Object.assign({}, state, { value: _newTime });
        }
        case TimepickerActions.SET_TIME_UNIT: {
            if (!canChangeValue(state.config)) {
                return state;
            }
            var _newTime = setTime(state.value, action.payload);
            return Object.assign({}, state, { value: _newTime });
        }
        case TimepickerActions.UPDATE_CONTROLS: {
            var _newControlsState = timepickerControls(state.value, action.payload);
            var _newState = {
                value: state.value,
                config: action.payload,
                controls: _newControlsState
            };
            if (state.config.showMeridian !== _newState.config.showMeridian) {
                _newState.value = new Date(state.value);
            }
            return Object.assign({}, state, _newState);
        }
        default:
            return state;
    }
}
var __extends$5 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TimepickerStore = (function (_super) {
    __extends$5(TimepickerStore, _super);
    function TimepickerStore() {
        var _this = this;
        var _dispatcher = new __WEBPACK_IMPORTED_MODULE_11_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]({
            type: '[mini-ngrx] dispatcher init'
        });
        var state = new MiniState(initialState, _dispatcher, timepickerReducer);
        _this = _super.call(this, _dispatcher, timepickerReducer, state) || this;
        return _this;
    }
    TimepickerStore.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */] },
    ];
    /** @nocollapse */
    TimepickerStore.ctorParameters = function () { return []; };
    return TimepickerStore;
}(MiniStore));
/* tslint:disable:no-forward-ref max-file-line-count */
var TIMEPICKER_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_8__angular_forms__["e" /* NG_VALUE_ACCESSOR */],
    // tslint:disable-next-line
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* forwardRef */])(function () { return TimepickerComponent; }),
    multi: true
};
var TimepickerComponent = (function () {
    function TimepickerComponent(_config, _cd, _store, _timepickerActions) {
        var _this = this;
        this._store = _store;
        this._timepickerActions = _timepickerActions;
        /** emits true if value is a valid date */
        this.isValid = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        // min\max validation for input fields
        this.invalidHours = false;
        this.invalidMinutes = false;
        this.invalidSeconds = false;
        // control value accessor methods
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        Object.assign(this, _config);
        // todo: add unsubscribe
        _store.select(function (state) { return state.value; }).subscribe(function (value) {
            // update UI values if date changed
            _this._renderTime(value);
            _this.onChange(value);
            _this._store.dispatch(_this._timepickerActions.updateControls(getControlsValue(_this)));
        });
        _store.select(function (state) { return state.controls; }).subscribe(function (controlsState) {
            _this.isValid.emit(isInputValid(_this.hours, _this.minutes, _this.seconds, _this.isPM()));
            Object.assign(_this, controlsState);
            _cd.markForCheck();
        });
    }
    Object.defineProperty(TimepickerComponent.prototype, "isSpinnersVisible", {
        get: function () {
            return this.showSpinners && !this.readonlyInput;
        },
        enumerable: true,
        configurable: true
    });
    TimepickerComponent.prototype.isPM = function () {
        return this.showMeridian && this.meridian === this.meridians[1];
    };
    TimepickerComponent.prototype.prevDef = function ($event) {
        $event.preventDefault();
    };
    TimepickerComponent.prototype.wheelSign = function ($event) {
        return Math.sign($event.deltaY) * -1;
    };
    TimepickerComponent.prototype.ngOnChanges = function (changes) {
        this._store.dispatch(this._timepickerActions.updateControls(getControlsValue(this)));
    };
    TimepickerComponent.prototype.changeHours = function (step, source) {
        if (source === void 0) {
            source = '';
        }
        this._store.dispatch(this._timepickerActions.changeHours({ step: step, source: source }));
    };
    TimepickerComponent.prototype.changeMinutes = function (step, source) {
        if (source === void 0) {
            source = '';
        }
        this._store.dispatch(this._timepickerActions.changeMinutes({ step: step, source: source }));
    };
    TimepickerComponent.prototype.changeSeconds = function (step, source) {
        if (source === void 0) {
            source = '';
        }
        this._store.dispatch(this._timepickerActions.changeSeconds({ step: step, source: source }));
    };
    TimepickerComponent.prototype.updateHours = function (hours) {
        this.hours = hours;
        this._updateTime();
    };
    TimepickerComponent.prototype.updateMinutes = function (minutes) {
        this.minutes = minutes;
        this._updateTime();
    };
    TimepickerComponent.prototype.updateSeconds = function (seconds) {
        this.seconds = seconds;
        this._updateTime();
    };
    TimepickerComponent.prototype._updateTime = function () {
        var _seconds = this.showSeconds ? this.seconds : void 0;
        if (!isInputValid(this.hours, this.minutes, _seconds, this.isPM())) {
            this.isValid.emit(false);
            this.onChange(null);
            return;
        }
        this._store.dispatch(this._timepickerActions.setTime({
            hour: this.hours,
            minute: this.minutes,
            seconds: this.seconds,
            isPM: this.isPM()
        }));
    };
    TimepickerComponent.prototype.toggleMeridian = function () {
        if (!this.showMeridian || this.readonlyInput) {
            return;
        }
        var _hoursPerDayHalf = 12;
        this._store.dispatch(this._timepickerActions.changeHours({
            step: _hoursPerDayHalf,
            source: ''
        }));
    };
    /**
     * Write a new value to the element.
     */
    TimepickerComponent.prototype.writeValue = function (obj) {
        if (isValidDate(obj)) {
            this._store.dispatch(this._timepickerActions.writeValue(parseTime(obj)));
        }
        else if (obj == null) {
            this._store.dispatch(this._timepickerActions.writeValue(null));
        }
    };
    /**
     * Set the function to be called when the control receives a change event.
     */
    TimepickerComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    /**
     * Set the function to be called when the control receives a touch event.
     */
    TimepickerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    /**
     * This function is called when the control status changes to or from "DISABLED".
     * Depending on the value, it will enable or disable the appropriate DOM element.
     *
     * @param isDisabled
     */
    TimepickerComponent.prototype.setDisabledState = function (isDisabled) {
        this.readonlyInput = isDisabled;
    };
    TimepickerComponent.prototype._renderTime = function (value) {
        if (!isValidDate(value)) {
            this.hours = '';
            this.minutes = '';
            this.seconds = '';
            this.meridian = this.meridians[0];
            return;
        }
        var _value = parseTime(value);
        var _hoursPerDayHalf = 12;
        var _hours = _value.getHours();
        if (this.showMeridian) {
            this.meridian = this.meridians[_hours >= _hoursPerDayHalf ? 1 : 0];
            _hours = _hours % _hoursPerDayHalf;
            // should be 12 PM, not 00 PM
            if (_hours === 0) {
                _hours = _hoursPerDayHalf;
            }
        }
        this.hours = padNumber(_hours);
        this.minutes = padNumber(_value.getMinutes());
        this.seconds = padNumber(_value.getUTCSeconds());
    };
    TimepickerComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                    selector: 'timepicker',
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
                    providers: [TIMEPICKER_CONTROL_VALUE_ACCESSOR, TimepickerStore],
                    template: "<table> <tbody> <tr class=\"text-center\" [class.hidden]=\"!isSpinnersVisible\"> <!-- increment hours button--> <td> <a class=\"btn btn-link\" [class.disabled]=\"!canIncrementHours\" (click)=\"changeHours(hourStep)\" ><span class=\"bs-chevron bs-chevron-up\"></span></a> </td> <!-- divider --> <td>&nbsp;&nbsp;&nbsp;</td> <!-- increment minutes button --> <td> <a class=\"btn btn-link\" [class.disabled]=\"!canIncrementMinutes\" (click)=\"changeMinutes(minuteStep)\" ><span class=\"bs-chevron bs-chevron-up\"></span></a> </td> <!-- divider --> <td *ngIf=\"showSeconds\">&nbsp;</td> <!-- increment seconds button --> <td *ngIf=\"showSeconds\"> <a class=\"btn btn-link\" [class.disabled]=\"!canIncrementSeconds\" (click)=\"changeSeconds(secondsStep)\"> <span class=\"bs-chevron bs-chevron-up\"></span> </a> </td> <!-- space between --> <td>&nbsp;&nbsp;&nbsp;</td> <!-- meridian placeholder--> <td *ngIf=\"showMeridian\"></td> </tr> <tr> <!-- hours --> <td class=\"form-group\" [class.has-error]=\"invalidHours\"> <input type=\"text\" class=\"form-control text-center bs-timepicker-field\" placeholder=\"HH\" maxlength=\"2\" [readonly]=\"readonlyInput\" [value]=\"hours\" (wheel)=\"prevDef($event);changeHours(hourStep * wheelSign($event), 'wheel')\" (keydown.ArrowUp)=\"changeHours(hourStep, 'key')\" (keydown.ArrowDown)=\"changeHours(-hourStep, 'key')\" (change)=\"updateHours($event.target.value)\"></td> <!-- divider --> <td>&nbsp;:&nbsp;</td> <!-- minutes --> <td class=\"form-group\" [class.has-error]=\"invalidMinutes\"> <input type=\"text\" class=\"form-control text-center bs-timepicker-field\" placeholder=\"MM\" maxlength=\"2\" [readonly]=\"readonlyInput\" [value]=\"minutes\" (wheel)=\"prevDef($event);changeMinutes(minuteStep * wheelSign($event), 'wheel')\" (keydown.ArrowUp)=\"changeMinutes(minuteStep, 'key')\" (keydown.ArrowDown)=\"changeMinutes(-minuteStep, 'key')\" (change)=\"updateMinutes($event.target.value)\"> </td> <!-- divider --> <td *ngIf=\"showSeconds\">&nbsp;:&nbsp;</td> <!-- seconds --> <td class=\"form-group\" *ngIf=\"showSeconds\" [class.has-error]=\"invalidSeconds\"> <input type=\"text\" class=\"form-control text-center bs-timepicker-field\" placeholder=\"SS\" maxlength=\"2\" [readonly]=\"readonlyInput\" [value]=\"seconds\" (wheel)=\"prevDef($event);changeSeconds(secondsStep * wheelSign($event), 'wheel')\" (keydown.ArrowUp)=\"changeSeconds(secondsStep, 'key')\" (keydown.ArrowDown)=\"changeSeconds(-secondsStep, 'key')\" (change)=\"updateSeconds($event.target.value)\"> </td> <!-- space between --> <td>&nbsp;&nbsp;&nbsp;</td> <!-- meridian --> <td *ngIf=\"showMeridian\"> <button type=\"button\" class=\"btn btn-default text-center\" [disabled]=\"readonlyInput\" [class.disabled]=\"readonlyInput\" (click)=\"toggleMeridian()\" >{{ meridian }} </button> </td> </tr> <tr class=\"text-center\" [class.hidden]=\"!isSpinnersVisible\"> <!-- decrement hours button--> <td> <a class=\"btn btn-link\" [class.disabled]=\"!canDecrementHours\" (click)=\"changeHours(-hourStep)\"> <span class=\"bs-chevron bs-chevron-down\"></span> </a> </td> <!-- divider --> <td>&nbsp;&nbsp;&nbsp;</td> <!-- decrement minutes button--> <td> <a class=\"btn btn-link\" [class.disabled]=\"!canDecrementMinutes\" (click)=\"changeMinutes(-minuteStep)\"> <span class=\"bs-chevron bs-chevron-down\"></span> </a> </td> <!-- divider --> <td *ngIf=\"showSeconds\">&nbsp;</td> <!-- decrement seconds button--> <td *ngIf=\"showSeconds\"> <a class=\"btn btn-link\" [class.disabled]=\"!canDecrementSeconds\" (click)=\"changeSeconds(-secondsStep)\"> <span class=\"bs-chevron bs-chevron-down\"></span> </a> </td> <!-- space between --> <td>&nbsp;&nbsp;&nbsp;</td> <!-- meridian placeholder--> <td *ngIf=\"showMeridian\"></td> </tr> </tbody> </table> ",
                    styles: ["\n    .bs-chevron{\n      border-style: solid;\n      display: block;\n      width: 9px;\n      height: 9px;\n      position: relative;\n      border-width: 3px 0px 0 3px;\n    }\n    .bs-chevron-up{\n      -webkit-transform: rotate(45deg);\n      transform: rotate(45deg);\n      top: 2px;\n    }\n    .bs-chevron-down{\n      -webkit-transform: rotate(-135deg);\n      transform: rotate(-135deg);\n      top: -2px;\n    }\n    .bs-timepicker-field{\n      width: 50px;\n    }\n  "],
                    encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewEncapsulation */].None
                },] },
    ];
    /** @nocollapse */
    TimepickerComponent.ctorParameters = function () {
        return [
            { type: TimepickerConfig, },
            { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */], },
            { type: TimepickerStore, },
            { type: TimepickerActions, },
        ];
    };
    TimepickerComponent.propDecorators = {
        'hourStep': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'minuteStep': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'secondsStep': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'readonlyInput': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'mousewheel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'arrowkeys': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'showSpinners': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'showMeridian': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'showSeconds': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'meridians': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'min': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'max': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'isValid': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
    };
    return TimepickerComponent;
}());
/** Default values provider for tooltip */
var TooltipConfig = (function () {
    function TooltipConfig() {
        /** tooltip placement, supported positions: 'top', 'bottom', 'left', 'right' */
        this.placement = 'top';
        /** array of event names which triggers tooltip opening */
        this.triggers = 'hover focus';
    }
    TooltipConfig.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */] },
    ];
    /** @nocollapse */
    TooltipConfig.ctorParameters = function () { return []; };
    return TooltipConfig;
}());
var TooltipContainerComponent = (function () {
    function TooltipContainerComponent(config) {
        Object.assign(this, config);
    }
    Object.defineProperty(TooltipContainerComponent.prototype, "isBs3", {
        get: function () {
            return isBs3();
        },
        enumerable: true,
        configurable: true
    });
    TooltipContainerComponent.prototype.ngAfterViewInit = function () {
        this.classMap = { in: false, fade: false };
        this.classMap[this.placement] = true;
        this.classMap["tooltip-" + this.placement] = true;
        this.classMap.in = true;
        if (this.animation) {
            this.classMap.fade = true;
        }
        if (this.containerClass) {
            this.classMap[this.containerClass] = true;
        }
    };
    TooltipContainerComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                    selector: 'bs-tooltip-container',
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
                    // tslint:disable-next-line
                    host: {
                        '[class]': '"tooltip in tooltip-" + placement + " " + "bs-tooltip-" + placement + " " + placement + " " + containerClass',
                        '[class.show]': '!isBs3',
                        role: 'tooltip'
                    },
                    styles: [
                        "\n    :host.tooltip {\n      display: block;\n    }\n    :host.bs-tooltip-top .arrow, :host.bs-tooltip-bottom .arrow {\n      left: calc(50% - 2.5px);\n    }\n    :host.bs-tooltip-left .arrow, :host.bs-tooltip-right .arrow {\n      top: calc(50% - 2.5px);\n    }\n  "
                    ],
                    template: "\n    <div class=\"tooltip-arrow arrow\"></div>\n    <div class=\"tooltip-inner\"><ng-content></ng-content></div>\n    "
                },] },
    ];
    /** @nocollapse */
    TooltipContainerComponent.ctorParameters = function () {
        return [
            { type: TooltipConfig, },
        ];
    };
    return TooltipContainerComponent;
}());
var __decorate$1 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
// tslint:disable:deprecation
var TooltipDirective = (function () {
    function TooltipDirective(_viewContainerRef, _renderer, _elementRef, cis, config) {
        /** Fired when tooltip content changes */
        this.tooltipChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        /**
         * Css class for tooltip container
         */
        this.containerClass = '';
        /** @deprecated - removed, will be added to configuration */
        this._animation = true;
        /** @deprecated */
        this._delay = 0;
        /** @deprecated */
        this._fadeDuration = 150;
        /** @deprecated */
        this.tooltipStateChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this._tooltip = cis
            .createLoader(_elementRef, _viewContainerRef, _renderer)
            .provide({ provide: TooltipConfig, useValue: config });
        Object.assign(this, config);
        this.onShown = this._tooltip.onShown;
        this.onHidden = this._tooltip.onHidden;
    }
    Object.defineProperty(TooltipDirective.prototype, "isOpen", {
        /**
         * Returns whether or not the tooltip is currently being shown
         */
        get: function () {
            return this._tooltip.isShown;
        },
        set: function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "htmlContent", {
        /** @deprecated - please use `tooltip` instead */
        set: function (value) {
            warnOnce('tooltipHtml was deprecated, please use `tooltip` instead');
            this.tooltip = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_placement", {
        /** @deprecated - please use `placement` instead */
        set: function (value) {
            warnOnce('tooltipPlacement was deprecated, please use `placement` instead');
            this.placement = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_isOpen", {
        get: function () {
            warnOnce('tooltipIsOpen was deprecated, please use `isOpen` instead');
            return this.isOpen;
        },
        /** @deprecated - please use `isOpen` instead*/
        set: function (value) {
            warnOnce('tooltipIsOpen was deprecated, please use `isOpen` instead');
            this.isOpen = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_enable", {
        get: function () {
            warnOnce('tooltipEnable was deprecated, please use `isDisabled` instead');
            return this.isDisabled;
        },
        /** @deprecated - please use `isDisabled` instead */
        set: function (value) {
            warnOnce('tooltipEnable was deprecated, please use `isDisabled` instead');
            this.isDisabled = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_appendToBody", {
        get: function () {
            warnOnce('tooltipAppendToBody was deprecated, please use `container="body"` instead');
            return this.container === 'body';
        },
        /** @deprecated - please use `container="body"` instead */
        set: function (value) {
            warnOnce('tooltipAppendToBody was deprecated, please use `container="body"` instead');
            this.container = value ? 'body' : this.container;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_popupClass", {
        /** @deprecated - will replaced with customClass */
        set: function (value) {
            warnOnce('tooltipClass deprecated');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_tooltipContext", {
        /** @deprecated - removed */
        set: function (value) {
            warnOnce('tooltipContext deprecated');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_tooltipTrigger", {
        /** @deprecated -  please use `triggers` instead */
        get: function () {
            warnOnce('tooltipTrigger was deprecated, please use `triggers` instead');
            return this.triggers;
        },
        set: function (value) {
            warnOnce('tooltipTrigger was deprecated, please use `triggers` instead');
            this.triggers = (value || '').toString();
        },
        enumerable: true,
        configurable: true
    });
    TooltipDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._tooltip.listen({
            triggers: this.triggers,
            show: function () { return _this.show(); }
        });
        this.tooltipChange.subscribe(function (value) {
            if (!value) {
                _this._tooltip.hide();
            }
        });
    };
    /**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    TooltipDirective.prototype.toggle = function () {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    };
    /**
     * Opens an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    TooltipDirective.prototype.show = function () {
        var _this = this;
        if (this.isOpen ||
            this.isDisabled ||
            this._delayTimeoutId ||
            !this.tooltip) {
            return;
        }
        var showTooltip = function () {
            if (_this._delayTimeoutId) {
                _this._delayTimeoutId = undefined;
            }
            _this._tooltip
                .attach(TooltipContainerComponent)
                .to(_this.container)
                .position({ attachment: _this.placement })
                .show({
                content: _this.tooltip,
                placement: _this.placement,
                containerClass: _this.containerClass
            });
        };
        if (this._delay) {
            this._delayTimeoutId = setTimeout(function () {
                showTooltip();
            }, this._delay);
        }
        else {
            showTooltip();
        }
    };
    /**
     * Closes an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    TooltipDirective.prototype.hide = function () {
        var _this = this;
        if (this._delayTimeoutId) {
            clearTimeout(this._delayTimeoutId);
            this._delayTimeoutId = undefined;
        }
        if (!this._tooltip.isShown) {
            return;
        }
        this._tooltip.instance.classMap.in = false;
        setTimeout(function () {
            _this._tooltip.hide();
        }, this._fadeDuration);
    };
    TooltipDirective.prototype.ngOnDestroy = function () {
        this._tooltip.dispose();
    };
    TooltipDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{
                    selector: '[tooltip], [tooltipHtml]',
                    exportAs: 'bs-tooltip'
                },] },
    ];
    /** @nocollapse */
    TooltipDirective.ctorParameters = function () {
        return [
            { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewContainerRef */], },
            { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Renderer2 */], },
            { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
            { type: ComponentLoaderFactory, },
            { type: TooltipConfig, },
        ];
    };
    TooltipDirective.propDecorators = {
        'tooltip': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'tooltipChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
        'placement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'triggers': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'container': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'isOpen': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'isDisabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'containerClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'onShown': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
        'onHidden': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
        'htmlContent': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */], args: ['tooltipHtml',] },],
        '_placement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */], args: ['tooltipPlacement',] },],
        '_isOpen': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */], args: ['tooltipIsOpen',] },],
        '_enable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */], args: ['tooltipEnable',] },],
        '_appendToBody': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */], args: ['tooltipAppendToBody',] },],
        '_animation': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */], args: ['tooltipAnimation',] },],
        '_popupClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */], args: ['tooltipClass',] },],
        '_tooltipContext': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */], args: ['tooltipContext',] },],
        '_delay': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */], args: ['tooltipPopupDelay',] },],
        '_fadeDuration': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */], args: ['tooltipFadeDuration',] },],
        '_tooltipTrigger': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */], args: ['tooltipTrigger',] },],
        'tooltipStateChanged': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
    };
    __decorate$1([
        OnChange(),
        __metadata$1("design:type", Object)
    ], TooltipDirective.prototype, "tooltip", void 0);
    return TooltipDirective;
}());
/* tslint:disable:max-file-line-count */
var latinMap = {
    Á: 'A',
    Ă: 'A',
    Ắ: 'A',
    Ặ: 'A',
    Ằ: 'A',
    Ẳ: 'A',
    Ẵ: 'A',
    Ǎ: 'A',
    Â: 'A',
    Ấ: 'A',
    Ậ: 'A',
    Ầ: 'A',
    Ẩ: 'A',
    Ẫ: 'A',
    Ä: 'A',
    Ǟ: 'A',
    Ȧ: 'A',
    Ǡ: 'A',
    Ạ: 'A',
    Ȁ: 'A',
    À: 'A',
    Ả: 'A',
    Ȃ: 'A',
    Ā: 'A',
    Ą: 'A',
    Å: 'A',
    Ǻ: 'A',
    Ḁ: 'A',
    Ⱥ: 'A',
    Ã: 'A',
    Ꜳ: 'AA',
    Æ: 'AE',
    Ǽ: 'AE',
    Ǣ: 'AE',
    Ꜵ: 'AO',
    Ꜷ: 'AU',
    Ꜹ: 'AV',
    Ꜻ: 'AV',
    Ꜽ: 'AY',
    Ḃ: 'B',
    Ḅ: 'B',
    Ɓ: 'B',
    Ḇ: 'B',
    Ƀ: 'B',
    Ƃ: 'B',
    Ć: 'C',
    Č: 'C',
    Ç: 'C',
    Ḉ: 'C',
    Ĉ: 'C',
    Ċ: 'C',
    Ƈ: 'C',
    Ȼ: 'C',
    Ď: 'D',
    Ḑ: 'D',
    Ḓ: 'D',
    Ḋ: 'D',
    Ḍ: 'D',
    Ɗ: 'D',
    Ḏ: 'D',
    ǲ: 'D',
    ǅ: 'D',
    Đ: 'D',
    Ƌ: 'D',
    Ǳ: 'DZ',
    Ǆ: 'DZ',
    É: 'E',
    Ĕ: 'E',
    Ě: 'E',
    Ȩ: 'E',
    Ḝ: 'E',
    Ê: 'E',
    Ế: 'E',
    Ệ: 'E',
    Ề: 'E',
    Ể: 'E',
    Ễ: 'E',
    Ḙ: 'E',
    Ë: 'E',
    Ė: 'E',
    Ẹ: 'E',
    Ȅ: 'E',
    È: 'E',
    Ẻ: 'E',
    Ȇ: 'E',
    Ē: 'E',
    Ḗ: 'E',
    Ḕ: 'E',
    Ę: 'E',
    Ɇ: 'E',
    Ẽ: 'E',
    Ḛ: 'E',
    Ꝫ: 'ET',
    Ḟ: 'F',
    Ƒ: 'F',
    Ǵ: 'G',
    Ğ: 'G',
    Ǧ: 'G',
    Ģ: 'G',
    Ĝ: 'G',
    Ġ: 'G',
    Ɠ: 'G',
    Ḡ: 'G',
    Ǥ: 'G',
    Ḫ: 'H',
    Ȟ: 'H',
    Ḩ: 'H',
    Ĥ: 'H',
    Ⱨ: 'H',
    Ḧ: 'H',
    Ḣ: 'H',
    Ḥ: 'H',
    Ħ: 'H',
    Í: 'I',
    Ĭ: 'I',
    Ǐ: 'I',
    Î: 'I',
    Ï: 'I',
    Ḯ: 'I',
    İ: 'I',
    Ị: 'I',
    Ȉ: 'I',
    Ì: 'I',
    Ỉ: 'I',
    Ȋ: 'I',
    Ī: 'I',
    Į: 'I',
    Ɨ: 'I',
    Ĩ: 'I',
    Ḭ: 'I',
    Ꝺ: 'D',
    Ꝼ: 'F',
    Ᵹ: 'G',
    Ꞃ: 'R',
    Ꞅ: 'S',
    Ꞇ: 'T',
    Ꝭ: 'IS',
    Ĵ: 'J',
    Ɉ: 'J',
    Ḱ: 'K',
    Ǩ: 'K',
    Ķ: 'K',
    Ⱪ: 'K',
    Ꝃ: 'K',
    Ḳ: 'K',
    Ƙ: 'K',
    Ḵ: 'K',
    Ꝁ: 'K',
    Ꝅ: 'K',
    Ĺ: 'L',
    Ƚ: 'L',
    Ľ: 'L',
    Ļ: 'L',
    Ḽ: 'L',
    Ḷ: 'L',
    Ḹ: 'L',
    Ⱡ: 'L',
    Ꝉ: 'L',
    Ḻ: 'L',
    Ŀ: 'L',
    Ɫ: 'L',
    ǈ: 'L',
    Ł: 'L',
    Ǉ: 'LJ',
    Ḿ: 'M',
    Ṁ: 'M',
    Ṃ: 'M',
    Ɱ: 'M',
    Ń: 'N',
    Ň: 'N',
    Ņ: 'N',
    Ṋ: 'N',
    Ṅ: 'N',
    Ṇ: 'N',
    Ǹ: 'N',
    Ɲ: 'N',
    Ṉ: 'N',
    Ƞ: 'N',
    ǋ: 'N',
    Ñ: 'N',
    Ǌ: 'NJ',
    Ó: 'O',
    Ŏ: 'O',
    Ǒ: 'O',
    Ô: 'O',
    Ố: 'O',
    Ộ: 'O',
    Ồ: 'O',
    Ổ: 'O',
    Ỗ: 'O',
    Ö: 'O',
    Ȫ: 'O',
    Ȯ: 'O',
    Ȱ: 'O',
    Ọ: 'O',
    Ő: 'O',
    Ȍ: 'O',
    Ò: 'O',
    Ỏ: 'O',
    Ơ: 'O',
    Ớ: 'O',
    Ợ: 'O',
    Ờ: 'O',
    Ở: 'O',
    Ỡ: 'O',
    Ȏ: 'O',
    Ꝋ: 'O',
    Ꝍ: 'O',
    Ō: 'O',
    Ṓ: 'O',
    Ṑ: 'O',
    Ɵ: 'O',
    Ǫ: 'O',
    Ǭ: 'O',
    Ø: 'O',
    Ǿ: 'O',
    Õ: 'O',
    Ṍ: 'O',
    Ṏ: 'O',
    Ȭ: 'O',
    Ƣ: 'OI',
    Ꝏ: 'OO',
    Ɛ: 'E',
    Ɔ: 'O',
    Ȣ: 'OU',
    Ṕ: 'P',
    Ṗ: 'P',
    Ꝓ: 'P',
    Ƥ: 'P',
    Ꝕ: 'P',
    Ᵽ: 'P',
    Ꝑ: 'P',
    Ꝙ: 'Q',
    Ꝗ: 'Q',
    Ŕ: 'R',
    Ř: 'R',
    Ŗ: 'R',
    Ṙ: 'R',
    Ṛ: 'R',
    Ṝ: 'R',
    Ȑ: 'R',
    Ȓ: 'R',
    Ṟ: 'R',
    Ɍ: 'R',
    Ɽ: 'R',
    Ꜿ: 'C',
    Ǝ: 'E',
    Ś: 'S',
    Ṥ: 'S',
    Š: 'S',
    Ṧ: 'S',
    Ş: 'S',
    Ŝ: 'S',
    Ș: 'S',
    Ṡ: 'S',
    Ṣ: 'S',
    Ṩ: 'S',
    Ť: 'T',
    Ţ: 'T',
    Ṱ: 'T',
    Ț: 'T',
    Ⱦ: 'T',
    Ṫ: 'T',
    Ṭ: 'T',
    Ƭ: 'T',
    Ṯ: 'T',
    Ʈ: 'T',
    Ŧ: 'T',
    Ɐ: 'A',
    Ꞁ: 'L',
    Ɯ: 'M',
    Ʌ: 'V',
    Ꜩ: 'TZ',
    Ú: 'U',
    Ŭ: 'U',
    Ǔ: 'U',
    Û: 'U',
    Ṷ: 'U',
    Ü: 'U',
    Ǘ: 'U',
    Ǚ: 'U',
    Ǜ: 'U',
    Ǖ: 'U',
    Ṳ: 'U',
    Ụ: 'U',
    Ű: 'U',
    Ȕ: 'U',
    Ù: 'U',
    Ủ: 'U',
    Ư: 'U',
    Ứ: 'U',
    Ự: 'U',
    Ừ: 'U',
    Ử: 'U',
    Ữ: 'U',
    Ȗ: 'U',
    Ū: 'U',
    Ṻ: 'U',
    Ų: 'U',
    Ů: 'U',
    Ũ: 'U',
    Ṹ: 'U',
    Ṵ: 'U',
    Ꝟ: 'V',
    Ṿ: 'V',
    Ʋ: 'V',
    Ṽ: 'V',
    Ꝡ: 'VY',
    Ẃ: 'W',
    Ŵ: 'W',
    Ẅ: 'W',
    Ẇ: 'W',
    Ẉ: 'W',
    Ẁ: 'W',
    Ⱳ: 'W',
    Ẍ: 'X',
    Ẋ: 'X',
    Ý: 'Y',
    Ŷ: 'Y',
    Ÿ: 'Y',
    Ẏ: 'Y',
    Ỵ: 'Y',
    Ỳ: 'Y',
    Ƴ: 'Y',
    Ỷ: 'Y',
    Ỿ: 'Y',
    Ȳ: 'Y',
    Ɏ: 'Y',
    Ỹ: 'Y',
    Ź: 'Z',
    Ž: 'Z',
    Ẑ: 'Z',
    Ⱬ: 'Z',
    Ż: 'Z',
    Ẓ: 'Z',
    Ȥ: 'Z',
    Ẕ: 'Z',
    Ƶ: 'Z',
    Ĳ: 'IJ',
    Œ: 'OE',
    ᴀ: 'A',
    ᴁ: 'AE',
    ʙ: 'B',
    ᴃ: 'B',
    ᴄ: 'C',
    ᴅ: 'D',
    ᴇ: 'E',
    ꜰ: 'F',
    ɢ: 'G',
    ʛ: 'G',
    ʜ: 'H',
    ɪ: 'I',
    ʁ: 'R',
    ᴊ: 'J',
    ᴋ: 'K',
    ʟ: 'L',
    ᴌ: 'L',
    ᴍ: 'M',
    ɴ: 'N',
    ᴏ: 'O',
    ɶ: 'OE',
    ᴐ: 'O',
    ᴕ: 'OU',
    ᴘ: 'P',
    ʀ: 'R',
    ᴎ: 'N',
    ᴙ: 'R',
    ꜱ: 'S',
    ᴛ: 'T',
    ⱻ: 'E',
    ᴚ: 'R',
    ᴜ: 'U',
    ᴠ: 'V',
    ᴡ: 'W',
    ʏ: 'Y',
    ᴢ: 'Z',
    á: 'a',
    ă: 'a',
    ắ: 'a',
    ặ: 'a',
    ằ: 'a',
    ẳ: 'a',
    ẵ: 'a',
    ǎ: 'a',
    â: 'a',
    ấ: 'a',
    ậ: 'a',
    ầ: 'a',
    ẩ: 'a',
    ẫ: 'a',
    ä: 'a',
    ǟ: 'a',
    ȧ: 'a',
    ǡ: 'a',
    ạ: 'a',
    ȁ: 'a',
    à: 'a',
    ả: 'a',
    ȃ: 'a',
    ā: 'a',
    ą: 'a',
    ᶏ: 'a',
    ẚ: 'a',
    å: 'a',
    ǻ: 'a',
    ḁ: 'a',
    ⱥ: 'a',
    ã: 'a',
    ꜳ: 'aa',
    æ: 'ae',
    ǽ: 'ae',
    ǣ: 'ae',
    ꜵ: 'ao',
    ꜷ: 'au',
    ꜹ: 'av',
    ꜻ: 'av',
    ꜽ: 'ay',
    ḃ: 'b',
    ḅ: 'b',
    ɓ: 'b',
    ḇ: 'b',
    ᵬ: 'b',
    ᶀ: 'b',
    ƀ: 'b',
    ƃ: 'b',
    ɵ: 'o',
    ć: 'c',
    č: 'c',
    ç: 'c',
    ḉ: 'c',
    ĉ: 'c',
    ɕ: 'c',
    ċ: 'c',
    ƈ: 'c',
    ȼ: 'c',
    ď: 'd',
    ḑ: 'd',
    ḓ: 'd',
    ȡ: 'd',
    ḋ: 'd',
    ḍ: 'd',
    ɗ: 'd',
    ᶑ: 'd',
    ḏ: 'd',
    ᵭ: 'd',
    ᶁ: 'd',
    đ: 'd',
    ɖ: 'd',
    ƌ: 'd',
    ı: 'i',
    ȷ: 'j',
    ɟ: 'j',
    ʄ: 'j',
    ǳ: 'dz',
    ǆ: 'dz',
    é: 'e',
    ĕ: 'e',
    ě: 'e',
    ȩ: 'e',
    ḝ: 'e',
    ê: 'e',
    ế: 'e',
    ệ: 'e',
    ề: 'e',
    ể: 'e',
    ễ: 'e',
    ḙ: 'e',
    ë: 'e',
    ė: 'e',
    ẹ: 'e',
    ȅ: 'e',
    è: 'e',
    ẻ: 'e',
    ȇ: 'e',
    ē: 'e',
    ḗ: 'e',
    ḕ: 'e',
    ⱸ: 'e',
    ę: 'e',
    ᶒ: 'e',
    ɇ: 'e',
    ẽ: 'e',
    ḛ: 'e',
    ꝫ: 'et',
    ḟ: 'f',
    ƒ: 'f',
    ᵮ: 'f',
    ᶂ: 'f',
    ǵ: 'g',
    ğ: 'g',
    ǧ: 'g',
    ģ: 'g',
    ĝ: 'g',
    ġ: 'g',
    ɠ: 'g',
    ḡ: 'g',
    ᶃ: 'g',
    ǥ: 'g',
    ḫ: 'h',
    ȟ: 'h',
    ḩ: 'h',
    ĥ: 'h',
    ⱨ: 'h',
    ḧ: 'h',
    ḣ: 'h',
    ḥ: 'h',
    ɦ: 'h',
    ẖ: 'h',
    ħ: 'h',
    ƕ: 'hv',
    í: 'i',
    ĭ: 'i',
    ǐ: 'i',
    î: 'i',
    ï: 'i',
    ḯ: 'i',
    ị: 'i',
    ȉ: 'i',
    ì: 'i',
    ỉ: 'i',
    ȋ: 'i',
    ī: 'i',
    į: 'i',
    ᶖ: 'i',
    ɨ: 'i',
    ĩ: 'i',
    ḭ: 'i',
    ꝺ: 'd',
    ꝼ: 'f',
    ᵹ: 'g',
    ꞃ: 'r',
    ꞅ: 's',
    ꞇ: 't',
    ꝭ: 'is',
    ǰ: 'j',
    ĵ: 'j',
    ʝ: 'j',
    ɉ: 'j',
    ḱ: 'k',
    ǩ: 'k',
    ķ: 'k',
    ⱪ: 'k',
    ꝃ: 'k',
    ḳ: 'k',
    ƙ: 'k',
    ḵ: 'k',
    ᶄ: 'k',
    ꝁ: 'k',
    ꝅ: 'k',
    ĺ: 'l',
    ƚ: 'l',
    ɬ: 'l',
    ľ: 'l',
    ļ: 'l',
    ḽ: 'l',
    ȴ: 'l',
    ḷ: 'l',
    ḹ: 'l',
    ⱡ: 'l',
    ꝉ: 'l',
    ḻ: 'l',
    ŀ: 'l',
    ɫ: 'l',
    ᶅ: 'l',
    ɭ: 'l',
    ł: 'l',
    ǉ: 'lj',
    ſ: 's',
    ẜ: 's',
    ẛ: 's',
    ẝ: 's',
    ḿ: 'm',
    ṁ: 'm',
    ṃ: 'm',
    ɱ: 'm',
    ᵯ: 'm',
    ᶆ: 'm',
    ń: 'n',
    ň: 'n',
    ņ: 'n',
    ṋ: 'n',
    ȵ: 'n',
    ṅ: 'n',
    ṇ: 'n',
    ǹ: 'n',
    ɲ: 'n',
    ṉ: 'n',
    ƞ: 'n',
    ᵰ: 'n',
    ᶇ: 'n',
    ɳ: 'n',
    ñ: 'n',
    ǌ: 'nj',
    ó: 'o',
    ŏ: 'o',
    ǒ: 'o',
    ô: 'o',
    ố: 'o',
    ộ: 'o',
    ồ: 'o',
    ổ: 'o',
    ỗ: 'o',
    ö: 'o',
    ȫ: 'o',
    ȯ: 'o',
    ȱ: 'o',
    ọ: 'o',
    ő: 'o',
    ȍ: 'o',
    ò: 'o',
    ỏ: 'o',
    ơ: 'o',
    ớ: 'o',
    ợ: 'o',
    ờ: 'o',
    ở: 'o',
    ỡ: 'o',
    ȏ: 'o',
    ꝋ: 'o',
    ꝍ: 'o',
    ⱺ: 'o',
    ō: 'o',
    ṓ: 'o',
    ṑ: 'o',
    ǫ: 'o',
    ǭ: 'o',
    ø: 'o',
    ǿ: 'o',
    õ: 'o',
    ṍ: 'o',
    ṏ: 'o',
    ȭ: 'o',
    ƣ: 'oi',
    ꝏ: 'oo',
    ɛ: 'e',
    ᶓ: 'e',
    ɔ: 'o',
    ᶗ: 'o',
    ȣ: 'ou',
    ṕ: 'p',
    ṗ: 'p',
    ꝓ: 'p',
    ƥ: 'p',
    ᵱ: 'p',
    ᶈ: 'p',
    ꝕ: 'p',
    ᵽ: 'p',
    ꝑ: 'p',
    ꝙ: 'q',
    ʠ: 'q',
    ɋ: 'q',
    ꝗ: 'q',
    ŕ: 'r',
    ř: 'r',
    ŗ: 'r',
    ṙ: 'r',
    ṛ: 'r',
    ṝ: 'r',
    ȑ: 'r',
    ɾ: 'r',
    ᵳ: 'r',
    ȓ: 'r',
    ṟ: 'r',
    ɼ: 'r',
    ᵲ: 'r',
    ᶉ: 'r',
    ɍ: 'r',
    ɽ: 'r',
    ↄ: 'c',
    ꜿ: 'c',
    ɘ: 'e',
    ɿ: 'r',
    ś: 's',
    ṥ: 's',
    š: 's',
    ṧ: 's',
    ş: 's',
    ŝ: 's',
    ș: 's',
    ṡ: 's',
    ṣ: 's',
    ṩ: 's',
    ʂ: 's',
    ᵴ: 's',
    ᶊ: 's',
    ȿ: 's',
    ɡ: 'g',
    ᴑ: 'o',
    ᴓ: 'o',
    ᴝ: 'u',
    ť: 't',
    ţ: 't',
    ṱ: 't',
    ț: 't',
    ȶ: 't',
    ẗ: 't',
    ⱦ: 't',
    ṫ: 't',
    ṭ: 't',
    ƭ: 't',
    ṯ: 't',
    ᵵ: 't',
    ƫ: 't',
    ʈ: 't',
    ŧ: 't',
    ᵺ: 'th',
    ɐ: 'a',
    ᴂ: 'ae',
    ǝ: 'e',
    ᵷ: 'g',
    ɥ: 'h',
    ʮ: 'h',
    ʯ: 'h',
    ᴉ: 'i',
    ʞ: 'k',
    ꞁ: 'l',
    ɯ: 'm',
    ɰ: 'm',
    ᴔ: 'oe',
    ɹ: 'r',
    ɻ: 'r',
    ɺ: 'r',
    ⱹ: 'r',
    ʇ: 't',
    ʌ: 'v',
    ʍ: 'w',
    ʎ: 'y',
    ꜩ: 'tz',
    ú: 'u',
    ŭ: 'u',
    ǔ: 'u',
    û: 'u',
    ṷ: 'u',
    ü: 'u',
    ǘ: 'u',
    ǚ: 'u',
    ǜ: 'u',
    ǖ: 'u',
    ṳ: 'u',
    ụ: 'u',
    ű: 'u',
    ȕ: 'u',
    ù: 'u',
    ủ: 'u',
    ư: 'u',
    ứ: 'u',
    ự: 'u',
    ừ: 'u',
    ử: 'u',
    ữ: 'u',
    ȗ: 'u',
    ū: 'u',
    ṻ: 'u',
    ų: 'u',
    ᶙ: 'u',
    ů: 'u',
    ũ: 'u',
    ṹ: 'u',
    ṵ: 'u',
    ᵫ: 'ue',
    ꝸ: 'um',
    ⱴ: 'v',
    ꝟ: 'v',
    ṿ: 'v',
    ʋ: 'v',
    ᶌ: 'v',
    ⱱ: 'v',
    ṽ: 'v',
    ꝡ: 'vy',
    ẃ: 'w',
    ŵ: 'w',
    ẅ: 'w',
    ẇ: 'w',
    ẉ: 'w',
    ẁ: 'w',
    ⱳ: 'w',
    ẘ: 'w',
    ẍ: 'x',
    ẋ: 'x',
    ᶍ: 'x',
    ý: 'y',
    ŷ: 'y',
    ÿ: 'y',
    ẏ: 'y',
    ỵ: 'y',
    ỳ: 'y',
    ƴ: 'y',
    ỷ: 'y',
    ỿ: 'y',
    ȳ: 'y',
    ẙ: 'y',
    ɏ: 'y',
    ỹ: 'y',
    ź: 'z',
    ž: 'z',
    ẑ: 'z',
    ʑ: 'z',
    ⱬ: 'z',
    ż: 'z',
    ẓ: 'z',
    ȥ: 'z',
    ẕ: 'z',
    ᵶ: 'z',
    ᶎ: 'z',
    ʐ: 'z',
    ƶ: 'z',
    ɀ: 'z',
    ﬀ: 'ff',
    ﬃ: 'ffi',
    ﬄ: 'ffl',
    ﬁ: 'fi',
    ﬂ: 'fl',
    ĳ: 'ij',
    œ: 'oe',
    ﬆ: 'st',
    ₐ: 'a',
    ₑ: 'e',
    ᵢ: 'i',
    ⱼ: 'j',
    ₒ: 'o',
    ᵣ: 'r',
    ᵤ: 'u',
    ᵥ: 'v',
    ₓ: 'x'
};
var TypeaheadMatch = (function () {
    function TypeaheadMatch(item, value, header) {
        if (value === void 0) {
            value = item;
        }
        if (header === void 0) {
            header = false;
        }
        this.item = item;
        this.value = value;
        this.header = header;
    }
    TypeaheadMatch.prototype.isHeader = function () {
        return this.header;
    };
    TypeaheadMatch.prototype.toString = function () {
        return this.value;
    };
    return TypeaheadMatch;
}());
function latinize(str) {
    if (!str) {
        return '';
    }
    return str.replace(/[^A-Za-z0-9\[\] ]/g, function (a) {
        return latinMap[a] || a;
    });
}
/* tslint:disable */
function tokenize(str, wordRegexDelimiters, phraseRegexDelimiters) {
    if (wordRegexDelimiters === void 0) {
        wordRegexDelimiters = ' ';
    }
    if (phraseRegexDelimiters === void 0) {
        phraseRegexDelimiters = '';
    }
    /* tslint:enable */
    var regexStr = "(?:[" + phraseRegexDelimiters + "])([^" + phraseRegexDelimiters + "]+)" +
        ("(?:[" + phraseRegexDelimiters + "])|([^" + wordRegexDelimiters + "]+)");
    var preTokenized = str.split(new RegExp(regexStr, 'g'));
    var result = [];
    var preTokenizedLength = preTokenized.length;
    var token;
    var replacePhraseDelimiters = new RegExp("[" + phraseRegexDelimiters + "]+", 'g');
    for (var i = 0; i < preTokenizedLength; i += 1) {
        token = preTokenized[i];
        if (token && token.length && token !== wordRegexDelimiters) {
            result.push(token.replace(replacePhraseDelimiters, ''));
        }
    }
    return result;
}
function getValueFromObject(object, option) {
    if (!option || typeof object !== 'object') {
        return object.toString();
    }
    if (option.endsWith('()')) {
        var functionName = option.slice(0, option.length - 2);
        return object[functionName]().toString();
    }
    var properties = option
        .replace(/\[(\w+)\]/g, '.$1')
        .replace(/^\./, '');
    var propertiesArray = properties.split('.');
    for (var _i = 0, propertiesArray_1 = propertiesArray; _i < propertiesArray_1.length; _i++) {
        var property = propertiesArray_1[_i];
        if (property in object) {
            // tslint:disable-next-line
            object = object[property];
        }
    }
    if (!object) {
        return '';
    }
    return object.toString();
}
var TypeaheadContainerComponent = (function () {
    function TypeaheadContainerComponent(element, renderer) {
        this.renderer = renderer;
        this.isFocused = false;
        this._matches = [];
        this.isScrolledIntoView = function (elem) {
            var containerViewTop = this.ulElement.nativeElement.scrollTop;
            var containerViewBottom = containerViewTop + this.ulElement.nativeElement.offsetHeight;
            var elemTop = elem.offsetTop;
            var elemBottom = elemTop + elem.offsetHeight;
            return ((elemBottom <= containerViewBottom) && (elemTop >= containerViewTop));
        };
        this.element = element;
    }
    Object.defineProperty(TypeaheadContainerComponent.prototype, "isBs4", {
        get: function () {
            return !isBs3();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeaheadContainerComponent.prototype, "active", {
        get: function () {
            return this._active;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeaheadContainerComponent.prototype, "matches", {
        get: function () {
            return this._matches;
        },
        set: function (value) {
            var _this = this;
            this._matches = value;
            this.needScrollbar = this.typeaheadScrollable && this.typeaheadOptionsInScrollableView < this.matches.length;
            if (this.typeaheadScrollable) {
                setTimeout(function () {
                    _this.setScrollableMode();
                });
            }
            if (this._matches.length > 0) {
                this._active = this._matches[0];
                if (this._active.isHeader()) {
                    this.nextActiveMatch();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeaheadContainerComponent.prototype, "optionsListTemplate", {
        get: function () {
            return this.parent ? this.parent.optionsListTemplate : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeaheadContainerComponent.prototype, "typeaheadScrollable", {
        get: function () {
            return this.parent ? this.parent.typeaheadScrollable : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeaheadContainerComponent.prototype, "typeaheadOptionsInScrollableView", {
        get: function () {
            return this.parent ? this.parent.typeaheadOptionsInScrollableView : 5;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeaheadContainerComponent.prototype, "itemTemplate", {
        get: function () {
            return this.parent ? this.parent.typeaheadItemTemplate : undefined;
        },
        enumerable: true,
        configurable: true
    });
    TypeaheadContainerComponent.prototype.selectActiveMatch = function () {
        this.selectMatch(this._active);
    };
    TypeaheadContainerComponent.prototype.prevActiveMatch = function () {
        var index = this.matches.indexOf(this._active);
        this._active = this.matches[index - 1 < 0 ? this.matches.length - 1 : index - 1];
        if (this._active.isHeader()) {
            this.prevActiveMatch();
        }
        if (this.typeaheadScrollable) {
            this.scrollPrevious(index);
        }
    };
    TypeaheadContainerComponent.prototype.nextActiveMatch = function () {
        var index = this.matches.indexOf(this._active);
        this._active = this.matches[index + 1 > this.matches.length - 1 ? 0 : index + 1];
        if (this._active.isHeader()) {
            this.nextActiveMatch();
        }
        if (this.typeaheadScrollable) {
            this.scrollNext(index);
        }
    };
    TypeaheadContainerComponent.prototype.selectActive = function (value) {
        this.isFocused = true;
        this._active = value;
    };
    TypeaheadContainerComponent.prototype.hightlight = function (match, query) {
        var itemStr = match.value;
        var itemStrHelper = (this.parent && this.parent.typeaheadLatinize
            ? latinize(itemStr)
            : itemStr).toLowerCase();
        var startIdx;
        var tokenLen;
        // Replaces the capture string with the same string inside of a "strong" tag
        if (typeof query === 'object') {
            var queryLen = query.length;
            for (var i = 0; i < queryLen; i += 1) {
                // query[i] is already latinized and lower case
                startIdx = itemStrHelper.indexOf(query[i]);
                tokenLen = query[i].length;
                if (startIdx >= 0 && tokenLen > 0) {
                    itemStr =
                        itemStr.substring(0, startIdx) + "<strong>" + itemStr.substring(startIdx, startIdx + tokenLen) + "</strong>" +
                            ("" + itemStr.substring(startIdx + tokenLen));
                    itemStrHelper =
                        itemStrHelper.substring(0, startIdx) + "        " + ' '.repeat(tokenLen) + "         " +
                            ("" + itemStrHelper.substring(startIdx + tokenLen));
                }
            }
        }
        else if (query) {
            // query is already latinized and lower case
            startIdx = itemStrHelper.indexOf(query);
            tokenLen = query.length;
            if (startIdx >= 0 && tokenLen > 0) {
                itemStr =
                    itemStr.substring(0, startIdx) + "<strong>" + itemStr.substring(startIdx, startIdx + tokenLen) + "</strong>" +
                        ("" + itemStr.substring(startIdx + tokenLen));
            }
        }
        return itemStr;
    };
    TypeaheadContainerComponent.prototype.focusLost = function () {
        this.isFocused = false;
    };
    TypeaheadContainerComponent.prototype.isActive = function (value) {
        return this._active === value;
    };
    TypeaheadContainerComponent.prototype.selectMatch = function (value, e) {
        var _this = this;
        if (e === void 0) {
            e = void 0;
        }
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        this.parent.changeModel(value);
        setTimeout(function () { return _this.parent.typeaheadOnSelect.emit(value); }, 0);
        return false;
    };
    TypeaheadContainerComponent.prototype.setScrollableMode = function () {
        if (!this.ulElement) {
            this.ulElement = this.element;
        }
        if (this.liElements.first) {
            var ulStyles = Utils.getStyles(this.ulElement.nativeElement);
            var liStyles = Utils.getStyles(this.liElements.first.nativeElement);
            var ulPaddingBottom = parseFloat((ulStyles['padding-bottom'] ? ulStyles['padding-bottom'] : '').replace('px', ''));
            var ulPaddingTop = parseFloat((ulStyles['padding-top'] ? ulStyles['padding-top'] : '0').replace('px', ''));
            var optionHeight = parseFloat((liStyles['height'] ? liStyles['height'] : '0').replace('px', ''));
            var height = this.typeaheadOptionsInScrollableView * optionHeight;
            this.guiHeight = (height + ulPaddingTop + ulPaddingBottom) + 'px';
        }
        this.renderer.setStyle(this.element.nativeElement, 'visibility', 'visible');
    };
    TypeaheadContainerComponent.prototype.scrollPrevious = function (index) {
        if (index === 0) {
            this.scrollToBottom();
            return;
        }
        if (this.liElements) {
            var liElement = this.liElements.toArray()[index - 1];
            if (liElement && !this.isScrolledIntoView(liElement.nativeElement)) {
                this.ulElement.nativeElement.scrollTop = liElement.nativeElement.offsetTop;
            }
        }
    };
    TypeaheadContainerComponent.prototype.scrollNext = function (index) {
        if (index + 1 > this.matches.length - 1) {
            this.scrollToTop();
            return;
        }
        if (this.liElements) {
            var liElement = this.liElements.toArray()[index + 1];
            if (liElement && !this.isScrolledIntoView(liElement.nativeElement)) {
                this.ulElement.nativeElement.scrollTop =
                    liElement.nativeElement.offsetTop -
                        this.ulElement.nativeElement.offsetHeight +
                        liElement.nativeElement.offsetHeight;
            }
        }
    };
    TypeaheadContainerComponent.prototype.scrollToBottom = function () {
        this.ulElement.nativeElement.scrollTop = this.ulElement.nativeElement.scrollHeight;
    };
    TypeaheadContainerComponent.prototype.scrollToTop = function () {
        this.ulElement.nativeElement.scrollTop = 0;
    };
    TypeaheadContainerComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                    selector: 'typeahead-container',
                    // tslint:disable-next-line
                    template: "<!-- inject options list template --> <ng-template [ngTemplateOutlet]=\"optionsListTemplate || (isBs4 ? bs4Template : bs3Template)\" [ngTemplateOutletContext]=\"{matches:matches, itemTemplate:itemTemplate, query:query}\"></ng-template> <!-- default options item template --> <ng-template #bsItemTemplate let-match=\"match\" let-query=\"query\"><span [innerHtml]=\"hightlight(match, query)\"></span> </ng-template> <!-- Bootstrap 3 options list template --> <ng-template #bs3Template> <ul class=\"dropdown-menu\" #ulElement [style.overflow-y]=\"needScrollbar ? 'scroll': 'auto'\" [style.height]=\"needScrollbar ? guiHeight: 'auto'\"> <ng-template ngFor let-match let-i=\"index\" [ngForOf]=\"matches\"> <li #liElements *ngIf=\"match.isHeader()\" class=\"dropdown-header\">{{ match }}</li> <li #liElements *ngIf=\"!match.isHeader()\" [class.active]=\"isActive(match)\" (mouseenter)=\"selectActive(match)\"> <a href=\"#\" (click)=\"selectMatch(match, $event)\" tabindex=\"-1\"> <ng-template [ngTemplateOutlet]=\"itemTemplate || bsItemTemplate\" [ngTemplateOutletContext]=\"{item:match.item, index:i, match:match, query:query}\"></ng-template> </a> </li> </ng-template> </ul> </ng-template> <!-- Bootstrap 4 options list template --> <ng-template #bs4Template> <ng-template ngFor let-match let-i=\"index\" [ngForOf]=\"matches\"> <h6 *ngIf=\"match.isHeader()\" class=\"dropdown-header\">{{ match }}</h6> <ng-template [ngIf]=\"!match.isHeader()\"> <button #liElements class=\"dropdown-item\" (click)=\"selectMatch(match, $event)\" (mouseenter)=\"selectActive(match)\" [class.active]=\"isActive(match)\"> <ng-template [ngTemplateOutlet]=\"itemTemplate || bsItemTemplate\" [ngTemplateOutletContext]=\"{item:match.item, index:i, match:match, query:query}\"></ng-template> </button> </ng-template> </ng-template> </ng-template> ",
                    host: {
                        class: 'dropdown open',
                        '[class.dropdown-menu]': 'isBs4',
                        '[style.overflow-y]': "isBs4 && needScrollbar ? 'scroll': 'visible'",
                        '[style.height]': "isBs4 && needScrollbar ? guiHeight: 'auto'",
                        '[style.visibility]': "typeaheadScrollable ? 'hidden' : 'visible'",
                        '[class.dropup]': 'dropup',
                        style: 'position: absolute;display: block;'
                    }
                },] },
    ];
    /** @nocollapse */
    TypeaheadContainerComponent.ctorParameters = function () {
        return [
            { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
            { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Renderer2 */], },
        ];
    };
    TypeaheadContainerComponent.propDecorators = {
        'ulElement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */], args: ['ulElement',] },],
        'liElements': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChildren */], args: ['liElements',] },],
        'focusLost': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */], args: ['mouseleave',] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */], args: ['blur',] },],
    };
    return TypeaheadContainerComponent;
}());
/* tslint:disable:max-file-line-count */
var TypeaheadDirective = (function () {
    function TypeaheadDirective(ngControl, element, viewContainerRef, renderer, cis, changeDetection) {
        this.ngControl = ngControl;
        this.element = element;
        this.renderer = renderer;
        this.changeDetection = changeDetection;
        /** minimal no of characters that needs to be entered before
         * typeahead kicks-in. When set to 0, typeahead shows on focus with full
         * list of options (limited as normal by typeaheadOptionsLimit)
         */
        this.typeaheadMinLength = void 0;
        /** should be used only in case of typeahead attribute is array.
         * If true - loading of options will be async, otherwise - sync.
         * true make sense if options array is large.
         */
        this.typeaheadAsync = void 0;
        /** match latin symbols.
         * If true the word súper would match super and vice versa.
         */
        this.typeaheadLatinize = true;
        /** break words with spaces. If true the text "exact phrase"
         * here match would match with match exact phrase here
         * but not with phrase here exact match (kind of "google style").
         */
        this.typeaheadSingleWords = true;
        /** should be used only in case typeaheadSingleWords attribute is true.
         * Sets the word delimiter to break words. Defaults to space.
         */
        this.typeaheadWordDelimiters = ' ';
        /** should be used only in case typeaheadSingleWords attribute is true.
         * Sets the word delimiter to match exact phrase.
         * Defaults to simple and double quotes.
         */
        this.typeaheadPhraseDelimiters = '\'"';
        /** specifies if typeahead is scrollable  */
        this.typeaheadScrollable = false;
        /** specifies number of options to show in scroll view  */
        this.typeaheadOptionsInScrollableView = 5;
        /** fired when 'busy' state of this component was changed,
         * fired on async mode only, returns boolean
         */
        this.typeaheadLoading = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        /** fired on every key event and returns true
         * in case of matches are not detected
         */
        this.typeaheadNoResults = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        /** fired when option was selected, return object with data of this option */
        this.typeaheadOnSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        /** fired when blur event occurres. returns the active item */
        this.typeaheadOnBlur = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        /** This attribute indicates that the dropdown should be opened upwards */
        this.dropup = false;
        this.isTypeaheadOptionsListActive = false;
        this.keyUpEventEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.placement = 'bottom-left';
        this._subscriptions = [];
        this._typeahead = cis.createLoader(element, viewContainerRef, renderer);
    }
    TypeaheadDirective.prototype.ngOnInit = function () {
        this.typeaheadOptionsLimit = this.typeaheadOptionsLimit || 20;
        this.typeaheadMinLength =
            this.typeaheadMinLength === void 0 ? 1 : this.typeaheadMinLength;
        this.typeaheadWaitMs = this.typeaheadWaitMs || 0;
        // async should be false in case of array
        if (this.typeaheadAsync === undefined &&
            !(this.typeahead instanceof __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["a" /* Observable */])) {
            this.typeaheadAsync = false;
        }
        if (this.typeahead instanceof __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["a" /* Observable */]) {
            this.typeaheadAsync = true;
        }
        if (this.typeaheadAsync) {
            this.asyncActions();
        }
        else {
            this.syncActions();
        }
    };
    TypeaheadDirective.prototype.onInput = function (e) {
        // For `<input>`s, use the `value` property. For others that don't have a
        // `value` (such as `<span contenteditable="true">`), use either
        // `textContent` or `innerText` (depending on which one is supported, i.e.
        // Firefox or IE).
        var value = e.target.value !== undefined
            ? e.target.value
            : e.target.textContent !== undefined
                ? e.target.textContent
                : e.target.innerText;
        if (value != null && value.trim().length >= this.typeaheadMinLength) {
            this.typeaheadLoading.emit(true);
            this.keyUpEventEmitter.emit(e.target.value);
        }
        else {
            this.typeaheadLoading.emit(false);
            this.typeaheadNoResults.emit(false);
            this.hide();
        }
    };
    TypeaheadDirective.prototype.onChange = function (e) {
        if (this._container) {
            // esc
            if (e.keyCode === 27) {
                this.hide();
                return;
            }
            // up
            if (e.keyCode === 38) {
                this._container.prevActiveMatch();
                return;
            }
            // down
            if (e.keyCode === 40) {
                this._container.nextActiveMatch();
                return;
            }
            // enter, tab
            if (e.keyCode === 13 || e.keyCode === 9) {
                this._container.selectActiveMatch();
                return;
            }
        }
    };
    TypeaheadDirective.prototype.onFocus = function () {
        if (this.typeaheadMinLength === 0) {
            this.typeaheadLoading.emit(true);
            this.keyUpEventEmitter.emit('');
        }
    };
    TypeaheadDirective.prototype.onBlur = function () {
        if (this._container && !this._container.isFocused) {
            this.typeaheadOnBlur.emit(this._container.active);
        }
    };
    TypeaheadDirective.prototype.onKeydown = function (e) {
        // no container - no problems
        if (!this._container) {
            return;
        }
        // if an item is visible - prevent form submission
        if (e.keyCode === 13) {
            e.preventDefault();
            return;
        }
        // if an item is visible - don't change focus
        if (e.keyCode === 9) {
            e.preventDefault();
            return;
        }
    };
    TypeaheadDirective.prototype.changeModel = function (match) {
        var valueStr = match.value;
        this.ngControl.viewToModelUpdate(valueStr);
        (this.ngControl.control).setValue(valueStr);
        this.changeDetection.markForCheck();
        this.hide();
    };
    Object.defineProperty(TypeaheadDirective.prototype, "matches", {
        get: function () {
            return this._matches;
        },
        enumerable: true,
        configurable: true
    });
    TypeaheadDirective.prototype.show = function () {
        var _this = this;
        this._typeahead
            .attach(TypeaheadContainerComponent)
            .to(this.container)
            .position({ attachment: (this.dropup ? 'top' : 'bottom') + " left" })
            .show({
            typeaheadRef: this,
            placement: this.placement,
            animation: false,
            dropup: this.dropup
        });
        this._outsideClickListener = this.renderer.listen('document', 'click', function () {
            _this.onOutsideClick();
        });
        this._container = this._typeahead.instance;
        this._container.parent = this;
        // This improves the speed as it won't have to be done for each list item
        var normalizedQuery = (this.typeaheadLatinize
            ? latinize(this.ngControl.control.value)
            : this.ngControl.control.value)
            .toString()
            .toLowerCase();
        this._container.query = this.typeaheadSingleWords
            ? tokenize(normalizedQuery, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters)
            : normalizedQuery;
        this._container.matches = this._matches;
        this.element.nativeElement.focus();
    };
    TypeaheadDirective.prototype.hide = function () {
        if (this._typeahead.isShown) {
            this._typeahead.hide();
            this._outsideClickListener();
            this._container = null;
        }
    };
    TypeaheadDirective.prototype.onOutsideClick = function () {
        if (this._container && !this._container.isFocused) {
            this.hide();
        }
    };
    TypeaheadDirective.prototype.ngOnDestroy = function () {
        // clean up subscriptions
        for (var _i = 0, _a = this._subscriptions; _i < _a.length; _i++) {
            var sub = _a[_i];
            sub.unsubscribe();
        }
        this._typeahead.dispose();
    };
    TypeaheadDirective.prototype.asyncActions = function () {
        var _this = this;
        this._subscriptions.push(this.keyUpEventEmitter
            .debounceTime(this.typeaheadWaitMs)
            .mergeMap(function () { return _this.typeahead; })
            .subscribe(function (matches) {
            _this.finalizeAsyncCall(matches);
        }));
    };
    TypeaheadDirective.prototype.syncActions = function () {
        var _this = this;
        this._subscriptions.push(this.keyUpEventEmitter
            .debounceTime(this.typeaheadWaitMs)
            .mergeMap(function (value) {
            var normalizedQuery = _this.normalizeQuery(value);
            return __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["a" /* Observable */].from(_this.typeahead)
                .filter(function (option) {
                return (option &&
                    _this.testMatch(_this.normalizeOption(option), normalizedQuery));
            })
                .toArray();
        })
            .subscribe(function (matches) {
            _this.finalizeAsyncCall(matches);
        }));
    };
    TypeaheadDirective.prototype.normalizeOption = function (option) {
        var optionValue = getValueFromObject(option, this.typeaheadOptionField);
        var normalizedOption = this.typeaheadLatinize
            ? latinize(optionValue)
            : optionValue;
        return normalizedOption.toLowerCase();
    };
    TypeaheadDirective.prototype.normalizeQuery = function (value) {
        // If singleWords, break model here to not be doing extra work on each
        // iteration
        var normalizedQuery = (this.typeaheadLatinize
            ? latinize(value)
            : value)
            .toString()
            .toLowerCase();
        normalizedQuery = this.typeaheadSingleWords
            ? tokenize(normalizedQuery, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters)
            : normalizedQuery;
        return normalizedQuery;
    };
    TypeaheadDirective.prototype.testMatch = function (match, test) {
        var spaceLength;
        if (typeof test === 'object') {
            spaceLength = test.length;
            for (var i = 0; i < spaceLength; i += 1) {
                if (test[i].length > 0 && match.indexOf(test[i]) < 0) {
                    return false;
                }
            }
            return true;
        }
        return match.indexOf(test) >= 0;
    };
    TypeaheadDirective.prototype.finalizeAsyncCall = function (matches) {
        this.prepareMatches(matches);
        this.typeaheadLoading.emit(false);
        this.typeaheadNoResults.emit(!this.hasMatches());
        if (!this.hasMatches()) {
            this.hide();
            return;
        }
        if (this._container) {
            // This improves the speed as it won't have to be done for each list item
            var normalizedQuery = (this.typeaheadLatinize
                ? latinize(this.ngControl.control.value)
                : this.ngControl.control.value)
                .toString()
                .toLowerCase();
            this._container.query = this.typeaheadSingleWords
                ? tokenize(normalizedQuery, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters)
                : normalizedQuery;
            this._container.matches = this._matches;
        }
        else {
            this.show();
        }
    };
    TypeaheadDirective.prototype.prepareMatches = function (options) {
        var _this = this;
        var limited = options.slice(0, this.typeaheadOptionsLimit);
        if (this.typeaheadGroupField) {
            var matches_1 = [];
            // extract all group names
            var groups = limited
                .map(function (option) {
                return getValueFromObject(option, _this.typeaheadGroupField);
            })
                .filter(function (v, i, a) { return a.indexOf(v) === i; });
            groups.forEach(function (group) {
                // add group header to array of matches
                matches_1.push(new TypeaheadMatch(group, group, true));
                // add each item of group to array of matches
                matches_1 = matches_1.concat(limited
                    .filter(function (option) {
                    return getValueFromObject(option, _this.typeaheadGroupField) === group;
                })
                    .map(function (option) {
                    return new TypeaheadMatch(option, getValueFromObject(option, _this.typeaheadOptionField));
                }));
            });
            this._matches = matches_1;
        }
        else {
            this._matches = limited.map(function (option) {
                return new TypeaheadMatch(option, getValueFromObject(option, _this.typeaheadOptionField));
            });
        }
    };
    TypeaheadDirective.prototype.hasMatches = function () {
        return this._matches.length > 0;
    };
    TypeaheadDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{ selector: '[typeahead]', exportAs: 'bs-typeahead' },] },
    ];
    /** @nocollapse */
    TypeaheadDirective.ctorParameters = function () {
        return [
            { type: __WEBPACK_IMPORTED_MODULE_8__angular_forms__["f" /* NgControl */], },
            { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
            { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewContainerRef */], },
            { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Renderer2 */], },
            { type: ComponentLoaderFactory, },
            { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */], },
        ];
    };
    TypeaheadDirective.propDecorators = {
        'typeahead': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'typeaheadMinLength': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'typeaheadWaitMs': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'typeaheadOptionsLimit': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'typeaheadOptionField': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'typeaheadGroupField': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'typeaheadAsync': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'typeaheadLatinize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'typeaheadSingleWords': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'typeaheadWordDelimiters': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'typeaheadPhraseDelimiters': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'typeaheadItemTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'optionsListTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'typeaheadScrollable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'typeaheadOptionsInScrollableView': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'typeaheadLoading': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
        'typeaheadNoResults': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
        'typeaheadOnSelect': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
        'typeaheadOnBlur': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
        'container': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'dropup': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        'onInput': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */], args: ['input', ['$event'],] },],
        'onChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */], args: ['keyup', ['$event'],] },],
        'onFocus': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */], args: ['click',] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */], args: ['focus',] },],
        'onBlur': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */], args: ['blur',] },],
        'onKeydown': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */], args: ['keydown', ['$event'],] },],
    };
    return TypeaheadDirective;
}());
// moment.js locale configuration
// locale : Arabic [ar]
// author : Abdel Said: https://github.com/abdelsaid
// author : Ahmed Elkhatib
// author : forabi https://github.com/forabi
var symbolMap = {
    1: '١',
    2: '٢',
    3: '٣',
    4: '٤',
    5: '٥',
    6: '٦',
    7: '٧',
    8: '٨',
    9: '٩',
    0: '٠'
};
var numberMap = {
    '١': '1',
    '٢': '2',
    '٣': '3',
    '٤': '4',
    '٥': '5',
    '٦': '6',
    '٧': '7',
    '٨': '8',
    '٩': '9',
    '٠': '0'
};
var pluralForm = function (n) {
    return n === 0
        ? 0
        : n === 1
            ? 1
            : n === 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5;
};
var plurals = {
    s: [
        'أقل من ثانية',
        'ثانية واحدة',
        ['ثانيتان', 'ثانيتين'],
        '%d ثوان',
        '%d ثانية',
        '%d ثانية'
    ],
    m: [
        'أقل من دقيقة',
        'دقيقة واحدة',
        ['دقيقتان', 'دقيقتين'],
        '%d دقائق',
        '%d دقيقة',
        '%d دقيقة'
    ],
    h: [
        'أقل من ساعة',
        'ساعة واحدة',
        ['ساعتان', 'ساعتين'],
        '%d ساعات',
        '%d ساعة',
        '%d ساعة'
    ],
    d: [
        'أقل من يوم',
        'يوم واحد',
        ['يومان', 'يومين'],
        '%d أيام',
        '%d يومًا',
        '%d يوم'
    ],
    M: [
        'أقل من شهر',
        'شهر واحد',
        ['شهران', 'شهرين'],
        '%d أشهر',
        '%d شهرا',
        '%d شهر'
    ],
    y: [
        'أقل من عام',
        'عام واحد',
        ['عامان', 'عامين'],
        '%d أعوام',
        '%d عامًا',
        '%d عام'
    ]
};
var pluralize = function (u) {
    return function (num, withoutSuffix /*, string, isFuture*/) {
        var f = pluralForm(num);
        var str = plurals[u][pluralForm(num)];
        if (f === 2) {
            str = str[withoutSuffix ? 0 : 1];
        }
        return str.replace(/%d/i, num);
    };
};
var months = [
    'كانون الثاني يناير',
    'شباط فبراير',
    'آذار مارس',
    'نيسان أبريل',
    'أيار مايو',
    'حزيران يونيو',
    'تموز يوليو',
    'آب أغسطس',
    'أيلول سبتمبر',
    'تشرين الأول أكتوبر',
    'تشرين الثاني نوفمبر',
    'كانون الأول ديسمبر'
];
var ar = {
    abbr: 'ar',
    months: months,
    monthsShort: months,
    weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
    weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
    weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'D/\u200FM/\u200FYYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    meridiemParse: /ص|م/,
    isPM: function (input) {
        return input === 'م';
    },
    meridiem: function (hour, minute, isLower) {
        if (hour < 12) {
            return 'ص';
        }
        else {
            return 'م';
        }
    },
    calendar: {
        sameDay: '[اليوم عند الساعة] LT',
        nextDay: '[غدًا عند الساعة] LT',
        nextWeek: 'dddd [عند الساعة] LT',
        lastDay: '[أمس عند الساعة] LT',
        lastWeek: 'dddd [عند الساعة] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'بعد %s',
        past: 'منذ %s',
        s: pluralize('s'),
        m: pluralize('m'),
        mm: pluralize('m'),
        h: pluralize('h'),
        hh: pluralize('h'),
        d: pluralize('d'),
        dd: pluralize('d'),
        M: pluralize('M'),
        MM: pluralize('M'),
        y: pluralize('y'),
        yy: pluralize('y')
    },
    preparse: function (str) {
        return str
            .replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
            return numberMap[match];
        })
            .replace(/،/g, ',');
    },
    postformat: function (str) {
        if (!str) {
            return str;
        }
        return str
            .replace(/\d/g, function (match) {
            return symbolMap[match];
        })
            .replace(/,/g, '،');
    },
    week: {
        dow: 6,
        doy: 12 // The week that contains Jan 1st is the first week of the year.
    }
};
// moment.js locale configuration
// locale : Czech [cs]
// author : petrbela : https://github.com/petrbela
// ported by: Frantisek Jandos : https://github.com/frantisekjandos
function plural(n) {
    return (n % 10 < 5) && (n % 10 > 1) && ((~~(n / 10) % 10) !== 1);
}
function translate(num, withoutSuffix, key, isFuture) {
    var result = num + ' ';
    switch (key) {
        case 's':// a few seconds / in a few seconds / a few seconds ago
            return (withoutSuffix || isFuture) ? 'pár sekund' : 'pár sekundami';
        case 'm':// a minute / in a minute / a minute ago
            return withoutSuffix ? 'minuta' : (isFuture ? 'minutu' : 'minutou');
        case 'mm':// 9 minutes / in 9 minutes / 9 minutes ago
            if (withoutSuffix || isFuture) {
                return result + (plural(num) ? 'minuty' : 'minut');
            }
            return result + 'minutami';
        case 'h':// an hour / in an hour / an hour ago
            return withoutSuffix ? 'hodina' : (isFuture ? 'hodinu' : 'hodinou');
        case 'hh':// 9 hours / in 9 hours / 9 hours ago
            if (withoutSuffix || isFuture) {
                return result + (plural(num) ? 'hodiny' : 'hodin');
            }
            return result + 'hodinami';
        case 'd':// a day / in a day / a day ago
            return (withoutSuffix || isFuture) ? 'den' : 'dnem';
        case 'dd':// 9 days / in 9 days / 9 days ago
            if (withoutSuffix || isFuture) {
                return result + (plural(num) ? 'dny' : 'dní');
            }
            return result + 'dny';
        case 'M':// a month / in a month / a month ago
            return (withoutSuffix || isFuture) ? 'měsíc' : 'měsícem';
        case 'MM':// 9 months / in 9 months / 9 months ago
            if (withoutSuffix || isFuture) {
                return result + (plural(num) ? 'měsíce' : 'měsíců');
            }
            return result + 'měsíci';
        case 'y':// a year / in a year / a year ago
            return (withoutSuffix || isFuture) ? 'rok' : 'rokem';
        case 'yy':// 9 years / in 9 years / 9 years ago
            if (withoutSuffix || isFuture) {
                return result + (plural(num) ? 'roky' : 'let');
            }
            return result + 'lety';
    }
}
var cs = {
    abbr: 'cs',
    months: 'leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec'.split('_'),
    monthsShort: 'led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro'.split('_'),
    weekdays: 'neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota'.split('_'),
    weekdaysShort: 'ne_po_út_st_čt_pá_so'.split('_'),
    weekdaysMin: 'ne_po_út_st_čt_pá_so'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY HH:mm',
        LLLL: 'dddd, D. MMMM YYYY HH:mm',
        l: 'D. M. YYYY'
    },
    calendar: {
        sameDay: '[dnes v] LT',
        nextDay: '[zítra v] LT',
        nextWeek: '[příští] dddd [v] LT',
        lastDay: '[včera v] LT',
        lastWeek: '[minulý] dddd [v] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'za %s',
        past: 'před %s',
        s: translate,
        m: translate,
        mm: translate,
        h: translate,
        hh: translate,
        d: translate,
        dd: translate,
        M: translate,
        MM: translate,
        y: translate,
        yy: translate
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: function (num) { return num + "."; },
    week: {
        dow: 1,
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};
// moment.js locale configuration
// locale : German [de]
// author : lluchs : https://github.com/lluchs
// author: Menelion Elensúle: https://github.com/Oire
// author : Mikolaj Dadela : https://github.com/mik01aj
function processRelativeTime(num, withoutSuffix, key, isFuture) {
    var str = num.toString();
    var format = {
        m: ['eine Minute', 'einer Minute'],
        h: ['eine Stunde', 'einer Stunde'],
        d: ['ein Tag', 'einem Tag'],
        dd: [str + " Tage", str + " Tagen"],
        M: ['ein Monat', 'einem Monat'],
        MM: [str + " Monate", str + " Monaten"],
        y: ['ein Jahr', 'einem Jahr'],
        yy: [str + " Jahre", str + " Jahren"]
    };
    return withoutSuffix ? format[key][0] : format[key][1];
}
var de = {
    abbr: 'de',
    months: 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
    monthsShort: 'Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
    monthsParseExact: true,
    weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
    weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
    weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY HH:mm',
        LLLL: 'dddd, D. MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[heute um] LT [Uhr]',
        sameElse: 'L',
        nextDay: '[morgen um] LT [Uhr]',
        nextWeek: 'dddd [um] LT [Uhr]',
        lastDay: '[gestern um] LT [Uhr]',
        lastWeek: '[letzten] dddd [um] LT [Uhr]'
    },
    relativeTime: {
        future: 'in %s',
        past: 'vor %s',
        s: 'ein paar Sekunden',
        m: processRelativeTime,
        mm: '%d Minuten',
        h: processRelativeTime,
        hh: '%d Stunden',
        d: processRelativeTime,
        dd: processRelativeTime,
        M: processRelativeTime,
        MM: processRelativeTime,
        y: processRelativeTime,
        yy: processRelativeTime
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: function (num, token) {
        return num + ".";
    },
    week: {
        dow: 1,
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};
// moment.js locale configuration
// locale : English (United Kingdom) [en-gb]
// author : Chris Gedrim : https://github.com/chrisgedrim
var enGb = {
    abbr: 'en-gb',
    months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
    monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[Today at] LT',
        nextDay: '[Tomorrow at] LT',
        nextWeek: 'dddd [at] LT',
        lastDay: '[Yesterday at] LT',
        lastWeek: '[Last] dddd [at] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'in %s',
        past: '%s ago',
        s: 'a few seconds',
        m: 'a minute',
        mm: '%d minutes',
        h: 'an hour',
        hh: '%d hours',
        d: 'a day',
        dd: '%d days',
        M: 'a month',
        MM: '%d months',
        y: 'a year',
        yy: '%d years'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal: function (num) {
        var b = num % 10;
        var output = Math.trunc((num % 100) / 10) === 1
            ? 'th'
            : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
        return num + output;
    },
    week: {
        dow: 1,
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};
// moment.js locale configuration
// locale : Spanish [es]
// author : Julio Napurí : https://github.com/julionc
// const monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_');
var monthsShort = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');
var monthsParse = [
    /^ene/i,
    /^feb/i,
    /^mar/i,
    /^abr/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^ago/i,
    /^sep/i,
    /^oct/i,
    /^nov/i,
    /^dic/i
];
// tslint:disable-next-line
var monthsRegex = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
var es = {
    abbr: 'es',
    months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
    // monthsShort(date: Date, format: string): string {
    //   if (!date) {
    //     return monthsShortDot;
    //   } else if (/-MMM-/.test(format)) {
    //     return monthsShort[getMonth(date)];
    //   } else {
    //     return monthsShortDot[getMonth(date)];
    //   }
    // },
    monthsShort: monthsShort,
    monthsRegex: monthsRegex,
    monthsShortRegex: monthsRegex,
    monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
    monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
    monthsParse: monthsParse,
    longMonthsParse: monthsParse,
    shortMonthsParse: monthsParse,
    weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
    weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
    weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D [de] MMMM [de] YYYY',
        LLL: 'D [de] MMMM [de] YYYY H:mm',
        LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm'
    },
    relativeTime: {
        future: 'en %s',
        past: 'hace %s',
        s: 'unos segundos',
        m: 'un minuto',
        mm: '%d minutos',
        h: 'una hora',
        hh: '%d horas',
        d: 'un día',
        dd: '%d días',
        M: 'un mes',
        MM: '%d meses',
        y: 'un año',
        yy: '%d años'
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: function (num) {
        return num + "\u00BA";
    },
    week: {
        dow: 1,
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};
// moment.js locale configuration
// locale : Spanish (Dominican Republic) [es-do]
// const monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_');
var monthsShort$1 = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');
var monthsParse$1 = [
    /^ene/i,
    /^feb/i,
    /^mar/i,
    /^abr/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^ago/i,
    /^sep/i,
    /^oct/i,
    /^nov/i,
    /^dic/i
];
// tslint:disable-next-line
var monthsRegex$1 = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
var esDo = {
    abbr: 'es-do',
    months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
    monthsShort: monthsShort$1,
    // monthsShort(date: Date, format: string): string {
    //   if (!date) {
    //     return monthsShortDot;
    //   } else if (/-MMM-/.test(format)) {
    //     return monthsShort[getMonth(date)];
    //   } else {
    //     return monthsShortDot[getMonth(date)];
    //   }
    // },
    monthsRegex: monthsRegex$1,
    monthsShortRegex: monthsRegex$1,
    monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
    monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
    monthsParse: monthsParse$1,
    longMonthsParse: monthsParse$1,
    shortMonthsParse: monthsParse$1,
    weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
    weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
    weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'h:mm A',
        LTS: 'h:mm:ss A',
        L: 'DD/MM/YYYY',
        LL: 'D [de] MMMM [de] YYYY',
        LLL: 'D [de] MMMM [de] YYYY h:mm A',
        LLLL: 'dddd, D [de] MMMM [de] YYYY h:mm A'
    },
    relativeTime: {
        future: 'en %s',
        past: 'hace %s',
        s: 'unos segundos',
        m: 'un minuto',
        mm: '%d minutos',
        h: 'una hora',
        hh: '%d horas',
        d: 'un día',
        dd: '%d días',
        M: 'un mes',
        MM: '%d meses',
        y: 'un año',
        yy: '%d años'
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: function (num) {
        return num + "\u00BA";
    },
    week: {
        dow: 1,
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};
// moment.js locale configuration
// locale : Spanish(United State) [es-us]
// author : bustta : https://github.com/bustta
// const monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_');
var monthsShort$2 = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');
var esUs = {
    abbr: 'es-us',
    months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
    monthsShort: monthsShort$2,
    // monthsShort(date: Date, format: string): string {
    //   if (!date) {
    //     return monthsShortDot;
    //   } else if (/-MMM-/.test(format)) {
    //     return monthsShort[getMonth(date)];
    //   } else {
    //     return monthsShortDot[getMonth(date)];
    //   }
    // },
    monthsParseExact: true,
    weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
    weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
    weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'MM/DD/YYYY',
        LL: 'MMMM [de] D [de] YYYY',
        LLL: 'MMMM [de] D [de] YYYY H:mm',
        LLLL: 'dddd, MMMM [de] D [de] YYYY H:mm'
    },
    relativeTime: {
        future: 'en %s',
        past: 'hace %s',
        s: 'unos segundos',
        m: 'un minuto',
        mm: '%d minutos',
        h: 'una hora',
        hh: '%d horas',
        d: 'un día',
        dd: '%d días',
        M: 'un mes',
        MM: '%d meses',
        y: 'un año',
        yy: '%d años'
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: function (num) {
        return num + "\u00BA";
    },
    week: {
        dow: 0,
        doy: 6 // The week that contains Jan 1st is the first week of the year.
    }
};
// moment.js locale configuration
// locale : French [fr]
// author : John Fischer : https://github.com/jfroffice
var fr = {
    abbr: 'fr',
    months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
    monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
    monthsParseExact: true,
    weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
    weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
    weekdaysMin: 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[Aujourd’hui à] LT',
        nextDay: '[Demain à] LT',
        nextWeek: 'dddd [à] LT',
        lastDay: '[Hier à] LT',
        lastWeek: 'dddd [dernier à] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'dans %s',
        past: 'il y a %s',
        s: 'quelques secondes',
        m: 'une minute',
        mm: '%d minutes',
        h: 'une heure',
        hh: '%d heures',
        d: 'un jour',
        dd: '%d jours',
        M: 'un mois',
        MM: '%d mois',
        y: 'un an',
        yy: '%d ans'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
    ordinal: function (num, period) {
        switch (period) {
            // TODO: Return 'e' when day of month > 1. Move this case inside
            // block for masculine words below.
            // See https://github.com/moment/moment/issues/3375
            case 'D':
                var endingD = num === 1 ? 'er' : '';
                return "" + num + endingD;
            // Words with masculine grammatical gender: mois, trimestre, jour
            default:
            case 'M':
            case 'Q':
            case 'DDD':
            case 'd':
                var endingd = num === 1 ? 'er' : 'e';
                return "" + num + endingd;
            // Words with feminine grammatical gender: semaine
            case 'w':
            case 'W':
                var endingW = num === 1 ? 're' : 'e';
                return "" + num + endingW;
        }
    },
    week: {
        dow: 1,
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};
// moment.js locale configuration
// locale : Hindi [hi]
// author : Mayank Singhal : https://github.com/mayanksinghal
var symbolMap$1 = {
    1: '१',
    2: '२',
    3: '३',
    4: '४',
    5: '५',
    6: '६',
    7: '७',
    8: '८',
    9: '९',
    0: '०'
};
var numberMap$1 = {
    '१': '1',
    '२': '2',
    '३': '3',
    '४': '4',
    '५': '5',
    '६': '6',
    '७': '7',
    '८': '8',
    '९': '9',
    '०': '0'
};
var hi = {
    abbr: 'hi',
    months: 'जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर'.split('_'),
    monthsShort: 'जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.'.split('_'),
    monthsParseExact: true,
    weekdays: 'रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
    weekdaysShort: 'रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि'.split('_'),
    weekdaysMin: 'र_सो_मं_बु_गु_शु_श'.split('_'),
    longDateFormat: {
        LT: 'A h:mm बजे',
        LTS: 'A h:mm:ss बजे',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY, A h:mm बजे',
        LLLL: 'dddd, D MMMM YYYY, A h:mm बजे'
    },
    calendar: {
        sameDay: '[आज] LT',
        nextDay: '[कल] LT',
        nextWeek: 'dddd, LT',
        lastDay: '[कल] LT',
        lastWeek: '[पिछले] dddd, LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: '%s में',
        past: '%s पहले',
        s: 'कुछ ही क्षण',
        m: 'एक मिनट',
        mm: '%d मिनट',
        h: 'एक घंटा',
        hh: '%d घंटे',
        d: 'एक दिन',
        dd: '%d दिन',
        M: 'एक महीने',
        MM: '%d महीने',
        y: 'एक वर्ष',
        yy: '%d वर्ष'
    },
    preparse: function (str) {
        return str.replace(/[१२३४५६७८९०]/g, function (match) {
            return numberMap$1[match];
        });
    },
    postformat: function (str) {
        if (!str) {
            return str;
        }
        return str.replace(/\d/g, function (match) {
            return symbolMap$1[match];
        });
    },
    // Hindi notation for meridiems are quite fuzzy in practice. While there
    // exists a rigid notion of a 'Pahar' it is not used as rigidly in modern
    // Hindi.
    meridiemParse: /रात|सुबह|दोपहर|शाम/,
    meridiemHour: function (_hour, meridiem) {
        var hour = _hour === 12 ? 0 : _hour;
        // tslint:disable
        if (meridiem === 'रात') {
            return hour < 4 ? hour : hour + 12;
        }
        else if (meridiem === 'सुबह') {
            return hour;
        }
        else if (meridiem === 'दोपहर') {
            return hour >= 10 ? hour : hour + 12;
        }
        else if (meridiem === 'शाम') {
            return hour + 12;
        }
    },
    meridiem: function (hour) {
        if (hour < 4) {
            return 'रात';
        }
        else if (hour < 10) {
            return 'सुबह';
        }
        else if (hour < 17) {
            return 'दोपहर';
        }
        else if (hour < 20) {
            return 'शाम';
        }
        else {
            return 'रात';
        }
    },
    week: {
        dow: 0,
        doy: 6 // The week that contains Jan 1st is the first week of the year.
    }
};
// moment.js locale configuration
// locale : Hungarian [hu]
// author : Gergely Padányi-Gulyás : https://github.com/fegyi001
var hu = {
    abbr: 'hu',
    months: 'Január_Február_Március_Április_Május_Június_Július_Augusztus_Szeptember_Október_November_December'.split('_'),
    monthsShort: 'Jan_Feb_Márc_Ápr_Máj_Jún_Júl_Aug_Szept_Okt_Nov_Dec'.split('_'),
    weekdays: 'Vasárnap_Hétfő_Kedd_Szerda_Csütörtök_Péntek_Szombat'.split('_'),
    weekdaysShort: 'Vas_Hét_Kedd_Sze_Csüt_Pén_Szo'.split('_'),
    weekdaysMin: 'V_H_K_Sze_Cs_P_Szo'.split('_'),
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'YYYY.MM.DD.',
        LL: 'YYYY. MMMM D.',
        LLL: 'YYYY. MMMM D. H:mm',
        LLLL: 'YYYY. MMMM D., dddd H:mm'
    },
    calendar: {
        sameDay: '[Ma] LT[-kor]',
        nextDay: '[Holnap] LT[-kor]',
        nextWeek: 'dddd [] LT',
        lastDay: '[Tegnap] LT',
        lastWeek: '[Múlt] dddd [] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: '%s múlva',
        past: '%s',
        s: 'néhány másodperce',
        m: 'egy perce',
        mm: '%d perce',
        h: 'egy órája',
        hh: '%d órája',
        d: 'egy napja',
        dd: '%d napja',
        M: 'egy hónapja',
        MM: '%d hónapja',
        y: 'egy éve',
        yy: '%d éve'
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
        dow: 1,
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};
// moment.js locale configuration
// locale : Italian [it]
// author : Lorenzo : https://github.com/aliem
// author: Mattia Larentis: https://github.com/nostalgiaz
var it = {
    abbr: 'it',
    months: 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split('_'),
    monthsShort: 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
    weekdays: 'domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato'.split('_'),
    weekdaysShort: 'dom_lun_mar_mer_gio_ven_sab'.split('_'),
    weekdaysMin: 'do_lu_ma_me_gi_ve_sa'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: function (num) {
        return num + "\u00BA";
    },
    week: {
        dow: 1,
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};
// moment.js locale configuration
// locale : Japanese [ja]
// author : LI Long : https://github.com/baryon
var ja = {
    abbr: 'ja',
    months: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
    monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
    weekdays: '日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日'.split('_'),
    weekdaysShort: '日_月_火_水_木_金_土'.split('_'),
    weekdaysMin: '日_月_火_水_木_金_土'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'YYYY/MM/DD',
        LL: 'YYYY年M月D日',
        LLL: 'YYYY年M月D日 HH:mm',
        LLLL: 'YYYY年M月D日 HH:mm dddd',
        l: 'YYYY/MM/DD',
        ll: 'YYYY年M月D日',
        lll: 'YYYY年M月D日 HH:mm',
        llll: 'YYYY年M月D日 HH:mm dddd'
    },
    meridiemParse: /午前|午後/i,
    isPM: function (input) {
        return input === '午後';
    },
    meridiem: function (hour) {
        return hour < 12 ? '午前' : '午後';
    },
    calendar: {
        sameDay: '[今日] LT',
        nextDay: '[明日] LT',
        nextWeek: '[来週]dddd LT',
        lastDay: '[昨日] LT',
        lastWeek: '[前週]dddd LT',
        sameElse: 'L'
    },
    dayOfMonthOrdinalParse: /\d{1,2}日/,
    ordinal: function (num, period) {
        switch (period) {
            case 'd':
            case 'D':
            case 'DDD':
                return num + "\u65E5";
            default:
                return num.toString();
        }
    },
    relativeTime: {
        future: '%s後',
        past: '%s前',
        s: '数秒',
        m: '1分',
        mm: '%d分',
        h: '1時間',
        hh: '%d時間',
        d: '1日',
        dd: '%d日',
        M: '1ヶ月',
        MM: '%dヶ月',
        y: '1年',
        yy: '%d年'
    }
};
// moment.js locale configuration
// locale : Korean [ko]
// author : Kyungwook, Park : https://github.com/kyungw00k
// author : Jeeeyul Lee <jeeeyul@gmail.com>
var ko = {
    abbr: 'ko',
    months: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
    monthsShort: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
    weekdays: '일요일_월요일_화요일_수요일_목요일_금요일_토요일'.split('_'),
    weekdaysShort: '일_월_화_수_목_금_토'.split('_'),
    weekdaysMin: '일_월_화_수_목_금_토'.split('_'),
    longDateFormat: {
        LT: 'A h:mm',
        LTS: 'A h:mm:ss',
        L: 'YYYY.MM.DD',
        LL: 'YYYY년 MMMM D일',
        LLL: 'YYYY년 MMMM D일 A h:mm',
        LLLL: 'YYYY년 MMMM D일 dddd A h:mm',
        l: 'YYYY.MM.DD',
        ll: 'YYYY년 MMMM D일',
        lll: 'YYYY년 MMMM D일 A h:mm',
        llll: 'YYYY년 MMMM D일 dddd A h:mm'
    },
    calendar: {
        sameDay: '오늘 LT',
        nextDay: '내일 LT',
        nextWeek: 'dddd LT',
        lastDay: '어제 LT',
        lastWeek: '지난주 dddd LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: '%s 후',
        past: '%s 전',
        s: '몇 초',
        ss: '%d초',
        m: '1분',
        mm: '%d분',
        h: '한 시간',
        hh: '%d시간',
        d: '하루',
        dd: '%d일',
        M: '한 달',
        MM: '%d달',
        y: '일 년',
        yy: '%d년'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
    ordinal: function (num, period) {
        switch (period) {
            case 'd':
            case 'D':
            case 'DDD':
                return num + "\uC77C";
            case 'M':
                return num + "\uC6D4";
            case 'w':
            case 'W':
                return num + "\uC8FC";
            default:
                return num.toString(10);
        }
    },
    meridiemParse: /오전|오후/,
    isPM: function (token) {
        return token === '오후';
    },
    meridiem: function (hour) {
        return hour < 12 ? '오전' : '오후';
    }
};
// moment.js locale configuration
// locale : Dutch [nl]
// author : Joris Röling : https://github.com/jorisroling
// author : Jacob Middag : https://github.com/middagj
// const monthsShortWithDots = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_');
var monthsShort$3 = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_');
var monthsParse$2 = [
    /^jan/i,
    /^feb/i,
    /^maart|mrt.?$/i,
    /^apr/i,
    /^mei$/i,
    /^jun[i.]?$/i,
    /^jul[i.]?$/i,
    /^aug/i,
    /^sep/i,
    /^okt/i,
    /^nov/i,
    /^dec/i
];
var monthsRegex$2 = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
var nl = {
    abbr: 'nl',
    months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
    monthsShort: monthsShort$3,
    // monthsShort(date: Date, format: string): string {
    //   if (!date) {
    //     return monthsShortWithDots;
    //   } else if (/-MMM-/.test(format)) {
    //     return monthsShortWithoutDots[getMonth(date)];
    //   } else {
    //     return monthsShortWithDots[getMonth(date)];
    //   }
    // },
    monthsRegex: monthsRegex$2,
    monthsShortRegex: monthsRegex$2,
    monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
    monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
    monthsParse: monthsParse$2,
    longMonthsParse: monthsParse$2,
    shortMonthsParse: monthsParse$2,
    weekdays: 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
    weekdaysShort: 'zo._ma._di._wo._do._vr._za.'.split('_'),
    weekdaysMin: 'zo_ma_di_wo_do_vr_za'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD-MM-YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[vandaag om] LT',
        nextDay: '[morgen om] LT',
        nextWeek: 'dddd [om] LT',
        lastDay: '[gisteren om] LT',
        lastWeek: '[afgelopen] dddd [om] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'over %s',
        past: '%s geleden',
        s: 'een paar seconden',
        m: 'één minuut',
        mm: '%d minuten',
        h: 'één uur',
        hh: '%d uur',
        d: 'één dag',
        dd: '%d dagen',
        M: 'één maand',
        MM: '%d maanden',
        y: 'één jaar',
        yy: '%d jaar'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
    ordinal: function (num) {
        return num + (num === 1 || num === 8 || num >= 20 ? 'ste' : 'de');
    },
    week: {
        dow: 1,
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};
// moment.js locale configuration
// locale : Dutch (Belgium) [nl-be]
// author : Joris Röling : https://github.com/jorisroling
// author : Jacob Middag : https://github.com/middagj
// const monthsShortWithDots = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_');
var monthsShort$4 = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_');
var monthsParse$3 = [
    /^jan/i,
    /^feb/i,
    /^maart|mrt.?$/i,
    /^apr/i,
    /^mei$/i,
    /^jun[i.]?$/i,
    /^jul[i.]?$/i,
    /^aug/i,
    /^sep/i,
    /^okt/i,
    /^nov/i,
    /^dec/i
];
// tslint:disable-next-line
var monthsRegex$3 = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
var nlBe = {
    abbr: 'nl-be',
    months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
    monthsShort: monthsShort$4,
    // monthsShort(date: Date, format: string): string {
    //   if (!date) {
    //     return monthsShortWithDots;
    //   } else if (/-MMM-/.test(format)) {
    //     return monthsShortWithoutDots[getMonth(date)];
    //   } else {
    //     return monthsShortWithDots[getMonth(date)];
    //   }
    // },
    monthsRegex: monthsRegex$3,
    monthsShortRegex: monthsRegex$3,
    monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
    monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
    monthsParse: monthsParse$3,
    longMonthsParse: monthsParse$3,
    shortMonthsParse: monthsParse$3,
    weekdays: 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
    weekdaysShort: 'zo._ma._di._wo._do._vr._za.'.split('_'),
    weekdaysMin: 'zo_ma_di_wo_do_vr_za'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[vandaag om] LT',
        nextDay: '[morgen om] LT',
        nextWeek: 'dddd [om] LT',
        lastDay: '[gisteren om] LT',
        lastWeek: '[afgelopen] dddd [om] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'over %s',
        past: '%s geleden',
        s: 'een paar seconden',
        m: 'één minuut',
        mm: '%d minuten',
        h: 'één uur',
        hh: '%d uur',
        d: 'één dag',
        dd: '%d dagen',
        M: 'één maand',
        MM: '%d maanden',
        y: 'één jaar',
        yy: '%d jaar'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
    ordinal: function (num) {
        var ending = num === 1 || num === 8 || num >= 20 ? 'ste' : 'de';
        return "" + num + ending;
    },
    week: {
        dow: 1,
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};
// moment.js locale configuration
// locale : Polish [pl]
// author : Rafal Hirsz : https://github.com/evoL
var months$1 = 'styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień'.split('_');
// const monthsSubjective = 'stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia'.split('_');
function plural$1(n) {
    return n % 10 < 5 && n % 10 > 1 && ~~(n / 10) % 10 !== 1;
}
function translate$1(num, withoutSuffix, key) {
    var result = num + " ";
    switch (key) {
        case 'm':
            return withoutSuffix ? 'minuta' : 'minutę';
        case 'mm':
            return result + (plural$1(num) ? 'minuty' : 'minut');
        case 'h':
            return withoutSuffix ? 'godzina' : 'godzinę';
        case 'hh':
            return result + (plural$1(num) ? 'godziny' : 'godzin');
        case 'MM':
            return result + (plural$1(num) ? 'miesiące' : 'miesięcy');
        case 'yy':
            return result + (plural$1(num) ? 'lata' : 'lat');
    }
}
var pl = {
    abbr: 'pl',
    months: months$1,
    // months(date: Date, format: string): string {
    //   if (!date) {
    //     return monthsNominative;
    //   } else if (format === '') {
    //     Hack: if format empty we know this is used to generate
    //     RegExp by moment. Give then back both valid forms of months
    //     in RegExp ready format.
    // return `(${monthsSubjective[getMonth(date)]}|${monthsNominative[getMonth(date)]})`;
    // } else if (/D MMMM/.test(format)) {
    //   return monthsSubjective[getMonth(date)];
    // } else {
    //   return monthsNominative[getMonth(date)];
    // }
    // },
    monthsShort: 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru'.split('_'),
    weekdays: 'niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota'.split('_'),
    weekdaysShort: 'ndz_pon_wt_śr_czw_pt_sob'.split('_'),
    weekdaysMin: 'Nd_Pn_Wt_Śr_Cz_Pt_So'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    relativeTime: {
        future: 'za %s',
        past: '%s temu',
        s: 'kilka sekund',
        m: translate$1,
        mm: translate$1,
        h: translate$1,
        hh: translate$1,
        d: '1 dzień',
        dd: '%d dni',
        M: 'miesiąc',
        MM: translate$1,
        y: 'rok',
        yy: translate$1
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: function (num) {
        return num + ".";
    },
    week: {
        dow: 1,
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};
// moment.js locale configuration
// locale : Portuguese (Brazil) [pt-br]
// author : Caio Ribeiro Pereira : https://github.com/caio-ribeiro-pereira
var ptBr = {
    abbr: 'pt-br',
    months: 'janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro'.split('_'),
    monthsShort: 'jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez'.split('_'),
    weekdays: 'Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado'.split('_'),
    weekdaysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
    weekdaysMin: 'Do_2ª_3ª_4ª_5ª_6ª_Sá'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D [de] MMMM [de] YYYY',
        LLL: 'D [de] MMMM [de] YYYY [às] HH:mm',
        LLLL: 'dddd, D [de] MMMM [de] YYYY [às] HH:mm'
    },
    relativeTime: {
        future: 'em %s',
        past: '%s atrás',
        s: 'poucos segundos',
        ss: '%d segundos',
        m: 'um minuto',
        mm: '%d minutos',
        h: 'uma hora',
        hh: '%d horas',
        d: 'um dia',
        dd: '%d dias',
        M: 'um mês',
        MM: '%d meses',
        y: 'um ano',
        yy: '%d anos'
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: function (num) {
        return num + "\u00BA";
    }
};
// moment.js locale configuration
// locale : Swedish [sv]
// author : Jens Alm : https://github.com/ulmus
var sv = {
    abbr: 'sv',
    months: 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'.split('_'),
    monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
    weekdays: 'söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag'.split('_'),
    weekdaysShort: 'sön_mån_tis_ons_tor_fre_lör'.split('_'),
    weekdaysMin: 'sö_må_ti_on_to_fr_lö'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'YYYY-MM-DD',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY [kl.] HH:mm',
        LLLL: 'dddd D MMMM YYYY [kl.] HH:mm',
        lll: 'D MMM YYYY HH:mm',
        llll: 'ddd D MMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[Idag] LT',
        nextDay: '[Imorgon] LT',
        lastDay: '[Igår] LT',
        nextWeek: '[På] dddd LT',
        lastWeek: '[I] dddd[s] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'om %s',
        past: 'för %s sedan',
        s: 'några sekunder',
        m: 'en minut',
        mm: '%d minuter',
        h: 'en timme',
        hh: '%d timmar',
        d: 'en dag',
        dd: '%d dagar',
        M: 'en månad',
        MM: '%d månader',
        y: 'ett år',
        yy: '%d år'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
    ordinal: function (number) {
        var b = number % 10, 
        // tslint:disable-next-line:no-bitwise
        output = (~~(number % 100 / 10) === 1) ? 'e' :
            (b === 1) ? 'a' :
                (b === 2) ? 'a' :
                    (b === 3) ? 'e' : 'e';
        return number + output;
    },
    week: {
        dow: 1,
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};
// moment.js locale configuration
// locale : Russian [ru]
// author : Viktorminator : https://github.com/Viktorminator
// Author : Menelion Elensúle : https://github.com/Oire
// author : Коренберг Марк : https://github.com/socketpair
function plural$2(word, num) {
    var forms$$1 = word.split('_');
    return num % 10 === 1 && num % 100 !== 11
        ? forms$$1[0]
        : num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20)
            ? forms$$1[1]
            : forms$$1[2];
}
function relativeTimeWithPlural(num, withoutSuffix, key) {
    var format = {
        mm: withoutSuffix ? 'минута_минуты_минут' : 'минуту_минуты_минут',
        hh: 'час_часа_часов',
        dd: 'день_дня_дней',
        MM: 'месяц_месяца_месяцев',
        yy: 'год_года_лет'
    };
    if (key === 'm') {
        return withoutSuffix ? 'минута' : 'минуту';
    }
    else {
        return num + " " + plural$2(format[key], +num);
    }
}
var monthsParse$4 = [
    /^янв/i,
    /^фев/i,
    /^мар/i,
    /^апр/i,
    /^ма[йя]/i,
    /^июн/i,
    /^июл/i,
    /^авг/i,
    /^сен/i,
    /^окт/i,
    /^ноя/i,
    /^дек/i
];
// http://new.gramota.ru/spravka/rules/139-prop : § 103
// Сокращения месяцев: http://new.gramota.ru/spravka/buro/search-answer?s=242637
// CLDR data:          http://www.unicode.org/cldr/charts/28/summary/ru.html#1753
var ru = {
    abbr: 'ru',
    months: {
        format: 'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'.split('_'),
        standalone: 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_')
    },
    monthsShort: {
        // по CLDR именно "июл." и "июн.", но какой смысл менять букву на точку ?
        format: 'янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.'.split('_'),
        standalone: 'янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.'.split('_')
    },
    weekdays: {
        standalone: 'воскресенье_понедельник_вторник_среда_четверг_пятница_суббота'.split('_'),
        format: 'воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу'.split('_'),
        isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
    },
    weekdaysShort: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
    weekdaysMin: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
    monthsParse: monthsParse$4,
    longMonthsParse: monthsParse$4,
    shortMonthsParse: monthsParse$4,
    // полные названия с падежами, по три буквы, для некоторых, по 4 буквы, сокращения с точкой и без точки
    monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
    // копия предыдущего
    monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
    // полные названия с падежами
    monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
    // Выражение, которое соотвествует только сокращённым формам
    monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D MMMM YYYY г.',
        LLL: 'D MMMM YYYY г., HH:mm',
        LLLL: 'dddd, D MMMM YYYY г., HH:mm'
    },
    relativeTime: {
        future: 'через %s',
        past: '%s назад',
        s: 'несколько секунд',
        m: relativeTimeWithPlural,
        mm: relativeTimeWithPlural,
        h: 'час',
        hh: relativeTimeWithPlural,
        d: 'день',
        dd: relativeTimeWithPlural,
        M: 'месяц',
        MM: relativeTimeWithPlural,
        y: 'год',
        yy: relativeTimeWithPlural
    },
    meridiemParse: /ночи|утра|дня|вечера/i,
    isPM: function (input) {
        return /^(дня|вечера)$/.test(input);
    },
    meridiem: function (hour) {
        if (hour < 4) {
            return 'ночи';
        }
        else if (hour < 12) {
            return 'утра';
        }
        else if (hour < 17) {
            return 'дня';
        }
        else {
            return 'вечера';
        }
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
    ordinal: function (num, period) {
        switch (period) {
            case 'M':
            case 'd':
            case 'DDD':
                return num + "-\u0439";
            case 'D':
                return num + "-\u0433\u043E";
            case 'w':
            case 'W':
                return num + "-\u044F";
            default:
                return num.toString(10);
        }
    },
    week: {
        dow: 1,
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};
// moment.js locale configuration
// locale : Chinese (China) [zh-cn]
// author : suupic : https://github.com/suupic
// author : Zeno Zeng : https://github.com/zenozeng
var zhCn = {
    abbr: 'zh-cn',
    months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
    monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
    weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
    weekdaysShort: '周日_周一_周二_周三_周四_周五_周六'.split('_'),
    weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'YYYY年MMMD日',
        LL: 'YYYY年MMMD日',
        LLL: 'YYYY年MMMD日Ah点mm分',
        LLLL: 'YYYY年MMMD日ddddAh点mm分',
        l: 'YYYY年MMMD日',
        ll: 'YYYY年MMMD日',
        lll: 'YYYY年MMMD日 HH:mm',
        llll: 'YYYY年MMMD日dddd HH:mm'
    },
    meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
    meridiemHour: function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === '凌晨' || meridiem === '早上' || meridiem === '上午') {
            return hour;
        }
        else if (meridiem === '下午' || meridiem === '晚上') {
            return hour + 12;
        }
        else {
            // '中午'
            return hour >= 11 ? hour : hour + 12;
        }
    },
    meridiem: function (hour, minute) {
        var hm = hour * 100 + minute;
        if (hm < 600) {
            return '凌晨';
        }
        else if (hm < 900) {
            return '早上';
        }
        else if (hm < 1130) {
            return '上午';
        }
        else if (hm < 1230) {
            return '中午';
        }
        else if (hm < 1800) {
            return '下午';
        }
        else {
            return '晚上';
        }
    },
    calendar: {
        sameDay: '[今天]LT',
        nextDay: '[明天]LT',
        nextWeek: '[下]ddddLT',
        lastDay: '[昨天]LT',
        lastWeek: '[上]ddddLT',
        sameElse: 'L'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
    ordinal: function (num, period) {
        switch (period) {
            case 'd':
            case 'D':
            case 'DDD':
                return num + "\u65E5";
            case 'M':
                return num + "\u6708";
            case 'w':
            case 'W':
                return num + "\u5468";
            default:
                return num.toString(10);
        }
    },
    relativeTime: {
        future: '%s内',
        past: '%s前',
        s: '几秒',
        m: '1 分钟',
        mm: '%d 分钟',
        h: '1 小时',
        hh: '%d 小时',
        d: '1 天',
        dd: '%d 天',
        M: '1 个月',
        MM: '%d 个月',
        y: '1 年',
        yy: '%d 年'
    },
    week: {
        // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
        dow: 1,
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};
// moment.js locale configuration
// locale : Turkish [tr]
// author : Umit Gündüz : https://github.com/umitgunduz
var tr = {
    abbr: 'tr',
    months: 'Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık'.split('_'),
    monthsShort: 'Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara'.split('_'),
    weekdays: 'Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi'.split('_'),
    weekdaysShort: 'Paz_Pts_Sal_Çar_Per_Cum_Cts'.split('_'),
    weekdaysMin: 'Pz_Pt_Sa_Ça_Pe_Cu_Ct'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[bugün saat] LT',
        nextDay: '[yarın saat] LT',
        nextWeek: '[haftaya] dddd [saat] LT',
        lastDay: '[dün] LT',
        lastWeek: '[geçen hafta] dddd [saat] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: '%s sonra',
        past: '%s önce',
        s: 'birkaç saniye',
        m: 'bir dakika',
        mm: '%d dakika',
        h: 'bir saat',
        hh: '%d saat',
        d: 'bir gün',
        dd: '%d gün',
        M: 'bir ay',
        MM: '%d ay',
        y: 'bir yıl',
        yy: '%d yıl'
    },
    dayOfMonthOrdinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,
    ordinal: function (num, token) {
        return num + ".";
    },
    week: {
        dow: 1,
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};
// moment.js locale configuration
// locale : Hebrew (Israel) [he]
// author : Matan Sar-Shalom : https://github.com/msarsha
var he = {
    abbr: 'he',
    months: 'ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר'.split('_'),
    monthsShort: 'ינו׳_פבר׳_מרץ_אפר׳_מאי_יונ׳_יול׳_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳'.split('_'),
    weekdays: 'ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת'.split('_'),
    weekdaysShort: 'א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳'.split('_'),
    weekdaysMin: 'א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[היום ב] LT',
        nextDay: '[מחר ב] LT',
        nextWeek: 'dddd [ב] LT',
        lastDay: '[אתמול ב] LT',
        lastWeek: '[שבוע שעבר] dddd [ב] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'בעוד %s',
        past: '%s לפני',
        s: 'מספר שניות',
        m: 'דקה',
        mm: '%d דקות',
        h: 'שעה',
        hh: '%d שעות',
        d: 'a יום',
        dd: '%d ימים',
        M: 'a חודש',
        MM: '%d חודשים',
        y: 'a שנה',
        yy: '%d שנים'
    },
    week: {
        dow: 0,
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};
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
var TourAnchorNgxBootstrapDirective = /** @class */ (function (_super) {
    __extends(TourAnchorNgxBootstrapDirective, _super);
    /**
     * @param {?} tourService
     * @param {?} tourStepTemplate
     * @param {?} _elementRef
     * @param {?} _renderer
     * @param {?} viewContainerRef
     * @param {?} _config
     * @param {?} _cis
     */
    function TourAnchorNgxBootstrapDirective(tourService, tourStepTemplate, _elementRef, _renderer, viewContainerRef, _config, _cis) {
        var _this = _super.call(this, _elementRef, _renderer, viewContainerRef, _config, _cis) || this;
        _this.tourService = tourService;
        _this.tourStepTemplate = tourStepTemplate;
        _this.element = _elementRef;
        return _this;
    }
    /**
     * @return {?}
     */
    TourAnchorNgxBootstrapDirective.prototype.ngOnInit = function () {
        this.tourService.register(this.tourAnchor, this);
    };
    /**
     * @return {?}
     */
    TourAnchorNgxBootstrapDirective.prototype.ngOnDestroy = function () {
        this.tourService.unregister(this.tourAnchor);
    };
    /**
     * @param {?} step
     * @return {?}
     */
    TourAnchorNgxBootstrapDirective.prototype.showTourStep = function (step) {
        this.popover = this.tourStepTemplate.template;
        this.popoverContext = { step: step };
        this.popoverTitle = step.title;
        this.container = 'body';
        this.containerClass = 'ngx-bootstrap';
        this.placement = step.placement || 'top';
        this.show();
        if (!step.preventScrolling) {
            if (!__WEBPACK_IMPORTED_MODULE_20_withinviewport___default()(this.element.nativeElement, { sides: 'bottom' })) {
                ((this.element.nativeElement)).scrollIntoView(false);
            }
            else if (!__WEBPACK_IMPORTED_MODULE_20_withinviewport___default()(this.element.nativeElement, { sides: 'left top right' })) {
                ((this.element.nativeElement)).scrollIntoView(true);
            }
        }
    };
    /**
     * @return {?}
     */
    TourAnchorNgxBootstrapDirective.prototype.hideTourStep = function () {
        this.hide();
    };
    return TourAnchorNgxBootstrapDirective;
}(PopoverDirective));
TourAnchorNgxBootstrapDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{
                selector: '[tourAnchor]',
            },] },
];
/**
 * @nocollapse
 */
TourAnchorNgxBootstrapDirective.ctorParameters = function () { return [
    { type: NgxbTourService, },
    { type: TourStepTemplateService, },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Renderer2 */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewContainerRef */], },
    { type: PopoverConfig, },
    { type: ComponentLoaderFactory, },
]; };
TourAnchorNgxBootstrapDirective.propDecorators = {
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
    { type: NgxbTourService, },
]; };
TourStepTemplateComponent.propDecorators = {
    'defaultTourStepTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */], args: ['tourStep', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* TemplateRef */] },] },],
    'stepTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ContentChild */], args: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* TemplateRef */],] },],
};
var TourNgxBootstrapModule = /** @class */ (function () {
    function TourNgxBootstrapModule() {
    }
    /**
     * @return {?}
     */
    TourNgxBootstrapModule.forRoot = function () {
        return {
            ngModule: TourNgxBootstrapModule,
            providers: [
                TourStepTemplateService
            ].concat(TourModule.forRoot().providers, [
                NgxbTourService,
            ]),
        };
    };
    return TourNgxBootstrapModule;
}());
TourNgxBootstrapModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */], args: [{
                declarations: [TourAnchorNgxBootstrapDirective, TourStepTemplateComponent],
                exports: [TourAnchorNgxBootstrapDirective, TourStepTemplateComponent],
                imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], PopoverModule.forRoot()],
            },] },
];
/**
 * @nocollapse
 */
TourNgxBootstrapModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=ngx-tour-ngx-bootstrap.es5.js.map


/***/ }),

/***/ "../../../../../dist/ngx-tour-ngx-bootstrap/node_modules/withinviewport/withinviewport.js":
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

/***/ "../../../../../src/app/ngx-bootstrap/docs.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>About</h2>\n\n<p>This is a product tour library built with Angular (2+). It's inspired by <a tourAnchor=\"angular-ui-tour\" href=\"http://benmarch.github.io/angular-ui-tour\">angular-ui-tour</a>.</p>\n\n<p><code>TourNgxBootstrapModule</code> is an implementation of the tour UI that uses <a href=\"https://github.com/valor-software/ngx-bootstrap\" rel=\"nofollow\" target=\"_blank\">NgxBootstrap</a> popovers to display tour steps.</p>\n\n<h2 tourAnchor=\"installation\">Installation</h2>\n<ol>\n  <li><code>npm install ngx-tour-ngx-bootstrap ngx-bootstrap</code></li>\n  <li>Import <code>TourNgxBootstrapModule.forRoot()</code> into your app module</li>\n  <li>Make sure <code>RouterModule</code> is imported in your app module</li>\n  <li>Include bootstrap 4 CSS somehow - i.e. in your <code>index.html</code> add this line:<br>\n      <code>\n        &lt;link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css\">\n      </code>\n  </li>\n  <li>Or for Bootstrap 3:</li><br>\n  <code>\n    &lt;link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n  </code>\n</ol>\n\n<h2 tourAnchor=\"usage\">Usage</h2>\n<ol>\n  <li>Add <code>&lt;tour-step-template&gt;&lt;/tour-step-template&gt;</code> to your root app component</li>\n  <li>\n    Define anchor points for the tour steps by adding the <code>tourAnchor</code> directive throughout your app.\n    <pre><code>&lt;div tourAnchor=\"some.anchor.id\"&gt;...&lt;/div&gt;</code></pre>\n  </li>\n  <li>\n    Define your tour steps using <code>tourService.initialize(steps)</code>\n    <pre>\nthis.tourService.initialize([{{ '{' }}\n  anchorId: 'some.anchor.id',\n  content: 'Some content',\n  title: 'First',\n}, {{ '{' }}\n  anchorId: 'another.anchor.id',\n  content: 'Other content',\n  title: 'Second',\n}]);</pre>\n  </li>\n  <li>Start the tour with <code tourAnchor=\"tourService.start\">tourService.start()</code></li>\n  <li>Check out the <a href=\"https://github.com/isaacplmann/ngx-tour/tree/master/src/app/ngx-bootstrap\">demo source code</a> for an example.</li>\n</ol>\n\n<h2>TourService</h2>\n<p>The <code>TourService</code> controls the tour. Some key functions include:</p>\n<dl>\n  <dt>start()</dt>\n  <dd>Starts the tour</dd>\n  <dt>startAt(stepId: number | string)</dt>\n  <dd>Start the tour at the step with stepId or at the specified index</dd>\n  <dt>end()</dt>\n  <dd>Ends the tour</dd>\n  <dt>pause()</dt>\n  <dd>Pauses the tour</dd>\n  <dt>resume()</dt>\n  <dd>Resumes the tour</dd>\n  <dt>next()</dt>\n  <dd>Goes to the next step</dd>\n  <dt>prev()</dt>\n  <dd>Goes to the previous step</dd>\n</dl>\n\n<h2>Step Configuration</h2>\n<p>Each step can have the following properties.</p>\n<table class=\"table\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Type</th>\n      <th>Default</th>\n      <th>Description</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>stepId</td>\n      <td>string</td>\n      <td>\"\"</td>\n      <td>A unique identifier for the step</td>\n    </tr>\n    <tr tourAnchor=\"config.anchorId\">\n      <td>anchorId</td>\n      <td>string</td>\n      <td>required</td>\n      <td>The anchor to which the step will be attached</td>\n    </tr>\n    <tr>\n      <td>title</td>\n      <td>string</td>\n      <td>\"\"</td>\n      <td>The title of the tour step</td>\n    </tr>\n    <tr>\n      <td>content</td>\n      <td>string</td>\n      <td>\"\"</td>\n      <td>The content text of the tour step</td>\n    </tr>\n    <tr tourAnchor=\"config.route\">\n      <td>route</td>\n      <td>string | UrlSegment[]</td>\n      <td>undefined</td>\n      <td>\n        The route to which the tour should navigate before attempting to show this tour step.\n        If undefined, no navigation is attempted.\n      </td>\n    </tr>\n    <tr tourAnchor=\"config.nextStep\">\n      <td>nextStep</td>\n      <td>number | string</td>\n      <td>undefined</td>\n      <td>The step index or stepId of the next step.  If undefined, the next step in the steps array is used.</td>\n    </tr>\n    <tr>\n      <td>prevStep</td>\n      <td>number | string</td>\n      <td>undefined</td>\n      <td>The step index or stepId of the previous step.  If undefined, the previous step in the steps array is used.</td>\n    </tr>\n    <tr>\n      <td>placement</td>\n      <td>'top' | 'bottom' | 'left' | 'right' | 'auto'</td>\n      <td><span tourAnchor=\"config.placement.default\">'top'</span></td>\n      <td>\n        Placement of a popover.\n        See the <a href=\"https://valor-software.com/ngx-bootstrap/index-bs4.html#/popover#popover-directive\">ngx-bootstrap docs</a>.\n      </td>\n    </tr>\n    <tr>\n      <td>preventScrolling</td>\n      <td>boolean</td>\n      <td>false</td>\n      <td>\n        Tour steps automatically scroll to the middle of the screen, if they are off the screen when shown.\n        Setting this value to true will disable the scroll behavior.\n      </td>\n    </tr>\n  </tbody>\n</table>\n\n<h2>Defaults</h2>\n<p>You can set default values in the <code>TourService.initialize</code> function.</p>\n<pre>\nthis.tourService.initialize(steps, {{ '{' }}\n  route: '',\n  placement: 'left',\n  preventScrolling: true,\n});\n</pre>\n<p>Any value explicitly defined in a step will override the default value.</p>\n\n<h2 tourAnchor=\"hotkeys\">Hotkeys</h2>\n<p>\n  Hotkeys are provided using Angular's <code>@HostListener</code> decorator.  Hotkeys are enabled when the tour starts and disabled when the tour ends.\n</p>\n<ul>\n  <li><strong>left arrow</strong><span> - previous step</span></li>\n  <li><strong>right arrow</strong><span> - next step</span></li>\n  <li><strong>esc</strong><span> - end tour</span></li>\n</ul>\n<p>\n  You can disable hotkeys by calling <code>tourService.disableHotkeys()</code> or re-enable with <code>tourService.enableHotkeys()</code>\n</p>\n\n<h2 tourAnchor=\"events\">Event Observables</h2>\n<p>The <code>TourService</code> emits events that can be subscribed to like this:</p>\n<pre>\nthis.tourService.initialize$.subscribe((steps: IStepOption[]) => {{ '{' }}\n  console.log('tour configured with these steps:', steps);\n});\n</pre>\n<table class=\"table\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Payload</th>\n      <th>Emitted When</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>stepShow$</td>\n      <td>IStepOption</td>\n      <td>A step is shown</td>\n    </tr>\n    <tr>\n      <td>stepHide$</td>\n      <td>IStepOption</td>\n      <td>A step is hidden</td>\n    </tr>\n    <tr>\n      <td>initialize$</td>\n      <td>IStepOption[]</td>\n      <td>The tour is configured with a set of steps</td>\n    </tr>\n    <tr>\n      <td>start$</td>\n      <td>IStepOption</td>\n      <td>The tour begins</td>\n    </tr>\n    <tr>\n      <td>end$</td>\n      <td>any</td>\n      <td>The tour ends</td>\n    </tr>\n    <tr>\n      <td>pause$</td>\n      <td>IStepOption</td>\n      <td>The tour is paused</td>\n    </tr>\n    <tr>\n      <td>resume$</td>\n      <td>IStepOption</td>\n      <td>The tour resumes</td>\n    </tr>\n    <tr>\n      <td>anchorRegister$</td>\n      <td>string</td>\n      <td>An anchor is registered with the tour</td>\n    </tr>\n    <tr>\n      <td>anchorUnregister$</td>\n      <td>string</td>\n      <td>An anchor is unregistered from the tour</td>\n    </tr>\n  </tbody>\n</table>\n\n<h2 tourAnchor=\"template\">Custom template</h2>\n<p>\n  You can also customize the tour step template by providing an <code>&lt;ng-template let-step=\"step\" &gt;</code> inside the <code>&lt;tour-step-template&gt;</code>\n</p>\n<p>\n  The default template is equivalent to this:\n</p>\n<pre><code>&lt;tour-step-template&gt;\n  &lt;ng-template let-step=\"step\"&gt;\n    &lt;p class=\"tour-step-content\"&gt;{{ '{{' }}step?.content}}&lt;/p&gt;\n    &lt;div class=\"tour-step-navigation\"&gt;\n      &lt;button *ngIf=\"tourService.hasPrev(step)\" class=\"btn btn-sm btn-default\" (click)=\"tourService.prev()\"&gt;« Prev&lt;/button&gt;\n      &lt;button *ngIf=\"tourService.hasNext(step)\" class=\"btn btn-sm btn-default\" (click)=\"tourService.next()\"&gt;Next »&lt;/button&gt;\n      &lt;button class=\"btn btn-sm btn-default\" (click)=\"tourService.end()\"&gt;End&lt;/button&gt;\n    &lt;/div&gt;\n  &lt;/ng-template&gt;\n&lt;/tour-step-template&gt;\n</code></pre>\n"

/***/ }),

/***/ "../../../../../src/app/ngx-bootstrap/docs.component.ts":
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
            template: __webpack_require__("../../../../../src/app/ngx-bootstrap/docs.component.html"),
        })
    ], DocsComponent);
    return DocsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/ngx-bootstrap/ngx-bootstrap.component.html":
/***/ (function(module, exports) {

module.exports = "<a href=\"https://github.com/isaacplmann/ngx-tour\" rel=\"nofollow\" target=\"_blank\" class=\"btn btn-default\">View on GitHub</a>\n<a style=\"cursor: pointer\" (click)=\"tourService.toggle()\" class=\"btn btn-primary\" tourAnchor=\"start.tour\">Start Demo Tour</a>\n\n<router-outlet></router-outlet>\n<tour-step-template></tour-step-template>\n"

/***/ }),

/***/ "../../../../../src/app/ngx-bootstrap/ngx-bootstrap.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgxBootstrapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ngx_tour_ngx_bootstrap__ = __webpack_require__("../../../../../dist/ngx-tour-ngx-bootstrap/ngx-tour-ngx-bootstrap.es5.js");
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


var NgxBootstrapComponent = /** @class */ (function () {
    function NgxBootstrapComponent(tourService) {
        this.tourService = tourService;
        this.tourService.initialize([{
                anchorId: 'start.tour',
                content: 'Welcome to the Ngx-Tour tour!',
                placement: 'right',
                title: 'Welcome',
            }, {
                anchorId: 'angular-ui-tour',
                content: 'Thanks to angular-ui-tour for the inspiration for the library',
                placement: 'bottom',
                title: 'angular-ui-tour',
            }, {
                anchorId: 'usage',
                content: '...then use it.',
                placement: 'right',
                title: 'Usage',
            }, {
                anchorId: 'tourService.start',
                content: 'Don\'t forget to actually start the tour.',
                placement: 'top',
                title: 'Start the tour',
            }, {
                anchorId: 'config.anchorId',
                content: 'Every step needs an anchor.',
                title: 'Anchor',
            }, {
                anchorId: 'config.route',
                content: 'Tours can span multiple routes. No placement.',
                title: 'Route',
            }, {
                anchorId: 'another.route',
                content: 'Like this!',
                route: 'ngx-bootstrap/other',
                title: 'Another Route',
            }, {
                anchorId: 'config.route',
                content: 'And then back again.',
                placement: 'bottom',
                title: 'Route Return',
            }, {
                anchorId: 'config.placement.default',
                content: 'Steps can be positioned around an anchor. You can even have multiple steps use the same anchor.',
                title: 'No Placement',
            }, {
                anchorId: 'config.placement.default',
                content: 'Sliiide to the left.',
                placement: 'left',
                title: 'Left Placement',
            }, {
                anchorId: 'config.placement.default',
                content: 'Sliiide to the right.',
                placement: 'right',
                title: 'Right Placement',
            }, {
                anchorId: 'config.placement.default',
                content: 'Take it back now y\'all.  One hop this time.',
                placement: 'bottom',
                title: 'Bottom Placement',
            }, {
                anchorId: 'hotkeys',
                content: 'Try using the hotkeys to navigate through the tour.',
                title: 'Hotkeys',
            }, {
                anchorId: 'events',
                content: 'You can subscribe to events',
                title: 'Events',
            }], {
            route: 'ngx-bootstrap',
        });
        this.tourService.start();
    }
    NgxBootstrapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            // tslint:disable-next-line:component-selector
            selector: 'ngx-bootstrap-route',
            template: __webpack_require__("../../../../../src/app/ngx-bootstrap/ngx-bootstrap.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ngx_tour_ngx_bootstrap__["b" /* TourService */]])
    ], NgxBootstrapComponent);
    return NgxBootstrapComponent;
}());



/***/ }),

/***/ "../../../../../src/app/ngx-bootstrap/ngx-bootstrap.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxBootstrapModule", function() { return NgxBootstrapModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_tour_ngx_bootstrap__ = __webpack_require__("../../../../../dist/ngx-tour-ngx-bootstrap/ngx-tour-ngx-bootstrap.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__docs_component__ = __webpack_require__("../../../../../src/app/ngx-bootstrap/docs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_bootstrap_component__ = __webpack_require__("../../../../../src/app/ngx-bootstrap/ngx-bootstrap.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__other_route_component__ = __webpack_require__("../../../../../src/app/ngx-bootstrap/other-route.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var NgxBootstrapModule = /** @class */ (function () {
    function NgxBootstrapModule() {
    }
    NgxBootstrapModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_5__ngx_bootstrap_component__["a" /* NgxBootstrapComponent */], __WEBPACK_IMPORTED_MODULE_4__docs_component__["a" /* DocsComponent */], __WEBPACK_IMPORTED_MODULE_6__other_route_component__["a" /* OtherRouteComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild([{
                        component: __WEBPACK_IMPORTED_MODULE_5__ngx_bootstrap_component__["a" /* NgxBootstrapComponent */],
                        path: '',
                        children: [{
                                component: __WEBPACK_IMPORTED_MODULE_4__docs_component__["a" /* DocsComponent */],
                                path: '',
                            }, {
                                component: __WEBPACK_IMPORTED_MODULE_6__other_route_component__["a" /* OtherRouteComponent */],
                                path: 'other',
                            }]
                    }]),
                __WEBPACK_IMPORTED_MODULE_3_ngx_tour_ngx_bootstrap__["a" /* TourNgxBootstrapModule */].forRoot(),
            ],
        })
    ], NgxBootstrapModule);
    return NgxBootstrapModule;
}());



/***/ }),

/***/ "../../../../../src/app/ngx-bootstrap/other-route.component.ts":
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

/***/ "../../../../rxjs/_esm5/add/observable/from.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_from__ = __webpack_require__("../../../../rxjs/_esm5/observable/from.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_from PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].from = __WEBPACK_IMPORTED_MODULE_1__observable_from__["a" /* from */];
//# sourceMappingURL=from.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/debounceTime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/operator/debounceTime.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_debounceTime PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.debounceTime = __WEBPACK_IMPORTED_MODULE_1__operator_debounceTime__["a" /* debounceTime */];
//# sourceMappingURL=debounceTime.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/map.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_map__ = __webpack_require__("../../../../rxjs/_esm5/operator/map.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_map PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.map = __WEBPACK_IMPORTED_MODULE_1__operator_map__["a" /* map */];
//# sourceMappingURL=map.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/mergeMap.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/operator/mergeMap.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_mergeMap PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.mergeMap = __WEBPACK_IMPORTED_MODULE_1__operator_mergeMap__["a" /* mergeMap */];
__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.flatMap = __WEBPACK_IMPORTED_MODULE_1__operator_mergeMap__["a" /* mergeMap */];
//# sourceMappingURL=mergeMap.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/toArray.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_toArray__ = __webpack_require__("../../../../rxjs/_esm5/operator/toArray.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_toArray PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.toArray = __WEBPACK_IMPORTED_MODULE_1__operator_toArray__["a" /* toArray */];
//# sourceMappingURL=toArray.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/debounceTime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = debounceTime;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scheduler_async__ = __webpack_require__("../../../../rxjs/_esm5/scheduler/async.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operators_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/operators/debounceTime.js");
/** PURE_IMPORTS_START .._scheduler_async,.._operators_debounceTime PURE_IMPORTS_END */


/**
 * Emits a value from the source Observable only after a particular time span
 * has passed without another source emission.
 *
 * <span class="informal">It's like {@link delay}, but passes only the most
 * recent value from each burst of emissions.</span>
 *
 * <img src="./img/debounceTime.png" width="100%">
 *
 * `debounceTime` delays values emitted by the source Observable, but drops
 * previous pending delayed emissions if a new value arrives on the source
 * Observable. This operator keeps track of the most recent value from the
 * source Observable, and emits that only when `dueTime` enough time has passed
 * without any other value appearing on the source Observable. If a new value
 * appears before `dueTime` silence occurs, the previous value will be dropped
 * and will not be emitted on the output Observable.
 *
 * This is a rate-limiting operator, because it is impossible for more than one
 * value to be emitted in any time window of duration `dueTime`, but it is also
 * a delay-like operator since output emissions do not occur at the same time as
 * they did on the source Observable. Optionally takes a {@link IScheduler} for
 * managing timers.
 *
 * @example <caption>Emit the most recent click after a burst of clicks</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.debounceTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounce}
 * @see {@link delay}
 * @see {@link sampleTime}
 * @see {@link throttleTime}
 *
 * @param {number} dueTime The timeout duration in milliseconds (or the time
 * unit determined internally by the optional `scheduler`) for the window of
 * time required to wait for emission silence before emitting the most recent
 * source value.
 * @param {Scheduler} [scheduler=async] The {@link IScheduler} to use for
 * managing the timers that handle the timeout for each value.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by the specified `dueTime`, and may drop some values if they occur
 * too frequently.
 * @method debounceTime
 * @owner Observable
 */
function debounceTime(dueTime, scheduler) {
    if (scheduler === void 0) {
        scheduler = __WEBPACK_IMPORTED_MODULE_0__scheduler_async__["a" /* async */];
    }
    return Object(__WEBPACK_IMPORTED_MODULE_1__operators_debounceTime__["a" /* debounceTime */])(dueTime, scheduler)(this);
}
//# sourceMappingURL=debounceTime.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/distinctUntilChanged.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = distinctUntilChanged;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/operators/distinctUntilChanged.js");
/** PURE_IMPORTS_START .._operators_distinctUntilChanged PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from the previous item.
 *
 * If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
 *
 * If a comparator function is not provided, an equality check is used by default.
 *
 * @example <caption>A simple example with numbers</caption>
 * Observable.of(1, 1, 2, 2, 2, 1, 1, 2, 3, 3, 4)
 *   .distinctUntilChanged()
 *   .subscribe(x => console.log(x)); // 1, 2, 1, 2, 3, 4
 *
 * @example <caption>An example using a compare function</caption>
 * interface Person {
 *    age: number,
 *    name: string
 * }
 *
 * Observable.of<Person>(
 *     { age: 4, name: 'Foo'},
 *     { age: 7, name: 'Bar'},
 *     { age: 5, name: 'Foo'})
 *     { age: 6, name: 'Foo'})
 *     .distinctUntilChanged((p: Person, q: Person) => p.name === q.name)
 *     .subscribe(x => console.log(x));
 *
 * // displays:
 * // { age: 4, name: 'Foo' }
 * // { age: 7, name: 'Bar' }
 * // { age: 5, name: 'Foo' }
 *
 * @see {@link distinct}
 * @see {@link distinctUntilKeyChanged}
 *
 * @param {function} [compare] Optional comparison function called to test if an item is distinct from the previous item in the source.
 * @return {Observable} An Observable that emits items from the source Observable with distinct values.
 * @method distinctUntilChanged
 * @owner Observable
 */
function distinctUntilChanged(compare, keySelector) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_distinctUntilChanged__["a" /* distinctUntilChanged */])(compare, keySelector)(this);
}
//# sourceMappingURL=distinctUntilChanged.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/observeOn.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = observeOn;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_observeOn__ = __webpack_require__("../../../../rxjs/_esm5/operators/observeOn.js");
/** PURE_IMPORTS_START .._operators_observeOn PURE_IMPORTS_END */

/**
 *
 * Re-emits all notifications from source Observable with specified scheduler.
 *
 * <span class="informal">Ensure a specific scheduler is used, from outside of an Observable.</span>
 *
 * `observeOn` is an operator that accepts a scheduler as a first parameter, which will be used to reschedule
 * notifications emitted by the source Observable. It might be useful, if you do not have control over
 * internal scheduler of a given Observable, but want to control when its values are emitted nevertheless.
 *
 * Returned Observable emits the same notifications (nexted values, complete and error events) as the source Observable,
 * but rescheduled with provided scheduler. Note that this doesn't mean that source Observables internal
 * scheduler will be replaced in any way. Original scheduler still will be used, but when the source Observable emits
 * notification, it will be immediately scheduled again - this time with scheduler passed to `observeOn`.
 * An anti-pattern would be calling `observeOn` on Observable that emits lots of values synchronously, to split
 * that emissions into asynchronous chunks. For this to happen, scheduler would have to be passed into the source
 * Observable directly (usually into the operator that creates it). `observeOn` simply delays notifications a
 * little bit more, to ensure that they are emitted at expected moments.
 *
 * As a matter of fact, `observeOn` accepts second parameter, which specifies in milliseconds with what delay notifications
 * will be emitted. The main difference between {@link delay} operator and `observeOn` is that `observeOn`
 * will delay all notifications - including error notifications - while `delay` will pass through error
 * from source Observable immediately when it is emitted. In general it is highly recommended to use `delay` operator
 * for any kind of delaying of values in the stream, while using `observeOn` to specify which scheduler should be used
 * for notification emissions in general.
 *
 * @example <caption>Ensure values in subscribe are called just before browser repaint.</caption>
 * const intervals = Rx.Observable.interval(10); // Intervals are scheduled
 *                                               // with async scheduler by default...
 *
 * intervals
 * .observeOn(Rx.Scheduler.animationFrame)       // ...but we will observe on animationFrame
 * .subscribe(val => {                           // scheduler to ensure smooth animation.
 *   someDiv.style.height = val + 'px';
 * });
 *
 * @see {@link delay}
 *
 * @param {IScheduler} scheduler Scheduler that will be used to reschedule notifications from source Observable.
 * @param {number} [delay] Number of milliseconds that states with what delay every notification should be rescheduled.
 * @return {Observable<T>} Observable that emits the same notifications as the source Observable,
 * but with provided scheduler.
 *
 * @method observeOn
 * @owner Observable
 */
function observeOn(scheduler, delay) {
    if (delay === void 0) {
        delay = 0;
    }
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_observeOn__["b" /* observeOn */])(scheduler, delay)(this);
}
//# sourceMappingURL=observeOn.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/scan.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = scan;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_scan__ = __webpack_require__("../../../../rxjs/_esm5/operators/scan.js");
/** PURE_IMPORTS_START .._operators_scan PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Applies an accumulator function over the source Observable, and returns each
 * intermediate result, with an optional seed value.
 *
 * <span class="informal">It's like {@link reduce}, but emits the current
 * accumulation whenever the source emits a value.</span>
 *
 * <img src="./img/scan.png" width="100%">
 *
 * Combines together all values emitted on the source, using an accumulator
 * function that knows how to join a new source value into the accumulation from
 * the past. Is similar to {@link reduce}, but emits the intermediate
 * accumulations.
 *
 * Returns an Observable that applies a specified `accumulator` function to each
 * item emitted by the source Observable. If a `seed` value is specified, then
 * that value will be used as the initial value for the accumulator. If no seed
 * value is specified, the first item of the source is used as the seed.
 *
 * @example <caption>Count the number of click events</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var ones = clicks.mapTo(1);
 * var seed = 0;
 * var count = ones.scan((acc, one) => acc + one, seed);
 * count.subscribe(x => console.log(x));
 *
 * @see {@link expand}
 * @see {@link mergeScan}
 * @see {@link reduce}
 *
 * @param {function(acc: R, value: T, index: number): R} accumulator
 * The accumulator function called on each source value.
 * @param {T|R} [seed] The initial accumulation value.
 * @return {Observable<R>} An observable of the accumulated values.
 * @method scan
 * @owner Observable
 */
function scan(accumulator, seed) {
    if (arguments.length >= 2) {
        return Object(__WEBPACK_IMPORTED_MODULE_0__operators_scan__["a" /* scan */])(accumulator, seed)(this);
    }
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_scan__["a" /* scan */])(accumulator)(this);
}
//# sourceMappingURL=scan.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/toArray.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = toArray;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_toArray__ = __webpack_require__("../../../../rxjs/_esm5/operators/toArray.js");
/** PURE_IMPORTS_START .._operators_toArray PURE_IMPORTS_END */

/**
 * Collects all source emissions and emits them as an array when the source completes.
 *
 * <span class="informal">Get all values inside an array when the source completes</span>
 *
 * <img src="./img/toArray.png" width="100%">
 *
 * `toArray` will wait until the source Observable completes
 * before emitting the array containing all emissions.
 * When the source Observable errors no array will be emitted.
 *
 * @example <caption>Create array from input</caption>
 * const input = Rx.Observable.interval(100).take(4);
 *
 * input.toArray()
 *   .subscribe(arr => console.log(arr)); // [0,1,2,3]
 *
 * @see {@link buffer}
 *
 * @return {Observable<any[]>|WebSocketSubject<T>|Observable<T>}
 * @method toArray
 * @owner Observable
 */
function toArray() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_toArray__["a" /* toArray */])()(this);
}
//# sourceMappingURL=toArray.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/distinctUntilChanged.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = distinctUntilChanged;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subscriber__ = __webpack_require__("../../../../rxjs/_esm5/Subscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_tryCatch__ = __webpack_require__("../../../../rxjs/_esm5/util/tryCatch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_errorObject__ = __webpack_require__("../../../../rxjs/_esm5/util/errorObject.js");
/** PURE_IMPORTS_START .._Subscriber,.._util_tryCatch,.._util_errorObject PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



/* tslint:enable:max-line-length */
/**
 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from the previous item.
 *
 * If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
 *
 * If a comparator function is not provided, an equality check is used by default.
 *
 * @example <caption>A simple example with numbers</caption>
 * Observable.of(1, 1, 2, 2, 2, 1, 1, 2, 3, 3, 4)
 *   .distinctUntilChanged()
 *   .subscribe(x => console.log(x)); // 1, 2, 1, 2, 3, 4
 *
 * @example <caption>An example using a compare function</caption>
 * interface Person {
 *    age: number,
 *    name: string
 * }
 *
 * Observable.of<Person>(
 *     { age: 4, name: 'Foo'},
 *     { age: 7, name: 'Bar'},
 *     { age: 5, name: 'Foo'})
 *     { age: 6, name: 'Foo'})
 *     .distinctUntilChanged((p: Person, q: Person) => p.name === q.name)
 *     .subscribe(x => console.log(x));
 *
 * // displays:
 * // { age: 4, name: 'Foo' }
 * // { age: 7, name: 'Bar' }
 * // { age: 5, name: 'Foo' }
 *
 * @see {@link distinct}
 * @see {@link distinctUntilKeyChanged}
 *
 * @param {function} [compare] Optional comparison function called to test if an item is distinct from the previous item in the source.
 * @return {Observable} An Observable that emits items from the source Observable with distinct values.
 * @method distinctUntilChanged
 * @owner Observable
 */
function distinctUntilChanged(compare, keySelector) {
    return function (source) { return source.lift(new DistinctUntilChangedOperator(compare, keySelector)); };
}
var DistinctUntilChangedOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function DistinctUntilChangedOperator(compare, keySelector) {
        this.compare = compare;
        this.keySelector = keySelector;
    }
    DistinctUntilChangedOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DistinctUntilChangedSubscriber(subscriber, this.compare, this.keySelector));
    };
    return DistinctUntilChangedOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var DistinctUntilChangedSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(DistinctUntilChangedSubscriber, _super);
    function DistinctUntilChangedSubscriber(destination, compare, keySelector) {
        _super.call(this, destination);
        this.keySelector = keySelector;
        this.hasKey = false;
        if (typeof compare === 'function') {
            this.compare = compare;
        }
    }
    DistinctUntilChangedSubscriber.prototype.compare = function (x, y) {
        return x === y;
    };
    DistinctUntilChangedSubscriber.prototype._next = function (value) {
        var keySelector = this.keySelector;
        var key = value;
        if (keySelector) {
            key = Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(this.keySelector)(value);
            if (key === __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */]) {
                return this.destination.error(__WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */].e);
            }
        }
        var result = false;
        if (this.hasKey) {
            result = Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(this.compare)(this.key, key);
            if (result === __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */]) {
                return this.destination.error(__WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */].e);
            }
        }
        else {
            this.hasKey = true;
        }
        if (Boolean(result) === false) {
            this.key = key;
            this.destination.next(value);
        }
    };
    return DistinctUntilChangedSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__Subscriber__["a" /* Subscriber */]));
//# sourceMappingURL=distinctUntilChanged.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/toArray.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = toArray;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reduce__ = __webpack_require__("../../../../rxjs/_esm5/operators/reduce.js");
/** PURE_IMPORTS_START ._reduce PURE_IMPORTS_END */

function toArrayReducer(arr, item, index) {
    arr.push(item);
    return arr;
}
function toArray() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__reduce__["a" /* reduce */])(toArrayReducer, []);
}
//# sourceMappingURL=toArray.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/scheduler/QueueAction.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueueAction; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AsyncAction__ = __webpack_require__("../../../../rxjs/_esm5/scheduler/AsyncAction.js");
/** PURE_IMPORTS_START ._AsyncAction PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var QueueAction = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(QueueAction, _super);
    function QueueAction(scheduler, work) {
        _super.call(this, scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
    }
    QueueAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (delay > 0) {
            return _super.prototype.schedule.call(this, state, delay);
        }
        this.delay = delay;
        this.state = state;
        this.scheduler.flush(this);
        return this;
    };
    QueueAction.prototype.execute = function (state, delay) {
        return (delay > 0 || this.closed) ?
            _super.prototype.execute.call(this, state, delay) :
            this._execute(state, delay);
    };
    QueueAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        // If delay exists and is greater than 0, or if the delay is null (the
        // action wasn't rescheduled) but was originally scheduled as an async
        // action, then recycle as an async action.
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        // Otherwise flush the scheduler starting with this action.
        return scheduler.flush(this);
    };
    return QueueAction;
}(__WEBPACK_IMPORTED_MODULE_0__AsyncAction__["a" /* AsyncAction */]));
//# sourceMappingURL=QueueAction.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/scheduler/QueueScheduler.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueueScheduler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AsyncScheduler__ = __webpack_require__("../../../../rxjs/_esm5/scheduler/AsyncScheduler.js");
/** PURE_IMPORTS_START ._AsyncScheduler PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var QueueScheduler = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(QueueScheduler, _super);
    function QueueScheduler() {
        _super.apply(this, arguments);
    }
    return QueueScheduler;
}(__WEBPACK_IMPORTED_MODULE_0__AsyncScheduler__["a" /* AsyncScheduler */]));
//# sourceMappingURL=QueueScheduler.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/scheduler/queue.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return queue; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__QueueAction__ = __webpack_require__("../../../../rxjs/_esm5/scheduler/QueueAction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__QueueScheduler__ = __webpack_require__("../../../../rxjs/_esm5/scheduler/QueueScheduler.js");
/** PURE_IMPORTS_START ._QueueAction,._QueueScheduler PURE_IMPORTS_END */


/**
 *
 * Queue Scheduler
 *
 * <span class="informal">Put every next task on a queue, instead of executing it immediately</span>
 *
 * `queue` scheduler, when used with delay, behaves the same as {@link async} scheduler.
 *
 * When used without delay, it schedules given task synchronously - executes it right when
 * it is scheduled. However when called recursively, that is when inside the scheduled task,
 * another task is scheduled with queue scheduler, instead of executing immediately as well,
 * that task will be put on a queue and wait for current one to finish.
 *
 * This means that when you execute task with `queue` scheduler, you are sure it will end
 * before any other task scheduled with that scheduler will start.
 *
 * @examples <caption>Schedule recursively first, then do something</caption>
 *
 * Rx.Scheduler.queue.schedule(() => {
 *   Rx.Scheduler.queue.schedule(() => console.log('second')); // will not happen now, but will be put on a queue
 *
 *   console.log('first');
 * });
 *
 * // Logs:
 * // "first"
 * // "second"
 *
 *
 * @example <caption>Reschedule itself recursively</caption>
 *
 * Rx.Scheduler.queue.schedule(function(state) {
 *   if (state !== 0) {
 *     console.log('before', state);
 *     this.schedule(state - 1); // `this` references currently executing Action,
 *                               // which we reschedule with new state
 *     console.log('after', state);
 *   }
 * }, 0, 3);
 *
 * // In scheduler that runs recursively, you would expect:
 * // "before", 3
 * // "before", 2
 * // "before", 1
 * // "after", 1
 * // "after", 2
 * // "after", 3
 *
 * // But with queue it logs:
 * // "before", 3
 * // "after", 3
 * // "before", 2
 * // "after", 2
 * // "before", 1
 * // "after", 1
 *
 *
 * @static true
 * @name queue
 * @owner Scheduler
 */
var queue = /*@__PURE__*/ new __WEBPACK_IMPORTED_MODULE_1__QueueScheduler__["a" /* QueueScheduler */](__WEBPACK_IMPORTED_MODULE_0__QueueAction__["a" /* QueueAction */]);
//# sourceMappingURL=queue.js.map 


/***/ })

});
//# sourceMappingURL=ngx-bootstrap.module.chunk.js.map