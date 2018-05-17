(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["console-console-module~ng-bootstrap-ng-bootstrap-module"],{

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/accordion/accordion-config.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/accordion/accordion-config.js ***!
  \*******************************************************************************/
/*! exports provided: NgbAccordionConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbAccordionConfig", function() { return NgbAccordionConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/**
 * Configuration service for the NgbAccordion component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the accordions used in the application.
 */
var NgbAccordionConfig = /** @class */ (function () {
    function NgbAccordionConfig() {
        this.closeOthers = false;
    }
    NgbAccordionConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return NgbAccordionConfig;
}());

//# sourceMappingURL=accordion-config.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/accordion/accordion.js":
/*!************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/accordion/accordion.js ***!
  \************************************************************************/
/*! exports provided: NgbPanelTitle, NgbPanelContent, NgbPanel, NgbAccordion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPanelTitle", function() { return NgbPanelTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPanelContent", function() { return NgbPanelContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPanel", function() { return NgbPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbAccordion", function() { return NgbAccordion; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/util */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/util.js");
/* harmony import */ var _accordion_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordion-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/accordion/accordion-config.js");



var nextId = 0;
/**
 * This directive should be used to wrap accordion panel titles that need to contain HTML markup or other directives.
 */
var NgbPanelTitle = /** @class */ (function () {
    function NgbPanelTitle(templateRef) {
        this.templateRef = templateRef;
    }
    NgbPanelTitle.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'ng-template[ngbPanelTitle]' },] },
    ];
    /** @nocollapse */
    NgbPanelTitle.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], },
    ]; };
    return NgbPanelTitle;
}());

/**
 * This directive must be used to wrap accordion panel content.
 */
var NgbPanelContent = /** @class */ (function () {
    function NgbPanelContent(templateRef) {
        this.templateRef = templateRef;
    }
    NgbPanelContent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'ng-template[ngbPanelContent]' },] },
    ];
    /** @nocollapse */
    NgbPanelContent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], },
    ]; };
    return NgbPanelContent;
}());

/**
 * The NgbPanel directive represents an individual panel with the title and collapsible
 * content
 */
var NgbPanel = /** @class */ (function () {
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
        /**
           * A flag telling if the panel is currently open
           */
        this.isOpen = false;
    }
    NgbPanel.prototype.ngAfterContentChecked = function () {
        // We are using @ContentChildren instead of @ContantChild as in the Angular version being used
        // only @ContentChildren allows us to specify the {descendants: false} option.
        // Without {descendants: false} we are hitting bugs described in:
        // https://github.com/ng-bootstrap/ng-bootstrap/issues/2240
        this.titleTpl = this.titleTpls.first;
        this.contentTpl = this.contentTpls.first;
    };
    NgbPanel.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'ngb-panel' },] },
    ];
    /** @nocollapse */
    NgbPanel.propDecorators = {
        "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "id": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "title": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "type": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "titleTpls": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [NgbPanelTitle, { descendants: false },] },],
        "contentTpls": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [NgbPanelContent, { descendants: false },] },],
    };
    return NgbPanel;
}());

/**
 * The NgbAccordion directive is a collection of panels.
 * It can assure that only one panel can be opened at a time.
 */
var NgbAccordion = /** @class */ (function () {
    function NgbAccordion(config) {
        /**
           * An array or comma separated strings of panel identifiers that should be opened
           */
        this.activeIds = [];
        /**
           * Whether the closed panels should be hidden without destroying them
           */
        this.destroyOnHide = true;
        /**
           * A panel change event fired right before the panel toggle happens. See NgbPanelChangeEvent for payload details
           */
        this.panelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.type = config.type;
        this.closeOtherPanels = config.closeOthers;
    }
    /**
     * Programmatically toggle a panel with a given id.
     */
    /**
       * Programmatically toggle a panel with a given id.
       */
    NgbAccordion.prototype.toggle = /**
       * Programmatically toggle a panel with a given id.
       */
    function (panelId) {
        var panel = this.panels.find(function (p) { return p.id === panelId; });
        if (panel && !panel.disabled) {
            var defaultPrevented_1 = false;
            this.panelChange.emit({ panelId: panelId, nextState: !panel.isOpen, preventDefault: function () { defaultPrevented_1 = true; } });
            if (!defaultPrevented_1) {
                panel.isOpen = !panel.isOpen;
                if (this.closeOtherPanels) {
                    this._closeOthers(panelId);
                }
                this._updateActiveIds();
            }
        }
    };
    NgbAccordion.prototype.ngAfterContentChecked = function () {
        var _this = this;
        // active id updates
        if (Object(_util_util__WEBPACK_IMPORTED_MODULE_1__["isString"])(this.activeIds)) {
            this.activeIds = this.activeIds.split(/\s*,\s*/);
        }
        // update panels open states
        this.panels.forEach(function (panel) { return panel.isOpen = !panel.disabled && _this.activeIds.indexOf(panel.id) > -1; });
        // closeOthers updates
        if (this.activeIds.length > 1 && this.closeOtherPanels) {
            this._closeOthers(this.activeIds[0]);
            this._updateActiveIds();
        }
    };
    NgbAccordion.prototype._closeOthers = function (panelId) {
        this.panels.forEach(function (panel) {
            if (panel.id !== panelId) {
                panel.isOpen = false;
            }
        });
    };
    NgbAccordion.prototype._updateActiveIds = function () {
        this.activeIds = this.panels.filter(function (panel) { return panel.isOpen && !panel.disabled; }).map(function (panel) { return panel.id; });
    };
    NgbAccordion.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngb-accordion',
                    exportAs: 'ngbAccordion',
                    host: { 'class': 'accordion', 'role': 'tablist', '[attr.aria-multiselectable]': '!closeOtherPanels' },
                    template: "\n    <ng-template ngFor let-panel [ngForOf]=\"panels\">\n      <div class=\"card\">\n        <div role=\"tab\" id=\"{{panel.id}}-header\" [class]=\"'card-header ' + (panel.type ? 'bg-'+panel.type: type ? 'bg-'+type : '')\">\n          <a href (click)=\"!!toggle(panel.id)\" [class.text-muted]=\"panel.disabled\" [attr.tabindex]=\"(panel.disabled ? '-1' : null)\"\n            [attr.aria-expanded]=\"panel.isOpen\" [attr.aria-controls]=\"(panel.isOpen ? panel.id : null)\"\n            [attr.aria-disabled]=\"panel.disabled\">\n            {{panel.title}}<ng-template [ngTemplateOutlet]=\"panel.titleTpl?.templateRef\"></ng-template>\n          </a>\n        </div>\n        <div id=\"{{panel.id}}\" role=\"tabpanel\" [attr.aria-labelledby]=\"panel.id + '-header'\"\n             class=\"card-body collapse {{panel.isOpen ? 'show' : null}}\" *ngIf=\"!destroyOnHide || panel.isOpen\">\n             <ng-template [ngTemplateOutlet]=\"panel.contentTpl?.templateRef\"></ng-template>\n        </div>\n      </div>\n    </ng-template>\n  "
                },] },
    ];
    /** @nocollapse */
    NgbAccordion.ctorParameters = function () { return [
        { type: _accordion_config__WEBPACK_IMPORTED_MODULE_2__["NgbAccordionConfig"], },
    ]; };
    NgbAccordion.propDecorators = {
        "panels": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [NgbPanel,] },],
        "activeIds": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "closeOtherPanels": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['closeOthers',] },],
        "destroyOnHide": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "type": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "panelChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return NgbAccordion;
}());

//# sourceMappingURL=accordion.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/accordion/accordion.module.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/accordion/accordion.module.js ***!
  \*******************************************************************************/
/*! exports provided: NgbAccordion, NgbPanel, NgbPanelTitle, NgbPanelContent, NgbAccordionConfig, NgbAccordionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbAccordionModule", function() { return NgbAccordionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordion */ "./node_modules/@ng-bootstrap/ng-bootstrap/accordion/accordion.js");
/* harmony import */ var _accordion_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accordion-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/accordion/accordion-config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbAccordion", function() { return _accordion__WEBPACK_IMPORTED_MODULE_2__["NgbAccordion"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbPanel", function() { return _accordion__WEBPACK_IMPORTED_MODULE_2__["NgbPanel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbPanelTitle", function() { return _accordion__WEBPACK_IMPORTED_MODULE_2__["NgbPanelTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbPanelContent", function() { return _accordion__WEBPACK_IMPORTED_MODULE_2__["NgbPanelContent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbAccordionConfig", function() { return _accordion_config__WEBPACK_IMPORTED_MODULE_3__["NgbAccordionConfig"]; });







var NGB_ACCORDION_DIRECTIVES = [_accordion__WEBPACK_IMPORTED_MODULE_2__["NgbAccordion"], _accordion__WEBPACK_IMPORTED_MODULE_2__["NgbPanel"], _accordion__WEBPACK_IMPORTED_MODULE_2__["NgbPanelTitle"], _accordion__WEBPACK_IMPORTED_MODULE_2__["NgbPanelContent"]];
var NgbAccordionModule = /** @class */ (function () {
    function NgbAccordionModule() {
    }
    NgbAccordionModule.forRoot = function () { return { ngModule: NgbAccordionModule, providers: [_accordion_config__WEBPACK_IMPORTED_MODULE_3__["NgbAccordionConfig"]] }; };
    NgbAccordionModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{ declarations: NGB_ACCORDION_DIRECTIVES, exports: NGB_ACCORDION_DIRECTIVES, imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] },] },
    ];
    return NgbAccordionModule;
}());

//# sourceMappingURL=accordion.module.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/alert/alert-config.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/alert/alert-config.js ***!
  \***********************************************************************/
/*! exports provided: NgbAlertConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbAlertConfig", function() { return NgbAlertConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/**
 * Configuration service for the NgbAlert component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the alerts used in the application.
 */
var NgbAlertConfig = /** @class */ (function () {
    function NgbAlertConfig() {
        this.dismissible = true;
        this.type = 'warning';
    }
    NgbAlertConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return NgbAlertConfig;
}());

//# sourceMappingURL=alert-config.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/alert/alert.js":
/*!****************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/alert/alert.js ***!
  \****************************************************************/
/*! exports provided: NgbAlert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbAlert", function() { return NgbAlert; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _alert_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/alert/alert-config.js");


/**
 * Alerts can be used to provide feedback messages.
 */
var NgbAlert = /** @class */ (function () {
    function NgbAlert(config) {
        /**
           * An event emitted when the close button is clicked. This event has no payload. Only relevant for dismissible alerts.
           */
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dismissible = config.dismissible;
        this.type = config.type;
    }
    NgbAlert.prototype.closeHandler = function () { this.close.emit(null); };
    NgbAlert.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngb-alert',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    template: "\n    <div [class]=\"'alert alert-' + type + (dismissible ? ' alert-dismissible' : '')\" role=\"alert\">\n      <button *ngIf=\"dismissible\" type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeHandler()\">\n            <span aria-hidden=\"true\">&times;</span>\n      </button>\n      <ng-content></ng-content>\n    </div>\n    "
                },] },
    ];
    /** @nocollapse */
    NgbAlert.ctorParameters = function () { return [
        { type: _alert_config__WEBPACK_IMPORTED_MODULE_1__["NgbAlertConfig"], },
    ]; };
    NgbAlert.propDecorators = {
        "dismissible": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "type": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "close": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return NgbAlert;
}());

//# sourceMappingURL=alert.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/alert/alert.module.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/alert/alert.module.js ***!
  \***********************************************************************/
/*! exports provided: NgbAlert, NgbAlertConfig, NgbAlertModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbAlertModule", function() { return NgbAlertModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert */ "./node_modules/@ng-bootstrap/ng-bootstrap/alert/alert.js");
/* harmony import */ var _alert_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/alert/alert-config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbAlert", function() { return _alert__WEBPACK_IMPORTED_MODULE_2__["NgbAlert"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbAlertConfig", function() { return _alert_config__WEBPACK_IMPORTED_MODULE_3__["NgbAlertConfig"]; });







var NgbAlertModule = /** @class */ (function () {
    function NgbAlertModule() {
    }
    NgbAlertModule.forRoot = function () { return { ngModule: NgbAlertModule, providers: [_alert_config__WEBPACK_IMPORTED_MODULE_3__["NgbAlertConfig"]] }; };
    NgbAlertModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{ declarations: [_alert__WEBPACK_IMPORTED_MODULE_2__["NgbAlert"]], exports: [_alert__WEBPACK_IMPORTED_MODULE_2__["NgbAlert"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], entryComponents: [_alert__WEBPACK_IMPORTED_MODULE_2__["NgbAlert"]] },] },
    ];
    return NgbAlertModule;
}());

//# sourceMappingURL=alert.module.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/buttons/buttons.module.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/buttons/buttons.module.js ***!
  \***************************************************************************/
/*! exports provided: NgbButtonLabel, NgbCheckBox, NgbRadio, NgbRadioGroup, NgbButtonsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbButtonsModule", function() { return NgbButtonsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./label */ "./node_modules/@ng-bootstrap/ng-bootstrap/buttons/label.js");
/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkbox */ "./node_modules/@ng-bootstrap/ng-bootstrap/buttons/checkbox.js");
/* harmony import */ var _radio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./radio */ "./node_modules/@ng-bootstrap/ng-bootstrap/buttons/radio.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbButtonLabel", function() { return _label__WEBPACK_IMPORTED_MODULE_1__["NgbButtonLabel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbCheckBox", function() { return _checkbox__WEBPACK_IMPORTED_MODULE_2__["NgbCheckBox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbRadio", function() { return _radio__WEBPACK_IMPORTED_MODULE_3__["NgbRadio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbRadioGroup", function() { return _radio__WEBPACK_IMPORTED_MODULE_3__["NgbRadioGroup"]; });








var NGB_BUTTON_DIRECTIVES = [_label__WEBPACK_IMPORTED_MODULE_1__["NgbButtonLabel"], _checkbox__WEBPACK_IMPORTED_MODULE_2__["NgbCheckBox"], _radio__WEBPACK_IMPORTED_MODULE_3__["NgbRadioGroup"], _radio__WEBPACK_IMPORTED_MODULE_3__["NgbRadio"]];
var NgbButtonsModule = /** @class */ (function () {
    function NgbButtonsModule() {
    }
    NgbButtonsModule.forRoot = function () { return { ngModule: NgbButtonsModule, providers: [] }; };
    NgbButtonsModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{ declarations: NGB_BUTTON_DIRECTIVES, exports: NGB_BUTTON_DIRECTIVES },] },
    ];
    return NgbButtonsModule;
}());

//# sourceMappingURL=buttons.module.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/buttons/checkbox.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/buttons/checkbox.js ***!
  \*********************************************************************/
/*! exports provided: NgbCheckBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbCheckBox", function() { return NgbCheckBox; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./label */ "./node_modules/@ng-bootstrap/ng-bootstrap/buttons/label.js");



var NGB_CHECKBOX_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return NgbCheckBox; }),
    multi: true
};
/**
 * Easily create Bootstrap-style checkbox buttons. A value of a checked button is bound to a variable
 * specified via ngModel.
 */
var NgbCheckBox = /** @class */ (function () {
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
    NgbCheckBox.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
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
    NgbCheckBox.ctorParameters = function () { return [
        { type: _label__WEBPACK_IMPORTED_MODULE_2__["NgbButtonLabel"], },
    ]; };
    NgbCheckBox.propDecorators = {
        "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "valueChecked": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "valueUnChecked": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return NgbCheckBox;
}());

//# sourceMappingURL=checkbox.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/buttons/label.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/buttons/label.js ***!
  \******************************************************************/
/*! exports provided: NgbButtonLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbButtonLabel", function() { return NgbButtonLabel; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var NgbButtonLabel = /** @class */ (function () {
    function NgbButtonLabel() {
    }
    NgbButtonLabel.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[ngbButtonLabel]',
                    host: { '[class.btn]': 'true', '[class.active]': 'active', '[class.disabled]': 'disabled', '[class.focus]': 'focused' }
                },] },
    ];
    return NgbButtonLabel;
}());

//# sourceMappingURL=label.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/buttons/radio.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/buttons/radio.js ***!
  \******************************************************************/
/*! exports provided: NgbRadioGroup, NgbRadio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbRadioGroup", function() { return NgbRadioGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbRadio", function() { return NgbRadio; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./label */ "./node_modules/@ng-bootstrap/ng-bootstrap/buttons/label.js");



var NGB_RADIO_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return NgbRadioGroup; }),
    multi: true
};
var nextId = 0;
/**
 * Easily create Bootstrap-style radio buttons. A value of a selected button is bound to a variable
 * specified via ngModel.
 */
var NgbRadioGroup = /** @class */ (function () {
    function NgbRadioGroup() {
        this._radios = new Set();
        this._value = null;
        /**
           * The name of the group. Unless enclosed inputs specify a name, this name is used as the name of the
           * enclosed inputs. If not specified, a name is generated automatically.
           */
        this.name = "ngb-radio-" + nextId++;
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
    NgbRadioGroup.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ngbRadioGroup]', host: { 'role': 'group' }, providers: [NGB_RADIO_VALUE_ACCESSOR] },] },
    ];
    /** @nocollapse */
    NgbRadioGroup.propDecorators = {
        "name": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return NgbRadioGroup;
}());

/**
 * Marks an input of type "radio" as part of the NgbRadioGroup.
 */
var NgbRadio = /** @class */ (function () {
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
        set: /**
           * You can specify model value of a given radio by binding to the value property.
           */
        function (value) {
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
        set: /**
           * A flag indicating if a given radio button is disabled.
           */
        function (isDisabled) {
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
            if (!isFocused) {
                this._group.onTouched();
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
    Object.defineProperty(NgbRadio.prototype, "nameAttr", {
        get: function () { return this.name || this._group.name; },
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
    NgbRadio.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[ngbButton][type=radio]',
                    host: {
                        '[checked]': 'checked',
                        '[disabled]': 'disabled',
                        '[name]': 'nameAttr',
                        '(change)': 'onChange()',
                        '(focus)': 'focused = true',
                        '(blur)': 'focused = false'
                    }
                },] },
    ];
    /** @nocollapse */
    NgbRadio.ctorParameters = function () { return [
        { type: NgbRadioGroup, },
        { type: _label__WEBPACK_IMPORTED_MODULE_2__["NgbButtonLabel"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    ]; };
    NgbRadio.propDecorators = {
        "name": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "value": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['value',] },],
        "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['disabled',] },],
    };
    return NgbRadio;
}());

//# sourceMappingURL=radio.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/carousel/carousel-config.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/carousel/carousel-config.js ***!
  \*****************************************************************************/
/*! exports provided: NgbCarouselConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbCarouselConfig", function() { return NgbCarouselConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/**
 * Configuration service for the NgbCarousel component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the carousels used in the application.
 */
var NgbCarouselConfig = /** @class */ (function () {
    function NgbCarouselConfig() {
        this.interval = 5000;
        this.wrap = true;
        this.keyboard = true;
    }
    NgbCarouselConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return NgbCarouselConfig;
}());

//# sourceMappingURL=carousel-config.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/carousel/carousel.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/carousel/carousel.js ***!
  \**********************************************************************/
/*! exports provided: NgbSlide, NgbCarousel, NgbSlideEventDirection, NGB_CAROUSEL_DIRECTIVES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbSlide", function() { return NgbSlide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbCarousel", function() { return NgbCarousel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbSlideEventDirection", function() { return NgbSlideEventDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NGB_CAROUSEL_DIRECTIVES", function() { return NGB_CAROUSEL_DIRECTIVES; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _carousel_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carousel-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/carousel/carousel-config.js");


var nextId = 0;
/**
 * Represents an individual slide to be used within a carousel.
 */
var NgbSlide = /** @class */ (function () {
    function NgbSlide(tplRef) {
        this.tplRef = tplRef;
        /**
           * Unique slide identifier. Must be unique for the entire document for proper accessibility support.
           * Will be auto-generated if not provided.
           */
        this.id = "ngb-slide-" + nextId++;
    }
    NgbSlide.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'ng-template[ngbSlide]' },] },
    ];
    /** @nocollapse */
    NgbSlide.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], },
    ]; };
    NgbSlide.propDecorators = {
        "id": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return NgbSlide;
}());

/**
 * Directive to easily create carousels based on Bootstrap's markup.
 */
var NgbCarousel = /** @class */ (function () {
    function NgbCarousel(config) {
        /**
           * A carousel slide event fired when the slide transition is completed.
           * See NgbSlideEvent for payload details
           */
        this.slide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.interval = config.interval;
        this.wrap = config.wrap;
        this.keyboard = config.keyboard;
    }
    NgbCarousel.prototype.ngAfterContentChecked = function () {
        var activeSlide = this._getSlideById(this.activeId);
        this.activeId = activeSlide ? activeSlide.id : (this.slides.length ? this.slides.first.id : null);
    };
    NgbCarousel.prototype.ngOnInit = function () { this._startTimer(); };
    NgbCarousel.prototype.ngOnChanges = function (changes) {
        if ('interval' in changes && !changes['interval'].isFirstChange()) {
            this._restartTimer();
        }
    };
    NgbCarousel.prototype.ngOnDestroy = function () { clearInterval(this._slideChangeInterval); };
    /**
     * Navigate to a slide with the specified identifier.
     */
    /**
       * Navigate to a slide with the specified identifier.
       */
    NgbCarousel.prototype.select = /**
       * Navigate to a slide with the specified identifier.
       */
    function (slideId) {
        this.cycleToSelected(slideId, this.getSlideEventDirection(this.activeId, slideId));
        this._restartTimer();
    };
    /**
     * Navigate to the next slide.
     */
    /**
       * Navigate to the next slide.
       */
    NgbCarousel.prototype.prev = /**
       * Navigate to the next slide.
       */
    function () {
        this.cycleToPrev();
        this._restartTimer();
    };
    /**
     * Navigate to the next slide.
     */
    /**
       * Navigate to the next slide.
       */
    NgbCarousel.prototype.next = /**
       * Navigate to the next slide.
       */
    function () {
        this.cycleToNext();
        this._restartTimer();
    };
    /**
     * Stops the carousel from cycling through items.
     */
    /**
       * Stops the carousel from cycling through items.
       */
    NgbCarousel.prototype.pause = /**
       * Stops the carousel from cycling through items.
       */
    function () { this._stopTimer(); };
    /**
     * Restarts cycling through the carousel slides from left to right.
     */
    /**
       * Restarts cycling through the carousel slides from left to right.
       */
    NgbCarousel.prototype.cycle = /**
       * Restarts cycling through the carousel slides from left to right.
       */
    function () { this._startTimer(); };
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
    NgbCarousel.prototype.getSlideEventDirection = function (currentActiveSlideId, nextActiveSlideId) {
        var currentActiveSlideIdx = this._getSlideIdxById(currentActiveSlideId);
        var nextActiveSlideIdx = this._getSlideIdxById(nextActiveSlideId);
        return currentActiveSlideIdx > nextActiveSlideIdx ? NgbSlideEventDirection.RIGHT : NgbSlideEventDirection.LEFT;
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
    NgbCarousel.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
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
                    template: "\n    <ol class=\"carousel-indicators\">\n      <li *ngFor=\"let slide of slides\" [id]=\"slide.id\" [class.active]=\"slide.id === activeId\"\n          (click)=\"cycleToSelected(slide.id, getSlideEventDirection(activeId, slide.id))\"></li>\n    </ol>\n    <div class=\"carousel-inner\">\n      <div *ngFor=\"let slide of slides\" class=\"carousel-item\" [class.active]=\"slide.id === activeId\">\n        <ng-template [ngTemplateOutlet]=\"slide.tplRef\"></ng-template>\n      </div>\n    </div>\n    <a class=\"carousel-control-prev\" role=\"button\" (click)=\"cycleToPrev()\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" role=\"button\" (click)=\"cycleToNext()\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n    "
                },] },
    ];
    /** @nocollapse */
    NgbCarousel.ctorParameters = function () { return [
        { type: _carousel_config__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"], },
    ]; };
    NgbCarousel.propDecorators = {
        "slides": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [NgbSlide,] },],
        "interval": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "wrap": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "keyboard": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "activeId": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "slide": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return NgbCarousel;
}());

/**
 * Enum to define the carousel slide event direction
 */
/**
 * Enum to define the carousel slide event direction
 */
var NgbSlideEventDirection;
/**
 * Enum to define the carousel slide event direction
 */
(function (NgbSlideEventDirection) {
    NgbSlideEventDirection[NgbSlideEventDirection["LEFT"] = 'left'] = "LEFT";
    NgbSlideEventDirection[NgbSlideEventDirection["RIGHT"] = 'right'] = "RIGHT";
})(NgbSlideEventDirection || (NgbSlideEventDirection = {}));
var NGB_CAROUSEL_DIRECTIVES = [NgbCarousel, NgbSlide];
//# sourceMappingURL=carousel.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/carousel/carousel.module.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/carousel/carousel.module.js ***!
  \*****************************************************************************/
/*! exports provided: NgbCarousel, NgbSlide, NgbCarouselConfig, NgbCarouselModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbCarouselModule", function() { return NgbCarouselModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carousel */ "./node_modules/@ng-bootstrap/ng-bootstrap/carousel/carousel.js");
/* harmony import */ var _carousel_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./carousel-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/carousel/carousel-config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbCarousel", function() { return _carousel__WEBPACK_IMPORTED_MODULE_2__["NgbCarousel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbSlide", function() { return _carousel__WEBPACK_IMPORTED_MODULE_2__["NgbSlide"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbCarouselConfig", function() { return _carousel_config__WEBPACK_IMPORTED_MODULE_3__["NgbCarouselConfig"]; });







var NgbCarouselModule = /** @class */ (function () {
    function NgbCarouselModule() {
    }
    NgbCarouselModule.forRoot = function () { return { ngModule: NgbCarouselModule, providers: [_carousel_config__WEBPACK_IMPORTED_MODULE_3__["NgbCarouselConfig"]] }; };
    NgbCarouselModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{ declarations: _carousel__WEBPACK_IMPORTED_MODULE_2__["NGB_CAROUSEL_DIRECTIVES"], exports: _carousel__WEBPACK_IMPORTED_MODULE_2__["NGB_CAROUSEL_DIRECTIVES"], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] },] },
    ];
    return NgbCarouselModule;
}());

//# sourceMappingURL=carousel.module.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/collapse/collapse.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/collapse/collapse.js ***!
  \**********************************************************************/
/*! exports provided: NgbCollapse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbCollapse", function() { return NgbCollapse; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/**
 * The NgbCollapse directive provides a simple way to hide and show an element with animations.
 */
var NgbCollapse = /** @class */ (function () {
    function NgbCollapse() {
        /**
           * A flag indicating collapsed (true) or open (false) state.
           */
        this.collapsed = false;
    }
    NgbCollapse.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[ngbCollapse]',
                    exportAs: 'ngbCollapse',
                    host: { '[class.collapse]': 'true', '[class.show]': '!collapsed' }
                },] },
    ];
    /** @nocollapse */
    NgbCollapse.propDecorators = {
        "collapsed": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngbCollapse',] },],
    };
    return NgbCollapse;
}());

//# sourceMappingURL=collapse.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/collapse/collapse.module.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/collapse/collapse.module.js ***!
  \*****************************************************************************/
/*! exports provided: NgbCollapse, NgbCollapseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbCollapseModule", function() { return NgbCollapseModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _collapse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collapse */ "./node_modules/@ng-bootstrap/ng-bootstrap/collapse/collapse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbCollapse", function() { return _collapse__WEBPACK_IMPORTED_MODULE_1__["NgbCollapse"]; });




var NgbCollapseModule = /** @class */ (function () {
    function NgbCollapseModule() {
    }
    NgbCollapseModule.forRoot = function () { return { ngModule: NgbCollapseModule, providers: [] }; };
    NgbCollapseModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{ declarations: [_collapse__WEBPACK_IMPORTED_MODULE_1__["NgbCollapse"]], exports: [_collapse__WEBPACK_IMPORTED_MODULE_1__["NgbCollapse"]] },] },
    ];
    return NgbCollapseModule;
}());

//# sourceMappingURL=collapse.module.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-config.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-config.js ***!
  \*********************************************************************************/
/*! exports provided: NgbDatepickerConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDatepickerConfig", function() { return NgbDatepickerConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/**
 * Configuration service for the NgbDatepicker component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the datepickers used in the application.
 */
var NgbDatepickerConfig = /** @class */ (function () {
    function NgbDatepickerConfig() {
        this.displayMonths = 1;
        this.firstDayOfWeek = 1;
        this.navigation = 'select';
        this.outsideDays = 'visible';
        this.showWeekdays = true;
        this.showWeekNumbers = false;
    }
    NgbDatepickerConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return NgbDatepickerConfig;
}());

//# sourceMappingURL=datepicker-config.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-day-view.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-day-view.js ***!
  \***********************************************************************************/
/*! exports provided: NgbDatepickerDayView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDatepickerDayView", function() { return NgbDatepickerDayView; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var NgbDatepickerDayView = /** @class */ (function () {
    function NgbDatepickerDayView() {
    }
    NgbDatepickerDayView.prototype.isMuted = function () { return !this.selected && (this.date.month !== this.currentMonth || this.disabled); };
    NgbDatepickerDayView.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: '[ngbDatepickerDayView]',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    styles: ["\n    :host {\n      text-align: center;\n      width: 2rem;\n      height: 2rem;\n      line-height: 2rem;\n      border-radius: 0.25rem;\n      background: transparent;\n    }\n    :host.outside {\n      opacity: 0.5;\n    }\n  "],
                    host: {
                        'class': 'btn-light',
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
    NgbDatepickerDayView.propDecorators = {
        "currentMonth": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "date": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "focused": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "selected": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return NgbDatepickerDayView;
}());

//# sourceMappingURL=datepicker-day-view.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-i18n.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-i18n.js ***!
  \*******************************************************************************/
/*! exports provided: NgbDatepickerI18n, NgbDatepickerI18nDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDatepickerI18n", function() { return NgbDatepickerI18n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDatepickerI18nDefault", function() { return NgbDatepickerI18nDefault; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



/**
 * Type of the service supplying month and weekday names to to NgbDatepicker component.
 * The default implementation of this service honors the Angular locale, and uses the registered locale data,
 * as explained in the Angular i18n guide.
 * See the i18n demo for how to extend this class and define a custom provider for i18n.
 */
var NgbDatepickerI18n = /** @class */ (function () {
    function NgbDatepickerI18n() {
    }
    NgbDatepickerI18n.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return NgbDatepickerI18n;
}());

var NgbDatepickerI18nDefault = /** @class */ (function (_super) {
    __extends(NgbDatepickerI18nDefault, _super);
    function NgbDatepickerI18nDefault(_locale, _datePipe) {
        var _this = _super.call(this) || this;
        _this._locale = _locale;
        _this._datePipe = _datePipe;
        var weekdaysStartingOnSunday = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["getLocaleDayNames"])(_locale, _angular_common__WEBPACK_IMPORTED_MODULE_1__["FormStyle"].Standalone, _angular_common__WEBPACK_IMPORTED_MODULE_1__["TranslationWidth"].Short);
        _this._weekdaysShort = weekdaysStartingOnSunday.map(function (day, index) { return weekdaysStartingOnSunday[(index + 1) % 7]; });
        _this._monthsShort = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["getLocaleMonthNames"])(_locale, _angular_common__WEBPACK_IMPORTED_MODULE_1__["FormStyle"].Standalone, _angular_common__WEBPACK_IMPORTED_MODULE_1__["TranslationWidth"].Abbreviated);
        _this._monthsFull = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["getLocaleMonthNames"])(_locale, _angular_common__WEBPACK_IMPORTED_MODULE_1__["FormStyle"].Standalone, _angular_common__WEBPACK_IMPORTED_MODULE_1__["TranslationWidth"].Wide);
        return _this;
    }
    NgbDatepickerI18nDefault.prototype.getWeekdayShortName = function (weekday) { return this._weekdaysShort[weekday - 1]; };
    NgbDatepickerI18nDefault.prototype.getMonthShortName = function (month) { return this._monthsShort[month - 1]; };
    NgbDatepickerI18nDefault.prototype.getMonthFullName = function (month) { return this._monthsFull[month - 1]; };
    NgbDatepickerI18nDefault.prototype.getDayAriaLabel = function (date) {
        var jsDate = new Date(date.year, date.month - 1, date.day);
        return this._datePipe.transform(jsDate, 'fullDate', null, this._locale);
    };
    NgbDatepickerI18nDefault.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    NgbDatepickerI18nDefault.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"],] },] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], },
    ]; };
    return NgbDatepickerI18nDefault;
}(NgbDatepickerI18n));

//# sourceMappingURL=datepicker-i18n.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-input.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-input.js ***!
  \********************************************************************************/
/*! exports provided: NgbInputDatepicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbInputDatepicker", function() { return NgbInputDatepicker; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngb_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ngb-date */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date.js");
/* harmony import */ var _datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./datepicker */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker.js");
/* harmony import */ var _ngb_date_parser_formatter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ngb-date-parser-formatter */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-parser-formatter.js");
/* harmony import */ var _util_positioning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/positioning */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/positioning.js");
/* harmony import */ var _util_focus_trap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/focus-trap */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/focus-trap.js");
/* harmony import */ var _ngb_date_adapter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ngb-date-adapter */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-adapter.js");
/* harmony import */ var _ngb_calendar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ngb-calendar */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar.js");
/* harmony import */ var _datepicker_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./datepicker-service */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-service.js");










var NGB_DATEPICKER_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return NgbInputDatepicker; }),
    multi: true
};
var NGB_DATEPICKER_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return NgbInputDatepicker; }),
    multi: true
};
/**
 * A directive that makes it possible to have datepickers on input fields.
 * Manages integration with the input field itself (data entry) and ngModel (validation etc.).
 */
var NgbInputDatepicker = /** @class */ (function () {
    function NgbInputDatepicker(_parserFormatter, _elRef, _vcRef, _renderer, _cfr, ngZone, _service, _calendar, _ngbDateAdapter, _focusTrapFactory) {
        var _this = this;
        this._parserFormatter = _parserFormatter;
        this._elRef = _elRef;
        this._vcRef = _vcRef;
        this._renderer = _renderer;
        this._cfr = _cfr;
        this._service = _service;
        this._calendar = _calendar;
        this._ngbDateAdapter = _ngbDateAdapter;
        this._focusTrapFactory = _focusTrapFactory;
        this._cRef = null;
        this._disabled = false;
        this._focusTrap = null;
        /**
           * Indicates whether the datepicker popup should be closed automatically after date selection or not.
           * If the value is 'false', the popup can be closed via 'close()' or 'toggle()' methods.
           *
           * @since 1.1.0
           */
        this.autoClose = true;
        /**
              * Placement of a datepicker popup accepts:
              *    "top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right",
              *    "left", "left-top", "left-bottom", "right", "right-top", "right-bottom"
              * and array of above values.
              */
        this.placement = 'bottom-left';
        /**
           * An event fired when user selects a date using keyboard or mouse.
           * The payload of the event is currently selected NgbDateStruct.
           *
           * @since 1.1.1
           */
        this.dateSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * An event fired when navigation happens and currently displayed month changes.
           * See NgbDatepickerNavigateEvent for the payload info.
           */
        this.navigate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._onChange = function (_) { };
        this._onTouched = function () { };
        this._validatorChange = function () { };
        this._zoneSubscription = ngZone.onStable.subscribe(function () {
            if (_this._cRef) {
                Object(_util_positioning__WEBPACK_IMPORTED_MODULE_5__["positionElements"])(_this._elRef.nativeElement, _this._cRef.location.nativeElement, _this.placement, _this.container === 'body');
            }
        });
    }
    Object.defineProperty(NgbInputDatepicker.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this._disabled = value === '' || (value && value !== 'false');
            if (this.isOpen()) {
                this._cRef.instance.setDisabledState(this._disabled);
            }
        },
        enumerable: true,
        configurable: true
    });
    NgbInputDatepicker.prototype.registerOnChange = function (fn) { this._onChange = fn; };
    NgbInputDatepicker.prototype.registerOnTouched = function (fn) { this._onTouched = fn; };
    NgbInputDatepicker.prototype.registerOnValidatorChange = function (fn) { this._validatorChange = fn; };
    ;
    NgbInputDatepicker.prototype.setDisabledState = function (isDisabled) { this.disabled = isDisabled; };
    NgbInputDatepicker.prototype.validate = function (c) {
        var value = c.value;
        if (value === null || value === undefined) {
            return null;
        }
        var ngbDate = this._fromDateStruct(this._ngbDateAdapter.fromModel(value));
        if (!this._calendar.isValid(ngbDate)) {
            return { 'ngbDate': { invalid: c.value } };
        }
        if (this.minDate && ngbDate.before(_ngb_date__WEBPACK_IMPORTED_MODULE_2__["NgbDate"].from(this.minDate))) {
            return { 'ngbDate': { requiredBefore: this.minDate } };
        }
        if (this.maxDate && ngbDate.after(_ngb_date__WEBPACK_IMPORTED_MODULE_2__["NgbDate"].from(this.maxDate))) {
            return { 'ngbDate': { requiredAfter: this.maxDate } };
        }
    };
    NgbInputDatepicker.prototype.writeValue = function (value) {
        this._model = this._fromDateStruct(this._ngbDateAdapter.fromModel(value));
        this._writeModelValue(this._model);
    };
    NgbInputDatepicker.prototype.manualDateChange = function (value, updateView) {
        if (updateView === void 0) { updateView = false; }
        this._model = this._fromDateStruct(this._parserFormatter.parse(value));
        this._onChange(this._model ? this._ngbDateAdapter.toModel(this._model) : (value === '' ? null : value));
        if (updateView && this._model) {
            this._writeModelValue(this._model);
        }
    };
    NgbInputDatepicker.prototype.isOpen = function () { return !!this._cRef; };
    /**
     * Opens the datepicker with the selected date indicated by the ngModel value.
     */
    /**
       * Opens the datepicker with the selected date indicated by the ngModel value.
       */
    NgbInputDatepicker.prototype.open = /**
       * Opens the datepicker with the selected date indicated by the ngModel value.
       */
    function () {
        var _this = this;
        if (!this.isOpen()) {
            var cf = this._cfr.resolveComponentFactory(_datepicker__WEBPACK_IMPORTED_MODULE_3__["NgbDatepicker"]);
            this._cRef = this._vcRef.createComponent(cf);
            this._applyPopupStyling(this._cRef.location.nativeElement);
            this._applyDatepickerInputs(this._cRef.instance);
            this._subscribeForDatepickerOutputs(this._cRef.instance);
            this._cRef.instance.ngOnInit();
            this._cRef.instance.writeValue(this._ngbDateAdapter.toModel(this._model));
            // date selection event handling
            this._cRef.instance.registerOnChange(function (selectedDate) {
                _this.writeValue(selectedDate);
                _this._onChange(selectedDate);
            });
            this._cRef.changeDetectorRef.detectChanges();
            this._cRef.instance.setDisabledState(this.disabled);
            if (this.container === 'body') {
                window.document.querySelector(this.container).appendChild(this._cRef.location.nativeElement);
            }
            this._focusTrap = this._focusTrapFactory.create(this._cRef.location.nativeElement, true);
            // focus handling
            this._cRef.instance.focus();
        }
    };
    /**
     * Closes the datepicker popup.
     */
    /**
       * Closes the datepicker popup.
       */
    NgbInputDatepicker.prototype.close = /**
       * Closes the datepicker popup.
       */
    function () {
        if (this.isOpen()) {
            this._vcRef.remove(this._vcRef.indexOf(this._cRef.hostView));
            this._cRef = null;
            this._focusTrap.destroy();
            this._focusTrap = null;
        }
    };
    /**
     * Toggles the datepicker popup (opens when closed and closes when opened).
     */
    /**
       * Toggles the datepicker popup (opens when closed and closes when opened).
       */
    NgbInputDatepicker.prototype.toggle = /**
       * Toggles the datepicker popup (opens when closed and closes when opened).
       */
    function () {
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
    /**
       * Navigates current view to provided date.
       * With default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
       * If nothing or invalid date provided calendar will open current month.
       * Use 'startDate' input as an alternative
       */
    NgbInputDatepicker.prototype.navigateTo = /**
       * Navigates current view to provided date.
       * With default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
       * If nothing or invalid date provided calendar will open current month.
       * Use 'startDate' input as an alternative
       */
    function (date) {
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
        this._renderer.addClass(nativeElement, 'show');
    };
    NgbInputDatepicker.prototype._subscribeForDatepickerOutputs = function (datepickerInstance) {
        var _this = this;
        datepickerInstance.navigate.subscribe(function (date) { return _this.navigate.emit(date); });
        datepickerInstance.select.subscribe(function (date) {
            _this.dateSelect.emit(date);
            if (_this.autoClose) {
                _this.close();
            }
        });
    };
    NgbInputDatepicker.prototype._writeModelValue = function (model) {
        this._renderer.setProperty(this._elRef.nativeElement, 'value', this._parserFormatter.format(model));
        if (this.isOpen()) {
            this._cRef.instance.writeValue(this._ngbDateAdapter.toModel(model));
            this._onTouched();
        }
    };
    NgbInputDatepicker.prototype._fromDateStruct = function (date) {
        var ngbDate = date ? new _ngb_date__WEBPACK_IMPORTED_MODULE_2__["NgbDate"](date.year, date.month, date.day) : null;
        return this._calendar.isValid(ngbDate) ? ngbDate : null;
    };
    NgbInputDatepicker.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'input[ngbDatepicker]',
                    exportAs: 'ngbDatepicker',
                    host: {
                        '(input)': 'manualDateChange($event.target.value)',
                        '(change)': 'manualDateChange($event.target.value, true)',
                        '(keyup.esc)': 'close()',
                        '(blur)': 'onBlur()',
                        '[disabled]': 'disabled'
                    },
                    providers: [NGB_DATEPICKER_VALUE_ACCESSOR, NGB_DATEPICKER_VALIDATOR, _datepicker_service__WEBPACK_IMPORTED_MODULE_9__["NgbDatepickerService"]]
                },] },
    ];
    /** @nocollapse */
    NgbInputDatepicker.ctorParameters = function () { return [
        { type: _ngb_date_parser_formatter__WEBPACK_IMPORTED_MODULE_4__["NgbDateParserFormatter"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
        { type: _datepicker_service__WEBPACK_IMPORTED_MODULE_9__["NgbDatepickerService"], },
        { type: _ngb_calendar__WEBPACK_IMPORTED_MODULE_8__["NgbCalendar"], },
        { type: _ngb_date_adapter__WEBPACK_IMPORTED_MODULE_7__["NgbDateAdapter"], },
        { type: _util_focus_trap__WEBPACK_IMPORTED_MODULE_6__["NgbFocusTrapFactory"], },
    ]; };
    NgbInputDatepicker.propDecorators = {
        "autoClose": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "dayTemplate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "displayMonths": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "firstDayOfWeek": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "markDisabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "minDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "maxDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "navigation": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "outsideDays": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "placement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "showWeekdays": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "showWeekNumbers": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "startDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "container": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "dateSelect": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "navigate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return NgbInputDatepicker;
}());

//# sourceMappingURL=datepicker-input.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-keymap-service.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-keymap-service.js ***!
  \*****************************************************************************************/
/*! exports provided: NgbDatepickerKeyMapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDatepickerKeyMapService", function() { return NgbDatepickerKeyMapService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _datepicker_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datepicker-service */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-service.js");
/* harmony import */ var _ngb_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ngb-calendar */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/util */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/util.js");




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
var NgbDatepickerKeyMapService = /** @class */ (function () {
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
        if (Key[Object(_util_util__WEBPACK_IMPORTED_MODULE_3__["toString"])(event.which)]) {
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
    NgbDatepickerKeyMapService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    NgbDatepickerKeyMapService.ctorParameters = function () { return [
        { type: _datepicker_service__WEBPACK_IMPORTED_MODULE_1__["NgbDatepickerService"], },
        { type: _ngb_calendar__WEBPACK_IMPORTED_MODULE_2__["NgbCalendar"], },
    ]; };
    return NgbDatepickerKeyMapService;
}());

//# sourceMappingURL=datepicker-keymap-service.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-month-view.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-month-view.js ***!
  \*************************************************************************************/
/*! exports provided: NgbDatepickerMonthView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDatepickerMonthView", function() { return NgbDatepickerMonthView; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngb_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ngb-date */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date.js");
/* harmony import */ var _datepicker_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datepicker-i18n */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-i18n.js");



var NgbDatepickerMonthView = /** @class */ (function () {
    function NgbDatepickerMonthView(i18n) {
        this.i18n = i18n;
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    NgbDatepickerMonthView.prototype.doSelect = function (day) {
        if (!day.context.disabled && !this.isHidden(day)) {
            this.select.emit(_ngb_date__WEBPACK_IMPORTED_MODULE_1__["NgbDate"].from(day.date));
        }
    };
    NgbDatepickerMonthView.prototype.isCollapsed = function (week) {
        return this.outsideDays === 'collapsed' && week.days[0].date.month !== this.month.number &&
            week.days[week.days.length - 1].date.month !== this.month.number;
    };
    NgbDatepickerMonthView.prototype.isHidden = function (day) {
        return (this.outsideDays === 'hidden' || this.outsideDays === 'collapsed') && this.month.number !== day.date.month;
    };
    NgbDatepickerMonthView.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngb-datepicker-month-view',
                    host: { 'class': 'd-block', 'role': 'grid' },
                    styles: ["\n    .ngb-dp-weekday, .ngb-dp-week-number {\n      line-height: 2rem;\n      text-align: center;\n      font-style: italic;\n    }\n    .ngb-dp-weekday {\n      color: #5bc0de;\n      color: var(--info);\n    }\n    .ngb-dp-week {\n      border-radius: 0.25rem;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n    }\n    .ngb-dp-weekdays {\n      border-bottom: 1px solid rgba(0, 0, 0, 0.125);\n      border-radius: 0rem;\n    }\n    .ngb-dp-day, .ngb-dp-weekday, .ngb-dp-week-number {\n      width: 2rem;\n      height: 2rem;\n    }\n    .ngb-dp-day {\n      cursor: pointer;\n    }\n    .ngb-dp-day.disabled, .ngb-dp-day.hidden {\n      cursor: default;\n    }\n  "],
                    template: "\n    <div *ngIf=\"showWeekdays\" class=\"ngb-dp-week ngb-dp-weekdays bg-light\">\n      <div *ngIf=\"showWeekNumbers\" class=\"ngb-dp-weekday ngb-dp-showweek\"></div>\n      <div *ngFor=\"let w of month.weekdays\" class=\"ngb-dp-weekday small\">\n        {{ i18n.getWeekdayShortName(w) }}\n      </div>\n    </div>\n    <ng-template ngFor let-week [ngForOf]=\"month.weeks\">\n      <div *ngIf=\"!isCollapsed(week)\" class=\"ngb-dp-week\" role=\"row\">\n        <div *ngIf=\"showWeekNumbers\" class=\"ngb-dp-week-number small text-muted\">{{ week.number }}</div>\n        <div *ngFor=\"let day of week.days\" (click)=\"doSelect(day)\" class=\"ngb-dp-day\" role=\"gridcell\"\n          [class.disabled]=\"day.context.disabled\"\n          [tabindex]=\"day.tabindex\"\n          [class.hidden]=\"isHidden(day)\"\n          [attr.aria-label]=\"day.ariaLabel\">\n          <ng-template [ngIf]=\"!isHidden(day)\">\n            <ng-template [ngTemplateOutlet]=\"dayTemplate\" [ngTemplateOutletContext]=\"day.context\"></ng-template>\n          </ng-template>\n        </div>\n      </div>\n    </ng-template>\n  "
                },] },
    ];
    /** @nocollapse */
    NgbDatepickerMonthView.ctorParameters = function () { return [
        { type: _datepicker_i18n__WEBPACK_IMPORTED_MODULE_2__["NgbDatepickerI18n"], },
    ]; };
    NgbDatepickerMonthView.propDecorators = {
        "dayTemplate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "month": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "outsideDays": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "showWeekdays": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "showWeekNumbers": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "select": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return NgbDatepickerMonthView;
}());

//# sourceMappingURL=datepicker-month-view.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-navigation-select.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-navigation-select.js ***!
  \********************************************************************************************/
/*! exports provided: NgbDatepickerNavigationSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDatepickerNavigationSelect", function() { return NgbDatepickerNavigationSelect; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngb_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ngb-date */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/util */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/util.js");
/* harmony import */ var _datepicker_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./datepicker-i18n */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-i18n.js");




var NgbDatepickerNavigationSelect = /** @class */ (function () {
    function NgbDatepickerNavigationSelect(i18n) {
        this.i18n = i18n;
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    NgbDatepickerNavigationSelect.prototype.changeMonth = function (month) { this.select.emit(new _ngb_date__WEBPACK_IMPORTED_MODULE_1__["NgbDate"](this.date.year, Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["toInteger"])(month), 1)); };
    NgbDatepickerNavigationSelect.prototype.changeYear = function (year) { this.select.emit(new _ngb_date__WEBPACK_IMPORTED_MODULE_1__["NgbDate"](Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["toInteger"])(year), this.date.month, 1)); };
    NgbDatepickerNavigationSelect.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngb-datepicker-navigation-select',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    styles: ["\n    :host>select {\n      /* to align with btn-sm */\n      padding: 0.25rem 0.5rem;\n      font-size: 0.875rem;\n      line-height: 1.25;\n      /* to cancel the custom height set by custom-select */\n      height: inherit;\n      width: 50%;\n      display: inline-block;\n    }\n  "],
                    template: "\n    <select\n      [disabled]=\"disabled\"\n      class=\"custom-select\"\n      [value]=\"date?.month\"\n      (change)=\"changeMonth($event.target.value)\">\n        <option *ngFor=\"let m of months\" [value]=\"m\">{{ i18n.getMonthShortName(m) }}</option>\n    </select><select\n      [disabled]=\"disabled\"\n      class=\"custom-select\"\n      [value]=\"date?.year\"\n      (change)=\"changeYear($event.target.value)\">\n        <option *ngFor=\"let y of years\" [value]=\"y\">{{ y }}</option>\n    </select>\n  "
                },] },
    ];
    /** @nocollapse */
    NgbDatepickerNavigationSelect.ctorParameters = function () { return [
        { type: _datepicker_i18n__WEBPACK_IMPORTED_MODULE_3__["NgbDatepickerI18n"], },
    ]; };
    NgbDatepickerNavigationSelect.propDecorators = {
        "date": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "months": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "years": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "select": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return NgbDatepickerNavigationSelect;
}());

//# sourceMappingURL=datepicker-navigation-select.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-navigation.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-navigation.js ***!
  \*************************************************************************************/
/*! exports provided: NgbDatepickerNavigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDatepickerNavigation", function() { return NgbDatepickerNavigation; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _datepicker_view_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datepicker-view-model */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-view-model.js");
/* harmony import */ var _ngb_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ngb-date */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date.js");
/* harmony import */ var _datepicker_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./datepicker-i18n */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-i18n.js");




// The -ms- and -webkit- element for the CSS can be removed if we are generating the CSS using SASS.
var NgbDatepickerNavigation = /** @class */ (function () {
    function NgbDatepickerNavigation(i18n) {
        this.i18n = i18n;
        this.navigation = _datepicker_view_model__WEBPACK_IMPORTED_MODULE_1__["NavigationEvent"];
        this.months = [];
        this.navigate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    NgbDatepickerNavigation.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngb-datepicker-navigation',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    styles: ["\n    :host {\n      height: 2rem;\n      line-height: 1.85rem;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n    }\n    .ngb-dp-navigation-chevron {\n      border-style: solid;\n      border-width: 0.2em 0.2em 0 0;\n      display: inline-block;\n      width: 0.75em;\n      height: 0.75em;\n      margin-left: 0.25em;\n      margin-right: 0.15em;\n      transform: rotate(-135deg);\n      -webkit-transform: rotate(-135deg);\n      -ms-transform: rotate(-135deg);\n    }\n    .right .ngb-dp-navigation-chevron {\n      -webkit-transform: rotate(45deg);\n      -ms-transform: rotate(45deg);\n      transform: rotate(45deg);\n      margin-left: 0.15em;\n      margin-right: 0.25em;\n    }\n    .ngb-dp-arrow {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-flex: 1 1 auto;\n      -ms-flex: 1 1 auto;\n      flex-basis: auto;\n      flex-grow: 1;\n      padding-right: 0px;\n      padding-left: 0px;\n      margin: 0px;\n      width: 2rem;\n      height: 2rem;\n    }\n    .ngb-dp-arrow.right {\n      -webkit-box-pack: end;\n      -ms-flex-pack: end;\n      justify-content: flex-end;\n    }\n    .ngb-dp-arrow-btn {\n      padding: 0rem 0.25rem;\n      margin: 0rem 0.5rem;\n      border: none;\n      background-color: transparent;\n      z-index: 1;\n    }\n    .ngb-dp-arrow-btn:focus {\n      outline-style: auto;\n      outline-width: 1px;\n    }\n    .ngb-dp-month-name {\n      font-size: larger;\n      height: 2rem;\n      line-height: 2rem;\n      text-align: center;\n    }\n    .ngb-dp-navigation-select {\n      -webkit-box-flex: 1 1 9rem;\n      -ms-flex:  1 1 9rem;\n      flex-grow: 1;\n      flex-basis: 9rem;\n    }\n  "],
                    template: "\n  <div class=\"ngb-dp-arrow\">\n    <button type=\"button\" class=\"btn btn-link ngb-dp-arrow-btn\"\n            (click)=\"!!navigate.emit(navigation.PREV)\" [disabled]=\"prevDisabled\">\n      <span class=\"ngb-dp-navigation-chevron\"></span>\n    </button>\n  </div>\n    <ngb-datepicker-navigation-select *ngIf=\"showSelect\" class=\"d-block ngb-dp-navigation-select\"\n      [date]=\"date\"\n      [disabled] = \"disabled\"\n      [months]=\"selectBoxes.months\"\n      [years]=\"selectBoxes.years\"\n      (select)=\"select.emit($event)\">\n    </ngb-datepicker-navigation-select>\n\n    <ng-template *ngIf=\"!showSelect\" ngFor let-month [ngForOf]=\"months\" let-i=\"index\">\n      <div class=\"ngb-dp-arrow\" *ngIf=\"i > 0\"></div>\n      <div class=\"ngb-dp-month-name d-block\">\n        {{ i18n.getMonthFullName(month.number) }} {{ month.year }}\n      </div>\n      <div class=\"ngb-dp-arrow\" *ngIf=\"i !== months.length - 1\"></div>\n    </ng-template>\n    <div class=\"ngb-dp-arrow right\">\n    <button type=\"button\" class=\"btn btn-link ngb-dp-arrow-btn\"\n            (click)=\"!!navigate.emit(navigation.NEXT)\" [disabled]=\"nextDisabled\">\n      <span class=\"ngb-dp-navigation-chevron\"></span>\n    </button>\n    </div>\n    "
                },] },
    ];
    /** @nocollapse */
    NgbDatepickerNavigation.ctorParameters = function () { return [
        { type: _datepicker_i18n__WEBPACK_IMPORTED_MODULE_3__["NgbDatepickerI18n"], },
    ]; };
    NgbDatepickerNavigation.propDecorators = {
        "date": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "months": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "showSelect": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "prevDisabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "nextDisabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "selectBoxes": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "navigate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "select": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return NgbDatepickerNavigation;
}());

//# sourceMappingURL=datepicker-navigation.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-service.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-service.js ***!
  \**********************************************************************************/
/*! exports provided: NgbDatepickerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDatepickerService", function() { return NgbDatepickerService; });
/* harmony import */ var _ngb_calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ngb-calendar */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar.js");
/* harmony import */ var _ngb_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ngb-date */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/util */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/util.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _datepicker_tools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./datepicker-tools */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-tools.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _datepicker_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./datepicker-i18n */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-i18n.js");








var NgbDatepickerService = /** @class */ (function () {
    function NgbDatepickerService(_calendar, _i18n) {
        this._calendar = _calendar;
        this._i18n = _i18n;
        this._model$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this._select$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this._state = {
            disabled: false,
            displayMonths: 1,
            firstDayOfWeek: 1,
            focusVisible: false,
            months: [],
            navigation: 'select',
            prevDisabled: false,
            nextDisabled: false,
            selectBoxes: { years: [], months: [] },
            selectedDate: null
        };
    }
    Object.defineProperty(NgbDatepickerService.prototype, "model$", {
        get: function () { return this._model$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (model) { return model.months.length > 0; })); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbDatepickerService.prototype, "select$", {
        get: function () { return this._select$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (date) { return date !== null; })); },
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
        set: function (displayMonths) {
            displayMonths = Object(_util_util__WEBPACK_IMPORTED_MODULE_3__["toInteger"])(displayMonths);
            if (Object(_util_util__WEBPACK_IMPORTED_MODULE_3__["isInteger"])(displayMonths) && displayMonths > 0 && this._state.displayMonths !== displayMonths) {
                this._nextState({ displayMonths: displayMonths });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbDatepickerService.prototype, "firstDayOfWeek", {
        set: function (firstDayOfWeek) {
            firstDayOfWeek = Object(_util_util__WEBPACK_IMPORTED_MODULE_3__["toInteger"])(firstDayOfWeek);
            if (Object(_util_util__WEBPACK_IMPORTED_MODULE_3__["isInteger"])(firstDayOfWeek) && firstDayOfWeek >= 0 && this._state.firstDayOfWeek !== firstDayOfWeek) {
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
            var maxDate = this.toValidDate(date, null);
            if (Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_5__["isChangedDate"])(this._state.maxDate, maxDate)) {
                this._nextState({ maxDate: maxDate });
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
            var minDate = this.toValidDate(date, null);
            if (Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_5__["isChangedDate"])(this._state.minDate, minDate)) {
                this._nextState({ minDate: minDate });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbDatepickerService.prototype, "navigation", {
        set: function (navigation) {
            if (this._state.navigation !== navigation) {
                this._nextState({ navigation: navigation });
            }
        },
        enumerable: true,
        configurable: true
    });
    NgbDatepickerService.prototype.focus = function (date) {
        if (!this._state.disabled && this._calendar.isValid(date) && Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_5__["isChangedDate"])(this._state.focusDate, date)) {
            this._nextState({ focusDate: date });
        }
    };
    NgbDatepickerService.prototype.focusMove = function (period, number) {
        this.focus(this._calendar.getNext(this._state.focusDate, period, number));
    };
    NgbDatepickerService.prototype.focusSelect = function () {
        if (Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_5__["isDateSelectable"])(this._state.focusDate, this._state)) {
            this.select(this._state.focusDate, { emitEvent: true });
        }
    };
    NgbDatepickerService.prototype.open = function (date) {
        var firstDate = this.toValidDate(date, this._calendar.getToday());
        if (!this._state.disabled) {
            this._nextState({ firstDate: firstDate });
        }
    };
    NgbDatepickerService.prototype.select = function (date, options) {
        if (options === void 0) { options = {}; }
        var selectedDate = this.toValidDate(date, null);
        if (!this._state.disabled) {
            if (Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_5__["isChangedDate"])(this._state.selectedDate, selectedDate)) {
                this._nextState({ selectedDate: selectedDate });
            }
            if (options.emitEvent && Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_5__["isDateSelectable"])(selectedDate, this._state)) {
                this._select$.next(selectedDate);
            }
        }
    };
    NgbDatepickerService.prototype.toValidDate = function (date, defaultValue) {
        var ngbDate = _ngb_date__WEBPACK_IMPORTED_MODULE_1__["NgbDate"].from(date);
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
                    day.tabindex =
                        (!state.disabled && day.date.equals(state.focusDate) && state.focusDate.month === month.number) ? 0 : -1;
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
            Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_5__["checkMinBeforeMax"])(state.minDate, state.maxDate);
            state.focusDate = Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_5__["checkDateInRange"])(state.focusDate, state.minDate, state.maxDate);
            state.firstDate = Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_5__["checkDateInRange"])(state.firstDate, state.minDate, state.maxDate);
            startDate = state.focusDate;
        }
        // disabled
        if ('disabled' in patch) {
            state.focusVisible = false;
        }
        // initial rebuild via 'select()'
        if ('selectedDate' in patch && this._state.months.length === 0) {
            startDate = state.selectedDate;
        }
        // focus date changed
        if ('focusDate' in patch) {
            state.focusDate = Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_5__["checkDateInRange"])(state.focusDate, state.minDate, state.maxDate);
            startDate = state.focusDate;
            // nothing to rebuild if only focus changed and it is still visible
            if (state.months.length !== 0 && !state.focusDate.before(state.firstDate) &&
                !state.focusDate.after(state.lastDate)) {
                return state;
            }
        }
        // first date changed
        if ('firstDate' in patch) {
            state.firstDate = Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_5__["checkDateInRange"])(state.firstDate, state.minDate, state.maxDate);
            startDate = state.firstDate;
        }
        // rebuilding months
        if (startDate) {
            var forceRebuild = 'firstDayOfWeek' in patch || 'markDisabled' in patch || 'minDate' in patch ||
                'maxDate' in patch || 'disabled' in patch;
            var months = Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_5__["buildMonths"])(this._calendar, startDate, state, this._i18n, forceRebuild);
            // updating months and boundary dates
            state.months = months;
            state.firstDate = months.length > 0 ? months[0].firstDate : undefined;
            state.lastDate = months.length > 0 ? months[months.length - 1].lastDate : undefined;
            // reset selected date if 'markDisabled' returns true
            if ('selectedDate' in patch && !Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_5__["isDateSelectable"])(state.selectedDate, state)) {
                state.selectedDate = null;
            }
            // adjusting focus after months were built
            if ('firstDate' in patch) {
                if (state.focusDate === undefined || state.focusDate.before(state.firstDate) ||
                    state.focusDate.after(state.lastDate)) {
                    state.focusDate = startDate;
                }
            }
            // adjusting months/years for the select box navigation
            var yearChanged = !this._state.firstDate || this._state.firstDate.year !== state.firstDate.year;
            var monthChanged = !this._state.firstDate || this._state.firstDate.month !== state.firstDate.month;
            if (state.navigation === 'select') {
                // years ->  boundaries (min/max were changed)
                if ('minDate' in patch || 'maxDate' in patch || state.selectBoxes.years.length === 0 || yearChanged) {
                    state.selectBoxes.years = Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_5__["generateSelectBoxYears"])(state.focusDate, state.minDate, state.maxDate);
                }
                // months -> when current year or boundaries change
                if ('minDate' in patch || 'maxDate' in patch || state.selectBoxes.months.length === 0 || yearChanged) {
                    state.selectBoxes.months =
                        Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_5__["generateSelectBoxMonths"])(this._calendar, state.focusDate, state.minDate, state.maxDate);
                }
            }
            else {
                state.selectBoxes = { years: [], months: [] };
            }
            // updating navigation arrows -> boundaries change (min/max) or month/year changes
            if ((state.navigation === 'arrows' || state.navigation === 'select') &&
                (monthChanged || yearChanged || 'minDate' in patch || 'maxDate' in patch || 'disabled' in patch)) {
                state.prevDisabled = state.disabled || Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_5__["prevMonthDisabled"])(this._calendar, state.firstDate, state.minDate);
                state.nextDisabled = state.disabled || Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_5__["nextMonthDisabled"])(this._calendar, state.lastDate, state.maxDate);
            }
        }
        return state;
    };
    NgbDatepickerService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"] },
    ];
    /** @nocollapse */
    NgbDatepickerService.ctorParameters = function () { return [
        { type: _ngb_calendar__WEBPACK_IMPORTED_MODULE_0__["NgbCalendar"], },
        { type: _datepicker_i18n__WEBPACK_IMPORTED_MODULE_7__["NgbDatepickerI18n"], },
    ]; };
    return NgbDatepickerService;
}());

//# sourceMappingURL=datepicker-service.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-tools.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-tools.js ***!
  \********************************************************************************/
/*! exports provided: isChangedDate, dateComparator, checkMinBeforeMax, checkDateInRange, isDateSelectable, generateSelectBoxMonths, generateSelectBoxYears, nextMonthDisabled, prevMonthDisabled, buildMonths, buildMonth, getFirstViewDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isChangedDate", function() { return isChangedDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateComparator", function() { return dateComparator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkMinBeforeMax", function() { return checkMinBeforeMax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkDateInRange", function() { return checkDateInRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDateSelectable", function() { return isDateSelectable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateSelectBoxMonths", function() { return generateSelectBoxMonths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateSelectBoxYears", function() { return generateSelectBoxYears; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextMonthDisabled", function() { return nextMonthDisabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prevMonthDisabled", function() { return prevMonthDisabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildMonths", function() { return buildMonths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildMonth", function() { return buildMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFirstViewDate", function() { return getFirstViewDate; });
/* harmony import */ var _ngb_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ngb-date */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/util */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/util.js");


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
        return _ngb_date__WEBPACK_IMPORTED_MODULE_0__["NgbDate"].from(minDate);
    }
    if (date && maxDate && date.after(maxDate)) {
        return _ngb_date__WEBPACK_IMPORTED_MODULE_0__["NgbDate"].from(maxDate);
    }
    return date;
}
function isDateSelectable(date, state) {
    var minDate = state.minDate, maxDate = state.maxDate, disabled = state.disabled, markDisabled = state.markDisabled;
    // clang-format off
    return !(!Object(_util_util__WEBPACK_IMPORTED_MODULE_1__["isDefined"])(date) ||
        disabled ||
        (markDisabled && markDisabled(date, { year: date.year, month: date.month })) ||
        (minDate && date.before(minDate)) ||
        (maxDate && date.after(maxDate)));
    // clang-format on
}
function generateSelectBoxMonths(calendar, date, minDate, maxDate) {
    if (!date) {
        return [];
    }
    var months = calendar.getMonths();
    if (minDate && date.year === minDate.year) {
        var index = months.findIndex(function (month) { return month === minDate.month; });
        months = months.slice(index);
    }
    if (maxDate && date.year === maxDate.year) {
        var index = months.findIndex(function (month) { return month === maxDate.month; });
        months = months.slice(0, index + 1);
    }
    return months;
}
function generateSelectBoxYears(date, minDate, maxDate) {
    if (!date) {
        return [];
    }
    var start = minDate && minDate.year || date.year - 10;
    var end = maxDate && maxDate.year || date.year + 10;
    return Array.from({ length: end - start + 1 }, function (e, i) { return start + i; });
}
function nextMonthDisabled(calendar, date, maxDate) {
    return maxDate && calendar.getNext(date, 'm').after(maxDate);
}
function prevMonthDisabled(calendar, date, minDate) {
    var prevDate = calendar.getPrev(date, 'm');
    return minDate && (prevDate.year === minDate.year && prevDate.month < minDate.month ||
        prevDate.year < minDate.year && minDate.month === 1);
}
function buildMonths(calendar, date, state, i18n, force) {
    var displayMonths = state.displayMonths, months = state.months;
    var newMonths = [];
    var _loop_1 = function (i) {
        var newDate = calendar.getNext(date, 'm', i);
        var index = months.findIndex(function (month) { return month.firstDate.equals(newDate); });
        if (force || index === -1) {
            newMonths.push(buildMonth(calendar, newDate, state, i18n));
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
function buildMonth(calendar, date, state, i18n) {
    var minDate = state.minDate, maxDate = state.maxDate, firstDayOfWeek = state.firstDayOfWeek, markDisabled = state.markDisabled;
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
            var newDate = new _ngb_date__WEBPACK_IMPORTED_MODULE_0__["NgbDate"](date.year, date.month, date.day);
            var nextDate = calendar.getNext(newDate);
            var ariaLabel = i18n.getDayAriaLabel(newDate);
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
                },
                tabindex: -1, ariaLabel: ariaLabel
            });
            date = nextDate;
        }
        month.weeks.push({ number: calendar.getWeekNumber(days.map(function (day) { return _ngb_date__WEBPACK_IMPORTED_MODULE_0__["NgbDate"].from(day.date); }), firstDayOfWeek), days: days });
    }
    return month;
}
function getFirstViewDate(calendar, date, firstDayOfWeek) {
    var daysPerWeek = calendar.getDaysPerWeek();
    var firstMonthDate = new _ngb_date__WEBPACK_IMPORTED_MODULE_0__["NgbDate"](date.year, date.month, 1);
    var dayOfWeek = calendar.getWeekday(firstMonthDate) % daysPerWeek;
    return calendar.getPrev(firstMonthDate, 'd', (daysPerWeek + dayOfWeek - firstDayOfWeek) % daysPerWeek);
}
//# sourceMappingURL=datepicker-tools.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-view-model.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-view-model.js ***!
  \*************************************************************************************/
/*! exports provided: NavigationEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationEvent", function() { return NavigationEvent; });
// clang-format on
// clang-format on
var NavigationEvent;
// clang-format on
(function (NavigationEvent) {
    NavigationEvent[NavigationEvent["PREV"] = 0] = "PREV";
    NavigationEvent[NavigationEvent["NEXT"] = 1] = "NEXT";
})(NavigationEvent || (NavigationEvent = {}));
//# sourceMappingURL=datepicker-view-model.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker.js ***!
  \**************************************************************************/
/*! exports provided: NgbDatepicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDatepicker", function() { return NgbDatepicker; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngb_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ngb-calendar */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar.js");
/* harmony import */ var _ngb_date__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ngb-date */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date.js");
/* harmony import */ var _datepicker_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./datepicker-service */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-service.js");
/* harmony import */ var _datepicker_keymap_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./datepicker-keymap-service */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-keymap-service.js");
/* harmony import */ var _datepicker_view_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./datepicker-view-model */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-view-model.js");
/* harmony import */ var _datepicker_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./datepicker-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-config.js");
/* harmony import */ var _ngb_date_adapter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ngb-date-adapter */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-adapter.js");
/* harmony import */ var _datepicker_i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./datepicker-i18n */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-i18n.js");
/* harmony import */ var _datepicker_tools__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./datepicker-tools */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-tools.js");












var NGB_DATEPICKER_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return NgbDatepicker; }),
    multi: true
};
/**
 * A lightweight and highly configurable datepicker directive
 */
var NgbDatepicker = /** @class */ (function () {
    function NgbDatepicker(_keyMapService, _service, _calendar, i18n, config, _cd, _elementRef, _ngbDateAdapter, _ngZone) {
        var _this = this;
        this._keyMapService = _keyMapService;
        this._service = _service;
        this._calendar = _calendar;
        this.i18n = i18n;
        this._cd = _cd;
        this._elementRef = _elementRef;
        this._ngbDateAdapter = _ngbDateAdapter;
        this._ngZone = _ngZone;
        /**
           * An event fired when navigation happens and currently displayed month changes.
           * See NgbDatepickerNavigateEvent for the payload info.
           */
        this.navigate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
           * An event fired when user selects a date using keyboard or mouse.
           * The payload of the event is currently selected NgbDateStruct.
           */
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onChange = function (_) { };
        this.onTouched = function () { };
        ['dayTemplate', 'displayMonths', 'firstDayOfWeek', 'markDisabled', 'minDate', 'maxDate', 'navigation',
            'outsideDays', 'showWeekdays', 'showWeekNumbers', 'startDate']
            .forEach(function (input) { return _this[input] = config[input]; });
        this._selectSubscription = _service.select$.subscribe(function (date) { _this.select.emit(date.toStruct()); });
        this._subscription = _service.model$.subscribe(function (model) {
            var newDate = model.firstDate;
            var oldDate = _this.model ? _this.model.firstDate : null;
            var newSelectedDate = model.selectedDate;
            var oldSelectedDate = _this.model ? _this.model.selectedDate : null;
            var newFocusedDate = model.focusDate;
            var oldFocusedDate = _this.model ? _this.model.focusDate : null;
            _this.model = model;
            // handling selection change
            if (Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_11__["isChangedDate"])(newSelectedDate, oldSelectedDate)) {
                _this.onTouched();
                _this.onChange(_this._ngbDateAdapter.toModel(newSelectedDate));
            }
            // handling focus change
            if (Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_11__["isChangedDate"])(newFocusedDate, oldFocusedDate) && oldFocusedDate && model.focusVisible) {
                _this.focus();
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
    /**
     * Manually focus the focusable day in the datepicker
     */
    /**
       * Manually focus the focusable day in the datepicker
       */
    NgbDatepicker.prototype.focus = /**
       * Manually focus the focusable day in the datepicker
       */
    function () {
        var _this = this;
        this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1)).subscribe(function () {
            var elementToFocus = _this._elementRef.nativeElement.querySelector('div.ngb-dp-day[tabindex="0"]');
            if (elementToFocus) {
                elementToFocus.focus();
            }
        });
    };
    /**
     * Navigates current view to provided date.
     * With default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
     * If nothing or invalid date provided calendar will open current month.
     * Use 'startDate' input as an alternative
     */
    /**
       * Navigates current view to provided date.
       * With default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
       * If nothing or invalid date provided calendar will open current month.
       * Use 'startDate' input as an alternative
       */
    NgbDatepicker.prototype.navigateTo = /**
       * Navigates current view to provided date.
       * With default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
       * If nothing or invalid date provided calendar will open current month.
       * Use 'startDate' input as an alternative
       */
    function (date) { this._service.open(_ngb_date__WEBPACK_IMPORTED_MODULE_4__["NgbDate"].from(date)); };
    NgbDatepicker.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
        this._selectSubscription.unsubscribe();
    };
    NgbDatepicker.prototype.ngOnInit = function () {
        var _this = this;
        if (this.model === undefined) {
            ['displayMonths', 'markDisabled', 'firstDayOfWeek', 'navigation', 'minDate', 'maxDate'].forEach(function (input) { return _this._service[input] = _this[input]; });
            this.navigateTo(this.startDate);
        }
    };
    NgbDatepicker.prototype.ngOnChanges = function (changes) {
        var _this = this;
        ['displayMonths', 'markDisabled', 'firstDayOfWeek', 'navigation', 'minDate', 'maxDate']
            .filter(function (input) { return input in changes; })
            .forEach(function (input) { return _this._service[input] = _this[input]; });
        if ('startDate' in changes) {
            this.navigateTo(this.startDate);
        }
    };
    NgbDatepicker.prototype.onDateSelect = function (date) {
        this._service.focus(date);
        this._service.select(date, { emitEvent: true });
    };
    NgbDatepicker.prototype.onKeyDown = function (event) { this._keyMapService.processKey(event); };
    NgbDatepicker.prototype.onNavigateDateSelect = function (date) { this._service.open(date); };
    NgbDatepicker.prototype.onNavigateEvent = function (event) {
        switch (event) {
            case _datepicker_view_model__WEBPACK_IMPORTED_MODULE_7__["NavigationEvent"].PREV:
                this._service.open(this._calendar.getPrev(this.model.firstDate, 'm', 1));
                break;
            case _datepicker_view_model__WEBPACK_IMPORTED_MODULE_7__["NavigationEvent"].NEXT:
                this._service.open(this._calendar.getNext(this.model.firstDate, 'm', 1));
                break;
        }
    };
    NgbDatepicker.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    NgbDatepicker.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    NgbDatepicker.prototype.setDisabledState = function (isDisabled) { this._service.disabled = isDisabled; };
    NgbDatepicker.prototype.showFocus = function (focusVisible) { this._service.focusVisible = focusVisible; };
    NgbDatepicker.prototype.writeValue = function (value) { this._service.select(_ngb_date__WEBPACK_IMPORTED_MODULE_4__["NgbDate"].from(this._ngbDateAdapter.fromModel(value))); };
    NgbDatepicker.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    exportAs: 'ngbDatepicker',
                    selector: 'ngb-datepicker',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                    styles: ["\n    :host {\n      border: 1px solid rgba(0, 0, 0, 0.125);\n      border-radius: 0.25rem;\n      display: inline-block;\n    }\n    .ngb-dp-month {\n      pointer-events: none;\n    }\n    .ngb-dp-header {\n      border-bottom: 0px;\n      border-radius: .25rem 0.25rem 0rem 0rem;\n      padding-top: 0.25rem;\n    }\n    ngb-datepicker-month-view {\n      pointer-events: auto;\n    }\n    .ngb-dp-month-name {\n      font-size: larger;\n      height: 2rem;\n      line-height: 2rem;\n      text-align: center;\n    }\n    /deep/ .ngb-dp-month + .ngb-dp-month > ngb-datepicker-month-view > .ngb-dp-week {\n      padding-left: 1rem;\n    }\n    /deep/ .ngb-dp-month + .ngb-dp-month > .ngb-dp-month-name {\n      padding-left: 1rem;\n    }\n    /deep/ .ngb-dp-month:last-child .ngb-dp-week {\n      padding-right: .25rem;\n    }\n    /deep/ .ngb-dp-month:first-child .ngb-dp-week {\n      padding-left: .25rem;\n    }\n    /deep/ .ngb-dp-month > ngb-datepicker-month-view > .ngb-dp-week:last-child {\n      padding-bottom: .25rem;\n    }\n    .ngb-dp-months {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n    }\n  "],
                    template: "\n    <ng-template #dt let-date=\"date\" let-currentMonth=\"currentMonth\" let-selected=\"selected\" let-disabled=\"disabled\" let-focused=\"focused\">\n      <div ngbDatepickerDayView\n        [date]=\"date\"\n        [currentMonth]=\"currentMonth\"\n        [selected]=\"selected\"\n        [disabled]=\"disabled\"\n        [focused]=\"focused\">\n      </div>\n    </ng-template>\n\n    <div class=\"ngb-dp-header bg-light\">\n      <ngb-datepicker-navigation *ngIf=\"navigation !== 'none'\"\n        [date]=\"model.firstDate\"\n        [months]=\"model.months\"\n        [disabled]=\"model.disabled\"\n        [showSelect]=\"model.navigation === 'select'\"\n        [prevDisabled]=\"model.prevDisabled\"\n        [nextDisabled]=\"model.nextDisabled\"\n        [selectBoxes]=\"model.selectBoxes\"\n        (navigate)=\"onNavigateEvent($event)\"\n        (select)=\"onNavigateDateSelect($event)\">\n      </ngb-datepicker-navigation>\n    </div>\n\n    <div class=\"ngb-dp-months\" (keydown)=\"onKeyDown($event)\" (focusin)=\"showFocus(true)\" (focusout)=\"showFocus(false)\">\n      <ng-template ngFor let-month [ngForOf]=\"model.months\" let-i=\"index\">\n        <div class=\"ngb-dp-month d-block\">\n          <div *ngIf=\"navigation === 'none' || (displayMonths > 1 && navigation === 'select')\"\n                class=\"ngb-dp-month-name bg-light\">\n            {{ i18n.getMonthFullName(month.number) }} {{ month.year }}\n          </div>\n          <ngb-datepicker-month-view\n            [month]=\"month\"\n            [dayTemplate]=\"dayTemplate || dt\"\n            [showWeekdays]=\"showWeekdays\"\n            [showWeekNumbers]=\"showWeekNumbers\"\n            [outsideDays]=\"(displayMonths === 1 ? outsideDays : 'hidden')\"\n            (select)=\"onDateSelect($event)\">\n          </ngb-datepicker-month-view>\n        </div>\n      </ng-template>\n    </div>\n  ",
                    providers: [NGB_DATEPICKER_VALUE_ACCESSOR, _datepicker_service__WEBPACK_IMPORTED_MODULE_5__["NgbDatepickerService"], _datepicker_keymap_service__WEBPACK_IMPORTED_MODULE_6__["NgbDatepickerKeyMapService"]]
                },] },
    ];
    /** @nocollapse */
    NgbDatepicker.ctorParameters = function () { return [
        { type: _datepicker_keymap_service__WEBPACK_IMPORTED_MODULE_6__["NgbDatepickerKeyMapService"], },
        { type: _datepicker_service__WEBPACK_IMPORTED_MODULE_5__["NgbDatepickerService"], },
        { type: _ngb_calendar__WEBPACK_IMPORTED_MODULE_3__["NgbCalendar"], },
        { type: _datepicker_i18n__WEBPACK_IMPORTED_MODULE_10__["NgbDatepickerI18n"], },
        { type: _datepicker_config__WEBPACK_IMPORTED_MODULE_8__["NgbDatepickerConfig"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
        { type: _ngb_date_adapter__WEBPACK_IMPORTED_MODULE_9__["NgbDateAdapter"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], },
    ]; };
    NgbDatepicker.propDecorators = {
        "dayTemplate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "displayMonths": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "firstDayOfWeek": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "markDisabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "maxDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "minDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "navigation": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "outsideDays": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "showWeekdays": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "showWeekNumbers": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "startDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "navigate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
        "select": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    };
    return NgbDatepicker;
}());

//# sourceMappingURL=datepicker.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker.module.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker.module.js ***!
  \*********************************************************************************/
/*! exports provided: NgbDatepicker, NgbInputDatepicker, NgbCalendar, NgbCalendarIslamicCivil, NgbCalendarIslamicUmalqura, NgbDatepickerMonthView, NgbDatepickerDayView, NgbDatepickerNavigation, NgbDatepickerNavigationSelect, NgbDatepickerConfig, NgbDatepickerI18n, NgbDateAdapter, NgbDateParserFormatter, NgbDatepickerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDatepickerModule", function() { return NgbDatepickerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _util_focus_trap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/focus-trap */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/focus-trap.js");
/* harmony import */ var _datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./datepicker */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker.js");
/* harmony import */ var _datepicker_month_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./datepicker-month-view */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-month-view.js");
/* harmony import */ var _datepicker_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./datepicker-navigation */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-navigation.js");
/* harmony import */ var _datepicker_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./datepicker-input */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-input.js");
/* harmony import */ var _datepicker_day_view__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./datepicker-day-view */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-day-view.js");
/* harmony import */ var _datepicker_i18n__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./datepicker-i18n */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-i18n.js");
/* harmony import */ var _ngb_calendar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ngb-calendar */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar.js");
/* harmony import */ var _ngb_date_parser_formatter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ngb-date-parser-formatter */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-parser-formatter.js");
/* harmony import */ var _ngb_date_adapter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ngb-date-adapter */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-adapter.js");
/* harmony import */ var _datepicker_navigation_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./datepicker-navigation-select */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-navigation-select.js");
/* harmony import */ var _datepicker_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./datepicker-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbDatepicker", function() { return _datepicker__WEBPACK_IMPORTED_MODULE_4__["NgbDatepicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbInputDatepicker", function() { return _datepicker_input__WEBPACK_IMPORTED_MODULE_7__["NgbInputDatepicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbCalendar", function() { return _ngb_calendar__WEBPACK_IMPORTED_MODULE_10__["NgbCalendar"]; });

/* harmony import */ var _hijri_ngb_calendar_islamic_civil__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./hijri/ngb-calendar-islamic-civil */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/hijri/ngb-calendar-islamic-civil.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbCalendarIslamicCivil", function() { return _hijri_ngb_calendar_islamic_civil__WEBPACK_IMPORTED_MODULE_15__["NgbCalendarIslamicCivil"]; });

/* harmony import */ var _hijri_ngb_calendar_islamic_umalqura__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./hijri/ngb-calendar-islamic-umalqura */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/hijri/ngb-calendar-islamic-umalqura.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbCalendarIslamicUmalqura", function() { return _hijri_ngb_calendar_islamic_umalqura__WEBPACK_IMPORTED_MODULE_16__["NgbCalendarIslamicUmalqura"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbDatepickerMonthView", function() { return _datepicker_month_view__WEBPACK_IMPORTED_MODULE_5__["NgbDatepickerMonthView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbDatepickerDayView", function() { return _datepicker_day_view__WEBPACK_IMPORTED_MODULE_8__["NgbDatepickerDayView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbDatepickerNavigation", function() { return _datepicker_navigation__WEBPACK_IMPORTED_MODULE_6__["NgbDatepickerNavigation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbDatepickerNavigationSelect", function() { return _datepicker_navigation_select__WEBPACK_IMPORTED_MODULE_13__["NgbDatepickerNavigationSelect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbDatepickerConfig", function() { return _datepicker_config__WEBPACK_IMPORTED_MODULE_14__["NgbDatepickerConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbDatepickerI18n", function() { return _datepicker_i18n__WEBPACK_IMPORTED_MODULE_9__["NgbDatepickerI18n"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbDateAdapter", function() { return _ngb_date_adapter__WEBPACK_IMPORTED_MODULE_12__["NgbDateAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbDateParserFormatter", function() { return _ngb_date_parser_formatter__WEBPACK_IMPORTED_MODULE_11__["NgbDateParserFormatter"]; });





























var NgbDatepickerModule = /** @class */ (function () {
    function NgbDatepickerModule() {
    }
    NgbDatepickerModule.forRoot = function () {
        return {
            ngModule: NgbDatepickerModule,
            providers: [
                { provide: _ngb_calendar__WEBPACK_IMPORTED_MODULE_10__["NgbCalendar"], useClass: _ngb_calendar__WEBPACK_IMPORTED_MODULE_10__["NgbCalendarGregorian"] },
                { provide: _datepicker_i18n__WEBPACK_IMPORTED_MODULE_9__["NgbDatepickerI18n"], useClass: _datepicker_i18n__WEBPACK_IMPORTED_MODULE_9__["NgbDatepickerI18nDefault"] },
                { provide: _ngb_date_parser_formatter__WEBPACK_IMPORTED_MODULE_11__["NgbDateParserFormatter"], useClass: _ngb_date_parser_formatter__WEBPACK_IMPORTED_MODULE_11__["NgbDateISOParserFormatter"] },
                { provide: _ngb_date_adapter__WEBPACK_IMPORTED_MODULE_12__["NgbDateAdapter"], useClass: _ngb_date_adapter__WEBPACK_IMPORTED_MODULE_12__["NgbDateStructAdapter"] }, _datepicker_config__WEBPACK_IMPORTED_MODULE_14__["NgbDatepickerConfig"], _util_focus_trap__WEBPACK_IMPORTED_MODULE_3__["NgbFocusTrapFactory"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]
            ]
        };
    };
    NgbDatepickerModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [
                        _datepicker__WEBPACK_IMPORTED_MODULE_4__["NgbDatepicker"], _datepicker_month_view__WEBPACK_IMPORTED_MODULE_5__["NgbDatepickerMonthView"], _datepicker_navigation__WEBPACK_IMPORTED_MODULE_6__["NgbDatepickerNavigation"], _datepicker_navigation_select__WEBPACK_IMPORTED_MODULE_13__["NgbDatepickerNavigationSelect"], _datepicker_day_view__WEBPACK_IMPORTED_MODULE_8__["NgbDatepickerDayView"],
                        _datepicker_input__WEBPACK_IMPORTED_MODULE_7__["NgbInputDatepicker"]
                    ],
                    exports: [_datepicker__WEBPACK_IMPORTED_MODULE_4__["NgbDatepicker"], _datepicker_input__WEBPACK_IMPORTED_MODULE_7__["NgbInputDatepicker"]],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
                    entryComponents: [_datepicker__WEBPACK_IMPORTED_MODULE_4__["NgbDatepicker"]]
                },] },
    ];
    return NgbDatepickerModule;
}());

//# sourceMappingURL=datepicker.module.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/hijri/ngb-calendar-hijri.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/hijri/ngb-calendar-hijri.js ***!
  \****************************************************************************************/
/*! exports provided: NgbCalendarHijri */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbCalendarHijri", function() { return NgbCalendarHijri; });
/* harmony import */ var _ngb_calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ngb-calendar */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/util */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/util.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var NgbCalendarHijri = /** @class */ (function (_super) {
    __extends(NgbCalendarHijri, _super);
    function NgbCalendarHijri() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NgbCalendarHijri.prototype.getDaysPerWeek = function () { return 7; };
    NgbCalendarHijri.prototype.getMonths = function () { return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; };
    NgbCalendarHijri.prototype.getWeeksPerMonth = function () { return 6; };
    NgbCalendarHijri.prototype.isValid = function (date) {
        return date && Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["isNumber"])(date.year) && Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["isNumber"])(date.month) && Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["isNumber"])(date.day) &&
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
    /**
       * Returns the start of Hijri Month.
       * `month` is 0 for Muharram, 1 for Safar, etc.
       * `year` is any Hijri year.
       */
    NgbCalendarHijri.prototype._getMonthStart = /**
       * Returns the start of Hijri Month.
       * `month` is 0 for Muharram, 1 for Safar, etc.
       * `year` is any Hijri year.
       */
    function (year, month) {
        return Math.ceil(29.5 * month) + (year - 1) * 354 + Math.floor((3 + 11 * year) / 30.0);
    };
    /**
     * Returns the start of Hijri year.
     * `year` is any Hijri year.
     */
    /**
       * Returns the start of Hijri year.
       * `year` is any Hijri year.
       */
    NgbCalendarHijri.prototype._getYearStart = /**
       * Returns the start of Hijri year.
       * `year` is any Hijri year.
       */
    function (year) { return (year - 1) * 354 + Math.floor((3 + 11 * year) / 30.0); };
    NgbCalendarHijri.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
    ];
    return NgbCalendarHijri;
}(_ngb_calendar__WEBPACK_IMPORTED_MODULE_0__["NgbCalendar"]));

//# sourceMappingURL=ngb-calendar-hijri.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/hijri/ngb-calendar-islamic-civil.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/hijri/ngb-calendar-islamic-civil.js ***!
  \************************************************************************************************/
/*! exports provided: NgbCalendarIslamicCivil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbCalendarIslamicCivil", function() { return NgbCalendarIslamicCivil; });
/* harmony import */ var _ngb_calendar_hijri__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ngb-calendar-hijri */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/hijri/ngb-calendar-hijri.js");
/* harmony import */ var _ngb_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ngb-date */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



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
var NgbCalendarIslamicCivil = /** @class */ (function (_super) {
    __extends(NgbCalendarIslamicCivil, _super);
    function NgbCalendarIslamicCivil() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns the equivalent islamic(civil) date value for a give input Gregorian date.
     * `gdate` is a JS Date to be converted to Hijri.
     */
    /**
       * Returns the equivalent islamic(civil) date value for a give input Gregorian date.
       * `gdate` is a JS Date to be converted to Hijri.
       */
    NgbCalendarIslamicCivil.prototype.fromGregorian = /**
       * Returns the equivalent islamic(civil) date value for a give input Gregorian date.
       * `gdate` is a JS Date to be converted to Hijri.
       */
    function (gdate) {
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
        return new _ngb_date__WEBPACK_IMPORTED_MODULE_1__["NgbDate"](hYear, hMonth + 1, hDay);
    };
    /**
     * Returns the equivalent JS date value for a give input islamic(civil) date.
     * `hijriDate` is an islamic(civil) date to be converted to Gregorian.
     */
    /**
       * Returns the equivalent JS date value for a give input islamic(civil) date.
       * `hijriDate` is an islamic(civil) date to be converted to Gregorian.
       */
    NgbCalendarIslamicCivil.prototype.toGregorian = /**
       * Returns the equivalent JS date value for a give input islamic(civil) date.
       * `hijriDate` is an islamic(civil) date to be converted to Gregorian.
       */
    function (hijriDate) {
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
    /**
       * Returns the number of days in a specific Hijri month.
       * `month` is 1 for Muharram, 2 for Safar, etc.
       * `year` is any Hijri year.
       */
    NgbCalendarIslamicCivil.prototype.getDaysInIslamicMonth = /**
       * Returns the number of days in a specific Hijri month.
       * `month` is 1 for Muharram, 2 for Safar, etc.
       * `year` is any Hijri year.
       */
    function (month, year) {
        year = year + Math.floor(month / 13);
        month = ((month - 1) % 12) + 1;
        var length = 29 + month % 2;
        if (month === 12 && this._isIslamicLeapYear(year)) {
            length++;
        }
        return length;
    };
    NgbCalendarIslamicCivil.prototype.getNext = function (date, period, number) {
        if (period === void 0) { period = 'd'; }
        if (number === void 0) { number = 1; }
        date = _ngb_date__WEBPACK_IMPORTED_MODULE_1__["NgbDate"].from(date);
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
        if (period === void 0) { period = 'd'; }
        if (number === void 0) { number = 1; }
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
        var MuhDate = this.toGregorian(new _ngb_date__WEBPACK_IMPORTED_MODULE_1__["NgbDate"](date.year, 1, 1)); // Compare with Muharram 1
        return Math.floor(Math.round((time - MuhDate.getTime()) / 86400000) / 7) + 1;
    };
    NgbCalendarIslamicCivil.prototype.getToday = function () { return this.fromGregorian(new Date()); };
    NgbCalendarIslamicCivil.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"] },
    ];
    return NgbCalendarIslamicCivil;
}(_ngb_calendar_hijri__WEBPACK_IMPORTED_MODULE_0__["NgbCalendarHijri"]));

//# sourceMappingURL=ngb-calendar-islamic-civil.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/hijri/ngb-calendar-islamic-umalqura.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/hijri/ngb-calendar-islamic-umalqura.js ***!
  \***************************************************************************************************/
/*! exports provided: NgbCalendarIslamicUmalqura */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbCalendarIslamicUmalqura", function() { return NgbCalendarIslamicUmalqura; });
/* harmony import */ var _ngb_calendar_islamic_civil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ngb-calendar-islamic-civil */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/hijri/ngb-calendar-islamic-civil.js");
/* harmony import */ var _ngb_calendar_hijri__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ngb-calendar-hijri */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/hijri/ngb-calendar-hijri.js");
/* harmony import */ var _ngb_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ngb-date */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




/**
 * Umalqura calendar is one type of Hijri calendars used in islamic countries.
 * This Calendar is used by Saudi Arabia for administrative purpose.
 * Unlike tabular calendars, the algorithm involves astronomical calculation, but it's still deterministic.
 * http://cldr.unicode.org/development/development-process/design-proposals/islamic-calendar-types
 */
var GREGORIAN_FIRST_DATE = new Date(1882, 10, 12);
var GREGORIAN_LAST_DATE = new Date(2174, 10, 25);
var HIJRI_BEGIN = 1300;
var HIJRI_END = 1600;
var ONE_DAY = 1000 * 60 * 60 * 24;
var ISLAMIC_CIVIL = new _ngb_calendar_islamic_civil__WEBPACK_IMPORTED_MODULE_0__["NgbCalendarIslamicCivil"]();
var MONTH_LENGTH = [
    '101010101010', '110101010100', '111011001001', '011011010100', '011011101010',
    '001101101100', '101010101101', '010101010101', '011010101001', '011110010010',
    '101110101001', '010111010100', '101011011010', '010101011100', '110100101101',
    '011010010101', '011101001010', '101101010100', '101101101010', '010110101101',
    '010010101110', '101001001111', '010100010111', '011010001011', '011010100101',
    '101011010101', '001011010110', '100101011011', '010010011101', '101001001101',
    '110100100110', '110110010101', '010110101100', '100110110110', '001010111010',
    '101001011011', '010100101011', '101010010101', '011011001010', '101011101001',
    '001011110100', '100101110110', '001010110110', '100101010110', '101011001010',
    '101110100100', '101111010010', '010111011001', '001011011100', '100101101101',
    '010101001101', '101010100101', '101101010010', '101110100101', '010110110100',
    '100110110110', '010101010111', '001010010111', '010101001011', '011010100011',
    '011101010010', '101101100101', '010101101010', '101010101011', '010100101011',
    '110010010101', '110101001010', '110110100101', '010111001010', '101011010110',
    '100101010111', '010010101011', '100101001011', '101010100101', '101101010010',
    '101101101010', '010101110101', '001001110110', '100010110111', '010001011011',
    '010101010101', '010110101001', '010110110100', '100111011010', '010011011101',
    '001001101110', '100100110110', '101010101010', '110101010100', '110110110010',
    '010111010101', '001011011010', '100101011011', '010010101011', '101001010101',
    '101101001001', '101101100100', '101101110001', '010110110100', '101010110101',
    '101001010101', '110100100101', '111010010010', '111011001001', '011011010100',
    '101011101001', '100101101011', '010010101011', '101010010011', '110101001001',
    '110110100100', '110110110010', '101010111001', '010010111010', '101001011011',
    '010100101011', '101010010101', '101100101010', '101101010101', '010101011100',
    '010010111101', '001000111101', '100100011101', '101010010101', '101101001010',
    '101101011010', '010101101101', '001010110110', '100100111011', '010010011011',
    '011001010101', '011010101001', '011101010100', '101101101010', '010101101100',
    '101010101101', '010101010101', '101100101001', '101110010010', '101110101001',
    '010111010100', '101011011010', '010101011010', '101010101011', '010110010101',
    '011101001001', '011101100100', '101110101010', '010110110101', '001010110110',
    '101001010110', '111001001101', '101100100101', '101101010010', '101101101010',
    '010110101101', '001010101110', '100100101111', '010010010111', '011001001011',
    '011010100101', '011010101100', '101011010110', '010101011101', '010010011101',
    '101001001101', '110100010110', '110110010101', '010110101010', '010110110101',
    '001011011010', '100101011011', '010010101101', '010110010101', '011011001010',
    '011011100100', '101011101010', '010011110101', '001010110110', '100101010110',
    '101010101010', '101101010100', '101111010010', '010111011001', '001011101010',
    '100101101101', '010010101101', '101010010101', '101101001010', '101110100101',
    '010110110010', '100110110101', '010011010110', '101010010111', '010101000111',
    '011010010011', '011101001001', '101101010101', '010101101010', '101001101011',
    '010100101011', '101010001011', '110101000110', '110110100011', '010111001010',
    '101011010110', '010011011011', '001001101011', '100101001011', '101010100101',
    '101101010010', '101101101001', '010101110101', '000101110110', '100010110111',
    '001001011011', '010100101011', '010101100101', '010110110100', '100111011010',
    '010011101101', '000101101101', '100010110110', '101010100110', '110101010010',
    '110110101001', '010111010100', '101011011010', '100101011011', '010010101011',
    '011001010011', '011100101001', '011101100010', '101110101001', '010110110010',
    '101010110101', '010101010101', '101100100101', '110110010010', '111011001001',
    '011011010010', '101011101001', '010101101011', '010010101011', '101001010101',
    '110100101001', '110101010100', '110110101010', '100110110101', '010010111010',
    '101000111011', '010010011011', '101001001101', '101010101010', '101011010101',
    '001011011010', '100101011101', '010001011110', '101000101110', '110010011010',
    '110101010101', '011010110010', '011010111001', '010010111010', '101001011101',
    '010100101101', '101010010101', '101101010010', '101110101000', '101110110100',
    '010110111001', '001011011010', '100101011010', '101101001010', '110110100100',
    '111011010001', '011011101000', '101101101010', '010101101101', '010100110101',
    '011010010101', '110101001010', '110110101000', '110111010100', '011011011010',
    '010101011011', '001010011101', '011000101011', '101100010101', '101101001010',
    '101110010101', '010110101010', '101010101110', '100100101110', '110010001111',
    '010100100111', '011010010101', '011010101010', '101011010110', '010101011101',
    '001010011101'
];
function getDaysDiff(date1, date2) {
    var diff = Math.abs(date1.getTime() - date2.getTime());
    return Math.round(diff / ONE_DAY);
}
var NgbCalendarIslamicUmalqura = /** @class */ (function (_super) {
    __extends(NgbCalendarIslamicUmalqura, _super);
    function NgbCalendarIslamicUmalqura() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
    * Returns the equivalent islamic(Umalqura) date value for a give input Gregorian date.
    * `gdate` is s JS Date to be converted to Hijri.
    */
    /**
      * Returns the equivalent islamic(Umalqura) date value for a give input Gregorian date.
      * `gdate` is s JS Date to be converted to Hijri.
      */
    NgbCalendarIslamicUmalqura.prototype.fromGregorian = /**
      * Returns the equivalent islamic(Umalqura) date value for a give input Gregorian date.
      * `gdate` is s JS Date to be converted to Hijri.
      */
    function (gDate) {
        var hDay = 1, hMonth = 0, hYear = 1300;
        var daysDiff = getDaysDiff(gDate, GREGORIAN_FIRST_DATE);
        if (gDate.getTime() - GREGORIAN_FIRST_DATE.getTime() >= 0 && gDate.getTime() - GREGORIAN_LAST_DATE.getTime() <= 0) {
            var year = 1300;
            for (var i = 0; i < MONTH_LENGTH.length; i++, year++) {
                for (var j = 0; j < 12; j++) {
                    var numOfDays = +MONTH_LENGTH[i][j] + 29;
                    if (daysDiff <= numOfDays) {
                        hDay = daysDiff + 1;
                        if (hDay > numOfDays) {
                            hDay = 1;
                            j++;
                        }
                        if (j > 11) {
                            j = 0;
                            year++;
                        }
                        hMonth = j;
                        hYear = year;
                        return new _ngb_date__WEBPACK_IMPORTED_MODULE_2__["NgbDate"](hYear, hMonth + 1, hDay);
                    }
                    daysDiff = daysDiff - numOfDays;
                }
            }
        }
        else {
            return ISLAMIC_CIVIL.fromGregorian(gDate);
        }
    };
    /**
    * Converts the current Hijri date to Gregorian.
    */
    /**
      * Converts the current Hijri date to Gregorian.
      */
    NgbCalendarIslamicUmalqura.prototype.toGregorian = /**
      * Converts the current Hijri date to Gregorian.
      */
    function (hijriDate) {
        var hYear = hijriDate.year;
        var hMonth = hijriDate.month - 1;
        var hDay = hijriDate.day;
        var gDate = new Date(GREGORIAN_FIRST_DATE);
        var dayDiff = hDay - 1;
        if (hYear >= HIJRI_BEGIN && hYear <= HIJRI_END) {
            for (var y = 0; y < hYear - HIJRI_BEGIN; y++) {
                for (var m = 0; m < 12; m++) {
                    dayDiff += +MONTH_LENGTH[y][m] + 29;
                }
            }
            for (var m = 0; m < hMonth; m++) {
                dayDiff += +MONTH_LENGTH[hYear - HIJRI_BEGIN][m] + 29;
            }
            gDate.setDate(GREGORIAN_FIRST_DATE.getDate() + dayDiff);
        }
        else {
            gDate = ISLAMIC_CIVIL.toGregorian(hijriDate);
        }
        return gDate;
    };
    /**
    * Returns the number of days in a specific Hijri month.
    * `month` is 1 for Muharram, 2 for Safar, etc.
    * `year` is any Hijri year.
    */
    /**
      * Returns the number of days in a specific Hijri month.
      * `month` is 1 for Muharram, 2 for Safar, etc.
      * `year` is any Hijri year.
      */
    NgbCalendarIslamicUmalqura.prototype.getDaysInIslamicMonth = /**
      * Returns the number of days in a specific Hijri month.
      * `month` is 1 for Muharram, 2 for Safar, etc.
      * `year` is any Hijri year.
      */
    function (month, year) {
        if (year >= HIJRI_BEGIN && year <= HIJRI_END) {
            var pos = year - HIJRI_BEGIN;
            return MONTH_LENGTH[pos].charAt(month - 1) === '1' ? 30 : 29;
        }
        return ISLAMIC_CIVIL.getDaysInIslamicMonth(month, year);
    };
    NgbCalendarIslamicUmalqura.prototype.getNext = function (date, period, number) {
        if (period === void 0) { period = 'd'; }
        if (number === void 0) { number = 1; }
        date = _ngb_date__WEBPACK_IMPORTED_MODULE_2__["NgbDate"].from(date);
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
    NgbCalendarIslamicUmalqura.prototype.getPrev = function (date, period, number) {
        if (period === void 0) { period = 'd'; }
        if (number === void 0) { number = 1; }
        return this.getNext(date, period, -number);
    };
    NgbCalendarIslamicUmalqura.prototype.getWeekday = function (date) {
        var day = this.toGregorian(date).getDay();
        // in JS Date Sun=0, in ISO 8601 Sun=7
        return day === 0 ? 7 : day;
    };
    NgbCalendarIslamicUmalqura.prototype.getWeekNumber = function (week, firstDayOfWeek) {
        // in JS Date Sun=0, in ISO 8601 Sun=7
        if (firstDayOfWeek === 7) {
            firstDayOfWeek = 0;
        }
        var thursdayIndex = (4 + 7 - firstDayOfWeek) % 7;
        var date = week[thursdayIndex];
        var jsDate = this.toGregorian(date);
        jsDate.setDate(jsDate.getDate() + 4 - (jsDate.getDay() || 7)); // Thursday
        var time = jsDate.getTime();
        var MuhDate = this.toGregorian(new _ngb_date__WEBPACK_IMPORTED_MODULE_2__["NgbDate"](date.year, 1, 1)); // Compare with Muharram 1
        return Math.floor(Math.round((time - MuhDate.getTime()) / ONE_DAY) / 7) + 1;
    };
    NgbCalendarIslamicUmalqura.prototype.getToday = function () { return this.fromGregorian(new Date()); };
    NgbCalendarIslamicUmalqura.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"] },
    ];
    return NgbCalendarIslamicUmalqura;
}(_ngb_calendar_hijri__WEBPACK_IMPORTED_MODULE_1__["NgbCalendarHijri"]));

//# sourceMappingURL=ngb-calendar-islamic-umalqura.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar.js ***!
  \****************************************************************************/
/*! exports provided: NgbCalendar, NgbCalendarGregorian */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbCalendar", function() { return NgbCalendar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbCalendarGregorian", function() { return NgbCalendarGregorian; });
/* harmony import */ var _ngb_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ngb-date */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/util */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/util.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



function fromJSDate(jsDate) {
    return new _ngb_date__WEBPACK_IMPORTED_MODULE_0__["NgbDate"](jsDate.getFullYear(), jsDate.getMonth() + 1, jsDate.getDate());
}
function toJSDate(date) {
    var jsDate = new Date(date.year, date.month - 1, date.day, 12);
    // this is done avoid 30 -> 1930 conversion
    if (!isNaN(jsDate.getTime())) {
        jsDate.setFullYear(date.year);
    }
    return jsDate;
}
var NgbCalendar = /** @class */ (function () {
    function NgbCalendar() {
    }
    NgbCalendar.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
    ];
    return NgbCalendar;
}());

var NgbCalendarGregorian = /** @class */ (function (_super) {
    __extends(NgbCalendarGregorian, _super);
    function NgbCalendarGregorian() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NgbCalendarGregorian.prototype.getDaysPerWeek = function () { return 7; };
    NgbCalendarGregorian.prototype.getMonths = function () { return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; };
    NgbCalendarGregorian.prototype.getWeeksPerMonth = function () { return 6; };
    NgbCalendarGregorian.prototype.getNext = function (date, period, number) {
        if (period === void 0) { period = 'd'; }
        if (number === void 0) { number = 1; }
        var jsDate = toJSDate(date);
        switch (period) {
            case 'y':
                return new _ngb_date__WEBPACK_IMPORTED_MODULE_0__["NgbDate"](date.year + number, 1, 1);
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
        if (period === void 0) { period = 'd'; }
        if (number === void 0) { number = 1; }
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
        if (!date || !Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["isInteger"])(date.year) || !Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["isInteger"])(date.month) || !Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["isInteger"])(date.day)) {
            return false;
        }
        var jsDate = toJSDate(date);
        return !isNaN(jsDate.getTime()) && jsDate.getFullYear() === date.year && jsDate.getMonth() + 1 === date.month &&
            jsDate.getDate() === date.day;
    };
    NgbCalendarGregorian.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
    ];
    return NgbCalendarGregorian;
}(NgbCalendar));

//# sourceMappingURL=ngb-calendar.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-adapter.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-adapter.js ***!
  \********************************************************************************/
/*! exports provided: NgbDateAdapter, NgbDateStructAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDateAdapter", function() { return NgbDateAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDateStructAdapter", function() { return NgbDateStructAdapter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * Abstract type serving as a DI token for the service converting from your application Date model to internal
 * NgbDateStruct model.
 * A default implementation converting from and to NgbDateStruct is provided for retro-compatibility,
 * but you can provide another implementation to use an alternative format, ie for using with native Date Object.
 */
var NgbDateAdapter = /** @class */ (function () {
    function NgbDateAdapter() {
    }
    NgbDateAdapter.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return NgbDateAdapter;
}());

var NgbDateStructAdapter = /** @class */ (function (_super) {
    __extends(NgbDateStructAdapter, _super);
    function NgbDateStructAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Converts a NgbDateStruct value into NgbDateStruct value
     * @param  {NgbDateStruct} value
     * @return {NgbDateStruct}
     */
    /**
       * Converts a NgbDateStruct value into NgbDateStruct value
       * @param  {NgbDateStruct} value
       * @return {NgbDateStruct}
       */
    NgbDateStructAdapter.prototype.fromModel = /**
       * Converts a NgbDateStruct value into NgbDateStruct value
       * @param  {NgbDateStruct} value
       * @return {NgbDateStruct}
       */
    function (date) {
        return (date && date.year && date.month && date.day) ? { year: date.year, month: date.month, day: date.day } : null;
    };
    /**
     * Converts a NgbDateStruct value into NgbDateStruct value
     * @param  {NgbDateStruct} value
     * @return {NgbDateStruct}
     */
    /**
       * Converts a NgbDateStruct value into NgbDateStruct value
       * @param  {NgbDateStruct} value
       * @return {NgbDateStruct}
       */
    NgbDateStructAdapter.prototype.toModel = /**
       * Converts a NgbDateStruct value into NgbDateStruct value
       * @param  {NgbDateStruct} value
       * @return {NgbDateStruct}
       */
    function (date) {
        return (date && date.year && date.month && date.day) ? { year: date.year, month: date.month, day: date.day } : null;
    };
    NgbDateStructAdapter.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return NgbDateStructAdapter;
}(NgbDateAdapter));

//# sourceMappingURL=ngb-date-adapter.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-parser-formatter.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-parser-formatter.js ***!
  \*****************************************************************************************/
/*! exports provided: NgbDateParserFormatter, NgbDateISOParserFormatter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDateParserFormatter", function() { return NgbDateParserFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDateISOParserFormatter", function() { return NgbDateISOParserFormatter; });
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/util */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/util.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * Abstract type serving as a DI token for the service parsing and formatting dates for the NgbInputDatepicker
 * directive. A default implementation using the ISO 8601 format is provided, but you can provide another implementation
 * to use an alternative format.
 */
var /**
 * Abstract type serving as a DI token for the service parsing and formatting dates for the NgbInputDatepicker
 * directive. A default implementation using the ISO 8601 format is provided, but you can provide another implementation
 * to use an alternative format.
 */
NgbDateParserFormatter = /** @class */ (function () {
    function NgbDateParserFormatter() {
    }
    return NgbDateParserFormatter;
}());
/**
 * Abstract type serving as a DI token for the service parsing and formatting dates for the NgbInputDatepicker
 * directive. A default implementation using the ISO 8601 format is provided, but you can provide another implementation
 * to use an alternative format.
 */

var NgbDateISOParserFormatter = /** @class */ (function (_super) {
    __extends(NgbDateISOParserFormatter, _super);
    function NgbDateISOParserFormatter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NgbDateISOParserFormatter.prototype.parse = function (value) {
        if (value) {
            var dateParts = value.trim().split('-');
            if (dateParts.length === 1 && Object(_util_util__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(dateParts[0])) {
                return { year: Object(_util_util__WEBPACK_IMPORTED_MODULE_0__["toInteger"])(dateParts[0]), month: null, day: null };
            }
            else if (dateParts.length === 2 && Object(_util_util__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(dateParts[0]) && Object(_util_util__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(dateParts[1])) {
                return { year: Object(_util_util__WEBPACK_IMPORTED_MODULE_0__["toInteger"])(dateParts[0]), month: Object(_util_util__WEBPACK_IMPORTED_MODULE_0__["toInteger"])(dateParts[1]), day: null };
            }
            else if (dateParts.length === 3 && Object(_util_util__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(dateParts[0]) && Object(_util_util__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(dateParts[1]) && Object(_util_util__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(dateParts[2])) {
                return { year: Object(_util_util__WEBPACK_IMPORTED_MODULE_0__["toInteger"])(dateParts[0]), month: Object(_util_util__WEBPACK_IMPORTED_MODULE_0__["toInteger"])(dateParts[1]), day: Object(_util_util__WEBPACK_IMPORTED_MODULE_0__["toInteger"])(dateParts[2]) };
            }
        }
        return null;
    };
    NgbDateISOParserFormatter.prototype.format = function (date) {
        return date ?
            date.year + "-" + (Object(_util_util__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(date.month) ? Object(_util_util__WEBPACK_IMPORTED_MODULE_0__["padNumber"])(date.month) : '') + "-" + (Object(_util_util__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(date.day) ? Object(_util_util__WEBPACK_IMPORTED_MODULE_0__["padNumber"])(date.day) : '') :
            '';
    };
    return NgbDateISOParserFormatter;
}(NgbDateParserFormatter));

//# sourceMappingURL=ngb-date-parser-formatter.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date.js":
/*!************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date.js ***!
  \************************************************************************/
/*! exports provided: NgbDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDate", function() { return NgbDate; });
var NgbDate = /** @class */ (function () {
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

//# sourceMappingURL=ngb-date.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/dropdown/dropdown-config.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/dropdown/dropdown-config.js ***!
  \*****************************************************************************/
/*! exports provided: NgbDropdownConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDropdownConfig", function() { return NgbDropdownConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/**
 * Configuration service for the NgbDropdown directive.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the dropdowns used in the application.
 */
var NgbDropdownConfig = /** @class */ (function () {
    function NgbDropdownConfig() {
        this.autoClose = true;
        this.placement = 'bottom-left';
    }
    NgbDropdownConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return NgbDropdownConfig;
}());

//# sourceMappingURL=dropdown-config.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/dropdown/dropdown.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/dropdown/dropdown.js ***!
  \**********************************************************************/
/*! exports provided: NgbDropdownMenu, NgbDropdownAnchor, NgbDropdownToggle, NgbDropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDropdownMenu", function() { return NgbDropdownMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDropdownAnchor", function() { return NgbDropdownAnchor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDropdownToggle", function() { return NgbDropdownToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDropdown", function() { return NgbDropdown; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dropdown_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/dropdown/dropdown-config.js");
/* harmony import */ var _util_positioning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/positioning */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/positioning.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



/**
 */
var NgbDropdownMenu = /** @class */ (function () {
    function NgbDropdownMenu(dropdown, _elementRef, _renderer) {
        this.dropdown = dropdown;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this.placement = 'bottom';
        this.isOpen = false;
    }
    NgbDropdownMenu.prototype.isEventFrom = function ($event) { return this._elementRef.nativeElement.contains($event.target); };
    NgbDropdownMenu.prototype.position = function (triggerEl, placement) {
        this.applyPlacement(Object(_util_positioning__WEBPACK_IMPORTED_MODULE_2__["positionElements"])(triggerEl, this._elementRef.nativeElement, placement));
    };
    NgbDropdownMenu.prototype.applyPlacement = function (_placement) {
        // remove the current placement classes
        this._renderer.removeClass(this._elementRef.nativeElement.parentNode, 'dropup');
        this._renderer.removeClass(this._elementRef.nativeElement.parentNode, 'dropdown');
        this.placement = _placement;
        /**
             * apply the new placement
             * in case of top use up-arrow or down-arrow otherwise
             */
        if (_placement.search('^top') !== -1) {
            this._renderer.addClass(this._elementRef.nativeElement.parentNode, 'dropup');
        }
        else {
            this._renderer.addClass(this._elementRef.nativeElement.parentNode, 'dropdown');
        }
    };
    NgbDropdownMenu.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[ngbDropdownMenu]',
                    host: { '[class.dropdown-menu]': 'true', '[class.show]': 'dropdown.isOpen()', '[attr.x-placement]': 'placement' }
                },] },
    ];
    /** @nocollapse */
    NgbDropdownMenu.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return NgbDropdown; }),] },] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    ]; };
    return NgbDropdownMenu;
}());

/**
 * Marks an element to which dropdown menu will be anchored. This is a simple version
 * of the NgbDropdownToggle directive. It plays the same role as NgbDropdownToggle but
 * doesn't listen to click events to toggle dropdown menu thus enabling support for
 * events other than click.
 *
 * @since 1.1.0
 */
var NgbDropdownAnchor = /** @class */ (function () {
    function NgbDropdownAnchor(dropdown, _elementRef) {
        this.dropdown = dropdown;
        this._elementRef = _elementRef;
        this.anchorEl = _elementRef.nativeElement;
    }
    NgbDropdownAnchor.prototype.isEventFrom = function ($event) { return this._elementRef.nativeElement.contains($event.target); };
    NgbDropdownAnchor.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[ngbDropdownAnchor]',
                    host: { 'class': 'dropdown-toggle', 'aria-haspopup': 'true', '[attr.aria-expanded]': 'dropdown.isOpen()' }
                },] },
    ];
    /** @nocollapse */
    NgbDropdownAnchor.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return NgbDropdown; }),] },] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    ]; };
    return NgbDropdownAnchor;
}());

/**
 * Allows the dropdown to be toggled via click. This directive is optional: you can use NgbDropdownAnchor as an
 * alternative.
 */
var NgbDropdownToggle = /** @class */ (function (_super) {
    __extends(NgbDropdownToggle, _super);
    function NgbDropdownToggle(dropdown, elementRef) {
        return _super.call(this, dropdown, elementRef) || this;
    }
    NgbDropdownToggle.prototype.toggleOpen = function () { this.dropdown.toggle(); };
    NgbDropdownToggle.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[ngbDropdownToggle]',
                    host: {
                        'class': 'dropdown-toggle',
                        'aria-haspopup': 'true',
                        '[attr.aria-expanded]': 'dropdown.isOpen()',
                        '(click)': 'toggleOpen()'
                    },
                    providers: [{ provide: NgbDropdownAnchor, useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return NgbDropdownToggle; }) }]
                },] },
    ];
    /** @nocollapse */
    NgbDropdownToggle.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return NgbDropdown; }),] },] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    ]; };
    return NgbDropdownToggle;
}(NgbDropdownAnchor));

/**
 * Transforms a node into a dropdown.
 */
var NgbDropdown = /** @class */ (function () {
    function NgbDropdown(config, ngZone) {
        var _this = this;
        /**
           *  Defines whether or not the dropdown-menu is open initially.
           */
        this._open = false;
        /**
           *  An event fired when the dropdown is opened or closed.
           *  Event's payload equals whether dropdown is open.
           */
        this.openChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.placement = config.placement;
        this.autoClose = config.autoClose;
        this._zoneSubscription = ngZone.onStable.subscribe(function () { _this._positionMenu(); });
    }
    NgbDropdown.prototype.ngOnInit = function () {
        if (this._menu) {
            this._menu.applyPlacement(Array.isArray(this.placement) ? (this.placement[0]) : this.placement);
        }
    };
    /**
     * Checks if the dropdown menu is open or not.
     */
    /**
       * Checks if the dropdown menu is open or not.
       */
    NgbDropdown.prototype.isOpen = /**
       * Checks if the dropdown menu is open or not.
       */
    function () { return this._open; };
    /**
     * Opens the dropdown menu of a given navbar or tabbed navigation.
     */
    /**
       * Opens the dropdown menu of a given navbar or tabbed navigation.
       */
    NgbDropdown.prototype.open = /**
       * Opens the dropdown menu of a given navbar or tabbed navigation.
       */
    function () {
        if (!this._open) {
            this._open = true;
            this._positionMenu();
            this.openChange.emit(true);
        }
    };
    /**
     * Closes the dropdown menu of a given navbar or tabbed navigation.
     */
    /**
       * Closes the dropdown menu of a given navbar or tabbed navigation.
       */
    NgbDropdown.prototype.close = /**
       * Closes the dropdown menu of a given navbar or tabbed navigation.
       */
    function () {
        if (this._open) {
            this._open = false;
            this.openChange.emit(false);
        }
    };
    /**
     * Toggles the dropdown menu of a given navbar or tabbed navigation.
     */
    /**
       * Toggles the dropdown menu of a given navbar or tabbed navigation.
       */
    NgbDropdown.prototype.toggle = /**
       * Toggles the dropdown menu of a given navbar or tabbed navigation.
       */
    function () {
        if (this.isOpen()) {
            this.close();
        }
        else {
            this.open();
        }
    };
    NgbDropdown.prototype.closeFromClick = function ($event) {
        if (this.autoClose && $event.button !== 2 && !this._isEventFromToggle($event)) {
            if (this.autoClose === true) {
                this.close();
            }
            else if (this.autoClose === 'inside' && this._isEventFromMenu($event)) {
                this.close();
            }
            else if (this.autoClose === 'outside' && !this._isEventFromMenu($event)) {
                this.close();
            }
        }
    };
    NgbDropdown.prototype.closeFromOutsideEsc = function () {
        if (this.autoClose) {
            this.close();
        }
    };
    NgbDropdown.prototype.ngOnDestroy = function () { this._zoneSubscription.unsubscribe(); };
    NgbDropdown.prototype._isEventFromToggle = function ($event) { return this._anchor.isEventFrom($event); };
    NgbDropdown.prototype._isEventFromMenu = function ($event) { return this._menu ? this._menu.isEventFrom($event) : false; };
    NgbDropdown.prototype._positionMenu = function () {
        if (this.isOpen() && this._menu) {
            this._menu.position(this._anchor.anchorEl, this.placement);
        }
    };
    NgbDropdown.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[ngbDropdown]',
                    exportAs: 'ngbDropdown',
                    host: {
                        '[class.show]': 'isOpen()',
                        '(keyup.esc)': 'closeFromOutsideEsc()',
                        '(document:click)': 'closeFromClick($event)'
                    }
                },] },
    ];
    /** @nocollapse */
    NgbDropdown.ctorParameters = function () { return [
        { type: _dropdown_config__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownConfig"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    NgbDropdown.propDecorators = {
        "_menu": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NgbDropdownMenu,] },],
        "_anchor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NgbDropdownAnchor,] },],
        "autoClose": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "_open": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['open',] },],
        "placement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "openChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return NgbDropdown;
}());

//# sourceMappingURL=dropdown.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/dropdown/dropdown.module.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/dropdown/dropdown.module.js ***!
  \*****************************************************************************/
/*! exports provided: NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownConfig, NgbDropdownModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDropdownModule", function() { return NgbDropdownModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown */ "./node_modules/@ng-bootstrap/ng-bootstrap/dropdown/dropdown.js");
/* harmony import */ var _dropdown_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropdown-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/dropdown/dropdown-config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbDropdown", function() { return _dropdown__WEBPACK_IMPORTED_MODULE_1__["NgbDropdown"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbDropdownToggle", function() { return _dropdown__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownToggle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbDropdownMenu", function() { return _dropdown__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbDropdownConfig", function() { return _dropdown_config__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownConfig"]; });






var NGB_DROPDOWN_DIRECTIVES = [_dropdown__WEBPACK_IMPORTED_MODULE_1__["NgbDropdown"], _dropdown__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownAnchor"], _dropdown__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownToggle"], _dropdown__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownMenu"]];
var NgbDropdownModule = /** @class */ (function () {
    function NgbDropdownModule() {
    }
    NgbDropdownModule.forRoot = function () { return { ngModule: NgbDropdownModule, providers: [_dropdown_config__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownConfig"]] }; };
    NgbDropdownModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{ declarations: NGB_DROPDOWN_DIRECTIVES, exports: NGB_DROPDOWN_DIRECTIVES },] },
    ];
    return NgbDropdownModule;
}());

//# sourceMappingURL=dropdown.module.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/index.js ***!
  \**********************************************************/
/*! exports provided: NgbAccordionModule, NgbAccordionConfig, NgbAccordion, NgbPanel, NgbPanelTitle, NgbPanelContent, NgbAlertModule, NgbAlertConfig, NgbAlert, NgbButtonsModule, NgbCheckBox, NgbRadioGroup, NgbCarouselModule, NgbCarouselConfig, NgbCarousel, NgbSlide, NgbCollapseModule, NgbCollapse, NgbCalendar, NgbCalendarIslamicCivil, NgbCalendarIslamicUmalqura, NgbDatepickerModule, NgbDatepickerI18n, NgbDatepickerConfig, NgbDateParserFormatter, NgbDateAdapter, NgbDatepicker, NgbInputDatepicker, NgbDropdownModule, NgbDropdownConfig, NgbDropdown, NgbModalModule, NgbModal, NgbActiveModal, NgbModalRef, ModalDismissReasons, NgbPaginationModule, NgbPaginationConfig, NgbPagination, NgbPopoverModule, NgbPopoverConfig, NgbPopover, NgbProgressbarModule, NgbProgressbarConfig, NgbProgressbar, NgbRatingModule, NgbRatingConfig, NgbRating, NgbTabsetModule, NgbTabsetConfig, NgbTabset, NgbTab, NgbTabContent, NgbTabTitle, NgbTimepickerModule, NgbTimepickerConfig, NgbTimepicker, NgbTooltipModule, NgbTooltipConfig, NgbTooltip, NgbHighlight, NgbTypeaheadModule, NgbTypeaheadConfig, NgbTypeahead, NgbRootModule, NgbModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbRootModule", function() { return NgbRootModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbModule", function() { return NgbModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _accordion_accordion_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordion/accordion.module */ "./node_modules/@ng-bootstrap/ng-bootstrap/accordion/accordion.module.js");
/* harmony import */ var _alert_alert_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert/alert.module */ "./node_modules/@ng-bootstrap/ng-bootstrap/alert/alert.module.js");
/* harmony import */ var _buttons_buttons_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buttons/buttons.module */ "./node_modules/@ng-bootstrap/ng-bootstrap/buttons/buttons.module.js");
/* harmony import */ var _carousel_carousel_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./carousel/carousel.module */ "./node_modules/@ng-bootstrap/ng-bootstrap/carousel/carousel.module.js");
/* harmony import */ var _collapse_collapse_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./collapse/collapse.module */ "./node_modules/@ng-bootstrap/ng-bootstrap/collapse/collapse.module.js");
/* harmony import */ var _datepicker_datepicker_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./datepicker/datepicker.module */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker.module.js");
/* harmony import */ var _dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dropdown/dropdown.module */ "./node_modules/@ng-bootstrap/ng-bootstrap/dropdown/dropdown.module.js");
/* harmony import */ var _modal_modal_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modal/modal.module */ "./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal.module.js");
/* harmony import */ var _pagination_pagination_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pagination/pagination.module */ "./node_modules/@ng-bootstrap/ng-bootstrap/pagination/pagination.module.js");
/* harmony import */ var _popover_popover_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./popover/popover.module */ "./node_modules/@ng-bootstrap/ng-bootstrap/popover/popover.module.js");
/* harmony import */ var _progressbar_progressbar_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./progressbar/progressbar.module */ "./node_modules/@ng-bootstrap/ng-bootstrap/progressbar/progressbar.module.js");
/* harmony import */ var _rating_rating_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./rating/rating.module */ "./node_modules/@ng-bootstrap/ng-bootstrap/rating/rating.module.js");
/* harmony import */ var _tabset_tabset_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tabset/tabset.module */ "./node_modules/@ng-bootstrap/ng-bootstrap/tabset/tabset.module.js");
/* harmony import */ var _timepicker_timepicker_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./timepicker/timepicker.module */ "./node_modules/@ng-bootstrap/ng-bootstrap/timepicker/timepicker.module.js");
/* harmony import */ var _tooltip_tooltip_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./tooltip/tooltip.module */ "./node_modules/@ng-bootstrap/ng-bootstrap/tooltip/tooltip.module.js");
/* harmony import */ var _typeahead_typeahead_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./typeahead/typeahead.module */ "./node_modules/@ng-bootstrap/ng-bootstrap/typeahead/typeahead.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbAccordionModule", function() { return _accordion_accordion_module__WEBPACK_IMPORTED_MODULE_1__["NgbAccordionModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbAccordionConfig", function() { return _accordion_accordion_module__WEBPACK_IMPORTED_MODULE_1__["NgbAccordionConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbAccordion", function() { return _accordion_accordion_module__WEBPACK_IMPORTED_MODULE_1__["NgbAccordion"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbPanel", function() { return _accordion_accordion_module__WEBPACK_IMPORTED_MODULE_1__["NgbPanel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbPanelTitle", function() { return _accordion_accordion_module__WEBPACK_IMPORTED_MODULE_1__["NgbPanelTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbPanelContent", function() { return _accordion_accordion_module__WEBPACK_IMPORTED_MODULE_1__["NgbPanelContent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbAlertModule", function() { return _alert_alert_module__WEBPACK_IMPORTED_MODULE_2__["NgbAlertModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbAlertConfig", function() { return _alert_alert_module__WEBPACK_IMPORTED_MODULE_2__["NgbAlertConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbAlert", function() { return _alert_alert_module__WEBPACK_IMPORTED_MODULE_2__["NgbAlert"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbButtonsModule", function() { return _buttons_buttons_module__WEBPACK_IMPORTED_MODULE_3__["NgbButtonsModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbCheckBox", function() { return _buttons_buttons_module__WEBPACK_IMPORTED_MODULE_3__["NgbCheckBox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbRadioGroup", function() { return _buttons_buttons_module__WEBPACK_IMPORTED_MODULE_3__["NgbRadioGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbCarouselModule", function() { return _carousel_carousel_module__WEBPACK_IMPORTED_MODULE_4__["NgbCarouselModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbCarouselConfig", function() { return _carousel_carousel_module__WEBPACK_IMPORTED_MODULE_4__["NgbCarouselConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbCarousel", function() { return _carousel_carousel_module__WEBPACK_IMPORTED_MODULE_4__["NgbCarousel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbSlide", function() { return _carousel_carousel_module__WEBPACK_IMPORTED_MODULE_4__["NgbSlide"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbCollapseModule", function() { return _collapse_collapse_module__WEBPACK_IMPORTED_MODULE_5__["NgbCollapseModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbCollapse", function() { return _collapse_collapse_module__WEBPACK_IMPORTED_MODULE_5__["NgbCollapse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbCalendar", function() { return _datepicker_datepicker_module__WEBPACK_IMPORTED_MODULE_6__["NgbCalendar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbCalendarIslamicCivil", function() { return _datepicker_datepicker_module__WEBPACK_IMPORTED_MODULE_6__["NgbCalendarIslamicCivil"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbCalendarIslamicUmalqura", function() { return _datepicker_datepicker_module__WEBPACK_IMPORTED_MODULE_6__["NgbCalendarIslamicUmalqura"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbDatepickerModule", function() { return _datepicker_datepicker_module__WEBPACK_IMPORTED_MODULE_6__["NgbDatepickerModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbDatepickerI18n", function() { return _datepicker_datepicker_module__WEBPACK_IMPORTED_MODULE_6__["NgbDatepickerI18n"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbDatepickerConfig", function() { return _datepicker_datepicker_module__WEBPACK_IMPORTED_MODULE_6__["NgbDatepickerConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbDateParserFormatter", function() { return _datepicker_datepicker_module__WEBPACK_IMPORTED_MODULE_6__["NgbDateParserFormatter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbDateAdapter", function() { return _datepicker_datepicker_module__WEBPACK_IMPORTED_MODULE_6__["NgbDateAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbDatepicker", function() { return _datepicker_datepicker_module__WEBPACK_IMPORTED_MODULE_6__["NgbDatepicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbInputDatepicker", function() { return _datepicker_datepicker_module__WEBPACK_IMPORTED_MODULE_6__["NgbInputDatepicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbDropdownModule", function() { return _dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_7__["NgbDropdownModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbDropdownConfig", function() { return _dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_7__["NgbDropdownConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbDropdown", function() { return _dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_7__["NgbDropdown"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbModalModule", function() { return _modal_modal_module__WEBPACK_IMPORTED_MODULE_8__["NgbModalModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbModal", function() { return _modal_modal_module__WEBPACK_IMPORTED_MODULE_8__["NgbModal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbActiveModal", function() { return _modal_modal_module__WEBPACK_IMPORTED_MODULE_8__["NgbActiveModal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbModalRef", function() { return _modal_modal_module__WEBPACK_IMPORTED_MODULE_8__["NgbModalRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalDismissReasons", function() { return _modal_modal_module__WEBPACK_IMPORTED_MODULE_8__["ModalDismissReasons"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbPaginationModule", function() { return _pagination_pagination_module__WEBPACK_IMPORTED_MODULE_9__["NgbPaginationModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbPaginationConfig", function() { return _pagination_pagination_module__WEBPACK_IMPORTED_MODULE_9__["NgbPaginationConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbPagination", function() { return _pagination_pagination_module__WEBPACK_IMPORTED_MODULE_9__["NgbPagination"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbPopoverModule", function() { return _popover_popover_module__WEBPACK_IMPORTED_MODULE_10__["NgbPopoverModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbPopoverConfig", function() { return _popover_popover_module__WEBPACK_IMPORTED_MODULE_10__["NgbPopoverConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbPopover", function() { return _popover_popover_module__WEBPACK_IMPORTED_MODULE_10__["NgbPopover"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbProgressbarModule", function() { return _progressbar_progressbar_module__WEBPACK_IMPORTED_MODULE_11__["NgbProgressbarModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbProgressbarConfig", function() { return _progressbar_progressbar_module__WEBPACK_IMPORTED_MODULE_11__["NgbProgressbarConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbProgressbar", function() { return _progressbar_progressbar_module__WEBPACK_IMPORTED_MODULE_11__["NgbProgressbar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbRatingModule", function() { return _rating_rating_module__WEBPACK_IMPORTED_MODULE_12__["NgbRatingModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbRatingConfig", function() { return _rating_rating_module__WEBPACK_IMPORTED_MODULE_12__["NgbRatingConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbRating", function() { return _rating_rating_module__WEBPACK_IMPORTED_MODULE_12__["NgbRating"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbTabsetModule", function() { return _tabset_tabset_module__WEBPACK_IMPORTED_MODULE_13__["NgbTabsetModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbTabsetConfig", function() { return _tabset_tabset_module__WEBPACK_IMPORTED_MODULE_13__["NgbTabsetConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbTabset", function() { return _tabset_tabset_module__WEBPACK_IMPORTED_MODULE_13__["NgbTabset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbTab", function() { return _tabset_tabset_module__WEBPACK_IMPORTED_MODULE_13__["NgbTab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbTabContent", function() { return _tabset_tabset_module__WEBPACK_IMPORTED_MODULE_13__["NgbTabContent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbTabTitle", function() { return _tabset_tabset_module__WEBPACK_IMPORTED_MODULE_13__["NgbTabTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbTimepickerModule", function() { return _timepicker_timepicker_module__WEBPACK_IMPORTED_MODULE_14__["NgbTimepickerModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbTimepickerConfig", function() { return _timepicker_timepicker_module__WEBPACK_IMPORTED_MODULE_14__["NgbTimepickerConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbTimepicker", function() { return _timepicker_timepicker_module__WEBPACK_IMPORTED_MODULE_14__["NgbTimepicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbTooltipModule", function() { return _tooltip_tooltip_module__WEBPACK_IMPORTED_MODULE_15__["NgbTooltipModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbTooltipConfig", function() { return _tooltip_tooltip_module__WEBPACK_IMPORTED_MODULE_15__["NgbTooltipConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbTooltip", function() { return _tooltip_tooltip_module__WEBPACK_IMPORTED_MODULE_15__["NgbTooltip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbHighlight", function() { return _typeahead_typeahead_module__WEBPACK_IMPORTED_MODULE_16__["NgbHighlight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbTypeaheadModule", function() { return _typeahead_typeahead_module__WEBPACK_IMPORTED_MODULE_16__["NgbTypeaheadModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbTypeaheadConfig", function() { return _typeahead_typeahead_module__WEBPACK_IMPORTED_MODULE_16__["NgbTypeaheadConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbTypeahead", function() { return _typeahead_typeahead_module__WEBPACK_IMPORTED_MODULE_16__["NgbTypeahead"]; });


































var NGB_MODULES = [
    _accordion_accordion_module__WEBPACK_IMPORTED_MODULE_1__["NgbAccordionModule"], _alert_alert_module__WEBPACK_IMPORTED_MODULE_2__["NgbAlertModule"], _buttons_buttons_module__WEBPACK_IMPORTED_MODULE_3__["NgbButtonsModule"], _carousel_carousel_module__WEBPACK_IMPORTED_MODULE_4__["NgbCarouselModule"], _collapse_collapse_module__WEBPACK_IMPORTED_MODULE_5__["NgbCollapseModule"], _datepicker_datepicker_module__WEBPACK_IMPORTED_MODULE_6__["NgbDatepickerModule"],
    _dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_7__["NgbDropdownModule"], _modal_modal_module__WEBPACK_IMPORTED_MODULE_8__["NgbModalModule"], _pagination_pagination_module__WEBPACK_IMPORTED_MODULE_9__["NgbPaginationModule"], _popover_popover_module__WEBPACK_IMPORTED_MODULE_10__["NgbPopoverModule"], _progressbar_progressbar_module__WEBPACK_IMPORTED_MODULE_11__["NgbProgressbarModule"], _rating_rating_module__WEBPACK_IMPORTED_MODULE_12__["NgbRatingModule"],
    _tabset_tabset_module__WEBPACK_IMPORTED_MODULE_13__["NgbTabsetModule"], _timepicker_timepicker_module__WEBPACK_IMPORTED_MODULE_14__["NgbTimepickerModule"], _tooltip_tooltip_module__WEBPACK_IMPORTED_MODULE_15__["NgbTooltipModule"], _typeahead_typeahead_module__WEBPACK_IMPORTED_MODULE_16__["NgbTypeaheadModule"]
];
var NgbRootModule = /** @class */ (function () {
    function NgbRootModule() {
    }
    NgbRootModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _alert_alert_module__WEBPACK_IMPORTED_MODULE_2__["NgbAlertModule"].forRoot(), _buttons_buttons_module__WEBPACK_IMPORTED_MODULE_3__["NgbButtonsModule"].forRoot(), _collapse_collapse_module__WEBPACK_IMPORTED_MODULE_5__["NgbCollapseModule"].forRoot(), _progressbar_progressbar_module__WEBPACK_IMPORTED_MODULE_11__["NgbProgressbarModule"].forRoot(),
                        _tooltip_tooltip_module__WEBPACK_IMPORTED_MODULE_15__["NgbTooltipModule"].forRoot(), _typeahead_typeahead_module__WEBPACK_IMPORTED_MODULE_16__["NgbTypeaheadModule"].forRoot(), _accordion_accordion_module__WEBPACK_IMPORTED_MODULE_1__["NgbAccordionModule"].forRoot(), _carousel_carousel_module__WEBPACK_IMPORTED_MODULE_4__["NgbCarouselModule"].forRoot(),
                        _datepicker_datepicker_module__WEBPACK_IMPORTED_MODULE_6__["NgbDatepickerModule"].forRoot(), _dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_7__["NgbDropdownModule"].forRoot(), _modal_modal_module__WEBPACK_IMPORTED_MODULE_8__["NgbModalModule"].forRoot(), _pagination_pagination_module__WEBPACK_IMPORTED_MODULE_9__["NgbPaginationModule"].forRoot(),
                        _popover_popover_module__WEBPACK_IMPORTED_MODULE_10__["NgbPopoverModule"].forRoot(), _progressbar_progressbar_module__WEBPACK_IMPORTED_MODULE_11__["NgbProgressbarModule"].forRoot(), _rating_rating_module__WEBPACK_IMPORTED_MODULE_12__["NgbRatingModule"].forRoot(), _tabset_tabset_module__WEBPACK_IMPORTED_MODULE_13__["NgbTabsetModule"].forRoot(),
                        _timepicker_timepicker_module__WEBPACK_IMPORTED_MODULE_14__["NgbTimepickerModule"].forRoot(), _tooltip_tooltip_module__WEBPACK_IMPORTED_MODULE_15__["NgbTooltipModule"].forRoot()
                    ],
                    exports: NGB_MODULES
                },] },
    ];
    return NgbRootModule;
}());

var NgbModule = /** @class */ (function () {
    function NgbModule() {
    }
    NgbModule.forRoot = function () { return { ngModule: NgbRootModule }; };
    NgbModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{ imports: NGB_MODULES, exports: NGB_MODULES },] },
    ];
    return NgbModule;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-backdrop.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-backdrop.js ***!
  \*************************************************************************/
/*! exports provided: NgbModalBackdrop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbModalBackdrop", function() { return NgbModalBackdrop; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var NgbModalBackdrop = /** @class */ (function () {
    function NgbModalBackdrop() {
    }
    NgbModalBackdrop.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngb-modal-backdrop',
                    template: '',
                    host: { '[class]': '"modal-backdrop fade show" + (backdropClass ? " " + backdropClass : "")' }
                },] },
    ];
    /** @nocollapse */
    NgbModalBackdrop.propDecorators = {
        "backdropClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return NgbModalBackdrop;
}());

//# sourceMappingURL=modal-backdrop.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-dismiss-reasons.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-dismiss-reasons.js ***!
  \********************************************************************************/
/*! exports provided: ModalDismissReasons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDismissReasons", function() { return ModalDismissReasons; });
var ModalDismissReasons;
(function (ModalDismissReasons) {
    ModalDismissReasons[ModalDismissReasons["BACKDROP_CLICK"] = 0] = "BACKDROP_CLICK";
    ModalDismissReasons[ModalDismissReasons["ESC"] = 1] = "ESC";
})(ModalDismissReasons || (ModalDismissReasons = {}));
//# sourceMappingURL=modal-dismiss-reasons.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-ref.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-ref.js ***!
  \********************************************************************/
/*! exports provided: NgbActiveModal, NgbModalRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbActiveModal", function() { return NgbActiveModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbModalRef", function() { return NgbModalRef; });
/**
 * A reference to an active (currently opened) modal. Instances of this class
 * can be injected into components passed as modal content.
 */
var /**
 * A reference to an active (currently opened) modal. Instances of this class
 * can be injected into components passed as modal content.
 */
NgbActiveModal = /** @class */ (function () {
    function NgbActiveModal() {
    }
    /**
     * Can be used to close a modal, passing an optional result.
     */
    /**
       * Can be used to close a modal, passing an optional result.
       */
    NgbActiveModal.prototype.close = /**
       * Can be used to close a modal, passing an optional result.
       */
    function (result) { };
    /**
     * Can be used to dismiss a modal, passing an optional reason.
     */
    /**
       * Can be used to dismiss a modal, passing an optional reason.
       */
    NgbActiveModal.prototype.dismiss = /**
       * Can be used to dismiss a modal, passing an optional reason.
       */
    function (reason) { };
    return NgbActiveModal;
}());
/**
 * A reference to an active (currently opened) modal. Instances of this class
 * can be injected into components passed as modal content.
 */

/**
 * A reference to a newly opened modal.
 */
var /**
 * A reference to a newly opened modal.
 */
NgbModalRef = /** @class */ (function () {
    function NgbModalRef(_windowCmptRef, _contentRef, _backdropCmptRef, _beforeDismiss) {
        var _this = this;
        this._windowCmptRef = _windowCmptRef;
        this._contentRef = _contentRef;
        this._backdropCmptRef = _backdropCmptRef;
        this._beforeDismiss = _beforeDismiss;
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
        get: /**
           * The instance of component used as modal's content.
           * Undefined when a TemplateRef is used as modal's content.
           */
        function () {
            if (this._contentRef.componentRef) {
                return this._contentRef.componentRef.instance;
            }
        },
        // only needed to keep TS1.8 compatibility
        set: 
        // only needed to keep TS1.8 compatibility
        function (instance) { },
        enumerable: true,
        configurable: true
    });
    /**
     * Can be used to close a modal, passing an optional result.
     */
    /**
       * Can be used to close a modal, passing an optional result.
       */
    NgbModalRef.prototype.close = /**
       * Can be used to close a modal, passing an optional result.
       */
    function (result) {
        if (this._windowCmptRef) {
            this._resolve(result);
            this._removeModalElements();
        }
    };
    /**
     * Can be used to dismiss a modal, passing an optional reason.
     */
    /**
       * Can be used to dismiss a modal, passing an optional reason.
       */
    NgbModalRef.prototype.dismiss = /**
       * Can be used to dismiss a modal, passing an optional reason.
       */
    function (reason) {
        if (this._windowCmptRef) {
            if (!this._beforeDismiss || this._beforeDismiss() !== false) {
                this._reject(reason);
                this._removeModalElements();
            }
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
/**
 * A reference to a newly opened modal.
 */

//# sourceMappingURL=modal-ref.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-stack.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-stack.js ***!
  \**********************************************************************/
/*! exports provided: NgbModalStack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbModalStack", function() { return NgbModalStack; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/popup */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/popup.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/util */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/util.js");
/* harmony import */ var _modal_backdrop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal-backdrop */ "./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-backdrop.js");
/* harmony import */ var _modal_window__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-window */ "./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-window.js");
/* harmony import */ var _modal_ref__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal-ref */ "./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-ref.js");







var NgbModalStack = /** @class */ (function () {
    function NgbModalStack(_applicationRef, _injector, _componentFactoryResolver, document) {
        this._applicationRef = _applicationRef;
        this._injector = _injector;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._windowAttributes = ['backdrop', 'centered', 'keyboard', 'size', 'windowClass'];
        this._backdropAttributes = ['backdropClass'];
        this._document = document;
    }
    NgbModalStack.prototype.open = function (moduleCFR, contentInjector, content, options) {
        var containerEl = Object(_util_util__WEBPACK_IMPORTED_MODULE_3__["isDefined"])(options.container) ? this._document.querySelector(options.container) : this._document.body;
        if (!containerEl) {
            throw new Error("The specified modal container \"" + (options.container || 'body') + "\" was not found in the DOM.");
        }
        var activeModal = new _modal_ref__WEBPACK_IMPORTED_MODULE_6__["NgbActiveModal"]();
        var contentRef = this._getContentRef(moduleCFR, options.injector || contentInjector, content, activeModal);
        var backdropCmptRef = options.backdrop !== false ? this._attachBackdrop(containerEl) : null;
        var windowCmptRef = this._attachWindowComponent(containerEl, contentRef);
        var ngbModalRef = new _modal_ref__WEBPACK_IMPORTED_MODULE_6__["NgbModalRef"](windowCmptRef, contentRef, backdropCmptRef, options.beforeDismiss);
        activeModal.close = function (result) { ngbModalRef.close(result); };
        activeModal.dismiss = function (reason) { ngbModalRef.dismiss(reason); };
        this._applyWindowOptions(windowCmptRef.instance, options);
        if (backdropCmptRef && backdropCmptRef.instance) {
            this._applyBackdropOptions(backdropCmptRef.instance, options);
        }
        return ngbModalRef;
    };
    NgbModalStack.prototype._attachBackdrop = function (containerEl) {
        var backdropFactory = this._componentFactoryResolver.resolveComponentFactory(_modal_backdrop__WEBPACK_IMPORTED_MODULE_4__["NgbModalBackdrop"]);
        var backdropCmptRef = backdropFactory.create(this._injector);
        this._applicationRef.attachView(backdropCmptRef.hostView);
        containerEl.appendChild(backdropCmptRef.location.nativeElement);
        return backdropCmptRef;
    };
    NgbModalStack.prototype._attachWindowComponent = function (containerEl, contentRef) {
        var windowFactory = this._componentFactoryResolver.resolveComponentFactory(_modal_window__WEBPACK_IMPORTED_MODULE_5__["NgbModalWindow"]);
        var windowCmptRef = windowFactory.create(this._injector, contentRef.nodes);
        this._applicationRef.attachView(windowCmptRef.hostView);
        containerEl.appendChild(windowCmptRef.location.nativeElement);
        return windowCmptRef;
    };
    NgbModalStack.prototype._applyWindowOptions = function (windowInstance, options) {
        this._windowAttributes.forEach(function (optionName) {
            if (Object(_util_util__WEBPACK_IMPORTED_MODULE_3__["isDefined"])(options[optionName])) {
                windowInstance[optionName] = options[optionName];
            }
        });
    };
    NgbModalStack.prototype._applyBackdropOptions = function (backdropInstance, options) {
        this._backdropAttributes.forEach(function (optionName) {
            if (Object(_util_util__WEBPACK_IMPORTED_MODULE_3__["isDefined"])(options[optionName])) {
                backdropInstance[optionName] = options[optionName];
            }
        });
    };
    NgbModalStack.prototype._getContentRef = function (moduleCFR, contentInjector, content, context) {
        if (!content) {
            return new _util_popup__WEBPACK_IMPORTED_MODULE_2__["ContentRef"]([]);
        }
        else if (content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]) {
            return this._createFromTemplateRef(content, context);
        }
        else if (Object(_util_util__WEBPACK_IMPORTED_MODULE_3__["isString"])(content)) {
            return this._createFromString(content);
        }
        else {
            return this._createFromComponent(moduleCFR, contentInjector, content, context);
        }
    };
    NgbModalStack.prototype._createFromTemplateRef = function (content, context) {
        var viewRef = content.createEmbeddedView(context);
        this._applicationRef.attachView(viewRef);
        return new _util_popup__WEBPACK_IMPORTED_MODULE_2__["ContentRef"]([viewRef.rootNodes], viewRef);
    };
    NgbModalStack.prototype._createFromString = function (content) {
        var component = this._document.createTextNode("" + content);
        return new _util_popup__WEBPACK_IMPORTED_MODULE_2__["ContentRef"]([[component]]);
    };
    NgbModalStack.prototype._createFromComponent = function (moduleCFR, contentInjector, content, context) {
        var contentCmptFactory = moduleCFR.resolveComponentFactory(content);
        var modalContentInjector = _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"].create([{ provide: _modal_ref__WEBPACK_IMPORTED_MODULE_6__["NgbActiveModal"], useValue: context }], contentInjector);
        var componentRef = contentCmptFactory.create(modalContentInjector);
        this._applicationRef.attachView(componentRef.hostView);
        return new _util_popup__WEBPACK_IMPORTED_MODULE_2__["ContentRef"]([[componentRef.location.nativeElement]], componentRef.hostView, componentRef);
    };
    NgbModalStack.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
    ];
    /** @nocollapse */
    NgbModalStack.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"],] },] },
    ]; };
    return NgbModalStack;
}());

//# sourceMappingURL=modal-stack.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-window.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-window.js ***!
  \***********************************************************************/
/*! exports provided: NgbModalWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbModalWindow", function() { return NgbModalWindow; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modal_dismiss_reasons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-dismiss-reasons */ "./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-dismiss-reasons.js");



var NgbModalWindow = /** @class */ (function () {
    function NgbModalWindow(document, _elRef, _renderer) {
        this._elRef = _elRef;
        this._renderer = _renderer;
        this.backdrop = true;
        this.keyboard = true;
        this.dismissEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._document = document;
    }
    NgbModalWindow.prototype.backdropClick = function ($event) {
        if (this.backdrop === true && this._elRef.nativeElement === $event.target) {
            this.dismiss(_modal_dismiss_reasons__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK);
        }
    };
    NgbModalWindow.prototype.escKey = function ($event) {
        if (this.keyboard && !$event.defaultPrevented) {
            this.dismiss(_modal_dismiss_reasons__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC);
        }
    };
    NgbModalWindow.prototype.dismiss = function (reason) { this.dismissEvent.emit(reason); };
    NgbModalWindow.prototype.ngOnInit = function () {
        this._elWithFocus = this._document.activeElement;
        this._renderer.addClass(this._document.body, 'modal-open');
    };
    NgbModalWindow.prototype.ngAfterViewInit = function () {
        if (!this._elRef.nativeElement.contains(document.activeElement)) {
            this._elRef.nativeElement['focus'].apply(this._elRef.nativeElement, []);
        }
    };
    NgbModalWindow.prototype.ngOnDestroy = function () {
        var body = this._document.body;
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
    NgbModalWindow.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'ngb-modal-window',
                    host: {
                        '[class]': '"modal fade show d-block" + (windowClass ? " " + windowClass : "")',
                        'role': 'dialog',
                        'tabindex': '-1',
                        '(keyup.esc)': 'escKey($event)',
                        '(click)': 'backdropClick($event)'
                    },
                    template: "\n    <div [class]=\"'modal-dialog' + (size ? ' modal-' + size : '') + (centered ? ' modal-dialog-centered' : '')\" role=\"document\">\n        <div class=\"modal-content\"><ng-content></ng-content></div>\n    </div>\n    "
                },] },
    ];
    /** @nocollapse */
    NgbModalWindow.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"],] },] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], },
    ]; };
    NgbModalWindow.propDecorators = {
        "backdrop": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "centered": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "keyboard": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "size": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "windowClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "dismissEvent": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['dismiss',] },],
    };
    return NgbModalWindow;
}());

//# sourceMappingURL=modal-window.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal.js":
/*!****************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal.js ***!
  \****************************************************************/
/*! exports provided: NgbModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbModal", function() { return NgbModal; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modal_stack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-stack */ "./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-stack.js");


/**
 * A service to open modal windows. Creating a modal is straightforward: create a template and pass it as an argument to
 * the "open" method!
 */
var NgbModal = /** @class */ (function () {
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
    /**
       * Opens a new modal window with the specified content and using supplied options. Content can be provided
       * as a TemplateRef or a component type. If you pass a component type as content than instances of those
       * components can be injected with an instance of the NgbActiveModal class. You can use methods on the
       * NgbActiveModal class to close / dismiss modals from "inside" of a component.
       */
    NgbModal.prototype.open = /**
       * Opens a new modal window with the specified content and using supplied options. Content can be provided
       * as a TemplateRef or a component type. If you pass a component type as content than instances of those
       * components can be injected with an instance of the NgbActiveModal class. You can use methods on the
       * NgbActiveModal class to close / dismiss modals from "inside" of a component.
       */
    function (content, options) {
        if (options === void 0) { options = {}; }
        return this._modalStack.open(this._moduleCFR, this._injector, content, options);
    };
    NgbModal.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    NgbModal.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], },
        { type: _modal_stack__WEBPACK_IMPORTED_MODULE_1__["NgbModalStack"], },
    ]; };
    return NgbModal;
}());

//# sourceMappingURL=modal.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal.module.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal.module.js ***!
  \***********************************************************************/
/*! exports provided: NgbModal, NgbModalRef, NgbActiveModal, ModalDismissReasons, NgbModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbModalModule", function() { return NgbModalModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modal_backdrop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-backdrop */ "./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-backdrop.js");
/* harmony import */ var _modal_window__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-window */ "./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-window.js");
/* harmony import */ var _modal_stack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-stack */ "./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-stack.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal */ "./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbModal", function() { return _modal__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]; });

/* harmony import */ var _modal_ref__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-ref */ "./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-ref.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbModalRef", function() { return _modal_ref__WEBPACK_IMPORTED_MODULE_5__["NgbModalRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbActiveModal", function() { return _modal_ref__WEBPACK_IMPORTED_MODULE_5__["NgbActiveModal"]; });

/* harmony import */ var _modal_dismiss_reasons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal-dismiss-reasons */ "./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-dismiss-reasons.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalDismissReasons", function() { return _modal_dismiss_reasons__WEBPACK_IMPORTED_MODULE_6__["ModalDismissReasons"]; });









var NgbModalModule = /** @class */ (function () {
    function NgbModalModule() {
    }
    NgbModalModule.forRoot = function () { return { ngModule: NgbModalModule, providers: [_modal__WEBPACK_IMPORTED_MODULE_4__["NgbModal"], _modal_stack__WEBPACK_IMPORTED_MODULE_3__["NgbModalStack"]] }; };
    NgbModalModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [_modal_backdrop__WEBPACK_IMPORTED_MODULE_1__["NgbModalBackdrop"], _modal_window__WEBPACK_IMPORTED_MODULE_2__["NgbModalWindow"]],
                    entryComponents: [_modal_backdrop__WEBPACK_IMPORTED_MODULE_1__["NgbModalBackdrop"], _modal_window__WEBPACK_IMPORTED_MODULE_2__["NgbModalWindow"]],
                    providers: [_modal__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]]
                },] },
    ];
    return NgbModalModule;
}());

//# sourceMappingURL=modal.module.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/pagination/pagination-config.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/pagination/pagination-config.js ***!
  \*********************************************************************************/
/*! exports provided: NgbPaginationConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPaginationConfig", function() { return NgbPaginationConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/**
 * Configuration service for the NgbPagination component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the paginations used in the application.
 */
var NgbPaginationConfig = /** @class */ (function () {
    function NgbPaginationConfig() {
        this.disabled = false;
        this.boundaryLinks = false;
        this.directionLinks = true;
        this.ellipses = true;
        this.maxSize = 0;
        this.pageSize = 10;
        this.rotate = false;
    }
    NgbPaginationConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return NgbPaginationConfig;
}());

//# sourceMappingURL=pagination-config.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/pagination/pagination.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/pagination/pagination.js ***!
  \**************************************************************************/
/*! exports provided: NgbPagination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPagination", function() { return NgbPagination; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/util */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/util.js");
/* harmony import */ var _pagination_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagination-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/pagination/pagination-config.js");



/**
 * A directive that will take care of visualising a pagination bar and enable / disable buttons correctly!
 */
var NgbPagination = /** @class */ (function () {
    function NgbPagination(config) {
        this.pageCount = 0;
        this.pages = [];
        /**
           *  Current page. Page numbers start with 1
           */
        this.page = 1;
        /**
           *  An event fired when the page is changed.
           *  Event's payload equals to the newly selected page.
           *  Will fire only if collection size is set and all values are valid.
           *  Page numbers start with 1
           */
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
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
    NgbPagination.prototype.isEllipsis = function (pageNumber) { return pageNumber === -1; };
    /**
     * Appends ellipses and first/last page number to the displayed pages
     */
    /**
       * Appends ellipses and first/last page number to the displayed pages
       */
    NgbPagination.prototype._applyEllipses = /**
       * Appends ellipses and first/last page number to the displayed pages
       */
    function (start, end) {
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
    /**
       * Rotates page numbers based on maxSize items visible.
       * Currently selected page stays in the middle:
       *
       * Ex. for selected page = 6:
       * [5,*6*,7] for maxSize = 3
       * [4,5,*6*,7] for maxSize = 4
       */
    NgbPagination.prototype._applyRotation = /**
       * Rotates page numbers based on maxSize items visible.
       * Currently selected page stays in the middle:
       *
       * Ex. for selected page = 6:
       * [5,*6*,7] for maxSize = 3
       * [4,5,*6*,7] for maxSize = 4
       */
    function () {
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
    /**
       * Paginates page numbers based on maxSize items per page
       */
    NgbPagination.prototype._applyPagination = /**
       * Paginates page numbers based on maxSize items per page
       */
    function () {
        var page = Math.ceil(this.page / this.maxSize) - 1;
        var start = page * this.maxSize;
        var end = start + this.maxSize;
        return [start, end];
    };
    NgbPagination.prototype._setPageInRange = function (newPageNo) {
        var prevPageNo = this.page;
        this.page = Object(_util_util__WEBPACK_IMPORTED_MODULE_1__["getValueInRange"])(newPageNo, this.pageCount, 1);
        if (this.page !== prevPageNo && Object(_util_util__WEBPACK_IMPORTED_MODULE_1__["isNumber"])(this.collectionSize)) {
            this.pageChange.emit(this.page);
        }
    };
    NgbPagination.prototype._updatePages = function (newPage) {
        this.pageCount = Math.ceil(this.collectionSize / this.pageSize);
        if (!Object(_util_util__WEBPACK_IMPORTED_MODULE_1__["isNumber"])(this.pageCount)) {
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
    NgbPagination.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngb-pagination',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    host: { 'role': 'navigation' },
                    template: "\n    <ul [class]=\"'pagination' + (size ? ' pagination-' + size : '')\">\n      <li *ngIf=\"boundaryLinks\" class=\"page-item\"\n        [class.disabled]=\"!hasPrevious() || disabled\">\n        <a aria-label=\"First\" class=\"page-link\" href (click)=\"!!selectPage(1)\" [attr.tabindex]=\"(hasPrevious() ? null : '-1')\">\n          <span aria-hidden=\"true\">&laquo;&laquo;</span>\n        </a>\n      </li>\n\n      <li *ngIf=\"directionLinks\" class=\"page-item\"\n        [class.disabled]=\"!hasPrevious() || disabled\">\n        <a aria-label=\"Previous\" class=\"page-link\" href (click)=\"!!selectPage(page-1)\" [attr.tabindex]=\"(hasPrevious() ? null : '-1')\">\n          <span aria-hidden=\"true\">&laquo;</span>\n        </a>\n      </li>\n      <li *ngFor=\"let pageNumber of pages\" class=\"page-item\" [class.active]=\"pageNumber === page\"\n        [class.disabled]=\"isEllipsis(pageNumber) || disabled\">\n        <a *ngIf=\"isEllipsis(pageNumber)\" class=\"page-link\">...</a>\n        <a *ngIf=\"!isEllipsis(pageNumber)\" class=\"page-link\" href (click)=\"!!selectPage(pageNumber)\">\n          {{pageNumber}}\n          <span *ngIf=\"pageNumber === page\" class=\"sr-only\">(current)</span>\n        </a>\n      </li>\n      <li *ngIf=\"directionLinks\" class=\"page-item\" [class.disabled]=\"!hasNext() || disabled\">\n        <a aria-label=\"Next\" class=\"page-link\" href (click)=\"!!selectPage(page+1)\" [attr.tabindex]=\"(hasNext() ? null : '-1')\">\n          <span aria-hidden=\"true\">&raquo;</span>\n        </a>\n      </li>\n\n      <li *ngIf=\"boundaryLinks\" class=\"page-item\" [class.disabled]=\"!hasNext() || disabled\">\n        <a aria-label=\"Last\" class=\"page-link\" href (click)=\"!!selectPage(pageCount)\" [attr.tabindex]=\"(hasNext() ? null : '-1')\">\n          <span aria-hidden=\"true\">&raquo;&raquo;</span>\n        </a>\n      </li>\n    </ul>\n  "
                },] },
    ];
    /** @nocollapse */
    NgbPagination.ctorParameters = function () { return [
        { type: _pagination_config__WEBPACK_IMPORTED_MODULE_2__["NgbPaginationConfig"], },
    ]; };
    NgbPagination.propDecorators = {
        "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "boundaryLinks": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "directionLinks": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "ellipses": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "rotate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "collectionSize": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "maxSize": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "page": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "pageSize": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "pageChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "size": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return NgbPagination;
}());

//# sourceMappingURL=pagination.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/pagination/pagination.module.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/pagination/pagination.module.js ***!
  \*********************************************************************************/
/*! exports provided: NgbPagination, NgbPaginationConfig, NgbPaginationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPaginationModule", function() { return NgbPaginationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagination */ "./node_modules/@ng-bootstrap/ng-bootstrap/pagination/pagination.js");
/* harmony import */ var _pagination_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pagination-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/pagination/pagination-config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbPagination", function() { return _pagination__WEBPACK_IMPORTED_MODULE_2__["NgbPagination"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbPaginationConfig", function() { return _pagination_config__WEBPACK_IMPORTED_MODULE_3__["NgbPaginationConfig"]; });







var NgbPaginationModule = /** @class */ (function () {
    function NgbPaginationModule() {
    }
    NgbPaginationModule.forRoot = function () { return { ngModule: NgbPaginationModule, providers: [_pagination_config__WEBPACK_IMPORTED_MODULE_3__["NgbPaginationConfig"]] }; };
    NgbPaginationModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{ declarations: [_pagination__WEBPACK_IMPORTED_MODULE_2__["NgbPagination"]], exports: [_pagination__WEBPACK_IMPORTED_MODULE_2__["NgbPagination"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] },] },
    ];
    return NgbPaginationModule;
}());

//# sourceMappingURL=pagination.module.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/popover/popover-config.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/popover/popover-config.js ***!
  \***************************************************************************/
/*! exports provided: NgbPopoverConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPopoverConfig", function() { return NgbPopoverConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/**
 * Configuration service for the NgbPopover directive.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the popovers used in the application.
 */
var NgbPopoverConfig = /** @class */ (function () {
    function NgbPopoverConfig() {
        this.placement = 'top';
        this.triggers = 'click';
        this.disablePopover = false;
    }
    NgbPopoverConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return NgbPopoverConfig;
}());

//# sourceMappingURL=popover-config.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/popover/popover.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/popover/popover.js ***!
  \********************************************************************/
/*! exports provided: NgbPopoverWindow, NgbPopover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPopoverWindow", function() { return NgbPopoverWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPopover", function() { return NgbPopover; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_triggers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/triggers */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/triggers.js");
/* harmony import */ var _util_positioning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/positioning */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/positioning.js");
/* harmony import */ var _util_popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/popup */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/popup.js");
/* harmony import */ var _popover_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popover-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/popover/popover-config.js");





var nextId = 0;
var NgbPopoverWindow = /** @class */ (function () {
    function NgbPopoverWindow(_element, _renderer) {
        this._element = _element;
        this._renderer = _renderer;
        this.placement = 'top';
    }
    NgbPopoverWindow.prototype.applyPlacement = function (_placement) {
        // remove the current placement classes
        this._renderer.removeClass(this._element.nativeElement, 'bs-popover-' + this.placement.toString().split('-')[0]);
        this._renderer.removeClass(this._element.nativeElement, 'bs-popover-' + this.placement.toString());
        // set the new placement classes
        this.placement = _placement;
        // apply the new placement
        this._renderer.addClass(this._element.nativeElement, 'bs-popover-' + this.placement.toString().split('-')[0]);
        this._renderer.addClass(this._element.nativeElement, 'bs-popover-' + this.placement.toString());
    };
    NgbPopoverWindow.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngb-popover-window',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    host: {
                        '[class]': '"popover bs-popover-" + placement.split("-")[0]+" bs-popover-" + placement',
                        'role': 'tooltip',
                        '[id]': 'id'
                    },
                    template: "\n    <div class=\"arrow\"></div>\n    <h3 class=\"popover-header\">{{title}}</h3><div class=\"popover-body\"><ng-content></ng-content></div>",
                    styles: ["\n    :host.bs-popover-top .arrow, :host.bs-popover-bottom .arrow {\n      left: 50%;\n      margin-left: -5px;\n    }\n\n    :host.bs-popover-top-left .arrow, :host.bs-popover-bottom-left .arrow {\n      left: 2em;\n    }\n\n    :host.bs-popover-top-right .arrow, :host.bs-popover-bottom-right .arrow {\n      left: auto;\n      right: 2em;\n    }\n\n    :host.bs-popover-left .arrow, :host.bs-popover-right .arrow {\n      top: 50%;\n      margin-top: -5px;\n    }\n\n    :host.bs-popover-left-top .arrow, :host.bs-popover-right-top .arrow {\n      top: 0.7em;\n    }\n\n    :host.bs-popover-left-bottom .arrow, :host.bs-popover-right-bottom .arrow {\n      top: auto;\n      bottom: 0.7em;\n    }\n  "]
                },] },
    ];
    /** @nocollapse */
    NgbPopoverWindow.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    ]; };
    NgbPopoverWindow.propDecorators = {
        "placement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "title": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "id": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return NgbPopoverWindow;
}());

/**
 * A lightweight, extensible directive for fancy popover creation.
 */
var NgbPopover = /** @class */ (function () {
    function NgbPopover(_elementRef, _renderer, injector, componentFactoryResolver, viewContainerRef, config, ngZone) {
        var _this = this;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        /**
           * Emits an event when the popover is shown
           */
        this.shown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * Emits an event when the popover is hidden
           */
        this.hidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._ngbPopoverWindowId = "ngb-popover-" + nextId++;
        this.placement = config.placement;
        this.triggers = config.triggers;
        this.container = config.container;
        this.disablePopover = config.disablePopover;
        this._popupService = new _util_popup__WEBPACK_IMPORTED_MODULE_3__["PopupService"](NgbPopoverWindow, injector, viewContainerRef, _renderer, componentFactoryResolver);
        this._zoneSubscription = ngZone.onStable.subscribe(function () {
            if (_this._windowRef) {
                _this._windowRef.instance.applyPlacement(Object(_util_positioning__WEBPACK_IMPORTED_MODULE_2__["positionElements"])(_this._elementRef.nativeElement, _this._windowRef.location.nativeElement, _this.placement, _this.container === 'body'));
            }
        });
    }
    NgbPopover.prototype._isDisabled = function () {
        if (this.disablePopover) {
            return true;
        }
        if (!this.ngbPopover && !this.popoverTitle) {
            return true;
        }
        return false;
    };
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of the popover.
     * The context is an optional value to be injected into the popover template when it is created.
     */
    /**
       * Opens an element’s popover. This is considered a “manual” triggering of the popover.
       * The context is an optional value to be injected into the popover template when it is created.
       */
    NgbPopover.prototype.open = /**
       * Opens an element’s popover. This is considered a “manual” triggering of the popover.
       * The context is an optional value to be injected into the popover template when it is created.
       */
    function (context) {
        if (!this._windowRef && !this._isDisabled()) {
            this._windowRef = this._popupService.open(this.ngbPopover, context);
            this._windowRef.instance.title = this.popoverTitle;
            this._windowRef.instance.id = this._ngbPopoverWindowId;
            this._renderer.setAttribute(this._elementRef.nativeElement, 'aria-describedby', this._ngbPopoverWindowId);
            if (this.container === 'body') {
                window.document.querySelector(this.container).appendChild(this._windowRef.location.nativeElement);
            }
            // apply styling to set basic css-classes on target element, before going for positioning
            this._windowRef.changeDetectorRef.detectChanges();
            this._windowRef.changeDetectorRef.markForCheck();
            // position popover along the element
            this._windowRef.instance.applyPlacement(Object(_util_positioning__WEBPACK_IMPORTED_MODULE_2__["positionElements"])(this._elementRef.nativeElement, this._windowRef.location.nativeElement, this.placement, this.container === 'body'));
            this.shown.emit();
        }
    };
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of the popover.
     */
    /**
       * Closes an element’s popover. This is considered a “manual” triggering of the popover.
       */
    NgbPopover.prototype.close = /**
       * Closes an element’s popover. This is considered a “manual” triggering of the popover.
       */
    function () {
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
    /**
       * Toggles an element’s popover. This is considered a “manual” triggering of the popover.
       */
    NgbPopover.prototype.toggle = /**
       * Toggles an element’s popover. This is considered a “manual” triggering of the popover.
       */
    function () {
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
    /**
       * Returns whether or not the popover is currently being shown
       */
    NgbPopover.prototype.isOpen = /**
       * Returns whether or not the popover is currently being shown
       */
    function () { return this._windowRef != null; };
    NgbPopover.prototype.ngOnInit = function () {
        this._unregisterListenersFn = Object(_util_triggers__WEBPACK_IMPORTED_MODULE_1__["listenToTriggers"])(this._renderer, this._elementRef.nativeElement, this.triggers, this.open.bind(this), this.close.bind(this), this.toggle.bind(this));
    };
    NgbPopover.prototype.ngOnChanges = function (changes) {
        // close popover if title and content become empty, or disablePopover set to true
        if ((changes['ngbPopover'] || changes['popoverTitle'] || changes['disablePopover']) && this._isDisabled()) {
            this.close();
        }
    };
    NgbPopover.prototype.ngOnDestroy = function () {
        this.close();
        this._unregisterListenersFn();
        this._zoneSubscription.unsubscribe();
    };
    NgbPopover.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ngbPopover]', exportAs: 'ngbPopover' },] },
    ];
    /** @nocollapse */
    NgbPopover.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], },
        { type: _popover_config__WEBPACK_IMPORTED_MODULE_4__["NgbPopoverConfig"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    NgbPopover.propDecorators = {
        "ngbPopover": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "popoverTitle": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "placement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "triggers": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "container": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "disablePopover": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "shown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "hidden": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return NgbPopover;
}());

//# sourceMappingURL=popover.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/popover/popover.module.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/popover/popover.module.js ***!
  \***************************************************************************/
/*! exports provided: NgbPopover, NgbPopoverConfig, NgbPopoverModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPopoverModule", function() { return NgbPopoverModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _popover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popover */ "./node_modules/@ng-bootstrap/ng-bootstrap/popover/popover.js");
/* harmony import */ var _popover_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popover-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/popover/popover-config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbPopover", function() { return _popover__WEBPACK_IMPORTED_MODULE_1__["NgbPopover"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbPopoverConfig", function() { return _popover_config__WEBPACK_IMPORTED_MODULE_2__["NgbPopoverConfig"]; });






var NgbPopoverModule = /** @class */ (function () {
    function NgbPopoverModule() {
    }
    NgbPopoverModule.forRoot = function () { return { ngModule: NgbPopoverModule, providers: [_popover_config__WEBPACK_IMPORTED_MODULE_2__["NgbPopoverConfig"]] }; };
    NgbPopoverModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{ declarations: [_popover__WEBPACK_IMPORTED_MODULE_1__["NgbPopover"], _popover__WEBPACK_IMPORTED_MODULE_1__["NgbPopoverWindow"]], exports: [_popover__WEBPACK_IMPORTED_MODULE_1__["NgbPopover"]], entryComponents: [_popover__WEBPACK_IMPORTED_MODULE_1__["NgbPopoverWindow"]] },] },
    ];
    return NgbPopoverModule;
}());

//# sourceMappingURL=popover.module.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/progressbar/progressbar-config.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/progressbar/progressbar-config.js ***!
  \***********************************************************************************/
/*! exports provided: NgbProgressbarConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbProgressbarConfig", function() { return NgbProgressbarConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/**
 * Configuration service for the NgbProgressbar component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the progress bars used in the application.
 */
var NgbProgressbarConfig = /** @class */ (function () {
    function NgbProgressbarConfig() {
        this.max = 100;
        this.animated = false;
        this.striped = false;
        this.showValue = false;
    }
    NgbProgressbarConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return NgbProgressbarConfig;
}());

//# sourceMappingURL=progressbar-config.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/progressbar/progressbar.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/progressbar/progressbar.js ***!
  \****************************************************************************/
/*! exports provided: NgbProgressbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbProgressbar", function() { return NgbProgressbar; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/util */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/util.js");
/* harmony import */ var _progressbar_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./progressbar-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/progressbar/progressbar-config.js");



/**
 * Directive that can be used to provide feedback on the progress of a workflow or an action.
 */
var NgbProgressbar = /** @class */ (function () {
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
        this.height = config.height;
    }
    NgbProgressbar.prototype.getValue = function () { return Object(_util_util__WEBPACK_IMPORTED_MODULE_1__["getValueInRange"])(this.value, this.max); };
    NgbProgressbar.prototype.getPercentValue = function () { return 100 * this.getValue() / this.max; };
    NgbProgressbar.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngb-progressbar',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    template: "\n    <div class=\"progress\" [style.height]=\"height\">\n      <div class=\"progress-bar{{type ? ' bg-' + type : ''}}{{animated ? ' progress-bar-animated' : ''}}{{striped ?\n    ' progress-bar-striped' : ''}}\" role=\"progressbar\" [style.width.%]=\"getPercentValue()\"\n    [attr.aria-valuenow]=\"getValue()\" aria-valuemin=\"0\" [attr.aria-valuemax]=\"max\">\n        <span *ngIf=\"showValue\">{{getPercentValue()}}%</span><ng-content></ng-content>\n      </div>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    NgbProgressbar.ctorParameters = function () { return [
        { type: _progressbar_config__WEBPACK_IMPORTED_MODULE_2__["NgbProgressbarConfig"], },
    ]; };
    NgbProgressbar.propDecorators = {
        "max": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "animated": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "striped": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "showValue": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "type": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "value": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "height": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return NgbProgressbar;
}());

//# sourceMappingURL=progressbar.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/progressbar/progressbar.module.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/progressbar/progressbar.module.js ***!
  \***********************************************************************************/
/*! exports provided: NgbProgressbar, NgbProgressbarConfig, NgbProgressbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbProgressbarModule", function() { return NgbProgressbarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _progressbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./progressbar */ "./node_modules/@ng-bootstrap/ng-bootstrap/progressbar/progressbar.js");
/* harmony import */ var _progressbar_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./progressbar-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/progressbar/progressbar-config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbProgressbar", function() { return _progressbar__WEBPACK_IMPORTED_MODULE_2__["NgbProgressbar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbProgressbarConfig", function() { return _progressbar_config__WEBPACK_IMPORTED_MODULE_3__["NgbProgressbarConfig"]; });







var NgbProgressbarModule = /** @class */ (function () {
    function NgbProgressbarModule() {
    }
    NgbProgressbarModule.forRoot = function () { return { ngModule: NgbProgressbarModule, providers: [_progressbar_config__WEBPACK_IMPORTED_MODULE_3__["NgbProgressbarConfig"]] }; };
    NgbProgressbarModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{ declarations: [_progressbar__WEBPACK_IMPORTED_MODULE_2__["NgbProgressbar"]], exports: [_progressbar__WEBPACK_IMPORTED_MODULE_2__["NgbProgressbar"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] },] },
    ];
    return NgbProgressbarModule;
}());

//# sourceMappingURL=progressbar.module.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/rating/rating-config.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/rating/rating-config.js ***!
  \*************************************************************************/
/*! exports provided: NgbRatingConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbRatingConfig", function() { return NgbRatingConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/**
 * Configuration service for the NgbRating component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the ratings used in the application.
 */
var NgbRatingConfig = /** @class */ (function () {
    function NgbRatingConfig() {
        this.max = 10;
        this.readonly = false;
        this.resettable = false;
    }
    NgbRatingConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return NgbRatingConfig;
}());

//# sourceMappingURL=rating-config.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/rating/rating.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/rating/rating.js ***!
  \******************************************************************/
/*! exports provided: NgbRating */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbRating", function() { return NgbRating; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rating_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rating-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/rating/rating-config.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/util */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/util.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var Key;
(function (Key) {
    Key[Key["End"] = 35] = "End";
    Key[Key["Home"] = 36] = "Home";
    Key[Key["ArrowLeft"] = 37] = "ArrowLeft";
    Key[Key["ArrowUp"] = 38] = "ArrowUp";
    Key[Key["ArrowRight"] = 39] = "ArrowRight";
    Key[Key["ArrowDown"] = 40] = "ArrowDown";
})(Key || (Key = {}));
var NGB_RATING_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return NgbRating; }),
    multi: true
};
/**
 * Rating directive that will take care of visualising a star rating bar.
 */
var NgbRating = /** @class */ (function () {
    function NgbRating(config, _changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
        this.contexts = [];
        this.disabled = false;
        /**
           * An event fired when a user is hovering over a given rating.
           * Event's payload equals to the rating being hovered over.
           */
        this.hover = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * An event fired when a user stops hovering over a given rating.
           * Event's payload equals to the rating of the last item being hovered over.
           */
        this.leave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * An event fired when a user selects a new rating.
           * Event's payload equals to the newly selected rating.
           */
        this.rateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
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
        if (Key[Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["toString"])(event.which)]) {
            event.preventDefault();
            switch (event.which) {
                case Key.ArrowDown:
                case Key.ArrowLeft:
                    this.update(this.rate - 1);
                    break;
                case Key.ArrowUp:
                case Key.ArrowRight:
                    this.update(this.rate + 1);
                    break;
                case Key.Home:
                    this.update(0);
                    break;
                case Key.End:
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
        this.contexts = Array.from({ length: this.max }, function (v, k) { return ({ fill: 0, index: k }); });
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
        if (internalChange === void 0) { internalChange = true; }
        var newRate = Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["getValueInRange"])(value, this.max, 0);
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
    NgbRating.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngb-rating',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
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
                    template: "\n    <ng-template #t let-fill=\"fill\">{{ fill === 100 ? '&#9733;' : '&#9734;' }}</ng-template>\n    <ng-template ngFor [ngForOf]=\"contexts\" let-index=\"index\">\n      <span class=\"sr-only\">({{ index < nextRate ? '*' : ' ' }})</span>\n      <span (mouseenter)=\"enter(index + 1)\" (click)=\"handleClick(index + 1)\" [style.cursor]=\"readonly || disabled ? 'default' : 'pointer'\">\n        <ng-template [ngTemplateOutlet]=\"starTemplate || t\" [ngTemplateOutletContext]=\"contexts[index]\"></ng-template>\n      </span>\n    </ng-template>\n  ",
                    providers: [NGB_RATING_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    NgbRating.ctorParameters = function () { return [
        { type: _rating_config__WEBPACK_IMPORTED_MODULE_1__["NgbRatingConfig"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
    ]; };
    NgbRating.propDecorators = {
        "max": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "rate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "readonly": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "resettable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "starTemplate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],] },],
        "hover": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "leave": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "rateChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return NgbRating;
}());

//# sourceMappingURL=rating.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/rating/rating.module.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/rating/rating.module.js ***!
  \*************************************************************************/
/*! exports provided: NgbRating, NgbRatingConfig, NgbRatingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbRatingModule", function() { return NgbRatingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _rating_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rating-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/rating/rating-config.js");
/* harmony import */ var _rating__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rating */ "./node_modules/@ng-bootstrap/ng-bootstrap/rating/rating.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbRating", function() { return _rating__WEBPACK_IMPORTED_MODULE_3__["NgbRating"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbRatingConfig", function() { return _rating_config__WEBPACK_IMPORTED_MODULE_2__["NgbRatingConfig"]; });







var NgbRatingModule = /** @class */ (function () {
    function NgbRatingModule() {
    }
    NgbRatingModule.forRoot = function () { return { ngModule: NgbRatingModule, providers: [_rating_config__WEBPACK_IMPORTED_MODULE_2__["NgbRatingConfig"]] }; };
    NgbRatingModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{ declarations: [_rating__WEBPACK_IMPORTED_MODULE_3__["NgbRating"]], exports: [_rating__WEBPACK_IMPORTED_MODULE_3__["NgbRating"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] },] },
    ];
    return NgbRatingModule;
}());

//# sourceMappingURL=rating.module.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/tabset/tabset-config.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/tabset/tabset-config.js ***!
  \*************************************************************************/
/*! exports provided: NgbTabsetConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTabsetConfig", function() { return NgbTabsetConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/**
 * Configuration service for the NgbTabset component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the tabsets used in the application.
 */
var NgbTabsetConfig = /** @class */ (function () {
    function NgbTabsetConfig() {
        this.justify = 'start';
        this.orientation = 'horizontal';
        this.type = 'tabs';
    }
    NgbTabsetConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return NgbTabsetConfig;
}());

//# sourceMappingURL=tabset-config.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/tabset/tabset.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/tabset/tabset.js ***!
  \******************************************************************/
/*! exports provided: NgbTabTitle, NgbTabContent, NgbTab, NgbTabset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTabTitle", function() { return NgbTabTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTabContent", function() { return NgbTabContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTab", function() { return NgbTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTabset", function() { return NgbTabset; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tabset_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabset-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/tabset/tabset-config.js");


var nextId = 0;
/**
 * This directive should be used to wrap tab titles that need to contain HTML markup or other directives.
 */
var NgbTabTitle = /** @class */ (function () {
    function NgbTabTitle(templateRef) {
        this.templateRef = templateRef;
    }
    NgbTabTitle.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'ng-template[ngbTabTitle]' },] },
    ];
    /** @nocollapse */
    NgbTabTitle.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], },
    ]; };
    return NgbTabTitle;
}());

/**
 * This directive must be used to wrap content to be displayed in a tab.
 */
var NgbTabContent = /** @class */ (function () {
    function NgbTabContent(templateRef) {
        this.templateRef = templateRef;
    }
    NgbTabContent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'ng-template[ngbTabContent]' },] },
    ];
    /** @nocollapse */
    NgbTabContent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], },
    ]; };
    return NgbTabContent;
}());

/**
 * A directive representing an individual tab.
 */
var NgbTab = /** @class */ (function () {
    function NgbTab() {
        /**
           * Unique tab identifier. Must be unique for the entire document for proper accessibility support.
           */
        this.id = "ngb-tab-" + nextId++;
        /**
           * Allows toggling disabled state of a given state. Disabled tabs can't be selected.
           */
        this.disabled = false;
    }
    NgbTab.prototype.ngAfterContentChecked = function () {
        // We are using @ContentChildren instead of @ContantChild as in the Angular version being used
        // only @ContentChildren allows us to specify the {descendants: false} option.
        // Without {descendants: false} we are hitting bugs described in:
        // https://github.com/ng-bootstrap/ng-bootstrap/issues/2240
        this.titleTpl = this.titleTpls.first;
        this.contentTpl = this.contentTpls.first;
    };
    NgbTab.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'ngb-tab' },] },
    ];
    /** @nocollapse */
    NgbTab.propDecorators = {
        "id": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "title": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "titleTpls": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [NgbTabTitle, { descendants: false },] },],
        "contentTpls": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [NgbTabContent, { descendants: false },] },],
    };
    return NgbTab;
}());

/**
 * A component that makes it easy to create tabbed interface.
 */
var NgbTabset = /** @class */ (function () {
    function NgbTabset(config) {
        /**
           * Whether the closed tabs should be hidden without destroying them
           */
        this.destroyOnHide = true;
        /**
           * A tab change event fired right before the tab selection happens. See NgbTabChangeEvent for payload details
           */
        this.tabChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.type = config.type;
        this.justify = config.justify;
        this.orientation = config.orientation;
    }
    Object.defineProperty(NgbTabset.prototype, "justify", {
        set: /**
           * The horizontal alignment of the nav with flexbox utilities. Can be one of 'start', 'center', 'end', 'fill' or
           * 'justified'
           * The default value is 'start'.
           */
        function (className) {
            if (className === 'fill' || className === 'justified') {
                this.justifyClass = "nav-" + className;
            }
            else {
                this.justifyClass = "justify-content-" + className;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Selects the tab with the given id and shows its associated pane.
     * Any other tab that was previously selected becomes unselected and its associated pane is hidden.
     */
    /**
       * Selects the tab with the given id and shows its associated pane.
       * Any other tab that was previously selected becomes unselected and its associated pane is hidden.
       */
    NgbTabset.prototype.select = /**
       * Selects the tab with the given id and shows its associated pane.
       * Any other tab that was previously selected becomes unselected and its associated pane is hidden.
       */
    function (tabId) {
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
    NgbTabset.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngb-tabset',
                    exportAs: 'ngbTabset',
                    template: "\n    <ul [class]=\"'nav nav-' + type + (orientation == 'horizontal'?  ' ' + justifyClass : ' flex-column')\" role=\"tablist\">\n      <li class=\"nav-item\" *ngFor=\"let tab of tabs\">\n        <a [id]=\"tab.id\" class=\"nav-link\" [class.active]=\"tab.id === activeId\" [class.disabled]=\"tab.disabled\"\n          href (click)=\"!!select(tab.id)\" role=\"tab\" [attr.tabindex]=\"(tab.disabled ? '-1': undefined)\"\n          [attr.aria-controls]=\"(!destroyOnHide || tab.id === activeId ? tab.id + '-panel' : null)\"\n          [attr.aria-expanded]=\"tab.id === activeId\" [attr.aria-disabled]=\"tab.disabled\">\n          {{tab.title}}<ng-template [ngTemplateOutlet]=\"tab.titleTpl?.templateRef\"></ng-template>\n        </a>\n      </li>\n    </ul>\n    <div class=\"tab-content\">\n      <ng-template ngFor let-tab [ngForOf]=\"tabs\">\n        <div\n          class=\"tab-pane {{tab.id === activeId ? 'active' : null}}\"\n          *ngIf=\"!destroyOnHide || tab.id === activeId\"\n          role=\"tabpanel\"\n          [attr.aria-labelledby]=\"tab.id\" id=\"{{tab.id}}-panel\"\n          [attr.aria-expanded]=\"tab.id === activeId\">\n          <ng-template [ngTemplateOutlet]=\"tab.contentTpl?.templateRef\"></ng-template>\n        </div>\n      </ng-template>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    NgbTabset.ctorParameters = function () { return [
        { type: _tabset_config__WEBPACK_IMPORTED_MODULE_1__["NgbTabsetConfig"], },
    ]; };
    NgbTabset.propDecorators = {
        "tabs": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [NgbTab,] },],
        "activeId": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "destroyOnHide": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "justify": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "orientation": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "type": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "tabChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return NgbTabset;
}());

//# sourceMappingURL=tabset.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/tabset/tabset.module.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/tabset/tabset.module.js ***!
  \*************************************************************************/
/*! exports provided: NgbTabset, NgbTab, NgbTabContent, NgbTabTitle, NgbTabsetConfig, NgbTabsetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTabsetModule", function() { return NgbTabsetModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _tabset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabset */ "./node_modules/@ng-bootstrap/ng-bootstrap/tabset/tabset.js");
/* harmony import */ var _tabset_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabset-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/tabset/tabset-config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbTabset", function() { return _tabset__WEBPACK_IMPORTED_MODULE_2__["NgbTabset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbTab", function() { return _tabset__WEBPACK_IMPORTED_MODULE_2__["NgbTab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbTabContent", function() { return _tabset__WEBPACK_IMPORTED_MODULE_2__["NgbTabContent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbTabTitle", function() { return _tabset__WEBPACK_IMPORTED_MODULE_2__["NgbTabTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbTabsetConfig", function() { return _tabset_config__WEBPACK_IMPORTED_MODULE_3__["NgbTabsetConfig"]; });







var NGB_TABSET_DIRECTIVES = [_tabset__WEBPACK_IMPORTED_MODULE_2__["NgbTabset"], _tabset__WEBPACK_IMPORTED_MODULE_2__["NgbTab"], _tabset__WEBPACK_IMPORTED_MODULE_2__["NgbTabContent"], _tabset__WEBPACK_IMPORTED_MODULE_2__["NgbTabTitle"]];
var NgbTabsetModule = /** @class */ (function () {
    function NgbTabsetModule() {
    }
    NgbTabsetModule.forRoot = function () { return { ngModule: NgbTabsetModule, providers: [_tabset_config__WEBPACK_IMPORTED_MODULE_3__["NgbTabsetConfig"]] }; };
    NgbTabsetModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{ declarations: NGB_TABSET_DIRECTIVES, exports: NGB_TABSET_DIRECTIVES, imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] },] },
    ];
    return NgbTabsetModule;
}());

//# sourceMappingURL=tabset.module.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/timepicker/ngb-time.js":
/*!************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/timepicker/ngb-time.js ***!
  \************************************************************************/
/*! exports provided: NgbTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTime", function() { return NgbTime; });
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/util */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/util.js");

var NgbTime = /** @class */ (function () {
    function NgbTime(hour, minute, second) {
        this.hour = Object(_util_util__WEBPACK_IMPORTED_MODULE_0__["toInteger"])(hour);
        this.minute = Object(_util_util__WEBPACK_IMPORTED_MODULE_0__["toInteger"])(minute);
        this.second = Object(_util_util__WEBPACK_IMPORTED_MODULE_0__["toInteger"])(second);
    }
    NgbTime.prototype.changeHour = function (step) {
        if (step === void 0) { step = 1; }
        this.updateHour((isNaN(this.hour) ? 0 : this.hour) + step);
    };
    NgbTime.prototype.updateHour = function (hour) {
        if (Object(_util_util__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(hour)) {
            this.hour = (hour < 0 ? 24 + hour : hour) % 24;
        }
        else {
            this.hour = NaN;
        }
    };
    NgbTime.prototype.changeMinute = function (step) {
        if (step === void 0) { step = 1; }
        this.updateMinute((isNaN(this.minute) ? 0 : this.minute) + step);
    };
    NgbTime.prototype.updateMinute = function (minute) {
        if (Object(_util_util__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(minute)) {
            this.minute = minute % 60 < 0 ? 60 + minute % 60 : minute % 60;
            this.changeHour(Math.floor(minute / 60));
        }
        else {
            this.minute = NaN;
        }
    };
    NgbTime.prototype.changeSecond = function (step) {
        if (step === void 0) { step = 1; }
        this.updateSecond((isNaN(this.second) ? 0 : this.second) + step);
    };
    NgbTime.prototype.updateSecond = function (second) {
        if (Object(_util_util__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(second)) {
            this.second = second < 0 ? 60 + second % 60 : second % 60;
            this.changeMinute(Math.floor(second / 60));
        }
        else {
            this.second = NaN;
        }
    };
    NgbTime.prototype.isValid = function (checkSecs) {
        if (checkSecs === void 0) { checkSecs = true; }
        return Object(_util_util__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(this.hour) && Object(_util_util__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(this.minute) && (checkSecs ? Object(_util_util__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(this.second) : true);
    };
    NgbTime.prototype.toString = function () { return (this.hour || 0) + ":" + (this.minute || 0) + ":" + (this.second || 0); };
    return NgbTime;
}());

//# sourceMappingURL=ngb-time.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/timepicker/timepicker-config.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/timepicker/timepicker-config.js ***!
  \*********************************************************************************/
/*! exports provided: NgbTimepickerConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTimepickerConfig", function() { return NgbTimepickerConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/**
 * Configuration service for the NgbTimepicker component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the timepickers used in the application.
 */
var NgbTimepickerConfig = /** @class */ (function () {
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
    NgbTimepickerConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return NgbTimepickerConfig;
}());

//# sourceMappingURL=timepicker-config.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/timepicker/timepicker.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/timepicker/timepicker.js ***!
  \**************************************************************************/
/*! exports provided: NgbTimepicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTimepicker", function() { return NgbTimepicker; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/util */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/util.js");
/* harmony import */ var _ngb_time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ngb-time */ "./node_modules/@ng-bootstrap/ng-bootstrap/timepicker/ngb-time.js");
/* harmony import */ var _timepicker_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./timepicker-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/timepicker/timepicker-config.js");





var NGB_TIMEPICKER_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return NgbTimepicker; }),
    multi: true
};
/**
 * A lightweight & configurable timepicker directive.
 */
var NgbTimepicker = /** @class */ (function () {
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
        this.model = value ? new _ngb_time__WEBPACK_IMPORTED_MODULE_3__["NgbTime"](value.hour, value.minute, value.second) : new _ngb_time__WEBPACK_IMPORTED_MODULE_3__["NgbTime"]();
        if (!this.seconds && (!value || !Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["isNumber"])(value.second))) {
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
        var enteredHour = Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["toInteger"])(newVal);
        if (this.meridian && (isPM && enteredHour < 12 || !isPM && enteredHour === 12)) {
            this.model.updateHour(enteredHour + 12);
        }
        else {
            this.model.updateHour(enteredHour);
        }
        this.propagateModelChange();
    };
    NgbTimepicker.prototype.updateMinute = function (newVal) {
        this.model.updateMinute(Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["toInteger"])(newVal));
        this.propagateModelChange();
    };
    NgbTimepicker.prototype.updateSecond = function (newVal) {
        this.model.updateSecond(Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["toInteger"])(newVal));
        this.propagateModelChange();
    };
    NgbTimepicker.prototype.toggleMeridian = function () {
        if (this.meridian) {
            this.changeHour(12);
        }
    };
    NgbTimepicker.prototype.formatHour = function (value) {
        if (Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["isNumber"])(value)) {
            if (this.meridian) {
                return Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["padNumber"])(value % 12 === 0 ? 12 : value % 12);
            }
            else {
                return Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["padNumber"])(value % 24);
            }
        }
        else {
            return Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["padNumber"])(NaN);
        }
    };
    NgbTimepicker.prototype.formatMinSec = function (value) { return Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["padNumber"])(value); };
    NgbTimepicker.prototype.setFormControlSize = function () { return { 'form-control-sm': this.size === 'small', 'form-control-lg': this.size === 'large' }; };
    NgbTimepicker.prototype.setButtonSize = function () { return { 'btn-sm': this.size === 'small', 'btn-lg': this.size === 'large' }; };
    NgbTimepicker.prototype.ngOnChanges = function (changes) {
        if (changes['seconds'] && !this.seconds && this.model && !Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["isNumber"])(this.model.second)) {
            this.model.second = 0;
            this.propagateModelChange(false);
        }
    };
    NgbTimepicker.prototype.propagateModelChange = function (touched) {
        if (touched === void 0) { touched = true; }
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
    NgbTimepicker.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngb-timepicker',
                    styles: ["\n    .ngb-tp {\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-align: center;\n      align-items: center;\n    }\n\n    .ngb-tp-hour, .ngb-tp-minute, .ngb-tp-second, .ngb-tp-meridian {\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-direction: column;\n      flex-direction: column;\n      -ms-flex-align: center;\n      align-items: center;\n      -ms-flex-pack: distribute;\n      justify-content: space-around;\n    }\n\n    .ngb-tp-spacer {\n      width: 1em;\n      text-align: center;\n    }\n\n    .chevron::before {\n      border-style: solid;\n      border-width: 0.29em 0.29em 0 0;\n      content: '';\n      display: inline-block;\n      height: 0.69em;\n      left: 0.05em;\n      position: relative;\n      top: 0.15em;\n      transform: rotate(-45deg);\n      -webkit-transform: rotate(-45deg);\n      -ms-transform: rotate(-45deg);\n      vertical-align: middle;\n      width: 0.71em;\n    }\n\n    .chevron.bottom:before {\n      top: -.3em;\n      -webkit-transform: rotate(135deg);\n      -ms-transform: rotate(135deg);\n      transform: rotate(135deg);\n    }\n\n    input {\n      text-align: center;\n      display: inline-block;\n      width: auto;\n    }\n  "],
                    template: "\n    <fieldset [disabled]=\"disabled\" [class.disabled]=\"disabled\">\n      <div class=\"ngb-tp\">\n        <div class=\"ngb-tp-hour\">\n          <button *ngIf=\"spinners\" type=\"button\" class=\"btn btn-link\" [ngClass]=\"setButtonSize()\" (click)=\"changeHour(hourStep)\"\n            [disabled]=\"disabled\" [class.disabled]=\"disabled\">\n            <span class=\"chevron\"></span>\n            <span class=\"sr-only\">Increment hours</span>\n          </button>\n          <input type=\"text\" class=\"form-control\" [ngClass]=\"setFormControlSize()\" maxlength=\"2\" size=\"2\" placeholder=\"HH\"\n            [value]=\"formatHour(model?.hour)\" (change)=\"updateHour($event.target.value)\"\n            [readonly]=\"readonlyInputs\" [disabled]=\"disabled\" aria-label=\"Hours\">\n          <button *ngIf=\"spinners\" type=\"button\" class=\"btn btn-link\" [ngClass]=\"setButtonSize()\" (click)=\"changeHour(-hourStep)\"\n            [disabled]=\"disabled\" [class.disabled]=\"disabled\">\n            <span class=\"chevron bottom\"></span>\n            <span class=\"sr-only\">Decrement hours</span>\n          </button>\n        </div>\n        <div class=\"ngb-tp-spacer\">:</div>\n        <div class=\"ngb-tp-minute\">\n          <button *ngIf=\"spinners\" type=\"button\" class=\"btn btn-link\" [ngClass]=\"setButtonSize()\" (click)=\"changeMinute(minuteStep)\"\n            [disabled]=\"disabled\" [class.disabled]=\"disabled\">\n            <span class=\"chevron\"></span>\n            <span class=\"sr-only\">Increment minutes</span>\n          </button>\n          <input type=\"text\" class=\"form-control\" [ngClass]=\"setFormControlSize()\" maxlength=\"2\" size=\"2\" placeholder=\"MM\"\n            [value]=\"formatMinSec(model?.minute)\" (change)=\"updateMinute($event.target.value)\"\n            [readonly]=\"readonlyInputs\" [disabled]=\"disabled\" aria-label=\"Minutes\">\n          <button *ngIf=\"spinners\" type=\"button\" class=\"btn btn-link\" [ngClass]=\"setButtonSize()\" (click)=\"changeMinute(-minuteStep)\"\n            [disabled]=\"disabled\" [class.disabled]=\"disabled\">\n            <span class=\"chevron bottom\"></span>\n            <span class=\"sr-only\">Decrement minutes</span>\n          </button>\n        </div>\n        <div *ngIf=\"seconds\" class=\"ngb-tp-spacer\">:</div>\n        <div *ngIf=\"seconds\" class=\"ngb-tp-second\">\n          <button *ngIf=\"spinners\" type=\"button\" class=\"btn btn-link\" [ngClass]=\"setButtonSize()\" (click)=\"changeSecond(secondStep)\"\n            [disabled]=\"disabled\" [class.disabled]=\"disabled\">\n            <span class=\"chevron\"></span>\n            <span class=\"sr-only\">Increment seconds</span>\n          </button>\n          <input type=\"text\" class=\"form-control\" [ngClass]=\"setFormControlSize()\" maxlength=\"2\" size=\"2\" placeholder=\"SS\"\n            [value]=\"formatMinSec(model?.second)\" (change)=\"updateSecond($event.target.value)\"\n            [readonly]=\"readonlyInputs\" [disabled]=\"disabled\" aria-label=\"Seconds\">\n          <button *ngIf=\"spinners\" type=\"button\" class=\"btn btn-link\" [ngClass]=\"setButtonSize()\" (click)=\"changeSecond(-secondStep)\"\n            [disabled]=\"disabled\" [class.disabled]=\"disabled\">\n            <span class=\"chevron bottom\"></span>\n            <span class=\"sr-only\">Decrement seconds</span>\n          </button>\n        </div>\n        <div *ngIf=\"meridian\" class=\"ngb-tp-spacer\"></div>\n        <div *ngIf=\"meridian\" class=\"ngb-tp-meridian\">\n          <button type=\"button\" class=\"btn btn-outline-primary\" [ngClass]=\"setButtonSize()\"\n            [disabled]=\"disabled\" [class.disabled]=\"disabled\"\n            (click)=\"toggleMeridian()\">{{model?.hour >= 12 ? 'PM' : 'AM'}}</button>\n        </div>\n      </div>\n    </fieldset>\n  ",
                    providers: [NGB_TIMEPICKER_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    NgbTimepicker.ctorParameters = function () { return [
        { type: _timepicker_config__WEBPACK_IMPORTED_MODULE_4__["NgbTimepickerConfig"], },
    ]; };
    NgbTimepicker.propDecorators = {
        "meridian": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "spinners": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "seconds": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "hourStep": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "minuteStep": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "secondStep": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "readonlyInputs": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "size": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return NgbTimepicker;
}());

//# sourceMappingURL=timepicker.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/timepicker/timepicker.module.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/timepicker/timepicker.module.js ***!
  \*********************************************************************************/
/*! exports provided: NgbTimepicker, NgbTimepickerConfig, NgbTimepickerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTimepickerModule", function() { return NgbTimepickerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _timepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timepicker */ "./node_modules/@ng-bootstrap/ng-bootstrap/timepicker/timepicker.js");
/* harmony import */ var _timepicker_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timepicker-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/timepicker/timepicker-config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbTimepicker", function() { return _timepicker__WEBPACK_IMPORTED_MODULE_2__["NgbTimepicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbTimepickerConfig", function() { return _timepicker_config__WEBPACK_IMPORTED_MODULE_3__["NgbTimepickerConfig"]; });







var NgbTimepickerModule = /** @class */ (function () {
    function NgbTimepickerModule() {
    }
    NgbTimepickerModule.forRoot = function () { return { ngModule: NgbTimepickerModule, providers: [_timepicker_config__WEBPACK_IMPORTED_MODULE_3__["NgbTimepickerConfig"]] }; };
    NgbTimepickerModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{ declarations: [_timepicker__WEBPACK_IMPORTED_MODULE_2__["NgbTimepicker"]], exports: [_timepicker__WEBPACK_IMPORTED_MODULE_2__["NgbTimepicker"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] },] },
    ];
    return NgbTimepickerModule;
}());

//# sourceMappingURL=timepicker.module.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/tooltip/tooltip-config.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/tooltip/tooltip-config.js ***!
  \***************************************************************************/
/*! exports provided: NgbTooltipConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTooltipConfig", function() { return NgbTooltipConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/**
 * Configuration service for the NgbTooltip directive.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the tooltips used in the application.
 */
var NgbTooltipConfig = /** @class */ (function () {
    function NgbTooltipConfig() {
        this.placement = 'top';
        this.triggers = 'hover';
        this.disableTooltip = false;
    }
    NgbTooltipConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return NgbTooltipConfig;
}());

//# sourceMappingURL=tooltip-config.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/tooltip/tooltip.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/tooltip/tooltip.js ***!
  \********************************************************************/
/*! exports provided: NgbTooltipWindow, NgbTooltip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTooltipWindow", function() { return NgbTooltipWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTooltip", function() { return NgbTooltip; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_triggers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/triggers */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/triggers.js");
/* harmony import */ var _util_positioning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/positioning */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/positioning.js");
/* harmony import */ var _util_popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/popup */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/popup.js");
/* harmony import */ var _tooltip_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tooltip-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/tooltip/tooltip-config.js");





var nextId = 0;
var NgbTooltipWindow = /** @class */ (function () {
    function NgbTooltipWindow(_element, _renderer) {
        this._element = _element;
        this._renderer = _renderer;
        this.placement = 'top';
    }
    NgbTooltipWindow.prototype.applyPlacement = function (_placement) {
        // remove the current placement classes
        this._renderer.removeClass(this._element.nativeElement, 'bs-tooltip-' + this.placement.toString().split('-')[0]);
        this._renderer.removeClass(this._element.nativeElement, 'bs-tooltip-' + this.placement.toString());
        // set the new placement classes
        this.placement = _placement;
        // apply the new placement
        this._renderer.addClass(this._element.nativeElement, 'bs-tooltip-' + this.placement.toString().split('-')[0]);
        this._renderer.addClass(this._element.nativeElement, 'bs-tooltip-' + this.placement.toString());
    };
    NgbTooltipWindow.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngb-tooltip-window',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    host: {
                        '[class]': '"tooltip show bs-tooltip-" + placement.split("-")[0]+" bs-tooltip-" + placement',
                        'role': 'tooltip',
                        '[id]': 'id'
                    },
                    template: "<div class=\"arrow\"></div><div class=\"tooltip-inner\"><ng-content></ng-content></div>",
                    styles: ["\n    :host.bs-tooltip-top .arrow, :host.bs-tooltip-bottom .arrow {\n      left: calc(50% - 0.4rem);\n    }\n\n    :host.bs-tooltip-top-left .arrow, :host.bs-tooltip-bottom-left .arrow {\n      left: 1em;\n    }\n\n    :host.bs-tooltip-top-right .arrow, :host.bs-tooltip-bottom-right .arrow {\n      left: auto;\n      right: 0.8rem;\n    }\n\n    :host.bs-tooltip-left .arrow, :host.bs-tooltip-right .arrow {\n      top: calc(50% - 0.4rem);\n    }\n\n    :host.bs-tooltip-left-top .arrow, :host.bs-tooltip-right-top .arrow {\n      top: 0.4rem;\n    }\n\n    :host.bs-tooltip-left-bottom .arrow, :host.bs-tooltip-right-bottom .arrow {\n      top: auto;\n      bottom: 0.4rem;\n    }\n  "]
                },] },
    ];
    /** @nocollapse */
    NgbTooltipWindow.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    ]; };
    NgbTooltipWindow.propDecorators = {
        "placement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "id": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return NgbTooltipWindow;
}());

/**
 * A lightweight, extensible directive for fancy tooltip creation.
 */
var NgbTooltip = /** @class */ (function () {
    function NgbTooltip(_elementRef, _renderer, injector, componentFactoryResolver, viewContainerRef, config, ngZone) {
        var _this = this;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        /**
           * Emits an event when the tooltip is shown
           */
        this.shown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * Emits an event when the tooltip is hidden
           */
        this.hidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._ngbTooltipWindowId = "ngb-tooltip-" + nextId++;
        this.placement = config.placement;
        this.triggers = config.triggers;
        this.container = config.container;
        this.disableTooltip = config.disableTooltip;
        this._popupService = new _util_popup__WEBPACK_IMPORTED_MODULE_3__["PopupService"](NgbTooltipWindow, injector, viewContainerRef, _renderer, componentFactoryResolver);
        this._zoneSubscription = ngZone.onStable.subscribe(function () {
            if (_this._windowRef) {
                _this._windowRef.instance.applyPlacement(Object(_util_positioning__WEBPACK_IMPORTED_MODULE_2__["positionElements"])(_this._elementRef.nativeElement, _this._windowRef.location.nativeElement, _this.placement, _this.container === 'body'));
            }
        });
    }
    Object.defineProperty(NgbTooltip.prototype, "ngbTooltip", {
        get: function () { return this._ngbTooltip; },
        set: /**
           * Content to be displayed as tooltip. If falsy, the tooltip won't open.
           */
        function (value) {
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
    /**
       * Opens an element’s tooltip. This is considered a “manual” triggering of the tooltip.
       * The context is an optional value to be injected into the tooltip template when it is created.
       */
    NgbTooltip.prototype.open = /**
       * Opens an element’s tooltip. This is considered a “manual” triggering of the tooltip.
       * The context is an optional value to be injected into the tooltip template when it is created.
       */
    function (context) {
        if (!this._windowRef && this._ngbTooltip && !this.disableTooltip) {
            this._windowRef = this._popupService.open(this._ngbTooltip, context);
            this._windowRef.instance.id = this._ngbTooltipWindowId;
            this._renderer.setAttribute(this._elementRef.nativeElement, 'aria-describedby', this._ngbTooltipWindowId);
            if (this.container === 'body') {
                window.document.querySelector(this.container).appendChild(this._windowRef.location.nativeElement);
            }
            this._windowRef.instance.placement = Array.isArray(this.placement) ? this.placement[0] : this.placement;
            // apply styling to set basic css-classes on target element, before going for positioning
            this._windowRef.changeDetectorRef.detectChanges();
            this._windowRef.changeDetectorRef.markForCheck();
            // position tooltip along the element
            this._windowRef.instance.applyPlacement(Object(_util_positioning__WEBPACK_IMPORTED_MODULE_2__["positionElements"])(this._elementRef.nativeElement, this._windowRef.location.nativeElement, this.placement, this.container === 'body'));
            this.shown.emit();
        }
    };
    /**
     * Closes an element’s tooltip. This is considered a “manual” triggering of the tooltip.
     */
    /**
       * Closes an element’s tooltip. This is considered a “manual” triggering of the tooltip.
       */
    NgbTooltip.prototype.close = /**
       * Closes an element’s tooltip. This is considered a “manual” triggering of the tooltip.
       */
    function () {
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
    /**
       * Toggles an element’s tooltip. This is considered a “manual” triggering of the tooltip.
       */
    NgbTooltip.prototype.toggle = /**
       * Toggles an element’s tooltip. This is considered a “manual” triggering of the tooltip.
       */
    function () {
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
    /**
       * Returns whether or not the tooltip is currently being shown
       */
    NgbTooltip.prototype.isOpen = /**
       * Returns whether or not the tooltip is currently being shown
       */
    function () { return this._windowRef != null; };
    NgbTooltip.prototype.ngOnInit = function () {
        this._unregisterListenersFn = Object(_util_triggers__WEBPACK_IMPORTED_MODULE_1__["listenToTriggers"])(this._renderer, this._elementRef.nativeElement, this.triggers, this.open.bind(this), this.close.bind(this), this.toggle.bind(this));
    };
    NgbTooltip.prototype.ngOnDestroy = function () {
        this.close();
        // This check is needed as it might happen that ngOnDestroy is called before ngOnInit
        // under certain conditions, see: https://github.com/ng-bootstrap/ng-bootstrap/issues/2199
        if (this._unregisterListenersFn) {
            this._unregisterListenersFn();
        }
        this._zoneSubscription.unsubscribe();
    };
    NgbTooltip.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ngbTooltip]', exportAs: 'ngbTooltip' },] },
    ];
    /** @nocollapse */
    NgbTooltip.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], },
        { type: _tooltip_config__WEBPACK_IMPORTED_MODULE_4__["NgbTooltipConfig"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    NgbTooltip.propDecorators = {
        "placement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "triggers": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "container": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "disableTooltip": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "shown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "hidden": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "ngbTooltip": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return NgbTooltip;
}());

//# sourceMappingURL=tooltip.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/tooltip/tooltip.module.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/tooltip/tooltip.module.js ***!
  \***************************************************************************/
/*! exports provided: NgbTooltipConfig, NgbTooltip, NgbTooltipModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTooltipModule", function() { return NgbTooltipModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tooltip */ "./node_modules/@ng-bootstrap/ng-bootstrap/tooltip/tooltip.js");
/* harmony import */ var _tooltip_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tooltip-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/tooltip/tooltip-config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbTooltipConfig", function() { return _tooltip_config__WEBPACK_IMPORTED_MODULE_2__["NgbTooltipConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbTooltip", function() { return _tooltip__WEBPACK_IMPORTED_MODULE_1__["NgbTooltip"]; });






var NgbTooltipModule = /** @class */ (function () {
    function NgbTooltipModule() {
    }
    NgbTooltipModule.forRoot = function () { return { ngModule: NgbTooltipModule, providers: [_tooltip_config__WEBPACK_IMPORTED_MODULE_2__["NgbTooltipConfig"]] }; };
    NgbTooltipModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{ declarations: [_tooltip__WEBPACK_IMPORTED_MODULE_1__["NgbTooltip"], _tooltip__WEBPACK_IMPORTED_MODULE_1__["NgbTooltipWindow"]], exports: [_tooltip__WEBPACK_IMPORTED_MODULE_1__["NgbTooltip"]], entryComponents: [_tooltip__WEBPACK_IMPORTED_MODULE_1__["NgbTooltipWindow"]] },] },
    ];
    return NgbTooltipModule;
}());

//# sourceMappingURL=tooltip.module.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/typeahead/highlight.js":
/*!************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/typeahead/highlight.js ***!
  \************************************************************************/
/*! exports provided: NgbHighlight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbHighlight", function() { return NgbHighlight; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/util */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/util.js");


var NgbHighlight = /** @class */ (function () {
    function NgbHighlight() {
        this.highlightClass = 'ngb-highlight';
    }
    NgbHighlight.prototype.ngOnChanges = function (changes) {
        var resultStr = Object(_util_util__WEBPACK_IMPORTED_MODULE_1__["toString"])(this.result);
        var resultLC = resultStr.toLowerCase();
        var termLC = Object(_util_util__WEBPACK_IMPORTED_MODULE_1__["toString"])(this.term).toLowerCase();
        var currentIdx = 0;
        if (termLC.length > 0) {
            this.parts = resultLC.split(new RegExp("(" + Object(_util_util__WEBPACK_IMPORTED_MODULE_1__["regExpEscape"])(termLC) + ")")).map(function (part) {
                var originalPart = resultStr.substr(currentIdx, part.length);
                currentIdx += part.length;
                return originalPart;
            });
        }
        else {
            this.parts = [resultStr];
        }
    };
    NgbHighlight.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngb-highlight',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    template: "<ng-template ngFor [ngForOf]=\"parts\" let-part let-isOdd=\"odd\">" +
                        "<span *ngIf=\"isOdd\" class=\"{{highlightClass}}\">{{part}}</span><ng-template [ngIf]=\"!isOdd\">{{part}}</ng-template>" +
                        "</ng-template>",
                    // template needs to be formatted in a certain way so we don't add empty text nodes
                    styles: ["\n    .ngb-highlight {\n      font-weight: bold;\n    }\n  "]
                },] },
    ];
    /** @nocollapse */
    NgbHighlight.propDecorators = {
        "highlightClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "result": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "term": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return NgbHighlight;
}());

//# sourceMappingURL=highlight.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/typeahead/typeahead-config.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/typeahead/typeahead-config.js ***!
  \*******************************************************************************/
/*! exports provided: NgbTypeaheadConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTypeaheadConfig", function() { return NgbTypeaheadConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/**
 * Configuration service for the NgbTypeahead component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the typeaheads used in the application.
 */
var NgbTypeaheadConfig = /** @class */ (function () {
    function NgbTypeaheadConfig() {
        this.editable = true;
        this.focusFirst = true;
        this.showHint = false;
        this.placement = 'bottom-left';
    }
    NgbTypeaheadConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return NgbTypeaheadConfig;
}());

//# sourceMappingURL=typeahead-config.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/typeahead/typeahead-window.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/typeahead/typeahead-window.js ***!
  \*******************************************************************************/
/*! exports provided: NgbTypeaheadWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTypeaheadWindow", function() { return NgbTypeaheadWindow; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/util */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/util.js");


var NgbTypeaheadWindow = /** @class */ (function () {
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
        this.formatter = _util_util__WEBPACK_IMPORTED_MODULE_1__["toString"];
        /**
           * Event raised when user selects a particular result row
           */
        this.selectEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.activeChangeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    NgbTypeaheadWindow.prototype.hasActive = function () { return this.activeIdx > -1 && this.activeIdx < this.results.length; };
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
    NgbTypeaheadWindow.prototype.resetActive = function () {
        this.activeIdx = this.focusFirst ? 0 : -1;
        this._activeChanged();
    };
    NgbTypeaheadWindow.prototype.select = function (item) { this.selectEvent.emit(item); };
    NgbTypeaheadWindow.prototype.ngOnInit = function () { this.resetActive(); };
    NgbTypeaheadWindow.prototype._activeChanged = function () {
        this.activeChangeEvent.emit(this.activeIdx >= 0 ? this.id + '-' + this.activeIdx : undefined);
    };
    NgbTypeaheadWindow.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngb-typeahead-window',
                    exportAs: 'ngbTypeaheadWindow',
                    host: { 'class': 'dropdown-menu show', 'role': 'listbox', '[id]': 'id' },
                    template: "\n    <ng-template #rt let-result=\"result\" let-term=\"term\" let-formatter=\"formatter\">\n      <ngb-highlight [result]=\"formatter(result)\" [term]=\"term\"></ngb-highlight>\n    </ng-template>\n    <ng-template ngFor [ngForOf]=\"results\" let-result let-idx=\"index\">\n      <button type=\"button\" class=\"dropdown-item\" role=\"option\"\n        [id]=\"id + '-' + idx\"\n        [class.active]=\"idx === activeIdx\"\n        (mouseenter)=\"markActive(idx)\"\n        (click)=\"select(result)\">\n          <ng-template [ngTemplateOutlet]=\"resultTemplate || rt\"\n          [ngTemplateOutletContext]=\"{result: result, term: term, formatter: formatter}\"></ng-template>\n      </button>\n    </ng-template>\n  "
                },] },
    ];
    /** @nocollapse */
    NgbTypeaheadWindow.propDecorators = {
        "id": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "focusFirst": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "results": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "term": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "formatter": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "resultTemplate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "selectEvent": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['select',] },],
        "activeChangeEvent": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['activeChange',] },],
    };
    return NgbTypeaheadWindow;
}());

//# sourceMappingURL=typeahead-window.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/typeahead/typeahead.js":
/*!************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/typeahead/typeahead.js ***!
  \************************************************************************/
/*! exports provided: NgbTypeahead */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTypeahead", function() { return NgbTypeahead; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _util_positioning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/positioning */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/positioning.js");
/* harmony import */ var _typeahead_window__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./typeahead-window */ "./node_modules/@ng-bootstrap/ng-bootstrap/typeahead/typeahead-window.js");
/* harmony import */ var _util_popup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/popup */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/popup.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/util */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/util.js");
/* harmony import */ var _util_accessibility_live__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/accessibility/live */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/accessibility/live.js");
/* harmony import */ var _typeahead_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./typeahead-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/typeahead/typeahead-config.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");










var Key;
(function (Key) {
    Key[Key["Tab"] = 9] = "Tab";
    Key[Key["Enter"] = 13] = "Enter";
    Key[Key["Escape"] = 27] = "Escape";
    Key[Key["ArrowUp"] = 38] = "ArrowUp";
    Key[Key["ArrowDown"] = 40] = "ArrowDown";
})(Key || (Key = {}));
var NGB_TYPEAHEAD_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return NgbTypeahead; }),
    multi: true
};
var nextWindowId = 0;
/**
 * NgbTypeahead directive provides a simple way of creating powerful typeaheads from any text input
 */
var NgbTypeahead = /** @class */ (function () {
    function NgbTypeahead(_elementRef, _viewContainerRef, _renderer, _injector, componentFactoryResolver, config, ngZone, _live) {
        var _this = this;
        this._elementRef = _elementRef;
        this._viewContainerRef = _viewContainerRef;
        this._renderer = _renderer;
        this._injector = _injector;
        this._live = _live;
        /** Placement of a typeahead accepts:
           *    "top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right",
           *    "left", "left-top", "left-bottom", "right", "right-top", "right-bottom"
           * and array of above values.
          */
        this.placement = 'bottom-left';
        /**
           * An event emitted when a match is selected. Event payload is of type NgbTypeaheadSelectItemEvent.
           */
        this.selectItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.popupId = "ngb-typeahead-" + nextWindowId++;
        this._onTouched = function () { };
        this._onChange = function (_) { };
        this.container = config.container;
        this.editable = config.editable;
        this.focusFirst = config.focusFirst;
        this.showHint = config.showHint;
        this.placement = config.placement;
        this._valueChanges = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(_elementRef.nativeElement, 'input')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function ($event) { return $event.target.value; }));
        this._resubscribeTypeahead = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this._popupService = new _util_popup__WEBPACK_IMPORTED_MODULE_5__["PopupService"](_typeahead_window__WEBPACK_IMPORTED_MODULE_4__["NgbTypeaheadWindow"], _injector, _viewContainerRef, _renderer, componentFactoryResolver);
        this._zoneSubscription = ngZone.onStable.subscribe(function () {
            if (_this.isPopupOpen()) {
                Object(_util_positioning__WEBPACK_IMPORTED_MODULE_3__["positionElements"])(_this._elementRef.nativeElement, _this._windowRef.location.nativeElement, _this.placement, _this.container === 'body');
            }
        });
    }
    NgbTypeahead.prototype.ngOnInit = function () {
        var _this = this;
        var inputValues$ = this._valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])(function (value) {
            _this._inputValueBackup = value;
            if (_this.editable) {
                _this._onChange(value);
            }
        }));
        var results$ = inputValues$.pipe(this.ngbTypeahead);
        var processedResults$ = results$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])(function () {
            if (!_this.editable) {
                _this._onChange(undefined);
            }
        }));
        var userInput$ = this._resubscribeTypeahead.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(function () { return processedResults$; }));
        this._subscription = this._subscribeToUserInput(userInput$);
    };
    NgbTypeahead.prototype.ngOnDestroy = function () {
        this._closePopup();
        this._unsubscribeFromUserInput();
        this._zoneSubscription.unsubscribe();
    };
    NgbTypeahead.prototype.registerOnChange = function (fn) { this._onChange = fn; };
    NgbTypeahead.prototype.registerOnTouched = function (fn) { this._onTouched = fn; };
    NgbTypeahead.prototype.writeValue = function (value) { this._writeInputValue(this._formatItemForInput(value)); };
    NgbTypeahead.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    NgbTypeahead.prototype.onDocumentClick = function (event) {
        if (event.target !== this._elementRef.nativeElement) {
            this.dismissPopup();
        }
    };
    /**
     * Dismisses typeahead popup window
     */
    /**
       * Dismisses typeahead popup window
       */
    NgbTypeahead.prototype.dismissPopup = /**
       * Dismisses typeahead popup window
       */
    function () {
        if (this.isPopupOpen()) {
            this._closePopup();
            this._writeInputValue(this._inputValueBackup);
        }
    };
    /**
     * Returns true if the typeahead popup window is displayed
     */
    /**
       * Returns true if the typeahead popup window is displayed
       */
    NgbTypeahead.prototype.isPopupOpen = /**
       * Returns true if the typeahead popup window is displayed
       */
    function () { return this._windowRef != null; };
    NgbTypeahead.prototype.handleBlur = function () {
        this._resubscribeTypeahead.next(null);
        this._onTouched();
    };
    NgbTypeahead.prototype.handleKeyDown = function (event) {
        if (!this.isPopupOpen()) {
            return;
        }
        if (Key[Object(_util_util__WEBPACK_IMPORTED_MODULE_6__["toString"])(event.which)]) {
            switch (event.which) {
                case Key.ArrowDown:
                    event.preventDefault();
                    this._windowRef.instance.next();
                    this._showHint();
                    break;
                case Key.ArrowUp:
                    event.preventDefault();
                    this._windowRef.instance.prev();
                    this._showHint();
                    break;
                case Key.Enter:
                case Key.Tab:
                    var result = this._windowRef.instance.getActive();
                    if (Object(_util_util__WEBPACK_IMPORTED_MODULE_6__["isDefined"])(result)) {
                        event.preventDefault();
                        event.stopPropagation();
                        this._selectResult(result);
                    }
                    this._closePopup();
                    break;
                case Key.Escape:
                    event.preventDefault();
                    this._resubscribeTypeahead.next(null);
                    this.dismissPopup();
                    break;
            }
        }
    };
    NgbTypeahead.prototype._openPopup = function () {
        var _this = this;
        if (!this.isPopupOpen()) {
            this._inputValueBackup = this._elementRef.nativeElement.value;
            this._windowRef = this._popupService.open();
            this._windowRef.instance.id = this.popupId;
            this._windowRef.instance.selectEvent.subscribe(function (result) { return _this._selectResultClosePopup(result); });
            this._windowRef.instance.activeChangeEvent.subscribe(function (activeId) { return _this.activeDescendant = activeId; });
            if (this.container === 'body') {
                window.document.querySelector(this.container).appendChild(this._windowRef.location.nativeElement);
            }
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
        this._resubscribeTypeahead.next(null);
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
        if (this.showHint && this._windowRef.instance.hasActive() && this._inputValueBackup != null) {
            var userInputLowerCase = this._inputValueBackup.toLowerCase();
            var formattedVal = this._formatItemForInput(this._windowRef.instance.getActive());
            if (userInputLowerCase === formattedVal.substr(0, this._inputValueBackup.length).toLowerCase()) {
                this._writeInputValue(this._inputValueBackup + formattedVal.substr(this._inputValueBackup.length));
                this._elementRef.nativeElement['setSelectionRange'].apply(this._elementRef.nativeElement, [this._inputValueBackup.length, formattedVal.length]);
            }
            else {
                this.writeValue(this._windowRef.instance.getActive());
            }
        }
    };
    NgbTypeahead.prototype._formatItemForInput = function (item) {
        return item && this.inputFormatter ? this.inputFormatter(item) : Object(_util_util__WEBPACK_IMPORTED_MODULE_6__["toString"])(item);
    };
    NgbTypeahead.prototype._writeInputValue = function (value) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'value', Object(_util_util__WEBPACK_IMPORTED_MODULE_6__["toString"])(value));
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
                _this._windowRef.instance.resetActive();
                // The observable stream we are subscribing to might have async steps
                // and if a component containing typeahead is using the OnPush strategy
                // the change detection turn wouldn't be invoked automatically.
                // The observable stream we are subscribing to might have async steps
                // and if a component containing typeahead is using the OnPush strategy
                // the change detection turn wouldn't be invoked automatically.
                _this._windowRef.changeDetectorRef.detectChanges();
                _this._showHint();
            }
            var count = results.length;
            _this._live.say(count === 0 ? 'No results available' : count + " result" + (count === 1 ? '' : 's') + " available");
        });
    };
    NgbTypeahead.prototype._unsubscribeFromUserInput = function () {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
        this._subscription = null;
    };
    NgbTypeahead.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'input[ngbTypeahead]',
                    exportAs: 'ngbTypeahead',
                    host: {
                        '(blur)': 'handleBlur()',
                        '[class.open]': 'isPopupOpen()',
                        '(document:click)': 'onDocumentClick($event)',
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
    NgbTypeahead.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], },
        { type: _typeahead_config__WEBPACK_IMPORTED_MODULE_8__["NgbTypeaheadConfig"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
        { type: _util_accessibility_live__WEBPACK_IMPORTED_MODULE_7__["Live"], },
    ]; };
    NgbTypeahead.propDecorators = {
        "container": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "editable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "focusFirst": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "inputFormatter": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "ngbTypeahead": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "resultFormatter": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "resultTemplate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "showHint": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "placement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "selectItem": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return NgbTypeahead;
}());

//# sourceMappingURL=typeahead.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/typeahead/typeahead.module.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/typeahead/typeahead.module.js ***!
  \*******************************************************************************/
/*! exports provided: NgbHighlight, NgbTypeaheadWindow, NgbTypeaheadConfig, NgbTypeahead, NgbTypeaheadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTypeaheadModule", function() { return NgbTypeaheadModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _highlight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./highlight */ "./node_modules/@ng-bootstrap/ng-bootstrap/typeahead/highlight.js");
/* harmony import */ var _typeahead_window__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./typeahead-window */ "./node_modules/@ng-bootstrap/ng-bootstrap/typeahead/typeahead-window.js");
/* harmony import */ var _typeahead__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./typeahead */ "./node_modules/@ng-bootstrap/ng-bootstrap/typeahead/typeahead.js");
/* harmony import */ var _typeahead_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./typeahead-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/typeahead/typeahead-config.js");
/* harmony import */ var _util_accessibility_live__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../util/accessibility/live */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/accessibility/live.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbHighlight", function() { return _highlight__WEBPACK_IMPORTED_MODULE_2__["NgbHighlight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbTypeaheadWindow", function() { return _typeahead_window__WEBPACK_IMPORTED_MODULE_3__["NgbTypeaheadWindow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbTypeaheadConfig", function() { return _typeahead_config__WEBPACK_IMPORTED_MODULE_5__["NgbTypeaheadConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbTypeahead", function() { return _typeahead__WEBPACK_IMPORTED_MODULE_4__["NgbTypeahead"]; });












var NgbTypeaheadModule = /** @class */ (function () {
    function NgbTypeaheadModule() {
    }
    NgbTypeaheadModule.forRoot = function () {
        return {
            ngModule: NgbTypeaheadModule,
            providers: [_util_accessibility_live__WEBPACK_IMPORTED_MODULE_6__["Live"], _typeahead_config__WEBPACK_IMPORTED_MODULE_5__["NgbTypeaheadConfig"], { provide: _util_accessibility_live__WEBPACK_IMPORTED_MODULE_6__["ARIA_LIVE_DELAY"], useValue: _util_accessibility_live__WEBPACK_IMPORTED_MODULE_6__["DEFAULT_ARIA_LIVE_DELAY"] }]
        };
    };
    NgbTypeaheadModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [_typeahead__WEBPACK_IMPORTED_MODULE_4__["NgbTypeahead"], _highlight__WEBPACK_IMPORTED_MODULE_2__["NgbHighlight"], _typeahead_window__WEBPACK_IMPORTED_MODULE_3__["NgbTypeaheadWindow"]],
                    exports: [_typeahead__WEBPACK_IMPORTED_MODULE_4__["NgbTypeahead"], _highlight__WEBPACK_IMPORTED_MODULE_2__["NgbHighlight"]],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                    entryComponents: [_typeahead_window__WEBPACK_IMPORTED_MODULE_3__["NgbTypeaheadWindow"]]
                },] },
    ];
    return NgbTypeaheadModule;
}());

//# sourceMappingURL=typeahead.module.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/util/accessibility/live.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/util/accessibility/live.js ***!
  \****************************************************************************/
/*! exports provided: ARIA_LIVE_DELAY, DEFAULT_ARIA_LIVE_DELAY, Live */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARIA_LIVE_DELAY", function() { return ARIA_LIVE_DELAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_ARIA_LIVE_DELAY", function() { return DEFAULT_ARIA_LIVE_DELAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live", function() { return Live; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");


var ARIA_LIVE_DELAY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('live announcer delay');
var DEFAULT_ARIA_LIVE_DELAY = 100;
function createLiveElement(document) {
    var element = document.createElement('div');
    element.setAttribute('aria-live', 'polite');
    element.setAttribute('aria-atomic', 'true');
    element.classList.add('sr-only');
    document.body.appendChild(element);
    return element;
}
var Live = /** @class */ (function () {
    function Live(document, _delay) {
        this._delay = _delay;
        this._element = createLiveElement(document);
    }
    Live.prototype.ngOnDestroy = function () { this._element.parentElement.removeChild(this._element); };
    Live.prototype.say = function (message) {
        var element = this._element;
        var delay = this._delay;
        element.textContent = '';
        var setText = function () { return element.textContent = message; };
        if (delay === null) {
            setText();
        }
        else {
            setTimeout(setText, delay);
        }
    };
    Live.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    Live.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] },] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [ARIA_LIVE_DELAY,] },] },
    ]; };
    return Live;
}());

//# sourceMappingURL=live.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/util/focus-trap.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/util/focus-trap.js ***!
  \********************************************************************/
/*! exports provided: NgbFocusTrap, NgbFocusTrapFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbFocusTrap", function() { return NgbFocusTrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbFocusTrapFactory", function() { return NgbFocusTrapFactory; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FOCUSABLE_ELEMENTS_SELECTOR = [
    'a[href]', 'button:not([disabled])', 'input:not([disabled]):not([type="hidden"])', 'select:not([disabled])',
    'textarea:not([disabled])', '[contenteditable]', '[tabindex]:not([tabindex="-1"])'
].join(', ');
var DIRECTION;
(function (DIRECTION) {
    DIRECTION[DIRECTION["BACKWARD"] = 0] = "BACKWARD";
    DIRECTION[DIRECTION["FORWARD"] = 1] = "FORWARD";
})(DIRECTION || (DIRECTION = {}));
/**
 * Class that enforce the browser focus to be trapped inside a DOM element.
 *
 * The implementation is rather simple, the class add a `focusin` listener on the document with capture phase.
 * Any focus event will then be caught, and therefore the class will only allow the one for elements contained inside
 * it's own element.
 *
 * In case the element is not contained, the class will determine which new element has to be focused based on the `tab`
 * navigation direction.
 *
 * Should not be used directly. Use only via {@link NgbFocusTrapFactory}
 */
var /**
 * Class that enforce the browser focus to be trapped inside a DOM element.
 *
 * The implementation is rather simple, the class add a `focusin` listener on the document with capture phase.
 * Any focus event will then be caught, and therefore the class will only allow the one for elements contained inside
 * it's own element.
 *
 * In case the element is not contained, the class will determine which new element has to be focused based on the `tab`
 * navigation direction.
 *
 * Should not be used directly. Use only via {@link NgbFocusTrapFactory}
 */
NgbFocusTrap = /** @class */ (function () {
    /**
     * @param _element The element around which focus will be trapped inside
     * @param autofocus Initially put the focus on specific element with a `ngbFocustrap` attribute. Will also remenber
     * and restore any previously focused element on destroy.
     * @param _document Document on which `focusin` and `keydown.TAB` events are listened
     * @param _ngZone The zone Angular is running in
     */
    function NgbFocusTrap(_element, autofocus, _document, _ngZone) {
        var _this = this;
        this._element = _element;
        this._document = _document;
        this._ngZone = _ngZone;
        this._direction = DIRECTION.FORWARD;
        this._previouslyFocused = null;
        this._endOfDocument = null;
        this._enforceFocus = this._enforceFocus.bind(this);
        this._detectDirection = this._detectDirection.bind(this);
        var eod = this._endOfDocument = this._document.createElement('i');
        eod.className = 'ngb-focustrap-eod';
        eod.tabIndex = 0;
        this._document.body.appendChild(eod);
        this._ngZone.runOutsideAngular(function () {
            _this._document.addEventListener('focusin', _this._enforceFocus, true);
            _this._document.addEventListener('keydown', _this._detectDirection);
            _this._removeDocumentListener = function () {
                _this._document.removeEventListener('focusin', _this._enforceFocus, true);
                _this._document.removeEventListener('keydown', _this._detectDirection);
            };
        });
        if (autofocus === true) {
            this._previouslyFocused = document.activeElement;
            this._focusInitial();
        }
    }
    Object.defineProperty(NgbFocusTrap.prototype, "focusableElement", {
        /**
         * Guess the next focusable element.
         * Computation is based on specific CSS selector and [tab] navigation direction
         */
        get: /**
           * Guess the next focusable element.
           * Computation is based on specific CSS selector and [tab] navigation direction
           */
        function () {
            var list = this._element.querySelectorAll(FOCUSABLE_ELEMENTS_SELECTOR);
            return this._direction === DIRECTION.BACKWARD ? list[list.length - 1] : list[0];
        },
        enumerable: true,
        configurable: true
    });
    /** Detect if incoming focus event should be prevented or not */
    /** Detect if incoming focus event should be prevented or not */
    NgbFocusTrap.prototype._enforceFocus = /** Detect if incoming focus event should be prevented or not */
    function (event) {
        var _this = this;
        var target = event.target;
        if (this._document !== target && this._element !== target && !this._element.contains(target)) {
            this._ngZone.run(function () {
                var element = _this.focusableElement;
                if (element) {
                    element.focus();
                    event.stopPropagation();
                }
            });
        }
    };
    /** Event handler detecting current `tab` navigation direction */
    /** Event handler detecting current `tab` navigation direction */
    NgbFocusTrap.prototype._detectDirection = /** Event handler detecting current `tab` navigation direction */
    function (event) {
        var shiftKey = event.shiftKey, key = event.key;
        if (key === 'Tab') {
            this._direction = shiftKey ? DIRECTION.BACKWARD : DIRECTION.FORWARD;
        }
    };
    /** Try to set focus on the first found element that has an ngbAutofocus attribute */
    /** Try to set focus on the first found element that has an ngbAutofocus attribute */
    NgbFocusTrap.prototype._focusInitial = /** Try to set focus on the first found element that has an ngbAutofocus attribute */
    function () {
        var element = this._element.querySelector('[ngbAutofocus]');
        if (element) {
            element.focus();
        }
    };
    /**
     * Destroys the focustrap by removing all event listeners set on document.
     *
     * Eventually put the focus back on the previously focused element at the time
     * focustrap has been initialized.
     */
    /**
       * Destroys the focustrap by removing all event listeners set on document.
       *
       * Eventually put the focus back on the previously focused element at the time
       * focustrap has been initialized.
       */
    NgbFocusTrap.prototype.destroy = /**
       * Destroys the focustrap by removing all event listeners set on document.
       *
       * Eventually put the focus back on the previously focused element at the time
       * focustrap has been initialized.
       */
    function () {
        this._removeDocumentListener();
        this._document.body.removeChild(this._endOfDocument);
        if (this._previouslyFocused) {
            this._previouslyFocused.focus();
        }
    };
    return NgbFocusTrap;
}());
/**
 * Class that enforce the browser focus to be trapped inside a DOM element.
 *
 * The implementation is rather simple, the class add a `focusin` listener on the document with capture phase.
 * Any focus event will then be caught, and therefore the class will only allow the one for elements contained inside
 * it's own element.
 *
 * In case the element is not contained, the class will determine which new element has to be focused based on the `tab`
 * navigation direction.
 *
 * Should not be used directly. Use only via {@link NgbFocusTrapFactory}
 */

/**
 * Factory service to easily create a `NgbFocusTrap` instance on an element
 */
var NgbFocusTrapFactory = /** @class */ (function () {
    function NgbFocusTrapFactory(_document, _ngZone) {
        this._document = _document;
        this._ngZone = _ngZone;
    }
    /**
     * Create an instance of {@link NgbFocusTrap} and return it
     * @param element HTMLElement to trap focus inside
     * @param autofocus Whether the focustrap should automatically move focus into the trapped element upon
     * initialization and return focus to the previous activeElement upon destruction.
     */
    /**
       * Create an instance of {@link NgbFocusTrap} and return it
       * @param element HTMLElement to trap focus inside
       * @param autofocus Whether the focustrap should automatically move focus into the trapped element upon
       * initialization and return focus to the previous activeElement upon destruction.
       */
    NgbFocusTrapFactory.prototype.create = /**
       * Create an instance of {@link NgbFocusTrap} and return it
       * @param element HTMLElement to trap focus inside
       * @param autofocus Whether the focustrap should automatically move focus into the trapped element upon
       * initialization and return focus to the previous activeElement upon destruction.
       */
    function (element, autofocus) {
        if (autofocus === void 0) { autofocus = false; }
        return new NgbFocusTrap(element, autofocus, this._document, this._ngZone);
    };
    NgbFocusTrapFactory.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
    ];
    /** @nocollapse */
    NgbFocusTrapFactory.ctorParameters = function () { return [
        { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"],] },] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], },
    ]; };
    return NgbFocusTrapFactory;
}());

//# sourceMappingURL=focus-trap.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/util/popup.js":
/*!***************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/util/popup.js ***!
  \***************************************************************/
/*! exports provided: ContentRef, PopupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentRef", function() { return ContentRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupService", function() { return PopupService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var ContentRef = /** @class */ (function () {
    function ContentRef(nodes, viewRef, componentRef) {
        this.nodes = nodes;
        this.viewRef = viewRef;
        this.componentRef = componentRef;
    }
    return ContentRef;
}());

var PopupService = /** @class */ (function () {
    function PopupService(_type, _injector, _viewContainerRef, _renderer, _componentFactoryResolver) {
        this._type = _type;
        this._injector = _injector;
        this._viewContainerRef = _viewContainerRef;
        this._renderer = _renderer;
        this._componentFactoryResolver = _componentFactoryResolver;
    }
    PopupService.prototype.open = function (content, context) {
        if (!this._windowRef) {
            this._contentRef = this._getContentRef(content, context);
            this._windowRef = this._viewContainerRef.createComponent(this._componentFactoryResolver.resolveComponentFactory(this._type), 0, this._injector, this._contentRef.nodes);
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
        else if (content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]) {
            var viewRef = this._viewContainerRef.createEmbeddedView(content, context);
            return new ContentRef([viewRef.rootNodes], viewRef);
        }
        else {
            return new ContentRef([[this._renderer.createText("" + content)]]);
        }
    };
    return PopupService;
}());

//# sourceMappingURL=popup.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/util/positioning.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/util/positioning.js ***!
  \*********************************************************************/
/*! exports provided: Positioning, positionElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Positioning", function() { return Positioning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "positionElements", function() { return positionElements; });
// previous version:
// https://github.com/angular-ui/bootstrap/blob/07c31d0731f7cb068a1932b8e01d2312b796b4ec/src/position/position.js
var 
// previous version:
// https://github.com/angular-ui/bootstrap/blob/07c31d0731f7cb068a1932b8e01d2312b796b4ec/src/position/position.js
Positioning = /** @class */ (function () {
    function Positioning() {
    }
    Positioning.prototype.getAllStyles = function (element) { return window.getComputedStyle(element); };
    Positioning.prototype.getStyle = function (element, prop) { return this.getAllStyles(element)[prop]; };
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
        if (round === void 0) { round = true; }
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
        if (round === void 0) { round = true; }
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
        var targetElStyles = this.getAllStyles(targetElement);
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
                targetElPosition.top =
                    hostElPosition.top - (targetElement.offsetHeight + parseFloat(targetElStyles.marginBottom));
                break;
            case 'bottom':
                targetElPosition.top = hostElPosition.top + hostElPosition.height;
                break;
            case 'left':
                targetElPosition.left =
                    hostElPosition.left - (targetElement.offsetWidth + parseFloat(targetElStyles.marginRight));
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
    // get the availble placements of the target element in the viewport dependeing on the host element
    // get the availble placements of the target element in the viewport dependeing on the host element
    Positioning.prototype.getAvailablePlacements = 
    // get the availble placements of the target element in the viewport dependeing on the host element
    function (hostElement, targetElement) {
        var availablePlacements = [];
        var hostElemClientRect = hostElement.getBoundingClientRect();
        var targetElemClientRect = targetElement.getBoundingClientRect();
        var html = document.documentElement;
        // left: check if target width can be placed between host left and viewport start and also height of target is
        // inside viewport
        if (targetElemClientRect.width < hostElemClientRect.left) {
            // check for left only
            if ((hostElemClientRect.top + hostElemClientRect.height / 2 - targetElement.offsetHeight / 2) > 0) {
                availablePlacements.splice(availablePlacements.length, 1, 'left');
            }
            // check for left-top and left-bottom
            this.setSecondaryPlacementForLeftRight(hostElemClientRect, targetElemClientRect, 'left', availablePlacements);
        }
        // top: target height is less than host top
        if (targetElemClientRect.height < hostElemClientRect.top) {
            availablePlacements.splice(availablePlacements.length, 1, 'top');
            this.setSecondaryPlacementForTopBottom(hostElemClientRect, targetElemClientRect, 'top', availablePlacements);
        }
        // right: check if target width can be placed between host right and viewport end and also height of target is
        // inside viewport
        if ((window.innerWidth || html.clientWidth) - hostElemClientRect.right > targetElemClientRect.width) {
            // check for right only
            if ((hostElemClientRect.top + hostElemClientRect.height / 2 - targetElement.offsetHeight / 2) > 0) {
                availablePlacements.splice(availablePlacements.length, 1, 'right');
            }
            // check for right-top and right-bottom
            this.setSecondaryPlacementForLeftRight(hostElemClientRect, targetElemClientRect, 'right', availablePlacements);
        }
        // bottom: check if there is enough space between host bottom and viewport end for target height
        if ((window.innerHeight || html.clientHeight) - hostElemClientRect.bottom > targetElemClientRect.height) {
            availablePlacements.splice(availablePlacements.length, 1, 'bottom');
            this.setSecondaryPlacementForTopBottom(hostElemClientRect, targetElemClientRect, 'bottom', availablePlacements);
        }
        return availablePlacements;
    };
    /**
     * check if secondary placement for left and right are available i.e. left-top, left-bottom, right-top, right-bottom
     * primaryplacement: left|right
     * availablePlacementArr: array in which available placemets to be set
     */
    /**
       * check if secondary placement for left and right are available i.e. left-top, left-bottom, right-top, right-bottom
       * primaryplacement: left|right
       * availablePlacementArr: array in which available placemets to be set
       */
    Positioning.prototype.setSecondaryPlacementForLeftRight = /**
       * check if secondary placement for left and right are available i.e. left-top, left-bottom, right-top, right-bottom
       * primaryplacement: left|right
       * availablePlacementArr: array in which available placemets to be set
       */
    function (hostElemClientRect, targetElemClientRect, primaryPlacement, availablePlacementArr) {
        var html = document.documentElement;
        // check for left-bottom
        if (targetElemClientRect.height <= hostElemClientRect.bottom) {
            availablePlacementArr.splice(availablePlacementArr.length, 1, primaryPlacement + '-bottom');
        }
        if ((window.innerHeight || html.clientHeight) - hostElemClientRect.top >= targetElemClientRect.height) {
            availablePlacementArr.splice(availablePlacementArr.length, 1, primaryPlacement + '-top');
        }
    };
    /**
     * check if secondary placement for top and bottom are available i.e. top-left, top-right, bottom-left, bottom-right
     * primaryplacement: top|bottom
     * availablePlacementArr: array in which available placemets to be set
     */
    /**
       * check if secondary placement for top and bottom are available i.e. top-left, top-right, bottom-left, bottom-right
       * primaryplacement: top|bottom
       * availablePlacementArr: array in which available placemets to be set
       */
    Positioning.prototype.setSecondaryPlacementForTopBottom = /**
       * check if secondary placement for top and bottom are available i.e. top-left, top-right, bottom-left, bottom-right
       * primaryplacement: top|bottom
       * availablePlacementArr: array in which available placemets to be set
       */
    function (hostElemClientRect, targetElemClientRect, primaryPlacement, availablePlacementArr) {
        var html = document.documentElement;
        // check for left-bottom
        if ((window.innerWidth || html.clientWidth) - hostElemClientRect.left >= targetElemClientRect.width) {
            availablePlacementArr.splice(availablePlacementArr.length, 1, primaryPlacement + '-left');
        }
        if (targetElemClientRect.width <= hostElemClientRect.right) {
            availablePlacementArr.splice(availablePlacementArr.length, 1, primaryPlacement + '-right');
        }
    };
    return Positioning;
}());
// previous version:
// https://github.com/angular-ui/bootstrap/blob/07c31d0731f7cb068a1932b8e01d2312b796b4ec/src/position/position.js

var positionService = new Positioning();
/*
 * Accept the placement array and applies the appropriate placement dependent on the viewport.
 * Returns the applied placement.
 * In case of auto placement, placements are selected in order 'top', 'bottom', 'left', 'right'.
 * */
function positionElements(hostElement, targetElement, placement, appendToBody) {
    var placementVals = Array.isArray(placement) ? placement : [placement];
    // replace auto placement with other placements
    var hasAuto = placementVals.findIndex(function (val) { return val === 'auto'; });
    if (hasAuto >= 0) {
        ['top', 'right', 'bottom', 'left'].forEach(function (obj) {
            if (placementVals.find(function (val) { return val.search('^' + obj + '|^' + obj + '-') !== -1; }) == null) {
                placementVals.splice(hasAuto++, 1, obj);
            }
        });
    }
    // coordinates where to position
    var topVal = 0, leftVal = 0;
    var appliedPlacement;
    // get available placements
    var availablePlacements = positionService.getAvailablePlacements(hostElement, targetElement);
    var _loop_1 = function (item, index) {
        // check if passed placement is present in the available placement or otherwise apply the last placement in the
        // passed placement list
        if ((availablePlacements.find(function (val) { return val === item; }) != null) || (placementVals.length === index + 1)) {
            appliedPlacement = item;
            var pos = positionService.positionElements(hostElement, targetElement, item, appendToBody);
            topVal = pos.top;
            leftVal = pos.left;
            return "break";
        }
    };
    // iterate over all the passed placements
    for (var _i = 0, _a = toItemIndexes(placementVals); _i < _a.length; _i++) {
        var _b = _a[_i], item = _b.item, index = _b.index;
        var state_1 = _loop_1(item, index);
        if (state_1 === "break")
            break;
    }
    targetElement.style.top = topVal + "px";
    targetElement.style.left = leftVal + "px";
    return appliedPlacement;
}
// function to get index and item of an array
function toItemIndexes(a) {
    return a.map(function (item, index) { return ({ item: item, index: index }); });
}
//# sourceMappingURL=positioning.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/util/triggers.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/util/triggers.js ***!
  \******************************************************************/
/*! exports provided: Trigger, parseTriggers, listenToTriggers, ɵ0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Trigger", function() { return Trigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseTriggers", function() { return parseTriggers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listenToTriggers", function() { return listenToTriggers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
var Trigger = /** @class */ (function () {
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
    if (aliases === void 0) { aliases = DEFAULT_ALIASES; }
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
var ɵ0 = noopFn;
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

//# sourceMappingURL=triggers.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/util/util.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/util/util.js ***!
  \**************************************************************/
/*! exports provided: toInteger, toString, getValueInRange, isString, isNumber, isInteger, isDefined, padNumber, regExpEscape */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toInteger", function() { return toInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toString", function() { return toString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValueInRange", function() { return getValueInRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInteger", function() { return isInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDefined", function() { return isDefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "padNumber", function() { return padNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regExpEscape", function() { return regExpEscape; });
function toInteger(value) {
    return parseInt("" + value, 10);
}
function toString(value) {
    return (value !== undefined && value !== null) ? "" + value : '';
}
function getValueInRange(value, max, min) {
    if (min === void 0) { min = 0; }
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
//# sourceMappingURL=util.js.map

/***/ })

}]);
//# sourceMappingURL=console-console-module~ng-bootstrap-ng-bootstrap-module.js.map