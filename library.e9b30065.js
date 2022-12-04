!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequired7c6=i),i.register("2mz0K",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=r.default(e)););return e};var n,r=(n=i("fVNic"))&&n.__esModule?n:{default:n}}));var a=i("gay7f"),o=i("2hOhy"),s=i("3oVBd"),u=i("9YQpP");i("iO6C3");var c,l,h,d=i("bpxeT"),f=i("8MBJY"),v=i("a2hTj"),p=i("hKHmD"),m=i("8nrFW"),_=i("2TvXO"),y=(d=i("bpxeT"),f=i("8MBJY"),v=i("a2hTj"),i("1t1Wn")),g=(m=i("8nrFW"),_=i("2TvXO"),i("ds8z5")),k=(f=i("8MBJY"),v=i("a2hTj"),i("eYQtU")),b=(y=i("1t1Wn"),m=i("8nrFW"),i("4c7YB")),w=i("2MbLg"),I=c={};function T(){throw new Error("setTimeout has not been defined")}function C(){throw new Error("clearTimeout has not been defined")}function x(e){if(l===setTimeout)return setTimeout(e,0);if((l===T||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}!function(){try{l="function"==typeof setTimeout?setTimeout:T}catch(e){l=T}try{h="function"==typeof clearTimeout?clearTimeout:C}catch(e){h=C}}();var E,S=[],R=!1,N=-1;function P(){R&&E&&(R=!1,E.length?S=E.concat(S):N=-1,S.length&&O())}function O(){if(!R){var e=x(P);R=!0;for(var t=S.length;t;){for(E=S,S=[];++N<t;)E&&E[N].run();N=-1,t=S.length}E=null,R=!1,function(e){if(h===clearTimeout)return clearTimeout(e);if((h===C||!h)&&clearTimeout)return h=clearTimeout,clearTimeout(e);try{h(e)}catch(t){try{return h.call(null,e)}catch(t){return h.call(this,e)}}}(e)}}function A(e,t){this.fun=e,this.array=t}function D(){}I.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];S.push(new A(e,t)),1!==S.length||R||x(O)},A.prototype.run=function(){this.fun.apply(null,this.array)},I.title="browser",I.browser=!0,I.env={},I.argv=[],I.version="",I.versions={},I.on=D,I.addListener=D,I.once=D,I.off=D,I.removeListener=D,I.removeAllListeners=D,I.emit=D,I.prependListener=D,I.prependOnceListener=D,I.listeners=function(e){return[]},I.binding=function(e){throw new Error("process.binding is not supported")},I.cwd=function(){return"/"},I.chdir=function(e){throw new Error("process.chdir is not supported")},I.umask=function(){return 0};
/**
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
 */
var L=!1,M=!1,F="${JSCORE_VERSION}",U=function(e,t){if(!e)throw W(t)},W=function(e){return new Error("Firebase Database ("+F+") INTERNAL ASSERT FAILED: "+e)},j=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},q={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<e.length;i+=3){var a=e[i],o=i+1<e.length,s=o?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,l=a>>2,h=(3&a)<<4|s>>4,d=(15&s)<<2|c>>6,f=63&c;u||(f=64,o||(d=64)),r.push(n[l],n[h],n[d],n[f])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(j(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,r=0;n<e.length;){var i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){var a=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){var o=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{var s=e[n++],u=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&u)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<e.length;){var a=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0,s=++i<e.length?n[e.charAt(i)]:64,u=++i<e.length?n[e.charAt(i)]:64;if(++i,null==a||null==o||null==s||null==u)throw Error();var c=a<<2|o>>4;if(r.push(c),64!==s){var l=o<<4&240|s>>2;if(r.push(l),64!==u){var h=s<<6&192|u;r.push(h)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},H=function(e){var t=j(e);return q.encodeByteArray(t,!0)},V=function(e){return H(e).replace(/\./g,"")},z=function(e){try{return q.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
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
 */
/**
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
 */
function B(e){return K(void 0,e)}function K(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(var n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=K(e[n],t[n]));return e}
/**
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
 */
function G(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Y(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(G())}function J(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function Q(){return!0===L||!0===M}
/**
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
 */
var X=function(){return function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__},$=function(){try{return X()||function(){if(void 0!==c&&void 0!==c.env);}()||function(){if("undefined"!=typeof document){var e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}var t=e&&z(e[1]);return t&&JSON.parse(t)}}()}catch(e){return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: ".concat(e))}},Z=function(e){var t,n;return null===(n=null===(t=$())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},ee=function(e){var t=Z(e);if(t){var n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error("Invalid host ".concat(t," with no separate hostname and port!"));var r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]}},te=function(){var e;return null===(e=$())||void 0===e?void 0:e.config},ne=function(e){var t;return null===(t=$())||void 0===t?void 0:t["_".concat(e)]},re=function(){"use strict";function t(){var n=this;e(f)(this,t),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,t){n.resolve=e,n.reject=t}))}return e(v)(t,[{key:"wrapCallback",value:function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}}}]),t}();
/**
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
 */
function ie(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');var n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");var a=Object.assign({iss:"https://securetoken.google.com/".concat(n),aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[V(JSON.stringify({alg:"none",type:"JWT"})),V(JSON.stringify(a)),""].join(".")}
/**
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
 */var ae=function(t){"use strict";e(k)(r,t);var n=e(w)(r);function r(t,i,a){var o;return e(f)(this,r),(o=n.call(this,i)).code=t,o.customData=a,o.name="FirebaseError",Object.setPrototypeOf(e(g)(o),r.prototype),Error.captureStackTrace&&Error.captureStackTrace(e(g)(o),oe.prototype.create),o}return r}(e(b)(Error)),oe=function(){"use strict";function t(n,r,i){e(f)(this,t),this.service=n,this.serviceName=r,this.errors=i}return e(v)(t,[{key:"create",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=n[0]||{},a="".concat(this.service,"/").concat(e),o=this.errors[e],s=o?se(o,i):"Error",u="".concat(this.serviceName,": ").concat(s," (").concat(a,")."),c=new ae(a,u,i);return c}}]),t}();function se(e,t){return e.replace(ue,(function(e,n){var r=t[n];return null!=r?String(r):"<".concat(n,"?>")}))}var ue=/\{\$([^}]+)}/g;
/**
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
 */function ce(e){return JSON.parse(e)}function le(e){return JSON.stringify(e)}
/**
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
 */var he=function(e){var t={},n={},r={},i="";try{var a=e.split(".");t=ce(z(a[0])||""),n=ce(z(a[1])||""),i=a[2],r=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:r,signature:i}},de=function(e){var t=he(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")};
/**
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
 */
function fe(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function ve(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function pe(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function me(e,t,n){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function _e(e,t){if(e===t)return!0;var n=Object.keys(e),r=Object.keys(t),i=!0,a=!1,o=void 0;try{for(var s,u=n[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;if(!r.includes(c))return!1;var l=e[c],h=t[c];if(ye(l)&&ye(h)){if(!_e(l,h))return!1}else if(l!==h)return!1}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}var d=!0,f=!1,v=void 0;try{for(var p,m=r[Symbol.iterator]();!(d=(p=m.next()).done);d=!0){var _=p.value;if(!n.includes(_))return!1}}catch(e){f=!0,v=e}finally{try{d||null==m.return||m.return()}finally{if(f)throw v}}return!0}function ye(e){return null!==e&&"object"==typeof e}
/**
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
 */
/**
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
 */
function ge(t){var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=function(t,r){var i=e(y)(r.value,2),a=i[0],o=i[1];Array.isArray(o)?o.forEach((function(e){n.push(encodeURIComponent(a)+"="+encodeURIComponent(e))})):n.push(encodeURIComponent(a)+"="+encodeURIComponent(o))},u=Object.entries(t)[Symbol.iterator]();!(r=(o=u.next()).done);r=!0)s(0,o)}catch(e){i=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw a}}return n.length?"&"+n.join("&"):""}function ke(t){var n={};return t.replace(/^\?/,"").split("&").forEach((function(t){if(t){var r=e(y)(t.split("="),2),i=r[0],a=r[1];n[decodeURIComponent(i)]=decodeURIComponent(a)}})),n}function be(e){var t=e.indexOf("?");if(!t)return"";var n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
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
 */var we=function(){"use strict";function t(){e(f)(this,t),this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var n=1;n<this.blockSize;++n)this.pad_[n]=0;this.reset()}return e(v)(t,[{key:"reset",value:function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}},{key:"compress_",value:function(e,t){t||(t=0);var n=this.W_;if("string"==typeof e)for(var r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(var i=0;i<16;i++)n[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(var a=16;a<80;a++){var o=n[a-3]^n[a-8]^n[a-14]^n[a-16];n[a]=4294967295&(o<<1|o>>>31)}for(var s,u,c=this.chain_[0],l=this.chain_[1],h=this.chain_[2],d=this.chain_[3],f=this.chain_[4],v=0;v<80;v++){v<40?v<20?(s=d^l&(h^d),u=1518500249):(s=l^h^d,u=1859775393):v<60?(s=l&h|d&(l|h),u=2400959708):(s=l^h^d,u=3395469782);var p=(c<<5|c>>>27)+s+f+u+n[v]&4294967295;f=d,d=h,h=4294967295&(l<<30|l>>>2),l=c,c=p}this.chain_[0]=this.chain_[0]+c&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+h&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+f&4294967295}},{key:"update",value:function(e,t){if(null!=e){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=0,i=this.buf_,a=this.inbuf_;r<t;){if(0===a)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(i[a]=e.charCodeAt(r),++r,++a===this.blockSize){this.compress_(i),a=0;break}}else for(;r<t;)if(i[a]=e[r],++r,++a===this.blockSize){this.compress_(i),a=0;break}}this.inbuf_=a,this.total_+=t}}},{key:"digest",value:function(){var e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var n=this.blockSize-1;n>=56;n--)this.buf_[n]=255&t,t/=256;this.compress_(this.buf_);for(var r=0,i=0;i<5;i++)for(var a=24;a>=0;a-=8)e[r]=this.chain_[i]>>a&255,++r;return e}}]),t}();var Ie=function(){"use strict";function t(n,r){var i=this;e(f)(this,t),this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then((function(){n(i)})).catch((function(e){i.error(e)}))}return e(v)(t,[{key:"next",value:function(e){this.forEachObserver((function(t){t.next(e)}))}},{key:"error",value:function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)}},{key:"complete",value:function(){this.forEachObserver((function(e){e.complete()})),this.close()}},{key:"subscribe",value:function(e,t,n){var r,i=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(e,t){if("object"!=typeof e||null===e)return!1;var n=!0,r=!1,i=void 0;try{for(var a,o=t[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(s in e&&"function"==typeof e[s])return!0}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n}).next&&(r.next=Te),void 0===r.error&&(r.error=Te),void 0===r.complete&&(r.complete=Te);var a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(e){}})),this.observers.push(r),a}},{key:"unsubscribeOne",value:function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}},{key:"forEachObserver",value:function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)}},{key:"sendOne",value:function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}},{key:"close",value:function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))}}]),t}();function Te(){}
/**
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
 */function Ce(e,t){return"".concat(e," failed: ").concat(t," argument ")}
/**
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
 */
var xe=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);if(i>=55296&&i<=56319){var a=i-55296;r++,U(r<e.length,"Surrogate pair missing trail surrogate."),i=65536+(a<<10)+(e.charCodeAt(r)-56320)}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},Ee=function(e){for(var t=0,n=0;n<e.length;n++){var r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};
/**
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
 */
function Se(e){return e&&e._delegate?e._delegate:e}var Re=function(){"use strict";function t(n,r,i){e(f)(this,t),this.name=n,this.instanceFactory=r,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e(v)(t,[{key:"setInstantiationMode",value:function(e){return this.instantiationMode=e,this}},{key:"setMultipleInstances",value:function(e){return this.multipleInstances=e,this}},{key:"setServiceProps",value:function(e){return this.serviceProps=e,this}},{key:"setInstanceCreatedCallback",value:function(e){return this.onInstanceCreated=e,this}}]),t}(),Ne="[DEFAULT]",Pe=function(){"use strict";function t(n,r){e(f)(this,t),this.name=n,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e(v)(t,[{key:"get",value:function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new re;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}},{key:"getImmediate",value:function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}},{key:"getComponent",value:function(){return this.component}},{key:"setComponent",value:function(t){if(t.name!==this.name)throw Error("Mismatching Component ".concat(t.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=t,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
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
 */(t))try{this.getOrInitializeService({instanceIdentifier:Ne})}catch(e){}var n=!0,r=!1,i=void 0;try{for(var a,o=this.instancesDeferred.entries()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=e(y)(a.value,2),u=s[0],c=s[1],l=this.normalizeInstanceIdentifier(u);try{var h=this.getOrInitializeService({instanceIdentifier:l});c.resolve(h)}catch(e){}}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}}}},{key:"clearInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}},{key:"delete",value:function(){var t=this;return e(d)(e(_).mark((function n(){var r;return e(_).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=Array.from(t.instances.values()),n.next=3,Promise.all(e(m)(r.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()}))).concat(e(m)(r.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))));case 3:case"end":return n.stop()}}),n)})))()}},{key:"isComponentSet",value:function(){return null!=this.component}},{key:"isInitialized",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne;return this.instances.has(e)}},{key:"getOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne;return this.instancesOptions.get(e)||{}}},{key:"initialize",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.options,r=void 0===n?{}:n,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error("".concat(this.name,"(").concat(i,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var a=this.getOrInitializeService({instanceIdentifier:i,options:r}),o=!0,s=!1,u=void 0;try{for(var c,l=this.instancesDeferred.entries()[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var h=e(y)(c.value,2),d=h[0],f=h[1],v=this.normalizeInstanceIdentifier(d);i===v&&f.resolve(a)}}catch(e){s=!0,u=e}finally{try{o||null==l.return||l.return()}finally{if(s)throw u}}return a}},{key:"onInit",value:function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var a=this.instances.get(r);return a&&e(a,r),function(){i.delete(e)}}},{key:"invokeOnInitCallbacks",value:function(e,t){var n=this.onInitCallbacks.get(t);if(n){var r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;try{u(e,t)}catch(e){}}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}}},{key:"getOrInitializeService",value:function(e){var t,n=e.instanceIdentifier,r=e.options,i=void 0===r?{}:r,a=this.instances.get(n);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,t===Ne?void 0:t),options:i}),this.instances.set(n,a),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(a,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,a)}catch(e){}return a||null}},{key:"normalizeInstanceIdentifier",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne;return this.component?this.component.multipleInstances?e:Ne:e}},{key:"shouldAutoInitialize",value:function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}]),t}();
/**
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
 */var Oe,Ae,De=function(){"use strict";function t(n){e(f)(this,t),this.name=n,this.providers=new Map}return e(v)(t,[{key:"addComponent",value:function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}},{key:"addOrOverwriteComponent",value:function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}},{key:"getProvider",value:function(e){if(this.providers.has(e))return this.providers.get(e);var t=new Pe(e,this);return this.providers.set(e,t),t}},{key:"getProviders",value:function(){return Array.from(this.providers.values())}}]),t}(),Le=(f=i("8MBJY"),v=i("a2hTj"),p=i("hKHmD"),m=i("8nrFW"),[]);(Ae=Oe||(Oe={}))[Ae.DEBUG=0]="DEBUG",Ae[Ae.VERBOSE=1]="VERBOSE",Ae[Ae.INFO=2]="INFO",Ae[Ae.WARN=3]="WARN",Ae[Ae.ERROR=4]="ERROR",Ae[Ae.SILENT=5]="SILENT";var Me,Fe={debug:Oe.DEBUG,verbose:Oe.VERBOSE,info:Oe.INFO,warn:Oe.WARN,error:Oe.ERROR,silent:Oe.SILENT},Ue=Oe.INFO,We=(Me={},e(p)(Me,Oe.DEBUG,"log"),e(p)(Me,Oe.VERBOSE,"log"),e(p)(Me,Oe.INFO,"info"),e(p)(Me,Oe.WARN,"warn"),e(p)(Me,Oe.ERROR,"error"),Me),je=function(t,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];var o;if(!(n<t.logLevel)){var s=(new Date).toISOString(),u=We[n];if(!u)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(n,")"));(o=console)[u].apply(o,["[".concat(s,"]  ").concat(t.name,":")].concat(e(m)(i)))}},qe=function(){"use strict";function t(n){e(f)(this,t),this.name=n,this._logLevel=Ue,this._logHandler=je,this._userLogHandler=null,Le.push(this)}return e(v)(t,[{key:"logLevel",get:function(){return this._logLevel},set:function(e){if(!(e in Oe))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}},{key:"setLogLevel",value:function(e){this._logLevel="string"==typeof e?Fe[e]:e}},{key:"logHandler",get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}},{key:"userLogHandler",get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e}},{key:"debug",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,Oe.DEBUG].concat(e(m)(n))),this._logHandler.apply(this,[this,Oe.DEBUG].concat(e(m)(n)))}},{key:"log",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,Oe.VERBOSE].concat(e(m)(n))),this._logHandler.apply(this,[this,Oe.VERBOSE].concat(e(m)(n)))}},{key:"info",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,Oe.INFO].concat(e(m)(n))),this._logHandler.apply(this,[this,Oe.INFO].concat(e(m)(n)))}},{key:"warn",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,Oe.WARN].concat(e(m)(n))),this._logHandler.apply(this,[this,Oe.WARN].concat(e(m)(n)))}},{key:"error",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,Oe.ERROR].concat(e(m)(n))),this._logHandler.apply(this,[this,Oe.ERROR].concat(e(m)(n)))}}]),t}();d=i("bpxeT");var He,Ve,ze=i("dDDEV");m=i("8nrFW"),_=i("2TvXO"),m=i("8nrFW");var Be=new WeakMap,Ke=new WeakMap,Ge=new WeakMap,Ye=new WeakMap,Je=new WeakMap;var Qe={get:function(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Ke.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Ge.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ze(e[t])},set:function(e,t,n){return e[t]=n,!0},has:function(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function Xe(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Ve||(Ve=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.apply(et(this),n),Ze(Be.get(this))}:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return Ze(t.apply(et(this),n))}:function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];var o,s=(o=t).call.apply(o,[et(this),n].concat(e(m)(i)));return Ge.set(s,n.sort?n.sort():[n]),Ze(s)}}function $e(e){return"function"==typeof e?Xe(e):(e instanceof IDBTransaction&&function(e){if(!Ke.has(e)){var t=new Promise((function(t,n){var r=function(){e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=function(){t(),r()},a=function(){n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)}));Ke.set(e,t)}}(e),t=e,(He||(He=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(e){return t instanceof e}))?new Proxy(e,Qe):e);var t}function Ze(e){if(e instanceof IDBRequest)return t=e,(n=new Promise((function(e,n){var r=function(){t.removeEventListener("success",i),t.removeEventListener("error",a)},i=function(){e(Ze(t.result)),r()},a=function(){n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",a)}))).then((function(e){e instanceof IDBCursor&&Be.set(e,t)})).catch((function(){})),Je.set(n,t),n;var t,n;if(Ye.has(e))return Ye.get(e);var r=$e(e);return r!==e&&(Ye.set(e,r),Je.set(r,e)),r}var et=function(e){return Je.get(e)};function tt(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.blocked,i=n.upgrade,a=n.blocking,o=n.terminated,s=indexedDB.open(e,t),u=Ze(s);return i&&s.addEventListener("upgradeneeded",(function(e){i(Ze(s.result),e.oldVersion,e.newVersion,Ze(s.transaction))})),r&&s.addEventListener("blocked",(function(){return r()})),u.then((function(e){o&&e.addEventListener("close",(function(){return o()})),a&&e.addEventListener("versionchange",(function(){return a()}))})).catch((function(){})),u}var nt=["get","getKey","getAll","getAllKeys","count"],rt=["put","add","delete","clear"],it=new Map;function at(t,n){if(t instanceof IDBDatabase&&!(n in t)&&"string"==typeof n){if(it.get(n))return it.get(n);var r=n.replace(/FromIndex$/,""),i=n!==r,a=rt.includes(r);if(r in(i?IDBIndex:IDBObjectStore).prototype&&(a||nt.includes(r))){var o,s=(o=e(d)(e(_).mark((function t(n){var o,s,u,c,l,h,d=arguments;return e(_).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(o=d.length,s=new Array(o>1?o-1:0),u=1;u<o;u++)s[u-1]=d[u];return l=this.transaction(n,a?"readwrite":"readonly"),h=l.store,i&&(h=h.index(s.shift())),t.next=7,Promise.all([(c=h)[r].apply(c,e(m)(s)),a&&l.done]);case 7:return t.abrupt("return",t.sent[0]);case 8:case"end":return t.stop()}}),t,this)}))),function(e){return o.apply(this,arguments)});return it.set(n,s),s}}}Qe=function(t){return e(ze)({},t,{get:function(e,n,r){return at(e,n)||t.get(e,n,r)},has:function(e,n){return!!at(e,n)||t.has(e,n)}})}(Qe);
/**
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
 */
var ot=function(){"use strict";function t(n){e(f)(this,t),this.container=n}return e(v)(t,[{key:"getPlatformInfoString",value:function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")}}]),t}();var st,ut,ct="@firebase/app",lt="0.8.4",ht=new qe("@firebase/app"),dt="[DEFAULT]",ft=(st={},e(p)(st,ct,"fire-core"),e(p)(st,"@firebase/app-compat","fire-core-compat"),e(p)(st,"@firebase/analytics","fire-analytics"),e(p)(st,"@firebase/analytics-compat","fire-analytics-compat"),e(p)(st,"@firebase/app-check","fire-app-check"),e(p)(st,"@firebase/app-check-compat","fire-app-check-compat"),e(p)(st,"@firebase/auth","fire-auth"),e(p)(st,"@firebase/auth-compat","fire-auth-compat"),e(p)(st,"@firebase/database","fire-rtdb"),e(p)(st,"@firebase/database-compat","fire-rtdb-compat"),e(p)(st,"@firebase/functions","fire-fn"),e(p)(st,"@firebase/functions-compat","fire-fn-compat"),e(p)(st,"@firebase/installations","fire-iid"),e(p)(st,"@firebase/installations-compat","fire-iid-compat"),e(p)(st,"@firebase/messaging","fire-fcm"),e(p)(st,"@firebase/messaging-compat","fire-fcm-compat"),e(p)(st,"@firebase/performance","fire-perf"),e(p)(st,"@firebase/performance-compat","fire-perf-compat"),e(p)(st,"@firebase/remote-config","fire-rc"),e(p)(st,"@firebase/remote-config-compat","fire-rc-compat"),e(p)(st,"@firebase/storage","fire-gcs"),e(p)(st,"@firebase/storage-compat","fire-gcs-compat"),e(p)(st,"@firebase/firestore","fire-fst"),e(p)(st,"@firebase/firestore-compat","fire-fst-compat"),e(p)(st,"fire-js","fire-js"),e(p)(st,"firebase","fire-js-all"),st),vt=new Map,pt=new Map;function mt(e,t){try{e.container.addComponent(t)}catch(n){ht.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),n)}}function _t(e){var t=e.name;if(pt.has(t))return ht.debug("There were multiple attempts to register component ".concat(t,".")),!1;pt.set(t,e);var n=!0,r=!1,i=void 0;try{for(var a,o=vt.values()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){mt(a.value,e)}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!0}function yt(e,t){var n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
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
 */
var gt=(ut={},e(p)(ut,"no-app","No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),e(p)(ut,"bad-app-name","Illegal App name: '{$appName}"),e(p)(ut,"duplicate-app","Firebase App named '{$appName}' already exists with different options or config"),e(p)(ut,"app-deleted","Firebase App named '{$appName}' already deleted"),e(p)(ut,"no-options","Need to provide options, when not being deployed to hosting via source."),e(p)(ut,"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),e(p)(ut,"invalid-log-argument","First argument to `onLog` must be null or a function."),e(p)(ut,"idb-open","Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}."),e(p)(ut,"idb-get","Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}."),e(p)(ut,"idb-set","Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}."),e(p)(ut,"idb-delete","Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."),ut),kt=new oe("app","Firebase",gt),bt=function(){"use strict";function t(n,r,i){var a=this;e(f)(this,t),this._isDeleted=!1,this._options=Object.assign({},n),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Re("app",(function(){return a}),"PUBLIC"))}return e(v)(t,[{key:"automaticDataCollectionEnabled",get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this.checkDestroyed(),this._name}},{key:"options",get:function(){return this.checkDestroyed(),this._options}},{key:"config",get:function(){return this.checkDestroyed(),this._config}},{key:"container",get:function(){return this._container}},{key:"isDeleted",get:function(){return this._isDeleted},set:function(e){this._isDeleted=e}},{key:"checkDestroyed",value:function(){if(this.isDeleted)throw kt.create("app-deleted",{appName:this._name})}}]),t}(),wt="9.14.0";function It(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e;if("object"!=typeof t){var r=t;t={name:r}}var i=Object.assign({name:dt,automaticDataCollectionEnabled:!1},t),a=i.name;if("string"!=typeof a||!a)throw kt.create("bad-app-name",{appName:String(a)});if(n||(n=te()),!n)throw kt.create("no-options");var o=vt.get(a);if(o){if(_e(n,o.options)&&_e(i,o.config))return o;throw kt.create("duplicate-app",{appName:a})}var s=new De(a),u=!0,c=!1,l=void 0;try{for(var h,d=pt.values()[Symbol.iterator]();!(u=(h=d.next()).done);u=!0){var f=h.value;s.addComponent(f)}}catch(e){c=!0,l=e}finally{try{u||null==d.return||d.return()}finally{if(c)throw l}}var v=new bt(n,i,s);return vt.set(a,v),v}function Tt(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:dt,t=vt.get(e);if(!t&&e===dt)return It();if(!t)throw kt.create("no-app",{appName:e});return t}function Ct(e,t,n){var r,i=null!==(r=ft[e])&&void 0!==r?r:e;n&&(i+="-".concat(n));var a=i.match(/\s|\//),o=t.match(/\s|\//);if(a||o){var s=['Unable to register library "'.concat(i,'" with version "').concat(t,'":')];return a&&s.push('library name "'.concat(i,'" contains illegal characters (whitespace or "/")')),a&&o&&s.push("and"),o&&s.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void ht.warn(s.join(" "))}_t(new Re("".concat(i,"-version"),(function(){return{library:i,version:t}}),"VERSION"))}
/**
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
 */
var xt="firebase-heartbeat-store",Et=null;function St(){return Et||(Et=tt("firebase-heartbeat-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(xt)}}).catch((function(e){throw kt.create("idb-open",{originalErrorMessage:e.message})}))),Et}function Rt(e){return Nt.apply(this,arguments)}function Nt(){return(Nt=e(d)(e(_).mark((function t(n){var r,i,a;return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,St();case 4:return i=e.sent,e.abrupt("return",i.transaction(xt).objectStore(xt).get(At(n)));case 8:e.prev=8,e.t0=e.catch(1),e.t0 instanceof ae?ht.warn(e.t0.message):(a=kt.create("idb-get",{originalErrorMessage:null===(r=e.t0)||void 0===r?void 0:r.message}),ht.warn(a.message));case 11:case"end":return e.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}function Pt(e,t){return Ot.apply(this,arguments)}function Ot(){return(Ot=e(d)(e(_).mark((function t(n,r){var i,a,o,s,u;return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,St();case 4:return a=e.sent,o=a.transaction(xt,"readwrite"),s=o.objectStore(xt),e.next=9,s.put(r,At(n));case 9:return e.abrupt("return",o.done);case 12:e.prev=12,e.t0=e.catch(1),e.t0 instanceof ae?ht.warn(e.t0.message):(u=kt.create("idb-set",{originalErrorMessage:null===(i=e.t0)||void 0===i?void 0:i.message}),ht.warn(u.message));case 15:case"end":return e.stop()}}),t,null,[[1,12]])})))).apply(this,arguments)}function At(e){return"".concat(e.name,"!").concat(e.options.appId)}
/**
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
 */var Dt=function(){"use strict";function t(n){var r=this;e(f)(this,t),this.container=n,this._heartbeatsCache=null;var i=this.container.getProvider("app").getImmediate();this._storage=new Ut(i),this._heartbeatsCachePromise=this._storage.read().then((function(e){return r._heartbeatsCache=e,e}))}return e(v)(t,[{key:"triggerHeartbeat",value:function(){var t=this;return e(d)(e(_).mark((function n(){var r,i,a;return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.container.getProvider("platform-logger").getImmediate(),i=r.getPlatformInfoString(),a=Lt(),null!==t._heartbeatsCache){e.next=7;break}return e.next=6,t._heartbeatsCachePromise;case 6:t._heartbeatsCache=e.sent;case 7:if(t._heartbeatsCache.lastSentHeartbeatDate!==a&&!t._heartbeatsCache.heartbeats.some((function(e){return e.date===a}))){e.next=11;break}return e.abrupt("return");case 11:t._heartbeatsCache.heartbeats.push({date:a,agent:i});case 12:return t._heartbeatsCache.heartbeats=t._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),e.abrupt("return",t._storage.overwrite(t._heartbeatsCache));case 14:case"end":return e.stop()}}),n)})))()}},{key:"getHeartbeatsHeader",value:function(){var t=this;return e(d)(e(_).mark((function n(){var r,i,a,o,s;return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t._heartbeatsCache){e.next=3;break}return e.next=3,t._heartbeatsCachePromise;case 3:if(null!==t._heartbeatsCache&&0!==t._heartbeatsCache.heartbeats.length){e.next=5;break}return e.abrupt("return","");case 5:if(r=Lt(),i=Mt(t._heartbeatsCache.heartbeats),a=i.heartbeatsToSend,o=i.unsentEntries,s=V(JSON.stringify({version:2,heartbeats:a})),t._heartbeatsCache.lastSentHeartbeatDate=r,!(o.length>0)){e.next=15;break}return t._heartbeatsCache.heartbeats=o,e.next=13,t._storage.overwrite(t._heartbeatsCache);case 13:e.next=16;break;case 15:t._heartbeatsCache.heartbeats=[],t._storage.overwrite(t._heartbeatsCache);case 16:return e.abrupt("return",s);case 17:case"end":return e.stop()}}),n)})))()}}]),t}();function Lt(){return(new Date).toISOString().substring(0,10)}function Mt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024,n=[],r=e.slice(),i=!0,a=!1,o=void 0;try{for(var s,u=function(e,i){var a=i.value,o=n.find((function(e){return e.agent===a.agent}));if(o){if(o.dates.push(a.date),Wt(n)>t)return o.dates.pop(),"break"}else if(n.push({agent:a.agent,dates:[a.date]}),Wt(n)>t)return n.pop(),"break";r=r.slice(1)},c=e[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var l=u(c,s);if("break"===l)break}}catch(e){a=!0,o=e}finally{try{i||null==c.return||c.return()}finally{if(a)throw o}}return{heartbeatsToSend:n,unsentEntries:r}}var Ft,Ut=function(){"use strict";function t(n){e(f)(this,t),this.app=n,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return e(v)(t,[{key:"runIndexedDBEnvironmentCheck",value:function(){return e(d)(e(_).mark((function t(){return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("object"==typeof indexedDB){e.next=4;break}return e.abrupt("return",!1);case 4:return e.abrupt("return",new Promise((function(e,t){try{var n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=function(){i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=function(){n=!1},i.onerror=function(){var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((function(){return!0})).catch((function(){return!1})));case 5:case"end":return e.stop()}}),t)})))()}},{key:"read",value:function(){var t=this;return e(d)(e(_).mark((function n(){var r;return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._canUseIndexedDBPromise;case 2:if(e.sent){e.next=7;break}return e.abrupt("return",{heartbeats:[]});case 7:return e.next=9,Rt(t.app);case 9:return r=e.sent,e.abrupt("return",r||{heartbeats:[]});case 11:case"end":return e.stop()}}),n)})))()}},{key:"overwrite",value:function(t){var n=this;return e(d)(e(_).mark((function r(){var i,a;return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,n._canUseIndexedDBPromise;case 3:if(e.sent){e.next=8;break}return e.abrupt("return");case 8:return e.next=10,n.read();case 10:return a=e.sent,e.abrupt("return",Pt(n.app,{lastSentHeartbeatDate:null!==(i=t.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:t.heartbeats}));case 12:case"end":return e.stop()}}),r)})))()}},{key:"add",value:function(t){var n=this;return e(d)(e(_).mark((function r(){var i,a;return e(_).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=3,n._canUseIndexedDBPromise;case 3:if(r.sent){r.next=8;break}return r.abrupt("return");case 8:return r.next=10,n.read();case 10:return a=r.sent,r.abrupt("return",Pt(n.app,{lastSentHeartbeatDate:null!==(i=t.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:e(m)(a.heartbeats).concat(e(m)(t.heartbeats))}));case 12:case"end":return r.stop()}}),r)})))()}}]),t}();function Wt(e){return V(JSON.stringify({version:2,heartbeats:e})).length}
/**
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
 */Ft="",_t(new Re("platform-logger",(function(e){return new ot(e)}),"PRIVATE")),_t(new Re("heartbeat",(function(e){return new Dt(e)}),"PRIVATE")),Ct(ct,lt,Ft),Ct(ct,lt,"esm2017"),Ct("fire-js","");
/**
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
 */
Ct("firebase","9.14.0","app");g=i("ds8z5"),d=i("bpxeT"),f=i("8MBJY"),v=i("a2hTj"),k=i("eYQtU"),y=i("1t1Wn"),m=i("8nrFW");var jt=i("l5bVx"),qt=(w=i("2MbLg"),_=i("2TvXO"),"@firebase/database"),Ht="0.13.10",Vt="";
/**
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
 */
var zt,Bt=function(){"use strict";function t(n){e(f)(this,t),this.domStorage_=n,this.prefix_="firebase:"}return e(v)(t,[{key:"set",value:function(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),le(t))}},{key:"get",value:function(e){var t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:ce(t)}},{key:"remove",value:function(e){this.domStorage_.removeItem(this.prefixedName_(e))}},{key:"prefixedName_",value:function(e){return this.prefix_+e}},{key:"toString",value:function(){return this.domStorage_.toString()}}]),t}(),Kt=function(){"use strict";function t(){e(f)(this,t),this.cache_={},this.isInMemoryStorage=!0}return e(v)(t,[{key:"set",value:function(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}},{key:"get",value:function(e){return fe(this.cache_,e)?this.cache_[e]:null}},{key:"remove",value:function(e){delete this.cache_[e]}}]),t}(),Gt=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){var t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new Bt(t)}}catch(e){}return new Kt},Yt=Gt("localStorage"),Jt=Gt("sessionStorage"),Qt=new qe("@firebase/database"),Xt=(zt=1,function(){return zt++}),$t=function(e){var t=xe(e),n=new we;n.update(t);var r=n.digest();return q.encodeByteArray(r)},Zt=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var r="",i=0;i<t.length;i++){var a=t[i];Array.isArray(a)||a&&"object"==typeof a&&"number"==typeof a.length?r+=Zt.apply(null,a):r+="object"==typeof a?le(a):a,r+=" "}return r},en=null,tn=!0,nn=function(e,t){U(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(Qt.logLevel=Oe.VERBOSE,en=Qt.log.bind(Qt),t&&Jt.set("logging_enabled",!0)):"function"==typeof e?en=e:(en=null,Jt.remove("logging_enabled"))},rn=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];if(!0===tn&&(tn=!1,null===en&&!0===Jt.get("logging_enabled")&&nn(!0)),en){var r=Zt.apply(null,t);en(r)}},an=function(t){return function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];rn.apply(void 0,[t].concat(e(m)(r)))}},on=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var i="FIREBASE INTERNAL ERROR: "+Zt.apply(void 0,e(m)(n));Qt.error(i)},sn=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var i="FIREBASE FATAL ERROR: ".concat(Zt.apply(void 0,e(m)(n)));throw Qt.error(i),new Error(i)},un=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var i="FIREBASE WARNING: "+Zt.apply(void 0,e(m)(n));Qt.warn(i)},cn=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},ln="[MIN_NAME]",hn="[MAX_NAME]",dn=function(e,t){if(e===t)return 0;if(e===ln||t===hn)return-1;if(t===ln||e===hn)return 1;var n=wn(e),r=wn(t);return null!==n?null!==r?n-r==0?e.length-t.length:n-r:-1:null!==r?1:e<t?-1:1},fn=function(e,t){return e===t?0:e<t?-1:1},vn=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+le(t))},pn=function(e){if("object"!=typeof e||null===e)return le(e);var t=[];for(var n in e)t.push(n);t.sort();for(var r="{",i=0;i<t.length;i++)0!==i&&(r+=","),r+=le(t[i]),r+=":",r+=pn(e[t[i]]);return r+="}"},mn=function(e,t){var n=e.length;if(n<=t)return[e];for(var r=[],i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};
/**
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
 */function _n(e,t){for(var n in e)e.hasOwnProperty(n)&&t(n,e[n])}var yn=function(e){U(!cn(e),"Invalid JSON number");var t,n,r,i,a,o=1023;0===e?(n=0,r=0,t=1/e==-1/0?1:0):(t=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(n=(i=Math.min(Math.floor(Math.log(e)/Math.LN2),o))+o,r=Math.round(e*Math.pow(2,52-i)-Math.pow(2,52))):(n=0,r=Math.round(e/Math.pow(2,-1074))));var s=[];for(a=52;a;a-=1)s.push(r%2?1:0),r=Math.floor(r/2);for(a=11;a;a-=1)s.push(n%2?1:0),n=Math.floor(n/2);s.push(t?1:0),s.reverse();var u=s.join(""),c="";for(a=0;a<64;a+=8){var l=parseInt(u.substr(a,8),2).toString(16);1===l.length&&(l="0"+l),c+=l}return c.toLowerCase()};var gn=new RegExp("^-?(0*)\\d{1,10}$"),kn=-2147483648,bn=2147483647,wn=function(e){if(gn.test(e)){var t=Number(e);if(t>=kn&&t<=bn)return t}return null},In=function(e){try{e()}catch(e){setTimeout((function(){var t=e.stack||"";throw un("Exception was thrown by user callback.",t),e}),Math.floor(0))}},Tn=function(e,t){var n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n},Cn=function(){"use strict";function t(n,r){var i=this;e(f)(this,t),this.appName_=n,this.appCheckProvider=r,this.appCheck=null==r?void 0:r.getImmediate({optional:!0}),this.appCheck||null==r||r.get().then((function(e){return i.appCheck=e}))}return e(v)(t,[{key:"getToken",value:function(e){var t=this;return this.appCheck?this.appCheck.getToken(e):new Promise((function(n,r){var i=t;setTimeout((function(){i.appCheck?i.getToken(e).then(n,r):n(null)}),0)}))}},{key:"addTokenChangeListener",value:function(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((function(t){return t.addTokenListener(e)}))}},{key:"notifyForInvalidToken",value:function(){un('Provided AppCheck credentials for the app named "'.concat(this.appName_,'" ')+"are invalid. This usually indicates your app was not initialized correctly.")}}]),t}(),xn=function(){"use strict";function t(n,r,i){var a=this;e(f)(this,t),this.appName_=n,this.firebaseOptions_=r,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit((function(e){return a.auth_=e}))}return e(v)(t,[{key:"getToken",value:function(e){var t=this;return this.auth_?this.auth_.getToken(e).catch((function(e){return e&&"auth/token-not-initialized"===e.code?(rn("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e)})):new Promise((function(n,r){var i=t;setTimeout((function(){i.auth_?i.getToken(e).then(n,r):n(null)}),0)}))}},{key:"addTokenChangeListener",value:function(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((function(t){return t.addAuthTokenListener(e)}))}},{key:"removeTokenChangeListener",value:function(e){this.authProvider_.get().then((function(t){return t.removeAuthTokenListener(e)}))}},{key:"notifyForInvalidToken",value:function(){var e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',un(e)}}]),t}(),En=function(){"use strict";function t(n){e(f)(this,t),this.accessToken=n}return e(v)(t,[{key:"getToken",value:function(e){return Promise.resolve({accessToken:this.accessToken})}},{key:"addTokenChangeListener",value:function(e){e(this.accessToken)}},{key:"removeTokenChangeListener",value:function(e){}},{key:"notifyForInvalidToken",value:function(){}}]),t}();En.OWNER="owner";
/**
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
 */
var Sn="5",Rn=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Nn="websocket",Pn="long_polling",On=function(){"use strict";function t(n,r,i,a){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",u=arguments.length>6&&void 0!==arguments[6]&&arguments[6];e(f)(this,t),this.secure=r,this.namespace=i,this.webSocketOnly=a,this.nodeAdmin=o,this.persistenceKey=s,this.includeNamespaceInQueryParams=u,this._host=n.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Yt.get("host:"+n)||this._host}return e(v)(t,[{key:"isCacheableHost",value:function(){return"s-"===this.internalHost.substr(0,2)}},{key:"isCustomHost",value:function(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}},{key:"host",get:function(){return this._host},set:function(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Yt.set("host:"+this._host,this.internalHost))}},{key:"toString",value:function(){var e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}},{key:"toURLString",value:function(){var e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?"?ns=".concat(this.namespace):"";return"".concat(e).concat(this.host,"/").concat(t)}}]),t}();function An(e,t,n){var r;if(U("string"==typeof t,"typeof type must == string"),U("object"==typeof n,"typeof params must == object"),t===Nn)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==Pn)throw new Error("Unknown connection type: "+t);r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);var i=[];return _n(n,(function(e,t){i.push(e+"="+t)})),r+i.join("&")}
/**
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
 */var Dn=function(){"use strict";function t(){e(f)(this,t),this.counters_={}}return e(v)(t,[{key:"incrementCounter",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;fe(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}},{key:"get",value:function(){return B(this.counters_)}}]),t}(),Ln={},Mn={};
/**
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
 */function Fn(e){var t=e.toString();return Ln[t]||(Ln[t]=new Dn),Ln[t]}
/**
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
 */
var Un=function(){"use strict";function t(n){e(f)(this,t),this.onMessage_=n,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}return e(v)(t,[{key:"closeAfter",value:function(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}},{key:"handleResponse",value:function(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){var n=function(e){i[e]&&In((function(){r.onMessage_(i[e])}))},r=this,i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(var a=0;a<i.length;++a)n(a);if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}]),t}(),Wn="start",jn="close",qn=function(){"use strict";function t(n,r,i,a,o,s,u){var c=this;e(f)(this,t),this.connId=n,this.repoInfo=r,this.applicationId=i,this.appCheckToken=a,this.authToken=o,this.transportSessionId=s,this.lastSessionId=u,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=an(n),this.stats_=Fn(r),this.urlFn=function(e){return c.appCheckToken&&(e.ac=c.appCheckToken),An(r,Pn,e)}}return e(v)(t,[{key:"open",value:function(t,n){var r=this;this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Un(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((function(){r.log_("Timed out trying to connect."),r.onClosed_(),r.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if(Q()||"complete"===document.readyState)e();else{var t=!1,n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(function(){"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((function(){var t=r;if(!r.isClosed_){r.scriptTagHolder=new Hn((function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var a=e(y)(r,5),o=a[0],s=a[1],u=a[2];a[3],a[4];if(t.incrementIncomingBytes_(r),t.scriptTagHolder)if(t.connectTimeoutTimer_&&(clearTimeout(t.connectTimeoutTimer_),t.connectTimeoutTimer_=null),t.everConnected_=!0,o===Wn)t.id=s,t.password=u;else{if(o!==jn)throw new Error("Unrecognized command received: "+o);if(s){var c=t;t.scriptTagHolder.sendNewPolls=!1,t.myPacketOrderer.closeAfter(s,(function(){c.onClosed_()}))}else t.onClosed_()}}),(function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var a=e(y)(r,2),o=a[0],s=a[1];t.incrementIncomingBytes_(r),t.myPacketOrderer.handleResponse(o,s)}),(function(){t.onClosed_()}),r.urlFn);var n={start:"t"};n.ser=Math.floor(1e8*Math.random()),r.scriptTagHolder.uniqueCallbackIdentifier&&(n.cb=r.scriptTagHolder.uniqueCallbackIdentifier),n.v=Sn,r.transportSessionId&&(n.s=r.transportSessionId),r.lastSessionId&&(n.ls=r.lastSessionId),r.applicationId&&(n.p=r.applicationId),r.appCheckToken&&(n.ac=r.appCheckToken),"undefined"!=typeof location&&location.hostname&&Rn.test(location.hostname)&&(n.r="f");var i=r.urlFn(n);r.log_("Connecting via long-poll to "+i),r.scriptTagHolder.addTag(i,(function(){}))}}))}},{key:"start",value:function(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}},{key:"markConnectionHealthy",value:function(){}},{key:"shutdown_",value:function(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}},{key:"onClosed_",value:function(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}},{key:"close",value:function(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}},{key:"send",value:function(e){var t=le(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);for(var n=H(t),r=mn(n,1840),i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}},{key:"addDisconnectPingFrame",value:function(e,t){if(!Q()){this.myDisconnFrame=document.createElement("iframe");var n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}}},{key:"incrementIncomingBytes_",value:function(e){var t=le(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}],[{key:"forceAllow",value:function(){t.forceAllow_=!0}},{key:"forceDisallow",value:function(){t.forceDisallow_=!0}},{key:"isAvailable",value:function(){return!Q()&&(!!t.forceAllow_||!(t.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}}]),t}(),Hn=function(){"use strict";function t(n,r,i,a){if(e(f)(this,t),this.onDisconnect=i,this.urlFn=a,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,Q())this.commandCB=n,this.onMessageCB=r;else{this.uniqueCallbackIdentifier=Xt(),window["pLPCommand"+this.uniqueCallbackIdentifier]=n,window["pRTLPCB"+this.uniqueCallbackIdentifier]=r,this.myIFrame=t.createIFrame_();var o="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11))o='<script>document.domain="'+document.domain+'";<\/script>';var s="<html><body>"+o+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(s),this.myIFrame.doc.close()}catch(e){rn("frame writing exception"),e.stack&&rn(e.stack),rn(e)}}}return e(v)(t,[{key:"close",value:function(){if(this.alive=!1,this.myIFrame){var e=this;this.myIFrame.doc.body.innerHTML="",setTimeout((function(){null!==e.myIFrame&&(document.body.removeChild(e.myIFrame),e.myIFrame=null)}),Math.floor(0))}var t=this.onDisconnect;t&&(this.onDisconnect=null,t())}},{key:"startLongPoll",value:function(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}},{key:"newRequest_",value:function(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;var e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;for(var t=this.urlFn(e),n="",r=0;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;var i=this.pendingSegs.shift();n=n+"&seg"+r+"="+i.seg+"&ts"+r+"="+i.ts+"&d"+r+"="+i.d,r++}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}},{key:"enqueueSegment",value:function(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}},{key:"addLongPollTag_",value:function(e,t){var n=this;this.outstandingRequests.add(t);var r=function(){n.outstandingRequests.delete(t),n.newRequest_()},i=setTimeout(r,Math.floor(25e3));this.addTag(e,(function(){clearTimeout(i),r()}))}},{key:"addTag",value:function(e,t){var n=this;Q()?this.doNodeLongPoll(e,t):setTimeout((function(){try{var r=n;if(!n.sendNewPolls)return;var i=n.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){var e=i.readyState;e&&"loaded"!==e&&"complete"!==e||(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=function(){rn("Long-poll script failed to load: "+e),r.sendNewPolls=!1,r.close()},n.myIFrame.doc.body.appendChild(i)}catch(e){}}),Math.floor(1))}}],[{key:"createIFrame_",value:function(){var e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||rn("No IE domain setting required")}catch(n){var t=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+t+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}}]),t}(),Vn=null;
/**
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
 */"undefined"!=typeof MozWebSocket?Vn=MozWebSocket:"undefined"!=typeof WebSocket&&(Vn=WebSocket);var zn=function(){"use strict";function t(n,r,i,a,o,s,u){e(f)(this,t),this.connId=n,this.applicationId=i,this.appCheckToken=a,this.authToken=o,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=an(this.connId),this.stats_=Fn(r),this.connURL=t.connectionURL_(r,s,u,a,i),this.nodeAdmin=r.nodeAdmin}return e(v)(t,[{key:"open",value:function(e,t){var n=this;this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Yt.set("previous_websocket_failure",!0);try{var r;if(Q()){var i=this.nodeAdmin?"AdminNode":"Node";r={headers:{"User-Agent":"Firebase/".concat(Sn,"/").concat(Vt,"/").concat(c.platform,"/").concat(i),"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(r.headers.Authorization="Bearer ".concat(this.authToken)),this.appCheckToken&&(r.headers["X-Firebase-AppCheck"]=this.appCheckToken);var a={},o=0===this.connURL.indexOf("wss://")?a.HTTPS_PROXY||a.https_proxy:a.HTTP_PROXY||a.http_proxy;o&&(r.proxy={origin:o})}this.mySock=new Vn(this.connURL,[],r)}catch(e){this.log_("Error instantiating WebSocket.");var s=e.message||e.data;return s&&this.log_(s),void this.onClosed_()}this.mySock.onopen=function(){n.log_("Websocket connected."),n.everConnected_=!0},this.mySock.onclose=function(){n.log_("Websocket connection was disconnected."),n.mySock=null,n.onClosed_()},this.mySock.onmessage=function(e){n.handleIncomingFrame(e)},this.mySock.onerror=function(e){n.log_("WebSocket error.  Closing connection.");var t=e.message||e.data;t&&n.log_(t),n.onClosed_()}}},{key:"start",value:function(){}},{key:"markConnectionHealthy",value:function(){Yt.remove("previous_websocket_failure")}},{key:"appendFrame_",value:function(e){if(this.frames.push(e),this.frames.length===this.totalFrames){var t=this.frames.join("");this.frames=null;var n=ce(t);this.onMessage(n)}}},{key:"handleNewFrameCount_",value:function(e){this.totalFrames=e,this.frames=[]}},{key:"extractFrameCount_",value:function(e){if(U(null===this.frames,"We already have a frame buffer"),e.length<=6){var t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}},{key:"handleIncomingFrame",value:function(e){if(null!==this.mySock){var t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{var n=this.extractFrameCount_(t);null!==n&&this.appendFrame_(n)}}}},{key:"send",value:function(e){this.resetKeepAlive();var t=le(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);var n=mn(t,16384);n.length>1&&this.sendString_(String(n.length));for(var r=0;r<n.length;r++)this.sendString_(n[r])}},{key:"shutdown_",value:function(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}},{key:"onClosed_",value:function(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}},{key:"close",value:function(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}},{key:"resetKeepAlive",value:function(){var e=this;clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((function(){e.mySock&&e.sendString_("0"),e.resetKeepAlive()}),Math.floor(45e3))}},{key:"sendString_",value:function(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}],[{key:"connectionURL_",value:function(e,t,n,r,i){var a={};return a.v=Sn,!Q()&&"undefined"!=typeof location&&location.hostname&&Rn.test(location.hostname)&&(a.r="f"),t&&(a.s=t),n&&(a.ls=n),r&&(a.ac=r),i&&(a.p=i),An(e,Nn,a)}},{key:"forceDisallow",value:function(){t.forceDisallow_=!0}},{key:"isAvailable",value:function(){var e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){var n=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==Vn&&!t.forceDisallow_}},{key:"previouslyFailed",value:function(){return Yt.isInMemoryStorage||!0===Yt.get("previous_websocket_failure")}}]),t}();zn.responsesRequiredToBeHealthy=2,zn.healthyTimeout=3e4;
/**
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
 */
var Bn=function(){"use strict";function t(n){e(f)(this,t),this.initTransports_(n)}return e(v)(t,[{key:"initTransports_",value:function(e){var n=zn&&zn.isAvailable(),r=n&&!zn.previouslyFailed();if(e.webSocketOnly&&(n||un("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[zn];else{var i=this.transports_=[],a=!0,o=!1,s=void 0;try{for(var u,c=t.ALL_TRANSPORTS[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var l=u.value;l&&l.isAvailable()&&i.push(l)}}catch(e){o=!0,s=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw s}}t.globalTransportInitialized_=!0}}},{key:"initialTransport",value:function(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}},{key:"upgradeTransport",value:function(){return this.transports_.length>1?this.transports_[1]:null}}],[{key:"ALL_TRANSPORTS",get:function(){return[qn,zn]}},{key:"IS_TRANSPORT_INITIALIZED",get:function(){return this.globalTransportInitialized_}}]),t}();Bn.globalTransportInitialized_=!1;
/**
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
 */
var Kn=function(){"use strict";function t(n,r,i,a,o,s,u,c,l,h){e(f)(this,t),this.id=n,this.repoInfo_=r,this.applicationId_=i,this.appCheckToken_=a,this.authToken_=o,this.onMessage_=s,this.onReady_=u,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=an("c:"+this.id+":"),this.transportManager_=new Bn(r),this.log_("Connection created"),this.start_()}return e(v)(t,[{key:"start_",value:function(){var e=this,t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;var n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((function(){e.conn_&&e.conn_.open(n,r)}),Math.floor(0));var i=t.healthyTimeout||0;i>0&&(this.healthyTimeout_=Tn((function(){e.healthyTimeout_=null,e.isHealthy_||(e.conn_&&e.conn_.bytesReceived>102400?(e.log_("Connection exceeded healthy timeout but has received "+e.conn_.bytesReceived+" bytes.  Marking connection healthy."),e.isHealthy_=!0,e.conn_.markConnectionHealthy()):e.conn_&&e.conn_.bytesSent>10240?e.log_("Connection exceeded healthy timeout but has sent "+e.conn_.bytesSent+" bytes.  Leaving connection alive."):(e.log_("Closing unhealthy connection after timeout."),e.close()))}),Math.floor(i)))}},{key:"nextTransportId_",value:function(){return"c:"+this.id+":"+this.connectionCount++}},{key:"disconnReceiver_",value:function(e){var t=this;return function(n){e===t.conn_?t.onConnectionLost_(n):e===t.secondaryConn_?(t.log_("Secondary connection lost."),t.onSecondaryConnectionLost_()):t.log_("closing an old connection")}}},{key:"connReceiver_",value:function(e){var t=this;return function(n){2!==t.state_&&(e===t.rx_?t.onPrimaryMessageReceived_(n):e===t.secondaryConn_?t.onSecondaryMessageReceived_(n):t.log_("message on old connection"))}}},{key:"sendRequest",value:function(e){var t={t:"d",d:e};this.sendData_(t)}},{key:"tryCleanupConnection",value:function(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}},{key:"onSecondaryControl_",value:function(e){if("t"in e){var t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}},{key:"onSecondaryMessageReceived_",value:function(e){var t=vn("t",e),n=vn("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}},{key:"upgradeIfSecondaryHealthy_",value:function(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}},{key:"proceedWithUpgrade_",value:function(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}},{key:"onPrimaryMessageReceived_",value:function(e){var t=vn("t",e),n=vn("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}},{key:"onDataMessage_",value:function(e){this.onPrimaryResponse_(),this.onMessage_(e)}},{key:"onPrimaryResponse_",value:function(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}},{key:"onControl_",value:function(e){var t=vn("t",e);if("d"in e){var n=e.d;if("h"===t)this.onHandshake_(n);else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(var r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?on("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):on("Unknown control packet command: "+t)}}},{key:"onHandshake_",value:function(e){var t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Sn!==n&&un("Protocol version mismatch detected"),this.tryStartUpgrade_())}},{key:"tryStartUpgrade_",value:function(){var e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}},{key:"startUpgrade_",value:function(e){var t=this;this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;var n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Tn((function(){t.secondaryConn_&&(t.log_("Timed out trying to upgrade."),t.secondaryConn_.close())}),Math.floor(6e4))}},{key:"onReset_",value:function(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}},{key:"onConnectionEstablished_",value:function(e,t){var n=this;this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Tn((function(){n.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}},{key:"sendPingOnPrimaryIfNecessary_",value:function(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}},{key:"onSecondaryConnectionLost_",value:function(){var e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}},{key:"onConnectionLost_",value:function(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Yt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}},{key:"onConnectionShutdown_",value:function(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}},{key:"sendData_",value:function(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}},{key:"close",value:function(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}},{key:"closeConnections_",value:function(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}]),t}(),Gn=function(){"use strict";function t(){e(f)(this,t)}return e(v)(t,[{key:"put",value:function(e,t,n,r){}},{key:"merge",value:function(e,t,n,r){}},{key:"refreshAuthToken",value:function(e){}},{key:"refreshAppCheckToken",value:function(e){}},{key:"onDisconnectPut",value:function(e,t,n){}},{key:"onDisconnectMerge",value:function(e,t,n){}},{key:"onDisconnectCancel",value:function(e,t){}},{key:"reportStats",value:function(e){}}]),t}(),Yn=function(){"use strict";function t(n){e(f)(this,t),this.allowedEvents_=n,this.listeners_={},U(Array.isArray(n)&&n.length>0,"Requires a non-empty array")}return e(v)(t,[{key:"trigger",value:function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(Array.isArray(this.listeners_[t]))for(var a=e(m)(this.listeners_[t]),o=0;o<a.length;o++)a[o].callback.apply(a[o].context,r)}},{key:"on",value:function(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});var r=this.getInitialEvent(e);r&&t.apply(n,r)}},{key:"off",value:function(e,t,n){this.validateEventType_(e);for(var r=this.listeners_[e]||[],i=0;i<r.length;i++)if(r[i].callback===t&&(!n||n===r[i].context))return void r.splice(i,1)}},{key:"validateEventType_",value:function(e){U(this.allowedEvents_.find((function(t){return t===e})),"Unknown event: "+e)}}]),t}(),Jn=function(t){"use strict";e(k)(r,t);var n=e(w)(r);function r(){var t;return e(f)(this,r),(t=n.call(this,["online"])).online_=!0,"undefined"==typeof window||void 0===window.addEventListener||Y()||(window.addEventListener("online",(function(){t.online_||(t.online_=!0,t.trigger("online",!0))}),!1),window.addEventListener("offline",(function(){t.online_&&(t.online_=!1,t.trigger("online",!1))}),!1)),t}return e(v)(r,[{key:"getInitialEvent",value:function(e){return U("online"===e,"Unknown event type: "+e),[this.online_]}},{key:"currentlyOnline",value:function(){return this.online_}}],[{key:"getInstance",value:function(){return new r}}]),r}(Yn),Qn=function(){"use strict";function t(n,r){if(e(f)(this,t),void 0===r){this.pieces_=n.split("/");for(var i=0,a=0;a<this.pieces_.length;a++)this.pieces_[a].length>0&&(this.pieces_[i]=this.pieces_[a],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=n,this.pieceNum_=r}return e(v)(t,[{key:"toString",value:function(){for(var e="",t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}]),t}();function Xn(){return new Qn("")}function $n(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Zn(e){return e.pieces_.length-e.pieceNum_}function er(e){var t=e.pieceNum_;return t<e.pieces_.length&&t++,new Qn(e.pieces_,t)}function tr(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function nr(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e.pieces_.slice(e.pieceNum_+t)}function rr(e){if(e.pieceNum_>=e.pieces_.length)return null;for(var t=[],n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new Qn(t,0)}function ir(e,t){for(var n=[],r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);if(t instanceof Qn)for(var i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else for(var a=t.split("/"),o=0;o<a.length;o++)a[o].length>0&&n.push(a[o]);return new Qn(n,0)}function ar(e){return e.pieceNum_>=e.pieces_.length}function or(e,t){var n=$n(e),r=$n(t);if(null===n)return t;if(n===r)return or(er(e),er(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function sr(e,t){for(var n=nr(e,0),r=nr(t,0),i=0;i<n.length&&i<r.length;i++){var a=dn(n[i],r[i]);if(0!==a)return a}return n.length===r.length?0:n.length<r.length?-1:1}function ur(e,t){if(Zn(e)!==Zn(t))return!1;for(var n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function cr(e,t){var n=e.pieceNum_,r=t.pieceNum_;if(Zn(e)>Zn(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}var lr=function t(n,r){"use strict";e(f)(this,t),this.errorPrefix_=r,this.parts_=nr(n,0),this.byteLength_=Math.max(1,this.parts_.length);for(var i=0;i<this.parts_.length;i++)this.byteLength_+=Ee(this.parts_[i]);hr(this)};function hr(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+dr(e))}function dr(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
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
 */var fr=function(t){"use strict";e(k)(r,t);var n=e(w)(r);function r(){var t,i,a;return e(f)(this,r),t=n.call(this,["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(a="visibilitychange",i="hidden"):void 0!==document.mozHidden?(a="mozvisibilitychange",i="mozHidden"):void 0!==document.msHidden?(a="msvisibilitychange",i="msHidden"):void 0!==document.webkitHidden&&(a="webkitvisibilitychange",i="webkitHidden")),t.visible_=!0,a&&document.addEventListener(a,(function(){var e=!document[i];e!==t.visible_&&(t.visible_=e,t.trigger("visible",e))}),!1),t}return e(v)(r,[{key:"getInitialEvent",value:function(e){return U("visible"===e,"Unknown event type: "+e),[this.visible_]}}],[{key:"getInstance",value:function(){return new r}}]),r}(Yn),vr=1e3,pr=function(t){"use strict";e(k)(r,t);var n=e(w)(r);function r(t,i,a,o,s,u,c,l){var h;if(e(f)(this,r),(h=n.call(this)).repoInfo_=t,h.applicationId_=i,h.onDataUpdate_=a,h.onConnectStatus_=o,h.onServerInfoUpdate_=s,h.authTokenProvider_=u,h.appCheckTokenProvider_=c,h.authOverride_=l,h.id=r.nextPersistentConnectionId_++,h.log_=an("p:"+h.id+":"),h.interruptReasons_={},h.listens=new Map,h.outstandingPuts_=[],h.outstandingGets_=[],h.outstandingPutCount_=0,h.outstandingGetCount_=0,h.onDisconnectRequestQueue_=[],h.connected_=!1,h.reconnectDelay_=vr,h.maxReconnectDelay_=3e5,h.securityDebugCallback_=null,h.lastSessionId=null,h.establishConnectionTimer_=null,h.visible_=!1,h.requestCBHash_={},h.requestNumber_=0,h.realtime_=null,h.authToken_=null,h.appCheckToken_=null,h.forceTokenRefresh_=!1,h.invalidAuthTokenCount_=0,h.invalidAppCheckTokenCount_=0,h.firstConnection_=!0,h.lastConnectionAttemptTime_=null,h.lastConnectionEstablishedTime_=null,l&&!Q())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");return fr.getInstance().on("visible",h.onVisible_,e(g)(h)),-1===t.host.indexOf("fblocal")&&Jn.getInstance().on("online",h.onOnline_,e(g)(h)),h}return e(v)(r,[{key:"sendRequest",value:function(e,t,n){var r=++this.requestNumber_,i={r:r,a:e,b:t};this.log_(le(i)),U(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}},{key:"get",value:function(e){this.initConnection_();var t=new re,n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:function(e){var n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;var r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}},{key:"listen",value:function(e,t,n,r){this.initConnection_();var i=e._queryIdentifier,a=e._path.toString();this.log_("Listen called for "+a+" "+i),this.listens.has(a)||this.listens.set(a,new Map),U(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),U(!this.listens.get(a).has(i),"listen() called twice for same path/queryId.");var o={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(a).set(i,o),this.connected_&&this.sendListen_(o)}},{key:"sendGet_",value:function(e){var t=this,n=this.outstandingGets_[e];this.sendRequest("g",n.request,(function(r){delete t.outstandingGets_[e],t.outstandingGetCount_--,0===t.outstandingGetCount_&&(t.outstandingGets_=[]),n.onComplete&&n.onComplete(r)}))}},{key:"sendListen_",value:function(e){var t=this,n=e.query,i=n._path.toString(),a=n._queryIdentifier;this.log_("Listen on "+i+" for "+a);var o={p:i};e.tag&&(o.q=n._queryObject,o.t=e.tag),o.h=e.hashFn(),this.sendRequest("q",o,(function(o){var s=o.d,u=o.s;r.warnOnListenWarnings_(s,n),(t.listens.get(i)&&t.listens.get(i).get(a))===e&&(t.log_("listen response",o),"ok"!==u&&t.removeListen_(i,a),e.onComplete&&e.onComplete(u,s))}))}},{key:"refreshAuthToken",value:function(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(function(){})),this.reduceReconnectDelayIfAdminCredential_(e)}},{key:"reduceReconnectDelayIfAdminCredential_",value:function(e){var t;(e&&40===e.length||"object"==typeof(t=he(e).claims)&&!0===t.admin)&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}},{key:"refreshAppCheckToken",value:function(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(function(){}))}},{key:"tryAuth",value:function(){if(this.connected_&&this.authToken_){var e=this,t=this.authToken_,n=de(t)?"auth":"gauth",r={cred:t};null===this.authOverride_?r.noauth=!0:"object"==typeof this.authOverride_&&(r.authvar=this.authOverride_),this.sendRequest(n,r,(function(n){var r=n.s,i=n.d||"error";e.authToken_===t&&("ok"===r?e.invalidAuthTokenCount_=0:e.onAuthRevoked_(r,i))}))}}},{key:"tryAppCheck",value:function(){var e=this;this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(function(t){var n=t.s,r=t.d||"error";"ok"===n?e.invalidAppCheckTokenCount_=0:e.onAppCheckRevoked_(n,r)}))}},{key:"unlisten",value:function(e,t){var n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),U(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(n,r)&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}},{key:"sendUnlisten_",value:function(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);var i={p:e};r&&(i.q=n,i.t=r),this.sendRequest("n",i)}},{key:"onDisconnectPut",value:function(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}},{key:"onDisconnectMerge",value:function(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}},{key:"onDisconnectCancel",value:function(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}},{key:"sendOnDisconnect_",value:function(e,t,n,r){var i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,(function(e){r&&setTimeout((function(){r(e.s,e.d)}),Math.floor(0))}))}},{key:"put",value:function(e,t,n,r){this.putInternal("p",e,t,n,r)}},{key:"merge",value:function(e,t,n,r){this.putInternal("m",e,t,n,r)}},{key:"putInternal",value:function(e,t,n,r,i){this.initConnection_();var a={p:t,d:n};void 0!==i&&(a.h=i),this.outstandingPuts_.push({action:e,request:a,onComplete:r}),this.outstandingPutCount_++;var o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}},{key:"sendPut_",value:function(e){var t=this,n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,(function(r){t.log_(n+" response",r),delete t.outstandingPuts_[e],t.outstandingPutCount_--,0===t.outstandingPutCount_&&(t.outstandingPuts_=[]),i&&i(r.s,r.d)}))}},{key:"reportStats",value:function(e){if(this.connected_){var t=this,n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,(function(e){if("ok"!==e.s){var n=e.d;t.log_("reportStats","Error sending stats: "+n)}}))}}},{key:"onDataMessage_",value:function(e){if("r"in e){this.log_("from server: "+le(e));var t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}},{key:"onDataPush_",value:function(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):on("Unrecognized action received from server: "+le(e)+"\nAre you using the latest client?")}},{key:"onReady_",value:function(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}},{key:"scheduleConnect_",value:function(e){var t=this;U(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((function(){t.establishConnectionTimer_=null,t.establishConnection_()}),Math.floor(e))}},{key:"initConnection_",value:function(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}},{key:"onVisible_",value:function(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=vr,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}},{key:"onOnline_",value:function(e){e?(this.log_("Browser went online."),this.reconnectDelay_=vr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}},{key:"onRealtimeDisconnect_",value:function(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=vr),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();var e=(new Date).getTime()-this.lastConnectionAttemptTime_,t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}},{key:"establishConnection_",value:function(){var t=this;return e(d)(e(_).mark((function n(){var i,a,o,s,u,c,l,h,d,f,v,p,m;return e(_).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t.shouldReconnect_()){n.next=31;break}return t.log_("Making a connection attempt"),t.lastConnectionAttemptTime_=(new Date).getTime(),t.lastConnectionEstablishedTime_=null,i=t.onDataMessage_.bind(t),a=t.onReady_.bind(t),o=t.onRealtimeDisconnect_.bind(t),s=t.id+":"+r.nextConnectionId_++,u=t.lastSessionId,c=!1,l=null,h=function(){l?l.close():(c=!0,o())},d=function(e){U(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(e)},t.realtime_={close:h,sendRequest:d},f=t.forceTokenRefresh_,t.forceTokenRefresh_=!1,n.prev=16,n.t0=e(y),n.next=20,Promise.all([t.authTokenProvider_.getToken(f),t.appCheckTokenProvider_.getToken(f)]);case 20:n.t1=n.sent,v=(0,n.t0)(n.t1,2),p=v[0],m=v[1],c?rn("getToken() completed but was canceled"):(rn("getToken() completed. Creating connection."),t.authToken_=p&&p.accessToken,t.appCheckToken_=m&&m.token,l=new Kn(s,t.repoInfo_,t.applicationId_,t.appCheckToken_,t.authToken_,i,a,o,(function(e){un(e+" ("+t.repoInfo_.toString()+")"),t.interrupt("server_kill")}),u)),n.next=31;break;case 27:n.prev=27,n.t2=n.catch(16),t.log_("Failed to get token: "+n.t2),c||(t.repoInfo_.nodeAdmin&&un(n.t2),h());case 31:case"end":return n.stop()}}),n,null,[[16,27]])})))()}},{key:"interrupt",value:function(e){rn("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}},{key:"resume",value:function(e){rn("Resuming connection for reason: "+e),delete this.interruptReasons_[e],pe(this.interruptReasons_)&&(this.reconnectDelay_=vr,this.realtime_||this.scheduleConnect_(0))}},{key:"handleTimestamp_",value:function(e){var t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}},{key:"cancelSentTransactions_",value:function(){for(var e=0;e<this.outstandingPuts_.length;e++){var t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}},{key:"onListenRevoked_",value:function(e,t){var n;n=t?t.map((function(e){return pn(e)})).join("$"):"default";var r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}},{key:"removeListen_",value:function(e,t){var n,r=new Qn(e).toString();if(this.listens.has(r)){var i=this.listens.get(r);n=i.get(t),i.delete(t),0===i.size&&this.listens.delete(r)}else n=void 0;return n}},{key:"onAuthRevoked_",value:function(e,t){rn("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}},{key:"onAppCheckRevoked_",value:function(e,t){rn("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}},{key:"onSecurityDebugPacket_",value:function(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}},{key:"restoreState_",value:function(){this.tryAuth(),this.tryAppCheck();var e=!0,t=!1,n=void 0,r=!0,i=!1,a=void 0;try{for(var o,s=this.listens.values()[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;try{for(var c,l=u.values()[Symbol.iterator]();!(e=(c=l.next()).done);e=!0){var h=c.value;this.sendListen_(h)}}catch(e){t=!0,n=e}finally{try{e||null==l.return||l.return()}finally{if(t)throw n}}}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}for(var d=0;d<this.outstandingPuts_.length;d++)this.outstandingPuts_[d]&&this.sendPut_(d);for(;this.onDisconnectRequestQueue_.length;){var f=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(f.action,f.pathString,f.data,f.onComplete)}for(var v=0;v<this.outstandingGets_.length;v++)this.outstandingGets_[v]&&this.sendGet_(v)}},{key:"sendConnectStats_",value:function(){var e={},t="js";Q()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+Vt.replace(/\./g,"-")]=1,Y()?e["framework.cordova"]=1:J()&&(e["framework.reactnative"]=1),this.reportStats(e)}},{key:"shouldReconnect_",value:function(){var e=Jn.getInstance().currentlyOnline();return pe(this.interruptReasons_)&&e}}],[{key:"warnOnListenWarnings_",value:function(e,t){if(e&&"object"==typeof e&&fe(e,"w")){var n=ve(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){var r='".indexOn": "'+t._queryParams.getIndex().toString()+'"',i=t._path.toString();un("Using an unspecified index. Your data will be downloaded and "+"filtered on the client. Consider adding ".concat(r," at ")+"".concat(i," to your security rules for better performance."))}}}}]),r}(Gn);
/**
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
 */pr.nextPersistentConnectionId_=0,pr.nextConnectionId_=0;
/**
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
 */
var mr,_r=function(){"use strict";function t(n,r){e(f)(this,t),this.name=n,this.node=r}return e(v)(t,null,[{key:"Wrap",value:function(e,n){return new t(e,n)}}]),t}(),yr=function(){"use strict";function t(){e(f)(this,t)}return e(v)(t,[{key:"getCompare",value:function(){return this.compare.bind(this)}},{key:"indexedValueChanged",value:function(e,t){var n=new _r(ln,e),r=new _r(ln,t);return 0!==this.compare(n,r)}},{key:"minPost",value:function(){return _r.MIN}}]),t}(),gr=function(t){"use strict";e(k)(r,t);var n=e(w)(r);function r(){return e(f)(this,r),n.apply(this,arguments)}return e(v)(r,[{key:"compare",value:function(e,t){return dn(e.name,t.name)}},{key:"isDefinedOn",value:function(e){throw W("KeyIndex.isDefinedOn not expected to be called.")}},{key:"indexedValueChanged",value:function(e,t){return!1}},{key:"minPost",value:function(){return _r.MIN}},{key:"maxPost",value:function(){return new _r(hn,mr)}},{key:"makePost",value:function(e,t){return U("string"==typeof e,"KeyIndex indexValue must always be a string."),new _r(e,mr)}},{key:"toString",value:function(){return".key"}}],[{key:"__EMPTY_NODE",get:function(){return mr},set:function(e){mr=e}}]),r}(yr),kr=new gr,br=function(){"use strict";function t(n,r,i,a){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;e(f)(this,t),this.isReverse_=a,this.resultGenerator_=o,this.nodeStack_=[];for(var s=1;!n.isEmpty();)if(s=r?i(n.key,r):1,a&&(s*=-1),s<0)n=this.isReverse_?n.left:n.right;else{if(0===s){this.nodeStack_.push(n);break}this.nodeStack_.push(n),n=this.isReverse_?n.right:n.left}}return e(v)(t,[{key:"getNext",value:function(){if(0===this.nodeStack_.length)return null;var e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}},{key:"hasNext",value:function(){return this.nodeStack_.length>0}},{key:"peek",value:function(){if(0===this.nodeStack_.length)return null;var e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}]),t}(),wr=function(){"use strict";function t(n,r,i,a,o){e(f)(this,t),this.key=n,this.value=r,this.color=null!=i?i:t.RED,this.left=null!=a?a:Cr.EMPTY_NODE,this.right=null!=o?o:Cr.EMPTY_NODE}return e(v)(t,[{key:"copy",value:function(e,n,r,i,a){return new t(null!=e?e:this.key,null!=n?n:this.value,null!=r?r:this.color,null!=i?i:this.left,null!=a?a:this.right)}},{key:"count",value:function(){return this.left.count()+1+this.right.count()}},{key:"isEmpty",value:function(){return!1}},{key:"inorderTraversal",value:function(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}},{key:"reverseTraversal",value:function(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}},{key:"min_",value:function(){return this.left.isEmpty()?this:this.left.min_()}},{key:"minKey",value:function(){return this.min_().key}},{key:"maxKey",value:function(){return this.right.isEmpty()?this.key:this.right.maxKey()}},{key:"insert",value:function(e,t,n){var r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp_()}},{key:"removeMin_",value:function(){if(this.left.isEmpty())return Cr.EMPTY_NODE;var e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),(e=e.copy(null,null,null,e.left.removeMin_(),null)).fixUp_()}},{key:"remove",value:function(e,t){var n,r;if(t(e,(n=this).key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Cr.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}},{key:"isRed_",value:function(){return this.color}},{key:"fixUp_",value:function(){var e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}},{key:"moveRedLeft_",value:function(){var e=this.colorFlip_();return e.right.left.isRed_()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight_())).rotateLeft_()).colorFlip_()),e}},{key:"moveRedRight_",value:function(){var e=this.colorFlip_();return e.left.left.isRed_()&&(e=(e=e.rotateRight_()).colorFlip_()),e}},{key:"rotateLeft_",value:function(){var e=this.copy(null,null,t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}},{key:"rotateRight_",value:function(){var e=this.copy(null,null,t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}},{key:"colorFlip_",value:function(){var e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}},{key:"checkMaxDepth_",value:function(){var e=this.check_();return Math.pow(2,e)<=this.count()+1}},{key:"check_",value:function(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");var e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}]),t}();
/**
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
 */wr.RED=!0,wr.BLACK=!1;var Ir,Tr=function(){"use strict";function t(){e(f)(this,t)}return e(v)(t,[{key:"copy",value:function(e,t,n,r,i){return this}},{key:"insert",value:function(e,t,n){return new wr(e,t,null)}},{key:"remove",value:function(e,t){return this}},{key:"count",value:function(){return 0}},{key:"isEmpty",value:function(){return!0}},{key:"inorderTraversal",value:function(e){return!1}},{key:"reverseTraversal",value:function(e){return!1}},{key:"minKey",value:function(){return null}},{key:"maxKey",value:function(){return null}},{key:"check_",value:function(){return 0}},{key:"isRed_",value:function(){return!1}}]),t}(),Cr=function(){"use strict";function t(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.EMPTY_NODE;e(f)(this,t),this.comparator_=n,this.root_=r}return e(v)(t,[{key:"insert",value:function(e,n){return new t(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,wr.BLACK,null,null))}},{key:"remove",value:function(e){return new t(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,wr.BLACK,null,null))}},{key:"get",value:function(e){for(var t,n=this.root_;!n.isEmpty();){if(0===(t=this.comparator_(e,n.key)))return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}},{key:"getPredecessorKey",value:function(e){for(var t,n=this.root_,r=null;!n.isEmpty();){if(0===(t=this.comparator_(e,n.key))){if(n.left.isEmpty())return r?r.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}},{key:"isEmpty",value:function(){return this.root_.isEmpty()}},{key:"count",value:function(){return this.root_.count()}},{key:"minKey",value:function(){return this.root_.minKey()}},{key:"maxKey",value:function(){return this.root_.maxKey()}},{key:"inorderTraversal",value:function(e){return this.root_.inorderTraversal(e)}},{key:"reverseTraversal",value:function(e){return this.root_.reverseTraversal(e)}},{key:"getIterator",value:function(e){return new br(this.root_,null,this.comparator_,!1,e)}},{key:"getIteratorFrom",value:function(e,t){return new br(this.root_,e,this.comparator_,!1,t)}},{key:"getReverseIteratorFrom",value:function(e,t){return new br(this.root_,e,this.comparator_,!0,t)}},{key:"getReverseIterator",value:function(e){return new br(this.root_,null,this.comparator_,!0,e)}}]),t}();
/**
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
 */
function xr(e,t){return dn(e.name,t.name)}function Er(e,t){return dn(e,t)}
/**
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
 */Cr.EMPTY_NODE=new Tr;var Sr,Rr,Nr,Pr=function(e){return"number"==typeof e?"number:"+yn(e):"string:"+e},Or=function(e){if(e.isLeafNode()){var t=e.val();U("string"==typeof t||"number"==typeof t||"object"==typeof t&&fe(t,".sv"),"Priority must be a string or number.")}else U(e===Ir||e.isEmpty(),"priority of unexpected type.");U(e===Ir||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")},Ar=function(){"use strict";function t(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.__childrenNodeConstructor.EMPTY_NODE;e(f)(this,t),this.value_=n,this.priorityNode_=r,this.lazyHash_=null,U(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Or(this.priorityNode_)}return e(v)(t,[{key:"isLeafNode",value:function(){return!0}},{key:"getPriority",value:function(){return this.priorityNode_}},{key:"updatePriority",value:function(e){return new t(this.value_,e)}},{key:"getImmediateChild",value:function(e){return".priority"===e?this.priorityNode_:t.__childrenNodeConstructor.EMPTY_NODE}},{key:"getChild",value:function(e){return ar(e)?this:".priority"===$n(e)?this.priorityNode_:t.__childrenNodeConstructor.EMPTY_NODE}},{key:"hasChild",value:function(){return!1}},{key:"getPredecessorChildName",value:function(e,t){return null}},{key:"updateImmediateChild",value:function(e,n){return".priority"===e?this.updatePriority(n):n.isEmpty()&&".priority"!==e?this:t.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}},{key:"updateChild",value:function(e,n){var r=$n(e);return null===r?n:n.isEmpty()&&".priority"!==r?this:(U(".priority"!==r||1===Zn(e),".priority must be the last token in a path"),this.updateImmediateChild(r,t.__childrenNodeConstructor.EMPTY_NODE.updateChild(er(e),n)))}},{key:"isEmpty",value:function(){return!1}},{key:"numChildren",value:function(){return 0}},{key:"forEachChild",value:function(e,t){return!1}},{key:"val",value:function(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}},{key:"hash",value:function(){if(null===this.lazyHash_){var t="";this.priorityNode_.isEmpty()||(t+="priority:"+Pr(this.priorityNode_.val())+":");var n=e(jt)(this.value_);t+=n+":",t+="number"===n?yn(this.value_):this.value_,this.lazyHash_=$t(t)}return this.lazyHash_}},{key:"getValue",value:function(){return this.value_}},{key:"compareTo",value:function(e){return e===t.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof t.__childrenNodeConstructor?-1:(U(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}},{key:"compareToLeafNode_",value:function(n){var r=e(jt)(n.value_),i=e(jt)(this.value_),a=t.VALUE_TYPE_ORDER.indexOf(r),o=t.VALUE_TYPE_ORDER.indexOf(i);return U(a>=0,"Unknown leaf type: "+r),U(o>=0,"Unknown leaf type: "+i),a===o?"object"===i?0:this.value_<n.value_?-1:this.value_===n.value_?0:1:o-a}},{key:"withIndex",value:function(){return this}},{key:"isIndexed",value:function(){return!0}},{key:"equals",value:function(e){if(e===this)return!0;if(e.isLeafNode()){var t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}],[{key:"__childrenNodeConstructor",get:function(){return Sr},set:function(e){Sr=e}}]),t}();Ar.VALUE_TYPE_ORDER=["object","boolean","number","string"];var Dr,Lr,Mr=function(t){"use strict";e(k)(r,t);var n=e(w)(r);function r(){return e(f)(this,r),n.apply(this,arguments)}return e(v)(r,[{key:"compare",value:function(e,t){var n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return 0===i?dn(e.name,t.name):i}},{key:"isDefinedOn",value:function(e){return!e.getPriority().isEmpty()}},{key:"indexedValueChanged",value:function(e,t){return!e.getPriority().equals(t.getPriority())}},{key:"minPost",value:function(){return _r.MIN}},{key:"maxPost",value:function(){return new _r(hn,new Ar("[PRIORITY-POST]",Nr))}},{key:"makePost",value:function(e,t){var n=Rr(e);return new _r(t,new Ar("[PRIORITY-POST]",n))}},{key:"toString",value:function(){return".priority"}}]),r}(yr),Fr=new Mr,Ur=Math.log(2),Wr=function(){"use strict";function t(n){e(f)(this,t);var r;this.count=(r=n+1,parseInt(Math.log(r)/Ur,10)),this.current_=this.count-1;var i,a=(i=this.count,parseInt(Array(i+1).join("1"),2));this.bits_=n+1&a}return e(v)(t,[{key:"nextBitIsOne",value:function(){var e=!(this.bits_&1<<this.current_);return this.current_--,e}}]),t}(),jr=function(e,t,n,r){e.sort(t);var i=function(t,r){var a,o,s=r-t;if(0===s)return null;if(1===s)return a=e[t],o=n?n(a):a,new wr(o,a.node,wr.BLACK,null,null);var u=parseInt(s/2,10)+t,c=i(t,u),l=i(u+1,r);return a=e[u],o=n?n(a):a,new wr(o,a.node,wr.BLACK,c,l)},a=function(t){for(var r=null,a=null,o=e.length,s=function(t,r){var a=o-t,s=o;o-=t;var c=i(a+1,s),l=e[a],h=n?n(l):l;u(new wr(h,l.node,r,null,c))},u=function(e){r?(r.left=e,r=e):(a=e,r=e)},c=0;c<t.count;++c){var l=t.nextBitIsOne(),h=Math.pow(2,t.count-(c+1));l?s(h,wr.BLACK):(s(h,wr.BLACK),s(h,wr.RED))}return a}(new Wr(e.length));return new Cr(r||t,a)},qr={},Hr=function(){"use strict";function t(n,r){e(f)(this,t),this.indexes_=n,this.indexSet_=r}return e(v)(t,[{key:"get",value:function(e){var t=ve(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Cr?t:null}},{key:"hasIndex",value:function(e){return fe(this.indexSet_,e.toString())}},{key:"addIndex",value:function(e,n){U(e!==kr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");for(var r,i=[],a=!1,o=n.getIterator(_r.Wrap),s=o.getNext();s;)a=a||e.isDefinedOn(s.node),i.push(s),s=o.getNext();r=a?jr(i,e.getCompare()):qr;var u=e.toString(),c=Object.assign({},this.indexSet_);c[u]=e;var l=Object.assign({},this.indexes_);return l[u]=r,new t(l,c)}},{key:"addToIndexes",value:function(e,n){var r=this;return new t(me(this.indexes_,(function(t,i){var a=ve(r.indexSet_,i);if(U(a,"Missing index implementation for "+i),t===qr){if(a.isDefinedOn(e.node)){for(var o=[],s=n.getIterator(_r.Wrap),u=s.getNext();u;)u.name!==e.name&&o.push(u),u=s.getNext();return o.push(e),jr(o,a.getCompare())}return qr}var c=n.get(e.name),l=t;return c&&(l=l.remove(new _r(e.name,c))),l.insert(e,e.node)})),this.indexSet_)}},{key:"removeFromIndexes",value:function(e,n){return new t(me(this.indexes_,(function(t){if(t===qr)return t;var r=n.get(e.name);return r?t.remove(new _r(e.name,r)):t})),this.indexSet_)}}],[{key:"Default",get:function(){return U(qr&&Fr,"ChildrenNode.ts has not been loaded"),Dr=Dr||new t({".priority":qr},{".priority":Fr})}}]),t}(),Vr=function(){"use strict";function t(n,r,i){e(f)(this,t),this.children_=n,this.priorityNode_=r,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Or(this.priorityNode_),this.children_.isEmpty()&&U(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}return e(v)(t,[{key:"isLeafNode",value:function(){return!1}},{key:"getPriority",value:function(){return this.priorityNode_||Lr}},{key:"updatePriority",value:function(e){return this.children_.isEmpty()?this:new t(this.children_,e,this.indexMap_)}},{key:"getImmediateChild",value:function(e){if(".priority"===e)return this.getPriority();var t=this.children_.get(e);return null===t?Lr:t}},{key:"getChild",value:function(e){var t=$n(e);return null===t?this:this.getImmediateChild(t).getChild(er(e))}},{key:"hasChild",value:function(e){return null!==this.children_.get(e)}},{key:"updateImmediateChild",value:function(e,n){if(U(n,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(n);var r,i,a=new _r(e,n);n.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(a,this.children_)):(r=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(a,this.children_));var o=r.isEmpty()?Lr:this.priorityNode_;return new t(r,o,i)}},{key:"updateChild",value:function(e,t){var n=$n(e);if(null===n)return t;U(".priority"!==$n(e)||1===Zn(e),".priority must be the last token in a path");var r=this.getImmediateChild(n).updateChild(er(e),t);return this.updateImmediateChild(n,r)}},{key:"isEmpty",value:function(){return this.children_.isEmpty()}},{key:"numChildren",value:function(){return this.children_.count()}},{key:"val",value:function(e){if(this.isEmpty())return null;var n={},r=0,i=0,a=!0;if(this.forEachChild(Fr,(function(o,s){n[o]=s.val(e),r++,a&&t.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):a=!1})),!e&&a&&i<2*r){var o=[];for(var s in n)o[s]=n[s];return o}return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}},{key:"hash",value:function(){if(null===this.lazyHash_){var e="";this.getPriority().isEmpty()||(e+="priority:"+Pr(this.getPriority().val())+":"),this.forEachChild(Fr,(function(t,n){var r=n.hash();""!==r&&(e+=":"+t+":"+r)})),this.lazyHash_=""===e?"":$t(e)}return this.lazyHash_}},{key:"getPredecessorChildName",value:function(e,t,n){var r=this.resolveIndex_(n);if(r){var i=r.getPredecessorKey(new _r(e,t));return i?i.name:null}return this.children_.getPredecessorKey(e)}},{key:"getFirstChildName",value:function(e){var t=this.resolveIndex_(e);if(t){var n=t.minKey();return n&&n.name}return this.children_.minKey()}},{key:"getFirstChild",value:function(e){var t=this.getFirstChildName(e);return t?new _r(t,this.children_.get(t)):null}},{key:"getLastChildName",value:function(e){var t=this.resolveIndex_(e);if(t){var n=t.maxKey();return n&&n.name}return this.children_.maxKey()}},{key:"getLastChild",value:function(e){var t=this.getLastChildName(e);return t?new _r(t,this.children_.get(t)):null}},{key:"forEachChild",value:function(e,t){var n=this.resolveIndex_(e);return n?n.inorderTraversal((function(e){return t(e.name,e.node)})):this.children_.inorderTraversal(t)}},{key:"getIterator",value:function(e){return this.getIteratorFrom(e.minPost(),e)}},{key:"getIteratorFrom",value:function(e,t){var n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(function(e){return e}));for(var r=this.children_.getIteratorFrom(e.name,_r.Wrap),i=r.peek();null!=i&&t.compare(i,e)<0;)r.getNext(),i=r.peek();return r}},{key:"getReverseIterator",value:function(e){return this.getReverseIteratorFrom(e.maxPost(),e)}},{key:"getReverseIteratorFrom",value:function(e,t){var n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(function(e){return e}));for(var r=this.children_.getReverseIteratorFrom(e.name,_r.Wrap),i=r.peek();null!=i&&t.compare(i,e)>0;)r.getNext(),i=r.peek();return r}},{key:"compareTo",value:function(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===zr?-1:0}},{key:"withIndex",value:function(e){if(e===kr||this.indexMap_.hasIndex(e))return this;var n=this.indexMap_.addIndex(e,this.children_);return new t(this.children_,this.priorityNode_,n)}},{key:"isIndexed",value:function(e){return e===kr||this.indexMap_.hasIndex(e)}},{key:"equals",value:function(e){if(e===this)return!0;if(e.isLeafNode())return!1;var t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){for(var n=this.getIterator(Fr),r=t.getIterator(Fr),i=n.getNext(),a=r.getNext();i&&a;){if(i.name!==a.name||!i.node.equals(a.node))return!1;i=n.getNext(),a=r.getNext()}return null===i&&null===a}return!1}return!1}},{key:"resolveIndex_",value:function(e){return e===kr?null:this.indexMap_.get(e.toString())}}],[{key:"EMPTY_NODE",get:function(){return Lr||(Lr=new t(new Cr(Er),null,Hr.Default))}}]),t}();Vr.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;var zr=new(function(t){"use strict";e(k)(r,t);var n=e(w)(r);function r(){return e(f)(this,r),n.call(this,new Cr(Er),Vr.EMPTY_NODE,Hr.Default)}return e(v)(r,[{key:"compareTo",value:function(e){return e===this?0:1}},{key:"equals",value:function(e){return e===this}},{key:"getPriority",value:function(){return this}},{key:"getImmediateChild",value:function(e){return Vr.EMPTY_NODE}},{key:"isEmpty",value:function(){return!1}}]),r}(Vr));Object.defineProperties(_r,{MIN:{value:new _r(ln,Vr.EMPTY_NODE)},MAX:{value:new _r(hn,zr)}}),gr.__EMPTY_NODE=Vr.EMPTY_NODE,Ar.__childrenNodeConstructor=Vr,Ir=zr,function(e){Nr=e}(zr);function Br(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(null===t)return Vr.EMPTY_NODE;if("object"==typeof t&&".priority"in t&&(n=t[".priority"]),U(null===n||"string"==typeof n||"number"==typeof n||"object"==typeof n&&".sv"in n,"Invalid priority type found: "+(void 0===n?"undefined":e(jt)(n))),"object"==typeof t&&".value"in t&&null!==t[".value"]&&(t=t[".value"]),"object"!=typeof t||".sv"in t){var r=t;return new Ar(r,Br(n))}if(t instanceof Array){var i=Vr.EMPTY_NODE;return _n(t,(function(e,n){if(fe(t,e)&&"."!==e.substring(0,1)){var r=Br(n);!r.isLeafNode()&&r.isEmpty()||(i=i.updateImmediateChild(e,r))}})),i.updatePriority(Br(n))}var a=[],o=!1,s=t;if(_n(s,(function(e,t){if("."!==e.substring(0,1)){var n=Br(t);n.isEmpty()||(o=o||!n.getPriority().isEmpty(),a.push(new _r(e,n)))}})),0===a.length)return Vr.EMPTY_NODE;var u=jr(a,xr,(function(e){return e.name}),Er);if(o){var c=jr(a,Fr.getCompare());return new Vr(u,Br(n),new Hr({".priority":c},{".priority":Fr}))}return new Vr(u,Br(n),Hr.Default)}!function(e){Rr=e}(Br);
/**
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
 */
var Kr,Gr,Yr=function(t){"use strict";e(k)(r,t);var n=e(w)(r);function r(t){var i;return e(f)(this,r),(i=n.call(this)).indexPath_=t,U(!ar(t)&&".priority"!==$n(t),"Can't create PathIndex with empty path or .priority key"),i}return e(v)(r,[{key:"extractChild",value:function(e){return e.getChild(this.indexPath_)}},{key:"isDefinedOn",value:function(e){return!e.getChild(this.indexPath_).isEmpty()}},{key:"compare",value:function(e,t){var n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return 0===i?dn(e.name,t.name):i}},{key:"makePost",value:function(e,t){var n=Br(e),r=Vr.EMPTY_NODE.updateChild(this.indexPath_,n);return new _r(t,r)}},{key:"maxPost",value:function(){var e=Vr.EMPTY_NODE.updateChild(this.indexPath_,zr);return new _r(hn,e)}},{key:"toString",value:function(){return nr(this.indexPath_,0).join("/")}}]),r}(yr),Jr=function(t){"use strict";e(k)(r,t);var n=e(w)(r);function r(){return e(f)(this,r),n.apply(this,arguments)}return e(v)(r,[{key:"compare",value:function(e,t){var n=e.node.compareTo(t.node);return 0===n?dn(e.name,t.name):n}},{key:"isDefinedOn",value:function(e){return!0}},{key:"indexedValueChanged",value:function(e,t){return!e.equals(t)}},{key:"minPost",value:function(){return _r.MIN}},{key:"maxPost",value:function(){return _r.MAX}},{key:"makePost",value:function(e,t){var n=Br(e);return new _r(t,n)}},{key:"toString",value:function(){return".value"}}]),r}(yr),Qr=new Jr,Xr="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
/**
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
 */Kr=0,Gr=[];
/**
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
 */
function $r(e){return{type:"value",snapshotNode:e}}function Zr(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function ei(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function ti(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
/**
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
 */
var ni=function(){"use strict";function t(){e(f)(this,t),this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Fr}return e(v)(t,[{key:"hasStart",value:function(){return this.startSet_}},{key:"hasStartAfter",value:function(){return this.startAfterSet_}},{key:"hasEndBefore",value:function(){return this.endBeforeSet_}},{key:"isViewFromLeft",value:function(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}},{key:"getIndexStartValue",value:function(){return U(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}},{key:"getIndexStartName",value:function(){return U(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ln}},{key:"hasEnd",value:function(){return this.endSet_}},{key:"getIndexEndValue",value:function(){return U(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}},{key:"getIndexEndName",value:function(){return U(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:hn}},{key:"hasLimit",value:function(){return this.limitSet_}},{key:"hasAnchoredLimit",value:function(){return this.limitSet_&&""!==this.viewFrom_}},{key:"getLimit",value:function(){return U(this.limitSet_,"Only valid if limit has been set"),this.limit_}},{key:"getIndex",value:function(){return this.index_}},{key:"loadsAllData",value:function(){return!(this.startSet_||this.endSet_||this.limitSet_)}},{key:"isDefault",value:function(){return this.loadsAllData()&&this.index_===Fr}},{key:"copy",value:function(){var e=new t;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}]),t}();
/**
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
 */function ri(e){var t,n={};return e.isDefault()||(e.index_===Fr?t="$priority":e.index_===Qr?t="$value":e.index_===kr?t="$key":(U(e.index_ instanceof Yr,"Unrecognized index type!"),t=e.index_.toString()),n.orderBy=le(t),e.startSet_&&(n.startAt=le(e.indexStartValue_),e.startNameSet_&&(n.startAt+=","+le(e.indexStartName_))),e.endSet_&&(n.endAt=le(e.indexEndValue_),e.endNameSet_&&(n.endAt+=","+le(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?n.limitToFirst=e.limit_:n.limitToLast=e.limit_)),n}function ii(e){var t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_)),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_)),e.limitSet_){t.l=e.limit_;var n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==Fr&&(t.i=e.index_.toString()),t}
/**
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
 */var ai=function(t){"use strict";e(k)(r,t);var n=e(w)(r);function r(t,i,a,o){var s;return e(f)(this,r),(s=n.call(this)).repoInfo_=t,s.onDataUpdate_=i,s.authTokenProvider_=a,s.appCheckTokenProvider_=o,s.log_=an("p:rest:"),s.listens_={},s}return e(v)(r,[{key:"reportStats",value:function(e){throw new Error("Method not implemented.")}},{key:"listen",value:function(e,t,n,i){var a=this,o=e._path.toString();this.log_("Listen called for "+o+" "+e._queryIdentifier);var s=r.getListenId_(e,n),u={};this.listens_[s]=u;var c=ri(e._queryParams);this.restRequest_(o+".json",c,(function(e,t){var r=t;(404===e&&(r=null,e=null),null===e&&a.onDataUpdate_(o,r,!1,n),ve(a.listens_,s)===u)&&i(e?401===e?"permission_denied":"rest_error:"+e:"ok",null)}))}},{key:"unlisten",value:function(e,t){var n=r.getListenId_(e,t);delete this.listens_[n]}},{key:"get",value:function(e){var t=this,n=ri(e._queryParams),r=e._path.toString(),i=new re;return this.restRequest_(r+".json",n,(function(e,n){var a=n;404===e&&(a=null,e=null),null===e?(t.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))})),i.promise}},{key:"refreshAuthToken",value:function(e){}},{key:"restRequest_",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,i=this;return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((function(a){var o=e(y)(a,2),s=o[0],u=o[1],c=i;s&&s.accessToken&&(n.auth=s.accessToken),u&&u.token&&(n.ac=u.token);var l=(i.repoInfo_.secure?"https://":"http://")+i.repoInfo_.host+t+"?ns="+i.repoInfo_.namespace+ge(n);i.log_("Sending REST request for "+l);var h=new XMLHttpRequest;h.onreadystatechange=function(){if(r&&4===h.readyState){c.log_("REST Response for "+l+" received. status:",h.status,"response:",h.responseText);var e=null;if(h.status>=200&&h.status<300){try{e=ce(h.responseText)}catch(e){un("Failed to parse JSON response for "+l+": "+h.responseText)}r(null,e)}else 401!==h.status&&404!==h.status&&un("Got unsuccessful REST response for "+l+" Status: "+h.status),r(h.status);r=null}},h.open("GET",l,!0),h.send()}))}}],[{key:"getListenId_",value:function(e,t){return void 0!==t?"tag$"+t:(U(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}}]),r}(Gn),oi=function(){"use strict";function t(){e(f)(this,t),this.rootNode_=Vr.EMPTY_NODE}return e(v)(t,[{key:"getNode",value:function(e){return this.rootNode_.getChild(e)}},{key:"updateSnapshot",value:function(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}]),t}();
/**
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
 */
/**
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
 */
function si(){return{value:null,children:new Map}}function ui(e,t,n){if(ar(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{var r=$n(t);e.children.has(r)||e.children.set(r,si()),ui(e.children.get(r),t=er(t),n)}}function ci(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach((function(e,n){t(n,e)}))}
/**
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
 */(e,(function(e,r){ci(r,new Qn(t.toString()+"/"+e),n)}))}var li,hi,di=function(){"use strict";function t(n){e(f)(this,t),this.collection_=n,this.last_=null}return e(v)(t,[{key:"get",value:function(){var e=this.collection_.get(),t=Object.assign({},e);return this.last_&&_n(this.last_,(function(e,n){t[e]=t[e]-n})),this.last_=e,t}}]),t}(),fi=function(){"use strict";function t(n,r){e(f)(this,t),this.server_=r,this.statsToReport_={},this.statsListener_=new di(n);var i=1e4+2e4*Math.random();Tn(this.reportStats_.bind(this),Math.floor(i))}return e(v)(t,[{key:"reportStats_",value:function(){var e=this,t=this.statsListener_.get(),n={},r=!1;_n(t,(function(t,i){i>0&&fe(e.statsToReport_,t)&&(n[t]=i,r=!0)})),r&&this.server_.reportStats(n),Tn(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}]),t}();
/**
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
 */function vi(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
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
 */(hi=li||(li={}))[hi.OVERWRITE=0]="OVERWRITE",hi[hi.MERGE=1]="MERGE",hi[hi.ACK_USER_WRITE=2]="ACK_USER_WRITE",hi[hi.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";var pi,mi=function(){"use strict";function t(n,r,i){e(f)(this,t),this.path=n,this.affectedTree=r,this.revert=i,this.type=li.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}return e(v)(t,[{key:"operationForChild",value:function(e){if(ar(this.path)){if(null!=this.affectedTree.value)return U(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;var n=this.affectedTree.subtree(new Qn(e));return new t(Xn(),n,this.revert)}return U($n(this.path)===e,"operationForChild called for unrelated child."),new t(er(this.path),this.affectedTree,this.revert)}}]),t}(),_i=function(){"use strict";function t(n,r,i){e(f)(this,t),this.source=n,this.path=r,this.snap=i,this.type=li.OVERWRITE}return e(v)(t,[{key:"operationForChild",value:function(e){return ar(this.path)?new t(this.source,Xn(),this.snap.getImmediateChild(e)):new t(this.source,er(this.path),this.snap)}}]),t}(),yi=function(){"use strict";function t(n,r,i){e(f)(this,t),this.source=n,this.path=r,this.children=i,this.type=li.MERGE}return e(v)(t,[{key:"operationForChild",value:function(e){if(ar(this.path)){var n=this.children.subtree(new Qn(e));return n.isEmpty()?null:n.value?new _i(this.source,Xn(),n.value):new t(this.source,Xn(),n)}return U($n(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new t(this.source,er(this.path),this.children)}},{key:"toString",value:function(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}]),t}(),gi=function(){"use strict";function t(n,r,i){e(f)(this,t),this.node_=n,this.fullyInitialized_=r,this.filtered_=i}return e(v)(t,[{key:"isFullyInitialized",value:function(){return this.fullyInitialized_}},{key:"isFiltered",value:function(){return this.filtered_}},{key:"isCompleteForPath",value:function(e){if(ar(e))return this.isFullyInitialized()&&!this.filtered_;var t=$n(e);return this.isCompleteForChild(t)}},{key:"isCompleteForChild",value:function(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}},{key:"getNode",value:function(){return this.node_}}]),t}();
/**
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
 */function ki(e,t,n,r,i,a){var o=r.filter((function(e){return e.type===n}));o.sort((function(t,n){return function(e,t,n){if(null==t.childName||null==n.childName)throw W("Should only compare child_ events.");var r=new _r(t.childName,t.snapshotNode),i=new _r(n.childName,n.snapshotNode);return e.index_.compare(r,i)}
/**
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
 */(e,t,n)})),o.forEach((function(n){var r=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,a);i.forEach((function(i){i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))}))}))}function bi(e,t){return{eventCache:e,serverCache:t}}function wi(e,t,n,r){return bi(new gi(t,n,r),e.serverCache)}function Ii(e,t,n,r){return bi(e.eventCache,new gi(t,n,r))}function Ti(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Ci(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
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
 */var xi=function(){return pi||(pi=new Cr(fn)),pi},Ei=function(){"use strict";function t(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:xi();e(f)(this,t),this.value=n,this.children=r}return e(v)(t,[{key:"isEmpty",value:function(){return null===this.value&&this.children.isEmpty()}},{key:"findRootMostMatchingPathAndValue",value:function(e,t){if(null!=this.value&&t(this.value))return{path:Xn(),value:this.value};if(ar(e))return null;var n=$n(e),r=this.children.get(n);if(null!==r){var i=r.findRootMostMatchingPathAndValue(er(e),t);return null!=i?{path:ir(new Qn(n),i.path),value:i.value}:null}return null}},{key:"findRootMostValueAndPath",value:function(e){return this.findRootMostMatchingPathAndValue(e,(function(){return!0}))}},{key:"subtree",value:function(e){if(ar(e))return this;var n=$n(e),r=this.children.get(n);return null!==r?r.subtree(er(e)):new t(null)}},{key:"set",value:function(e,n){if(ar(e))return new t(n,this.children);var r=$n(e),i=(this.children.get(r)||new t(null)).set(er(e),n),a=this.children.insert(r,i);return new t(this.value,a)}},{key:"remove",value:function(e){if(ar(e))return this.children.isEmpty()?new t(null):new t(null,this.children);var n=$n(e),r=this.children.get(n);if(r){var i,a=r.remove(er(e));return i=a.isEmpty()?this.children.remove(n):this.children.insert(n,a),null===this.value&&i.isEmpty()?new t(null):new t(this.value,i)}return this}},{key:"get",value:function(e){if(ar(e))return this.value;var t=$n(e),n=this.children.get(t);return n?n.get(er(e)):null}},{key:"setTree",value:function(e,n){if(ar(e))return n;var r,i=$n(e),a=(this.children.get(i)||new t(null)).setTree(er(e),n);return r=a.isEmpty()?this.children.remove(i):this.children.insert(i,a),new t(this.value,r)}},{key:"fold",value:function(e){return this.fold_(Xn(),e)}},{key:"fold_",value:function(e,t){var n={};return this.children.inorderTraversal((function(r,i){n[r]=i.fold_(ir(e,r),t)})),t(e,this.value,n)}},{key:"findOnPath",value:function(e,t){return this.findOnPath_(e,Xn(),t)}},{key:"findOnPath_",value:function(e,t,n){var r=!!this.value&&n(t,this.value);if(r)return r;if(ar(e))return null;var i=$n(e),a=this.children.get(i);return a?a.findOnPath_(er(e),ir(t,i),n):null}},{key:"foreachOnPath",value:function(e,t){return this.foreachOnPath_(e,Xn(),t)}},{key:"foreachOnPath_",value:function(e,n,r){if(ar(e))return this;this.value&&r(n,this.value);var i=$n(e),a=this.children.get(i);return a?a.foreachOnPath_(er(e),ir(n,i),r):new t(null)}},{key:"foreach",value:function(e){this.foreach_(Xn(),e)}},{key:"foreach_",value:function(e,t){this.children.inorderTraversal((function(n,r){r.foreach_(ir(e,n),t)})),this.value&&t(e,this.value)}},{key:"foreachChild",value:function(e){this.children.inorderTraversal((function(t,n){n.value&&e(t,n.value)}))}}],[{key:"fromObject",value:function(e){var n=new t(null);return _n(e,(function(e,t){n=n.set(new Qn(e),t)})),n}}]),t}(),Si=function(){"use strict";function t(n){e(f)(this,t),this.writeTree_=n}return e(v)(t,null,[{key:"empty",value:function(){return new t(new Ei(null))}}]),t}();function Ri(e,t,n){if(ar(t))return new Si(new Ei(n));var r=e.writeTree_.findRootMostValueAndPath(t);if(null!=r){var i=r.path,a=r.value,o=or(i,t);return a=a.updateChild(o,n),new Si(e.writeTree_.set(i,a))}var s=new Ei(n),u=e.writeTree_.setTree(t,s);return new Si(u)}function Ni(e,t,n){var r=e;return _n(n,(function(e,n){r=Ri(r,ir(t,e),n)})),r}function Pi(e,t){if(ar(t))return Si.empty();var n=e.writeTree_.setTree(t,new Ei(null));return new Si(n)}function Oi(e,t){return null!=Ai(e,t)}function Ai(e,t){var n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(or(n.path,t)):null}function Di(e){var t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(Fr,(function(e,n){t.push(new _r(e,n))})):e.writeTree_.children.inorderTraversal((function(e,n){null!=n.value&&t.push(new _r(e,n.value))})),t}function Li(e,t){if(ar(t))return e;var n=Ai(e,t);return new Si(null!=n?new Ei(n):e.writeTree_.subtree(t))}function Mi(e){return e.writeTree_.isEmpty()}function Fi(e,t){return Ui(Xn(),e.writeTree_,t)}function Ui(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);var r=null;return t.children.inorderTraversal((function(t,i){".priority"===t?(U(null!==i.value,"Priority writes must always be leaf nodes"),r=i.value):n=Ui(ir(e,t),i,n)})),n.getChild(e).isEmpty()||null===r||(n=n.updateChild(ir(e,".priority"),r)),n}
/**
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
 */function Wi(e,t){return Zi(t,e)}function ji(e,t){for(var n=0;n<e.allWrites.length;n++){var r=e.allWrites[n];if(r.writeId===t)return r}return null}function qi(e,t){var n=e.allWrites.findIndex((function(e){return e.writeId===t}));U(n>=0,"removeWrite called with nonexistent writeId.");var r=e.allWrites[n];e.allWrites.splice(n,1);for(var i=r.visible,a=!1,o=e.allWrites.length-1;i&&o>=0;){var s=e.allWrites[o];s.visible&&(o>=n&&Hi(s,r.path)?i=!1:cr(r.path,s.path)&&(a=!0)),o--}if(i){if(a)return function(e){e.visibleWrites=zi(e.allWrites,Vi,Xn()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;r.snap?e.visibleWrites=Pi(e.visibleWrites,r.path):_n(r.children,(function(t){e.visibleWrites=Pi(e.visibleWrites,ir(r.path,t))}));return!0}return!1}function Hi(e,t){if(e.snap)return cr(e.path,t);for(var n in e.children)if(e.children.hasOwnProperty(n)&&cr(ir(e.path,n),t))return!0;return!1}function Vi(e){return e.visible}function zi(e,t,n){for(var r=Si.empty(),i=0;i<e.length;++i){var a=e[i];if(t(a)){var o=a.path,s=void 0;if(a.snap)cr(n,o)?r=Ri(r,s=or(n,o),a.snap):cr(o,n)&&(s=or(o,n),r=Ri(r,Xn(),a.snap.getChild(s)));else{if(!a.children)throw W("WriteRecord should have .snap or .children");if(cr(n,o))r=Ni(r,s=or(n,o),a.children);else if(cr(o,n))if(ar(s=or(o,n)))r=Ni(r,Xn(),a.children);else{var u=ve(a.children,$n(s));if(u){var c=u.getChild(er(s));r=Ri(r,Xn(),c)}}}}}return r}function Bi(e,t,n,r,i){if(r||i){var a=Li(e.visibleWrites,t);if(!i&&Mi(a))return n;if(i||null!=n||Oi(a,Xn())){return Fi(zi(e.allWrites,(function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(cr(e.path,t)||cr(t,e.path))}),t),n||Vr.EMPTY_NODE)}return null}var o=Ai(e.visibleWrites,t);if(null!=o)return o;var s=Li(e.visibleWrites,t);return Mi(s)?n:null!=n||Oi(s,Xn())?Fi(s,n||Vr.EMPTY_NODE):null}function Ki(e,t,n,r){return Bi(e.writeTree,e.treePath,t,n,r)}function Gi(e,t){return function(e,t,n){var r=Vr.EMPTY_NODE,i=Ai(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(Fr,(function(e,t){r=r.updateImmediateChild(e,t)})),r;if(n){var a=Li(e.visibleWrites,t);return n.forEachChild(Fr,(function(e,t){var n=Fi(Li(a,new Qn(e)),t);r=r.updateImmediateChild(e,n)})),Di(a).forEach((function(e){r=r.updateImmediateChild(e.name,e.node)})),r}return Di(Li(e.visibleWrites,t)).forEach((function(e){r=r.updateImmediateChild(e.name,e.node)})),r}(e.writeTree,e.treePath,t)}function Yi(e,t,n,r){return function(e,t,n,r,i){U(r||i,"Either existingEventSnap or existingServerSnap must exist");var a=ir(t,n);if(Oi(e.visibleWrites,a))return null;var o=Li(e.visibleWrites,a);return Mi(o)?i.getChild(n):Fi(o,i.getChild(n))}(e.writeTree,e.treePath,t,n,r)}function Ji(e,t){return function(e,t){return Ai(e.visibleWrites,t)}(e.writeTree,ir(e.treePath,t))}function Qi(e,t,n,r,i,a){return function(e,t,n,r,i,a,o){var s,u=Li(e.visibleWrites,t),c=Ai(u,Xn());if(null!=c)s=c;else{if(null==n)return[];s=Fi(u,n)}if((s=s.withIndex(o)).isEmpty()||s.isLeafNode())return[];for(var l=[],h=o.getCompare(),d=a?s.getReverseIteratorFrom(r,o):s.getIteratorFrom(r,o),f=d.getNext();f&&l.length<i;)0!==h(f,r)&&l.push(f),f=d.getNext();return l}(e.writeTree,e.treePath,t,n,r,i,a)}function Xi(e,t,n){return function(e,t,n,r){var i=ir(t,n),a=Ai(e.visibleWrites,i);return null!=a?a:r.isCompleteForChild(n)?Fi(Li(e.visibleWrites,i),r.getNode().getImmediateChild(n)):null}(e.writeTree,e.treePath,t,n)}function $i(e,t){return Zi(ir(e.treePath,t),e.writeTree)}function Zi(e,t){return{treePath:e,writeTree:t}}
/**
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
 */var ea=function(){"use strict";function t(){e(f)(this,t),this.changeMap=new Map}return e(v)(t,[{key:"trackChildChange",value:function(e){var t=e.type,n=e.childName;U("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),U(".priority"!==n,"Only non-priority child changes can be tracked.");var r=this.changeMap.get(n);if(r){var i=r.type;if("child_added"===t&&"child_removed"===i)this.changeMap.set(n,ti(n,e.snapshotNode,r.snapshotNode));else if("child_removed"===t&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===i)this.changeMap.set(n,ei(n,r.oldSnap));else if("child_changed"===t&&"child_added"===i)this.changeMap.set(n,Zr(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==i)throw W("Illegal combination of changes: "+e+" occurred after "+r);this.changeMap.set(n,ti(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)}},{key:"getChanges",value:function(){return Array.from(this.changeMap.values())}}]),t}(),ta=new(function(){"use strict";function t(){e(f)(this,t)}return e(v)(t,[{key:"getCompleteChild",value:function(e){return null}},{key:"getChildAfterChild",value:function(e,t,n){return null}}]),t}()),na=function(){"use strict";function t(n,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;e(f)(this,t),this.writes_=n,this.viewCache_=r,this.optCompleteServerCache_=i}return e(v)(t,[{key:"getCompleteChild",value:function(e){var t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);var n=null!=this.optCompleteServerCache_?new gi(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Xi(this.writes_,e,n)}},{key:"getChildAfterChild",value:function(e,t,n){var r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:Ci(this.viewCache_),i=Qi(this.writes_,r,t,1,n,e);return 0===i.length?null:i[0]}}]),t}();
/**
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
 */function ra(e,t,n,r,i){var a,o,s=new ea;if(n.type===li.OVERWRITE){var u=n;u.source.fromUser?a=oa(e,t,u.path,u.snap,r,i,s):(U(u.source.fromServer,"Unknown source."),o=u.source.tagged||t.serverCache.isFiltered()&&!ar(u.path),a=aa(e,t,u.path,u.snap,r,i,o,s))}else if(n.type===li.MERGE){var c=n;c.source.fromUser?a=function(e,t,n,r,i,a,o){var s=t;return r.foreach((function(r,u){var c=ir(n,r);sa(t,$n(c))&&(s=oa(e,s,c,u,i,a,o))})),r.foreach((function(r,u){var c=ir(n,r);sa(t,$n(c))||(s=oa(e,s,c,u,i,a,o))})),s}(e,t,c.path,c.children,r,i,s):(U(c.source.fromServer,"Unknown source."),o=c.source.tagged||t.serverCache.isFiltered(),a=ca(e,t,c.path,c.children,r,i,o,s))}else if(n.type===li.ACK_USER_WRITE){var l=n;a=l.revert?function(e,t,n,r,i,a){var o;if(null!=Ji(r,n))return t;var s,u=new na(r,t,i),c=t.eventCache.getNode();if(ar(n)||".priority"===$n(n)){var l;if(t.serverCache.isFullyInitialized())l=Ki(r,Ci(t));else{var h=t.serverCache.getNode();U(h instanceof Vr,"serverChildren would be complete if leaf node"),l=Gi(r,h)}s=e.filter.updateFullNode(c,l,a)}else{var d=$n(n),f=Xi(r,d,t.serverCache);null==f&&t.serverCache.isCompleteForChild(d)&&(f=c.getImmediateChild(d)),(s=null!=f?e.filter.updateChild(c,d,f,er(n),u,a):t.eventCache.getNode().hasChild(d)?e.filter.updateChild(c,d,Vr.EMPTY_NODE,er(n),u,a):c).isEmpty()&&t.serverCache.isFullyInitialized()&&(o=Ki(r,Ci(t))).isLeafNode()&&(s=e.filter.updateFullNode(s,o,a))}return o=t.serverCache.isFullyInitialized()||null!=Ji(r,Xn()),wi(t,s,o,e.filter.filtersNodes())}
/**
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
 */(e,t,l.path,r,i,s):function(e,t,n,r,i,a,o){if(null!=Ji(i,n))return t;var s=t.serverCache.isFiltered(),u=t.serverCache;if(null!=r.value){if(ar(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return aa(e,t,n,u.getNode().getChild(n),i,a,s,o);if(ar(n)){var c=new Ei(null);return u.getNode().forEachChild(kr,(function(e,t){c=c.set(new Qn(e),t)})),ca(e,t,n,c,i,a,s,o)}return t}var l=new Ei(null);return r.foreach((function(e,t){var r=ir(n,e);u.isCompleteForPath(r)&&(l=l.set(e,u.getNode().getChild(r)))})),ca(e,t,n,l,i,a,s,o)}(e,t,l.path,l.affectedTree,r,i,s)}else{if(n.type!==li.LISTEN_COMPLETE)throw W("Unknown operation type: "+n.type);a=function(e,t,n,r,i){var a=t.serverCache,o=Ii(t,a.getNode(),a.isFullyInitialized()||ar(n),a.isFiltered());return ia(e,o,n,r,ta,i)}(e,t,n.path,r,s)}var h=s.getChanges();return function(e,t,n){var r=t.eventCache;if(r.isFullyInitialized()){var i=r.getNode().isLeafNode()||r.getNode().isEmpty(),a=Ti(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(a)||!r.getNode().getPriority().equals(a.getPriority()))&&n.push($r(Ti(t)))}}(t,a,h),{viewCache:a,changes:h}}function ia(e,t,n,r,i,a){var o,s,u=t.eventCache;if(null!=Ji(r,n))return t;if(ar(n))if(U(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){var c=Ci(t),l=Gi(r,c instanceof Vr?c:Vr.EMPTY_NODE);o=e.filter.updateFullNode(t.eventCache.getNode(),l,a)}else{var h=Ki(r,Ci(t));o=e.filter.updateFullNode(t.eventCache.getNode(),h,a)}else{var d=$n(n);if(".priority"===d){U(1===Zn(n),"Can't have a priority with additional path components");var f=u.getNode(),v=Yi(r,n,f,s=t.serverCache.getNode());o=null!=v?e.filter.updatePriority(f,v):u.getNode()}else{var p,m=er(n);if(u.isCompleteForChild(d)){s=t.serverCache.getNode();var _=Yi(r,n,u.getNode(),s);p=null!=_?u.getNode().getImmediateChild(d).updateChild(m,_):u.getNode().getImmediateChild(d)}else p=Xi(r,d,t.serverCache);o=null!=p?e.filter.updateChild(u.getNode(),d,p,m,i,a):u.getNode()}}return wi(t,o,u.isFullyInitialized()||ar(n),e.filter.filtersNodes())}function aa(e,t,n,r,i,a,o,s){var u,c=t.serverCache,l=o?e.filter:e.filter.getIndexedFilter();if(ar(n))u=l.updateFullNode(c.getNode(),r,null);else if(l.filtersNodes()&&!c.isFiltered()){var h=c.getNode().updateChild(n,r);u=l.updateFullNode(c.getNode(),h,null)}else{var d=$n(n);if(!c.isCompleteForPath(n)&&Zn(n)>1)return t;var f=er(n),v=c.getNode().getImmediateChild(d).updateChild(f,r);u=".priority"===d?l.updatePriority(c.getNode(),v):l.updateChild(c.getNode(),d,v,f,ta,null)}var p=Ii(t,u,c.isFullyInitialized()||ar(n),l.filtersNodes());return ia(e,p,n,i,new na(i,p,a),s)}function oa(e,t,n,r,i,a,o){var s,u,c=t.eventCache,l=new na(i,t,a);if(ar(n))u=e.filter.updateFullNode(t.eventCache.getNode(),r,o),s=wi(t,u,!0,e.filter.filtersNodes());else{var h=$n(n);if(".priority"===h)u=e.filter.updatePriority(t.eventCache.getNode(),r),s=wi(t,u,c.isFullyInitialized(),c.isFiltered());else{var d,f=er(n),v=c.getNode().getImmediateChild(h);if(ar(f))d=r;else{var p=l.getCompleteChild(h);d=null!=p?".priority"===tr(f)&&p.getChild(rr(f)).isEmpty()?p:p.updateChild(f,r):Vr.EMPTY_NODE}if(v.equals(d))s=t;else s=wi(t,e.filter.updateChild(c.getNode(),h,d,f,l,o),c.isFullyInitialized(),e.filter.filtersNodes())}}return s}function sa(e,t){return e.eventCache.isCompleteForChild(t)}function ua(e,t,n){return n.foreach((function(e,n){t=t.updateChild(e,n)})),t}function ca(e,t,n,r,i,a,o,s){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;var u,c=t;u=ar(n)?r:new Ei(null).setTree(n,r);var l=t.serverCache.getNode();return u.children.inorderTraversal((function(n,r){if(l.hasChild(n)){var u=ua(0,t.serverCache.getNode().getImmediateChild(n),r);c=aa(e,c,new Qn(n),u,i,a,o,s)}})),u.children.inorderTraversal((function(n,r){var u=!t.serverCache.isCompleteForChild(n)&&null===r.value;if(!l.hasChild(n)&&!u){var h=ua(0,t.serverCache.getNode().getImmediateChild(n),r);c=aa(e,c,new Qn(n),h,i,a,o,s)}})),c}var la;function ha(e,t){var n=Ci(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!ar(t)&&!n.getImmediateChild($n(t)).isEmpty())?n.getChild(t):null}function da(e,t,n,r){t.type===li.MERGE&&null!==t.source.queryId&&(U(Ci(e.viewCache_),"We should always have a full cache before handling merges"),U(Ti(e.viewCache_),"Missing event cache, even though we have a server cache"));var i,a,o=e.viewCache_,s=ra(e.processor_,o,t,n,r);return i=e.processor_,a=s.viewCache,U(a.eventCache.getNode().isIndexed(i.filter.getIndex()),"Event snap not indexed"),U(a.serverCache.getNode().isIndexed(i.filter.getIndex()),"Server snap not indexed"),U(s.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,fa(e,s.changes,s.viewCache.eventCache.getNode(),null)}function fa(e,t,n,r){var i=r?[r]:e.eventRegistrations_;return function(e,t,n,r){var i=[],a=[];return t.forEach((function(t){var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&a.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),ki(e,i,"child_removed",t,r,n),ki(e,i,"child_added",t,r,n),ki(e,i,"child_moved",a,r,n),ki(e,i,"child_changed",t,r,n),ki(e,i,"value",t,r,n),i}(e.eventGenerator_,t,n,i)}
/**
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
 */var va;function pa(e,t,n,r){var i=t.source.queryId;if(null!==i){var a=e.views.get(i);return U(null!=a,"SyncTree gave us an op for an invalid query."),da(a,t,n,r)}var o=[],s=!0,u=!1,c=void 0;try{for(var l,h=e.views.values()[Symbol.iterator]();!(s=(l=h.next()).done);s=!0){var d=l.value;o=o.concat(da(d,t,n,r))}}catch(e){u=!0,c=e}finally{try{s||null==h.return||h.return()}finally{if(u)throw c}}return o}function ma(e,t){var n=null,r=!0,i=!1,a=void 0;try{for(var o,s=e.views.values()[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;n=n||ha(u,t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return n}var _a=function t(n){"use strict";e(f)(this,t),this.listenProvider_=n,this.syncPointTree_=new Ei(null),this.pendingWriteTree_={visibleWrites:Si.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map};function ya(e,t,n,r,i){return function(e,t,n,r,i){U(r>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=Ri(e.visibleWrites,t,n)),e.lastWriteId=r}(e.pendingWriteTree_,t,n,r,i),i?Ta(e,new _i({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function ga(e,t,n,r){!function(e,t,n,r){U(r>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:r,visible:!0}),e.visibleWrites=Ni(e.visibleWrites,t,n),e.lastWriteId=r}(e.pendingWriteTree_,t,n,r);var i=Ei.fromObject(n);return Ta(e,new yi({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,i))}function ka(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=ji(e.pendingWriteTree_,t),i=qi(e.pendingWriteTree_,t);if(i){var a=new Ei(null);return null!=r.snap?a=a.set(Xn(),!0):_n(r.children,(function(e){a=a.set(new Qn(e),!0)})),Ta(e,new mi(r.path,a,n))}return[]}function ba(e,t,n){return Ta(e,new _i({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function wa(e,t,n,r){var i=Ea(e,r);if(null!=i){var a=Sa(i),o=a.path,s=a.queryId,u=or(o,t);return Ra(e,o,new _i(vi(s),u,n))}return[]}function Ia(e,t,n){var r=e.pendingWriteTree_,i=e.syncPointTree_.findOnPath(t,(function(e,n){var r=ma(n,or(e,t));if(r)return r}));return Bi(r,t,i,n,!0)}function Ta(e,t){return Ca(t,e.syncPointTree_,null,Wi(e.pendingWriteTree_,Xn()))}function Ca(e,t,n,r){if(ar(e.path))return xa(e,t,n,r);var i=t.get(Xn());null==n&&null!=i&&(n=ma(i,Xn()));var a=[],o=$n(e.path),s=e.operationForChild(o),u=t.children.get(o);if(u&&s){var c=n?n.getImmediateChild(o):null,l=$i(r,o);a=a.concat(Ca(s,u,c,l))}return i&&(a=a.concat(pa(i,e,r,n))),a}function xa(e,t,n,r){var i=t.get(Xn());null==n&&null!=i&&(n=ma(i,Xn()));var a=[];return t.children.inorderTraversal((function(t,i){var o=n?n.getImmediateChild(t):null,s=$i(r,t),u=e.operationForChild(t);u&&(a=a.concat(xa(u,i,o,s)))})),i&&(a=a.concat(pa(i,e,r,n))),a}function Ea(e,t){return e.tagToQueryMap.get(t)}function Sa(e){var t=e.indexOf("$");return U(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new Qn(e.substr(0,t))}}function Ra(e,t,n){var r=e.syncPointTree_.get(t);return U(r,"Missing sync point for query tag that we're tracking"),pa(r,n,Wi(e.pendingWriteTree_,t),null)}
/**
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
 */
var Na=function(){"use strict";function t(n){e(f)(this,t),this.node_=n}return e(v)(t,[{key:"getImmediateChild",value:function(e){return new t(this.node_.getImmediateChild(e))}},{key:"node",value:function(){return this.node_}}]),t}(),Pa=function(){"use strict";function t(n,r){e(f)(this,t),this.syncTree_=n,this.path_=r}return e(v)(t,[{key:"getImmediateChild",value:function(e){var n=ir(this.path_,e);return new t(this.syncTree_,n)}},{key:"node",value:function(){return Ia(this.syncTree_,this.path_)}}]),t}(),Oa=function(e,t,n){return e&&"object"==typeof e?(U(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?Aa(e[".sv"],t,n):"object"==typeof e[".sv"]?Da(e[".sv"],t):void U(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},Aa=function(e,t,n){if("timestamp"===e)return n.timestamp;U(!1,"Unexpected server value: "+e)},Da=function(e,t,n){e.hasOwnProperty("increment")||U(!1,"Unexpected server value: "+JSON.stringify(e,null,2));var r=e.increment;"number"!=typeof r&&U(!1,"Unexpected increment value: "+r);var i=t.node();if(U(null!=i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;var a=i.getValue();return"number"!=typeof a?r:a+r},La=function(e,t,n,r){return Fa(t,new Pa(n,e),r)},Ma=function(e,t,n){return Fa(e,new Na(t),n)};function Fa(e,t,n){var r,i=e.getPriority().val(),a=Oa(i,t.getImmediateChild(".priority"),n);if(e.isLeafNode()){var o=e,s=Oa(o.getValue(),t,n);return s!==o.getValue()||a!==o.getPriority().val()?new Ar(s,Br(a)):e}var u=e;return r=u,a!==u.getPriority().val()&&(r=r.updatePriority(new Ar(a))),u.forEachChild(Fr,(function(e,i){var a=Fa(i,t.getImmediateChild(e),n);a!==i&&(r=r.updateImmediateChild(e,a))})),r}
/**
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
 */var Ua=function t(){"use strict";var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{children:{},childCount:0};e(f)(this,t),this.name=n,this.parent=r,this.node=i};function Wa(e,t){for(var n=t instanceof Qn?t:new Qn(t),r=e,i=$n(n);null!==i;){var a=ve(r.node.children,i)||{children:{},childCount:0};r=new Ua(i,r,a),i=$n(n=er(n))}return r}function ja(e){return e.node.value}function qa(e,t){e.node.value=t,Ka(e)}function Ha(e){return e.node.childCount>0}function Va(e,t){_n(e.node.children,(function(n,r){t(new Ua(n,e,r))}))}function za(e,t,n,r){n&&!r&&t(e),Va(e,(function(e){za(e,t,!0,r)})),n&&r&&t(e)}function Ba(e){return new Qn(null===e.parent?e.name:Ba(e.parent)+"/"+e.name)}function Ka(e){null!==e.parent&&function(e,t,n){var r=function(e){return void 0===ja(e)&&!Ha(e)}(n),i=fe(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,Ka(e)):r||i||(e.node.children[t]=n.node,e.node.childCount++,Ka(e))}
/**
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
 */(e.parent,e.name,e)}var Ga=/[\[\].#$\/\u0000-\u001F\u007F]/,Ya=/[\[\].#$\u0000-\u001F\u007F]/,Ja=10485760,Qa=function(e){return"string"==typeof e&&0!==e.length&&!Ga.test(e)},Xa=function(e){return"string"==typeof e&&0!==e.length&&!Ya.test(e)},$a=function(e){return null===e||"string"==typeof e||"number"==typeof e&&!cn(e)||e&&"object"==typeof e&&fe(e,".sv")},Za=function(e,t,n,r){r&&void 0===t||eo(Ce(e,"value"),t,n)},eo=function(e,t,n){var r=n instanceof Qn?new lr(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+dr(r));if("function"==typeof t)throw new Error(e+"contains a function "+dr(r)+" with contents = "+t.toString());if(cn(t))throw new Error(e+"contains "+t.toString()+" "+dr(r));if("string"==typeof t&&t.length>3495253.3333333335&&Ee(t)>Ja)throw new Error(e+"contains a string greater than "+"10485760 utf8 bytes "+dr(r)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){var i=!1,a=!1;if(_n(t,(function(t,n){if(".value"===t)i=!0;else if(".priority"!==t&&".sv"!==t&&(a=!0,!Qa(t)))throw new Error(e+" contains an invalid key ("+t+") "+dr(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var o,s;s=t,(o=r).parts_.length>0&&(o.byteLength_+=1),o.parts_.push(s),o.byteLength_+=Ee(s),hr(o),eo(e,n,r),function(e){var t=e.parts_.pop();e.byteLength_-=Ee(t),e.parts_.length>0&&(e.byteLength_-=1)}(r)})),i&&a)throw new Error(e+' contains ".value" child '+dr(r)+" in addition to actual children.")}},to=function(e,t,n,r){if(!r||void 0!==t){var i=Ce(e,"values");if(!t||"object"!=typeof t||Array.isArray(t))throw new Error(i+" must be an object containing the children to replace.");var a=[];_n(t,(function(e,t){var r=new Qn(e);if(eo(i,t,ir(n,r)),".priority"===tr(r)&&!$a(t))throw new Error(i+"contains an invalid value for '"+r.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");a.push(r)})),function(e,t){var n,r;for(n=0;n<t.length;n++)for(var i=nr(r=t[n]),a=0;a<i.length;a++)if(".priority"===i[a]&&a===i.length-1);else if(!Qa(i[a]))throw new Error(e+"contains an invalid key ("+i[a]+") in path "+r.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');t.sort(sr);var o=null;for(n=0;n<t.length;n++){if(r=t[n],null!==o&&cr(o,r))throw new Error(e+"contains a path "+o.toString()+" that is ancestor of another path "+r.toString());o=r}}(i,a)}},no=function(e,t,n,r){if(!(r&&void 0===n||Xa(n)))throw new Error(Ce(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},ro=function(e,t){if(".info"===$n(t))throw new Error(e+" failed = Can't modify data under /.info/")},io=function(e,t){var n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!Qa(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Xa(e)}(n))throw new Error(Ce(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')},ao=function t(){"use strict";e(f)(this,t),this.eventLists_=[],this.recursionDepth_=0};function oo(e,t){for(var n=null,r=0;r<t.length;r++){var i=t[r],a=i.getPath();null===n||ur(a,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:a}),n.events.push(i)}n&&e.eventLists_.push(n)}function so(e,t,n){oo(e,n),uo(e,(function(e){return cr(e,t)||cr(t,e)}))}function uo(e,t){e.recursionDepth_++;for(var n=!0,r=0;r<e.eventLists_.length;r++){var i=e.eventLists_[r];if(i)t(i.path)?(co(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}n&&(e.eventLists_=[]),e.recursionDepth_--}function co(e){for(var t=0;t<e.events.length;t++){var n=e.events[t];if(null!==n){e.events[t]=null;var r=n.getEventRunner();en&&rn("event: "+n.toString()),In(r)}}}
/**
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
 */var lo="repo_interrupt",ho=function(){"use strict";function t(n,r,i,a){e(f)(this,t),this.repoInfo_=n,this.forceRestClient_=r,this.authTokenProvider_=i,this.appCheckProvider_=a,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ao,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=si(),this.transactionQueueTree_=new Ua,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}return e(v)(t,[{key:"toString",value:function(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}]),t}();function fo(e,t,n){if(e.stats_=Fn(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new ai(e.repoInfo_,(function(t,n,r,i){mo(e,t,n,r,i)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((function(){return _o(e,!0)}),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{le(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new pr(e.repoInfo_,t,(function(t,n,r,i){mo(e,t,n,r,i)}),(function(t){_o(e,t)}),(function(t){!function(e,t){_n(t,(function(t,n){yo(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}var r,i,a;e.authTokenProvider_.addTokenChangeListener((function(t){e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((function(t){e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=(r=e.repoInfo_,i=function(){return new fi(e.stats_,e.server_)},a=r.toString(),Mn[a]||(Mn[a]=i()),Mn[a]),e.infoData_=new oi,e.infoSyncTree_=new _a({startListening:function(t,n,r,i){var a=[],o=e.infoData_.getNode(t._path);return o.isEmpty()||(a=ba(e.infoSyncTree_,t._path,o),setTimeout((function(){i("ok")}),0)),a},stopListening:function(){}}),yo(e,"connected",!1),e.serverSyncTree_=new _a({startListening:function(t,n,r,i){return e.server_.listen(t,r,n,(function(n,r){var a=i(n,r);so(e.eventQueue_,t._path,a)})),[]},stopListening:function(t,n){e.server_.unlisten(t,n)}})}function vo(e){var t=e.infoData_.getNode(new Qn(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function po(e){return(t=(t={timestamp:vo(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function mo(e,t,n,r,i){e.dataUpdateCount++;var a=new Qn(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;var o=[];if(i)if(r){var s=me(n,(function(e){return Br(e)}));o=function(e,t,n,r){var i=Ea(e,r);if(i){var a=Sa(i),o=a.path,s=a.queryId,u=or(o,t),c=Ei.fromObject(n);return Ra(e,o,new yi(vi(s),u,c))}return[]}(e.serverSyncTree_,a,s,i)}else{var u=Br(n);o=wa(e.serverSyncTree_,a,u,i)}else if(r){var c=me(n,(function(e){return Br(e)}));o=function(e,t,n){var r=Ei.fromObject(n);return Ta(e,new yi({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,r))}(e.serverSyncTree_,a,c)}else{var l=Br(n);o=ba(e.serverSyncTree_,a,l)}var h=a;o.length>0&&(h=Eo(e,a)),so(e.eventQueue_,h,o)}function _o(e,t){yo(e,"connected",t),!1===t&&function(e){wo(e,"onDisconnectEvents");var t=po(e),n=si();ci(e.onDisconnect_,Xn(),(function(r,i){var a=La(r,i,e.serverSyncTree_,t);ui(n,r,a)}));var r=[];ci(n,Xn(),(function(t,n){r=r.concat(ba(e.serverSyncTree_,t,n));var i=Oo(e,t);Eo(e,i)})),e.onDisconnect_=si(),so(e.eventQueue_,Xn(),r)}(e)}function yo(e,t,n){var r=new Qn("/.info/"+t),i=Br(n);e.infoData_.updateSnapshot(r,i);var a=ba(e.infoSyncTree_,r,i);so(e.eventQueue_,r,a)}function go(e){return e.nextWriteId_++}function ko(e,t,n,r,i){wo(e,"set",{path:t.toString(),value:n,priority:r});var a=po(e),o=Br(n,r),s=Ia(e.serverSyncTree_,t),u=Ma(o,s,a),c=go(e),l=ya(e.serverSyncTree_,t,u,c,!0);oo(e.eventQueue_,l),e.server_.put(t.toString(),o.val(!0),(function(n,r){var a="ok"===n;a||un("set at "+t+" failed: "+n);var o=ka(e.serverSyncTree_,c,!a);so(e.eventQueue_,t,o),Io(e,i,n,r)}));var h=Oo(e,t);Eo(e,h),so(e.eventQueue_,h,[])}function bo(e){e.persistentConnection_&&e.persistentConnection_.interrupt(lo)}function wo(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a="";t.persistentConnection_&&(a=t.persistentConnection_.id+":"),rn.apply(void 0,[a].concat(e(m)(r)))}function Io(e,t,n,r){t&&In((function(){if("ok"===n)t(null);else{var e=(n||"error").toUpperCase(),i=e;r&&(i+=": "+r);var a=new Error(i);a.code=e,t(a)}}))}function To(e,t,n){return Ia(e.serverSyncTree_,t,n)||Vr.EMPTY_NODE}function Co(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.transactionQueueTree_;if(t||Po(e,t),ja(t)){var n=Ro(e,t);U(n.length>0,"Sending zero length transaction queue");var r=n.every((function(e){return 0===e.status}));r&&xo(e,Ba(t),n)}else Ha(t)&&Va(t,(function(t){Co(e,t)}))}function xo(e,t,n){for(var r=n.map((function(e){return e.currentWriteId})),i=To(e,t,r),a=i,o=i.hash(),s=0;s<n.length;s++){var u=n[s];U(0===u.status,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;var c=or(t,u.path);a=a.updateChild(c,u.currentOutputSnapshotRaw)}var l=a.val(!0),h=t;e.server_.put(h.toString(),l,(function(r){wo(e,"transaction put response",{path:h.toString(),status:r});var i=[];if("ok"===r){for(var a=function(t){n[t].status=2,i=i.concat(ka(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&o.push((function(){return n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved)})),n[t].unwatcher()},o=[],s=0;s<n.length;s++)a(s);Po(e,Wa(e.transactionQueueTree_,t)),Co(e,e.transactionQueueTree_),so(e.eventQueue_,t,i);for(var u=0;u<o.length;u++)In(o[u])}else{if("datastale"===r)for(var c=0;c<n.length;c++)3===n[c].status?n[c].status=4:n[c].status=0;else{un("transaction at "+h.toString()+" failed: "+r);for(var l=0;l<n.length;l++)n[l].status=4,n[l].abortReason=r}Eo(e,t)}}),o)}function Eo(e,t){var n=So(e,t),r=Ba(n);return function(e,t,n){var r=function(r){var s,u=t[r],c=or(n,u.path),l=!1,h=void 0;if(U(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===u.status)l=!0,h=u.abortReason,a=a.concat(ka(e.serverSyncTree_,u.currentWriteId,!0));else if(0===u.status)if(u.retryCount>=25)l=!0,h="maxretry",a=a.concat(ka(e.serverSyncTree_,u.currentWriteId,!0));else{var d=To(e,u.path,o);u.currentInputSnapshot=d;var f=t[r].update(d.val());if(void 0!==f){eo("transaction failed: Data returned ",f,u.path);var v=Br(f);"object"==typeof f&&null!=f&&fe(f,".priority")||(v=v.updatePriority(d.getPriority()));var p=u.currentWriteId,m=po(e),_=Ma(v,d,m);u.currentOutputSnapshotRaw=v,u.currentOutputSnapshotResolved=_,u.currentWriteId=go(e),o.splice(o.indexOf(p),1),a=(a=a.concat(ya(e.serverSyncTree_,u.path,_,u.currentWriteId,u.applyLocally))).concat(ka(e.serverSyncTree_,p,!0))}else l=!0,h="nodata",a=a.concat(ka(e.serverSyncTree_,u.currentWriteId,!0))}so(e.eventQueue_,n,a),a=[],l&&(t[r].status=2,s=t[r].unwatcher,setTimeout(s,Math.floor(0)),t[r].onComplete&&("nodata"===h?i.push((function(){return t[r].onComplete(null,!1,t[r].currentInputSnapshot)})):i.push((function(){return t[r].onComplete(new Error(h),!1,null)}))))};if(0===t.length)return;for(var i=[],a=[],o=t.filter((function(e){return 0===e.status})).map((function(e){return e.currentWriteId})),s=0;s<t.length;s++)r(s);Po(e,e.transactionQueueTree_);for(var u=0;u<i.length;u++)In(i[u]);Co(e,e.transactionQueueTree_)}(e,Ro(e,n),r),r}function So(e,t){var n,r=e.transactionQueueTree_;for(n=$n(t);null!==n&&void 0===ja(r);)r=Wa(r,n),n=$n(t=er(t));return r}function Ro(e,t){var n=[];return No(e,t,n),n.sort((function(e,t){return e.order-t.order})),n}function No(e,t,n){var r=ja(t);if(r)for(var i=0;i<r.length;i++)n.push(r[i]);Va(t,(function(t){No(e,t,n)}))}function Po(e,t){var n=ja(t);if(n){for(var r=0,i=0;i<n.length;i++)2!==n[i].status&&(n[r]=n[i],r++);n.length=r,qa(t,n.length>0?n:void 0)}Va(t,(function(t){Po(e,t)}))}function Oo(e,t){var n=Ba(So(e,t)),r=Wa(e.transactionQueueTree_,t);return function(e,t,n){for(var r=n?e:e.parent;null!==r;){if(t(r))return!0;r=r.parent}}(r,(function(t){Ao(e,t)})),Ao(e,r),za(r,(function(t){Ao(e,t)})),n}function Ao(e,t){var n=ja(t);if(n){for(var r=[],i=[],a=-1,o=0;o<n.length;o++)3===n[o].status||(1===n[o].status?(U(a===o-1,"All SENT items should be at beginning of queue."),a=o,n[o].status=3,n[o].abortReason="set"):(U(0===n[o].status,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(ka(e.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));-1===a?qa(t,void 0):n.length=a+1,so(e.eventQueue_,Ba(t),i);for(var s=0;s<r.length;s++)In(r[s])}}
/**
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
 */var Do=function(e,t){var n=Lo(e),r=n.namespace;"firebase.com"===n.domain&&sn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||sn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&un("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");var i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new On(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new Qn(n.pathString)}},Lo=function(e){var t="",n="",r="",i="",a="",o=!0,s="https",u=443;if("string"==typeof e){var c=e.indexOf("//");c>=0&&(s=e.substring(0,c-1),e=e.substring(c+2));var l=e.indexOf("/");-1===l&&(l=e.length);var h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(l,h)),l<h&&(i=function(e){for(var t="",n=e.split("/"),r=0;r<n.length;r++)if(n[r].length>0){var i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(l,h)));var d=function(e){var t={};"?"===e.charAt(0)&&(e=e.substring(1));var n=!0,r=!1,i=void 0;try{for(var a,o=e.split("&")[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(0!==s.length){var u=s.split("=");2===u.length?t[decodeURIComponent(u[0])]=decodeURIComponent(u[1]):un("Invalid query segment '".concat(s,"' in query '").concat(e,"'"))}}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return t}(e.substring(Math.min(e.length,h)));(c=t.indexOf(":"))>=0?(o="https"===s||"wss"===s,u=parseInt(t.substring(c+1),10)):c=t.length;var f=t.slice(0,c);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{var v=t.indexOf(".");r=t.substring(0,v).toLowerCase(),n=t.substring(v+1),a=r}"ns"in d&&(a=d.ns)}return{host:t,port:u,domain:n,subdomain:r,secure:o,scheme:s,pathString:i,namespace:a}},Mo=function(){"use strict";function t(n,r,i,a){e(f)(this,t),this._repo=n,this._path=r,this._queryParams=i,this._orderByCalled=a}return e(v)(t,[{key:"key",get:function(){return ar(this._path)?null:tr(this._path)}},{key:"ref",get:function(){return new Fo(this._repo,this._path)}},{key:"_queryIdentifier",get:function(){var e=ii(this._queryParams),t=pn(e);return"{}"===t?"default":t}},{key:"_queryObject",get:function(){return ii(this._queryParams)}},{key:"isEqual",value:function(e){if(!((e=Se(e))instanceof t))return!1;var n=this._repo===e._repo,r=ur(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}},{key:"toJSON",value:function(){return this.toString()}},{key:"toString",value:function(){return this._repo.toString()+function(e){for(var t="",n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}]),t}();var Fo=function(t){"use strict";e(k)(r,t);var n=e(w)(r);function r(t,i){return e(f)(this,r),n.call(this,t,i,new ni,!1)}return e(v)(r,[{key:"parent",get:function(){var e=rr(this._path);return null===e?null:new r(this._repo,e)}},{key:"root",get:function(){for(var e=this;null!==e.parent;)e=e.parent;return e}}]),r}(Mo);function Uo(e,t){return(e=Se(e))._checkNotDeleted("ref"),void 0!==t?Wo(e._root,t):e._root}function Wo(e,t){var n,r,i,a;return null===$n((e=Se(e))._path)?(n="child",r="path",a=!1,(i=t)&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),no(n,r,i,a)):no("child","path",t,!1),new Fo(e._repo,ir(e._path,t))}function jo(e,t){e=Se(e),ro("set",e._path),Za("set",t,e._path,!1);var n=new re;return ko(e._repo,e._path,t,null,n.wrapCallback((function(){}))),n.promise}function qo(e,t){to("update",t,e._path,!1);var n=new re;return function(e,t,n,r){wo(e,"update",{path:t.toString(),value:n});var i=!0,a=po(e),o={};if(_n(n,(function(n,r){i=!1,o[n]=La(ir(t,n),Br(r),e.serverSyncTree_,a)})),i)rn("update() called with empty data.  Don't do anything."),Io(0,r,"ok",void 0);else{var s=go(e),u=ga(e.serverSyncTree_,t,o,s);oo(e.eventQueue_,u),e.server_.merge(t.toString(),n,(function(n,i){var a="ok"===n;a||un("update at "+t+" failed: "+n);var o=ka(e.serverSyncTree_,s,!a),u=o.length>0?Eo(e,t):t;so(e.eventQueue_,u,o),Io(0,r,n,i)})),_n(n,(function(n){var r=Oo(e,ir(t,n));Eo(e,r)})),so(e.eventQueue_,t,[])}}(e._repo,e._path,t,n.wrapCallback((function(){}))),n.promise}!function(e){U(!la,"__referenceConstructor has already been defined"),la=e}(Fo),function(e){U(!va,"__referenceConstructor has already been defined"),va=e}(Fo);
/**
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
 */
var Ho={},Vo=!1;function zo(e,t,n,r){e.repoInfo_=new On("".concat(t,":").concat(n),!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams),r&&(e.authTokenProvider_=r)}function Bo(e,t,n,r,i){var a=r||e.options.databaseURL;void 0===a&&(e.options.projectId||sn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),rn("Using default host for project ",e.options.projectId),a="".concat(e.options.projectId,"-default-rtdb.firebaseio.com"));var o,s=Do(a,i),u=s.repoInfo,l=void 0;void 0!==c&&c.env&&(l=c.env.FIREBASE_DATABASE_EMULATOR_HOST),l?(o=!0,a="http://".concat(l,"?ns=").concat(u.namespace),u=(s=Do(a,i)).repoInfo):o=!s.repoInfo.secure;var h=i&&o?new En(En.OWNER):new xn(e.name,e.options,t);io("Invalid Firebase Database URL",s),ar(s.path)||sn("Database URL must point to the root of a Firebase Database (not including a child path).");var d=function(e,t,n,r){var i=Ho[t.name];i||(i={},Ho[t.name]=i);var a=i[e.toURLString()];a&&sn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return a=new ho(e,Vo,n,r),i[e.toURLString()]=a,a}(u,e,h,new Cn(e.name,n));return new Ko(d,e)}var Ko=function(){"use strict";function t(n,r){e(f)(this,t),this._repoInternal=n,this.app=r,this.type="database",this._instanceStarted=!1}return e(v)(t,[{key:"_repo",get:function(){return this._instanceStarted||(fo(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}},{key:"_root",get:function(){return this._rootInternal||(this._rootInternal=new Fo(this._repo,Xn())),this._rootInternal}},{key:"_delete",value:function(){var e,t,n;return null!==this._rootInternal&&(e=this._repo,t=this.app.name,(n=Ho[t])&&n[e.key]===e||sn("Database ".concat(t,"(").concat(e.repoInfo_,") has already been deleted.")),bo(e),delete n[e.key],this._repoInternal=null,this._rootInternal=null),Promise.resolve()}},{key:"_checkNotDeleted",value:function(e){null===this._rootInternal&&sn("Cannot call "+e+" on a deleted database.")}}]),t}();function Go(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};(e=Se(e))._checkNotDeleted("useEmulator"),e._instanceStarted&&sn("Cannot call useEmulator() after instance has already been initialized.");var i=e._repoInternal,a=void 0;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&sn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),a=new En(En.OWNER);else if(r.mockUserToken){var o="string"==typeof r.mockUserToken?r.mockUserToken:ie(r.mockUserToken,e.app.options.projectId);a=new En(o)}zo(i,t,n,a)}pr.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},pr.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};!
/**
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
 */
function(e){Vt=wt,_t(new Re("database",(function(e,t){var n=t.instanceIdentifier;return Bo(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),n)}),"PUBLIC").setMultipleInstances(!0)),Ct(qt,Ht,e),Ct(qt,Ht,"esm2017")}
/**
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
 */();g=i("ds8z5"),d=i("bpxeT"),f=i("8MBJY"),v=i("a2hTj"),p=i("hKHmD");var Yo={};Object.defineProperty(Yo,"__esModule",{value:!0}),Yo.default=function(e,t,n){return Xo(e,t,n)};var Jo,Qo=(Jo=i("2mz0K"))&&Jo.__esModule?Jo:{default:Jo};function Xo(e,t,n){return(Xo="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=Qo.default(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n||e):i.value}})(e,t,n)}var $o=i("fVNic");k=i("eYQtU"),y=i("1t1Wn"),m=i("8nrFW"),w=i("2MbLg"),_=i("2TvXO");function Zo(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;function es(){return e(p)({},"dependent-sdk-initialized-before-auth","Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.")}var ts=es,ns=new oe("auth","Firebase",es()),rs=new qe("@firebase/auth");function is(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a;rs.logLevel<=Oe.ERROR&&(a=rs).error.apply(a,["Auth (".concat(wt,"): ").concat(t)].concat(e(m)(r)))}
/**
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
 */function as(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];throw us.apply(void 0,[t].concat(e(m)(r)))}function os(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return us.apply(void 0,[t].concat(e(m)(r)))}function ss(t,n,r){var i=Object.assign(Object.assign({},ts()),e(p)({},n,r));return new oe("auth","Firebase",i).create(n,{appName:t.name})}function us(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a;if("string"!=typeof t){var o,s=r[0],u=e(m)(r.slice(1));return u[0]&&(u[0].appName=t.name),(o=t._errorFactory).create.apply(o,[s].concat(e(m)(u)))}return(a=ns).create.apply(a,[t].concat(e(m)(r)))}function cs(t,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];if(!t)throw us.apply(void 0,[n].concat(e(m)(i)))}function ls(e){var t="INTERNAL ASSERTION FAILED: "+e;throw is(t),new Error(t)}function hs(e,t){e||ls(t)}
/**
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
 */var ds=new Map;function fs(e){hs(e instanceof Function,"Expected a class definition");var t=ds.get(e);return t?(hs(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,ds.set(e,t),t)}
/**
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
 */function vs(e,t){var n=yt(e,"auth");if(n.isInitialized()){var r=n.getImmediate();if(_e(n.getOptions(),null!=t?t:{}))return r;as(r,"already-initialized")}return n.initialize({options:t})}
/**
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
 */
function ps(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function ms(){return"http:"===_s()||"https:"===_s()}function _s(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
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
 */function ys(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||!ms()&&("object"!=typeof(e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0)||void 0===e.id)&&!("connection"in navigator)||navigator.onLine;var e}
/**
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
 */
var gs=function(){"use strict";function t(n,r){e(f)(this,t),this.shortDelay=n,this.longDelay=r,hs(r>n,"Short delay should be less than long delay!"),this.isMobile=Y()||J()}return e(v)(t,[{key:"get",value:function(){return ys()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}]),t}();
/**
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
 */function ks(e,t){hs(e.emulator,"Emulator should always be set here");var n=e.emulator.url;return t?"".concat(n).concat(t.startsWith("/")?t.slice(1):t):n}
/**
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
 */var bs,ws=function(){"use strict";function t(){e(f)(this,t)}return e(v)(t,null,[{key:"initialize",value:function(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}},{key:"fetch",value:function(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void ls("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"headers",value:function(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void ls("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"response",value:function(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void ls("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}]),t}(),Is=(bs={},e(p)(bs,"CREDENTIAL_MISMATCH","custom-token-mismatch"),e(p)(bs,"MISSING_CUSTOM_TOKEN","internal-error"),e(p)(bs,"INVALID_IDENTIFIER","invalid-email"),e(p)(bs,"MISSING_CONTINUE_URI","internal-error"),e(p)(bs,"INVALID_PASSWORD","wrong-password"),e(p)(bs,"MISSING_PASSWORD","internal-error"),e(p)(bs,"EMAIL_EXISTS","email-already-in-use"),e(p)(bs,"PASSWORD_LOGIN_DISABLED","operation-not-allowed"),e(p)(bs,"INVALID_IDP_RESPONSE","invalid-credential"),e(p)(bs,"INVALID_PENDING_TOKEN","invalid-credential"),e(p)(bs,"FEDERATED_USER_ID_ALREADY_LINKED","credential-already-in-use"),e(p)(bs,"MISSING_REQ_TYPE","internal-error"),e(p)(bs,"EMAIL_NOT_FOUND","user-not-found"),e(p)(bs,"RESET_PASSWORD_EXCEED_LIMIT","too-many-requests"),e(p)(bs,"EXPIRED_OOB_CODE","expired-action-code"),e(p)(bs,"INVALID_OOB_CODE","invalid-action-code"),e(p)(bs,"MISSING_OOB_CODE","internal-error"),e(p)(bs,"CREDENTIAL_TOO_OLD_LOGIN_AGAIN","requires-recent-login"),e(p)(bs,"INVALID_ID_TOKEN","invalid-user-token"),e(p)(bs,"TOKEN_EXPIRED","user-token-expired"),e(p)(bs,"USER_NOT_FOUND","user-token-expired"),e(p)(bs,"TOO_MANY_ATTEMPTS_TRY_LATER","too-many-requests"),e(p)(bs,"INVALID_CODE","invalid-verification-code"),e(p)(bs,"INVALID_SESSION_INFO","invalid-verification-id"),e(p)(bs,"INVALID_TEMPORARY_PROOF","invalid-credential"),e(p)(bs,"MISSING_SESSION_INFO","missing-verification-id"),e(p)(bs,"SESSION_EXPIRED","code-expired"),e(p)(bs,"MISSING_ANDROID_PACKAGE_NAME","missing-android-pkg-name"),e(p)(bs,"UNAUTHORIZED_DOMAIN","unauthorized-continue-uri"),e(p)(bs,"INVALID_OAUTH_CLIENT_ID","invalid-oauth-client-id"),e(p)(bs,"ADMIN_ONLY_OPERATION","admin-restricted-operation"),e(p)(bs,"INVALID_MFA_PENDING_CREDENTIAL","invalid-multi-factor-session"),e(p)(bs,"MFA_ENROLLMENT_NOT_FOUND","multi-factor-info-not-found"),e(p)(bs,"MISSING_MFA_ENROLLMENT_ID","missing-multi-factor-info"),e(p)(bs,"MISSING_MFA_PENDING_CREDENTIAL","missing-multi-factor-session"),e(p)(bs,"SECOND_FACTOR_EXISTS","second-factor-already-in-use"),e(p)(bs,"SECOND_FACTOR_LIMIT_EXCEEDED","maximum-second-factor-count-exceeded"),e(p)(bs,"BLOCKING_FUNCTION_ERROR_RESPONSE","internal-error"),bs),Ts=new gs(3e4,6e4);function Cs(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}function xs(e,t,n,r){return Es.apply(this,arguments)}function Es(){return Es=e(d)(e(_).mark((function t(n,r,i,a){var o,s=arguments;return e(_).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=s.length>4&&void 0!==s[4]?s[4]:{},t.abrupt("return",Ss(n,o,e(d)(e(_).mark((function t(){var o,s,u,c;return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={},s={},a&&("GET"===r?s=a:o={body:JSON.stringify(a)}),u=ge(Object.assign({key:n.config.apiKey},s)).slice(1),e.next=6,n._getAdditionalHeaders();case 6:return(c=e.sent)["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),e.abrupt("return",ws.fetch()(Os(n,n.config.apiHost,i,u),Object.assign({method:r,headers:c,referrerPolicy:"no-referrer"},o)));case 10:case"end":return e.stop()}}),t)})))));case 2:case"end":return t.stop()}}),t)}))),Es.apply(this,arguments)}function Ss(e,t,n){return Rs.apply(this,arguments)}function Rs(){return(Rs=e(d)(e(_).mark((function t(n,r,i){var a,o,s,u,c,l,h,d,f;return e(_).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n._canInitEmulator=!1,a=Object.assign(Object.assign({},Is),r),t.prev=2,o=new As(n),t.next=6,Promise.race([i(),o.promise]);case 6:return s=t.sent,o.clearNetworkTimeout(),t.next=10,s.json();case 10:if(!("needConfirmation"in(u=t.sent))){t.next=13;break}throw Ds(n,"account-exists-with-different-credential",u);case 13:if(!s.ok||"errorMessage"in u){t.next=17;break}return t.abrupt("return",u);case 17:if(c=s.ok?u.errorMessage:u.error.message,l=e(y)(c.split(" : "),2),h=l[0],d=l[1],"FEDERATED_USER_ID_ALREADY_LINKED"!==h){t.next=23;break}throw Ds(n,"credential-already-in-use",u);case 23:if("EMAIL_EXISTS"!==h){t.next=27;break}throw Ds(n,"email-already-in-use",u);case 27:if("USER_DISABLED"!==h){t.next=29;break}throw Ds(n,"user-disabled",u);case 29:if(f=a[h]||h.toLowerCase().replace(/[_\s]+/g,"-"),!d){t.next=34;break}throw ss(n,f,d);case 34:as(n,f);case 35:t.next=42;break;case 37:if(t.prev=37,t.t0=t.catch(2),!(t.t0 instanceof ae)){t.next=41;break}throw t.t0;case 41:as(n,"network-request-failed");case 42:case"end":return t.stop()}}),t,null,[[2,37]])})))).apply(this,arguments)}function Ns(e,t,n,r){return Ps.apply(this,arguments)}function Ps(){return Ps=e(d)(e(_).mark((function t(n,r,i,a){var o,s,u=arguments;return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=u.length>4&&void 0!==u[4]?u[4]:{},e.next=3,xs(n,r,i,a,o);case 3:return"mfaPendingCredential"in(s=e.sent)&&as(n,"multi-factor-auth-required",{_serverResponse:s}),e.abrupt("return",s);case 6:case"end":return e.stop()}}),t)}))),Ps.apply(this,arguments)}function Os(e,t,n,r){var i="".concat(t).concat(n,"?").concat(r);return e.config.emulator?ks(e.config,i):"".concat(e.config.apiScheme,"://").concat(i)}var As=function(){"use strict";function t(n){var r=this;e(f)(this,t),this.auth=n,this.timer=null,this.promise=new Promise((function(e,t){var n=r;r.timer=setTimeout((function(){return t(os(n.auth,"network-request-failed"))}),Ts.get())}))}return e(v)(t,[{key:"clearNetworkTimeout",value:function(){clearTimeout(this.timer)}}]),t}();function Ds(e,t,n){var r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);var i=os(e,t,r);return i.customData._tokenResponse=n,i}function Ls(e,t){return Ms.apply(this,arguments)}function Ms(){return(Ms=
/**
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
 */
e(d)(e(_).mark((function t(n,r){return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",xs(n,"POST","/v1/accounts:delete",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Fs(e,t){return Us.apply(this,arguments)}function Us(){return(Us=e(d)(e(_).mark((function t(n,r){return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",xs(n,"POST","/v1/accounts:lookup",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
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
 */function Ws(e){if(e)try{var t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
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
 */function js(){return js=e(d)(e(_).mark((function t(n){var r,i,a,o,s,u,c=arguments;return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=c.length>1&&void 0!==c[1]&&c[1],i=Se(n),e.next=4,i.getIdToken(r);case 4:return a=e.sent,cs((o=Hs(a))&&o.exp&&o.auth_time&&o.iat,i.auth,"internal-error"),s="object"==typeof o.firebase?o.firebase:void 0,u=null==s?void 0:s.sign_in_provider,e.abrupt("return",{claims:o,token:a,authTime:Ws(qs(o.auth_time)),issuedAtTime:Ws(qs(o.iat)),expirationTime:Ws(qs(o.exp)),signInProvider:u||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null});case 10:case"end":return e.stop()}}),t)}))),js.apply(this,arguments)}function qs(e){return 1e3*Number(e)}function Hs(t){var n,r=e(y)(t.split("."),3),i=r[0],a=r[1],o=r[2];if(void 0===i||void 0===a||void 0===o)return is("JWT malformed, contained fewer than 3 sections"),null;try{var s=z(a);return s?JSON.parse(s):(is("Failed to decode base64 JWT payload"),null)}catch(e){return is("Caught error parsing JWT payload as JSON",null===(n=e)||void 0===n?void 0:n.toString()),null}}function Vs(e,t){return zs.apply(this,arguments)}function zs(){return zs=
/**
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
 */
e(d)(e(_).mark((function t(n,r){var i=arguments;return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i.length>2&&void 0!==i[2]&&i[2])){e.next=3;break}return e.abrupt("return",r);case 3:return e.prev=3,e.next=6,r;case 6:return e.abrupt("return",e.sent);case 9:if(e.prev=9,e.t0=e.catch(3),!(e.t0 instanceof ae&&Bs(e.t0))){e.next=15;break}if(n.auth.currentUser!==n){e.next=15;break}return e.next=15,n.auth.signOut();case 15:throw e.t0;case 16:case"end":return e.stop()}}),t,null,[[3,9]])}))),zs.apply(this,arguments)}function Bs(e){var t=e.code;return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
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
 */var Ks=function(){"use strict";function t(n){e(f)(this,t),this.user=n,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return e(v)(t,[{key:"_start",value:function(){this.isRunning||(this.isRunning=!0,this.schedule())}},{key:"_stop",value:function(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}},{key:"getInterval",value:function(e){var t;if(e){var n=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),n}this.errorBackoff=3e4;var r=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,r)}},{key:"schedule",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.isRunning){var n=this.getInterval(t),r=this;this.timerId=setTimeout(e(d)(e(_).mark((function t(){return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.iteration();case 2:case"end":return e.stop()}}),t)}))),n)}}},{key:"iteration",value:function(){var t=this;return e(d)(e(_).mark((function n(){var r;return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,t.user.getIdToken(!0);case 4:e.next=10;break;case 6:return e.prev=6,e.t0=e.catch(1),"auth/network-request-failed"===(null===(r=e.t0)||void 0===r?void 0:r.code)&&t.schedule(!0),e.abrupt("return");case 10:t.schedule();case 11:case"end":return e.stop()}}),n,null,[[1,6]])})))()}}]),t}(),Gs=function(){"use strict";function t(n,r){e(f)(this,t),this.createdAt=n,this.lastLoginAt=r,this._initializeTime()}return e(v)(t,[{key:"_initializeTime",value:function(){this.lastSignInTime=Ws(this.lastLoginAt),this.creationTime=Ws(this.createdAt)}},{key:"_copy",value:function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}},{key:"toJSON",value:function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}]),t}();
/**
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
 */function Ys(e){return Js.apply(this,arguments)}function Js(){return(Js=
/**
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
 */
e(d)(e(_).mark((function t(n){var r,i,a,o,s,u,c,l,h,d,f;return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.auth,e.next=4,n.getIdToken();case 4:return a=e.sent,e.next=7,Vs(n,Fs(i,{idToken:a}));case 7:cs(null==(o=e.sent)?void 0:o.users.length,i,"internal-error"),s=o.users[0],n._notifyReloadListener(s),u=(null===(r=s.providerUserInfo)||void 0===r?void 0:r.length)?$s(s.providerUserInfo):[],c=Xs(n.providerData,u),l=n.isAnonymous,h=!(n.email&&s.passwordHash||(null==c?void 0:c.length)),d=!!l&&h,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new Gs(s.createdAt,s.lastLoginAt),isAnonymous:d},Object.assign(n,f);case 18:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Qs(){return(Qs=e(d)(e(_).mark((function t(n){var r;return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Se(n),e.next=3,Ys(r);case 3:return e.next=5,r.auth._persistUserIfCurrent(r);case 5:r.auth._notifyListenersIfCurrent(r);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Xs(t,n){var r=t.filter((function(e){return!n.some((function(t){return t.providerId===e.providerId}))}));return e(m)(r).concat(e(m)(n))}function $s(e){return e.map((function(e){var t=e.providerId,n=Zo(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}function Zs(e,t){return eu.apply(this,arguments)}function eu(){return(eu=
/**
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
 */
e(d)(e(_).mark((function t(n,r){var i;return e(_).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Ss(n,{},e(d)(e(_).mark((function t(){var i,a,o,s,u,c;return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=ge({grant_type:"refresh_token",refresh_token:r}).slice(1),a=n.config,o=a.tokenApiHost,s=a.apiKey,u=Os(n,o,"/v1/token","key=".concat(s)),e.next=5,n._getAdditionalHeaders();case 5:return(c=e.sent)["Content-Type"]="application/x-www-form-urlencoded",e.abrupt("return",ws.fetch()(u,{method:"POST",headers:c,body:i}));case 8:case"end":return e.stop()}}),t)}))));case 2:return i=t.sent,t.abrupt("return",{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token});case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}
/**
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
 */var tu=function(){"use strict";function t(){e(f)(this,t),this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return e(v)(t,[{key:"isExpired",get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}},{key:"updateFromServerResponse",value:function(e){cs(e.idToken,"internal-error"),cs(void 0!==e.idToken,"internal-error"),cs(void 0!==e.refreshToken,"internal-error");var t,n,r="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):(t=e.idToken,cs(n=Hs(t),"internal-error"),cs(void 0!==n.exp,"internal-error"),cs(void 0!==n.iat,"internal-error"),Number(n.exp)-Number(n.iat));this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}},{key:"getToken",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(d)(e(_).mark((function i(){return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(cs(!r.accessToken||r.refreshToken,t,"user-token-expired"),n||!r.accessToken||r.isExpired){e.next=3;break}return e.abrupt("return",r.accessToken);case 3:if(!r.refreshToken){e.next=7;break}return e.next=6,r.refresh(t,r.refreshToken);case 6:return e.abrupt("return",r.accessToken);case 7:return e.abrupt("return",null);case 8:case"end":return e.stop()}}),i)})))()}},{key:"clearRefreshToken",value:function(){this.refreshToken=null}},{key:"refresh",value:function(t,n){var r=this;return e(d)(e(_).mark((function i(){var a,o,s,u;return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Zs(t,n);case 2:a=e.sent,o=a.accessToken,s=a.refreshToken,u=a.expiresIn,r.updateTokensAndExpiration(o,s,Number(u));case 7:case"end":return e.stop()}}),i)})))()}},{key:"updateTokensAndExpiration",value:function(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}},{key:"toJSON",value:function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}},{key:"_assign",value:function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}},{key:"_clone",value:function(){return Object.assign(new t,this.toJSON())}},{key:"_performRefresh",value:function(){return ls("not implemented")}}],[{key:"fromJSON",value:function(e,n){var r=n.refreshToken,i=n.accessToken,a=n.expirationTime,o=new t;return r&&(cs("string"==typeof r,"internal-error",{appName:e}),o.refreshToken=r),i&&(cs("string"==typeof i,"internal-error",{appName:e}),o.accessToken=i),a&&(cs("number"==typeof a,"internal-error",{appName:e}),o.expirationTime=a),o}}]),t}();
/**
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
 */function nu(e,t){cs("string"==typeof e||void 0===e,"internal-error",{appName:t})}var ru=function(){"use strict";function t(n){e(f)(this,t);var r=n.uid,i=n.auth,a=n.stsTokenManager,o=Zo(n,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ks(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=i,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?e(m)(o.providerData):[],this.metadata=new Gs(o.createdAt||void 0,o.lastLoginAt||void 0)}return e(v)(t,[{key:"getIdToken",value:function(t){var n=this;return e(d)(e(_).mark((function r(){var i;return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Vs(n,n.stsTokenManager.getToken(n.auth,t));case 2:if(cs(i=e.sent,n.auth,"internal-error"),n.accessToken===i){e.next=9;break}return n.accessToken=i,e.next=8,n.auth._persistUserIfCurrent(n);case 8:n.auth._notifyListenersIfCurrent(n);case 9:return e.abrupt("return",i);case 10:case"end":return e.stop()}}),r)})))()}},{key:"getIdTokenResult",value:function(e){return function(e){return js.apply(this,arguments)}(this,e)}},{key:"reload",value:function(){return function(e){return Qs.apply(this,arguments)}(this)}},{key:"_assign",value:function(e){this!==e&&(cs(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((function(e){return Object.assign({},e)})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}},{key:"_clone",value:function(e){return new t(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}},{key:"_onReload",value:function(e){cs(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}},{key:"_notifyReloadListener",value:function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}},{key:"_startProactiveRefresh",value:function(){this.proactiveRefresh._start()}},{key:"_stopProactiveRefresh",value:function(){this.proactiveRefresh._stop()}},{key:"_updateTokensIfNecessary",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(d)(e(_).mark((function i(){var a;return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=!1,t.idToken&&t.idToken!==r.stsTokenManager.accessToken&&(r.stsTokenManager.updateFromServerResponse(t),a=!0),!n){e.next=5;break}return e.next=5,Ys(r);case 5:return e.next=7,r.auth._persistUserIfCurrent(r);case 7:a&&r.auth._notifyListenersIfCurrent(r);case 8:case"end":return e.stop()}}),i)})))()}},{key:"delete",value:function(){var t=this;return e(d)(e(_).mark((function n(){var r;return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getIdToken();case 2:return r=e.sent,e.next=5,Vs(t,Ls(t.auth,{idToken:r}));case 5:return t.stsTokenManager.clearRefreshToken(),e.abrupt("return",t.auth.signOut());case 7:case"end":return e.stop()}}),n)})))()}},{key:"toJSON",value:function(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((function(e){return Object.assign({},e)})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}},{key:"refreshToken",get:function(){return this.stsTokenManager.refreshToken||""}}],[{key:"_fromJSON",value:function(e,n){var r,i,a,o,s,u,c,l,h=null!==(r=n.displayName)&&void 0!==r?r:void 0,d=null!==(i=n.email)&&void 0!==i?i:void 0,f=null!==(a=n.phoneNumber)&&void 0!==a?a:void 0,v=null!==(o=n.photoURL)&&void 0!==o?o:void 0,p=null!==(s=n.tenantId)&&void 0!==s?s:void 0,m=null!==(u=n._redirectEventId)&&void 0!==u?u:void 0,_=null!==(c=n.createdAt)&&void 0!==c?c:void 0,y=null!==(l=n.lastLoginAt)&&void 0!==l?l:void 0,g=n.uid,k=n.emailVerified,b=n.isAnonymous,w=n.providerData,I=n.stsTokenManager;cs(g&&I,e,"internal-error");var T=tu.fromJSON(this.name,I);cs("string"==typeof g,e,"internal-error"),nu(h,e.name),nu(d,e.name),cs("boolean"==typeof k,e,"internal-error"),cs("boolean"==typeof b,e,"internal-error"),nu(f,e.name),nu(v,e.name),nu(p,e.name),nu(m,e.name),nu(_,e.name),nu(y,e.name);var C=new t({uid:g,auth:e,email:d,emailVerified:k,displayName:h,isAnonymous:b,photoURL:v,phoneNumber:f,tenantId:p,stsTokenManager:T,createdAt:_,lastLoginAt:y});return w&&Array.isArray(w)&&(C.providerData=w.map((function(e){return Object.assign({},e)}))),m&&(C._redirectEventId=m),C}},{key:"_fromIdTokenResponse",value:function(n,r){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e(d)(e(_).mark((function a(){var o,s;return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(o=new tu).updateFromServerResponse(r),s=new t({uid:r.localId,auth:n,stsTokenManager:o,isAnonymous:i}),e.next=5,Ys(s);case 5:return e.abrupt("return",s);case 6:case"end":return e.stop()}}),a)})))()}}]),t}(),iu=function(){"use strict";function t(){e(f)(this,t),this.type="NONE",this.storage={}}return e(v)(t,[{key:"_isAvailable",value:function(){return e(d)(e(_).mark((function t(){return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),t)})))()}},{key:"_set",value:function(t,n){var r=this;return e(d)(e(_).mark((function i(){return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.storage[t]=n;case 1:case"end":return e.stop()}}),i)})))()}},{key:"_get",value:function(t){var n=this;return e(d)(e(_).mark((function r(){var i;return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.storage[t],e.abrupt("return",void 0===i?null:i);case 2:case"end":return e.stop()}}),r)})))()}},{key:"_remove",value:function(t){var n=this;return e(d)(e(_).mark((function r(){return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:delete n.storage[t];case 1:case"end":return e.stop()}}),r)})))()}},{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),t}();
/**
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
 */iu.type="NONE";var au=iu;
/**
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
 */function ou(e,t,n){return"firebase:".concat(e,":").concat(t,":").concat(n)}var su=function(){"use strict";function t(n,r,i){e(f)(this,t),this.persistence=n,this.auth=r,this.userKey=i;var a=this.auth,o=a.config,s=a.name;this.fullUserKey=ou(this.userKey,o.apiKey,s),this.fullPersistenceKey=ou("persistence",o.apiKey,s),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return e(v)(t,[{key:"setCurrentUser",value:function(e){return this.persistence._set(this.fullUserKey,e.toJSON())}},{key:"getCurrentUser",value:function(){var t=this;return e(d)(e(_).mark((function n(){var r;return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.persistence._get(t.fullUserKey);case 2:return r=e.sent,e.abrupt("return",r?ru._fromJSON(t.auth,r):null);case 4:case"end":return e.stop()}}),n)})))()}},{key:"removeCurrentUser",value:function(){return this.persistence._remove(this.fullUserKey)}},{key:"savePersistenceForRedirect",value:function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}},{key:"setPersistence",value:function(t){var n=this;return e(d)(e(_).mark((function r(){var i;return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.persistence!==t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,n.getCurrentUser();case 4:return i=e.sent,e.next=7,n.removeCurrentUser();case 7:if(n.persistence=t,!i){e.next=10;break}return e.abrupt("return",n.setCurrentUser(i));case 10:case"end":return e.stop()}}),r)})))()}},{key:"delete",value:function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}}],[{key:"create",value:function(n,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"authUser";return e(d)(e(_).mark((function a(){var o,s,u,c,l,h,f,v,p,m,y,g,k;return e(_).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(r.length){a.next=2;break}return a.abrupt("return",new t(fs(au),n,i));case 2:return a.next=4,Promise.all(r.map(function(){var t=e(d)(e(_).mark((function t(n){return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._isAvailable();case 2:if(!e.sent){e.next=4;break}return e.abrupt("return",n);case 4:return e.abrupt("return",void 0);case 5:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 4:o=a.sent.filter((function(e){return e})),s=o[0]||fs(au),u=ou(i,n.config.apiKey,n.name),c=null,l=!0,h=!1,f=void 0,a.prev=9,v=r[Symbol.iterator]();case 11:if(l=(p=v.next()).done){a.next=29;break}return m=p.value,a.prev=13,a.next=16,m._get(u);case 16:if(!(y=a.sent)){a.next=22;break}return g=ru._fromJSON(n,y),m!==s&&(c=g),s=m,a.abrupt("break",29);case 22:a.next=26;break;case 24:a.prev=24,a.t0=a.catch(13);case 26:l=!0,a.next=11;break;case 29:a.next=35;break;case 31:a.prev=31,a.t1=a.catch(9),h=!0,f=a.t1;case 35:a.prev=35,a.prev=36,l||null==v.return||v.return();case 38:if(a.prev=38,!h){a.next=41;break}throw f;case 41:return a.finish(38);case 42:return a.finish(35);case 43:if(k=o.filter((function(e){return e._shouldAllowMigration})),s._shouldAllowMigration&&k.length){a.next=46;break}return a.abrupt("return",new t(s,n,i));case 46:if(s=k[0],!c){a.next=50;break}return a.next=50,s._set(u,c.toJSON());case 50:return a.next=52,Promise.all(r.map(function(){var t=e(d)(e(_).mark((function t(n){return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n===s){e.next=8;break}return e.prev=1,e.next=4,n._remove(u);case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),t,null,[[1,6]])})));return function(e){return t.apply(this,arguments)}}()));case 52:return a.abrupt("return",new t(s,n,i));case 53:case"end":return a.stop()}}),a,null,[[9,31,35,43],[13,24],[36,,38,42]])})))()}}]),t}();
/**
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
 */function uu(e){var t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(du(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(cu(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(vu(t))return"Blackberry";if(pu(t))return"Webos";if(lu(t))return"Safari";if((t.includes("chrome/")||hu(t))&&!t.includes("edge/"))return"Chrome";if(fu(t))return"Android";var n=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);return 2===(null==n?void 0:n.length)?n[1]:"Other"}function cu(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G();return/firefox\//i.test(e)}function lu(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G(),t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function hu(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G();return/crios\//i.test(e)}function du(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G();return/iemobile/i.test(e)}function fu(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G();return/android/i.test(e)}function vu(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G();return/blackberry/i.test(e)}function pu(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G();return/webos/i.test(e)}function mu(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G();return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function _u(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G();return mu(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function yu(){return((e=G()).indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0)&&10===document.documentMode;var e}function gu(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G();return mu(e)||fu(e)||pu(e)||vu(e)||/windows phone/i.test(e)||du(e)}
/**
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
 */
function ku(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(e){case"Browser":t=uu(G());break;case"Worker":t="".concat(uu(G()),"-").concat(e);break;default:t=e}var r=n.length?n.join(","):"FirebaseCore-web";return"".concat(t,"/","JsCore","/").concat(wt,"/").concat(r)}
/**
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
 */var bu=function(){"use strict";function t(n){e(f)(this,t),this.auth=n,this.queue=[]}return e(v)(t,[{key:"pushCallback",value:function(e,t){var n=this,r=function(t){return new Promise((function(n,r){try{n(e(t))}catch(e){r(e)}}))};r.onAbort=t,this.queue.push(r);var i=this.queue.length-1;return function(){n.queue[i]=function(){return Promise.resolve()}}}},{key:"runMiddleware",value:function(t){var n=this;return e(d)(e(_).mark((function r(){var i,a,o,s,u,c,l,h,d,f,v,p,m,y;return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.auth.currentUser!==t){e.next=3;break}return e.abrupt("return");case 3:a=[],e.prev=4,o=!0,s=!1,u=void 0,e.prev=6,c=n.queue[Symbol.iterator]();case 8:if(o=(l=c.next()).done){e.next=16;break}return h=l.value,e.next=12,h(t);case 12:h.onAbort&&a.push(h.onAbort);case 13:o=!0,e.next=8;break;case 16:e.next=22;break;case 18:e.prev=18,e.t0=e.catch(6),s=!0,u=e.t0;case 22:e.prev=22,e.prev=23,o||null==c.return||c.return();case 25:if(e.prev=25,!s){e.next=28;break}throw u;case 28:return e.finish(25);case 29:return e.finish(22);case 30:e.next=53;break;case 32:for(e.prev=32,e.t1=e.catch(4),a.reverse(),d=!0,f=!1,v=void 0,e.prev=36,p=a[Symbol.iterator]();!(d=(m=p.next()).done);d=!0){y=m.value;try{y()}catch(e){}}e.next=44;break;case 40:e.prev=40,e.t2=e.catch(36),f=!0,v=e.t2;case 44:e.prev=44,e.prev=45,d||null==p.return||p.return();case 47:if(e.prev=47,!f){e.next=50;break}throw v;case 50:return e.finish(47);case 51:return e.finish(44);case 52:throw n.auth._errorFactory.create("login-blocked",{originalMessage:null===(i=e.t1)||void 0===i?void 0:i.message});case 53:case"end":return e.stop()}}),r,null,[[4,32],[6,18,22,30],[23,,25,29],[36,40,44,52],[45,,47,51]])})))()}}]),t}(),wu=function(){"use strict";function t(n,r,i){e(f)(this,t),this.app=n,this.heartbeatServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Tu(this),this.idTokenSubscription=new Tu(this),this.beforeStateQueue=new bu(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ns,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=n.name,this.clientVersion=i.sdkClientVersion}return e(v)(t,[{key:"_initializeWithPersistence",value:function(t,n){n&&(this._popupRedirectResolver=fs(n));var r=this;return this._initializationPromise=this.queue(e(d)(e(_).mark((function i(){var a,o;return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r._deleted){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,su.create(r,t);case 5:if(r.persistenceManager=e.sent,!r._deleted){e.next=8;break}return e.abrupt("return");case 8:if(!(null===(a=r._popupRedirectResolver)||void 0===a?void 0:a._shouldInitProactively)){e.next=16;break}return e.prev=9,e.next=12,r._popupRedirectResolver._initialize(r);case 12:e.next=16;break;case 14:e.prev=14,e.t0=e.catch(9);case 16:return e.next=18,r.initializeCurrentUser(n);case 18:if(r.lastNotifiedUid=(null===(o=r.currentUser)||void 0===o?void 0:o.uid)||null,!r._deleted){e.next=21;break}return e.abrupt("return");case 21:r._isInitialized=!0;case 22:case"end":return e.stop()}}),i,null,[[9,14]])})))),this._initializationPromise}},{key:"_onStorageEvent",value:function(){var t=this;return e(d)(e(_).mark((function n(){var r;return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t._deleted){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.assertedPersistence.getCurrentUser();case 4:if(r=e.sent,t.currentUser||r){e.next=7;break}return e.abrupt("return");case 7:if(!t.currentUser||!r||t.currentUser.uid!==r.uid){e.next=12;break}return t._currentUser._assign(r),e.next=11,t.currentUser.getIdToken();case 11:return e.abrupt("return");case 12:return e.next=14,t._updateCurrentUser(r,!0);case 14:case"end":return e.stop()}}),n)})))()}},{key:"initializeCurrentUser",value:function(t){var n=this;return e(d)(e(_).mark((function r(){var i,a,o,s,u,c,l;return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,n.assertedPersistence.getCurrentUser();case 3:if(a=e.sent,o=a,s=!1,!t||!n.config.authDomain){e.next=15;break}return e.next=9,n.getOrInitRedirectPersistenceManager();case 9:return u=null===(i=n.redirectUser)||void 0===i?void 0:i._redirectEventId,c=null==o?void 0:o._redirectEventId,e.next=13,n.tryRedirectSignIn(t);case 13:l=e.sent,u&&u!==c||!(null==l?void 0:l.user)||(o=l.user,s=!0);case 15:if(o){e.next=17;break}return e.abrupt("return",n.directlySetCurrentUser(null));case 17:if(o._redirectEventId){e.next=33;break}if(!s){e.next=28;break}return e.prev=19,e.next=22,n.beforeStateQueue.runMiddleware(o);case 22:e.next=28;break;case 24:e.prev=24,e.t0=e.catch(19),o=a,n._popupRedirectResolver._overrideRedirectResult(n,(function(){return Promise.reject(e.t0)}));case 28:if(!o){e.next=32;break}return e.abrupt("return",n.reloadAndSetCurrentUserOrClear(o));case 32:return e.abrupt("return",n.directlySetCurrentUser(null));case 33:return cs(n._popupRedirectResolver,n,"argument-error"),e.next=36,n.getOrInitRedirectPersistenceManager();case 36:if(!n.redirectUser||n.redirectUser._redirectEventId!==o._redirectEventId){e.next=38;break}return e.abrupt("return",n.directlySetCurrentUser(o));case 38:return e.abrupt("return",n.reloadAndSetCurrentUserOrClear(o));case 39:case"end":return e.stop()}}),r,null,[[19,24]])})))()}},{key:"tryRedirectSignIn",value:function(t){var n=this;return e(d)(e(_).mark((function r(){var i;return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=null,e.prev=1,e.next=4,n._popupRedirectResolver._completeRedirectFn(n,t,!0);case 4:i=e.sent,e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(1),e.next=11,n._setRedirectUser(null);case 11:return e.abrupt("return",i);case 12:case"end":return e.stop()}}),r,null,[[1,7]])})))()}},{key:"reloadAndSetCurrentUserOrClear",value:function(t){var n=this;return e(d)(e(_).mark((function r(){var i;return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,Ys(t);case 4:e.next=10;break;case 6:if(e.prev=6,e.t0=e.catch(1),"auth/network-request-failed"===(null===(i=e.t0)||void 0===i?void 0:i.code)){e.next=10;break}return e.abrupt("return",n.directlySetCurrentUser(null));case 10:return e.abrupt("return",n.directlySetCurrentUser(t));case 11:case"end":return e.stop()}}),r,null,[[1,6]])})))()}},{key:"useDeviceLanguage",value:function(){this.languageCode=function(){if("undefined"==typeof navigator)return null;var e=navigator;return e.languages&&e.languages[0]||e.language||null}()}},{key:"_delete",value:function(){var t=this;return e(d)(e(_).mark((function n(){return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t._deleted=!0;case 1:case"end":return e.stop()}}),n)})))()}},{key:"updateCurrentUser",value:function(t){var n=this;return e(d)(e(_).mark((function r(){var i;return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(i=t?Se(t):null)&&cs(i.auth.config.apiKey===n.config.apiKey,n,"invalid-user-token"),e.abrupt("return",n._updateCurrentUser(i&&i._clone(n)));case 3:case"end":return e.stop()}}),r)})))()}},{key:"_updateCurrentUser",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(d)(e(_).mark((function i(){return e(_).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(!r._deleted){i.next=2;break}return i.abrupt("return");case 2:if(t&&cs(r.tenantId===t.tenantId,r,"tenant-id-mismatch"),n){i.next=6;break}return i.next=6,r.beforeStateQueue.runMiddleware(t);case 6:return i.abrupt("return",r.queue(e(d)(e(_).mark((function n(){return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.directlySetCurrentUser(t);case 2:r.notifyAuthListeners();case 3:case"end":return e.stop()}}),n)})))));case 7:case"end":return i.stop()}}),i)})))()}},{key:"signOut",value:function(){var t=this;return e(d)(e(_).mark((function n(){return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.beforeStateQueue.runMiddleware(null);case 2:if(!t.redirectPersistenceManager&&!t._popupRedirectResolver){e.next=5;break}return e.next=5,t._setRedirectUser(null);case 5:return e.abrupt("return",t._updateCurrentUser(null,!0));case 6:case"end":return e.stop()}}),n)})))()}},{key:"setPersistence",value:function(t){var n=this;return this.queue(e(d)(e(_).mark((function r(){return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.assertedPersistence.setPersistence(fs(t));case 2:case"end":return e.stop()}}),r)}))))}},{key:"_getPersistence",value:function(){return this.assertedPersistence.persistence.type}},{key:"_updateErrorMap",value:function(e){this._errorFactory=new oe("auth","Firebase",e())}},{key:"onAuthStateChanged",value:function(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}},{key:"beforeAuthStateChanged",value:function(e,t){return this.beforeStateQueue.pushCallback(e,t)}},{key:"onIdTokenChanged",value:function(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}},{key:"toJSON",value:function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}},{key:"_setRedirectUser",value:function(t,n){var r=this;return e(d)(e(_).mark((function i(){var a;return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.getOrInitRedirectPersistenceManager(n);case 2:return a=e.sent,e.abrupt("return",null===t?a.removeCurrentUser():a.setCurrentUser(t));case 4:case"end":return e.stop()}}),i)})))()}},{key:"getOrInitRedirectPersistenceManager",value:function(t){var n=this;return e(d)(e(_).mark((function r(){var i;return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.redirectPersistenceManager){e.next=9;break}return cs(i=t&&fs(t)||n._popupRedirectResolver,n,"argument-error"),e.next=5,su.create(n,[fs(i._redirectPersistence)],"redirectUser");case 5:return n.redirectPersistenceManager=e.sent,e.next=8,n.redirectPersistenceManager.getCurrentUser();case 8:n.redirectUser=e.sent;case 9:return e.abrupt("return",n.redirectPersistenceManager);case 10:case"end":return e.stop()}}),r)})))()}},{key:"_redirectUserForId",value:function(t){var n=this;return e(d)(e(_).mark((function r(){var i,a;return e(_).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!n._isInitialized){r.next=4;break}return r.next=4,n.queue(e(d)(e(_).mark((function t(){return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),t)}))));case 4:if((null===(i=n._currentUser)||void 0===i?void 0:i._redirectEventId)!==t){r.next=6;break}return r.abrupt("return",n._currentUser);case 6:if((null===(a=n.redirectUser)||void 0===a?void 0:a._redirectEventId)!==t){r.next=8;break}return r.abrupt("return",n.redirectUser);case 8:return r.abrupt("return",null);case 9:case"end":return r.stop()}}),r)})))()}},{key:"_persistUserIfCurrent",value:function(t){var n=this;return e(d)(e(_).mark((function r(){return e(_).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t!==n.currentUser){r.next=2;break}return r.abrupt("return",n.queue(e(d)(e(_).mark((function r(){return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.directlySetCurrentUser(t));case 1:case"end":return e.stop()}}),r)})))));case 2:case"end":return r.stop()}}),r)})))()}},{key:"_notifyListenersIfCurrent",value:function(e){e===this.currentUser&&this.notifyAuthListeners()}},{key:"_key",value:function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)}},{key:"_startProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}},{key:"_stopProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}},{key:"_currentUser",get:function(){return this.currentUser}},{key:"notifyAuthListeners",value:function(){var e,t;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}}},{key:"registerStateListener",value:function(e,t,n,r){var i=this;if(this._deleted)return function(){};var a="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return cs(o,this,"internal-error"),o.then((function(){return a(i.currentUser)})),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}},{key:"directlySetCurrentUser",value:function(t){var n=this;return e(d)(e(_).mark((function r(){return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.currentUser&&n.currentUser!==t&&n._currentUser._stopProactiveRefresh(),t&&n.isProactiveRefreshEnabled&&t._startProactiveRefresh(),n.currentUser=t,!t){e.next=8;break}return e.next=6,n.assertedPersistence.setCurrentUser(t);case 6:e.next=10;break;case 8:return e.next=10,n.assertedPersistence.removeCurrentUser();case 10:case"end":return e.stop()}}),r)})))()}},{key:"queue",value:function(e){return this.operations=this.operations.then(e,e),this.operations}},{key:"assertedPersistence",get:function(){return cs(this.persistenceManager,this,"internal-error"),this.persistenceManager}},{key:"_logFramework",value:function(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ku(this.config.clientPlatform,this._getFrameworks()))}},{key:"_getFrameworks",value:function(){return this.frameworks}},{key:"_getAdditionalHeaders",value:function(){var t=this;return e(d)(e(_).mark((function n(){var r,i,a;return e(_).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=e(p)({},"X-Client-Version",t.clientVersion),t.app.options.appId&&(i["X-Firebase-gmpid"]=t.app.options.appId),n.next=5,null===(r=t.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===r?void 0:r.getHeartbeatsHeader();case 5:return(a=n.sent)&&(i["X-Firebase-Client"]=a),n.abrupt("return",i);case 8:case"end":return n.stop()}}),n)})))()}}]),t}();
/**
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
 */function Iu(e){return Se(e)}var Tu=function(){"use strict";function t(n){var r,i,a=this;e(f)(this,t),this.auth=n,this.observer=null,this.addObserver=(i=new Ie((function(e){return a.observer=e}),r)).subscribe.bind(i)}return e(v)(t,[{key:"next",get:function(){return cs(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}]),t}();function Cu(t,n,r){var i=Iu(t);cs(i._canInitEmulator,i,"emulator-config-failed"),cs(/^https?:\/\//.test(n),i,"invalid-emulator-scheme");var a=!!(null==r?void 0:r.disableWarnings),o=xu(n),s=function(t){var n=xu(t),r=/(\/\/)?([^?#/]+)/.exec(t.substr(n.length));if(!r)return{host:"",port:null};var i=r[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(i);if(a){var o=a[1];return{host:o,port:Eu(i.substr(o.length+1))}}var s=e(y)(i.split(":"),2);return{host:s[0],port:Eu(s[1])}}(n),u=s.host,c=s.port,l=null===c?"":":".concat(c);i.config.emulator={url:"".concat(o,"//").concat(u).concat(l,"/")},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:u,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:a})}),a||function(){function e(){var e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
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
 */()}function xu(e){var t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Eu(e){if(!e)return null;var t=Number(e);return isNaN(t)?null:t}var Su=function(){"use strict";function t(n,r){e(f)(this,t),this.providerId=n,this.signInMethod=r}return e(v)(t,[{key:"toJSON",value:function(){return ls("not implemented")}},{key:"_getIdTokenResponse",value:function(e){return ls("not implemented")}},{key:"_linkToIdToken",value:function(e,t){return ls("not implemented")}},{key:"_getReauthenticationResolver",value:function(e){return ls("not implemented")}}]),t}();function Ru(e,t){return Nu.apply(this,arguments)}function Nu(){return(Nu=e(d)(e(_).mark((function t(n,r){return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",xs(n,"POST","/v1/accounts:update",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Pu(e,t){return Ou.apply(this,arguments)}function Ou(){return(Ou=
/**
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
 */
e(d)(e(_).mark((function t(n,r){return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Ns(n,"POST","/v1/accounts:signInWithPassword",Cs(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Au(e,t){return Du.apply(this,arguments)}function Du(){return(Du=
/**
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
 */
e(d)(e(_).mark((function t(n,r){return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Ns(n,"POST","/v1/accounts:signInWithEmailLink",Cs(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Lu(e,t){return Mu.apply(this,arguments)}function Mu(){return(Mu=e(d)(e(_).mark((function t(n,r){return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Ns(n,"POST","/v1/accounts:signInWithEmailLink",Cs(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
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
 */var Fu=function(t){"use strict";e(k)(r,t);var n=e(w)(r);function r(t,i,a){var o,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return e(f)(this,r),(o=n.call(this,"password",a))._email=t,o._password=i,o._tenantId=s,o}return e(v)(r,[{key:"toJSON",value:function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}},{key:"_getIdTokenResponse",value:function(t){var n=this;return e(d)(e(_).mark((function r(){return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=n.signInMethod,e.next="password"===e.t0?3:"emailLink"===e.t0?4:5;break;case 3:return e.abrupt("return",Pu(t,{returnSecureToken:!0,email:n._email,password:n._password}));case 4:return e.abrupt("return",Au(t,{email:n._email,oobCode:n._password}));case 5:as(t,"internal-error");case 6:case"end":return e.stop()}}),r)})))()}},{key:"_linkToIdToken",value:function(t,n){var r=this;return e(d)(e(_).mark((function i(){return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=r.signInMethod,e.next="password"===e.t0?3:"emailLink"===e.t0?4:5;break;case 3:return e.abrupt("return",Ru(t,{idToken:n,returnSecureToken:!0,email:r._email,password:r._password}));case 4:return e.abrupt("return",Lu(t,{idToken:n,email:r._email,oobCode:r._password}));case 5:as(t,"internal-error");case 6:case"end":return e.stop()}}),i)})))()}},{key:"_getReauthenticationResolver",value:function(e){return this._getIdTokenResponse(e)}}],[{key:"_fromEmailAndPassword",value:function(e,t){return new r(e,t,"password")}},{key:"_fromEmailAndCode",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new r(e,t,"emailLink",n)}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}}]),r}(Su);function Uu(e,t){return Wu.apply(this,arguments)}function Wu(){return(Wu=
/**
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
 */
e(d)(e(_).mark((function t(n,r){return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Ns(n,"POST","/v1/accounts:signInWithIdp",Cs(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
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
 */var ju=function(t){"use strict";e(k)(r,t);var n=e(w)(r);function r(){var t;return e(f)(this,r),(t=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).pendingToken=null,t}return e(v)(r,[{key:"toJSON",value:function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}},{key:"_getIdTokenResponse",value:function(e){return Uu(e,this.buildRequest())}},{key:"_linkToIdToken",value:function(e,t){var n=this.buildRequest();return n.idToken=t,Uu(e,n)}},{key:"_getReauthenticationResolver",value:function(e){var t=this.buildRequest();return t.autoCreate=!1,Uu(e,t)}},{key:"buildRequest",value:function(){var e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{var t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ge(t)}return e}}],[{key:"_fromParams",value:function(e){var t=new r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):as("argument-error"),t}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e,n=t.providerId,i=t.signInMethod,a=Zo(t,["providerId","signInMethod"]);if(!n||!i)return null;var o=new r(n,i);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}}]),r}(Su);function qu(e,t){return Hu.apply(this,arguments)}function Hu(){return(Hu=
/**
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
 */
e(d)(e(_).mark((function t(n,r){return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",xs(n,"POST","/v1/accounts:sendVerificationCode",Cs(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Vu(){return(Vu=e(d)(e(_).mark((function t(n,r){return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Ns(n,"POST","/v1/accounts:signInWithPhoneNumber",Cs(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function zu(){return(zu=e(d)(e(_).mark((function t(n,r){var i;return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ns(n,"POST","/v1/accounts:signInWithPhoneNumber",Cs(n,r));case 2:if(!(i=e.sent).temporaryProof){e.next=5;break}throw Ds(n,"account-exists-with-different-credential",i);case 5:return e.abrupt("return",i);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var Bu=e(p)({},"USER_NOT_FOUND","user-not-found");function Ku(){return(Ku=e(d)(e(_).mark((function t(n,r){var i;return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Object.assign(Object.assign({},r),{operation:"REAUTH"}),e.abrupt("return",Ns(n,"POST","/v1/accounts:signInWithPhoneNumber",Cs(n,i),Bu));case 2:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
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
 */var Gu=function(t){"use strict";e(k)(r,t);var n=e(w)(r);function r(t){var i;return e(f)(this,r),(i=n.call(this,"phone","phone")).params=t,i}return e(v)(r,[{key:"_getIdTokenResponse",value:function(e){return function(e,t){return Vu.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_linkToIdToken",value:function(e,t){return function(e,t){return zu.apply(this,arguments)}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}},{key:"_getReauthenticationResolver",value:function(e){return function(e,t){return Ku.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_makeVerificationRequest",value:function(){var e=this.params,t=e.temporaryProof,n=e.phoneNumber,r=e.verificationId,i=e.verificationCode;return t&&n?{temporaryProof:t,phoneNumber:n}:{sessionInfo:r,code:i}}},{key:"toJSON",value:function(){var e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}}],[{key:"_fromVerification",value:function(e,t){return new r({verificationId:e,verificationCode:t})}},{key:"_fromTokenResponse",value:function(e,t){return new r({phoneNumber:e,temporaryProof:t})}},{key:"fromJSON",value:function(e){"string"==typeof e&&(e=JSON.parse(e));var t=e.verificationId,n=e.verificationCode,i=e.phoneNumber,a=e.temporaryProof;return n||t||i||a?new r({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:a}):null}}]),r}(Su);
/**
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
 */var Yu=function(){"use strict";function t(n){var r,i,a,o,s,u;e(f)(this,t);var c=ke(be(n)),l=null!==(r=c.apiKey)&&void 0!==r?r:null,h=null!==(i=c.oobCode)&&void 0!==i?i:null,d=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(a=c.mode)&&void 0!==a?a:null);cs(l&&h&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=h,this.continueUrl=null!==(o=c.continueUrl)&&void 0!==o?o:null,this.languageCode=null!==(s=c.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(u=c.tenantId)&&void 0!==u?u:null}return e(v)(t,null,[{key:"parseLink",value:function(e){var n=function(e){var t=ke(be(e)).link,n=t?ke(be(t)).deep_link_id:null,r=ke(be(e)).deep_link_id;return(r?ke(be(r)).link:null)||r||n||t||e}(e);try{return new t(n)}catch(e){return null}}}]),t}();
/**
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
 */
var Ju=function(){"use strict";function t(){e(f)(this,t),this.providerId=t.PROVIDER_ID}return e(v)(t,null,[{key:"credential",value:function(e,t){return Fu._fromEmailAndPassword(e,t)}},{key:"credentialWithLink",value:function(e,t){var n=Yu.parseLink(t);return cs(n,"argument-error"),Fu._fromEmailAndCode(e,n.code,n.tenantId)}}]),t}();Ju.PROVIDER_ID="password",Ju.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Ju.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
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
 */
var Qu=function(){"use strict";function t(n){e(f)(this,t),this.providerId=n,this.defaultLanguageCode=null,this.customParameters={}}return e(v)(t,[{key:"setDefaultLanguage",value:function(e){this.defaultLanguageCode=e}},{key:"setCustomParameters",value:function(e){return this.customParameters=e,this}},{key:"getCustomParameters",value:function(){return this.customParameters}}]),t}(),Xu=function(t){"use strict";e(k)(r,t);var n=e(w)(r);function r(){var t;return e(f)(this,r),(t=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).scopes=[],t}return e(v)(r,[{key:"addScope",value:function(e){return this.scopes.includes(e)||this.scopes.push(e),this}},{key:"getScopes",value:function(){return e(m)(this.scopes)}}]),r}(Qu),$u=function(t){"use strict";e(k)(r,t);var n=e(w)(r);function r(){return e(f)(this,r),n.call(this,"facebook.com")}return e(v)(r,null,[{key:"credential",value:function(e){return ju._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(Xu);
/**
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
 */$u.FACEBOOK_SIGN_IN_METHOD="facebook.com",$u.PROVIDER_ID="facebook.com";
/**
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
 */
var Zu=function(t){"use strict";e(k)(r,t);var n=e(w)(r);function r(){var t;return e(f)(this,r),(t=n.call(this,"google.com")).addScope("profile"),t}return e(v)(r,null,[{key:"credential",value:function(e,t){return ju._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthIdToken,i=t.oauthAccessToken;if(!n&&!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}(Xu);Zu.GOOGLE_SIGN_IN_METHOD="google.com",Zu.PROVIDER_ID="google.com";
/**
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
 */
var ec=function(t){"use strict";e(k)(r,t);var n=e(w)(r);function r(){return e(f)(this,r),n.call(this,"github.com")}return e(v)(r,null,[{key:"credential",value:function(e){return ju._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GITHUB_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(Xu);ec.GITHUB_SIGN_IN_METHOD="github.com",ec.PROVIDER_ID="github.com";
/**
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
 */
var tc=function(t){"use strict";e(k)(r,t);var n=e(w)(r);function r(){return e(f)(this,r),n.call(this,"twitter.com")}return e(v)(r,null,[{key:"credential",value:function(e,t){return ju._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthAccessToken,i=t.oauthTokenSecret;if(!n||!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}(Xu);function nc(e,t){return rc.apply(this,arguments)}function rc(){return(rc=
/**
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
 */
e(d)(e(_).mark((function t(n,r){return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Ns(n,"POST","/v1/accounts:signUp",Cs(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
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
 */tc.TWITTER_SIGN_IN_METHOD="twitter.com",tc.PROVIDER_ID="twitter.com";var ic=function(){"use strict";function t(n){e(f)(this,t),this.user=n.user,this.providerId=n.providerId,this._tokenResponse=n._tokenResponse,this.operationType=n.operationType}return e(v)(t,null,[{key:"_fromIdTokenResponse",value:function(n,r,i){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return e(d)(e(_).mark((function o(){var s,u,c;return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ru._fromIdTokenResponse(n,i,a);case 2:return s=e.sent,u=ac(i),c=new t({user:s,providerId:u,_tokenResponse:i,operationType:r}),e.abrupt("return",c);case 6:case"end":return e.stop()}}),o)})))()}},{key:"_forOperation",value:function(n,r,i){return e(d)(e(_).mark((function a(){var o;return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._updateTokensIfNecessary(i,!0);case 2:return o=ac(i),e.abrupt("return",new t({user:n,providerId:o,_tokenResponse:i,operationType:r}));case 4:case"end":return e.stop()}}),a)})))()}}]),t}();function ac(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
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
 */
var oc=function(t){"use strict";e(k)(r,t);var n=e(w)(r);function r(t,i,a,o){var s,u;return e(f)(this,r),(s=n.call(this,i.code,i.message)).operationType=a,s.user=o,Object.setPrototypeOf(e(g)(s),r.prototype),s.customData={appName:t.name,tenantId:null!==(u=t.tenantId)&&void 0!==u?u:void 0,_serverResponse:i.customData._serverResponse,operationType:a},s}return e(v)(r,null,[{key:"_fromErrorAndOperation",value:function(e,t,n,i){return new r(e,t,n,i)}}]),r}(ae);function sc(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((function(n){if("auth/multi-factor-auth-required"===n.code)throw oc._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
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
 */function uc(e,t){return cc.apply(this,arguments)}function cc(){return cc=e(d)(e(_).mark((function t(n,r){var i,a,o=arguments;return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=o.length>2&&void 0!==o[2]&&o[2],e.t0=Vs,e.t1=n,e.t2=r,e.t3=n.auth,e.next=7,n.getIdToken();case 7:return e.t4=e.sent,e.t5=e.t2._linkToIdToken.call(e.t2,e.t3,e.t4),e.t6=i,e.next=12,(0,e.t0)(e.t1,e.t5,e.t6);case 12:return a=e.sent,e.abrupt("return",ic._forOperation(n,"link",a));case 14:case"end":return e.stop()}}),t)}))),cc.apply(this,arguments)}function lc(e,t){return hc.apply(this,arguments)}function hc(){return hc=
/**
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
 */
e(d)(e(_).mark((function t(n,r){var i,a,o,s,u,c,l,h=arguments;return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=h.length>2&&void 0!==h[2]&&h[2],o=n.auth,s="reauthenticate",e.prev=4,e.next=7,Vs(n,sc(o,s,r,n),i);case 7:return cs((u=e.sent).idToken,o,"internal-error"),cs(c=Hs(u.idToken),o,"internal-error"),l=c.sub,cs(n.uid===l,o,"user-mismatch"),e.abrupt("return",ic._forOperation(n,s,u));case 16:throw e.prev=16,e.t0=e.catch(4),"auth/user-not-found"===(null===(a=e.t0)||void 0===a?void 0:a.code)&&as(o,"user-mismatch"),e.t0;case 20:case"end":return e.stop()}}),t,null,[[4,16]])}))),hc.apply(this,arguments)}function dc(e,t){return fc.apply(this,arguments)}function fc(){return fc=
/**
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
 */
e(d)(e(_).mark((function t(n,r){var i,a,o,s,u=arguments;return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=u.length>2&&void 0!==u[2]&&u[2],a="signIn",e.next=4,sc(n,a,r);case 4:return o=e.sent,e.next=7,ic._fromIdTokenResponse(n,a,o);case 7:if(s=e.sent,i){e.next=11;break}return e.next=11,n._updateCurrentUser(s.user);case 11:return e.abrupt("return",s);case 12:case"end":return e.stop()}}),t)}))),fc.apply(this,arguments)}function vc(e,t){return pc.apply(this,arguments)}function pc(){return(pc=e(d)(e(_).mark((function t(n,r){return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",dc(Iu(n),r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function mc(e,t,n){return _c.apply(this,arguments)}function _c(){return(_c=e(d)(e(_).mark((function t(n,r,i){var a,o,s;return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Iu(n),e.next=3,nc(a,{returnSecureToken:!0,email:r,password:i});case 3:return o=e.sent,e.next=6,ic._fromIdTokenResponse(a,"signIn",o);case 6:return s=e.sent,e.next=9,a._updateCurrentUser(s.user);case 9:return e.abrupt("return",s);case 10:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function yc(e,t,n,r){return Se(e).onIdTokenChanged(t,n,r)}function gc(e,t,n){return Se(e).beforeAuthStateChanged(t,n)}
/**
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
 */
function kc(e,t){return xs(e,"POST","/v2/accounts/mfaEnrollment:start",Cs(e,t))}new WeakMap;var bc="__sak",wc=function(){"use strict";function t(n,r){e(f)(this,t),this.storageRetriever=n,this.type=r}return e(v)(t,[{key:"_isAvailable",value:function(){try{return this.storage?(this.storage.setItem(bc,"1"),this.storage.removeItem(bc),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}},{key:"_set",value:function(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}},{key:"_get",value:function(e){var t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}},{key:"_remove",value:function(e){return this.storage.removeItem(e),Promise.resolve()}},{key:"storage",get:function(){return this.storageRetriever()}}]),t}();
/**
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
 */var Ic=function(t){"use strict";e(k)(r,t);var n=e(w)(r);function r(){var t,i;return e(f)(this,r),(t=n.call(this,(function(){return window.localStorage}),"LOCAL")).boundEventHandler=function(e,n){return t.onStorageEvent(e,n)},t.listeners={},t.localCache={},t.pollTimer=null,t.safariLocalStorageNotSynced=(lu(i=G())||mu(i))&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),t.fallbackToPolling=gu(),t._shouldAllowMigration=!0,t}return e(v)(r,[{key:"forAllChangedKeys",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=Object.keys(this.listeners)[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value,s=this.storage.getItem(o),u=this.localCache[o];s!==u&&e(o,u,s)}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}}},{key:"onStorageEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;if(e.key){var r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var i=this.storage.getItem(r);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}var a=function(){var e=n.storage.getItem(r);(t||n.localCache[r]!==e)&&n.notifyListeners(r,e)},o=this.storage.getItem(r);yu()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,10):a()}else{var s=this;this.forAllChangedKeys((function(e,t,n){s.notifyListeners(e,n)}))}}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,a=void 0;if(n)try{for(var o,s=Array.from(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t?JSON.parse(t):t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){var e=this;this.stopPolling(),this.pollTimer=setInterval((function(){var t=e;e.forAllChangedKeys((function(e,n,r){t.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)}))}),1e3)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"attachListener",value:function(){window.addEventListener("storage",this.boundEventHandler)}},{key:"detachListener",value:function(){window.removeEventListener("storage",this.boundEventHandler)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}},{key:"_set",value:function(t,n){var i=this,a=this;return e(d)(e(_).mark((function o(){return e(_).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e(Yo)(e($o)(r.prototype),"_set",i).call(a,t,n);case 2:a.localCache[t]=JSON.stringify(n);case 3:case"end":return o.stop()}}),o)})))()}},{key:"_get",value:function(t){var n=this,i=this;return e(d)(e(_).mark((function a(){var o;return e(_).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e(Yo)(e($o)(r.prototype),"_get",n).call(i,t);case 2:return o=a.sent,i.localCache[t]=JSON.stringify(o),a.abrupt("return",o);case 5:case"end":return a.stop()}}),a)})))()}},{key:"_remove",value:function(t){var n=this,i=this;return e(d)(e(_).mark((function a(){return e(_).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e(Yo)(e($o)(r.prototype),"_remove",n).call(i,t);case 2:delete i.localCache[t];case 3:case"end":return a.stop()}}),a)})))()}}]),r}(wc);Ic.type="LOCAL";var Tc=Ic,Cc=function(t){"use strict";e(k)(r,t);var n=e(w)(r);function r(){return e(f)(this,r),n.call(this,(function(){return window.sessionStorage}),"SESSION")}return e(v)(r,[{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),r}(wc);
/**
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
 */Cc.type="SESSION";var xc=Cc;
/**
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
 */function Ec(t){return Promise.all(t.map((n=e(d)(e(_).mark((function t(n){var r;return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n;case 3:return r=e.sent,e.abrupt("return",{fulfilled:!0,value:r});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{fulfilled:!1,reason:e.t0});case 10:case"end":return e.stop()}}),t,null,[[0,7]])}))),function(e){return n.apply(this,arguments)})));var n}
/**
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
 */var Sc=function(){"use strict";function t(n){e(f)(this,t),this.eventTarget=n,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}return e(v)(t,[{key:"isListeningto",value:function(e){return this.eventTarget===e}},{key:"handleEvent",value:function(t){var n=this;return e(d)(e(_).mark((function r(){var i,a,o,s,u,c,l,h;return e(_).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(a=(i=t).data,o=a.eventId,s=a.eventType,u=a.data,null==(c=n.handlersMap[s])?void 0:c.size){r.next=5;break}return r.abrupt("return");case 5:return i.ports[0].postMessage({status:"ack",eventId:o,eventType:s}),l=Array.from(c).map(function(){var t=e(d)(e(_).mark((function t(n){return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n(i.origin,u));case 1:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),r.next=9,Ec(l);case 9:h=r.sent,i.ports[0].postMessage({status:"done",eventId:o,eventType:s,response:h});case 11:case"end":return r.stop()}}),r)})))()}},{key:"_subscribe",value:function(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}},{key:"_unsubscribe",value:function(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}],[{key:"_getInstance",value:function(e){var n=this.receivers.find((function(t){return t.isListeningto(e)}));if(n)return n;var r=new t(e);return this.receivers.push(r),r}}]),t}();
/**
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
 */
function Rc(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n="",r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
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
 */Sc.receivers=[];var Nc=function(){"use strict";function t(n){e(f)(this,t),this.target=n,this.handlers=new Set}return e(v)(t,[{key:"removeMessageHandler",value:function(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}},{key:"_send",value:function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,i=this;return e(d)(e(_).mark((function a(){var o,s,u;return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o="undefined"!=typeof MessageChannel?new MessageChannel:null){e.next=3;break}throw new Error("connection_unavailable");case 3:return e.abrupt("return",new Promise((function(e,a){var c=Rc("",20);o.port1.start();var l=setTimeout((function(){a(new Error("unsupported_event"))}),r);u={messageChannel:o,onMessage:function(t){var n=t;if(n.data.eventId===c)switch(n.data.status){case"ack":clearTimeout(l),s=setTimeout((function(){a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),e(n.data.response);break;default:clearTimeout(l),clearTimeout(s),a(new Error("invalid_response"))}}},i.handlers.add(u),o.port1.addEventListener("message",u.onMessage),i.target.postMessage({eventType:t,eventId:c,data:n},[o.port2])})).finally((function(){u&&i.removeMessageHandler(u)})));case 6:case"end":return e.stop()}}),a)})))()}}]),t}();
/**
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
 */function Pc(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */
function Oc(){return void 0!==Pc().WorkerGlobalScope&&"function"==typeof Pc().importScripts}function Ac(){return Dc.apply(this,arguments)}function Dc(){return(Dc=e(d)(e(_).mark((function t(){var n;return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===navigator||void 0===navigator?void 0:navigator.serviceWorker){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,navigator.serviceWorker.ready;case 5:return n=e.sent,e.abrupt("return",n.active);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",null);case 12:case"end":return e.stop()}}),t,null,[[2,9]])})))).apply(this,arguments)}
/**
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
 */
var Lc="firebaseLocalStorageDb",Mc="firebaseLocalStorage",Fc="fbase_key",Uc=function(){"use strict";function t(n){e(f)(this,t),this.request=n}return e(v)(t,[{key:"toPromise",value:function(){var e=this;return new Promise((function(t,n){var r=e;e.request.addEventListener("success",(function(){t(r.request.result)})),e.request.addEventListener("error",(function(){n(r.request.error)}))}))}}]),t}();function Wc(e,t){return e.transaction([Mc],t?"readwrite":"readonly").objectStore(Mc)}function jc(){var e=indexedDB.deleteDatabase(Lc);return new Uc(e).toPromise()}function qc(){var t=indexedDB.open(Lc,1);return new Promise((function(n,r){t.addEventListener("error",(function(){r(t.error)})),t.addEventListener("upgradeneeded",(function(){var e=t.result;try{e.createObjectStore(Mc,{keyPath:Fc})}catch(e){r(e)}})),t.addEventListener("success",e(d)(e(_).mark((function r(){var i;return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((i=t.result).objectStoreNames.contains(Mc)){e.next=12;break}return i.close(),e.next=5,jc();case 5:return e.t0=n,e.next=8,qc();case 8:e.t1=e.sent,(0,e.t0)(e.t1),e.next=13;break;case 12:n(i);case 13:case"end":return e.stop()}}),r)}))))}))}function Hc(e,t,n){return Vc.apply(this,arguments)}function Vc(){return(Vc=e(d)(e(_).mark((function t(n,r,i){var a,o;return e(_).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=Wc(n,!0).put((a={},e(p)(a,Fc,r),e(p)(a,"value",i),a)),t.abrupt("return",new Uc(o).toPromise());case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function zc(e,t){return Bc.apply(this,arguments)}function Bc(){return(Bc=e(d)(e(_).mark((function t(n,r){var i,a;return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Wc(n,!1).get(r),e.next=3,new Uc(i).toPromise();case 3:return a=e.sent,e.abrupt("return",void 0===a?null:a.value);case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Kc(e,t){var n=Wc(e,!0).delete(t);return new Uc(n).toPromise()}var Gc=function(){"use strict";function t(){e(f)(this,t),this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((function(){}),(function(){}))}return e(v)(t,[{key:"_openDb",value:function(){var t=this;return e(d)(e(_).mark((function n(){return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.db){e.next=2;break}return e.abrupt("return",t.db);case 2:return e.next=4,qc();case 4:return t.db=e.sent,e.abrupt("return",t.db);case 6:case"end":return e.stop()}}),n)})))()}},{key:"_withRetries",value:function(t){var n=this;return e(d)(e(_).mark((function r(){var i,a;return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=0;case 1:return e.prev=2,e.next=5,n._openDb();case 5:return a=e.sent,e.next=8,t(a);case 8:return e.abrupt("return",e.sent);case 11:if(e.prev=11,e.t0=e.catch(2),!(i++>3)){e.next=15;break}throw e.t0;case 15:n.db&&(n.db.close(),n.db=void 0);case 16:e.next=1;break;case 18:case"end":return e.stop()}}),r,null,[[2,11]])})))()}},{key:"initializeServiceWorkerMessaging",value:function(){var t=this;return e(d)(e(_).mark((function n(){return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Oc()?t.initializeReceiver():t.initializeSender());case 1:case"end":return e.stop()}}),n)})))()}},{key:"initializeReceiver",value:function(){var t=this;return e(d)(e(_).mark((function n(){return e(_).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.receiver=Sc._getInstance(Oc()?self:null),t.receiver._subscribe("keyChanged",function(){var n=e(d)(e(_).mark((function n(r,i){var a;return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._poll();case 2:return a=e.sent,e.abrupt("return",{keyProcessed:a.includes(i.key)});case 4:case"end":return e.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()),t.receiver._subscribe("ping",function(){var t=e(d)(e(_).mark((function t(n,r){return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",["keyChanged"]);case 1:case"end":return e.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}());case 3:case"end":return n.stop()}}),n)})))()}},{key:"initializeSender",value:function(){var t=this;return e(d)(e(_).mark((function n(){var r,i,a;return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,Ac();case 3:if(t.activeServiceWorker=e.sent,t.activeServiceWorker){e.next=6;break}return e.abrupt("return");case 6:return t.sender=new Nc(t.activeServiceWorker),e.next=9,t.sender._send("ping",{},800);case 9:if(a=e.sent){e.next=12;break}return e.abrupt("return");case 12:(null===(r=a[0])||void 0===r?void 0:r.fulfilled)&&(null===(i=a[0])||void 0===i?void 0:i.value.includes("keyChanged"))&&(t.serviceWorkerReceiverAvailable=!0);case 13:case"end":return e.stop()}}),n)})))()}},{key:"notifyServiceWorker",value:function(t){var n=this;return e(d)(e(_).mark((function r(){return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.sender&&n.activeServiceWorker&&(r=void 0,((null===(r=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===r?void 0:r.controller)||null)===n.activeServiceWorker)){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,n.sender._send("keyChanged",{key:t},n.serviceWorkerReceiverAvailable?800:50);case 5:e.next=9;break;case 7:e.prev=7,e.t0=e.catch(2);case 9:case"end":return e.stop()}var r}),r,null,[[2,7]])})))()}},{key:"_isAvailable",value:function(){return e(d)(e(_).mark((function t(){var n;return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,indexedDB){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,qc();case 5:return n=e.sent,e.next=8,Hc(n,bc,"1");case 8:return e.next=10,Kc(n,bc);case 10:return e.abrupt("return",!0);case 13:e.prev=13,e.t0=e.catch(0);case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}}),t,null,[[0,13]])})))()}},{key:"_withPendingWrite",value:function(t){var n=this;return e(d)(e(_).mark((function r(){return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.pendingWrites++,e.prev=1,e.next=4,t();case 4:return e.prev=4,n.pendingWrites--,e.finish(4);case 7:case"end":return e.stop()}}),r,null,[[1,,4,7]])})))()}},{key:"_set",value:function(t,n){var r=this;return e(d)(e(_).mark((function i(){return e(_).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",r._withPendingWrite(e(d)(e(_).mark((function i(){return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._withRetries((function(e){return Hc(e,t,n)}));case 2:return r.localCache[t]=n,e.abrupt("return",r.notifyServiceWorker(t));case 4:case"end":return e.stop()}}),i)})))));case 1:case"end":return i.stop()}}),i)})))()}},{key:"_get",value:function(t){var n=this;return e(d)(e(_).mark((function r(){var i;return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._withRetries((function(e){return zc(e,t)}));case 2:return i=e.sent,n.localCache[t]=i,e.abrupt("return",i);case 5:case"end":return e.stop()}}),r)})))()}},{key:"_remove",value:function(t){var n=this;return e(d)(e(_).mark((function r(){return e(_).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",n._withPendingWrite(e(d)(e(_).mark((function r(){return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._withRetries((function(e){return Kc(e,t)}));case 2:return delete n.localCache[t],e.abrupt("return",n.notifyServiceWorker(t));case 4:case"end":return e.stop()}}),r)})))));case 1:case"end":return r.stop()}}),r)})))()}},{key:"_poll",value:function(){var t=this;return e(d)(e(_).mark((function n(){var r,i,a,o,s,u,c,l,h,d,f,v,p,m,y,g,k;return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._withRetries((function(e){var t=Wc(e,!1).getAll();return new Uc(t).toPromise()}));case 2:if(r=e.sent){e.next=5;break}return e.abrupt("return",[]);case 5:if(0===t.pendingWrites){e.next=7;break}return e.abrupt("return",[]);case 7:for(i=[],a=new Set,o=!0,s=!1,u=void 0,e.prev=10,c=r[Symbol.iterator]();!(o=(l=c.next()).done);o=!0)h=l.value,d=h.fbase_key,f=h.value,a.add(d),JSON.stringify(t.localCache[d])!==JSON.stringify(f)&&(t.notifyListeners(d,f),i.push(d));e.next=18;break;case 14:e.prev=14,e.t0=e.catch(10),s=!0,u=e.t0;case 18:e.prev=18,e.prev=19,o||null==c.return||c.return();case 21:if(e.prev=21,!s){e.next=24;break}throw u;case 24:return e.finish(21);case 25:return e.finish(18);case 26:for(v=!0,p=!1,m=void 0,e.prev=27,y=Object.keys(t.localCache)[Symbol.iterator]();!(v=(g=y.next()).done);v=!0)k=g.value,t.localCache[k]&&!a.has(k)&&(t.notifyListeners(k,null),i.push(k));e.next=35;break;case 31:e.prev=31,e.t1=e.catch(27),p=!0,m=e.t1;case 35:e.prev=35,e.prev=36,v||null==y.return||y.return();case 38:if(e.prev=38,!p){e.next=41;break}throw m;case 41:return e.finish(38);case 42:return e.finish(35);case 43:return e.abrupt("return",i);case 44:case"end":return e.stop()}}),n,null,[[10,14,18,26],[19,,21,25],[27,31,35,43],[36,,38,42]])})))()}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,a=void 0;if(n)try{for(var o,s=Array.from(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){this.stopPolling();var t=this;this.pollTimer=setInterval(e(d)(e(_).mark((function n(){return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t._poll());case 1:case"end":return e.stop()}}),n)}))),800)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}]),t}();Gc.type="LOCAL";var Yc=Gc;
/**
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
 */function Jc(e,t){return xs(e,"POST","/v2/accounts/mfaSignIn:start",Cs(e,t))}function Qc(e){return new Promise((function(t,n){var r,i,a=document.createElement("script");a.setAttribute("src",e),a.onload=t,a.onerror=function(e){var t=os("internal-error");t.customData=e,n(t)},a.type="text/javascript",a.charset="UTF-8",(null!==(i=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==i?i:document).appendChild(a)}))}function Xc(e){return"__".concat(e).concat(Math.floor(1e6*Math.random()))}
/**
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
 */
/**
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
 */
Xc("rcb"),new gs(3e4,6e4);var $c="recaptcha";
/**
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
 */function Zc(e,t,n){return el.apply(this,arguments)}function el(){return(el=e(d)(e(_).mark((function t(n,r,i){var a,o,s,u,c,l,h,d;return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,i.verify();case 3:if(o=e.sent,e.prev=4,cs("string"==typeof o,n,"argument-error"),cs(i.type===$c,n,"argument-error"),!("session"in(s="string"==typeof r?{phoneNumber:r}:r))){e.next=28;break}if(u=s.session,!("phoneNumber"in s)){e.next=19;break}return cs("enroll"===u.type,n,"internal-error"),e.next=15,kc(n,{idToken:u.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:o}});case 15:return c=e.sent,e.abrupt("return",c.phoneSessionInfo.sessionInfo);case 19:return cs("signin"===u.type,n,"internal-error"),cs(l=(null===(a=s.multiFactorHint)||void 0===a?void 0:a.uid)||s.multiFactorUid,n,"missing-multi-factor-info"),e.next=24,Jc(n,{mfaPendingCredential:u.credential,mfaEnrollmentId:l,phoneSignInInfo:{recaptchaToken:o}});case 24:return h=e.sent,e.abrupt("return",h.phoneResponseInfo.sessionInfo);case 26:e.next=32;break;case 28:return e.next=30,qu(n,{phoneNumber:s.phoneNumber,recaptchaToken:o});case 30:return d=e.sent.sessionInfo,e.abrupt("return",d);case 32:return e.prev=32,i._reset(),e.finish(32);case 35:case"end":return e.stop()}}),t,null,[[4,,32,35]])})))).apply(this,arguments)}
/**
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
 */
var tl=function(){"use strict";function t(n){e(f)(this,t),this.providerId=t.PROVIDER_ID,this.auth=Iu(n)}return e(v)(t,[{key:"verifyPhoneNumber",value:function(e,t){return Zc(this.auth,e,Se(t))}}],[{key:"credential",value:function(e,t){return Gu._fromVerification(e,t)}},{key:"credentialFromResult",value:function(e){var n=e;return t.credentialFromTaggedObject(n)}},{key:"credentialFromError",value:function(e){return t.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.phoneNumber,r=t.temporaryProof;return n&&r?Gu._fromTokenResponse(n,r):null}}]),t}();
/**
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
 */
function nl(e,t){return t?fs(t):(cs(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
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
 */tl.PROVIDER_ID="phone",tl.PHONE_SIGN_IN_METHOD="phone";var rl=function(t){"use strict";e(k)(r,t);var n=e(w)(r);function r(t){var i;return e(f)(this,r),(i=n.call(this,"custom","custom")).params=t,i}return e(v)(r,[{key:"_getIdTokenResponse",value:function(e){return Uu(e,this._buildIdpRequest())}},{key:"_linkToIdToken",value:function(e,t){return Uu(e,this._buildIdpRequest(t))}},{key:"_getReauthenticationResolver",value:function(e){return Uu(e,this._buildIdpRequest())}},{key:"_buildIdpRequest",value:function(e){var t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}]),r}(Su);function il(e){return dc(e.auth,new rl(e),e.bypassAuthState)}function al(e){var t=e.auth,n=e.user;return cs(n,t,"internal-error"),lc(n,new rl(e),e.bypassAuthState)}function ol(e){return sl.apply(this,arguments)}function sl(){return(sl=e(d)(e(_).mark((function t(n){var r,i;return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.auth,cs(i=n.user,r,"internal-error"),e.abrupt("return",uc(i,new rl(n),n.bypassAuthState));case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
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
 */var ul=function(){"use strict";function t(n,r,i,a){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];e(f)(this,t),this.auth=n,this.resolver=i,this.user=a,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}return e(v)(t,[{key:"execute",value:function(){var t,n=this;return new Promise((t=e(d)(e(_).mark((function t(r,i){return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.pendingPromise={resolve:r,reject:i},e.prev=1,e.next=4,n.resolver._initialize(n.auth);case 4:return n.eventManager=e.sent,e.next=7,n.onExecution();case 7:n.eventManager.registerConsumer(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),n.reject(e.t0);case 13:case"end":return e.stop()}}),t,null,[[1,10]])}))),function(e,n){return t.apply(this,arguments)}))}},{key:"onAuthEvent",value:function(t){var n=this;return e(d)(e(_).mark((function r(){var i,a,o,s,u,c,l;return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.urlResponse,a=t.sessionId,o=t.postBody,s=t.tenantId,u=t.error,c=t.type,!u){e.next=4;break}return n.reject(u),e.abrupt("return");case 4:return l={auth:n.auth,requestUri:i,sessionId:a,tenantId:s||void 0,postBody:o||void 0,user:n.user,bypassAuthState:n.bypassAuthState},e.prev=5,e.t0=n,e.next=9,n.getIdpTask(c)(l);case 9:e.t1=e.sent,e.t0.resolve.call(e.t0,e.t1),e.next=16;break;case 13:e.prev=13,e.t2=e.catch(5),n.reject(e.t2);case 16:case"end":return e.stop()}}),r,null,[[5,13]])})))()}},{key:"onError",value:function(e){this.reject(e)}},{key:"getIdpTask",value:function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return il;case"linkViaPopup":case"linkViaRedirect":return ol;case"reauthViaPopup":case"reauthViaRedirect":return al;default:as(this.auth,"internal-error")}}},{key:"resolve",value:function(e){hs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}},{key:"reject",value:function(e){hs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}},{key:"unregisterAndCleanUp",value:function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}]),t}(),cl=new gs(2e3,1e4);
/**
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
 */var ll=function(t){"use strict";e(k)(r,t);var n=e(w)(r);function r(t,i,a,o,s){var u;return e(f)(this,r),(u=n.call(this,t,i,o,s)).provider=a,u.authWindow=null,u.pollId=null,r.currentPopupAction&&r.currentPopupAction.cancel(),r.currentPopupAction=e(g)(u),u}return e(v)(r,[{key:"executeNotNull",value:function(){var t=this;return e(d)(e(_).mark((function n(){var r;return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.execute();case 2:return cs(r=e.sent,t.auth,"internal-error"),e.abrupt("return",r);case 5:case"end":return e.stop()}}),n)})))()}},{key:"onExecution",value:function(){var t=this;return e(d)(e(_).mark((function n(){var r;return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return hs(1===t.filter.length,"Popup operations only handle one event"),r=Rc(),e.next=4,t.resolver._openPopup(t.auth,t.provider,t.filter[0],r);case 4:t.authWindow=e.sent,t.authWindow.associatedEvent=r,t.resolver._originValidation(t.auth).catch((function(e){t.reject(e)})),t.resolver._isIframeWebStorageSupported(t.auth,(function(e){e||t.reject(os(t.auth,"web-storage-unsupported"))})),t.pollUserCancellation();case 9:case"end":return e.stop()}}),n)})))()}},{key:"eventId",get:function(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}},{key:"cancel",value:function(){this.reject(os(this.auth,"cancelled-popup-request"))}},{key:"cleanUp",value:function(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,r.currentPopupAction=null}},{key:"pollUserCancellation",value:function(){var e=this,t=function(){var n,r;if(null===(r=null===(n=e.authWindow)||void 0===n?void 0:n.window)||void 0===r?void 0:r.closed){var i=e;e.pollId=window.setTimeout((function(){i.pollId=null,i.reject(os(i.auth,"popup-closed-by-user"))}),2e3)}else e.pollId=window.setTimeout(t,cl.get())};t()}}]),r}(ul);ll.currentPopupAction=null;
/**
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
 */
var hl=new Map,dl=function(t){"use strict";e(k)(r,t);var n=e(w)(r);function r(t,i){var a,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e(f)(this,r),(a=n.call(this,t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,o)).eventId=null,a}return e(v)(r,[{key:"execute",value:function(){var t=this,n=this;return e(d)(e(_).mark((function i(){var a,o;return e(_).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(a=hl.get(n.auth._key())){i.next=21;break}return i.prev=2,i.next=5,fl(n.resolver,n.auth);case 5:if(!i.sent){i.next=12;break}return i.next=9,e(Yo)(e($o)(r.prototype),"execute",t).call(n);case 9:i.t0=i.sent,i.next=13;break;case 12:i.t0=null;case 13:o=i.t0,a=function(){return Promise.resolve(o)},i.next=20;break;case 17:i.prev=17,i.t1=i.catch(2),a=function(){return Promise.reject(i.t1)};case 20:hl.set(n.auth._key(),a);case 21:return n.bypassAuthState||hl.set(n.auth._key(),(function(){return Promise.resolve(null)})),i.abrupt("return",a());case 23:case"end":return i.stop()}}),i,null,[[2,17]])})))()}},{key:"onAuthEvent",value:function(t){var n=this,i=this,a=function(){return e(Yo)(e($o)(r.prototype),"onAuthEvent",n)};return e(d)(e(_).mark((function n(){var r;return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("signInViaRedirect"!==t.type){e.next=4;break}return e.abrupt("return",a().call(i,t));case 4:if("unknown"!==t.type){e.next=7;break}return i.resolve(null),e.abrupt("return");case 7:if(!t.eventId){e.next=17;break}return e.next=10,i.auth._redirectUserForId(t.eventId);case 10:if(!(r=e.sent)){e.next=16;break}return i.user=r,e.abrupt("return",a().call(i,t));case 16:i.resolve(null);case 17:case"end":return e.stop()}}),n)})))()}},{key:"onExecution",value:function(){return e(d)(e(_).mark((function t(){return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),t)})))()}},{key:"cleanUp",value:function(){}}]),r}(ul);function fl(e,t){return vl.apply(this,arguments)}function vl(){return(vl=e(d)(e(_).mark((function t(n,r){var i,a,o;return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=_l(r),a=ml(n),e.next=4,a._isAvailable();case 4:if(e.sent){e.next=6;break}return e.abrupt("return",!1);case 6:return e.next=8,a._get(i);case 8:return e.t0=e.sent,o="true"===e.t0,e.next=12,a._remove(i);case 12:return e.abrupt("return",o);case 13:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function pl(e,t){hl.set(e._key(),t)}function ml(e){return fs(e._redirectPersistence)}function _l(e){return ou("pendingRedirect",e.config.apiKey,e.name)}
/**
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
 */function yl(e,t){return gl.apply(this,arguments)}function gl(){return gl=e(d)(e(_).mark((function t(n,r){var i,a,o,s,u,c=arguments;return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=c.length>2&&void 0!==c[2]&&c[2],a=Iu(n),o=nl(a,r),s=new dl(a,o,i),e.next=6,s.execute();case 6:if(!(u=e.sent)||i){e.next=13;break}return delete u.user._redirectEventId,e.next=11,a._persistUserIfCurrent(u.user);case 11:return e.next=13,a._setRedirectUser(null,r);case 13:return e.abrupt("return",u);case 14:case"end":return e.stop()}}),t)}))),gl.apply(this,arguments)}
/**
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
 */
var kl=function(){"use strict";function t(n){e(f)(this,t),this.auth=n,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return e(v)(t,[{key:"registerConsumer",value:function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}},{key:"unregisterConsumer",value:function(e){this.consumers.delete(e)}},{key:"onEvent",value:function(e){var t=this;if(this.hasEventBeenHandled(e))return!1;var n=!1;return this.consumers.forEach((function(r){t.isEventForConsumer(e,r)&&(n=!0,t.sendToConsumer(e,r),t.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return wl(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}},{key:"sendToConsumer",value:function(e,t){var n;if(e.error&&!wl(e)){var r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(os(this.auth,r))}else t.onAuthEvent(e)}},{key:"isEventForConsumer",value:function(e,t){var n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}},{key:"hasEventBeenHandled",value:function(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(bl(e))}},{key:"saveEventToCache",value:function(e){this.cachedEventUids.add(bl(e)),this.lastProcessedEventTime=Date.now()}}]),t}();function bl(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((function(e){return e})).join("-")}function wl(e){var t=e.type,n=e.error;return"unknown"===t&&"auth/no-auth-event"===(null==n?void 0:n.code)}function Il(e){return Tl.apply(this,arguments)}function Tl(){return Tl=
/**
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
 */
e(d)(e(_).mark((function t(n){var r,i=arguments;return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:{},e.abrupt("return",xs(n,"GET","/v1/projects",r));case 2:case"end":return e.stop()}}),t)}))),Tl.apply(this,arguments)}
/**
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
 */var Cl=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xl=/^https?/;function El(){return(El=e(d)(e(_).mark((function t(n){var r,i,a,o,s,u,c;return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.config.emulator){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,Il(n);case 4:r=e.sent.authorizedDomains,i=!0,a=!1,o=void 0,e.prev=6,s=r[Symbol.iterator]();case 8:if(i=(u=s.next()).done){e.next=20;break}if(c=u.value,e.prev=10,!Sl(c)){e.next=13;break}return e.abrupt("return");case 13:e.next=17;break;case 15:e.prev=15,e.t0=e.catch(10);case 17:i=!0,e.next=8;break;case 20:e.next=26;break;case 22:e.prev=22,e.t1=e.catch(6),a=!0,o=e.t1;case 26:e.prev=26,e.prev=27,i||null==s.return||s.return();case 29:if(e.prev=29,!a){e.next=32;break}throw o;case 32:return e.finish(29);case 33:return e.finish(26);case 34:as(n,"unauthorized-domain");case 35:case"end":return e.stop()}}),t,null,[[6,22,26,34],[10,15],[27,,29,33]])})))).apply(this,arguments)}function Sl(e){var t=ps(),n=new URL(t),r=n.protocol,i=n.hostname;if(e.startsWith("chrome-extension://")){var a=new URL(e);return""===a.hostname&&""===i?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&a.hostname===i}if(!xl.test(r))return!1;if(Cl.test(e))return i===e;var o=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */var Rl=new gs(3e4,6e4);function Nl(){var t=Pc().___jsl,n=!0,r=!1,i=void 0;if(null==t?void 0:t.H)try{for(var a,o=Object.keys(t.H)[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(t.H[s].r=t.H[s].r||[],t.H[s].L=t.H[s].L||[],t.H[s].r=e(m)(t.H[s].L),t.CP)for(var u=0;u<t.CP.length;u++)t.CP[u]=null}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}}var Pl=null;function Ol(e){return Pl=Pl||function(e){return new Promise((function(t,n){var r,i,a;function o(){Nl(),gapi.load("gapi.iframes",{callback:function(){t(gapi.iframes.getContext())},ontimeout:function(){Nl(),n(os(e,"network-request-failed"))},timeout:Rl.get()})}if(null===(i=null===(r=Pc().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(a=Pc().gapi)||void 0===a?void 0:a.load)){var s=Xc("iframefcb");return Pc()[s]=function(){gapi.load?o():n(os(e,"network-request-failed"))},Qc("https://apis.google.com/js/api.js?onload=".concat(s)).catch((function(e){return n(e)}))}o()}})).catch((function(e){throw Pl=null,e}))}(e),Pl}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */var Al=new gs(5e3,15e3),Dl={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ll=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ml(e){var t=e.config;cs(t.authDomain,e,"auth-domain-config-required");var n=t.emulator?ks(t,"emulator/auth/iframe"):"https://".concat(e.config.authDomain,"/").concat("__/auth/iframe"),r={apiKey:t.apiKey,appName:e.name,v:wt},i=Ll.get(e.config.apiHost);i&&(r.eid=i);var a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),"".concat(n,"?").concat(ge(r).slice(1))}function Fl(e){return Ul.apply(this,arguments)}function Ul(){return Ul=e(d)(e(_).mark((function t(n){var r,i;return e(_).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Ol(n);case 2:return r=t.sent,cs(i=Pc().gapi,n,"internal-error"),t.abrupt("return",r.open({where:document.body,url:Ml(n),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Dl,dontclear:!0},(function(t){return new Promise((r=e(d)(e(_).mark((function r(i,a){var o,s,u;return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=function(){Pc().clearTimeout(s),i(t)},e.next=3,t.restyle({setHideOnLeave:!1});case 3:o=os(n,"network-request-failed"),s=Pc().setTimeout((function(){a(o)}),Al.get()),t.ping(u).then(u,(function(){a(o)}));case 7:case"end":return e.stop()}}),r)}))),function(e,t){return r.apply(this,arguments)}));var r})));case 6:case"end":return t.stop()}}),t)}))),Ul.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */var Wl={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},jl="_blank",ql="http://localhost",Hl=function(){"use strict";function t(n){e(f)(this,t),this.window=n,this.associatedEvent=null}return e(v)(t,[{key:"close",value:function(){if(this.window)try{this.window.close()}catch(e){}}}]),t}();function Vl(t,n,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:600,o=Math.max((window.screen.availHeight-a)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString(),u="",c=Object.assign(Object.assign({},Wl),{width:i.toString(),height:a.toString(),top:o,left:s}),l=G().toLowerCase();r&&(u=hu(l)?jl:r),cu(l)&&(n=n||ql,c.scrollbars="yes");var h=Object.entries(c).reduce((function(t,n){var r=e(y)(n,2),i=r[0],a=r[1];return"".concat(t).concat(i,"=").concat(a,",")}),"");if(_u(l)&&"_self"!==u)return zl(n||"",u),new Hl(null);var d=window.open(n||"",u,h);cs(d,t,"popup-blocked");try{d.focus()}catch(e){}return new Hl(d)}function zl(e,t){var n=document.createElement("a");n.href=e,n.target=t;var r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
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
 */var Bl="__/auth/handler",Kl="emulator/auth/handler";function Gl(t,n,r,i,a,o){cs(t.config.authDomain,t,"auth-domain-config-required"),cs(t.config.apiKey,t,"invalid-api-key");var s={apiKey:t.config.apiKey,appName:t.name,authType:r,redirectUrl:i,v:wt,eventId:a};if(n instanceof Qu){n.setDefaultLanguage(t.languageCode),s.providerId=n.providerId||"",pe(n.getCustomParameters())||(s.customParameters=JSON.stringify(n.getCustomParameters()));var u=!0,c=!1,l=void 0;try{for(var h,d=Object.entries(o||{})[Symbol.iterator]();!(u=(h=d.next()).done);u=!0){var f=e(y)(h.value,2),v=f[0],p=f[1];s[v]=p}}catch(e){c=!0,l=e}finally{try{u||null==d.return||d.return()}finally{if(c)throw l}}}if(n instanceof Xu){var m=n.getScopes().filter((function(e){return""!==e}));m.length>0&&(s.scopes=m.join(","))}t.tenantId&&(s.tid=t.tenantId);var _,g,k=s,b=!0,w=!1,I=void 0;try{for(var T,C=Object.keys(k)[Symbol.iterator]();!(b=(T=C.next()).done);b=!0){var x=T.value;void 0===k[x]&&delete k[x]}}catch(e){w=!0,I=e}finally{try{b||null==C.return||C.return()}finally{if(w)throw I}}return"".concat((_=t,g=_.config,g.emulator?ks(g,Kl):"https://".concat(g.authDomain,"/").concat(Bl)),"?").concat(ge(k).slice(1))}
/**
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
 */
var Yl="webStorageSupport",Jl=function(){"use strict";function t(){e(f)(this,t),this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=xc,this._completeRedirectFn=yl,this._overrideRedirectResult=pl}return e(v)(t,[{key:"_openPopup",value:function(t,n,r,i){var a=this;return e(d)(e(_).mark((function o(){var s,u;return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return hs(null===(s=a.eventManagers[t._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()"),u=Gl(t,n,r,ps(),i),e.abrupt("return",Vl(t,u,Rc()));case 4:case"end":return e.stop()}}),o)})))()}},{key:"_openRedirect",value:function(t,n,r,i){var a=this;return e(d)(e(_).mark((function o(){return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a._originValidation(t);case 2:return o=Gl(t,n,r,ps(),i),Pc().location.href=o,e.abrupt("return",new Promise((function(){})));case 4:case"end":return e.stop()}var o}),o)})))()}},{key:"_initialize",value:function(e){var t=this,n=e._key();if(this.eventManagers[n]){var r=this.eventManagers[n],i=r.manager,a=r.promise;return i?Promise.resolve(i):(hs(a,"If manager is not set, promise should be"),a)}var o=this.initAndGetManager(e);return this.eventManagers[n]={promise:o},o.catch((function(){delete t.eventManagers[n]})),o}},{key:"initAndGetManager",value:function(t){var n=this;return e(d)(e(_).mark((function r(){var i,a;return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Fl(t);case 2:return i=e.sent,a=new kl(t),i.register("authEvent",(function(e){return cs(null==e?void 0:e.authEvent,t,"invalid-auth-event"),{status:a.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),n.eventManagers[t._key()]={manager:a},n.iframes[t._key()]=i,e.abrupt("return",a);case 8:case"end":return e.stop()}}),r)})))()}},{key:"_isIframeWebStorageSupported",value:function(e,t){this.iframes[e._key()].send(Yl,{type:Yl},(function(n){var r,i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),as(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}},{key:"_originValidation",value:function(e){var t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=function(e){return El.apply(this,arguments)}(e)),this.originValidationPromises[t]}},{key:"_shouldInitProactively",get:function(){return gu()||lu()||mu()}}]),t}(),Ql=Jl,Xl=function(t){"use strict";e(k)(r,t);var n=e(w)(r);function r(t){var i;return e(f)(this,r),(i=n.call(this,"phone")).credential=t,i}return e(v)(r,[{key:"_finalizeEnroll",value:function(e,t,n){return function(e,t){return xs(e,"POST","/v2/accounts/mfaEnrollment:finalize",Cs(e,t))}(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},{key:"_finalizeSignIn",value:function(e,t){return function(e,t){return xs(e,"POST","/v2/accounts/mfaSignIn:finalize",Cs(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}],[{key:"_fromCredential",value:function(e){return new r(e)}}]),r}(function(){"use strict";function t(n){e(f)(this,t),this.factorId=n}return e(v)(t,[{key:"_process",value:function(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return ls("unexpected MultiFactorSessionType")}}}]),t}());(function(){"use strict";function t(){e(f)(this,t)}return e(v)(t,null,[{key:"assertion",value:function(e){return Xl._fromCredential(e)}}]),t}()).FACTOR_ID="phone";var $l="@firebase/auth",Zl="0.20.11",eh=function(){"use strict";function t(n){e(f)(this,t),this.auth=n,this.internalListeners=new Map}return e(v)(t,[{key:"getUid",value:function(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}},{key:"getToken",value:function(t){var n=this;return e(d)(e(_).mark((function r(){var i;return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.assertAuthConfigured(),e.next=3,n.auth._initializationPromise;case 3:if(n.auth.currentUser){e.next=5;break}return e.abrupt("return",null);case 5:return e.next=7,n.auth.currentUser.getIdToken(t);case 7:return i=e.sent,e.abrupt("return",{accessToken:i});case 9:case"end":return e.stop()}}),r)})))()}},{key:"addAuthTokenListener",value:function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var t=this.auth.onIdTokenChanged((function(t){var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}}},{key:"removeAuthTokenListener",value:function(e){this.assertAuthConfigured();var t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}},{key:"assertAuthConfigured",value:function(){cs(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}},{key:"updateProactiveRefresh",value:function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}]),t}();
/**
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
 */
var th,nh=ne("authIdTokenMaxAge")||300,rh=null,ih=function(t){return n=e(d)(e(_).mark((function n(r){var i,a,o;return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=r,!e.t0){e.next=5;break}return e.next=4,r.getIdTokenResult();case 4:e.t0=e.sent;case 5:if(i=e.t0,!((a=i&&((new Date).getTime()-Date.parse(i.issuedAtTime))/1e3)&&a>nh)){e.next=9;break}return e.abrupt("return");case 9:if(o=null==i?void 0:i.token,rh!==o){e.next=12;break}return e.abrupt("return");case 12:return rh=o,e.next=15,fetch(t,{method:o?"POST":"DELETE",headers:o?{Authorization:"Bearer ".concat(o)}:{}});case 15:case"end":return e.stop()}}),n)}))),function(e){return n.apply(this,arguments)};var n};th="Browser",_t(new Re("auth",(function(e,t){var n=t.options,r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=r.options,o=a.apiKey,s=a.authDomain;return function(e,t){cs(o&&!o.includes(":"),"invalid-api-key",{appName:e.name}),cs(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});var r={apiKey:o,authDomain:s,clientPlatform:th,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ku(th)},i=new wu(e,t,r);return function(e,t){var n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(fs);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(i,n),i}(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((function(e,t,n){e.getProvider("auth-internal").initialize()}))),_t(new Re("auth-internal",(function(e){var t=Iu(e.getProvider("auth").getImmediate());return new eh(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Ct($l,Zl,
/**
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
 */
function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(th)),Ct($l,Zl,"esm2017");var ah=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Tt(),n=arguments.length>1?arguments[1]:void 0,r=yt(t,"database").getImmediate({identifier:n}),i=ee("database");return i&&Go.apply(void 0,[r].concat(e(m)(i))),r}(It({apiKey:"AIzaSyBO11oR33t-VMPXIdPhVdKy-YV2hVS0eQA",authDomain:"authentication-ecaf1.firebaseapp.com",databaseURL:"https://authentication-ecaf1-default-rtdb.europe-west1.firebasedatabase.app",projectId:"authentication-ecaf1",storageBucket:"authentication-ecaf1.appspot.com",messagingSenderId:"753823341746",appId:"1:753823341746:web:910a9a2a4acbc8f7223dab"})),oh=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Tt(),t=yt(e,"auth");if(t.isInitialized())return t.getImmediate();var n=vs(e,{popupRedirectResolver:Ql,persistence:[Yc,Tc,xc]}),r=ne("authTokenSyncURL");if(r){var i=ih(r);gc(n,i,(function(){return i(n.currentUser)})),yc(n,(function(e){return i(e)}))}var a=Z("auth");return a&&Cu(n,"http://".concat(a)),n}(),sh=function(e){return document.querySelector(e)};sh(".register-btn").addEventListener("click",(function(e){sh(".modal-form__backdrop").classList.remove("hidden")})),sh(".modal-form__close-button").addEventListener("click",(function(e){e.preventDefault(),sh(".modal-form__backdrop").classList.add("hidden")})),window.addEventListener("keydown",(function e(t){t.preventDefault(),"Escape"===t.code&&(sh(".modal-form__backdrop").classList.add("hidden"),window.removeEventListener("keydown",e))})),sh(".modal-form__backdrop").addEventListener("click",(function e(t){t.currentTarget===t.target&&(sh(".modal-form__backdrop").classList.add("hidden"),sh(".modal-form__backdrop").removeEventListener("click",e))})),sh("#register").addEventListener("click",(function(e){e.preventDefault();var t=sh("#username").value,n=sh("#email").value,r=sh("#password").value;""===t||""===n||""===r?window.alert("Please write something!"):mc(oh,n,r).then((function(e){var r=e.user;jo(Uo(ah,"users/"+r.uid),{username:t,useremail:n}),sh(".modal-form__registration").reset(),window.alert("Yor profile in base")})).catch((function(e){console.log(e);e.code,e.message;window.alert("Oops")}))})),sh("#logIn").addEventListener("click",(function(e){e.preventDefault();var t=sh("#mail").value,n=sh("#pasw").value;""===t||""===n?window.alert("Please write something!"):(r=oh,i=t,a=n,vc(Se(r),Ju.credential(i,a))).then((function(e){var t=e.user;null!==t&&(qo(Uo(ah,"users/"+t.uid),{last_login:new Date}),window.alert("Welcome!"),sh(".modal-form__login").reset())})).catch((function(e){e.code,e.message;window.alert("Oops")}));var r,i,a})),(0,s.getLocalStorage)(),a.default.movieContainer.addEventListener("click",o.renderModalFilmCard),a.default.btnClose.addEventListener("click",o.closeModal),(0,u.onUpBtnClick)()}();
//# sourceMappingURL=library.e9b30065.js.map
