// Compiled by ClojureScript 1.9.89 {}
goog.provide('bookstacks.handlers');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('bookstacks.db');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return bookstacks.db.default_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),(function (db,p__25991){
var vec__25992 = p__25991;
var _ = cljs.core.nth.call(null,vec__25992,(0),null);
var active_panel = cljs.core.nth.call(null,vec__25992,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),active_panel);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-bookstack","add-bookstack",776640780),(function (db,p__25995){
var vec__25996 = p__25995;
var _ = cljs.core.nth.call(null,vec__25996,(0),null);
var new_title = cljs.core.nth.call(null,vec__25996,(1),null);
var new_list = cljs.core.nth.call(null,vec__25996,(2),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"books","books",-2005362272),cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.Keyword(null,"books","books",-2005362272).cljs$core$IFn$_invoke$arity$1(db),cljs.core.map_indexed.call(null,((function (vec__25996,_,new_title,new_list){
return (function (index,title){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"stacks","stacks",-456633410)],[title,new cljs.core.Keyword(null,"unread","unread",-1950424572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new_title,new cljs.core.Keyword(null,"index","index",-1531685915),index], null)], null)]);
});})(vec__25996,_,new_title,new_list))
,clojure.string.split.call(null,new_list,/\n/)))),new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.conj.call(null,new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(db),new_title));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-read-status","update-read-status",-1675555937),(function (db,p__25999){
var vec__26000 = p__25999;
var _ = cljs.core.nth.call(null,vec__26000,(0),null);
var status = cljs.core.nth.call(null,vec__26000,(1),null);
var book = cljs.core.nth.call(null,vec__26000,(2),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"books","books",-2005362272),new cljs.core.Keyword(null,"books","books",-2005362272).cljs$core$IFn$_invoke$arity$1(db).indexOf(book),new cljs.core.Keyword(null,"status","status",-1997798413)], null),status);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-search-term","update-search-term",-1725569553),(function (db,p__26003){
var vec__26004 = p__26003;
var _ = cljs.core.nth.call(null,vec__26004,(0),null);
var search_term = cljs.core.nth.call(null,vec__26004,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"search-term","search-term",356193544),search_term);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"select-stack","select-stack",-919506772),(function (db,p__26007){
var vec__26008 = p__26007;
var _ = cljs.core.nth.call(null,vec__26008,(0),null);
var stack_name = cljs.core.nth.call(null,vec__26008,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"current-stack","current-stack",-1546696626),clojure.string.replace.call(null,stack_name,"_"," "));
}));

//# sourceMappingURL=handlers.js.map?rel=1474567224752