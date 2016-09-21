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
var args35116 = [];
var len__23653__auto___35119 = arguments.length;
var i__23654__auto___35120 = (0);
while(true){
if((i__23654__auto___35120 < len__23653__auto___35119)){
args35116.push((arguments[i__23654__auto___35120]));

var G__35121 = (i__23654__auto___35120 + (1));
i__23654__auto___35120 = G__35121;
continue;
} else {
}
break;
}

var G__35118 = args35116.length;
switch (G__35118) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35116.length)].join('')));

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
var args__23660__auto__ = [];
var len__23653__auto___35124 = arguments.length;
var i__23654__auto___35125 = (0);
while(true){
if((i__23654__auto___35125 < len__23653__auto___35124)){
args__23660__auto__.push((arguments[i__23654__auto___35125]));

var G__35126 = (i__23654__auto___35125 + (1));
i__23654__auto___35125 = G__35126;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((0) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__23661__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq35123){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35123));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__23660__auto__ = [];
var len__23653__auto___35128 = arguments.length;
var i__23654__auto___35129 = (0);
while(true){
if((i__23654__auto___35129 < len__23653__auto___35128)){
args__23660__auto__.push((arguments[i__23654__auto___35129]));

var G__35130 = (i__23654__auto___35129 + (1));
i__23654__auto___35129 = G__35130;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((0) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__23661__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq35127){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35127));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__35131 = cljs.core._EQ_;
var expr__35132 = (function (){var or__22578__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e35135){if((e35135 instanceof Error)){
var e = e35135;
return false;
} else {
throw e35135;

}
}})();
if(cljs.core.truth_(or__22578__auto__)){
return or__22578__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__35131.call(null,"true",expr__35132))){
return true;
} else {
if(cljs.core.truth_(pred__35131.call(null,"false",expr__35132))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__35132)].join('')));
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
}catch (e35137){if((e35137 instanceof Error)){
var e = e35137;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e35137;

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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__35138){
var map__35141 = p__35138;
var map__35141__$1 = ((((!((map__35141 == null)))?((((map__35141.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35141.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35141):map__35141);
var message = cljs.core.get.call(null,map__35141__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__35141__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__22578__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__22578__auto__)){
return or__22578__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__22566__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__22566__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__22566__auto__;
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
var c__27751__auto___35303 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27751__auto___35303,ch){
return (function (){
var f__27752__auto__ = (function (){var switch__27639__auto__ = ((function (c__27751__auto___35303,ch){
return (function (state_35272){
var state_val_35273 = (state_35272[(1)]);
if((state_val_35273 === (7))){
var inst_35268 = (state_35272[(2)]);
var state_35272__$1 = state_35272;
var statearr_35274_35304 = state_35272__$1;
(statearr_35274_35304[(2)] = inst_35268);

(statearr_35274_35304[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35273 === (1))){
var state_35272__$1 = state_35272;
var statearr_35275_35305 = state_35272__$1;
(statearr_35275_35305[(2)] = null);

(statearr_35275_35305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35273 === (4))){
var inst_35225 = (state_35272[(7)]);
var inst_35225__$1 = (state_35272[(2)]);
var state_35272__$1 = (function (){var statearr_35276 = state_35272;
(statearr_35276[(7)] = inst_35225__$1);

return statearr_35276;
})();
if(cljs.core.truth_(inst_35225__$1)){
var statearr_35277_35306 = state_35272__$1;
(statearr_35277_35306[(1)] = (5));

} else {
var statearr_35278_35307 = state_35272__$1;
(statearr_35278_35307[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35273 === (15))){
var inst_35232 = (state_35272[(8)]);
var inst_35247 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35232);
var inst_35248 = cljs.core.first.call(null,inst_35247);
var inst_35249 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_35248);
var inst_35250 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_35249)].join('');
var inst_35251 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_35250);
var state_35272__$1 = state_35272;
var statearr_35279_35308 = state_35272__$1;
(statearr_35279_35308[(2)] = inst_35251);

(statearr_35279_35308[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35273 === (13))){
var inst_35256 = (state_35272[(2)]);
var state_35272__$1 = state_35272;
var statearr_35280_35309 = state_35272__$1;
(statearr_35280_35309[(2)] = inst_35256);

(statearr_35280_35309[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35273 === (6))){
var state_35272__$1 = state_35272;
var statearr_35281_35310 = state_35272__$1;
(statearr_35281_35310[(2)] = null);

(statearr_35281_35310[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35273 === (17))){
var inst_35254 = (state_35272[(2)]);
var state_35272__$1 = state_35272;
var statearr_35282_35311 = state_35272__$1;
(statearr_35282_35311[(2)] = inst_35254);

(statearr_35282_35311[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35273 === (3))){
var inst_35270 = (state_35272[(2)]);
var state_35272__$1 = state_35272;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35272__$1,inst_35270);
} else {
if((state_val_35273 === (12))){
var inst_35231 = (state_35272[(9)]);
var inst_35245 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_35231,opts);
var state_35272__$1 = state_35272;
if(cljs.core.truth_(inst_35245)){
var statearr_35283_35312 = state_35272__$1;
(statearr_35283_35312[(1)] = (15));

} else {
var statearr_35284_35313 = state_35272__$1;
(statearr_35284_35313[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35273 === (2))){
var state_35272__$1 = state_35272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35272__$1,(4),ch);
} else {
if((state_val_35273 === (11))){
var inst_35232 = (state_35272[(8)]);
var inst_35237 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35238 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_35232);
var inst_35239 = cljs.core.async.timeout.call(null,(1000));
var inst_35240 = [inst_35238,inst_35239];
var inst_35241 = (new cljs.core.PersistentVector(null,2,(5),inst_35237,inst_35240,null));
var state_35272__$1 = state_35272;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35272__$1,(14),inst_35241);
} else {
if((state_val_35273 === (9))){
var inst_35232 = (state_35272[(8)]);
var inst_35258 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_35259 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35232);
var inst_35260 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35259);
var inst_35261 = [cljs.core.str("Not loading: "),cljs.core.str(inst_35260)].join('');
var inst_35262 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_35261);
var state_35272__$1 = (function (){var statearr_35285 = state_35272;
(statearr_35285[(10)] = inst_35258);

return statearr_35285;
})();
var statearr_35286_35314 = state_35272__$1;
(statearr_35286_35314[(2)] = inst_35262);

(statearr_35286_35314[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35273 === (5))){
var inst_35225 = (state_35272[(7)]);
var inst_35227 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_35228 = (new cljs.core.PersistentArrayMap(null,2,inst_35227,null));
var inst_35229 = (new cljs.core.PersistentHashSet(null,inst_35228,null));
var inst_35230 = figwheel.client.focus_msgs.call(null,inst_35229,inst_35225);
var inst_35231 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_35230);
var inst_35232 = cljs.core.first.call(null,inst_35230);
var inst_35233 = figwheel.client.autoload_QMARK_.call(null);
var state_35272__$1 = (function (){var statearr_35287 = state_35272;
(statearr_35287[(9)] = inst_35231);

(statearr_35287[(8)] = inst_35232);

return statearr_35287;
})();
if(cljs.core.truth_(inst_35233)){
var statearr_35288_35315 = state_35272__$1;
(statearr_35288_35315[(1)] = (8));

} else {
var statearr_35289_35316 = state_35272__$1;
(statearr_35289_35316[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35273 === (14))){
var inst_35243 = (state_35272[(2)]);
var state_35272__$1 = state_35272;
var statearr_35290_35317 = state_35272__$1;
(statearr_35290_35317[(2)] = inst_35243);

(statearr_35290_35317[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35273 === (16))){
var state_35272__$1 = state_35272;
var statearr_35291_35318 = state_35272__$1;
(statearr_35291_35318[(2)] = null);

(statearr_35291_35318[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35273 === (10))){
var inst_35264 = (state_35272[(2)]);
var state_35272__$1 = (function (){var statearr_35292 = state_35272;
(statearr_35292[(11)] = inst_35264);

return statearr_35292;
})();
var statearr_35293_35319 = state_35272__$1;
(statearr_35293_35319[(2)] = null);

(statearr_35293_35319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35273 === (8))){
var inst_35231 = (state_35272[(9)]);
var inst_35235 = figwheel.client.reload_file_state_QMARK_.call(null,inst_35231,opts);
var state_35272__$1 = state_35272;
if(cljs.core.truth_(inst_35235)){
var statearr_35294_35320 = state_35272__$1;
(statearr_35294_35320[(1)] = (11));

} else {
var statearr_35295_35321 = state_35272__$1;
(statearr_35295_35321[(1)] = (12));

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
});})(c__27751__auto___35303,ch))
;
return ((function (switch__27639__auto__,c__27751__auto___35303,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__27640__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27640__auto____0 = (function (){
var statearr_35299 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35299[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27640__auto__);

(statearr_35299[(1)] = (1));

return statearr_35299;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27640__auto____1 = (function (state_35272){
while(true){
var ret_value__27641__auto__ = (function (){try{while(true){
var result__27642__auto__ = switch__27639__auto__.call(null,state_35272);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27642__auto__;
}
break;
}
}catch (e35300){if((e35300 instanceof Object)){
var ex__27643__auto__ = e35300;
var statearr_35301_35322 = state_35272;
(statearr_35301_35322[(5)] = ex__27643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35300;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35323 = state_35272;
state_35272 = G__35323;
continue;
} else {
return ret_value__27641__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__27640__auto__ = function(state_35272){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27640__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27640__auto____1.call(this,state_35272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__27640__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27640__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27640__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27640__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27640__auto__;
})()
;})(switch__27639__auto__,c__27751__auto___35303,ch))
})();
var state__27753__auto__ = (function (){var statearr_35302 = f__27752__auto__.call(null);
(statearr_35302[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27751__auto___35303);

return statearr_35302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27753__auto__);
});})(c__27751__auto___35303,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__35324_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__35324_SHARP_));
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
var base_path_35327 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_35327){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e35326){if((e35326 instanceof Error)){
var e = e35326;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_35327], null));
} else {
var e = e35326;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_35327))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__35328){
var map__35337 = p__35328;
var map__35337__$1 = ((((!((map__35337 == null)))?((((map__35337.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35337.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35337):map__35337);
var opts = map__35337__$1;
var build_id = cljs.core.get.call(null,map__35337__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__35337,map__35337__$1,opts,build_id){
return (function (p__35339){
var vec__35340 = p__35339;
var seq__35341 = cljs.core.seq.call(null,vec__35340);
var first__35342 = cljs.core.first.call(null,seq__35341);
var seq__35341__$1 = cljs.core.next.call(null,seq__35341);
var map__35343 = first__35342;
var map__35343__$1 = ((((!((map__35343 == null)))?((((map__35343.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35343.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35343):map__35343);
var msg = map__35343__$1;
var msg_name = cljs.core.get.call(null,map__35343__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35341__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__35340,seq__35341,first__35342,seq__35341__$1,map__35343,map__35343__$1,msg,msg_name,_,map__35337,map__35337__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__35340,seq__35341,first__35342,seq__35341__$1,map__35343,map__35343__$1,msg,msg_name,_,map__35337,map__35337__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__35337,map__35337__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__35351){
var vec__35352 = p__35351;
var seq__35353 = cljs.core.seq.call(null,vec__35352);
var first__35354 = cljs.core.first.call(null,seq__35353);
var seq__35353__$1 = cljs.core.next.call(null,seq__35353);
var map__35355 = first__35354;
var map__35355__$1 = ((((!((map__35355 == null)))?((((map__35355.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35355.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35355):map__35355);
var msg = map__35355__$1;
var msg_name = cljs.core.get.call(null,map__35355__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35353__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__35357){
var map__35369 = p__35357;
var map__35369__$1 = ((((!((map__35369 == null)))?((((map__35369.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35369.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35369):map__35369);
var on_compile_warning = cljs.core.get.call(null,map__35369__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__35369__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__35369,map__35369__$1,on_compile_warning,on_compile_fail){
return (function (p__35371){
var vec__35372 = p__35371;
var seq__35373 = cljs.core.seq.call(null,vec__35372);
var first__35374 = cljs.core.first.call(null,seq__35373);
var seq__35373__$1 = cljs.core.next.call(null,seq__35373);
var map__35375 = first__35374;
var map__35375__$1 = ((((!((map__35375 == null)))?((((map__35375.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35375.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35375):map__35375);
var msg = map__35375__$1;
var msg_name = cljs.core.get.call(null,map__35375__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35373__$1;
var pred__35377 = cljs.core._EQ_;
var expr__35378 = msg_name;
if(cljs.core.truth_(pred__35377.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__35378))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__35377.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__35378))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__35369,map__35369__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__27751__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27751__auto__,msg_hist,msg_names,msg){
return (function (){
var f__27752__auto__ = (function (){var switch__27639__auto__ = ((function (c__27751__auto__,msg_hist,msg_names,msg){
return (function (state_35586){
var state_val_35587 = (state_35586[(1)]);
if((state_val_35587 === (7))){
var inst_35514 = (state_35586[(2)]);
var state_35586__$1 = state_35586;
if(cljs.core.truth_(inst_35514)){
var statearr_35588_35634 = state_35586__$1;
(statearr_35588_35634[(1)] = (8));

} else {
var statearr_35589_35635 = state_35586__$1;
(statearr_35589_35635[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35587 === (20))){
var inst_35580 = (state_35586[(2)]);
var state_35586__$1 = state_35586;
var statearr_35590_35636 = state_35586__$1;
(statearr_35590_35636[(2)] = inst_35580);

(statearr_35590_35636[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35587 === (27))){
var inst_35576 = (state_35586[(2)]);
var state_35586__$1 = state_35586;
var statearr_35591_35637 = state_35586__$1;
(statearr_35591_35637[(2)] = inst_35576);

(statearr_35591_35637[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35587 === (1))){
var inst_35507 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_35586__$1 = state_35586;
if(cljs.core.truth_(inst_35507)){
var statearr_35592_35638 = state_35586__$1;
(statearr_35592_35638[(1)] = (2));

} else {
var statearr_35593_35639 = state_35586__$1;
(statearr_35593_35639[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35587 === (24))){
var inst_35578 = (state_35586[(2)]);
var state_35586__$1 = state_35586;
var statearr_35594_35640 = state_35586__$1;
(statearr_35594_35640[(2)] = inst_35578);

(statearr_35594_35640[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35587 === (4))){
var inst_35584 = (state_35586[(2)]);
var state_35586__$1 = state_35586;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35586__$1,inst_35584);
} else {
if((state_val_35587 === (15))){
var inst_35582 = (state_35586[(2)]);
var state_35586__$1 = state_35586;
var statearr_35595_35641 = state_35586__$1;
(statearr_35595_35641[(2)] = inst_35582);

(statearr_35595_35641[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35587 === (21))){
var inst_35541 = (state_35586[(2)]);
var state_35586__$1 = state_35586;
var statearr_35596_35642 = state_35586__$1;
(statearr_35596_35642[(2)] = inst_35541);

(statearr_35596_35642[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35587 === (31))){
var inst_35565 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_35586__$1 = state_35586;
if(cljs.core.truth_(inst_35565)){
var statearr_35597_35643 = state_35586__$1;
(statearr_35597_35643[(1)] = (34));

} else {
var statearr_35598_35644 = state_35586__$1;
(statearr_35598_35644[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35587 === (32))){
var inst_35574 = (state_35586[(2)]);
var state_35586__$1 = state_35586;
var statearr_35599_35645 = state_35586__$1;
(statearr_35599_35645[(2)] = inst_35574);

(statearr_35599_35645[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35587 === (33))){
var inst_35563 = (state_35586[(2)]);
var state_35586__$1 = state_35586;
var statearr_35600_35646 = state_35586__$1;
(statearr_35600_35646[(2)] = inst_35563);

(statearr_35600_35646[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35587 === (13))){
var inst_35528 = figwheel.client.heads_up.clear.call(null);
var state_35586__$1 = state_35586;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35586__$1,(16),inst_35528);
} else {
if((state_val_35587 === (22))){
var inst_35545 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35546 = figwheel.client.heads_up.append_warning_message.call(null,inst_35545);
var state_35586__$1 = state_35586;
var statearr_35601_35647 = state_35586__$1;
(statearr_35601_35647[(2)] = inst_35546);

(statearr_35601_35647[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35587 === (36))){
var inst_35572 = (state_35586[(2)]);
var state_35586__$1 = state_35586;
var statearr_35602_35648 = state_35586__$1;
(statearr_35602_35648[(2)] = inst_35572);

(statearr_35602_35648[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35587 === (29))){
var inst_35556 = (state_35586[(2)]);
var state_35586__$1 = state_35586;
var statearr_35603_35649 = state_35586__$1;
(statearr_35603_35649[(2)] = inst_35556);

(statearr_35603_35649[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35587 === (6))){
var inst_35509 = (state_35586[(7)]);
var state_35586__$1 = state_35586;
var statearr_35604_35650 = state_35586__$1;
(statearr_35604_35650[(2)] = inst_35509);

(statearr_35604_35650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35587 === (28))){
var inst_35552 = (state_35586[(2)]);
var inst_35553 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35554 = figwheel.client.heads_up.display_warning.call(null,inst_35553);
var state_35586__$1 = (function (){var statearr_35605 = state_35586;
(statearr_35605[(8)] = inst_35552);

return statearr_35605;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35586__$1,(29),inst_35554);
} else {
if((state_val_35587 === (25))){
var inst_35550 = figwheel.client.heads_up.clear.call(null);
var state_35586__$1 = state_35586;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35586__$1,(28),inst_35550);
} else {
if((state_val_35587 === (34))){
var inst_35567 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35586__$1 = state_35586;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35586__$1,(37),inst_35567);
} else {
if((state_val_35587 === (17))){
var inst_35534 = (state_35586[(2)]);
var state_35586__$1 = state_35586;
var statearr_35606_35651 = state_35586__$1;
(statearr_35606_35651[(2)] = inst_35534);

(statearr_35606_35651[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35587 === (3))){
var inst_35526 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_35586__$1 = state_35586;
if(cljs.core.truth_(inst_35526)){
var statearr_35607_35652 = state_35586__$1;
(statearr_35607_35652[(1)] = (13));

} else {
var statearr_35608_35653 = state_35586__$1;
(statearr_35608_35653[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35587 === (12))){
var inst_35522 = (state_35586[(2)]);
var state_35586__$1 = state_35586;
var statearr_35609_35654 = state_35586__$1;
(statearr_35609_35654[(2)] = inst_35522);

(statearr_35609_35654[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35587 === (2))){
var inst_35509 = (state_35586[(7)]);
var inst_35509__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_35586__$1 = (function (){var statearr_35610 = state_35586;
(statearr_35610[(7)] = inst_35509__$1);

return statearr_35610;
})();
if(cljs.core.truth_(inst_35509__$1)){
var statearr_35611_35655 = state_35586__$1;
(statearr_35611_35655[(1)] = (5));

} else {
var statearr_35612_35656 = state_35586__$1;
(statearr_35612_35656[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35587 === (23))){
var inst_35548 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_35586__$1 = state_35586;
if(cljs.core.truth_(inst_35548)){
var statearr_35613_35657 = state_35586__$1;
(statearr_35613_35657[(1)] = (25));

} else {
var statearr_35614_35658 = state_35586__$1;
(statearr_35614_35658[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35587 === (35))){
var state_35586__$1 = state_35586;
var statearr_35615_35659 = state_35586__$1;
(statearr_35615_35659[(2)] = null);

(statearr_35615_35659[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35587 === (19))){
var inst_35543 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_35586__$1 = state_35586;
if(cljs.core.truth_(inst_35543)){
var statearr_35616_35660 = state_35586__$1;
(statearr_35616_35660[(1)] = (22));

} else {
var statearr_35617_35661 = state_35586__$1;
(statearr_35617_35661[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35587 === (11))){
var inst_35518 = (state_35586[(2)]);
var state_35586__$1 = state_35586;
var statearr_35618_35662 = state_35586__$1;
(statearr_35618_35662[(2)] = inst_35518);

(statearr_35618_35662[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35587 === (9))){
var inst_35520 = figwheel.client.heads_up.clear.call(null);
var state_35586__$1 = state_35586;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35586__$1,(12),inst_35520);
} else {
if((state_val_35587 === (5))){
var inst_35511 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_35586__$1 = state_35586;
var statearr_35619_35663 = state_35586__$1;
(statearr_35619_35663[(2)] = inst_35511);

(statearr_35619_35663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35587 === (14))){
var inst_35536 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_35586__$1 = state_35586;
if(cljs.core.truth_(inst_35536)){
var statearr_35620_35664 = state_35586__$1;
(statearr_35620_35664[(1)] = (18));

} else {
var statearr_35621_35665 = state_35586__$1;
(statearr_35621_35665[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35587 === (26))){
var inst_35558 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_35586__$1 = state_35586;
if(cljs.core.truth_(inst_35558)){
var statearr_35622_35666 = state_35586__$1;
(statearr_35622_35666[(1)] = (30));

} else {
var statearr_35623_35667 = state_35586__$1;
(statearr_35623_35667[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35587 === (16))){
var inst_35530 = (state_35586[(2)]);
var inst_35531 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35532 = figwheel.client.heads_up.display_exception.call(null,inst_35531);
var state_35586__$1 = (function (){var statearr_35624 = state_35586;
(statearr_35624[(9)] = inst_35530);

return statearr_35624;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35586__$1,(17),inst_35532);
} else {
if((state_val_35587 === (30))){
var inst_35560 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35561 = figwheel.client.heads_up.display_warning.call(null,inst_35560);
var state_35586__$1 = state_35586;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35586__$1,(33),inst_35561);
} else {
if((state_val_35587 === (10))){
var inst_35524 = (state_35586[(2)]);
var state_35586__$1 = state_35586;
var statearr_35625_35668 = state_35586__$1;
(statearr_35625_35668[(2)] = inst_35524);

(statearr_35625_35668[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35587 === (18))){
var inst_35538 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35539 = figwheel.client.heads_up.display_exception.call(null,inst_35538);
var state_35586__$1 = state_35586;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35586__$1,(21),inst_35539);
} else {
if((state_val_35587 === (37))){
var inst_35569 = (state_35586[(2)]);
var state_35586__$1 = state_35586;
var statearr_35626_35669 = state_35586__$1;
(statearr_35626_35669[(2)] = inst_35569);

(statearr_35626_35669[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35587 === (8))){
var inst_35516 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35586__$1 = state_35586;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35586__$1,(11),inst_35516);
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
});})(c__27751__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__27639__auto__,c__27751__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27640__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27640__auto____0 = (function (){
var statearr_35630 = [null,null,null,null,null,null,null,null,null,null];
(statearr_35630[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27640__auto__);

(statearr_35630[(1)] = (1));

return statearr_35630;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27640__auto____1 = (function (state_35586){
while(true){
var ret_value__27641__auto__ = (function (){try{while(true){
var result__27642__auto__ = switch__27639__auto__.call(null,state_35586);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27642__auto__;
}
break;
}
}catch (e35631){if((e35631 instanceof Object)){
var ex__27643__auto__ = e35631;
var statearr_35632_35670 = state_35586;
(statearr_35632_35670[(5)] = ex__27643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35586);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35631;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35671 = state_35586;
state_35586 = G__35671;
continue;
} else {
return ret_value__27641__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27640__auto__ = function(state_35586){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27640__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27640__auto____1.call(this,state_35586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27640__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27640__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27640__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27640__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27640__auto__;
})()
;})(switch__27639__auto__,c__27751__auto__,msg_hist,msg_names,msg))
})();
var state__27753__auto__ = (function (){var statearr_35633 = f__27752__auto__.call(null);
(statearr_35633[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27751__auto__);

return statearr_35633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27753__auto__);
});})(c__27751__auto__,msg_hist,msg_names,msg))
);

return c__27751__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27751__auto___35734 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27751__auto___35734,ch){
return (function (){
var f__27752__auto__ = (function (){var switch__27639__auto__ = ((function (c__27751__auto___35734,ch){
return (function (state_35717){
var state_val_35718 = (state_35717[(1)]);
if((state_val_35718 === (1))){
var state_35717__$1 = state_35717;
var statearr_35719_35735 = state_35717__$1;
(statearr_35719_35735[(2)] = null);

(statearr_35719_35735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35718 === (2))){
var state_35717__$1 = state_35717;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35717__$1,(4),ch);
} else {
if((state_val_35718 === (3))){
var inst_35715 = (state_35717[(2)]);
var state_35717__$1 = state_35717;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35717__$1,inst_35715);
} else {
if((state_val_35718 === (4))){
var inst_35705 = (state_35717[(7)]);
var inst_35705__$1 = (state_35717[(2)]);
var state_35717__$1 = (function (){var statearr_35720 = state_35717;
(statearr_35720[(7)] = inst_35705__$1);

return statearr_35720;
})();
if(cljs.core.truth_(inst_35705__$1)){
var statearr_35721_35736 = state_35717__$1;
(statearr_35721_35736[(1)] = (5));

} else {
var statearr_35722_35737 = state_35717__$1;
(statearr_35722_35737[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35718 === (5))){
var inst_35705 = (state_35717[(7)]);
var inst_35707 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_35705);
var state_35717__$1 = state_35717;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35717__$1,(8),inst_35707);
} else {
if((state_val_35718 === (6))){
var state_35717__$1 = state_35717;
var statearr_35723_35738 = state_35717__$1;
(statearr_35723_35738[(2)] = null);

(statearr_35723_35738[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35718 === (7))){
var inst_35713 = (state_35717[(2)]);
var state_35717__$1 = state_35717;
var statearr_35724_35739 = state_35717__$1;
(statearr_35724_35739[(2)] = inst_35713);

(statearr_35724_35739[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35718 === (8))){
var inst_35709 = (state_35717[(2)]);
var state_35717__$1 = (function (){var statearr_35725 = state_35717;
(statearr_35725[(8)] = inst_35709);

return statearr_35725;
})();
var statearr_35726_35740 = state_35717__$1;
(statearr_35726_35740[(2)] = null);

(statearr_35726_35740[(1)] = (2));


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
});})(c__27751__auto___35734,ch))
;
return ((function (switch__27639__auto__,c__27751__auto___35734,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__27640__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27640__auto____0 = (function (){
var statearr_35730 = [null,null,null,null,null,null,null,null,null];
(statearr_35730[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27640__auto__);

(statearr_35730[(1)] = (1));

return statearr_35730;
});
var figwheel$client$heads_up_plugin_$_state_machine__27640__auto____1 = (function (state_35717){
while(true){
var ret_value__27641__auto__ = (function (){try{while(true){
var result__27642__auto__ = switch__27639__auto__.call(null,state_35717);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27642__auto__;
}
break;
}
}catch (e35731){if((e35731 instanceof Object)){
var ex__27643__auto__ = e35731;
var statearr_35732_35741 = state_35717;
(statearr_35732_35741[(5)] = ex__27643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35717);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35731;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35742 = state_35717;
state_35717 = G__35742;
continue;
} else {
return ret_value__27641__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__27640__auto__ = function(state_35717){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27640__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27640__auto____1.call(this,state_35717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__27640__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27640__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27640__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27640__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27640__auto__;
})()
;})(switch__27639__auto__,c__27751__auto___35734,ch))
})();
var state__27753__auto__ = (function (){var statearr_35733 = f__27752__auto__.call(null);
(statearr_35733[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27751__auto___35734);

return statearr_35733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27753__auto__);
});})(c__27751__auto___35734,ch))
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
var c__27751__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27751__auto__){
return (function (){
var f__27752__auto__ = (function (){var switch__27639__auto__ = ((function (c__27751__auto__){
return (function (state_35763){
var state_val_35764 = (state_35763[(1)]);
if((state_val_35764 === (1))){
var inst_35758 = cljs.core.async.timeout.call(null,(3000));
var state_35763__$1 = state_35763;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35763__$1,(2),inst_35758);
} else {
if((state_val_35764 === (2))){
var inst_35760 = (state_35763[(2)]);
var inst_35761 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_35763__$1 = (function (){var statearr_35765 = state_35763;
(statearr_35765[(7)] = inst_35760);

return statearr_35765;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35763__$1,inst_35761);
} else {
return null;
}
}
});})(c__27751__auto__))
;
return ((function (switch__27639__auto__,c__27751__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__27640__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__27640__auto____0 = (function (){
var statearr_35769 = [null,null,null,null,null,null,null,null];
(statearr_35769[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27640__auto__);

(statearr_35769[(1)] = (1));

return statearr_35769;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27640__auto____1 = (function (state_35763){
while(true){
var ret_value__27641__auto__ = (function (){try{while(true){
var result__27642__auto__ = switch__27639__auto__.call(null,state_35763);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27642__auto__;
}
break;
}
}catch (e35770){if((e35770 instanceof Object)){
var ex__27643__auto__ = e35770;
var statearr_35771_35773 = state_35763;
(statearr_35771_35773[(5)] = ex__27643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35763);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35770;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35774 = state_35763;
state_35763 = G__35774;
continue;
} else {
return ret_value__27641__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__27640__auto__ = function(state_35763){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27640__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27640__auto____1.call(this,state_35763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__27640__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27640__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27640__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27640__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27640__auto__;
})()
;})(switch__27639__auto__,c__27751__auto__))
})();
var state__27753__auto__ = (function (){var statearr_35772 = f__27752__auto__.call(null);
(statearr_35772[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27751__auto__);

return statearr_35772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27753__auto__);
});})(c__27751__auto__))
);

return c__27751__auto__;
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
var c__27751__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27751__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__27752__auto__ = (function (){var switch__27639__auto__ = ((function (c__27751__auto__,figwheel_version,temp__4657__auto__){
return (function (state_35797){
var state_val_35798 = (state_35797[(1)]);
if((state_val_35798 === (1))){
var inst_35791 = cljs.core.async.timeout.call(null,(2000));
var state_35797__$1 = state_35797;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35797__$1,(2),inst_35791);
} else {
if((state_val_35798 === (2))){
var inst_35793 = (state_35797[(2)]);
var inst_35794 = [cljs.core.str("Figwheel Client Version \""),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("\" is not equal to "),cljs.core.str("Figwheel Sidecar Version \""),cljs.core.str(figwheel_version),cljs.core.str("\""),cljs.core.str(".  Shutting down Websocket Connection!")].join('');
var inst_35795 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_35794);
var state_35797__$1 = (function (){var statearr_35799 = state_35797;
(statearr_35799[(7)] = inst_35793);

return statearr_35799;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35797__$1,inst_35795);
} else {
return null;
}
}
});})(c__27751__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__27639__auto__,c__27751__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27640__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27640__auto____0 = (function (){
var statearr_35803 = [null,null,null,null,null,null,null,null];
(statearr_35803[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27640__auto__);

(statearr_35803[(1)] = (1));

return statearr_35803;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27640__auto____1 = (function (state_35797){
while(true){
var ret_value__27641__auto__ = (function (){try{while(true){
var result__27642__auto__ = switch__27639__auto__.call(null,state_35797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27642__auto__;
}
break;
}
}catch (e35804){if((e35804 instanceof Object)){
var ex__27643__auto__ = e35804;
var statearr_35805_35807 = state_35797;
(statearr_35805_35807[(5)] = ex__27643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35804;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35808 = state_35797;
state_35797 = G__35808;
continue;
} else {
return ret_value__27641__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27640__auto__ = function(state_35797){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27640__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27640__auto____1.call(this,state_35797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27640__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27640__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27640__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27640__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27640__auto__;
})()
;})(switch__27639__auto__,c__27751__auto__,figwheel_version,temp__4657__auto__))
})();
var state__27753__auto__ = (function (){var statearr_35806 = f__27752__auto__.call(null);
(statearr_35806[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27751__auto__);

return statearr_35806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27753__auto__);
});})(c__27751__auto__,figwheel_version,temp__4657__auto__))
);

return c__27751__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__35809){
var map__35813 = p__35809;
var map__35813__$1 = ((((!((map__35813 == null)))?((((map__35813.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35813.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35813):map__35813);
var file = cljs.core.get.call(null,map__35813__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__35813__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__35813__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__35815 = "";
var G__35815__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__35815),cljs.core.str("file "),cljs.core.str(file)].join(''):G__35815);
var G__35815__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__35815__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__35815__$1);
if(cljs.core.truth_((function (){var and__22566__auto__ = line;
if(cljs.core.truth_(and__22566__auto__)){
return column;
} else {
return and__22566__auto__;
}
})())){
return [cljs.core.str(G__35815__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__35815__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__35816){
var map__35823 = p__35816;
var map__35823__$1 = ((((!((map__35823 == null)))?((((map__35823.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35823.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35823):map__35823);
var ed = map__35823__$1;
var formatted_exception = cljs.core.get.call(null,map__35823__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__35823__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__35823__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__35825_35829 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__35826_35830 = null;
var count__35827_35831 = (0);
var i__35828_35832 = (0);
while(true){
if((i__35828_35832 < count__35827_35831)){
var msg_35833 = cljs.core._nth.call(null,chunk__35826_35830,i__35828_35832);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35833);

var G__35834 = seq__35825_35829;
var G__35835 = chunk__35826_35830;
var G__35836 = count__35827_35831;
var G__35837 = (i__35828_35832 + (1));
seq__35825_35829 = G__35834;
chunk__35826_35830 = G__35835;
count__35827_35831 = G__35836;
i__35828_35832 = G__35837;
continue;
} else {
var temp__4657__auto___35838 = cljs.core.seq.call(null,seq__35825_35829);
if(temp__4657__auto___35838){
var seq__35825_35839__$1 = temp__4657__auto___35838;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35825_35839__$1)){
var c__23389__auto___35840 = cljs.core.chunk_first.call(null,seq__35825_35839__$1);
var G__35841 = cljs.core.chunk_rest.call(null,seq__35825_35839__$1);
var G__35842 = c__23389__auto___35840;
var G__35843 = cljs.core.count.call(null,c__23389__auto___35840);
var G__35844 = (0);
seq__35825_35829 = G__35841;
chunk__35826_35830 = G__35842;
count__35827_35831 = G__35843;
i__35828_35832 = G__35844;
continue;
} else {
var msg_35845 = cljs.core.first.call(null,seq__35825_35839__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35845);

var G__35846 = cljs.core.next.call(null,seq__35825_35839__$1);
var G__35847 = null;
var G__35848 = (0);
var G__35849 = (0);
seq__35825_35829 = G__35846;
chunk__35826_35830 = G__35847;
count__35827_35831 = G__35848;
i__35828_35832 = G__35849;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__35850){
var map__35853 = p__35850;
var map__35853__$1 = ((((!((map__35853 == null)))?((((map__35853.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35853.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35853):map__35853);
var w = map__35853__$1;
var message = cljs.core.get.call(null,map__35853__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__22566__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__22566__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__22566__auto__;
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
var seq__35865 = cljs.core.seq.call(null,plugins);
var chunk__35866 = null;
var count__35867 = (0);
var i__35868 = (0);
while(true){
if((i__35868 < count__35867)){
var vec__35869 = cljs.core._nth.call(null,chunk__35866,i__35868);
var k = cljs.core.nth.call(null,vec__35869,(0),null);
var plugin = cljs.core.nth.call(null,vec__35869,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35875 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35865,chunk__35866,count__35867,i__35868,pl_35875,vec__35869,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_35875.call(null,msg_hist);
});})(seq__35865,chunk__35866,count__35867,i__35868,pl_35875,vec__35869,k,plugin))
);
} else {
}

var G__35876 = seq__35865;
var G__35877 = chunk__35866;
var G__35878 = count__35867;
var G__35879 = (i__35868 + (1));
seq__35865 = G__35876;
chunk__35866 = G__35877;
count__35867 = G__35878;
i__35868 = G__35879;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35865);
if(temp__4657__auto__){
var seq__35865__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35865__$1)){
var c__23389__auto__ = cljs.core.chunk_first.call(null,seq__35865__$1);
var G__35880 = cljs.core.chunk_rest.call(null,seq__35865__$1);
var G__35881 = c__23389__auto__;
var G__35882 = cljs.core.count.call(null,c__23389__auto__);
var G__35883 = (0);
seq__35865 = G__35880;
chunk__35866 = G__35881;
count__35867 = G__35882;
i__35868 = G__35883;
continue;
} else {
var vec__35872 = cljs.core.first.call(null,seq__35865__$1);
var k = cljs.core.nth.call(null,vec__35872,(0),null);
var plugin = cljs.core.nth.call(null,vec__35872,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35884 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35865,chunk__35866,count__35867,i__35868,pl_35884,vec__35872,k,plugin,seq__35865__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_35884.call(null,msg_hist);
});})(seq__35865,chunk__35866,count__35867,i__35868,pl_35884,vec__35872,k,plugin,seq__35865__$1,temp__4657__auto__))
);
} else {
}

var G__35885 = cljs.core.next.call(null,seq__35865__$1);
var G__35886 = null;
var G__35887 = (0);
var G__35888 = (0);
seq__35865 = G__35885;
chunk__35866 = G__35886;
count__35867 = G__35887;
i__35868 = G__35888;
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
var args35889 = [];
var len__23653__auto___35896 = arguments.length;
var i__23654__auto___35897 = (0);
while(true){
if((i__23654__auto___35897 < len__23653__auto___35896)){
args35889.push((arguments[i__23654__auto___35897]));

var G__35898 = (i__23654__auto___35897 + (1));
i__23654__auto___35897 = G__35898;
continue;
} else {
}
break;
}

var G__35891 = args35889.length;
switch (G__35891) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35889.length)].join('')));

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

var seq__35892_35900 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__35893_35901 = null;
var count__35894_35902 = (0);
var i__35895_35903 = (0);
while(true){
if((i__35895_35903 < count__35894_35902)){
var msg_35904 = cljs.core._nth.call(null,chunk__35893_35901,i__35895_35903);
figwheel.client.socket.handle_incoming_message.call(null,msg_35904);

var G__35905 = seq__35892_35900;
var G__35906 = chunk__35893_35901;
var G__35907 = count__35894_35902;
var G__35908 = (i__35895_35903 + (1));
seq__35892_35900 = G__35905;
chunk__35893_35901 = G__35906;
count__35894_35902 = G__35907;
i__35895_35903 = G__35908;
continue;
} else {
var temp__4657__auto___35909 = cljs.core.seq.call(null,seq__35892_35900);
if(temp__4657__auto___35909){
var seq__35892_35910__$1 = temp__4657__auto___35909;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35892_35910__$1)){
var c__23389__auto___35911 = cljs.core.chunk_first.call(null,seq__35892_35910__$1);
var G__35912 = cljs.core.chunk_rest.call(null,seq__35892_35910__$1);
var G__35913 = c__23389__auto___35911;
var G__35914 = cljs.core.count.call(null,c__23389__auto___35911);
var G__35915 = (0);
seq__35892_35900 = G__35912;
chunk__35893_35901 = G__35913;
count__35894_35902 = G__35914;
i__35895_35903 = G__35915;
continue;
} else {
var msg_35916 = cljs.core.first.call(null,seq__35892_35910__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_35916);

var G__35917 = cljs.core.next.call(null,seq__35892_35910__$1);
var G__35918 = null;
var G__35919 = (0);
var G__35920 = (0);
seq__35892_35900 = G__35917;
chunk__35893_35901 = G__35918;
count__35894_35902 = G__35919;
i__35895_35903 = G__35920;
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
var args__23660__auto__ = [];
var len__23653__auto___35925 = arguments.length;
var i__23654__auto___35926 = (0);
while(true){
if((i__23654__auto___35926 < len__23653__auto___35925)){
args__23660__auto__.push((arguments[i__23654__auto___35926]));

var G__35927 = (i__23654__auto___35926 + (1));
i__23654__auto___35926 = G__35927;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((0) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__23661__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__35922){
var map__35923 = p__35922;
var map__35923__$1 = ((((!((map__35923 == null)))?((((map__35923.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35923.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35923):map__35923);
var opts = map__35923__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq35921){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35921));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e35929){if((e35929 instanceof Error)){
var e = e35929;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e35929;

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
return (function (p__35933){
var map__35934 = p__35933;
var map__35934__$1 = ((((!((map__35934 == null)))?((((map__35934.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35934.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35934):map__35934);
var msg_name = cljs.core.get.call(null,map__35934__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1474484614458