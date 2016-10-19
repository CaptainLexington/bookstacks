// Compiled by ClojureScript 1.9.89 {}
goog.provide('bookstacks.handlers');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('bookstacks.db');
goog.require('bookstacks.subs');
bookstacks.handlers.update = (function bookstacks$handlers$update(data){
bookstacks.db.update_user.call(null,data);

return data;
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return bookstacks.db.default_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),(function (db,p__29431){
var vec__29432 = p__29431;
var _ = cljs.core.nth.call(null,vec__29432,(0),null);
var active_panel = cljs.core.nth.call(null,vec__29432,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),active_panel);
}));
bookstacks.handlers.process_books = (function bookstacks$handlers$process_books(book){
return cljs.core.assoc.call(null,book,new cljs.core.Keyword(null,"status","status",-1997798413),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(book)));
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"load-user","load-user",-1622997493),(function (db,p__29435){
var vec__29436 = p__29435;
var _ = cljs.core.nth.call(null,vec__29436,(0),null);
var user = cljs.core.nth.call(null,vec__29436,(1),null);
var books = cljs.core.mapv.call(null,bookstacks.handlers.process_books,new cljs.core.Keyword(null,"books","books",-2005362272).cljs$core$IFn$_invoke$arity$1(user));
var newdb = cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"books","books",-2005362272),books,new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.set.call(null,new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(user)));
return newdb;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-bookstack","add-bookstack",776640780),(function (db,p__29439){
var vec__29440 = p__29439;
var _ = cljs.core.nth.call(null,vec__29440,(0),null);
var new_title = cljs.core.nth.call(null,vec__29440,(1),null);
var new_list = cljs.core.nth.call(null,vec__29440,(2),null);
return bookstacks.handlers.update.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"books","books",-2005362272),cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.Keyword(null,"books","books",-2005362272).cljs$core$IFn$_invoke$arity$1(db),cljs.core.map_indexed.call(null,((function (vec__29440,_,new_title,new_list){
return (function (index,title){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"stacks","stacks",-456633410)],[title,new cljs.core.Keyword(null,"unread","unread",-1950424572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new_title,new cljs.core.Keyword(null,"index","index",-1531685915),index], null)], null)]);
});})(vec__29440,_,new_title,new_list))
,clojure.string.split.call(null,new_list,/\n/)))),new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.conj.call(null,new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(db),new_title)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"delete-bookstack","delete-bookstack",-162070907),(function (db,p__29445){
var vec__29446 = p__29445;
var _ = cljs.core.nth.call(null,vec__29446,(0),null);
var stack = cljs.core.nth.call(null,vec__29446,(1),null);
window.location = "/#/In_Progress";

return bookstacks.handlers.update.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"books","books",-2005362272),cljs.core.vec.call(null,cljs.core.remove.call(null,((function (vec__29446,_,stack){
return (function (p1__29443_SHARP_){
return cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(p1__29443_SHARP_));
});})(vec__29446,_,stack))
,cljs.core.map.call(null,((function (vec__29446,_,stack){
return (function (book){
return cljs.core.assoc.call(null,book,new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.remove.call(null,((function (vec__29446,_,stack){
return (function (p1__29444_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__29444_SHARP_),stack);
});})(vec__29446,_,stack))
,new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(book)));
});})(vec__29446,_,stack))
,new cljs.core.Keyword(null,"books","books",-2005362272).cljs$core$IFn$_invoke$arity$1(db))))));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-book","add-book",-1937507385),(function (db,p__29449){
var vec__29450 = p__29449;
var _ = cljs.core.nth.call(null,vec__29450,(0),null);
var stack = cljs.core.nth.call(null,vec__29450,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"books","books",-2005362272),cljs.core.conj.call(null,new cljs.core.Keyword(null,"books","books",-2005362272).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"",new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"unread","unread",-1950424572),new cljs.core.Keyword(null,"editing?","editing?",1646440800),true,new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),stack,new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.count.call(null,bookstacks.subs.get_stack.call(null,new cljs.core.Keyword(null,"books","books",-2005362272).cljs$core$IFn$_invoke$arity$1(db),stack))], null)], null)], null)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-read-status","update-read-status",-1675555937),(function (db,p__29453){
var vec__29454 = p__29453;
var _ = cljs.core.nth.call(null,vec__29454,(0),null);
var status = cljs.core.nth.call(null,vec__29454,(1),null);
var book = cljs.core.nth.call(null,vec__29454,(2),null);
return bookstacks.handlers.update.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"books","books",-2005362272),new cljs.core.Keyword(null,"books","books",-2005362272).cljs$core$IFn$_invoke$arity$1(db).indexOf(book),new cljs.core.Keyword(null,"status","status",-1997798413)], null),status));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-search-term","update-search-term",-1725569553),(function (db,p__29457){
var vec__29458 = p__29457;
var _ = cljs.core.nth.call(null,vec__29458,(0),null);
var search_term = cljs.core.nth.call(null,vec__29458,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"search-term","search-term",356193544),search_term);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"select-stack","select-stack",-919506772),(function (db,p__29461){
var vec__29462 = p__29461;
var _ = cljs.core.nth.call(null,vec__29462,(0),null);
var stack_name = cljs.core.nth.call(null,vec__29462,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"current-stack","current-stack",-1546696626),clojure.string.replace.call(null,stack_name,"_"," "));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"edit-book-title","edit-book-title",-234853508),(function (db,p__29465){
var vec__29466 = p__29465;
var _ = cljs.core.nth.call(null,vec__29466,(0),null);
var book = cljs.core.nth.call(null,vec__29466,(1),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"books","books",-2005362272),new cljs.core.Keyword(null,"books","books",-2005362272).cljs$core$IFn$_invoke$arity$1(db).indexOf(book),new cljs.core.Keyword(null,"editing?","editing?",1646440800)], null),true);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-book-title","update-book-title",1073440360),(function (db,p__29469){
var vec__29470 = p__29469;
var _ = cljs.core.nth.call(null,vec__29470,(0),null);
var title = cljs.core.nth.call(null,vec__29470,(1),null);
var book = cljs.core.nth.call(null,vec__29470,(2),null);
return bookstacks.handlers.update.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"books","books",-2005362272),new cljs.core.Keyword(null,"books","books",-2005362272).cljs$core$IFn$_invoke$arity$1(db).indexOf(book)], null),cljs.core.dissoc.call(null,cljs.core.assoc.call(null,book,new cljs.core.Keyword(null,"title","title",636505583),title),new cljs.core.Keyword(null,"editing?","editing?",1646440800))));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"delete-book","delete-book",460673736),(function (db,p__29474){
var vec__29475 = p__29474;
var _ = cljs.core.nth.call(null,vec__29475,(0),null);
var book = cljs.core.nth.call(null,vec__29475,(1),null);
return bookstacks.handlers.update.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"books","books",-2005362272),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,((function (vec__29475,_,book){
return (function (p1__29473_SHARP_){
return cljs.core._EQ_.call(null,p1__29473_SHARP_,book);
});})(vec__29475,_,book))
,new cljs.core.Keyword(null,"books","books",-2005362272).cljs$core$IFn$_invoke$arity$1(db)))));
}));

//# sourceMappingURL=handlers.js.map?rel=1476896874965