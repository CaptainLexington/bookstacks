// Compiled by ClojureScript 1.9.89 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('bookstacks.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__48799__delegate = function (x){
if(cljs.core.truth_(bookstacks.core.mount_root)){
return cljs.core.apply.call(null,bookstacks.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'bookstacks.core/mount-root' is missing");
}
};
var G__48799 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__48800__i = 0, G__48800__a = new Array(arguments.length -  0);
while (G__48800__i < G__48800__a.length) {G__48800__a[G__48800__i] = arguments[G__48800__i + 0]; ++G__48800__i;}
  x = new cljs.core.IndexedSeq(G__48800__a,0);
} 
return G__48799__delegate.call(this,x);};
G__48799.cljs$lang$maxFixedArity = 0;
G__48799.cljs$lang$applyTo = (function (arglist__48801){
var x = cljs.core.seq(arglist__48801);
return G__48799__delegate(x);
});
G__48799.cljs$core$IFn$_invoke$arity$variadic = G__48799__delegate;
return G__48799;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://[[client-hostname]]:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1480124369057