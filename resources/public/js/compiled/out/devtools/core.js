// Compiled by ClojureScript 1.9.89 {}
goog.provide('devtools.core');
goog.require('cljs.core');
goog.require('devtools.prefs');
goog.require('devtools.sanity_hints');
goog.require('devtools.custom_formatters');
goog.require('devtools.util');
goog.require('devtools.version');
goog.require('goog.userAgent');
devtools.core.known_features = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"custom-formatters","custom-formatters",-863243779),new cljs.core.Keyword(null,"sanity-hints","sanity-hints",1201436858)], null);
devtools.core.features_to_install_by_default = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"custom-formatters","custom-formatters",-863243779)], null);
devtools.core.make_version_info = (function devtools$core$make_version_info(){
var version = devtools.version.get_current_version.call(null);
return [cljs.core.str("v"),cljs.core.str(version)].join('');
});
devtools.core.make_lib_info = (function devtools$core$make_lib_info(){
return [cljs.core.str("CLJS DevTools "),cljs.core.str(devtools.core.make_version_info.call(null))].join('');
});
devtools.core.missing_feature_warning = (function devtools$core$missing_feature_warning(feature,known_features){
return [cljs.core.str("No such feature "),cljs.core.str(feature),cljs.core.str(" is currently available in "),cljs.core.str(devtools.core.make_lib_info.call(null)),cljs.core.str(". "),cljs.core.str("The list of supported features is "),cljs.core.str(cljs.core.pr_str.call(null,known_features))].join('');
});
devtools.core.warn_feature_not_available = (function devtools$core$warn_feature_not_available(feature){
return console.warn([cljs.core.str("Feature "),cljs.core.str(feature),cljs.core.str(" cannot be installed. Unsupported browser "),cljs.core.str(goog.userAgent.getUserAgentString()),cljs.core.str(".")].join(''));
});
devtools.core.set_prefs_BANG_ = (function devtools$core$set_prefs_BANG_(new_prefs){
return devtools.prefs.set_prefs_BANG_.call(null,new_prefs);
});
devtools.core.get_prefs = (function devtools$core$get_prefs(){
return devtools.prefs.get_prefs.call(null);
});
devtools.core.set_pref_BANG_ = (function devtools$core$set_pref_BANG_(pref,val){
return devtools.prefs.set_pref_BANG_.call(null,pref,val);
});
devtools.core.is_feature_available_QMARK_ = (function devtools$core$is_feature_available_QMARK_(feature){
var G__29194 = (((feature instanceof cljs.core.Keyword))?feature.fqn:null);
switch (G__29194) {
case "custom-formatters":
return devtools.custom_formatters.available_QMARK_.call(null);

break;
case "sanity-hints":
return devtools.sanity_hints.available_QMARK_.call(null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(feature)].join('')));

}
});
devtools.core.install_BANG_ = (function devtools$core$install_BANG_(var_args){
var args29196 = [];
var len__26651__auto___29202 = arguments.length;
var i__26652__auto___29203 = (0);
while(true){
if((i__26652__auto___29203 < len__26651__auto___29202)){
args29196.push((arguments[i__26652__auto___29203]));

var G__29204 = (i__26652__auto___29203 + (1));
i__26652__auto___29203 = G__29204;
continue;
} else {
}
break;
}

var G__29198 = args29196.length;
switch (G__29198) {
case 0:
return devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29196.length)].join('')));

}
});

devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devtools.core.install_BANG_.call(null,devtools.core.features_to_install_by_default);
});

devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (features_to_install){
var banner = [cljs.core.str("Installing %c%s%c and enabling features")].join('');
var lib_info = devtools.core.make_lib_info.call(null);
var lib_info_style = "color:black;font-weight:bold;";
var reset_style = "color:black";
if(cljs.core.truth_(devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"dont-display-banner","dont-display-banner",-1175550370)))){
} else {
var vec__29199_29206 = devtools.util.feature_list_display.call(null,features_to_install,devtools.core.known_features);
var fmt_str__27397__auto___29207 = cljs.core.nth.call(null,vec__29199_29206,(0),null);
var params__27398__auto___29208 = cljs.core.nth.call(null,vec__29199_29206,(1),null);
console.info.apply(console,cljs.core.into_array.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(banner),cljs.core.str(" "),cljs.core.str(fmt_str__27397__auto___29207)].join(''),lib_info_style,lib_info,reset_style], null),params__27398__auto___29208)));
}

if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"custom-formatters","custom-formatters",-863243779),null], null), null),features_to_install))){
if(cljs.core.truth_(devtools.core.is_feature_available_QMARK_.call(null,new cljs.core.Keyword(null,"custom-formatters","custom-formatters",-863243779)))){
devtools.custom_formatters.install_BANG_.call(null);
} else {
devtools.core.warn_feature_not_available.call(null,new cljs.core.Keyword(null,"custom-formatters","custom-formatters",-863243779));
}
} else {
}

if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sanity-hints","sanity-hints",1201436858),null], null), null),features_to_install))){
if(cljs.core.truth_(devtools.core.is_feature_available_QMARK_.call(null,new cljs.core.Keyword(null,"sanity-hints","sanity-hints",1201436858)))){
return devtools.sanity_hints.install_BANG_.call(null);
} else {
return devtools.core.warn_feature_not_available.call(null,new cljs.core.Keyword(null,"sanity-hints","sanity-hints",1201436858));
}
} else {
return null;
}
});

devtools.core.install_BANG_.cljs$lang$maxFixedArity = 1;

devtools.core.uninstall_BANG_ = (function devtools$core$uninstall_BANG_(){
devtools.custom_formatters.uninstall_BANG_.call(null);

return devtools.sanity_hints.uninstall_BANG_.call(null);
});
devtools.core.enable_BANG_ = (function devtools$core$enable_BANG_(){
return console.warn([cljs.core.str("devtools.core/enable! was removed "),cljs.core.str("and has no effect in "),cljs.core.str(devtools.core.make_lib_info.call(null)),cljs.core.str(" "),cljs.core.str("=> remove the call")].join(''));
});
devtools.core.disable_BANG_ = (function devtools$core$disable_BANG_(){
return console.warn([cljs.core.str("devtools.core/disable! was removed "),cljs.core.str("and has no effect in "),cljs.core.str(devtools.core.make_lib_info.call(null)),cljs.core.str(" "),cljs.core.str("=> remove the call")].join(''));
});
devtools.core.set_single_feature_BANG_ = (function devtools$core$set_single_feature_BANG_(_feature,_val){
return console.warn([cljs.core.str("devtools.core/set-single-feature! was removed "),cljs.core.str("and has no effect in "),cljs.core.str(devtools.core.make_lib_info.call(null)),cljs.core.str(" "),cljs.core.str("=> use (devtools.core/install! features) to install custom features")].join(''));
});
devtools.core.enable_single_feature_BANG_ = (function devtools$core$enable_single_feature_BANG_(_feature){
return console.warn([cljs.core.str("devtools.core/enable-single-feature! was removed "),cljs.core.str("and has no effect in "),cljs.core.str(devtools.core.make_lib_info.call(null)),cljs.core.str(" "),cljs.core.str("=> use (devtools.core/install! features) to install custom features")].join(''));
});
devtools.core.disable_single_feature_BANG_ = (function devtools$core$disable_single_feature_BANG_(_feature){
return console.warn([cljs.core.str("devtools.core/disable-single-feature! was removed "),cljs.core.str("and has no effect in "),cljs.core.str(devtools.core.make_lib_info.call(null)),cljs.core.str(" "),cljs.core.str("=> use (devtools.core/install! features) to install custom features")].join(''));
});
devtools.core.enable_feature_BANG_ = (function devtools$core$enable_feature_BANG_(var_args){
var args__26658__auto__ = [];
var len__26651__auto___29210 = arguments.length;
var i__26652__auto___29211 = (0);
while(true){
if((i__26652__auto___29211 < len__26651__auto___29210)){
args__26658__auto__.push((arguments[i__26652__auto___29211]));

var G__29212 = (i__26652__auto___29211 + (1));
i__26652__auto___29211 = G__29212;
continue;
} else {
}
break;
}

var argseq__26659__auto__ = ((((0) < args__26658__auto__.length))?(new cljs.core.IndexedSeq(args__26658__auto__.slice((0)),(0),null)):null);
return devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__26659__auto__);
});

devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_features){
return console.warn([cljs.core.str("devtools.core/enable-feature! was removed "),cljs.core.str("and has no effect in "),cljs.core.str(devtools.core.make_lib_info.call(null)),cljs.core.str(" "),cljs.core.str("=> use (devtools.core/install! features) to install custom features")].join(''));
});

devtools.core.enable_feature_BANG_.cljs$lang$maxFixedArity = (0);

devtools.core.enable_feature_BANG_.cljs$lang$applyTo = (function (seq29209){
return devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29209));
});

devtools.core.disable_feature_BANG_ = (function devtools$core$disable_feature_BANG_(var_args){
var args__26658__auto__ = [];
var len__26651__auto___29214 = arguments.length;
var i__26652__auto___29215 = (0);
while(true){
if((i__26652__auto___29215 < len__26651__auto___29214)){
args__26658__auto__.push((arguments[i__26652__auto___29215]));

var G__29216 = (i__26652__auto___29215 + (1));
i__26652__auto___29215 = G__29216;
continue;
} else {
}
break;
}

var argseq__26659__auto__ = ((((0) < args__26658__auto__.length))?(new cljs.core.IndexedSeq(args__26658__auto__.slice((0)),(0),null)):null);
return devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__26659__auto__);
});

devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_features){
return console.warn([cljs.core.str("devtools.core/disable-feature! was removed "),cljs.core.str("and has no effect in "),cljs.core.str(devtools.core.make_lib_info.call(null)),cljs.core.str(" "),cljs.core.str("=> use (devtools.core/install! features) to install custom features")].join(''));
});

devtools.core.disable_feature_BANG_.cljs$lang$maxFixedArity = (0);

devtools.core.disable_feature_BANG_.cljs$lang$applyTo = (function (seq29213){
return devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29213));
});

devtools.core.single_feature_available_QMARK_ = (function devtools$core$single_feature_available_QMARK_(_feature){
return console.warn([cljs.core.str("devtools.core/single-feature-available? was removed "),cljs.core.str("and has no effect in "),cljs.core.str(devtools.core.make_lib_info.call(null)),cljs.core.str(" "),cljs.core.str("=> use devtools.core/is-feature-available? instead")].join(''));
});
devtools.core.feature_available_QMARK_ = (function devtools$core$feature_available_QMARK_(var_args){
var args__26658__auto__ = [];
var len__26651__auto___29218 = arguments.length;
var i__26652__auto___29219 = (0);
while(true){
if((i__26652__auto___29219 < len__26651__auto___29218)){
args__26658__auto__.push((arguments[i__26652__auto___29219]));

var G__29220 = (i__26652__auto___29219 + (1));
i__26652__auto___29219 = G__29220;
continue;
} else {
}
break;
}

var argseq__26659__auto__ = ((((0) < args__26658__auto__.length))?(new cljs.core.IndexedSeq(args__26658__auto__.slice((0)),(0),null)):null);
return devtools.core.feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__26659__auto__);
});

devtools.core.feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (_features){
return console.warn([cljs.core.str("devtools.core/feature-available? was removed "),cljs.core.str("and has no effect in "),cljs.core.str(devtools.core.make_lib_info.call(null)),cljs.core.str(" "),cljs.core.str("=> use devtools.core/is-feature-available? instead")].join(''));
});

devtools.core.feature_available_QMARK_.cljs$lang$maxFixedArity = (0);

devtools.core.feature_available_QMARK_.cljs$lang$applyTo = (function (seq29217){
return devtools.core.feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29217));
});


//# sourceMappingURL=core.js.map?rel=1480029274487