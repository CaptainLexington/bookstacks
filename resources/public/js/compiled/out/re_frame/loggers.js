// Compiled by ClojureScript 1.9.89 {}
goog.provide('re_frame.loggers');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Holds the current set of logging functions.
 * By default, re-frame uses the functions provided by js/console.
 * Use `set-loggers!` to change these defaults
 *   
 */
re_frame.loggers.loggers = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"log","log",-1595516004),console.log.bind(console),new cljs.core.Keyword(null,"warn","warn",-436710552),console.warn.bind(console),new cljs.core.Keyword(null,"error","error",-978969032),console.error.bind(console),new cljs.core.Keyword(null,"group","group",582596132),(cljs.core.truth_(console.group)?console.group.bind(console):console.log.bind(console)),new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382),(cljs.core.truth_(console.groupEnd)?console.groupEnd.bind(console):(function (){
return cljs.core.List.EMPTY;
}))], null));
re_frame.loggers.console = (function re_frame$loggers$console(var_args){
var args__23660__auto__ = [];
var len__23653__auto___25717 = arguments.length;
var i__23654__auto___25718 = (0);
while(true){
if((i__23654__auto___25718 < len__23653__auto___25717)){
args__23660__auto__.push((arguments[i__23654__auto___25718]));

var G__25719 = (i__23654__auto___25718 + (1));
i__23654__auto___25718 = G__25719;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((1) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((1)),(0),null)):null);
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23661__auto__);
});

re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic = (function (level,args){
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,re_frame.loggers.loggers),level)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("re-frame: log called with unknown level: "),cljs.core.str(level)].join('')),cljs.core.str("\n"),cljs.core.str("(contains? (clojure.core/deref loggers) level)")].join('')));
}

return cljs.core.apply.call(null,level.call(null,cljs.core.deref.call(null,re_frame.loggers.loggers)),args);
});

re_frame.loggers.console.cljs$lang$maxFixedArity = (1);

re_frame.loggers.console.cljs$lang$applyTo = (function (seq25715){
var G__25716 = cljs.core.first.call(null,seq25715);
var seq25715__$1 = cljs.core.next.call(null,seq25715);
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(G__25716,seq25715__$1);
});

/**
 * Change the set (or a subset) of logging functions used by re-frame.
 *   `new-loggers` should be a map with the same keys as `loggers` (above)
 */
re_frame.loggers.set_loggers_BANG_ = (function re_frame$loggers$set_loggers_BANG_(new_loggers){
if(cljs.core.empty_QMARK_.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,new_loggers)),cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,re_frame.loggers.loggers)))))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Unknown keys in new-loggers"),cljs.core.str("\n"),cljs.core.str("(empty? (difference (set (keys new-loggers)) (-> (clojure.core/deref loggers) keys set)))")].join('')));
}

return cljs.core.swap_BANG_.call(null,re_frame.loggers.loggers,cljs.core.merge,new_loggers);
});

//# sourceMappingURL=loggers.js.map?rel=1474484605717