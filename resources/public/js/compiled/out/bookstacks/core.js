// Compiled by ClojureScript 1.9.89 {}
goog.provide('bookstacks.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('bookstacks.views');
goog.require('bookstacks.routes');
goog.require('bookstacks.config');
goog.require('bookstacks.handlers');
goog.require('devtools.core');
goog.require('bookstacks.subs');
goog.require('re_frame.core');
bookstacks.core.dev_setup = (function bookstacks$core$dev_setup(){
if(cljs.core.truth_(bookstacks.config.debug_QMARK_)){
cljs.core.enable_console_print_BANG_.call(null);

cljs.core.println.call(null,"dev mode");

return devtools.core.install_BANG_.call(null);
} else {
return null;
}
});
bookstacks.core.mount_root = (function bookstacks$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bookstacks.views.main_panel], null),document.getElementById("app"));
});
bookstacks.core.init = (function bookstacks$core$init(){
bookstacks.routes.app_routes.call(null);

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

bookstacks.core.dev_setup.call(null);

return bookstacks.core.mount_root.call(null);
});
goog.exportSymbol('bookstacks.core.init', bookstacks.core.init);

//# sourceMappingURL=core.js.map?rel=1474484607027