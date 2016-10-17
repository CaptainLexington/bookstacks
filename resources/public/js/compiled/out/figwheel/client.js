// Compiled by ClojureScript 1.9.89 {}
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
var args39294 = [];
var len__26645__auto___39297 = arguments.length;
var i__26646__auto___39298 = (0);
while(true){
if((i__26646__auto___39298 < len__26645__auto___39297)){
args39294.push((arguments[i__26646__auto___39298]));

var G__39299 = (i__26646__auto___39298 + (1));
i__26646__auto___39298 = G__39299;
continue;
} else {
}
break;
}

var G__39296 = args39294.length;
switch (G__39296) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39294.length)].join('')));

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
var args__26652__auto__ = [];
var len__26645__auto___39302 = arguments.length;
var i__26646__auto___39303 = (0);
while(true){
if((i__26646__auto___39303 < len__26645__auto___39302)){
args__26652__auto__.push((arguments[i__26646__auto___39303]));

var G__39304 = (i__26646__auto___39303 + (1));
i__26646__auto___39303 = G__39304;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((0) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__26653__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq39301){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39301));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__26652__auto__ = [];
var len__26645__auto___39306 = arguments.length;
var i__26646__auto___39307 = (0);
while(true){
if((i__26646__auto___39307 < len__26645__auto___39306)){
args__26652__auto__.push((arguments[i__26646__auto___39307]));

var G__39308 = (i__26646__auto___39307 + (1));
i__26646__auto___39307 = G__39308;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((0) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__26653__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq39305){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39305));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__39309 = cljs.core._EQ_;
var expr__39310 = (function (){var or__25570__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e39313){if((e39313 instanceof Error)){
var e = e39313;
return false;
} else {
throw e39313;

}
}})();
if(cljs.core.truth_(or__25570__auto__)){
return or__25570__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__39309.call(null,"true",expr__39310))){
return true;
} else {
if(cljs.core.truth_(pred__39309.call(null,"false",expr__39310))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__39310)].join('')));
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
}catch (e39315){if((e39315 instanceof Error)){
var e = e39315;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e39315;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__39316){
var map__39319 = p__39316;
var map__39319__$1 = ((((!((map__39319 == null)))?((((map__39319.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39319.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39319):map__39319);
var message = cljs.core.get.call(null,map__39319__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__39319__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__25570__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__25570__auto__)){
return or__25570__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__25558__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__25558__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__25558__auto__;
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
var c__31929__auto___39481 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31929__auto___39481,ch){
return (function (){
var f__31930__auto__ = (function (){var switch__31817__auto__ = ((function (c__31929__auto___39481,ch){
return (function (state_39450){
var state_val_39451 = (state_39450[(1)]);
if((state_val_39451 === (7))){
var inst_39446 = (state_39450[(2)]);
var state_39450__$1 = state_39450;
var statearr_39452_39482 = state_39450__$1;
(statearr_39452_39482[(2)] = inst_39446);

(statearr_39452_39482[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39451 === (1))){
var state_39450__$1 = state_39450;
var statearr_39453_39483 = state_39450__$1;
(statearr_39453_39483[(2)] = null);

(statearr_39453_39483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39451 === (4))){
var inst_39403 = (state_39450[(7)]);
var inst_39403__$1 = (state_39450[(2)]);
var state_39450__$1 = (function (){var statearr_39454 = state_39450;
(statearr_39454[(7)] = inst_39403__$1);

return statearr_39454;
})();
if(cljs.core.truth_(inst_39403__$1)){
var statearr_39455_39484 = state_39450__$1;
(statearr_39455_39484[(1)] = (5));

} else {
var statearr_39456_39485 = state_39450__$1;
(statearr_39456_39485[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39451 === (15))){
var inst_39410 = (state_39450[(8)]);
var inst_39425 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39410);
var inst_39426 = cljs.core.first.call(null,inst_39425);
var inst_39427 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_39426);
var inst_39428 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_39427)].join('');
var inst_39429 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_39428);
var state_39450__$1 = state_39450;
var statearr_39457_39486 = state_39450__$1;
(statearr_39457_39486[(2)] = inst_39429);

(statearr_39457_39486[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39451 === (13))){
var inst_39434 = (state_39450[(2)]);
var state_39450__$1 = state_39450;
var statearr_39458_39487 = state_39450__$1;
(statearr_39458_39487[(2)] = inst_39434);

(statearr_39458_39487[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39451 === (6))){
var state_39450__$1 = state_39450;
var statearr_39459_39488 = state_39450__$1;
(statearr_39459_39488[(2)] = null);

(statearr_39459_39488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39451 === (17))){
var inst_39432 = (state_39450[(2)]);
var state_39450__$1 = state_39450;
var statearr_39460_39489 = state_39450__$1;
(statearr_39460_39489[(2)] = inst_39432);

(statearr_39460_39489[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39451 === (3))){
var inst_39448 = (state_39450[(2)]);
var state_39450__$1 = state_39450;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39450__$1,inst_39448);
} else {
if((state_val_39451 === (12))){
var inst_39409 = (state_39450[(9)]);
var inst_39423 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_39409,opts);
var state_39450__$1 = state_39450;
if(cljs.core.truth_(inst_39423)){
var statearr_39461_39490 = state_39450__$1;
(statearr_39461_39490[(1)] = (15));

} else {
var statearr_39462_39491 = state_39450__$1;
(statearr_39462_39491[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39451 === (2))){
var state_39450__$1 = state_39450;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39450__$1,(4),ch);
} else {
if((state_val_39451 === (11))){
var inst_39410 = (state_39450[(8)]);
var inst_39415 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39416 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_39410);
var inst_39417 = cljs.core.async.timeout.call(null,(1000));
var inst_39418 = [inst_39416,inst_39417];
var inst_39419 = (new cljs.core.PersistentVector(null,2,(5),inst_39415,inst_39418,null));
var state_39450__$1 = state_39450;
return cljs.core.async.ioc_alts_BANG_.call(null,state_39450__$1,(14),inst_39419);
} else {
if((state_val_39451 === (9))){
var inst_39410 = (state_39450[(8)]);
var inst_39436 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_39437 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39410);
var inst_39438 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39437);
var inst_39439 = [cljs.core.str("Not loading: "),cljs.core.str(inst_39438)].join('');
var inst_39440 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_39439);
var state_39450__$1 = (function (){var statearr_39463 = state_39450;
(statearr_39463[(10)] = inst_39436);

return statearr_39463;
})();
var statearr_39464_39492 = state_39450__$1;
(statearr_39464_39492[(2)] = inst_39440);

(statearr_39464_39492[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39451 === (5))){
var inst_39403 = (state_39450[(7)]);
var inst_39405 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_39406 = (new cljs.core.PersistentArrayMap(null,2,inst_39405,null));
var inst_39407 = (new cljs.core.PersistentHashSet(null,inst_39406,null));
var inst_39408 = figwheel.client.focus_msgs.call(null,inst_39407,inst_39403);
var inst_39409 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_39408);
var inst_39410 = cljs.core.first.call(null,inst_39408);
var inst_39411 = figwheel.client.autoload_QMARK_.call(null);
var state_39450__$1 = (function (){var statearr_39465 = state_39450;
(statearr_39465[(8)] = inst_39410);

(statearr_39465[(9)] = inst_39409);

return statearr_39465;
})();
if(cljs.core.truth_(inst_39411)){
var statearr_39466_39493 = state_39450__$1;
(statearr_39466_39493[(1)] = (8));

} else {
var statearr_39467_39494 = state_39450__$1;
(statearr_39467_39494[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39451 === (14))){
var inst_39421 = (state_39450[(2)]);
var state_39450__$1 = state_39450;
var statearr_39468_39495 = state_39450__$1;
(statearr_39468_39495[(2)] = inst_39421);

(statearr_39468_39495[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39451 === (16))){
var state_39450__$1 = state_39450;
var statearr_39469_39496 = state_39450__$1;
(statearr_39469_39496[(2)] = null);

(statearr_39469_39496[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39451 === (10))){
var inst_39442 = (state_39450[(2)]);
var state_39450__$1 = (function (){var statearr_39470 = state_39450;
(statearr_39470[(11)] = inst_39442);

return statearr_39470;
})();
var statearr_39471_39497 = state_39450__$1;
(statearr_39471_39497[(2)] = null);

(statearr_39471_39497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39451 === (8))){
var inst_39409 = (state_39450[(9)]);
var inst_39413 = figwheel.client.reload_file_state_QMARK_.call(null,inst_39409,opts);
var state_39450__$1 = state_39450;
if(cljs.core.truth_(inst_39413)){
var statearr_39472_39498 = state_39450__$1;
(statearr_39472_39498[(1)] = (11));

} else {
var statearr_39473_39499 = state_39450__$1;
(statearr_39473_39499[(1)] = (12));

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
});})(c__31929__auto___39481,ch))
;
return ((function (switch__31817__auto__,c__31929__auto___39481,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__31818__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__31818__auto____0 = (function (){
var statearr_39477 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39477[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__31818__auto__);

(statearr_39477[(1)] = (1));

return statearr_39477;
});
var figwheel$client$file_reloader_plugin_$_state_machine__31818__auto____1 = (function (state_39450){
while(true){
var ret_value__31819__auto__ = (function (){try{while(true){
var result__31820__auto__ = switch__31817__auto__.call(null,state_39450);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31820__auto__;
}
break;
}
}catch (e39478){if((e39478 instanceof Object)){
var ex__31821__auto__ = e39478;
var statearr_39479_39500 = state_39450;
(statearr_39479_39500[(5)] = ex__31821__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39450);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39478;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39501 = state_39450;
state_39450 = G__39501;
continue;
} else {
return ret_value__31819__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__31818__auto__ = function(state_39450){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__31818__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__31818__auto____1.call(this,state_39450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__31818__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__31818__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__31818__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__31818__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__31818__auto__;
})()
;})(switch__31817__auto__,c__31929__auto___39481,ch))
})();
var state__31931__auto__ = (function (){var statearr_39480 = f__31930__auto__.call(null);
(statearr_39480[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31929__auto___39481);

return statearr_39480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31931__auto__);
});})(c__31929__auto___39481,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__39502_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__39502_SHARP_));
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
var base_path_39505 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_39505){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e39504){if((e39504 instanceof Error)){
var e = e39504;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_39505], null));
} else {
var e = e39504;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_39505))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__39506){
var map__39515 = p__39506;
var map__39515__$1 = ((((!((map__39515 == null)))?((((map__39515.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39515.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39515):map__39515);
var opts = map__39515__$1;
var build_id = cljs.core.get.call(null,map__39515__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__39515,map__39515__$1,opts,build_id){
return (function (p__39517){
var vec__39518 = p__39517;
var seq__39519 = cljs.core.seq.call(null,vec__39518);
var first__39520 = cljs.core.first.call(null,seq__39519);
var seq__39519__$1 = cljs.core.next.call(null,seq__39519);
var map__39521 = first__39520;
var map__39521__$1 = ((((!((map__39521 == null)))?((((map__39521.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39521.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39521):map__39521);
var msg = map__39521__$1;
var msg_name = cljs.core.get.call(null,map__39521__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39519__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__39518,seq__39519,first__39520,seq__39519__$1,map__39521,map__39521__$1,msg,msg_name,_,map__39515,map__39515__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__39518,seq__39519,first__39520,seq__39519__$1,map__39521,map__39521__$1,msg,msg_name,_,map__39515,map__39515__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__39515,map__39515__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__39529){
var vec__39530 = p__39529;
var seq__39531 = cljs.core.seq.call(null,vec__39530);
var first__39532 = cljs.core.first.call(null,seq__39531);
var seq__39531__$1 = cljs.core.next.call(null,seq__39531);
var map__39533 = first__39532;
var map__39533__$1 = ((((!((map__39533 == null)))?((((map__39533.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39533.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39533):map__39533);
var msg = map__39533__$1;
var msg_name = cljs.core.get.call(null,map__39533__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39531__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__39535){
var map__39547 = p__39535;
var map__39547__$1 = ((((!((map__39547 == null)))?((((map__39547.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39547.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39547):map__39547);
var on_compile_warning = cljs.core.get.call(null,map__39547__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__39547__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__39547,map__39547__$1,on_compile_warning,on_compile_fail){
return (function (p__39549){
var vec__39550 = p__39549;
var seq__39551 = cljs.core.seq.call(null,vec__39550);
var first__39552 = cljs.core.first.call(null,seq__39551);
var seq__39551__$1 = cljs.core.next.call(null,seq__39551);
var map__39553 = first__39552;
var map__39553__$1 = ((((!((map__39553 == null)))?((((map__39553.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39553.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39553):map__39553);
var msg = map__39553__$1;
var msg_name = cljs.core.get.call(null,map__39553__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39551__$1;
var pred__39555 = cljs.core._EQ_;
var expr__39556 = msg_name;
if(cljs.core.truth_(pred__39555.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__39556))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__39555.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__39556))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__39547,map__39547__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__31929__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31929__auto__,msg_hist,msg_names,msg){
return (function (){
var f__31930__auto__ = (function (){var switch__31817__auto__ = ((function (c__31929__auto__,msg_hist,msg_names,msg){
return (function (state_39764){
var state_val_39765 = (state_39764[(1)]);
if((state_val_39765 === (7))){
var inst_39692 = (state_39764[(2)]);
var state_39764__$1 = state_39764;
if(cljs.core.truth_(inst_39692)){
var statearr_39766_39812 = state_39764__$1;
(statearr_39766_39812[(1)] = (8));

} else {
var statearr_39767_39813 = state_39764__$1;
(statearr_39767_39813[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39765 === (20))){
var inst_39758 = (state_39764[(2)]);
var state_39764__$1 = state_39764;
var statearr_39768_39814 = state_39764__$1;
(statearr_39768_39814[(2)] = inst_39758);

(statearr_39768_39814[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39765 === (27))){
var inst_39754 = (state_39764[(2)]);
var state_39764__$1 = state_39764;
var statearr_39769_39815 = state_39764__$1;
(statearr_39769_39815[(2)] = inst_39754);

(statearr_39769_39815[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39765 === (1))){
var inst_39685 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_39764__$1 = state_39764;
if(cljs.core.truth_(inst_39685)){
var statearr_39770_39816 = state_39764__$1;
(statearr_39770_39816[(1)] = (2));

} else {
var statearr_39771_39817 = state_39764__$1;
(statearr_39771_39817[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39765 === (24))){
var inst_39756 = (state_39764[(2)]);
var state_39764__$1 = state_39764;
var statearr_39772_39818 = state_39764__$1;
(statearr_39772_39818[(2)] = inst_39756);

(statearr_39772_39818[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39765 === (4))){
var inst_39762 = (state_39764[(2)]);
var state_39764__$1 = state_39764;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39764__$1,inst_39762);
} else {
if((state_val_39765 === (15))){
var inst_39760 = (state_39764[(2)]);
var state_39764__$1 = state_39764;
var statearr_39773_39819 = state_39764__$1;
(statearr_39773_39819[(2)] = inst_39760);

(statearr_39773_39819[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39765 === (21))){
var inst_39719 = (state_39764[(2)]);
var state_39764__$1 = state_39764;
var statearr_39774_39820 = state_39764__$1;
(statearr_39774_39820[(2)] = inst_39719);

(statearr_39774_39820[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39765 === (31))){
var inst_39743 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_39764__$1 = state_39764;
if(cljs.core.truth_(inst_39743)){
var statearr_39775_39821 = state_39764__$1;
(statearr_39775_39821[(1)] = (34));

} else {
var statearr_39776_39822 = state_39764__$1;
(statearr_39776_39822[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39765 === (32))){
var inst_39752 = (state_39764[(2)]);
var state_39764__$1 = state_39764;
var statearr_39777_39823 = state_39764__$1;
(statearr_39777_39823[(2)] = inst_39752);

(statearr_39777_39823[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39765 === (33))){
var inst_39741 = (state_39764[(2)]);
var state_39764__$1 = state_39764;
var statearr_39778_39824 = state_39764__$1;
(statearr_39778_39824[(2)] = inst_39741);

(statearr_39778_39824[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39765 === (13))){
var inst_39706 = figwheel.client.heads_up.clear.call(null);
var state_39764__$1 = state_39764;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39764__$1,(16),inst_39706);
} else {
if((state_val_39765 === (22))){
var inst_39723 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39724 = figwheel.client.heads_up.append_warning_message.call(null,inst_39723);
var state_39764__$1 = state_39764;
var statearr_39779_39825 = state_39764__$1;
(statearr_39779_39825[(2)] = inst_39724);

(statearr_39779_39825[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39765 === (36))){
var inst_39750 = (state_39764[(2)]);
var state_39764__$1 = state_39764;
var statearr_39780_39826 = state_39764__$1;
(statearr_39780_39826[(2)] = inst_39750);

(statearr_39780_39826[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39765 === (29))){
var inst_39734 = (state_39764[(2)]);
var state_39764__$1 = state_39764;
var statearr_39781_39827 = state_39764__$1;
(statearr_39781_39827[(2)] = inst_39734);

(statearr_39781_39827[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39765 === (6))){
var inst_39687 = (state_39764[(7)]);
var state_39764__$1 = state_39764;
var statearr_39782_39828 = state_39764__$1;
(statearr_39782_39828[(2)] = inst_39687);

(statearr_39782_39828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39765 === (28))){
var inst_39730 = (state_39764[(2)]);
var inst_39731 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39732 = figwheel.client.heads_up.display_warning.call(null,inst_39731);
var state_39764__$1 = (function (){var statearr_39783 = state_39764;
(statearr_39783[(8)] = inst_39730);

return statearr_39783;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39764__$1,(29),inst_39732);
} else {
if((state_val_39765 === (25))){
var inst_39728 = figwheel.client.heads_up.clear.call(null);
var state_39764__$1 = state_39764;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39764__$1,(28),inst_39728);
} else {
if((state_val_39765 === (34))){
var inst_39745 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39764__$1 = state_39764;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39764__$1,(37),inst_39745);
} else {
if((state_val_39765 === (17))){
var inst_39712 = (state_39764[(2)]);
var state_39764__$1 = state_39764;
var statearr_39784_39829 = state_39764__$1;
(statearr_39784_39829[(2)] = inst_39712);

(statearr_39784_39829[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39765 === (3))){
var inst_39704 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_39764__$1 = state_39764;
if(cljs.core.truth_(inst_39704)){
var statearr_39785_39830 = state_39764__$1;
(statearr_39785_39830[(1)] = (13));

} else {
var statearr_39786_39831 = state_39764__$1;
(statearr_39786_39831[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39765 === (12))){
var inst_39700 = (state_39764[(2)]);
var state_39764__$1 = state_39764;
var statearr_39787_39832 = state_39764__$1;
(statearr_39787_39832[(2)] = inst_39700);

(statearr_39787_39832[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39765 === (2))){
var inst_39687 = (state_39764[(7)]);
var inst_39687__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_39764__$1 = (function (){var statearr_39788 = state_39764;
(statearr_39788[(7)] = inst_39687__$1);

return statearr_39788;
})();
if(cljs.core.truth_(inst_39687__$1)){
var statearr_39789_39833 = state_39764__$1;
(statearr_39789_39833[(1)] = (5));

} else {
var statearr_39790_39834 = state_39764__$1;
(statearr_39790_39834[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39765 === (23))){
var inst_39726 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_39764__$1 = state_39764;
if(cljs.core.truth_(inst_39726)){
var statearr_39791_39835 = state_39764__$1;
(statearr_39791_39835[(1)] = (25));

} else {
var statearr_39792_39836 = state_39764__$1;
(statearr_39792_39836[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39765 === (35))){
var state_39764__$1 = state_39764;
var statearr_39793_39837 = state_39764__$1;
(statearr_39793_39837[(2)] = null);

(statearr_39793_39837[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39765 === (19))){
var inst_39721 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_39764__$1 = state_39764;
if(cljs.core.truth_(inst_39721)){
var statearr_39794_39838 = state_39764__$1;
(statearr_39794_39838[(1)] = (22));

} else {
var statearr_39795_39839 = state_39764__$1;
(statearr_39795_39839[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39765 === (11))){
var inst_39696 = (state_39764[(2)]);
var state_39764__$1 = state_39764;
var statearr_39796_39840 = state_39764__$1;
(statearr_39796_39840[(2)] = inst_39696);

(statearr_39796_39840[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39765 === (9))){
var inst_39698 = figwheel.client.heads_up.clear.call(null);
var state_39764__$1 = state_39764;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39764__$1,(12),inst_39698);
} else {
if((state_val_39765 === (5))){
var inst_39689 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_39764__$1 = state_39764;
var statearr_39797_39841 = state_39764__$1;
(statearr_39797_39841[(2)] = inst_39689);

(statearr_39797_39841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39765 === (14))){
var inst_39714 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_39764__$1 = state_39764;
if(cljs.core.truth_(inst_39714)){
var statearr_39798_39842 = state_39764__$1;
(statearr_39798_39842[(1)] = (18));

} else {
var statearr_39799_39843 = state_39764__$1;
(statearr_39799_39843[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39765 === (26))){
var inst_39736 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_39764__$1 = state_39764;
if(cljs.core.truth_(inst_39736)){
var statearr_39800_39844 = state_39764__$1;
(statearr_39800_39844[(1)] = (30));

} else {
var statearr_39801_39845 = state_39764__$1;
(statearr_39801_39845[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39765 === (16))){
var inst_39708 = (state_39764[(2)]);
var inst_39709 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39710 = figwheel.client.heads_up.display_exception.call(null,inst_39709);
var state_39764__$1 = (function (){var statearr_39802 = state_39764;
(statearr_39802[(9)] = inst_39708);

return statearr_39802;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39764__$1,(17),inst_39710);
} else {
if((state_val_39765 === (30))){
var inst_39738 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39739 = figwheel.client.heads_up.display_warning.call(null,inst_39738);
var state_39764__$1 = state_39764;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39764__$1,(33),inst_39739);
} else {
if((state_val_39765 === (10))){
var inst_39702 = (state_39764[(2)]);
var state_39764__$1 = state_39764;
var statearr_39803_39846 = state_39764__$1;
(statearr_39803_39846[(2)] = inst_39702);

(statearr_39803_39846[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39765 === (18))){
var inst_39716 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39717 = figwheel.client.heads_up.display_exception.call(null,inst_39716);
var state_39764__$1 = state_39764;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39764__$1,(21),inst_39717);
} else {
if((state_val_39765 === (37))){
var inst_39747 = (state_39764[(2)]);
var state_39764__$1 = state_39764;
var statearr_39804_39847 = state_39764__$1;
(statearr_39804_39847[(2)] = inst_39747);

(statearr_39804_39847[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39765 === (8))){
var inst_39694 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39764__$1 = state_39764;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39764__$1,(11),inst_39694);
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
});})(c__31929__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__31817__auto__,c__31929__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31818__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31818__auto____0 = (function (){
var statearr_39808 = [null,null,null,null,null,null,null,null,null,null];
(statearr_39808[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31818__auto__);

(statearr_39808[(1)] = (1));

return statearr_39808;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31818__auto____1 = (function (state_39764){
while(true){
var ret_value__31819__auto__ = (function (){try{while(true){
var result__31820__auto__ = switch__31817__auto__.call(null,state_39764);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31820__auto__;
}
break;
}
}catch (e39809){if((e39809 instanceof Object)){
var ex__31821__auto__ = e39809;
var statearr_39810_39848 = state_39764;
(statearr_39810_39848[(5)] = ex__31821__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39764);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39809;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39849 = state_39764;
state_39764 = G__39849;
continue;
} else {
return ret_value__31819__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31818__auto__ = function(state_39764){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31818__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31818__auto____1.call(this,state_39764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31818__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31818__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31818__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31818__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31818__auto__;
})()
;})(switch__31817__auto__,c__31929__auto__,msg_hist,msg_names,msg))
})();
var state__31931__auto__ = (function (){var statearr_39811 = f__31930__auto__.call(null);
(statearr_39811[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31929__auto__);

return statearr_39811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31931__auto__);
});})(c__31929__auto__,msg_hist,msg_names,msg))
);

return c__31929__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__31929__auto___39912 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31929__auto___39912,ch){
return (function (){
var f__31930__auto__ = (function (){var switch__31817__auto__ = ((function (c__31929__auto___39912,ch){
return (function (state_39895){
var state_val_39896 = (state_39895[(1)]);
if((state_val_39896 === (1))){
var state_39895__$1 = state_39895;
var statearr_39897_39913 = state_39895__$1;
(statearr_39897_39913[(2)] = null);

(statearr_39897_39913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39896 === (2))){
var state_39895__$1 = state_39895;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39895__$1,(4),ch);
} else {
if((state_val_39896 === (3))){
var inst_39893 = (state_39895[(2)]);
var state_39895__$1 = state_39895;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39895__$1,inst_39893);
} else {
if((state_val_39896 === (4))){
var inst_39883 = (state_39895[(7)]);
var inst_39883__$1 = (state_39895[(2)]);
var state_39895__$1 = (function (){var statearr_39898 = state_39895;
(statearr_39898[(7)] = inst_39883__$1);

return statearr_39898;
})();
if(cljs.core.truth_(inst_39883__$1)){
var statearr_39899_39914 = state_39895__$1;
(statearr_39899_39914[(1)] = (5));

} else {
var statearr_39900_39915 = state_39895__$1;
(statearr_39900_39915[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39896 === (5))){
var inst_39883 = (state_39895[(7)]);
var inst_39885 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_39883);
var state_39895__$1 = state_39895;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39895__$1,(8),inst_39885);
} else {
if((state_val_39896 === (6))){
var state_39895__$1 = state_39895;
var statearr_39901_39916 = state_39895__$1;
(statearr_39901_39916[(2)] = null);

(statearr_39901_39916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39896 === (7))){
var inst_39891 = (state_39895[(2)]);
var state_39895__$1 = state_39895;
var statearr_39902_39917 = state_39895__$1;
(statearr_39902_39917[(2)] = inst_39891);

(statearr_39902_39917[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39896 === (8))){
var inst_39887 = (state_39895[(2)]);
var state_39895__$1 = (function (){var statearr_39903 = state_39895;
(statearr_39903[(8)] = inst_39887);

return statearr_39903;
})();
var statearr_39904_39918 = state_39895__$1;
(statearr_39904_39918[(2)] = null);

(statearr_39904_39918[(1)] = (2));


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
});})(c__31929__auto___39912,ch))
;
return ((function (switch__31817__auto__,c__31929__auto___39912,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__31818__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__31818__auto____0 = (function (){
var statearr_39908 = [null,null,null,null,null,null,null,null,null];
(statearr_39908[(0)] = figwheel$client$heads_up_plugin_$_state_machine__31818__auto__);

(statearr_39908[(1)] = (1));

return statearr_39908;
});
var figwheel$client$heads_up_plugin_$_state_machine__31818__auto____1 = (function (state_39895){
while(true){
var ret_value__31819__auto__ = (function (){try{while(true){
var result__31820__auto__ = switch__31817__auto__.call(null,state_39895);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31820__auto__;
}
break;
}
}catch (e39909){if((e39909 instanceof Object)){
var ex__31821__auto__ = e39909;
var statearr_39910_39919 = state_39895;
(statearr_39910_39919[(5)] = ex__31821__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39895);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39909;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39920 = state_39895;
state_39895 = G__39920;
continue;
} else {
return ret_value__31819__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__31818__auto__ = function(state_39895){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__31818__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__31818__auto____1.call(this,state_39895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__31818__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__31818__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__31818__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__31818__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__31818__auto__;
})()
;})(switch__31817__auto__,c__31929__auto___39912,ch))
})();
var state__31931__auto__ = (function (){var statearr_39911 = f__31930__auto__.call(null);
(statearr_39911[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31929__auto___39912);

return statearr_39911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31931__auto__);
});})(c__31929__auto___39912,ch))
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
var c__31929__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31929__auto__){
return (function (){
var f__31930__auto__ = (function (){var switch__31817__auto__ = ((function (c__31929__auto__){
return (function (state_39941){
var state_val_39942 = (state_39941[(1)]);
if((state_val_39942 === (1))){
var inst_39936 = cljs.core.async.timeout.call(null,(3000));
var state_39941__$1 = state_39941;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39941__$1,(2),inst_39936);
} else {
if((state_val_39942 === (2))){
var inst_39938 = (state_39941[(2)]);
var inst_39939 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_39941__$1 = (function (){var statearr_39943 = state_39941;
(statearr_39943[(7)] = inst_39938);

return statearr_39943;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39941__$1,inst_39939);
} else {
return null;
}
}
});})(c__31929__auto__))
;
return ((function (switch__31817__auto__,c__31929__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__31818__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__31818__auto____0 = (function (){
var statearr_39947 = [null,null,null,null,null,null,null,null];
(statearr_39947[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__31818__auto__);

(statearr_39947[(1)] = (1));

return statearr_39947;
});
var figwheel$client$enforce_project_plugin_$_state_machine__31818__auto____1 = (function (state_39941){
while(true){
var ret_value__31819__auto__ = (function (){try{while(true){
var result__31820__auto__ = switch__31817__auto__.call(null,state_39941);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31820__auto__;
}
break;
}
}catch (e39948){if((e39948 instanceof Object)){
var ex__31821__auto__ = e39948;
var statearr_39949_39951 = state_39941;
(statearr_39949_39951[(5)] = ex__31821__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39941);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39948;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39952 = state_39941;
state_39941 = G__39952;
continue;
} else {
return ret_value__31819__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__31818__auto__ = function(state_39941){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__31818__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__31818__auto____1.call(this,state_39941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__31818__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__31818__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__31818__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__31818__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__31818__auto__;
})()
;})(switch__31817__auto__,c__31929__auto__))
})();
var state__31931__auto__ = (function (){var statearr_39950 = f__31930__auto__.call(null);
(statearr_39950[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31929__auto__);

return statearr_39950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31931__auto__);
});})(c__31929__auto__))
);

return c__31929__auto__;
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
var c__31929__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31929__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__31930__auto__ = (function (){var switch__31817__auto__ = ((function (c__31929__auto__,figwheel_version,temp__4657__auto__){
return (function (state_39975){
var state_val_39976 = (state_39975[(1)]);
if((state_val_39976 === (1))){
var inst_39969 = cljs.core.async.timeout.call(null,(2000));
var state_39975__$1 = state_39975;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39975__$1,(2),inst_39969);
} else {
if((state_val_39976 === (2))){
var inst_39971 = (state_39975[(2)]);
var inst_39972 = [cljs.core.str("Figwheel Client Version \""),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("\" is not equal to "),cljs.core.str("Figwheel Sidecar Version \""),cljs.core.str(figwheel_version),cljs.core.str("\""),cljs.core.str(".  Shutting down Websocket Connection!")].join('');
var inst_39973 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_39972);
var state_39975__$1 = (function (){var statearr_39977 = state_39975;
(statearr_39977[(7)] = inst_39971);

return statearr_39977;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39975__$1,inst_39973);
} else {
return null;
}
}
});})(c__31929__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__31817__auto__,c__31929__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31818__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31818__auto____0 = (function (){
var statearr_39981 = [null,null,null,null,null,null,null,null];
(statearr_39981[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31818__auto__);

(statearr_39981[(1)] = (1));

return statearr_39981;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31818__auto____1 = (function (state_39975){
while(true){
var ret_value__31819__auto__ = (function (){try{while(true){
var result__31820__auto__ = switch__31817__auto__.call(null,state_39975);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31820__auto__;
}
break;
}
}catch (e39982){if((e39982 instanceof Object)){
var ex__31821__auto__ = e39982;
var statearr_39983_39985 = state_39975;
(statearr_39983_39985[(5)] = ex__31821__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39975);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39982;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39986 = state_39975;
state_39975 = G__39986;
continue;
} else {
return ret_value__31819__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31818__auto__ = function(state_39975){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31818__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31818__auto____1.call(this,state_39975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31818__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31818__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31818__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31818__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31818__auto__;
})()
;})(switch__31817__auto__,c__31929__auto__,figwheel_version,temp__4657__auto__))
})();
var state__31931__auto__ = (function (){var statearr_39984 = f__31930__auto__.call(null);
(statearr_39984[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31929__auto__);

return statearr_39984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31931__auto__);
});})(c__31929__auto__,figwheel_version,temp__4657__auto__))
);

return c__31929__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__39987){
var map__39991 = p__39987;
var map__39991__$1 = ((((!((map__39991 == null)))?((((map__39991.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39991.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39991):map__39991);
var file = cljs.core.get.call(null,map__39991__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__39991__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__39991__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__39993 = "";
var G__39993__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__39993),cljs.core.str("file "),cljs.core.str(file)].join(''):G__39993);
var G__39993__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__39993__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__39993__$1);
if(cljs.core.truth_((function (){var and__25558__auto__ = line;
if(cljs.core.truth_(and__25558__auto__)){
return column;
} else {
return and__25558__auto__;
}
})())){
return [cljs.core.str(G__39993__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__39993__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__39994){
var map__40001 = p__39994;
var map__40001__$1 = ((((!((map__40001 == null)))?((((map__40001.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40001.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40001):map__40001);
var ed = map__40001__$1;
var formatted_exception = cljs.core.get.call(null,map__40001__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__40001__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__40001__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__40003_40007 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__40004_40008 = null;
var count__40005_40009 = (0);
var i__40006_40010 = (0);
while(true){
if((i__40006_40010 < count__40005_40009)){
var msg_40011 = cljs.core._nth.call(null,chunk__40004_40008,i__40006_40010);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_40011);

var G__40012 = seq__40003_40007;
var G__40013 = chunk__40004_40008;
var G__40014 = count__40005_40009;
var G__40015 = (i__40006_40010 + (1));
seq__40003_40007 = G__40012;
chunk__40004_40008 = G__40013;
count__40005_40009 = G__40014;
i__40006_40010 = G__40015;
continue;
} else {
var temp__4657__auto___40016 = cljs.core.seq.call(null,seq__40003_40007);
if(temp__4657__auto___40016){
var seq__40003_40017__$1 = temp__4657__auto___40016;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40003_40017__$1)){
var c__26381__auto___40018 = cljs.core.chunk_first.call(null,seq__40003_40017__$1);
var G__40019 = cljs.core.chunk_rest.call(null,seq__40003_40017__$1);
var G__40020 = c__26381__auto___40018;
var G__40021 = cljs.core.count.call(null,c__26381__auto___40018);
var G__40022 = (0);
seq__40003_40007 = G__40019;
chunk__40004_40008 = G__40020;
count__40005_40009 = G__40021;
i__40006_40010 = G__40022;
continue;
} else {
var msg_40023 = cljs.core.first.call(null,seq__40003_40017__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_40023);

var G__40024 = cljs.core.next.call(null,seq__40003_40017__$1);
var G__40025 = null;
var G__40026 = (0);
var G__40027 = (0);
seq__40003_40007 = G__40024;
chunk__40004_40008 = G__40025;
count__40005_40009 = G__40026;
i__40006_40010 = G__40027;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__40028){
var map__40031 = p__40028;
var map__40031__$1 = ((((!((map__40031 == null)))?((((map__40031.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40031.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40031):map__40031);
var w = map__40031__$1;
var message = cljs.core.get.call(null,map__40031__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__25558__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__25558__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__25558__auto__;
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
var seq__40043 = cljs.core.seq.call(null,plugins);
var chunk__40044 = null;
var count__40045 = (0);
var i__40046 = (0);
while(true){
if((i__40046 < count__40045)){
var vec__40047 = cljs.core._nth.call(null,chunk__40044,i__40046);
var k = cljs.core.nth.call(null,vec__40047,(0),null);
var plugin = cljs.core.nth.call(null,vec__40047,(1),null);
if(cljs.core.truth_(plugin)){
var pl_40053 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__40043,chunk__40044,count__40045,i__40046,pl_40053,vec__40047,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_40053.call(null,msg_hist);
});})(seq__40043,chunk__40044,count__40045,i__40046,pl_40053,vec__40047,k,plugin))
);
} else {
}

var G__40054 = seq__40043;
var G__40055 = chunk__40044;
var G__40056 = count__40045;
var G__40057 = (i__40046 + (1));
seq__40043 = G__40054;
chunk__40044 = G__40055;
count__40045 = G__40056;
i__40046 = G__40057;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__40043);
if(temp__4657__auto__){
var seq__40043__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40043__$1)){
var c__26381__auto__ = cljs.core.chunk_first.call(null,seq__40043__$1);
var G__40058 = cljs.core.chunk_rest.call(null,seq__40043__$1);
var G__40059 = c__26381__auto__;
var G__40060 = cljs.core.count.call(null,c__26381__auto__);
var G__40061 = (0);
seq__40043 = G__40058;
chunk__40044 = G__40059;
count__40045 = G__40060;
i__40046 = G__40061;
continue;
} else {
var vec__40050 = cljs.core.first.call(null,seq__40043__$1);
var k = cljs.core.nth.call(null,vec__40050,(0),null);
var plugin = cljs.core.nth.call(null,vec__40050,(1),null);
if(cljs.core.truth_(plugin)){
var pl_40062 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__40043,chunk__40044,count__40045,i__40046,pl_40062,vec__40050,k,plugin,seq__40043__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_40062.call(null,msg_hist);
});})(seq__40043,chunk__40044,count__40045,i__40046,pl_40062,vec__40050,k,plugin,seq__40043__$1,temp__4657__auto__))
);
} else {
}

var G__40063 = cljs.core.next.call(null,seq__40043__$1);
var G__40064 = null;
var G__40065 = (0);
var G__40066 = (0);
seq__40043 = G__40063;
chunk__40044 = G__40064;
count__40045 = G__40065;
i__40046 = G__40066;
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
var args40067 = [];
var len__26645__auto___40074 = arguments.length;
var i__26646__auto___40075 = (0);
while(true){
if((i__26646__auto___40075 < len__26645__auto___40074)){
args40067.push((arguments[i__26646__auto___40075]));

var G__40076 = (i__26646__auto___40075 + (1));
i__26646__auto___40075 = G__40076;
continue;
} else {
}
break;
}

var G__40069 = args40067.length;
switch (G__40069) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40067.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__40070_40078 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__40071_40079 = null;
var count__40072_40080 = (0);
var i__40073_40081 = (0);
while(true){
if((i__40073_40081 < count__40072_40080)){
var msg_40082 = cljs.core._nth.call(null,chunk__40071_40079,i__40073_40081);
figwheel.client.socket.handle_incoming_message.call(null,msg_40082);

var G__40083 = seq__40070_40078;
var G__40084 = chunk__40071_40079;
var G__40085 = count__40072_40080;
var G__40086 = (i__40073_40081 + (1));
seq__40070_40078 = G__40083;
chunk__40071_40079 = G__40084;
count__40072_40080 = G__40085;
i__40073_40081 = G__40086;
continue;
} else {
var temp__4657__auto___40087 = cljs.core.seq.call(null,seq__40070_40078);
if(temp__4657__auto___40087){
var seq__40070_40088__$1 = temp__4657__auto___40087;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40070_40088__$1)){
var c__26381__auto___40089 = cljs.core.chunk_first.call(null,seq__40070_40088__$1);
var G__40090 = cljs.core.chunk_rest.call(null,seq__40070_40088__$1);
var G__40091 = c__26381__auto___40089;
var G__40092 = cljs.core.count.call(null,c__26381__auto___40089);
var G__40093 = (0);
seq__40070_40078 = G__40090;
chunk__40071_40079 = G__40091;
count__40072_40080 = G__40092;
i__40073_40081 = G__40093;
continue;
} else {
var msg_40094 = cljs.core.first.call(null,seq__40070_40088__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_40094);

var G__40095 = cljs.core.next.call(null,seq__40070_40088__$1);
var G__40096 = null;
var G__40097 = (0);
var G__40098 = (0);
seq__40070_40078 = G__40095;
chunk__40071_40079 = G__40096;
count__40072_40080 = G__40097;
i__40073_40081 = G__40098;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__26652__auto__ = [];
var len__26645__auto___40103 = arguments.length;
var i__26646__auto___40104 = (0);
while(true){
if((i__26646__auto___40104 < len__26645__auto___40103)){
args__26652__auto__.push((arguments[i__26646__auto___40104]));

var G__40105 = (i__26646__auto___40104 + (1));
i__26646__auto___40104 = G__40105;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((0) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__26653__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__40100){
var map__40101 = p__40100;
var map__40101__$1 = ((((!((map__40101 == null)))?((((map__40101.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40101.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40101):map__40101);
var opts = map__40101__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq40099){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40099));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e40107){if((e40107 instanceof Error)){
var e = e40107;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e40107;

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
return (function (p__40111){
var map__40112 = p__40111;
var map__40112__$1 = ((((!((map__40112 == null)))?((((map__40112.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40112.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40112):map__40112);
var msg_name = cljs.core.get.call(null,map__40112__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1476657536757