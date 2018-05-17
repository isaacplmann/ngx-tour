(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["md-menu-mat-lazy-tour-app-module"],{

/***/ "./src/app/md-menu/mat-lazy-tour/app-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/md-menu/mat-lazy-tour/app-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/md-menu/mat-lazy-tour/components/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        redirectTo: 'module-app-home',
        pathMatch: 'full'
    },
    {
        path: 'module-app-home',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: 'module-a',
        loadChildren: './modules/module-a/module-a.module#ModuleAModule'
    },
    {
        path: 'module-b',
        loadChildren: './modules/module-b/module-b.module#ModuleBModule'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/md-menu/mat-lazy-tour/app.component.css":
/*!*********************************************************!*\
  !*** ./src/app/md-menu/mat-lazy-tour/app.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/md-menu/mat-lazy-tour/app.component.html":
/*!**********************************************************!*\
  !*** ./src/app/md-menu/mat-lazy-tour/app.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span>\n  <a [routerLink]=\"['/']\">HOME</a>\n</span>\n<span>\n  <a [routerLink]=\"['module-a']\">MODULE A</a>\n</span>\n<span>\n  <a [routerLink]=\"['module-b']\">MODULE B</a>\n</span>\n\n<router-outlet></router-outlet>\n<tour-step-template></tour-step-template>"

/***/ }),

/***/ "./src/app/md-menu/mat-lazy-tour/app.component.ts":
/*!********************************************************!*\
  !*** ./src/app/md-menu/mat-lazy-tour/app.component.ts ***!
  \********************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/md-menu/mat-lazy-tour/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/md-menu/mat-lazy-tour/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/md-menu/mat-lazy-tour/app.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/md-menu/mat-lazy-tour/app.module.ts ***!
  \*****************************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/md-menu/mat-lazy-tour/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/md-menu/mat-lazy-tour/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/md-menu/mat-lazy-tour/components/home/home.component.ts");
/* harmony import */ var ngx_tour_md_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-tour-md-menu */ "./dist/ngx-tour-md-menu/fesm5/ngx-tour-md-menu.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                ngx_tour_md_menu__WEBPACK_IMPORTED_MODULE_6__["TourMatMenuModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/md-menu/mat-lazy-tour/components/home/home.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/md-menu/mat-lazy-tour/components/home/home.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/md-menu/mat-lazy-tour/components/home/home.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/md-menu/mat-lazy-tour/components/home/home.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div tourAnchor=\"app-home\"></div>\n<p>\n  home works!\n</p>"

/***/ }),

/***/ "./src/app/md-menu/mat-lazy-tour/components/home/home.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/md-menu/mat-lazy-tour/components/home/home.component.ts ***!
  \*************************************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_tour_md_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-tour-md-menu */ "./dist/ngx-tour-md-menu/fesm5/ngx-tour-md-menu.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(tourService) {
        this.tourService = tourService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.tourService.initialize([
            {
                anchorId: 'app-home',
                content: 'This is a step from the eager loaded app module in the home component',
                title: 'Home Component',
                route: ''
            },
            {
                anchorId: 'module-a',
                content: 'This is a step from the lazy loaded module-a module in the module-a component',
                title: 'Module-a Component',
                route: 'module-a'
            },
            {
                anchorId: 'module-b',
                content: 'This is a step from the lazy loaded module-b module in the module-b component',
                title: 'Module-b Component',
                route: 'module-b'
            }
        ]);
        this.tourService.start();
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/md-menu/mat-lazy-tour/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/md-menu/mat-lazy-tour/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_tour_md_menu__WEBPACK_IMPORTED_MODULE_1__["TourService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ })

}]);
//# sourceMappingURL=md-menu-mat-lazy-tour-app-module.js.map