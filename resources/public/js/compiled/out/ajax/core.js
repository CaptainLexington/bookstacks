// Compiled by ClojureScript 1.9.293 {}
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('goog.net.XhrIo');
goog.require('ajax.xml_http_request');
goog.require('goog.json');
goog.require('goog.Uri.QueryData');
goog.require('goog.structs');
goog.require('goog.json.Serializer');
goog.require('ajax.protocols');
goog.require('clojure.string');
goog.require('ajax.xhrio');
ajax.core.process_response = (function ajax$core$process_response(response,interceptor){

return ajax.protocols._process_response.call(null,interceptor,response);
});
ajax.core.process_request = (function ajax$core$process_request(request,interceptor){

return ajax.protocols._process_request.call(null,interceptor,request);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.StandardInterceptor = (function (name,request,response,__meta,__extmap,__hash){
this.name = name;
this.request = request;
this.response = response;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__26596__auto__,k__26597__auto__){
var self__ = this;
var this__26596__auto____$1 = this;
return cljs.core._lookup.call(null,this__26596__auto____$1,k__26597__auto__,null);
});

ajax.core.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__26598__auto__,k31293,else__26599__auto__){
var self__ = this;
var this__26598__auto____$1 = this;
var G__31295 = (((k31293 instanceof cljs.core.Keyword))?k31293.fqn:null);
switch (G__31295) {
case "name":
return self__.name;

break;
case "request":
return self__.request;

break;
case "response":
return self__.response;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k31293,else__26599__auto__);

}
});

ajax.core.StandardInterceptor.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.core.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__31296,opts){
var self__ = this;
var map__31297 = p__31296;
var map__31297__$1 = ((((!((map__31297 == null)))?((((map__31297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31297.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31297):map__31297);
var request__$1 = cljs.core.get.call(null,map__31297__$1,new cljs.core.Keyword(null,"request","request",1772954723));
var map__31299 = this;
var map__31299__$1 = ((((!((map__31299 == null)))?((((map__31299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31299.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31299):map__31299);
var request__$2 = cljs.core.get.call(null,map__31299__$1,new cljs.core.Keyword(null,"request","request",1772954723));
return request__$2.call(null,opts);
});

ajax.core.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__31301,xhrio){
var self__ = this;
var map__31302 = p__31301;
var map__31302__$1 = ((((!((map__31302 == null)))?((((map__31302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31302.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31302):map__31302);
var response__$1 = cljs.core.get.call(null,map__31302__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
var map__31304 = this;
var map__31304__$1 = ((((!((map__31304 == null)))?((((map__31304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31304.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31304):map__31304);
var response__$2 = cljs.core.get.call(null,map__31304__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
return response__$2.call(null,xhrio);
});

ajax.core.StandardInterceptor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__26610__auto__,writer__26611__auto__,opts__26612__auto__){
var self__ = this;
var this__26610__auto____$1 = this;
var pr_pair__26613__auto__ = ((function (this__26610__auto____$1){
return (function (keyval__26614__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__26611__auto__,cljs.core.pr_writer,""," ","",opts__26612__auto__,keyval__26614__auto__);
});})(this__26610__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__26611__auto__,pr_pair__26613__auto__,"#ajax.core.StandardInterceptor{",", ","}",opts__26612__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

ajax.core.StandardInterceptor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31292){
var self__ = this;
var G__31292__$1 = this;
return (new cljs.core.RecordIter((0),G__31292__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__26594__auto__){
var self__ = this;
var this__26594__auto____$1 = this;
return self__.__meta;
});

ajax.core.StandardInterceptor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__26590__auto__){
var self__ = this;
var this__26590__auto____$1 = this;
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.StandardInterceptor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__26600__auto__){
var self__ = this;
var this__26600__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__26591__auto__){
var self__ = this;
var this__26591__auto____$1 = this;
var h__26409__auto__ = self__.__hash;
if(!((h__26409__auto__ == null))){
return h__26409__auto__;
} else {
var h__26409__auto____$1 = cljs.core.hash_imap.call(null,this__26591__auto____$1);
self__.__hash = h__26409__auto____$1;

return h__26409__auto____$1;
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__26592__auto__,other__26593__auto__){
var self__ = this;
var this__26592__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25962__auto__ = other__26593__auto__;
if(cljs.core.truth_(and__25962__auto__)){
var and__25962__auto____$1 = (this__26592__auto____$1.constructor === other__26593__auto__.constructor);
if(and__25962__auto____$1){
return cljs.core.equiv_map.call(null,this__26592__auto____$1,other__26593__auto__);
} else {
return and__25962__auto____$1;
}
} else {
return and__25962__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__26605__auto__,k__26606__auto__){
var self__ = this;
var this__26605__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response","response",-1068424192),null,new cljs.core.Keyword(null,"request","request",1772954723),null,new cljs.core.Keyword(null,"name","name",1843675177),null], null), null),k__26606__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__26605__auto____$1),self__.__meta),k__26606__auto__);
} else {
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__26606__auto__)),null));
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__26603__auto__,k__26604__auto__,G__31292){
var self__ = this;
var this__26603__auto____$1 = this;
var pred__31306 = cljs.core.keyword_identical_QMARK_;
var expr__31307 = k__26604__auto__;
if(cljs.core.truth_(pred__31306.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__31307))){
return (new ajax.core.StandardInterceptor(G__31292,self__.request,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31306.call(null,new cljs.core.Keyword(null,"request","request",1772954723),expr__31307))){
return (new ajax.core.StandardInterceptor(self__.name,G__31292,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31306.call(null,new cljs.core.Keyword(null,"response","response",-1068424192),expr__31307))){
return (new ajax.core.StandardInterceptor(self__.name,self__.request,G__31292,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__26604__auto__,G__31292),null));
}
}
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__26608__auto__){
var self__ = this;
var this__26608__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__26595__auto__,G__31292){
var self__ = this;
var this__26595__auto____$1 = this;
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,G__31292,self__.__extmap,self__.__hash));
});

ajax.core.StandardInterceptor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__26601__auto__,entry__26602__auto__){
var self__ = this;
var this__26601__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__26602__auto__)){
return cljs.core._assoc.call(null,this__26601__auto____$1,cljs.core._nth.call(null,entry__26602__auto__,(0)),cljs.core._nth.call(null,entry__26602__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__26601__auto____$1,entry__26602__auto__);
}
});

ajax.core.StandardInterceptor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"request","request",-881481046,null),new cljs.core.Symbol(null,"response","response",572107335,null)], null);
});

ajax.core.StandardInterceptor.cljs$lang$type = true;

ajax.core.StandardInterceptor.cljs$lang$ctorPrSeq = (function (this__26630__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/StandardInterceptor");
});

ajax.core.StandardInterceptor.cljs$lang$ctorPrWriter = (function (this__26630__auto__,writer__26631__auto__){
return cljs.core._write.call(null,writer__26631__auto__,"ajax.core/StandardInterceptor");
});

ajax.core.__GT_StandardInterceptor = (function ajax$core$__GT_StandardInterceptor(name,request,response){
return (new ajax.core.StandardInterceptor(name,request,response,null,null,null));
});

ajax.core.map__GT_StandardInterceptor = (function ajax$core$map__GT_StandardInterceptor(G__31294){
return (new ajax.core.StandardInterceptor(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__31294),new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(G__31294),new cljs.core.Keyword(null,"response","response",-1068424192).cljs$core$IFn$_invoke$arity$1(G__31294),null,cljs.core.dissoc.call(null,G__31294,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192)),null));
});

ajax.core.to_interceptor = (function ajax$core$to_interceptor(m){
return ajax.core.map__GT_StandardInterceptor.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",1772954723),cljs.core.identity,new cljs.core.Keyword(null,"response","response",-1068424192),cljs.core.identity], null),m));
});
ajax.core.get_content_type = (function ajax$core$get_content_type(response){
var or__25974__auto__ = ajax.protocols._get_response_header.call(null,response,"Content-Type");
if(cljs.core.truth_(or__25974__auto__)){
return or__25974__auto__;
} else {
return "";
}
});
ajax.core.abort = (function ajax$core$abort(this$){
return ajax.protocols._abort.call(null,this$);
});
ajax.core.success_QMARK_ = (function ajax$core$success_QMARK_(status){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([status], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(201),(202),(204),(205),(206)], null));
});
ajax.core.exception_message = (function ajax$core$exception_message(e){
return e.message;
});
ajax.core.exception_response = (function ajax$core$exception_response(e,status,p__31310,xhrio){
var map__31313 = p__31310;
var map__31313__$1 = ((((!((map__31313 == null)))?((((map__31313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31313.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31313):map__31313);
var description = cljs.core.get.call(null,map__31313__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),null], null);
var status_text = [cljs.core.str(ajax.core.exception_message.call(null,e)),cljs.core.str("  Format should have been "),cljs.core.str(description)].join('');
var parse_error = cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"parse","parse",-1162164619),new cljs.core.Keyword(null,"original-text","original-text",744448452),ajax.protocols._body.call(null,xhrio));
if(cljs.core.truth_(ajax.core.success_QMARK_.call(null,status))){
return parse_error;
} else {
return cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),ajax.protocols._status_text.call(null,xhrio),new cljs.core.Keyword(null,"parse-error","parse-error",255902478),parse_error);
}
});
ajax.core.fail = (function ajax$core$fail(var_args){
var args__27089__auto__ = [];
var len__27082__auto___31319 = arguments.length;
var i__27083__auto___31320 = (0);
while(true){
if((i__27083__auto___31320 < len__27082__auto___31319)){
args__27089__auto__.push((arguments[i__27083__auto___31320]));

var G__31321 = (i__27083__auto___31320 + (1));
i__27083__auto___31320 = G__31321;
continue;
} else {
}
break;
}

var argseq__27090__auto__ = ((((3) < args__27089__auto__.length))?(new cljs.core.IndexedSeq(args__27089__auto__.slice((3)),(0),null)):null);
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__27090__auto__);
});

ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic = (function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.call(null,cljs.core.conj,response,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),params)))], null);
});

ajax.core.fail.cljs$lang$maxFixedArity = (3);

ajax.core.fail.cljs$lang$applyTo = (function (seq31315){
var G__31316 = cljs.core.first.call(null,seq31315);
var seq31315__$1 = cljs.core.next.call(null,seq31315);
var G__31317 = cljs.core.first.call(null,seq31315__$1);
var seq31315__$2 = cljs.core.next.call(null,seq31315__$1);
var G__31318 = cljs.core.first.call(null,seq31315__$2);
var seq31315__$3 = cljs.core.next.call(null,seq31315__$2);
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic(G__31316,G__31317,G__31318,seq31315__$3);
});

ajax.core.content_type_to_request_header = (function ajax$core$content_type_to_request_header(content_type){
return clojure.string.join.call(null,", ",((typeof content_type === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content_type], null):content_type));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.ResponseFormat = (function (read,description,content_type,__meta,__extmap,__hash){
this.read = read;
this.description = description;
this.content_type = content_type;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__26596__auto__,k__26597__auto__){
var self__ = this;
var this__26596__auto____$1 = this;
return cljs.core._lookup.call(null,this__26596__auto____$1,k__26597__auto__,null);
});

ajax.core.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__26598__auto__,k31324,else__26599__auto__){
var self__ = this;
var this__26598__auto____$1 = this;
var G__31326 = (((k31324 instanceof cljs.core.Keyword))?k31324.fqn:null);
switch (G__31326) {
case "read":
return self__.read;

break;
case "description":
return self__.description;

break;
case "content-type":
return self__.content_type;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k31324,else__26599__auto__);

}
});

ajax.core.ResponseFormat.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.core.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__31327,request){
var self__ = this;
var map__31328 = p__31327;
var map__31328__$1 = ((((!((map__31328 == null)))?((((map__31328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31328.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31328):map__31328);
var content_type__$1 = cljs.core.get.call(null,map__31328__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var map__31330 = this;
var map__31330__$1 = ((((!((map__31330 == null)))?((((map__31330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31330.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31330):map__31330);
var content_type__$2 = cljs.core.get.call(null,map__31330__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));

return cljs.core.update.call(null,request,new cljs.core.Keyword(null,"headers","headers",-835030129),((function (map__31330,map__31330__$1,content_type__$2,map__31328,map__31328__$1,content_type__$1){
return (function (p1__31322_SHARP_){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Accept",ajax.core.content_type_to_request_header.call(null,content_type__$2)], null),(function (){var or__25974__auto__ = p1__31322_SHARP_;
if(cljs.core.truth_(or__25974__auto__)){
return or__25974__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});})(map__31330,map__31330__$1,content_type__$2,map__31328,map__31328__$1,content_type__$1))
);
});

ajax.core.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__31332,xhrio){
var self__ = this;
var map__31333 = p__31332;
var map__31333__$1 = ((((!((map__31333 == null)))?((((map__31333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31333.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31333):map__31333);
var format = map__31333__$1;
var read__$1 = cljs.core.get.call(null,map__31333__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var map__31335 = this;
var map__31335__$1 = ((((!((map__31335 == null)))?((((map__31335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31335.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31335):map__31335);
var format__$1 = map__31335__$1;
var read__$2 = cljs.core.get.call(null,map__31335__$1,new cljs.core.Keyword(null,"read","read",1140058661));

try{var status = ajax.protocols._status.call(null,xhrio);
var fail = cljs.core.partial.call(null,ajax.core.fail,status);
var G__31338 = status;
switch (G__31338) {
case (0):
if((xhrio instanceof ajax.protocols.Response)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,xhrio], null);
} else {
return fail.call(null,"Request failed.",new cljs.core.Keyword(null,"failed","failed",-1397425762));
}

break;
case (-1):
if(cljs.core.truth_(ajax.protocols._was_aborted.call(null,xhrio))){
return fail.call(null,"Request aborted by client.",new cljs.core.Keyword(null,"aborted","aborted",1775972619));
} else {
return fail.call(null,"Request timed out.",new cljs.core.Keyword(null,"timeout","timeout",-318625318));
}

break;
case (204):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
case (205):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
default:
try{var response = read__$2.call(null,xhrio);
if(cljs.core.truth_(ajax.core.success_QMARK_.call(null,status))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response], null);
} else {
return fail.call(null,ajax.protocols._status_text.call(null,xhrio),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),response);
}
}catch (e31339){if((e31339 instanceof Object)){
var e = e31339;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.core.exception_response.call(null,e,status,format__$1,xhrio)], null);
} else {
throw e31339;

}
}
}
}catch (e31337){if((e31337 instanceof Object)){
var e = e31337;
var message = e.message;
return ajax.core.fail.call(null,(0),message,new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"exception","exception",-335277064),e);
} else {
throw e31337;

}
}});

ajax.core.ResponseFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__26610__auto__,writer__26611__auto__,opts__26612__auto__){
var self__ = this;
var this__26610__auto____$1 = this;
var pr_pair__26613__auto__ = ((function (this__26610__auto____$1){
return (function (keyval__26614__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__26611__auto__,cljs.core.pr_writer,""," ","",opts__26612__auto__,keyval__26614__auto__);
});})(this__26610__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__26611__auto__,pr_pair__26613__auto__,"#ajax.core.ResponseFormat{",", ","}",opts__26612__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

ajax.core.ResponseFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31323){
var self__ = this;
var G__31323__$1 = this;
return (new cljs.core.RecordIter((0),G__31323__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.core.ResponseFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__26594__auto__){
var self__ = this;
var this__26594__auto____$1 = this;
return self__.__meta;
});

ajax.core.ResponseFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__26590__auto__){
var self__ = this;
var this__26590__auto____$1 = this;
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.ResponseFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__26600__auto__){
var self__ = this;
var this__26600__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__26591__auto__){
var self__ = this;
var this__26591__auto____$1 = this;
var h__26409__auto__ = self__.__hash;
if(!((h__26409__auto__ == null))){
return h__26409__auto__;
} else {
var h__26409__auto____$1 = cljs.core.hash_imap.call(null,this__26591__auto____$1);
self__.__hash = h__26409__auto____$1;

return h__26409__auto____$1;
}
});

ajax.core.ResponseFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__26592__auto__,other__26593__auto__){
var self__ = this;
var this__26592__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25962__auto__ = other__26593__auto__;
if(cljs.core.truth_(and__25962__auto__)){
var and__25962__auto____$1 = (this__26592__auto____$1.constructor === other__26593__auto__.constructor);
if(and__25962__auto____$1){
return cljs.core.equiv_map.call(null,this__26592__auto____$1,other__26593__auto__);
} else {
return and__25962__auto____$1;
}
} else {
return and__25962__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.ResponseFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__26605__auto__,k__26606__auto__){
var self__ = this;
var this__26605__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),null,new cljs.core.Keyword(null,"read","read",1140058661),null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),null], null), null),k__26606__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__26605__auto____$1),self__.__meta),k__26606__auto__);
} else {
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__26606__auto__)),null));
}
});

ajax.core.ResponseFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__26603__auto__,k__26604__auto__,G__31323){
var self__ = this;
var this__26603__auto____$1 = this;
var pred__31340 = cljs.core.keyword_identical_QMARK_;
var expr__31341 = k__26604__auto__;
if(cljs.core.truth_(pred__31340.call(null,new cljs.core.Keyword(null,"read","read",1140058661),expr__31341))){
return (new ajax.core.ResponseFormat(G__31323,self__.description,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31340.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),expr__31341))){
return (new ajax.core.ResponseFormat(self__.read,G__31323,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31340.call(null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),expr__31341))){
return (new ajax.core.ResponseFormat(self__.read,self__.description,G__31323,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__26604__auto__,G__31323),null));
}
}
}
});

ajax.core.ResponseFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__26608__auto__){
var self__ = this;
var this__26608__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__26595__auto__,G__31323){
var self__ = this;
var this__26595__auto____$1 = this;
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,G__31323,self__.__extmap,self__.__hash));
});

ajax.core.ResponseFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__26601__auto__,entry__26602__auto__){
var self__ = this;
var this__26601__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__26602__auto__)){
return cljs.core._assoc.call(null,this__26601__auto____$1,cljs.core._nth.call(null,entry__26602__auto__,(0)),cljs.core._nth.call(null,entry__26602__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__26601__auto____$1,entry__26602__auto__);
}
});

ajax.core.ResponseFormat.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read","read",-1514377108,null),new cljs.core.Symbol(null,"description","description",211970983,null),new cljs.core.Symbol(null,"content-type","content-type",1132308893,null)], null);
});

ajax.core.ResponseFormat.cljs$lang$type = true;

ajax.core.ResponseFormat.cljs$lang$ctorPrSeq = (function (this__26630__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/ResponseFormat");
});

ajax.core.ResponseFormat.cljs$lang$ctorPrWriter = (function (this__26630__auto__,writer__26631__auto__){
return cljs.core._write.call(null,writer__26631__auto__,"ajax.core/ResponseFormat");
});

ajax.core.__GT_ResponseFormat = (function ajax$core$__GT_ResponseFormat(read,description,content_type){
return (new ajax.core.ResponseFormat(read,description,content_type,null,null,null));
});

ajax.core.map__GT_ResponseFormat = (function ajax$core$map__GT_ResponseFormat(G__31325){
return (new ajax.core.ResponseFormat(new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(G__31325),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(G__31325),new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(G__31325),null,cljs.core.dissoc.call(null,G__31325,new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634)),null));
});

ajax.core.params_to_str_alt = (function ajax$core$params_to_str_alt(params){
if(cljs.core.truth_(params)){
return goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js.call(null,params)))).toString();
} else {
return null;
}
});
ajax.core.vec_param_to_str = (function ajax$core$vec_param_to_str(var_args){
var args31345 = [];
var len__27082__auto___31348 = arguments.length;
var i__27083__auto___31349 = (0);
while(true){
if((i__27083__auto___31349 < len__27082__auto___31348)){
args31345.push((arguments[i__27083__auto___31349]));

var G__31350 = (i__27083__auto___31349 + (1));
i__27083__auto___31349 = G__31350;
continue;
} else {
}
break;
}

var G__31347 = args31345.length;
switch (G__31347) {
case 3:
return ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31345.length)].join('')));

}
});

ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$3 = (function (prefix,key,value){
return ajax.core.param_to_str.call(null,prefix,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null));
});

ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$2 = (function (prefix,key){
return (function (value){
return ajax.core.param_to_str.call(null,prefix,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null));
});
});

ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (key,value){
return ajax.core.param_to_str.call(null,prefix,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null));
});
});

ajax.core.vec_param_to_str.cljs$lang$maxFixedArity = 3;

ajax.core.param_to_str = (function ajax$core$param_to_str(var_args){
var args31352 = [];
var len__27082__auto___31363 = arguments.length;
var i__27083__auto___31364 = (0);
while(true){
if((i__27083__auto___31364 < len__27082__auto___31363)){
args31352.push((arguments[i__27083__auto___31364]));

var G__31365 = (i__27083__auto___31364 + (1));
i__27083__auto___31364 = G__31365;
continue;
} else {
}
break;
}

var G__31354 = args31352.length;
switch (G__31354) {
case 2:
return ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31352.length)].join('')));

}
});

ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2 = (function (prefix,p__31355){
var vec__31356 = p__31355;
var key = cljs.core.nth.call(null,vec__31356,(0),null);
var value = cljs.core.nth.call(null,vec__31356,(1),null);
var k1 = (((key instanceof cljs.core.Keyword))?cljs.core.name.call(null,key):key);
var new_key = (cljs.core.truth_(prefix)?[cljs.core.str(prefix),cljs.core.str("["),cljs.core.str(k1),cljs.core.str("]")].join(''):k1);
if(typeof value === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);
} else {
if(cljs.core.map_QMARK_.call(null,value)){
return cljs.core.mapcat.call(null,ajax.core.param_to_str.call(null,new_key),cljs.core.seq.call(null,value));
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map_indexed.call(null,ajax.core.vec_param_to_str.call(null,new_key),cljs.core.seq.call(null,value)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);

}
}
}
});

ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (p__31359){
var vec__31360 = p__31359;
var key = cljs.core.nth.call(null,vec__31360,(0),null);
var value = cljs.core.nth.call(null,vec__31360,(1),null);
var k1 = (((key instanceof cljs.core.Keyword))?cljs.core.name.call(null,key):key);
var new_key = (cljs.core.truth_(prefix)?[cljs.core.str(prefix),cljs.core.str("["),cljs.core.str(k1),cljs.core.str("]")].join(''):k1);
if(typeof value === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);
} else {
if(cljs.core.map_QMARK_.call(null,value)){
return cljs.core.mapcat.call(null,ajax.core.param_to_str.call(null,new_key),cljs.core.seq.call(null,value));
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map_indexed.call(null,ajax.core.vec_param_to_str.call(null,new_key),cljs.core.seq.call(null,value)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);

}
}
}
});
});

ajax.core.param_to_str.cljs$lang$maxFixedArity = 2;

ajax.core.to_utf8_writer = (function ajax$core$to_utf8_writer(to_str){
return to_str;
});
ajax.core.params_to_str = (function ajax$core$params_to_str(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__31371){
var vec__31372 = p__31371;
var k = cljs.core.nth.call(null,vec__31372,(0),null);
var v = cljs.core.nth.call(null,vec__31372,(1),null);
return [cljs.core.str(k),cljs.core.str("="),cljs.core.str(v)].join('');
}),cljs.core.mapcat.call(null,ajax.core.param_to_str.call(null,null),cljs.core.seq.call(null,params))));
});
ajax.core.uri_with_params = (function ajax$core$uri_with_params(var_args){
var args31375 = [];
var len__27082__auto___31378 = arguments.length;
var i__27083__auto___31379 = (0);
while(true){
if((i__27083__auto___31379 < len__27082__auto___31378)){
args31375.push((arguments[i__27083__auto___31379]));

var G__31380 = (i__27083__auto___31379 + (1));
i__27083__auto___31379 = G__31380;
continue;
} else {
}
break;
}

var G__31377 = args31375.length;
switch (G__31377) {
case 3:
return ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31375.length)].join('')));

}
});

ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$3 = (function (params,params_to_str,uri){
if(cljs.core.truth_(params)){
return [cljs.core.str(uri),cljs.core.str((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str(params_to_str.call(null,params))].join('');
} else {
return uri;
}
});

ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$2 = (function (params,params_to_str){
return (function (uri){
if(cljs.core.truth_(params)){
return [cljs.core.str(uri),cljs.core.str((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str(params_to_str.call(null,params))].join('');
} else {
return uri;
}
});
});

ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$1 = (function (params){
return (function (params_to_str,uri){
if(cljs.core.truth_(params)){
return [cljs.core.str(uri),cljs.core.str((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str(params_to_str.call(null,params))].join('');
} else {
return uri;
}
});
});

ajax.core.uri_with_params.cljs$lang$maxFixedArity = 3;

ajax.core.get_request_format = (function ajax$core$get_request_format(format){
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.ifn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),format,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"text/plain"], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.ProcessGet = (function (params_to_str,__meta,__extmap,__hash){
this.params_to_str = params_to_str;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__26596__auto__,k__26597__auto__){
var self__ = this;
var this__26596__auto____$1 = this;
return cljs.core._lookup.call(null,this__26596__auto____$1,k__26597__auto__,null);
});

ajax.core.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__26598__auto__,k31383,else__26599__auto__){
var self__ = this;
var this__26598__auto____$1 = this;
var G__31385 = (((k31383 instanceof cljs.core.Keyword))?k31383.fqn:null);
switch (G__31385) {
case "params-to-str":
return self__.params_to_str;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k31383,else__26599__auto__);

}
});

ajax.core.ProcessGet.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.core.ProcessGet.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__31386){
var self__ = this;
var map__31387 = p__31386;
var map__31387__$1 = ((((!((map__31387 == null)))?((((map__31387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31387.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31387):map__31387);
var request = map__31387__$1;
var method = cljs.core.get.call(null,map__31387__$1,new cljs.core.Keyword(null,"method","method",55703592));
var ___$1 = this;
if(cljs.core._EQ_.call(null,method,"GET")){
return cljs.core.reduced.call(null,cljs.core.update.call(null,request,new cljs.core.Keyword(null,"uri","uri",-774711847),ajax.core.uri_with_params.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(request),self__.params_to_str)));
} else {
return request;
}
});

ajax.core.ProcessGet.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.core.ProcessGet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__26610__auto__,writer__26611__auto__,opts__26612__auto__){
var self__ = this;
var this__26610__auto____$1 = this;
var pr_pair__26613__auto__ = ((function (this__26610__auto____$1){
return (function (keyval__26614__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__26611__auto__,cljs.core.pr_writer,""," ","",opts__26612__auto__,keyval__26614__auto__);
});})(this__26610__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__26611__auto__,pr_pair__26613__auto__,"#ajax.core.ProcessGet{",", ","}",opts__26612__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params-to-str","params-to-str",-934869108),self__.params_to_str],null))], null),self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

ajax.core.ProcessGet.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31382){
var self__ = this;
var G__31382__$1 = this;
return (new cljs.core.RecordIter((0),G__31382__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params-to-str","params-to-str",-934869108)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.core.ProcessGet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__26594__auto__){
var self__ = this;
var this__26594__auto____$1 = this;
return self__.__meta;
});

ajax.core.ProcessGet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__26590__auto__){
var self__ = this;
var this__26590__auto____$1 = this;
return (new ajax.core.ProcessGet(self__.params_to_str,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.ProcessGet.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__26600__auto__){
var self__ = this;
var this__26600__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__26591__auto__){
var self__ = this;
var this__26591__auto____$1 = this;
var h__26409__auto__ = self__.__hash;
if(!((h__26409__auto__ == null))){
return h__26409__auto__;
} else {
var h__26409__auto____$1 = cljs.core.hash_imap.call(null,this__26591__auto____$1);
self__.__hash = h__26409__auto____$1;

return h__26409__auto____$1;
}
});

ajax.core.ProcessGet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__26592__auto__,other__26593__auto__){
var self__ = this;
var this__26592__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25962__auto__ = other__26593__auto__;
if(cljs.core.truth_(and__25962__auto__)){
var and__25962__auto____$1 = (this__26592__auto____$1.constructor === other__26593__auto__.constructor);
if(and__25962__auto____$1){
return cljs.core.equiv_map.call(null,this__26592__auto____$1,other__26593__auto__);
} else {
return and__25962__auto____$1;
}
} else {
return and__25962__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.ProcessGet.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__26605__auto__,k__26606__auto__){
var self__ = this;
var this__26605__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params-to-str","params-to-str",-934869108),null], null), null),k__26606__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__26605__auto____$1),self__.__meta),k__26606__auto__);
} else {
return (new ajax.core.ProcessGet(self__.params_to_str,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__26606__auto__)),null));
}
});

ajax.core.ProcessGet.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__26603__auto__,k__26604__auto__,G__31382){
var self__ = this;
var this__26603__auto____$1 = this;
var pred__31389 = cljs.core.keyword_identical_QMARK_;
var expr__31390 = k__26604__auto__;
if(cljs.core.truth_(pred__31389.call(null,new cljs.core.Keyword(null,"params-to-str","params-to-str",-934869108),expr__31390))){
return (new ajax.core.ProcessGet(G__31382,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.core.ProcessGet(self__.params_to_str,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__26604__auto__,G__31382),null));
}
});

ajax.core.ProcessGet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__26608__auto__){
var self__ = this;
var this__26608__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params-to-str","params-to-str",-934869108),self__.params_to_str],null))], null),self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__26595__auto__,G__31382){
var self__ = this;
var this__26595__auto____$1 = this;
return (new ajax.core.ProcessGet(self__.params_to_str,G__31382,self__.__extmap,self__.__hash));
});

ajax.core.ProcessGet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__26601__auto__,entry__26602__auto__){
var self__ = this;
var this__26601__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__26602__auto__)){
return cljs.core._assoc.call(null,this__26601__auto____$1,cljs.core._nth.call(null,entry__26602__auto__,(0)),cljs.core._nth.call(null,entry__26602__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__26601__auto____$1,entry__26602__auto__);
}
});

ajax.core.ProcessGet.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params-to-str","params-to-str",705662419,null)], null);
});

ajax.core.ProcessGet.cljs$lang$type = true;

ajax.core.ProcessGet.cljs$lang$ctorPrSeq = (function (this__26630__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/ProcessGet");
});

ajax.core.ProcessGet.cljs$lang$ctorPrWriter = (function (this__26630__auto__,writer__26631__auto__){
return cljs.core._write.call(null,writer__26631__auto__,"ajax.core/ProcessGet");
});

ajax.core.__GT_ProcessGet = (function ajax$core$__GT_ProcessGet(params_to_str){
return (new ajax.core.ProcessGet(params_to_str,null,null,null));
});

ajax.core.map__GT_ProcessGet = (function ajax$core$map__GT_ProcessGet(G__31384){
return (new ajax.core.ProcessGet(new cljs.core.Keyword(null,"params-to-str","params-to-str",-934869108).cljs$core$IFn$_invoke$arity$1(G__31384),null,cljs.core.dissoc.call(null,G__31384,new cljs.core.Keyword(null,"params-to-str","params-to-str",-934869108)),null));
});

ajax.core.throw_error = (function ajax$core$throw_error(args){
throw (new Error([cljs.core.str(args)].join('')));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.DirectSubmission = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__26596__auto__,k__26597__auto__){
var self__ = this;
var this__26596__auto____$1 = this;
return cljs.core._lookup.call(null,this__26596__auto____$1,k__26597__auto__,null);
});

ajax.core.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__26598__auto__,k31394,else__26599__auto__){
var self__ = this;
var this__26598__auto____$1 = this;
var G__31396 = k31394;
switch (G__31396) {
default:
return cljs.core.get.call(null,self__.__extmap,k31394,else__26599__auto__);

}
});

ajax.core.DirectSubmission.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.core.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__31397){
var self__ = this;
var map__31398 = p__31397;
var map__31398__$1 = ((((!((map__31398 == null)))?((((map__31398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31398.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31398):map__31398);
var request = map__31398__$1;
var body = cljs.core.get.call(null,map__31398__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var params = cljs.core.get.call(null,map__31398__$1,new cljs.core.Keyword(null,"params","params",710516235));
var ___$1 = this;
if((body == null)){
return request;
} else {
return cljs.core.reduced.call(null,request);
}
});

ajax.core.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.core.DirectSubmission.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__26610__auto__,writer__26611__auto__,opts__26612__auto__){
var self__ = this;
var this__26610__auto____$1 = this;
var pr_pair__26613__auto__ = ((function (this__26610__auto____$1){
return (function (keyval__26614__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__26611__auto__,cljs.core.pr_writer,""," ","",opts__26612__auto__,keyval__26614__auto__);
});})(this__26610__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__26611__auto__,pr_pair__26613__auto__,"#ajax.core.DirectSubmission{",", ","}",opts__26612__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

ajax.core.DirectSubmission.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31393){
var self__ = this;
var G__31393__$1 = this;
return (new cljs.core.RecordIter((0),G__31393__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.core.DirectSubmission.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__26594__auto__){
var self__ = this;
var this__26594__auto____$1 = this;
return self__.__meta;
});

ajax.core.DirectSubmission.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__26590__auto__){
var self__ = this;
var this__26590__auto____$1 = this;
return (new ajax.core.DirectSubmission(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.DirectSubmission.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__26600__auto__){
var self__ = this;
var this__26600__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__26591__auto__){
var self__ = this;
var this__26591__auto____$1 = this;
var h__26409__auto__ = self__.__hash;
if(!((h__26409__auto__ == null))){
return h__26409__auto__;
} else {
var h__26409__auto____$1 = cljs.core.hash_imap.call(null,this__26591__auto____$1);
self__.__hash = h__26409__auto____$1;

return h__26409__auto____$1;
}
});

ajax.core.DirectSubmission.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__26592__auto__,other__26593__auto__){
var self__ = this;
var this__26592__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25962__auto__ = other__26593__auto__;
if(cljs.core.truth_(and__25962__auto__)){
var and__25962__auto____$1 = (this__26592__auto____$1.constructor === other__26593__auto__.constructor);
if(and__25962__auto____$1){
return cljs.core.equiv_map.call(null,this__26592__auto____$1,other__26593__auto__);
} else {
return and__25962__auto____$1;
}
} else {
return and__25962__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.DirectSubmission.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__26605__auto__,k__26606__auto__){
var self__ = this;
var this__26605__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__26606__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__26605__auto____$1),self__.__meta),k__26606__auto__);
} else {
return (new ajax.core.DirectSubmission(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__26606__auto__)),null));
}
});

ajax.core.DirectSubmission.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__26603__auto__,k__26604__auto__,G__31393){
var self__ = this;
var this__26603__auto____$1 = this;
var pred__31400 = cljs.core.keyword_identical_QMARK_;
var expr__31401 = k__26604__auto__;
return (new ajax.core.DirectSubmission(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__26604__auto__,G__31393),null));
});

ajax.core.DirectSubmission.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__26608__auto__){
var self__ = this;
var this__26608__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__26595__auto__,G__31393){
var self__ = this;
var this__26595__auto____$1 = this;
return (new ajax.core.DirectSubmission(G__31393,self__.__extmap,self__.__hash));
});

ajax.core.DirectSubmission.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__26601__auto__,entry__26602__auto__){
var self__ = this;
var this__26601__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__26602__auto__)){
return cljs.core._assoc.call(null,this__26601__auto____$1,cljs.core._nth.call(null,entry__26602__auto__,(0)),cljs.core._nth.call(null,entry__26602__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__26601__auto____$1,entry__26602__auto__);
}
});

ajax.core.DirectSubmission.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.core.DirectSubmission.cljs$lang$type = true;

ajax.core.DirectSubmission.cljs$lang$ctorPrSeq = (function (this__26630__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/DirectSubmission");
});

ajax.core.DirectSubmission.cljs$lang$ctorPrWriter = (function (this__26630__auto__,writer__26631__auto__){
return cljs.core._write.call(null,writer__26631__auto__,"ajax.core/DirectSubmission");
});

ajax.core.__GT_DirectSubmission = (function ajax$core$__GT_DirectSubmission(){
return (new ajax.core.DirectSubmission(null,null,null));
});

ajax.core.map__GT_DirectSubmission = (function ajax$core$map__GT_DirectSubmission(G__31395){
return (new ajax.core.DirectSubmission(null,cljs.core.dissoc.call(null,G__31395),null));
});

ajax.core.apply_request_format = (function ajax$core$apply_request_format(write,params){
return write.call(null,params);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.ApplyRequestFormat = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__26596__auto__,k__26597__auto__){
var self__ = this;
var this__26596__auto____$1 = this;
return cljs.core._lookup.call(null,this__26596__auto____$1,k__26597__auto__,null);
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__26598__auto__,k31405,else__26599__auto__){
var self__ = this;
var this__26598__auto____$1 = this;
var G__31407 = k31405;
switch (G__31407) {
default:
return cljs.core.get.call(null,self__.__extmap,k31405,else__26599__auto__);

}
});

ajax.core.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.core.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__31408){
var self__ = this;
var map__31409 = p__31408;
var map__31409__$1 = ((((!((map__31409 == null)))?((((map__31409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31409.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31409):map__31409);
var request = map__31409__$1;
var uri = cljs.core.get.call(null,map__31409__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__31409__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__31409__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var params = cljs.core.get.call(null,map__31409__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__31409__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var ___$1 = this;
var map__31411 = ajax.core.get_request_format.call(null,format);
var map__31411__$1 = ((((!((map__31411 == null)))?((((map__31411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31411.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31411):map__31411);
var write = cljs.core.get.call(null,map__31411__$1,new cljs.core.Keyword(null,"write","write",-1857649168));
var content_type = cljs.core.get.call(null,map__31411__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var body = ((!((write == null)))?ajax.core.apply_request_format.call(null,write,params):ajax.core.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized request format: ",format], null)));
var headers__$1 = (function (){var or__25974__auto__ = headers;
if(cljs.core.truth_(or__25974__auto__)){
return or__25974__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"body","body",-2049205669),body,new cljs.core.Keyword(null,"headers","headers",-835030129),(cljs.core.truth_(content_type)?cljs.core.assoc.call(null,headers__$1,"Content-Type",ajax.core.content_type_to_request_header.call(null,content_type)):headers__$1));
});

ajax.core.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,xhrio){
var self__ = this;
var ___$1 = this;
return xhrio;
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__26610__auto__,writer__26611__auto__,opts__26612__auto__){
var self__ = this;
var this__26610__auto____$1 = this;
var pr_pair__26613__auto__ = ((function (this__26610__auto____$1){
return (function (keyval__26614__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__26611__auto__,cljs.core.pr_writer,""," ","",opts__26612__auto__,keyval__26614__auto__);
});})(this__26610__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__26611__auto__,pr_pair__26613__auto__,"#ajax.core.ApplyRequestFormat{",", ","}",opts__26612__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

ajax.core.ApplyRequestFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31404){
var self__ = this;
var G__31404__$1 = this;
return (new cljs.core.RecordIter((0),G__31404__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__26594__auto__){
var self__ = this;
var this__26594__auto____$1 = this;
return self__.__meta;
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__26590__auto__){
var self__ = this;
var this__26590__auto____$1 = this;
return (new ajax.core.ApplyRequestFormat(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__26600__auto__){
var self__ = this;
var this__26600__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__26591__auto__){
var self__ = this;
var this__26591__auto____$1 = this;
var h__26409__auto__ = self__.__hash;
if(!((h__26409__auto__ == null))){
return h__26409__auto__;
} else {
var h__26409__auto____$1 = cljs.core.hash_imap.call(null,this__26591__auto____$1);
self__.__hash = h__26409__auto____$1;

return h__26409__auto____$1;
}
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__26592__auto__,other__26593__auto__){
var self__ = this;
var this__26592__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25962__auto__ = other__26593__auto__;
if(cljs.core.truth_(and__25962__auto__)){
var and__25962__auto____$1 = (this__26592__auto____$1.constructor === other__26593__auto__.constructor);
if(and__25962__auto____$1){
return cljs.core.equiv_map.call(null,this__26592__auto____$1,other__26593__auto__);
} else {
return and__25962__auto____$1;
}
} else {
return and__25962__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__26605__auto__,k__26606__auto__){
var self__ = this;
var this__26605__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__26606__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__26605__auto____$1),self__.__meta),k__26606__auto__);
} else {
return (new ajax.core.ApplyRequestFormat(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__26606__auto__)),null));
}
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__26603__auto__,k__26604__auto__,G__31404){
var self__ = this;
var this__26603__auto____$1 = this;
var pred__31413 = cljs.core.keyword_identical_QMARK_;
var expr__31414 = k__26604__auto__;
return (new ajax.core.ApplyRequestFormat(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__26604__auto__,G__31404),null));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__26608__auto__){
var self__ = this;
var this__26608__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__26595__auto__,G__31404){
var self__ = this;
var this__26595__auto____$1 = this;
return (new ajax.core.ApplyRequestFormat(G__31404,self__.__extmap,self__.__hash));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__26601__auto__,entry__26602__auto__){
var self__ = this;
var this__26601__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__26602__auto__)){
return cljs.core._assoc.call(null,this__26601__auto____$1,cljs.core._nth.call(null,entry__26602__auto__,(0)),cljs.core._nth.call(null,entry__26602__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__26601__auto____$1,entry__26602__auto__);
}
});

ajax.core.ApplyRequestFormat.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.core.ApplyRequestFormat.cljs$lang$type = true;

ajax.core.ApplyRequestFormat.cljs$lang$ctorPrSeq = (function (this__26630__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/ApplyRequestFormat");
});

ajax.core.ApplyRequestFormat.cljs$lang$ctorPrWriter = (function (this__26630__auto__,writer__26631__auto__){
return cljs.core._write.call(null,writer__26631__auto__,"ajax.core/ApplyRequestFormat");
});

ajax.core.__GT_ApplyRequestFormat = (function ajax$core$__GT_ApplyRequestFormat(){
return (new ajax.core.ApplyRequestFormat(null,null,null));
});

ajax.core.map__GT_ApplyRequestFormat = (function ajax$core$map__GT_ApplyRequestFormat(G__31406){
return (new ajax.core.ApplyRequestFormat(null,cljs.core.dissoc.call(null,G__31406),null));
});

ajax.core.transit_type = (function ajax$core$transit_type(p__31417){
var map__31420 = p__31417;
var map__31420__$1 = ((((!((map__31420 == null)))?((((map__31420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31420.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31420):map__31420);
var type = cljs.core.get.call(null,map__31420__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var or__25974__auto__ = type;
if(cljs.core.truth_(or__25974__auto__)){
return or__25974__auto__;
} else {
return new cljs.core.Keyword(null,"json","json",1279968570);
}
});
ajax.core.transit_write_fn = (function ajax$core$transit_write_fn(type,request){
var writer = (function (){var or__25974__auto__ = new cljs.core.Keyword(null,"writer","writer",-277568236).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__25974__auto__)){
return or__25974__auto__;
} else {
return cognitect.transit.writer.call(null,type,request);
}
})();
return ((function (writer){
return (function ajax$core$transit_write_fn_$_transit_write_params(params){
return cognitect.transit.write.call(null,writer,params);
});
;})(writer))
});
ajax.core.transit_request_format = (function ajax$core$transit_request_format(var_args){
var args31422 = [];
var len__27082__auto___31425 = arguments.length;
var i__27083__auto___31426 = (0);
while(true){
if((i__27083__auto___31426 < len__27082__auto___31425)){
args31422.push((arguments[i__27083__auto___31426]));

var G__31427 = (i__27083__auto___31426 + (1));
i__27083__auto___31426 = G__31427;
continue;
} else {
}
break;
}

var G__31424 = args31422.length;
switch (G__31424) {
case 0:
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31422.length)].join('')));

}
});

ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.transit_request_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1 = (function (request){
var type = ajax.core.transit_type.call(null,request);
var mime_type = ((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"json","json",1279968570)))?"json":"msgpack");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.transit_write_fn.call(null,type,request),new cljs.core.Keyword(null,"content-type","content-type",-508222634),[cljs.core.str("application/transit+"),cljs.core.str(mime_type)].join('')], null);
});

ajax.core.transit_request_format.cljs$lang$maxFixedArity = 1;

ajax.core.transit_read_fn = (function ajax$core$transit_read_fn(request){
var reader = (function (){var or__25974__auto__ = new cljs.core.Keyword(null,"reader","reader",169660853).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__25974__auto__)){
return or__25974__auto__;
} else {
return cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570),request);
}
})();
return ((function (reader){
return (function ajax$core$transit_read_fn_$_transit_read_response(response){
var data = cognitect.transit.read.call(null,reader,ajax.protocols._body.call(null,response));
if(cljs.core.truth_(new cljs.core.Keyword(null,"raw","raw",1604651272).cljs$core$IFn$_invoke$arity$1(request))){
return data;
} else {
return cljs.core.js__GT_clj.call(null,data);
}
});
;})(reader))
});
ajax.core.transit_response_format = (function ajax$core$transit_response_format(var_args){
var args31429 = [];
var len__27082__auto___31432 = arguments.length;
var i__27083__auto___31433 = (0);
while(true){
if((i__27083__auto___31433 < len__27082__auto___31432)){
args31429.push((arguments[i__27083__auto___31433]));

var G__31434 = (i__27083__auto___31433 + (1));
i__27083__auto___31433 = G__31434;
continue;
} else {
}
break;
}

var G__31431 = args31429.length;
switch (G__31431) {
case 0:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31429.length)].join('')));

}
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.transit_response_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1 = (function (request){
return ajax.core.transit_response_format.call(null,ajax.core.transit_type.call(null,request),request);
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$2 = (function (type,request){
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.transit_read_fn.call(null,request),new cljs.core.Keyword(null,"description","description",-1428560544),"Transit",new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+json"], null)], null));
});

ajax.core.transit_response_format.cljs$lang$maxFixedArity = 2;

ajax.core.url_request_format = (function ajax$core$url_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.to_utf8_writer.call(null,ajax.core.params_to_str),new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/x-www-form-urlencoded; charset=utf-8"], null);
});
ajax.core.raw_response_format = (function ajax$core$raw_response_format(var_args){
var args31436 = [];
var len__27082__auto___31439 = arguments.length;
var i__27083__auto___31440 = (0);
while(true){
if((i__27083__auto___31440 < len__27082__auto___31439)){
args31436.push((arguments[i__27083__auto___31440]));

var G__31441 = (i__27083__auto___31440 + (1));
i__27083__auto___31440 = G__31441;
continue;
} else {
}
break;
}

var G__31438 = args31436.length;
switch (G__31438) {
case 0:
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31436.length)].join('')));

}
});

ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.protocols._body,new cljs.core.Keyword(null,"description","description",-1428560544),"raw text",new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null)], null));
});

ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$1 = (function (_){
return ajax.core.raw_response_format.call(null);
});

ajax.core.raw_response_format.cljs$lang$maxFixedArity = 1;

ajax.core.text_request_format = (function ajax$core$text_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.to_utf8_writer.call(null,cljs.core.identity),new cljs.core.Keyword(null,"content-type","content-type",-508222634),"text/plain; charset=utf-8"], null);
});
ajax.core.text_response_format = ajax.core.raw_response_format;
ajax.core.write_json = (function ajax$core$write_json(data){
return (new goog.json.Serializer()).serialize(cljs.core.clj__GT_js.call(null,data));
});
ajax.core.json_request_format = (function ajax$core$json_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.write_json,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json"], null);
});
ajax.core.strip_prefix = (function ajax$core$strip_prefix(prefix,text){
if(cljs.core.truth_((function (){var and__25962__auto__ = prefix;
if(cljs.core.truth_(and__25962__auto__)){
return cljs.core._EQ_.call(null,(0),text.indexOf(prefix));
} else {
return and__25962__auto__;
}
})())){
return text.substring(prefix.length);
} else {
return text;
}
});
ajax.core.json_read = (function ajax$core$json_read(var_args){
var args31443 = [];
var len__27082__auto___31446 = arguments.length;
var i__27083__auto___31447 = (0);
while(true){
if((i__27083__auto___31447 < len__27082__auto___31446)){
args31443.push((arguments[i__27083__auto___31447]));

var G__31448 = (i__27083__auto___31447 + (1));
i__27083__auto___31447 = G__31448;
continue;
} else {
}
break;
}

var G__31445 = args31443.length;
switch (G__31445) {
case 4:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31443.length)].join('')));

}
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$4 = (function (prefix,raw,keywords_QMARK_,xhrio){
var text = ajax.core.strip_prefix.call(null,prefix,ajax.protocols._body.call(null,xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$3 = (function (prefix,raw,keywords_QMARK_){
return (function (xhrio){
var text = ajax.core.strip_prefix.call(null,prefix,ajax.protocols._body.call(null,xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$2 = (function (prefix,raw){
return (function (keywords_QMARK_,xhrio){
var text = ajax.core.strip_prefix.call(null,prefix,ajax.protocols._body.call(null,xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (raw,keywords_QMARK_,xhrio){
var text = ajax.core.strip_prefix.call(null,prefix,ajax.protocols._body.call(null,xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});

ajax.core.json_read.cljs$lang$maxFixedArity = 4;

/**
 * Returns a JSON response format.  Options include
 * :keywords? Returns the keys as keywords
 * :prefix A prefix that needs to be stripped off.  This is to
 * combat JSON hijacking.  If you're using JSON with GET request,
 * you should think about using this.
 * http://stackoverflow.com/questions/2669690/why-does-google-prepend-while1-to-their-json-responses
 * http://haacked.com/archive/2009/06/24/json-hijacking.aspx
 */
ajax.core.json_response_format = (function ajax$core$json_response_format(var_args){
var args31450 = [];
var len__27082__auto___31456 = arguments.length;
var i__27083__auto___31457 = (0);
while(true){
if((i__27083__auto___31457 < len__27082__auto___31456)){
args31450.push((arguments[i__27083__auto___31457]));

var G__31458 = (i__27083__auto___31457 + (1));
i__27083__auto___31457 = G__31458;
continue;
} else {
}
break;
}

var G__31452 = args31450.length;
switch (G__31452) {
case 0:
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31450.length)].join('')));

}
});

ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.json_response_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 = (function (p__31453){
var map__31454 = p__31453;
var map__31454__$1 = ((((!((map__31454 == null)))?((((map__31454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31454.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31454):map__31454);
var prefix = cljs.core.get.call(null,map__31454__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465));
var keywords_QMARK_ = cljs.core.get.call(null,map__31454__$1,new cljs.core.Keyword(null,"keywords?","keywords?",764949733));
var raw = cljs.core.get.call(null,map__31454__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.json_read.call(null,prefix,raw,keywords_QMARK_),new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("JSON"),cljs.core.str((cljs.core.truth_(prefix)?[cljs.core.str(" prefix '"),cljs.core.str(prefix),cljs.core.str("'")].join(''):null)),cljs.core.str((cljs.core.truth_(keywords_QMARK_)?" keywordize":null))].join(''),new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/json"], null)], null));
});

ajax.core.json_response_format.cljs$lang$maxFixedArity = 1;

ajax.core.default_formats = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+json",ajax.core.transit_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+transit",ajax.core.transit_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/json",ajax.core.json_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/plain",ajax.core.text_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/html",ajax.core.text_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*",ajax.core.raw_response_format], null)], null);
ajax.core.get_format = (function ajax$core$get_format(var_args){
var args31460 = [];
var len__27082__auto___31463 = arguments.length;
var i__27083__auto___31464 = (0);
while(true){
if((i__27083__auto___31464 < len__27082__auto___31463)){
args31460.push((arguments[i__27083__auto___31464]));

var G__31465 = (i__27083__auto___31464 + (1));
i__27083__auto___31464 = G__31465;
continue;
} else {
}
break;
}

var G__31462 = args31460.length;
switch (G__31462) {
case 2:
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31460.length)].join('')));

}
});

ajax.core.get_format.cljs$core$IFn$_invoke$arity$2 = (function (request,format_entry){
if(((format_entry == null)) || (cljs.core.map_QMARK_.call(null,format_entry))){
return format_entry;
} else {
if(cljs.core.vector_QMARK_.call(null,format_entry)){
return ajax.core.get_format.call(null,request,cljs.core.second.call(null,format_entry));
} else {
return format_entry.call(null,request);

}
}
});

ajax.core.get_format.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (format_entry){
if(((format_entry == null)) || (cljs.core.map_QMARK_.call(null,format_entry))){
return format_entry;
} else {
if(cljs.core.vector_QMARK_.call(null,format_entry)){
return ajax.core.get_format.call(null,request,cljs.core.second.call(null,format_entry));
} else {
return format_entry.call(null,request);

}
}
});
});

ajax.core.get_format.cljs$lang$maxFixedArity = 2;

ajax.core.get_accept_entries = (function ajax$core$get_accept_entries(var_args){
var args31467 = [];
var len__27082__auto___31470 = arguments.length;
var i__27083__auto___31471 = (0);
while(true){
if((i__27083__auto___31471 < len__27082__auto___31470)){
args31467.push((arguments[i__27083__auto___31471]));

var G__31472 = (i__27083__auto___31471 + (1));
i__27083__auto___31471 = G__31472;
continue;
} else {
}
break;
}

var G__31469 = args31467.length;
switch (G__31469) {
case 2:
return ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31467.length)].join('')));

}
});

ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$2 = (function (request,format_entry){
var fe = ((cljs.core.vector_QMARK_.call(null,format_entry))?cljs.core.first.call(null,format_entry):new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.call(null,request,format_entry)));
if((fe == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null);
} else {
if(typeof fe === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fe], null);
} else {
return fe;

}
}
});

ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (format_entry){
var fe = ((cljs.core.vector_QMARK_.call(null,format_entry))?cljs.core.first.call(null,format_entry):new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.call(null,request,format_entry)));
if((fe == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null);
} else {
if(typeof fe === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fe], null);
} else {
return fe;

}
}
});
});

ajax.core.get_accept_entries.cljs$lang$maxFixedArity = 2;

ajax.core.content_type_matches = (function ajax$core$content_type_matches(var_args){
var args31474 = [];
var len__27082__auto___31477 = arguments.length;
var i__27083__auto___31478 = (0);
while(true){
if((i__27083__auto___31478 < len__27082__auto___31477)){
args31474.push((arguments[i__27083__auto___31478]));

var G__31479 = (i__27083__auto___31478 + (1));
i__27083__auto___31478 = G__31479;
continue;
} else {
}
break;
}

var G__31476 = args31474.length;
switch (G__31476) {
case 2:
return ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31474.length)].join('')));

}
});

ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$2 = (function (content_type,accept){
return (cljs.core._EQ_.call(null,accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});

ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$1 = (function (content_type){
return (function (accept){
return (cljs.core._EQ_.call(null,accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});
});

ajax.core.content_type_matches.cljs$lang$maxFixedArity = 2;

ajax.core.detect_content_type = (function ajax$core$detect_content_type(var_args){
var args31481 = [];
var len__27082__auto___31484 = arguments.length;
var i__27083__auto___31485 = (0);
while(true){
if((i__27083__auto___31485 < len__27082__auto___31484)){
args31481.push((arguments[i__27083__auto___31485]));

var G__31486 = (i__27083__auto___31485 + (1));
i__27083__auto___31485 = G__31486;
continue;
} else {
}
break;
}

var G__31483 = args31481.length;
switch (G__31483) {
case 3:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31481.length)].join('')));

}
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$3 = (function (content_type,request,format_entry){
var accept = ajax.core.get_accept_entries.call(null,request,format_entry);
return cljs.core.some.call(null,ajax.core.content_type_matches.call(null,content_type),accept);
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$2 = (function (content_type,request){
return (function (format_entry){
var accept = ajax.core.get_accept_entries.call(null,request,format_entry);
return cljs.core.some.call(null,ajax.core.content_type_matches.call(null,content_type),accept);
});
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$1 = (function (content_type){
return (function (request,format_entry){
var accept = ajax.core.get_accept_entries.call(null,request,format_entry);
return cljs.core.some.call(null,ajax.core.content_type_matches.call(null,content_type),accept);
});
});

ajax.core.detect_content_type.cljs$lang$maxFixedArity = 3;

ajax.core.get_default_format = (function ajax$core$get_default_format(response,p__31488){
var map__31491 = p__31488;
var map__31491__$1 = ((((!((map__31491 == null)))?((((map__31491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31491.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31491):map__31491);
var request = map__31491__$1;
var response_format = cljs.core.get.call(null,map__31491__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var f = ajax.core.detect_content_type.call(null,ajax.core.get_content_type.call(null,response),request);
return ajax.core.get_format.call(null,request,cljs.core.first.call(null,cljs.core.filter.call(null,f,response_format)));
});
ajax.core.detect_response_format_read = (function ajax$core$detect_response_format_read(var_args){
var args31493 = [];
var len__27082__auto___31496 = arguments.length;
var i__27083__auto___31497 = (0);
while(true){
if((i__27083__auto___31497 < len__27082__auto___31496)){
args31493.push((arguments[i__27083__auto___31497]));

var G__31498 = (i__27083__auto___31497 + (1));
i__27083__auto___31497 = G__31498;
continue;
} else {
}
break;
}

var G__31495 = args31493.length;
switch (G__31495) {
case 2:
return ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31493.length)].join('')));

}
});

ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$2 = (function (request,response){
var format = ajax.core.get_default_format.call(null,response,request);
return new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(format).call(null,response);
});

ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (response){
var format = ajax.core.get_default_format.call(null,response,request);
return new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(format).call(null,response);
});
});

ajax.core.detect_response_format_read.cljs$lang$maxFixedArity = 2;

ajax.core.accept_header = (function ajax$core$accept_header(p__31500){
var map__31503 = p__31500;
var map__31503__$1 = ((((!((map__31503 == null)))?((((map__31503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31503.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31503):map__31503);
var request = map__31503__$1;
var response_format = cljs.core.get.call(null,map__31503__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
if(cljs.core.vector_QMARK_.call(null,response_format)){
return cljs.core.mapcat.call(null,ajax.core.get_accept_entries.call(null,request),response_format);
} else {
return ajax.core.get_accept_entries.call(null,request,response_format);
}
});
ajax.core.detect_response_format = (function ajax$core$detect_response_format(var_args){
var args31505 = [];
var len__27082__auto___31508 = arguments.length;
var i__27083__auto___31509 = (0);
while(true){
if((i__27083__auto___31509 < len__27082__auto___31508)){
args31505.push((arguments[i__27083__auto___31509]));

var G__31510 = (i__27083__auto___31509 + (1));
i__27083__auto___31509 = G__31510;
continue;
} else {
}
break;
}

var G__31507 = args31505.length;
switch (G__31507) {
case 0:
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31505.length)].join('')));

}
});

ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.detect_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.default_formats], null));
});

ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1 = (function (opts){
var accept = ajax.core.accept_header.call(null,opts);
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.detect_response_format_read.call(null,opts),new cljs.core.Keyword(null,"format","format",-1306924766),[cljs.core.str("(from "),cljs.core.str(accept),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"content-type","content-type",-508222634),accept], null));
});

ajax.core.detect_response_format.cljs$lang$maxFixedArity = 1;

ajax.core.get_response_format = (function ajax$core$get_response_format(p__31512){
var map__31515 = p__31512;
var map__31515__$1 = ((((!((map__31515 == null)))?((((map__31515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31515.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31515):map__31515);
var opts = map__31515__$1;
var response_format = cljs.core.get.call(null,map__31515__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
if((response_format instanceof ajax.core.ResponseFormat)){
return response_format;
} else {
if(cljs.core.vector_QMARK_.call(null,response_format)){
return ajax.core.detect_response_format.call(null,opts);
} else {
if(cljs.core.map_QMARK_.call(null,response_format)){
return ajax.core.map__GT_ResponseFormat.call(null,response_format);
} else {
if(cljs.core.ifn_QMARK_.call(null,response_format)){
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),response_format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom",new cljs.core.Keyword(null,"content-type","content-type",-508222634),"*/*"], null));
} else {
return ajax.core.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized response format: ",response_format], null));

}
}
}
}
});
ajax.core.normalize_method = (function ajax$core$normalize_method(method){
if((method instanceof cljs.core.Keyword)){
return clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
} else {
return method;
}
});
ajax.core.js_handler = (function ajax$core$js_handler(var_args){
var args31517 = [];
var len__27082__auto___31520 = arguments.length;
var i__27083__auto___31521 = (0);
while(true){
if((i__27083__auto___31521 < len__27082__auto___31520)){
args31517.push((arguments[i__27083__auto___31521]));

var G__31522 = (i__27083__auto___31521 + (1));
i__27083__auto___31521 = G__31522;
continue;
} else {
}
break;
}

var G__31519 = args31517.length;
switch (G__31519) {
case 3:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31517.length)].join('')));

}
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$3 = (function (handler,interceptors,response){
var process = (function ajax$core$process(response__$1,interceptor){
return ajax.protocols._process_response.call(null,interceptor,response__$1);
});
var processed = cljs.core.reduce.call(null,process,response,interceptors);
return handler.call(null,processed);
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2 = (function (handler,interceptors){
return (function (response){
var process = (function ajax$core$process(response__$1,interceptor){
return ajax.protocols._process_response.call(null,interceptor,response__$1);
});
var processed = cljs.core.reduce.call(null,process,response,interceptors);
return handler.call(null,processed);
});
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$1 = (function (handler){
return (function (interceptors,response){
var process = (function ajax$core$process(response__$1,interceptor){
return ajax.protocols._process_response.call(null,interceptor,response__$1);
});
var processed = cljs.core.reduce.call(null,process,response,interceptors);
return handler.call(null,processed);
});
});

ajax.core.js_handler.cljs$lang$maxFixedArity = 3;

ajax.core.base_handler = (function ajax$core$base_handler(interceptors,p__31524){
var map__31527 = p__31524;
var map__31527__$1 = ((((!((map__31527 == null)))?((((map__31527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31527.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31527):map__31527);
var handler = cljs.core.get.call(null,map__31527__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(cljs.core.truth_(handler)){
return ajax.core.js_handler.call(null,handler,interceptors);
} else {
return ajax.core.throw_error.call(null,"No ajax handler provided.");
}
});
ajax.core.request_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new ajax.core.ProcessGet(ajax.core.params_to_str,null,null,null)),(new ajax.core.DirectSubmission(null,null,null)),(new ajax.core.ApplyRequestFormat(null,null,null))], null);
ajax.core.default_interceptors = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
ajax.core.normalize_request = (function ajax$core$normalize_request(request){
var response_format = ajax.core.get_response_format.call(null,request);
return cljs.core.update.call(null,cljs.core.update.call(null,request,new cljs.core.Keyword(null,"method","method",55703592),ajax.core.normalize_method),new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),((function (response_format){
return (function (p1__31529_SHARP_){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [response_format], null),(function (){var or__25974__auto__ = p1__31529_SHARP_;
if(cljs.core.truth_(or__25974__auto__)){
return or__25974__auto__;
} else {
return cljs.core.deref.call(null,ajax.core.default_interceptors);
}
})(),ajax.core.request_interceptors);
});})(response_format))
);
});
ajax.core.new_default_api = (function ajax$core$new_default_api(){
return (new goog.net.XhrIo());
});
ajax.core.raw_ajax_request = (function ajax$core$raw_ajax_request(p__31530){
var map__31533 = p__31530;
var map__31533__$1 = ((((!((map__31533 == null)))?((((map__31533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31533.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31533):map__31533);
var request = map__31533__$1;
var interceptors = cljs.core.get.call(null,map__31533__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
var request__$1 = cljs.core.reduce.call(null,ajax.core.process_request,request,interceptors);
var handler = ajax.core.base_handler.call(null,cljs.core.reverse.call(null,interceptors),request__$1);
var api = (function (){var or__25974__auto__ = new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(request__$1);
if(cljs.core.truth_(or__25974__auto__)){
return or__25974__auto__;
} else {
return ajax.core.new_default_api.call(null);
}
})();
return ajax.protocols._js_ajax_request.call(null,api,request__$1,handler);
});
ajax.core.ajax_request = (function ajax$core$ajax_request(request){
return ajax.core.raw_ajax_request.call(null,ajax.core.normalize_request.call(null,request));
});
ajax.core.keyword_request_format = (function ajax$core$keyword_request_format(format,format_params){
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.fn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"write","write",-1857649168),format], null);
} else {
if((format == null)){
return ajax.core.transit_request_format.call(null,format_params);
} else {
var G__31536 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__31536) {
case "transit":
return ajax.core.transit_request_format.call(null,format_params);

break;
case "json":
return ajax.core.json_request_format.call(null);

break;
case "text":
return ajax.core.text_request_format.call(null);

break;
case "raw":
return ajax.core.url_request_format.call(null);

break;
case "url":
return ajax.core.url_request_format.call(null);

break;
default:
return null;

}

}
}
}
});
ajax.core.keyword_response_format_element = (function ajax$core$keyword_response_format_element(format,format_params){
if(cljs.core.vector_QMARK_.call(null,format)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,format),ajax.core.keyword_response_format_element.call(null,cljs.core.second.call(null,format),format_params)], null);
} else {
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.fn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom"], null);
} else {
if((format == null)){
return ajax.core.detect_response_format.call(null);
} else {
var G__31539 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__31539) {
case "transit":
return ajax.core.transit_response_format.call(null,format_params);

break;
case "json":
return ajax.core.json_response_format.call(null,format_params);

break;
case "text":
return ajax.core.text_response_format.call(null);

break;
case "raw":
return ajax.core.raw_response_format.call(null);

break;
case "detect":
return ajax.core.detect_response_format.call(null);

break;
default:
return null;

}

}
}
}
}
});
ajax.core.keyword_response_format = (function ajax$core$keyword_response_format(format,format_params){
if(cljs.core.vector_QMARK_.call(null,format)){
return cljs.core.apply.call(null,cljs.core.vector,cljs.core.map.call(null,(function (p1__31541_SHARP_){
return ajax.core.keyword_response_format_element.call(null,p1__31541_SHARP_,format_params);
}),format));
} else {
return ajax.core.keyword_response_format_element.call(null,format,format_params);
}
});
ajax.core.print_response = (function ajax$core$print_response(response){
return cljs.core.println.call(null,"CLJS-AJAX response:",response);
});
ajax.core.default_handler = cljs.core.atom.call(null,ajax.core.print_response);
ajax.core.print_error_response = (function ajax$core$print_error_response(response){
if(typeof console !== 'undefined'){
return console.error(response);
} else {
if(typeof window !== 'undefined'){
return window.alert([cljs.core.str(response)].join(''));
} else {
return cljs.core.println.call(null,"CLJS-AJAX ERROR:",response);

}
}
});
ajax.core.default_error_handler = cljs.core.atom.call(null,ajax.core.print_error_response);
ajax.core.transform_handler = (function ajax$core$transform_handler(p__31542){
var map__31552 = p__31542;
var map__31552__$1 = ((((!((map__31552 == null)))?((((map__31552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31552.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31552):map__31552);
var handler = cljs.core.get.call(null,map__31552__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var error_handler = cljs.core.get.call(null,map__31552__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var finally$ = cljs.core.get.call(null,map__31552__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var h = (function (){var or__25974__auto__ = handler;
if(cljs.core.truth_(or__25974__auto__)){
return or__25974__auto__;
} else {
return cljs.core.deref.call(null,ajax.core.default_handler);
}
})();
var e = (function (){var or__25974__auto__ = error_handler;
if(cljs.core.truth_(or__25974__auto__)){
return or__25974__auto__;
} else {
return cljs.core.deref.call(null,ajax.core.default_error_handler);
}
})();
return ((function (h,e,map__31552,map__31552__$1,handler,error_handler,finally$){
return (function ajax$core$transform_handler_$_easy_handler(p__31554){
var vec__31558 = p__31554;
var ok = cljs.core.nth.call(null,vec__31558,(0),null);
var result = cljs.core.nth.call(null,vec__31558,(1),null);
(cljs.core.truth_(ok)?h:e).call(null,result);

if(cljs.core.fn_QMARK_.call(null,finally$)){
return finally$.call(null);
} else {
return null;
}
});
;})(h,e,map__31552,map__31552__$1,handler,error_handler,finally$))
});
ajax.core.transform_opts = (function ajax$core$transform_opts(p__31561){
var map__31564 = p__31561;
var map__31564__$1 = ((((!((map__31564 == null)))?((((map__31564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31564.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31564):map__31564);
var opts = map__31564__$1;
var method = cljs.core.get.call(null,map__31564__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__31564__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var response_format = cljs.core.get.call(null,map__31564__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var params = cljs.core.get.call(null,map__31564__$1,new cljs.core.Keyword(null,"params","params",710516235));
var body = cljs.core.get.call(null,map__31564__$1,new cljs.core.Keyword(null,"body","body",-2049205669));

var needs_format = ((body == null)) && (cljs.core.not_EQ_.call(null,method,"GET"));
var rf = (cljs.core.truth_((function (){var or__25974__auto__ = format;
if(cljs.core.truth_(or__25974__auto__)){
return or__25974__auto__;
} else {
return needs_format;
}
})())?ajax.core.keyword_request_format.call(null,format,opts):null);
return cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"handler","handler",-195596612),ajax.core.transform_handler.call(null,opts),new cljs.core.Keyword(null,"format","format",-1306924766),rf,new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.keyword_response_format.call(null,response_format,opts));
});
ajax.core.easy_ajax_request = (function ajax$core$easy_ajax_request(uri,method,opts){
return ajax.core.ajax_request.call(null,ajax.core.transform_opts.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"uri","uri",-774711847),uri,new cljs.core.Keyword(null,"method","method",55703592),method)));
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.GET = (function ajax$core$GET(var_args){
var args__27089__auto__ = [];
var len__27082__auto___31568 = arguments.length;
var i__27083__auto___31569 = (0);
while(true){
if((i__27083__auto___31569 < len__27082__auto___31568)){
args__27089__auto__.push((arguments[i__27083__auto___31569]));

var G__31570 = (i__27083__auto___31569 + (1));
i__27083__auto___31569 = G__31570;
continue;
} else {
}
break;
}

var argseq__27090__auto__ = ((((1) < args__27089__auto__.length))?(new cljs.core.IndexedSeq(args__27089__auto__.slice((1)),(0),null)):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27090__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__27321__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"GET",(((f__27321__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__27321__auto__));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

ajax.core.GET.cljs$lang$applyTo = (function (seq31566){
var G__31567 = cljs.core.first.call(null,seq31566);
var seq31566__$1 = cljs.core.next.call(null,seq31566);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(G__31567,seq31566__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.HEAD = (function ajax$core$HEAD(var_args){
var args__27089__auto__ = [];
var len__27082__auto___31573 = arguments.length;
var i__27083__auto___31574 = (0);
while(true){
if((i__27083__auto___31574 < len__27082__auto___31573)){
args__27089__auto__.push((arguments[i__27083__auto___31574]));

var G__31575 = (i__27083__auto___31574 + (1));
i__27083__auto___31574 = G__31575;
continue;
} else {
}
break;
}

var argseq__27090__auto__ = ((((1) < args__27089__auto__.length))?(new cljs.core.IndexedSeq(args__27089__auto__.slice((1)),(0),null)):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27090__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__27321__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"HEAD",(((f__27321__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__27321__auto__));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

ajax.core.HEAD.cljs$lang$applyTo = (function (seq31571){
var G__31572 = cljs.core.first.call(null,seq31571);
var seq31571__$1 = cljs.core.next.call(null,seq31571);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic(G__31572,seq31571__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.POST = (function ajax$core$POST(var_args){
var args__27089__auto__ = [];
var len__27082__auto___31578 = arguments.length;
var i__27083__auto___31579 = (0);
while(true){
if((i__27083__auto___31579 < len__27082__auto___31578)){
args__27089__auto__.push((arguments[i__27083__auto___31579]));

var G__31580 = (i__27083__auto___31579 + (1));
i__27083__auto___31579 = G__31580;
continue;
} else {
}
break;
}

var argseq__27090__auto__ = ((((1) < args__27089__auto__.length))?(new cljs.core.IndexedSeq(args__27089__auto__.slice((1)),(0),null)):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27090__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__27321__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"POST",(((f__27321__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__27321__auto__));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

ajax.core.POST.cljs$lang$applyTo = (function (seq31576){
var G__31577 = cljs.core.first.call(null,seq31576);
var seq31576__$1 = cljs.core.next.call(null,seq31576);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(G__31577,seq31576__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PUT = (function ajax$core$PUT(var_args){
var args__27089__auto__ = [];
var len__27082__auto___31583 = arguments.length;
var i__27083__auto___31584 = (0);
while(true){
if((i__27083__auto___31584 < len__27082__auto___31583)){
args__27089__auto__.push((arguments[i__27083__auto___31584]));

var G__31585 = (i__27083__auto___31584 + (1));
i__27083__auto___31584 = G__31585;
continue;
} else {
}
break;
}

var argseq__27090__auto__ = ((((1) < args__27089__auto__.length))?(new cljs.core.IndexedSeq(args__27089__auto__.slice((1)),(0),null)):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27090__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__27321__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"PUT",(((f__27321__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__27321__auto__));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

ajax.core.PUT.cljs$lang$applyTo = (function (seq31581){
var G__31582 = cljs.core.first.call(null,seq31581);
var seq31581__$1 = cljs.core.next.call(null,seq31581);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(G__31582,seq31581__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.DELETE = (function ajax$core$DELETE(var_args){
var args__27089__auto__ = [];
var len__27082__auto___31588 = arguments.length;
var i__27083__auto___31589 = (0);
while(true){
if((i__27083__auto___31589 < len__27082__auto___31588)){
args__27089__auto__.push((arguments[i__27083__auto___31589]));

var G__31590 = (i__27083__auto___31589 + (1));
i__27083__auto___31589 = G__31590;
continue;
} else {
}
break;
}

var argseq__27090__auto__ = ((((1) < args__27089__auto__.length))?(new cljs.core.IndexedSeq(args__27089__auto__.slice((1)),(0),null)):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27090__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__27321__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"DELETE",(((f__27321__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__27321__auto__));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

ajax.core.DELETE.cljs$lang$applyTo = (function (seq31586){
var G__31587 = cljs.core.first.call(null,seq31586);
var seq31586__$1 = cljs.core.next.call(null,seq31586);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(G__31587,seq31586__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.OPTIONS = (function ajax$core$OPTIONS(var_args){
var args__27089__auto__ = [];
var len__27082__auto___31593 = arguments.length;
var i__27083__auto___31594 = (0);
while(true){
if((i__27083__auto___31594 < len__27082__auto___31593)){
args__27089__auto__.push((arguments[i__27083__auto___31594]));

var G__31595 = (i__27083__auto___31594 + (1));
i__27083__auto___31594 = G__31595;
continue;
} else {
}
break;
}

var argseq__27090__auto__ = ((((1) < args__27089__auto__.length))?(new cljs.core.IndexedSeq(args__27089__auto__.slice((1)),(0),null)):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27090__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__27321__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"OPTIONS",(((f__27321__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__27321__auto__));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq31591){
var G__31592 = cljs.core.first.call(null,seq31591);
var seq31591__$1 = cljs.core.next.call(null,seq31591);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic(G__31592,seq31591__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.TRACE = (function ajax$core$TRACE(var_args){
var args__27089__auto__ = [];
var len__27082__auto___31598 = arguments.length;
var i__27083__auto___31599 = (0);
while(true){
if((i__27083__auto___31599 < len__27082__auto___31598)){
args__27089__auto__.push((arguments[i__27083__auto___31599]));

var G__31600 = (i__27083__auto___31599 + (1));
i__27083__auto___31599 = G__31600;
continue;
} else {
}
break;
}

var argseq__27090__auto__ = ((((1) < args__27089__auto__.length))?(new cljs.core.IndexedSeq(args__27089__auto__.slice((1)),(0),null)):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27090__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__27321__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"TRACE",(((f__27321__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__27321__auto__));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

ajax.core.TRACE.cljs$lang$applyTo = (function (seq31596){
var G__31597 = cljs.core.first.call(null,seq31596);
var seq31596__$1 = cljs.core.next.call(null,seq31596);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic(G__31597,seq31596__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PATCH = (function ajax$core$PATCH(var_args){
var args__27089__auto__ = [];
var len__27082__auto___31603 = arguments.length;
var i__27083__auto___31604 = (0);
while(true){
if((i__27083__auto___31604 < len__27082__auto___31603)){
args__27089__auto__.push((arguments[i__27083__auto___31604]));

var G__31605 = (i__27083__auto___31604 + (1));
i__27083__auto___31604 = G__31605;
continue;
} else {
}
break;
}

var argseq__27090__auto__ = ((((1) < args__27089__auto__.length))?(new cljs.core.IndexedSeq(args__27089__auto__.slice((1)),(0),null)):null);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27090__auto__);
});

ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__27321__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"PATCH",(((f__27321__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__27321__auto__));
});

ajax.core.PATCH.cljs$lang$maxFixedArity = (1);

ajax.core.PATCH.cljs$lang$applyTo = (function (seq31601){
var G__31602 = cljs.core.first.call(null,seq31601);
var seq31601__$1 = cljs.core.next.call(null,seq31601);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic(G__31602,seq31601__$1);
});


//# sourceMappingURL=core.js.map?rel=1480126462660