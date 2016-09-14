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
var G__23808__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__23808 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23809__i = 0, G__23809__a = new Array(arguments.length -  0);
while (G__23809__i < G__23809__a.length) {G__23809__a[G__23809__i] = arguments[G__23809__i + 0]; ++G__23809__i;}
  args = new cljs.core.IndexedSeq(G__23809__a,0);
} 
return G__23808__delegate.call(this,args);};
G__23808.cljs$lang$maxFixedArity = 0;
G__23808.cljs$lang$applyTo = (function (arglist__23810){
var args = cljs.core.seq(arglist__23810);
return G__23808__delegate(args);
});
G__23808.cljs$core$IFn$_invoke$arity$variadic = G__23808__delegate;
return G__23808;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__23811__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__23811 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23812__i = 0, G__23812__a = new Array(arguments.length -  0);
while (G__23812__i < G__23812__a.length) {G__23812__a[G__23812__i] = arguments[G__23812__i + 0]; ++G__23812__i;}
  args = new cljs.core.IndexedSeq(G__23812__a,0);
} 
return G__23811__delegate.call(this,args);};
G__23811.cljs$lang$maxFixedArity = 0;
G__23811.cljs$lang$applyTo = (function (arglist__23813){
var args = cljs.core.seq(arglist__23813);
return G__23811__delegate(args);
});
G__23811.cljs$core$IFn$_invoke$arity$variadic = G__23811__delegate;
return G__23811;
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

//# sourceMappingURL=debug.js.map?rel=1473455227247