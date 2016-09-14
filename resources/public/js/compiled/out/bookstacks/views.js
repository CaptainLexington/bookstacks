// Compiled by ClojureScript 1.9.89 {}
goog.provide('bookstacks.views');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('re_com.core');
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
], null),new cljs.core.Keyword(null,"showing?","showing?",2094921488),add_new_open,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"below-center","below-center",-2126885397),new cljs.core.Keyword(null,"popover","popover",-1809582136),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.popover_content_wrapper,new cljs.core.Keyword(null,"title","title",636505583),"Add New List",new cljs.core.Keyword(null,"showing?","showing?",2094921488),add_new_open,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"below-center","below-center",-2126885397),new cljs.core.Keyword(null,"width","width",-384071477),"400px",new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,new cljs.core.Keyword(null,"model","model",331153215),"",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (add_new_open,add_new_title,add_new_list){
return (function (p1__26026_SHARP_){
return cljs.core.reset_BANG_.call(null,add_new_title,p1__26026_SHARP_);
});})(add_new_open,add_new_title,add_new_list))
,new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Name"], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_textarea,new cljs.core.Keyword(null,"model","model",331153215),"",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (add_new_open,add_new_title,add_new_list){
return (function (p1__26027_SHARP_){
return cljs.core.reset_BANG_.call(null,add_new_list,p1__26027_SHARP_);
});})(add_new_open,add_new_title,add_new_list))
,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"List",new cljs.core.Keyword(null,"height","height",1025178622),"200px",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"Add",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (add_new_open,add_new_title,add_new_list){
return (function (){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-bookstack","add-bookstack",776640780),cljs.core.deref.call(null,add_new_title),cljs.core.deref.call(null,add_new_list)], null));

return cljs.core.swap_BANG_.call(null,add_new_open,cljs.core.not);
});})(add_new_open,add_new_title,add_new_list))
], null)], null)], null)], null)], null);
});
bookstacks.views.book_button = (function bookstacks$views$book_button(icon,tooltip,on_click){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_circle_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),[cljs.core.str("zmdi-"),cljs.core.str(icon)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"smaller","smaller",-1619801498),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),tooltip,new cljs.core.Keyword(null,"tooltip-position","tooltip-position",936197013),new cljs.core.Keyword(null,"below-center","below-center",-2126885397),new cljs.core.Keyword(null,"class","class",-2030961996),"book-button",new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(bookstacks.views._PERCENT_))], null);
});
bookstacks.views.tab_components = (function bookstacks$views$tab_components(status,book,list){
var tabs = reagent.core.atom.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"unread","unread",-1950424572),new cljs.core.Keyword(null,"label","label",1718410804),"Unread"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"reading","reading",-409289668),new cljs.core.Keyword(null,"label","label",1718410804),"Reading"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"label","label",1718410804),"Read"], null)], null));
var status__$1 = reagent.core.atom.call(null,status);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.horizontal_bar_tabs,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"model","model",331153215),status__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (tabs,status__$1){
return (function (p1__26028_SHARP_){
cljs.core.reset_BANG_.call(null,status__$1,p1__26028_SHARP_);

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-read-status","update-read-status",-1675555937),p1__26028_SHARP_,book,list], null));
});})(tabs,status__$1))
], null);
});
bookstacks.views.booklist = (function bookstacks$views$booklist(list){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.booklist","div.booklist",-175161908),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(list)], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null),cljs.core.map.call(null,(function (p1__26029_SHARP_){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.keyword.call(null,[cljs.core.str("li."),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(p1__26029_SHARP_)))].join('')),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(p1__26029_SHARP_)], null),bookstacks.views.tab_components.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(p1__26029_SHARP_),p1__26029_SHARP_,list)],null));
}),new cljs.core.Keyword(null,"list","list",765357683).cljs$core$IFn$_invoke$arity$1(list)))], null);
});
bookstacks.views.home_panel = (function bookstacks$views$home_panel(){
var lists = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lists","lists",-884730684)], null));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"1em",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bookstacks.views.home_title], null),bookstacks.views.add_a_list.call(null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),cljs.core.map.call(null,bookstacks.views.booklist,cljs.core.deref.call(null,lists))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bookstacks.views.link_to_about_page], null)], null)], null);
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

//# sourceMappingURL=views.js.map?rel=1473815589433