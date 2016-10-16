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

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__26176__auto__,writer__26177__auto__,opt__26178__auto__){
return cljs.core._write.call(null,writer__26177__auto__,"cljs.spec.impl.gen/LazyVar");
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
var args__26652__auto__ = [];
var len__26645__auto___35886 = arguments.length;
var i__26646__auto___35887 = (0);
while(true){
if((i__26646__auto___35887 < len__26645__auto___35886)){
args__26652__auto__.push((arguments[i__26646__auto___35887]));

var G__35888 = (i__26646__auto___35887 + (1));
i__26646__auto___35887 = G__35888;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((0) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__26653__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq35885){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35885));
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
var args__26652__auto__ = [];
var len__26645__auto___35890 = arguments.length;
var i__26646__auto___35891 = (0);
while(true){
if((i__26646__auto___35891 < len__26645__auto___35890)){
args__26652__auto__.push((arguments[i__26646__auto___35891]));

var G__35892 = (i__26646__auto___35891 + (1));
i__26646__auto___35891 = G__35892;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((0) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__26653__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq35889){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35889));
});

var g_QMARK__35893 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_35894 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__35893){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__35893))
,null));
var mkg_35895 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__35893,g_35894){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__35893,g_35894))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__35893,g_35894,mkg_35895){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__35893).call(null,x);
});})(g_QMARK__35893,g_35894,mkg_35895))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__35893,g_35894,mkg_35895){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_35895).call(null,gfn);
});})(g_QMARK__35893,g_35894,mkg_35895))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__35893,g_35894,mkg_35895){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_35894).call(null,generator);
});})(g_QMARK__35893,g_35894,mkg_35895))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__35856__auto___35913 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__35856__auto___35913){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__26652__auto__ = [];
var len__26645__auto___35914 = arguments.length;
var i__26646__auto___35915 = (0);
while(true){
if((i__26646__auto___35915 < len__26645__auto___35914)){
args__26652__auto__.push((arguments[i__26646__auto___35915]));

var G__35916 = (i__26646__auto___35915 + (1));
i__26646__auto___35915 = G__35916;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((0) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__26653__auto__);
});})(g__35856__auto___35913))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35856__auto___35913){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35856__auto___35913),args);
});})(g__35856__auto___35913))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__35856__auto___35913){
return (function (seq35896){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35896));
});})(g__35856__auto___35913))
;


var g__35856__auto___35917 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__35856__auto___35917){
return (function cljs$spec$impl$gen$list(var_args){
var args__26652__auto__ = [];
var len__26645__auto___35918 = arguments.length;
var i__26646__auto___35919 = (0);
while(true){
if((i__26646__auto___35919 < len__26645__auto___35918)){
args__26652__auto__.push((arguments[i__26646__auto___35919]));

var G__35920 = (i__26646__auto___35919 + (1));
i__26646__auto___35919 = G__35920;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((0) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__26653__auto__);
});})(g__35856__auto___35917))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35856__auto___35917){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35856__auto___35917),args);
});})(g__35856__auto___35917))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__35856__auto___35917){
return (function (seq35897){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35897));
});})(g__35856__auto___35917))
;


var g__35856__auto___35921 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__35856__auto___35921){
return (function cljs$spec$impl$gen$map(var_args){
var args__26652__auto__ = [];
var len__26645__auto___35922 = arguments.length;
var i__26646__auto___35923 = (0);
while(true){
if((i__26646__auto___35923 < len__26645__auto___35922)){
args__26652__auto__.push((arguments[i__26646__auto___35923]));

var G__35924 = (i__26646__auto___35923 + (1));
i__26646__auto___35923 = G__35924;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((0) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__26653__auto__);
});})(g__35856__auto___35921))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35856__auto___35921){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35856__auto___35921),args);
});})(g__35856__auto___35921))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__35856__auto___35921){
return (function (seq35898){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35898));
});})(g__35856__auto___35921))
;


var g__35856__auto___35925 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__35856__auto___35925){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__26652__auto__ = [];
var len__26645__auto___35926 = arguments.length;
var i__26646__auto___35927 = (0);
while(true){
if((i__26646__auto___35927 < len__26645__auto___35926)){
args__26652__auto__.push((arguments[i__26646__auto___35927]));

var G__35928 = (i__26646__auto___35927 + (1));
i__26646__auto___35927 = G__35928;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((0) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__26653__auto__);
});})(g__35856__auto___35925))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35856__auto___35925){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35856__auto___35925),args);
});})(g__35856__auto___35925))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__35856__auto___35925){
return (function (seq35899){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35899));
});})(g__35856__auto___35925))
;


var g__35856__auto___35929 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__35856__auto___35929){
return (function cljs$spec$impl$gen$set(var_args){
var args__26652__auto__ = [];
var len__26645__auto___35930 = arguments.length;
var i__26646__auto___35931 = (0);
while(true){
if((i__26646__auto___35931 < len__26645__auto___35930)){
args__26652__auto__.push((arguments[i__26646__auto___35931]));

var G__35932 = (i__26646__auto___35931 + (1));
i__26646__auto___35931 = G__35932;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((0) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__26653__auto__);
});})(g__35856__auto___35929))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35856__auto___35929){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35856__auto___35929),args);
});})(g__35856__auto___35929))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__35856__auto___35929){
return (function (seq35900){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35900));
});})(g__35856__auto___35929))
;


var g__35856__auto___35933 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__35856__auto___35933){
return (function cljs$spec$impl$gen$vector(var_args){
var args__26652__auto__ = [];
var len__26645__auto___35934 = arguments.length;
var i__26646__auto___35935 = (0);
while(true){
if((i__26646__auto___35935 < len__26645__auto___35934)){
args__26652__auto__.push((arguments[i__26646__auto___35935]));

var G__35936 = (i__26646__auto___35935 + (1));
i__26646__auto___35935 = G__35936;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((0) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__26653__auto__);
});})(g__35856__auto___35933))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35856__auto___35933){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35856__auto___35933),args);
});})(g__35856__auto___35933))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__35856__auto___35933){
return (function (seq35901){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35901));
});})(g__35856__auto___35933))
;


var g__35856__auto___35937 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__35856__auto___35937){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__26652__auto__ = [];
var len__26645__auto___35938 = arguments.length;
var i__26646__auto___35939 = (0);
while(true){
if((i__26646__auto___35939 < len__26645__auto___35938)){
args__26652__auto__.push((arguments[i__26646__auto___35939]));

var G__35940 = (i__26646__auto___35939 + (1));
i__26646__auto___35939 = G__35940;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((0) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__26653__auto__);
});})(g__35856__auto___35937))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35856__auto___35937){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35856__auto___35937),args);
});})(g__35856__auto___35937))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__35856__auto___35937){
return (function (seq35902){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35902));
});})(g__35856__auto___35937))
;


var g__35856__auto___35941 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__35856__auto___35941){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__26652__auto__ = [];
var len__26645__auto___35942 = arguments.length;
var i__26646__auto___35943 = (0);
while(true){
if((i__26646__auto___35943 < len__26645__auto___35942)){
args__26652__auto__.push((arguments[i__26646__auto___35943]));

var G__35944 = (i__26646__auto___35943 + (1));
i__26646__auto___35943 = G__35944;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((0) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__26653__auto__);
});})(g__35856__auto___35941))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35856__auto___35941){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35856__auto___35941),args);
});})(g__35856__auto___35941))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__35856__auto___35941){
return (function (seq35903){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35903));
});})(g__35856__auto___35941))
;


var g__35856__auto___35945 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__35856__auto___35945){
return (function cljs$spec$impl$gen$elements(var_args){
var args__26652__auto__ = [];
var len__26645__auto___35946 = arguments.length;
var i__26646__auto___35947 = (0);
while(true){
if((i__26646__auto___35947 < len__26645__auto___35946)){
args__26652__auto__.push((arguments[i__26646__auto___35947]));

var G__35948 = (i__26646__auto___35947 + (1));
i__26646__auto___35947 = G__35948;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((0) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__26653__auto__);
});})(g__35856__auto___35945))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35856__auto___35945){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35856__auto___35945),args);
});})(g__35856__auto___35945))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__35856__auto___35945){
return (function (seq35904){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35904));
});})(g__35856__auto___35945))
;


var g__35856__auto___35949 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__35856__auto___35949){
return (function cljs$spec$impl$gen$bind(var_args){
var args__26652__auto__ = [];
var len__26645__auto___35950 = arguments.length;
var i__26646__auto___35951 = (0);
while(true){
if((i__26646__auto___35951 < len__26645__auto___35950)){
args__26652__auto__.push((arguments[i__26646__auto___35951]));

var G__35952 = (i__26646__auto___35951 + (1));
i__26646__auto___35951 = G__35952;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((0) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__26653__auto__);
});})(g__35856__auto___35949))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35856__auto___35949){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35856__auto___35949),args);
});})(g__35856__auto___35949))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__35856__auto___35949){
return (function (seq35905){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35905));
});})(g__35856__auto___35949))
;


var g__35856__auto___35953 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__35856__auto___35953){
return (function cljs$spec$impl$gen$choose(var_args){
var args__26652__auto__ = [];
var len__26645__auto___35954 = arguments.length;
var i__26646__auto___35955 = (0);
while(true){
if((i__26646__auto___35955 < len__26645__auto___35954)){
args__26652__auto__.push((arguments[i__26646__auto___35955]));

var G__35956 = (i__26646__auto___35955 + (1));
i__26646__auto___35955 = G__35956;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((0) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__26653__auto__);
});})(g__35856__auto___35953))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35856__auto___35953){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35856__auto___35953),args);
});})(g__35856__auto___35953))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__35856__auto___35953){
return (function (seq35906){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35906));
});})(g__35856__auto___35953))
;


var g__35856__auto___35957 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__35856__auto___35957){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__26652__auto__ = [];
var len__26645__auto___35958 = arguments.length;
var i__26646__auto___35959 = (0);
while(true){
if((i__26646__auto___35959 < len__26645__auto___35958)){
args__26652__auto__.push((arguments[i__26646__auto___35959]));

var G__35960 = (i__26646__auto___35959 + (1));
i__26646__auto___35959 = G__35960;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((0) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__26653__auto__);
});})(g__35856__auto___35957))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35856__auto___35957){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35856__auto___35957),args);
});})(g__35856__auto___35957))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__35856__auto___35957){
return (function (seq35907){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35907));
});})(g__35856__auto___35957))
;


var g__35856__auto___35961 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__35856__auto___35961){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__26652__auto__ = [];
var len__26645__auto___35962 = arguments.length;
var i__26646__auto___35963 = (0);
while(true){
if((i__26646__auto___35963 < len__26645__auto___35962)){
args__26652__auto__.push((arguments[i__26646__auto___35963]));

var G__35964 = (i__26646__auto___35963 + (1));
i__26646__auto___35963 = G__35964;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((0) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__26653__auto__);
});})(g__35856__auto___35961))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35856__auto___35961){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35856__auto___35961),args);
});})(g__35856__auto___35961))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__35856__auto___35961){
return (function (seq35908){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35908));
});})(g__35856__auto___35961))
;


var g__35856__auto___35965 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__35856__auto___35965){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__26652__auto__ = [];
var len__26645__auto___35966 = arguments.length;
var i__26646__auto___35967 = (0);
while(true){
if((i__26646__auto___35967 < len__26645__auto___35966)){
args__26652__auto__.push((arguments[i__26646__auto___35967]));

var G__35968 = (i__26646__auto___35967 + (1));
i__26646__auto___35967 = G__35968;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((0) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__26653__auto__);
});})(g__35856__auto___35965))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35856__auto___35965){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35856__auto___35965),args);
});})(g__35856__auto___35965))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__35856__auto___35965){
return (function (seq35909){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35909));
});})(g__35856__auto___35965))
;


var g__35856__auto___35969 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__35856__auto___35969){
return (function cljs$spec$impl$gen$sample(var_args){
var args__26652__auto__ = [];
var len__26645__auto___35970 = arguments.length;
var i__26646__auto___35971 = (0);
while(true){
if((i__26646__auto___35971 < len__26645__auto___35970)){
args__26652__auto__.push((arguments[i__26646__auto___35971]));

var G__35972 = (i__26646__auto___35971 + (1));
i__26646__auto___35971 = G__35972;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((0) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__26653__auto__);
});})(g__35856__auto___35969))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35856__auto___35969){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35856__auto___35969),args);
});})(g__35856__auto___35969))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__35856__auto___35969){
return (function (seq35910){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35910));
});})(g__35856__auto___35969))
;


var g__35856__auto___35973 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__35856__auto___35973){
return (function cljs$spec$impl$gen$return(var_args){
var args__26652__auto__ = [];
var len__26645__auto___35974 = arguments.length;
var i__26646__auto___35975 = (0);
while(true){
if((i__26646__auto___35975 < len__26645__auto___35974)){
args__26652__auto__.push((arguments[i__26646__auto___35975]));

var G__35976 = (i__26646__auto___35975 + (1));
i__26646__auto___35975 = G__35976;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((0) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__26653__auto__);
});})(g__35856__auto___35973))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35856__auto___35973){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35856__auto___35973),args);
});})(g__35856__auto___35973))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__35856__auto___35973){
return (function (seq35911){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35911));
});})(g__35856__auto___35973))
;


var g__35856__auto___35977 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__35856__auto___35977){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__26652__auto__ = [];
var len__26645__auto___35978 = arguments.length;
var i__26646__auto___35979 = (0);
while(true){
if((i__26646__auto___35979 < len__26645__auto___35978)){
args__26652__auto__.push((arguments[i__26646__auto___35979]));

var G__35980 = (i__26646__auto___35979 + (1));
i__26646__auto___35979 = G__35980;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((0) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__26653__auto__);
});})(g__35856__auto___35977))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35856__auto___35977){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35856__auto___35977),args);
});})(g__35856__auto___35977))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__35856__auto___35977){
return (function (seq35912){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35912));
});})(g__35856__auto___35977))
;

var g__35869__auto___36002 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__35869__auto___36002){
return (function cljs$spec$impl$gen$any(var_args){
var args__26652__auto__ = [];
var len__26645__auto___36003 = arguments.length;
var i__26646__auto___36004 = (0);
while(true){
if((i__26646__auto___36004 < len__26645__auto___36003)){
args__26652__auto__.push((arguments[i__26646__auto___36004]));

var G__36005 = (i__26646__auto___36004 + (1));
i__26646__auto___36004 = G__36005;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((0) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__26653__auto__);
});})(g__35869__auto___36002))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35869__auto___36002){
return (function (args){
return cljs.core.deref.call(null,g__35869__auto___36002);
});})(g__35869__auto___36002))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__35869__auto___36002){
return (function (seq35981){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35981));
});})(g__35869__auto___36002))
;


var g__35869__auto___36006 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__35869__auto___36006){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__26652__auto__ = [];
var len__26645__auto___36007 = arguments.length;
var i__26646__auto___36008 = (0);
while(true){
if((i__26646__auto___36008 < len__26645__auto___36007)){
args__26652__auto__.push((arguments[i__26646__auto___36008]));

var G__36009 = (i__26646__auto___36008 + (1));
i__26646__auto___36008 = G__36009;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((0) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__26653__auto__);
});})(g__35869__auto___36006))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35869__auto___36006){
return (function (args){
return cljs.core.deref.call(null,g__35869__auto___36006);
});})(g__35869__auto___36006))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__35869__auto___36006){
return (function (seq35982){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35982));
});})(g__35869__auto___36006))
;


var g__35869__auto___36010 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__35869__auto___36010){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__26652__auto__ = [];
var len__26645__auto___36011 = arguments.length;
var i__26646__auto___36012 = (0);
while(true){
if((i__26646__auto___36012 < len__26645__auto___36011)){
args__26652__auto__.push((arguments[i__26646__auto___36012]));

var G__36013 = (i__26646__auto___36012 + (1));
i__26646__auto___36012 = G__36013;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((0) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__26653__auto__);
});})(g__35869__auto___36010))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35869__auto___36010){
return (function (args){
return cljs.core.deref.call(null,g__35869__auto___36010);
});})(g__35869__auto___36010))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__35869__auto___36010){
return (function (seq35983){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35983));
});})(g__35869__auto___36010))
;


var g__35869__auto___36014 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__35869__auto___36014){
return (function cljs$spec$impl$gen$char(var_args){
var args__26652__auto__ = [];
var len__26645__auto___36015 = arguments.length;
var i__26646__auto___36016 = (0);
while(true){
if((i__26646__auto___36016 < len__26645__auto___36015)){
args__26652__auto__.push((arguments[i__26646__auto___36016]));

var G__36017 = (i__26646__auto___36016 + (1));
i__26646__auto___36016 = G__36017;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((0) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__26653__auto__);
});})(g__35869__auto___36014))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35869__auto___36014){
return (function (args){
return cljs.core.deref.call(null,g__35869__auto___36014);
});})(g__35869__auto___36014))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__35869__auto___36014){
return (function (seq35984){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35984));
});})(g__35869__auto___36014))
;


var g__35869__auto___36018 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__35869__auto___36018){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__26652__auto__ = [];
var len__26645__auto___36019 = arguments.length;
var i__26646__auto___36020 = (0);
while(true){
if((i__26646__auto___36020 < len__26645__auto___36019)){
args__26652__auto__.push((arguments[i__26646__auto___36020]));

var G__36021 = (i__26646__auto___36020 + (1));
i__26646__auto___36020 = G__36021;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((0) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__26653__auto__);
});})(g__35869__auto___36018))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35869__auto___36018){
return (function (args){
return cljs.core.deref.call(null,g__35869__auto___36018);
});})(g__35869__auto___36018))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__35869__auto___36018){
return (function (seq35985){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35985));
});})(g__35869__auto___36018))
;


var g__35869__auto___36022 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__35869__auto___36022){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__26652__auto__ = [];
var len__26645__auto___36023 = arguments.length;
var i__26646__auto___36024 = (0);
while(true){
if((i__26646__auto___36024 < len__26645__auto___36023)){
args__26652__auto__.push((arguments[i__26646__auto___36024]));

var G__36025 = (i__26646__auto___36024 + (1));
i__26646__auto___36024 = G__36025;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((0) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__26653__auto__);
});})(g__35869__auto___36022))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35869__auto___36022){
return (function (args){
return cljs.core.deref.call(null,g__35869__auto___36022);
});})(g__35869__auto___36022))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__35869__auto___36022){
return (function (seq35986){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35986));
});})(g__35869__auto___36022))
;


var g__35869__auto___36026 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__35869__auto___36026){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__26652__auto__ = [];
var len__26645__auto___36027 = arguments.length;
var i__26646__auto___36028 = (0);
while(true){
if((i__26646__auto___36028 < len__26645__auto___36027)){
args__26652__auto__.push((arguments[i__26646__auto___36028]));

var G__36029 = (i__26646__auto___36028 + (1));
i__26646__auto___36028 = G__36029;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((0) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__26653__auto__);
});})(g__35869__auto___36026))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35869__auto___36026){
return (function (args){
return cljs.core.deref.call(null,g__35869__auto___36026);
});})(g__35869__auto___36026))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__35869__auto___36026){
return (function (seq35987){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35987));
});})(g__35869__auto___36026))
;


var g__35869__auto___36030 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__35869__auto___36030){
return (function cljs$spec$impl$gen$double(var_args){
var args__26652__auto__ = [];
var len__26645__auto___36031 = arguments.length;
var i__26646__auto___36032 = (0);
while(true){
if((i__26646__auto___36032 < len__26645__auto___36031)){
args__26652__auto__.push((arguments[i__26646__auto___36032]));

var G__36033 = (i__26646__auto___36032 + (1));
i__26646__auto___36032 = G__36033;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((0) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__26653__auto__);
});})(g__35869__auto___36030))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35869__auto___36030){
return (function (args){
return cljs.core.deref.call(null,g__35869__auto___36030);
});})(g__35869__auto___36030))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__35869__auto___36030){
return (function (seq35988){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35988));
});})(g__35869__auto___36030))
;


var g__35869__auto___36034 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__35869__auto___36034){
return (function cljs$spec$impl$gen$int(var_args){
var args__26652__auto__ = [];
var len__26645__auto___36035 = arguments.length;
var i__26646__auto___36036 = (0);
while(true){
if((i__26646__auto___36036 < len__26645__auto___36035)){
args__26652__auto__.push((arguments[i__26646__auto___36036]));

var G__36037 = (i__26646__auto___36036 + (1));
i__26646__auto___36036 = G__36037;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((0) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__26653__auto__);
});})(g__35869__auto___36034))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35869__auto___36034){
return (function (args){
return cljs.core.deref.call(null,g__35869__auto___36034);
});})(g__35869__auto___36034))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__35869__auto___36034){
return (function (seq35989){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35989));
});})(g__35869__auto___36034))
;


var g__35869__auto___36038 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__35869__auto___36038){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__26652__auto__ = [];
var len__26645__auto___36039 = arguments.length;
var i__26646__auto___36040 = (0);
while(true){
if((i__26646__auto___36040 < len__26645__auto___36039)){
args__26652__auto__.push((arguments[i__26646__auto___36040]));

var G__36041 = (i__26646__auto___36040 + (1));
i__26646__auto___36040 = G__36041;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((0) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__26653__auto__);
});})(g__35869__auto___36038))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35869__auto___36038){
return (function (args){
return cljs.core.deref.call(null,g__35869__auto___36038);
});})(g__35869__auto___36038))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__35869__auto___36038){
return (function (seq35990){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35990));
});})(g__35869__auto___36038))
;


var g__35869__auto___36042 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__35869__auto___36042){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__26652__auto__ = [];
var len__26645__auto___36043 = arguments.length;
var i__26646__auto___36044 = (0);
while(true){
if((i__26646__auto___36044 < len__26645__auto___36043)){
args__26652__auto__.push((arguments[i__26646__auto___36044]));

var G__36045 = (i__26646__auto___36044 + (1));
i__26646__auto___36044 = G__36045;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((0) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__26653__auto__);
});})(g__35869__auto___36042))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35869__auto___36042){
return (function (args){
return cljs.core.deref.call(null,g__35869__auto___36042);
});})(g__35869__auto___36042))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__35869__auto___36042){
return (function (seq35991){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35991));
});})(g__35869__auto___36042))
;


var g__35869__auto___36046 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__35869__auto___36046){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__26652__auto__ = [];
var len__26645__auto___36047 = arguments.length;
var i__26646__auto___36048 = (0);
while(true){
if((i__26646__auto___36048 < len__26645__auto___36047)){
args__26652__auto__.push((arguments[i__26646__auto___36048]));

var G__36049 = (i__26646__auto___36048 + (1));
i__26646__auto___36048 = G__36049;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((0) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__26653__auto__);
});})(g__35869__auto___36046))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35869__auto___36046){
return (function (args){
return cljs.core.deref.call(null,g__35869__auto___36046);
});})(g__35869__auto___36046))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__35869__auto___36046){
return (function (seq35992){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35992));
});})(g__35869__auto___36046))
;


var g__35869__auto___36050 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__35869__auto___36050){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__26652__auto__ = [];
var len__26645__auto___36051 = arguments.length;
var i__26646__auto___36052 = (0);
while(true){
if((i__26646__auto___36052 < len__26645__auto___36051)){
args__26652__auto__.push((arguments[i__26646__auto___36052]));

var G__36053 = (i__26646__auto___36052 + (1));
i__26646__auto___36052 = G__36053;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((0) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__26653__auto__);
});})(g__35869__auto___36050))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35869__auto___36050){
return (function (args){
return cljs.core.deref.call(null,g__35869__auto___36050);
});})(g__35869__auto___36050))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__35869__auto___36050){
return (function (seq35993){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35993));
});})(g__35869__auto___36050))
;


var g__35869__auto___36054 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__35869__auto___36054){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__26652__auto__ = [];
var len__26645__auto___36055 = arguments.length;
var i__26646__auto___36056 = (0);
while(true){
if((i__26646__auto___36056 < len__26645__auto___36055)){
args__26652__auto__.push((arguments[i__26646__auto___36056]));

var G__36057 = (i__26646__auto___36056 + (1));
i__26646__auto___36056 = G__36057;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((0) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__26653__auto__);
});})(g__35869__auto___36054))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35869__auto___36054){
return (function (args){
return cljs.core.deref.call(null,g__35869__auto___36054);
});})(g__35869__auto___36054))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__35869__auto___36054){
return (function (seq35994){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35994));
});})(g__35869__auto___36054))
;


var g__35869__auto___36058 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__35869__auto___36058){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__26652__auto__ = [];
var len__26645__auto___36059 = arguments.length;
var i__26646__auto___36060 = (0);
while(true){
if((i__26646__auto___36060 < len__26645__auto___36059)){
args__26652__auto__.push((arguments[i__26646__auto___36060]));

var G__36061 = (i__26646__auto___36060 + (1));
i__26646__auto___36060 = G__36061;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((0) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__26653__auto__);
});})(g__35869__auto___36058))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35869__auto___36058){
return (function (args){
return cljs.core.deref.call(null,g__35869__auto___36058);
});})(g__35869__auto___36058))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__35869__auto___36058){
return (function (seq35995){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35995));
});})(g__35869__auto___36058))
;


var g__35869__auto___36062 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__35869__auto___36062){
return (function cljs$spec$impl$gen$string(var_args){
var args__26652__auto__ = [];
var len__26645__auto___36063 = arguments.length;
var i__26646__auto___36064 = (0);
while(true){
if((i__26646__auto___36064 < len__26645__auto___36063)){
args__26652__auto__.push((arguments[i__26646__auto___36064]));

var G__36065 = (i__26646__auto___36064 + (1));
i__26646__auto___36064 = G__36065;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((0) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__26653__auto__);
});})(g__35869__auto___36062))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35869__auto___36062){
return (function (args){
return cljs.core.deref.call(null,g__35869__auto___36062);
});})(g__35869__auto___36062))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__35869__auto___36062){
return (function (seq35996){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35996));
});})(g__35869__auto___36062))
;


var g__35869__auto___36066 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__35869__auto___36066){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__26652__auto__ = [];
var len__26645__auto___36067 = arguments.length;
var i__26646__auto___36068 = (0);
while(true){
if((i__26646__auto___36068 < len__26645__auto___36067)){
args__26652__auto__.push((arguments[i__26646__auto___36068]));

var G__36069 = (i__26646__auto___36068 + (1));
i__26646__auto___36068 = G__36069;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((0) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__26653__auto__);
});})(g__35869__auto___36066))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35869__auto___36066){
return (function (args){
return cljs.core.deref.call(null,g__35869__auto___36066);
});})(g__35869__auto___36066))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__35869__auto___36066){
return (function (seq35997){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35997));
});})(g__35869__auto___36066))
;


var g__35869__auto___36070 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__35869__auto___36070){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__26652__auto__ = [];
var len__26645__auto___36071 = arguments.length;
var i__26646__auto___36072 = (0);
while(true){
if((i__26646__auto___36072 < len__26645__auto___36071)){
args__26652__auto__.push((arguments[i__26646__auto___36072]));

var G__36073 = (i__26646__auto___36072 + (1));
i__26646__auto___36072 = G__36073;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((0) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__26653__auto__);
});})(g__35869__auto___36070))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35869__auto___36070){
return (function (args){
return cljs.core.deref.call(null,g__35869__auto___36070);
});})(g__35869__auto___36070))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__35869__auto___36070){
return (function (seq35998){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35998));
});})(g__35869__auto___36070))
;


var g__35869__auto___36074 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__35869__auto___36074){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__26652__auto__ = [];
var len__26645__auto___36075 = arguments.length;
var i__26646__auto___36076 = (0);
while(true){
if((i__26646__auto___36076 < len__26645__auto___36075)){
args__26652__auto__.push((arguments[i__26646__auto___36076]));

var G__36077 = (i__26646__auto___36076 + (1));
i__26646__auto___36076 = G__36077;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((0) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__26653__auto__);
});})(g__35869__auto___36074))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35869__auto___36074){
return (function (args){
return cljs.core.deref.call(null,g__35869__auto___36074);
});})(g__35869__auto___36074))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__35869__auto___36074){
return (function (seq35999){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35999));
});})(g__35869__auto___36074))
;


var g__35869__auto___36078 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__35869__auto___36078){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__26652__auto__ = [];
var len__26645__auto___36079 = arguments.length;
var i__26646__auto___36080 = (0);
while(true){
if((i__26646__auto___36080 < len__26645__auto___36079)){
args__26652__auto__.push((arguments[i__26646__auto___36080]));

var G__36081 = (i__26646__auto___36080 + (1));
i__26646__auto___36080 = G__36081;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((0) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__26653__auto__);
});})(g__35869__auto___36078))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35869__auto___36078){
return (function (args){
return cljs.core.deref.call(null,g__35869__auto___36078);
});})(g__35869__auto___36078))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__35869__auto___36078){
return (function (seq36000){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36000));
});})(g__35869__auto___36078))
;


var g__35869__auto___36082 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__35869__auto___36082){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__26652__auto__ = [];
var len__26645__auto___36083 = arguments.length;
var i__26646__auto___36084 = (0);
while(true){
if((i__26646__auto___36084 < len__26645__auto___36083)){
args__26652__auto__.push((arguments[i__26646__auto___36084]));

var G__36085 = (i__26646__auto___36084 + (1));
i__26646__auto___36084 = G__36085;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((0) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__26653__auto__);
});})(g__35869__auto___36082))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35869__auto___36082){
return (function (args){
return cljs.core.deref.call(null,g__35869__auto___36082);
});})(g__35869__auto___36082))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__35869__auto___36082){
return (function (seq36001){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36001));
});})(g__35869__auto___36082))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__26652__auto__ = [];
var len__26645__auto___36088 = arguments.length;
var i__26646__auto___36089 = (0);
while(true){
if((i__26646__auto___36089 < len__26645__auto___36088)){
args__26652__auto__.push((arguments[i__26646__auto___36089]));

var G__36090 = (i__26646__auto___36089 + (1));
i__26646__auto___36089 = G__36090;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((0) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__26653__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__36086_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__36086_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq36087){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36087));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__36091_SHARP_){
return (new Date(p1__36091_SHARP_));
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

//# sourceMappingURL=gen.js.map?rel=1476574117916