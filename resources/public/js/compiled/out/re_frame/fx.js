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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p__31101){
var vec__31102 = p__31101;
var k = cljs.core.nth.call(null,vec__31102,(0),null);
var value = cljs.core.nth.call(null,vec__31102,(1),null);
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
var seq__31105 = cljs.core.seq.call(null,value);
var chunk__31106 = null;
var count__31107 = (0);
var i__31108 = (0);
while(true){
if((i__31108 < count__31107)){
var map__31109 = cljs.core._nth.call(null,chunk__31106,i__31108);
var map__31109__$1 = ((((!((map__31109 == null)))?((((map__31109.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31109.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31109):map__31109);
var effect = map__31109__$1;
var ms = cljs.core.get.call(null,map__31109__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__31109__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value: ",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__31105,chunk__31106,count__31107,i__31108,map__31109,map__31109__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__31105,chunk__31106,count__31107,i__31108,map__31109,map__31109__$1,effect,ms,dispatch))
,ms);
}

var G__31113 = seq__31105;
var G__31114 = chunk__31106;
var G__31115 = count__31107;
var G__31116 = (i__31108 + (1));
seq__31105 = G__31113;
chunk__31106 = G__31114;
count__31107 = G__31115;
i__31108 = G__31116;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31105);
if(temp__4657__auto__){
var seq__31105__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31105__$1)){
var c__26387__auto__ = cljs.core.chunk_first.call(null,seq__31105__$1);
var G__31117 = cljs.core.chunk_rest.call(null,seq__31105__$1);
var G__31118 = c__26387__auto__;
var G__31119 = cljs.core.count.call(null,c__26387__auto__);
var G__31120 = (0);
seq__31105 = G__31117;
chunk__31106 = G__31118;
count__31107 = G__31119;
i__31108 = G__31120;
continue;
} else {
var map__31111 = cljs.core.first.call(null,seq__31105__$1);
var map__31111__$1 = ((((!((map__31111 == null)))?((((map__31111.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31111.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31111):map__31111);
var effect = map__31111__$1;
var ms = cljs.core.get.call(null,map__31111__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__31111__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value: ",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__31105,chunk__31106,count__31107,i__31108,map__31111,map__31111__$1,effect,ms,dispatch,seq__31105__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__31105,chunk__31106,count__31107,i__31108,map__31111,map__31111__$1,effect,ms,dispatch,seq__31105__$1,temp__4657__auto__))
,ms);
}

var G__31121 = cljs.core.next.call(null,seq__31105__$1);
var G__31122 = null;
var G__31123 = (0);
var G__31124 = (0);
seq__31105 = G__31121;
chunk__31106 = G__31122;
count__31107 = G__31123;
i__31108 = G__31124;
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

var seq__31125 = cljs.core.seq.call(null,value);
var chunk__31126 = null;
var count__31127 = (0);
var i__31128 = (0);
while(true){
if((i__31128 < count__31127)){
var event = cljs.core._nth.call(null,chunk__31126,i__31128);
re_frame.router.dispatch.call(null,event);

var G__31129 = seq__31125;
var G__31130 = chunk__31126;
var G__31131 = count__31127;
var G__31132 = (i__31128 + (1));
seq__31125 = G__31129;
chunk__31126 = G__31130;
count__31127 = G__31131;
i__31128 = G__31132;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31125);
if(temp__4657__auto__){
var seq__31125__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31125__$1)){
var c__26387__auto__ = cljs.core.chunk_first.call(null,seq__31125__$1);
var G__31133 = cljs.core.chunk_rest.call(null,seq__31125__$1);
var G__31134 = c__26387__auto__;
var G__31135 = cljs.core.count.call(null,c__26387__auto__);
var G__31136 = (0);
seq__31125 = G__31133;
chunk__31126 = G__31134;
count__31127 = G__31135;
i__31128 = G__31136;
continue;
} else {
var event = cljs.core.first.call(null,seq__31125__$1);
re_frame.router.dispatch.call(null,event);

var G__31137 = cljs.core.next.call(null,seq__31125__$1);
var G__31138 = null;
var G__31139 = (0);
var G__31140 = (0);
seq__31125 = G__31137;
chunk__31126 = G__31138;
count__31127 = G__31139;
i__31128 = G__31140;
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

//# sourceMappingURL=fx.js.map?rel=1480029279857