(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"0e0P":function(t,e,n){"use strict";n.d(e,"a",(function(){return A}));var r=n("lwsE"),i=n.n(r),o=n("W8MJ"),a=n.n(o),c=n("a1gu"),l=n.n(c),u=n("Nsbk"),s=n.n(u),d=n("PJYZ"),f=n.n(d),p=n("7W2i"),h=n.n(p),v=n("pVnL"),m=n.n(v),y=n("lSNA"),g=n.n(y),b=n("cDcd"),k=n.n(b),w=n("eOGF");function A(t){return function(e){function n(){var t,e;i()(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return e=l()(this,(t=s()(n)).call.apply(t,[this].concat(o))),g()(f()(e),"state",{isAppMounted:!!Object(w.D)()}),e}return h()(n,e),a()(n,[{key:"componentDidMount",value:function(){this.setAppMounted()}},{key:"setAppMounted",value:function(){this.state.isAppMounted||this.setState({isAppMounted:!0})}},{key:"render",value:function(){var e=this.props,n=this.state.isAppMounted;return k.a.createElement(t,m()({},e,{isAppMounted:n}))}}]),n}(k.a.Component)}},"3N0A":function(t,e,n){"use strict";var r=n("lwsE"),i=n.n(r),o=n("W8MJ"),a=n.n(o),c=n("a1gu"),l=n.n(c),u=n("Nsbk"),s=n.n(u),d=n("PJYZ"),f=n.n(d),p=n("7W2i"),h=n.n(p),v=n("lSNA"),m=n.n(v),y=n("cDcd"),g=n("faye"),b=n.n(g),k=n("0e0P"),w=n("TXrv"),A=function(t){function e(t){var n;i()(this,e),n=l()(this,s()(e).call(this,t)),m()(f()(n),"node",void 0);var r=t.isAppMounted,o=t.target;return n.node=null,n.state={targetIsAvailable:r&&!!Object(w.b)(o)},n}return h()(e,t),a()(e,[{key:"componentDidMount",value:function(){this.checkTargetAvailability()}},{key:"componentDidUpdate",value:function(){this.checkTargetAvailability()}},{key:"componentWillUnmount",value:function(){var t=this.node;t&&t.parentNode.removeChild(t)}},{key:"checkTargetAvailability",value:function(){var t=this.props.target;!this.state.targetIsAvailable&&Object(w.b)(t)&&this.setState({targetIsAvailable:!0})}},{key:"renderPortal",value:function(){var t=this.props,e=t.target,n=t.createContainer,r=t.children,i=Object(w.b)(e),o=i;return n&&((o=this.node)||((o=document.createElement("div")).setAttribute("class","portal-wrapper"),i.appendChild(o),this.node=o)),o?b.a.createPortal(r,o):0}},{key:"render",value:function(){return this.state.targetIsAvailable?this.renderPortal():null}}]),e}(y.Component);m()(A,"defaultProps",{target:"body",createContainer:!0}),e.a=Object(k.a)(A)},"6qam":function(t,e){t.exports=function(t){return null===t}},CX2u:function(t,e,n){"use strict";var r=n("XKFU"),i=n("g3g5"),o=n("dyZX"),a=n("69bn"),c=n("vKrd");r(r.P+r.R,"Promise",{finally:function(t){var e=a(this,i.Promise||o.Promise),n="function"==typeof t;return this.then(n?function(n){return c(e,t()).then((function(){return n}))}:t,n?function(n){return c(e,t()).then((function(){throw n}))}:t)}})},"E+oP":function(t,e,n){var r=n("A90E"),i=n("QqLw"),o=n("03A+"),a=n("Z0cm"),c=n("MMmD"),l=n("DSRE"),u=n("6sVZ"),s=n("c6wG"),d="[object Map]",f="[object Set]",p=Object.prototype.hasOwnProperty;t.exports=function(t){if(null==t)return!0;if(c(t)&&(a(t)||"string"==typeof t||"function"==typeof t.splice||l(t)||s(t)||o(t)))return!t.length;var e=i(t);if(e==d||e==f)return!t.size;if(u(t))return!r(t).length;for(var n in t)if(p.call(t,n))return!1;return!0}},J4zp:function(t,e,n){var r=n("wTVA"),i=n("m0LI"),o=n("wkBT");t.exports=function(t,e){return r(t)||i(t,e)||o()}},TXrv:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return c}));n("91GP");var r=n("lSNA"),i=n.n(r);function o(t){return"string"==typeof t?document.querySelector(t):t}function a(t,e,n){var r="string"==typeof e?i()({},e,n):e;Object.assign(t.style,r)}function c(t){var e=document.body,n=document.documentElement,r=e.scrollTop||n.scrollTop,i=e.scrollLeft||n.scrollLeft,o=t.getBoundingClientRect();return{top:o.top+r,left:o.left+i}}},dvg7:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=n("cDcd"),a=l(o),c=l(n("17x9"));function l(t){return t&&t.__esModule?t:{default:t}}var u=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.handle=function(t){if("touchend"===t.type&&(n.isTouch=!0),"click"!==t.type||!n.isTouch){var e=n.props.onClickOutside,r=n.container;r&&!r.contains(t.target)&&e(t)}},n.getContainer=n.getContainer.bind(n),n.isTouch=!1,n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),i(e,[{key:"getContainer",value:function(t){this.container=t}},{key:"render",value:function(){var t=this.props,e=t.children,n=(t.onClickOutside,function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}(t,["children","onClickOutside"]));return a.default.createElement("div",r({},n,{ref:this.getContainer}),e)}},{key:"componentDidMount",value:function(){document.addEventListener("touchend",this.handle,!0),document.addEventListener("click",this.handle,!0)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("touchend",this.handle,!0),document.removeEventListener("click",this.handle,!0)}}]),e}(o.Component);u.propTypes={onClickOutside:c.default.func.isRequired},e.default=u},m0LI:function(t,e){t.exports=function(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return n}},p0DI:function(t,e,n){"use strict";var r=n("lwsE"),i=n.n(r),o=n("W8MJ"),a=n.n(o),c=n("a1gu"),l=n.n(c),u=n("Nsbk"),s=n.n(u),d=n("PJYZ"),f=n.n(d),p=n("7W2i"),h=n.n(p),v=n("lSNA"),m=n.n(v),y=n("cDcd"),g=function(t){function e(){var t;return i()(this,e),t=l()(this,s()(e).call(this)),m()(f()(t),"state",void 0),t.state={},t}return h()(e,t),a()(e,[{key:"showChild",value:function(){this.setState({showChild:!0})}},{key:"componentDidMount",value:function(){this.showChild()}},{key:"render",value:function(){return this.state.showChild?this.props.children:null}}]),e}(n.n(y).a.Component);e.a=g},wTVA:function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},wkBT:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},xNbf:function(t,e,n){"use strict";n("rGqo"),n("8+KV");var r=n("lwsE"),i=n.n(r),o=n("W8MJ"),a=n.n(o),c=n("a1gu"),l=n.n(c),u=n("Nsbk"),s=n.n(u),d=n("PJYZ"),f=n.n(d),p=n("7W2i"),h=n.n(p),v=n("pVnL"),m=n.n(v),y=n("QILm"),g=n.n(y),b=n("lSNA"),k=n.n(b),w=n("cDcd"),A=n.n(w),E=n("p0DI"),M=function(t){function e(t){var n;i()(this,e),n=l()(this,s()(e).call(this,t)),k()(f()(n),"loaderId",void 0),k()(f()(n),"animationDuration",void 0),k()(f()(n),"totalParts",void 0);var r=t.id;return n.loaderId="hr-loader-".concat(r||Math.ceil(1e7*Math.random())),n.animationDuration=1,n.totalParts=9,n}return h()(e,t),a()(e,[{key:"renderAnimationTag",value:function(t){var e=this.props,n=e.color,r=e.loadingColor,i=this.animationDuration,o=this.loaderId,a=this.totalParts,c=i/3,l="".concat(o,"-").concat(t),u=i/a*(a-t);return A.a.createElement("animate",{attributeName:"fill",from:r,to:n,id:l,dur:"".concat(c,"s"),begin:"".concat(u,"s;").concat(l,".end+").concat(.6666*i,"s")})}},{key:"renderSvg",value:function(){var t=this.props,e=t.diameter,n=t.color,r=g()(t,["diameter","color"]);return["loadingColor","loadOnClientSide","id"].forEach((function(t){delete r[t]})),A.a.createElement("svg",m()({version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"".concat(e,"px"),height:"".concat(e,"px"),viewBox:"0 0 1100 1100"},r),A.a.createElement("g",null,A.a.createElement("path",{d:"M382.662,164.463c-10.904,0-114.259,98.957-106.185,107.011c8.012,8.033,202.659,8.033,210.629,0 C495.151,263.42,393.593,164.463,382.662,164.463z",fill:n}),A.a.createElement("path",{d:"M724.819,929.33c-11.007,0-114.606-99.256-106.562-107.328c8.042-8.072,203.238-8.072,211.297,0 C837.683,830.074,735.786,929.33,724.819,929.33z",fill:n}),A.a.createElement("line",{fill:"none",stroke:n,strokeWidth:"140",strokeMiterlimit:"8",x1:"431.362",y1:"548.118",x2:"696.214",y2:"548.467"}),A.a.createElement("line",{fill:"none",stroke:n,strokeWidth:"140",strokeMiterlimit:"8",x1:"723.914",y1:"332.673",x2:"723.914",y2:"842.504"}),A.a.createElement("line",{fill:"none",stroke:n,strokeWidth:"140",strokeMiterlimit:"8",x1:"381.794",y1:"239.607",x2:"381.794",y2:"761.195"})),A.a.createElement("path",{d:"M1013.021,546.036c0.001,0.287,0.001,0.573,0.001,0.861c-0.002,45.46-6.576,89.267-18.808,130.652 c-12.233,41.379-30.134,80.332-52.821,115.977l67.489,42.957c26.628-41.836,47.67-87.611,62.05-136.254 c14.381-48.639,22.092-100.145,22.09-153.332c0-0.336,0-0.672-0.001-1.008L1013.021,546.036z",fill:n},this.renderAnimationTag(1)),A.a.createElement("path",{d:"M904.944,250.653c27.515,32.649,50.56,69.167,68.201,108.6c17.642,39.436,29.885,81.781,35.81,126.175l79.297-10.58 c-6.953-52.12-21.353-101.935-42.082-148.265c-20.729-46.334-47.781-89.19-80.051-127.483L904.944,250.653z",fill:n},this.renderAnimationTag(2)),A.a.createElement("path",{d:"M632.321,93.7c43.962,7.635,85.753,21.502,124.488,40.676c38.731,19.173,74.4,43.658,106.037,72.503l53.9-59.116 c-37.103-33.828-78.947-62.559-124.446-85.083c-45.495-22.523-94.65-38.834-146.292-47.801L632.321,93.7z",fill:n},this.renderAnimationTag(3)),A.a.createElement("path",{d:"M322.559,148.697c33.884-19.656,70.484-35.1,109.11-45.635c38.628-10.533,79.281-16.164,121.353-16.166 c6.342,0,12.65,0.128,18.926,0.382l3.229-79.935c-7.351-0.297-14.736-0.447-22.155-0.447c-49.221-0.001-97.003,6.601-142.403,18.985 c-45.402,12.382-88.423,30.539-128.204,53.617L322.559,148.697z",fill:n},this.renderAnimationTag(4)),A.a.createElement("path",{d:"M120.489,389.924c30.023-82.728,83.202-154.506,151.696-207.38l-48.888-63.325C142.968,181.24,80.603,265.367,45.29,362.627 L120.489,389.924z",fill:n},this.renderAnimationTag(5)),A.a.createElement("path",{d:"M120.751,704.592c-17.934-49.16-27.726-102.199-27.729-157.695c0-33.914,3.661-66.905,10.596-98.658l-78.157-17.073 c-8.151,37.312-12.44,76.054-12.439,115.731c-0.004,64.933,11.492,127.349,32.577,185.119L120.751,704.592z",fill:n},this.renderAnimationTag(6)),A.a.createElement("path",{d:"M323.241,945.492c-75.442-43.586-137.431-108.066-177.952-185.41l-70.86,37.131 c47.609,90.838,120.217,166.359,208.787,217.545L323.241,945.492z",fill:n},this.renderAnimationTag(7)),A.a.createElement("path",{d:"M633.137,999.951c-25.995,4.563-52.754,6.945-80.115,6.945c-62.193-0.006-121.31-12.299-175.322-34.578l-30.513,73.951 c63.456,26.189,133.062,40.633,205.835,40.627c32.01,0,63.412-2.791,93.945-8.15L633.137,999.951z",fill:n},this.renderAnimationTag(8)),A.a.createElement("path",{d:"M905.481,842.504c-27.755,33.055-60.081,62.156-95.98,86.316c-35.9,24.16-75.367,43.377-117.443,56.701l24.151,76.268 c98.934-31.334,185.438-90.313,250.539-167.844L905.481,842.504L905.481,842.504z",fill:n},this.renderAnimationTag(9)))}},{key:"render",value:function(){var t=this.props.loadOnClientSide,e=this.renderSvg();return t&&(e=A.a.createElement(E.a,null,e)),e}}]),e}(w.PureComponent);k()(M,"defaultProps",{diameter:64,color:"#eeeeee",loadingColor:"#666666",loadOnClientSide:!0}),e.a=M}}]);
//# sourceMappingURL=https://hrcdn.net/fcore/assets/sourcemaps/vendors~hackerrank_r_community~hackerrank_r_iframeable_pricing_container~hackerrank_r_work~hackerran~ac41a930-f380f81c3f.js.map