(this.webpackJsonp=this.webpackJsonp||[]).push([[15],{1493:function(e,t,n){"use strict";n.d(t,"h",function(){return g}),n.d(t,"i",function(){return j}),n.d(t,"a",function(){return y}),n.d(t,"b",function(){return w}),n.d(t,"l",function(){return k}),n.d(t,"m",function(){return E}),n.d(t,"k",function(){return F}),n.d(t,"g",function(){return D}),n.d(t,"d",function(){return A}),n.d(t,"e",function(){return C}),n.d(t,"f",function(){return M}),n.d(t,"j",function(){return T}),n.d(t,"c",function(){return N});var r=n(58),a=n(3),o=n.n(a),c=n(38),i=n(4),u=n(1641),s=n.n(u),l=n(1682),f=n.n(l),p=n(7),d=n(1683),b=n(1498),h=(new d.a).begin().find("ipfs/"),g=new s.a,m=f()({host:"test-ipfs.status.im",port:"2053",protocol:"https"}),v=f()({host:"api.thegraph.com","api-path":"/ipfs/api/v0/",protocol:"https",port:"443"});window.ipfsHttp=m,window.ipfsHttpTheGraph=v,window.jsIPFS=g,g.on("ready",function(){console.log("Node is ready to use!"),g.bootstrap.add("/ip4/35.188.209.83/tcp/4001/ipfs/QmZqW6QHdDVyHMvYktpA1PAuKgvqhwumbuFqFB5URedSbA")});var j=function(e){return h.test(e)},y=function(e,t,n){e.stopPropagation(),e.preventDefault();var r=e.target.files,a=O(r);console.log({files:r,formattedFiles:a}),x(a,t,n)},O=function(e){for(var t=[],n=0;n<e.length;n++)t.push(w(e[n]));return t},w=function(e){var t=e.name,n=(e.type,e);return{path:"/root/".concat(t),content:n}},P=function(e){var t=e.name,n=(e.type,e);return{path:"/root/".concat(t),content:n}},x=function(e,t,n){var r;g.add(e,{progress:function(e){return console.log("received: ".concat(e))}}).then(function(e){console.log(e),r=e[0].hash,t("ipfs/".concat(r)),_(r,n)}).catch(function(e){console.error(e)})},k=function(){var e=Object(i.a)(o.a.mark(function e(t,n){var r,a,i,u,s,l=arguments;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=l.length>2&&void 0!==l[2]&&l[2],a=[],i=r?P:w,u=r?E:S,Object.keys(t).forEach(function(e){a=[].concat(Object(c.a)(a),[i(t[e][0])])}),a.push({path:"/root/manifest.json",content:p.Buffer.from(n)}),e.next=8,u(a);case 8:return s=e.sent,e.abrupt("return",s);case 10:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),S=function(){var e=Object(i.a)(o.a.mark(function e(t){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.add(t,{progress:function(e){return console.log("received: ".concat(e))}});case 2:return n=e.sent,e.abrupt("return","ipfs/".concat(n.slice(-1)[0].hash));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(i.a)(o.a.mark(function e(t){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.add(t);case 2:return n=e.sent,e.abrupt("return","ipfs/".concat(n.slice(-1)[0].hash));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(i.a)(o.a.mark(function e(t){var n,r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.split("/").slice(-1)[0],e.next=3,m.pin.add(n,{recursive:!0});case 3:r=e.sent,console.log({res:r});case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(i.a)(o.a.mark(function e(t,n){var r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D(t);case 2:r=e.sent,n(r);case 4:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),D=function(){var e=Object(i.a)(o.a.mark(function e(t){var n,a,c,i,u,s;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A(t);case 2:return n=e.sent,a=n.slice(-1)[0],c=a.content,i=new Uint8Array(c),u=new Blob([i],{type:Object(b.a)(a)}),s=URL.createObjectURL(u),e.abrupt("return",Object(r.a)({},a,{img:s}));case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),A=function(e){var t=e.split("/").slice(-1)[0];return new Promise(function(e,n){g.get(t,function(t,r){t?n(t):e(r)})})},C=function(e){var t=e.split("/").slice(-1)[0];return new Promise(function(e,n){m.get(t,function(t,r){t?n(t):e(r)})})},M=function(e){var t=e.split("/").slice(-1)[0];return new Promise(function(e,n){v.get(t,function(t,r){t?n(t):e(r)})})},T=function(e){return e.includes("http")},N=function(e){return T(e)?e:"/root/".concat(e)}},1498:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return o});var r={gif:"image/gif",jpg:"image/jpeg",png:"image/png",pdf:"application/pdf"},a=function(e){var t=e.split(".").slice(-1)[0].toLowerCase();return r[t]?r[t]:"image/jpeg"},o=function(e){return e.type.includes("video")}},1517:function(e,t,n){"use strict";function r(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,n=e?new Date(1e3*e):new Date,r=new Date,a=r-n;if(isNaN(a))return NaN;switch(t){case"years":return r.getFullYear()-n.getFullYear();case"months":return 12*r.getFullYear()+r.getMonth()-(12*n.getFullYear()+n.getMonth());case"weeks":return Math.floor(a/6048e5);case"days":return Math.floor(a/864e5);case"hours":return Math.floor(a/36e5);case"minutes":return Math.floor(a/6e4);case"seconds":return Math.floor(a/1e3);default:return}}function a(e){var t=new Date;return t.setDate(t.getDate()-e),"".concat(t.getMonth()+1,"/").concat(t.getDate(),"/").concat(t.getFullYear())}function o(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=new Date(1e3*e);return t?"".concat(n.getDate()," ").concat(n.toLocaleString("default",{month:"short"})," ").concat(n.getFullYear()):"".concat(n.getMonth()+1,"/").concat(n.getDate(),"/").concat(n.getFullYear())}n.d(t,"c",function(){return r}),n.d(t,"a",function(){return a}),n.d(t,"b",function(){return o})},1561:function(e,t,n){"use strict";var r=n(24),a=n(0),o=n(250),c=n.n(o),i=n(1635),u=n(1639),s=n(1637);function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var h=function e(t,n){if(void 0===n)return function(n){return e(t,n)};for(var r={},a=0,o=Math.min(t.length,n.length);a<o;a++)r[t[a]]=n[a];return r};var g=function(e){return"function"===typeof e.observe?e.observe():e},m=function(e){return function(t){var n=e(t);return function(e){var t=Object.keys(e),n=Object.values(e);if(1===t.length){var a=t[0];return Object(i.from)(n[0]).pipe(Object(s.map)(function(e){return Object(r.a)({},a,e)}))}return Object(u.combineLatest)(n,function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return h(t,n)})}(function(e,t){var n={};for(var r in t)n[r]=e(t[r],r);return n}(g,n))}};function v(e,t){return t?t.map(function(t){return e[t]}):[]}var j=2e3;t.a=function(e,t){var n=m(t);return function(t){var r=function(r){function o(t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(n=b(this,p(o).call(this,t)))._subscription=null,n._isMounted=!1,n._prefetchTimeout=null,n._exitedConstructor=!1,n.state={isFetching:!0,values:{},triggeredFromProps:v(t,e)},n.subscribeWithoutSettingState(n.props),n._prefetchTimeout=setTimeout(function(){console.warn("withObservables - unsubscribing from source. Leaky component!"),n.unsubscribe()},j),n._exitedConstructor=!0,n}var c,i,u;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(o,a.Component),c=o,(i=[{key:"componentDidMount",value:function(){if(this._isMounted=!0,this.cancelPrefetchTimeout(),!this._subscription){console.warn("withObservables - component mounted but no subscription present. Slow component (timed out) or something weird happened! Re-subscribing");var t=v(this.props,e);this.subscribe(this.props,t)}}},{key:"UNSAFE_componentWillReceiveProps",value:function(t){var n,r,a=this.state.triggeredFromProps,o=v(t,e);r=o,(n=a).length===r.length&&n.every(function(e,t){return e===r[t]})||this.subscribe(t,o)}},{key:"subscribe",value:function(e,t){this.setState({isFetching:!0,values:{},triggeredFromProps:t}),this.subscribeWithoutSettingState(e)}},{key:"subscribeWithoutSettingState",value:function(e){var t=this;this.unsubscribe(),this._subscription=n(e).subscribe(function(e){t._exitedConstructor?t.setState({values:e,isFetching:!1}):(t.state.values=e,t.state.isFetching=!1)},function(e){console.error("Error in Rx composition in withObservables()",e)})}},{key:"unsubscribe",value:function(){this._subscription&&this._subscription.unsubscribe(),this.cancelPrefetchTimeout()}},{key:"cancelPrefetchTimeout",value:function(){this._prefetchTimeout&&clearTimeout(this._prefetchTimeout),this._prefetchTimeout=null}},{key:"shouldComponentUpdate",value:function(e,t){return!t.isFetching}},{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"render",value:function(){var e=this.state,n=e.isFetching,r=e.values;return n?null:Object(a.createElement)(t,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){f(e,t,n[t])})}return e}({},this.props,r))}}])&&l(c.prototype,i),u&&l(c,u),o}();return c()(r,t)}}},1568:function(e,t,n){"use strict";function r(e){return e}n.d(t,"a",function(){return r})},1587:function(e,t){},1588:function(e,t){},1616:function(e,t,n){"use strict";var r=n(3),a=n.n(r),o=n(58),c=n(92),i=n(4),u=n(0),s=n(1995),l=n(1517),f=n(1493),p=n(68),d=(n(24),n(38),n(422)),b=n(182),h=n(431);n.d(t,"a",function(){return S}),n.d(t,"b",function(){return D});var g=[f.d,f.e,f.f];function m(){return(m=Object(i.a)(a.a.mark(function e(t,n){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t&&t.profile?n(Object(l.c)(t.profile.creationTime,"days")):n(Object(l.c)(!1,"days"));case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}function v(){return(v=Object(i.a)(a.a.mark(function e(t,n){var r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&t.profile){e.next=2;break}return e.abrupt("return");case 2:r=t.profile.addr,n(r);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}function j(e,t){return y.apply(this,arguments)}function y(){return(y=Object(i.a)(a.a.mark(function e(t,n){var r,o=arguments;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=o.length>2&&void 0!==o[2]?o[2]:0,(0,g[r])(t).then(function(e){console.log("IPFS get sucessful on attempt: ",r+1),n(e)}).catch(function(){var e=Object(i.a)(a.a.mark(function e(o){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log("IPFS getFilesWeb error: ",o,"Attempt: ",r+1),g[r+1]&&j(t,n,r+1);case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}function O(){return(O=Object(i.a)(a.a.mark(function e(t,n){var r,o,c,i=arguments;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=i.length>2&&void 0!==i[2]&&i[2],t&&t.profile){e.next=3;break}return e.abrupt("return");case 3:o=t.profile.url,c=o.split("/").slice(-1)[0],r&&console.log({CID:c,data:t,ipfs:f.h}),j(c,n);case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}function w(e){return P.apply(this,arguments)}function P(){return(P=Object(i.a)(a.a.mark(function e(t){var n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.pledge.fetch();case 2:return n=e.sent,t.pledgeData=n,e.abrupt("return",t);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function x(){return(x=Object(i.a)(a.a.mark(function e(t,n){var r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.b)(t);case 2:r=e.sent,n(r);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}function k(){return(k=Object(i.a)(a.a.mark(function e(t,n){var r,o,c,i;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=[],t&&t.length){e.next=3;break}return e.abrupt("return",n(r));case 3:return t.forEach(function(e){var t=Object(h.a)(e);r.push(t)}),e.next=6,Promise.all(r);case 6:return o=e.sent,c=Object(s.a)(o),e.next=10,Promise.all(c.map(w));case 10:i=e.sent,n(i);case 12:case"end":return e.stop()}},e)}))).apply(this,arguments)}function S(e){var t=Object(u.useState)(null),n=Object(c.a)(t,2),r=n[0],a=n[1];return Object(u.useEffect)(function(){!function(e,t){k.apply(this,arguments)}(e,a)},[e]),r}var E=function(e){return"manifest.json"===e.path.split("/").slice(-1)[0].toLowerCase()},F=function(e,t){if(e&&e.profile&&e.profile.projectInfo){var n=e.profile.projectInfo,r=n.isPlaying,a=n.type,c=n.file;return Object(o.a)({},e.profile.projectInfo,{media:{isPlaying:r,type:a,file:c}})}if(!t)return null;var i=t.find(E);if(!i)return null;try{return JSON.parse(i.content)}catch(u){return null}};function _(){return(_=Object(i.a)(a.a.mark(function e(t,n,r){var o,c;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&t.profile){e.next=2;break}return e.abrupt("return");case 2:return o=t.profile.projectInfo.goalToken,e.next=5,Object(p.g)(o,r);case 5:c=e.sent,n(c);case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}function D(e,t){var n=Object(u.useState)(null),r=Object(c.a)(n,2),a=r[0],o=r[1],i=Object(u.useState)(null),s=Object(c.a)(i,2),l=s[0],p=s[1],b=Object(u.useState)(null),h=Object(c.a)(b,2),g=h[0],j=h[1],y=Object(u.useState)(null),w=Object(c.a)(y,2),P=w[0],k=w[1],S=Object(u.useState)(null),E=Object(c.a)(S,2),D=E[0],A=E[1],C=Object(u.useState)(0),M=Object(c.a)(C,2),T=M[0],N=M[1],R=Object(u.useContext)(d.a),B=R.account,I=R.currencies,W=R.openSnackBar,L=R.syncWithRemote;Object(u.useEffect)(function(){f.h.on("ready",function(){k(!0)})},[e]),Object(u.useEffect)(function(){!function(e,t){x.apply(this,arguments)}(B,A)},[B]),Object(u.useEffect)(function(){!function(e,t){m.apply(this,arguments)}(t,o)},[t,e]),Object(u.useEffect)(function(){!function(e,t){v.apply(this,arguments)}(t,p)},[t,e]),Object(u.useEffect)(function(){!function(e,t){O.apply(this,arguments)}(t,j)},[P,t]),Object(u.useEffect)(function(){B&&I&&function(e,t,n){_.apply(this,arguments)}(t,N,I)},[B,t,I]);var V=Object(u.useMemo)(function(){return F(t,g)},[t,g,e]);return{account:B,authorization:T,creator:l,projectAge:a,projectAssets:g,manifest:V,delegateProfiles:D,openSnackBar:W,syncWithRemote:L}}},1635:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n(1636))},1636:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(153);t.from=r.from},1637:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n(1638))},1638:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(130);t.map=r.map},1639:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n(1640))},1640:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(153);t.combineLatest=r.combineLatest},1643:function(e,t){},1645:function(e,t){},1646:function(e,t){},1647:function(e,t){},1648:function(e,t){},1649:function(e,t){},1650:function(e,t){},1651:function(e,t){},1652:function(e,t){},1653:function(e,t){},1654:function(e,t){},1655:function(e,t){},1656:function(e,t){},1657:function(e,t){},1659:function(e,t){},1660:function(e,t){},1661:function(e,t){},1662:function(e,t){},1666:function(e,t){},1668:function(e,t){},1669:function(e,t){},1670:function(e,t){},1671:function(e,t){},1672:function(e,t){},1673:function(e,t){},1675:function(e,t){},1677:function(e,t){},1678:function(e,t){},1679:function(e,t){},1680:function(e,t){},1681:function(e,t){},1804:function(e,t,n){"use strict";var r=n(10),a=n(2),o=n(0),c=n.n(o),i=(n(13),n(20)),u=n(30),s=n(1426),l=c.a.forwardRef(function(e,t){var n,o=e.classes,u=e.className,l=e.component,f=void 0===l?"li":l,p=e.disableGutters,d=void 0!==p&&p,b=e.role,h=void 0===b?"menuitem":b,g=e.selected,m=e.tabIndex,v=Object(r.a)(e,["classes","className","component","disableGutters","role","selected","tabIndex"]);return e.disabled||(n=void 0!==m?m:-1),c.a.createElement(s.a,Object(a.a)({button:!0,role:h,tabIndex:n,component:f,selected:g,disableGutters:d,classes:{dense:o.dense},className:Object(i.a)(o.root,u,g&&o.selected,!d&&o.gutters),ref:t},v))});t.a=Object(u.a)(function(e){return{root:Object(a.a)({},e.typography.subtitle1,{minHeight:48,paddingTop:4,paddingBottom:4,boxSizing:"border-box",width:"auto",overflow:"hidden",whiteSpace:"nowrap"}),gutters:{paddingLeft:16,paddingRight:16},selected:{},dense:{minHeight:"auto"}}},{name:"MuiMenuItem"})(l)},1995:function(e,t,n){"use strict";var r=n(1568),a=n(1449),o=n(1523),c=n(1567);var i=n(1490),u=n(1521),s=function(e){var t=function(e){return{"@@transducer/init":u.a.init,"@@transducer/result":function(t){return e["@@transducer/result"](t)},"@@transducer/step":function(t,n){var r=e["@@transducer/step"](t,n);return r["@@transducer/reduced"]?{"@@transducer/value":r,"@@transducer/reduced":!0}:r}}}(e);return{"@@transducer/init":u.a.init,"@@transducer/result":function(e){return t["@@transducer/result"](e)},"@@transducer/step":function(e,n){return Object(c.a)(n)?Object(i.a)(t,e,n):Object(i.a)(t,e,[n])}}};var l=function(){function e(e,t){this.xf=t,this.f=e}return e.prototype["@@transducer/init"]=u.a.init,e.prototype["@@transducer/result"]=u.a.result,e.prototype["@@transducer/step"]=function(e,t){return this.xf["@@transducer/step"](e,this.f(t))},e}(),f=Object(a.a)(function(e,t){return new l(e,t)}),p=n(1516),d=n(421),b=n(423);var h=Object(a.a)(function(e,t){return 1===e?Object(d.a)(t):Object(p.a)(e,function e(t,n,r){return function(){for(var a=[],o=0,c=t,i=0;i<n.length||o<arguments.length;){var u;i<n.length&&(!Object(b.a)(n[i])||o>=arguments.length)?u=n[i]:(u=arguments[o],o+=1),a[i]=u,Object(b.a)(u)||(c-=1),i+=1}return c<=0?r.apply(this,a):Object(p.a)(c,e(t,a,r))}}(e,[],t))}),g=n(1489),m=Object(a.a)(Object(o.a)(["fantasy-land/map","map"],f,function(e,t){switch(Object.prototype.toString.call(t)){case"[object Function]":return h(t.length,function(){return e.call(this,t.apply(this,arguments))});case"[object Object]":return Object(i.a)(function(n,r){return n[r]=e(t[r]),n},{},Object(g.a)(t));default:return function(e,t){for(var n=0,r=t.length,a=Array(r);n<r;)a[n]=e(t[n]),n+=1;return a}(e,t)}})),v=Object(a.a)(function(e,t){return m(e,s(t))}),j=Object(a.a)(Object(o.a)(["fantasy-land/chain","chain"],v,function(e,t){return"function"===typeof t?function(n){return e(t(n))(n)}:(n=!1,function e(t){for(var r,a,o,i=[],u=0,s=t.length;u<s;){if(Object(c.a)(t[u]))for(o=0,a=(r=n?e(t[u]):t[u]).length;o<a;)i[i.length]=r[o],o+=1;else i[i.length]=t[u];u+=1}return i})(m(e,t));var n}))(r.a);t.a=j},3670:function(e,t,n){"use strict";n.r(t);var r=n(3),a=n.n(r),o=n(4),c=n(24),i=n(0),u=n.n(i),s=n(1629),l=n(83),f=n.n(l),p=n(1561),d=n(27),b=n(333),h=n(30),g=n(1616),m=n(1432),v=n(179),j=n(2),y=n(10),O=(n(13),n(20)),w=n(43),P=n(444),x=n(42),k=u.a.forwardRef(function(e,t){var n=e.classes,r=e.className,a=e.color,o=void 0===a?"primary":a,c=e.component,i=void 0===c?"a":c,s=e.onBlur,l=e.onFocus,f=e.TypographyClasses,p=e.underline,d=void 0===p?"hover":p,b=e.variant,h=void 0===b?"inherit":b,g=Object(y.a)(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),m=Object(P.a)(),k=m.isFocusVisible,S=m.onBlurVisible,E=m.ref,F=u.a.useState(!1),_=F[0],D=F[1],A=Object(x.c)(t,E);return u.a.createElement(v.a,Object(j.a)({className:Object(O.a)(n.root,n["underline".concat(Object(w.a)(d))],r,_&&n.focusVisible,{button:n.button}[i]),classes:f,color:o,component:i,onBlur:function(e){_&&(S(),D(!1)),s&&s(e)},onFocus:function(e){k(e)&&D(!0),l&&l(e)},ref:A,variant:h},g))}),S=Object(h.a)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(k),E=n(2531),F=n(1804),_=n(1926),D=n(213),A=n(68),C=f.a.methods.transfer,M=function(e){var t=e.className,n=e.manifest;return u.a.createElement("div",{className:t},u.a.createElement("div",{style:{alignSelf:"center"}},n&&n.title),u.a.createElement("div",{style:{alignSelf:"center",fontSize:"1.2rem",fontWeight:200}},n&&"By ".concat(n.creator)),u.a.createElement(m.a,null))},T=function(e){var t=e.classes,n=e.profiles,r=e.delegatePledges,c=e.projectId,i=e.openSnackBar;return u.a.createElement(s.a,{initialValues:{amount:"",delegateProfile:"",delegatePledge:""},onSubmit:function(){var e=Object(o.a)(a.a.mark(function e(t,n){var u,s,l,f,p,d,b,h,g,m,v;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return u=n.resetForm,s=t.amount,l=t.delegateProfile,f=t.delegatePledge,p=r.find(function(e){return e.idPledge===f}),e.next=5,p.pledge.fetch();case 5:return d=e.sent,b=Object(A.l)(d.token),h=b.chainReadibleFn,g=[l.idProfile,f,h(s),c],console.log({values:t,args:g,pledge:d,delegatePledge:f}),m=C.apply(void 0,g),e.next=12,m.estimateGas();case 12:v=e.sent,m.send({gas:v+1e3}).then(function(){var e=Object(o.a)(a.a.mark(function e(t){var n,r,i,u;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log({res:t}),n=t.events.Transfer,!Array.isArray(n)){e.next=6;break}n.forEach(function(){var e=Object(o.a)(a.a.mark(function e(t){var n,r,o;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.returnValues,r=n.to,o=n.amount,e.next=3,d.transferTo(r,o,c);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),e.next=9;break;case 6:return r=n.returnValues,i=r.to,u=r.amount,e.next=9,d.transferTo(i,u,c);case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()).catch(function(e){i("error","An error has occured with the transaction"),console.log({e:e})}).finally(function(){i("success","project backed!"),u()});case 14:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}()},function(e){var a=e.values,o=(e.errors,e.touched,e.handleChange),c=e.handleBlur,i=e.handleSubmit,s=(e.setFieldValue,e.setStatus,e.status,function(e){return r.filter(function(t){return t.profile.id===e.id&&"0"!==t.pledgeData.amount&&0===t.pledgeData.pledgeState&&0===t.pledgeData.intendedProject})}),l=a.delegateProfile?s(a.delegateProfile):null;return u.a.createElement("form",{onSubmit:i,className:t.submissionRoot},n&&0===n.length&&u.a.createElement(v.a,{color:"error"},"Please create a Delegate profile before backing -",u.a.createElement(S,{href:"/#/create-delegate"}," Delegate creation page")),u.a.createElement(E.a,{className:t.textField,id:"delegateProfile",name:"delegateProfile",select:!0,label:"Select Delegate Profile",placeholder:"Select Delegate Profile",margin:"normal",variant:"outlined",onChange:o,onBlur:c,disabled:!n||0===n.length,value:a.delegateProfile||""},n&&n.map(function(e,t){var n=s(e),r=n.length,a=n.reduce(function(e,t){return e+Number(t.pledgeData.amount)},0),o=r?n[0].pledgeData.token:"",c=o?Object(A.l)(o).humanReadibleFn:D.b;return u.a.createElement(F.a,{style:{display:"flex",alignItems:"center"},key:"profile-".concat(t),value:e},e.name," - ",r," Pledges - ",c(a.toString())," ",Object(A.m)(o))})),l&&u.a.createElement(E.a,{className:t.textField,id:"delegatePledge",name:"delegatePledge",select:!0,label:"Select Pledge for Funding",placeholder:"Select Pledge for Funding",margin:"normal",variant:"outlined",onChange:o,onBlur:c,value:a.delegatePledge||""},l.map(function(e){return u.a.createElement(F.a,{style:{display:"flex",alignItems:"center"},key:e.idPledge,value:e.idPledge},"Pledge no: ".concat(e.idPledge," - Amount: ").concat(Object(A.l)(e.pledgeData.token).humanReadibleFn(e.pledgeData.amount)," ").concat(Object(A.m)(e.pledgeData.token)))})),a.delegatePledge&&u.a.createElement(E.a,{autoFocus:!0,margin:"normal",id:"amount",name:"amount",label:"Amount to transfer",placeholder:"Amount to transfer",variant:"outlined",autoComplete:"off",fullWidth:!0,onChange:o,onBlur:c,value:a.amount||""}),a.amount&&u.a.createElement(_.a,{type:"submit",color:"primary",variant:"contained",style:{height:"50px",width:"100%"}},"Submit for Funding"))})};var N=Object(h.a)(function(e){return{root:Object(c.a)({display:"grid",gridTemplateColumns:"repeat(12, [col] 1fr)",gridTemplateRows:"repeat(5, [row] auto)",gridColumnGap:"1em",gridRowGap:"36px",fontFamily:e.typography.fontFamily},e.breakpoints.up("sm"),{margin:"1.75rem 4.5rem"}),title:{display:"grid",fontSize:"2.5rem",gridColumnStart:"1",gridColumnEnd:"13",gridRowStart:"1",gridRowEnd:"6",textAlign:"center"},submissionRoot:{gridColumnStart:"1",gridColumnEnd:"13"},textField:{width:"100%"}}})(function(e){var t=e.classes,n=e.match,r=(e.delegates,e.projectAddedEvents),a=(e.delegateAddedEvents,n.params.id),o=Object(g.b)(a,r),c=o.manifest,i=o.delegateProfiles,s=o.openSnackBar,l=Object(g.a)(i);return u.a.createElement("div",{className:t.root},u.a.createElement(M,{className:t.title,manifest:c}),u.a.createElement(T,{classes:t,profiles:i,delegatePledges:l,projectId:a,openSnackBar:s}))});t.default=Object(b.withDatabase)(Object(p.a)([],function(e){var t=e.database,n=e.match;return{profile:t.collections.get("profiles").query(d.Q.where("id_profile",n.params.id)).observe(),projectAddedEvents:t.collections.get("lp_events").query(d.Q.where("event","ProjectAdded")).observe(),delegateAddedEvents:t.collections.get("lp_events").query(d.Q.where("event","DelegateAdded")).observe()}})(N))}}]);
//# sourceMappingURL=15.d3204c99.chunk.js.map