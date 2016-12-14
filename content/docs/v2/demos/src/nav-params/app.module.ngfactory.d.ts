/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './app.module';
import * as import82 from '@angular/core/src/linker/view';
import * as import84 from '@angular/core/src/linker/view_utils';
import * as import88 from '@angular/core/src/linker/component_factory';
import * as import89 from '../components/nav/nav';
import * as import90 from '../components/nav/nav.ngfactory';
import * as import95 from '../components/toolbar/toolbar.ngfactory';
import * as import96 from '../components/navbar/navbar';
import * as import97 from '../components/navbar/navbar.ngfactory';
import * as import98 from '../components/toolbar/toolbar-title';
import * as import99 from '../components/toolbar/toolbar-title.ngfactory';
import * as import100 from '../components/content/content';
import * as import101 from '../components/content/content.ngfactory';
import * as import102 from '../components/list/list.ngfactory';
import * as import103 from '../components/item/item';
import * as import104 from '../components/item/item.ngfactory';
import * as import105 from '../components/list/list-header.ngfactory';
import * as import106 from '@angular/core/src/linker/query_list';
import * as import107 from '../components/label/label.ngfactory';
import * as import108 from '../components/select/select';
import * as import109 from '../components/select/select.ngfactory';
import * as import110 from '../node_modules/@angular/forms/src/directives/ng_model.ngfactory';
import * as import111 from '../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import112 from '../components/option/option.ngfactory';
import * as import113 from '../components/button/button';
import * as import114 from '../components/button/button.ngfactory';
export declare const AppModuleNgFactory: import0.NgModuleFactory<import1.AppModule>;
export declare class Wrapper_ApiDemoApp {
    _eventHandler: Function;
    context: import1.ApiDemoApp;
    _changed: boolean;
    constructor();
    ngOnDetach(view: import82.AppView<any>, componentView: import82.AppView<any>, el: any): void;
    ngOnDestroy(): void;
    ngDoCheck(view: import82.AppView<any>, el: any, throwOnChange: boolean): boolean;
    checkHost(view: import82.AppView<any>, componentView: import82.AppView<any>, el: any, throwOnChange: boolean): void;
    handleEvent(eventName: string, $event: any): boolean;
    subscribe(view: import82.AppView<any>, _eventHandler: any): void;
}
export declare class Wrapper_ApiDemoPage {
    _eventHandler: Function;
    context: import1.ApiDemoPage;
    _changed: boolean;
    constructor(p0: any);
    ngOnDetach(view: import82.AppView<any>, componentView: import82.AppView<any>, el: any): void;
    ngOnDestroy(): void;
    ngDoCheck(view: import82.AppView<any>, el: any, throwOnChange: boolean): boolean;
    checkHost(view: import82.AppView<any>, componentView: import82.AppView<any>, el: any, throwOnChange: boolean): void;
    handleEvent(eventName: string, $event: any): boolean;
    subscribe(view: import82.AppView<any>, _eventHandler: any): void;
}
export declare class Wrapper_PushPage {
    _eventHandler: Function;
    context: import1.PushPage;
    _changed: boolean;
    constructor(p0: any);
    ngOnDetach(view: import82.AppView<any>, componentView: import82.AppView<any>, el: any): void;
    ngOnDestroy(): void;
    ngDoCheck(view: import82.AppView<any>, el: any, throwOnChange: boolean): boolean;
    checkHost(view: import82.AppView<any>, componentView: import82.AppView<any>, el: any, throwOnChange: boolean): void;
    handleEvent(eventName: string, $event: any): boolean;
    subscribe(view: import82.AppView<any>, _eventHandler: any): void;
}
export declare const ApiDemoAppNgFactory: import88.ComponentFactory<import1.ApiDemoApp>;
export declare class View_ApiDemoApp0 extends import82.AppView<import1.ApiDemoApp> {
    _el_0: any;
    compView_0: import82.AppView<import89.Nav>;
    _Nav_0_3: import90.Wrapper_Nav;
    constructor(viewUtils: import84.ViewUtils, parentView: import82.AppView<any>, parentIndex: number, parentElement: any);
    createInternal(rootSelector: string): import88.ComponentRef<any>;
    injectorGetInternal(token: any, requestNodeIndex: number, notFoundResult: any): any;
    detectChangesInternal(throwOnChange: boolean): void;
    destroyInternal(): void;
}
export declare const ApiDemoPageNgFactory: import88.ComponentFactory<import1.ApiDemoPage>;
export declare class View_ApiDemoPage0 extends import82.AppView<import1.ApiDemoPage> {
    _el_0: any;
    _Header_0_3: import95.Wrapper_Header;
    _text_1: any;
    _el_2: any;
    compView_2: import82.AppView<import96.Navbar>;
    _Navbar_2_3: import97.Wrapper_Navbar;
    _text_3: any;
    _el_4: any;
    compView_4: import82.AppView<import98.ToolbarTitle>;
    _ToolbarTitle_4_3: import99.Wrapper_ToolbarTitle;
    _text_5: any;
    _text_6: any;
    _text_7: any;
    _text_8: any;
    _el_9: any;
    compView_9: import82.AppView<import100.Content>;
    _Content_9_3: import101.Wrapper_Content;
    _text_10: any;
    _el_11: any;
    _List_11_3: import102.Wrapper_List;
    _text_12: any;
    _el_13: any;
    compView_13: import82.AppView<import103.Item>;
    _Item_13_3: import104.Wrapper_Item;
    _ListHeader_13_4: import105.Wrapper_ListHeader;
    _query_Label_13_0: import106.QueryList<any>;
    _query_Button_13_1: import106.QueryList<any>;
    _query_Icon_13_2: import106.QueryList<any>;
    _text_14: any;
    _text_15: any;
    _el_16: any;
    compView_16: import82.AppView<import103.Item>;
    _Item_16_3: import104.Wrapper_Item;
    _ItemContent_16_4: import104.Wrapper_ItemContent;
    _query_Label_16_0: import106.QueryList<any>;
    _query_Button_16_1: import106.QueryList<any>;
    _query_Icon_16_2: import106.QueryList<any>;
    _text_17: any;
    _el_18: any;
    _Label_18_3: import107.Wrapper_Label;
    _text_19: any;
    _text_20: any;
    _el_21: any;
    compView_21: import82.AppView<import108.Select>;
    _Select_21_3: import109.Wrapper_Select;
    _NG_VALUE_ACCESSOR_21_4: any[];
    _NgModel_21_5: import110.Wrapper_NgModel;
    _NgControl_21_6: any;
    _NgControlStatus_21_7: import111.Wrapper_NgControlStatus;
    _query_Option_21_0: import106.QueryList<any>;
    _text_22: any;
    _el_23: any;
    _Option_23_3: import112.Wrapper_Option;
    _text_24: any;
    _text_25: any;
    _el_26: any;
    _Option_26_3: import112.Wrapper_Option;
    _text_27: any;
    _text_28: any;
    _el_29: any;
    _Option_29_3: import112.Wrapper_Option;
    _text_30: any;
    _text_31: any;
    _el_32: any;
    _Option_32_3: import112.Wrapper_Option;
    _text_33: any;
    _text_34: any;
    _text_35: any;
    _text_36: any;
    _text_37: any;
    _el_38: any;
    _text_39: any;
    _el_40: any;
    compView_40: import82.AppView<import113.Button>;
    _Button_40_3: import114.Wrapper_Button;
    _text_41: any;
    _text_42: any;
    _text_43: any;
    _text_44: any;
    constructor(viewUtils: import84.ViewUtils, parentView: import82.AppView<any>, parentIndex: number, parentElement: any);
    createInternal(rootSelector: string): import88.ComponentRef<any>;
    injectorGetInternal(token: any, requestNodeIndex: number, notFoundResult: any): any;
    detectChangesInternal(throwOnChange: boolean): void;
    destroyInternal(): void;
    visitProjectableNodesInternal(nodeIndex: number, ngContentIndex: number, cb: any, ctx: any): void;
    handleEvent_21(eventName: string, $event: any): boolean;
    handleEvent_40(eventName: string, $event: any): boolean;
}
export declare const PushPageNgFactory: import88.ComponentFactory<import1.PushPage>;
export declare class View_PushPage0 extends import82.AppView<import1.PushPage> {
    _el_0: any;
    _Header_0_3: import95.Wrapper_Header;
    _text_1: any;
    _el_2: any;
    compView_2: import82.AppView<import96.Navbar>;
    _Navbar_2_3: import97.Wrapper_Navbar;
    _text_3: any;
    _el_4: any;
    compView_4: import82.AppView<import98.ToolbarTitle>;
    _ToolbarTitle_4_3: import99.Wrapper_ToolbarTitle;
    _text_5: any;
    _text_6: any;
    _text_7: any;
    _text_8: any;
    _el_9: any;
    compView_9: import82.AppView<import100.Content>;
    _Content_9_3: import101.Wrapper_Content;
    _text_10: any;
    _el_11: any;
    _text_12: any;
    _el_13: any;
    _text_14: any;
    _text_15: any;
    _el_16: any;
    _text_17: any;
    _text_18: any;
    _text_19: any;
    _text_20: any;
    _expr_28: any;
    constructor(viewUtils: import84.ViewUtils, parentView: import82.AppView<any>, parentIndex: number, parentElement: any);
    createInternal(rootSelector: string): import88.ComponentRef<any>;
    injectorGetInternal(token: any, requestNodeIndex: number, notFoundResult: any): any;
    detectChangesInternal(throwOnChange: boolean): void;
    destroyInternal(): void;
    visitProjectableNodesInternal(nodeIndex: number, ngContentIndex: number, cb: any, ctx: any): void;
}
