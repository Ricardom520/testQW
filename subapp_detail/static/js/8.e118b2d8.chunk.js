(this.webpackJsonp_ReactMicroTs=this.webpackJsonp_ReactMicroTs||[]).push([[8],{617:function(n,t,e){var a=e(535),A=e(618);"string"===typeof(A=A.__esModule?A.default:A)&&(A=[[n.i,A,""]]);var i={insert:"head",singleton:!1};a(A,i);n.exports=A.locals||{}},618:function(n,t,e){"use strict";e.r(t);var a=e(536),A=e.n(a)()(!0);A.push([n.i,".backlog-tab-9a867 {\n  background-color: #fff;\n}\n.backlog-tab-9a867 .am-tabs-default-bar-top {\n  padding-left: 40px;\n}\n.backlog-tab-9a867 .am-tabs-default-bar-content {\n  width: 50%;\n}\n.backlog-tab-addicon-15667 {\n  position: absolute;\n  top: 10px;\n  right: 15px;\n  color: #108ee9;\n  z-index: 99;\n}\n.backlog-tab-backicon-7abc3 {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  color: #108ee9;\n  z-index: 99;\n}\n.backlog-tab-cont-f8f26 {\n  padding-top: 10px;\n}\n.backlog-tab-cont-detail-47973 {\n  padding: 20px;\n}\n.backlog-tab-cont-detail-47973 .timeLineTitle-2aebb {\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #FAFAFA;\n  padding-bottom: 5px;\n}\n.backlog-tab-cont-detail-47973 .timeLineTitle-2aebb img {\n  margin-right: 5px;\n}\n.backlog-tab-9a867 .dealtCardItem-32f43 {\n  display: flex;\n  margin-top: 10px;\n  padding: 10px;\n}\n.backlog-tab-9a867 .dealtCardItem-32f43 .am-list-item {\n  align-items: flex-start;\n  background-color: transparent;\n}\n.backlog-tab-9a867 .dealtCardItem-32f43 .am-list-item.am-list-item {\n  padding-left: 0;\n}\n.backlog-tab-9a867 .dealtCardItem-32f43 .am-list-item.am-list-item .am-list-thumb {\n  padding-right: 0;\n}\n.backlog-tab-9a867 .dealtCardItem-32f43 .am-list-item.am-list-item .am-list-thumb .am-checkbox-inner {\n  border-radius: 0;\n}\n.backlog-tab-9a867 .dealtCardItem-32f43 .am-list-item.am-list-item .am-list-thumb .am-checkbox-checked .am-checkbox-inner {\n  border: 1px solid #ccc;\n  background: none;\n}\n.backlog-tab-9a867 .dealtCardItem-32f43 .right-62040 {\n  width: 100%;\n  margin-left: 5px;\n}\n.backlog-tab-9a867 .dealtCardItem-32f43 .right-62040 p {\n  margin: 0;\n}\n.backlog-tab-9a867 .dealtCardItem-32f43 .right-62040 .line1-f847d {\n  color: #000;\n}\n.backlog-tab-9a867 .dealtCardItem-32f43 .right-62040 .line2-93c88 {\n  display: flex;\n  align-items: center;\n  margin: 3px 0;\n}\n.backlog-tab-9a867 .dealtCardItem-32f43 .right-62040 .line2-93c88 img {\n  margin-right: 5px;\n}\n.backlog-tab-9a867 .dealtCardItem-32f43 .right-62040 .line3-f425d {\n  display: flex;\n  justify-content: space-between;\n}\n","",{version:3,sources:["webpack://src/pages/Backlog/index.less"],names:[],mappings:"AAAA;EACE,sBAAA;AACF;AAFA;EAIM,kBAAA;AACN;AALA;EAOM,UAAA;AACN;AAEE;EACE,kBAAA;EACA,SAAA;EACA,WAAA;EACA,cAAA;EACA,WAAA;AAAJ;AAEE;EACE,kBAAA;EACA,SAAA;EACA,UAAA;EACA,cAAA;EACA,WAAA;AAAJ;AAEE;EACE,iBAAA;AAAJ;AACI;EACE,aAAA;AACN;AAFI;EAGI,aAAA;EACA,mBAAA;EACA,gCAAA;EACA,mBAAA;AAER;AARI;EAQM,iBAAA;AAGV;AArCA;EAwCI,aAAA;EACA,gBAAA;EACA,aAAA;AAAJ;AA1CA;EA6CQ,uBAAA;EACA,6BAAA;AAAR;AACQ;EACE,eAAA;AACV;AAFQ;EAGI,gBAAA;AAEZ;AALQ;EAKM,gBAAA;AAGd;AARQ;EASQ,sBAAA;EACA,gBAAA;AAEhB;AA3DA;EAiEM,WAAA;EACA,gBAAA;AAHN;AA/DA;EAoEQ,SAAA;AAFR;AAlEA;EAuEQ,WAAA;AAFR;AArEA;EA0EQ,aAAA;EACA,mBAAA;EACA,aAAA;AAFR;AA1EA;EA8EU,iBAAA;AADV;AA7EA;EAkFQ,aAAA;EACA,8BAAA;AAFR",sourcesContent:[".backlog-tab {\n  background-color: #fff;\n  :global {\n    .am-tabs-default-bar-top {\n      padding-left: 40px;\n    }\n    .am-tabs-default-bar-content {\n      width: 50%;\n    }\n  }\n  &-addicon {\n    position: absolute;\n    top: 10px;\n    right: 15px;\n    color: #108ee9;\n    z-index: 99;\n  }\n  &-backicon {\n    position: absolute;\n    top: 10px;\n    left: 10px;\n    color: #108ee9;\n    z-index: 99;\n  }\n  &-cont {\n    padding-top: 10px;\n    &-detail {\n      padding: 20px;\n      .timeLineTitle {\n        display: flex;\n        align-items: center;\n        border-bottom: 1px solid #FAFAFA;\n        padding-bottom: 5px;\n        img {\n          margin-right: 5px;\n        }\n      }\n    }\n  }\n  .dealtCardItem {\n    display: flex;\n    margin-top: 10px;\n    padding: 10px;\n    :global {\n      .am-list-item {\n        align-items: flex-start;\n        background-color: transparent;\n        &.am-list-item {\n          padding-left: 0;\n          .am-list-thumb {\n            padding-right: 0;\n            .am-checkbox-inner {\n              border-radius: 0;\n            }\n            .am-checkbox-checked {\n              .am-checkbox-inner {\n                border: 1px solid #ccc;\n                background: none;\n              }\n            }\n          }\n        }\n      }\n    }\n    .right {\n      width: 100%;\n      margin-left: 5px;\n      p {\n        margin: 0;\n      }\n      .line1 {\n        color: #000;\n      }\n      .line2 {\n        display: flex;\n        align-items: center;\n        margin: 3px 0;\n        img {\n          margin-right: 5px;\n        }\n      }\n      .line3 {\n        display: flex;\n        justify-content: space-between;\n      }\n    }\n  }\n}"],sourceRoot:""}]),A.locals={"backlog-tab":"backlog-tab-9a867","backlog-tab-addicon":"backlog-tab-addicon-15667","backlog-tab-backicon":"backlog-tab-backicon-7abc3","backlog-tab-cont":"backlog-tab-cont-f8f26","backlog-tab-cont-detail":"backlog-tab-cont-detail-47973",timeLineTitle:"timeLineTitle-2aebb",dealtCardItem:"dealtCardItem-32f43",right:"right-62040",line1:"line1-f847d",line2:"line2-93c88",line3:"line3-f425d"},t.default=A},620:function(n,t,e){"use strict";e.r(t);var a=e(51),A=e(10),i=e.n(A),c=e(14),l=e(537),o=e(0),s=e(107),b=e(617),d=e.n(b),r=e(576),m=e(540),g=e(545),p=e(571),u=e(67),x=e(108),f=e(547),k=e.n(f),E=s.b.CheckboxItem,j=[{title:"\u4eca\u65e5\u5f85\u529e",key:"today"},{title:"\u5168\u90e8\u5f85\u529e",key:"all"}],h=[{label:"\u5168\u90e8",value:-1},{label:"\u672a\u5b8c\u6210",value:0},{label:"\u5df2\u5b8c\u6210",value:1}];t.default=function(n){var t=n.history,e=Object(o.useState)(!1),A=Object(l.a)(e,2),b=A[0],f=A[1],C=Object(o.useState)(Object(x.g)(new Date)),O=Object(l.a)(C,2),v=O[0],I=O[1],B=Object(o.useState)(Object(x.e)(new Date)),y=Object(l.a)(B,2),F=y[0],w=y[1],N=Object(o.useState)(-1),S=Object(l.a)(N,2),Q=S[0],R=S[1],T=Object(o.useState)([]),_=Object(l.a)(T,2),L=_[0],M=_[1],D=Object(o.useCallback)(Object(c.a)(i.a.mark((function n(){var t,e,a;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(u.j)({userId:sessionStorage.getItem("userId"),completeStatus:Q,startTime:v?v/1e3:void 0,endTime:F?+(F/1e3).toFixed(0):void 0});case 2:200===(t=n.sent).code&&(a=null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.sort((function(n,t){return n.complete_status-t.complete_status})),M(a));case 4:case"end":return n.stop()}}),n)}))),[v,F,Q]);Object(o.useEffect)((function(){D()}),[D]);return Object(a.jsxs)("div",{className:d.a["backlog-tab"],children:[Object(a.jsxs)("div",{className:d.a["backlog-tab-backicon"],onClick:function(){return t.go(-1)},children:[" ",Object(a.jsx)(s.d,{type:"left"})," "]}),Object(a.jsx)(s.h,{tabs:j,initialPage:"today",onChange:function(n){"all"===n.key?(I(0),w(0)):(I(Object(x.g)(new Date)),w(Object(x.e)(new Date)))},children:Object(a.jsxs)("div",{className:d.a["backlog-tab-cont"],children:[Object(a.jsx)(m.a,{options:h,onChange:function(n){R(n)}}),Object(a.jsxs)("div",{className:d.a["backlog-tab-cont-detail"],children:[Object(a.jsxs)("div",{className:d.a.timeLineTitle,children:[Object(a.jsx)("img",{src:g.a,alt:"\u65e5\u671f"})," 2020/11/17 \xa0\xa0\u661f\u671f\u4e00"]}),L.map((function(n){return Object(a.jsxs)("div",{className:d.a.dealtCardItem,style:1===n.complete_status?{background:"#F5F5F5",padding:"10px"}:{},children:[Object(a.jsx)(E,{onChange:function(){return t=n,void Object(u.c)({id:t.id,completeStatus:t.complete_status?0:1}).then((function(n){200===n.code&&D()}));var t}}),Object(a.jsxs)("div",{className:d.a.right,children:[Object(a.jsx)("p",{className:d.a.line1,style:1===n.complete_status?{color:"#666"}:{},children:n.msg}),Object(a.jsxs)("p",{className:d.a.line2,children:[Object(a.jsx)("img",{src:p.a,alt:"time"})," ",k()(1e3*n.todo_time).format("HH:mm")||"--"]}),Object(a.jsxs)("div",{className:d.a.line3,children:[Object(a.jsx)("div",{children:"344"}),Object(a.jsx)("div",{children:Object(a.jsx)(s.i,{selected:!0,children:"\u804a\u4e00\u804a"})})]})]})]},n.id)}))]})]})}),Object(a.jsx)("div",{className:d.a["backlog-tab-addicon"],onClick:function(){return f(!0)},children:"+ \u6dfb\u52a0\u5f85\u529e"}),Object(a.jsx)(r.a,{visible:b,onCancel:function(){return f(!1)},onOk:function(){return D()}})]})}}}]);
//# sourceMappingURL=8.e118b2d8.chunk.js.map