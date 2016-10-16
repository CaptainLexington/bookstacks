// Compiled by ClojureScript 1.9.89 {}
goog.provide('camel_snake_kebab.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('camel_snake_kebab.internals.misc');
goog.require('camel_snake_kebab.internals.alter_name');
/**
 * Converts the case of a string according to the rule for the first
 *   word, remaining words, and the separator.
 */
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
var args__26652__auto__ = [];
var len__26645__auto___29059 = arguments.length;
var i__26646__auto___29060 = (0);
while(true){
if((i__26646__auto___29060 < len__26645__auto___29059)){
args__26652__auto__.push((arguments[i__26646__auto___29060]));

var G__29061 = (i__26646__auto___29060 + (1));
i__26646__auto___29060 = G__29061;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((4) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__26653__auto__);
});

camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,rest){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,first_fn,rest_fn,sep,s,rest);
});

camel_snake_kebab.core.convert_case.cljs$lang$maxFixedArity = (4);

camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq29054){
var G__29055 = cljs.core.first.call(null,seq29054);
var seq29054__$1 = cljs.core.next.call(null,seq29054);
var G__29056 = cljs.core.first.call(null,seq29054__$1);
var seq29054__$2 = cljs.core.next.call(null,seq29054__$1);
var G__29057 = cljs.core.first.call(null,seq29054__$2);
var seq29054__$3 = cljs.core.next.call(null,seq29054__$2);
var G__29058 = cljs.core.first.call(null,seq29054__$3);
var seq29054__$4 = cljs.core.next.call(null,seq29054__$3);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__29055,G__29056,G__29057,G__29058,seq29054__$4);
});

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__26652__auto__ = [];
var len__26645__auto___29070 = arguments.length;
var i__26646__auto___29071 = (0);
while(true){
if((i__26646__auto___29071 < len__26645__auto___29070)){
args__26652__auto__.push((arguments[i__26646__auto___29071]));

var G__29072 = (i__26646__auto___29071 + (1));
i__26646__auto___29071 = G__29072;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((1) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26653__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__29021__auto__,rest__29022__auto__){
var convert_case__29023__auto__ = (function (p1__29020__29024__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__29020__29024__auto__,rest__29022__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__29021__auto__,convert_case__29023__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq29062){
var G__29063 = cljs.core.first.call(null,seq29062);
var seq29062__$1 = cljs.core.next.call(null,seq29062);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic(G__29063,seq29062__$1);
});


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__26652__auto__ = [];
var len__26645__auto___29073 = arguments.length;
var i__26646__auto___29074 = (0);
while(true){
if((i__26646__auto___29074 < len__26645__auto___29073)){
args__26652__auto__.push((arguments[i__26646__auto___29074]));

var G__29075 = (i__26646__auto___29074 + (1));
i__26646__auto___29074 = G__29075;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((1) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26653__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__29026__auto__,rest__29027__auto__){
if(!((s__29026__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__29026__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__29026__auto__),rest__29027__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq29064){
var G__29065 = cljs.core.first.call(null,seq29064);
var seq29064__$1 = cljs.core.next.call(null,seq29064);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic(G__29065,seq29064__$1);
});


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__26652__auto__ = [];
var len__26645__auto___29076 = arguments.length;
var i__26646__auto___29077 = (0);
while(true){
if((i__26646__auto___29077 < len__26645__auto___29076)){
args__26652__auto__.push((arguments[i__26646__auto___29077]));

var G__29078 = (i__26646__auto___29077 + (1));
i__26646__auto___29077 = G__29078;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((1) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26653__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__29026__auto__,rest__29027__auto__){
if(!((s__29026__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__29026__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__29026__auto__),rest__29027__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq29066){
var G__29067 = cljs.core.first.call(null,seq29066);
var seq29066__$1 = cljs.core.next.call(null,seq29066);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__29067,seq29066__$1);
});


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__26652__auto__ = [];
var len__26645__auto___29079 = arguments.length;
var i__26646__auto___29080 = (0);
while(true){
if((i__26646__auto___29080 < len__26645__auto___29079)){
args__26652__auto__.push((arguments[i__26646__auto___29080]));

var G__29081 = (i__26646__auto___29080 + (1));
i__26646__auto___29080 = G__29081;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((1) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26653__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__29026__auto__,rest__29027__auto__){
if(!((s__29026__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__29026__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__29026__auto__),rest__29027__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq29068){
var G__29069 = cljs.core.first.call(null,seq29068);
var seq29068__$1 = cljs.core.next.call(null,seq29068);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__29069,seq29068__$1);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__26652__auto__ = [];
var len__26645__auto___29090 = arguments.length;
var i__26646__auto___29091 = (0);
while(true){
if((i__26646__auto___29091 < len__26645__auto___29090)){
args__26652__auto__.push((arguments[i__26646__auto___29091]));

var G__29092 = (i__26646__auto___29091 + (1));
i__26646__auto___29091 = G__29092;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((1) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26653__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__29021__auto__,rest__29022__auto__){
var convert_case__29023__auto__ = (function (p1__29020__29024__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__29020__29024__auto__,rest__29022__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__29021__auto__,convert_case__29023__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq29082){
var G__29083 = cljs.core.first.call(null,seq29082);
var seq29082__$1 = cljs.core.next.call(null,seq29082);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic(G__29083,seq29082__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__26652__auto__ = [];
var len__26645__auto___29093 = arguments.length;
var i__26646__auto___29094 = (0);
while(true){
if((i__26646__auto___29094 < len__26645__auto___29093)){
args__26652__auto__.push((arguments[i__26646__auto___29094]));

var G__29095 = (i__26646__auto___29094 + (1));
i__26646__auto___29094 = G__29095;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((1) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26653__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__29026__auto__,rest__29027__auto__){
if(!((s__29026__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__29026__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__29026__auto__),rest__29027__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq29084){
var G__29085 = cljs.core.first.call(null,seq29084);
var seq29084__$1 = cljs.core.next.call(null,seq29084);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__29085,seq29084__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__26652__auto__ = [];
var len__26645__auto___29096 = arguments.length;
var i__26646__auto___29097 = (0);
while(true){
if((i__26646__auto___29097 < len__26645__auto___29096)){
args__26652__auto__.push((arguments[i__26646__auto___29097]));

var G__29098 = (i__26646__auto___29097 + (1));
i__26646__auto___29097 = G__29098;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((1) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26653__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__29026__auto__,rest__29027__auto__){
if(!((s__29026__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__29026__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__29026__auto__),rest__29027__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq29086){
var G__29087 = cljs.core.first.call(null,seq29086);
var seq29086__$1 = cljs.core.next.call(null,seq29086);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__29087,seq29086__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__26652__auto__ = [];
var len__26645__auto___29099 = arguments.length;
var i__26646__auto___29100 = (0);
while(true){
if((i__26646__auto___29100 < len__26645__auto___29099)){
args__26652__auto__.push((arguments[i__26646__auto___29100]));

var G__29101 = (i__26646__auto___29100 + (1));
i__26646__auto___29100 = G__29101;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((1) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26653__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__29026__auto__,rest__29027__auto__){
if(!((s__29026__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__29026__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__29026__auto__),rest__29027__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq29088){
var G__29089 = cljs.core.first.call(null,seq29088);
var seq29088__$1 = cljs.core.next.call(null,seq29088);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__29089,seq29088__$1);
});

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__26652__auto__ = [];
var len__26645__auto___29110 = arguments.length;
var i__26646__auto___29111 = (0);
while(true){
if((i__26646__auto___29111 < len__26645__auto___29110)){
args__26652__auto__.push((arguments[i__26646__auto___29111]));

var G__29112 = (i__26646__auto___29111 + (1));
i__26646__auto___29111 = G__29112;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((1) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26653__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__29021__auto__,rest__29022__auto__){
var convert_case__29023__auto__ = (function (p1__29020__29024__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__29020__29024__auto__,rest__29022__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__29021__auto__,convert_case__29023__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq29102){
var G__29103 = cljs.core.first.call(null,seq29102);
var seq29102__$1 = cljs.core.next.call(null,seq29102);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic(G__29103,seq29102__$1);
});


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__26652__auto__ = [];
var len__26645__auto___29113 = arguments.length;
var i__26646__auto___29114 = (0);
while(true){
if((i__26646__auto___29114 < len__26645__auto___29113)){
args__26652__auto__.push((arguments[i__26646__auto___29114]));

var G__29115 = (i__26646__auto___29114 + (1));
i__26646__auto___29114 = G__29115;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((1) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26653__auto__);
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__29026__auto__,rest__29027__auto__){
if(!((s__29026__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__29026__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__29026__auto__),rest__29027__auto__));
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq29104){
var G__29105 = cljs.core.first.call(null,seq29104);
var seq29104__$1 = cljs.core.next.call(null,seq29104);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic(G__29105,seq29104__$1);
});


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__26652__auto__ = [];
var len__26645__auto___29116 = arguments.length;
var i__26646__auto___29117 = (0);
while(true){
if((i__26646__auto___29117 < len__26645__auto___29116)){
args__26652__auto__.push((arguments[i__26646__auto___29117]));

var G__29118 = (i__26646__auto___29117 + (1));
i__26646__auto___29117 = G__29118;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((1) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26653__auto__);
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__29026__auto__,rest__29027__auto__){
if(!((s__29026__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__29026__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__29026__auto__),rest__29027__auto__));
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq29106){
var G__29107 = cljs.core.first.call(null,seq29106);
var seq29106__$1 = cljs.core.next.call(null,seq29106);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__29107,seq29106__$1);
});


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__26652__auto__ = [];
var len__26645__auto___29119 = arguments.length;
var i__26646__auto___29120 = (0);
while(true){
if((i__26646__auto___29120 < len__26645__auto___29119)){
args__26652__auto__.push((arguments[i__26646__auto___29120]));

var G__29121 = (i__26646__auto___29120 + (1));
i__26646__auto___29120 = G__29121;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((1) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26653__auto__);
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__29026__auto__,rest__29027__auto__){
if(!((s__29026__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__29026__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__29026__auto__),rest__29027__auto__));
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq29108){
var G__29109 = cljs.core.first.call(null,seq29108);
var seq29108__$1 = cljs.core.next.call(null,seq29108);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__29109,seq29108__$1);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__26652__auto__ = [];
var len__26645__auto___29130 = arguments.length;
var i__26646__auto___29131 = (0);
while(true){
if((i__26646__auto___29131 < len__26645__auto___29130)){
args__26652__auto__.push((arguments[i__26646__auto___29131]));

var G__29132 = (i__26646__auto___29131 + (1));
i__26646__auto___29131 = G__29132;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((1) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26653__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__29021__auto__,rest__29022__auto__){
var convert_case__29023__auto__ = (function (p1__29020__29024__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__29020__29024__auto__,rest__29022__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__29021__auto__,convert_case__29023__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq29122){
var G__29123 = cljs.core.first.call(null,seq29122);
var seq29122__$1 = cljs.core.next.call(null,seq29122);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic(G__29123,seq29122__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__26652__auto__ = [];
var len__26645__auto___29133 = arguments.length;
var i__26646__auto___29134 = (0);
while(true){
if((i__26646__auto___29134 < len__26645__auto___29133)){
args__26652__auto__.push((arguments[i__26646__auto___29134]));

var G__29135 = (i__26646__auto___29134 + (1));
i__26646__auto___29134 = G__29135;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((1) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26653__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__29026__auto__,rest__29027__auto__){
if(!((s__29026__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__29026__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__29026__auto__),rest__29027__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq29124){
var G__29125 = cljs.core.first.call(null,seq29124);
var seq29124__$1 = cljs.core.next.call(null,seq29124);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic(G__29125,seq29124__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__26652__auto__ = [];
var len__26645__auto___29136 = arguments.length;
var i__26646__auto___29137 = (0);
while(true){
if((i__26646__auto___29137 < len__26645__auto___29136)){
args__26652__auto__.push((arguments[i__26646__auto___29137]));

var G__29138 = (i__26646__auto___29137 + (1));
i__26646__auto___29137 = G__29138;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((1) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26653__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__29026__auto__,rest__29027__auto__){
if(!((s__29026__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__29026__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__29026__auto__),rest__29027__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq29126){
var G__29127 = cljs.core.first.call(null,seq29126);
var seq29126__$1 = cljs.core.next.call(null,seq29126);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic(G__29127,seq29126__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__26652__auto__ = [];
var len__26645__auto___29139 = arguments.length;
var i__26646__auto___29140 = (0);
while(true){
if((i__26646__auto___29140 < len__26645__auto___29139)){
args__26652__auto__.push((arguments[i__26646__auto___29140]));

var G__29141 = (i__26646__auto___29140 + (1));
i__26646__auto___29140 = G__29141;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((1) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26653__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__29026__auto__,rest__29027__auto__){
if(!((s__29026__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__29026__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__29026__auto__),rest__29027__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq29128){
var G__29129 = cljs.core.first.call(null,seq29128);
var seq29128__$1 = cljs.core.next.call(null,seq29128);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic(G__29129,seq29128__$1);
});

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__26652__auto__ = [];
var len__26645__auto___29150 = arguments.length;
var i__26646__auto___29151 = (0);
while(true){
if((i__26646__auto___29151 < len__26645__auto___29150)){
args__26652__auto__.push((arguments[i__26646__auto___29151]));

var G__29152 = (i__26646__auto___29151 + (1));
i__26646__auto___29151 = G__29152;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((1) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26653__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__29021__auto__,rest__29022__auto__){
var convert_case__29023__auto__ = (function (p1__29020__29024__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__29020__29024__auto__,rest__29022__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__29021__auto__,convert_case__29023__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq29142){
var G__29143 = cljs.core.first.call(null,seq29142);
var seq29142__$1 = cljs.core.next.call(null,seq29142);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic(G__29143,seq29142__$1);
});


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__26652__auto__ = [];
var len__26645__auto___29153 = arguments.length;
var i__26646__auto___29154 = (0);
while(true){
if((i__26646__auto___29154 < len__26645__auto___29153)){
args__26652__auto__.push((arguments[i__26646__auto___29154]));

var G__29155 = (i__26646__auto___29154 + (1));
i__26646__auto___29154 = G__29155;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((1) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26653__auto__);
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__29026__auto__,rest__29027__auto__){
if(!((s__29026__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__29026__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__29026__auto__),rest__29027__auto__));
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq29144){
var G__29145 = cljs.core.first.call(null,seq29144);
var seq29144__$1 = cljs.core.next.call(null,seq29144);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic(G__29145,seq29144__$1);
});


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__26652__auto__ = [];
var len__26645__auto___29156 = arguments.length;
var i__26646__auto___29157 = (0);
while(true){
if((i__26646__auto___29157 < len__26645__auto___29156)){
args__26652__auto__.push((arguments[i__26646__auto___29157]));

var G__29158 = (i__26646__auto___29157 + (1));
i__26646__auto___29157 = G__29158;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((1) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26653__auto__);
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__29026__auto__,rest__29027__auto__){
if(!((s__29026__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__29026__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__29026__auto__),rest__29027__auto__));
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq29146){
var G__29147 = cljs.core.first.call(null,seq29146);
var seq29146__$1 = cljs.core.next.call(null,seq29146);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__29147,seq29146__$1);
});


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__26652__auto__ = [];
var len__26645__auto___29159 = arguments.length;
var i__26646__auto___29160 = (0);
while(true){
if((i__26646__auto___29160 < len__26645__auto___29159)){
args__26652__auto__.push((arguments[i__26646__auto___29160]));

var G__29161 = (i__26646__auto___29160 + (1));
i__26646__auto___29160 = G__29161;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((1) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26653__auto__);
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__29026__auto__,rest__29027__auto__){
if(!((s__29026__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__29026__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__29026__auto__),rest__29027__auto__));
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq29148){
var G__29149 = cljs.core.first.call(null,seq29148);
var seq29148__$1 = cljs.core.next.call(null,seq29148);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__29149,seq29148__$1);
});

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__26652__auto__ = [];
var len__26645__auto___29170 = arguments.length;
var i__26646__auto___29171 = (0);
while(true){
if((i__26646__auto___29171 < len__26645__auto___29170)){
args__26652__auto__.push((arguments[i__26646__auto___29171]));

var G__29172 = (i__26646__auto___29171 + (1));
i__26646__auto___29171 = G__29172;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((1) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26653__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__29021__auto__,rest__29022__auto__){
var convert_case__29023__auto__ = (function (p1__29020__29024__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__29020__29024__auto__,rest__29022__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__29021__auto__,convert_case__29023__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq29162){
var G__29163 = cljs.core.first.call(null,seq29162);
var seq29162__$1 = cljs.core.next.call(null,seq29162);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic(G__29163,seq29162__$1);
});


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__26652__auto__ = [];
var len__26645__auto___29173 = arguments.length;
var i__26646__auto___29174 = (0);
while(true){
if((i__26646__auto___29174 < len__26645__auto___29173)){
args__26652__auto__.push((arguments[i__26646__auto___29174]));

var G__29175 = (i__26646__auto___29174 + (1));
i__26646__auto___29174 = G__29175;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((1) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26653__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__29026__auto__,rest__29027__auto__){
if(!((s__29026__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__29026__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__29026__auto__),rest__29027__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq29164){
var G__29165 = cljs.core.first.call(null,seq29164);
var seq29164__$1 = cljs.core.next.call(null,seq29164);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic(G__29165,seq29164__$1);
});


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__26652__auto__ = [];
var len__26645__auto___29176 = arguments.length;
var i__26646__auto___29177 = (0);
while(true){
if((i__26646__auto___29177 < len__26645__auto___29176)){
args__26652__auto__.push((arguments[i__26646__auto___29177]));

var G__29178 = (i__26646__auto___29177 + (1));
i__26646__auto___29177 = G__29178;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((1) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26653__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__29026__auto__,rest__29027__auto__){
if(!((s__29026__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__29026__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__29026__auto__),rest__29027__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq29166){
var G__29167 = cljs.core.first.call(null,seq29166);
var seq29166__$1 = cljs.core.next.call(null,seq29166);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__29167,seq29166__$1);
});


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__26652__auto__ = [];
var len__26645__auto___29179 = arguments.length;
var i__26646__auto___29180 = (0);
while(true){
if((i__26646__auto___29180 < len__26645__auto___29179)){
args__26652__auto__.push((arguments[i__26646__auto___29180]));

var G__29181 = (i__26646__auto___29180 + (1));
i__26646__auto___29180 = G__29181;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((1) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26653__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__29026__auto__,rest__29027__auto__){
if(!((s__29026__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__29026__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__29026__auto__),rest__29027__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq29168){
var G__29169 = cljs.core.first.call(null,seq29168);
var seq29168__$1 = cljs.core.next.call(null,seq29168);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__29169,seq29168__$1);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__26652__auto__ = [];
var len__26645__auto___29190 = arguments.length;
var i__26646__auto___29191 = (0);
while(true){
if((i__26646__auto___29191 < len__26645__auto___29190)){
args__26652__auto__.push((arguments[i__26646__auto___29191]));

var G__29192 = (i__26646__auto___29191 + (1));
i__26646__auto___29191 = G__29192;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((1) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26653__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__29021__auto__,rest__29022__auto__){
var convert_case__29023__auto__ = (function (p1__29020__29024__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__29020__29024__auto__,rest__29022__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__29021__auto__,convert_case__29023__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq29182){
var G__29183 = cljs.core.first.call(null,seq29182);
var seq29182__$1 = cljs.core.next.call(null,seq29182);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic(G__29183,seq29182__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__26652__auto__ = [];
var len__26645__auto___29193 = arguments.length;
var i__26646__auto___29194 = (0);
while(true){
if((i__26646__auto___29194 < len__26645__auto___29193)){
args__26652__auto__.push((arguments[i__26646__auto___29194]));

var G__29195 = (i__26646__auto___29194 + (1));
i__26646__auto___29194 = G__29195;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((1) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26653__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__29026__auto__,rest__29027__auto__){
if(!((s__29026__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__29026__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__29026__auto__),rest__29027__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq29184){
var G__29185 = cljs.core.first.call(null,seq29184);
var seq29184__$1 = cljs.core.next.call(null,seq29184);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__29185,seq29184__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__26652__auto__ = [];
var len__26645__auto___29196 = arguments.length;
var i__26646__auto___29197 = (0);
while(true){
if((i__26646__auto___29197 < len__26645__auto___29196)){
args__26652__auto__.push((arguments[i__26646__auto___29197]));

var G__29198 = (i__26646__auto___29197 + (1));
i__26646__auto___29197 = G__29198;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((1) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26653__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__29026__auto__,rest__29027__auto__){
if(!((s__29026__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__29026__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__29026__auto__),rest__29027__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq29186){
var G__29187 = cljs.core.first.call(null,seq29186);
var seq29186__$1 = cljs.core.next.call(null,seq29186);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__29187,seq29186__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__26652__auto__ = [];
var len__26645__auto___29199 = arguments.length;
var i__26646__auto___29200 = (0);
while(true){
if((i__26646__auto___29200 < len__26645__auto___29199)){
args__26652__auto__.push((arguments[i__26646__auto___29200]));

var G__29201 = (i__26646__auto___29200 + (1));
i__26646__auto___29200 = G__29201;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((1) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26653__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__29026__auto__,rest__29027__auto__){
if(!((s__29026__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__29026__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__29026__auto__),rest__29027__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq29188){
var G__29189 = cljs.core.first.call(null,seq29188);
var seq29188__$1 = cljs.core.next.call(null,seq29188);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__29189,seq29188__$1);
});


//# sourceMappingURL=core.js.map?rel=1476574112001