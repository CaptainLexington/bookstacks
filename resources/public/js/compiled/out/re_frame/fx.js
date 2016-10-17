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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p__29299){
var vec__29300 = p__29299;
var k = cljs.core.nth.call(null,vec__29300,(0),null);
var value = cljs.core.nth.call(null,vec__29300,(1),null);
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
var seq__29303 = cljs.core.seq.call(null,value);
var chunk__29304 = null;
var count__29305 = (0);
var i__29306 = (0);
while(true){
if((i__29306 < count__29305)){
var map__29307 = cljs.core._nth.call(null,chunk__29304,i__29306);
var map__29307__$1 = ((((!((map__29307 == null)))?((((map__29307.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29307.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29307):map__29307);
var effect = map__29307__$1;
var ms = cljs.core.get.call(null,map__29307__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__29307__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value: ",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__29303,chunk__29304,count__29305,i__29306,map__29307,map__29307__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__29303,chunk__29304,count__29305,i__29306,map__29307,map__29307__$1,effect,ms,dispatch))
,ms);
}

var G__29311 = seq__29303;
var G__29312 = chunk__29304;
var G__29313 = count__29305;
var G__29314 = (i__29306 + (1));
seq__29303 = G__29311;
chunk__29304 = G__29312;
count__29305 = G__29313;
i__29306 = G__29314;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29303);
if(temp__4657__auto__){
var seq__29303__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29303__$1)){
var c__26381__auto__ = cljs.core.chunk_first.call(null,seq__29303__$1);
var G__29315 = cljs.core.chunk_rest.call(null,seq__29303__$1);
var G__29316 = c__26381__auto__;
var G__29317 = cljs.core.count.call(null,c__26381__auto__);
var G__29318 = (0);
seq__29303 = G__29315;
chunk__29304 = G__29316;
count__29305 = G__29317;
i__29306 = G__29318;
continue;
} else {
var map__29309 = cljs.core.first.call(null,seq__29303__$1);
var map__29309__$1 = ((((!((map__29309 == null)))?((((map__29309.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29309.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29309):map__29309);
var effect = map__29309__$1;
var ms = cljs.core.get.call(null,map__29309__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__29309__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value: ",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__29303,chunk__29304,count__29305,i__29306,map__29309,map__29309__$1,effect,ms,dispatch,seq__29303__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__29303,chunk__29304,count__29305,i__29306,map__29309,map__29309__$1,effect,ms,dispatch,seq__29303__$1,temp__4657__auto__))
,ms);
}

var G__29319 = cljs.core.next.call(null,seq__29303__$1);
var G__29320 = null;
var G__29321 = (0);
var G__29322 = (0);
seq__29303 = G__29319;
chunk__29304 = G__29320;
count__29305 = G__29321;
i__29306 = G__29322;
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

var seq__29323 = cljs.core.seq.call(null,value);
var chunk__29324 = null;
var count__29325 = (0);
var i__29326 = (0);
while(true){
if((i__29326 < count__29325)){
var event = cljs.core._nth.call(null,chunk__29324,i__29326);
re_frame.router.dispatch.call(null,event);

var G__29327 = seq__29323;
var G__29328 = chunk__29324;
var G__29329 = count__29325;
var G__29330 = (i__29326 + (1));
seq__29323 = G__29327;
chunk__29324 = G__29328;
count__29325 = G__29329;
i__29326 = G__29330;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29323);
if(temp__4657__auto__){
var seq__29323__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29323__$1)){
var c__26381__auto__ = cljs.core.chunk_first.call(null,seq__29323__$1);
var G__29331 = cljs.core.chunk_rest.call(null,seq__29323__$1);
var G__29332 = c__26381__auto__;
var G__29333 = cljs.core.count.call(null,c__26381__auto__);
var G__29334 = (0);
seq__29323 = G__29331;
chunk__29324 = G__29332;
count__29325 = G__29333;
i__29326 = G__29334;
continue;
} else {
var event = cljs.core.first.call(null,seq__29323__$1);
re_frame.router.dispatch.call(null,event);

var G__29335 = cljs.core.next.call(null,seq__29323__$1);
var G__29336 = null;
var G__29337 = (0);
var G__29338 = (0);
seq__29323 = G__29335;
chunk__29324 = G__29336;
count__29325 = G__29337;
i__29326 = G__29338;
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

//# sourceMappingURL=fx.js.map?rel=1476657526398