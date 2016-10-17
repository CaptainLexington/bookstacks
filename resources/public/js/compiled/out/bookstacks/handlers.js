// Compiled by ClojureScript 1.9.89 {}
goog.provide('bookstacks.handlers');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('bookstacks.db');
bookstacks.handlers.update = (function bookstacks$handlers$update(data){
bookstacks.db.update_user.call(null,data);

return data;
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return bookstacks.db.default_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),(function (db,p__30006){
var vec__30007 = p__30006;
var _ = cljs.core.nth.call(null,vec__30007,(0),null);
var active_panel = cljs.core.nth.call(null,vec__30007,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),active_panel);
}));
bookstacks.handlers.process_books = (function bookstacks$handlers$process_books(book){
return cljs.core.assoc.call(null,book,new cljs.core.Keyword(null,"status","status",-1997798413),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(book)));
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"load-user","load-user",-1622997493),(function (db,p__30010){
var vec__30011 = p__30010;
var _ = cljs.core.nth.call(null,vec__30011,(0),null);
var user = cljs.core.nth.call(null,vec__30011,(1),null);
var books = cljs.core.mapv.call(null,bookstacks.handlers.process_books,new cljs.core.Keyword(null,"books","books",-2005362272).cljs$core$IFn$_invoke$arity$1(user));
var newdb = cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"books","books",-2005362272),books,new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.set.call(null,new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(user)));
return newdb;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-bookstack","add-bookstack",776640780),(function (db,p__30014){
var vec__30015 = p__30014;
var _ = cljs.core.nth.call(null,vec__30015,(0),null);
var new_title = cljs.core.nth.call(null,vec__30015,(1),null);
var new_list = cljs.core.nth.call(null,vec__30015,(2),null);
return bookstacks.handlers.update.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"books","books",-2005362272),cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.Keyword(null,"books","books",-2005362272).cljs$core$IFn$_invoke$arity$1(db),cljs.core.map_indexed.call(null,((function (vec__30015,_,new_title,new_list){
return (function (index,title){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"stacks","stacks",-456633410)],[title,new cljs.core.Keyword(null,"unread","unread",-1950424572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new_title,new cljs.core.Keyword(null,"index","index",-1531685915),index], null)], null)]);
});})(vec__30015,_,new_title,new_list))
,clojure.string.split.call(null,new_list,/\n/)))),new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.conj.call(null,new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(db),new_title)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-read-status","update-read-status",-1675555937),(function (db,p__30018){
var vec__30019 = p__30018;
var _ = cljs.core.nth.call(null,vec__30019,(0),null);
var status = cljs.core.nth.call(null,vec__30019,(1),null);
var book = cljs.core.nth.call(null,vec__30019,(2),null);
return bookstacks.handlers.update.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"books","books",-2005362272),new cljs.core.Keyword(null,"books","books",-2005362272).cljs$core$IFn$_invoke$arity$1(db).indexOf(book),new cljs.core.Keyword(null,"status","status",-1997798413)], null),status));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-search-term","update-search-term",-1725569553),(function (db,p__30022){
var vec__30023 = p__30022;
var _ = cljs.core.nth.call(null,vec__30023,(0),null);
var search_term = cljs.core.nth.call(null,vec__30023,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"search-term","search-term",356193544),search_term);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"select-stack","select-stack",-919506772),(function (db,p__30026){
var vec__30027 = p__30026;
var _ = cljs.core.nth.call(null,vec__30027,(0),null);
var stack_name = cljs.core.nth.call(null,vec__30027,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"current-stack","current-stack",-1546696626),clojure.string.replace.call(null,stack_name,"_"," "));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"edit-book-title","edit-book-title",-234853508),(function (db,p__30030){
var vec__30031 = p__30030;
var _ = cljs.core.nth.call(null,vec__30031,(0),null);
var book = cljs.core.nth.call(null,vec__30031,(1),null);
return bookstacks.handlers.update.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"books","books",-2005362272),new cljs.core.Keyword(null,"books","books",-2005362272).cljs$core$IFn$_invoke$arity$1(db).indexOf(book),new cljs.core.Keyword(null,"editing?","editing?",1646440800)], null),true));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-book-title","update-book-title",1073440360),(function (db,p__30034){
var vec__30035 = p__30034;
var _ = cljs.core.nth.call(null,vec__30035,(0),null);
var title = cljs.core.nth.call(null,vec__30035,(1),null);
var book = cljs.core.nth.call(null,vec__30035,(2),null);
return bookstacks.handlers.update.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"books","books",-2005362272),new cljs.core.Keyword(null,"books","books",-2005362272).cljs$core$IFn$_invoke$arity$1(db).indexOf(book)], null),cljs.core.dissoc.call(null,cljs.core.assoc.call(null,book,new cljs.core.Keyword(null,"title","title",636505583),title),new cljs.core.Keyword(null,"editing?","editing?",1646440800))));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"delete-book","delete-book",460673736),(function (db,p__30039){
var vec__30040 = p__30039;
var _ = cljs.core.nth.call(null,vec__30040,(0),null);
var book = cljs.core.nth.call(null,vec__30040,(1),null);
return bookstacks.handlers.update.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"books","books",-2005362272),cljs.core.remove.call(null,((function (vec__30040,_,book){
return (function (p1__30038_SHARP_){
return cljs.core._EQ_.call(null,p1__30038_SHARP_,book);
});})(vec__30040,_,book))
,new cljs.core.Keyword(null,"books","books",-2005362272).cljs$core$IFn$_invoke$arity$1(db))));
}));

//# sourceMappingURL=handlers.js.map?rel=1476740834357