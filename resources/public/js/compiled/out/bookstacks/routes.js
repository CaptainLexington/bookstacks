// Compiled by ClojureScript 1.9.293 {}
goog.provide('bookstacks.routes');
goog.require('cljs.core');
goog.require('secretary.core');
goog.require('bookstacks.db');
goog.require('goog.history.EventType');
goog.require('goog.History');
goog.require('goog.events');
goog.require('re_frame.core');
bookstacks.routes.hook_browser_navigation_BANG_ = (function bookstacks$routes$hook_browser_navigation_BANG_(){
var G__29218 = (new goog.History());
goog.events.listen(G__29218,goog.history.EventType.NAVIGATE,((function (G__29218){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__29218))
);

G__29218.setEnabled(true);

return G__29218;
});
bookstacks.routes.app_routes = (function bookstacks$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__27465__auto___29247 = (function (params__27466__auto__){
if(cljs.core.map_QMARK_.call(null,params__27466__auto__)){
var map__29233 = params__27466__auto__;
var map__29233__$1 = ((((!((map__29233 == null)))?((((map__29233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29233.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29233):map__29233);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__27466__auto__)){
var vec__29235 = params__27466__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__27465__auto___29247);


var action__27465__auto___29248 = (function (params__27466__auto__){
if(cljs.core.map_QMARK_.call(null,params__27466__auto__)){
var map__29238 = params__27466__auto__;
var map__29238__$1 = ((((!((map__29238 == null)))?((((map__29238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29238.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29238):map__29238);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__27466__auto__)){
var vec__29240 = params__27466__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__27465__auto___29248);


var action__27465__auto___29249 = (function (params__27466__auto__){
if(cljs.core.map_QMARK_.call(null,params__27466__auto__)){
var map__29243 = params__27466__auto__;
var map__29243__$1 = ((((!((map__29243 == null)))?((((map__29243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29243.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29243):map__29243);
var params = map__29243__$1;
cljs.core.PersistentVector.EMPTY;

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select-stack","select-stack",-919506772),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(params)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__27466__auto__)){
var map__29245 = params__27466__auto__;
var map__29245__$1 = ((((!((map__29245 == null)))?((((map__29245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29245.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29245):map__29245);
var params = map__29245__$1;
cljs.core.PersistentVector.EMPTY;

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select-stack","select-stack",-919506772),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(params)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/stacks/:name",action__27465__auto___29249);


return bookstacks.routes.hook_browser_navigation_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map?rel=1482554669637