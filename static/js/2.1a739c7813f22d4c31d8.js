webpackJsonp([2],{178:function(t,e,n){n(759);var o=n(24)(n(705),n(773),null,null);t.exports=o.exports},196:function(t,e){var n=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},202:function(t,e,n){t.exports={default:n(204),__esModule:!0}},204:function(t,e,n){var o=n(196),r=o.JSON||(o.JSON={stringify:JSON.stringify});t.exports=function(t){return r.stringify.apply(r,arguments)}},211:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},212:function(t,e,n){var o=n(256)("wks"),r=n(247),s=n(211).Symbol,a="function"==typeof s;(t.exports=function(t){return o[t]||(o[t]=a&&s[t]||(a?s:r)("Symbol."+t))}).store=o},216:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},217:function(t,e,n){var o=n(222),r=n(244);t.exports=n(219)?function(t,e,n){return o.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},219:function(t,e,n){t.exports=!n(235)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},222:function(t,e,n){var o=n(227),r=n(290),s=n(272),a=Object.defineProperty;e.f=n(219)?Object.defineProperty:function(t,e,n){if(o(t),e=s(e,!0),o(n),r)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},223:function(t,e,n){var o=n(291),r=n(242);t.exports=function(t){return o(r(t))}},227:function(t,e,n){var o=n(228);t.exports=function(t){if(!o(t))throw TypeError(t+" is not an object!");return t}},228:function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},229:function(t,e){t.exports={}},235:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},242:function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},243:function(t,e){t.exports=!0},244:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},245:function(t,e,n){var o=n(256)("keys"),r=n(247);t.exports=function(t){return o[t]||(o[t]=r(t))}},246:function(t,e){var n=Math.ceil,o=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?o:n)(t)}},247:function(t,e){var n=0,o=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+o).toString(36))}},253:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},254:function(t,e,n){var o=n(294),r=n(253);t.exports=Object.keys||function(t){return o(t,r)}},255:function(t,e,n){var o=n(222).f,r=n(216),s=n(212)("toStringTag");t.exports=function(t,e,n){t&&!r(t=n?t:t.prototype,s)&&o(t,s,{configurable:!0,value:e})}},256:function(t,e,n){var o=n(196),r=n(211),s=r["__core-js_shared__"]||(r["__core-js_shared__"]={});(t.exports=function(t,e){return s[t]||(s[t]=void 0!==e?e:{})})("versions",[]).push({version:o.version,mode:n(243)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},267:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},268:function(t,e,n){var o=n(228),r=n(211).document,s=o(r)&&o(r.createElement);t.exports=function(t){return s?r.createElement(t):{}}},269:function(t,e,n){var o=n(211),r=n(196),s=n(327),a=n(217),i=n(216),c=function(t,e,n){var l,u,p,f=t&c.F,y=t&c.G,g=t&c.S,m=t&c.P,d=t&c.B,v=t&c.W,h=y?r:r[e]||(r[e]={}),_=h.prototype,b=y?o:g?o[e]:(o[e]||{}).prototype;y&&(n=e);for(l in n)(u=!f&&b&&void 0!==b[l])&&i(h,l)||(p=u?b[l]:n[l],h[l]=y&&"function"!=typeof b[l]?n[l]:d&&u?s(p,o):v&&b[l]==p?function(t){var e=function(e,n,o){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,o)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(p):m&&"function"==typeof p?s(Function.call,p):p,m&&((h.virtual||(h.virtual={}))[l]=p,t&c.R&&_&&!_[l]&&a(_,l,p)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},270:function(t,e,n){"use strict";var o=n(243),r=n(269),s=n(295),a=n(217),i=n(229),c=n(329),l=n(255),u=n(332),p=n(212)("iterator"),f=!([].keys&&"next"in[].keys()),y=function(){return this};t.exports=function(t,e,n,g,m,d,v){c(n,e,g);var h,_,b,x=function(t){if(!f&&t in j)return j[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},w=e+" Iterator",T="values"==m,S=!1,j=t.prototype,O=j[p]||j["@@iterator"]||m&&j[m],k=O||x(m),P=m?T?x("entries"):k:void 0,C="Array"==e?j.entries||O:O;if(C&&(b=u(C.call(new t)))!==Object.prototype&&b.next&&(l(b,w,!0),o||"function"==typeof b[p]||a(b,p,y)),T&&O&&"values"!==O.name&&(S=!0,k=function(){return O.call(this)}),o&&!v||!f&&!S&&j[p]||a(j,p,k),i[e]=k,i[w]=y,m)if(h={values:T?k:x("values"),keys:d?k:x("keys"),entries:P},v)for(_ in h)_ in j||s(j,_,h[_]);else r(r.P+r.F*(f||S),e,h);return h}},271:function(t,e){e.f={}.propertyIsEnumerable},272:function(t,e,n){var o=n(228);t.exports=function(t,e){if(!o(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!o(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},290:function(t,e,n){t.exports=!n(219)&&!n(235)(function(){return 7!=Object.defineProperty(n(268)("div"),"a",{get:function(){return 7}}).a})},291:function(t,e,n){var o=n(267);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==o(t)?t.split(""):Object(t)}},292:function(t,e,n){var o=n(227),r=n(331),s=n(253),a=n(245)("IE_PROTO"),i=function(){},c=function(){var t,e=n(268)("iframe"),o=s.length;for(e.style.display="none",n(328).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;o--;)delete c.prototype[s[o]];return c()};t.exports=Object.create||function(t,e){var n;return null!==t?(i.prototype=o(t),n=new i,i.prototype=null,n[a]=t):n=c(),void 0===e?n:r(n,e)}},293:function(t,e){e.f=Object.getOwnPropertySymbols},294:function(t,e,n){var o=n(216),r=n(223),s=n(326)(!1),a=n(245)("IE_PROTO");t.exports=function(t,e){var n,i=r(t),c=0,l=[];for(n in i)n!=a&&o(i,n)&&l.push(n);for(;e.length>c;)o(i,n=e[c++])&&(~s(l,n)||l.push(n));return l}},295:function(t,e,n){t.exports=n(217)},296:function(t,e,n){var o=n(242);t.exports=function(t){return Object(o(t))}},297:function(t,e,n){"use strict";var o=n(333)(!0);n(270)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=o(e,n),this._i+=t.length,{value:t,done:!1})})},298:function(t,e,n){n(338);for(var o=n(211),r=n(217),s=n(229),a=n(212)("toStringTag"),i="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),c=0;c<i.length;c++){var l=i[c],u=o[l],p=u&&u.prototype;p&&!p[a]&&r(p,a,l),s[l]=s.Array}},324:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},325:function(t,e){t.exports=function(){}},326:function(t,e,n){var o=n(223),r=n(335),s=n(334);t.exports=function(t){return function(e,n,a){var i,c=o(e),l=r(c.length),u=s(a,l);if(t&&n!=n){for(;l>u;)if((i=c[u++])!=i)return!0}else for(;l>u;u++)if((t||u in c)&&c[u]===n)return t||u||0;return!t&&-1}}},327:function(t,e,n){var o=n(324);t.exports=function(t,e,n){if(o(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,o){return t.call(e,n,o)};case 3:return function(n,o,r){return t.call(e,n,o,r)}}return function(){return t.apply(e,arguments)}}},328:function(t,e,n){var o=n(211).document;t.exports=o&&o.documentElement},329:function(t,e,n){"use strict";var o=n(292),r=n(244),s=n(255),a={};n(217)(a,n(212)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=o(a,{next:r(1,n)}),s(t,e+" Iterator")}},330:function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},331:function(t,e,n){var o=n(222),r=n(227),s=n(254);t.exports=n(219)?Object.defineProperties:function(t,e){r(t);for(var n,a=s(e),i=a.length,c=0;i>c;)o.f(t,n=a[c++],e[n]);return t}},332:function(t,e,n){var o=n(216),r=n(296),s=n(245)("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=r(t),o(t,s)?t[s]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},333:function(t,e,n){var o=n(246),r=n(242);t.exports=function(t){return function(e,n){var s,a,i=String(r(e)),c=o(n),l=i.length;return c<0||c>=l?t?"":void 0:(s=i.charCodeAt(c),s<55296||s>56319||c+1===l||(a=i.charCodeAt(c+1))<56320||a>57343?t?i.charAt(c):s:t?i.slice(c,c+2):a-56320+(s-55296<<10)+65536)}}},334:function(t,e,n){var o=n(246),r=Math.max,s=Math.min;t.exports=function(t,e){return t=o(t),t<0?r(t+e,0):s(t,e)}},335:function(t,e,n){var o=n(246),r=Math.min;t.exports=function(t){return t>0?r(o(t),9007199254740991):0}},336:function(t,e,n){var o=n(211),r=n(196),s=n(243),a=n(337),i=n(222).f;t.exports=function(t){var e=r.Symbol||(r.Symbol=s?{}:o.Symbol||{});"_"==t.charAt(0)||t in e||i(e,t,{value:a.f(t)})}},337:function(t,e,n){e.f=n(212)},338:function(t,e,n){"use strict";var o=n(325),r=n(330),s=n(229),a=n(223);t.exports=n(270)(Array,"Array",function(t,e){this._t=a(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,r(1)):"keys"==e?r(0,n):"values"==e?r(0,t[n]):r(0,[n,t[n]])},"values"),s.Arguments=s.Array,o("keys"),o("values"),o("entries")},417:function(t,e,n){var o=n(294),r=n(253).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return o(t,r)}},705:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){var o=n(725),r=n.n(o),s=n(202),a=n.n(s);!function(){var t=document.createElement("script");t.src="https://hm.baidu.com/hm.js?5f228c169bee6b288c0b4652cccda107";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}(),e.default={name:"Nlp",data:function(){return{fileList:[],pca_data:"",TSNE_data:"",cluster_data:"",download_file:"",username:"",Tnum:"",database:"数据库",databaseList:[],value:[],options:[],value1:[],mic_result:""}},mounted:function(){var e=this;t.ajax({type:"get",url:"/css/getOptions",data:{},contentType:"application/json; charset=UTF-8",dataType:"json",async:!1,success:function(t){console.log(t),e.options=t},error:function(t){alert("数据库出现了错误！")}})},methods:{compute:function(){console.log(this.value),console.log(this.value1);var e=this.value,n=this.value1,o=this;if(e!=[])if(n==[])alert("请先选择后计算");else if(e[0]==n[0]&&e[1]==n[1]){var r=[e,n];t.ajax({type:"post",url:"/css/get_mic_data",data:a()(r),contentType:"application/json; charset=UTF-8",dataType:"json",async:!1,success:function(t){console.log(t),o.mic_result=t}})}else alert("请选择同一数据库同一集合下的不同字段");else alert("请先选择后计算")},getUser:function(){console.log("hhhh");var t={};if(t.user=sessionStorage.getItem("user"),null!=t.user)return this.username=sessionStorage.getItem("user"),"http://10.72.100.5:8020/upload/"+t.user;alert("请先进入登陆/注册页面"),this.$router.push({path:"/login"})},changeDatabase:function(t){"object"!=(void 0===t?"undefined":r()(t))&&(this.company=t.split("-")[0],localStorage.setItem("workAccountId",t.split("-")[1]))},handleRemove:function(e,n){t.ajax({type:"POST",url:"/css/removeFile/"+sessionStorage.getItem("user"),data:a()(e),contentType:"application/json; charset=UTF-8",dataType:"json",async:!1,success:function(t){console.log(t),"no such file"==t.status&&that.$message({message:"文件不存在",type:"warning"})},error:function(t){alert("文件删除出现错误")}})},showuser:function(){var t=sessionStorage.getItem("user");null!=t&&console.log(t)},handlePreview:function(t){console.log(t)},handleExceed:function(t,e){this.$message.warning("当前限制选择 3 个文件，本次选择了 "+t.length+" 个文件，共选择了 "+(t.length+e.length)+" 个文件")},beforeRemove:function(t,e){return this.$confirm("确定移除 "+t.name+"？")},PrincipalComponentsAnalysis:function(){var e={};e.pca=this.pca_data;var n=this;t.ajax({type:"POST",url:"/css/pca/"+sessionStorage.getItem("user"),data:a()(e),contentType:"application/json; charset=UTF-8",dataType:"json",async:!1,success:function(t){console.log(t),"nofile"==t.route?n.$message({message:"需要先上传数据文件",type:"warning"}):(n.download_file=t.route,console.log(n.download_file),n.$message({message:"PCA降维完成，可以下载降维后的文件",type:"success"}))},error:function(t){alert("PCA降维出现错误")}})},TSNE:function(){var e={};e.TSNE=this.TSNE_data;var n=this;t.ajax({type:"POST",url:"/css/TSNE/"+sessionStorage.getItem("user"),data:a()(e),contentType:"application/json; charset=UTF-8",dataType:"json",async:!1,success:function(t){console.log(t),"nofile"==t.route?n.$message({message:"需要先上传数据文件",type:"warning"}):(n.download_file=t.route,n.$message({message:"t-SNE降维完成，可以下载降维后的文件",type:"success"}))},error:function(t){alert("t-SNE降维出现错误")}})},kmeans:function(){var e={};e.kmeans=this.cluster_data;var n=this;t.ajax({type:"POST",url:"/css/kmeans/"+sessionStorage.getItem("user"),data:a()(e),contentType:"application/json; charset=UTF-8",dataType:"json",async:!1,success:function(t){console.log(t),"nofile"==t.route?n.$message({message:"需要先上传数据文件",type:"warning"}):(n.download_file=t.route,n.$message({message:"k-means聚类完成，可以下载聚类后的文件",type:"success"}))},error:function(t){alert("k-means聚类出现错误")}})},Ttest:function(){var e={};e.Tnum=this.Tnum;var n=this;t.ajax({type:"POST",url:"/css/Ttest/"+sessionStorage.getItem("user"),data:a()(e),contentType:"application/json; charset=UTF-8",dataType:"json",async:!1,success:function(t){console.log(t),"nofile"==t.route?n.$message({message:"需要先上传数据文件",type:"warning"}):(n.download_file=t.route,n.$message({message:"单样本T检验完成，可以下载检验后的文件",type:"success"}))},error:function(t){alert("单样本T检验出现错误")}})},dtw:function(){var e=this;t.ajax({type:"POST",url:"/css/dtw/"+sessionStorage.getItem("user"),data:{},contentType:"application/json; charset=UTF-8",dataType:"json",async:!1,success:function(t){console.log(t),"nofile"==t.route?e.$message({message:"需要先上传数据文件",type:"warning"}):"需要上传两个文件以进行时序列dtw分析"==t.route?e.$message({message:"需要上传两个文件以进行时序列dtw分析",type:"warning"}):(e.download_file=t.route,e.$message({message:"时序DTW分析完成，可以下载分析后的文件",type:"success"}))},error:function(t){alert("时序DTW分析出现错误")}})},nb:function(){var e=this;t.ajax({type:"POST",url:"/css/nb/"+sessionStorage.getItem("user"),data:{},contentType:"application/json; charset=UTF-8",dataType:"json",async:!1,success:function(t){console.log(t),"nofile"==t.route?e.$message({message:"需要先上传训练集和测试集文件",type:"warning"}):"需要上传训练集和测试集以进行模型训练与测试"==t.route?e.$message({message:"需要上传训练集和测试集以进行模型训练与测试",type:"warning"}):(e.download_file=t.route,e.$message({message:"朴素贝叶斯模型训练与测试完成，可以下载测试集结果文件",type:"success"}))},error:function(t){alert("朴素贝叶斯模型训练与测试出现错误")}})},wordCloud:function(){var e=this;t.ajax({type:"POST",url:"/css/wordCloud/"+sessionStorage.getItem("user"),data:{},contentType:"application/json; charset=UTF-8",dataType:"json",async:!1,success:function(t){console.log(t.route),"nofile"==t.route?e.$message({message:"需要先上传txt文件",type:"warning"}):(e.download_file=t.route,e.$message({message:"文本词云生成已完成，可以下载词云图片",type:"success"}))},error:function(t){alert("文本词云生成出现错误")}})},pdf2word:function(){var e=this;t.ajax({type:"POST",url:"/css/pdf2word/"+sessionStorage.getItem("user"),data:{},contentType:"application/json; charset=UTF-8",dataType:"json",async:!1,success:function(t){console.log(t.route),console.log(t),"nofile"==t.route?e.$message({message:"需要先上传pdf文件",type:"warning"}):(e.download_file=t.route,e.$message({message:"文献PDF内容提取已完成，可以下载word文档",type:"success"}))},error:function(t){alert("文献PDF内容提取出现错误")}})},MIC:function(){var e=this;t.ajax({type:"POST",url:"/css/MIC/"+sessionStorage.getItem("user"),data:{},contentType:"application/json; charset=UTF-8",dataType:"json",async:!1,success:function(t){console.log(t.route),console.log(t),"nofile"==t.route?e.$message({message:"需要先上传数据文件",type:"warning"}):"需要上传两个文件以进行MIC计算"==t.route?e.$message({message:"需要上传两个文件以进行MIC计算",type:"warning"}):(e.download_file=t.route,e.$message({message:"决策树模型训练与测试完成，可以下载测试集结果文件",type:"success"})),e.download_file=t.route,e.$message({message:"MIC计算已完成，可以下载数据文件",type:"success"})},error:function(t){alert("MIC计算出现错误")}})},decisionTree:function(){var e=this;t.ajax({type:"POST",url:"/css/decisionTree/"+sessionStorage.getItem("user"),data:{},contentType:"application/json; charset=UTF-8",dataType:"json",async:!1,success:function(t){console.log(t.route),console.log(t),"nofile"==t.route?e.$message({message:"需要先上传训练集和测试集文件",type:"warning"}):"需要上传训练集和测试集以进行模型训练与测试"==t.route?e.$message({message:"需要上传训练集和测试集以进行模型训练与测试",type:"warning"}):(e.download_file=t.route,e.$message({message:"决策树模型训练与测试完成，可以下载测试集结果文件",type:"success"}))},error:function(t){alert("决策树模型训练出现错误")}})},randomForest:function(){var e=this;t.ajax({type:"POST",url:"/css/randomForest/"+sessionStorage.getItem("user"),data:{},contentType:"application/json; charset=UTF-8",dataType:"json",async:!1,success:function(t){console.log(t.route),console.log(t),"nofile"==t.route?e.$message({message:"需要先上传训练集和测试集文件",type:"warning"}):"需要上传训练集和测试集以进行模型训练与测试"==t.route?e.$message({message:"需要上传训练集和测试集以进行模型训练与测试",type:"warning"}):(e.download_file=t.route,e.$message({message:"随机森林模型训练与测试完成，可以下载测试集结果文件",type:"success"}))},error:function(t){alert("随机森林模型训练出现错误")}})},svm:function(){var e=this;t.ajax({type:"POST",url:"/css/svm/"+sessionStorage.getItem("user"),data:{},contentType:"application/json; charset=UTF-8",dataType:"json",async:!1,success:function(t){console.log(t.route),console.log(t),"nofile"==t.route?e.$message({message:"需要先上传训练集和测试集文件",type:"warning"}):"需要上传训练集和测试集以进行模型训练与测试"==t.route?e.$message({message:"需要上传训练集和测试集以进行模型训练与测试",type:"warning"}):(e.download_file=t.route,e.$message({message:"SVM模型训练与测试完成，可以下载测试集结果文件",type:"success"}))},error:function(t){alert("SVM模型训练出现错误")}})},svr:function(){var e=this;t.ajax({type:"POST",url:"/css/svr/"+sessionStorage.getItem("user"),data:{},contentType:"application/json; charset=UTF-8",dataType:"json",async:!1,success:function(t){console.log(t.route),console.log(t),"nofile"==t.route?e.$message({message:"需要先上传训练集和测试集文件",type:"warning"}):"需要上传训练集和测试集以进行模型训练与测试"==t.route?e.$message({message:"需要上传训练集和测试集以进行模型训练与测试",type:"warning"}):(e.download_file=t.route,e.$message({message:"SVR模型训练与测试完成，可以下载测试集结果文件",type:"success"}))},error:function(t){alert("SVR模型训练出现错误")}})},linearRegression:function(){var e=this;t.ajax({type:"POST",url:"/css/linearRegression/"+sessionStorage.getItem("user"),data:{},contentType:"application/json; charset=UTF-8",dataType:"json",async:!1,success:function(t){console.log(t.route),console.log(t),"nofile"==t.route?e.$message({message:"需要先上传训练集和测试集文件",type:"warning"}):"需要上传训练集和测试集以进行模型训练与测试"==t.route?e.$message({message:"需要上传训练集和测试集以进行模型训练与测试",type:"warning"}):(e.download_file=t.route,e.$message({message:"线性回归模型训练与测试完成，可以下载测试集结果文件",type:"success"}))},error:function(t){alert("线性回归模型训练出现错误")}})},logisticRegression:function(){var e=this;t.ajax({type:"POST",url:"/css/logisticRegression/"+sessionStorage.getItem("user"),data:{},contentType:"application/json; charset=UTF-8",dataType:"json",async:!1,success:function(t){console.log(t.route),console.log(t),"nofile"==t.route?e.$message({message:"需要先上传训练集和测试集文件",type:"warning"}):"需要上传训练集和测试集以进行模型训练与测试"==t.route?e.$message({message:"需要上传训练集和测试集以进行模型训练与测试",type:"warning"}):(e.download_file=t.route,e.$message({message:"逻辑回归模型训练与测试完成，可以下载测试集结果文件",type:"success"}))},error:function(t){alert("逻辑回归模型训练出现错误")}})},poly:function(){var e=this;t.ajax({type:"POST",url:"/css/polydata/"+sessionStorage.getItem("user"),data:{},contentType:"application/json; charset=UTF-8",dataType:"json",async:!1,success:function(t){console.log(t.route),console.log(t),"nofile"==t.route?e.$message({message:"需要先上传数据文件",type:"warning"}):(e.download_file=t.route,e.$message({message:"文件缺失值插值处理完成，可以下载",type:"success"}))},error:function(t){alert("文件缺失值插值处理出现错误")}})}}}}.call(e,n(72))},722:function(t,e,n){t.exports={default:n(729),__esModule:!0}},723:function(t,e,n){t.exports={default:n(730),__esModule:!0}},725:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var r=n(723),s=o(r),a=n(722),i=o(a),c="function"==typeof i.default&&"symbol"==typeof s.default?function(t){return typeof t}:function(t){return t&&"function"==typeof i.default&&t.constructor===i.default&&t!==i.default.prototype?"symbol":typeof t};e.default="function"==typeof i.default&&"symbol"===c(s.default)?function(t){return void 0===t?"undefined":c(t)}:function(t){return t&&"function"==typeof i.default&&t.constructor===i.default&&t!==i.default.prototype?"symbol":void 0===t?"undefined":c(t)}},729:function(t,e,n){n(742),n(741),n(743),n(744),t.exports=n(196).Symbol},730:function(t,e,n){n(297),n(298),t.exports=n(337).f("iterator")},731:function(t,e,n){var o=n(254),r=n(293),s=n(271);t.exports=function(t){var e=o(t),n=r.f;if(n)for(var a,i=n(t),c=s.f,l=0;i.length>l;)c.call(t,a=i[l++])&&e.push(a);return e}},732:function(t,e,n){var o=n(267);t.exports=Array.isArray||function(t){return"Array"==o(t)}},733:function(t,e,n){var o=n(247)("meta"),r=n(228),s=n(216),a=n(222).f,i=0,c=Object.isExtensible||function(){return!0},l=!n(235)(function(){return c(Object.preventExtensions({}))}),u=function(t){a(t,o,{value:{i:"O"+ ++i,w:{}}})},p=function(t,e){if(!r(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!s(t,o)){if(!c(t))return"F";if(!e)return"E";u(t)}return t[o].i},f=function(t,e){if(!s(t,o)){if(!c(t))return!0;if(!e)return!1;u(t)}return t[o].w},y=function(t){return l&&g.NEED&&c(t)&&!s(t,o)&&u(t),t},g=t.exports={KEY:o,NEED:!1,fastKey:p,getWeak:f,onFreeze:y}},735:function(t,e,n){var o=n(271),r=n(244),s=n(223),a=n(272),i=n(216),c=n(290),l=Object.getOwnPropertyDescriptor;e.f=n(219)?l:function(t,e){if(t=s(t),e=a(e,!0),c)try{return l(t,e)}catch(t){}if(i(t,e))return r(!o.f.call(t,e),t[e])}},736:function(t,e,n){var o=n(223),r=n(417).f,s={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],i=function(t){try{return r(t)}catch(t){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==s.call(t)?i(t):r(o(t))}},741:function(t,e){},742:function(t,e,n){"use strict";var o=n(211),r=n(216),s=n(219),a=n(269),i=n(295),c=n(733).KEY,l=n(235),u=n(256),p=n(255),f=n(247),y=n(212),g=n(337),m=n(336),d=n(731),v=n(732),h=n(227),_=n(228),b=n(223),x=n(272),w=n(244),T=n(292),S=n(736),j=n(735),O=n(222),k=n(254),P=j.f,C=O.f,E=S.f,$=o.Symbol,F=o.JSON,I=F&&F.stringify,M=y("_hidden"),N=y("toPrimitive"),L={}.propertyIsEnumerable,A=u("symbol-registry"),R=u("symbols"),U=u("op-symbols"),D=Object.prototype,V="function"==typeof $,G=o.QObject,W=!G||!G.prototype||!G.prototype.findChild,J=s&&l(function(){return 7!=T(C({},"a",{get:function(){return C(this,"a",{value:7}).a}})).a})?function(t,e,n){var o=P(D,e);o&&delete D[e],C(t,e,n),o&&t!==D&&C(D,e,o)}:C,z=function(t){var e=R[t]=T($.prototype);return e._k=t,e},B=V&&"symbol"==typeof $.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof $},H=function(t,e,n){return t===D&&H(U,e,n),h(t),e=x(e,!0),h(n),r(R,e)?(n.enumerable?(r(t,M)&&t[M][e]&&(t[M][e]=!1),n=T(n,{enumerable:w(0,!1)})):(r(t,M)||C(t,M,w(1,{})),t[M][e]=!0),J(t,e,n)):C(t,e,n)},q=function(t,e){h(t);for(var n,o=d(e=b(e)),r=0,s=o.length;s>r;)H(t,n=o[r++],e[n]);return t},K=function(t,e){return void 0===e?T(t):q(T(t),e)},Y=function(t){var e=L.call(this,t=x(t,!0));return!(this===D&&r(R,t)&&!r(U,t))&&(!(e||!r(this,t)||!r(R,t)||r(this,M)&&this[M][t])||e)},Q=function(t,e){if(t=b(t),e=x(e,!0),t!==D||!r(R,e)||r(U,e)){var n=P(t,e);return!n||!r(R,e)||r(t,M)&&t[M][e]||(n.enumerable=!0),n}},X=function(t){for(var e,n=E(b(t)),o=[],s=0;n.length>s;)r(R,e=n[s++])||e==M||e==c||o.push(e);return o},Z=function(t){for(var e,n=t===D,o=E(n?U:b(t)),s=[],a=0;o.length>a;)!r(R,e=o[a++])||n&&!r(D,e)||s.push(R[e]);return s};V||($=function(){if(this instanceof $)throw TypeError("Symbol is not a constructor!");var t=f(arguments.length>0?arguments[0]:void 0),e=function(n){this===D&&e.call(U,n),r(this,M)&&r(this[M],t)&&(this[M][t]=!1),J(this,t,w(1,n))};return s&&W&&J(D,t,{configurable:!0,set:e}),z(t)},i($.prototype,"toString",function(){return this._k}),j.f=Q,O.f=H,n(417).f=S.f=X,n(271).f=Y,n(293).f=Z,s&&!n(243)&&i(D,"propertyIsEnumerable",Y,!0),g.f=function(t){return z(y(t))}),a(a.G+a.W+a.F*!V,{Symbol:$});for(var tt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),et=0;tt.length>et;)y(tt[et++]);for(var nt=k(y.store),ot=0;nt.length>ot;)m(nt[ot++]);a(a.S+a.F*!V,"Symbol",{for:function(t){return r(A,t+="")?A[t]:A[t]=$(t)},keyFor:function(t){if(!B(t))throw TypeError(t+" is not a symbol!");for(var e in A)if(A[e]===t)return e},useSetter:function(){W=!0},useSimple:function(){W=!1}}),a(a.S+a.F*!V,"Object",{create:K,defineProperty:H,defineProperties:q,getOwnPropertyDescriptor:Q,getOwnPropertyNames:X,getOwnPropertySymbols:Z}),F&&a(a.S+a.F*(!V||l(function(){var t=$();return"[null]"!=I([t])||"{}"!=I({a:t})||"{}"!=I(Object(t))})),"JSON",{stringify:function(t){for(var e,n,o=[t],r=1;arguments.length>r;)o.push(arguments[r++]);if(n=e=o[1],(_(e)||void 0!==t)&&!B(t))return v(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!B(e))return e}),o[1]=e,I.apply(F,o)}}),$.prototype[N]||n(217)($.prototype,N,$.prototype.valueOf),p($,"Symbol"),p(Math,"Math",!0),p(o.JSON,"JSON",!0)},743:function(t,e,n){n(336)("asyncIterator")},744:function(t,e,n){n(336)("observable")},745:function(t,e,n){e=t.exports=n(176)(),e.push([t.i,".qs{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#2c3e50}.upload{margin:20px auto}.el-row{margin-bottom:20px;&:last-child{margin-bottom:0}}.el-col{border-radius:4px}.el-main{background-color:#e4e7ed;color:#333;text-align:center;width:1000px;margin:20px auto}.el-button--primary,.el-button--primary.is-plain{width:150px}.el-input--suffix .el-input__inner{margin-left:60px}.box{.top{text-align:center}.left{float:left;width:60px}.right{float:right;width:60px}.bottom{clear:both;text-align:center}.item{margin:4px}.left .el-tooltip__popper,.right .el-tooltip__popper{padding:8px 10px}}.el-input--suffix .el-input__inner{padding-right:0;margin-left:0}.el-button--primary,.el-button--primary.is-plain,.el-input__inner{width:170px}.el-dropdown-link{cursor:pointer;color:#409eff}.el-icon-arrow-down{font-size:12px}.demonstration{display:block;color:#8492a6;font-size:14px;margin-bottom:20px}",""])},759:function(t,e,n){var o=n(745);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(177)("bb8394f0",o,!0)},773:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-main",[n("div",{staticClass:"qs"},[n("el-upload",{staticClass:"upload",attrs:{drag:"",action:t.getUser(),"on-preview":t.handlePreview,"on-remove":t.handleRemove,"before-remove":t.beforeRemove,multiple:"",limit:3,"on-exceed":t.handleExceed,accept:".csv,.txt,.pdf","file-list":t.fileList}},[n("i",{staticClass:"el-icon-upload"}),t._v(" "),n("div",{staticClass:"el-upload__text"},[t._v("将文件拖到此处，或"),n("em",[t._v("点击上传")])]),t._v(" "),n("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("仅支持上传csv/txt/pdf格式文件")])]),t._v(" "),n("el-row",[n("el-button",{attrs:{type:"primary",icon:"el-icon-menu"},on:{click:t.showuser}},[t._v("数据分析工具")])],1),t._v(" "),n("el-row",[n("el-col",{attrs:{span:6}},[n("el-input",{attrs:{placeholder:"请输入PCA降维维度",clearable:""},model:{value:t.pca_data,callback:function(e){t.pca_data=e},expression:"pca_data"}})],1),t._v(" "),n("el-col",{attrs:{span:6}},[n("el-button",{attrs:{type:"primary",plain:"",plain:!0},on:{click:t.PrincipalComponentsAnalysis}},[t._v("PCA降维")])],1),t._v(" "),n("el-col",{attrs:{span:6}},[n("el-input",{attrs:{placeholder:"输入t-SNE降维维度(<4)",clearable:""},model:{value:t.TSNE_data,callback:function(e){t.TSNE_data=e},expression:"TSNE_data"}})],1),t._v(" "),n("el-col",{attrs:{span:6}},[n("el-button",{attrs:{type:"primary",plain:"",plain:!0},on:{click:t.TSNE}},[t._v("t-SNE降维")])],1)],1),t._v(" "),n("el-row",[n("el-col",{attrs:{span:6}},[n("el-input",{attrs:{placeholder:"输入进行差异检验的数字",clearable:""},model:{value:t.Tnum,callback:function(e){t.Tnum=e},expression:"Tnum"}})],1),t._v(" "),n("el-col",{attrs:{span:6}},[n("el-button",{attrs:{type:"primary",plain:"",plain:!0},on:{click:t.Ttest}},[t._v("单样本T检验")])],1),t._v(" "),n("el-col",{attrs:{span:6}},[n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"需要先上传训练集再上传测试集",placement:"right"}},[n("el-button",{attrs:{type:"primary",plain:"",plain:!0},on:{click:t.nb}},[t._v("朴素贝叶斯")])],1)],1),t._v(" "),n("el-col",{staticClass:"box",attrs:{span:6}},[n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"请上传需要进行插值处理的csv文件",placement:"right"}},[n("el-button",{attrs:{type:"primary",plain:"",plain:!0},on:{click:t.poly}},[t._v("插值法处理缺失值")])],1)],1)],1),t._v(" "),n("el-row",[n("el-col",{staticClass:"box",attrs:{span:6}},[n("el-button",{attrs:{type:"primary",plain:"",plain:!0},on:{click:t.dtw}},[t._v("时序DTW分析")])],1),t._v(" "),n("el-col",{staticClass:"box",attrs:{span:6}},[n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"请上传txt文本用于生成词云",placement:"right"}},[n("el-button",{attrs:{type:"primary",plain:"",plain:!0},on:{click:t.wordCloud}},[t._v("词云生成")])],1)],1),t._v(" "),n("el-col",{staticClass:"box",attrs:{span:6}},[n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"请上传需要提取文献内容的PDF文件",placement:"right"}},[n("el-button",{attrs:{type:"primary",plain:"",plain:!0},on:{click:t.pdf2word}},[t._v("文献PDF内容提取")])],1)],1),t._v(" "),n("el-col",{staticClass:"box",attrs:{span:6}},[n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"请上传两份csv文件用于计算MIC值",placement:"right"}},[n("el-button",{attrs:{type:"primary",plain:"",plain:!0},on:{click:t.MIC}},[t._v("MIC计算")])],1)],1)],1),t._v(" "),n("el-row",{staticStyle:{margin:"10px 0px 10px 0px"}},[n("el-button",{attrs:{type:"primary",icon:"el-icon-menu"}},[t._v("机器学习模型")])],1),t._v(" "),n("el-row",{staticClass:"box"},[n("el-col",{attrs:{span:6}},[n("el-input",{attrs:{placeholder:"请输入聚类中心点个数",clearable:""},model:{value:t.cluster_data,callback:function(e){t.cluster_data=e},expression:"cluster_data"}})],1),t._v(" "),n("el-col",{attrs:{span:6}},[n("el-button",{attrs:{type:"primary",plain:"",plain:!0},on:{click:t.kmeans}},[t._v("聚类")])],1),t._v(" "),n("el-col",{attrs:{span:6}},[n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"请先上传训练集再上传测试集",placement:"right"}},[n("el-button",{attrs:{type:"primary",plain:"",plain:!0},on:{click:t.decisionTree}},[t._v("决策树")])],1)],1),t._v(" "),n("el-col",{attrs:{span:6}},[n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"请先上传训练集再上传测试集",placement:"right"}},[n("el-button",{attrs:{type:"primary",plain:"",plain:!0},on:{click:t.randomForest}},[t._v("随机森林")])],1)],1)],1),t._v(" "),n("el-row",{staticClass:"box"},[n("el-col",{attrs:{span:6}},[n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"请先上传训练集再上传测试集",placement:"right"}},[n("el-button",{attrs:{type:"primary",plain:"",plain:!0},on:{click:t.svm}},[t._v("SVM")])],1)],1),t._v(" "),n("el-col",{attrs:{span:6}},[n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"请先上传训练集再上传测试集",placement:"right"}},[n("el-button",{attrs:{type:"primary",plain:"",plain:!0},on:{click:t.svr}},[t._v("SVR")])],1)],1),t._v(" "),n("el-col",{attrs:{span:6}},[n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"请先上传训练集再上传测试集",placement:"right"}},[n("el-button",{attrs:{type:"primary",plain:"",plain:!0},on:{click:t.linearRegression}},[t._v("多元线性回归")])],1)],1),t._v(" "),n("el-col",{attrs:{span:6}},[n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"请先上传训练集再上传测试集",placement:"right"}},[n("el-button",{attrs:{type:"primary",plain:"",plain:!0},on:{click:t.logisticRegression}},[t._v("逻辑回归")])],1)],1)],1),t._v(" "),n("el-row",[n("el-button",{attrs:{type:"primary",icon:"el-icon-download"}},[n("a",{staticStyle:{"text-decoration":"none"},attrs:{href:"/download/"+t.username+"/"+t.download_file,download:"{{download_file}}"}},[n("span",{staticStyle:{color:"white"}},[t._v("下载文件")])])])],1)],1),t._v(" "),n("el-row",[n("span",{staticClass:"demonstration"},[t._v("choice0")]),t._v(" "),n("el-cascader",{attrs:{options:t.options,props:{expandTrigger:"hover"}},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),t._v(" "),n("span",{staticClass:"demonstration"},[t._v("choice1")]),t._v(" "),n("el-cascader",{attrs:{options:t.options,props:{expandTrigger:"hover"}},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}}),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:t.compute}},[t._v("计算")]),t._v(" "),n("el-input",{attrs:{placeholder:"计算结果",disabled:!0},model:{value:t.mic_result,callback:function(e){t.mic_result=e},expression:"mic_result"}})],1)],1)},staticRenderFns:[]}}});