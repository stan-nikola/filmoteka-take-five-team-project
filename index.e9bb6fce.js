!function(){function t(t,e,n,r){Object.defineProperty(t,e,{get:n,set:r,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},a=n.parcelRequired7c6;null==a&&((a=function(t){if(t in r)return r[t].exports;if(t in o){var e=o[t];delete o[t];var n={id:t,exports:{}};return r[t]=n,e.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){o[t]=e},n.parcelRequired7c6=a),a.register("iE7OH",(function(e,n){var r,o;t(e.exports,"register",(function(){return r}),(function(t){return r=t})),t(e.exports,"resolve",(function(){return o}),(function(t){return o=t}));var a={};r=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)a[e[n]]=t[e[n]]},o=function(t){var e=a[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),a.register("bpxeT",(function(t,e){"use strict";function n(t,e,n,r,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function c(t){n(i,o,a,c,s,"next",t)}function s(t){n(i,o,a,c,s,"throw",t)}c(void 0)}))}}})),a.register("2TvXO",(function(t,e){var n=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var o=e&&e.prototype instanceof m?e:m,a=Object.create(o.prototype),i=new O(r||[]);return a._invoke=function(t,e,n){var r=p;return function(o,a){if(r===d)throw new Error("Generator is already running");if(r===h){if("throw"===o)throw a;return N()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=S(i,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===p)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var s=l(t,e,n);if("normal"===s.type){if(r=n.done?h:f,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=h,n.method="throw",n.arg=s.arg)}}}(t,n,i),a}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var p="suspendedStart",f="suspendedYield",d="executing",h="completed",v={};function m(){}function g(){}function y(){}var b={};s(b,a,(function(){return this}));var x=Object.getPrototypeOf,_=x&&x(x(T([])));_&&_!==n&&r.call(_,a)&&(b=_);var w=y.prototype=m.prototype=Object.create(b);function E(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function n(o,a,i,c){var s=l(t[o],t,a);if("throw"!==s.type){var u=s.arg,p=u.value;return p&&"object"==typeof p&&r.call(p,"__await")?e.resolve(p.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(p).then((function(t){u.value=t,i(u)}),(function(t){return n("throw",t,i,c)}))}c(s.arg)}var o;this._invoke=function(t,r){function a(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(a,a):a()}}function S(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,S(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var a=o.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function T(t){if(t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}return{next:N}}function N(){return{value:e,done:!0}}return g.prototype=y,s(w,"constructor",y),s(y,"constructor",g),g.displayName=s(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},E(L.prototype),s(L.prototype,i,(function(){return this})),t.AsyncIterator=L,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new L(u(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(w),s(w,c,"Generator"),s(w,a,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=T,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;k(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:T(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}})),a.register("8MBJY",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}})),a.register("a2hTj",(function(t,e){"use strict";function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e,r){e&&n(t.prototype,e);r&&n(t,r);return t}})),a.register("dh4R1",(function(n,r){t(n.exports,"API_KEY",(function(){return l})),t(n.exports,"BASE_URL",(function(){return p})),t(n.exports,"URL_FOR_FETCH_BY_NAME",(function(){return f})),t(n.exports,"MOVIE_POSTER",(function(){return d})),t(n.exports,"FetchMoviesApi",(function(){return h})),t(n.exports,"fetchHomeTrendingMovies",(function(){return v})),t(n.exports,"fetchGenres",(function(){return g})),t(n.exports,"fetchTrailer",(function(){return b})),t(n.exports,"fetchMovies",(function(){return _}));var o=a("bpxeT"),i=a("8MBJY"),c=a("a2hTj"),s=a("2TvXO"),u=a("jEgHD"),l="62f46feb65c2319fb0db62c2c080ca35",p="https://api.themoviedb.org",f="https://api.themoviedb.org/3/search/movie",d="https://image.tmdb.org/t/p/w500",h=function(){"use strict";function t(){e(i)(this,t),this.searchQuery="",this.page=1}return e(c)(t,[{key:"fetchTrendingMovies",value:function(){return e(o)(e(s).mark((function t(){var n,r;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,(0,u.loadStart)(),t.next=4,fetch("".concat(p,"/3/trending/movie/day?api_key=").concat(l));case 4:return n=t.sent,r=n.json(),(0,u.loadStop)(),t.abrupt("return",r);case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()}},{key:"query",get:function(){return this.searchQuery},set:function(t){this.searchQuery=t}}]),t}();function v(){return m.apply(this,arguments)}function m(){return(m=e(o)(e(s).mark((function t(){var n,r;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,(0,u.loadStart)(),t.next=4,fetch("".concat(p,"/3/trending/movie/day?api_key=").concat(l));case 4:return n=t.sent,r=n.json(),(0,u.loadStop)(),t.abrupt("return",r);case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function g(){return y.apply(this,arguments)}function y(){return(y=e(o)(e(s).mark((function t(){var n,r;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(p,"/3/genre/movie/list?api_key=").concat(l));case 3:return n=t.sent,r=n.json(),t.abrupt("return",r);case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function b(t){return x.apply(this,arguments)}function x(){return(x=e(o)(e(s).mark((function t(n){var r,o;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(p,"/3/movie/").concat(n,"/videos?api_key=").concat(l));case 3:return r=t.sent,o=r.json(),t.abrupt("return",o);case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function _(t){return fetch("".concat(f,"?api_key=").concat(l,"&query=").concat(t)).then((function(t){return t.json()}))}})),a.register("jEgHD",(function(e,n){t(e.exports,"loadStart",(function(){return c})),t(e.exports,"loadStop",(function(){return s}));var r=a("b62ED"),o=document.querySelector(".js-load-spinner"),i=new(0,r.Spinner)({lines:11,length:64,width:24,radius:67,scale:.35,corners:1,speed:1.6,rotate:0,animation:"spinner-line-shrink",direction:1,color:"#f50000",fadeColor:" #FF6B08",top:"50%",left:"50%",shadow:"box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",zIndex:2e9,className:"spinner",position:"fixed"});function c(){i.spin(o)}function s(){i.stop()}})),a.register("b62ED",(function(e,n){t(e.exports,"Spinner",(function(){return a}),(function(t){return a=t}));var r=function(){return r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},r.apply(this,arguments)},o={lines:12,length:7,width:5,radius:10,scale:1,corners:1,color:"#000",fadeColor:"transparent",animation:"spinner-line-fade-default",rotate:0,direction:1,speed:1,zIndex:2e9,className:"spinner",top:"50%",left:"50%",shadow:"0 0 1px transparent",position:"absolute"},a=function(){function t(t){void 0===t&&(t={}),this.opts=r(r({},o),t)}return t.prototype.spin=function(t){return this.stop(),this.el=document.createElement("div"),this.el.className=this.opts.className,this.el.setAttribute("role","progressbar"),i(this.el,{position:this.opts.position,width:0,zIndex:this.opts.zIndex,left:this.opts.left,top:this.opts.top,transform:"scale("+this.opts.scale+")"}),t&&t.insertBefore(this.el,t.firstChild||null),function(t,e){var n=Math.round(e.corners*e.width*500)/1e3+"px",r="none";!0===e.shadow?r="0 2px 4px #000":"string"==typeof e.shadow&&(r=e.shadow);for(var o=function(t){for(var e=/^\s*([a-zA-Z]+\s+)?(-?\d+(\.\d+)?)([a-zA-Z]*)\s+(-?\d+(\.\d+)?)([a-zA-Z]*)(.*)$/,n=[],r=0,o=t.split(",");r<o.length;r++){var a=o[r].match(e);if(null!==a){var i=+a[2],c=+a[5],s=a[4],u=a[7];0!==i||s||(s=u),0!==c||u||(u=s),s===u&&n.push({prefix:a[1]||"",x:i,y:c,xUnits:s,yUnits:u,end:a[8]})}}return n}(r),a=0;a<e.lines;a++){var u=~~(360/e.lines*a+e.rotate),l=i(document.createElement("div"),{position:"absolute",top:-e.width/2+"px",width:e.length+e.width+"px",height:e.width+"px",background:c(e.fadeColor,a),borderRadius:n,transformOrigin:"left",transform:"rotate("+u+"deg) translateX("+e.radius+"px)"}),p=a*e.direction/e.lines/e.speed;p-=1/e.speed;var f=i(document.createElement("div"),{width:"100%",height:"100%",background:c(e.color,a),borderRadius:n,boxShadow:s(o,u),animation:1/e.speed+"s linear "+p+"s infinite "+e.animation});l.appendChild(f),t.appendChild(l)}}(this.el,this.opts),this},t.prototype.stop=function(){return this.el&&("undefined"!=typeof requestAnimationFrame?cancelAnimationFrame(this.animateId):clearTimeout(this.animateId),this.el.parentNode&&this.el.parentNode.removeChild(this.el),this.el=void 0),this},t}();function i(t,e){for(var n in e)t.style[n]=e[n];return t}function c(t,e){return"string"==typeof t?t:t[e%t.length]}function s(t,e){for(var n=[],r=0,o=t;r<o.length;r++){var a=o[r],i=u(a.x,a.y,e);n.push(a.prefix+i[0]+a.xUnits+" "+i[1]+a.yUnits+a.end)}return n.join(", ")}function u(t,e,n){var r=n*Math.PI/180,o=Math.sin(r),a=Math.cos(r);return[Math.round(1e3*(t*a+e*o))/1e3,Math.round(1e3*(-t*o+e*a))/1e3]}})),a.register("2hOhy",(function(n,r){t(n.exports,"renderModalFilmCard",(function(){return f})),t(n.exports,"closeModal",(function(){return m}));var o=a("bpxeT"),i=a("2TvXO"),c=a("gay7f"),s=a("dh4R1"),u=a("ft54m"),l=a("9lVYx"),p=a("jEgHD");function f(t){return d.apply(this,arguments)}function d(){return(d=e(o)(e(i).mark((function t(n){var r,o,a,f,d,m,g,y,b,x,_;return e(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(0,p.loadStart)(),c.default.body.classList.add("modal-open"),c.default.modalCard.innerHTML="",r=n.target.parentNode.dataset.id,t.prev=4,t.next=7,fetch("".concat(s.BASE_URL,"/3/movie/").concat(r,"?api_key=").concat(s.API_KEY));case 7:return o=t.sent,t.next=10,o.json();case 10:return a=t.sent,f=a.genres.map((function(t){return t.name})).join(", "),d=a.popularity,m=Number(a.vote_average.toFixed(1)),g=Number(m.toFixed()),m===g&&(m=g),t.next=18,(0,s.fetchTrailer)(r);case 18:y=t.sent,b=y.results.find((function(t){return"Official Trailer"===t.name||"Official Trailer [Subtitled]"===t.name})),x=b.key,console.log(a),_='<div class="modal-card__container-img">\n            <img\n              class="modal-card__current-img current-img-js"\n              src="'.concat(s.MOVIE_POSTER).concat(a.poster_path,'"\n              alt="Poster of film "').concat(a.title,'"\n              onError="this.src=\'').concat(e(l),'\'"\n            />\n        </div>\n        <div class="modal-card__container-description">\n          <h2 class="modal-card__name-film">').concat(a.title,'</h2>\n          <ul class="modal-card__list list">\n            <li class="modal-card__item item">\n              <span>Vote / Votes</span>\n              <p class="item__vote-value">\n                <span class="item__vote-rating">').concat(m,'</span>\n                / <span class="item__votes-vews">').concat(a.vote_count,'</span>\n              </p>\n            </li>\n            <li class="modal-card__item item">\n              <span>Popularity</span>\n              <p class="item__popularity-value">').concat(d,'</p>\n            </li>\n            <li class="modal-card__item">\n              <span>Original Title</span>\n              <p class="item__title-value">\n                ').concat(a.original_title,'\n              </p>\n            </li>\n            <li class="modal-card__item item">\n              <span>Genre</span>\n              <p class="item__genre-value">').concat(f,'</p>\n            </li>\n          </ul>\n          <h3 class="about about__header">About</h3>\n          <p class="about__description">\n            ').concat(a.overview,'\n          </p> \n          <div class="modal-card__container-btn">\n          <button\n            class="btn current-btn btn__watched btn__watched-js" data-id=').concat(r,'\n            type="button"\n          >\n            add to Watched\n          </button>\n          <button class="btn btn__queue btn__queue-js" data-id=').concat(r,' type="button">\n            add to queue\n          </button>\n        </div>\n        <div class="modal-card__container-video">\n          <iframe width=100%" height="250" src=\'https://www.youtube.com/embed/').concat(x,'\'frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n        </div>\n        '),c.default.modalCard.insertAdjacentHTML("afterbegin",_),c.default.backdrop.classList.remove("is-hidden"),(0,u.handleLocalStorage)(),window.addEventListener("keydown",v),c.default.backdrop.addEventListener("click",h),(0,p.loadStop)(),t.next=33;break;case 31:t.prev=31,t.t0=t.catch(4);case 33:case"end":return t.stop()}}),t,null,[[4,31]])})))).apply(this,arguments)}function h(t){t.currentTarget===t.target&&m()}function v(t){t.preventDefault(),"Escape"===t.code&&m()}function m(){c.default.body.classList.remove("modal-open"),c.default.backdrop.classList.add("is-hidden"),window.removeEventListener("keydown",v),c.default.backdrop.removeEventListener("click",h)}})),a.register("gay7f",(function(e,n){t(e.exports,"default",(function(){return r}));var r={cardLi:document.querySelector(".card-container"),modalCard:document.querySelector(".modal-card__container-content"),movieContainer:document.querySelector(".movie-cards-gallery"),backdrop:document.querySelector(".backdrop"),btnClose:document.querySelector(".close-btn-js"),body:document.querySelector("body")}})),a.register("ft54m",(function(n,r){t(n.exports,"handleLocalStorage",(function(){return d}));var o,i=a("bpxeT"),c=a("2TvXO"),s=a("dh4R1");function u(t){return l.apply(this,arguments)}function l(){return(l=e(i)(e(c).mark((function t(n){var r,a,i,u;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=[],a=[],o=n.target.dataset.id,console.log(o),t.next=6,fetch("".concat(s.BASE_URL,"/3/movie/").concat(o,"?api_key=").concat(s.API_KEY));case 6:return i=t.sent,t.next=9,i.json();case 9:if(u=t.sent,null!==localStorage.getItem("filmsWatched")){t.next=14;break}return a.push(u),localStorage.setItem("filmsWatched",JSON.stringify(a)),t.abrupt("return");case 14:if((a=JSON.parse(localStorage.getItem("filmsWatched"))).map((function(t){r.push(t.id)})),!r.includes(u.id)){t.next=20;break}return t.abrupt("return");case 20:a.push(u),localStorage.setItem("filmsWatched",JSON.stringify(a));case 21:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return(f=e(i)(e(c).mark((function t(n){var r,a,i,u;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=[],a=[],o=n.target.dataset.id,t.next=5,fetch("".concat(s.BASE_URL,"/3/movie/").concat(o,"?api_key=").concat(s.API_KEY));case 5:return i=t.sent,t.next=8,i.json();case 8:if(u=t.sent,null!==localStorage.getItem("filmsQueue")){t.next=13;break}a.push(u),localStorage.setItem("filmsQueue",JSON.stringify(a)),t.next=20;break;case 13:if((a=JSON.parse(localStorage.getItem("filmsQueue"))).map((function(t){r.push(t.id)})),!r.includes(u.id)){t.next=19;break}return t.abrupt("return");case 19:a.push(u),localStorage.setItem("filmsQueue",JSON.stringify(a));case 20:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(){var t=document.querySelector(".btn__watched-js"),e=document.querySelector(".btn__queue-js");t.addEventListener("click",u),e.addEventListener("click",p)}})),a.register("9lVYx",(function(t,e){t.exports=a("aNJCr").getBundleURL("cRlVJ")+a("iE7OH").resolve("jp86Y")})),a.register("aNJCr",(function(e,n){var r;t(e.exports,"getBundleURL",(function(){return r}),(function(t){return r=t}));var o={};function a(t){return(""+t).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(t){var e=o[t];return e||(e=function(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(t)return a(t[2])}return"/"}(),o[t]=e),e}})),a.register("jf0X7",(function(n,r){t(n.exports,"createMovieCard",(function(){return i}));var o=a("9lVYx");function i(t){var n=document.querySelector(".movie-cards-gallery");n.innerHTML="";var r=t.map((function(t){var n=t.title.toUpperCase(),r="";t.release_date&&(r=t.release_date.slice(0,4));var a=t.genres.join(", ");0!==t.genres.length&&""!==r&&(a+=" |");var i=e(o);return t.poster_path&&(i="https://image.tmdb.org/t/p/w500"+t.poster_path),'\n       <li class="card-container" data-id="'.concat(t.id,'">\n        <img class="image-poster" src="').concat(i,'" alt="').concat(t.title,'"  />\n        <p class="movie-data">\n        ').concat(n,'  <br>\n        <span class="genre-year">            \n        ').concat(a,"\n        ").concat(r,"         \n        </span>\n        </p>\n      </li>")}));n.innerHTML=r.join("")}})),a("iE7OH").register(JSON.parse('{"cRlVJ":"index.e9bb6fce.js","jp86Y":"no-poster_CUT.05bb0fec.jpg"}'))}();
//# sourceMappingURL=index.e9bb6fce.js.map