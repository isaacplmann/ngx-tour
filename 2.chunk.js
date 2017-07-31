webpackJsonp([2],{

/***/ "../../../../../dist/ngx-tour-ng-bootstrap/ngx-tour-ng-bootstrap/ngx-tour-ng-bootstrap.es5.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_first__ = __webpack_require__("../../../../rxjs/add/operator/first.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_first__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_map__ = __webpack_require__("../../../../rxjs/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operator_merge__ = __webpack_require__("../../../../rxjs/operator/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operator_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_operator_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_operator_filter__ = __webpack_require__("../../../../rxjs/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_operator_let__ = __webpack_require__("../../../../rxjs/operator/let.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_operator_let___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_operator_let__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_operator_do__ = __webpack_require__("../../../../rxjs/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_observable_fromEvent__ = __webpack_require__("../../../../rxjs/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs_observable_fromEvent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_withinviewport__ = __webpack_require__("../../../../../dist/ngx-tour-ng-bootstrap/node_modules/withinviewport/withinviewport.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_withinviewport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_withinviewport__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TourNgBootstrapModule; });
/* unused harmony export TourAnchorNgBootstrapDirective */
/* unused harmony export TourStepTemplateComponent */
/* unused harmony export TourModule */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TourService; });
/* unused harmony export TourState */
/* unused harmony export TourHotkeyListenerComponent */
/* unused harmony export ɵa */
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
    function TourService(router) {
        this.router = router;
        this.stepShow$ = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__["Subject"]();
        this.stepHide$ = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__["Subject"]();
        this.initialize$ = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__["Subject"]();
        this.start$ = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__["Subject"]();
        this.end$ = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__["Subject"]();
        this.pause$ = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__["Subject"]();
        this.resume$ = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__["Subject"]();
        this.anchorRegister$ = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__["Subject"]();
        this.anchorUnregister$ = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__["Subject"]();
        this.events$ = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_rxjs_operator_merge__["mergeStatic"])(__WEBPACK_IMPORTED_MODULE_5_rxjs_operator_map__["map"].bind(this.stepShow$)(function (value) { return ({ name: 'stepShow', value: value }); }), __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_map__["map"].bind(this.stepHide$)(function (value) { return ({ name: 'stepHide', value: value }); }), __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_map__["map"].bind(this.initialize$)(function (value) { return ({ name: 'initialize', value: value }); }), __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_map__["map"].bind(this.start$)(function (value) { return ({ name: 'start', value: value }); }), __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_map__["map"].bind(this.end$)(function (value) { return ({ name: 'end', value: value }); }), __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_map__["map"].bind(this.pause$)(function (value) { return ({ name: 'pause', value: value }); }), __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_map__["map"].bind(this.resume$)(function (value) { return ({ name: 'resume', value: value }); }), __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_map__["map"].bind(this.anchorRegister$)(function (value) { return ({ name: 'anchorRegister', value: value }); }), __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_map__["map"].bind(this.anchorUnregister$)(function (value) { return ({ name: 'anchorUnregister', value: value }); }));
        this.steps = [];
        this.anchors = {};
        this.status = TourState.OFF;
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
        this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* NavigationStart */]; }).first().subscribe(function () {
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
        this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* NavigationStart */]; }).first().subscribe(function () {
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
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* Injectable */] },
];
/**
 * @nocollapse
 */
TourService.ctorParameters = function () {
    return [
        { type: __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */], },
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
        if (this.tourService.getStatus() === TourState.ON) {
            this.tourService.end();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TourHotkeyListenerComponent.prototype.onArrowRightKey = function (event) {
        if (this.tourService.getStatus() === TourState.ON && this.tourService.hasNext(this.tourService.currentStep)) {
            this.tourService.next();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TourHotkeyListenerComponent.prototype.onArrowLeftKey = function (event) {
        if (this.tourService.getStatus() === TourState.ON && this.tourService.hasPrev(this.tourService.currentStep)) {
            this.tourService.prev();
        }
    };
    return TourHotkeyListenerComponent;
}());
TourHotkeyListenerComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* Component */], args: [{
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
    'onEscapeKey': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* HostListener */], args: ['window:keydown.Escape',] },],
    'onArrowRightKey': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* HostListener */], args: ['window:keydown.ArrowRight',] },],
    'onArrowLeftKey': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* HostListener */], args: ['window:keydown.ArrowLeft',] },],
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
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */], args: [{
                declarations: [TourHotkeyListenerComponent],
                exports: [TourHotkeyListenerComponent],
                imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["h" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]],
            },] },
];
/**
 * @nocollapse
 */
TourModule.ctorParameters = function () { return []; };
function toInteger(value) {
    return parseInt("" + value, 10);
}
function toString(value) {
    return (value !== undefined && value !== null) ? "" + value : '';
}
function getValueInRange(value, max, min) {
    if (min === void 0) {
        min = 0;
    }
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
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* Injectable */] },
];
/** @nocollapse */
NgbAccordionConfig.ctorParameters = function () { return []; };
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
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* Directive */], args: [{ selector: 'ng-template[ngbPanelTitle]' },] },
];
/** @nocollapse */
NgbPanelTitle.ctorParameters = function () {
    return [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* TemplateRef */], },
    ];
};
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
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* Directive */], args: [{ selector: 'ng-template[ngbPanelContent]' },] },
];
/** @nocollapse */
NgbPanelContent.ctorParameters = function () {
    return [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* TemplateRef */], },
    ];
};
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
    }
    return NgbPanel;
}());
NgbPanel.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* Directive */], args: [{ selector: 'ngb-panel' },] },
];
/** @nocollapse */
NgbPanel.ctorParameters = function () { return []; };
NgbPanel.propDecorators = {
    'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'id': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'title': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'type': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'contentTpl': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* ContentChild */], args: [NgbPanelContent,] },],
    'titleTpl': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* ContentChild */], args: [NgbPanelTitle,] },],
};
/**
 * The NgbAccordion directive is a collection of panels.
 * It can assure that only one panel can be opened at a time.
 */
var NgbAccordion = (function () {
    function NgbAccordion(config) {
        /**
         * A map that stores each panel state
         */
        this._states = new Map();
        /**
         * A map that stores references to all panels
         */
        this._panelRefs = new Map();
        /**
         * An array or comma separated strings of panel identifiers that should be opened
         */
        this.activeIds = [];
        /**
         * A panel change event fired right before the panel toggle happens. See NgbPanelChangeEvent for payload details
         */
        this.panelChange = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["r" /* EventEmitter */]();
        this.type = config.type;
        this.closeOtherPanels = config.closeOthers;
    }
    /**
     * Programmatically toggle a panel with a given id.
     */
    NgbAccordion.prototype.toggle = function (panelId) {
        var panel = this._panelRefs.get(panelId);
        if (panel && !panel.disabled) {
            var nextState = !this._states.get(panelId);
            var defaultPrevented_1 = false;
            this.panelChange.emit({ panelId: panelId, nextState: nextState, preventDefault: function () { defaultPrevented_1 = true; } });
            if (!defaultPrevented_1) {
                this._states.set(panelId, nextState);
                if (this.closeOtherPanels) {
                    this._closeOthers(panelId);
                }
                this._updateActiveIds();
            }
        }
    };
    NgbAccordion.prototype.ngAfterContentChecked = function () {
        // active id updates
        if (isString(this.activeIds)) {
            this.activeIds = this.activeIds.split(/\s*,\s*/);
        }
        this._updateStates();
        // closeOthers updates
        if (this.activeIds.length > 1 && this.closeOtherPanels) {
            this._closeOthers(this.activeIds[0]);
            this._updateActiveIds();
        }
    };
    /**
     * @internal
     */
    NgbAccordion.prototype.isOpen = function (panelId) { return this._states.get(panelId); };
    NgbAccordion.prototype._closeOthers = function (panelId) {
        var _this = this;
        this._states.forEach(function (state, id) {
            if (id !== panelId) {
                _this._states.set(id, false);
            }
        });
    };
    NgbAccordion.prototype._updateActiveIds = function () {
        var _this = this;
        this.activeIds =
            this.panels.toArray().filter(function (panel) { return _this.isOpen(panel.id) && !panel.disabled; }).map(function (panel) { return panel.id; });
    };
    NgbAccordion.prototype._updateStates = function () {
        var _this = this;
        this._states.clear();
        this._panelRefs.clear();
        this.panels.toArray().forEach(function (panel) {
            _this._states.set(panel.id, _this.activeIds.indexOf(panel.id) > -1 && !panel.disabled);
            _this._panelRefs.set(panel.id, panel);
        });
    };
    return NgbAccordion;
}());
NgbAccordion.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* Component */], args: [{
                selector: 'ngb-accordion',
                exportAs: 'ngbAccordion',
                host: { 'role': 'tablist', '[attr.aria-multiselectable]': '!closeOtherPanels' },
                template: "\n  <div class=\"card\">\n    <ng-template ngFor let-panel [ngForOf]=\"panels\">\n      <div role=\"tab\" id=\"{{panel.id}}-header\"\n        [class]=\"'card-header ' + (panel.type ? 'card-'+panel.type: type ? 'card-'+type : '')\" [class.active]=\"isOpen(panel.id)\">\n        <a href (click)=\"!!toggle(panel.id)\" [class.text-muted]=\"panel.disabled\" [attr.tabindex]=\"(panel.disabled ? '-1' : null)\"\n          [attr.aria-expanded]=\"isOpen(panel.id)\" [attr.aria-controls]=\"(isOpen(panel.id) ? panel.id : null)\"\n          [attr.aria-disabled]=\"panel.disabled\">\n          {{panel.title}}<ng-template [ngTemplateOutlet]=\"panel.titleTpl?.templateRef\"></ng-template>\n        </a>\n      </div>\n      <div id=\"{{panel.id}}\" role=\"tabpanel\" [attr.aria-labelledby]=\"panel.id + '-header'\" class=\"card-block\" *ngIf=\"isOpen(panel.id)\">\n        <ng-template [ngTemplateOutlet]=\"panel.contentTpl.templateRef\"></ng-template>\n      </div>\n    </ng-template>\n  </div>\n"
            },] },
];
/** @nocollapse */
NgbAccordion.ctorParameters = function () {
    return [
        { type: NgbAccordionConfig, },
    ];
};
NgbAccordion.propDecorators = {
    'panels': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ContentChildren */], args: [NgbPanel,] },],
    'activeIds': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'closeOtherPanels': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */], args: ['closeOthers',] },],
    'type': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'panelChange': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* Output */] },],
};
var NGB_ACCORDION_DIRECTIVES = [NgbAccordion, NgbPanel, NgbPanelTitle, NgbPanelContent];
var NgbAccordionModule = (function () {
    function NgbAccordionModule() {
    }
    NgbAccordionModule.forRoot = function () { return { ngModule: NgbAccordionModule, providers: [NgbAccordionConfig] }; };
    return NgbAccordionModule;
}());
NgbAccordionModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */], args: [{ declarations: NGB_ACCORDION_DIRECTIVES, exports: NGB_ACCORDION_DIRECTIVES, imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["h" /* CommonModule */]] },] },
];
/** @nocollapse */
NgbAccordionModule.ctorParameters = function () { return []; };
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
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* Injectable */] },
];
/** @nocollapse */
NgbAlertConfig.ctorParameters = function () { return []; };
/**
 * Alerts can be used to provide feedback messages.
 */
var NgbAlert = (function () {
    function NgbAlert(config) {
        /**
         * An event emitted when the close button is clicked. This event has no payload. Only relevant for dismissible alerts.
         */
        this.close = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["r" /* EventEmitter */]();
        this.dismissible = config.dismissible;
        this.type = config.type;
    }
    NgbAlert.prototype.closeHandler = function () { this.close.emit(null); };
    return NgbAlert;
}());
NgbAlert.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* Component */], args: [{
                selector: 'ngb-alert',
                changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* ChangeDetectionStrategy */].OnPush,
                template: "\n    <div [class]=\"'alert alert-' + type + (dismissible ? ' alert-dismissible' : '')\" role=\"alert\">\n      <button *ngIf=\"dismissible\" type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeHandler()\">\n            <span aria-hidden=\"true\">&times;</span>\n      </button>\n      <ng-content></ng-content>\n    </div>\n    "
            },] },
];
/** @nocollapse */
NgbAlert.ctorParameters = function () {
    return [
        { type: NgbAlertConfig, },
    ];
};
NgbAlert.propDecorators = {
    'dismissible': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'type': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'close': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* Output */] },],
};
var NgbAlertModule = (function () {
    function NgbAlertModule() {
    }
    NgbAlertModule.forRoot = function () { return { ngModule: NgbAlertModule, providers: [NgbAlertConfig] }; };
    return NgbAlertModule;
}());
NgbAlertModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */], args: [{ declarations: [NgbAlert], exports: [NgbAlert], imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["h" /* CommonModule */]], entryComponents: [NgbAlert] },] },
];
/** @nocollapse */
NgbAlertModule.ctorParameters = function () { return []; };
var NgbButtonLabel = (function () {
    function NgbButtonLabel() {
    }
    return NgbButtonLabel;
}());
NgbButtonLabel.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* Directive */], args: [{
                selector: '[ngbButtonLabel]',
                host: { '[class.btn]': 'true', '[class.active]': 'active', '[class.disabled]': 'disabled', '[class.focus]': 'focused' }
            },] },
];
/** @nocollapse */
NgbButtonLabel.ctorParameters = function () { return []; };
var NGB_CHECKBOX_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* NG_VALUE_ACCESSOR */],
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["P" /* forwardRef */])(function () { return NgbCheckBox; }),
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
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* Directive */], args: [{
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
NgbCheckBox.ctorParameters = function () {
    return [
        { type: NgbButtonLabel, },
    ];
};
NgbCheckBox.propDecorators = {
    'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'valueChecked': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'valueUnChecked': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
};
var NGB_RADIO_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* NG_VALUE_ACCESSOR */],
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["P" /* forwardRef */])(function () { return NgbRadioGroup; }),
    multi: true
};
/**
 * Easily create Bootstrap-style radio buttons. A value of a selected button is bound to a variable
 * specified via ngModel.
 */
var NgbRadioGroup = (function () {
    function NgbRadioGroup() {
        this._radios = new Set();
        this._value = null;
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
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* Directive */], args: [{
                selector: '[ngbRadioGroup]',
                host: { 'data-toggle': 'buttons', 'class': 'btn-group', 'role': 'group' },
                providers: [NGB_RADIO_VALUE_ACCESSOR]
            },] },
];
/** @nocollapse */
NgbRadioGroup.ctorParameters = function () { return []; };
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
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* Directive */], args: [{
                selector: '[ngbButton][type=radio]',
                host: {
                    '[checked]': 'checked',
                    '[disabled]': 'disabled',
                    '(change)': 'onChange()',
                    '(focus)': 'focused = true',
                    '(blur)': 'focused = false'
                }
            },] },
];
/** @nocollapse */
NgbRadio.ctorParameters = function () {
    return [
        { type: NgbRadioGroup, },
        { type: NgbButtonLabel, },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["k" /* Renderer2 */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["l" /* ElementRef */], },
    ];
};
NgbRadio.propDecorators = {
    'value': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */], args: ['value',] },],
    'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */], args: ['disabled',] },],
};
var NGB_BUTTON_DIRECTIVES = [NgbButtonLabel, NgbCheckBox, NgbRadioGroup, NgbRadio];
var NgbButtonsModule = (function () {
    function NgbButtonsModule() {
    }
    NgbButtonsModule.forRoot = function () { return { ngModule: NgbButtonsModule, providers: [] }; };
    return NgbButtonsModule;
}());
NgbButtonsModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */], args: [{ declarations: NGB_BUTTON_DIRECTIVES, exports: NGB_BUTTON_DIRECTIVES },] },
];
/** @nocollapse */
NgbButtonsModule.ctorParameters = function () { return []; };
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
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* Injectable */] },
];
/** @nocollapse */
NgbCarouselConfig.ctorParameters = function () { return []; };
var nextId$1 = 0;
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
        this.id = "ngb-slide-" + nextId$1++;
    }
    return NgbSlide;
}());
NgbSlide.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* Directive */], args: [{ selector: 'ng-template[ngbSlide]' },] },
];
/** @nocollapse */
NgbSlide.ctorParameters = function () {
    return [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* TemplateRef */], },
    ];
};
NgbSlide.propDecorators = {
    'id': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
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
        this.slide = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["r" /* EventEmitter */]();
        this.interval = config.interval;
        this.wrap = config.wrap;
        this.keyboard = config.keyboard;
    }
    NgbCarousel.prototype.ngAfterContentChecked = function () {
        var activeSlide = this._getSlideById(this.activeId);
        this.activeId = activeSlide ? activeSlide.id : (this.slides.length ? this.slides.first.id : null);
    };
    NgbCarousel.prototype.ngOnInit = function () { this._startTimer(); };
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
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* Component */], args: [{
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
                template: "\n    <ol class=\"carousel-indicators\">\n      <li *ngFor=\"let slide of slides\" [id]=\"slide.id\" [class.active]=\"slide.id === activeId\" \n          (click)=\"cycleToSelected(slide.id, _getSlideEventDirection(activeId, slide.id))\"></li>\n    </ol>\n    <div class=\"carousel-inner\">\n      <div *ngFor=\"let slide of slides\" class=\"carousel-item\" [class.active]=\"slide.id === activeId\">\n        <ng-template [ngTemplateOutlet]=\"slide.tplRef\"></ng-template>\n      </div>\n    </div>\n    <a class=\"left carousel-control-prev\" role=\"button\" (click)=\"cycleToPrev()\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"right carousel-control-next\" role=\"button\" (click)=\"cycleToNext()\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n    "
            },] },
];
/** @nocollapse */
NgbCarousel.ctorParameters = function () {
    return [
        { type: NgbCarouselConfig, },
    ];
};
NgbCarousel.propDecorators = {
    'slides': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ContentChildren */], args: [NgbSlide,] },],
    'interval': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'wrap': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'keyboard': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'activeId': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'slide': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* Output */] },],
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
var NgbCarouselModule = (function () {
    function NgbCarouselModule() {
    }
    NgbCarouselModule.forRoot = function () { return { ngModule: NgbCarouselModule, providers: [NgbCarouselConfig] }; };
    return NgbCarouselModule;
}());
NgbCarouselModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */], args: [{ declarations: NGB_CAROUSEL_DIRECTIVES, exports: NGB_CAROUSEL_DIRECTIVES, imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["h" /* CommonModule */]] },] },
];
/** @nocollapse */
NgbCarouselModule.ctorParameters = function () { return []; };
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
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* Directive */], args: [{
                selector: '[ngbCollapse]',
                exportAs: 'ngbCollapse',
                host: { '[class.collapse]': 'true', '[class.show]': '!collapsed' }
            },] },
];
/** @nocollapse */
NgbCollapse.ctorParameters = function () { return []; };
NgbCollapse.propDecorators = {
    'collapsed': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */], args: ['ngbCollapse',] },],
};
var NgbCollapseModule = (function () {
    function NgbCollapseModule() {
    }
    NgbCollapseModule.forRoot = function () { return { ngModule: NgbCollapseModule, providers: [] }; };
    return NgbCollapseModule;
}());
NgbCollapseModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */], args: [{ declarations: [NgbCollapse], exports: [NgbCollapse] },] },
];
/** @nocollapse */
NgbCollapseModule.ctorParameters = function () { return []; };
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
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
function fromJSDate(jsDate) {
    return new NgbDate(jsDate.getFullYear(), jsDate.getMonth() + 1, jsDate.getDate());
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
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* Injectable */] },
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
        if (period === void 0) {
            period = 'd';
        }
        if (number === void 0) {
            number = 1;
        }
        var jsDate = toJSDate(date);
        switch (period) {
            case 'y':
                return new NgbDate(date.year + number, 1, 1);
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
        if (period === void 0) {
            period = 'd';
        }
        if (number === void 0) {
            number = 1;
        }
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
        if (!date || !isInteger(date.year) || !isInteger(date.month) || !isInteger(date.day)) {
            return false;
        }
        var jsDate = toJSDate(date);
        return !isNaN(jsDate.getTime()) && jsDate.getFullYear() === date.year && jsDate.getMonth() + 1 === date.month &&
            jsDate.getDate() === date.day;
    };
    return NgbCalendarGregorian;
}(NgbCalendar));
NgbCalendarGregorian.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* Injectable */] },
];
/** @nocollapse */
NgbCalendarGregorian.ctorParameters = function () { return []; };
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
        return NgbDate.from(minDate);
    }
    if (date && maxDate && date.after(maxDate)) {
        return NgbDate.from(maxDate);
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
            var newDate = new NgbDate(date.year, date.month, date.day);
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
        month.weeks.push({ number: calendar.getWeekNumber(days.map(function (day) { return NgbDate.from(day.date); }), firstDayOfWeek), days: days });
    }
    return month;
}
function getFirstViewDate(calendar, date, firstDayOfWeek) {
    var currentMonth = date.month;
    var today = new NgbDate(date.year, date.month, date.day);
    var yesterday = calendar.getPrev(today);
    var firstDayOfCurrentMonthIsAlsoFirstDayOfWeek = function () { return today.month !== yesterday.month && firstDayOfWeek === calendar.getWeekday(today); };
    var reachedTheFirstDayOfTheLastWeekOfPreviousMonth = function () { return today.month !== currentMonth && firstDayOfWeek === calendar.getWeekday(today); };
    // going back in time
    while (!reachedTheFirstDayOfTheLastWeekOfPreviousMonth() && !firstDayOfCurrentMonthIsAlsoFirstDayOfWeek()) {
        today = new NgbDate(yesterday.year, yesterday.month, yesterday.day);
        yesterday = calendar.getPrev(yesterday);
    }
    return today;
}
var NgbDatepickerService = (function () {
    function NgbDatepickerService(_calendar) {
        this._calendar = _calendar;
        this._model$ = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__["Subject"]();
        this._state = { disabled: false, displayMonths: 1, firstDayOfWeek: 1, focusVisible: false, months: [], selectedDate: null };
    }
    Object.defineProperty(NgbDatepickerService.prototype, "model$", {
        get: function () { return __WEBPACK_IMPORTED_MODULE_9_rxjs_operator_filter__["filter"].call(this._model$.asObservable(), function (model) { return model.months.length > 0; }); },
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
            if (isInteger(months) && months > 0 && this._state.displayMonths !== months) {
                this._nextState({ displayMonths: months });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbDatepickerService.prototype, "firstDayOfWeek", {
        set: function (firstDayOfWeek) {
            if (isInteger(firstDayOfWeek) && firstDayOfWeek >= 0 && this._state.firstDayOfWeek !== firstDayOfWeek) {
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
            if (date === undefined || this._calendar.isValid(date) && isChangedDate(this._state.maxDate, date)) {
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
            if (date === undefined || this._calendar.isValid(date) && isChangedDate(this._state.minDate, date)) {
                this._nextState({ minDate: date });
            }
        },
        enumerable: true,
        configurable: true
    });
    NgbDatepickerService.prototype.focus = function (date) {
        if (!this._state.disabled && this._calendar.isValid(date) && isChangedDate(this._state.focusDate, date)) {
            this._nextState({ focusDate: date });
        }
    };
    NgbDatepickerService.prototype.focusMove = function (period, number) {
        this.focus(this._calendar.getNext(this._state.focusDate, period, number));
    };
    NgbDatepickerService.prototype.focusSelect = function () {
        if (isDateSelectable(this._state.months, this._state.focusDate)) {
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
        if (!this._state.disabled && isChangedDate(this._state.selectedDate, validDate)) {
            this._nextState({ selectedDate: validDate });
        }
    };
    NgbDatepickerService.prototype.toValidDate = function (date, defaultValue) {
        var ngbDate = NgbDate.from(date);
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
            checkMinBeforeMax(state.minDate, state.maxDate);
            state.focusDate = checkDateInRange(state.focusDate, state.minDate, state.maxDate);
            state.firstDate = checkDateInRange(state.firstDate, state.minDate, state.maxDate);
            startDate = state.focusDate;
        }
        // disabled
        if ('disabled' in patch) {
            state.focusVisible = false;
        }
        // focus date changed
        if ('focusDate' in patch) {
            state.focusDate = checkDateInRange(state.focusDate, state.minDate, state.maxDate);
            startDate = state.focusDate;
            // nothing to rebuild if only focus changed and it is still visible
            if (state.months.length !== 0 && !state.focusDate.before(state.firstDate) &&
                !state.focusDate.after(state.lastDate)) {
                return state;
            }
        }
        // first date changed
        if ('firstDate' in patch) {
            state.firstDate = checkDateInRange(state.firstDate, state.minDate, state.maxDate);
            startDate = state.firstDate;
        }
        // rebuilding months
        if (startDate) {
            var forceRebuild = 'firstDayOfWeek' in patch || 'markDisabled' in patch || 'minDate' in patch ||
                'maxDate' in patch || 'disabled' in patch;
            var months = buildMonths(this._calendar, state.months, startDate, state.minDate, state.maxDate, state.displayMonths, state.firstDayOfWeek, state.markDisabled, forceRebuild);
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
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* Injectable */] },
];
/** @nocollapse */
NgbDatepickerService.ctorParameters = function () {
    return [
        { type: NgbCalendar, },
    ];
};
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
        if (Key[toString(event.which)]) {
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
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* Injectable */] },
];
/** @nocollapse */
NgbDatepickerKeyMapService.ctorParameters = function () {
    return [
        { type: NgbDatepickerService, },
        { type: NgbCalendar, },
    ];
};
// clang-format on
var NavigationEvent;
(function (NavigationEvent) {
    NavigationEvent[NavigationEvent["PREV"] = 0] = "PREV";
    NavigationEvent[NavigationEvent["NEXT"] = 1] = "NEXT";
})(NavigationEvent || (NavigationEvent = {}));
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
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* Injectable */] },
];
/** @nocollapse */
NgbDatepickerConfig.ctorParameters = function () { return []; };
var __extends$1 = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
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
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* Injectable */] },
];
/** @nocollapse */
NgbDatepickerI18n.ctorParameters = function () { return []; };
var NgbDatepickerI18nDefault = (function (_super) {
    __extends$1(NgbDatepickerI18nDefault, _super);
    function NgbDatepickerI18nDefault() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NgbDatepickerI18nDefault.prototype.getWeekdayShortName = function (weekday) { return WEEKDAYS_SHORT[weekday - 1]; };
    NgbDatepickerI18nDefault.prototype.getMonthShortName = function (month) { return MONTHS_SHORT[month - 1]; };
    NgbDatepickerI18nDefault.prototype.getMonthFullName = function (month) { return MONTHS_FULL[month - 1]; };
    return NgbDatepickerI18nDefault;
}(NgbDatepickerI18n));
NgbDatepickerI18nDefault.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* Injectable */] },
];
/** @nocollapse */
NgbDatepickerI18nDefault.ctorParameters = function () { return []; };
var NGB_DATEPICKER_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* NG_VALUE_ACCESSOR */],
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["P" /* forwardRef */])(function () { return NgbDatepicker; }),
    multi: true
};
/**
 * A lightweight and highly configurable datepicker directive
 */
var NgbDatepicker = (function () {
    function NgbDatepicker(_keyMapService, _service, _calendar, i18n, config, _cd) {
        var _this = this;
        this._keyMapService = _keyMapService;
        this._service = _service;
        this._calendar = _calendar;
        this.i18n = i18n;
        this._cd = _cd;
        /**
         * An event fired when navigation happens and currently displayed month changes.
         * See NgbDatepickerNavigateEvent for the payload info.
         */
        this.navigate = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["r" /* EventEmitter */]();
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
            if (isChangedDate(newSelectedDate, oldSelectedDate)) {
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
        this._service.open(date ? new NgbDate(date.year, date.month, 1) : this._calendar.getToday());
    };
    NgbDatepicker.prototype.ngOnDestroy = function () { this._subscription.unsubscribe(); };
    NgbDatepicker.prototype.ngOnInit = function () {
        if (this.model === undefined) {
            this._service.displayMonths = toInteger(this.displayMonths);
            this._service.markDisabled = this.markDisabled;
            this._service.firstDayOfWeek = this.firstDayOfWeek;
            this._setDates();
        }
    };
    NgbDatepicker.prototype.ngOnChanges = function (changes) {
        if (changes['displayMonths']) {
            this._service.displayMonths = toInteger(this.displayMonths);
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
            case NavigationEvent.PREV:
                this._service.open(this._calendar.getPrev(this.model.firstDate, 'm', 1));
                break;
            case NavigationEvent.NEXT:
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
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* Component */], args: [{
                exportAs: 'ngbDatepicker',
                selector: 'ngb-datepicker',
                changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* ChangeDetectionStrategy */].OnPush,
                host: {
                    'class': 'd-inline-block rounded',
                    '[attr.tabindex]': 'disabled ? undefined : "0"',
                    '(blur)': 'showFocus(false)',
                    '(focus)': 'showFocus(true)',
                    '(keydown)': 'onKeyDown($event)'
                },
                styles: ["\n    :host {\n      border: 1px solid rgba(0, 0, 0, 0.125);\n    }\n    .ngb-dp-header {\n      border-bottom: 1px solid rgba(0, 0, 0, 0.125);\n    }\n    .ngb-dp-month {\n      pointer-events: none;\n    }\n    ngb-datepicker-month-view {\n      pointer-events: auto;\n    }\n    .ngb-dp-month:first-child {\n      margin-left: 0 !important;\n    }\n    .ngb-dp-month-name {\n      font-size: larger;\n      height: 2rem;\n      line-height: 2rem;\n    }\n  "],
                template: "\n    <ng-template #dt let-date=\"date\" let-currentMonth=\"currentMonth\" let-selected=\"selected\" let-disabled=\"disabled\" let-focused=\"focused\">\n      <div ngbDatepickerDayView\n        [date]=\"date\"\n        [currentMonth]=\"currentMonth\"\n        [selected]=\"selected\"\n        [disabled]=\"disabled\"\n        [focused]=\"focused\">\n      </div>\n    </ng-template>\n\n    <div class=\"ngb-dp-header bg-faded pt-1 rounded-top\" [style.height.rem]=\"getHeaderHeight()\"\n         [style.marginBottom.rem]=\"-getHeaderMargin()\">\n      <ngb-datepicker-navigation *ngIf=\"navigation !== 'none'\"\n        [date]=\"model.firstDate\"\n        [minDate]=\"model.minDate\"\n        [maxDate]=\"model.maxDate\"\n        [months]=\"model.months.length\"\n        [disabled]=\"model.disabled\"\n        [showWeekNumbers]=\"showWeekNumbers\"\n        [showSelect]=\"navigation === 'select'\"\n        (navigate)=\"onNavigateEvent($event)\"\n        (select)=\"onNavigateDateSelect($event)\">\n      </ngb-datepicker-navigation>\n    </div>\n\n    <div class=\"ngb-dp-months d-flex px-1 pb-1\">\n      <ng-template ngFor let-month [ngForOf]=\"model.months\" let-i=\"index\">\n        <div class=\"ngb-dp-month d-block ml-3\">\n          <div *ngIf=\"navigation !== 'select' || displayMonths > 1\" class=\"ngb-dp-month-name text-center\">\n            {{ i18n.getMonthFullName(month.number) }} {{ month.year }}\n          </div>\n          <ngb-datepicker-month-view\n            [month]=\"month\"\n            [dayTemplate]=\"dayTemplate || dt\"\n            [showWeekdays]=\"showWeekdays\"\n            [showWeekNumbers]=\"showWeekNumbers\"\n            [outsideDays]=\"(displayMonths === 1 ? outsideDays : 'hidden')\"\n            (select)=\"onDateSelect($event)\">\n          </ngb-datepicker-month-view>\n        </div>\n      </ng-template>\n    </div>\n  ",
                providers: [NGB_DATEPICKER_VALUE_ACCESSOR, NgbDatepickerService, NgbDatepickerKeyMapService]
            },] },
];
/** @nocollapse */
NgbDatepicker.ctorParameters = function () {
    return [
        { type: NgbDatepickerKeyMapService, },
        { type: NgbDatepickerService, },
        { type: NgbCalendar, },
        { type: NgbDatepickerI18n, },
        { type: NgbDatepickerConfig, },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["p" /* ChangeDetectorRef */], },
    ];
};
NgbDatepicker.propDecorators = {
    'dayTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'displayMonths': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'firstDayOfWeek': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'markDisabled': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'maxDate': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'minDate': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'navigation': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'outsideDays': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'showWeekdays': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'showWeekNumbers': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'startDate': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'navigate': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* Output */] },],
};
var NgbDatepickerMonthView = (function () {
    function NgbDatepickerMonthView(i18n) {
        this.i18n = i18n;
        this.select = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["r" /* EventEmitter */]();
    }
    NgbDatepickerMonthView.prototype.doSelect = function (day) {
        if (!day.context.disabled && !this.isHidden(day)) {
            this.select.emit(NgbDate.from(day.date));
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
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* Component */], args: [{
                selector: 'ngb-datepicker-month-view',
                host: { 'class': 'd-block' },
                styles: ["\n    .ngb-dp-weekday, .ngb-dp-week-number {\n      line-height: 2rem;\n    }\n    .ngb-dp-day, .ngb-dp-weekday, .ngb-dp-week-number {\n      width: 2rem;\n      height: 2rem;\n    }\n    .ngb-dp-day {\n      cursor: pointer;\n    }\n    .ngb-dp-day.disabled, .ngb-dp-day.hidden {\n      cursor: default;\n    }\n  "],
                template: "\n    <div *ngIf=\"showWeekdays\" class=\"ngb-dp-week d-flex\">\n      <div *ngIf=\"showWeekNumbers\" class=\"ngb-dp-weekday\"></div>\n      <div *ngFor=\"let w of month.weekdays\" class=\"ngb-dp-weekday small text-center text-info font-italic\">\n        {{ i18n.getWeekdayShortName(w) }}\n      </div>\n    </div>\n    <ng-template ngFor let-week [ngForOf]=\"month.weeks\">\n      <div *ngIf=\"!isCollapsed(week)\" class=\"ngb-dp-week d-flex\">\n        <div *ngIf=\"showWeekNumbers\" class=\"ngb-dp-week-number small text-center font-italic text-muted\">{{ week.number }}</div>\n        <div *ngFor=\"let day of week.days\" (click)=\"doSelect(day)\" class=\"ngb-dp-day\" [class.disabled]=\"day.context.disabled\"\n         [class.hidden]=\"isHidden(day)\">\n          <ng-template [ngIf]=\"!isHidden(day)\">\n            <ng-template [ngTemplateOutlet]=\"dayTemplate\" [ngOutletContext]=\"day.context\"></ng-template>\n          </ng-template>\n        </div>\n      </div>\n    </ng-template>\n  "
            },] },
];
/** @nocollapse */
NgbDatepickerMonthView.ctorParameters = function () {
    return [
        { type: NgbDatepickerI18n, },
    ];
};
NgbDatepickerMonthView.propDecorators = {
    'dayTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'month': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'outsideDays': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'showWeekdays': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'showWeekNumbers': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'select': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* Output */] },],
};
var NgbDatepickerNavigation = (function () {
    function NgbDatepickerNavigation(i18n, _calendar) {
        this.i18n = i18n;
        this._calendar = _calendar;
        this.navigation = NavigationEvent;
        this.navigate = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["r" /* EventEmitter */]();
        this.select = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["r" /* EventEmitter */]();
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
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* Component */], args: [{
                selector: 'ngb-datepicker-navigation',
                changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* ChangeDetectionStrategy */].OnPush,
                host: { 'class': 'd-flex justify-content-between', '[class.collapsed]': '!showSelect' },
                styles: ["\n    :host {\n      height: 2rem;\n      line-height: 1.85rem;\n    }\n    :host.collapsed {\n      margin-bottom: -2rem;        \n    }\n    .ngb-dp-navigation-chevron::before {\n      border-style: solid;\n      border-width: 0.2em 0.2em 0 0;\n      content: '';\n      display: inline-block;\n      height: 0.75em;\n      transform: rotate(-135deg);\n      -webkit-transform: rotate(-135deg);\n      -ms-transform: rotate(-135deg);\n      width: 0.75em;\n      margin: 0 0 0 0.5rem;\n    }    \n    .ngb-dp-navigation-chevron.right:before {\n      -webkit-transform: rotate(45deg);\n      -ms-transform: rotate(45deg);\n      transform: rotate(45deg);\n      margin: 0 0.5rem 0 0;\n    }\n    .btn-link {\n      cursor: pointer;\n      outline: 0;\n    }\n    .btn-link[disabled] {\n      cursor: not-allowed;\n      opacity: .65;\n    }    \n  "],
                template: "\n    <button type=\"button\" class=\"btn-link\" (click)=\"!!doNavigate(navigation.PREV)\" [disabled]=\"prevDisabled()\" tabindex=\"-1\">\n      <span class=\"ngb-dp-navigation-chevron\"></span>    \n    </button>\n    \n    <ngb-datepicker-navigation-select *ngIf=\"showSelect\" class=\"d-block\" [style.width.rem]=\"months * 9\"\n      [date]=\"date\"\n      [minDate]=\"minDate\"\n      [maxDate]=\"maxDate\"\n      [disabled] = \"disabled\"\n      (select)=\"selectDate($event)\">\n    </ngb-datepicker-navigation-select>\n    \n    <button type=\"button\" class=\"btn-link\" (click)=\"!!doNavigate(navigation.NEXT)\" [disabled]=\"nextDisabled()\" tabindex=\"-1\">\n      <span class=\"ngb-dp-navigation-chevron right\"></span>\n    </button>\n  "
            },] },
];
/** @nocollapse */
NgbDatepickerNavigation.ctorParameters = function () {
    return [
        { type: NgbDatepickerI18n, },
        { type: NgbCalendar, },
    ];
};
NgbDatepickerNavigation.propDecorators = {
    'date': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'maxDate': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'minDate': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'months': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'showSelect': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'showWeekNumbers': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'navigate': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* Output */] },],
    'select': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* Output */] },],
};
var __extends$2 = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
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
    __extends$2(NgbDateISOParserFormatter, _super);
    function NgbDateISOParserFormatter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NgbDateISOParserFormatter.prototype.parse = function (value) {
        if (value) {
            var dateParts = value.trim().split('-');
            if (dateParts.length === 1 && isNumber(dateParts[0])) {
                return { year: toInteger(dateParts[0]), month: null, day: null };
            }
            else if (dateParts.length === 2 && isNumber(dateParts[0]) && isNumber(dateParts[1])) {
                return { year: toInteger(dateParts[0]), month: toInteger(dateParts[1]), day: null };
            }
            else if (dateParts.length === 3 && isNumber(dateParts[0]) && isNumber(dateParts[1]) && isNumber(dateParts[2])) {
                return { year: toInteger(dateParts[0]), month: toInteger(dateParts[1]), day: toInteger(dateParts[2]) };
            }
        }
        return null;
    };
    NgbDateISOParserFormatter.prototype.format = function (date) {
        return date ?
            date.year + "-" + (isNumber(date.month) ? padNumber(date.month) : '') + "-" + (isNumber(date.day) ? padNumber(date.day) : '') :
            '';
    };
    return NgbDateISOParserFormatter;
}(NgbDateParserFormatter));
// previous version:
// https://github.com/angular-ui/bootstrap/blob/07c31d0731f7cb068a1932b8e01d2312b796b4ec/src/position/position.js
var Positioning = (function () {
    function Positioning() {
    }
    Positioning.prototype.getStyle = function (element, prop) { return window.getComputedStyle(element)[prop]; };
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
        if (round === void 0) {
            round = true;
        }
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
        var hostElPosition = appendToBody ? this.offset(hostElement, false) : this.position(hostElement, false);
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
                targetElPosition.top = hostElPosition.top - targetElement.offsetHeight;
                break;
            case 'bottom':
                targetElPosition.top = hostElPosition.top + hostElPosition.height;
                break;
            case 'left':
                targetElPosition.left = hostElPosition.left - targetElement.offsetWidth;
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
    return Positioning;
}());
var positionService = new Positioning();
function positionElements(hostElement, targetElement, placement, appendToBody) {
    var pos = positionService.positionElements(hostElement, targetElement, placement, appendToBody);
    targetElement.style.top = pos.top + "px";
    targetElement.style.left = pos.left + "px";
}
var NGB_DATEPICKER_VALUE_ACCESSOR$1 = {
    provide: __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* NG_VALUE_ACCESSOR */],
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["P" /* forwardRef */])(function () { return NgbInputDatepicker; }),
    multi: true
};
var NGB_DATEPICKER_VALIDATOR = {
    provide: __WEBPACK_IMPORTED_MODULE_8__angular_forms__["f" /* NG_VALIDATORS */],
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["P" /* forwardRef */])(function () { return NgbInputDatepicker; }),
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
         * Placement of a datepicker popup. Accepts: "top", "bottom", "left", "right", "bottom-left",
         * "bottom-right" etc.
         */
        this.placement = 'bottom-left';
        /**
         * An event fired when navigation happens and currently displayed month changes.
         * See NgbDatepickerNavigateEvent for the payload info.
         */
        this.navigate = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["r" /* EventEmitter */]();
        this._onChange = function (_) { };
        this._onTouched = function () { };
        this._validatorChange = function () { };
        this._zoneSubscription = ngZone.onStable.subscribe(function () {
            if (_this._cRef) {
                positionElements(_this._elRef.nativeElement, _this._cRef.location.nativeElement, _this.placement);
            }
        });
    }
    NgbInputDatepicker.prototype.registerOnChange = function (fn) { this._onChange = fn; };
    NgbInputDatepicker.prototype.registerOnTouched = function (fn) { this._onTouched = fn; };
    NgbInputDatepicker.prototype.registerOnValidatorChange = function (fn) { this._validatorChange = fn; };
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
        if (this.minDate && NgbDate.from(value).before(NgbDate.from(this.minDate))) {
            return { 'ngbDate': { requiredBefore: this.minDate } };
        }
        if (this.maxDate && NgbDate.from(value).after(NgbDate.from(this.maxDate))) {
            return { 'ngbDate': { requiredAfter: this.maxDate } };
        }
    };
    NgbInputDatepicker.prototype.writeValue = function (value) {
        var ngbDate = value ? new NgbDate(value.year, value.month, value.day) : null;
        this._model = this._calendar.isValid(value) ? ngbDate : null;
        this._writeModelValue(this._model);
    };
    NgbInputDatepicker.prototype.manualDateChange = function (value) {
        this._model = this._service.toValidDate(this._parserFormatter.parse(value), null);
        this._onChange(this._model ? this._model.toStruct() : (value === '' ? null : value));
        this._writeModelValue(this._model);
    };
    NgbInputDatepicker.prototype.isOpen = function () { return !!this._cRef; };
    /**
     * Opens the datepicker with the selected date indicated by the ngModel value.
     */
    NgbInputDatepicker.prototype.open = function () {
        var _this = this;
        if (!this.isOpen()) {
            var cf = this._cfr.resolveComponentFactory(NgbDatepicker);
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
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* Directive */], args: [{
                selector: 'input[ngbDatepicker]',
                exportAs: 'ngbDatepicker',
                host: { '(change)': 'manualDateChange($event.target.value)', '(keyup.esc)': 'close()', '(blur)': 'onBlur()' },
                providers: [NGB_DATEPICKER_VALUE_ACCESSOR$1, NGB_DATEPICKER_VALIDATOR, NgbDatepickerService]
            },] },
];
/** @nocollapse */
NgbInputDatepicker.ctorParameters = function () {
    return [
        { type: NgbDateParserFormatter, },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["l" /* ElementRef */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["s" /* ViewContainerRef */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["k" /* Renderer2 */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* ComponentFactoryResolver */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["N" /* NgZone */], },
        { type: NgbDatepickerService, },
        { type: NgbCalendar, },
    ];
};
NgbInputDatepicker.propDecorators = {
    'dayTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'displayMonths': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'firstDayOfWeek': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'markDisabled': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'minDate': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'maxDate': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'navigation': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'outsideDays': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'placement': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'showWeekdays': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'showWeekNumbers': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'startDate': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'navigate': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* Output */] },],
};
var NgbDatepickerDayView = (function () {
    function NgbDatepickerDayView() {
    }
    NgbDatepickerDayView.prototype.isMuted = function () { return !this.selected && (this.date.month !== this.currentMonth || this.disabled); };
    return NgbDatepickerDayView;
}());
NgbDatepickerDayView.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* Component */], args: [{
                selector: '[ngbDatepickerDayView]',
                changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* ChangeDetectionStrategy */].OnPush,
                styles: ["\n    :host {\n      text-align: center;\n      width: 2rem;\n      height: 2rem;\n      line-height: 2rem;\n      border-radius: 0.25rem;\n    }\n    :host.outside {\n      opacity: 0.5;\n    }\n  "],
                host: {
                    'class': 'btn-secondary',
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
    'currentMonth': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'date': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'focused': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'selected': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
};
var NgbDatepickerNavigationSelect = (function () {
    function NgbDatepickerNavigationSelect(i18n, calendar) {
        this.i18n = i18n;
        this.calendar = calendar;
        this.years = [];
        this.select = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["r" /* EventEmitter */]();
        this.months = calendar.getMonths();
    }
    NgbDatepickerNavigationSelect.prototype.ngOnChanges = function (changes) {
        if (changes['maxDate'] || changes['minDate'] || changes['date']) {
            this._generateYears();
            this._generateMonths();
        }
    };
    NgbDatepickerNavigationSelect.prototype.changeMonth = function (month) { this.select.emit(new NgbDate(this.date.year, toInteger(month), 1)); };
    NgbDatepickerNavigationSelect.prototype.changeYear = function (year) { this.select.emit(new NgbDate(toInteger(year), this.date.month, 1)); };
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
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* Component */], args: [{
                selector: 'ngb-datepicker-navigation-select',
                changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* ChangeDetectionStrategy */].OnPush,
                styles: ["\n    select {\n      /* to align with btn-sm */\n      padding: 0.25rem 0.5rem;\n      font-size: 0.875rem;      \n      line-height: 1.25;\n      /* to cancel the custom height set by custom-select */\n      height: inherit;\n      width: 50%;\n    }\n  "],
                template: "\n    <select\n      [disabled]=\"disabled\"\n      class=\"custom-select d-inline-block\"\n      [value]=\"date?.month\"\n      (change)=\"changeMonth($event.target.value)\"\n      tabindex=\"-1\">\n        <option *ngFor=\"let m of months\" [value]=\"m\">{{ i18n.getMonthShortName(m) }}</option>\n    </select><select\n      [disabled]=\"disabled\"\n      class=\"custom-select d-inline-block\"\n      [value]=\"date?.year\"\n      (change)=\"changeYear($event.target.value)\"\n      tabindex=\"-1\">\n        <option *ngFor=\"let y of years\" [value]=\"y\">{{ y }}</option>\n    </select> \n  "
            },] },
];
/** @nocollapse */
NgbDatepickerNavigationSelect.ctorParameters = function () {
    return [
        { type: NgbDatepickerI18n, },
        { type: NgbCalendar, },
    ];
};
NgbDatepickerNavigationSelect.propDecorators = {
    'date': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'maxDate': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'minDate': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'select': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* Output */] },],
};
var __extends$4 = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var NgbCalendarHijri = (function (_super) {
    __extends$4(NgbCalendarHijri, _super);
    function NgbCalendarHijri() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NgbCalendarHijri.prototype.getDaysPerWeek = function () { return 7; };
    NgbCalendarHijri.prototype.getMonths = function () { return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; };
    NgbCalendarHijri.prototype.getWeeksPerMonth = function () { return 6; };
    NgbCalendarHijri.prototype.isValid = function (date) {
        return date && isNumber(date.year) && isNumber(date.month) && isNumber(date.day) &&
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
}(NgbCalendar));
NgbCalendarHijri.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* Injectable */] },
];
/** @nocollapse */
NgbCalendarHijri.ctorParameters = function () { return []; };
var __extends$3 = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
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
    __extends$3(NgbCalendarIslamicCivil, _super);
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
        return new NgbDate(hYear, hMonth + 1, hDay);
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
        if (period === void 0) {
            period = 'd';
        }
        if (number === void 0) {
            number = 1;
        }
        date = NgbDate.from(date);
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
        if (period === void 0) {
            period = 'd';
        }
        if (number === void 0) {
            number = 1;
        }
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
        var MuhDate = this.toGregorian(new NgbDate(date.year, 1, 1)); // Compare with Muharram 1
        return Math.floor(Math.round((time - MuhDate.getTime()) / 86400000) / 7) + 1;
    };
    NgbCalendarIslamicCivil.prototype.getToday = function () { return this.fromGregorian(new Date()); };
    return NgbCalendarIslamicCivil;
}(NgbCalendarHijri));
NgbCalendarIslamicCivil.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* Injectable */] },
];
/** @nocollapse */
NgbCalendarIslamicCivil.ctorParameters = function () { return []; };
var NgbDatepickerModule = (function () {
    function NgbDatepickerModule() {
    }
    NgbDatepickerModule.forRoot = function () {
        return {
            ngModule: NgbDatepickerModule,
            providers: [
                { provide: NgbCalendar, useClass: NgbCalendarGregorian },
                { provide: NgbDatepickerI18n, useClass: NgbDatepickerI18nDefault },
                { provide: NgbDateParserFormatter, useClass: NgbDateISOParserFormatter }, NgbDatepickerConfig
            ]
        };
    };
    return NgbDatepickerModule;
}());
NgbDatepickerModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */], args: [{
                declarations: [
                    NgbDatepicker, NgbDatepickerMonthView, NgbDatepickerNavigation, NgbDatepickerNavigationSelect, NgbDatepickerDayView,
                    NgbInputDatepicker
                ],
                exports: [NgbDatepicker, NgbInputDatepicker],
                imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["h" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* FormsModule */]],
                entryComponents: [NgbDatepicker]
            },] },
];
/** @nocollapse */
NgbDatepickerModule.ctorParameters = function () { return []; };
/**
 * Configuration service for the NgbDropdown directive.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the dropdowns used in the application.
 */
var NgbDropdownConfig = (function () {
    function NgbDropdownConfig() {
        this.up = false;
        this.autoClose = true;
    }
    return NgbDropdownConfig;
}());
NgbDropdownConfig.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* Injectable */] },
];
/** @nocollapse */
NgbDropdownConfig.ctorParameters = function () { return []; };
/**
 * Transforms a node into a dropdown.
 */
var NgbDropdown = (function () {
    function NgbDropdown(config) {
        /**
         *  Defines whether or not the dropdown-menu is open initially.
         */
        this._open = false;
        /**
         *  An event fired when the dropdown is opened or closed.
         *  Event's payload equals whether dropdown is open.
         */
        this.openChange = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["r" /* EventEmitter */]();
        this.up = config.up;
        this.autoClose = config.autoClose;
    }
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
    NgbDropdown.prototype.closeFromOutsideClick = function ($event) {
        if (this.autoClose && $event.button !== 2 && !this._isEventFromToggle($event)) {
            this.close();
        }
    };
    NgbDropdown.prototype.closeFromOutsideEsc = function () {
        if (this.autoClose) {
            this.close();
        }
    };
    Object.defineProperty(NgbDropdown.prototype, "toggleElement", {
        /**
         * @internal
         */
        set: function (toggleElement) { this._toggleElement = toggleElement; },
        enumerable: true,
        configurable: true
    });
    NgbDropdown.prototype._isEventFromToggle = function ($event) { return !!this._toggleElement && this._toggleElement.contains($event.target); };
    return NgbDropdown;
}());
NgbDropdown.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* Directive */], args: [{
                selector: '[ngbDropdown]',
                exportAs: 'ngbDropdown',
                host: {
                    '[class.dropdown]': '!up',
                    '[class.dropup]': 'up',
                    '[class.show]': 'isOpen()',
                    '(keyup.esc)': 'closeFromOutsideEsc()',
                    '(document:click)': 'closeFromOutsideClick($event)'
                }
            },] },
];
/** @nocollapse */
NgbDropdown.ctorParameters = function () {
    return [
        { type: NgbDropdownConfig, },
    ];
};
NgbDropdown.propDecorators = {
    'up': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'autoClose': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    '_open': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */], args: ['open',] },],
    'openChange': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* Output */] },],
};
/**
 * Allows the dropdown to be toggled via click. This directive is optional.
 */
var NgbDropdownToggle = (function () {
    function NgbDropdownToggle(dropdown, elementRef) {
        this.dropdown = dropdown;
        dropdown.toggleElement = elementRef.nativeElement;
    }
    NgbDropdownToggle.prototype.toggleOpen = function () { this.dropdown.toggle(); };
    return NgbDropdownToggle;
}());
NgbDropdownToggle.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* Directive */], args: [{
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
NgbDropdownToggle.ctorParameters = function () {
    return [
        { type: NgbDropdown, },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["l" /* ElementRef */], },
    ];
};
var NGB_DROPDOWN_DIRECTIVES = [NgbDropdownToggle, NgbDropdown];
var NgbDropdownModule = (function () {
    function NgbDropdownModule() {
    }
    NgbDropdownModule.forRoot = function () { return { ngModule: NgbDropdownModule, providers: [NgbDropdownConfig] }; };
    return NgbDropdownModule;
}());
NgbDropdownModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */], args: [{ declarations: NGB_DROPDOWN_DIRECTIVES, exports: NGB_DROPDOWN_DIRECTIVES },] },
];
/** @nocollapse */
NgbDropdownModule.ctorParameters = function () { return []; };
var NgbModalBackdrop = (function () {
    function NgbModalBackdrop() {
    }
    return NgbModalBackdrop;
}());
NgbModalBackdrop.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* Component */], args: [{ selector: 'ngb-modal-backdrop', template: '', host: { 'class': 'modal-backdrop fade show' } },] },
];
/** @nocollapse */
NgbModalBackdrop.ctorParameters = function () { return []; };
var ModalDismissReasons;
(function (ModalDismissReasons) {
    ModalDismissReasons[ModalDismissReasons["BACKDROP_CLICK"] = 0] = "BACKDROP_CLICK";
    ModalDismissReasons[ModalDismissReasons["ESC"] = 1] = "ESC";
})(ModalDismissReasons || (ModalDismissReasons = {}));
var NgbModalWindow = (function () {
    function NgbModalWindow(_elRef, _renderer) {
        this._elRef = _elRef;
        this._renderer = _renderer;
        this.backdrop = true;
        this.keyboard = true;
        this.dismissEvent = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["r" /* EventEmitter */]();
    }
    NgbModalWindow.prototype.backdropClick = function ($event) {
        if (this.backdrop === true && this._elRef.nativeElement === $event.target) {
            this.dismiss(ModalDismissReasons.BACKDROP_CLICK);
        }
    };
    NgbModalWindow.prototype.escKey = function ($event) {
        if (this.keyboard && !$event.defaultPrevented) {
            this.dismiss(ModalDismissReasons.ESC);
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
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* Component */], args: [{
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
NgbModalWindow.ctorParameters = function () {
    return [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["l" /* ElementRef */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["k" /* Renderer2 */], },
    ];
};
NgbModalWindow.propDecorators = {
    'backdrop': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'keyboard': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'size': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'windowClass': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'dismissEvent': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* Output */], args: ['dismiss',] },],
};
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
        else if (content instanceof __WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* TemplateRef */]) {
            var viewRef = this._viewContainerRef.createEmbeddedView(content, context);
            return new ContentRef([viewRef.rootNodes], viewRef);
        }
        else {
            return new ContentRef([[this._renderer.createText("" + content)]]);
        }
    };
    return PopupService;
}());
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
NgbActiveModal.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* Injectable */] },
];
/** @nocollapse */
NgbActiveModal.ctorParameters = function () { return []; };
/**
 * A reference to a newly opened modal.
 */
var NgbModalRef = (function () {
    function NgbModalRef(_windowCmptRef, _contentRef, _backdropCmptRef) {
        var _this = this;
        this._windowCmptRef = _windowCmptRef;
        this._contentRef = _contentRef;
        this._backdropCmptRef = _backdropCmptRef;
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
            this._reject(reason);
            this._removeModalElements();
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
NgbModalRef.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* Injectable */] },
];
/** @nocollapse */
NgbModalRef.ctorParameters = function () {
    return [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ComponentRef */], },
        { type: ContentRef, },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ComponentRef */], },
    ];
};
var NgbModalStack = (function () {
    function NgbModalStack(_applicationRef, _injector, _componentFactoryResolver) {
        this._applicationRef = _applicationRef;
        this._injector = _injector;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._backdropFactory = _componentFactoryResolver.resolveComponentFactory(NgbModalBackdrop);
        this._windowFactory = _componentFactoryResolver.resolveComponentFactory(NgbModalWindow);
    }
    NgbModalStack.prototype.open = function (moduleCFR, contentInjector, content, options) {
        var containerSelector = options.container || 'body';
        var containerEl = document.querySelector(containerSelector);
        if (!containerEl) {
            throw new Error("The specified modal container \"" + containerSelector + "\" was not found in the DOM.");
        }
        var activeModal = new NgbActiveModal();
        var contentRef = this._getContentRef(moduleCFR, contentInjector, content, activeModal);
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
        ngbModalRef = new NgbModalRef(windowCmptRef, contentRef, backdropCmptRef);
        activeModal.close = function (result) { ngbModalRef.close(result); };
        activeModal.dismiss = function (reason) { ngbModalRef.dismiss(reason); };
        this._applyWindowOptions(windowCmptRef.instance, options);
        return ngbModalRef;
    };
    NgbModalStack.prototype._applyWindowOptions = function (windowInstance, options) {
        ['backdrop', 'keyboard', 'size', 'windowClass'].forEach(function (optionName) {
            if (isDefined(options[optionName])) {
                windowInstance[optionName] = options[optionName];
            }
        });
    };
    NgbModalStack.prototype._getContentRef = function (moduleCFR, contentInjector, content, context) {
        if (!content) {
            return new ContentRef([]);
        }
        else if (content instanceof __WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* TemplateRef */]) {
            var viewRef = content.createEmbeddedView(context);
            this._applicationRef.attachView(viewRef);
            return new ContentRef([viewRef.rootNodes], viewRef);
        }
        else if (isString(content)) {
            return new ContentRef([[document.createTextNode("" + content)]]);
        }
        else {
            var contentCmptFactory = moduleCFR.resolveComponentFactory(content);
            var modalContentInjector = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ReflectiveInjector */].resolveAndCreate([{ provide: NgbActiveModal, useValue: context }], contentInjector);
            var componentRef = contentCmptFactory.create(modalContentInjector);
            this._applicationRef.attachView(componentRef.hostView);
            return new ContentRef([[componentRef.location.nativeElement]], componentRef.hostView, componentRef);
        }
    };
    return NgbModalStack;
}());
NgbModalStack.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* Injectable */] },
];
/** @nocollapse */
NgbModalStack.ctorParameters = function () {
    return [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["z" /* ApplicationRef */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["y" /* Injector */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* ComponentFactoryResolver */], },
    ];
};
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
        if (options === void 0) {
            options = {};
        }
        return this._modalStack.open(this._moduleCFR, this._injector, content, options);
    };
    return NgbModal;
}());
NgbModal.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* Injectable */] },
];
/** @nocollapse */
NgbModal.ctorParameters = function () {
    return [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* ComponentFactoryResolver */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["y" /* Injector */], },
        { type: NgbModalStack, },
    ];
};
var NgbModalModule = (function () {
    function NgbModalModule() {
    }
    NgbModalModule.forRoot = function () { return { ngModule: NgbModalModule, providers: [NgbModal, NgbModalStack] }; };
    return NgbModalModule;
}());
NgbModalModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */], args: [{
                declarations: [NgbModalBackdrop, NgbModalWindow],
                entryComponents: [NgbModalBackdrop, NgbModalWindow],
                providers: [NgbModal]
            },] },
];
/** @nocollapse */
NgbModalModule.ctorParameters = function () { return []; };
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
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* Injectable */] },
];
/** @nocollapse */
NgbPaginationConfig.ctorParameters = function () { return []; };
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
        this.pageChange = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["r" /* EventEmitter */](true);
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
        this.page = getValueInRange(newPageNo, this.pageCount, 1);
        if (this.page !== prevPageNo) {
            this.pageChange.emit(this.page);
        }
    };
    NgbPagination.prototype._updatePages = function (newPage) {
        this.pageCount = Math.ceil(this.collectionSize / this.pageSize);
        if (!isNumber(this.pageCount)) {
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
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* Component */], args: [{
                selector: 'ngb-pagination',
                changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* ChangeDetectionStrategy */].OnPush,
                host: { 'role': 'navigation' },
                template: "\n    <ul [class]=\"'pagination' + (size ? ' pagination-' + size : '')\">\n      <li *ngIf=\"boundaryLinks\" class=\"page-item\"\n        [class.disabled]=\"!hasPrevious() || disabled\">\n        <a aria-label=\"First\" class=\"page-link\" href (click)=\"!!selectPage(1)\" [attr.tabindex]=\"(hasPrevious() ? null : '-1')\">\n          <span aria-hidden=\"true\">&laquo;&laquo;</span>\n        </a>\n      </li>\n\n      <li *ngIf=\"directionLinks\" class=\"page-item\"\n        [class.disabled]=\"!hasPrevious() || disabled\">\n        <a aria-label=\"Previous\" class=\"page-link\" href (click)=\"!!selectPage(page-1)\" [attr.tabindex]=\"(hasPrevious() ? null : '-1')\">\n          <span aria-hidden=\"true\">&laquo;</span>\n        </a>\n      </li>\n      <li *ngFor=\"let pageNumber of pages\" class=\"page-item\" [class.active]=\"pageNumber === page\"\n        [class.disabled]=\"isEllipsis(pageNumber) || disabled\">\n        <a *ngIf=\"isEllipsis(pageNumber)\" class=\"page-link\">...</a>\n        <a *ngIf=\"!isEllipsis(pageNumber)\" class=\"page-link\" href (click)=\"!!selectPage(pageNumber)\">\n          {{pageNumber}}\n          <span *ngIf=\"pageNumber === page\" class=\"sr-only\">(current)</span>\n        </a>\n      </li>\n      <li *ngIf=\"directionLinks\" class=\"page-item\" [class.disabled]=\"!hasNext() || disabled\">\n        <a aria-label=\"Next\" class=\"page-link\" href (click)=\"!!selectPage(page+1)\" [attr.tabindex]=\"(hasNext() ? null : '-1')\">\n          <span aria-hidden=\"true\">&raquo;</span>\n        </a>\n      </li>\n\n      <li *ngIf=\"boundaryLinks\" class=\"page-item\" [class.disabled]=\"!hasNext() || disabled\">\n        <a aria-label=\"Last\" class=\"page-link\" href (click)=\"!!selectPage(pageCount)\" [attr.tabindex]=\"(hasNext() ? null : '-1')\">\n          <span aria-hidden=\"true\">&raquo;&raquo;</span>\n        </a>\n      </li>\n    </ul>\n  "
            },] },
];
/** @nocollapse */
NgbPagination.ctorParameters = function () {
    return [
        { type: NgbPaginationConfig, },
    ];
};
NgbPagination.propDecorators = {
    'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'boundaryLinks': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'directionLinks': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'ellipses': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'rotate': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'collectionSize': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'maxSize': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'page': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'pageSize': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'pageChange': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* Output */] },],
    'size': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
};
var NgbPaginationModule = (function () {
    function NgbPaginationModule() {
    }
    NgbPaginationModule.forRoot = function () { return { ngModule: NgbPaginationModule, providers: [NgbPaginationConfig] }; };
    return NgbPaginationModule;
}());
NgbPaginationModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */], args: [{ declarations: [NgbPagination], exports: [NgbPagination], imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["h" /* CommonModule */]] },] },
];
/** @nocollapse */
NgbPaginationModule.ctorParameters = function () { return []; };
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
    if (aliases === void 0) {
        aliases = DEFAULT_ALIASES;
    }
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
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* Injectable */] },
];
/** @nocollapse */
NgbPopoverConfig.ctorParameters = function () { return []; };
var nextId$2 = 0;
var NgbPopoverWindow = (function () {
    function NgbPopoverWindow() {
        this.placement = 'top';
    }
    return NgbPopoverWindow;
}());
NgbPopoverWindow.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* Component */], args: [{
                selector: 'ngb-popover-window',
                changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* ChangeDetectionStrategy */].OnPush,
                host: { '[class]': '"popover show popover-" + placement', 'role': 'tooltip', '[id]': 'id' },
                template: "\n    <h3 class=\"popover-title\">{{title}}</h3><div class=\"popover-content\"><ng-content></ng-content></div>\n    "
            },] },
];
/** @nocollapse */
NgbPopoverWindow.ctorParameters = function () { return []; };
NgbPopoverWindow.propDecorators = {
    'placement': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'title': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'id': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
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
        this.shown = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["r" /* EventEmitter */]();
        /**
         * Emits an event when the popover is hidden
         */
        this.hidden = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["r" /* EventEmitter */]();
        this._ngbPopoverWindowId = "ngb-popover-" + nextId$2++;
        this.placement = config.placement;
        this.triggers = config.triggers;
        this.container = config.container;
        this._popupService = new PopupService(NgbPopoverWindow, injector, viewContainerRef, _renderer, componentFactoryResolver);
        this._zoneSubscription = ngZone.onStable.subscribe(function () {
            if (_this._windowRef) {
                positionElements(_this._elementRef.nativeElement, _this._windowRef.location.nativeElement, _this.placement, _this.container === 'body');
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
            this._windowRef.instance.placement = this.placement;
            this._windowRef.instance.title = this.popoverTitle;
            this._windowRef.instance.id = this._ngbPopoverWindowId;
            this._renderer.setAttribute(this._elementRef.nativeElement, 'aria-describedby', this._ngbPopoverWindowId);
            if (this.container === 'body') {
                window.document.querySelector(this.container).appendChild(this._windowRef.location.nativeElement);
            }
            // position popover along the element
            positionElements(this._elementRef.nativeElement, this._windowRef.location.nativeElement, this.placement, this.container === 'body');
            // we need to manually invoke change detection since events registered via
            // Renderer::listen() are not picked up by change detection with the OnPush strategy
            this._windowRef.changeDetectorRef.markForCheck();
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
        this._unregisterListenersFn = listenToTriggers(this._renderer, this._elementRef.nativeElement, this.triggers, this.open.bind(this), this.close.bind(this), this.toggle.bind(this));
    };
    NgbPopover.prototype.ngOnDestroy = function () {
        this.close();
        this._unregisterListenersFn();
        this._zoneSubscription.unsubscribe();
    };
    return NgbPopover;
}());
NgbPopover.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* Directive */], args: [{ selector: '[ngbPopover]', exportAs: 'ngbPopover' },] },
];
/** @nocollapse */
NgbPopover.ctorParameters = function () {
    return [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["l" /* ElementRef */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["k" /* Renderer2 */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["y" /* Injector */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* ComponentFactoryResolver */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["s" /* ViewContainerRef */], },
        { type: NgbPopoverConfig, },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["N" /* NgZone */], },
    ];
};
NgbPopover.propDecorators = {
    'ngbPopover': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'popoverTitle': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'placement': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'triggers': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'container': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'shown': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* Output */] },],
    'hidden': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* Output */] },],
};
var NgbPopoverModule = (function () {
    function NgbPopoverModule() {
    }
    NgbPopoverModule.forRoot = function () { return { ngModule: NgbPopoverModule, providers: [NgbPopoverConfig] }; };
    return NgbPopoverModule;
}());
NgbPopoverModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */], args: [{ declarations: [NgbPopover, NgbPopoverWindow], exports: [NgbPopover], entryComponents: [NgbPopoverWindow] },] },
];
/** @nocollapse */
NgbPopoverModule.ctorParameters = function () { return []; };
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
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* Injectable */] },
];
/** @nocollapse */
NgbProgressbarConfig.ctorParameters = function () { return []; };
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
    NgbProgressbar.prototype.getValue = function () { return getValueInRange(this.value, this.max); };
    NgbProgressbar.prototype.getPercentValue = function () { return 100 * this.getValue() / this.max; };
    return NgbProgressbar;
}());
NgbProgressbar.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* Component */], args: [{
                selector: 'ngb-progressbar',
                changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* ChangeDetectionStrategy */].OnPush,
                template: "\n    <div class=\"progress\">\n      <div class=\"progress-bar{{type ? ' bg-' + type : ''}}{{animated ? ' progress-bar-animated' : ''}}{{striped ?\n    ' progress-bar-striped' : ''}}\" role=\"progressbar\" [style.width.%]=\"getPercentValue()\"\n    [attr.aria-valuenow]=\"getValue()\" aria-valuemin=\"0\" [attr.aria-valuemax]=\"max\">\n        <span *ngIf=\"showValue\">{{getPercentValue()}}%</span><ng-content></ng-content>\n      </div>\n    </div>\n  "
            },] },
];
/** @nocollapse */
NgbProgressbar.ctorParameters = function () {
    return [
        { type: NgbProgressbarConfig, },
    ];
};
NgbProgressbar.propDecorators = {
    'max': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'animated': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'striped': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'showValue': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'type': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'value': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
};
var NgbProgressbarModule = (function () {
    function NgbProgressbarModule() {
    }
    NgbProgressbarModule.forRoot = function () { return { ngModule: NgbProgressbarModule, providers: [NgbProgressbarConfig] }; };
    return NgbProgressbarModule;
}());
NgbProgressbarModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */], args: [{ declarations: [NgbProgressbar], exports: [NgbProgressbar], imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["h" /* CommonModule */]] },] },
];
/** @nocollapse */
NgbProgressbarModule.ctorParameters = function () { return []; };
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
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* Injectable */] },
];
/** @nocollapse */
NgbRatingConfig.ctorParameters = function () { return []; };
var Key$1;
(function (Key) {
    Key[Key["End"] = 35] = "End";
    Key[Key["Home"] = 36] = "Home";
    Key[Key["ArrowLeft"] = 37] = "ArrowLeft";
    Key[Key["ArrowUp"] = 38] = "ArrowUp";
    Key[Key["ArrowRight"] = 39] = "ArrowRight";
    Key[Key["ArrowDown"] = 40] = "ArrowDown";
})(Key$1 || (Key$1 = {}));
var NGB_RATING_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* NG_VALUE_ACCESSOR */],
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["P" /* forwardRef */])(function () { return NgbRating; }),
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
        this.hover = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["r" /* EventEmitter */]();
        /**
         * An event fired when a user stops hovering over a given rating.
         * Event's payload equals to the rating of the last item being hovered over.
         */
        this.leave = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["r" /* EventEmitter */]();
        /**
         * An event fired when a user selects a new rating.
         * Event's payload equals to the newly selected rating.
         */
        this.rateChange = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["r" /* EventEmitter */](true);
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
        if (Key$1[toString(event.which)]) {
            event.preventDefault();
            switch (event.which) {
                case Key$1.ArrowDown:
                case Key$1.ArrowLeft:
                    this.update(this.rate - 1);
                    break;
                case Key$1.ArrowUp:
                case Key$1.ArrowRight:
                    this.update(this.rate + 1);
                    break;
                case Key$1.Home:
                    this.update(0);
                    break;
                case Key$1.End:
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
        if (internalChange === void 0) {
            internalChange = true;
        }
        var newRate = getValueInRange(value, this.max, 0);
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
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* Component */], args: [{
                selector: 'ngb-rating',
                changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* ChangeDetectionStrategy */].OnPush,
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
                template: "\n    <ng-template #t let-fill=\"fill\">{{ fill === 100 ? '&#9733;' : '&#9734;' }}</ng-template>\n    <ng-template ngFor [ngForOf]=\"contexts\" let-index=\"index\">\n      <span class=\"sr-only\">({{ index < nextRate ? '*' : ' ' }})</span>\n      <span (mouseenter)=\"enter(index + 1)\" (click)=\"handleClick(index + 1)\" [style.cursor]=\"readonly || disabled ? 'default' : 'pointer'\">\n        <ng-template [ngTemplateOutlet]=\"starTemplate || t\" [ngOutletContext]=\"contexts[index]\"></ng-template>\n      </span>\n    </ng-template>\n  ",
                providers: [NGB_RATING_VALUE_ACCESSOR]
            },] },
];
/** @nocollapse */
NgbRating.ctorParameters = function () {
    return [
        { type: NgbRatingConfig, },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["p" /* ChangeDetectorRef */], },
    ];
};
NgbRating.propDecorators = {
    'max': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'rate': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'readonly': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'resettable': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'starTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* ContentChild */], args: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* TemplateRef */],] },],
    'hover': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* Output */] },],
    'leave': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* Output */] },],
    'rateChange': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* Output */] },],
};
var NgbRatingModule = (function () {
    function NgbRatingModule() {
    }
    NgbRatingModule.forRoot = function () { return { ngModule: NgbRatingModule, providers: [NgbRatingConfig] }; };
    return NgbRatingModule;
}());
NgbRatingModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */], args: [{ declarations: [NgbRating], exports: [NgbRating], imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["h" /* CommonModule */]] },] },
];
/** @nocollapse */
NgbRatingModule.ctorParameters = function () { return []; };
/**
 * Configuration service for the NgbTabset component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the tabsets used in the application.
 */
var NgbTabsetConfig = (function () {
    function NgbTabsetConfig() {
        this.justify = 'start';
        this.type = 'tabs';
    }
    return NgbTabsetConfig;
}());
NgbTabsetConfig.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* Injectable */] },
];
/** @nocollapse */
NgbTabsetConfig.ctorParameters = function () { return []; };
var nextId$3 = 0;
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
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* Directive */], args: [{ selector: 'ng-template[ngbTabTitle]' },] },
];
/** @nocollapse */
NgbTabTitle.ctorParameters = function () {
    return [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* TemplateRef */], },
    ];
};
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
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* Directive */], args: [{ selector: 'ng-template[ngbTabContent]' },] },
];
/** @nocollapse */
NgbTabContent.ctorParameters = function () {
    return [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* TemplateRef */], },
    ];
};
/**
 * A directive representing an individual tab.
 */
var NgbTab = (function () {
    function NgbTab() {
        /**
         * Unique tab identifier. Must be unique for the entire document for proper accessibility support.
         */
        this.id = "ngb-tab-" + nextId$3++;
        /**
         * Allows toggling disabled state of a given state. Disabled tabs can't be selected.
         */
        this.disabled = false;
    }
    return NgbTab;
}());
NgbTab.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* Directive */], args: [{ selector: 'ngb-tab' },] },
];
/** @nocollapse */
NgbTab.ctorParameters = function () { return []; };
NgbTab.propDecorators = {
    'id': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'title': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'contentTpl': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* ContentChild */], args: [NgbTabContent,] },],
    'titleTpl': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* ContentChild */], args: [NgbTabTitle,] },],
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
        this.tabChange = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["r" /* EventEmitter */]();
        this.type = config.type;
        this.justify = config.justify;
    }
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
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* Component */], args: [{
                selector: 'ngb-tabset',
                exportAs: 'ngbTabset',
                template: "\n    <ul [class]=\"'nav nav-' + type + ' justify-content-' + justify\" role=\"tablist\">\n      <li class=\"nav-item\" *ngFor=\"let tab of tabs\">\n        <a [id]=\"tab.id\" class=\"nav-link\" [class.active]=\"tab.id === activeId\" [class.disabled]=\"tab.disabled\"\n          href (click)=\"!!select(tab.id)\" role=\"tab\" [attr.tabindex]=\"(tab.disabled ? '-1': undefined)\"\n          [attr.aria-controls]=\"(!destroyOnHide || tab.id === activeId ? tab.id + '-panel' : null)\"\n          [attr.aria-expanded]=\"tab.id === activeId\" [attr.aria-disabled]=\"tab.disabled\">\n          {{tab.title}}<ng-template [ngTemplateOutlet]=\"tab.titleTpl?.templateRef\"></ng-template>\n        </a>\n      </li>\n    </ul>\n    <div class=\"tab-content\">\n      <ng-template ngFor let-tab [ngForOf]=\"tabs\">\n        <div\n          class=\"tab-pane {{tab.id === activeId ? 'active' : null}}\"\n          *ngIf=\"!destroyOnHide || tab.id === activeId\"\n          role=\"tabpanel\"\n          [attr.aria-labelledby]=\"tab.id\" id=\"{{tab.id}}-panel\"\n          [attr.aria-expanded]=\"tab.id === activeId\">\n          <ng-template [ngTemplateOutlet]=\"tab.contentTpl.templateRef\"></ng-template>\n        </div>\n      </ng-template>\n    </div>\n  "
            },] },
];
/** @nocollapse */
NgbTabset.ctorParameters = function () {
    return [
        { type: NgbTabsetConfig, },
    ];
};
NgbTabset.propDecorators = {
    'tabs': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ContentChildren */], args: [NgbTab,] },],
    'activeId': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'destroyOnHide': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'justify': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'type': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'tabChange': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* Output */] },],
};
var NGB_TABSET_DIRECTIVES = [NgbTabset, NgbTab, NgbTabContent, NgbTabTitle];
var NgbTabsetModule = (function () {
    function NgbTabsetModule() {
    }
    NgbTabsetModule.forRoot = function () { return { ngModule: NgbTabsetModule, providers: [NgbTabsetConfig] }; };
    return NgbTabsetModule;
}());
NgbTabsetModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */], args: [{ declarations: NGB_TABSET_DIRECTIVES, exports: NGB_TABSET_DIRECTIVES, imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["h" /* CommonModule */]] },] },
];
/** @nocollapse */
NgbTabsetModule.ctorParameters = function () { return []; };
var NgbTime = (function () {
    function NgbTime(hour, minute, second) {
        this.hour = toInteger(hour);
        this.minute = toInteger(minute);
        this.second = toInteger(second);
    }
    NgbTime.prototype.changeHour = function (step) {
        if (step === void 0) {
            step = 1;
        }
        this.updateHour((isNaN(this.hour) ? 0 : this.hour) + step);
    };
    NgbTime.prototype.updateHour = function (hour) {
        if (isNumber(hour)) {
            this.hour = (hour < 0 ? 24 + hour : hour) % 24;
        }
        else {
            this.hour = NaN;
        }
    };
    NgbTime.prototype.changeMinute = function (step) {
        if (step === void 0) {
            step = 1;
        }
        this.updateMinute((isNaN(this.minute) ? 0 : this.minute) + step);
    };
    NgbTime.prototype.updateMinute = function (minute) {
        if (isNumber(minute)) {
            this.minute = minute % 60 < 0 ? 60 + minute % 60 : minute % 60;
            this.changeHour(Math.floor(minute / 60));
        }
        else {
            this.minute = NaN;
        }
    };
    NgbTime.prototype.changeSecond = function (step) {
        if (step === void 0) {
            step = 1;
        }
        this.updateSecond((isNaN(this.second) ? 0 : this.second) + step);
    };
    NgbTime.prototype.updateSecond = function (second) {
        if (isNumber(second)) {
            this.second = second < 0 ? 60 + second % 60 : second % 60;
            this.changeMinute(Math.floor(second / 60));
        }
        else {
            this.second = NaN;
        }
    };
    NgbTime.prototype.isValid = function (checkSecs) {
        if (checkSecs === void 0) {
            checkSecs = true;
        }
        return isNumber(this.hour) && isNumber(this.minute) && (checkSecs ? isNumber(this.second) : true);
    };
    NgbTime.prototype.toString = function () { return (this.hour || 0) + ":" + (this.minute || 0) + ":" + (this.second || 0); };
    return NgbTime;
}());
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
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* Injectable */] },
];
/** @nocollapse */
NgbTimepickerConfig.ctorParameters = function () { return []; };
var NGB_TIMEPICKER_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* NG_VALUE_ACCESSOR */],
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["P" /* forwardRef */])(function () { return NgbTimepicker; }),
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
        this.model = value ? new NgbTime(value.hour, value.minute, value.second) : new NgbTime();
        if (!this.seconds && (!value || !isNumber(value.second))) {
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
        var enteredHour = toInteger(newVal);
        if (this.meridian && (isPM && enteredHour < 12 || !isPM && enteredHour === 12)) {
            this.model.updateHour(enteredHour + 12);
        }
        else {
            this.model.updateHour(enteredHour);
        }
        this.propagateModelChange();
    };
    NgbTimepicker.prototype.updateMinute = function (newVal) {
        this.model.updateMinute(toInteger(newVal));
        this.propagateModelChange();
    };
    NgbTimepicker.prototype.updateSecond = function (newVal) {
        this.model.updateSecond(toInteger(newVal));
        this.propagateModelChange();
    };
    NgbTimepicker.prototype.toggleMeridian = function () {
        if (this.meridian) {
            this.changeHour(12);
        }
    };
    NgbTimepicker.prototype.formatHour = function (value) {
        if (isNumber(value)) {
            if (this.meridian) {
                return padNumber(value % 12 === 0 ? 12 : value % 12);
            }
            else {
                return padNumber(value % 24);
            }
        }
        else {
            return padNumber(NaN);
        }
    };
    NgbTimepicker.prototype.formatMinSec = function (value) { return padNumber(value); };
    NgbTimepicker.prototype.setFormControlSize = function () { return { 'form-control-sm': this.size === 'small', 'form-control-lg': this.size === 'large' }; };
    NgbTimepicker.prototype.setButtonSize = function () { return { 'btn-sm': this.size === 'small', 'btn-lg': this.size === 'large' }; };
    NgbTimepicker.prototype.ngOnChanges = function (changes) {
        if (changes['seconds'] && !this.seconds && this.model && !isNumber(this.model.second)) {
            this.model.second = 0;
            this.propagateModelChange(false);
        }
    };
    NgbTimepicker.prototype.propagateModelChange = function (touched) {
        if (touched === void 0) {
            touched = true;
        }
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
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* Component */], args: [{
                selector: 'ngb-timepicker',
                styles: ["\n    .ngb-tp {\n      display: flex;\n      align-items: center;\n    }\n\n    .ngb-tp-hour, .ngb-tp-minute, .ngb-tp-second, .ngb-tp-meridian {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: space-around;\n    }\n\n    .ngb-tp-spacer {\n      width: 1em;\n      text-align: center;\n    }\n\n    .chevron::before {\n      border-style: solid;\n      border-width: 0.29em 0.29em 0 0;\n      content: '';\n      display: inline-block;\n      height: 0.69em;\n      left: 0.05em;\n      position: relative;\n      top: 0.15em;\n      transform: rotate(-45deg);\n      -webkit-transform: rotate(-45deg);\n      -ms-transform: rotate(-45deg);\n      vertical-align: middle;\n      width: 0.71em;\n    }\n\n    .chevron.bottom:before {\n      top: -.3em;\n      -webkit-transform: rotate(135deg);\n      -ms-transform: rotate(135deg);\n      transform: rotate(135deg);\n    }\n\n    .btn-link {\n      outline: 0;\n    }\n\n    .btn-link.disabled {\n      cursor: not-allowed;\n      opacity: .65;\n    }\n\n    input {\n      text-align: center;\n      display: inline-block;\n      width: auto;\n    }\n  "],
                template: "\n    <fieldset [disabled]=\"disabled\" [class.disabled]=\"disabled\">\n      <div class=\"ngb-tp\">\n        <div class=\"ngb-tp-hour\">\n          <button *ngIf=\"spinners\" type=\"button\" class=\"btn-link\" [ngClass]=\"setButtonSize()\" (click)=\"changeHour(hourStep)\"\n            [disabled]=\"disabled\" [class.disabled]=\"disabled\">\n            <span class=\"chevron\"></span>\n            <span class=\"sr-only\">Increment hours</span>\n          </button>\n          <input type=\"text\" class=\"form-control\" [ngClass]=\"setFormControlSize()\" maxlength=\"2\" size=\"2\" placeholder=\"HH\"\n            [value]=\"formatHour(model?.hour)\" (change)=\"updateHour($event.target.value)\"\n            [readonly]=\"readonlyInputs\" [disabled]=\"disabled\" aria-label=\"Hours\">\n          <button *ngIf=\"spinners\" type=\"button\" class=\"btn-link\" [ngClass]=\"setButtonSize()\" (click)=\"changeHour(-hourStep)\"\n            [disabled]=\"disabled\" [class.disabled]=\"disabled\">\n            <span class=\"chevron bottom\"></span>\n            <span class=\"sr-only\">Decrement hours</span>\n          </button>\n        </div>\n        <div class=\"ngb-tp-spacer\">:</div>\n        <div class=\"ngb-tp-minute\">\n          <button *ngIf=\"spinners\" type=\"button\" class=\"btn-link\" [ngClass]=\"setButtonSize()\" (click)=\"changeMinute(minuteStep)\"\n            [disabled]=\"disabled\" [class.disabled]=\"disabled\">\n            <span class=\"chevron\"></span>\n            <span class=\"sr-only\">Increment minutes</span>\n          </button>\n          <input type=\"text\" class=\"form-control\" [ngClass]=\"setFormControlSize()\" maxlength=\"2\" size=\"2\" placeholder=\"MM\"\n            [value]=\"formatMinSec(model?.minute)\" (change)=\"updateMinute($event.target.value)\"\n            [readonly]=\"readonlyInputs\" [disabled]=\"disabled\" aria-label=\"Minutes\">\n          <button *ngIf=\"spinners\" type=\"button\" class=\"btn-link\" [ngClass]=\"setButtonSize()\" (click)=\"changeMinute(-minuteStep)\"\n            [disabled]=\"disabled\" [class.disabled]=\"disabled\">\n            <span class=\"chevron bottom\"></span>\n            <span class=\"sr-only\">Decrement minutes</span>\n          </button>\n        </div>\n        <div *ngIf=\"seconds\" class=\"ngb-tp-spacer\">:</div>\n        <div *ngIf=\"seconds\" class=\"ngb-tp-second\">\n          <button *ngIf=\"spinners\" type=\"button\" class=\"btn-link\" [ngClass]=\"setButtonSize()\" (click)=\"changeSecond(secondStep)\"\n            [disabled]=\"disabled\" [class.disabled]=\"disabled\">\n            <span class=\"chevron\"></span>\n            <span class=\"sr-only\">Increment seconds</span>\n          </button>\n          <input type=\"text\" class=\"form-control\" [ngClass]=\"setFormControlSize()\" maxlength=\"2\" size=\"2\" placeholder=\"SS\"\n            [value]=\"formatMinSec(model?.second)\" (change)=\"updateSecond($event.target.value)\"\n            [readonly]=\"readonlyInputs\" [disabled]=\"disabled\" aria-label=\"Seconds\">\n          <button *ngIf=\"spinners\" type=\"button\" class=\"btn-link\" [ngClass]=\"setButtonSize()\" (click)=\"changeSecond(-secondStep)\"\n            [disabled]=\"disabled\" [class.disabled]=\"disabled\">\n            <span class=\"chevron bottom\"></span>\n            <span class=\"sr-only\">Decrement seconds</span>\n          </button>\n        </div>\n        <div *ngIf=\"meridian\" class=\"ngb-tp-spacer\"></div>\n        <div *ngIf=\"meridian\" class=\"ngb-tp-meridian\">\n          <button type=\"button\" class=\"btn btn-outline-primary\" [ngClass]=\"setButtonSize()\"\n            [disabled]=\"disabled\" [class.disabled]=\"disabled\"\n            (click)=\"toggleMeridian()\">{{model?.hour >= 12 ? 'PM' : 'AM'}}</button>\n        </div>\n      </div>\n    </fieldset>\n  ",
                providers: [NGB_TIMEPICKER_VALUE_ACCESSOR]
            },] },
];
/** @nocollapse */
NgbTimepicker.ctorParameters = function () {
    return [
        { type: NgbTimepickerConfig, },
    ];
};
NgbTimepicker.propDecorators = {
    'meridian': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'spinners': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'seconds': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'hourStep': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'minuteStep': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'secondStep': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'readonlyInputs': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'size': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
};
var NgbTimepickerModule = (function () {
    function NgbTimepickerModule() {
    }
    NgbTimepickerModule.forRoot = function () { return { ngModule: NgbTimepickerModule, providers: [NgbTimepickerConfig] }; };
    return NgbTimepickerModule;
}());
NgbTimepickerModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */], args: [{ declarations: [NgbTimepicker], exports: [NgbTimepicker], imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["h" /* CommonModule */]] },] },
];
/** @nocollapse */
NgbTimepickerModule.ctorParameters = function () { return []; };
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
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* Injectable */] },
];
/** @nocollapse */
NgbTooltipConfig.ctorParameters = function () { return []; };
var nextId$4 = 0;
var NgbTooltipWindow = (function () {
    function NgbTooltipWindow() {
        this.placement = 'top';
    }
    return NgbTooltipWindow;
}());
NgbTooltipWindow.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* Component */], args: [{
                selector: 'ngb-tooltip-window',
                changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* ChangeDetectionStrategy */].OnPush,
                host: { '[class]': '"tooltip show tooltip-" + placement', 'role': 'tooltip', '[id]': 'id' },
                template: "\n    <div class=\"tooltip-inner\"><ng-content></ng-content></div>\n    "
            },] },
];
/** @nocollapse */
NgbTooltipWindow.ctorParameters = function () { return []; };
NgbTooltipWindow.propDecorators = {
    'placement': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'id': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
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
        this.shown = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["r" /* EventEmitter */]();
        /**
         * Emits an event when the tooltip is hidden
         */
        this.hidden = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["r" /* EventEmitter */]();
        this._ngbTooltipWindowId = "ngb-tooltip-" + nextId$4++;
        this.placement = config.placement;
        this.triggers = config.triggers;
        this.container = config.container;
        this._popupService = new PopupService(NgbTooltipWindow, injector, viewContainerRef, _renderer, componentFactoryResolver);
        this._zoneSubscription = ngZone.onStable.subscribe(function () {
            if (_this._windowRef) {
                positionElements(_this._elementRef.nativeElement, _this._windowRef.location.nativeElement, _this.placement, _this.container === 'body');
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
            this._windowRef.instance.placement = this.placement;
            this._windowRef.instance.id = this._ngbTooltipWindowId;
            this._renderer.setAttribute(this._elementRef.nativeElement, 'aria-describedby', this._ngbTooltipWindowId);
            if (this.container === 'body') {
                window.document.querySelector(this.container).appendChild(this._windowRef.location.nativeElement);
            }
            // position tooltip along the element
            positionElements(this._elementRef.nativeElement, this._windowRef.location.nativeElement, this.placement, this.container === 'body');
            // we need to manually invoke change detection since events registered via
            // Renderer::listen() - to be determined if this is a bug in the Angular itself
            this._windowRef.changeDetectorRef.markForCheck();
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
        this._unregisterListenersFn = listenToTriggers(this._renderer, this._elementRef.nativeElement, this.triggers, this.open.bind(this), this.close.bind(this), this.toggle.bind(this));
    };
    NgbTooltip.prototype.ngOnDestroy = function () {
        this.close();
        this._unregisterListenersFn();
        this._zoneSubscription.unsubscribe();
    };
    return NgbTooltip;
}());
NgbTooltip.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* Directive */], args: [{ selector: '[ngbTooltip]', exportAs: 'ngbTooltip' },] },
];
/** @nocollapse */
NgbTooltip.ctorParameters = function () {
    return [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["l" /* ElementRef */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["k" /* Renderer2 */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["y" /* Injector */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* ComponentFactoryResolver */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["s" /* ViewContainerRef */], },
        { type: NgbTooltipConfig, },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["N" /* NgZone */], },
    ];
};
NgbTooltip.propDecorators = {
    'placement': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'triggers': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'container': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'shown': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* Output */] },],
    'hidden': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* Output */] },],
    'ngbTooltip': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
};
var NgbTooltipModule = (function () {
    function NgbTooltipModule() {
    }
    NgbTooltipModule.forRoot = function () { return { ngModule: NgbTooltipModule, providers: [NgbTooltipConfig] }; };
    return NgbTooltipModule;
}());
NgbTooltipModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */], args: [{ declarations: [NgbTooltip, NgbTooltipWindow], exports: [NgbTooltip], entryComponents: [NgbTooltipWindow] },] },
];
/** @nocollapse */
NgbTooltipModule.ctorParameters = function () { return []; };
var NgbHighlight = (function () {
    function NgbHighlight() {
        this.highlightClass = 'ngb-highlight';
    }
    NgbHighlight.prototype.ngOnChanges = function (changes) {
        var resultStr = toString(this.result);
        var resultLC = resultStr.toLowerCase();
        var termLC = toString(this.term).toLowerCase();
        var currentIdx = 0;
        if (termLC.length > 0) {
            this.parts = resultLC.split(new RegExp("(" + regExpEscape(termLC) + ")")).map(function (part) {
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
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* Component */], args: [{
                selector: 'ngb-highlight',
                changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* ChangeDetectionStrategy */].OnPush,
                template: "<ng-template ngFor [ngForOf]=\"parts\" let-part let-isOdd=\"odd\">" +
                    "<span *ngIf=\"isOdd\" class=\"{{highlightClass}}\">{{part}}</span><ng-template [ngIf]=\"!isOdd\">{{part}}</ng-template>" +
                    "</ng-template>",
                styles: ["\n    .ngb-highlight {\n      font-weight: bold;\n    }\n  "]
            },] },
];
/** @nocollapse */
NgbHighlight.ctorParameters = function () { return []; };
NgbHighlight.propDecorators = {
    'highlightClass': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'result': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'term': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
};
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
        this.formatter = toString;
        /**
         * Event raised when user selects a particular result row
         */
        this.selectEvent = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["r" /* EventEmitter */]();
        this.activeChangeEvent = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["r" /* EventEmitter */]();
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
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* Component */], args: [{
                selector: 'ngb-typeahead-window',
                exportAs: 'ngbTypeaheadWindow',
                host: { 'class': 'dropdown-menu', 'style': 'display: block', 'role': 'listbox', '[id]': 'id' },
                template: "\n    <ng-template #rt let-result=\"result\" let-term=\"term\" let-formatter=\"formatter\">\n      <ngb-highlight [result]=\"formatter(result)\" [term]=\"term\"></ngb-highlight>\n    </ng-template>\n    <ng-template ngFor [ngForOf]=\"results\" let-result let-idx=\"index\">\n      <button type=\"button\" class=\"dropdown-item\" role=\"option\"\n        [id]=\"id + '-' + idx\"\n        [class.active]=\"idx === activeIdx\"\n        (mouseenter)=\"markActive(idx)\"\n        (click)=\"select(result)\">\n          <ng-template [ngTemplateOutlet]=\"resultTemplate || rt\"\n          [ngOutletContext]=\"{result: result, term: term, formatter: formatter}\"></ng-template>\n      </button>\n    </ng-template>\n  "
            },] },
];
/** @nocollapse */
NgbTypeaheadWindow.ctorParameters = function () { return []; };
NgbTypeaheadWindow.propDecorators = {
    'id': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'focusFirst': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'results': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'term': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'formatter': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'resultTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'selectEvent': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* Output */], args: ['select',] },],
    'activeChangeEvent': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* Output */], args: ['activeChange',] },],
};
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
    }
    return NgbTypeaheadConfig;
}());
NgbTypeaheadConfig.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* Injectable */] },
];
/** @nocollapse */
NgbTypeaheadConfig.ctorParameters = function () { return []; };
var Key$2;
(function (Key) {
    Key[Key["Tab"] = 9] = "Tab";
    Key[Key["Enter"] = 13] = "Enter";
    Key[Key["Escape"] = 27] = "Escape";
    Key[Key["ArrowUp"] = 38] = "ArrowUp";
    Key[Key["ArrowDown"] = 40] = "ArrowDown";
})(Key$2 || (Key$2 = {}));
var NGB_TYPEAHEAD_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* NG_VALUE_ACCESSOR */],
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["P" /* forwardRef */])(function () { return NgbTypeahead; }),
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
        /**
         * An event emitted when a match is selected. Event payload is of type NgbTypeaheadSelectItemEvent.
         */
        this.selectItem = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["r" /* EventEmitter */]();
        this.popupId = "ngb-typeahead-" + nextWindowId++;
        this._onTouched = function () { };
        this._onChange = function (_) { };
        this.editable = config.editable;
        this.focusFirst = config.focusFirst;
        this.showHint = config.showHint;
        this._valueChanges = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12_rxjs_observable_fromEvent__["fromEvent"])(_elementRef.nativeElement, 'input', function ($event) { return $event.target.value; });
        this._popupService = new PopupService(NgbTypeaheadWindow, _injector, _viewContainerRef, _renderer, componentFactoryResolver);
        this._zoneSubscription = ngZone.onStable.subscribe(function () {
            if (_this.isPopupOpen()) {
                positionElements(_this._elementRef.nativeElement, _this._windowRef.location.nativeElement, 'bottom-left');
            }
        });
    }
    NgbTypeahead.prototype.ngOnInit = function () {
        var _this = this;
        var inputValues$ = __WEBPACK_IMPORTED_MODULE_11_rxjs_operator_do__["_do"].call(this._valueChanges, function (value) {
            _this._userInput = value;
            if (_this.editable) {
                _this._onChange(value);
            }
        });
        var results$ = __WEBPACK_IMPORTED_MODULE_10_rxjs_operator_let__["letProto"].call(inputValues$, this.ngbTypeahead);
        var userInput$ = __WEBPACK_IMPORTED_MODULE_11_rxjs_operator_do__["_do"].call(results$, function () {
            if (!_this.editable) {
                _this._onChange(undefined);
            }
        });
        this._subscription = this._subscribeToUserInput(userInput$);
    };
    NgbTypeahead.prototype.ngOnDestroy = function () {
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
    NgbTypeahead.prototype.handleBlur = function () { this._onTouched(); };
    NgbTypeahead.prototype.handleKeyDown = function (event) {
        if (!this.isPopupOpen()) {
            return;
        }
        if (Key$2[toString(event.which)]) {
            switch (event.which) {
                case Key$2.ArrowDown:
                    event.preventDefault();
                    this._windowRef.instance.next();
                    this._showHint();
                    break;
                case Key$2.ArrowUp:
                    event.preventDefault();
                    this._windowRef.instance.prev();
                    this._showHint();
                    break;
                case Key$2.Enter:
                case Key$2.Tab:
                    var result = this._windowRef.instance.getActive();
                    if (isDefined(result)) {
                        event.preventDefault();
                        event.stopPropagation();
                        this._selectResult(result);
                    }
                    this._closePopup();
                    break;
                case Key$2.Escape:
                    event.preventDefault();
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
        return item && this.inputFormatter ? this.inputFormatter(item) : toString(item);
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
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* Directive */], args: [{
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
NgbTypeahead.ctorParameters = function () {
    return [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["l" /* ElementRef */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["s" /* ViewContainerRef */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["k" /* Renderer2 */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["y" /* Injector */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* ComponentFactoryResolver */], },
        { type: NgbTypeaheadConfig, },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["N" /* NgZone */], },
    ];
};
NgbTypeahead.propDecorators = {
    'editable': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'focusFirst': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'inputFormatter': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'ngbTypeahead': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'resultFormatter': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'resultTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'showHint': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
    'selectItem': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* Output */] },],
};
var NgbTypeaheadModule = (function () {
    function NgbTypeaheadModule() {
    }
    NgbTypeaheadModule.forRoot = function () { return { ngModule: NgbTypeaheadModule, providers: [NgbTypeaheadConfig] }; };
    return NgbTypeaheadModule;
}());
NgbTypeaheadModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */], args: [{
                declarations: [NgbTypeahead, NgbHighlight, NgbTypeaheadWindow],
                exports: [NgbTypeahead, NgbHighlight],
                imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["h" /* CommonModule */]],
                entryComponents: [NgbTypeaheadWindow]
            },] },
];
/** @nocollapse */
NgbTypeaheadModule.ctorParameters = function () { return []; };
var NGB_MODULES = [
    NgbAccordionModule, NgbAlertModule, NgbButtonsModule, NgbCarouselModule, NgbCollapseModule, NgbDatepickerModule,
    NgbDropdownModule, NgbModalModule, NgbPaginationModule, NgbPopoverModule, NgbProgressbarModule, NgbRatingModule,
    NgbTabsetModule, NgbTimepickerModule, NgbTooltipModule, NgbTypeaheadModule
];
var NgbRootModule = (function () {
    function NgbRootModule() {
    }
    return NgbRootModule;
}());
NgbRootModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */], args: [{
                imports: [
                    NgbAlertModule.forRoot(), NgbButtonsModule.forRoot(), NgbCollapseModule.forRoot(), NgbProgressbarModule.forRoot(),
                    NgbTooltipModule.forRoot(), NgbTypeaheadModule.forRoot(), NgbAccordionModule.forRoot(), NgbCarouselModule.forRoot(),
                    NgbDatepickerModule.forRoot(), NgbDropdownModule.forRoot(), NgbModalModule.forRoot(), NgbPaginationModule.forRoot(),
                    NgbPopoverModule.forRoot(), NgbProgressbarModule.forRoot(), NgbRatingModule.forRoot(), NgbTabsetModule.forRoot(),
                    NgbTimepickerModule.forRoot(), NgbTooltipModule.forRoot()
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
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */], args: [{ imports: NGB_MODULES, exports: NGB_MODULES },] },
];
/** @nocollapse */
NgbModule.ctorParameters = function () { return []; };
var TourStepTemplateService = (function () {
    function TourStepTemplateService() {
    }
    return TourStepTemplateService;
}());
TourStepTemplateService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* Injectable */] },
];
/**
 * @nocollapse
 */
TourStepTemplateService.ctorParameters = function () { return []; };
var TourAnchorNgBootstrapDirective = (function (_super) {
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
        switch (step.placement) {
            case 'above':
                this.placement = 'top';
                break;
            case 'below':
                this.placement = 'bottom';
                break;
            case 'right':
            case 'after':
                this.placement = 'right';
                break;
            case 'left':
            case 'before':
                this.placement = 'left';
                break;
            default:
                this.placement = 'top';
        }
        this.open({ step: step });
        if (!step.preventScrolling) {
            if (!__WEBPACK_IMPORTED_MODULE_13_withinviewport___default()(this.element.nativeElement, { sides: 'bottom' })) {
                ((this.element.nativeElement)).scrollIntoView(false);
            }
            else if (!__WEBPACK_IMPORTED_MODULE_13_withinviewport___default()(this.element.nativeElement, { sides: 'left top right' })) {
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
}(NgbPopover));
TourAnchorNgBootstrapDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* Directive */], args: [{
                selector: '[tourAnchor]',
            },] },
];
/**
 * @nocollapse
 */
TourAnchorNgBootstrapDirective.ctorParameters = function () { return [
    { type: TourService, },
    { type: TourStepTemplateService, },
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["l" /* ElementRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["k" /* Renderer2 */], },
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["y" /* Injector */], },
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* ComponentFactoryResolver */], },
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["s" /* ViewContainerRef */], },
    { type: NgbPopoverConfig, },
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["N" /* NgZone */], },
]; };
TourAnchorNgBootstrapDirective.propDecorators = {
    'tourAnchor': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] },],
};
var TourStepTemplateComponent = (function (_super) {
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
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* Component */], args: [{
                encapsulation: __WEBPACK_IMPORTED_MODULE_1__angular_core__["O" /* ViewEncapsulation */].None,
                selector: 'tour-step-template',
                template: "\n    <ng-template #tourStep let-step=\"step\">\n      <p class=\"tour-step-content\">{{step?.content}}</p>\n      <div class=\"tour-step-navigation\">\n        <button *ngIf=\"tourService.hasPrev(step)\" class=\"btn btn-sm btn-default\" (click)=\"tourService.prev()\">\u00AB Prev</button>\n        <button *ngIf=\"tourService.hasNext(step)\" class=\"btn btn-sm btn-default\" (click)=\"tourService.next()\">Next \u00BB</button>\n        <button class=\"btn btn-sm btn-default\" (click)=\"tourService.end()\">End</button>\n      </div>\n    </ng-template>\n  ",
            },] },
];
/**
 * @nocollapse
 */
TourStepTemplateComponent.ctorParameters = function () { return [
    { type: TourStepTemplateService, },
    { type: TourService, },
]; };
TourStepTemplateComponent.propDecorators = {
    'defaultTourStepTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* ViewChild */], args: ['tourStep', { read: __WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* TemplateRef */] },] },],
    'stepTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Input */] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* ContentChild */], args: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* TemplateRef */],] },],
};
var TourNgBootstrapModule = (function () {
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
            ].concat(TourModule.forRoot().providers),
        };
    };
    return TourNgBootstrapModule;
}());
TourNgBootstrapModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */], args: [{
                declarations: [TourAnchorNgBootstrapDirective, TourStepTemplateComponent],
                exports: [TourAnchorNgBootstrapDirective, TourStepTemplateComponent],
                imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["h" /* CommonModule */], NgbPopoverModule.forRoot()],
            },] },
];
/**
 * @nocollapse
 */
TourNgBootstrapModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */



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

module.exports = "<h2>About</h2>\n<p>This is a product tour library built with Angular (2+).  It's inspired by <a tourAnchor=\"angular-ui-tour\" href=\"http://benmarch.github.io/angular-ui-tour\">angular-ui-tour</a>.</p>\n\n<h2 tourAnchor=\"installation\">Installation</h2>\n<ol>\n  <li><code>npm install ng2-tour</code></li>\n  <li>import <code>TourNgBootstrapModule</code> into your app module</li>\n</ol>\n\n<h2 tourAnchor=\"usage\">Usage</h2>\n<ol>\n  <li>Add <code>&lt;tour-step-template&gt;&lt;/tour-step-template&gt;</code> to your root app component</li>\n  <li>\n    Define anchor points for the tour steps by adding the <code>tourAnchor</code> directive throughout your app.\n    <pre><code>&lt;div tourAnchor=\"some.anchor.id\"&gt;...&lt;/div&gt;</code></pre>\n  </li>\n  <li>\n    Define your tour steps using <code>tourService.initialize(steps)</code>\n    <pre>\nthis.tourService.initialize([{{ '{' }}\n  anchorId: 'some.anchor.id',\n  content: 'Some content',\n  title: 'First',\n}, {{ '{' }}\n  anchorId: 'another.anchor.id',\n  content: 'Other content',\n  title: 'Second',\n}]);</pre>\n  </li>\n  <li>Start the tour with <code tourAnchor=\"tourService.start\">tourService.start()</code></li>\n</ol>\n\n<h2>TourService</h2>\n<p>The <code>TourService</code> controls the tour.  Some key functions include:</p>\n<dl>\n  <dt>start()</dt>\n  <dd>Starts the tour</dd>\n  <dt>startAt(stepId: number | string)</dt>\n  <dd>Start the tour at the step with stepId or at the specified index</dd>\n  <dt>end()</dt>\n  <dd>Ends the tour</dd>\n  <dt>pause()</dt>\n  <dd>Pauses the tour</dd>\n  <dt>resume()</dt>\n  <dd>Resumes the tour</dd>\n  <dt>next()</dt>\n  <dd>Goes to the next step</dd>\n  <dt>prev()</dt>\n  <dd>Goes to the previous step</dd>\n</dl>\n\n<h2>Step Configuration</h2>\n<p>Each step can have the following properties.</p>\n<table class=\"table\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Type</th>\n      <th>Default</th>\n      <th>Description</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>stepId</td>\n      <td>string</td>\n      <td>\"\"</td>\n      <td>A unique identifier for the step</td>\n    </tr>\n    <tr tourAnchor=\"config.anchorId\">\n      <td>anchorId</td>\n      <td>string</td>\n      <td>required</td>\n      <td>The anchor to which the step will be attached</td>\n    </tr>\n    <tr>\n      <td>title</td>\n      <td>string</td>\n      <td>\"\"</td>\n      <td>The title of the tour step</td>\n    </tr>\n    <tr>\n      <td>content</td>\n      <td>string</td>\n      <td>\"\"</td>\n      <td>The content text of the tour step</td>\n    </tr>\n    <tr tourAnchor=\"config.route\">\n      <td>route</td>\n      <td>string | UrlSegment[]</td>\n      <td>undefined</td>\n      <td>\n        The route to which the tour should navigate before attempting to show this tour step.\n        If undefined, no navigation is attempted.\n      </td>\n    </tr>\n    <tr tourAnchor=\"config.nextStep\">\n      <td>nextStep</td>\n      <td>number | string</td>\n      <td>undefined</td>\n      <td>The step index or stepId of the next step.  If undefined, the next step in the steps array is used.</td>\n    </tr>\n    <tr>\n      <td>prevStep</td>\n      <td>number | string</td>\n      <td>undefined</td>\n      <td>The step index or stepId of the previous step.  If undefined, the previous step in the steps array is used.</td>\n    </tr>\n    <tr>\n      <td>placement</td>\n      <td>'above' | 'below' | 'after' | 'before' | 'left' | 'right'</td>\n      <td><span tourAnchor=\"config.placement.default\">'top'</span></td>\n      <td>\n        (* Ignored by <code>TourMdMenuModule</code>)\n        Where the tour step should placed with respect to the anchor.\n        'before' and 'after' are synonyms for 'left' and 'right' respectively.\n        When RTL support is implemented, 'before' and 'after' will swap directions when RTL mode is enabled.\n      </td>\n    </tr>\n    <tr>\n      <td>preventScrolling</td>\n      <td>boolean</td>\n      <td>false</td>\n      <td>\n        Tour steps automatically scroll to the middle of the screen, if they are off the screen when shown.\n        Setting this value to true will disable the scroll behavior.\n      </td>\n    </tr>\n  </tbody>\n</table>\n\n<h2>Defaults</h2>\n<p>You can set default values in the <code>TourService.initialize</code> function.</p>\n<pre>\nthis.tourService.initialize(steps, {{ '{' }}\n  route: '',\n  placement: 'left',\n  preventScrolling: true,\n});\n</pre>\n<p>Any value explicitly defined in a step will override the default value.</p>\n\n<h2 tourAnchor=\"hotkeys\">Hotkeys</h2>\n<p>\n  Hotkeys are provided using Angular's <code>@HostListener</code> decorator.  Hotkeys are enabled when the tour starts and disabled when the tour ends.\n</p>\n<ul>\n  <li><strong>left arrow</strong><span> - previous step</span></li>\n  <li><strong>right arrow</strong><span> - next step</span></li>\n  <li><strong>esc</strong><span> - end tour</span></li>\n</ul>\n\n<h2 tourAnchor=\"events\">Event Observables</h2>\n<p>The <code>TourService</code> emits events that can be subscribed to like this:</p>\n<pre>\nthis.tourService.initialize$.subscribe((steps: IStepOption[]) => {{ '{' }}\n  console.log('tour configured with these steps:', steps);\n});\n</pre>\n<table class=\"table\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Payload</th>\n      <th>Emitted When</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>stepShow$</td>\n      <td>IStepOption</td>\n      <td>A step is shown</td>\n    </tr>\n    <tr>\n      <td>stepHide$</td>\n      <td>IStepOption</td>\n      <td>A step is hidden</td>\n    </tr>\n    <tr>\n      <td>initialize$</td>\n      <td>IStepOption[]</td>\n      <td>The tour is configured with a set of steps</td>\n    </tr>\n    <tr>\n      <td>start$</td>\n      <td>IStepOption</td>\n      <td>The tour begins</td>\n    </tr>\n    <tr>\n      <td>end$</td>\n      <td>any</td>\n      <td>The tour ends</td>\n    </tr>\n    <tr>\n      <td>pause$</td>\n      <td>IStepOption</td>\n      <td>The tour is paused</td>\n    </tr>\n    <tr>\n      <td>resume$</td>\n      <td>IStepOption</td>\n      <td>The tour resumes</td>\n    </tr>\n    <tr>\n      <td>anchorRegister$</td>\n      <td>string</td>\n      <td>An anchor is registered with the tour</td>\n    </tr>\n    <tr>\n      <td>anchorUnregister$</td>\n      <td>string</td>\n      <td>An anchor is unregistered from the tour</td>\n    </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/ng-bootstrap/docs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DocsComponent = (function () {
    function DocsComponent() {
    }
    DocsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Component */])({
            // tslint:disable-next-line:component-selector
            selector: 'docs',
            template: __webpack_require__("../../../../../src/app/ng-bootstrap/docs.component.html"),
        })
    ], DocsComponent);
    return DocsComponent;
}());

//# sourceMappingURL=docs.component.js.map

/***/ }),

/***/ "../../../../../src/app/ng-bootstrap/ng-bootstrap.component.html":
/***/ (function(module, exports) {

module.exports = "<a href=\"https://github.com/isaacplmann/ng2-tour\" class=\"btn btn-default\">View on GitHub</a>\n<a style=\"cursor: pointer\" (click)=\"tourService.toggle()\" class=\"btn btn-primary\" tourAnchor=\"start.tour\">Start Demo Tour</a>\n\n<router-outlet></router-outlet>\n<tour-step-template>\n  <!-- <ng-template #jsonTemplate let-step=\"step\">\n      {{ step | json }}\n  </ng-template> -->\n</tour-step-template>\n"

/***/ }),

/***/ "../../../../../src/app/ng-bootstrap/ng-bootstrap.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ngx_tour_ng_bootstrap__ = __webpack_require__("../../../../../dist/ngx-tour-ng-bootstrap/ngx-tour-ng-bootstrap/ngx-tour-ng-bootstrap.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgBootstrapComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgBootstrapComponent = (function () {
    function NgBootstrapComponent(tourService) {
        this.tourService = tourService;
        this.tourService.events$.subscribe(console.log);
        this.tourService.initialize([{
                anchorId: 'start.tour',
                content: 'Welcome to the Ngx-Tour tour!',
                placement: 'below',
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
                placement: 'below',
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
                placement: 'below',
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* Component */])({
            // tslint:disable-next-line:component-selector
            selector: 'ng-bootstrap-route',
            template: __webpack_require__("../../../../../src/app/ng-bootstrap/ng-bootstrap.component.html"),
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0_ngx_tour_ng_bootstrap__["b" /* TourService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_ngx_tour_ng_bootstrap__["b" /* TourService */]) === "function" && _a || Object])
    ], NgBootstrapComponent);
    return NgBootstrapComponent;
    var _a;
}());

//# sourceMappingURL=ng-bootstrap.component.js.map

/***/ }),

/***/ "../../../../../src/app/ng-bootstrap/ng-bootstrap.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_tour_ng_bootstrap__ = __webpack_require__("../../../../../dist/ngx-tour-ng-bootstrap/ngx-tour-ng-bootstrap/ngx-tour-ng-bootstrap.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__docs_component__ = __webpack_require__("../../../../../src/app/ng-bootstrap/docs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_component__ = __webpack_require__("../../../../../src/app/ng-bootstrap/ng-bootstrap.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__other_route_component__ = __webpack_require__("../../../../../src/app/ng-bootstrap/other-route.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgBootstrapModule", function() { return NgBootstrapModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var NgBootstrapModule = (function () {
    function NgBootstrapModule() {
    }
    NgBootstrapModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_component__["a" /* NgBootstrapComponent */], __WEBPACK_IMPORTED_MODULE_4__docs_component__["a" /* DocsComponent */], __WEBPACK_IMPORTED_MODULE_6__other_route_component__["a" /* OtherRouteComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["h" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forChild([{
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

//# sourceMappingURL=ng-bootstrap.module.js.map

/***/ }),

/***/ "../../../../../src/app/ng-bootstrap/other-route.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtherRouteComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OtherRouteComponent = (function () {
    function OtherRouteComponent() {
    }
    OtherRouteComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Component */])({
            // tslint:disable-next-line:component-selector
            selector: 'other-route',
            template: "<p>This is the <strong tourAnchor=\"another.route\">another</strong> route</p>",
        })
    ], OtherRouteComponent);
    return OtherRouteComponent;
}());

//# sourceMappingURL=other-route.component.js.map

/***/ })

});
//# sourceMappingURL=2.chunk.js.map