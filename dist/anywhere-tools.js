!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var u=r[n]={i:n,l:!1,exports:{}};return e[n].call(u.exports,u,u.exports,t),u.l=!0,u.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,r){e.exports=r(1)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.validations=void 0;var n=r(2),u=function(e){return e&&e.__esModule?e:{default:e}}(n);t.validations=u.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=r(3),o=n(u),i=r(4),f=n(i);t.default={validateCPF:o.default,validateEmail:f.default}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){var t=0,r=0;if("00000000000"==e)return!1;for(var n=1;n<=9;n++)t+=parseInt(e.substring(n-1,n))*(11-n);if(r=10*t%11,10!=r&&11!=r||(r=0),r!=parseInt(e.substring(9,10)))return!1;t=0;for(var u=1;u<=10;u++)t+=parseInt(e.substring(u-1,u))*(12-u);return r=10*t%11,10!=r&&11!=r||(r=0),r==parseInt(e.substring(10,11))};t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)};t.default=n}])});