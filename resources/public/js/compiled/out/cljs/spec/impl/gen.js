// Compiled by ClojureScript 1.9.89 {}
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

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__26182__auto__,writer__26183__auto__,opt__26184__auto__){
return cljs.core._write.call(null,writer__26183__auto__,"cljs.spec.impl.gen/LazyVar");
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
var args__26658__auto__ = [];
var len__26651__auto___36125 = arguments.length;
var i__26652__auto___36126 = (0);
while(true){
if((i__26652__auto___36126 < len__26651__auto___36125)){
args__26658__auto__.push((arguments[i__26652__auto___36126]));

var G__36127 = (i__26652__auto___36126 + (1));
i__26652__auto___36126 = G__36127;
continue;
} else {
}
break;
}

var argseq__26659__auto__ = ((((0) < args__26658__auto__.length))?(new cljs.core.IndexedSeq(args__26658__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__26659__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq36124){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36124));
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
var args__26658__auto__ = [];
var len__26651__auto___36129 = arguments.length;
var i__26652__auto___36130 = (0);
while(true){
if((i__26652__auto___36130 < len__26651__auto___36129)){
args__26658__auto__.push((arguments[i__26652__auto___36130]));

var G__36131 = (i__26652__auto___36130 + (1));
i__26652__auto___36130 = G__36131;
continue;
} else {
}
break;
}

var argseq__26659__auto__ = ((((0) < args__26658__auto__.length))?(new cljs.core.IndexedSeq(args__26658__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__26659__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq36128){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36128));
});

var g_QMARK__36132 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_36133 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__36132){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__36132))
,null));
var mkg_36134 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__36132,g_36133){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__36132,g_36133))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__36132,g_36133,mkg_36134){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__36132).call(null,x);
});})(g_QMARK__36132,g_36133,mkg_36134))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__36132,g_36133,mkg_36134){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_36134).call(null,gfn);
});})(g_QMARK__36132,g_36133,mkg_36134))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__36132,g_36133,mkg_36134){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_36133).call(null,generator);
});})(g_QMARK__36132,g_36133,mkg_36134))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__28406__auto___36152 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__28406__auto___36152){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__26658__auto__ = [];
var len__26651__auto___36153 = arguments.length;
var i__26652__auto___36154 = (0);
while(true){
if((i__26652__auto___36154 < len__26651__auto___36153)){
args__26658__auto__.push((arguments[i__26652__auto___36154]));

var G__36155 = (i__26652__auto___36154 + (1));
i__26652__auto___36154 = G__36155;
continue;
} else {
}
break;
}

var argseq__26659__auto__ = ((((0) < args__26658__auto__.length))?(new cljs.core.IndexedSeq(args__26658__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__26659__auto__);
});})(g__28406__auto___36152))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28406__auto___36152){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28406__auto___36152),args);
});})(g__28406__auto___36152))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__28406__auto___36152){
return (function (seq36135){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36135));
});})(g__28406__auto___36152))
;


var g__28406__auto___36156 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__28406__auto___36156){
return (function cljs$spec$impl$gen$list(var_args){
var args__26658__auto__ = [];
var len__26651__auto___36157 = arguments.length;
var i__26652__auto___36158 = (0);
while(true){
if((i__26652__auto___36158 < len__26651__auto___36157)){
args__26658__auto__.push((arguments[i__26652__auto___36158]));

var G__36159 = (i__26652__auto___36158 + (1));
i__26652__auto___36158 = G__36159;
continue;
} else {
}
break;
}

var argseq__26659__auto__ = ((((0) < args__26658__auto__.length))?(new cljs.core.IndexedSeq(args__26658__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__26659__auto__);
});})(g__28406__auto___36156))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28406__auto___36156){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28406__auto___36156),args);
});})(g__28406__auto___36156))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__28406__auto___36156){
return (function (seq36136){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36136));
});})(g__28406__auto___36156))
;


var g__28406__auto___36160 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__28406__auto___36160){
return (function cljs$spec$impl$gen$map(var_args){
var args__26658__auto__ = [];
var len__26651__auto___36161 = arguments.length;
var i__26652__auto___36162 = (0);
while(true){
if((i__26652__auto___36162 < len__26651__auto___36161)){
args__26658__auto__.push((arguments[i__26652__auto___36162]));

var G__36163 = (i__26652__auto___36162 + (1));
i__26652__auto___36162 = G__36163;
continue;
} else {
}
break;
}

var argseq__26659__auto__ = ((((0) < args__26658__auto__.length))?(new cljs.core.IndexedSeq(args__26658__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__26659__auto__);
});})(g__28406__auto___36160))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28406__auto___36160){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28406__auto___36160),args);
});})(g__28406__auto___36160))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__28406__auto___36160){
return (function (seq36137){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36137));
});})(g__28406__auto___36160))
;


var g__28406__auto___36164 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__28406__auto___36164){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__26658__auto__ = [];
var len__26651__auto___36165 = arguments.length;
var i__26652__auto___36166 = (0);
while(true){
if((i__26652__auto___36166 < len__26651__auto___36165)){
args__26658__auto__.push((arguments[i__26652__auto___36166]));

var G__36167 = (i__26652__auto___36166 + (1));
i__26652__auto___36166 = G__36167;
continue;
} else {
}
break;
}

var argseq__26659__auto__ = ((((0) < args__26658__auto__.length))?(new cljs.core.IndexedSeq(args__26658__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__26659__auto__);
});})(g__28406__auto___36164))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28406__auto___36164){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28406__auto___36164),args);
});})(g__28406__auto___36164))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__28406__auto___36164){
return (function (seq36138){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36138));
});})(g__28406__auto___36164))
;


var g__28406__auto___36168 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__28406__auto___36168){
return (function cljs$spec$impl$gen$set(var_args){
var args__26658__auto__ = [];
var len__26651__auto___36169 = arguments.length;
var i__26652__auto___36170 = (0);
while(true){
if((i__26652__auto___36170 < len__26651__auto___36169)){
args__26658__auto__.push((arguments[i__26652__auto___36170]));

var G__36171 = (i__26652__auto___36170 + (1));
i__26652__auto___36170 = G__36171;
continue;
} else {
}
break;
}

var argseq__26659__auto__ = ((((0) < args__26658__auto__.length))?(new cljs.core.IndexedSeq(args__26658__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__26659__auto__);
});})(g__28406__auto___36168))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28406__auto___36168){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28406__auto___36168),args);
});})(g__28406__auto___36168))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__28406__auto___36168){
return (function (seq36139){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36139));
});})(g__28406__auto___36168))
;


var g__28406__auto___36172 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__28406__auto___36172){
return (function cljs$spec$impl$gen$vector(var_args){
var args__26658__auto__ = [];
var len__26651__auto___36173 = arguments.length;
var i__26652__auto___36174 = (0);
while(true){
if((i__26652__auto___36174 < len__26651__auto___36173)){
args__26658__auto__.push((arguments[i__26652__auto___36174]));

var G__36175 = (i__26652__auto___36174 + (1));
i__26652__auto___36174 = G__36175;
continue;
} else {
}
break;
}

var argseq__26659__auto__ = ((((0) < args__26658__auto__.length))?(new cljs.core.IndexedSeq(args__26658__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__26659__auto__);
});})(g__28406__auto___36172))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28406__auto___36172){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28406__auto___36172),args);
});})(g__28406__auto___36172))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__28406__auto___36172){
return (function (seq36140){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36140));
});})(g__28406__auto___36172))
;


var g__28406__auto___36176 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__28406__auto___36176){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__26658__auto__ = [];
var len__26651__auto___36177 = arguments.length;
var i__26652__auto___36178 = (0);
while(true){
if((i__26652__auto___36178 < len__26651__auto___36177)){
args__26658__auto__.push((arguments[i__26652__auto___36178]));

var G__36179 = (i__26652__auto___36178 + (1));
i__26652__auto___36178 = G__36179;
continue;
} else {
}
break;
}

var argseq__26659__auto__ = ((((0) < args__26658__auto__.length))?(new cljs.core.IndexedSeq(args__26658__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__26659__auto__);
});})(g__28406__auto___36176))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28406__auto___36176){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28406__auto___36176),args);
});})(g__28406__auto___36176))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__28406__auto___36176){
return (function (seq36141){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36141));
});})(g__28406__auto___36176))
;


var g__28406__auto___36180 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__28406__auto___36180){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__26658__auto__ = [];
var len__26651__auto___36181 = arguments.length;
var i__26652__auto___36182 = (0);
while(true){
if((i__26652__auto___36182 < len__26651__auto___36181)){
args__26658__auto__.push((arguments[i__26652__auto___36182]));

var G__36183 = (i__26652__auto___36182 + (1));
i__26652__auto___36182 = G__36183;
continue;
} else {
}
break;
}

var argseq__26659__auto__ = ((((0) < args__26658__auto__.length))?(new cljs.core.IndexedSeq(args__26658__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__26659__auto__);
});})(g__28406__auto___36180))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28406__auto___36180){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28406__auto___36180),args);
});})(g__28406__auto___36180))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__28406__auto___36180){
return (function (seq36142){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36142));
});})(g__28406__auto___36180))
;


var g__28406__auto___36184 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__28406__auto___36184){
return (function cljs$spec$impl$gen$elements(var_args){
var args__26658__auto__ = [];
var len__26651__auto___36185 = arguments.length;
var i__26652__auto___36186 = (0);
while(true){
if((i__26652__auto___36186 < len__26651__auto___36185)){
args__26658__auto__.push((arguments[i__26652__auto___36186]));

var G__36187 = (i__26652__auto___36186 + (1));
i__26652__auto___36186 = G__36187;
continue;
} else {
}
break;
}

var argseq__26659__auto__ = ((((0) < args__26658__auto__.length))?(new cljs.core.IndexedSeq(args__26658__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__26659__auto__);
});})(g__28406__auto___36184))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28406__auto___36184){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28406__auto___36184),args);
});})(g__28406__auto___36184))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__28406__auto___36184){
return (function (seq36143){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36143));
});})(g__28406__auto___36184))
;


var g__28406__auto___36188 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__28406__auto___36188){
return (function cljs$spec$impl$gen$bind(var_args){
var args__26658__auto__ = [];
var len__26651__auto___36189 = arguments.length;
var i__26652__auto___36190 = (0);
while(true){
if((i__26652__auto___36190 < len__26651__auto___36189)){
args__26658__auto__.push((arguments[i__26652__auto___36190]));

var G__36191 = (i__26652__auto___36190 + (1));
i__26652__auto___36190 = G__36191;
continue;
} else {
}
break;
}

var argseq__26659__auto__ = ((((0) < args__26658__auto__.length))?(new cljs.core.IndexedSeq(args__26658__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__26659__auto__);
});})(g__28406__auto___36188))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28406__auto___36188){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28406__auto___36188),args);
});})(g__28406__auto___36188))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__28406__auto___36188){
return (function (seq36144){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36144));
});})(g__28406__auto___36188))
;


var g__28406__auto___36192 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__28406__auto___36192){
return (function cljs$spec$impl$gen$choose(var_args){
var args__26658__auto__ = [];
var len__26651__auto___36193 = arguments.length;
var i__26652__auto___36194 = (0);
while(true){
if((i__26652__auto___36194 < len__26651__auto___36193)){
args__26658__auto__.push((arguments[i__26652__auto___36194]));

var G__36195 = (i__26652__auto___36194 + (1));
i__26652__auto___36194 = G__36195;
continue;
} else {
}
break;
}

var argseq__26659__auto__ = ((((0) < args__26658__auto__.length))?(new cljs.core.IndexedSeq(args__26658__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__26659__auto__);
});})(g__28406__auto___36192))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28406__auto___36192){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28406__auto___36192),args);
});})(g__28406__auto___36192))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__28406__auto___36192){
return (function (seq36145){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36145));
});})(g__28406__auto___36192))
;


var g__28406__auto___36196 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__28406__auto___36196){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__26658__auto__ = [];
var len__26651__auto___36197 = arguments.length;
var i__26652__auto___36198 = (0);
while(true){
if((i__26652__auto___36198 < len__26651__auto___36197)){
args__26658__auto__.push((arguments[i__26652__auto___36198]));

var G__36199 = (i__26652__auto___36198 + (1));
i__26652__auto___36198 = G__36199;
continue;
} else {
}
break;
}

var argseq__26659__auto__ = ((((0) < args__26658__auto__.length))?(new cljs.core.IndexedSeq(args__26658__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__26659__auto__);
});})(g__28406__auto___36196))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28406__auto___36196){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28406__auto___36196),args);
});})(g__28406__auto___36196))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__28406__auto___36196){
return (function (seq36146){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36146));
});})(g__28406__auto___36196))
;


var g__28406__auto___36200 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__28406__auto___36200){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__26658__auto__ = [];
var len__26651__auto___36201 = arguments.length;
var i__26652__auto___36202 = (0);
while(true){
if((i__26652__auto___36202 < len__26651__auto___36201)){
args__26658__auto__.push((arguments[i__26652__auto___36202]));

var G__36203 = (i__26652__auto___36202 + (1));
i__26652__auto___36202 = G__36203;
continue;
} else {
}
break;
}

var argseq__26659__auto__ = ((((0) < args__26658__auto__.length))?(new cljs.core.IndexedSeq(args__26658__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__26659__auto__);
});})(g__28406__auto___36200))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28406__auto___36200){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28406__auto___36200),args);
});})(g__28406__auto___36200))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__28406__auto___36200){
return (function (seq36147){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36147));
});})(g__28406__auto___36200))
;


var g__28406__auto___36204 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__28406__auto___36204){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__26658__auto__ = [];
var len__26651__auto___36205 = arguments.length;
var i__26652__auto___36206 = (0);
while(true){
if((i__26652__auto___36206 < len__26651__auto___36205)){
args__26658__auto__.push((arguments[i__26652__auto___36206]));

var G__36207 = (i__26652__auto___36206 + (1));
i__26652__auto___36206 = G__36207;
continue;
} else {
}
break;
}

var argseq__26659__auto__ = ((((0) < args__26658__auto__.length))?(new cljs.core.IndexedSeq(args__26658__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__26659__auto__);
});})(g__28406__auto___36204))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28406__auto___36204){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28406__auto___36204),args);
});})(g__28406__auto___36204))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__28406__auto___36204){
return (function (seq36148){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36148));
});})(g__28406__auto___36204))
;


var g__28406__auto___36208 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__28406__auto___36208){
return (function cljs$spec$impl$gen$sample(var_args){
var args__26658__auto__ = [];
var len__26651__auto___36209 = arguments.length;
var i__26652__auto___36210 = (0);
while(true){
if((i__26652__auto___36210 < len__26651__auto___36209)){
args__26658__auto__.push((arguments[i__26652__auto___36210]));

var G__36211 = (i__26652__auto___36210 + (1));
i__26652__auto___36210 = G__36211;
continue;
} else {
}
break;
}

var argseq__26659__auto__ = ((((0) < args__26658__auto__.length))?(new cljs.core.IndexedSeq(args__26658__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__26659__auto__);
});})(g__28406__auto___36208))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28406__auto___36208){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28406__auto___36208),args);
});})(g__28406__auto___36208))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__28406__auto___36208){
return (function (seq36149){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36149));
});})(g__28406__auto___36208))
;


var g__28406__auto___36212 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__28406__auto___36212){
return (function cljs$spec$impl$gen$return(var_args){
var args__26658__auto__ = [];
var len__26651__auto___36213 = arguments.length;
var i__26652__auto___36214 = (0);
while(true){
if((i__26652__auto___36214 < len__26651__auto___36213)){
args__26658__auto__.push((arguments[i__26652__auto___36214]));

var G__36215 = (i__26652__auto___36214 + (1));
i__26652__auto___36214 = G__36215;
continue;
} else {
}
break;
}

var argseq__26659__auto__ = ((((0) < args__26658__auto__.length))?(new cljs.core.IndexedSeq(args__26658__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__26659__auto__);
});})(g__28406__auto___36212))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28406__auto___36212){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28406__auto___36212),args);
});})(g__28406__auto___36212))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__28406__auto___36212){
return (function (seq36150){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36150));
});})(g__28406__auto___36212))
;


var g__28406__auto___36216 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__28406__auto___36216){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__26658__auto__ = [];
var len__26651__auto___36217 = arguments.length;
var i__26652__auto___36218 = (0);
while(true){
if((i__26652__auto___36218 < len__26651__auto___36217)){
args__26658__auto__.push((arguments[i__26652__auto___36218]));

var G__36219 = (i__26652__auto___36218 + (1));
i__26652__auto___36218 = G__36219;
continue;
} else {
}
break;
}

var argseq__26659__auto__ = ((((0) < args__26658__auto__.length))?(new cljs.core.IndexedSeq(args__26658__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__26659__auto__);
});})(g__28406__auto___36216))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28406__auto___36216){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28406__auto___36216),args);
});})(g__28406__auto___36216))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__28406__auto___36216){
return (function (seq36151){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36151));
});})(g__28406__auto___36216))
;

var g__28419__auto___36241 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__28419__auto___36241){
return (function cljs$spec$impl$gen$any(var_args){
var args__26658__auto__ = [];
var len__26651__auto___36242 = arguments.length;
var i__26652__auto___36243 = (0);
while(true){
if((i__26652__auto___36243 < len__26651__auto___36242)){
args__26658__auto__.push((arguments[i__26652__auto___36243]));

var G__36244 = (i__26652__auto___36243 + (1));
i__26652__auto___36243 = G__36244;
continue;
} else {
}
break;
}

var argseq__26659__auto__ = ((((0) < args__26658__auto__.length))?(new cljs.core.IndexedSeq(args__26658__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__26659__auto__);
});})(g__28419__auto___36241))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28419__auto___36241){
return (function (args){
return cljs.core.deref.call(null,g__28419__auto___36241);
});})(g__28419__auto___36241))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__28419__auto___36241){
return (function (seq36220){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36220));
});})(g__28419__auto___36241))
;


var g__28419__auto___36245 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__28419__auto___36245){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__26658__auto__ = [];
var len__26651__auto___36246 = arguments.length;
var i__26652__auto___36247 = (0);
while(true){
if((i__26652__auto___36247 < len__26651__auto___36246)){
args__26658__auto__.push((arguments[i__26652__auto___36247]));

var G__36248 = (i__26652__auto___36247 + (1));
i__26652__auto___36247 = G__36248;
continue;
} else {
}
break;
}

var argseq__26659__auto__ = ((((0) < args__26658__auto__.length))?(new cljs.core.IndexedSeq(args__26658__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__26659__auto__);
});})(g__28419__auto___36245))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28419__auto___36245){
return (function (args){
return cljs.core.deref.call(null,g__28419__auto___36245);
});})(g__28419__auto___36245))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__28419__auto___36245){
return (function (seq36221){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36221));
});})(g__28419__auto___36245))
;


var g__28419__auto___36249 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__28419__auto___36249){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__26658__auto__ = [];
var len__26651__auto___36250 = arguments.length;
var i__26652__auto___36251 = (0);
while(true){
if((i__26652__auto___36251 < len__26651__auto___36250)){
args__26658__auto__.push((arguments[i__26652__auto___36251]));

var G__36252 = (i__26652__auto___36251 + (1));
i__26652__auto___36251 = G__36252;
continue;
} else {
}
break;
}

var argseq__26659__auto__ = ((((0) < args__26658__auto__.length))?(new cljs.core.IndexedSeq(args__26658__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__26659__auto__);
});})(g__28419__auto___36249))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28419__auto___36249){
return (function (args){
return cljs.core.deref.call(null,g__28419__auto___36249);
});})(g__28419__auto___36249))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__28419__auto___36249){
return (function (seq36222){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36222));
});})(g__28419__auto___36249))
;


var g__28419__auto___36253 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__28419__auto___36253){
return (function cljs$spec$impl$gen$char(var_args){
var args__26658__auto__ = [];
var len__26651__auto___36254 = arguments.length;
var i__26652__auto___36255 = (0);
while(true){
if((i__26652__auto___36255 < len__26651__auto___36254)){
args__26658__auto__.push((arguments[i__26652__auto___36255]));

var G__36256 = (i__26652__auto___36255 + (1));
i__26652__auto___36255 = G__36256;
continue;
} else {
}
break;
}

var argseq__26659__auto__ = ((((0) < args__26658__auto__.length))?(new cljs.core.IndexedSeq(args__26658__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__26659__auto__);
});})(g__28419__auto___36253))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28419__auto___36253){
return (function (args){
return cljs.core.deref.call(null,g__28419__auto___36253);
});})(g__28419__auto___36253))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__28419__auto___36253){
return (function (seq36223){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36223));
});})(g__28419__auto___36253))
;


var g__28419__auto___36257 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__28419__auto___36257){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__26658__auto__ = [];
var len__26651__auto___36258 = arguments.length;
var i__26652__auto___36259 = (0);
while(true){
if((i__26652__auto___36259 < len__26651__auto___36258)){
args__26658__auto__.push((arguments[i__26652__auto___36259]));

var G__36260 = (i__26652__auto___36259 + (1));
i__26652__auto___36259 = G__36260;
continue;
} else {
}
break;
}

var argseq__26659__auto__ = ((((0) < args__26658__auto__.length))?(new cljs.core.IndexedSeq(args__26658__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__26659__auto__);
});})(g__28419__auto___36257))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28419__auto___36257){
return (function (args){
return cljs.core.deref.call(null,g__28419__auto___36257);
});})(g__28419__auto___36257))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__28419__auto___36257){
return (function (seq36224){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36224));
});})(g__28419__auto___36257))
;


var g__28419__auto___36261 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__28419__auto___36261){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__26658__auto__ = [];
var len__26651__auto___36262 = arguments.length;
var i__26652__auto___36263 = (0);
while(true){
if((i__26652__auto___36263 < len__26651__auto___36262)){
args__26658__auto__.push((arguments[i__26652__auto___36263]));

var G__36264 = (i__26652__auto___36263 + (1));
i__26652__auto___36263 = G__36264;
continue;
} else {
}
break;
}

var argseq__26659__auto__ = ((((0) < args__26658__auto__.length))?(new cljs.core.IndexedSeq(args__26658__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__26659__auto__);
});})(g__28419__auto___36261))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28419__auto___36261){
return (function (args){
return cljs.core.deref.call(null,g__28419__auto___36261);
});})(g__28419__auto___36261))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__28419__auto___36261){
return (function (seq36225){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36225));
});})(g__28419__auto___36261))
;


var g__28419__auto___36265 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__28419__auto___36265){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__26658__auto__ = [];
var len__26651__auto___36266 = arguments.length;
var i__26652__auto___36267 = (0);
while(true){
if((i__26652__auto___36267 < len__26651__auto___36266)){
args__26658__auto__.push((arguments[i__26652__auto___36267]));

var G__36268 = (i__26652__auto___36267 + (1));
i__26652__auto___36267 = G__36268;
continue;
} else {
}
break;
}

var argseq__26659__auto__ = ((((0) < args__26658__auto__.length))?(new cljs.core.IndexedSeq(args__26658__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__26659__auto__);
});})(g__28419__auto___36265))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28419__auto___36265){
return (function (args){
return cljs.core.deref.call(null,g__28419__auto___36265);
});})(g__28419__auto___36265))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__28419__auto___36265){
return (function (seq36226){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36226));
});})(g__28419__auto___36265))
;


var g__28419__auto___36269 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__28419__auto___36269){
return (function cljs$spec$impl$gen$double(var_args){
var args__26658__auto__ = [];
var len__26651__auto___36270 = arguments.length;
var i__26652__auto___36271 = (0);
while(true){
if((i__26652__auto___36271 < len__26651__auto___36270)){
args__26658__auto__.push((arguments[i__26652__auto___36271]));

var G__36272 = (i__26652__auto___36271 + (1));
i__26652__auto___36271 = G__36272;
continue;
} else {
}
break;
}

var argseq__26659__auto__ = ((((0) < args__26658__auto__.length))?(new cljs.core.IndexedSeq(args__26658__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__26659__auto__);
});})(g__28419__auto___36269))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28419__auto___36269){
return (function (args){
return cljs.core.deref.call(null,g__28419__auto___36269);
});})(g__28419__auto___36269))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__28419__auto___36269){
return (function (seq36227){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36227));
});})(g__28419__auto___36269))
;


var g__28419__auto___36273 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__28419__auto___36273){
return (function cljs$spec$impl$gen$int(var_args){
var args__26658__auto__ = [];
var len__26651__auto___36274 = arguments.length;
var i__26652__auto___36275 = (0);
while(true){
if((i__26652__auto___36275 < len__26651__auto___36274)){
args__26658__auto__.push((arguments[i__26652__auto___36275]));

var G__36276 = (i__26652__auto___36275 + (1));
i__26652__auto___36275 = G__36276;
continue;
} else {
}
break;
}

var argseq__26659__auto__ = ((((0) < args__26658__auto__.length))?(new cljs.core.IndexedSeq(args__26658__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__26659__auto__);
});})(g__28419__auto___36273))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28419__auto___36273){
return (function (args){
return cljs.core.deref.call(null,g__28419__auto___36273);
});})(g__28419__auto___36273))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__28419__auto___36273){
return (function (seq36228){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36228));
});})(g__28419__auto___36273))
;


var g__28419__auto___36277 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__28419__auto___36277){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__26658__auto__ = [];
var len__26651__auto___36278 = arguments.length;
var i__26652__auto___36279 = (0);
while(true){
if((i__26652__auto___36279 < len__26651__auto___36278)){
args__26658__auto__.push((arguments[i__26652__auto___36279]));

var G__36280 = (i__26652__auto___36279 + (1));
i__26652__auto___36279 = G__36280;
continue;
} else {
}
break;
}

var argseq__26659__auto__ = ((((0) < args__26658__auto__.length))?(new cljs.core.IndexedSeq(args__26658__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__26659__auto__);
});})(g__28419__auto___36277))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28419__auto___36277){
return (function (args){
return cljs.core.deref.call(null,g__28419__auto___36277);
});})(g__28419__auto___36277))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__28419__auto___36277){
return (function (seq36229){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36229));
});})(g__28419__auto___36277))
;


var g__28419__auto___36281 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__28419__auto___36281){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__26658__auto__ = [];
var len__26651__auto___36282 = arguments.length;
var i__26652__auto___36283 = (0);
while(true){
if((i__26652__auto___36283 < len__26651__auto___36282)){
args__26658__auto__.push((arguments[i__26652__auto___36283]));

var G__36284 = (i__26652__auto___36283 + (1));
i__26652__auto___36283 = G__36284;
continue;
} else {
}
break;
}

var argseq__26659__auto__ = ((((0) < args__26658__auto__.length))?(new cljs.core.IndexedSeq(args__26658__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__26659__auto__);
});})(g__28419__auto___36281))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28419__auto___36281){
return (function (args){
return cljs.core.deref.call(null,g__28419__auto___36281);
});})(g__28419__auto___36281))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__28419__auto___36281){
return (function (seq36230){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36230));
});})(g__28419__auto___36281))
;


var g__28419__auto___36285 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__28419__auto___36285){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__26658__auto__ = [];
var len__26651__auto___36286 = arguments.length;
var i__26652__auto___36287 = (0);
while(true){
if((i__26652__auto___36287 < len__26651__auto___36286)){
args__26658__auto__.push((arguments[i__26652__auto___36287]));

var G__36288 = (i__26652__auto___36287 + (1));
i__26652__auto___36287 = G__36288;
continue;
} else {
}
break;
}

var argseq__26659__auto__ = ((((0) < args__26658__auto__.length))?(new cljs.core.IndexedSeq(args__26658__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__26659__auto__);
});})(g__28419__auto___36285))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28419__auto___36285){
return (function (args){
return cljs.core.deref.call(null,g__28419__auto___36285);
});})(g__28419__auto___36285))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__28419__auto___36285){
return (function (seq36231){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36231));
});})(g__28419__auto___36285))
;


var g__28419__auto___36289 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__28419__auto___36289){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__26658__auto__ = [];
var len__26651__auto___36290 = arguments.length;
var i__26652__auto___36291 = (0);
while(true){
if((i__26652__auto___36291 < len__26651__auto___36290)){
args__26658__auto__.push((arguments[i__26652__auto___36291]));

var G__36292 = (i__26652__auto___36291 + (1));
i__26652__auto___36291 = G__36292;
continue;
} else {
}
break;
}

var argseq__26659__auto__ = ((((0) < args__26658__auto__.length))?(new cljs.core.IndexedSeq(args__26658__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__26659__auto__);
});})(g__28419__auto___36289))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28419__auto___36289){
return (function (args){
return cljs.core.deref.call(null,g__28419__auto___36289);
});})(g__28419__auto___36289))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__28419__auto___36289){
return (function (seq36232){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36232));
});})(g__28419__auto___36289))
;


var g__28419__auto___36293 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__28419__auto___36293){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__26658__auto__ = [];
var len__26651__auto___36294 = arguments.length;
var i__26652__auto___36295 = (0);
while(true){
if((i__26652__auto___36295 < len__26651__auto___36294)){
args__26658__auto__.push((arguments[i__26652__auto___36295]));

var G__36296 = (i__26652__auto___36295 + (1));
i__26652__auto___36295 = G__36296;
continue;
} else {
}
break;
}

var argseq__26659__auto__ = ((((0) < args__26658__auto__.length))?(new cljs.core.IndexedSeq(args__26658__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__26659__auto__);
});})(g__28419__auto___36293))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28419__auto___36293){
return (function (args){
return cljs.core.deref.call(null,g__28419__auto___36293);
});})(g__28419__auto___36293))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__28419__auto___36293){
return (function (seq36233){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36233));
});})(g__28419__auto___36293))
;


var g__28419__auto___36297 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__28419__auto___36297){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__26658__auto__ = [];
var len__26651__auto___36298 = arguments.length;
var i__26652__auto___36299 = (0);
while(true){
if((i__26652__auto___36299 < len__26651__auto___36298)){
args__26658__auto__.push((arguments[i__26652__auto___36299]));

var G__36300 = (i__26652__auto___36299 + (1));
i__26652__auto___36299 = G__36300;
continue;
} else {
}
break;
}

var argseq__26659__auto__ = ((((0) < args__26658__auto__.length))?(new cljs.core.IndexedSeq(args__26658__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__26659__auto__);
});})(g__28419__auto___36297))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28419__auto___36297){
return (function (args){
return cljs.core.deref.call(null,g__28419__auto___36297);
});})(g__28419__auto___36297))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__28419__auto___36297){
return (function (seq36234){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36234));
});})(g__28419__auto___36297))
;


var g__28419__auto___36301 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__28419__auto___36301){
return (function cljs$spec$impl$gen$string(var_args){
var args__26658__auto__ = [];
var len__26651__auto___36302 = arguments.length;
var i__26652__auto___36303 = (0);
while(true){
if((i__26652__auto___36303 < len__26651__auto___36302)){
args__26658__auto__.push((arguments[i__26652__auto___36303]));

var G__36304 = (i__26652__auto___36303 + (1));
i__26652__auto___36303 = G__36304;
continue;
} else {
}
break;
}

var argseq__26659__auto__ = ((((0) < args__26658__auto__.length))?(new cljs.core.IndexedSeq(args__26658__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__26659__auto__);
});})(g__28419__auto___36301))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28419__auto___36301){
return (function (args){
return cljs.core.deref.call(null,g__28419__auto___36301);
});})(g__28419__auto___36301))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__28419__auto___36301){
return (function (seq36235){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36235));
});})(g__28419__auto___36301))
;


var g__28419__auto___36305 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__28419__auto___36305){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__26658__auto__ = [];
var len__26651__auto___36306 = arguments.length;
var i__26652__auto___36307 = (0);
while(true){
if((i__26652__auto___36307 < len__26651__auto___36306)){
args__26658__auto__.push((arguments[i__26652__auto___36307]));

var G__36308 = (i__26652__auto___36307 + (1));
i__26652__auto___36307 = G__36308;
continue;
} else {
}
break;
}

var argseq__26659__auto__ = ((((0) < args__26658__auto__.length))?(new cljs.core.IndexedSeq(args__26658__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__26659__auto__);
});})(g__28419__auto___36305))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28419__auto___36305){
return (function (args){
return cljs.core.deref.call(null,g__28419__auto___36305);
});})(g__28419__auto___36305))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__28419__auto___36305){
return (function (seq36236){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36236));
});})(g__28419__auto___36305))
;


var g__28419__auto___36309 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__28419__auto___36309){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__26658__auto__ = [];
var len__26651__auto___36310 = arguments.length;
var i__26652__auto___36311 = (0);
while(true){
if((i__26652__auto___36311 < len__26651__auto___36310)){
args__26658__auto__.push((arguments[i__26652__auto___36311]));

var G__36312 = (i__26652__auto___36311 + (1));
i__26652__auto___36311 = G__36312;
continue;
} else {
}
break;
}

var argseq__26659__auto__ = ((((0) < args__26658__auto__.length))?(new cljs.core.IndexedSeq(args__26658__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__26659__auto__);
});})(g__28419__auto___36309))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28419__auto___36309){
return (function (args){
return cljs.core.deref.call(null,g__28419__auto___36309);
});})(g__28419__auto___36309))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__28419__auto___36309){
return (function (seq36237){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36237));
});})(g__28419__auto___36309))
;


var g__28419__auto___36313 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__28419__auto___36313){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__26658__auto__ = [];
var len__26651__auto___36314 = arguments.length;
var i__26652__auto___36315 = (0);
while(true){
if((i__26652__auto___36315 < len__26651__auto___36314)){
args__26658__auto__.push((arguments[i__26652__auto___36315]));

var G__36316 = (i__26652__auto___36315 + (1));
i__26652__auto___36315 = G__36316;
continue;
} else {
}
break;
}

var argseq__26659__auto__ = ((((0) < args__26658__auto__.length))?(new cljs.core.IndexedSeq(args__26658__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__26659__auto__);
});})(g__28419__auto___36313))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28419__auto___36313){
return (function (args){
return cljs.core.deref.call(null,g__28419__auto___36313);
});})(g__28419__auto___36313))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__28419__auto___36313){
return (function (seq36238){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36238));
});})(g__28419__auto___36313))
;


var g__28419__auto___36317 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__28419__auto___36317){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__26658__auto__ = [];
var len__26651__auto___36318 = arguments.length;
var i__26652__auto___36319 = (0);
while(true){
if((i__26652__auto___36319 < len__26651__auto___36318)){
args__26658__auto__.push((arguments[i__26652__auto___36319]));

var G__36320 = (i__26652__auto___36319 + (1));
i__26652__auto___36319 = G__36320;
continue;
} else {
}
break;
}

var argseq__26659__auto__ = ((((0) < args__26658__auto__.length))?(new cljs.core.IndexedSeq(args__26658__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__26659__auto__);
});})(g__28419__auto___36317))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28419__auto___36317){
return (function (args){
return cljs.core.deref.call(null,g__28419__auto___36317);
});})(g__28419__auto___36317))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__28419__auto___36317){
return (function (seq36239){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36239));
});})(g__28419__auto___36317))
;


var g__28419__auto___36321 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__28419__auto___36321){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__26658__auto__ = [];
var len__26651__auto___36322 = arguments.length;
var i__26652__auto___36323 = (0);
while(true){
if((i__26652__auto___36323 < len__26651__auto___36322)){
args__26658__auto__.push((arguments[i__26652__auto___36323]));

var G__36324 = (i__26652__auto___36323 + (1));
i__26652__auto___36323 = G__36324;
continue;
} else {
}
break;
}

var argseq__26659__auto__ = ((((0) < args__26658__auto__.length))?(new cljs.core.IndexedSeq(args__26658__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__26659__auto__);
});})(g__28419__auto___36321))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28419__auto___36321){
return (function (args){
return cljs.core.deref.call(null,g__28419__auto___36321);
});})(g__28419__auto___36321))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__28419__auto___36321){
return (function (seq36240){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36240));
});})(g__28419__auto___36321))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__26658__auto__ = [];
var len__26651__auto___36327 = arguments.length;
var i__26652__auto___36328 = (0);
while(true){
if((i__26652__auto___36328 < len__26651__auto___36327)){
args__26658__auto__.push((arguments[i__26652__auto___36328]));

var G__36329 = (i__26652__auto___36328 + (1));
i__26652__auto___36328 = G__36329;
continue;
} else {
}
break;
}

var argseq__26659__auto__ = ((((0) < args__26658__auto__.length))?(new cljs.core.IndexedSeq(args__26658__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__26659__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__36325_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__36325_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq36326){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36326));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__36330_SHARP_){
return (new Date(p1__36330_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
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

//# sourceMappingURL=gen.js.map?rel=1480029285037