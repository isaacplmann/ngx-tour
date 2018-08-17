(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["md-menu-md-menu-module"],{

/***/ "./src/app/md-menu/docs.component.html":
/*!*********************************************!*\
  !*** ./src/app/md-menu/docs.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>About</h2>\n<p>This is a product tour library built with Angular (2+). It's inspired by\n  <a tourAnchor=\"angular-ui-tour\" href=\"http://benmarch.github.io/angular-ui-tour\">angular-ui-tour</a>.</p>\n<p>\n  <code>TourMatMenuModule</code> is an implementation of the tour ui that uses\n  <a href=\"http://material.angular.io\">Angular Material</a> MatMenu to display tour steps.</p>\n\n<h2 tourAnchor=\"installation\">Installation</h2>\n<ol>\n  <li>\n    <code>npm install ngx-tour-core ngx-tour-md-menu @angular/animations @angular/cdk @angular/http @angular/material</code>\n  </li>\n  <li>Import\n    <code>TourMatMenuModule.forRoot()</code> into your app module</li>\n  <li>Make sure\n    <code>RouterModule</code> is imported in your app module</li>\n  <li>Make sure Angular Material is\n    <a href=\"https://material.angular.io/guide/getting-started\">installed correctly</a>\n  </li>\n</ol>\n\n<h2 tourAnchor=\"usage\">Usage</h2>\n\n<h4>Simple project</h4>\n<ol>\n  <li>Add\n    <code>&lt;tour-step-template&gt;&lt;/tour-step-template&gt;</code> to your root app component</li>\n  <li>\n    Define anchor points for the tour steps by adding the\n    <code>tourAnchor</code> directive throughout your app.\n    <pre><code>&lt;div tourAnchor=\"some.anchor.id\"&gt;...&lt;/div&gt;</code></pre>\n  </li>\n  <li>\n    Define your tour steps using\n    <code>tourService.initialize(steps)</code>\n    <pre>\nthis.tourService.initialize([{{ '{' }}\n  anchorId: 'some.anchor.id',\n  content: 'Some content',\n  title: 'First',\n}, {{ '{' }}\n  anchorId: 'another.anchor.id',\n  content: 'Other content',\n  title: 'Second',\n}]);</pre>\n  </li>\n  <li>Start the tour with\n    <code tourAnchor=\"tourService.start\">tourService.start()</code>\n  </li>\n  <li>Check out the\n    <a href=\"https://github.com/isaacplmann/ngx-tour/tree/master/src/app/md-menu\">demo source code</a> for an example.</li>\n</ol>\n\n<h4>Lazy loaded modules</h4>\n\n<ol>\n\n  <li>\n    Add\n    <pre><code>&lt;tour-step-template&gt;&lt;/tour-step-template&gt;</code></pre> to your root app component.\n  </li>\n  <li>\n    Import\n    <pre><code>TourMatMenuModule.forRoot()</code></pre> into your app module.\n  </li>\n  <li>\n    Import\n    <pre><code>TourMatMenuModule</code></pre> into all lazy loaded modules needing the tour.\n  </li>\n  <li>\n    Import the\n    <pre><code>TourService</code></pre> in your highest level eagerly loaded component and initialize all your steps there (even the ones in the lazy loaded\n    modules).\n    <strong>Note:</strong>\n    Make sure every step object contains its route. For example, if the route to a step is '/home' then your step object should\n    have\n    <code>route: '/home'</code> as a member.\n  </li>\n  <li>\n    Define anchor points for your steps by adding the\n    <pre><code>tourAnchor</code></pre> directive throughout your modules (any component that requires it at any level).\n    <pre><code>&lt;div tourAnchor=\"some.anchor.id\"&gt;...&lt;/div&gt;</code></pre>\n  </li>\n  <li>\n    Start the tour with\n    <pre><code>tourService.start()</code></pre> in the same component you initialized your steps. Call this right after the initialization.\n  </li>\n  <li>Check out the\n    <a href=\"https://github.com/isaacplmann/ngx-tour/tree/master/src/app/md-menu/mat-lazy-menu\">demo source code</a> for an example.\n  </li>\n\n</ol>\n\n<h2>TourService</h2>\n<p>The\n  <code>TourService</code> controls the tour. Some key functions include:</p>\n<dl>\n  <dt>start()</dt>\n  <dd>Starts the tour</dd>\n  <dt>startAt(stepId: number | string)</dt>\n  <dd>Start the tour at the step with stepId or at the specified index</dd>\n  <dt>end()</dt>\n  <dd>Ends the tour</dd>\n  <dt>pause()</dt>\n  <dd>Pauses the tour</dd>\n  <dt>resume()</dt>\n  <dd>Resumes the tour</dd>\n  <dt>next()</dt>\n  <dd>Goes to the next step</dd>\n  <dt>prev()</dt>\n  <dd>Goes to the previous step</dd>\n</dl>\n\n<h2>Step Configuration</h2>\n<p>Each step can have the following properties.</p>\n<table class=\"table\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Type</th>\n      <th>Default</th>\n      <th>Description</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>stepId</td>\n      <td>string</td>\n      <td>\"\"</td>\n      <td>A unique identifier for the step</td>\n    </tr>\n    <tr tourAnchor=\"config.anchorId\">\n      <td>anchorId</td>\n      <td>string</td>\n      <td>required</td>\n      <td>The anchor to which the step will be attached</td>\n    </tr>\n    <tr>\n      <td>title</td>\n      <td>string</td>\n      <td>\"\"</td>\n      <td>The title of the tour step</td>\n    </tr>\n    <tr>\n      <td>content</td>\n      <td>string</td>\n      <td>\"\"</td>\n      <td>The content text of the tour step</td>\n    </tr>\n    <tr tourAnchor=\"config.enableBackdrop\">\n      <td>enableBackdrop</td>\n      <td>boolean</td>\n      <td>false</td>\n      <td>Controls whether to enable active element highlighting</td>\n    </tr>\n    <tr tourAnchor=\"config.route\">\n      <td>route</td>\n      <td>string | UrlSegment[]</td>\n      <td>undefined</td>\n      <td>\n        The route to which the tour should navigate before attempting to show this tour step. If undefined, no navigation is attempted.\n      </td>\n    </tr>\n    <tr tourAnchor=\"config.nextStep\">\n      <td>nextStep</td>\n      <td>number | string</td>\n      <td>undefined</td>\n      <td>The step index or stepId of the next step. If undefined, the next step in the steps array is used.</td>\n    </tr>\n    <tr>\n      <td>prevStep</td>\n      <td>number | string</td>\n      <td>undefined</td>\n      <td>The step index or stepId of the previous step. If undefined, the previous step in the steps array is used.</td>\n    </tr>\n    <tr>\n      <td>\n        <del>placement</del>\n      </td>\n      <td>N/A</td>\n      <td>N/A</td>\n      <td>\n        Ignored by\n        <code>TourMatMenuModule</code>\n      </td>\n    </tr>\n    <tr>\n      <td>preventScrolling</td>\n      <td>boolean</td>\n      <td>false</td>\n      <td>\n        Tour steps automatically scroll to the middle of the screen, if they are off the screen when shown. Setting this value to\n        true will disable the scroll behavior.\n      </td>\n    </tr>\n    <tr tourAnchor=\"config.buttons.custom\">\n      <td>prevBtnTitle</td>\n      <td>string</td>\n      <td>false</td>\n      <td>\n        Sets a custom prev button title for a given step. Default is \"Prev\"\n      </td>\n    </tr>\n    <tr>\n      <td>nextBtnTitle</td>\n      <td>string</td>\n      <td>false</td>\n      <td>\n        Sets a custom next button title for a given step. Default is \"Next\"\n      </td>\n    </tr>\n    <tr>\n      <td>endBtnTitle</td>\n      <td>string</td>\n      <td>false</td>\n      <td>\n        Sets a custom end button title for a given step. Default is \"End\"\n      </td>\n    </tr>\n  </tbody>\n</table>\n\n<h2>Defaults</h2>\n<p>You can set default values in the\n  <code>TourService.initialize</code> function.</p>\n<pre>\nthis.tourService.initialize(steps, {{ '{' }}\n  route: '',\n  preventScrolling: true,\n});\n</pre>\n<p>Any value explicitly defined in a step will override the default value.</p>\n\n<h2 tourAnchor=\"hotkeys\">Hotkeys</h2>\n<p>\n  Hotkeys are provided using Angular's\n  <code>@HostListener</code> decorator. Hotkeys are enabled when the tour starts and disabled when the tour ends.\n</p>\n<ul>\n  <li>\n    <strong>left arrow</strong>\n    <span> - previous step</span>\n  </li>\n  <li>\n    <strong>right arrow</strong>\n    <span> - next step</span>\n  </li>\n  <li>\n    <strong>esc</strong>\n    <span> - end tour</span>\n  </li>\n</ul>\n<p>\n  You can disable hotkeys by calling\n  <code>tourService.disableHotkeys()</code> or re-enable with\n  <code>tourService.enableHotkeys()</code>\n</p>\n\n<h2 tourAnchor=\"events\">Event Observables</h2>\n<p>The\n  <code>TourService</code> emits events that can be subscribed to like this:</p>\n<pre>\nthis.tourService.initialize$.subscribe((steps: IStepOption[]) => {{ '{' }}\n  console.log('tour configured with these steps:', steps);\n});\n</pre>\n<table class=\"table\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Payload</th>\n      <th>Emitted When</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>stepShow$</td>\n      <td>IStepOption</td>\n      <td>A step is shown</td>\n    </tr>\n    <tr>\n      <td>stepHide$</td>\n      <td>IStepOption</td>\n      <td>A step is hidden</td>\n    </tr>\n    <tr>\n      <td>initialize$</td>\n      <td>IStepOption[]</td>\n      <td>The tour is configured with a set of steps</td>\n    </tr>\n    <tr>\n      <td>start$</td>\n      <td>IStepOption</td>\n      <td>The tour begins</td>\n    </tr>\n    <tr>\n      <td>end$</td>\n      <td>any</td>\n      <td>The tour ends</td>\n    </tr>\n    <tr>\n      <td>pause$</td>\n      <td>IStepOption</td>\n      <td>The tour is paused</td>\n    </tr>\n    <tr>\n      <td>resume$</td>\n      <td>IStepOption</td>\n      <td>The tour resumes</td>\n    </tr>\n    <tr>\n      <td>anchorRegister$</td>\n      <td>string</td>\n      <td>An anchor is registered with the tour</td>\n    </tr>\n    <tr>\n      <td>anchorUnregister$</td>\n      <td>string</td>\n      <td>An anchor is unregistered from the tour</td>\n    </tr>\n  </tbody>\n</table>\n\n<h2 tourAnchor=\"template\">Custom template</h2>\n<p>\n  You can also customize the tour step template by providing an\n  <code>&lt;ng-template let-step=\"step\" &gt;</code> inside the\n  <code>&lt;tour-step-template&gt;</code>\n</p>\n<p>\n  The default template is equivalent to this:\n</p>\n<pre><code>&lt;tour-step-template&gt;\n  &lt;ng-template let-step=\"step\"&gt;\n    &lt;mat-card (click)=\"$event.stopPropagation()\"&gt;\n      &lt;mat-card-title&gt;\n        {{ '{{' }}step?.title}}\n      &lt;/mat-card-title&gt;\n      &lt;mat-card-content&gt;\n        {{ '{{' }}step?.content}}\n      &lt;/mat-card-content&gt;\n      &lt;mat-card-actions&gt;\n        &lt;button mat-icon-button [disabled]=\"!tourService.hasPrev(step)\" (click)=\"tourService.prev()\"&gt;\n          &lt;mat-icon&gt;chevron_left&lt;/mat-icon&gt;\n        &lt;/button&gt;\n        &lt;button mat-icon-button [disabled]=\"!tourService.hasNext(step)\" (click)=\"tourService.next()\"&gt;\n          &lt;mat-icon&gt;chevron_right&lt;/mat-icon&gt;\n        &lt;/button&gt;\n        &lt;button mat-button (click)=\"tourService.end()\"&gt;{{ '{{' }}step?.endBtnTitle}}&lt;/button&gt;\n      &lt;/mat-card-actions&gt;\n    &lt;/mat-card&gt;\n  &lt;/ng-template&gt;\n&lt;/tour-step-template&gt;\n</code></pre>\n\n<h2>Styling Active Tour Anchor</h2>\n<p>\n  The currently active tour anchor element has a\n  <code>touranchor--is-active</code> class applied to it, so you can apply your own custom styles to that class to highlight the element being referenced.\n</p>"

/***/ }),

/***/ "./src/app/md-menu/docs.component.ts":
/*!*******************************************!*\
  !*** ./src/app/md-menu/docs.component.ts ***!
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
            template: __webpack_require__(/*! ./docs.component.html */ "./src/app/md-menu/docs.component.html"),
        })
    ], DocsComponent);
    return DocsComponent;
}());



/***/ }),

/***/ "./src/app/md-menu/md-menu.component.html":
/*!************************************************!*\
  !*** ./src/app/md-menu/md-menu.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a href=\"https://github.com/isaacplmann/ng2-tour\" class=\"btn btn-default\">View on GitHub</a>\n<a style=\"cursor: pointer\" (click)=\"tourService.toggle()\" class=\"btn btn-primary\" tourAnchor=\"start.tour\">Start Demo Tour</a>\n\n<router-outlet></router-outlet>\n<tour-step-template>\n  <!-- <ng-template #jsonTemplate let-step=\"step\">\n      {{ step | json }}\n  </ng-template> -->\n</tour-step-template>\n"

/***/ }),

/***/ "./src/app/md-menu/md-menu.component.ts":
/*!**********************************************!*\
  !*** ./src/app/md-menu/md-menu.component.ts ***!
  \**********************************************/
/*! exports provided: MdMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdMenuComponent", function() { return MdMenuComponent; });
/* harmony import */ var ngx_tour_md_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-tour-md-menu */ "./dist/ngx-tour-md-menu/fesm5/ngx-tour-md-menu.js");
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


var MdMenuComponent = /** @class */ (function () {
    function MdMenuComponent(tourService) {
        this.tourService = tourService;
        this.tourService.initialize([{
                anchorId: 'start.tour',
                content: 'Welcome to the Ngx-Tour tour!',
                placement: 'below',
                title: 'Welcome',
            }, {
                anchorId: 'angular-ui-tour',
                content: 'Thanks to angular-ui-tour for the inspiration for the library',
                route: '',
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
                anchorId: 'config.enableBackdrop',
                content: 'You can enable backdrop to highlight active element.',
                title: 'Backdrop',
                enableBackdrop: true
            }, {
                anchorId: 'config.route',
                content: 'Tours can span multiple routes.',
                title: 'Route',
            }, {
                anchorId: 'another.route',
                content: 'Like this!',
                route: 'other',
                title: 'Another Route',
            }, {
                anchorId: 'config.route',
                content: 'And then back again.',
                placement: 'below',
                title: 'Route Return',
            }, {
                anchorId: 'config.buttons.custom',
                content: 'You can set custom step button names',
                title: 'Button Titles',
                prevBtnTitle: 'My Prev',
                nextBtnTitle: 'My Next',
                endBtnTitle: 'My End'
            }, {
                anchorId: 'hotkeys',
                content: 'Try using the hotkeys to navigate through the tour.',
                title: 'Hotkeys',
            }, {
                anchorId: 'events',
                content: 'You can subscribe to events',
                title: 'Events',
            }], {
            route: 'md-menu',
        });
        this.tourService.start();
    }
    MdMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'md-menu-route',
            template: __webpack_require__(/*! ./md-menu.component.html */ "./src/app/md-menu/md-menu.component.html"),
        }),
        __metadata("design:paramtypes", [ngx_tour_md_menu__WEBPACK_IMPORTED_MODULE_0__["TourService"]])
    ], MdMenuComponent);
    return MdMenuComponent;
}());



/***/ }),

/***/ "./src/app/md-menu/md-menu.module.ts":
/*!*******************************************!*\
  !*** ./src/app/md-menu/md-menu.module.ts ***!
  \*******************************************/
/*! exports provided: MdMenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdMenuModule", function() { return MdMenuModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_tour_md_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-tour-md-menu */ "./dist/ngx-tour-md-menu/fesm5/ngx-tour-md-menu.js");
/* harmony import */ var _docs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./docs.component */ "./src/app/md-menu/docs.component.ts");
/* harmony import */ var _md_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./md-menu.component */ "./src/app/md-menu/md-menu.component.ts");
/* harmony import */ var _other_route_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./other-route.component */ "./src/app/md-menu/other-route.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var MdMenuModule = /** @class */ (function () {
    function MdMenuModule() {
    }
    MdMenuModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_md_menu_component__WEBPACK_IMPORTED_MODULE_5__["MdMenuComponent"], _docs_component__WEBPACK_IMPORTED_MODULE_4__["DocsComponent"], _other_route_component__WEBPACK_IMPORTED_MODULE_6__["OtherRouteComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                ngx_tour_md_menu__WEBPACK_IMPORTED_MODULE_3__["TourMatMenuModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
                        component: _md_menu_component__WEBPACK_IMPORTED_MODULE_5__["MdMenuComponent"],
                        path: '',
                        children: [{
                                component: _docs_component__WEBPACK_IMPORTED_MODULE_4__["DocsComponent"],
                                path: '',
                            }, {
                                component: _other_route_component__WEBPACK_IMPORTED_MODULE_6__["OtherRouteComponent"],
                                path: 'other',
                            }]
                    }]),
            ],
        })
    ], MdMenuModule);
    return MdMenuModule;
}());



/***/ }),

/***/ "./src/app/md-menu/other-route.component.ts":
/*!**************************************************!*\
  !*** ./src/app/md-menu/other-route.component.ts ***!
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
//# sourceMappingURL=md-menu-md-menu-module.js.map