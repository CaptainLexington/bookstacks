// Compiled by ClojureScript 1.9.293 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.4-3";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args39343 = [];
var len__27082__auto___39346 = arguments.length;
var i__27083__auto___39347 = (0);
while(true){
if((i__27083__auto___39347 < len__27082__auto___39346)){
args39343.push((arguments[i__27083__auto___39347]));

var G__39348 = (i__27083__auto___39347 + (1));
i__27083__auto___39347 = G__39348;
continue;
} else {
}
break;
}

var G__39345 = args39343.length;
switch (G__39345) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39343.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__27089__auto__ = [];
var len__27082__auto___39351 = arguments.length;
var i__27083__auto___39352 = (0);
while(true){
if((i__27083__auto___39352 < len__27082__auto___39351)){
args__27089__auto__.push((arguments[i__27083__auto___39352]));

var G__39353 = (i__27083__auto___39352 + (1));
i__27083__auto___39352 = G__39353;
continue;
} else {
}
break;
}

var argseq__27090__auto__ = ((((0) < args__27089__auto__.length))?(new cljs.core.IndexedSeq(args__27089__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__27090__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq39350){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39350));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__27089__auto__ = [];
var len__27082__auto___39355 = arguments.length;
var i__27083__auto___39356 = (0);
while(true){
if((i__27083__auto___39356 < len__27082__auto___39355)){
args__27089__auto__.push((arguments[i__27083__auto___39356]));

var G__39357 = (i__27083__auto___39356 + (1));
i__27083__auto___39356 = G__39357;
continue;
} else {
}
break;
}

var argseq__27090__auto__ = ((((0) < args__27089__auto__.length))?(new cljs.core.IndexedSeq(args__27089__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__27090__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq39354){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39354));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__39358 = cljs.core._EQ_;
var expr__39359 = (function (){var or__25974__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e39362){if((e39362 instanceof Error)){
var e = e39362;
return false;
} else {
throw e39362;

}
}})();
if(cljs.core.truth_(or__25974__auto__)){
return or__25974__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__39358.call(null,"true",expr__39359))){
return true;
} else {
if(cljs.core.truth_(pred__39358.call(null,"false",expr__39359))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__39359)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e39364){if((e39364 instanceof Error)){
var e = e39364;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e39364;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__39365){
var map__39368 = p__39365;
var map__39368__$1 = ((((!((map__39368 == null)))?((((map__39368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39368.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39368):map__39368);
var message = cljs.core.get.call(null,map__39368__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__39368__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__25974__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__25974__auto__)){
return or__25974__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__25962__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__25962__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__25962__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__28434__auto___39530 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28434__auto___39530,ch){
return (function (){
var f__28435__auto__ = (function (){var switch__28412__auto__ = ((function (c__28434__auto___39530,ch){
return (function (state_39499){
var state_val_39500 = (state_39499[(1)]);
if((state_val_39500 === (7))){
var inst_39495 = (state_39499[(2)]);
var state_39499__$1 = state_39499;
var statearr_39501_39531 = state_39499__$1;
(statearr_39501_39531[(2)] = inst_39495);

(statearr_39501_39531[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39500 === (1))){
var state_39499__$1 = state_39499;
var statearr_39502_39532 = state_39499__$1;
(statearr_39502_39532[(2)] = null);

(statearr_39502_39532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39500 === (4))){
var inst_39452 = (state_39499[(7)]);
var inst_39452__$1 = (state_39499[(2)]);
var state_39499__$1 = (function (){var statearr_39503 = state_39499;
(statearr_39503[(7)] = inst_39452__$1);

return statearr_39503;
})();
if(cljs.core.truth_(inst_39452__$1)){
var statearr_39504_39533 = state_39499__$1;
(statearr_39504_39533[(1)] = (5));

} else {
var statearr_39505_39534 = state_39499__$1;
(statearr_39505_39534[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39500 === (15))){
var inst_39459 = (state_39499[(8)]);
var inst_39474 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39459);
var inst_39475 = cljs.core.first.call(null,inst_39474);
var inst_39476 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_39475);
var inst_39477 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_39476)].join('');
var inst_39478 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_39477);
var state_39499__$1 = state_39499;
var statearr_39506_39535 = state_39499__$1;
(statearr_39506_39535[(2)] = inst_39478);

(statearr_39506_39535[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39500 === (13))){
var inst_39483 = (state_39499[(2)]);
var state_39499__$1 = state_39499;
var statearr_39507_39536 = state_39499__$1;
(statearr_39507_39536[(2)] = inst_39483);

(statearr_39507_39536[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39500 === (6))){
var state_39499__$1 = state_39499;
var statearr_39508_39537 = state_39499__$1;
(statearr_39508_39537[(2)] = null);

(statearr_39508_39537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39500 === (17))){
var inst_39481 = (state_39499[(2)]);
var state_39499__$1 = state_39499;
var statearr_39509_39538 = state_39499__$1;
(statearr_39509_39538[(2)] = inst_39481);

(statearr_39509_39538[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39500 === (3))){
var inst_39497 = (state_39499[(2)]);
var state_39499__$1 = state_39499;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39499__$1,inst_39497);
} else {
if((state_val_39500 === (12))){
var inst_39458 = (state_39499[(9)]);
var inst_39472 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_39458,opts);
var state_39499__$1 = state_39499;
if(cljs.core.truth_(inst_39472)){
var statearr_39510_39539 = state_39499__$1;
(statearr_39510_39539[(1)] = (15));

} else {
var statearr_39511_39540 = state_39499__$1;
(statearr_39511_39540[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39500 === (2))){
var state_39499__$1 = state_39499;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39499__$1,(4),ch);
} else {
if((state_val_39500 === (11))){
var inst_39459 = (state_39499[(8)]);
var inst_39464 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39465 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_39459);
var inst_39466 = cljs.core.async.timeout.call(null,(1000));
var inst_39467 = [inst_39465,inst_39466];
var inst_39468 = (new cljs.core.PersistentVector(null,2,(5),inst_39464,inst_39467,null));
var state_39499__$1 = state_39499;
return cljs.core.async.ioc_alts_BANG_.call(null,state_39499__$1,(14),inst_39468);
} else {
if((state_val_39500 === (9))){
var inst_39459 = (state_39499[(8)]);
var inst_39485 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_39486 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39459);
var inst_39487 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39486);
var inst_39488 = [cljs.core.str("Not loading: "),cljs.core.str(inst_39487)].join('');
var inst_39489 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_39488);
var state_39499__$1 = (function (){var statearr_39512 = state_39499;
(statearr_39512[(10)] = inst_39485);

return statearr_39512;
})();
var statearr_39513_39541 = state_39499__$1;
(statearr_39513_39541[(2)] = inst_39489);

(statearr_39513_39541[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39500 === (5))){
var inst_39452 = (state_39499[(7)]);
var inst_39454 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_39455 = (new cljs.core.PersistentArrayMap(null,2,inst_39454,null));
var inst_39456 = (new cljs.core.PersistentHashSet(null,inst_39455,null));
var inst_39457 = figwheel.client.focus_msgs.call(null,inst_39456,inst_39452);
var inst_39458 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_39457);
var inst_39459 = cljs.core.first.call(null,inst_39457);
var inst_39460 = figwheel.client.autoload_QMARK_.call(null);
var state_39499__$1 = (function (){var statearr_39514 = state_39499;
(statearr_39514[(8)] = inst_39459);

(statearr_39514[(9)] = inst_39458);

return statearr_39514;
})();
if(cljs.core.truth_(inst_39460)){
var statearr_39515_39542 = state_39499__$1;
(statearr_39515_39542[(1)] = (8));

} else {
var statearr_39516_39543 = state_39499__$1;
(statearr_39516_39543[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39500 === (14))){
var inst_39470 = (state_39499[(2)]);
var state_39499__$1 = state_39499;
var statearr_39517_39544 = state_39499__$1;
(statearr_39517_39544[(2)] = inst_39470);

(statearr_39517_39544[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39500 === (16))){
var state_39499__$1 = state_39499;
var statearr_39518_39545 = state_39499__$1;
(statearr_39518_39545[(2)] = null);

(statearr_39518_39545[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39500 === (10))){
var inst_39491 = (state_39499[(2)]);
var state_39499__$1 = (function (){var statearr_39519 = state_39499;
(statearr_39519[(11)] = inst_39491);

return statearr_39519;
})();
var statearr_39520_39546 = state_39499__$1;
(statearr_39520_39546[(2)] = null);

(statearr_39520_39546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39500 === (8))){
var inst_39458 = (state_39499[(9)]);
var inst_39462 = figwheel.client.reload_file_state_QMARK_.call(null,inst_39458,opts);
var state_39499__$1 = state_39499;
if(cljs.core.truth_(inst_39462)){
var statearr_39521_39547 = state_39499__$1;
(statearr_39521_39547[(1)] = (11));

} else {
var statearr_39522_39548 = state_39499__$1;
(statearr_39522_39548[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28434__auto___39530,ch))
;
return ((function (switch__28412__auto__,c__28434__auto___39530,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__28413__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__28413__auto____0 = (function (){
var statearr_39526 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39526[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__28413__auto__);

(statearr_39526[(1)] = (1));

return statearr_39526;
});
var figwheel$client$file_reloader_plugin_$_state_machine__28413__auto____1 = (function (state_39499){
while(true){
var ret_value__28414__auto__ = (function (){try{while(true){
var result__28415__auto__ = switch__28412__auto__.call(null,state_39499);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28415__auto__;
}
break;
}
}catch (e39527){if((e39527 instanceof Object)){
var ex__28416__auto__ = e39527;
var statearr_39528_39549 = state_39499;
(statearr_39528_39549[(5)] = ex__28416__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39499);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39527;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39550 = state_39499;
state_39499 = G__39550;
continue;
} else {
return ret_value__28414__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__28413__auto__ = function(state_39499){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__28413__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__28413__auto____1.call(this,state_39499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__28413__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__28413__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__28413__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__28413__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__28413__auto__;
})()
;})(switch__28412__auto__,c__28434__auto___39530,ch))
})();
var state__28436__auto__ = (function (){var statearr_39529 = f__28435__auto__.call(null);
(statearr_39529[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28434__auto___39530);

return statearr_39529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28436__auto__);
});})(c__28434__auto___39530,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__39551_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__39551_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_39554 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_39554){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e39553){if((e39553 instanceof Error)){
var e = e39553;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_39554], null));
} else {
var e = e39553;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_39554))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__39555){
var map__39564 = p__39555;
var map__39564__$1 = ((((!((map__39564 == null)))?((((map__39564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39564.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39564):map__39564);
var opts = map__39564__$1;
var build_id = cljs.core.get.call(null,map__39564__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__39564,map__39564__$1,opts,build_id){
return (function (p__39566){
var vec__39567 = p__39566;
var seq__39568 = cljs.core.seq.call(null,vec__39567);
var first__39569 = cljs.core.first.call(null,seq__39568);
var seq__39568__$1 = cljs.core.next.call(null,seq__39568);
var map__39570 = first__39569;
var map__39570__$1 = ((((!((map__39570 == null)))?((((map__39570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39570.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39570):map__39570);
var msg = map__39570__$1;
var msg_name = cljs.core.get.call(null,map__39570__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39568__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__39567,seq__39568,first__39569,seq__39568__$1,map__39570,map__39570__$1,msg,msg_name,_,map__39564,map__39564__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__39567,seq__39568,first__39569,seq__39568__$1,map__39570,map__39570__$1,msg,msg_name,_,map__39564,map__39564__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__39564,map__39564__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__39578){
var vec__39579 = p__39578;
var seq__39580 = cljs.core.seq.call(null,vec__39579);
var first__39581 = cljs.core.first.call(null,seq__39580);
var seq__39580__$1 = cljs.core.next.call(null,seq__39580);
var map__39582 = first__39581;
var map__39582__$1 = ((((!((map__39582 == null)))?((((map__39582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39582.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39582):map__39582);
var msg = map__39582__$1;
var msg_name = cljs.core.get.call(null,map__39582__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39580__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__39584){
var map__39596 = p__39584;
var map__39596__$1 = ((((!((map__39596 == null)))?((((map__39596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39596.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39596):map__39596);
var on_compile_warning = cljs.core.get.call(null,map__39596__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__39596__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__39596,map__39596__$1,on_compile_warning,on_compile_fail){
return (function (p__39598){
var vec__39599 = p__39598;
var seq__39600 = cljs.core.seq.call(null,vec__39599);
var first__39601 = cljs.core.first.call(null,seq__39600);
var seq__39600__$1 = cljs.core.next.call(null,seq__39600);
var map__39602 = first__39601;
var map__39602__$1 = ((((!((map__39602 == null)))?((((map__39602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39602.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39602):map__39602);
var msg = map__39602__$1;
var msg_name = cljs.core.get.call(null,map__39602__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39600__$1;
var pred__39604 = cljs.core._EQ_;
var expr__39605 = msg_name;
if(cljs.core.truth_(pred__39604.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__39605))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__39604.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__39605))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__39596,map__39596__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__28434__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28434__auto__,msg_hist,msg_names,msg){
return (function (){
var f__28435__auto__ = (function (){var switch__28412__auto__ = ((function (c__28434__auto__,msg_hist,msg_names,msg){
return (function (state_39813){
var state_val_39814 = (state_39813[(1)]);
if((state_val_39814 === (7))){
var inst_39741 = (state_39813[(2)]);
var state_39813__$1 = state_39813;
if(cljs.core.truth_(inst_39741)){
var statearr_39815_39861 = state_39813__$1;
(statearr_39815_39861[(1)] = (8));

} else {
var statearr_39816_39862 = state_39813__$1;
(statearr_39816_39862[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39814 === (20))){
var inst_39807 = (state_39813[(2)]);
var state_39813__$1 = state_39813;
var statearr_39817_39863 = state_39813__$1;
(statearr_39817_39863[(2)] = inst_39807);

(statearr_39817_39863[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39814 === (27))){
var inst_39803 = (state_39813[(2)]);
var state_39813__$1 = state_39813;
var statearr_39818_39864 = state_39813__$1;
(statearr_39818_39864[(2)] = inst_39803);

(statearr_39818_39864[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39814 === (1))){
var inst_39734 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_39813__$1 = state_39813;
if(cljs.core.truth_(inst_39734)){
var statearr_39819_39865 = state_39813__$1;
(statearr_39819_39865[(1)] = (2));

} else {
var statearr_39820_39866 = state_39813__$1;
(statearr_39820_39866[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39814 === (24))){
var inst_39805 = (state_39813[(2)]);
var state_39813__$1 = state_39813;
var statearr_39821_39867 = state_39813__$1;
(statearr_39821_39867[(2)] = inst_39805);

(statearr_39821_39867[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39814 === (4))){
var inst_39811 = (state_39813[(2)]);
var state_39813__$1 = state_39813;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39813__$1,inst_39811);
} else {
if((state_val_39814 === (15))){
var inst_39809 = (state_39813[(2)]);
var state_39813__$1 = state_39813;
var statearr_39822_39868 = state_39813__$1;
(statearr_39822_39868[(2)] = inst_39809);

(statearr_39822_39868[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39814 === (21))){
var inst_39768 = (state_39813[(2)]);
var state_39813__$1 = state_39813;
var statearr_39823_39869 = state_39813__$1;
(statearr_39823_39869[(2)] = inst_39768);

(statearr_39823_39869[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39814 === (31))){
var inst_39792 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_39813__$1 = state_39813;
if(cljs.core.truth_(inst_39792)){
var statearr_39824_39870 = state_39813__$1;
(statearr_39824_39870[(1)] = (34));

} else {
var statearr_39825_39871 = state_39813__$1;
(statearr_39825_39871[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39814 === (32))){
var inst_39801 = (state_39813[(2)]);
var state_39813__$1 = state_39813;
var statearr_39826_39872 = state_39813__$1;
(statearr_39826_39872[(2)] = inst_39801);

(statearr_39826_39872[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39814 === (33))){
var inst_39790 = (state_39813[(2)]);
var state_39813__$1 = state_39813;
var statearr_39827_39873 = state_39813__$1;
(statearr_39827_39873[(2)] = inst_39790);

(statearr_39827_39873[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39814 === (13))){
var inst_39755 = figwheel.client.heads_up.clear.call(null);
var state_39813__$1 = state_39813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39813__$1,(16),inst_39755);
} else {
if((state_val_39814 === (22))){
var inst_39772 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39773 = figwheel.client.heads_up.append_warning_message.call(null,inst_39772);
var state_39813__$1 = state_39813;
var statearr_39828_39874 = state_39813__$1;
(statearr_39828_39874[(2)] = inst_39773);

(statearr_39828_39874[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39814 === (36))){
var inst_39799 = (state_39813[(2)]);
var state_39813__$1 = state_39813;
var statearr_39829_39875 = state_39813__$1;
(statearr_39829_39875[(2)] = inst_39799);

(statearr_39829_39875[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39814 === (29))){
var inst_39783 = (state_39813[(2)]);
var state_39813__$1 = state_39813;
var statearr_39830_39876 = state_39813__$1;
(statearr_39830_39876[(2)] = inst_39783);

(statearr_39830_39876[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39814 === (6))){
var inst_39736 = (state_39813[(7)]);
var state_39813__$1 = state_39813;
var statearr_39831_39877 = state_39813__$1;
(statearr_39831_39877[(2)] = inst_39736);

(statearr_39831_39877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39814 === (28))){
var inst_39779 = (state_39813[(2)]);
var inst_39780 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39781 = figwheel.client.heads_up.display_warning.call(null,inst_39780);
var state_39813__$1 = (function (){var statearr_39832 = state_39813;
(statearr_39832[(8)] = inst_39779);

return statearr_39832;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39813__$1,(29),inst_39781);
} else {
if((state_val_39814 === (25))){
var inst_39777 = figwheel.client.heads_up.clear.call(null);
var state_39813__$1 = state_39813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39813__$1,(28),inst_39777);
} else {
if((state_val_39814 === (34))){
var inst_39794 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39813__$1 = state_39813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39813__$1,(37),inst_39794);
} else {
if((state_val_39814 === (17))){
var inst_39761 = (state_39813[(2)]);
var state_39813__$1 = state_39813;
var statearr_39833_39878 = state_39813__$1;
(statearr_39833_39878[(2)] = inst_39761);

(statearr_39833_39878[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39814 === (3))){
var inst_39753 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_39813__$1 = state_39813;
if(cljs.core.truth_(inst_39753)){
var statearr_39834_39879 = state_39813__$1;
(statearr_39834_39879[(1)] = (13));

} else {
var statearr_39835_39880 = state_39813__$1;
(statearr_39835_39880[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39814 === (12))){
var inst_39749 = (state_39813[(2)]);
var state_39813__$1 = state_39813;
var statearr_39836_39881 = state_39813__$1;
(statearr_39836_39881[(2)] = inst_39749);

(statearr_39836_39881[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39814 === (2))){
var inst_39736 = (state_39813[(7)]);
var inst_39736__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_39813__$1 = (function (){var statearr_39837 = state_39813;
(statearr_39837[(7)] = inst_39736__$1);

return statearr_39837;
})();
if(cljs.core.truth_(inst_39736__$1)){
var statearr_39838_39882 = state_39813__$1;
(statearr_39838_39882[(1)] = (5));

} else {
var statearr_39839_39883 = state_39813__$1;
(statearr_39839_39883[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39814 === (23))){
var inst_39775 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_39813__$1 = state_39813;
if(cljs.core.truth_(inst_39775)){
var statearr_39840_39884 = state_39813__$1;
(statearr_39840_39884[(1)] = (25));

} else {
var statearr_39841_39885 = state_39813__$1;
(statearr_39841_39885[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39814 === (35))){
var state_39813__$1 = state_39813;
var statearr_39842_39886 = state_39813__$1;
(statearr_39842_39886[(2)] = null);

(statearr_39842_39886[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39814 === (19))){
var inst_39770 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_39813__$1 = state_39813;
if(cljs.core.truth_(inst_39770)){
var statearr_39843_39887 = state_39813__$1;
(statearr_39843_39887[(1)] = (22));

} else {
var statearr_39844_39888 = state_39813__$1;
(statearr_39844_39888[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39814 === (11))){
var inst_39745 = (state_39813[(2)]);
var state_39813__$1 = state_39813;
var statearr_39845_39889 = state_39813__$1;
(statearr_39845_39889[(2)] = inst_39745);

(statearr_39845_39889[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39814 === (9))){
var inst_39747 = figwheel.client.heads_up.clear.call(null);
var state_39813__$1 = state_39813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39813__$1,(12),inst_39747);
} else {
if((state_val_39814 === (5))){
var inst_39738 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_39813__$1 = state_39813;
var statearr_39846_39890 = state_39813__$1;
(statearr_39846_39890[(2)] = inst_39738);

(statearr_39846_39890[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39814 === (14))){
var inst_39763 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_39813__$1 = state_39813;
if(cljs.core.truth_(inst_39763)){
var statearr_39847_39891 = state_39813__$1;
(statearr_39847_39891[(1)] = (18));

} else {
var statearr_39848_39892 = state_39813__$1;
(statearr_39848_39892[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39814 === (26))){
var inst_39785 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_39813__$1 = state_39813;
if(cljs.core.truth_(inst_39785)){
var statearr_39849_39893 = state_39813__$1;
(statearr_39849_39893[(1)] = (30));

} else {
var statearr_39850_39894 = state_39813__$1;
(statearr_39850_39894[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39814 === (16))){
var inst_39757 = (state_39813[(2)]);
var inst_39758 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39759 = figwheel.client.heads_up.display_exception.call(null,inst_39758);
var state_39813__$1 = (function (){var statearr_39851 = state_39813;
(statearr_39851[(9)] = inst_39757);

return statearr_39851;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39813__$1,(17),inst_39759);
} else {
if((state_val_39814 === (30))){
var inst_39787 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39788 = figwheel.client.heads_up.display_warning.call(null,inst_39787);
var state_39813__$1 = state_39813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39813__$1,(33),inst_39788);
} else {
if((state_val_39814 === (10))){
var inst_39751 = (state_39813[(2)]);
var state_39813__$1 = state_39813;
var statearr_39852_39895 = state_39813__$1;
(statearr_39852_39895[(2)] = inst_39751);

(statearr_39852_39895[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39814 === (18))){
var inst_39765 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39766 = figwheel.client.heads_up.display_exception.call(null,inst_39765);
var state_39813__$1 = state_39813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39813__$1,(21),inst_39766);
} else {
if((state_val_39814 === (37))){
var inst_39796 = (state_39813[(2)]);
var state_39813__$1 = state_39813;
var statearr_39853_39896 = state_39813__$1;
(statearr_39853_39896[(2)] = inst_39796);

(statearr_39853_39896[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39814 === (8))){
var inst_39743 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39813__$1 = state_39813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39813__$1,(11),inst_39743);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28434__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__28412__auto__,c__28434__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28413__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28413__auto____0 = (function (){
var statearr_39857 = [null,null,null,null,null,null,null,null,null,null];
(statearr_39857[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28413__auto__);

(statearr_39857[(1)] = (1));

return statearr_39857;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28413__auto____1 = (function (state_39813){
while(true){
var ret_value__28414__auto__ = (function (){try{while(true){
var result__28415__auto__ = switch__28412__auto__.call(null,state_39813);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28415__auto__;
}
break;
}
}catch (e39858){if((e39858 instanceof Object)){
var ex__28416__auto__ = e39858;
var statearr_39859_39897 = state_39813;
(statearr_39859_39897[(5)] = ex__28416__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39813);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39858;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39898 = state_39813;
state_39813 = G__39898;
continue;
} else {
return ret_value__28414__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28413__auto__ = function(state_39813){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28413__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28413__auto____1.call(this,state_39813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28413__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28413__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28413__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28413__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28413__auto__;
})()
;})(switch__28412__auto__,c__28434__auto__,msg_hist,msg_names,msg))
})();
var state__28436__auto__ = (function (){var statearr_39860 = f__28435__auto__.call(null);
(statearr_39860[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28434__auto__);

return statearr_39860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28436__auto__);
});})(c__28434__auto__,msg_hist,msg_names,msg))
);

return c__28434__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28434__auto___39961 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28434__auto___39961,ch){
return (function (){
var f__28435__auto__ = (function (){var switch__28412__auto__ = ((function (c__28434__auto___39961,ch){
return (function (state_39944){
var state_val_39945 = (state_39944[(1)]);
if((state_val_39945 === (1))){
var state_39944__$1 = state_39944;
var statearr_39946_39962 = state_39944__$1;
(statearr_39946_39962[(2)] = null);

(statearr_39946_39962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39945 === (2))){
var state_39944__$1 = state_39944;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39944__$1,(4),ch);
} else {
if((state_val_39945 === (3))){
var inst_39942 = (state_39944[(2)]);
var state_39944__$1 = state_39944;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39944__$1,inst_39942);
} else {
if((state_val_39945 === (4))){
var inst_39932 = (state_39944[(7)]);
var inst_39932__$1 = (state_39944[(2)]);
var state_39944__$1 = (function (){var statearr_39947 = state_39944;
(statearr_39947[(7)] = inst_39932__$1);

return statearr_39947;
})();
if(cljs.core.truth_(inst_39932__$1)){
var statearr_39948_39963 = state_39944__$1;
(statearr_39948_39963[(1)] = (5));

} else {
var statearr_39949_39964 = state_39944__$1;
(statearr_39949_39964[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39945 === (5))){
var inst_39932 = (state_39944[(7)]);
var inst_39934 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_39932);
var state_39944__$1 = state_39944;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39944__$1,(8),inst_39934);
} else {
if((state_val_39945 === (6))){
var state_39944__$1 = state_39944;
var statearr_39950_39965 = state_39944__$1;
(statearr_39950_39965[(2)] = null);

(statearr_39950_39965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39945 === (7))){
var inst_39940 = (state_39944[(2)]);
var state_39944__$1 = state_39944;
var statearr_39951_39966 = state_39944__$1;
(statearr_39951_39966[(2)] = inst_39940);

(statearr_39951_39966[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39945 === (8))){
var inst_39936 = (state_39944[(2)]);
var state_39944__$1 = (function (){var statearr_39952 = state_39944;
(statearr_39952[(8)] = inst_39936);

return statearr_39952;
})();
var statearr_39953_39967 = state_39944__$1;
(statearr_39953_39967[(2)] = null);

(statearr_39953_39967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__28434__auto___39961,ch))
;
return ((function (switch__28412__auto__,c__28434__auto___39961,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__28413__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__28413__auto____0 = (function (){
var statearr_39957 = [null,null,null,null,null,null,null,null,null];
(statearr_39957[(0)] = figwheel$client$heads_up_plugin_$_state_machine__28413__auto__);

(statearr_39957[(1)] = (1));

return statearr_39957;
});
var figwheel$client$heads_up_plugin_$_state_machine__28413__auto____1 = (function (state_39944){
while(true){
var ret_value__28414__auto__ = (function (){try{while(true){
var result__28415__auto__ = switch__28412__auto__.call(null,state_39944);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28415__auto__;
}
break;
}
}catch (e39958){if((e39958 instanceof Object)){
var ex__28416__auto__ = e39958;
var statearr_39959_39968 = state_39944;
(statearr_39959_39968[(5)] = ex__28416__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39944);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39958;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39969 = state_39944;
state_39944 = G__39969;
continue;
} else {
return ret_value__28414__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__28413__auto__ = function(state_39944){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__28413__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__28413__auto____1.call(this,state_39944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__28413__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__28413__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__28413__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__28413__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__28413__auto__;
})()
;})(switch__28412__auto__,c__28434__auto___39961,ch))
})();
var state__28436__auto__ = (function (){var statearr_39960 = f__28435__auto__.call(null);
(statearr_39960[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28434__auto___39961);

return statearr_39960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28436__auto__);
});})(c__28434__auto___39961,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28434__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28434__auto__){
return (function (){
var f__28435__auto__ = (function (){var switch__28412__auto__ = ((function (c__28434__auto__){
return (function (state_39990){
var state_val_39991 = (state_39990[(1)]);
if((state_val_39991 === (1))){
var inst_39985 = cljs.core.async.timeout.call(null,(3000));
var state_39990__$1 = state_39990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39990__$1,(2),inst_39985);
} else {
if((state_val_39991 === (2))){
var inst_39987 = (state_39990[(2)]);
var inst_39988 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_39990__$1 = (function (){var statearr_39992 = state_39990;
(statearr_39992[(7)] = inst_39987);

return statearr_39992;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39990__$1,inst_39988);
} else {
return null;
}
}
});})(c__28434__auto__))
;
return ((function (switch__28412__auto__,c__28434__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__28413__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__28413__auto____0 = (function (){
var statearr_39996 = [null,null,null,null,null,null,null,null];
(statearr_39996[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__28413__auto__);

(statearr_39996[(1)] = (1));

return statearr_39996;
});
var figwheel$client$enforce_project_plugin_$_state_machine__28413__auto____1 = (function (state_39990){
while(true){
var ret_value__28414__auto__ = (function (){try{while(true){
var result__28415__auto__ = switch__28412__auto__.call(null,state_39990);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28415__auto__;
}
break;
}
}catch (e39997){if((e39997 instanceof Object)){
var ex__28416__auto__ = e39997;
var statearr_39998_40000 = state_39990;
(statearr_39998_40000[(5)] = ex__28416__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39997;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40001 = state_39990;
state_39990 = G__40001;
continue;
} else {
return ret_value__28414__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__28413__auto__ = function(state_39990){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__28413__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__28413__auto____1.call(this,state_39990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__28413__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__28413__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__28413__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__28413__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__28413__auto__;
})()
;})(switch__28412__auto__,c__28434__auto__))
})();
var state__28436__auto__ = (function (){var statearr_39999 = f__28435__auto__.call(null);
(statearr_39999[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28434__auto__);

return statearr_39999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28436__auto__);
});})(c__28434__auto__))
);

return c__28434__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28434__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28434__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__28435__auto__ = (function (){var switch__28412__auto__ = ((function (c__28434__auto__,figwheel_version,temp__4657__auto__){
return (function (state_40024){
var state_val_40025 = (state_40024[(1)]);
if((state_val_40025 === (1))){
var inst_40018 = cljs.core.async.timeout.call(null,(2000));
var state_40024__$1 = state_40024;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40024__$1,(2),inst_40018);
} else {
if((state_val_40025 === (2))){
var inst_40020 = (state_40024[(2)]);
var inst_40021 = [cljs.core.str("Figwheel Client Version \""),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("\" is not equal to "),cljs.core.str("Figwheel Sidecar Version \""),cljs.core.str(figwheel_version),cljs.core.str("\""),cljs.core.str(".  Shutting down Websocket Connection!")].join('');
var inst_40022 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_40021);
var state_40024__$1 = (function (){var statearr_40026 = state_40024;
(statearr_40026[(7)] = inst_40020);

return statearr_40026;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40024__$1,inst_40022);
} else {
return null;
}
}
});})(c__28434__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__28412__auto__,c__28434__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28413__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28413__auto____0 = (function (){
var statearr_40030 = [null,null,null,null,null,null,null,null];
(statearr_40030[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28413__auto__);

(statearr_40030[(1)] = (1));

return statearr_40030;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28413__auto____1 = (function (state_40024){
while(true){
var ret_value__28414__auto__ = (function (){try{while(true){
var result__28415__auto__ = switch__28412__auto__.call(null,state_40024);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28415__auto__;
}
break;
}
}catch (e40031){if((e40031 instanceof Object)){
var ex__28416__auto__ = e40031;
var statearr_40032_40034 = state_40024;
(statearr_40032_40034[(5)] = ex__28416__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40024);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40031;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40035 = state_40024;
state_40024 = G__40035;
continue;
} else {
return ret_value__28414__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28413__auto__ = function(state_40024){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28413__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28413__auto____1.call(this,state_40024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28413__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28413__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28413__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28413__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28413__auto__;
})()
;})(switch__28412__auto__,c__28434__auto__,figwheel_version,temp__4657__auto__))
})();
var state__28436__auto__ = (function (){var statearr_40033 = f__28435__auto__.call(null);
(statearr_40033[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28434__auto__);

return statearr_40033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28436__auto__);
});})(c__28434__auto__,figwheel_version,temp__4657__auto__))
);

return c__28434__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__40036){
var map__40040 = p__40036;
var map__40040__$1 = ((((!((map__40040 == null)))?((((map__40040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40040.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40040):map__40040);
var file = cljs.core.get.call(null,map__40040__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__40040__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__40040__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__40042 = "";
var G__40042__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__40042),cljs.core.str("file "),cljs.core.str(file)].join(''):G__40042);
var G__40042__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__40042__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__40042__$1);
if(cljs.core.truth_((function (){var and__25962__auto__ = line;
if(cljs.core.truth_(and__25962__auto__)){
return column;
} else {
return and__25962__auto__;
}
})())){
return [cljs.core.str(G__40042__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__40042__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__40043){
var map__40050 = p__40043;
var map__40050__$1 = ((((!((map__40050 == null)))?((((map__40050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40050.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40050):map__40050);
var ed = map__40050__$1;
var formatted_exception = cljs.core.get.call(null,map__40050__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__40050__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__40050__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__40052_40056 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__40053_40057 = null;
var count__40054_40058 = (0);
var i__40055_40059 = (0);
while(true){
if((i__40055_40059 < count__40054_40058)){
var msg_40060 = cljs.core._nth.call(null,chunk__40053_40057,i__40055_40059);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_40060);

var G__40061 = seq__40052_40056;
var G__40062 = chunk__40053_40057;
var G__40063 = count__40054_40058;
var G__40064 = (i__40055_40059 + (1));
seq__40052_40056 = G__40061;
chunk__40053_40057 = G__40062;
count__40054_40058 = G__40063;
i__40055_40059 = G__40064;
continue;
} else {
var temp__4657__auto___40065 = cljs.core.seq.call(null,seq__40052_40056);
if(temp__4657__auto___40065){
var seq__40052_40066__$1 = temp__4657__auto___40065;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40052_40066__$1)){
var c__26788__auto___40067 = cljs.core.chunk_first.call(null,seq__40052_40066__$1);
var G__40068 = cljs.core.chunk_rest.call(null,seq__40052_40066__$1);
var G__40069 = c__26788__auto___40067;
var G__40070 = cljs.core.count.call(null,c__26788__auto___40067);
var G__40071 = (0);
seq__40052_40056 = G__40068;
chunk__40053_40057 = G__40069;
count__40054_40058 = G__40070;
i__40055_40059 = G__40071;
continue;
} else {
var msg_40072 = cljs.core.first.call(null,seq__40052_40066__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_40072);

var G__40073 = cljs.core.next.call(null,seq__40052_40066__$1);
var G__40074 = null;
var G__40075 = (0);
var G__40076 = (0);
seq__40052_40056 = G__40073;
chunk__40053_40057 = G__40074;
count__40054_40058 = G__40075;
i__40055_40059 = G__40076;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__40077){
var map__40080 = p__40077;
var map__40080__$1 = ((((!((map__40080 == null)))?((((map__40080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40080.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40080):map__40080);
var w = map__40080__$1;
var message = cljs.core.get.call(null,map__40080__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,323,323,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,315,315,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__25962__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__25962__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__25962__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__40092 = cljs.core.seq.call(null,plugins);
var chunk__40093 = null;
var count__40094 = (0);
var i__40095 = (0);
while(true){
if((i__40095 < count__40094)){
var vec__40096 = cljs.core._nth.call(null,chunk__40093,i__40095);
var k = cljs.core.nth.call(null,vec__40096,(0),null);
var plugin = cljs.core.nth.call(null,vec__40096,(1),null);
if(cljs.core.truth_(plugin)){
var pl_40102 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__40092,chunk__40093,count__40094,i__40095,pl_40102,vec__40096,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_40102.call(null,msg_hist);
});})(seq__40092,chunk__40093,count__40094,i__40095,pl_40102,vec__40096,k,plugin))
);
} else {
}

var G__40103 = seq__40092;
var G__40104 = chunk__40093;
var G__40105 = count__40094;
var G__40106 = (i__40095 + (1));
seq__40092 = G__40103;
chunk__40093 = G__40104;
count__40094 = G__40105;
i__40095 = G__40106;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__40092);
if(temp__4657__auto__){
var seq__40092__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40092__$1)){
var c__26788__auto__ = cljs.core.chunk_first.call(null,seq__40092__$1);
var G__40107 = cljs.core.chunk_rest.call(null,seq__40092__$1);
var G__40108 = c__26788__auto__;
var G__40109 = cljs.core.count.call(null,c__26788__auto__);
var G__40110 = (0);
seq__40092 = G__40107;
chunk__40093 = G__40108;
count__40094 = G__40109;
i__40095 = G__40110;
continue;
} else {
var vec__40099 = cljs.core.first.call(null,seq__40092__$1);
var k = cljs.core.nth.call(null,vec__40099,(0),null);
var plugin = cljs.core.nth.call(null,vec__40099,(1),null);
if(cljs.core.truth_(plugin)){
var pl_40111 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__40092,chunk__40093,count__40094,i__40095,pl_40111,vec__40099,k,plugin,seq__40092__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_40111.call(null,msg_hist);
});})(seq__40092,chunk__40093,count__40094,i__40095,pl_40111,vec__40099,k,plugin,seq__40092__$1,temp__4657__auto__))
);
} else {
}

var G__40112 = cljs.core.next.call(null,seq__40092__$1);
var G__40113 = null;
var G__40114 = (0);
var G__40115 = (0);
seq__40092 = G__40112;
chunk__40093 = G__40113;
count__40094 = G__40114;
i__40095 = G__40115;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args40116 = [];
var len__27082__auto___40123 = arguments.length;
var i__27083__auto___40124 = (0);
while(true){
if((i__27083__auto___40124 < len__27082__auto___40123)){
args40116.push((arguments[i__27083__auto___40124]));

var G__40125 = (i__27083__auto___40124 + (1));
i__27083__auto___40124 = G__40125;
continue;
} else {
}
break;
}

var G__40118 = args40116.length;
switch (G__40118) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40116.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__40119_40127 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__40120_40128 = null;
var count__40121_40129 = (0);
var i__40122_40130 = (0);
while(true){
if((i__40122_40130 < count__40121_40129)){
var msg_40131 = cljs.core._nth.call(null,chunk__40120_40128,i__40122_40130);
figwheel.client.socket.handle_incoming_message.call(null,msg_40131);

var G__40132 = seq__40119_40127;
var G__40133 = chunk__40120_40128;
var G__40134 = count__40121_40129;
var G__40135 = (i__40122_40130 + (1));
seq__40119_40127 = G__40132;
chunk__40120_40128 = G__40133;
count__40121_40129 = G__40134;
i__40122_40130 = G__40135;
continue;
} else {
var temp__4657__auto___40136 = cljs.core.seq.call(null,seq__40119_40127);
if(temp__4657__auto___40136){
var seq__40119_40137__$1 = temp__4657__auto___40136;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40119_40137__$1)){
var c__26788__auto___40138 = cljs.core.chunk_first.call(null,seq__40119_40137__$1);
var G__40139 = cljs.core.chunk_rest.call(null,seq__40119_40137__$1);
var G__40140 = c__26788__auto___40138;
var G__40141 = cljs.core.count.call(null,c__26788__auto___40138);
var G__40142 = (0);
seq__40119_40127 = G__40139;
chunk__40120_40128 = G__40140;
count__40121_40129 = G__40141;
i__40122_40130 = G__40142;
continue;
} else {
var msg_40143 = cljs.core.first.call(null,seq__40119_40137__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_40143);

var G__40144 = cljs.core.next.call(null,seq__40119_40137__$1);
var G__40145 = null;
var G__40146 = (0);
var G__40147 = (0);
seq__40119_40127 = G__40144;
chunk__40120_40128 = G__40145;
count__40121_40129 = G__40146;
i__40122_40130 = G__40147;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__27089__auto__ = [];
var len__27082__auto___40152 = arguments.length;
var i__27083__auto___40153 = (0);
while(true){
if((i__27083__auto___40153 < len__27082__auto___40152)){
args__27089__auto__.push((arguments[i__27083__auto___40153]));

var G__40154 = (i__27083__auto___40153 + (1));
i__27083__auto___40153 = G__40154;
continue;
} else {
}
break;
}

var argseq__27090__auto__ = ((((0) < args__27089__auto__.length))?(new cljs.core.IndexedSeq(args__27089__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__27090__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__40149){
var map__40150 = p__40149;
var map__40150__$1 = ((((!((map__40150 == null)))?((((map__40150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40150.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40150):map__40150);
var opts = map__40150__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq40148){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40148));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e40156){if((e40156 instanceof Error)){
var e = e40156;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e40156;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__40160){
var map__40161 = p__40160;
var map__40161__$1 = ((((!((map__40161 == null)))?((((map__40161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40161.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40161):map__40161);
var msg_name = cljs.core.get.call(null,map__40161__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1480126471554