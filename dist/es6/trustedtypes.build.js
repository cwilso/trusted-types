(function(){/*

 Copyright 2017 Google Inc. All Rights Reserved.

 Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.

  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
*/
'use strict';function ca(a){const b=/\s+/;return a.trim().split(/\s*;\s*/).map(c=>c.split(b)).reduce(function(c,g){g[0]&&(c[g[0]]=g.slice(1).map(h=>h).sort());return c},{})}function da(a){const b=ca(a),c="trusted-types"in b;let g=["*"];c&&(g=b["trusted-types"].filter(h=>"'"!==h.charAt(0)));return new f(!0,c,g,a)}class f{constructor(a,b,c,g=null){this.b=a;this.a=b;this.c=c;this.f=g}};const ea=()=>{throw new TypeError("undefined conversion");},{toLowerCase:fa,toUpperCase:ha}=String.prototype;function v(){throw new TypeError("Illegal constructor");}function w(){throw new TypeError("Illegal constructor");}
const {TrustedTypes:I,B:ia,u:ja}=function(){function a(d){let e=N.get(d);void 0===e&&(e=m(null),N.set(d,e));return e}function b(d){const e=D(d);if(null==e||D(e)!==O)throw Error();for(const p of C(e))t(d,p,{value:d[p]});return d}function c(d,e){q(d.prototype);delete d.name;t(d,"name",{value:e})}function g(d){return e=>e instanceof d&&N.has(e)}function h(d,e){function p(x,P){const sa=e[P]||ea,ta=q(new x(Q,d));return q({[P](y){y=sa(""+y);if(void 0===y||null===y)y="";y=""+y;const aa=q(m(ta));a(aa).v=
y;return aa}}[P])}const k=m(v.prototype);for(const x of C(K))k[x]=p(K[x],x);t(k,"name",{value:d,writable:!1,configurable:!1,enumerable:!0});return q(k)}function l(d,e,p,k="",x=""){d=ha.apply(String(d));(k=x?x:k)||(k="http://www.w3.org/1999/xhtml");if(k=E.apply(u,[k])?u[k]:null){if(E.apply(k,[d])&&k[d]&&E.apply(k[d][e],[p])&&k[d][e][p])return k[d][e][p];if(E.apply(k,["*"])&&E.apply(k["*"][e],[p])&&k["*"][e][p])return k["*"][e][p]}}const {assign:r,create:m,defineProperty:t,freeze:q,getOwnPropertyNames:C,
getPrototypeOf:D,prototype:O}=Object,{hasOwnProperty:E}=O,{forEach:ua,push:va}=Array.prototype,Q=Symbol(),N=b(new WeakMap),F=b([]),R=b([]);let S=null,T=!1;class G{constructor(d,e){if(d!==Q)throw Error("cannot call the constructor");t(this,"policyName",{value:e,enumerable:!0})}toString(){return a(this).v}valueOf(){return a(this).v}}class n extends G{}c(n,"TrustedURL");class z extends G{}c(z,"TrustedScriptURL");class A extends G{}c(A,"TrustedHTML");class B extends G{}c(B,"TrustedScript");c(G,"TrustedType");
const ba=q(m(new A(Q,"")));a(ba).v="";const u={["http://www.w3.org/1999/xhtml"]:{A:{attributes:{href:n.name}},AREA:{attributes:{href:n.name}},AUDIO:{attributes:{src:n.name}},BASE:{attributes:{href:n.name}},BUTTON:{attributes:{formaction:n.name}},EMBED:{attributes:{src:z.name}},FORM:{attributes:{action:n.name}},FRAME:{attributes:{src:n.name}},IFRAME:{attributes:{src:n.name,srcdoc:A.name}},IMG:{attributes:{src:n.name}},INPUT:{attributes:{src:n.name,formaction:n.name}},LINK:{attributes:{href:n.name}},
OBJECT:{attributes:{data:z.name,codebase:z.name}},SCRIPT:{attributes:{src:z.name,text:B.name},properties:{innerText:B.name,textContent:B.name,text:B.name}},SOURCE:{attributes:{src:n.name}},TRACK:{attributes:{src:n.name}},VIDEO:{attributes:{src:n.name}},"*":{attributes:{},properties:{innerHTML:A.name,outerHTML:A.name}}},["http://www.w3.org/1999/xlink"]:{"*":{attributes:{href:n.name},properties:{}}},["http://www.w3.org/2000/svg"]:{"*":{attributes:{href:n.name},properties:{}}}};var H={codebase:"codeBase",
formaction:"formAction"};"srcdoc"in HTMLIFrameElement.prototype||delete u["http://www.w3.org/1999/xhtml"].IFRAME.attributes.srcdoc;for(const d of Object.keys(u["http://www.w3.org/1999/xhtml"])){u["http://www.w3.org/1999/xhtml"][d].properties||(u["http://www.w3.org/1999/xhtml"][d].properties={});for(const e of Object.keys(u["http://www.w3.org/1999/xhtml"][d].attributes))u["http://www.w3.org/1999/xhtml"][d].properties[H[e]?H[e]:e]=u["http://www.w3.org/1999/xhtml"][d].attributes[e]}for(const d of C(HTMLElement.prototype))"on"===
d.slice(0,2)&&(u["http://www.w3.org/1999/xhtml"]["*"].attributes[d]="TrustedScript");const K={createHTML:A,createScriptURL:z,createURL:n,createScript:B},wa=K.hasOwnProperty;H=m(w.prototype);r(H,{createPolicy:function(d,e){if(T&&-1===R.indexOf(d))throw new TypeError("Policy "+d+" disallowed.");if(-1!==F.indexOf(d))throw new TypeError("Policy "+d+" exists.");F.push(d);const p=m(null);if(e&&"object"===typeof e)for(const k of C(e))wa.call(K,k)&&(p[k]=e[k]);else console.warn("TrustedTypes.createPolicy "+
d+" was given an empty policy");q(p);e=h(d,p);"default"===d&&(S=e);return e},getPolicyNames:function(){return F.slice()},i:g(A),m:g(n),l:g(z),j:g(B),g:function(d,e,p="",k=""){e=fa.apply(String(e));return l(d,"attributes",e,p,k)},w:function(d,e,p=""){return l(d,"properties",String(e),p)},h:function(d=""){if(!d)try{d=document.documentElement.namespaceURI}catch(e){d="http://www.w3.org/1999/xhtml"}return(d=u[d])?JSON.parse(JSON.stringify(d)):{}},o:ba,TrustedHTML:A,TrustedURL:n,TrustedScriptURL:z,TrustedScript:B});
return{TrustedTypes:q(H),B:function(d){-1!==d.indexOf("*")?T=!1:(T=!0,R.length=0,ua.call(d,e=>{va.call(R,""+e)}))},u:function(){return S},C:function(){S=null;F.splice(F.indexOf("default"),1)}}}();const {defineProperty:J}=Object;function ka(a,b,c){J(a,b,{value:c})};const {apply:L}=Reflect,{getOwnPropertyNames:la,getOwnPropertyDescriptor:M,getPrototypeOf:ma}=Object,{hasOwnProperty:U}=Object.prototype,{slice:na}=String.prototype,oa="function"==typeof window.URL?URL.prototype.constructor:null;let pa;
const qa=document.createElement("div").constructor.name?a=>a.name:a=>(""+a).match(/^\[object (\S+)\]$/)[1],ra=M(window,"open")?window:window.constructor.prototype,xa=L(U,Element.prototype,["insertAdjacentHTML"])?Element.prototype:HTMLElement.prototype,ya=window.SecurityPolicyViolationEvent||null,V=I.h("http://www.w3.org/1999/xhtml"),W={TrustedHTML:I.TrustedHTML,TrustedScript:I.TrustedScript,TrustedScriptURL:I.TrustedScriptURL,TrustedURL:I.TrustedURL};
for(const a of Object.keys(V)){const b=V[a].properties;for(const [c,g]of Object.entries(b))b[c]=W[g]}const X={TrustedHTML:I.i,TrustedURL:I.m,TrustedScriptURL:I.l,TrustedScript:I.j},za={TrustedHTML:"createHTML",TrustedURL:"createURL",TrustedScriptURL:"createScriptURL",TrustedScript:"createScript"};
function Aa(a,b,c,g){function h(q){a.b.call(a,this,c,g,m,0,[q])}let l=b,r,m;var t=ma(Node.prototype);do(m=(r=M(l,c))?r.set:null)||(l=ma(l)||t);while(!m&&l!==t&&l);if(!(m instanceof Function))throw new TypeError("No setter for property "+c+" on object"+b);t=""+(b.constructor.name?b.constructor.name:b.constructor)+"-"+c;if(a.c[t])throw Error(`TrustedTypesEnforcer: Double installation detected: ${t} ${c}`);l===b?J(b,c,{set:h}):J(b,c,{set:h,get:r.get,configurable:!0});a.c[t]=m}
function Y(a,b,c,g,h){Z(a,b,c,function(l,...r){return a.b.call(a,this,c,g,l,h,r)})}function Ba(a){Z(a,Element.prototype,"setAttribute",function(b,...c){return a.s.bind(a,this,b).apply(a,c)});Z(a,Element.prototype,"setAttributeNS",function(b,...c){return a.f.bind(a,this,b).apply(a,c)})}function Ca(a){for(const b of la(V))for(const c of la(V[b].properties))Aa(a,window["*"==b?"HTMLElement":qa(document.createElement(b).constructor)].prototype,c,V[b].properties[c])}
function Da(a){ia(a.a.c);if(a.a.a||a.a.b)"ShadowRoot"in window&&Aa(a,ShadowRoot.prototype,"innerHTML",I.TrustedHTML),pa=function(b){return 0==b.createRange().createContextualFragment({toString:()=>"<div></div>"}).childNodes.length}(document),Y(a,Range.prototype,"createContextualFragment",I.TrustedHTML,0),Y(a,xa,"insertAdjacentHTML",I.TrustedHTML,1),M(Document.prototype,"write")?(Y(a,Document.prototype,"write",I.TrustedHTML,0),Y(a,Document.prototype,"open",I.TrustedURL,0)):(Y(a,HTMLDocument.prototype,
"write",I.TrustedHTML,0),Y(a,HTMLDocument.prototype,"open",I.TrustedURL,0)),Y(a,ra,"open",I.TrustedURL,0),"DOMParser"in window&&Y(a,DOMParser.prototype,"parseFromString",I.TrustedHTML,0),Y(a,window,"setInterval",I.TrustedScript,0),Y(a,window,"setTimeout",I.TrustedScript,0),Ba(a),Ca(a)}
function Z(a,b,c,g){var h=M(b,c);const l=h?h.value:null;if(!(l instanceof Function))throw new TypeError("Property "+c+" on object"+b+" is not a function");h=""+(b.constructor.name?b.constructor.name:b.constructor)+"-"+c;if(a.c[h])throw Error(`TrustedTypesEnforcer: Double installation detected: ${h} ${c}`);ka(b,c,function(...r){return g.bind(this,l).apply(this,r)});a.c[h]=l}
class Ea{constructor(a){this.a=a;this.c={}}s(a,b,...c){if(null!==a.constructor&&a instanceof Element){var g=(c[0]=String(c[0])).toLowerCase();if((g=I.g(a.tagName,g,a.namespaceURI))&&L(U,W,[g]))return this.b(a,"setAttribute",W[g],b,1,c)}return b.apply(a,c)}f(a,b,...c){if(null!==a.constructor&&a instanceof Element){var g=c[0]?String(c[0]):null;c[0]=g;const h=(c[1]=String(c[1])).toLowerCase();if((g=I.g(a.tagName,h,a.namespaceURI,g))&&L(U,W,[g]))return this.b(a,"setAttributeNS",W[g],b,2,c)}return b.apply(a,
c)}b(a,b,c,g,h,l){const r=l[h];var m=c.name;if(X.hasOwnProperty(m)&&X[m](r))return pa&&"createContextualFragment"==b&&(l[h]=l[h].toString()),L(g,a,l);if(c===I.TrustedScript){var t="setAttribute"==b||"setAttributeNS"===b||"on"===L(na,b,[0,2]);if(("setInterval"===b||"setTimeout"===b||t)&&"function"===typeof r||t&&null===r)return L(g,a,l)}if((t=ja.call(I))&&X.hasOwnProperty(m)){let D;try{var q=t[za[m]](r)}catch(O){D=!0}if(!D)return l[h]=q,L(g,a,l)}h=qa(a.constructor)||""+a;m=`Failed to set ${b} on ${h}: `+
`This property requires ${m}.`;this.a.b&&console.warn(m,b,a,c,r);if("function"==typeof ya){q="";if(c===I.TrustedURL||c===I.TrustedScriptURL){try{var C=new oa(r,document.baseURI||void 0)}catch(D){C=null}if(q=C||"")q=q.href}c=L(na,""+r,[0,40]);b=new ya("securitypolicyviolation",{bubbles:!0,blockedURI:q,disposition:this.a.a?"enforce":"report",documentURI:document.location.href,effectiveDirective:"trusted-types",originalPolicy:this.a.f,statusCode:0,violatedDirective:"trusted-types",sample:`${h}.${b} ${c}`});
a instanceof Node&&a.isConnected?a.dispatchEvent(b):document.dispatchEvent(b)}if(this.a.a)throw new TypeError(m);return L(g,a,l)}};if("undefined"!==typeof window&&"undefined"===typeof window.TrustedTypes){var Fa=Object.create(w.prototype);Object.assign(Fa,{isHTML:I.i,isURL:I.m,isScriptURL:I.l,isScript:I.j,createPolicy:I.createPolicy,getPolicyNames:I.getPolicyNames,getAttributeType:I.g,getPropertyType:I.w,getTypeMapping:I.h,emptyHTML:I.o,_isPolyfill_:!0});window.TrustedTypes=Object.freeze(Fa);window.TrustedHTML=I.TrustedHTML;window.TrustedURL=I.TrustedURL;window.TrustedScriptURL=I.TrustedScriptURL;window.TrustedScript=I.TrustedScript;
window.TrustedTypePolicy=v;window.TrustedTypePolicyFactory=w};function Ga(){try{var a;if(!(a=document.currentScript)){{const c=document.getElementsByTagName("script");a=c[c.length-1]}}if(a&&"Content-Security-Policy:"==a.textContent.trim().substr(0,24))return a.textContent.trim().slice(24);if(a.dataset.csp)return a.dataset.csp;const b=document.head.querySelector('meta[http-equiv^="Content-Security-Policy"]');if(b)return b.content.trim()}catch(b){}return null}
if(!window.TrustedTypes||window.TrustedTypes._isPolyfill_){{const a=Ga(),b=a?da(a):new f(!1,!1,["*"]);Da(new Ea(b))}};}).call(this);

//# sourceMappingURL=trustedtypes.build.js.map
