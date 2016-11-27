// Compiled by ClojureScript 1.9.293 {}
goog.provide('bookstacks.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('clojure.string');
goog.require('clojure.set');
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"name","name",1843675177),(function (db){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"books","books",-2005362272),(function (db){
return new cljs.core.Keyword(null,"books","books",-2005362272).cljs$core$IFn$_invoke$arity$1(db);
}));
bookstacks.subs.filter_stacks = (function bookstacks$subs$filter_stacks(stacks,query,current_stack){
return clojure.set.select.call(null,(function (p1__40171_SHARP_){
return clojure.string.includes_QMARK_.call(null,clojure.string.lower_case.call(null,p1__40171_SHARP_),clojure.string.lower_case.call(null,query));
}),stacks);
});
bookstacks.subs.generate_stacks = (function bookstacks$subs$generate_stacks(books){
return cljs.core.set.call(null,cljs.core.reduce.call(null,(function (p1__40172_SHARP_,p2__40173_SHARP_){
return cljs.core.concat.call(null,p1__40172_SHARP_,cljs.core.keys.call(null,new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(p2__40173_SHARP_)));
}),cljs.core.PersistentVector.EMPTY,cljs.core.vals.call(null,books)));
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"stacks","stacks",-456633410),(function (db){
var query = reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"search-term","search-term",356193544).cljs$core$IFn$_invoke$arity$1(db);
}));
var current_stack = reagent.ratom.make_reaction.call(null,((function (query){
return (function (){
return new cljs.core.Keyword(null,"current-stack","current-stack",-1546696626).cljs$core$IFn$_invoke$arity$1(db);
});})(query))
);
var stacks = reagent.ratom.make_reaction.call(null,((function (query,current_stack){
return (function (){
return bookstacks.subs.generate_stacks.call(null,new cljs.core.Keyword(null,"books","books",-2005362272).cljs$core$IFn$_invoke$arity$1(db));
});})(query,current_stack))
);
return cljs.core.sort.call(null,bookstacks.subs.filter_stacks.call(null,cljs.core.deref.call(null,stacks),cljs.core.deref.call(null,query),cljs.core.deref.call(null,current_stack)));
}));
bookstacks.subs.test_by_stack = (function bookstacks$subs$test_by_stack(stack){
var G__40177 = stack;
switch (G__40177) {
case "In Progress":
return ((function (G__40177){
return (function (p1__40174_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"reading","reading",-409289668),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(p1__40174_SHARP_));
});
;})(G__40177))

break;
default:
return ((function (G__40177){
return (function (book){
return cljs.core.some.call(null,((function (G__40177){
return (function (p1__40175_SHARP_){
return cljs.core._EQ_.call(null,p1__40175_SHARP_,stack);
});})(G__40177))
,cljs.core.keys.call(null,new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(book)));
});
;})(G__40177))

}
});
bookstacks.subs.get_stack = (function bookstacks$subs$get_stack(books,stack){
return cljs.core.sort_by.call(null,(function (p1__40179_SHARP_){
return cljs.core.get.call(null,new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(p1__40179_SHARP_),stack);
}),cljs.core.filter.call(null,bookstacks.subs.test_by_stack.call(null,stack),cljs.core.vals.call(null,books)));
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"current-stack","current-stack",-1546696626),(function (db){
return new cljs.core.Keyword(null,"current-stack","current-stack",-1546696626).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"stack","stack",-793405930),(function (db,p__40182){
var vec__40183 = p__40182;
var query = cljs.core.nth.call(null,vec__40183,(0),null);
var stack_name = cljs.core.nth.call(null,vec__40183,(1),null);
var books = reagent.ratom.make_reaction.call(null,((function (vec__40183,query,stack_name){
return (function (){
return new cljs.core.Keyword(null,"books","books",-2005362272).cljs$core$IFn$_invoke$arity$1(db);
});})(vec__40183,query,stack_name))
);
var stack = cljs.core.map_indexed.call(null,((function (books,vec__40183,query,stack_name){
return (function (p1__40181_SHARP_,p2__40180_SHARP_){
return cljs.core.assoc.call(null,p2__40180_SHARP_,new cljs.core.Keyword(null,"index","index",-1531685915),p1__40181_SHARP_);
});})(books,vec__40183,query,stack_name))
,bookstacks.subs.get_stack.call(null,cljs.core.deref.call(null,books),stack_name));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),stack_name,new cljs.core.Keyword(null,"books","books",-2005362272),stack], null);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"search-term","search-term",356193544),(function (db){
return new cljs.core.Keyword(null,"search-term","search-term",356193544).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),(function (db,_){
return new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994).cljs$core$IFn$_invoke$arity$1(db);
}));

//# sourceMappingURL=subs.js.map?rel=1480126597961