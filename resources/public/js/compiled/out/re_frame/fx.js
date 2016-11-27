// Compiled by ClojureScript 1.9.293 {}
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p__30844){
var vec__30845 = p__30844;
var k = cljs.core.nth.call(null,vec__30845,(0),null);
var value = cljs.core.nth.call(null,vec__30845,(1),null);
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
var seq__30848 = cljs.core.seq.call(null,value);
var chunk__30849 = null;
var count__30850 = (0);
var i__30851 = (0);
while(true){
if((i__30851 < count__30850)){
var map__30852 = cljs.core._nth.call(null,chunk__30849,i__30851);
var map__30852__$1 = ((((!((map__30852 == null)))?((((map__30852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30852.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30852):map__30852);
var effect = map__30852__$1;
var ms = cljs.core.get.call(null,map__30852__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__30852__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value: ",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__30848,chunk__30849,count__30850,i__30851,map__30852,map__30852__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__30848,chunk__30849,count__30850,i__30851,map__30852,map__30852__$1,effect,ms,dispatch))
,ms);
}

var G__30856 = seq__30848;
var G__30857 = chunk__30849;
var G__30858 = count__30850;
var G__30859 = (i__30851 + (1));
seq__30848 = G__30856;
chunk__30849 = G__30857;
count__30850 = G__30858;
i__30851 = G__30859;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30848);
if(temp__4657__auto__){
var seq__30848__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30848__$1)){
var c__26788__auto__ = cljs.core.chunk_first.call(null,seq__30848__$1);
var G__30860 = cljs.core.chunk_rest.call(null,seq__30848__$1);
var G__30861 = c__26788__auto__;
var G__30862 = cljs.core.count.call(null,c__26788__auto__);
var G__30863 = (0);
seq__30848 = G__30860;
chunk__30849 = G__30861;
count__30850 = G__30862;
i__30851 = G__30863;
continue;
} else {
var map__30854 = cljs.core.first.call(null,seq__30848__$1);
var map__30854__$1 = ((((!((map__30854 == null)))?((((map__30854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30854.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30854):map__30854);
var effect = map__30854__$1;
var ms = cljs.core.get.call(null,map__30854__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__30854__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value: ",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__30848,chunk__30849,count__30850,i__30851,map__30854,map__30854__$1,effect,ms,dispatch,seq__30848__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__30848,chunk__30849,count__30850,i__30851,map__30854,map__30854__$1,effect,ms,dispatch,seq__30848__$1,temp__4657__auto__))
,ms);
}

var G__30864 = cljs.core.next.call(null,seq__30848__$1);
var G__30865 = null;
var G__30866 = (0);
var G__30867 = (0);
seq__30848 = G__30864;
chunk__30849 = G__30865;
count__30850 = G__30866;
i__30851 = G__30867;
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

var seq__30868 = cljs.core.seq.call(null,value);
var chunk__30869 = null;
var count__30870 = (0);
var i__30871 = (0);
while(true){
if((i__30871 < count__30870)){
var event = cljs.core._nth.call(null,chunk__30869,i__30871);
re_frame.router.dispatch.call(null,event);

var G__30872 = seq__30868;
var G__30873 = chunk__30869;
var G__30874 = count__30870;
var G__30875 = (i__30871 + (1));
seq__30868 = G__30872;
chunk__30869 = G__30873;
count__30870 = G__30874;
i__30871 = G__30875;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30868);
if(temp__4657__auto__){
var seq__30868__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30868__$1)){
var c__26788__auto__ = cljs.core.chunk_first.call(null,seq__30868__$1);
var G__30876 = cljs.core.chunk_rest.call(null,seq__30868__$1);
var G__30877 = c__26788__auto__;
var G__30878 = cljs.core.count.call(null,c__26788__auto__);
var G__30879 = (0);
seq__30868 = G__30876;
chunk__30869 = G__30877;
count__30870 = G__30878;
i__30871 = G__30879;
continue;
} else {
var event = cljs.core.first.call(null,seq__30868__$1);
re_frame.router.dispatch.call(null,event);

var G__30880 = cljs.core.next.call(null,seq__30868__$1);
var G__30881 = null;
var G__30882 = (0);
var G__30883 = (0);
seq__30868 = G__30880;
chunk__30869 = G__30881;
count__30870 = G__30882;
i__30871 = G__30883;
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

//# sourceMappingURL=fx.js.map?rel=1480126461242