// Compiled by ClojureScript 1.9.89 {}
goog.provide('bookstacks.routes');
goog.require('cljs.core');
goog.require('secretary.core');
goog.require('bookstacks.db');
goog.require('goog.history.EventType');
goog.require('goog.History');
goog.require('goog.events');
goog.require('re_frame.core');
bookstacks.routes.hook_browser_navigation_BANG_ = (function bookstacks$routes$hook_browser_navigation_BANG_(){
var G__40325 = (new goog.History());
goog.events.listen(G__40325,goog.history.EventType.NAVIGATE,((function (G__40325){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__40325))
);

G__40325.setEnabled(true);

return G__40325;
});
bookstacks.routes.app_routes = (function bookstacks$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__27339__auto___40354 = (function (params__27340__auto__){
if(cljs.core.map_QMARK_.call(null,params__27340__auto__)){
var map__40340 = params__27340__auto__;
var map__40340__$1 = ((((!((map__40340 == null)))?((((map__40340.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40340.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40340):map__40340);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__27340__auto__)){
var vec__40342 = params__27340__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__27339__auto___40354);


var action__27339__auto___40355 = (function (params__27340__auto__){
if(cljs.core.map_QMARK_.call(null,params__27340__auto__)){
var map__40345 = params__27340__auto__;
var map__40345__$1 = ((((!((map__40345 == null)))?((((map__40345.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40345.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40345):map__40345);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__27340__auto__)){
var vec__40347 = params__27340__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__27339__auto___40355);


var action__27339__auto___40356 = (function (params__27340__auto__){
if(cljs.core.map_QMARK_.call(null,params__27340__auto__)){
var map__40350 = params__27340__auto__;
var map__40350__$1 = ((((!((map__40350 == null)))?((((map__40350.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40350.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40350):map__40350);
var params = map__40350__$1;
cljs.core.PersistentVector.EMPTY;

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select-stack","select-stack",-919506772),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(params)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__27340__auto__)){
var map__40352 = params__27340__auto__;
var map__40352__$1 = ((((!((map__40352 == null)))?((((map__40352.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40352.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40352):map__40352);
var params = map__40352__$1;
cljs.core.PersistentVector.EMPTY;

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select-stack","select-stack",-919506772),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(params)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/stacks/:name",action__27339__auto___40356);


return bookstacks.routes.hook_browser_navigation_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map?rel=1480031322890