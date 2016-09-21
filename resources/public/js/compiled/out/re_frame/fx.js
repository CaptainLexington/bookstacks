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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p__25810){
var vec__25811 = p__25810;
var k = cljs.core.nth.call(null,vec__25811,(0),null);
var value = cljs.core.nth.call(null,vec__25811,(1),null);
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
var seq__25814 = cljs.core.seq.call(null,value);
var chunk__25815 = null;
var count__25816 = (0);
var i__25817 = (0);
while(true){
if((i__25817 < count__25816)){
var map__25818 = cljs.core._nth.call(null,chunk__25815,i__25817);
var map__25818__$1 = ((((!((map__25818 == null)))?((((map__25818.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25818.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25818):map__25818);
var effect = map__25818__$1;
var ms = cljs.core.get.call(null,map__25818__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__25818__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value: ",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__25814,chunk__25815,count__25816,i__25817,map__25818,map__25818__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__25814,chunk__25815,count__25816,i__25817,map__25818,map__25818__$1,effect,ms,dispatch))
,ms);
}

var G__25822 = seq__25814;
var G__25823 = chunk__25815;
var G__25824 = count__25816;
var G__25825 = (i__25817 + (1));
seq__25814 = G__25822;
chunk__25815 = G__25823;
count__25816 = G__25824;
i__25817 = G__25825;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25814);
if(temp__4657__auto__){
var seq__25814__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25814__$1)){
var c__23389__auto__ = cljs.core.chunk_first.call(null,seq__25814__$1);
var G__25826 = cljs.core.chunk_rest.call(null,seq__25814__$1);
var G__25827 = c__23389__auto__;
var G__25828 = cljs.core.count.call(null,c__23389__auto__);
var G__25829 = (0);
seq__25814 = G__25826;
chunk__25815 = G__25827;
count__25816 = G__25828;
i__25817 = G__25829;
continue;
} else {
var map__25820 = cljs.core.first.call(null,seq__25814__$1);
var map__25820__$1 = ((((!((map__25820 == null)))?((((map__25820.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25820.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25820):map__25820);
var effect = map__25820__$1;
var ms = cljs.core.get.call(null,map__25820__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__25820__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value: ",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__25814,chunk__25815,count__25816,i__25817,map__25820,map__25820__$1,effect,ms,dispatch,seq__25814__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__25814,chunk__25815,count__25816,i__25817,map__25820,map__25820__$1,effect,ms,dispatch,seq__25814__$1,temp__4657__auto__))
,ms);
}

var G__25830 = cljs.core.next.call(null,seq__25814__$1);
var G__25831 = null;
var G__25832 = (0);
var G__25833 = (0);
seq__25814 = G__25830;
chunk__25815 = G__25831;
count__25816 = G__25832;
i__25817 = G__25833;
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

var seq__25834 = cljs.core.seq.call(null,value);
var chunk__25835 = null;
var count__25836 = (0);
var i__25837 = (0);
while(true){
if((i__25837 < count__25836)){
var event = cljs.core._nth.call(null,chunk__25835,i__25837);
re_frame.router.dispatch.call(null,event);

var G__25838 = seq__25834;
var G__25839 = chunk__25835;
var G__25840 = count__25836;
var G__25841 = (i__25837 + (1));
seq__25834 = G__25838;
chunk__25835 = G__25839;
count__25836 = G__25840;
i__25837 = G__25841;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25834);
if(temp__4657__auto__){
var seq__25834__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25834__$1)){
var c__23389__auto__ = cljs.core.chunk_first.call(null,seq__25834__$1);
var G__25842 = cljs.core.chunk_rest.call(null,seq__25834__$1);
var G__25843 = c__23389__auto__;
var G__25844 = cljs.core.count.call(null,c__23389__auto__);
var G__25845 = (0);
seq__25834 = G__25842;
chunk__25835 = G__25843;
count__25836 = G__25844;
i__25837 = G__25845;
continue;
} else {
var event = cljs.core.first.call(null,seq__25834__$1);
re_frame.router.dispatch.call(null,event);

var G__25846 = cljs.core.next.call(null,seq__25834__$1);
var G__25847 = null;
var G__25848 = (0);
var G__25849 = (0);
seq__25834 = G__25846;
chunk__25835 = G__25847;
count__25836 = G__25848;
i__25837 = G__25849;
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

//# sourceMappingURL=fx.js.map?rel=1474484605938