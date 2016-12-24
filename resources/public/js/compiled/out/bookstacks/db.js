// Compiled by ClojureScript 1.9.293 {}
goog.provide('bookstacks.db');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('re_frame.core');
bookstacks.db.default_db = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"books","books",-2005362272),new cljs.core.Keyword(null,"_id","_id",-789960287),new cljs.core.Keyword(null,"search-term","search-term",356193544),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"current-stack","current-stack",-1546696626),new cljs.core.Keyword(null,"googleID","googleID",578770415),new cljs.core.Keyword(null,"editing-stack-name?","editing-stack-name?",-1878594953),new cljs.core.Keyword(null,"facebookID","facebookID",-298796967),new cljs.core.Keyword(null,"stacks","stacks",-456633410)],[cljs.core.PersistentArrayMap.EMPTY,"58027964d482a9608a0e3395","","Bookstacks Online","In Progress","",false,"",cljs.core.PersistentArrayMap.EMPTY]);
bookstacks.db.update_user = (function bookstacks$db$update_user(user){
return ajax.core.POST.call(null,"/update",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),user,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570)], null));
});
bookstacks.db.get_user = (function bookstacks$db$get_user(id){
return ajax.core.GET.call(null,[cljs.core.str("/get-user/"),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__29138_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-user","load-user",-1622997493),p1__29138_SHARP_], null));
}),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));
});
window.onload = (function (){
return bookstacks.db.get_user.call(null,"58027964d482a9608a0e3395");
});

//# sourceMappingURL=db.js.map?rel=1482554669496