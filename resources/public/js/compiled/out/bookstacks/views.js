// Compiled by ClojureScript 1.9.89 {}
goog.provide('bookstacks.views');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_com.core');
goog.require('camel_snake_kebab.core');
goog.require('bookstacks.utils');
goog.require('re_frame.core');
bookstacks.views.home_title = (function bookstacks$views$home_title(){
var name = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177)], null));
return ((function (name){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),[cljs.core.str("Hello from "),cljs.core.str(cljs.core.deref.call(null,name)),cljs.core.str(". This is the Home Page.")].join(''),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null);
});
;})(name))
});
bookstacks.views.link_to_about_page = (function bookstacks$views$link_to_about_page(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink_href,new cljs.core.Keyword(null,"label","label",1718410804),"go to About Page",new cljs.core.Keyword(null,"href","href",-793805698),"#/about"], null);
});
bookstacks.views.add_a_list = (function bookstacks$views$add_a_list(){
var add_new_open = reagent.core.atom.call(null,false);
var add_new_title = reagent.core.atom.call(null,"");
var add_new_list = reagent.core.atom.call(null,"");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.add","div.add",-1186475832),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.popover_anchor_wrapper,new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"Add New List",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (add_new_open,add_new_title,add_new_list){
return (function (){
return cljs.core.swap_BANG_.call(null,add_new_open,cljs.core.not);
});})(add_new_open,add_new_title,add_new_list))
], null),new cljs.core.Keyword(null,"showing?","showing?",2094921488),add_new_open,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"right-below","right-below",586981827),new cljs.core.Keyword(null,"popover","popover",-1809582136),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.popover_content_wrapper,new cljs.core.Keyword(null,"title","title",636505583),"Add New List",new cljs.core.Keyword(null,"showing?","showing?",2094921488),add_new_open,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"right-below","right-below",586981827),new cljs.core.Keyword(null,"width","width",-384071477),"400px",new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,new cljs.core.Keyword(null,"model","model",331153215),"",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (add_new_open,add_new_title,add_new_list){
return (function (p1__26034_SHARP_){
return cljs.core.reset_BANG_.call(null,add_new_title,p1__26034_SHARP_);
});})(add_new_open,add_new_title,add_new_list))
,new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Name"], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_textarea,new cljs.core.Keyword(null,"model","model",331153215),"",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (add_new_open,add_new_title,add_new_list){
return (function (p1__26035_SHARP_){
return cljs.core.reset_BANG_.call(null,add_new_list,p1__26035_SHARP_);
});})(add_new_open,add_new_title,add_new_list))
,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"List",new cljs.core.Keyword(null,"rows","rows",850049680),(10),new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"Add",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (add_new_open,add_new_title,add_new_list){
return (function (){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-bookstack","add-bookstack",776640780),cljs.core.deref.call(null,add_new_title),cljs.core.deref.call(null,add_new_list)], null));

return cljs.core.swap_BANG_.call(null,add_new_open,cljs.core.not);
});})(add_new_open,add_new_title,add_new_list))
], null)], null)], null)], null)], null);
});
bookstacks.views.search = (function bookstacks$views$search(search_term){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,new cljs.core.Keyword(null,"model","model",331153215),search_term,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Search Stacks & Books",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__26036_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-search-term","update-search-term",-1725569553),p1__26036_SHARP_], null));
})], null);
});
bookstacks.views.read_status = (function bookstacks$views$read_status(status,book,list){
var tabs = reagent.core.atom.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"unread","unread",-1950424572),new cljs.core.Keyword(null,"label","label",1718410804),"Unread"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"reading","reading",-409289668),new cljs.core.Keyword(null,"label","label",1718410804),"Reading"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"label","label",1718410804),"Read"], null)], null));
var status__$1 = reagent.core.atom.call(null,status);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.horizontal_bar_tabs,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"model","model",331153215),status__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (tabs,status__$1){
return (function (p1__26037_SHARP_){
cljs.core.reset_BANG_.call(null,status__$1,p1__26037_SHARP_);

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-read-status","update-read-status",-1675555937),p1__26037_SHARP_,book,list], null));
});})(tabs,status__$1))
], null);
});
bookstacks.views.bookstack_nav = (function bookstacks$views$bookstack_nav(stacks,current_stack){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477)], null),cljs.core.mapv.call(null,(function (stack){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("/#/stacks/"),cljs.core.str(clojure.string.replace.call(null,stack," ","_"))].join('')], null),stack], null)], null);
}),stacks));
});
bookstacks.views.bookstack_row = (function bookstacks$views$bookstack_row(stack,book){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str("li."),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(book)))].join('')),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(book)], null),bookstacks.views.read_status.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(book),book,stack)], null);
});
bookstacks.views.bookstack = (function bookstacks$views$bookstack(stack){
var row = cljs.core.partial.call(null,bookstacks.views.bookstack_row,stack);
var books = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"books","books",-2005362272).cljs$core$IFn$_invoke$arity$1(stack));
var unread_books = cljs.core.sort_by.call(null,cljs.core.partial.call(null,bookstacks.utils.stack_sort,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(stack)),cljs.core.concat.call(null,new cljs.core.Keyword(null,"reading","reading",-409289668).cljs$core$IFn$_invoke$arity$1(books),new cljs.core.Keyword(null,"unread","unread",-1950424572).cljs$core$IFn$_invoke$arity$1(books)));
var read_books = cljs.core.sort_by.call(null,cljs.core.partial.call(null,bookstacks.utils.stack_sort,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(stack)),new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(books));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.booklist","div.booklist",-175161908),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(stack)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Unread"], null)], null),(((cljs.core.count.call(null,unread_books) === (0)))?"You've read every book in this stack. Go watch a movie!":cljs.core.map.call(null,row,unread_books))),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Read"], null)], null),(((cljs.core.count.call(null,read_books) === (0)))?"You haven't read any of the books in this stack. Crack one open!":cljs.core.map.call(null,row,read_books)))], null)], null)], null);
});
bookstacks.views.home_panel = (function bookstacks$views$home_panel(){
var current_stack = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-stack","current-stack",-1546696626)], null));
var stack = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.deref.call(null,current_stack)], null));
var stacks = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null));
var search_term = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-term","search-term",356193544)], null));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"1em",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bookstacks.views.home_title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bookstacks.views.search.call(null,search_term),bookstacks.views.add_a_list.call(null),bookstacks.views.bookstack_nav.call(null,cljs.core.deref.call(null,stacks),cljs.core.deref.call(null,current_stack)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bookstacks.views.link_to_about_page], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),bookstacks.views.bookstack.call(null,cljs.core.deref.call(null,stack))], null)], null)], null)], null)], null);
});
bookstacks.views.about_title = (function bookstacks$views$about_title(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"This is the About Page.",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null);
});
bookstacks.views.link_to_home_page = (function bookstacks$views$link_to_home_page(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink_href,new cljs.core.Keyword(null,"label","label",1718410804),"go to Home Page",new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null);
});
bookstacks.views.about_panel = (function bookstacks$views$about_panel(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"1em",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bookstacks.views.about_title], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bookstacks.views.link_to_home_page], null)], null)], null);
});
if(typeof bookstacks.views.panels !== 'undefined'){
} else {
bookstacks.views.panels = (function (){var method_table__23503__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__23504__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__23505__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__23506__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__23507__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"bookstacks.views","panels"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__23507__auto__,method_table__23503__auto__,prefer_table__23504__auto__,method_cache__23505__auto__,cached_hierarchy__23506__auto__));
})();
}
cljs.core._add_method.call(null,bookstacks.views.panels,new cljs.core.Keyword(null,"home-panel","home-panel",1226198754),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bookstacks.views.home_panel], null);
}));
cljs.core._add_method.call(null,bookstacks.views.panels,new cljs.core.Keyword(null,"about-panel","about-panel",334628515),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bookstacks.views.about_panel], null);
}));
cljs.core._add_method.call(null,bookstacks.views.panels,new cljs.core.Keyword(null,"default","default",-1987822328),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);
}));
bookstacks.views.show_panel = (function bookstacks$views$show_panel(panel_name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bookstacks.views.panels,panel_name], null);
});
bookstacks.views.main_panel = (function bookstacks$views$main_panel(){
var active_panel = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994)], null));
return ((function (active_panel){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bookstacks.views.panels,cljs.core.deref.call(null,active_panel)], null)], null)], null);
});
;})(active_panel))
});

//# sourceMappingURL=views.js.map?rel=1474567891705