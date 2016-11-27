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
var G__31871 = (new goog.History());
goog.events.listen(G__31871,goog.history.EventType.NAVIGATE,((function (G__31871){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__31871))
);

G__31871.setEnabled(true);

return G__31871;
});
bookstacks.routes.app_routes = (function bookstacks$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__27465__auto___31900 = (function (params__27466__auto__){
if(cljs.core.map_QMARK_.call(null,params__27466__auto__)){
var map__31886 = params__27466__auto__;
var map__31886__$1 = ((((!((map__31886 == null)))?((((map__31886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31886.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31886):map__31886);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__27466__auto__)){
var vec__31888 = params__27466__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__27465__auto___31900);


var action__27465__auto___31901 = (function (params__27466__auto__){
if(cljs.core.map_QMARK_.call(null,params__27466__auto__)){
var map__31891 = params__27466__auto__;
var map__31891__$1 = ((((!((map__31891 == null)))?((((map__31891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31891.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31891):map__31891);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__27466__auto__)){
var vec__31893 = params__27466__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__27465__auto___31901);


var action__27465__auto___31902 = (function (params__27466__auto__){
if(cljs.core.map_QMARK_.call(null,params__27466__auto__)){
var map__31896 = params__27466__auto__;
var map__31896__$1 = ((((!((map__31896 == null)))?((((map__31896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31896.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31896):map__31896);
var params = map__31896__$1;
cljs.core.PersistentVector.EMPTY;

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select-stack","select-stack",-919506772),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(params)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__27466__auto__)){
var map__31898 = params__27466__auto__;
var map__31898__$1 = ((((!((map__31898 == null)))?((((map__31898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31898.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31898):map__31898);
var params = map__31898__$1;
cljs.core.PersistentVector.EMPTY;

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select-stack","select-stack",-919506772),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(params)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/stacks/:name",action__27465__auto___31902);


return bookstacks.routes.hook_browser_navigation_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map?rel=1480126463117