// Compiled by ClojureScript 1.9.89 {}
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
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),(function (db,p__44000){
var vec__44001 = p__44000;
var _ = cljs.core.nth.call(null,vec__44001,(0),null);
var active_panel = cljs.core.nth.call(null,vec__44001,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),active_panel);
}));
bookstacks.handlers.update_values = (function bookstacks$handlers$update_values(var_args){
var args__26658__auto__ = [];
var len__26651__auto___44011 = arguments.length;
var i__26652__auto___44012 = (0);
while(true){
if((i__26652__auto___44012 < len__26651__auto___44011)){
args__26658__auto__.push((arguments[i__26652__auto___44012]));

var G__44013 = (i__26652__auto___44012 + (1));
i__26652__auto___44012 = G__44013;
continue;
} else {
}
break;
}

var argseq__26659__auto__ = ((((2) < args__26658__auto__.length))?(new cljs.core.IndexedSeq(args__26658__auto__.slice((2)),(0),null)):null);
return bookstacks.handlers.update_values.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26659__auto__);
});

bookstacks.handlers.update_values.cljs$core$IFn$_invoke$arity$variadic = (function (m,f,args){
return cljs.core.reduce.call(null,(function (r,p__44007){
var vec__44008 = p__44007;
var k = cljs.core.nth.call(null,vec__44008,(0),null);
var v = cljs.core.nth.call(null,vec__44008,(1),null);
return cljs.core.assoc.call(null,r,k,cljs.core.apply.call(null,f,v,args));
}),cljs.core.PersistentArrayMap.EMPTY,m);
});

bookstacks.handlers.update_values.cljs$lang$maxFixedArity = (2);

bookstacks.handlers.update_values.cljs$lang$applyTo = (function (seq44004){
var G__44005 = cljs.core.first.call(null,seq44004);
var seq44004__$1 = cljs.core.next.call(null,seq44004);
var G__44006 = cljs.core.first.call(null,seq44004__$1);
var seq44004__$2 = cljs.core.next.call(null,seq44004__$1);
return bookstacks.handlers.update_values.cljs$core$IFn$_invoke$arity$variadic(G__44005,G__44006,seq44004__$2);
});

bookstacks.handlers.process_books = (function bookstacks$handlers$process_books(book){
return cljs.core.assoc.call(null,book,new cljs.core.Keyword(null,"status","status",-1997798413),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(book)),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(book)),new cljs.core.Keyword(null,"stacks","stacks",-456633410),clojure.walk.stringify_keys.call(null,new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(book)));
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"load-user","load-user",-1622997493),(function (db,p__44014){
var vec__44015 = p__44014;
var _ = cljs.core.nth.call(null,vec__44015,(0),null);
var user = cljs.core.nth.call(null,vec__44015,(1),null);
var books = bookstacks.handlers.update_values.call(null,new cljs.core.Keyword(null,"books","books",-2005362272).cljs$core$IFn$_invoke$arity$1(user),bookstacks.handlers.process_books);
var newdb = cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"books","books",-2005362272),books);
return newdb;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-bookstack","add-bookstack",776640780),(function (db,p__44023){
var vec__44024 = p__44023;
var _ = cljs.core.nth.call(null,vec__44024,(0),null);
var new_title = cljs.core.nth.call(null,vec__44024,(1),null);
var new_list = cljs.core.nth.call(null,vec__44024,(2),null);
var books = cljs.core.mapv.call(null,((function (vec__44024,_,new_title,new_list){
return (function (p1__44018_SHARP_){
return bookstacks.handlers.book.call(null,p1__44018_SHARP_);
});})(vec__44024,_,new_title,new_list))
,clojure.string.split.call(null,new_list,/\n/));
return bookstacks.handlers.update_user.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"books","books",-2005362272),cljs.core.reduce.call(null,((function (books,vec__44024,_,new_title,new_list){
return (function (p1__44019_SHARP_,p2__44020_SHARP_){
return cljs.core.assoc.call(null,p1__44019_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p2__44020_SHARP_),p2__44020_SHARP_);
});})(books,vec__44024,_,new_title,new_list))
,new cljs.core.Keyword(null,"books","books",-2005362272).cljs$core$IFn$_invoke$arity$1(db),cljs.core.map_indexed.call(null,((function (books,vec__44024,_,new_title,new_list){
return (function (p1__44022_SHARP_,p2__44021_SHARP_){
return bookstacks.handlers.add_book_to_stack.call(null,new_title,p2__44021_SHARP_,p1__44022_SHARP_);
});})(books,vec__44024,_,new_title,new_list))
,books))));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"delete-bookstack","delete-bookstack",-162070907),(function (db,p__44028){
var vec__44029 = p__44028;
var _ = cljs.core.nth.call(null,vec__44029,(0),null);
var stack = cljs.core.nth.call(null,vec__44029,(1),null);
window.location = "/#/stacks/In_Progress";

return bookstacks.handlers.update_user.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"books","books",-2005362272),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,((function (vec__44029,_,stack){
return (function (p1__44027_SHARP_){
return cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__44027_SHARP_)));
});})(vec__44029,_,stack))
,bookstacks.handlers.update_values.call(null,new cljs.core.Keyword(null,"books","books",-2005362272).cljs$core$IFn$_invoke$arity$1(db),((function (vec__44029,_,stack){
return (function (book){
return cljs.core.assoc.call(null,book,new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(book),stack));
});})(vec__44029,_,stack))
)))));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-book","add-book",-1937507385),(function (db,p__44032){
var vec__44033 = p__44032;
var _ = cljs.core.nth.call(null,vec__44033,(0),null);
var stack = cljs.core.nth.call(null,vec__44033,(1),null);
return bookstacks.handlers.update_user.call(null,(function (){var new_book = bookstacks.handlers.book.call(null,"");
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"books","books",-2005362272),bookstacks.handlers.add_book.call(null,new cljs.core.Keyword(null,"books","books",-2005362272).cljs$core$IFn$_invoke$arity$1(db),bookstacks.handlers.add_book_to_stack.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(stack),cljs.core.assoc.call(null,new_book,new cljs.core.Keyword(null,"editing?","editing?",1646440800),true),cljs.core.count.call(null,new cljs.core.Keyword(null,"books","books",-2005362272).cljs$core$IFn$_invoke$arity$1(stack)))));
})());
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-read-status","update-read-status",-1675555937),(function (db,p__44036){
var vec__44037 = p__44036;
var _ = cljs.core.nth.call(null,vec__44037,(0),null);
var status = cljs.core.nth.call(null,vec__44037,(1),null);
var book = cljs.core.nth.call(null,vec__44037,(2),null);
return bookstacks.handlers.update_user.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"books","books",-2005362272),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(book),new cljs.core.Keyword(null,"status","status",-1997798413)], null),status));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-search-term","update-search-term",-1725569553),(function (db,p__44040){
var vec__44041 = p__44040;
var _ = cljs.core.nth.call(null,vec__44041,(0),null);
var search_term = cljs.core.nth.call(null,vec__44041,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"search-term","search-term",356193544),search_term);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"select-stack","select-stack",-919506772),(function (db,p__44044){
var vec__44045 = p__44044;
var _ = cljs.core.nth.call(null,vec__44045,(0),null);
var stack_name = cljs.core.nth.call(null,vec__44045,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"current-stack","current-stack",-1546696626),clojure.string.replace.call(null,stack_name,"_"," "));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"edit-book-title","edit-book-title",-234853508),(function (db,p__44048){
var vec__44049 = p__44048;
var _ = cljs.core.nth.call(null,vec__44049,(0),null);
var book = cljs.core.nth.call(null,vec__44049,(1),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"books","books",-2005362272),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(book),new cljs.core.Keyword(null,"editing?","editing?",1646440800)], null),true);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-book-title","update-book-title",1073440360),(function (db,p__44052){
var vec__44053 = p__44052;
var _ = cljs.core.nth.call(null,vec__44053,(0),null);
var title = cljs.core.nth.call(null,vec__44053,(1),null);
var book = cljs.core.nth.call(null,vec__44053,(2),null);
var book_with_new_title = cljs.core.assoc.call(null,book,new cljs.core.Keyword(null,"title","title",636505583),title);
return bookstacks.handlers.update_user.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"books","books",-2005362272),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(book)], null),cljs.core.dissoc.call(null,book_with_new_title,new cljs.core.Keyword(null,"editing?","editing?",1646440800))));
}));
bookstacks.handlers.remove_book_from_stack = (function bookstacks$handlers$remove_book_from_stack(stack,book){
return cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(book),stack);
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"remove-book-from-stack","remove-book-from-stack",-900505670),(function (db,p__44056){
var vec__44057 = p__44056;
var _ = cljs.core.nth.call(null,vec__44057,(0),null);
var stack = cljs.core.nth.call(null,vec__44057,(1),null);
var book = cljs.core.nth.call(null,vec__44057,(2),null);
return bookstacks.handlers.update_user.call(null,(function (){var new_stacks = bookstacks.handlers.remove_book_from_stack.call(null,stack,book);
if(cljs.core.empty_QMARK_.call(null,new_stacks)){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"books","books",-2005362272),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"books","books",-2005362272).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(book)));
} else {
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"books","books",-2005362272),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(book),new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),new_stacks);
}
})());
}));

//# sourceMappingURL=handlers.js.map?rel=1480105915353