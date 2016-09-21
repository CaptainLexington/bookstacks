// Compiled by ClojureScript 1.9.89 {}
goog.provide('bookstacks.routes');
goog.require('cljs.core');
goog.require('goog.History');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('re_frame.core');
bookstacks.routes.hook_browser_navigation_BANG_ = (function bookstacks$routes$hook_browser_navigation_BANG_(){
var G__26114 = (new goog.History());
goog.events.listen(G__26114,goog.history.EventType.NAVIGATE,((function (G__26114){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__26114))
);

G__26114.setEnabled(true);

return G__26114;
});
bookstacks.routes.app_routes = (function bookstacks$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__23893__auto___26143 = (function (params__23894__auto__){
if(cljs.core.map_QMARK_.call(null,params__23894__auto__)){
var map__26129 = params__23894__auto__;
var map__26129__$1 = ((((!((map__26129 == null)))?((((map__26129.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26129.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26129):map__26129);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__23894__auto__)){
var vec__26131 = params__23894__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__23893__auto___26143);


var action__23893__auto___26144 = (function (params__23894__auto__){
if(cljs.core.map_QMARK_.call(null,params__23894__auto__)){
var map__26134 = params__23894__auto__;
var map__26134__$1 = ((((!((map__26134 == null)))?((((map__26134.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26134.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26134):map__26134);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__23894__auto__)){
var vec__26136 = params__23894__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__23893__auto___26144);


var action__23893__auto___26145 = (function (params__23894__auto__){
if(cljs.core.map_QMARK_.call(null,params__23894__auto__)){
var map__26139 = params__23894__auto__;
var map__26139__$1 = ((((!((map__26139 == null)))?((((map__26139.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26139.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26139):map__26139);
var params = map__26139__$1;
cljs.core.PersistentVector.EMPTY;

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select-stack","select-stack",-919506772),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(params)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__23894__auto__)){
var map__26141 = params__23894__auto__;
var map__26141__$1 = ((((!((map__26141 == null)))?((((map__26141.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26141.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26141):map__26141);
var params = map__26141__$1;
cljs.core.PersistentVector.EMPTY;

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select-stack","select-stack",-919506772),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(params)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/stacks/:name",action__23893__auto___26145);


return bookstacks.routes.hook_browser_navigation_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map?rel=1474491199213