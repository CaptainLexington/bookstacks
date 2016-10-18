// Compiled by ClojureScript 1.9.89 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('bookstacks.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__28834__delegate = function (x){
if(cljs.core.truth_(bookstacks.core.mount_root)){
return cljs.core.apply.call(null,bookstacks.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'bookstacks.core/mount-root' is missing");
}
};
var G__28834 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__28835__i = 0, G__28835__a = new Array(arguments.length -  0);
while (G__28835__i < G__28835__a.length) {G__28835__a[G__28835__i] = arguments[G__28835__i + 0]; ++G__28835__i;}
  x = new cljs.core.IndexedSeq(G__28835__a,0);
} 
return G__28834__delegate.call(this,x);};
G__28834.cljs$lang$maxFixedArity = 0;
G__28834.cljs$lang$applyTo = (function (arglist__28836){
var x = cljs.core.seq(arglist__28836);
return G__28834__delegate(x);
});
G__28834.cljs$core$IFn$_invoke$arity$variadic = G__28834__delegate;
return G__28834;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://[[client-hostname]]:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1476743970087