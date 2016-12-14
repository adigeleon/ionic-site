/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './app-root';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/change_detection';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@angular/core/src/linker/component_factory_resolver';
import * as import9 from '@angular/core/src/linker/element_ref';
import * as import10 from '../../config/config';
import * as import11 from '../../platform/platform';
import * as import12 from './app';
import * as import13 from '@angular/core/src/linker/query_list';
import * as import14 from '@angular/core/src/linker/view_container';
import * as import15 from '../nav/overlay-portal.ngfactory';
import * as import16 from '../../util/click-block.ngfactory';
import * as import17 from '../../util/keyboard';
import * as import18 from '@angular/core/src/zone/ng_zone';
import * as import19 from '../../gestures/gesture-controller';
import * as import20 from '../../transitions/transition-controller';
import * as import21 from '../../navigation/deep-linker';
import * as import22 from '../../util/dom-controller';
import * as import23 from '../nav/overlay-portal';
import * as import24 from '../../util/click-block';
export class Wrapper_IonicApp {
  /*private*/ _eventHandler:Function;
  context:import0.IonicApp;
  /*private*/ _changed:boolean;
  constructor(p0:any,p1:any,p2:any,p3:any,p4:any,p5:any,p6:any) {
    this._changed = false;
    this.context = new import0.IonicApp(p0,p1,p2,p3,p4,p5,p6);
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  ngDoCheck(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
    return changed;
  }
  checkHost(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import1.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_IonicApp_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_IonicApp_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.IonicApp>;
  _IonicApp_0_3:Wrapper_IonicApp;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_IonicApp_Host0,renderType_IonicApp_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'ion-app',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_IonicApp0(this.viewUtils,this,0,this._el_0);
    this._IonicApp_0_3 = new Wrapper_IonicApp(this.injectorGet(import0.AppRootToken,this.parentIndex),this.injectorGet(import8.ComponentFactoryResolver,this.parentIndex),new import9.ElementRef(this._el_0),this.renderer,this.injectorGet(import10.Config,this.parentIndex),this.injectorGet(import11.Platform,this.parentIndex),this.injectorGet(import12.App,this.parentIndex));
    this.compView_0.create(this._IonicApp_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._IonicApp_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.IonicApp) && (0 === requestNodeIndex))) { return this._IonicApp_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._IonicApp_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const IonicAppNgFactory:import7.ComponentFactory<import0.IonicApp> = new import7.ComponentFactory<import0.IonicApp>('ion-app',View_IonicApp_Host0,import0.IonicApp);
const styles_IonicApp:any[] = ([] as any[]);
var renderType_IonicApp:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,styles_IonicApp,{});
export class View_IonicApp0 extends import1.AppView<import0.IonicApp> {
  _viewQuery_viewport_0:import13.QueryList<any>;
  _viewQuery_modalPortal_1:import13.QueryList<any>;
  _viewQuery_overlayPortal_2:import13.QueryList<any>;
  _viewQuery_loadingPortal_3:import13.QueryList<any>;
  _viewQuery_toastPortal_4:import13.QueryList<any>;
  _el_0:any;
  /*private*/ _vc_0:import14.ViewContainer;
  _el_1:any;
  /*private*/ _vc_1:import14.ViewContainer;
  _OverlayPortal_1_5:import15.Wrapper_OverlayPortal;
  _el_2:any;
  /*private*/ _vc_2:import14.ViewContainer;
  _OverlayPortal_2_5:import15.Wrapper_OverlayPortal;
  _el_3:any;
  /*private*/ _vc_3:import14.ViewContainer;
  _OverlayPortal_3_5:import15.Wrapper_OverlayPortal;
  _el_4:any;
  /*private*/ _vc_4:import14.ViewContainer;
  _OverlayPortal_4_5:import15.Wrapper_OverlayPortal;
  _el_5:any;
  _ClickBlock_5_3:import16.Wrapper_ClickBlock;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_IonicApp0,renderType_IonicApp,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._viewQuery_viewport_0 = new import13.QueryList<any>();
    this._viewQuery_modalPortal_1 = new import13.QueryList<any>();
    this._viewQuery_overlayPortal_2 = new import13.QueryList<any>();
    this._viewQuery_loadingPortal_3 = new import13.QueryList<any>();
    this._viewQuery_toastPortal_4 = new import13.QueryList<any>();
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'app-viewport',''),(null as any));
    this._vc_0 = new import14.ViewContainer(0,(null as any),this,this._el_0);
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'overlay-portal',''),(null as any));
    this._vc_1 = new import14.ViewContainer(1,(null as any),this,this._el_1);
    this._OverlayPortal_1_5 = new import15.Wrapper_OverlayPortal(this.parentView.injectorGet(import12.App,this.parentIndex),this.parentView.injectorGet(import10.Config,this.parentIndex),this.parentView.injectorGet(import17.Keyboard,this.parentIndex),new import9.ElementRef(this._el_1),this.parentView.injectorGet(import18.NgZone,this.parentIndex),this.renderer,this.parentView.injectorGet(import8.ComponentFactoryResolver,this.parentIndex),this.parentView.injectorGet(import19.GestureController,this.parentIndex),this.parentView.injectorGet(import20.TransitionController,this.parentIndex),this.parentView.injectorGet(import21.DeepLinker,this.parentIndex,(null as any)),this._vc_1.vcRef,this.parentView.injectorGet(import22.DomController,this.parentIndex));
    this._el_2 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'overlay-portal',''),(null as any));
    this._vc_2 = new import14.ViewContainer(2,(null as any),this,this._el_2);
    this._OverlayPortal_2_5 = new import15.Wrapper_OverlayPortal(this.parentView.injectorGet(import12.App,this.parentIndex),this.parentView.injectorGet(import10.Config,this.parentIndex),this.parentView.injectorGet(import17.Keyboard,this.parentIndex),new import9.ElementRef(this._el_2),this.parentView.injectorGet(import18.NgZone,this.parentIndex),this.renderer,this.parentView.injectorGet(import8.ComponentFactoryResolver,this.parentIndex),this.parentView.injectorGet(import19.GestureController,this.parentIndex),this.parentView.injectorGet(import20.TransitionController,this.parentIndex),this.parentView.injectorGet(import21.DeepLinker,this.parentIndex,(null as any)),this._vc_2.vcRef,this.parentView.injectorGet(import22.DomController,this.parentIndex));
    this._el_3 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray4(4,'class','loading-portal','overlay-portal',''),(null as any));
    this._vc_3 = new import14.ViewContainer(3,(null as any),this,this._el_3);
    this._OverlayPortal_3_5 = new import15.Wrapper_OverlayPortal(this.parentView.injectorGet(import12.App,this.parentIndex),this.parentView.injectorGet(import10.Config,this.parentIndex),this.parentView.injectorGet(import17.Keyboard,this.parentIndex),new import9.ElementRef(this._el_3),this.parentView.injectorGet(import18.NgZone,this.parentIndex),this.renderer,this.parentView.injectorGet(import8.ComponentFactoryResolver,this.parentIndex),this.parentView.injectorGet(import19.GestureController,this.parentIndex),this.parentView.injectorGet(import20.TransitionController,this.parentIndex),this.parentView.injectorGet(import21.DeepLinker,this.parentIndex,(null as any)),this._vc_3.vcRef,this.parentView.injectorGet(import22.DomController,this.parentIndex));
    this._el_4 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'class','toast-portal'),(null as any));
    this._vc_4 = new import14.ViewContainer(4,(null as any),this,this._el_4);
    this._OverlayPortal_4_5 = new import15.Wrapper_OverlayPortal(this.parentView.injectorGet(import12.App,this.parentIndex),this.parentView.injectorGet(import10.Config,this.parentIndex),this.parentView.injectorGet(import17.Keyboard,this.parentIndex),new import9.ElementRef(this._el_4),this.parentView.injectorGet(import18.NgZone,this.parentIndex),this.renderer,this.parentView.injectorGet(import8.ComponentFactoryResolver,this.parentIndex),this.parentView.injectorGet(import19.GestureController,this.parentIndex),this.parentView.injectorGet(import20.TransitionController,this.parentIndex),this.parentView.injectorGet(import21.DeepLinker,this.parentIndex,(null as any)),this._vc_4.vcRef,this.parentView.injectorGet(import22.DomController,this.parentIndex));
    this._el_5 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'class','click-block'),(null as any));
    this._ClickBlock_5_3 = new import16.Wrapper_ClickBlock(this.parentView.injectorGet(import12.App,this.parentIndex),this.parentView.injectorGet(import10.Config,this.parentIndex),new import9.ElementRef(this._el_5),this.renderer);
    this._viewQuery_viewport_0.reset([this._vc_0.vcRef]);
    this.context._viewport = this._viewQuery_viewport_0.first;
    this._viewQuery_modalPortal_1.reset([this._OverlayPortal_1_5.context]);
    this.context._modalPortal = this._viewQuery_modalPortal_1.first;
    this._viewQuery_overlayPortal_2.reset([this._OverlayPortal_2_5.context]);
    this.context._overlayPortal = this._viewQuery_overlayPortal_2.first;
    this._viewQuery_loadingPortal_3.reset([this._OverlayPortal_3_5.context]);
    this.context._loadingPortal = this._viewQuery_loadingPortal_3.first;
    this._viewQuery_toastPortal_4.reset([this._OverlayPortal_4_5.context]);
    this.context._toastPortal = this._viewQuery_toastPortal_4.first;
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._el_1,
      this._el_2,
      this._el_3,
      this._el_4,
      this._el_5
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import23.OverlayPortal) && (1 === requestNodeIndex))) { return this._OverlayPortal_1_5.context; }
    if (((token === import23.OverlayPortal) && (2 === requestNodeIndex))) { return this._OverlayPortal_2_5.context; }
    if (((token === import23.OverlayPortal) && (3 === requestNodeIndex))) { return this._OverlayPortal_3_5.context; }
    if (((token === import23.OverlayPortal) && (4 === requestNodeIndex))) { return this._OverlayPortal_4_5.context; }
    if (((token === import24.ClickBlock) && (5 === requestNodeIndex))) { return this._ClickBlock_5_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_1_0_0:any = '';
    this._OverlayPortal_1_5.check__overlayPortal(currVal_1_0_0,throwOnChange,false);
    this._OverlayPortal_1_5.ngDoCheck(this,this._el_1,throwOnChange);
    const currVal_2_0_0:any = '';
    this._OverlayPortal_2_5.check__overlayPortal(currVal_2_0_0,throwOnChange,false);
    this._OverlayPortal_2_5.ngDoCheck(this,this._el_2,throwOnChange);
    const currVal_3_0_0:any = '';
    this._OverlayPortal_3_5.check__overlayPortal(currVal_3_0_0,throwOnChange,false);
    this._OverlayPortal_3_5.ngDoCheck(this,this._el_3,throwOnChange);
    const currVal_4_0_0:any = 10000;
    this._OverlayPortal_4_5.check__overlayPortal(currVal_4_0_0,throwOnChange,false);
    this._OverlayPortal_4_5.ngDoCheck(this,this._el_4,throwOnChange);
    this._ClickBlock_5_3.ngDoCheck(this,this._el_5,throwOnChange);
    this._vc_0.detectChangesInNestedViews(throwOnChange);
    this._vc_1.detectChangesInNestedViews(throwOnChange);
    this._vc_2.detectChangesInNestedViews(throwOnChange);
    this._vc_3.detectChangesInNestedViews(throwOnChange);
    this._vc_4.detectChangesInNestedViews(throwOnChange);
  }
  destroyInternal():void {
    this._vc_0.destroyNestedViews();
    this._vc_1.destroyNestedViews();
    this._vc_2.destroyNestedViews();
    this._vc_3.destroyNestedViews();
    this._vc_4.destroyNestedViews();
  }
}