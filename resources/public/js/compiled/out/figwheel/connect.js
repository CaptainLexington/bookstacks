// Compiled by ClojureScript 1.9.89 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('bookstacks.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__28774__delegate = function (x){
if(cljs.core.truth_(bookstacks.core.mount_root)){
return cljs.core.apply.call(null,bookstacks.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'bookstacks.core/mount-root' is missing");
}
};
var G__28774 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__28775__i = 0, G__28775__a = new Array(arguments.length -  0);
while (G__28775__i < G__28775__a.length) {G__28775__a[G__28775__i] = arguments[G__28775__i + 0]; ++G__28775__i;}
  x = new cljs.core.IndexedSeq(G__28775__a,0);
} 
return G__28774__delegate.call(this,x);};
G__28774.cljs$lang$maxFixedArity = 0;
G__28774.cljs$lang$applyTo = (function (arglist__28776){
var x = cljs.core.seq(arglist__28776);
return G__28774__delegate(x);
});
G__28774.cljs$core$IFn$_invoke$arity$variadic = G__28774__delegate;
return G__28774;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://[[client-hostname]]:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1476578499228