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
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),(function (db,p__43135){
var vec__43136 = p__43135;
var _ = cljs.core.nth.call(null,vec__43136,(0),null);
var active_panel = cljs.core.nth.call(null,vec__43136,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),active_panel);
}));
bookstacks.handlers.update_values = (function bookstacks$handlers$update_values(var_args){
var args__27089__auto__ = [];
var len__27082__auto___43146 = arguments.length;
var i__27083__auto___43147 = (0);
while(true){
if((i__27083__auto___43147 < len__27082__auto___43146)){
args__27089__auto__.push((arguments[i__27083__auto___43147]));

var G__43148 = (i__27083__auto___43147 + (1));
i__27083__auto___43147 = G__43148;
continue;
} else {
}
break;
}

var argseq__27090__auto__ = ((((2) < args__27089__auto__.length))?(new cljs.core.IndexedSeq(args__27089__auto__.slice((2)),(0),null)):null);
return bookstacks.handlers.update_values.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27090__auto__);
});

bookstacks.handlers.update_values.cljs$core$IFn$_invoke$arity$variadic = (function (m,f,args){
return cljs.core.reduce.call(null,(function (r,p__43142){
var vec__43143 = p__43142;
var k = cljs.core.nth.call(null,vec__43143,(0),null);
var v = cljs.core.nth.call(null,vec__43143,(1),null);
return cljs.core.assoc.call(null,r,k,cljs.core.apply.call(null,f,v,args));
}),cljs.core.PersistentArrayMap.EMPTY,m);
});

bookstacks.handlers.update_values.cljs$lang$maxFixedArity = (2);

bookstacks.handlers.update_values.cljs$lang$applyTo = (function (seq43139){
var G__43140 = cljs.core.first.call(null,seq43139);
var seq43139__$1 = cljs.core.next.call(null,seq43139);
var G__43141 = cljs.core.first.call(null,seq43139__$1);
var seq43139__$2 = cljs.core.next.call(null,seq43139__$1);
return bookstacks.handlers.update_values.cljs$core$IFn$_invoke$arity$variadic(G__43140,G__43141,seq43139__$2);
});

bookstacks.handlers.process_books = (function bookstacks$handlers$process_books(book){
return cljs.core.assoc.call(null,book,new cljs.core.Keyword(null,"status","status",-1997798413),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(book)),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(book)),new cljs.core.Keyword(null,"stacks","stacks",-456633410),clojure.walk.stringify_keys.call(null,new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(book)));
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"load-user","load-user",-1622997493),(function (db,p__43149){
var vec__43150 = p__43149;
var _ = cljs.core.nth.call(null,vec__43150,(0),null);
var user = cljs.core.nth.call(null,vec__43150,(1),null);
var books = bookstacks.handlers.update_values.call(null,new cljs.core.Keyword(null,"books","books",-2005362272).cljs$core$IFn$_invoke$arity$1(user),bookstacks.handlers.process_books);
var newdb = cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"books","books",-2005362272),books);
return newdb;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-bookstack","add-bookstack",776640780),(function (db,p__43158){
var vec__43159 = p__43158;
var _ = cljs.core.nth.call(null,vec__43159,(0),null);
var new_title = cljs.core.nth.call(null,vec__43159,(1),null);
var new_list = cljs.core.nth.call(null,vec__43159,(2),null);
var books = cljs.core.mapv.call(null,((function (vec__43159,_,new_title,new_list){
return (function (p1__43153_SHARP_){
return bookstacks.handlers.book.call(null,p1__43153_SHARP_);
});})(vec__43159,_,new_title,new_list))
,clojure.string.split.call(null,new_list,/\n/));
return bookstacks.handlers.update_user.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"books","books",-2005362272),cljs.core.reduce.call(null,((function (books,vec__43159,_,new_title,new_list){
return (function (p1__43154_SHARP_,p2__43155_SHARP_){
return cljs.core.assoc.call(null,p1__43154_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p2__43155_SHARP_),p2__43155_SHARP_);
});})(books,vec__43159,_,new_title,new_list))
,new cljs.core.Keyword(null,"books","books",-2005362272).cljs$core$IFn$_invoke$arity$1(db),cljs.core.map_indexed.call(null,((function (books,vec__43159,_,new_title,new_list){
return (function (p1__43157_SHARP_,p2__43156_SHARP_){
return bookstacks.handlers.add_book_to_stack.call(null,new_title,p2__43156_SHARP_,p1__43157_SHARP_);
});})(books,vec__43159,_,new_title,new_list))
,books))));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"delete-bookstack","delete-bookstack",-162070907),(function (db,p__43163){
var vec__43164 = p__43163;
var _ = cljs.core.nth.call(null,vec__43164,(0),null);
var stack = cljs.core.nth.call(null,vec__43164,(1),null);
window.location = "/#/stacks/In_Progress";

return bookstacks.handlers.update_user.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"books","books",-2005362272),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,((function (vec__43164,_,stack){
return (function (p1__43162_SHARP_){
return cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__43162_SHARP_)));
});})(vec__43164,_,stack))
,bookstacks.handlers.update_values.call(null,new cljs.core.Keyword(null,"books","books",-2005362272).cljs$core$IFn$_invoke$arity$1(db),((function (vec__43164,_,stack){
return (function (book){
return cljs.core.assoc.call(null,book,new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(book),stack));
});})(vec__43164,_,stack))
)))));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-book","add-book",-1937507385),(function (db,p__43167){
var vec__43168 = p__43167;
var _ = cljs.core.nth.call(null,vec__43168,(0),null);
var stack = cljs.core.nth.call(null,vec__43168,(1),null);
return bookstacks.handlers.update_user.call(null,(function (){var new_book = bookstacks.handlers.book.call(null,"");
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"books","books",-2005362272),bookstacks.handlers.add_book.call(null,new cljs.core.Keyword(null,"books","books",-2005362272).cljs$core$IFn$_invoke$arity$1(db),bookstacks.handlers.add_book_to_stack.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(stack),cljs.core.assoc.call(null,new_book,new cljs.core.Keyword(null,"editing?","editing?",1646440800),true),cljs.core.count.call(null,new cljs.core.Keyword(null,"books","books",-2005362272).cljs$core$IFn$_invoke$arity$1(stack)))));
})());
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-read-status","update-read-status",-1675555937),(function (db,p__43171){
var vec__43172 = p__43171;
var _ = cljs.core.nth.call(null,vec__43172,(0),null);
var status = cljs.core.nth.call(null,vec__43172,(1),null);
var book = cljs.core.nth.call(null,vec__43172,(2),null);
return bookstacks.handlers.update_user.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"books","books",-2005362272),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(book),new cljs.core.Keyword(null,"status","status",-1997798413)], null),status));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-search-term","update-search-term",-1725569553),(function (db,p__43175){
var vec__43176 = p__43175;
var _ = cljs.core.nth.call(null,vec__43176,(0),null);
var search_term = cljs.core.nth.call(null,vec__43176,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"search-term","search-term",356193544),search_term);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"select-stack","select-stack",-919506772),(function (db,p__43179){
var vec__43180 = p__43179;
var _ = cljs.core.nth.call(null,vec__43180,(0),null);
var stack_name = cljs.core.nth.call(null,vec__43180,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"current-stack","current-stack",-1546696626),clojure.string.replace.call(null,stack_name,"_"," "));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"edit-book-title","edit-book-title",-234853508),(function (db,p__43183){
var vec__43184 = p__43183;
var _ = cljs.core.nth.call(null,vec__43184,(0),null);
var book = cljs.core.nth.call(null,vec__43184,(1),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"books","books",-2005362272),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(book),new cljs.core.Keyword(null,"editing?","editing?",1646440800)], null),true);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-book-title","update-book-title",1073440360),(function (db,p__43187){
var vec__43188 = p__43187;
var _ = cljs.core.nth.call(null,vec__43188,(0),null);
var title = cljs.core.nth.call(null,vec__43188,(1),null);
var book = cljs.core.nth.call(null,vec__43188,(2),null);
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
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-book-index","update-book-index",-1769768117),(function (db,p__43193){
var vec__43194 = p__43193;
var _ = cljs.core.nth.call(null,vec__43194,(0),null);
var book = cljs.core.nth.call(null,vec__43194,(1),null);
var stack = cljs.core.nth.call(null,vec__43194,(2),null);
var old_index = cljs.core.nth.call(null,vec__43194,(3),null);
var new_index = cljs.core.nth.call(null,vec__43194,(4),null);
return cljs.core.reduce.call(null,((function (vec__43194,_,book,stack,old_index,new_index){
return (function (p1__43192_SHARP_,p2__43191_SHARP_){
var index = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(p2__43191_SHARP_);
var updated_index = bookstacks.handlers.update_index.call(null,old_index,new_index,index);
return cljs.core.assoc_in.call(null,p1__43192_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"books","books",-2005362272),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p2__43191_SHARP_),new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(stack)], null),updated_index);
});})(vec__43194,_,book,stack,old_index,new_index))
,db,new cljs.core.Keyword(null,"books","books",-2005362272).cljs$core$IFn$_invoke$arity$1(stack));
}));
bookstacks.handlers.remove_book_from_stack = (function bookstacks$handlers$remove_book_from_stack(stack,book){
return cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(book),stack);
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"remove-book-from-stack","remove-book-from-stack",-900505670),(function (db,p__43197){
var vec__43198 = p__43197;
var _ = cljs.core.nth.call(null,vec__43198,(0),null);
var stack = cljs.core.nth.call(null,vec__43198,(1),null);
var book = cljs.core.nth.call(null,vec__43198,(2),null);
return bookstacks.handlers.update_user.call(null,(function (){var new_stacks = bookstacks.handlers.remove_book_from_stack.call(null,stack,book);
if(cljs.core.empty_QMARK_.call(null,new_stacks)){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"books","books",-2005362272),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"books","books",-2005362272).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(book)));
} else {
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"books","books",-2005362272),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(book),new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),new_stacks);
}
})());
}));

//# sourceMappingURL=handlers.js.map?rel=1480972281388