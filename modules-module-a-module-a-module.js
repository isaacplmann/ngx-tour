(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-module-a-module-a-module"],{

/***/ "./src/app/md-menu/mat-lazy-tour/modules/module-a/module-a-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/md-menu/mat-lazy-tour/modules/module-a/module-a-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: ModuleARoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleARoutingModule", function() { return ModuleARoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _module_a_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module-a.component */ "./src/app/md-menu/mat-lazy-tour/modules/module-a/module-a.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        redirectTo: 'module-a-component',
        pathMatch: 'full'
    },
    {
        path: 'module-a-component',
        component: _module_a_component__WEBPACK_IMPORTED_MODULE_2__["ModuleAComponent"]
    }
];
var ModuleARoutingModule = /** @class */ (function () {
    function ModuleARoutingModule() {
    }
    ModuleARoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ModuleARoutingModule);
    return ModuleARoutingModule;
}());



/***/ }),

/***/ "./src/app/md-menu/mat-lazy-tour/modules/module-a/module-a.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/md-menu/mat-lazy-tour/modules/module-a/module-a.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/md-menu/mat-lazy-tour/modules/module-a/module-a.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/md-menu/mat-lazy-tour/modules/module-a/module-a.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div tourAnchor=\"module-a\"></div>\n<p>\n  module-a works!\n</p>\n"

/***/ }),

/***/ "./src/app/md-menu/mat-lazy-tour/modules/module-a/module-a.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/md-menu/mat-lazy-tour/modules/module-a/module-a.component.ts ***!
  \******************************************************************************/
/*! exports provided: ModuleAComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleAComponent", function() { return ModuleAComponent; });
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

var ModuleAComponent = /** @class */ (function () {
    function ModuleAComponent() {
    }
    ModuleAComponent.prototype.ngOnInit = function () {
    };
    ModuleAComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-module-a',
            template: __webpack_require__(/*! ./module-a.component.html */ "./src/app/md-menu/mat-lazy-tour/modules/module-a/module-a.component.html"),
            styles: [__webpack_require__(/*! ./module-a.component.css */ "./src/app/md-menu/mat-lazy-tour/modules/module-a/module-a.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ModuleAComponent);
    return ModuleAComponent;
}());



/***/ }),

/***/ "./src/app/md-menu/mat-lazy-tour/modules/module-a/module-a.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/md-menu/mat-lazy-tour/modules/module-a/module-a.module.ts ***!
  \***************************************************************************/
/*! exports provided: ModuleAModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleAModule", function() { return ModuleAModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _module_a_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module-a-routing.module */ "./src/app/md-menu/mat-lazy-tour/modules/module-a/module-a-routing.module.ts");
/* harmony import */ var _module_a_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module-a.component */ "./src/app/md-menu/mat-lazy-tour/modules/module-a/module-a.component.ts");
/* harmony import */ var ngx_tour_md_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-tour-md-menu */ "./dist/ngx-tour-md-menu/fesm5/ngx-tour-md-menu.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ModuleAModule = /** @class */ (function () {
    function ModuleAModule() {
    }
    ModuleAModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _module_a_routing_module__WEBPACK_IMPORTED_MODULE_2__["ModuleARoutingModule"],
                ngx_tour_md_menu__WEBPACK_IMPORTED_MODULE_4__["TourMatMenuModule"]
            ],
            declarations: [_module_a_component__WEBPACK_IMPORTED_MODULE_3__["ModuleAComponent"]]
        })
    ], ModuleAModule);
    return ModuleAModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-module-a-module-a-module.js.map