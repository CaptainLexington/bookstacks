// Compiled by ClojureScript 1.9.89 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = {};
o.warn = ((function (o){
return (function() { 
var G__29225__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__29225 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29226__i = 0, G__29226__a = new Array(arguments.length -  0);
while (G__29226__i < G__29226__a.length) {G__29226__a[G__29226__i] = arguments[G__29226__i + 0]; ++G__29226__i;}
  args = new cljs.core.IndexedSeq(G__29226__a,0);
} 
return G__29225__delegate.call(this,args);};
G__29225.cljs$lang$maxFixedArity = 0;
G__29225.cljs$lang$applyTo = (function (arglist__29227){
var args = cljs.core.seq(arglist__29227);
return G__29225__delegate(args);
});
G__29225.cljs$core$IFn$_invoke$arity$variadic = G__29225__delegate;
return G__29225;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__29228__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__29228 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29229__i = 0, G__29229__a = new Array(arguments.length -  0);
while (G__29229__i < G__29229__a.length) {G__29229__a[G__29229__i] = arguments[G__29229__i + 0]; ++G__29229__i;}
  args = new cljs.core.IndexedSeq(G__29229__a,0);
} 
return G__29228__delegate.call(this,args);};
G__29228.cljs$lang$maxFixedArity = 0;
G__29228.cljs$lang$applyTo = (function (arglist__29230){
var args = cljs.core.seq(arglist__29230);
return G__29228__delegate(args);
});
G__29228.cljs$core$IFn$_invoke$arity$variadic = G__29228__delegate;
return G__29228;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1480029274506