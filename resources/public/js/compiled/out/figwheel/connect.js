// Compiled by ClojureScript 1.9.89 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('bookstacks.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__30845__delegate = function (x){
if(cljs.core.truth_(bookstacks.core.mount_root)){
return cljs.core.apply.call(null,bookstacks.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'bookstacks.core/mount-root' is missing");
}
};
var G__30845 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__30846__i = 0, G__30846__a = new Array(arguments.length -  0);
while (G__30846__i < G__30846__a.length) {G__30846__a[G__30846__i] = arguments[G__30846__i + 0]; ++G__30846__i;}
  x = new cljs.core.IndexedSeq(G__30846__a,0);
} 
return G__30845__delegate.call(this,x);};
G__30845.cljs$lang$maxFixedArity = 0;
G__30845.cljs$lang$applyTo = (function (arglist__30847){
var x = cljs.core.seq(arglist__30847);
return G__30845__delegate(x);
});
G__30845.cljs$core$IFn$_invoke$arity$variadic = G__30845__delegate;
return G__30845;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://[[client-hostname]]:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1476664090067