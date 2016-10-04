// Compiled by ClojureScript 1.9.89 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('bookstacks.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__25505__delegate = function (x){
if(cljs.core.truth_(bookstacks.core.mount_root)){
return cljs.core.apply.call(null,bookstacks.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'bookstacks.core/mount-root' is missing");
}
};
var G__25505 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__25506__i = 0, G__25506__a = new Array(arguments.length -  0);
while (G__25506__i < G__25506__a.length) {G__25506__a[G__25506__i] = arguments[G__25506__i + 0]; ++G__25506__i;}
  x = new cljs.core.IndexedSeq(G__25506__a,0);
} 
return G__25505__delegate.call(this,x);};
G__25505.cljs$lang$maxFixedArity = 0;
G__25505.cljs$lang$applyTo = (function (arglist__25507){
var x = cljs.core.seq(arglist__25507);
return G__25505__delegate(x);
});
G__25505.cljs$core$IFn$_invoke$arity$variadic = G__25505__delegate;
return G__25505;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://[[client-hostname]]:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1475105900661