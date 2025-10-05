import{g as sl}from"./react-BXKVwpXS.js";var as={exports:{}},us={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ro;function il(){return Ro||(Ro=1,(function(n){function t(D,q){var j=D.length;D.push(q);t:for(;0<j;){var J=j-1>>>1,at=D[J];if(0<s(at,q))D[J]=q,D[j]=at,j=J;else break t}}function e(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var q=D[0],j=D.pop();if(j!==q){D[0]=j;t:for(var J=0,at=D.length,de=at>>>1;J<de;){var me=2*(J+1)-1,Se=D[me],Pt=me+1,Kt=D[Pt];if(0>s(Se,j))Pt<at&&0>s(Kt,Se)?(D[J]=Kt,D[Pt]=j,J=Pt):(D[J]=Se,D[me]=j,J=me);else if(Pt<at&&0>s(Kt,j))D[J]=Kt,D[Pt]=j,J=Pt;else break t}}return q}function s(D,q){var j=D.sortIndex-q.sortIndex;return j!==0?j:D.id-q.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var o=performance;n.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();n.unstable_now=function(){return a.now()-l}}var h=[],d=[],p=1,E=null,k=3,S=!1,x=!1,M=!1,C=!1,G=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,Q=typeof setImmediate<"u"?setImmediate:null;function ot(D){for(var q=e(d);q!==null;){if(q.callback===null)r(d);else if(q.startTime<=D)r(d),q.sortIndex=q.expirationTime,t(h,q);else break;q=e(d)}}function dt(D){if(M=!1,ot(D),!x)if(e(h)!==null)x=!0,tt||(tt=!0,I());else{var q=e(d);q!==null&&Dt(dt,q.startTime-D)}}var tt=!1,T=-1,m=5,_=-1;function w(){return C?!0:!(n.unstable_now()-_<m)}function y(){if(C=!1,tt){var D=n.unstable_now();_=D;var q=!0;try{t:{x=!1,M&&(M=!1,H(T),T=-1),S=!0;var j=k;try{e:{for(ot(D),E=e(h);E!==null&&!(E.expirationTime>D&&w());){var J=E.callback;if(typeof J=="function"){E.callback=null,k=E.priorityLevel;var at=J(E.expirationTime<=D);if(D=n.unstable_now(),typeof at=="function"){E.callback=at,ot(D),q=!0;break e}E===e(h)&&r(h),ot(D)}else r(h);E=e(h)}if(E!==null)q=!0;else{var de=e(d);de!==null&&Dt(dt,de.startTime-D),q=!1}}break t}finally{E=null,k=j,S=!1}q=void 0}}finally{q?I():tt=!1}}}var I;if(typeof Q=="function")I=function(){Q(y)};else if(typeof MessageChannel<"u"){var g=new MessageChannel,Tt=g.port2;g.port1.onmessage=y,I=function(){Tt.postMessage(null)}}else I=function(){G(y,0)};function Dt(D,q){T=G(function(){D(n.unstable_now())},q)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(D){D.callback=null},n.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):m=0<D?Math.floor(1e3/D):5},n.unstable_getCurrentPriorityLevel=function(){return k},n.unstable_next=function(D){switch(k){case 1:case 2:case 3:var q=3;break;default:q=k}var j=k;k=q;try{return D()}finally{k=j}},n.unstable_requestPaint=function(){C=!0},n.unstable_runWithPriority=function(D,q){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var j=k;k=D;try{return q()}finally{k=j}},n.unstable_scheduleCallback=function(D,q,j){var J=n.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?J+j:J):j=J,D){case 1:var at=-1;break;case 2:at=250;break;case 5:at=1073741823;break;case 4:at=1e4;break;default:at=5e3}return at=j+at,D={id:p++,callback:q,priorityLevel:D,startTime:j,expirationTime:at,sortIndex:-1},j>J?(D.sortIndex=j,t(d,D),e(h)===null&&D===e(d)&&(M?(H(T),T=-1):M=!0,Dt(dt,j-J))):(D.sortIndex=at,t(h,D),x||S||(x=!0,tt||(tt=!0,I()))),D},n.unstable_shouldYield=w,n.unstable_wrapCallback=function(D){var q=k;return function(){var j=k;k=q;try{return D.apply(this,arguments)}finally{k=j}}}})(us)),us}var So;function Eg(){return So||(So=1,as.exports=il()),as.exports}const ol=()=>{};var Po={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},al=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],a=n[e++],l=n[e++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},Ga={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,l=a?n[s+1]:0,h=s+2<n.length,d=h?n[s+2]:0,p=o>>2,E=(o&3)<<4|l>>4;let k=(l&15)<<2|d>>6,S=d&63;h||(S=64,a||(k=64)),r.push(e[p],e[E],e[k],e[S])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray($a(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):al(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],l=s<n.length?e[n.charAt(s)]:0;++s;const d=s<n.length?e[n.charAt(s)]:64;++s;const E=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||l==null||d==null||E==null)throw new ul;const k=o<<2|l>>4;if(r.push(k),d!==64){const S=l<<4&240|d>>2;if(r.push(S),E!==64){const x=d<<6&192|E;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class ul extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const cl=function(n){const t=$a(n);return Ga.encodeByteArray(t,!0)},ur=function(n){return cl(n).replace(/\./g,"")},ll=function(n){try{return Ga.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fl=()=>hl().__FIREBASE_DEFAULTS__,dl=()=>{if(typeof process>"u"||typeof Po>"u")return;const n=Po.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ml=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&ll(n[1]);return t&&JSON.parse(t)},$s=()=>{try{return ol()||fl()||dl()||ml()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},gl=n=>$s()?.emulatorHosts?.[n],pl=n=>{const t=gl(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Ha=()=>$s()?.config;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gs(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function yl(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function El(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...n};return[ur(JSON.stringify(e)),ur(JSON.stringify(a)),""].join(".")}const En={};function Tl(){const n={prod:[],emulator:[]};for(const t of Object.keys(En))En[t]?n.emulator.push(t):n.prod.push(t);return n}function wl(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let Co=!1;function Il(n,t){if(typeof window>"u"||typeof document>"u"||!Gs(window.location.host)||En[n]===t||En[n]||Co)return;En[n]=t;function e(k){return`__firebase__banner__${k}`}const r="__firebase__banner",o=Tl().prod.length>0;function a(){const k=document.getElementById(r);k&&k.remove()}function l(k){k.style.display="flex",k.style.background="#7faaf0",k.style.position="fixed",k.style.bottom="5px",k.style.left="5px",k.style.padding=".5em",k.style.borderRadius="5px",k.style.alignItems="center"}function h(k,S){k.setAttribute("width","24"),k.setAttribute("id",S),k.setAttribute("height","24"),k.setAttribute("viewBox","0 0 24 24"),k.setAttribute("fill","none"),k.style.marginLeft="-6px"}function d(){const k=document.createElement("span");return k.style.cursor="pointer",k.style.marginLeft="16px",k.style.fontSize="24px",k.innerHTML=" &times;",k.onclick=()=>{Co=!0,a()},k}function p(k,S){k.setAttribute("id",S),k.innerText="Learn more",k.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",k.setAttribute("target","__blank"),k.style.paddingLeft="5px",k.style.textDecoration="underline"}function E(){const k=wl(r),S=e("text"),x=document.getElementById(S)||document.createElement("span"),M=e("learnmore"),C=document.getElementById(M)||document.createElement("a"),G=e("preprendIcon"),H=document.getElementById(G)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(k.created){const Q=k.element;l(Q),p(C,M);const ot=d();h(H,G),Q.append(H,x,C,ot),document.body.appendChild(Q)}o?(x.innerText="Preview backend disconnected.",H.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(H.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,x.innerText="Preview backend running in this workspace."),x.setAttribute("id",S)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",E):E()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vl(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function kl(){const n=$s()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Al(){return!kl()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function bl(){try{return typeof indexedDB=="object"}catch{return!1}}function Rl(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{t(s.error?.message||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sl="FirebaseError";class Ke extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Sl,Object.setPrototypeOf(this,Ke.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ka.prototype.create)}}class Ka{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?Pl(o,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new Ke(s,l,r)}}function Pl(n,t){return n.replace(Cl,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Cl=/\{\$([^}]+)}/g;function cr(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],a=t[s];if(Vo(o)&&Vo(a)){if(!cr(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function Vo(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(n){return n&&n._delegate?n._delegate:n}class kn{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Te="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new _l;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t?.identifier),r=t?.optional??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Nl(t))try{this.getOrInitializeService({instanceIdentifier:Te})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=Te){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Te){return this.instances.has(t)}getOptions(t=Te){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&a.resolve(s)}return s}onInit(t,e){const r=this.normalizeInstanceIdentifier(e),s=this.onInitCallbacks.get(r)??new Set;s.add(t),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&t(o,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Dl(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Te){return this.component?this.component.multipleInstances?t:Te:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Dl(n){return n===Te?void 0:n}function Nl(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Vl(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var W;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(W||(W={}));const Ml={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},Ol=W.INFO,Ll={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},Fl=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=Ll[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Wa{constructor(t){this.name=t,this._logLevel=Ol,this._logHandler=Fl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in W))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Ml[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...t),this._logHandler(this,W.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...t),this._logHandler(this,W.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,W.INFO,...t),this._logHandler(this,W.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,W.WARN,...t),this._logHandler(this,W.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...t),this._logHandler(this,W.ERROR,...t)}}const Ul=(n,t)=>t.some(e=>n instanceof e);let Do,No;function jl(){return Do||(Do=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Bl(){return No||(No=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Qa=new WeakMap,vs=new WeakMap,Xa=new WeakMap,cs=new WeakMap,Hs=new WeakMap;function ql(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(ee(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&Qa.set(e,n)}).catch(()=>{}),Hs.set(t,n),t}function zl(n){if(vs.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});vs.set(n,t)}let ks={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return vs.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Xa.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return ee(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function $l(n){ks=n(ks)}function Gl(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(ls(this),t,...e);return Xa.set(r,t.sort?t.sort():[t]),ee(r)}:Bl().includes(n)?function(...t){return n.apply(ls(this),t),ee(Qa.get(this))}:function(...t){return ee(n.apply(ls(this),t))}}function Hl(n){return typeof n=="function"?Gl(n):(n instanceof IDBTransaction&&zl(n),Ul(n,jl())?new Proxy(n,ks):n)}function ee(n){if(n instanceof IDBRequest)return ql(n);if(cs.has(n))return cs.get(n);const t=Hl(n);return t!==n&&(cs.set(n,t),Hs.set(t,n)),t}const ls=n=>Hs.get(n);function Kl(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,t),l=ee(a);return r&&a.addEventListener("upgradeneeded",h=>{r(ee(a.result),h.oldVersion,h.newVersion,ee(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),l.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const Wl=["get","getKey","getAll","getAllKeys","count"],Ql=["put","add","delete","clear"],hs=new Map;function xo(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(hs.get(t))return hs.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=Ql.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Wl.includes(e)))return;const o=async function(a,...l){const h=this.transaction(a,s?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[e](...l),s&&h.done]))[0]};return hs.set(t,o),o}$l(n=>({...n,get:(t,e,r)=>xo(t,e)||n.get(t,e,r),has:(t,e)=>!!xo(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Yl(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Yl(n){return n.getComponent()?.type==="VERSION"}const As="@firebase/app",Mo="0.14.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t=new Wa("@firebase/app"),Jl="@firebase/app-compat",Zl="@firebase/analytics-compat",th="@firebase/analytics",eh="@firebase/app-check-compat",nh="@firebase/app-check",rh="@firebase/auth",sh="@firebase/auth-compat",ih="@firebase/database",oh="@firebase/data-connect",ah="@firebase/database-compat",uh="@firebase/functions",ch="@firebase/functions-compat",lh="@firebase/installations",hh="@firebase/installations-compat",fh="@firebase/messaging",dh="@firebase/messaging-compat",mh="@firebase/performance",gh="@firebase/performance-compat",ph="@firebase/remote-config",_h="@firebase/remote-config-compat",yh="@firebase/storage",Eh="@firebase/storage-compat",Th="@firebase/firestore",wh="@firebase/ai",Ih="@firebase/firestore-compat",vh="firebase",kh="12.3.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs="[DEFAULT]",Ah={[As]:"fire-core",[Jl]:"fire-core-compat",[th]:"fire-analytics",[Zl]:"fire-analytics-compat",[nh]:"fire-app-check",[eh]:"fire-app-check-compat",[rh]:"fire-auth",[sh]:"fire-auth-compat",[ih]:"fire-rtdb",[oh]:"fire-data-connect",[ah]:"fire-rtdb-compat",[uh]:"fire-fn",[ch]:"fire-fn-compat",[lh]:"fire-iid",[hh]:"fire-iid-compat",[fh]:"fire-fcm",[dh]:"fire-fcm-compat",[mh]:"fire-perf",[gh]:"fire-perf-compat",[ph]:"fire-rc",[_h]:"fire-rc-compat",[yh]:"fire-gcs",[Eh]:"fire-gcs-compat",[Th]:"fire-fst",[Ih]:"fire-fst-compat",[wh]:"fire-vertex","fire-js":"fire-js",[vh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr=new Map,bh=new Map,Rs=new Map;function Oo(n,t){try{n.container.addComponent(t)}catch(e){$t.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function hr(n){const t=n.name;if(Rs.has(t))return $t.debug(`There were multiple attempts to register component ${t}.`),!1;Rs.set(t,n);for(const e of lr.values())Oo(e,n);for(const e of bh.values())Oo(e,n);return!0}function Rh(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function Sh(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ph={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ne=new Ka("app","Firebase",Ph);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(t,e,r){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new kn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ne.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vh=kh;function Dh(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r={name:bs,automaticDataCollectionEnabled:!0,...t},s=r.name;if(typeof s!="string"||!s)throw ne.create("bad-app-name",{appName:String(s)});if(e||(e=Ha()),!e)throw ne.create("no-options");const o=lr.get(s);if(o){if(cr(e,o.options)&&cr(r,o.config))return o;throw ne.create("duplicate-app",{appName:s})}const a=new xl(s);for(const h of Rs.values())a.addComponent(h);const l=new Ch(e,r,a);return lr.set(s,l),l}function Nh(n=bs){const t=lr.get(n);if(!t&&n===bs&&Ha())return Dh();if(!t)throw ne.create("no-app",{appName:n});return t}function Oe(n,t,e){let r=Ah[n]??n;e&&(r+=`-${e}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${t}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),$t.warn(a.join(" "));return}hr(new kn(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xh="firebase-heartbeat-database",Mh=1,An="firebase-heartbeat-store";let fs=null;function Ya(){return fs||(fs=Kl(xh,Mh,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(An)}catch(e){console.warn(e)}}}}).catch(n=>{throw ne.create("idb-open",{originalErrorMessage:n.message})})),fs}async function Oh(n){try{const e=(await Ya()).transaction(An),r=await e.objectStore(An).get(Ja(n));return await e.done,r}catch(t){if(t instanceof Ke)$t.warn(t.message);else{const e=ne.create("idb-get",{originalErrorMessage:t?.message});$t.warn(e.message)}}}async function Lo(n,t){try{const r=(await Ya()).transaction(An,"readwrite");await r.objectStore(An).put(t,Ja(n)),await r.done}catch(e){if(e instanceof Ke)$t.warn(e.message);else{const r=ne.create("idb-set",{originalErrorMessage:e?.message});$t.warn(r.message)}}}function Ja(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lh=1024,Fh=30;class Uh{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Bh(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Fo();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:e}),this._heartbeatsCache.heartbeats.length>Fh){const s=qh(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){$t.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Fo(),{heartbeatsToSend:e,unsentEntries:r}=jh(this._heartbeatsCache.heartbeats),s=ur(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return $t.warn(t),""}}}function Fo(){return new Date().toISOString().substring(0,10)}function jh(n,t=Lh){const e=[];let r=n.slice();for(const s of n){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),Uo(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Uo(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Bh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bl()?Rl().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Oh(this.app);return e?.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Lo(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Lo(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Uo(n){return ur(JSON.stringify({version:2,heartbeats:n})).length}function qh(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zh(n){hr(new kn("platform-logger",t=>new Xl(t),"PRIVATE")),hr(new kn("heartbeat",t=>new Uh(t),"PRIVATE")),Oe(As,Mo,n),Oe(As,Mo,"esm2020"),Oe("fire-js","")}zh("");var jo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var re,Za;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,m){function _(){}_.prototype=m.prototype,T.F=m.prototype,T.prototype=new _,T.prototype.constructor=T,T.D=function(w,y,I){for(var g=Array(arguments.length-2),Tt=2;Tt<arguments.length;Tt++)g[Tt-2]=arguments[Tt];return m.prototype[y].apply(w,g)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(r,e),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,m,_){_||(_=0);const w=Array(16);if(typeof m=="string")for(var y=0;y<16;++y)w[y]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(y=0;y<16;++y)w[y]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=T.g[0],_=T.g[1],y=T.g[2];let I=T.g[3],g;g=m+(I^_&(y^I))+w[0]+3614090360&4294967295,m=_+(g<<7&4294967295|g>>>25),g=I+(y^m&(_^y))+w[1]+3905402710&4294967295,I=m+(g<<12&4294967295|g>>>20),g=y+(_^I&(m^_))+w[2]+606105819&4294967295,y=I+(g<<17&4294967295|g>>>15),g=_+(m^y&(I^m))+w[3]+3250441966&4294967295,_=y+(g<<22&4294967295|g>>>10),g=m+(I^_&(y^I))+w[4]+4118548399&4294967295,m=_+(g<<7&4294967295|g>>>25),g=I+(y^m&(_^y))+w[5]+1200080426&4294967295,I=m+(g<<12&4294967295|g>>>20),g=y+(_^I&(m^_))+w[6]+2821735955&4294967295,y=I+(g<<17&4294967295|g>>>15),g=_+(m^y&(I^m))+w[7]+4249261313&4294967295,_=y+(g<<22&4294967295|g>>>10),g=m+(I^_&(y^I))+w[8]+1770035416&4294967295,m=_+(g<<7&4294967295|g>>>25),g=I+(y^m&(_^y))+w[9]+2336552879&4294967295,I=m+(g<<12&4294967295|g>>>20),g=y+(_^I&(m^_))+w[10]+4294925233&4294967295,y=I+(g<<17&4294967295|g>>>15),g=_+(m^y&(I^m))+w[11]+2304563134&4294967295,_=y+(g<<22&4294967295|g>>>10),g=m+(I^_&(y^I))+w[12]+1804603682&4294967295,m=_+(g<<7&4294967295|g>>>25),g=I+(y^m&(_^y))+w[13]+4254626195&4294967295,I=m+(g<<12&4294967295|g>>>20),g=y+(_^I&(m^_))+w[14]+2792965006&4294967295,y=I+(g<<17&4294967295|g>>>15),g=_+(m^y&(I^m))+w[15]+1236535329&4294967295,_=y+(g<<22&4294967295|g>>>10),g=m+(y^I&(_^y))+w[1]+4129170786&4294967295,m=_+(g<<5&4294967295|g>>>27),g=I+(_^y&(m^_))+w[6]+3225465664&4294967295,I=m+(g<<9&4294967295|g>>>23),g=y+(m^_&(I^m))+w[11]+643717713&4294967295,y=I+(g<<14&4294967295|g>>>18),g=_+(I^m&(y^I))+w[0]+3921069994&4294967295,_=y+(g<<20&4294967295|g>>>12),g=m+(y^I&(_^y))+w[5]+3593408605&4294967295,m=_+(g<<5&4294967295|g>>>27),g=I+(_^y&(m^_))+w[10]+38016083&4294967295,I=m+(g<<9&4294967295|g>>>23),g=y+(m^_&(I^m))+w[15]+3634488961&4294967295,y=I+(g<<14&4294967295|g>>>18),g=_+(I^m&(y^I))+w[4]+3889429448&4294967295,_=y+(g<<20&4294967295|g>>>12),g=m+(y^I&(_^y))+w[9]+568446438&4294967295,m=_+(g<<5&4294967295|g>>>27),g=I+(_^y&(m^_))+w[14]+3275163606&4294967295,I=m+(g<<9&4294967295|g>>>23),g=y+(m^_&(I^m))+w[3]+4107603335&4294967295,y=I+(g<<14&4294967295|g>>>18),g=_+(I^m&(y^I))+w[8]+1163531501&4294967295,_=y+(g<<20&4294967295|g>>>12),g=m+(y^I&(_^y))+w[13]+2850285829&4294967295,m=_+(g<<5&4294967295|g>>>27),g=I+(_^y&(m^_))+w[2]+4243563512&4294967295,I=m+(g<<9&4294967295|g>>>23),g=y+(m^_&(I^m))+w[7]+1735328473&4294967295,y=I+(g<<14&4294967295|g>>>18),g=_+(I^m&(y^I))+w[12]+2368359562&4294967295,_=y+(g<<20&4294967295|g>>>12),g=m+(_^y^I)+w[5]+4294588738&4294967295,m=_+(g<<4&4294967295|g>>>28),g=I+(m^_^y)+w[8]+2272392833&4294967295,I=m+(g<<11&4294967295|g>>>21),g=y+(I^m^_)+w[11]+1839030562&4294967295,y=I+(g<<16&4294967295|g>>>16),g=_+(y^I^m)+w[14]+4259657740&4294967295,_=y+(g<<23&4294967295|g>>>9),g=m+(_^y^I)+w[1]+2763975236&4294967295,m=_+(g<<4&4294967295|g>>>28),g=I+(m^_^y)+w[4]+1272893353&4294967295,I=m+(g<<11&4294967295|g>>>21),g=y+(I^m^_)+w[7]+4139469664&4294967295,y=I+(g<<16&4294967295|g>>>16),g=_+(y^I^m)+w[10]+3200236656&4294967295,_=y+(g<<23&4294967295|g>>>9),g=m+(_^y^I)+w[13]+681279174&4294967295,m=_+(g<<4&4294967295|g>>>28),g=I+(m^_^y)+w[0]+3936430074&4294967295,I=m+(g<<11&4294967295|g>>>21),g=y+(I^m^_)+w[3]+3572445317&4294967295,y=I+(g<<16&4294967295|g>>>16),g=_+(y^I^m)+w[6]+76029189&4294967295,_=y+(g<<23&4294967295|g>>>9),g=m+(_^y^I)+w[9]+3654602809&4294967295,m=_+(g<<4&4294967295|g>>>28),g=I+(m^_^y)+w[12]+3873151461&4294967295,I=m+(g<<11&4294967295|g>>>21),g=y+(I^m^_)+w[15]+530742520&4294967295,y=I+(g<<16&4294967295|g>>>16),g=_+(y^I^m)+w[2]+3299628645&4294967295,_=y+(g<<23&4294967295|g>>>9),g=m+(y^(_|~I))+w[0]+4096336452&4294967295,m=_+(g<<6&4294967295|g>>>26),g=I+(_^(m|~y))+w[7]+1126891415&4294967295,I=m+(g<<10&4294967295|g>>>22),g=y+(m^(I|~_))+w[14]+2878612391&4294967295,y=I+(g<<15&4294967295|g>>>17),g=_+(I^(y|~m))+w[5]+4237533241&4294967295,_=y+(g<<21&4294967295|g>>>11),g=m+(y^(_|~I))+w[12]+1700485571&4294967295,m=_+(g<<6&4294967295|g>>>26),g=I+(_^(m|~y))+w[3]+2399980690&4294967295,I=m+(g<<10&4294967295|g>>>22),g=y+(m^(I|~_))+w[10]+4293915773&4294967295,y=I+(g<<15&4294967295|g>>>17),g=_+(I^(y|~m))+w[1]+2240044497&4294967295,_=y+(g<<21&4294967295|g>>>11),g=m+(y^(_|~I))+w[8]+1873313359&4294967295,m=_+(g<<6&4294967295|g>>>26),g=I+(_^(m|~y))+w[15]+4264355552&4294967295,I=m+(g<<10&4294967295|g>>>22),g=y+(m^(I|~_))+w[6]+2734768916&4294967295,y=I+(g<<15&4294967295|g>>>17),g=_+(I^(y|~m))+w[13]+1309151649&4294967295,_=y+(g<<21&4294967295|g>>>11),g=m+(y^(_|~I))+w[4]+4149444226&4294967295,m=_+(g<<6&4294967295|g>>>26),g=I+(_^(m|~y))+w[11]+3174756917&4294967295,I=m+(g<<10&4294967295|g>>>22),g=y+(m^(I|~_))+w[2]+718787259&4294967295,y=I+(g<<15&4294967295|g>>>17),g=_+(I^(y|~m))+w[9]+3951481745&4294967295,T.g[0]=T.g[0]+m&4294967295,T.g[1]=T.g[1]+(y+(g<<21&4294967295|g>>>11))&4294967295,T.g[2]=T.g[2]+y&4294967295,T.g[3]=T.g[3]+I&4294967295}r.prototype.v=function(T,m){m===void 0&&(m=T.length);const _=m-this.blockSize,w=this.C;let y=this.h,I=0;for(;I<m;){if(y==0)for(;I<=_;)s(this,T,I),I+=this.blockSize;if(typeof T=="string"){for(;I<m;)if(w[y++]=T.charCodeAt(I++),y==this.blockSize){s(this,w),y=0;break}}else for(;I<m;)if(w[y++]=T[I++],y==this.blockSize){s(this,w),y=0;break}}this.h=y,this.o+=m},r.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var m=1;m<T.length-8;++m)T[m]=0;m=this.o*8;for(var _=T.length-8;_<T.length;++_)T[_]=m&255,m/=256;for(this.v(T),T=Array(16),m=0,_=0;_<4;++_)for(let w=0;w<32;w+=8)T[m++]=this.g[_]>>>w&255;return T};function o(T,m){var _=l;return Object.prototype.hasOwnProperty.call(_,T)?_[T]:_[T]=m(T)}function a(T,m){this.h=m;const _=[];let w=!0;for(let y=T.length-1;y>=0;y--){const I=T[y]|0;w&&I==m||(_[y]=I,w=!1)}this.g=_}var l={};function h(T){return-128<=T&&T<128?o(T,function(m){return new a([m|0],m<0?-1:0)}):new a([T|0],T<0?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return E;if(T<0)return C(d(-T));const m=[];let _=1;for(let w=0;T>=_;w++)m[w]=T/_|0,_*=4294967296;return new a(m,0)}function p(T,m){if(T.length==0)throw Error("number format error: empty string");if(m=m||10,m<2||36<m)throw Error("radix out of range: "+m);if(T.charAt(0)=="-")return C(p(T.substring(1),m));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=d(Math.pow(m,8));let w=E;for(let I=0;I<T.length;I+=8){var y=Math.min(8,T.length-I);const g=parseInt(T.substring(I,I+y),m);y<8?(y=d(Math.pow(m,y)),w=w.j(y).add(d(g))):(w=w.j(_),w=w.add(d(g)))}return w}var E=h(0),k=h(1),S=h(16777216);n=a.prototype,n.m=function(){if(M(this))return-C(this).m();let T=0,m=1;for(let _=0;_<this.g.length;_++){const w=this.i(_);T+=(w>=0?w:4294967296+w)*m,m*=4294967296}return T},n.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(x(this))return"0";if(M(this))return"-"+C(this).toString(T);const m=d(Math.pow(T,6));var _=this;let w="";for(;;){const y=ot(_,m).g;_=G(_,y.j(m));let I=((_.g.length>0?_.g[0]:_.h)>>>0).toString(T);if(_=y,x(_))return I+w;for(;I.length<6;)I="0"+I;w=I+w}},n.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function x(T){if(T.h!=0)return!1;for(let m=0;m<T.g.length;m++)if(T.g[m]!=0)return!1;return!0}function M(T){return T.h==-1}n.l=function(T){return T=G(this,T),M(T)?-1:x(T)?0:1};function C(T){const m=T.g.length,_=[];for(let w=0;w<m;w++)_[w]=~T.g[w];return new a(_,~T.h).add(k)}n.abs=function(){return M(this)?C(this):this},n.add=function(T){const m=Math.max(this.g.length,T.g.length),_=[];let w=0;for(let y=0;y<=m;y++){let I=w+(this.i(y)&65535)+(T.i(y)&65535),g=(I>>>16)+(this.i(y)>>>16)+(T.i(y)>>>16);w=g>>>16,I&=65535,g&=65535,_[y]=g<<16|I}return new a(_,_[_.length-1]&-2147483648?-1:0)};function G(T,m){return T.add(C(m))}n.j=function(T){if(x(this)||x(T))return E;if(M(this))return M(T)?C(this).j(C(T)):C(C(this).j(T));if(M(T))return C(this.j(C(T)));if(this.l(S)<0&&T.l(S)<0)return d(this.m()*T.m());const m=this.g.length+T.g.length,_=[];for(var w=0;w<2*m;w++)_[w]=0;for(w=0;w<this.g.length;w++)for(let y=0;y<T.g.length;y++){const I=this.i(w)>>>16,g=this.i(w)&65535,Tt=T.i(y)>>>16,Dt=T.i(y)&65535;_[2*w+2*y]+=g*Dt,H(_,2*w+2*y),_[2*w+2*y+1]+=I*Dt,H(_,2*w+2*y+1),_[2*w+2*y+1]+=g*Tt,H(_,2*w+2*y+1),_[2*w+2*y+2]+=I*Tt,H(_,2*w+2*y+2)}for(T=0;T<m;T++)_[T]=_[2*T+1]<<16|_[2*T];for(T=m;T<2*m;T++)_[T]=0;return new a(_,0)};function H(T,m){for(;(T[m]&65535)!=T[m];)T[m+1]+=T[m]>>>16,T[m]&=65535,m++}function Q(T,m){this.g=T,this.h=m}function ot(T,m){if(x(m))throw Error("division by zero");if(x(T))return new Q(E,E);if(M(T))return m=ot(C(T),m),new Q(C(m.g),C(m.h));if(M(m))return m=ot(T,C(m)),new Q(C(m.g),m.h);if(T.g.length>30){if(M(T)||M(m))throw Error("slowDivide_ only works with positive integers.");for(var _=k,w=m;w.l(T)<=0;)_=dt(_),w=dt(w);var y=tt(_,1),I=tt(w,1);for(w=tt(w,2),_=tt(_,2);!x(w);){var g=I.add(w);g.l(T)<=0&&(y=y.add(_),I=g),w=tt(w,1),_=tt(_,1)}return m=G(T,y.j(m)),new Q(y,m)}for(y=E;T.l(m)>=0;){for(_=Math.max(1,Math.floor(T.m()/m.m())),w=Math.ceil(Math.log(_)/Math.LN2),w=w<=48?1:Math.pow(2,w-48),I=d(_),g=I.j(m);M(g)||g.l(T)>0;)_-=w,I=d(_),g=I.j(m);x(I)&&(I=k),y=y.add(I),T=G(T,g)}return new Q(y,T)}n.B=function(T){return ot(this,T).h},n.and=function(T){const m=Math.max(this.g.length,T.g.length),_=[];for(let w=0;w<m;w++)_[w]=this.i(w)&T.i(w);return new a(_,this.h&T.h)},n.or=function(T){const m=Math.max(this.g.length,T.g.length),_=[];for(let w=0;w<m;w++)_[w]=this.i(w)|T.i(w);return new a(_,this.h|T.h)},n.xor=function(T){const m=Math.max(this.g.length,T.g.length),_=[];for(let w=0;w<m;w++)_[w]=this.i(w)^T.i(w);return new a(_,this.h^T.h)};function dt(T){const m=T.g.length+1,_=[];for(let w=0;w<m;w++)_[w]=T.i(w)<<1|T.i(w-1)>>>31;return new a(_,T.h)}function tt(T,m){const _=m>>5;m%=32;const w=T.g.length-_,y=[];for(let I=0;I<w;I++)y[I]=m>0?T.i(I+_)>>>m|T.i(I+_+1)<<32-m:T.i(I+_);return new a(y,T.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Za=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,re=a}).apply(typeof jo<"u"?jo:typeof self<"u"?self:typeof window<"u"?window:{});var Xn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var tu,pn,eu,nr,Ss,nu,ru,su;(function(){var n,t=Object.defineProperty;function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Xn=="object"&&Xn];for(var u=0;u<i.length;++u){var c=i[u];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var r=e(this);function s(i,u){if(u)t:{var c=r;i=i.split(".");for(var f=0;f<i.length-1;f++){var v=i[f];if(!(v in c))break t;c=c[v]}i=i[i.length-1],f=c[i],u=u(f),u!=f&&u!=null&&t(c,i,{configurable:!0,writable:!0,value:u})}}s("Symbol.dispose",function(i){return i||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(i){return i||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(i){return i||function(u){var c=[],f;for(f in u)Object.prototype.hasOwnProperty.call(u,f)&&c.push([f,u[f]]);return c}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(i){var u=typeof i;return u=="object"&&i!=null||u=="function"}function h(i,u,c){return i.call.apply(i.bind,arguments)}function d(i,u,c){return d=h,d.apply(null,arguments)}function p(i,u){var c=Array.prototype.slice.call(arguments,1);return function(){var f=c.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function E(i,u){function c(){}c.prototype=u.prototype,i.Z=u.prototype,i.prototype=new c,i.prototype.constructor=i,i.Ob=function(f,v,A){for(var P=Array(arguments.length-2),B=2;B<arguments.length;B++)P[B-2]=arguments[B];return u.prototype[v].apply(f,P)}}var k=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?i=>i&&AsyncContext.Snapshot.wrap(i):i=>i;function S(i){const u=i.length;if(u>0){const c=Array(u);for(let f=0;f<u;f++)c[f]=i[f];return c}return[]}function x(i,u){for(let f=1;f<arguments.length;f++){const v=arguments[f];var c=typeof v;if(c=c!="object"?c:v?Array.isArray(v)?"array":c:"null",c=="array"||c=="object"&&typeof v.length=="number"){c=i.length||0;const A=v.length||0;i.length=c+A;for(let P=0;P<A;P++)i[c+P]=v[P]}else i.push(v)}}class M{constructor(u,c){this.i=u,this.j=c,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function C(i){a.setTimeout(()=>{throw i},0)}function G(){var i=T;let u=null;return i.g&&(u=i.g,i.g=i.g.next,i.g||(i.h=null),u.next=null),u}class H{constructor(){this.h=this.g=null}add(u,c){const f=Q.get();f.set(u,c),this.h?this.h.next=f:this.g=f,this.h=f}}var Q=new M(()=>new ot,i=>i.reset());class ot{constructor(){this.next=this.g=this.h=null}set(u,c){this.h=u,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let dt,tt=!1,T=new H,m=()=>{const i=Promise.resolve(void 0);dt=()=>{i.then(_)}};function _(){for(var i;i=G();){try{i.h.call(i.g)}catch(c){C(c)}var u=Q;u.j(i),u.h<100&&(u.h++,i.next=u.g,u.g=i)}tt=!1}function w(){this.u=this.u,this.C=this.C}w.prototype.u=!1,w.prototype.dispose=function(){this.u||(this.u=!0,this.N())},w.prototype[Symbol.dispose]=function(){this.dispose()},w.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function y(i,u){this.type=i,this.g=this.target=u,this.defaultPrevented=!1}y.prototype.h=function(){this.defaultPrevented=!0};var I=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var i=!1,u=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const c=()=>{};a.addEventListener("test",c,u),a.removeEventListener("test",c,u)}catch{}return i})();function g(i){return/^[\s\xa0]*$/.test(i)}function Tt(i,u){y.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i&&this.init(i,u)}E(Tt,y),Tt.prototype.init=function(i,u){const c=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;this.target=i.target||i.srcElement,this.g=u,u=i.relatedTarget,u||(c=="mouseover"?u=i.fromElement:c=="mouseout"&&(u=i.toElement)),this.relatedTarget=u,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=i.pointerType,this.state=i.state,this.i=i,i.defaultPrevented&&Tt.Z.h.call(this)},Tt.prototype.h=function(){Tt.Z.h.call(this);const i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Dt="closure_listenable_"+(Math.random()*1e6|0),D=0;function q(i,u,c,f,v){this.listener=i,this.proxy=null,this.src=u,this.type=c,this.capture=!!f,this.ha=v,this.key=++D,this.da=this.fa=!1}function j(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function J(i,u,c){for(const f in i)u.call(c,i[f],f,i)}function at(i,u){for(const c in i)u.call(void 0,i[c],c,i)}function de(i){const u={};for(const c in i)u[c]=i[c];return u}const me="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Se(i,u){let c,f;for(let v=1;v<arguments.length;v++){f=arguments[v];for(c in f)i[c]=f[c];for(let A=0;A<me.length;A++)c=me[A],Object.prototype.hasOwnProperty.call(f,c)&&(i[c]=f[c])}}function Pt(i){this.src=i,this.g={},this.h=0}Pt.prototype.add=function(i,u,c,f,v){const A=i.toString();i=this.g[A],i||(i=this.g[A]=[],this.h++);const P=Fr(i,u,f,v);return P>-1?(u=i[P],c||(u.fa=!1)):(u=new q(u,this.src,A,!!f,v),u.fa=c,i.push(u)),u};function Kt(i,u){const c=u.type;if(c in i.g){var f=i.g[c],v=Array.prototype.indexOf.call(f,u,void 0),A;(A=v>=0)&&Array.prototype.splice.call(f,v,1),A&&(j(u),i.g[c].length==0&&(delete i.g[c],i.h--))}}function Fr(i,u,c,f){for(let v=0;v<i.length;++v){const A=i[v];if(!A.da&&A.listener==u&&A.capture==!!c&&A.ha==f)return v}return-1}var Ur="closure_lm_"+(Math.random()*1e6|0),jr={};function Si(i,u,c,f,v){if(Array.isArray(u)){for(let A=0;A<u.length;A++)Si(i,u[A],c,f,v);return null}return c=Vi(c),i&&i[Dt]?i.J(u,c,l(f)?!!f.capture:!1,v):Pc(i,u,c,!1,f,v)}function Pc(i,u,c,f,v,A){if(!u)throw Error("Invalid event type");const P=l(v)?!!v.capture:!!v;let B=qr(i);if(B||(i[Ur]=B=new Pt(i)),c=B.add(u,c,f,P,A),c.proxy)return c;if(f=Cc(),c.proxy=f,f.src=i,f.listener=c,i.addEventListener)I||(v=P),v===void 0&&(v=!1),i.addEventListener(u.toString(),f,v);else if(i.attachEvent)i.attachEvent(Ci(u.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return c}function Cc(){function i(c){return u.call(i.src,i.listener,c)}const u=Vc;return i}function Pi(i,u,c,f,v){if(Array.isArray(u))for(var A=0;A<u.length;A++)Pi(i,u[A],c,f,v);else f=l(f)?!!f.capture:!!f,c=Vi(c),i&&i[Dt]?(i=i.i,A=String(u).toString(),A in i.g&&(u=i.g[A],c=Fr(u,c,f,v),c>-1&&(j(u[c]),Array.prototype.splice.call(u,c,1),u.length==0&&(delete i.g[A],i.h--)))):i&&(i=qr(i))&&(u=i.g[u.toString()],i=-1,u&&(i=Fr(u,c,f,v)),(c=i>-1?u[i]:null)&&Br(c))}function Br(i){if(typeof i!="number"&&i&&!i.da){var u=i.src;if(u&&u[Dt])Kt(u.i,i);else{var c=i.type,f=i.proxy;u.removeEventListener?u.removeEventListener(c,f,i.capture):u.detachEvent?u.detachEvent(Ci(c),f):u.addListener&&u.removeListener&&u.removeListener(f),(c=qr(u))?(Kt(c,i),c.h==0&&(c.src=null,u[Ur]=null)):j(i)}}}function Ci(i){return i in jr?jr[i]:jr[i]="on"+i}function Vc(i,u){if(i.da)i=!0;else{u=new Tt(u,this);const c=i.listener,f=i.ha||i.src;i.fa&&Br(i),i=c.call(f,u)}return i}function qr(i){return i=i[Ur],i instanceof Pt?i:null}var zr="__closure_events_fn_"+(Math.random()*1e9>>>0);function Vi(i){return typeof i=="function"?i:(i[zr]||(i[zr]=function(u){return i.handleEvent(u)}),i[zr])}function wt(){w.call(this),this.i=new Pt(this),this.M=this,this.G=null}E(wt,w),wt.prototype[Dt]=!0,wt.prototype.removeEventListener=function(i,u,c,f){Pi(this,i,u,c,f)};function At(i,u){var c,f=i.G;if(f)for(c=[];f;f=f.G)c.push(f);if(i=i.M,f=u.type||u,typeof u=="string")u=new y(u,i);else if(u instanceof y)u.target=u.target||i;else{var v=u;u=new y(f,i),Se(u,v)}v=!0;let A,P;if(c)for(P=c.length-1;P>=0;P--)A=u.g=c[P],v=Fn(A,f,!0,u)&&v;if(A=u.g=i,v=Fn(A,f,!0,u)&&v,v=Fn(A,f,!1,u)&&v,c)for(P=0;P<c.length;P++)A=u.g=c[P],v=Fn(A,f,!1,u)&&v}wt.prototype.N=function(){if(wt.Z.N.call(this),this.i){var i=this.i;for(const u in i.g){const c=i.g[u];for(let f=0;f<c.length;f++)j(c[f]);delete i.g[u],i.h--}}this.G=null},wt.prototype.J=function(i,u,c,f){return this.i.add(String(i),u,!1,c,f)},wt.prototype.K=function(i,u,c,f){return this.i.add(String(i),u,!0,c,f)};function Fn(i,u,c,f){if(u=i.i.g[String(u)],!u)return!0;u=u.concat();let v=!0;for(let A=0;A<u.length;++A){const P=u[A];if(P&&!P.da&&P.capture==c){const B=P.listener,ht=P.ha||P.src;P.fa&&Kt(i.i,P),v=B.call(ht,f)!==!1&&v}}return v&&!f.defaultPrevented}function Dc(i,u){if(typeof i!="function")if(i&&typeof i.handleEvent=="function")i=d(i.handleEvent,i);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:a.setTimeout(i,u||0)}function Di(i){i.g=Dc(()=>{i.g=null,i.i&&(i.i=!1,Di(i))},i.l);const u=i.h;i.h=null,i.m.apply(null,u)}class Nc extends w{constructor(u,c){super(),this.m=u,this.l=c,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Di(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ze(i){w.call(this),this.h=i,this.g={}}E(Ze,w);var Ni=[];function xi(i){J(i.g,function(u,c){this.g.hasOwnProperty(c)&&Br(u)},i),i.g={}}Ze.prototype.N=function(){Ze.Z.N.call(this),xi(this)},Ze.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var $r=a.JSON.stringify,xc=a.JSON.parse,Mc=class{stringify(i){return a.JSON.stringify(i,void 0)}parse(i){return a.JSON.parse(i,void 0)}};function Mi(){}function Oi(){}var tn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Gr(){y.call(this,"d")}E(Gr,y);function Hr(){y.call(this,"c")}E(Hr,y);var ge={},Li=null;function Un(){return Li=Li||new wt}ge.Ia="serverreachability";function Fi(i){y.call(this,ge.Ia,i)}E(Fi,y);function en(i){const u=Un();At(u,new Fi(u))}ge.STAT_EVENT="statevent";function Ui(i,u){y.call(this,ge.STAT_EVENT,i),this.stat=u}E(Ui,y);function bt(i){const u=Un();At(u,new Ui(u,i))}ge.Ja="timingevent";function ji(i,u){y.call(this,ge.Ja,i),this.size=u}E(ji,y);function nn(i,u){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){i()},u)}function rn(){this.g=!0}rn.prototype.ua=function(){this.g=!1};function Oc(i,u,c,f,v,A){i.info(function(){if(i.g)if(A){var P="",B=A.split("&");for(let Y=0;Y<B.length;Y++){var ht=B[Y].split("=");if(ht.length>1){const mt=ht[0];ht=ht[1];const Ot=mt.split("_");P=Ot.length>=2&&Ot[1]=="type"?P+(mt+"="+ht+"&"):P+(mt+"=redacted&")}}}else P=null;else P=A;return"XMLHTTP REQ ("+f+") [attempt "+v+"]: "+u+`
`+c+`
`+P})}function Lc(i,u,c,f,v,A,P){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+v+"]: "+u+`
`+c+`
`+A+" "+P})}function Pe(i,u,c,f){i.info(function(){return"XMLHTTP TEXT ("+u+"): "+Uc(i,c)+(f?" "+f:"")})}function Fc(i,u){i.info(function(){return"TIMEOUT: "+u})}rn.prototype.info=function(){};function Uc(i,u){if(!i.g)return u;if(!u)return null;try{const A=JSON.parse(u);if(A){for(i=0;i<A.length;i++)if(Array.isArray(A[i])){var c=A[i];if(!(c.length<2)){var f=c[1];if(Array.isArray(f)&&!(f.length<1)){var v=f[0];if(v!="noop"&&v!="stop"&&v!="close")for(let P=1;P<f.length;P++)f[P]=""}}}}return $r(A)}catch{return u}}var jn={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Bi={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},qi;function Kr(){}E(Kr,Mi),Kr.prototype.g=function(){return new XMLHttpRequest},qi=new Kr;function sn(i){return encodeURIComponent(String(i))}function jc(i){var u=1;i=i.split(":");const c=[];for(;u>0&&i.length;)c.push(i.shift()),u--;return i.length&&c.push(i.join(":")),c}function Wt(i,u,c,f){this.j=i,this.i=u,this.l=c,this.S=f||1,this.V=new Ze(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new zi}function zi(){this.i=null,this.g="",this.h=!1}var $i={},Wr={};function Qr(i,u,c){i.M=1,i.A=qn(Mt(u)),i.u=c,i.R=!0,Gi(i,null)}function Gi(i,u){i.F=Date.now(),Bn(i),i.B=Mt(i.A);var c=i.B,f=i.S;Array.isArray(f)||(f=[String(f)]),so(c.i,"t",f),i.C=0,c=i.j.L,i.h=new zi,i.g=vo(i.j,c?u:null,!i.u),i.P>0&&(i.O=new Nc(d(i.Y,i,i.g),i.P)),u=i.V,c=i.g,f=i.ba;var v="readystatechange";Array.isArray(v)||(v&&(Ni[0]=v.toString()),v=Ni);for(let A=0;A<v.length;A++){const P=Si(c,v[A],f||u.handleEvent,!1,u.h||u);if(!P)break;u.g[P.key]=P}u=i.J?de(i.J):{},i.u?(i.v||(i.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.B,i.v,i.u,u)):(i.v="GET",i.g.ea(i.B,i.v,null,u)),en(),Oc(i.i,i.v,i.B,i.l,i.S,i.u)}Wt.prototype.ba=function(i){i=i.target;const u=this.O;u&&Yt(i)==3?u.j():this.Y(i)},Wt.prototype.Y=function(i){try{if(i==this.g)t:{const B=Yt(this.g),ht=this.g.ya(),Y=this.g.ca();if(!(B<3)&&(B!=3||this.g&&(this.h.h||this.g.la()||ho(this.g)))){this.K||B!=4||ht==7||(ht==8||Y<=0?en(3):en(2)),Xr(this);var u=this.g.ca();this.X=u;var c=Bc(this);if(this.o=u==200,Lc(this.i,this.v,this.B,this.l,this.S,B,u),this.o){if(this.U&&!this.L){e:{if(this.g){var f,v=this.g;if((f=v.g?v.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!g(f)){var A=f;break e}}A=null}if(i=A)Pe(this.i,this.l,i,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Yr(this,i);else{this.o=!1,this.m=3,bt(12),pe(this),on(this);break t}}if(this.R){i=!0;let mt;for(;!this.K&&this.C<c.length;)if(mt=qc(this,c),mt==Wr){B==4&&(this.m=4,bt(14),i=!1),Pe(this.i,this.l,null,"[Incomplete Response]");break}else if(mt==$i){this.m=4,bt(15),Pe(this.i,this.l,c,"[Invalid Chunk]"),i=!1;break}else Pe(this.i,this.l,mt,null),Yr(this,mt);if(Hi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),B!=4||c.length!=0||this.h.h||(this.m=1,bt(16),i=!1),this.o=this.o&&i,!i)Pe(this.i,this.l,c,"[Invalid Chunked Response]"),pe(this),on(this);else if(c.length>0&&!this.W){this.W=!0;var P=this.j;P.g==this&&P.aa&&!P.P&&(P.j.info("Great, no buffering proxy detected. Bytes received: "+c.length),is(P),P.P=!0,bt(11))}}else Pe(this.i,this.l,c,null),Yr(this,c);B==4&&pe(this),this.o&&!this.K&&(B==4?Eo(this.j,this):(this.o=!1,Bn(this)))}else nl(this.g),u==400&&c.indexOf("Unknown SID")>0?(this.m=3,bt(12)):(this.m=0,bt(13)),pe(this),on(this)}}}catch{}finally{}};function Bc(i){if(!Hi(i))return i.g.la();const u=ho(i.g);if(u==="")return"";let c="";const f=u.length,v=Yt(i.g)==4;if(!i.h.i){if(typeof TextDecoder>"u")return pe(i),on(i),"";i.h.i=new a.TextDecoder}for(let A=0;A<f;A++)i.h.h=!0,c+=i.h.i.decode(u[A],{stream:!(v&&A==f-1)});return u.length=0,i.h.g+=c,i.C=0,i.h.g}function Hi(i){return i.g?i.v=="GET"&&i.M!=2&&i.j.Aa:!1}function qc(i,u){var c=i.C,f=u.indexOf(`
`,c);return f==-1?Wr:(c=Number(u.substring(c,f)),isNaN(c)?$i:(f+=1,f+c>u.length?Wr:(u=u.slice(f,f+c),i.C=f+c,u)))}Wt.prototype.cancel=function(){this.K=!0,pe(this)};function Bn(i){i.T=Date.now()+i.H,Ki(i,i.H)}function Ki(i,u){if(i.D!=null)throw Error("WatchDog timer not null");i.D=nn(d(i.aa,i),u)}function Xr(i){i.D&&(a.clearTimeout(i.D),i.D=null)}Wt.prototype.aa=function(){this.D=null;const i=Date.now();i-this.T>=0?(Fc(this.i,this.B),this.M!=2&&(en(),bt(17)),pe(this),this.m=2,on(this)):Ki(this,this.T-i)};function on(i){i.j.I==0||i.K||Eo(i.j,i)}function pe(i){Xr(i);var u=i.O;u&&typeof u.dispose=="function"&&u.dispose(),i.O=null,xi(i.V),i.g&&(u=i.g,i.g=null,u.abort(),u.dispose())}function Yr(i,u){try{var c=i.j;if(c.I!=0&&(c.g==i||Jr(c.h,i))){if(!i.L&&Jr(c.h,i)&&c.I==3){try{var f=c.Ba.g.parse(u)}catch{f=null}if(Array.isArray(f)&&f.length==3){var v=f;if(v[0]==0){t:if(!c.v){if(c.g)if(c.g.F+3e3<i.F)Kn(c),Gn(c);else break t;ss(c),bt(18)}}else c.xa=v[1],0<c.xa-c.K&&v[2]<37500&&c.F&&c.A==0&&!c.C&&(c.C=nn(d(c.Va,c),6e3));Xi(c.h)<=1&&c.ta&&(c.ta=void 0)}else ye(c,11)}else if((i.L||c.g==i)&&Kn(c),!g(u))for(v=c.Ba.g.parse(u),u=0;u<v.length;u++){let Y=v[u];const mt=Y[0];if(!(mt<=c.K))if(c.K=mt,Y=Y[1],c.I==2)if(Y[0]=="c"){c.M=Y[1],c.ba=Y[2];const Ot=Y[3];Ot!=null&&(c.ka=Ot,c.j.info("VER="+c.ka));const Ee=Y[4];Ee!=null&&(c.za=Ee,c.j.info("SVER="+c.za));const Jt=Y[5];Jt!=null&&typeof Jt=="number"&&Jt>0&&(f=1.5*Jt,c.O=f,c.j.info("backChannelRequestTimeoutMs_="+f)),f=c;const Zt=i.g;if(Zt){const Qn=Zt.g?Zt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Qn){var A=f.h;A.g||Qn.indexOf("spdy")==-1&&Qn.indexOf("quic")==-1&&Qn.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(Zr(A,A.h),A.h=null))}if(f.G){const os=Zt.g?Zt.g.getResponseHeader("X-HTTP-Session-Id"):null;os&&(f.wa=os,et(f.J,f.G,os))}}c.I=3,c.l&&c.l.ra(),c.aa&&(c.T=Date.now()-i.F,c.j.info("Handshake RTT: "+c.T+"ms")),f=c;var P=i;if(f.na=Io(f,f.L?f.ba:null,f.W),P.L){Yi(f.h,P);var B=P,ht=f.O;ht&&(B.H=ht),B.D&&(Xr(B),Bn(B)),f.g=P}else _o(f);c.i.length>0&&Hn(c)}else Y[0]!="stop"&&Y[0]!="close"||ye(c,7);else c.I==3&&(Y[0]=="stop"||Y[0]=="close"?Y[0]=="stop"?ye(c,7):rs(c):Y[0]!="noop"&&c.l&&c.l.qa(Y),c.A=0)}}en(4)}catch{}}var zc=class{constructor(i,u){this.g=i,this.map=u}};function Wi(i){this.l=i||10,a.PerformanceNavigationTiming?(i=a.performance.getEntriesByType("navigation"),i=i.length>0&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Qi(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Xi(i){return i.h?1:i.g?i.g.size:0}function Jr(i,u){return i.h?i.h==u:i.g?i.g.has(u):!1}function Zr(i,u){i.g?i.g.add(u):i.h=u}function Yi(i,u){i.h&&i.h==u?i.h=null:i.g&&i.g.has(u)&&i.g.delete(u)}Wi.prototype.cancel=function(){if(this.i=Ji(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Ji(i){if(i.h!=null)return i.i.concat(i.h.G);if(i.g!=null&&i.g.size!==0){let u=i.i;for(const c of i.g.values())u=u.concat(c.G);return u}return S(i.i)}var Zi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $c(i,u){if(i){i=i.split("&");for(let c=0;c<i.length;c++){const f=i[c].indexOf("=");let v,A=null;f>=0?(v=i[c].substring(0,f),A=i[c].substring(f+1)):v=i[c],u(v,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function Qt(i){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;i instanceof Qt?(this.l=i.l,an(this,i.j),this.o=i.o,this.g=i.g,un(this,i.u),this.h=i.h,ts(this,io(i.i)),this.m=i.m):i&&(u=String(i).match(Zi))?(this.l=!1,an(this,u[1]||"",!0),this.o=cn(u[2]||""),this.g=cn(u[3]||"",!0),un(this,u[4]),this.h=cn(u[5]||"",!0),ts(this,u[6]||"",!0),this.m=cn(u[7]||"")):(this.l=!1,this.i=new hn(null,this.l))}Qt.prototype.toString=function(){const i=[];var u=this.j;u&&i.push(ln(u,to,!0),":");var c=this.g;return(c||u=="file")&&(i.push("//"),(u=this.o)&&i.push(ln(u,to,!0),"@"),i.push(sn(c).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.u,c!=null&&i.push(":",String(c))),(c=this.h)&&(this.g&&c.charAt(0)!="/"&&i.push("/"),i.push(ln(c,c.charAt(0)=="/"?Kc:Hc,!0))),(c=this.i.toString())&&i.push("?",c),(c=this.m)&&i.push("#",ln(c,Qc)),i.join("")},Qt.prototype.resolve=function(i){const u=Mt(this);let c=!!i.j;c?an(u,i.j):c=!!i.o,c?u.o=i.o:c=!!i.g,c?u.g=i.g:c=i.u!=null;var f=i.h;if(c)un(u,i.u);else if(c=!!i.h){if(f.charAt(0)!="/")if(this.g&&!this.h)f="/"+f;else{var v=u.h.lastIndexOf("/");v!=-1&&(f=u.h.slice(0,v+1)+f)}if(v=f,v==".."||v==".")f="";else if(v.indexOf("./")!=-1||v.indexOf("/.")!=-1){f=v.lastIndexOf("/",0)==0,v=v.split("/");const A=[];for(let P=0;P<v.length;){const B=v[P++];B=="."?f&&P==v.length&&A.push(""):B==".."?((A.length>1||A.length==1&&A[0]!="")&&A.pop(),f&&P==v.length&&A.push("")):(A.push(B),f=!0)}f=A.join("/")}else f=v}return c?u.h=f:c=i.i.toString()!=="",c?ts(u,io(i.i)):c=!!i.m,c&&(u.m=i.m),u};function Mt(i){return new Qt(i)}function an(i,u,c){i.j=c?cn(u,!0):u,i.j&&(i.j=i.j.replace(/:$/,""))}function un(i,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);i.u=u}else i.u=null}function ts(i,u,c){u instanceof hn?(i.i=u,Xc(i.i,i.l)):(c||(u=ln(u,Wc)),i.i=new hn(u,i.l))}function et(i,u,c){i.i.set(u,c)}function qn(i){return et(i,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),i}function cn(i,u){return i?u?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function ln(i,u,c){return typeof i=="string"?(i=encodeURI(i).replace(u,Gc),c&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Gc(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var to=/[#\/\?@]/g,Hc=/[#\?:]/g,Kc=/[#\?]/g,Wc=/[#\?@]/g,Qc=/#/g;function hn(i,u){this.h=this.g=null,this.i=i||null,this.j=!!u}function _e(i){i.g||(i.g=new Map,i.h=0,i.i&&$c(i.i,function(u,c){i.add(decodeURIComponent(u.replace(/\+/g," ")),c)}))}n=hn.prototype,n.add=function(i,u){_e(this),this.i=null,i=Ce(this,i);let c=this.g.get(i);return c||this.g.set(i,c=[]),c.push(u),this.h+=1,this};function eo(i,u){_e(i),u=Ce(i,u),i.g.has(u)&&(i.i=null,i.h-=i.g.get(u).length,i.g.delete(u))}function no(i,u){return _e(i),u=Ce(i,u),i.g.has(u)}n.forEach=function(i,u){_e(this),this.g.forEach(function(c,f){c.forEach(function(v){i.call(u,v,f,this)},this)},this)};function ro(i,u){_e(i);let c=[];if(typeof u=="string")no(i,u)&&(c=c.concat(i.g.get(Ce(i,u))));else for(i=Array.from(i.g.values()),u=0;u<i.length;u++)c=c.concat(i[u]);return c}n.set=function(i,u){return _e(this),this.i=null,i=Ce(this,i),no(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[u]),this.h+=1,this},n.get=function(i,u){return i?(i=ro(this,i),i.length>0?String(i[0]):u):u};function so(i,u,c){eo(i,u),c.length>0&&(i.i=null,i.g.set(Ce(i,u),S(c)),i.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],u=Array.from(this.g.keys());for(let f=0;f<u.length;f++){var c=u[f];const v=sn(c);c=ro(this,c);for(let A=0;A<c.length;A++){let P=v;c[A]!==""&&(P+="="+sn(c[A])),i.push(P)}}return this.i=i.join("&")};function io(i){const u=new hn;return u.i=i.i,i.g&&(u.g=new Map(i.g),u.h=i.h),u}function Ce(i,u){return u=String(u),i.j&&(u=u.toLowerCase()),u}function Xc(i,u){u&&!i.j&&(_e(i),i.i=null,i.g.forEach(function(c,f){const v=f.toLowerCase();f!=v&&(eo(this,f),so(this,v,c))},i)),i.j=u}function Yc(i,u){const c=new rn;if(a.Image){const f=new Image;f.onload=p(Xt,c,"TestLoadImage: loaded",!0,u,f),f.onerror=p(Xt,c,"TestLoadImage: error",!1,u,f),f.onabort=p(Xt,c,"TestLoadImage: abort",!1,u,f),f.ontimeout=p(Xt,c,"TestLoadImage: timeout",!1,u,f),a.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else u(!1)}function Jc(i,u){const c=new rn,f=new AbortController,v=setTimeout(()=>{f.abort(),Xt(c,"TestPingServer: timeout",!1,u)},1e4);fetch(i,{signal:f.signal}).then(A=>{clearTimeout(v),A.ok?Xt(c,"TestPingServer: ok",!0,u):Xt(c,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(v),Xt(c,"TestPingServer: error",!1,u)})}function Xt(i,u,c,f,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),f(c)}catch{}}function Zc(){this.g=new Mc}function es(i){this.i=i.Sb||null,this.h=i.ab||!1}E(es,Mi),es.prototype.g=function(){return new zn(this.i,this.h)};function zn(i,u){wt.call(this),this.H=i,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}E(zn,wt),n=zn.prototype,n.open=function(i,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=i,this.D=u,this.readyState=1,dn(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};i&&(u.body=i),(this.H||a).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,fn(this)),this.readyState=0},n.Pa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,dn(this)),this.g&&(this.readyState=3,dn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;oo(this)}else i.text().then(this.Oa.bind(this),this.ga.bind(this))};function oo(i){i.j.read().then(i.Ma.bind(i)).catch(i.ga.bind(i))}n.Ma=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var u=i.value?i.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!i.done}))&&(this.response=this.responseText+=u)}i.done?fn(this):dn(this),this.readyState==3&&oo(this)}},n.Oa=function(i){this.g&&(this.response=this.responseText=i,fn(this))},n.Na=function(i){this.g&&(this.response=i,fn(this))},n.ga=function(){this.g&&fn(this)};function fn(i){i.readyState=4,i.l=null,i.j=null,i.B=null,dn(i)}n.setRequestHeader=function(i,u){this.A.append(i,u)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],u=this.h.entries();for(var c=u.next();!c.done;)c=c.value,i.push(c[0]+": "+c[1]),c=u.next();return i.join(`\r
`)};function dn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(zn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function ao(i){let u="";return J(i,function(c,f){u+=f,u+=":",u+=c,u+=`\r
`}),u}function ns(i,u,c){t:{for(f in c){var f=!1;break t}f=!0}f||(c=ao(c),typeof i=="string"?c!=null&&sn(c):et(i,u,c))}function st(i){wt.call(this),this.headers=new Map,this.L=i||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}E(st,wt);var tl=/^https?$/i,el=["POST","PUT"];n=st.prototype,n.Fa=function(i){this.H=i},n.ea=function(i,u,c,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);u=u?u.toUpperCase():"GET",this.D=i,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():qi.g(),this.g.onreadystatechange=k(d(this.Ca,this));try{this.B=!0,this.g.open(u,String(i),!0),this.B=!1}catch(A){uo(this,A);return}if(i=c||"",c=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var v in f)c.set(v,f[v]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const A of f.keys())c.set(A,f.get(A));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(c.keys()).find(A=>A.toLowerCase()=="content-type"),v=a.FormData&&i instanceof a.FormData,!(Array.prototype.indexOf.call(el,u,void 0)>=0)||f||v||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,P]of c)this.g.setRequestHeader(A,P);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(i),this.v=!1}catch(A){uo(this,A)}};function uo(i,u){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=u,i.o=5,co(i),$n(i)}function co(i){i.A||(i.A=!0,At(i,"complete"),At(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=i||7,At(this,"complete"),At(this,"abort"),$n(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),$n(this,!0)),st.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?lo(this):this.Xa())},n.Xa=function(){lo(this)};function lo(i){if(i.h&&typeof o<"u"){if(i.v&&Yt(i)==4)setTimeout(i.Ca.bind(i),0);else if(At(i,"readystatechange"),Yt(i)==4){i.h=!1;try{const A=i.ca();t:switch(A){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var c;if(!(c=u)){var f;if(f=A===0){let P=String(i.D).match(Zi)[1]||null;!P&&a.self&&a.self.location&&(P=a.self.location.protocol.slice(0,-1)),f=!tl.test(P?P.toLowerCase():"")}c=f}if(c)At(i,"complete"),At(i,"success");else{i.o=6;try{var v=Yt(i)>2?i.g.statusText:""}catch{v=""}i.l=v+" ["+i.ca()+"]",co(i)}}finally{$n(i)}}}}function $n(i,u){if(i.g){i.m&&(clearTimeout(i.m),i.m=null);const c=i.g;i.g=null,u||At(i,"ready");try{c.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Yt(i){return i.g?i.g.readyState:0}n.ca=function(){try{return Yt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(i){if(this.g){var u=this.g.responseText;return i&&u.indexOf(i)==0&&(u=u.substring(i.length)),xc(u)}};function ho(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.F){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function nl(i){const u={};i=(i.g&&Yt(i)>=2&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(g(i[f]))continue;var c=jc(i[f]);const v=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const A=u[v]||[];u[v]=A,A.push(c)}at(u,function(f){return f.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function mn(i,u,c){return c&&c.internalChannelParams&&c.internalChannelParams[i]||u}function fo(i){this.za=0,this.i=[],this.j=new rn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=mn("failFast",!1,i),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=mn("baseRetryDelayMs",5e3,i),this.Za=mn("retryDelaySeedMs",1e4,i),this.Ta=mn("forwardChannelMaxRetries",2,i),this.va=mn("forwardChannelRequestTimeoutMs",2e4,i),this.ma=i&&i.xmlHttpFactory||void 0,this.Ua=i&&i.Rb||void 0,this.Aa=i&&i.useFetchStreams||!1,this.O=void 0,this.L=i&&i.supportsCrossDomainXhr||!1,this.M="",this.h=new Wi(i&&i.concurrentRequestLimit),this.Ba=new Zc,this.S=i&&i.fastHandshake||!1,this.R=i&&i.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=i&&i.Pb||!1,i&&i.ua&&this.j.ua(),i&&i.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&i&&i.detectBufferingProxy||!1,this.ia=void 0,i&&i.longPollingTimeout&&i.longPollingTimeout>0&&(this.ia=i.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=fo.prototype,n.ka=8,n.I=1,n.connect=function(i,u,c,f){bt(0),this.W=i,this.H=u||{},c&&f!==void 0&&(this.H.OSID=c,this.H.OAID=f),this.F=this.X,this.J=Io(this,null,this.W),Hn(this)};function rs(i){if(mo(i),i.I==3){var u=i.V++,c=Mt(i.J);if(et(c,"SID",i.M),et(c,"RID",u),et(c,"TYPE","terminate"),gn(i,c),u=new Wt(i,i.j,u),u.M=2,u.A=qn(Mt(c)),c=!1,a.navigator&&a.navigator.sendBeacon)try{c=a.navigator.sendBeacon(u.A.toString(),"")}catch{}!c&&a.Image&&(new Image().src=u.A,c=!0),c||(u.g=vo(u.j,null),u.g.ea(u.A)),u.F=Date.now(),Bn(u)}wo(i)}function Gn(i){i.g&&(is(i),i.g.cancel(),i.g=null)}function mo(i){Gn(i),i.v&&(a.clearTimeout(i.v),i.v=null),Kn(i),i.h.cancel(),i.m&&(typeof i.m=="number"&&a.clearTimeout(i.m),i.m=null)}function Hn(i){if(!Qi(i.h)&&!i.m){i.m=!0;var u=i.Ea;dt||m(),tt||(dt(),tt=!0),T.add(u,i),i.D=0}}function rl(i,u){return Xi(i.h)>=i.h.j-(i.m?1:0)?!1:i.m?(i.i=u.G.concat(i.i),!0):i.I==1||i.I==2||i.D>=(i.Sa?0:i.Ta)?!1:(i.m=nn(d(i.Ea,i,u),To(i,i.D)),i.D++,!0)}n.Ea=function(i){if(this.m)if(this.m=null,this.I==1){if(!i){this.V=Math.floor(Math.random()*1e5),i=this.V++;const v=new Wt(this,this.j,i);let A=this.o;if(this.U&&(A?(A=de(A),Se(A,this.U)):A=this.U),this.u!==null||this.R||(v.J=A,A=null),this.S)t:{for(var u=0,c=0;c<this.i.length;c++){e:{var f=this.i[c];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(u+=f,u>4096){u=c;break t}if(u===4096||c===this.i.length-1){u=c+1;break t}}u=1e3}else u=1e3;u=po(this,v,u),c=Mt(this.J),et(c,"RID",i),et(c,"CVER",22),this.G&&et(c,"X-HTTP-Session-Id",this.G),gn(this,c),A&&(this.R?u="headers="+sn(ao(A))+"&"+u:this.u&&ns(c,this.u,A)),Zr(this.h,v),this.Ra&&et(c,"TYPE","init"),this.S?(et(c,"$req",u),et(c,"SID","null"),v.U=!0,Qr(v,c,null)):Qr(v,c,u),this.I=2}}else this.I==3&&(i?go(this,i):this.i.length==0||Qi(this.h)||go(this))};function go(i,u){var c;u?c=u.l:c=i.V++;const f=Mt(i.J);et(f,"SID",i.M),et(f,"RID",c),et(f,"AID",i.K),gn(i,f),i.u&&i.o&&ns(f,i.u,i.o),c=new Wt(i,i.j,c,i.D+1),i.u===null&&(c.J=i.o),u&&(i.i=u.G.concat(i.i)),u=po(i,c,1e3),c.H=Math.round(i.va*.5)+Math.round(i.va*.5*Math.random()),Zr(i.h,c),Qr(c,f,u)}function gn(i,u){i.H&&J(i.H,function(c,f){et(u,f,c)}),i.l&&J({},function(c,f){et(u,f,c)})}function po(i,u,c){c=Math.min(i.i.length,c);const f=i.l?d(i.l.Ka,i.l,i):null;t:{var v=i.i;let B=-1;for(;;){const ht=["count="+c];B==-1?c>0?(B=v[0].g,ht.push("ofs="+B)):B=0:ht.push("ofs="+B);let Y=!0;for(let mt=0;mt<c;mt++){var A=v[mt].g;const Ot=v[mt].map;if(A-=B,A<0)B=Math.max(0,v[mt].g-100),Y=!1;else try{A="req"+A+"_"||"";try{var P=Ot instanceof Map?Ot:Object.entries(Ot);for(const[Ee,Jt]of P){let Zt=Jt;l(Jt)&&(Zt=$r(Jt)),ht.push(A+Ee+"="+encodeURIComponent(Zt))}}catch(Ee){throw ht.push(A+"type="+encodeURIComponent("_badmap")),Ee}}catch{f&&f(Ot)}}if(Y){P=ht.join("&");break t}}P=void 0}return i=i.i.splice(0,c),u.G=i,P}function _o(i){if(!i.g&&!i.v){i.Y=1;var u=i.Da;dt||m(),tt||(dt(),tt=!0),T.add(u,i),i.A=0}}function ss(i){return i.g||i.v||i.A>=3?!1:(i.Y++,i.v=nn(d(i.Da,i),To(i,i.A)),i.A++,!0)}n.Da=function(){if(this.v=null,yo(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var i=4*this.T;this.j.info("BP detection timer enabled: "+i),this.B=nn(d(this.Wa,this),i)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,bt(10),Gn(this),yo(this))};function is(i){i.B!=null&&(a.clearTimeout(i.B),i.B=null)}function yo(i){i.g=new Wt(i,i.j,"rpc",i.Y),i.u===null&&(i.g.J=i.o),i.g.P=0;var u=Mt(i.na);et(u,"RID","rpc"),et(u,"SID",i.M),et(u,"AID",i.K),et(u,"CI",i.F?"0":"1"),!i.F&&i.ia&&et(u,"TO",i.ia),et(u,"TYPE","xmlhttp"),gn(i,u),i.u&&i.o&&ns(u,i.u,i.o),i.O&&(i.g.H=i.O);var c=i.g;i=i.ba,c.M=1,c.A=qn(Mt(u)),c.u=null,c.R=!0,Gi(c,i)}n.Va=function(){this.C!=null&&(this.C=null,Gn(this),ss(this),bt(19))};function Kn(i){i.C!=null&&(a.clearTimeout(i.C),i.C=null)}function Eo(i,u){var c=null;if(i.g==u){Kn(i),is(i),i.g=null;var f=2}else if(Jr(i.h,u))c=u.G,Yi(i.h,u),f=1;else return;if(i.I!=0){if(u.o)if(f==1){c=u.u?u.u.length:0,u=Date.now()-u.F;var v=i.D;f=Un(),At(f,new ji(f,c)),Hn(i)}else _o(i);else if(v=u.m,v==3||v==0&&u.X>0||!(f==1&&rl(i,u)||f==2&&ss(i)))switch(c&&c.length>0&&(u=i.h,u.i=u.i.concat(c)),v){case 1:ye(i,5);break;case 4:ye(i,10);break;case 3:ye(i,6);break;default:ye(i,2)}}}function To(i,u){let c=i.Qa+Math.floor(Math.random()*i.Za);return i.isActive()||(c*=2),c*u}function ye(i,u){if(i.j.info("Error code "+u),u==2){var c=d(i.bb,i),f=i.Ua;const v=!f;f=new Qt(f||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||an(f,"https"),qn(f),v?Yc(f.toString(),c):Jc(f.toString(),c)}else bt(2);i.I=0,i.l&&i.l.pa(u),wo(i),mo(i)}n.bb=function(i){i?(this.j.info("Successfully pinged google.com"),bt(2)):(this.j.info("Failed to ping google.com"),bt(1))};function wo(i){if(i.I=0,i.ja=[],i.l){const u=Ji(i.h);(u.length!=0||i.i.length!=0)&&(x(i.ja,u),x(i.ja,i.i),i.h.i.length=0,S(i.i),i.i.length=0),i.l.oa()}}function Io(i,u,c){var f=c instanceof Qt?Mt(c):new Qt(c);if(f.g!="")u&&(f.g=u+"."+f.g),un(f,f.u);else{var v=a.location;f=v.protocol,u=u?u+"."+v.hostname:v.hostname,v=+v.port;const A=new Qt(null);f&&an(A,f),u&&(A.g=u),v&&un(A,v),c&&(A.h=c),f=A}return c=i.G,u=i.wa,c&&u&&et(f,c,u),et(f,"VER",i.ka),gn(i,f),f}function vo(i,u,c){if(u&&!i.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=i.Aa&&!i.ma?new st(new es({ab:c})):new st(i.ma),u.Fa(i.L),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ko(){}n=ko.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Wn(){}Wn.prototype.g=function(i,u){return new St(i,u)};function St(i,u){wt.call(this),this.g=new fo(u),this.l=i,this.h=u&&u.messageUrlParams||null,i=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(i?i["X-WebChannel-Content-Type"]=u.messageContentType:i={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(i?i["X-WebChannel-Client-Profile"]=u.sa:i={"X-WebChannel-Client-Profile":u.sa}),this.g.U=i,(i=u&&u.Qb)&&!g(i)&&(this.g.u=i),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!g(u)&&(this.g.G=u,i=this.h,i!==null&&u in i&&(i=this.h,u in i&&delete i[u])),this.j=new Ve(this)}E(St,wt),St.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},St.prototype.close=function(){rs(this.g)},St.prototype.o=function(i){var u=this.g;if(typeof i=="string"){var c={};c.__data__=i,i=c}else this.v&&(c={},c.__data__=$r(i),i=c);u.i.push(new zc(u.Ya++,i)),u.I==3&&Hn(u)},St.prototype.N=function(){this.g.l=null,delete this.j,rs(this.g),delete this.g,St.Z.N.call(this)};function Ao(i){Gr.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var u=i.__sm__;if(u){t:{for(const c in u){i=c;break t}i=void 0}(this.i=i)&&(i=this.i,u=u!==null&&i in u?u[i]:void 0),this.data=u}else this.data=i}E(Ao,Gr);function bo(){Hr.call(this),this.status=1}E(bo,Hr);function Ve(i){this.g=i}E(Ve,ko),Ve.prototype.ra=function(){At(this.g,"a")},Ve.prototype.qa=function(i){At(this.g,new Ao(i))},Ve.prototype.pa=function(i){At(this.g,new bo)},Ve.prototype.oa=function(){At(this.g,"b")},Wn.prototype.createWebChannel=Wn.prototype.g,St.prototype.send=St.prototype.o,St.prototype.open=St.prototype.m,St.prototype.close=St.prototype.close,su=function(){return new Wn},ru=function(){return Un()},nu=ge,Ss={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},jn.NO_ERROR=0,jn.TIMEOUT=8,jn.HTTP_ERROR=6,nr=jn,Bi.COMPLETE="complete",eu=Bi,Oi.EventType=tn,tn.OPEN="a",tn.CLOSE="b",tn.ERROR="c",tn.MESSAGE="d",wt.prototype.listen=wt.prototype.J,pn=Oi,st.prototype.listenOnce=st.prototype.K,st.prototype.getLastError=st.prototype.Ha,st.prototype.getLastErrorCode=st.prototype.ya,st.prototype.getStatus=st.prototype.ca,st.prototype.getResponseJson=st.prototype.La,st.prototype.getResponseText=st.prototype.la,st.prototype.send=st.prototype.ea,st.prototype.setWithCredentials=st.prototype.Fa,tu=st}).apply(typeof Xn<"u"?Xn:typeof self<"u"?self:typeof window<"u"?window:{});const Bo="@firebase/firestore",qo="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}vt.UNAUTHENTICATED=new vt(null),vt.GOOGLE_CREDENTIALS=new vt("google-credentials-uid"),vt.FIRST_PARTY=new vt("first-party-uid"),vt.MOCK_USER=new vt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let We="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ie=new Wa("@firebase/firestore");function De(){return Ie.logLevel}function N(n,...t){if(Ie.logLevel<=W.DEBUG){const e=t.map(Ks);Ie.debug(`Firestore (${We}): ${n}`,...e)}}function Gt(n,...t){if(Ie.logLevel<=W.ERROR){const e=t.map(Ks);Ie.error(`Firestore (${We}): ${n}`,...e)}}function Be(n,...t){if(Ie.logLevel<=W.WARN){const e=t.map(Ks);Ie.warn(`Firestore (${We}): ${n}`,...e)}}function Ks(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(e){return JSON.stringify(e)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,iu(n,r,e)}function iu(n,t,e){let r=`FIRESTORE (${We}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw Gt(r),new Error(r)}function X(n,t,e,r){let s="Unexpected state";typeof e=="string"?s=e:r=e,n||iu(t,s,r)}function U(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends Ke{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class $h{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(vt.UNAUTHENTICATED)))}shutdown(){}}class Gh{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class Hh{constructor(t){this.t=t,this.currentUser=vt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){X(this.o===void 0,42304);let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new se;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new se,t.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const h=o;t.enqueueRetryable((async()=>{await h.promise,await s(this.currentUser)}))},l=h=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((h=>l(h))),setTimeout((()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?l(h):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new se)}}),0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((r=>this.i!==t?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(X(typeof r.accessToken=="string",31837,{l:r}),new ou(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return X(t===null||typeof t=="string",2055,{h:t}),new vt(t)}}class Kh{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=vt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Wh{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new Kh(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(vt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class zo{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Qh{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Sh(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){X(this.o===void 0,3512);const r=o=>{o.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,N("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable((()=>r(o)))};const s=o=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((o=>s(o))),setTimeout((()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new zo(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(X(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new zo(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xh(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Xh(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%62))}return r}}function z(n,t){return n<t?-1:n>t?1:0}function Ps(n,t){const e=Math.min(n.length,t.length);for(let r=0;r<e;r++){const s=n.charAt(r),o=t.charAt(r);if(s!==o)return ds(s)===ds(o)?z(s,o):ds(s)?1:-1}return z(n.length,t.length)}const Yh=55296,Jh=57343;function ds(n){const t=n.charCodeAt(0);return t>=Yh&&t<=Jh}function qe(n,t,e){return n.length===t.length&&n.every(((r,s)=>e(r,t[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $o="__name__";class Lt{constructor(t,e,r){e===void 0?e=0:e>t.length&&L(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&L(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Lt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Lt?t.forEach((r=>{e.push(r)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=Lt.compareSegments(t.get(s),e.get(s));if(o!==0)return o}return z(t.length,e.length)}static compareSegments(t,e){const r=Lt.isNumericId(t),s=Lt.isNumericId(e);return r&&!s?-1:!r&&s?1:r&&s?Lt.extractNumericId(t).compare(Lt.extractNumericId(e)):Ps(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return re.fromString(t.substring(4,t.length-2))}}class Z extends Lt{construct(t,e,r){return new Z(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new V(b.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter((s=>s.length>0)))}return new Z(e)}static emptyPath(){return new Z([])}}const Zh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class yt extends Lt{construct(t,e,r){return new yt(t,e,r)}static isValidIdentifier(t){return Zh.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),yt.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===$o}static keyField(){return new yt([$o])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new V(b.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const l=t[s];if(l==="\\"){if(s+1===t.length)throw new V(b.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new V(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(o(),s++)}if(o(),a)throw new V(b.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new yt(e)}static emptyPath(){return new yt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t){this.path=t}static fromPath(t){return new O(Z.fromString(t))}static fromName(t){return new O(Z.fromString(t).popFirst(5))}static empty(){return new O(Z.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Z.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Z.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new O(new Z(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function au(n,t,e){if(!e)throw new V(b.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function tf(n,t,e,r){if(t===!0&&r===!0)throw new V(b.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Go(n){if(!O.isDocumentKey(n))throw new V(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ho(n){if(O.isDocumentKey(n))throw new V(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function uu(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Ar(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=(function(r){return r.constructor?r.constructor.name:null})(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":L(12329,{type:typeof n})}function fr(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new V(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Ar(n);throw new V(b.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(n,t){const e={typeString:n};return t&&(e.value=t),e}function Nn(n,t){if(!uu(n))throw new V(b.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const s=t[r].typeString,o="value"in t[r]?{value:t[r].value}:void 0;if(!(r in n)){e=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){e=`JSON field '${r}' must be a ${s}.`;break}if(o!==void 0&&a!==o.value){e=`Expected '${r}' field to equal '${o.value}'`;break}}if(e)throw new V(b.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ko=-62135596800,Wo=1e6;class nt{static now(){return nt.fromMillis(Date.now())}static fromDate(t){return nt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*Wo);return new nt(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new V(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new V(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Ko)throw new V(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new V(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Wo}_compareTo(t){return this.seconds===t.seconds?z(this.nanoseconds,t.nanoseconds):z(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:nt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Nn(t,nt._jsonSchema))return new nt(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Ko;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}nt._jsonSchemaVersion="firestore/timestamp/1.0",nt._jsonSchema={type:lt("string",nt._jsonSchemaVersion),seconds:lt("number"),nanoseconds:lt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{static fromTimestamp(t){return new F(t)}static min(){return new F(new nt(0,0))}static max(){return new F(new nt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn=-1;function ef(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=F.fromTimestamp(r===1e9?new nt(e+1,0):new nt(e,r));return new oe(s,O.empty(),t)}function nf(n){return new oe(n.readTime,n.key,bn)}class oe{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new oe(F.min(),O.empty(),bn)}static max(){return new oe(F.max(),O.empty(),bn)}}function rf(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=O.comparator(n.documentKey,t.documentKey),e!==0?e:z(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sf="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class of{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qe(n){if(n.code!==b.FAILED_PRECONDITION||n.message!==sf)throw n;N("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&L(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new R(((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof R?e:R.resolve(e)}catch(e){return R.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):R.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):R.reject(e)}static resolve(t){return new R(((e,r)=>{e(t)}))}static reject(t){return new R(((e,r)=>{r(t)}))}static waitFor(t){return new R(((e,r)=>{let s=0,o=0,a=!1;t.forEach((l=>{++s,l.next((()=>{++o,a&&o===s&&e()}),(h=>r(h)))})),a=!0,o===s&&e()}))}static or(t){let e=R.resolve(!1);for(const r of t)e=e.next((s=>s?R.resolve(s):r()));return e}static forEach(t,e){const r=[];return t.forEach(((s,o)=>{r.push(e.call(this,s,o))})),this.waitFor(r)}static mapArray(t,e){return new R(((r,s)=>{const o=t.length,a=new Array(o);let l=0;for(let h=0;h<o;h++){const d=h;e(t[d]).next((p=>{a[d]=p,++l,l===o&&r(a)}),(p=>s(p)))}}))}static doWhile(t,e){return new R(((r,s)=>{const o=()=>{t()===!0?e().next((()=>{o()}),s):r()};o()}))}}function af(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Xe(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>e.writeSequenceNumber(r))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}br.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs=-1;function Rr(n){return n==null}function dr(n){return n===0&&1/n==-1/0}function uf(n){return typeof n=="number"&&Number.isInteger(n)&&!dr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cu="";function cf(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=Qo(t)),t=lf(n.get(e),t);return Qo(t)}function lf(n,t){let e=t;const r=n.length;for(let s=0;s<r;s++){const o=n.charAt(s);switch(o){case"\0":e+="";break;case cu:e+="";break;default:e+=o}}return e}function Qo(n){return n+cu+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xo(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function ke(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function lu(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(t,e){this.comparator=t,this.root=e||_t.EMPTY}insert(t,e){return new rt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,_t.BLACK,null,null))}remove(t){return new rt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,_t.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,r)=>(t(e,r),!1)))}toString(){const t=[];return this.inorderTraversal(((e,r)=>(t.push(`${e}:${r}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Yn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Yn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Yn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Yn(this.root,t,this.comparator,!0)}}class Yn{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class _t{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??_t.RED,this.left=s??_t.EMPTY,this.right=o??_t.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new _t(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return _t.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return _t.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,_t.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,_t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw L(43730,{key:this.key,value:this.value});if(this.right.isRed())throw L(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw L(27949);return t+(this.isRed()?0:1)}}_t.EMPTY=null,_t.RED=!0,_t.BLACK=!1;_t.EMPTY=new class{constructor(){this.size=0}get key(){throw L(57766)}get value(){throw L(16141)}get color(){throw L(16727)}get left(){throw L(29726)}get right(){throw L(36894)}copy(t,e,r,s,o){return this}insert(t,e,r){return new _t(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(t){this.comparator=t,this.data=new rt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,r)=>(t(e),!1)))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Yo(this.data.getIterator())}getIteratorFrom(t){return new Yo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((r=>{e=e.add(r)})),e}isEqual(t){if(!(t instanceof ft)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new ft(this.comparator);return e.data=t,e}}class Yo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(t){this.fields=t,t.sort(yt.comparator)}static empty(){return new Nt([])}unionWith(t){let e=new ft(yt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Nt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return qe(this.fields,t.fields,((e,r)=>e.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new hu("Invalid base64 string: "+o):o}})(t);return new Et(e)}static fromUint8Array(t){const e=(function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o})(t);return new Et(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return z(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Et.EMPTY_BYTE_STRING=new Et("");const hf=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ae(n){if(X(!!n,39018),typeof n=="string"){let t=0;const e=hf.exec(n);if(X(!!e,46558,{timestamp:n}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:it(n.seconds),nanos:it(n.nanos)}}function it(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ue(n){return typeof n=="string"?Et.fromBase64String(n):Et.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fu="server_timestamp",du="__type__",mu="__previous_value__",gu="__local_write_time__";function Xs(n){return(n?.mapValue?.fields||{})[du]?.stringValue===fu}function Sr(n){const t=n.mapValue.fields[mu];return Xs(t)?Sr(t):t}function Rn(n){const t=ae(n.mapValue.fields[gu].timestampValue);return new nt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(t,e,r,s,o,a,l,h,d,p){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=h,this.useFetchStreams=d,this.isUsingEmulator=p}}const mr="(default)";class Sn{constructor(t,e){this.projectId=t,this.database=e||mr}static empty(){return new Sn("","")}get isDefaultDatabase(){return this.database===mr}isEqual(t){return t instanceof Sn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pu="__type__",df="__max__",Jn={mapValue:{}},_u="__vector__",gr="value";function ce(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Xs(n)?4:gf(n)?9007199254740991:mf(n)?10:11:L(28295,{value:n})}function qt(n,t){if(n===t)return!0;const e=ce(n);if(e!==ce(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Rn(n).isEqual(Rn(t));case 3:return(function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=ae(s.timestampValue),l=ae(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos})(n,t);case 5:return n.stringValue===t.stringValue;case 6:return(function(s,o){return ue(s.bytesValue).isEqual(ue(o.bytesValue))})(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return(function(s,o){return it(s.geoPointValue.latitude)===it(o.geoPointValue.latitude)&&it(s.geoPointValue.longitude)===it(o.geoPointValue.longitude)})(n,t);case 2:return(function(s,o){if("integerValue"in s&&"integerValue"in o)return it(s.integerValue)===it(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=it(s.doubleValue),l=it(o.doubleValue);return a===l?dr(a)===dr(l):isNaN(a)&&isNaN(l)}return!1})(n,t);case 9:return qe(n.arrayValue.values||[],t.arrayValue.values||[],qt);case 10:case 11:return(function(s,o){const a=s.mapValue.fields||{},l=o.mapValue.fields||{};if(Xo(a)!==Xo(l))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(l[h]===void 0||!qt(a[h],l[h])))return!1;return!0})(n,t);default:return L(52216,{left:n})}}function Pn(n,t){return(n.values||[]).find((e=>qt(e,t)))!==void 0}function ze(n,t){if(n===t)return 0;const e=ce(n),r=ce(t);if(e!==r)return z(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return z(n.booleanValue,t.booleanValue);case 2:return(function(o,a){const l=it(o.integerValue||o.doubleValue),h=it(a.integerValue||a.doubleValue);return l<h?-1:l>h?1:l===h?0:isNaN(l)?isNaN(h)?0:-1:1})(n,t);case 3:return Jo(n.timestampValue,t.timestampValue);case 4:return Jo(Rn(n),Rn(t));case 5:return Ps(n.stringValue,t.stringValue);case 6:return(function(o,a){const l=ue(o),h=ue(a);return l.compareTo(h)})(n.bytesValue,t.bytesValue);case 7:return(function(o,a){const l=o.split("/"),h=a.split("/");for(let d=0;d<l.length&&d<h.length;d++){const p=z(l[d],h[d]);if(p!==0)return p}return z(l.length,h.length)})(n.referenceValue,t.referenceValue);case 8:return(function(o,a){const l=z(it(o.latitude),it(a.latitude));return l!==0?l:z(it(o.longitude),it(a.longitude))})(n.geoPointValue,t.geoPointValue);case 9:return Zo(n.arrayValue,t.arrayValue);case 10:return(function(o,a){const l=o.fields||{},h=a.fields||{},d=l[gr]?.arrayValue,p=h[gr]?.arrayValue,E=z(d?.values?.length||0,p?.values?.length||0);return E!==0?E:Zo(d,p)})(n.mapValue,t.mapValue);case 11:return(function(o,a){if(o===Jn.mapValue&&a===Jn.mapValue)return 0;if(o===Jn.mapValue)return 1;if(a===Jn.mapValue)return-1;const l=o.fields||{},h=Object.keys(l),d=a.fields||{},p=Object.keys(d);h.sort(),p.sort();for(let E=0;E<h.length&&E<p.length;++E){const k=Ps(h[E],p[E]);if(k!==0)return k;const S=ze(l[h[E]],d[p[E]]);if(S!==0)return S}return z(h.length,p.length)})(n.mapValue,t.mapValue);default:throw L(23264,{he:e})}}function Jo(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return z(n,t);const e=ae(n),r=ae(t),s=z(e.seconds,r.seconds);return s!==0?s:z(e.nanos,r.nanos)}function Zo(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=ze(e[s],r[s]);if(o)return o}return z(e.length,r.length)}function $e(n){return Cs(n)}function Cs(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(e){const r=ae(e);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(e){return ue(e).toBase64()})(n.bytesValue):"referenceValue"in n?(function(e){return O.fromName(e).toString()})(n.referenceValue):"geoPointValue"in n?(function(e){return`geo(${e.latitude},${e.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=Cs(o);return r+"]"})(n.arrayValue):"mapValue"in n?(function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${Cs(e.fields[a])}`;return s+"}"})(n.mapValue):L(61005,{value:n})}function rr(n){switch(ce(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Sr(n);return t?16+rr(t):16;case 5:return 2*n.stringValue.length;case 6:return ue(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,o)=>s+rr(o)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return ke(r.fields,((o,a)=>{s+=o.length+rr(a)})),s})(n.mapValue);default:throw L(13486,{value:n})}}function ta(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function Vs(n){return!!n&&"integerValue"in n}function Ys(n){return!!n&&"arrayValue"in n}function ea(n){return!!n&&"nullValue"in n}function na(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function sr(n){return!!n&&"mapValue"in n}function mf(n){return(n?.mapValue?.fields||{})[pu]?.stringValue===_u}function Tn(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const t={mapValue:{fields:{}}};return ke(n.mapValue.fields,((e,r)=>t.mapValue.fields[e]=Tn(r))),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Tn(n.arrayValue.values[e]);return t}return{...n}}function gf(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===df}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(t){this.value=t}static empty(){return new Ct({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!sr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Tn(e)}setAll(t){let e=yt.emptyPath(),r={},s=[];t.forEach(((a,l)=>{if(!e.isImmediateParentOf(l)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=l.popLast()}a?r[l.lastSegment()]=Tn(a):s.push(l.lastSegment())}));const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());sr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return qt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];sr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){ke(e,((s,o)=>t[s]=o));for(const s of r)delete t[s]}clone(){return new Ct(Tn(this.value))}}function yu(n){const t=[];return ke(n.fields,((e,r)=>{const s=new yt([e]);if(sr(r)){const o=yu(r.mapValue).fields;if(o.length===0)t.push(s);else for(const a of o)t.push(s.child(a))}else t.push(s)})),new Nt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(t,e,r,s,o,a,l){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=l}static newInvalidDocument(t){return new kt(t,0,F.min(),F.min(),F.min(),Ct.empty(),0)}static newFoundDocument(t,e,r,s){return new kt(t,1,e,F.min(),r,s,0)}static newNoDocument(t,e){return new kt(t,2,e,F.min(),F.min(),Ct.empty(),0)}static newUnknownDocument(t,e){return new kt(t,3,e,F.min(),F.min(),Ct.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ct.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof kt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new kt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(t,e){this.position=t,this.inclusive=e}}function ra(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],a=n.position[s];if(o.field.isKeyField()?r=O.comparator(O.fromName(a.referenceValue),e.key):r=ze(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function sa(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!qt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(t,e="asc"){this.field=t,this.dir=e}}function pf(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Eu=class{};class ct extends Eu{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new yf(t,e,r):e==="array-contains"?new wf(t,r):e==="in"?new If(t,r):e==="not-in"?new vf(t,r):e==="array-contains-any"?new kf(t,r):new ct(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Ef(t,r):new Tf(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(ze(e,this.value)):e!==null&&ce(this.value)===ce(e)&&this.matchesComparison(ze(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return L(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class xt extends Eu{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new xt(t,e)}matches(t){return Tu(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Tu(n){return n.op==="and"}function wu(n){return _f(n)&&Tu(n)}function _f(n){for(const t of n.filters)if(t instanceof xt)return!1;return!0}function Ds(n){if(n instanceof ct)return n.field.canonicalString()+n.op.toString()+$e(n.value);if(wu(n))return n.filters.map((t=>Ds(t))).join(",");{const t=n.filters.map((e=>Ds(e))).join(",");return`${n.op}(${t})`}}function Iu(n,t){return n instanceof ct?(function(r,s){return s instanceof ct&&r.op===s.op&&r.field.isEqual(s.field)&&qt(r.value,s.value)})(n,t):n instanceof xt?(function(r,s){return s instanceof xt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((o,a,l)=>o&&Iu(a,s.filters[l])),!0):!1})(n,t):void L(19439)}function vu(n){return n instanceof ct?(function(e){return`${e.field.canonicalString()} ${e.op} ${$e(e.value)}`})(n):n instanceof xt?(function(e){return e.op.toString()+" {"+e.getFilters().map(vu).join(" ,")+"}"})(n):"Filter"}class yf extends ct{constructor(t,e,r){super(t,e,r),this.key=O.fromName(r.referenceValue)}matches(t){const e=O.comparator(t.key,this.key);return this.matchesComparison(e)}}class Ef extends ct{constructor(t,e){super(t,"in",e),this.keys=ku("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Tf extends ct{constructor(t,e){super(t,"not-in",e),this.keys=ku("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function ku(n,t){return(t.arrayValue?.values||[]).map((e=>O.fromName(e.referenceValue)))}class wf extends ct{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Ys(e)&&Pn(e.arrayValue,this.value)}}class If extends ct{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Pn(this.value.arrayValue,e)}}class vf extends ct{constructor(t,e){super(t,"not-in",e)}matches(t){if(Pn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!Pn(this.value.arrayValue,e)}}class kf extends ct{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Ys(e)||!e.arrayValue.values)&&e.arrayValue.values.some((r=>Pn(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(t,e=null,r=[],s=[],o=null,a=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=l,this.Te=null}}function ia(n,t=null,e=[],r=[],s=null,o=null,a=null){return new Af(n,t,e,r,s,o,a)}function Js(n){const t=U(n);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((r=>Ds(r))).join(","),e+="|ob:",e+=t.orderBy.map((r=>(function(o){return o.field.canonicalString()+o.dir})(r))).join(","),Rr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((r=>$e(r))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((r=>$e(r))).join(",")),t.Te=e}return t.Te}function Zs(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!pf(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Iu(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!sa(n.startAt,t.startAt)&&sa(n.endAt,t.endAt)}function Ns(n){return O.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(t,e=null,r=[],s=[],o=null,a="F",l=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=h,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function bf(n,t,e,r,s,o,a,l){return new Ye(n,t,e,r,s,o,a,l)}function Au(n){return new Ye(n)}function oa(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function bu(n){return n.collectionGroup!==null}function wn(n){const t=U(n);if(t.Ie===null){t.Ie=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ie.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new ft(yt.comparator);return a.filters.forEach((h=>{h.getFlattenedFilters().forEach((d=>{d.isInequality()&&(l=l.add(d.field))}))})),l})(t).forEach((o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ie.push(new Cn(o,r))})),e.has(yt.keyField().canonicalString())||t.Ie.push(new Cn(yt.keyField(),r))}return t.Ie}function Ft(n){const t=U(n);return t.Ee||(t.Ee=Rf(t,wn(n))),t.Ee}function Rf(n,t){if(n.limitType==="F")return ia(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map((s=>{const o=s.dir==="desc"?"asc":"desc";return new Cn(s.field,o)}));const e=n.endAt?new pr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new pr(n.startAt.position,n.startAt.inclusive):null;return ia(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function xs(n,t){const e=n.filters.concat([t]);return new Ye(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function _r(n,t,e){return new Ye(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Pr(n,t){return Zs(Ft(n),Ft(t))&&n.limitType===t.limitType}function Ru(n){return`${Js(Ft(n))}|lt:${n.limitType}`}function Ne(n){return`Query(target=${(function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map((s=>vu(s))).join(", ")}]`),Rr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map((s=>$e(s))).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map((s=>$e(s))).join(",")),`Target(${r})`})(Ft(n))}; limitType=${n.limitType})`}function Cr(n,t){return t.isFoundDocument()&&(function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):O.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)})(n,t)&&(function(r,s){for(const o of wn(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0})(n,t)&&(function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0})(n,t)&&(function(r,s){return!(r.startAt&&!(function(a,l,h){const d=ra(a,l,h);return a.inclusive?d<=0:d<0})(r.startAt,wn(r),s)||r.endAt&&!(function(a,l,h){const d=ra(a,l,h);return a.inclusive?d>=0:d>0})(r.endAt,wn(r),s))})(n,t)}function Sf(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Su(n){return(t,e)=>{let r=!1;for(const s of wn(n)){const o=Pf(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function Pf(n,t,e){const r=n.field.isKeyField()?O.comparator(t.key,e.key):(function(o,a,l){const h=a.data.field(o),d=l.data.field(o);return h!==null&&d!==null?ze(h,d):L(42886)})(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return L(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){ke(this.inner,((e,r)=>{for(const[s,o]of r)t(s,o)}))}isEmpty(){return lu(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cf=new rt(O.comparator);function Ht(){return Cf}const Pu=new rt(O.comparator);function _n(...n){let t=Pu;for(const e of n)t=t.insert(e.key,e);return t}function Cu(n){let t=Pu;return n.forEach(((e,r)=>t=t.insert(e,r.overlayedDocument))),t}function we(){return In()}function Vu(){return In()}function In(){return new Ae((n=>n.toString()),((n,t)=>n.isEqual(t)))}const Vf=new rt(O.comparator),Df=new ft(O.comparator);function $(...n){let t=Df;for(const e of n)t=t.add(e);return t}const Nf=new ft(z);function xf(){return Nf}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:dr(t)?"-0":t}}function Du(n){return{integerValue:""+n}}function Mf(n,t){return uf(t)?Du(t):ti(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(){this._=void 0}}function Of(n,t,e){return n instanceof yr?(function(s,o){const a={fields:{[du]:{stringValue:fu},[gu]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&Xs(o)&&(o=Sr(o)),o&&(a.fields[mu]=o),{mapValue:a}})(e,t):n instanceof Vn?xu(n,t):n instanceof Dn?Mu(n,t):(function(s,o){const a=Nu(s,o),l=aa(a)+aa(s.Ae);return Vs(a)&&Vs(s.Ae)?Du(l):ti(s.serializer,l)})(n,t)}function Lf(n,t,e){return n instanceof Vn?xu(n,t):n instanceof Dn?Mu(n,t):e}function Nu(n,t){return n instanceof Er?(function(r){return Vs(r)||(function(o){return!!o&&"doubleValue"in o})(r)})(t)?t:{integerValue:0}:null}class yr extends Vr{}class Vn extends Vr{constructor(t){super(),this.elements=t}}function xu(n,t){const e=Ou(t);for(const r of n.elements)e.some((s=>qt(s,r)))||e.push(r);return{arrayValue:{values:e}}}class Dn extends Vr{constructor(t){super(),this.elements=t}}function Mu(n,t){let e=Ou(t);for(const r of n.elements)e=e.filter((s=>!qt(s,r)));return{arrayValue:{values:e}}}class Er extends Vr{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function aa(n){return it(n.integerValue||n.doubleValue)}function Ou(n){return Ys(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Ff(n,t){return n.field.isEqual(t.field)&&(function(r,s){return r instanceof Vn&&s instanceof Vn||r instanceof Dn&&s instanceof Dn?qe(r.elements,s.elements,qt):r instanceof Er&&s instanceof Er?qt(r.Ae,s.Ae):r instanceof yr&&s instanceof yr})(n.transform,t.transform)}class Uf{constructor(t,e){this.version=t,this.transformResults=e}}class zt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new zt}static exists(t){return new zt(void 0,t)}static updateTime(t){return new zt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ir(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Dr{}function Lu(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Uu(n.key,zt.none()):new xn(n.key,n.data,zt.none());{const e=n.data,r=Ct.empty();let s=new ft(yt.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new be(n.key,r,new Nt(s.toArray()),zt.none())}}function jf(n,t,e){n instanceof xn?(function(s,o,a){const l=s.value.clone(),h=ca(s.fieldTransforms,o,a.transformResults);l.setAll(h),o.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(n,t,e):n instanceof be?(function(s,o,a){if(!ir(s.precondition,o))return void o.convertToUnknownDocument(a.version);const l=ca(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Fu(s)),h.setAll(l),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()})(n,t,e):(function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()})(0,t,e)}function vn(n,t,e,r){return n instanceof xn?(function(o,a,l,h){if(!ir(o.precondition,a))return l;const d=o.value.clone(),p=la(o.fieldTransforms,h,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null})(n,t,e,r):n instanceof be?(function(o,a,l,h){if(!ir(o.precondition,a))return l;const d=la(o.fieldTransforms,h,a),p=a.data;return p.setAll(Fu(o)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map((E=>E.field)))})(n,t,e,r):(function(o,a,l){return ir(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l})(n,t,e)}function Bf(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=Nu(r.transform,s||null);o!=null&&(e===null&&(e=Ct.empty()),e.set(r.field,o))}return e||null}function ua(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&qe(r,s,((o,a)=>Ff(o,a)))})(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class xn extends Dr{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class be extends Dr{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Fu(n){const t=new Map;return n.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}})),t}function ca(n,t,e){const r=new Map;X(n.length===e.length,32656,{Re:e.length,Ve:n.length});for(let s=0;s<e.length;s++){const o=n[s],a=o.transform,l=t.data.field(o.field);r.set(o.field,Lf(a,l,e[s]))}return r}function la(n,t,e){const r=new Map;for(const s of n){const o=s.transform,a=e.data.field(s.field);r.set(s.field,Of(o,a,t))}return r}class Uu extends Dr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class qf extends Dr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&jf(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=vn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=vn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Vu();return this.mutations.forEach((s=>{const o=t.get(s.key),a=o.overlayedDocument;let l=this.applyToLocalView(a,o.mutatedFields);l=e.has(s.key)?null:l;const h=Lu(a,l);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(F.min())})),r}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),$())}isEqual(t){return this.batchId===t.batchId&&qe(this.mutations,t.mutations,((e,r)=>ua(e,r)))&&qe(this.baseMutations,t.baseMutations,((e,r)=>ua(e,r)))}}class ei{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){X(t.mutations.length===r.length,58842,{me:t.mutations.length,fe:r.length});let s=(function(){return Vf})();const o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new ei(t,e,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ut,K;function Hf(n){switch(n){case b.OK:return L(64938);case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0;default:return L(15467,{code:n})}}function ju(n){if(n===void 0)return Gt("GRPC error has no .code"),b.UNKNOWN;switch(n){case ut.OK:return b.OK;case ut.CANCELLED:return b.CANCELLED;case ut.UNKNOWN:return b.UNKNOWN;case ut.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case ut.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case ut.INTERNAL:return b.INTERNAL;case ut.UNAVAILABLE:return b.UNAVAILABLE;case ut.UNAUTHENTICATED:return b.UNAUTHENTICATED;case ut.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case ut.NOT_FOUND:return b.NOT_FOUND;case ut.ALREADY_EXISTS:return b.ALREADY_EXISTS;case ut.PERMISSION_DENIED:return b.PERMISSION_DENIED;case ut.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case ut.ABORTED:return b.ABORTED;case ut.OUT_OF_RANGE:return b.OUT_OF_RANGE;case ut.UNIMPLEMENTED:return b.UNIMPLEMENTED;case ut.DATA_LOSS:return b.DATA_LOSS;default:return L(39323,{code:n})}}(K=ut||(ut={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kf(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wf=new re([4294967295,4294967295],0);function ha(n){const t=Kf().encode(n),e=new Za;return e.update(t),new Uint8Array(e.digest())}function fa(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new re([e,r],0),new re([s,o],0)]}class ni{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new yn(`Invalid padding: ${e}`);if(r<0)throw new yn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new yn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new yn(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=re.fromNumber(this.ge)}ye(t,e,r){let s=t.add(e.multiply(re.fromNumber(r)));return s.compare(Wf)===1&&(s=new re([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const e=ha(t),[r,s]=fa(e);for(let o=0;o<this.hashCount;o++){const a=this.ye(r,s,o);if(!this.we(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new ni(o,s,e);return r.forEach((l=>a.insert(l))),a}insert(t){if(this.ge===0)return;const e=ha(t),[r,s]=fa(e);for(let o=0;o<this.hashCount;o++){const a=this.ye(r,s,o);this.Se(a)}}Se(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class yn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,Mn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Nr(F.min(),s,new rt(z),Ht(),$())}}class Mn{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new Mn(r,e,$(),$(),$())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(t,e,r,s){this.be=t,this.removedTargetIds=e,this.key=r,this.De=s}}class Bu{constructor(t,e){this.targetId=t,this.Ce=e}}class qu{constructor(t,e,r=Et.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class da{constructor(){this.ve=0,this.Fe=ma(),this.Me=Et.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=$(),e=$(),r=$();return this.Fe.forEach(((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:L(38017,{changeType:o})}})),new Mn(this.Me,this.xe,t,e,r)}qe(){this.Oe=!1,this.Fe=ma()}Qe(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,X(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Qf{constructor(t){this.Ge=t,this.ze=new Map,this.je=Ht(),this.Je=Zn(),this.He=Zn(),this.Ye=new rt(z)}Ze(t){for(const e of t.be)t.De&&t.De.isFoundDocument()?this.Xe(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,(e=>{const r=this.nt(e);switch(t.state){case 0:this.rt(e)&&r.Le(t.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(t.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(r.We(),r.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),r.Le(t.resumeToken));break;default:L(56790,{state:t.state})}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach(((r,s)=>{this.rt(s)&&e(s)}))}st(t){const e=t.targetId,r=t.Ce.count,s=this.ot(e);if(s){const o=s.target;if(Ns(o))if(r===0){const a=new O(o.path);this.et(e,a,kt.newNoDocument(a,F.min()))}else X(r===1,20013,{expectedCount:r});else{const a=this._t(e);if(a!==r){const l=this.ut(t),h=l?this.ct(l,t,a):1;if(h!==0){this.it(e);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(e,d)}}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let a,l;try{a=ue(r).toUint8Array()}catch(h){if(h instanceof hu)return Be("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{l=new ni(a,s,o)}catch(h){return Be(h instanceof yn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return l.ge===0?null:l}ct(t,e,r){return e.Ce.count===r-this.Pt(t,e.targetId)?0:2}Pt(t,e){const r=this.Ge.getRemoteKeysForTarget(e);let s=0;return r.forEach((o=>{const a=this.Ge.ht(),l=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(l)||(this.et(e,o,null),s++)})),s}Tt(t){const e=new Map;this.ze.forEach(((o,a)=>{const l=this.ot(a);if(l){if(o.current&&Ns(l.target)){const h=new O(l.target.path);this.It(h).has(a)||this.Et(a,h)||this.et(a,h,kt.newNoDocument(h,t))}o.Be&&(e.set(a,o.ke()),o.qe())}}));let r=$();this.He.forEach(((o,a)=>{let l=!0;a.forEachWhile((h=>{const d=this.ot(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(r=r.add(o))})),this.je.forEach(((o,a)=>a.setReadTime(t)));const s=new Nr(t,e,this.Ye,this.je,r);return this.je=Ht(),this.Je=Zn(),this.He=Zn(),this.Ye=new rt(z),s}Xe(t,e){if(!this.rt(t))return;const r=this.Et(t,e.key)?2:0;this.nt(t).Qe(e.key,r),this.je=this.je.insert(e.key,e),this.Je=this.Je.insert(e.key,this.It(e.key).add(t)),this.He=this.He.insert(e.key,this.dt(e.key).add(t))}et(t,e,r){if(!this.rt(t))return;const s=this.nt(t);this.Et(t,e)?s.Qe(e,1):s.$e(e),this.He=this.He.insert(e,this.dt(e).delete(t)),this.He=this.He.insert(e,this.dt(e).add(t)),r&&(this.je=this.je.insert(e,r))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let e=this.ze.get(t);return e||(e=new da,this.ze.set(t,e)),e}dt(t){let e=this.He.get(t);return e||(e=new ft(z),this.He=this.He.insert(t,e)),e}It(t){let e=this.Je.get(t);return e||(e=new ft(z),this.Je=this.Je.insert(t,e)),e}rt(t){const e=this.ot(t)!==null;return e||N("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new da),this.Ge.getRemoteKeysForTarget(t).forEach((e=>{this.et(t,e,null)}))}Et(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function Zn(){return new rt(O.comparator)}function ma(){return new rt(O.comparator)}const Xf={asc:"ASCENDING",desc:"DESCENDING"},Yf={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Jf={and:"AND",or:"OR"};class Zf{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Ms(n,t){return n.useProto3Json||Rr(t)?t:{value:t}}function Tr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function zu(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function td(n,t){return Tr(n,t.toTimestamp())}function Ut(n){return X(!!n,49232),F.fromTimestamp((function(e){const r=ae(e);return new nt(r.seconds,r.nanos)})(n))}function ri(n,t){return Os(n,t).canonicalString()}function Os(n,t){const e=(function(s){return new Z(["projects",s.projectId,"databases",s.database])})(n).child("documents");return t===void 0?e:e.child(t)}function $u(n){const t=Z.fromString(n);return X(Qu(t),10190,{key:t.toString()}),t}function Ls(n,t){return ri(n.databaseId,t.path)}function ms(n,t){const e=$u(t);if(e.get(1)!==n.databaseId.projectId)throw new V(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new V(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new O(Hu(e))}function Gu(n,t){return ri(n.databaseId,t)}function ed(n){const t=$u(n);return t.length===4?Z.emptyPath():Hu(t)}function Fs(n){return new Z(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Hu(n){return X(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function ga(n,t,e){return{name:Ls(n,t),fields:e.value.mapValue.fields}}function nd(n,t){let e;if("targetChange"in t){t.targetChange;const r=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:L(39313,{state:d})})(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=(function(d,p){return d.useProto3Json?(X(p===void 0||typeof p=="string",58123),Et.fromBase64String(p||"")):(X(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),Et.fromUint8Array(p||new Uint8Array))})(n,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&(function(d){const p=d.code===void 0?b.UNKNOWN:ju(d.code);return new V(p,d.message||"")})(a);e=new qu(r,s,o,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=ms(n,r.document.name),o=Ut(r.document.updateTime),a=r.document.createTime?Ut(r.document.createTime):F.min(),l=new Ct({mapValue:{fields:r.document.fields}}),h=kt.newFoundDocument(s,o,a,l),d=r.targetIds||[],p=r.removedTargetIds||[];e=new or(d,p,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=ms(n,r.document),o=r.readTime?Ut(r.readTime):F.min(),a=kt.newNoDocument(s,o),l=r.removedTargetIds||[];e=new or([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=ms(n,r.document),o=r.removedTargetIds||[];e=new or([],o,s,null)}else{if(!("filter"in t))return L(11601,{Rt:t});{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new Gf(s,o),l=r.targetId;e=new Bu(l,a)}}return e}function rd(n,t){let e;if(t instanceof xn)e={update:ga(n,t.key,t.value)};else if(t instanceof Uu)e={delete:Ls(n,t.key)};else if(t instanceof be)e={update:ga(n,t.key,t.data),updateMask:fd(t.fieldMask)};else{if(!(t instanceof qf))return L(16599,{Vt:t.type});e={verify:Ls(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map((r=>(function(o,a){const l=a.transform;if(l instanceof yr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Vn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Dn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Er)return{fieldPath:a.field.canonicalString(),increment:l.Ae};throw L(20930,{transform:a.transform})})(0,r)))),t.precondition.isNone||(e.currentDocument=(function(s,o){return o.updateTime!==void 0?{updateTime:td(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:L(27497)})(n,t.precondition)),e}function sd(n,t){return n&&n.length>0?(X(t!==void 0,14353),n.map((e=>(function(s,o){let a=s.updateTime?Ut(s.updateTime):Ut(o);return a.isEqual(F.min())&&(a=Ut(o)),new Uf(a,s.transformResults||[])})(e,t)))):[]}function id(n,t){return{documents:[Gu(n,t.path)]}}function od(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Gu(n,s);const o=(function(d){if(d.length!==0)return Wu(xt.create(d,"and"))})(t.filters);o&&(e.structuredQuery.where=o);const a=(function(d){if(d.length!==0)return d.map((p=>(function(k){return{field:xe(k.field),direction:cd(k.dir)}})(p)))})(t.orderBy);a&&(e.structuredQuery.orderBy=a);const l=Ms(n,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(t.startAt)),t.endAt&&(e.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(t.endAt)),{ft:e,parent:s}}function ad(n){let t=ed(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){X(r===1,65062);const p=e.from[0];p.allDescendants?s=p.collectionId:t=t.child(p.collectionId)}let o=[];e.where&&(o=(function(E){const k=Ku(E);return k instanceof xt&&wu(k)?k.getFilters():[k]})(e.where));let a=[];e.orderBy&&(a=(function(E){return E.map((k=>(function(x){return new Cn(Me(x.field),(function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(x.direction))})(k)))})(e.orderBy));let l=null;e.limit&&(l=(function(E){let k;return k=typeof E=="object"?E.value:E,Rr(k)?null:k})(e.limit));let h=null;e.startAt&&(h=(function(E){const k=!!E.before,S=E.values||[];return new pr(S,k)})(e.startAt));let d=null;return e.endAt&&(d=(function(E){const k=!E.before,S=E.values||[];return new pr(S,k)})(e.endAt)),bf(t,s,a,o,l,"F",h,d)}function ud(n,t){const e=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return L(28987,{purpose:s})}})(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Ku(n){return n.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Me(e.unaryFilter.field);return ct.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Me(e.unaryFilter.field);return ct.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Me(e.unaryFilter.field);return ct.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Me(e.unaryFilter.field);return ct.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return L(61313);default:return L(60726)}})(n):n.fieldFilter!==void 0?(function(e){return ct.create(Me(e.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return L(58110);default:return L(50506)}})(e.fieldFilter.op),e.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(e){return xt.create(e.compositeFilter.filters.map((r=>Ku(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return L(1026)}})(e.compositeFilter.op))})(n):L(30097,{filter:n})}function cd(n){return Xf[n]}function ld(n){return Yf[n]}function hd(n){return Jf[n]}function xe(n){return{fieldPath:n.canonicalString()}}function Me(n){return yt.fromServerFormat(n.fieldPath)}function Wu(n){return n instanceof ct?(function(e){if(e.op==="=="){if(na(e.value))return{unaryFilter:{field:xe(e.field),op:"IS_NAN"}};if(ea(e.value))return{unaryFilter:{field:xe(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(na(e.value))return{unaryFilter:{field:xe(e.field),op:"IS_NOT_NAN"}};if(ea(e.value))return{unaryFilter:{field:xe(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xe(e.field),op:ld(e.op),value:e.value}}})(n):n instanceof xt?(function(e){const r=e.getFilters().map((s=>Wu(s)));return r.length===1?r[0]:{compositeFilter:{op:hd(e.op),filters:r}}})(n):L(54877,{filter:n})}function fd(n){const t=[];return n.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Qu(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(t,e,r,s,o=F.min(),a=F.min(),l=Et.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=h}withSequenceNumber(t){return new te(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new te(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new te(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new te(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(t){this.yt=t}}function md(n){const t=ad({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?_r(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(){this.Cn=new pd}addToCollectionParentIndex(t,e){return this.Cn.add(e),R.resolve()}getCollectionParents(t,e){return R.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return R.resolve()}deleteFieldIndex(t,e){return R.resolve()}deleteAllFieldIndexes(t){return R.resolve()}createTargetIndexes(t,e){return R.resolve()}getDocumentsMatchingTarget(t,e){return R.resolve(null)}getIndexType(t,e){return R.resolve(0)}getFieldIndexes(t,e){return R.resolve([])}getNextCollectionGroupToUpdate(t){return R.resolve(null)}getMinOffset(t,e){return R.resolve(oe.min())}getMinOffsetFromCollectionGroup(t,e){return R.resolve(oe.min())}updateCollectionGroup(t,e,r){return R.resolve()}updateIndexEntries(t,e){return R.resolve()}}class pd{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new ft(Z.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new ft(Z.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Xu=41943040;class Rt{static withCacheSize(t){return new Rt(t,Rt.DEFAULT_COLLECTION_PERCENTILE,Rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rt.DEFAULT_COLLECTION_PERCENTILE=10,Rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Rt.DEFAULT=new Rt(Xu,Rt.DEFAULT_COLLECTION_PERCENTILE,Rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Rt.DISABLED=new Rt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new Ge(0)}static cr(){return new Ge(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a="LruGarbageCollector",_d=1048576;function ya([n,t],[e,r]){const s=z(n,e);return s===0?z(t,r):s}class yd{constructor(t){this.Ir=t,this.buffer=new ft(ya),this.Er=0}dr(){return++this.Er}Ar(t){const e=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();ya(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Ed{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){N(_a,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Xe(e)?N(_a,"Ignoring IndexedDB error during garbage collection: ",e):await Qe(e)}await this.Vr(3e5)}))}}class Td{constructor(t,e){this.mr=t,this.params=e}calculateTargetCount(t,e){return this.mr.gr(t).next((r=>Math.floor(e/100*r)))}nthSequenceNumber(t,e){if(e===0)return R.resolve(br.ce);const r=new yd(e);return this.mr.forEachTarget(t,(s=>r.Ar(s.sequenceNumber))).next((()=>this.mr.pr(t,(s=>r.Ar(s))))).next((()=>r.maxValue))}removeTargets(t,e,r){return this.mr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.mr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(pa)):this.getCacheSize(t).next((r=>r<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),pa):this.yr(t,e)))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,e){let r,s,o,a,l,h,d;const p=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((E=>(E>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${E}`),s=this.params.maximumSequenceNumbersToCollect):s=E,a=Date.now(),this.nthSequenceNumber(t,s)))).next((E=>(r=E,l=Date.now(),this.removeTargets(t,r,e)))).next((E=>(o=E,h=Date.now(),this.removeOrphanedDocuments(t,r)))).next((E=>(d=Date.now(),De()<=W.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${o} targets in `+(h-l)+`ms
	Removed ${E} documents in `+(d-h)+`ms
Total Duration: ${d-p}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:E}))))}}function wd(n,t){return new Td(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(){this.changes=new Ae((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,kt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?R.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(r=s,this.remoteDocumentCache.getEntry(t,e)))).next((s=>(r!==null&&vn(r.mutation,s,Nt.empty(),nt.now()),s)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.getLocalViewOfDocuments(t,r,$()).next((()=>r))))}getLocalViewOfDocuments(t,e,r=$()){const s=we();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,r).next((o=>{let a=_n();return o.forEach(((l,h)=>{a=a.insert(l,h.overlayedDocument)})),a}))))}getOverlayedDocuments(t,e){const r=we();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,$())))}populateOverlays(t,e,r){const s=[];return r.forEach((o=>{e.has(o)||s.push(o)})),this.documentOverlayCache.getOverlays(t,s).next((o=>{o.forEach(((a,l)=>{e.set(a,l)}))}))}computeViews(t,e,r,s){let o=Ht();const a=In(),l=(function(){return In()})();return e.forEach(((h,d)=>{const p=r.get(d.key);s.has(d.key)&&(p===void 0||p.mutation instanceof be)?o=o.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),vn(p.mutation,d,p.mutation.getFieldMask(),nt.now())):a.set(d.key,Nt.empty())})),this.recalculateAndSaveOverlays(t,o).next((h=>(h.forEach(((d,p)=>a.set(d,p))),e.forEach(((d,p)=>l.set(d,new vd(p,a.get(d)??null)))),l)))}recalculateAndSaveOverlays(t,e){const r=In();let s=new rt(((a,l)=>a-l)),o=$();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((a=>{for(const l of a)l.keys().forEach((h=>{const d=e.get(h);if(d===null)return;let p=r.get(h)||Nt.empty();p=l.applyToLocalView(d,p),r.set(h,p);const E=(s.get(l.batchId)||$()).add(h);s=s.insert(l.batchId,E)}))})).next((()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const h=l.getNext(),d=h.key,p=h.value,E=Vu();p.forEach((k=>{if(!o.has(k)){const S=Lu(e.get(k),r.get(k));S!==null&&E.set(k,S),o=o.add(k)}})),a.push(this.documentOverlayCache.saveOverlays(t,d,E))}return R.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.recalculateAndSaveOverlays(t,r)))}getDocumentsMatchingQuery(t,e,r,s){return(function(a){return O.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):bu(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next((o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):R.resolve(we());let l=bn,h=o;return a.next((d=>R.forEach(d,((p,E)=>(l<E.largestBatchId&&(l=E.largestBatchId),o.get(p)?R.resolve():this.remoteDocumentCache.getEntry(t,p).next((k=>{h=h.insert(p,k)}))))).next((()=>this.populateOverlays(t,d,o))).next((()=>this.computeViews(t,h,d,$()))).next((p=>({batchId:l,changes:Cu(p)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new O(e)).next((r=>{let s=_n();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let a=_n();return this.indexManager.getCollectionParents(t,o).next((l=>R.forEach(l,(h=>{const d=(function(E,k){return new Ye(k,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)})(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,r,s).next((p=>{p.forEach(((E,k)=>{a=a.insert(E,k)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next((a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s)))).next((a=>{o.forEach(((h,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,kt.newInvalidDocument(p)))}));let l=_n();return a.forEach(((h,d)=>{const p=o.get(h);p!==void 0&&vn(p.mutation,d,Nt.empty(),nt.now()),Cr(e,d)&&(l=l.insert(h,d))})),l}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,e){return R.resolve(this.Lr.get(e))}saveBundleMetadata(t,e){return this.Lr.set(e.id,(function(s){return{id:s.id,version:s.version,createTime:Ut(s.createTime)}})(e)),R.resolve()}getNamedQuery(t,e){return R.resolve(this.kr.get(e))}saveNamedQuery(t,e){return this.kr.set(e.name,(function(s){return{name:s.name,query:md(s.bundledQuery),readTime:Ut(s.readTime)}})(e)),R.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(){this.overlays=new rt(O.comparator),this.qr=new Map}getOverlay(t,e){return R.resolve(this.overlays.get(e))}getOverlays(t,e){const r=we();return R.forEach(e,(s=>this.getOverlay(t,s).next((o=>{o!==null&&r.set(s,o)})))).next((()=>r))}saveOverlays(t,e,r){return r.forEach(((s,o)=>{this.St(t,e,o)})),R.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach((o=>this.overlays=this.overlays.remove(o))),this.qr.delete(r)),R.resolve()}getOverlaysForCollection(t,e,r){const s=we(),o=e.length+1,a=new O(e.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const h=l.getNext().value,d=h.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return R.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new rt(((d,p)=>d-p));const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let p=o.get(d.largestBatchId);p===null&&(p=we(),o=o.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const l=we(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach(((d,p)=>l.set(d,p))),!(l.size()>=s)););return R.resolve(l)}St(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new $f(e,r));let o=this.qr.get(e);o===void 0&&(o=$(),this.qr.set(e,o)),this.qr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(){this.sessionToken=Et.EMPTY_BYTE_STRING}getSessionToken(t){return R.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,R.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(){this.Qr=new ft(gt.$r),this.Ur=new ft(gt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,e){const r=new gt(t,e);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(t,e){t.forEach((r=>this.addReference(r,e)))}removeReference(t,e){this.Gr(new gt(t,e))}zr(t,e){t.forEach((r=>this.removeReference(r,e)))}jr(t){const e=new O(new Z([])),r=new gt(e,t),s=new gt(e,t+1),o=[];return this.Ur.forEachInRange([r,s],(a=>{this.Gr(a),o.push(a.key)})),o}Jr(){this.Qr.forEach((t=>this.Gr(t)))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const e=new O(new Z([])),r=new gt(e,t),s=new gt(e,t+1);let o=$();return this.Ur.forEachInRange([r,s],(a=>{o=o.add(a.key)})),o}containsKey(t){const e=new gt(t,0),r=this.Qr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class gt{constructor(t,e){this.key=t,this.Yr=e}static $r(t,e){return O.comparator(t.key,e.key)||z(t.Yr,e.Yr)}static Kr(t,e){return z(t.Yr,e.Yr)||O.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.tr=1,this.Zr=new ft(gt.$r)}checkEmpty(t){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new zf(o,e,r,s);this.mutationQueue.push(a);for(const l of s)this.Zr=this.Zr.add(new gt(l.key,o)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return R.resolve(a)}lookupMutationBatch(t,e){return R.resolve(this.Xr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.ei(r),o=s<0?0:s;return R.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?Qs:this.tr-1)}getAllMutationBatches(t){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new gt(e,0),s=new gt(e,Number.POSITIVE_INFINITY),o=[];return this.Zr.forEachInRange([r,s],(a=>{const l=this.Xr(a.Yr);o.push(l)})),R.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new ft(z);return e.forEach((s=>{const o=new gt(s,0),a=new gt(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([o,a],(l=>{r=r.add(l.Yr)}))})),R.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;O.isDocumentKey(o)||(o=o.child(""));const a=new gt(new O(o),0);let l=new ft(z);return this.Zr.forEachWhile((h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(l=l.add(h.Yr)),!0)}),a),R.resolve(this.ti(l))}ti(t){const e=[];return t.forEach((r=>{const s=this.Xr(r);s!==null&&e.push(s)})),e}removeMutationBatch(t,e){X(this.ni(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return R.forEach(e.mutations,(s=>{const o=new gt(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.Zr=r}))}ir(t){}containsKey(t,e){const r=new gt(e,0),s=this.Zr.firstAfterOrEqual(r);return R.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,R.resolve()}ni(t,e){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const e=this.ei(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(t){this.ri=t,this.docs=(function(){return new rt(O.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,a=this.ri(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return R.resolve(r?r.document.mutableCopy():kt.newInvalidDocument(e))}getEntries(t,e){let r=Ht();return e.forEach((s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():kt.newInvalidDocument(s))})),R.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=Ht();const a=e.path,l=new O(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(l);for(;h.hasNext();){const{key:d,value:{document:p}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||rf(nf(p),r)<=0||(s.has(p.key)||Cr(e,p))&&(o=o.insert(p.key,p.mutableCopy()))}return R.resolve(o)}getAllFromCollectionGroup(t,e,r,s){L(9500)}ii(t,e){return R.forEach(this.docs,(r=>e(r)))}newChangeBuffer(t){return new Cd(this)}getSize(t){return R.resolve(this.size)}}class Cd extends Id{constructor(t){super(),this.Nr=t}applyChanges(t){const e=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?e.push(this.Nr.addEntry(t,s)):this.Nr.removeEntry(r)})),R.waitFor(e)}getFromCache(t,e){return this.Nr.getEntry(t,e)}getAllFromCache(t,e){return this.Nr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(t){this.persistence=t,this.si=new Ae((e=>Js(e)),Zs),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.oi=0,this._i=new si,this.targetCount=0,this.ai=Ge.ur()}forEachTarget(t,e){return this.si.forEach(((r,s)=>e(s))),R.resolve()}getLastRemoteSnapshotVersion(t){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return R.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.oi&&(this.oi=e),R.resolve()}Pr(t){this.si.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ai=new Ge(e),this.highestTargetId=e),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,e){return this.Pr(e),this.targetCount+=1,R.resolve()}updateTargetData(t,e){return this.Pr(e),R.resolve()}removeTargetData(t,e){return this.si.delete(e.target),this._i.jr(e.targetId),this.targetCount-=1,R.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.si.forEach(((a,l)=>{l.sequenceNumber<=e&&r.get(l.targetId)===null&&(this.si.delete(a),o.push(this.removeMatchingKeysForTargetId(t,l.targetId)),s++)})),R.waitFor(o).next((()=>s))}getTargetCount(t){return R.resolve(this.targetCount)}getTargetData(t,e){const r=this.si.get(e)||null;return R.resolve(r)}addMatchingKeys(t,e,r){return this._i.Wr(e,r),R.resolve()}removeMatchingKeys(t,e,r){this._i.zr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach((a=>{o.push(s.markPotentiallyOrphaned(t,a))})),R.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this._i.jr(e),R.resolve()}getMatchingKeysForTargetId(t,e){const r=this._i.Hr(e);return R.resolve(r)}containsKey(t,e){return R.resolve(this._i.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(t,e){this.ui={},this.overlays={},this.ci=new br(0),this.li=!1,this.li=!0,this.hi=new Rd,this.referenceDelegate=t(this),this.Pi=new Vd(this),this.indexManager=new gd,this.remoteDocumentCache=(function(s){return new Pd(s)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new dd(e),this.Ii=new Ad(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new bd,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.ui[t.toKey()];return r||(r=new Sd(e,this.referenceDelegate),this.ui[t.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,e,r){N("MemoryPersistence","Starting transaction:",t);const s=new Dd(this.ci.next());return this.referenceDelegate.Ei(),r(s).next((o=>this.referenceDelegate.di(s).next((()=>o)))).toPromise().then((o=>(s.raiseOnCommittedEvent(),o)))}Ai(t,e){return R.or(Object.values(this.ui).map((r=>()=>r.containsKey(t,e))))}}class Dd extends of{constructor(t){super(),this.currentSequenceNumber=t}}class ii{constructor(t){this.persistence=t,this.Ri=new si,this.Vi=null}static mi(t){return new ii(t)}get fi(){if(this.Vi)return this.Vi;throw L(60996)}addReference(t,e,r){return this.Ri.addReference(r,e),this.fi.delete(r.toString()),R.resolve()}removeReference(t,e,r){return this.Ri.removeReference(r,e),this.fi.add(r.toString()),R.resolve()}markPotentiallyOrphaned(t,e){return this.fi.add(e.toString()),R.resolve()}removeTarget(t,e){this.Ri.jr(e.targetId).forEach((s=>this.fi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next((s=>{s.forEach((o=>this.fi.add(o.toString())))})).next((()=>r.removeTargetData(t,e)))}Ei(){this.Vi=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.fi,(r=>{const s=O.fromPath(r);return this.gi(t,s).next((o=>{o||e.removeEntry(s,F.min())}))})).next((()=>(this.Vi=null,e.apply(t))))}updateLimboDocument(t,e){return this.gi(t,e).next((r=>{r?this.fi.delete(e.toString()):this.fi.add(e.toString())}))}Ti(t){return 0}gi(t,e){return R.or([()=>R.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ai(t,e)])}}class wr{constructor(t,e){this.persistence=t,this.pi=new Ae((r=>cf(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=wd(this,e)}static mi(t,e){return new wr(t,e)}Ei(){}di(t){return R.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}gr(t){const e=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next((r=>e.next((s=>r+s))))}wr(t){let e=0;return this.pr(t,(r=>{e++})).next((()=>e))}pr(t,e){return R.forEach(this.pi,((r,s)=>this.br(t,r,s).next((o=>o?R.resolve():e(s)))))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.ii(t,(a=>this.br(t,a,e).next((l=>{l||(r++,o.removeEntry(a,F.min()))})))).next((()=>o.apply(t))).next((()=>r))}markPotentiallyOrphaned(t,e){return this.pi.set(e,t.currentSequenceNumber),R.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.pi.set(r,t.currentSequenceNumber),R.resolve()}removeReference(t,e,r){return this.pi.set(r,t.currentSequenceNumber),R.resolve()}updateLimboDocument(t,e){return this.pi.set(e,t.currentSequenceNumber),R.resolve()}Ti(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=rr(t.data.value)),e}br(t,e,r){return R.or([()=>this.persistence.Ai(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.pi.get(e);return R.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.Es=r,this.ds=s}static As(t,e){let r=$(),s=$();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new oi(t,e.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return Al()?8:af(vl())>0?6:4})()}initialize(t,e){this.ps=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.ys(t,e).next((a=>{o.result=a})).next((()=>{if(!o.result)return this.ws(t,e,s,r).next((a=>{o.result=a}))})).next((()=>{if(o.result)return;const a=new Nd;return this.Ss(t,e,a).next((l=>{if(o.result=l,this.Vs)return this.bs(t,e,a,l.size)}))})).next((()=>o.result))}bs(t,e,r,s){return r.documentReadCount<this.fs?(De()<=W.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",Ne(e),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),R.resolve()):(De()<=W.DEBUG&&N("QueryEngine","Query:",Ne(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(De()<=W.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",Ne(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ft(e))):R.resolve())}ys(t,e){if(oa(e))return R.resolve(null);let r=Ft(e);return this.indexManager.getIndexType(t,r).next((s=>s===0?null:(e.limit!==null&&s===1&&(e=_r(e,null,"F"),r=Ft(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next((o=>{const a=$(...o);return this.ps.getDocuments(t,a).next((l=>this.indexManager.getMinOffset(t,r).next((h=>{const d=this.Ds(e,l);return this.Cs(e,d,a,h.readTime)?this.ys(t,_r(e,null,"F")):this.vs(t,d,e,h)}))))})))))}ws(t,e,r,s){return oa(e)||s.isEqual(F.min())?R.resolve(null):this.ps.getDocuments(t,r).next((o=>{const a=this.Ds(e,o);return this.Cs(e,a,r,s)?R.resolve(null):(De()<=W.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ne(e)),this.vs(t,a,e,ef(s,bn)).next((l=>l)))}))}Ds(t,e){let r=new ft(Su(t));return e.forEach(((s,o)=>{Cr(t,o)&&(r=r.add(o))})),r}Cs(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Ss(t,e,r){return De()<=W.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",Ne(e)),this.ps.getDocumentsMatchingQuery(t,e,oe.min(),r)}vs(t,e,r,s){return this.ps.getDocumentsMatchingQuery(t,r,s).next((o=>(e.forEach((a=>{o=o.insert(a.key,a)})),o)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai="LocalStore",Md=3e8;class Od{constructor(t,e,r,s){this.persistence=t,this.Fs=e,this.serializer=s,this.Ms=new rt(z),this.xs=new Ae((o=>Js(o)),Zs),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(r)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new kd(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ms)))}}function Ld(n,t,e,r){return new Od(n,t,e,r)}async function Ju(n,t){const e=U(n);return await e.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next((o=>(s=o,e.Bs(t),e.mutationQueue.getAllMutationBatches(r)))).next((o=>{const a=[],l=[];let h=$();for(const d of s){a.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}for(const d of o){l.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}return e.localDocuments.getDocuments(r,h).next((d=>({Ls:d,removedBatchIds:a,addedBatchIds:l})))}))}))}function Fd(n,t){const e=U(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=t.batch.keys(),o=e.Ns.newChangeBuffer({trackRemovals:!0});return(function(l,h,d,p){const E=d.batch,k=E.keys();let S=R.resolve();return k.forEach((x=>{S=S.next((()=>p.getEntry(h,x))).next((M=>{const C=d.docVersions.get(x);X(C!==null,48541),M.version.compareTo(C)<0&&(E.applyToRemoteDocument(M,d),M.isValidDocument()&&(M.setReadTime(d.commitVersion),p.addEntry(M)))}))})),S.next((()=>l.mutationQueue.removeMutationBatch(h,E)))})(e,r,t,o).next((()=>o.apply(r))).next((()=>e.mutationQueue.performConsistencyCheck(r))).next((()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId))).next((()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(l){let h=$();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(h=h.add(l.batch.mutations[d].key));return h})(t)))).next((()=>e.localDocuments.getDocuments(r,s)))}))}function Zu(n){const t=U(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Pi.getLastRemoteSnapshotVersion(e)))}function Ud(n,t){const e=U(n),r=t.snapshotVersion;let s=e.Ms;return e.persistence.runTransaction("Apply remote event","readwrite-primary",(o=>{const a=e.Ns.newChangeBuffer({trackRemovals:!0});s=e.Ms;const l=[];t.targetChanges.forEach(((p,E)=>{const k=s.get(E);if(!k)return;l.push(e.Pi.removeMatchingKeys(o,p.removedDocuments,E).next((()=>e.Pi.addMatchingKeys(o,p.addedDocuments,E))));let S=k.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(E)!==null?S=S.withResumeToken(Et.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):p.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(p.resumeToken,r)),s=s.insert(E,S),(function(M,C,G){return M.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-M.snapshotVersion.toMicroseconds()>=Md?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0})(k,S,p)&&l.push(e.Pi.updateTargetData(o,S))}));let h=Ht(),d=$();if(t.documentUpdates.forEach((p=>{t.resolvedLimboDocuments.has(p)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(o,p))})),l.push(jd(o,a,t.documentUpdates).next((p=>{h=p.ks,d=p.qs}))),!r.isEqual(F.min())){const p=e.Pi.getLastRemoteSnapshotVersion(o).next((E=>e.Pi.setTargetsMetadata(o,o.currentSequenceNumber,r)));l.push(p)}return R.waitFor(l).next((()=>a.apply(o))).next((()=>e.localDocuments.getLocalViewOfDocuments(o,h,d))).next((()=>h))})).then((o=>(e.Ms=s,o)))}function jd(n,t,e){let r=$(),s=$();return e.forEach((o=>r=r.add(o))),t.getEntries(n,r).next((o=>{let a=Ht();return e.forEach(((l,h)=>{const d=o.get(l);h.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(l)),h.isNoDocument()&&h.version.isEqual(F.min())?(t.removeEntry(l,h.readTime),a=a.insert(l,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(h),a=a.insert(l,h)):N(ai,"Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",h.version)})),{ks:a,qs:s}}))}function Bd(n,t){const e=U(n);return e.persistence.runTransaction("Get next mutation batch","readonly",(r=>(t===void 0&&(t=Qs),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t))))}function qd(n,t){const e=U(n);return e.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return e.Pi.getTargetData(r,t).next((o=>o?(s=o,R.resolve(s)):e.Pi.allocateTargetId(r).next((a=>(s=new te(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Pi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=e.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.Ms=e.Ms.insert(r.targetId,r),e.xs.set(t,r.targetId)),r}))}async function Us(n,t,e){const r=U(n),s=r.Ms.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!Xe(a))throw a;N(ai,`Failed to update sequence numbers for target ${t}: ${a}`)}r.Ms=r.Ms.remove(t),r.xs.delete(s.target)}function Ea(n,t,e){const r=U(n);let s=F.min(),o=$();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(h,d,p){const E=U(h),k=E.xs.get(p);return k!==void 0?R.resolve(E.Ms.get(k)):E.Pi.getTargetData(d,p)})(r,a,Ft(t)).next((l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,l.targetId).next((h=>{o=h}))})).next((()=>r.Fs.getDocumentsMatchingQuery(a,t,e?s:F.min(),e?o:$()))).next((l=>(zd(r,Sf(t),l),{documents:l,Qs:o})))))}function zd(n,t,e){let r=n.Os.get(t)||F.min();e.forEach(((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)})),n.Os.set(t,r)}class Ta{constructor(){this.activeTargetIds=xf()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class $d{constructor(){this.Mo=new Ta,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,e,r){this.xo[t]=e}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new Ta,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{Oo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wa="ConnectivityMonitor";class Ia{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){N(wa,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){N(wa,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tr=null;function js(){return tr===null?tr=(function(){return 268435456+Math.round(2147483648*Math.random())})():tr++,"0x"+tr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs="RestConnection",Hd={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Kd{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=e+"://"+t.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===mr?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(t,e,r,s,o){const a=js(),l=this.zo(t,e.toUriEncodedString());N(gs,`Sending RPC '${t}' ${a}:`,l,r);const h={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(h,s,o);const{host:d}=new URL(l),p=Gs(d);return this.Jo(t,l,h,r,p).then((E=>(N(gs,`Received RPC '${t}' ${a}: `,E),E)),(E=>{throw Be(gs,`RPC '${t}' ${a} failed with error: `,E,"url: ",l,"request:",r),E}))}Ho(t,e,r,s,o,a){return this.Go(t,e,r,s,o)}jo(t,e,r){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+We})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((s,o)=>t[o]=s)),r&&r.headers.forEach(((s,o)=>t[o]=s))}zo(t,e){const r=Hd[t];return`${this.Uo}/v1/${e}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It="WebChannelConnection";class Qd extends Kd{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,r,s,o){const a=js();return new Promise(((l,h)=>{const d=new tu;d.setWithCredentials(!0),d.listenOnce(eu.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case nr.NO_ERROR:const E=d.getResponseJson();N(It,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(E)),l(E);break;case nr.TIMEOUT:N(It,`RPC '${t}' ${a} timed out`),h(new V(b.DEADLINE_EXCEEDED,"Request time out"));break;case nr.HTTP_ERROR:const k=d.getStatus();if(N(It,`RPC '${t}' ${a} failed with status:`,k,"response text:",d.getResponseText()),k>0){let S=d.getResponseJson();Array.isArray(S)&&(S=S[0]);const x=S?.error;if(x&&x.status&&x.message){const M=(function(G){const H=G.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(H)>=0?H:b.UNKNOWN})(x.status);h(new V(M,x.message))}else h(new V(b.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new V(b.UNAVAILABLE,"Connection failed."));break;default:L(9055,{l_:t,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{N(It,`RPC '${t}' ${a} completed.`)}}));const p=JSON.stringify(s);N(It,`RPC '${t}' ${a} sending request:`,s),d.send(e,"POST",p,r,15)}))}T_(t,e,r){const s=js(),o=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=su(),l=ru(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.jo(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const p=o.join("");N(It,`Creating RPC '${t}' stream ${s}: ${p}`,h);const E=a.createWebChannel(p,h);this.I_(E);let k=!1,S=!1;const x=new Wd({Yo:C=>{S?N(It,`Not sending because RPC '${t}' stream ${s} is closed:`,C):(k||(N(It,`Opening RPC '${t}' stream ${s} transport.`),E.open(),k=!0),N(It,`RPC '${t}' stream ${s} sending:`,C),E.send(C))},Zo:()=>E.close()}),M=(C,G,H)=>{C.listen(G,(Q=>{try{H(Q)}catch(ot){setTimeout((()=>{throw ot}),0)}}))};return M(E,pn.EventType.OPEN,(()=>{S||(N(It,`RPC '${t}' stream ${s} transport opened.`),x.o_())})),M(E,pn.EventType.CLOSE,(()=>{S||(S=!0,N(It,`RPC '${t}' stream ${s} transport closed`),x.a_(),this.E_(E))})),M(E,pn.EventType.ERROR,(C=>{S||(S=!0,Be(It,`RPC '${t}' stream ${s} transport errored. Name:`,C.name,"Message:",C.message),x.a_(new V(b.UNAVAILABLE,"The operation could not be completed")))})),M(E,pn.EventType.MESSAGE,(C=>{if(!S){const G=C.data[0];X(!!G,16349);const H=G,Q=H?.error||H[0]?.error;if(Q){N(It,`RPC '${t}' stream ${s} received error:`,Q);const ot=Q.status;let dt=(function(m){const _=ut[m];if(_!==void 0)return ju(_)})(ot),tt=Q.message;dt===void 0&&(dt=b.INTERNAL,tt="Unknown error status: "+ot+" with message "+Q.message),S=!0,x.a_(new V(dt,tt)),E.close()}else N(It,`RPC '${t}' stream ${s} received:`,G),x.u_(G)}})),M(l,nu.STAT_EVENT,(C=>{C.stat===Ss.PROXY?N(It,`RPC '${t}' stream ${s} detected buffering proxy`):C.stat===Ss.NOPROXY&&N(It,`RPC '${t}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{x.__()}),0),x}terminate(){this.c_.forEach((t=>t.close())),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter((e=>e===t))}}function ps(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xr(n){return new Zf(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(t,e,r=1e3,s=1.5,o=6e4){this.Mi=t,this.timerId=e,this.d_=r,this.A_=s,this.R_=o,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const e=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,e-r);s>0&&N("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),t()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const va="PersistentStream";class ec{constructor(t,e,r,s,o,a,l,h){this.Mi=t,this.S_=r,this.b_=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=h,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new tc(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===b.RESOURCE_EXHAUSTED?(Gt(e.toString()),Gt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(e)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===e&&this.G_(r,s)}),(r=>{t((()=>{const s=new V(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(t,e){const r=this.W_(this.D_);this.stream=this.j_(t,e),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return N(va,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return e=>{this.Mi.enqueueAndForget((()=>this.D_===t?e():(N(va,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Xd extends ec{constructor(t,e,r,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}j_(t,e){return this.connection.T_("Listen",t,e)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=nd(this.serializer,t),r=(function(o){if(!("targetChange"in o))return F.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?F.min():a.readTime?Ut(a.readTime):F.min()})(t);return this.listener.H_(e,r)}Y_(t){const e={};e.database=Fs(this.serializer),e.addTarget=(function(o,a){let l;const h=a.target;if(l=Ns(h)?{documents:id(o,h)}:{query:od(o,h).ft},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=zu(o,a.resumeToken);const d=Ms(o,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(F.min())>0){l.readTime=Tr(o,a.snapshotVersion.toTimestamp());const d=Ms(o,a.expectedCount);d!==null&&(l.expectedCount=d)}return l})(this.serializer,t);const r=ud(this.serializer,t);r&&(e.labels=r),this.q_(e)}Z_(t){const e={};e.database=Fs(this.serializer),e.removeTarget=t,this.q_(e)}}class Yd extends ec{constructor(t,e,r,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}J_(t){return X(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,X(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){X(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=sd(t.writeResults,t.commitTime),r=Ut(t.commitTime);return this.listener.na(r,e)}ra(){const t={};t.database=Fs(this.serializer),this.q_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map((r=>rd(this.serializer,r)))};this.q_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{}class Zd extends Jd{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new V(b.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,e,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.Go(t,Os(e,r),s,o,a))).catch((o=>{throw o.name==="FirebaseError"?(o.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new V(b.UNKNOWN,o.toString())}))}Ho(t,e,r,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,l])=>this.connection.Ho(t,Os(e,r),s,a,l,o))).catch((a=>{throw a.name==="FirebaseError"?(a.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new V(b.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class tm{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Gt(e),this.aa=!1):N("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ve="RemoteStore";class em{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=o,this.Aa.Oo((a=>{r.enqueueAndForget((async()=>{Re(this)&&(N(ve,"Restarting streams for network reachability change."),await(async function(h){const d=U(h);d.Ea.add(4),await On(d),d.Ra.set("Unknown"),d.Ea.delete(4),await Mr(d)})(this))}))})),this.Ra=new tm(r,s)}}async function Mr(n){if(Re(n))for(const t of n.da)await t(!0)}async function On(n){for(const t of n.da)await t(!1)}function nc(n,t){const e=U(n);e.Ia.has(t.targetId)||(e.Ia.set(t.targetId,t),hi(e)?li(e):Je(e).O_()&&ci(e,t))}function ui(n,t){const e=U(n),r=Je(e);e.Ia.delete(t),r.O_()&&rc(e,t),e.Ia.size===0&&(r.O_()?r.L_():Re(e)&&e.Ra.set("Unknown"))}function ci(n,t){if(n.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(F.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Je(n).Y_(t)}function rc(n,t){n.Va.Ue(t),Je(n).Z_(t)}function li(n){n.Va=new Qf({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),At:t=>n.Ia.get(t)||null,ht:()=>n.datastore.serializer.databaseId}),Je(n).start(),n.Ra.ua()}function hi(n){return Re(n)&&!Je(n).x_()&&n.Ia.size>0}function Re(n){return U(n).Ea.size===0}function sc(n){n.Va=void 0}async function nm(n){n.Ra.set("Online")}async function rm(n){n.Ia.forEach(((t,e)=>{ci(n,t)}))}async function sm(n,t){sc(n),hi(n)?(n.Ra.ha(t),li(n)):n.Ra.set("Unknown")}async function im(n,t,e){if(n.Ra.set("Online"),t instanceof qu&&t.state===2&&t.cause)try{await(async function(s,o){const a=o.cause;for(const l of o.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.Ia.delete(l),s.Va.removeTarget(l))})(n,t)}catch(r){N(ve,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Ir(n,r)}else if(t instanceof or?n.Va.Ze(t):t instanceof Bu?n.Va.st(t):n.Va.tt(t),!e.isEqual(F.min()))try{const r=await Zu(n.localStore);e.compareTo(r)>=0&&await(function(o,a){const l=o.Va.Tt(a);return l.targetChanges.forEach(((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const p=o.Ia.get(d);p&&o.Ia.set(d,p.withResumeToken(h.resumeToken,a))}})),l.targetMismatches.forEach(((h,d)=>{const p=o.Ia.get(h);if(!p)return;o.Ia.set(h,p.withResumeToken(Et.EMPTY_BYTE_STRING,p.snapshotVersion)),rc(o,h);const E=new te(p.target,h,d,p.sequenceNumber);ci(o,E)})),o.remoteSyncer.applyRemoteEvent(l)})(n,e)}catch(r){N(ve,"Failed to raise snapshot:",r),await Ir(n,r)}}async function Ir(n,t,e){if(!Xe(t))throw t;n.Ea.add(1),await On(n),n.Ra.set("Offline"),e||(e=()=>Zu(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{N(ve,"Retrying IndexedDB access"),await e(),n.Ea.delete(1),await Mr(n)}))}function ic(n,t){return t().catch((e=>Ir(n,e,t)))}async function Or(n){const t=U(n),e=le(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:Qs;for(;om(t);)try{const s=await Bd(t.localStore,r);if(s===null){t.Ta.length===0&&e.L_();break}r=s.batchId,am(t,s)}catch(s){await Ir(t,s)}oc(t)&&ac(t)}function om(n){return Re(n)&&n.Ta.length<10}function am(n,t){n.Ta.push(t);const e=le(n);e.O_()&&e.X_&&e.ea(t.mutations)}function oc(n){return Re(n)&&!le(n).x_()&&n.Ta.length>0}function ac(n){le(n).start()}async function um(n){le(n).ra()}async function cm(n){const t=le(n);for(const e of n.Ta)t.ea(e.mutations)}async function lm(n,t,e){const r=n.Ta.shift(),s=ei.from(r,t,e);await ic(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await Or(n)}async function hm(n,t){t&&le(n).X_&&await(async function(r,s){if((function(a){return Hf(a)&&a!==b.ABORTED})(s.code)){const o=r.Ta.shift();le(r).B_(),await ic(r,(()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s))),await Or(r)}})(n,t),oc(n)&&ac(n)}async function ka(n,t){const e=U(n);e.asyncQueue.verifyOperationInProgress(),N(ve,"RemoteStore received new credentials");const r=Re(e);e.Ea.add(3),await On(e),r&&e.Ra.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ea.delete(3),await Mr(e)}async function fm(n,t){const e=U(n);t?(e.Ea.delete(2),await Mr(e)):t||(e.Ea.add(2),await On(e),e.Ra.set("Unknown"))}function Je(n){return n.ma||(n.ma=(function(e,r,s){const o=U(e);return o.sa(),new Xd(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)})(n.datastore,n.asyncQueue,{Xo:nm.bind(null,n),t_:rm.bind(null,n),r_:sm.bind(null,n),H_:im.bind(null,n)}),n.da.push((async t=>{t?(n.ma.B_(),hi(n)?li(n):n.Ra.set("Unknown")):(await n.ma.stop(),sc(n))}))),n.ma}function le(n){return n.fa||(n.fa=(function(e,r,s){const o=U(e);return o.sa(),new Yd(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:um.bind(null,n),r_:hm.bind(null,n),ta:cm.bind(null,n),na:lm.bind(null,n)}),n.da.push((async t=>{t?(n.fa.B_(),await Or(n)):(await n.fa.stop(),n.Ta.length>0&&(N(ve,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new se,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const a=Date.now()+r,l=new fi(t,e,a,s,o);return l.start(r),l}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(b.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function di(n,t){if(Gt("AsyncQueue",`${t}: ${n}`),Xe(n))return new V(b.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{static emptySet(t){return new Le(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||O.comparator(e.key,r.key):(e,r)=>O.comparator(e.key,r.key),this.keyedMap=_n(),this.sortedSet=new rt(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,r)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Le)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Le;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(){this.ga=new rt(O.comparator)}track(t){const e=t.doc.key,r=this.ga.get(e);r?t.type!==0&&r.type===3?this.ga=this.ga.insert(e,t):t.type===3&&r.type!==1?this.ga=this.ga.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.ga=this.ga.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.ga=this.ga.remove(e):t.type===1&&r.type===2?this.ga=this.ga.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):L(63341,{Rt:t,pa:r}):this.ga=this.ga.insert(e,t)}ya(){const t=[];return this.ga.inorderTraversal(((e,r)=>{t.push(r)})),t}}class He{constructor(t,e,r,s,o,a,l,h,d){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(t,e,r,s,o){const a=[];return e.forEach((l=>{a.push({type:0,doc:l})})),new He(t,e,Le.emptySet(e),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Pr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((t=>t.Da()))}}class mm{constructor(){this.queries=ba(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,r){const s=U(e),o=s.queries;s.queries=ba(),o.forEach(((a,l)=>{for(const h of l.Sa)h.onError(r)}))})(this,new V(b.ABORTED,"Firestore shutting down"))}}function ba(){return new Ae((n=>Ru(n)),Pr)}async function gm(n,t){const e=U(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.ba()&&t.Da()&&(r=2):(o=new dm,r=t.Da()?0:1);try{switch(r){case 0:o.wa=await e.onListen(s,!0);break;case 1:o.wa=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const l=di(a,`Initialization of query '${Ne(t.query)}' failed`);return void t.onError(l)}e.queries.set(s,o),o.Sa.push(t),t.va(e.onlineState),o.wa&&t.Fa(o.wa)&&mi(e)}async function pm(n,t){const e=U(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const a=o.Sa.indexOf(t);a>=0&&(o.Sa.splice(a,1),o.Sa.length===0?s=t.Da()?0:1:!o.ba()&&t.Da()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function _m(n,t){const e=U(n);let r=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const l of a.Sa)l.Fa(s)&&(r=!0);a.wa=s}}r&&mi(e)}function ym(n,t,e){const r=U(n),s=r.queries.get(t);if(s)for(const o of s.Sa)o.onError(e);r.queries.delete(t)}function mi(n){n.Ca.forEach((t=>{t.next()}))}var Bs,Ra;(Ra=Bs||(Bs={})).Ma="default",Ra.Cache="cache";class Em{constructor(t,e,r){this.query=t,this.xa=e,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new He(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),e=!0):this.La(t,this.onlineState)&&(this.ka(t),e=!0),this.Na=t,e}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let e=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),e=!0),e}La(t,e){if(!t.fromCache||!this.Da())return!0;const r=e!=="Offline";return(!this.options.qa||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const e=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}ka(t){t=He.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==Bs.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(t){this.key=t}}class cc{constructor(t){this.key=t}}class Tm{constructor(t,e){this.query=t,this.Ya=e,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=$(),this.mutatedKeys=$(),this.eu=Su(t),this.tu=new Le(this.eu)}get nu(){return this.Ya}ru(t,e){const r=e?e.iu:new Aa,s=e?e.tu:this.tu;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,l=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((p,E)=>{const k=s.get(p),S=Cr(this.query,E)?E:null,x=!!k&&this.mutatedKeys.has(k.key),M=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let C=!1;k&&S?k.data.isEqual(S.data)?x!==M&&(r.track({type:3,doc:S}),C=!0):this.su(k,S)||(r.track({type:2,doc:S}),C=!0,(h&&this.eu(S,h)>0||d&&this.eu(S,d)<0)&&(l=!0)):!k&&S?(r.track({type:0,doc:S}),C=!0):k&&!S&&(r.track({type:1,doc:k}),C=!0,(h||d)&&(l=!0)),C&&(S?(a=a.add(S),o=M?o.add(p):o.delete(p)):(a=a.delete(p),o=o.delete(p)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),o=o.delete(p.key),r.track({type:1,doc:p})}return{tu:a,iu:r,Cs:l,mutatedKeys:o}}su(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const a=t.iu.ya();a.sort(((p,E)=>(function(S,x){const M=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return L(20277,{Rt:C})}};return M(S)-M(x)})(p.type,E.type)||this.eu(p.doc,E.doc))),this.ou(r),s=s??!1;const l=e&&!s?this._u():[],h=this.Xa.size===0&&this.current&&!s?1:0,d=h!==this.Za;return this.Za=h,a.length!==0||d?{snapshot:new He(this.query,t.tu,o,a,t.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Aa,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach((e=>this.Ya=this.Ya.add(e))),t.modifiedDocuments.forEach((e=>{})),t.removedDocuments.forEach((e=>this.Ya=this.Ya.delete(e))),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=$(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const e=[];return t.forEach((r=>{this.Xa.has(r)||e.push(new cc(r))})),this.Xa.forEach((r=>{t.has(r)||e.push(new uc(r))})),e}cu(t){this.Ya=t.Qs,this.Xa=$();const e=this.ru(t.documents);return this.applyChanges(e,!0)}lu(){return He.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const gi="SyncEngine";class wm{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class Im{constructor(t){this.key=t,this.hu=!1}}class vm{constructor(t,e,r,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new Ae((l=>Ru(l)),Pr),this.Iu=new Map,this.Eu=new Set,this.du=new rt(O.comparator),this.Au=new Map,this.Ru=new si,this.Vu={},this.mu=new Map,this.fu=Ge.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function km(n,t,e=!0){const r=gc(n);let s;const o=r.Tu.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.lu()):s=await lc(r,t,e,!0),s}async function Am(n,t){const e=gc(n);await lc(e,t,!0,!1)}async function lc(n,t,e,r){const s=await qd(n.localStore,Ft(t)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let l;return r&&(l=await bm(n,t,o,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&nc(n.remoteStore,s),l}async function bm(n,t,e,r,s){n.pu=(E,k,S)=>(async function(M,C,G,H){let Q=C.view.ru(G);Q.Cs&&(Q=await Ea(M.localStore,C.query,!1).then((({documents:T})=>C.view.ru(T,Q))));const ot=H&&H.targetChanges.get(C.targetId),dt=H&&H.targetMismatches.get(C.targetId)!=null,tt=C.view.applyChanges(Q,M.isPrimaryClient,ot,dt);return Pa(M,C.targetId,tt.au),tt.snapshot})(n,E,k,S);const o=await Ea(n.localStore,t,!0),a=new Tm(t,o.Qs),l=a.ru(o.documents),h=Mn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),d=a.applyChanges(l,n.isPrimaryClient,h);Pa(n,e,d.au);const p=new wm(t,e,a);return n.Tu.set(t,p),n.Iu.has(e)?n.Iu.get(e).push(t):n.Iu.set(e,[t]),d.snapshot}async function Rm(n,t,e){const r=U(n),s=r.Tu.get(t),o=r.Iu.get(s.targetId);if(o.length>1)return r.Iu.set(s.targetId,o.filter((a=>!Pr(a,t)))),void r.Tu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Us(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),e&&ui(r.remoteStore,s.targetId),qs(r,s.targetId)})).catch(Qe)):(qs(r,s.targetId),await Us(r.localStore,s.targetId,!0))}async function Sm(n,t){const e=U(n),r=e.Tu.get(t),s=e.Iu.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),ui(e.remoteStore,r.targetId))}async function Pm(n,t,e){const r=Om(n);try{const s=await(function(a,l){const h=U(a),d=nt.now(),p=l.reduce(((S,x)=>S.add(x.key)),$());let E,k;return h.persistence.runTransaction("Locally write mutations","readwrite",(S=>{let x=Ht(),M=$();return h.Ns.getEntries(S,p).next((C=>{x=C,x.forEach(((G,H)=>{H.isValidDocument()||(M=M.add(G))}))})).next((()=>h.localDocuments.getOverlayedDocuments(S,x))).next((C=>{E=C;const G=[];for(const H of l){const Q=Bf(H,E.get(H.key).overlayedDocument);Q!=null&&G.push(new be(H.key,Q,yu(Q.value.mapValue),zt.exists(!0)))}return h.mutationQueue.addMutationBatch(S,d,G,l)})).next((C=>{k=C;const G=C.applyToLocalDocumentSet(E,M);return h.documentOverlayCache.saveOverlays(S,C.batchId,G)}))})).then((()=>({batchId:k.batchId,changes:Cu(E)})))})(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),(function(a,l,h){let d=a.Vu[a.currentUser.toKey()];d||(d=new rt(z)),d=d.insert(l,h),a.Vu[a.currentUser.toKey()]=d})(r,s.batchId,e),await Ln(r,s.changes),await Or(r.remoteStore)}catch(s){const o=di(s,"Failed to persist write");e.reject(o)}}async function hc(n,t){const e=U(n);try{const r=await Ud(e.localStore,t);t.targetChanges.forEach(((s,o)=>{const a=e.Au.get(o);a&&(X(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?X(a.hu,14607):s.removedDocuments.size>0&&(X(a.hu,42227),a.hu=!1))})),await Ln(e,r,t)}catch(r){await Qe(r)}}function Sa(n,t,e){const r=U(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.Tu.forEach(((o,a)=>{const l=a.view.va(t);l.snapshot&&s.push(l.snapshot)})),(function(a,l){const h=U(a);h.onlineState=l;let d=!1;h.queries.forEach(((p,E)=>{for(const k of E.Sa)k.va(l)&&(d=!0)})),d&&mi(h)})(r.eventManager,t),s.length&&r.Pu.H_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Cm(n,t,e){const r=U(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Au.get(t),o=s&&s.key;if(o){let a=new rt(O.comparator);a=a.insert(o,kt.newNoDocument(o,F.min()));const l=$().add(o),h=new Nr(F.min(),new Map,new rt(z),a,l);await hc(r,h),r.du=r.du.remove(o),r.Au.delete(t),pi(r)}else await Us(r.localStore,t,!1).then((()=>qs(r,t,e))).catch(Qe)}async function Vm(n,t){const e=U(n),r=t.batch.batchId;try{const s=await Fd(e.localStore,t);dc(e,r,null),fc(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Ln(e,s)}catch(s){await Qe(s)}}async function Dm(n,t,e){const r=U(n);try{const s=await(function(a,l){const h=U(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",(d=>{let p;return h.mutationQueue.lookupMutationBatch(d,l).next((E=>(X(E!==null,37113),p=E.keys(),h.mutationQueue.removeMutationBatch(d,E)))).next((()=>h.mutationQueue.performConsistencyCheck(d))).next((()=>h.documentOverlayCache.removeOverlaysForBatchId(d,p,l))).next((()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p))).next((()=>h.localDocuments.getDocuments(d,p)))}))})(r.localStore,t);dc(r,t,e),fc(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Ln(r,s)}catch(s){await Qe(s)}}function fc(n,t){(n.mu.get(t)||[]).forEach((e=>{e.resolve()})),n.mu.delete(t)}function dc(n,t,e){const r=U(n);let s=r.Vu[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.Vu[r.currentUser.toKey()]=s}}function qs(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Iu.get(t))n.Tu.delete(r),e&&n.Pu.yu(r,e);n.Iu.delete(t),n.isPrimaryClient&&n.Ru.jr(t).forEach((r=>{n.Ru.containsKey(r)||mc(n,r)}))}function mc(n,t){n.Eu.delete(t.path.canonicalString());const e=n.du.get(t);e!==null&&(ui(n.remoteStore,e),n.du=n.du.remove(t),n.Au.delete(e),pi(n))}function Pa(n,t,e){for(const r of e)r instanceof uc?(n.Ru.addReference(r.key,t),Nm(n,r)):r instanceof cc?(N(gi,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,t),n.Ru.containsKey(r.key)||mc(n,r.key)):L(19791,{wu:r})}function Nm(n,t){const e=t.key,r=e.path.canonicalString();n.du.get(e)||n.Eu.has(r)||(N(gi,"New document in limbo: "+e),n.Eu.add(r),pi(n))}function pi(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const t=n.Eu.values().next().value;n.Eu.delete(t);const e=new O(Z.fromString(t)),r=n.fu.next();n.Au.set(r,new Im(e)),n.du=n.du.insert(e,r),nc(n.remoteStore,new te(Ft(Au(e.path)),r,"TargetPurposeLimboResolution",br.ce))}}async function Ln(n,t,e){const r=U(n),s=[],o=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach(((l,h)=>{a.push(r.pu(h,t,e).then((d=>{if((d||e)&&r.isPrimaryClient){const p=d?!d.fromCache:e?.targetChanges.get(h.targetId)?.current;r.sharedClientState.updateQueryState(h.targetId,p?"current":"not-current")}if(d){s.push(d);const p=oi.As(h.targetId,d);o.push(p)}})))})),await Promise.all(a),r.Pu.H_(s),await(async function(h,d){const p=U(h);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",(E=>R.forEach(d,(k=>R.forEach(k.Es,(S=>p.persistence.referenceDelegate.addReference(E,k.targetId,S))).next((()=>R.forEach(k.ds,(S=>p.persistence.referenceDelegate.removeReference(E,k.targetId,S)))))))))}catch(E){if(!Xe(E))throw E;N(ai,"Failed to update sequence numbers: "+E)}for(const E of d){const k=E.targetId;if(!E.fromCache){const S=p.Ms.get(k),x=S.snapshotVersion,M=S.withLastLimboFreeSnapshotVersion(x);p.Ms=p.Ms.insert(k,M)}}})(r.localStore,o))}async function xm(n,t){const e=U(n);if(!e.currentUser.isEqual(t)){N(gi,"User change. New user:",t.toKey());const r=await Ju(e.localStore,t);e.currentUser=t,(function(o,a){o.mu.forEach((l=>{l.forEach((h=>{h.reject(new V(b.CANCELLED,a))}))})),o.mu.clear()})(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Ln(e,r.Ls)}}function Mm(n,t){const e=U(n),r=e.Au.get(t);if(r&&r.hu)return $().add(r.key);{let s=$();const o=e.Iu.get(t);if(!o)return s;for(const a of o){const l=e.Tu.get(a);s=s.unionWith(l.view.nu)}return s}}function gc(n){const t=U(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=hc.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Mm.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Cm.bind(null,t),t.Pu.H_=_m.bind(null,t.eventManager),t.Pu.yu=ym.bind(null,t.eventManager),t}function Om(n){const t=U(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Vm.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Dm.bind(null,t),t}class vr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=xr(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return Ld(this.persistence,new xd,t.initialUser,this.serializer)}Cu(t){return new Yu(ii.mi,this.serializer)}Du(t){return new $d}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}vr.provider={build:()=>new vr};class Lm extends vr{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){X(this.persistence.referenceDelegate instanceof wr,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Ed(r,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?Rt.withCacheSize(this.cacheSizeBytes):Rt.DEFAULT;return new Yu((r=>wr.mi(r,e)),this.serializer)}}class zs{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Sa(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=xm.bind(null,this.syncEngine),await fm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new mm})()}createDatastore(t){const e=xr(t.databaseInfo.databaseId),r=(function(o){return new Qd(o)})(t.databaseInfo);return(function(o,a,l,h){return new Zd(o,a,l,h)})(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return(function(r,s,o,a,l){return new em(r,s,o,a,l)})(this.localStore,this.datastore,t.asyncQueue,(e=>Sa(this.syncEngine,e,0)),(function(){return Ia.v()?new Ia:new Gd})())}createSyncEngine(t,e){return(function(s,o,a,l,h,d,p){const E=new vm(s,o,a,l,h,d);return p&&(E.gu=!0),E})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){await(async function(e){const r=U(e);N(ve,"RemoteStore shutting down."),r.Ea.add(5),await On(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}zs.provider={build:()=>new zs};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):Gt("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,e){setTimeout((()=>{this.muted||t(e)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const he="FirestoreClient";class Um{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=vt.UNAUTHENTICATED,this.clientId=Ws.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,(async a=>{N(he,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(N(he,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new se;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=di(e,"Failed to shutdown persistence");t.reject(r)}})),t.promise}}async function _s(n,t){n.asyncQueue.verifyOperationInProgress(),N(he,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await Ju(t.localStore,s),r=s)})),t.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=t}async function Ca(n,t){n.asyncQueue.verifyOperationInProgress();const e=await jm(n);N(he,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener((r=>ka(t.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>ka(t.remoteStore,s))),n._onlineComponents=t}async function jm(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){N(he,"Using user provided OfflineComponentProvider");try{await _s(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!(function(s){return s.name==="FirebaseError"?s.code===b.FAILED_PRECONDITION||s.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(e))throw e;Be("Error using user provided cache. Falling back to memory cache: "+e),await _s(n,new vr)}}else N(he,"Using default OfflineComponentProvider"),await _s(n,new Lm(void 0));return n._offlineComponents}async function pc(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(N(he,"Using user provided OnlineComponentProvider"),await Ca(n,n._uninitializedComponentsProvider._online)):(N(he,"Using default OnlineComponentProvider"),await Ca(n,new zs))),n._onlineComponents}function Bm(n){return pc(n).then((t=>t.syncEngine))}async function qm(n){const t=await pc(n),e=t.eventManager;return e.onListen=km.bind(null,t.syncEngine),e.onUnlisten=Rm.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Am.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Sm.bind(null,t.syncEngine),e}function zm(n,t,e={}){const r=new se;return n.asyncQueue.enqueueAndForget((async()=>(function(o,a,l,h,d){const p=new Fm({next:k=>{p.Nu(),a.enqueueAndForget((()=>pm(o,E))),k.fromCache&&h.source==="server"?d.reject(new V(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(k)},error:k=>d.reject(k)}),E=new Em(l,p,{includeMetadataChanges:!0,qa:!0});return gm(o,E)})(await qm(n),n.asyncQueue,t,e,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _c(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Va=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yc="firestore.googleapis.com",Da=!0;class Na{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new V(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=yc,this.ssl=Da}else this.host=t.host,this.ssl=t.ssl??Da;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Xu;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<_d)throw new V(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}tf("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=_c(t.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new V(b.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new V(b.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new V(b.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Lr{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Na({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new V(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new V(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Na(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new $h;switch(r.type){case"firstParty":return new Wh(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new V(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const r=Va.get(e);r&&(N("ComponentProvider","Removing Datastore"),Va.delete(e),r.terminate())})(this),Promise.resolve()}}function $m(n,t,e,r={}){n=fr(n,Lr);const s=Gs(t),o=n._getSettings(),a={...o,emulatorOptions:n._getEmulatorOptions()},l=`${t}:${e}`;s&&(yl(`https://${l}`),Il("Firestore",!0)),o.host!==yc&&o.host!==l&&Be("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...o,host:l,ssl:s,emulatorOptions:r};if(!cr(h,a)&&(n._setSettings(h),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=vt.MOCK_USER;else{d=El(r.mockUserToken,n._app?.options.projectId);const E=r.mockUserToken.sub||r.mockUserToken.user_id;if(!E)throw new V(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new vt(E)}n._authCredentials=new Gh(new ou(d,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new fe(this.firestore,t,this._query)}}class pt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ie(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new pt(this.firestore,t,this._key)}toJSON(){return{type:pt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(Nn(e,pt._jsonSchema))return new pt(t,r||null,new O(Z.fromString(e.referencePath)))}}pt._jsonSchemaVersion="firestore/documentReference/1.0",pt._jsonSchema={type:lt("string",pt._jsonSchemaVersion),referencePath:lt("string")};class ie extends fe{constructor(t,e,r){super(t,e,Au(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new pt(this.firestore,null,new O(t))}withConverter(t){return new ie(this.firestore,t,this._path)}}function Ig(n,t,...e){if(n=je(n),au("collection","path",t),n instanceof Lr){const r=Z.fromString(t,...e);return Ho(r),new ie(n,null,r)}{if(!(n instanceof pt||n instanceof ie))throw new V(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Z.fromString(t,...e));return Ho(r),new ie(n.firestore,null,r)}}function Gm(n,t,...e){if(n=je(n),arguments.length===1&&(t=Ws.newId()),au("doc","path",t),n instanceof Lr){const r=Z.fromString(t,...e);return Go(r),new pt(n,null,new O(r))}{if(!(n instanceof pt||n instanceof ie))throw new V(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Z.fromString(t,...e));return Go(r),new pt(n.firestore,n instanceof ie?n.converter:null,new O(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xa="AsyncQueue";class Ma{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new tc(this,"async_queue_retry"),this._c=()=>{const r=ps();r&&N(xa,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=t;const e=ps();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=ps();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const e=new se;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Xu.push(t),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!Xe(t))throw t;N(xa,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const e=this.ac.then((()=>(this.rc=!0,t().catch((r=>{throw this.nc=r,this.rc=!1,Gt("INTERNAL UNHANDLED ERROR: ",Oa(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=e,e}enqueueAfterDelay(t,e,r){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const s=fi.createAndSchedule(this,t,e,r,(o=>this.hc(o)));return this.tc.push(s),s}uc(){this.nc&&L(47125,{Pc:Oa(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((e,r)=>e.targetTimeMs-r.targetTimeMs));for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()}))}dc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function Oa(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class _i extends Lr{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new Ma,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Ma(t),this._firestoreClient=void 0,await t}}}function vg(n,t){const e=typeof n=="object"?n:Nh(),r=typeof n=="string"?n:mr,s=Rh(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=pl("firestore");o&&$m(s,...o)}return s}function Ec(n){if(n._terminated)throw new V(b.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Hm(n),n._firestoreClient}function Hm(n){const t=n._freezeSettings(),e=(function(s,o,a,l){return new ff(s,o,a,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,_c(l.experimentalLongPollingOptions),l.useFetchStreams,l.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,t);n._componentsProvider||t.localCache?._offlineComponentProvider&&t.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),n._firestoreClient=new Um(n._authCredentials,n._appCheckCredentials,n._queue,e,n._componentsProvider&&(function(s){const o=s?._online.build();return{_offline:s?._offline.build(o),_online:o}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Vt(Et.fromBase64String(t))}catch(e){throw new V(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Vt(Et.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Vt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Nn(t,Vt._jsonSchema))return Vt.fromBase64String(t.bytes)}}Vt._jsonSchemaVersion="firestore/bytes/1.0",Vt._jsonSchema={type:lt("string",Vt._jsonSchemaVersion),bytes:lt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new V(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new yt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new V(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new V(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return z(this._lat,t._lat)||z(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:jt._jsonSchemaVersion}}static fromJSON(t){if(Nn(t,jt._jsonSchema))return new jt(t.latitude,t.longitude)}}jt._jsonSchemaVersion="firestore/geoPoint/1.0",jt._jsonSchema={type:lt("string",jt._jsonSchemaVersion),latitude:lt("number"),longitude:lt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0})(this._values,t._values)}toJSON(){return{type:Bt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Nn(t,Bt._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new Bt(t.vectorValues);throw new V(b.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Bt._jsonSchemaVersion="firestore/vectorValue/1.0",Bt._jsonSchema={type:lt("string",Bt._jsonSchemaVersion),vectorValues:lt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Km=/^__.*__$/;class Wm{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new be(t,this.data,this.fieldMask,e,this.fieldTransforms):new xn(t,this.data,e,this.fieldTransforms)}}function wc(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw L(40011,{Ac:n})}}class Ei{constructor(t,e,r,s,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.Rc(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new Ei({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){const e=this.path?.child(t),r=this.Vc({path:e,fc:!1});return r.gc(t),r}yc(t){const e=this.path?.child(t),r=this.Vc({path:e,fc:!1});return r.Rc(),r}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return kr(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find((e=>t.isPrefixOf(e)))!==void 0||this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(wc(this.Ac)&&Km.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class Qm{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||xr(t)}Cc(t,e,r,s=!1){return new Ei({Ac:t,methodName:e,Dc:r,path:yt.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ic(n){const t=n._freezeSettings(),e=xr(n._databaseId);return new Qm(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Xm(n,t,e,r,s,o={}){const a=n.Cc(o.merge||o.mergeFields?2:0,t,e,s);Ac("Data must be an object, but it was:",a,r);const l=vc(r,a);let h,d;if(o.merge)h=new Nt(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const p=[];for(const E of o.mergeFields){const k=Jm(t,E,e);if(!a.contains(k))throw new V(b.INVALID_ARGUMENT,`Field '${k}' is specified in your field mask but missing from your input data.`);tg(p,k)||p.push(k)}h=new Nt(p),d=a.fieldTransforms.filter((E=>h.covers(E.field)))}else h=null,d=a.fieldTransforms;return new Wm(new Ct(l),h,d)}function Ym(n,t,e,r=!1){return Ti(e,n.Cc(r?4:3,t))}function Ti(n,t){if(kc(n=je(n)))return Ac("Unsupported field value:",t,n),vc(n,t);if(n instanceof Tc)return(function(r,s){if(!wc(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)})(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return(function(r,s){const o=[];let a=0;for(const l of r){let h=Ti(l,s.wc(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}})(n,t)}return(function(r,s){if((r=je(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Mf(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=nt.fromDate(r);return{timestampValue:Tr(s.serializer,o)}}if(r instanceof nt){const o=new nt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Tr(s.serializer,o)}}if(r instanceof jt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Vt)return{bytesValue:zu(s.serializer,r._byteString)};if(r instanceof pt){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:ri(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Bt)return(function(a,l){return{mapValue:{fields:{[pu]:{stringValue:_u},[gr]:{arrayValue:{values:a.toArray().map((d=>{if(typeof d!="number")throw l.Sc("VectorValues must only contain numeric values.");return ti(l.serializer,d)}))}}}}}})(r,s);throw s.Sc(`Unsupported field value: ${Ar(r)}`)})(n,t)}function vc(n,t){const e={};return lu(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ke(n,((r,s)=>{const o=Ti(s,t.mc(r));o!=null&&(e[r]=o)})),{mapValue:{fields:e}}}function kc(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof nt||n instanceof jt||n instanceof Vt||n instanceof pt||n instanceof Tc||n instanceof Bt)}function Ac(n,t,e){if(!kc(e)||!uu(e)){const r=Ar(e);throw r==="an object"?t.Sc(n+" a custom object"):t.Sc(n+" "+r)}}function Jm(n,t,e){if((t=je(t))instanceof yi)return t._internalPath;if(typeof t=="string")return bc(n,t);throw kr("Field path arguments must be of type string or ",n,!1,void 0,e)}const Zm=new RegExp("[~\\*/\\[\\]]");function bc(n,t,e){if(t.search(Zm)>=0)throw kr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new yi(...t.split("."))._internalPath}catch{throw kr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function kr(n,t,e,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${t}() called with invalid data`;e&&(l+=" (via `toFirestore()`)"),l+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new V(b.INVALID_ARGUMENT,l+n+h)}function tg(n,t){return n.some((e=>e.isEqual(t)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new pt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new eg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(wi("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class eg extends Rc{data(){return super.data()}}function wi(n,t){return typeof t=="string"?bc(n,t):t instanceof yi?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ng(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new V(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ii{}class vi extends Ii{}function kg(n,t,...e){let r=[];t instanceof Ii&&r.push(t),r=r.concat(e),(function(o){const a=o.filter((h=>h instanceof Ai)).length,l=o.filter((h=>h instanceof ki)).length;if(a>1||a>0&&l>0)throw new V(b.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class ki extends vi{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new ki(t,e,r)}_apply(t){const e=this._parse(t);return Sc(t._query,e),new fe(t.firestore,t.converter,xs(t._query,e))}_parse(t){const e=Ic(t.firestore);return(function(o,a,l,h,d,p,E){let k;if(d.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new V(b.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){Fa(E,p);const x=[];for(const M of E)x.push(La(h,o,M));k={arrayValue:{values:x}}}else k=La(h,o,E)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||Fa(E,p),k=Ym(l,a,E,p==="in"||p==="not-in");return ct.create(d,p,k)})(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}class Ai extends Ii{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Ai(t,e)}_parse(t){const e=this._queryConstraints.map((r=>r._parse(t))).filter((r=>r.getFilters().length>0));return e.length===1?e[0]:xt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:((function(s,o){let a=s;const l=o.getFlattenedFilters();for(const h of l)Sc(a,h),a=xs(a,h)})(t._query,e),new fe(t.firestore,t.converter,xs(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class bi extends vi{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new bi(t,e)}_apply(t){const e=(function(s,o,a){if(s.startAt!==null)throw new V(b.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new V(b.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Cn(o,a)})(t._query,this._field,this._direction);return new fe(t.firestore,t.converter,(function(s,o){const a=s.explicitOrderBy.concat([o]);return new Ye(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(t._query,e))}}function Ag(n,t="asc"){const e=t,r=wi("orderBy",n);return bi._create(r,e)}class Ri extends vi{constructor(t,e,r){super(),this.type=t,this._limit=e,this._limitType=r}static _create(t,e,r){return new Ri(t,e,r)}_apply(t){return new fe(t.firestore,t.converter,_r(t._query,this._limit,this._limitType))}}function bg(n){return Ri._create("limit",n,"F")}function La(n,t,e){if(typeof(e=je(e))=="string"){if(e==="")throw new V(b.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!bu(t)&&e.indexOf("/")!==-1)throw new V(b.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(Z.fromString(e));if(!O.isDocumentKey(r))throw new V(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ta(n,new O(r))}if(e instanceof pt)return ta(n,e._key);throw new V(b.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ar(e)}.`)}function Fa(n,t){if(!Array.isArray(n)||n.length===0)throw new V(b.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Sc(n,t){const e=(function(s,o){for(const a of s)for(const l of a.getFlattenedFilters())if(o.indexOf(l.op)>=0)return l.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(t.op));if(e!==null)throw e===t.op?new V(b.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new V(b.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class rg{convertValue(t,e="none"){switch(ce(t)){case 0:return null;case 1:return t.booleanValue;case 2:return it(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ue(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw L(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return ke(t,((s,o)=>{r[s]=this.convertValue(o,e)})),r}convertVectorValue(t){const e=t.fields?.[gr].arrayValue?.values?.map((r=>it(r.doubleValue)));return new Bt(e)}convertGeoPoint(t){return new jt(it(t.latitude),it(t.longitude))}convertArray(t,e){return(t.values||[]).map((r=>this.convertValue(r,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Sr(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(Rn(t));default:return null}}convertTimestamp(t){const e=ae(t);return new nt(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=Z.fromString(t);X(Qu(r),9688,{name:t});const s=new Sn(r.get(1),r.get(3)),o=new O(r.popFirst(5));return s.isEqual(e)||Gt(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sg(n,t,e){let r;return r=n?n.toFirestore(t):t,r}class er{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Fe extends Rc{constructor(t,e,r,s,o,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new ar(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(wi("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new V(b.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=Fe._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}Fe._jsonSchemaVersion="firestore/documentSnapshot/1.0",Fe._jsonSchema={type:lt("string",Fe._jsonSchemaVersion),bundleSource:lt("string","DocumentSnapshot"),bundleName:lt("string"),bundle:lt("string")};class ar extends Fe{data(t={}){return super.data(t)}}class Ue{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new er(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach((r=>{t.call(e,new ar(this._firestore,this._userDataWriter,r.key,r,new er(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new V(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=(function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((l=>{const h=new ar(s._firestore,s._userDataWriter,l.doc.key,l.doc,new er(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((l=>o||l.type!==3)).map((l=>{const h=new ar(s._firestore,s._userDataWriter,l.doc.key,l.doc,new er(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,p=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),p=a.indexOf(l.doc.key)),{type:ig(l.type),doc:h,oldIndex:d,newIndex:p}}))}})(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new V(b.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Ue._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Ws.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],s=[];return this.docs.forEach((o=>{o._document!==null&&(e.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),s.push(o.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function ig(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return L(61501,{type:n})}}Ue._jsonSchemaVersion="firestore/querySnapshot/1.0",Ue._jsonSchema={type:lt("string",Ue._jsonSchemaVersion),bundleSource:lt("string","QuerySnapshot"),bundleName:lt("string"),bundle:lt("string")};class og extends rg{constructor(t){super(),this.firestore=t}convertBytes(t){return new Vt(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new pt(this.firestore,null,e)}}function Rg(n){n=fr(n,fe);const t=fr(n.firestore,_i),e=Ec(t),r=new og(t);return ng(n._query),zm(e,n._query).then((s=>new Ue(t,r,n,s)))}function Sg(n,t){const e=fr(n.firestore,_i),r=Gm(n),s=sg(n.converter,t);return ag(e,[Xm(Ic(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,zt.exists(!1))]).then((()=>r))}function ag(n,t){return(function(r,s){const o=new se;return r.asyncQueue.enqueueAndForget((async()=>Pm(await Bm(r),s,o))),o.promise})(Ec(n),t)}(function(t,e=!0){(function(s){We=s})(Vh),hr(new kn("firestore",((r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),l=new _i(new Hh(r.getProvider("auth-internal")),new Qh(a,r.getProvider("app-check-internal")),(function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new V(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Sn(d.options.projectId,p)})(a,s),a);return o={useFetchStreams:e,...o},l._setSettings(o),l}),"PUBLIC").setMultipleInstances(!0)),Oe(Bo,qo,t),Oe(Bo,qo,"esm2020")})();var ug="firebase",cg="12.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Oe(ug,cg,"app");const lg=["ahole","anus","ash0le","ash0les","asholes","ass","Ass Monkey","Assface","assh0le","assh0lez","asshole","assholes","assholz","asswipe","azzhole","bassterds","bastard","bastards","bastardz","basterds","basterdz","Biatch","bitch","bitches","Blow Job","boffing","butthole","buttwipe","c0ck","c0cks","c0k","Carpet Muncher","cawk","cawks","Clit","cnts","cntz","cock","cockhead","cock-head","cocks","CockSucker","cock-sucker","crap","cum","cunt","cunts","cuntz","dick","dild0","dild0s","dildo","dildos","dilld0","dilld0s","dominatricks","dominatrics","dominatrix","dyke","enema","f u c k","f u c k e r","fag","fag1t","faget","fagg1t","faggit","faggot","fagg0t","fagit","fags","fagz","faig","faigs","fart","flipping the bird","fuck","fucker","fuckin","fucking","fucks","Fudge Packer","fuk","Fukah","Fuken","fuker","Fukin","Fukk","Fukkah","Fukken","Fukker","Fukkin","g00k","God-damned","h00r","h0ar","h0re","hells","hoar","hoor","hoore","jackoff","jap","japs","jerk-off","jisim","jiss","jizm","jizz","knob","knobs","knobz","kunt","kunts","kuntz","Lezzian","Lipshits","Lipshitz","masochist","masokist","massterbait","masstrbait","masstrbate","masterbaiter","masterbate","masterbates","Motha Fucker","Motha Fuker","Motha Fukkah","Motha Fukker","Mother Fucker","Mother Fukah","Mother Fuker","Mother Fukkah","Mother Fukker","mother-fucker","Mutha Fucker","Mutha Fukah","Mutha Fuker","Mutha Fukkah","Mutha Fukker","n1gr","nastt","nigger;","nigur;","niiger;","niigr;","orafis","orgasim;","orgasm","orgasum","oriface","orifice","orifiss","packi","packie","packy","paki","pakie","paky","pecker","peeenus","peeenusss","peenus","peinus","pen1s","penas","penis","penis-breath","penus","penuus","Phuc","Phuck","Phuk","Phuker","Phukker","polac","polack","polak","Poonani","pr1c","pr1ck","pr1k","pusse","pussee","pussy","puuke","puuker","qweir","recktum","rectum","retard","sadist","scank","schlong","screwing","semen","sex","sexy","Sh!t","sh1t","sh1ter","sh1ts","sh1tter","sh1tz","shit","shits","shitter","Shitty","Shity","shitz","Shyt","Shyte","Shytty","Shyty","skanck","skank","skankee","skankey","skanks","Skanky","slag","slut","sluts","Slutty","slutz","son-of-a-bitch","tit","turd","va1jina","vag1na","vagiina","vagina","vaj1na","vajina","vullva","vulva","w0p","wh00r","wh0re","whore","xrated","xxx","b!+ch","bitch","blowjob","clit","arschloch","fuck","shit","ass","asshole","b!tch","b17ch","b1tch","bastard","bi+ch","boiolas","buceta","c0ck","cawk","chink","cipa","clits","cock","cum","cunt","dildo","dirsa","ejakulate","fatass","fcuk","fuk","fux0r","hoer","hore","jism","kawk","l3itch","l3i+ch","masturbate","masterbat*","masterbat3","motherfucker","s.o.b.","mofo","nazi","nigga","nigger","nutsack","phuck","pimpis","pusse","pussy","scrotum","sh!t","shemale","shi+","sh!+","slut","smut","teets","tits","boobs","b00bs","teez","testical","testicle","titt","w00se","jackoff","wank","whoar","whore","*damn","*dyke","*fuck*","*shit*","@$$","amcik","andskota","arse*","assrammer","ayir","bi7ch","bitch*","bollock*","breasts","butt-pirate","cabron","cazzo","chraa","chuj","Cock*","cunt*","d4mn","daygo","dego","dick*","dike*","dupa","dziwka","ejackulate","Ekrem*","Ekto","enculer","faen","fag*","fanculo","fanny","feces","feg","Felcher","ficken","fitt*","Flikker","foreskin","Fotze","Fu(*","fuk*","futkretzn","gook","guiena","h0r","h4x0r","hell","helvete","hoer*","honkey","Huevon","hui","injun","jizz","kanker*","kike","klootzak","kraut","knulle","kuk","kuksuger","Kurac","kurwa","kusi*","kyrpa*","lesbo","mamhoon","masturbat*","merd*","mibun","monkleigh","mouliewop","muie","mulkku","muschi","nazis","nepesaurio","nigger*","orospu","paska*","perse","picka","pierdol*","pillu*","pimmel","piss*","pizda","poontsee","poop","porn","p0rn","pr0n","preteen","pula","pule","puta","puto","qahbeh","queef*","rautenberg","schaffer","scheiss*","schlampe","schmuck","screw","sh!t*","sharmuta","sharmute","shipal","shiz","skribz","skurwysyn","sphencter","spic","spierdalaj","splooge","suka","b00b*","testicle*","titt*","twat","vittu","wank*","wetback*","wichser","wop*","yed","zabourah"],hg={words:lg};var ys,Ua;function fg(){return Ua||(Ua=1,ys={"4r5e":1,"5h1t":1,"5hit":1,a55:1,anal:1,anus:1,ar5e:1,arrse:1,arse:1,ass:1,"ass-fucker":1,asses:1,assfucker:1,assfukka:1,asshole:1,assholes:1,asswhole:1,a_s_s:1,"b!tch":1,b00bs:1,b17ch:1,b1tch:1,ballbag:1,balls:1,ballsack:1,bastard:1,beastial:1,beastiality:1,bellend:1,bestial:1,bestiality:1,"bi+ch":1,biatch:1,bitch:1,bitcher:1,bitchers:1,bitches:1,bitchin:1,bitching:1,bloody:1,"blow job":1,blowjob:1,blowjobs:1,boiolas:1,bollock:1,bollok:1,boner:1,boob:1,boobs:1,booobs:1,boooobs:1,booooobs:1,booooooobs:1,breasts:1,buceta:1,bugger:1,bum:1,"bunny fucker":1,butt:1,butthole:1,buttmuch:1,buttplug:1,c0ck:1,c0cksucker:1,"carpet muncher":1,cawk:1,chink:1,cipa:1,cl1t:1,clit:1,clitoris:1,clits:1,cnut:1,cock:1,"cock-sucker":1,cockface:1,cockhead:1,cockmunch:1,cockmuncher:1,cocks:1,cocksuck:1,cocksucked:1,cocksucker:1,cocksucking:1,cocksucks:1,cocksuka:1,cocksukka:1,cok:1,cokmuncher:1,coksucka:1,coon:1,cox:1,crap:1,cum:1,cummer:1,cumming:1,cums:1,cumshot:1,cunilingus:1,cunillingus:1,cunnilingus:1,cunt:1,cuntlick:1,cuntlicker:1,cuntlicking:1,cunts:1,cyalis:1,cyberfuc:1,cyberfuck:1,cyberfucked:1,cyberfucker:1,cyberfuckers:1,cyberfucking:1,d1ck:1,damn:1,dick:1,dickhead:1,dildo:1,dildos:1,dink:1,dinks:1,dirsa:1,dlck:1,"dog-fucker":1,doggin:1,dogging:1,donkeyribber:1,doosh:1,duche:1,dyke:1,ejaculate:1,ejaculated:1,ejaculates:1,ejaculating:1,ejaculatings:1,ejaculation:1,ejakulate:1,"f u c k":1,"f u c k e r":1,f4nny:1,fag:1,fagging:1,faggitt:1,faggot:1,faggs:1,fagot:1,fagots:1,fags:1,fanny:1,fannyflaps:1,fannyfucker:1,fanyy:1,fatass:1,fcuk:1,fcuker:1,fcuking:1,feck:1,fecker:1,felching:1,fellate:1,fellatio:1,fingerfuck:1,fingerfucked:1,fingerfucker:1,fingerfuckers:1,fingerfucking:1,fingerfucks:1,fistfuck:1,fistfucked:1,fistfucker:1,fistfuckers:1,fistfucking:1,fistfuckings:1,fistfucks:1,flange:1,fook:1,fooker:1,fuck:1,fucka:1,fucked:1,fucker:1,fuckers:1,fuckhead:1,fuckheads:1,fuckin:1,fucking:1,fuckings:1,fuckingshitmotherfucker:1,fuckme:1,fucks:1,fuckwhit:1,fuckwit:1,"fudge packer":1,fudgepacker:1,fuk:1,fuker:1,fukker:1,fukkin:1,fuks:1,fukwhit:1,fukwit:1,fux:1,fux0r:1,f_u_c_k:1,gangbang:1,gangbanged:1,gangbangs:1,gaylord:1,gaysex:1,goatse:1,God:1,"god-dam":1,"god-damned":1,goddamn:1,goddamned:1,hardcoresex:1,hell:1,heshe:1,hoar:1,hoare:1,hoer:1,homo:1,hore:1,horniest:1,horny:1,hotsex:1,"jack-off":1,jackoff:1,jap:1,"jerk-off":1,jism:1,jiz:1,jizm:1,jizz:1,kawk:1,knob:1,knobead:1,knobed:1,knobend:1,knobhead:1,knobjocky:1,knobjokey:1,kock:1,kondum:1,kondums:1,kum:1,kummer:1,kumming:1,kums:1,kunilingus:1,"l3i+ch":1,l3itch:1,labia:1,lust:1,lusting:1,m0f0:1,m0fo:1,m45terbate:1,ma5terb8:1,ma5terbate:1,masochist:1,"master-bate":1,masterb8:1,"masterbat*":1,masterbat3:1,masterbate:1,masterbation:1,masterbations:1,masturbate:1,"mo-fo":1,mof0:1,mofo:1,mothafuck:1,mothafucka:1,mothafuckas:1,mothafuckaz:1,mothafucked:1,mothafucker:1,mothafuckers:1,mothafuckin:1,mothafucking:1,mothafuckings:1,mothafucks:1,"mother fucker":1,motherfuck:1,motherfucked:1,motherfucker:1,motherfuckers:1,motherfuckin:1,motherfucking:1,motherfuckings:1,motherfuckka:1,motherfucks:1,muff:1,mutha:1,muthafecker:1,muthafuckker:1,muther:1,mutherfucker:1,n1gga:1,n1gger:1,nazi:1,nigg3r:1,nigg4h:1,nigga:1,niggah:1,niggas:1,niggaz:1,nigger:1,niggers:1,nob:1,"nob jokey":1,nobhead:1,nobjocky:1,nobjokey:1,numbnuts:1,nutsack:1,orgasim:1,orgasims:1,orgasm:1,orgasms:1,p0rn:1,pawn:1,pecker:1,penis:1,penisfucker:1,phonesex:1,phuck:1,phuk:1,phuked:1,phuking:1,phukked:1,phukking:1,phuks:1,phuq:1,pigfucker:1,pimpis:1,piss:1,pissed:1,pisser:1,pissers:1,pisses:1,pissflaps:1,pissin:1,pissing:1,pissoff:1,poop:1,porn:1,porno:1,pornography:1,pornos:1,prick:1,pricks:1,pron:1,pube:1,pusse:1,pussi:1,pussies:1,pussy:1,pussys:1,rectum:1,retard:1,rimjaw:1,rimming:1,"s hit":1,"s.o.b.":1,sadist:1,schlong:1,screwing:1,scroat:1,scrote:1,scrotum:1,semen:1,sex:1,"sh!+":1,"sh!t":1,sh1t:1,shag:1,shagger:1,shaggin:1,shagging:1,shemale:1,"shi+":1,shit:1,shitdick:1,shite:1,shited:1,shitey:1,shitfuck:1,shitfull:1,shithead:1,shiting:1,shitings:1,shits:1,shitted:1,shitter:1,shitters:1,shitting:1,shittings:1,shitty:1,skank:1,slut:1,sluts:1,smegma:1,smut:1,snatch:1,"son-of-a-bitch":1,spac:1,spunk:1,s_h_i_t:1,t1tt1e5:1,t1tties:1,teets:1,teez:1,testical:1,testicle:1,tit:1,titfuck:1,tits:1,titt:1,tittie5:1,tittiefucker:1,titties:1,tittyfuck:1,tittywank:1,titwank:1,tosser:1,turd:1,tw4t:1,twat:1,twathead:1,twatty:1,twunt:1,twunter:1,v14gra:1,v1gra:1,vagina:1,viagra:1,vulva:1,w00se:1,wang:1,wank:1,wanker:1,wanky:1,whoar:1,whore:1,willies:1,willy:1,xrated:1,xxx:1}),ys}var Es,ja;function dg(){return ja||(ja=1,Es=["4r5e","5h1t","5hit","a55","anal","anus","ar5e","arrse","arse","ass","ass-fucker","asses","assfucker","assfukka","asshole","assholes","asswhole","a_s_s","b!tch","b00bs","b17ch","b1tch","ballbag","balls","ballsack","bastard","beastial","beastiality","bellend","bestial","bestiality","bi+ch","biatch","bitch","bitcher","bitchers","bitches","bitchin","bitching","bloody","blow job","blowjob","blowjobs","boiolas","bollock","bollok","boner","boob","boobs","booobs","boooobs","booooobs","booooooobs","breasts","buceta","bugger","bum","bunny fucker","butt","butthole","buttmuch","buttplug","c0ck","c0cksucker","carpet muncher","cawk","chink","cipa","cl1t","clit","clitoris","clits","cnut","cock","cock-sucker","cockface","cockhead","cockmunch","cockmuncher","cocks","cocksuck","cocksucked","cocksucker","cocksucking","cocksucks","cocksuka","cocksukka","cok","cokmuncher","coksucka","coon","cox","crap","cum","cummer","cumming","cums","cumshot","cunilingus","cunillingus","cunnilingus","cunt","cuntlick","cuntlicker","cuntlicking","cunts","cyalis","cyberfuc","cyberfuck","cyberfucked","cyberfucker","cyberfuckers","cyberfucking","d1ck","damn","dick","dickhead","dildo","dildos","dink","dinks","dirsa","dlck","dog-fucker","doggin","dogging","donkeyribber","doosh","duche","dyke","ejaculate","ejaculated","ejaculates","ejaculating","ejaculatings","ejaculation","ejakulate","f u c k","f u c k e r","f4nny","fag","fagging","faggitt","faggot","faggs","fagot","fagots","fags","fanny","fannyflaps","fannyfucker","fanyy","fatass","fcuk","fcuker","fcuking","feck","fecker","felching","fellate","fellatio","fingerfuck","fingerfucked","fingerfucker","fingerfuckers","fingerfucking","fingerfucks","fistfuck","fistfucked","fistfucker","fistfuckers","fistfucking","fistfuckings","fistfucks","flange","fook","fooker","fuck","fucka","fucked","fucker","fuckers","fuckhead","fuckheads","fuckin","fucking","fuckings","fuckingshitmotherfucker","fuckme","fucks","fuckwhit","fuckwit","fudge packer","fudgepacker","fuk","fuker","fukker","fukkin","fuks","fukwhit","fukwit","fux","fux0r","f_u_c_k","gangbang","gangbanged","gangbangs","gaylord","gaysex","goatse","God","god-dam","god-damned","goddamn","goddamned","hardcoresex","hell","heshe","hoar","hoare","hoer","homo","hore","horniest","horny","hotsex","jack-off","jackoff","jap","jerk-off","jism","jiz","jizm","jizz","kawk","knob","knobead","knobed","knobend","knobhead","knobjocky","knobjokey","kock","kondum","kondums","kum","kummer","kumming","kums","kunilingus","l3i+ch","l3itch","labia","lust","lusting","m0f0","m0fo","m45terbate","ma5terb8","ma5terbate","masochist","master-bate","masterb8","masterbat*","masterbat3","masterbate","masterbation","masterbations","masturbate","mo-fo","mof0","mofo","mothafuck","mothafucka","mothafuckas","mothafuckaz","mothafucked","mothafucker","mothafuckers","mothafuckin","mothafucking","mothafuckings","mothafucks","mother fucker","motherfuck","motherfucked","motherfucker","motherfuckers","motherfuckin","motherfucking","motherfuckings","motherfuckka","motherfucks","muff","mutha","muthafecker","muthafuckker","muther","mutherfucker","n1gga","n1gger","nazi","nigg3r","nigg4h","nigga","niggah","niggas","niggaz","nigger","niggers","nob","nob jokey","nobhead","nobjocky","nobjokey","numbnuts","nutsack","orgasim","orgasims","orgasm","orgasms","p0rn","pawn","pecker","penis","penisfucker","phonesex","phuck","phuk","phuked","phuking","phukked","phukking","phuks","phuq","pigfucker","pimpis","piss","pissed","pisser","pissers","pisses","pissflaps","pissin","pissing","pissoff","poop","porn","porno","pornography","pornos","prick","pricks","pron","pube","pusse","pussi","pussies","pussy","pussys","rectum","retard","rimjaw","rimming","s hit","s.o.b.","sadist","schlong","screwing","scroat","scrote","scrotum","semen","sex","sh!+","sh!t","sh1t","shag","shagger","shaggin","shagging","shemale","shi+","shit","shitdick","shite","shited","shitey","shitfuck","shitfull","shithead","shiting","shitings","shits","shitted","shitter","shitters","shitting","shittings","shitty","skank","slut","sluts","smegma","smut","snatch","son-of-a-bitch","spac","spunk","s_h_i_t","t1tt1e5","t1tties","teets","teez","testical","testicle","tit","titfuck","tits","titt","tittie5","tittiefucker","titties","tittyfuck","tittywank","titwank","tosser","turd","tw4t","twat","twathead","twatty","twunt","twunter","v14gra","v1gra","vagina","viagra","vulva","w00se","wang","wank","wanker","wanky","whoar","whore","willies","willy","xrated","xxx"]),Es}var Ts,Ba;function mg(){return Ba||(Ba=1,Ts=/\b(4r5e|5h1t|5hit|a55|anal|anus|ar5e|arrse|arse|ass|ass-fucker|asses|assfucker|assfukka|asshole|assholes|asswhole|a_s_s|b!tch|b00bs|b17ch|b1tch|ballbag|balls|ballsack|bastard|beastial|beastiality|bellend|bestial|bestiality|bi\+ch|biatch|bitch|bitcher|bitchers|bitches|bitchin|bitching|bloody|blow job|blowjob|blowjobs|boiolas|bollock|bollok|boner|boob|boobs|booobs|boooobs|booooobs|booooooobs|breasts|buceta|bugger|bum|bunny fucker|butt|butthole|buttmuch|buttplug|c0ck|c0cksucker|carpet muncher|cawk|chink|cipa|cl1t|clit|clitoris|clits|cnut|cock|cock-sucker|cockface|cockhead|cockmunch|cockmuncher|cocks|cocksuck|cocksucked|cocksucker|cocksucking|cocksucks|cocksuka|cocksukka|cok|cokmuncher|coksucka|coon|cox|crap|cum|cummer|cumming|cums|cumshot|cunilingus|cunillingus|cunnilingus|cunt|cuntlick|cuntlicker|cuntlicking|cunts|cyalis|cyberfuc|cyberfuck|cyberfucked|cyberfucker|cyberfuckers|cyberfucking|d1ck|damn|dick|dickhead|dildo|dildos|dink|dinks|dirsa|dlck|dog-fucker|doggin|dogging|donkeyribber|doosh|duche|dyke|ejaculate|ejaculated|ejaculates|ejaculating|ejaculatings|ejaculation|ejakulate|f u c k|f u c k e r|f4nny|fag|fagging|faggitt|faggot|faggs|fagot|fagots|fags|fanny|fannyflaps|fannyfucker|fanyy|fatass|fcuk|fcuker|fcuking|feck|fecker|felching|fellate|fellatio|fingerfuck|fingerfucked|fingerfucker|fingerfuckers|fingerfucking|fingerfucks|fistfuck|fistfucked|fistfucker|fistfuckers|fistfucking|fistfuckings|fistfucks|flange|fook|fooker|fuck|fucka|fucked|fucker|fuckers|fuckhead|fuckheads|fuckin|fucking|fuckings|fuckingshitmotherfucker|fuckme|fucks|fuckwhit|fuckwit|fudge packer|fudgepacker|fuk|fuker|fukker|fukkin|fuks|fukwhit|fukwit|fux|fux0r|f_u_c_k|gangbang|gangbanged|gangbangs|gaylord|gaysex|goatse|God|god-dam|god-damned|goddamn|goddamned|hardcoresex|hell|heshe|hoar|hoare|hoer|homo|hore|horniest|horny|hotsex|jack-off|jackoff|jap|jerk-off|jism|jiz|jizm|jizz|kawk|knob|knobead|knobed|knobend|knobhead|knobjocky|knobjokey|kock|kondum|kondums|kum|kummer|kumming|kums|kunilingus|l3i\+ch|l3itch|labia|lust|lusting|m0f0|m0fo|m45terbate|ma5terb8|ma5terbate|masochist|master-bate|masterb8|masterbat*|masterbat3|masterbate|masterbation|masterbations|masturbate|mo-fo|mof0|mofo|mothafuck|mothafucka|mothafuckas|mothafuckaz|mothafucked|mothafucker|mothafuckers|mothafuckin|mothafucking|mothafuckings|mothafucks|mother fucker|motherfuck|motherfucked|motherfucker|motherfuckers|motherfuckin|motherfucking|motherfuckings|motherfuckka|motherfucks|muff|mutha|muthafecker|muthafuckker|muther|mutherfucker|n1gga|n1gger|nazi|nigg3r|nigg4h|nigga|niggah|niggas|niggaz|nigger|niggers|nob|nob jokey|nobhead|nobjocky|nobjokey|numbnuts|nutsack|orgasim|orgasims|orgasm|orgasms|p0rn|pawn|pecker|penis|penisfucker|phonesex|phuck|phuk|phuked|phuking|phukked|phukking|phuks|phuq|pigfucker|pimpis|piss|pissed|pisser|pissers|pisses|pissflaps|pissin|pissing|pissoff|poop|porn|porno|pornography|pornos|prick|pricks|pron|pube|pusse|pussi|pussies|pussy|pussys|rectum|retard|rimjaw|rimming|s hit|s.o.b.|sadist|schlong|screwing|scroat|scrote|scrotum|semen|sex|sh!\+|sh!t|sh1t|shag|shagger|shaggin|shagging|shemale|shi\+|shit|shitdick|shite|shited|shitey|shitfuck|shitfull|shithead|shiting|shitings|shits|shitted|shitter|shitters|shitting|shittings|shitty|skank|slut|sluts|smegma|smut|snatch|son-of-a-bitch|spac|spunk|s_h_i_t|t1tt1e5|t1tties|teets|teez|testical|testicle|tit|titfuck|tits|titt|tittie5|tittiefucker|titties|tittyfuck|tittywank|titwank|tosser|turd|tw4t|twat|twathead|twatty|twunt|twunter|v14gra|v1gra|vagina|viagra|vulva|w00se|wang|wank|wanker|wanky|whoar|whore|willies|willy|xrated|xxx)\b/gi),Ts}var ws,qa;function gg(){return qa||(qa=1,ws={object:fg(),array:dg(),regex:mg()}),ws}var Is,za;function pg(){if(za)return Is;za=1;const n=hg.words,t=gg().array;class e{constructor(s={}){Object.assign(this,{list:s.emptyList&&[]||Array.prototype.concat.apply(n,[t,s.list||[]]),exclude:s.exclude||[],splitRegex:s.splitRegex||/\b/,placeHolder:s.placeHolder||"*",regex:s.regex||/[^a-zA-Z0-9|\$|\@]|\^/g,replaceRegex:s.replaceRegex||/\w/g})}isProfane(s){return this.list.filter(o=>{const a=new RegExp(`\\b${o.replace(/(\W)/g,"\\$1")}\\b`,"gi");return!this.exclude.includes(o.toLowerCase())&&a.test(s)}).length>0||!1}replaceWord(s){return s.replace(this.regex,"").replace(this.replaceRegex,this.placeHolder)}clean(s){return s.split(this.splitRegex).map(o=>this.isProfane(o)?this.replaceWord(o):o).join(this.splitRegex.exec(s)[0])}addWords(){let s=Array.from(arguments);this.list.push(...s),s.map(o=>o.toLowerCase()).forEach(o=>{this.exclude.includes(o)&&this.exclude.splice(this.exclude.indexOf(o),1)})}removeWords(){this.exclude.push(...Array.from(arguments).map(s=>s.toLowerCase()))}}return Is=e,Is}var _g=pg();const Pg=sl(_g);export{Pg as F,Sg as a,Rg as b,Ig as c,vg as g,Dh as i,bg as l,Ag as o,kg as q,Eg as r};
