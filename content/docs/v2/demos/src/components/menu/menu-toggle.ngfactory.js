/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
import * as import0 from './menu-toggle';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import3 from '@angular/core/src/linker/view_utils';
export var Wrapper_MenuToggle = (function () {
    function Wrapper_MenuToggle(p0, p1, p2, p3) {
        this._changed = false;
        this.context = new import0.MenuToggle(p0, p1, p2, p3);
        this._expr_0 = import1.UNINITIALIZED;
        this._expr_1 = import1.UNINITIALIZED;
    }
    Wrapper_MenuToggle.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_MenuToggle.prototype.ngOnDestroy = function () {
    };
    Wrapper_MenuToggle.prototype.check_menuToggle = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.menuToggle = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_MenuToggle.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_MenuToggle.prototype.checkHost = function (view, componentView, el, throwOnChange) {
        var currVal_1 = this.context.isHidden;
        if (import3.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            view.renderer.setElementProperty(el, 'hidden', currVal_1);
            this._expr_1 = currVal_1;
        }
    };
    Wrapper_MenuToggle.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.toggle() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    Wrapper_MenuToggle.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_MenuToggle;
}());
//# sourceMappingURL=menu-toggle.ngfactory.js.map