import{h as O,i as Se,j as xe,g as ie,k as nt,l as Ce,m as ot,b as it,n as lt,o as Ee,p as rt,a as ke,v as at}from"./QBtn.99297d54.js";import{r as _,q as Te,j as W,c as L,o as M,P as _e,n as le,h as f,g as $,k as I,a as u,I as st,N as X,T as ut,w as H,Q as ct,p as dt,R as ft,S as D,U as ze,V as B,W as vt,f as mt,X as gt,H as ht,Y as bt,J as Z,Z as se,O as Be,L as ue,M as pe,K as ce,i as yt,e as de,l as Ye,_ as Ke,$ as wt,a0 as ee,a1 as pt}from"./index.7ed7de5a.js";function qt(){const e=_(!Te.value);return e.value===!1&&W(()=>{e.value=!0}),{isHydrated:e}}const Ue=typeof ResizeObserver!="undefined",Ie=Ue===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var Pe=L({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:n}){let t=null,l,o={width:-1,height:-1};function i(s){s===!0||e.debounce===0||e.debounce==="0"?r():t===null&&(t=setTimeout(r,e.debounce))}function r(){if(t!==null&&(clearTimeout(t),t=null),l){const{offsetWidth:s,offsetHeight:a}=l;(s!==o.width||a!==o.height)&&(o={width:s,height:a},n("resize",o))}}const{proxy:c}=$();if(c.trigger=i,Ue===!0){let s;const a=v=>{l=c.$el.parentNode,l?(s=new ResizeObserver(i),s.observe(l),r()):v!==!0&&le(()=>{a(!0)})};return W(()=>{a()}),M(()=>{t!==null&&clearTimeout(t),s!==void 0&&(s.disconnect!==void 0?s.disconnect():l&&s.unobserve(l))}),_e}else{let v=function(){t!==null&&(clearTimeout(t),t=null),a!==void 0&&(a.removeEventListener!==void 0&&a.removeEventListener("resize",i,I.passive),a=void 0)},g=function(){v(),l&&l.contentDocument&&(a=l.contentDocument.defaultView,a.addEventListener("resize",i,I.passive),r())};const{isHydrated:s}=qt();let a;return W(()=>{le(()=>{l=c.$el,l&&g()})}),M(v),()=>{if(s.value===!0)return f("object",{class:"q--avoid-card-border",style:Ie.style,tabindex:-1,type:"text/html",data:Ie.url,"aria-hidden":"true",onLoad:g})}}}}),Ve=L({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:n}){const t=u(()=>parseInt(e.lines,10)),l=u(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(t.value===1?" ellipsis":"")),o=u(()=>e.lines!==void 0&&t.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":t.value}:null);return()=>f("div",{style:o.value,class:l.value},O(n.default))}}),nn=L({name:"QAvatar",props:{...Se,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(e,{slots:n}){const t=xe(e),l=u(()=>"q-avatar"+(e.color?` bg-${e.color}`:"")+(e.textColor?` text-${e.textColor} q-chip--colored`:"")+(e.square===!0?" q-avatar--square":e.rounded===!0?" rounded-borders":"")),o=u(()=>e.fontSize?{fontSize:e.fontSize}:null);return()=>{const i=e.icon!==void 0?[f(ie,{name:e.icon})]:void 0;return f("div",{class:l.value,style:t.value},[f("div",{class:"q-avatar__content row flex-center overflow-hidden",style:o.value},nt(n.default,i))])}}}),fe=L({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:n}){const t=u(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>f("div",{class:t.value},O(n.default))}});const F={dark:{type:Boolean,default:null}};function N(e,n){return u(()=>e.dark===null?n.dark.isActive:e.dark)}var St=L({name:"QItem",props:{...F,...Ce,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:n,emit:t}){const{proxy:{$q:l}}=$(),o=N(e,l),{hasLink:i,linkAttrs:r,linkClass:c,linkTag:s,navigateOnClick:a}=ot(),v=_(null),g=_(null),b=u(()=>e.clickable===!0||i.value===!0||e.tag==="label"),h=u(()=>e.disable!==!0&&b.value===!0),p=u(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(o.value===!0?" q-item--dark":"")+(i.value===!0&&e.active===null?c.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(h.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),d=u(()=>{if(e.insetLevel===void 0)return null;const q=l.lang.rtl===!0?"Right":"Left";return{["padding"+q]:16+e.insetLevel*56+"px"}});function x(q){h.value===!0&&(g.value!==null&&(q.qKeyEvent!==!0&&document.activeElement===v.value?g.value.focus():document.activeElement===g.value&&v.value.focus()),a(q))}function k(q){if(h.value===!0&&st(q,[13,32])===!0){X(q),q.qKeyEvent=!0;const y=new MouseEvent("click",q);y.qKeyEvent=!0,v.value.dispatchEvent(y)}t("keyup",q)}function m(){const q=it(n.default,[]);return h.value===!0&&q.unshift(f("div",{class:"q-focus-helper",tabindex:-1,ref:g})),q}return()=>{const q={ref:v,class:p.value,style:d.value,role:"listitem",onClick:x,onKeyup:k};return h.value===!0?(q.tabindex=e.tabindex||"0",Object.assign(q,r.value)):b.value===!0&&(q["aria-disabled"]="true"),f(s.value,q,m())}}});const xt=["ul","ol"];var on=L({name:"QList",props:{...F,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:n}){const t=$(),l=N(e,t.proxy.$q),o=u(()=>xt.includes(e.tag)?null:"list"),i=u(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(l.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>f(e.tag,{class:i.value,role:o.value},O(n.default))}});const Ct=[Element,String],kt=[null,document,document.body,document.scrollingElement,document.documentElement];function Tt(e,n){let t=lt(n);if(t===void 0){if(e==null)return window;t=e.closest(".scroll,.scroll-y,.overflow-auto")}return kt.includes(t)?window:t}function ln(e){return(e===window?document.body:e).scrollHeight}function Le(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function Ge(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}function Je(e,n,t=0){const l=arguments[3]===void 0?performance.now():arguments[3],o=Le(e);if(t<=0){o!==n&&qe(e,n);return}requestAnimationFrame(i=>{const r=i-l,c=o+(n-o)/Math.max(r,t)*r;qe(e,c),c!==n&&Je(e,n,t-r,i)})}function qe(e,n){if(e===window){window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,n);return}e.scrollTop=n}function rn(e,n,t){if(t){Je(e,n,t);return}qe(e,n)}let te;function ve(){if(te!==void 0)return te;const e=document.createElement("p"),n=document.createElement("div");Ee(e,{width:"100%",height:"200px"}),Ee(n,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),n.appendChild(e),document.body.appendChild(n);const t=e.offsetWidth;n.style.overflow="scroll";let l=e.offsetWidth;return t===l&&(l=n.clientWidth),n.remove(),te=t-l,te}function _t(e,n=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:n?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}var an=L({name:"QCard",props:{...F,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:n}){const{proxy:{$q:t}}=$(),l=N(e,t),o=u(()=>"q-card"+(l.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>f(e.tag,{class:o.value},O(n.default))}}),Lt=L({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(e,{slots:n,emit:t}){let l=!1,o,i,r=null,c=null,s,a;function v(){o&&o(),o=null,l=!1,r!==null&&(clearTimeout(r),r=null),c!==null&&(clearTimeout(c),c=null),i!==void 0&&i.removeEventListener("transitionend",s),s=null}function g(d,x,k){x!==void 0&&(d.style.height=`${x}px`),d.style.transition=`height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`,l=!0,o=k}function b(d,x){d.style.overflowY=null,d.style.height=null,d.style.transition=null,v(),x!==a&&t(x)}function h(d,x){let k=0;i=d,l===!0?(v(),k=d.offsetHeight===d.scrollHeight?0:void 0):(a="hide",d.style.overflowY="hidden"),g(d,k,x),r=setTimeout(()=>{r=null,d.style.height=`${d.scrollHeight}px`,s=m=>{c=null,(Object(m)!==m||m.target===d)&&b(d,"show")},d.addEventListener("transitionend",s),c=setTimeout(s,e.duration*1.1)},100)}function p(d,x){let k;i=d,l===!0?v():(a="show",d.style.overflowY="hidden",k=d.scrollHeight),g(d,k,x),r=setTimeout(()=>{r=null,d.style.height=0,s=m=>{c=null,(Object(m)!==m||m.target===d)&&b(d,"hide")},d.addEventListener("transitionend",s),c=setTimeout(s,e.duration*1.1)},100)}return M(()=>{l===!0&&v()}),()=>f(ut,{css:!1,appear:e.appear,onEnter:h,onLeave:p},n.default)}});const $t={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},me={xs:2,sm:4,md:8,lg:16,xl:24};var He=L({name:"QSeparator",props:{...F,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const n=$(),t=N(e,n.proxy.$q),l=u(()=>e.vertical===!0?"vertical":"horizontal"),o=u(()=>` q-separator--${l.value}`),i=u(()=>e.inset!==!1?`${o.value}-${$t[e.inset]}`:""),r=u(()=>`q-separator${o.value}${i.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(t.value===!0?" q-separator--dark":"")),c=u(()=>{const s={};if(e.size!==void 0&&(s[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const a=e.spaced===!0?`${me.md}px`:e.spaced in me?`${me[e.spaced]}px`:e.spaced,v=e.vertical===!0?["Left","Right"]:["Top","Bottom"];s[`margin${v[0]}`]=s[`margin${v[1]}`]=a}return s});return()=>f("hr",{class:r.value,style:c.value,"aria-orientation":l.value})}});let ge,ne=0;const T=new Array(256);for(let e=0;e<256;e++)T[e]=(e+256).toString(16).substring(1);const Et=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return n=>{const t=new Uint8Array(n);return e.getRandomValues(t),t}}return n=>{const t=[];for(let l=n;l>0;l--)t.push(Math.floor(Math.random()*256));return t}})(),Ae=4096;function re(){(ge===void 0||ne+16>Ae)&&(ne=0,ge=Et(Ae));const e=Array.prototype.slice.call(ge,ne,ne+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,T[e[0]]+T[e[1]]+T[e[2]]+T[e[3]]+"-"+T[e[4]]+T[e[5]]+"-"+T[e[6]]+T[e[7]]+"-"+T[e[8]]+T[e[9]]+"-"+T[e[10]]+T[e[11]]+T[e[12]]+T[e[13]]+T[e[14]]+T[e[15]]}function zt(e){return e==null?null:e}function Oe(e,n){return e==null?n===!0?`f_${re()}`:null:e}function Bt({getValue:e,required:n=!0}={}){if(Te.value===!0){const t=e!==void 0?_(zt(e())):_(null);return n===!0&&t.value===null&&W(()=>{t.value=`f_${re()}`}),e!==void 0&&H(e,l=>{t.value=Oe(l,n)}),t}return e!==void 0?u(()=>Oe(e(),n)):_(`f_${re()}`)}const It={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},Pt=["beforeShow","show","beforeHide","hide"];function Vt({showing:e,canShow:n,hideOnRouteChange:t,handleShow:l,handleHide:o,processOnMount:i}){const r=$(),{props:c,emit:s,proxy:a}=r;let v;function g(m){e.value===!0?p(m):b(m)}function b(m){if(c.disable===!0||m!==void 0&&m.qAnchorHandled===!0||n!==void 0&&n(m)!==!0)return;const q=c["onUpdate:modelValue"]!==void 0;q===!0&&(s("update:modelValue",!0),v=m,le(()=>{v===m&&(v=void 0)})),(c.modelValue===null||q===!1)&&h(m)}function h(m){e.value!==!0&&(e.value=!0,s("beforeShow",m),l!==void 0?l(m):s("show",m))}function p(m){if(c.disable===!0)return;const q=c["onUpdate:modelValue"]!==void 0;q===!0&&(s("update:modelValue",!1),v=m,le(()=>{v===m&&(v=void 0)})),(c.modelValue===null||q===!1)&&d(m)}function d(m){e.value!==!1&&(e.value=!1,s("beforeHide",m),o!==void 0?o(m):s("hide",m))}function x(m){c.disable===!0&&m===!0?c["onUpdate:modelValue"]!==void 0&&s("update:modelValue",!1):m===!0!==e.value&&(m===!0?h:d)(v)}H(()=>c.modelValue,x),t!==void 0&&rt(r)===!0&&H(()=>a.$route.fullPath,()=>{t.value===!0&&e.value===!0&&p()}),i===!0&&W(()=>{x(c.modelValue)});const k={show:b,hide:p,toggle:g};return Object.assign(a,k),k}const R=ct({}),Ht=Object.keys(Ce);var sn=L({name:"QExpansionItem",props:{...Ce,...It,...F,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,toggleAriaLabel:String,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:{},headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,hideExpandIcon:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[...Pt,"click","afterShow","afterHide"],setup(e,{slots:n,emit:t}){const{proxy:{$q:l}}=$(),o=N(e,l),i=_(e.modelValue!==null?e.modelValue:e.defaultOpened),r=_(null),c=Bt(),{show:s,hide:a,toggle:v}=Vt({showing:i});let g,b;const h=u(()=>`q-expansion-item q-item-type q-expansion-item--${i.value===!0?"expanded":"collapsed"} q-expansion-item--${e.popup===!0?"popup":"standard"}`),p=u(()=>{if(e.contentInsetLevel===void 0)return null;const w=l.lang.rtl===!0?"Right":"Left";return{["padding"+w]:e.contentInsetLevel*56+"px"}}),d=u(()=>e.disable!==!0&&(e.href!==void 0||e.to!==void 0&&e.to!==null&&e.to!=="")),x=u(()=>{const w={};return Ht.forEach(V=>{w[V]=e[V]}),w}),k=u(()=>d.value===!0||e.expandIconToggle!==!0),m=u(()=>e.expandedIcon!==void 0&&i.value===!0?e.expandedIcon:e.expandIcon||l.iconSet.expansionItem[e.denseToggle===!0?"denseIcon":"icon"]),q=u(()=>e.disable!==!0&&(d.value===!0||e.expandIconToggle===!0)),y=u(()=>({expanded:i.value===!0,detailsId:c.value,toggle:v,show:s,hide:a})),C=u(()=>{const w=e.toggleAriaLabel!==void 0?e.toggleAriaLabel:l.lang.label[i.value===!0?"collapse":"expand"](e.label);return{role:"button","aria-expanded":i.value===!0?"true":"false","aria-controls":c.value,"aria-label":w}});H(()=>e.group,w=>{b!==void 0&&b(),w!==void 0&&U()});function E(w){d.value!==!0&&v(w),t("click",w)}function z(w){w.keyCode===13&&A(w,!0)}function A(w,V){V!==!0&&r.value!==null&&r.value.focus(),v(w),X(w)}function j(){t("afterShow")}function ae(){t("afterHide")}function U(){g===void 0&&(g=re()),i.value===!0&&(R[e.group]=g);const w=H(i,J=>{J===!0?R[e.group]=g:R[e.group]===g&&delete R[e.group]}),V=H(()=>R[e.group],(J,tt)=>{tt===g&&J!==void 0&&J!==g&&a()});b=()=>{w(),V(),R[e.group]===g&&delete R[e.group],b=void 0}}function S(){const w={class:[`q-focusable relative-position cursor-pointer${e.denseToggle===!0&&e.switchToggleSide===!0?" items-end":""}`,e.expandIconClass],side:e.switchToggleSide!==!0,avatar:e.switchToggleSide},V=[f(ie,{class:"q-expansion-item__toggle-icon"+(e.expandedIcon===void 0&&i.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:m.value})];return q.value===!0&&(Object.assign(w,{tabindex:0,...C.value,onClick:A,onKeyup:z}),V.unshift(f("div",{ref:r,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),f(fe,w,()=>V)}function P(){let w;return n.header!==void 0?w=[].concat(n.header(y.value)):(w=[f(fe,()=>[f(Ve,{lines:e.labelLines},()=>e.label||""),e.caption?f(Ve,{lines:e.captionLines,caption:!0},()=>e.caption):null])],e.icon&&w[e.switchToggleSide===!0?"push":"unshift"](f(fe,{side:e.switchToggleSide===!0,avatar:e.switchToggleSide!==!0},()=>f(ie,{name:e.icon})))),e.disable!==!0&&e.hideExpandIcon!==!0&&w[e.switchToggleSide===!0?"unshift":"push"](S()),w}function G(){const w={ref:"item",style:e.headerStyle,class:e.headerClass,dark:o.value,disable:e.disable,dense:e.dense,insetLevel:e.headerInsetLevel};return k.value===!0&&(w.clickable=!0,w.onClick=E,Object.assign(w,d.value===!0?x.value:C.value)),f(St,w,P)}function Ze(){return dt(f("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:p.value,id:c.value},O(n.default)),[[ft,i.value]])}function et(){const w=[G(),f(Lt,{duration:e.duration,onShow:j,onHide:ae},Ze)];return e.expandSeparator===!0&&w.push(f(He,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:o.value}),f(He,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:o.value})),w}return e.group!==void 0&&U(),M(()=>{b!==void 0&&b()}),()=>f("div",{class:h.value},[f("div",{class:"q-expansion-item__container relative-position"},et())])}});const At={xs:2,sm:4,md:6,lg:10,xl:14};function Re(e,n,t){return{transform:n===!0?`translateX(${t.lang.rtl===!0?"-":""}100%) scale3d(${-e},1,1)`:`scale3d(${e},1,1)`}}var un=L({name:"QLinearProgress",props:{...F,...Se,value:{type:Number,default:0},buffer:Number,color:String,trackColor:String,reverse:Boolean,stripe:Boolean,indeterminate:Boolean,query:Boolean,rounded:Boolean,animationSpeed:{type:[String,Number],default:2100},instantFeedback:Boolean},setup(e,{slots:n}){const{proxy:t}=$(),l=N(e,t.$q),o=xe(e,At),i=u(()=>e.indeterminate===!0||e.query===!0),r=u(()=>e.reverse!==e.query),c=u(()=>({...o.value!==null?o.value:{},"--q-linear-progress-speed":`${e.animationSpeed}ms`})),s=u(()=>"q-linear-progress"+(e.color!==void 0?` text-${e.color}`:"")+(e.reverse===!0||e.query===!0?" q-linear-progress--reverse":"")+(e.rounded===!0?" rounded-borders":"")),a=u(()=>Re(e.buffer!==void 0?e.buffer:1,r.value,t.$q)),v=u(()=>`with${e.instantFeedback===!0?"out":""}-transition`),g=u(()=>`q-linear-progress__track absolute-full q-linear-progress__track--${v.value} q-linear-progress__track--${l.value===!0?"dark":"light"}`+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),b=u(()=>Re(i.value===!0?1:e.value,r.value,t.$q)),h=u(()=>`q-linear-progress__model absolute-full q-linear-progress__model--${v.value} q-linear-progress__model--${i.value===!0?"in":""}determinate`),p=u(()=>({width:`${e.value*100}%`})),d=u(()=>`q-linear-progress__stripe absolute-${e.reverse===!0?"right":"left"} q-linear-progress__stripe--${v.value}`);return()=>{const x=[f("div",{class:g.value,style:a.value}),f("div",{class:h.value,style:b.value})];return e.stripe===!0&&i.value===!1&&x.push(f("div",{class:d.value,style:p.value})),f("div",{class:s.value,style:c.value,role:"progressbar","aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":e.indeterminate===!0?void 0:e.value},ke(n.default,x))}}});function Ot(e,n){const t=_(null),l=u(()=>e.disable===!0?null:f("span",{ref:t,class:"no-outline",tabindex:-1}));function o(i){const r=n.value;i!==void 0&&i.type.indexOf("key")===0?r!==null&&document.activeElement!==r&&r.contains(document.activeElement)===!0&&r.focus():t.value!==null&&(i===void 0||r!==null&&r.contains(i.target)===!0)&&t.value.focus()}return{refocusTargetEl:l,refocusTarget:o}}const Rt={name:String};function cn(e){return u(()=>({type:"hidden",name:e.name,value:e.modelValue}))}function Qt(e={}){return(n,t,l)=>{n[t](f("input",{class:"hidden"+(l||""),...e.value}))}}function dn(e){return u(()=>e.name||e.for)}var Mt={xs:30,sm:35,md:40,lg:50,xl:60};const Ft={...F,...Se,...Rt,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:e=>e==="tf"||e==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},Nt=["update:modelValue"];function jt(e,n){const{props:t,slots:l,emit:o,proxy:i}=$(),{$q:r}=i,c=N(t,r),s=_(null),{refocusTargetEl:a,refocusTarget:v}=Ot(t,s),g=xe(t,Mt),b=u(()=>t.val!==void 0&&Array.isArray(t.modelValue)),h=u(()=>{const S=D(t.val);return b.value===!0?t.modelValue.findIndex(P=>D(P)===S):-1}),p=u(()=>b.value===!0?h.value!==-1:D(t.modelValue)===D(t.trueValue)),d=u(()=>b.value===!0?h.value===-1:D(t.modelValue)===D(t.falseValue)),x=u(()=>p.value===!1&&d.value===!1),k=u(()=>t.disable===!0?-1:t.tabindex||0),m=u(()=>`q-${e} cursor-pointer no-outline row inline no-wrap items-center`+(t.disable===!0?" disabled":"")+(c.value===!0?` q-${e}--dark`:"")+(t.dense===!0?` q-${e}--dense`:"")+(t.leftLabel===!0?" reverse":"")),q=u(()=>{const S=p.value===!0?"truthy":d.value===!0?"falsy":"indet",P=t.color!==void 0&&(t.keepColor===!0||(e==="toggle"?p.value===!0:d.value!==!0))?` text-${t.color}`:"";return`q-${e}__inner relative-position non-selectable q-${e}__inner--${S}${P}`}),y=u(()=>{const S={type:"checkbox"};return t.name!==void 0&&Object.assign(S,{".checked":p.value,"^checked":p.value===!0?"checked":void 0,name:t.name,value:b.value===!0?t.val:t.trueValue}),S}),C=Qt(y),E=u(()=>{const S={tabindex:k.value,role:e==="toggle"?"switch":"checkbox","aria-label":t.label,"aria-checked":x.value===!0?"mixed":p.value===!0?"true":"false"};return t.disable===!0&&(S["aria-disabled"]="true"),S});function z(S){S!==void 0&&(X(S),v(S)),t.disable!==!0&&o("update:modelValue",A(),S)}function A(){if(b.value===!0){if(p.value===!0){const S=t.modelValue.slice();return S.splice(h.value,1),S}return t.modelValue.concat([t.val])}if(p.value===!0){if(t.toggleOrder!=="ft"||t.toggleIndeterminate===!1)return t.falseValue}else if(d.value===!0){if(t.toggleOrder==="ft"||t.toggleIndeterminate===!1)return t.trueValue}else return t.toggleOrder!=="ft"?t.trueValue:t.falseValue;return t.indeterminateValue}function j(S){(S.keyCode===13||S.keyCode===32)&&X(S)}function ae(S){(S.keyCode===13||S.keyCode===32)&&z(S)}const U=n(p,x);return Object.assign(i,{toggle:z}),()=>{const S=U();t.disable!==!0&&C(S,"unshift",` q-${e}__native absolute q-ma-none q-pa-none`);const P=[f("div",{class:q.value,style:g.value,"aria-hidden":"true"},S)];a.value!==null&&P.push(a.value);const G=t.label!==void 0?ke(l.default,[t.label]):O(l.default);return G!==void 0&&P.push(f("div",{class:`q-${e}__label q-anchor--skip`},G)),f("div",{ref:s,class:m.value,...E.value,onClick:z,onKeydown:j,onKeyup:ae},P)}}var fn=L({name:"QToggle",props:{...Ft,icon:String,iconColor:String},emits:Nt,setup(e){function n(t,l){const o=u(()=>(t.value===!0?e.checkedIcon:l.value===!0?e.indeterminateIcon:e.uncheckedIcon)||e.icon),i=u(()=>t.value===!0?e.iconColor:null);return()=>[f("div",{class:"q-toggle__track"}),f("div",{class:"q-toggle__thumb absolute flex flex-center no-wrap"},o.value!==void 0?[f(ie,{name:o.value,color:i.value})]:void 0)]}return jt("toggle",n)}});function vn(e,n,t){let l;function o(){l!==void 0&&(ze.remove(l),l=void 0)}return M(()=>{e.value===!0&&o()}),{removeFromHistory:o,addToHistory(){l={condition:()=>t.value===!0,handler:n},ze.add(l)}}}let Y=0,he,be,K,ye=!1,Qe,Me,Fe,Q=null;function Dt(e){Wt(e)&&X(e)}function Wt(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const n=vt(e),t=e.shiftKey&&!e.deltaX,l=!t&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),o=t||l?e.deltaY:e.deltaX;for(let i=0;i<n.length;i++){const r=n[i];if(_t(r,l))return l?o<0&&r.scrollTop===0?!0:o>0&&r.scrollTop+r.clientHeight===r.scrollHeight:o<0&&r.scrollLeft===0?!0:o>0&&r.scrollLeft+r.clientWidth===r.scrollWidth}return!0}function Ne(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function oe(e){ye!==!0&&(ye=!0,requestAnimationFrame(()=>{ye=!1;const{height:n}=e.target,{clientHeight:t,scrollTop:l}=document.scrollingElement;(K===void 0||n!==window.innerHeight)&&(K=t-n,document.scrollingElement.scrollTop=l),l>K&&(document.scrollingElement.scrollTop-=Math.ceil((l-K)/8))}))}function je(e){const n=document.body,t=window.visualViewport!==void 0;if(e==="add"){const{overflowY:l,overflowX:o}=window.getComputedStyle(n);he=Ge(window),be=Le(window),Qe=n.style.left,Me=n.style.top,Fe=window.location.href,n.style.left=`-${he}px`,n.style.top=`-${be}px`,o!=="hidden"&&(o==="scroll"||n.scrollWidth>window.innerWidth)&&n.classList.add("q-body--force-scrollbar-x"),l!=="hidden"&&(l==="scroll"||n.scrollHeight>window.innerHeight)&&n.classList.add("q-body--force-scrollbar-y"),n.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,B.is.ios===!0&&(t===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",oe,I.passiveCapture),window.visualViewport.addEventListener("scroll",oe,I.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",Ne,I.passiveCapture))}B.is.desktop===!0&&B.is.mac===!0&&window[`${e}EventListener`]("wheel",Dt,I.notPassive),e==="remove"&&(B.is.ios===!0&&(t===!0?(window.visualViewport.removeEventListener("resize",oe,I.passiveCapture),window.visualViewport.removeEventListener("scroll",oe,I.passiveCapture)):window.removeEventListener("scroll",Ne,I.passiveCapture)),n.classList.remove("q-body--prevent-scroll"),n.classList.remove("q-body--force-scrollbar-x"),n.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,n.style.left=Qe,n.style.top=Me,window.location.href===Fe&&window.scrollTo(he,be),K=void 0)}function Xt(e){let n="add";if(e===!0){if(Y++,Q!==null){clearTimeout(Q),Q=null;return}if(Y>1)return}else{if(Y===0||(Y--,Y>0))return;if(n="remove",B.is.ios===!0&&B.is.nativeMobile===!0){Q!==null&&clearTimeout(Q),Q=setTimeout(()=>{je(n),Q=null},100);return}}je(n)}function mn(){let e;return{preventBodyScroll(n){n!==e&&(e!==void 0||n===!0)&&(e=n,Xt(n))}}}function gn(){let e=null;const n=$();function t(){e!==null&&(clearTimeout(e),e=null)}return mt(t),M(t),{removeTimeout:t,registerTimeout(l,o){t(),at(n)===!1&&(e=setTimeout(()=>{e=null,l()},o))}}}const $e={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Yt=Object.keys($e);$e.all=!0;function De(e){const n={};for(const t of Yt)e[t]===!0&&(n[t]=!0);return Object.keys(n).length===0?$e:(n.horizontal===!0?n.left=n.right=!0:n.left===!0&&n.right===!0&&(n.horizontal=!0),n.vertical===!0?n.up=n.down=!0:n.up===!0&&n.down===!0&&(n.vertical=!0),n.horizontal===!0&&n.vertical===!0&&(n.all=!0),n)}const Kt=["INPUT","TEXTAREA"];function We(e,n){return n.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof n.handler=="function"&&Kt.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(n.uid)===-1)}function Ut(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),gt.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function we(e,n,t){const l=pe(e);let o,i=l.left-n.event.x,r=l.top-n.event.y,c=Math.abs(i),s=Math.abs(r);const a=n.direction;a.horizontal===!0&&a.vertical!==!0?o=i<0?"left":"right":a.horizontal!==!0&&a.vertical===!0?o=r<0?"up":"down":a.up===!0&&r<0?(o="up",c>s&&(a.left===!0&&i<0?o="left":a.right===!0&&i>0&&(o="right"))):a.down===!0&&r>0?(o="down",c>s&&(a.left===!0&&i<0?o="left":a.right===!0&&i>0&&(o="right"))):a.left===!0&&i<0?(o="left",c<s&&(a.up===!0&&r<0?o="up":a.down===!0&&r>0&&(o="down"))):a.right===!0&&i>0&&(o="right",c<s&&(a.up===!0&&r<0?o="up":a.down===!0&&r>0&&(o="down")));let v=!1;if(o===void 0&&t===!1){if(n.event.isFirst===!0||n.event.lastDir===void 0)return{};o=n.event.lastDir,v=!0,o==="left"||o==="right"?(l.left-=i,c=0,i=0):(l.top-=r,s=0,r=0)}return{synthetic:v,payload:{evt:e,touch:n.event.mouse!==!0,mouse:n.event.mouse===!0,position:l,direction:o,isFirst:n.event.isFirst,isFinal:t===!0,duration:Date.now()-n.event.time,distance:{x:c,y:s},offset:{x:i,y:r},delta:{x:l.left-n.event.lastX,y:l.top-n.event.lastY}}}}let Gt=0;var hn=ht({name:"touch-pan",beforeMount(e,{value:n,modifiers:t}){if(t.mouse!==!0&&B.has.touch!==!0)return;function l(i,r){t.mouse===!0&&r===!0?X(i):(t.stop===!0&&ue(i),t.prevent===!0&&Be(i))}const o={uid:"qvtp_"+Gt++,handler:n,modifiers:t,direction:De(t),noop:_e,mouseStart(i){We(i,o)&&bt(i)&&(Z(o,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),o.start(i,!0))},touchStart(i){if(We(i,o)){const r=i.target;Z(o,"temp",[[r,"touchmove","move","notPassiveCapture"],[r,"touchcancel","end","passiveCapture"],[r,"touchend","end","passiveCapture"]]),o.start(i)}},start(i,r){if(B.is.firefox===!0&&se(e,!0),o.lastEvt=i,r===!0||t.stop===!0){if(o.direction.all!==!0&&(r!==!0||o.modifiers.mouseAllDir!==!0&&o.modifiers.mousealldir!==!0)){const a=i.type.indexOf("mouse")!==-1?new MouseEvent(i.type,i):new TouchEvent(i.type,i);i.defaultPrevented===!0&&Be(a),i.cancelBubble===!0&&ue(a),Object.assign(a,{qKeyEvent:i.qKeyEvent,qClickOutside:i.qClickOutside,qAnchorHandled:i.qAnchorHandled,qClonedBy:i.qClonedBy===void 0?[o.uid]:i.qClonedBy.concat(o.uid)}),o.initialEvent={target:i.target,event:a}}ue(i)}const{left:c,top:s}=pe(i);o.event={x:c,y:s,time:Date.now(),mouse:r===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:c,lastY:s}},move(i){if(o.event===void 0)return;const r=pe(i),c=r.left-o.event.x,s=r.top-o.event.y;if(c===0&&s===0)return;o.lastEvt=i;const a=o.event.mouse===!0,v=()=>{l(i,a);let h;t.preserveCursor!==!0&&t.preservecursor!==!0&&(h=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),a===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Ut(),o.styleCleanup=p=>{if(o.styleCleanup=void 0,h!==void 0&&(document.documentElement.style.cursor=h),document.body.classList.remove("non-selectable"),a===!0){const d=()=>{document.body.classList.remove("no-pointer-events--children")};p!==void 0?setTimeout(()=>{d(),p()},50):d()}else p!==void 0&&p()}};if(o.event.detected===!0){o.event.isFirst!==!0&&l(i,o.event.mouse);const{payload:h,synthetic:p}=we(i,o,!1);h!==void 0&&(o.handler(h)===!1?o.end(i):(o.styleCleanup===void 0&&o.event.isFirst===!0&&v(),o.event.lastX=h.position.left,o.event.lastY=h.position.top,o.event.lastDir=p===!0?void 0:h.direction,o.event.isFirst=!1));return}if(o.direction.all===!0||a===!0&&(o.modifiers.mouseAllDir===!0||o.modifiers.mousealldir===!0)){v(),o.event.detected=!0,o.move(i);return}const g=Math.abs(c),b=Math.abs(s);g!==b&&(o.direction.horizontal===!0&&g>b||o.direction.vertical===!0&&g<b||o.direction.up===!0&&g<b&&s<0||o.direction.down===!0&&g<b&&s>0||o.direction.left===!0&&g>b&&c<0||o.direction.right===!0&&g>b&&c>0?(o.event.detected=!0,o.move(i)):o.end(i,!0))},end(i,r){if(o.event!==void 0){if(ce(o,"temp"),B.is.firefox===!0&&se(e,!1),r===!0)o.styleCleanup!==void 0&&o.styleCleanup(),o.event.detected!==!0&&o.initialEvent!==void 0&&o.initialEvent.target.dispatchEvent(o.initialEvent.event);else if(o.event.detected===!0){o.event.isFirst===!0&&o.handler(we(i===void 0?o.lastEvt:i,o).payload);const{payload:c}=we(i===void 0?o.lastEvt:i,o,!0),s=()=>{o.handler(c)};o.styleCleanup!==void 0?o.styleCleanup(s):s()}o.event=void 0,o.initialEvent=void 0,o.lastEvt=void 0}}};if(e.__qtouchpan=o,t.mouse===!0){const i=t.mouseCapture===!0||t.mousecapture===!0?"Capture":"";Z(o,"main",[[e,"mousedown","mouseStart",`passive${i}`]])}B.has.touch===!0&&Z(o,"main",[[e,"touchstart","touchStart",`passive${t.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,n){const t=e.__qtouchpan;t!==void 0&&(n.oldValue!==n.value&&(typeof value!="function"&&t.end(),t.handler=n.value),t.direction=De(n.modifiers))},beforeUnmount(e){const n=e.__qtouchpan;n!==void 0&&(n.event!==void 0&&n.end(),ce(n,"main"),ce(n,"temp"),B.is.firefox===!0&&se(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete e.__qtouchpan)}});function bn(e,n,t){return t<=n?n:Math.min(t,Math.max(n,e))}function yn(e,n,t){if(t<=n)return n;const l=t-n+1;let o=n+(e-n)%l;return o<n&&(o=l+o),o===0?0:o}var wn=L({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:n}){const t=u(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>f(e.tag,{class:t.value},O(n.default))}}),pn=L({name:"QPageContainer",setup(e,{slots:n}){const{proxy:{$q:t}}=$(),l=yt(Ye,de);if(l===de)return console.error("QPageContainer needs to be child of QLayout"),de;Ke(wt,!0);const o=u(()=>{const i={};return l.header.space===!0&&(i.paddingTop=`${l.header.size}px`),l.right.space===!0&&(i[`padding${t.lang.rtl===!0?"Left":"Right"}`]=`${l.right.size}px`),l.footer.space===!0&&(i.paddingBottom=`${l.footer.size}px`),l.left.space===!0&&(i[`padding${t.lang.rtl===!0?"Right":"Left"}`]=`${l.left.size}px`),i});return()=>f("div",{class:"q-page-container",style:o.value},O(n.default))}});const{passive:Xe}=I,Jt=["both","horizontal","vertical"];var Zt=L({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Jt.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:Ct},emits:["scroll"],setup(e,{emit:n}){const t={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let l=null,o,i;H(()=>e.scrollTarget,()=>{s(),c()});function r(){l!==null&&l();const g=Math.max(0,Le(o)),b=Ge(o),h={top:g-t.position.top,left:b-t.position.left};if(e.axis==="vertical"&&h.top===0||e.axis==="horizontal"&&h.left===0)return;const p=Math.abs(h.top)>=Math.abs(h.left)?h.top<0?"up":"down":h.left<0?"left":"right";t.position={top:g,left:b},t.directionChanged=t.direction!==p,t.delta=h,t.directionChanged===!0&&(t.direction=p,t.inflectionPoint=t.position),n("scroll",{...t})}function c(){o=Tt(i,e.scrollTarget),o.addEventListener("scroll",a,Xe),a(!0)}function s(){o!==void 0&&(o.removeEventListener("scroll",a,Xe),o=void 0)}function a(g){if(g===!0||e.debounce===0||e.debounce==="0")r();else if(l===null){const[b,h]=e.debounce?[setTimeout(r,e.debounce),clearTimeout]:[requestAnimationFrame(r),cancelAnimationFrame];l=()=>{h(b),l=null}}}const{proxy:v}=$();return H(()=>v.$q.lang.rtl,r),W(()=>{i=v.$el.parentNode,c()}),M(()=>{l!==null&&l(),s()}),Object.assign(v,{trigger:a,getPosition:()=>t}),_e}}),qn=L({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:n,emit:t}){const{proxy:{$q:l}}=$(),o=_(null),i=_(l.screen.height),r=_(e.container===!0?0:l.screen.width),c=_({position:0,direction:"down",inflectionPoint:0}),s=_(0),a=_(Te.value===!0?0:ve()),v=u(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),g=u(()=>e.container===!1?{minHeight:l.screen.height+"px"}:null),b=u(()=>a.value!==0?{[l.lang.rtl===!0?"left":"right"]:`${a.value}px`}:null),h=u(()=>a.value!==0?{[l.lang.rtl===!0?"right":"left"]:0,[l.lang.rtl===!0?"left":"right"]:`-${a.value}px`,width:`calc(100% + ${a.value}px)`}:null);function p(y){if(e.container===!0||document.qScrollPrevented!==!0){const C={position:y.position.top,direction:y.direction,directionChanged:y.directionChanged,inflectionPoint:y.inflectionPoint.top,delta:y.delta.top};c.value=C,e.onScroll!==void 0&&t("scroll",C)}}function d(y){const{height:C,width:E}=y;let z=!1;i.value!==C&&(z=!0,i.value=C,e.onScrollHeight!==void 0&&t("scrollHeight",C),k()),r.value!==E&&(z=!0,r.value=E),z===!0&&e.onResize!==void 0&&t("resize",y)}function x({height:y}){s.value!==y&&(s.value=y,k())}function k(){if(e.container===!0){const y=i.value>s.value?ve():0;a.value!==y&&(a.value=y)}}let m=null;const q={instances:{},view:u(()=>e.view),isContainer:u(()=>e.container),rootRef:o,height:i,containerHeight:s,scrollbarWidth:a,totalWidth:u(()=>r.value+a.value),rows:u(()=>{const y=e.view.toLowerCase().split(" ");return{top:y[0].split(""),middle:y[1].split(""),bottom:y[2].split("")}}),header:ee({size:0,offset:0,space:!1}),right:ee({size:300,offset:0,space:!1}),footer:ee({size:0,offset:0,space:!1}),left:ee({size:300,offset:0,space:!1}),scroll:c,animate(){m!==null?clearTimeout(m):document.body.classList.add("q-body--layout-animate"),m=setTimeout(()=>{m=null,document.body.classList.remove("q-body--layout-animate")},155)},update(y,C,E){q[y][C]=E}};if(Ke(Ye,q),ve()>0){let E=function(){y=null,C.classList.remove("hide-scrollbar")},z=function(){if(y===null){if(C.scrollHeight>l.screen.height)return;C.classList.add("hide-scrollbar")}else clearTimeout(y);y=setTimeout(E,300)},A=function(j){y!==null&&j==="remove"&&(clearTimeout(y),E()),window[`${j}EventListener`]("resize",z)},y=null;const C=document.body;H(()=>e.container!==!0?"add":"remove",A),e.container!==!0&&A("add"),pt(()=>{A("remove")})}return()=>{const y=ke(n.default,[f(Zt,{onScroll:p}),f(Pe,{onResize:d})]),C=f("div",{class:v.value,style:g.value,ref:e.container===!0?void 0:o,tabindex:-1},y);return e.container===!0?f("div",{class:"q-layout-container overflow-hidden",ref:o},[f(Pe,{onResize:x}),f("div",{class:"absolute-full",style:b.value},[f("div",{class:"scroll",style:h.value},[C])])]):C}}}),Sn=(e,n)=>{const t=e.__vccOpts||e;for(const[l,o]of n)t[l]=o;return t};export{pn as A,Bt as B,Rt as C,dn as D,Ut as E,ve as F,yn as G,Qt as H,cn as I,Ft as J,Nt as K,jt as L,Pe as Q,hn as T,Sn as _,Le as a,rn as b,Tt as c,F as d,Pt as e,N as f,ln as g,gn as h,Vt as i,vn as j,bn as k,mn as l,qn as m,on as n,Ve as o,an as p,sn as q,fe as r,Ct as s,nn as t,It as u,He as v,St as w,un as x,fn as y,wn as z};
