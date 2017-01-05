
window.Box=window.Box||{};Box.Timing=Box.Timing||{execution:[],scripts:{}};Box.Timing.scripts['marketing_global']=(new Date()).getTime();Box.Timing.execution.push({name:'js/vendor/base-1.1a.js',time:(new Date()).getTime()});var Base=function(){};Base.extend=function(_instance,_static){var extend=Base.prototype.extend;Base._prototyping=true;var proto=new this;extend.call(proto,_instance);proto.base=function(){};delete Base._prototyping;var constructor=proto.constructor;var klass=proto.constructor=function(){if(!Base._prototyping){if(this._constructing||this.constructor==klass){this._constructing=true;constructor.apply(this,arguments);delete this._constructing;}else if(arguments[0]!=null){return(arguments[0].extend||extend).call(arguments[0],proto);}}};klass.ancestor=this;klass.extend=this.extend;klass.forEach=this.forEach;klass.implement=this.implement;klass.prototype=proto;klass.toString=this.toString;klass.valueOf=function(type){return(type=="object")?klass:constructor.valueOf();};extend.call(klass,_static);if(typeof klass.init=="function")klass.init();return klass;};Base.prototype={extend:function(source,value){if(arguments.length>1){var ancestor=this[source];if(ancestor&&(typeof value=="function")&&(!ancestor.valueOf||ancestor.valueOf()!=value.valueOf())&&/\bbase\b/.test(value)){var method=value.valueOf();value=function(){var previous=this.base||Base.prototype.base;this.base=ancestor;var returnValue=method.apply(this,arguments);this.base=previous;return returnValue;};value.valueOf=function(type){return(type=="object")?value:method;};value.toString=Base.toString;}
this[source]=value;}else if(source){var extend=Base.prototype.extend;if(!Base._prototyping&&typeof this!="function"){extend=this.extend||extend;}
var proto={toSource:null};var hidden=["constructor","toString","valueOf"];var i=Base._prototyping?0:1;while(key=hidden[i++]){if(source[key]!=proto[key]){extend.call(this,key,source[key]);}}
for(var key in source){if(!proto[key])extend.call(this,key,source[key]);}}
return this;}};Base=Base.extend({constructor:function(){this.extend(arguments[0]);}},{ancestor:Object,version:"1.1",forEach:function(object,block,context){for(var key in object){if(this.prototype[key]===undefined){block.call(context,object[key],key,object);}}},implement:function(){for(var i=0;i<arguments.length;i++){if(typeof arguments[i]=="function"){arguments[i](this.prototype);}else{this.prototype.extend(arguments[i]);}}
return this;},toString:function(){return String(this.valueOf());}});Box.Timing.execution.push({name:'js/vendor/jquery/jquery-1.8.3.js',time:(new Date()).getTime()});(function(window,undefined){var
rootjQuery,readyList,document=window.document,location=window.location,navigator=window.navigator,_jQuery=window.jQuery,_$=window.$,core_push=Array.prototype.push,core_slice=Array.prototype.slice,core_indexOf=Array.prototype.indexOf,core_toString=Object.prototype.toString,core_hasOwn=Object.prototype.hasOwnProperty,core_trim=String.prototype.trim,jQuery=function(selector,context){return new jQuery.fn.init(selector,context,rootjQuery);},core_pnum=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,core_rnotwhite=/\S/,core_rspace=/\s+/,rtrim=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,rquickExpr=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,rsingleTag=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,rvalidchars=/^[\],:{}\s]*$/,rvalidbraces=/(?:^|:|,)(?:\s*\[)+/g,rvalidescape=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,rvalidtokens=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,rmsPrefix=/^-ms-/,rdashAlpha=/-([\da-z])/gi,fcamelCase=function(all,letter){return(letter+"").toUpperCase();},DOMContentLoaded=function(){if(document.addEventListener){document.removeEventListener("DOMContentLoaded",DOMContentLoaded,false);jQuery.ready();}else if(document.readyState==="complete"){document.detachEvent("onreadystatechange",DOMContentLoaded);jQuery.ready();}},class2type={};jQuery.fn=jQuery.prototype={constructor:jQuery,init:function(selector,context,rootjQuery){var match,elem,ret,doc;if(!selector){return this;}
if(selector.nodeType){this.context=this[0]=selector;this.length=1;return this;}
if(typeof selector==="string"){if(selector.charAt(0)==="<"&&selector.charAt(selector.length-1)===">"&&selector.length>=3){match=[null,selector,null];}else{match=rquickExpr.exec(selector);}
if(match&&(match[1]||!context)){if(match[1]){context=context instanceof jQuery?context[0]:context;doc=(context&&context.nodeType?context.ownerDocument||context:document);selector=jQuery.parseHTML(match[1],doc,true);if(rsingleTag.test(match[1])&&jQuery.isPlainObject(context)){this.attr.call(selector,context,true);}
return jQuery.merge(this,selector);}else{elem=document.getElementById(match[2]);if(elem&&elem.parentNode){if(elem.id!==match[2]){return rootjQuery.find(selector);}
this.length=1;this[0]=elem;}
this.context=document;this.selector=selector;return this;}}else if(!context||context.jquery){return(context||rootjQuery).find(selector);}else{return this.constructor(context).find(selector);}}else if(jQuery.isFunction(selector)){return rootjQuery.ready(selector);}
if(selector.selector!==undefined){this.selector=selector.selector;this.context=selector.context;}
return jQuery.makeArray(selector,this);},selector:"",jquery:"1.8.3",length:0,size:function(){return this.length;},toArray:function(){return core_slice.call(this);},get:function(num){return num==null?this.toArray():(num<0?this[this.length+num]:this[num]);},pushStack:function(elems,name,selector){var ret=jQuery.merge(this.constructor(),elems);ret.prevObject=this;ret.context=this.context;if(name==="find"){ret.selector=this.selector+(this.selector?" ":"")+selector;}else if(name){ret.selector=this.selector+"."+name+"("+selector+")";}
return ret;},each:function(callback,args){return jQuery.each(this,callback,args);},ready:function(fn){jQuery.ready.promise().done(fn);return this;},eq:function(i){i=+i;return i===-1?this.slice(i):this.slice(i,i+1);},first:function(){return this.eq(0);},last:function(){return this.eq(-1);},slice:function(){return this.pushStack(core_slice.apply(this,arguments),"slice",core_slice.call(arguments).join(","));},map:function(callback){return this.pushStack(jQuery.map(this,function(elem,i){return callback.call(elem,i,elem);}));},end:function(){return this.prevObject||this.constructor(null);},push:core_push,sort:[].sort,splice:[].splice};jQuery.fn.init.prototype=jQuery.fn;jQuery.extend=jQuery.fn.extend=function(){var options,name,src,copy,copyIsArray,clone,target=arguments[0]||{},i=1,length=arguments.length,deep=false;if(typeof target==="boolean"){deep=target;target=arguments[1]||{};i=2;}
if(typeof target!=="object"&&!jQuery.isFunction(target)){target={};}
if(length===i){target=this;--i;}
for(;i<length;i++){if((options=arguments[i])!=null){for(name in options){src=target[name];copy=options[name];if(target===copy){continue;}
if(deep&&copy&&(jQuery.isPlainObject(copy)||(copyIsArray=jQuery.isArray(copy)))){if(copyIsArray){copyIsArray=false;clone=src&&jQuery.isArray(src)?src:[];}else{clone=src&&jQuery.isPlainObject(src)?src:{};}
target[name]=jQuery.extend(deep,clone,copy);}else if(copy!==undefined){target[name]=copy;}}}}
return target;};jQuery.extend({noConflict:function(deep){if(window.$===jQuery){window.$=_$;}
if(deep&&window.jQuery===jQuery){window.jQuery=_jQuery;}
return jQuery;},isReady:false,readyWait:1,holdReady:function(hold){if(hold){jQuery.readyWait++;}else{jQuery.ready(true);}},ready:function(wait){if(wait===true?--jQuery.readyWait:jQuery.isReady){return;}
if(!document.body){return setTimeout(jQuery.ready,1);}
jQuery.isReady=true;if(wait!==true&&--jQuery.readyWait>0){return;}
readyList.resolveWith(document,[jQuery]);if(jQuery.fn.trigger){jQuery(document).trigger("ready").off("ready");}},isFunction:function(obj){return jQuery.type(obj)==="function";},isArray:Array.isArray||function(obj){return jQuery.type(obj)==="array";},isWindow:function(obj){return obj!=null&&obj==obj.window;},isNumeric:function(obj){return!isNaN(parseFloat(obj))&&isFinite(obj);},type:function(obj){return obj==null?String(obj):class2type[core_toString.call(obj)]||"object";},isPlainObject:function(obj){if(!obj||jQuery.type(obj)!=="object"||obj.nodeType||jQuery.isWindow(obj)){return false;}
try{if(obj.constructor&&!core_hasOwn.call(obj,"constructor")&&!core_hasOwn.call(obj.constructor.prototype,"isPrototypeOf")){return false;}}catch(e){return false;}
var key;for(key in obj){}
return key===undefined||core_hasOwn.call(obj,key);},isEmptyObject:function(obj){var name;for(name in obj){return false;}
return true;},error:function(msg){throw new Error(msg);},parseHTML:function(data,context,scripts){var parsed;if(!data||typeof data!=="string"){return null;}
if(typeof context==="boolean"){scripts=context;context=0;}
context=context||document;if((parsed=rsingleTag.exec(data))){return[context.createElement(parsed[1])];}
parsed=jQuery.buildFragment([data],context,scripts?null:[]);return jQuery.merge([],(parsed.cacheable?jQuery.clone(parsed.fragment):parsed.fragment).childNodes);},parseJSON:function(data){if(!data||typeof data!=="string"){return null;}
data=jQuery.trim(data);if(window.JSON&&window.JSON.parse){return window.JSON.parse(data);}
if(rvalidchars.test(data.replace(rvalidescape,"@").replace(rvalidtokens,"]").replace(rvalidbraces,""))){return(new Function("return "+data))();}
jQuery.error("Invalid JSON: "+data);},parseXML:function(data){var xml,tmp;if(!data||typeof data!=="string"){return null;}
try{if(window.DOMParser){tmp=new DOMParser();xml=tmp.parseFromString(data,"text/xml");}else{xml=new ActiveXObject("Microsoft.XMLDOM");xml.async="false";xml.loadXML(data);}}catch(e){xml=undefined;}
if(!xml||!xml.documentElement||xml.getElementsByTagName("parsererror").length){jQuery.error("Invalid XML: "+data);}
return xml;},noop:function(){},globalEval:function(data){if(data&&core_rnotwhite.test(data)){(window.execScript||function(data){window["eval"].call(window,data);})(data);}},camelCase:function(string){return string.replace(rmsPrefix,"ms-").replace(rdashAlpha,fcamelCase);},nodeName:function(elem,name){return elem.nodeName&&elem.nodeName.toLowerCase()===name.toLowerCase();},each:function(obj,callback,args){var name,i=0,length=obj.length,isObj=length===undefined||jQuery.isFunction(obj);if(args){if(isObj){for(name in obj){if(callback.apply(obj[name],args)===false){break;}}}else{for(;i<length;){if(callback.apply(obj[i++],args)===false){break;}}}}else{if(isObj){for(name in obj){if(callback.call(obj[name],name,obj[name])===false){break;}}}else{for(;i<length;){if(callback.call(obj[i],i,obj[i++])===false){break;}}}}
return obj;},trim:core_trim&&!core_trim.call("\uFEFF\xA0")?function(text){return text==null?"":core_trim.call(text);}:function(text){return text==null?"":(text+"").replace(rtrim,"");},makeArray:function(arr,results){var type,ret=results||[];if(arr!=null){type=jQuery.type(arr);if(arr.length==null||type==="string"||type==="function"||type==="regexp"||jQuery.isWindow(arr)){core_push.call(ret,arr);}else{jQuery.merge(ret,arr);}}
return ret;},inArray:function(elem,arr,i){var len;if(arr){if(core_indexOf){return core_indexOf.call(arr,elem,i);}
len=arr.length;i=i?i<0?Math.max(0,len+i):i:0;for(;i<len;i++){if(i in arr&&arr[i]===elem){return i;}}}
return-1;},merge:function(first,second){var l=second.length,i=first.length,j=0;if(typeof l==="number"){for(;j<l;j++){first[i++]=second[j];}}else{while(second[j]!==undefined){first[i++]=second[j++];}}
first.length=i;return first;},grep:function(elems,callback,inv){var retVal,ret=[],i=0,length=elems.length;inv=!!inv;for(;i<length;i++){retVal=!!callback(elems[i],i);if(inv!==retVal){ret.push(elems[i]);}}
return ret;},map:function(elems,callback,arg){var value,key,ret=[],i=0,length=elems.length,isArray=elems instanceof jQuery||length!==undefined&&typeof length==="number"&&((length>0&&elems[0]&&elems[length-1])||length===0||jQuery.isArray(elems));if(isArray){for(;i<length;i++){value=callback(elems[i],i,arg);if(value!=null){ret[ret.length]=value;}}}else{for(key in elems){value=callback(elems[key],key,arg);if(value!=null){ret[ret.length]=value;}}}
return ret.concat.apply([],ret);},guid:1,proxy:function(fn,context){var tmp,args,proxy;if(typeof context==="string"){tmp=fn[context];context=fn;fn=tmp;}
if(!jQuery.isFunction(fn)){return undefined;}
args=core_slice.call(arguments,2);proxy=function(){return fn.apply(context,args.concat(core_slice.call(arguments)));};proxy.guid=fn.guid=fn.guid||jQuery.guid++;return proxy;},access:function(elems,fn,key,value,chainable,emptyGet,pass){var exec,bulk=key==null,i=0,length=elems.length;if(key&&typeof key==="object"){for(i in key){jQuery.access(elems,fn,i,key[i],1,emptyGet,value);}
chainable=1;}else if(value!==undefined){exec=pass===undefined&&jQuery.isFunction(value);if(bulk){if(exec){exec=fn;fn=function(elem,key,value){return exec.call(jQuery(elem),value);};}else{fn.call(elems,value);fn=null;}}
if(fn){for(;i<length;i++){fn(elems[i],key,exec?value.call(elems[i],i,fn(elems[i],key)):value,pass);}}
chainable=1;}
return chainable?elems:bulk?fn.call(elems):length?fn(elems[0],key):emptyGet;},now:function(){return(new Date()).getTime();}});jQuery.ready.promise=function(obj){if(!readyList){readyList=jQuery.Deferred();if(document.readyState==="complete"){setTimeout(jQuery.ready,1);}else if(document.addEventListener){document.addEventListener("DOMContentLoaded",DOMContentLoaded,false);window.addEventListener("load",jQuery.ready,false);}else{document.attachEvent("onreadystatechange",DOMContentLoaded);window.attachEvent("onload",jQuery.ready);var top=false;try{top=window.frameElement==null&&document.documentElement;}catch(e){}
if(top&&top.doScroll){(function doScrollCheck(){if(!jQuery.isReady){try{top.doScroll("left");}catch(e){return setTimeout(doScrollCheck,50);}
jQuery.ready();}})();}}}
return readyList.promise(obj);};jQuery.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(i,name){class2type["[object "+name+"]"]=name.toLowerCase();});rootjQuery=jQuery(document);var optionsCache={};function createOptions(options){var object=optionsCache[options]={};jQuery.each(options.split(core_rspace),function(_,flag){object[flag]=true;});return object;}
jQuery.Callbacks=function(options){options=typeof options==="string"?(optionsCache[options]||createOptions(options)):jQuery.extend({},options);var
memory,fired,firing,firingStart,firingLength,firingIndex,list=[],stack=!options.once&&[],fire=function(data){memory=options.memory&&data;fired=true;firingIndex=firingStart||0;firingStart=0;firingLength=list.length;firing=true;for(;list&&firingIndex<firingLength;firingIndex++){if(list[firingIndex].apply(data[0],data[1])===false&&options.stopOnFalse){memory=false;break;}}
firing=false;if(list){if(stack){if(stack.length){fire(stack.shift());}}else if(memory){list=[];}else{self.disable();}}},self={add:function(){if(list){var start=list.length;(function add(args){jQuery.each(args,function(_,arg){var type=jQuery.type(arg);if(type==="function"){if(!options.unique||!self.has(arg)){list.push(arg);}}else if(arg&&arg.length&&type!=="string"){add(arg);}});})(arguments);if(firing){firingLength=list.length;}else if(memory){firingStart=start;fire(memory);}}
return this;},remove:function(){if(list){jQuery.each(arguments,function(_,arg){var index;while((index=jQuery.inArray(arg,list,index))>-1){list.splice(index,1);if(firing){if(index<=firingLength){firingLength--;}
if(index<=firingIndex){firingIndex--;}}}});}
return this;},has:function(fn){return jQuery.inArray(fn,list)>-1;},empty:function(){list=[];return this;},disable:function(){list=stack=memory=undefined;return this;},disabled:function(){return!list;},lock:function(){stack=undefined;if(!memory){self.disable();}
return this;},locked:function(){return!stack;},fireWith:function(context,args){args=args||[];args=[context,args.slice?args.slice():args];if(list&&(!fired||stack)){if(firing){stack.push(args);}else{fire(args);}}
return this;},fire:function(){self.fireWith(this,arguments);return this;},fired:function(){return!!fired;}};return self;};jQuery.extend({Deferred:function(func){var tuples=[["resolve","done",jQuery.Callbacks("once memory"),"resolved"],["reject","fail",jQuery.Callbacks("once memory"),"rejected"],["notify","progress",jQuery.Callbacks("memory")]],state="pending",promise={state:function(){return state;},always:function(){deferred.done(arguments).fail(arguments);return this;},then:function(){var fns=arguments;return jQuery.Deferred(function(newDefer){jQuery.each(tuples,function(i,tuple){var action=tuple[0],fn=fns[i];deferred[tuple[1]](jQuery.isFunction(fn)?function(){var returned=fn.apply(this,arguments);if(returned&&jQuery.isFunction(returned.promise)){returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify);}else{newDefer[action+"With"](this===deferred?newDefer:this,[returned]);}}:newDefer[action]);});fns=null;}).promise();},promise:function(obj){return obj!=null?jQuery.extend(obj,promise):promise;}},deferred={};promise.pipe=promise.then;jQuery.each(tuples,function(i,tuple){var list=tuple[2],stateString=tuple[3];promise[tuple[1]]=list.add;if(stateString){list.add(function(){state=stateString;},tuples[i^1][2].disable,tuples[2][2].lock);}
deferred[tuple[0]]=list.fire;deferred[tuple[0]+"With"]=list.fireWith;});promise.promise(deferred);if(func){func.call(deferred,deferred);}
return deferred;},when:function(subordinate){var i=0,resolveValues=core_slice.call(arguments),length=resolveValues.length,remaining=length!==1||(subordinate&&jQuery.isFunction(subordinate.promise))?length:0,deferred=remaining===1?subordinate:jQuery.Deferred(),updateFunc=function(i,contexts,values){return function(value){contexts[i]=this;values[i]=arguments.length>1?core_slice.call(arguments):value;if(values===progressValues){deferred.notifyWith(contexts,values);}else if(!(--remaining)){deferred.resolveWith(contexts,values);}};},progressValues,progressContexts,resolveContexts;if(length>1){progressValues=new Array(length);progressContexts=new Array(length);resolveContexts=new Array(length);for(;i<length;i++){if(resolveValues[i]&&jQuery.isFunction(resolveValues[i].promise)){resolveValues[i].promise().done(updateFunc(i,resolveContexts,resolveValues)).fail(deferred.reject).progress(updateFunc(i,progressContexts,progressValues));}else{--remaining;}}}
if(!remaining){deferred.resolveWith(resolveContexts,resolveValues);}
return deferred.promise();}});jQuery.support=(function(){var support,all,a,select,opt,input,fragment,eventName,i,isSupported,clickFn,div=document.createElement("div");div.setAttribute("className","t");div.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";all=div.getElementsByTagName("*");a=div.getElementsByTagName("a")[0];if(!all||!a||!all.length){return{};}
select=document.createElement("select");opt=select.appendChild(document.createElement("option"));input=div.getElementsByTagName("input")[0];a.style.cssText="top:1px;float:left;opacity:.5";support={leadingWhitespace:(div.firstChild.nodeType===3),tbody:!div.getElementsByTagName("tbody").length,htmlSerialize:!!div.getElementsByTagName("link").length,style:/top/.test(a.getAttribute("style")),hrefNormalized:(a.getAttribute("href")==="/a"),opacity:/^0.5/.test(a.style.opacity),cssFloat:!!a.style.cssFloat,checkOn:(input.value==="on"),optSelected:opt.selected,getSetAttribute:div.className!=="t",enctype:!!document.createElement("form").enctype,html5Clone:document.createElement("nav").cloneNode(true).outerHTML!=="<:nav></:nav>",boxModel:(document.compatMode==="CSS1Compat"),submitBubbles:true,changeBubbles:true,focusinBubbles:false,deleteExpando:true,noCloneEvent:true,inlineBlockNeedsLayout:false,shrinkWrapBlocks:false,reliableMarginRight:true,boxSizingReliable:true,pixelPosition:false};input.checked=true;support.noCloneChecked=input.cloneNode(true).checked;select.disabled=true;support.optDisabled=!opt.disabled;try{delete div.test;}catch(e){support.deleteExpando=false;}
if(!div.addEventListener&&div.attachEvent&&div.fireEvent){div.attachEvent("onclick",clickFn=function(){support.noCloneEvent=false;});div.cloneNode(true).fireEvent("onclick");div.detachEvent("onclick",clickFn);}
input=document.createElement("input");input.value="t";input.setAttribute("type","radio");support.radioValue=input.value==="t";input.setAttribute("checked","checked");input.setAttribute("name","t");div.appendChild(input);fragment=document.createDocumentFragment();fragment.appendChild(div.lastChild);support.checkClone=fragment.cloneNode(true).cloneNode(true).lastChild.checked;support.appendChecked=input.checked;fragment.removeChild(input);fragment.appendChild(div);if(div.attachEvent){for(i in{submit:true,change:true,focusin:true}){eventName="on"+i;isSupported=(eventName in div);if(!isSupported){div.setAttribute(eventName,"return;");isSupported=(typeof div[eventName]==="function");}
support[i+"Bubbles"]=isSupported;}}
jQuery(function(){var container,div,tds,marginDiv,divReset="padding:0;margin:0;border:0;display:block;overflow:hidden;",body=document.getElementsByTagName("body")[0];if(!body){return;}
container=document.createElement("div");container.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px";body.insertBefore(container,body.firstChild);div=document.createElement("div");container.appendChild(div);div.innerHTML="<table><tr><td></td><td>t</td></tr></table>";tds=div.getElementsByTagName("td");tds[0].style.cssText="padding:0;margin:0;border:0;display:none";isSupported=(tds[0].offsetHeight===0);tds[0].style.display="";tds[1].style.display="none";support.reliableHiddenOffsets=isSupported&&(tds[0].offsetHeight===0);div.innerHTML="";div.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";support.boxSizing=(div.offsetWidth===4);support.doesNotIncludeMarginInBodyOffset=(body.offsetTop!==1);if(window.getComputedStyle){support.pixelPosition=(window.getComputedStyle(div,null)||{}).top!=="1%";support.boxSizingReliable=(window.getComputedStyle(div,null)||{width:"4px"}).width==="4px";marginDiv=document.createElement("div");marginDiv.style.cssText=div.style.cssText=divReset;marginDiv.style.marginRight=marginDiv.style.width="0";div.style.width="1px";div.appendChild(marginDiv);support.reliableMarginRight=!parseFloat((window.getComputedStyle(marginDiv,null)||{}).marginRight);}
if(typeof div.style.zoom!=="undefined"){div.innerHTML="";div.style.cssText=divReset+"width:1px;padding:1px;display:inline;zoom:1";support.inlineBlockNeedsLayout=(div.offsetWidth===3);div.style.display="block";div.style.overflow="visible";div.innerHTML="<div></div>";div.firstChild.style.width="5px";support.shrinkWrapBlocks=(div.offsetWidth!==3);container.style.zoom=1;}
body.removeChild(container);container=div=tds=marginDiv=null;});fragment.removeChild(div);all=a=select=opt=input=fragment=div=null;return support;})();var rbrace=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,rmultiDash=/([A-Z])/g;jQuery.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(jQuery.fn.jquery+Math.random()).replace(/\D/g,""),noData:{"embed":true,"object":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000","applet":true},hasData:function(elem){elem=elem.nodeType?jQuery.cache[elem[jQuery.expando]]:elem[jQuery.expando];return!!elem&&!isEmptyDataObject(elem);},data:function(elem,name,data,pvt){if(!jQuery.acceptData(elem)){return;}
var thisCache,ret,internalKey=jQuery.expando,getByName=typeof name==="string",isNode=elem.nodeType,cache=isNode?jQuery.cache:elem,id=isNode?elem[internalKey]:elem[internalKey]&&internalKey;if((!id||!cache[id]||(!pvt&&!cache[id].data))&&getByName&&data===undefined){return;}
if(!id){if(isNode){elem[internalKey]=id=jQuery.deletedIds.pop()||jQuery.guid++;}else{id=internalKey;}}
if(!cache[id]){cache[id]={};if(!isNode){cache[id].toJSON=jQuery.noop;}}
if(typeof name==="object"||typeof name==="function"){if(pvt){cache[id]=jQuery.extend(cache[id],name);}else{cache[id].data=jQuery.extend(cache[id].data,name);}}
thisCache=cache[id];if(!pvt){if(!thisCache.data){thisCache.data={};}
thisCache=thisCache.data;}
if(data!==undefined){thisCache[jQuery.camelCase(name)]=data;}
if(getByName){ret=thisCache[name];if(ret==null){ret=thisCache[jQuery.camelCase(name)];}}else{ret=thisCache;}
return ret;},removeData:function(elem,name,pvt){if(!jQuery.acceptData(elem)){return;}
var thisCache,i,l,isNode=elem.nodeType,cache=isNode?jQuery.cache:elem,id=isNode?elem[jQuery.expando]:jQuery.expando;if(!cache[id]){return;}
if(name){thisCache=pvt?cache[id]:cache[id].data;if(thisCache){if(!jQuery.isArray(name)){if(name in thisCache){name=[name];}else{name=jQuery.camelCase(name);if(name in thisCache){name=[name];}else{name=name.split(" ");}}}
for(i=0,l=name.length;i<l;i++){delete thisCache[name[i]];}
if(!(pvt?isEmptyDataObject:jQuery.isEmptyObject)(thisCache)){return;}}}
if(!pvt){delete cache[id].data;if(!isEmptyDataObject(cache[id])){return;}}
if(isNode){jQuery.cleanData([elem],true);}else if(jQuery.support.deleteExpando||cache!=cache.window){delete cache[id];}else{cache[id]=null;}},_data:function(elem,name,data){return jQuery.data(elem,name,data,true);},acceptData:function(elem){var noData=elem.nodeName&&jQuery.noData[elem.nodeName.toLowerCase()];return!noData||noData!==true&&elem.getAttribute("classid")===noData;}});jQuery.fn.extend({data:function(key,value){var parts,part,attr,name,l,elem=this[0],i=0,data=null;if(key===undefined){if(this.length){data=jQuery.data(elem);if(elem.nodeType===1&&!jQuery._data(elem,"parsedAttrs")){attr=elem.attributes;for(l=attr.length;i<l;i++){name=attr[i].name;if(!name.indexOf("data-")){name=jQuery.camelCase(name.substring(5));dataAttr(elem,name,data[name]);}}
jQuery._data(elem,"parsedAttrs",true);}}
return data;}
if(typeof key==="object"){return this.each(function(){jQuery.data(this,key);});}
parts=key.split(".",2);parts[1]=parts[1]?"."+parts[1]:"";part=parts[1]+"!";return jQuery.access(this,function(value){if(value===undefined){data=this.triggerHandler("getData"+part,[parts[0]]);if(data===undefined&&elem){data=jQuery.data(elem,key);data=dataAttr(elem,key,data);}
return data===undefined&&parts[1]?this.data(parts[0]):data;}
parts[1]=value;this.each(function(){var self=jQuery(this);self.triggerHandler("setData"+part,parts);jQuery.data(this,key,value);self.triggerHandler("changeData"+part,parts);});},null,value,arguments.length>1,null,false);},removeData:function(key){return this.each(function(){jQuery.removeData(this,key);});}});function dataAttr(elem,key,data){if(data===undefined&&elem.nodeType===1){var name="data-"+key.replace(rmultiDash,"-$1").toLowerCase();data=elem.getAttribute(name);if(typeof data==="string"){try{data=data==="true"?true:data==="false"?false:data==="null"?null:+data+""===data?+data:rbrace.test(data)?jQuery.parseJSON(data):data;}catch(e){}
jQuery.data(elem,key,data);}else{data=undefined;}}
return data;}
function isEmptyDataObject(obj){var name;for(name in obj){if(name==="data"&&jQuery.isEmptyObject(obj[name])){continue;}
if(name!=="toJSON"){return false;}}
return true;}
jQuery.extend({queue:function(elem,type,data){var queue;if(elem){type=(type||"fx")+"queue";queue=jQuery._data(elem,type);if(data){if(!queue||jQuery.isArray(data)){queue=jQuery._data(elem,type,jQuery.makeArray(data));}else{queue.push(data);}}
return queue||[];}},dequeue:function(elem,type){type=type||"fx";var queue=jQuery.queue(elem,type),startLength=queue.length,fn=queue.shift(),hooks=jQuery._queueHooks(elem,type),next=function(){jQuery.dequeue(elem,type);};if(fn==="inprogress"){fn=queue.shift();startLength--;}
if(fn){if(type==="fx"){queue.unshift("inprogress");}
delete hooks.stop;fn.call(elem,next,hooks);}
if(!startLength&&hooks){hooks.empty.fire();}},_queueHooks:function(elem,type){var key=type+"queueHooks";return jQuery._data(elem,key)||jQuery._data(elem,key,{empty:jQuery.Callbacks("once memory").add(function(){jQuery.removeData(elem,type+"queue",true);jQuery.removeData(elem,key,true);})});}});jQuery.fn.extend({queue:function(type,data){var setter=2;if(typeof type!=="string"){data=type;type="fx";setter--;}
if(arguments.length<setter){return jQuery.queue(this[0],type);}
return data===undefined?this:this.each(function(){var queue=jQuery.queue(this,type,data);jQuery._queueHooks(this,type);if(type==="fx"&&queue[0]!=="inprogress"){jQuery.dequeue(this,type);}});},dequeue:function(type){return this.each(function(){jQuery.dequeue(this,type);});},delay:function(time,type){time=jQuery.fx?jQuery.fx.speeds[time]||time:time;type=type||"fx";return this.queue(type,function(next,hooks){var timeout=setTimeout(next,time);hooks.stop=function(){clearTimeout(timeout);};});},clearQueue:function(type){return this.queue(type||"fx",[]);},promise:function(type,obj){var tmp,count=1,defer=jQuery.Deferred(),elements=this,i=this.length,resolve=function(){if(!(--count)){defer.resolveWith(elements,[elements]);}};if(typeof type!=="string"){obj=type;type=undefined;}
type=type||"fx";while(i--){tmp=jQuery._data(elements[i],type+"queueHooks");if(tmp&&tmp.empty){count++;tmp.empty.add(resolve);}}
resolve();return defer.promise(obj);}});var nodeHook,boolHook,fixSpecified,rclass=/[\t\r\n]/g,rreturn=/\r/g,rtype=/^(?:button|input)$/i,rfocusable=/^(?:button|input|object|select|textarea)$/i,rclickable=/^a(?:rea|)$/i,rboolean=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,getSetAttribute=jQuery.support.getSetAttribute;jQuery.fn.extend({attr:function(name,value){return jQuery.access(this,jQuery.attr,name,value,arguments.length>1);},removeAttr:function(name){return this.each(function(){jQuery.removeAttr(this,name);});},prop:function(name,value){return jQuery.access(this,jQuery.prop,name,value,arguments.length>1);},removeProp:function(name){name=jQuery.propFix[name]||name;return this.each(function(){try{this[name]=undefined;delete this[name];}catch(e){}});},addClass:function(value){var classNames,i,l,elem,setClass,c,cl;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).addClass(value.call(this,j,this.className));});}
if(value&&typeof value==="string"){classNames=value.split(core_rspace);for(i=0,l=this.length;i<l;i++){elem=this[i];if(elem.nodeType===1){if(!elem.className&&classNames.length===1){elem.className=value;}else{setClass=" "+elem.className+" ";for(c=0,cl=classNames.length;c<cl;c++){if(setClass.indexOf(" "+classNames[c]+" ")<0){setClass+=classNames[c]+" ";}}
elem.className=jQuery.trim(setClass);}}}}
return this;},removeClass:function(value){var removes,className,elem,c,cl,i,l;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).removeClass(value.call(this,j,this.className));});}
if((value&&typeof value==="string")||value===undefined){removes=(value||"").split(core_rspace);for(i=0,l=this.length;i<l;i++){elem=this[i];if(elem.nodeType===1&&elem.className){className=(" "+elem.className+" ").replace(rclass," ");for(c=0,cl=removes.length;c<cl;c++){while(className.indexOf(" "+removes[c]+" ")>=0){className=className.replace(" "+removes[c]+" "," ");}}
elem.className=value?jQuery.trim(className):"";}}}
return this;},toggleClass:function(value,stateVal){var type=typeof value,isBool=typeof stateVal==="boolean";if(jQuery.isFunction(value)){return this.each(function(i){jQuery(this).toggleClass(value.call(this,i,this.className,stateVal),stateVal);});}
return this.each(function(){if(type==="string"){var className,i=0,self=jQuery(this),state=stateVal,classNames=value.split(core_rspace);while((className=classNames[i++])){state=isBool?state:!self.hasClass(className);self[state?"addClass":"removeClass"](className);}}else if(type==="undefined"||type==="boolean"){if(this.className){jQuery._data(this,"__className__",this.className);}
this.className=this.className||value===false?"":jQuery._data(this,"__className__")||"";}});},hasClass:function(selector){var className=" "+selector+" ",i=0,l=this.length;for(;i<l;i++){if(this[i].nodeType===1&&(" "+this[i].className+" ").replace(rclass," ").indexOf(className)>=0){return true;}}
return false;},val:function(value){var hooks,ret,isFunction,elem=this[0];if(!arguments.length){if(elem){hooks=jQuery.valHooks[elem.type]||jQuery.valHooks[elem.nodeName.toLowerCase()];if(hooks&&"get"in hooks&&(ret=hooks.get(elem,"value"))!==undefined){return ret;}
ret=elem.value;return typeof ret==="string"?ret.replace(rreturn,""):ret==null?"":ret;}
return;}
isFunction=jQuery.isFunction(value);return this.each(function(i){var val,self=jQuery(this);if(this.nodeType!==1){return;}
if(isFunction){val=value.call(this,i,self.val());}else{val=value;}
if(val==null){val="";}else if(typeof val==="number"){val+="";}else if(jQuery.isArray(val)){val=jQuery.map(val,function(value){return value==null?"":value+"";});}
hooks=jQuery.valHooks[this.type]||jQuery.valHooks[this.nodeName.toLowerCase()];if(!hooks||!("set"in hooks)||hooks.set(this,val,"value")===undefined){this.value=val;}});}});jQuery.extend({valHooks:{option:{get:function(elem){var val=elem.attributes.value;return!val||val.specified?elem.value:elem.text;}},select:{get:function(elem){var value,option,options=elem.options,index=elem.selectedIndex,one=elem.type==="select-one"||index<0,values=one?null:[],max=one?index+1:options.length,i=index<0?max:one?index:0;for(;i<max;i++){option=options[i];if((option.selected||i===index)&&(jQuery.support.optDisabled?!option.disabled:option.getAttribute("disabled")===null)&&(!option.parentNode.disabled||!jQuery.nodeName(option.parentNode,"optgroup"))){value=jQuery(option).val();if(one){return value;}
values.push(value);}}
return values;},set:function(elem,value){var values=jQuery.makeArray(value);jQuery(elem).find("option").each(function(){this.selected=jQuery.inArray(jQuery(this).val(),values)>=0;});if(!values.length){elem.selectedIndex=-1;}
return values;}}},attrFn:{},attr:function(elem,name,value,pass){var ret,hooks,notxml,nType=elem.nodeType;if(!elem||nType===3||nType===8||nType===2){return;}
if(pass&&jQuery.isFunction(jQuery.fn[name])){return jQuery(elem)[name](value);}
if(typeof elem.getAttribute==="undefined"){return jQuery.prop(elem,name,value);}
notxml=nType!==1||!jQuery.isXMLDoc(elem);if(notxml){name=name.toLowerCase();hooks=jQuery.attrHooks[name]||(rboolean.test(name)?boolHook:nodeHook);}
if(value!==undefined){if(value===null){jQuery.removeAttr(elem,name);return;}else if(hooks&&"set"in hooks&&notxml&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}else{elem.setAttribute(name,value+"");return value;}}else if(hooks&&"get"in hooks&&notxml&&(ret=hooks.get(elem,name))!==null){return ret;}else{ret=elem.getAttribute(name);return ret===null?undefined:ret;}},removeAttr:function(elem,value){var propName,attrNames,name,isBool,i=0;if(value&&elem.nodeType===1){attrNames=value.split(core_rspace);for(;i<attrNames.length;i++){name=attrNames[i];if(name){propName=jQuery.propFix[name]||name;isBool=rboolean.test(name);if(!isBool){jQuery.attr(elem,name,"");}
elem.removeAttribute(getSetAttribute?name:propName);if(isBool&&propName in elem){elem[propName]=false;}}}}},attrHooks:{type:{set:function(elem,value){if(rtype.test(elem.nodeName)&&elem.parentNode){jQuery.error("type property can't be changed");}else if(!jQuery.support.radioValue&&value==="radio"&&jQuery.nodeName(elem,"input")){var val=elem.value;elem.setAttribute("type",value);if(val){elem.value=val;}
return value;}}},value:{get:function(elem,name){if(nodeHook&&jQuery.nodeName(elem,"button")){return nodeHook.get(elem,name);}
return name in elem?elem.value:null;},set:function(elem,value,name){if(nodeHook&&jQuery.nodeName(elem,"button")){return nodeHook.set(elem,value,name);}
elem.value=value;}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(elem,name,value){var ret,hooks,notxml,nType=elem.nodeType;if(!elem||nType===3||nType===8||nType===2){return;}
notxml=nType!==1||!jQuery.isXMLDoc(elem);if(notxml){name=jQuery.propFix[name]||name;hooks=jQuery.propHooks[name];}
if(value!==undefined){if(hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}else{return(elem[name]=value);}}else{if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}else{return elem[name];}}},propHooks:{tabIndex:{get:function(elem){var attributeNode=elem.getAttributeNode("tabindex");return attributeNode&&attributeNode.specified?parseInt(attributeNode.value,10):rfocusable.test(elem.nodeName)||rclickable.test(elem.nodeName)&&elem.href?0:undefined;}}}});boolHook={get:function(elem,name){var attrNode,property=jQuery.prop(elem,name);return property===true||typeof property!=="boolean"&&(attrNode=elem.getAttributeNode(name))&&attrNode.nodeValue!==false?name.toLowerCase():undefined;},set:function(elem,value,name){var propName;if(value===false){jQuery.removeAttr(elem,name);}else{propName=jQuery.propFix[name]||name;if(propName in elem){elem[propName]=true;}
elem.setAttribute(name,name.toLowerCase());}
return name;}};if(!getSetAttribute){fixSpecified={name:true,id:true,coords:true};nodeHook=jQuery.valHooks.button={get:function(elem,name){var ret;ret=elem.getAttributeNode(name);return ret&&(fixSpecified[name]?ret.value!=="":ret.specified)?ret.value:undefined;},set:function(elem,value,name){var ret=elem.getAttributeNode(name);if(!ret){ret=document.createAttribute(name);elem.setAttributeNode(ret);}
return(ret.value=value+"");}};jQuery.each(["width","height"],function(i,name){jQuery.attrHooks[name]=jQuery.extend(jQuery.attrHooks[name],{set:function(elem,value){if(value===""){elem.setAttribute(name,"auto");return value;}}});});jQuery.attrHooks.contenteditable={get:nodeHook.get,set:function(elem,value,name){if(value===""){value="false";}
nodeHook.set(elem,value,name);}};}
if(!jQuery.support.hrefNormalized){jQuery.each(["href","src","width","height"],function(i,name){jQuery.attrHooks[name]=jQuery.extend(jQuery.attrHooks[name],{get:function(elem){var ret=elem.getAttribute(name,2);return ret===null?undefined:ret;}});});}
if(!jQuery.support.style){jQuery.attrHooks.style={get:function(elem){return elem.style.cssText.toLowerCase()||undefined;},set:function(elem,value){return(elem.style.cssText=value+"");}};}
if(!jQuery.support.optSelected){jQuery.propHooks.selected=jQuery.extend(jQuery.propHooks.selected,{get:function(elem){var parent=elem.parentNode;if(parent){parent.selectedIndex;if(parent.parentNode){parent.parentNode.selectedIndex;}}
return null;}});}
if(!jQuery.support.enctype){jQuery.propFix.enctype="encoding";}
if(!jQuery.support.checkOn){jQuery.each(["radio","checkbox"],function(){jQuery.valHooks[this]={get:function(elem){return elem.getAttribute("value")===null?"on":elem.value;}};});}
jQuery.each(["radio","checkbox"],function(){jQuery.valHooks[this]=jQuery.extend(jQuery.valHooks[this],{set:function(elem,value){if(jQuery.isArray(value)){return(elem.checked=jQuery.inArray(jQuery(elem).val(),value)>=0);}}});});var rformElems=/^(?:textarea|input|select)$/i,rtypenamespace=/^([^\.]*|)(?:\.(.+)|)$/,rhoverHack=/(?:^|\s)hover(\.\S+|)\b/,rkeyEvent=/^key/,rmouseEvent=/^(?:mouse|contextmenu)|click/,rfocusMorph=/^(?:focusinfocus|focusoutblur)$/,hoverHack=function(events){return jQuery.event.special.hover?events:events.replace(rhoverHack,"mouseenter$1 mouseleave$1");};jQuery.event={add:function(elem,types,handler,data,selector){var elemData,eventHandle,events,t,tns,type,namespaces,handleObj,handleObjIn,handlers,special;if(elem.nodeType===3||elem.nodeType===8||!types||!handler||!(elemData=jQuery._data(elem))){return;}
if(handler.handler){handleObjIn=handler;handler=handleObjIn.handler;selector=handleObjIn.selector;}
if(!handler.guid){handler.guid=jQuery.guid++;}
events=elemData.events;if(!events){elemData.events=events={};}
eventHandle=elemData.handle;if(!eventHandle){elemData.handle=eventHandle=function(e){return typeof jQuery!=="undefined"&&(!e||jQuery.event.triggered!==e.type)?jQuery.event.dispatch.apply(eventHandle.elem,arguments):undefined;};eventHandle.elem=elem;}
types=jQuery.trim(hoverHack(types)).split(" ");for(t=0;t<types.length;t++){tns=rtypenamespace.exec(types[t])||[];type=tns[1];namespaces=(tns[2]||"").split(".").sort();special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;special=jQuery.event.special[type]||{};handleObj=jQuery.extend({type:type,origType:tns[1],data:data,handler:handler,guid:handler.guid,selector:selector,needsContext:selector&&jQuery.expr.match.needsContext.test(selector),namespace:namespaces.join(".")},handleObjIn);handlers=events[type];if(!handlers){handlers=events[type]=[];handlers.delegateCount=0;if(!special.setup||special.setup.call(elem,data,namespaces,eventHandle)===false){if(elem.addEventListener){elem.addEventListener(type,eventHandle,false);}else if(elem.attachEvent){elem.attachEvent("on"+type,eventHandle);}}}
if(special.add){special.add.call(elem,handleObj);if(!handleObj.handler.guid){handleObj.handler.guid=handler.guid;}}
if(selector){handlers.splice(handlers.delegateCount++,0,handleObj);}else{handlers.push(handleObj);}
jQuery.event.global[type]=true;}
elem=null;},global:{},remove:function(elem,types,handler,selector,mappedTypes){var t,tns,type,origType,namespaces,origCount,j,events,special,eventType,handleObj,elemData=jQuery.hasData(elem)&&jQuery._data(elem);if(!elemData||!(events=elemData.events)){return;}
types=jQuery.trim(hoverHack(types||"")).split(" ");for(t=0;t<types.length;t++){tns=rtypenamespace.exec(types[t])||[];type=origType=tns[1];namespaces=tns[2];if(!type){for(type in events){jQuery.event.remove(elem,type+types[t],handler,selector,true);}
continue;}
special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;eventType=events[type]||[];origCount=eventType.length;namespaces=namespaces?new RegExp("(^|\\.)"+namespaces.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(j=0;j<eventType.length;j++){handleObj=eventType[j];if((mappedTypes||origType===handleObj.origType)&&(!handler||handler.guid===handleObj.guid)&&(!namespaces||namespaces.test(handleObj.namespace))&&(!selector||selector===handleObj.selector||selector==="**"&&handleObj.selector)){eventType.splice(j--,1);if(handleObj.selector){eventType.delegateCount--;}
if(special.remove){special.remove.call(elem,handleObj);}}}
if(eventType.length===0&&origCount!==eventType.length){if(!special.teardown||special.teardown.call(elem,namespaces,elemData.handle)===false){jQuery.removeEvent(elem,type,elemData.handle);}
delete events[type];}}
if(jQuery.isEmptyObject(events)){delete elemData.handle;jQuery.removeData(elem,"events",true);}},customEvent:{"getData":true,"setData":true,"changeData":true},trigger:function(event,data,elem,onlyHandlers){if(elem&&(elem.nodeType===3||elem.nodeType===8)){return;}
var cache,exclusive,i,cur,old,ontype,special,handle,eventPath,bubbleType,type=event.type||event,namespaces=[];if(rfocusMorph.test(type+jQuery.event.triggered)){return;}
if(type.indexOf("!")>=0){type=type.slice(0,-1);exclusive=true;}
if(type.indexOf(".")>=0){namespaces=type.split(".");type=namespaces.shift();namespaces.sort();}
if((!elem||jQuery.event.customEvent[type])&&!jQuery.event.global[type]){return;}
event=typeof event==="object"?event[jQuery.expando]?event:new jQuery.Event(type,event):new jQuery.Event(type);event.type=type;event.isTrigger=true;event.exclusive=exclusive;event.namespace=namespaces.join(".");event.namespace_re=event.namespace?new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;ontype=type.indexOf(":")<0?"on"+type:"";if(!elem){cache=jQuery.cache;for(i in cache){if(cache[i].events&&cache[i].events[type]){jQuery.event.trigger(event,data,cache[i].handle.elem,true);}}
return;}
event.result=undefined;if(!event.target){event.target=elem;}
data=data!=null?jQuery.makeArray(data):[];data.unshift(event);special=jQuery.event.special[type]||{};if(special.trigger&&special.trigger.apply(elem,data)===false){return;}
eventPath=[[elem,special.bindType||type]];if(!onlyHandlers&&!special.noBubble&&!jQuery.isWindow(elem)){bubbleType=special.delegateType||type;cur=rfocusMorph.test(bubbleType+type)?elem:elem.parentNode;for(old=elem;cur;cur=cur.parentNode){eventPath.push([cur,bubbleType]);old=cur;}
if(old===(elem.ownerDocument||document)){eventPath.push([old.defaultView||old.parentWindow||window,bubbleType]);}}
for(i=0;i<eventPath.length&&!event.isPropagationStopped();i++){cur=eventPath[i][0];event.type=eventPath[i][1];handle=(jQuery._data(cur,"events")||{})[event.type]&&jQuery._data(cur,"handle");if(handle){handle.apply(cur,data);}
handle=ontype&&cur[ontype];if(handle&&jQuery.acceptData(cur)&&handle.apply&&handle.apply(cur,data)===false){event.preventDefault();}}
event.type=type;if(!onlyHandlers&&!event.isDefaultPrevented()){if((!special._default||special._default.apply(elem.ownerDocument,data)===false)&&!(type==="click"&&jQuery.nodeName(elem,"a"))&&jQuery.acceptData(elem)){if(ontype&&elem[type]&&((type!=="focus"&&type!=="blur")||event.target.offsetWidth!==0)&&!jQuery.isWindow(elem)){old=elem[ontype];if(old){elem[ontype]=null;}
jQuery.event.triggered=type;elem[type]();jQuery.event.triggered=undefined;if(old){elem[ontype]=old;}}}}
return event.result;},dispatch:function(event){event=jQuery.event.fix(event||window.event);var i,j,cur,ret,selMatch,matched,matches,handleObj,sel,related,handlers=((jQuery._data(this,"events")||{})[event.type]||[]),delegateCount=handlers.delegateCount,args=core_slice.call(arguments),run_all=!event.exclusive&&!event.namespace,special=jQuery.event.special[event.type]||{},handlerQueue=[];args[0]=event;event.delegateTarget=this;if(special.preDispatch&&special.preDispatch.call(this,event)===false){return;}
if(delegateCount&&!(event.button&&event.type==="click")){for(cur=event.target;cur!=this;cur=cur.parentNode||this){if(cur.disabled!==true||event.type!=="click"){selMatch={};matches=[];for(i=0;i<delegateCount;i++){handleObj=handlers[i];sel=handleObj.selector;if(selMatch[sel]===undefined){selMatch[sel]=handleObj.needsContext?jQuery(sel,this).index(cur)>=0:jQuery.find(sel,this,null,[cur]).length;}
if(selMatch[sel]){matches.push(handleObj);}}
if(matches.length){handlerQueue.push({elem:cur,matches:matches});}}}}
if(handlers.length>delegateCount){handlerQueue.push({elem:this,matches:handlers.slice(delegateCount)});}
for(i=0;i<handlerQueue.length&&!event.isPropagationStopped();i++){matched=handlerQueue[i];event.currentTarget=matched.elem;for(j=0;j<matched.matches.length&&!event.isImmediatePropagationStopped();j++){handleObj=matched.matches[j];if(run_all||(!event.namespace&&!handleObj.namespace)||event.namespace_re&&event.namespace_re.test(handleObj.namespace)){event.data=handleObj.data;event.handleObj=handleObj;ret=((jQuery.event.special[handleObj.origType]||{}).handle||handleObj.handler).apply(matched.elem,args);if(ret!==undefined){event.result=ret;if(ret===false){event.preventDefault();event.stopPropagation();}}}}}
if(special.postDispatch){special.postDispatch.call(this,event);}
return event.result;},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(event,original){if(event.which==null){event.which=original.charCode!=null?original.charCode:original.keyCode;}
return event;}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(event,original){var eventDoc,doc,body,button=original.button,fromElement=original.fromElement;if(event.pageX==null&&original.clientX!=null){eventDoc=event.target.ownerDocument||document;doc=eventDoc.documentElement;body=eventDoc.body;event.pageX=original.clientX+(doc&&doc.scrollLeft||body&&body.scrollLeft||0)-(doc&&doc.clientLeft||body&&body.clientLeft||0);event.pageY=original.clientY+(doc&&doc.scrollTop||body&&body.scrollTop||0)-(doc&&doc.clientTop||body&&body.clientTop||0);}
if(!event.relatedTarget&&fromElement){event.relatedTarget=fromElement===event.target?original.toElement:fromElement;}
if(!event.which&&button!==undefined){event.which=(button&1?1:(button&2?3:(button&4?2:0)));}
return event;}},fix:function(event){if(event[jQuery.expando]){return event;}
var i,prop,originalEvent=event,fixHook=jQuery.event.fixHooks[event.type]||{},copy=fixHook.props?this.props.concat(fixHook.props):this.props;event=jQuery.Event(originalEvent);for(i=copy.length;i;){prop=copy[--i];event[prop]=originalEvent[prop];}
if(!event.target){event.target=originalEvent.srcElement||document;}
if(event.target.nodeType===3){event.target=event.target.parentNode;}
event.metaKey=!!event.metaKey;return fixHook.filter?fixHook.filter(event,originalEvent):event;},special:{load:{noBubble:true},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(data,namespaces,eventHandle){if(jQuery.isWindow(this)){this.onbeforeunload=eventHandle;}},teardown:function(namespaces,eventHandle){if(this.onbeforeunload===eventHandle){this.onbeforeunload=null;}}}},simulate:function(type,elem,event,bubble){var e=jQuery.extend(new jQuery.Event(),event,{type:type,isSimulated:true,originalEvent:{}});if(bubble){jQuery.event.trigger(e,null,elem);}else{jQuery.event.dispatch.call(elem,e);}
if(e.isDefaultPrevented()){event.preventDefault();}}};jQuery.event.handle=jQuery.event.dispatch;jQuery.removeEvent=document.removeEventListener?function(elem,type,handle){if(elem.removeEventListener){elem.removeEventListener(type,handle,false);}}:function(elem,type,handle){var name="on"+type;if(elem.detachEvent){if(typeof elem[name]==="undefined"){elem[name]=null;}
elem.detachEvent(name,handle);}};jQuery.Event=function(src,props){if(!(this instanceof jQuery.Event)){return new jQuery.Event(src,props);}
if(src&&src.type){this.originalEvent=src;this.type=src.type;this.isDefaultPrevented=(src.defaultPrevented||src.returnValue===false||src.getPreventDefault&&src.getPreventDefault())?returnTrue:returnFalse;}else{this.type=src;}
if(props){jQuery.extend(this,props);}
this.timeStamp=src&&src.timeStamp||jQuery.now();this[jQuery.expando]=true;};function returnFalse(){return false;}
function returnTrue(){return true;}
jQuery.Event.prototype={preventDefault:function(){this.isDefaultPrevented=returnTrue;var e=this.originalEvent;if(!e){return;}
if(e.preventDefault){e.preventDefault();}else{e.returnValue=false;}},stopPropagation:function(){this.isPropagationStopped=returnTrue;var e=this.originalEvent;if(!e){return;}
if(e.stopPropagation){e.stopPropagation();}
e.cancelBubble=true;},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=returnTrue;this.stopPropagation();},isDefaultPrevented:returnFalse,isPropagationStopped:returnFalse,isImmediatePropagationStopped:returnFalse};jQuery.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(orig,fix){jQuery.event.special[orig]={delegateType:fix,bindType:fix,handle:function(event){var ret,target=this,related=event.relatedTarget,handleObj=event.handleObj,selector=handleObj.selector;if(!related||(related!==target&&!jQuery.contains(target,related))){event.type=handleObj.origType;ret=handleObj.handler.apply(this,arguments);event.type=fix;}
return ret;}};});if(!jQuery.support.submitBubbles){jQuery.event.special.submit={setup:function(){if(jQuery.nodeName(this,"form")){return false;}
jQuery.event.add(this,"click._submit keypress._submit",function(e){var elem=e.target,form=jQuery.nodeName(elem,"input")||jQuery.nodeName(elem,"button")?elem.form:undefined;if(form&&!jQuery._data(form,"_submit_attached")){jQuery.event.add(form,"submit._submit",function(event){event._submit_bubble=true;});jQuery._data(form,"_submit_attached",true);}});},postDispatch:function(event){if(event._submit_bubble){delete event._submit_bubble;if(this.parentNode&&!event.isTrigger){jQuery.event.simulate("submit",this.parentNode,event,true);}}},teardown:function(){if(jQuery.nodeName(this,"form")){return false;}
jQuery.event.remove(this,"._submit");}};}
if(!jQuery.support.changeBubbles){jQuery.event.special.change={setup:function(){if(rformElems.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio"){jQuery.event.add(this,"propertychange._change",function(event){if(event.originalEvent.propertyName==="checked"){this._just_changed=true;}});jQuery.event.add(this,"click._change",function(event){if(this._just_changed&&!event.isTrigger){this._just_changed=false;}
jQuery.event.simulate("change",this,event,true);});}
return false;}
jQuery.event.add(this,"beforeactivate._change",function(e){var elem=e.target;if(rformElems.test(elem.nodeName)&&!jQuery._data(elem,"_change_attached")){jQuery.event.add(elem,"change._change",function(event){if(this.parentNode&&!event.isSimulated&&!event.isTrigger){jQuery.event.simulate("change",this.parentNode,event,true);}});jQuery._data(elem,"_change_attached",true);}});},handle:function(event){var elem=event.target;if(this!==elem||event.isSimulated||event.isTrigger||(elem.type!=="radio"&&elem.type!=="checkbox")){return event.handleObj.handler.apply(this,arguments);}},teardown:function(){jQuery.event.remove(this,"._change");return!rformElems.test(this.nodeName);}};}
if(!jQuery.support.focusinBubbles){jQuery.each({focus:"focusin",blur:"focusout"},function(orig,fix){var attaches=0,handler=function(event){jQuery.event.simulate(fix,event.target,jQuery.event.fix(event),true);};jQuery.event.special[fix]={setup:function(){if(attaches++===0){document.addEventListener(orig,handler,true);}},teardown:function(){if(--attaches===0){document.removeEventListener(orig,handler,true);}}};});}
jQuery.fn.extend({on:function(types,selector,data,fn,one){var origFn,type;if(typeof types==="object"){if(typeof selector!=="string"){data=data||selector;selector=undefined;}
for(type in types){this.on(type,selector,data,types[type],one);}
return this;}
if(data==null&&fn==null){fn=selector;data=selector=undefined;}else if(fn==null){if(typeof selector==="string"){fn=data;data=undefined;}else{fn=data;data=selector;selector=undefined;}}
if(fn===false){fn=returnFalse;}else if(!fn){return this;}
if(one===1){origFn=fn;fn=function(event){jQuery().off(event);return origFn.apply(this,arguments);};fn.guid=origFn.guid||(origFn.guid=jQuery.guid++);}
return this.each(function(){jQuery.event.add(this,types,fn,data,selector);});},one:function(types,selector,data,fn){return this.on(types,selector,data,fn,1);},off:function(types,selector,fn){var handleObj,type;if(types&&types.preventDefault&&types.handleObj){handleObj=types.handleObj;jQuery(types.delegateTarget).off(handleObj.namespace?handleObj.origType+"."+handleObj.namespace:handleObj.origType,handleObj.selector,handleObj.handler);return this;}
if(typeof types==="object"){for(type in types){this.off(type,selector,types[type]);}
return this;}
if(selector===false||typeof selector==="function"){fn=selector;selector=undefined;}
if(fn===false){fn=returnFalse;}
return this.each(function(){jQuery.event.remove(this,types,fn,selector);});},bind:function(types,data,fn){return this.on(types,null,data,fn);},unbind:function(types,fn){return this.off(types,null,fn);},live:function(types,data,fn){jQuery(this.context).on(types,this.selector,data,fn);return this;},die:function(types,fn){jQuery(this.context).off(types,this.selector||"**",fn);return this;},delegate:function(selector,types,data,fn){return this.on(types,selector,data,fn);},undelegate:function(selector,types,fn){return arguments.length===1?this.off(selector,"**"):this.off(types,selector||"**",fn);},trigger:function(type,data){return this.each(function(){jQuery.event.trigger(type,data,this);});},triggerHandler:function(type,data){if(this[0]){return jQuery.event.trigger(type,data,this[0],true);}},toggle:function(fn){var args=arguments,guid=fn.guid||jQuery.guid++,i=0,toggler=function(event){var lastToggle=(jQuery._data(this,"lastToggle"+fn.guid)||0)%i;jQuery._data(this,"lastToggle"+fn.guid,lastToggle+1);event.preventDefault();return args[lastToggle].apply(this,arguments)||false;};toggler.guid=guid;while(i<args.length){args[i++].guid=guid;}
return this.click(toggler);},hover:function(fnOver,fnOut){return this.mouseenter(fnOver).mouseleave(fnOut||fnOver);}});jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick "+"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+"change select submit keydown keypress keyup error contextmenu").split(" "),function(i,name){jQuery.fn[name]=function(data,fn){if(fn==null){fn=data;data=null;}
return arguments.length>0?this.on(name,null,data,fn):this.trigger(name);};if(rkeyEvent.test(name)){jQuery.event.fixHooks[name]=jQuery.event.keyHooks;}
if(rmouseEvent.test(name)){jQuery.event.fixHooks[name]=jQuery.event.mouseHooks;}});(function(window,undefined){var cachedruns,assertGetIdNotName,Expr,getText,isXML,contains,compile,sortOrder,hasDuplicate,outermostContext,baseHasDuplicate=true,strundefined="undefined",expando=("sizcache"+Math.random()).replace(".",""),Token=String,document=window.document,docElem=document.documentElement,dirruns=0,done=0,pop=[].pop,push=[].push,slice=[].slice,indexOf=[].indexOf||function(elem){var i=0,len=this.length;for(;i<len;i++){if(this[i]===elem){return i;}}
return-1;},markFunction=function(fn,value){fn[expando]=value==null||value;return fn;},createCache=function(){var cache={},keys=[];return markFunction(function(key,value){if(keys.push(key)>Expr.cacheLength){delete cache[keys.shift()];}
return(cache[key+" "]=value);},cache);},classCache=createCache(),tokenCache=createCache(),compilerCache=createCache(),whitespace="[\\x20\\t\\r\\n\\f]",characterEncoding="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",identifier=characterEncoding.replace("w","w#"),operators="([*^$|!~]?=)",attributes="\\["+whitespace+"*("+characterEncoding+")"+whitespace+"*(?:"+operators+whitespace+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+identifier+")|)|)"+whitespace+"*\\]",pseudos=":("+characterEncoding+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+attributes+")|[^:]|\\\\.)*|.*))\\)|)",pos=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+whitespace+"*((?:-\\d)?\\d*)"+whitespace+"*\\)|)(?=[^-]|$)",rtrim=new RegExp("^"+whitespace+"+|((?:^|[^\\\\])(?:\\\\.)*)"+whitespace+"+$","g"),rcomma=new RegExp("^"+whitespace+"*,"+whitespace+"*"),rcombinators=new RegExp("^"+whitespace+"*([\\x20\\t\\r\\n\\f>+~])"+whitespace+"*"),rpseudo=new RegExp(pseudos),rquickExpr=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,rnot=/^:not/,rsibling=/[\x20\t\r\n\f]*[+~]/,rendsWithNot=/:not\($/,rheader=/h\d/i,rinputs=/input|select|textarea|button/i,rbackslash=/\\(?!\\)/g,matchExpr={"ID":new RegExp("^#("+characterEncoding+")"),"CLASS":new RegExp("^\\.("+characterEncoding+")"),"NAME":new RegExp("^\\[name=['\"]?("+characterEncoding+")['\"]?\\]"),"TAG":new RegExp("^("+characterEncoding.replace("w","w*")+")"),"ATTR":new RegExp("^"+attributes),"PSEUDO":new RegExp("^"+pseudos),"POS":new RegExp(pos,"i"),"CHILD":new RegExp("^:(only|nth|first|last)-child(?:\\("+whitespace+"*(even|odd|(([+-]|)(\\d*)n|)"+whitespace+"*(?:([+-]|)"+whitespace+"*(\\d+)|))"+whitespace+"*\\)|)","i"),"needsContext":new RegExp("^"+whitespace+"*[>+~]|"+pos,"i")},assert=function(fn){var div=document.createElement("div");try{return fn(div);}catch(e){return false;}finally{div=null;}},assertTagNameNoComments=assert(function(div){div.appendChild(document.createComment(""));return!div.getElementsByTagName("*").length;}),assertHrefNotNormalized=assert(function(div){div.innerHTML="<a href='#'></a>";return div.firstChild&&typeof div.firstChild.getAttribute!==strundefined&&div.firstChild.getAttribute("href")==="#";}),assertAttributes=assert(function(div){div.innerHTML="<select></select>";var type=typeof div.lastChild.getAttribute("multiple");return type!=="boolean"&&type!=="string";}),assertUsableClassName=assert(function(div){div.innerHTML="<div class='hidden e'></div><div class='hidden'></div>";if(!div.getElementsByClassName||!div.getElementsByClassName("e").length){return false;}
div.lastChild.className="e";return div.getElementsByClassName("e").length===2;}),assertUsableName=assert(function(div){div.id=expando+0;div.innerHTML="<a name='"+expando+"'></a><div name='"+expando+"'></div>";docElem.insertBefore(div,docElem.firstChild);var pass=document.getElementsByName&&document.getElementsByName(expando).length===2+
document.getElementsByName(expando+0).length;assertGetIdNotName=!document.getElementById(expando);docElem.removeChild(div);return pass;});try{slice.call(docElem.childNodes,0)[0].nodeType;}catch(e){slice=function(i){var elem,results=[];for(;(elem=this[i]);i++){results.push(elem);}
return results;};}
function Sizzle(selector,context,results,seed){results=results||[];context=context||document;var match,elem,xml,m,nodeType=context.nodeType;if(!selector||typeof selector!=="string"){return results;}
if(nodeType!==1&&nodeType!==9){return[];}
xml=isXML(context);if(!xml&&!seed){if((match=rquickExpr.exec(selector))){if((m=match[1])){if(nodeType===9){elem=context.getElementById(m);if(elem&&elem.parentNode){if(elem.id===m){results.push(elem);return results;}}else{return results;}}else{if(context.ownerDocument&&(elem=context.ownerDocument.getElementById(m))&&contains(context,elem)&&elem.id===m){results.push(elem);return results;}}}else if(match[2]){push.apply(results,slice.call(context.getElementsByTagName(selector),0));return results;}else if((m=match[3])&&assertUsableClassName&&context.getElementsByClassName){push.apply(results,slice.call(context.getElementsByClassName(m),0));return results;}}}
return select(selector.replace(rtrim,"$1"),context,results,seed,xml);}
Sizzle.matches=function(expr,elements){return Sizzle(expr,null,null,elements);};Sizzle.matchesSelector=function(elem,expr){return Sizzle(expr,null,null,[elem]).length>0;};function createInputPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type===type;};}
function createButtonPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return(name==="input"||name==="button")&&elem.type===type;};}
function createPositionalPseudo(fn){return markFunction(function(argument){argument=+argument;return markFunction(function(seed,matches){var j,matchIndexes=fn([],seed.length,argument),i=matchIndexes.length;while(i--){if(seed[(j=matchIndexes[i])]){seed[j]=!(matches[j]=seed[j]);}}});});}
getText=Sizzle.getText=function(elem){var node,ret="",i=0,nodeType=elem.nodeType;if(nodeType){if(nodeType===1||nodeType===9||nodeType===11){if(typeof elem.textContent==="string"){return elem.textContent;}else{for(elem=elem.firstChild;elem;elem=elem.nextSibling){ret+=getText(elem);}}}else if(nodeType===3||nodeType===4){return elem.nodeValue;}}else{for(;(node=elem[i]);i++){ret+=getText(node);}}
return ret;};isXML=Sizzle.isXML=function(elem){var documentElement=elem&&(elem.ownerDocument||elem).documentElement;return documentElement?documentElement.nodeName!=="HTML":false;};contains=Sizzle.contains=docElem.contains?function(a,b){var adown=a.nodeType===9?a.documentElement:a,bup=b&&b.parentNode;return a===bup||!!(bup&&bup.nodeType===1&&adown.contains&&adown.contains(bup));}:docElem.compareDocumentPosition?function(a,b){return b&&!!(a.compareDocumentPosition(b)&16);}:function(a,b){while((b=b.parentNode)){if(b===a){return true;}}
return false;};Sizzle.attr=function(elem,name){var val,xml=isXML(elem);if(!xml){name=name.toLowerCase();}
if((val=Expr.attrHandle[name])){return val(elem);}
if(xml||assertAttributes){return elem.getAttribute(name);}
val=elem.getAttributeNode(name);return val?typeof elem[name]==="boolean"?elem[name]?name:null:val.specified?val.value:null:null;};Expr=Sizzle.selectors={cacheLength:50,createPseudo:markFunction,match:matchExpr,attrHandle:assertHrefNotNormalized?{}:{"href":function(elem){return elem.getAttribute("href",2);},"type":function(elem){return elem.getAttribute("type");}},find:{"ID":assertGetIdNotName?function(id,context,xml){if(typeof context.getElementById!==strundefined&&!xml){var m=context.getElementById(id);return m&&m.parentNode?[m]:[];}}:function(id,context,xml){if(typeof context.getElementById!==strundefined&&!xml){var m=context.getElementById(id);return m?m.id===id||typeof m.getAttributeNode!==strundefined&&m.getAttributeNode("id").value===id?[m]:undefined:[];}},"TAG":assertTagNameNoComments?function(tag,context){if(typeof context.getElementsByTagName!==strundefined){return context.getElementsByTagName(tag);}}:function(tag,context){var results=context.getElementsByTagName(tag);if(tag==="*"){var elem,tmp=[],i=0;for(;(elem=results[i]);i++){if(elem.nodeType===1){tmp.push(elem);}}
return tmp;}
return results;},"NAME":assertUsableName&&function(tag,context){if(typeof context.getElementsByName!==strundefined){return context.getElementsByName(name);}},"CLASS":assertUsableClassName&&function(className,context,xml){if(typeof context.getElementsByClassName!==strundefined&&!xml){return context.getElementsByClassName(className);}}},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{"ATTR":function(match){match[1]=match[1].replace(rbackslash,"");match[3]=(match[4]||match[5]||"").replace(rbackslash,"");if(match[2]==="~="){match[3]=" "+match[3]+" ";}
return match.slice(0,4);},"CHILD":function(match){match[1]=match[1].toLowerCase();if(match[1]==="nth"){if(!match[2]){Sizzle.error(match[0]);}
match[3]=+(match[3]?match[4]+(match[5]||1):2*(match[2]==="even"||match[2]==="odd"));match[4]=+((match[6]+match[7])||match[2]==="odd");}else if(match[2]){Sizzle.error(match[0]);}
return match;},"PSEUDO":function(match){var unquoted,excess;if(matchExpr["CHILD"].test(match[0])){return null;}
if(match[3]){match[2]=match[3];}else if((unquoted=match[4])){if(rpseudo.test(unquoted)&&(excess=tokenize(unquoted,true))&&(excess=unquoted.indexOf(")",unquoted.length-excess)-unquoted.length)){unquoted=unquoted.slice(0,excess);match[0]=match[0].slice(0,excess);}
match[2]=unquoted;}
return match.slice(0,3);}},filter:{"ID":assertGetIdNotName?function(id){id=id.replace(rbackslash,"");return function(elem){return elem.getAttribute("id")===id;};}:function(id){id=id.replace(rbackslash,"");return function(elem){var node=typeof elem.getAttributeNode!==strundefined&&elem.getAttributeNode("id");return node&&node.value===id;};},"TAG":function(nodeName){if(nodeName==="*"){return function(){return true;};}
nodeName=nodeName.replace(rbackslash,"").toLowerCase();return function(elem){return elem.nodeName&&elem.nodeName.toLowerCase()===nodeName;};},"CLASS":function(className){var pattern=classCache[expando][className+" "];return pattern||(pattern=new RegExp("(^|"+whitespace+")"+className+"("+whitespace+"|$)"))&&classCache(className,function(elem){return pattern.test(elem.className||(typeof elem.getAttribute!==strundefined&&elem.getAttribute("class"))||"");});},"ATTR":function(name,operator,check){return function(elem,context){var result=Sizzle.attr(elem,name);if(result==null){return operator==="!=";}
if(!operator){return true;}
result+="";return operator==="="?result===check:operator==="!="?result!==check:operator==="^="?check&&result.indexOf(check)===0:operator==="*="?check&&result.indexOf(check)>-1:operator==="$="?check&&result.substr(result.length-check.length)===check:operator==="~="?(" "+result+" ").indexOf(check)>-1:operator==="|="?result===check||result.substr(0,check.length+1)===check+"-":false;};},"CHILD":function(type,argument,first,last){if(type==="nth"){return function(elem){var node,diff,parent=elem.parentNode;if(first===1&&last===0){return true;}
if(parent){diff=0;for(node=parent.firstChild;node;node=node.nextSibling){if(node.nodeType===1){diff++;if(elem===node){break;}}}}
diff-=last;return diff===first||(diff%first===0&&diff/first>=0);};}
return function(elem){var node=elem;switch(type){case"only":case"first":while((node=node.previousSibling)){if(node.nodeType===1){return false;}}
if(type==="first"){return true;}
node=elem;case"last":while((node=node.nextSibling)){if(node.nodeType===1){return false;}}
return true;}};},"PSEUDO":function(pseudo,argument){var args,fn=Expr.pseudos[pseudo]||Expr.setFilters[pseudo.toLowerCase()]||Sizzle.error("unsupported pseudo: "+pseudo);if(fn[expando]){return fn(argument);}
if(fn.length>1){args=[pseudo,pseudo,"",argument];return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())?markFunction(function(seed,matches){var idx,matched=fn(seed,argument),i=matched.length;while(i--){idx=indexOf.call(seed,matched[i]);seed[idx]=!(matches[idx]=matched[i]);}}):function(elem){return fn(elem,0,args);};}
return fn;}},pseudos:{"not":markFunction(function(selector){var input=[],results=[],matcher=compile(selector.replace(rtrim,"$1"));return matcher[expando]?markFunction(function(seed,matches,context,xml){var elem,unmatched=matcher(seed,null,xml,[]),i=seed.length;while(i--){if((elem=unmatched[i])){seed[i]=!(matches[i]=elem);}}}):function(elem,context,xml){input[0]=elem;matcher(input,null,xml,results);return!results.pop();};}),"has":markFunction(function(selector){return function(elem){return Sizzle(selector,elem).length>0;};}),"contains":markFunction(function(text){return function(elem){return(elem.textContent||elem.innerText||getText(elem)).indexOf(text)>-1;};}),"enabled":function(elem){return elem.disabled===false;},"disabled":function(elem){return elem.disabled===true;},"checked":function(elem){var nodeName=elem.nodeName.toLowerCase();return(nodeName==="input"&&!!elem.checked)||(nodeName==="option"&&!!elem.selected);},"selected":function(elem){if(elem.parentNode){elem.parentNode.selectedIndex;}
return elem.selected===true;},"parent":function(elem){return!Expr.pseudos["empty"](elem);},"empty":function(elem){var nodeType;elem=elem.firstChild;while(elem){if(elem.nodeName>"@"||(nodeType=elem.nodeType)===3||nodeType===4){return false;}
elem=elem.nextSibling;}
return true;},"header":function(elem){return rheader.test(elem.nodeName);},"text":function(elem){var type,attr;return elem.nodeName.toLowerCase()==="input"&&(type=elem.type)==="text"&&((attr=elem.getAttribute("type"))==null||attr.toLowerCase()===type);},"radio":createInputPseudo("radio"),"checkbox":createInputPseudo("checkbox"),"file":createInputPseudo("file"),"password":createInputPseudo("password"),"image":createInputPseudo("image"),"submit":createButtonPseudo("submit"),"reset":createButtonPseudo("reset"),"button":function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type==="button"||name==="button";},"input":function(elem){return rinputs.test(elem.nodeName);},"focus":function(elem){var doc=elem.ownerDocument;return elem===doc.activeElement&&(!doc.hasFocus||doc.hasFocus())&&!!(elem.type||elem.href||~elem.tabIndex);},"active":function(elem){return elem===elem.ownerDocument.activeElement;},"first":createPositionalPseudo(function(){return[0];}),"last":createPositionalPseudo(function(matchIndexes,length){return[length-1];}),"eq":createPositionalPseudo(function(matchIndexes,length,argument){return[argument<0?argument+length:argument];}),"even":createPositionalPseudo(function(matchIndexes,length){for(var i=0;i<length;i+=2){matchIndexes.push(i);}
return matchIndexes;}),"odd":createPositionalPseudo(function(matchIndexes,length){for(var i=1;i<length;i+=2){matchIndexes.push(i);}
return matchIndexes;}),"lt":createPositionalPseudo(function(matchIndexes,length,argument){for(var i=argument<0?argument+length:argument;--i>=0;){matchIndexes.push(i);}
return matchIndexes;}),"gt":createPositionalPseudo(function(matchIndexes,length,argument){for(var i=argument<0?argument+length:argument;++i<length;){matchIndexes.push(i);}
return matchIndexes;})}};function siblingCheck(a,b,ret){if(a===b){return ret;}
var cur=a.nextSibling;while(cur){if(cur===b){return-1;}
cur=cur.nextSibling;}
return 1;}
sortOrder=docElem.compareDocumentPosition?function(a,b){if(a===b){hasDuplicate=true;return 0;}
return(!a.compareDocumentPosition||!b.compareDocumentPosition?a.compareDocumentPosition:a.compareDocumentPosition(b)&4)?-1:1;}:function(a,b){if(a===b){hasDuplicate=true;return 0;}else if(a.sourceIndex&&b.sourceIndex){return a.sourceIndex-b.sourceIndex;}
var al,bl,ap=[],bp=[],aup=a.parentNode,bup=b.parentNode,cur=aup;if(aup===bup){return siblingCheck(a,b);}else if(!aup){return-1;}else if(!bup){return 1;}
while(cur){ap.unshift(cur);cur=cur.parentNode;}
cur=bup;while(cur){bp.unshift(cur);cur=cur.parentNode;}
al=ap.length;bl=bp.length;for(var i=0;i<al&&i<bl;i++){if(ap[i]!==bp[i]){return siblingCheck(ap[i],bp[i]);}}
return i===al?siblingCheck(a,bp[i],-1):siblingCheck(ap[i],b,1);};[0,0].sort(sortOrder);baseHasDuplicate=!hasDuplicate;Sizzle.uniqueSort=function(results){var elem,duplicates=[],i=1,j=0;hasDuplicate=baseHasDuplicate;results.sort(sortOrder);if(hasDuplicate){for(;(elem=results[i]);i++){if(elem===results[i-1]){j=duplicates.push(i);}}
while(j--){results.splice(duplicates[j],1);}}
return results;};Sizzle.error=function(msg){throw new Error("Syntax error, unrecognized expression: "+msg);};function tokenize(selector,parseOnly){var matched,match,tokens,type,soFar,groups,preFilters,cached=tokenCache[expando][selector+" "];if(cached){return parseOnly?0:cached.slice(0);}
soFar=selector;groups=[];preFilters=Expr.preFilter;while(soFar){if(!matched||(match=rcomma.exec(soFar))){if(match){soFar=soFar.slice(match[0].length)||soFar;}
groups.push(tokens=[]);}
matched=false;if((match=rcombinators.exec(soFar))){tokens.push(matched=new Token(match.shift()));soFar=soFar.slice(matched.length);matched.type=match[0].replace(rtrim," ");}
for(type in Expr.filter){if((match=matchExpr[type].exec(soFar))&&(!preFilters[type]||(match=preFilters[type](match)))){tokens.push(matched=new Token(match.shift()));soFar=soFar.slice(matched.length);matched.type=type;matched.matches=match;}}
if(!matched){break;}}
return parseOnly?soFar.length:soFar?Sizzle.error(selector):tokenCache(selector,groups).slice(0);}
function addCombinator(matcher,combinator,base){var dir=combinator.dir,checkNonElements=base&&combinator.dir==="parentNode",doneName=done++;return combinator.first?function(elem,context,xml){while((elem=elem[dir])){if(checkNonElements||elem.nodeType===1){return matcher(elem,context,xml);}}}:function(elem,context,xml){if(!xml){var cache,dirkey=dirruns+" "+doneName+" ",cachedkey=dirkey+cachedruns;while((elem=elem[dir])){if(checkNonElements||elem.nodeType===1){if((cache=elem[expando])===cachedkey){return elem.sizset;}else if(typeof cache==="string"&&cache.indexOf(dirkey)===0){if(elem.sizset){return elem;}}else{elem[expando]=cachedkey;if(matcher(elem,context,xml)){elem.sizset=true;return elem;}
elem.sizset=false;}}}}else{while((elem=elem[dir])){if(checkNonElements||elem.nodeType===1){if(matcher(elem,context,xml)){return elem;}}}}};}
function elementMatcher(matchers){return matchers.length>1?function(elem,context,xml){var i=matchers.length;while(i--){if(!matchers[i](elem,context,xml)){return false;}}
return true;}:matchers[0];}
function condense(unmatched,map,filter,context,xml){var elem,newUnmatched=[],i=0,len=unmatched.length,mapped=map!=null;for(;i<len;i++){if((elem=unmatched[i])){if(!filter||filter(elem,context,xml)){newUnmatched.push(elem);if(mapped){map.push(i);}}}}
return newUnmatched;}
function setMatcher(preFilter,selector,matcher,postFilter,postFinder,postSelector){if(postFilter&&!postFilter[expando]){postFilter=setMatcher(postFilter);}
if(postFinder&&!postFinder[expando]){postFinder=setMatcher(postFinder,postSelector);}
return markFunction(function(seed,results,context,xml){var temp,i,elem,preMap=[],postMap=[],preexisting=results.length,elems=seed||multipleContexts(selector||"*",context.nodeType?[context]:context,[]),matcherIn=preFilter&&(seed||!selector)?condense(elems,preMap,preFilter,context,xml):elems,matcherOut=matcher?postFinder||(seed?preFilter:preexisting||postFilter)?[]:results:matcherIn;if(matcher){matcher(matcherIn,matcherOut,context,xml);}
if(postFilter){temp=condense(matcherOut,postMap);postFilter(temp,[],context,xml);i=temp.length;while(i--){if((elem=temp[i])){matcherOut[postMap[i]]=!(matcherIn[postMap[i]]=elem);}}}
if(seed){if(postFinder||preFilter){if(postFinder){temp=[];i=matcherOut.length;while(i--){if((elem=matcherOut[i])){temp.push((matcherIn[i]=elem));}}
postFinder(null,(matcherOut=[]),temp,xml);}
i=matcherOut.length;while(i--){if((elem=matcherOut[i])&&(temp=postFinder?indexOf.call(seed,elem):preMap[i])>-1){seed[temp]=!(results[temp]=elem);}}}}else{matcherOut=condense(matcherOut===results?matcherOut.splice(preexisting,matcherOut.length):matcherOut);if(postFinder){postFinder(null,results,matcherOut,xml);}else{push.apply(results,matcherOut);}}});}
function matcherFromTokens(tokens){var checkContext,matcher,j,len=tokens.length,leadingRelative=Expr.relative[tokens[0].type],implicitRelative=leadingRelative||Expr.relative[" "],i=leadingRelative?1:0,matchContext=addCombinator(function(elem){return elem===checkContext;},implicitRelative,true),matchAnyContext=addCombinator(function(elem){return indexOf.call(checkContext,elem)>-1;},implicitRelative,true),matchers=[function(elem,context,xml){return(!leadingRelative&&(xml||context!==outermostContext))||((checkContext=context).nodeType?matchContext(elem,context,xml):matchAnyContext(elem,context,xml));}];for(;i<len;i++){if((matcher=Expr.relative[tokens[i].type])){matchers=[addCombinator(elementMatcher(matchers),matcher)];}else{matcher=Expr.filter[tokens[i].type].apply(null,tokens[i].matches);if(matcher[expando]){j=++i;for(;j<len;j++){if(Expr.relative[tokens[j].type]){break;}}
return setMatcher(i>1&&elementMatcher(matchers),i>1&&tokens.slice(0,i-1).join("").replace(rtrim,"$1"),matcher,i<j&&matcherFromTokens(tokens.slice(i,j)),j<len&&matcherFromTokens((tokens=tokens.slice(j))),j<len&&tokens.join(""));}
matchers.push(matcher);}}
return elementMatcher(matchers);}
function matcherFromGroupMatchers(elementMatchers,setMatchers){var bySet=setMatchers.length>0,byElement=elementMatchers.length>0,superMatcher=function(seed,context,xml,results,expandContext){var elem,j,matcher,setMatched=[],matchedCount=0,i="0",unmatched=seed&&[],outermost=expandContext!=null,contextBackup=outermostContext,elems=seed||byElement&&Expr.find["TAG"]("*",expandContext&&context.parentNode||context),dirrunsUnique=(dirruns+=contextBackup==null?1:Math.E);if(outermost){outermostContext=context!==document&&context;cachedruns=superMatcher.el;}
for(;(elem=elems[i])!=null;i++){if(byElement&&elem){for(j=0;(matcher=elementMatchers[j]);j++){if(matcher(elem,context,xml)){results.push(elem);break;}}
if(outermost){dirruns=dirrunsUnique;cachedruns=++superMatcher.el;}}
if(bySet){if((elem=!matcher&&elem)){matchedCount--;}
if(seed){unmatched.push(elem);}}}
matchedCount+=i;if(bySet&&i!==matchedCount){for(j=0;(matcher=setMatchers[j]);j++){matcher(unmatched,setMatched,context,xml);}
if(seed){if(matchedCount>0){while(i--){if(!(unmatched[i]||setMatched[i])){setMatched[i]=pop.call(results);}}}
setMatched=condense(setMatched);}
push.apply(results,setMatched);if(outermost&&!seed&&setMatched.length>0&&(matchedCount+setMatchers.length)>1){Sizzle.uniqueSort(results);}}
if(outermost){dirruns=dirrunsUnique;outermostContext=contextBackup;}
return unmatched;};superMatcher.el=0;return bySet?markFunction(superMatcher):superMatcher;}
compile=Sizzle.compile=function(selector,group){var i,setMatchers=[],elementMatchers=[],cached=compilerCache[expando][selector+" "];if(!cached){if(!group){group=tokenize(selector);}
i=group.length;while(i--){cached=matcherFromTokens(group[i]);if(cached[expando]){setMatchers.push(cached);}else{elementMatchers.push(cached);}}
cached=compilerCache(selector,matcherFromGroupMatchers(elementMatchers,setMatchers));}
return cached;};function multipleContexts(selector,contexts,results){var i=0,len=contexts.length;for(;i<len;i++){Sizzle(selector,contexts[i],results);}
return results;}
function select(selector,context,results,seed,xml){var i,tokens,token,type,find,match=tokenize(selector),j=match.length;if(!seed){if(match.length===1){tokens=match[0]=match[0].slice(0);if(tokens.length>2&&(token=tokens[0]).type==="ID"&&context.nodeType===9&&!xml&&Expr.relative[tokens[1].type]){context=Expr.find["ID"](token.matches[0].replace(rbackslash,""),context,xml)[0];if(!context){return results;}
selector=selector.slice(tokens.shift().length);}
for(i=matchExpr["POS"].test(selector)?-1:tokens.length-1;i>=0;i--){token=tokens[i];if(Expr.relative[(type=token.type)]){break;}
if((find=Expr.find[type])){if((seed=find(token.matches[0].replace(rbackslash,""),rsibling.test(tokens[0].type)&&context.parentNode||context,xml))){tokens.splice(i,1);selector=seed.length&&tokens.join("");if(!selector){push.apply(results,slice.call(seed,0));return results;}
break;}}}}}
compile(selector,match)(seed,context,xml,results,rsibling.test(selector));return results;}
if(document.querySelectorAll){(function(){var disconnectedMatch,oldSelect=select,rescape=/'|\\/g,rattributeQuotes=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,rbuggyQSA=[":focus"],rbuggyMatches=[":active"],matches=docElem.matchesSelector||docElem.mozMatchesSelector||docElem.webkitMatchesSelector||docElem.oMatchesSelector||docElem.msMatchesSelector;assert(function(div){div.innerHTML="<select><option selected=''></option></select>";if(!div.querySelectorAll("[selected]").length){rbuggyQSA.push("\\["+whitespace+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)");}
if(!div.querySelectorAll(":checked").length){rbuggyQSA.push(":checked");}});assert(function(div){div.innerHTML="<p test=''></p>";if(div.querySelectorAll("[test^='']").length){rbuggyQSA.push("[*^$]="+whitespace+"*(?:\"\"|'')");}
div.innerHTML="<input type='hidden'/>";if(!div.querySelectorAll(":enabled").length){rbuggyQSA.push(":enabled",":disabled");}});rbuggyQSA=new RegExp(rbuggyQSA.join("|"));select=function(selector,context,results,seed,xml){if(!seed&&!xml&&!rbuggyQSA.test(selector)){var groups,i,old=true,nid=expando,newContext=context,newSelector=context.nodeType===9&&selector;if(context.nodeType===1&&context.nodeName.toLowerCase()!=="object"){groups=tokenize(selector);if((old=context.getAttribute("id"))){nid=old.replace(rescape,"\\$&");}else{context.setAttribute("id",nid);}
nid="[id='"+nid+"'] ";i=groups.length;while(i--){groups[i]=nid+groups[i].join("");}
newContext=rsibling.test(selector)&&context.parentNode||context;newSelector=groups.join(",");}
if(newSelector){try{push.apply(results,slice.call(newContext.querySelectorAll(newSelector),0));return results;}catch(qsaError){}finally{if(!old){context.removeAttribute("id");}}}}
return oldSelect(selector,context,results,seed,xml);};if(matches){assert(function(div){disconnectedMatch=matches.call(div,"div");try{matches.call(div,"[test!='']:sizzle");rbuggyMatches.push("!=",pseudos);}catch(e){}});rbuggyMatches=new RegExp(rbuggyMatches.join("|"));Sizzle.matchesSelector=function(elem,expr){expr=expr.replace(rattributeQuotes,"='$1']");if(!isXML(elem)&&!rbuggyMatches.test(expr)&&!rbuggyQSA.test(expr)){try{var ret=matches.call(elem,expr);if(ret||disconnectedMatch||elem.document&&elem.document.nodeType!==11){return ret;}}catch(e){}}
return Sizzle(expr,null,null,[elem]).length>0;};}})();}
Expr.pseudos["nth"]=Expr.pseudos["eq"];function setFilters(){}
Expr.filters=setFilters.prototype=Expr.pseudos;Expr.setFilters=new setFilters();Sizzle.attr=jQuery.attr;jQuery.find=Sizzle;jQuery.expr=Sizzle.selectors;jQuery.expr[":"]=jQuery.expr.pseudos;jQuery.unique=Sizzle.uniqueSort;jQuery.text=Sizzle.getText;jQuery.isXMLDoc=Sizzle.isXML;jQuery.contains=Sizzle.contains;})(window);var runtil=/Until$/,rparentsprev=/^(?:parents|prev(?:Until|All))/,isSimple=/^.[^:#\[\.,]*$/,rneedsContext=jQuery.expr.match.needsContext,guaranteedUnique={children:true,contents:true,next:true,prev:true};jQuery.fn.extend({find:function(selector){var i,l,length,n,r,ret,self=this;if(typeof selector!=="string"){return jQuery(selector).filter(function(){for(i=0,l=self.length;i<l;i++){if(jQuery.contains(self[i],this)){return true;}}});}
ret=this.pushStack("","find",selector);for(i=0,l=this.length;i<l;i++){length=ret.length;jQuery.find(selector,this[i],ret);if(i>0){for(n=length;n<ret.length;n++){for(r=0;r<length;r++){if(ret[r]===ret[n]){ret.splice(n--,1);break;}}}}}
return ret;},has:function(target){var i,targets=jQuery(target,this),len=targets.length;return this.filter(function(){for(i=0;i<len;i++){if(jQuery.contains(this,targets[i])){return true;}}});},not:function(selector){return this.pushStack(winnow(this,selector,false),"not",selector);},filter:function(selector){return this.pushStack(winnow(this,selector,true),"filter",selector);},is:function(selector){return!!selector&&(typeof selector==="string"?rneedsContext.test(selector)?jQuery(selector,this.context).index(this[0])>=0:jQuery.filter(selector,this).length>0:this.filter(selector).length>0);},closest:function(selectors,context){var cur,i=0,l=this.length,ret=[],pos=rneedsContext.test(selectors)||typeof selectors!=="string"?jQuery(selectors,context||this.context):0;for(;i<l;i++){cur=this[i];while(cur&&cur.ownerDocument&&cur!==context&&cur.nodeType!==11){if(pos?pos.index(cur)>-1:jQuery.find.matchesSelector(cur,selectors)){ret.push(cur);break;}
cur=cur.parentNode;}}
ret=ret.length>1?jQuery.unique(ret):ret;return this.pushStack(ret,"closest",selectors);},index:function(elem){if(!elem){return(this[0]&&this[0].parentNode)?this.prevAll().length:-1;}
if(typeof elem==="string"){return jQuery.inArray(this[0],jQuery(elem));}
return jQuery.inArray(elem.jquery?elem[0]:elem,this);},add:function(selector,context){var set=typeof selector==="string"?jQuery(selector,context):jQuery.makeArray(selector&&selector.nodeType?[selector]:selector),all=jQuery.merge(this.get(),set);return this.pushStack(isDisconnected(set[0])||isDisconnected(all[0])?all:jQuery.unique(all));},addBack:function(selector){return this.add(selector==null?this.prevObject:this.prevObject.filter(selector));}});jQuery.fn.andSelf=jQuery.fn.addBack;function isDisconnected(node){return!node||!node.parentNode||node.parentNode.nodeType===11;}
function sibling(cur,dir){do{cur=cur[dir];}while(cur&&cur.nodeType!==1);return cur;}
jQuery.each({parent:function(elem){var parent=elem.parentNode;return parent&&parent.nodeType!==11?parent:null;},parents:function(elem){return jQuery.dir(elem,"parentNode");},parentsUntil:function(elem,i,until){return jQuery.dir(elem,"parentNode",until);},next:function(elem){return sibling(elem,"nextSibling");},prev:function(elem){return sibling(elem,"previousSibling");},nextAll:function(elem){return jQuery.dir(elem,"nextSibling");},prevAll:function(elem){return jQuery.dir(elem,"previousSibling");},nextUntil:function(elem,i,until){return jQuery.dir(elem,"nextSibling",until);},prevUntil:function(elem,i,until){return jQuery.dir(elem,"previousSibling",until);},siblings:function(elem){return jQuery.sibling((elem.parentNode||{}).firstChild,elem);},children:function(elem){return jQuery.sibling(elem.firstChild);},contents:function(elem){return jQuery.nodeName(elem,"iframe")?elem.contentDocument||elem.contentWindow.document:jQuery.merge([],elem.childNodes);}},function(name,fn){jQuery.fn[name]=function(until,selector){var ret=jQuery.map(this,fn,until);if(!runtil.test(name)){selector=until;}
if(selector&&typeof selector==="string"){ret=jQuery.filter(selector,ret);}
ret=this.length>1&&!guaranteedUnique[name]?jQuery.unique(ret):ret;if(this.length>1&&rparentsprev.test(name)){ret=ret.reverse();}
return this.pushStack(ret,name,core_slice.call(arguments).join(","));};});jQuery.extend({filter:function(expr,elems,not){if(not){expr=":not("+expr+")";}
return elems.length===1?jQuery.find.matchesSelector(elems[0],expr)?[elems[0]]:[]:jQuery.find.matches(expr,elems);},dir:function(elem,dir,until){var matched=[],cur=elem[dir];while(cur&&cur.nodeType!==9&&(until===undefined||cur.nodeType!==1||!jQuery(cur).is(until))){if(cur.nodeType===1){matched.push(cur);}
cur=cur[dir];}
return matched;},sibling:function(n,elem){var r=[];for(;n;n=n.nextSibling){if(n.nodeType===1&&n!==elem){r.push(n);}}
return r;}});function winnow(elements,qualifier,keep){qualifier=qualifier||0;if(jQuery.isFunction(qualifier)){return jQuery.grep(elements,function(elem,i){var retVal=!!qualifier.call(elem,i,elem);return retVal===keep;});}else if(qualifier.nodeType){return jQuery.grep(elements,function(elem,i){return(elem===qualifier)===keep;});}else if(typeof qualifier==="string"){var filtered=jQuery.grep(elements,function(elem){return elem.nodeType===1;});if(isSimple.test(qualifier)){return jQuery.filter(qualifier,filtered,!keep);}else{qualifier=jQuery.filter(qualifier,filtered);}}
return jQuery.grep(elements,function(elem,i){return(jQuery.inArray(elem,qualifier)>=0)===keep;});}
function createSafeFragment(document){var list=nodeNames.split("|"),safeFrag=document.createDocumentFragment();if(safeFrag.createElement){while(list.length){safeFrag.createElement(list.pop());}}
return safeFrag;}
var nodeNames="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|"+"header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",rinlinejQuery=/ jQuery\d+="(?:null|\d+)"/g,rleadingWhitespace=/^\s+/,rxhtmlTag=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,rtagName=/<([\w:]+)/,rtbody=/<tbody/i,rhtml=/<|&#?\w+;/,rnoInnerhtml=/<(?:script|style|link)/i,rnocache=/<(?:script|object|embed|option|style)/i,rnoshimcache=new RegExp("<(?:"+nodeNames+")[\\s/>]","i"),rcheckableType=/^(?:checkbox|radio)$/,rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i,rscriptType=/\/(java|ecma)script/i,rcleanScript=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,wrapMap={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},safeFragment=createSafeFragment(document),fragmentDiv=safeFragment.appendChild(document.createElement("div"));wrapMap.optgroup=wrapMap.option;wrapMap.tbody=wrapMap.tfoot=wrapMap.colgroup=wrapMap.caption=wrapMap.thead;wrapMap.th=wrapMap.td;if(!jQuery.support.htmlSerialize){wrapMap._default=[1,"X<div>","</div>"];}
jQuery.fn.extend({text:function(value){return jQuery.access(this,function(value){return value===undefined?jQuery.text(this):this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(value));},null,value,arguments.length);},wrapAll:function(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapAll(html.call(this,i));});}
if(this[0]){var wrap=jQuery(html,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){wrap.insertBefore(this[0]);}
wrap.map(function(){var elem=this;while(elem.firstChild&&elem.firstChild.nodeType===1){elem=elem.firstChild;}
return elem;}).append(this);}
return this;},wrapInner:function(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapInner(html.call(this,i));});}
return this.each(function(){var self=jQuery(this),contents=self.contents();if(contents.length){contents.wrapAll(html);}else{self.append(html);}});},wrap:function(html){var isFunction=jQuery.isFunction(html);return this.each(function(i){jQuery(this).wrapAll(isFunction?html.call(this,i):html);});},unwrap:function(){return this.parent().each(function(){if(!jQuery.nodeName(this,"body")){jQuery(this).replaceWith(this.childNodes);}}).end();},append:function(){return this.domManip(arguments,true,function(elem){if(this.nodeType===1||this.nodeType===11){this.appendChild(elem);}});},prepend:function(){return this.domManip(arguments,true,function(elem){if(this.nodeType===1||this.nodeType===11){this.insertBefore(elem,this.firstChild);}});},before:function(){if(!isDisconnected(this[0])){return this.domManip(arguments,false,function(elem){this.parentNode.insertBefore(elem,this);});}
if(arguments.length){var set=jQuery.clean(arguments);return this.pushStack(jQuery.merge(set,this),"before",this.selector);}},after:function(){if(!isDisconnected(this[0])){return this.domManip(arguments,false,function(elem){this.parentNode.insertBefore(elem,this.nextSibling);});}
if(arguments.length){var set=jQuery.clean(arguments);return this.pushStack(jQuery.merge(this,set),"after",this.selector);}},remove:function(selector,keepData){var elem,i=0;for(;(elem=this[i])!=null;i++){if(!selector||jQuery.filter(selector,[elem]).length){if(!keepData&&elem.nodeType===1){jQuery.cleanData(elem.getElementsByTagName("*"));jQuery.cleanData([elem]);}
if(elem.parentNode){elem.parentNode.removeChild(elem);}}}
return this;},empty:function(){var elem,i=0;for(;(elem=this[i])!=null;i++){if(elem.nodeType===1){jQuery.cleanData(elem.getElementsByTagName("*"));}
while(elem.firstChild){elem.removeChild(elem.firstChild);}}
return this;},clone:function(dataAndEvents,deepDataAndEvents){dataAndEvents=dataAndEvents==null?false:dataAndEvents;deepDataAndEvents=deepDataAndEvents==null?dataAndEvents:deepDataAndEvents;return this.map(function(){return jQuery.clone(this,dataAndEvents,deepDataAndEvents);});},html:function(value){return jQuery.access(this,function(value){var elem=this[0]||{},i=0,l=this.length;if(value===undefined){return elem.nodeType===1?elem.innerHTML.replace(rinlinejQuery,""):undefined;}
if(typeof value==="string"&&!rnoInnerhtml.test(value)&&(jQuery.support.htmlSerialize||!rnoshimcache.test(value))&&(jQuery.support.leadingWhitespace||!rleadingWhitespace.test(value))&&!wrapMap[(rtagName.exec(value)||["",""])[1].toLowerCase()]){value=value.replace(rxhtmlTag,"<$1></$2>");try{for(;i<l;i++){elem=this[i]||{};if(elem.nodeType===1){jQuery.cleanData(elem.getElementsByTagName("*"));elem.innerHTML=value;}}
elem=0;}catch(e){}}
if(elem){this.empty().append(value);}},null,value,arguments.length);},replaceWith:function(value){if(!isDisconnected(this[0])){if(jQuery.isFunction(value)){return this.each(function(i){var self=jQuery(this),old=self.html();self.replaceWith(value.call(this,i,old));});}
if(typeof value!=="string"){value=jQuery(value).detach();}
return this.each(function(){var next=this.nextSibling,parent=this.parentNode;jQuery(this).remove();if(next){jQuery(next).before(value);}else{jQuery(parent).append(value);}});}
return this.length?this.pushStack(jQuery(jQuery.isFunction(value)?value():value),"replaceWith",value):this;},detach:function(selector){return this.remove(selector,true);},domManip:function(args,table,callback){args=[].concat.apply([],args);var results,first,fragment,iNoClone,i=0,value=args[0],scripts=[],l=this.length;if(!jQuery.support.checkClone&&l>1&&typeof value==="string"&&rchecked.test(value)){return this.each(function(){jQuery(this).domManip(args,table,callback);});}
if(jQuery.isFunction(value)){return this.each(function(i){var self=jQuery(this);args[0]=value.call(this,i,table?self.html():undefined);self.domManip(args,table,callback);});}
if(this[0]){results=jQuery.buildFragment(args,this,scripts);fragment=results.fragment;first=fragment.firstChild;if(fragment.childNodes.length===1){fragment=first;}
if(first){table=table&&jQuery.nodeName(first,"tr");for(iNoClone=results.cacheable||l-1;i<l;i++){callback.call(table&&jQuery.nodeName(this[i],"table")?findOrAppend(this[i],"tbody"):this[i],i===iNoClone?fragment:jQuery.clone(fragment,true,true));}}
fragment=first=null;if(scripts.length){jQuery.each(scripts,function(i,elem){if(elem.src){if(jQuery.ajax){jQuery.ajax({url:elem.src,type:"GET",dataType:"script",async:false,global:false,"throws":true});}else{jQuery.error("no ajax");}}else{jQuery.globalEval((elem.text||elem.textContent||elem.innerHTML||"").replace(rcleanScript,""));}
if(elem.parentNode){elem.parentNode.removeChild(elem);}});}}
return this;}});function findOrAppend(elem,tag){return elem.getElementsByTagName(tag)[0]||elem.appendChild(elem.ownerDocument.createElement(tag));}
function cloneCopyEvent(src,dest){if(dest.nodeType!==1||!jQuery.hasData(src)){return;}
var type,i,l,oldData=jQuery._data(src),curData=jQuery._data(dest,oldData),events=oldData.events;if(events){delete curData.handle;curData.events={};for(type in events){for(i=0,l=events[type].length;i<l;i++){jQuery.event.add(dest,type,events[type][i]);}}}
if(curData.data){curData.data=jQuery.extend({},curData.data);}}
function cloneFixAttributes(src,dest){var nodeName;if(dest.nodeType!==1){return;}
if(dest.clearAttributes){dest.clearAttributes();}
if(dest.mergeAttributes){dest.mergeAttributes(src);}
nodeName=dest.nodeName.toLowerCase();if(nodeName==="object"){if(dest.parentNode){dest.outerHTML=src.outerHTML;}
if(jQuery.support.html5Clone&&(src.innerHTML&&!jQuery.trim(dest.innerHTML))){dest.innerHTML=src.innerHTML;}}else if(nodeName==="input"&&rcheckableType.test(src.type)){dest.defaultChecked=dest.checked=src.checked;if(dest.value!==src.value){dest.value=src.value;}}else if(nodeName==="option"){dest.selected=src.defaultSelected;}else if(nodeName==="input"||nodeName==="textarea"){dest.defaultValue=src.defaultValue;}else if(nodeName==="script"&&dest.text!==src.text){dest.text=src.text;}
dest.removeAttribute(jQuery.expando);}
jQuery.buildFragment=function(args,context,scripts){var fragment,cacheable,cachehit,first=args[0];context=context||document;context=!context.nodeType&&context[0]||context;context=context.ownerDocument||context;if(args.length===1&&typeof first==="string"&&first.length<512&&context===document&&first.charAt(0)==="<"&&!rnocache.test(first)&&(jQuery.support.checkClone||!rchecked.test(first))&&(jQuery.support.html5Clone||!rnoshimcache.test(first))){cacheable=true;fragment=jQuery.fragments[first];cachehit=fragment!==undefined;}
if(!fragment){fragment=context.createDocumentFragment();jQuery.clean(args,context,fragment,scripts);if(cacheable){jQuery.fragments[first]=cachehit&&fragment;}}
return{fragment:fragment,cacheable:cacheable};};jQuery.fragments={};jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(name,original){jQuery.fn[name]=function(selector){var elems,i=0,ret=[],insert=jQuery(selector),l=insert.length,parent=this.length===1&&this[0].parentNode;if((parent==null||parent&&parent.nodeType===11&&parent.childNodes.length===1)&&l===1){insert[original](this[0]);return this;}else{for(;i<l;i++){elems=(i>0?this.clone(true):this).get();jQuery(insert[i])[original](elems);ret=ret.concat(elems);}
return this.pushStack(ret,name,insert.selector);}};});function getAll(elem){if(typeof elem.getElementsByTagName!=="undefined"){return elem.getElementsByTagName("*");}else if(typeof elem.querySelectorAll!=="undefined"){return elem.querySelectorAll("*");}else{return[];}}
function fixDefaultChecked(elem){if(rcheckableType.test(elem.type)){elem.defaultChecked=elem.checked;}}
jQuery.extend({clone:function(elem,dataAndEvents,deepDataAndEvents){var srcElements,destElements,i,clone;if(jQuery.support.html5Clone||jQuery.isXMLDoc(elem)||!rnoshimcache.test("<"+elem.nodeName+">")){clone=elem.cloneNode(true);}else{fragmentDiv.innerHTML=elem.outerHTML;fragmentDiv.removeChild(clone=fragmentDiv.firstChild);}
if((!jQuery.support.noCloneEvent||!jQuery.support.noCloneChecked)&&(elem.nodeType===1||elem.nodeType===11)&&!jQuery.isXMLDoc(elem)){cloneFixAttributes(elem,clone);srcElements=getAll(elem);destElements=getAll(clone);for(i=0;srcElements[i];++i){if(destElements[i]){cloneFixAttributes(srcElements[i],destElements[i]);}}}
if(dataAndEvents){cloneCopyEvent(elem,clone);if(deepDataAndEvents){srcElements=getAll(elem);destElements=getAll(clone);for(i=0;srcElements[i];++i){cloneCopyEvent(srcElements[i],destElements[i]);}}}
srcElements=destElements=null;return clone;},clean:function(elems,context,fragment,scripts){var i,j,elem,tag,wrap,depth,div,hasBody,tbody,len,handleScript,jsTags,safe=context===document&&safeFragment,ret=[];if(!context||typeof context.createDocumentFragment==="undefined"){context=document;}
for(i=0;(elem=elems[i])!=null;i++){if(typeof elem==="number"){elem+="";}
if(!elem){continue;}
if(typeof elem==="string"){if(!rhtml.test(elem)){elem=context.createTextNode(elem);}else{safe=safe||createSafeFragment(context);div=context.createElement("div");safe.appendChild(div);elem=elem.replace(rxhtmlTag,"<$1></$2>");tag=(rtagName.exec(elem)||["",""])[1].toLowerCase();wrap=wrapMap[tag]||wrapMap._default;depth=wrap[0];div.innerHTML=wrap[1]+elem+wrap[2];while(depth--){div=div.lastChild;}
if(!jQuery.support.tbody){hasBody=rtbody.test(elem);tbody=tag==="table"&&!hasBody?div.firstChild&&div.firstChild.childNodes:wrap[1]==="<table>"&&!hasBody?div.childNodes:[];for(j=tbody.length-1;j>=0;--j){if(jQuery.nodeName(tbody[j],"tbody")&&!tbody[j].childNodes.length){tbody[j].parentNode.removeChild(tbody[j]);}}}
if(!jQuery.support.leadingWhitespace&&rleadingWhitespace.test(elem)){div.insertBefore(context.createTextNode(rleadingWhitespace.exec(elem)[0]),div.firstChild);}
elem=div.childNodes;div.parentNode.removeChild(div);}}
if(elem.nodeType){ret.push(elem);}else{jQuery.merge(ret,elem);}}
if(div){elem=div=safe=null;}
if(!jQuery.support.appendChecked){for(i=0;(elem=ret[i])!=null;i++){if(jQuery.nodeName(elem,"input")){fixDefaultChecked(elem);}else if(typeof elem.getElementsByTagName!=="undefined"){jQuery.grep(elem.getElementsByTagName("input"),fixDefaultChecked);}}}
if(fragment){handleScript=function(elem){if(!elem.type||rscriptType.test(elem.type)){return scripts?scripts.push(elem.parentNode?elem.parentNode.removeChild(elem):elem):fragment.appendChild(elem);}};for(i=0;(elem=ret[i])!=null;i++){if(!(jQuery.nodeName(elem,"script")&&handleScript(elem))){fragment.appendChild(elem);if(typeof elem.getElementsByTagName!=="undefined"){jsTags=jQuery.grep(jQuery.merge([],elem.getElementsByTagName("script")),handleScript);ret.splice.apply(ret,[i+1,0].concat(jsTags));i+=jsTags.length;}}}}
return ret;},cleanData:function(elems,acceptData){var data,id,elem,type,i=0,internalKey=jQuery.expando,cache=jQuery.cache,deleteExpando=jQuery.support.deleteExpando,special=jQuery.event.special;for(;(elem=elems[i])!=null;i++){if(acceptData||jQuery.acceptData(elem)){id=elem[internalKey];data=id&&cache[id];if(data){if(data.events){for(type in data.events){if(special[type]){jQuery.event.remove(elem,type);}else{jQuery.removeEvent(elem,type,data.handle);}}}
if(cache[id]){delete cache[id];if(deleteExpando){delete elem[internalKey];}else if(elem.removeAttribute){elem.removeAttribute(internalKey);}else{elem[internalKey]=null;}
jQuery.deletedIds.push(id);}}}}}});(function(){var matched,browser;jQuery.uaMatch=function(ua){ua=ua.toLowerCase();var match=/(chrome)[ \/]([\w.]+)/.exec(ua)||/(webkit)[ \/]([\w.]+)/.exec(ua)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua)||/(msie) ([\w.]+)/.exec(ua)||ua.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua)||[];return{browser:match[1]||"",version:match[2]||"0"};};matched=jQuery.uaMatch(navigator.userAgent);browser={};if(matched.browser){browser[matched.browser]=true;browser.version=matched.version;}
if(browser.chrome){browser.webkit=true;}else if(browser.webkit){browser.safari=true;}
jQuery.browser=browser;jQuery.sub=function(){function jQuerySub(selector,context){return new jQuerySub.fn.init(selector,context);}
jQuery.extend(true,jQuerySub,this);jQuerySub.superclass=this;jQuerySub.fn=jQuerySub.prototype=this();jQuerySub.fn.constructor=jQuerySub;jQuerySub.sub=this.sub;jQuerySub.fn.init=function init(selector,context){if(context&&context instanceof jQuery&&!(context instanceof jQuerySub)){context=jQuerySub(context);}
return jQuery.fn.init.call(this,selector,context,rootjQuerySub);};jQuerySub.fn.init.prototype=jQuerySub.fn;var rootjQuerySub=jQuerySub(document);return jQuerySub;};})();var curCSS,iframe,iframeDoc,ralpha=/alpha\([^)]*\)/i,ropacity=/opacity=([^)]*)/,rposition=/^(top|right|bottom|left)$/,rdisplayswap=/^(none|table(?!-c[ea]).+)/,rmargin=/^margin/,rnumsplit=new RegExp("^("+core_pnum+")(.*)$","i"),rnumnonpx=new RegExp("^("+core_pnum+")(?!px)[a-z%]+$","i"),rrelNum=new RegExp("^([-+])=("+core_pnum+")","i"),elemdisplay={BODY:"block"},cssShow={position:"absolute",visibility:"hidden",display:"block"},cssNormalTransform={letterSpacing:0,fontWeight:400},cssExpand=["Top","Right","Bottom","Left"],cssPrefixes=["Webkit","O","Moz","ms"],eventsToggle=jQuery.fn.toggle;function vendorPropName(style,name){if(name in style){return name;}
var capName=name.charAt(0).toUpperCase()+name.slice(1),origName=name,i=cssPrefixes.length;while(i--){name=cssPrefixes[i]+capName;if(name in style){return name;}}
return origName;}
function isHidden(elem,el){elem=el||elem;return jQuery.css(elem,"display")==="none"||!jQuery.contains(elem.ownerDocument,elem);}
function showHide(elements,show){var elem,display,values=[],index=0,length=elements.length;for(;index<length;index++){elem=elements[index];if(!elem.style){continue;}
values[index]=jQuery._data(elem,"olddisplay");if(show){if(!values[index]&&elem.style.display==="none"){elem.style.display="";}
if(elem.style.display===""&&isHidden(elem)){values[index]=jQuery._data(elem,"olddisplay",css_defaultDisplay(elem.nodeName));}}else{display=curCSS(elem,"display");if(!values[index]&&display!=="none"){jQuery._data(elem,"olddisplay",display);}}}
for(index=0;index<length;index++){elem=elements[index];if(!elem.style){continue;}
if(!show||elem.style.display==="none"||elem.style.display===""){elem.style.display=show?values[index]||"":"none";}}
return elements;}
jQuery.fn.extend({css:function(name,value){return jQuery.access(this,function(elem,name,value){return value!==undefined?jQuery.style(elem,name,value):jQuery.css(elem,name);},name,value,arguments.length>1);},show:function(){return showHide(this,true);},hide:function(){return showHide(this);},toggle:function(state,fn2){var bool=typeof state==="boolean";if(jQuery.isFunction(state)&&jQuery.isFunction(fn2)){return eventsToggle.apply(this,arguments);}
return this.each(function(){if(bool?state:isHidden(this)){jQuery(this).show();}else{jQuery(this).hide();}});}});jQuery.extend({cssHooks:{opacity:{get:function(elem,computed){if(computed){var ret=curCSS(elem,"opacity");return ret===""?"1":ret;}}}},cssNumber:{"fillOpacity":true,"fontWeight":true,"lineHeight":true,"opacity":true,"orphans":true,"widows":true,"zIndex":true,"zoom":true},cssProps:{"float":jQuery.support.cssFloat?"cssFloat":"styleFloat"},style:function(elem,name,value,extra){if(!elem||elem.nodeType===3||elem.nodeType===8||!elem.style){return;}
var ret,type,hooks,origName=jQuery.camelCase(name),style=elem.style;name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(style,origName));hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];if(value!==undefined){type=typeof value;if(type==="string"&&(ret=rrelNum.exec(value))){value=(ret[1]+1)*ret[2]+parseFloat(jQuery.css(elem,name));type="number";}
if(value==null||type==="number"&&isNaN(value)){return;}
if(type==="number"&&!jQuery.cssNumber[origName]){value+="px";}
if(!hooks||!("set"in hooks)||(value=hooks.set(elem,value,extra))!==undefined){try{style[name]=value;}catch(e){}}}else{if(hooks&&"get"in hooks&&(ret=hooks.get(elem,false,extra))!==undefined){return ret;}
return style[name];}},css:function(elem,name,numeric,extra){var val,num,hooks,origName=jQuery.camelCase(name);name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(elem.style,origName));hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];if(hooks&&"get"in hooks){val=hooks.get(elem,true,extra);}
if(val===undefined){val=curCSS(elem,name);}
if(val==="normal"&&name in cssNormalTransform){val=cssNormalTransform[name];}
if(numeric||extra!==undefined){num=parseFloat(val);return numeric||jQuery.isNumeric(num)?num||0:val;}
return val;},swap:function(elem,options,callback){var ret,name,old={};for(name in options){old[name]=elem.style[name];elem.style[name]=options[name];}
ret=callback.call(elem);for(name in options){elem.style[name]=old[name];}
return ret;}});if(window.getComputedStyle){curCSS=function(elem,name){var ret,width,minWidth,maxWidth,computed=window.getComputedStyle(elem,null),style=elem.style;if(computed){ret=computed.getPropertyValue(name)||computed[name];if(ret===""&&!jQuery.contains(elem.ownerDocument,elem)){ret=jQuery.style(elem,name);}
if(rnumnonpx.test(ret)&&rmargin.test(name)){width=style.width;minWidth=style.minWidth;maxWidth=style.maxWidth;style.minWidth=style.maxWidth=style.width=ret;ret=computed.width;style.width=width;style.minWidth=minWidth;style.maxWidth=maxWidth;}}
return ret;};}else if(document.documentElement.currentStyle){curCSS=function(elem,name){var left,rsLeft,ret=elem.currentStyle&&elem.currentStyle[name],style=elem.style;if(ret==null&&style&&style[name]){ret=style[name];}
if(rnumnonpx.test(ret)&&!rposition.test(name)){left=style.left;rsLeft=elem.runtimeStyle&&elem.runtimeStyle.left;if(rsLeft){elem.runtimeStyle.left=elem.currentStyle.left;}
style.left=name==="fontSize"?"1em":ret;ret=style.pixelLeft+"px";style.left=left;if(rsLeft){elem.runtimeStyle.left=rsLeft;}}
return ret===""?"auto":ret;};}
function setPositiveNumber(elem,value,subtract){var matches=rnumsplit.exec(value);return matches?Math.max(0,matches[1]-(subtract||0))+(matches[2]||"px"):value;}
function augmentWidthOrHeight(elem,name,extra,isBorderBox){var i=extra===(isBorderBox?"border":"content")?4:name==="width"?1:0,val=0;for(;i<4;i+=2){if(extra==="margin"){val+=jQuery.css(elem,extra+cssExpand[i],true);}
if(isBorderBox){if(extra==="content"){val-=parseFloat(curCSS(elem,"padding"+cssExpand[i]))||0;}
if(extra!=="margin"){val-=parseFloat(curCSS(elem,"border"+cssExpand[i]+"Width"))||0;}}else{val+=parseFloat(curCSS(elem,"padding"+cssExpand[i]))||0;if(extra!=="padding"){val+=parseFloat(curCSS(elem,"border"+cssExpand[i]+"Width"))||0;}}}
return val;}
function getWidthOrHeight(elem,name,extra){var val=name==="width"?elem.offsetWidth:elem.offsetHeight,valueIsBorderBox=true,isBorderBox=jQuery.support.boxSizing&&jQuery.css(elem,"boxSizing")==="border-box";if(val<=0||val==null){val=curCSS(elem,name);if(val<0||val==null){val=elem.style[name];}
if(rnumnonpx.test(val)){return val;}
valueIsBorderBox=isBorderBox&&(jQuery.support.boxSizingReliable||val===elem.style[name]);val=parseFloat(val)||0;}
return(val+
augmentWidthOrHeight(elem,name,extra||(isBorderBox?"border":"content"),valueIsBorderBox))+"px";}
function css_defaultDisplay(nodeName){if(elemdisplay[nodeName]){return elemdisplay[nodeName];}
var elem=jQuery("<"+nodeName+">").appendTo(document.body),display=elem.css("display");elem.remove();if(display==="none"||display===""){iframe=document.body.appendChild(iframe||jQuery.extend(document.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!iframeDoc||!iframe.createElement){iframeDoc=(iframe.contentWindow||iframe.contentDocument).document;iframeDoc.write("<!doctype html><html><body>");iframeDoc.close();}
elem=iframeDoc.body.appendChild(iframeDoc.createElement(nodeName));display=curCSS(elem,"display");document.body.removeChild(iframe);}
elemdisplay[nodeName]=display;return display;}
jQuery.each(["height","width"],function(i,name){jQuery.cssHooks[name]={get:function(elem,computed,extra){if(computed){if(elem.offsetWidth===0&&rdisplayswap.test(curCSS(elem,"display"))){return jQuery.swap(elem,cssShow,function(){return getWidthOrHeight(elem,name,extra);});}else{return getWidthOrHeight(elem,name,extra);}}},set:function(elem,value,extra){return setPositiveNumber(elem,value,extra?augmentWidthOrHeight(elem,name,extra,jQuery.support.boxSizing&&jQuery.css(elem,"boxSizing")==="border-box"):0);}};});if(!jQuery.support.opacity){jQuery.cssHooks.opacity={get:function(elem,computed){return ropacity.test((computed&&elem.currentStyle?elem.currentStyle.filter:elem.style.filter)||"")?(0.01*parseFloat(RegExp.$1))+"":computed?"1":"";},set:function(elem,value){var style=elem.style,currentStyle=elem.currentStyle,opacity=jQuery.isNumeric(value)?"alpha(opacity="+value*100+")":"",filter=currentStyle&&currentStyle.filter||style.filter||"";style.zoom=1;if(value>=1&&jQuery.trim(filter.replace(ralpha,""))===""&&style.removeAttribute){style.removeAttribute("filter");if(currentStyle&&!currentStyle.filter){return;}}
style.filter=ralpha.test(filter)?filter.replace(ralpha,opacity):filter+" "+opacity;}};}
jQuery(function(){if(!jQuery.support.reliableMarginRight){jQuery.cssHooks.marginRight={get:function(elem,computed){return jQuery.swap(elem,{"display":"inline-block"},function(){if(computed){return curCSS(elem,"marginRight");}});}};}
if(!jQuery.support.pixelPosition&&jQuery.fn.position){jQuery.each(["top","left"],function(i,prop){jQuery.cssHooks[prop]={get:function(elem,computed){if(computed){var ret=curCSS(elem,prop);return rnumnonpx.test(ret)?jQuery(elem).position()[prop]+"px":ret;}}};});}});if(jQuery.expr&&jQuery.expr.filters){jQuery.expr.filters.hidden=function(elem){return(elem.offsetWidth===0&&elem.offsetHeight===0)||(!jQuery.support.reliableHiddenOffsets&&((elem.style&&elem.style.display)||curCSS(elem,"display"))==="none");};jQuery.expr.filters.visible=function(elem){return!jQuery.expr.filters.hidden(elem);};}
jQuery.each({margin:"",padding:"",border:"Width"},function(prefix,suffix){jQuery.cssHooks[prefix+suffix]={expand:function(value){var i,parts=typeof value==="string"?value.split(" "):[value],expanded={};for(i=0;i<4;i++){expanded[prefix+cssExpand[i]+suffix]=parts[i]||parts[i-2]||parts[0];}
return expanded;}};if(!rmargin.test(prefix)){jQuery.cssHooks[prefix+suffix].set=setPositiveNumber;}});var r20=/%20/g,rbracket=/\[\]$/,rCRLF=/\r?\n/g,rinput=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,rselectTextarea=/^(?:select|textarea)/i;jQuery.fn.extend({serialize:function(){return jQuery.param(this.serializeArray());},serializeArray:function(){return this.map(function(){return this.elements?jQuery.makeArray(this.elements):this;}).filter(function(){return this.name&&!this.disabled&&(this.checked||rselectTextarea.test(this.nodeName)||rinput.test(this.type));}).map(function(i,elem){var val=jQuery(this).val();return val==null?null:jQuery.isArray(val)?jQuery.map(val,function(val,i){return{name:elem.name,value:val.replace(rCRLF,"\r\n")};}):{name:elem.name,value:val.replace(rCRLF,"\r\n")};}).get();}});jQuery.param=function(a,traditional){var prefix,s=[],add=function(key,value){value=jQuery.isFunction(value)?value():(value==null?"":value);s[s.length]=encodeURIComponent(key)+"="+encodeURIComponent(value);};if(traditional===undefined){traditional=jQuery.ajaxSettings&&jQuery.ajaxSettings.traditional;}
if(jQuery.isArray(a)||(a.jquery&&!jQuery.isPlainObject(a))){jQuery.each(a,function(){add(this.name,this.value);});}else{for(prefix in a){buildParams(prefix,a[prefix],traditional,add);}}
return s.join("&").replace(r20,"+");};function buildParams(prefix,obj,traditional,add){var name;if(jQuery.isArray(obj)){jQuery.each(obj,function(i,v){if(traditional||rbracket.test(prefix)){add(prefix,v);}else{buildParams(prefix+"["+(typeof v==="object"?i:"")+"]",v,traditional,add);}});}else if(!traditional&&jQuery.type(obj)==="object"){for(name in obj){buildParams(prefix+"["+name+"]",obj[name],traditional,add);}}else{add(prefix,obj);}}
var
ajaxLocParts,ajaxLocation,rhash=/#.*$/,rheaders=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,rlocalProtocol=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,rnoContent=/^(?:GET|HEAD)$/,rprotocol=/^\/\//,rquery=/\?/,rscript=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,rts=/([?&])_=[^&]*/,rurl=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,_load=jQuery.fn.load,prefilters={},transports={},allTypes=["*/"]+["*"];try{ajaxLocation=location.href;}catch(e){ajaxLocation=document.createElement("a");ajaxLocation.href="";ajaxLocation=ajaxLocation.href;}
ajaxLocParts=rurl.exec(ajaxLocation.toLowerCase())||[];function addToPrefiltersOrTransports(structure){return function(dataTypeExpression,func){if(typeof dataTypeExpression!=="string"){func=dataTypeExpression;dataTypeExpression="*";}
var dataType,list,placeBefore,dataTypes=dataTypeExpression.toLowerCase().split(core_rspace),i=0,length=dataTypes.length;if(jQuery.isFunction(func)){for(;i<length;i++){dataType=dataTypes[i];placeBefore=/^\+/.test(dataType);if(placeBefore){dataType=dataType.substr(1)||"*";}
list=structure[dataType]=structure[dataType]||[];list[placeBefore?"unshift":"push"](func);}}};}
function inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR,dataType,inspected){dataType=dataType||options.dataTypes[0];inspected=inspected||{};inspected[dataType]=true;var selection,list=structure[dataType],i=0,length=list?list.length:0,executeOnly=(structure===prefilters);for(;i<length&&(executeOnly||!selection);i++){selection=list[i](options,originalOptions,jqXHR);if(typeof selection==="string"){if(!executeOnly||inspected[selection]){selection=undefined;}else{options.dataTypes.unshift(selection);selection=inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR,selection,inspected);}}}
if((executeOnly||!selection)&&!inspected["*"]){selection=inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR,"*",inspected);}
return selection;}
function ajaxExtend(target,src){var key,deep,flatOptions=jQuery.ajaxSettings.flatOptions||{};for(key in src){if(src[key]!==undefined){(flatOptions[key]?target:(deep||(deep={})))[key]=src[key];}}
if(deep){jQuery.extend(true,target,deep);}}
jQuery.fn.load=function(url,params,callback){if(typeof url!=="string"&&_load){return _load.apply(this,arguments);}
if(!this.length){return this;}
var selector,type,response,self=this,off=url.indexOf(" ");if(off>=0){selector=url.slice(off,url.length);url=url.slice(0,off);}
if(jQuery.isFunction(params)){callback=params;params=undefined;}else if(params&&typeof params==="object"){type="POST";}
jQuery.ajax({url:url,type:type,dataType:"html",data:params,complete:function(jqXHR,status){if(callback){self.each(callback,response||[jqXHR.responseText,status,jqXHR]);}}}).done(function(responseText){response=arguments;self.html(selector?jQuery("<div>").append(responseText.replace(rscript,"")).find(selector):responseText);});return this;};jQuery.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(i,o){jQuery.fn[o]=function(f){return this.on(o,f);};});jQuery.each(["get","post"],function(i,method){jQuery[method]=function(url,data,callback,type){if(jQuery.isFunction(data)){type=type||callback;callback=data;data=undefined;}
return jQuery.ajax({type:method,url:url,data:data,success:callback,dataType:type});};});jQuery.extend({getScript:function(url,callback){return jQuery.get(url,undefined,callback,"script");},getJSON:function(url,data,callback){return jQuery.get(url,data,callback,"json");},ajaxSetup:function(target,settings){if(settings){ajaxExtend(target,jQuery.ajaxSettings);}else{settings=target;target=jQuery.ajaxSettings;}
ajaxExtend(target,settings);return target;},ajaxSettings:{url:ajaxLocation,isLocal:rlocalProtocol.test(ajaxLocParts[1]),global:true,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:true,async:true,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":allTypes},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":window.String,"text html":true,"text json":jQuery.parseJSON,"text xml":jQuery.parseXML},flatOptions:{context:true,url:true}},ajaxPrefilter:addToPrefiltersOrTransports(prefilters),ajaxTransport:addToPrefiltersOrTransports(transports),ajax:function(url,options){if(typeof url==="object"){options=url;url=undefined;}
options=options||{};var
ifModifiedKey,responseHeadersString,responseHeaders,transport,timeoutTimer,parts,fireGlobals,i,s=jQuery.ajaxSetup({},options),callbackContext=s.context||s,globalEventContext=callbackContext!==s&&(callbackContext.nodeType||callbackContext instanceof jQuery)?jQuery(callbackContext):jQuery.event,deferred=jQuery.Deferred(),completeDeferred=jQuery.Callbacks("once memory"),statusCode=s.statusCode||{},requestHeaders={},requestHeadersNames={},state=0,strAbort="canceled",jqXHR={readyState:0,setRequestHeader:function(name,value){if(!state){var lname=name.toLowerCase();name=requestHeadersNames[lname]=requestHeadersNames[lname]||name;requestHeaders[name]=value;}
return this;},getAllResponseHeaders:function(){return state===2?responseHeadersString:null;},getResponseHeader:function(key){var match;if(state===2){if(!responseHeaders){responseHeaders={};while((match=rheaders.exec(responseHeadersString))){responseHeaders[match[1].toLowerCase()]=match[2];}}
match=responseHeaders[key.toLowerCase()];}
return match===undefined?null:match;},overrideMimeType:function(type){if(!state){s.mimeType=type;}
return this;},abort:function(statusText){statusText=statusText||strAbort;if(transport){transport.abort(statusText);}
done(0,statusText);return this;}};function done(status,nativeStatusText,responses,headers){var isSuccess,success,error,response,modified,statusText=nativeStatusText;if(state===2){return;}
state=2;if(timeoutTimer){clearTimeout(timeoutTimer);}
transport=undefined;responseHeadersString=headers||"";jqXHR.readyState=status>0?4:0;if(responses){response=ajaxHandleResponses(s,jqXHR,responses);}
if(status>=200&&status<300||status===304){if(s.ifModified){modified=jqXHR.getResponseHeader("Last-Modified");if(modified){jQuery.lastModified[ifModifiedKey]=modified;}
modified=jqXHR.getResponseHeader("Etag");if(modified){jQuery.etag[ifModifiedKey]=modified;}}
if(status===304){statusText="notmodified";isSuccess=true;}else{isSuccess=ajaxConvert(s,response);statusText=isSuccess.state;success=isSuccess.data;error=isSuccess.error;isSuccess=!error;}}else{error=statusText;if(!statusText||status){statusText="error";if(status<0){status=0;}}}
jqXHR.status=status;jqXHR.statusText=(nativeStatusText||statusText)+"";if(isSuccess){deferred.resolveWith(callbackContext,[success,statusText,jqXHR]);}else{deferred.rejectWith(callbackContext,[jqXHR,statusText,error]);}
jqXHR.statusCode(statusCode);statusCode=undefined;if(fireGlobals){globalEventContext.trigger("ajax"+(isSuccess?"Success":"Error"),[jqXHR,s,isSuccess?success:error]);}
completeDeferred.fireWith(callbackContext,[jqXHR,statusText]);if(fireGlobals){globalEventContext.trigger("ajaxComplete",[jqXHR,s]);if(!(--jQuery.active)){jQuery.event.trigger("ajaxStop");}}}
deferred.promise(jqXHR);jqXHR.success=jqXHR.done;jqXHR.error=jqXHR.fail;jqXHR.complete=completeDeferred.add;jqXHR.statusCode=function(map){if(map){var tmp;if(state<2){for(tmp in map){statusCode[tmp]=[statusCode[tmp],map[tmp]];}}else{tmp=map[jqXHR.status];jqXHR.always(tmp);}}
return this;};s.url=((url||s.url)+"").replace(rhash,"").replace(rprotocol,ajaxLocParts[1]+"//");s.dataTypes=jQuery.trim(s.dataType||"*").toLowerCase().split(core_rspace);if(s.crossDomain==null){parts=rurl.exec(s.url.toLowerCase());s.crossDomain=!!(parts&&(parts[1]!==ajaxLocParts[1]||parts[2]!==ajaxLocParts[2]||(parts[3]||(parts[1]==="http:"?80:443))!=(ajaxLocParts[3]||(ajaxLocParts[1]==="http:"?80:443))));}
if(s.data&&s.processData&&typeof s.data!=="string"){s.data=jQuery.param(s.data,s.traditional);}
inspectPrefiltersOrTransports(prefilters,s,options,jqXHR);if(state===2){return jqXHR;}
fireGlobals=s.global;s.type=s.type.toUpperCase();s.hasContent=!rnoContent.test(s.type);if(fireGlobals&&jQuery.active++===0){jQuery.event.trigger("ajaxStart");}
if(!s.hasContent){if(s.data){s.url+=(rquery.test(s.url)?"&":"?")+s.data;delete s.data;}
ifModifiedKey=s.url;if(s.cache===false){var ts=jQuery.now(),ret=s.url.replace(rts,"$1_="+ts);s.url=ret+((ret===s.url)?(rquery.test(s.url)?"&":"?")+"_="+ts:"");}}
if(s.data&&s.hasContent&&s.contentType!==false||options.contentType){jqXHR.setRequestHeader("Content-Type",s.contentType);}
if(s.ifModified){ifModifiedKey=ifModifiedKey||s.url;if(jQuery.lastModified[ifModifiedKey]){jqXHR.setRequestHeader("If-Modified-Since",jQuery.lastModified[ifModifiedKey]);}
if(jQuery.etag[ifModifiedKey]){jqXHR.setRequestHeader("If-None-Match",jQuery.etag[ifModifiedKey]);}}
jqXHR.setRequestHeader("Accept",s.dataTypes[0]&&s.accepts[s.dataTypes[0]]?s.accepts[s.dataTypes[0]]+(s.dataTypes[0]!=="*"?", "+allTypes+"; q=0.01":""):s.accepts["*"]);for(i in s.headers){jqXHR.setRequestHeader(i,s.headers[i]);}
if(s.beforeSend&&(s.beforeSend.call(callbackContext,jqXHR,s)===false||state===2)){return jqXHR.abort();}
strAbort="abort";for(i in{success:1,error:1,complete:1}){jqXHR[i](s[i]);}
transport=inspectPrefiltersOrTransports(transports,s,options,jqXHR);if(!transport){done(-1,"No Transport");}else{jqXHR.readyState=1;if(fireGlobals){globalEventContext.trigger("ajaxSend",[jqXHR,s]);}
if(s.async&&s.timeout>0){timeoutTimer=setTimeout(function(){jqXHR.abort("timeout");},s.timeout);}
try{state=1;transport.send(requestHeaders,done);}catch(e){if(state<2){done(-1,e);}else{throw e;}}}
return jqXHR;},active:0,lastModified:{},etag:{}});function ajaxHandleResponses(s,jqXHR,responses){var ct,type,finalDataType,firstDataType,contents=s.contents,dataTypes=s.dataTypes,responseFields=s.responseFields;for(type in responseFields){if(type in responses){jqXHR[responseFields[type]]=responses[type];}}
while(dataTypes[0]==="*"){dataTypes.shift();if(ct===undefined){ct=s.mimeType||jqXHR.getResponseHeader("content-type");}}
if(ct){for(type in contents){if(contents[type]&&contents[type].test(ct)){dataTypes.unshift(type);break;}}}
if(dataTypes[0]in responses){finalDataType=dataTypes[0];}else{for(type in responses){if(!dataTypes[0]||s.converters[type+" "+dataTypes[0]]){finalDataType=type;break;}
if(!firstDataType){firstDataType=type;}}
finalDataType=finalDataType||firstDataType;}
if(finalDataType){if(finalDataType!==dataTypes[0]){dataTypes.unshift(finalDataType);}
return responses[finalDataType];}}
function ajaxConvert(s,response){var conv,conv2,current,tmp,dataTypes=s.dataTypes.slice(),prev=dataTypes[0],converters={},i=0;if(s.dataFilter){response=s.dataFilter(response,s.dataType);}
if(dataTypes[1]){for(conv in s.converters){converters[conv.toLowerCase()]=s.converters[conv];}}
for(;(current=dataTypes[++i]);){if(current!=="*"){if(prev!=="*"&&prev!==current){conv=converters[prev+" "+current]||converters["* "+current];if(!conv){for(conv2 in converters){tmp=conv2.split(" ");if(tmp[1]===current){conv=converters[prev+" "+tmp[0]]||converters["* "+tmp[0]];if(conv){if(conv===true){conv=converters[conv2];}else if(converters[conv2]!==true){current=tmp[0];dataTypes.splice(i--,0,current);}
break;}}}}
if(conv!==true){if(conv&&s["throws"]){response=conv(response);}else{try{response=conv(response);}catch(e){return{state:"parsererror",error:conv?e:"No conversion from "+prev+" to "+current};}}}}
prev=current;}}
return{state:"success",data:response};}
var oldCallbacks=[],rquestion=/\?/,rjsonp=/(=)\?(?=&|$)|\?\?/,nonce=jQuery.now();jQuery.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var callback=oldCallbacks.pop()||(jQuery.expando+"_"+(nonce++));this[callback]=true;return callback;}});jQuery.ajaxPrefilter("json jsonp",function(s,originalSettings,jqXHR){var callbackName,overwritten,responseContainer,data=s.data,url=s.url,hasCallback=s.jsonp!==false,replaceInUrl=hasCallback&&rjsonp.test(url),replaceInData=hasCallback&&!replaceInUrl&&typeof data==="string"&&!(s.contentType||"").indexOf("application/x-www-form-urlencoded")&&rjsonp.test(data);if(s.dataTypes[0]==="jsonp"||replaceInUrl||replaceInData){callbackName=s.jsonpCallback=jQuery.isFunction(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback;overwritten=window[callbackName];if(replaceInUrl){s.url=url.replace(rjsonp,"$1"+callbackName);}else if(replaceInData){s.data=data.replace(rjsonp,"$1"+callbackName);}else if(hasCallback){s.url+=(rquestion.test(url)?"&":"?")+s.jsonp+"="+callbackName;}
s.converters["script json"]=function(){if(!responseContainer){jQuery.error(callbackName+" was not called");}
return responseContainer[0];};s.dataTypes[0]="json";window[callbackName]=function(){responseContainer=arguments;};jqXHR.always(function(){window[callbackName]=overwritten;if(s[callbackName]){s.jsonpCallback=originalSettings.jsonpCallback;oldCallbacks.push(callbackName);}
if(responseContainer&&jQuery.isFunction(overwritten)){overwritten(responseContainer[0]);}
responseContainer=overwritten=undefined;});return"script";}});jQuery.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(text){jQuery.globalEval(text);return text;}}});jQuery.ajaxPrefilter("script",function(s){if(s.cache===undefined){s.cache=false;}
if(s.crossDomain){s.type="GET";s.global=false;}});jQuery.ajaxTransport("script",function(s){if(s.crossDomain){var script,head=document.head||document.getElementsByTagName("head")[0]||document.documentElement;return{send:function(_,callback){script=document.createElement("script");script.async="async";if(s.scriptCharset){script.charset=s.scriptCharset;}
script.src=s.url;script.onload=script.onreadystatechange=function(_,isAbort){if(isAbort||!script.readyState||/loaded|complete/.test(script.readyState)){script.onload=script.onreadystatechange=null;if(head&&script.parentNode){head.removeChild(script);}
script=undefined;if(!isAbort){callback(200,"success");}}};head.insertBefore(script,head.firstChild);},abort:function(){if(script){script.onload(0,1);}}};}});var xhrCallbacks,xhrOnUnloadAbort=window.ActiveXObject?function(){for(var key in xhrCallbacks){xhrCallbacks[key](0,1);}}:false,xhrId=0;function createStandardXHR(){try{return new window.XMLHttpRequest();}catch(e){}}
function createActiveXHR(){try{return new window.ActiveXObject("Microsoft.XMLHTTP");}catch(e){}}
jQuery.ajaxSettings.xhr=window.ActiveXObject?function(){return!this.isLocal&&createStandardXHR()||createActiveXHR();}:createStandardXHR;(function(xhr){jQuery.extend(jQuery.support,{ajax:!!xhr,cors:!!xhr&&("withCredentials"in xhr)});})(jQuery.ajaxSettings.xhr());if(jQuery.support.ajax){jQuery.ajaxTransport(function(s){if(!s.crossDomain||jQuery.support.cors){var callback;return{send:function(headers,complete){var handle,i,xhr=s.xhr();if(s.username){xhr.open(s.type,s.url,s.async,s.username,s.password);}else{xhr.open(s.type,s.url,s.async);}
if(s.xhrFields){for(i in s.xhrFields){xhr[i]=s.xhrFields[i];}}
if(s.mimeType&&xhr.overrideMimeType){xhr.overrideMimeType(s.mimeType);}
if(!s.crossDomain&&!headers["X-Requested-With"]){headers["X-Requested-With"]="XMLHttpRequest";}
try{for(i in headers){xhr.setRequestHeader(i,headers[i]);}}catch(_){}
xhr.send((s.hasContent&&s.data)||null);callback=function(_,isAbort){var status,statusText,responseHeaders,responses,xml;try{if(callback&&(isAbort||xhr.readyState===4)){callback=undefined;if(handle){xhr.onreadystatechange=jQuery.noop;if(xhrOnUnloadAbort){delete xhrCallbacks[handle];}}
if(isAbort){if(xhr.readyState!==4){xhr.abort();}}else{status=xhr.status;responseHeaders=xhr.getAllResponseHeaders();responses={};xml=xhr.responseXML;if(xml&&xml.documentElement){responses.xml=xml;}
try{responses.text=xhr.responseText;}catch(e){}
try{statusText=xhr.statusText;}catch(e){statusText="";}
if(!status&&s.isLocal&&!s.crossDomain){status=responses.text?200:404;}else if(status===1223){status=204;}}}}catch(firefoxAccessException){if(!isAbort){complete(-1,firefoxAccessException);}}
if(responses){complete(status,statusText,responses,responseHeaders);}};if(!s.async){callback();}else if(xhr.readyState===4){setTimeout(callback,0);}else{handle=++xhrId;if(xhrOnUnloadAbort){if(!xhrCallbacks){xhrCallbacks={};jQuery(window).unload(xhrOnUnloadAbort);}
xhrCallbacks[handle]=callback;}
xhr.onreadystatechange=callback;}},abort:function(){if(callback){callback(0,1);}}};}});}
var fxNow,timerId,rfxtypes=/^(?:toggle|show|hide)$/,rfxnum=new RegExp("^(?:([-+])=|)("+core_pnum+")([a-z%]*)$","i"),rrun=/queueHooks$/,animationPrefilters=[defaultPrefilter],tweeners={"*":[function(prop,value){var end,unit,tween=this.createTween(prop,value),parts=rfxnum.exec(value),target=tween.cur(),start=+target||0,scale=1,maxIterations=20;if(parts){end=+parts[2];unit=parts[3]||(jQuery.cssNumber[prop]?"":"px");if(unit!=="px"&&start){start=jQuery.css(tween.elem,prop,true)||end||1;do{scale=scale||".5";start=start/scale;jQuery.style(tween.elem,prop,start+unit);}while(scale!==(scale=tween.cur()/target)&&scale!==1&&--maxIterations);}
tween.unit=unit;tween.start=start;tween.end=parts[1]?start+(parts[1]+1)*end:end;}
return tween;}]};function createFxNow(){setTimeout(function(){fxNow=undefined;},0);return(fxNow=jQuery.now());}
function createTweens(animation,props){jQuery.each(props,function(prop,value){var collection=(tweeners[prop]||[]).concat(tweeners["*"]),index=0,length=collection.length;for(;index<length;index++){if(collection[index].call(animation,prop,value)){return;}}});}
function Animation(elem,properties,options){var result,index=0,tweenerIndex=0,length=animationPrefilters.length,deferred=jQuery.Deferred().always(function(){delete tick.elem;}),tick=function(){var currentTime=fxNow||createFxNow(),remaining=Math.max(0,animation.startTime+animation.duration-currentTime),temp=remaining/animation.duration||0,percent=1-temp,index=0,length=animation.tweens.length;for(;index<length;index++){animation.tweens[index].run(percent);}
deferred.notifyWith(elem,[animation,percent,remaining]);if(percent<1&&length){return remaining;}else{deferred.resolveWith(elem,[animation]);return false;}},animation=deferred.promise({elem:elem,props:jQuery.extend({},properties),opts:jQuery.extend(true,{specialEasing:{}},options),originalProperties:properties,originalOptions:options,startTime:fxNow||createFxNow(),duration:options.duration,tweens:[],createTween:function(prop,end,easing){var tween=jQuery.Tween(elem,animation.opts,prop,end,animation.opts.specialEasing[prop]||animation.opts.easing);animation.tweens.push(tween);return tween;},stop:function(gotoEnd){var index=0,length=gotoEnd?animation.tweens.length:0;for(;index<length;index++){animation.tweens[index].run(1);}
if(gotoEnd){deferred.resolveWith(elem,[animation,gotoEnd]);}else{deferred.rejectWith(elem,[animation,gotoEnd]);}
return this;}}),props=animation.props;propFilter(props,animation.opts.specialEasing);for(;index<length;index++){result=animationPrefilters[index].call(animation,elem,props,animation.opts);if(result){return result;}}
createTweens(animation,props);if(jQuery.isFunction(animation.opts.start)){animation.opts.start.call(elem,animation);}
jQuery.fx.timer(jQuery.extend(tick,{anim:animation,queue:animation.opts.queue,elem:elem}));return animation.progress(animation.opts.progress).done(animation.opts.done,animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);}
function propFilter(props,specialEasing){var index,name,easing,value,hooks;for(index in props){name=jQuery.camelCase(index);easing=specialEasing[name];value=props[index];if(jQuery.isArray(value)){easing=value[1];value=props[index]=value[0];}
if(index!==name){props[name]=value;delete props[index];}
hooks=jQuery.cssHooks[name];if(hooks&&"expand"in hooks){value=hooks.expand(value);delete props[name];for(index in value){if(!(index in props)){props[index]=value[index];specialEasing[index]=easing;}}}else{specialEasing[name]=easing;}}}
jQuery.Animation=jQuery.extend(Animation,{tweener:function(props,callback){if(jQuery.isFunction(props)){callback=props;props=["*"];}else{props=props.split(" ");}
var prop,index=0,length=props.length;for(;index<length;index++){prop=props[index];tweeners[prop]=tweeners[prop]||[];tweeners[prop].unshift(callback);}},prefilter:function(callback,prepend){if(prepend){animationPrefilters.unshift(callback);}else{animationPrefilters.push(callback);}}});function defaultPrefilter(elem,props,opts){var index,prop,value,length,dataShow,toggle,tween,hooks,oldfire,anim=this,style=elem.style,orig={},handled=[],hidden=elem.nodeType&&isHidden(elem);if(!opts.queue){hooks=jQuery._queueHooks(elem,"fx");if(hooks.unqueued==null){hooks.unqueued=0;oldfire=hooks.empty.fire;hooks.empty.fire=function(){if(!hooks.unqueued){oldfire();}};}
hooks.unqueued++;anim.always(function(){anim.always(function(){hooks.unqueued--;if(!jQuery.queue(elem,"fx").length){hooks.empty.fire();}});});}
if(elem.nodeType===1&&("height"in props||"width"in props)){opts.overflow=[style.overflow,style.overflowX,style.overflowY];if(jQuery.css(elem,"display")==="inline"&&jQuery.css(elem,"float")==="none"){if(!jQuery.support.inlineBlockNeedsLayout||css_defaultDisplay(elem.nodeName)==="inline"){style.display="inline-block";}else{style.zoom=1;}}}
if(opts.overflow){style.overflow="hidden";if(!jQuery.support.shrinkWrapBlocks){anim.done(function(){style.overflow=opts.overflow[0];style.overflowX=opts.overflow[1];style.overflowY=opts.overflow[2];});}}
for(index in props){value=props[index];if(rfxtypes.exec(value)){delete props[index];toggle=toggle||value==="toggle";if(value===(hidden?"hide":"show")){continue;}
handled.push(index);}}
length=handled.length;if(length){dataShow=jQuery._data(elem,"fxshow")||jQuery._data(elem,"fxshow",{});if("hidden"in dataShow){hidden=dataShow.hidden;}
if(toggle){dataShow.hidden=!hidden;}
if(hidden){jQuery(elem).show();}else{anim.done(function(){jQuery(elem).hide();});}
anim.done(function(){var prop;jQuery.removeData(elem,"fxshow",true);for(prop in orig){jQuery.style(elem,prop,orig[prop]);}});for(index=0;index<length;index++){prop=handled[index];tween=anim.createTween(prop,hidden?dataShow[prop]:0);orig[prop]=dataShow[prop]||jQuery.style(elem,prop);if(!(prop in dataShow)){dataShow[prop]=tween.start;if(hidden){tween.end=tween.start;tween.start=prop==="width"||prop==="height"?1:0;}}}}}
function Tween(elem,options,prop,end,easing){return new Tween.prototype.init(elem,options,prop,end,easing);}
jQuery.Tween=Tween;Tween.prototype={constructor:Tween,init:function(elem,options,prop,end,easing,unit){this.elem=elem;this.prop=prop;this.easing=easing||"swing";this.options=options;this.start=this.now=this.cur();this.end=end;this.unit=unit||(jQuery.cssNumber[prop]?"":"px");},cur:function(){var hooks=Tween.propHooks[this.prop];return hooks&&hooks.get?hooks.get(this):Tween.propHooks._default.get(this);},run:function(percent){var eased,hooks=Tween.propHooks[this.prop];if(this.options.duration){this.pos=eased=jQuery.easing[this.easing](percent,this.options.duration*percent,0,1,this.options.duration);}else{this.pos=eased=percent;}
this.now=(this.end-this.start)*eased+this.start;if(this.options.step){this.options.step.call(this.elem,this.now,this);}
if(hooks&&hooks.set){hooks.set(this);}else{Tween.propHooks._default.set(this);}
return this;}};Tween.prototype.init.prototype=Tween.prototype;Tween.propHooks={_default:{get:function(tween){var result;if(tween.elem[tween.prop]!=null&&(!tween.elem.style||tween.elem.style[tween.prop]==null)){return tween.elem[tween.prop];}
result=jQuery.css(tween.elem,tween.prop,false,"");return!result||result==="auto"?0:result;},set:function(tween){if(jQuery.fx.step[tween.prop]){jQuery.fx.step[tween.prop](tween);}else if(tween.elem.style&&(tween.elem.style[jQuery.cssProps[tween.prop]]!=null||jQuery.cssHooks[tween.prop])){jQuery.style(tween.elem,tween.prop,tween.now+tween.unit);}else{tween.elem[tween.prop]=tween.now;}}}};Tween.propHooks.scrollTop=Tween.propHooks.scrollLeft={set:function(tween){if(tween.elem.nodeType&&tween.elem.parentNode){tween.elem[tween.prop]=tween.now;}}};jQuery.each(["toggle","show","hide"],function(i,name){var cssFn=jQuery.fn[name];jQuery.fn[name]=function(speed,easing,callback){return speed==null||typeof speed==="boolean"||(!i&&jQuery.isFunction(speed)&&jQuery.isFunction(easing))?cssFn.apply(this,arguments):this.animate(genFx(name,true),speed,easing,callback);};});jQuery.fn.extend({fadeTo:function(speed,to,easing,callback){return this.filter(isHidden).css("opacity",0).show().end().animate({opacity:to},speed,easing,callback);},animate:function(prop,speed,easing,callback){var empty=jQuery.isEmptyObject(prop),optall=jQuery.speed(speed,easing,callback),doAnimation=function(){var anim=Animation(this,jQuery.extend({},prop),optall);if(empty){anim.stop(true);}};return empty||optall.queue===false?this.each(doAnimation):this.queue(optall.queue,doAnimation);},stop:function(type,clearQueue,gotoEnd){var stopQueue=function(hooks){var stop=hooks.stop;delete hooks.stop;stop(gotoEnd);};if(typeof type!=="string"){gotoEnd=clearQueue;clearQueue=type;type=undefined;}
if(clearQueue&&type!==false){this.queue(type||"fx",[]);}
return this.each(function(){var dequeue=true,index=type!=null&&type+"queueHooks",timers=jQuery.timers,data=jQuery._data(this);if(index){if(data[index]&&data[index].stop){stopQueue(data[index]);}}else{for(index in data){if(data[index]&&data[index].stop&&rrun.test(index)){stopQueue(data[index]);}}}
for(index=timers.length;index--;){if(timers[index].elem===this&&(type==null||timers[index].queue===type)){timers[index].anim.stop(gotoEnd);dequeue=false;timers.splice(index,1);}}
if(dequeue||!gotoEnd){jQuery.dequeue(this,type);}});}});function genFx(type,includeWidth){var which,attrs={height:type},i=0;includeWidth=includeWidth?1:0;for(;i<4;i+=2-includeWidth){which=cssExpand[i];attrs["margin"+which]=attrs["padding"+which]=type;}
if(includeWidth){attrs.opacity=attrs.width=type;}
return attrs;}
jQuery.each({slideDown:genFx("show"),slideUp:genFx("hide"),slideToggle:genFx("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(name,props){jQuery.fn[name]=function(speed,easing,callback){return this.animate(props,speed,easing,callback);};});jQuery.speed=function(speed,easing,fn){var opt=speed&&typeof speed==="object"?jQuery.extend({},speed):{complete:fn||!fn&&easing||jQuery.isFunction(speed)&&speed,duration:speed,easing:fn&&easing||easing&&!jQuery.isFunction(easing)&&easing};opt.duration=jQuery.fx.off?0:typeof opt.duration==="number"?opt.duration:opt.duration in jQuery.fx.speeds?jQuery.fx.speeds[opt.duration]:jQuery.fx.speeds._default;if(opt.queue==null||opt.queue===true){opt.queue="fx";}
opt.old=opt.complete;opt.complete=function(){if(jQuery.isFunction(opt.old)){opt.old.call(this);}
if(opt.queue){jQuery.dequeue(this,opt.queue);}};return opt;};jQuery.easing={linear:function(p){return p;},swing:function(p){return 0.5-Math.cos(p*Math.PI)/2;}};jQuery.timers=[];jQuery.fx=Tween.prototype.init;jQuery.fx.tick=function(){var timer,timers=jQuery.timers,i=0;fxNow=jQuery.now();for(;i<timers.length;i++){timer=timers[i];if(!timer()&&timers[i]===timer){timers.splice(i--,1);}}
if(!timers.length){jQuery.fx.stop();}
fxNow=undefined;};jQuery.fx.timer=function(timer){if(timer()&&jQuery.timers.push(timer)&&!timerId){timerId=setInterval(jQuery.fx.tick,jQuery.fx.interval);}};jQuery.fx.interval=13;jQuery.fx.stop=function(){clearInterval(timerId);timerId=null;};jQuery.fx.speeds={slow:600,fast:200,_default:400};jQuery.fx.step={};if(jQuery.expr&&jQuery.expr.filters){jQuery.expr.filters.animated=function(elem){return jQuery.grep(jQuery.timers,function(fn){return elem===fn.elem;}).length;};}
var rroot=/^(?:body|html)$/i;jQuery.fn.offset=function(options){if(arguments.length){return options===undefined?this:this.each(function(i){jQuery.offset.setOffset(this,options,i);});}
var docElem,body,win,clientTop,clientLeft,scrollTop,scrollLeft,box={top:0,left:0},elem=this[0],doc=elem&&elem.ownerDocument;if(!doc){return;}
if((body=doc.body)===elem){return jQuery.offset.bodyOffset(elem);}
docElem=doc.documentElement;if(!jQuery.contains(docElem,elem)){return box;}
if(typeof elem.getBoundingClientRect!=="undefined"){box=elem.getBoundingClientRect();}
win=getWindow(doc);clientTop=docElem.clientTop||body.clientTop||0;clientLeft=docElem.clientLeft||body.clientLeft||0;scrollTop=win.pageYOffset||docElem.scrollTop;scrollLeft=win.pageXOffset||docElem.scrollLeft;return{top:box.top+scrollTop-clientTop,left:box.left+scrollLeft-clientLeft};};jQuery.offset={bodyOffset:function(body){var top=body.offsetTop,left=body.offsetLeft;if(jQuery.support.doesNotIncludeMarginInBodyOffset){top+=parseFloat(jQuery.css(body,"marginTop"))||0;left+=parseFloat(jQuery.css(body,"marginLeft"))||0;}
return{top:top,left:left};},setOffset:function(elem,options,i){var position=jQuery.css(elem,"position");if(position==="static"){elem.style.position="relative";}
var curElem=jQuery(elem),curOffset=curElem.offset(),curCSSTop=jQuery.css(elem,"top"),curCSSLeft=jQuery.css(elem,"left"),calculatePosition=(position==="absolute"||position==="fixed")&&jQuery.inArray("auto",[curCSSTop,curCSSLeft])>-1,props={},curPosition={},curTop,curLeft;if(calculatePosition){curPosition=curElem.position();curTop=curPosition.top;curLeft=curPosition.left;}else{curTop=parseFloat(curCSSTop)||0;curLeft=parseFloat(curCSSLeft)||0;}
if(jQuery.isFunction(options)){options=options.call(elem,i,curOffset);}
if(options.top!=null){props.top=(options.top-curOffset.top)+curTop;}
if(options.left!=null){props.left=(options.left-curOffset.left)+curLeft;}
if("using"in options){options.using.call(elem,props);}else{curElem.css(props);}}};jQuery.fn.extend({position:function(){if(!this[0]){return;}
var elem=this[0],offsetParent=this.offsetParent(),offset=this.offset(),parentOffset=rroot.test(offsetParent[0].nodeName)?{top:0,left:0}:offsetParent.offset();offset.top-=parseFloat(jQuery.css(elem,"marginTop"))||0;offset.left-=parseFloat(jQuery.css(elem,"marginLeft"))||0;parentOffset.top+=parseFloat(jQuery.css(offsetParent[0],"borderTopWidth"))||0;parentOffset.left+=parseFloat(jQuery.css(offsetParent[0],"borderLeftWidth"))||0;return{top:offset.top-parentOffset.top,left:offset.left-parentOffset.left};},offsetParent:function(){return this.map(function(){var offsetParent=this.offsetParent||document.body;while(offsetParent&&(!rroot.test(offsetParent.nodeName)&&jQuery.css(offsetParent,"position")==="static")){offsetParent=offsetParent.offsetParent;}
return offsetParent||document.body;});}});jQuery.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(method,prop){var top=/Y/.test(prop);jQuery.fn[method]=function(val){return jQuery.access(this,function(elem,method,val){var win=getWindow(elem);if(val===undefined){return win?(prop in win)?win[prop]:win.document.documentElement[method]:elem[method];}
if(win){win.scrollTo(!top?val:jQuery(win).scrollLeft(),top?val:jQuery(win).scrollTop());}else{elem[method]=val;}},method,val,arguments.length,null);};});function getWindow(elem){return jQuery.isWindow(elem)?elem:elem.nodeType===9?elem.defaultView||elem.parentWindow:false;}
jQuery.each({Height:"height",Width:"width"},function(name,type){jQuery.each({padding:"inner"+name,content:type,"":"outer"+name},function(defaultExtra,funcName){jQuery.fn[funcName]=function(margin,value){var chainable=arguments.length&&(defaultExtra||typeof margin!=="boolean"),extra=defaultExtra||(margin===true||value===true?"margin":"border");return jQuery.access(this,function(elem,type,value){var doc;if(jQuery.isWindow(elem)){return elem.document.documentElement["client"+name];}
if(elem.nodeType===9){doc=elem.documentElement;return Math.max(elem.body["scroll"+name],doc["scroll"+name],elem.body["offset"+name],doc["offset"+name],doc["client"+name]);}
return value===undefined?jQuery.css(elem,type,value,extra):jQuery.style(elem,type,value,extra);},type,chainable?margin:undefined,chainable,null);};});});window.jQuery=window.$=jQuery;if(typeof define==="function"&&define.amd&&define.amd.jQuery){define("jquery",[],function(){return jQuery;});}})(window);Box.Timing.execution.push({name:'js/plugins/jquery/jquery.box.js',time:(new Date()).getTime()});$j=$;(function($){$.ajaxSetup({dataFilter:function(data,dataType){var unidb=Box.Application.getService('unidb');if(dataType=='json')
{if(data.substr(9,5)=='unidb')
{return unidb.decode($.parseJSON(data));}}
return data;},beforeSend:function(xhr,settings)
{settings.converters['text json']=$.parseJSON;if(settings.type.toLowerCase()!='post')return true;if(typeof settings.data=='string')
{if(settings.data.indexOf('request_token=')==-1)
{if(settings.data.length>0)settings.data+='&';settings.data+='request_token='+window.request_token;}
if(settings.data.length>0)settings.data+='&';if(typeof(Realtime_Notification)!='undefined')
{settings.data+='realtime_subscriber_id='+Realtime_Notification.subscriber_id;}}
else
{if(!settings.data)settings.data={};if(!settings.data.request_token)settings.data.request_token=window.request_token;if(typeof(Realtime_Notification)!='undefined')
{settings.data.realtime_subscriber_id=Realtime_Notification.subscriber_id;}}
return true;}});var create_ajax_function=function(function_type,function_data_type)
{return function(url,data,callback,data_type,params)
{if(function_data_type!='')
{params=data_type;data_type=function_data_type;}
if(jQuery.isFunction(data)){params=callback;callback=data;data=null;}
params=$.extend({},params,{type:function_type,url:url,data:data,success:callback,dataType:data_type});return $.ajax(params);};};var originalParseJSON=$.parseJSON;$.extend({parseJSON:function(value){return(typeof value==='object')?value:originalParseJSON.call(this,value);},get:create_ajax_function('GET',''),getJSON:create_ajax_function('GET','json'),getCrossDomain:(function(){if($.support.cors){return create_ajax_function('GET','json');}
return create_ajax_function('GET','jsonp');}()),arrayDiff:function(a1,a2){if(a1.length==0&&a2.length==0)return false;var array,other;if(a1.length-a2.length>=0)
{array=a1;other=a2;}
else
{array=a2;other=a1;}
for(var i=0;i<array.length;i++)
{if($.inArray(array[i],other)==-1)return true;}
return false;},post:create_ajax_function('POST',''),postJSON:create_ajax_function('POST','json'),box:{formatQuery:function(query){function toURIComponents(obj,prefix,data){prefix=prefix||'';data=data||[];if(typeof obj=='string'||typeof obj=='number'){data.push(prefix+'='+encodeURIComponent(obj));}else if(typeof obj=='boolean'){data.push(prefix+'='+(obj?1:0));}else{for(var p in obj){data=toURIComponents(obj[p],prefix+'['+p+']',data);}}
return data;}
return toURIComponents(query,'q').join('&');},isEmail:function(str){var email_regex=new RegExp('^[^\\s<>@,]+@[^\\s<>@,]+\\.[^\\s<>@,]+$','i');return email_regex.exec(str)?true:false;},test_password_strength:function(j_strength_meter_container,j_password_field,options)
{options=options||{};$j.postJSON('/index.php?rm=box_password_strength_meter',{password:j_password_field.val()},function password_strength_callback(json)
{j_strength_meter_container.html(json.html);if($.isFunction(options.password_callback))
{options.password_callback.apply(j_password_field,[json.strong_enough]);}});},escapeHTML:function(text){if(text===null||typeof text==='undefined'){text='';}
if(!window.__convert_to_text_div)window.__convert_to_text_div=document.createElement('div');var div=window.__convert_to_text_div;if('innerText'in div){div.innerText=text;}else{div.textContent=text;}
var prefiltered_text=div.innerHTML.replace(/"/g,'&quot;').replace(/'/g,'&#039;');return prefiltered_text;},purifyHTML:function(text)
{var skip_closing_tag=false;if(typeof text!='string')return text;var replace_tags_function=function(matched,substring1,substring2,substring3)
{return substring1+'s'+substring3;};var replace_script_tag_function=function(matched,substring1,substring2,substring3)
{var return_val;if(substring3.indexOf(' type="text/x-template"')>=0||substring3.indexOf(' type="text/x-config"')>=0)
{skip_closing_tag=true;return matched;}
return_val=substring1+'s'+substring3;if(substring1=='</')
{if(skip_closing_tag)
{return_val=matched;}
skip_closing_tag=false;}
return return_val;};var replace_javascript_colon_function=function(matched,substring1,substring2,substring3)
{if(substring1==='application/x-')
{return matched;}
return matched.replace(substring2,'x');};var regex=[{pattern:'(^|(?:application\\/x)?[^>\\s\\w]+)\\s*(javascript:)',replacement:replace_javascript_colon_function,enabled:true},{pattern:'on(click|mouseover|mouseout|mousedown|mouseup|mouseenter|mouseleave|mousemove|keydown|keyup|keypress|error|load|blur|change|dblclick|focus|focusin|focusout|reset|resize|scroll|select|submit|unload)[\\s]*=[\\s]*["]*[^>|^"|^\\s]*["]*',replacement:'onxx=""',enabled:true},{pattern:'(<[\\/]*)(style)([^>]*>)',replacement:replace_tags_function,enabled:true},{pattern:'(<[\\/]*)(script)([^>]*>)',replacement:replace_script_tag_function,enabled:true}];var regex_patterns=[{regex:new RegExp(regex[0].pattern,'gi'),log:new RegExp(regex[0].pattern+'[^<>]*','gi')},{regex:new RegExp(regex[1].pattern,'gi'),log:new RegExp(regex[1].pattern+'[^<>]*','gi')},{regex:new RegExp(regex[2].pattern,'gi'),log:new RegExp(regex[2].pattern+'[^<>]*','gi')},{regex:new RegExp(regex[3].pattern,'gi'),log:new RegExp(regex[3].pattern+'[^<>]*','gi')}];var result=text;for(var i=0,length=regex.length;i<length;i++)
{var regex_pattern=regex_patterns[i].regex;var pre_regex_text=result;if(regex[i].enabled)
{result=pre_regex_text.replace(regex_pattern,regex[i].replacement);}
if(result!==pre_regex_text||!regex[i].enabled)
{var matched=text.match(regex_patterns[i].log);if(matched&&matched.length>0)
{if((typeof(live_site)=='undefined'||!live_site))
{$j.error('Purifier matches found!\nThe regex is: '+regex_pattern+'\nThe problematic string is:\n'+matched+'\nThe escaped version is:\n'+$.box.escapeHTML(matched)+'\n');}
else
{try
{throw new Error('Purifier regex matched!');}
catch(e)
{var url_service=Box.Application.getService('url');var params={regex:regex_pattern,matched_string:$.box.escapeHTML(matched),original_string:$.box.escapeHTML(result.substring(0,800)),current_url:(url_service?url_service.getCurrentWindowUrl():window.location.href),stack_trace:e.stack?e.stack.substring(0,1000):''};var logService=Box.Application.getService('logger');logService.sendLog('security_xss','xss_regex_matched',params);}}}}}
return result;}},log:function()
{if((typeof(live_site)=='undefined'||!live_site)&&typeof(console)!='undefined'&&console.log&&console.log.constructor==Function)
{console.log.apply(console,arguments);}},error:function()
{if((typeof(live_site)=='undefined'||!live_site)&&typeof(console)!='undefined'&&console.error&&console.error.constructor==Function)
{console.error.apply(console,arguments);}},throw_error:function()
{var error_arguments=$j.makeArray(arguments);error_arguments.unshift('Uncaught Error:');$j.log.apply($j,error_arguments);},not_implemented:function(message)
{$j.throw_error('not implement yet',message);},abstract_function:function()
{$j.throw_error('Abstract function not defined in',this);},size:function(object)
{if(object.hasOwnProperty('length'))return object.length;var length=0,i;for(i in object)length++;return length;},in_array:function(elem,array)
{return $j.inArray(elem,array)!=-1;},force_reload_DOM_event:function()
{$j('body').addClass(' ').removeClass(' ');},elementIsDescendent:function(elem,container)
{var parent=elem;while(parent&&parent!=container)
{try
{parent=parent.parentNode;}
catch(error)
{parent=container;}}
return parent==container;}});$.extend($.expr[':'],{focus:function(element){return element==document.activeElement;}});var original={$:$,html:$.fn.html,before:$.fn.before,after:$.fn.after,append:$.fn.append,prepend:$.fn.prepend,init:$.fn.init,attr:$.fn.attr};function purifyArray(values){var purified=[];for(var i=0,len=values.length;i<len;i++){if($.isArray(values[i])){purified.push(purifyArray(values[i]));}else{purified.push((typeof values[i]==='string')?$.box.purifyHTML(values[i]):values[i]);}}
return purified;}
function createPurifiedFunction(originalName){return function(){return original[originalName].apply(this,purifyArray(arguments));};}
$.fn.extend({html:createPurifiedFunction('html'),before:createPurifiedFunction('before'),after:createPurifiedFunction('after'),append:createPurifiedFunction('append'),prepend:createPurifiedFunction('prepend'),init:function(text,context,rootjQuery){if(typeof text==='string'&&text.indexOf('<')>-1){text=$.box.purifyHTML(text);}
return new original.init(text,context,rootjQuery);},unsafeAppend:function(text){if(typeof text!=='string'||arguments.length>1){throw new Error('unsafeAppend() requires a single string argument.');}
return original.append.call(this,text);},attr:function(name,value){var newArgs=$.makeArray(arguments);if(newArgs.length>1){newArgs[1]=$.box.purifyHTML(value);}
return original.attr.apply(this,newArgs);},attach:function(element){var offset=$j(this).offset();var height=$j(this).outerHeight();$j(element).css({position:'absolute',top:offset.top+height,left:offset.left});return this;},boxDatePicker:function(settings){var box_settings=$.extend({},$.DATEPICKER_DEFAULTS,{mandatory:true},settings);this.datepicker(box_settings);},fastText:function(str){if(!str)return this.text();return this.each(function(){(typeof this.innerText!='undefined')?this.innerText=str:this.textContent=str;});},hasParent:function(str){return(this.parents(str).length>0);}});$.box.appendRequestToken=function(form){var j_request_token=$(form).find('input[name="request_token"]');if(j_request_token.length>0)
{j_request_token.val(window.request_token);}
else
{$('<input type="hidden" name="request_token" style="display: none;" />').val(window.request_token).appendTo(form);}};$.addRequestTokens=function(o){$('form').each(function(){var j_this=$(this);if(j_this.prop('method').toLowerCase()!='post')return;if(j_this.find('input[name="request_token"]').length>0)return;$.box.appendRequestToken(this);});};$(function(){$.addRequestTokens();$('textarea[maxlength][maxlength!=-1]').each(function()
{$(this).maxLength($(this).attr('maxlength'));});if($.validator)
{$.validator.setDefaults({errorElement:'span',errorPlacement:function(error,element){error.addClass('img icon sprite_16x16_error').css('position','absolute').text('').insertAfter(element);var el_position=element.position();var el_outer_height=element.outerHeight();var top_margin=(el_outer_height-error.outerHeight())/2;var el_margin_top=element.css('margin-top')?parseInt(element.css('margin-top').replace('px','')):0,el_margin_left=element.css('margin-left')?parseInt(element.css('margin-left').replace('px','')):0;var error_margin_right=error.css('margin-right');error_margin_right=error_margin_right.substring(0,error_margin_right.length-2);var error_margin_top=error.css('margin-top');error_margin_top=error_margin_top.substring(0,error_margin_top.length-2);if(isNaN(parseInt(error_margin_right)))error_margin_right=0;if(isNaN(parseInt(error_margin_top)))error_margin_top=0;error_margin_top=parseInt(error_margin_top);var left=el_position.left+element.outerWidth()-error.outerWidth()-error_margin_right+el_margin_left;var pos_top=el_position.top+top_margin+error_margin_top+el_margin_top;error.css('left',left+'px').css('top',pos_top+'px');if($j('.error_msg').is(':visible'))
{error.data('position_fixed',true);}
error.removeClass('img icon sprite_16x16_error');},showErrors:function(errorMap,errorList){this.defaultShowErrors();var list_length=errorList.length;for(var i=0;this.errorList[i];i++){var error_info=this.errorList[i];var element=error_info.element;var error=this.errorsFor(element);var showTooltipOnErrorIcon=false;if(typeof error_info.message=='string'&&error_info.message.match(/<\s*a/i))
{Canvas.get().add_user_form.showErrors(element,error_info.message,error);}
else
{this.settings.errorPlacement(error,$j(element));error.addClass('img icon sprite_16x16_error').text('').attr({'data-hover':'tooltip','aria-label':error_info.message});showTooltipOnErrorIcon=true;var j_error_msg=$j('.error_msg');if(j_error_msg.is(':visible')&&!error.data('position_fixed'))
{if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/plugins/jquery/jquery.box.js:13490','2013-05-15','auto tombstoned');error.css('top',error.position().top+j_error_msg.outerHeight()).data('position_fixed',true);}}
$j(element).parent().children('label').addClass('error');$j(element).parent().children('label').contents().filter(function(){return this.nodeType==3;}).wrap('<span></span>');$j(element).parent().children('label').children('span').attr({'data-hover':'tooltip','aria-label':error_info.message});if(list_length==1&&!$j(element).is(':focus'))
{var error_element=error;if(error.attr('generated')&&!showTooltipOnErrorIcon)
{error_element=error.parent().find('input');}
var tooltips=Box.Application.getService('tooltips');if(tooltips)
{tooltips.showTooltips({element:error_element.get(0),duration:(this.settings.tip_delay?this.settings.tip_delay:1200)});}}}
var resize_timer;$j(window).resize(function(){clearTimeout(resize_timer);resize_timer=setTimeout(function(){$j('.error.icon').remove();},200);});},unhighlight:function(element,errorClass,validClass)
{$j(element).removeClass(errorClass).addClass(validClass);$j(element).removeAttr('title data-hover aria-label');$j(element).parent().children('label').removeClass('error');$j(element).parent().children('label').children('span').removeAttr('title data-hover aria-label');var j_form_help=$j(element).parent().find('.form_help');if(j_form_help.data('form_help_text'))
{if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/plugins/jquery/jquery.box.js:13495','2013-05-15','auto tombstoned');j_form_help.text(j_form_help.data('form_help_text'));j_form_help.removeClass('ptn mtn');}}});}});$.in_error=0;$.oldAjax=$.ajax;$.ajax=function(s){var oldSuccess=s.success;s.success=function(response){$.in_error=0;if(typeof response=='object'&&response)
{if(response.e_session)
{var url_service=Box.Application.getService('url');var path_prefix=window.path_prefix?window.path_prefix:'';window.onbeforeunload=null;if(response.errormessage=='session limit reached')
{url_service.goToUrl('/'+path_prefix+'logout');}
else if(window.widget_original_url&&(response.errormessage=='request token invalid'||response.errormessage=='redirect required'||response.errormessage=='session expired'))
{url_service.goToUrl(window.widget_original_url+'&session_expired=1');}
else if(response.errormessage=='request token invalid')
{alert('The page you were viewing has expired. Please try your request again.');window.location.reload();}
else if(response.errormessage=='redirect required')
{alert('The page you were viewing has expired. Please try your request again.');window.location.reload();}
else if(response.errormessage=='feature access not allowed')
{if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/plugins/jquery/jquery.box.js:13502','2013-05-15','auto tombstoned');url_service.goToUrl('/master/settings/account');}
else
{url_service.goToUrl('/'+path_prefix+'login');}
return false;}}
if($.isFunction(oldSuccess))oldSuccess.apply(this,arguments);};var oldError=s.error;s.error=function(xhr,error,exception){if($.popup&&$.popup.get().is(':visible')){$.popup.revert();}
if($.in_error==0){$.in_error=1;var url='/index.php?rm=box_ajax_log_response_error',code,response,statustext;if(error&&error!='timeout')
{code=xhr.status;response=xhr.responseText;try
{statustext=xhr.statusText;}
catch(e)
{if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/plugins/jquery/jquery.box.js:13504','2013-05-15','auto tombstoned');statustext='';}}
var data={error:error,code:typeof code=='undefined'?'':code,response:typeof response=='undefined'?'':response,statustext:typeof statustext=='undefined'?'':statustext,exception:typeof exception=='undefined'?'':exception,request_url:s.url,request_type:s.type,request_data:s.data,current_location:window.location.href};var is_dead_long_poll=(xhr.status==0&&xhr.readyState==0);if(!is_dead_long_poll)
{$.post(url,data);}}
if($.isFunction(oldError))oldError.apply(this,arguments);};var is_embed_widget=!!window.is_embed_widget;if(!s.no_context&&(typeof window.current_rm!='undefined'&&((current_rm=='box_shared_show'||current_rm=='box_shared_show_by_name'||current_rm=='box_view_vanity_url')||(is_embed_widget&&current_rm=='box_files'))))
{var query_params={};var context=Canvas.get().context();if(context.shared_item)
{query_params.shared_item=context.shared_item;}
if(window.Features&&window.additional_context)
{query_params.additional_context=window.additional_context;}
var query=$j.box.formatQuery(query_params);if(typeof s.data=='string')
{s.data+=(s.data?'&':'')+query;}
else
{s.url+=(s.url.indexOf('?')>0?'&':'?')+query;}}
if(!s.no_context&&is_embed_widget)
{var navState=Box.Application.getService('nav-state'),state=navState.get();var sort=state.sort?state.sort:window.widget_sort;var sort_direction=state.sortDirection?state.sortDirection:window.widget_direction;var widget_config_query_string='&widget_config[view]='+encodeURIComponent(window.widget_view)+'&widget_config[sort]='+encodeURIComponent(sort)+'&widget_config[direction]='+encodeURIComponent(sort_direction)+'&widget_config[theme]='+encodeURIComponent(window.widget_theme)+'&widget_config[show_item_feed_actions]='+encodeURIComponent(window.widget_show_item_feed_actions)+'&widget_config[show_parent_path]='+encodeURIComponent(window.widget_show_parent_path)+'&widget_config[root_folder_id]='+encodeURIComponent(window.widget_root_folder_id)+'&widget_config[view_file_only]='+encodeURIComponent(window.widget_view_file_only)+'&widget_config[shared_name]='+encodeURIComponent(window.widget_shared_name);if(typeof s.data=='string')
{s.data+=(s.data?'&':'')+'is_embed_widget='+encodeURIComponent(navState.isEmbedWidget());s.data+=widget_config_query_string;}
else
{s.url+=(s.url.indexOf('?')>0?'&':'?')+'is_embed_widget='+encodeURIComponent(navState.isEmbedWidget());s.url+=widget_config_query_string;}}
var progress_callback=s.progress_callback,get_progress_results;if(progress_callback&&$.isFunction(progress_callback))
{var request_key=Math.random();if(typeof s.data!=='string')
{s.data.request_key_for_adding_progress_results=request_key;}
else
{s.data+=(s.data?'&':'')+'request_key_for_adding_progress_results='+encodeURIComponent(request_key);}
var request_finished=false;var failed_attempt_count=0;get_progress_results=function()
{$.getJSON('/index.php?rm=box_get_progress_results_percentage',{request_key:request_key},function(json)
{var progress_finished=json.status=='finished';if(progress_finished||request_finished)
{progress_callback(json.progress_results,request_finished);return;}
else if(json.status=='progressing')
{progress_callback(json.progress_results);setTimeout(get_progress_results,500);}
else if(json.status=='not_started'||json.status=='empty_progress_results')
{failed_attempt_count++;if(failed_attempt_count>=50)return;setTimeout(get_progress_results,500);}});};var old_success=s.success;s.success=function(json)
{request_finished=true;var progress_results=[];progress_callback(progress_results,request_finished);old_success(json);};}
var newSettings=$.extend({},s),beforeSend=s.beforeSend;if(beforeSend){newSettings.beforeSend=function(){return $.ajaxSettings.beforeSend.apply(this,arguments)&&beforeSend.apply(this,arguments);};}
var promise=$.oldAjax(newSettings);if(get_progress_results)
{get_progress_results();}
return promise;};$.oldPost=$.post;$.post=function(url,data,callback,type,progress_callback)
{if(jQuery.isEmptyObject(data))
{if(typeof data!=='string')
{data={'dummy_variable_that_wont_have_namespace_conflict':'true'};}}
return $.oldPost(url,data,callback,type,progress_callback);};$.ps_timeout_id=null;$.fn.password_strength=function(j_strength_meter_container,options){options=options||{};var me=this;if(this.val())
{$j.box.test_password_strength(j_strength_meter_container,me,options);}
this.on('keyup blur',function()
{if($._ps_timeout_id)
{clearTimeout($._ps_timeout_id);$._ps_timeout_id=null;}
$._ps_timeout_id=setTimeout(function(){$j.box.test_password_strength(j_strength_meter_container,me,options);},150);});};$.fn.copyCSS=function(src,properties){src=$(src);var dest=$(this);var length=properties.length;var arr=[];for(var i=0;i<length;i++)
{var prop=properties[i];if({padding:1,margin:1}[prop])
{arr=[prop+'-top',prop+'-right',prop+'-bottom',prop+'-left'];copyCSSFromArray(dest,src,arr);}
else if(prop=='font')
{arr=[prop+'-size',prop+'-family',prop+'-style',prop+'-weight'];copyCSSFromArray(dest,src,arr);}
else
{dest.css(prop,src.css(prop));}}
function copyCSSFromArray(dest,src,arr)
{var length=arr.length;for(var i=0;i<length;i++)
{var currArr=arr[i];dest.css(currArr,src.css(currArr));}}
return dest;};$.fn.rotator=function(options)
{options=options||{};options.step=options.step||1;options.virtual_frames=options.virtual_frames||0;return this.each(function()
{var current=0,i;var arrow_left=$(this).find('.slideshow_button_left');var arrow_right=$(this).find('.slideshow_button_right');var items=$(this).find('.slideshow_tab_item');var count=items.length;var frame=$(this).find('.slideshow_tab_item').filter(':visible').length;var step=options.step;if(step=='frame')step=frame;if(count>frame)
{arrow_right.removeClass('slideshow_button_right_disabled');arrow_left.click(function()
{if(current<=0)return false;items.hide();current-=step;for(i=0;i<step;i++)
{$(items[current+i]).show();}
if(current==0)$(this).addClass('slideshow_button_left_disabled');if(current+frame<count)arrow_right.removeClass('slideshow_button_right_disabled');});arrow_right.click(function()
{if(count<=current+step)return false;items.hide();for(i=0;i<step;i++)
{if(current+step+i<=count)
{$(items[current+step+i]).show();}}
current+=step;if(count<=current+step)$(this).addClass('slideshow_button_right_disabled');if(current)arrow_left.removeClass('slideshow_button_left_disabled');});}
$j(this).bind('reset',function(){arrow_left.addClass('slideshow_button_left_disabled');arrow_right.toggleClass('slideshow_button_right_disabled',count<=frame);current=0;items.hide();for(i=0;i<step;i++)
{$(items[current+i]).show();}});});};}(jQuery));Box.Timing.execution.push({name:'js/translations.js',time:(new Date()).getTime()});var $t=(function(){'use strict';function truncate(text,id){var delimiterPosition=id.search(':'),parts,maxLength;if(delimiterPosition==-1){return text;}
parts=id.split(':',2);maxLength=parts[1];return text.substring(0,maxLength);}
function sprintf2(text,id,args){var index,numArgs=args.length;if(!text){return text;}else if(!numArgs){return truncate(text,id);}
for(index=0;index<numArgs;index++){text=text.replace('%'+(index+1),args[index]);}
return truncate(text,id);}
return function(eng,id){var args=Array.prototype.slice.call(arguments);args=(args.length>2)?args.slice(2):[];if(typeof Features!='undefined'&&Features.emit_translation_tags){return id;}
if(typeof PseudoLocalization!=='undefined'&&PseudoLocalization.isEnabledFromCookie()){var pseudoStr=PseudoLocalization.translate(eng);return sprintf2(pseudoStr,id,args);}
if(typeof(LANGUAGE)=='undefined'||LANGUAGE=='eng'){return sprintf2(eng,id,args);}else if(!TRANSLATIONS[id]){return sprintf2(eng,id,args);}
return sprintf2(TRANSLATIONS[id][LANGUAGE]||eng,id,args);};}());Box.Timing.execution.push({name:'js/jquery/jquery.placeholderize.js',time:(new Date()).getTime()});;(function($,window,document,undefined){var pluginName='placeholderize',defaults={skipModernBrowsers:true,color:'#999',elementWidth:0,elementToCheck:'',elementToCheckSelector:'',extraMarginTop:0,extraMarginLeft:0,extraMarginTopIE:0,extraMarginLeftIE:0,forceInline:false,forceBlock:false};function Placeholderize(element,options){this.element=element;this.options=$.extend({},defaults,options);this._defaults=defaults;this._name=pluginName;this.init();}
Placeholderize.prototype.init=function(){var jElement=$(this.element);var testElement,parentElementToWrap;var applyPlaceholder=false;var me=this;if(this.options.skipModernBrowsers)
{testElement=document.createElement('input');if('placeholder'in testElement)
{applyPlaceholder=true;}}
if(!applyPlaceholder)
{this.options.placeholderText=this.options.placeholderText||jElement.attr('placeholder')||jElement.data('placeholder');if(typeof this.options.placeholderText=="undefined"||(this.options.placeholderText&&$.trim(this.options.placeholderText).length<1))return;this.options.placeholderName=this.options.placeholderName||jElement.attr('id')||jElement.attr('name')||'noname';jElement.data('placeholder',jElement.attr('placeholder'));jElement.attr('placeholder','');jElement.addClass('placeholderized');var isEleInline=(jElement.css('display')=='inline'||jElement.css('display')=='inline-block');if(this.options.forceInline||(isEleInline&&!this.options.forceBlock))
{parentElementToWrap=$('<span></span>');}
else
{parentElementToWrap=$('<div></div>');}
parentElementToWrap.addClass('placeholderize-wrapper-'+this.options.placeholderName).css({position:'relative'});jElement.wrap(parentElementToWrap);parentElementToWrap=jElement.parent();var zIndex=jElement.css('z-index');zIndex=zIndex=='auto'?'1':parseInt(zIndex,10)+1;var isVisible=jElement.is(':visible');var isOnPage=(jElement.closest('body').length===1);var elementWidth=parseInt(this.options.elementWidth,10)||(isVisible?parseInt(jElement.width(),10):0);if(elementWidth)
{if(typeof this.options.elementWidth=='string'&&this.options.elementWidth.charAt(this.options.elementWidth.length-1)=='%')
{elementWidth=elementWidth+'%';}
else
{elementWidth=elementWidth+'px';}}
else
{elementWidth='auto';}
var lineHeight='';var paddingLeft,marginLeft,borderLeft;if(jElement[0].tagName.toLowerCase()=='input')
{lineHeight=isVisible?parseInt(jElement.innerHeight(),10):4;lineHeight=lineHeight>=12?lineHeight+'px':lineHeight+10+'px';paddingLeft=isOnPage?parseInt(jElement.css('padding-left'),10):NaN;marginLeft=isOnPage?parseInt(jElement.css('margin-left'),10):NaN;borderLeft=isOnPage?parseInt(jElement.css('border-left-width'),10):NaN;}
else
{lineHeight='normal';paddingLeft=parseInt(jElement.css('padding-left'),10);marginLeft=parseInt(jElement.css('margin-left'),10);borderLeft=parseInt(jElement.css('border-left-width'),10);}
paddingLeft=paddingLeft?paddingLeft:0;marginLeft=marginLeft?marginLeft:0;borderLeft=borderLeft?borderLeft:0;if($.browser.msie)
{if(this.options.extraMarginLeftIE)this.options.extraMarginLeft=this.options.extraMarginLeftIE;if(this.options.extraMarginTopIE)this.options.extraMarginTop=this.options.extraMarginTopIE;}
var totalMarginLeft=paddingLeft+marginLeft+borderLeft+parseInt(this.options.extraMarginLeft,10)+'px';var totalMarginTop=parseInt(this.options.extraMarginTop,10)+'px';this.placeholderLabel=$('<label id="placeholderize-label-'+this.options.placeholderName+'" class="placeholderize-label" for="'+this.options.placeholderName+'">'+this.options.placeholderText+'</label>').css({position:'absolute','top':0,'left':0,cursor:'text',color:this.options.color,'font-size':this.options.fontSize||jElement.css('font-size')||'13px','text-align':'left',margin:totalMarginTop+' 0 0 '+totalMarginLeft,padding:'0',width:elementWidth,'line-height':lineHeight,'z-index':zIndex,'pointer-events':'none','white-space':this.options.whiteSpaceCssValue||'nowrap','overflow':'hidden'}).prependTo(parentElementToWrap.css({width:elementWidth,'float':jElement.css('float')}));if(this.options.delayInitialTextUpdate)
{setTimeout(updateText,1);}
else
{updateText();}
this.placeholderLabel.on('click',function(){$(this).siblings('input, textarea').trigger('focus');});}
jElement.on('keyup change',updateText);function updateText()
{var jThis=jElement;var placeholderLabel=jThis.siblings('.placeholderize-label');if($j(me.options.elementToCheck).find(me.options.elementToCheckSelector).filter(':visible').length>0||jThis.val().length>0)
{if(!me.placeholderText)
{me.placeholderText=jThis.attr('placeholder');}
jThis.attr('placeholder','');placeholderLabel.css('display','none');}
else
{if(!jThis.attr('placeholder')&&me.placeholderText)
{jThis.attr('placeholder',me.placeholderText);}
placeholderLabel.css('position','relative').show(0,function(){$(this).css('position','absolute');});}}};Placeholderize.prototype.reInitializeText=function()
{var jElement=$(this.element);var newPlaceholderText=jElement.attr('placeholder');if(newPlaceholderText&&this.placeholderLabel)
{jElement.attr('placeholder','');jElement.data('placeholder',newPlaceholderText);this.options.placeholderText=newPlaceholderText;this.placeholderLabel.html(newPlaceholderText).show();}};Placeholderize.prototype.revert=function()
{var text=this.options.placeholderText;var jElement=$(this.element);if(text)jElement.attr('placeholder',text);jElement.removeData('placeholder');jElement.removeClass('placeholderized');if(this.placeholderLabel)
{this.placeholderLabel.remove();jElement.unwrap();}
jElement.removeData('plugin_'+pluginName);};$.fn[pluginName]=function(options){return this.each(function(){var existingPlugin=$.data(this,'plugin_'+pluginName);if(!existingPlugin)
{$.data(this,'plugin_'+pluginName,new Placeholderize(this,options));}
else
{existingPlugin.reInitializeText();}});};$.fn['removePlaceholderize']=function(options)
{return this.each(function(){var existingPlugin=$.data(this,'plugin_'+pluginName);if(existingPlugin)
{existingPlugin.revert();}});};})(jQuery,window,document);Box.Timing.execution.push({name:'js/box_loader.js',time:(new Date()).getTime()});(function(){function Promise(){var passCallbacks=[];var failCallbacks=[];var STATE_UNRESOLVED=0;var STATE_RESOLVED=1;var STATE_REJECTED=2;var state=STATE_UNRESOLVED;var done=this.done=function(callback){if(!callback){return;}
if(state===STATE_RESOLVED){callback();}else if(passCallbacks){passCallbacks.push(callback);}};var fail=this.fail=function(callback){if(!callback){return;}
if(state===STATE_REJECTED){callback();}else if(failCallbacks){failCallbacks.push(callback);}};var then=this.then=function(passCallback,failCallback){var newPromise=new Promise();newPromise.done(passCallback);newPromise.fail(failCallback);done(newPromise.resolve);fail(newPromise.reject);return newPromise.promise();};var _complete=function(callbacks,finalState){if(state!==STATE_UNRESOLVED){return;}
state=finalState;for(var i=0;i<callbacks.length;i++){callbacks[i]();}
passCallbacks=null;failCallbacks=null;};this.resolve=function(){_complete(passCallbacks,STATE_RESOLVED);};this.reject=function(){_complete(failCallbacks,STATE_REJECTED);};this.promise=function(obj){obj=obj||{};obj.done=done;obj.fail=fail;obj.then=then;return obj;};}
function createLoader(exports,mockWindow,mockDocument){mockWindow=mockWindow||window;mockDocument=mockDocument||document;exports=exports||{};var t3Loaded=new Promise();exports.t3Loaded=t3Loaded.promise();var pageReady=new Promise();exports.pageReady=pageReady.promise();var pageLoad=new Promise();exports.pageLoad=pageLoad.promise();var hasT3Initialized=false;function initializeT3(){if(hasT3Initialized){return;}
hasT3Initialized=true;if(mockWindow.Box&&mockWindow.Box.Application&&mockWindow.initialConfig){mockWindow.Box.Application.init(mockWindow.initialConfig);}
t3Loaded.resolve();}
pageReady.done(initializeT3);if(mockDocument.addEventListener){mockWindow.addEventListener('load',function(){pageReady.resolve();pageLoad.resolve();},false);}else{mockWindow.attachEvent('onload',function(){pageReady.resolve();pageLoad.resolve();});}
exports.allScriptsLoaded=function(){pageReady.resolve();};var i;if(mockWindow.onreadyList){for(i=0;i<mockWindow.onreadyList.length;i++){pageReady.done(mockWindow.onreadyList[i]);}
mockWindow.onreadyList={push:pageReady.done};}
if(mockWindow.onloadList){for(i=0;i<mockWindow.onloadList.length;i++){pageLoad.done(mockWindow.onloadList[i]);}
mockWindow.onloadList={push:pageLoad.done};}
return exports;}
window.Loader=createLoader();window.Loader._createLoader=createLoader;window.Loader._createPromise=function(){return new Promise();};})();Box.Timing.execution.push({name:'js/vendor/box/t3-0.2.0.js',time:(new Date()).getTime()});window.Box=window.Box||{};Box.EventTarget=(function(){'use strict';var EventTarget=function(){this._handlers={};};EventTarget.prototype={constructor:EventTarget,on:function(type,handler){if(typeof this._handlers[type]==='undefined'){this._handlers[type]=[];}
this._handlers[type].push(handler);},fire:function(type,data){var handlers,i,len,event={type:type,data:data};handlers=this._handlers[event.type];if(handlers instanceof Array){handlers=handlers.concat();for(i=0,len=handlers.length;i<len;i++){handlers[i].call(this,event);}}},off:function(type,handler){var handlers=this._handlers[type],i,len;if(handlers instanceof Array){for(i=0,len=handlers.length;i<len;i++){if(handlers[i]===handler){handlers.splice(i,1);break;}}}}};return EventTarget;}());Box.Context=(function(){'use strict';var Context=function(application,element){this.application=application;this.element=element;};Context.prototype={broadcast:function(name,data){this.application.broadcast(name,data);},getService:function(serviceName){return this.application.getService(serviceName);},getConfig:function(name){return this.application.getModuleConfig(this.element,name);},getGlobalConfig:function(name){return this.application.getGlobalConfig(name);},getElement:function(){return this.element;}};return Context;})();Box.Application=(function(){'use strict';var MODULE_CLASS_SELECTOR='.module';var globalConfig={},modules={},services={},behaviors={},instances={},exports=[],initialized=false,application=new Box.EventTarget();var eventTypes=['click','mouseover','mouseout','mousedown','mouseup','mouseenter','mouseleave','keydown','keyup','submit','change','contextmenu','dblclick'];function reset(){globalConfig={};modules={};services={};behaviors={};instances={};initialized=false;for(var i=0;i<exports.length;i++){delete application[exports[i]];delete Box.Context.prototype[exports[i]];}
exports=[];}
function error(message,exception){if(exception){exception.name=message+' - '+exception.name;}else{exception=new Error(message);}
if(globalConfig.debug){throw exception;}else{application.fire('error',{message:message,exception:exception});}}
function captureObjectErrors(object,objectName){var propertyName,propertyValue;for(propertyName in object){propertyValue=object[propertyName];if(typeof propertyValue==='function'){object[propertyName]=(function(methodName,method){return function(){try{return method.apply(this,arguments);}catch(ex){error(objectName+'.'+methodName+'()',ex);}};}(propertyName,propertyValue));}}}
function getModuleName(element){var moduleDeclaration=$(element).data('module');if(moduleDeclaration){return moduleDeclaration.split(' ')[0];}
return'';}
function callModuleMethod(instance,method){if(typeof instance[method]==='function'){instance[method].apply(instance,Array.prototype.slice.call(arguments,2));}}
function getService(serviceName){var serviceData=services[serviceName];if(serviceData){if(!serviceData.instance){serviceData.instance=serviceData.creator(application);}
return serviceData.instance;}
return null;}
function getBehaviors(instanceData){var i,behaviorNames,behaviorData,behaviorInstances=[],moduleBehaviorInstances;behaviorNames=instanceData.instance.behaviors||[];for(i=0;i<behaviorNames.length;i++){if(!('behaviorInstances'in instanceData)){instanceData.behaviorInstances={};}
moduleBehaviorInstances=instanceData.behaviorInstances;behaviorData=behaviors[behaviorNames[i]];if(behaviorData){if(!moduleBehaviorInstances[behaviorNames[i]]){moduleBehaviorInstances[behaviorNames[i]]=behaviorData.creator(instanceData.context);}
behaviorInstances.push(moduleBehaviorInstances[behaviorNames[i]]);}else{error('Behavior "'+behaviorNames[i]+'" not found');}}
return behaviorInstances;}
function getNearestTypeElement(element){var $element=$(element),found=$element.is('[data-type]');while(!found&&$element.length&&!$element.hasClass('module')){$element=$element.parent();found=$element.is('[data-type]');}
return found?$element[0]:null;}
function bindEventType(element,type,handlers){var eventHandler=function(event){var targetElement=getNearestTypeElement(event.target),elementType=targetElement?targetElement.getAttribute('data-type'):'';for(var i=0;i<handlers.length;i++){handlers[i](event,targetElement,elementType);}
return true;};$(element).on(type,eventHandler);return eventHandler;}
function bindEventListeners(instanceData){var i,j,type,eventHandlerName,eventHandlerFunctions,behaviors=getBehaviors(instanceData);for(i=0;i<eventTypes.length;i++){eventHandlerFunctions=[];type=eventTypes[i];eventHandlerName='on'+type;if(instanceData.instance[eventHandlerName]){eventHandlerFunctions.push($.proxy(instanceData.instance[eventHandlerName],instanceData.instance));}
for(j=0;j<behaviors.length;j++){if(behaviors[j][eventHandlerName]){eventHandlerFunctions.push($.proxy(behaviors[j][eventHandlerName],behaviors[j]));}}
if(eventHandlerFunctions.length){instanceData.eventHandlers[type]=bindEventType(instanceData.element,type,eventHandlerFunctions);}}}
function unbindEventListeners(instanceData){for(var type in instanceData.eventHandlers){$(instanceData.element).off(type,instanceData.eventHandlers[type]);}
instanceData.eventHandlers={};}
function getInstanceDataByElement(element){return instances[element.id];}
return $.extend(application,{init:function(params){$.extend(globalConfig,params||{});this.startAll(document.documentElement);this.fire('init');initialized=true;},destroy:function(){this.stopAll(document.documentElement);reset();},isStarted:function(element){var instanceData=getInstanceDataByElement(element);return(typeof instanceData==='object');},start:function(element){var moduleName=getModuleName(element),moduleData=modules[moduleName],instanceData,context,module;if(!moduleData){error('Module type "'+moduleName+'" is not defined.');return;}
if(!this.isStarted(element)){if(!element.id){element.id='mod-'+moduleName+'-'+moduleData.counter;}
moduleData.counter++;context=new Box.Context(this,element);module=moduleData.creator(context);if(!globalConfig.debug){captureObjectErrors(module,moduleName);}
instanceData={moduleName:moduleName,instance:module,context:context,element:element,eventHandlers:{}};bindEventListeners(instanceData);instances[element.id]=instanceData;callModuleMethod(instanceData.instance,'init');var behaviors=getBehaviors(instanceData),behaviorInstance;for(var i=0,len=behaviors.length;i<len;i++){behaviorInstance=behaviors[i];callModuleMethod(behaviorInstance,'init');}}},stop:function(element){var instanceData=getInstanceDataByElement(element),moduleName,moduleData;if(!instanceData){if(globalConfig.debug){error('Unable to stop module associated with element: '+element.id);return;}}else{moduleName=instanceData.moduleName;moduleData=modules[moduleName];unbindEventListeners(instanceData);var behaviors=getBehaviors(instanceData);var behaviorInstance;for(var i=behaviors.length-1;i>=0;i--){behaviorInstance=behaviors[i];callModuleMethod(behaviorInstance,'destroy');}
callModuleMethod(instanceData.instance,'destroy');delete instances[element.id];}},startAll:function(root){var me=this,$root=$(root);$root.find(MODULE_CLASS_SELECTOR).each(function(idx,element){me.start(element);});},stopAll:function(root){var me=this,$root=$(root);$root.find(MODULE_CLASS_SELECTOR).each(function(idx,element){me.stop(element);});},addModule:function(moduleName,creator){if(typeof modules[moduleName]!=='undefined'){error('Module '+moduleName+' has already been added.');return;}
modules[moduleName]={creator:creator,counter:1};},getModuleConfig:function(element,name){var instanceData=getInstanceDataByElement(element),configElement;if(instanceData){if(!instanceData.config){configElement=$(element).find('script[type="text/x-config"]')[0];if(configElement){instanceData.config=$.parseJSON(configElement.text);}}
if(!instanceData.config){return null;}else if(typeof name==='undefined'){return instanceData.config;}else if(name in instanceData.config){return instanceData.config[name];}else{return null;}}
return null;},addService:function(serviceName,creator,options){if(typeof services[serviceName]!=='undefined'){error('Service '+serviceName+' has already been added.');return;}
options=options||{};services[serviceName]={creator:creator,instance:null};if(options.exports){for(var i=0;i<options.exports.length;i++){var methodName=options.exports[i];var handler=(function(methodName){return function(){var service=getService(serviceName);return service[methodName].apply(service,arguments);};}(methodName));if(methodName in this){error(methodName+' already exists on Application object');return;}else{this[methodName]=handler;}
if(methodName in Box.Context.prototype){error(methodName+' already exists on Context prototype');return;}else{Box.Context.prototype[methodName]=handler;}
exports.push(methodName);}}},getService:getService,addBehavior:function(behaviorName,creator){if(typeof behaviors[behaviorName]!=='undefined'){error('Behavior '+behaviorName+' has already been added.');return;}
behaviors[behaviorName]={creator:creator,instance:null};},broadcast:function(name,data){var i,id,instanceData,behaviorInstance,behaviors,messageHandlers;for(id in instances){messageHandlers=[];instanceData=instances[id];if($.inArray(name,instanceData.instance.messages||[])!==-1){messageHandlers.push($.proxy(instanceData.instance.onmessage,instanceData.instance));}
behaviors=getBehaviors(instanceData);for(i=0;i<behaviors.length;i++){behaviorInstance=behaviors[i];if($.inArray(name,behaviorInstance.messages||[])!==-1){messageHandlers.push($.proxy(behaviorInstance.onmessage,behaviorInstance));}}
for(i=0;i<messageHandlers.length;i++){messageHandlers[i](name,data);}}},getGlobalConfig:function(name){if(typeof name==='undefined'){return globalConfig;}else if(name in globalConfig){return globalConfig[name];}else{return null;}},setGlobalConfig:function(config){if(initialized){error('Cannot set global configuration after application initialization');return;}
for(var prop in config){if(config.hasOwnProperty(prop)){globalConfig[prop]=config[prop];}}}});}());Box.Timing.execution.push({name:'js/plugins/t3/init-global-configs.js',time:(new Date()).getTime()});(function(){if(window.Box&&Box.Application&&window.initialConfig){Box.Application.setGlobalConfig(window.initialConfig);}})();Box.Timing.execution.push({name:'js/box_tombstone.js',time:(new Date()).getTime()});var Tombstone=Base.extend({constructor:function()
{this._recorded_markers={};},_recorded_markers:undefined,_marker:function(marker_location,marker_date,message)
{var logService=Box.Application.getService('logger');marker_location=marker_location||'unknown';marker_date=marker_date||'';message=message||'';var key=marker_location+','+marker_date+','+message;if(key in this._recorded_markers)
{return;}
this._recorded_markers[key]=[marker_location,marker_date,message];message={marker_location:marker_location,marker_date:marker_date,message:message};if(logService!=null)
{logService.sendLog('tombstone','zombie',message);}}},{__instance:undefined,get:function()
{if(!Tombstone.__instance)
{Tombstone.__instance=new Tombstone();}
return Tombstone.__instance;},marker:function(marker_location,marker_date,message)
{var tombstone=Tombstone.get();tombstone._marker(marker_location,marker_date,message);}});Box.Timing.execution.push({name:'js/services/dom.js',time:(new Date()).getTime()});Box.Application.addService('dom',function(application){'use strict';var TRANSITIONS_EVENT_NAMES={'transition':'transitionend','WebkitTransition':'webkitTransitionEnd'},transitionEndEventName=null,isTransitionSupported=false,isTransitionInit=false,hasDOM4ClassList=(typeof document!=='undefined'&&'classList'in document.documentElement);function attachTransitionEndCallback(element,callback){var $element;if(isTransitionSupported&&callback){$element=$(element);$element.one(transitionEndEventName,function(){window.setTimeout(function(){callback(element);},0);});}}
function triggerCallbackIfTransitionIsNotSupported(element,callback){if(!isTransitionSupported&&callback){window.setTimeout(function(){callback(element);},0);}}
function initTransitionLogic(){var eventName,fakeEl;fakeEl=document.createElement('fakeelement');for(eventName in TRANSITIONS_EVENT_NAMES){if(typeof(fakeEl.style[eventName])!=='undefined'){transitionEndEventName=TRANSITIONS_EVENT_NAMES[eventName];break;}}
isTransitionSupported=!!transitionEndEventName;isTransitionInit=true;}
function nativeClassOps(element,className,operation){var i,len,classes,whiteSpace=/\s+/;if(hasDOM4ClassList&&typeof className==='string'){if(Array.isArray(element)){for(i=0,len=element.length;i<len;i++){nativeClassOps(element[i],className,operation);}}else if(element instanceof HTMLElement){classes=className.split(whiteSpace);for(i=0,len=classes.length;i<len;i++){element.classList[operation](classes[i].trim());}}else{jqueryClassOps(element,className,operation);}}else{jqueryClassOps(element,className,operation);}}
function jqueryClassOps(element,className,operation){if(operation==='add'){$(element).addClass(className);}else if(operation==='remove'){$(element).removeClass(className);}}
return{query:function(selector,element){return $(element||document).find(selector)[0];},queryAll:function(selector,element){return $(element||document).find(selector).get();},setHTML:function(element,html){application.stopAll(element);$(element).html(html);application.startAll(element);},remove:function(element){element.parentNode.removeChild(element);},addClass:function(element,className,transitionEndCallback){var $element=$(element);if(!isTransitionInit){initTransitionLogic();}
attachTransitionEndCallback(element,transitionEndCallback);nativeClassOps(element,className,'add');triggerCallbackIfTransitionIsNotSupported(element,transitionEndCallback);},hasClass:function(element,className){if(hasDOM4ClassList&&element instanceof HTMLElement){return element.classList.contains(className);}else{return $(element).hasClass(className);}},removeClass:function(element,className,transitionEndCallback){var $element=$(element);if(!isTransitionInit){initTransitionLogic();}
attachTransitionEndCallback(element,transitionEndCallback);nativeClassOps(element,className,'remove');triggerCallbackIfTransitionIsNotSupported(element,transitionEndCallback);},getNearest:function(element,selector){var $element=$(element),found=$element.is(selector);while(!found&&$element.length&&!$element.hasClass('module')){$element=$element.parent();found=$element.is(selector);}
return found?$element[0]:null;},getNearestTypeElement:function(target){return this.getNearest(target,'[data-type]');},getData:function(element,name){return $(element).data(name);},on:function(target,eventType,handler){$(target).on(eventType,handler);},off:function(target,eventType,handler){$(target).off(eventType,handler);},createFragmentFromHtml:function(html){var container=document.createElement('div'),fragment=document.createDocumentFragment();$(container).html(html);while(container.firstChild){fragment.appendChild(container.firstChild);}
return fragment;},getComputedCSS:function(elementEl){var computedValues={},elementCssStyles,propertyName,$element=$(elementEl);if(window.getComputedStyle){elementCssStyles=window.getComputedStyle(elementEl,null);if(elementCssStyles){if(elementCssStyles.length){for(var i=0,l=elementCssStyles.length;i<l;i++){propertyName=elementCssStyles[i];computedValues[propertyName]=$element.css(propertyName);}}
else{for(propertyName in elementCssStyles){computedValues[propertyName]=$element.css(propertyName);}}
return computedValues;}}
if(elementEl.currentStyle){elementCssStyles=elementEl.currentStyle;for(propertyName in elementCssStyles){computedValues[propertyName]=$element.css(propertyName);}
return computedValues;}
if(elementEl.style){elementCssStyles=elementEl.style;for(propertyName in elementCssStyles){if(typeof elementCssStyles[propertyName]!='function'){computedValues[propertyName]=$element.css(propertyName);}}}
return computedValues;}};});Box.Timing.execution.push({name:'js/services/v5.js',time:(new Date()).getTime()});Box.Application.addService('v5',function(application){'use strict';return{get:function(name){var object=null;object=window[name];if(object&&typeof object.get==='function'){object=object.get();}
return object;}};});Box.Timing.execution.push({name:'js/services/cookies.js',time:(new Date()).getTime()});Box.Application.addService('cookies',function(application){'use strict';var doc=window.document;return{_setDoc:function(newDoc){doc=newDoc;},get:function(name){var cookies=doc.cookie.split('; '),pair,i,len;for(i=0,len=cookies.length;i<len;i++){pair=cookies[i].split('=');if(pair[0]===name){if(pair[1]){return decodeURIComponent(pair[1]);}else{return'';}}}
return'';},remove:function(name){this.set(name,'',new Date(0));},set:function(name,value,expires,path,domain,secure){var expiresDate=new Date(),cookie;if(typeof expires=='undefined'){expires=expiresDate.getTime()+(1000*3600*24*60);}
expiresDate.setTime(expires);path=path||'/';var configCookieDomain=Box.Application.getGlobalConfig('cookieDomain');if(!domain&&configCookieDomain){domain=configCookieDomain;}else if(!domain&&typeof cookie_domain!='undefined'){if(typeof(Tombstone)!=='undefined'){Tombstone.marker('./js/services/cookies.js:82','2014-02-10','need to weed out usage of cookie_domain and move it over to globalconfig');}
domain=cookie_domain;}
cookie=name+'='+encodeURIComponent(value)+'; expires='+expiresDate.toGMTString()+'; path='+path;if(domain){cookie+='; domain='+domain;}
if(secure){cookie+='; secure';}
doc.cookie=cookie;},isEnabled:function(){return doc.cookie&&doc.cookie.length>0;}};});Box.Timing.execution.push({name:'js/services/templates.js',time:(new Date()).getTime()});Box.Application.addService('templates',function(application){'use strict';var HTML_CHARS_MATCHER=/[<>"&'\/`]/g,HTML_REPLACEMENTS={'<':'&lt;','>':'&gt;','"':'&quot;','&':'&amp;','\'':'&#x27;','/':'&#x2f;','`':'&#x60;'},doc=document;return{escapeHTML:function(text){return text.replace(HTML_CHARS_MATCHER,function(c){return HTML_REPLACEMENTS[c];});},getTemplateHTML:function(templateID,data){var templateElement=doc.getElementById('jst-'+templateID),html='';if(templateElement){html=templateElement.text.replace(/^\s+|\s+$/g,'');if(html){if(data){html=html.replace(/<%=\s*(\w+)\s*%>/g,$.proxy(function(match,key){var value=data[key]||'';return value?this.escapeHTML(value):'';},this));}
return html;}else{throw new Error('Template "'+templateID+'" is an empty string.');}}else{throw new Error('Template "'+templateID+'" not found.');}},getTemplateFragment:function(templateID,data){var dom=application.getService('dom'),html=this.getTemplateHTML(templateID,data);return dom.createFragmentFromHtml(html);}};});Box.Timing.execution.push({name:'js/services/tooltips.js',time:(new Date()).getTime()});Box.Application.addService('tooltips',function(application){'use strict';var tooltipTimeout=null;var tooltipDuration=null;var $tooltipTarget=null;function clearTooltipTimeout(){clearTimeout(tooltipTimeout);tooltipTimeout=null;}
function hideTooltip(fadeOut,params){var $tooltip=$('#tooltip');if(tooltipTimeout){clearTooltipTimeout();return;}
if(fadeOut){$tooltip.fadeOut('fast',function removeTooltipCallback(){$(this).remove();});}else{$tooltip.remove();}
if(params&&params.hide_event_type&&$tooltipTarget){$tooltipTarget.unbind(params.hide_event_type);}
$tooltipTarget=null;tooltipDuration=null;}
function isInvalidElement(element){return(element===document.body||!element||element===window);}
function hasTooltip($element){if(($element.attr('data-hover')==='tooltip')||$element.attr('data-tooltipid')||$element.attr('data-htmltooltip')){return true;}
else{return false;}}
function getElementTooltip($element){var tooltip=($element.attr('data-hover')==='tooltip'?$element.attr('aria-label'):null),templates;if(tooltip){return tooltip;}
tooltip=$element.attr('data-tooltipid');if(tooltip){templates=application.getService('templates');tooltip='html:'+templates.getTemplateHTML(tooltip);return tooltip;}
tooltip=$element.attr('data-htmltooltip');if(tooltip){tooltip='html:'+tooltip;return tooltip;}}
function findNearestTooltipTarget(targetElement){while(!isInvalidElement(targetElement)){if(hasTooltip($(targetElement))){return targetElement;}else{targetElement=targetElement.parentNode;}}
return null;}
function showTooltip(tooltip,params){clearTooltipTimeout();$('#tooltip').remove();var pipeIndex=tooltip.indexOf('|');var hasTitle=pipeIndex!==-1;var largeTooltipLength=250;var largeTooltip=false;var tooltipLength;var templates=application.getService('templates');var $tooltipPrototype=$(templates.getTemplateHTML('tooltip_prototype'));var $tooltip=$tooltipPrototype.attr('id','tooltip').hide().appendTo(document.body);var $tooltipContainer=$tooltip.find('.tooltip');var $title=$tooltipContainer.find('h4');var $content=$tooltipContainer.find('p');var body;if(hasTitle){var header=tooltip.substring(0,pipeIndex);if(header.indexOf('html:')===0){header=header.substring(5);}
$title.text(header).show();body=tooltip.substr(pipeIndex+1);tooltipLength=header.length+body.length;}else{$title.hide();body=tooltip;tooltipLength=body.length;}
if(tooltip.indexOf('html:')===0){$content.html(hasTitle?tooltip.substring(pipeIndex+1):tooltip.substring(5));}else{$content.text(body);}
if(tooltipLength>largeTooltipLength){largeTooltip=true;}
var $tooltipBeak=$tooltip.find('.beak');if(largeTooltip){$tooltipContainer.addClass('tooltip_large');}
var elementHeight=$tooltipTarget.outerHeight();var elementWidth=$tooltipTarget.outerWidth();var pos=$tooltipTarget.offset();if(pos.top===0&&pos.left===0&&params.event){pos.top=params.event.pageY;pos.left=params.event.pageX;}
var $window=$(window);var elementTopPadding=parseInt($tooltipTarget.css('padding-top'),10);var tooltipPlacementPadding=Math.max(5-elementTopPadding,0);var tooltipHeight=$tooltip.height()+10+tooltipPlacementPadding;var tooltipWidth=$tooltip.css('left','-99999px').appendTo($('body')).outerWidth();if(largeTooltip&&tooltipWidth>350){tooltipWidth=$tooltip.css('width','350px').outerWidth();}
else if(!largeTooltip&&tooltipWidth>200){tooltipWidth=$tooltip.css('width','200px').outerWidth();}
var tooltipWidthCenter=Math.floor(tooltipWidth/2);var tooltipHeightCenter=Math.floor($tooltip.height()/2);var $targetParentsAndSelf=$tooltipTarget.parents().andSelf();if($tooltipTarget.attr('data-tooltip-dark-grey')=='true'){$tooltip.addClass('tooltip_dark_grey');}else if($targetParentsAndSelf.hasClass('dark_background')){$tooltip.addClass('tooltip_inverse');}
if($tooltipTarget.attr('data-tooltip-margin-left')=='true'){$tooltip.addClass('tooltip_margin_left');}
if($targetParentsAndSelf.hasClass('use_sideways_tooltip')){$tooltipBeak.css('top',tooltipHeightCenter);pos.top-=tooltipHeightCenter;var posLeftOffset=13;if(pos.left-tooltipWidth<$window.scrollLeft()){$tooltipContainer.addClass('left');pos.left+=elementWidth+posLeftOffset;}else{$tooltipContainer.addClass('right');pos.left-=tooltipWidth+posLeftOffset;}}else{$tooltipBeak.css('left',tooltipWidthCenter-9);pos.left+=elementWidth/2;pos.left=Math.floor(pos.left);pos.left-=tooltipWidthCenter;if(pos.left+tooltipWidth>$window.width()){pos.left=pos.left+$tooltipTarget.outerWidth()-tooltipWidthCenter+20;if(pos.left+tooltipWidth>$window.width()){pos.left=$window.width()-tooltipWidth-5;}
$tooltipBeak.css({'left':(tooltipWidth-30)+'px'});}else{if(pos.left<$window.scrollLeft()){pos.left=$window.scrollLeft();$tooltipBeak.css({'left':$window.scrollLeft()+$tooltipTarget.offset().left+($tooltipTarget.outerWidth()/2)-10+'px'});}}
if(pos.top-tooltipHeight>=$window.scrollTop()){$tooltipContainer.addClass('down');pos.top-=tooltipHeight;var $tooltipTable=$tooltipContainer.find('.tooltip_table');if($tooltipTable.length>0){$tooltipTable.closest('.tooltip').addClass('down_tooltip_table');}}else{$tooltipContainer.addClass('up');pos.top+=elementHeight;}}
$tooltip.css({'left':pos.left+'px','top':pos.top+'px'});var fade_in_callback=function(){if(tooltipDuration){setTimeout(function(){hideTooltip(true,params);},tooltipDuration);}};tooltipDuration=params.duration;$tooltip.fadeIn(0,fade_in_callback);}
return{triggerTooltips:function(event){if(event.target.tagName&&event.target.tagName.toLowerCase()=='object'){return;}
var hideEventTypes='mouseleave.tooltip';var clickableTarget=$(event.target).closest('button, a').get(0);if(clickableTarget&&!$(clickableTarget).is(':disabled')){hideEventTypes+=', click.tooltip';}
this.showTooltips({hide_event_type:hideEventTypes,element:event.target,delay:200,event:event});},showTooltips:function(params){var targetElement=findNearestTooltipTarget(params.element);if(!targetElement){hideTooltip(true,params);return;}
if($tooltipTarget&&$tooltipTarget.get(0)==targetElement){return;}
var $prospectiveTarget=$(targetElement);var tooltip=getElementTooltip($prospectiveTarget);if(!tooltip){return;}
hideTooltip(false);$tooltipTarget=$prospectiveTarget;if(params.hide_event_type){$tooltipTarget.bind(params.hide_event_type,function(){hideTooltip(true,params);});}
var delay=params.delay||0;if(delay){clearTooltipTimeout();tooltipTimeout=setTimeout(function(){showTooltip(tooltip,params);},delay);}else{showTooltip(tooltip,params);}},hideTooltips:function(){if(tooltipDuration){return;}
hideTooltip(false);}};});Box.Timing.execution.push({name:'js/services/eloqua.js',time:(new Date()).getTime()});Box.Application.addService('eloqua',function(application){'use strict';return{sendEloquaWith:function(formName,contactMethod,referrerHash,additionalFormDetails){var requestData={form_name:formName,contact_method:contactMethod,referrer_hash:referrerHash,additional_form_details:additionalFormDetails};$.get('/gen204/_send_eloqua',requestData);},waitForEloquaGUIDAndSet:function(){var timerId=null,timeout=5;var waitUntilCustomerGUIDIsRetrieved=function(){if(timerId){if(timeout===0){return;}
if(typeof this.GetElqCustomerGUID==='function'){$('input[name="elqCustomerGUID"]').val(GetElqCustomerGUID());return;}
timeout-=1;}
timerId=setTimeout(waitUntilCustomerGUIDIsRetrieved,500);};waitUntilCustomerGUIDIsRetrieved();_elqQ.push(['elqGetCustomerGUID']);}};});Box.Timing.execution.push({name:'js/services/browser.js',time:(new Date()).getTime()});Box.Application.addService('browser',function(application){'use strict';var MINIMUM_FLASH_VERSION='9';var browserDetect,dataBrowser,dataOS,versionSearchString='';function initBrowserData(){var v5=application.getService('v5'),navigator=v5.get('navigator'),opera=v5.get('opera');dataBrowser=[{string:navigator.userAgent,subString:'Chrome',identity:'Chrome'},{string:navigator.userAgent,subString:'OmniWeb',versionSearch:'OmniWeb/',identity:'OmniWeb'},{string:navigator.vendor,subString:'Apple',identity:'Safari',versionSearch:'Version'},{prop:opera,identity:'Opera',versionSearch:'Version'},{string:navigator.vendor,subString:'iCab',identity:'iCab'},{string:navigator.vendor,subString:'KDE',identity:'Konqueror'},{string:navigator.userAgent,subString:'Firefox',identity:'Firefox'},{string:navigator.vendor,subString:'Camino',identity:'Camino'},{string:navigator.userAgent,subString:'Netscape',identity:'Netscape'},{string:navigator.userAgent,subString:'MSIE',identity:'Explorer',versionSearch:'MSIE'},{string:navigator.userAgent,subString:'Trident',identity:'Explorer',versionSearch:'rv'},{string:navigator.userAgent,subString:'Gecko',identity:'Mozilla',versionSearch:'rv'},{string:navigator.userAgent,subString:'Mozilla',identity:'Netscape',versionSearch:'Mozilla'}];}
function initOSData(){var v5=application.getService('v5'),navigator=v5.get('navigator');dataOS=[{string:navigator.platform,subString:'Win',identity:'Windows'},{string:navigator.userAgent,subString:'iPod',identity:'iOS',device:'iPod'},{string:navigator.userAgent,subString:'iPhone',identity:'iOS',device:'iPhone'},{string:navigator.userAgent,subString:'iPad',identity:'iOS',device:'iPad'},{string:navigator.platform,subString:'Mac',identity:'Mac'},{string:navigator.userAgent,subString:'Android',identity:'Android'},{string:navigator.platform,subString:'Linux',identity:'Linux'}];}
function getBrowserData(data){var i,len,dataString,dataProp,identity=null,device=null;for(i=0,len=data.length;i<len;i++){dataString=data[i].string;dataProp=data[i].prop;versionSearchString=data[i].versionSearch||data[i].identity;if(dataString){if(dataString.indexOf(data[i].subString)!==-1){identity=data[i].identity;device=data[i].device;break;}}else if(dataProp){identity=data[i].identity;device=data[i].device;break;}}
return{'identity':identity,'device':device};}
function getBrowserVersion(dataString){var index=dataString.indexOf(versionSearchString),versionArr;if(index===-1){return'';}
versionArr=dataString.substring(index+versionSearchString.length+1).match(/[0-9]+(?:\.[0-9]*)?/);if(versionArr&&versionArr.length){return versionArr[0];}}
function getMacOsVersion(){var v5=application.getService('v5'),navigator=v5.get('navigator'),versionString=navigator.userAgent.match(/Mac OS X (([\d]+)_([\d]+)_([\d]+))/i);if(!(versionString&&versionString[1])){return null;}
return{version:versionString[1].replace(/_/g,'.'),major:parseInt(versionString[2],10),minor:parseInt(versionString[3],10),maintenance:parseInt(versionString[4],10)};}
function getMacOSVersionName(){var version=getMacOsVersion();if(version){return version.version;}
return'Unknown';}
function getWinOSVersionName(){var v5=application.getService('v5'),navigator=v5.get('navigator');var versionArr=navigator.userAgent.match(/Windows NT (([\d]+).([\d]+))/i);if(!versionArr||!versionArr[1])
{return null;}
var versionString=versionArr[1];if(versionString=='5.0')
{return'2000';}
if(versionString=='5.1'||versionString=='5.2')
{return'XP';}
if(versionString=='6.0')
{return'Vista';}
if(versionString=='6.1')
{return'7';}
if(versionString=='6.2')
{return'8';}
if(versionString=='6.3')
{return'8.1';}
return'Unknown';}
function canMacOsBeProblematicWithChrome(){var version;if(browserDetect.OS==='Mac'){version=getMacOsVersion();return version.major>10||(version.major===10&&version.minor>=7);}
return false;}
function isMacJavaPluginInstalled(){var v5=application.getService('v5'),navigator=v5.get('navigator'),plugins=navigator.plugins,i,length,plugin;if(!plugins){return false;}
if(plugins.refresh){plugins.refresh(false);}
for(i=0,length=plugins.length;i<plugins.length;i++){plugin=plugins[i];if(plugin&&plugin.name.match(/^Java/)){return true;}}
return false;}
function isActiveXObjectEnabledForIE(){var v5=application.getService('v5'),ActiveXObject=v5.get('ActiveXObject'),enabled=false;try{if(ActiveXObject){enabled=!!new ActiveXObject('htmlfile');}}catch(exception){enabled=false;}
return enabled;}
function canPlayType(type,probability){var elem,v5=application.getService('v5'),document=v5.get('document');if(type.indexOf('audio/')===0){elem=document.createElement('audio');}else if(type.indexOf('video/')===0){elem=document.createElement('video');}else{return false;}
return!!(elem.canPlayType&&elem.canPlayType(type).replace(/^no$/,'')===probability);}
browserDetect={init:function(){var v5=application.getService('v5'),navigator=v5.get('navigator'),osInfo;initBrowserData();initOSData();this.browser=getBrowserData(dataBrowser).identity||'An unknown browser';this.version=getBrowserVersion(navigator.userAgent)||getBrowserVersion(navigator.appVersion)||'an unknown version';osInfo=getBrowserData(dataOS);this.OS=osInfo.identity||'an unknown OS';this.device=osInfo.device||'an unknown device';},getName:function(){return this.browser;},getVersion:function(){return this.version;},getOSName:function(){return this.OS;},getDeviceName:function(){return this.device;},getOSVersionName:function(){switch(this.getOSName()){case'Mac':return getMacOSVersionName();case'Windows':return getWinOSVersionName();default:return'Unknown';}},isMinBrowser:function(name,minVersion){return(this.browser.toLowerCase()===name.toLowerCase()&&parseFloat(this.version)>=parseFloat(minVersion));},isHtml5EnabledIE:function(){var v5=application.getService('v5'),document=v5.get('document');if(!this.isMinBrowser('explorer','10')||!document.documentMode){return false;}
return parseInt(document.documentMode)>=10;},isIncompatibleChromeMacCombination:function(){return(this.isChrome()&&canMacOsBeProblematicWithChrome()&&!isMacJavaPluginInstalled());},isIncompatibleSafariMacCombination:function(){if(browserDetect.OS==='Mac'&&this.isSafari()){return this.isMinBrowser('safari','6.1');}
return false;},canUseFlash:function(){var v5=application.getService('v5'),swfobject=v5.get('swfobject');if(this.isIE()&&swfobject){return swfobject.hasFlashPlayerVersion('9.28.0');}
return false;},canUseHtml5:function(){return(this.isMinBrowser('firefox','3.6')||this.isMinBrowser('chrome','5')||this.isHtml5EnabledIE()||this.isMinBrowser('safari','4'));},canPlayH264:function(){return this.canUseHtml5&&canPlayType('video/mp4; codecs="avc1.42E01E"','probably');},canPlayMP3:function(){return this.canUseHtml5&&canPlayType('audio/mpeg','maybe');},canUseHtml5Dnd:function(){return(this.isMinBrowser('firefox','3.6')||this.isMinBrowser('chrome','10')||this.isHtml5EnabledIE()||this.isMinBrowser('safari','5'));},isSafari:function(){return(this.browser.toLowerCase()==='safari');},isFirefox:function(){return(this.browser.toLowerCase()==='firefox');},isChrome:function(){return(this.browser.toLowerCase()==='chrome');},isIE:function(){return(this.browser.toLowerCase()==='explorer');},detectBrowserPlugin:function(name){var v5=application.getService('v5'),navigator=v5.get('navigator'),navigatorPlugins=navigator.plugins,pluginsLength=navigatorPlugins.length,boolPluginInstalled=false,i,activeXObject;if(navigator.mimeTypes.length===0){if(!isActiveXObjectEnabledForIE()){boolPluginInstalled=false;}else{try{activeXObject=new ActiveXObject(name);boolPluginInstalled=true;}catch(e){boolPluginInstalled='unknown';}}}else{for(i=0;i<pluginsLength;i++){if(navigatorPlugins[i].name==name){boolPluginInstalled=true;break;}}
if(!boolPluginInstalled){try{activeXObject=new ActiveXObject(name);boolPluginInstalled=true;}catch(e){}}}
return boolPluginInstalled;},isBrowserPluginsSupported:function(){var v5=application.getService('v5'),navigator=v5.get('navigator');return(navigator&&(typeof navigator.plugins==='object')&&navigator.plugins.length>0)||(this.isIE()&&isActiveXObjectEnabledForIE());},isTransformSupported:function(){var supported=false,properties=['transform','webkitTransform','msTransform'],testElement=document.body;for(var i=0,length=properties.length;i<length;i++){supported=(testElement.style[properties[i]]!==undefined);if(supported){break;}}
return supported;},canFolderUpload:function(){return this.isMinBrowser('chrome','21');},hasMinimumFlashVersion:function(){var v5=application.getService('v5'),swfobject=v5.get('swfobject'),version=swfobject.getFlashPlayerVersion();return(version.major>=parseInt(MINIMUM_FLASH_VERSION));},hasSVGSupport:function(){var v5=application.getService('v5'),document=v5.get('document');return document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#BasicStructure','1.1');},getMinimumFlashVersion:function(){return MINIMUM_FLASH_VERSION;},hasPDFSupport:function(){var isPluginDetected=false;if(this.isIE()){isPluginDetected=this.detectBrowserPlugin('AcroPDF.PDF')||this.detectBrowserPlugin('PDF.PdfCtrl');}else{return this.detectBrowserPlugin('Adobe Acrobat')||this.detectBrowserPlugin('Chrome PDF Viewer')||this.detectBrowserPlugin('WebKit built-in PDF');}}};browserDetect.init();return browserDetect;});Box.Timing.execution.push({name:'js/services/url.js',time:(new Date()).getTime()});Box.Application.addService('url',function(application){'use strict';var win=window;var PLUS_PATTERN=/\+/g,GET_PARAM_PATTERN=/([^&=]+)=?([^&]*)/g,QUERY_STRING_PATTERN=/\?(.*)/;function decodeGetComponent(component){return decodeURIComponent(component.replace(PLUS_PATTERN,' '));}
return{_setWindow:function(newWindow){win=newWindow;},getCurrentWindowUrl:function(){return(win.location.hash||win.location.href);},getHostDomain:function(){var hostnameSplit=win.location.hostname.split('.');var hostnameSplitLength=hostnameSplit.length;return hostnameSplit[hostnameSplitLength-2]+'.'+hostnameSplit[hostnameSplitLength-1];},getGcmCompatibleRmUrl:function(rm,rmOnly){var navState=application.getService('nav-state');var url='/index.php?rm=';if(navState.isGcm()){rm='box_master_gcm_'+rm;}
if(rmOnly){return rm;}
return url+rm;},createUrl:function(url,getParams){var getParamsString='';for(var paramName in getParams){if(getParams.hasOwnProperty(paramName)){var paramValue=getParams[paramName];getParamsString+=(getParamsString?'&':'')+encodeURIComponent(paramName)+'='+encodeURIComponent(paramValue);}}
if(getParamsString){var questionMarkPositionInUrl=url.indexOf('?');var hasUrlAlreadySomeGetParams=(questionMarkPositionInUrl!=-1);var isUrlEndedWithQuestionMark=(questionMarkPositionInUrl==(url.length-1));if(!hasUrlAlreadySomeGetParams){url+='?';}
else if(!isUrlEndedWithQuestionMark){url+='&';}
url+=getParamsString;}
return url;},goToUrl:function(url){var v5=application.getService('v5'),openNewLinkInWindow=v5.get('open_link_in_new_window'),windowPathPrefix=v5.get('path_prefix');url=this.addAdditionalContext(url);if(openNewLinkInWindow&&url&&windowPathPrefix&&url.indexOf(windowPathPrefix)<0)
{win.open(url);return;}
win.location.href=url;},goToUrlInBackground:function(url){var dom=application.getService('dom'),iframe=dom.query('#downloadiframe'),isNewIframeNeeded=false;if(!iframe){iframe=document.createElement('iframe');isNewIframeNeeded=true;}
url=this.addAdditionalContext(url);iframe.src=url;iframe.style.display='none';iframe.setAttribute('id','downloadiframe');if(isNewIframeNeeded){document.body.appendChild(iframe);}},openWindow:function(url,name,specs,replace){if(!url){return null;}
name=name||'';specs=specs||'';replace=replace||false;url=this.addAdditionalContext(url);return win.open(url,name,specs,replace);},addAdditionalContext:function(url){var v5=application.getService('v5'),additionalContext=v5.get('additional_context');if(additionalContext&&url.indexOf('additional_context')<0){var query='additional_context='+encodeURIComponent(additionalContext);url+=(url.indexOf('?')>0?'&':'?')+query;}
return url;},encodePathComponent:function(value){value=encodeURIComponent(value).replace(/%2F/g,'%252F').replace(/%23/g,'%2523').replace(/%26/g,'%2526');return value;},decodePathComponent:function(value){value=value.replace(/%2526/g,'%26').replace(/%2523/g,'%23').replace(/%252F/g,'%2F');return decodeURIComponent(value);},getQueryParams:function(url){var match,queryStringMatch=url.match(QUERY_STRING_PATTERN),queryString,urlParams={};if(queryStringMatch){queryString=queryStringMatch[1];while((match=GET_PARAM_PATTERN.exec(queryString))){urlParams[decodeGetComponent(match[1])]=decodeGetComponent(match[2]);}}
return urlParams;},getQueryParamString:function(url){var queryStringMatch=url.match(QUERY_STRING_PATTERN);if(queryStringMatch){return queryStringMatch[1];}
return'';}};});Box.Timing.execution.push({name:'js/services/logger.js',time:(new Date()).getTime()});Box.Application.addService('logger',function(application){'use strict';var LOG_URL='/gen204',LOG_JSON_HOST='https://client-log.box.com',LOG_JSON_PATH='/index.php?rm=box_gen204_json_record';function getXMLHttpRequest(){if(window.XMLHttpRequest){return new XMLHttpRequest();}else if(window.ActiveXObject){return new ActiveXObject('Microsoft.XMLHTTP');}else{return null;}}
function sendLogAjaxCall(requestData,callback,sync)
{var logUrl=LOG_URL+'?'+$.param(requestData);var xmlhttp=getXMLHttpRequest();if(xmlhttp!==null){if(typeof callback==='function'){xmlhttp.onreadystatechange=function(){if(xmlhttp.readyState!=4){return;}
if(xmlhttp.status===200||xmlhttp.status===204||xmlhttp.status===1223){callback();}};}
xmlhttp.open('GET',logUrl,!sync);xmlhttp.send();}}
function postJSONLog(data){var urlPrefix=application.getGlobalConfig('debug')?'':LOG_JSON_HOST;var logUrl=urlPrefix+LOG_JSON_PATH;var xmlhttp=getXMLHttpRequest();if(xmlhttp!==null){xmlhttp.open('POST',logUrl,true);xmlhttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded; charset=UTF-8');xmlhttp.send('data='+JSON.stringify(data));}}
return{sendLog:function(category,eventType,keysAndValues,callback,runmodeOptions,sync){keysAndValues=keysAndValues||{};runmodeOptions=runmodeOptions||{};var requestData={category:category,event_type:eventType,keys_and_values:keysAndValues,runmode_options:runmodeOptions};sendLogAjaxCall(requestData,callback,sync);},sendError:function(eventType,data){var browserService=application.getService('browser'),browser=browserService.getName();if(browser==='Explorer'){browser+='-'+browserService.getVersion();}
var event=$.extend({},data,{category:'js_error',event_type:eventType,metric_name:'webapp.jsErrors',metric_type:'counter',metric_value:1,metric_tags:{browser:browser}});postJSONLog([event]);},sendMetric:function(name,keysAndValues){keysAndValues=keysAndValues||{};var requestData={category:'metrics',event_type:'metrics',keysAndValues:{name:name,value:'+1',type:'counter',tags:keysAndValues}};sendLogAjaxCall(requestData);},sendSplitTestLog:function(experiment,event,additionalParams){var requestData={category:'experiment',event_type:event,keys_and_values:{experiment:experiment,additional_params:additionalParams}};sendLogAjaxCall(requestData);},sendSplitTestConversion:function(experiment,event){var runmode='/index.php?rm=experiment_convert';$.post(runmode,{experiment:experiment,event:event});}};});Box.Timing.execution.push({name:'js/services/window-popup.js',time:(new Date()).getTime()});Box.Application.addService('window-popup',function(application){'use strict';var CHECK_CLOSED_INTERVAL_MS=1000;var defaults={popupName:'BoxPopup',queryParams:{},width:270,height:320,left:500,top:200,toolbar:0,scrollbars:1,status:0,resizable:1,location:1,menuBar:0};function attachCloseCallbackHook(popupWindow,callback){var closeIntervalId;closeIntervalId=setInterval(function(){try{if(popupWindow===null||popupWindow.closed){clearInterval(closeIntervalId);callback();}}catch(e){}},CHECK_CLOSED_INTERVAL_MS);}
function WindowPopup(url,options){options=options||{};this.url=url;this.options=$.extend(true,{},defaults,options);}
WindowPopup.prototype={popup:null,url:null,options:null,closeCallback:null,closeIntervalId:null,_getPopupUrl:function(){return this.url+($.isEmptyObject(this.options.queryParams)?'':'?'+$.box.formatQuery(this.options.queryParams));},_getPopupConfiguration:function(){var v5=application.getService('v5'),screen=v5.get('screen'),configuration;configuration={width:this.options.width,height:this.options.height,toolbar:this.options.toolbar,scrollbars:this.options.scrollbars,status:this.options.status,resizable:this.options.resizable,location:this.options.location,menuBar:this.options.menuBar,left:screen?(screen.availWidth-this.options.width)/2:this.options.left,top:screen?(screen.availHeight-this.options.height)/2:this.options.top};return $.param(configuration).replace(/&/g,',');},setCloseCallback:function(callback){this.closeCallback=callback;},show:function(){var urlService=application.getService('url'),url=this._getPopupUrl(),configString=this._getPopupConfiguration();if(this.popup&&!this.popup.closed){this.popup.focus();}else{this.popup=urlService.openWindow(url,this.options.popupName,configString);if(this.closeCallback){attachCloseCallbackHook(this.popup,this.closeCallback);}}},hide:function(){if(this.popup){this.popup.close();}}};return{create:function(url,options){return new WindowPopup(url,options);}};});Box.Timing.execution.push({name:'js/features.js',time:(new Date()).getTime()});var Features=Base.extend({},{load:function()
{var j_meta=$('meta[type=feature_flag]');$.each(j_meta,function(index,item){item=$(item);Features[item.prop('name')]=true;});}});Features.load();Box.Timing.execution.push({name:'js/box_pub_sub.js',time:(new Date()).getTime()});var Box_Pub_Sub=Base.extend({subscribe:function(types,data,fn)
{$(this).on(types,data,fn);},publish:function(type,data)
{$(this).trigger(type,data);}},{});Box.Timing.execution.push({name:'js/box_validator.js',time:(new Date()).getTime()});var Validator={file_name_regex:'^\\s*$',bookmark_name_regex:"^((COM\\d)|(LPT\\d)|(CON)|(PRN)|(AUX)|(NUL)|CLOCK\\$)$|[<>|/\\\\\"]|\\.$",url_protocol_regex:'^(HTTP|FTP)S?:\/\/.*$',url_regex:"^(https?|ftp):\\/\\/(((([a-z]|\\d|-|\\.|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(%[\\da-f]{2})|[!\\$&'\\(\\)\\*\\+,;=]|:)*@)?(((\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5]))|((([a-z]|\\d|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(([a-z]|\\d|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])([a-z]|\\d|-|\\.|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])*([a-z]|\\d|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])))\\.)+(([a-z]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(([a-z]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])([a-z]|\\d|-|\\.|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])*([a-z]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])))\\.?)(:\\d*)?)(\\/((([a-z]|\\d|-|\\.|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(%[\\da-f]{2})|[!\\$&'\\(\\)\\*\\+,;=]|:|@)+(\\/(([a-z]|\\d|-|\\.|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(%[\\da-f]{2})|[!\\$&'\\(\\)\\*\\+,;=]|:|@)*)*)?)?(\\?((([a-z]|\\d|-|\\.|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(%[\\da-f]{2})|[!\\$&'\\(\\)\\*\\+,;=]|:|@)|[\\uE000-\\uF8FF]|\\/|\\?)*)?(\\#((([a-z]|\\d|-|\\.|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(%[\\da-f]{2})|[!\\$&'\\(\\)\\*\\+,;=]|:|@)|\\/|\\?)*)?$",file_name_special_chars:'(\\, /, ", :, <, >, |, *, ?)',file_name_special_char_replacement:'_',validate_login:function(login)
{return Validator.prototype.validate_email(login);},validate_empty_field:function(value)
{if(value==='')
{return false;}
return true;},validate_email:function(email)
{return $j.box.isEmail(email);},validate_password:function(value,allow_empty)
{allow_empty=allow_empty||false;if(allow_empty)
{return Validator.validate_string(value,0,255);}
return Validator.validate_string(value,1,255);},validate_confirm_password:function(password,confirm_password)
{if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/box_validator.js:16332','2013-05-15','auto tombstoned');return(password===confirm_password);},validate_phone:function(value)
{var phone=$j.trim(value);return(Boolean)(phone.match(/^(\(?\+?[\d]*\)?)?[\d\-\.\s\(\)]+(\s*(x|ext\.?|extension)\s*\d+)?$/g)&&phone.length<=100);},validate_string:function(value,min_length,max_length)
{if(value.length!=undefined)
{if((value.length>=min_length)&&(value.length<=max_length))
{return true;}}
return false;},validate_number:function(number)
{return!isNaN(parseFloat(number));},validate_nonnegative_float:function(number)
{if(typeof number!='number')
{var regex=/^[0-9\.]*$/;if(!regex.test(number))
{return false;}
number=parseFloat(number);}
return(number>=0);},validate_positive_integer:function(number)
{if(typeof number!='number')
{var regex=/^[0-9]*$/;if(!regex.test(number))
{return false;}
number=parseInt(number);}
return(number>0);},validate_nonnegative_integer:function(number)
{if(typeof number!='number')
{var regex=/^[0-9]*$/;if(!regex.test(number))
{return false;}
number=parseInt(number);}
return(number>=0);},validate_public_name:function(value)
{return Validator.validate_name(value);},validate_name:function(value)
{return Validator.validate_string(value,1,255);},validate_company:function(value)
{return Validator.validate_string(value,1,255);},validate_cvv:function(value)
{var is_nonnegative_integer=Validator.validate_nonnegative_integer(value);var has_correct_digits_nb=Validator.validate_string(value,3,4);return(is_nonnegative_integer&&has_correct_digits_nb);},validate_slave_count:function(value)
{return Validator.validate_positive_integer(value);},validate_space_amount:function(value)
{return Validator.validate_positive_integer(value);},validate_slave_space_amount:function(value)
{if(Validator.validate_nonnegative_float(value))
{if(window.enterprise&&window.enterprise.space_amount)
{var enterprise_space_amount=Validator.convert_units(window.enterprise.space_amount,'bytes','gigabytes');if(value>enterprise_space_amount)
{if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/box_validator.js:16343','2013-05-15','auto tombstoned');return false;}
else
{return true;}}
return true;}
else
{return false;}},validate_enterprise_type:function(value)
{if(value=='business')
{return true;}
else if(value=='enterprise')
{return true;}
return false;},validate_deal_status:function(value)
{if(value=='live_deal')
{return true;}
else if(value=='potential_deal')
{return true;}
else if(value=='trial')
{return true;}
else if(value=='trial_extension')
{return true;}
return false;},validate_subdomain:function(subdomain)
{subdomain=$j.trim(subdomain).toLowerCase();var subdomain_regex=/^[a-zA-Z0-9]*(-[a-zA-Z0-9]+)*$/;if(subdomain.match(subdomain_regex)==null)
{return false;}
if(subdomain.length<3)
{return false;}
return true;},validate_group_tag_name:function(value)
{if(value&&value.toLowerCase()=='none')return false;return Validator.validate_string(value,1,255);},validate_file_name:function(name)
{var regex=null;regex=new RegExp(Validator.file_name_regex);var pattern=name.toUpperCase();return regex.exec(pattern)==null;},validate_bookmark_name:function(name)
{var regex=new RegExp(Validator.bookmark_name_regex);var pattern=name.toUpperCase();return regex.exec(pattern)==null;},validate_url_protocol:function(url)
{var regex=new RegExp(Validator.url_protocol_regex);var pattern=url.toUpperCase();if(pattern.indexOf('://')===-1)pattern='HTTP://'+pattern;return regex.exec(pattern)!=null;},validate_url:function(url,optional_protocol)
{if(optional_protocol)
{if(!url.match(/^(http|ftp)s?:\/\//i))
{url='http://'+url;}}
var regex=new RegExp(Validator.url_regex,'i');return regex.test(url);},validate_partial_url:function(str)
{var regex=/^[A-Za-z0-9-]+$/;return regex.test(str);},fix_file_name:function(name)
{var regex=new RegExp(Validator.file_name_regex,'g');name=name.replace(regex,Validator.file_name_special_char_replacement);return name;},convert_units:function(number,from_units,to_units)
{var converted_number=0;if(from_units=='bytes')
{if(to_units=='gigabytes')
{converted_number=Math.round(number/Math.pow(2,30));}
else
{throw new Error('Unknown units type passed to "convert_units" function as the "to_units" parameter. The units might just not be implemented yet. to_units: "'+to_units+'"');}}
else
{throw new Error('Unknown units type passed to "convert_units" function as the "from_units" parameter. The units might just not be implemented yet. from_units: "'+from_units+'"');}
return converted_number;}};Box.Timing.execution.push({name:'js/marketing/marketing_global.js',time:(new Date()).getTime()});$(function handle_events_on_document_ready()
{set_stats_box_height();init_smooth_anchor_scroll();init_form_handlers();resize_modules({onresize:true});$('.sub_menu_wrapper').mouseenter(function(){$(this).addClass('active_hover');$('ul',this).stop(true,true).slideDown(100);}).mouseleave(function(){$(this).removeClass('active_hover');$('ul',this).hide();});$('body').mouseover(function(e)
{Box.Application.getService('tooltips').triggerTooltips(e);});$('input[placeholder]').placeholderize();});function set_stats_box_height()
{var max_height=0;var j_stats_boxes=$('.stats').children();j_stats_boxes.each(function()
{var item_height=$(this).height();if(item_height>max_height)
{max_height=item_height;}});j_stats_boxes.height(max_height);}
function init_smooth_anchor_scroll(offset_top)
{offset_top=(offset_top||0);$('body').off('click.anchor_scroll','a');$('body').on('click.anchor_scroll','a',function()
{var j_anchor_hash=$(this.hash);var href=$(this).attr('href');if(href&&href.substring(0,1)=='#'&&j_anchor_hash.length)
{$('html, body').animate({scrollTop:j_anchor_hash.offset().top-offset_top},500);return false;}});}
function init_form_handlers(params,callback)
{params=params||{};var j_target_forms=params.j_target_forms||$('.ajax_form');j_target_forms.each(function()
{var j_target_form=$(this);var form_error_selector='.form_error_message';var hide_on_submit_selector='.hide_on_submit';var show_on_submit_selector='.submit_success';var form_handler=new Form_Handler({j_form:j_target_form,ajax_action_url:'/index.php?rm=marketing_form_submission',form_error_selector:form_error_selector,submit_error_action:function()
{j_target_form.find(form_error_selector).show();},submit_success_action:function(data)
{var j_fieldset=$('.inline_fieldset');var j_returned_html=$(data.html);j_target_form.find(form_error_selector).hide();j_fieldset.find(hide_on_submit_selector).hide();j_target_form.find('li').hide();j_target_form.find(show_on_submit_selector).show();if(callback)
{callback();}
$('#marketing_tracking_codes').append(j_returned_html);}});if(params.focus)
{form_handler.focus();}});}
function onYouTubePlayerReady(player_ID)
{var you_tube_player=$('#'+player_ID).get(0);you_tube_player.addEventListener('onStateChange','function(state) { on_player_state_change(state, "'+player_ID+'"); }');}
function on_player_state_change(player_state,player_ID)
{if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/marketing_global.js:20586','2013-05-15','auto tombstoned');var current_video=player_ID;var playing_video;var playing=player_state===1;if(playing&&typeof on_player_state_change.previous_video==='undefined')
{if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/marketing_global.js:20587','2013-05-15','auto tombstoned');on_player_state_change.previous_video=player_ID;}
if(on_player_state_change.previous_video!==current_video)
{if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/marketing_global.js:20588','2013-05-15','auto tombstoned');playing_video=$('#'+on_player_state_change.previous_video).get(0);playing_video.pauseVideo();}}
function resize_modules(params)
{var j_resizable=$('.js_resizable');if(!j_resizable.length)return;params=params||{};var width=document.body&&document.body.offsetWidth||document.documentElement&&document.documentElement.offsetWidth;j_resizable.each(function(){var j_this=$(this);var smaller_than=j_this.data('js_resize_smaller_than');var max_size=j_this.data('js_resize_max_size');var min_size=j_this.data('js_resize_min_size');var new_size=0;if(width<smaller_than)
{var diff=smaller_than-width;new_size=max_size-diff;if(new_size<min_size)
{new_size=min_size;}}
else
{new_size=max_size;}
j_this.width(new_size);j_this.parent().parent('.content').width(new_size+j_this.siblings().width());});if($.isFunction(params.callback))params.callback();if(params.onresize)
{$(window).on('resize.resize_modules',resize_modules);}}
Box.Timing.execution.push({name:'js/marketing/sidebar_menu.js',time:(new Date()).getTime()});var Side_Menu=Base.extend({constructor:function()
{this.selectors={current_menu:'current_side_menu',menu_container:'side_menu_multiple',menu_header_toggle:'side_menu_header_toggle',active_menu_toggle:'active_menu_header',menu_items:'side_menu_items',toggle_arrow:'toggle_arrow',active_toggle_arrow:'active_toggle_arrow',last_toggle:'last_side_menu_header',bottom_header:'side_menu_header_bottom'};this.j_menu_items=$('#'+this.selectors.menu_container).find('.'+this.selectors.menu_items);this.menu_heights=this.get_menu_heights();this.attach_events();},attach_events:function()
{var me=this;var j_side_menu_container=$('#'+this.selectors.menu_container);j_side_menu_container.on('click','.'+this.selectors.menu_header_toggle,function(e)
{e.preventDefault();if(!$(this).hasClass(me.selectors.active_menu_toggle))
{me.expand_menu($(this));}
return false;});},get_menu_heights:function()
{var menu_heights={};for(var i=0;i<this.j_menu_items.length;i++)
{var menu_id=this.selectors.menu_items+i;var j_menu=this.j_menu_items[i];$(j_menu).attr('id',menu_id);menu_heights[menu_id]=$('#'+menu_id).height();}
return menu_heights;},expand_menu:function(j_menu_toggle)
{var me=this;var menu_id=j_menu_toggle.next().attr('id');var menu_height=this.menu_heights[menu_id];var j_menu_elm=$('#'+menu_id);var last_toggle=$('.'+this.selectors.last_toggle);if(j_menu_toggle.hasClass(this.selectors.bottom_header))
{j_menu_toggle.removeClass(this.selectors.bottom_header).addClass(this.selectors.last_toggle);}
else
{last_toggle.addClass(this.selectors.bottom_header);}
j_menu_toggle.addClass(this.selectors.active_menu_toggle).siblings('.'+this.selectors.menu_header_toggle).removeClass(this.selectors.active_menu_toggle);j_menu_toggle.children('.'+this.selectors.toggle_arrow).addClass(this.selectors.active_toggle_arrow);j_menu_elm.show().css({'height':0}).animate({height:menu_height},{duration:400,complete:function()
{$(this).addClass(me.selectors.current_menu);}});j_menu_toggle.siblings().children('.'+this.selectors.toggle_arrow).removeClass(this.selectors.active_toggle_arrow);j_menu_elm.siblings('.'+this.selectors.menu_items).animate({height:0,opacity:'hide'},{duration:400,complete:function()
{$(this).hide().removeClass(me.selectors.current_menu);}});}});$(function()
{if($('#side_menu_multiple').length)
{new Side_Menu();}});Box.Timing.execution.push({name:'js/marketing/external/jquery.anythingslider.js',time:(new Date()).getTime()});﻿
(function($){$.anythingSlider=function(el,options){var base=this,o;base.el=el;base.$el=$(el).addClass('anythingBase').wrap('<div class="anythingSlider"><div class="anythingWindow" /></div>');base.$el.data("AnythingSlider",base);base.init=function(){base.options=o=$.extend({},$.anythingSlider.defaults,options);base.initialized=false;if($.isFunction(o.onBeforeInitialize)){if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/external/jquery.anythingslider.js:20314','2013-05-15','auto tombstoned');base.$el.bind('before_initialize',o.onBeforeInitialize);}
base.$el.trigger('before_initialize',base);base.$wrapper=base.$el.parent().closest('div.anythingSlider').addClass('anythingSlider-'+o.theme);base.$window=base.$el.closest('div.anythingWindow');base.win=window;base.$win=$(base.win);base.$controls=$('<div class="anythingControls"></div>').appendTo((o.appendControlsTo!==null&&$(o.appendControlsTo).length)?$(o.appendControlsTo):base.$wrapper);base.$startStop=$('<a href="#" class="start-stop"></a>');if(o.buildStartStop){base.$startStop.appendTo((o.appendStartStopTo!==null&&$(o.appendStartStopTo).length)?$(o.appendStartStopTo):base.$controls);}
base.$nav=$('<ul class="thumbNav" />').appendTo((o.appendNavigationTo!==null&&$(o.appendNavigationTo).length)?$(o.appendNavigationTo):base.$controls);base.flag=false;base.playing=o.autoPlay;base.slideshow=false;base.hovered=false;base.panelSize=[];base.currentPage=o.startPanel=parseInt(o.startPanel,10)||1;o.changeBy=parseInt(o.changeBy,10)||1;base.adj=(o.infiniteSlides)?0:1;base.width=base.$el.width();base.height=base.$el.height();base.outerPad=[base.$wrapper.innerWidth()-base.$wrapper.width(),base.$wrapper.innerHeight()-base.$wrapper.height()];if(o.playRtl){if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/external/jquery.anythingslider.js:20316','2013-05-15','auto tombstoned');base.$wrapper.addClass('rtl');}
if(o.expand){if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/external/jquery.anythingslider.js:20317','2013-05-15','auto tombstoned');base.$outer=base.$wrapper.parent();base.$window.css({width:'100%',height:'100%'});base.checkResize();}
if(o.buildStartStop){base.buildAutoPlay();}
if(o.buildArrows){base.buildNextBackButtons();}
if(!o.autoPlay){if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/external/jquery.anythingslider.js:20320','2013-05-15','auto tombstoned');o.autoPlayLocked=false;}
base.updateSlider();base.$lastPage=base.$currentPage;base.runTimes=$('div.anythingSlider').index(base.$wrapper)+1;base.regex=new RegExp('panel'+base.runTimes+'-(\\d+)','i');if(base.runTimes===1){base.makeActive();}
if(o.easing=="fade")
{o.easing="fade";base.opacity="opacity";}
else if(!$.isFunction($.easing[o.easing]))
{if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/external/jquery.anythingslider.js:20324','2013-05-15','auto tombstoned');o.easing="swing";}
if(o.pauseOnHover){base.$wrapper.hover(function(){if(base.playing){base.$el.trigger('slideshow_paused',base);base.clearTimer(true);}},function(){if(base.playing){base.$el.trigger('slideshow_unpaused',base);base.startStop(base.playing,true);}});}
base.setCurrentPage(base.gotoHash()||o.startPage,false);base.slideControls(false);base.$wrapper.bind('mouseenter mouseleave',function(e){base.hovered=(e.type==="mouseenter")?true:false;base.slideControls(base.hovered,false);});$(document).keyup(function(e){if(o.enableKeyboard&&base.$wrapper.is('.activeSlider')&&!e.target.tagName.match('TEXTAREA|INPUT|SELECT')){if(!o.vertical&&(e.which===38||e.which===40)){return;}
switch(e.which){case 39:case 40:base.goForward();break;case 37:case 38:base.goBack();break;}}});base.$items.delegate('a','focus.AnythingSlider',function(e){var panel=$(this).closest('.panel'),indx=base.$items.index(panel)+base.adj;base.$items.find('.focusedLink').removeClass('focusedLink');$(this).addClass('focusedLink');base.$window.scrollLeft(0);if((indx>=base.currentPage+o.showMultiple||indx<base.currentPage)){base.gotoPage(indx);e.preventDefault();}});var triggers="slideshow_paused slideshow_unpaused slide_init slide_begin slideshow_stop slideshow_start initialized swf_completed".split(" ");$.each("onShowPause onShowUnpause onSlideInit onSlideBegin onShowStop onShowStart onInitialized onSWFComplete".split(" "),function(i,f){if($.isFunction(o[f])){base.$el.bind(triggers[i],o[f]);}});if($.isFunction(o.onSlideComplete)){base.$el.bind('slide_complete',function(){if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/external/jquery.anythingslider.js:20337','2013-05-15','auto tombstoned');setTimeout(function(){if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/external/jquery.anythingslider.js:20338','2013-05-15','auto tombstoned');o.onSlideComplete(base);},0);});}
base.initialized=true;base.$el.trigger('initialized',base);base.startStop(base.playing);};base.updateSlider=function(){base.$el.children('.cloned').remove();base.$nav.empty();base.currentPage=base.currentPage||1;base.$items=base.$el.children();base.pages=base.$items.length;base.dir=(o.vertical)?'top':'left';o.showMultiple=(o.vertical)?1:parseInt(o.showMultiple,10)||1;if(o.showMultiple>1){if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/external/jquery.anythingslider.js:20339','2013-05-15','auto tombstoned');if(o.showMultiple>base.pages){if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/external/jquery.anythingslider.js:20340','2013-05-15','auto tombstoned');o.showMultiple=base.pages;}
base.adjustMultiple=(o.infiniteSlides&&base.pages>1)?0:o.showMultiple-1;base.pages=base.$items.length-base.adjustMultiple;}
base.$controls.add(base.$nav).add(base.$startStop).add(base.$forward).add(base.$back)[(base.pages<=1)?'hide':'show']();if(base.pages>1){base.buildNavigation();}
if(o.infiniteSlides&&base.pages>1){base.$el.prepend(base.$items.filter(':last').clone().removeAttr('id').addClass('cloned'));if(o.showMultiple>1){if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/external/jquery.anythingslider.js:20342','2013-05-15','auto tombstoned');base.$el.append(base.$items.filter(':lt('+o.showMultiple+')').clone().removeAttr('id').addClass('cloned').addClass('multiple'));}else{base.$el.append(base.$items.filter(':first').clone().removeAttr('id').addClass('cloned'));}
base.$el.find('.cloned').each(function(){$(this).find('a,input,textarea,select,button,area').attr('disabled','disabled');$(this).find('[id]').removeAttr('id');});}
base.$items=base.$el.children().addClass('panel'+(o.vertical?' vertical':''));base.setDimensions();if(o.resizeContents){base.$items.css('width',base.width);base.$wrapper.css('width',base.getDim(base.currentPage)[0]);base.$wrapper.add(base.$items).css('height',base.height);}else{base.$win.load(function(){if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/external/jquery.anythingslider.js:20344','2013-05-15','auto tombstoned');base.setDimensions();});}
if(base.currentPage>base.pages){base.currentPage=base.pages;}
base.setCurrentPage(base.currentPage,false);base.$nav.find('a').eq(base.currentPage-1).addClass('cur');};base.buildNavigation=function(){if(o.buildNavigation&&(base.pages>1)){var t,$a;base.$items.filter(':not(.cloned)').each(function(i){var index=i+1;t=((index===1)?'first':'')+((index===base.pages)?'last':'');$a=$('<a href="#"></a>').addClass('panel'+index).wrap('<li class="'+t+'" />');base.$nav.append($a.parent());if($.isFunction(o.navigationFormatter)){if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/external/jquery.anythingslider.js:20349','2013-05-15','auto tombstoned');t=o.navigationFormatter(index,$(this));$a.html('<span>'+t+'</span>');if(parseInt($a.find('span').css('text-indent'),10)<0){$a.addClass(o.tooltipClass).attr('title',t);}}else{$a.html('<span>'+index+'</span>');}
$a.bind(o.clickControls,function(e){if(!base.flag&&o.enableNavigation){base.flag=true;setTimeout(function(){base.flag=false;},100);base.gotoPage(index);if(o.hashTags){if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/external/jquery.anythingslider.js:20352','2013-05-15','auto tombstoned');base.setHash(index);}}
e.preventDefault();});});if(o.navigationSize!==false&&parseInt(o.navigationSize,10)<base.pages){if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/external/jquery.anythingslider.js:20353','2013-05-15','auto tombstoned');if(!base.$controls.find('.anythingNavWindow').length){if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/external/jquery.anythingslider.js:20354','2013-05-15','auto tombstoned');base.$nav.before('<ul><li class="prev"><a href="#"><span>'+o.backText+'</span></a></li></ul>').after('<ul><li class="next"><a href="#"><span>'+o.forwardText+'</span></a></li></ul>').wrap('<div class="anythingNavWindow"></div>');}
base.navWidths=base.$nav.find('li').map(function(){if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/external/jquery.anythingslider.js:20355','2013-05-15','auto tombstoned');return $(this).innerWidth()+Math.ceil(parseInt($(this).find('span').css('left'),10)/2||0);}).get();base.navLeft=1;base.$nav.width(base.navWidth(1,base.pages+1)+5);base.$controls.find('.anythingNavWindow').width(base.navWidth(1,o.navigationSize+1)).end().find('.prev,.next').bind(o.clickControls,function(e){if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/external/jquery.anythingslider.js:20356','2013-05-15','auto tombstoned');if(!base.flag){if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/external/jquery.anythingslider.js:20357','2013-05-15','auto tombstoned');base.flag=true;setTimeout(function(){if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/external/jquery.anythingslider.js:20358','2013-05-15','auto tombstoned');base.flag=false;},200);base.navWindow(base.navLeft+o.navigationSize*($(this).is('.prev')?-1:1));}
e.preventDefault();});}}};base.navWidth=function(x,y){if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/external/jquery.anythingslider.js:20359','2013-05-15','auto tombstoned');var s=Math.min(x,y),e=Math.max(x,y),w=0;for(;s<e;s++){if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/external/jquery.anythingslider.js:20360','2013-05-15','auto tombstoned');w+=base.navWidths[s-1]||0;}
return w;};base.navWindow=function(n){if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/external/jquery.anythingslider.js:20361','2013-05-15','auto tombstoned');var p=base.pages-o.navigationSize+1;n=(n<=1)?1:(n>1&&n<p)?n:p;if(n!==base.navLeft){if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/external/jquery.anythingslider.js:20362','2013-05-15','auto tombstoned');base.$controls.find('.anythingNavWindow').animate({scrollLeft:base.navWidth(1,n),width:base.navWidth(n,n+o.navigationSize)},{queue:false,duration:o.animationTime});base.navLeft=n;}};base.buildNextBackButtons=function(){base.$forward=$('<span class="arrow forward"><a href="#"><span>'+o.forwardText+'</span></a></span>');base.$back=$('<span class="arrow back"><a href="#"><span>'+o.backText+'</span></a></span>');base.$back.bind(o.clickBackArrow,function(e){if(o.enableArrows&&!base.flag){base.flag=true;setTimeout(function(){base.flag=false;},100);base.goBack();}
e.preventDefault();});base.$forward.bind(o.clickForwardArrow,function(e){if(o.enableArrows&&!base.flag){base.flag=true;setTimeout(function(){base.flag=false;},100);base.goForward();}
e.preventDefault();});base.$back.add(base.$forward).find('a').bind('focusin focusout',function(){$(this).toggleClass('hover');});base.$back.appendTo((o.appendBackTo!==null&&$(o.appendBackTo).length)?$(o.appendBackTo):base.$wrapper);base.$forward.appendTo((o.appendForwardTo!==null&&$(o.appendForwardTo).length)?$(o.appendForwardTo):base.$wrapper);base.$arrowWidth=base.$forward.width();};base.buildAutoPlay=function(){base.$startStop.html('<span>'+(base.playing?o.stopText:o.startText)+'</span>').bind(o.clickSlideshow,function(e){if(o.enableStartStop){base.startStop(!base.playing);base.makeActive();if(base.playing&&!o.autoPlayDelayed){base.goForward(true);}}
e.preventDefault();}).bind('focusin focusout',function(){$(this).toggleClass('hover');});};base.checkResize=function(stopTimer){if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/external/jquery.anythingslider.js:20372','2013-05-15','auto tombstoned');clearTimeout(base.resizeTimer);base.resizeTimer=setTimeout(function(){if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/external/jquery.anythingslider.js:20373','2013-05-15','auto tombstoned');var w=base.$outer.width()-base.outerPad[0],h=(base.$outer[0].tagName==="BODY"?base.$win.height():base.$outer.height())-base.outerPad[1];if(base.width*o.showMultiple!==w||base.height!==h){if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/external/jquery.anythingslider.js:20374','2013-05-15','auto tombstoned');base.setDimensions();base.gotoPage(base.currentPage,base.playing,null,-1);}
if(typeof(stopTimer)==='undefined'){if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/external/jquery.anythingslider.js:20375','2013-05-15','auto tombstoned');base.checkResize();}},500);};base.setDimensions=function(){var w,h,c,edge=0,pw=(o.showMultiple>1)?base.width||base.$window.width()/o.showMultiple:base.$window.width(),winw=base.$win.width();if(o.expand){if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/external/jquery.anythingslider.js:20377','2013-05-15','auto tombstoned');w=base.$outer.width()-base.outerPad[0];base.height=h=base.$outer.height()-base.outerPad[1];base.$wrapper.add(base.$window).add(base.$items).css({width:w,height:h});base.width=pw=(o.showMultiple>1)?w/o.showMultiple:w;}
base.$items.each(function(i){c=$(this).children();if(o.resizeContents){w=base.width;h=base.height;$(this).css({width:w,height:h});if(c.length&&c[0].tagName==="EMBED"){if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/external/jquery.anythingslider.js:20379','2013-05-15','auto tombstoned');c.attr({width:'100%',height:'100%'});}
if(c.length===1){c.css({width:'100%',height:'100%'});}}else{w=$(this).width();if(c.length===1&&w>=winw){if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/external/jquery.anythingslider.js:20381','2013-05-15','auto tombstoned');w=(c.width()>=winw)?pw:c.width();c.css('max-width',w);}
$(this).css('width',w);h=(c.length===1)?c.outerHeight(true):$(this).height();$(this).css('height',h);}
base.panelSize[i]=[w,h,edge];edge+=(o.vertical)?h:w;});base.$el.css((o.vertical?'height':'width'),edge);};base.getDim=function(page){if(base.pages<1||isNaN(page)){return[base.width,base.height];}
page=(o.infiniteSlides&&base.pages>1)?page:page-1;var i,w=base.panelSize[page][0],h=base.panelSize[page][1];if(o.showMultiple>1){if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/external/jquery.anythingslider.js:20384','2013-05-15','auto tombstoned');for(i=1;i<o.showMultiple;i++){if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/external/jquery.anythingslider.js:20385','2013-05-15','auto tombstoned');w+=base.panelSize[(page+i)%o.showMultiple][0];h=Math.max(h,base.panelSize[page+i][1]);}}
return[w,h];};base.goForward=function(autoplay){base.gotoPage(base.currentPage+o.changeBy*(o.playRtl?-1:1),autoplay);};base.goBack=function(autoplay){base.gotoPage(base.currentPage+o.changeBy*(o.playRtl?1:-1),autoplay);};base.gotoPage=function(page,autoplay,callback,time){if(autoplay!==true){autoplay=false;base.startStop(false);base.makeActive();}
if(/^[#|.]/.test(page)&&$(page).length){if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/external/jquery.anythingslider.js:20390','2013-05-15','auto tombstoned');page=$(page).closest('.panel').index()+base.adj;}
if(o.changeBy!==1){if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/external/jquery.anythingslider.js:20391','2013-05-15','auto tombstoned');if(page<0){if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/external/jquery.anythingslider.js:20392','2013-05-15','auto tombstoned');page+=base.pages;}
if(page>base.pages){if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/external/jquery.anythingslider.js:20393','2013-05-15','auto tombstoned');page-=base.pages;}}
if(base.pages<=1){return;}
base.$lastPage=base.$currentPage;if(typeof(page)!=="number"){if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/external/jquery.anythingslider.js:20395','2013-05-15','auto tombstoned');page=o.startPanel;base.setCurrentPage(page);}
if(autoplay&&o.isVideoPlaying(base)){if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/external/jquery.anythingslider.js:20396','2013-05-15','auto tombstoned');return;}
if(page>base.pages+1-base.adj){page=(!o.infiniteSlides&&!o.stopAtEnd)?1:base.pages;}
if(page<base.adj){page=(!o.infiniteSlides&&!o.stopAtEnd)?base.pages:1;}
base.currentPage=(page>base.pages)?base.pages:(page<1)?1:base.currentPage;base.$currentPage=base.$items.eq(base.currentPage-base.adj);base.exactPage=page;base.$targetPage=base.$items.eq((page===0)?base.pages-base.adj:(page>base.pages)?1-base.adj:page-base.adj);time=time||o.animationTime;if(time>=0){base.$el.trigger('slide_init',base);}
base.slideControls(true,false);if(autoplay!==true){autoplay=false;}
if(!autoplay||(o.stopAtEnd&&page===base.pages)){base.startStop(false);}
if(time>=0){base.$el.trigger('slide_begin',base);}
setTimeout(function(d){if(!o.resizeContents){d=base.getDim(page);base.$wrapper.filter(':not(:animated)').animate({width:d[0]||base.width,height:d[1]||base.height},{queue:false,duration:(time<0?0:time),easing:o.easing});}
d={};d[base.dir]=-base.panelSize[(o.infiniteSlides&&base.pages>1)?page:page-1][2];if(o.easing=="fade")
{base.$el.filter(':not(:animated)').animate({opacity:0},{queue:false,duration:time,complete:function()
{base.$el.css(base.dir,-base.panelSize[(o.infiniteSlides&&base.pages>1)?page:page-1][2]);base.endAnimation(page,callback,time);}});}
else
{base.$el.filter(':not(:animated)').animate(d,{queue:false,duration:time,easing:o.easing,complete:function(){base.endAnimation(page,callback,time);}});}},parseInt(o.delayBeforeAnimate,10)||0);};base.endAnimation=function(page,callback,time){if(page===0){base.$el.css(base.dir,-base.panelSize[base.pages][2],base.opacity);page=base.pages;}else if(page>base.pages){base.$el.css(base.dir,-base.panelSize[1][2]);page=1;}
base.exactPage=page;base.setCurrentPage(page,false);base.$items.removeClass('activePage').eq(page-base.adj).addClass('activePage');if(!base.hovered){base.slideControls(false);}
if(time>=0)
{if(o.easing=="fade")
{base.$el.animate({opacity:1});}
base.$el.trigger('slide_complete',base);}
if(typeof callback==='function'){if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/external/jquery.anythingslider.js:20411','2013-05-15','auto tombstoned');callback(base);}
if(o.autoPlayLocked&&!base.playing){if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/external/jquery.anythingslider.js:20412','2013-05-15','auto tombstoned');setTimeout(function(){if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/external/jquery.anythingslider.js:20413','2013-05-15','auto tombstoned');base.startStop(true);},o.resumeDelay-(o.autoPlayDelayed?o.delay:0));}};base.setCurrentPage=function(page,move){page=parseInt(page,10);if(base.pages<1||page===0||isNaN(page)){return;}
if(page>base.pages+1-base.adj){if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/external/jquery.anythingslider.js:20416','2013-05-15','auto tombstoned');page=base.pages-base.adj;}
if(page<base.adj){if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/external/jquery.anythingslider.js:20417','2013-05-15','auto tombstoned');page=1;}
if(o.buildNavigation){base.$nav.find('.cur').removeClass('cur').end().find('a').eq(page-1).addClass('cur');}
if(!o.infiniteSlides&&o.stopAtEnd){if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/external/jquery.anythingslider.js:20419','2013-05-15','auto tombstoned');base.$wrapper.find('span.forward')[page===base.pages?'addClass':'removeClass']('disabled').end().find('span.back')[page===1?'addClass':'removeClass']('disabled');if(page===base.pages&&base.playing){if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/external/jquery.anythingslider.js:20420','2013-05-15','auto tombstoned');base.startStop();}}
if(!move){var d=base.getDim(page);base.$wrapper.css({width:d[0],height:d[1]}).add(base.$window).scrollLeft(0);base.$el.css(base.dir,-base.panelSize[(o.infiniteSlides&&base.pages>1)?page:page-1][2]);}
base.currentPage=page;base.$currentPage=base.$items.removeClass('activePage').eq(page-base.adj).addClass('activePage');};base.makeActive=function(){if(!base.$wrapper.is('.activeSlider')){$('.activeSlider').removeClass('activeSlider');base.$wrapper.addClass('activeSlider');}};base.gotoHash=function(){var h=base.win.location.hash,i=h.indexOf('&'),n=h.match(base.regex);if(n===null&&!/^#&/.test(h)){h=h.substring(0,(i>=0?i:h.length));n=($(h).closest('.anythingBase')[0]===base.el)?$(h).closest('.panel').index():null;}else if(n!==null){n=(o.hashTags)?parseInt(n[1],10):null;}
return n;};base.setHash=function(n){if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/external/jquery.anythingslider.js:20423','2013-05-15','auto tombstoned');var s='panel'+base.runTimes+'-',h=base.win.location.hash;if(typeof h!=='undefined'){if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/external/jquery.anythingslider.js:20424','2013-05-15','auto tombstoned');base.win.location.hash=(h.indexOf(s)>0)?h.replace(base.regex,s+n):h+"&"+s+n;}};base.slideControls=function(toggle){var dir=(toggle)?'slideDown':'slideUp',t1=(toggle)?0:o.animationTime,t2=(toggle)?o.animationTime:0,op=(toggle)?1:0,sign=(toggle)?0:1;if(o.toggleControls){if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/external/jquery.anythingslider.js:20426','2013-05-15','auto tombstoned');base.$controls.stop(true,true).delay(t1)[dir](o.animationTime/2).delay(t2);}
if(o.buildArrows&&o.toggleArrows){if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/external/jquery.anythingslider.js:20427','2013-05-15','auto tombstoned');if(!base.hovered&&base.playing){if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/external/jquery.anythingslider.js:20428','2013-05-15','auto tombstoned');sign=1;op=0;}
base.$forward.stop(true,true).delay(t1).animate({right:sign*base.$arrowWidth,opacity:op},o.animationTime/2);base.$back.stop(true,true).delay(t1).animate({left:sign*base.$arrowWidth,opacity:op},o.animationTime/2);}};base.clearTimer=function(paused){if(base.timer){base.win.clearInterval(base.timer);if(!paused&&base.slideshow){base.$el.trigger('slideshow_stop',base);base.slideshow=false;}}};base.startStop=function(playing,paused){if(playing!==true){playing=false;}
base.playing=playing;if(playing&&!paused){base.$el.trigger('slideshow_start',base);base.slideshow=true;}
if(o.buildStartStop){base.$startStop.toggleClass('playing',playing).find('span').html(playing?o.stopText:o.startText);if(parseInt(base.$startStop.find('span').css('text-indent'),10)<0){if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/external/jquery.anythingslider.js:20435','2013-05-15','auto tombstoned');base.$startStop.addClass(o.tooltipClass).attr('title',playing?o.stopText:o.startText);}}
if(playing){base.clearTimer(true);base.timer=base.win.setInterval(function(){if(!o.isVideoPlaying(base)){base.goForward(true);}else if(!o.resumeOnVideoEnd){if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/external/jquery.anythingslider.js:20438','2013-05-15','auto tombstoned');base.startStop();}},o.delay);}else{base.clearTimer();}};base.init();};$.anythingSlider.defaults={theme:"default",expand:false,resizeContents:true,vertical:false,showMultiple:false,easing:"swing",buildArrows:true,buildNavigation:true,buildStartStop:true,appendForwardTo:null,appendBackTo:null,appendControlsTo:null,appendNavigationTo:null,appendStartStopTo:null,toggleArrows:false,toggleControls:false,startText:"Start",stopText:"Stop",forwardText:"&raquo;",backText:"&laquo;",tooltipClass:"tooltip",enableArrows:true,enableNavigation:true,enableStartStop:true,enableKeyboard:true,startPanel:1,changeBy:1,hashTags:true,infiniteSlides:true,navigationFormatter:null,navigationSize:false,autoPlay:false,autoPlayLocked:false,autoPlayDelayed:false,pauseOnHover:true,stopAtEnd:false,playRtl:false,delay:3000,resumeDelay:15000,animationTime:600,delayBeforeAnimate:0,clickForwardArrow:"click",clickBackArrow:"click",clickControls:"click focusin",clickSlideshow:"click",resumeOnVideoEnd:true,addWmodeToObject:"opaque",isVideoPlaying:function(base){return false;}};$.fn.anythingSlider=function(options,callback){return this.each(function(){var page,anySlide=$(this).data('AnythingSlider');if((typeof(options)).match('object|undefined')){if(!anySlide){(new $.anythingSlider(this,options));}else{anySlide.updateSlider();}}else if(/\d/.test(options)&&!isNaN(options)&&anySlide){page=(typeof(options)==="number")?options:parseInt($.trim(options),10);if(page>=1&&page<=anySlide.pages){anySlide.gotoPage(page,false,callback);}}else if(/^[#|.]/.test(options)&&$(options).length){if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/external/jquery.anythingslider.js:20445','2013-05-15','auto tombstoned');anySlide.gotoPage(options,false,callback);}});};})(jQuery);Box.Timing.execution.push({name:'js/marketing/external/jquery.anythingslider.video.js',time:(new Date()).getTime()});(function($){$.fn.anythingSliderVideo=function(options){var defaults={videoID:'asvideo'};return this.each(function(){var video,tmp,service,sel,base=$(this).data('AnythingSlider');if(!base){return;}
video=base.video={};video.options=$.extend({},defaults,options);video.hasSwfo=(typeof(swfobject)!=='undefined'&&swfobject.hasOwnProperty('embedSWF')&&typeof(swfobject.embedSWF)==='function')?true:false;video.list={};video.hasVid=false;video.hasEmbed=false;video.services=$.fn.anythingSliderVideo.services;video.len=0;video.hasEmbedCount=0;video.hasiframeCount=0;video.$items=base.$items.filter(':not(.cloned)');for(service in video.services){if(typeof(service)==='string'){sel=video.services[service].selector;video.$items.find(sel).each(function(){tmp=$(this);tmp.attr('id',video.options.videoID+video.len);video.list[video.len]={id:video.options.videoID+video.len++,panel:tmp.closest('.panel')[0],service:service,selector:sel,status:-1};video.hasVid=true;if(sel.match('embed|object')){video.hasEmbed=true;video.hasEmbedCount++;}else if(sel.match('iframe')){video.hasiframeCount++;}});}}
$.each(video.list,function(i,s){var tmp,$tar,vidsrc,opts,$vid=$(s.panel).find(s.selector),service=video.services[s.service],api=service.initAPI||'';if(video.hasEmbed&&video.hasSwfo&&s.selector.match('embed|object')){$vid.each(function(){$tar=($(this).parent()[0].tagName==='OBJECT')?$(this).parent():$(this);vidsrc=($tar[0].tagName==='EMBED')?$tar.attr('src'):$tar.find('embed').attr('src')||$tar.children().filter('[name=movie]').attr('value');opts=$.extend(true,{},{flashvars:null,params:{allowScriptAccess:'always',wmode:base.options.addWmodeToObject,allowfullscreen:true},attr:{'class':$tar.attr('class'),'style':$tar.attr('style'),'data-url':vidsrc}},service.embedOpts);$tar.wrap('<div id="'+s.id+'"></div>');swfobject.embedSWF(vidsrc+(api===''?'':api+s.id),s.id,$tar.attr('width'),$tar.attr('height'),'10',null,opts.flashvars,opts.params,opts.attr,function(){if(service.hasOwnProperty('init')){if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/external/jquery.anythingslider.video.js:20270','2013-05-15','auto tombstoned');video.list[i].player=service.init(base,s.id,i);}
if(i>=video.hasEmbedCount){if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/external/jquery.anythingslider.video.js:20271','2013-05-15','auto tombstoned');base.$el.trigger('swf_completed',base);}});});}else if(s.selector.match('iframe')){$vid.each(function(i,v){vidsrc=$(this).attr('src');tmp=(vidsrc.match(/\?/g)?'':'?')+'&wmode='+base.options.addWmodeToObject;$(this).attr('src',function(i,r){return r+tmp+(api===''?'':api+s.id);});});}});video.gup=function(n,s){if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/external/jquery.anythingslider.video.js:20274','2013-05-15','auto tombstoned');n=n.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var p=(new RegExp("[\\?&]"+n+"=([^&#]*)")).exec(s||window.location.href);return(p===null)?"":p[1];};video.postMsg=function(data,vid){var $vid=$('#'+vid);if($vid.length){$vid[0].contentWindow.postMessage(data,$vid.attr('src').split('?')[0]);}};video.message=function(e){if(e.data){if(/infoDelivery/g.test(e.data)){if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/external/jquery.anythingslider.video.js:20278','2013-05-15','auto tombstoned');return;}
var data=$.parseJSON(e.data);$.each(video.list,function(i,s){if(video.services[video.list[i].service].hasOwnProperty('message')){video.services[video.list[i].service].message(base,data);}});}};video.control=function(toDo){var i,s=video.list,slide=(toDo==='pause')?base.$lastPage[0]:base.$currentPage[0],isPlaying=false;for(i=0;i<video.len;i++){if(s[i].panel===slide&&video.services[s[i].service].hasOwnProperty(toDo)){isPlaying=video.services[s[i].service][toDo](base,s[i].id,i);}}
return isPlaying;};if(video.hasiframeCount){if(window.addEventListener){window.addEventListener('message',video.message,false);}else{window.attachEvent('onmessage',video.message,false);}}
base.$el.bind('slide_init',function(){video.control('pause');}).bind('slide_complete',function(){video.control('cont');});base.options.isVideoPlaying=function(){return video.control('isPlaying');};});};$.fn.anythingSliderVideo.services={video:{selector:'video',cont:function(base,vid,index){if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/external/jquery.anythingslider.video.js:20289','2013-05-15','auto tombstoned');var $vid=$('#'+vid);if($vid.length&&$vid[0].paused&&$vid[0].currentTime>0&&!$vid[0].ended){$vid[0].play();}},pause:function(base,vid){$('video').each(function(){if(typeof(this.pause)!=='undefined'){this.pause();}});},isPlaying:function(base,vid,index){var $vid=$('#'+vid);return($vid.length&&typeof($vid[0].pause)!=='undefined'&&!$vid[0].paused&&!$vid[0].ended)?true:false;}},vimeo1:{selector:'iframe[src*=vimeo]',initAPI:'&api=1&player_id=',cont:function(base,vid,index){if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/external/jquery.anythingslider.video.js:20293','2013-05-15','auto tombstoned');if(base.video.list[index].status==='pause'){base.video.postMsg('{"method":"play"}',vid);}},pause:function(base,vid){$('iframe[src*=vimeo]').each(function(){if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/external/jquery.anythingslider.video.js:20294','2013-05-15','auto tombstoned');base.video.postMsg('{"method":"pause"}',this.id);});},message:function(base,data){var index,vid=data.player_id||'';if(vid!==''){if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/external/jquery.anythingslider.video.js:20295','2013-05-15','auto tombstoned');index=vid.replace(base.video.options.videoID,'');if(data.event==='ready'){base.video.postMsg('{"method":"addEventListener","value":"play"}',vid);base.video.postMsg('{"method":"addEventListener","value":"pause"}',vid);base.video.postMsg('{"method":"addEventListener","value":"finish"}',vid);}
if(base.video.list[index]){if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/external/jquery.anythingslider.video.js:20296','2013-05-15','auto tombstoned');base.video.list[index].status=data.event;}}},isPlaying:function(base,vid,index){if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/external/jquery.anythingslider.video.js:20297','2013-05-15','auto tombstoned');return(base.video.list[index].status==='play')?true:false;}},vimeo2:{selector:'object[data-url*=vimeo], embed[src*=vimeo]',embedOpts:{flashvars:{api:1}},cont:function(base,vid,index){if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/external/jquery.anythingslider.video.js:20298','2013-05-15','auto tombstoned');var $vid=$('#'+vid);if(typeof($vid[0].api_play)==='function'&&$vid[0].api_paused()&&$vid[0].api_getCurrentTime()!==0&&($vid[0].api_getDuration()-$vid[0].api_getCurrentTime())>2){$vid[0].api_play();}},pause:function(base,vid){$('object[data-url*=vimeo], embed[src*=vimeo]').each(function(){if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/external/jquery.anythingslider.video.js:20299','2013-05-15','auto tombstoned');var el=(this.tagName==='EMBED')?$(this).parent()[0]:this;if(typeof(el.api_pause)==='function'){if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/external/jquery.anythingslider.video.js:20300','2013-05-15','auto tombstoned');el.api_pause();}});},isPlaying:function(base,vid,index){if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/external/jquery.anythingslider.video.js:20301','2013-05-15','auto tombstoned');var $vid=$('#'+vid);return(typeof($vid[0].api_paused)==='function'&&!$vid[0].api_paused())?true:false;}},youtube1:{selector:'iframe[src*=youtube]',initAPI:'&iv_load_policy=3&enablejsapi=1&playerapiid=',cont:function(base,vid,index){if(base.video.list[index].status===2){if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/external/jquery.anythingslider.video.js:20303','2013-05-15','auto tombstoned');base.video.postMsg('{"event":"command","func":"playVideo"}',vid);}},pause:function(base,vid,index){$('iframe[src*=youtube]').each(function(){base.video.postMsg('{"event":"command","func":"pauseVideo"}',vid);});},message:function(base,data){if(data.event==='infoDelivery'){if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/external/jquery.anythingslider.video.js:20305','2013-05-15','auto tombstoned');return;}
if(data.info&&data.info.videoUrl){var url=base.video.gup('v',data.info.videoUrl),vid=$('iframe[src*='+url+']')[0].id,index=vid.replace(base.video.options.videoID,'');if(data.event==='onReady'){if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/external/jquery.anythingslider.video.js:20306','2013-05-15','auto tombstoned');base.video.postMsg('{"event":"listening","func":"onStateChange"}',vid);}
if(data.event==='onStateChange'&&base.video.list[index]){base.video.list[index].status=data.state;}}},isPlaying:function(base,vid,index){var status=base.video.list[index].status;return(status===1||status>2)?true:false;}},youtube2:{selector:'object[data-url*=youtube], embed[src*=youtube]',initAPI:'&iv_load_policy=3&enablejsapi=1&version=3&playerapiid=',cont:function(base,vid,index){var $vid=$('#'+vid);if($vid.length&&typeof($vid[0].getPlayerState)==='function'&&$vid[0].getPlayerState()>0){$vid[0].playVideo();}},pause:function(base,vid){$('object[data-url*=youtube], embed[src*=youtube]').each(function(){var el=(this.tagName==='EMBED')?$(this).parent()[0]:this;if(typeof(el.getPlayerState)==='function'&&el.getPlayerState()>0){el.pauseVideo();}});},isPlaying:function(base,vid){var $vid=$('#'+vid);return(typeof($vid[0].getPlayerState)==='function'&&($vid[0].getPlayerState()===1||$vid[0].getPlayerState()>2))?true:false;}}};})(jQuery);jQuery(window).load(function(){jQuery('.anythingBase').anythingSliderVideo();});Box.Timing.execution.push({name:'js/marketing/modal.js',time:(new Date()).getTime()});var Modal_Model=Base.extend({constructor:function()
{Modal_Model._instance=this;this.videos={box_overview:'4kZHVl_pJ2k',box_sync:'mp1f44dUcm4',box_drag_and_drop:'rkY7MGilQZY',box_google_apps:'H_KnRwoKbJs',box_salesforce:'SjL3tezs3Ro',box_preview:'RNMBvZWL0Pw',box_v5:'WJdk2avSUWQ',box_short_overview:'57CBljJ8gwE',box_google_docs:'uLHrJOiXue8',box_touch_pad:'d8siAK_IuoE',box_ecm_intergration:'7Hk4Wp1RNlQ',box_sync_overview:'0WPiALLABQ8',box_ipad:'cFFw-0qH1Hs',box_ipad_continued:'YzQZmzFZ1UM',box_ipad_business:'TqLlmNiDCpU',box_accelerator:'SauN9abpZo4',box_choose_cloud:'s-AwAvQD_F0',box_reinvent_sharing:'oHam8glLuj4',box_altitude:'s-ptXaRsE-8',box_works_2011:'9BP9LMYRVJU',box_simple_open_mobile:'bExkpidJaAQ',box_why_box:'GACrkuqFwu8',box_smart_links:'I6_yocBhGiM',box_come_work_at_box:'b-MJQ7ME6Ig',box_sync_demo:'0WPiALLABQ8',box_office_demo:'umo55oUUE_Y',box_outlook_demo:'qKiuixle4q0',box_simpleshare_demo:'qdqTBMcVUr4',box_free_sync:'Met_ItbwTgk',platform_intro:'Nd6E82FcgMQ',platform_overview:'I0EjSGg1nFM',platform_api:'5AtPW4q3wqA',platform_bin:'70FZ29uzbN4',customers_cardinal_capital:'iENoDLC1Xrk',customers_fuzebox:'0QJPsZt-_WA',customers_fanminder:'R-mQROC2t0Q',customers_growthpoint:'Eu3sjQn9nT0',customers_speedfreaks:'gmPDqx09plQ',customers_dfj:'7ssquYK0Qg0',customers_eveo:'7uT0XyEu3kg',customers_clear_channel:'EtIdSxYzviA',customers_six_flags:'TBLhw90t_nw',customers_pandora:'j5cD0rJ-z28',customers_balfour_beatty:'veSrsjSz-18',customers_flir:'Tsh7EcCt7C4',esg_bin:'EXPCOAO49T4'};},get:function(prop)
{return this[prop];},set:function(props,params)
{params||(params={});var value;for(var key in props)
{value=props[key];this[key]=value;}
if(params.change)
{this.publish('change',value);}
return this;}},{get:function()
{if(!Modal_Model._instance)
{Modal_Model._instance=new Modal_Model();}
return Modal_Model._instance;}});Modal_Model.implement(Box_Pub_Sub);var Modal_View=Base.extend({constructor:function(params)
{this.attach_events();if(Modal_View.is_active)
{return this;}
else
{return this.render(params);}},attach_events:function()
{$(document).on('keyup',function(e)
{if(e.keyCode==27)
{Modal.get().close(e);}});},render:function(params)
{var j_body=$('body');var j_modal_wrapper=$(params.modal_wrapper);var j_modal_backdrop=$('<div id="modal_backdrop" class="modal_backdrop"></div>');j_modal_backdrop.appendTo('body');j_body.addClass('no_scroll_bars');j_modal_wrapper.appendTo(document.body);Modal_View.set_center_position(j_modal_wrapper.get(0),140);Modal_View.is_active=true;}},{is_active:false,update:function(modal_data)
{var params={};var modal_video=null;var j_modal=$('#modal');$('#modal_loading_badge').fadeOut().remove();if(modal_data.video)
{var youtube_url=(document.location.protocol=='https:'?'https://':'http://')+'www.youtube.com/v/'+modal_data.video_hash+'?version=3&enablejsapi=1&version=3&playerapiid='+modal_data.video+'&hl=en_US&hd=1&autoplay=1&autohide=1&color=white&showinfo=0&rel=0';modal_video=[modal_data.content,'<object class="mhl pvl" style="display:block" width="623" height="348">','<param name="movie" value="'+youtube_url+'"></param>','<param name="allowFullScreen" value="true"></param>','<param name="allowscriptaccess" value="always"></param>','<embed id="'+modal_data.video+'" src="'+youtube_url+'" type="application/x-shockwave-flash" width="623" height="348" allowscriptaccess="always" allowfullscreen="true"></embed>','</object>'].join('');}
$('#modal_content').hide().html(modal_video||modal_data.content).fadeIn('fast');Modal_View.set_center_position(j_modal.get(0),140);if(modal_data.form)
{var j_modal_form=j_modal.find('form');var j_hide_on_submit=j_modal.find('.hide_on_submit');var j_eloqua_contact_method=$('#eloqua_contact_method');j_eloqua_contact_method.val(modal_data.form);params.j_target_forms=j_modal_form;if(modal_data.modalTemplate!='quote_form')
{params.focus=true;}
$.addRequestTokens();if(typeof GetElqCustomerGUID==='function')
{j_modal_form.find('input[name="elqCustomerGUID"]').val(GetElqCustomerGUID());}
init_form_handlers(params,function()
{if(live_site)
{_gaq.push(['_trackEvent','Modal',modal_data.modalTemplate+'_submited',modal_data.eventLocation]);}
j_hide_on_submit.hide();});}},set_center_position:function(obj,top)
{var x,y;var height_difference=$(window).height()-$j(obj).outerHeight();if(self.pageYOffset)
{x=self.pageXOffset;y=self.pageYOffset;}
else if(document.documentElement&&document.documentElement.scrollTop)
{x=document.documentElement.scrollLeft;y=document.documentElement.scrollTop;}
else if(document.body)
{x=document.body.scrollLeft;y=document.body.scrollTop;}
if(height_difference>0&&height_difference<top)
{top=Math.ceil(height_difference/2);}
else if(height_difference<=0)
{top=0;}
obj.style.top=y+top+'px';obj.style.left=document.body.clientWidth/2-(obj.offsetWidth/2)+'px';}});var Modal=Base.extend({modal_ajax_runmode:'get_marketing_modal',model:Modal_Model.get(),constructor:function(params,template)
{Modal._instance=this;this.attach_events();if(template)
{if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/modal.js:19922','2013-05-15','auto tombstoned');this.prepare_modal(params,template);}},attach_events:function()
{var me=this;var j_document=$(document);j_document.on('click','[data-modal_template]',function(e)
{e.preventDefault();me.prepare_modal($(this));});j_document.on('click','[data-legal_link]',function(e)
{var j_legal_link=$j(e.target);if(j_legal_link)
{var link_url=j_legal_link.data('legal_link');if(link_url)
{e.preventDefault();window.open(link_url,'','width=500, height=400, left=500, top=200');}}});j_document.on('click','#modal_content',function(e){me.publish(Modal.EVENT_CONTENT_CLICK,e);});j_document.on('change','#modal_content',function(e){me.publish(Modal.EVENT_CONTENT_CHANGE,e);});j_document.on('mousedown','#modal_backdrop, #close_modal, .close_modal',function(e){me.close();e.stopPropagation();});this.model.subscribe('change',this.update_view);},prepare_modal:function(params,template,template_params)
{var me=this;var data={};var data_obj={};var modal_data={};var template_key=null;var elm_data=null;this.render_modal_wrapper();data=this.set_data_properties(params,template,template_params);template_key=data.template_key;elm_data=data.elm_data;if(!this.model.hasOwnProperty(template_key)||elm_data.video)
{data_obj[template_key]=elm_data;this.model.set(data_obj);}
modal_data=this.get_modal_data(template_key,data_obj,elm_data);if(modal_data.content)
{this.update_view(null,modal_data);}
else
{$.post('/index.php?rm='+this.modal_ajax_runmode,{modal_template:template_key,template_vars:elm_data},function(data)
{elm_data.content=data;(template_key===Modal.active_modal)?me.model.set(data_obj,{change:true}):me.model.set(data_obj);me.publish(Modal.EVENT_OPEN,$('#modal_'+template_key));});}
this.update_tracking(template_key,elm_data);},render_modal_wrapper:function()
{var params={};var j_modal_wrapper=$('#modal_wrapper');var modal_wrapper=$('#modal_wrapper').html();this.model.modal_wrapper||this.model.set({modal_wrapper:modal_wrapper});if(j_modal_wrapper.length)
{j_modal_wrapper.remove();}
params.modal_wrapper=this.model.modal_wrapper;this.modal_view=new Modal_View(params);},set_data_properties:function(params,template,template_params)
{var data={};var elm_data={};var template_key=null;if(template)
{template_key=template;elm_data=template_params;}
else
{elm_data=$(params).data();if(elm_data.video)
{if(this.model.videos[elm_data.video])
{elm_data.video_hash=this.model.videos[elm_data.video];}
else
{elm_data.video_hash=elm_data.video;}}
template_key=elm_data.modal_template;}
Modal.active_modal=template_key;data={template_key:template_key,elm_data:elm_data};return data;},update_view:function(e,modal_data)
{Modal_View.update(modal_data);},get_modal_data:function(template_key,data_obj,elm_data)
{var data_changed=false;var modal_data=this.model.get(template_key);for(var key in modal_data)
{if(modal_data[key]!==elm_data[key])
{data_changed=true;elm_data.content=modal_data.content;data_obj[template_key]=elm_data;}}
if(data_changed)
{this.model.set(data_obj);modal_data=data_obj;}
return modal_data;},update_tracking:function(template_key,elm_data)
{var logService=Box.Application.getService('logger');if(elm_data.form&&live_site)
{_gaq.push(['_trackEvent','Modal',template_key,elm_data.eventLocation]);if(elm_data.form==='Enterprise Contact Me Form')
{logService.sendLog('marketing','OPEN_ENTERPRISE_QUOTE_POPUP',{'quote_type':'enterprise'});}
else if(elm_data.form==='Business Contact Me Form')
{logService.sendLog('marketing','OPEN_BUSINESS_QUOTE_POPUP',{'quote_type':'business'});}}},close:function()
{var j_modal_backdrop=$('#modal_backdrop');var j_modal=$('#modal');var j_modal_template=j_modal.find('#modal_content').children()[0];$('body').removeClass('no_scroll_bars');j_modal_backdrop.remove();j_modal.remove();Modal_View.is_active=false;Box.Application.getService('tooltips').hideTooltips(true);this.publish(Modal.EVENT_CLOSE,j_modal_template);}},{active_modal:null,EVENT_CONTENT_CLICK:'modal_content_click',EVENT_CONTENT_CHANGE:'modal_content_change',EVENT_CLOSE:'modal_closed',EVENT_OPEN:'modal_opened',get:function()
{if(!Modal._instance)
{Modal._instance=new Modal();}
return Modal._instance;}});Modal.implement(Box_Pub_Sub);$(function()
{Modal.get();});Box.Timing.execution.push({name:'js/marketing/form_handler.js',time:(new Date()).getTime()});var Form_Handler=Base.extend({constructor:function(params)
{var me=this;this.j_form=params.j_form;this.j_fields=null;this.j_form_error_message=params.form_error_selector?$(params.form_error_selector):null;this.fields_selector=params.fields_selector?this.fields_selector:'input, select, textarea, .radio_group, .native_select_wrapper';this.ajax_action_url=params.ajax_action_url;this.submit_error_action=params.submit_error_action;this.submit_success_action=params.submit_success_action;this._submit_in_progress=false;this.no_error_display=(params.no_error_display==true);this.error_message=params.error_message||$t('Please correct the fields below.','form_handler_correct_form_fields');this.new_error_display=params.new_error_display||false;this.custom_validation_result={};this.custom_form_submission=params.custom_form_submission?params.custom_form_submission:false;this.ADDITIONAL_TOP_MARGIN_FOR_ERROR_ICON_ON_SELECT_ELEMENT=2;this.ADDITIONAL_RIGHT_MARGIN_FOR_ERROR_ICON_ON_SELECT_ELEMENT=15;if(this.j_form.is('form')&&!this.custom_form_submission)
{this.j_form.submit(function()
{return me._submit();});}
if(this.fields_selector)
{this.j_fields=this.j_form.find(this.fields_selector);this.j_form.on('click focusin focusout',this.fields_selector,function(e)
{me._handle_form_field_event(e);});}
this.j_fields.each(function(){var j_field=$(this);var error=j_field.data('error');if(error)
{me.set_field_error(j_field,error);}});},validate:function()
{var me=this;var is_valid=true;this.j_fields.each(function()
{var j_field=$(this);if(j_field.is(':visible'))
{me.remove_error(j_field);}
if(!me.validate_field($(this)))
{is_valid=false;}});for(var item in this.custom_validation_result)
{if(this.custom_validation_result[item]==Form_Handler.NOT_VALIDATED)
{is_valid=false;}}
if(is_valid)
{this.clear_form_error();}
else
{this.set_form_error(this.error_message);}
return is_valid;},validate_field:function(j_field,show_tooltip_now)
{show_tooltip_now=show_tooltip_now||false;if(j_field.is(':visible'))
{var val=this._get_field_value(j_field);var field_type=j_field.prop('type');var non_eligible_types=['checkbox','radio','file','submit','reset','image','button'];if($.inArray(field_type,non_eligible_types)==-1)
{j_field.val(val);}
var validation_string=j_field.data('validate');if(!validation_string)return true;var validation_list=validation_string.split(/\s+/);var error_message='';var num_validations=validation_list.length;for(var i=0;i<num_validations;i++)
{switch(validation_list[i])
{case'required':if(!Validator.validate_empty_field(val))
{error_message=$t('This field is required','form_handler_required_field');}
break;case'email':if(!Validator.validate_email(val))
{error_message=$t('Please enter a valid email address','form_handler_valid_email_address');}
break;case'phone':if(!Validator.validate_phone(val))
{error_message=$t('Please enter a valid phone number','form_handler_valid_phone_number');}
break;case'number':if(!Validator.validate_number(val))
{error_message=$t('Please enter a valid number','form_handler_valid_number');}
break;case'positive_number':if(!Validator.validate_nonnegative_float(val))
{error_message=$t('Please enter a valid positive number','form_handler_valid_nonzero_number');}
break;case'name':if(!Validator.validate_string(val,1,128))
{error_message=$t('Please enter a valid name','form_handler_valid_name');}
break;case'company_name':if(!Validator.validate_company(val))
{error_message=$t('Please enter a valid company name','form_handler_valid_company_name');}
break;case'cvv':if(!Validator.validate_cvv(val))
{error_message=$t('Please enter a valid CVV','form_handler_valid_cvv');}
break;default:break;}
if(error_message)
{this.set_field_error(j_field,error_message,show_tooltip_now);return false;}}}
return true;},set_custom_validation_result:function(field_id,result)
{if(field_id){switch(result){case Form_Handler.VALIDATED:delete this.custom_validation_result[field_id];break;case Form_Handler.NOT_VALIDATED:this.custom_validation_result[field_id]=result;break;case Form_Handler.AJAX_VALIDATION:this.custom_validation_result[field_id]=result;break;default:break;}}},focus:function()
{this.j_fields.filter(':visible').first().focus();},_get_field_value:function(j_field)
{var input_type=j_field.prop('type');if(input_type&&(input_type=='checkbox'))
{if(j_field.prop('checked'))
{return $.trim(j_field.val());}}
else if(j_field.hasClass('radio_group'))
{var selected_radio_button=j_field.find('input').filter('[type="radio"]').filter(':checked');if(selected_radio_button.length)
{if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/form_handler.js:20040','2013-05-15','auto tombstoned');return selected_radio_button.val();}}
else
{return $.trim(j_field.val());}
return'';},_submit:function()
{if(this._submit_in_progress)
{return false;}
if(this.validate())
{if(this.ajax_action_url)
{this._submit_in_progress=true;this._submit_ajax();return false;}
return true;}
else
{if(this.submit_error_action)
{this.submit_error_action();}}
return false;},_submit_ajax:function()
{var me=this;var form_data=this.j_form.serialize();$.post(this.ajax_action_url,form_data,function(data)
{var submit_success=data.submit_success;var form_error_message=data.form_error_message;var error_fields=data.error_fields;if(submit_success||!data)
{if(me.submit_success_action)
{me.submit_success_action(data);}}
else
{if(form_error_message)
{if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/form_handler.js:20048','2013-05-15','auto tombstoned');me.set_form_error(form_error_message);}
if(error_fields)
{if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/form_handler.js:20049','2013-05-15','auto tombstoned');for(var i in error_fields)
{if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/marketing/form_handler.js:20050','2013-05-15','auto tombstoned');var j_field=me.j_form.find('input[name="'+i+'"]');me.set_field_error(j_field,error_fields[i]);}}}
me._submit_in_progress=false;},'json');},set_form_error:function(message)
{if(this.j_form_error_message)
{message=message||this.error_message;this.j_form_error_message.html(message);this.j_form_error_message.show();var parent_error_message=this.j_form_error_message.parent();if(parent_error_message.hasClass('e_message'))
{parent_error_message.show();}}},clear_form_error:function()
{if(this.j_form_error_message)
{this.j_form_error_message.hide();this.j_form_error_message.text('');var parent_error_message=this.j_form_error_message.parent();if(parent_error_message.hasClass('e_message'))
{parent_error_message.hide();}}},set_field_error:function(j_field,error_message,show_tooltip)
{if(this.no_error_display)return;j_field.addClass('error');if(!j_field.is(':visible'))
{return;}
var error_icon_target=this._get_error_icon_target(j_field);var has_already_errror_icon_displayed=error_icon_target.next('.form_error_img').length;if(!has_already_errror_icon_displayed)
{this._create_error_icon(error_icon_target,error_message);}
if(show_tooltip)
{this._show_error_tooltip(error_icon_target);}},remove_error:function(j_field)
{if(j_field.hasClass('error'))
{j_field.removeClass('error');var error_icon_target=this._get_error_icon_target(j_field);error_icon_target.next('.form_error_img').remove();}},remove_all_form_errors:function()
{var me=this;this.j_fields.each(function()
{me.remove_error($(this));});this.clear_form_error();},_get_error_icon_target:function(j_field)
{var error_icon_target=j_field;var input_type=j_field.prop('type');if(input_type&&(input_type==='checkbox'))
{var field_label=$('label[for="'+j_field.prop('id')+'"]');if(field_label)
{error_icon_target=field_label;}}
return error_icon_target;},_create_error_icon:function(error_icon_target,error_message)
{if(this.new_error_display)
{$('<span></span>').attr({'data-hover':'tooltip','aria-label':error_message}).addClass('form_error_img sprite_miscellaneous_error').insertAfter(error_icon_target);return;}
var j_error_span=$('<span></span>').attr({'data-hover':'tooltip','aria-label':error_message}).addClass('form_error_img sprite_16x16_warning_sign').css('position','absolute').insertAfter(error_icon_target);var el_position=error_icon_target.position();var el_outer_height=error_icon_target.outerHeight();var top_margin=Math.floor((el_outer_height-j_error_span.outerHeight())/2);var left_margin=error_icon_target.css('margin-left');left_margin=parseInt(left_margin,10);if(top_margin>6)
{top_margin=6;}
var error_margin_right=j_error_span.css('margin-right');error_margin_right=parseInt(error_margin_right,10);var error_margin_top=j_error_span.css('margin-top');error_margin_top=parseInt(error_margin_top,10);if(isNaN(parseInt(error_margin_right)))error_margin_right=0;if(isNaN(parseInt(error_margin_top)))error_margin_top=0;error_margin_top=parseInt(error_margin_top);if(error_icon_target.is('select'))
{error_margin_top+=this.ADDITIONAL_TOP_MARGIN_FOR_ERROR_ICON_ON_SELECT_ELEMENT;error_margin_right+=this.ADDITIONAL_RIGHT_MARGIN_FOR_ERROR_ICON_ON_SELECT_ELEMENT;}
var left=el_position.left+error_icon_target.outerWidth()-j_error_span.outerWidth()-error_margin_right+left_margin;var pos_top=el_position.top+top_margin+error_margin_top;j_error_span.css('left',left+'px').css('top',pos_top+'px');},_show_error_tooltip:function(j_field)
{Box.Application.getService('tooltips').showTooltips({element:j_field.next('.form_error_img').get(0),duration:2000,hide_event_type:'mouseout',delay:50});},_handle_form_field_event:function(e)
{var j_target=$(e.currentTarget);if(e.type=='click'||e.type=='focusin')
{this.remove_error(j_target);}
else if(e.type=='focusout')
{this.validate_field(j_target,true);if(!this.j_fields.hasClass('error'))
{this.clear_form_error();}}}},{VALIDATED:true,NOT_VALIDATED:false,AJAX_VALIDATION:'ajax'});Form_Handler.implement(Box_Pub_Sub);Box.Timing.execution.push({name:'js/marketing/locale_menu.js',time:(new Date()).getTime()});var Locale_Menu=Base.extend({is_open:false,constructor:function()
{this.j_menu_launcher=$('#locale_menu_launcher');if(this.j_menu_launcher.length==0)return;this.j_menu=$('#locale_menu');this.menu_height=this.j_menu.height();this.menu_pos=this.j_menu.offset();this.j_persistent_elements=this.j_menu.add(this.j_menu_launcher);this.current_selected_locale=$('.selected_locale').data('selected_locale');this.attach_events();},attach_events:function()
{var me=this;this.j_menu_launcher.on('click',function()
{if(me.is_open)
{me.hide();}
else
{me.show();}});this.j_menu.on('click','li>a',function(e){me._handle_locale_selection(e);});},show:function()
{var me=this;var hide_timeout=null;this._set_position();this.j_persistent_elements.on('mouseenter mouseleave',function(e)
{if(e.type=='mouseleave')
{hide_timeout=setTimeout(function(){me.hide();},400);}
else if(e.type=='mouseenter')
{clearTimeout(hide_timeout);}});this.is_open=true;this.j_menu.show();},hide:function()
{this.j_persistent_elements.off('mouseleave mouseenter');this.is_open=false;this.j_menu.hide();},_handle_locale_selection:function(e)
{e.preventDefault();var selected_locale=$(e.currentTarget).parents('li.locale_selection').attr('id').substr(0,5);var cookies=Box.Application.getService('cookies');if(selected_locale!=this.current_selected_locale)
{cookies.set('box_locale',selected_locale);location.reload();}},_set_position:function()
{var target_menu_pos=this.j_menu_launcher.offset();target_menu_pos.top-=(this.menu_height+Locale_Menu.TOP_OFFSET);if((target_menu_pos.top!=this.menu_pos.top)||(target_menu_pos.left!=this.menu_pos.left))
{this.menu_pos=target_menu_pos;this.j_menu.offset(target_menu_pos);this.j_menu.css({'left':target_menu_pos.left,'top':target_menu_pos.top});}}},{TOP_OFFSET:20,get:function()
{if(!Locale_Menu._instance)
{Locale_Menu._instance=new Locale_Menu();}
return Locale_Menu._instance;}});$(function()
{Locale_Menu.get();});Box.Timing.execution.push({name:'js/box_event_tracker.js',time:(new Date()).getTime()});var Box_Event_Tracker=Base.extend({info:'',category:'',action:'',category_remembered:0,tracker:null,constructor:function(params)
{this.category='';this.action='';this.tracker=params.tracker;},set_category:function(category)
{this.category=category;},set_category_by_rm:function(sub_category)
{var current_rm=Box.Application.getService('v5').get('current_rm');if(current_rm==='box_files')
{this.category=(sub_category!='')?('Files - '+sub_category):'Files';}
else if(current_rm==='box_v2_new_inbox')
{this.category=(sub_category!='')?('Updates - '+sub_category):'Updates';}
else if(current_rm==='box_user_profile_view')
{this.category=(sub_category!='')?('Profile - '+sub_category):'Profile';}
else if(current_rm==='box_collaborators')
{if(typeof(Tombstone)!='undefined')Tombstone.marker('./js/box_event_tracker.js:20755','2013-05-15','auto tombstoned');this.category=(sub_category!='')?('Collaborators - '+sub_category):'Collaborators';}},set_action:function(action)
{this.action=action;},reset:function()
{if(this.category!='Files - Shared menu'&&this.action!='Link to file'&&this.action!='Link to folder'&&this.action!='Upgrade direct_link - Popup'&&this.action!='Upgrade password_protect - Popup')
{this.category='';this.category_remembered=0;}
else
{this.category_remembered=1;}
this.action='';this.info='';},send_modular_event:function(category,action,value)
{try
{if(event_tracking)
{if(category!=''&&action!='')
{this.tracker.push(['_trackEvent',category,action,event_tracking_tariff,value]);}}}
catch(err){}},send:function(value)
{try
{if(event_tracking)
{if(this.category!=''&&this.action!='')
{this.tracker.push(['_trackEvent',this.category,this.action,event_tracking_tariff,value]);}}}
catch(err){}
this.reset();}},{get:function()
{if(!Box_Event_Tracker.__instance)
{Box_Event_Tracker.__instance=new Box_Event_Tracker({tracker:_gaq});}
return Box_Event_Tracker.__instance;}});Box.Timing.execution.push({name:'js/plugins/swfobject-2.2.js',time:(new Date()).getTime()});var swfobject=function(){var UNDEF="undefined",OBJECT="object",SHOCKWAVE_FLASH="Shockwave Flash",SHOCKWAVE_FLASH_AX="ShockwaveFlash.ShockwaveFlash",FLASH_MIME_TYPE="application/x-shockwave-flash",EXPRESS_INSTALL_ID="SWFObjectExprInst",ON_READY_STATE_CHANGE="onreadystatechange",win=window,doc=document,nav=navigator,plugin=false,domLoadFnArr=[main],regObjArr=[],objIdArr=[],listenersArr=[],storedAltContent,storedAltContentId,storedCallbackFn,storedCallbackObj,isDomLoaded=false,isExpressInstallActive=false,dynamicStylesheet,dynamicStylesheetMedia,autoHideShow=true,ua=function(){var w3cdom=typeof doc.getElementById!=UNDEF&&typeof doc.getElementsByTagName!=UNDEF&&typeof doc.createElement!=UNDEF,u=nav.userAgent.toLowerCase(),p=nav.platform.toLowerCase(),windows=p?/win/.test(p):/win/.test(u),mac=p?/mac/.test(p):/mac/.test(u),webkit=/webkit/.test(u)?parseFloat(u.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,ie=nav.appName==='Microsoft Internet Explorer',playerVersion=[0,0,0],d=null;if(typeof nav.plugins!=UNDEF&&typeof nav.plugins[SHOCKWAVE_FLASH]==OBJECT){d=nav.plugins[SHOCKWAVE_FLASH].description;if(d&&!(typeof nav.mimeTypes!=UNDEF&&nav.mimeTypes[FLASH_MIME_TYPE]&&!nav.mimeTypes[FLASH_MIME_TYPE].enabledPlugin)){plugin=true;ie=false;d=d.replace(/^.*\s+(\S+\s+\S+$)/,"$1");playerVersion[0]=parseInt(d.replace(/^(.*)\..*$/,"$1"),10);playerVersion[1]=parseInt(d.replace(/^.*\.(.*)\s.*$/,"$1"),10);playerVersion[2]=/[a-zA-Z]/.test(d)?parseInt(d.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0;}}
else if(typeof win.ActiveXObject!=UNDEF){try{var a=new ActiveXObject(SHOCKWAVE_FLASH_AX);if(a){d=a.GetVariable("$version");if(d){ie=true;d=d.split(" ")[1].split(",");playerVersion=[parseInt(d[0],10),parseInt(d[1],10),parseInt(d[2],10)];}}}
catch(e){}}
return{w3:w3cdom,pv:playerVersion,wk:webkit,ie:ie,win:windows,mac:mac};}(),onDomLoad=function(){if(!ua.w3){return;}
if((typeof doc.readyState!=UNDEF&&doc.readyState=="complete")||(typeof doc.readyState==UNDEF&&(doc.getElementsByTagName("body")[0]||doc.body))){callDomLoadFunctions();}
if(!isDomLoaded){if(typeof doc.addEventListener!=UNDEF){doc.addEventListener("DOMContentLoaded",callDomLoadFunctions,false);}
if(ua.ie&&ua.win){doc.attachEvent(ON_READY_STATE_CHANGE,function(){if(doc.readyState=="complete"){doc.detachEvent(ON_READY_STATE_CHANGE,arguments.callee);callDomLoadFunctions();}});if(win==top){(function(){if(isDomLoaded){return;}
try{doc.documentElement.doScroll("left");}
catch(e){setTimeout(arguments.callee,0);return;}
callDomLoadFunctions();})();}}
if(ua.wk){(function(){if(isDomLoaded){return;}
if(!/loaded|complete/.test(doc.readyState)){setTimeout(arguments.callee,1000);return;}
callDomLoadFunctions();})();}
addLoadEvent(callDomLoadFunctions);}}();function callDomLoadFunctions(){if(isDomLoaded){return;}
try{var t=doc.getElementsByTagName("body")[0].appendChild(createElement("span"));t.parentNode.removeChild(t);}
catch(e){return;}
isDomLoaded=true;var dl=domLoadFnArr.length;for(var i=0;i<dl;i++){domLoadFnArr[i]();}}
function addDomLoadEvent(fn){if(isDomLoaded){fn();}
else{domLoadFnArr[domLoadFnArr.length]=fn;}}
function addLoadEvent(fn){if(typeof win.addEventListener!=UNDEF){win.addEventListener("load",fn,false);}
else if(typeof doc.addEventListener!=UNDEF){doc.addEventListener("load",fn,false);}
else if(typeof win.attachEvent!=UNDEF){addListener(win,"onload",fn);}
else if(typeof win.onload=="function"){var fnOld=win.onload;win.onload=function(){fnOld();fn();};}
else{win.onload=fn;}}
function main(){setTimeout(function(){if(plugin){testPlayerVersion();}
else{matchVersions();}},0);}
function testPlayerVersion(){var b=doc.getElementsByTagName("body")[0];var o=createElement(OBJECT);o.style.display="none";o.setAttribute("type",FLASH_MIME_TYPE);var t=b.appendChild(o);if(t){var counter=0;(function(){if(typeof t.GetVariable!=UNDEF){var d=t.GetVariable("$version");if(d){d=d.split(" ")[1].split(",");ua.pv=[parseInt(d[0],10),parseInt(d[1],10),parseInt(d[2],10)];}}
else if(counter<10){counter++;setTimeout(arguments.callee,10);return;}
b.removeChild(o);t=null;matchVersions();})();}
else{matchVersions();}}
function matchVersions(){var rl=regObjArr.length;if(rl>0){for(var i=0;i<rl;i++){var id=regObjArr[i].id;var cb=regObjArr[i].callbackFn;var cbObj={success:false,id:id};if(ua.pv[0]>0){var obj=getElementById(id);if(obj){if(hasPlayerVersion(regObjArr[i].swfVersion)&&!(ua.wk&&ua.wk<312)){setVisibility(id,true);if(cb){cbObj.success=true;cbObj.ref=getObjectById(id);cb(cbObj);}}
else if(regObjArr[i].expressInstall&&canExpressInstall()){var att={};att.data=regObjArr[i].expressInstall;att.width=obj.getAttribute("width")||"0";att.height=obj.getAttribute("height")||"0";if(obj.getAttribute("class")){att.styleclass=obj.getAttribute("class");}
if(obj.getAttribute("align")){att.align=obj.getAttribute("align");}
var par={};var p=obj.getElementsByTagName("param");var pl=p.length;for(var j=0;j<pl;j++){if(p[j].getAttribute("name").toLowerCase()!="movie"){par[p[j].getAttribute("name")]=p[j].getAttribute("value");}}
showExpressInstall(att,par,id,cb);}
else{displayAltContent(obj);if(cb){cb(cbObj);}}}}
else{setVisibility(id,true);if(cb){var o=getObjectById(id);if(o&&typeof o.SetVariable!=UNDEF){cbObj.success=true;cbObj.ref=o;}
cb(cbObj);}}}}}
function getObjectById(objectIdStr){var r=null;var o=getElementById(objectIdStr);if(o&&o.nodeName=="OBJECT"){if(typeof o.SetVariable!=UNDEF){r=o;}
else{var n=o.getElementsByTagName(OBJECT)[0];if(n){r=n;}}}
return r;}
function canExpressInstall(){return!isExpressInstallActive&&hasPlayerVersion("6.0.65")&&(ua.win||ua.mac)&&!(ua.wk&&ua.wk<312);}
function showExpressInstall(att,par,replaceElemIdStr,callbackFn){isExpressInstallActive=true;storedCallbackFn=callbackFn||null;storedCallbackObj={success:false,id:replaceElemIdStr};var obj=getElementById(replaceElemIdStr);if(obj){if(obj.nodeName=="OBJECT"){storedAltContent=abstractAltContent(obj);storedAltContentId=null;}
else{storedAltContent=obj;storedAltContentId=replaceElemIdStr;}
att.id=EXPRESS_INSTALL_ID;if(typeof att.width==UNDEF||(!/%$/.test(att.width)&&parseInt(att.width,10)<310)){att.width="310";}
if(typeof att.height==UNDEF||(!/%$/.test(att.height)&&parseInt(att.height,10)<137)){att.height="137";}
doc.title=doc.title.slice(0,47)+" - Flash Player Installation";var pt=ua.ie&&ua.win?"ActiveX":"PlugIn",fv="MMredirectURL="+win.location.toString().replace(/&/g,"%26")+"&MMplayerType="+pt+"&MMdoctitle="+doc.title;if(typeof par.flashvars!=UNDEF){par.flashvars+="&"+fv;}
else{par.flashvars=fv;}
if(ua.ie&&ua.win&&obj.readyState!=4){var newObj=createElement("div");replaceElemIdStr+="SWFObjectNew";newObj.setAttribute("id",replaceElemIdStr);obj.parentNode.insertBefore(newObj,obj);obj.style.display="none";(function(){if(obj.readyState==4){obj.parentNode.removeChild(obj);}
else{setTimeout(arguments.callee,10);}})();}
createSWF(att,par,replaceElemIdStr);}}
function displayAltContent(obj){if(ua.ie&&ua.win&&obj.readyState!=4){var el=createElement("div");obj.parentNode.insertBefore(el,obj);el.parentNode.replaceChild(abstractAltContent(obj),el);obj.style.display="none";(function(){if(obj.readyState==4){obj.parentNode.removeChild(obj);}
else{setTimeout(arguments.callee,10);}})();}
else{obj.parentNode.replaceChild(abstractAltContent(obj),obj);}}
function abstractAltContent(obj){var ac=createElement("div");if(ua.win&&ua.ie){ac.innerHTML=obj.innerHTML;}
else{var nestedObj=obj.getElementsByTagName(OBJECT)[0];if(nestedObj){var c=nestedObj.childNodes;if(c){var cl=c.length;for(var i=0;i<cl;i++){if(!(c[i].nodeType==1&&c[i].nodeName=="PARAM")&&!(c[i].nodeType==8)){ac.appendChild(c[i].cloneNode(true));}}}}}
return ac;}
function createSWF(attObj,parObj,id){var r,el=getElementById(id);if(ua.wk&&ua.wk<312){return r;}
if(el){if(typeof attObj.id==UNDEF){attObj.id=id;}
if(ua.ie&&ua.win){var att="";for(var i in attObj){if(attObj[i]!=Object.prototype[i]){if(i.toLowerCase()=="data"){parObj.movie=attObj[i];}
else if(i.toLowerCase()=="styleclass"){att+=' class="'+attObj[i]+'"';}
else if(i.toLowerCase()!="classid"){att+=' '+i+'="'+attObj[i]+'"';}}}
var par="";for(var j in parObj){if(parObj[j]!=Object.prototype[j]){par+='<param name="'+j+'" value="'+parObj[j]+'" />';}}
el.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+att+'>'+par+'</object>';objIdArr[objIdArr.length]=attObj.id;r=getElementById(attObj.id);}
else{var o=createElement(OBJECT);o.setAttribute("type",FLASH_MIME_TYPE);for(var m in attObj){if(attObj[m]!=Object.prototype[m]){if(m.toLowerCase()=="styleclass"){o.setAttribute("class",attObj[m]);}
else if(m.toLowerCase()!="classid"){o.setAttribute(m,attObj[m]);}}}
for(var n in parObj){if(parObj[n]!=Object.prototype[n]&&n.toLowerCase()!="movie"){createObjParam(o,n,parObj[n]);}}
el.parentNode.replaceChild(o,el);r=o;}}
return r;}
function createObjParam(el,pName,pValue){var p=createElement("param");p.setAttribute("name",pName);p.setAttribute("value",pValue);el.appendChild(p);}
function removeSWF(id){var obj=getElementById(id);if(obj&&obj.nodeName=="OBJECT"){if(ua.ie&&ua.win){obj.style.display="none";(function(){if(obj.readyState==4){removeObjectInIE(id);}
else{setTimeout(arguments.callee,10);}})();}
else{obj.parentNode.removeChild(obj);}}}
function removeObjectInIE(id){var obj=getElementById(id);if(obj){for(var i in obj){if(typeof obj[i]=="function"){obj[i]=null;}}
obj.parentNode.removeChild(obj);}}
function getElementById(id){var el=null;try{el=doc.getElementById(id);}
catch(e){}
return el;}
function createElement(el){return doc.createElement(el);}
function addListener(target,eventType,fn){target.attachEvent(eventType,fn);listenersArr[listenersArr.length]=[target,eventType,fn];}
function hasPlayerVersion(rv){var pv=ua.pv,v=rv.split(".");v[0]=parseInt(v[0],10);v[1]=parseInt(v[1],10)||0;v[2]=parseInt(v[2],10)||0;return(pv[0]>v[0]||(pv[0]==v[0]&&pv[1]>v[1])||(pv[0]==v[0]&&pv[1]==v[1]&&pv[2]>=v[2]))?true:false;}
function createCSS(sel,decl,media,newStyle){if(ua.ie&&ua.mac){return;}
var h=doc.getElementsByTagName("head")[0];if(!h){return;}
var m=(media&&typeof media=="string")?media:"screen";if(newStyle){dynamicStylesheet=null;dynamicStylesheetMedia=null;}
if(!dynamicStylesheet||dynamicStylesheetMedia!=m){var s=createElement("style");s.setAttribute("type","text/css");s.setAttribute("media",m);dynamicStylesheet=h.appendChild(s);if(ua.ie&&ua.win&&typeof doc.styleSheets!=UNDEF&&doc.styleSheets.length>0){dynamicStylesheet=doc.styleSheets[doc.styleSheets.length-1];}
dynamicStylesheetMedia=m;}
if(ua.ie&&ua.win){if(dynamicStylesheet&&typeof dynamicStylesheet.addRule==OBJECT){dynamicStylesheet.addRule(sel,decl);}}
else{if(dynamicStylesheet&&typeof doc.createTextNode!=UNDEF){dynamicStylesheet.appendChild(doc.createTextNode(sel+" {"+decl+"}"));}}}
function setVisibility(id,isVisible){if(!autoHideShow){return;}
var v=isVisible?"visible":"hidden";if(isDomLoaded&&getElementById(id)){getElementById(id).style.visibility=v;}
else{createCSS("#"+id,"visibility:"+v);}}
function urlEncodeIfNecessary(s){var regex=/[\\\"<>\.;]/;var hasBadChars=regex.exec(s)!=null;return hasBadChars&&typeof encodeURIComponent!=UNDEF?encodeURIComponent(s):s;}
var cleanup=function(){if(ua.ie&&ua.win){window.attachEvent("onunload",function(){var ll=listenersArr.length;for(var i=0;i<ll;i++){listenersArr[i][0].detachEvent(listenersArr[i][1],listenersArr[i][2]);}
var il=objIdArr.length;for(var j=0;j<il;j++){removeSWF(objIdArr[j]);}
for(var k in ua){ua[k]=null;}
ua=null;for(var l in swfobject){swfobject[l]=null;}
swfobject=null;});}}();return{registerObject:function(objectIdStr,swfVersionStr,xiSwfUrlStr,callbackFn){if(ua.w3&&objectIdStr&&swfVersionStr){var regObj={};regObj.id=objectIdStr;regObj.swfVersion=swfVersionStr;regObj.expressInstall=xiSwfUrlStr;regObj.callbackFn=callbackFn;regObjArr[regObjArr.length]=regObj;setVisibility(objectIdStr,false);}
else if(callbackFn){callbackFn({success:false,id:objectIdStr});}},getObjectById:function(objectIdStr){if(ua.w3){return getObjectById(objectIdStr);}},embedSWF:function(swfUrlStr,replaceElemIdStr,widthStr,heightStr,swfVersionStr,xiSwfUrlStr,flashvarsObj,parObj,attObj,callbackFn){var callbackObj={success:false,id:replaceElemIdStr};if(ua.w3&&!(ua.wk&&ua.wk<312)&&swfUrlStr&&replaceElemIdStr&&widthStr&&heightStr&&swfVersionStr){setVisibility(replaceElemIdStr,false);addDomLoadEvent(function(){widthStr+="";heightStr+="";var att={};if(attObj&&typeof attObj===OBJECT){for(var i in attObj){att[i]=attObj[i];}}
att.data=swfUrlStr;att.width=widthStr;att.height=heightStr;var par={};if(parObj&&typeof parObj===OBJECT){for(var j in parObj){par[j]=parObj[j];}}
if(flashvarsObj&&typeof flashvarsObj===OBJECT){for(var k in flashvarsObj){if(typeof par.flashvars!=UNDEF){par.flashvars+="&"+k+"="+flashvarsObj[k];}
else{par.flashvars=k+"="+flashvarsObj[k];}}}
if(hasPlayerVersion(swfVersionStr)){var obj=createSWF(att,par,replaceElemIdStr);if(att.id==replaceElemIdStr){setVisibility(replaceElemIdStr,true);}
callbackObj.success=true;callbackObj.ref=obj;}
else if(xiSwfUrlStr&&canExpressInstall()){att.data=xiSwfUrlStr;showExpressInstall(att,par,replaceElemIdStr,callbackFn);return;}
else{setVisibility(replaceElemIdStr,true);}
if(callbackFn){callbackFn(callbackObj);}});}
else if(callbackFn){callbackFn(callbackObj);}},switchOffAutoHideShow:function(){autoHideShow=false;},ua:ua,getFlashPlayerVersion:function(){return{major:ua.pv[0],minor:ua.pv[1],release:ua.pv[2]};},hasFlashPlayerVersion:hasPlayerVersion,createSWF:function(attObj,parObj,replaceElemIdStr){if(ua.w3){return createSWF(attObj,parObj,replaceElemIdStr);}
else{return undefined;}},showExpressInstall:function(att,par,replaceElemIdStr,callbackFn){if(ua.w3&&canExpressInstall()){showExpressInstall(att,par,replaceElemIdStr,callbackFn);}},removeSWF:function(objElemIdStr){if(ua.w3){removeSWF(objElemIdStr);}},createCSS:function(selStr,declStr,mediaStr,newStyleBoolean){if(ua.w3){createCSS(selStr,declStr,mediaStr,newStyleBoolean);}},addDomLoadEvent:addDomLoadEvent,addLoadEvent:addLoadEvent,getQueryParamValue:function(param){var q=doc.location.search||doc.location.hash;if(q){if(/\?/.test(q)){q=q.split("?")[1];}
if(param==null){return urlEncodeIfNecessary(q);}
var pairs=q.split("&");for(var i=0;i<pairs.length;i++){if(pairs[i].substring(0,pairs[i].indexOf("="))==param){return urlEncodeIfNecessary(pairs[i].substring((pairs[i].indexOf("=")+1)));}}}
return"";},expressInstallCallback:function(){if(isExpressInstallActive){var obj=getElementById(EXPRESS_INSTALL_ID);if(obj&&storedAltContent){obj.parentNode.replaceChild(storedAltContent,obj);if(storedAltContentId){setVisibility(storedAltContentId,true);if(ua.ie&&ua.win){storedAltContent.style.display="block";}}
if(storedCallbackFn){storedCallbackFn(storedCallbackObj);}}
isExpressInstallActive=false;}}};}();Box.Timing.execution.push({name:'js/modules/common/legacy-footer.js',time:(new Date()).getTime()});Box.Application.addModule('legacy-footer',function(context){'use strict';var dom,$element;return{init:function(){dom=context.getService('dom');$element=$(context.getElement());},onclick:function(event,element,elementType){var url;if(element){switch(elementType){case'legal-link':url=dom.getData(element,'url');if(url){this.openLegalPopup(url);}
break;}
event.preventDefault();event.stopPropagation();}},openLegalPopup:function(url){var windowPopup=context.getService('window-popup'),legalPopup;legalPopup=windowPopup.create(url,{width:700,height:400});legalPopup.show();}};});;Box.Timing.execution.push({name:'done',time:(new Date()).getTime()});