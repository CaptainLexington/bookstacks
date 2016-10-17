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
var G__26937__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__26937 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26938__i = 0, G__26938__a = new Array(arguments.length -  0);
while (G__26938__i < G__26938__a.length) {G__26938__a[G__26938__i] = arguments[G__26938__i + 0]; ++G__26938__i;}
  args = new cljs.core.IndexedSeq(G__26938__a,0);
} 
return G__26937__delegate.call(this,args);};
G__26937.cljs$lang$maxFixedArity = 0;
G__26937.cljs$lang$applyTo = (function (arglist__26939){
var args = cljs.core.seq(arglist__26939);
return G__26937__delegate(args);
});
G__26937.cljs$core$IFn$_invoke$arity$variadic = G__26937__delegate;
return G__26937;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__26940__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__26940 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26941__i = 0, G__26941__a = new Array(arguments.length -  0);
while (G__26941__i < G__26941__a.length) {G__26941__a[G__26941__i] = arguments[G__26941__i + 0]; ++G__26941__i;}
  args = new cljs.core.IndexedSeq(G__26941__a,0);
} 
return G__26940__delegate.call(this,args);};
G__26940.cljs$lang$maxFixedArity = 0;
G__26940.cljs$lang$applyTo = (function (arglist__26942){
var args = cljs.core.seq(arglist__26942);
return G__26940__delegate(args);
});
G__26940.cljs$core$IFn$_invoke$arity$variadic = G__26940__delegate;
return G__26940;
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

//# sourceMappingURL=debug.js.map?rel=1476657522188