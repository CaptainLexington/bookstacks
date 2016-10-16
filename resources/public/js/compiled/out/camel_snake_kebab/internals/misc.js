// Compiled by ClojureScript 1.9.89 {}
goog.provide('camel_snake_kebab.internals.misc');
goog.require('cljs.core');
goog.require('camel_snake_kebab.internals.string_separator');
goog.require('clojure.string');
camel_snake_kebab.internals.misc.convert_case = (function camel_snake_kebab$internals$misc$convert_case(var_args){
var args__26652__auto__ = [];
var len__26645__auto___28876 = arguments.length;
var i__26646__auto___28877 = (0);
while(true){
if((i__26646__auto___28877 < len__26645__auto___28876)){
args__26652__auto__.push((arguments[i__26646__auto___28877]));

var G__28878 = (i__26646__auto___28877 + (1));
i__26646__auto___28877 = G__28878;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((4) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__26653__auto__);
});

camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,p__28870){
var map__28871 = p__28870;
var map__28871__$1 = ((((!((map__28871 == null)))?((((map__28871.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28871.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28871):map__28871);
var separator = cljs.core.get.call(null,map__28871__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),camel_snake_kebab.internals.string_separator.generic_separator);
var vec__28873 = camel_snake_kebab.internals.string_separator.split.call(null,separator,s);
var seq__28874 = cljs.core.seq.call(null,vec__28873);
var first__28875 = cljs.core.first.call(null,seq__28874);
var seq__28874__$1 = cljs.core.next.call(null,seq__28874);
var first = first__28875;
var rest = seq__28874__$1;
return clojure.string.join.call(null,sep,cljs.core.cons.call(null,first_fn.call(null,first),cljs.core.map.call(null,rest_fn,rest)));
});

camel_snake_kebab.internals.misc.convert_case.cljs$lang$maxFixedArity = (4);

camel_snake_kebab.internals.misc.convert_case.cljs$lang$applyTo = (function (seq28865){
var G__28866 = cljs.core.first.call(null,seq28865);
var seq28865__$1 = cljs.core.next.call(null,seq28865);
var G__28867 = cljs.core.first.call(null,seq28865__$1);
var seq28865__$2 = cljs.core.next.call(null,seq28865__$1);
var G__28868 = cljs.core.first.call(null,seq28865__$2);
var seq28865__$3 = cljs.core.next.call(null,seq28865__$2);
var G__28869 = cljs.core.first.call(null,seq28865__$3);
var seq28865__$4 = cljs.core.next.call(null,seq28865__$3);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__28866,G__28867,G__28868,G__28869,seq28865__$4);
});

camel_snake_kebab.internals.misc.upper_case_http_headers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["WWW",null,"TE",null,"CSP",null,"CPU",null,"IP",null,"WAP",null,"HTTP",null,"DNT",null,"UA",null,"ATT",null,"SSL",null,"MD5",null,"XSS",null], null), null);
camel_snake_kebab.internals.misc.capitalize_http_header = (function camel_snake_kebab$internals$misc$capitalize_http_header(s){
var or__25570__auto__ = camel_snake_kebab.internals.misc.upper_case_http_headers.call(null,clojure.string.upper_case.call(null,s));
if(cljs.core.truth_(or__25570__auto__)){
return or__25570__auto__;
} else {
return clojure.string.capitalize.call(null,s);
}
});

//# sourceMappingURL=misc.js.map?rel=1476574111776