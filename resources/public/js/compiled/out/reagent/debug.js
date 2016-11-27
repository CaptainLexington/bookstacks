// Compiled by ClojureScript 1.9.293 {}
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
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__28919__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__28919 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28920__i = 0, G__28920__a = new Array(arguments.length -  0);
while (G__28920__i < G__28920__a.length) {G__28920__a[G__28920__i] = arguments[G__28920__i + 0]; ++G__28920__i;}
  args = new cljs.core.IndexedSeq(G__28920__a,0);
} 
return G__28919__delegate.call(this,args);};
G__28919.cljs$lang$maxFixedArity = 0;
G__28919.cljs$lang$applyTo = (function (arglist__28921){
var args = cljs.core.seq(arglist__28921);
return G__28919__delegate(args);
});
G__28919.cljs$core$IFn$_invoke$arity$variadic = G__28919__delegate;
return G__28919;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__28922__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__28922 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28923__i = 0, G__28923__a = new Array(arguments.length -  0);
while (G__28923__i < G__28923__a.length) {G__28923__a[G__28923__i] = arguments[G__28923__i + 0]; ++G__28923__i;}
  args = new cljs.core.IndexedSeq(G__28923__a,0);
} 
return G__28922__delegate.call(this,args);};
G__28922.cljs$lang$maxFixedArity = 0;
G__28922.cljs$lang$applyTo = (function (arglist__28924){
var args = cljs.core.seq(arglist__28924);
return G__28922__delegate(args);
});
G__28922.cljs$core$IFn$_invoke$arity$variadic = G__28922__delegate;
return G__28922;
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

//# sourceMappingURL=debug.js.map?rel=1480126455809