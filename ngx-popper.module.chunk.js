webpackJsonp(["ngx-popper.module"],{

/***/ "../../../../../dist/ngx-tour-ngx-popper/ngx-tour-ngx-popper.es5.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NgxpTourService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TourNgxPopperModule; });
/* unused harmony export TourAnchorNgxPopperDirective */
/* unused harmony export TourStepTemplateComponent */
/* unused harmony export ɵa */
/* unused harmony export ɵb */
/* unused harmony export ɵc */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_first__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/first.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operator_merge__ = __webpack_require__("../../../../rxjs/_esm5/operator/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_withinviewport__ = __webpack_require__("../../../../../dist/ngx-tour-ngx-popper/node_modules/withinviewport/withinviewport.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_withinviewport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_withinviewport__);
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
var NgxpTourService = /** @class */ (function (_super) {
    __extends(NgxpTourService, _super);
    function NgxpTourService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NgxpTourService;
}(TourService));
NgxpTourService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */] },
];
/**
 * @nocollapse
 */
NgxpTourService.ctorParameters = function () { return []; };
/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.13.0-next.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
var timeoutDuration = 0;
for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
    if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
        timeoutDuration = 1;
        break;
    }
}
function microtaskDebounce(fn) {
    var called = false;
    return function () {
        if (called) {
            return;
        }
        called = true;
        window.Promise.resolve().then(function () {
            called = false;
            fn();
        });
    };
}
function taskDebounce(fn) {
    var scheduled = false;
    return function () {
        if (!scheduled) {
            scheduled = true;
            setTimeout(function () {
                scheduled = false;
                fn();
            }, timeoutDuration);
        }
    };
}
var supportsMicroTasks = isBrowser && window.Promise;
/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;
/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
    var getType = {};
    return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}
/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
    if (element.nodeType !== 1) {
        return [];
    }
    // NOTE: 1 DOM access here
    var css = getComputedStyle(element, null);
    return property ? css[property] : css;
}
/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
    if (element.nodeName === 'HTML') {
        return element;
    }
    return element.parentNode || element.host;
}
/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
    // Return body, `getScroll` will take care to get the correct `scrollTop` from it
    if (!element) {
        return document.body;
    }
    switch (element.nodeName) {
        case 'HTML':
        case 'BODY':
            return element.ownerDocument.body;
        case '#document':
            return element.body;
    }
    // Firefox want us to check `-x` and `-y` variations as well
    var _getStyleComputedProp = getStyleComputedProperty(element), overflow = _getStyleComputedProp.overflow, overflowX = _getStyleComputedProp.overflowX, overflowY = _getStyleComputedProp.overflowY;
    if (/(auto|scroll)/.test(overflow + overflowY + overflowX)) {
        return element;
    }
    return getScrollParent(getParentNode(element));
}
/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
    // NOTE: 1 DOM access here
    var offsetParent = element && element.offsetParent;
    var nodeName = offsetParent && offsetParent.nodeName;
    if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
        if (element) {
            return element.ownerDocument.documentElement;
        }
        return document.documentElement;
    }
    // .offsetParent will return the closest TD or TABLE in case
    // no offsetParent is present, I hate this job...
    if (['TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
        return getOffsetParent(offsetParent);
    }
    return offsetParent;
}
function isOffsetContainer(element) {
    var nodeName = element.nodeName;
    if (nodeName === 'BODY') {
        return false;
    }
    return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}
/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
    if (node.parentNode !== null) {
        return getRoot(node.parentNode);
    }
    return node;
}
/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
    // This check is needed to avoid errors in case one of the elements isn't defined for any reason
    if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
        return document.documentElement;
    }
    // Here we make sure to give as "start" the element that comes first in the DOM
    var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
    var start = order ? element1 : element2;
    var end = order ? element2 : element1;
    // Get common ancestor container
    var range = document.createRange();
    range.setStart(start, 0);
    range.setEnd(end, 0);
    var commonAncestorContainer = range.commonAncestorContainer;
    // Both nodes are inside #document
    if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
        if (isOffsetContainer(commonAncestorContainer)) {
            return commonAncestorContainer;
        }
        return getOffsetParent(commonAncestorContainer);
    }
    // one of the nodes is inside shadowDOM, find which one
    var element1root = getRoot(element1);
    if (element1root.host) {
        return findCommonOffsetParent(element1root.host, element2);
    }
    else {
        return findCommonOffsetParent(element1, getRoot(element2).host);
    }
}
/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
    var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';
    var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
    var nodeName = element.nodeName;
    if (nodeName === 'BODY' || nodeName === 'HTML') {
        var html = element.ownerDocument.documentElement;
        var scrollingElement = element.ownerDocument.scrollingElement || html;
        return scrollingElement[upperSide];
    }
    return element[upperSide];
}
/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
    var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var scrollTop = getScroll(element, 'top');
    var scrollLeft = getScroll(element, 'left');
    var modifier = subtract ? -1 : 1;
    rect.top += scrollTop * modifier;
    rect.bottom += scrollTop * modifier;
    rect.left += scrollLeft * modifier;
    rect.right += scrollLeft * modifier;
    return rect;
}
/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */
function getBordersSize(styles, axis) {
    var sideA = axis === 'x' ? 'Left' : 'Top';
    var sideB = sideA === 'Left' ? 'Right' : 'Bottom';
    return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
}
/**
 * Tells if you are running Internet Explorer 10
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean} isIE10
 */
var isIE10 = undefined;
var isIE10$1 = function () {
    if (isIE10 === undefined) {
        isIE10 = navigator.appVersion.indexOf('MSIE 10') !== -1;
    }
    return isIE10;
};
function getSize(axis, body, html, computedStyle) {
    return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE10$1() ? html['offset' + axis] + computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')] + computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')] : 0);
}
function getWindowSizes() {
    var body = document.body;
    var html = document.documentElement;
    var computedStyle = isIE10$1() && getComputedStyle(html);
    return {
        height: getSize('Height', body, html, computedStyle),
        width: getSize('Width', body, html, computedStyle)
    };
}
var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
};
var createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
                descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function (Constructor, protoProps, staticProps) {
        if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
            defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
var defineProperty = function (obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    }
    else {
        obj[key] = value;
    }
    return obj;
};
var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
    return _extends({}, offsets, {
        right: offsets.left + offsets.width,
        bottom: offsets.top + offsets.height
    });
}
/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
    var rect = {};
    // IE10 10 FIX: Please, don't ask, the element isn't
    // considered in DOM in some circumstances...
    // This isn't reproducible in IE10 compatibility mode of IE11
    try {
        if (isIE10$1()) {
            rect = element.getBoundingClientRect();
            var scrollTop = getScroll(element, 'top');
            var scrollLeft = getScroll(element, 'left');
            rect.top += scrollTop;
            rect.left += scrollLeft;
            rect.bottom += scrollTop;
            rect.right += scrollLeft;
        }
        else {
            rect = element.getBoundingClientRect();
        }
    }
    catch (e) { }
    var result = {
        left: rect.left,
        top: rect.top,
        width: rect.right - rect.left,
        height: rect.bottom - rect.top
    };
    // subtract scrollbar size from sizes
    var sizes = element.nodeName === 'HTML' ? getWindowSizes() : {};
    var width = sizes.width || element.clientWidth || result.right - result.left;
    var height = sizes.height || element.clientHeight || result.bottom - result.top;
    var horizScrollbar = element.offsetWidth - width;
    var vertScrollbar = element.offsetHeight - height;
    // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
    // we make this check conditional for performance reasons
    if (horizScrollbar || vertScrollbar) {
        var styles = getStyleComputedProperty(element);
        horizScrollbar -= getBordersSize(styles, 'x');
        vertScrollbar -= getBordersSize(styles, 'y');
        result.width -= horizScrollbar;
        result.height -= vertScrollbar;
    }
    return getClientRect(result);
}
function getOffsetRectRelativeToArbitraryNode(children, parent) {
    var fixedParent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var isIE10 = isIE10$1();
    var isHTML = parent.nodeName === 'HTML';
    var childrenRect = getBoundingClientRect(children);
    var parentRect = getBoundingClientRect(parent);
    var scrollParent = getScrollParent(children);
    var styles = getStyleComputedProperty(parent);
    var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
    var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);
    // In cases where the parent is fixed, we must ignore negative scroll in offset calc
    if (fixedParent) {
        parentRect.top = Math.max(parentRect.top, 0);
        parentRect.left = Math.max(parentRect.left, 0);
    }
    var offsets = getClientRect({
        top: childrenRect.top - parentRect.top - borderTopWidth,
        left: childrenRect.left - parentRect.left - borderLeftWidth,
        width: childrenRect.width,
        height: childrenRect.height
    });
    offsets.marginTop = 0;
    offsets.marginLeft = 0;
    // Subtract margins of documentElement in case it's being used as parent
    // we do this only on HTML because it's the only element that behaves
    // differently when margins are applied to it. The margins are included in
    // the box of the documentElement, in the other cases not.
    if (!isIE10 && isHTML) {
        var marginTop = parseFloat(styles.marginTop, 10);
        var marginLeft = parseFloat(styles.marginLeft, 10);
        offsets.top -= borderTopWidth - marginTop;
        offsets.bottom -= borderTopWidth - marginTop;
        offsets.left -= borderLeftWidth - marginLeft;
        offsets.right -= borderLeftWidth - marginLeft;
        // Attach marginTop and marginLeft because in some circumstances we may need them
        offsets.marginTop = marginTop;
        offsets.marginLeft = marginLeft;
    }
    if (isIE10 && !fixedParent ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
        offsets = includeScroll(offsets, parent);
    }
    return offsets;
}
function getViewportOffsetRectRelativeToArtbitraryNode(element) {
    var html = element.ownerDocument.documentElement;
    var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
    var width = Math.max(html.clientWidth, window.innerWidth || 0);
    var height = Math.max(html.clientHeight, window.innerHeight || 0);
    var scrollTop = getScroll(html);
    var scrollLeft = getScroll(html, 'left');
    var offset = {
        top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
        left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
        width: width,
        height: height
    };
    return getClientRect(offset);
}
/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
    var nodeName = element.nodeName;
    if (nodeName === 'BODY' || nodeName === 'HTML') {
        return false;
    }
    if (getStyleComputedProperty(element, 'position') === 'fixed') {
        return true;
    }
    return isFixed(getParentNode(element));
}
/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {HTMLElement} fixedParentRef - Force this element as the parent
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
    var fixedParent = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    // NOTE: 1 DOM access here
    var boundaries = { top: 0, left: 0 };
    var offsetParent = fixedParent ? popper.ownerDocument.documentElement : findCommonOffsetParent(popper, reference);
    // Handle viewport case
    if (boundariesElement === 'viewport') {
        boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent);
    }
    else if (boundariesElement === 'absoluteViewport') {
        var winSize = getViewportOffsetRectRelativeToArtbitraryNode(popper.ownerDocument.documentElement);
        boundaries = _extends({}, boundaries, { bottom: winSize.height, right: winSize.width });
    }
    else {
        // Handle other cases based on DOM element used as boundaries
        var boundariesNode = void 0;
        if (boundariesElement === 'scrollParent') {
            boundariesNode = getScrollParent(getParentNode(reference));
            if (boundariesNode.nodeName === 'BODY') {
                boundariesNode = popper.ownerDocument.documentElement;
            }
        }
        else if (boundariesElement === 'window') {
            boundariesNode = popper.ownerDocument.documentElement;
        }
        else {
            boundariesNode = boundariesElement;
        }
        var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedParent);
        // In case of HTML, we need a different computation
        if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
            var _getWindowSizes = getWindowSizes(), height = _getWindowSizes.height, width = _getWindowSizes.width;
            boundaries.top += offsets.top - offsets.marginTop;
            boundaries.bottom = height + offsets.top;
            boundaries.left += offsets.left - offsets.marginLeft;
            boundaries.right = width + offsets.left;
        }
        else {
            // for all the other DOM elements, this one is good
            boundaries = offsets;
        }
    }
    // Add paddings
    boundaries.left += padding;
    boundaries.top += padding;
    boundaries.right -= padding;
    boundaries.bottom -= padding;
    return boundaries;
}
function getArea(_ref) {
    var width = _ref.width, height = _ref.height;
    return width * height;
}
/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
    var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
    if (placement.indexOf('auto') === -1) {
        return placement;
    }
    var boundaries = getBoundaries(popper, reference, padding, boundariesElement);
    var rects = {
        top: {
            width: boundaries.width,
            height: refRect.top - boundaries.top
        },
        right: {
            width: boundaries.right - refRect.right,
            height: boundaries.height
        },
        bottom: {
            width: boundaries.width,
            height: boundaries.bottom - refRect.bottom
        },
        left: {
            width: refRect.left - boundaries.left,
            height: boundaries.height
        }
    };
    var sortedAreas = Object.keys(rects).map(function (key) {
        return _extends({
            key: key
        }, rects[key], {
            area: getArea(rects[key])
        });
    }).sort(function (a, b) {
        return b.area - a.area;
    });
    var filteredAreas = sortedAreas.filter(function (_ref2) {
        var width = _ref2.width, height = _ref2.height;
        return width >= popper.clientWidth && height >= popper.clientHeight;
    });
    var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;
    var variation = placement.split('-')[1];
    return computedPlacement + (variation ? '-' + variation : '');
}
/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedParent - force to calc by a specific parent, used by positionFixed mostly
 * @param {Element} ignoreParentScroll - force ignore on parents scroll, used by positionFixed mostly
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
    var fixedParent = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    var commonOffsetParent = fixedParent ? window.document.documentElement : findCommonOffsetParent(popper, reference);
    return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedParent);
}
/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
    var styles = getComputedStyle(element);
    var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
    var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
    var result = {
        width: element.offsetWidth + y,
        height: element.offsetHeight + x
    };
    return result;
}
/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
    var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
    return placement.replace(/left|right|bottom|top/g, function (matched) {
        return hash[matched];
    });
}
/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
    placement = placement.split('-')[0];
    // Get popper node sizes
    var popperRect = getOuterSizes(popper);
    // Add position, width and height to our offsets object
    var popperOffsets = {
        width: popperRect.width,
        height: popperRect.height
    };
    // depending by the popper placement we have to compute its offsets slightly differently
    var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
    var mainSide = isHoriz ? 'top' : 'left';
    var secondarySide = isHoriz ? 'left' : 'top';
    var measurement = isHoriz ? 'height' : 'width';
    var secondaryMeasurement = !isHoriz ? 'height' : 'width';
    popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
    if (placement === secondarySide) {
        popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
    }
    else {
        popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
    }
    return popperOffsets;
}
/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
    // use native find if supported
    if (Array.prototype.find) {
        return arr.find(check);
    }
    // use `filter` to obtain the same behavior of `find`
    return arr.filter(check)[0];
}
/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
    // use native findIndex if supported
    if (Array.prototype.findIndex) {
        return arr.findIndex(function (cur) {
            return cur[prop] === value;
        });
    }
    // use `find` + `indexOf` if `findIndex` isn't supported
    var match = find(arr, function (obj) {
        return obj[prop] === value;
    });
    return arr.indexOf(match);
}
/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
    var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));
    modifiersToRun.forEach(function (modifier) {
        if (modifier['function']) {
            // eslint-disable-line dot-notation
            console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
        }
        var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
        if (modifier.enabled && isFunction(fn)) {
            // Add properties to offsets to make them a complete clientRect object
            // we do this before each modifier to make sure the previous one doesn't
            // mess with these values
            data.offsets.popper = getClientRect(data.offsets.popper);
            data.offsets.reference = getClientRect(data.offsets.reference);
            data = fn(data, modifier);
        }
    });
    return data;
}
/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
    // if popper is destroyed, don't perform any further update
    if (this.state.isDestroyed) {
        return;
    }
    var data = {
        instance: this,
        styles: {},
        arrowStyles: {},
        attributes: {},
        flipped: false,
        offsets: {}
    };
    // compute reference element offsets
    data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);
    // compute auto placement, store placement inside the data object,
    // modifiers will be able to edit `placement` if needed
    // and refer to originalPlacement to know the original value
    data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);
    // store the computed placement inside `originalPlacement`
    data.originalPlacement = data.placement;
    data.positionFixed = this.options.positionFixed;
    // compute the popper offsets
    data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
    data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';
    // run the modifiers
    data = runModifiers(this.modifiers, data);
    // the first `update` will call `onCreate` callback
    // the other ones will call `onUpdate` callback
    if (!this.state.isCreated) {
        this.state.isCreated = true;
        this.options.onCreate(data);
    }
    else {
        this.options.onUpdate(data);
    }
}
/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
    return modifiers.some(function (_ref) {
        var name = _ref.name, enabled = _ref.enabled;
        return enabled && name === modifierName;
    });
}
/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
    var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
    var upperProp = property.charAt(0).toUpperCase() + property.slice(1);
    for (var i = 0; i < prefixes.length - 1; i++) {
        var prefix = prefixes[i];
        var toCheck = prefix ? '' + prefix + upperProp : property;
        if (typeof document.body.style[toCheck] !== 'undefined') {
            return toCheck;
        }
    }
    return null;
}
/**
 * Destroy the popper
 * @method
 * @memberof Popper
 */
function destroy() {
    this.state.isDestroyed = true;
    // touch DOM only if `applyStyle` modifier is enabled
    if (isModifierEnabled(this.modifiers, 'applyStyle')) {
        this.popper.removeAttribute('x-placement');
        this.popper.style.left = '';
        this.popper.style.position = '';
        this.popper.style.top = '';
        this.popper.style[getSupportedPropertyName('transform')] = '';
    }
    this.disableEventListeners();
    // remove the popper if user explicity asked for the deletion on destroy
    // do not use `remove` because IE11 doesn't support it
    if (this.options.removeOnDestroy) {
        this.popper.parentNode.removeChild(this.popper);
    }
    return this;
}
/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
    var ownerDocument = element.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView : window;
}
function attachToScrollParents(scrollParent, event, callback, scrollParents) {
    var isBody = scrollParent.nodeName === 'BODY';
    var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
    target.addEventListener(event, callback, { passive: true });
    if (!isBody) {
        attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
    }
    scrollParents.push(target);
}
/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
    // Resize event listener on window
    state.updateBound = updateBound;
    getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });
    // Scroll event listener on scroll parents
    var scrollElement = getScrollParent(reference);
    attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
    state.scrollElement = scrollElement;
    state.eventsEnabled = true;
    return state;
}
/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
    if (!this.state.eventsEnabled) {
        this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
    }
}
/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
    // Remove resize event listener on window
    getWindow(reference).removeEventListener('resize', state.updateBound);
    // Remove scroll event listener on scroll parents
    state.scrollParents.forEach(function (target) {
        target.removeEventListener('scroll', state.updateBound);
    });
    // Reset state
    state.updateBound = null;
    state.scrollParents = [];
    state.scrollElement = null;
    state.eventsEnabled = false;
    return state;
}
/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger onUpdate callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
    if (this.state.eventsEnabled) {
        cancelAnimationFrame(this.scheduleUpdate);
        this.state = removeEventListeners(this.reference, this.state);
    }
}
/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
    return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}
/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
    Object.keys(styles).forEach(function (prop) {
        var unit = '';
        // add unit if the value is numeric and is one of the following
        if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
            unit = 'px';
        }
        element.style[prop] = styles[prop] + unit;
    });
}
/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
    Object.keys(attributes).forEach(function (prop) {
        var value = attributes[prop];
        if (value !== false) {
            element.setAttribute(prop, attributes[prop]);
        }
        else {
            element.removeAttribute(prop);
        }
    });
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
    // any property present in `data.styles` will be applied to the popper,
    // in this way we can make the 3rd party modifiers add custom styles to it
    // Be aware, modifiers could override the properties defined in the previous
    // lines of this modifier!
    setStyles(data.instance.popper, data.styles);
    // any property present in `data.attributes` will be applied to the popper,
    // they will be set as HTML attributes of the element
    setAttributes(data.instance.popper, data.attributes);
    // if arrowElement is defined and arrowStyles has some properties
    if (data.arrowElement && Object.keys(data.arrowStyles).length) {
        setStyles(data.arrowElement, data.arrowStyles);
    }
    return data;
}
/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper.
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
    // compute reference element offsets
    var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed ? window.document.documentElement : undefined);
    // compute auto placement, store placement inside the data object,
    // modifiers will be able to edit `placement` if needed
    // and refer to originalPlacement to know the original value
    var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);
    popper.setAttribute('x-placement', placement);
    // Apply `position` to popper before anything else because
    // without the position applied we can't guarantee correct computations
    setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });
    return options;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
    var x = options.x, y = options.y;
    var popper = data.offsets.popper;
    // Remove this legacy support in Popper.js v2
    var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
        return modifier.name === 'applyStyle';
    }).gpuAcceleration;
    if (legacyGpuAccelerationOption !== undefined) {
        console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
    }
    var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;
    var offsetParent = getOffsetParent(data.instance.popper);
    var offsetParentRect = getBoundingClientRect(offsetParent);
    // Styles
    var styles = {
        position: popper.position
    };
    // floor sides to avoid blurry text
    var offsets = {
        left: Math.floor(popper.left),
        top: Math.floor(popper.top),
        bottom: Math.floor(popper.bottom),
        right: Math.floor(popper.right)
    };
    var sideA = x === 'bottom' ? 'top' : 'bottom';
    var sideB = y === 'right' ? 'left' : 'right';
    // if gpuAcceleration is set to `true` and transform is supported,
    //  we use `translate3d` to apply the position to the popper we
    // automatically use the supported prefixed version if needed
    var prefixedProperty = getSupportedPropertyName('transform');
    // now, let's make a step back and look at this code closely (wtf?)
    // If the content of the popper grows once it's been positioned, it
    // may happen that the popper gets misplaced because of the new content
    // overflowing its reference element
    // To avoid this problem, we provide two options (x and y), which allow
    // the consumer to define the offset origin.
    // If we position a popper on top of a reference element, we can set
    // `x` to `top` to make the popper grow towards its top instead of
    // its bottom.
    var left = void 0, top = void 0;
    if (sideA === 'bottom') {
        top = -offsetParentRect.height + offsets.bottom;
    }
    else {
        top = offsets.top;
    }
    if (sideB === 'right') {
        left = -offsetParentRect.width + offsets.right;
    }
    else {
        left = offsets.left;
    }
    if (gpuAcceleration && prefixedProperty) {
        styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
        styles[sideA] = 0;
        styles[sideB] = 0;
        styles.willChange = 'transform';
    }
    else {
        // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
        var invertTop = sideA === 'bottom' ? -1 : 1;
        var invertLeft = sideB === 'right' ? -1 : 1;
        styles[sideA] = top * invertTop;
        styles[sideB] = left * invertLeft;
        styles.willChange = sideA + ', ' + sideB;
    }
    // Attributes
    var attributes = {
        'x-placement': data.placement
    };
    // Update `data` attributes, styles and arrowStyles
    data.attributes = _extends({}, attributes, data.attributes);
    data.styles = _extends({}, styles, data.styles);
    data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);
    return data;
}
/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
    var requesting = find(modifiers, function (_ref) {
        var name = _ref.name;
        return name === requestingName;
    });
    var isRequired = !!requesting && modifiers.some(function (modifier) {
        return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
    });
    if (!isRequired) {
        var _requesting = '`' + requestingName + '`';
        var requested = '`' + requestedName + '`';
        console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
    }
    return isRequired;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
    var _data$offsets$arrow;
    // arrow depends on keepTogether in order to work
    if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
        return data;
    }
    var arrowElement = options.element;
    // if arrowElement is a string, suppose it's a CSS selector
    if (typeof arrowElement === 'string') {
        arrowElement = data.instance.popper.querySelector(arrowElement);
        // if arrowElement is not found, don't run the modifier
        if (!arrowElement) {
            return data;
        }
    }
    else {
        // if the arrowElement isn't a query selector we must check that the
        // provided DOM node is child of its popper node
        if (!data.instance.popper.contains(arrowElement)) {
            console.warn('WARNING: `arrow.element` must be child of its popper element!');
            return data;
        }
    }
    var placement = data.placement.split('-')[0];
    var _data$offsets = data.offsets, popper = _data$offsets.popper, reference = _data$offsets.reference;
    var isVertical = ['left', 'right'].indexOf(placement) !== -1;
    var len = isVertical ? 'height' : 'width';
    var sideCapitalized = isVertical ? 'Top' : 'Left';
    var side = sideCapitalized.toLowerCase();
    var altSide = isVertical ? 'left' : 'top';
    var opSide = isVertical ? 'bottom' : 'right';
    var arrowElementSize = getOuterSizes(arrowElement)[len];
    //
    // extends keepTogether behavior making sure the popper and its
    // reference have enough pixels in conjuction
    //
    // top/left side
    if (reference[opSide] - arrowElementSize < popper[side]) {
        data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
    }
    // bottom/right side
    if (reference[side] + arrowElementSize > popper[opSide]) {
        data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
    }
    data.offsets.popper = getClientRect(data.offsets.popper);
    // compute center of the popper
    var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;
    // Compute the sideValue using the updated popper offsets
    // take popper margin in account because we don't have this info available
    var css = getStyleComputedProperty(data.instance.popper);
    var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
    var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
    var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;
    // prevent arrowElement from being placed not contiguously to its popper
    sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);
    data.arrowElement = arrowElement;
    data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);
    return data;
}
/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
    if (variation === 'end') {
        return 'start';
    }
    else if (variation === 'start') {
        return 'end';
    }
    return variation;
}
/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-right` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];
// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);
/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
    var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var index = validPlacements.indexOf(placement);
    var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
    return counter ? arr.reverse() : arr;
}
var BEHAVIORS = {
    FLIP: 'flip',
    CLOCKWISE: 'clockwise',
    COUNTERCLOCKWISE: 'counterclockwise'
};
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
    // if `inner` modifier is enabled, we can't use the `flip` modifier
    if (isModifierEnabled(data.instance.modifiers, 'inner')) {
        return data;
    }
    if (data.flipped && data.placement === data.originalPlacement) {
        // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
        return data;
    }
    var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, data.positionFixed && options.boundariesElement === 'viewport' ? 'absoluteViewport' : options.boundariesElement, data.positionFixed);
    var placement = data.placement.split('-')[0];
    var placementOpposite = getOppositePlacement(placement);
    var variation = data.placement.split('-')[1] || '';
    var flipOrder = [];
    switch (options.behavior) {
        case BEHAVIORS.FLIP:
            flipOrder = [placement, placementOpposite];
            break;
        case BEHAVIORS.CLOCKWISE:
            flipOrder = clockwise(placement);
            break;
        case BEHAVIORS.COUNTERCLOCKWISE:
            flipOrder = clockwise(placement, true);
            break;
        default:
            flipOrder = options.behavior;
    }
    flipOrder.forEach(function (step, index) {
        if (placement !== step || flipOrder.length === index + 1) {
            return data;
        }
        placement = data.placement.split('-')[0];
        placementOpposite = getOppositePlacement(placement);
        var popperOffsets = data.offsets.popper;
        var refOffsets = data.offsets.reference;
        // using floor because the reference offsets may contain decimals we are not going to consider here
        var floor = Math.floor;
        var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);
        var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
        var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
        var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
        var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);
        var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;
        // flip the variation if required
        var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
        var flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);
        if (overlapsRef || overflowsBoundaries || flippedVariation) {
            // this boolean to detect any flip loop
            data.flipped = true;
            if (overlapsRef || overflowsBoundaries) {
                placement = flipOrder[index + 1];
            }
            if (flippedVariation) {
                variation = getOppositeVariation(variation);
            }
            data.placement = placement + (variation ? '-' + variation : '');
            // this object contains `position`, we want to preserve it along with
            // any additional property we may add in the future
            data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));
            data = runModifiers(data.instance.modifiers, data, 'flip');
        }
    });
    return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
    var _data$offsets = data.offsets, popper = _data$offsets.popper, reference = _data$offsets.reference;
    var placement = data.placement.split('-')[0];
    var floor = Math.floor;
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
    var side = isVertical ? 'right' : 'bottom';
    var opSide = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';
    if (popper[side] < floor(reference[opSide])) {
        data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
    }
    if (popper[opSide] > floor(reference[side])) {
        data.offsets.popper[opSide] = floor(reference[side]);
    }
    return data;
}
/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
    // separate value from unit
    var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
    var value = +split[1];
    var unit = split[2];
    // If it's not a number it's an operator, I guess
    if (!value) {
        return str;
    }
    if (unit.indexOf('%') === 0) {
        var element = void 0;
        switch (unit) {
            case '%p':
                element = popperOffsets;
                break;
            case '%':
            case '%r':
            default:
                element = referenceOffsets;
        }
        var rect = getClientRect(element);
        return rect[measurement] / 100 * value;
    }
    else if (unit === 'vh' || unit === 'vw') {
        // if is a vh or vw, we calculate the size based on the viewport
        var size = void 0;
        if (unit === 'vh') {
            size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        }
        else {
            size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        }
        return size / 100 * value;
    }
    else {
        // if is an explicit pixel unit, we get rid of the unit and keep the value
        // if is an implicit unit, it's px, and we return just the value
        return value;
    }
}
/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
    var offsets = [0, 0];
    // Use height if placement is left or right and index is 0 otherwise use width
    // in this way the first offset will use an axis and the second one
    // will use the other one
    var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;
    // Split the offset string to obtain a list of values and operands
    // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
    var fragments = offset.split(/(\+|\-)/).map(function (frag) {
        return frag.trim();
    });
    // Detect if the offset string contains a pair of values or a single one
    // they could be separated by comma or space
    var divider = fragments.indexOf(find(fragments, function (frag) {
        return frag.search(/,|\s/) !== -1;
    }));
    if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
        console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
    }
    // If divider is found, we divide the list of values and operands to divide
    // them by ofset X and Y.
    var splitRegex = /\s*,\s*|\s+/;
    var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];
    // Convert the values with units to absolute pixels to allow our computations
    ops = ops.map(function (op, index) {
        // Most of the units rely on the orientation of the popper
        var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
        var mergeWithPrevious = false;
        return op
            .reduce(function (a, b) {
            if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
                a[a.length - 1] = b;
                mergeWithPrevious = true;
                return a;
            }
            else if (mergeWithPrevious) {
                a[a.length - 1] += b;
                mergeWithPrevious = false;
                return a;
            }
            else {
                return a.concat(b);
            }
        }, [])
            .map(function (str) {
            return toValue(str, measurement, popperOffsets, referenceOffsets);
        });
    });
    // Loop trough the offsets arrays and execute the operations
    ops.forEach(function (op, index) {
        op.forEach(function (frag, index2) {
            if (isNumeric(frag)) {
                offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
            }
        });
    });
    return offsets;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
    var offset = _ref.offset;
    var placement = data.placement, _data$offsets = data.offsets, popper = _data$offsets.popper, reference = _data$offsets.reference;
    var basePlacement = placement.split('-')[0];
    var offsets = void 0;
    if (isNumeric(+offset)) {
        offsets = [+offset, 0];
    }
    else {
        offsets = parseOffset(offset, popper, reference, basePlacement);
    }
    if (basePlacement === 'left') {
        popper.top += offsets[0];
        popper.left -= offsets[1];
    }
    else if (basePlacement === 'right') {
        popper.top += offsets[0];
        popper.left += offsets[1];
    }
    else if (basePlacement === 'top') {
        popper.left += offsets[0];
        popper.top -= offsets[1];
    }
    else if (basePlacement === 'bottom') {
        popper.left += offsets[0];
        popper.top += offsets[1];
    }
    data.popper = popper;
    return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
    var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);
    // If offsetParent is the reference element, we really want to
    // go one step up and use the next offsetParent as reference to
    // avoid to make this modifier completely useless and look like broken
    if (data.instance.reference === boundariesElement) {
        boundariesElement = getOffsetParent(boundariesElement);
    }
    var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);
    options.boundaries = boundaries;
    var order = options.priority;
    var popper = data.offsets.popper;
    var check = {
        primary: function primary(placement) {
            var value = popper[placement];
            if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
                value = Math.max(popper[placement], boundaries[placement]);
            }
            return defineProperty({}, placement, value);
        },
        secondary: function secondary(placement) {
            var mainSide = placement === 'right' ? 'left' : 'top';
            var value = popper[mainSide];
            if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
                value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
            }
            return defineProperty({}, mainSide, value);
        }
    };
    order.forEach(function (placement) {
        var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
        popper = _extends({}, popper, check[side](placement));
    });
    data.offsets.popper = popper;
    return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
    var placement = data.placement;
    var basePlacement = placement.split('-')[0];
    var shiftvariation = placement.split('-')[1];
    // if shift shiftvariation is specified, run the modifier
    if (shiftvariation) {
        var _data$offsets = data.offsets, reference = _data$offsets.reference, popper = _data$offsets.popper;
        var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
        var side = isVertical ? 'left' : 'top';
        var measurement = isVertical ? 'width' : 'height';
        var shiftOffsets = {
            start: defineProperty({}, side, reference[side]),
            end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
        };
        data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
    }
    return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
    if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
        return data;
    }
    var refRect = data.offsets.reference;
    var bound = find(data.instance.modifiers, function (modifier) {
        return modifier.name === 'preventOverflow';
    }).boundaries;
    if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
        // Avoid unnecessary DOM access if visibility hasn't changed
        if (data.hide === true) {
            return data;
        }
        data.hide = true;
        data.attributes['x-out-of-boundaries'] = '';
    }
    else {
        // Avoid unnecessary DOM access if visibility hasn't changed
        if (data.hide === false) {
            return data;
        }
        data.hide = false;
        data.attributes['x-out-of-boundaries'] = false;
    }
    return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
    var placement = data.placement;
    var basePlacement = placement.split('-')[0];
    var _data$offsets = data.offsets, popper = _data$offsets.popper, reference = _data$offsets.reference;
    var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;
    var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;
    popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);
    data.placement = getOppositePlacement(placement);
    data.offsets.popper = getClientRect(popper);
    return data;
}
/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */
/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
    /**
     * Modifier used to shift the popper on the start or end of its reference
     * element.<br />
     * It will read the variation of the `placement` property.<br />
     * It can be one either `-end` or `-start`.
     * @memberof modifiers
     * @inner
     */
    shift: {
        /** @prop {number} order=100 - Index used to define the order of execution */
        order: 100,
        /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
        enabled: true,
        /** @prop {ModifierFn} */
        fn: shift
    },
    /**
     * The `offset` modifier can shift your popper on both its axis.
     *
     * It accepts the following units:
     * - `px` or unitless, interpreted as pixels
     * - `%` or `%r`, percentage relative to the length of the reference element
     * - `%p`, percentage relative to the length of the popper element
     * - `vw`, CSS viewport width unit
     * - `vh`, CSS viewport height unit
     *
     * For length is intended the main axis relative to the placement of the popper.<br />
     * This means that if the placement is `top` or `bottom`, the length will be the
     * `width`. In case of `left` or `right`, it will be the height.
     *
     * You can provide a single value (as `Number` or `String`), or a pair of values
     * as `String` divided by a comma or one (or more) white spaces.<br />
     * The latter is a deprecated method because it leads to confusion and will be
     * removed in v2.<br />
     * Additionally, it accepts additions and subtractions between different units.
     * Note that multiplications and divisions aren't supported.
     *
     * Valid examples are:
     * ```
     * 10
     * '10%'
     * '10, 10'
     * '10%, 10'
     * '10 + 10%'
     * '10 - 5vh + 3%'
     * '-10px + 5vh, 5px - 6%'
     * ```
     * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
     * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
     * > More on this [reading this issue](https://github.com/FezVrasta/popper.js/issues/373)
     *
     * @memberof modifiers
     * @inner
     */
    offset: {
        /** @prop {number} order=200 - Index used to define the order of execution */
        order: 200,
        /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
        enabled: true,
        /** @prop {ModifierFn} */
        fn: offset,
        /** @prop {Number|String} offset=0
         * The offset value as described in the modifier description
         */
        offset: 0
    },
    /**
     * Modifier used to prevent the popper from being positioned outside the boundary.
     *
     * An scenario exists where the reference itself is not within the boundaries.<br />
     * We can say it has "escaped the boundaries" — or just "escaped".<br />
     * In this case we need to decide whether the popper should either:
     *
     * - detach from the reference and remain "trapped" in the boundaries, or
     * - if it should ignore the boundary and "escape with its reference"
     *
     * When `escapeWithReference` is set to`true` and reference is completely
     * outside its boundaries, the popper will overflow (or completely leave)
     * the boundaries in order to remain attached to the edge of the reference.
     *
     * @memberof modifiers
     * @inner
     */
    preventOverflow: {
        /** @prop {number} order=300 - Index used to define the order of execution */
        order: 300,
        /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
        enabled: true,
        /** @prop {ModifierFn} */
        fn: preventOverflow,
        /**
         * @prop {Array} [priority=['left','right','top','bottom']]
         * Popper will try to prevent overflow following these priorities by default,
         * then, it could overflow on the left and on top of the `boundariesElement`
         */
        priority: ['left', 'right', 'top', 'bottom'],
        /**
         * @prop {number} padding=5
         * Amount of pixel used to define a minimum distance between the boundaries
         * and the popper this makes sure the popper has always a little padding
         * between the edges of its container
         */
        padding: 5,
        /**
         * @prop {String|HTMLElement} boundariesElement='scrollParent'
         * Boundaries used by the modifier, can be `scrollParent`, `window`,
         * `viewport` or any DOM element.
         */
        boundariesElement: 'scrollParent'
    },
    /**
     * Modifier used to make sure the reference and its popper stay near eachothers
     * without leaving any gap between the two. Expecially useful when the arrow is
     * enabled and you want to assure it to point to its reference element.
     * It cares only about the first axis, you can still have poppers with margin
     * between the popper and its reference element.
     * @memberof modifiers
     * @inner
     */
    keepTogether: {
        /** @prop {number} order=400 - Index used to define the order of execution */
        order: 400,
        /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
        enabled: true,
        /** @prop {ModifierFn} */
        fn: keepTogether
    },
    /**
     * This modifier is used to move the `arrowElement` of the popper to make
     * sure it is positioned between the reference element and its popper element.
     * It will read the outer size of the `arrowElement` node to detect how many
     * pixels of conjuction are needed.
     *
     * It has no effect if no `arrowElement` is provided.
     * @memberof modifiers
     * @inner
     */
    arrow: {
        /** @prop {number} order=500 - Index used to define the order of execution */
        order: 500,
        /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
        enabled: true,
        /** @prop {ModifierFn} */
        fn: arrow,
        /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
        element: '[x-arrow]'
    },
    /**
     * Modifier used to flip the popper's placement when it starts to overlap its
     * reference element.
     *
     * Requires the `preventOverflow` modifier before it in order to work.
     *
     * **NOTE:** this modifier will interrupt the current update cycle and will
     * restart it if it detects the need to flip the placement.
     * @memberof modifiers
     * @inner
     */
    flip: {
        /** @prop {number} order=600 - Index used to define the order of execution */
        order: 600,
        /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
        enabled: true,
        /** @prop {ModifierFn} */
        fn: flip,
        /**
         * @prop {String|Array} behavior='flip'
         * The behavior used to change the popper's placement. It can be one of
         * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
         * placements (with optional variations).
         */
        behavior: 'flip',
        /**
         * @prop {number} padding=5
         * The popper will flip if it hits the edges of the `boundariesElement`
         */
        padding: 5,
        /**
         * @prop {String|HTMLElement} boundariesElement='viewport'
         * The element which will define the boundaries of the popper position,
         * the popper will never be placed outside of the defined boundaries
         * (except if keepTogether is enabled)
         */
        boundariesElement: 'viewport'
    },
    /**
     * Modifier used to make the popper flow toward the inner of the reference element.
     * By default, when this modifier is disabled, the popper will be placed outside
     * the reference element.
     * @memberof modifiers
     * @inner
     */
    inner: {
        /** @prop {number} order=700 - Index used to define the order of execution */
        order: 700,
        /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
        enabled: false,
        /** @prop {ModifierFn} */
        fn: inner
    },
    /**
     * Modifier used to hide the popper when its reference element is outside of the
     * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
     * be used to hide with a CSS selector the popper when its reference is
     * out of boundaries.
     *
     * Requires the `preventOverflow` modifier before it in order to work.
     * @memberof modifiers
     * @inner
     */
    hide: {
        /** @prop {number} order=800 - Index used to define the order of execution */
        order: 800,
        /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
        enabled: true,
        /** @prop {ModifierFn} */
        fn: hide
    },
    /**
     * Computes the style that will be applied to the popper element to gets
     * properly positioned.
     *
     * Note that this modifier will not touch the DOM, it just prepares the styles
     * so that `applyStyle` modifier can apply it. This separation is useful
     * in case you need to replace `applyStyle` with a custom implementation.
     *
     * This modifier has `850` as `order` value to maintain backward compatibility
     * with previous versions of Popper.js. Expect the modifiers ordering method
     * to change in future major versions of the library.
     *
     * @memberof modifiers
     * @inner
     */
    computeStyle: {
        /** @prop {number} order=850 - Index used to define the order of execution */
        order: 850,
        /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
        enabled: true,
        /** @prop {ModifierFn} */
        fn: computeStyle,
        /**
         * @prop {Boolean} gpuAcceleration=true
         * If true, it uses the CSS 3d transformation to position the popper.
         * Otherwise, it will use the `top` and `left` properties.
         */
        gpuAcceleration: true,
        /**
         * @prop {string} [x='bottom']
         * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
         * Change this if your popper should grow in a direction different from `bottom`
         */
        x: 'bottom',
        /**
         * @prop {string} [x='left']
         * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
         * Change this if your popper should grow in a direction different from `right`
         */
        y: 'right'
    },
    /**
     * Applies the computed styles to the popper element.
     *
     * All the DOM manipulations are limited to this modifier. This is useful in case
     * you want to integrate Popper.js inside a framework or view library and you
     * want to delegate all the DOM manipulations to it.
     *
     * Note that if you disable this modifier, you must make sure the popper element
     * has its position set to `absolute` before Popper.js can do its work!
     *
     * Just disable this modifier and define you own to achieve the desired effect.
     *
     * @memberof modifiers
     * @inner
     */
    applyStyle: {
        /** @prop {number} order=900 - Index used to define the order of execution */
        order: 900,
        /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
        enabled: true,
        /** @prop {ModifierFn} */
        fn: applyStyle,
        /** @prop {Function} */
        onLoad: applyStyleOnLoad,
        /**
         * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
         * @prop {Boolean} gpuAcceleration=true
         * If true, it uses the CSS 3d transformation to position the popper.
         * Otherwise, it will use the `top` and `left` properties.
         */
        gpuAcceleration: undefined
    }
};
/**
 * The `dataObject` is an object containing all the informations used by Popper.js
 * this object get passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper.
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements.
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */
/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overriden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass as 3rd argument an object with the same
 * structure of this object, example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
    /**
     * Popper's placement
     * @prop {Popper.placements} placement='bottom'
     */
    placement: 'bottom',
    /**
     * Set this to true if you want popper to position it self in 'fixed' mode
     * @prop {Boolean} positionFixed=false
     */
    positionFixed: false,
    /**
     * Whether events (resize, scroll) are initially enabled
     * @prop {Boolean} eventsEnabled=true
     */
    eventsEnabled: true,
    /**
     * Set to true if you want to automatically remove the popper when
     * you call the `destroy` method.
     * @prop {Boolean} removeOnDestroy=false
     */
    removeOnDestroy: false,
    /**
     * Callback called when the popper is created.<br />
     * By default, is set to no-op.<br />
     * Access Popper.js instance with `data.instance`.
     * @prop {onCreate}
     */
    onCreate: function onCreate() { },
    /**
     * Callback called when the popper is updated, this callback is not called
     * on the initialization/creation of the popper, but only on subsequent
     * updates.<br />
     * By default, is set to no-op.<br />
     * Access Popper.js instance with `data.instance`.
     * @prop {onUpdate}
     */
    onUpdate: function onUpdate() { },
    /**
     * List of modifiers used to modify the offsets before they are applied to the popper.
     * They provide most of the functionalities of Popper.js
     * @prop {modifiers}
     */
    modifiers: modifiers
};
/**
 * @callback onCreate
 * @param {dataObject} data
 */
/**
 * @callback onUpdate
 * @param {dataObject} data
 */
// Utils
// Methods
var Popper = function () {
    /**
     * Create a new Popper.js instance
     * @class Popper
     * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
     * @param {HTMLElement} popper - The HTML element used as popper.
     * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
     * @return {Object} instance - The generated Popper.js instance
     */
    function Popper(reference, popper) {
        var _this = this;
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        classCallCheck(this, Popper);
        this.scheduleUpdate = function () {
            return requestAnimationFrame(_this.update);
        };
        // make update() debounced, so that it only runs at most once-per-tick
        this.update = debounce(this.update.bind(this));
        // with {} we create a new object with the options inside it
        this.options = _extends({}, Popper.Defaults, options);
        // init state
        this.state = {
            isDestroyed: false,
            isCreated: false,
            scrollParents: []
        };
        // get reference and popper elements (allow jQuery wrappers)
        this.reference = reference && reference.jquery ? reference[0] : reference;
        this.popper = popper && popper.jquery ? popper[0] : popper;
        // Deep merge modifiers options
        this.options.modifiers = {};
        Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
            _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
        });
        // Refactoring modifiers' list (Object => Array)
        this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
            return _extends({
                name: name
            }, _this.options.modifiers[name]);
        })
            .sort(function (a, b) {
            return a.order - b.order;
        });
        // modifiers have the ability to execute arbitrary code when Popper.js get inited
        // such code is executed in the same order of its modifier
        // they could add new properties to their options configuration
        // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
        this.modifiers.forEach(function (modifierOptions) {
            if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
                modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
            }
        });
        // fire the first update to position the popper in the right place
        this.update();
        var eventsEnabled = this.options.eventsEnabled;
        if (eventsEnabled) {
            // setup event listeners, they will take care of update the position in specific situations
            this.enableEventListeners();
        }
        this.state.eventsEnabled = eventsEnabled;
    }
    // We can't use class properties because they don't get listed in the
    // class prototype and break stuff like Sinon stubs
    createClass(Popper, [{
            key: 'update',
            value: function update$$1() {
                return update.call(this);
            }
        }, {
            key: 'destroy',
            value: function destroy$$1() {
                return destroy.call(this);
            }
        }, {
            key: 'enableEventListeners',
            value: function enableEventListeners$$1() {
                return enableEventListeners.call(this);
            }
        }, {
            key: 'disableEventListeners',
            value: function disableEventListeners$$1() {
                return disableEventListeners.call(this);
            }
            /**
             * Schedule an update, it will run on the next UI update available
             * @method scheduleUpdate
             * @memberof Popper
             */
            /**
             * Collection of utilities useful when writing custom modifiers.
             * Starting from version 1.7, this method is available only if you
             * include `popper-utils.js` before `popper.js`.
             *
             * **DEPRECATION**: This way to access PopperUtils is deprecated
             * and will be removed in v2! Use the PopperUtils module directly instead.
             * Due to the high instability of the methods contained in Utils, we can't
             * guarantee them to follow semver. Use them at your own risk!
             * @static
             * @private
             * @type {Object}
             * @deprecated since version 1.8
             * @member Utils
             * @memberof Popper
             */
        }]);
    return Popper;
}();
/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */
Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;
var Triggers = (function () {
    function Triggers() {
    }
    return Triggers;
}());
Triggers.CLICK = 'click';
Triggers.HOVER = 'hover';
Triggers.MOUSEDOWN = 'mousedown';
Triggers.NONE = 'none';
var Placements = (function () {
    function Placements() {
    }
    return Placements;
}());
Placements.Top = 'top';
Placements.Bottom = 'bottom';
Placements.Left = 'left';
Placements.Right = 'right';
Placements.TopStart = 'top-start';
Placements.BottomStart = 'bottom-start';
Placements.LeftStart = 'left-start';
Placements.RightStart = 'right-start';
Placements.TopEnd = 'top-end';
Placements.BottomEnd = 'bottom-end';
Placements.LeftEnd = 'left-end';
Placements.RightEnd = 'right-end';
Placements.Auto = 'auto';
Placements.AutoTop = 'auto-top';
Placements.AutoBottom = 'auto-bottom';
Placements.AutoLeft = 'auto-left';
Placements.AutoRight = 'auto-right';
var PopperContent = (function () {
    /**
     * @param {?} renderer
     */
    function PopperContent(renderer) {
        this.renderer = renderer;
        this.popperOptions = ({
            disableAnimation: false,
            disableDefaultStyling: false,
            placement: Placements.Auto,
            boundariesElement: '',
            trigger: Triggers.HOVER,
            positionFixed: false,
            popperModifiers: {}
        });
        this.isMouseOver = false;
        this.onHidden = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.displayType = "none";
        this.opacity = 0;
    }
    /**
     * @return {?}
     */
    PopperContent.prototype.onMouseOver = function () {
        this.isMouseOver = true;
    };
    /**
     * @return {?}
     */
    PopperContent.prototype.showOnLeave = function () {
        this.isMouseOver = false;
        if (this.popperOptions.trigger !== Triggers.HOVER) {
            return;
        }
        this.hide();
    };
    /**
     * @return {?}
     */
    PopperContent.prototype.onDocumentResize = function () {
        this.update();
    };
    /**
     * @return {?}
     */
    PopperContent.prototype.ngOnDestroy = function () {
        if (!this.popperInstance) {
            return;
        }
        ((this.popperInstance)).disableEventListeners();
        this.popperInstance.destroy();
    };
    /**
     * @return {?}
     */
    PopperContent.prototype.show = function () {
        if (!this.referenceObject) {
            return;
        }
        var /** @type {?} */ popperOptions = ({
            placement: this.popperOptions.placement,
            positionFixed: this.popperOptions.positionFixed,
            modifiers: {
                arrow: {
                    element: this.popperViewRef.nativeElement.querySelector('.ngxp__arrow')
                }
            }
        });
        var /** @type {?} */ boundariesElement = this.popperOptions.boundariesElement && document.querySelector(this.popperOptions.boundariesElement);
        if (popperOptions.modifiers && boundariesElement) {
            popperOptions.modifiers.preventOverflow = { boundariesElement: boundariesElement };
        }
        popperOptions.modifiers = Object.assign(popperOptions.modifiers, this.popperOptions.popperModifiers);
        this.popperInstance = new Popper(this.referenceObject, this.popperViewRef.nativeElement, popperOptions);
        ((this.popperInstance)).enableEventListeners();
        this.scheduleUpdate();
        this.toggleVisibility(true);
        this.globalResize = this.renderer.listen('document', 'resize', this.onDocumentResize.bind(this));
    };
    /**
     * @return {?}
     */
    PopperContent.prototype.update = function () {
        this.popperInstance && ((this.popperInstance)).update();
    };
    /**
     * @return {?}
     */
    PopperContent.prototype.scheduleUpdate = function () {
        this.popperInstance && ((this.popperInstance)).scheduleUpdate();
    };
    /**
     * @return {?}
     */
    PopperContent.prototype.hide = function () {
        if (this.popperInstance) {
            this.popperInstance.destroy();
        }
        this.toggleVisibility(false);
        this.onHidden.emit();
    };
    /**
     * @param {?} state
     * @return {?}
     */
    PopperContent.prototype.toggleVisibility = function (state) {
        if (!state) {
            this.opacity = 0;
            this.displayType = "none";
        }
        else {
            this.opacity = 1;
            this.displayType = "block";
        }
    };
    /**
     * @return {?}
     */
    PopperContent.prototype.clearGlobalResize = function () {
        this.globalResize && typeof this.globalResize === 'function' && this.globalResize();
    };
    return PopperContent;
}());
PopperContent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: "popper-content",
                template: "\n<div #popperViewRef \n     [class.ngxp__container]=\"!popperOptions.disableDefaultStyling\"  \n     [class.ngxp__animation]=\"!popperOptions.disableAnimation\"\n     [style.display]=\"displayType\"\n     [style.opacity]=\"opacity\"\n     role=\"popper\">        \n      <div class=\"ngxp__inner\"><ng-content ></ng-content>  {{ text }} </div>\n      <div class=\"ngxp__arrow\"></div>  \n    \n</div>\n",
                styles: ["\n.ngxp__container {\n  display:none;\n  position: absolute;    \n  border-radius: 3px;\n  border: 1px solid grey;\n  box-shadow: 0 0 2px rgba(0,0,0,0.5);  \n  padding: 10px;\n}\n.ngxp__container.ngxp__animation {\n   -webkit-animation: ngxp-fadeIn  150ms ease-out;\n    -moz-animation: ngxp-fadeIn  150ms ease-out;\n    -o-animation: ngxp-fadeIn  150ms ease-out;\n    animation: ngxp-fadeIn  150ms ease-out;\n  \n}\n.ngxp__container .ngxp__arrow {\n  width: 0;\n  height: 0;\n  border-style: solid;\n  position: absolute;\n  margin: 5px;\n}\n\n.ngxp__container[x-placement^=\"top\"],\n.ngxp__container[x-placement^=\"bottom\"],\n.ngxp__container[x-placement^=\"right\"],\n.ngxp__container[x-placement^=\"left\"]\n{\n  display:block;\n}\n.ngxp__container[x-placement^=\"top\"] {\n  margin-bottom: 5px;\n}\n.ngxp__container[x-placement^=\"top\"] .ngxp__arrow {\n  border-width: 5px 5px 0 5px;\n  border-color: grey transparent transparent transparent;\n  bottom: -5px;\n  left: calc(50% - 5px);\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.ngxp__container[x-placement^=\"bottom\"] {\n  margin-top: 5px;\n}\n.ngxp__container[x-placement^=\"bottom\"] .ngxp__arrow {\n  border-width: 0 5px 5px 5px;\n  border-color: transparent transparent grey transparent;\n  top: -5px;\n  left: calc(50% - 5px);\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.ngxp__container[x-placement^=\"right\"] {\n  margin-left: 5px;\n}\n.ngxp__container[x-placement^=\"right\"] .ngxp__arrow {\n  border-width: 5px 5px 5px 0;\n  border-color: transparent grey transparent transparent;\n  left: -5px;\n  top: calc(50% - 5px);\n  margin-left: 0;\n  margin-right: 0;\n}\n.ngxp__container[x-placement^=\"left\"] {\n  margin-right: 5px;\n}\n.ngxp__container[x-placement^=\"left\"] .ngxp__arrow {\n  border-width: 5px 0 5px 5px;\n  border-color: transparent transparent transparent grey;\n  right: -5px;\n  top: calc(50% - 5px);\n  margin-left: 0;\n  margin-right: 0;\n}\n@-webkit-keyframes ngxp-fadeIn { \n 0% {\n        display: none;\n        opacity: 0;\n    }\n\n    1% {\n        display: block;\n        opacity: 0;\n    }\n\n    100% {\n        display: block;\n        opacity: 1;\n    }\n}\n\n@keyframes ngxp-fadeIn {\n  0% {\n        display: none;\n        opacity: 0;\n    }\n\n    1% {\n        display: block;\n        opacity: 0;\n    }\n\n    100% {\n        display: block;\n        opacity: 1;\n    }\n}\n"]
            },] },
];
/**
 * @nocollapse
 */
PopperContent.ctorParameters = function () {
    return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Renderer2 */], },
    ];
};
PopperContent.propDecorators = {
    'popperViewRef': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */], args: ["popperViewRef",] },],
    'onMouseOver': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */], args: ['mouseover',] },],
    'showOnLeave': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */], args: ['mouseleave',] },],
};
var PopperController = (function () {
    /**
     * @param {?} viewContainerRef
     * @param {?} changeDetectorRef
     * @param {?} resolver
     * @param {?} renderer
     * @param {?=} popperDefaults
     */
    function PopperController(viewContainerRef, changeDetectorRef, resolver, renderer, popperDefaults) {
        if (popperDefaults === void 0) {
            popperDefaults = {};
        }
        this.viewContainerRef = viewContainerRef;
        this.changeDetectorRef = changeDetectorRef;
        this.resolver = resolver;
        this.renderer = renderer;
        this.popperDefaults = popperDefaults;
        this.popperContentClass = PopperContent;
        this.shown = false;
        this.subscriptions = [];
        this.showDelay = 0;
        this.hideTimeout = 0;
        this.timeoutAfterShow = 0;
        this.popperOnShown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.popperOnHidden = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        PopperController.baseOptions = Object.assign({}, PopperController.baseOptions, this.popperDefaults);
    }
    /**
     * @return {?}
     */
    PopperController.prototype.showOrHideOnClick = function () {
        if (this.disabled || this.showTrigger !== Triggers.CLICK) {
            return;
        }
        this.toggle();
    };
    /**
     * @return {?}
     */
    PopperController.prototype.showOrHideOnMouseOver = function () {
        if (this.disabled || this.showTrigger !== Triggers.MOUSEDOWN) {
            return;
        }
        this.toggle();
    };
    /**
     * @return {?}
     */
    PopperController.prototype.showOnHover = function () {
        if (this.disabled || this.showTrigger !== Triggers.HOVER) {
            return;
        }
        this.scheduledShow();
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    PopperController.prototype.hideOnClickOutsideHandler = function ($event) {
        if (this.disabled || !this.hideOnClickOutside) {
            return;
        }
        this.scheduledHide($event, this.hideTimeout);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    PopperController.prototype.hideOnScrollHandler = function ($event) {
        if (this.disabled || !this.hideOnScroll) {
            return;
        }
        this.scheduledHide($event, this.hideTimeout);
    };
    /**
     * @return {?}
     */
    PopperController.prototype.hideOnLeave = function () {
        if (this.disabled || this.showTrigger !== Triggers.HOVER) {
            return;
        }
        this.scheduledHide(null, this.hideTimeout);
    };
    /**
     * @param {?} target
     * @param {...?} sources
     * @return {?}
     */
    PopperController.assignDefined = function (target) {
        var sources = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            sources[_i - 1] = arguments[_i];
        }
        for (var _a = 0, sources_1 = sources; _a < sources_1.length; _a++) {
            var source = sources_1[_a];
            for (var _b = 0, _c = Object.keys(source); _b < _c.length; _b++) {
                var key = _c[_b];
                var /** @type {?} */ val = source[key];
                if (val !== undefined) {
                    target[key] = val;
                }
            }
        }
        return target;
    };
    /**
     * @return {?}
     */
    PopperController.prototype.ngOnInit = function () {
        //Support legacy prop
        this.hideOnClickOutside = typeof this.hideOnClickOutside === 'undefined' ?
            this.closeOnClickOutside : this.hideOnClickOutside;
        if (typeof this.content === 'string') {
            var /** @type {?} */ text = this.content;
            this.content = this.constructContent();
            this.content.text = text;
        }
        var /** @type {?} */ popperRef = (this.content);
        popperRef.referenceObject = this.getRefElement();
        this.setContentProperties(popperRef);
        this.setDefaults();
        if (this.showOnStart) {
            this.scheduledShow();
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    PopperController.prototype.ngOnChanges = function (changes) {
        if (changes['popperDisabled']) {
            if (changes['popperDisabled'].currentValue) {
                this.hide();
            }
        }
    };
    /**
     * @return {?}
     */
    PopperController.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sub) { return sub.unsubscribe && sub.unsubscribe(); });
        this.subscriptions.length = 0;
        this.clearEventListeners();
    };
    /**
     * @return {?}
     */
    PopperController.prototype.toggle = function () {
        this.shown ? this.scheduledHide(null, this.hideTimeout) : this.scheduledShow();
    };
    /**
     * @return {?}
     */
    PopperController.prototype.show = function () {
        if (this.shown) {
            this.overrideHideTimeout();
            return;
        }
        this.shown = true;
        var /** @type {?} */ popperRef = (this.content);
        var /** @type {?} */ element = this.getRefElement();
        if (popperRef.referenceObject !== element) {
            popperRef.referenceObject = element;
        }
        this.setContentProperties(popperRef);
        popperRef.show();
        this.popperOnShown.emit(this);
        if (this.timeoutAfterShow > 0) {
            this.scheduledHide(null, this.timeoutAfterShow);
        }
        this.globalClick = this.renderer.listen('document', 'click', this.hideOnClickOutsideHandler.bind(this));
        this.globalScroll = this.renderer.listen(this.getScrollParent(this.getRefElement()), 'scroll', this.hideOnScrollHandler.bind(this));
    };
    /**
     * @return {?}
     */
    PopperController.prototype.hide = function () {
        if (!this.shown) {
            this.overrideShowTimeout();
            return;
        }
        this.shown = false;
        if (this.popperContentRef) {
            this.popperContentRef.instance.hide();
        }
        else {
            ((this.content)).hide();
        }
        this.popperOnHidden.emit(this);
        this.clearEventListeners();
    };
    /**
     * @param {?=} delay
     * @return {?}
     */
    PopperController.prototype.scheduledShow = function (delay) {
        var _this = this;
        if (delay === void 0) {
            delay = this.showDelay;
        }
        this.overrideHideTimeout();
        this.scheduledShowTimeout = setTimeout(function () {
            _this.show();
            _this.applyChanges();
        }, delay);
    };
    /**
     * @param {?=} $event
     * @param {?=} delay
     * @return {?}
     */
    PopperController.prototype.scheduledHide = function ($event, delay) {
        var _this = this;
        if ($event === void 0) {
            $event = null;
        }
        if (delay === void 0) {
            delay = 0;
        }
        this.overrideShowTimeout();
        this.scheduledHideTimeout = setTimeout(function () {
            var /** @type {?} */ toElement = $event ? $event.toElement : null;
            var /** @type {?} */ popperContentView = ((_this.content)).popperViewRef ? ((_this.content)).popperViewRef.nativeElement : false;
            if (!popperContentView || popperContentView === toElement || popperContentView.contains(toElement) || ((_this.content)).isMouseOver) {
                return;
            }
            _this.hide();
            _this.applyChanges();
        }, delay);
    };
    /**
     * @return {?}
     */
    PopperController.prototype.getRefElement = function () {
        return this.targetElement || this.viewContainerRef.element.nativeElement;
    };
    /**
     * @return {?}
     */
    PopperController.prototype.applyChanges = function () {
        this.changeDetectorRef.markForCheck();
        if (this.forceDetection) {
            this.changeDetectorRef.detectChanges();
        }
    };
    /**
     * @return {?}
     */
    PopperController.prototype.setDefaults = function () {
        this.showTrigger = typeof this.showTrigger === 'undefined' ? PopperController.baseOptions.trigger : this.showTrigger;
        this.hideOnClickOutside = typeof this.hideOnClickOutside === 'undefined' ? PopperController.baseOptions.hideOnClickOutside : this.hideOnClickOutside;
        this.hideOnScroll = typeof this.hideOnScroll === 'undefined' ? PopperController.baseOptions.hideOnScroll : this.hideOnScroll;
    };
    /**
     * @return {?}
     */
    PopperController.prototype.clearEventListeners = function () {
        this.globalClick && typeof this.globalClick === 'function' && this.globalClick();
        this.globalScroll && typeof this.globalScroll === 'function' && this.globalScroll();
    };
    /**
     * @return {?}
     */
    PopperController.prototype.overrideShowTimeout = function () {
        if (this.scheduledShowTimeout) {
            clearTimeout(this.scheduledShowTimeout);
            this.scheduledHideTimeout = 0;
        }
    };
    /**
     * @return {?}
     */
    PopperController.prototype.overrideHideTimeout = function () {
        if (this.scheduledHideTimeout) {
            clearTimeout(this.scheduledHideTimeout);
            this.scheduledHideTimeout = 0;
        }
    };
    /**
     * @return {?}
     */
    PopperController.prototype.constructContent = function () {
        var /** @type {?} */ factory = this.resolver.resolveComponentFactory(this.popperContentClass);
        this.popperContentRef = this.viewContainerRef.createComponent(factory);
        return /** @type {?} */ (this.popperContentRef.instance);
    };
    /**
     * @param {?} popperRef
     * @return {?}
     */
    PopperController.prototype.setContentProperties = function (popperRef) {
        popperRef.popperOptions = PopperController.assignDefined(popperRef.popperOptions, PopperController.baseOptions, {
            disableAnimation: this.disableAnimation,
            disableDefaultStyling: this.disableStyle,
            placement: this.placement,
            boundariesElement: this.boundariesElement,
            trigger: this.showTrigger,
            positionFixed: this.positionFixed,
            popperModifiers: this.popperModifiers,
        });
        this.subscriptions.push(popperRef.onHidden.subscribe(this.hide.bind(this)));
    };
    /**
     * @param {?} node
     * @return {?}
     */
    PopperController.prototype.getScrollParent = function (node) {
        var /** @type {?} */ isElement = node instanceof HTMLElement;
        var /** @type {?} */ overflowY = isElement && window.getComputedStyle(node).overflowY;
        var /** @type {?} */ isScrollable = overflowY !== 'visible' && overflowY !== 'hidden';
        if (!node) {
            return null;
        }
        else if (isScrollable && node.scrollHeight >= node.clientHeight) {
            return node;
        }
        return this.getScrollParent(node.parentNode) || document;
    };
    return PopperController;
}());
PopperController.baseOptions = ({
    placement: Placements.Auto,
    hideOnClickOutside: true,
    hideOnScroll: false,
    showTrigger: Triggers.HOVER
});
PopperController.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{
                selector: '[popper]',
                exportAs: 'popper'
            },] },
];
/**
 * @nocollapse
 */
PopperController.ctorParameters = function () {
    return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewContainerRef */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ComponentFactoryResolver */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Renderer2 */], },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */], args: ['popperDefaults',] },] },
    ];
};
PopperController.propDecorators = {
    'content': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */], args: ['popper',] },],
    'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */], args: ['popperDisabled',] },],
    'placement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */], args: ['popperPlacement',] },],
    'showTrigger': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */], args: ['popperTrigger',] },],
    'targetElement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */], args: ['popperTarget',] },],
    'showDelay': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */], args: ['popperDelay',] },],
    'hideTimeout': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */], args: ['popperTimeout',] },],
    'timeoutAfterShow': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */], args: ['popperTimeoutAfterShow',] },],
    'boundariesElement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */], args: ['popperBoundaries',] },],
    'showOnStart': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */], args: ['popperShowOnStart',] },],
    'closeOnClickOutside': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */], args: ['popperCloseOnClickOutside',] },],
    'hideOnClickOutside': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */], args: ['popperHideOnClickOutside',] },],
    'hideOnScroll': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */], args: ['popperHideOnScroll',] },],
    'positionFixed': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */], args: ['popperPositionFixed',] },],
    'popperModifiers': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */], args: ['popperModifiers',] },],
    'disableStyle': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */], args: ['popperDisableStyle',] },],
    'disableAnimation': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */], args: ['popperDisableAnimation',] },],
    'forceDetection': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */], args: ['popperForceDetection',] },],
    'popperOnShown': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
    'popperOnHidden': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
    'showOrHideOnClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */], args: ['touchstart',] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */], args: ['click',] },],
    'showOrHideOnMouseOver': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */], args: ['touchstart',] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */], args: ['mousedown',] },],
    'showOnHover': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */], args: ['mouseenter',] },],
    'hideOnLeave': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */], args: ['touchend',] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */], args: ['touchcancel',] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */], args: ['mouseleave',] },],
};
var NgxPopperModule = (function () {
    function NgxPopperModule() {
    }
    /**
     * @return {?}
     */
    NgxPopperModule.prototype.ngDoBootstrap = function () {
    };
    /**
     * @param {?=} popperBaseOptions
     * @return {?}
     */
    NgxPopperModule.forRoot = function (popperBaseOptions) {
        if (popperBaseOptions === void 0) {
            popperBaseOptions = {};
        }
        return { ngModule: NgxPopperModule, providers: [{ provide: 'popperDefaults', useValue: popperBaseOptions }] };
    };
    return NgxPopperModule;
}());
NgxPopperModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */], args: [{
                imports: [
                    __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
                ],
                declarations: [
                    PopperController,
                    PopperContent
                ],
                exports: [
                    PopperController,
                    PopperContent
                ],
                entryComponents: [
                    PopperContent
                ],
                providers: [
                    {
                        provide: 'popperDefaults', useValue: {}
                    }
                ]
            },] },
];
/**
 * @nocollapse
 */
NgxPopperModule.ctorParameters = function () { return []; };
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
var TourAnchorNgxPopperPopoverDirective = /** @class */ (function (_super) {
    __extends(TourAnchorNgxPopperPopoverDirective, _super);
    function TourAnchorNgxPopperPopoverDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    TourAnchorNgxPopperPopoverDirective.prototype.ngOnInit = function () { };
    /**
     * @return {?}
     */
    TourAnchorNgxPopperPopoverDirective.prototype.initialize = function () {
        _super.prototype.ngOnInit.call(this);
    };
    return TourAnchorNgxPopperPopoverDirective;
}(PopperController));
TourAnchorNgxPopperPopoverDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{ selector: '[tourAnchor]' },] },
];
/**
 * @nocollapse
 */
TourAnchorNgxPopperPopoverDirective.ctorParameters = function () { return []; };
var TourAnchorNgxPopperDirective = /** @class */ (function () {
    /**
     * @param {?} tourService
     * @param {?} tourStepTemplate
     * @param {?} element
     * @param {?} popoverDirective
     */
    function TourAnchorNgxPopperDirective(tourService, tourStepTemplate, element, popoverDirective) {
        this.tourService = tourService;
        this.tourStepTemplate = tourStepTemplate;
        this.element = element;
        this.popoverDirective = popoverDirective;
    }
    /**
     * @return {?}
     */
    TourAnchorNgxPopperDirective.prototype.ngOnInit = function () {
        this.tourService.register(this.tourAnchor, this);
    };
    /**
     * @return {?}
     */
    TourAnchorNgxPopperDirective.prototype.ngOnDestroy = function () {
        this.tourService.unregister(this.tourAnchor);
    };
    /**
     * @param {?} step
     * @return {?}
     */
    TourAnchorNgxPopperDirective.prototype.showTourStep = function (step) {
        this.isActive = true;
        this.tourStepTemplate.templateComponent.step = step;
        step.prevBtnTitle = step.prevBtnTitle || 'Prev';
        step.nextBtnTitle = step.nextBtnTitle || 'Next';
        step.endBtnTitle = step.endBtnTitle || 'End';
        this.popoverDirective.content = this.tourStepTemplate.template;
        this.popoverDirective.targetElement = this.element.nativeElement;
        this.popoverDirective.placement = step.placement || Placements.Auto;
        this.popoverDirective.showTrigger = Triggers.NONE;
        if (step.popperSettings) {
            this.popoverDirective.boundariesElement = step.popperSettings.boundariesElement || undefined;
            this.popoverDirective.closeOnClickOutside = step.popperSettings.closeOnClickOutside || false;
            this.popoverDirective.disableAnimation = step.popperSettings.disableAnimation || false;
            this.popoverDirective.disabled = step.popperSettings.disabled || false;
            this.popoverDirective.disableStyle = step.popperSettings.disableStyle || false;
            this.popoverDirective.forceDetection = step.popperSettings.forceDetection || false;
            this.popoverDirective.hideOnClickOutside = step.popperSettings.hideOnClickOutside || false;
            this.popoverDirective.hideOnScroll = step.popperSettings.hideOnScroll || false;
            this.popoverDirective.hideTimeout = step.popperSettings.hideTimeout || 0;
            this.popoverDirective.positionFixed = step.popperSettings.positionFixed || false;
            this.popoverDirective.showDelay = step.popperSettings.showDelay || 0;
            this.popoverDirective.showOnStart = step.popperSettings.showOnStart || false;
            this.popoverDirective.showTrigger = step.popperSettings.showTrigger || Triggers.NONE;
            this.popoverDirective.timeoutAfterShow = step.popperSettings.timeoutAfterShow || 0;
            //TODO: Can these even get passed in via json?
            // this.popoverDirective.popperModifiers = step.popperSettings.popperModifiers || undefined;
            // this.popoverDirective.popperOnHidden = step.popperSettings.popperOnHidden || undefined;
            // this.popoverDirective.popperOnShown = step.popperSettings.popperOnShown || undefined;
        }
        this.popoverDirective.initialize();
        this.popoverDirective.show();
        if (!step.preventScrolling) {
            if (!__WEBPACK_IMPORTED_MODULE_8_withinviewport___default()(this.element.nativeElement, { sides: 'bottom' })) {
                ((this.element.nativeElement)).scrollIntoView(false);
            }
            else if (!__WEBPACK_IMPORTED_MODULE_8_withinviewport___default()(this.element.nativeElement, { sides: 'left top right' })) {
                ((this.element.nativeElement)).scrollIntoView(true);
            }
        }
    };
    /**
     * @return {?}
     */
    TourAnchorNgxPopperDirective.prototype.hideTourStep = function () {
        this.isActive = false;
        this.popoverDirective.hide();
    };
    return TourAnchorNgxPopperDirective;
}());
TourAnchorNgxPopperDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{
                selector: '[tourAnchor]',
            },] },
];
/**
 * @nocollapse
 */
TourAnchorNgxPopperDirective.ctorParameters = function () { return [
    { type: NgxpTourService, },
    { type: TourStepTemplateService, },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
    { type: TourAnchorNgxPopperPopoverDirective, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Host */] },] },
]; };
TourAnchorNgxPopperDirective.propDecorators = {
    'tourAnchor': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    'isActive': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */], args: ['class.touranchor--is-active',] },],
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
        _this.step = {};
        return _this;
    }
    /**
     * @return {?}
     */
    TourStepTemplateComponent.prototype.ngAfterViewInit = function () {
        this.tourStepTemplateService.templateComponent = this;
    };
    /**
     * @return {?}
     */
    TourStepTemplateComponent.prototype.ngAfterContentInit = function () {
        this.tourStepTemplateService.template = this.popperContent;
    };
    return TourStepTemplateComponent;
}(TourHotkeyListenerComponent));
TourStepTemplateComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewEncapsulation */].None,
                selector: 'tour-step-template',
                template: "\n    <popper-content class=\"popper-content\">\n      <ng-container *ngTemplateOutlet=\"stepTemplate || defaultTemplate; context: { step: step }\"></ng-container>\n    </popper-content>\n\n    <ng-template #defaultTemplate let-step=\"step\">\n      <p class=\"ngxp-title\">{{step?.title}}</p>\n      <p class=\"ngxp-content\">{{step?.content}}</p>\n      <div class=\"tour-step-navigation\">\n        <button [hidden]=\"!tourService.hasPrev(step)\" class=\"ngxp-btn btn-prev\" (click)=\"tourService.prev()\">\u00AB {{step?.prevBtnTitle}}</button>\n        <button [hidden]=\"!tourService.hasNext(step)\" class=\"ngxp-btn btn-next\" (click)=\"tourService.next()\">{{step?.nextBtnTitle}} \u00BB</button>\n        <button class=\"ngxp-btn btn-end\" (click)=\"tourService.end()\">{{step?.endBtnTitle}}</button>\n      </div>\n    </ng-template>\n  ",
            },] },
];
/**
 * @nocollapse
 */
TourStepTemplateComponent.ctorParameters = function () { return [
    { type: TourStepTemplateService, },
    { type: NgxpTourService, },
]; };
TourStepTemplateComponent.propDecorators = {
    'popperContent': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */], args: [PopperContent,] },],
    'stepTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ContentChild */], args: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* TemplateRef */],] },],
};
var TourNgxPopperModule = /** @class */ (function () {
    function TourNgxPopperModule() {
    }
    /**
     * @return {?}
     */
    TourNgxPopperModule.forRoot = function () {
        return {
            ngModule: TourNgxPopperModule,
            providers: [
                TourStepTemplateService
            ].concat(TourModule.forRoot().providers, [
                NgxpTourService,
            ]),
        };
    };
    return TourNgxPopperModule;
}());
TourNgxPopperModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */], args: [{
                declarations: [TourAnchorNgxPopperDirective, TourAnchorNgxPopperPopoverDirective, TourStepTemplateComponent],
                exports: [TourAnchorNgxPopperDirective, TourAnchorNgxPopperPopoverDirective, TourStepTemplateComponent],
                imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], NgxPopperModule.forRoot()],
            },] },
];
/**
 * @nocollapse
 */
TourNgxPopperModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=ngx-tour-ngx-popper.es5.js.map

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../../../../webpack/buildin/global.js")))

/***/ }),

/***/ "../../../../../dist/ngx-tour-ngx-popper/node_modules/withinviewport/withinviewport.js":
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

/***/ "../../../../../src/app/ngx-popper/docs.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>About</h2>\n\n<p>This is a product tour library built with Angular (2+). It's inspired by <a tourAnchor=\"angular-ui-tour\" href=\"http://benmarch.github.io/angular-ui-tour\">angular-ui-tour</a>.</p>\n\n<p><code>TourNgxPopperModule</code> is an implementation of the tour UI that uses <a href=\"https://github.com/valor-software/ngx-popper\" rel=\"nofollow\" target=\"_blank\">NgxPopper</a> popovers to display tour steps.</p>\n\n<h2 tourAnchor=\"installation\">Installation</h2>\n<ol>\n  <li><code>npm install ngx-tour-ngx-popper ngx-popper</code></li>\n  <li>Import <code>TourNgxPopperModule.forRoot()</code> into your app module</li>\n  <li>Make sure <code>RouterModule</code> is imported in your app module</li>\n  <li>Optionally include styles from <code>ngx-tour-ngx-popper/styles.css</code></li>\n</ol>\n\n<h2 tourAnchor=\"usage\">Usage</h2>\n<ol>\n  <li>Add <code>&lt;tour-step-template&gt;&lt;/tour-step-template&gt;</code> to your root app component</li>\n  <li>\n    Define anchor points for the tour steps by adding the <code>tourAnchor</code> directive throughout your app.\n    <pre><code>&lt;div tourAnchor=\"some.anchor.id\"&gt;...&lt;/div&gt;</code></pre>\n  </li>\n  <li>\n    Define your tour steps using <code>tourService.initialize(steps)</code>\n    <pre>\nthis.tourService.initialize([{{ '{' }}\n  anchorId: 'some.anchor.id',\n  content: 'Some content',\n  title: 'First',\n  popperSettings:{{ '{' }}\n    showDelay: 1000\n  }\n}, {{ '{' }}\n  anchorId: 'another.anchor.id',\n  content: 'Other content',\n  title: 'Second',\n}]);</pre>\n  </li>\n  <li>\n    Possible popperSettings to control ngx-popper. (popperSettings are optional) See: <a href=\"https://www.npmjs.com/package/ngx-popper\">ngx-popper</a> for more details and default settings\n    <pre>\n      popperSettings?:{{ '{' }}\n        boundariesElement?: string;\n        closeOnClickOutside?: boolean;\n        disableAnimation?: boolean;\n        disabled?: boolean;\n        disableStyle?: boolean;\n        forceDetection?: boolean;\n        hideOnClickOutside?: boolean;\n        hideOnScroll?: boolean;\n        hideTimeout?: number;\n        positionFixed?: boolean;\n        showDelay?: number;\n        showOnStart?: boolean;\n        showTrigger?: 'click' | 'mousedown' | 'hover' | 'none';\n        timeoutAfterShow?: number;\n      }\n    </pre>\n  </li>\n  <li>Start the tour with <code tourAnchor=\"tourService.start\">tourService.start()</code></li>\n  <li>Check out the <a href=\"https://github.com/isaacplmann/ngx-tour/tree/master/src/app/ngx-popper\">demo source code</a> for an example.</li>\n</ol>\n\n<h2>TourService</h2>\n<p>The <code>TourService</code> controls the tour. Some key functions include:</p>\n<dl>\n  <dt>start()</dt>\n  <dd>Starts the tour</dd>\n  <dt>startAt(stepId: number | string)</dt>\n  <dd>Start the tour at the step with stepId or at the specified index</dd>\n  <dt>end()</dt>\n  <dd>Ends the tour</dd>\n  <dt>pause()</dt>\n  <dd>Pauses the tour</dd>\n  <dt>resume()</dt>\n  <dd>Resumes the tour</dd>\n  <dt>next()</dt>\n  <dd>Goes to the next step</dd>\n  <dt>prev()</dt>\n  <dd>Goes to the previous step</dd>\n</dl>\n\n<h2>Step Configuration</h2>\n<p>Each step can have the following properties.</p>\n<table class=\"table\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Type</th>\n      <th>Default</th>\n      <th>Description</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>stepId</td>\n      <td>string</td>\n      <td>\"\"</td>\n      <td>A unique identifier for the step</td>\n    </tr>\n    <tr tourAnchor=\"config.anchorId\">\n      <td>anchorId</td>\n      <td>string</td>\n      <td>required</td>\n      <td>The anchor to which the step will be attached</td>\n    </tr>\n    <tr>\n      <td>title</td>\n      <td>string</td>\n      <td>\"\"</td>\n      <td>The title of the tour step</td>\n    </tr>\n    <tr>\n      <td>content</td>\n      <td>string</td>\n      <td>\"\"</td>\n      <td>The content text of the tour step</td>\n    </tr>\n    <tr tourAnchor=\"config.route\">\n      <td>route</td>\n      <td>string | UrlSegment[]</td>\n      <td>undefined</td>\n      <td>\n        The route to which the tour should navigate before attempting to show this tour step.\n        If undefined, no navigation is attempted.\n      </td>\n    </tr>\n    <tr tourAnchor=\"config.nextStep\">\n      <td>nextStep</td>\n      <td>number | string</td>\n      <td>undefined</td>\n      <td>The step index or stepId of the next step.  If undefined, the next step in the steps array is used.</td>\n    </tr>\n    <tr>\n      <td>prevStep</td>\n      <td>number | string</td>\n      <td>undefined</td>\n      <td>The step index or stepId of the previous step.  If undefined, the previous step in the steps array is used.</td>\n    </tr>\n    <tr>\n      <td>placement</td>\n      <td>'top' | 'bottom' | 'left' | 'right' | 'top-start' | 'bottom-start' | 'left-start' | 'right-start' | 'top-end' | 'bottom-end' | 'left-end' | 'right-end' | 'auto' | 'auto-top' | 'auto-bottom' | 'auto-left' | 'auto-right' | function</td>\n      <td><span tourAnchor=\"config.placement.default\">'auto'</span></td>\n      <td>\n      </td>\n    </tr>\n    <tr>\n      <td>preventScrolling</td>\n      <td>boolean</td>\n      <td>false</td>\n      <td>\n        Tour steps automatically scroll to the middle of the screen, if they are off the screen when shown.\n        Setting this value to true will disable the scroll behavior.\n      </td>\n    </tr>\n    <tr tourAnchor=\"config.buttons.custom\">\n      <td>prevBtnTitle</td>\n      <td>string</td>\n      <td>false</td>\n      <td>\n        Sets a custom prev button title for a given step. Default is \"Prev\"\n      </td>\n    </tr>\n    <tr>\n      <td>nextBtnTitle</td>\n      <td>string</td>\n      <td>false</td>\n      <td>\n        Sets a custom next button title for a given step. Default is \"Next\"\n      </td>\n    </tr>\n    <tr>\n      <td>endBtnTitle</td>\n      <td>string</td>\n      <td>false</td>\n      <td>\n        Sets a custom end button title for a given step. Default is \"End\"\n      </td>\n    </tr>\n  </tbody>\n</table>\n\n<h2>Defaults</h2>\n<p>You can set default values in the <code>TourService.initialize</code> function.</p>\n<pre>\nthis.tourService.initialize(steps, {{ '{' }}\n  route: '',\n  placement: 'left',\n  preventScrolling: true,\n});\n</pre>\n<p>Any value explicitly defined in a step will override the default value.</p>\n\n<h2 tourAnchor=\"hotkeys\">Hotkeys</h2>\n<p>\n  Hotkeys are provided using Angular's <code>@HostListener</code> decorator.  Hotkeys are enabled when the tour starts and disabled when the tour ends.\n</p>\n<ul>\n  <li><strong>left arrow</strong><span> - previous step</span></li>\n  <li><strong>right arrow</strong><span> - next step</span></li>\n  <li><strong>esc</strong><span> - end tour</span></li>\n</ul>\n<p>\n  You can disable hotkeys by calling <code>tourService.disableHotkeys()</code> or re-enable with <code>tourService.enableHotkeys()</code>\n</p>\n\n<h2 tourAnchor=\"events\">Event Observables</h2>\n<p>The <code>TourService</code> emits events that can be subscribed to like this:</p>\n<pre>\nthis.tourService.initialize$.subscribe((steps: IStepOption[]) => {{ '{' }}\n  console.log('tour configured with these steps:', steps);\n});\n</pre>\n<table class=\"table\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Payload</th>\n      <th>Emitted When</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>stepShow$</td>\n      <td>IStepOption</td>\n      <td>A step is shown</td>\n    </tr>\n    <tr>\n      <td>stepHide$</td>\n      <td>IStepOption</td>\n      <td>A step is hidden</td>\n    </tr>\n    <tr>\n      <td>initialize$</td>\n      <td>IStepOption[]</td>\n      <td>The tour is configured with a set of steps</td>\n    </tr>\n    <tr>\n      <td>start$</td>\n      <td>IStepOption</td>\n      <td>The tour begins</td>\n    </tr>\n    <tr>\n      <td>end$</td>\n      <td>any</td>\n      <td>The tour ends</td>\n    </tr>\n    <tr>\n      <td>pause$</td>\n      <td>IStepOption</td>\n      <td>The tour is paused</td>\n    </tr>\n    <tr>\n      <td>resume$</td>\n      <td>IStepOption</td>\n      <td>The tour resumes</td>\n    </tr>\n    <tr>\n      <td>anchorRegister$</td>\n      <td>string</td>\n      <td>An anchor is registered with the tour</td>\n    </tr>\n    <tr>\n      <td>anchorUnregister$</td>\n      <td>string</td>\n      <td>An anchor is unregistered from the tour</td>\n    </tr>\n  </tbody>\n</table>\n\n<h2 tourAnchor=\"template\">Custom template</h2>\n<p>\n  You can also customize the tour step template by providing an <code>&lt;ng-template let-step=\"step\" &gt;</code> inside the <code>&lt;tour-step-template&gt;</code>\n</p>\n<p>\n  The default template is equivalent to this:\n</p>\n<pre><code>&lt;tour-step-template&gt;\n  &lt;ng-template let-step=\"step\"&gt;\n    &lt;p class=\"ngxp-title\"&gt;{{ '{{' }}step?.title}}&lt;/p&gt;\n    &lt;p class=\"ngxp-content\"&gt;{{ '{{' }}step?.content}}&lt;/p&gt;\n    &lt;div class=\"tour-step-navigation\"&gt;\n    &lt;button [disabled]=\"!tourService.hasPrev(step)\" class=\"ngxp-btn\" (click)=\"tourService.prev()\"&gt;« {{ '{{' }}step?.prevBtnTitle}}&lt;/button&gt;\n    \n      &lt;button [disabled]=\"!tourService.hasNext(step)\" class=\"ngxp-btn\" (click)=\"tourService.next()\"&gt;{{ '{{' }}step?.nextBtnTitle}} »&lt;/button&gt;\n      &lt;button class=\"ngxp-btn\" (click)=\"tourService.end()\"&gt;{{ '{{' }}step?.endBtnTitle}}&lt;/button&gt;\n    &lt;/div&gt;\n  &lt;/ng-template&gt;\n&lt;/tour-step-template&gt;\n</code></pre>\n"

/***/ }),

/***/ "../../../../../src/app/ngx-popper/docs.component.ts":
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
            template: __webpack_require__("../../../../../src/app/ngx-popper/docs.component.html"),
        })
    ], DocsComponent);
    return DocsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/ngx-popper/ngx-popper.component.html":
/***/ (function(module, exports) {

module.exports = "<a href=\"https://github.com/isaacplmann/ngx-tour\" rel=\"nofollow\" target=\"_blank\" class=\"btn btn-default\">View on GitHub</a>\n<a style=\"cursor: pointer\" (click)=\"tourService.toggle()\" class=\"btn btn-primary\" tourAnchor=\"start.tour\">Start Demo Tour</a>\n\n<router-outlet></router-outlet>\n<tour-step-template></tour-step-template>\n"

/***/ }),

/***/ "../../../../../src/app/ngx-popper/ngx-popper.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgxPopperComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ngx_tour_ngx_popper__ = __webpack_require__("../../../../../dist/ngx-tour-ngx-popper/ngx-tour-ngx-popper.es5.js");
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


var NgxPopperComponent = /** @class */ (function () {
    function NgxPopperComponent(tourService) {
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
                route: 'ngx-popper/other',
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
            }, {
                anchorId: 'config.buttons.custom',
                content: 'You can set cutom step button names',
                title: 'Button Titles',
                prevBtnTitle: 'My Prev',
                nextBtnTitle: 'My Next',
                endBtnTitle: 'My End'
            }], {
            route: 'ngx-popper',
        });
        this.tourService.start();
    }
    NgxPopperComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            // tslint:disable-next-line:component-selector
            selector: 'ngx-popper-route',
            template: __webpack_require__("../../../../../src/app/ngx-popper/ngx-popper.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ngx_tour_ngx_popper__["b" /* TourService */]])
    ], NgxPopperComponent);
    return NgxPopperComponent;
}());



/***/ }),

/***/ "../../../../../src/app/ngx-popper/ngx-popper.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxpPopperModule", function() { return NgxpPopperModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_tour_ngx_popper__ = __webpack_require__("../../../../../dist/ngx-tour-ngx-popper/ngx-tour-ngx-popper.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_popper__ = __webpack_require__("../../../../ngx-popper/ngx-popper.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__docs_component__ = __webpack_require__("../../../../../src/app/ngx-popper/docs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_popper_component__ = __webpack_require__("../../../../../src/app/ngx-popper/ngx-popper.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__other_route_component__ = __webpack_require__("../../../../../src/app/ngx-popper/other-route.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var NgxpPopperModule = /** @class */ (function () {
    function NgxpPopperModule() {
    }
    NgxpPopperModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_6__ngx_popper_component__["a" /* NgxPopperComponent */], __WEBPACK_IMPORTED_MODULE_5__docs_component__["a" /* DocsComponent */], __WEBPACK_IMPORTED_MODULE_7__other_route_component__["a" /* OtherRouteComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_popper__["a" /* NgxPopperModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild([{
                        component: __WEBPACK_IMPORTED_MODULE_6__ngx_popper_component__["a" /* NgxPopperComponent */],
                        path: '',
                        children: [{
                                component: __WEBPACK_IMPORTED_MODULE_5__docs_component__["a" /* DocsComponent */],
                                path: '',
                            }, {
                                component: __WEBPACK_IMPORTED_MODULE_7__other_route_component__["a" /* OtherRouteComponent */],
                                path: 'other',
                            }]
                    }]),
                __WEBPACK_IMPORTED_MODULE_3_ngx_tour_ngx_popper__["a" /* TourNgxPopperModule */].forRoot(),
            ],
        })
    ], NgxpPopperModule);
    return NgxpPopperModule;
}());



/***/ }),

/***/ "../../../../../src/app/ngx-popper/other-route.component.ts":
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

/***/ "../../../../ngx-popper/ngx-popper.es5.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export PopperController */
/* unused harmony export Triggers */
/* unused harmony export Placements */
/* unused harmony export PopperContent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgxPopperModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");


/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.13.0-next.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
var timeoutDuration = 0;
for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
    if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
        timeoutDuration = 1;
        break;
    }
}
function microtaskDebounce(fn) {
    var called = false;
    return function () {
        if (called) {
            return;
        }
        called = true;
        window.Promise.resolve().then(function () {
            called = false;
            fn();
        });
    };
}
function taskDebounce(fn) {
    var scheduled = false;
    return function () {
        if (!scheduled) {
            scheduled = true;
            setTimeout(function () {
                scheduled = false;
                fn();
            }, timeoutDuration);
        }
    };
}
var supportsMicroTasks = isBrowser && window.Promise;
/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;
/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
    var getType = {};
    return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}
/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
    if (element.nodeType !== 1) {
        return [];
    }
    // NOTE: 1 DOM access here
    var css = getComputedStyle(element, null);
    return property ? css[property] : css;
}
/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
    if (element.nodeName === 'HTML') {
        return element;
    }
    return element.parentNode || element.host;
}
/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
    // Return body, `getScroll` will take care to get the correct `scrollTop` from it
    if (!element) {
        return document.body;
    }
    switch (element.nodeName) {
        case 'HTML':
        case 'BODY':
            return element.ownerDocument.body;
        case '#document':
            return element.body;
    }
    // Firefox want us to check `-x` and `-y` variations as well
    var _getStyleComputedProp = getStyleComputedProperty(element), overflow = _getStyleComputedProp.overflow, overflowX = _getStyleComputedProp.overflowX, overflowY = _getStyleComputedProp.overflowY;
    if (/(auto|scroll)/.test(overflow + overflowY + overflowX)) {
        return element;
    }
    return getScrollParent(getParentNode(element));
}
/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
    // NOTE: 1 DOM access here
    var offsetParent = element && element.offsetParent;
    var nodeName = offsetParent && offsetParent.nodeName;
    if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
        if (element) {
            return element.ownerDocument.documentElement;
        }
        return document.documentElement;
    }
    // .offsetParent will return the closest TD or TABLE in case
    // no offsetParent is present, I hate this job...
    if (['TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
        return getOffsetParent(offsetParent);
    }
    return offsetParent;
}
function isOffsetContainer(element) {
    var nodeName = element.nodeName;
    if (nodeName === 'BODY') {
        return false;
    }
    return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}
/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
    if (node.parentNode !== null) {
        return getRoot(node.parentNode);
    }
    return node;
}
/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
    // This check is needed to avoid errors in case one of the elements isn't defined for any reason
    if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
        return document.documentElement;
    }
    // Here we make sure to give as "start" the element that comes first in the DOM
    var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
    var start = order ? element1 : element2;
    var end = order ? element2 : element1;
    // Get common ancestor container
    var range = document.createRange();
    range.setStart(start, 0);
    range.setEnd(end, 0);
    var commonAncestorContainer = range.commonAncestorContainer;
    // Both nodes are inside #document
    if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
        if (isOffsetContainer(commonAncestorContainer)) {
            return commonAncestorContainer;
        }
        return getOffsetParent(commonAncestorContainer);
    }
    // one of the nodes is inside shadowDOM, find which one
    var element1root = getRoot(element1);
    if (element1root.host) {
        return findCommonOffsetParent(element1root.host, element2);
    }
    else {
        return findCommonOffsetParent(element1, getRoot(element2).host);
    }
}
/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
    var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';
    var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
    var nodeName = element.nodeName;
    if (nodeName === 'BODY' || nodeName === 'HTML') {
        var html = element.ownerDocument.documentElement;
        var scrollingElement = element.ownerDocument.scrollingElement || html;
        return scrollingElement[upperSide];
    }
    return element[upperSide];
}
/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
    var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var scrollTop = getScroll(element, 'top');
    var scrollLeft = getScroll(element, 'left');
    var modifier = subtract ? -1 : 1;
    rect.top += scrollTop * modifier;
    rect.bottom += scrollTop * modifier;
    rect.left += scrollLeft * modifier;
    rect.right += scrollLeft * modifier;
    return rect;
}
/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */
function getBordersSize(styles, axis) {
    var sideA = axis === 'x' ? 'Left' : 'Top';
    var sideB = sideA === 'Left' ? 'Right' : 'Bottom';
    return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
}
/**
 * Tells if you are running Internet Explorer 10
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean} isIE10
 */
var isIE10 = undefined;
var isIE10$1 = function () {
    if (isIE10 === undefined) {
        isIE10 = navigator.appVersion.indexOf('MSIE 10') !== -1;
    }
    return isIE10;
};
function getSize(axis, body, html, computedStyle) {
    return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE10$1() ? html['offset' + axis] + computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')] + computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')] : 0);
}
function getWindowSizes() {
    var body = document.body;
    var html = document.documentElement;
    var computedStyle = isIE10$1() && getComputedStyle(html);
    return {
        height: getSize('Height', body, html, computedStyle),
        width: getSize('Width', body, html, computedStyle)
    };
}
var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
};
var createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
                descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function (Constructor, protoProps, staticProps) {
        if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
            defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
var defineProperty = function (obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    }
    else {
        obj[key] = value;
    }
    return obj;
};
var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
    return _extends({}, offsets, {
        right: offsets.left + offsets.width,
        bottom: offsets.top + offsets.height
    });
}
/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
    var rect = {};
    // IE10 10 FIX: Please, don't ask, the element isn't
    // considered in DOM in some circumstances...
    // This isn't reproducible in IE10 compatibility mode of IE11
    try {
        if (isIE10$1()) {
            rect = element.getBoundingClientRect();
            var scrollTop = getScroll(element, 'top');
            var scrollLeft = getScroll(element, 'left');
            rect.top += scrollTop;
            rect.left += scrollLeft;
            rect.bottom += scrollTop;
            rect.right += scrollLeft;
        }
        else {
            rect = element.getBoundingClientRect();
        }
    }
    catch (e) { }
    var result = {
        left: rect.left,
        top: rect.top,
        width: rect.right - rect.left,
        height: rect.bottom - rect.top
    };
    // subtract scrollbar size from sizes
    var sizes = element.nodeName === 'HTML' ? getWindowSizes() : {};
    var width = sizes.width || element.clientWidth || result.right - result.left;
    var height = sizes.height || element.clientHeight || result.bottom - result.top;
    var horizScrollbar = element.offsetWidth - width;
    var vertScrollbar = element.offsetHeight - height;
    // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
    // we make this check conditional for performance reasons
    if (horizScrollbar || vertScrollbar) {
        var styles = getStyleComputedProperty(element);
        horizScrollbar -= getBordersSize(styles, 'x');
        vertScrollbar -= getBordersSize(styles, 'y');
        result.width -= horizScrollbar;
        result.height -= vertScrollbar;
    }
    return getClientRect(result);
}
function getOffsetRectRelativeToArbitraryNode(children, parent) {
    var fixedParent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var isIE10 = isIE10$1();
    var isHTML = parent.nodeName === 'HTML';
    var childrenRect = getBoundingClientRect(children);
    var parentRect = getBoundingClientRect(parent);
    var scrollParent = getScrollParent(children);
    var styles = getStyleComputedProperty(parent);
    var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
    var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);
    // In cases where the parent is fixed, we must ignore negative scroll in offset calc
    if (fixedParent) {
        parentRect.top = Math.max(parentRect.top, 0);
        parentRect.left = Math.max(parentRect.left, 0);
    }
    var offsets = getClientRect({
        top: childrenRect.top - parentRect.top - borderTopWidth,
        left: childrenRect.left - parentRect.left - borderLeftWidth,
        width: childrenRect.width,
        height: childrenRect.height
    });
    offsets.marginTop = 0;
    offsets.marginLeft = 0;
    // Subtract margins of documentElement in case it's being used as parent
    // we do this only on HTML because it's the only element that behaves
    // differently when margins are applied to it. The margins are included in
    // the box of the documentElement, in the other cases not.
    if (!isIE10 && isHTML) {
        var marginTop = parseFloat(styles.marginTop, 10);
        var marginLeft = parseFloat(styles.marginLeft, 10);
        offsets.top -= borderTopWidth - marginTop;
        offsets.bottom -= borderTopWidth - marginTop;
        offsets.left -= borderLeftWidth - marginLeft;
        offsets.right -= borderLeftWidth - marginLeft;
        // Attach marginTop and marginLeft because in some circumstances we may need them
        offsets.marginTop = marginTop;
        offsets.marginLeft = marginLeft;
    }
    if (isIE10 && !fixedParent ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
        offsets = includeScroll(offsets, parent);
    }
    return offsets;
}
function getViewportOffsetRectRelativeToArtbitraryNode(element) {
    var html = element.ownerDocument.documentElement;
    var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
    var width = Math.max(html.clientWidth, window.innerWidth || 0);
    var height = Math.max(html.clientHeight, window.innerHeight || 0);
    var scrollTop = getScroll(html);
    var scrollLeft = getScroll(html, 'left');
    var offset = {
        top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
        left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
        width: width,
        height: height
    };
    return getClientRect(offset);
}
/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
    var nodeName = element.nodeName;
    if (nodeName === 'BODY' || nodeName === 'HTML') {
        return false;
    }
    if (getStyleComputedProperty(element, 'position') === 'fixed') {
        return true;
    }
    return isFixed(getParentNode(element));
}
/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {HTMLElement} fixedParentRef - Force this element as the parent
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
    var fixedParent = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    // NOTE: 1 DOM access here
    var boundaries = { top: 0, left: 0 };
    var offsetParent = fixedParent ? popper.ownerDocument.documentElement : findCommonOffsetParent(popper, reference);
    // Handle viewport case
    if (boundariesElement === 'viewport') {
        boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent);
    }
    else if (boundariesElement === 'absoluteViewport') {
        var winSize = getViewportOffsetRectRelativeToArtbitraryNode(popper.ownerDocument.documentElement);
        boundaries = _extends({}, boundaries, { bottom: winSize.height, right: winSize.width });
    }
    else {
        // Handle other cases based on DOM element used as boundaries
        var boundariesNode = void 0;
        if (boundariesElement === 'scrollParent') {
            boundariesNode = getScrollParent(getParentNode(reference));
            if (boundariesNode.nodeName === 'BODY') {
                boundariesNode = popper.ownerDocument.documentElement;
            }
        }
        else if (boundariesElement === 'window') {
            boundariesNode = popper.ownerDocument.documentElement;
        }
        else {
            boundariesNode = boundariesElement;
        }
        var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedParent);
        // In case of HTML, we need a different computation
        if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
            var _getWindowSizes = getWindowSizes(), height = _getWindowSizes.height, width = _getWindowSizes.width;
            boundaries.top += offsets.top - offsets.marginTop;
            boundaries.bottom = height + offsets.top;
            boundaries.left += offsets.left - offsets.marginLeft;
            boundaries.right = width + offsets.left;
        }
        else {
            // for all the other DOM elements, this one is good
            boundaries = offsets;
        }
    }
    // Add paddings
    boundaries.left += padding;
    boundaries.top += padding;
    boundaries.right -= padding;
    boundaries.bottom -= padding;
    return boundaries;
}
function getArea(_ref) {
    var width = _ref.width, height = _ref.height;
    return width * height;
}
/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
    var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
    if (placement.indexOf('auto') === -1) {
        return placement;
    }
    var boundaries = getBoundaries(popper, reference, padding, boundariesElement);
    var rects = {
        top: {
            width: boundaries.width,
            height: refRect.top - boundaries.top
        },
        right: {
            width: boundaries.right - refRect.right,
            height: boundaries.height
        },
        bottom: {
            width: boundaries.width,
            height: boundaries.bottom - refRect.bottom
        },
        left: {
            width: refRect.left - boundaries.left,
            height: boundaries.height
        }
    };
    var sortedAreas = Object.keys(rects).map(function (key) {
        return _extends({
            key: key
        }, rects[key], {
            area: getArea(rects[key])
        });
    }).sort(function (a, b) {
        return b.area - a.area;
    });
    var filteredAreas = sortedAreas.filter(function (_ref2) {
        var width = _ref2.width, height = _ref2.height;
        return width >= popper.clientWidth && height >= popper.clientHeight;
    });
    var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;
    var variation = placement.split('-')[1];
    return computedPlacement + (variation ? '-' + variation : '');
}
/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedParent - force to calc by a specific parent, used by positionFixed mostly
 * @param {Element} ignoreParentScroll - force ignore on parents scroll, used by positionFixed mostly
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
    var fixedParent = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    var commonOffsetParent = fixedParent ? window.document.documentElement : findCommonOffsetParent(popper, reference);
    return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedParent);
}
/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
    var styles = getComputedStyle(element);
    var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
    var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
    var result = {
        width: element.offsetWidth + y,
        height: element.offsetHeight + x
    };
    return result;
}
/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
    var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
    return placement.replace(/left|right|bottom|top/g, function (matched) {
        return hash[matched];
    });
}
/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
    placement = placement.split('-')[0];
    // Get popper node sizes
    var popperRect = getOuterSizes(popper);
    // Add position, width and height to our offsets object
    var popperOffsets = {
        width: popperRect.width,
        height: popperRect.height
    };
    // depending by the popper placement we have to compute its offsets slightly differently
    var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
    var mainSide = isHoriz ? 'top' : 'left';
    var secondarySide = isHoriz ? 'left' : 'top';
    var measurement = isHoriz ? 'height' : 'width';
    var secondaryMeasurement = !isHoriz ? 'height' : 'width';
    popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
    if (placement === secondarySide) {
        popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
    }
    else {
        popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
    }
    return popperOffsets;
}
/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
    // use native find if supported
    if (Array.prototype.find) {
        return arr.find(check);
    }
    // use `filter` to obtain the same behavior of `find`
    return arr.filter(check)[0];
}
/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
    // use native findIndex if supported
    if (Array.prototype.findIndex) {
        return arr.findIndex(function (cur) {
            return cur[prop] === value;
        });
    }
    // use `find` + `indexOf` if `findIndex` isn't supported
    var match = find(arr, function (obj) {
        return obj[prop] === value;
    });
    return arr.indexOf(match);
}
/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
    var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));
    modifiersToRun.forEach(function (modifier) {
        if (modifier['function']) {
            // eslint-disable-line dot-notation
            console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
        }
        var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
        if (modifier.enabled && isFunction(fn)) {
            // Add properties to offsets to make them a complete clientRect object
            // we do this before each modifier to make sure the previous one doesn't
            // mess with these values
            data.offsets.popper = getClientRect(data.offsets.popper);
            data.offsets.reference = getClientRect(data.offsets.reference);
            data = fn(data, modifier);
        }
    });
    return data;
}
/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
    // if popper is destroyed, don't perform any further update
    if (this.state.isDestroyed) {
        return;
    }
    var data = {
        instance: this,
        styles: {},
        arrowStyles: {},
        attributes: {},
        flipped: false,
        offsets: {}
    };
    // compute reference element offsets
    data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);
    // compute auto placement, store placement inside the data object,
    // modifiers will be able to edit `placement` if needed
    // and refer to originalPlacement to know the original value
    data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);
    // store the computed placement inside `originalPlacement`
    data.originalPlacement = data.placement;
    data.positionFixed = this.options.positionFixed;
    // compute the popper offsets
    data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
    data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';
    // run the modifiers
    data = runModifiers(this.modifiers, data);
    // the first `update` will call `onCreate` callback
    // the other ones will call `onUpdate` callback
    if (!this.state.isCreated) {
        this.state.isCreated = true;
        this.options.onCreate(data);
    }
    else {
        this.options.onUpdate(data);
    }
}
/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
    return modifiers.some(function (_ref) {
        var name = _ref.name, enabled = _ref.enabled;
        return enabled && name === modifierName;
    });
}
/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
    var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
    var upperProp = property.charAt(0).toUpperCase() + property.slice(1);
    for (var i = 0; i < prefixes.length - 1; i++) {
        var prefix = prefixes[i];
        var toCheck = prefix ? '' + prefix + upperProp : property;
        if (typeof document.body.style[toCheck] !== 'undefined') {
            return toCheck;
        }
    }
    return null;
}
/**
 * Destroy the popper
 * @method
 * @memberof Popper
 */
function destroy() {
    this.state.isDestroyed = true;
    // touch DOM only if `applyStyle` modifier is enabled
    if (isModifierEnabled(this.modifiers, 'applyStyle')) {
        this.popper.removeAttribute('x-placement');
        this.popper.style.left = '';
        this.popper.style.position = '';
        this.popper.style.top = '';
        this.popper.style[getSupportedPropertyName('transform')] = '';
    }
    this.disableEventListeners();
    // remove the popper if user explicity asked for the deletion on destroy
    // do not use `remove` because IE11 doesn't support it
    if (this.options.removeOnDestroy) {
        this.popper.parentNode.removeChild(this.popper);
    }
    return this;
}
/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
    var ownerDocument = element.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView : window;
}
function attachToScrollParents(scrollParent, event, callback, scrollParents) {
    var isBody = scrollParent.nodeName === 'BODY';
    var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
    target.addEventListener(event, callback, { passive: true });
    if (!isBody) {
        attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
    }
    scrollParents.push(target);
}
/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
    // Resize event listener on window
    state.updateBound = updateBound;
    getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });
    // Scroll event listener on scroll parents
    var scrollElement = getScrollParent(reference);
    attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
    state.scrollElement = scrollElement;
    state.eventsEnabled = true;
    return state;
}
/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
    if (!this.state.eventsEnabled) {
        this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
    }
}
/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
    // Remove resize event listener on window
    getWindow(reference).removeEventListener('resize', state.updateBound);
    // Remove scroll event listener on scroll parents
    state.scrollParents.forEach(function (target) {
        target.removeEventListener('scroll', state.updateBound);
    });
    // Reset state
    state.updateBound = null;
    state.scrollParents = [];
    state.scrollElement = null;
    state.eventsEnabled = false;
    return state;
}
/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger onUpdate callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
    if (this.state.eventsEnabled) {
        cancelAnimationFrame(this.scheduleUpdate);
        this.state = removeEventListeners(this.reference, this.state);
    }
}
/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
    return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}
/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
    Object.keys(styles).forEach(function (prop) {
        var unit = '';
        // add unit if the value is numeric and is one of the following
        if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
            unit = 'px';
        }
        element.style[prop] = styles[prop] + unit;
    });
}
/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
    Object.keys(attributes).forEach(function (prop) {
        var value = attributes[prop];
        if (value !== false) {
            element.setAttribute(prop, attributes[prop]);
        }
        else {
            element.removeAttribute(prop);
        }
    });
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
    // any property present in `data.styles` will be applied to the popper,
    // in this way we can make the 3rd party modifiers add custom styles to it
    // Be aware, modifiers could override the properties defined in the previous
    // lines of this modifier!
    setStyles(data.instance.popper, data.styles);
    // any property present in `data.attributes` will be applied to the popper,
    // they will be set as HTML attributes of the element
    setAttributes(data.instance.popper, data.attributes);
    // if arrowElement is defined and arrowStyles has some properties
    if (data.arrowElement && Object.keys(data.arrowStyles).length) {
        setStyles(data.arrowElement, data.arrowStyles);
    }
    return data;
}
/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper.
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
    // compute reference element offsets
    var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed ? window.document.documentElement : undefined);
    // compute auto placement, store placement inside the data object,
    // modifiers will be able to edit `placement` if needed
    // and refer to originalPlacement to know the original value
    var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);
    popper.setAttribute('x-placement', placement);
    // Apply `position` to popper before anything else because
    // without the position applied we can't guarantee correct computations
    setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });
    return options;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
    var x = options.x, y = options.y;
    var popper = data.offsets.popper;
    // Remove this legacy support in Popper.js v2
    var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
        return modifier.name === 'applyStyle';
    }).gpuAcceleration;
    if (legacyGpuAccelerationOption !== undefined) {
        console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
    }
    var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;
    var offsetParent = getOffsetParent(data.instance.popper);
    var offsetParentRect = getBoundingClientRect(offsetParent);
    // Styles
    var styles = {
        position: popper.position
    };
    // floor sides to avoid blurry text
    var offsets = {
        left: Math.floor(popper.left),
        top: Math.floor(popper.top),
        bottom: Math.floor(popper.bottom),
        right: Math.floor(popper.right)
    };
    var sideA = x === 'bottom' ? 'top' : 'bottom';
    var sideB = y === 'right' ? 'left' : 'right';
    // if gpuAcceleration is set to `true` and transform is supported,
    //  we use `translate3d` to apply the position to the popper we
    // automatically use the supported prefixed version if needed
    var prefixedProperty = getSupportedPropertyName('transform');
    // now, let's make a step back and look at this code closely (wtf?)
    // If the content of the popper grows once it's been positioned, it
    // may happen that the popper gets misplaced because of the new content
    // overflowing its reference element
    // To avoid this problem, we provide two options (x and y), which allow
    // the consumer to define the offset origin.
    // If we position a popper on top of a reference element, we can set
    // `x` to `top` to make the popper grow towards its top instead of
    // its bottom.
    var left = void 0, top = void 0;
    if (sideA === 'bottom') {
        top = -offsetParentRect.height + offsets.bottom;
    }
    else {
        top = offsets.top;
    }
    if (sideB === 'right') {
        left = -offsetParentRect.width + offsets.right;
    }
    else {
        left = offsets.left;
    }
    if (gpuAcceleration && prefixedProperty) {
        styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
        styles[sideA] = 0;
        styles[sideB] = 0;
        styles.willChange = 'transform';
    }
    else {
        // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
        var invertTop = sideA === 'bottom' ? -1 : 1;
        var invertLeft = sideB === 'right' ? -1 : 1;
        styles[sideA] = top * invertTop;
        styles[sideB] = left * invertLeft;
        styles.willChange = sideA + ', ' + sideB;
    }
    // Attributes
    var attributes = {
        'x-placement': data.placement
    };
    // Update `data` attributes, styles and arrowStyles
    data.attributes = _extends({}, attributes, data.attributes);
    data.styles = _extends({}, styles, data.styles);
    data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);
    return data;
}
/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
    var requesting = find(modifiers, function (_ref) {
        var name = _ref.name;
        return name === requestingName;
    });
    var isRequired = !!requesting && modifiers.some(function (modifier) {
        return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
    });
    if (!isRequired) {
        var _requesting = '`' + requestingName + '`';
        var requested = '`' + requestedName + '`';
        console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
    }
    return isRequired;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
    var _data$offsets$arrow;
    // arrow depends on keepTogether in order to work
    if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
        return data;
    }
    var arrowElement = options.element;
    // if arrowElement is a string, suppose it's a CSS selector
    if (typeof arrowElement === 'string') {
        arrowElement = data.instance.popper.querySelector(arrowElement);
        // if arrowElement is not found, don't run the modifier
        if (!arrowElement) {
            return data;
        }
    }
    else {
        // if the arrowElement isn't a query selector we must check that the
        // provided DOM node is child of its popper node
        if (!data.instance.popper.contains(arrowElement)) {
            console.warn('WARNING: `arrow.element` must be child of its popper element!');
            return data;
        }
    }
    var placement = data.placement.split('-')[0];
    var _data$offsets = data.offsets, popper = _data$offsets.popper, reference = _data$offsets.reference;
    var isVertical = ['left', 'right'].indexOf(placement) !== -1;
    var len = isVertical ? 'height' : 'width';
    var sideCapitalized = isVertical ? 'Top' : 'Left';
    var side = sideCapitalized.toLowerCase();
    var altSide = isVertical ? 'left' : 'top';
    var opSide = isVertical ? 'bottom' : 'right';
    var arrowElementSize = getOuterSizes(arrowElement)[len];
    //
    // extends keepTogether behavior making sure the popper and its
    // reference have enough pixels in conjuction
    //
    // top/left side
    if (reference[opSide] - arrowElementSize < popper[side]) {
        data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
    }
    // bottom/right side
    if (reference[side] + arrowElementSize > popper[opSide]) {
        data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
    }
    data.offsets.popper = getClientRect(data.offsets.popper);
    // compute center of the popper
    var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;
    // Compute the sideValue using the updated popper offsets
    // take popper margin in account because we don't have this info available
    var css = getStyleComputedProperty(data.instance.popper);
    var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
    var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
    var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;
    // prevent arrowElement from being placed not contiguously to its popper
    sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);
    data.arrowElement = arrowElement;
    data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);
    return data;
}
/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
    if (variation === 'end') {
        return 'start';
    }
    else if (variation === 'start') {
        return 'end';
    }
    return variation;
}
/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-right` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];
// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);
/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
    var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var index = validPlacements.indexOf(placement);
    var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
    return counter ? arr.reverse() : arr;
}
var BEHAVIORS = {
    FLIP: 'flip',
    CLOCKWISE: 'clockwise',
    COUNTERCLOCKWISE: 'counterclockwise'
};
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
    // if `inner` modifier is enabled, we can't use the `flip` modifier
    if (isModifierEnabled(data.instance.modifiers, 'inner')) {
        return data;
    }
    if (data.flipped && data.placement === data.originalPlacement) {
        // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
        return data;
    }
    var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, data.positionFixed && options.boundariesElement === 'viewport' ? 'absoluteViewport' : options.boundariesElement, data.positionFixed);
    var placement = data.placement.split('-')[0];
    var placementOpposite = getOppositePlacement(placement);
    var variation = data.placement.split('-')[1] || '';
    var flipOrder = [];
    switch (options.behavior) {
        case BEHAVIORS.FLIP:
            flipOrder = [placement, placementOpposite];
            break;
        case BEHAVIORS.CLOCKWISE:
            flipOrder = clockwise(placement);
            break;
        case BEHAVIORS.COUNTERCLOCKWISE:
            flipOrder = clockwise(placement, true);
            break;
        default:
            flipOrder = options.behavior;
    }
    flipOrder.forEach(function (step, index) {
        if (placement !== step || flipOrder.length === index + 1) {
            return data;
        }
        placement = data.placement.split('-')[0];
        placementOpposite = getOppositePlacement(placement);
        var popperOffsets = data.offsets.popper;
        var refOffsets = data.offsets.reference;
        // using floor because the reference offsets may contain decimals we are not going to consider here
        var floor = Math.floor;
        var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);
        var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
        var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
        var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
        var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);
        var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;
        // flip the variation if required
        var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
        var flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);
        if (overlapsRef || overflowsBoundaries || flippedVariation) {
            // this boolean to detect any flip loop
            data.flipped = true;
            if (overlapsRef || overflowsBoundaries) {
                placement = flipOrder[index + 1];
            }
            if (flippedVariation) {
                variation = getOppositeVariation(variation);
            }
            data.placement = placement + (variation ? '-' + variation : '');
            // this object contains `position`, we want to preserve it along with
            // any additional property we may add in the future
            data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));
            data = runModifiers(data.instance.modifiers, data, 'flip');
        }
    });
    return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
    var _data$offsets = data.offsets, popper = _data$offsets.popper, reference = _data$offsets.reference;
    var placement = data.placement.split('-')[0];
    var floor = Math.floor;
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
    var side = isVertical ? 'right' : 'bottom';
    var opSide = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';
    if (popper[side] < floor(reference[opSide])) {
        data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
    }
    if (popper[opSide] > floor(reference[side])) {
        data.offsets.popper[opSide] = floor(reference[side]);
    }
    return data;
}
/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
    // separate value from unit
    var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
    var value = +split[1];
    var unit = split[2];
    // If it's not a number it's an operator, I guess
    if (!value) {
        return str;
    }
    if (unit.indexOf('%') === 0) {
        var element = void 0;
        switch (unit) {
            case '%p':
                element = popperOffsets;
                break;
            case '%':
            case '%r':
            default:
                element = referenceOffsets;
        }
        var rect = getClientRect(element);
        return rect[measurement] / 100 * value;
    }
    else if (unit === 'vh' || unit === 'vw') {
        // if is a vh or vw, we calculate the size based on the viewport
        var size = void 0;
        if (unit === 'vh') {
            size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        }
        else {
            size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        }
        return size / 100 * value;
    }
    else {
        // if is an explicit pixel unit, we get rid of the unit and keep the value
        // if is an implicit unit, it's px, and we return just the value
        return value;
    }
}
/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
    var offsets = [0, 0];
    // Use height if placement is left or right and index is 0 otherwise use width
    // in this way the first offset will use an axis and the second one
    // will use the other one
    var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;
    // Split the offset string to obtain a list of values and operands
    // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
    var fragments = offset.split(/(\+|\-)/).map(function (frag) {
        return frag.trim();
    });
    // Detect if the offset string contains a pair of values or a single one
    // they could be separated by comma or space
    var divider = fragments.indexOf(find(fragments, function (frag) {
        return frag.search(/,|\s/) !== -1;
    }));
    if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
        console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
    }
    // If divider is found, we divide the list of values and operands to divide
    // them by ofset X and Y.
    var splitRegex = /\s*,\s*|\s+/;
    var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];
    // Convert the values with units to absolute pixels to allow our computations
    ops = ops.map(function (op, index) {
        // Most of the units rely on the orientation of the popper
        var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
        var mergeWithPrevious = false;
        return op
            .reduce(function (a, b) {
            if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
                a[a.length - 1] = b;
                mergeWithPrevious = true;
                return a;
            }
            else if (mergeWithPrevious) {
                a[a.length - 1] += b;
                mergeWithPrevious = false;
                return a;
            }
            else {
                return a.concat(b);
            }
        }, [])
            .map(function (str) {
            return toValue(str, measurement, popperOffsets, referenceOffsets);
        });
    });
    // Loop trough the offsets arrays and execute the operations
    ops.forEach(function (op, index) {
        op.forEach(function (frag, index2) {
            if (isNumeric(frag)) {
                offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
            }
        });
    });
    return offsets;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
    var offset = _ref.offset;
    var placement = data.placement, _data$offsets = data.offsets, popper = _data$offsets.popper, reference = _data$offsets.reference;
    var basePlacement = placement.split('-')[0];
    var offsets = void 0;
    if (isNumeric(+offset)) {
        offsets = [+offset, 0];
    }
    else {
        offsets = parseOffset(offset, popper, reference, basePlacement);
    }
    if (basePlacement === 'left') {
        popper.top += offsets[0];
        popper.left -= offsets[1];
    }
    else if (basePlacement === 'right') {
        popper.top += offsets[0];
        popper.left += offsets[1];
    }
    else if (basePlacement === 'top') {
        popper.left += offsets[0];
        popper.top -= offsets[1];
    }
    else if (basePlacement === 'bottom') {
        popper.left += offsets[0];
        popper.top += offsets[1];
    }
    data.popper = popper;
    return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
    var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);
    // If offsetParent is the reference element, we really want to
    // go one step up and use the next offsetParent as reference to
    // avoid to make this modifier completely useless and look like broken
    if (data.instance.reference === boundariesElement) {
        boundariesElement = getOffsetParent(boundariesElement);
    }
    var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);
    options.boundaries = boundaries;
    var order = options.priority;
    var popper = data.offsets.popper;
    var check = {
        primary: function primary(placement) {
            var value = popper[placement];
            if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
                value = Math.max(popper[placement], boundaries[placement]);
            }
            return defineProperty({}, placement, value);
        },
        secondary: function secondary(placement) {
            var mainSide = placement === 'right' ? 'left' : 'top';
            var value = popper[mainSide];
            if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
                value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
            }
            return defineProperty({}, mainSide, value);
        }
    };
    order.forEach(function (placement) {
        var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
        popper = _extends({}, popper, check[side](placement));
    });
    data.offsets.popper = popper;
    return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
    var placement = data.placement;
    var basePlacement = placement.split('-')[0];
    var shiftvariation = placement.split('-')[1];
    // if shift shiftvariation is specified, run the modifier
    if (shiftvariation) {
        var _data$offsets = data.offsets, reference = _data$offsets.reference, popper = _data$offsets.popper;
        var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
        var side = isVertical ? 'left' : 'top';
        var measurement = isVertical ? 'width' : 'height';
        var shiftOffsets = {
            start: defineProperty({}, side, reference[side]),
            end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
        };
        data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
    }
    return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
    if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
        return data;
    }
    var refRect = data.offsets.reference;
    var bound = find(data.instance.modifiers, function (modifier) {
        return modifier.name === 'preventOverflow';
    }).boundaries;
    if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
        // Avoid unnecessary DOM access if visibility hasn't changed
        if (data.hide === true) {
            return data;
        }
        data.hide = true;
        data.attributes['x-out-of-boundaries'] = '';
    }
    else {
        // Avoid unnecessary DOM access if visibility hasn't changed
        if (data.hide === false) {
            return data;
        }
        data.hide = false;
        data.attributes['x-out-of-boundaries'] = false;
    }
    return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
    var placement = data.placement;
    var basePlacement = placement.split('-')[0];
    var _data$offsets = data.offsets, popper = _data$offsets.popper, reference = _data$offsets.reference;
    var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;
    var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;
    popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);
    data.placement = getOppositePlacement(placement);
    data.offsets.popper = getClientRect(popper);
    return data;
}
/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */
/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
    /**
     * Modifier used to shift the popper on the start or end of its reference
     * element.<br />
     * It will read the variation of the `placement` property.<br />
     * It can be one either `-end` or `-start`.
     * @memberof modifiers
     * @inner
     */
    shift: {
        /** @prop {number} order=100 - Index used to define the order of execution */
        order: 100,
        /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
        enabled: true,
        /** @prop {ModifierFn} */
        fn: shift
    },
    /**
     * The `offset` modifier can shift your popper on both its axis.
     *
     * It accepts the following units:
     * - `px` or unitless, interpreted as pixels
     * - `%` or `%r`, percentage relative to the length of the reference element
     * - `%p`, percentage relative to the length of the popper element
     * - `vw`, CSS viewport width unit
     * - `vh`, CSS viewport height unit
     *
     * For length is intended the main axis relative to the placement of the popper.<br />
     * This means that if the placement is `top` or `bottom`, the length will be the
     * `width`. In case of `left` or `right`, it will be the height.
     *
     * You can provide a single value (as `Number` or `String`), or a pair of values
     * as `String` divided by a comma or one (or more) white spaces.<br />
     * The latter is a deprecated method because it leads to confusion and will be
     * removed in v2.<br />
     * Additionally, it accepts additions and subtractions between different units.
     * Note that multiplications and divisions aren't supported.
     *
     * Valid examples are:
     * ```
     * 10
     * '10%'
     * '10, 10'
     * '10%, 10'
     * '10 + 10%'
     * '10 - 5vh + 3%'
     * '-10px + 5vh, 5px - 6%'
     * ```
     * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
     * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
     * > More on this [reading this issue](https://github.com/FezVrasta/popper.js/issues/373)
     *
     * @memberof modifiers
     * @inner
     */
    offset: {
        /** @prop {number} order=200 - Index used to define the order of execution */
        order: 200,
        /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
        enabled: true,
        /** @prop {ModifierFn} */
        fn: offset,
        /** @prop {Number|String} offset=0
         * The offset value as described in the modifier description
         */
        offset: 0
    },
    /**
     * Modifier used to prevent the popper from being positioned outside the boundary.
     *
     * An scenario exists where the reference itself is not within the boundaries.<br />
     * We can say it has "escaped the boundaries" — or just "escaped".<br />
     * In this case we need to decide whether the popper should either:
     *
     * - detach from the reference and remain "trapped" in the boundaries, or
     * - if it should ignore the boundary and "escape with its reference"
     *
     * When `escapeWithReference` is set to`true` and reference is completely
     * outside its boundaries, the popper will overflow (or completely leave)
     * the boundaries in order to remain attached to the edge of the reference.
     *
     * @memberof modifiers
     * @inner
     */
    preventOverflow: {
        /** @prop {number} order=300 - Index used to define the order of execution */
        order: 300,
        /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
        enabled: true,
        /** @prop {ModifierFn} */
        fn: preventOverflow,
        /**
         * @prop {Array} [priority=['left','right','top','bottom']]
         * Popper will try to prevent overflow following these priorities by default,
         * then, it could overflow on the left and on top of the `boundariesElement`
         */
        priority: ['left', 'right', 'top', 'bottom'],
        /**
         * @prop {number} padding=5
         * Amount of pixel used to define a minimum distance between the boundaries
         * and the popper this makes sure the popper has always a little padding
         * between the edges of its container
         */
        padding: 5,
        /**
         * @prop {String|HTMLElement} boundariesElement='scrollParent'
         * Boundaries used by the modifier, can be `scrollParent`, `window`,
         * `viewport` or any DOM element.
         */
        boundariesElement: 'scrollParent'
    },
    /**
     * Modifier used to make sure the reference and its popper stay near eachothers
     * without leaving any gap between the two. Expecially useful when the arrow is
     * enabled and you want to assure it to point to its reference element.
     * It cares only about the first axis, you can still have poppers with margin
     * between the popper and its reference element.
     * @memberof modifiers
     * @inner
     */
    keepTogether: {
        /** @prop {number} order=400 - Index used to define the order of execution */
        order: 400,
        /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
        enabled: true,
        /** @prop {ModifierFn} */
        fn: keepTogether
    },
    /**
     * This modifier is used to move the `arrowElement` of the popper to make
     * sure it is positioned between the reference element and its popper element.
     * It will read the outer size of the `arrowElement` node to detect how many
     * pixels of conjuction are needed.
     *
     * It has no effect if no `arrowElement` is provided.
     * @memberof modifiers
     * @inner
     */
    arrow: {
        /** @prop {number} order=500 - Index used to define the order of execution */
        order: 500,
        /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
        enabled: true,
        /** @prop {ModifierFn} */
        fn: arrow,
        /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
        element: '[x-arrow]'
    },
    /**
     * Modifier used to flip the popper's placement when it starts to overlap its
     * reference element.
     *
     * Requires the `preventOverflow` modifier before it in order to work.
     *
     * **NOTE:** this modifier will interrupt the current update cycle and will
     * restart it if it detects the need to flip the placement.
     * @memberof modifiers
     * @inner
     */
    flip: {
        /** @prop {number} order=600 - Index used to define the order of execution */
        order: 600,
        /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
        enabled: true,
        /** @prop {ModifierFn} */
        fn: flip,
        /**
         * @prop {String|Array} behavior='flip'
         * The behavior used to change the popper's placement. It can be one of
         * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
         * placements (with optional variations).
         */
        behavior: 'flip',
        /**
         * @prop {number} padding=5
         * The popper will flip if it hits the edges of the `boundariesElement`
         */
        padding: 5,
        /**
         * @prop {String|HTMLElement} boundariesElement='viewport'
         * The element which will define the boundaries of the popper position,
         * the popper will never be placed outside of the defined boundaries
         * (except if keepTogether is enabled)
         */
        boundariesElement: 'viewport'
    },
    /**
     * Modifier used to make the popper flow toward the inner of the reference element.
     * By default, when this modifier is disabled, the popper will be placed outside
     * the reference element.
     * @memberof modifiers
     * @inner
     */
    inner: {
        /** @prop {number} order=700 - Index used to define the order of execution */
        order: 700,
        /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
        enabled: false,
        /** @prop {ModifierFn} */
        fn: inner
    },
    /**
     * Modifier used to hide the popper when its reference element is outside of the
     * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
     * be used to hide with a CSS selector the popper when its reference is
     * out of boundaries.
     *
     * Requires the `preventOverflow` modifier before it in order to work.
     * @memberof modifiers
     * @inner
     */
    hide: {
        /** @prop {number} order=800 - Index used to define the order of execution */
        order: 800,
        /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
        enabled: true,
        /** @prop {ModifierFn} */
        fn: hide
    },
    /**
     * Computes the style that will be applied to the popper element to gets
     * properly positioned.
     *
     * Note that this modifier will not touch the DOM, it just prepares the styles
     * so that `applyStyle` modifier can apply it. This separation is useful
     * in case you need to replace `applyStyle` with a custom implementation.
     *
     * This modifier has `850` as `order` value to maintain backward compatibility
     * with previous versions of Popper.js. Expect the modifiers ordering method
     * to change in future major versions of the library.
     *
     * @memberof modifiers
     * @inner
     */
    computeStyle: {
        /** @prop {number} order=850 - Index used to define the order of execution */
        order: 850,
        /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
        enabled: true,
        /** @prop {ModifierFn} */
        fn: computeStyle,
        /**
         * @prop {Boolean} gpuAcceleration=true
         * If true, it uses the CSS 3d transformation to position the popper.
         * Otherwise, it will use the `top` and `left` properties.
         */
        gpuAcceleration: true,
        /**
         * @prop {string} [x='bottom']
         * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
         * Change this if your popper should grow in a direction different from `bottom`
         */
        x: 'bottom',
        /**
         * @prop {string} [x='left']
         * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
         * Change this if your popper should grow in a direction different from `right`
         */
        y: 'right'
    },
    /**
     * Applies the computed styles to the popper element.
     *
     * All the DOM manipulations are limited to this modifier. This is useful in case
     * you want to integrate Popper.js inside a framework or view library and you
     * want to delegate all the DOM manipulations to it.
     *
     * Note that if you disable this modifier, you must make sure the popper element
     * has its position set to `absolute` before Popper.js can do its work!
     *
     * Just disable this modifier and define you own to achieve the desired effect.
     *
     * @memberof modifiers
     * @inner
     */
    applyStyle: {
        /** @prop {number} order=900 - Index used to define the order of execution */
        order: 900,
        /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
        enabled: true,
        /** @prop {ModifierFn} */
        fn: applyStyle,
        /** @prop {Function} */
        onLoad: applyStyleOnLoad,
        /**
         * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
         * @prop {Boolean} gpuAcceleration=true
         * If true, it uses the CSS 3d transformation to position the popper.
         * Otherwise, it will use the `top` and `left` properties.
         */
        gpuAcceleration: undefined
    }
};
/**
 * The `dataObject` is an object containing all the informations used by Popper.js
 * this object get passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper.
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements.
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */
/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overriden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass as 3rd argument an object with the same
 * structure of this object, example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
    /**
     * Popper's placement
     * @prop {Popper.placements} placement='bottom'
     */
    placement: 'bottom',
    /**
     * Set this to true if you want popper to position it self in 'fixed' mode
     * @prop {Boolean} positionFixed=false
     */
    positionFixed: false,
    /**
     * Whether events (resize, scroll) are initially enabled
     * @prop {Boolean} eventsEnabled=true
     */
    eventsEnabled: true,
    /**
     * Set to true if you want to automatically remove the popper when
     * you call the `destroy` method.
     * @prop {Boolean} removeOnDestroy=false
     */
    removeOnDestroy: false,
    /**
     * Callback called when the popper is created.<br />
     * By default, is set to no-op.<br />
     * Access Popper.js instance with `data.instance`.
     * @prop {onCreate}
     */
    onCreate: function onCreate() { },
    /**
     * Callback called when the popper is updated, this callback is not called
     * on the initialization/creation of the popper, but only on subsequent
     * updates.<br />
     * By default, is set to no-op.<br />
     * Access Popper.js instance with `data.instance`.
     * @prop {onUpdate}
     */
    onUpdate: function onUpdate() { },
    /**
     * List of modifiers used to modify the offsets before they are applied to the popper.
     * They provide most of the functionalities of Popper.js
     * @prop {modifiers}
     */
    modifiers: modifiers
};
/**
 * @callback onCreate
 * @param {dataObject} data
 */
/**
 * @callback onUpdate
 * @param {dataObject} data
 */
// Utils
// Methods
var Popper = function () {
    /**
     * Create a new Popper.js instance
     * @class Popper
     * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
     * @param {HTMLElement} popper - The HTML element used as popper.
     * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
     * @return {Object} instance - The generated Popper.js instance
     */
    function Popper(reference, popper) {
        var _this = this;
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        classCallCheck(this, Popper);
        this.scheduleUpdate = function () {
            return requestAnimationFrame(_this.update);
        };
        // make update() debounced, so that it only runs at most once-per-tick
        this.update = debounce(this.update.bind(this));
        // with {} we create a new object with the options inside it
        this.options = _extends({}, Popper.Defaults, options);
        // init state
        this.state = {
            isDestroyed: false,
            isCreated: false,
            scrollParents: []
        };
        // get reference and popper elements (allow jQuery wrappers)
        this.reference = reference && reference.jquery ? reference[0] : reference;
        this.popper = popper && popper.jquery ? popper[0] : popper;
        // Deep merge modifiers options
        this.options.modifiers = {};
        Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
            _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
        });
        // Refactoring modifiers' list (Object => Array)
        this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
            return _extends({
                name: name
            }, _this.options.modifiers[name]);
        })
            .sort(function (a, b) {
            return a.order - b.order;
        });
        // modifiers have the ability to execute arbitrary code when Popper.js get inited
        // such code is executed in the same order of its modifier
        // they could add new properties to their options configuration
        // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
        this.modifiers.forEach(function (modifierOptions) {
            if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
                modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
            }
        });
        // fire the first update to position the popper in the right place
        this.update();
        var eventsEnabled = this.options.eventsEnabled;
        if (eventsEnabled) {
            // setup event listeners, they will take care of update the position in specific situations
            this.enableEventListeners();
        }
        this.state.eventsEnabled = eventsEnabled;
    }
    // We can't use class properties because they don't get listed in the
    // class prototype and break stuff like Sinon stubs
    createClass(Popper, [{
            key: 'update',
            value: function update$$1() {
                return update.call(this);
            }
        }, {
            key: 'destroy',
            value: function destroy$$1() {
                return destroy.call(this);
            }
        }, {
            key: 'enableEventListeners',
            value: function enableEventListeners$$1() {
                return enableEventListeners.call(this);
            }
        }, {
            key: 'disableEventListeners',
            value: function disableEventListeners$$1() {
                return disableEventListeners.call(this);
            }
            /**
             * Schedule an update, it will run on the next UI update available
             * @method scheduleUpdate
             * @memberof Popper
             */
            /**
             * Collection of utilities useful when writing custom modifiers.
             * Starting from version 1.7, this method is available only if you
             * include `popper-utils.js` before `popper.js`.
             *
             * **DEPRECATION**: This way to access PopperUtils is deprecated
             * and will be removed in v2! Use the PopperUtils module directly instead.
             * Due to the high instability of the methods contained in Utils, we can't
             * guarantee them to follow semver. Use them at your own risk!
             * @static
             * @private
             * @type {Object}
             * @deprecated since version 1.8
             * @member Utils
             * @memberof Popper
             */
        }]);
    return Popper;
}();
/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */
Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;
var Triggers = /** @class */ (function () {
    function Triggers() {
    }
    return Triggers;
}());
Triggers.CLICK = 'click';
Triggers.HOVER = 'hover';
Triggers.MOUSEDOWN = 'mousedown';
Triggers.NONE = 'none';
var Placements = /** @class */ (function () {
    function Placements() {
    }
    return Placements;
}());
Placements.Top = 'top';
Placements.Bottom = 'bottom';
Placements.Left = 'left';
Placements.Right = 'right';
Placements.TopStart = 'top-start';
Placements.BottomStart = 'bottom-start';
Placements.LeftStart = 'left-start';
Placements.RightStart = 'right-start';
Placements.TopEnd = 'top-end';
Placements.BottomEnd = 'bottom-end';
Placements.LeftEnd = 'left-end';
Placements.RightEnd = 'right-end';
Placements.Auto = 'auto';
Placements.AutoTop = 'auto-top';
Placements.AutoBottom = 'auto-bottom';
Placements.AutoLeft = 'auto-left';
Placements.AutoRight = 'auto-right';
var PopperContent = /** @class */ (function () {
    /**
     * @param {?} renderer
     */
    function PopperContent(renderer) {
        this.renderer = renderer;
        this.popperOptions = ({
            disableAnimation: false,
            disableDefaultStyling: false,
            placement: Placements.Auto,
            boundariesElement: '',
            trigger: Triggers.HOVER,
            positionFixed: false,
            popperModifiers: {}
        });
        this.isMouseOver = false;
        this.onHidden = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.displayType = "none";
        this.opacity = 0;
    }
    /**
     * @return {?}
     */
    PopperContent.prototype.onMouseOver = function () {
        this.isMouseOver = true;
    };
    /**
     * @return {?}
     */
    PopperContent.prototype.showOnLeave = function () {
        this.isMouseOver = false;
        if (this.popperOptions.trigger !== Triggers.HOVER) {
            return;
        }
        this.hide();
    };
    /**
     * @return {?}
     */
    PopperContent.prototype.onDocumentResize = function () {
        this.update();
    };
    /**
     * @return {?}
     */
    PopperContent.prototype.ngOnDestroy = function () {
        if (!this.popperInstance) {
            return;
        }
        ((this.popperInstance)).disableEventListeners();
        this.popperInstance.destroy();
    };
    /**
     * @return {?}
     */
    PopperContent.prototype.show = function () {
        if (!this.referenceObject) {
            return;
        }
        var /** @type {?} */ popperOptions = ({
            placement: this.popperOptions.placement,
            positionFixed: this.popperOptions.positionFixed,
            modifiers: {
                arrow: {
                    element: this.popperViewRef.nativeElement.querySelector('.ngxp__arrow')
                }
            }
        });
        var /** @type {?} */ boundariesElement = this.popperOptions.boundariesElement && document.querySelector(this.popperOptions.boundariesElement);
        if (popperOptions.modifiers && boundariesElement) {
            popperOptions.modifiers.preventOverflow = { boundariesElement: boundariesElement };
        }
        popperOptions.modifiers = Object.assign(popperOptions.modifiers, this.popperOptions.popperModifiers);
        this.popperInstance = new Popper(this.referenceObject, this.popperViewRef.nativeElement, popperOptions);
        ((this.popperInstance)).enableEventListeners();
        this.scheduleUpdate();
        this.toggleVisibility(true);
        this.globalResize = this.renderer.listen('document', 'resize', this.onDocumentResize.bind(this));
    };
    /**
     * @return {?}
     */
    PopperContent.prototype.update = function () {
        this.popperInstance && ((this.popperInstance)).update();
    };
    /**
     * @return {?}
     */
    PopperContent.prototype.scheduleUpdate = function () {
        this.popperInstance && ((this.popperInstance)).scheduleUpdate();
    };
    /**
     * @return {?}
     */
    PopperContent.prototype.hide = function () {
        if (this.popperInstance) {
            this.popperInstance.destroy();
        }
        this.toggleVisibility(false);
        this.onHidden.emit();
    };
    /**
     * @param {?} state
     * @return {?}
     */
    PopperContent.prototype.toggleVisibility = function (state) {
        if (!state) {
            this.opacity = 0;
            this.displayType = "none";
        }
        else {
            this.opacity = 1;
            this.displayType = "block";
        }
    };
    /**
     * @return {?}
     */
    PopperContent.prototype.clearGlobalResize = function () {
        this.globalResize && typeof this.globalResize === 'function' && this.globalResize();
    };
    return PopperContent;
}());
PopperContent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: "popper-content",
                template: "\n<div #popperViewRef \n     [class.ngxp__container]=\"!popperOptions.disableDefaultStyling\"  \n     [class.ngxp__animation]=\"!popperOptions.disableAnimation\"\n     [style.display]=\"displayType\"\n     [style.opacity]=\"opacity\"\n     role=\"popper\">        \n      <div class=\"ngxp__inner\"><ng-content ></ng-content>  {{ text }} </div>\n      <div class=\"ngxp__arrow\"></div>  \n    \n</div>\n",
                styles: ["\n.ngxp__container {\n  display:none;\n  position: absolute;    \n  border-radius: 3px;\n  border: 1px solid grey;\n  box-shadow: 0 0 2px rgba(0,0,0,0.5);  \n  padding: 10px;\n}\n.ngxp__container.ngxp__animation {\n   -webkit-animation: ngxp-fadeIn  150ms ease-out;\n    -moz-animation: ngxp-fadeIn  150ms ease-out;\n    -o-animation: ngxp-fadeIn  150ms ease-out;\n    animation: ngxp-fadeIn  150ms ease-out;\n  \n}\n.ngxp__container .ngxp__arrow {\n  width: 0;\n  height: 0;\n  border-style: solid;\n  position: absolute;\n  margin: 5px;\n}\n\n.ngxp__container[x-placement^=\"top\"],\n.ngxp__container[x-placement^=\"bottom\"],\n.ngxp__container[x-placement^=\"right\"],\n.ngxp__container[x-placement^=\"left\"]\n{\n  display:block;\n}\n.ngxp__container[x-placement^=\"top\"] {\n  margin-bottom: 5px;\n}\n.ngxp__container[x-placement^=\"top\"] .ngxp__arrow {\n  border-width: 5px 5px 0 5px;\n  border-color: grey transparent transparent transparent;\n  bottom: -5px;\n  left: calc(50% - 5px);\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.ngxp__container[x-placement^=\"bottom\"] {\n  margin-top: 5px;\n}\n.ngxp__container[x-placement^=\"bottom\"] .ngxp__arrow {\n  border-width: 0 5px 5px 5px;\n  border-color: transparent transparent grey transparent;\n  top: -5px;\n  left: calc(50% - 5px);\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.ngxp__container[x-placement^=\"right\"] {\n  margin-left: 5px;\n}\n.ngxp__container[x-placement^=\"right\"] .ngxp__arrow {\n  border-width: 5px 5px 5px 0;\n  border-color: transparent grey transparent transparent;\n  left: -5px;\n  top: calc(50% - 5px);\n  margin-left: 0;\n  margin-right: 0;\n}\n.ngxp__container[x-placement^=\"left\"] {\n  margin-right: 5px;\n}\n.ngxp__container[x-placement^=\"left\"] .ngxp__arrow {\n  border-width: 5px 0 5px 5px;\n  border-color: transparent transparent transparent grey;\n  right: -5px;\n  top: calc(50% - 5px);\n  margin-left: 0;\n  margin-right: 0;\n}\n@-webkit-keyframes ngxp-fadeIn { \n 0% {\n        display: none;\n        opacity: 0;\n    }\n\n    1% {\n        display: block;\n        opacity: 0;\n    }\n\n    100% {\n        display: block;\n        opacity: 1;\n    }\n}\n\n@keyframes ngxp-fadeIn {\n  0% {\n        display: none;\n        opacity: 0;\n    }\n\n    1% {\n        display: block;\n        opacity: 0;\n    }\n\n    100% {\n        display: block;\n        opacity: 1;\n    }\n}\n"]
            },] },
];
/**
 * @nocollapse
 */
PopperContent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Renderer2 */], },
]; };
PopperContent.propDecorators = {
    'popperViewRef': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */], args: ["popperViewRef",] },],
    'onMouseOver': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */], args: ['mouseover',] },],
    'showOnLeave': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */], args: ['mouseleave',] },],
};
var PopperController = /** @class */ (function () {
    /**
     * @param {?} viewContainerRef
     * @param {?} changeDetectorRef
     * @param {?} resolver
     * @param {?} renderer
     * @param {?=} popperDefaults
     */
    function PopperController(viewContainerRef, changeDetectorRef, resolver, renderer, popperDefaults) {
        if (popperDefaults === void 0) { popperDefaults = {}; }
        this.viewContainerRef = viewContainerRef;
        this.changeDetectorRef = changeDetectorRef;
        this.resolver = resolver;
        this.renderer = renderer;
        this.popperDefaults = popperDefaults;
        this.popperContentClass = PopperContent;
        this.shown = false;
        this.subscriptions = [];
        this.showDelay = 0;
        this.hideTimeout = 0;
        this.timeoutAfterShow = 0;
        this.popperOnShown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.popperOnHidden = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        PopperController.baseOptions = Object.assign({}, PopperController.baseOptions, this.popperDefaults);
    }
    /**
     * @return {?}
     */
    PopperController.prototype.showOrHideOnClick = function () {
        if (this.disabled || this.showTrigger !== Triggers.CLICK) {
            return;
        }
        this.toggle();
    };
    /**
     * @return {?}
     */
    PopperController.prototype.showOrHideOnMouseOver = function () {
        if (this.disabled || this.showTrigger !== Triggers.MOUSEDOWN) {
            return;
        }
        this.toggle();
    };
    /**
     * @return {?}
     */
    PopperController.prototype.showOnHover = function () {
        if (this.disabled || this.showTrigger !== Triggers.HOVER) {
            return;
        }
        this.scheduledShow();
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    PopperController.prototype.hideOnClickOutsideHandler = function ($event) {
        if (this.disabled || !this.hideOnClickOutside) {
            return;
        }
        this.scheduledHide($event, this.hideTimeout);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    PopperController.prototype.hideOnScrollHandler = function ($event) {
        if (this.disabled || !this.hideOnScroll) {
            return;
        }
        this.scheduledHide($event, this.hideTimeout);
    };
    /**
     * @return {?}
     */
    PopperController.prototype.hideOnLeave = function () {
        if (this.disabled || this.showTrigger !== Triggers.HOVER) {
            return;
        }
        this.scheduledHide(null, this.hideTimeout);
    };
    /**
     * @param {?} target
     * @param {...?} sources
     * @return {?}
     */
    PopperController.assignDefined = function (target) {
        var sources = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            sources[_i - 1] = arguments[_i];
        }
        for (var _a = 0, sources_1 = sources; _a < sources_1.length; _a++) {
            var source = sources_1[_a];
            for (var _b = 0, _c = Object.keys(source); _b < _c.length; _b++) {
                var key = _c[_b];
                var /** @type {?} */ val = source[key];
                if (val !== undefined) {
                    target[key] = val;
                }
            }
        }
        return target;
    };
    /**
     * @return {?}
     */
    PopperController.prototype.ngOnInit = function () {
        //Support legacy prop
        this.hideOnClickOutside = typeof this.hideOnClickOutside === 'undefined' ?
            this.closeOnClickOutside : this.hideOnClickOutside;
        if (typeof this.content === 'string') {
            var /** @type {?} */ text = this.content;
            this.content = this.constructContent();
            this.content.text = text;
        }
        var /** @type {?} */ popperRef = (this.content);
        popperRef.referenceObject = this.getRefElement();
        this.setContentProperties(popperRef);
        this.setDefaults();
        if (this.showOnStart) {
            this.scheduledShow();
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    PopperController.prototype.ngOnChanges = function (changes) {
        if (changes['popperDisabled']) {
            if (changes['popperDisabled'].currentValue) {
                this.hide();
            }
        }
    };
    /**
     * @return {?}
     */
    PopperController.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sub) { return sub.unsubscribe && sub.unsubscribe(); });
        this.subscriptions.length = 0;
        this.clearEventListeners();
    };
    /**
     * @return {?}
     */
    PopperController.prototype.toggle = function () {
        this.shown ? this.scheduledHide(null, this.hideTimeout) : this.scheduledShow();
    };
    /**
     * @return {?}
     */
    PopperController.prototype.show = function () {
        if (this.shown) {
            this.overrideHideTimeout();
            return;
        }
        this.shown = true;
        var /** @type {?} */ popperRef = (this.content);
        var /** @type {?} */ element = this.getRefElement();
        if (popperRef.referenceObject !== element) {
            popperRef.referenceObject = element;
        }
        this.setContentProperties(popperRef);
        popperRef.show();
        this.popperOnShown.emit(this);
        if (this.timeoutAfterShow > 0) {
            this.scheduledHide(null, this.timeoutAfterShow);
        }
        this.globalClick = this.renderer.listen('document', 'click', this.hideOnClickOutsideHandler.bind(this));
        this.globalScroll = this.renderer.listen(this.getScrollParent(this.getRefElement()), 'scroll', this.hideOnScrollHandler.bind(this));
    };
    /**
     * @return {?}
     */
    PopperController.prototype.hide = function () {
        if (!this.shown) {
            this.overrideShowTimeout();
            return;
        }
        this.shown = false;
        if (this.popperContentRef) {
            this.popperContentRef.instance.hide();
        }
        else {
            ((this.content)).hide();
        }
        this.popperOnHidden.emit(this);
        this.clearEventListeners();
    };
    /**
     * @param {?=} delay
     * @return {?}
     */
    PopperController.prototype.scheduledShow = function (delay) {
        var _this = this;
        if (delay === void 0) { delay = this.showDelay; }
        this.overrideHideTimeout();
        this.scheduledShowTimeout = setTimeout(function () {
            _this.show();
            _this.applyChanges();
        }, delay);
    };
    /**
     * @param {?=} $event
     * @param {?=} delay
     * @return {?}
     */
    PopperController.prototype.scheduledHide = function ($event, delay) {
        var _this = this;
        if ($event === void 0) { $event = null; }
        if (delay === void 0) { delay = 0; }
        this.overrideShowTimeout();
        this.scheduledHideTimeout = setTimeout(function () {
            var /** @type {?} */ toElement = $event ? $event.toElement : null;
            var /** @type {?} */ popperContentView = ((_this.content)).popperViewRef ? ((_this.content)).popperViewRef.nativeElement : false;
            if (!popperContentView || popperContentView === toElement || popperContentView.contains(toElement) || ((_this.content)).isMouseOver) {
                return;
            }
            _this.hide();
            _this.applyChanges();
        }, delay);
    };
    /**
     * @return {?}
     */
    PopperController.prototype.getRefElement = function () {
        return this.targetElement || this.viewContainerRef.element.nativeElement;
    };
    /**
     * @return {?}
     */
    PopperController.prototype.applyChanges = function () {
        this.changeDetectorRef.markForCheck();
        if (this.forceDetection) {
            this.changeDetectorRef.detectChanges();
        }
    };
    /**
     * @return {?}
     */
    PopperController.prototype.setDefaults = function () {
        this.showTrigger = typeof this.showTrigger === 'undefined' ? PopperController.baseOptions.trigger : this.showTrigger;
        this.hideOnClickOutside = typeof this.hideOnClickOutside === 'undefined' ? PopperController.baseOptions.hideOnClickOutside : this.hideOnClickOutside;
        this.hideOnScroll = typeof this.hideOnScroll === 'undefined' ? PopperController.baseOptions.hideOnScroll : this.hideOnScroll;
    };
    /**
     * @return {?}
     */
    PopperController.prototype.clearEventListeners = function () {
        this.globalClick && typeof this.globalClick === 'function' && this.globalClick();
        this.globalScroll && typeof this.globalScroll === 'function' && this.globalScroll();
    };
    /**
     * @return {?}
     */
    PopperController.prototype.overrideShowTimeout = function () {
        if (this.scheduledShowTimeout) {
            clearTimeout(this.scheduledShowTimeout);
            this.scheduledHideTimeout = 0;
        }
    };
    /**
     * @return {?}
     */
    PopperController.prototype.overrideHideTimeout = function () {
        if (this.scheduledHideTimeout) {
            clearTimeout(this.scheduledHideTimeout);
            this.scheduledHideTimeout = 0;
        }
    };
    /**
     * @return {?}
     */
    PopperController.prototype.constructContent = function () {
        var /** @type {?} */ factory = this.resolver.resolveComponentFactory(this.popperContentClass);
        this.popperContentRef = this.viewContainerRef.createComponent(factory);
        return /** @type {?} */ (this.popperContentRef.instance);
    };
    /**
     * @param {?} popperRef
     * @return {?}
     */
    PopperController.prototype.setContentProperties = function (popperRef) {
        popperRef.popperOptions = PopperController.assignDefined(popperRef.popperOptions, PopperController.baseOptions, {
            disableAnimation: this.disableAnimation,
            disableDefaultStyling: this.disableStyle,
            placement: this.placement,
            boundariesElement: this.boundariesElement,
            trigger: this.showTrigger,
            positionFixed: this.positionFixed,
            popperModifiers: this.popperModifiers,
        });
        this.subscriptions.push(popperRef.onHidden.subscribe(this.hide.bind(this)));
    };
    /**
     * @param {?} node
     * @return {?}
     */
    PopperController.prototype.getScrollParent = function (node) {
        var /** @type {?} */ isElement = node instanceof HTMLElement;
        var /** @type {?} */ overflowY = isElement && window.getComputedStyle(node).overflowY;
        var /** @type {?} */ isScrollable = overflowY !== 'visible' && overflowY !== 'hidden';
        if (!node) {
            return null;
        }
        else if (isScrollable && node.scrollHeight >= node.clientHeight) {
            return node;
        }
        return this.getScrollParent(node.parentNode) || document;
    };
    return PopperController;
}());
PopperController.baseOptions = ({
    placement: Placements.Auto,
    hideOnClickOutside: true,
    hideOnScroll: false,
    showTrigger: Triggers.HOVER
});
PopperController.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{
                selector: '[popper]',
                exportAs: 'popper'
            },] },
];
/**
 * @nocollapse
 */
PopperController.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewContainerRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ComponentFactoryResolver */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Renderer2 */], },
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */], args: ['popperDefaults',] },] },
]; };
PopperController.propDecorators = {
    'content': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */], args: ['popper',] },],
    'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */], args: ['popperDisabled',] },],
    'placement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */], args: ['popperPlacement',] },],
    'showTrigger': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */], args: ['popperTrigger',] },],
    'targetElement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */], args: ['popperTarget',] },],
    'showDelay': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */], args: ['popperDelay',] },],
    'hideTimeout': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */], args: ['popperTimeout',] },],
    'timeoutAfterShow': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */], args: ['popperTimeoutAfterShow',] },],
    'boundariesElement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */], args: ['popperBoundaries',] },],
    'showOnStart': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */], args: ['popperShowOnStart',] },],
    'closeOnClickOutside': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */], args: ['popperCloseOnClickOutside',] },],
    'hideOnClickOutside': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */], args: ['popperHideOnClickOutside',] },],
    'hideOnScroll': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */], args: ['popperHideOnScroll',] },],
    'positionFixed': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */], args: ['popperPositionFixed',] },],
    'popperModifiers': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */], args: ['popperModifiers',] },],
    'disableStyle': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */], args: ['popperDisableStyle',] },],
    'disableAnimation': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */], args: ['popperDisableAnimation',] },],
    'forceDetection': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */], args: ['popperForceDetection',] },],
    'popperOnShown': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
    'popperOnHidden': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
    'showOrHideOnClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */], args: ['touchstart',] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */], args: ['click',] },],
    'showOrHideOnMouseOver': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */], args: ['touchstart',] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */], args: ['mousedown',] },],
    'showOnHover': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */], args: ['mouseenter',] },],
    'hideOnLeave': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */], args: ['touchend',] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */], args: ['touchcancel',] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */], args: ['mouseleave',] },],
};
var NgxPopperModule = /** @class */ (function () {
    function NgxPopperModule() {
    }
    /**
     * @return {?}
     */
    NgxPopperModule.prototype.ngDoBootstrap = function () {
    };
    /**
     * @param {?=} popperBaseOptions
     * @return {?}
     */
    NgxPopperModule.forRoot = function (popperBaseOptions) {
        if (popperBaseOptions === void 0) { popperBaseOptions = {}; }
        return { ngModule: NgxPopperModule, providers: [{ provide: 'popperDefaults', useValue: popperBaseOptions }] };
    };
    return NgxPopperModule;
}());
NgxPopperModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */], args: [{
                imports: [
                    __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
                ],
                declarations: [
                    PopperController,
                    PopperContent
                ],
                exports: [
                    PopperController,
                    PopperContent
                ],
                entryComponents: [
                    PopperContent
                ],
                providers: [
                    {
                        provide: 'popperDefaults', useValue: {}
                    }
                ]
            },] },
];
/**
 * @nocollapse
 */
NgxPopperModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=ngx-popper.es5.js.map

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../../../../webpack/buildin/global.js")))

/***/ })

});
//# sourceMappingURL=ngx-popper.module.chunk.js.map