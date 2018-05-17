(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["console-console-module"],{

/***/ "./dist/ngx-tour-console/fesm5/ngx-tour-console.js":
/*!*********************************************************!*\
  !*** ./dist/ngx-tour-console/fesm5/ngx-tour-console.js ***!
  \*********************************************************/
/*! exports provided: TourModule, TourService, TourState, TourHotkeyListenerComponent, TourConsoleModule, TourAnchorConsoleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TourConsoleModule", function() { return TourConsoleModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TourAnchorConsoleDirective", function() { return TourAnchorConsoleDirective; });
/* harmony import */ var ngx_tour_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-tour-core */ "./dist/ngx-tour-core/fesm5/ngx-tour-core.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TourModule", function() { return ngx_tour_core__WEBPACK_IMPORTED_MODULE_0__["TourModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TourService", function() { return ngx_tour_core__WEBPACK_IMPORTED_MODULE_0__["TourService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TourState", function() { return ngx_tour_core__WEBPACK_IMPORTED_MODULE_0__["TourState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TourHotkeyListenerComponent", function() { return ngx_tour_core__WEBPACK_IMPORTED_MODULE_0__["TourHotkeyListenerComponent"]; });

/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");







/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TourAnchorConsoleDirective = /** @class */ (function () {
    function TourAnchorConsoleDirective(tourService) {
        this.tourService = tourService;
    }
    /**
     * @return {?}
     */
    TourAnchorConsoleDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.tourService.register(this.tourAnchor, this);
    };
    /**
     * @return {?}
     */
    TourAnchorConsoleDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.tourService.unregister(this.tourAnchor);
    };
    /**
     * @param {?} step
     * @return {?}
     */
    TourAnchorConsoleDirective.prototype.showTourStep = /**
     * @param {?} step
     * @return {?}
     */
    function (step) {
        console.group(step.title);
        console.log(step.content);
        console.log((step.placement || 'above') + " " + this.tourAnchor);
        console.groupEnd();
    };
    /**
     * @return {?}
     */
    TourAnchorConsoleDirective.prototype.hideTourStep = /**
     * @return {?}
     */
    function () {
        return;
    };
    TourAnchorConsoleDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[tourAnchor]',
                },] },
    ];
    /** @nocollapse */
    TourAnchorConsoleDirective.ctorParameters = function () { return [
        { type: ngx_tour_core__WEBPACK_IMPORTED_MODULE_0__["TourService"], },
    ]; };
    TourAnchorConsoleDirective.propDecorators = {
        "tourAnchor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    };
    return TourAnchorConsoleDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TourConsoleModule = /** @class */ (function () {
    function TourConsoleModule() {
    }
    /**
     * @return {?}
     */
    TourConsoleModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: TourConsoleModule,
            providers: Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__spread"])(ngx_tour_core__WEBPACK_IMPORTED_MODULE_0__["TourModule"].forRoot().providers),
        };
    };
    TourConsoleModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    declarations: [TourAnchorConsoleDirective],
                    exports: [TourAnchorConsoleDirective, ngx_tour_core__WEBPACK_IMPORTED_MODULE_0__["TourHotkeyListenerComponent"]],
                    imports: [ngx_tour_core__WEBPACK_IMPORTED_MODULE_0__["TourModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbPopoverModule"].forRoot()],
                },] },
    ];
    return TourConsoleModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRvdXItY29uc29sZS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LXRvdXItY29uc29sZS9saWIvdG91ci1hbmNob3IuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtdG91ci1jb25zb2xlL2xpYi9jb25zb2xlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUb3VyQW5jaG9yRGlyZWN0aXZlLCBUb3VyU2VydmljZSwgSVN0ZXBPcHRpb24gfSBmcm9tICduZ3gtdG91ci1jb3JlJztcbmltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0b3VyQW5jaG9yXScsXG59KVxuZXhwb3J0IGNsYXNzIFRvdXJBbmNob3JDb25zb2xlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIFRvdXJBbmNob3JEaXJlY3RpdmUge1xuICBASW5wdXQoKSBwdWJsaWMgdG91ckFuY2hvcjogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdG91clNlcnZpY2U6IFRvdXJTZXJ2aWNlKSB7fVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnRvdXJTZXJ2aWNlLnJlZ2lzdGVyKHRoaXMudG91ckFuY2hvciwgdGhpcyk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy50b3VyU2VydmljZS51bnJlZ2lzdGVyKHRoaXMudG91ckFuY2hvcik7XG4gIH1cblxuICBwdWJsaWMgc2hvd1RvdXJTdGVwKHN0ZXA6IElTdGVwT3B0aW9uKTogdm9pZCB7XG4gICAgY29uc29sZS5ncm91cChzdGVwLnRpdGxlKTtcbiAgICBjb25zb2xlLmxvZyhzdGVwLmNvbnRlbnQpO1xuICAgIGNvbnNvbGUubG9nKGAke3N0ZXAucGxhY2VtZW50IHx8ICdhYm92ZSd9ICR7dGhpcy50b3VyQW5jaG9yfWApO1xuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcbiAgfVxuXG4gIHB1YmxpYyBoaWRlVG91clN0ZXAoKTogdm9pZCB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nYlBvcG92ZXJNb2R1bGUgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBUb3VySG90a2V5TGlzdGVuZXJDb21wb25lbnQsIFRvdXJNb2R1bGUsIFRvdXJTZXJ2aWNlIH0gZnJvbSAnbmd4LXRvdXItY29yZSc7XG5cbmltcG9ydCB7IFRvdXJBbmNob3JDb25zb2xlRGlyZWN0aXZlIH0gZnJvbSAnLi90b3VyLWFuY2hvci5kaXJlY3RpdmUnO1xuXG5leHBvcnQgeyBUb3VyQW5jaG9yQ29uc29sZURpcmVjdGl2ZSwgVG91clNlcnZpY2UgfTtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbVG91ckFuY2hvckNvbnNvbGVEaXJlY3RpdmVdLFxuICBleHBvcnRzOiBbVG91ckFuY2hvckNvbnNvbGVEaXJlY3RpdmUsIFRvdXJIb3RrZXlMaXN0ZW5lckNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtUb3VyTW9kdWxlLCBDb21tb25Nb2R1bGUsIE5nYlBvcG92ZXJNb2R1bGUuZm9yUm9vdCgpXSxcbn0pXG5leHBvcnQgY2xhc3MgVG91ckNvbnNvbGVNb2R1bGUge1xuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBUb3VyQ29uc29sZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAuLi5Ub3VyTW9kdWxlLmZvclJvb3QoKS5wcm92aWRlcnMsXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0lBU0Usb0NBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0tBQUk7Ozs7SUFFekMsNkNBQVE7Ozs7UUFDYixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDOzs7OztJQUc1QyxnREFBVzs7OztRQUNoQixJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7Ozs7OztJQUd4QyxpREFBWTs7OztjQUFDLElBQWlCO1FBQ25DLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLE9BQU8sVUFBSSxJQUFJLENBQUMsVUFBWSxDQUFDLENBQUM7UUFDL0QsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDOzs7OztJQUdkLGlEQUFZOzs7O1FBQ2pCLE9BQU87OztnQkF4QlYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO2lCQUN6Qjs7OztnQkFMNkIsV0FBVzs7OytCQU90QyxLQUFLOztxQ0FQUjs7Ozs7Ozs7Ozs7OztJQ2VnQix5QkFBTzs7OztRQUNuQixPQUFPO1lBQ0wsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixTQUFTLFdBQ0osVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FDbEM7U0FDRixDQUFDOzs7Z0JBWkwsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLDBCQUEwQixDQUFDO29CQUMxQyxPQUFPLEVBQUUsQ0FBQywwQkFBMEIsRUFBRSwyQkFBMkIsQ0FBQztvQkFDbEUsT0FBTyxFQUFFLENBQUMsVUFBVSxFQUFFLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztpQkFDaEU7OzRCQWJEOzs7Ozs7Ozs7Ozs7Ozs7In0=

/***/ }),

/***/ "./src/app/console/console.component.html":
/*!************************************************!*\
  !*** ./src/app/console/console.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a href=\"https://github.com/isaacplmann/ng2-tour\" class=\"btn btn-default\">View on GitHub</a>\n<a style=\"cursor: pointer\" (click)=\"tourService.toggle()\" class=\"btn btn-primary\" tourAnchor=\"start.tour\">Start Demo Tour</a>\n<a style=\"cursor: pointer\" (click)=\"tourService.prev()\" class=\"btn btn-default\">Prev</a>\n<a style=\"cursor: pointer\" (click)=\"tourService.next()\" class=\"btn btn-default\">Next</a>\n\n<router-outlet></router-outlet>\n<tour-hotkey-listener></tour-hotkey-listener>\n"

/***/ }),

/***/ "./src/app/console/console.component.ts":
/*!**********************************************!*\
  !*** ./src/app/console/console.component.ts ***!
  \**********************************************/
/*! exports provided: ConsoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsoleComponent", function() { return ConsoleComponent; });
/* harmony import */ var ngx_tour_console__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-tour-console */ "./dist/ngx-tour-console/fesm5/ngx-tour-console.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConsoleComponent = /** @class */ (function () {
    function ConsoleComponent(tourService) {
        this.tourService = tourService;
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
                route: 'console/other',
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
            route: 'console',
        });
        this.tourService.start();
    }
    ConsoleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'console-route',
            template: __webpack_require__(/*! ./console.component.html */ "./src/app/console/console.component.html"),
        }),
        __metadata("design:paramtypes", [ngx_tour_console__WEBPACK_IMPORTED_MODULE_0__["TourService"]])
    ], ConsoleComponent);
    return ConsoleComponent;
}());



/***/ }),

/***/ "./src/app/console/console.module.ts":
/*!*******************************************!*\
  !*** ./src/app/console/console.module.ts ***!
  \*******************************************/
/*! exports provided: ConsoleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsoleModule", function() { return ConsoleModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_tour_console__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-tour-console */ "./dist/ngx-tour-console/fesm5/ngx-tour-console.js");
/* harmony import */ var _console_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./console.component */ "./src/app/console/console.component.ts");
/* harmony import */ var _docs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./docs.component */ "./src/app/console/docs.component.ts");
/* harmony import */ var _other_route_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./other-route.component */ "./src/app/console/other-route.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ConsoleModule = /** @class */ (function () {
    function ConsoleModule() {
    }
    ConsoleModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_console_component__WEBPACK_IMPORTED_MODULE_4__["ConsoleComponent"], _docs_component__WEBPACK_IMPORTED_MODULE_5__["DocsComponent"], _other_route_component__WEBPACK_IMPORTED_MODULE_6__["OtherRouteComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
                        component: _console_component__WEBPACK_IMPORTED_MODULE_4__["ConsoleComponent"],
                        path: '',
                        children: [{
                                component: _docs_component__WEBPACK_IMPORTED_MODULE_5__["DocsComponent"],
                                path: '',
                            }, {
                                component: _other_route_component__WEBPACK_IMPORTED_MODULE_6__["OtherRouteComponent"],
                                path: 'other',
                            }]
                    }]),
                ngx_tour_console__WEBPACK_IMPORTED_MODULE_3__["TourConsoleModule"].forRoot(),
            ],
        })
    ], ConsoleModule);
    return ConsoleModule;
}());



/***/ }),

/***/ "./src/app/console/docs.component.html":
/*!*********************************************!*\
  !*** ./src/app/console/docs.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>About</h2>\n<p>This is a product tour library built with Angular (2+). It's inspired by\n  <a tourAnchor=\"angular-ui-tour\" href=\"http://benmarch.github.io/angular-ui-tour\">angular-ui-tour</a>.</p>\n<p>\n  <code>TourConsoleModule</code> is a minimal implementation of the tour ui that uses only the browser's console to display tour steps.</p>\n\n<h2 tourAnchor=\"installation\">Installation</h2>\n<ol>\n  <li>\n    <code>npm install ngx-tour-core ngx-tour-console</code>\n  </li>\n  <li>import\n    <code>TourConsoleModule.forRoot()</code> into your app module</li>\n</ol>\n\n<h2 tourAnchor=\"usage\">Usage</h2>\n<ol>\n  <li>\n    Define anchor points for the tour steps by adding the\n    <code>tourAnchor</code> directive throughout your app.\n    <pre><code>&lt;div tourAnchor=\"some.anchor.id\"&gt;...&lt;/div&gt;</code></pre>\n  </li>\n  <li>\n    Define your tour steps using\n    <code>tourService.initialize(steps)</code>\n    <pre>\nthis.tourService.initialize([{{ '{' }}\n  anchorId: 'some.anchor.id',\n  content: 'Some content',\n  title: 'First',\n}, {{ '{' }}\n  anchorId: 'another.anchor.id',\n  content: 'Other content',\n  title: 'Second',\n}]);</pre>\n  </li>\n  <li>Start the tour with\n    <code tourAnchor=\"tourService.start\">tourService.start()</code>\n  </li>\n  <li>Check out the\n    <a href=\"https://github.com/isaacplmann/ngx-tour/tree/master/src/app/console\">demo source code</a> for an example.</li>\n</ol>\n\n<h2>TourService</h2>\n<p>The\n  <code>TourService</code> controls the tour. Some key functions include:</p>\n<dl>\n  <dt>start()</dt>\n  <dd>Starts the tour</dd>\n  <dt>startAt(stepId: number | string)</dt>\n  <dd>Start the tour at the step with stepId or at the specified index</dd>\n  <dt>end()</dt>\n  <dd>Ends the tour</dd>\n  <dt>pause()</dt>\n  <dd>Pauses the tour</dd>\n  <dt>resume()</dt>\n  <dd>Resumes the tour</dd>\n  <dt>next()</dt>\n  <dd>Goes to the next step</dd>\n  <dt>prev()</dt>\n  <dd>Goes to the previous step</dd>\n</dl>\n\n<h2>Step Configuration</h2>\n<p>Each step can have the following properties.</p>\n<table class=\"table\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Type</th>\n      <th>Default</th>\n      <th>Description</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>stepId</td>\n      <td>string</td>\n      <td>\"\"</td>\n      <td>A unique identifier for the step</td>\n    </tr>\n    <tr tourAnchor=\"config.anchorId\">\n      <td>anchorId</td>\n      <td>string</td>\n      <td>required</td>\n      <td>The anchor to which the step will be attached</td>\n    </tr>\n    <tr>\n      <td>title</td>\n      <td>string</td>\n      <td>\"\"</td>\n      <td>The title of the tour step</td>\n    </tr>\n    <tr>\n      <td>content</td>\n      <td>string</td>\n      <td>\"\"</td>\n      <td>The content text of the tour step</td>\n    </tr>\n    <tr tourAnchor=\"config.route\">\n      <td>route</td>\n      <td>string | UrlSegment[]</td>\n      <td>undefined</td>\n      <td>\n        The route to which the tour should navigate before attempting to show this tour step. If undefined, no navigation is attempted.\n      </td>\n    </tr>\n    <tr tourAnchor=\"config.nextStep\">\n      <td>nextStep</td>\n      <td>number | string</td>\n      <td>undefined</td>\n      <td>The step index or stepId of the next step. If undefined, the next step in the steps array is used.</td>\n    </tr>\n    <tr>\n      <td>prevStep</td>\n      <td>number | string</td>\n      <td>undefined</td>\n      <td>The step index or stepId of the previous step. If undefined, the previous step in the steps array is used.</td>\n    </tr>\n    <tr>\n      <td>placement</td>\n      <td>'above' | 'below' | 'after' | 'before' | 'left' | 'right'</td>\n      <td>\n        <span tourAnchor=\"config.placement.default\">'top'</span>\n      </td>\n      <td>\n        (* Ignored by\n        <code>TourMdMenuModule</code>) Where the tour step should placed with respect to the anchor. 'before' and 'after' are synonyms for 'left' and\n        'right' respectively. When RTL support is implemented, 'before' and 'after' will swap directions when RTL mode is\n        enabled.\n      </td>\n    </tr>\n    <tr>\n      <td>preventScrolling</td>\n      <td>boolean</td>\n      <td>false</td>\n      <td>\n        Tour steps automatically scroll to the middle of the screen, if they are off the screen when shown. Setting this value to\n        true will disable the scroll behavior.\n      </td>\n    </tr>\n  </tbody>\n</table>\n\n<h2>Defaults</h2>\n<p>You can set default values in the\n  <code>TourService.initialize</code> function.</p>\n<pre>\nthis.tourService.initialize(steps, {{ '{' }}\n  route: '',\n  placement: 'left',\n  preventScrolling: true,\n});\n</pre>\n<p>Any value explicitly defined in a step will override the default value.</p>\n\n<h2 tourAnchor=\"hotkeys\">Hotkeys</h2>\n<p>\n  Hotkeys are provided using Angular's\n  <code>@HostListener</code> decorator. Hotkeys are enabled when the tour starts and disabled when the tour ends.\n</p>\n<ul>\n  <li>\n    <strong>left arrow</strong>\n    <span> - previous step</span>\n  </li>\n  <li>\n    <strong>right arrow</strong>\n    <span> - next step</span>\n  </li>\n  <li>\n    <strong>esc</strong>\n    <span> - end tour</span>\n  </li>\n</ul>\n<p>\n  You can disable hotkeys by calling\n  <code>tourService.disableHotkeys()</code> or re-enable with\n  <code>tourService.enableHotkeys()</code>\n</p>\n\n<h2 tourAnchor=\"events\">Event Observables</h2>\n<p>The\n  <code>TourService</code> emits events that can be subscribed to like this:</p>\n<pre>\nthis.tourService.initialize$.subscribe((steps: IStepOption[]) => {{ '{' }}\n  console.log('tour configured with these steps:', steps);\n});\n</pre>\n<table class=\"table\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Payload</th>\n      <th>Emitted When</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>stepShow$</td>\n      <td>IStepOption</td>\n      <td>A step is shown</td>\n    </tr>\n    <tr>\n      <td>stepHide$</td>\n      <td>IStepOption</td>\n      <td>A step is hidden</td>\n    </tr>\n    <tr>\n      <td>initialize$</td>\n      <td>IStepOption[]</td>\n      <td>The tour is configured with a set of steps</td>\n    </tr>\n    <tr>\n      <td>start$</td>\n      <td>IStepOption</td>\n      <td>The tour begins</td>\n    </tr>\n    <tr>\n      <td>end$</td>\n      <td>any</td>\n      <td>The tour ends</td>\n    </tr>\n    <tr>\n      <td>pause$</td>\n      <td>IStepOption</td>\n      <td>The tour is paused</td>\n    </tr>\n    <tr>\n      <td>resume$</td>\n      <td>IStepOption</td>\n      <td>The tour resumes</td>\n    </tr>\n    <tr>\n      <td>anchorRegister$</td>\n      <td>string</td>\n      <td>An anchor is registered with the tour</td>\n    </tr>\n    <tr>\n      <td>anchorUnregister$</td>\n      <td>string</td>\n      <td>An anchor is unregistered from the tour</td>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "./src/app/console/docs.component.ts":
/*!*******************************************!*\
  !*** ./src/app/console/docs.component.ts ***!
  \*******************************************/
/*! exports provided: DocsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocsComponent", function() { return DocsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DocsComponent = /** @class */ (function () {
    function DocsComponent() {
    }
    DocsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'docs',
            template: __webpack_require__(/*! ./docs.component.html */ "./src/app/console/docs.component.html"),
        })
    ], DocsComponent);
    return DocsComponent;
}());



/***/ }),

/***/ "./src/app/console/other-route.component.ts":
/*!**************************************************!*\
  !*** ./src/app/console/other-route.component.ts ***!
  \**************************************************/
/*! exports provided: OtherRouteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherRouteComponent", function() { return OtherRouteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OtherRouteComponent = /** @class */ (function () {
    function OtherRouteComponent() {
    }
    OtherRouteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'other-route',
            template: "<p>This is the <strong tourAnchor=\"another.route\">another</strong> route</p>",
        })
    ], OtherRouteComponent);
    return OtherRouteComponent;
}());



/***/ })

}]);
//# sourceMappingURL=console-console-module.js.map