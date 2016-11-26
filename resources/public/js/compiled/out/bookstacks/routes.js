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
var G__44155 = (new goog.History());
goog.events.listen(G__44155,goog.history.EventType.NAVIGATE,((function (G__44155){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__44155))
);

G__44155.setEnabled(true);

return G__44155;
});
bookstacks.routes.app_routes = (function bookstacks$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__27339__auto___44184 = (function (params__27340__auto__){
if(cljs.core.map_QMARK_.call(null,params__27340__auto__)){
var map__44170 = params__27340__auto__;
var map__44170__$1 = ((((!((map__44170 == null)))?((((map__44170.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44170.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44170):map__44170);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__27340__auto__)){
var vec__44172 = params__27340__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__27339__auto___44184);


var action__27339__auto___44185 = (function (params__27340__auto__){
if(cljs.core.map_QMARK_.call(null,params__27340__auto__)){
var map__44175 = params__27340__auto__;
var map__44175__$1 = ((((!((map__44175 == null)))?((((map__44175.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44175.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44175):map__44175);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__27340__auto__)){
var vec__44177 = params__27340__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__27339__auto___44185);


var action__27339__auto___44186 = (function (params__27340__auto__){
if(cljs.core.map_QMARK_.call(null,params__27340__auto__)){
var map__44180 = params__27340__auto__;
var map__44180__$1 = ((((!((map__44180 == null)))?((((map__44180.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44180.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44180):map__44180);
var params = map__44180__$1;
cljs.core.PersistentVector.EMPTY;

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select-stack","select-stack",-919506772),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(params)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__27340__auto__)){
var map__44182 = params__27340__auto__;
var map__44182__$1 = ((((!((map__44182 == null)))?((((map__44182.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44182.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44182):map__44182);
var params = map__44182__$1;
cljs.core.PersistentVector.EMPTY;

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select-stack","select-stack",-919506772),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(params)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/stacks/:name",action__27339__auto___44186);


return bookstacks.routes.hook_browser_navigation_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map?rel=1480107927918