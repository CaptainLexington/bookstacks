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
var args39295 = [];
var len__26645__auto___39298 = arguments.length;
var i__26646__auto___39299 = (0);
while(true){
if((i__26646__auto___39299 < len__26645__auto___39298)){
args39295.push((arguments[i__26646__auto___39299]));

var G__39300 = (i__26646__auto___39299 + (1));
i__26646__auto___39299 = G__39300;
continue;
} else {
}
break;
}

var G__39297 = args39295.length;
switch (G__39297) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39295.length)].join('')));

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
var len__26645__auto___39303 = arguments.length;
var i__26646__auto___39304 = (0);
while(true){
if((i__26646__auto___39304 < len__26645__auto___39303)){
args__26652__auto__.push((arguments[i__26646__auto___39304]));

var G__39305 = (i__26646__auto___39304 + (1));
i__26646__auto___39304 = G__39305;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq39302){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39302));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__26652__auto__ = [];
var len__26645__auto___39307 = arguments.length;
var i__26646__auto___39308 = (0);
while(true){
if((i__26646__auto___39308 < len__26645__auto___39307)){
args__26652__auto__.push((arguments[i__26646__auto___39308]));

var G__39309 = (i__26646__auto___39308 + (1));
i__26646__auto___39308 = G__39309;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq39306){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39306));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__39310 = cljs.core._EQ_;
var expr__39311 = (function (){var or__25570__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e39314){if((e39314 instanceof Error)){
var e = e39314;
return false;
} else {
throw e39314;

}
}})();
if(cljs.core.truth_(or__25570__auto__)){
return or__25570__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__39310.call(null,"true",expr__39311))){
return true;
} else {
if(cljs.core.truth_(pred__39310.call(null,"false",expr__39311))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__39311)].join('')));
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
}catch (e39316){if((e39316 instanceof Error)){
var e = e39316;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e39316;

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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__39317){
var map__39320 = p__39317;
var map__39320__$1 = ((((!((map__39320 == null)))?((((map__39320.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39320.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39320):map__39320);
var message = cljs.core.get.call(null,map__39320__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__39320__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__31929__auto___39482 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31929__auto___39482,ch){
return (function (){
var f__31930__auto__ = (function (){var switch__31817__auto__ = ((function (c__31929__auto___39482,ch){
return (function (state_39451){
var state_val_39452 = (state_39451[(1)]);
if((state_val_39452 === (7))){
var inst_39447 = (state_39451[(2)]);
var state_39451__$1 = state_39451;
var statearr_39453_39483 = state_39451__$1;
(statearr_39453_39483[(2)] = inst_39447);

(statearr_39453_39483[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39452 === (1))){
var state_39451__$1 = state_39451;
var statearr_39454_39484 = state_39451__$1;
(statearr_39454_39484[(2)] = null);

(statearr_39454_39484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39452 === (4))){
var inst_39404 = (state_39451[(7)]);
var inst_39404__$1 = (state_39451[(2)]);
var state_39451__$1 = (function (){var statearr_39455 = state_39451;
(statearr_39455[(7)] = inst_39404__$1);

return statearr_39455;
})();
if(cljs.core.truth_(inst_39404__$1)){
var statearr_39456_39485 = state_39451__$1;
(statearr_39456_39485[(1)] = (5));

} else {
var statearr_39457_39486 = state_39451__$1;
(statearr_39457_39486[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39452 === (15))){
var inst_39411 = (state_39451[(8)]);
var inst_39426 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39411);
var inst_39427 = cljs.core.first.call(null,inst_39426);
var inst_39428 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_39427);
var inst_39429 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_39428)].join('');
var inst_39430 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_39429);
var state_39451__$1 = state_39451;
var statearr_39458_39487 = state_39451__$1;
(statearr_39458_39487[(2)] = inst_39430);

(statearr_39458_39487[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39452 === (13))){
var inst_39435 = (state_39451[(2)]);
var state_39451__$1 = state_39451;
var statearr_39459_39488 = state_39451__$1;
(statearr_39459_39488[(2)] = inst_39435);

(statearr_39459_39488[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39452 === (6))){
var state_39451__$1 = state_39451;
var statearr_39460_39489 = state_39451__$1;
(statearr_39460_39489[(2)] = null);

(statearr_39460_39489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39452 === (17))){
var inst_39433 = (state_39451[(2)]);
var state_39451__$1 = state_39451;
var statearr_39461_39490 = state_39451__$1;
(statearr_39461_39490[(2)] = inst_39433);

(statearr_39461_39490[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39452 === (3))){
var inst_39449 = (state_39451[(2)]);
var state_39451__$1 = state_39451;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39451__$1,inst_39449);
} else {
if((state_val_39452 === (12))){
var inst_39410 = (state_39451[(9)]);
var inst_39424 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_39410,opts);
var state_39451__$1 = state_39451;
if(cljs.core.truth_(inst_39424)){
var statearr_39462_39491 = state_39451__$1;
(statearr_39462_39491[(1)] = (15));

} else {
var statearr_39463_39492 = state_39451__$1;
(statearr_39463_39492[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39452 === (2))){
var state_39451__$1 = state_39451;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39451__$1,(4),ch);
} else {
if((state_val_39452 === (11))){
var inst_39411 = (state_39451[(8)]);
var inst_39416 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39417 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_39411);
var inst_39418 = cljs.core.async.timeout.call(null,(1000));
var inst_39419 = [inst_39417,inst_39418];
var inst_39420 = (new cljs.core.PersistentVector(null,2,(5),inst_39416,inst_39419,null));
var state_39451__$1 = state_39451;
return cljs.core.async.ioc_alts_BANG_.call(null,state_39451__$1,(14),inst_39420);
} else {
if((state_val_39452 === (9))){
var inst_39411 = (state_39451[(8)]);
var inst_39437 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_39438 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39411);
var inst_39439 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39438);
var inst_39440 = [cljs.core.str("Not loading: "),cljs.core.str(inst_39439)].join('');
var inst_39441 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_39440);
var state_39451__$1 = (function (){var statearr_39464 = state_39451;
(statearr_39464[(10)] = inst_39437);

return statearr_39464;
})();
var statearr_39465_39493 = state_39451__$1;
(statearr_39465_39493[(2)] = inst_39441);

(statearr_39465_39493[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39452 === (5))){
var inst_39404 = (state_39451[(7)]);
var inst_39406 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_39407 = (new cljs.core.PersistentArrayMap(null,2,inst_39406,null));
var inst_39408 = (new cljs.core.PersistentHashSet(null,inst_39407,null));
var inst_39409 = figwheel.client.focus_msgs.call(null,inst_39408,inst_39404);
var inst_39410 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_39409);
var inst_39411 = cljs.core.first.call(null,inst_39409);
var inst_39412 = figwheel.client.autoload_QMARK_.call(null);
var state_39451__$1 = (function (){var statearr_39466 = state_39451;
(statearr_39466[(9)] = inst_39410);

(statearr_39466[(8)] = inst_39411);

return statearr_39466;
})();
if(cljs.core.truth_(inst_39412)){
var statearr_39467_39494 = state_39451__$1;
(statearr_39467_39494[(1)] = (8));

} else {
var statearr_39468_39495 = state_39451__$1;
(statearr_39468_39495[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39452 === (14))){
var inst_39422 = (state_39451[(2)]);
var state_39451__$1 = state_39451;
var statearr_39469_39496 = state_39451__$1;
(statearr_39469_39496[(2)] = inst_39422);

(statearr_39469_39496[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39452 === (16))){
var state_39451__$1 = state_39451;
var statearr_39470_39497 = state_39451__$1;
(statearr_39470_39497[(2)] = null);

(statearr_39470_39497[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39452 === (10))){
var inst_39443 = (state_39451[(2)]);
var state_39451__$1 = (function (){var statearr_39471 = state_39451;
(statearr_39471[(11)] = inst_39443);

return statearr_39471;
})();
var statearr_39472_39498 = state_39451__$1;
(statearr_39472_39498[(2)] = null);

(statearr_39472_39498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39452 === (8))){
var inst_39410 = (state_39451[(9)]);
var inst_39414 = figwheel.client.reload_file_state_QMARK_.call(null,inst_39410,opts);
var state_39451__$1 = state_39451;
if(cljs.core.truth_(inst_39414)){
var statearr_39473_39499 = state_39451__$1;
(statearr_39473_39499[(1)] = (11));

} else {
var statearr_39474_39500 = state_39451__$1;
(statearr_39474_39500[(1)] = (12));

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
});})(c__31929__auto___39482,ch))
;
return ((function (switch__31817__auto__,c__31929__auto___39482,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__31818__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__31818__auto____0 = (function (){
var statearr_39478 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39478[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__31818__auto__);

(statearr_39478[(1)] = (1));

return statearr_39478;
});
var figwheel$client$file_reloader_plugin_$_state_machine__31818__auto____1 = (function (state_39451){
while(true){
var ret_value__31819__auto__ = (function (){try{while(true){
var result__31820__auto__ = switch__31817__auto__.call(null,state_39451);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31820__auto__;
}
break;
}
}catch (e39479){if((e39479 instanceof Object)){
var ex__31821__auto__ = e39479;
var statearr_39480_39501 = state_39451;
(statearr_39480_39501[(5)] = ex__31821__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39451);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39479;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39502 = state_39451;
state_39451 = G__39502;
continue;
} else {
return ret_value__31819__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__31818__auto__ = function(state_39451){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__31818__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__31818__auto____1.call(this,state_39451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__31818__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__31818__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__31818__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__31818__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__31818__auto__;
})()
;})(switch__31817__auto__,c__31929__auto___39482,ch))
})();
var state__31931__auto__ = (function (){var statearr_39481 = f__31930__auto__.call(null);
(statearr_39481[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31929__auto___39482);

return statearr_39481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31931__auto__);
});})(c__31929__auto___39482,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__39503_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__39503_SHARP_));
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
var base_path_39506 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_39506){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e39505){if((e39505 instanceof Error)){
var e = e39505;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_39506], null));
} else {
var e = e39505;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_39506))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__39507){
var map__39516 = p__39507;
var map__39516__$1 = ((((!((map__39516 == null)))?((((map__39516.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39516.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39516):map__39516);
var opts = map__39516__$1;
var build_id = cljs.core.get.call(null,map__39516__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__39516,map__39516__$1,opts,build_id){
return (function (p__39518){
var vec__39519 = p__39518;
var seq__39520 = cljs.core.seq.call(null,vec__39519);
var first__39521 = cljs.core.first.call(null,seq__39520);
var seq__39520__$1 = cljs.core.next.call(null,seq__39520);
var map__39522 = first__39521;
var map__39522__$1 = ((((!((map__39522 == null)))?((((map__39522.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39522.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39522):map__39522);
var msg = map__39522__$1;
var msg_name = cljs.core.get.call(null,map__39522__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39520__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__39519,seq__39520,first__39521,seq__39520__$1,map__39522,map__39522__$1,msg,msg_name,_,map__39516,map__39516__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__39519,seq__39520,first__39521,seq__39520__$1,map__39522,map__39522__$1,msg,msg_name,_,map__39516,map__39516__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__39516,map__39516__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__39530){
var vec__39531 = p__39530;
var seq__39532 = cljs.core.seq.call(null,vec__39531);
var first__39533 = cljs.core.first.call(null,seq__39532);
var seq__39532__$1 = cljs.core.next.call(null,seq__39532);
var map__39534 = first__39533;
var map__39534__$1 = ((((!((map__39534 == null)))?((((map__39534.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39534.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39534):map__39534);
var msg = map__39534__$1;
var msg_name = cljs.core.get.call(null,map__39534__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39532__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__39536){
var map__39548 = p__39536;
var map__39548__$1 = ((((!((map__39548 == null)))?((((map__39548.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39548.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39548):map__39548);
var on_compile_warning = cljs.core.get.call(null,map__39548__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__39548__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__39548,map__39548__$1,on_compile_warning,on_compile_fail){
return (function (p__39550){
var vec__39551 = p__39550;
var seq__39552 = cljs.core.seq.call(null,vec__39551);
var first__39553 = cljs.core.first.call(null,seq__39552);
var seq__39552__$1 = cljs.core.next.call(null,seq__39552);
var map__39554 = first__39553;
var map__39554__$1 = ((((!((map__39554 == null)))?((((map__39554.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39554.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39554):map__39554);
var msg = map__39554__$1;
var msg_name = cljs.core.get.call(null,map__39554__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39552__$1;
var pred__39556 = cljs.core._EQ_;
var expr__39557 = msg_name;
if(cljs.core.truth_(pred__39556.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__39557))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__39556.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__39557))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__39548,map__39548__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__31929__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31929__auto__,msg_hist,msg_names,msg){
return (function (){
var f__31930__auto__ = (function (){var switch__31817__auto__ = ((function (c__31929__auto__,msg_hist,msg_names,msg){
return (function (state_39765){
var state_val_39766 = (state_39765[(1)]);
if((state_val_39766 === (7))){
var inst_39693 = (state_39765[(2)]);
var state_39765__$1 = state_39765;
if(cljs.core.truth_(inst_39693)){
var statearr_39767_39813 = state_39765__$1;
(statearr_39767_39813[(1)] = (8));

} else {
var statearr_39768_39814 = state_39765__$1;
(statearr_39768_39814[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39766 === (20))){
var inst_39759 = (state_39765[(2)]);
var state_39765__$1 = state_39765;
var statearr_39769_39815 = state_39765__$1;
(statearr_39769_39815[(2)] = inst_39759);

(statearr_39769_39815[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39766 === (27))){
var inst_39755 = (state_39765[(2)]);
var state_39765__$1 = state_39765;
var statearr_39770_39816 = state_39765__$1;
(statearr_39770_39816[(2)] = inst_39755);

(statearr_39770_39816[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39766 === (1))){
var inst_39686 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_39765__$1 = state_39765;
if(cljs.core.truth_(inst_39686)){
var statearr_39771_39817 = state_39765__$1;
(statearr_39771_39817[(1)] = (2));

} else {
var statearr_39772_39818 = state_39765__$1;
(statearr_39772_39818[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39766 === (24))){
var inst_39757 = (state_39765[(2)]);
var state_39765__$1 = state_39765;
var statearr_39773_39819 = state_39765__$1;
(statearr_39773_39819[(2)] = inst_39757);

(statearr_39773_39819[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39766 === (4))){
var inst_39763 = (state_39765[(2)]);
var state_39765__$1 = state_39765;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39765__$1,inst_39763);
} else {
if((state_val_39766 === (15))){
var inst_39761 = (state_39765[(2)]);
var state_39765__$1 = state_39765;
var statearr_39774_39820 = state_39765__$1;
(statearr_39774_39820[(2)] = inst_39761);

(statearr_39774_39820[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39766 === (21))){
var inst_39720 = (state_39765[(2)]);
var state_39765__$1 = state_39765;
var statearr_39775_39821 = state_39765__$1;
(statearr_39775_39821[(2)] = inst_39720);

(statearr_39775_39821[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39766 === (31))){
var inst_39744 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_39765__$1 = state_39765;
if(cljs.core.truth_(inst_39744)){
var statearr_39776_39822 = state_39765__$1;
(statearr_39776_39822[(1)] = (34));

} else {
var statearr_39777_39823 = state_39765__$1;
(statearr_39777_39823[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39766 === (32))){
var inst_39753 = (state_39765[(2)]);
var state_39765__$1 = state_39765;
var statearr_39778_39824 = state_39765__$1;
(statearr_39778_39824[(2)] = inst_39753);

(statearr_39778_39824[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39766 === (33))){
var inst_39742 = (state_39765[(2)]);
var state_39765__$1 = state_39765;
var statearr_39779_39825 = state_39765__$1;
(statearr_39779_39825[(2)] = inst_39742);

(statearr_39779_39825[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39766 === (13))){
var inst_39707 = figwheel.client.heads_up.clear.call(null);
var state_39765__$1 = state_39765;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39765__$1,(16),inst_39707);
} else {
if((state_val_39766 === (22))){
var inst_39724 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39725 = figwheel.client.heads_up.append_warning_message.call(null,inst_39724);
var state_39765__$1 = state_39765;
var statearr_39780_39826 = state_39765__$1;
(statearr_39780_39826[(2)] = inst_39725);

(statearr_39780_39826[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39766 === (36))){
var inst_39751 = (state_39765[(2)]);
var state_39765__$1 = state_39765;
var statearr_39781_39827 = state_39765__$1;
(statearr_39781_39827[(2)] = inst_39751);

(statearr_39781_39827[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39766 === (29))){
var inst_39735 = (state_39765[(2)]);
var state_39765__$1 = state_39765;
var statearr_39782_39828 = state_39765__$1;
(statearr_39782_39828[(2)] = inst_39735);

(statearr_39782_39828[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39766 === (6))){
var inst_39688 = (state_39765[(7)]);
var state_39765__$1 = state_39765;
var statearr_39783_39829 = state_39765__$1;
(statearr_39783_39829[(2)] = inst_39688);

(statearr_39783_39829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39766 === (28))){
var inst_39731 = (state_39765[(2)]);
var inst_39732 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39733 = figwheel.client.heads_up.display_warning.call(null,inst_39732);
var state_39765__$1 = (function (){var statearr_39784 = state_39765;
(statearr_39784[(8)] = inst_39731);

return statearr_39784;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39765__$1,(29),inst_39733);
} else {
if((state_val_39766 === (25))){
var inst_39729 = figwheel.client.heads_up.clear.call(null);
var state_39765__$1 = state_39765;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39765__$1,(28),inst_39729);
} else {
if((state_val_39766 === (34))){
var inst_39746 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39765__$1 = state_39765;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39765__$1,(37),inst_39746);
} else {
if((state_val_39766 === (17))){
var inst_39713 = (state_39765[(2)]);
var state_39765__$1 = state_39765;
var statearr_39785_39830 = state_39765__$1;
(statearr_39785_39830[(2)] = inst_39713);

(statearr_39785_39830[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39766 === (3))){
var inst_39705 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_39765__$1 = state_39765;
if(cljs.core.truth_(inst_39705)){
var statearr_39786_39831 = state_39765__$1;
(statearr_39786_39831[(1)] = (13));

} else {
var statearr_39787_39832 = state_39765__$1;
(statearr_39787_39832[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39766 === (12))){
var inst_39701 = (state_39765[(2)]);
var state_39765__$1 = state_39765;
var statearr_39788_39833 = state_39765__$1;
(statearr_39788_39833[(2)] = inst_39701);

(statearr_39788_39833[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39766 === (2))){
var inst_39688 = (state_39765[(7)]);
var inst_39688__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_39765__$1 = (function (){var statearr_39789 = state_39765;
(statearr_39789[(7)] = inst_39688__$1);

return statearr_39789;
})();
if(cljs.core.truth_(inst_39688__$1)){
var statearr_39790_39834 = state_39765__$1;
(statearr_39790_39834[(1)] = (5));

} else {
var statearr_39791_39835 = state_39765__$1;
(statearr_39791_39835[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39766 === (23))){
var inst_39727 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_39765__$1 = state_39765;
if(cljs.core.truth_(inst_39727)){
var statearr_39792_39836 = state_39765__$1;
(statearr_39792_39836[(1)] = (25));

} else {
var statearr_39793_39837 = state_39765__$1;
(statearr_39793_39837[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39766 === (35))){
var state_39765__$1 = state_39765;
var statearr_39794_39838 = state_39765__$1;
(statearr_39794_39838[(2)] = null);

(statearr_39794_39838[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39766 === (19))){
var inst_39722 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_39765__$1 = state_39765;
if(cljs.core.truth_(inst_39722)){
var statearr_39795_39839 = state_39765__$1;
(statearr_39795_39839[(1)] = (22));

} else {
var statearr_39796_39840 = state_39765__$1;
(statearr_39796_39840[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39766 === (11))){
var inst_39697 = (state_39765[(2)]);
var state_39765__$1 = state_39765;
var statearr_39797_39841 = state_39765__$1;
(statearr_39797_39841[(2)] = inst_39697);

(statearr_39797_39841[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39766 === (9))){
var inst_39699 = figwheel.client.heads_up.clear.call(null);
var state_39765__$1 = state_39765;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39765__$1,(12),inst_39699);
} else {
if((state_val_39766 === (5))){
var inst_39690 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_39765__$1 = state_39765;
var statearr_39798_39842 = state_39765__$1;
(statearr_39798_39842[(2)] = inst_39690);

(statearr_39798_39842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39766 === (14))){
var inst_39715 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_39765__$1 = state_39765;
if(cljs.core.truth_(inst_39715)){
var statearr_39799_39843 = state_39765__$1;
(statearr_39799_39843[(1)] = (18));

} else {
var statearr_39800_39844 = state_39765__$1;
(statearr_39800_39844[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39766 === (26))){
var inst_39737 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_39765__$1 = state_39765;
if(cljs.core.truth_(inst_39737)){
var statearr_39801_39845 = state_39765__$1;
(statearr_39801_39845[(1)] = (30));

} else {
var statearr_39802_39846 = state_39765__$1;
(statearr_39802_39846[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39766 === (16))){
var inst_39709 = (state_39765[(2)]);
var inst_39710 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39711 = figwheel.client.heads_up.display_exception.call(null,inst_39710);
var state_39765__$1 = (function (){var statearr_39803 = state_39765;
(statearr_39803[(9)] = inst_39709);

return statearr_39803;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39765__$1,(17),inst_39711);
} else {
if((state_val_39766 === (30))){
var inst_39739 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39740 = figwheel.client.heads_up.display_warning.call(null,inst_39739);
var state_39765__$1 = state_39765;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39765__$1,(33),inst_39740);
} else {
if((state_val_39766 === (10))){
var inst_39703 = (state_39765[(2)]);
var state_39765__$1 = state_39765;
var statearr_39804_39847 = state_39765__$1;
(statearr_39804_39847[(2)] = inst_39703);

(statearr_39804_39847[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39766 === (18))){
var inst_39717 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39718 = figwheel.client.heads_up.display_exception.call(null,inst_39717);
var state_39765__$1 = state_39765;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39765__$1,(21),inst_39718);
} else {
if((state_val_39766 === (37))){
var inst_39748 = (state_39765[(2)]);
var state_39765__$1 = state_39765;
var statearr_39805_39848 = state_39765__$1;
(statearr_39805_39848[(2)] = inst_39748);

(statearr_39805_39848[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39766 === (8))){
var inst_39695 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39765__$1 = state_39765;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39765__$1,(11),inst_39695);
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
var statearr_39809 = [null,null,null,null,null,null,null,null,null,null];
(statearr_39809[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31818__auto__);

(statearr_39809[(1)] = (1));

return statearr_39809;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31818__auto____1 = (function (state_39765){
while(true){
var ret_value__31819__auto__ = (function (){try{while(true){
var result__31820__auto__ = switch__31817__auto__.call(null,state_39765);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31820__auto__;
}
break;
}
}catch (e39810){if((e39810 instanceof Object)){
var ex__31821__auto__ = e39810;
var statearr_39811_39849 = state_39765;
(statearr_39811_39849[(5)] = ex__31821__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39810;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39850 = state_39765;
state_39765 = G__39850;
continue;
} else {
return ret_value__31819__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31818__auto__ = function(state_39765){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31818__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31818__auto____1.call(this,state_39765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31818__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31818__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31818__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31818__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31818__auto__;
})()
;})(switch__31817__auto__,c__31929__auto__,msg_hist,msg_names,msg))
})();
var state__31931__auto__ = (function (){var statearr_39812 = f__31930__auto__.call(null);
(statearr_39812[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31929__auto__);

return statearr_39812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31931__auto__);
});})(c__31929__auto__,msg_hist,msg_names,msg))
);

return c__31929__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__31929__auto___39913 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31929__auto___39913,ch){
return (function (){
var f__31930__auto__ = (function (){var switch__31817__auto__ = ((function (c__31929__auto___39913,ch){
return (function (state_39896){
var state_val_39897 = (state_39896[(1)]);
if((state_val_39897 === (1))){
var state_39896__$1 = state_39896;
var statearr_39898_39914 = state_39896__$1;
(statearr_39898_39914[(2)] = null);

(statearr_39898_39914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39897 === (2))){
var state_39896__$1 = state_39896;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39896__$1,(4),ch);
} else {
if((state_val_39897 === (3))){
var inst_39894 = (state_39896[(2)]);
var state_39896__$1 = state_39896;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39896__$1,inst_39894);
} else {
if((state_val_39897 === (4))){
var inst_39884 = (state_39896[(7)]);
var inst_39884__$1 = (state_39896[(2)]);
var state_39896__$1 = (function (){var statearr_39899 = state_39896;
(statearr_39899[(7)] = inst_39884__$1);

return statearr_39899;
})();
if(cljs.core.truth_(inst_39884__$1)){
var statearr_39900_39915 = state_39896__$1;
(statearr_39900_39915[(1)] = (5));

} else {
var statearr_39901_39916 = state_39896__$1;
(statearr_39901_39916[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39897 === (5))){
var inst_39884 = (state_39896[(7)]);
var inst_39886 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_39884);
var state_39896__$1 = state_39896;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39896__$1,(8),inst_39886);
} else {
if((state_val_39897 === (6))){
var state_39896__$1 = state_39896;
var statearr_39902_39917 = state_39896__$1;
(statearr_39902_39917[(2)] = null);

(statearr_39902_39917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39897 === (7))){
var inst_39892 = (state_39896[(2)]);
var state_39896__$1 = state_39896;
var statearr_39903_39918 = state_39896__$1;
(statearr_39903_39918[(2)] = inst_39892);

(statearr_39903_39918[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39897 === (8))){
var inst_39888 = (state_39896[(2)]);
var state_39896__$1 = (function (){var statearr_39904 = state_39896;
(statearr_39904[(8)] = inst_39888);

return statearr_39904;
})();
var statearr_39905_39919 = state_39896__$1;
(statearr_39905_39919[(2)] = null);

(statearr_39905_39919[(1)] = (2));


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
});})(c__31929__auto___39913,ch))
;
return ((function (switch__31817__auto__,c__31929__auto___39913,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__31818__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__31818__auto____0 = (function (){
var statearr_39909 = [null,null,null,null,null,null,null,null,null];
(statearr_39909[(0)] = figwheel$client$heads_up_plugin_$_state_machine__31818__auto__);

(statearr_39909[(1)] = (1));

return statearr_39909;
});
var figwheel$client$heads_up_plugin_$_state_machine__31818__auto____1 = (function (state_39896){
while(true){
var ret_value__31819__auto__ = (function (){try{while(true){
var result__31820__auto__ = switch__31817__auto__.call(null,state_39896);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31820__auto__;
}
break;
}
}catch (e39910){if((e39910 instanceof Object)){
var ex__31821__auto__ = e39910;
var statearr_39911_39920 = state_39896;
(statearr_39911_39920[(5)] = ex__31821__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39896);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39910;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39921 = state_39896;
state_39896 = G__39921;
continue;
} else {
return ret_value__31819__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__31818__auto__ = function(state_39896){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__31818__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__31818__auto____1.call(this,state_39896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__31818__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__31818__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__31818__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__31818__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__31818__auto__;
})()
;})(switch__31817__auto__,c__31929__auto___39913,ch))
})();
var state__31931__auto__ = (function (){var statearr_39912 = f__31930__auto__.call(null);
(statearr_39912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31929__auto___39913);

return statearr_39912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31931__auto__);
});})(c__31929__auto___39913,ch))
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
return (function (state_39942){
var state_val_39943 = (state_39942[(1)]);
if((state_val_39943 === (1))){
var inst_39937 = cljs.core.async.timeout.call(null,(3000));
var state_39942__$1 = state_39942;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39942__$1,(2),inst_39937);
} else {
if((state_val_39943 === (2))){
var inst_39939 = (state_39942[(2)]);
var inst_39940 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_39942__$1 = (function (){var statearr_39944 = state_39942;
(statearr_39944[(7)] = inst_39939);

return statearr_39944;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39942__$1,inst_39940);
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
var statearr_39948 = [null,null,null,null,null,null,null,null];
(statearr_39948[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__31818__auto__);

(statearr_39948[(1)] = (1));

return statearr_39948;
});
var figwheel$client$enforce_project_plugin_$_state_machine__31818__auto____1 = (function (state_39942){
while(true){
var ret_value__31819__auto__ = (function (){try{while(true){
var result__31820__auto__ = switch__31817__auto__.call(null,state_39942);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31820__auto__;
}
break;
}
}catch (e39949){if((e39949 instanceof Object)){
var ex__31821__auto__ = e39949;
var statearr_39950_39952 = state_39942;
(statearr_39950_39952[(5)] = ex__31821__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39949;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39953 = state_39942;
state_39942 = G__39953;
continue;
} else {
return ret_value__31819__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__31818__auto__ = function(state_39942){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__31818__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__31818__auto____1.call(this,state_39942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__31818__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__31818__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__31818__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__31818__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__31818__auto__;
})()
;})(switch__31817__auto__,c__31929__auto__))
})();
var state__31931__auto__ = (function (){var statearr_39951 = f__31930__auto__.call(null);
(statearr_39951[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31929__auto__);

return statearr_39951;
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
return (function (state_39976){
var state_val_39977 = (state_39976[(1)]);
if((state_val_39977 === (1))){
var inst_39970 = cljs.core.async.timeout.call(null,(2000));
var state_39976__$1 = state_39976;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39976__$1,(2),inst_39970);
} else {
if((state_val_39977 === (2))){
var inst_39972 = (state_39976[(2)]);
var inst_39973 = [cljs.core.str("Figwheel Client Version \""),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("\" is not equal to "),cljs.core.str("Figwheel Sidecar Version \""),cljs.core.str(figwheel_version),cljs.core.str("\""),cljs.core.str(".  Shutting down Websocket Connection!")].join('');
var inst_39974 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_39973);
var state_39976__$1 = (function (){var statearr_39978 = state_39976;
(statearr_39978[(7)] = inst_39972);

return statearr_39978;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39976__$1,inst_39974);
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
var statearr_39982 = [null,null,null,null,null,null,null,null];
(statearr_39982[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31818__auto__);

(statearr_39982[(1)] = (1));

return statearr_39982;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31818__auto____1 = (function (state_39976){
while(true){
var ret_value__31819__auto__ = (function (){try{while(true){
var result__31820__auto__ = switch__31817__auto__.call(null,state_39976);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31820__auto__;
}
break;
}
}catch (e39983){if((e39983 instanceof Object)){
var ex__31821__auto__ = e39983;
var statearr_39984_39986 = state_39976;
(statearr_39984_39986[(5)] = ex__31821__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39976);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39983;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39987 = state_39976;
state_39976 = G__39987;
continue;
} else {
return ret_value__31819__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31818__auto__ = function(state_39976){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31818__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31818__auto____1.call(this,state_39976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31818__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31818__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31818__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31818__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31818__auto__;
})()
;})(switch__31817__auto__,c__31929__auto__,figwheel_version,temp__4657__auto__))
})();
var state__31931__auto__ = (function (){var statearr_39985 = f__31930__auto__.call(null);
(statearr_39985[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31929__auto__);

return statearr_39985;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__39988){
var map__39992 = p__39988;
var map__39992__$1 = ((((!((map__39992 == null)))?((((map__39992.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39992.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39992):map__39992);
var file = cljs.core.get.call(null,map__39992__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__39992__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__39992__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__39994 = "";
var G__39994__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__39994),cljs.core.str("file "),cljs.core.str(file)].join(''):G__39994);
var G__39994__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__39994__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__39994__$1);
if(cljs.core.truth_((function (){var and__25558__auto__ = line;
if(cljs.core.truth_(and__25558__auto__)){
return column;
} else {
return and__25558__auto__;
}
})())){
return [cljs.core.str(G__39994__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__39994__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__39995){
var map__40002 = p__39995;
var map__40002__$1 = ((((!((map__40002 == null)))?((((map__40002.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40002.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40002):map__40002);
var ed = map__40002__$1;
var formatted_exception = cljs.core.get.call(null,map__40002__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__40002__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__40002__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__40004_40008 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__40005_40009 = null;
var count__40006_40010 = (0);
var i__40007_40011 = (0);
while(true){
if((i__40007_40011 < count__40006_40010)){
var msg_40012 = cljs.core._nth.call(null,chunk__40005_40009,i__40007_40011);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_40012);

var G__40013 = seq__40004_40008;
var G__40014 = chunk__40005_40009;
var G__40015 = count__40006_40010;
var G__40016 = (i__40007_40011 + (1));
seq__40004_40008 = G__40013;
chunk__40005_40009 = G__40014;
count__40006_40010 = G__40015;
i__40007_40011 = G__40016;
continue;
} else {
var temp__4657__auto___40017 = cljs.core.seq.call(null,seq__40004_40008);
if(temp__4657__auto___40017){
var seq__40004_40018__$1 = temp__4657__auto___40017;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40004_40018__$1)){
var c__26381__auto___40019 = cljs.core.chunk_first.call(null,seq__40004_40018__$1);
var G__40020 = cljs.core.chunk_rest.call(null,seq__40004_40018__$1);
var G__40021 = c__26381__auto___40019;
var G__40022 = cljs.core.count.call(null,c__26381__auto___40019);
var G__40023 = (0);
seq__40004_40008 = G__40020;
chunk__40005_40009 = G__40021;
count__40006_40010 = G__40022;
i__40007_40011 = G__40023;
continue;
} else {
var msg_40024 = cljs.core.first.call(null,seq__40004_40018__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_40024);

var G__40025 = cljs.core.next.call(null,seq__40004_40018__$1);
var G__40026 = null;
var G__40027 = (0);
var G__40028 = (0);
seq__40004_40008 = G__40025;
chunk__40005_40009 = G__40026;
count__40006_40010 = G__40027;
i__40007_40011 = G__40028;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__40029){
var map__40032 = p__40029;
var map__40032__$1 = ((((!((map__40032 == null)))?((((map__40032.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40032.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40032):map__40032);
var w = map__40032__$1;
var message = cljs.core.get.call(null,map__40032__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__40044 = cljs.core.seq.call(null,plugins);
var chunk__40045 = null;
var count__40046 = (0);
var i__40047 = (0);
while(true){
if((i__40047 < count__40046)){
var vec__40048 = cljs.core._nth.call(null,chunk__40045,i__40047);
var k = cljs.core.nth.call(null,vec__40048,(0),null);
var plugin = cljs.core.nth.call(null,vec__40048,(1),null);
if(cljs.core.truth_(plugin)){
var pl_40054 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__40044,chunk__40045,count__40046,i__40047,pl_40054,vec__40048,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_40054.call(null,msg_hist);
});})(seq__40044,chunk__40045,count__40046,i__40047,pl_40054,vec__40048,k,plugin))
);
} else {
}

var G__40055 = seq__40044;
var G__40056 = chunk__40045;
var G__40057 = count__40046;
var G__40058 = (i__40047 + (1));
seq__40044 = G__40055;
chunk__40045 = G__40056;
count__40046 = G__40057;
i__40047 = G__40058;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__40044);
if(temp__4657__auto__){
var seq__40044__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40044__$1)){
var c__26381__auto__ = cljs.core.chunk_first.call(null,seq__40044__$1);
var G__40059 = cljs.core.chunk_rest.call(null,seq__40044__$1);
var G__40060 = c__26381__auto__;
var G__40061 = cljs.core.count.call(null,c__26381__auto__);
var G__40062 = (0);
seq__40044 = G__40059;
chunk__40045 = G__40060;
count__40046 = G__40061;
i__40047 = G__40062;
continue;
} else {
var vec__40051 = cljs.core.first.call(null,seq__40044__$1);
var k = cljs.core.nth.call(null,vec__40051,(0),null);
var plugin = cljs.core.nth.call(null,vec__40051,(1),null);
if(cljs.core.truth_(plugin)){
var pl_40063 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__40044,chunk__40045,count__40046,i__40047,pl_40063,vec__40051,k,plugin,seq__40044__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_40063.call(null,msg_hist);
});})(seq__40044,chunk__40045,count__40046,i__40047,pl_40063,vec__40051,k,plugin,seq__40044__$1,temp__4657__auto__))
);
} else {
}

var G__40064 = cljs.core.next.call(null,seq__40044__$1);
var G__40065 = null;
var G__40066 = (0);
var G__40067 = (0);
seq__40044 = G__40064;
chunk__40045 = G__40065;
count__40046 = G__40066;
i__40047 = G__40067;
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
var args40068 = [];
var len__26645__auto___40075 = arguments.length;
var i__26646__auto___40076 = (0);
while(true){
if((i__26646__auto___40076 < len__26645__auto___40075)){
args40068.push((arguments[i__26646__auto___40076]));

var G__40077 = (i__26646__auto___40076 + (1));
i__26646__auto___40076 = G__40077;
continue;
} else {
}
break;
}

var G__40070 = args40068.length;
switch (G__40070) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40068.length)].join('')));

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

var seq__40071_40079 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__40072_40080 = null;
var count__40073_40081 = (0);
var i__40074_40082 = (0);
while(true){
if((i__40074_40082 < count__40073_40081)){
var msg_40083 = cljs.core._nth.call(null,chunk__40072_40080,i__40074_40082);
figwheel.client.socket.handle_incoming_message.call(null,msg_40083);

var G__40084 = seq__40071_40079;
var G__40085 = chunk__40072_40080;
var G__40086 = count__40073_40081;
var G__40087 = (i__40074_40082 + (1));
seq__40071_40079 = G__40084;
chunk__40072_40080 = G__40085;
count__40073_40081 = G__40086;
i__40074_40082 = G__40087;
continue;
} else {
var temp__4657__auto___40088 = cljs.core.seq.call(null,seq__40071_40079);
if(temp__4657__auto___40088){
var seq__40071_40089__$1 = temp__4657__auto___40088;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40071_40089__$1)){
var c__26381__auto___40090 = cljs.core.chunk_first.call(null,seq__40071_40089__$1);
var G__40091 = cljs.core.chunk_rest.call(null,seq__40071_40089__$1);
var G__40092 = c__26381__auto___40090;
var G__40093 = cljs.core.count.call(null,c__26381__auto___40090);
var G__40094 = (0);
seq__40071_40079 = G__40091;
chunk__40072_40080 = G__40092;
count__40073_40081 = G__40093;
i__40074_40082 = G__40094;
continue;
} else {
var msg_40095 = cljs.core.first.call(null,seq__40071_40089__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_40095);

var G__40096 = cljs.core.next.call(null,seq__40071_40089__$1);
var G__40097 = null;
var G__40098 = (0);
var G__40099 = (0);
seq__40071_40079 = G__40096;
chunk__40072_40080 = G__40097;
count__40073_40081 = G__40098;
i__40074_40082 = G__40099;
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
var len__26645__auto___40104 = arguments.length;
var i__26646__auto___40105 = (0);
while(true){
if((i__26646__auto___40105 < len__26645__auto___40104)){
args__26652__auto__.push((arguments[i__26646__auto___40105]));

var G__40106 = (i__26646__auto___40105 + (1));
i__26646__auto___40105 = G__40106;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((0) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__26653__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__40101){
var map__40102 = p__40101;
var map__40102__$1 = ((((!((map__40102 == null)))?((((map__40102.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40102.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40102):map__40102);
var opts = map__40102__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq40100){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40100));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e40108){if((e40108 instanceof Error)){
var e = e40108;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e40108;

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
return (function (p__40112){
var map__40113 = p__40112;
var map__40113__$1 = ((((!((map__40113 == null)))?((((map__40113.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40113.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40113):map__40113);
var msg_name = cljs.core.get.call(null,map__40113__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1476574122589