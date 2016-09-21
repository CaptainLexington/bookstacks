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
var args__23660__auto__ = [];
var len__23653__auto___25649 = arguments.length;
var i__23654__auto___25650 = (0);
while(true){
if((i__23654__auto___25650 < len__23653__auto___25649)){
args__23660__auto__.push((arguments[i__23654__auto___25650]));

var G__25651 = (i__23654__auto___25650 + (1));
i__23654__auto___25650 = G__25651;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((4) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__23661__auto__);
});

camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,rest){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,first_fn,rest_fn,sep,s,rest);
});

camel_snake_kebab.core.convert_case.cljs$lang$maxFixedArity = (4);

camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq25644){
var G__25645 = cljs.core.first.call(null,seq25644);
var seq25644__$1 = cljs.core.next.call(null,seq25644);
var G__25646 = cljs.core.first.call(null,seq25644__$1);
var seq25644__$2 = cljs.core.next.call(null,seq25644__$1);
var G__25647 = cljs.core.first.call(null,seq25644__$2);
var seq25644__$3 = cljs.core.next.call(null,seq25644__$2);
var G__25648 = cljs.core.first.call(null,seq25644__$3);
var seq25644__$4 = cljs.core.next.call(null,seq25644__$3);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__25645,G__25646,G__25647,G__25648,seq25644__$4);
});

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__23660__auto__ = [];
var len__23653__auto___25660 = arguments.length;
var i__23654__auto___25661 = (0);
while(true){
if((i__23654__auto___25661 < len__23653__auto___25660)){
args__23660__auto__.push((arguments[i__23654__auto___25661]));

var G__25662 = (i__23654__auto___25661 + (1));
i__23654__auto___25661 = G__25662;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((1) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23661__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__25611__auto__,rest__25612__auto__){
var convert_case__25613__auto__ = (function (p1__25610__25614__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__25610__25614__auto__,rest__25612__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__25611__auto__,convert_case__25613__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq25652){
var G__25653 = cljs.core.first.call(null,seq25652);
var seq25652__$1 = cljs.core.next.call(null,seq25652);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic(G__25653,seq25652__$1);
});


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__23660__auto__ = [];
var len__23653__auto___25663 = arguments.length;
var i__23654__auto___25664 = (0);
while(true){
if((i__23654__auto___25664 < len__23653__auto___25663)){
args__23660__auto__.push((arguments[i__23654__auto___25664]));

var G__25665 = (i__23654__auto___25664 + (1));
i__23654__auto___25664 = G__25665;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((1) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23661__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__25616__auto__,rest__25617__auto__){
if(!((s__25616__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__25616__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__25616__auto__),rest__25617__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq25654){
var G__25655 = cljs.core.first.call(null,seq25654);
var seq25654__$1 = cljs.core.next.call(null,seq25654);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic(G__25655,seq25654__$1);
});


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__23660__auto__ = [];
var len__23653__auto___25666 = arguments.length;
var i__23654__auto___25667 = (0);
while(true){
if((i__23654__auto___25667 < len__23653__auto___25666)){
args__23660__auto__.push((arguments[i__23654__auto___25667]));

var G__25668 = (i__23654__auto___25667 + (1));
i__23654__auto___25667 = G__25668;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((1) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23661__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__25616__auto__,rest__25617__auto__){
if(!((s__25616__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__25616__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__25616__auto__),rest__25617__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq25656){
var G__25657 = cljs.core.first.call(null,seq25656);
var seq25656__$1 = cljs.core.next.call(null,seq25656);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__25657,seq25656__$1);
});


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__23660__auto__ = [];
var len__23653__auto___25669 = arguments.length;
var i__23654__auto___25670 = (0);
while(true){
if((i__23654__auto___25670 < len__23653__auto___25669)){
args__23660__auto__.push((arguments[i__23654__auto___25670]));

var G__25671 = (i__23654__auto___25670 + (1));
i__23654__auto___25670 = G__25671;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((1) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23661__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__25616__auto__,rest__25617__auto__){
if(!((s__25616__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__25616__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__25616__auto__),rest__25617__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq25658){
var G__25659 = cljs.core.first.call(null,seq25658);
var seq25658__$1 = cljs.core.next.call(null,seq25658);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__25659,seq25658__$1);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__23660__auto__ = [];
var len__23653__auto___25680 = arguments.length;
var i__23654__auto___25681 = (0);
while(true){
if((i__23654__auto___25681 < len__23653__auto___25680)){
args__23660__auto__.push((arguments[i__23654__auto___25681]));

var G__25682 = (i__23654__auto___25681 + (1));
i__23654__auto___25681 = G__25682;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((1) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23661__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__25611__auto__,rest__25612__auto__){
var convert_case__25613__auto__ = (function (p1__25610__25614__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__25610__25614__auto__,rest__25612__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__25611__auto__,convert_case__25613__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq25672){
var G__25673 = cljs.core.first.call(null,seq25672);
var seq25672__$1 = cljs.core.next.call(null,seq25672);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic(G__25673,seq25672__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__23660__auto__ = [];
var len__23653__auto___25683 = arguments.length;
var i__23654__auto___25684 = (0);
while(true){
if((i__23654__auto___25684 < len__23653__auto___25683)){
args__23660__auto__.push((arguments[i__23654__auto___25684]));

var G__25685 = (i__23654__auto___25684 + (1));
i__23654__auto___25684 = G__25685;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((1) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23661__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__25616__auto__,rest__25617__auto__){
if(!((s__25616__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__25616__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__25616__auto__),rest__25617__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq25674){
var G__25675 = cljs.core.first.call(null,seq25674);
var seq25674__$1 = cljs.core.next.call(null,seq25674);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__25675,seq25674__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__23660__auto__ = [];
var len__23653__auto___25686 = arguments.length;
var i__23654__auto___25687 = (0);
while(true){
if((i__23654__auto___25687 < len__23653__auto___25686)){
args__23660__auto__.push((arguments[i__23654__auto___25687]));

var G__25688 = (i__23654__auto___25687 + (1));
i__23654__auto___25687 = G__25688;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((1) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23661__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__25616__auto__,rest__25617__auto__){
if(!((s__25616__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__25616__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__25616__auto__),rest__25617__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq25676){
var G__25677 = cljs.core.first.call(null,seq25676);
var seq25676__$1 = cljs.core.next.call(null,seq25676);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__25677,seq25676__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__23660__auto__ = [];
var len__23653__auto___25689 = arguments.length;
var i__23654__auto___25690 = (0);
while(true){
if((i__23654__auto___25690 < len__23653__auto___25689)){
args__23660__auto__.push((arguments[i__23654__auto___25690]));

var G__25691 = (i__23654__auto___25690 + (1));
i__23654__auto___25690 = G__25691;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((1) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23661__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__25616__auto__,rest__25617__auto__){
if(!((s__25616__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__25616__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__25616__auto__),rest__25617__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq25678){
var G__25679 = cljs.core.first.call(null,seq25678);
var seq25678__$1 = cljs.core.next.call(null,seq25678);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__25679,seq25678__$1);
});

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__23660__auto__ = [];
var len__23653__auto___25700 = arguments.length;
var i__23654__auto___25701 = (0);
while(true){
if((i__23654__auto___25701 < len__23653__auto___25700)){
args__23660__auto__.push((arguments[i__23654__auto___25701]));

var G__25702 = (i__23654__auto___25701 + (1));
i__23654__auto___25701 = G__25702;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((1) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23661__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__25611__auto__,rest__25612__auto__){
var convert_case__25613__auto__ = (function (p1__25610__25614__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__25610__25614__auto__,rest__25612__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__25611__auto__,convert_case__25613__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq25692){
var G__25693 = cljs.core.first.call(null,seq25692);
var seq25692__$1 = cljs.core.next.call(null,seq25692);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic(G__25693,seq25692__$1);
});


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__23660__auto__ = [];
var len__23653__auto___25703 = arguments.length;
var i__23654__auto___25704 = (0);
while(true){
if((i__23654__auto___25704 < len__23653__auto___25703)){
args__23660__auto__.push((arguments[i__23654__auto___25704]));

var G__25705 = (i__23654__auto___25704 + (1));
i__23654__auto___25704 = G__25705;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((1) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23661__auto__);
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__25616__auto__,rest__25617__auto__){
if(!((s__25616__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__25616__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__25616__auto__),rest__25617__auto__));
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq25694){
var G__25695 = cljs.core.first.call(null,seq25694);
var seq25694__$1 = cljs.core.next.call(null,seq25694);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic(G__25695,seq25694__$1);
});


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__23660__auto__ = [];
var len__23653__auto___25706 = arguments.length;
var i__23654__auto___25707 = (0);
while(true){
if((i__23654__auto___25707 < len__23653__auto___25706)){
args__23660__auto__.push((arguments[i__23654__auto___25707]));

var G__25708 = (i__23654__auto___25707 + (1));
i__23654__auto___25707 = G__25708;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((1) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23661__auto__);
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__25616__auto__,rest__25617__auto__){
if(!((s__25616__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__25616__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__25616__auto__),rest__25617__auto__));
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq25696){
var G__25697 = cljs.core.first.call(null,seq25696);
var seq25696__$1 = cljs.core.next.call(null,seq25696);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__25697,seq25696__$1);
});


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__23660__auto__ = [];
var len__23653__auto___25709 = arguments.length;
var i__23654__auto___25710 = (0);
while(true){
if((i__23654__auto___25710 < len__23653__auto___25709)){
args__23660__auto__.push((arguments[i__23654__auto___25710]));

var G__25711 = (i__23654__auto___25710 + (1));
i__23654__auto___25710 = G__25711;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((1) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23661__auto__);
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__25616__auto__,rest__25617__auto__){
if(!((s__25616__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__25616__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__25616__auto__),rest__25617__auto__));
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq25698){
var G__25699 = cljs.core.first.call(null,seq25698);
var seq25698__$1 = cljs.core.next.call(null,seq25698);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__25699,seq25698__$1);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__23660__auto__ = [];
var len__23653__auto___25720 = arguments.length;
var i__23654__auto___25721 = (0);
while(true){
if((i__23654__auto___25721 < len__23653__auto___25720)){
args__23660__auto__.push((arguments[i__23654__auto___25721]));

var G__25722 = (i__23654__auto___25721 + (1));
i__23654__auto___25721 = G__25722;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((1) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23661__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__25611__auto__,rest__25612__auto__){
var convert_case__25613__auto__ = (function (p1__25610__25614__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__25610__25614__auto__,rest__25612__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__25611__auto__,convert_case__25613__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq25712){
var G__25713 = cljs.core.first.call(null,seq25712);
var seq25712__$1 = cljs.core.next.call(null,seq25712);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic(G__25713,seq25712__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__23660__auto__ = [];
var len__23653__auto___25723 = arguments.length;
var i__23654__auto___25724 = (0);
while(true){
if((i__23654__auto___25724 < len__23653__auto___25723)){
args__23660__auto__.push((arguments[i__23654__auto___25724]));

var G__25725 = (i__23654__auto___25724 + (1));
i__23654__auto___25724 = G__25725;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((1) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23661__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__25616__auto__,rest__25617__auto__){
if(!((s__25616__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__25616__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__25616__auto__),rest__25617__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq25714){
var G__25715 = cljs.core.first.call(null,seq25714);
var seq25714__$1 = cljs.core.next.call(null,seq25714);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic(G__25715,seq25714__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__23660__auto__ = [];
var len__23653__auto___25726 = arguments.length;
var i__23654__auto___25727 = (0);
while(true){
if((i__23654__auto___25727 < len__23653__auto___25726)){
args__23660__auto__.push((arguments[i__23654__auto___25727]));

var G__25728 = (i__23654__auto___25727 + (1));
i__23654__auto___25727 = G__25728;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((1) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23661__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__25616__auto__,rest__25617__auto__){
if(!((s__25616__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__25616__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__25616__auto__),rest__25617__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq25716){
var G__25717 = cljs.core.first.call(null,seq25716);
var seq25716__$1 = cljs.core.next.call(null,seq25716);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic(G__25717,seq25716__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__23660__auto__ = [];
var len__23653__auto___25729 = arguments.length;
var i__23654__auto___25730 = (0);
while(true){
if((i__23654__auto___25730 < len__23653__auto___25729)){
args__23660__auto__.push((arguments[i__23654__auto___25730]));

var G__25731 = (i__23654__auto___25730 + (1));
i__23654__auto___25730 = G__25731;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((1) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23661__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__25616__auto__,rest__25617__auto__){
if(!((s__25616__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__25616__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__25616__auto__),rest__25617__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq25718){
var G__25719 = cljs.core.first.call(null,seq25718);
var seq25718__$1 = cljs.core.next.call(null,seq25718);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic(G__25719,seq25718__$1);
});

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__23660__auto__ = [];
var len__23653__auto___25740 = arguments.length;
var i__23654__auto___25741 = (0);
while(true){
if((i__23654__auto___25741 < len__23653__auto___25740)){
args__23660__auto__.push((arguments[i__23654__auto___25741]));

var G__25742 = (i__23654__auto___25741 + (1));
i__23654__auto___25741 = G__25742;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((1) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23661__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__25611__auto__,rest__25612__auto__){
var convert_case__25613__auto__ = (function (p1__25610__25614__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__25610__25614__auto__,rest__25612__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__25611__auto__,convert_case__25613__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq25732){
var G__25733 = cljs.core.first.call(null,seq25732);
var seq25732__$1 = cljs.core.next.call(null,seq25732);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic(G__25733,seq25732__$1);
});


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__23660__auto__ = [];
var len__23653__auto___25743 = arguments.length;
var i__23654__auto___25744 = (0);
while(true){
if((i__23654__auto___25744 < len__23653__auto___25743)){
args__23660__auto__.push((arguments[i__23654__auto___25744]));

var G__25745 = (i__23654__auto___25744 + (1));
i__23654__auto___25744 = G__25745;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((1) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23661__auto__);
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__25616__auto__,rest__25617__auto__){
if(!((s__25616__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__25616__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__25616__auto__),rest__25617__auto__));
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq25734){
var G__25735 = cljs.core.first.call(null,seq25734);
var seq25734__$1 = cljs.core.next.call(null,seq25734);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic(G__25735,seq25734__$1);
});


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__23660__auto__ = [];
var len__23653__auto___25746 = arguments.length;
var i__23654__auto___25747 = (0);
while(true){
if((i__23654__auto___25747 < len__23653__auto___25746)){
args__23660__auto__.push((arguments[i__23654__auto___25747]));

var G__25748 = (i__23654__auto___25747 + (1));
i__23654__auto___25747 = G__25748;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((1) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23661__auto__);
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__25616__auto__,rest__25617__auto__){
if(!((s__25616__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__25616__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__25616__auto__),rest__25617__auto__));
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq25736){
var G__25737 = cljs.core.first.call(null,seq25736);
var seq25736__$1 = cljs.core.next.call(null,seq25736);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__25737,seq25736__$1);
});


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__23660__auto__ = [];
var len__23653__auto___25749 = arguments.length;
var i__23654__auto___25750 = (0);
while(true){
if((i__23654__auto___25750 < len__23653__auto___25749)){
args__23660__auto__.push((arguments[i__23654__auto___25750]));

var G__25751 = (i__23654__auto___25750 + (1));
i__23654__auto___25750 = G__25751;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((1) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23661__auto__);
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__25616__auto__,rest__25617__auto__){
if(!((s__25616__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__25616__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__25616__auto__),rest__25617__auto__));
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq25738){
var G__25739 = cljs.core.first.call(null,seq25738);
var seq25738__$1 = cljs.core.next.call(null,seq25738);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__25739,seq25738__$1);
});

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__23660__auto__ = [];
var len__23653__auto___25760 = arguments.length;
var i__23654__auto___25761 = (0);
while(true){
if((i__23654__auto___25761 < len__23653__auto___25760)){
args__23660__auto__.push((arguments[i__23654__auto___25761]));

var G__25762 = (i__23654__auto___25761 + (1));
i__23654__auto___25761 = G__25762;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((1) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23661__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__25611__auto__,rest__25612__auto__){
var convert_case__25613__auto__ = (function (p1__25610__25614__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__25610__25614__auto__,rest__25612__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__25611__auto__,convert_case__25613__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq25752){
var G__25753 = cljs.core.first.call(null,seq25752);
var seq25752__$1 = cljs.core.next.call(null,seq25752);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic(G__25753,seq25752__$1);
});


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__23660__auto__ = [];
var len__23653__auto___25763 = arguments.length;
var i__23654__auto___25764 = (0);
while(true){
if((i__23654__auto___25764 < len__23653__auto___25763)){
args__23660__auto__.push((arguments[i__23654__auto___25764]));

var G__25765 = (i__23654__auto___25764 + (1));
i__23654__auto___25764 = G__25765;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((1) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23661__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__25616__auto__,rest__25617__auto__){
if(!((s__25616__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__25616__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__25616__auto__),rest__25617__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq25754){
var G__25755 = cljs.core.first.call(null,seq25754);
var seq25754__$1 = cljs.core.next.call(null,seq25754);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic(G__25755,seq25754__$1);
});


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__23660__auto__ = [];
var len__23653__auto___25766 = arguments.length;
var i__23654__auto___25767 = (0);
while(true){
if((i__23654__auto___25767 < len__23653__auto___25766)){
args__23660__auto__.push((arguments[i__23654__auto___25767]));

var G__25768 = (i__23654__auto___25767 + (1));
i__23654__auto___25767 = G__25768;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((1) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23661__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__25616__auto__,rest__25617__auto__){
if(!((s__25616__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__25616__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__25616__auto__),rest__25617__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq25756){
var G__25757 = cljs.core.first.call(null,seq25756);
var seq25756__$1 = cljs.core.next.call(null,seq25756);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__25757,seq25756__$1);
});


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__23660__auto__ = [];
var len__23653__auto___25769 = arguments.length;
var i__23654__auto___25770 = (0);
while(true){
if((i__23654__auto___25770 < len__23653__auto___25769)){
args__23660__auto__.push((arguments[i__23654__auto___25770]));

var G__25771 = (i__23654__auto___25770 + (1));
i__23654__auto___25770 = G__25771;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((1) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23661__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__25616__auto__,rest__25617__auto__){
if(!((s__25616__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__25616__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__25616__auto__),rest__25617__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq25758){
var G__25759 = cljs.core.first.call(null,seq25758);
var seq25758__$1 = cljs.core.next.call(null,seq25758);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__25759,seq25758__$1);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__23660__auto__ = [];
var len__23653__auto___25780 = arguments.length;
var i__23654__auto___25781 = (0);
while(true){
if((i__23654__auto___25781 < len__23653__auto___25780)){
args__23660__auto__.push((arguments[i__23654__auto___25781]));

var G__25782 = (i__23654__auto___25781 + (1));
i__23654__auto___25781 = G__25782;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((1) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23661__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__25611__auto__,rest__25612__auto__){
var convert_case__25613__auto__ = (function (p1__25610__25614__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__25610__25614__auto__,rest__25612__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__25611__auto__,convert_case__25613__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq25772){
var G__25773 = cljs.core.first.call(null,seq25772);
var seq25772__$1 = cljs.core.next.call(null,seq25772);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic(G__25773,seq25772__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__23660__auto__ = [];
var len__23653__auto___25783 = arguments.length;
var i__23654__auto___25784 = (0);
while(true){
if((i__23654__auto___25784 < len__23653__auto___25783)){
args__23660__auto__.push((arguments[i__23654__auto___25784]));

var G__25785 = (i__23654__auto___25784 + (1));
i__23654__auto___25784 = G__25785;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((1) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23661__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__25616__auto__,rest__25617__auto__){
if(!((s__25616__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__25616__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__25616__auto__),rest__25617__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq25774){
var G__25775 = cljs.core.first.call(null,seq25774);
var seq25774__$1 = cljs.core.next.call(null,seq25774);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__25775,seq25774__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__23660__auto__ = [];
var len__23653__auto___25786 = arguments.length;
var i__23654__auto___25787 = (0);
while(true){
if((i__23654__auto___25787 < len__23653__auto___25786)){
args__23660__auto__.push((arguments[i__23654__auto___25787]));

var G__25788 = (i__23654__auto___25787 + (1));
i__23654__auto___25787 = G__25788;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((1) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23661__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__25616__auto__,rest__25617__auto__){
if(!((s__25616__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__25616__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__25616__auto__),rest__25617__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq25776){
var G__25777 = cljs.core.first.call(null,seq25776);
var seq25776__$1 = cljs.core.next.call(null,seq25776);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__25777,seq25776__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__23660__auto__ = [];
var len__23653__auto___25789 = arguments.length;
var i__23654__auto___25790 = (0);
while(true){
if((i__23654__auto___25790 < len__23653__auto___25789)){
args__23660__auto__.push((arguments[i__23654__auto___25790]));

var G__25791 = (i__23654__auto___25790 + (1));
i__23654__auto___25790 = G__25791;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((1) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23661__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__25616__auto__,rest__25617__auto__){
if(!((s__25616__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__25616__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__25616__auto__),rest__25617__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq25778){
var G__25779 = cljs.core.first.call(null,seq25778);
var seq25778__$1 = cljs.core.next.call(null,seq25778);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__25779,seq25778__$1);
});


//# sourceMappingURL=core.js.map?rel=1474489456673