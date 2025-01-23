import{j as b}from"./jsx-runtime-DEdD30eg.js";import{r as te}from"./index-RYns6xqu.js";import{u as re,a as ne,f as ae,T as oe,P as ie,s as se,M as ce}from"./TaskList.stories-DtCPVm7T.js";import{i as ue,d as B,s as le,a as fe,c as de,R as pe,t as he,n as A,b as me}from"./decorators-86JrGkCj.js";import{w as ve,a as ge,b as we,c as $}from"./index-DEpIhj4w.js";import"./Task.stories-CX7k5jl_.js";import"./index-rNTiGNI1.js";function J(){const e=re(),{error:t}=ne(r=>r.taskbox);return te.useEffect(()=>{e(ae())},[]),t?b.jsx("div",{className:"page lists-show",children:b.jsxs("div",{className:"wrapper-message",children:[b.jsx("span",{className:"icon-face-sad"}),b.jsx("p",{className:"title-message",children:"Oh no!"}),b.jsx("p",{className:"subtitle-message",children:"Something went wrong"})]})}):b.jsxs("div",{className:"page lists-show",children:[b.jsx("nav",{children:b.jsx("h1",{className:"title-page",children:"Taskbox"})}),b.jsx(oe,{})]})}J.__docgenInfo={description:"",methods:[],displayName:"InboxScreen"};function ye(){ue(typeof URL<"u",B.formatMessage(`Global "URL" class is not defined. This likely means that you're running MSW in an environment that doesn't support all Node.js standard API (e.g. React Native). If that's the case, please use an appropriate polyfill for the "URL" class, like "react-native-url-polyfill".`))}function xe(e,t){return e.toLowerCase()===t.toLowerCase()}function Te(e){return e<300?"#69AB32":e<400?"#F0BB4B":"#E95F5D"}function Ee(){const e=new Date;return[e.getHours(),e.getMinutes(),e.getSeconds()].map(String).map(t=>t.slice(0,2)).map(t=>t.padStart(2,"0")).join(":")}async function Re(e){const r=await e.clone().text();return{url:new URL(e.url),method:e.method,headers:Object.fromEntries(e.headers.entries()),body:r}}const{message:be}=le;async function Se(e){const t=e.clone(),r=await t.text(),n=t.status||200,a=t.statusText||be[n]||"OK";return{status:n,statusText:a,headers:Object.fromEntries(t.headers.entries()),body:r}}function Ce(e){for(var t=[],r=0;r<e.length;){var n=e[r];if(n==="*"||n==="+"||n==="?"){t.push({type:"MODIFIER",index:r,value:e[r++]});continue}if(n==="\\"){t.push({type:"ESCAPED_CHAR",index:r++,value:e[r++]});continue}if(n==="{"){t.push({type:"OPEN",index:r,value:e[r++]});continue}if(n==="}"){t.push({type:"CLOSE",index:r,value:e[r++]});continue}if(n===":"){for(var a="",o=r+1;o<e.length;){var i=e.charCodeAt(o);if(i>=48&&i<=57||i>=65&&i<=90||i>=97&&i<=122||i===95){a+=e[o++];continue}break}if(!a)throw new TypeError("Missing parameter name at ".concat(r));t.push({type:"NAME",index:r,value:a}),r=o;continue}if(n==="("){var d=1,y="",o=r+1;if(e[o]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(o));for(;o<e.length;){if(e[o]==="\\"){y+=e[o++]+e[o++];continue}if(e[o]===")"){if(d--,d===0){o++;break}}else if(e[o]==="("&&(d++,e[o+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(o));y+=e[o++]}if(d)throw new TypeError("Unbalanced pattern at ".concat(r));if(!y)throw new TypeError("Missing pattern at ".concat(r));t.push({type:"PATTERN",index:r,value:y}),r=o;continue}t.push({type:"CHAR",index:r,value:e[r++]})}return t.push({type:"END",index:r,value:""}),t}function Pe(e,t){t===void 0&&(t={});for(var r=Ce(e),n=t.prefixes,a=n===void 0?"./":n,o=t.delimiter,i=o===void 0?"/#?":o,d=[],y=0,s=0,p="",l=function(E){if(s<r.length&&r[s].type===E)return r[s++].value},c=function(E){var g=l(E);if(g!==void 0)return g;var R=r[s],D=R.type,ee=R.index;throw new TypeError("Unexpected ".concat(D," at ").concat(ee,", expected ").concat(E))},m=function(){for(var E="",g;g=l("CHAR")||l("ESCAPED_CHAR");)E+=g;return E},w=function(E){for(var g=0,R=i;g<R.length;g++){var D=R[g];if(E.indexOf(D)>-1)return!0}return!1},u=function(E){var g=d[d.length-1],R=E||(g&&typeof g=="string"?g:"");if(g&&!R)throw new TypeError('Must have text between two parameters, missing text after "'.concat(g.name,'"'));return!R||w(R)?"[^".concat(_(i),"]+?"):"(?:(?!".concat(_(R),")[^").concat(_(i),"])+?")};s<r.length;){var v=l("CHAR"),h=l("NAME"),x=l("PATTERN");if(h||x){var T=v||"";a.indexOf(T)===-1&&(p+=T,T=""),p&&(d.push(p),p=""),d.push({name:h||y++,prefix:T,suffix:"",pattern:x||u(T),modifier:l("MODIFIER")||""});continue}var f=v||l("ESCAPED_CHAR");if(f){p+=f;continue}p&&(d.push(p),p="");var j=l("OPEN");if(j){var T=m(),C=l("NAME")||"",L=l("PATTERN")||"",k=m();c("CLOSE"),d.push({name:C||(L?y++:""),pattern:C&&!L?u(T):L,prefix:T,suffix:k,modifier:l("MODIFIER")||""});continue}c("END")}return d}function Oe(e,t){var r=[],n=K(e,r,t);return _e(n,r,t)}function _e(e,t,r){r===void 0&&(r={});var n=r.decode,a=n===void 0?function(o){return o}:n;return function(o){var i=e.exec(o);if(!i)return!1;for(var d=i[0],y=i.index,s=Object.create(null),p=function(c){if(i[c]===void 0)return"continue";var m=t[c-1];m.modifier==="*"||m.modifier==="+"?s[m.name]=i[c].split(m.prefix+m.suffix).map(function(w){return a(w,m)}):s[m.name]=a(i[c],m)},l=1;l<i.length;l++)p(l);return{path:d,index:y,params:s}}}function _(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Q(e){return e&&e.sensitive?"":"i"}function je(e,t){if(!t)return e;for(var r=/\((?:\?<(.*?)>)?(?!\?)/g,n=0,a=r.exec(e.source);a;)t.push({name:a[1]||n++,prefix:"",suffix:"",modifier:"",pattern:""}),a=r.exec(e.source);return e}function Ae(e,t,r){var n=e.map(function(a){return K(a,t,r).source});return new RegExp("(?:".concat(n.join("|"),")"),Q(r))}function ke(e,t,r){return Le(Pe(e,r),t,r)}function Le(e,t,r){r===void 0&&(r={});for(var n=r.strict,a=n===void 0?!1:n,o=r.start,i=o===void 0?!0:o,d=r.end,y=d===void 0?!0:d,s=r.encode,p=s===void 0?function(g){return g}:s,l=r.delimiter,c=l===void 0?"/#?":l,m=r.endsWith,w=m===void 0?"":m,u="[".concat(_(w),"]|$"),v="[".concat(_(c),"]"),h=i?"^":"",x=0,T=e;x<T.length;x++){var f=T[x];if(typeof f=="string")h+=_(p(f));else{var j=_(p(f.prefix)),C=_(p(f.suffix));if(f.pattern)if(t&&t.push(f),j||C)if(f.modifier==="+"||f.modifier==="*"){var L=f.modifier==="*"?"?":"";h+="(?:".concat(j,"((?:").concat(f.pattern,")(?:").concat(C).concat(j,"(?:").concat(f.pattern,"))*)").concat(C,")").concat(L)}else h+="(?:".concat(j,"(").concat(f.pattern,")").concat(C,")").concat(f.modifier);else{if(f.modifier==="+"||f.modifier==="*")throw new TypeError('Can not repeat "'.concat(f.name,'" without a prefix and suffix'));h+="(".concat(f.pattern,")").concat(f.modifier)}else h+="(?:".concat(j).concat(C,")").concat(f.modifier)}}if(y)a||(h+="".concat(v,"?")),h+=r.endsWith?"(?=".concat(u,")"):"$";else{var k=e[e.length-1],E=typeof k=="string"?v.indexOf(k[k.length-1])>-1:k===void 0;a||(h+="(?:".concat(v,"(?=").concat(u,"))?")),E||(h+="(?=".concat(v,"|").concat(u,")"))}return new RegExp(h,Q(r))}function K(e,t,r){return e instanceof RegExp?je(e,t):Array.isArray(e)?Ae(e,t,r):ke(e,t,r)}new TextEncoder;var Ue=Object.defineProperty,Ne=(e,t)=>{for(var r in t)Ue(e,r,{get:t[r],enumerable:!0})},De={};Ne(De,{blue:()=>Be,gray:()=>Ie,green:()=>Fe,red:()=>Me,yellow:()=>$e});function $e(e){return`\x1B[33m${e}\x1B[0m`}function Be(e){return`\x1B[34m${e}\x1B[0m`}function Ie(e){return`\x1B[90m${e}\x1B[0m`}function Me(e){return`\x1B[31m${e}\x1B[0m`}function Fe(e){return`\x1B[32m${e}\x1B[0m`}fe();function He(e,t=!0){return[t&&e.origin,e.pathname].filter(Boolean).join("")}const qe=/[\?|#].*$/g;function ze(e){return new URL(`/${e}`,"http://localhost").searchParams}function X(e){return e.endsWith("?")?e:e.replace(qe,"")}function We(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}function Ge(e,t){if(We(e)||e.startsWith("*"))return e;const r=t||typeof document<"u"&&document.baseURI;return r?decodeURI(new URL(encodeURI(e),r).href):e}function Je(e,t){if(e instanceof RegExp)return e;const r=Ge(e,t);return X(r)}function Qe(e){return e.replace(/([:a-zA-Z_-]*)(\*{1,2})+/g,(t,r,n)=>{const a="(.*)";return r?r.startsWith(":")?`${r}${n}`:`${r}${a}`:a}).replace(/([^\/])(:)(?=\d+)/,"$1\\$2").replace(/^([^\/]+)(:)(?=\/\/)/,"$1\\$2")}function Ke(e,t,r){const n=Je(t,r),a=typeof n=="string"?Qe(n):n,o=He(e),i=Oe(a,{decode:decodeURIComponent})(o),d=i&&i.params||{};return{matches:i!==!1,params:d}}var Xe=Object.create,Z=Object.defineProperty,Ze=Object.getOwnPropertyDescriptor,V=Object.getOwnPropertyNames,Ve=Object.getPrototypeOf,Ye=Object.prototype.hasOwnProperty,et=(e,t)=>function(){return t||(0,e[V(e)[0]])((t={exports:{}}).exports,t),t.exports},tt=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of V(t))!Ye.call(e,a)&&a!==r&&Z(e,a,{get:()=>t[a],enumerable:!(n=Ze(t,a))||n.enumerable});return e},rt=(e,t,r)=>(r=e!=null?Xe(Ve(e)):{},tt(Z(r,"default",{value:e,enumerable:!0}),e)),nt=et({"node_modules/cookie/index.js"(e){e.parse=n,e.serialize=a;var t=Object.prototype.toString,r=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function n(s,p){if(typeof s!="string")throw new TypeError("argument str must be a string");for(var l={},c=p||{},m=c.decode||o,w=0;w<s.length;){var u=s.indexOf("=",w);if(u===-1)break;var v=s.indexOf(";",w);if(v===-1)v=s.length;else if(v<u){w=s.lastIndexOf(";",u-1)+1;continue}var h=s.slice(w,u).trim();if(l[h]===void 0){var x=s.slice(u+1,v).trim();x.charCodeAt(0)===34&&(x=x.slice(1,-1)),l[h]=y(x,m)}w=v+1}return l}function a(s,p,l){var c=l||{},m=c.encode||i;if(typeof m!="function")throw new TypeError("option encode is invalid");if(!r.test(s))throw new TypeError("argument name is invalid");var w=m(p);if(w&&!r.test(w))throw new TypeError("argument val is invalid");var u=s+"="+w;if(c.maxAge!=null){var v=c.maxAge-0;if(isNaN(v)||!isFinite(v))throw new TypeError("option maxAge is invalid");u+="; Max-Age="+Math.floor(v)}if(c.domain){if(!r.test(c.domain))throw new TypeError("option domain is invalid");u+="; Domain="+c.domain}if(c.path){if(!r.test(c.path))throw new TypeError("option path is invalid");u+="; Path="+c.path}if(c.expires){var h=c.expires;if(!d(h)||isNaN(h.valueOf()))throw new TypeError("option expires is invalid");u+="; Expires="+h.toUTCString()}if(c.httpOnly&&(u+="; HttpOnly"),c.secure&&(u+="; Secure"),c.priority){var x=typeof c.priority=="string"?c.priority.toLowerCase():c.priority;switch(x){case"low":u+="; Priority=Low";break;case"medium":u+="; Priority=Medium";break;case"high":u+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}}if(c.sameSite){var T=typeof c.sameSite=="string"?c.sameSite.toLowerCase():c.sameSite;switch(T){case!0:u+="; SameSite=Strict";break;case"lax":u+="; SameSite=Lax";break;case"strict":u+="; SameSite=Strict";break;case"none":u+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return u}function o(s){return s.indexOf("%")!==-1?decodeURIComponent(s):s}function i(s){return encodeURIComponent(s)}function d(s){return t.call(s)==="[object Date]"||s instanceof Date}function y(s,p){try{return p(s)}catch{return s}}}}),at=rt(nt()),I=at.default;/*! Bundled license information:

cookie/index.js:
  (*!
   * cookie
   * Copyright(c) 2012-2014 Roman Shtylman
   * Copyright(c) 2015 Douglas Christopher Wilson
   * MIT Licensed
   *)
*/function M(){return I.parse(document.cookie)}function ot(e){if(typeof document>"u"||typeof location>"u")return{};switch(e.credentials){case"same-origin":{const t=new URL(e.url);return location.origin===t.origin?M():{}}case"include":return M();default:return{}}}function it(e){const t=e.headers.get("cookie"),r=t?I.parse(t):{},n=ot(e);for(const i in n)e.headers.append("cookie",I.serialize(i,n[i]));const a=de.getCookiesSync(e.url),o=Object.fromEntries(a.map(i=>[i.key,i.value]));for(const i of a)e.headers.append("cookie",i.toString());return{...n,...o,...r}}var O=(e=>(e.HEAD="HEAD",e.GET="GET",e.POST="POST",e.PUT="PUT",e.PATCH="PATCH",e.OPTIONS="OPTIONS",e.DELETE="DELETE",e))(O||{});class st extends pe{constructor(t,r,n,a){super({info:{header:`${t} ${r}`,path:r,method:t},resolver:n,options:a}),this.checkRedundantQueryParameters()}checkRedundantQueryParameters(){const{method:t,path:r}=this.info;if(r instanceof RegExp||X(r)===r)return;ze(r).forEach((o,i)=>{}),B.warn(`Found a redundant usage of query parameters in the request handler URL for "${t} ${r}". Please match against a path instead and access query parameters using "new URL(request.url).searchParams" instead. Learn more: https://mswjs.io/docs/recipes/query-parameters`)}async parse(t){var o;const r=new URL(t.request.url),n=Ke(r,this.info.path,(o=t.resolutionContext)==null?void 0:o.baseUrl),a=it(t.request);return{match:n,cookies:a}}predicate(t){const r=this.matchMethod(t.request.method),n=t.parsedResult.match.matches;return r&&n}matchMethod(t){return this.info.method instanceof RegExp?this.info.method.test(t):xe(this.info.method,t)}extendResolverArgs(t){var r;return{params:((r=t.parsedResult.match)==null?void 0:r.params)||{},cookies:t.parsedResult.cookies}}async log(t){const r=he(t.request.url),n=await Re(t.request),a=await Se(t.response),o=Te(a.status);console.groupCollapsed(B.formatMessage(`${Ee()} ${t.request.method} ${r} (%c${a.status} ${a.statusText}%c)`),`color:${o}`,"color:inherit"),console.log("Request",n),console.log("Handler:",this),console.log("Response",a),console.groupEnd()}}function P(e){return(t,r,n={})=>new st(e,t,r,n)}const Y={all:P(/.+/),head:P(O.HEAD),get:P(O.GET),post:P(O.POST),put:P(O.PUT),delete:P(O.DELETE),patch:P(O.PATCH),options:P(O.OPTIONS)};class S extends Response{constructor(t,r){const n=A(r);super(t,n),me(this,n)}static text(t,r){const n=A(r);return n.headers.has("Content-Type")||n.headers.set("Content-Type","text/plain"),n.headers.has("Content-Length")||n.headers.set("Content-Length",t?new Blob([t]).size.toString():"0"),new S(t,n)}static json(t,r){const n=A(r);n.headers.has("Content-Type")||n.headers.set("Content-Type","application/json");const a=JSON.stringify(t);return n.headers.has("Content-Length")||n.headers.set("Content-Length",a?new Blob([a]).size.toString():"0"),new S(a,n)}static xml(t,r){const n=A(r);return n.headers.has("Content-Type")||n.headers.set("Content-Type","text/xml"),new S(t,n)}static html(t,r){const n=A(r);return n.headers.has("Content-Type")||n.headers.set("Content-Type","text/html"),new S(t,n)}static arrayBuffer(t,r){const n=A(r);return t&&!n.headers.has("Content-Length")&&n.headers.set("Content-Length",t.byteLength.toString()),new S(t,n)}static formData(t,r){return new S(t,A(r))}}ye();const mt={component:J,title:"InboxScreen",decorators:[e=>b.jsx(ie,{store:se,children:e()})],tags:["autodocs"]},U={parameters:{msw:{handlers:[Y.get("https://jsonplaceholder.typicode.com/todos?userId=1",()=>S.json(ce.tasks))]}},play:async({canvasElement:e})=>{const t=ve(e);await ge(await t.findByTestId("loading")),await we(async()=>{await $.click(t.getByLabelText("pinTask-1")),await $.click(t.getByLabelText("pinTask-3")),await $.click(t.getByLabelText("pinTask-4"))})}},N={parameters:{msw:{handlers:[Y.get("https://jsonplaceholder.typicode.com/todos?userId=1",()=>new S(null,{status:403}))]}}};var F,H,q;U.parameters={...U.parameters,docs:{...(F=U.parameters)==null?void 0:F.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get('https://jsonplaceholder.typicode.com/todos?userId=1', () => {
        return HttpResponse.json(MockedState.tasks);
      })]
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // Waits for the component to transition from the loading state
    await waitForElementToBeRemoved(await canvas.findByTestId('loading'));
    // Waits for the component to be updated based on the store
    await waitFor(async () => {
      // Simulates pinning the first task
      await fireEvent.click(canvas.getByLabelText('pinTask-1'));
      // Simulates pinning the third task
      await fireEvent.click(canvas.getByLabelText('pinTask-3'));
      await fireEvent.click(canvas.getByLabelText('pinTask-4'));
    });
  }
}`,...(q=(H=U.parameters)==null?void 0:H.docs)==null?void 0:q.source}}};var z,W,G;N.parameters={...N.parameters,docs:{...(z=N.parameters)==null?void 0:z.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get('https://jsonplaceholder.typicode.com/todos?userId=1', () => {
        return new HttpResponse(null, {
          status: 403
        });
      })]
    }
  }
}`,...(G=(W=N.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};const vt=["Default","Error"];export{U as Default,N as Error,vt as __namedExportsOrder,mt as default};
