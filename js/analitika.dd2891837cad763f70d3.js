!function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=127)}([function(t,n,r){(function(n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n&&n)||Function("return this")()}).call(this,r(56))},function(t,n,r){var e=r(0),o=r(12),i=r(26),u=r(50),c=e.Symbol,f=o("wks");t.exports=function(t){return f[t]||(f[t]=u&&c[t]||(u?c:i)("Symbol."+t))}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},function(t,n,r){var e=r(3);t.exports=function(t){if(!e(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,r){var e=r(7),o=r(36),i=r(5),u=r(18),c=Object.defineProperty;n.f=e?c:function(t,n,r){if(i(t),n=u(n,!0),i(r),o)try{return c(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},function(t,n,r){var e=r(2);t.exports=!e((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,n,r){var e=r(7),o=r(6),i=r(16);t.exports=e?function(t,n,r){return o.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n,r){var e=r(0),o=r(17).f,i=r(8),u=r(13),c=r(22),f=r(44),a=r(49);t.exports=function(t,n){var r,s,l,p,y,v=t.target,g=t.global,h=t.stat;if(r=g?e:h?e[v]||c(v,{}):(e[v]||{}).prototype)for(s in n){if(p=n[s],l=t.noTargetGet?(y=o(r,s))&&y.value:r[s],!a(g?s:v+(h?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;f(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),u(r,s,p,t)}}},function(t,n,r){var e=r(29),o=r(24);t.exports=function(t){return e(o(t))}},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n,r){var e=r(21),o=r(57);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.4.1",mode:e?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n,r){var e=r(0),o=r(12),i=r(8),u=r(4),c=r(22),f=r(37),a=r(23),s=a.get,l=a.enforce,p=String(f).split("toString");o("inspectSource",(function(t){return f.call(t)})),(t.exports=function(t,n,r,o){var f=!!o&&!!o.unsafe,a=!!o&&!!o.enumerable,s=!!o&&!!o.noTargetGet;"function"==typeof r&&("string"!=typeof n||u(r,"name")||i(r,"name",n),l(r).source=p.join("string"==typeof n?n:"")),t!==e?(f?!s&&t[n]&&(a=!0):delete t[n],a?t[n]=r:i(t,n,r)):a?t[n]=r:c(n,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||f.call(this)}))},function(t,n,r){var e=r(45),o=r(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(e[t])||i(o[t]):e[t]&&e[t][n]||o[t]&&o[t][n]}},function(t,n,r){var e=r(32),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,r){var e=r(7),o=r(43),i=r(16),u=r(10),c=r(18),f=r(4),a=r(36),s=Object.getOwnPropertyDescriptor;n.f=e?s:function(t,n){if(t=u(t),n=c(n,!0),a)try{return s(t,n)}catch(t){}if(f(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n,r){var e=r(3);t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports={}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,n){t.exports=!1},function(t,n,r){var e=r(0),o=r(8);t.exports=function(t,n){try{o(e,t,n)}catch(r){e[t]=n}return n}},function(t,n,r){var e,o,i,u=r(58),c=r(0),f=r(3),a=r(8),s=r(4),l=r(25),p=r(19),y=c.WeakMap;if(u){var v=new y,g=v.get,h=v.has,d=v.set;e=function(t,n){return d.call(v,t,n),n},o=function(t){return g.call(v,t)||{}},i=function(t){return h.call(v,t)}}else{var b=l("state");p[b]=!0,e=function(t,n){return a(t,b,n),n},o=function(t){return s(t,b)?t[b]:{}},i=function(t){return s(t,b)}}t.exports={set:e,get:o,has:i,enforce:function(t){return i(t)?o(t):e(t,{})},getterFor:function(t){return function(n){var r;if(!f(n)||(r=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,r){var e=r(12),o=r(26),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+e).toString(36)}},function(t,n,r){var e=r(20);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 0:return function(){return t.call(n)};case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,r){var e=r(24);t.exports=function(t){return Object(e(t))}},function(t,n,r){var e=r(2),o=r(11),i="".split;t.exports=e((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n,r){var e=r(0),o=r(3),i=e.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},function(t,n,r){var e=r(46),o=r(33).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n,r){var e=r(11);t.exports=Array.isArray||function(t){return"Array"==e(t)}},function(t,n,r){"use strict";var e=r(2);t.exports=function(t,n){var r=[][t];return!r||!e((function(){r.call(null,n||function(){throw 1},1)}))}},function(t,n,r){var e=r(7),o=r(2),i=r(30);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,r){var e=r(12);t.exports=e("native-function-to-string",Function.toString)},function(t,n,r){"use strict";var e=r(39).forEach,o=r(35);t.exports=o("forEach")?function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach},function(t,n,r){var e=r(27),o=r(29),i=r(28),u=r(15),c=r(60),f=[].push,a=function(t){var n=1==t,r=2==t,a=3==t,s=4==t,l=6==t,p=5==t||l;return function(y,v,g,h){for(var d,b,m=i(y),S=o(m),x=e(v,g,3),O=u(S.length),w=0,j=h||c,T=n?j(y,O):r?j(y,0):void 0;O>w;w++)if((p||w in S)&&(b=x(d=S[w],w,m),t))if(n)T[w]=b;else if(b)switch(t){case 3:return!0;case 5:return d;case 6:return w;case 2:f.call(T,d)}else if(s)return!1;return l?-1:a||s?s:T}};t.exports={forEach:a(0),map:a(1),filter:a(2),some:a(3),every:a(4),find:a(5),findIndex:a(6)}},function(t,n,r){var e=r(6).f,o=r(4),i=r(1)("toStringTag");t.exports=function(t,n,r){t&&!o(t=r?t:t.prototype,i)&&e(t,i,{configurable:!0,value:n})}},,function(t,n,r){"use strict";function e(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}r.d(n,"a",(function(){return o}));var o=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t)}var n,r,o;return n=t,(r=[{key:"addTolocalStorage",value:function(t,n){var r=JSON.stringify(n);localStorage.setItem(t,r)}},{key:"getTolocalStorage",value:function(t){return JSON.parse(localStorage.getItem(t))}}])&&e(n.prototype,r),o&&e(n,o),t}()},function(t,n,r){"use strict";var e={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!e.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:e},function(t,n,r){var e=r(4),o=r(59),i=r(17),u=r(6);t.exports=function(t,n){for(var r=o(n),c=u.f,f=i.f,a=0;a<r.length;a++){var s=r[a];e(t,s)||c(t,s,f(n,s))}}},function(t,n,r){t.exports=r(0)},function(t,n,r){var e=r(4),o=r(10),i=r(52).indexOf,u=r(19);t.exports=function(t,n){var r,c=o(t),f=0,a=[];for(r in c)!e(u,r)&&e(c,r)&&a.push(r);for(;n.length>f;)e(c,r=n[f++])&&(~i(a,r)||a.push(r));return a}},function(t,n,r){var e=r(32),o=Math.max,i=Math.min;t.exports=function(t,n){var r=e(t);return r<0?o(r+n,0):i(r,n)}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,r){var e=r(2),o=/#|\.prototype\./,i=function(t,n){var r=c[u(t)];return r==a||r!=f&&("function"==typeof n?e(n):!!n)},u=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},f=i.NATIVE="N",a=i.POLYFILL="P";t.exports=i},function(t,n,r){var e=r(2);t.exports=!!Object.getOwnPropertySymbols&&!e((function(){return!String(Symbol())}))},function(t,n,r){"use strict";var e=r(9),o=r(38);e({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},function(t,n,r){var e=r(10),o=r(15),i=r(47),u=function(t){return function(n,r,u){var c,f=e(n),a=o(f.length),s=i(u,a);if(t&&r!=r){for(;a>s;)if((c=f[s++])!=c)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===r)return t||s||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},function(t,n,r){var e=r(0),o=r(54),i=r(38),u=r(8);for(var c in o){var f=e[c],a=f&&f.prototype;if(a&&a.forEach!==i)try{u(a,"forEach",i)}catch(t){a.forEach=i}}},function(t,n){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,n,r){var e=r(14);t.exports=e("document","documentElement")},function(t,n){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,n,r){var e=r(0),o=r(22),i=e["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,n,r){var e=r(0),o=r(37),i=e.WeakMap;t.exports="function"==typeof i&&/native code/.test(o.call(i))},function(t,n,r){var e=r(14),o=r(31),i=r(48),u=r(5);t.exports=e("Reflect","ownKeys")||function(t){var n=o.f(u(t)),r=i.f;return r?n.concat(r(t)):n}},function(t,n,r){var e=r(3),o=r(34),i=r(1)("species");t.exports=function(t,n){var r;return o(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!o(r.prototype)?e(r)&&null===(r=r[i])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===n?0:n)}},,,,function(t,n,r){},,,,,function(t,n,r){var e=r(5),o=r(97),i=r(33),u=r(19),c=r(55),f=r(30),a=r(25)("IE_PROTO"),s=function(){},l=function(){var t,n=f("iframe"),r=i.length;for(n.style.display="none",c.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),l=t.F;r--;)delete l.prototype[i[r]];return l()};t.exports=Object.create||function(t,n){var r;return null!==t?(s.prototype=e(t),r=new s,s.prototype=null,r[a]=t):r=l(),void 0===n?r:o(r,n)},u[a]=!0},function(t,n,r){var e=r(46),o=r(33);t.exports=Object.keys||function(t){return e(t,o)}},function(t,n,r){n.f=r(1)},,,,,,,,,function(t,n,r){"use strict";var e=r(9),o=r(0),i=r(14),u=r(21),c=r(7),f=r(50),a=r(2),s=r(4),l=r(34),p=r(3),y=r(5),v=r(28),g=r(10),h=r(18),d=r(16),b=r(69),m=r(70),S=r(31),x=r(98),O=r(48),w=r(17),j=r(6),T=r(43),P=r(8),E=r(13),L=r(12),D=r(25),M=r(19),A=r(26),_=r(1),C=r(71),k=r(81),N=r(40),F=r(23),I=r(39).forEach,G=D("hidden"),V=_("toPrimitive"),R=F.set,q=F.getterFor("Symbol"),H=Object.prototype,J=o.Symbol,W=i("JSON","stringify"),z=w.f,$=j.f,B=x.f,K=T.f,Q=L("symbols"),Y=L("op-symbols"),U=L("string-to-symbol-registry"),X=L("symbol-to-string-registry"),Z=L("wks"),tt=o.QObject,nt=!tt||!tt.prototype||!tt.prototype.findChild,rt=c&&a((function(){return 7!=b($({},"a",{get:function(){return $(this,"a",{value:7}).a}})).a}))?function(t,n,r){var e=z(H,n);e&&delete H[n],$(t,n,r),e&&t!==H&&$(H,n,e)}:$,et=function(t,n){var r=Q[t]=b(J.prototype);return R(r,{type:"Symbol",tag:t,description:n}),c||(r.description=n),r},ot=f&&"symbol"==typeof J.iterator?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof J},it=function(t,n,r){t===H&&it(Y,n,r),y(t);var e=h(n,!0);return y(r),s(Q,e)?(r.enumerable?(s(t,G)&&t[G][e]&&(t[G][e]=!1),r=b(r,{enumerable:d(0,!1)})):(s(t,G)||$(t,G,d(1,{})),t[G][e]=!0),rt(t,e,r)):$(t,e,r)},ut=function(t,n){y(t);var r=g(n),e=m(r).concat(st(r));return I(e,(function(n){c&&!ct.call(r,n)||it(t,n,r[n])})),t},ct=function(t){var n=h(t,!0),r=K.call(this,n);return!(this===H&&s(Q,n)&&!s(Y,n))&&(!(r||!s(this,n)||!s(Q,n)||s(this,G)&&this[G][n])||r)},ft=function(t,n){var r=g(t),e=h(n,!0);if(r!==H||!s(Q,e)||s(Y,e)){var o=z(r,e);return!o||!s(Q,e)||s(r,G)&&r[G][e]||(o.enumerable=!0),o}},at=function(t){var n=B(g(t)),r=[];return I(n,(function(t){s(Q,t)||s(M,t)||r.push(t)})),r},st=function(t){var n=t===H,r=B(n?Y:g(t)),e=[];return I(r,(function(t){!s(Q,t)||n&&!s(H,t)||e.push(Q[t])})),e};(f||(E((J=function(){if(this instanceof J)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,n=A(t),r=function(t){this===H&&r.call(Y,t),s(this,G)&&s(this[G],n)&&(this[G][n]=!1),rt(this,n,d(1,t))};return c&&nt&&rt(H,n,{configurable:!0,set:r}),et(n,t)}).prototype,"toString",(function(){return q(this).tag})),T.f=ct,j.f=it,w.f=ft,S.f=x.f=at,O.f=st,c&&($(J.prototype,"description",{configurable:!0,get:function(){return q(this).description}}),u||E(H,"propertyIsEnumerable",ct,{unsafe:!0})),C.f=function(t){return et(_(t),t)}),e({global:!0,wrap:!0,forced:!f,sham:!f},{Symbol:J}),I(m(Z),(function(t){k(t)})),e({target:"Symbol",stat:!0,forced:!f},{for:function(t){var n=String(t);if(s(U,n))return U[n];var r=J(n);return U[n]=r,X[r]=n,r},keyFor:function(t){if(!ot(t))throw TypeError(t+" is not a symbol");if(s(X,t))return X[t]},useSetter:function(){nt=!0},useSimple:function(){nt=!1}}),e({target:"Object",stat:!0,forced:!f,sham:!c},{create:function(t,n){return void 0===n?b(t):ut(b(t),n)},defineProperty:it,defineProperties:ut,getOwnPropertyDescriptor:ft}),e({target:"Object",stat:!0,forced:!f},{getOwnPropertyNames:at,getOwnPropertySymbols:st}),e({target:"Object",stat:!0,forced:a((function(){O.f(1)}))},{getOwnPropertySymbols:function(t){return O.f(v(t))}}),W)&&e({target:"JSON",stat:!0,forced:!f||a((function(){var t=J();return"[null]"!=W([t])||"{}"!=W({a:t})||"{}"!=W(Object(t))}))},{stringify:function(t,n,r){for(var e,o=[t],i=1;arguments.length>i;)o.push(arguments[i++]);if(e=n,(p(n)||void 0!==t)&&!ot(t))return l(n)||(n=function(t,n){if("function"==typeof e&&(n=e.call(this,t,n)),!ot(n))return n}),o[1]=n,W.apply(null,o)}});J.prototype[V]||P(J.prototype,V,J.prototype.valueOf),N(J,"Symbol"),M[G]=!0},function(t,n,r){var e=r(45),o=r(4),i=r(71),u=r(6).f;t.exports=function(t){var n=e.Symbol||(e.Symbol={});o(n,t)||u(n,t,{value:i.f(t)})}},function(t,n,r){"use strict";var e=r(9),o=r(7),i=r(0),u=r(4),c=r(3),f=r(6).f,a=r(44),s=i.Symbol;if(o&&"function"==typeof s&&(!("description"in s.prototype)||void 0!==s().description)){var l={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),n=this instanceof p?new s(t):void 0===t?s():s(t);return""===t&&(l[n]=!0),n};a(p,s);var y=p.prototype=s.prototype;y.constructor=p;var v=y.toString,g="Symbol(test)"==String(s("test")),h=/^Symbol\((.*)\)[^)]+$/;f(y,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,n=v.call(t);if(u(l,t))return"";var r=g?n.slice(7,-1):n.replace(h,"$1");return""===r?void 0:r}}),e({global:!0,forced:!0},{Symbol:p})}},,,,,,,,,,,,,,,function(t,n,r){var e=r(7),o=r(6),i=r(5),u=r(70);t.exports=e?Object.defineProperties:function(t,n){i(t);for(var r,e=u(n),c=e.length,f=0;c>f;)o.f(t,r=e[f++],n[r]);return t}},function(t,n,r){var e=r(10),o=r(31).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return u.slice()}}(t):o(e(t))}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n,r){"use strict";r.r(n);r(80),r(82),r(51),r(128),r(53),r(64),r(129);var e=new(r(42).a),o=document.querySelector(".analitika-title__title"),i=document.querySelector("#totalresuilt"),u=document.querySelector("#totalresuiltitle"),c=e.getTolocalStorage("nevsArrForData"),f=e.getTolocalStorage("name");function a(t){var n=0;return t.forEach((function(t){t.title.indexOf(f)&&(n+=1)})),n}function s(t){var n=0;return t.forEach((function(t){null!=t.title&&t.title.indexOf(f)&&(n+=1),null!=t.description&&t.description.indexOf(f)&&(n+=1)})),n}function l(t){var n=[],r=[],e=[],o=[],i=[],u=[],c=[];return t.forEach((function(t){0==new Date(t.publishedAt).getDay()&&n.push(t),1==new Date(t.publishedAt).getDay()&&r.push(t),2==new Date(t.publishedAt).getDay()&&e.push(t),3==new Date(t.publishedAt).getDay()&&o.push(t),4==new Date(t.publishedAt).getDay()&&i.push(t),5==new Date(t.publishedAt).getDay()&&u.push(t),6==new Date(t.publishedAt).getDay()&&c.push(t)})),[n,r,e,o,i,u,c]}function p(t){var n=[],r=[];return t.forEach((function(t){n.push(s(t)/s(c)*100)})),t.forEach((function(t){r.push(s(t))})),[r,n]}f&&(o.textContent=f),c&&(i.textContent=c.length),i.textContent=s(c),u.textContent=a(c),console.log(e.getTolocalStorage("name")),console.log(a(e.getTolocalStorage("nevsArr"))),console.log();var y=p(l(c))[0],v=p(l(c))[1];console.log(v),console.log(y)},function(t,n,r){"use strict";var e=r(9),o=r(52).indexOf,i=r(35),u=[].indexOf,c=!!u&&1/[1].indexOf(1,-0)<0,f=i("indexOf");e({target:"Array",proto:!0,forced:c||f},{indexOf:function(t){return c?u.apply(this,arguments)||0:o(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,n,r){}]);