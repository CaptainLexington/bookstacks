// Compiled by ClojureScript 1.9.89 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__31335,handler){
var map__31336 = p__31335;
var map__31336__$1 = ((((!((map__31336 == null)))?((((map__31336.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31336.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31336):map__31336);
var uri = cljs.core.get.call(null,map__31336__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__31336__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__31336__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__31336__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__31336__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__31336__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__31336__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__31336,map__31336__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__31334_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__31334_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__31336,map__31336__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___31348 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___31348)){
var response_type_31349 = temp__4657__auto___31348;
this$__$1.responseType = cljs.core.name.call(null,response_type_31349);
} else {
}

var seq__31338_31350 = cljs.core.seq.call(null,headers);
var chunk__31339_31351 = null;
var count__31340_31352 = (0);
var i__31341_31353 = (0);
while(true){
if((i__31341_31353 < count__31340_31352)){
var vec__31342_31354 = cljs.core._nth.call(null,chunk__31339_31351,i__31341_31353);
var k_31355 = cljs.core.nth.call(null,vec__31342_31354,(0),null);
var v_31356 = cljs.core.nth.call(null,vec__31342_31354,(1),null);
this$__$1.setRequestHeader(k_31355,v_31356);

var G__31357 = seq__31338_31350;
var G__31358 = chunk__31339_31351;
var G__31359 = count__31340_31352;
var G__31360 = (i__31341_31353 + (1));
seq__31338_31350 = G__31357;
chunk__31339_31351 = G__31358;
count__31340_31352 = G__31359;
i__31341_31353 = G__31360;
continue;
} else {
var temp__4657__auto___31361 = cljs.core.seq.call(null,seq__31338_31350);
if(temp__4657__auto___31361){
var seq__31338_31362__$1 = temp__4657__auto___31361;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31338_31362__$1)){
var c__26387__auto___31363 = cljs.core.chunk_first.call(null,seq__31338_31362__$1);
var G__31364 = cljs.core.chunk_rest.call(null,seq__31338_31362__$1);
var G__31365 = c__26387__auto___31363;
var G__31366 = cljs.core.count.call(null,c__26387__auto___31363);
var G__31367 = (0);
seq__31338_31350 = G__31364;
chunk__31339_31351 = G__31365;
count__31340_31352 = G__31366;
i__31341_31353 = G__31367;
continue;
} else {
var vec__31345_31368 = cljs.core.first.call(null,seq__31338_31362__$1);
var k_31369 = cljs.core.nth.call(null,vec__31345_31368,(0),null);
var v_31370 = cljs.core.nth.call(null,vec__31345_31368,(1),null);
this$__$1.setRequestHeader(k_31369,v_31370);

var G__31371 = cljs.core.next.call(null,seq__31338_31362__$1);
var G__31372 = null;
var G__31373 = (0);
var G__31374 = (0);
seq__31338_31350 = G__31371;
chunk__31339_31351 = G__31372;
count__31340_31352 = G__31373;
i__31341_31353 = G__31374;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__25576__auto__ = body;
if(cljs.core.truth_(or__25576__auto__)){
return or__25576__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map?rel=1480029280420