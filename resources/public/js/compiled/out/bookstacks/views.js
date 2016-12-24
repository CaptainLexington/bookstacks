// Compiled by ClojureScript 1.9.293 {}
goog.provide('bookstacks.views');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('re_com.core');
goog.require('bookstacks.utils');
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.add","div.add",-1186475832),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.popover_anchor_wrapper,new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"Add New Stack",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (add_new_open,add_new_title,add_new_list){
return (function (){
return cljs.core.swap_BANG_.call(null,add_new_open,cljs.core.not);
});})(add_new_open,add_new_title,add_new_list))
], null),new cljs.core.Keyword(null,"showing?","showing?",2094921488),add_new_open,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"right-below","right-below",586981827),new cljs.core.Keyword(null,"popover","popover",-1809582136),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.popover_content_wrapper,new cljs.core.Keyword(null,"title","title",636505583),"Add New Stack",new cljs.core.Keyword(null,"showing?","showing?",2094921488),add_new_open,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"right-below","right-below",586981827),new cljs.core.Keyword(null,"width","width",-384071477),"400px",new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,new cljs.core.Keyword(null,"model","model",331153215),"",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (add_new_open,add_new_title,add_new_list){
return (function (p1__29565_SHARP_){
return cljs.core.reset_BANG_.call(null,add_new_title,p1__29565_SHARP_);
});})(add_new_open,add_new_title,add_new_list))
,new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Name"], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_textarea,new cljs.core.Keyword(null,"model","model",331153215),"",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (add_new_open,add_new_title,add_new_list){
return (function (p1__29566_SHARP_){
return cljs.core.reset_BANG_.call(null,add_new_list,p1__29566_SHARP_);
});})(add_new_open,add_new_title,add_new_list))
,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Books",new cljs.core.Keyword(null,"rows","rows",850049680),(10),new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"Add",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (add_new_open,add_new_title,add_new_list){
return (function (){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-bookstack","add-bookstack",776640780),cljs.core.deref.call(null,add_new_title),cljs.core.deref.call(null,add_new_list)], null));

return cljs.core.swap_BANG_.call(null,add_new_open,cljs.core.not);
});})(add_new_open,add_new_title,add_new_list))
], null)], null)], null)], null)], null);
});
bookstacks.views.search = (function bookstacks$views$search(search_term){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,new cljs.core.Keyword(null,"model","model",331153215),search_term,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Search Stacks & Books",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__29567_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-search-term","update-search-term",-1725569553),p1__29567_SHARP_], null));
})], null);
});
bookstacks.views.read_status = (function bookstacks$views$read_status(status,book){
var tabs = reagent.core.atom.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"unread","unread",-1950424572),new cljs.core.Keyword(null,"label","label",1718410804),"Unread"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"reading","reading",-409289668),new cljs.core.Keyword(null,"label","label",1718410804),"Reading"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"label","label",1718410804),"Read"], null)], null));
var read_status_open = reagent.core.atom.call(null,false);
var status__$1 = reagent.core.atom.call(null,status);
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.popover_anchor_wrapper,new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-book",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"smaller","smaller",-1619801498),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (tabs,read_status_open,status__$1){
return (function (){
return cljs.core.swap_BANG_.call(null,read_status_open,cljs.core.not);
});})(tabs,read_status_open,status__$1))
], null),new cljs.core.Keyword(null,"showing?","showing?",2094921488),read_status_open,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"below-center","below-center",-2126885397),new cljs.core.Keyword(null,"popover","popover",-1809582136),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.popover_content_wrapper,new cljs.core.Keyword(null,"showing?","showing?",2094921488),read_status_open,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"below-center","below-center",-2126885397),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.vertical_bar_tabs,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"model","model",331153215),status__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (tabs,read_status_open,status__$1){
return (function (p1__29568_SHARP_){
cljs.core.reset_BANG_.call(null,status__$1,p1__29568_SHARP_);

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-read-status","update-read-status",-1675555937),p1__29568_SHARP_,book], null));
});})(tabs,read_status_open,status__$1))
], null)], null)], null);
});
bookstacks.views.bookstack_nav = (function bookstacks$views$bookstack_nav(stacks,current_stack){
var all_stacks = clojure.set.union.call(null,stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["In Progress",null], null), null));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477)], null),cljs.core.mapv.call(null,((function (all_stacks){
return (function (stack){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("/#/stacks/"),cljs.core.str(clojure.string.replace.call(null,stack," ","_"))].join('')], null),stack], null)], null);
});})(all_stacks))
,all_stacks));
});
bookstacks.views.book_index_dropdown = (function bookstacks$views$book_index_dropdown(book,stack){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"choices","choices",1385611597),cljs.core.map.call(null,(function (p1__29569_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"label","label",1718410804)],[p1__29569_SHARP_,(p1__29569_SHARP_ + (1))]);
}),cljs.core.range.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"books","books",-2005362272).cljs$core$IFn$_invoke$arity$1(stack)))),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(book),new cljs.core.Keyword(null,"width","width",-384071477),"40px",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__29570_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-book-index","update-book-index",-1769768117),book,stack,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(book),p1__29570_SHARP_], null));
})], null);
});
bookstacks.views.bookstack_row = (function bookstacks$views$bookstack_row(stack,book){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str("li."),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(book)))].join('')),(cljs.core.truth_(new cljs.core.Keyword(null,"editing?","editing?",1646440800).cljs$core$IFn$_invoke$arity$1(book))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bookstacks.views.book_index_dropdown.call(null,book,stack),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(book),new cljs.core.Keyword(null,"width","width",-384071477),"134px",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__29571_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-book-title","update-book-title",1073440360),p1__29571_SHARP_,book], null));
})], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),[cljs.core.str((new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(book) + (1))),cljs.core.str(". "),cljs.core.str(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(book))].join('')], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"class","class",-2030961996),"modify-book",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bookstacks.views.read_status.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(book),book),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-edit",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"smaller","smaller",-1619801498),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edit-book-title","edit-book-title",-234853508),book], null));
})], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-delete",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"smaller","smaller",-1619801498),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove-book-from-stack","remove-book-from-stack",-900505670),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(stack),book], null));
})], null)], null)], null)], null);
});
bookstacks.views.bookstack = (function bookstacks$views$bookstack(stack,editing_stack_name_QMARK_){
var row = cljs.core.partial.call(null,bookstacks.views.bookstack_row,stack);
var books = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"books","books",-2005362272).cljs$core$IFn$_invoke$arity$1(stack));
var unread_books = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.concat.call(null,new cljs.core.Keyword(null,"reading","reading",-409289668).cljs$core$IFn$_invoke$arity$1(books),new cljs.core.Keyword(null,"unread","unread",-1950424572).cljs$core$IFn$_invoke$arity$1(books)));
var read_books = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(books));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.booklist","div.booklist",-175161908),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(editing_stack_name_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(stack),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (row,books,unread_books,read_books){
return (function (p1__29572_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-bookstack-name","update-bookstack-name",1046186781),stack,p1__29572_SHARP_], null));
});})(row,books,unread_books,read_books))
], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.stack","h3.stack",-1023525878),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(stack)], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-plus",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (row,books,unread_books,read_books){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-book","add-book",-1937507385),stack], null));
});})(row,books,unread_books,read_books))
], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-edit",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (row,books,unread_books,read_books){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edit-bookstack-name","edit-bookstack-name",863376763)], null));
});})(row,books,unread_books,read_books))
], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-delete",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (row,books,unread_books,read_books){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete-bookstack","delete-bookstack",-162070907),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(stack)], null));
});})(row,books,unread_books,read_books))
], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Unread"], null)], null),(((cljs.core.count.call(null,unread_books) === (0)))?"You've read every book in this stack. Go watch a movie!":cljs.core.map.call(null,row,unread_books))),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Read"], null)], null),(((cljs.core.count.call(null,read_books) === (0)))?"You haven't read any of the books in this stack. Crack one open!":cljs.core.map.call(null,row,read_books)))], null)], null)], null);
});
bookstacks.views.home_panel = (function bookstacks$views$home_panel(){
var current_stack = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-stack","current-stack",-1546696626)], null));
var stack = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.deref.call(null,current_stack)], null));
var stacks = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null));
var search_term = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-term","search-term",356193544)], null));
var editing_stack_name_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editing-stack-name?","editing-stack-name?",-1878594953)], null));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"1em",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bookstacks.views.home_title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bookstacks.views.search.call(null,search_term),bookstacks.views.add_a_list.call(null),bookstacks.views.bookstack_nav.call(null,cljs.core.deref.call(null,stacks),cljs.core.deref.call(null,current_stack)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bookstacks.views.link_to_about_page], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),bookstacks.views.bookstack.call(null,cljs.core.deref.call(null,stack),cljs.core.deref.call(null,editing_stack_name_QMARK_))], null)], null)], null)], null)], null);
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
bookstacks.views.panels = (function (){var method_table__26902__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26903__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26904__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26905__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26906__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"bookstacks.views","panels"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26906__auto__,method_table__26902__auto__,prefer_table__26903__auto__,method_cache__26904__auto__,cached_hierarchy__26905__auto__));
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

//# sourceMappingURL=views.js.map?rel=1482555930319