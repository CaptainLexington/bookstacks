// Compiled by ClojureScript 1.9.89 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('bookstacks.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__26032__delegate = function (x){
if(cljs.core.truth_(bookstacks.core.mount_root)){
return cljs.core.apply.call(null,bookstacks.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'bookstacks.core/mount-root' is missing");
}
};
var G__26032 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__26033__i = 0, G__26033__a = new Array(arguments.length -  0);
while (G__26033__i < G__26033__a.length) {G__26033__a[G__26033__i] = arguments[G__26033__i + 0]; ++G__26033__i;}
  x = new cljs.core.IndexedSeq(G__26033__a,0);
} 
return G__26032__delegate.call(this,x);};
G__26032.cljs$lang$maxFixedArity = 0;
G__26032.cljs$lang$applyTo = (function (arglist__26034){
var x = cljs.core.seq(arglist__26034);
return G__26032__delegate(x);
});
G__26032.cljs$core$IFn$_invoke$arity$variadic = G__26032__delegate;
return G__26032;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://[[client-hostname]]:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1474483537215