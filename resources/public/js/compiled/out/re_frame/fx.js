// Compiled by ClojureScript 1.9.89 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.register = cljs.core.partial.call(null,re_frame.registrar.register_handler,re_frame.fx.kind);
/**
 * An interceptor which actions a `context's` (side) `:effects`.
 * 
 *   For each key in the `:effects` map, call the `effects handler` previously
 *   registered using `reg-fx`.
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 *   call the registered effects handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p__24496){
var vec__24497 = p__24496;
var k = cljs.core.nth.call(null,vec__24497,(0),null);
var value = cljs.core.nth.call(null,vec__24497,(1),null);
var temp__4655__auto__ = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,k,true);
if(cljs.core.truth_(temp__4655__auto__)){
var effect_fn = temp__4655__auto__;
return effect_fn.call(null,value);
} else {
return null;
}
}),new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context)));
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__24500 = cljs.core.seq.call(null,value);
var chunk__24501 = null;
var count__24502 = (0);
var i__24503 = (0);
while(true){
if((i__24503 < count__24502)){
var map__24504 = cljs.core._nth.call(null,chunk__24501,i__24503);
var map__24504__$1 = ((((!((map__24504 == null)))?((((map__24504.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24504.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24504):map__24504);
var effect = map__24504__$1;
var ms = cljs.core.get.call(null,map__24504__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__24504__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value: ",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__24500,chunk__24501,count__24502,i__24503,map__24504,map__24504__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__24500,chunk__24501,count__24502,i__24503,map__24504,map__24504__$1,effect,ms,dispatch))
,ms);
}

var G__24508 = seq__24500;
var G__24509 = chunk__24501;
var G__24510 = count__24502;
var G__24511 = (i__24503 + (1));
seq__24500 = G__24508;
chunk__24501 = G__24509;
count__24502 = G__24510;
i__24503 = G__24511;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24500);
if(temp__4657__auto__){
var seq__24500__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24500__$1)){
var c__23389__auto__ = cljs.core.chunk_first.call(null,seq__24500__$1);
var G__24512 = cljs.core.chunk_rest.call(null,seq__24500__$1);
var G__24513 = c__23389__auto__;
var G__24514 = cljs.core.count.call(null,c__23389__auto__);
var G__24515 = (0);
seq__24500 = G__24512;
chunk__24501 = G__24513;
count__24502 = G__24514;
i__24503 = G__24515;
continue;
} else {
var map__24506 = cljs.core.first.call(null,seq__24500__$1);
var map__24506__$1 = ((((!((map__24506 == null)))?((((map__24506.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24506.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24506):map__24506);
var effect = map__24506__$1;
var ms = cljs.core.get.call(null,map__24506__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__24506__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value: ",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__24500,chunk__24501,count__24502,i__24503,map__24506,map__24506__$1,effect,ms,dispatch,seq__24500__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__24500,chunk__24501,count__24502,i__24503,map__24506,map__24506__$1,effect,ms,dispatch,seq__24500__$1,temp__4657__auto__))
,ms);
}

var G__24516 = cljs.core.next.call(null,seq__24500__$1);
var G__24517 = null;
var G__24518 = (0);
var G__24519 = (0);
seq__24500 = G__24516;
chunk__24501 = G__24517;
count__24502 = G__24518;
i__24503 = G__24519;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got: ",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got: ",value);
} else {
}

var seq__24520 = cljs.core.seq.call(null,value);
var chunk__24521 = null;
var count__24522 = (0);
var i__24523 = (0);
while(true){
if((i__24523 < count__24522)){
var event = cljs.core._nth.call(null,chunk__24521,i__24523);
re_frame.router.dispatch.call(null,event);

var G__24524 = seq__24520;
var G__24525 = chunk__24521;
var G__24526 = count__24522;
var G__24527 = (i__24523 + (1));
seq__24520 = G__24524;
chunk__24521 = G__24525;
count__24522 = G__24526;
i__24523 = G__24527;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24520);
if(temp__4657__auto__){
var seq__24520__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24520__$1)){
var c__23389__auto__ = cljs.core.chunk_first.call(null,seq__24520__$1);
var G__24528 = cljs.core.chunk_rest.call(null,seq__24520__$1);
var G__24529 = c__23389__auto__;
var G__24530 = cljs.core.count.call(null,c__23389__auto__);
var G__24531 = (0);
seq__24520 = G__24528;
chunk__24521 = G__24529;
count__24522 = G__24530;
i__24523 = G__24531;
continue;
} else {
var event = cljs.core.first.call(null,seq__24520__$1);
re_frame.router.dispatch.call(null,event);

var G__24532 = cljs.core.next.call(null,seq__24520__$1);
var G__24533 = null;
var G__24534 = (0);
var G__24535 = (0);
seq__24520 = G__24532;
chunk__24521 = G__24533;
count__24522 = G__24534;
i__24523 = G__24535;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
return cljs.core.doall.call(null,cljs.core.map.call(null,clear_event,value));
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
}));

//# sourceMappingURL=fx.js.map?rel=1473455228413