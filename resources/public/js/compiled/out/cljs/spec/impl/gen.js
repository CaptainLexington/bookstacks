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

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__23184__auto__,writer__23185__auto__,opt__23186__auto__){
return cljs.core._write.call(null,writer__23185__auto__,"cljs.spec.impl.gen/LazyVar");
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
var args__23660__auto__ = [];
var len__23653__auto___31678 = arguments.length;
var i__23654__auto___31679 = (0);
while(true){
if((i__23654__auto___31679 < len__23653__auto___31678)){
args__23660__auto__.push((arguments[i__23654__auto___31679]));

var G__31680 = (i__23654__auto___31679 + (1));
i__23654__auto___31679 = G__31680;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((0) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__23661__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq31677){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31677));
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
var args__23660__auto__ = [];
var len__23653__auto___31682 = arguments.length;
var i__23654__auto___31683 = (0);
while(true){
if((i__23654__auto___31683 < len__23653__auto___31682)){
args__23660__auto__.push((arguments[i__23654__auto___31683]));

var G__31684 = (i__23654__auto___31683 + (1));
i__23654__auto___31683 = G__31684;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((0) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__23661__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq31681){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31681));
});

var g_QMARK__31685 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_31686 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__31685){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__31685))
,null));
var mkg_31687 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__31685,g_31686){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__31685,g_31686))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__31685,g_31686,mkg_31687){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__31685).call(null,x);
});})(g_QMARK__31685,g_31686,mkg_31687))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__31685,g_31686,mkg_31687){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_31687).call(null,gfn);
});})(g_QMARK__31685,g_31686,mkg_31687))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__31685,g_31686,mkg_31687){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_31686).call(null,generator);
});})(g_QMARK__31685,g_31686,mkg_31687))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__31649__auto___31705 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__31649__auto___31705){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__23660__auto__ = [];
var len__23653__auto___31706 = arguments.length;
var i__23654__auto___31707 = (0);
while(true){
if((i__23654__auto___31707 < len__23653__auto___31706)){
args__23660__auto__.push((arguments[i__23654__auto___31707]));

var G__31708 = (i__23654__auto___31707 + (1));
i__23654__auto___31707 = G__31708;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((0) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__23661__auto__);
});})(g__31649__auto___31705))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31649__auto___31705){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31649__auto___31705),args);
});})(g__31649__auto___31705))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__31649__auto___31705){
return (function (seq31688){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31688));
});})(g__31649__auto___31705))
;


var g__31649__auto___31709 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__31649__auto___31709){
return (function cljs$spec$impl$gen$list(var_args){
var args__23660__auto__ = [];
var len__23653__auto___31710 = arguments.length;
var i__23654__auto___31711 = (0);
while(true){
if((i__23654__auto___31711 < len__23653__auto___31710)){
args__23660__auto__.push((arguments[i__23654__auto___31711]));

var G__31712 = (i__23654__auto___31711 + (1));
i__23654__auto___31711 = G__31712;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((0) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__23661__auto__);
});})(g__31649__auto___31709))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31649__auto___31709){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31649__auto___31709),args);
});})(g__31649__auto___31709))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__31649__auto___31709){
return (function (seq31689){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31689));
});})(g__31649__auto___31709))
;


var g__31649__auto___31713 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__31649__auto___31713){
return (function cljs$spec$impl$gen$map(var_args){
var args__23660__auto__ = [];
var len__23653__auto___31714 = arguments.length;
var i__23654__auto___31715 = (0);
while(true){
if((i__23654__auto___31715 < len__23653__auto___31714)){
args__23660__auto__.push((arguments[i__23654__auto___31715]));

var G__31716 = (i__23654__auto___31715 + (1));
i__23654__auto___31715 = G__31716;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((0) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__23661__auto__);
});})(g__31649__auto___31713))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31649__auto___31713){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31649__auto___31713),args);
});})(g__31649__auto___31713))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__31649__auto___31713){
return (function (seq31690){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31690));
});})(g__31649__auto___31713))
;


var g__31649__auto___31717 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__31649__auto___31717){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__23660__auto__ = [];
var len__23653__auto___31718 = arguments.length;
var i__23654__auto___31719 = (0);
while(true){
if((i__23654__auto___31719 < len__23653__auto___31718)){
args__23660__auto__.push((arguments[i__23654__auto___31719]));

var G__31720 = (i__23654__auto___31719 + (1));
i__23654__auto___31719 = G__31720;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((0) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__23661__auto__);
});})(g__31649__auto___31717))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31649__auto___31717){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31649__auto___31717),args);
});})(g__31649__auto___31717))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__31649__auto___31717){
return (function (seq31691){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31691));
});})(g__31649__auto___31717))
;


var g__31649__auto___31721 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__31649__auto___31721){
return (function cljs$spec$impl$gen$set(var_args){
var args__23660__auto__ = [];
var len__23653__auto___31722 = arguments.length;
var i__23654__auto___31723 = (0);
while(true){
if((i__23654__auto___31723 < len__23653__auto___31722)){
args__23660__auto__.push((arguments[i__23654__auto___31723]));

var G__31724 = (i__23654__auto___31723 + (1));
i__23654__auto___31723 = G__31724;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((0) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__23661__auto__);
});})(g__31649__auto___31721))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31649__auto___31721){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31649__auto___31721),args);
});})(g__31649__auto___31721))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__31649__auto___31721){
return (function (seq31692){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31692));
});})(g__31649__auto___31721))
;


var g__31649__auto___31725 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__31649__auto___31725){
return (function cljs$spec$impl$gen$vector(var_args){
var args__23660__auto__ = [];
var len__23653__auto___31726 = arguments.length;
var i__23654__auto___31727 = (0);
while(true){
if((i__23654__auto___31727 < len__23653__auto___31726)){
args__23660__auto__.push((arguments[i__23654__auto___31727]));

var G__31728 = (i__23654__auto___31727 + (1));
i__23654__auto___31727 = G__31728;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((0) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__23661__auto__);
});})(g__31649__auto___31725))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31649__auto___31725){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31649__auto___31725),args);
});})(g__31649__auto___31725))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__31649__auto___31725){
return (function (seq31693){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31693));
});})(g__31649__auto___31725))
;


var g__31649__auto___31729 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__31649__auto___31729){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__23660__auto__ = [];
var len__23653__auto___31730 = arguments.length;
var i__23654__auto___31731 = (0);
while(true){
if((i__23654__auto___31731 < len__23653__auto___31730)){
args__23660__auto__.push((arguments[i__23654__auto___31731]));

var G__31732 = (i__23654__auto___31731 + (1));
i__23654__auto___31731 = G__31732;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((0) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__23661__auto__);
});})(g__31649__auto___31729))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31649__auto___31729){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31649__auto___31729),args);
});})(g__31649__auto___31729))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__31649__auto___31729){
return (function (seq31694){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31694));
});})(g__31649__auto___31729))
;


var g__31649__auto___31733 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__31649__auto___31733){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__23660__auto__ = [];
var len__23653__auto___31734 = arguments.length;
var i__23654__auto___31735 = (0);
while(true){
if((i__23654__auto___31735 < len__23653__auto___31734)){
args__23660__auto__.push((arguments[i__23654__auto___31735]));

var G__31736 = (i__23654__auto___31735 + (1));
i__23654__auto___31735 = G__31736;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((0) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__23661__auto__);
});})(g__31649__auto___31733))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31649__auto___31733){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31649__auto___31733),args);
});})(g__31649__auto___31733))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__31649__auto___31733){
return (function (seq31695){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31695));
});})(g__31649__auto___31733))
;


var g__31649__auto___31737 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__31649__auto___31737){
return (function cljs$spec$impl$gen$elements(var_args){
var args__23660__auto__ = [];
var len__23653__auto___31738 = arguments.length;
var i__23654__auto___31739 = (0);
while(true){
if((i__23654__auto___31739 < len__23653__auto___31738)){
args__23660__auto__.push((arguments[i__23654__auto___31739]));

var G__31740 = (i__23654__auto___31739 + (1));
i__23654__auto___31739 = G__31740;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((0) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__23661__auto__);
});})(g__31649__auto___31737))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31649__auto___31737){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31649__auto___31737),args);
});})(g__31649__auto___31737))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__31649__auto___31737){
return (function (seq31696){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31696));
});})(g__31649__auto___31737))
;


var g__31649__auto___31741 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__31649__auto___31741){
return (function cljs$spec$impl$gen$bind(var_args){
var args__23660__auto__ = [];
var len__23653__auto___31742 = arguments.length;
var i__23654__auto___31743 = (0);
while(true){
if((i__23654__auto___31743 < len__23653__auto___31742)){
args__23660__auto__.push((arguments[i__23654__auto___31743]));

var G__31744 = (i__23654__auto___31743 + (1));
i__23654__auto___31743 = G__31744;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((0) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__23661__auto__);
});})(g__31649__auto___31741))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31649__auto___31741){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31649__auto___31741),args);
});})(g__31649__auto___31741))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__31649__auto___31741){
return (function (seq31697){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31697));
});})(g__31649__auto___31741))
;


var g__31649__auto___31745 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__31649__auto___31745){
return (function cljs$spec$impl$gen$choose(var_args){
var args__23660__auto__ = [];
var len__23653__auto___31746 = arguments.length;
var i__23654__auto___31747 = (0);
while(true){
if((i__23654__auto___31747 < len__23653__auto___31746)){
args__23660__auto__.push((arguments[i__23654__auto___31747]));

var G__31748 = (i__23654__auto___31747 + (1));
i__23654__auto___31747 = G__31748;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((0) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__23661__auto__);
});})(g__31649__auto___31745))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31649__auto___31745){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31649__auto___31745),args);
});})(g__31649__auto___31745))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__31649__auto___31745){
return (function (seq31698){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31698));
});})(g__31649__auto___31745))
;


var g__31649__auto___31749 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__31649__auto___31749){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__23660__auto__ = [];
var len__23653__auto___31750 = arguments.length;
var i__23654__auto___31751 = (0);
while(true){
if((i__23654__auto___31751 < len__23653__auto___31750)){
args__23660__auto__.push((arguments[i__23654__auto___31751]));

var G__31752 = (i__23654__auto___31751 + (1));
i__23654__auto___31751 = G__31752;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((0) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__23661__auto__);
});})(g__31649__auto___31749))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31649__auto___31749){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31649__auto___31749),args);
});})(g__31649__auto___31749))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__31649__auto___31749){
return (function (seq31699){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31699));
});})(g__31649__auto___31749))
;


var g__31649__auto___31753 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__31649__auto___31753){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__23660__auto__ = [];
var len__23653__auto___31754 = arguments.length;
var i__23654__auto___31755 = (0);
while(true){
if((i__23654__auto___31755 < len__23653__auto___31754)){
args__23660__auto__.push((arguments[i__23654__auto___31755]));

var G__31756 = (i__23654__auto___31755 + (1));
i__23654__auto___31755 = G__31756;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((0) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__23661__auto__);
});})(g__31649__auto___31753))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31649__auto___31753){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31649__auto___31753),args);
});})(g__31649__auto___31753))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__31649__auto___31753){
return (function (seq31700){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31700));
});})(g__31649__auto___31753))
;


var g__31649__auto___31757 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__31649__auto___31757){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__23660__auto__ = [];
var len__23653__auto___31758 = arguments.length;
var i__23654__auto___31759 = (0);
while(true){
if((i__23654__auto___31759 < len__23653__auto___31758)){
args__23660__auto__.push((arguments[i__23654__auto___31759]));

var G__31760 = (i__23654__auto___31759 + (1));
i__23654__auto___31759 = G__31760;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((0) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__23661__auto__);
});})(g__31649__auto___31757))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31649__auto___31757){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31649__auto___31757),args);
});})(g__31649__auto___31757))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__31649__auto___31757){
return (function (seq31701){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31701));
});})(g__31649__auto___31757))
;


var g__31649__auto___31761 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__31649__auto___31761){
return (function cljs$spec$impl$gen$sample(var_args){
var args__23660__auto__ = [];
var len__23653__auto___31762 = arguments.length;
var i__23654__auto___31763 = (0);
while(true){
if((i__23654__auto___31763 < len__23653__auto___31762)){
args__23660__auto__.push((arguments[i__23654__auto___31763]));

var G__31764 = (i__23654__auto___31763 + (1));
i__23654__auto___31763 = G__31764;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((0) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__23661__auto__);
});})(g__31649__auto___31761))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31649__auto___31761){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31649__auto___31761),args);
});})(g__31649__auto___31761))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__31649__auto___31761){
return (function (seq31702){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31702));
});})(g__31649__auto___31761))
;


var g__31649__auto___31765 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__31649__auto___31765){
return (function cljs$spec$impl$gen$return(var_args){
var args__23660__auto__ = [];
var len__23653__auto___31766 = arguments.length;
var i__23654__auto___31767 = (0);
while(true){
if((i__23654__auto___31767 < len__23653__auto___31766)){
args__23660__auto__.push((arguments[i__23654__auto___31767]));

var G__31768 = (i__23654__auto___31767 + (1));
i__23654__auto___31767 = G__31768;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((0) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__23661__auto__);
});})(g__31649__auto___31765))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31649__auto___31765){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31649__auto___31765),args);
});})(g__31649__auto___31765))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__31649__auto___31765){
return (function (seq31703){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31703));
});})(g__31649__auto___31765))
;


var g__31649__auto___31769 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__31649__auto___31769){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__23660__auto__ = [];
var len__23653__auto___31770 = arguments.length;
var i__23654__auto___31771 = (0);
while(true){
if((i__23654__auto___31771 < len__23653__auto___31770)){
args__23660__auto__.push((arguments[i__23654__auto___31771]));

var G__31772 = (i__23654__auto___31771 + (1));
i__23654__auto___31771 = G__31772;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((0) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__23661__auto__);
});})(g__31649__auto___31769))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31649__auto___31769){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31649__auto___31769),args);
});})(g__31649__auto___31769))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__31649__auto___31769){
return (function (seq31704){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31704));
});})(g__31649__auto___31769))
;

var g__31662__auto___31794 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__31662__auto___31794){
return (function cljs$spec$impl$gen$any(var_args){
var args__23660__auto__ = [];
var len__23653__auto___31795 = arguments.length;
var i__23654__auto___31796 = (0);
while(true){
if((i__23654__auto___31796 < len__23653__auto___31795)){
args__23660__auto__.push((arguments[i__23654__auto___31796]));

var G__31797 = (i__23654__auto___31796 + (1));
i__23654__auto___31796 = G__31797;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((0) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__23661__auto__);
});})(g__31662__auto___31794))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31662__auto___31794){
return (function (args){
return cljs.core.deref.call(null,g__31662__auto___31794);
});})(g__31662__auto___31794))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__31662__auto___31794){
return (function (seq31773){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31773));
});})(g__31662__auto___31794))
;


var g__31662__auto___31798 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__31662__auto___31798){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__23660__auto__ = [];
var len__23653__auto___31799 = arguments.length;
var i__23654__auto___31800 = (0);
while(true){
if((i__23654__auto___31800 < len__23653__auto___31799)){
args__23660__auto__.push((arguments[i__23654__auto___31800]));

var G__31801 = (i__23654__auto___31800 + (1));
i__23654__auto___31800 = G__31801;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((0) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__23661__auto__);
});})(g__31662__auto___31798))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31662__auto___31798){
return (function (args){
return cljs.core.deref.call(null,g__31662__auto___31798);
});})(g__31662__auto___31798))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__31662__auto___31798){
return (function (seq31774){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31774));
});})(g__31662__auto___31798))
;


var g__31662__auto___31802 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__31662__auto___31802){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__23660__auto__ = [];
var len__23653__auto___31803 = arguments.length;
var i__23654__auto___31804 = (0);
while(true){
if((i__23654__auto___31804 < len__23653__auto___31803)){
args__23660__auto__.push((arguments[i__23654__auto___31804]));

var G__31805 = (i__23654__auto___31804 + (1));
i__23654__auto___31804 = G__31805;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((0) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__23661__auto__);
});})(g__31662__auto___31802))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31662__auto___31802){
return (function (args){
return cljs.core.deref.call(null,g__31662__auto___31802);
});})(g__31662__auto___31802))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__31662__auto___31802){
return (function (seq31775){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31775));
});})(g__31662__auto___31802))
;


var g__31662__auto___31806 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__31662__auto___31806){
return (function cljs$spec$impl$gen$char(var_args){
var args__23660__auto__ = [];
var len__23653__auto___31807 = arguments.length;
var i__23654__auto___31808 = (0);
while(true){
if((i__23654__auto___31808 < len__23653__auto___31807)){
args__23660__auto__.push((arguments[i__23654__auto___31808]));

var G__31809 = (i__23654__auto___31808 + (1));
i__23654__auto___31808 = G__31809;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((0) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__23661__auto__);
});})(g__31662__auto___31806))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31662__auto___31806){
return (function (args){
return cljs.core.deref.call(null,g__31662__auto___31806);
});})(g__31662__auto___31806))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__31662__auto___31806){
return (function (seq31776){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31776));
});})(g__31662__auto___31806))
;


var g__31662__auto___31810 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__31662__auto___31810){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__23660__auto__ = [];
var len__23653__auto___31811 = arguments.length;
var i__23654__auto___31812 = (0);
while(true){
if((i__23654__auto___31812 < len__23653__auto___31811)){
args__23660__auto__.push((arguments[i__23654__auto___31812]));

var G__31813 = (i__23654__auto___31812 + (1));
i__23654__auto___31812 = G__31813;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((0) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__23661__auto__);
});})(g__31662__auto___31810))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31662__auto___31810){
return (function (args){
return cljs.core.deref.call(null,g__31662__auto___31810);
});})(g__31662__auto___31810))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__31662__auto___31810){
return (function (seq31777){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31777));
});})(g__31662__auto___31810))
;


var g__31662__auto___31814 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__31662__auto___31814){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__23660__auto__ = [];
var len__23653__auto___31815 = arguments.length;
var i__23654__auto___31816 = (0);
while(true){
if((i__23654__auto___31816 < len__23653__auto___31815)){
args__23660__auto__.push((arguments[i__23654__auto___31816]));

var G__31817 = (i__23654__auto___31816 + (1));
i__23654__auto___31816 = G__31817;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((0) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__23661__auto__);
});})(g__31662__auto___31814))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31662__auto___31814){
return (function (args){
return cljs.core.deref.call(null,g__31662__auto___31814);
});})(g__31662__auto___31814))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__31662__auto___31814){
return (function (seq31778){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31778));
});})(g__31662__auto___31814))
;


var g__31662__auto___31818 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__31662__auto___31818){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__23660__auto__ = [];
var len__23653__auto___31819 = arguments.length;
var i__23654__auto___31820 = (0);
while(true){
if((i__23654__auto___31820 < len__23653__auto___31819)){
args__23660__auto__.push((arguments[i__23654__auto___31820]));

var G__31821 = (i__23654__auto___31820 + (1));
i__23654__auto___31820 = G__31821;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((0) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__23661__auto__);
});})(g__31662__auto___31818))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31662__auto___31818){
return (function (args){
return cljs.core.deref.call(null,g__31662__auto___31818);
});})(g__31662__auto___31818))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__31662__auto___31818){
return (function (seq31779){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31779));
});})(g__31662__auto___31818))
;


var g__31662__auto___31822 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__31662__auto___31822){
return (function cljs$spec$impl$gen$double(var_args){
var args__23660__auto__ = [];
var len__23653__auto___31823 = arguments.length;
var i__23654__auto___31824 = (0);
while(true){
if((i__23654__auto___31824 < len__23653__auto___31823)){
args__23660__auto__.push((arguments[i__23654__auto___31824]));

var G__31825 = (i__23654__auto___31824 + (1));
i__23654__auto___31824 = G__31825;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((0) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__23661__auto__);
});})(g__31662__auto___31822))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31662__auto___31822){
return (function (args){
return cljs.core.deref.call(null,g__31662__auto___31822);
});})(g__31662__auto___31822))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__31662__auto___31822){
return (function (seq31780){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31780));
});})(g__31662__auto___31822))
;


var g__31662__auto___31826 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__31662__auto___31826){
return (function cljs$spec$impl$gen$int(var_args){
var args__23660__auto__ = [];
var len__23653__auto___31827 = arguments.length;
var i__23654__auto___31828 = (0);
while(true){
if((i__23654__auto___31828 < len__23653__auto___31827)){
args__23660__auto__.push((arguments[i__23654__auto___31828]));

var G__31829 = (i__23654__auto___31828 + (1));
i__23654__auto___31828 = G__31829;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((0) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__23661__auto__);
});})(g__31662__auto___31826))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31662__auto___31826){
return (function (args){
return cljs.core.deref.call(null,g__31662__auto___31826);
});})(g__31662__auto___31826))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__31662__auto___31826){
return (function (seq31781){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31781));
});})(g__31662__auto___31826))
;


var g__31662__auto___31830 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__31662__auto___31830){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__23660__auto__ = [];
var len__23653__auto___31831 = arguments.length;
var i__23654__auto___31832 = (0);
while(true){
if((i__23654__auto___31832 < len__23653__auto___31831)){
args__23660__auto__.push((arguments[i__23654__auto___31832]));

var G__31833 = (i__23654__auto___31832 + (1));
i__23654__auto___31832 = G__31833;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((0) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__23661__auto__);
});})(g__31662__auto___31830))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31662__auto___31830){
return (function (args){
return cljs.core.deref.call(null,g__31662__auto___31830);
});})(g__31662__auto___31830))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__31662__auto___31830){
return (function (seq31782){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31782));
});})(g__31662__auto___31830))
;


var g__31662__auto___31834 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__31662__auto___31834){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__23660__auto__ = [];
var len__23653__auto___31835 = arguments.length;
var i__23654__auto___31836 = (0);
while(true){
if((i__23654__auto___31836 < len__23653__auto___31835)){
args__23660__auto__.push((arguments[i__23654__auto___31836]));

var G__31837 = (i__23654__auto___31836 + (1));
i__23654__auto___31836 = G__31837;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((0) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__23661__auto__);
});})(g__31662__auto___31834))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31662__auto___31834){
return (function (args){
return cljs.core.deref.call(null,g__31662__auto___31834);
});})(g__31662__auto___31834))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__31662__auto___31834){
return (function (seq31783){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31783));
});})(g__31662__auto___31834))
;


var g__31662__auto___31838 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__31662__auto___31838){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__23660__auto__ = [];
var len__23653__auto___31839 = arguments.length;
var i__23654__auto___31840 = (0);
while(true){
if((i__23654__auto___31840 < len__23653__auto___31839)){
args__23660__auto__.push((arguments[i__23654__auto___31840]));

var G__31841 = (i__23654__auto___31840 + (1));
i__23654__auto___31840 = G__31841;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((0) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__23661__auto__);
});})(g__31662__auto___31838))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31662__auto___31838){
return (function (args){
return cljs.core.deref.call(null,g__31662__auto___31838);
});})(g__31662__auto___31838))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__31662__auto___31838){
return (function (seq31784){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31784));
});})(g__31662__auto___31838))
;


var g__31662__auto___31842 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__31662__auto___31842){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__23660__auto__ = [];
var len__23653__auto___31843 = arguments.length;
var i__23654__auto___31844 = (0);
while(true){
if((i__23654__auto___31844 < len__23653__auto___31843)){
args__23660__auto__.push((arguments[i__23654__auto___31844]));

var G__31845 = (i__23654__auto___31844 + (1));
i__23654__auto___31844 = G__31845;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((0) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__23661__auto__);
});})(g__31662__auto___31842))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31662__auto___31842){
return (function (args){
return cljs.core.deref.call(null,g__31662__auto___31842);
});})(g__31662__auto___31842))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__31662__auto___31842){
return (function (seq31785){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31785));
});})(g__31662__auto___31842))
;


var g__31662__auto___31846 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__31662__auto___31846){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__23660__auto__ = [];
var len__23653__auto___31847 = arguments.length;
var i__23654__auto___31848 = (0);
while(true){
if((i__23654__auto___31848 < len__23653__auto___31847)){
args__23660__auto__.push((arguments[i__23654__auto___31848]));

var G__31849 = (i__23654__auto___31848 + (1));
i__23654__auto___31848 = G__31849;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((0) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__23661__auto__);
});})(g__31662__auto___31846))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31662__auto___31846){
return (function (args){
return cljs.core.deref.call(null,g__31662__auto___31846);
});})(g__31662__auto___31846))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__31662__auto___31846){
return (function (seq31786){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31786));
});})(g__31662__auto___31846))
;


var g__31662__auto___31850 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__31662__auto___31850){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__23660__auto__ = [];
var len__23653__auto___31851 = arguments.length;
var i__23654__auto___31852 = (0);
while(true){
if((i__23654__auto___31852 < len__23653__auto___31851)){
args__23660__auto__.push((arguments[i__23654__auto___31852]));

var G__31853 = (i__23654__auto___31852 + (1));
i__23654__auto___31852 = G__31853;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((0) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__23661__auto__);
});})(g__31662__auto___31850))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31662__auto___31850){
return (function (args){
return cljs.core.deref.call(null,g__31662__auto___31850);
});})(g__31662__auto___31850))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__31662__auto___31850){
return (function (seq31787){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31787));
});})(g__31662__auto___31850))
;


var g__31662__auto___31854 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__31662__auto___31854){
return (function cljs$spec$impl$gen$string(var_args){
var args__23660__auto__ = [];
var len__23653__auto___31855 = arguments.length;
var i__23654__auto___31856 = (0);
while(true){
if((i__23654__auto___31856 < len__23653__auto___31855)){
args__23660__auto__.push((arguments[i__23654__auto___31856]));

var G__31857 = (i__23654__auto___31856 + (1));
i__23654__auto___31856 = G__31857;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((0) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__23661__auto__);
});})(g__31662__auto___31854))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31662__auto___31854){
return (function (args){
return cljs.core.deref.call(null,g__31662__auto___31854);
});})(g__31662__auto___31854))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__31662__auto___31854){
return (function (seq31788){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31788));
});})(g__31662__auto___31854))
;


var g__31662__auto___31858 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__31662__auto___31858){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__23660__auto__ = [];
var len__23653__auto___31859 = arguments.length;
var i__23654__auto___31860 = (0);
while(true){
if((i__23654__auto___31860 < len__23653__auto___31859)){
args__23660__auto__.push((arguments[i__23654__auto___31860]));

var G__31861 = (i__23654__auto___31860 + (1));
i__23654__auto___31860 = G__31861;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((0) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__23661__auto__);
});})(g__31662__auto___31858))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31662__auto___31858){
return (function (args){
return cljs.core.deref.call(null,g__31662__auto___31858);
});})(g__31662__auto___31858))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__31662__auto___31858){
return (function (seq31789){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31789));
});})(g__31662__auto___31858))
;


var g__31662__auto___31862 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__31662__auto___31862){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__23660__auto__ = [];
var len__23653__auto___31863 = arguments.length;
var i__23654__auto___31864 = (0);
while(true){
if((i__23654__auto___31864 < len__23653__auto___31863)){
args__23660__auto__.push((arguments[i__23654__auto___31864]));

var G__31865 = (i__23654__auto___31864 + (1));
i__23654__auto___31864 = G__31865;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((0) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__23661__auto__);
});})(g__31662__auto___31862))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31662__auto___31862){
return (function (args){
return cljs.core.deref.call(null,g__31662__auto___31862);
});})(g__31662__auto___31862))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__31662__auto___31862){
return (function (seq31790){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31790));
});})(g__31662__auto___31862))
;


var g__31662__auto___31866 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__31662__auto___31866){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__23660__auto__ = [];
var len__23653__auto___31867 = arguments.length;
var i__23654__auto___31868 = (0);
while(true){
if((i__23654__auto___31868 < len__23653__auto___31867)){
args__23660__auto__.push((arguments[i__23654__auto___31868]));

var G__31869 = (i__23654__auto___31868 + (1));
i__23654__auto___31868 = G__31869;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((0) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__23661__auto__);
});})(g__31662__auto___31866))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31662__auto___31866){
return (function (args){
return cljs.core.deref.call(null,g__31662__auto___31866);
});})(g__31662__auto___31866))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__31662__auto___31866){
return (function (seq31791){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31791));
});})(g__31662__auto___31866))
;


var g__31662__auto___31870 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__31662__auto___31870){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__23660__auto__ = [];
var len__23653__auto___31871 = arguments.length;
var i__23654__auto___31872 = (0);
while(true){
if((i__23654__auto___31872 < len__23653__auto___31871)){
args__23660__auto__.push((arguments[i__23654__auto___31872]));

var G__31873 = (i__23654__auto___31872 + (1));
i__23654__auto___31872 = G__31873;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((0) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__23661__auto__);
});})(g__31662__auto___31870))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31662__auto___31870){
return (function (args){
return cljs.core.deref.call(null,g__31662__auto___31870);
});})(g__31662__auto___31870))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__31662__auto___31870){
return (function (seq31792){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31792));
});})(g__31662__auto___31870))
;


var g__31662__auto___31874 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__31662__auto___31874){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__23660__auto__ = [];
var len__23653__auto___31875 = arguments.length;
var i__23654__auto___31876 = (0);
while(true){
if((i__23654__auto___31876 < len__23653__auto___31875)){
args__23660__auto__.push((arguments[i__23654__auto___31876]));

var G__31877 = (i__23654__auto___31876 + (1));
i__23654__auto___31876 = G__31877;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((0) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__23661__auto__);
});})(g__31662__auto___31874))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31662__auto___31874){
return (function (args){
return cljs.core.deref.call(null,g__31662__auto___31874);
});})(g__31662__auto___31874))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__31662__auto___31874){
return (function (seq31793){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31793));
});})(g__31662__auto___31874))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__23660__auto__ = [];
var len__23653__auto___31880 = arguments.length;
var i__23654__auto___31881 = (0);
while(true){
if((i__23654__auto___31881 < len__23653__auto___31880)){
args__23660__auto__.push((arguments[i__23654__auto___31881]));

var G__31882 = (i__23654__auto___31881 + (1));
i__23654__auto___31881 = G__31882;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((0) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__23661__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__31878_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__31878_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq31879){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31879));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__31883_SHARP_){
return (new Date(p1__31883_SHARP_));
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

//# sourceMappingURL=gen.js.map?rel=1473455235075