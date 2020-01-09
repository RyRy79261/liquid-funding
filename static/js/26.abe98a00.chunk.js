(this.webpackJsonp=this.webpackJsonp||[]).push([[26],{1517:function(e,n,t){"use strict";function r(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=arguments.length>1?arguments[1]:void 0,t=e?new Date(1e3*e):new Date,r=new Date,a=r-t;if(isNaN(a))return NaN;switch(n){case"years":return r.getFullYear()-t.getFullYear();case"months":return 12*r.getFullYear()+r.getMonth()-(12*t.getFullYear()+t.getMonth());case"weeks":return Math.floor(a/6048e5);case"days":return Math.floor(a/864e5);case"hours":return Math.floor(a/36e5);case"minutes":return Math.floor(a/6e4);case"seconds":return Math.floor(a/1e3);default:return}}function a(e){var n=new Date;return n.setDate(n.getDate()-e),"".concat(n.getMonth()+1,"/").concat(n.getDate(),"/").concat(n.getFullYear())}function o(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=new Date(1e3*e);return n?"".concat(t.getDate()," ").concat(t.toLocaleString("default",{month:"short"})," ").concat(t.getFullYear()):"".concat(t.getMonth()+1,"/").concat(t.getDate(),"/").concat(t.getFullYear())}t.d(n,"c",function(){return r}),t.d(n,"a",function(){return a}),t.d(n,"b",function(){return o})},1609:function(e,n,t){"use strict";t.d(n,"b",function(){return a}),t.d(n,"a",function(){return o}),t.d(n,"e",function(){return l}),t.d(n,"d",function(){return d}),t.d(n,"f",function(){return s}),t.d(n,"c",function(){return m});t(1996),t(1766);var r=web3.utils,a=function(e){return"#status-".concat(e.replace(/\s/g,"").replace(/\W/g,"").toLowerCase())},o=function(e){return r.toHex(e)},c=function(e){return e.path.split("/").slice(-1)[0]},i=function(e){return"manifest.json"===c(e).toLowerCase()},l=function(e){return e?JSON.parse(e.find(i).content):null};var u=function(e){return!!e.find(i)},d=function(e){return!(!e||!u(e))&&(!!l(e).media.type.toLowerCase().includes("video")||void 0)};function s(e){return null!==e.match(/\.(jpeg|jpg|gif|png)$/)?"image":"video"}var m=function(e){if(!e||!u(e))return null;var n=l(e).media;if(n.type.includes("video")||n.type.includes("image")){if(n.url)return n.url;if(n.file&&"/root/"!==n.file)return function(e){var n=new Blob([e]);return URL.createObjectURL(n)}(e.find(function(e){return c(e)===n.file.split("/").slice(-1)[0]}).content)}}},1630:function(e,n,t){"use strict";t.d(n,"a",function(){return g}),t.d(n,"b",function(){return p}),t.d(n,"c",function(){return b});var r=t(1631),a=t(433);function o(){var e=Object(r.a)(["\n",'\n\nquery Projects($type: String! = "PROJECT", $limit: Int, $offset: Int, $orderDirection: String){\n  profiles(where: {type: $type, projectInfo_not: null}, first: $limit, skip: $offset, orderBy: profileId, orderDirection: $orderDirection) {\n    id\n    addr\n    canceled\n    commitTime\n    type\n    url\n    profileId\n    creationTime\n    projectInfo {\n      id\n      title\n      subtitle\n      creator\n      goalToken\n      goal\n    }\n    pledgesInfos{\n     ...PledgesInfoFields\n    }\n  }\n}\n']);return o=function(){return e},e}function c(){var e=Object(r.a)(["\n","\n","\n\nquery Profile($id: ID!) {\n  profile(id: $id) {\n    id\n    addr\n    commitTime\n    url\n    profileId\n    type\n    name\n    creationTime\n    pledgesInfos {\n      ...PledgesInfoFields\n    }\n    pledges(where: {amount_gt: 0}) {\n      ...PledgeFields\n    }\n    projectInfo {\n      id\n      title\n      subtitle\n      creator\n      repo\n      avatar\n      goal\n      goalToken\n      description\n      chatRoom\n      file\n      type\n      isPlaying\n    }\n  }\n}\n"]);return c=function(){return e},e}function i(){var e=Object(r.a)(["\n","\n\nquery Profile($id: ID!) {\n  profile(id: $id) {\n    id\n    addr\n    commitTime\n    url\n    profileId\n    type\n    name\n    creationTime\n    pledgesInfos {\n      ...PledgesInfoFields\n    }\n    projectInfo {\n      id\n      title\n      subtitle\n      creator\n      repo\n      avatar\n      goal\n      goalToken\n      description\n      chatRoom\n      file\n      type\n      isPlaying\n    }\n  }\n}\n"]);return i=function(){return e},e}function l(){var e=Object(r.a)(["\nfragment PledgeFields on Pledge {\n      id,\n      amount,\n      token,\n      commitTime,\n      pledgeState,\n      intendedProject,\n      nDelegates,\n      creationTime\n}\n"]);return l=function(){return e},e}function u(){var e=Object(r.a)(["\n","\nfragment PledgesInfoFields on PledgesInfo {\n  id\n  ...PledgeLifetimeReceived\n  token\n}\n"]);return u=function(){return e},e}function d(){var e=Object(r.a)(["\nfragment PledgeLifetimeReceived on PledgesInfo {\n  lifetimeReceived\n}\n"]);return d=function(){return e},e}var s=Object(a.b)(d()),m=Object(a.b)(u(),s),f=Object(a.b)(l()),g=Object(a.b)(i(),m),p=Object(a.b)(c(),m,f),b=Object(a.b)(o(),m)},1803:function(e,n,t){"use strict";var r=t(24),a=t(0),o=t.n(a),c=t(37),i=t.n(c),l=t(672),u=t(1926),d=t(1767),s=t.n(d),m=t(1874),f=Object(l.a)(function(e){return{check:{color:e.palette.primary[500]},formButton:{gridColumnStart:"1",gridColumnEnd:"13",minHeight:"50px",marginTop:"1.5rem",borderRadius:"8px",backgroundColor:e.palette.primary[500],color:"white","&:hover":{backgroundColor:e.palette.primary.hov}},disabledButton:{backgroundColor:"none"},buttonContent:Object(r.a)({display:"flex",justifyContent:"space-evenly",alignItems:"center",width:"100%",fontSize:"14px"},e.breakpoints.up("md"),{fontSize:"14px"}),progress:{color:e.palette.primary[500],animationDuration:"350ms"}}});n.a=function(e){var n=e.className,t=e.disabled,r=e.buttonText,c=e.confirmed,l=e.loading,d=e.onClick,g=f(),p=g.check,b=g.formButton,h=g.disabledButton,v=g.buttonContent,j=g.progress;return o.a.createElement(a.Fragment,null,o.a.createElement(u.a,{className:i()(b,n),disabled:t,type:"submit",variant:"contained",classes:{disabled:h},onClick:d},o.a.createElement("div",{className:v},c&&o.a.createElement(s.a,{className:p}),l&&o.a.createElement(m.a,{className:j,size:24,disableShrink:!0}),r||"")))}},3658:function(e,n,t){"use strict";t.r(n);var r=t(3),a=t.n(r),o=t(4),c=t(92),i=t(38),l=t(0),u=t.n(l),d=t(37),s=t.n(d),m=t(179),f=t(2188),g=t(690),p=t(1394),b=t(1609),h=t(1630),v=t(68),j=t(213),k=t(1517),C=t(338),O=t(427),w=t(1803),y=t(83),S=t.n(y),E=t(192),I=t.n(E),F=t(422),P=S.a.methods.mWithdraw,N=I.a.methods.multiConfirm,T="Paying",D="Paid",x={0:"Pledged",1:T,2:D},B=Object(g.a)(function(){return{main:{display:"grid",gridTemplateColumns:"repeat(48, [col] 1fr)",gridTemplateRows:"4rem"},tableHeader:{color:"rgba(147, 155, 161, 0.8)",fontSize:"0.9rem"},headerStatus:{gridColumn:"6 / 12"},rowStatus:{gridColumn:"6 / 12"},headerAmount:{gridColumn:"12 / 18"},rowAmount:{gridColumn:"12 / 18"},headerId:{gridColumn:"18 / 24"},rowId:{gridColumn:"18 / 24"},headerFunded:{gridColumn:"24 / 30"},rowFunded:{gridColumn:"24 / 30"},headerSelect:{gridColumn:"31 / 34"},select:{gridColumn:"34 / 36"},checkBox:{paddingTop:0,alignItems:"normal","&:hover":{backgroundColor:"transparent"},"& svg":{background:"radial-gradient(#EEF2F5, transparent)"}},checked:{"&&:hover":{backgroundColor:"transparent"}},formButton:{gridColumnStart:"24",gridColumnEnd:"36"},disabledButton:{backgroundColor:"none"}}});function $(e){var n=e.allSelected,t=e.selectAll,r=B(),a=r.tableHeader;return u.a.createElement(l.Fragment,null,u.a.createElement(m.a,{className:s()(a,r.headerStatus)},"Status"),u.a.createElement(m.a,{className:s()(a,r.headerAmount)},"Amount"),u.a.createElement(m.a,{className:s()(a,r.headerId)},"Pledge ID"),u.a.createElement(m.a,{className:s()(a,r.headerFunded)},"Funded on"),u.a.createElement(m.a,{className:s()(a,r.headerSelect)},"Select all"),u.a.createElement(f.a,{classes:{root:s()(r.select,r.checkBox),checked:r.checked},checked:n,onChange:t,color:"primary",disableRipple:!0}))}function R(e){var n=e.pledge,t=e.amtFormatter,r=e.tokenLabel,a=e.selectedPledges,o=e.setSelected,c=B(),d=n.id,g=n.amount,p=n.creationTime,b=n.pledgeState,h=!!a&&a.includes(d);return u.a.createElement(l.Fragment,null,u.a.createElement(m.a,{className:c.rowStatus},x[b]),u.a.createElement(m.a,{className:c.rowAmount},t(g)," ",r),u.a.createElement(m.a,{className:c.rowId},Object(j.a)(d)),u.a.createElement(m.a,{className:c.rowFunded},Object(k.b)(p,!0)),u.a.createElement(f.a,{disabled:x[b]===D,classes:{root:s()(c.select,c.checkBox),checked:c.checked},color:"primary",disableRipple:!0,checked:h,onChange:function(){if(h)return o(a.filter(function(e){return e!==d}));o([].concat(Object(i.a)(a),[d]))}}))}n.default=function(e){var n=e.match,t=B(),r=Object(l.useState)([]),i=Object(c.a)(r,2),d=i[0],s=i[1],m=Object(l.useState)(!1),f=Object(c.a)(m,2),g=f[0],j=f[1],k=Object(l.useState)(!1),y=Object(c.a)(k,2),S=y[0],E=y[1],I=Object(l.useContext)(F.a),L=I.openSnackBar,M=I.currencies,A=n.params.id,Y=Object(p.a)(h.b,{variables:{id:Object(b.a)(A)}}),H=Y.loading,q=Y.error,z=Y.data,J=Y.startPolling,U=Y.stopPolling;if(Object(l.useEffect)(function(){U()},[z]),H)return u.a.createElement(O.a,null);if(q)return u.a.createElement("div",null,"Error! ".concat(q.message));var W=z.profile,_=W.pledges,X=W.projectInfo.goalToken,G=Object(v.i)(X,M),K=Object(v.m)(X,M),Q=_.filter(function(e){var n=e.pledgeState;return x[n]!==D}),V=d.length===Q.length;return u.a.createElement("div",{className:t.main},u.a.createElement($,{allSelected:V,selectAll:function(){if(V)return s([]);s(Q.map(function(e){return e.id}))}}),_.map(function(e){return u.a.createElement(R,{key:e.id,pledge:e,amtFormatter:G,tokenLabel:K,selectedPledges:d,setSelected:s})}),u.a.createElement(w.a,{className:t.formButton,onClick:function(){var e=d.map(function(e){return{id:e,amount:_.find(function(n){return n.id===e}).amount}}),n=d[0].pledgeState;(x[n]===T?N:P)(Object(C.a)(e)).send().on("transactionHash",function(e){L("success","Submitted withdraw request to chain. TX Hash: ".concat(e)),j(!0)}).then(function(){var e=Object(o.a)(a.a.mark(function e(n){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log({res:n}),J(1e3),L("success","Funding Confirmed"),j(!1),E(!0),s([]);case 6:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}()).catch(function(e){L("error","An error has occured"),j(!1),console.log({e:e})})},buttonText:"Submit for withdrawal",confirmed:S,loading:g,disabled:g||S}))}}}]);
//# sourceMappingURL=26.abe98a00.chunk.js.map