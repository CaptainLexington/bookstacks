// Compiled by ClojureScript 1.9.89 {}
goog.provide('bookstacks.handlers');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('bookstacks.db');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return bookstacks.db.default_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),(function (db,p__26065){
var vec__26066 = p__26065;
var _ = cljs.core.nth.call(null,vec__26066,(0),null);
var active_panel = cljs.core.nth.call(null,vec__26066,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),active_panel);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-bookstack","add-bookstack",776640780),(function (db,p__26070){
var vec__26071 = p__26070;
var _ = cljs.core.nth.call(null,vec__26071,(0),null);
var new_title = cljs.core.nth.call(null,vec__26071,(1),null);
var new_list = cljs.core.nth.call(null,vec__26071,(2),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"lists","lists",-884730684),cljs.core.conj.call(null,new cljs.core.Keyword(null,"lists","lists",-884730684).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new_title,new cljs.core.Keyword(null,"list","list",765357683),cljs.core.mapv.call(null,((function (vec__26071,_,new_title,new_list){
return (function (p1__26069_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"status","status",-1997798413)],[p1__26069_SHARP_,new cljs.core.Keyword(null,"unread","unread",-1950424572)]);
});})(vec__26071,_,new_title,new_list))
,clojure.string.split.call(null,new_list,/\n/))], null)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-read-status","update-read-status",-1675555937),(function (db,p__26074){
var vec__26075 = p__26074;
var _ = cljs.core.nth.call(null,vec__26075,(0),null);
var status = cljs.core.nth.call(null,vec__26075,(1),null);
var book = cljs.core.nth.call(null,vec__26075,(2),null);
var list = cljs.core.nth.call(null,vec__26075,(3),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lists","lists",-884730684),new cljs.core.Keyword(null,"lists","lists",-884730684).cljs$core$IFn$_invoke$arity$1(db).indexOf(list),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"list","list",765357683).cljs$core$IFn$_invoke$arity$1(list).indexOf(book),new cljs.core.Keyword(null,"status","status",-1997798413)], null),status);
}));

//# sourceMappingURL=handlers.js.map?rel=1473816757878