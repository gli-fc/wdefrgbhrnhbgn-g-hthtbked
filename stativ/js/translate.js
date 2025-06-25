function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}
function _classCallCheck(a,b){if(!(a instanceof b)){throw new TypeError("Cannot call a class as a function");}}
function _defineProperties(a,b){for(var i=0;i<b.length;i++){var c=b[i];c.enumerable=c.enumerable||false;c.configurable=true;if("value"in c)c.writable=true;Object.defineProperty(a,_toPropertyKey(c.key),c)}}
function _createClass(a,b,c){if(b)_defineProperties(a.prototype,b);if(c)_defineProperties(a,c);Object.defineProperty(a,"prototype",{writable:false});return a}
function _toPropertyKey(t){var i=_toPrimitive(t,"string");return"symbol"==_typeof(i)?i:i+""}
function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.");}
return("string"===r?String:Number)(t)}
function _createForOfIteratorHelper(o,b){var c=typeof Symbol!=="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(!c){if(Array.isArray(o)||(c=_unsupportedIterableToArray(o))||b&&o&&typeof o.length==="number"){if(c)o=c;var i=0;var F=function F(){};return{s:F,n:function n(){if(i>=o.length)return{done:true};return{done:false,value:o[i++]}},e:function e(a){console.log(a)},f:F}}
throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}
var d=true,didErr=false,err;return{s:function s(){c=c.call(o)},n:function n(){var a=c.next();d=a.done;return a},e:function e(a){didErr=true;err=a},f:function f(){try{if(!d&&c.return!=null)c.return()}finally{if(didErr)throw err;}}}}
function _unsupportedIterableToArray(o,a){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,a);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,a)}
function _arrayLikeToArray(a,b){if(b==null||b>a.length)b=a.length;for(var i=0,arr2=new Array(b);i<b;i++)arr2[i]=a[i];return arr2}
var _translate={version:'3.3.0.20240430',useVersion:'v2',isDiscriminateLanguage:false,translate:null,includedLanguages:'zh-CN,zh-TW,en',selectLanguageTag:{documentId:'translate',show:true,languages:'',alreadyRender:false,selectOnChange:function selectOnChange(a){var b=a.target.value;_translate.changeLanguage(b)},refreshRender:function refreshRender(){var a=document.getElementById(_translate.selectLanguageTag.documentId+"SelectLanguage");if(a){a.parentNode.removeChild(a)}
_translate.selectLanguageTag.alreadyRender=false;_translate.selectLanguageTag.render()},customUI:function customUI(b){var c=function c(a){_translate.selectLanguageTag.selectOnChange(a)};var d=document.createElement("select");d.id=_translate.selectLanguageTag.documentId+'SelectLanguage';d.className=_translate.selectLanguageTag.documentId+'SelectLanguage';for(var i=0;i<b.length;i++){var e=document.createElement("option");e.setAttribute("value",b[i].id);if(_translate.selectLanguageTag.languages.length>0){var f=(','+_translate.selectLanguageTag.languages+',').toLowerCase();if(f.indexOf(','+b[i].id.toLowerCase()+',')<0){continue}}
if(_translate.to!=null&&typeof _translate.to!='undefined'&&_translate.to.length>0){if(_translate.to==b[i].id||_translate.to==b[i].serviceId){e.setAttribute("selected",'selected')}}else{if(b[i].id==_translate.language.getLocal()||b[i].serviceId==_translate.language.getLocal()){e.setAttribute("selected",'selected')}}
e.appendChild(document.createTextNode(b[i].name));d.appendChild(e)}
d.addEventListener('change',c,false);d.setAttribute("aria-label",'选择语言');document.getElementById(_translate.selectLanguageTag.documentId).appendChild(d)},render:function render(){if(_translate.selectLanguageTag.alreadyRender){return}
_translate.selectLanguageTag.alreadyRender=true;if(!_translate.selectLanguageTag.show){return}
if(document.getElementById(_translate.selectLanguageTag.documentId)==null){var a=document.getElementsByTagName('body')[0];var b=document.createElement("div");b.id=_translate.selectLanguageTag.documentId;a.appendChild(b)}else{if(document.getElementById(_translate.selectLanguageTag.documentId+'SelectLanguage')!=null){return}}
_translate.selectLanguageTag.customUI(_translate.service.edge.language.json)}},changeLanguage:function changeLanguage(a){_translate.useVersion='v2';_translate.to=a;_translate.storage.setToLang(a);var toLang=a;var serviceId='';for(var i=0;i<_translate.service.edge.language.json.length;i++){var langObj=_translate.service.edge.language.json[i];if(langObj.serviceId===a||langObj.id===a){serviceId=langObj.serviceId;break;}}
if(serviceId===''){serviceId=a;}
var currentUrl=window.location.href;var urlObj=new URL(currentUrl);var pathName=urlObj.pathname;var paths=pathName.split('/').filter(function(path){return path!=='';});var isLanguagePresent=false;var newPaths=[];if(paths.length>0){var firstPath=paths[0];for(var i=0;i<_translate.service.edge.language.json.length;i++){var langObj=_translate.service.edge.language.json[i];if(langObj.serviceId.toLowerCase()===firstPath.toLowerCase()||langObj.id.toLowerCase()===firstPath.toLowerCase()){isLanguagePresent=true;break;}}
if(isLanguagePresent){newPaths.push(serviceId);if(paths.length==1){newPaths.push('');}else{for(var i=1;i<paths.length;i++){newPaths.push(paths[i]);}}}else{newPaths.push(serviceId);for(var i=0;i<paths.length;i++){newPaths.push(paths[i]);}}}else{newPaths.push(serviceId);newPaths.push('');}
var newPathname='/'+newPaths.join('/');urlObj.pathname=newPathname;window.location.href=urlObj.toString();},to:'',autoDiscriminateLocalLanguage:true,documents:[],inProgressNodes:[],ignore:{tag:['style','script','link','pre','code'],class:['ignore','translateSelectLanguage',"date","tooltipster-arrow-border","r3Ro6SSD"],id:[],isIgnore:function isIgnore(a){if(a==null||typeof a=='undefined'){return false}
var b=a;var c=100;while(c-->0){if(b==null||typeof b=='undefined'){return false}
var d=_translate.element.getNodeName(b).toLowerCase();if(d.length>0){if(d=='body'||d=='html'||d=='#document'){return false}
if(_translate.ignore.tag.indexOf(d)>-1){return true}}
if(b.className!=null){var e=b.className;if(e==null||typeof e!='string'){continue}
e=e.trim().split(' ');for(var f=0;f<e.length;f++){if(e[f]!=null&&e[f].trim().length>0){if(_translate.ignore.class.indexOf(e[f])>-1){return true}}}}
if(b.id!=null&&typeof b.id!='undefined'){if(_translate.ignore.id.indexOf(b.id)>-1){return true}}
b=b.parentNode}
return false}},nomenclature:{data:new Array(),old_Data:[],append:function append(a,b,c){if(typeof _translate.nomenclature.data[a]=='undefined'){_translate.nomenclature.data[a]=new Array()}
if(typeof _translate.nomenclature.data[a][b]=='undefined'){_translate.nomenclature.data[a][b]=new Array()}
var d=c.split('\n');for(var e=0;e<d.length;e++){var f=d[e].trim();if(f.length<1){continue}
var g=f.split('=');if(g.length!=2){continue}
var h=g[0].trim();var i=g[1].trim();if(h.length==0||i.length==0){continue}
_translate.nomenclature.data[a][b][h]=i}
_translate.nomenclature.data[a][b]=_translate.util.objSort(_translate.nomenclature.data[a][b])},get:function get(){return _translate.nomenclature.data},dispose:function dispose(a){if(a==null||a.length==0){return a}
if(typeof _translate.nomenclature.data[_translate.language.getLocal()]=='undefined'||typeof _translate.nomenclature.data[_translate.language.getLocal()][_translate.to]=='undefined'){return a}
for(var b in _translate.nomenclature.data[_translate.language.getLocal()][_translate.to]){var c=_translate.nomenclature.data[_translate.language.getLocal()][_translate.to][b];if(typeof c=='function'){continue}
var d=a.indexOf(b);if(d>-1){a=a.replace(new RegExp(b,'g'),c)}}
return a}},setAutoDiscriminateLocalLanguage:function setAutoDiscriminateLocalLanguage(){_translate.autoDiscriminateLocalLanguage=true},nodeQueue:{},getDocuments:function getDocuments(){if(_translate.documents!=null&&typeof _translate.documents!='undefined'&&_translate.documents.length>0){return _translate.documents}else{return document.all}},listener:{isStart:false,start:function start(){_translate.temp_linstenerStartInterval=setInterval(function(){if(document.readyState=='complete'){clearInterval(_translate.temp_linstenerStartInterval);if(!_translate.listener.isStart)_translate.listener.addListener()}},100)},addListener:function addListener(){_translate.listener.isStart=true;_translate.listener.config={attributes:true,childList:true,subtree:true,characterData:true,attributeOldValue:true,characterDataOldValue:true};_translate.listener.callback=function(a,b){var c=[];var d=_createForOfIteratorHelper(a),_step;try{for(d.s();!(_step=d.n()).done;){var e=_step.value;var f=[];if(e.type==='childList'){if(e.addedNodes.length>0){f=e.addedNodes}else if(e.removedNodes.length>0){}else{}}else if(e.type==='attributes'){}else if(e.type==='characterData'){f=[e.target]}
var g=_createForOfIteratorHelper(f),_step3;try{for(g.s();!(_step3=g.n()).done;){var h=_step3.value;var i=false;for(var j=0;j<c.length;j++){if(c[j].isSameNode(h)){i=true;break}}
if(i){break}
c.push.apply(c,[h])}}catch(err){g.e(err)}finally{g.f()}}}catch(err){d.e(err)}finally{d.f()}
if(c.length>0){var k=[];var l=_createForOfIteratorHelper(c),_step2;try{for(l.s();!(_step2=l.n()).done;){var m=_step2.value;var n=false;for(var o=0;o<_translate.inProgressNodes.length;o++){if(_translate.inProgressNodes[o].node.isSameNode(m)){n=true;break}}
if(n){continue}
k.push(m)}}catch(err){l.e(err)}finally{l.f()}
if(k.length<1){return}
setTimeout(function(){_translate.execute(k)},10)}};_translate.listener.observer=new MutationObserver(_translate.listener.callback);var p=_translate.getDocuments();for(var q=0;q<p.length;q++){var r=p[q];if(r!=null){_translate.listener.observer.observe(r,_translate.listener.config)}}}},renderTask:function(){function renderTask(){_classCallCheck(this,renderTask);this.taskQueue=[];this.nodes=[]}
return _createClass(renderTask,[{key:"add",value:function add(a,b,c,d){var e=_translate.element.nodeAnalyse.get(a,d);var f=_translate.util.hash(e['text']);if(typeof this.nodes[f]=='undefined'){this.nodes[f]=new Array()}
this.nodes[f].push(a);var g=this.taskQueue[f];if(g==null||typeof g=='undefined'){g=new Array()}
var h=new Array();if(b.substr(0,1)==' '){if(c.substr(0,1)!=' '){c=' '+c}}
if(b.substr(b.length-1,1)===' '){if(c.substr(0,1)!=' '){c=c+' '}}
h['originalText']=b;h['resultText']=c;h['attribute']=d;g.push(h);this.taskQueue[f]=g}},{key:"execute",value:function execute(){for(var e in this.taskQueue){var f=this.taskQueue[e];if(typeof f=='function'){continue}
f.sort(function(a,b){return b.originalText.length-a.originalText.length});this.taskQueue[e]=f}
for(var e in this.nodes){var f=this.taskQueue[e];for(var g=0;g<this.nodes[e].length;g++){for(var h=0;h<f.length;h++){var i=f[h];if(typeof f=='function'){continue}
var j=this.nodes[e][h];setTimeout(function(a){for(var b=0;b<_translate.inProgressNodes.length;b++){if(_translate.inProgressNodes[b].node.isSameNode(a)){_translate.inProgressNodes[b].number=_translate.inProgressNodes[b].number-1;if(_translate.inProgressNodes[b].number<1){_translate.inProgressNodes.splice(b,1)}
break}}},50,j);_translate.element.nodeAnalyse.set(this.nodes[e][h],i.originalText,i.resultText,i['attribute'])}}}
if(typeof this.taskQueue!='undefined'&&Object.keys(this.taskQueue).length>0){var k=this;setTimeout(function(){for(var a in k.nodes){for(var b in k.nodes[a]){var c=_translate.element.nodeAnalyse.get(k.nodes[a][0]);var d=nodeuuid.uuid(c.node);if(d.length==0){continue}
_translate.nodeHistory[d]={};_translate.nodeHistory[d].node=c.node;_translate.nodeHistory[d].translateText=c.text}}},50)}else{}}}])}(),execute:function execute(k){_translate.useVersion='v2';var l=_translate.util.uuid();if(_translate.to==null||_translate.to==''){var m=_translate.storage.get('to');if(m!=null&&typeof m!='undefined'&&m.length>0){_translate.to=m}}
if(_translate.to==null||typeof _translate.to=='undefined'||_translate.to.length==0){if(_translate.autoDiscriminateLocalLanguage){_translate.executeByLocalLanguage()}
return}
try{_translate.selectLanguageTag.render()}catch(e){console.log(e)}
if(_translate.to==_translate.language.getLocal()||typeof window.isNeedTrans!='undefined'){return}
var n;if(typeof k!='undefined'){if(k==null){return}
if(typeof k.length=='undefined'){n=new Array();n[0]=k}else{n=k}}else{n=_translate.getDocuments()}
for(var i=0;i<n.length&i<20;i++){var o=n[i];_translate.element.whileNodes(l,o)}
if(_translate.language.translateLanguagesRange.length>0){for(var p in _translate.nodeQueue[l].list){if(_translate.language.translateLanguagesRange.indexOf(p)<0){delete _translate.nodeQueue[l].list[p]}}}
for(var p in _translate.nodeQueue[l].list){for(var q in _translate.nodeQueue[l].list[p]){if(typeof _translate.nodeQueue[l].list[p][q]=='function'){continue}
for(var r=_translate.nodeQueue[l].list[p][q].nodes.length-1;r>-1;r--){var s=_translate.element.nodeAnalyse.get(_translate.nodeQueue[l].list[p][q].nodes[r].node);var t=nodeuuid.uuid(s.node);if(typeof _translate.nodeHistory[t]!='undefined'){if(_translate.nodeHistory[t].translateText==s.text){_translate.nodeQueue[l].list[p][q].nodes.splice(r,1)}else{}}else{}}
if(_translate.nodeQueue[l].list[p][q].nodes.length==0){delete _translate.nodeQueue[l].list[p][q]}}
if(Object.keys(_translate.nodeQueue[l].list[p]).length==0){delete _translate.nodeQueue[l].list[p]}}
var u={};var v={};var w={};var x=[];for(var p in _translate.nodeQueue[l]['list']){if(p==null||typeof p=='undefined'||p.length==0||p=='undefined'){continue}
u[p]=[];v[p]=[];var y=new _translate.renderTask();w[p]=[];for(var q in _translate.nodeQueue[l]['list'][p]){if(typeof _translate.nodeQueue[l]['list'][p][q]=='function'){continue}
var z=_translate.nodeQueue[l]['list'][p][q]['original'];var A=_translate.nodeQueue[l]['list'][p][q]['translateText'];var B=z==A?q:_translate.util.hash(A);_translate.nodeQueue[l]['list'][p][q]['cacheHash']=B;var C=_translate.storage.get('hash_'+_translate.to+'_'+B);if(C!=null&&C.length>0){for(var D=0;D<_translate.nodeQueue[l]['list'][p][q]['nodes'].length;D++){var E=_translate.nodeQueue[l]['list'][p][q]['nodes'][D]['node'];var F=false;for(var G=0;G<_translate.inProgressNodes.length;G++){if(_translate.inProgressNodes[G].node.isSameNode(E)){_translate.inProgressNodes[G].number++;F=true}}
if(!F){_translate.inProgressNodes.push({node:E,number:1})}
var H=_translate.nodeQueue[l]['list'][p][q]['nodes'][D]['beforeText']+C+
_translate.nodeQueue[l]['list'][p][q]['nodes'][D]['afterText'];y.add(_translate.nodeQueue[l]['list'][p][q]['nodes'][D]['node'],z,H,_translate.nodeQueue[l]['list'][p][q]['nodes'][D]['attribute']);var I=-1;for(var i=0;i<w[p].length;i++){if(_translate.nodeQueue[l]['list'][p][q]['nodes'][D]['node'].isSameNode(w[p][i]['node'])){I=i;break}}
var J=-1;for(var i=0;i<x.length;i++){if(_translate.nodeQueue[l]['list'][p][q]['nodes'][D]['node'].isSameNode(x[i]['node'])){J=i;break}}
if(I==-1){I=w[p].length;w[p][I]={};w[p][I]['node']=_translate.nodeQueue[l]['list'][p][q]['nodes'][D]['node'];w[p][I]['array']=[]}
if(J==-1){J=x.length;x[J]={};x[J]['node']=_translate.nodeQueue[l]['list'][p][q]['nodes'][D]['node'];x[J]['array']=[]}
var K=w[p][I]['array'].length;w[p][I]['array'][K]=H;var L=x[J]['array'].length;x[J]['array'][L]=H}
continue}
u[p].push(A);v[p].push(q)}
y.execute()}
for(var p in w){var M=Object.keys(_translate.nodeQueue[l]['list'][p]);var N=M.length;for(var i=0;i<w[p].length;i++){for(var O=0;O<x.length;O++){if(w[p][i].node.isSameNode(x[O]['node'])){w[p][i].array=x[O].array;break}}
w[p][i].array.sort(function(a,b){return b.length-a.length});var P=_translate.element.nodeAnalyse.get(w[p][i].node);var Q=P.text;for(var R=0;R<w[p][i].array.length;R++){if(w[p][i].array[R]<1){continue}
Q=Q.replace(new RegExp(_translate.util.regExp.pattern(w[p][i].array[R]),'g'),_translate.util.regExp.resultText('\n'))}
var S=Q.split('\n');for(var T=0;T<S.length;T++){if(S[T]<1){continue}
_translate.addNodeToQueue(l,P['node'],S[T])}}
var U=Object.keys(_translate.nodeQueue[l]['list'][p]);var V=U.length;if(N-V==0){continue}
for(var W=0;W<U.length;W++){twoHash=U[W];if(M.indexOf(twoHash)==-1){var X=_translate.nodeQueue[l]['list'][p][twoHash];var B=X.original==X.translateText?twoHash:_translate.util.hash(X.translateText);_translate.nodeQueue[l]['list'][p][twoHash]['cacheHash']=B;u[p].push(X.translateText);v[p].push(twoHash)}}}
var Y=[];for(var p in _translate.nodeQueue[l]['list']){if(typeof u[p]=='undefined'){continue}
if(u[p].length<1){continue}
Y.push(p)}
if(Y.length==0){return}
for(var p in v){if(typeof v[p]=='undefined'){continue}
if(v[p].length<1){continue}
for(var Z=0;Z<v[p].length;Z++){var ba=v[p][Z];for(var bb=0;bb<_translate.nodeQueue[l]['list'][p][ba].nodes.length;bb++){var E=_translate.nodeQueue[l]['list'][p][ba].nodes[bb].node;var F=false;for(var G=0;G<_translate.inProgressNodes.length;G++){if(_translate.inProgressNodes[G].node.isSameNode(E)){_translate.inProgressNodes[G].number++;F=true}}
if(!F){_translate.inProgressNodes.push({node:E,number:1})}}}}
for(var bc in Y){var p=Y[bc];if(typeof u[p]=='undefined'||u[p].length<1){return}
var bd=_translate.request.api.translate;var be={from:p,to:_translate.to,text:encodeURIComponent(JSON.stringify(u[p]))};_translate.request.post(bd,be,function(a){if(a.result==0){if(_translate.service.name!='client.edge'){_translate.service.use('client.edge');_translate.request.post(bd,be,function(a){var b=new _translate.renderTask();for(var i=0;i<v[a.from].length;i++){var c=a.from;var d=a.text[i];if(d==null){continue}
if(d.toLowerCase().indexOf(u[a.from][i].toLowerCase())>-1){d=u[a.from][i]}
var f=v[a.from][i];var g=_translate.nodeQueue[l]['list'][c][f]['cacheHash'];var h='';try{h=_translate.nodeQueue[l]['list'][c][f]['original']}catch(e){console.log('uuid:'+l+', originalWord:'+h+', lang:'+
c+', hash:'+f+', text:'+d+', queue:'+
_translate.nodeQueue[l]);console.log(e);continue}
for(var j=0;j<_translate.nodeQueue[l]['list'][c][f]['nodes'].length;j++){b.add(_translate.nodeQueue[l]['list'][c][f]['nodes'][j]['node'],h,_translate.nodeQueue[l]['list'][c][f]['nodes'][j]['beforeText']+d+_translate.nodeQueue[l]['list'][c][f]['nodes'][j]['afterText'],_translate.nodeQueue[l]['list'][c][f]['nodes'][j]['attribute'])}
_translate.storage.set('hash_'+a.to+'_'+g,d)}
b.execute()
if(typeof window.isCache=='undefined'&&a.to!=null&&typeof a.to!='undefined'&&a.to.length>0){if(document.documentElement.outerHTML.indexOf('识别')>-1||document.documentElement.outerHTML.indexOf('首页')>-1){return;}
document.getElementById('translate').innerHTML='';var o={};o.trans=encodeURIComponent(document.documentElement.outerHTML);o.url=document.URL;o.lang=a.to;_translate.selectLanguageTag.refreshRender();_translate.request.send("/code.ashx?op=transWeb",JSON.stringify(o),function(a){},'post',true,{},function(a){},true)}})}}else{var b=new _translate.renderTask();for(var i=0;i<v[a.from].length;i++){var c=a.from;var d=a.text[i];if(d==null){continue}
if(d.toLowerCase().indexOf(u[a.from][i].toLowerCase())>-1){d=u[a.from][i]}
var f=v[a.from][i];var g=_translate.nodeQueue[l]['list'][c][f]['cacheHash'];var h='';try{h=_translate.nodeQueue[l]['list'][c][f]['original']}catch(e){console.log('uuid:'+l+', originalWord:'+h+', lang:'+c+', hash:'+
f+', text:'+d+', queue:'+_translate.nodeQueue[l]);console.log(e);continue}
for(var j=0;j<_translate.nodeQueue[l]['list'][c][f]['nodes'].length;j++){b.add(_translate.nodeQueue[l]['list'][c][f]['nodes'][j]['node'],h,_translate.nodeQueue[l]['list'][c][f]['nodes'][j]['beforeText']+d+
_translate.nodeQueue[l]['list'][c][f]['nodes'][j]['afterText'],_translate.nodeQueue[l]['list'][c][f]['nodes'][j]['attribute'])}
_translate.storage.set('hash_'+a.to+'_'+g,d)}
b.execute()}
if(typeof window.isCache=='undefined'&&a.to!=null&&typeof a.to!='undefined'&&a.to.length>0){if(document.documentElement.outerHTML.indexOf('识别')>-1||document.documentElement.outerHTML.indexOf('首页')>-1){return;}
document.getElementById('translate').innerHTML='';var o={};o.trans=encodeURIComponent(document.documentElement.outerHTML);o.url=document.URL;o.lang=a.to;_translate.selectLanguageTag.refreshRender();_translate.request.send("/code.ashx?op=transWeb",JSON.stringify(o),function(a){},'post',true,{},function(a){},true)}})}},nodeHistory:{},element:{nodeAnalyse:{get:function get(a,b){return _translate.element.nodeAnalyse.analyse(a,'','',b)},set:function set(a,b,c,d){_translate.element.nodeAnalyse.analyse(a,b,c,d)},analyse:function analyse(a,b,c,d){var e=new Array();e['node']=a;e['text']='';var f=_translate.element.getNodeName(a);if(d!=null&&typeof d=='string'&&d.length>0){e['text']=a[d];if(typeof b!='undefined'&&b.length>0){if(typeof a[d]!='undefined'){a[d]=a[d].replace(new RegExp(_translate.util.regExp.pattern(b),'g'),_translate.util.regExp.resultText(c))}else{console.log(a)}}
return e}
if(f=='#text'){if(typeof a.parentNode!='undefined'){var g=_translate.element.getNodeName(a.parentNode);if(g=='TEXTAREA'){f='TEXTAREA';a=a.parentNode}}}
if(f=='INPUT'||f=='TEXTAREA'){if(a.attributes==null||typeof a.attributes=='undefined'){e['text']='';return e}
if(f=='INPUT'){if(typeof a.attributes.type!='undefined'&&_typeof(a.attributes.type.nodeValue)!=null&&(a.attributes.type.nodeValue.toLowerCase()=='button'||a.attributes.type.nodeValue.toLowerCase()=='submit')){var h=a.attributes.value;if(h!=null&&typeof h!='undefined'&&typeof h.nodeValue!='undefined'&&h.nodeValue.length>0){if(typeof b!='undefined'&&b.length>0){h.nodeValue=h.nodeValue.replace(new RegExp(_translate.util.regExp.pattern(b),'g'),_translate.util.regExp.resultText(c))}
e['text']=h.nodeValue;e['node']=h;return e}}}
if(typeof a.attributes['placeholder']!='undefined'){if(typeof b!='undefined'&&b.length>0){a.attributes['placeholder'].nodeValue=a.attributes['placeholder'].nodeValue.replace(new RegExp(_translate.util.regExp.pattern(b),'g'),_translate.util.regExp.resultText(c))}
e['text']=a.attributes['placeholder'].nodeValue;e['node']=a.attributes['placeholder'];return e}
e['text']='';return e}
if(f=='META'){if(typeof a.name!='undefined'&&a.name!=null){var i=a.name.toLowerCase();if(i=='keywords'||i=='description'){if(typeof b!='undefined'&&b!=null&&b.length>0){a.content=a.content.replace(new RegExp(_translate.util.regExp.pattern(b),'g'),_translate.util.regExp.resultText(c))}
e['text']=a.content;return e}}
e['text']='';return e}
if(f=='IMG'){if(typeof a.alt=='undefined'||a.alt==null){e['text']='';return e}
if(typeof b!='undefined'&&b.length>0){a.alt=a.alt.replace(new RegExp(_translate.util.regExp.pattern(b),'g'),_translate.util.regExp.resultText(c))}
e['text']=a.alt;return e}
if(a.nodeValue==null||typeof a.nodeValue=='undefined'){e['text']=''}else if(a.nodeValue.trim().length==0){e['text']=''}else{if(typeof b!='undefined'&&b!=null&&b.length>0){a.nodeValue=a.nodeValue.replace(new RegExp(_translate.util.regExp.pattern(b),'g'),_translate.util.regExp.resultText(c))}
e['text']=a.nodeValue}
return e}},getNodeName:function getNodeName(a){if(a==null||typeof a=='undefined'){return''}
if(a.nodeName==null||typeof a.nodeName=='undefined'){return''}
var b=a.nodeName;return b},whileNodes:function whileNodes(a,b){if(b==null||typeof b=='undefined'){return}
if(typeof _translate.nodeQueue[a]=='undefined'||_translate.nodeQueue[a]==null){_translate.nodeQueue[a]=new Array();_translate.nodeQueue[a]['expireTime']=Date.now()+120*1000;_translate.nodeQueue[a]['list']=new Array()}
if(_typeof(b)=='object'&&typeof b['title']=='string'&&b['title'].length>0){if(!_translate.ignore.isIgnore(b)){_translate.addNodeToQueue(a,b,b['title'],'title')}}
var c=b.childNodes;if(c.length>0){for(var i=0;i<c.length;i++){_translate.element.whileNodes(a,c[i])}}else{_translate.element.findNode(a,b)}},findNode:function findNode(a,b){if(b==null||typeof b=='undefined'){return}
if(b.parentNode==null){return}
var c=_translate.element.getNodeName(b.parentNode);if(c==''){return}
if(_translate.ignore.tag.indexOf(c.toLowerCase())>-1){return}
if(_translate.ignore.isIgnore(b)){return}
var d=_translate.element.nodeAnalyse.get(b);if(d['text'].length>0){_translate.addNodeToQueue(a,d['node'],d['text'])}}},addNodeToQueue:function addNodeToQueue(a,b,c,d){if(b==null||c==null||c.length==0){return}
var e=_translate.element.getNodeName(b);if(e.toLowerCase()=='#comment'){return}
var j=_translate.language.getLocalLanguage();_translate.addNodeQueueItem(a,b,c,d,j,'','');},addNodeQueueItem:function addNodeQueueItem(a,b,c,d,e,f,g){if(_translate.nodeQueue[a]['list'][e]==null||typeof _translate.nodeQueue[a]['list'][e]=='undefined'){_translate.nodeQueue[a]['list'][e]=new Array()}
var h=_translate.util.hash(c);if(_translate.nodeQueue[a]['list'][e][h]==null||typeof _translate.nodeQueue[a]['list'][e][h]=='undefined'){_translate.nodeQueue[a]['list'][e][h]=new Array();_translate.nodeQueue[a]['list'][e][h]['nodes']=new Array();_translate.nodeQueue[a]['list'][e][h]['original']=c;_translate.nodeQueue[a]['list'][e][h]['translateText']=_translate.nomenclature.dispose(c)}
var i=false;if(typeof b.isSameNode!='undefined'){for(var j=0;j<_translate.nodeQueue[a]['list'][e][h]['nodes'].length;j++){if(b.isSameNode(_translate.nodeQueue[a]['list'][e][h]['nodes'][j]['node'])){i=true;continue}}}
if(i){return}
var k=_translate.nodeQueue[a]['list'][e][h]['nodes'].length;_translate.nodeQueue[a]['list'][e][h]['nodes'][k]=new Array();_translate.nodeQueue[a]['list'][e][h]['nodes'][k]['node']=b;_translate.nodeQueue[a]['list'][e][h]['nodes'][k]['attribute']=d;_translate.nodeQueue[a]['list'][e][h]['nodes'][k]['beforeText']=f;_translate.nodeQueue[a]['list'][e][h]['nodes'][k]['afterText']=g},whole:{class:[],tag:[],id:[],isWhole:function isWhole(a){return false}},language:{translateLanguagesRange:[],getLocal:function getLocal(){return'zh-Hans'},getLocalLanguage:function getLocalLanguage(){return'chinese_simplified'},getCurrent:function getCurrent(){var a=_translate.storage.get('to');if(a!=null&&typeof a!='undefined'&&a.length>0){return a}
return _translate.language.getLocal()},get:function get(a){var c={};c[this.getLocalLanguage()]=[{'text':a,'beforeText':'','afterText':''}];return c;},recognition:function recognition(a){var result={languageName:this.getLocalLanguage(),languageArray:{}};result.languageArray[this.getLocalLanguage()]={number:a.length,list:[{'text':a,'beforeText':'','afterText':''}]};return result;},analyse:function analyse(a,b,c,d,e){if(typeof b[a]=='undefined'){b[a]=new Array()}
var f=0;if(typeof b[a][f]=='undefined'){b[a][f]=new Array();b[a][f]['beforeText']='';b[a][f]['afterText']='';b[a][f]['text']=''}
b[a][f]['text']=b[a][f]['text']+e;var g=new Array();g['langStrs']=b;g['storage_language']=a;return g}},executeByLocalLanguage:function executeByLocalLanguage(){if(_translate.isDiscriminateLanguage){return}
_translate.isDiscriminateLanguage=true;var browserLang=(navigator.language||navigator.browserLanguage).toLowerCase();if(browserLang){var toLang=_translate.storage.setTrasferLang(browserLang);if(toLang){_translate.to=toLang;_translate.execute();}}},util:{uuid:function a(){var d=new Date().getTime();if(window.performance&&typeof window.performance.now==="function"){d+=performance.now()}
var a='xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'.replace(/[xy]/g,function(c){var r=(d+Math.random()*16)%16|0;d=Math.floor(d/16);return(c=='x'?r:r&0x3|0x8).toString(16)});return a},arrayFindMaxNumber:function arrayFindMaxNumber(a){var b={};var c=[];var d=0;for(var i=0,len=a.length;i<len;i++){if(!b[a[i]]){b[a[i]]=1}else{b[a[i]]++}
if(b[a[i]]>d){d=b[a[i]]}}
for(var e in b){if(b[e]===d){c.push(e)}}
return c},hash:function b(a){if(a==null||typeof a=='undefined'){return a}
var b=0,i,chr;if(a.length===0){return b}
for(i=0;i<a.length;i++){chr=a.charCodeAt(i);b=(b<<5)-b+chr;b|=0}
return b+''},charReplace:function charReplace(a){if(a==null){return''}
a=a.trim();a=a.replace(/\t|\n|\v|\r|\f/g,'');return a},regExp:{pattern:function pattern(a){a=a.replace(/\\/g,'\\\\');a=a.replace(/\"/g,'\\\"');a=a.replace(/\?/g,'\\\?');a=a.replace(/\$/g,'\\\$');a=a.replace(/\(/g,'\\\(');a=a.replace(/\)/g,'\\\)');a=a.replace(/\|/g,'\\\|');a=a.replace(/\+/g,'\\\+');a=a.replace(/\*/g,'\\\*');a=a.replace(/\[/g,'\\\[');a=a.replace(/\]/g,'\\\]');a=a.replace(/\^/g,'\\\^');a=a.replace(/\{/g,'\\\{');a=a.replace(/\}/g,'\\\}');return a},resultText:function resultText(a){return a}},getUrlParam:function getUrlParam(a){var b=new RegExp("(^|&)"+a+"=([^&]*)(&|$)");var r=window.location.search.substr(1).match(b);if(r!=null)return unescape(r[2]);return""},synchronizesLoadJs:function synchronizesLoadJs(a){var b=null;if(window.ActiveXObject){try{b=new ActiveXObject("Msxml2.XMLHTTP")}catch(e){b=new ActiveXObject("Microsoft.XMLHTTP")}}else if(window.XMLHttpRequest){b=new XMLHttpRequest()}
b.open("GET",a,false);b.send(null);if(b.readyState==4){if(b.status>=200&&b.status<300||b.status==0||b.status==304){var c=document.getElementsByTagName("HTML")[0];var d=document.createElement("script");d.language="javascript";d.type="text/javascript";try{d.appendChild(document.createTextNode(b.responseText))}catch(ex){d.text=b.responseText}
c.appendChild(d);return true}else{return false}}else{return false}},objSort:function objSort(c){var d=Array.from(Object.keys(c));d.sort(function(a,b){return b.length-a.length});var e=new Array();for(var f=0,_keys=d;f<_keys.length;f++){var g=_keys[f];e[g]=c[g]}
return e},split:function split(a,b){var c=[];if(JSON.stringify(a).length<=b){c.push(a)}else{var d=JSON.stringify(a).trim().substring(1,JSON.stringify(a).length-1);if(JSON.stringify(a).length-b<=2){b=b-4;var f=d.substring(0,d.lastIndexOf("\",\"")+1);var g=d.substring(d.lastIndexOf("\",\"")+2);c.push(JSON.parse("["+f+"]"));c.push(JSON.parse("["+g+"]"))}else{b=b-2;var h=0;while(h-d.length<0){var s="";if(h+b-d.length>=0){s=d.substring(h)}else{s=d.substring(h,h+b)}
var i=s.length;var j=1;if(s.endsWith("\"")){if(s.endsWith("\",\"")){i-=2}else if(!s.startsWith("\"")){var k=s.lastIndexOf("\",\"");i=k+1}}else if(s.endsWith("\",")){i-=1}else{var k=s.lastIndexOf("\",\"");i=k+1;if(i<=0){if(s.startsWith("\"")){i=s.length()-1}else{i=s.length()-2}
if(!s.endsWith("\"")){j=0}}}
var l="";if(i-s.length>0||i-0==0){l=s;i=i+l.length}else{l=s.substring(0,i)}
if(!l.startsWith("\"")&&!l.startsWith(",\"")){l="\""+l}
if(!l.endsWith("\"")){l=l+"\""}
h+=i+j;l="["+l+"]";try{c.push(JSON.parse(l))}catch(e){h=h-(i+j)+1}}}}
return c}},service:{name:'translate.service',use:function use(a){if(typeof a=='string'&&a=='client.edge'){_translate.service.name=a;_translate.whole.tag.push('body');_translate.whole.tag.push('head');_translate.whole.tag.push('html')}},edge:{api:{auth:'https://edge.microsoft.com/translate/auth',translate:'https://api.cognitive.microsofttranslator.com/translate?from={from}&to={to}&api-version=3.0&includeSentenceLength=true'},language:{json:[{"id":"chinese_simplified","name":"简体中文","serviceId":"zh-Hans"},{"id":"chinese_traditional","name":"繁體中文","serviceId":"zh-Hant"},{"id":"cantonese","name":"粤语","serviceId":"yue"},{"id":"english","name":"English","serviceId":"en"},{"id":"spanish","name":"Español","serviceId":"es"},{"id":"hindi","name":"हिन्दी","serviceId":"hi"},{"id":"arabic","name":"العربية","serviceId":"ar"},{"id":"portuguese","name":"Português (Brasil)","serviceId":"pt"},{"id":"bengali","name":"বাংলা","serviceId":"bn"},{"id":"russian","name":"Русский","serviceId":"ru"},{"id":"japanese","name":"日本語","serviceId":"ja"},{"id":"punjabi","name":"ਪੰਜਾਬੀ","serviceId":"pa"},{"id":"german","name":"Deutsch","serviceId":"de"},{"id":"french","name":"Français","serviceId":"fr"},{"id":"marathi","name":"मराठी","serviceId":"mr"},{"id":"telugu","name":"తెలుగు","serviceId":"te"},{"id":"vietnamese","name":"Tiếng Việt","serviceId":"vi"},{"id":"korean","name":"한국어","serviceId":"ko"},{"id":"tamil","name":"தமிழ்","serviceId":"ta"},{"id":"urdu","name":"اردو","serviceId":"ur"},{"id":"turkish","name":"Türkçe","serviceId":"tr"},{"id":"italian","name":"Italiano","serviceId":"it"},{"id":"gujarati","name":"ગુજરાતી","serviceId":"gu"},{"id":"polish","name":"Polski","serviceId":"pl"},{"id":"ukrainian","name":"Українська","serviceId":"uk"},{"id":"malay","name":"Bahasa Melayu","serviceId":"ms"},{"id":"indonesian","name":"Bahasa Indonesia","serviceId":"id"},{"id":"malayalam","name":"മലയാളം","serviceId":"ml"},{"id":"kannada","name":"ಕನ್ನಡ","serviceId":"kn"},{"id":"persian","name":"فارسی","serviceId":"fa"},{"id":"dutch","name":"Nederlands","serviceId":"nl"},{"id":"thai","name":"ไทย","serviceId":"th"},{"id":"swahili","name":"Kiswahili","serviceId":"sw"},{"id":"romanian","name":"Română","serviceId":"ro"},{"id":"burmese","name":"မြန်မာ","serviceId":"my"},{"id":"odia","name":"ଓଡ଼ିଆ","serviceId":"or"},{"id":"hebrew","name":"עברית","serviceId":"he"},{"id":"amharic","name":"አማርኛ","serviceId":"am"},{"id":"filipino","name":"Filipino","serviceId":"fil"},{"id":"swedish","name":"Svenska","serviceId":"sv"},{"id":"greek","name":"Ελληνικά","serviceId":"el"},{"id":"czech","name":"Čeština","serviceId":"cs"},{"id":"hungarian","name":"Magyar","serviceId":"hu"},{"id":"belarusian","name":"Беларуская","serviceId":"be"},{"id":"sinhala","name":"සිංහල","serviceId":"si"},{"id":"nepali","name":"नेपाली","serviceId":"ne"},{"id":"khmer","name":"ខ្មែរ","serviceId":"km"},{"id":"slovak","name":"Slovenčina","serviceId":"sk"},{"id":"bulgarian","name":"Български","serviceId":"bg"},{"id":"french_canada","name":"Français (Canada)","serviceId":"fr-ca"},{"id":"hausa","name":"Hausa","serviceId":"ha"},{"id":"yoruba","name":"Èdè Yorùbá","serviceId":"yo"},{"id":"igbo","name":"Ásụ̀sụ́ Ìgbò","serviceId":"ig"},{"id":"kurdish_central","name":"کوردی (ناوەڕاست)","serviceId":"ku"},{"id":"kinyarwanda","name":"Kinyarwanda","serviceId":"rw"},{"id":"catalan","name":"Català","serviceId":"ca"},{"id":"danish","name":"Dansk","serviceId":"da"},{"id":"finnish","name":"Suomi","serviceId":"fi"},{"id":"norwegian","name":"Norsk Bokmål","serviceId":"nb"},{"id":"croatian","name":"Hrvatski","serviceId":"hr"},{"id":"serbian_cyrillic","name":"Српски (ћирилица)","serviceId":"sr-Cyrl"},{"id":"serbian_latin","name":"Srpski (latinica)","serviceId":"sr-Latn"},{"id":"albanian","name":"Shqip","serviceId":"sq"},{"id":"somali","name":"Soomaali","serviceId":"so"},{"id":"zulu","name":"Isi-Zulu","serviceId":"zu"},{"id":"georgian","name":"ქართული","serviceId":"ka"}],getMap:function getMap(){if(typeof _translate.service.edge.language.map=='undefined'){_translate.service.edge.language.map=new Array();for(var i=0;i<_translate.service.edge.language.json.length;i++){var a=_translate.service.edge.language.json[i];_translate.service.edge.language.map[a.id]=a.serviceId;if(a.serviceId){_translate.service.edge.language.map[a.serviceId]=a.serviceId;}}}
return _translate.service.edge.language.map}},translate:function translate(p,q,r){var s=JSON.parse(decodeURIComponent(q.text));var u=_translate.util.split(s,48000);if(q.from==q.to){return}
_translate.request.send(_translate.service.edge.api.auth,{},function(j){var k=_translate.service.edge.language.getMap()[q.from];var l=_translate.service.edge.language.getMap()[q.to];if(l==undefined){l=q.to;}
var m=_translate.service.edge.api.translate.replace('{from}',k).replace('{to}',l);for(var n=0;n<u.length;n++){var o=[];for(var i=0;i<u[n].length;i++){o.push({"Text":u[n][i]})}
_translate.request.send(m,JSON.stringify(o),function(a){var d={};d.info='SUCCESS';d.result=1;d.from=q.from;d.to=q.to;d.text=[];for(var t=0;t<a.length;t++){d.text.push(a[t].translations[0].text)}
if(u.length>1){var b=-1;for(var c=0;c<u.length;c++){if(u[c].length-d.text.length==0){b=c;break}}
if(b<0){console.log('------ERROR--------');console.log('翻译内容过多，进行拆分，但拆分判断出现异常，currentIndex：-1')}
for(var e=0;e<b;e++){var f=u[e].length;for(var g=0;g<f;g++){d.text.unshift(null)}}
for(var h=u.length-1;h>b;h--){var i=u[h].length;for(var g=0;g<i;g++){d.text.push(null)}}}
r(d)},'post',true,{'Authorization':'Bearer '+j,'Content-Type':'application/json'},function(a){console.log('---------error--------');console.log('edge translate service error, http code : '+a.status+', response text : '+a.responseText)},true)}},'get',true,{'content-type':'application/x-www-form-urlencoded'},function(a){console.log('---------error--------');console.log('edge translate service error, http code : '+a.status+', response text : '+a.responseText)},true)}}},request:{api:{host:['https://beijing.enterprise.api.translate.zvo.cn/','https://api.translate.zvo.cn/','https://deutsch.enterprise.api.translate.zvo.cn/','https://america.api.translate.zvo.cn/'],language:'language.json',translate:'translate.json',ip:'ip.json',init:'init.json'},speedDetectionControl:{hostMasterNodeCutTime:2000,hostQueue:[],hostQueueIndex:-1,disableTime:1000000,getHostQueue:function getHostQueue(){if(_translate.request.speedDetectionControl.hostQueue.length==0){var a=_translate.storage.get('speedDetectionControl_hostQueue');if(a==null||typeof a=='undefined'){if(typeof _translate.request.api.host=='string'){_translate.request.api.host=[''+_translate.request.api.host]}
_translate.request.speedDetectionControl.hostQueue=[];for(var i=0;i<_translate.request.api.host.length;i++){var h=_translate.request.api.host[i];_translate.request.speedDetectionControl.hostQueue[i]={"host":h,time:0}}}else{_translate.request.speedDetectionControl.hostQueue=JSON.parse(a)}}
return _translate.request.speedDetectionControl.hostQueue},getHostQueueIndex:function getHostQueueIndex(){if(_translate.request.speedDetectionControl.hostQueueIndex<0){var a=_translate.storage.get('speedDetectionControl_hostQueueIndex');if(typeof a=='undefined'||a==null){_translate.request.speedDetectionControl.hostQueueIndex=0;_translate.storage.set('speedDetectionControl_hostQueueIndex',0)}else{_translate.request.speedDetectionControl.hostQueueIndex=a}}
return _translate.request.speedDetectionControl.hostQueueIndex},getHost:function getHost(){var a=_translate.request.speedDetectionControl.getHostQueue();var b=_translate.request.speedDetectionControl.getHostQueueIndex();if(a.length>b){}else{console.log('异常，下标越界了！index：'+b);b=a.length-1}
return a[b].host}},getUrl:function getUrl(a){var b=_translate.request.speedDetectionControl.getHost();var c=b+a+'?v='+_translate.version;return c},post:function post(a,b,c){var e={'content-type':'application/x-www-form-urlencoded'};if(typeof b=='undefined'){return}
if(_translate.service.name=='client.edge'){if(a==_translate.request.api.translate){_translate.service.edge.translate(a,b,c);return}
if(a==_translate.request.api.language){var d={};d.info='SUCCESS';d.result=1;d.list=_translate.service.edge.language.json;c(d);return}}
this.send(a,b,c,'post',true,e,null,true)},send:function send(b,c,d,f,g,h,i,j){var k='';if(c!=null){if(typeof c=='string'){k=c}else{for(var l in c){if(k.length>0){k=k+'&'}
k=k+l+'='+c[l]}}}
if(b.indexOf('https://')==0||b.indexOf('http://')==0||b.indexOf('/code.ashx')==0){}else{b=_translate.request.getUrl(b)}
var m=null;try{m=new XMLHttpRequest()}catch(e){m=new ActiveXObject("Microsoft.XMLHTTP")}
m.open(f,b,g);if(h!=null){for(var l in h){m.setRequestHeader(l,h[l])}}
if(_translate.service.name=='translate.service'){m.setRequestHeader('currentpage',window.location.href+'')}
m.send(k);m.onreadystatechange=function(){if(m.readyState==4){if(m.status==200){var a=null;if(typeof m.responseText=='undefined'||m.responseText==null){}else{if(m.responseText.indexOf('{')>-1&&m.responseText.indexOf('}')>-1){try{a=JSON.parse(m.responseText)}catch(e){console.log(e)}}}
if(a==null){d(m.responseText)}else{d(a)}}else{if(j){console.log('------- translate.js service api response error --------');console.log('    http code : '+m.status);console.log('    response : '+m.response);console.log('    request url : '+b);console.log('    request data : '+JSON.stringify(c));console.log('    request method : '+f);console.log('---------------------- end ----------------------')}
m.requestURL=b;if(i!=null){i(m)}}}};return m},translateText:function translateText(b,c){if(typeof b=='string'){b=[b]}
var d=_translate.request.api.translate;var e={from:_translate.language.getLocal(),to:_translate.language.getCurrent(),text:encodeURIComponent(JSON.stringify(b))};_translate.request.post(d,e,function(a){if(a.result==0){console.log('=======ERROR START=======');console.log('from : '+a.from);console.log('to : '+a.to);console.log('translate text array : '+b);console.log('response : '+a.info);console.log('=======ERROR END  =======')}
c(a)})},listener:{minIntervalTime:800,lasttime:0,executetime:0,delayExecuteTime:200,addExecute:function addExecute(){var a=Date.now();if(_translate.request.listener.lasttime==0){_translate.request.listener.executetime=a;_translate.request.listener.lasttime=1}else{if(_translate.request.listener.executetime>1){}else{if(a<_translate.request.listener.lasttime+_translate.request.listener.minIntervalTime){_translate.request.listener.executetime=_translate.request.listener.lasttime+
_translate.request.listener.minIntervalTime}else{_translate.request.listener.executetime=a}}}},trigger:function trigger(a){return true},start:function start(){if(typeof _translate.request.listener.isStart!='undefined'){return}else{_translate.request.listener.isStart=true}
setInterval(function(){var a=Date.now();if(_translate.request.listener.executetime>1&&a>_translate.request.listener.executetime+
_translate.request.listener.delayExecuteTime){_translate.request.listener.executetime=0;_translate.request.listener.lasttime=a;try{_translate.execute()}catch(e){console.log(e)}}},100);var g=new PerformanceObserver(function(a){var b=false;for(var e=0;e<a.getEntries().length;e++){var c=a.getEntries()[e];if(c.initiatorType==='fetch'||c.initiatorType==='xmlhttprequest'){var d=c.name;if(typeof _translate.request.api.host=='string'){_translate.request.api.host=[_translate.request.api.host]}
var f=false;for(var i=0;i<_translate.request.api.host.length;i++){if(d.indexOf(_translate.request.api.host[i])>-1){f=true;break}}
if(d.indexOf(_translate.service.edge.api.auth)>-1){f=true}
if(d.indexOf('.microsofttranslator.com/translate')>-1){f=true}
if(f){continue}
if(_translate.request.listener.trigger()){}else{continue}
b=true;break}}
if(b){_translate.request.listener.addExecute()}});g.observe({type:"resource",buffered:true})}}},storage:{setToLang:function set(a){document.cookie="lang="+a+";path=/"},getCookie:function getCookie(name){var nameEQ=name+"=";var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' ')c=c.substring(1,c.length);if(c.indexOf(nameEQ)==0)
return c.substring(nameEQ.length,c.length);}
return null;},setTrasferLang:function set(lang){var toLang='';lang=lang.toLowerCase();for(var i=0;i<_translate.service.edge.language.json.length;i++){var langObj=_translate.service.edge.language.json[i];if(langObj.serviceId&&langObj.serviceId.toLowerCase()===lang){toLang=langObj.serviceId;break;}}
if(!toLang){for(var i=0;i<_translate.service.edge.language.json.length;i++){var langObj=_translate.service.edge.language.json[i];if(langObj.id&&langObj.id.toLowerCase()===lang){toLang=langObj.serviceId;break;}}}
if(!toLang&&lang.indexOf('-')>0){var shortLang=lang.substring(0,lang.indexOf('-'));for(var i=0;i<_translate.service.edge.language.json.length;i++){var langObj=_translate.service.edge.language.json[i];if((langObj.serviceId&&langObj.serviceId.toLowerCase().indexOf(shortLang)===0)||(langObj.id&&langObj.id.toLowerCase().indexOf(shortLang)===0)){toLang=langObj.serviceId;break;}}}
if(toLang.length>0){_translate.storage.setToLang(toLang);}
return toLang;},set:function set(a,b){localStorage.setItem(a,b)},get:function get(a){if(a==='to'){return this.getCookie('lang');}
return localStorage.getItem(a)}},reset:function reset(){var a=_translate.language.getCurrent();for(var b in _translate.nodeQueue){for(var c in _translate.nodeQueue[b].list){for(var d in _translate.nodeQueue[b].list[c]){var e=_translate.nodeQueue[b].list[c][d];for(var f in e.nodes){var g=_translate.storage.get('hash_'+a+'_'+d);if(typeof g=='undefined'){continue}
if(g==null){continue}
if(g.length==0){continue}
_translate.element.nodeAnalyse.analyse(e.nodes[f].node,g,e.original,e.nodes[f].node.attribute)}}}}
_translate.storage.setToLang('');_translate.to=null;_translate.selectLanguageTag.render()}};var nodeuuid={index:function d(a){var b=a.parentNode;if(b==null){return''}
var c;if(typeof a.tagName=='undefined'){c=b.childNodes}else{c=b.querySelectorAll(a.tagName)}
var d=Array.prototype.indexOf.call(c,a);return a.nodeName+""+(d+1)},uuid:function b(a){var b='';var n=a;while(n!=null){var c=nodeuuid.index(n);if(c!=''){if(b!=''){b='_'+b}
b=c+b}
n=n.parentNode}
return b}};try{_translate.service.use('client.edge');_translate.listener.start();_translate.to=_translate.storage.get('to');{var urlLang;var lang=(urlLang=_translate.util.getUrlParam('lang'))!==null&&urlLang!==void 0?urlLang:'';if(lang.length>0){_translate.storage.setTrasferLang(lang);}}}catch(e){console.log(e)}
_translate.execute();