// Compiled by ClojureScript 1.9.89 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('bookstacks.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__43700__delegate = function (x){
if(cljs.core.truth_(bookstacks.core.mount_root)){
return cljs.core.apply.call(null,bookstacks.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'bookstacks.core/mount-root' is missing");
}
};
var G__43700 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__43701__i = 0, G__43701__a = new Array(arguments.length -  0);
while (G__43701__i < G__43701__a.length) {G__43701__a[G__43701__i] = arguments[G__43701__i + 0]; ++G__43701__i;}
  x = new cljs.core.IndexedSeq(G__43701__a,0);
} 
return G__43700__delegate.call(this,x);};
G__43700.cljs$lang$maxFixedArity = 0;
G__43700.cljs$lang$applyTo = (function (arglist__43702){
var x = cljs.core.seq(arglist__43702);
return G__43700__delegate(x);
});
G__43700.cljs$core$IFn$_invoke$arity$variadic = G__43700__delegate;
return G__43700;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://[[client-hostname]]:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1480050915025