// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__26580__auto__,writer__26581__auto__,opt__26582__auto__){
return cljs.core._write.call(null,writer__26581__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__27089__auto__ = [];
var len__27082__auto___36272 = arguments.length;
var i__27083__auto___36273 = (0);
while(true){
if((i__27083__auto___36273 < len__27082__auto___36272)){
args__27089__auto__.push((arguments[i__27083__auto___36273]));

var G__36274 = (i__27083__auto___36273 + (1));
i__27083__auto___36273 = G__36274;
continue;
} else {
}
break;
}

var argseq__27090__auto__ = ((((0) < args__27089__auto__.length))?(new cljs.core.IndexedSeq(args__27089__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__27090__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq36271){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36271));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__27089__auto__ = [];
var len__27082__auto___36276 = arguments.length;
var i__27083__auto___36277 = (0);
while(true){
if((i__27083__auto___36277 < len__27082__auto___36276)){
args__27089__auto__.push((arguments[i__27083__auto___36277]));

var G__36278 = (i__27083__auto___36277 + (1));
i__27083__auto___36277 = G__36278;
continue;
} else {
}
break;
}

var argseq__27090__auto__ = ((((0) < args__27089__auto__.length))?(new cljs.core.IndexedSeq(args__27089__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__27090__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq36275){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36275));
});

var g_QMARK__36279 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_36280 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__36279){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__36279))
,null));
var mkg_36281 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__36279,g_36280){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__36279,g_36280))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__36279,g_36280,mkg_36281){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__36279).call(null,x);
});})(g_QMARK__36279,g_36280,mkg_36281))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__36279,g_36280,mkg_36281){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_36281).call(null,gfn);
});})(g_QMARK__36279,g_36280,mkg_36281))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__36279,g_36280,mkg_36281){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_36280).call(null,generator);
});})(g_QMARK__36279,g_36280,mkg_36281))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__28533__auto___36300 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__28533__auto___36300){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__27089__auto__ = [];
var len__27082__auto___36301 = arguments.length;
var i__27083__auto___36302 = (0);
while(true){
if((i__27083__auto___36302 < len__27082__auto___36301)){
args__27089__auto__.push((arguments[i__27083__auto___36302]));

var G__36303 = (i__27083__auto___36302 + (1));
i__27083__auto___36302 = G__36303;
continue;
} else {
}
break;
}

var argseq__27090__auto__ = ((((0) < args__27089__auto__.length))?(new cljs.core.IndexedSeq(args__27089__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__27090__auto__);
});})(g__28533__auto___36300))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28533__auto___36300){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28533__auto___36300),args);
});})(g__28533__auto___36300))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__28533__auto___36300){
return (function (seq36282){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36282));
});})(g__28533__auto___36300))
;


var g__28533__auto___36304 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__28533__auto___36304){
return (function cljs$spec$impl$gen$list(var_args){
var args__27089__auto__ = [];
var len__27082__auto___36305 = arguments.length;
var i__27083__auto___36306 = (0);
while(true){
if((i__27083__auto___36306 < len__27082__auto___36305)){
args__27089__auto__.push((arguments[i__27083__auto___36306]));

var G__36307 = (i__27083__auto___36306 + (1));
i__27083__auto___36306 = G__36307;
continue;
} else {
}
break;
}

var argseq__27090__auto__ = ((((0) < args__27089__auto__.length))?(new cljs.core.IndexedSeq(args__27089__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__27090__auto__);
});})(g__28533__auto___36304))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28533__auto___36304){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28533__auto___36304),args);
});})(g__28533__auto___36304))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__28533__auto___36304){
return (function (seq36283){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36283));
});})(g__28533__auto___36304))
;


var g__28533__auto___36308 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__28533__auto___36308){
return (function cljs$spec$impl$gen$map(var_args){
var args__27089__auto__ = [];
var len__27082__auto___36309 = arguments.length;
var i__27083__auto___36310 = (0);
while(true){
if((i__27083__auto___36310 < len__27082__auto___36309)){
args__27089__auto__.push((arguments[i__27083__auto___36310]));

var G__36311 = (i__27083__auto___36310 + (1));
i__27083__auto___36310 = G__36311;
continue;
} else {
}
break;
}

var argseq__27090__auto__ = ((((0) < args__27089__auto__.length))?(new cljs.core.IndexedSeq(args__27089__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__27090__auto__);
});})(g__28533__auto___36308))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28533__auto___36308){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28533__auto___36308),args);
});})(g__28533__auto___36308))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__28533__auto___36308){
return (function (seq36284){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36284));
});})(g__28533__auto___36308))
;


var g__28533__auto___36312 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__28533__auto___36312){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__27089__auto__ = [];
var len__27082__auto___36313 = arguments.length;
var i__27083__auto___36314 = (0);
while(true){
if((i__27083__auto___36314 < len__27082__auto___36313)){
args__27089__auto__.push((arguments[i__27083__auto___36314]));

var G__36315 = (i__27083__auto___36314 + (1));
i__27083__auto___36314 = G__36315;
continue;
} else {
}
break;
}

var argseq__27090__auto__ = ((((0) < args__27089__auto__.length))?(new cljs.core.IndexedSeq(args__27089__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__27090__auto__);
});})(g__28533__auto___36312))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28533__auto___36312){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28533__auto___36312),args);
});})(g__28533__auto___36312))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__28533__auto___36312){
return (function (seq36285){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36285));
});})(g__28533__auto___36312))
;


var g__28533__auto___36316 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__28533__auto___36316){
return (function cljs$spec$impl$gen$set(var_args){
var args__27089__auto__ = [];
var len__27082__auto___36317 = arguments.length;
var i__27083__auto___36318 = (0);
while(true){
if((i__27083__auto___36318 < len__27082__auto___36317)){
args__27089__auto__.push((arguments[i__27083__auto___36318]));

var G__36319 = (i__27083__auto___36318 + (1));
i__27083__auto___36318 = G__36319;
continue;
} else {
}
break;
}

var argseq__27090__auto__ = ((((0) < args__27089__auto__.length))?(new cljs.core.IndexedSeq(args__27089__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__27090__auto__);
});})(g__28533__auto___36316))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28533__auto___36316){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28533__auto___36316),args);
});})(g__28533__auto___36316))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__28533__auto___36316){
return (function (seq36286){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36286));
});})(g__28533__auto___36316))
;


var g__28533__auto___36320 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__28533__auto___36320){
return (function cljs$spec$impl$gen$vector(var_args){
var args__27089__auto__ = [];
var len__27082__auto___36321 = arguments.length;
var i__27083__auto___36322 = (0);
while(true){
if((i__27083__auto___36322 < len__27082__auto___36321)){
args__27089__auto__.push((arguments[i__27083__auto___36322]));

var G__36323 = (i__27083__auto___36322 + (1));
i__27083__auto___36322 = G__36323;
continue;
} else {
}
break;
}

var argseq__27090__auto__ = ((((0) < args__27089__auto__.length))?(new cljs.core.IndexedSeq(args__27089__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__27090__auto__);
});})(g__28533__auto___36320))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28533__auto___36320){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28533__auto___36320),args);
});})(g__28533__auto___36320))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__28533__auto___36320){
return (function (seq36287){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36287));
});})(g__28533__auto___36320))
;


var g__28533__auto___36324 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__28533__auto___36324){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__27089__auto__ = [];
var len__27082__auto___36325 = arguments.length;
var i__27083__auto___36326 = (0);
while(true){
if((i__27083__auto___36326 < len__27082__auto___36325)){
args__27089__auto__.push((arguments[i__27083__auto___36326]));

var G__36327 = (i__27083__auto___36326 + (1));
i__27083__auto___36326 = G__36327;
continue;
} else {
}
break;
}

var argseq__27090__auto__ = ((((0) < args__27089__auto__.length))?(new cljs.core.IndexedSeq(args__27089__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__27090__auto__);
});})(g__28533__auto___36324))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28533__auto___36324){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28533__auto___36324),args);
});})(g__28533__auto___36324))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__28533__auto___36324){
return (function (seq36288){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36288));
});})(g__28533__auto___36324))
;


var g__28533__auto___36328 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__28533__auto___36328){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__27089__auto__ = [];
var len__27082__auto___36329 = arguments.length;
var i__27083__auto___36330 = (0);
while(true){
if((i__27083__auto___36330 < len__27082__auto___36329)){
args__27089__auto__.push((arguments[i__27083__auto___36330]));

var G__36331 = (i__27083__auto___36330 + (1));
i__27083__auto___36330 = G__36331;
continue;
} else {
}
break;
}

var argseq__27090__auto__ = ((((0) < args__27089__auto__.length))?(new cljs.core.IndexedSeq(args__27089__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__27090__auto__);
});})(g__28533__auto___36328))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28533__auto___36328){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28533__auto___36328),args);
});})(g__28533__auto___36328))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__28533__auto___36328){
return (function (seq36289){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36289));
});})(g__28533__auto___36328))
;


var g__28533__auto___36332 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__28533__auto___36332){
return (function cljs$spec$impl$gen$elements(var_args){
var args__27089__auto__ = [];
var len__27082__auto___36333 = arguments.length;
var i__27083__auto___36334 = (0);
while(true){
if((i__27083__auto___36334 < len__27082__auto___36333)){
args__27089__auto__.push((arguments[i__27083__auto___36334]));

var G__36335 = (i__27083__auto___36334 + (1));
i__27083__auto___36334 = G__36335;
continue;
} else {
}
break;
}

var argseq__27090__auto__ = ((((0) < args__27089__auto__.length))?(new cljs.core.IndexedSeq(args__27089__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__27090__auto__);
});})(g__28533__auto___36332))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28533__auto___36332){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28533__auto___36332),args);
});})(g__28533__auto___36332))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__28533__auto___36332){
return (function (seq36290){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36290));
});})(g__28533__auto___36332))
;


var g__28533__auto___36336 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__28533__auto___36336){
return (function cljs$spec$impl$gen$bind(var_args){
var args__27089__auto__ = [];
var len__27082__auto___36337 = arguments.length;
var i__27083__auto___36338 = (0);
while(true){
if((i__27083__auto___36338 < len__27082__auto___36337)){
args__27089__auto__.push((arguments[i__27083__auto___36338]));

var G__36339 = (i__27083__auto___36338 + (1));
i__27083__auto___36338 = G__36339;
continue;
} else {
}
break;
}

var argseq__27090__auto__ = ((((0) < args__27089__auto__.length))?(new cljs.core.IndexedSeq(args__27089__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__27090__auto__);
});})(g__28533__auto___36336))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28533__auto___36336){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28533__auto___36336),args);
});})(g__28533__auto___36336))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__28533__auto___36336){
return (function (seq36291){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36291));
});})(g__28533__auto___36336))
;


var g__28533__auto___36340 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__28533__auto___36340){
return (function cljs$spec$impl$gen$choose(var_args){
var args__27089__auto__ = [];
var len__27082__auto___36341 = arguments.length;
var i__27083__auto___36342 = (0);
while(true){
if((i__27083__auto___36342 < len__27082__auto___36341)){
args__27089__auto__.push((arguments[i__27083__auto___36342]));

var G__36343 = (i__27083__auto___36342 + (1));
i__27083__auto___36342 = G__36343;
continue;
} else {
}
break;
}

var argseq__27090__auto__ = ((((0) < args__27089__auto__.length))?(new cljs.core.IndexedSeq(args__27089__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__27090__auto__);
});})(g__28533__auto___36340))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28533__auto___36340){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28533__auto___36340),args);
});})(g__28533__auto___36340))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__28533__auto___36340){
return (function (seq36292){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36292));
});})(g__28533__auto___36340))
;


var g__28533__auto___36344 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__28533__auto___36344){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__27089__auto__ = [];
var len__27082__auto___36345 = arguments.length;
var i__27083__auto___36346 = (0);
while(true){
if((i__27083__auto___36346 < len__27082__auto___36345)){
args__27089__auto__.push((arguments[i__27083__auto___36346]));

var G__36347 = (i__27083__auto___36346 + (1));
i__27083__auto___36346 = G__36347;
continue;
} else {
}
break;
}

var argseq__27090__auto__ = ((((0) < args__27089__auto__.length))?(new cljs.core.IndexedSeq(args__27089__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__27090__auto__);
});})(g__28533__auto___36344))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28533__auto___36344){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28533__auto___36344),args);
});})(g__28533__auto___36344))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__28533__auto___36344){
return (function (seq36293){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36293));
});})(g__28533__auto___36344))
;


var g__28533__auto___36348 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__28533__auto___36348){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__27089__auto__ = [];
var len__27082__auto___36349 = arguments.length;
var i__27083__auto___36350 = (0);
while(true){
if((i__27083__auto___36350 < len__27082__auto___36349)){
args__27089__auto__.push((arguments[i__27083__auto___36350]));

var G__36351 = (i__27083__auto___36350 + (1));
i__27083__auto___36350 = G__36351;
continue;
} else {
}
break;
}

var argseq__27090__auto__ = ((((0) < args__27089__auto__.length))?(new cljs.core.IndexedSeq(args__27089__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__27090__auto__);
});})(g__28533__auto___36348))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28533__auto___36348){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28533__auto___36348),args);
});})(g__28533__auto___36348))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__28533__auto___36348){
return (function (seq36294){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36294));
});})(g__28533__auto___36348))
;


var g__28533__auto___36352 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__28533__auto___36352){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__27089__auto__ = [];
var len__27082__auto___36353 = arguments.length;
var i__27083__auto___36354 = (0);
while(true){
if((i__27083__auto___36354 < len__27082__auto___36353)){
args__27089__auto__.push((arguments[i__27083__auto___36354]));

var G__36355 = (i__27083__auto___36354 + (1));
i__27083__auto___36354 = G__36355;
continue;
} else {
}
break;
}

var argseq__27090__auto__ = ((((0) < args__27089__auto__.length))?(new cljs.core.IndexedSeq(args__27089__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__27090__auto__);
});})(g__28533__auto___36352))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28533__auto___36352){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28533__auto___36352),args);
});})(g__28533__auto___36352))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__28533__auto___36352){
return (function (seq36295){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36295));
});})(g__28533__auto___36352))
;


var g__28533__auto___36356 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__28533__auto___36356){
return (function cljs$spec$impl$gen$sample(var_args){
var args__27089__auto__ = [];
var len__27082__auto___36357 = arguments.length;
var i__27083__auto___36358 = (0);
while(true){
if((i__27083__auto___36358 < len__27082__auto___36357)){
args__27089__auto__.push((arguments[i__27083__auto___36358]));

var G__36359 = (i__27083__auto___36358 + (1));
i__27083__auto___36358 = G__36359;
continue;
} else {
}
break;
}

var argseq__27090__auto__ = ((((0) < args__27089__auto__.length))?(new cljs.core.IndexedSeq(args__27089__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__27090__auto__);
});})(g__28533__auto___36356))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28533__auto___36356){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28533__auto___36356),args);
});})(g__28533__auto___36356))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__28533__auto___36356){
return (function (seq36296){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36296));
});})(g__28533__auto___36356))
;


var g__28533__auto___36360 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__28533__auto___36360){
return (function cljs$spec$impl$gen$return(var_args){
var args__27089__auto__ = [];
var len__27082__auto___36361 = arguments.length;
var i__27083__auto___36362 = (0);
while(true){
if((i__27083__auto___36362 < len__27082__auto___36361)){
args__27089__auto__.push((arguments[i__27083__auto___36362]));

var G__36363 = (i__27083__auto___36362 + (1));
i__27083__auto___36362 = G__36363;
continue;
} else {
}
break;
}

var argseq__27090__auto__ = ((((0) < args__27089__auto__.length))?(new cljs.core.IndexedSeq(args__27089__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__27090__auto__);
});})(g__28533__auto___36360))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28533__auto___36360){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28533__auto___36360),args);
});})(g__28533__auto___36360))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__28533__auto___36360){
return (function (seq36297){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36297));
});})(g__28533__auto___36360))
;


var g__28533__auto___36364 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__28533__auto___36364){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__27089__auto__ = [];
var len__27082__auto___36365 = arguments.length;
var i__27083__auto___36366 = (0);
while(true){
if((i__27083__auto___36366 < len__27082__auto___36365)){
args__27089__auto__.push((arguments[i__27083__auto___36366]));

var G__36367 = (i__27083__auto___36366 + (1));
i__27083__auto___36366 = G__36367;
continue;
} else {
}
break;
}

var argseq__27090__auto__ = ((((0) < args__27089__auto__.length))?(new cljs.core.IndexedSeq(args__27089__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__27090__auto__);
});})(g__28533__auto___36364))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28533__auto___36364){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28533__auto___36364),args);
});})(g__28533__auto___36364))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__28533__auto___36364){
return (function (seq36298){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36298));
});})(g__28533__auto___36364))
;


var g__28533__auto___36368 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__28533__auto___36368){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__27089__auto__ = [];
var len__27082__auto___36369 = arguments.length;
var i__27083__auto___36370 = (0);
while(true){
if((i__27083__auto___36370 < len__27082__auto___36369)){
args__27089__auto__.push((arguments[i__27083__auto___36370]));

var G__36371 = (i__27083__auto___36370 + (1));
i__27083__auto___36370 = G__36371;
continue;
} else {
}
break;
}

var argseq__27090__auto__ = ((((0) < args__27089__auto__.length))?(new cljs.core.IndexedSeq(args__27089__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__27090__auto__);
});})(g__28533__auto___36368))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28533__auto___36368){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28533__auto___36368),args);
});})(g__28533__auto___36368))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__28533__auto___36368){
return (function (seq36299){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36299));
});})(g__28533__auto___36368))
;

var g__28546__auto___36393 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__28546__auto___36393){
return (function cljs$spec$impl$gen$any(var_args){
var args__27089__auto__ = [];
var len__27082__auto___36394 = arguments.length;
var i__27083__auto___36395 = (0);
while(true){
if((i__27083__auto___36395 < len__27082__auto___36394)){
args__27089__auto__.push((arguments[i__27083__auto___36395]));

var G__36396 = (i__27083__auto___36395 + (1));
i__27083__auto___36395 = G__36396;
continue;
} else {
}
break;
}

var argseq__27090__auto__ = ((((0) < args__27089__auto__.length))?(new cljs.core.IndexedSeq(args__27089__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__27090__auto__);
});})(g__28546__auto___36393))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28546__auto___36393){
return (function (args){
return cljs.core.deref.call(null,g__28546__auto___36393);
});})(g__28546__auto___36393))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__28546__auto___36393){
return (function (seq36372){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36372));
});})(g__28546__auto___36393))
;


var g__28546__auto___36397 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__28546__auto___36397){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__27089__auto__ = [];
var len__27082__auto___36398 = arguments.length;
var i__27083__auto___36399 = (0);
while(true){
if((i__27083__auto___36399 < len__27082__auto___36398)){
args__27089__auto__.push((arguments[i__27083__auto___36399]));

var G__36400 = (i__27083__auto___36399 + (1));
i__27083__auto___36399 = G__36400;
continue;
} else {
}
break;
}

var argseq__27090__auto__ = ((((0) < args__27089__auto__.length))?(new cljs.core.IndexedSeq(args__27089__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__27090__auto__);
});})(g__28546__auto___36397))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28546__auto___36397){
return (function (args){
return cljs.core.deref.call(null,g__28546__auto___36397);
});})(g__28546__auto___36397))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__28546__auto___36397){
return (function (seq36373){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36373));
});})(g__28546__auto___36397))
;


var g__28546__auto___36401 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__28546__auto___36401){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__27089__auto__ = [];
var len__27082__auto___36402 = arguments.length;
var i__27083__auto___36403 = (0);
while(true){
if((i__27083__auto___36403 < len__27082__auto___36402)){
args__27089__auto__.push((arguments[i__27083__auto___36403]));

var G__36404 = (i__27083__auto___36403 + (1));
i__27083__auto___36403 = G__36404;
continue;
} else {
}
break;
}

var argseq__27090__auto__ = ((((0) < args__27089__auto__.length))?(new cljs.core.IndexedSeq(args__27089__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__27090__auto__);
});})(g__28546__auto___36401))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28546__auto___36401){
return (function (args){
return cljs.core.deref.call(null,g__28546__auto___36401);
});})(g__28546__auto___36401))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__28546__auto___36401){
return (function (seq36374){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36374));
});})(g__28546__auto___36401))
;


var g__28546__auto___36405 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__28546__auto___36405){
return (function cljs$spec$impl$gen$char(var_args){
var args__27089__auto__ = [];
var len__27082__auto___36406 = arguments.length;
var i__27083__auto___36407 = (0);
while(true){
if((i__27083__auto___36407 < len__27082__auto___36406)){
args__27089__auto__.push((arguments[i__27083__auto___36407]));

var G__36408 = (i__27083__auto___36407 + (1));
i__27083__auto___36407 = G__36408;
continue;
} else {
}
break;
}

var argseq__27090__auto__ = ((((0) < args__27089__auto__.length))?(new cljs.core.IndexedSeq(args__27089__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__27090__auto__);
});})(g__28546__auto___36405))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28546__auto___36405){
return (function (args){
return cljs.core.deref.call(null,g__28546__auto___36405);
});})(g__28546__auto___36405))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__28546__auto___36405){
return (function (seq36375){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36375));
});})(g__28546__auto___36405))
;


var g__28546__auto___36409 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__28546__auto___36409){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__27089__auto__ = [];
var len__27082__auto___36410 = arguments.length;
var i__27083__auto___36411 = (0);
while(true){
if((i__27083__auto___36411 < len__27082__auto___36410)){
args__27089__auto__.push((arguments[i__27083__auto___36411]));

var G__36412 = (i__27083__auto___36411 + (1));
i__27083__auto___36411 = G__36412;
continue;
} else {
}
break;
}

var argseq__27090__auto__ = ((((0) < args__27089__auto__.length))?(new cljs.core.IndexedSeq(args__27089__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__27090__auto__);
});})(g__28546__auto___36409))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28546__auto___36409){
return (function (args){
return cljs.core.deref.call(null,g__28546__auto___36409);
});})(g__28546__auto___36409))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__28546__auto___36409){
return (function (seq36376){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36376));
});})(g__28546__auto___36409))
;


var g__28546__auto___36413 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__28546__auto___36413){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__27089__auto__ = [];
var len__27082__auto___36414 = arguments.length;
var i__27083__auto___36415 = (0);
while(true){
if((i__27083__auto___36415 < len__27082__auto___36414)){
args__27089__auto__.push((arguments[i__27083__auto___36415]));

var G__36416 = (i__27083__auto___36415 + (1));
i__27083__auto___36415 = G__36416;
continue;
} else {
}
break;
}

var argseq__27090__auto__ = ((((0) < args__27089__auto__.length))?(new cljs.core.IndexedSeq(args__27089__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__27090__auto__);
});})(g__28546__auto___36413))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28546__auto___36413){
return (function (args){
return cljs.core.deref.call(null,g__28546__auto___36413);
});})(g__28546__auto___36413))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__28546__auto___36413){
return (function (seq36377){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36377));
});})(g__28546__auto___36413))
;


var g__28546__auto___36417 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__28546__auto___36417){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__27089__auto__ = [];
var len__27082__auto___36418 = arguments.length;
var i__27083__auto___36419 = (0);
while(true){
if((i__27083__auto___36419 < len__27082__auto___36418)){
args__27089__auto__.push((arguments[i__27083__auto___36419]));

var G__36420 = (i__27083__auto___36419 + (1));
i__27083__auto___36419 = G__36420;
continue;
} else {
}
break;
}

var argseq__27090__auto__ = ((((0) < args__27089__auto__.length))?(new cljs.core.IndexedSeq(args__27089__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__27090__auto__);
});})(g__28546__auto___36417))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28546__auto___36417){
return (function (args){
return cljs.core.deref.call(null,g__28546__auto___36417);
});})(g__28546__auto___36417))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__28546__auto___36417){
return (function (seq36378){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36378));
});})(g__28546__auto___36417))
;


var g__28546__auto___36421 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__28546__auto___36421){
return (function cljs$spec$impl$gen$double(var_args){
var args__27089__auto__ = [];
var len__27082__auto___36422 = arguments.length;
var i__27083__auto___36423 = (0);
while(true){
if((i__27083__auto___36423 < len__27082__auto___36422)){
args__27089__auto__.push((arguments[i__27083__auto___36423]));

var G__36424 = (i__27083__auto___36423 + (1));
i__27083__auto___36423 = G__36424;
continue;
} else {
}
break;
}

var argseq__27090__auto__ = ((((0) < args__27089__auto__.length))?(new cljs.core.IndexedSeq(args__27089__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__27090__auto__);
});})(g__28546__auto___36421))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28546__auto___36421){
return (function (args){
return cljs.core.deref.call(null,g__28546__auto___36421);
});})(g__28546__auto___36421))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__28546__auto___36421){
return (function (seq36379){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36379));
});})(g__28546__auto___36421))
;


var g__28546__auto___36425 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__28546__auto___36425){
return (function cljs$spec$impl$gen$int(var_args){
var args__27089__auto__ = [];
var len__27082__auto___36426 = arguments.length;
var i__27083__auto___36427 = (0);
while(true){
if((i__27083__auto___36427 < len__27082__auto___36426)){
args__27089__auto__.push((arguments[i__27083__auto___36427]));

var G__36428 = (i__27083__auto___36427 + (1));
i__27083__auto___36427 = G__36428;
continue;
} else {
}
break;
}

var argseq__27090__auto__ = ((((0) < args__27089__auto__.length))?(new cljs.core.IndexedSeq(args__27089__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__27090__auto__);
});})(g__28546__auto___36425))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28546__auto___36425){
return (function (args){
return cljs.core.deref.call(null,g__28546__auto___36425);
});})(g__28546__auto___36425))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__28546__auto___36425){
return (function (seq36380){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36380));
});})(g__28546__auto___36425))
;


var g__28546__auto___36429 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__28546__auto___36429){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__27089__auto__ = [];
var len__27082__auto___36430 = arguments.length;
var i__27083__auto___36431 = (0);
while(true){
if((i__27083__auto___36431 < len__27082__auto___36430)){
args__27089__auto__.push((arguments[i__27083__auto___36431]));

var G__36432 = (i__27083__auto___36431 + (1));
i__27083__auto___36431 = G__36432;
continue;
} else {
}
break;
}

var argseq__27090__auto__ = ((((0) < args__27089__auto__.length))?(new cljs.core.IndexedSeq(args__27089__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__27090__auto__);
});})(g__28546__auto___36429))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28546__auto___36429){
return (function (args){
return cljs.core.deref.call(null,g__28546__auto___36429);
});})(g__28546__auto___36429))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__28546__auto___36429){
return (function (seq36381){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36381));
});})(g__28546__auto___36429))
;


var g__28546__auto___36433 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__28546__auto___36433){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__27089__auto__ = [];
var len__27082__auto___36434 = arguments.length;
var i__27083__auto___36435 = (0);
while(true){
if((i__27083__auto___36435 < len__27082__auto___36434)){
args__27089__auto__.push((arguments[i__27083__auto___36435]));

var G__36436 = (i__27083__auto___36435 + (1));
i__27083__auto___36435 = G__36436;
continue;
} else {
}
break;
}

var argseq__27090__auto__ = ((((0) < args__27089__auto__.length))?(new cljs.core.IndexedSeq(args__27089__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__27090__auto__);
});})(g__28546__auto___36433))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28546__auto___36433){
return (function (args){
return cljs.core.deref.call(null,g__28546__auto___36433);
});})(g__28546__auto___36433))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__28546__auto___36433){
return (function (seq36382){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36382));
});})(g__28546__auto___36433))
;


var g__28546__auto___36437 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__28546__auto___36437){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__27089__auto__ = [];
var len__27082__auto___36438 = arguments.length;
var i__27083__auto___36439 = (0);
while(true){
if((i__27083__auto___36439 < len__27082__auto___36438)){
args__27089__auto__.push((arguments[i__27083__auto___36439]));

var G__36440 = (i__27083__auto___36439 + (1));
i__27083__auto___36439 = G__36440;
continue;
} else {
}
break;
}

var argseq__27090__auto__ = ((((0) < args__27089__auto__.length))?(new cljs.core.IndexedSeq(args__27089__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__27090__auto__);
});})(g__28546__auto___36437))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28546__auto___36437){
return (function (args){
return cljs.core.deref.call(null,g__28546__auto___36437);
});})(g__28546__auto___36437))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__28546__auto___36437){
return (function (seq36383){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36383));
});})(g__28546__auto___36437))
;


var g__28546__auto___36441 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__28546__auto___36441){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__27089__auto__ = [];
var len__27082__auto___36442 = arguments.length;
var i__27083__auto___36443 = (0);
while(true){
if((i__27083__auto___36443 < len__27082__auto___36442)){
args__27089__auto__.push((arguments[i__27083__auto___36443]));

var G__36444 = (i__27083__auto___36443 + (1));
i__27083__auto___36443 = G__36444;
continue;
} else {
}
break;
}

var argseq__27090__auto__ = ((((0) < args__27089__auto__.length))?(new cljs.core.IndexedSeq(args__27089__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__27090__auto__);
});})(g__28546__auto___36441))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28546__auto___36441){
return (function (args){
return cljs.core.deref.call(null,g__28546__auto___36441);
});})(g__28546__auto___36441))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__28546__auto___36441){
return (function (seq36384){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36384));
});})(g__28546__auto___36441))
;


var g__28546__auto___36445 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__28546__auto___36445){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__27089__auto__ = [];
var len__27082__auto___36446 = arguments.length;
var i__27083__auto___36447 = (0);
while(true){
if((i__27083__auto___36447 < len__27082__auto___36446)){
args__27089__auto__.push((arguments[i__27083__auto___36447]));

var G__36448 = (i__27083__auto___36447 + (1));
i__27083__auto___36447 = G__36448;
continue;
} else {
}
break;
}

var argseq__27090__auto__ = ((((0) < args__27089__auto__.length))?(new cljs.core.IndexedSeq(args__27089__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__27090__auto__);
});})(g__28546__auto___36445))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28546__auto___36445){
return (function (args){
return cljs.core.deref.call(null,g__28546__auto___36445);
});})(g__28546__auto___36445))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__28546__auto___36445){
return (function (seq36385){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36385));
});})(g__28546__auto___36445))
;


var g__28546__auto___36449 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__28546__auto___36449){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__27089__auto__ = [];
var len__27082__auto___36450 = arguments.length;
var i__27083__auto___36451 = (0);
while(true){
if((i__27083__auto___36451 < len__27082__auto___36450)){
args__27089__auto__.push((arguments[i__27083__auto___36451]));

var G__36452 = (i__27083__auto___36451 + (1));
i__27083__auto___36451 = G__36452;
continue;
} else {
}
break;
}

var argseq__27090__auto__ = ((((0) < args__27089__auto__.length))?(new cljs.core.IndexedSeq(args__27089__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__27090__auto__);
});})(g__28546__auto___36449))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28546__auto___36449){
return (function (args){
return cljs.core.deref.call(null,g__28546__auto___36449);
});})(g__28546__auto___36449))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__28546__auto___36449){
return (function (seq36386){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36386));
});})(g__28546__auto___36449))
;


var g__28546__auto___36453 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__28546__auto___36453){
return (function cljs$spec$impl$gen$string(var_args){
var args__27089__auto__ = [];
var len__27082__auto___36454 = arguments.length;
var i__27083__auto___36455 = (0);
while(true){
if((i__27083__auto___36455 < len__27082__auto___36454)){
args__27089__auto__.push((arguments[i__27083__auto___36455]));

var G__36456 = (i__27083__auto___36455 + (1));
i__27083__auto___36455 = G__36456;
continue;
} else {
}
break;
}

var argseq__27090__auto__ = ((((0) < args__27089__auto__.length))?(new cljs.core.IndexedSeq(args__27089__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__27090__auto__);
});})(g__28546__auto___36453))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28546__auto___36453){
return (function (args){
return cljs.core.deref.call(null,g__28546__auto___36453);
});})(g__28546__auto___36453))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__28546__auto___36453){
return (function (seq36387){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36387));
});})(g__28546__auto___36453))
;


var g__28546__auto___36457 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__28546__auto___36457){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__27089__auto__ = [];
var len__27082__auto___36458 = arguments.length;
var i__27083__auto___36459 = (0);
while(true){
if((i__27083__auto___36459 < len__27082__auto___36458)){
args__27089__auto__.push((arguments[i__27083__auto___36459]));

var G__36460 = (i__27083__auto___36459 + (1));
i__27083__auto___36459 = G__36460;
continue;
} else {
}
break;
}

var argseq__27090__auto__ = ((((0) < args__27089__auto__.length))?(new cljs.core.IndexedSeq(args__27089__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__27090__auto__);
});})(g__28546__auto___36457))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28546__auto___36457){
return (function (args){
return cljs.core.deref.call(null,g__28546__auto___36457);
});})(g__28546__auto___36457))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__28546__auto___36457){
return (function (seq36388){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36388));
});})(g__28546__auto___36457))
;


var g__28546__auto___36461 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__28546__auto___36461){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__27089__auto__ = [];
var len__27082__auto___36462 = arguments.length;
var i__27083__auto___36463 = (0);
while(true){
if((i__27083__auto___36463 < len__27082__auto___36462)){
args__27089__auto__.push((arguments[i__27083__auto___36463]));

var G__36464 = (i__27083__auto___36463 + (1));
i__27083__auto___36463 = G__36464;
continue;
} else {
}
break;
}

var argseq__27090__auto__ = ((((0) < args__27089__auto__.length))?(new cljs.core.IndexedSeq(args__27089__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__27090__auto__);
});})(g__28546__auto___36461))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28546__auto___36461){
return (function (args){
return cljs.core.deref.call(null,g__28546__auto___36461);
});})(g__28546__auto___36461))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__28546__auto___36461){
return (function (seq36389){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36389));
});})(g__28546__auto___36461))
;


var g__28546__auto___36465 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__28546__auto___36465){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__27089__auto__ = [];
var len__27082__auto___36466 = arguments.length;
var i__27083__auto___36467 = (0);
while(true){
if((i__27083__auto___36467 < len__27082__auto___36466)){
args__27089__auto__.push((arguments[i__27083__auto___36467]));

var G__36468 = (i__27083__auto___36467 + (1));
i__27083__auto___36467 = G__36468;
continue;
} else {
}
break;
}

var argseq__27090__auto__ = ((((0) < args__27089__auto__.length))?(new cljs.core.IndexedSeq(args__27089__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__27090__auto__);
});})(g__28546__auto___36465))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28546__auto___36465){
return (function (args){
return cljs.core.deref.call(null,g__28546__auto___36465);
});})(g__28546__auto___36465))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__28546__auto___36465){
return (function (seq36390){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36390));
});})(g__28546__auto___36465))
;


var g__28546__auto___36469 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__28546__auto___36469){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__27089__auto__ = [];
var len__27082__auto___36470 = arguments.length;
var i__27083__auto___36471 = (0);
while(true){
if((i__27083__auto___36471 < len__27082__auto___36470)){
args__27089__auto__.push((arguments[i__27083__auto___36471]));

var G__36472 = (i__27083__auto___36471 + (1));
i__27083__auto___36471 = G__36472;
continue;
} else {
}
break;
}

var argseq__27090__auto__ = ((((0) < args__27089__auto__.length))?(new cljs.core.IndexedSeq(args__27089__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__27090__auto__);
});})(g__28546__auto___36469))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28546__auto___36469){
return (function (args){
return cljs.core.deref.call(null,g__28546__auto___36469);
});})(g__28546__auto___36469))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__28546__auto___36469){
return (function (seq36391){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36391));
});})(g__28546__auto___36469))
;


var g__28546__auto___36473 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__28546__auto___36473){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__27089__auto__ = [];
var len__27082__auto___36474 = arguments.length;
var i__27083__auto___36475 = (0);
while(true){
if((i__27083__auto___36475 < len__27082__auto___36474)){
args__27089__auto__.push((arguments[i__27083__auto___36475]));

var G__36476 = (i__27083__auto___36475 + (1));
i__27083__auto___36475 = G__36476;
continue;
} else {
}
break;
}

var argseq__27090__auto__ = ((((0) < args__27089__auto__.length))?(new cljs.core.IndexedSeq(args__27089__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__27090__auto__);
});})(g__28546__auto___36473))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28546__auto___36473){
return (function (args){
return cljs.core.deref.call(null,g__28546__auto___36473);
});})(g__28546__auto___36473))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__28546__auto___36473){
return (function (seq36392){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36392));
});})(g__28546__auto___36473))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__27089__auto__ = [];
var len__27082__auto___36479 = arguments.length;
var i__27083__auto___36480 = (0);
while(true){
if((i__27083__auto___36480 < len__27082__auto___36479)){
args__27089__auto__.push((arguments[i__27083__auto___36480]));

var G__36481 = (i__27083__auto___36480 + (1));
i__27083__auto___36480 = G__36481;
continue;
} else {
}
break;
}

var argseq__27090__auto__ = ((((0) < args__27089__auto__.length))?(new cljs.core.IndexedSeq(args__27089__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__27090__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__36477_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__36477_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq36478){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36478));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__36482_SHARP_){
return (new Date(p1__36482_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1480126466853