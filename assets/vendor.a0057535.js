var Ot=Object.defineProperty;var mt=Object.getOwnPropertySymbols;var Lt=Object.prototype.hasOwnProperty,Pt=Object.prototype.propertyIsEnumerable;var It=(e,t,n)=>t in e?Ot(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,vt=(e,t)=>{for(var n in t||(t={}))Lt.call(t,n)&&It(e,n,t[n]);if(mt)for(var n of mt(t))Pt.call(t,n)&&It(e,n,t[n]);return e};function X(){}function Gt(e){return e&&typeof e=="object"&&typeof e.then=="function"}function Et(e){return e()}function ut(){return Object.create(null)}function J(e){e.forEach(Et)}function Tt(e){return typeof e=="function"}function jt(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Ht(e){return Object.keys(e).length===0}function Nt(e,...t){if(e==null)return X;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function ve(e,t,n){e.$$.on_destroy.push(Nt(t,n))}function be(e,t,n){return e.set(n),t}function ye(e,t){e.appendChild(t)}function Ee(e,t,n){e.insertBefore(t,n||null)}function qt(e){e.parentNode.removeChild(e)}function Be(e){return document.createElement(e)}function Bt(e){return document.createTextNode(e)}function Ce(){return Bt(" ")}function xe(){return Bt("")}function Qe(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function ke(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Wt(e){return Array.from(e.childNodes)}function Fe(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function De(e,t){e.value=t==null?"":t}function Me(e,t,n,s){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,s?"important":"")}function Se(e,t,n){e.classList[n?"add":"remove"](t)}let Z;function H(e){Z=e}function ot(){if(!Z)throw new Error("Function called outside component initialization");return Z}function Ue(e){ot().$$.on_mount.push(e)}function Re(e,t){ot().$$.context.set(e,t)}function ze(e){return ot().$$.context.get(e)}const $=[],bt=[],rt=[],ft=[],Yt=Promise.resolve();let ht=!1;function Xt(){ht||(ht=!0,Yt.then(gt))}function pt(e){rt.push(e)}function Oe(e){ft.push(e)}const At=new Set;let tt=0;function gt(){const e=Z;do{for(;tt<$.length;){const t=$[tt];tt++,H(t),Zt(t.$$)}for(H(null),$.length=0,tt=0;bt.length;)bt.pop()();for(let t=0;t<rt.length;t+=1){const n=rt[t];At.has(n)||(At.add(n),n())}rt.length=0}while($.length);for(;ft.length;)ft.pop()();ht=!1,At.clear(),H(e)}function Zt(e){if(e.fragment!==null){e.update(),J(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(pt)}}const it=new Set;let N;function Jt(){N={r:0,c:[],p:N}}function $t(){N.r||J(N.c),N=N.p}function _t(e,t){e&&e.i&&(it.delete(e),e.i(t))}function Ct(e,t,n,s){if(e&&e.o){if(it.has(e))return;it.add(e),N.c.push(()=>{it.delete(e),s&&(n&&e.d(1),s())}),e.o(t)}}function Le(e,t){const n=t.token={};function s(d,u,g,r){if(t.token!==n)return;t.resolved=r;let i=t.ctx;g!==void 0&&(i=i.slice(),i[g]=r);const a=d&&(t.current=d)(i);let A=!1;t.block&&(t.blocks?t.blocks.forEach((c,o)=>{o!==u&&c&&(Jt(),Ct(c,1,1,()=>{t.blocks[o]===c&&(t.blocks[o]=null)}),$t())}):t.block.d(1),a.c(),_t(a,1),a.m(t.mount(),t.anchor),A=!0),t.block=a,t.blocks&&(t.blocks[u]=a),A&&gt()}if(Gt(e)){const d=ot();if(e.then(u=>{H(d),s(t.then,1,t.value,u),H(null)},u=>{if(H(d),s(t.catch,2,t.error,u),H(null),!t.hasCatch)throw u}),t.current!==t.pending)return s(t.pending,0),!0}else{if(t.current!==t.then)return s(t.then,1,t.value,e),!0;t.resolved=e}}function Pe(e,t,n){const s=t.slice(),{resolved:d}=e;e.current===e.then&&(s[e.value]=d),e.current===e.catch&&(s[e.error]=d),e.block.p(s,n)}function Ge(e,t){Ct(e,1,1,()=>{t.delete(e.key)})}function Te(e,t,n,s,d,u,g,r,i,a,A,c){let o=e.length,f=u.length,l=o;const _={};for(;l--;)_[e[l].key]=l;const h=[],I=new Map,w=new Map;for(l=f;l--;){const x=c(d,u,l),D=n(x);let E=g.get(D);E?s&&E.p(x,t):(E=a(D,x),E.c()),I.set(D,h[l]=E),D in _&&w.set(D,Math.abs(l-_[D]))}const v=new Set,C=new Set;function F(x){_t(x,1),x.m(r,A),g.set(x.key,x),A=x.first,f--}for(;o&&f;){const x=h[f-1],D=e[o-1],E=x.key,k=D.key;x===D?(A=x.first,o--,f--):I.has(k)?!g.has(E)||v.has(E)?F(x):C.has(k)?o--:w.get(E)>w.get(k)?(C.add(E),F(x)):(v.add(k),o--):(i(D,g),o--)}for(;o--;){const x=e[o];I.has(x.key)||i(x,g)}for(;f;)F(h[f-1]);return h}const Kt=new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]),Vt={'"':"&quot;","'":"&#39;","&":"&amp;","<":"&lt;",">":"&gt;"};function te(e){return String(e).replace(/["'&<>]/g,t=>Vt[t])}function je(e,t){let n="";for(let s=0;s<e.length;s+=1)n+=t(e[s],s);return n}function He(e,t){if(!e||!e.$$render)throw t==="svelte:component"&&(t+=" this={...}"),new Error(`<${t}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);return e}let lt;function Ne(e){function t(n,s,d,u,g){const r=Z,i={on_destroy:lt,context:new Map(g||(r?r.$$.context:[])),on_mount:[],before_update:[],after_update:[],callbacks:ut()};H({$$:i});const a=e(n,s,d,u);return H(r),a}return{render:(n={},{$$slots:s={},context:d=new Map}={})=>{lt=[];const u={title:"",head:"",css:new Set},g=t(u,n,{},s,d);return J(lt),{html:g,css:{code:Array.from(u.css).map(r=>r.code).join(`
`),map:null},head:u.title+u.head}},$$render:t}}function qe(e,t,n){return t==null||n&&!t?"":` ${e}${t===!0&&Kt.has(e)?"":`=${typeof t=="string"?JSON.stringify(te(t)):`"${t}"`}`}`}function ee(e){return Object.keys(e).filter(t=>e[t]).map(t=>`${t}: ${e[t]};`).join(" ")}function We(e){const t=ee(e);return t?` style="${t}"`:""}function Ye(e,t,n){const s=e.$$.props[t];s!==void 0&&(e.$$.bound[s]=n,n(e.$$.ctx[s]))}function Xe(e){e&&e.c()}function ne(e,t,n,s){const{fragment:d,on_mount:u,on_destroy:g,after_update:r}=e.$$;d&&d.m(t,n),s||pt(()=>{const i=u.map(Et).filter(Tt);g?g.push(...i):J(i),e.$$.on_mount=[]}),r.forEach(pt)}function re(e,t){const n=e.$$;n.fragment!==null&&(J(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ie(e,t){e.$$.dirty[0]===-1&&($.push(e),Xt(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Ze(e,t,n,s,d,u,g,r=[-1]){const i=Z;H(e);const a=e.$$={fragment:null,ctx:null,props:u,update:X,not_equal:d,bound:ut(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(i?i.$$.context:[])),callbacks:ut(),dirty:r,skip_bound:!1,root:t.target||i.$$.root};g&&g(a.root);let A=!1;if(a.ctx=n?n(e,t.props||{},(c,o,...f)=>{const l=f.length?f[0]:o;return a.ctx&&d(a.ctx[c],a.ctx[c]=l)&&(!a.skip_bound&&a.bound[c]&&a.bound[c](l),A&&ie(e,c)),o}):[],a.update(),A=!0,J(a.before_update),a.fragment=s?s(a.ctx):!1,t.target){if(t.hydrate){const c=Wt(t.target);a.fragment&&a.fragment.l(c),c.forEach(qt)}else a.fragment&&a.fragment.c();t.intro&&_t(e.$$.fragment),ne(e,t.target,t.anchor,t.customElement),gt()}H(i)}class Je{$destroy(){re(this,1),this.$destroy=X}$on(t,n){const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const d=s.indexOf(n);d!==-1&&s.splice(d,1)}}$set(t){this.$$set&&!Ht(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const W=[];function $e(e,t=X){let n;const s=new Set;function d(r){if(jt(e,r)&&(e=r,n)){const i=!W.length;for(const a of s)a[1](),W.push(a,e);if(i){for(let a=0;a<W.length;a+=2)W[a][0](W[a+1]);W.length=0}}}function u(r){d(r(e))}function g(r,i=X){const a=[r,i];return s.add(a),s.size===1&&(n=t(d)||X),r(e),()=>{s.delete(a),s.size===0&&(n(),n=null)}}return{set:d,update:u,subscribe:g}}/*!
  * PhotoSwipe Lightbox 5.1.8 - https://photoswipe.com
  * (c) 2022 Dmitry Semenov
  */function dt(e,t,n){const s=document.createElement(t||"div");return e&&(s.className=e),n&&n.appendChild(s),s}function xt(e,t,n){e.style.width=typeof t=="number"?t+"px":t,e.style.height=typeof n=="number"?n+"px":n}const Y={IDLE:"idle",LOADING:"loading",LOADED:"loaded",ERROR:"error"};function ae(e){if(e.which===2||e.ctrlKey||e.metaKey||e.altKey||e.shiftKey)return!0}function at(e,t,n=document){let s=[];if(e instanceof Element)s=[e];else if(e instanceof NodeList||Array.isArray(e))s=Array.from(e);else{const d=typeof e=="string"?e:t;d&&(s=Array.from(n.querySelectorAll(d)))}return s}function se(e){return typeof e=="string"?import(e):e}class oe{constructor(t,n){this.type=t,n&&Object.assign(this,n)}preventDefault(){this.defaultPrevented=!0}}class ce{constructor(){this._listeners={},this._filters={}}addFilter(t,n,s=100){this._filters[t]||(this._filters[t]=[]),this._filters[t].push({fn:n,priority:s}),this._filters[t].sort((d,u)=>d.priority-u.priority),this.pswp&&this.pswp.addFilter(t,n,s)}removeFilter(t,n){this._filters[t]&&(this._filters[t]=this._filters[t].filter(s=>s.fn!==n)),this.pswp&&this.pswp.removeFilter(t,n)}applyFilters(t,...n){return this._filters[t]&&this._filters[t].forEach(s=>{n[0]=s.fn.apply(this,n)}),n[0]}on(t,n){this._listeners[t]||(this._listeners[t]=[]),this._listeners[t].push(n),this.pswp&&this.pswp.on(t,n)}off(t,n){this._listeners[t]&&(this._listeners[t]=this._listeners[t].filter(s=>n!==s)),this.pswp&&this.pswp.off(t,n)}dispatch(t,n){if(this.pswp)return this.pswp.dispatch(t,n);const s=new oe(t,n);return this._listeners&&this._listeners[t]&&this._listeners[t].forEach(d=>{d.call(this,s)}),s}}class Qt{constructor(t,n){this.options=n.options,this.instance=n,this.data=t,this.width=Number(this.data.w)||Number(this.data.width)||0,this.height=Number(this.data.h)||Number(this.data.height)||0,this.isAttached=!1,this.state=Y.IDLE}setSlide(t){this.slide=t,this.pswp=t.pswp}load(){this.element||(this.element=dt("pswp__content"),this.element.style.position="absolute",this.element.style.left=0,this.element.style.top=0,this.element.innerHTML=this.data.html||"")}isZoomable(){return!1}usePlaceholder(){return!1}activate(){}deactivate(){}setDisplayedSize(t,n){this.element&&xt(this.element,t,n)}onLoaded(){this.state=Y.LOADED,this.slide&&this.pswp.dispatch("loadComplete",{slide:this.slide})}isLoading(){return this.state===Y.LOADING}keepPlaceholder(){return this.isLoading()}onError(){this.state=Y.ERROR,this.slide&&(this.pswp.dispatch("loadComplete",{slide:this.slide,isError:!0}),this.pswp.dispatch("loadError",{slide:this.slide}))}getErrorElement(){return!1}remove(){this.isAttached=!1,this.element&&this.element.parentNode&&this.element.remove()}appendTo(t){this.isAttached=!0,this.element&&!this.element.parentNode&&t.appendChild(this.element)}destroy(){}}class Ae extends Qt{load(){if(this.element)return;const t=this.data.src;!t||(this.element=dt("pswp__img","img"),this.data.srcset&&(this.element.srcset=this.data.srcset),this.element.src=t,this.element.alt=this.data.alt||"",this.state=Y.LOADING,this.element.complete?this.onLoaded():(this.element.onload=()=>{this.onLoaded()},this.element.onerror=()=>{this.onError()}))}setDisplayedSize(t,n){const s=this.element;s&&(xt(s,t,"auto"),s.srcset&&(!s.dataset.largestUsedSize||t>s.dataset.largestUsedSize)&&(s.sizes=t+"px",s.dataset.largestUsedSize=t),this.slide&&this.pswp.dispatch("imageSizeChange",{slide:this.slide,width:t,height:n}))}isZoomable(){return this.state!==Y.ERROR}usePlaceholder(){return!0}lazyLoad(){this.load()}destroy(){this.element&&(this.element.onload=null,this.element.onerror=null,this.element=null)}appendTo(t){this.isAttached=!0,this.slide&&!this.slide.isActive&&"decode"in this.element?(this.isDecoding=!0,requestAnimationFrame(()=>{this.element&&this.element.decode().then(()=>{this.isDecoding=!1,requestAnimationFrame(()=>{this.appendImageTo(t)})}).catch(()=>{})})):this.appendImageTo(t)}activate(){this.slide&&this.slide.container&&this.isDecoding&&this.appendImageTo(this.slide.container)}getErrorElement(){const t=dt("pswp__error-msg-container");t.innerHTML=this.options.errorMsg;const n=t.querySelector("a");return n&&(n.href=this.data.src),t}appendImageTo(t){this.element&&!this.element.parentNode&&this.isAttached&&t.appendChild(this.element)}}class le extends ce{constructor(){super();this.contentTypes={image:Ae,html:Qt}}getNumItems(){let t;const{dataSource:n}=this.options;n?n.length?t=n.length:n.gallery&&(n.items||(n.items=this._getGalleryDOMElements(n.gallery)),n.items&&(t=n.items.length)):t=0;const s=this.dispatch("numItems",{dataSource:n,numItems:t});return this.applyFilters("numItems",s.numItems,n)}addContentType(t,n){this.contentTypes[t]=n}getContentClass(t){if(t.type)return this.contentTypes[t.type];if(t.src)return this.contentTypes.image;if(t.html)return this.contentTypes.html}createContentFromData(t){const n=this.getContentClass(t);return n?new n(t,this):!1}getItemData(t){const{dataSource:n}=this.options;let s;Array.isArray(n)?s=n[t]:n&&n.gallery&&(n.items||(n.items=this._getGalleryDOMElements(n.gallery)),s=n.items[t]);let d=s;d instanceof Element&&(d=this._domElementToItemData(d));const u=this.dispatch("itemData",{itemData:d||{},index:t});return this.applyFilters("itemData",u.itemData,t)}_getGalleryDOMElements(t){return this.options.children||this.options.childSelector?at(this.options.children,this.options.childSelector,t)||[]:[t]}_domElementToItemData(t){const n={element:t},s=t.tagName==="A"?t:t.querySelector("a");if(s){n.src=s.dataset.pswpSrc||s.href,n.srcset=s.dataset.pswpSrcset,n.w=parseInt(s.dataset.pswpWidth,10),n.h=parseInt(s.dataset.pswpHeight,10),s.dataset.pswpType&&(n.type=s.dataset.pswpType);const d=t.querySelector("img");d&&(n.msrc=d.currentSrc||d.src,n.alt=d.getAttribute("alt")),(s.dataset.pswpCropped||s.dataset.cropped)&&(n.thumbCropped=!0)}return this.applyFilters("domItemData",n,t,s),n}}function ue(e,t){if(e.getViewportSizeFn){const n=e.getViewportSizeFn(e,t);if(n)return n}return{x:document.documentElement.clientWidth,y:window.innerHeight}}function et(e,t,n){let s;if(t.paddingFn)s=t.paddingFn(n)[e];else if(t.padding)s=t.padding[e];else{const d="padding"+e[0].toUpperCase()+e.slice(1);t[d]&&(s=t[d])}return s||0}function fe(e,t){return{x:t.x-et("left",e,t)-et("right",e,t),y:t.y-et("top",e,t)-et("bottom",e,t)}}const yt=4e3;class he{constructor(t,n,s,d){this.pswp=d,this.options=t,this.itemData=n,this.index=s}update(t,n,s){this.elementSize={x:t,y:n},this.panAreaSize=s;const d=this.panAreaSize.x/this.elementSize.x,u=this.panAreaSize.y/this.elementSize.y;this.fit=Math.min(1,d<u?d:u),this.fill=Math.min(1,d>u?d:u),this.vFill=Math.min(1,u),this.initial=this._getInitial(),this.secondary=this._getSecondary(),this.max=Math.max(this.initial,this.secondary,this._getMax()),this.min=Math.min(this.fit,this.initial,this.secondary),this.pswp&&this.pswp.dispatch("zoomLevelsUpdate",{zoomLevels:this,slideData:this.itemData})}_parseZoomLevelOption(t){const n=this.options[t+"ZoomLevel"];if(!!n)return typeof n=="function"?n(this):n==="fill"?this.fill:n==="fit"?this.fit:Number(n)}_getSecondary(){let t=this._parseZoomLevelOption("secondary");return t||(t=Math.min(1,this.fit*3),t*this.elementSize.x>yt&&(t=yt/this.elementSize.x),t)}_getInitial(){return this._parseZoomLevelOption("initial")||this.fit}_getMax(){const t=this._parseZoomLevelOption("max");return t||Math.max(1,this.fit*4)}}function pe(e,t){return e&&e.src?e.src+"_"+t:t}function de(e,t,n){const s=t.createContentFromData(e);if(!s||!s.lazyLoad)return;s.key=pe(e,n);const{options:d}=t,u=t.viewportSize||ue(d),g=fe(d,u),r=new he(d,e,-1);return r.update(s.width,s.height,g),s.lazyLoad(),s.setDisplayedSize(Math.ceil(s.width*r.initial),Math.ceil(s.height*r.initial)),s}function ge(e,t){const n=t.getItemData(e);if(!t.dispatch("lazyLoadSlide",{index:e,itemData:n}).defaultPrevented)return de(n,t,e)}class Ke extends le{constructor(t){super();this.options=t||{},this._uid=0}init(){this.onThumbnailsClick=this.onThumbnailsClick.bind(this),at(this.options.gallery,this.options.gallerySelector).forEach(t=>{t.addEventListener("click",this.onThumbnailsClick,!1)})}onThumbnailsClick(t){if(ae(t)||window.pswp||window.navigator.onLine===!1)return;let n={x:t.clientX,y:t.clientY};!n.x&&!n.y&&(n=null);const s=this.getClickedIndex(t),d={gallery:t.currentTarget};s>=0&&(t.preventDefault(),this.loadAndOpen(s,d,n))}getClickedIndex(t){if(this.options.getClickedIndexFn)return this.options.getClickedIndexFn.call(this,t);const n=t.target,d=at(this.options.children,this.options.childSelector,t.currentTarget).findIndex(u=>u===n||u.contains(n));return d!==-1?d:this.options.children||this.options.childSelector?-1:0}loadAndOpen(t,n,s){return window.pswp?!1:(this.options.index=t,this.options.initialPointerPos=s,this.shouldOpen=!0,this.preload(t,n),!0)}preload(t,n){const{options:s}=this;n&&(s.dataSource=n);const d=[se(s.pswpModule)];typeof s.openPromise=="function"&&d.push(s.openPromise()),s.preloadFirstSlide!==!1&&t>=0&&(this._preloadedContent=ge(t,this));const u=++this._uid;Promise.all(d).then(g=>{if(this.shouldOpen){const r=g[0];this._openPhotoswipe(r,u)}})}_openPhotoswipe(t,n){if(n!==this._uid&&this.shouldOpen||(this.shouldOpen=!1,window.pswp))return;const s=typeof t=="object"?new t.default(null,this.options):new t(null,this.options);this.pswp=s,window.pswp=s,Object.keys(this._listeners).forEach(d=>{this._listeners[d].forEach(u=>{s.on(d,u)})}),Object.keys(this._filters).forEach(d=>{this._filters[d].forEach(u=>{s.addFilter(d,u.fn,u.priority)})}),s.contentTypes=vt({},this.contentTypes),this._preloadedContent&&(s.contentLoader.addToCache(this._preloadedContent),this._preloadedContent=null),s.on("destroy",()=>{this.pswp=null,window.pswp=null}),s.init()}destroy(){this.pswp&&this.pswp.close(),this.shouldOpen=!1,this._listeners=null,at(this.options.gallery,this.options.gallerySelector).forEach(t=>{t.removeEventListener("click",this.onThumbnailsClick,!1)})}}/*!
  * PhotoSwipe 5.1.8 - https://photoswipe.com
  * (c) 2022 Dmitry Semenov
  */let _e=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>{_e=!0}}))}catch{}var Ve=`/*! PhotoSwipe main CSS by Dmytro Semenov | photoswipe.com */

.pswp {
  --pswp-bg: #000;
  --pswp-placeholder-bg: #222;
  --pswp-error-text-color: #f7f7f7;

  --pswp-root-z-index: 100000;
  
  --pswp-preloader-color: rgba(79, 79, 79, 0.4);
  --pswp-preloader-color-secondary: rgba(255, 255, 255, 0.9);
  
  /* defined via js:
  --pswp-transition-duration: 333ms; */
  
  --pswp-icon-color: #fff;
  --pswp-icon-color-secondary: #4f4f4f;
  --pswp-icon-stroke-color: #4f4f4f;
  --pswp-icon-stroke-width: 2px;
}


/*
	Styles for basic PhotoSwipe (pswp) functionality (sliding area, open/close transitions)
*/

.pswp {
	position: fixed;
	z-index: var(--pswp-root-z-index);
	display: none;
	touch-action: none;
	outline: 0;
	opacity: 0.003;
	contain: layout style size;
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

/* Prevents focus outline on the root element,
  (it may be focused initially) */
.pswp:focus {
  outline: 0;
}

.pswp * {
  box-sizing: border-box;
}

.pswp img {
  max-width: none;
}

.pswp--open {
	display: block;
}

.pswp,
.pswp__bg {
	transform: translateZ(0);
	will-change: opacity;
}

.pswp__bg {
  opacity: 0.005;
	background: var(--pswp-bg);
}

.pswp,
.pswp__scroll-wrap {
	overflow: hidden;
}

.pswp,
.pswp__scroll-wrap,
.pswp__bg,
.pswp__container,
.pswp__item,
.pswp__img,
.pswp__zoom-wrap {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

.pswp {
	position: fixed;
}

.pswp__img,
.pswp__zoom-wrap {
	width: auto;
	height: auto;
}

.pswp--click-to-zoom.pswp--zoom-allowed .pswp__img {
	cursor: -webkit-zoom-in;
	cursor: -moz-zoom-in;
	cursor: zoom-in;
}

.pswp--click-to-zoom.pswp--zoomed-in .pswp__img {
	cursor: move;
	cursor: -webkit-grab;
	cursor: -moz-grab;
	cursor: grab;
}

.pswp--click-to-zoom.pswp--zoomed-in .pswp__img:active {
  cursor: -webkit-grabbing;
  cursor: -moz-grabbing;
  cursor: grabbing;
}

/* :active to override grabbing cursor */
.pswp--no-mouse-drag.pswp--zoomed-in .pswp__img,
.pswp--no-mouse-drag.pswp--zoomed-in .pswp__img:active,
.pswp__img {
	cursor: -webkit-zoom-out;
	cursor: -moz-zoom-out;
	cursor: zoom-out;
}


/* Prevent selection and tap highlights */
.pswp__container,
.pswp__img,
.pswp__button {
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
}

.pswp__item {
	/* z-index for fade transition */
	z-index: 1;
	overflow: hidden;
}

.pswp__hidden {
	display: none !important;
}


/*

  PhotoSwipe UI

*/

/*
	Error message appears when image is not loaded
	(JS option errorMsg controls markup)
*/
.pswp__error-msg {
	position: absolute;
	top: 50%;
	left: 0;
	width: 100%;
	padding: 0 10px;
	margin-top: -0.5em;
	font-size: 1em;
	line-height: 1;
	color: var(--pswp-error-text-color);
	text-align: center;
}

.pswp__error-msg a {
  color: var(--pswp-error-text-color);
  text-decoration: underline;
}

/*
class pswp__hide-on-close is applied to elements that
should hide (for example fade out) when PhotoSwipe is closed
and show (for example fade in) when PhotoSwipe is opened
 */
.pswp .pswp__hide-on-close {
	opacity: 0.005;
	will-change: opacity;
	transition: opacity var(--pswp-transition-duration) cubic-bezier(0.4, 0, 0.22, 1);
	z-index: 10; /* always overlap slide content */
	pointer-events: none; /* hidden elements should not be clickable */
}

/* class pswp--ui-visible is added when opening or closing transition starts */
.pswp--ui-visible .pswp__hide-on-close {
	opacity: 1;
	pointer-events: auto;
}

/* <button> styles, including css reset */
.pswp__button {
	position: relative;
	display: block;
	width: 50px;
	height: 60px;
	padding: 0;
	margin: 0;
	overflow: hidden;
	cursor: pointer;
	background: none;
	border: 0;
	box-shadow: none;
	opacity: 0.85;
	-webkit-appearance: none;
	-webkit-touch-callout: none;
}

.pswp__button:hover,
.pswp__button:active,
.pswp__button:focus {
  transition: none;
  padding: 0;
  background: none;
  border: 0;
  box-shadow: none;
  opacity: 1;
}

.pswp__button:disabled {
  opacity: 0.3;
  cursor: auto;
}

.pswp__icn {
  fill: var(--pswp-icon-color);
  color: var(--pswp-icon-color-secondary);
}

.pswp__icn {
  position: absolute;
  top: 14px;
  left: 9px;
  width: 32px;
  height: 32px;
  overflow: hidden;
  pointer-events: none;
}

.pswp__icn-shadow {
  stroke: var(--pswp-icon-stroke-color);
  stroke-width: var(--pswp-icon-stroke-width);
  fill: none;
}

.pswp__icn:focus {
	outline: 0;
}

/*
	div element that matches size of large image,
	large image loads on top of it,
	used when msrc is not provided
*/
div.pswp__img--placeholder,
.pswp__img--with-bg {
	background: var(--pswp-placeholder-bg);
}

.pswp__top-bar {
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 60px;
	display: flex;
  flex-direction: row;
  justify-content: flex-end;
	z-index: 10;

	/* allow events to pass through top bar itself */
	pointer-events: none !important;
}
.pswp__top-bar > * {
  pointer-events: auto;
  /* this makes transition significantly more smooth,
     even though inner elements are not animated */
  will-change: opacity;
}


/*

  Close button

*/
.pswp__button--close {
  margin-right: 6px;
}


/*

  Arrow buttons

*/
.pswp__button--arrow {
  position: absolute;
  top: 0;
  width: 75px;
  height: 100px;
  top: 50%;
  margin-top: -50px;
}

.pswp__button--arrow:disabled {
  display: none;
  cursor: default;
}

.pswp__button--arrow .pswp__icn {
  top: 50%;
  margin-top: -30px;
  width: 60px;
  height: 60px;
  background: none;
  border-radius: 0;
}

.pswp--one-slide .pswp__button--arrow {
  display: none;
}

/* hide arrows on touch screens */
.pswp--touch .pswp__button--arrow {
  visibility: hidden;
}

/* show arrows only after mouse was used */
.pswp--has_mouse .pswp__button--arrow {
  visibility: visible;
}

.pswp__button--arrow--prev {
  right: auto;
  left: 0px;
}

.pswp__button--arrow--next {
  right: 0px;
}
.pswp__button--arrow--next .pswp__icn {
  left: auto;
  right: 14px;
  /* flip horizontally */
  transform: scale(-1, 1);
}

/*

  Zoom button

*/
.pswp__button--zoom {
  display: none;
}

.pswp--zoom-allowed .pswp__button--zoom {
  display: block;
}

/* "+" => "-" */
.pswp--zoomed-in .pswp__zoom-icn-bar-v {
  display: none;
}


/*

  Loading indicator

*/
.pswp__preloader {
  position: relative;
  overflow: hidden;
  width: 50px;
  height: 60px;
  margin-right: auto;
}

.pswp__preloader .pswp__icn {
  opacity: 0;
  transition: opacity 0.2s linear;
  animation: pswp-clockwise 600ms linear infinite;
}

.pswp__preloader--active .pswp__icn {
  opacity: 0.85;
}

@keyframes pswp-clockwise {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}


/*

  "1 of 10" counter

*/
.pswp__counter {
  height: 30px;
  margin: 15px 0 0 20px;
  font-size: 14px;
  line-height: 30px;
  color: var(--pswp-icon-color);
  text-shadow: 1px 1px 3px var(--pswp-icon-color-secondary);
  opacity: 0.85;
}

.pswp--one-slide .pswp__counter {
  display: none;
}`;/*! image-blob-reduce 4.1.0 https://github.com/nodeca/image-blob-reduce @license MIT */function nt(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var ct={};ct.assign=function(t){for(var n,s=1;s<arguments.length;s++){n=Object(arguments[s]);for(var d in n)Object.prototype.hasOwnProperty.call(n,d)&&(t[d]=n[d])}return t};function kt(e,t){var n={};return t.forEach(function(s){Object.prototype.hasOwnProperty.call(e,s)&&(n[s]=e[s])}),n}function we(e){return kt(e,["alpha","unsharpAmount","unsharpRadius","unsharpThreshold","cancelToken"])}ct.pick=kt;ct.pick_pica_resize_options=we;var Ft={exports:{}};/*!

pica
https://github.com/nodeca/pica

*/(function(e,t){(function(n){e.exports=n()})(function(){return function(){function n(s,d,u){function g(a,A){if(!d[a]){if(!s[a]){var c=typeof nt=="function"&&nt;if(!A&&c)return c(a,!0);if(r)return r(a,!0);var o=new Error("Cannot find module '"+a+"'");throw o.code="MODULE_NOT_FOUND",o}var f=d[a]={exports:{}};s[a][0].call(f.exports,function(l){var _=s[a][1][l];return g(_||l)},f,f.exports,n,s,d,u)}return d[a].exports}for(var r=typeof nt=="function"&&nt,i=0;i<u.length;i++)g(u[i]);return g}return n}()({1:[function(n,s,d){var u=n("multimath"),g=n("./mm_unsharp_mask"),r=n("./mm_resize");function i(a){var A=a||[],c={js:A.indexOf("js")>=0,wasm:A.indexOf("wasm")>=0};u.call(this,c),this.features={js:c.js,wasm:c.wasm&&this.has_wasm()},this.use(g),this.use(r)}i.prototype=Object.create(u.prototype),i.prototype.constructor=i,i.prototype.resizeAndUnsharp=function(A,c){var o=this.resize(A,c);return A.unsharpAmount&&this.unsharp_mask(o,A.toWidth,A.toHeight,A.unsharpAmount,A.unsharpRadius,A.unsharpThreshold),o},s.exports=i},{"./mm_resize":4,"./mm_unsharp_mask":9,multimath:19}],2:[function(n,s,d){function u(c){return c<0?0:c>255?255:c}function g(c){return c>=0?c:0}function r(c,o,f,l,_,h){var I,w,v,C,F,x,D,E,k,M,Q,O=0,S=0;for(k=0;k<l;k++){for(F=0,M=0;M<_;M++){for(x=h[F++],D=h[F++],E=O+x*4|0,I=w=v=C=0;D>0;D--)Q=h[F++],C=C+Q*c[E+3]|0,v=v+Q*c[E+2]|0,w=w+Q*c[E+1]|0,I=I+Q*c[E]|0,E=E+4|0;o[S+3]=g(C>>7),o[S+2]=g(v>>7),o[S+1]=g(w>>7),o[S]=g(I>>7),S=S+l*4|0}S=(k+1)*4|0,O=(k+1)*f*4|0}}function i(c,o,f,l,_,h){var I,w,v,C,F,x,D,E,k,M,Q,O=0,S=0;for(k=0;k<l;k++){for(F=0,M=0;M<_;M++){for(x=h[F++],D=h[F++],E=O+x*4|0,I=w=v=C=0;D>0;D--)Q=h[F++],C=C+Q*c[E+3]|0,v=v+Q*c[E+2]|0,w=w+Q*c[E+1]|0,I=I+Q*c[E]|0,E=E+4|0;I>>=7,w>>=7,v>>=7,C>>=7,o[S+3]=u(C+(1<<13)>>14),o[S+2]=u(v+(1<<13)>>14),o[S+1]=u(w+(1<<13)>>14),o[S]=u(I+(1<<13)>>14),S=S+l*4|0}S=(k+1)*4|0,O=(k+1)*f*4|0}}function a(c,o,f,l,_,h){var I,w,v,C,F,x,D,E,k,M,Q,O,S=0,G=0;for(M=0;M<l;M++){for(x=0,Q=0;Q<_;Q++){for(D=h[x++],E=h[x++],k=S+D*4|0,I=w=v=C=0;E>0;E--)O=h[x++],F=c[k+3],C=C+O*F|0,v=v+O*c[k+2]*F|0,w=w+O*c[k+1]*F|0,I=I+O*c[k]*F|0,k=k+4|0;v=v/255|0,w=w/255|0,I=I/255|0,o[G+3]=g(C>>7),o[G+2]=g(v>>7),o[G+1]=g(w>>7),o[G]=g(I>>7),G=G+l*4|0}G=(M+1)*4|0,S=(M+1)*f*4|0}}function A(c,o,f,l,_,h){var I,w,v,C,F,x,D,E,k,M,Q,O=0,S=0;for(k=0;k<l;k++){for(F=0,M=0;M<_;M++){for(x=h[F++],D=h[F++],E=O+x*4|0,I=w=v=C=0;D>0;D--)Q=h[F++],C=C+Q*c[E+3]|0,v=v+Q*c[E+2]|0,w=w+Q*c[E+1]|0,I=I+Q*c[E]|0,E=E+4|0;I>>=7,w>>=7,v>>=7,C>>=7,C=u(C+(1<<13)>>14),C>0&&(I=I*255/C|0,w=w*255/C|0,v=v*255/C|0),o[S+3]=C,o[S+2]=u(v+(1<<13)>>14),o[S+1]=u(w+(1<<13)>>14),o[S]=u(I+(1<<13)>>14),S=S+l*4|0}S=(k+1)*4|0,O=(k+1)*f*4|0}}s.exports={convolveHor:r,convolveVert:i,convolveHorWithPre:a,convolveVertWithPre:A}},{}],3:[function(n,s,d){s.exports="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"},{}],4:[function(n,s,d){s.exports={name:"resize",fn:n("./resize"),wasm_fn:n("./resize_wasm"),wasm_src:n("./convolve_wasm_base64")}},{"./convolve_wasm_base64":3,"./resize":5,"./resize_wasm":8}],5:[function(n,s,d){var u=n("./resize_filter_gen"),g=n("./convolve"),r=g.convolveHor,i=g.convolveVert,a=g.convolveHorWithPre,A=g.convolveVertWithPre;function c(f,l,_){for(var h=3,I=l*_*4|0;h<I;){if(f[h]!==255)return!0;h=h+4|0}return!1}function o(f,l,_){for(var h=3,I=l*_*4|0;h<I;)f[h]=255,h=h+4|0}s.exports=function(l){var _=l.src,h=l.width,I=l.height,w=l.toWidth,v=l.toHeight,C=l.scaleX||l.toWidth/l.width,F=l.scaleY||l.toHeight/l.height,x=l.offsetX||0,D=l.offsetY||0,E=l.dest||new Uint8Array(w*v*4),k=typeof l.filter=="undefined"?"mks2013":l.filter,M=u(k,h,w,C,x),Q=u(k,I,v,F,D),O=new Uint16Array(w*I*4);return c(_,h,I)?(a(_,O,h,I,w,M),A(O,E,I,w,v,Q)):(r(_,O,h,I,w,M),i(O,E,I,w,v,Q),o(E,w,v)),E}},{"./convolve":2,"./resize_filter_gen":6}],6:[function(n,s,d){var u=n("./resize_filter_info"),g=14;function r(i){return Math.round(i*((1<<g)-1))}s.exports=function(a,A,c,o,f){var l=u.filter[a].fn,_=1/o,h=Math.min(1,o),I=u.filter[a].win/h,w,v,C,F,x,D,E,k,M,Q,O,S,G,L,p,b,m,B=Math.floor((I+1)*2),y=new Int16Array((B+2)*c),z=0,U=!y.subarray||!y.set;for(w=0;w<c;w++){for(v=(w+.5)*_+f,C=Math.max(0,Math.floor(v-I)),F=Math.min(A-1,Math.ceil(v+I)),x=F-C+1,D=new Float32Array(x),E=new Int16Array(x),k=0,M=C,Q=0;M<=F;M++,Q++)O=l((M+.5-v)*h),k+=O,D[Q]=O;for(S=0,Q=0;Q<D.length;Q++)G=D[Q]/k,S+=G,E[Q]=r(G);for(E[c>>1]+=r(1-S),L=0;L<E.length&&E[L]===0;)L++;if(L<E.length){for(p=E.length-1;p>0&&E[p]===0;)p--;if(b=C+L,m=p-L+1,y[z++]=b,y[z++]=m,!U)y.set(E.subarray(L,p+1),z),z+=m;else for(Q=L;Q<=p;Q++)y[z++]=E[Q]}else y[z++]=0,y[z++]=0}return y}},{"./resize_filter_info":7}],7:[function(n,s,d){var u={box:{win:.5,fn:function(r){return r<0&&(r=-r),r<.5?1:0}},hamming:{win:1,fn:function(r){if(r<0&&(r=-r),r>=1)return 0;if(r<11920929e-14)return 1;var i=r*Math.PI;return Math.sin(i)/i*(.54+.46*Math.cos(i/1))}},lanczos2:{win:2,fn:function(r){if(r<0&&(r=-r),r>=2)return 0;if(r<11920929e-14)return 1;var i=r*Math.PI;return Math.sin(i)/i*Math.sin(i/2)/(i/2)}},lanczos3:{win:3,fn:function(r){if(r<0&&(r=-r),r>=3)return 0;if(r<11920929e-14)return 1;var i=r*Math.PI;return Math.sin(i)/i*Math.sin(i/3)/(i/3)}},mks2013:{win:2.5,fn:function(r){return r<0&&(r=-r),r>=2.5?0:r>=1.5?-.125*(r-2.5)*(r-2.5):r>=.5?.25*(4*r*r-11*r+7):1.0625-1.75*r*r}}};s.exports={filter:u,f2q:{box:0,hamming:1,lanczos2:2,lanczos3:3},q2f:["box","hamming","lanczos2","lanczos3"]}},{}],8:[function(n,s,d){var u=n("./resize_filter_gen");function g(c,o,f){for(var l=3,_=o*f*4|0;l<_;){if(c[l]!==255)return!0;l=l+4|0}return!1}function r(c,o,f){for(var l=3,_=o*f*4|0;l<_;)c[l]=255,l=l+4|0}function i(c){return new Uint8Array(c.buffer,0,c.byteLength)}var a=!0;try{a=new Uint32Array(new Uint8Array([1,0,0,0]).buffer)[0]===1}catch{}function A(c,o,f){if(a){o.set(i(c),f);return}for(var l=f,_=0;_<c.length;_++){var h=c[_];o[l++]=h&255,o[l++]=h>>8&255}}s.exports=function(o){var f=o.src,l=o.width,_=o.height,h=o.toWidth,I=o.toHeight,w=o.scaleX||o.toWidth/o.width,v=o.scaleY||o.toHeight/o.height,C=o.offsetX||0,F=o.offsetY||0,x=o.dest||new Uint8Array(h*I*4),D=typeof o.filter=="undefined"?"mks2013":o.filter,E=u(D,l,h,w,C),k=u(D,_,I,v,F),M=0,Q=Math.max(f.byteLength,x.byteLength),O=this.__align(M+Q),S=_*h*4*2,G=this.__align(O+S),L=this.__align(G+E.byteLength),p=L+k.byteLength,b=this.__instance("resize",p),m=new Uint8Array(this.__memory.buffer),B=new Uint32Array(this.__memory.buffer),y=new Uint32Array(f.buffer);B.set(y),A(E,m,G),A(k,m,L);var z=b.exports.convolveHV||b.exports._convolveHV;g(f,l,_)?z(G,L,O,l,_,h,I,1):(z(G,L,O,l,_,h,I,0),r(x,h,I));var U=new Uint32Array(x.buffer);return U.set(new Uint32Array(this.__memory.buffer,0,I*h)),x}},{"./resize_filter_gen":6}],9:[function(n,s,d){s.exports={name:"unsharp_mask",fn:n("./unsharp_mask"),wasm_fn:n("./unsharp_mask_wasm"),wasm_src:n("./unsharp_mask_wasm_base64")}},{"./unsharp_mask":10,"./unsharp_mask_wasm":11,"./unsharp_mask_wasm_base64":12}],10:[function(n,s,d){var u=n("glur/mono16");function g(r,i,a){for(var A=i*a,c=new Uint16Array(A),o,f,l,_,h=0;h<A;h++)o=r[4*h],f=r[4*h+1],l=r[4*h+2],_=o>=f&&o>=l?o:f>=l&&f>=o?f:l,c[h]=_<<8;return c}s.exports=function(i,a,A,c,o,f){var l,_,h,I,w;if(!(c===0||o<.5)){o>2&&(o=2);var v=g(i,a,A),C=new Uint16Array(v);u(C,a,A,o);for(var F=c/100*4096+.5|0,x=f<<8,D=a*A,E=0;E<D;E++)l=v[E],I=l-C[E],Math.abs(I)>=x&&(_=l+(F*I+2048>>12),_=_>65280?65280:_,_=_<0?0:_,l=l!==0?l:1,h=(_<<12)/l|0,w=E*4,i[w]=i[w]*h+2048>>12,i[w+1]=i[w+1]*h+2048>>12,i[w+2]=i[w+2]*h+2048>>12)}}},{"glur/mono16":18}],11:[function(n,s,d){s.exports=function(g,r,i,a,A,c){if(!(a===0||A<.5)){A>2&&(A=2);var o=r*i,f=o*4,l=o*2,_=o*2,h=Math.max(r,i)*4,I=8*4,w=0,v=f,C=v+l,F=C+_,x=F+_,D=x+h,E=this.__instance("unsharp_mask",f+l+_*2+h+I,{exp:Math.exp}),k=new Uint32Array(g.buffer),M=new Uint32Array(this.__memory.buffer);M.set(k);var Q=E.exports.hsv_v16||E.exports._hsv_v16;Q(w,v,r,i),Q=E.exports.blurMono16||E.exports._blurMono16,Q(v,C,F,x,D,r,i,A),Q=E.exports.unsharp||E.exports._unsharp,Q(w,w,v,C,r,i,a,c),k.set(new Uint32Array(this.__memory.buffer,0,o))}}},{}],12:[function(n,s,d){s.exports="AGFzbQEAAAAADAZkeWxpbmsAAAAAAAE0B2AAAGAEf39/fwBgBn9/f39/fwBgCH9/f39/f39/AGAIf39/f39/f30AYAJ9fwBgAXwBfAIZAgNlbnYDZXhwAAYDZW52Bm1lbW9yeQIAAAMHBgAFAgQBAwYGAX8AQQALB4oBCBFfX3dhc21fY2FsbF9jdG9ycwABFl9fYnVpbGRfZ2F1c3NpYW5fY29lZnMAAg5fX2dhdXNzMTZfbGluZQADCmJsdXJNb25vMTYABAdoc3ZfdjE2AAUHdW5zaGFycAAGDF9fZHNvX2hhbmRsZQMAGF9fd2FzbV9hcHBseV9kYXRhX3JlbG9jcwABCsUMBgMAAQvWAQEHfCABRNuGukOCGvs/IAC7oyICRAAAAAAAAADAohAAIgW2jDgCFCABIAKaEAAiAyADoCIGtjgCECABRAAAAAAAAPA/IAOhIgQgBKIgAyACIAKgokQAAAAAAADwP6AgBaGjIgS2OAIAIAEgBSAEmqIiB7Y4AgwgASADIAJEAAAAAAAA8D+gIASioiIItjgCCCABIAMgAkQAAAAAAADwv6AgBKKiIgK2OAIEIAEgByAIoCAFRAAAAAAAAPA/IAahoCIDo7Y4AhwgASAEIAKgIAOjtjgCGAuGBQMGfwl8An0gAyoCDCEVIAMqAgghFiADKgIUuyERIAMqAhC7IRACQCAEQQFrIghBAEgiCQRAIAIhByAAIQYMAQsgAiAALwEAuCIPIAMqAhi7oiIMIBGiIg0gDCAQoiAPIAMqAgS7IhOiIhQgAyoCALsiEiAPoqCgoCIOtjgCACACQQRqIQcgAEECaiEGIAhFDQAgCEEBIAhBAUgbIgpBf3MhCwJ/IAQgCmtBAXFFBEAgDiENIAgMAQsgAiANIA4gEKIgFCASIAAvAQK4Ig+ioKCgIg22OAIEIAJBCGohByAAQQRqIQYgDiEMIARBAmsLIQIgC0EAIARrRg0AA0AgByAMIBGiIA0gEKIgDyAToiASIAYvAQC4Ig6ioKCgIgy2OAIAIAcgDSARoiAMIBCiIA4gE6IgEiAGLwECuCIPoqCgoCINtjgCBCAHQQhqIQcgBkEEaiEGIAJBAkohACACQQJrIQIgAA0ACwsCQCAJDQAgASAFIAhsQQF0aiIAAn8gBkECay8BACICuCINIBW7IhKiIA0gFrsiE6KgIA0gAyoCHLuiIgwgEKKgIAwgEaKgIg8gB0EEayIHKgIAu6AiDkQAAAAAAADwQWMgDkQAAAAAAAAAAGZxBEAgDqsMAQtBAAs7AQAgCEUNACAGQQRrIQZBACAFa0EBdCEBA0ACfyANIBKiIAJB//8DcbgiDSAToqAgDyIOIBCioCAMIBGioCIPIAdBBGsiByoCALugIgxEAAAAAAAA8EFjIAxEAAAAAAAAAABmcQRAIAyrDAELQQALIQMgBi8BACECIAAgAWoiACADOwEAIAZBAmshBiAIQQFKIQMgDiEMIAhBAWshCCADDQALCwvRAgIBfwd8AkAgB0MAAAAAWw0AIARE24a6Q4Ia+z8gB0MAAAA/l7ujIglEAAAAAAAAAMCiEAAiDLaMOAIUIAQgCZoQACIKIAqgIg22OAIQIAREAAAAAAAA8D8gCqEiCyALoiAKIAkgCaCiRAAAAAAAAPA/oCAMoaMiC7Y4AgAgBCAMIAuaoiIOtjgCDCAEIAogCUQAAAAAAADwP6AgC6KiIg+2OAIIIAQgCiAJRAAAAAAAAPC/oCALoqIiCbY4AgQgBCAOIA+gIAxEAAAAAAAA8D8gDaGgIgqjtjgCHCAEIAsgCaAgCqO2OAIYIAYEQANAIAAgBSAIbEEBdGogAiAIQQF0aiADIAQgBSAGEAMgCEEBaiIIIAZHDQALCyAFRQ0AQQAhCANAIAIgBiAIbEEBdGogASAIQQF0aiADIAQgBiAFEAMgCEEBaiIIIAVHDQALCwtxAQN/IAIgA2wiBQRAA0AgASAAKAIAIgRBEHZB/wFxIgIgAiAEQQh2Qf8BcSIDIAMgBEH/AXEiBEkbIAIgA0sbIgYgBiAEIAIgBEsbIAMgBEsbQQh0OwEAIAFBAmohASAAQQRqIQAgBUEBayIFDQALCwuZAgIDfwF8IAQgBWwhBAJ/IAazQwAAgEWUQwAAyEKVu0QAAAAAAADgP6AiC5lEAAAAAAAA4EFjBEAgC6oMAQtBgICAgHgLIQUgBARAIAdBCHQhCUEAIQYDQCAJIAIgBkEBdCIHai8BACIBIAMgB2ovAQBrIgcgB0EfdSIIaiAIc00EQCAAIAZBAnQiCGoiCiAFIAdsQYAQakEMdSABaiIHQYD+AyAHQYD+A0gbIgdBACAHQQBKG0EMdCABQQEgARtuIgEgCi0AAGxBgBBqQQx2OgAAIAAgCEEBcmoiByABIActAABsQYAQakEMdjoAACAAIAhBAnJqIgcgASAHLQAAbEGAEGpBDHY6AAALIAZBAWoiBiAERw0ACwsL"},{}],13:[function(n,s,d){var u=100;function g(r,i){this.create=r,this.available=[],this.acquired={},this.lastId=1,this.timeoutId=0,this.idle=i||2e3}g.prototype.acquire=function(){var r=this,i;return this.available.length!==0?i=this.available.pop():(i=this.create(),i.id=this.lastId++,i.release=function(){return r.release(i)}),this.acquired[i.id]=i,i},g.prototype.release=function(r){var i=this;delete this.acquired[r.id],r.lastUsed=Date.now(),this.available.push(r),this.timeoutId===0&&(this.timeoutId=setTimeout(function(){return i.gc()},u))},g.prototype.gc=function(){var r=this,i=Date.now();this.available=this.available.filter(function(a){return i-a.lastUsed>r.idle?(a.destroy(),!1):!0}),this.available.length!==0?this.timeoutId=setTimeout(function(){return r.gc()},u):this.timeoutId=0},s.exports=g},{}],14:[function(n,s,d){var u=2;s.exports=function(r,i,a,A,c,o){var f=a/r,l=A/i,_=(2*o+u+1)/c;if(_>.5)return[[a,A]];var h=Math.ceil(Math.log(Math.min(f,l))/Math.log(_));if(h<=1)return[[a,A]];for(var I=[],w=0;w<h;w++){var v=Math.round(Math.pow(Math.pow(r,h-w-1)*Math.pow(a,w+1),1/h)),C=Math.round(Math.pow(Math.pow(i,h-w-1)*Math.pow(A,w+1),1/h));I.push([v,C])}return I}},{}],15:[function(n,s,d){var u=1e-5;function g(i){var a=Math.round(i);return Math.abs(i-a)<u?a:Math.floor(i)}function r(i){var a=Math.round(i);return Math.abs(i-a)<u?a:Math.ceil(i)}s.exports=function(a){var A=a.toWidth/a.width,c=a.toHeight/a.height,o=g(a.srcTileSize*A)-2*a.destTileBorder,f=g(a.srcTileSize*c)-2*a.destTileBorder;if(o<1||f<1)throw new Error("Internal error in pica: target tile width/height is too small.");var l,_,h,I,w,v,C=[],F;for(I=0;I<a.toHeight;I+=f)for(h=0;h<a.toWidth;h+=o)l=h-a.destTileBorder,l<0&&(l=0),w=h+o+a.destTileBorder-l,l+w>=a.toWidth&&(w=a.toWidth-l),_=I-a.destTileBorder,_<0&&(_=0),v=I+f+a.destTileBorder-_,_+v>=a.toHeight&&(v=a.toHeight-_),F={toX:l,toY:_,toWidth:w,toHeight:v,toInnerX:h,toInnerY:I,toInnerWidth:o,toInnerHeight:f,offsetX:l/A-g(l/A),offsetY:_/c-g(_/c),scaleX:A,scaleY:c,x:g(l/A),y:g(_/c),width:r(w/A),height:r(v/c)},C.push(F);return C}},{}],16:[function(n,s,d){function u(g){return Object.prototype.toString.call(g)}s.exports.isCanvas=function(r){var i=u(r);return i==="[object HTMLCanvasElement]"||i==="[object OffscreenCanvas]"||i==="[object Canvas]"},s.exports.isImage=function(r){return u(r)==="[object HTMLImageElement]"},s.exports.isImageBitmap=function(r){return u(r)==="[object ImageBitmap]"},s.exports.limiter=function(r){var i=0,a=[];function A(){i<r&&a.length&&(i++,a.shift()())}return function(o){return new Promise(function(f,l){a.push(function(){o().then(function(_){f(_),i--,A()},function(_){l(_),i--,A()})}),A()})}},s.exports.cib_quality_name=function(r){switch(r){case 0:return"pixelated";case 1:return"low";case 2:return"medium"}return"high"},s.exports.cib_support=function(r){return Promise.resolve().then(function(){if(typeof createImageBitmap=="undefined")return!1;var i=r(100,100);return createImageBitmap(i,0,0,100,100,{resizeWidth:10,resizeHeight:10,resizeQuality:"high"}).then(function(a){var A=a.width===10;return a.close(),i=null,A})}).catch(function(){return!1})},s.exports.worker_offscreen_canvas_support=function(){return new Promise(function(r,i){if(typeof OffscreenCanvas=="undefined"){r(!1);return}function a(o){if(typeof createImageBitmap=="undefined"){o.postMessage(!1);return}Promise.resolve().then(function(){var f=new OffscreenCanvas(10,10),l=f.getContext("2d");return l.rect(0,0,1,1),createImageBitmap(f,0,0,1,1)}).then(function(){return o.postMessage(!0)},function(){return o.postMessage(!1)})}var A=btoa("(".concat(a.toString(),")(self);")),c=new Worker("data:text/javascript;base64,".concat(A));c.onmessage=function(o){return r(o.data)},c.onerror=i}).then(function(r){return r},function(){return!1})},s.exports.can_use_canvas=function(r){var i=!1;try{var a=r(2,1),A=a.getContext("2d"),c=A.createImageData(2,1);c.data[0]=12,c.data[1]=23,c.data[2]=34,c.data[3]=255,c.data[4]=45,c.data[5]=56,c.data[6]=67,c.data[7]=255,A.putImageData(c,0,0),c=null,c=A.getImageData(0,0,2,1),c.data[0]===12&&c.data[1]===23&&c.data[2]===34&&c.data[3]===255&&c.data[4]===45&&c.data[5]===56&&c.data[6]===67&&c.data[7]===255&&(i=!0)}catch{}return i},s.exports.cib_can_use_region=function(){return new Promise(function(r){if(typeof createImageBitmap=="undefined"){r(!1);return}var i=new Image;i.src="data:image/jpeg;base64,/9j/4QBiRXhpZgAATU0AKgAAAAgABQESAAMAAAABAAYAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAAITAAMAAAABAAEAAAAAAAAAAABIAAAAAQAAAEgAAAAB/9sAQwAEAwMEAwMEBAMEBQQEBQYKBwYGBgYNCQoICg8NEBAPDQ8OERMYFBESFxIODxUcFRcZGRsbGxAUHR8dGh8YGhsa/9sAQwEEBQUGBQYMBwcMGhEPERoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoa/8IAEQgAAQACAwERAAIRAQMRAf/EABQAAQAAAAAAAAAAAAAAAAAAAAf/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAF/P//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAQUCf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Bf//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEABj8Cf//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAT8hf//aAAwDAQACAAMAAAAQH//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Qf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Qf//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAT8Qf//Z",i.onload=function(){createImageBitmap(i,0,0,i.width,i.height).then(function(a){a.width===i.width&&a.height===i.height?r(!0):r(!1)},function(){return r(!1)})},i.onerror=function(){return r(!1)}})}},{}],17:[function(n,s,d){s.exports=function(){var u=n("./mathlib"),g;onmessage=function(i){var a=i.data.opts;if(!a.src&&a.srcBitmap){var A=new OffscreenCanvas(a.width,a.height),c=A.getContext("2d");c.drawImage(a.srcBitmap,0,0),a.src=c.getImageData(0,0,a.width,a.height).data,A.width=A.height=0,A=null,a.srcBitmap.close(),a.srcBitmap=null}g||(g=new u(i.data.features));var o=g.resizeAndUnsharp(a);postMessage({data:o},[o.buffer])}}},{"./mathlib":1}],18:[function(n,s,d){var u,g,r,i,a,A,c,o;function f(h){h<.5&&(h=.5);var I=Math.exp(.726*.726)/h,w=Math.exp(-I),v=Math.exp(-2*I),C=(1-w)*(1-w)/(1+2*I*w-v);return u=C,g=C*(I-1)*w,r=C*(I+1)*w,i=-C*v,a=2*w,A=-v,c=(u+g)/(1-a-A),o=(r+i)/(1-a-A),new Float32Array([u,g,r,i,a,A,c,o])}function l(h,I,w,v,C,F){var x,D,E,k,M,Q,O,S,G,L,p,b,m,B;for(G=0;G<F;G++){for(Q=G*C,O=G,S=0,x=h[Q],M=x*v[6],k=M,p=v[0],b=v[1],m=v[4],B=v[5],L=0;L<C;L++)D=h[Q],E=D*p+x*b+k*m+M*B,M=k,k=E,x=D,w[S]=k,S++,Q++;for(Q--,S--,O+=F*(C-1),x=h[Q],M=x*v[7],k=M,D=x,p=v[2],b=v[3],L=C-1;L>=0;L--)E=D*p+x*b+k*m+M*B,M=k,k=E,x=D,D=h[Q],I[O]=w[S]+k,Q--,S--,O-=F}}function _(h,I,w,v){if(!!v){var C=new Uint16Array(h.length),F=new Float32Array(Math.max(I,w)),x=f(v);l(h,C,F,x,I,w),l(C,h,F,x,w,I)}}s.exports=_},{}],19:[function(n,s,d){var u=n("object-assign"),g=n("./lib/base64decode"),r=n("./lib/wa_detect"),i={js:!0,wasm:!0};function a(A){if(!(this instanceof a))return new a(A);var c=u({},i,A||{});if(this.options=c,this.__cache={},this.__init_promise=null,this.__modules=c.modules||{},this.__memory=null,this.__wasm={},this.__isLE=new Uint32Array(new Uint8Array([1,0,0,0]).buffer)[0]===1,!this.options.js&&!this.options.wasm)throw new Error('mathlib: at least "js" or "wasm" should be enabled')}a.prototype.has_wasm=r,a.prototype.use=function(A){return this.__modules[A.name]=A,this.options.wasm&&this.has_wasm()&&A.wasm_fn?this[A.name]=A.wasm_fn:this[A.name]=A.fn,this},a.prototype.init=function(){if(this.__init_promise)return this.__init_promise;if(!this.options.js&&this.options.wasm&&!this.has_wasm())return Promise.reject(new Error(`mathlib: only "wasm" was enabled, but it's not supported`));var A=this;return this.__init_promise=Promise.all(Object.keys(A.__modules).map(function(c){var o=A.__modules[c];return!A.options.wasm||!A.has_wasm()||!o.wasm_fn||A.__wasm[c]?null:WebAssembly.compile(A.__base64decode(o.wasm_src)).then(function(f){A.__wasm[c]=f})})).then(function(){return A}),this.__init_promise},a.prototype.__base64decode=g,a.prototype.__reallocate=function(c){if(!this.__memory)return this.__memory=new WebAssembly.Memory({initial:Math.ceil(c/(64*1024))}),this.__memory;var o=this.__memory.buffer.byteLength;return o<c&&this.__memory.grow(Math.ceil((c-o)/(64*1024))),this.__memory},a.prototype.__instance=function(c,o,f){if(o&&this.__reallocate(o),!this.__wasm[c]){var l=this.__modules[c];this.__wasm[c]=new WebAssembly.Module(this.__base64decode(l.wasm_src))}if(!this.__cache[c]){var _={memoryBase:0,memory:this.__memory,tableBase:0,table:new WebAssembly.Table({initial:0,element:"anyfunc"})};this.__cache[c]=new WebAssembly.Instance(this.__wasm[c],{env:u(_,f||{})})}return this.__cache[c]},a.prototype.__align=function(c,o){o=o||8;var f=c%o;return c+(f?o-f:0)},s.exports=a},{"./lib/base64decode":20,"./lib/wa_detect":21,"object-assign":22}],20:[function(n,s,d){var u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";s.exports=function(r){for(var i=r.replace(/[\r\n=]/g,""),a=i.length,A=new Uint8Array(a*3>>2),c=0,o=0,f=0;f<a;f++)f%4===0&&f&&(A[o++]=c>>16&255,A[o++]=c>>8&255,A[o++]=c&255),c=c<<6|u.indexOf(i.charAt(f));var l=a%4*6;return l===0?(A[o++]=c>>16&255,A[o++]=c>>8&255,A[o++]=c&255):l===18?(A[o++]=c>>10&255,A[o++]=c>>2&255):l===12&&(A[o++]=c>>4&255),A}},{}],21:[function(n,s,d){var u;s.exports=function(){if(typeof u!="undefined"||(u=!1,typeof WebAssembly=="undefined"))return u;try{var r=new Uint8Array([0,97,115,109,1,0,0,0,1,6,1,96,1,127,1,127,3,2,1,0,5,3,1,0,1,7,8,1,4,116,101,115,116,0,0,10,16,1,14,0,32,0,65,1,54,2,0,32,0,40,2,0,11]),i=new WebAssembly.Module(r),a=new WebAssembly.Instance(i,{});return a.exports.test(4)!==0&&(u=!0),u}catch{}return u}},{}],22:[function(n,s,d){var u=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function i(A){if(A==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(A)}function a(){try{if(!Object.assign)return!1;var A=new String("abc");if(A[5]="de",Object.getOwnPropertyNames(A)[0]==="5")return!1;for(var c={},o=0;o<10;o++)c["_"+String.fromCharCode(o)]=o;var f=Object.getOwnPropertyNames(c).map(function(_){return c[_]});if(f.join("")!=="0123456789")return!1;var l={};return"abcdefghijklmnopqrst".split("").forEach(function(_){l[_]=_}),Object.keys(Object.assign({},l)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}s.exports=a()?Object.assign:function(A,c){for(var o,f=i(A),l,_=1;_<arguments.length;_++){o=Object(arguments[_]);for(var h in o)g.call(o,h)&&(f[h]=o[h]);if(u){l=u(o);for(var I=0;I<l.length;I++)r.call(o,l[I])&&(f[l[I]]=o[l[I]])}}return f}},{}],23:[function(n,s,d){var u=arguments[3],g=arguments[4],r=arguments[5],i=JSON.stringify;s.exports=function(a,A){for(var c,o=Object.keys(r),f=0,l=o.length;f<l;f++){var _=o[f],h=r[_].exports;if(h===a||h&&h.default===a){c=_;break}}if(!c){c=Math.floor(Math.pow(16,8)*Math.random()).toString(16);for(var I={},f=0,l=o.length;f<l;f++){var _=o[f];I[_]=_}g[c]=["function(require,module,exports){"+a+"(self); }",I]}var w=Math.floor(Math.pow(16,8)*Math.random()).toString(16),v={};v[c]=c,g[w]=["function(require,module,exports){var f = require("+i(c)+");(f.default ? f.default : f)(self);}",v];var C={};F(w);function F(Q){C[Q]=!0;for(var O in g[Q][1]){var S=g[Q][1][O];C[S]||F(S)}}var x="("+u+")({"+Object.keys(C).map(function(Q){return i(Q)+":["+g[Q][0]+","+i(g[Q][1])+"]"}).join(",")+"},{},["+i(w)+"])",D=window.URL||window.webkitURL||window.mozURL||window.msURL,E=new Blob([x],{type:"text/javascript"});if(A&&A.bare)return E;var k=D.createObjectURL(E),M=new Worker(k);return M.objectURL=k,M}},{}],"/index.js":[function(n,s,d){function u(p,b){return A(p)||a(p,b)||r(p,b)||g()}function g(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(p,b){if(!!p){if(typeof p=="string")return i(p,b);var m=Object.prototype.toString.call(p).slice(8,-1);if(m==="Object"&&p.constructor&&(m=p.constructor.name),m==="Map"||m==="Set")return Array.from(p);if(m==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m))return i(p,b)}}function i(p,b){(b==null||b>p.length)&&(b=p.length);for(var m=0,B=new Array(b);m<b;m++)B[m]=p[m];return B}function a(p,b){var m=p==null?null:typeof Symbol!="undefined"&&p[Symbol.iterator]||p["@@iterator"];if(m!=null){var B=[],y=!0,z=!1,U,R;try{for(m=m.call(p);!(y=(U=m.next()).done)&&(B.push(U.value),!(b&&B.length===b));y=!0);}catch(P){z=!0,R=P}finally{try{!y&&m.return!=null&&m.return()}finally{if(z)throw R}}return B}}function A(p){if(Array.isArray(p))return p}var c=n("object-assign"),o=n("webworkify"),f=n("./lib/mathlib"),l=n("./lib/pool"),_=n("./lib/utils"),h=n("./lib/worker"),I=n("./lib/stepper"),w=n("./lib/tiler"),v=n("./lib/mm_resize/resize_filter_info"),C={},F=!1;try{typeof navigator!="undefined"&&navigator.userAgent&&(F=navigator.userAgent.indexOf("Safari")>=0)}catch{}var x=1;typeof navigator!="undefined"&&(x=Math.min(navigator.hardwareConcurrency||1,4));var D={tile:1024,concurrency:x,features:["js","wasm","ww"],idle:2e3,createCanvas:function(b,m){var B=document.createElement("canvas");return B.width=b,B.height=m,B}},E={filter:"mks2013",unsharpAmount:0,unsharpRadius:0,unsharpThreshold:0},k=!1,M=!1,Q=!1,O=!1,S=!1;function G(){return{value:o(h),destroy:function(){if(this.value.terminate(),typeof window!="undefined"){var b=window.URL||window.webkitURL||window.mozURL||window.msURL;b&&b.revokeObjectURL&&this.value.objectURL&&b.revokeObjectURL(this.value.objectURL)}}}}function L(p){if(!(this instanceof L))return new L(p);this.options=c({},D,p||{});var b="lk_".concat(this.options.concurrency);this.__limit=C[b]||_.limiter(this.options.concurrency),C[b]||(C[b]=this.__limit),this.features={js:!1,wasm:!1,cib:!1,ww:!1},this.__workersPool=null,this.__requested_features=[],this.__mathlib=null}L.prototype.init=function(){var p=this;if(this.__initPromise)return this.__initPromise;if(typeof ImageData!="undefined"&&typeof Uint8ClampedArray!="undefined")try{new ImageData(new Uint8ClampedArray(400),10,10),k=!0}catch{}typeof ImageBitmap!="undefined"&&(ImageBitmap.prototype&&ImageBitmap.prototype.close?M=!0:this.debug("ImageBitmap does not support .close(), disabled"));var b=this.options.features.slice();if(b.indexOf("all")>=0&&(b=["cib","wasm","js","ww"]),this.__requested_features=b,this.__mathlib=new f(b),b.indexOf("ww")>=0&&typeof window!="undefined"&&"Worker"in window)try{var m=n("webworkify")(function(){});m.terminate(),this.features.ww=!0;var B="wp_".concat(JSON.stringify(this.options));C[B]?this.__workersPool=C[B]:(this.__workersPool=new l(G,this.options.idle),C[B]=this.__workersPool)}catch{}var y=this.__mathlib.init().then(function(P){c(p.features,P.features)}),z;M?z=_.cib_support(this.options.createCanvas).then(function(P){if(p.features.cib&&b.indexOf("cib")<0){p.debug("createImageBitmap() resize supported, but disabled by config");return}b.indexOf("cib")>=0&&(p.features.cib=P)}):z=Promise.resolve(!1),Q=_.can_use_canvas(this.options.createCanvas);var U;M&&k&&b.indexOf("ww")!==-1?U=_.worker_offscreen_canvas_support():U=Promise.resolve(!1),U=U.then(function(P){O=P});var R=_.cib_can_use_region().then(function(P){S=P});return this.__initPromise=Promise.all([y,z,U,R]).then(function(){return p}),this.__initPromise},L.prototype.__invokeResize=function(p,b){var m=this;return b.__mathCache=b.__mathCache||{},Promise.resolve().then(function(){return m.features.ww?new Promise(function(B,y){var z=m.__workersPool.acquire();b.cancelToken&&b.cancelToken.catch(function(R){return y(R)}),z.value.onmessage=function(R){z.release(),R.data.err?y(R.data.err):B(R.data)};var U=[];p.src&&U.push(p.src.buffer),p.srcBitmap&&U.push(p.srcBitmap),z.value.postMessage({opts:p,features:m.__requested_features,preload:{wasm_nodule:m.__mathlib.__}},U)}):{data:m.__mathlib.resizeAndUnsharp(p,b.__mathCache)}})},L.prototype.__extractTileData=function(p,b,m,B,y){if(this.features.ww&&O&&(_.isCanvas(b)||S))return this.debug("Create tile for OffscreenCanvas"),createImageBitmap(B.srcImageBitmap||b,p.x,p.y,p.width,p.height).then(function(R){return y.srcBitmap=R,y});if(_.isCanvas(b))return B.srcCtx||(B.srcCtx=b.getContext("2d")),this.debug("Get tile pixel data"),y.src=B.srcCtx.getImageData(p.x,p.y,p.width,p.height).data,y;this.debug("Draw tile imageBitmap/image to temporary canvas");var z=this.options.createCanvas(p.width,p.height),U=z.getContext("2d");return U.globalCompositeOperation="copy",U.drawImage(B.srcImageBitmap||b,p.x,p.y,p.width,p.height,0,0,p.width,p.height),this.debug("Get tile pixel data"),y.src=U.getImageData(0,0,p.width,p.height).data,z.width=z.height=0,y},L.prototype.__landTileData=function(p,b,m){var B;if(this.debug("Convert raw rgba tile result to ImageData"),b.bitmap)return m.toCtx.drawImage(b.bitmap,p.toX,p.toY),null;if(k)B=new ImageData(new Uint8ClampedArray(b.data),p.toWidth,p.toHeight);else if(B=m.toCtx.createImageData(p.toWidth,p.toHeight),B.data.set)B.data.set(b.data);else for(var y=B.data.length-1;y>=0;y--)B.data[y]=b.data[y];return this.debug("Draw tile"),F?m.toCtx.putImageData(B,p.toX,p.toY,p.toInnerX-p.toX,p.toInnerY-p.toY,p.toInnerWidth+1e-5,p.toInnerHeight+1e-5):m.toCtx.putImageData(B,p.toX,p.toY,p.toInnerX-p.toX,p.toInnerY-p.toY,p.toInnerWidth,p.toInnerHeight),null},L.prototype.__tileAndResize=function(p,b,m){var B=this,y={srcCtx:null,srcImageBitmap:null,isImageBitmapReused:!1,toCtx:null},z=function(R){return B.__limit(function(){if(m.canceled)return m.cancelToken;var P={width:R.width,height:R.height,toWidth:R.toWidth,toHeight:R.toHeight,scaleX:R.scaleX,scaleY:R.scaleY,offsetX:R.offsetX,offsetY:R.offsetY,filter:m.filter,unsharpAmount:m.unsharpAmount,unsharpRadius:m.unsharpRadius,unsharpThreshold:m.unsharpThreshold};return B.debug("Invoke resize math"),Promise.resolve(P).then(function(T){return B.__extractTileData(R,p,m,y,T)}).then(function(T){return B.debug("Invoke resize math"),B.__invokeResize(T,m)}).then(function(T){return m.canceled?m.cancelToken:(y.srcImageData=null,B.__landTileData(R,T,y))})})};return Promise.resolve().then(function(){if(y.toCtx=b.getContext("2d"),_.isCanvas(p))return null;if(_.isImageBitmap(p))return y.srcImageBitmap=p,y.isImageBitmapReused=!0,null;if(_.isImage(p))return M?(B.debug("Decode image via createImageBitmap"),createImageBitmap(p).then(function(U){y.srcImageBitmap=U}).catch(function(U){return null})):null;throw new Error('Pica: ".from" should be Image, Canvas or ImageBitmap')}).then(function(){if(m.canceled)return m.cancelToken;B.debug("Calculate tiles");var U=w({width:m.width,height:m.height,srcTileSize:B.options.tile,toWidth:m.toWidth,toHeight:m.toHeight,destTileBorder:m.__destTileBorder}),R=U.map(function(T){return z(T)});function P(T){T.srcImageBitmap&&(T.isImageBitmapReused||T.srcImageBitmap.close(),T.srcImageBitmap=null)}return B.debug("Process tiles"),Promise.all(R).then(function(){return B.debug("Finished!"),P(y),b},function(T){throw P(y),T})})},L.prototype.__processStages=function(p,b,m,B){var y=this;if(B.canceled)return B.cancelToken;var z=p.shift(),U=u(z,2),R=U[0],P=U[1],T=p.length===0,V;T||v.q2f.indexOf(B.filter)<0?V=B.filter:B.filter==="box"?V="box":V="hamming",B=c({},B,{toWidth:R,toHeight:P,filter:V});var q;return T||(q=this.options.createCanvas(R,P)),this.__tileAndResize(b,T?m:q,B).then(function(){return T?m:(B.width=R,B.height=P,y.__processStages(p,q,m,B))}).then(function(zt){return q&&(q.width=q.height=0),zt})},L.prototype.__resizeViaCreateImageBitmap=function(p,b,m){var B=this,y=b.getContext("2d");return this.debug("Resize via createImageBitmap()"),createImageBitmap(p,{resizeWidth:m.toWidth,resizeHeight:m.toHeight,resizeQuality:_.cib_quality_name(v.f2q[m.filter])}).then(function(z){if(m.canceled)return m.cancelToken;if(!m.unsharpAmount)return y.drawImage(z,0,0),z.close(),y=null,B.debug("Finished!"),b;B.debug("Unsharp result");var U=B.options.createCanvas(m.toWidth,m.toHeight),R=U.getContext("2d");R.drawImage(z,0,0),z.close();var P=R.getImageData(0,0,m.toWidth,m.toHeight);return B.__mathlib.unsharp_mask(P.data,m.toWidth,m.toHeight,m.unsharpAmount,m.unsharpRadius,m.unsharpThreshold),y.putImageData(P,0,0),U.width=U.height=0,P=R=U=y=null,B.debug("Finished!"),b})},L.prototype.resize=function(p,b,m){var B=this;this.debug("Start resize...");var y=c({},E);if(isNaN(m)?m&&(y=c(y,m)):y=c(y,{quality:m}),y.toWidth=b.width,y.toHeight=b.height,y.width=p.naturalWidth||p.width,y.height=p.naturalHeight||p.height,Object.prototype.hasOwnProperty.call(y,"quality")){if(y.quality<0||y.quality>3)throw new Error("Pica: .quality should be [0..3], got ".concat(y.quality));y.filter=v.q2f[y.quality]}if(b.width===0||b.height===0)return Promise.reject(new Error("Invalid output size: ".concat(b.width,"x").concat(b.height)));y.unsharpRadius>2&&(y.unsharpRadius=2),y.canceled=!1,y.cancelToken&&(y.cancelToken=y.cancelToken.then(function(U){throw y.canceled=!0,U},function(U){throw y.canceled=!0,U}));var z=3;return y.__destTileBorder=Math.ceil(Math.max(z,2.5*y.unsharpRadius|0)),this.init().then(function(){if(y.canceled)return y.cancelToken;if(B.features.cib){if(v.q2f.indexOf(y.filter)>=0)return B.__resizeViaCreateImageBitmap(p,b,y);B.debug("cib is enabled, but not supports provided filter, fallback to manual math")}if(!Q){var U=new Error("Pica: cannot use getImageData on canvas, make sure fingerprinting protection isn't enabled");throw U.code="ERR_GET_IMAGE_DATA",U}var R=I(y.width,y.height,y.toWidth,y.toHeight,B.options.tile,y.__destTileBorder);return B.__processStages(R,p,b,y)})},L.prototype.resizeBuffer=function(p){var b=this,m=c({},E,p);if(Object.prototype.hasOwnProperty.call(m,"quality")){if(m.quality<0||m.quality>3)throw new Error("Pica: .quality should be [0..3], got ".concat(m.quality));m.filter=v.q2f[m.quality]}return this.init().then(function(){return b.__mathlib.resizeAndUnsharp(m)})},L.prototype.toBlob=function(p,b,m){return b=b||"image/png",new Promise(function(B){if(p.toBlob){p.toBlob(function(P){return B(P)},b,m);return}if(p.convertToBlob){B(p.convertToBlob({type:b,quality:m}));return}for(var y=atob(p.toDataURL(b,m).split(",")[1]),z=y.length,U=new Uint8Array(z),R=0;R<z;R++)U[R]=y.charCodeAt(R);B(new Blob([U],{type:b}))})},L.prototype.debug=function(){},s.exports=L},{"./lib/mathlib":1,"./lib/mm_resize/resize_filter_info":7,"./lib/pool":13,"./lib/stepper":14,"./lib/tiler":15,"./lib/utils":16,"./lib/worker":17,"object-assign":22,webworkify:23}]},{},[])("/index.js")})})(Ft);var K={},Dt={exports:{}};(function(e){function t(r,i){var a=new Error(r);return a.code=i,a}function n(r){for(var i=r.toString(16).toUpperCase(),a=2-i.length;a>0;a--)i="0"+i;return"0x"+i}function s(r){try{return unescape(encodeURIComponent(r))}catch{return r}}function d(r){try{return decodeURIComponent(escape(r))}catch{return r}}function u(r){return Object.prototype.toString.call(r)==="[object Uint8Array]"}function g(r,i,a){this.input=r.subarray(i,a),this.start=i;var A=String.fromCharCode.apply(null,this.input.subarray(0,4));if(A!=="II*\0"&&A!=="MM\0*")throw t("invalid TIFF signature","EBADDATA");this.big_endian=A[0]==="M"}g.prototype.each=function(r){this.aborted=!1;var i=this.read_uint32(4);for(this.ifds_to_read=[{id:0,offset:i}];this.ifds_to_read.length>0&&!this.aborted;){var a=this.ifds_to_read.shift();!a.offset||this.scan_ifd(a.id,a.offset,r)}},g.prototype.filter=function(r){var i={};i.ifd0={id:0,entries:[]},this.each(function(o){r(o)===!1&&!o.is_subifd_link||o.is_subifd_link&&o.count!==1&&o.format!==4||(i["ifd"+o.ifd]||(i["ifd"+o.ifd]={id:o.ifd,entries:[]}),i["ifd"+o.ifd].entries.push(o))}),delete i.ifd1;var a=8;Object.keys(i).forEach(function(o){a+=2,i[o].entries.forEach(function(f){a+=12+(f.data_length>4?Math.ceil(f.data_length/2)*2:0)}),a+=4}),this.output=new Uint8Array(a),this.output[0]=this.output[1]=(this.big_endian?"M":"I").charCodeAt(0),this.write_uint16(2,42);var A=8,c=this;if(this.write_uint32(4,A),Object.keys(i).forEach(function(o){i[o].written_offset=A;var f=A,l=f+2+i[o].entries.length*12+4;A=l,c.write_uint16(f,i[o].entries.length),i[o].entries.sort(function(h,I){return h.tag-I.tag}).forEach(function(h,I){var w=f+2+I*12;c.write_uint16(w,h.tag),c.write_uint16(w+2,h.format),c.write_uint32(w+4,h.count),h.is_subifd_link?i["ifd"+h.tag]&&(i["ifd"+h.tag].link_offset=w+8):h.data_length<=4?c.output.set(c.input.subarray(h.data_offset-c.start,h.data_offset-c.start+4),w+8):(c.write_uint32(w+8,A),c.output.set(c.input.subarray(h.data_offset-c.start,h.data_offset-c.start+h.data_length),A),A+=Math.ceil(h.data_length/2)*2)});var _=i["ifd"+(i[o].id+1)];_&&(_.link_offset=l-4)}),Object.keys(i).forEach(function(o){i[o].written_offset&&i[o].link_offset&&c.write_uint32(i[o].link_offset,i[o].written_offset)}),this.output.length!==A)throw t("internal error: incorrect buffer size allocated");return this.output},g.prototype.read_uint16=function(r){var i=this.input;if(r+2>i.length)throw t("unexpected EOF","EBADDATA");return this.big_endian?i[r]*256+i[r+1]:i[r]+i[r+1]*256},g.prototype.read_uint32=function(r){var i=this.input;if(r+4>i.length)throw t("unexpected EOF","EBADDATA");return this.big_endian?i[r]*16777216+i[r+1]*65536+i[r+2]*256+i[r+3]:i[r]+i[r+1]*256+i[r+2]*65536+i[r+3]*16777216},g.prototype.write_uint16=function(r,i){var a=this.output;this.big_endian?(a[r]=i>>>8&255,a[r+1]=i&255):(a[r]=i&255,a[r+1]=i>>>8&255)},g.prototype.write_uint32=function(r,i){var a=this.output;this.big_endian?(a[r]=i>>>24&255,a[r+1]=i>>>16&255,a[r+2]=i>>>8&255,a[r+3]=i&255):(a[r]=i&255,a[r+1]=i>>>8&255,a[r+2]=i>>>16&255,a[r+3]=i>>>24&255)},g.prototype.is_subifd_link=function(r,i){return r===0&&i===34665||r===0&&i===34853||r===34665&&i===40965},g.prototype.exif_format_length=function(r){switch(r){case 1:case 2:case 6:case 7:return 1;case 3:case 8:return 2;case 4:case 9:case 11:return 4;case 5:case 10:case 12:return 8;default:return 0}},g.prototype.exif_format_read=function(r,i){var a;switch(r){case 1:case 2:return a=this.input[i],a;case 6:return a=this.input[i],a|(a&128)*33554430;case 3:return a=this.read_uint16(i),a;case 8:return a=this.read_uint16(i),a|(a&32768)*131070;case 4:return a=this.read_uint32(i),a;case 9:return a=this.read_uint32(i),a|0;case 5:case 10:case 11:case 12:return null;case 7:return null;default:return null}},g.prototype.scan_ifd=function(r,i,a){var A=this.read_uint16(i);i+=2;for(var c=0;c<A;c++){var o=this.read_uint16(i),f=this.read_uint16(i+2),l=this.read_uint32(i+4),_=this.exif_format_length(f),h=l*_,I=h<=4?i+8:this.read_uint32(i+8),w=!1;if(I+h>this.input.length)throw t("unexpected EOF","EBADDATA");for(var v=[],C=I,F=0;F<l;F++,C+=_){var x=this.exif_format_read(f,C);if(x===null){v=null;break}v.push(x)}if(Array.isArray(v)&&f===2){try{v=d(String.fromCharCode.apply(null,v))}catch{v=null}v&&v[v.length-1]==="\0"&&(v=v.slice(0,-1))}this.is_subifd_link(r,o)&&Array.isArray(v)&&Number.isInteger(v[0])&&v[0]>0&&(this.ifds_to_read.push({id:o,offset:v[0]}),w=!0);var D={is_big_endian:this.big_endian,ifd:r,tag:o,format:f,count:l,entry_offset:i+this.start,data_length:h,data_offset:I+this.start,value:v,is_subifd_link:w};if(a(D)===!1){this.aborted=!0;return}i+=12}r===0&&this.ifds_to_read.push({id:1,offset:this.read_uint32(i)})},e.exports.is_jpeg=function(r){return r.length>=4&&r[0]===255&&r[1]===216&&r[2]===255},e.exports.jpeg_segments_each=function(r,i){if(!u(r))throw t("Invalid argument (jpeg_bin), Uint8Array expected","EINVAL");if(typeof i!="function")throw t("Invalid argument (on_segment), Function expected","EINVAL");if(!e.exports.is_jpeg(r))throw t("Unknown file format","ENOTJPEG");for(var a=0,A=r.length,c=!1;;){var o,f;if(a+1>=A)throw t("Unexpected EOF","EBADDATA");var l=r[a],_=r[a+1];if(l===255&&_===255)o=255,f=1;else if(l===255&&_!==0){if(o=_,f=2,!(208<=o&&o<=217||o===1)){if(a+3>=A)throw t("Unexpected EOF","EBADDATA");if(f+=r[a+2]*256+r[a+3],f<2)throw t("Invalid segment length","EBADDATA");if(a+f-1>=A)throw t("Unexpected EOF","EBADDATA")}c&&(o>=208&&o<=215||(c=!1)),o===218&&(c=!0)}else if(c)for(var h=a+1;;h++){if(h>=A)throw t("Unexpected EOF","EBADDATA");if(r[h]===255){if(h+1>=A)throw t("Unexpected EOF","EBADDATA");if(r[h+1]!==0){o=0,f=h-a;break}}}else throw t("Unexpected byte at segment start: "+n(l)+" (offset "+n(a)+")","EBADDATA");if(i({code:o,offset:a,length:f})===!1||o===217)break;a+=f}},e.exports.jpeg_segments_filter=function(r,i){if(!u(r))throw t("Invalid argument (jpeg_bin), Uint8Array expected","EINVAL");if(typeof i!="function")throw t("Invalid argument (on_segment), Function expected","EINVAL");var a=[],A=0;e.exports.jpeg_segments_each(r,function(f){var l=i(f);if(u(l))a.push({data:l}),A+=l.length;else if(Array.isArray(l))l.filter(u).forEach(function(h){a.push({data:h}),A+=h.length});else if(l!==!1){var _={start:f.offset,end:f.offset+f.length};a.length>0&&a[a.length-1].end===_.start?a[a.length-1].end=_.end:a.push(_),A+=f.length}});var c=new Uint8Array(A),o=0;return a.forEach(function(f){var l=f.data||r.subarray(f.start,f.end);c.set(l,o),o+=l.length}),c},e.exports.jpeg_exif_tags_each=function(r,i){if(!u(r))throw t("Invalid argument (jpeg_bin), Uint8Array expected","EINVAL");if(typeof i!="function")throw t("Invalid argument (on_exif_entry), Function expected","EINVAL");e.exports.jpeg_segments_each(r,function(a){if(a.code===218)return!1;if(a.code===225&&a.length>=10&&r[a.offset+4]===69&&r[a.offset+5]===120&&r[a.offset+6]===105&&r[a.offset+7]===102&&r[a.offset+8]===0&&r[a.offset+9]===0)return new g(r,a.offset+10,a.offset+a.length).each(i),!1})},e.exports.jpeg_exif_tags_filter=function(r,i){if(!u(r))throw t("Invalid argument (jpeg_bin), Uint8Array expected","EINVAL");if(typeof i!="function")throw t("Invalid argument (on_exif_entry), Function expected","EINVAL");var a=!1;return e.exports.jpeg_segments_filter(r,function(A){if(!a&&(A.code===218&&(a=!0),A.code===225&&A.length>=10&&r[A.offset+4]===69&&r[A.offset+5]===120&&r[A.offset+6]===105&&r[A.offset+7]===102&&r[A.offset+8]===0&&r[A.offset+9]===0)){var c=new g(r,A.offset+10,A.offset+A.length).filter(i);if(!c)return!1;var o=new Uint8Array(10);return o.set(r.slice(A.offset,A.offset+10)),o[2]=c.length+8>>>8&255,o[3]=c.length+8&255,a=!0,[o,c]}})},e.exports.jpeg_add_comment=function(r,i){var a=!1,A=0;return e.exports.jpeg_segments_filter(r,function(c){if(A++,!(A===1&&c.code===216)&&!(A===2&&c.code===224)&&!a){i=s(i);var o=new Uint8Array(5+i.length),f=0;return o[f++]=255,o[f++]=254,o[f++]=i.length+3>>>8&255,o[f++]=i.length+3&255,i.split("").forEach(function(l){o[f++]=l.charCodeAt(0)&255}),o[f++]=0,a=!0,[o,r.subarray(c.offset,c.offset+c.length)]}})}})(Dt);var st=Dt.exports;function Mt(e){return this._getUint8Array(e.blob).then(function(t){if(e.is_jpeg=st.is_jpeg(t),!e.is_jpeg)return Promise.resolve(e);e.orig_blob=e.blob;try{var n,s;if(st.jpeg_exif_tags_each(t,function(u){if(u.ifd===0&&u.tag===274&&Array.isArray(u.value))return e.orientation=u.value[0]||1,n=u.is_big_endian,s=u.data_offset,!1}),s){var d=n?new Uint8Array([0,1]):new Uint8Array([1,0]);e.blob=new Blob([t.slice(0,s),d,t.slice(s+2)],{type:"image/jpeg"})}}catch{}return e})}function St(e){if(!e.is_jpeg)return Promise.resolve(e);var t=e.orientation-1;if(!t)return Promise.resolve(e);var n;t&4?n=this.pica.options.createCanvas(e.out_canvas.height,e.out_canvas.width):n=this.pica.options.createCanvas(e.out_canvas.width,e.out_canvas.height);var s=n.getContext("2d");return s.save(),t&1&&s.transform(-1,0,0,1,n.width,0),t&2&&s.transform(-1,0,0,-1,n.width,n.height),t&4&&s.transform(0,1,1,0,0,0),s.drawImage(e.out_canvas,0,0),s.restore(),e.out_canvas.width=e.out_canvas.height=0,e.out_canvas=n,Promise.resolve(e)}function Ut(e){return e.is_jpeg?Promise.all([this._getUint8Array(e.blob),this._getUint8Array(e.out_blob)]).then(function(t){var n=t[0],s=t[1];if(!st.is_jpeg(n))return Promise.resolve(e);var d=[];return st.jpeg_segments_each(n,function(u){if(u.code===218)return!1;d.push(u)}),d=d.filter(function(u){return u.code===226?!1:u.code>=224&&u.code<240||u.code===254}).map(function(u){return n.slice(u.offset,u.offset+u.length)}),e.out_blob=new Blob([s.slice(0,2)].concat(d).concat([s.slice(20)]),{type:"image/jpeg"}),e}):Promise.resolve(e)}function me(e){e.before("_blob_to_image",Mt),e.after("_transform",St),e.after("_create_blob",Ut)}K.jpeg_patch_exif=Mt;K.jpeg_rotate_canvas=St;K.jpeg_attach_orig_segments=Ut;K.assign=me;var wt=ct,Rt=Ft.exports;function j(e){if(!(this instanceof j))return new j(e);e=e||{},this.pica=e.pica||Rt({}),this.initialized=!1,this.utils=wt}j.prototype.use=function(e){var t=[this].concat(Array.prototype.slice.call(arguments,1));return e.apply(e,t),this};j.prototype.init=function(){this.use(K.assign)};j.prototype.toBlob=function(e,t){var n=wt.assign({max:1/0},t),s={blob:e,opts:n};return this.initialized||(this.init(),this.initialized=!0),Promise.resolve(s).then(this._blob_to_image).then(this._calculate_size).then(this._transform).then(this._cleanup).then(this._create_blob).then(function(d){return d.out_canvas.width=d.out_canvas.height=0,d.out_blob})};j.prototype.toCanvas=function(e,t){var n=wt.assign({max:1/0},t),s={blob:e,opts:n};return this.initialized||(this.init(),this.initialized=!0),Promise.resolve(s).then(this._blob_to_image).then(this._calculate_size).then(this._transform).then(this._cleanup).then(function(d){return d.out_canvas})};j.prototype.before=function(e,t){if(!this[e])throw new Error('Method "'+e+'" does not exist');if(typeof t!="function")throw new Error('Invalid argument "fn", function expected');var n=this[e],s=this;return this[e]=function(d){return t.call(s,d).then(function(u){return n.call(s,u)})},this};j.prototype.after=function(e,t){if(!this[e])throw new Error('Method "'+e+'" does not exist');if(typeof t!="function")throw new Error('Invalid argument "fn", function expected');var n=this[e],s=this;return this[e]=function(d){return n.call(s,d).then(function(u){return t.call(s,u)})},this};j.prototype._blob_to_image=function(e){var t=window.URL||window.webkitURL||window.mozURL||window.msURL;return e.image=document.createElement("img"),e.image_url=t.createObjectURL(e.blob),e.image.src=e.image_url,new Promise(function(n,s){e.image.onerror=function(){s(new Error("ImageBlobReduce: failed to create Image() from blob"))},e.image.onload=function(){n(e)}})};j.prototype._calculate_size=function(e){var t=e.opts.max/Math.max(e.image.width,e.image.height);return t>1&&(t=1),e.transform_width=Math.max(Math.round(e.image.width*t),1),e.transform_height=Math.max(Math.round(e.image.height*t),1),e.scale_factor=t,Promise.resolve(e)};j.prototype._transform=function(e){e.out_canvas=this.pica.options.createCanvas(e.transform_width,e.transform_height),e.transform_width=null,e.transform_height=null;var t={alpha:e.blob.type==="image/png"};return this.utils.assign(t,this.utils.pick_pica_resize_options(e.opts)),this.pica.resize(e.image,e.out_canvas,t).then(function(){return e})};j.prototype._cleanup=function(e){e.image.src="",e.image=null;var t=window.URL||window.webkitURL||window.mozURL||window.msURL;return t.revokeObjectURL&&t.revokeObjectURL(e.image_url),e.image_url=null,Promise.resolve(e)};j.prototype._create_blob=function(e){return this.pica.toBlob(e.out_canvas,e.blob.type).then(function(t){return e.out_blob=t,e})};j.prototype._getUint8Array=function(e){return e.arrayBuffer?e.arrayBuffer().then(function(t){return new Uint8Array(t)}):new Promise(function(t,n){var s=new FileReader;s.readAsArrayBuffer(e),s.onload=function(){t(new Uint8Array(s.result))},s.onerror=function(){n(new Error("ImageBlobReduce: failed to load data from input blob")),s.abort()},s.onabort=function(){n(new Error("ImageBlobReduce: failed to load data from input blob (aborted)"))}})};j.pica=Rt;var tn=j;export{X as A,Ce as B,Se as C,Qe as D,Xe as E,ne as F,Oe as G,re as H,Jt as I,$t as J,Te as K,bt as L,Ye as M,Ge as N,De as O,Ke as P,J as Q,Me as R,Je as S,Ve as T,Re as U,be as V,We as a,qe as b,Ne as c,je as d,te as e,Ze as f,jt as g,Le as h,tn as i,xe as j,Ee as k,Ct as l,qt as m,ze as n,Ue as o,ve as p,Be as q,Bt as r,Nt as s,_t as t,Pe as u,He as v,$e as w,ke as x,ye as y,Fe as z};
