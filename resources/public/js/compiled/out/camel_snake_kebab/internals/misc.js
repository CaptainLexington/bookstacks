// Compiled by ClojureScript 1.9.89 {}
goog.provide('camel_snake_kebab.internals.misc');
goog.require('cljs.core');
goog.require('camel_snake_kebab.internals.string_separator');
goog.require('clojure.string');
camel_snake_kebab.internals.misc.convert_case = (function camel_snake_kebab$internals$misc$convert_case(var_args){
var args__23660__auto__ = [];
var len__23653__auto___25466 = arguments.length;
var i__23654__auto___25467 = (0);
while(true){
if((i__23654__auto___25467 < len__23653__auto___25466)){
args__23660__auto__.push((arguments[i__23654__auto___25467]));

var G__25468 = (i__23654__auto___25467 + (1));
i__23654__auto___25467 = G__25468;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((4) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__23661__auto__);
});

camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,p__25460){
var map__25461 = p__25460;
var map__25461__$1 = ((((!((map__25461 == null)))?((((map__25461.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25461.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25461):map__25461);
var separator = cljs.core.get.call(null,map__25461__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),camel_snake_kebab.internals.string_separator.generic_separator);
var vec__25463 = camel_snake_kebab.internals.string_separator.split.call(null,separator,s);
var seq__25464 = cljs.core.seq.call(null,vec__25463);
var first__25465 = cljs.core.first.call(null,seq__25464);
var seq__25464__$1 = cljs.core.next.call(null,seq__25464);
var first = first__25465;
var rest = seq__25464__$1;
return clojure.string.join.call(null,sep,cljs.core.cons.call(null,first_fn.call(null,first),cljs.core.map.call(null,rest_fn,rest)));
});

camel_snake_kebab.internals.misc.convert_case.cljs$lang$maxFixedArity = (4);

camel_snake_kebab.internals.misc.convert_case.cljs$lang$applyTo = (function (seq25455){
var G__25456 = cljs.core.first.call(null,seq25455);
var seq25455__$1 = cljs.core.next.call(null,seq25455);
var G__25457 = cljs.core.first.call(null,seq25455__$1);
var seq25455__$2 = cljs.core.next.call(null,seq25455__$1);
var G__25458 = cljs.core.first.call(null,seq25455__$2);
var seq25455__$3 = cljs.core.next.call(null,seq25455__$2);
var G__25459 = cljs.core.first.call(null,seq25455__$3);
var seq25455__$4 = cljs.core.next.call(null,seq25455__$3);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__25456,G__25457,G__25458,G__25459,seq25455__$4);
});

camel_snake_kebab.internals.misc.upper_case_http_headers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["WWW",null,"TE",null,"CSP",null,"CPU",null,"IP",null,"WAP",null,"HTTP",null,"DNT",null,"UA",null,"ATT",null,"SSL",null,"MD5",null,"XSS",null], null), null);
camel_snake_kebab.internals.misc.capitalize_http_header = (function camel_snake_kebab$internals$misc$capitalize_http_header(s){
var or__22578__auto__ = camel_snake_kebab.internals.misc.upper_case_http_headers.call(null,clojure.string.upper_case.call(null,s));
if(cljs.core.truth_(or__22578__auto__)){
return or__22578__auto__;
} else {
return clojure.string.capitalize.call(null,s);
}
});

//# sourceMappingURL=misc.js.map?rel=1474489456381