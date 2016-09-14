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
var args35087 = [];
var len__23653__auto___35090 = arguments.length;
var i__23654__auto___35091 = (0);
while(true){
if((i__23654__auto___35091 < len__23653__auto___35090)){
args35087.push((arguments[i__23654__auto___35091]));

var G__35092 = (i__23654__auto___35091 + (1));
i__23654__auto___35091 = G__35092;
continue;
} else {
}
break;
}

var G__35089 = args35087.length;
switch (G__35089) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35087.length)].join('')));

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
var len__23653__auto___35095 = arguments.length;
var i__23654__auto___35096 = (0);
while(true){
if((i__23654__auto___35096 < len__23653__auto___35095)){
args__23660__auto__.push((arguments[i__23654__auto___35096]));

var G__35097 = (i__23654__auto___35096 + (1));
i__23654__auto___35096 = G__35097;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq35094){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35094));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__23660__auto__ = [];
var len__23653__auto___35099 = arguments.length;
var i__23654__auto___35100 = (0);
while(true){
if((i__23654__auto___35100 < len__23653__auto___35099)){
args__23660__auto__.push((arguments[i__23654__auto___35100]));

var G__35101 = (i__23654__auto___35100 + (1));
i__23654__auto___35100 = G__35101;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq35098){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35098));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__35102 = cljs.core._EQ_;
var expr__35103 = (function (){var or__22578__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e35106){if((e35106 instanceof Error)){
var e = e35106;
return false;
} else {
throw e35106;

}
}})();
if(cljs.core.truth_(or__22578__auto__)){
return or__22578__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__35102.call(null,"true",expr__35103))){
return true;
} else {
if(cljs.core.truth_(pred__35102.call(null,"false",expr__35103))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__35103)].join('')));
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
}catch (e35108){if((e35108 instanceof Error)){
var e = e35108;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e35108;

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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__35109){
var map__35112 = p__35109;
var map__35112__$1 = ((((!((map__35112 == null)))?((((map__35112.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35112.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35112):map__35112);
var message = cljs.core.get.call(null,map__35112__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__35112__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__27722__auto___35274 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27722__auto___35274,ch){
return (function (){
var f__27723__auto__ = (function (){var switch__27610__auto__ = ((function (c__27722__auto___35274,ch){
return (function (state_35243){
var state_val_35244 = (state_35243[(1)]);
if((state_val_35244 === (7))){
var inst_35239 = (state_35243[(2)]);
var state_35243__$1 = state_35243;
var statearr_35245_35275 = state_35243__$1;
(statearr_35245_35275[(2)] = inst_35239);

(statearr_35245_35275[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (1))){
var state_35243__$1 = state_35243;
var statearr_35246_35276 = state_35243__$1;
(statearr_35246_35276[(2)] = null);

(statearr_35246_35276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (4))){
var inst_35196 = (state_35243[(7)]);
var inst_35196__$1 = (state_35243[(2)]);
var state_35243__$1 = (function (){var statearr_35247 = state_35243;
(statearr_35247[(7)] = inst_35196__$1);

return statearr_35247;
})();
if(cljs.core.truth_(inst_35196__$1)){
var statearr_35248_35277 = state_35243__$1;
(statearr_35248_35277[(1)] = (5));

} else {
var statearr_35249_35278 = state_35243__$1;
(statearr_35249_35278[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (15))){
var inst_35203 = (state_35243[(8)]);
var inst_35218 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35203);
var inst_35219 = cljs.core.first.call(null,inst_35218);
var inst_35220 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_35219);
var inst_35221 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_35220)].join('');
var inst_35222 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_35221);
var state_35243__$1 = state_35243;
var statearr_35250_35279 = state_35243__$1;
(statearr_35250_35279[(2)] = inst_35222);

(statearr_35250_35279[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (13))){
var inst_35227 = (state_35243[(2)]);
var state_35243__$1 = state_35243;
var statearr_35251_35280 = state_35243__$1;
(statearr_35251_35280[(2)] = inst_35227);

(statearr_35251_35280[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (6))){
var state_35243__$1 = state_35243;
var statearr_35252_35281 = state_35243__$1;
(statearr_35252_35281[(2)] = null);

(statearr_35252_35281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (17))){
var inst_35225 = (state_35243[(2)]);
var state_35243__$1 = state_35243;
var statearr_35253_35282 = state_35243__$1;
(statearr_35253_35282[(2)] = inst_35225);

(statearr_35253_35282[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (3))){
var inst_35241 = (state_35243[(2)]);
var state_35243__$1 = state_35243;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35243__$1,inst_35241);
} else {
if((state_val_35244 === (12))){
var inst_35202 = (state_35243[(9)]);
var inst_35216 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_35202,opts);
var state_35243__$1 = state_35243;
if(cljs.core.truth_(inst_35216)){
var statearr_35254_35283 = state_35243__$1;
(statearr_35254_35283[(1)] = (15));

} else {
var statearr_35255_35284 = state_35243__$1;
(statearr_35255_35284[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (2))){
var state_35243__$1 = state_35243;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35243__$1,(4),ch);
} else {
if((state_val_35244 === (11))){
var inst_35203 = (state_35243[(8)]);
var inst_35208 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35209 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_35203);
var inst_35210 = cljs.core.async.timeout.call(null,(1000));
var inst_35211 = [inst_35209,inst_35210];
var inst_35212 = (new cljs.core.PersistentVector(null,2,(5),inst_35208,inst_35211,null));
var state_35243__$1 = state_35243;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35243__$1,(14),inst_35212);
} else {
if((state_val_35244 === (9))){
var inst_35203 = (state_35243[(8)]);
var inst_35229 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_35230 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35203);
var inst_35231 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35230);
var inst_35232 = [cljs.core.str("Not loading: "),cljs.core.str(inst_35231)].join('');
var inst_35233 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_35232);
var state_35243__$1 = (function (){var statearr_35256 = state_35243;
(statearr_35256[(10)] = inst_35229);

return statearr_35256;
})();
var statearr_35257_35285 = state_35243__$1;
(statearr_35257_35285[(2)] = inst_35233);

(statearr_35257_35285[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (5))){
var inst_35196 = (state_35243[(7)]);
var inst_35198 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_35199 = (new cljs.core.PersistentArrayMap(null,2,inst_35198,null));
var inst_35200 = (new cljs.core.PersistentHashSet(null,inst_35199,null));
var inst_35201 = figwheel.client.focus_msgs.call(null,inst_35200,inst_35196);
var inst_35202 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_35201);
var inst_35203 = cljs.core.first.call(null,inst_35201);
var inst_35204 = figwheel.client.autoload_QMARK_.call(null);
var state_35243__$1 = (function (){var statearr_35258 = state_35243;
(statearr_35258[(9)] = inst_35202);

(statearr_35258[(8)] = inst_35203);

return statearr_35258;
})();
if(cljs.core.truth_(inst_35204)){
var statearr_35259_35286 = state_35243__$1;
(statearr_35259_35286[(1)] = (8));

} else {
var statearr_35260_35287 = state_35243__$1;
(statearr_35260_35287[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (14))){
var inst_35214 = (state_35243[(2)]);
var state_35243__$1 = state_35243;
var statearr_35261_35288 = state_35243__$1;
(statearr_35261_35288[(2)] = inst_35214);

(statearr_35261_35288[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (16))){
var state_35243__$1 = state_35243;
var statearr_35262_35289 = state_35243__$1;
(statearr_35262_35289[(2)] = null);

(statearr_35262_35289[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (10))){
var inst_35235 = (state_35243[(2)]);
var state_35243__$1 = (function (){var statearr_35263 = state_35243;
(statearr_35263[(11)] = inst_35235);

return statearr_35263;
})();
var statearr_35264_35290 = state_35243__$1;
(statearr_35264_35290[(2)] = null);

(statearr_35264_35290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (8))){
var inst_35202 = (state_35243[(9)]);
var inst_35206 = figwheel.client.reload_file_state_QMARK_.call(null,inst_35202,opts);
var state_35243__$1 = state_35243;
if(cljs.core.truth_(inst_35206)){
var statearr_35265_35291 = state_35243__$1;
(statearr_35265_35291[(1)] = (11));

} else {
var statearr_35266_35292 = state_35243__$1;
(statearr_35266_35292[(1)] = (12));

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
});})(c__27722__auto___35274,ch))
;
return ((function (switch__27610__auto__,c__27722__auto___35274,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__27611__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27611__auto____0 = (function (){
var statearr_35270 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35270[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27611__auto__);

(statearr_35270[(1)] = (1));

return statearr_35270;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27611__auto____1 = (function (state_35243){
while(true){
var ret_value__27612__auto__ = (function (){try{while(true){
var result__27613__auto__ = switch__27610__auto__.call(null,state_35243);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27613__auto__;
}
break;
}
}catch (e35271){if((e35271 instanceof Object)){
var ex__27614__auto__ = e35271;
var statearr_35272_35293 = state_35243;
(statearr_35272_35293[(5)] = ex__27614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35243);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35271;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27612__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35294 = state_35243;
state_35243 = G__35294;
continue;
} else {
return ret_value__27612__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__27611__auto__ = function(state_35243){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27611__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27611__auto____1.call(this,state_35243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__27611__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27611__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27611__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27611__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27611__auto__;
})()
;})(switch__27610__auto__,c__27722__auto___35274,ch))
})();
var state__27724__auto__ = (function (){var statearr_35273 = f__27723__auto__.call(null);
(statearr_35273[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27722__auto___35274);

return statearr_35273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27724__auto__);
});})(c__27722__auto___35274,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__35295_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__35295_SHARP_));
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
var base_path_35298 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_35298){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e35297){if((e35297 instanceof Error)){
var e = e35297;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_35298], null));
} else {
var e = e35297;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_35298))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__35299){
var map__35308 = p__35299;
var map__35308__$1 = ((((!((map__35308 == null)))?((((map__35308.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35308.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35308):map__35308);
var opts = map__35308__$1;
var build_id = cljs.core.get.call(null,map__35308__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__35308,map__35308__$1,opts,build_id){
return (function (p__35310){
var vec__35311 = p__35310;
var seq__35312 = cljs.core.seq.call(null,vec__35311);
var first__35313 = cljs.core.first.call(null,seq__35312);
var seq__35312__$1 = cljs.core.next.call(null,seq__35312);
var map__35314 = first__35313;
var map__35314__$1 = ((((!((map__35314 == null)))?((((map__35314.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35314.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35314):map__35314);
var msg = map__35314__$1;
var msg_name = cljs.core.get.call(null,map__35314__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35312__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__35311,seq__35312,first__35313,seq__35312__$1,map__35314,map__35314__$1,msg,msg_name,_,map__35308,map__35308__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__35311,seq__35312,first__35313,seq__35312__$1,map__35314,map__35314__$1,msg,msg_name,_,map__35308,map__35308__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__35308,map__35308__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__35322){
var vec__35323 = p__35322;
var seq__35324 = cljs.core.seq.call(null,vec__35323);
var first__35325 = cljs.core.first.call(null,seq__35324);
var seq__35324__$1 = cljs.core.next.call(null,seq__35324);
var map__35326 = first__35325;
var map__35326__$1 = ((((!((map__35326 == null)))?((((map__35326.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35326.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35326):map__35326);
var msg = map__35326__$1;
var msg_name = cljs.core.get.call(null,map__35326__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35324__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__35328){
var map__35340 = p__35328;
var map__35340__$1 = ((((!((map__35340 == null)))?((((map__35340.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35340.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35340):map__35340);
var on_compile_warning = cljs.core.get.call(null,map__35340__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__35340__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__35340,map__35340__$1,on_compile_warning,on_compile_fail){
return (function (p__35342){
var vec__35343 = p__35342;
var seq__35344 = cljs.core.seq.call(null,vec__35343);
var first__35345 = cljs.core.first.call(null,seq__35344);
var seq__35344__$1 = cljs.core.next.call(null,seq__35344);
var map__35346 = first__35345;
var map__35346__$1 = ((((!((map__35346 == null)))?((((map__35346.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35346.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35346):map__35346);
var msg = map__35346__$1;
var msg_name = cljs.core.get.call(null,map__35346__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35344__$1;
var pred__35348 = cljs.core._EQ_;
var expr__35349 = msg_name;
if(cljs.core.truth_(pred__35348.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__35349))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__35348.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__35349))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__35340,map__35340__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__27722__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27722__auto__,msg_hist,msg_names,msg){
return (function (){
var f__27723__auto__ = (function (){var switch__27610__auto__ = ((function (c__27722__auto__,msg_hist,msg_names,msg){
return (function (state_35557){
var state_val_35558 = (state_35557[(1)]);
if((state_val_35558 === (7))){
var inst_35485 = (state_35557[(2)]);
var state_35557__$1 = state_35557;
if(cljs.core.truth_(inst_35485)){
var statearr_35559_35605 = state_35557__$1;
(statearr_35559_35605[(1)] = (8));

} else {
var statearr_35560_35606 = state_35557__$1;
(statearr_35560_35606[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35558 === (20))){
var inst_35551 = (state_35557[(2)]);
var state_35557__$1 = state_35557;
var statearr_35561_35607 = state_35557__$1;
(statearr_35561_35607[(2)] = inst_35551);

(statearr_35561_35607[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35558 === (27))){
var inst_35547 = (state_35557[(2)]);
var state_35557__$1 = state_35557;
var statearr_35562_35608 = state_35557__$1;
(statearr_35562_35608[(2)] = inst_35547);

(statearr_35562_35608[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35558 === (1))){
var inst_35478 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_35557__$1 = state_35557;
if(cljs.core.truth_(inst_35478)){
var statearr_35563_35609 = state_35557__$1;
(statearr_35563_35609[(1)] = (2));

} else {
var statearr_35564_35610 = state_35557__$1;
(statearr_35564_35610[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35558 === (24))){
var inst_35549 = (state_35557[(2)]);
var state_35557__$1 = state_35557;
var statearr_35565_35611 = state_35557__$1;
(statearr_35565_35611[(2)] = inst_35549);

(statearr_35565_35611[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35558 === (4))){
var inst_35555 = (state_35557[(2)]);
var state_35557__$1 = state_35557;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35557__$1,inst_35555);
} else {
if((state_val_35558 === (15))){
var inst_35553 = (state_35557[(2)]);
var state_35557__$1 = state_35557;
var statearr_35566_35612 = state_35557__$1;
(statearr_35566_35612[(2)] = inst_35553);

(statearr_35566_35612[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35558 === (21))){
var inst_35512 = (state_35557[(2)]);
var state_35557__$1 = state_35557;
var statearr_35567_35613 = state_35557__$1;
(statearr_35567_35613[(2)] = inst_35512);

(statearr_35567_35613[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35558 === (31))){
var inst_35536 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_35557__$1 = state_35557;
if(cljs.core.truth_(inst_35536)){
var statearr_35568_35614 = state_35557__$1;
(statearr_35568_35614[(1)] = (34));

} else {
var statearr_35569_35615 = state_35557__$1;
(statearr_35569_35615[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35558 === (32))){
var inst_35545 = (state_35557[(2)]);
var state_35557__$1 = state_35557;
var statearr_35570_35616 = state_35557__$1;
(statearr_35570_35616[(2)] = inst_35545);

(statearr_35570_35616[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35558 === (33))){
var inst_35534 = (state_35557[(2)]);
var state_35557__$1 = state_35557;
var statearr_35571_35617 = state_35557__$1;
(statearr_35571_35617[(2)] = inst_35534);

(statearr_35571_35617[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35558 === (13))){
var inst_35499 = figwheel.client.heads_up.clear.call(null);
var state_35557__$1 = state_35557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35557__$1,(16),inst_35499);
} else {
if((state_val_35558 === (22))){
var inst_35516 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35517 = figwheel.client.heads_up.append_warning_message.call(null,inst_35516);
var state_35557__$1 = state_35557;
var statearr_35572_35618 = state_35557__$1;
(statearr_35572_35618[(2)] = inst_35517);

(statearr_35572_35618[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35558 === (36))){
var inst_35543 = (state_35557[(2)]);
var state_35557__$1 = state_35557;
var statearr_35573_35619 = state_35557__$1;
(statearr_35573_35619[(2)] = inst_35543);

(statearr_35573_35619[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35558 === (29))){
var inst_35527 = (state_35557[(2)]);
var state_35557__$1 = state_35557;
var statearr_35574_35620 = state_35557__$1;
(statearr_35574_35620[(2)] = inst_35527);

(statearr_35574_35620[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35558 === (6))){
var inst_35480 = (state_35557[(7)]);
var state_35557__$1 = state_35557;
var statearr_35575_35621 = state_35557__$1;
(statearr_35575_35621[(2)] = inst_35480);

(statearr_35575_35621[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35558 === (28))){
var inst_35523 = (state_35557[(2)]);
var inst_35524 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35525 = figwheel.client.heads_up.display_warning.call(null,inst_35524);
var state_35557__$1 = (function (){var statearr_35576 = state_35557;
(statearr_35576[(8)] = inst_35523);

return statearr_35576;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35557__$1,(29),inst_35525);
} else {
if((state_val_35558 === (25))){
var inst_35521 = figwheel.client.heads_up.clear.call(null);
var state_35557__$1 = state_35557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35557__$1,(28),inst_35521);
} else {
if((state_val_35558 === (34))){
var inst_35538 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35557__$1 = state_35557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35557__$1,(37),inst_35538);
} else {
if((state_val_35558 === (17))){
var inst_35505 = (state_35557[(2)]);
var state_35557__$1 = state_35557;
var statearr_35577_35622 = state_35557__$1;
(statearr_35577_35622[(2)] = inst_35505);

(statearr_35577_35622[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35558 === (3))){
var inst_35497 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_35557__$1 = state_35557;
if(cljs.core.truth_(inst_35497)){
var statearr_35578_35623 = state_35557__$1;
(statearr_35578_35623[(1)] = (13));

} else {
var statearr_35579_35624 = state_35557__$1;
(statearr_35579_35624[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35558 === (12))){
var inst_35493 = (state_35557[(2)]);
var state_35557__$1 = state_35557;
var statearr_35580_35625 = state_35557__$1;
(statearr_35580_35625[(2)] = inst_35493);

(statearr_35580_35625[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35558 === (2))){
var inst_35480 = (state_35557[(7)]);
var inst_35480__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_35557__$1 = (function (){var statearr_35581 = state_35557;
(statearr_35581[(7)] = inst_35480__$1);

return statearr_35581;
})();
if(cljs.core.truth_(inst_35480__$1)){
var statearr_35582_35626 = state_35557__$1;
(statearr_35582_35626[(1)] = (5));

} else {
var statearr_35583_35627 = state_35557__$1;
(statearr_35583_35627[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35558 === (23))){
var inst_35519 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_35557__$1 = state_35557;
if(cljs.core.truth_(inst_35519)){
var statearr_35584_35628 = state_35557__$1;
(statearr_35584_35628[(1)] = (25));

} else {
var statearr_35585_35629 = state_35557__$1;
(statearr_35585_35629[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35558 === (35))){
var state_35557__$1 = state_35557;
var statearr_35586_35630 = state_35557__$1;
(statearr_35586_35630[(2)] = null);

(statearr_35586_35630[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35558 === (19))){
var inst_35514 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_35557__$1 = state_35557;
if(cljs.core.truth_(inst_35514)){
var statearr_35587_35631 = state_35557__$1;
(statearr_35587_35631[(1)] = (22));

} else {
var statearr_35588_35632 = state_35557__$1;
(statearr_35588_35632[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35558 === (11))){
var inst_35489 = (state_35557[(2)]);
var state_35557__$1 = state_35557;
var statearr_35589_35633 = state_35557__$1;
(statearr_35589_35633[(2)] = inst_35489);

(statearr_35589_35633[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35558 === (9))){
var inst_35491 = figwheel.client.heads_up.clear.call(null);
var state_35557__$1 = state_35557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35557__$1,(12),inst_35491);
} else {
if((state_val_35558 === (5))){
var inst_35482 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_35557__$1 = state_35557;
var statearr_35590_35634 = state_35557__$1;
(statearr_35590_35634[(2)] = inst_35482);

(statearr_35590_35634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35558 === (14))){
var inst_35507 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_35557__$1 = state_35557;
if(cljs.core.truth_(inst_35507)){
var statearr_35591_35635 = state_35557__$1;
(statearr_35591_35635[(1)] = (18));

} else {
var statearr_35592_35636 = state_35557__$1;
(statearr_35592_35636[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35558 === (26))){
var inst_35529 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_35557__$1 = state_35557;
if(cljs.core.truth_(inst_35529)){
var statearr_35593_35637 = state_35557__$1;
(statearr_35593_35637[(1)] = (30));

} else {
var statearr_35594_35638 = state_35557__$1;
(statearr_35594_35638[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35558 === (16))){
var inst_35501 = (state_35557[(2)]);
var inst_35502 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35503 = figwheel.client.heads_up.display_exception.call(null,inst_35502);
var state_35557__$1 = (function (){var statearr_35595 = state_35557;
(statearr_35595[(9)] = inst_35501);

return statearr_35595;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35557__$1,(17),inst_35503);
} else {
if((state_val_35558 === (30))){
var inst_35531 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35532 = figwheel.client.heads_up.display_warning.call(null,inst_35531);
var state_35557__$1 = state_35557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35557__$1,(33),inst_35532);
} else {
if((state_val_35558 === (10))){
var inst_35495 = (state_35557[(2)]);
var state_35557__$1 = state_35557;
var statearr_35596_35639 = state_35557__$1;
(statearr_35596_35639[(2)] = inst_35495);

(statearr_35596_35639[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35558 === (18))){
var inst_35509 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35510 = figwheel.client.heads_up.display_exception.call(null,inst_35509);
var state_35557__$1 = state_35557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35557__$1,(21),inst_35510);
} else {
if((state_val_35558 === (37))){
var inst_35540 = (state_35557[(2)]);
var state_35557__$1 = state_35557;
var statearr_35597_35640 = state_35557__$1;
(statearr_35597_35640[(2)] = inst_35540);

(statearr_35597_35640[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35558 === (8))){
var inst_35487 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35557__$1 = state_35557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35557__$1,(11),inst_35487);
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
});})(c__27722__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__27610__auto__,c__27722__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27611__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27611__auto____0 = (function (){
var statearr_35601 = [null,null,null,null,null,null,null,null,null,null];
(statearr_35601[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27611__auto__);

(statearr_35601[(1)] = (1));

return statearr_35601;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27611__auto____1 = (function (state_35557){
while(true){
var ret_value__27612__auto__ = (function (){try{while(true){
var result__27613__auto__ = switch__27610__auto__.call(null,state_35557);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27613__auto__;
}
break;
}
}catch (e35602){if((e35602 instanceof Object)){
var ex__27614__auto__ = e35602;
var statearr_35603_35641 = state_35557;
(statearr_35603_35641[(5)] = ex__27614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35557);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35602;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27612__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35642 = state_35557;
state_35557 = G__35642;
continue;
} else {
return ret_value__27612__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27611__auto__ = function(state_35557){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27611__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27611__auto____1.call(this,state_35557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27611__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27611__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27611__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27611__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27611__auto__;
})()
;})(switch__27610__auto__,c__27722__auto__,msg_hist,msg_names,msg))
})();
var state__27724__auto__ = (function (){var statearr_35604 = f__27723__auto__.call(null);
(statearr_35604[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27722__auto__);

return statearr_35604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27724__auto__);
});})(c__27722__auto__,msg_hist,msg_names,msg))
);

return c__27722__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27722__auto___35705 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27722__auto___35705,ch){
return (function (){
var f__27723__auto__ = (function (){var switch__27610__auto__ = ((function (c__27722__auto___35705,ch){
return (function (state_35688){
var state_val_35689 = (state_35688[(1)]);
if((state_val_35689 === (1))){
var state_35688__$1 = state_35688;
var statearr_35690_35706 = state_35688__$1;
(statearr_35690_35706[(2)] = null);

(statearr_35690_35706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (2))){
var state_35688__$1 = state_35688;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35688__$1,(4),ch);
} else {
if((state_val_35689 === (3))){
var inst_35686 = (state_35688[(2)]);
var state_35688__$1 = state_35688;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35688__$1,inst_35686);
} else {
if((state_val_35689 === (4))){
var inst_35676 = (state_35688[(7)]);
var inst_35676__$1 = (state_35688[(2)]);
var state_35688__$1 = (function (){var statearr_35691 = state_35688;
(statearr_35691[(7)] = inst_35676__$1);

return statearr_35691;
})();
if(cljs.core.truth_(inst_35676__$1)){
var statearr_35692_35707 = state_35688__$1;
(statearr_35692_35707[(1)] = (5));

} else {
var statearr_35693_35708 = state_35688__$1;
(statearr_35693_35708[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (5))){
var inst_35676 = (state_35688[(7)]);
var inst_35678 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_35676);
var state_35688__$1 = state_35688;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35688__$1,(8),inst_35678);
} else {
if((state_val_35689 === (6))){
var state_35688__$1 = state_35688;
var statearr_35694_35709 = state_35688__$1;
(statearr_35694_35709[(2)] = null);

(statearr_35694_35709[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (7))){
var inst_35684 = (state_35688[(2)]);
var state_35688__$1 = state_35688;
var statearr_35695_35710 = state_35688__$1;
(statearr_35695_35710[(2)] = inst_35684);

(statearr_35695_35710[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (8))){
var inst_35680 = (state_35688[(2)]);
var state_35688__$1 = (function (){var statearr_35696 = state_35688;
(statearr_35696[(8)] = inst_35680);

return statearr_35696;
})();
var statearr_35697_35711 = state_35688__$1;
(statearr_35697_35711[(2)] = null);

(statearr_35697_35711[(1)] = (2));


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
});})(c__27722__auto___35705,ch))
;
return ((function (switch__27610__auto__,c__27722__auto___35705,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__27611__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27611__auto____0 = (function (){
var statearr_35701 = [null,null,null,null,null,null,null,null,null];
(statearr_35701[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27611__auto__);

(statearr_35701[(1)] = (1));

return statearr_35701;
});
var figwheel$client$heads_up_plugin_$_state_machine__27611__auto____1 = (function (state_35688){
while(true){
var ret_value__27612__auto__ = (function (){try{while(true){
var result__27613__auto__ = switch__27610__auto__.call(null,state_35688);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27613__auto__;
}
break;
}
}catch (e35702){if((e35702 instanceof Object)){
var ex__27614__auto__ = e35702;
var statearr_35703_35712 = state_35688;
(statearr_35703_35712[(5)] = ex__27614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35688);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35702;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27612__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35713 = state_35688;
state_35688 = G__35713;
continue;
} else {
return ret_value__27612__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__27611__auto__ = function(state_35688){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27611__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27611__auto____1.call(this,state_35688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__27611__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27611__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27611__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27611__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27611__auto__;
})()
;})(switch__27610__auto__,c__27722__auto___35705,ch))
})();
var state__27724__auto__ = (function (){var statearr_35704 = f__27723__auto__.call(null);
(statearr_35704[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27722__auto___35705);

return statearr_35704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27724__auto__);
});})(c__27722__auto___35705,ch))
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
var c__27722__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27722__auto__){
return (function (){
var f__27723__auto__ = (function (){var switch__27610__auto__ = ((function (c__27722__auto__){
return (function (state_35734){
var state_val_35735 = (state_35734[(1)]);
if((state_val_35735 === (1))){
var inst_35729 = cljs.core.async.timeout.call(null,(3000));
var state_35734__$1 = state_35734;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35734__$1,(2),inst_35729);
} else {
if((state_val_35735 === (2))){
var inst_35731 = (state_35734[(2)]);
var inst_35732 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_35734__$1 = (function (){var statearr_35736 = state_35734;
(statearr_35736[(7)] = inst_35731);

return statearr_35736;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35734__$1,inst_35732);
} else {
return null;
}
}
});})(c__27722__auto__))
;
return ((function (switch__27610__auto__,c__27722__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__27611__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__27611__auto____0 = (function (){
var statearr_35740 = [null,null,null,null,null,null,null,null];
(statearr_35740[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27611__auto__);

(statearr_35740[(1)] = (1));

return statearr_35740;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27611__auto____1 = (function (state_35734){
while(true){
var ret_value__27612__auto__ = (function (){try{while(true){
var result__27613__auto__ = switch__27610__auto__.call(null,state_35734);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27613__auto__;
}
break;
}
}catch (e35741){if((e35741 instanceof Object)){
var ex__27614__auto__ = e35741;
var statearr_35742_35744 = state_35734;
(statearr_35742_35744[(5)] = ex__27614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35741;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27612__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35745 = state_35734;
state_35734 = G__35745;
continue;
} else {
return ret_value__27612__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__27611__auto__ = function(state_35734){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27611__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27611__auto____1.call(this,state_35734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__27611__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27611__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27611__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27611__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27611__auto__;
})()
;})(switch__27610__auto__,c__27722__auto__))
})();
var state__27724__auto__ = (function (){var statearr_35743 = f__27723__auto__.call(null);
(statearr_35743[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27722__auto__);

return statearr_35743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27724__auto__);
});})(c__27722__auto__))
);

return c__27722__auto__;
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
var c__27722__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27722__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__27723__auto__ = (function (){var switch__27610__auto__ = ((function (c__27722__auto__,figwheel_version,temp__4657__auto__){
return (function (state_35768){
var state_val_35769 = (state_35768[(1)]);
if((state_val_35769 === (1))){
var inst_35762 = cljs.core.async.timeout.call(null,(2000));
var state_35768__$1 = state_35768;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35768__$1,(2),inst_35762);
} else {
if((state_val_35769 === (2))){
var inst_35764 = (state_35768[(2)]);
var inst_35765 = [cljs.core.str("Figwheel Client Version \""),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("\" is not equal to "),cljs.core.str("Figwheel Sidecar Version \""),cljs.core.str(figwheel_version),cljs.core.str("\""),cljs.core.str(".  Shutting down Websocket Connection!")].join('');
var inst_35766 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_35765);
var state_35768__$1 = (function (){var statearr_35770 = state_35768;
(statearr_35770[(7)] = inst_35764);

return statearr_35770;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35768__$1,inst_35766);
} else {
return null;
}
}
});})(c__27722__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__27610__auto__,c__27722__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27611__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27611__auto____0 = (function (){
var statearr_35774 = [null,null,null,null,null,null,null,null];
(statearr_35774[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27611__auto__);

(statearr_35774[(1)] = (1));

return statearr_35774;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27611__auto____1 = (function (state_35768){
while(true){
var ret_value__27612__auto__ = (function (){try{while(true){
var result__27613__auto__ = switch__27610__auto__.call(null,state_35768);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27613__auto__;
}
break;
}
}catch (e35775){if((e35775 instanceof Object)){
var ex__27614__auto__ = e35775;
var statearr_35776_35778 = state_35768;
(statearr_35776_35778[(5)] = ex__27614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35775;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27612__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35779 = state_35768;
state_35768 = G__35779;
continue;
} else {
return ret_value__27612__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27611__auto__ = function(state_35768){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27611__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27611__auto____1.call(this,state_35768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27611__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27611__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27611__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27611__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27611__auto__;
})()
;})(switch__27610__auto__,c__27722__auto__,figwheel_version,temp__4657__auto__))
})();
var state__27724__auto__ = (function (){var statearr_35777 = f__27723__auto__.call(null);
(statearr_35777[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27722__auto__);

return statearr_35777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27724__auto__);
});})(c__27722__auto__,figwheel_version,temp__4657__auto__))
);

return c__27722__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__35780){
var map__35784 = p__35780;
var map__35784__$1 = ((((!((map__35784 == null)))?((((map__35784.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35784.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35784):map__35784);
var file = cljs.core.get.call(null,map__35784__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__35784__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__35784__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__35786 = "";
var G__35786__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__35786),cljs.core.str("file "),cljs.core.str(file)].join(''):G__35786);
var G__35786__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__35786__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__35786__$1);
if(cljs.core.truth_((function (){var and__22566__auto__ = line;
if(cljs.core.truth_(and__22566__auto__)){
return column;
} else {
return and__22566__auto__;
}
})())){
return [cljs.core.str(G__35786__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__35786__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__35787){
var map__35794 = p__35787;
var map__35794__$1 = ((((!((map__35794 == null)))?((((map__35794.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35794.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35794):map__35794);
var ed = map__35794__$1;
var formatted_exception = cljs.core.get.call(null,map__35794__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__35794__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__35794__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__35796_35800 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__35797_35801 = null;
var count__35798_35802 = (0);
var i__35799_35803 = (0);
while(true){
if((i__35799_35803 < count__35798_35802)){
var msg_35804 = cljs.core._nth.call(null,chunk__35797_35801,i__35799_35803);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35804);

var G__35805 = seq__35796_35800;
var G__35806 = chunk__35797_35801;
var G__35807 = count__35798_35802;
var G__35808 = (i__35799_35803 + (1));
seq__35796_35800 = G__35805;
chunk__35797_35801 = G__35806;
count__35798_35802 = G__35807;
i__35799_35803 = G__35808;
continue;
} else {
var temp__4657__auto___35809 = cljs.core.seq.call(null,seq__35796_35800);
if(temp__4657__auto___35809){
var seq__35796_35810__$1 = temp__4657__auto___35809;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35796_35810__$1)){
var c__23389__auto___35811 = cljs.core.chunk_first.call(null,seq__35796_35810__$1);
var G__35812 = cljs.core.chunk_rest.call(null,seq__35796_35810__$1);
var G__35813 = c__23389__auto___35811;
var G__35814 = cljs.core.count.call(null,c__23389__auto___35811);
var G__35815 = (0);
seq__35796_35800 = G__35812;
chunk__35797_35801 = G__35813;
count__35798_35802 = G__35814;
i__35799_35803 = G__35815;
continue;
} else {
var msg_35816 = cljs.core.first.call(null,seq__35796_35810__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35816);

var G__35817 = cljs.core.next.call(null,seq__35796_35810__$1);
var G__35818 = null;
var G__35819 = (0);
var G__35820 = (0);
seq__35796_35800 = G__35817;
chunk__35797_35801 = G__35818;
count__35798_35802 = G__35819;
i__35799_35803 = G__35820;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__35821){
var map__35824 = p__35821;
var map__35824__$1 = ((((!((map__35824 == null)))?((((map__35824.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35824.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35824):map__35824);
var w = map__35824__$1;
var message = cljs.core.get.call(null,map__35824__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__35836 = cljs.core.seq.call(null,plugins);
var chunk__35837 = null;
var count__35838 = (0);
var i__35839 = (0);
while(true){
if((i__35839 < count__35838)){
var vec__35840 = cljs.core._nth.call(null,chunk__35837,i__35839);
var k = cljs.core.nth.call(null,vec__35840,(0),null);
var plugin = cljs.core.nth.call(null,vec__35840,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35846 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35836,chunk__35837,count__35838,i__35839,pl_35846,vec__35840,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_35846.call(null,msg_hist);
});})(seq__35836,chunk__35837,count__35838,i__35839,pl_35846,vec__35840,k,plugin))
);
} else {
}

var G__35847 = seq__35836;
var G__35848 = chunk__35837;
var G__35849 = count__35838;
var G__35850 = (i__35839 + (1));
seq__35836 = G__35847;
chunk__35837 = G__35848;
count__35838 = G__35849;
i__35839 = G__35850;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35836);
if(temp__4657__auto__){
var seq__35836__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35836__$1)){
var c__23389__auto__ = cljs.core.chunk_first.call(null,seq__35836__$1);
var G__35851 = cljs.core.chunk_rest.call(null,seq__35836__$1);
var G__35852 = c__23389__auto__;
var G__35853 = cljs.core.count.call(null,c__23389__auto__);
var G__35854 = (0);
seq__35836 = G__35851;
chunk__35837 = G__35852;
count__35838 = G__35853;
i__35839 = G__35854;
continue;
} else {
var vec__35843 = cljs.core.first.call(null,seq__35836__$1);
var k = cljs.core.nth.call(null,vec__35843,(0),null);
var plugin = cljs.core.nth.call(null,vec__35843,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35855 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35836,chunk__35837,count__35838,i__35839,pl_35855,vec__35843,k,plugin,seq__35836__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_35855.call(null,msg_hist);
});})(seq__35836,chunk__35837,count__35838,i__35839,pl_35855,vec__35843,k,plugin,seq__35836__$1,temp__4657__auto__))
);
} else {
}

var G__35856 = cljs.core.next.call(null,seq__35836__$1);
var G__35857 = null;
var G__35858 = (0);
var G__35859 = (0);
seq__35836 = G__35856;
chunk__35837 = G__35857;
count__35838 = G__35858;
i__35839 = G__35859;
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
var args35860 = [];
var len__23653__auto___35867 = arguments.length;
var i__23654__auto___35868 = (0);
while(true){
if((i__23654__auto___35868 < len__23653__auto___35867)){
args35860.push((arguments[i__23654__auto___35868]));

var G__35869 = (i__23654__auto___35868 + (1));
i__23654__auto___35868 = G__35869;
continue;
} else {
}
break;
}

var G__35862 = args35860.length;
switch (G__35862) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35860.length)].join('')));

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

var seq__35863_35871 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__35864_35872 = null;
var count__35865_35873 = (0);
var i__35866_35874 = (0);
while(true){
if((i__35866_35874 < count__35865_35873)){
var msg_35875 = cljs.core._nth.call(null,chunk__35864_35872,i__35866_35874);
figwheel.client.socket.handle_incoming_message.call(null,msg_35875);

var G__35876 = seq__35863_35871;
var G__35877 = chunk__35864_35872;
var G__35878 = count__35865_35873;
var G__35879 = (i__35866_35874 + (1));
seq__35863_35871 = G__35876;
chunk__35864_35872 = G__35877;
count__35865_35873 = G__35878;
i__35866_35874 = G__35879;
continue;
} else {
var temp__4657__auto___35880 = cljs.core.seq.call(null,seq__35863_35871);
if(temp__4657__auto___35880){
var seq__35863_35881__$1 = temp__4657__auto___35880;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35863_35881__$1)){
var c__23389__auto___35882 = cljs.core.chunk_first.call(null,seq__35863_35881__$1);
var G__35883 = cljs.core.chunk_rest.call(null,seq__35863_35881__$1);
var G__35884 = c__23389__auto___35882;
var G__35885 = cljs.core.count.call(null,c__23389__auto___35882);
var G__35886 = (0);
seq__35863_35871 = G__35883;
chunk__35864_35872 = G__35884;
count__35865_35873 = G__35885;
i__35866_35874 = G__35886;
continue;
} else {
var msg_35887 = cljs.core.first.call(null,seq__35863_35881__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_35887);

var G__35888 = cljs.core.next.call(null,seq__35863_35881__$1);
var G__35889 = null;
var G__35890 = (0);
var G__35891 = (0);
seq__35863_35871 = G__35888;
chunk__35864_35872 = G__35889;
count__35865_35873 = G__35890;
i__35866_35874 = G__35891;
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
var len__23653__auto___35896 = arguments.length;
var i__23654__auto___35897 = (0);
while(true){
if((i__23654__auto___35897 < len__23653__auto___35896)){
args__23660__auto__.push((arguments[i__23654__auto___35897]));

var G__35898 = (i__23654__auto___35897 + (1));
i__23654__auto___35897 = G__35898;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((0) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__23661__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__35893){
var map__35894 = p__35893;
var map__35894__$1 = ((((!((map__35894 == null)))?((((map__35894.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35894.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35894):map__35894);
var opts = map__35894__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq35892){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35892));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e35900){if((e35900 instanceof Error)){
var e = e35900;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e35900;

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
return (function (p__35904){
var map__35905 = p__35904;
var map__35905__$1 = ((((!((map__35905 == null)))?((((map__35905.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35905.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35905):map__35905);
var msg_name = cljs.core.get.call(null,map__35905__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1473455239297