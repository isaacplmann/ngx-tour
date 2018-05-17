(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ng-bootstrap-ng-bootstrap-module"],{

/***/ "./dist/ngx-tour-ng-bootstrap/fesm5/ngx-tour-ng-bootstrap.js":
/*!*******************************************************************!*\
  !*** ./dist/ngx-tour-ng-bootstrap/fesm5/ngx-tour-ng-bootstrap.js ***!
  \*******************************************************************/
/*! exports provided: TourService, TourNgBootstrapModule, TourAnchorNgBootstrapDirective, TourStepTemplateComponent, ɵa, ɵb, ɵc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TourService", function() { return NgbTourService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TourNgBootstrapModule", function() { return TourNgBootstrapModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TourAnchorNgBootstrapDirective", function() { return TourAnchorNgBootstrapDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TourStepTemplateComponent", function() { return TourStepTemplateComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return NgbTourService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return TourAnchorNgBootstrapPopoverDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return TourStepTemplateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_tour_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-tour-core */ "./dist/ngx-tour-core/fesm5/ngx-tour-core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var withinviewport__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! withinviewport */ "./node_modules/withinviewport/withinviewport.js");
/* harmony import */ var withinviewport__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(withinviewport__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgbTourService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(NgbTourService, _super);
    function NgbTourService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NgbTourService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
    ];
    return NgbTourService;
}(ngx_tour_core__WEBPACK_IMPORTED_MODULE_2__["TourService"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TourStepTemplateService = /** @class */ (function () {
    function TourStepTemplateService() {
    }
    TourStepTemplateService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
    ];
    return TourStepTemplateService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TourAnchorNgBootstrapPopoverDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TourAnchorNgBootstrapPopoverDirective, _super);
    function TourAnchorNgBootstrapPopoverDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TourAnchorNgBootstrapPopoverDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: '[tourAnchor]' },] },
    ];
    return TourAnchorNgBootstrapPopoverDirective;
}(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbPopover"]));
var TourAnchorNgBootstrapDirective = /** @class */ (function () {
    function TourAnchorNgBootstrapDirective(tourService, tourStepTemplate, element, popoverDirective) {
        this.tourService = tourService;
        this.tourStepTemplate = tourStepTemplate;
        this.element = element;
        this.popoverDirective = popoverDirective;
        this.popoverDirective.toggle = function () { };
    }
    /**
     * @return {?}
     */
    TourAnchorNgBootstrapDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.tourService.register(this.tourAnchor, this);
    };
    /**
     * @return {?}
     */
    TourAnchorNgBootstrapDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.tourService.unregister(this.tourAnchor);
    };
    /**
     * @param {?} step
     * @return {?}
     */
    TourAnchorNgBootstrapDirective.prototype.showTourStep = /**
     * @param {?} step
     * @return {?}
     */
    function (step) {
        this.isActive = true;
        this.popoverDirective.ngbPopover = this.tourStepTemplate.template;
        this.popoverDirective.popoverTitle = step.title;
        this.popoverDirective.container = 'body';
        this.popoverDirective.placement = /** @type {?} */ ((step.placement || 'top')
            .replace('before', 'left').replace('after', 'right')
            .replace('below', 'bottom').replace('above', 'top'));
        step.prevBtnTitle = step.prevBtnTitle || 'Prev';
        step.nextBtnTitle = step.nextBtnTitle || 'Next';
        step.endBtnTitle = step.endBtnTitle || 'End';
        this.popoverDirective.open({ step: step });
        if (!step.preventScrolling) {
            if (!withinviewport__WEBPACK_IMPORTED_MODULE_4___default()(this.element.nativeElement, { sides: 'bottom' })) {
                (/** @type {?} */ (this.element.nativeElement)).scrollIntoView(false);
            }
            else if (!withinviewport__WEBPACK_IMPORTED_MODULE_4___default()(this.element.nativeElement, { sides: 'left top right' })) {
                (/** @type {?} */ (this.element.nativeElement)).scrollIntoView(true);
            }
        }
    };
    /**
     * @return {?}
     */
    TourAnchorNgBootstrapDirective.prototype.hideTourStep = /**
     * @return {?}
     */
    function () {
        this.isActive = false;
        this.popoverDirective.close();
    };
    TourAnchorNgBootstrapDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[tourAnchor]',
                },] },
    ];
    /** @nocollapse */
    TourAnchorNgBootstrapDirective.ctorParameters = function () { return [
        { type: NgbTourService, },
        { type: TourStepTemplateService, },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
        { type: TourAnchorNgBootstrapPopoverDirective, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"] },] },
    ]; };
    TourAnchorNgBootstrapDirective.propDecorators = {
        "tourAnchor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "isActive": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.touranchor--is-active',] },],
    };
    return TourAnchorNgBootstrapDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TourStepTemplateComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TourStepTemplateComponent, _super);
    function TourStepTemplateComponent(tourStepTemplateService, tourService) {
        var _this = _super.call(this, tourService) || this;
        _this.tourStepTemplateService = tourStepTemplateService;
        _this.tourService = tourService;
        return _this;
    }
    /**
     * @return {?}
     */
    TourStepTemplateComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.tourStepTemplateService.template = this.stepTemplate || this.defaultTourStepTemplate;
    };
    TourStepTemplateComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                    selector: 'tour-step-template',
                    template: "\n    <ng-template #tourStep let-step=\"step\">\n      <p class=\"tour-step-content\">{{step?.content}}</p>\n      <div class=\"tour-step-navigation\">\n        <button *ngIf=\"tourService.hasPrev(step)\" class=\"btn btn-sm btn-default\" (click)=\"tourService.prev()\">\u00AB {{step?.prevBtnTitle}}</button>\n        <button *ngIf=\"tourService.hasNext(step)\" class=\"btn btn-sm btn-default\" (click)=\"tourService.next()\">{{step?.nextBtnTitle}} \u00BB</button>\n        <button class=\"btn btn-sm btn-default\" (click)=\"tourService.end()\">{{step?.endBtnTitle}}</button>\n      </div>\n    </ng-template>\n  ",
                },] },
    ];
    /** @nocollapse */
    TourStepTemplateComponent.ctorParameters = function () { return [
        { type: TourStepTemplateService, },
        { type: NgbTourService, },
    ]; };
    TourStepTemplateComponent.propDecorators = {
        "defaultTourStepTemplate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['tourStep', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },] },],
        "stepTemplate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"],] },],
    };
    return TourStepTemplateComponent;
}(ngx_tour_core__WEBPACK_IMPORTED_MODULE_2__["TourHotkeyListenerComponent"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TourNgBootstrapModule = /** @class */ (function () {
    function TourNgBootstrapModule() {
    }
    /**
     * @return {?}
     */
    TourNgBootstrapModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: TourNgBootstrapModule,
            providers: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])([
                TourStepTemplateService
            ], ngx_tour_core__WEBPACK_IMPORTED_MODULE_2__["TourModule"].forRoot().providers, [
                NgbTourService
            ]),
        };
    };
    TourNgBootstrapModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    declarations: [TourAnchorNgBootstrapDirective, TourAnchorNgBootstrapPopoverDirective, TourStepTemplateComponent],
                    exports: [TourAnchorNgBootstrapDirective, TourAnchorNgBootstrapPopoverDirective, TourStepTemplateComponent],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbPopoverModule"].forRoot()],
                },] },
    ];
    return TourNgBootstrapModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRvdXItbmctYm9vdHN0cmFwLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtdG91ci1uZy1ib290c3RyYXAvbGliL25nLWJvb3RzdHJhcC10b3VyLnNlcnZpY2UudHMiLCJuZzovL25neC10b3VyLW5nLWJvb3RzdHJhcC9saWIvdG91ci1zdGVwLXRlbXBsYXRlLnNlcnZpY2UudHMiLCJuZzovL25neC10b3VyLW5nLWJvb3RzdHJhcC9saWIvdG91ci1hbmNob3IuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtdG91ci1uZy1ib290c3RyYXAvbGliL3RvdXItc3RlcC10ZW1wbGF0ZS5jb21wb25lbnQudHMiLCJuZzovL25neC10b3VyLW5nLWJvb3RzdHJhcC9saWIvbmctYm9vdHN0cmFwLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUb3VyU2VydmljZSB9IGZyb20gJ25neC10b3VyLWNvcmUnO1xuXG5pbXBvcnQgeyBJTmdiU3RlcE9wdGlvbiB9IGZyb20gJy4vc3RlcC1vcHRpb24uaW50ZXJmYWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5nYlRvdXJTZXJ2aWNlIGV4dGVuZHMgVG91clNlcnZpY2U8SU5nYlN0ZXBPcHRpb24+IHt9XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVG91clN0ZXBUZW1wbGF0ZVNlcnZpY2Uge1xuICBwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPHtjb250ZW50OiBzdHJpbmd9Pjtcbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdCwgSG9zdEJpbmRpbmcsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdiUG9wb3ZlciwgUGxhY2VtZW50IH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHsgVG91ckFuY2hvckRpcmVjdGl2ZSB9IGZyb20gJ25neC10b3VyLWNvcmUnO1xuaW1wb3J0IHdpdGhpbnZpZXdwb3J0IGZyb20gJ3dpdGhpbnZpZXdwb3J0JztcblxuaW1wb3J0IHsgTmdiVG91clNlcnZpY2UgfSBmcm9tICcuL25nLWJvb3RzdHJhcC10b3VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgSU5nYlN0ZXBPcHRpb24gfSBmcm9tICcuL3N0ZXAtb3B0aW9uLmludGVyZmFjZSc7XG5pbXBvcnQgeyBUb3VyU3RlcFRlbXBsYXRlU2VydmljZSB9IGZyb20gJy4vdG91ci1zdGVwLXRlbXBsYXRlLnNlcnZpY2UnO1xuXG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1t0b3VyQW5jaG9yXScgfSlcbmV4cG9ydCBjbGFzcyBUb3VyQW5jaG9yTmdCb290c3RyYXBQb3BvdmVyRGlyZWN0aXZlIGV4dGVuZHMgTmdiUG9wb3ZlciB7IH1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RvdXJBbmNob3JdJyxcbn0pXG5leHBvcnQgY2xhc3MgVG91ckFuY2hvck5nQm9vdHN0cmFwRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIFRvdXJBbmNob3JEaXJlY3RpdmUge1xuICBASW5wdXQoKSBwdWJsaWMgdG91ckFuY2hvcjogc3RyaW5nO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MudG91cmFuY2hvci0taXMtYWN0aXZlJylcbiAgcHVibGljIGlzQWN0aXZlOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdG91clNlcnZpY2U6IE5nYlRvdXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgdG91clN0ZXBUZW1wbGF0ZTogVG91clN0ZXBUZW1wbGF0ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgIEBIb3N0KCkgcHJpdmF0ZSBwb3BvdmVyRGlyZWN0aXZlOiBUb3VyQW5jaG9yTmdCb290c3RyYXBQb3BvdmVyRGlyZWN0aXZlLFxuICApIHtcblxuICAgIHRoaXMucG9wb3ZlckRpcmVjdGl2ZS50b2dnbGUgPSAoKSA9PiB7IH07XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy50b3VyU2VydmljZS5yZWdpc3Rlcih0aGlzLnRvdXJBbmNob3IsIHRoaXMpO1xuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMudG91clNlcnZpY2UudW5yZWdpc3Rlcih0aGlzLnRvdXJBbmNob3IpO1xuICB9XG5cbiAgcHVibGljIHNob3dUb3VyU3RlcChzdGVwOiBJTmdiU3RlcE9wdGlvbik6IHZvaWQge1xuICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMucG9wb3ZlckRpcmVjdGl2ZS5uZ2JQb3BvdmVyID0gdGhpcy50b3VyU3RlcFRlbXBsYXRlLnRlbXBsYXRlO1xuICAgIHRoaXMucG9wb3ZlckRpcmVjdGl2ZS5wb3BvdmVyVGl0bGUgPSBzdGVwLnRpdGxlO1xuICAgIHRoaXMucG9wb3ZlckRpcmVjdGl2ZS5jb250YWluZXIgPSAgJ2JvZHknO1xuICAgIHRoaXMucG9wb3ZlckRpcmVjdGl2ZS5wbGFjZW1lbnQgPSA8UGxhY2VtZW50PihzdGVwLnBsYWNlbWVudCB8fCAndG9wJylcbiAgICAgIC5yZXBsYWNlKCdiZWZvcmUnLCAnbGVmdCcpLnJlcGxhY2UoJ2FmdGVyJywgJ3JpZ2h0JylcbiAgICAgIC5yZXBsYWNlKCdiZWxvdycsICdib3R0b20nKS5yZXBsYWNlKCdhYm92ZScsICd0b3AnKTtcbiAgICBzdGVwLnByZXZCdG5UaXRsZSA9IHN0ZXAucHJldkJ0blRpdGxlIHx8ICdQcmV2JztcbiAgICBzdGVwLm5leHRCdG5UaXRsZSA9IHN0ZXAubmV4dEJ0blRpdGxlIHx8ICdOZXh0JztcbiAgICBzdGVwLmVuZEJ0blRpdGxlID0gc3RlcC5lbmRCdG5UaXRsZSB8fCAnRW5kJztcblxuICAgIHRoaXMucG9wb3ZlckRpcmVjdGl2ZS5vcGVuKHsgc3RlcCB9KTtcbiAgICBpZiAoIXN0ZXAucHJldmVudFNjcm9sbGluZykge1xuICAgICAgaWYgKCF3aXRoaW52aWV3cG9ydCh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgeyBzaWRlczogJ2JvdHRvbScgfSkpIHtcbiAgICAgICAgKDxIVE1MRWxlbWVudD50aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCkuc2Nyb2xsSW50b1ZpZXcoZmFsc2UpO1xuICAgICAgfSBlbHNlIGlmICghd2l0aGludmlld3BvcnQodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHsgc2lkZXM6ICdsZWZ0IHRvcCByaWdodCcgfSkpIHtcbiAgICAgICAgKDxIVE1MRWxlbWVudD50aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCkuc2Nyb2xsSW50b1ZpZXcodHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGhpZGVUb3VyU3RlcCgpOiB2b2lkIHtcbiAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5wb3BvdmVyRGlyZWN0aXZlLmNsb3NlKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFRvdXJIb3RrZXlMaXN0ZW5lckNvbXBvbmVudCwgSVN0ZXBPcHRpb24gfSBmcm9tICduZ3gtdG91ci1jb3JlJztcbmltcG9ydCB7IFRvdXJTdGVwVGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSAnLi90b3VyLXN0ZXAtdGVtcGxhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBDb21wb25lbnQsIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGQsIEFmdGVyQ29udGVudEluaXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBJbnB1dCwgQ29udGVudENoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2JUb3VyU2VydmljZSB9IGZyb20gJy4vbmctYm9vdHN0cmFwLXRvdXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzZWxlY3RvcjogJ3RvdXItc3RlcC10ZW1wbGF0ZScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlICN0b3VyU3RlcCBsZXQtc3RlcD1cInN0ZXBcIj5cbiAgICAgIDxwIGNsYXNzPVwidG91ci1zdGVwLWNvbnRlbnRcIj57e3N0ZXA/LmNvbnRlbnR9fTwvcD5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0b3VyLXN0ZXAtbmF2aWdhdGlvblwiPlxuICAgICAgICA8YnV0dG9uICpuZ0lmPVwidG91clNlcnZpY2UuaGFzUHJldihzdGVwKVwiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tZGVmYXVsdFwiIChjbGljayk9XCJ0b3VyU2VydmljZS5wcmV2KClcIj7DgsKrIHt7c3RlcD8ucHJldkJ0blRpdGxlfX08L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiAqbmdJZj1cInRvdXJTZXJ2aWNlLmhhc05leHQoc3RlcClcIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLWRlZmF1bHRcIiAoY2xpY2spPVwidG91clNlcnZpY2UubmV4dCgpXCI+e3tzdGVwPy5uZXh0QnRuVGl0bGV9fSDDgsK7PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1kZWZhdWx0XCIgKGNsaWNrKT1cInRvdXJTZXJ2aWNlLmVuZCgpXCI+e3tzdGVwPy5lbmRCdG5UaXRsZX19PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBUb3VyU3RlcFRlbXBsYXRlQ29tcG9uZW50IGV4dGVuZHMgVG91ckhvdGtleUxpc3RlbmVyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIEBWaWV3Q2hpbGQoJ3RvdXJTdGVwJywgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KSBwdWJsaWMgZGVmYXVsdFRvdXJTdGVwVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQElucHV0KClcbiAgQENvbnRlbnRDaGlsZChUZW1wbGF0ZVJlZilcbiAgcHVibGljIHN0ZXBUZW1wbGF0ZTogVGVtcGxhdGVSZWY8eyBzdGVwOiBJU3RlcE9wdGlvbiB9PjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRvdXJTdGVwVGVtcGxhdGVTZXJ2aWNlOiBUb3VyU3RlcFRlbXBsYXRlU2VydmljZSwgcHVibGljIHRvdXJTZXJ2aWNlOiBOZ2JUb3VyU2VydmljZSkge1xuICAgIHN1cGVyKHRvdXJTZXJ2aWNlKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy50b3VyU3RlcFRlbXBsYXRlU2VydmljZS50ZW1wbGF0ZSA9IHRoaXMuc3RlcFRlbXBsYXRlIHx8IHRoaXMuZGVmYXVsdFRvdXJTdGVwVGVtcGxhdGU7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdiUG9wb3Zlck1vZHVsZSB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7IFRvdXJNb2R1bGUgfSBmcm9tICduZ3gtdG91ci1jb3JlJztcblxuaW1wb3J0IHsgTmdiVG91clNlcnZpY2UgfSBmcm9tICcuL25nLWJvb3RzdHJhcC10b3VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgVG91ckFuY2hvck5nQm9vdHN0cmFwRGlyZWN0aXZlLCBUb3VyQW5jaG9yTmdCb290c3RyYXBQb3BvdmVyRGlyZWN0aXZlIH0gZnJvbSAnLi90b3VyLWFuY2hvci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgVG91clN0ZXBUZW1wbGF0ZUNvbXBvbmVudCB9IGZyb20gJy4vdG91ci1zdGVwLXRlbXBsYXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUb3VyU3RlcFRlbXBsYXRlU2VydmljZSB9IGZyb20gJy4vdG91ci1zdGVwLXRlbXBsYXRlLnNlcnZpY2UnO1xuXG5leHBvcnQgeyBUb3VyQW5jaG9yTmdCb290c3RyYXBEaXJlY3RpdmUsIFRvdXJBbmNob3JOZ0Jvb3RzdHJhcFBvcG92ZXJEaXJlY3RpdmUsIFRvdXJTdGVwVGVtcGxhdGVDb21wb25lbnQsIE5nYlRvdXJTZXJ2aWNlIH07XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1RvdXJBbmNob3JOZ0Jvb3RzdHJhcERpcmVjdGl2ZSwgVG91ckFuY2hvck5nQm9vdHN0cmFwUG9wb3ZlckRpcmVjdGl2ZSwgVG91clN0ZXBUZW1wbGF0ZUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtUb3VyQW5jaG9yTmdCb290c3RyYXBEaXJlY3RpdmUsIFRvdXJBbmNob3JOZ0Jvb3RzdHJhcFBvcG92ZXJEaXJlY3RpdmUsIFRvdXJTdGVwVGVtcGxhdGVDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBOZ2JQb3BvdmVyTW9kdWxlLmZvclJvb3QoKV0sXG59KVxuZXhwb3J0IGNsYXNzIFRvdXJOZ0Jvb3RzdHJhcE1vZHVsZSB7XG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFRvdXJOZ0Jvb3RzdHJhcE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBUb3VyU3RlcFRlbXBsYXRlU2VydmljZSxcbiAgICAgICAgLi4uVG91ck1vZHVsZS5mb3JSb290KCkucHJvdmlkZXJzLFxuICAgICAgICBOZ2JUb3VyU2VydmljZVxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXSwibmFtZXMiOlsidHNsaWJfMS5fX2V4dGVuZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQU1vQ0Esa0NBQTJCOzs7OztnQkFEOUQsVUFBVTs7eUJBTFg7RUFNb0MsV0FBVzs7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

/***/ }),

/***/ "./node_modules/withinviewport/withinviewport.js":
/*!*******************************************************!*\
  !*** ./node_modules/withinviewport/withinviewport.js ***!
  \*******************************************************/
/*! no static exports found */
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
    else {}
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

/***/ "./src/app/ng-bootstrap/docs.component.html":
/*!**************************************************!*\
  !*** ./src/app/ng-bootstrap/docs.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>About</h2>\n<p>This is a product tour library built with Angular (2+). It's inspired by\n  <a tourAnchor=\"angular-ui-tour\" href=\"http://benmarch.github.io/angular-ui-tour\">angular-ui-tour</a>.</p>\n<p>\n  <code>TourNgBootstrapModule</code> is an implementation of the tour ui that uses\n  <a href=\"https://ng-bootstrap.github.io\">NgBootstrap</a> popovers to display tour steps.</p>\n\n<h2 tourAnchor=\"installation\">Installation</h2>\n<ol>\n  <li>\n    <code>npm install ngx-tour-core ngx-tour-ng-bootstrap @ng-bootstrap/ng-bootstrap</code>\n  </li>\n  <li>Import\n    <code>TourNgBootstrapModule.forRoot()</code> into your app module</li>\n  <li>Make sure\n    <code>RouterModule</code> is imported in your app module</li>\n  <li>Include bootstrap css somehow - i.e. in your\n    <code>index.html</code> add this line:\n    <br>\n    <code>&lt;link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css\" integrity=\"sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M\" crossorigin=\"anonymous\"&gt;</code>\n  </li>\n</ol>\n\n<h2 tourAnchor=\"usage\">Usage</h2>\n<ol>\n  <li>Add\n    <code>&lt;tour-step-template&gt;&lt;/tour-step-template&gt;</code> to your root app component</li>\n  <li>\n    Define anchor points for the tour steps by adding the\n    <code>tourAnchor</code> directive throughout your app.\n    <pre><code>&lt;div tourAnchor=\"some.anchor.id\"&gt;...&lt;/div&gt;</code></pre>\n  </li>\n  <li>\n    Define your tour steps using\n    <code>tourService.initialize(steps)</code>\n    <pre>\nthis.tourService.initialize([{{ '{' }}\n  anchorId: 'some.anchor.id',\n  content: 'Some content',\n  title: 'First',\n}, {{ '{' }}\n  anchorId: 'another.anchor.id',\n  content: 'Other content',\n  title: 'Second',\n}]);</pre>\n  </li>\n  <li>Start the tour with\n    <code tourAnchor=\"tourService.start\">tourService.start()</code>\n  </li>\n  <li>Check out the\n    <a href=\"https://github.com/isaacplmann/ngx-tour/tree/master/src/app/ng-bootstrap\">demo source code</a> for an example.</li>\n</ol>\n\n<h2>TourService</h2>\n<p>The\n  <code>TourService</code> controls the tour. Some key functions include:</p>\n<dl>\n  <dt>start()</dt>\n  <dd>Starts the tour</dd>\n  <dt>startAt(stepId: number | string)</dt>\n  <dd>Start the tour at the step with stepId or at the specified index</dd>\n  <dt>end()</dt>\n  <dd>Ends the tour</dd>\n  <dt>pause()</dt>\n  <dd>Pauses the tour</dd>\n  <dt>resume()</dt>\n  <dd>Resumes the tour</dd>\n  <dt>next()</dt>\n  <dd>Goes to the next step</dd>\n  <dt>prev()</dt>\n  <dd>Goes to the previous step</dd>\n</dl>\n\n<h2>Step Configuration</h2>\n<p>Each step can have the following properties.</p>\n<table class=\"table\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Type</th>\n      <th>Default</th>\n      <th>Description</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>stepId</td>\n      <td>string</td>\n      <td>\"\"</td>\n      <td>A unique identifier for the step</td>\n    </tr>\n    <tr tourAnchor=\"config.anchorId\">\n      <td>anchorId</td>\n      <td>string</td>\n      <td>required</td>\n      <td>The anchor to which the step will be attached</td>\n    </tr>\n    <tr>\n      <td>title</td>\n      <td>string</td>\n      <td>\"\"</td>\n      <td>The title of the tour step</td>\n    </tr>\n    <tr>\n      <td>content</td>\n      <td>string</td>\n      <td>\"\"</td>\n      <td>The content text of the tour step</td>\n    </tr>\n    <tr tourAnchor=\"config.route\">\n      <td>route</td>\n      <td>string | UrlSegment[]</td>\n      <td>undefined</td>\n      <td>\n        The route to which the tour should navigate before attempting to show this tour step. If undefined, no navigation is attempted.\n      </td>\n    </tr>\n    <tr tourAnchor=\"config.nextStep\">\n      <td>nextStep</td>\n      <td>number | string</td>\n      <td>undefined</td>\n      <td>The step index or stepId of the next step. If undefined, the next step in the steps array is used.</td>\n    </tr>\n    <tr>\n      <td>prevStep</td>\n      <td>number | string</td>\n      <td>undefined</td>\n      <td>The step index or stepId of the previous step. If undefined, the previous step in the steps array is used.</td>\n    </tr>\n    <tr>\n      <td>placement</td>\n      <td>Placement of a popover accepts: \"top\", \"top-left\", \"top-right\", \"bottom\", \"bottom-left\", \"bottom-right\", \"left\", \"left-top\",\n        \"left-bottom\", \"right\", \"right-top\", \"right-bottom\" and array of above values.</td>\n      <td>\n        <span tourAnchor=\"config.placement.default\">'top'</span>\n      </td>\n      <td>\n        Where the tour step should placed with respect to the anchor. Supports all\n        <a href=\"https://ng-bootstrap.github.io/#/components/popover/api#NgbPopover\">placement options of ng bootstrap</a>.\n      </td>\n    </tr>\n    <tr>\n      <td>preventScrolling</td>\n      <td>boolean</td>\n      <td>false</td>\n      <td>\n        Tour steps automatically scroll to the middle of the screen, if they are off the screen when shown. Setting this value to\n        true will disable the scroll behavior.\n      </td>\n    </tr>\n    <tr tourAnchor=\"config.buttons.custom\">\n      <td>prevBtnTitle</td>\n      <td>string</td>\n      <td>false</td>\n      <td>\n        Sets a custom prev button title for a given step. Default is \"Prev\"\n      </td>\n    </tr>\n    <tr>\n      <td>nextBtnTitle</td>\n      <td>string</td>\n      <td>false</td>\n      <td>\n        Sets a custom next button title for a given step. Default is \"Next\"\n      </td>\n    </tr>\n    <tr>\n      <td>endBtnTitle</td>\n      <td>string</td>\n      <td>false</td>\n      <td>\n        Sets a custom end button title for a given step. Default is \"End\"\n      </td>\n    </tr>\n  </tbody>\n</table>\n\n<h2>Defaults</h2>\n<p>You can set default values in the\n  <code>TourService.initialize</code> function.</p>\n<pre>\nthis.tourService.initialize(steps, {{ '{' }}\n  route: '',\n  placement: 'left',\n  preventScrolling: true,\n});\n</pre>\n<p>Any value explicitly defined in a step will override the default value.</p>\n\n<h2 tourAnchor=\"hotkeys\">Hotkeys</h2>\n<p>\n  Hotkeys are provided using Angular's\n  <code>@HostListener</code> decorator. Hotkeys are enabled when the tour starts and disabled when the tour ends.\n</p>\n<ul>\n  <li>\n    <strong>left arrow</strong>\n    <span> - previous step</span>\n  </li>\n  <li>\n    <strong>right arrow</strong>\n    <span> - next step</span>\n  </li>\n  <li>\n    <strong>esc</strong>\n    <span> - end tour</span>\n  </li>\n</ul>\n<p>\n  You can disable hotkeys by calling\n  <code>tourService.disableHotkeys()</code> or re-enable with\n  <code>tourService.enableHotkeys()</code>\n</p>\n\n<h2 tourAnchor=\"events\">Event Observables</h2>\n<p>The\n  <code>TourService</code> emits events that can be subscribed to like this:</p>\n<pre>\nthis.tourService.initialize$.subscribe((steps: IStepOption[]) => {{ '{' }}\n  console.log('tour configured with these steps:', steps);\n});\n</pre>\n<table class=\"table\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Payload</th>\n      <th>Emitted When</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>stepShow$</td>\n      <td>IStepOption</td>\n      <td>A step is shown</td>\n    </tr>\n    <tr>\n      <td>stepHide$</td>\n      <td>IStepOption</td>\n      <td>A step is hidden</td>\n    </tr>\n    <tr>\n      <td>initialize$</td>\n      <td>IStepOption[]</td>\n      <td>The tour is configured with a set of steps</td>\n    </tr>\n    <tr>\n      <td>start$</td>\n      <td>IStepOption</td>\n      <td>The tour begins</td>\n    </tr>\n    <tr>\n      <td>end$</td>\n      <td>any</td>\n      <td>The tour ends</td>\n    </tr>\n    <tr>\n      <td>pause$</td>\n      <td>IStepOption</td>\n      <td>The tour is paused</td>\n    </tr>\n    <tr>\n      <td>resume$</td>\n      <td>IStepOption</td>\n      <td>The tour resumes</td>\n    </tr>\n    <tr>\n      <td>anchorRegister$</td>\n      <td>string</td>\n      <td>An anchor is registered with the tour</td>\n    </tr>\n    <tr>\n      <td>anchorUnregister$</td>\n      <td>string</td>\n      <td>An anchor is unregistered from the tour</td>\n    </tr>\n  </tbody>\n</table>\n\n<h2 tourAnchor=\"template\">Custom template</h2>\n<p>\n  You can also customize the tour step template by providing an\n  <code>&lt;ng-template let-step=\"step\" &gt;</code> inside the\n  <code>&lt;tour-step-template&gt;</code>\n</p>\n<p>\n  The default template is equivalent to this:\n</p>\n<pre><code>&lt;tour-step-template&gt;\n  &lt;ng-template let-step=\"step\"&gt;\n    &lt;p class=\"tour-step-content\"&gt;{{ '{{' }}step?.content}}&lt;/p&gt;\n    &lt;div class=\"tour-step-navigation\"&gt;\n      &lt;button *ngIf=\"tourService.hasPrev(step)\" class=\"btn btn-sm btn-default\" (click)=\"tourService.prev()\"&gt;« {{ '{{' }}step?.prevBtnTitle}}&lt;/button&gt;\n      &lt;button *ngIf=\"tourService.hasNext(step)\" class=\"btn btn-sm btn-default\" (click)=\"tourService.next()\"&gt;{{ '{{' }}step?.nextBtnTitle}} »&lt;/button&gt;\n      &lt;button class=\"btn btn-sm btn-default\" (click)=\"tourService.end()\"&gt;{{ '{{' }}step?.endBtnTitle}}&lt;/button&gt;\n    &lt;/div&gt;\n  &lt;/ng-template&gt;\n&lt;/tour-step-template&gt;\n</code></pre>\n\n<h2>Styling Active Tour Anchor</h2>\n<p>\n  The currently active tour anchor element has a\n  <code>touranchor--is-active</code> class applied to it, so you can apply your own custom styles to that class to highlight the element being referenced.\n</p>"

/***/ }),

/***/ "./src/app/ng-bootstrap/docs.component.ts":
/*!************************************************!*\
  !*** ./src/app/ng-bootstrap/docs.component.ts ***!
  \************************************************/
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
            template: __webpack_require__(/*! ./docs.component.html */ "./src/app/ng-bootstrap/docs.component.html"),
        })
    ], DocsComponent);
    return DocsComponent;
}());



/***/ }),

/***/ "./src/app/ng-bootstrap/ng-bootstrap.component.html":
/*!**********************************************************!*\
  !*** ./src/app/ng-bootstrap/ng-bootstrap.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a href=\"https://github.com/isaacplmann/ng2-tour\" class=\"btn btn-default\">View on GitHub</a>\n<a style=\"cursor: pointer\" (click)=\"tourService.toggle()\" class=\"btn btn-primary\" tourAnchor=\"start.tour\">Start Demo Tour</a>\n\n<router-outlet></router-outlet>\n<tour-step-template>\n  <!-- <ng-template #jsonTemplate let-step=\"step\">\n      {{ step | json }}\n  </ng-template> -->\n</tour-step-template>\n"

/***/ }),

/***/ "./src/app/ng-bootstrap/ng-bootstrap.component.ts":
/*!********************************************************!*\
  !*** ./src/app/ng-bootstrap/ng-bootstrap.component.ts ***!
  \********************************************************/
/*! exports provided: NgBootstrapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgBootstrapComponent", function() { return NgBootstrapComponent; });
/* harmony import */ var ngx_tour_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-tour-ng-bootstrap */ "./dist/ngx-tour-ng-bootstrap/fesm5/ngx-tour-ng-bootstrap.js");
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
            route: 'ng-bootstrap',
        });
        this.tourService.start();
    }
    NgBootstrapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'ng-bootstrap-route',
            template: __webpack_require__(/*! ./ng-bootstrap.component.html */ "./src/app/ng-bootstrap/ng-bootstrap.component.html"),
        }),
        __metadata("design:paramtypes", [ngx_tour_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["TourService"]])
    ], NgBootstrapComponent);
    return NgBootstrapComponent;
}());



/***/ }),

/***/ "./src/app/ng-bootstrap/ng-bootstrap.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/ng-bootstrap/ng-bootstrap.module.ts ***!
  \*****************************************************/
/*! exports provided: NgBootstrapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgBootstrapModule", function() { return NgBootstrapModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_tour_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-tour-ng-bootstrap */ "./dist/ngx-tour-ng-bootstrap/fesm5/ngx-tour-ng-bootstrap.js");
/* harmony import */ var _docs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./docs.component */ "./src/app/ng-bootstrap/docs.component.ts");
/* harmony import */ var _ng_bootstrap_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ng-bootstrap.component */ "./src/app/ng-bootstrap/ng-bootstrap.component.ts");
/* harmony import */ var _other_route_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./other-route.component */ "./src/app/ng-bootstrap/other-route.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var NgBootstrapModule = /** @class */ (function () {
    function NgBootstrapModule() {
    }
    NgBootstrapModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_ng_bootstrap_component__WEBPACK_IMPORTED_MODULE_5__["NgBootstrapComponent"], _docs_component__WEBPACK_IMPORTED_MODULE_4__["DocsComponent"], _other_route_component__WEBPACK_IMPORTED_MODULE_6__["OtherRouteComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
                        component: _ng_bootstrap_component__WEBPACK_IMPORTED_MODULE_5__["NgBootstrapComponent"],
                        path: '',
                        children: [{
                                component: _docs_component__WEBPACK_IMPORTED_MODULE_4__["DocsComponent"],
                                path: '',
                            }, {
                                component: _other_route_component__WEBPACK_IMPORTED_MODULE_6__["OtherRouteComponent"],
                                path: 'other',
                            }]
                    }]),
                ngx_tour_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["TourNgBootstrapModule"].forRoot(),
            ],
        })
    ], NgBootstrapModule);
    return NgBootstrapModule;
}());



/***/ }),

/***/ "./src/app/ng-bootstrap/other-route.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/ng-bootstrap/other-route.component.ts ***!
  \*******************************************************/
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
//# sourceMappingURL=ng-bootstrap-ng-bootstrap-module.js.map