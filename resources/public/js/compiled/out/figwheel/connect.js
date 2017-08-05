// Compiled by ClojureScript 1.9.293 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('bookstacks.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__28896__delegate = function (x){
if(cljs.core.truth_(bookstacks.core.mount_root)){
return cljs.core.apply.call(null,bookstacks.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'bookstacks.core/mount-root' is missing");
}
};
var G__28896 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__28897__i = 0, G__28897__a = new Array(arguments.length -  0);
while (G__28897__i < G__28897__a.length) {G__28897__a[G__28897__i] = arguments[G__28897__i + 0]; ++G__28897__i;}
  x = new cljs.core.IndexedSeq(G__28897__a,0);
} 
return G__28896__delegate.call(this,x);};
G__28896.cljs$lang$maxFixedArity = 0;
G__28896.cljs$lang$applyTo = (function (arglist__28898){
var x = cljs.core.seq(arglist__28898);
return G__28896__delegate(x);
});
G__28896.cljs$core$IFn$_invoke$arity$variadic = G__28896__delegate;
return G__28896;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://[[client-hostname]]:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1500325072356