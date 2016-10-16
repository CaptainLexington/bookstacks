// Compiled by ClojureScript 1.9.89 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__29532,handler){
var map__29533 = p__29532;
var map__29533__$1 = ((((!((map__29533 == null)))?((((map__29533.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29533.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29533):map__29533);
var uri = cljs.core.get.call(null,map__29533__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__29533__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__29533__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__29533__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__29533__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__29533__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__29533__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__29533,map__29533__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__29531_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__29531_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__29533,map__29533__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___29545 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___29545)){
var response_type_29546 = temp__4657__auto___29545;
this$__$1.responseType = cljs.core.name.call(null,response_type_29546);
} else {
}

var seq__29535_29547 = cljs.core.seq.call(null,headers);
var chunk__29536_29548 = null;
var count__29537_29549 = (0);
var i__29538_29550 = (0);
while(true){
if((i__29538_29550 < count__29537_29549)){
var vec__29539_29551 = cljs.core._nth.call(null,chunk__29536_29548,i__29538_29550);
var k_29552 = cljs.core.nth.call(null,vec__29539_29551,(0),null);
var v_29553 = cljs.core.nth.call(null,vec__29539_29551,(1),null);
this$__$1.setRequestHeader(k_29552,v_29553);

var G__29554 = seq__29535_29547;
var G__29555 = chunk__29536_29548;
var G__29556 = count__29537_29549;
var G__29557 = (i__29538_29550 + (1));
seq__29535_29547 = G__29554;
chunk__29536_29548 = G__29555;
count__29537_29549 = G__29556;
i__29538_29550 = G__29557;
continue;
} else {
var temp__4657__auto___29558 = cljs.core.seq.call(null,seq__29535_29547);
if(temp__4657__auto___29558){
var seq__29535_29559__$1 = temp__4657__auto___29558;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29535_29559__$1)){
var c__26381__auto___29560 = cljs.core.chunk_first.call(null,seq__29535_29559__$1);
var G__29561 = cljs.core.chunk_rest.call(null,seq__29535_29559__$1);
var G__29562 = c__26381__auto___29560;
var G__29563 = cljs.core.count.call(null,c__26381__auto___29560);
var G__29564 = (0);
seq__29535_29547 = G__29561;
chunk__29536_29548 = G__29562;
count__29537_29549 = G__29563;
i__29538_29550 = G__29564;
continue;
} else {
var vec__29542_29565 = cljs.core.first.call(null,seq__29535_29559__$1);
var k_29566 = cljs.core.nth.call(null,vec__29542_29565,(0),null);
var v_29567 = cljs.core.nth.call(null,vec__29542_29565,(1),null);
this$__$1.setRequestHeader(k_29566,v_29567);

var G__29568 = cljs.core.next.call(null,seq__29535_29559__$1);
var G__29569 = null;
var G__29570 = (0);
var G__29571 = (0);
seq__29535_29547 = G__29568;
chunk__29536_29548 = G__29569;
count__29537_29549 = G__29570;
i__29538_29550 = G__29571;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__25570__auto__ = body;
if(cljs.core.truth_(or__25570__auto__)){
return or__25570__auto__;
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

//# sourceMappingURL=xml_http_request.js.map?rel=1476574112699