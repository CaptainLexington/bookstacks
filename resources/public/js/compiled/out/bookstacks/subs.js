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
return clojure.set.select.call(null,(function (p1__42955_SHARP_){
return clojure.string.includes_QMARK_.call(null,clojure.string.lower_case.call(null,p1__42955_SHARP_),clojure.string.lower_case.call(null,query));
}),stacks);
});
bookstacks.subs.generate_stacks = (function bookstacks$subs$generate_stacks(books){
return cljs.core.set.call(null,cljs.core.reduce.call(null,(function (p1__42956_SHARP_,p2__42957_SHARP_){
return cljs.core.concat.call(null,p1__42956_SHARP_,cljs.core.keys.call(null,new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(p2__42957_SHARP_)));
}),cljs.core.PersistentVector.EMPTY,books));
});
bookstacks.subs.filter_stacks_by_book_title = (function bookstacks$subs$filter_stacks_by_book_title(books,query){
return bookstacks.subs.generate_stacks.call(null,cljs.core.filter.call(null,(function (p1__42958_SHARP_){
return clojure.string.includes_QMARK_.call(null,clojure.string.lower_case.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(p1__42958_SHARP_)),clojure.string.lower_case.call(null,query));
}),books));
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
return bookstacks.subs.generate_stacks.call(null,cljs.core.vals.call(null,new cljs.core.Keyword(null,"books","books",-2005362272).cljs$core$IFn$_invoke$arity$1(db)));
});})(query,current_stack))
);
var stacks_by_name = bookstacks.subs.filter_stacks.call(null,cljs.core.deref.call(null,stacks),cljs.core.deref.call(null,query),cljs.core.deref.call(null,current_stack));
var stacks_by_book_title = bookstacks.subs.filter_stacks_by_book_title.call(null,cljs.core.vals.call(null,new cljs.core.Keyword(null,"books","books",-2005362272).cljs$core$IFn$_invoke$arity$1(db)),cljs.core.deref.call(null,query));
return cljs.core.sort.call(null,clojure.set.union.call(null,stacks_by_name,stacks_by_book_title));
}));
bookstacks.subs.test_by_stack = (function bookstacks$subs$test_by_stack(stack){
var G__42962 = stack;
switch (G__42962) {
case "In Progress":
return ((function (G__42962){
return (function (p1__42959_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"reading","reading",-409289668),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(p1__42959_SHARP_));
});
;})(G__42962))

break;
default:
return ((function (G__42962){
return (function (book){
return cljs.core.some.call(null,((function (G__42962){
return (function (p1__42960_SHARP_){
return cljs.core._EQ_.call(null,p1__42960_SHARP_,stack);
});})(G__42962))
,cljs.core.keys.call(null,new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(book)));
});
;})(G__42962))

}
});
bookstacks.subs.get_stack = (function bookstacks$subs$get_stack(books,stack){
return cljs.core.sort_by.call(null,(function (p1__42964_SHARP_){
return cljs.core.get.call(null,new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(p1__42964_SHARP_),stack);
}),cljs.core.filter.call(null,bookstacks.subs.test_by_stack.call(null,stack),cljs.core.vals.call(null,books)));
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"current-stack","current-stack",-1546696626),(function (db){
return new cljs.core.Keyword(null,"current-stack","current-stack",-1546696626).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"stack","stack",-793405930),(function (db,p__42967){
var vec__42968 = p__42967;
var query = cljs.core.nth.call(null,vec__42968,(0),null);
var stack_name = cljs.core.nth.call(null,vec__42968,(1),null);
var books = reagent.ratom.make_reaction.call(null,((function (vec__42968,query,stack_name){
return (function (){
return new cljs.core.Keyword(null,"books","books",-2005362272).cljs$core$IFn$_invoke$arity$1(db);
});})(vec__42968,query,stack_name))
);
var stack = cljs.core.map_indexed.call(null,((function (books,vec__42968,query,stack_name){
return (function (p1__42966_SHARP_,p2__42965_SHARP_){
return cljs.core.assoc.call(null,p2__42965_SHARP_,new cljs.core.Keyword(null,"index","index",-1531685915),p1__42966_SHARP_);
});})(books,vec__42968,query,stack_name))
,bookstacks.subs.get_stack.call(null,cljs.core.deref.call(null,books),stack_name));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),stack_name,new cljs.core.Keyword(null,"books","books",-2005362272),stack], null);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"search-term","search-term",356193544),(function (db){
return new cljs.core.Keyword(null,"search-term","search-term",356193544).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),(function (db,_){
return new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994).cljs$core$IFn$_invoke$arity$1(db);
}));

//# sourceMappingURL=subs.js.map?rel=1480278856630