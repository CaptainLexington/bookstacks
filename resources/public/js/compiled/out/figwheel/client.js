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
var args39188 = [];
var len__26651__auto___39191 = arguments.length;
var i__26652__auto___39192 = (0);
while(true){
if((i__26652__auto___39192 < len__26651__auto___39191)){
args39188.push((arguments[i__26652__auto___39192]));

var G__39193 = (i__26652__auto___39192 + (1));
i__26652__auto___39192 = G__39193;
continue;
} else {
}
break;
}

var G__39190 = args39188.length;
switch (G__39190) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39188.length)].join('')));

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
var args__26658__auto__ = [];
var len__26651__auto___39196 = arguments.length;
var i__26652__auto___39197 = (0);
while(true){
if((i__26652__auto___39197 < len__26651__auto___39196)){
args__26658__auto__.push((arguments[i__26652__auto___39197]));

var G__39198 = (i__26652__auto___39197 + (1));
i__26652__auto___39197 = G__39198;
continue;
} else {
}
break;
}

var argseq__26659__auto__ = ((((0) < args__26658__auto__.length))?(new cljs.core.IndexedSeq(args__26658__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__26659__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq39195){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39195));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__26658__auto__ = [];
var len__26651__auto___39200 = arguments.length;
var i__26652__auto___39201 = (0);
while(true){
if((i__26652__auto___39201 < len__26651__auto___39200)){
args__26658__auto__.push((arguments[i__26652__auto___39201]));

var G__39202 = (i__26652__auto___39201 + (1));
i__26652__auto___39201 = G__39202;
continue;
} else {
}
break;
}

var argseq__26659__auto__ = ((((0) < args__26658__auto__.length))?(new cljs.core.IndexedSeq(args__26658__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__26659__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq39199){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39199));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__39203 = cljs.core._EQ_;
var expr__39204 = (function (){var or__25576__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e39207){if((e39207 instanceof Error)){
var e = e39207;
return false;
} else {
throw e39207;

}
}})();
if(cljs.core.truth_(or__25576__auto__)){
return or__25576__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__39203.call(null,"true",expr__39204))){
return true;
} else {
if(cljs.core.truth_(pred__39203.call(null,"false",expr__39204))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__39204)].join('')));
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
}catch (e39209){if((e39209 instanceof Error)){
var e = e39209;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e39209;

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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__39210){
var map__39213 = p__39210;
var map__39213__$1 = ((((!((map__39213 == null)))?((((map__39213.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39213.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39213):map__39213);
var message = cljs.core.get.call(null,map__39213__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__39213__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__25576__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__25576__auto__)){
return or__25576__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__25564__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__25564__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__25564__auto__;
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
var c__28307__auto___39375 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28307__auto___39375,ch){
return (function (){
var f__28308__auto__ = (function (){var switch__28286__auto__ = ((function (c__28307__auto___39375,ch){
return (function (state_39344){
var state_val_39345 = (state_39344[(1)]);
if((state_val_39345 === (7))){
var inst_39340 = (state_39344[(2)]);
var state_39344__$1 = state_39344;
var statearr_39346_39376 = state_39344__$1;
(statearr_39346_39376[(2)] = inst_39340);

(statearr_39346_39376[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39345 === (1))){
var state_39344__$1 = state_39344;
var statearr_39347_39377 = state_39344__$1;
(statearr_39347_39377[(2)] = null);

(statearr_39347_39377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39345 === (4))){
var inst_39297 = (state_39344[(7)]);
var inst_39297__$1 = (state_39344[(2)]);
var state_39344__$1 = (function (){var statearr_39348 = state_39344;
(statearr_39348[(7)] = inst_39297__$1);

return statearr_39348;
})();
if(cljs.core.truth_(inst_39297__$1)){
var statearr_39349_39378 = state_39344__$1;
(statearr_39349_39378[(1)] = (5));

} else {
var statearr_39350_39379 = state_39344__$1;
(statearr_39350_39379[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39345 === (15))){
var inst_39304 = (state_39344[(8)]);
var inst_39319 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39304);
var inst_39320 = cljs.core.first.call(null,inst_39319);
var inst_39321 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_39320);
var inst_39322 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_39321)].join('');
var inst_39323 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_39322);
var state_39344__$1 = state_39344;
var statearr_39351_39380 = state_39344__$1;
(statearr_39351_39380[(2)] = inst_39323);

(statearr_39351_39380[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39345 === (13))){
var inst_39328 = (state_39344[(2)]);
var state_39344__$1 = state_39344;
var statearr_39352_39381 = state_39344__$1;
(statearr_39352_39381[(2)] = inst_39328);

(statearr_39352_39381[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39345 === (6))){
var state_39344__$1 = state_39344;
var statearr_39353_39382 = state_39344__$1;
(statearr_39353_39382[(2)] = null);

(statearr_39353_39382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39345 === (17))){
var inst_39326 = (state_39344[(2)]);
var state_39344__$1 = state_39344;
var statearr_39354_39383 = state_39344__$1;
(statearr_39354_39383[(2)] = inst_39326);

(statearr_39354_39383[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39345 === (3))){
var inst_39342 = (state_39344[(2)]);
var state_39344__$1 = state_39344;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39344__$1,inst_39342);
} else {
if((state_val_39345 === (12))){
var inst_39303 = (state_39344[(9)]);
var inst_39317 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_39303,opts);
var state_39344__$1 = state_39344;
if(cljs.core.truth_(inst_39317)){
var statearr_39355_39384 = state_39344__$1;
(statearr_39355_39384[(1)] = (15));

} else {
var statearr_39356_39385 = state_39344__$1;
(statearr_39356_39385[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39345 === (2))){
var state_39344__$1 = state_39344;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39344__$1,(4),ch);
} else {
if((state_val_39345 === (11))){
var inst_39304 = (state_39344[(8)]);
var inst_39309 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39310 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_39304);
var inst_39311 = cljs.core.async.timeout.call(null,(1000));
var inst_39312 = [inst_39310,inst_39311];
var inst_39313 = (new cljs.core.PersistentVector(null,2,(5),inst_39309,inst_39312,null));
var state_39344__$1 = state_39344;
return cljs.core.async.ioc_alts_BANG_.call(null,state_39344__$1,(14),inst_39313);
} else {
if((state_val_39345 === (9))){
var inst_39304 = (state_39344[(8)]);
var inst_39330 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_39331 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39304);
var inst_39332 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39331);
var inst_39333 = [cljs.core.str("Not loading: "),cljs.core.str(inst_39332)].join('');
var inst_39334 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_39333);
var state_39344__$1 = (function (){var statearr_39357 = state_39344;
(statearr_39357[(10)] = inst_39330);

return statearr_39357;
})();
var statearr_39358_39386 = state_39344__$1;
(statearr_39358_39386[(2)] = inst_39334);

(statearr_39358_39386[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39345 === (5))){
var inst_39297 = (state_39344[(7)]);
var inst_39299 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_39300 = (new cljs.core.PersistentArrayMap(null,2,inst_39299,null));
var inst_39301 = (new cljs.core.PersistentHashSet(null,inst_39300,null));
var inst_39302 = figwheel.client.focus_msgs.call(null,inst_39301,inst_39297);
var inst_39303 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_39302);
var inst_39304 = cljs.core.first.call(null,inst_39302);
var inst_39305 = figwheel.client.autoload_QMARK_.call(null);
var state_39344__$1 = (function (){var statearr_39359 = state_39344;
(statearr_39359[(9)] = inst_39303);

(statearr_39359[(8)] = inst_39304);

return statearr_39359;
})();
if(cljs.core.truth_(inst_39305)){
var statearr_39360_39387 = state_39344__$1;
(statearr_39360_39387[(1)] = (8));

} else {
var statearr_39361_39388 = state_39344__$1;
(statearr_39361_39388[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39345 === (14))){
var inst_39315 = (state_39344[(2)]);
var state_39344__$1 = state_39344;
var statearr_39362_39389 = state_39344__$1;
(statearr_39362_39389[(2)] = inst_39315);

(statearr_39362_39389[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39345 === (16))){
var state_39344__$1 = state_39344;
var statearr_39363_39390 = state_39344__$1;
(statearr_39363_39390[(2)] = null);

(statearr_39363_39390[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39345 === (10))){
var inst_39336 = (state_39344[(2)]);
var state_39344__$1 = (function (){var statearr_39364 = state_39344;
(statearr_39364[(11)] = inst_39336);

return statearr_39364;
})();
var statearr_39365_39391 = state_39344__$1;
(statearr_39365_39391[(2)] = null);

(statearr_39365_39391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39345 === (8))){
var inst_39303 = (state_39344[(9)]);
var inst_39307 = figwheel.client.reload_file_state_QMARK_.call(null,inst_39303,opts);
var state_39344__$1 = state_39344;
if(cljs.core.truth_(inst_39307)){
var statearr_39366_39392 = state_39344__$1;
(statearr_39366_39392[(1)] = (11));

} else {
var statearr_39367_39393 = state_39344__$1;
(statearr_39367_39393[(1)] = (12));

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
});})(c__28307__auto___39375,ch))
;
return ((function (switch__28286__auto__,c__28307__auto___39375,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__28287__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__28287__auto____0 = (function (){
var statearr_39371 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39371[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__28287__auto__);

(statearr_39371[(1)] = (1));

return statearr_39371;
});
var figwheel$client$file_reloader_plugin_$_state_machine__28287__auto____1 = (function (state_39344){
while(true){
var ret_value__28288__auto__ = (function (){try{while(true){
var result__28289__auto__ = switch__28286__auto__.call(null,state_39344);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28289__auto__;
}
break;
}
}catch (e39372){if((e39372 instanceof Object)){
var ex__28290__auto__ = e39372;
var statearr_39373_39394 = state_39344;
(statearr_39373_39394[(5)] = ex__28290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39344);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39372;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39395 = state_39344;
state_39344 = G__39395;
continue;
} else {
return ret_value__28288__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__28287__auto__ = function(state_39344){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__28287__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__28287__auto____1.call(this,state_39344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__28287__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__28287__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__28287__auto__;
})()
;})(switch__28286__auto__,c__28307__auto___39375,ch))
})();
var state__28309__auto__ = (function (){var statearr_39374 = f__28308__auto__.call(null);
(statearr_39374[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28307__auto___39375);

return statearr_39374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28309__auto__);
});})(c__28307__auto___39375,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__39396_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__39396_SHARP_));
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
var base_path_39399 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_39399){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e39398){if((e39398 instanceof Error)){
var e = e39398;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_39399], null));
} else {
var e = e39398;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_39399))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__39400){
var map__39409 = p__39400;
var map__39409__$1 = ((((!((map__39409 == null)))?((((map__39409.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39409.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39409):map__39409);
var opts = map__39409__$1;
var build_id = cljs.core.get.call(null,map__39409__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__39409,map__39409__$1,opts,build_id){
return (function (p__39411){
var vec__39412 = p__39411;
var seq__39413 = cljs.core.seq.call(null,vec__39412);
var first__39414 = cljs.core.first.call(null,seq__39413);
var seq__39413__$1 = cljs.core.next.call(null,seq__39413);
var map__39415 = first__39414;
var map__39415__$1 = ((((!((map__39415 == null)))?((((map__39415.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39415.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39415):map__39415);
var msg = map__39415__$1;
var msg_name = cljs.core.get.call(null,map__39415__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39413__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__39412,seq__39413,first__39414,seq__39413__$1,map__39415,map__39415__$1,msg,msg_name,_,map__39409,map__39409__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__39412,seq__39413,first__39414,seq__39413__$1,map__39415,map__39415__$1,msg,msg_name,_,map__39409,map__39409__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__39409,map__39409__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__39423){
var vec__39424 = p__39423;
var seq__39425 = cljs.core.seq.call(null,vec__39424);
var first__39426 = cljs.core.first.call(null,seq__39425);
var seq__39425__$1 = cljs.core.next.call(null,seq__39425);
var map__39427 = first__39426;
var map__39427__$1 = ((((!((map__39427 == null)))?((((map__39427.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39427.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39427):map__39427);
var msg = map__39427__$1;
var msg_name = cljs.core.get.call(null,map__39427__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39425__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__39429){
var map__39441 = p__39429;
var map__39441__$1 = ((((!((map__39441 == null)))?((((map__39441.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39441.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39441):map__39441);
var on_compile_warning = cljs.core.get.call(null,map__39441__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__39441__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__39441,map__39441__$1,on_compile_warning,on_compile_fail){
return (function (p__39443){
var vec__39444 = p__39443;
var seq__39445 = cljs.core.seq.call(null,vec__39444);
var first__39446 = cljs.core.first.call(null,seq__39445);
var seq__39445__$1 = cljs.core.next.call(null,seq__39445);
var map__39447 = first__39446;
var map__39447__$1 = ((((!((map__39447 == null)))?((((map__39447.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39447.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39447):map__39447);
var msg = map__39447__$1;
var msg_name = cljs.core.get.call(null,map__39447__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39445__$1;
var pred__39449 = cljs.core._EQ_;
var expr__39450 = msg_name;
if(cljs.core.truth_(pred__39449.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__39450))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__39449.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__39450))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__39441,map__39441__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__28307__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28307__auto__,msg_hist,msg_names,msg){
return (function (){
var f__28308__auto__ = (function (){var switch__28286__auto__ = ((function (c__28307__auto__,msg_hist,msg_names,msg){
return (function (state_39658){
var state_val_39659 = (state_39658[(1)]);
if((state_val_39659 === (7))){
var inst_39586 = (state_39658[(2)]);
var state_39658__$1 = state_39658;
if(cljs.core.truth_(inst_39586)){
var statearr_39660_39706 = state_39658__$1;
(statearr_39660_39706[(1)] = (8));

} else {
var statearr_39661_39707 = state_39658__$1;
(statearr_39661_39707[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39659 === (20))){
var inst_39652 = (state_39658[(2)]);
var state_39658__$1 = state_39658;
var statearr_39662_39708 = state_39658__$1;
(statearr_39662_39708[(2)] = inst_39652);

(statearr_39662_39708[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39659 === (27))){
var inst_39648 = (state_39658[(2)]);
var state_39658__$1 = state_39658;
var statearr_39663_39709 = state_39658__$1;
(statearr_39663_39709[(2)] = inst_39648);

(statearr_39663_39709[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39659 === (1))){
var inst_39579 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_39658__$1 = state_39658;
if(cljs.core.truth_(inst_39579)){
var statearr_39664_39710 = state_39658__$1;
(statearr_39664_39710[(1)] = (2));

} else {
var statearr_39665_39711 = state_39658__$1;
(statearr_39665_39711[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39659 === (24))){
var inst_39650 = (state_39658[(2)]);
var state_39658__$1 = state_39658;
var statearr_39666_39712 = state_39658__$1;
(statearr_39666_39712[(2)] = inst_39650);

(statearr_39666_39712[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39659 === (4))){
var inst_39656 = (state_39658[(2)]);
var state_39658__$1 = state_39658;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39658__$1,inst_39656);
} else {
if((state_val_39659 === (15))){
var inst_39654 = (state_39658[(2)]);
var state_39658__$1 = state_39658;
var statearr_39667_39713 = state_39658__$1;
(statearr_39667_39713[(2)] = inst_39654);

(statearr_39667_39713[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39659 === (21))){
var inst_39613 = (state_39658[(2)]);
var state_39658__$1 = state_39658;
var statearr_39668_39714 = state_39658__$1;
(statearr_39668_39714[(2)] = inst_39613);

(statearr_39668_39714[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39659 === (31))){
var inst_39637 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_39658__$1 = state_39658;
if(cljs.core.truth_(inst_39637)){
var statearr_39669_39715 = state_39658__$1;
(statearr_39669_39715[(1)] = (34));

} else {
var statearr_39670_39716 = state_39658__$1;
(statearr_39670_39716[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39659 === (32))){
var inst_39646 = (state_39658[(2)]);
var state_39658__$1 = state_39658;
var statearr_39671_39717 = state_39658__$1;
(statearr_39671_39717[(2)] = inst_39646);

(statearr_39671_39717[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39659 === (33))){
var inst_39635 = (state_39658[(2)]);
var state_39658__$1 = state_39658;
var statearr_39672_39718 = state_39658__$1;
(statearr_39672_39718[(2)] = inst_39635);

(statearr_39672_39718[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39659 === (13))){
var inst_39600 = figwheel.client.heads_up.clear.call(null);
var state_39658__$1 = state_39658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39658__$1,(16),inst_39600);
} else {
if((state_val_39659 === (22))){
var inst_39617 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39618 = figwheel.client.heads_up.append_warning_message.call(null,inst_39617);
var state_39658__$1 = state_39658;
var statearr_39673_39719 = state_39658__$1;
(statearr_39673_39719[(2)] = inst_39618);

(statearr_39673_39719[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39659 === (36))){
var inst_39644 = (state_39658[(2)]);
var state_39658__$1 = state_39658;
var statearr_39674_39720 = state_39658__$1;
(statearr_39674_39720[(2)] = inst_39644);

(statearr_39674_39720[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39659 === (29))){
var inst_39628 = (state_39658[(2)]);
var state_39658__$1 = state_39658;
var statearr_39675_39721 = state_39658__$1;
(statearr_39675_39721[(2)] = inst_39628);

(statearr_39675_39721[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39659 === (6))){
var inst_39581 = (state_39658[(7)]);
var state_39658__$1 = state_39658;
var statearr_39676_39722 = state_39658__$1;
(statearr_39676_39722[(2)] = inst_39581);

(statearr_39676_39722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39659 === (28))){
var inst_39624 = (state_39658[(2)]);
var inst_39625 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39626 = figwheel.client.heads_up.display_warning.call(null,inst_39625);
var state_39658__$1 = (function (){var statearr_39677 = state_39658;
(statearr_39677[(8)] = inst_39624);

return statearr_39677;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39658__$1,(29),inst_39626);
} else {
if((state_val_39659 === (25))){
var inst_39622 = figwheel.client.heads_up.clear.call(null);
var state_39658__$1 = state_39658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39658__$1,(28),inst_39622);
} else {
if((state_val_39659 === (34))){
var inst_39639 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39658__$1 = state_39658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39658__$1,(37),inst_39639);
} else {
if((state_val_39659 === (17))){
var inst_39606 = (state_39658[(2)]);
var state_39658__$1 = state_39658;
var statearr_39678_39723 = state_39658__$1;
(statearr_39678_39723[(2)] = inst_39606);

(statearr_39678_39723[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39659 === (3))){
var inst_39598 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_39658__$1 = state_39658;
if(cljs.core.truth_(inst_39598)){
var statearr_39679_39724 = state_39658__$1;
(statearr_39679_39724[(1)] = (13));

} else {
var statearr_39680_39725 = state_39658__$1;
(statearr_39680_39725[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39659 === (12))){
var inst_39594 = (state_39658[(2)]);
var state_39658__$1 = state_39658;
var statearr_39681_39726 = state_39658__$1;
(statearr_39681_39726[(2)] = inst_39594);

(statearr_39681_39726[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39659 === (2))){
var inst_39581 = (state_39658[(7)]);
var inst_39581__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_39658__$1 = (function (){var statearr_39682 = state_39658;
(statearr_39682[(7)] = inst_39581__$1);

return statearr_39682;
})();
if(cljs.core.truth_(inst_39581__$1)){
var statearr_39683_39727 = state_39658__$1;
(statearr_39683_39727[(1)] = (5));

} else {
var statearr_39684_39728 = state_39658__$1;
(statearr_39684_39728[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39659 === (23))){
var inst_39620 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_39658__$1 = state_39658;
if(cljs.core.truth_(inst_39620)){
var statearr_39685_39729 = state_39658__$1;
(statearr_39685_39729[(1)] = (25));

} else {
var statearr_39686_39730 = state_39658__$1;
(statearr_39686_39730[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39659 === (35))){
var state_39658__$1 = state_39658;
var statearr_39687_39731 = state_39658__$1;
(statearr_39687_39731[(2)] = null);

(statearr_39687_39731[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39659 === (19))){
var inst_39615 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_39658__$1 = state_39658;
if(cljs.core.truth_(inst_39615)){
var statearr_39688_39732 = state_39658__$1;
(statearr_39688_39732[(1)] = (22));

} else {
var statearr_39689_39733 = state_39658__$1;
(statearr_39689_39733[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39659 === (11))){
var inst_39590 = (state_39658[(2)]);
var state_39658__$1 = state_39658;
var statearr_39690_39734 = state_39658__$1;
(statearr_39690_39734[(2)] = inst_39590);

(statearr_39690_39734[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39659 === (9))){
var inst_39592 = figwheel.client.heads_up.clear.call(null);
var state_39658__$1 = state_39658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39658__$1,(12),inst_39592);
} else {
if((state_val_39659 === (5))){
var inst_39583 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_39658__$1 = state_39658;
var statearr_39691_39735 = state_39658__$1;
(statearr_39691_39735[(2)] = inst_39583);

(statearr_39691_39735[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39659 === (14))){
var inst_39608 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_39658__$1 = state_39658;
if(cljs.core.truth_(inst_39608)){
var statearr_39692_39736 = state_39658__$1;
(statearr_39692_39736[(1)] = (18));

} else {
var statearr_39693_39737 = state_39658__$1;
(statearr_39693_39737[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39659 === (26))){
var inst_39630 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_39658__$1 = state_39658;
if(cljs.core.truth_(inst_39630)){
var statearr_39694_39738 = state_39658__$1;
(statearr_39694_39738[(1)] = (30));

} else {
var statearr_39695_39739 = state_39658__$1;
(statearr_39695_39739[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39659 === (16))){
var inst_39602 = (state_39658[(2)]);
var inst_39603 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39604 = figwheel.client.heads_up.display_exception.call(null,inst_39603);
var state_39658__$1 = (function (){var statearr_39696 = state_39658;
(statearr_39696[(9)] = inst_39602);

return statearr_39696;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39658__$1,(17),inst_39604);
} else {
if((state_val_39659 === (30))){
var inst_39632 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39633 = figwheel.client.heads_up.display_warning.call(null,inst_39632);
var state_39658__$1 = state_39658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39658__$1,(33),inst_39633);
} else {
if((state_val_39659 === (10))){
var inst_39596 = (state_39658[(2)]);
var state_39658__$1 = state_39658;
var statearr_39697_39740 = state_39658__$1;
(statearr_39697_39740[(2)] = inst_39596);

(statearr_39697_39740[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39659 === (18))){
var inst_39610 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39611 = figwheel.client.heads_up.display_exception.call(null,inst_39610);
var state_39658__$1 = state_39658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39658__$1,(21),inst_39611);
} else {
if((state_val_39659 === (37))){
var inst_39641 = (state_39658[(2)]);
var state_39658__$1 = state_39658;
var statearr_39698_39741 = state_39658__$1;
(statearr_39698_39741[(2)] = inst_39641);

(statearr_39698_39741[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39659 === (8))){
var inst_39588 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39658__$1 = state_39658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39658__$1,(11),inst_39588);
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
});})(c__28307__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__28286__auto__,c__28307__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28287__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28287__auto____0 = (function (){
var statearr_39702 = [null,null,null,null,null,null,null,null,null,null];
(statearr_39702[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28287__auto__);

(statearr_39702[(1)] = (1));

return statearr_39702;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28287__auto____1 = (function (state_39658){
while(true){
var ret_value__28288__auto__ = (function (){try{while(true){
var result__28289__auto__ = switch__28286__auto__.call(null,state_39658);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28289__auto__;
}
break;
}
}catch (e39703){if((e39703 instanceof Object)){
var ex__28290__auto__ = e39703;
var statearr_39704_39742 = state_39658;
(statearr_39704_39742[(5)] = ex__28290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39658);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39703;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39743 = state_39658;
state_39658 = G__39743;
continue;
} else {
return ret_value__28288__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28287__auto__ = function(state_39658){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28287__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28287__auto____1.call(this,state_39658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28287__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28287__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28287__auto__;
})()
;})(switch__28286__auto__,c__28307__auto__,msg_hist,msg_names,msg))
})();
var state__28309__auto__ = (function (){var statearr_39705 = f__28308__auto__.call(null);
(statearr_39705[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28307__auto__);

return statearr_39705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28309__auto__);
});})(c__28307__auto__,msg_hist,msg_names,msg))
);

return c__28307__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28307__auto___39806 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28307__auto___39806,ch){
return (function (){
var f__28308__auto__ = (function (){var switch__28286__auto__ = ((function (c__28307__auto___39806,ch){
return (function (state_39789){
var state_val_39790 = (state_39789[(1)]);
if((state_val_39790 === (1))){
var state_39789__$1 = state_39789;
var statearr_39791_39807 = state_39789__$1;
(statearr_39791_39807[(2)] = null);

(statearr_39791_39807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39790 === (2))){
var state_39789__$1 = state_39789;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39789__$1,(4),ch);
} else {
if((state_val_39790 === (3))){
var inst_39787 = (state_39789[(2)]);
var state_39789__$1 = state_39789;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39789__$1,inst_39787);
} else {
if((state_val_39790 === (4))){
var inst_39777 = (state_39789[(7)]);
var inst_39777__$1 = (state_39789[(2)]);
var state_39789__$1 = (function (){var statearr_39792 = state_39789;
(statearr_39792[(7)] = inst_39777__$1);

return statearr_39792;
})();
if(cljs.core.truth_(inst_39777__$1)){
var statearr_39793_39808 = state_39789__$1;
(statearr_39793_39808[(1)] = (5));

} else {
var statearr_39794_39809 = state_39789__$1;
(statearr_39794_39809[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39790 === (5))){
var inst_39777 = (state_39789[(7)]);
var inst_39779 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_39777);
var state_39789__$1 = state_39789;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39789__$1,(8),inst_39779);
} else {
if((state_val_39790 === (6))){
var state_39789__$1 = state_39789;
var statearr_39795_39810 = state_39789__$1;
(statearr_39795_39810[(2)] = null);

(statearr_39795_39810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39790 === (7))){
var inst_39785 = (state_39789[(2)]);
var state_39789__$1 = state_39789;
var statearr_39796_39811 = state_39789__$1;
(statearr_39796_39811[(2)] = inst_39785);

(statearr_39796_39811[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39790 === (8))){
var inst_39781 = (state_39789[(2)]);
var state_39789__$1 = (function (){var statearr_39797 = state_39789;
(statearr_39797[(8)] = inst_39781);

return statearr_39797;
})();
var statearr_39798_39812 = state_39789__$1;
(statearr_39798_39812[(2)] = null);

(statearr_39798_39812[(1)] = (2));


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
});})(c__28307__auto___39806,ch))
;
return ((function (switch__28286__auto__,c__28307__auto___39806,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__28287__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__28287__auto____0 = (function (){
var statearr_39802 = [null,null,null,null,null,null,null,null,null];
(statearr_39802[(0)] = figwheel$client$heads_up_plugin_$_state_machine__28287__auto__);

(statearr_39802[(1)] = (1));

return statearr_39802;
});
var figwheel$client$heads_up_plugin_$_state_machine__28287__auto____1 = (function (state_39789){
while(true){
var ret_value__28288__auto__ = (function (){try{while(true){
var result__28289__auto__ = switch__28286__auto__.call(null,state_39789);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28289__auto__;
}
break;
}
}catch (e39803){if((e39803 instanceof Object)){
var ex__28290__auto__ = e39803;
var statearr_39804_39813 = state_39789;
(statearr_39804_39813[(5)] = ex__28290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39789);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39803;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39814 = state_39789;
state_39789 = G__39814;
continue;
} else {
return ret_value__28288__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__28287__auto__ = function(state_39789){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__28287__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__28287__auto____1.call(this,state_39789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__28287__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__28287__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__28287__auto__;
})()
;})(switch__28286__auto__,c__28307__auto___39806,ch))
})();
var state__28309__auto__ = (function (){var statearr_39805 = f__28308__auto__.call(null);
(statearr_39805[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28307__auto___39806);

return statearr_39805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28309__auto__);
});})(c__28307__auto___39806,ch))
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
var c__28307__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28307__auto__){
return (function (){
var f__28308__auto__ = (function (){var switch__28286__auto__ = ((function (c__28307__auto__){
return (function (state_39835){
var state_val_39836 = (state_39835[(1)]);
if((state_val_39836 === (1))){
var inst_39830 = cljs.core.async.timeout.call(null,(3000));
var state_39835__$1 = state_39835;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39835__$1,(2),inst_39830);
} else {
if((state_val_39836 === (2))){
var inst_39832 = (state_39835[(2)]);
var inst_39833 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_39835__$1 = (function (){var statearr_39837 = state_39835;
(statearr_39837[(7)] = inst_39832);

return statearr_39837;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39835__$1,inst_39833);
} else {
return null;
}
}
});})(c__28307__auto__))
;
return ((function (switch__28286__auto__,c__28307__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__28287__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__28287__auto____0 = (function (){
var statearr_39841 = [null,null,null,null,null,null,null,null];
(statearr_39841[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__28287__auto__);

(statearr_39841[(1)] = (1));

return statearr_39841;
});
var figwheel$client$enforce_project_plugin_$_state_machine__28287__auto____1 = (function (state_39835){
while(true){
var ret_value__28288__auto__ = (function (){try{while(true){
var result__28289__auto__ = switch__28286__auto__.call(null,state_39835);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28289__auto__;
}
break;
}
}catch (e39842){if((e39842 instanceof Object)){
var ex__28290__auto__ = e39842;
var statearr_39843_39845 = state_39835;
(statearr_39843_39845[(5)] = ex__28290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39835);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39842;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39846 = state_39835;
state_39835 = G__39846;
continue;
} else {
return ret_value__28288__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__28287__auto__ = function(state_39835){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__28287__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__28287__auto____1.call(this,state_39835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__28287__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__28287__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__28287__auto__;
})()
;})(switch__28286__auto__,c__28307__auto__))
})();
var state__28309__auto__ = (function (){var statearr_39844 = f__28308__auto__.call(null);
(statearr_39844[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28307__auto__);

return statearr_39844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28309__auto__);
});})(c__28307__auto__))
);

return c__28307__auto__;
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
var c__28307__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28307__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__28308__auto__ = (function (){var switch__28286__auto__ = ((function (c__28307__auto__,figwheel_version,temp__4657__auto__){
return (function (state_39869){
var state_val_39870 = (state_39869[(1)]);
if((state_val_39870 === (1))){
var inst_39863 = cljs.core.async.timeout.call(null,(2000));
var state_39869__$1 = state_39869;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39869__$1,(2),inst_39863);
} else {
if((state_val_39870 === (2))){
var inst_39865 = (state_39869[(2)]);
var inst_39866 = [cljs.core.str("Figwheel Client Version \""),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("\" is not equal to "),cljs.core.str("Figwheel Sidecar Version \""),cljs.core.str(figwheel_version),cljs.core.str("\""),cljs.core.str(".  Shutting down Websocket Connection!")].join('');
var inst_39867 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_39866);
var state_39869__$1 = (function (){var statearr_39871 = state_39869;
(statearr_39871[(7)] = inst_39865);

return statearr_39871;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39869__$1,inst_39867);
} else {
return null;
}
}
});})(c__28307__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__28286__auto__,c__28307__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28287__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28287__auto____0 = (function (){
var statearr_39875 = [null,null,null,null,null,null,null,null];
(statearr_39875[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28287__auto__);

(statearr_39875[(1)] = (1));

return statearr_39875;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28287__auto____1 = (function (state_39869){
while(true){
var ret_value__28288__auto__ = (function (){try{while(true){
var result__28289__auto__ = switch__28286__auto__.call(null,state_39869);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28289__auto__;
}
break;
}
}catch (e39876){if((e39876 instanceof Object)){
var ex__28290__auto__ = e39876;
var statearr_39877_39879 = state_39869;
(statearr_39877_39879[(5)] = ex__28290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39869);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39876;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39880 = state_39869;
state_39869 = G__39880;
continue;
} else {
return ret_value__28288__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28287__auto__ = function(state_39869){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28287__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28287__auto____1.call(this,state_39869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28287__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28287__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28287__auto__;
})()
;})(switch__28286__auto__,c__28307__auto__,figwheel_version,temp__4657__auto__))
})();
var state__28309__auto__ = (function (){var statearr_39878 = f__28308__auto__.call(null);
(statearr_39878[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28307__auto__);

return statearr_39878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28309__auto__);
});})(c__28307__auto__,figwheel_version,temp__4657__auto__))
);

return c__28307__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__39881){
var map__39885 = p__39881;
var map__39885__$1 = ((((!((map__39885 == null)))?((((map__39885.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39885.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39885):map__39885);
var file = cljs.core.get.call(null,map__39885__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__39885__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__39885__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__39887 = "";
var G__39887__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__39887),cljs.core.str("file "),cljs.core.str(file)].join(''):G__39887);
var G__39887__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__39887__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__39887__$1);
if(cljs.core.truth_((function (){var and__25564__auto__ = line;
if(cljs.core.truth_(and__25564__auto__)){
return column;
} else {
return and__25564__auto__;
}
})())){
return [cljs.core.str(G__39887__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__39887__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__39888){
var map__39895 = p__39888;
var map__39895__$1 = ((((!((map__39895 == null)))?((((map__39895.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39895.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39895):map__39895);
var ed = map__39895__$1;
var formatted_exception = cljs.core.get.call(null,map__39895__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__39895__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__39895__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__39897_39901 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__39898_39902 = null;
var count__39899_39903 = (0);
var i__39900_39904 = (0);
while(true){
if((i__39900_39904 < count__39899_39903)){
var msg_39905 = cljs.core._nth.call(null,chunk__39898_39902,i__39900_39904);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_39905);

var G__39906 = seq__39897_39901;
var G__39907 = chunk__39898_39902;
var G__39908 = count__39899_39903;
var G__39909 = (i__39900_39904 + (1));
seq__39897_39901 = G__39906;
chunk__39898_39902 = G__39907;
count__39899_39903 = G__39908;
i__39900_39904 = G__39909;
continue;
} else {
var temp__4657__auto___39910 = cljs.core.seq.call(null,seq__39897_39901);
if(temp__4657__auto___39910){
var seq__39897_39911__$1 = temp__4657__auto___39910;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39897_39911__$1)){
var c__26387__auto___39912 = cljs.core.chunk_first.call(null,seq__39897_39911__$1);
var G__39913 = cljs.core.chunk_rest.call(null,seq__39897_39911__$1);
var G__39914 = c__26387__auto___39912;
var G__39915 = cljs.core.count.call(null,c__26387__auto___39912);
var G__39916 = (0);
seq__39897_39901 = G__39913;
chunk__39898_39902 = G__39914;
count__39899_39903 = G__39915;
i__39900_39904 = G__39916;
continue;
} else {
var msg_39917 = cljs.core.first.call(null,seq__39897_39911__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_39917);

var G__39918 = cljs.core.next.call(null,seq__39897_39911__$1);
var G__39919 = null;
var G__39920 = (0);
var G__39921 = (0);
seq__39897_39901 = G__39918;
chunk__39898_39902 = G__39919;
count__39899_39903 = G__39920;
i__39900_39904 = G__39921;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__39922){
var map__39925 = p__39922;
var map__39925__$1 = ((((!((map__39925 == null)))?((((map__39925.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39925.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39925):map__39925);
var w = map__39925__$1;
var message = cljs.core.get.call(null,map__39925__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__25564__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__25564__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__25564__auto__;
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
var seq__39937 = cljs.core.seq.call(null,plugins);
var chunk__39938 = null;
var count__39939 = (0);
var i__39940 = (0);
while(true){
if((i__39940 < count__39939)){
var vec__39941 = cljs.core._nth.call(null,chunk__39938,i__39940);
var k = cljs.core.nth.call(null,vec__39941,(0),null);
var plugin = cljs.core.nth.call(null,vec__39941,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39947 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39937,chunk__39938,count__39939,i__39940,pl_39947,vec__39941,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_39947.call(null,msg_hist);
});})(seq__39937,chunk__39938,count__39939,i__39940,pl_39947,vec__39941,k,plugin))
);
} else {
}

var G__39948 = seq__39937;
var G__39949 = chunk__39938;
var G__39950 = count__39939;
var G__39951 = (i__39940 + (1));
seq__39937 = G__39948;
chunk__39938 = G__39949;
count__39939 = G__39950;
i__39940 = G__39951;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39937);
if(temp__4657__auto__){
var seq__39937__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39937__$1)){
var c__26387__auto__ = cljs.core.chunk_first.call(null,seq__39937__$1);
var G__39952 = cljs.core.chunk_rest.call(null,seq__39937__$1);
var G__39953 = c__26387__auto__;
var G__39954 = cljs.core.count.call(null,c__26387__auto__);
var G__39955 = (0);
seq__39937 = G__39952;
chunk__39938 = G__39953;
count__39939 = G__39954;
i__39940 = G__39955;
continue;
} else {
var vec__39944 = cljs.core.first.call(null,seq__39937__$1);
var k = cljs.core.nth.call(null,vec__39944,(0),null);
var plugin = cljs.core.nth.call(null,vec__39944,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39956 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39937,chunk__39938,count__39939,i__39940,pl_39956,vec__39944,k,plugin,seq__39937__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_39956.call(null,msg_hist);
});})(seq__39937,chunk__39938,count__39939,i__39940,pl_39956,vec__39944,k,plugin,seq__39937__$1,temp__4657__auto__))
);
} else {
}

var G__39957 = cljs.core.next.call(null,seq__39937__$1);
var G__39958 = null;
var G__39959 = (0);
var G__39960 = (0);
seq__39937 = G__39957;
chunk__39938 = G__39958;
count__39939 = G__39959;
i__39940 = G__39960;
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
var args39961 = [];
var len__26651__auto___39968 = arguments.length;
var i__26652__auto___39969 = (0);
while(true){
if((i__26652__auto___39969 < len__26651__auto___39968)){
args39961.push((arguments[i__26652__auto___39969]));

var G__39970 = (i__26652__auto___39969 + (1));
i__26652__auto___39969 = G__39970;
continue;
} else {
}
break;
}

var G__39963 = args39961.length;
switch (G__39963) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39961.length)].join('')));

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

var seq__39964_39972 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__39965_39973 = null;
var count__39966_39974 = (0);
var i__39967_39975 = (0);
while(true){
if((i__39967_39975 < count__39966_39974)){
var msg_39976 = cljs.core._nth.call(null,chunk__39965_39973,i__39967_39975);
figwheel.client.socket.handle_incoming_message.call(null,msg_39976);

var G__39977 = seq__39964_39972;
var G__39978 = chunk__39965_39973;
var G__39979 = count__39966_39974;
var G__39980 = (i__39967_39975 + (1));
seq__39964_39972 = G__39977;
chunk__39965_39973 = G__39978;
count__39966_39974 = G__39979;
i__39967_39975 = G__39980;
continue;
} else {
var temp__4657__auto___39981 = cljs.core.seq.call(null,seq__39964_39972);
if(temp__4657__auto___39981){
var seq__39964_39982__$1 = temp__4657__auto___39981;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39964_39982__$1)){
var c__26387__auto___39983 = cljs.core.chunk_first.call(null,seq__39964_39982__$1);
var G__39984 = cljs.core.chunk_rest.call(null,seq__39964_39982__$1);
var G__39985 = c__26387__auto___39983;
var G__39986 = cljs.core.count.call(null,c__26387__auto___39983);
var G__39987 = (0);
seq__39964_39972 = G__39984;
chunk__39965_39973 = G__39985;
count__39966_39974 = G__39986;
i__39967_39975 = G__39987;
continue;
} else {
var msg_39988 = cljs.core.first.call(null,seq__39964_39982__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_39988);

var G__39989 = cljs.core.next.call(null,seq__39964_39982__$1);
var G__39990 = null;
var G__39991 = (0);
var G__39992 = (0);
seq__39964_39972 = G__39989;
chunk__39965_39973 = G__39990;
count__39966_39974 = G__39991;
i__39967_39975 = G__39992;
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
var args__26658__auto__ = [];
var len__26651__auto___39997 = arguments.length;
var i__26652__auto___39998 = (0);
while(true){
if((i__26652__auto___39998 < len__26651__auto___39997)){
args__26658__auto__.push((arguments[i__26652__auto___39998]));

var G__39999 = (i__26652__auto___39998 + (1));
i__26652__auto___39998 = G__39999;
continue;
} else {
}
break;
}

var argseq__26659__auto__ = ((((0) < args__26658__auto__.length))?(new cljs.core.IndexedSeq(args__26658__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__26659__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__39994){
var map__39995 = p__39994;
var map__39995__$1 = ((((!((map__39995 == null)))?((((map__39995.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39995.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39995):map__39995);
var opts = map__39995__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq39993){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39993));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e40001){if((e40001 instanceof Error)){
var e = e40001;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e40001;

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
return (function (p__40005){
var map__40006 = p__40005;
var map__40006__$1 = ((((!((map__40006 == null)))?((((map__40006.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40006.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40006):map__40006);
var msg_name = cljs.core.get.call(null,map__40006__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1480029289959