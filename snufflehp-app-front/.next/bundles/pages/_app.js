module.exports=__NEXT_REGISTER_PAGE("/_app",function(){return{page:webpackJsonp([5],{329:function(e,t,r){e.exports=r(330)},330:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(7),o=r.n(n),a=r(0),i=r.n(a),u=r(4),c=r(332),l=r.n(c),s=r(334),p=r.n(s),f=r(95),d=r(335);function y(e){return function(t){var r=t.dispatch,n=t.getState;return function(t){return function(o){return"function"==typeof o?o(r,n,e):t(o)}}}}var h=y();h.withExtraArgument=y;var b=h,O=r(54),g=r(174),v=r(22);function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){_(e,t,r[t])})}return e}function _(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,r=Object.assign({},e);switch(t.type){case v.a.UPDATE_ADDR:return r.address=m({},t.payload),console.log("newStage",r),r;case v.a.LOGIN_TOGGLE:return r.isLogin=t.payload,r;case v.a.LOGIN_ADD:return r=m({},t.payload);case v.a.LOGIN_CLEAR:return{};default:return e}};function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){S(e,t,r[t])})}return e}function S(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function E(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var j={productAll:[],productNewBook:[],productNewOther:[],detail:{},cartOrders:{amtTotal:0,list:[],shipping:{typeSel:0,priceBase:[40,20,60],plusPacking:{book:10,other:5},dicut:!1,bubble:!1,defaultWeight:4e3},summary:{showNormal:!0,totalWeight:0,priceNow:[0,0,0],sumPlusPack:0,productPrice:0,shippingPrice:0,total:0}}},T=function(e){return e.reduce(function(e,t){return e+(1===t.status?parseInt(t.amount,10):0)},0)},D=function(e){var t,r=0,n=0,o=0,a=0,i=0,u=E(e.shipping.priceBase),c=0,l=e.shipping.typeSel;return e.list.forEach(function(e){1===e.status&&(r+=parseFloat(e.amount*e.product.price),1===e.product.category_id?o+=parseInt(e.amount,10):a+=parseInt(e.amount,10),void 0!==e.product.weight&&(c+=parseInt(e.product.weight,10)*e.amount))}),t=c>e.shipping.defaultWeight,2!==l&&(l=t?1:0),i=o>0?(o-1)*e.shipping.plusPacking.book+a*e.shipping.plusPacking.other:(a-1)*e.shipping.plusPacking.other,u[0]+=i,u[1]+=i,u[2]+=i,n=u[l],e.shipping.dicut&&(n+=16),e.shipping.bubble&&(n+=10),P({},e,{summary:{showNormal:t,totalWeight:c,priceNow:u,sumPlusPack:i,productPrice:r,shippingPrice:n,total:r+n},shipping:P({},e.shipping,{typeSel:l})})},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0,r=JSON.stringify(Object.assign({},e)),n=JSON.parse(r);switch(t.type){case v.a.TOGGLE_SHIELD_PACKAGE:return n.cartOrders.shipping[t.payload.type]=!n.cartOrders.shipping[t.payload.type],n.cartOrders=D(n.cartOrders),n;case v.a.UPDATE_SHIPPING_TYPE:return n.cartOrders.shipping.typeSel=t.payload,n.cartOrders=D(n.cartOrders),n;case v.a.DELETE_ORDER_PRODUCT:var o=e.cartOrders.list.findIndex(function(e){return e.id===t.payload.id});return n.cartOrders.list.splice(o,1),n.cartOrders.amtTotal=T(n.cartOrders.list),n.cartOrders=D(n.cartOrders),n;case v.a.CART_LOAD:return n.cartOrders.amtTotal=T(t.payload),n.cartOrders.list=t.payload,n.cartOrders=D(n.cartOrders),n;case v.a.CART_UPDATE:var a=t.payload,i=a.product_id,u=a.user_id,c=!0;return n.cartOrders.list=e.cartOrders.list.map(function(e){return parseInt(e.product_id,10)===parseInt(i,10)&&parseInt(e.user_id,10)===parseInt(u,10)?(c=!1,P({},e,t.payload)):e}),c&&n.cartOrders.list.push(t.payload),n.cartOrders.amtTotal=T(n.cartOrders.list),n.cartOrders=D(n.cartOrders),n;case v.a.PRODUCT_LOAD_DETAIL:return n.detail=t.payload,n;case v.a.PRODUCT_LOAD_ALL:return n.productAll=t.payload,n;case v.a.PRODUCT_LOAD_NEW_BOOK:return n.productNewBook=t.payload,n;case v.a.PRODUCT_LOAD_NEW_OTHER:return n.productNewOther=t.payload,n;default:return e}},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{show:!1},t=arguments.length>1?arguments[1]:void 0,r=Object.assign({},e);switch(t.type){case v.a.TOGGLE_STATUS_TAG:return r.show=t.payload,r;default:return e}},x={dialogShowGotoLogin:!1,confirmDelete:!1,itemPrepareDel:{}},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0,r=Object.assign({},e);switch(t.type){case v.a.TOGGLE_DIALOG_GOTO_SIGIN:return r.dialogShowGotoLogin=t.payload,r;case v.a.TOGGLE_SHOW_CONFIRM_DELETE:return r.confirmDelete=t.payload.show,r.itemPrepareDel=t.payload.item,r;default:return e}},N=Object(f.combineReducers)({products:k,StatusTagReducer:I,auth:w,UtilityReducer:A,form:O.c,responsive:g.d});function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function L(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function R(e,t){return!t||"object"!==C(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var G=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),R(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var r,n,a,s,p;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.a),r=t,n=[{key:"render",value:function(){var e=this.props,t=e.Component,r=e.pageProps,n=e.store;return i.a.createElement(c.Container,null,i.a.createElement(u.a,{store:n},i.a.createElement(t,r)))}}],a=[{key:"getInitialProps",value:(s=o.a.mark(function e(t){var r,n,a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.Component,void 0!==(n=t.ctx).req&&(a=Object(g.c)(n.req),n.store.dispatch(Object(g.e)(a))),!r.getInitialProps){e.next=8;break}return e.next=5,r.getInitialProps(n);case 5:e.t0=e.sent,e.next=9;break;case 8:e.t0={};case 9:return e.t1=e.t0,e.abrupt("return",{pageProps:e.t1});case 11:case"end":return e.stop()}},e,this)}),p=function(){var e=this,t=arguments;return new Promise(function(r,n){var o=s.apply(e,t);function a(e,t){try{var a=o[e](t),c=a.value}catch(e){return void n(e)}a.done?r(c):Promise.resolve(c).then(i,u)}function i(e){a("next",e)}function u(e){a("throw",e)}i()})},function(e){return p.apply(this,arguments)})}],n&&L(r.prototype,n),a&&L(r,a),t}();t.default=p()(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(f.createStore)(N,e,Object(d.composeWithDevTools)(Object(f.applyMiddleware)(b)))})(G)},332:function(e,t,r){e.exports=r(333)},333:function(e,t,r){"use strict";var n=r(87),o=r(18);Object.defineProperty(t,"__esModule",{value:!0}),t.createUrl=w,t.Container=t.default=void 0;var a=o(r(7)),i=o(r(130)),u=o(r(230)),c=o(r(49)),l=o(r(92)),s=o(r(25)),p=o(r(26)),f=o(r(93)),d=o(r(94)),y=n(r(0)),h=o(r(1)),b=o(r(221)),O=r(91),g=r(132),v=function(e){function t(){return(0,s.default)(this,t),(0,f.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}var r;return(0,d.default)(t,e),(0,p.default)(t,[{key:"getChildContext",value:function(){return{headManager:this.props.headManager,router:(0,g.makePublicRouterInstance)(this.props.router),_containerProps:(0,c.default)({},this.props)}}},{key:"componentDidCatch",value:function(e){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,r=e.Component,n=e.pageProps,o=w(t);return y.default.createElement(m,null,y.default.createElement(r,(0,u.default)({},n,{url:o})))}}],[{key:"getInitialProps",value:(r=(0,i.default)(a.default.mark(function e(t){var r,n,o;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.Component,t.router,n=t.ctx,e.next=3,(0,O.loadGetInitialProps)(r,n);case 3:return o=e.sent,e.abrupt("return",{pageProps:o});case 5:case"end":return e.stop()}},e,this)})),function(e){return r.apply(this,arguments)})}]),t}(y.Component);t.default=v,Object.defineProperty(v,"displayName",{configurable:!0,enumerable:!0,writable:!0,value:"App"}),Object.defineProperty(v,"childContextTypes",{configurable:!0,enumerable:!0,writable:!0,value:{_containerProps:h.default.any,headManager:h.default.object,router:h.default.object}});var m=function(e){function t(){return(0,s.default)(this,t),(0,f.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,d.default)(t,e),(0,p.default)(t,[{key:"componentDidMount",value:function(){this.scrollToHash()}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var e=this.props.hash;if(e){var t=document.getElementById(e);t&&setTimeout(function(){return t.scrollIntoView()},0)}}},{key:"shouldComponentUpdate",value:function(e){return!(0,b.default)(this.props,e)}},{key:"render",value:function(){var e=this.props.children;return y.default.createElement(y.default.Fragment,null,e)}}]),t}(y.Component);t.Container=m,Object.defineProperty(m,"contextTypes",{configurable:!0,enumerable:!0,writable:!0,value:{_containerProps:h.default.any}});var _=(0,O.execOnce)(function(){0});function w(e){var t=e.pathname,r=e.asPath,n=e.query;return{get query(){return _(),n},get pathname(){return _(),t},get asPath(){return _(),r},back:function(){_(),e.back()},push:function(t,r){return _(),e.push(t,r)},pushTo:function(t,r){_();var n=r?t:null,o=r||t;return e.push(n,o)},replace:function(t,r){return _(),e.replace(t,r)},replaceTo:function(t,r){_();var n=r?t:null,o=r||t;return e.replace(n,o)}}}},334:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.setPromise=void 0;var n,o=(n=r(7))&&n.__esModule?n:{default:n},a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0));function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){p(e,t,r[t])})}return e}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Promise;var f="undefined"==typeof window;t.setPromise=function(e){return e};var d=function(e){var t=e.makeStore,r=e.initialState,n=e.config,o=e.ctx,a=void 0===o?{}:o,i=n.storeKey,u=function(){return t(n.deserializeState(r),s({},a,n,{isServer:f}))};return f?u():(window[i]||(window[i]=u()),window[i])};t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t=s({storeKey:"__NEXT_REDUX_STORE__",debug:!1,serializeState:function(e){return e},deserializeState:function(e){return e}},t),function(r){var n,i,s,p;return i=n=function(n){function o(r,n){var a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),a=l(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,r,n));var i=r.initialState,u=r.store,c=u&&"dispatch"in u&&"getState"in u;return u=c?u:d({makeStore:e,initialState:i,config:t}),t.debug&&console.log("4. WrappedApp.render",c?"picked up existing one,":"created new store with","initialState",i),a.store=u,a}var i,s,p;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(o,a.Component),i=o,(s=[{key:"render",value:function(){var e=this.props,t=e.initialProps,n=(e.initialState,e.store,function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["initialProps","initialState","store"]));return a.default.createElement(r,u({},n,t,{store:this.store}))}}])&&c(i.prototype,s),p&&c(i,p),o}(),Object.defineProperty(n,"displayName",{configurable:!0,enumerable:!0,writable:!0,value:"withRedux(".concat(r.displayName||r.name||"App",")")}),Object.defineProperty(n,"getInitialProps",{configurable:!0,enumerable:!0,writable:!0,value:(s=o.default.mark(function n(a){var i,u;return o.default.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(a){n.next=2;break}throw new Error("No app context");case 2:if(a.ctx){n.next=4;break}throw new Error("No page context");case 4:if(i=d({makeStore:e,config:t,ctx:a.ctx}),t.debug&&console.log("1. WrappedApp.getInitialProps wrapper got the store with state",i.getState()),a.ctx.store=i,a.ctx.isServer=f,u={},!("getInitialProps"in r)){n.next=13;break}return n.next=12,r.getInitialProps.call(r,a);case 12:u=n.sent;case 13:return t.debug&&console.log("3. WrappedApp.getInitialProps has store state",i.getState()),n.abrupt("return",{store:i,isServer:f,initialState:t.serializeState(i.getState()),initialProps:u});case 15:case"end":return n.stop()}},n,this)}),p=function(){var e=this,t=arguments;return new Promise(function(r,n){var o=s.apply(e,t);function a(e,t){try{var a=o[e](t),c=a.value}catch(e){return void n(e)}a.done?r(c):Promise.resolve(c).then(i,u)}function i(e){a("next",e)}function u(e){a("throw",e)}i()})},function(e){return p.apply(this,arguments)})}),i}}},335:function(e,t,r){"use strict";var n=r(95).compose;t.__esModule=!0,t.composeWithDevTools="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"==typeof arguments[0]?n:n.apply(null,arguments)},t.devToolsEnhancer="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__:function(){return function(e){return e}}}},[329]).default}});