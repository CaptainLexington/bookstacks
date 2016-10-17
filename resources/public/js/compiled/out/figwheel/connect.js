// Compiled by ClojureScript 1.9.89 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('bookstacks.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__29404__delegate = function (x){
if(cljs.core.truth_(bookstacks.core.mount_root)){
return cljs.core.apply.call(null,bookstacks.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'bookstacks.core/mount-root' is missing");
}
};
var G__29404 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__29405__i = 0, G__29405__a = new Array(arguments.length -  0);
while (G__29405__i < G__29405__a.length) {G__29405__a[G__29405__i] = arguments[G__29405__i + 0]; ++G__29405__i;}
  x = new cljs.core.IndexedSeq(G__29405__a,0);
} 
return G__29404__delegate.call(this,x);};
G__29404.cljs$lang$maxFixedArity = 0;
G__29404.cljs$lang$applyTo = (function (arglist__29406){
var x = cljs.core.seq(arglist__29406);
return G__29404__delegate(x);
});
G__29404.cljs$core$IFn$_invoke$arity$variadic = G__29404__delegate;
return G__29404;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://[[client-hostname]]:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1476730510022