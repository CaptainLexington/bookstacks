// Compiled by ClojureScript 1.9.89 {}
goog.provide('bookstacks.routes');
goog.require('cljs.core');
goog.require('goog.History');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('re_frame.core');
bookstacks.routes.hook_browser_navigation_BANG_ = (function bookstacks$routes$hook_browser_navigation_BANG_(){
var G__26258 = (new goog.History());
goog.events.listen(G__26258,goog.history.EventType.NAVIGATE,((function (G__26258){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__26258))
);

G__26258.setEnabled(true);

return G__26258;
});
bookstacks.routes.app_routes = (function bookstacks$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__26075__auto___26279 = (function (params__26076__auto__){
if(cljs.core.map_QMARK_.call(null,params__26076__auto__)){
var map__26269 = params__26076__auto__;
var map__26269__$1 = ((((!((map__26269 == null)))?((((map__26269.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26269.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26269):map__26269);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__26076__auto__)){
var vec__26271 = params__26076__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__26075__auto___26279);


var action__26075__auto___26280 = (function (params__26076__auto__){
if(cljs.core.map_QMARK_.call(null,params__26076__auto__)){
var map__26274 = params__26076__auto__;
var map__26274__$1 = ((((!((map__26274 == null)))?((((map__26274.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26274.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26274):map__26274);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__26076__auto__)){
var vec__26276 = params__26076__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__26075__auto___26280);


return bookstacks.routes.hook_browser_navigation_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map?rel=1474484606492