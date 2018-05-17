(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-module-b-module-b-module"],{

/***/ "./src/app/md-menu/mat-lazy-tour/modules/module-b/module-b-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/md-menu/mat-lazy-tour/modules/module-b/module-b-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: ModuleBRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleBRoutingModule", function() { return ModuleBRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _module_b_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module-b.component */ "./src/app/md-menu/mat-lazy-tour/modules/module-b/module-b.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        redirectTo: 'module-b-component',
        pathMatch: 'full'
    },
    {
        path: 'module-b-component',
        component: _module_b_component__WEBPACK_IMPORTED_MODULE_2__["ModuleBComponent"]
    }
];
var ModuleBRoutingModule = /** @class */ (function () {
    function ModuleBRoutingModule() {
    }
    ModuleBRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ModuleBRoutingModule);
    return ModuleBRoutingModule;
}());



/***/ }),

/***/ "./src/app/md-menu/mat-lazy-tour/modules/module-b/module-b.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/md-menu/mat-lazy-tour/modules/module-b/module-b.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/md-menu/mat-lazy-tour/modules/module-b/module-b.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/md-menu/mat-lazy-tour/modules/module-b/module-b.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div tourAnchor=\"module-b\"></div>\n<p>\n  module-b works!\n</p>\n"

/***/ }),

/***/ "./src/app/md-menu/mat-lazy-tour/modules/module-b/module-b.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/md-menu/mat-lazy-tour/modules/module-b/module-b.component.ts ***!
  \******************************************************************************/
/*! exports provided: ModuleBComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleBComponent", function() { return ModuleBComponent; });
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

var ModuleBComponent = /** @class */ (function () {
    function ModuleBComponent() {
    }
    ModuleBComponent.prototype.ngOnInit = function () {
    };
    ModuleBComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-module-b',
            template: __webpack_require__(/*! ./module-b.component.html */ "./src/app/md-menu/mat-lazy-tour/modules/module-b/module-b.component.html"),
            styles: [__webpack_require__(/*! ./module-b.component.css */ "./src/app/md-menu/mat-lazy-tour/modules/module-b/module-b.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ModuleBComponent);
    return ModuleBComponent;
}());



/***/ }),

/***/ "./src/app/md-menu/mat-lazy-tour/modules/module-b/module-b.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/md-menu/mat-lazy-tour/modules/module-b/module-b.module.ts ***!
  \***************************************************************************/
/*! exports provided: ModuleBModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleBModule", function() { return ModuleBModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _module_b_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module-b-routing.module */ "./src/app/md-menu/mat-lazy-tour/modules/module-b/module-b-routing.module.ts");
/* harmony import */ var _module_b_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module-b.component */ "./src/app/md-menu/mat-lazy-tour/modules/module-b/module-b.component.ts");
/* harmony import */ var ngx_tour_md_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-tour-md-menu */ "./dist/ngx-tour-md-menu/fesm5/ngx-tour-md-menu.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ModuleBModule = /** @class */ (function () {
    function ModuleBModule() {
    }
    ModuleBModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _module_b_routing_module__WEBPACK_IMPORTED_MODULE_2__["ModuleBRoutingModule"],
                ngx_tour_md_menu__WEBPACK_IMPORTED_MODULE_4__["TourMatMenuModule"]
            ],
            declarations: [_module_b_component__WEBPACK_IMPORTED_MODULE_3__["ModuleBComponent"]]
        })
    ], ModuleBModule);
    return ModuleBModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-module-b-module-b-module.js.map