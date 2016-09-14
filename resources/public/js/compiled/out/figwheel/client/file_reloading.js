// Compiled by ClojureScript 1.9.89 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__22578__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__22578__auto__){
return or__22578__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__22578__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__22578__auto__)){
return or__22578__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__30577_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__30577_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__30582 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__30583 = null;
var count__30584 = (0);
var i__30585 = (0);
while(true){
if((i__30585 < count__30584)){
var n = cljs.core._nth.call(null,chunk__30583,i__30585);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__30586 = seq__30582;
var G__30587 = chunk__30583;
var G__30588 = count__30584;
var G__30589 = (i__30585 + (1));
seq__30582 = G__30586;
chunk__30583 = G__30587;
count__30584 = G__30588;
i__30585 = G__30589;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30582);
if(temp__4657__auto__){
var seq__30582__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30582__$1)){
var c__23389__auto__ = cljs.core.chunk_first.call(null,seq__30582__$1);
var G__30590 = cljs.core.chunk_rest.call(null,seq__30582__$1);
var G__30591 = c__23389__auto__;
var G__30592 = cljs.core.count.call(null,c__23389__auto__);
var G__30593 = (0);
seq__30582 = G__30590;
chunk__30583 = G__30591;
count__30584 = G__30592;
i__30585 = G__30593;
continue;
} else {
var n = cljs.core.first.call(null,seq__30582__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__30594 = cljs.core.next.call(null,seq__30582__$1);
var G__30595 = null;
var G__30596 = (0);
var G__30597 = (0);
seq__30582 = G__30594;
chunk__30583 = G__30595;
count__30584 = G__30596;
i__30585 = G__30597;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__30648_30659 = cljs.core.seq.call(null,deps);
var chunk__30649_30660 = null;
var count__30650_30661 = (0);
var i__30651_30662 = (0);
while(true){
if((i__30651_30662 < count__30650_30661)){
var dep_30663 = cljs.core._nth.call(null,chunk__30649_30660,i__30651_30662);
topo_sort_helper_STAR_.call(null,dep_30663,(depth + (1)),state);

var G__30664 = seq__30648_30659;
var G__30665 = chunk__30649_30660;
var G__30666 = count__30650_30661;
var G__30667 = (i__30651_30662 + (1));
seq__30648_30659 = G__30664;
chunk__30649_30660 = G__30665;
count__30650_30661 = G__30666;
i__30651_30662 = G__30667;
continue;
} else {
var temp__4657__auto___30668 = cljs.core.seq.call(null,seq__30648_30659);
if(temp__4657__auto___30668){
var seq__30648_30669__$1 = temp__4657__auto___30668;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30648_30669__$1)){
var c__23389__auto___30670 = cljs.core.chunk_first.call(null,seq__30648_30669__$1);
var G__30671 = cljs.core.chunk_rest.call(null,seq__30648_30669__$1);
var G__30672 = c__23389__auto___30670;
var G__30673 = cljs.core.count.call(null,c__23389__auto___30670);
var G__30674 = (0);
seq__30648_30659 = G__30671;
chunk__30649_30660 = G__30672;
count__30650_30661 = G__30673;
i__30651_30662 = G__30674;
continue;
} else {
var dep_30675 = cljs.core.first.call(null,seq__30648_30669__$1);
topo_sort_helper_STAR_.call(null,dep_30675,(depth + (1)),state);

var G__30676 = cljs.core.next.call(null,seq__30648_30669__$1);
var G__30677 = null;
var G__30678 = (0);
var G__30679 = (0);
seq__30648_30659 = G__30676;
chunk__30649_30660 = G__30677;
count__30650_30661 = G__30678;
i__30651_30662 = G__30679;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__30652){
var vec__30656 = p__30652;
var seq__30657 = cljs.core.seq.call(null,vec__30656);
var first__30658 = cljs.core.first.call(null,seq__30657);
var seq__30657__$1 = cljs.core.next.call(null,seq__30657);
var x = first__30658;
var xs = seq__30657__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__30656,seq__30657,first__30658,seq__30657__$1,x,xs,get_deps__$1){
return (function (p1__30598_SHARP_){
return clojure.set.difference.call(null,p1__30598_SHARP_,x);
});})(vec__30656,seq__30657,first__30658,seq__30657__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__30692 = cljs.core.seq.call(null,provides);
var chunk__30693 = null;
var count__30694 = (0);
var i__30695 = (0);
while(true){
if((i__30695 < count__30694)){
var prov = cljs.core._nth.call(null,chunk__30693,i__30695);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30696_30704 = cljs.core.seq.call(null,requires);
var chunk__30697_30705 = null;
var count__30698_30706 = (0);
var i__30699_30707 = (0);
while(true){
if((i__30699_30707 < count__30698_30706)){
var req_30708 = cljs.core._nth.call(null,chunk__30697_30705,i__30699_30707);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30708,prov);

var G__30709 = seq__30696_30704;
var G__30710 = chunk__30697_30705;
var G__30711 = count__30698_30706;
var G__30712 = (i__30699_30707 + (1));
seq__30696_30704 = G__30709;
chunk__30697_30705 = G__30710;
count__30698_30706 = G__30711;
i__30699_30707 = G__30712;
continue;
} else {
var temp__4657__auto___30713 = cljs.core.seq.call(null,seq__30696_30704);
if(temp__4657__auto___30713){
var seq__30696_30714__$1 = temp__4657__auto___30713;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30696_30714__$1)){
var c__23389__auto___30715 = cljs.core.chunk_first.call(null,seq__30696_30714__$1);
var G__30716 = cljs.core.chunk_rest.call(null,seq__30696_30714__$1);
var G__30717 = c__23389__auto___30715;
var G__30718 = cljs.core.count.call(null,c__23389__auto___30715);
var G__30719 = (0);
seq__30696_30704 = G__30716;
chunk__30697_30705 = G__30717;
count__30698_30706 = G__30718;
i__30699_30707 = G__30719;
continue;
} else {
var req_30720 = cljs.core.first.call(null,seq__30696_30714__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30720,prov);

var G__30721 = cljs.core.next.call(null,seq__30696_30714__$1);
var G__30722 = null;
var G__30723 = (0);
var G__30724 = (0);
seq__30696_30704 = G__30721;
chunk__30697_30705 = G__30722;
count__30698_30706 = G__30723;
i__30699_30707 = G__30724;
continue;
}
} else {
}
}
break;
}

var G__30725 = seq__30692;
var G__30726 = chunk__30693;
var G__30727 = count__30694;
var G__30728 = (i__30695 + (1));
seq__30692 = G__30725;
chunk__30693 = G__30726;
count__30694 = G__30727;
i__30695 = G__30728;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30692);
if(temp__4657__auto__){
var seq__30692__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30692__$1)){
var c__23389__auto__ = cljs.core.chunk_first.call(null,seq__30692__$1);
var G__30729 = cljs.core.chunk_rest.call(null,seq__30692__$1);
var G__30730 = c__23389__auto__;
var G__30731 = cljs.core.count.call(null,c__23389__auto__);
var G__30732 = (0);
seq__30692 = G__30729;
chunk__30693 = G__30730;
count__30694 = G__30731;
i__30695 = G__30732;
continue;
} else {
var prov = cljs.core.first.call(null,seq__30692__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30700_30733 = cljs.core.seq.call(null,requires);
var chunk__30701_30734 = null;
var count__30702_30735 = (0);
var i__30703_30736 = (0);
while(true){
if((i__30703_30736 < count__30702_30735)){
var req_30737 = cljs.core._nth.call(null,chunk__30701_30734,i__30703_30736);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30737,prov);

var G__30738 = seq__30700_30733;
var G__30739 = chunk__30701_30734;
var G__30740 = count__30702_30735;
var G__30741 = (i__30703_30736 + (1));
seq__30700_30733 = G__30738;
chunk__30701_30734 = G__30739;
count__30702_30735 = G__30740;
i__30703_30736 = G__30741;
continue;
} else {
var temp__4657__auto___30742__$1 = cljs.core.seq.call(null,seq__30700_30733);
if(temp__4657__auto___30742__$1){
var seq__30700_30743__$1 = temp__4657__auto___30742__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30700_30743__$1)){
var c__23389__auto___30744 = cljs.core.chunk_first.call(null,seq__30700_30743__$1);
var G__30745 = cljs.core.chunk_rest.call(null,seq__30700_30743__$1);
var G__30746 = c__23389__auto___30744;
var G__30747 = cljs.core.count.call(null,c__23389__auto___30744);
var G__30748 = (0);
seq__30700_30733 = G__30745;
chunk__30701_30734 = G__30746;
count__30702_30735 = G__30747;
i__30703_30736 = G__30748;
continue;
} else {
var req_30749 = cljs.core.first.call(null,seq__30700_30743__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30749,prov);

var G__30750 = cljs.core.next.call(null,seq__30700_30743__$1);
var G__30751 = null;
var G__30752 = (0);
var G__30753 = (0);
seq__30700_30733 = G__30750;
chunk__30701_30734 = G__30751;
count__30702_30735 = G__30752;
i__30703_30736 = G__30753;
continue;
}
} else {
}
}
break;
}

var G__30754 = cljs.core.next.call(null,seq__30692__$1);
var G__30755 = null;
var G__30756 = (0);
var G__30757 = (0);
seq__30692 = G__30754;
chunk__30693 = G__30755;
count__30694 = G__30756;
i__30695 = G__30757;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__30762_30766 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__30763_30767 = null;
var count__30764_30768 = (0);
var i__30765_30769 = (0);
while(true){
if((i__30765_30769 < count__30764_30768)){
var ns_30770 = cljs.core._nth.call(null,chunk__30763_30767,i__30765_30769);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30770);

var G__30771 = seq__30762_30766;
var G__30772 = chunk__30763_30767;
var G__30773 = count__30764_30768;
var G__30774 = (i__30765_30769 + (1));
seq__30762_30766 = G__30771;
chunk__30763_30767 = G__30772;
count__30764_30768 = G__30773;
i__30765_30769 = G__30774;
continue;
} else {
var temp__4657__auto___30775 = cljs.core.seq.call(null,seq__30762_30766);
if(temp__4657__auto___30775){
var seq__30762_30776__$1 = temp__4657__auto___30775;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30762_30776__$1)){
var c__23389__auto___30777 = cljs.core.chunk_first.call(null,seq__30762_30776__$1);
var G__30778 = cljs.core.chunk_rest.call(null,seq__30762_30776__$1);
var G__30779 = c__23389__auto___30777;
var G__30780 = cljs.core.count.call(null,c__23389__auto___30777);
var G__30781 = (0);
seq__30762_30766 = G__30778;
chunk__30763_30767 = G__30779;
count__30764_30768 = G__30780;
i__30765_30769 = G__30781;
continue;
} else {
var ns_30782 = cljs.core.first.call(null,seq__30762_30776__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30782);

var G__30783 = cljs.core.next.call(null,seq__30762_30776__$1);
var G__30784 = null;
var G__30785 = (0);
var G__30786 = (0);
seq__30762_30766 = G__30783;
chunk__30763_30767 = G__30784;
count__30764_30768 = G__30785;
i__30765_30769 = G__30786;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__22578__auto__ = goog.require__;
if(cljs.core.truth_(or__22578__auto__)){
return or__22578__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__30787__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__30787 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30788__i = 0, G__30788__a = new Array(arguments.length -  0);
while (G__30788__i < G__30788__a.length) {G__30788__a[G__30788__i] = arguments[G__30788__i + 0]; ++G__30788__i;}
  args = new cljs.core.IndexedSeq(G__30788__a,0);
} 
return G__30787__delegate.call(this,args);};
G__30787.cljs$lang$maxFixedArity = 0;
G__30787.cljs$lang$applyTo = (function (arglist__30789){
var args = cljs.core.seq(arglist__30789);
return G__30787__delegate(args);
});
G__30787.cljs$core$IFn$_invoke$arity$variadic = G__30787__delegate;
return G__30787;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__30791 = cljs.core._EQ_;
var expr__30792 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__30791.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__30792))){
var path_parts = ((function (pred__30791,expr__30792){
return (function (p1__30790_SHARP_){
return clojure.string.split.call(null,p1__30790_SHARP_,/[\/\\]/);
});})(pred__30791,expr__30792))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__30791,expr__30792){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e30794){if((e30794 instanceof Error)){
var e = e30794;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30794;

}
}})());
});
;})(path_parts,sep,root,pred__30791,expr__30792))
} else {
if(cljs.core.truth_(pred__30791.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__30792))){
return ((function (pred__30791,expr__30792){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__30791,expr__30792){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__30791,expr__30792))
);

return deferred.addErrback(((function (deferred,pred__30791,expr__30792){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__30791,expr__30792))
);
});
;})(pred__30791,expr__30792))
} else {
return ((function (pred__30791,expr__30792){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__30791,expr__30792))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__30795,callback){
var map__30798 = p__30795;
var map__30798__$1 = ((((!((map__30798 == null)))?((((map__30798.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30798.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30798):map__30798);
var file_msg = map__30798__$1;
var request_url = cljs.core.get.call(null,map__30798__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__30798,map__30798__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__30798,map__30798__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__27722__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27722__auto__){
return (function (){
var f__27723__auto__ = (function (){var switch__27610__auto__ = ((function (c__27722__auto__){
return (function (state_30822){
var state_val_30823 = (state_30822[(1)]);
if((state_val_30823 === (7))){
var inst_30818 = (state_30822[(2)]);
var state_30822__$1 = state_30822;
var statearr_30824_30844 = state_30822__$1;
(statearr_30824_30844[(2)] = inst_30818);

(statearr_30824_30844[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30823 === (1))){
var state_30822__$1 = state_30822;
var statearr_30825_30845 = state_30822__$1;
(statearr_30825_30845[(2)] = null);

(statearr_30825_30845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30823 === (4))){
var inst_30802 = (state_30822[(7)]);
var inst_30802__$1 = (state_30822[(2)]);
var state_30822__$1 = (function (){var statearr_30826 = state_30822;
(statearr_30826[(7)] = inst_30802__$1);

return statearr_30826;
})();
if(cljs.core.truth_(inst_30802__$1)){
var statearr_30827_30846 = state_30822__$1;
(statearr_30827_30846[(1)] = (5));

} else {
var statearr_30828_30847 = state_30822__$1;
(statearr_30828_30847[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30823 === (6))){
var state_30822__$1 = state_30822;
var statearr_30829_30848 = state_30822__$1;
(statearr_30829_30848[(2)] = null);

(statearr_30829_30848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30823 === (3))){
var inst_30820 = (state_30822[(2)]);
var state_30822__$1 = state_30822;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30822__$1,inst_30820);
} else {
if((state_val_30823 === (2))){
var state_30822__$1 = state_30822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30822__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_30823 === (11))){
var inst_30814 = (state_30822[(2)]);
var state_30822__$1 = (function (){var statearr_30830 = state_30822;
(statearr_30830[(8)] = inst_30814);

return statearr_30830;
})();
var statearr_30831_30849 = state_30822__$1;
(statearr_30831_30849[(2)] = null);

(statearr_30831_30849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30823 === (9))){
var inst_30808 = (state_30822[(9)]);
var inst_30806 = (state_30822[(10)]);
var inst_30810 = inst_30808.call(null,inst_30806);
var state_30822__$1 = state_30822;
var statearr_30832_30850 = state_30822__$1;
(statearr_30832_30850[(2)] = inst_30810);

(statearr_30832_30850[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30823 === (5))){
var inst_30802 = (state_30822[(7)]);
var inst_30804 = figwheel.client.file_reloading.blocking_load.call(null,inst_30802);
var state_30822__$1 = state_30822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30822__$1,(8),inst_30804);
} else {
if((state_val_30823 === (10))){
var inst_30806 = (state_30822[(10)]);
var inst_30812 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_30806);
var state_30822__$1 = state_30822;
var statearr_30833_30851 = state_30822__$1;
(statearr_30833_30851[(2)] = inst_30812);

(statearr_30833_30851[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30823 === (8))){
var inst_30808 = (state_30822[(9)]);
var inst_30802 = (state_30822[(7)]);
var inst_30806 = (state_30822[(2)]);
var inst_30807 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_30808__$1 = cljs.core.get.call(null,inst_30807,inst_30802);
var state_30822__$1 = (function (){var statearr_30834 = state_30822;
(statearr_30834[(9)] = inst_30808__$1);

(statearr_30834[(10)] = inst_30806);

return statearr_30834;
})();
if(cljs.core.truth_(inst_30808__$1)){
var statearr_30835_30852 = state_30822__$1;
(statearr_30835_30852[(1)] = (9));

} else {
var statearr_30836_30853 = state_30822__$1;
(statearr_30836_30853[(1)] = (10));

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
});})(c__27722__auto__))
;
return ((function (switch__27610__auto__,c__27722__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__27611__auto__ = null;
var figwheel$client$file_reloading$state_machine__27611__auto____0 = (function (){
var statearr_30840 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30840[(0)] = figwheel$client$file_reloading$state_machine__27611__auto__);

(statearr_30840[(1)] = (1));

return statearr_30840;
});
var figwheel$client$file_reloading$state_machine__27611__auto____1 = (function (state_30822){
while(true){
var ret_value__27612__auto__ = (function (){try{while(true){
var result__27613__auto__ = switch__27610__auto__.call(null,state_30822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27613__auto__;
}
break;
}
}catch (e30841){if((e30841 instanceof Object)){
var ex__27614__auto__ = e30841;
var statearr_30842_30854 = state_30822;
(statearr_30842_30854[(5)] = ex__27614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30841;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27612__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30855 = state_30822;
state_30822 = G__30855;
continue;
} else {
return ret_value__27612__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27611__auto__ = function(state_30822){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27611__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27611__auto____1.call(this,state_30822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__27611__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27611__auto____0;
figwheel$client$file_reloading$state_machine__27611__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27611__auto____1;
return figwheel$client$file_reloading$state_machine__27611__auto__;
})()
;})(switch__27610__auto__,c__27722__auto__))
})();
var state__27724__auto__ = (function (){var statearr_30843 = f__27723__auto__.call(null);
(statearr_30843[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27722__auto__);

return statearr_30843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27724__auto__);
});})(c__27722__auto__))
);

return c__27722__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__30856,callback){
var map__30859 = p__30856;
var map__30859__$1 = ((((!((map__30859 == null)))?((((map__30859.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30859.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30859):map__30859);
var file_msg = map__30859__$1;
var namespace = cljs.core.get.call(null,map__30859__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__30859,map__30859__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__30859,map__30859__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__30861){
var map__30864 = p__30861;
var map__30864__$1 = ((((!((map__30864 == null)))?((((map__30864.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30864.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30864):map__30864);
var file_msg = map__30864__$1;
var namespace = cljs.core.get.call(null,map__30864__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__22566__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__22566__auto__){
var or__22578__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__22578__auto__)){
return or__22578__auto__;
} else {
var or__22578__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__22578__auto____$1)){
return or__22578__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__22566__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30866,callback){
var map__30869 = p__30866;
var map__30869__$1 = ((((!((map__30869 == null)))?((((map__30869.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30869.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30869):map__30869);
var file_msg = map__30869__$1;
var request_url = cljs.core.get.call(null,map__30869__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__30869__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__27722__auto___30973 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27722__auto___30973,out){
return (function (){
var f__27723__auto__ = (function (){var switch__27610__auto__ = ((function (c__27722__auto___30973,out){
return (function (state_30955){
var state_val_30956 = (state_30955[(1)]);
if((state_val_30956 === (1))){
var inst_30929 = cljs.core.seq.call(null,files);
var inst_30930 = cljs.core.first.call(null,inst_30929);
var inst_30931 = cljs.core.next.call(null,inst_30929);
var inst_30932 = files;
var state_30955__$1 = (function (){var statearr_30957 = state_30955;
(statearr_30957[(7)] = inst_30931);

(statearr_30957[(8)] = inst_30930);

(statearr_30957[(9)] = inst_30932);

return statearr_30957;
})();
var statearr_30958_30974 = state_30955__$1;
(statearr_30958_30974[(2)] = null);

(statearr_30958_30974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30956 === (2))){
var inst_30938 = (state_30955[(10)]);
var inst_30932 = (state_30955[(9)]);
var inst_30937 = cljs.core.seq.call(null,inst_30932);
var inst_30938__$1 = cljs.core.first.call(null,inst_30937);
var inst_30939 = cljs.core.next.call(null,inst_30937);
var inst_30940 = (inst_30938__$1 == null);
var inst_30941 = cljs.core.not.call(null,inst_30940);
var state_30955__$1 = (function (){var statearr_30959 = state_30955;
(statearr_30959[(10)] = inst_30938__$1);

(statearr_30959[(11)] = inst_30939);

return statearr_30959;
})();
if(inst_30941){
var statearr_30960_30975 = state_30955__$1;
(statearr_30960_30975[(1)] = (4));

} else {
var statearr_30961_30976 = state_30955__$1;
(statearr_30961_30976[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30956 === (3))){
var inst_30953 = (state_30955[(2)]);
var state_30955__$1 = state_30955;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30955__$1,inst_30953);
} else {
if((state_val_30956 === (4))){
var inst_30938 = (state_30955[(10)]);
var inst_30943 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30938);
var state_30955__$1 = state_30955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30955__$1,(7),inst_30943);
} else {
if((state_val_30956 === (5))){
var inst_30949 = cljs.core.async.close_BANG_.call(null,out);
var state_30955__$1 = state_30955;
var statearr_30962_30977 = state_30955__$1;
(statearr_30962_30977[(2)] = inst_30949);

(statearr_30962_30977[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30956 === (6))){
var inst_30951 = (state_30955[(2)]);
var state_30955__$1 = state_30955;
var statearr_30963_30978 = state_30955__$1;
(statearr_30963_30978[(2)] = inst_30951);

(statearr_30963_30978[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30956 === (7))){
var inst_30939 = (state_30955[(11)]);
var inst_30945 = (state_30955[(2)]);
var inst_30946 = cljs.core.async.put_BANG_.call(null,out,inst_30945);
var inst_30932 = inst_30939;
var state_30955__$1 = (function (){var statearr_30964 = state_30955;
(statearr_30964[(12)] = inst_30946);

(statearr_30964[(9)] = inst_30932);

return statearr_30964;
})();
var statearr_30965_30979 = state_30955__$1;
(statearr_30965_30979[(2)] = null);

(statearr_30965_30979[(1)] = (2));


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
});})(c__27722__auto___30973,out))
;
return ((function (switch__27610__auto__,c__27722__auto___30973,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27611__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27611__auto____0 = (function (){
var statearr_30969 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30969[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27611__auto__);

(statearr_30969[(1)] = (1));

return statearr_30969;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27611__auto____1 = (function (state_30955){
while(true){
var ret_value__27612__auto__ = (function (){try{while(true){
var result__27613__auto__ = switch__27610__auto__.call(null,state_30955);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27613__auto__;
}
break;
}
}catch (e30970){if((e30970 instanceof Object)){
var ex__27614__auto__ = e30970;
var statearr_30971_30980 = state_30955;
(statearr_30971_30980[(5)] = ex__27614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30955);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30970;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27612__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30981 = state_30955;
state_30955 = G__30981;
continue;
} else {
return ret_value__27612__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27611__auto__ = function(state_30955){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27611__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27611__auto____1.call(this,state_30955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27611__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27611__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27611__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27611__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27611__auto__;
})()
;})(switch__27610__auto__,c__27722__auto___30973,out))
})();
var state__27724__auto__ = (function (){var statearr_30972 = f__27723__auto__.call(null);
(statearr_30972[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27722__auto___30973);

return statearr_30972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27724__auto__);
});})(c__27722__auto___30973,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30982,opts){
var map__30986 = p__30982;
var map__30986__$1 = ((((!((map__30986 == null)))?((((map__30986.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30986.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30986):map__30986);
var eval_body__$1 = cljs.core.get.call(null,map__30986__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30986__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__22566__auto__ = eval_body__$1;
if(cljs.core.truth_(and__22566__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__22566__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e30988){var e = e30988;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__30989_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30989_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__30998){
var vec__30999 = p__30998;
var k = cljs.core.nth.call(null,vec__30999,(0),null);
var v = cljs.core.nth.call(null,vec__30999,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__31002){
var vec__31003 = p__31002;
var k = cljs.core.nth.call(null,vec__31003,(0),null);
var v = cljs.core.nth.call(null,vec__31003,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__31009,p__31010){
var map__31257 = p__31009;
var map__31257__$1 = ((((!((map__31257 == null)))?((((map__31257.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31257.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31257):map__31257);
var opts = map__31257__$1;
var before_jsload = cljs.core.get.call(null,map__31257__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__31257__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__31257__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__31258 = p__31010;
var map__31258__$1 = ((((!((map__31258 == null)))?((((map__31258.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31258.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31258):map__31258);
var msg = map__31258__$1;
var files = cljs.core.get.call(null,map__31258__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__31258__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__31258__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27722__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27722__auto__,map__31257,map__31257__$1,opts,before_jsload,on_jsload,reload_dependents,map__31258,map__31258__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__27723__auto__ = (function (){var switch__27610__auto__ = ((function (c__27722__auto__,map__31257,map__31257__$1,opts,before_jsload,on_jsload,reload_dependents,map__31258,map__31258__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_31411){
var state_val_31412 = (state_31411[(1)]);
if((state_val_31412 === (7))){
var inst_31274 = (state_31411[(7)]);
var inst_31272 = (state_31411[(8)]);
var inst_31273 = (state_31411[(9)]);
var inst_31275 = (state_31411[(10)]);
var inst_31280 = cljs.core._nth.call(null,inst_31273,inst_31275);
var inst_31281 = figwheel.client.file_reloading.eval_body.call(null,inst_31280,opts);
var inst_31282 = (inst_31275 + (1));
var tmp31413 = inst_31274;
var tmp31414 = inst_31272;
var tmp31415 = inst_31273;
var inst_31272__$1 = tmp31414;
var inst_31273__$1 = tmp31415;
var inst_31274__$1 = tmp31413;
var inst_31275__$1 = inst_31282;
var state_31411__$1 = (function (){var statearr_31416 = state_31411;
(statearr_31416[(11)] = inst_31281);

(statearr_31416[(7)] = inst_31274__$1);

(statearr_31416[(8)] = inst_31272__$1);

(statearr_31416[(9)] = inst_31273__$1);

(statearr_31416[(10)] = inst_31275__$1);

return statearr_31416;
})();
var statearr_31417_31503 = state_31411__$1;
(statearr_31417_31503[(2)] = null);

(statearr_31417_31503[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31412 === (20))){
var inst_31315 = (state_31411[(12)]);
var inst_31323 = figwheel.client.file_reloading.sort_files.call(null,inst_31315);
var state_31411__$1 = state_31411;
var statearr_31418_31504 = state_31411__$1;
(statearr_31418_31504[(2)] = inst_31323);

(statearr_31418_31504[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31412 === (27))){
var state_31411__$1 = state_31411;
var statearr_31419_31505 = state_31411__$1;
(statearr_31419_31505[(2)] = null);

(statearr_31419_31505[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31412 === (1))){
var inst_31264 = (state_31411[(13)]);
var inst_31261 = before_jsload.call(null,files);
var inst_31262 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_31263 = (function (){return ((function (inst_31264,inst_31261,inst_31262,state_val_31412,c__27722__auto__,map__31257,map__31257__$1,opts,before_jsload,on_jsload,reload_dependents,map__31258,map__31258__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31006_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31006_SHARP_);
});
;})(inst_31264,inst_31261,inst_31262,state_val_31412,c__27722__auto__,map__31257,map__31257__$1,opts,before_jsload,on_jsload,reload_dependents,map__31258,map__31258__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31264__$1 = cljs.core.filter.call(null,inst_31263,files);
var inst_31265 = cljs.core.not_empty.call(null,inst_31264__$1);
var state_31411__$1 = (function (){var statearr_31420 = state_31411;
(statearr_31420[(13)] = inst_31264__$1);

(statearr_31420[(14)] = inst_31262);

(statearr_31420[(15)] = inst_31261);

return statearr_31420;
})();
if(cljs.core.truth_(inst_31265)){
var statearr_31421_31506 = state_31411__$1;
(statearr_31421_31506[(1)] = (2));

} else {
var statearr_31422_31507 = state_31411__$1;
(statearr_31422_31507[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31412 === (24))){
var state_31411__$1 = state_31411;
var statearr_31423_31508 = state_31411__$1;
(statearr_31423_31508[(2)] = null);

(statearr_31423_31508[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31412 === (39))){
var inst_31365 = (state_31411[(16)]);
var state_31411__$1 = state_31411;
var statearr_31424_31509 = state_31411__$1;
(statearr_31424_31509[(2)] = inst_31365);

(statearr_31424_31509[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31412 === (46))){
var inst_31406 = (state_31411[(2)]);
var state_31411__$1 = state_31411;
var statearr_31425_31510 = state_31411__$1;
(statearr_31425_31510[(2)] = inst_31406);

(statearr_31425_31510[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31412 === (4))){
var inst_31309 = (state_31411[(2)]);
var inst_31310 = cljs.core.List.EMPTY;
var inst_31311 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_31310);
var inst_31312 = (function (){return ((function (inst_31309,inst_31310,inst_31311,state_val_31412,c__27722__auto__,map__31257,map__31257__$1,opts,before_jsload,on_jsload,reload_dependents,map__31258,map__31258__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31007_SHARP_){
var and__22566__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31007_SHARP_);
if(cljs.core.truth_(and__22566__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31007_SHARP_));
} else {
return and__22566__auto__;
}
});
;})(inst_31309,inst_31310,inst_31311,state_val_31412,c__27722__auto__,map__31257,map__31257__$1,opts,before_jsload,on_jsload,reload_dependents,map__31258,map__31258__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31313 = cljs.core.filter.call(null,inst_31312,files);
var inst_31314 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_31315 = cljs.core.concat.call(null,inst_31313,inst_31314);
var state_31411__$1 = (function (){var statearr_31426 = state_31411;
(statearr_31426[(17)] = inst_31309);

(statearr_31426[(12)] = inst_31315);

(statearr_31426[(18)] = inst_31311);

return statearr_31426;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_31427_31511 = state_31411__$1;
(statearr_31427_31511[(1)] = (16));

} else {
var statearr_31428_31512 = state_31411__$1;
(statearr_31428_31512[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31412 === (15))){
var inst_31299 = (state_31411[(2)]);
var state_31411__$1 = state_31411;
var statearr_31429_31513 = state_31411__$1;
(statearr_31429_31513[(2)] = inst_31299);

(statearr_31429_31513[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31412 === (21))){
var inst_31325 = (state_31411[(19)]);
var inst_31325__$1 = (state_31411[(2)]);
var inst_31326 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_31325__$1);
var state_31411__$1 = (function (){var statearr_31430 = state_31411;
(statearr_31430[(19)] = inst_31325__$1);

return statearr_31430;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31411__$1,(22),inst_31326);
} else {
if((state_val_31412 === (31))){
var inst_31409 = (state_31411[(2)]);
var state_31411__$1 = state_31411;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31411__$1,inst_31409);
} else {
if((state_val_31412 === (32))){
var inst_31365 = (state_31411[(16)]);
var inst_31370 = inst_31365.cljs$lang$protocol_mask$partition0$;
var inst_31371 = (inst_31370 & (64));
var inst_31372 = inst_31365.cljs$core$ISeq$;
var inst_31373 = (inst_31371) || (inst_31372);
var state_31411__$1 = state_31411;
if(cljs.core.truth_(inst_31373)){
var statearr_31431_31514 = state_31411__$1;
(statearr_31431_31514[(1)] = (35));

} else {
var statearr_31432_31515 = state_31411__$1;
(statearr_31432_31515[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31412 === (40))){
var inst_31386 = (state_31411[(20)]);
var inst_31385 = (state_31411[(2)]);
var inst_31386__$1 = cljs.core.get.call(null,inst_31385,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_31387 = cljs.core.get.call(null,inst_31385,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_31388 = cljs.core.not_empty.call(null,inst_31386__$1);
var state_31411__$1 = (function (){var statearr_31433 = state_31411;
(statearr_31433[(21)] = inst_31387);

(statearr_31433[(20)] = inst_31386__$1);

return statearr_31433;
})();
if(cljs.core.truth_(inst_31388)){
var statearr_31434_31516 = state_31411__$1;
(statearr_31434_31516[(1)] = (41));

} else {
var statearr_31435_31517 = state_31411__$1;
(statearr_31435_31517[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31412 === (33))){
var state_31411__$1 = state_31411;
var statearr_31436_31518 = state_31411__$1;
(statearr_31436_31518[(2)] = false);

(statearr_31436_31518[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31412 === (13))){
var inst_31285 = (state_31411[(22)]);
var inst_31289 = cljs.core.chunk_first.call(null,inst_31285);
var inst_31290 = cljs.core.chunk_rest.call(null,inst_31285);
var inst_31291 = cljs.core.count.call(null,inst_31289);
var inst_31272 = inst_31290;
var inst_31273 = inst_31289;
var inst_31274 = inst_31291;
var inst_31275 = (0);
var state_31411__$1 = (function (){var statearr_31437 = state_31411;
(statearr_31437[(7)] = inst_31274);

(statearr_31437[(8)] = inst_31272);

(statearr_31437[(9)] = inst_31273);

(statearr_31437[(10)] = inst_31275);

return statearr_31437;
})();
var statearr_31438_31519 = state_31411__$1;
(statearr_31438_31519[(2)] = null);

(statearr_31438_31519[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31412 === (22))){
var inst_31328 = (state_31411[(23)]);
var inst_31325 = (state_31411[(19)]);
var inst_31329 = (state_31411[(24)]);
var inst_31333 = (state_31411[(25)]);
var inst_31328__$1 = (state_31411[(2)]);
var inst_31329__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31328__$1);
var inst_31330 = (function (){var all_files = inst_31325;
var res_SINGLEQUOTE_ = inst_31328__$1;
var res = inst_31329__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_31328,inst_31325,inst_31329,inst_31333,inst_31328__$1,inst_31329__$1,state_val_31412,c__27722__auto__,map__31257,map__31257__$1,opts,before_jsload,on_jsload,reload_dependents,map__31258,map__31258__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31008_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__31008_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_31328,inst_31325,inst_31329,inst_31333,inst_31328__$1,inst_31329__$1,state_val_31412,c__27722__auto__,map__31257,map__31257__$1,opts,before_jsload,on_jsload,reload_dependents,map__31258,map__31258__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31331 = cljs.core.filter.call(null,inst_31330,inst_31328__$1);
var inst_31332 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_31333__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31332);
var inst_31334 = cljs.core.not_empty.call(null,inst_31333__$1);
var state_31411__$1 = (function (){var statearr_31439 = state_31411;
(statearr_31439[(23)] = inst_31328__$1);

(statearr_31439[(26)] = inst_31331);

(statearr_31439[(24)] = inst_31329__$1);

(statearr_31439[(25)] = inst_31333__$1);

return statearr_31439;
})();
if(cljs.core.truth_(inst_31334)){
var statearr_31440_31520 = state_31411__$1;
(statearr_31440_31520[(1)] = (23));

} else {
var statearr_31441_31521 = state_31411__$1;
(statearr_31441_31521[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31412 === (36))){
var state_31411__$1 = state_31411;
var statearr_31442_31522 = state_31411__$1;
(statearr_31442_31522[(2)] = false);

(statearr_31442_31522[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31412 === (41))){
var inst_31386 = (state_31411[(20)]);
var inst_31390 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_31391 = cljs.core.map.call(null,inst_31390,inst_31386);
var inst_31392 = cljs.core.pr_str.call(null,inst_31391);
var inst_31393 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_31392)].join('');
var inst_31394 = figwheel.client.utils.log.call(null,inst_31393);
var state_31411__$1 = state_31411;
var statearr_31443_31523 = state_31411__$1;
(statearr_31443_31523[(2)] = inst_31394);

(statearr_31443_31523[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31412 === (43))){
var inst_31387 = (state_31411[(21)]);
var inst_31397 = (state_31411[(2)]);
var inst_31398 = cljs.core.not_empty.call(null,inst_31387);
var state_31411__$1 = (function (){var statearr_31444 = state_31411;
(statearr_31444[(27)] = inst_31397);

return statearr_31444;
})();
if(cljs.core.truth_(inst_31398)){
var statearr_31445_31524 = state_31411__$1;
(statearr_31445_31524[(1)] = (44));

} else {
var statearr_31446_31525 = state_31411__$1;
(statearr_31446_31525[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31412 === (29))){
var inst_31365 = (state_31411[(16)]);
var inst_31328 = (state_31411[(23)]);
var inst_31325 = (state_31411[(19)]);
var inst_31331 = (state_31411[(26)]);
var inst_31329 = (state_31411[(24)]);
var inst_31333 = (state_31411[(25)]);
var inst_31361 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_31364 = (function (){var all_files = inst_31325;
var res_SINGLEQUOTE_ = inst_31328;
var res = inst_31329;
var files_not_loaded = inst_31331;
var dependencies_that_loaded = inst_31333;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31365,inst_31328,inst_31325,inst_31331,inst_31329,inst_31333,inst_31361,state_val_31412,c__27722__auto__,map__31257,map__31257__$1,opts,before_jsload,on_jsload,reload_dependents,map__31258,map__31258__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31363){
var map__31447 = p__31363;
var map__31447__$1 = ((((!((map__31447 == null)))?((((map__31447.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31447.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31447):map__31447);
var namespace = cljs.core.get.call(null,map__31447__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31365,inst_31328,inst_31325,inst_31331,inst_31329,inst_31333,inst_31361,state_val_31412,c__27722__auto__,map__31257,map__31257__$1,opts,before_jsload,on_jsload,reload_dependents,map__31258,map__31258__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31365__$1 = cljs.core.group_by.call(null,inst_31364,inst_31331);
var inst_31367 = (inst_31365__$1 == null);
var inst_31368 = cljs.core.not.call(null,inst_31367);
var state_31411__$1 = (function (){var statearr_31449 = state_31411;
(statearr_31449[(16)] = inst_31365__$1);

(statearr_31449[(28)] = inst_31361);

return statearr_31449;
})();
if(inst_31368){
var statearr_31450_31526 = state_31411__$1;
(statearr_31450_31526[(1)] = (32));

} else {
var statearr_31451_31527 = state_31411__$1;
(statearr_31451_31527[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31412 === (44))){
var inst_31387 = (state_31411[(21)]);
var inst_31400 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31387);
var inst_31401 = cljs.core.pr_str.call(null,inst_31400);
var inst_31402 = [cljs.core.str("not required: "),cljs.core.str(inst_31401)].join('');
var inst_31403 = figwheel.client.utils.log.call(null,inst_31402);
var state_31411__$1 = state_31411;
var statearr_31452_31528 = state_31411__$1;
(statearr_31452_31528[(2)] = inst_31403);

(statearr_31452_31528[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31412 === (6))){
var inst_31306 = (state_31411[(2)]);
var state_31411__$1 = state_31411;
var statearr_31453_31529 = state_31411__$1;
(statearr_31453_31529[(2)] = inst_31306);

(statearr_31453_31529[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31412 === (28))){
var inst_31331 = (state_31411[(26)]);
var inst_31358 = (state_31411[(2)]);
var inst_31359 = cljs.core.not_empty.call(null,inst_31331);
var state_31411__$1 = (function (){var statearr_31454 = state_31411;
(statearr_31454[(29)] = inst_31358);

return statearr_31454;
})();
if(cljs.core.truth_(inst_31359)){
var statearr_31455_31530 = state_31411__$1;
(statearr_31455_31530[(1)] = (29));

} else {
var statearr_31456_31531 = state_31411__$1;
(statearr_31456_31531[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31412 === (25))){
var inst_31329 = (state_31411[(24)]);
var inst_31345 = (state_31411[(2)]);
var inst_31346 = cljs.core.not_empty.call(null,inst_31329);
var state_31411__$1 = (function (){var statearr_31457 = state_31411;
(statearr_31457[(30)] = inst_31345);

return statearr_31457;
})();
if(cljs.core.truth_(inst_31346)){
var statearr_31458_31532 = state_31411__$1;
(statearr_31458_31532[(1)] = (26));

} else {
var statearr_31459_31533 = state_31411__$1;
(statearr_31459_31533[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31412 === (34))){
var inst_31380 = (state_31411[(2)]);
var state_31411__$1 = state_31411;
if(cljs.core.truth_(inst_31380)){
var statearr_31460_31534 = state_31411__$1;
(statearr_31460_31534[(1)] = (38));

} else {
var statearr_31461_31535 = state_31411__$1;
(statearr_31461_31535[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31412 === (17))){
var state_31411__$1 = state_31411;
var statearr_31462_31536 = state_31411__$1;
(statearr_31462_31536[(2)] = recompile_dependents);

(statearr_31462_31536[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31412 === (3))){
var state_31411__$1 = state_31411;
var statearr_31463_31537 = state_31411__$1;
(statearr_31463_31537[(2)] = null);

(statearr_31463_31537[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31412 === (12))){
var inst_31302 = (state_31411[(2)]);
var state_31411__$1 = state_31411;
var statearr_31464_31538 = state_31411__$1;
(statearr_31464_31538[(2)] = inst_31302);

(statearr_31464_31538[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31412 === (2))){
var inst_31264 = (state_31411[(13)]);
var inst_31271 = cljs.core.seq.call(null,inst_31264);
var inst_31272 = inst_31271;
var inst_31273 = null;
var inst_31274 = (0);
var inst_31275 = (0);
var state_31411__$1 = (function (){var statearr_31465 = state_31411;
(statearr_31465[(7)] = inst_31274);

(statearr_31465[(8)] = inst_31272);

(statearr_31465[(9)] = inst_31273);

(statearr_31465[(10)] = inst_31275);

return statearr_31465;
})();
var statearr_31466_31539 = state_31411__$1;
(statearr_31466_31539[(2)] = null);

(statearr_31466_31539[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31412 === (23))){
var inst_31328 = (state_31411[(23)]);
var inst_31325 = (state_31411[(19)]);
var inst_31331 = (state_31411[(26)]);
var inst_31329 = (state_31411[(24)]);
var inst_31333 = (state_31411[(25)]);
var inst_31336 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_31338 = (function (){var all_files = inst_31325;
var res_SINGLEQUOTE_ = inst_31328;
var res = inst_31329;
var files_not_loaded = inst_31331;
var dependencies_that_loaded = inst_31333;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31328,inst_31325,inst_31331,inst_31329,inst_31333,inst_31336,state_val_31412,c__27722__auto__,map__31257,map__31257__$1,opts,before_jsload,on_jsload,reload_dependents,map__31258,map__31258__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31337){
var map__31467 = p__31337;
var map__31467__$1 = ((((!((map__31467 == null)))?((((map__31467.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31467.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31467):map__31467);
var request_url = cljs.core.get.call(null,map__31467__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31328,inst_31325,inst_31331,inst_31329,inst_31333,inst_31336,state_val_31412,c__27722__auto__,map__31257,map__31257__$1,opts,before_jsload,on_jsload,reload_dependents,map__31258,map__31258__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31339 = cljs.core.reverse.call(null,inst_31333);
var inst_31340 = cljs.core.map.call(null,inst_31338,inst_31339);
var inst_31341 = cljs.core.pr_str.call(null,inst_31340);
var inst_31342 = figwheel.client.utils.log.call(null,inst_31341);
var state_31411__$1 = (function (){var statearr_31469 = state_31411;
(statearr_31469[(31)] = inst_31336);

return statearr_31469;
})();
var statearr_31470_31540 = state_31411__$1;
(statearr_31470_31540[(2)] = inst_31342);

(statearr_31470_31540[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31412 === (35))){
var state_31411__$1 = state_31411;
var statearr_31471_31541 = state_31411__$1;
(statearr_31471_31541[(2)] = true);

(statearr_31471_31541[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31412 === (19))){
var inst_31315 = (state_31411[(12)]);
var inst_31321 = figwheel.client.file_reloading.expand_files.call(null,inst_31315);
var state_31411__$1 = state_31411;
var statearr_31472_31542 = state_31411__$1;
(statearr_31472_31542[(2)] = inst_31321);

(statearr_31472_31542[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31412 === (11))){
var state_31411__$1 = state_31411;
var statearr_31473_31543 = state_31411__$1;
(statearr_31473_31543[(2)] = null);

(statearr_31473_31543[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31412 === (9))){
var inst_31304 = (state_31411[(2)]);
var state_31411__$1 = state_31411;
var statearr_31474_31544 = state_31411__$1;
(statearr_31474_31544[(2)] = inst_31304);

(statearr_31474_31544[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31412 === (5))){
var inst_31274 = (state_31411[(7)]);
var inst_31275 = (state_31411[(10)]);
var inst_31277 = (inst_31275 < inst_31274);
var inst_31278 = inst_31277;
var state_31411__$1 = state_31411;
if(cljs.core.truth_(inst_31278)){
var statearr_31475_31545 = state_31411__$1;
(statearr_31475_31545[(1)] = (7));

} else {
var statearr_31476_31546 = state_31411__$1;
(statearr_31476_31546[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31412 === (14))){
var inst_31285 = (state_31411[(22)]);
var inst_31294 = cljs.core.first.call(null,inst_31285);
var inst_31295 = figwheel.client.file_reloading.eval_body.call(null,inst_31294,opts);
var inst_31296 = cljs.core.next.call(null,inst_31285);
var inst_31272 = inst_31296;
var inst_31273 = null;
var inst_31274 = (0);
var inst_31275 = (0);
var state_31411__$1 = (function (){var statearr_31477 = state_31411;
(statearr_31477[(32)] = inst_31295);

(statearr_31477[(7)] = inst_31274);

(statearr_31477[(8)] = inst_31272);

(statearr_31477[(9)] = inst_31273);

(statearr_31477[(10)] = inst_31275);

return statearr_31477;
})();
var statearr_31478_31547 = state_31411__$1;
(statearr_31478_31547[(2)] = null);

(statearr_31478_31547[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31412 === (45))){
var state_31411__$1 = state_31411;
var statearr_31479_31548 = state_31411__$1;
(statearr_31479_31548[(2)] = null);

(statearr_31479_31548[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31412 === (26))){
var inst_31328 = (state_31411[(23)]);
var inst_31325 = (state_31411[(19)]);
var inst_31331 = (state_31411[(26)]);
var inst_31329 = (state_31411[(24)]);
var inst_31333 = (state_31411[(25)]);
var inst_31348 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_31350 = (function (){var all_files = inst_31325;
var res_SINGLEQUOTE_ = inst_31328;
var res = inst_31329;
var files_not_loaded = inst_31331;
var dependencies_that_loaded = inst_31333;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31328,inst_31325,inst_31331,inst_31329,inst_31333,inst_31348,state_val_31412,c__27722__auto__,map__31257,map__31257__$1,opts,before_jsload,on_jsload,reload_dependents,map__31258,map__31258__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31349){
var map__31480 = p__31349;
var map__31480__$1 = ((((!((map__31480 == null)))?((((map__31480.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31480.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31480):map__31480);
var namespace = cljs.core.get.call(null,map__31480__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__31480__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31328,inst_31325,inst_31331,inst_31329,inst_31333,inst_31348,state_val_31412,c__27722__auto__,map__31257,map__31257__$1,opts,before_jsload,on_jsload,reload_dependents,map__31258,map__31258__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31351 = cljs.core.map.call(null,inst_31350,inst_31329);
var inst_31352 = cljs.core.pr_str.call(null,inst_31351);
var inst_31353 = figwheel.client.utils.log.call(null,inst_31352);
var inst_31354 = (function (){var all_files = inst_31325;
var res_SINGLEQUOTE_ = inst_31328;
var res = inst_31329;
var files_not_loaded = inst_31331;
var dependencies_that_loaded = inst_31333;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31328,inst_31325,inst_31331,inst_31329,inst_31333,inst_31348,inst_31350,inst_31351,inst_31352,inst_31353,state_val_31412,c__27722__auto__,map__31257,map__31257__$1,opts,before_jsload,on_jsload,reload_dependents,map__31258,map__31258__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31328,inst_31325,inst_31331,inst_31329,inst_31333,inst_31348,inst_31350,inst_31351,inst_31352,inst_31353,state_val_31412,c__27722__auto__,map__31257,map__31257__$1,opts,before_jsload,on_jsload,reload_dependents,map__31258,map__31258__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31355 = setTimeout(inst_31354,(10));
var state_31411__$1 = (function (){var statearr_31482 = state_31411;
(statearr_31482[(33)] = inst_31353);

(statearr_31482[(34)] = inst_31348);

return statearr_31482;
})();
var statearr_31483_31549 = state_31411__$1;
(statearr_31483_31549[(2)] = inst_31355);

(statearr_31483_31549[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31412 === (16))){
var state_31411__$1 = state_31411;
var statearr_31484_31550 = state_31411__$1;
(statearr_31484_31550[(2)] = reload_dependents);

(statearr_31484_31550[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31412 === (38))){
var inst_31365 = (state_31411[(16)]);
var inst_31382 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31365);
var state_31411__$1 = state_31411;
var statearr_31485_31551 = state_31411__$1;
(statearr_31485_31551[(2)] = inst_31382);

(statearr_31485_31551[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31412 === (30))){
var state_31411__$1 = state_31411;
var statearr_31486_31552 = state_31411__$1;
(statearr_31486_31552[(2)] = null);

(statearr_31486_31552[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31412 === (10))){
var inst_31285 = (state_31411[(22)]);
var inst_31287 = cljs.core.chunked_seq_QMARK_.call(null,inst_31285);
var state_31411__$1 = state_31411;
if(inst_31287){
var statearr_31487_31553 = state_31411__$1;
(statearr_31487_31553[(1)] = (13));

} else {
var statearr_31488_31554 = state_31411__$1;
(statearr_31488_31554[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31412 === (18))){
var inst_31319 = (state_31411[(2)]);
var state_31411__$1 = state_31411;
if(cljs.core.truth_(inst_31319)){
var statearr_31489_31555 = state_31411__$1;
(statearr_31489_31555[(1)] = (19));

} else {
var statearr_31490_31556 = state_31411__$1;
(statearr_31490_31556[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31412 === (42))){
var state_31411__$1 = state_31411;
var statearr_31491_31557 = state_31411__$1;
(statearr_31491_31557[(2)] = null);

(statearr_31491_31557[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31412 === (37))){
var inst_31377 = (state_31411[(2)]);
var state_31411__$1 = state_31411;
var statearr_31492_31558 = state_31411__$1;
(statearr_31492_31558[(2)] = inst_31377);

(statearr_31492_31558[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31412 === (8))){
var inst_31285 = (state_31411[(22)]);
var inst_31272 = (state_31411[(8)]);
var inst_31285__$1 = cljs.core.seq.call(null,inst_31272);
var state_31411__$1 = (function (){var statearr_31493 = state_31411;
(statearr_31493[(22)] = inst_31285__$1);

return statearr_31493;
})();
if(inst_31285__$1){
var statearr_31494_31559 = state_31411__$1;
(statearr_31494_31559[(1)] = (10));

} else {
var statearr_31495_31560 = state_31411__$1;
(statearr_31495_31560[(1)] = (11));

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
});})(c__27722__auto__,map__31257,map__31257__$1,opts,before_jsload,on_jsload,reload_dependents,map__31258,map__31258__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__27610__auto__,c__27722__auto__,map__31257,map__31257__$1,opts,before_jsload,on_jsload,reload_dependents,map__31258,map__31258__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27611__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27611__auto____0 = (function (){
var statearr_31499 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31499[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27611__auto__);

(statearr_31499[(1)] = (1));

return statearr_31499;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27611__auto____1 = (function (state_31411){
while(true){
var ret_value__27612__auto__ = (function (){try{while(true){
var result__27613__auto__ = switch__27610__auto__.call(null,state_31411);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27613__auto__;
}
break;
}
}catch (e31500){if((e31500 instanceof Object)){
var ex__27614__auto__ = e31500;
var statearr_31501_31561 = state_31411;
(statearr_31501_31561[(5)] = ex__27614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31411);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27612__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31562 = state_31411;
state_31411 = G__31562;
continue;
} else {
return ret_value__27612__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27611__auto__ = function(state_31411){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27611__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27611__auto____1.call(this,state_31411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27611__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27611__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27611__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27611__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27611__auto__;
})()
;})(switch__27610__auto__,c__27722__auto__,map__31257,map__31257__$1,opts,before_jsload,on_jsload,reload_dependents,map__31258,map__31258__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__27724__auto__ = (function (){var statearr_31502 = f__27723__auto__.call(null);
(statearr_31502[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27722__auto__);

return statearr_31502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27724__auto__);
});})(c__27722__auto__,map__31257,map__31257__$1,opts,before_jsload,on_jsload,reload_dependents,map__31258,map__31258__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__27722__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__31565,link){
var map__31568 = p__31565;
var map__31568__$1 = ((((!((map__31568 == null)))?((((map__31568.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31568.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31568):map__31568);
var file = cljs.core.get.call(null,map__31568__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__31568,map__31568__$1,file){
return (function (p1__31563_SHARP_,p2__31564_SHARP_){
if(cljs.core._EQ_.call(null,p1__31563_SHARP_,p2__31564_SHARP_)){
return p1__31563_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__31568,map__31568__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__31574){
var map__31575 = p__31574;
var map__31575__$1 = ((((!((map__31575 == null)))?((((map__31575.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31575.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31575):map__31575);
var match_length = cljs.core.get.call(null,map__31575__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__31575__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__31570_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__31570_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args31577 = [];
var len__23653__auto___31580 = arguments.length;
var i__23654__auto___31581 = (0);
while(true){
if((i__23654__auto___31581 < len__23653__auto___31580)){
args31577.push((arguments[i__23654__auto___31581]));

var G__31582 = (i__23654__auto___31581 + (1));
i__23654__auto___31581 = G__31582;
continue;
} else {
}
break;
}

var G__31579 = args31577.length;
switch (G__31579) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31577.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__31584_SHARP_,p2__31585_SHARP_){
return cljs.core.assoc.call(null,p1__31584_SHARP_,cljs.core.get.call(null,p2__31585_SHARP_,key),p2__31585_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__31586){
var map__31589 = p__31586;
var map__31589__$1 = ((((!((map__31589 == null)))?((((map__31589.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31589.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31589):map__31589);
var f_data = map__31589__$1;
var file = cljs.core.get.call(null,map__31589__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__31591,files_msg){
var map__31598 = p__31591;
var map__31598__$1 = ((((!((map__31598 == null)))?((((map__31598.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31598.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31598):map__31598);
var opts = map__31598__$1;
var on_cssload = cljs.core.get.call(null,map__31598__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__31600_31604 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__31601_31605 = null;
var count__31602_31606 = (0);
var i__31603_31607 = (0);
while(true){
if((i__31603_31607 < count__31602_31606)){
var f_31608 = cljs.core._nth.call(null,chunk__31601_31605,i__31603_31607);
figwheel.client.file_reloading.reload_css_file.call(null,f_31608);

var G__31609 = seq__31600_31604;
var G__31610 = chunk__31601_31605;
var G__31611 = count__31602_31606;
var G__31612 = (i__31603_31607 + (1));
seq__31600_31604 = G__31609;
chunk__31601_31605 = G__31610;
count__31602_31606 = G__31611;
i__31603_31607 = G__31612;
continue;
} else {
var temp__4657__auto___31613 = cljs.core.seq.call(null,seq__31600_31604);
if(temp__4657__auto___31613){
var seq__31600_31614__$1 = temp__4657__auto___31613;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31600_31614__$1)){
var c__23389__auto___31615 = cljs.core.chunk_first.call(null,seq__31600_31614__$1);
var G__31616 = cljs.core.chunk_rest.call(null,seq__31600_31614__$1);
var G__31617 = c__23389__auto___31615;
var G__31618 = cljs.core.count.call(null,c__23389__auto___31615);
var G__31619 = (0);
seq__31600_31604 = G__31616;
chunk__31601_31605 = G__31617;
count__31602_31606 = G__31618;
i__31603_31607 = G__31619;
continue;
} else {
var f_31620 = cljs.core.first.call(null,seq__31600_31614__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_31620);

var G__31621 = cljs.core.next.call(null,seq__31600_31614__$1);
var G__31622 = null;
var G__31623 = (0);
var G__31624 = (0);
seq__31600_31604 = G__31621;
chunk__31601_31605 = G__31622;
count__31602_31606 = G__31623;
i__31603_31607 = G__31624;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__31598,map__31598__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__31598,map__31598__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1473455234697