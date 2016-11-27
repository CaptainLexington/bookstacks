// Compiled by ClojureScript 1.9.293 {}
goog.provide('bookstacks.handlers');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('cljs_uuid_utils.core');
goog.require('bookstacks.db');
goog.require('bookstacks.subs');
bookstacks.handlers.update_user = (function bookstacks$handlers$update_user(data){
bookstacks.db.update_user.call(null,data);

return data;
});
bookstacks.handlers.book = (function bookstacks$handlers$book(title){
var id = cljs.core.keyword.call(null,cljs_uuid_utils.core.uuid_string.call(null,cljs_uuid_utils.core.make_random_uuid.call(null)));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"unread","unread",-1950424572),new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentArrayMap.EMPTY], null);
});
bookstacks.handlers.add_book = (function bookstacks$handlers$add_book(books,book){
return cljs.core.assoc.call(null,books,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(book),book);
});
bookstacks.handlers.add_book_to_stack = (function bookstacks$handlers$add_book_to_stack(stack_name,book,index){
return cljs.core.assoc_in.call(null,book,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),stack_name], null),index);
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return bookstacks.db.default_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),(function (db,p__40188){
var vec__40189 = p__40188;
var _ = cljs.core.nth.call(null,vec__40189,(0),null);
var active_panel = cljs.core.nth.call(null,vec__40189,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),active_panel);
}));
bookstacks.handlers.update_values = (function bookstacks$handlers$update_values(var_args){
var args__27089__auto__ = [];
var len__27082__auto___40199 = arguments.length;
var i__27083__auto___40200 = (0);
while(true){
if((i__27083__auto___40200 < len__27082__auto___40199)){
args__27089__auto__.push((arguments[i__27083__auto___40200]));

var G__40201 = (i__27083__auto___40200 + (1));
i__27083__auto___40200 = G__40201;
continue;
} else {
}
break;
}

var argseq__27090__auto__ = ((((2) < args__27089__auto__.length))?(new cljs.core.IndexedSeq(args__27089__auto__.slice((2)),(0),null)):null);
return bookstacks.handlers.update_values.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27090__auto__);
});

bookstacks.handlers.update_values.cljs$core$IFn$_invoke$arity$variadic = (function (m,f,args){
return cljs.core.reduce.call(null,(function (r,p__40195){
var vec__40196 = p__40195;
var k = cljs.core.nth.call(null,vec__40196,(0),null);
var v = cljs.core.nth.call(null,vec__40196,(1),null);
return cljs.core.assoc.call(null,r,k,cljs.core.apply.call(null,f,v,args));
}),cljs.core.PersistentArrayMap.EMPTY,m);
});

bookstacks.handlers.update_values.cljs$lang$maxFixedArity = (2);

bookstacks.handlers.update_values.cljs$lang$applyTo = (function (seq40192){
var G__40193 = cljs.core.first.call(null,seq40192);
var seq40192__$1 = cljs.core.next.call(null,seq40192);
var G__40194 = cljs.core.first.call(null,seq40192__$1);
var seq40192__$2 = cljs.core.next.call(null,seq40192__$1);
return bookstacks.handlers.update_values.cljs$core$IFn$_invoke$arity$variadic(G__40193,G__40194,seq40192__$2);
});

bookstacks.handlers.process_books = (function bookstacks$handlers$process_books(book){
return cljs.core.assoc.call(null,book,new cljs.core.Keyword(null,"status","status",-1997798413),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(book)),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(book)),new cljs.core.Keyword(null,"stacks","stacks",-456633410),clojure.walk.stringify_keys.call(null,new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(book)));
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"load-user","load-user",-1622997493),(function (db,p__40202){
var vec__40203 = p__40202;
var _ = cljs.core.nth.call(null,vec__40203,(0),null);
var user = cljs.core.nth.call(null,vec__40203,(1),null);
var books = bookstacks.handlers.update_values.call(null,new cljs.core.Keyword(null,"books","books",-2005362272).cljs$core$IFn$_invoke$arity$1(user),bookstacks.handlers.process_books);
var newdb = cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"books","books",-2005362272),books);
return newdb;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-bookstack","add-bookstack",776640780),(function (db,p__40211){
var vec__40212 = p__40211;
var _ = cljs.core.nth.call(null,vec__40212,(0),null);
var new_title = cljs.core.nth.call(null,vec__40212,(1),null);
var new_list = cljs.core.nth.call(null,vec__40212,(2),null);
var books = cljs.core.mapv.call(null,((function (vec__40212,_,new_title,new_list){
return (function (p1__40206_SHARP_){
return bookstacks.handlers.book.call(null,p1__40206_SHARP_);
});})(vec__40212,_,new_title,new_list))
,clojure.string.split.call(null,new_list,/\n/));
return bookstacks.handlers.update_user.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"books","books",-2005362272),cljs.core.reduce.call(null,((function (books,vec__40212,_,new_title,new_list){
return (function (p1__40207_SHARP_,p2__40208_SHARP_){
return cljs.core.assoc.call(null,p1__40207_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p2__40208_SHARP_),p2__40208_SHARP_);
});})(books,vec__40212,_,new_title,new_list))
,new cljs.core.Keyword(null,"books","books",-2005362272).cljs$core$IFn$_invoke$arity$1(db),cljs.core.map_indexed.call(null,((function (books,vec__40212,_,new_title,new_list){
return (function (p1__40210_SHARP_,p2__40209_SHARP_){
return bookstacks.handlers.add_book_to_stack.call(null,new_title,p2__40209_SHARP_,p1__40210_SHARP_);
});})(books,vec__40212,_,new_title,new_list))
,books))));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"delete-bookstack","delete-bookstack",-162070907),(function (db,p__40216){
var vec__40217 = p__40216;
var _ = cljs.core.nth.call(null,vec__40217,(0),null);
var stack = cljs.core.nth.call(null,vec__40217,(1),null);
window.location = "/#/stacks/In_Progress";

return bookstacks.handlers.update_user.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"books","books",-2005362272),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,((function (vec__40217,_,stack){
return (function (p1__40215_SHARP_){
return cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__40215_SHARP_)));
});})(vec__40217,_,stack))
,bookstacks.handlers.update_values.call(null,new cljs.core.Keyword(null,"books","books",-2005362272).cljs$core$IFn$_invoke$arity$1(db),((function (vec__40217,_,stack){
return (function (book){
return cljs.core.assoc.call(null,book,new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(book),stack));
});})(vec__40217,_,stack))
)))));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-book","add-book",-1937507385),(function (db,p__40220){
var vec__40221 = p__40220;
var _ = cljs.core.nth.call(null,vec__40221,(0),null);
var stack = cljs.core.nth.call(null,vec__40221,(1),null);
return bookstacks.handlers.update_user.call(null,(function (){var new_book = bookstacks.handlers.book.call(null,"");
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"books","books",-2005362272),bookstacks.handlers.add_book.call(null,new cljs.core.Keyword(null,"books","books",-2005362272).cljs$core$IFn$_invoke$arity$1(db),bookstacks.handlers.add_book_to_stack.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(stack),cljs.core.assoc.call(null,new_book,new cljs.core.Keyword(null,"editing?","editing?",1646440800),true),cljs.core.count.call(null,new cljs.core.Keyword(null,"books","books",-2005362272).cljs$core$IFn$_invoke$arity$1(stack)))));
})());
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-read-status","update-read-status",-1675555937),(function (db,p__40224){
var vec__40225 = p__40224;
var _ = cljs.core.nth.call(null,vec__40225,(0),null);
var status = cljs.core.nth.call(null,vec__40225,(1),null);
var book = cljs.core.nth.call(null,vec__40225,(2),null);
return bookstacks.handlers.update_user.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"books","books",-2005362272),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(book),new cljs.core.Keyword(null,"status","status",-1997798413)], null),status));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-search-term","update-search-term",-1725569553),(function (db,p__40228){
var vec__40229 = p__40228;
var _ = cljs.core.nth.call(null,vec__40229,(0),null);
var search_term = cljs.core.nth.call(null,vec__40229,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"search-term","search-term",356193544),search_term);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"select-stack","select-stack",-919506772),(function (db,p__40232){
var vec__40233 = p__40232;
var _ = cljs.core.nth.call(null,vec__40233,(0),null);
var stack_name = cljs.core.nth.call(null,vec__40233,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"current-stack","current-stack",-1546696626),clojure.string.replace.call(null,stack_name,"_"," "));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"edit-book-title","edit-book-title",-234853508),(function (db,p__40236){
var vec__40237 = p__40236;
var _ = cljs.core.nth.call(null,vec__40237,(0),null);
var book = cljs.core.nth.call(null,vec__40237,(1),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"books","books",-2005362272),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(book),new cljs.core.Keyword(null,"editing?","editing?",1646440800)], null),true);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-book-title","update-book-title",1073440360),(function (db,p__40240){
var vec__40241 = p__40240;
var _ = cljs.core.nth.call(null,vec__40241,(0),null);
var title = cljs.core.nth.call(null,vec__40241,(1),null);
var book = cljs.core.nth.call(null,vec__40241,(2),null);
var book_with_new_title = cljs.core.assoc.call(null,book,new cljs.core.Keyword(null,"title","title",636505583),title);
return bookstacks.handlers.update_user.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"books","books",-2005362272),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(book)], null),cljs.core.dissoc.call(null,book_with_new_title,new cljs.core.Keyword(null,"editing?","editing?",1646440800))));
}));
bookstacks.handlers.update_index = (function bookstacks$handlers$update_index(old_index,new_index,index){
if(cljs.core._EQ_.call(null,index,old_index)){
return new_index;
} else {
if(((old_index <= index)) && ((index <= new_index))){
return (index - (1));
} else {
if(((new_index <= index)) && ((index <= old_index))){
return (index + (1));
} else {
return index;

}
}
}
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-book-index","update-book-index",-1769768117),(function (db,p__40246){
var vec__40247 = p__40246;
var _ = cljs.core.nth.call(null,vec__40247,(0),null);
var book = cljs.core.nth.call(null,vec__40247,(1),null);
var stack = cljs.core.nth.call(null,vec__40247,(2),null);
var old_index = cljs.core.nth.call(null,vec__40247,(3),null);
var new_index = cljs.core.nth.call(null,vec__40247,(4),null);
return cljs.core.reduce.call(null,((function (vec__40247,_,book,stack,old_index,new_index){
return (function (p1__40245_SHARP_,p2__40244_SHARP_){
var index = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(p2__40244_SHARP_);
var updated_index = bookstacks.handlers.update_index.call(null,old_index,new_index,index);
return cljs.core.assoc_in.call(null,p1__40245_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"books","books",-2005362272),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p2__40244_SHARP_),new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(stack)], null),updated_index);
});})(vec__40247,_,book,stack,old_index,new_index))
,db,new cljs.core.Keyword(null,"books","books",-2005362272).cljs$core$IFn$_invoke$arity$1(stack));
}));
bookstacks.handlers.remove_book_from_stack = (function bookstacks$handlers$remove_book_from_stack(stack,book){
return cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(book),stack);
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"remove-book-from-stack","remove-book-from-stack",-900505670),(function (db,p__40250){
var vec__40251 = p__40250;
var _ = cljs.core.nth.call(null,vec__40251,(0),null);
var stack = cljs.core.nth.call(null,vec__40251,(1),null);
var book = cljs.core.nth.call(null,vec__40251,(2),null);
return bookstacks.handlers.update_user.call(null,(function (){var new_stacks = bookstacks.handlers.remove_book_from_stack.call(null,stack,book);
if(cljs.core.empty_QMARK_.call(null,new_stacks)){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"books","books",-2005362272),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"books","books",-2005362272).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(book)));
} else {
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"books","books",-2005362272),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(book),new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),new_stacks);
}
})());
}));

//# sourceMappingURL=handlers.js.map?rel=1480126598038