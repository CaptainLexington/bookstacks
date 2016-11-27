// Compiled by ClojureScript 1.9.293 {}
goog.provide('re_com.tabs');
goog.require('cljs.core');
goog.require('re_com.util');
goog.require('re_com.box');
goog.require('re_com.validate');
re_com.tabs.tabs_args_desc = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tabs","tabs",-779855354),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"vector of tabs | atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.vector_of_maps_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"one element in the vector for each tab. Typically, each element is a map with :id and :label keys"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"unique-id | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"the unique identifier of the currently selected tab"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"unique-id -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"called when user alters the selection. Passed the unique identifier of the selection"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"type","type",1174270348),"tab -> anything",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":tabs"], null),", returns its unique identifier (aka id)"], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"type","type",1174270348),"tab -> string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":tabs"], null),", returns its displayable label"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override (for each individual tab rather than the container)"], null)], null);
re_com.tabs.horizontal_tabs = (function re_com$tabs$horizontal_tabs(var_args){
var args__27089__auto__ = [];
var len__27082__auto___29777 = arguments.length;
var i__27083__auto___29778 = (0);
while(true){
if((i__27083__auto___29778 < len__27082__auto___29777)){
args__27089__auto__.push((arguments[i__27083__auto___29778]));

var G__29779 = (i__27083__auto___29778 + (1));
i__27083__auto___29778 = G__29779;
continue;
} else {
}
break;
}

var argseq__27090__auto__ = ((((0) < args__27089__auto__.length))?(new cljs.core.IndexedSeq(args__27089__auto__.slice((0)),(0),null)):null);
return re_com.tabs.horizontal_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__27090__auto__);
});

re_com.tabs.horizontal_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__29770){
var map__29771 = p__29770;
var map__29771__$1 = ((((!((map__29771 == null)))?((((map__29771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29771.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29771):map__29771);
var args = map__29771__$1;
var model = cljs.core.get.call(null,map__29771__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.call(null,map__29771__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.call(null,map__29771__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.call(null,map__29771__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var label_fn = cljs.core.get.call(null,map__29771__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var style = cljs.core.get.call(null,map__29771__$1,new cljs.core.Keyword(null,"style","style",-496642736));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.tabs.tabs_args_desc),args,"tabs")))){
} else {
throw (new Error("Assert failed: (validate-args-macro tabs-args-desc args \"tabs\")"));
}

var current = re_com.util.deref_or_value.call(null,model);
var tabs__$1 = re_com.util.deref_or_value.call(null,tabs);
var _ = (cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (current,tabs__$1,map__29771,map__29771__$1,args,model,tabs,on_change,id_fn,label_fn,style){
return (function (p1__29768_SHARP_){
return cljs.core._EQ_.call(null,current,id_fn.call(null,p1__29768_SHARP_));
});})(current,tabs__$1,map__29771,map__29771__$1,args,model,tabs,on_change,id_fn,label_fn,style))
,tabs__$1)))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("model not found in tabs vector"),cljs.core.str("\n"),cljs.core.str("(not-empty (filter (fn* [p1__29768#] (= current (id-fn p1__29768#))) tabs))")].join('')))})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"rc-tabs nav nav-tabs noselect",new cljs.core.Keyword(null,"style","style",-496642736),re_com.box.flex_child_style.call(null,"none")], null),(function (){var iter__26757__auto__ = ((function (current,tabs__$1,_,map__29771,map__29771__$1,args,model,tabs,on_change,id_fn,label_fn,style){
return (function re_com$tabs$iter__29773(s__29774){
return (new cljs.core.LazySeq(null,((function (current,tabs__$1,_,map__29771,map__29771__$1,args,model,tabs,on_change,id_fn,label_fn,style){
return (function (){
var s__29774__$1 = s__29774;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__29774__$1);
if(temp__4657__auto__){
var s__29774__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29774__$2)){
var c__26755__auto__ = cljs.core.chunk_first.call(null,s__29774__$2);
var size__26756__auto__ = cljs.core.count.call(null,c__26755__auto__);
var b__29776 = cljs.core.chunk_buffer.call(null,size__26756__auto__);
if((function (){var i__29775 = (0);
while(true){
if((i__29775 < size__26756__auto__)){
var t = cljs.core._nth.call(null,c__26755__auto__,i__29775);
cljs.core.chunk_append.call(null,b__29776,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((selected_QMARK_)?"active":null),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(id)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (i__29775,id,label,selected_QMARK_,t,c__26755__auto__,size__26756__auto__,b__29776,s__29774__$2,temp__4657__auto__,current,tabs__$1,_,map__29771,map__29771__$1,args,model,tabs,on_change,id_fn,label_fn,style){
return (function (event){
on_change.call(null,id);

return null;
});})(i__29775,id,label,selected_QMARK_,t,c__26755__auto__,size__26756__auto__,b__29776,s__29774__$2,temp__4657__auto__,current,tabs__$1,_,map__29771,map__29771__$1,args,model,tabs,on_change,id_fn,label_fn,style))
:null)], null),label], null)], null);
})());

var G__29780 = (i__29775 + (1));
i__29775 = G__29780;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29776),re_com$tabs$iter__29773.call(null,cljs.core.chunk_rest.call(null,s__29774__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29776),null);
}
} else {
var t = cljs.core.first.call(null,s__29774__$2);
return cljs.core.cons.call(null,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((selected_QMARK_)?"active":null),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(id)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (id,label,selected_QMARK_,t,s__29774__$2,temp__4657__auto__,current,tabs__$1,_,map__29771,map__29771__$1,args,model,tabs,on_change,id_fn,label_fn,style){
return (function (event){
on_change.call(null,id);

return null;
});})(id,label,selected_QMARK_,t,s__29774__$2,temp__4657__auto__,current,tabs__$1,_,map__29771,map__29771__$1,args,model,tabs,on_change,id_fn,label_fn,style))
:null)], null),label], null)], null);
})(),re_com$tabs$iter__29773.call(null,cljs.core.rest.call(null,s__29774__$2)));
}
} else {
return null;
}
break;
}
});})(current,tabs__$1,_,map__29771,map__29771__$1,args,model,tabs,on_change,id_fn,label_fn,style))
,null,null));
});})(current,tabs__$1,_,map__29771,map__29771__$1,args,model,tabs,on_change,id_fn,label_fn,style))
;
return iter__26757__auto__.call(null,tabs__$1);
})()], null);
});

re_com.tabs.horizontal_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.horizontal_tabs.cljs$lang$applyTo = (function (seq29769){
return re_com.tabs.horizontal_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29769));
});

re_com.tabs.bar_tabs = (function re_com$tabs$bar_tabs(var_args){
var args__27089__auto__ = [];
var len__27082__auto___29790 = arguments.length;
var i__27083__auto___29791 = (0);
while(true){
if((i__27083__auto___29791 < len__27082__auto___29790)){
args__27089__auto__.push((arguments[i__27083__auto___29791]));

var G__29792 = (i__27083__auto___29791 + (1));
i__27083__auto___29791 = G__29792;
continue;
} else {
}
break;
}

var argseq__27090__auto__ = ((((0) < args__27089__auto__.length))?(new cljs.core.IndexedSeq(args__27089__auto__.slice((0)),(0),null)):null);
return re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__27090__auto__);
});

re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__29783){
var map__29784 = p__29783;
var map__29784__$1 = ((((!((map__29784 == null)))?((((map__29784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29784.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29784):map__29784);
var model = cljs.core.get.call(null,map__29784__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.call(null,map__29784__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.call(null,map__29784__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.call(null,map__29784__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798));
var label_fn = cljs.core.get.call(null,map__29784__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263));
var style = cljs.core.get.call(null,map__29784__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var vertical_QMARK_ = cljs.core.get.call(null,map__29784__$1,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444));
var current = re_com.util.deref_or_value.call(null,model);
var tabs__$1 = re_com.util.deref_or_value.call(null,tabs);
var _ = (cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (current,tabs__$1,map__29784,map__29784__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (p1__29781_SHARP_){
return cljs.core._EQ_.call(null,current,id_fn.call(null,p1__29781_SHARP_));
});})(current,tabs__$1,map__29784,map__29784__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
,tabs__$1)))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("model not found in tabs vector"),cljs.core.str("\n"),cljs.core.str("(not-empty (filter (fn* [p1__29781#] (= current (id-fn p1__29781#))) tabs))")].join('')))})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("rc-tabs noselect btn-group"),cljs.core.str((cljs.core.truth_(vertical_QMARK_)?"-vertical":null))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),re_com.box.flex_child_style.call(null,"none")], null),(function (){var iter__26757__auto__ = ((function (current,tabs__$1,_,map__29784,map__29784__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function re_com$tabs$iter__29786(s__29787){
return (new cljs.core.LazySeq(null,((function (current,tabs__$1,_,map__29784,map__29784__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (){
var s__29787__$1 = s__29787;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__29787__$1);
if(temp__4657__auto__){
var s__29787__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29787__$2)){
var c__26755__auto__ = cljs.core.chunk_first.call(null,s__29787__$2);
var size__26756__auto__ = cljs.core.count.call(null,c__26755__auto__);
var b__29789 = cljs.core.chunk_buffer.call(null,size__26756__auto__);
if((function (){var i__29788 = (0);
while(true){
if((i__29788 < size__26756__auto__)){
var t = cljs.core._nth.call(null,c__26755__auto__,i__29788);
cljs.core.chunk_append.call(null,b__29789,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("btn btn-default "),cljs.core.str(((selected_QMARK_)?"active":null))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (i__29788,id,label,selected_QMARK_,t,c__26755__auto__,size__26756__auto__,b__29789,s__29787__$2,temp__4657__auto__,current,tabs__$1,_,map__29784,map__29784__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (event){
on_change.call(null,id);

return null;
});})(i__29788,id,label,selected_QMARK_,t,c__26755__auto__,size__26756__auto__,b__29789,s__29787__$2,temp__4657__auto__,current,tabs__$1,_,map__29784,map__29784__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
:null)], null),label], null);
})());

var G__29793 = (i__29788 + (1));
i__29788 = G__29793;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29789),re_com$tabs$iter__29786.call(null,cljs.core.chunk_rest.call(null,s__29787__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29789),null);
}
} else {
var t = cljs.core.first.call(null,s__29787__$2);
return cljs.core.cons.call(null,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("btn btn-default "),cljs.core.str(((selected_QMARK_)?"active":null))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (id,label,selected_QMARK_,t,s__29787__$2,temp__4657__auto__,current,tabs__$1,_,map__29784,map__29784__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (event){
on_change.call(null,id);

return null;
});})(id,label,selected_QMARK_,t,s__29787__$2,temp__4657__auto__,current,tabs__$1,_,map__29784,map__29784__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
:null)], null),label], null);
})(),re_com$tabs$iter__29786.call(null,cljs.core.rest.call(null,s__29787__$2)));
}
} else {
return null;
}
break;
}
});})(current,tabs__$1,_,map__29784,map__29784__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
,null,null));
});})(current,tabs__$1,_,map__29784,map__29784__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
;
return iter__26757__auto__.call(null,tabs__$1);
})()], null);
});

re_com.tabs.bar_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.bar_tabs.cljs$lang$applyTo = (function (seq29782){
return re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29782));
});

re_com.tabs.horizontal_bar_tabs = (function re_com$tabs$horizontal_bar_tabs(var_args){
var args__27089__auto__ = [];
var len__27082__auto___29798 = arguments.length;
var i__27083__auto___29799 = (0);
while(true){
if((i__27083__auto___29799 < len__27082__auto___29798)){
args__27089__auto__.push((arguments[i__27083__auto___29799]));

var G__29800 = (i__27083__auto___29799 + (1));
i__27083__auto___29799 = G__29800;
continue;
} else {
}
break;
}

var argseq__27090__auto__ = ((((0) < args__27089__auto__.length))?(new cljs.core.IndexedSeq(args__27089__auto__.slice((0)),(0),null)):null);
return re_com.tabs.horizontal_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__27090__auto__);
});

re_com.tabs.horizontal_bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__29795){
var map__29796 = p__29795;
var map__29796__$1 = ((((!((map__29796 == null)))?((((map__29796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29796.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29796):map__29796);
var args = map__29796__$1;
var model = cljs.core.get.call(null,map__29796__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.call(null,map__29796__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.call(null,map__29796__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.call(null,map__29796__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var label_fn = cljs.core.get.call(null,map__29796__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var style = cljs.core.get.call(null,map__29796__$1,new cljs.core.Keyword(null,"style","style",-496642736));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.tabs.tabs_args_desc),args,"tabs")))){
} else {
throw (new Error("Assert failed: (validate-args-macro tabs-args-desc args \"tabs\")"));
}

return re_com.tabs.bar_tabs.call(null,new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),false);
});

re_com.tabs.horizontal_bar_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.horizontal_bar_tabs.cljs$lang$applyTo = (function (seq29794){
return re_com.tabs.horizontal_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29794));
});

re_com.tabs.vertical_bar_tabs = (function re_com$tabs$vertical_bar_tabs(var_args){
var args__27089__auto__ = [];
var len__27082__auto___29805 = arguments.length;
var i__27083__auto___29806 = (0);
while(true){
if((i__27083__auto___29806 < len__27082__auto___29805)){
args__27089__auto__.push((arguments[i__27083__auto___29806]));

var G__29807 = (i__27083__auto___29806 + (1));
i__27083__auto___29806 = G__29807;
continue;
} else {
}
break;
}

var argseq__27090__auto__ = ((((0) < args__27089__auto__.length))?(new cljs.core.IndexedSeq(args__27089__auto__.slice((0)),(0),null)):null);
return re_com.tabs.vertical_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__27090__auto__);
});

re_com.tabs.vertical_bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__29802){
var map__29803 = p__29802;
var map__29803__$1 = ((((!((map__29803 == null)))?((((map__29803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29803.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29803):map__29803);
var args = map__29803__$1;
var model = cljs.core.get.call(null,map__29803__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.call(null,map__29803__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.call(null,map__29803__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.call(null,map__29803__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var label_fn = cljs.core.get.call(null,map__29803__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var style = cljs.core.get.call(null,map__29803__$1,new cljs.core.Keyword(null,"style","style",-496642736));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.tabs.tabs_args_desc),args,"tabs")))){
} else {
throw (new Error("Assert failed: (validate-args-macro tabs-args-desc args \"tabs\")"));
}

return re_com.tabs.bar_tabs.call(null,new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),true);
});

re_com.tabs.vertical_bar_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.vertical_bar_tabs.cljs$lang$applyTo = (function (seq29801){
return re_com.tabs.vertical_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29801));
});

re_com.tabs.pill_tabs = (function re_com$tabs$pill_tabs(var_args){
var args__27089__auto__ = [];
var len__27082__auto___29817 = arguments.length;
var i__27083__auto___29818 = (0);
while(true){
if((i__27083__auto___29818 < len__27082__auto___29817)){
args__27089__auto__.push((arguments[i__27083__auto___29818]));

var G__29819 = (i__27083__auto___29818 + (1));
i__27083__auto___29818 = G__29819;
continue;
} else {
}
break;
}

var argseq__27090__auto__ = ((((0) < args__27089__auto__.length))?(new cljs.core.IndexedSeq(args__27089__auto__.slice((0)),(0),null)):null);
return re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__27090__auto__);
});

re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__29810){
var map__29811 = p__29810;
var map__29811__$1 = ((((!((map__29811 == null)))?((((map__29811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29811.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29811):map__29811);
var model = cljs.core.get.call(null,map__29811__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.call(null,map__29811__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.call(null,map__29811__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.call(null,map__29811__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798));
var label_fn = cljs.core.get.call(null,map__29811__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263));
var style = cljs.core.get.call(null,map__29811__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var vertical_QMARK_ = cljs.core.get.call(null,map__29811__$1,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444));
var current = re_com.util.deref_or_value.call(null,model);
var tabs__$1 = re_com.util.deref_or_value.call(null,tabs);
var _ = (cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (current,tabs__$1,map__29811,map__29811__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (p1__29808_SHARP_){
return cljs.core._EQ_.call(null,current,id_fn.call(null,p1__29808_SHARP_));
});})(current,tabs__$1,map__29811,map__29811__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
,tabs__$1)))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("model not found in tabs vector"),cljs.core.str("\n"),cljs.core.str("(not-empty (filter (fn* [p1__29808#] (= current (id-fn p1__29808#))) tabs))")].join('')))})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("rc-tabs noselect nav nav-pills"),cljs.core.str((cljs.core.truth_(vertical_QMARK_)?" nav-stacked":null))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),re_com.box.flex_child_style.call(null,"none"),new cljs.core.Keyword(null,"role","role",-736691072),"tabslist"], null),(function (){var iter__26757__auto__ = ((function (current,tabs__$1,_,map__29811,map__29811__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function re_com$tabs$iter__29813(s__29814){
return (new cljs.core.LazySeq(null,((function (current,tabs__$1,_,map__29811,map__29811__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (){
var s__29814__$1 = s__29814;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__29814__$1);
if(temp__4657__auto__){
var s__29814__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29814__$2)){
var c__26755__auto__ = cljs.core.chunk_first.call(null,s__29814__$2);
var size__26756__auto__ = cljs.core.count.call(null,c__26755__auto__);
var b__29816 = cljs.core.chunk_buffer.call(null,size__26756__auto__);
if((function (){var i__29815 = (0);
while(true){
if((i__29815 < size__26756__auto__)){
var t = cljs.core._nth.call(null,c__26755__auto__,i__29815);
cljs.core.chunk_append.call(null,b__29816,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((selected_QMARK_)?"active":""),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(id)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (i__29815,id,label,selected_QMARK_,t,c__26755__auto__,size__26756__auto__,b__29816,s__29814__$2,temp__4657__auto__,current,tabs__$1,_,map__29811,map__29811__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (event){
on_change.call(null,id);

return null;
});})(i__29815,id,label,selected_QMARK_,t,c__26755__auto__,size__26756__auto__,b__29816,s__29814__$2,temp__4657__auto__,current,tabs__$1,_,map__29811,map__29811__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
:null)], null),label], null)], null);
})());

var G__29820 = (i__29815 + (1));
i__29815 = G__29820;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29816),re_com$tabs$iter__29813.call(null,cljs.core.chunk_rest.call(null,s__29814__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29816),null);
}
} else {
var t = cljs.core.first.call(null,s__29814__$2);
return cljs.core.cons.call(null,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((selected_QMARK_)?"active":""),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(id)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (id,label,selected_QMARK_,t,s__29814__$2,temp__4657__auto__,current,tabs__$1,_,map__29811,map__29811__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (event){
on_change.call(null,id);

return null;
});})(id,label,selected_QMARK_,t,s__29814__$2,temp__4657__auto__,current,tabs__$1,_,map__29811,map__29811__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
:null)], null),label], null)], null);
})(),re_com$tabs$iter__29813.call(null,cljs.core.rest.call(null,s__29814__$2)));
}
} else {
return null;
}
break;
}
});})(current,tabs__$1,_,map__29811,map__29811__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
,null,null));
});})(current,tabs__$1,_,map__29811,map__29811__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
;
return iter__26757__auto__.call(null,tabs__$1);
})()], null);
});

re_com.tabs.pill_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.pill_tabs.cljs$lang$applyTo = (function (seq29809){
return re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29809));
});

re_com.tabs.horizontal_pill_tabs = (function re_com$tabs$horizontal_pill_tabs(var_args){
var args__27089__auto__ = [];
var len__27082__auto___29825 = arguments.length;
var i__27083__auto___29826 = (0);
while(true){
if((i__27083__auto___29826 < len__27082__auto___29825)){
args__27089__auto__.push((arguments[i__27083__auto___29826]));

var G__29827 = (i__27083__auto___29826 + (1));
i__27083__auto___29826 = G__29827;
continue;
} else {
}
break;
}

var argseq__27090__auto__ = ((((0) < args__27089__auto__.length))?(new cljs.core.IndexedSeq(args__27089__auto__.slice((0)),(0),null)):null);
return re_com.tabs.horizontal_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__27090__auto__);
});

re_com.tabs.horizontal_pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__29822){
var map__29823 = p__29822;
var map__29823__$1 = ((((!((map__29823 == null)))?((((map__29823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29823.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29823):map__29823);
var args = map__29823__$1;
var model = cljs.core.get.call(null,map__29823__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.call(null,map__29823__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.call(null,map__29823__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.call(null,map__29823__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var style = cljs.core.get.call(null,map__29823__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var label_fn = cljs.core.get.call(null,map__29823__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.tabs.tabs_args_desc),args,"tabs")))){
} else {
throw (new Error("Assert failed: (validate-args-macro tabs-args-desc args \"tabs\")"));
}

return re_com.tabs.pill_tabs.call(null,new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),false);
});

re_com.tabs.horizontal_pill_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.horizontal_pill_tabs.cljs$lang$applyTo = (function (seq29821){
return re_com.tabs.horizontal_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29821));
});

re_com.tabs.vertical_pill_tabs = (function re_com$tabs$vertical_pill_tabs(var_args){
var args__27089__auto__ = [];
var len__27082__auto___29832 = arguments.length;
var i__27083__auto___29833 = (0);
while(true){
if((i__27083__auto___29833 < len__27082__auto___29832)){
args__27089__auto__.push((arguments[i__27083__auto___29833]));

var G__29834 = (i__27083__auto___29833 + (1));
i__27083__auto___29833 = G__29834;
continue;
} else {
}
break;
}

var argseq__27090__auto__ = ((((0) < args__27089__auto__.length))?(new cljs.core.IndexedSeq(args__27089__auto__.slice((0)),(0),null)):null);
return re_com.tabs.vertical_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__27090__auto__);
});

re_com.tabs.vertical_pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__29829){
var map__29830 = p__29829;
var map__29830__$1 = ((((!((map__29830 == null)))?((((map__29830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29830.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29830):map__29830);
var args = map__29830__$1;
var model = cljs.core.get.call(null,map__29830__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.call(null,map__29830__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.call(null,map__29830__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.call(null,map__29830__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var style = cljs.core.get.call(null,map__29830__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var label_fn = cljs.core.get.call(null,map__29830__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.tabs.tabs_args_desc),args,"tabs")))){
} else {
throw (new Error("Assert failed: (validate-args-macro tabs-args-desc args \"tabs\")"));
}

return re_com.tabs.pill_tabs.call(null,new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),true);
});

re_com.tabs.vertical_pill_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.vertical_pill_tabs.cljs$lang$applyTo = (function (seq29828){
return re_com.tabs.vertical_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29828));
});


//# sourceMappingURL=tabs.js.map?rel=1480126458280