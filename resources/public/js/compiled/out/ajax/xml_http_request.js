// Compiled by ClojureScript 1.9.293 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__31080,handler){
var map__31081 = p__31080;
var map__31081__$1 = ((((!((map__31081 == null)))?((((map__31081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31081.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31081):map__31081);
var uri = cljs.core.get.call(null,map__31081__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__31081__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__31081__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__31081__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__31081__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__31081__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__31081__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__31081,map__31081__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__31079_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__31079_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__31081,map__31081__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___31093 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___31093)){
var response_type_31094 = temp__4657__auto___31093;
this$__$1.responseType = cljs.core.name.call(null,response_type_31094);
} else {
}

var seq__31083_31095 = cljs.core.seq.call(null,headers);
var chunk__31084_31096 = null;
var count__31085_31097 = (0);
var i__31086_31098 = (0);
while(true){
if((i__31086_31098 < count__31085_31097)){
var vec__31087_31099 = cljs.core._nth.call(null,chunk__31084_31096,i__31086_31098);
var k_31100 = cljs.core.nth.call(null,vec__31087_31099,(0),null);
var v_31101 = cljs.core.nth.call(null,vec__31087_31099,(1),null);
this$__$1.setRequestHeader(k_31100,v_31101);

var G__31102 = seq__31083_31095;
var G__31103 = chunk__31084_31096;
var G__31104 = count__31085_31097;
var G__31105 = (i__31086_31098 + (1));
seq__31083_31095 = G__31102;
chunk__31084_31096 = G__31103;
count__31085_31097 = G__31104;
i__31086_31098 = G__31105;
continue;
} else {
var temp__4657__auto___31106 = cljs.core.seq.call(null,seq__31083_31095);
if(temp__4657__auto___31106){
var seq__31083_31107__$1 = temp__4657__auto___31106;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31083_31107__$1)){
var c__26788__auto___31108 = cljs.core.chunk_first.call(null,seq__31083_31107__$1);
var G__31109 = cljs.core.chunk_rest.call(null,seq__31083_31107__$1);
var G__31110 = c__26788__auto___31108;
var G__31111 = cljs.core.count.call(null,c__26788__auto___31108);
var G__31112 = (0);
seq__31083_31095 = G__31109;
chunk__31084_31096 = G__31110;
count__31085_31097 = G__31111;
i__31086_31098 = G__31112;
continue;
} else {
var vec__31090_31113 = cljs.core.first.call(null,seq__31083_31107__$1);
var k_31114 = cljs.core.nth.call(null,vec__31090_31113,(0),null);
var v_31115 = cljs.core.nth.call(null,vec__31090_31113,(1),null);
this$__$1.setRequestHeader(k_31114,v_31115);

var G__31116 = cljs.core.next.call(null,seq__31083_31107__$1);
var G__31117 = null;
var G__31118 = (0);
var G__31119 = (0);
seq__31083_31095 = G__31116;
chunk__31084_31096 = G__31117;
count__31085_31097 = G__31118;
i__31086_31098 = G__31119;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__25974__auto__ = body;
if(cljs.core.truth_(or__25974__auto__)){
return or__25974__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

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

//# sourceMappingURL=xml_http_request.js.map?rel=1480126461804