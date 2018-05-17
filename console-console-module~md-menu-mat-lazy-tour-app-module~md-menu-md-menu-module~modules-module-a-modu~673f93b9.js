(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["console-console-module~md-menu-mat-lazy-tour-app-module~md-menu-md-menu-module~modules-module-a-modu~673f93b9"],{

/***/ "./dist/ngx-tour-core/fesm5/ngx-tour-core.js":
/*!***************************************************!*\
  !*** ./dist/ngx-tour-core/fesm5/ngx-tour-core.js ***!
  \***************************************************/
/*! exports provided: TourModule, TourService, TourState, TourHotkeyListenerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TourModule", function() { return TourModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TourService", function() { return TourService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TourState", function() { return TourState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TourHotkeyListenerComponent", function() { return TourHotkeyListenerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {number} */
var TourState = {
    OFF: 0,
    ON: 1,
    PAUSED: 2,
};
TourState[TourState.OFF] = "OFF";
TourState[TourState.ON] = "ON";
TourState[TourState.PAUSED] = "PAUSED";
// unsupported: template constraints.
/**
 * @template T
 */
var TourService = /** @class */ (function () {
    function TourService(router) {
        this.router = router;
        this.stepShow$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.stepHide$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.initialize$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.start$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.end$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.pause$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.resume$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.anchorRegister$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.anchorUnregister$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.events$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(this.stepShow$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) { return ({ name: 'stepShow', value: value }); })), this.stepHide$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) { return ({ name: 'stepHide', value: value }); })), this.initialize$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) { return ({ name: 'initialize', value: value }); })), this.start$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) { return ({ name: 'start', value: value }); })), this.end$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) { return ({ name: 'end', value: value }); })), this.pause$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) { return ({ name: 'pause', value: value }); })), this.resume$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) { return ({ name: 'resume', value: value }); })), this.anchorRegister$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) {
            return ({
                name: 'anchorRegister',
                value: value
            });
        })), this.anchorUnregister$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) {
            return ({
                name: 'anchorUnregister',
                value: value
            });
        })));
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
    TourService.prototype.initialize = /**
     * @param {?} steps
     * @param {?=} stepDefaults
     * @return {?}
     */
    function (steps, stepDefaults) {
        if (steps && steps.length > 0) {
            this.status = TourState.OFF;
            this.steps = steps.map(function (step) { return Object.assign({}, stepDefaults, step); });
            this.initialize$.next(this.steps);
        }
    };
    /**
     * @return {?}
     */
    TourService.prototype.disableHotkeys = /**
     * @return {?}
     */
    function () {
        this.isHotKeysEnabled = false;
    };
    /**
     * @return {?}
     */
    TourService.prototype.enableHotkeys = /**
     * @return {?}
     */
    function () {
        this.isHotKeysEnabled = true;
    };
    /**
     * @return {?}
     */
    TourService.prototype.start = /**
     * @return {?}
     */
    function () {
        this.startAt(0);
    };
    /**
     * @param {?} stepId
     * @return {?}
     */
    TourService.prototype.startAt = /**
     * @param {?} stepId
     * @return {?}
     */
    function (stepId) {
        var _this = this;
        this.status = TourState.ON;
        this.goToStep(this.loadStep(stepId));
        this.start$.next();
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function () {
            if (_this.currentStep) {
                _this.hideStep(_this.currentStep);
            }
        });
    };
    /**
     * @return {?}
     */
    TourService.prototype.end = /**
     * @return {?}
     */
    function () {
        this.status = TourState.OFF;
        this.hideStep(this.currentStep);
        this.currentStep = undefined;
        this.end$.next();
    };
    /**
     * @return {?}
     */
    TourService.prototype.pause = /**
     * @return {?}
     */
    function () {
        this.status = TourState.PAUSED;
        this.hideStep(this.currentStep);
        this.pause$.next();
    };
    /**
     * @return {?}
     */
    TourService.prototype.resume = /**
     * @return {?}
     */
    function () {
        this.status = TourState.ON;
        this.showStep(this.currentStep);
        this.resume$.next();
    };
    /**
     * @param {?=} pause
     * @return {?}
     */
    TourService.prototype.toggle = /**
     * @param {?=} pause
     * @return {?}
     */
    function (pause) {
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
    TourService.prototype.next = /**
     * @return {?}
     */
    function () {
        if (this.hasNext(this.currentStep)) {
            this.goToStep(this.loadStep(this.currentStep.nextStep || this.steps.indexOf(this.currentStep) + 1));
        }
    };
    /**
     * @param {?} step
     * @return {?}
     */
    TourService.prototype.hasNext = /**
     * @param {?} step
     * @return {?}
     */
    function (step) {
        if (!step) {
            console.warn('Can\'t get next step. No currentStep.');
            return false;
        }
        return (step.nextStep !== undefined ||
            this.steps.indexOf(step) < this.steps.length - 1);
    };
    /**
     * @return {?}
     */
    TourService.prototype.prev = /**
     * @return {?}
     */
    function () {
        if (this.hasPrev(this.currentStep)) {
            this.goToStep(this.loadStep(this.currentStep.prevStep || this.steps.indexOf(this.currentStep) - 1));
        }
    };
    /**
     * @param {?} step
     * @return {?}
     */
    TourService.prototype.hasPrev = /**
     * @param {?} step
     * @return {?}
     */
    function (step) {
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
    TourService.prototype.goto = /**
     * @param {?} stepId
     * @return {?}
     */
    function (stepId) {
        this.goToStep(this.loadStep(stepId));
    };
    /**
     * @param {?} anchorId
     * @param {?} anchor
     * @return {?}
     */
    TourService.prototype.register = /**
     * @param {?} anchorId
     * @param {?} anchor
     * @return {?}
     */
    function (anchorId, anchor) {
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
    TourService.prototype.unregister = /**
     * @param {?} anchorId
     * @return {?}
     */
    function (anchorId) {
        delete this.anchors[anchorId];
        this.anchorUnregister$.next(anchorId);
    };
    /**
     * @return {?}
     */
    TourService.prototype.getStatus = /**
     * @return {?}
     */
    function () {
        return this.status;
    };
    /**
     * @return {?}
     */
    TourService.prototype.isHotkeysEnabled = /**
     * @return {?}
     */
    function () {
        return this.isHotKeysEnabled;
    };
    /**
     * @param {?} step
     * @return {?}
     */
    TourService.prototype.goToStep = /**
     * @param {?} step
     * @return {?}
     */
    function (step) {
        var _this = this;
        if (!step) {
            console.warn('Can\'t go to non-existent step');
            this.end();
            return;
        }
        var /** @type {?} */ navigatePromise = new Promise(function (resolve) {
            return resolve(true);
        });
        if (step.route !== undefined && typeof step.route === 'string') {
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
    TourService.prototype.loadStep = /**
     * @param {?} stepId
     * @return {?}
     */
    function (stepId) {
        if (typeof stepId === 'number') {
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
    TourService.prototype.setCurrentStep = /**
     * @param {?} step
     * @return {?}
     */
    function (step) {
        var _this = this;
        if (this.currentStep) {
            this.hideStep(this.currentStep);
        }
        this.currentStep = step;
        this.showStep(this.currentStep);
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function () {
            if (_this.currentStep) {
                _this.hideStep(_this.currentStep);
            }
        });
    };
    /**
     * @param {?} step
     * @return {?}
     */
    TourService.prototype.showStep = /**
     * @param {?} step
     * @return {?}
     */
    function (step) {
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
    TourService.prototype.hideStep = /**
     * @param {?} step
     * @return {?}
     */
    function (step) {
        var /** @type {?} */ anchor = this.anchors[step && step.anchorId];
        if (!anchor) {
            return;
        }
        anchor.hideTourStep();
        this.stepHide$.next(step);
    };
    TourService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    TourService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], },
    ]; };
    return TourService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TourHotkeyListenerComponent = /** @class */ (function () {
    function TourHotkeyListenerComponent(tourService) {
        this.tourService = tourService;
    }
    /**
     * Configures hot keys for controlling the tour with the keyboard
     * @return {?}
     */
    TourHotkeyListenerComponent.prototype.onEscapeKey = /**
     * Configures hot keys for controlling the tour with the keyboard
     * @return {?}
     */
    function () {
        if (this.tourService.getStatus() === TourState.ON &&
            this.tourService.isHotkeysEnabled()) {
            this.tourService.end();
        }
    };
    /**
     * @return {?}
     */
    TourHotkeyListenerComponent.prototype.onArrowRightKey = /**
     * @return {?}
     */
    function () {
        if (this.tourService.getStatus() === TourState.ON &&
            this.tourService.hasNext(this.tourService.currentStep) &&
            this.tourService.isHotkeysEnabled()) {
            this.tourService.next();
        }
    };
    /**
     * @return {?}
     */
    TourHotkeyListenerComponent.prototype.onArrowLeftKey = /**
     * @return {?}
     */
    function () {
        if (this.tourService.getStatus() === TourState.ON &&
            this.tourService.hasPrev(this.tourService.currentStep) &&
            this.tourService.isHotkeysEnabled()) {
            this.tourService.prev();
        }
    };
    TourHotkeyListenerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'tour-hotkey-listener',
                    template: "<ng-content></ng-content>"
                },] },
    ];
    /** @nocollapse */
    TourHotkeyListenerComponent.ctorParameters = function () { return [
        { type: TourService, },
    ]; };
    TourHotkeyListenerComponent.propDecorators = {
        "onEscapeKey": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:keydown.Escape',] },],
        "onArrowRightKey": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:keydown.ArrowRight',] },],
        "onArrowLeftKey": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:keydown.ArrowLeft',] },],
    };
    return TourHotkeyListenerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TourModule = /** @class */ (function () {
    function TourModule() {
    }
    /**
     * @return {?}
     */
    TourModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: TourModule,
            providers: [
                TourService,
            ],
        };
    };
    TourModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [TourHotkeyListenerComponent],
                    exports: [TourHotkeyListenerComponent],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
                },] },
    ];
    return TourModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRvdXItY29yZS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LXRvdXItY29yZS9saWIvdG91ci5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gtdG91ci1jb3JlL2xpYi90b3VyLWhvdGtleS1saXN0ZW5lci5jb21wb25lbnQudHMiLCJuZzovL25neC10b3VyLWNvcmUvbGliL3RvdXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdmlnYXRpb25TdGFydCwgUm91dGVyLCBVcmxTZWdtZW50IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgVG91ckFuY2hvckRpcmVjdGl2ZSB9IGZyb20gJy4vdG91ci1hbmNob3IuZGlyZWN0aXZlJztcbmltcG9ydCB7IFN1YmplY3QsIE9ic2VydmFibGUsIG1lcmdlIGFzIG1lcmdlU3RhdGljIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaXJzdCwgbWFwLCBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVN0ZXBPcHRpb24ge1xuICBzdGVwSWQ/OiBzdHJpbmc7XG4gIGFuY2hvcklkPzogc3RyaW5nO1xuICB0aXRsZT86IHN0cmluZztcbiAgY29udGVudD86IHN0cmluZztcbiAgcm91dGU/OiBzdHJpbmcgfCBVcmxTZWdtZW50W107XG4gIG5leHRTdGVwPzogbnVtYmVyIHwgc3RyaW5nO1xuICBwcmV2U3RlcD86IG51bWJlciB8IHN0cmluZztcbiAgcGxhY2VtZW50PzogYW55O1xuICBwcmV2ZW50U2Nyb2xsaW5nPzogYm9vbGVhbjtcbiAgcHJldkJ0blRpdGxlPzogc3RyaW5nO1xuICBuZXh0QnRuVGl0bGU/OiBzdHJpbmc7XG4gIGVuZEJ0blRpdGxlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZW51bSBUb3VyU3RhdGUge1xuICBPRkYsXG4gIE9OLFxuICBQQVVTRURcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRvdXJTZXJ2aWNlPFQgZXh0ZW5kcyBJU3RlcE9wdGlvbiA9IElTdGVwT3B0aW9uPiB7XG4gIHB1YmxpYyBzdGVwU2hvdyQ6IFN1YmplY3Q8VD4gPSBuZXcgU3ViamVjdCgpO1xuICBwdWJsaWMgc3RlcEhpZGUkOiBTdWJqZWN0PFQ+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHVibGljIGluaXRpYWxpemUkOiBTdWJqZWN0PFRbXT4gPSBuZXcgU3ViamVjdCgpO1xuICBwdWJsaWMgc3RhcnQkOiBTdWJqZWN0PFQ+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHVibGljIGVuZCQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG4gIHB1YmxpYyBwYXVzZSQ6IFN1YmplY3Q8VD4gPSBuZXcgU3ViamVjdCgpO1xuICBwdWJsaWMgcmVzdW1lJDogU3ViamVjdDxUPiA9IG5ldyBTdWJqZWN0KCk7XG4gIHB1YmxpYyBhbmNob3JSZWdpc3RlciQ6IFN1YmplY3Q8c3RyaW5nPiA9IG5ldyBTdWJqZWN0KCk7XG4gIHB1YmxpYyBhbmNob3JVbnJlZ2lzdGVyJDogU3ViamVjdDxzdHJpbmc+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHVibGljIGV2ZW50cyQ6IE9ic2VydmFibGU8eyBuYW1lOiBzdHJpbmc7IHZhbHVlOiBhbnkgfT4gPSBtZXJnZVN0YXRpYyhcbiAgICB0aGlzLnN0ZXBTaG93JC5waXBlKG1hcCh2YWx1ZSA9PiAoeyBuYW1lOiAnc3RlcFNob3cnLCB2YWx1ZSB9KSkpLFxuICAgIHRoaXMuc3RlcEhpZGUkLnBpcGUobWFwKHZhbHVlID0+ICh7IG5hbWU6ICdzdGVwSGlkZScsIHZhbHVlIH0pKSksXG4gICAgdGhpcy5pbml0aWFsaXplJC5waXBlKG1hcCh2YWx1ZSA9PiAoeyBuYW1lOiAnaW5pdGlhbGl6ZScsIHZhbHVlIH0pKSksXG4gICAgdGhpcy5zdGFydCQucGlwZShtYXAodmFsdWUgPT4gKHsgbmFtZTogJ3N0YXJ0JywgdmFsdWUgfSkpKSxcbiAgICB0aGlzLmVuZCQucGlwZShtYXAodmFsdWUgPT4gKHsgbmFtZTogJ2VuZCcsIHZhbHVlIH0pKSksXG4gICAgdGhpcy5wYXVzZSQucGlwZShtYXAodmFsdWUgPT4gKHsgbmFtZTogJ3BhdXNlJywgdmFsdWUgfSkpKSxcbiAgICB0aGlzLnJlc3VtZSQucGlwZShtYXAodmFsdWUgPT4gKHsgbmFtZTogJ3Jlc3VtZScsIHZhbHVlIH0pKSksXG4gICAgdGhpcy5hbmNob3JSZWdpc3RlciQucGlwZShcbiAgICAgIG1hcCh2YWx1ZSA9PiAoe1xuICAgICAgICBuYW1lOiAnYW5jaG9yUmVnaXN0ZXInLFxuICAgICAgICB2YWx1ZVxuICAgICAgfSkpXG4gICAgKSxcbiAgICB0aGlzLmFuY2hvclVucmVnaXN0ZXIkLnBpcGUoXG4gICAgICBtYXAodmFsdWUgPT4gKHtcbiAgICAgICAgbmFtZTogJ2FuY2hvclVucmVnaXN0ZXInLFxuICAgICAgICB2YWx1ZVxuICAgICAgfSkpXG4gICAgKVxuICApO1xuXG4gIHB1YmxpYyBzdGVwczogVFtdID0gW107XG4gIHB1YmxpYyBjdXJyZW50U3RlcDogVDtcblxuICBwdWJsaWMgYW5jaG9yczogeyBbYW5jaG9ySWQ6IHN0cmluZ106IFRvdXJBbmNob3JEaXJlY3RpdmUgfSA9IHt9O1xuICBwcml2YXRlIHN0YXR1czogVG91clN0YXRlID0gVG91clN0YXRlLk9GRjtcbiAgcHJpdmF0ZSBpc0hvdEtleXNFbmFibGVkID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7fVxuXG4gIHB1YmxpYyBpbml0aWFsaXplKHN0ZXBzOiBUW10sIHN0ZXBEZWZhdWx0cz86IFQpOiB2b2lkIHtcbiAgICBpZiAoc3RlcHMgJiYgc3RlcHMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5zdGF0dXMgPSBUb3VyU3RhdGUuT0ZGO1xuICAgICAgdGhpcy5zdGVwcyA9IHN0ZXBzLm1hcChzdGVwID0+IE9iamVjdC5hc3NpZ24oe30sIHN0ZXBEZWZhdWx0cywgc3RlcCkpO1xuICAgICAgdGhpcy5pbml0aWFsaXplJC5uZXh0KHRoaXMuc3RlcHMpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBkaXNhYmxlSG90a2V5cygpOiB2b2lkIHtcbiAgICB0aGlzLmlzSG90S2V5c0VuYWJsZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBlbmFibGVIb3RrZXlzKCk6IHZvaWQge1xuICAgIHRoaXMuaXNIb3RLZXlzRW5hYmxlZCA9IHRydWU7XG4gIH1cblxuICBwdWJsaWMgc3RhcnQoKTogdm9pZCB7XG4gICAgdGhpcy5zdGFydEF0KDApO1xuICB9XG5cbiAgcHVibGljIHN0YXJ0QXQoc3RlcElkOiBudW1iZXIgfCBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN0YXR1cyA9IFRvdXJTdGF0ZS5PTjtcbiAgICB0aGlzLmdvVG9TdGVwKHRoaXMubG9hZFN0ZXAoc3RlcElkKSk7XG4gICAgdGhpcy5zdGFydCQubmV4dCgpO1xuICAgIHRoaXMucm91dGVyLmV2ZW50c1xuICAgICAgLnBpcGUoZmlsdGVyKGV2ZW50ID0+IGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvblN0YXJ0KSwgZmlyc3QoKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50U3RlcCkge1xuICAgICAgICAgIHRoaXMuaGlkZVN0ZXAodGhpcy5jdXJyZW50U3RlcCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGVuZCgpOiB2b2lkIHtcbiAgICB0aGlzLnN0YXR1cyA9IFRvdXJTdGF0ZS5PRkY7XG4gICAgdGhpcy5oaWRlU3RlcCh0aGlzLmN1cnJlbnRTdGVwKTtcbiAgICB0aGlzLmN1cnJlbnRTdGVwID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZW5kJC5uZXh0KCk7XG4gIH1cblxuICBwdWJsaWMgcGF1c2UoKTogdm9pZCB7XG4gICAgdGhpcy5zdGF0dXMgPSBUb3VyU3RhdGUuUEFVU0VEO1xuICAgIHRoaXMuaGlkZVN0ZXAodGhpcy5jdXJyZW50U3RlcCk7XG4gICAgdGhpcy5wYXVzZSQubmV4dCgpO1xuICB9XG5cbiAgcHVibGljIHJlc3VtZSgpOiB2b2lkIHtcbiAgICB0aGlzLnN0YXR1cyA9IFRvdXJTdGF0ZS5PTjtcbiAgICB0aGlzLnNob3dTdGVwKHRoaXMuY3VycmVudFN0ZXApO1xuICAgIHRoaXMucmVzdW1lJC5uZXh0KCk7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlKHBhdXNlPzogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmIChwYXVzZSkge1xuICAgICAgaWYgKHRoaXMuY3VycmVudFN0ZXApIHtcbiAgICAgICAgdGhpcy5wYXVzZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZXN1bWUoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuY3VycmVudFN0ZXApIHtcbiAgICAgICAgdGhpcy5lbmQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3RhcnQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbmV4dCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5oYXNOZXh0KHRoaXMuY3VycmVudFN0ZXApKSB7XG4gICAgICB0aGlzLmdvVG9TdGVwKFxuICAgICAgICB0aGlzLmxvYWRTdGVwKFxuICAgICAgICAgIHRoaXMuY3VycmVudFN0ZXAubmV4dFN0ZXAgfHwgdGhpcy5zdGVwcy5pbmRleE9mKHRoaXMuY3VycmVudFN0ZXApICsgMVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBoYXNOZXh0KHN0ZXA6IFQpOiBib29sZWFuIHtcbiAgICBpZiAoIXN0ZXApIHtcbiAgICAgIGNvbnNvbGUud2FybignQ2FuXFwndCBnZXQgbmV4dCBzdGVwLiBObyBjdXJyZW50U3RlcC4nKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIHN0ZXAubmV4dFN0ZXAgIT09IHVuZGVmaW5lZCB8fFxuICAgICAgdGhpcy5zdGVwcy5pbmRleE9mKHN0ZXApIDwgdGhpcy5zdGVwcy5sZW5ndGggLSAxXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBwcmV2KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmhhc1ByZXYodGhpcy5jdXJyZW50U3RlcCkpIHtcbiAgICAgIHRoaXMuZ29Ub1N0ZXAoXG4gICAgICAgIHRoaXMubG9hZFN0ZXAoXG4gICAgICAgICAgdGhpcy5jdXJyZW50U3RlcC5wcmV2U3RlcCB8fCB0aGlzLnN0ZXBzLmluZGV4T2YodGhpcy5jdXJyZW50U3RlcCkgLSAxXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGhhc1ByZXYoc3RlcDogVCk6IGJvb2xlYW4ge1xuICAgIGlmICghc3RlcCkge1xuICAgICAgY29uc29sZS53YXJuKCdDYW5cXCd0IGdldCBwcmV2aW91cyBzdGVwLiBObyBjdXJyZW50U3RlcC4nKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHN0ZXAucHJldlN0ZXAgIT09IHVuZGVmaW5lZCB8fCB0aGlzLnN0ZXBzLmluZGV4T2Yoc3RlcCkgPiAwO1xuICB9XG5cbiAgcHVibGljIGdvdG8oc3RlcElkOiBudW1iZXIgfCBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmdvVG9TdGVwKHRoaXMubG9hZFN0ZXAoc3RlcElkKSk7XG4gIH1cblxuICBwdWJsaWMgcmVnaXN0ZXIoYW5jaG9ySWQ6IHN0cmluZywgYW5jaG9yOiBUb3VyQW5jaG9yRGlyZWN0aXZlKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYW5jaG9yc1thbmNob3JJZF0pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYW5jaG9ySWQgJyArIGFuY2hvcklkICsgJyBhbHJlYWR5IHJlZ2lzdGVyZWQhJyk7XG4gICAgfVxuICAgIHRoaXMuYW5jaG9yc1thbmNob3JJZF0gPSBhbmNob3I7XG4gICAgdGhpcy5hbmNob3JSZWdpc3RlciQubmV4dChhbmNob3JJZCk7XG4gIH1cblxuICBwdWJsaWMgdW5yZWdpc3RlcihhbmNob3JJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgZGVsZXRlIHRoaXMuYW5jaG9yc1thbmNob3JJZF07XG4gICAgdGhpcy5hbmNob3JVbnJlZ2lzdGVyJC5uZXh0KGFuY2hvcklkKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRTdGF0dXMoKTogVG91clN0YXRlIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0dXM7XG4gIH1cblxuICBwdWJsaWMgaXNIb3RrZXlzRW5hYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc0hvdEtleXNFbmFibGVkO1xuICB9XG5cbiAgcHJpdmF0ZSBnb1RvU3RlcChzdGVwOiBUKTogdm9pZCB7XG4gICAgaWYgKCFzdGVwKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0NhblxcJ3QgZ28gdG8gbm9uLWV4aXN0ZW50IHN0ZXAnKTtcbiAgICAgIHRoaXMuZW5kKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBuYXZpZ2F0ZVByb21pc2U6IFByb21pc2U8Ym9vbGVhbj4gPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+XG4gICAgICByZXNvbHZlKHRydWUpXG4gICAgKTtcbiAgICBpZiAoc3RlcC5yb3V0ZSAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBzdGVwLnJvdXRlID09PSAnc3RyaW5nJykge1xuICAgICAgbmF2aWdhdGVQcm9taXNlID0gdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChzdGVwLnJvdXRlKTtcbiAgICB9IGVsc2UgaWYgKHN0ZXAucm91dGUgJiYgQXJyYXkuaXNBcnJheShzdGVwLnJvdXRlKSkge1xuICAgICAgbmF2aWdhdGVQcm9taXNlID0gdGhpcy5yb3V0ZXIubmF2aWdhdGUoc3RlcC5yb3V0ZSk7XG4gICAgfVxuICAgIG5hdmlnYXRlUHJvbWlzZS50aGVuKG5hdmlnYXRlZCA9PiB7XG4gICAgICBpZiAobmF2aWdhdGVkICE9PSBmYWxzZSkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2V0Q3VycmVudFN0ZXAoc3RlcCkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkU3RlcChzdGVwSWQ6IG51bWJlciB8IHN0cmluZyk6IFQge1xuICAgIGlmICh0eXBlb2Ygc3RlcElkID09PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuIHRoaXMuc3RlcHNbc3RlcElkXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuc3RlcHMuZmluZChzdGVwID0+IHN0ZXAuc3RlcElkID09PSBzdGVwSWQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0Q3VycmVudFN0ZXAoc3RlcDogVCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmN1cnJlbnRTdGVwKSB7XG4gICAgICB0aGlzLmhpZGVTdGVwKHRoaXMuY3VycmVudFN0ZXApO1xuICAgIH1cbiAgICB0aGlzLmN1cnJlbnRTdGVwID0gc3RlcDtcbiAgICB0aGlzLnNob3dTdGVwKHRoaXMuY3VycmVudFN0ZXApO1xuICAgIHRoaXMucm91dGVyLmV2ZW50c1xuICAgICAgLnBpcGUoZmlsdGVyKGV2ZW50ID0+IGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvblN0YXJ0KSwgZmlyc3QoKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50U3RlcCkge1xuICAgICAgICAgIHRoaXMuaGlkZVN0ZXAodGhpcy5jdXJyZW50U3RlcCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzaG93U3RlcChzdGVwOiBUKTogdm9pZCB7XG4gICAgY29uc3QgYW5jaG9yID0gdGhpcy5hbmNob3JzW3N0ZXAgJiYgc3RlcC5hbmNob3JJZF07XG4gICAgaWYgKCFhbmNob3IpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ0NhblxcJ3QgYXR0YWNoIHRvIHVucmVnaXN0ZXJlZCBhbmNob3Igd2l0aCBpZCAnICsgc3RlcC5hbmNob3JJZFxuICAgICAgKTtcbiAgICAgIHRoaXMuZW5kKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGFuY2hvci5zaG93VG91clN0ZXAoc3RlcCk7XG4gICAgdGhpcy5zdGVwU2hvdyQubmV4dChzdGVwKTtcbiAgfVxuXG4gIHByaXZhdGUgaGlkZVN0ZXAoc3RlcDogVCk6IHZvaWQge1xuICAgIGNvbnN0IGFuY2hvciA9IHRoaXMuYW5jaG9yc1tzdGVwICYmIHN0ZXAuYW5jaG9ySWRdO1xuICAgIGlmICghYW5jaG9yKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGFuY2hvci5oaWRlVG91clN0ZXAoKTtcbiAgICB0aGlzLnN0ZXBIaWRlJC5uZXh0KHN0ZXApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUb3VyU2VydmljZSwgVG91clN0YXRlIH0gZnJvbSAnLi90b3VyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0b3VyLWhvdGtleS1saXN0ZW5lcicsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmBcbn0pXG5leHBvcnQgY2xhc3MgVG91ckhvdGtleUxpc3RlbmVyQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHVibGljIHRvdXJTZXJ2aWNlOiBUb3VyU2VydmljZSkge31cblxuICAvKipcbiAgICogQ29uZmlndXJlcyBob3Qga2V5cyBmb3IgY29udHJvbGxpbmcgdGhlIHRvdXIgd2l0aCB0aGUga2V5Ym9hcmRcbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzprZXlkb3duLkVzY2FwZScpXG4gIHB1YmxpYyBvbkVzY2FwZUtleSgpOiB2b2lkIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLnRvdXJTZXJ2aWNlLmdldFN0YXR1cygpID09PSBUb3VyU3RhdGUuT04gJiZcbiAgICAgIHRoaXMudG91clNlcnZpY2UuaXNIb3RrZXlzRW5hYmxlZCgpXG4gICAgKSB7XG4gICAgICB0aGlzLnRvdXJTZXJ2aWNlLmVuZCgpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzprZXlkb3duLkFycm93UmlnaHQnKVxuICBwdWJsaWMgb25BcnJvd1JpZ2h0S2V5KCk6IHZvaWQge1xuICAgIGlmIChcbiAgICAgIHRoaXMudG91clNlcnZpY2UuZ2V0U3RhdHVzKCkgPT09IFRvdXJTdGF0ZS5PTiAmJlxuICAgICAgdGhpcy50b3VyU2VydmljZS5oYXNOZXh0KHRoaXMudG91clNlcnZpY2UuY3VycmVudFN0ZXApICYmXG4gICAgICB0aGlzLnRvdXJTZXJ2aWNlLmlzSG90a2V5c0VuYWJsZWQoKVxuICAgICkge1xuICAgICAgdGhpcy50b3VyU2VydmljZS5uZXh0KCk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OmtleWRvd24uQXJyb3dMZWZ0JylcbiAgcHVibGljIG9uQXJyb3dMZWZ0S2V5KCk6IHZvaWQge1xuICAgIGlmIChcbiAgICAgIHRoaXMudG91clNlcnZpY2UuZ2V0U3RhdHVzKCkgPT09IFRvdXJTdGF0ZS5PTiAmJlxuICAgICAgdGhpcy50b3VyU2VydmljZS5oYXNQcmV2KHRoaXMudG91clNlcnZpY2UuY3VycmVudFN0ZXApICYmXG4gICAgICB0aGlzLnRvdXJTZXJ2aWNlLmlzSG90a2V5c0VuYWJsZWQoKVxuICAgICkge1xuICAgICAgdGhpcy50b3VyU2VydmljZS5wcmV2KCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFRvdXJIb3RrZXlMaXN0ZW5lckNvbXBvbmVudCB9IGZyb20gJy4vdG91ci1ob3RrZXktbGlzdGVuZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFRvdXJTZXJ2aWNlIH0gZnJvbSAnLi90b3VyLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1RvdXJIb3RrZXlMaXN0ZW5lckNvbXBvbmVudF0sXG4gICAgZXhwb3J0czogW1RvdXJIb3RrZXlMaXN0ZW5lckNvbXBvbmVudF0sXG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgUm91dGVyTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgVG91ck1vZHVsZSB7XG4gICAgcHVibGljIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IFRvdXJNb2R1bGUsXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgICAgICBUb3VyU2VydmljZSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH07XG4gICAgfVxufTtcblxuZXhwb3J0IHsgVG91clNlcnZpY2UgfTtcbiJdLCJuYW1lcyI6WyJtZXJnZVN0YXRpYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7OztJQW9FRSxxQkFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7eUJBdENILElBQUksT0FBTyxFQUFFO3lCQUNiLElBQUksT0FBTyxFQUFFOzJCQUNULElBQUksT0FBTyxFQUFFO3NCQUNwQixJQUFJLE9BQU8sRUFBRTtvQkFDYixJQUFJLE9BQU8sRUFBRTtzQkFDYixJQUFJLE9BQU8sRUFBRTt1QkFDWixJQUFJLE9BQU8sRUFBRTsrQkFDQSxJQUFJLE9BQU8sRUFBRTtpQ0FDWCxJQUFJLE9BQU8sRUFBRTt1QkFDRUEsS0FBVyxDQUNwRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxLQUFLLElBQUksUUFBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUs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

/***/ })

}]);
//# sourceMappingURL=console-console-module~md-menu-mat-lazy-tour-app-module~md-menu-md-menu-module~modules-module-a-modu~673f93b9.js.map