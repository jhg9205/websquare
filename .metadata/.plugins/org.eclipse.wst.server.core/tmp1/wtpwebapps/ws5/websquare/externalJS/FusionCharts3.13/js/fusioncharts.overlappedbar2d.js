!function(e){"object"==typeof module&&"undefined"!=typeof module.exports?module.exports=e:e()}(function(){(window.webpackJsonpFusionCharts=window.webpackJsonpFusionCharts||[]).push([[11],{1111:function(e,t,n){"use strict";t.__esModule=!0,t.OverlapperBar2D=undefined;var o=i(n(1112)),r=i(n(972));function i(e){return e&&e.__esModule?e:{"default":e}}t.OverlapperBar2D=o["default"],t["default"]={name:"overlappedbar2d",type:"package",requiresFusionCharts:!0,extension:function(e){e.addDep(r["default"]),e.addDep(o["default"])}}},1112:function(e,t,n){"use strict";t.__esModule=!0;var o,r=n(1113),i=(o=r)&&o.__esModule?o:{"default":o};t["default"]=i["default"]},1113:function(e,t,n){"use strict";t.__esModule=!0;var o=l(n(458)),r=l(n(1114)),i=l(n(461)),a=l(n(1115));function l(e){return e&&e.__esModule?e:{"default":e}}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):function(e,t){for(var n=Object.getOwnPropertyNames(t),o=0;o<n.length;o++){var r=n[o],i=Object.getOwnPropertyDescriptor(t,r);i&&i.configurable&&e[r]===undefined&&Object.defineProperty(e,r,i)}}(e,t))}var u=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this));return n.isBar=!0,n.registerFactory("dataset",i["default"],["vCanvas"]),n}return s(t,e),t.prototype.__setDefaultConfig=function(){e.prototype.__setDefaultConfig.call(this);var t=this.config;t.friendlyName="Multi-series Bar Chart",t.hasLegend=!0,t.defaultDatasetType="bar2d"},t.prototype.getName=function(){return"OverlappedBar2D"},t.getName=function(){return"OverlappedBar2D"},t.prototype.getDSdef=function(){return r["default"]},t.prototype.getDSGroupdef=function(){return a["default"]},t}(o["default"]);t["default"]=u},1114:function(e,t,n){"use strict";t.__esModule=!0;var o,r=n(125),i=n(467),a=(o=i)&&o.__esModule?o:{"default":o};function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):function(e,t){for(var n=Object.getOwnPropertyNames(t),o=0;o<n.length;o++){var r=n[o],i=Object.getOwnPropertyDescriptor(t,r);i&&i.configurable&&e[r]===undefined&&Object.defineProperty(e,r,i)}}(e,t))}var s=r.preDefStr.visibleStr,u=r.preDefStr.hiddenStr,f=r.preDefStr.POSITION_MIDDLE,c=r.preDefStr.POSITION_START,d=r.preDefStr.POSITION_END,p=Math.max;function h(e,t){var n,o=void 0,r=e.x,i=void 0,a=e.width,l=void 0;for(o=0,n=t.length;o<n;o++)if(l=t[o].width,i=t[o].x,t[o].labelShown&&r+a>=i&&i+l>=r)return!0;return!1}var b=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this));return n._labeldimensionMap={},n}return l(t,e),t.prototype.drawLabel=function(){var e,t,n,o,i,a,l,b,g,y,v,w,m,O,_,S,D,x,M,P,C,j,k,N,T,E,I,B,F=this.getFromEnv("chart"),L=F.config,A=this.config.JSONData,R=this.getFromEnv("animationManager"),J=F.getChildren("canvas")[0].config,V=F.config.dataLabelStyle,G=A.data,q=F.config.categories,z=F.config.is3D,H=F.config.isstacked,K=q&&q.length,W=G&&G.length,Q=this.getData(),U=F.getFromEnv("smartLabel"),X=J.yDepth,Y=J.xDepth,Z=F.getFromEnv("number-formatter"),$="",ee=L.placevaluesinside,te=L.canvasWidth,ne=L.canvasLeft,oe=L.valuepadding+2,re=this.getContainer("labelGroup"),ie=this.getSkippingInfo&&this.getSkippingInfo(),ae=ie&&ie.skippingApplied,le=ie&&ie.labelDraw||[],se=le.length,ue=this.getJSONIndex(),fe=this.getState("visible"),ce=function(){this.hide()},de=function(){this.show()};for(fe&&re.show(),U.setStyle(V),e=ae?se:K<W?K:W,i=0;i<e;i++)S=(P=(t=Q[o=ae?le[i]:i])&&t.config)&&P.setValue,void 0!==t&&void 0!==S&&null!==S&&!0!==P.labelSkip?(l=t.graphics)&&(a=G[o],m=t._yPos,O=t._xPos,S=Z.getCleanValue(a.value),w=(0,r.pluckNumber)(S)<0,b=t._height,_=t._width,D=H?f:w?ee?c:d:ee?d:c,$=P.displayValue,T=l.label,P.showValue&&(void 0!==(B=$)&&null!==B)&&$!==r.BLANKSTRING&&null!==S?(n={text:$,fill:V.color,"text-bound":[V.backgroundColor,V.borderColor,V.borderThickness,V.borderPadding,V.borderRadius,V.borderDash],"line-height":V.lineHeight,visibility:this.getState("visible")?s:u},x=(E=U.getOriSize($)).width,x+=oe,M=oe,g=m+.5*b,y=O+(w?0:_),v=w?O-ne:ne+te-(O+_),ee?_>=x?(y+=w?M:-M,z&&(g+=X,y-=Y)):x<v?(y+=w?-M:M,D=w?d:c,z&&w&&(y-=Y)):w?(y=O+_+p(x-O-_+ne,0)-M,D=d):(y=O-p(x-(ne+te-O),0)+M,D=c):v>=x?(y+=w?-M:M,z&&w&&(y-=Y,g+=Y)):y+=w?M+x:-(M+x),(y>ne+te||y<ne)&&(y=ne+4,D=c),n["text-anchor"]=D,n.x=y,n.y=g,n["text-bound"]=[V.backgroundColor,V.borderColor,V.borderThickness,V.borderPadding,V.borderRadius,V.borderDash],n.opacity=fe?1:0,j=F.getDatasets().map(function(e){return e.getJSONIndex()<ue&&e._labeldimensionMap[i]}).filter(Boolean),N=h(k={x:y,y:g,width:E.width,height:E.height},j),this._labeldimensionMap[i]=k,N?l.label&&(l.label=R.setAnimation({el:l.label,component:this}),this._labeldimensionMap[i].labelShown=!1):(C=R.setAnimation({el:T||"text",container:re,component:this,attr:n,callback:fe?de:ce,label:"plotLabel"}),T||(l.label=C)),this._labeldimensionMap[i].labelShown=!(!fe||N)):l.label&&(l.label=R.setAnimation({el:l.label,component:this}),this._labeldimensionMap[i].labelShown=!1)):((I=t&&t.graphics)&&I.label&&I.label.hide(),P&&delete P.labelSkip)},t}(a["default"]);t["default"]=b}}])});
//# sourceMappingURL=http://localhost:3052/3.13.4/map/licensed/fusioncharts.overlappedbar2d.js.map