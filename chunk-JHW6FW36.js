import{a as Je}from"./chunk-MGG2YPP2.js";import{a as We,e as Xe}from"./chunk-AUF4LF4Y.js";import{a as et,b as tt}from"./chunk-YZR7MD3I.js";import{a as nt,b as it}from"./chunk-TWWSUF4P.js";import{$a as Oe,Ab as F,Ae as Ge,Bd as Ae,Be as Qe,Cb as L,Dd as Z,Fb as V,Gc as G,Gd as He,H as fe,Hb as l,Ib as T,Id as je,J as h,Jb as z,Jd as Fe,Ka as ze,Kd as Le,Le as Ze,Ma as o,Md as Ve,Nc as Me,O as be,Ob as te,Pa as Se,Pb as ne,Qb as ie,Ra as k,Sa as b,Sd as $e,Ub as S,Vb as v,Vh as Ke,W as ge,Wb as E,Xb as I,Y as X,Za as x,_a as y,ba as he,bd as Pe,ca as J,da as C,db as a,dc as Re,dd as Q,ec as re,ga as d,hb as Ee,ib as s,id as we,k as ue,kb as ee,l as M,la as ve,ma as P,md as N,na as w,nd as Be,oc as $,ra as Ce,rb as p,rg as qe,sa as xe,sb as Ie,sg as Ye,tc as U,tg as q,ua as ye,ub as A,uc as _,ud as ke,ug as Y,va as Te,vb as H,vc as De,wb as c,xb as m,y as _e,yb as Ne,ye as Ue,za as B,zb as j}from"./chunk-SCDKUK6D.js";function lt(e){if(e.type==="characterData"&&e.target instanceof Comment)return!0;if(e.type==="childList"){for(let n=0;n<e.addedNodes.length;n++)if(!(e.addedNodes[n]instanceof Comment))return!1;for(let n=0;n<e.removedNodes.length;n++)if(!(e.removedNodes[n]instanceof Comment))return!1;return!0}return!1}var ae=(()=>{class e{create(t){return typeof MutationObserver>"u"?null:new MutationObserver(t)}static \u0275fac=function(i){return new(i||e)};static \u0275prov=J({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),rt=(()=>{class e{_mutationObserverFactory=d(ae);_observedElements=new Map;_ngZone=d(Te);constructor(){}ngOnDestroy(){this._observedElements.forEach((t,i)=>this._cleanupObserver(i))}observe(t){let i=Qe(t);return new ue(r=>{let f=this._observeElement(i).pipe(_e(g=>g.filter(D=>!lt(D))),h(g=>!!g.length)).subscribe(g=>{this._ngZone.run(()=>{r.next(g)})});return()=>{f.unsubscribe(),this._unobserveElement(i)}})}_observeElement(t){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(t))this._observedElements.get(t).count++;else{let i=new M,r=this._mutationObserverFactory.create(u=>i.next(u));r&&r.observe(t,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(t,{observer:r,stream:i,count:1})}return this._observedElements.get(t).stream})}_unobserveElement(t){this._observedElements.has(t)&&(this._observedElements.get(t).count--,this._observedElements.get(t).count||this._cleanupObserver(t))}_cleanupObserver(t){if(this._observedElements.has(t)){let{observer:i,stream:r}=this._observedElements.get(t);i&&i.disconnect(),r.complete(),this._observedElements.delete(t)}}static \u0275fac=function(i){return new(i||e)};static \u0275prov=J({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),le=(()=>{class e{_contentObserver=d(rt);_elementRef=d(B);event=new ye;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(t){this._debounce=Ge(t),this._subscribe()}_debounce;_currentSubscription=null;constructor(){}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let t=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?t.pipe(be(this.debounce)):t).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||e)};static \u0275dir=Oe({type:e,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",_],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return e})(),se=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=y({type:e});static \u0275inj=C({providers:[ae]})}return e})();var ce=["*"];function st(e,n){}function ct(e,n){if(e&1&&(c(0,"span",1),a(1,st,0,0,"ng-template",2),Ne(2,"nz-icon",3),m()),e&2){let t=l(),i=S(4);s("nzDropdownMenu",t.nzOverlay),o(),s("ngTemplateOutlet",i)}}function mt(e,n){}function dt(e,n){if(e&1&&a(0,mt,0,0,"ng-template",2),e&2){l();let t=S(4);s("ngTemplateOutlet",t)}}function pt(e,n){if(e&1&&(j(0),v(1),F()),e&2){let t=l(2);o(),I(" ",t.nzBreadCrumbComponent.nzSeparator," ")}}function ut(e,n){if(e&1&&(c(0,"nz-breadcrumb-separator"),a(1,pt,2,1,"ng-container",4),m()),e&2){let t=l();o(),s("nzStringTemplateOutlet",t.nzBreadCrumbComponent.nzSeparator)}}function _t(e,n){e&1&&(c(0,"span",5),z(1),m())}var ft=(e,n)=>n.url;function bt(e,n){if(e&1){let t=L();c(0,"nz-breadcrumb-item")(1,"a",0),V("click",function(r){let u=P(t).$implicit,f=l(2);return w(f.navigate(u.url,r))}),v(2),m()()}if(e&2){let t=n.$implicit;o(),Ee("href",t.url,ze),o(),E(t.label)}}function gt(e,n){if(e&1&&A(0,bt,3,2,"nz-breadcrumb-item",null,ft),e&2){let t=l();H(t.breadcrumbs)}}var ht=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275cmp=x({type:e,selectors:[["nz-breadcrumb-separator"]],hostAttrs:[1,"ant-breadcrumb-separator"],exportAs:["nzBreadcrumbSeparator"],ngContentSelectors:ce,decls:1,vars:0,template:function(i,r){i&1&&(T(),z(0))},encapsulation:2})}return e})(),K=class{},W=(()=>{class e{nzBreadCrumbComponent;nzOverlay;constructor(t){this.nzBreadCrumbComponent=t}static \u0275fac=function(i){return new(i||e)(b(K))};static \u0275cmp=x({type:e,selectors:[["nz-breadcrumb-item"]],inputs:{nzOverlay:"nzOverlay"},exportAs:["nzBreadcrumbItem"],ngContentSelectors:ce,decls:5,vars:2,consts:[["noMenuTpl",""],["nz-dropdown","",1,"ant-breadcrumb-overlay-link",3,"nzDropdownMenu"],[3,"ngTemplateOutlet"],["nzType","down"],[4,"nzStringTemplateOutlet"],[1,"ant-breadcrumb-link"]],template:function(i,r){i&1&&(T(),a(0,ct,3,2,"span",1)(1,dt,1,1,null,2)(2,ut,2,1,"nz-breadcrumb-separator")(3,_t,2,0,"ng-template",null,0,$)),i&2&&(p(r.nzOverlay?0:1),o(2),p(r.nzBreadCrumbComponent.nzSeparator?2:-1))},dependencies:[G,ht,Xe,We,Ye,qe,Y,q],encapsulation:2,changeDetection:0})}return e})(),me=(()=>{class e{injector;cdr;elementRef;renderer;directionality;nzAutoGenerate=!1;nzSeparator="/";nzRouteLabel="breadcrumb";nzRouteLabelFn=t=>t;nzRouteFn=t=>t;breadcrumbs=[];dir="ltr";destroy$=new M;constructor(t,i,r,u,f){this.injector=t,this.cdr=i,this.elementRef=r,this.renderer=u,this.directionality=f}ngOnInit(){this.nzAutoGenerate&&this.registerRouterChange(),this.directionality.change?.pipe(X(this.destroy$)).subscribe(t=>{this.dir=t,this.prepareComponentForRtl(),this.cdr.detectChanges()}),this.dir=this.directionality.value,this.prepareComponentForRtl()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}navigate(t,i){i.preventDefault(),this.injector.get(N).navigateByUrl(t)}registerRouterChange(){try{let t=this.injector.get(N),i=this.injector.get(we);t.events.pipe(h(r=>r instanceof Q),X(this.destroy$),ge(!0)).subscribe(()=>{this.breadcrumbs=this.getBreadcrumbs(i.root),this.cdr.markForCheck()})}catch{throw new Error(`${$e} You should import RouterModule if you want to use 'NzAutoGenerate'.`)}}getBreadcrumbs(t,i="",r=[]){let u=t.children;if(u.length===0)return r;for(let f of u)if(f.outlet===Pe){let g=f.snapshot.url.map(O=>O.path).filter(O=>O).join("/"),D=g?`${i}/${g}`:i,pe=this.nzRouteLabelFn(f.snapshot.data[this.nzRouteLabel]),at=this.nzRouteFn(D);if(g&&pe){let O={label:pe,params:f.snapshot.params,url:at};r.push(O)}return this.getBreadcrumbs(f,D,r)}return r}prepareComponentForRtl(){this.dir==="rtl"?this.renderer.addClass(this.elementRef.nativeElement,"ant-breadcrumb-rtl"):this.renderer.removeClass(this.elementRef.nativeElement,"ant-breadcrumb-rtl")}static \u0275fac=function(i){return new(i||e)(b(Ce),b(U),b(B),b(k),b(Ze))};static \u0275cmp=x({type:e,selectors:[["nz-breadcrumb"]],hostAttrs:[1,"ant-breadcrumb"],inputs:{nzAutoGenerate:[2,"nzAutoGenerate","nzAutoGenerate",_],nzSeparator:"nzSeparator",nzRouteLabel:"nzRouteLabel",nzRouteLabelFn:"nzRouteLabelFn",nzRouteFn:"nzRouteFn"},exportAs:["nzBreadcrumb"],features:[Re([{provide:K,useExisting:he(()=>e)}])],ngContentSelectors:ce,decls:2,vars:1,consts:[[3,"click"]],template:function(i,r){i&1&&(T(),z(0),a(1,gt,2,0)),i&2&&(o(),p(r.nzAutoGenerate&&r.breadcrumbs.length?1:-1))},dependencies:[W],encapsulation:2,changeDetection:0})}return e})(),ot=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=y({type:e});static \u0275inj=C({imports:[me,W]})}return e})();var vt=["conTpl"],Ct=["affix"],xt=["*"],yt=()=>({rows:3}),Tt=()=>({size:"large",shape:"circle"});function zt(e,n){}function St(e,n){if(e&1&&(c(0,"nz-affix",3,1),a(2,zt,0,0,"ng-template",4),m()),e&2){let t=l(),i=S(3);s("nzOffsetTop",t.fixedOffsetTop),o(2),s("ngTemplateOutlet",i)}}function Ot(e,n){}function Et(e,n){if(e&1&&a(0,Ot,0,0,"ng-template",4),e&2){l();let t=S(3);s("ngTemplateOutlet",t)}}function It(e,n){}function Nt(e,n){if(e&1&&a(0,It,0,0,"ng-template",4),e&2){let t=l(2);s("ngTemplateOutlet",t.breadcrumb)}}function Rt(e,n){if(e&1&&(c(0,"a",15),v(1),m()),e&2){let t=l().$implicit;s("routerLink",t.link),o(),E(t.title)}}function Dt(e,n){if(e&1&&v(0),e&2){let t=l().$implicit;I(" ",t.title," ")}}function Mt(e,n){if(e&1&&(c(0,"nz-breadcrumb-item"),a(1,Rt,2,2,"a",15)(2,Dt,1,1),m()),e&2){let t=n.$implicit;o(),p(t.link?1:2)}}function Pt(e,n){if(e&1&&(c(0,"nz-breadcrumb"),A(1,Mt,3,1,"nz-breadcrumb-item",null,Ie),m()),e&2){let t=l(3);o(),H(t.paths)}}function wt(e,n){if(e&1&&a(0,Pt,3,0,"nz-breadcrumb"),e&2){let t=l(2);p(t.paths&&t.paths.length>0?0:-1)}}function Bt(e,n){}function kt(e,n){if(e&1&&(c(0,"div",8),a(1,Bt,0,0,"ng-template",4),m()),e&2){let t=l(2);o(),s("ngTemplateOutlet",t.logo)}}function At(e,n){}function Ht(e,n){if(e&1&&a(0,At,0,0,"ng-template",4),e&2){let t=l(3);s("ngTemplateOutlet",t._titleTpl)}}function jt(e,n){if(e&1&&(j(0),v(1),F()),e&2){let t=l(5);o(),E(t.titleSub)}}function Ft(e,n){if(e&1&&(c(0,"small"),a(1,jt,2,1,"ng-container",16),m()),e&2){let t=l(4);o(),s("nzStringTemplateOutlet",t.titleSub)}}function Lt(e,n){if(e&1&&(v(0),a(1,Ft,2,1,"small")),e&2){let t=l(3);I(" ",t._titleVal," "),o(),p(t.titleSub?1:-1)}}function Vt(e,n){if(e&1&&(c(0,"h1",11),a(1,Ht,1,1,null,4)(2,Lt,2,2),m()),e&2){let t=l(2);o(),p(t._titleTpl?1:2)}}function $t(e,n){}function Ut(e,n){if(e&1&&(c(0,"div",12),a(1,$t,0,0,"ng-template",4),m()),e&2){let t=l(2);o(),s("ngTemplateOutlet",t.action)}}function Gt(e,n){}function Qt(e,n){}function Zt(e,n){if(e&1&&(c(0,"div",14),a(1,Qt,0,0,"ng-template",4),m()),e&2){let t=l(2);o(),s("ngTemplateOutlet",t.extra)}}function qt(e,n){}function Yt(e,n){if(e&1){let t=L();c(0,"div",5)(1,"div")(2,"nz-skeleton",6),a(3,Nt,1,1,null,4)(4,wt,1,1),c(5,"div",7),a(6,kt,2,1,"div",8),c(7,"div",9)(8,"div",10),a(9,Vt,3,1,"h1",11)(10,Ut,2,1,"div",12),m(),c(11,"div",10)(12,"div",13,2),V("cdkObserveContent",function(){P(t);let r=l();return w(r.checkContent())}),z(14),a(15,Gt,0,0,"ng-template",4),m(),a(16,Zt,2,1,"div",14),m()()(),a(17,qt,0,0,"ng-template",4),m()()()}if(e&2){let t=l();ee("page-header-rtl",t.dir==="rtl"),o(),ee("page-header__wide",t.wide),o(),s("nzLoading",t.loading)("nzTitle",!1)("nzActive",!0)("nzParagraph",re(16,yt))("nzAvatar",re(17,Tt)),o(),p(t.breadcrumb?3:4),o(3),p(t.logo?6:-1),o(3),p(t._titleVal||t._titleTpl?9:-1),o(),p(t.action?10:-1),o(5),s("ngTemplateOutlet",t.content),o(),p(t.extra?16:-1),o(),s("ngTemplateOutlet",t.tab)}}var R=class e{renderer=d(k);router=d(N);cdr=d(U);menuSrv=d(je);i18nSrv=d(He);titleSrv=d(Ue);reuseSrv=d(Je,{optional:!0});directionality=d(Ve);destroy$=d(xe);conTpl;affix;inited=!1;isBrowser=!0;dir="ltr";get menus(){return this.menuSrv.getPathByUrl(this.router.url,this.recursiveBreadcrumb)}_titleVal="";paths=[];_title=null;_titleTpl=null;set title(n){n instanceof Se?(this._title=null,this._titleTpl=n,this._titleVal=""):(this._title=n,this._titleVal=this._title)}titleSub;loading=!1;wide=!1;home;homeLink;homeI18n;autoBreadcrumb;autoTitle;syncTitle;fixed;fixedOffsetTop;breadcrumb=null;recursiveBreadcrumb;logo=null;action=null;content=null;extra=null;tab=null;constructor(n,t,i){this.isBrowser=i.isBrowser,t.attach(this,"pageHeader",{home:"\u9996\u9875",homeLink:"/",autoBreadcrumb:!0,recursiveBreadcrumb:!1,autoTitle:!0,syncTitle:!0,fixed:!1,fixedOffsetTop:64}),n.notify.pipe(Z(),h(u=>this.affix&&u.type==="layout"&&u.name==="collapsed")).subscribe(()=>this.affix.updatePosition({}));let r=[this.router.events.pipe(h(u=>u instanceof Q))];this.menuSrv!=null&&r.push(this.menuSrv.change),r.push(this.i18nSrv.change),fe(...r).pipe(Z(),h(()=>this.inited)).subscribe(()=>this.refresh())}refresh(){this.setTitle().genBreadcrumb(),this.cdr.detectChanges()}genBreadcrumb(){if(this.breadcrumb||!this.autoBreadcrumb||this.menus.length<=0){this.paths=[];return}let n=[];this.menus.forEach(t=>{if(typeof t.hideInBreadcrumb<"u"&&t.hideInBreadcrumb)return;let i=t.text;t.i18n&&(i=this.i18nSrv.fanyi(t.i18n)),n.push({title:i,link:t.link&&[t.link]})}),this.home&&n.splice(0,0,{title:this.homeI18n&&this.i18nSrv.fanyi(this.homeI18n)||this.home,link:[this.homeLink]}),this.paths=n}setTitle(){if(this._title==null&&this._titleTpl==null&&this.autoTitle&&this.menus.length>0){let n=this.menus[this.menus.length-1],t=n.text;n.i18n&&(t=this.i18nSrv.fanyi(n.i18n)),this._titleVal=t}return this._titleVal&&this.syncTitle&&(this.titleSrv.setTitle(this._titleVal),!this.inited&&this.reuseSrv&&(this.reuseSrv.title=this._titleVal)),this}checkContent(){Ke(this.conTpl.nativeElement)?this.renderer.setAttribute(this.conTpl.nativeElement,"hidden",""):this.renderer.removeAttribute(this.conTpl.nativeElement,"hidden")}ngOnInit(){this.dir=this.directionality.value,this.directionality.change.pipe(Z(this.destroy$)).subscribe(n=>{this.dir=n,this.cdr.detectChanges()}),this.refresh(),this.inited=!0}ngAfterViewInit(){this.checkContent()}ngOnChanges(){this.inited&&this.refresh()}static \u0275fac=function(t){return new(t||e)(b(Le),b(Ae),b(Fe))};static \u0275cmp=x({type:e,selectors:[["page-header"]],viewQuery:function(t,i){if(t&1&&(te(vt,5),te(Ct,5)),t&2){let r;ne(r=ie())&&(i.conTpl=r.first),ne(r=ie())&&(i.affix=r.first)}},inputs:{title:"title",titleSub:"titleSub",loading:[2,"loading","loading",_],wide:[2,"wide","wide",_],home:"home",homeLink:"homeLink",homeI18n:"homeI18n",autoBreadcrumb:[2,"autoBreadcrumb","autoBreadcrumb",_],autoTitle:[2,"autoTitle","autoTitle",_],syncTitle:[2,"syncTitle","syncTitle",_],fixed:[2,"fixed","fixed",_],fixedOffsetTop:[2,"fixedOffsetTop","fixedOffsetTop",De],breadcrumb:"breadcrumb",recursiveBreadcrumb:[2,"recursiveBreadcrumb","recursiveBreadcrumb",_],logo:"logo",action:"action",content:"content",extra:"extra",tab:"tab"},exportAs:["pageHeader"],features:[ve],ngContentSelectors:xt,decls:4,vars:1,consts:[["phTpl",""],["affix",""],["conTpl",""],[3,"nzOffsetTop"],[3,"ngTemplateOutlet"],[1,"page-header"],[1,"d-block",3,"nzLoading","nzTitle","nzActive","nzParagraph","nzAvatar"],[1,"page-header__detail"],[1,"page-header__logo"],[1,"page-header__main"],[1,"page-header__row"],[1,"page-header__title"],[1,"page-header__action"],[1,"page-header__desc",3,"cdkObserveContent"],[1,"page-header__extra"],[3,"routerLink"],[4,"nzStringTemplateOutlet"]],template:function(t,i){t&1&&(T(),a(0,St,3,2,"nz-affix",3)(1,Et,1,1,null,4)(2,Yt,18,18,"ng-template",null,0,$)),t&2&&p(i.isBrowser&&i.fixed?0:1)},dependencies:[nt,G,et,me,W,Be,q,le],encapsulation:2,changeDetection:0})};var Kt=[R],de=class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=y({type:e});static \u0275inj=C({imports:[Me,ke,se,it,tt,ot,Y,Kt]})};export{le as a,se as b,W as c,me as d,ot as e,R as f,de as g};
