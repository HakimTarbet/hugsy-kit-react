/*! For license information please see hugsy-kit-react.js.LICENSE.txt */
!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("react")):"function"==typeof define&&define.amd?define(["react"],r):"object"==typeof exports?exports.hugsyKitReact=r(require("react")):e.hugsyKitReact=r(e.react)}(this,(e=>(()=>{"use strict";var r={970:(e,r,t)=>{t.d(r,{A:()=>l});var o=t(601),n=t.n(o),a=t(314),i=t.n(a)()(n());i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap);"]),i.push([e.id,':root{--primary-5: #E6E9ED;--primary-10: #CCD4DB;--primary-20: #99A9B7;--primary-30: #668092;--primary-40: #33576E;--primary-50: #002655;--primary-60: #00234D;--primary-70: #001E45;--primary-80: #00193C;--primary-90: #001432;--secondary-5: #E6E6E6;--secondary-10: #CCCCCC;--secondary-20: #999999;--secondary-30: #666666;--secondary-40: #4D4D4D;--secondary-50: #343434;--secondary-60: #2E2E2E;--secondary-70: #292929;--secondary-80: #232323;--secondary-90: #1D1D1D;--neutral-5: #F0F1F0;--neutral-10: #E1E2E2;--neutral-20: #C3C5C4;--neutral-30: #A5A8A6;--neutral-40: #878B89;--neutral-50: #8E918F;--neutral-60: #6F726F;--neutral-70: #606360;--neutral-80: #505450;--neutral-90: #404340;--white: #FFFFFF;--back: #343434;--success: #198754;--warning: #F6C833;--error: #E82727;--font-family: "Open Sans", serif}.dropdown{display:flex;flex-direction:column;max-width:377px;position:relative;font-family:var(--font-family);color:#747775;line-height:24px;font-size:14px}.dropdown__label{margin:0 0 8px 0}.dropdown__placeholder{display:flex;width:100%;align-items:center;justify-content:space-between;margin:0}.dropdown__placeholder--border{border-radius:6px;border:1px solid var(--neutral-40)}.dropdown__placeholder--grey{border-top:none;border-left:none;border-right:none;border-bottom:1px solid var(--neutral-40);background-color:var(--neutral-5)}.dropdown__placeholder--grey button{border-radius:0;background-color:var(--neutral-5)}.dropdown__placeholder--active{border-color:var(--primary-50);color:var(--primary-50)}.dropdown__placeholder--selected{color:var(--secondary-50)}.dropdown__placeholder-button{display:flex;width:100%;align-items:center;justify-content:space-between;padding:12px;background-color:var(--white);line-height:24px;font-size:14px;border:none;text-align:left;color:#747775;cursor:pointer;border-radius:6px}.dropdown__placeholder-button span{height:24px}.dropdown__placeholder-button--active{color:var(--primary-50)}.dropdown__placeholder-button--selected{color:var(--secondary-50)}.dropdown__placeholder svg{width:24px;height:24px}.dropdown__placeholder-clear{padding:10px 12px 11px 12px;background-color:var(--white);font-size:14px;border:none;cursor:pointer;border-radius:6px}.dropdown__options{position:absolute;top:calc(100% + 10px);left:0;width:100%;max-width:379px;padding:0;margin:0;display:flex;flex-direction:column;list-style:none;background-color:var(--white);box-shadow:0 4px 11px rgba(0,0,0,.11)}.dropdown__option{width:100%;display:flex}.dropdown__option-button{width:100%;padding:12px;background-color:var(--white);color:var(--secondary-50);border-left:5px solid var(--white);border-top:none;border-bottom:none;border-right:none;line-height:24px;font-size:14px;text-align:left;cursor:pointer}.dropdown__option-button--active{border-left-color:var(--primary-50);background-color:var(--white)}.dropdown__option-button:hover{border-left-color:var(--primary-50);background-color:var(--primary-5)}',""]);const l=i},410:(e,r,t)=>{t.d(r,{A:()=>l});var o=t(601),n=t.n(o),a=t(314),i=t.n(a)()(n());i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap);"]),i.push([e.id,':root{--primary-5: #E6E9ED;--primary-10: #CCD4DB;--primary-20: #99A9B7;--primary-30: #668092;--primary-40: #33576E;--primary-50: #002655;--primary-60: #00234D;--primary-70: #001E45;--primary-80: #00193C;--primary-90: #001432;--secondary-5: #E6E6E6;--secondary-10: #CCCCCC;--secondary-20: #999999;--secondary-30: #666666;--secondary-40: #4D4D4D;--secondary-50: #343434;--secondary-60: #2E2E2E;--secondary-70: #292929;--secondary-80: #232323;--secondary-90: #1D1D1D;--neutral-5: #F0F1F0;--neutral-10: #E1E2E2;--neutral-20: #C3C5C4;--neutral-30: #A5A8A6;--neutral-40: #878B89;--neutral-50: #8E918F;--neutral-60: #6F726F;--neutral-70: #606360;--neutral-80: #505450;--neutral-90: #404340;--white: #FFFFFF;--back: #343434;--success: #198754;--warning: #F6C833;--error: #E82727;--font-family: "Open Sans", serif}h1{margin:0;font-family:var(--font-family);color:var(--secondary-50);font-size:34px;line-height:48px;font-weight:700}h2{margin:0;font-family:var(--font-family);color:var(--secondary-50);font-size:28px;line-height:40px;font-weight:700}h3{margin:0;font-family:var(--font-family);color:var(--secondary-50);font-size:24px;line-height:32px;font-weight:700}h4{margin:0;font-family:var(--font-family);color:var(--secondary-50);font-size:20px;line-height:30px;font-weight:700}h5{margin:0;font-family:var(--font-family);color:var(--secondary-50);font-size:18px;line-height:24px;font-weight:700}h6{margin:0;font-family:var(--font-family);color:var(--secondary-50);font-size:16px;line-height:20px;font-weight:700}',""]);const l=i},412:(e,r,t)=>{t.d(r,{A:()=>l});var o=t(601),n=t.n(o),a=t(314),i=t.n(a)()(n());i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap);"]),i.push([e.id,':root{--primary-5: #E6E9ED;--primary-10: #CCD4DB;--primary-20: #99A9B7;--primary-30: #668092;--primary-40: #33576E;--primary-50: #002655;--primary-60: #00234D;--primary-70: #001E45;--primary-80: #00193C;--primary-90: #001432;--secondary-5: #E6E6E6;--secondary-10: #CCCCCC;--secondary-20: #999999;--secondary-30: #666666;--secondary-40: #4D4D4D;--secondary-50: #343434;--secondary-60: #2E2E2E;--secondary-70: #292929;--secondary-80: #232323;--secondary-90: #1D1D1D;--neutral-5: #F0F1F0;--neutral-10: #E1E2E2;--neutral-20: #C3C5C4;--neutral-30: #A5A8A6;--neutral-40: #878B89;--neutral-50: #8E918F;--neutral-60: #6F726F;--neutral-70: #606360;--neutral-80: #505450;--neutral-90: #404340;--white: #FFFFFF;--back: #343434;--success: #198754;--warning: #F6C833;--error: #E82727;--font-family: "Open Sans", serif}.select{display:flex;flex-direction:column;max-width:377px;position:relative;font-family:var(--font-family);color:#747775;line-height:24px;font-size:14px}.select__label{margin:0 0 8px 0}.select__field{padding:12px;background-color:rgba(0,0,0,0)}.select__field--border{border-radius:6px;border:1px solid var(--neutral-40)}.select__field--grey{border-top:none;border-left:none;border-right:none;border-bottom:1px solid var(--neutral-40);background-color:var(--neutral-5)}.select__field--grey button{border-radius:0;background-color:var(--neutral-5)}',""]);const l=i},314:e=>{e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var t="",o=void 0!==r[5];return r[4]&&(t+="@supports (".concat(r[4],") {")),r[2]&&(t+="@media ".concat(r[2]," {")),o&&(t+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),t+=e(r),o&&(t+="}"),r[2]&&(t+="}"),r[4]&&(t+="}"),t})).join("")},r.i=function(e,t,o,n,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var l=0;l<this.length;l++){var d=this[l][0];null!=d&&(i[d]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);o&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),n&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=n):s[4]="".concat(n)),r.push(s))}},r}},601:e=>{e.exports=function(e){return e[1]}},20:(e,r,t)=>{var o=t(155),n=Symbol.for("react.element"),a=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,t){var o,d={},c=null,s=null;for(o in void 0!==t&&(c=""+t),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(s=r.ref),r)a.call(r,o)&&!l.hasOwnProperty(o)&&(d[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps)void 0===d[o]&&(d[o]=r[o]);return{$$typeof:n,type:e,key:c,ref:s,props:d,_owner:i.current}}r.jsx=d,r.jsxs=d},848:(e,r,t)=>{e.exports=t(20)},72:e=>{var r=[];function t(e){for(var t=-1,o=0;o<r.length;o++)if(r[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},i=[],l=0;l<e.length;l++){var d=e[l],c=o.base?d[0]+o.base:d[0],s=a[c]||0,p="".concat(c," ").concat(s);a[c]=s+1;var u=t(p),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)r[u].references++,r[u].updater(f);else{var y=n(f,o);o.byIndex=l,r.splice(l,0,{identifier:p,updater:y,references:1})}i.push(p)}return i}function n(e,r){var t=r.domAPI(r);return t.update(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap&&r.supports===e.supports&&r.layer===e.layer)return;t.update(e=r)}else t.remove()}}e.exports=function(e,n){var a=o(e=e||[],n=n||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var l=t(a[i]);r[l].references--}for(var d=o(e,n),c=0;c<a.length;c++){var s=t(a[c]);0===r[s].references&&(r[s].updater(),r.splice(s,1))}a=d}}},659:e=>{var r={};e.exports=function(e,t){var o=function(e){if(void 0===r[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}r[e]=t}return r[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:e=>{e.exports=function(e){var r=document.createElement("style");return e.setAttributes(r,e.attributes),e.insert(r,e.options),r}},56:(e,r,t)=>{e.exports=function(e){var r=t.nc;r&&e.setAttribute("nonce",r)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=e.insertStyleElement(e);return{update:function(t){!function(e,r,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var n=void 0!==t.layer;n&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,n&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(o,e,r.options)}(r,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)}}}},113:e=>{e.exports=function(e,r){if(r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}},155:r=>{r.exports=e}},t={};function o(e){var n=t[e];if(void 0!==n)return n.exports;var a=t[e]={id:e,exports:{}};return r[e](a,a.exports,o),a.exports}o.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return o.d(r,{a:r}),r},o.d=(e,r)=>{for(var t in r)o.o(r,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nc=void 0;var n={};o.r(n),o.d(n,{Dropdown:()=>D,Heading:()=>g,Select:()=>O});var a=o(848),i=o(72),l=o.n(i),d=o(825),c=o.n(d),s=o(659),p=o.n(s),u=o(56),f=o.n(u),y=o(540),h=o.n(y),m=o(113),v=o.n(m),b=o(410),x={};x.styleTagTransform=v(),x.setAttributes=f(),x.insert=p().bind(null,"head"),x.domAPI=c(),x.insertStyleElement=h(),l()(b.A,x),b.A&&b.A.locals&&b.A.locals;var g=function(e){var r=e.level,t=void 0===r?1:r,o=e.children,n="h".concat(t);return(0,a.jsx)(n,{children:o})},_=o(155);function w({title:e,titleId:r,...t},o){return _.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":r},t),e?_.createElement("title",{id:r},e):null,_.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m19.5 8.25-7.5 7.5-7.5-7.5"}))}const E=_.forwardRef(w);function C({title:e,titleId:r,...t},o){return _.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":r},t),e?_.createElement("title",{id:r},e):null,_.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"}))}const F=_.forwardRef(C);var j=o(970),A={};A.styleTagTransform=v(),A.setAttributes=f(),A.insert=p().bind(null,"head"),A.domAPI=c(),A.insertStyleElement=h(),l()(j.A,A),j.A&&j.A.locals&&j.A.locals;var D=function(e){var r=e.label,t=e.placeholder,o=e.options,n=e.onSelectOption,i=e.selectedOption,l=void 0===i?null:i,d=e.style,c=void 0===d?"border":d,s=(0,_.useState)(l),p=s[0],u=s[1],f=(0,_.useState)(!1),y=f[0],h=f[1],m=(0,_.useRef)(null),v=(0,_.useRef)(null);return(0,_.useEffect)((function(){document.addEventListener("mousedown",(function(e){m.current&&v.current&&!m.current.contains(e.target)&&!v.current.contains(e.target)&&h(!1)}))}),[]),(0,a.jsxs)("div",{className:"dropdown",children:[r&&(0,a.jsx)("p",{className:"dropdown__label","data-testid":"dropdown-label",children:r}),(0,a.jsxs)("p",{ref:v,"data-testid":"dropdown-placeholder",className:"dropdown__placeholder dropdown__placeholder--".concat(c,"\n        ").concat(y?"dropdown__placeholder--active":""," \n        ").concat(p?"dropdown__placeholder--selected":"","\n      "),children:[(0,a.jsxs)("button",{className:"dropdown__placeholder-button \n          ".concat(y?"dropdown__placeholder-button--active":""," \n          ").concat(p?"dropdown__placeholder-button--selected":"","\n        "),"data-testid":"dropdown-placeholder-button",onClick:function(){h(!y)},children:[(0,a.jsx)("span",{children:(null==p?void 0:p.text)||t}),!p&&(0,a.jsx)("span",{"data-testid":"dropdown-chevron",children:(0,a.jsx)(E,{})})]}),p&&(0,a.jsx)("button",{className:"dropdown__placeholder-clear","data-testid":"dropdown-clear",onClick:function(){u(null),h(!1),n(null)},children:(0,a.jsx)(F,{})})]}),y&&(0,a.jsx)("ul",{ref:m,className:"dropdown__options","data-testid":"dropdown-options",children:o.map((function(e){return(0,a.jsx)("li",{className:"dropdown__option","data-testid":"dropdown-option-".concat(e.id),children:(0,a.jsx)("button",{className:"dropdown__option-button ".concat(e.id==(null==p?void 0:p.id)?"dropdown__option-button--active":""),"data-testid":"dropdown-option-".concat(e.id,"-button"),onClick:function(r){return function(e){u(e),h(!1),n(e)}(e)},children:e.text})},e.id)}))})]})},S=o(412),k={};k.styleTagTransform=v(),k.setAttributes=f(),k.insert=p().bind(null,"head"),k.domAPI=c(),k.insertStyleElement=h(),l()(S.A,k),S.A&&S.A.locals&&S.A.locals;var O=function(e){var r=e.selectId,t=e.placeholder,o=e.options,n=e.onSelectChange,i=e.label,l=e.selectedOption,d=void 0===l?null:l,c=e.style,s=void 0===c?"border":c,p=e.error,u=void 0===p?null:p,f=e.success,y=void 0===f?null:f,h=e.required,m=void 0!==h&&h,v=(0,_.useState)(d),b=v[0],x=v[1];return(0,a.jsxs)("div",{"data-testid":"select-".concat(r),className:"select",children:[i&&(0,a.jsx)("label",{className:"select__label","data-testid":"select-".concat(r,"-label"),htmlFor:r,children:i}),(0,a.jsxs)("select",{name:r,"data-testid":"select-".concat(r,"-field"),className:"select__field select__field--".concat(s," \n          ").concat(u?"select__field--error":""," \n          ").concat(y?"select__field--success":""),onChange:function(e){var r,t=e.target.value;r=""===t?null:o.find((function(e){return e.id===String(t)}))||null,x(r),n(r)},value:b?b.id:"",required:m,children:[!b&&(0,a.jsx)("option",{value:"",children:t},"default"),o.map((function(e){return(0,a.jsx)("option",{value:e.id,children:e.text},e.id)}))]}),u&&(0,a.jsx)("p",{"data-testid":"select-".concat(r,"-error"),className:"select__error",children:u}),y&&(0,a.jsx)("p",{"data-testid":"select-".concat(r,"-success"),className:"select__success",children:y})]})};return n})()));