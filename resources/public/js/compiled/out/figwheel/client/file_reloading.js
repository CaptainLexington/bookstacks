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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__30606_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__30606_SHARP_));
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
var seq__30611 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__30612 = null;
var count__30613 = (0);
var i__30614 = (0);
while(true){
if((i__30614 < count__30613)){
var n = cljs.core._nth.call(null,chunk__30612,i__30614);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__30615 = seq__30611;
var G__30616 = chunk__30612;
var G__30617 = count__30613;
var G__30618 = (i__30614 + (1));
seq__30611 = G__30615;
chunk__30612 = G__30616;
count__30613 = G__30617;
i__30614 = G__30618;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30611);
if(temp__4657__auto__){
var seq__30611__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30611__$1)){
var c__23389__auto__ = cljs.core.chunk_first.call(null,seq__30611__$1);
var G__30619 = cljs.core.chunk_rest.call(null,seq__30611__$1);
var G__30620 = c__23389__auto__;
var G__30621 = cljs.core.count.call(null,c__23389__auto__);
var G__30622 = (0);
seq__30611 = G__30619;
chunk__30612 = G__30620;
count__30613 = G__30621;
i__30614 = G__30622;
continue;
} else {
var n = cljs.core.first.call(null,seq__30611__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__30623 = cljs.core.next.call(null,seq__30611__$1);
var G__30624 = null;
var G__30625 = (0);
var G__30626 = (0);
seq__30611 = G__30623;
chunk__30612 = G__30624;
count__30613 = G__30625;
i__30614 = G__30626;
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

var seq__30677_30688 = cljs.core.seq.call(null,deps);
var chunk__30678_30689 = null;
var count__30679_30690 = (0);
var i__30680_30691 = (0);
while(true){
if((i__30680_30691 < count__30679_30690)){
var dep_30692 = cljs.core._nth.call(null,chunk__30678_30689,i__30680_30691);
topo_sort_helper_STAR_.call(null,dep_30692,(depth + (1)),state);

var G__30693 = seq__30677_30688;
var G__30694 = chunk__30678_30689;
var G__30695 = count__30679_30690;
var G__30696 = (i__30680_30691 + (1));
seq__30677_30688 = G__30693;
chunk__30678_30689 = G__30694;
count__30679_30690 = G__30695;
i__30680_30691 = G__30696;
continue;
} else {
var temp__4657__auto___30697 = cljs.core.seq.call(null,seq__30677_30688);
if(temp__4657__auto___30697){
var seq__30677_30698__$1 = temp__4657__auto___30697;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30677_30698__$1)){
var c__23389__auto___30699 = cljs.core.chunk_first.call(null,seq__30677_30698__$1);
var G__30700 = cljs.core.chunk_rest.call(null,seq__30677_30698__$1);
var G__30701 = c__23389__auto___30699;
var G__30702 = cljs.core.count.call(null,c__23389__auto___30699);
var G__30703 = (0);
seq__30677_30688 = G__30700;
chunk__30678_30689 = G__30701;
count__30679_30690 = G__30702;
i__30680_30691 = G__30703;
continue;
} else {
var dep_30704 = cljs.core.first.call(null,seq__30677_30698__$1);
topo_sort_helper_STAR_.call(null,dep_30704,(depth + (1)),state);

var G__30705 = cljs.core.next.call(null,seq__30677_30698__$1);
var G__30706 = null;
var G__30707 = (0);
var G__30708 = (0);
seq__30677_30688 = G__30705;
chunk__30678_30689 = G__30706;
count__30679_30690 = G__30707;
i__30680_30691 = G__30708;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__30681){
var vec__30685 = p__30681;
var seq__30686 = cljs.core.seq.call(null,vec__30685);
var first__30687 = cljs.core.first.call(null,seq__30686);
var seq__30686__$1 = cljs.core.next.call(null,seq__30686);
var x = first__30687;
var xs = seq__30686__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__30685,seq__30686,first__30687,seq__30686__$1,x,xs,get_deps__$1){
return (function (p1__30627_SHARP_){
return clojure.set.difference.call(null,p1__30627_SHARP_,x);
});})(vec__30685,seq__30686,first__30687,seq__30686__$1,x,xs,get_deps__$1))
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
var seq__30721 = cljs.core.seq.call(null,provides);
var chunk__30722 = null;
var count__30723 = (0);
var i__30724 = (0);
while(true){
if((i__30724 < count__30723)){
var prov = cljs.core._nth.call(null,chunk__30722,i__30724);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30725_30733 = cljs.core.seq.call(null,requires);
var chunk__30726_30734 = null;
var count__30727_30735 = (0);
var i__30728_30736 = (0);
while(true){
if((i__30728_30736 < count__30727_30735)){
var req_30737 = cljs.core._nth.call(null,chunk__30726_30734,i__30728_30736);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30737,prov);

var G__30738 = seq__30725_30733;
var G__30739 = chunk__30726_30734;
var G__30740 = count__30727_30735;
var G__30741 = (i__30728_30736 + (1));
seq__30725_30733 = G__30738;
chunk__30726_30734 = G__30739;
count__30727_30735 = G__30740;
i__30728_30736 = G__30741;
continue;
} else {
var temp__4657__auto___30742 = cljs.core.seq.call(null,seq__30725_30733);
if(temp__4657__auto___30742){
var seq__30725_30743__$1 = temp__4657__auto___30742;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30725_30743__$1)){
var c__23389__auto___30744 = cljs.core.chunk_first.call(null,seq__30725_30743__$1);
var G__30745 = cljs.core.chunk_rest.call(null,seq__30725_30743__$1);
var G__30746 = c__23389__auto___30744;
var G__30747 = cljs.core.count.call(null,c__23389__auto___30744);
var G__30748 = (0);
seq__30725_30733 = G__30745;
chunk__30726_30734 = G__30746;
count__30727_30735 = G__30747;
i__30728_30736 = G__30748;
continue;
} else {
var req_30749 = cljs.core.first.call(null,seq__30725_30743__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30749,prov);

var G__30750 = cljs.core.next.call(null,seq__30725_30743__$1);
var G__30751 = null;
var G__30752 = (0);
var G__30753 = (0);
seq__30725_30733 = G__30750;
chunk__30726_30734 = G__30751;
count__30727_30735 = G__30752;
i__30728_30736 = G__30753;
continue;
}
} else {
}
}
break;
}

var G__30754 = seq__30721;
var G__30755 = chunk__30722;
var G__30756 = count__30723;
var G__30757 = (i__30724 + (1));
seq__30721 = G__30754;
chunk__30722 = G__30755;
count__30723 = G__30756;
i__30724 = G__30757;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30721);
if(temp__4657__auto__){
var seq__30721__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30721__$1)){
var c__23389__auto__ = cljs.core.chunk_first.call(null,seq__30721__$1);
var G__30758 = cljs.core.chunk_rest.call(null,seq__30721__$1);
var G__30759 = c__23389__auto__;
var G__30760 = cljs.core.count.call(null,c__23389__auto__);
var G__30761 = (0);
seq__30721 = G__30758;
chunk__30722 = G__30759;
count__30723 = G__30760;
i__30724 = G__30761;
continue;
} else {
var prov = cljs.core.first.call(null,seq__30721__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30729_30762 = cljs.core.seq.call(null,requires);
var chunk__30730_30763 = null;
var count__30731_30764 = (0);
var i__30732_30765 = (0);
while(true){
if((i__30732_30765 < count__30731_30764)){
var req_30766 = cljs.core._nth.call(null,chunk__30730_30763,i__30732_30765);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30766,prov);

var G__30767 = seq__30729_30762;
var G__30768 = chunk__30730_30763;
var G__30769 = count__30731_30764;
var G__30770 = (i__30732_30765 + (1));
seq__30729_30762 = G__30767;
chunk__30730_30763 = G__30768;
count__30731_30764 = G__30769;
i__30732_30765 = G__30770;
continue;
} else {
var temp__4657__auto___30771__$1 = cljs.core.seq.call(null,seq__30729_30762);
if(temp__4657__auto___30771__$1){
var seq__30729_30772__$1 = temp__4657__auto___30771__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30729_30772__$1)){
var c__23389__auto___30773 = cljs.core.chunk_first.call(null,seq__30729_30772__$1);
var G__30774 = cljs.core.chunk_rest.call(null,seq__30729_30772__$1);
var G__30775 = c__23389__auto___30773;
var G__30776 = cljs.core.count.call(null,c__23389__auto___30773);
var G__30777 = (0);
seq__30729_30762 = G__30774;
chunk__30730_30763 = G__30775;
count__30731_30764 = G__30776;
i__30732_30765 = G__30777;
continue;
} else {
var req_30778 = cljs.core.first.call(null,seq__30729_30772__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30778,prov);

var G__30779 = cljs.core.next.call(null,seq__30729_30772__$1);
var G__30780 = null;
var G__30781 = (0);
var G__30782 = (0);
seq__30729_30762 = G__30779;
chunk__30730_30763 = G__30780;
count__30731_30764 = G__30781;
i__30732_30765 = G__30782;
continue;
}
} else {
}
}
break;
}

var G__30783 = cljs.core.next.call(null,seq__30721__$1);
var G__30784 = null;
var G__30785 = (0);
var G__30786 = (0);
seq__30721 = G__30783;
chunk__30722 = G__30784;
count__30723 = G__30785;
i__30724 = G__30786;
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
var seq__30791_30795 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__30792_30796 = null;
var count__30793_30797 = (0);
var i__30794_30798 = (0);
while(true){
if((i__30794_30798 < count__30793_30797)){
var ns_30799 = cljs.core._nth.call(null,chunk__30792_30796,i__30794_30798);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30799);

var G__30800 = seq__30791_30795;
var G__30801 = chunk__30792_30796;
var G__30802 = count__30793_30797;
var G__30803 = (i__30794_30798 + (1));
seq__30791_30795 = G__30800;
chunk__30792_30796 = G__30801;
count__30793_30797 = G__30802;
i__30794_30798 = G__30803;
continue;
} else {
var temp__4657__auto___30804 = cljs.core.seq.call(null,seq__30791_30795);
if(temp__4657__auto___30804){
var seq__30791_30805__$1 = temp__4657__auto___30804;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30791_30805__$1)){
var c__23389__auto___30806 = cljs.core.chunk_first.call(null,seq__30791_30805__$1);
var G__30807 = cljs.core.chunk_rest.call(null,seq__30791_30805__$1);
var G__30808 = c__23389__auto___30806;
var G__30809 = cljs.core.count.call(null,c__23389__auto___30806);
var G__30810 = (0);
seq__30791_30795 = G__30807;
chunk__30792_30796 = G__30808;
count__30793_30797 = G__30809;
i__30794_30798 = G__30810;
continue;
} else {
var ns_30811 = cljs.core.first.call(null,seq__30791_30805__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30811);

var G__30812 = cljs.core.next.call(null,seq__30791_30805__$1);
var G__30813 = null;
var G__30814 = (0);
var G__30815 = (0);
seq__30791_30795 = G__30812;
chunk__30792_30796 = G__30813;
count__30793_30797 = G__30814;
i__30794_30798 = G__30815;
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
var G__30816__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__30816 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30817__i = 0, G__30817__a = new Array(arguments.length -  0);
while (G__30817__i < G__30817__a.length) {G__30817__a[G__30817__i] = arguments[G__30817__i + 0]; ++G__30817__i;}
  args = new cljs.core.IndexedSeq(G__30817__a,0);
} 
return G__30816__delegate.call(this,args);};
G__30816.cljs$lang$maxFixedArity = 0;
G__30816.cljs$lang$applyTo = (function (arglist__30818){
var args = cljs.core.seq(arglist__30818);
return G__30816__delegate(args);
});
G__30816.cljs$core$IFn$_invoke$arity$variadic = G__30816__delegate;
return G__30816;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__30820 = cljs.core._EQ_;
var expr__30821 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__30820.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__30821))){
var path_parts = ((function (pred__30820,expr__30821){
return (function (p1__30819_SHARP_){
return clojure.string.split.call(null,p1__30819_SHARP_,/[\/\\]/);
});})(pred__30820,expr__30821))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__30820,expr__30821){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e30823){if((e30823 instanceof Error)){
var e = e30823;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30823;

}
}})());
});
;})(path_parts,sep,root,pred__30820,expr__30821))
} else {
if(cljs.core.truth_(pred__30820.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__30821))){
return ((function (pred__30820,expr__30821){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__30820,expr__30821){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__30820,expr__30821))
);

return deferred.addErrback(((function (deferred,pred__30820,expr__30821){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__30820,expr__30821))
);
});
;})(pred__30820,expr__30821))
} else {
return ((function (pred__30820,expr__30821){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__30820,expr__30821))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__30824,callback){
var map__30827 = p__30824;
var map__30827__$1 = ((((!((map__30827 == null)))?((((map__30827.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30827.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30827):map__30827);
var file_msg = map__30827__$1;
var request_url = cljs.core.get.call(null,map__30827__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__30827,map__30827__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__30827,map__30827__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__27751__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27751__auto__){
return (function (){
var f__27752__auto__ = (function (){var switch__27639__auto__ = ((function (c__27751__auto__){
return (function (state_30851){
var state_val_30852 = (state_30851[(1)]);
if((state_val_30852 === (7))){
var inst_30847 = (state_30851[(2)]);
var state_30851__$1 = state_30851;
var statearr_30853_30873 = state_30851__$1;
(statearr_30853_30873[(2)] = inst_30847);

(statearr_30853_30873[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (1))){
var state_30851__$1 = state_30851;
var statearr_30854_30874 = state_30851__$1;
(statearr_30854_30874[(2)] = null);

(statearr_30854_30874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (4))){
var inst_30831 = (state_30851[(7)]);
var inst_30831__$1 = (state_30851[(2)]);
var state_30851__$1 = (function (){var statearr_30855 = state_30851;
(statearr_30855[(7)] = inst_30831__$1);

return statearr_30855;
})();
if(cljs.core.truth_(inst_30831__$1)){
var statearr_30856_30875 = state_30851__$1;
(statearr_30856_30875[(1)] = (5));

} else {
var statearr_30857_30876 = state_30851__$1;
(statearr_30857_30876[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (6))){
var state_30851__$1 = state_30851;
var statearr_30858_30877 = state_30851__$1;
(statearr_30858_30877[(2)] = null);

(statearr_30858_30877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (3))){
var inst_30849 = (state_30851[(2)]);
var state_30851__$1 = state_30851;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30851__$1,inst_30849);
} else {
if((state_val_30852 === (2))){
var state_30851__$1 = state_30851;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30851__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_30852 === (11))){
var inst_30843 = (state_30851[(2)]);
var state_30851__$1 = (function (){var statearr_30859 = state_30851;
(statearr_30859[(8)] = inst_30843);

return statearr_30859;
})();
var statearr_30860_30878 = state_30851__$1;
(statearr_30860_30878[(2)] = null);

(statearr_30860_30878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (9))){
var inst_30837 = (state_30851[(9)]);
var inst_30835 = (state_30851[(10)]);
var inst_30839 = inst_30837.call(null,inst_30835);
var state_30851__$1 = state_30851;
var statearr_30861_30879 = state_30851__$1;
(statearr_30861_30879[(2)] = inst_30839);

(statearr_30861_30879[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (5))){
var inst_30831 = (state_30851[(7)]);
var inst_30833 = figwheel.client.file_reloading.blocking_load.call(null,inst_30831);
var state_30851__$1 = state_30851;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30851__$1,(8),inst_30833);
} else {
if((state_val_30852 === (10))){
var inst_30835 = (state_30851[(10)]);
var inst_30841 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_30835);
var state_30851__$1 = state_30851;
var statearr_30862_30880 = state_30851__$1;
(statearr_30862_30880[(2)] = inst_30841);

(statearr_30862_30880[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (8))){
var inst_30837 = (state_30851[(9)]);
var inst_30831 = (state_30851[(7)]);
var inst_30835 = (state_30851[(2)]);
var inst_30836 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_30837__$1 = cljs.core.get.call(null,inst_30836,inst_30831);
var state_30851__$1 = (function (){var statearr_30863 = state_30851;
(statearr_30863[(9)] = inst_30837__$1);

(statearr_30863[(10)] = inst_30835);

return statearr_30863;
})();
if(cljs.core.truth_(inst_30837__$1)){
var statearr_30864_30881 = state_30851__$1;
(statearr_30864_30881[(1)] = (9));

} else {
var statearr_30865_30882 = state_30851__$1;
(statearr_30865_30882[(1)] = (10));

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
});})(c__27751__auto__))
;
return ((function (switch__27639__auto__,c__27751__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__27640__auto__ = null;
var figwheel$client$file_reloading$state_machine__27640__auto____0 = (function (){
var statearr_30869 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30869[(0)] = figwheel$client$file_reloading$state_machine__27640__auto__);

(statearr_30869[(1)] = (1));

return statearr_30869;
});
var figwheel$client$file_reloading$state_machine__27640__auto____1 = (function (state_30851){
while(true){
var ret_value__27641__auto__ = (function (){try{while(true){
var result__27642__auto__ = switch__27639__auto__.call(null,state_30851);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27642__auto__;
}
break;
}
}catch (e30870){if((e30870 instanceof Object)){
var ex__27643__auto__ = e30870;
var statearr_30871_30883 = state_30851;
(statearr_30871_30883[(5)] = ex__27643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30851);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30870;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30884 = state_30851;
state_30851 = G__30884;
continue;
} else {
return ret_value__27641__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27640__auto__ = function(state_30851){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27640__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27640__auto____1.call(this,state_30851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__27640__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27640__auto____0;
figwheel$client$file_reloading$state_machine__27640__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27640__auto____1;
return figwheel$client$file_reloading$state_machine__27640__auto__;
})()
;})(switch__27639__auto__,c__27751__auto__))
})();
var state__27753__auto__ = (function (){var statearr_30872 = f__27752__auto__.call(null);
(statearr_30872[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27751__auto__);

return statearr_30872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27753__auto__);
});})(c__27751__auto__))
);

return c__27751__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__30885,callback){
var map__30888 = p__30885;
var map__30888__$1 = ((((!((map__30888 == null)))?((((map__30888.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30888.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30888):map__30888);
var file_msg = map__30888__$1;
var namespace = cljs.core.get.call(null,map__30888__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__30888,map__30888__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__30888,map__30888__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__30890){
var map__30893 = p__30890;
var map__30893__$1 = ((((!((map__30893 == null)))?((((map__30893.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30893.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30893):map__30893);
var file_msg = map__30893__$1;
var namespace = cljs.core.get.call(null,map__30893__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30895,callback){
var map__30898 = p__30895;
var map__30898__$1 = ((((!((map__30898 == null)))?((((map__30898.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30898.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30898):map__30898);
var file_msg = map__30898__$1;
var request_url = cljs.core.get.call(null,map__30898__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__30898__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__27751__auto___31002 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27751__auto___31002,out){
return (function (){
var f__27752__auto__ = (function (){var switch__27639__auto__ = ((function (c__27751__auto___31002,out){
return (function (state_30984){
var state_val_30985 = (state_30984[(1)]);
if((state_val_30985 === (1))){
var inst_30958 = cljs.core.seq.call(null,files);
var inst_30959 = cljs.core.first.call(null,inst_30958);
var inst_30960 = cljs.core.next.call(null,inst_30958);
var inst_30961 = files;
var state_30984__$1 = (function (){var statearr_30986 = state_30984;
(statearr_30986[(7)] = inst_30960);

(statearr_30986[(8)] = inst_30959);

(statearr_30986[(9)] = inst_30961);

return statearr_30986;
})();
var statearr_30987_31003 = state_30984__$1;
(statearr_30987_31003[(2)] = null);

(statearr_30987_31003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30985 === (2))){
var inst_30967 = (state_30984[(10)]);
var inst_30961 = (state_30984[(9)]);
var inst_30966 = cljs.core.seq.call(null,inst_30961);
var inst_30967__$1 = cljs.core.first.call(null,inst_30966);
var inst_30968 = cljs.core.next.call(null,inst_30966);
var inst_30969 = (inst_30967__$1 == null);
var inst_30970 = cljs.core.not.call(null,inst_30969);
var state_30984__$1 = (function (){var statearr_30988 = state_30984;
(statearr_30988[(11)] = inst_30968);

(statearr_30988[(10)] = inst_30967__$1);

return statearr_30988;
})();
if(inst_30970){
var statearr_30989_31004 = state_30984__$1;
(statearr_30989_31004[(1)] = (4));

} else {
var statearr_30990_31005 = state_30984__$1;
(statearr_30990_31005[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30985 === (3))){
var inst_30982 = (state_30984[(2)]);
var state_30984__$1 = state_30984;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30984__$1,inst_30982);
} else {
if((state_val_30985 === (4))){
var inst_30967 = (state_30984[(10)]);
var inst_30972 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30967);
var state_30984__$1 = state_30984;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30984__$1,(7),inst_30972);
} else {
if((state_val_30985 === (5))){
var inst_30978 = cljs.core.async.close_BANG_.call(null,out);
var state_30984__$1 = state_30984;
var statearr_30991_31006 = state_30984__$1;
(statearr_30991_31006[(2)] = inst_30978);

(statearr_30991_31006[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30985 === (6))){
var inst_30980 = (state_30984[(2)]);
var state_30984__$1 = state_30984;
var statearr_30992_31007 = state_30984__$1;
(statearr_30992_31007[(2)] = inst_30980);

(statearr_30992_31007[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30985 === (7))){
var inst_30968 = (state_30984[(11)]);
var inst_30974 = (state_30984[(2)]);
var inst_30975 = cljs.core.async.put_BANG_.call(null,out,inst_30974);
var inst_30961 = inst_30968;
var state_30984__$1 = (function (){var statearr_30993 = state_30984;
(statearr_30993[(12)] = inst_30975);

(statearr_30993[(9)] = inst_30961);

return statearr_30993;
})();
var statearr_30994_31008 = state_30984__$1;
(statearr_30994_31008[(2)] = null);

(statearr_30994_31008[(1)] = (2));


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
});})(c__27751__auto___31002,out))
;
return ((function (switch__27639__auto__,c__27751__auto___31002,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27640__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27640__auto____0 = (function (){
var statearr_30998 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30998[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27640__auto__);

(statearr_30998[(1)] = (1));

return statearr_30998;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27640__auto____1 = (function (state_30984){
while(true){
var ret_value__27641__auto__ = (function (){try{while(true){
var result__27642__auto__ = switch__27639__auto__.call(null,state_30984);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27642__auto__;
}
break;
}
}catch (e30999){if((e30999 instanceof Object)){
var ex__27643__auto__ = e30999;
var statearr_31000_31009 = state_30984;
(statearr_31000_31009[(5)] = ex__27643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30984);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30999;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31010 = state_30984;
state_30984 = G__31010;
continue;
} else {
return ret_value__27641__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27640__auto__ = function(state_30984){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27640__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27640__auto____1.call(this,state_30984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27640__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27640__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27640__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27640__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27640__auto__;
})()
;})(switch__27639__auto__,c__27751__auto___31002,out))
})();
var state__27753__auto__ = (function (){var statearr_31001 = f__27752__auto__.call(null);
(statearr_31001[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27751__auto___31002);

return statearr_31001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27753__auto__);
});})(c__27751__auto___31002,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__31011,opts){
var map__31015 = p__31011;
var map__31015__$1 = ((((!((map__31015 == null)))?((((map__31015.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31015.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31015):map__31015);
var eval_body__$1 = cljs.core.get.call(null,map__31015__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__31015__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e31017){var e = e31017;
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
return (function (p1__31018_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31018_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__31027){
var vec__31028 = p__31027;
var k = cljs.core.nth.call(null,vec__31028,(0),null);
var v = cljs.core.nth.call(null,vec__31028,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__31031){
var vec__31032 = p__31031;
var k = cljs.core.nth.call(null,vec__31032,(0),null);
var v = cljs.core.nth.call(null,vec__31032,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__31038,p__31039){
var map__31286 = p__31038;
var map__31286__$1 = ((((!((map__31286 == null)))?((((map__31286.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31286.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31286):map__31286);
var opts = map__31286__$1;
var before_jsload = cljs.core.get.call(null,map__31286__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__31286__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__31286__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__31287 = p__31039;
var map__31287__$1 = ((((!((map__31287 == null)))?((((map__31287.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31287.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31287):map__31287);
var msg = map__31287__$1;
var files = cljs.core.get.call(null,map__31287__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__31287__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__31287__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27751__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27751__auto__,map__31286,map__31286__$1,opts,before_jsload,on_jsload,reload_dependents,map__31287,map__31287__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__27752__auto__ = (function (){var switch__27639__auto__ = ((function (c__27751__auto__,map__31286,map__31286__$1,opts,before_jsload,on_jsload,reload_dependents,map__31287,map__31287__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_31440){
var state_val_31441 = (state_31440[(1)]);
if((state_val_31441 === (7))){
var inst_31302 = (state_31440[(7)]);
var inst_31301 = (state_31440[(8)]);
var inst_31303 = (state_31440[(9)]);
var inst_31304 = (state_31440[(10)]);
var inst_31309 = cljs.core._nth.call(null,inst_31302,inst_31304);
var inst_31310 = figwheel.client.file_reloading.eval_body.call(null,inst_31309,opts);
var inst_31311 = (inst_31304 + (1));
var tmp31442 = inst_31302;
var tmp31443 = inst_31301;
var tmp31444 = inst_31303;
var inst_31301__$1 = tmp31443;
var inst_31302__$1 = tmp31442;
var inst_31303__$1 = tmp31444;
var inst_31304__$1 = inst_31311;
var state_31440__$1 = (function (){var statearr_31445 = state_31440;
(statearr_31445[(7)] = inst_31302__$1);

(statearr_31445[(8)] = inst_31301__$1);

(statearr_31445[(11)] = inst_31310);

(statearr_31445[(9)] = inst_31303__$1);

(statearr_31445[(10)] = inst_31304__$1);

return statearr_31445;
})();
var statearr_31446_31532 = state_31440__$1;
(statearr_31446_31532[(2)] = null);

(statearr_31446_31532[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31441 === (20))){
var inst_31344 = (state_31440[(12)]);
var inst_31352 = figwheel.client.file_reloading.sort_files.call(null,inst_31344);
var state_31440__$1 = state_31440;
var statearr_31447_31533 = state_31440__$1;
(statearr_31447_31533[(2)] = inst_31352);

(statearr_31447_31533[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31441 === (27))){
var state_31440__$1 = state_31440;
var statearr_31448_31534 = state_31440__$1;
(statearr_31448_31534[(2)] = null);

(statearr_31448_31534[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31441 === (1))){
var inst_31293 = (state_31440[(13)]);
var inst_31290 = before_jsload.call(null,files);
var inst_31291 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_31292 = (function (){return ((function (inst_31293,inst_31290,inst_31291,state_val_31441,c__27751__auto__,map__31286,map__31286__$1,opts,before_jsload,on_jsload,reload_dependents,map__31287,map__31287__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31035_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31035_SHARP_);
});
;})(inst_31293,inst_31290,inst_31291,state_val_31441,c__27751__auto__,map__31286,map__31286__$1,opts,before_jsload,on_jsload,reload_dependents,map__31287,map__31287__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31293__$1 = cljs.core.filter.call(null,inst_31292,files);
var inst_31294 = cljs.core.not_empty.call(null,inst_31293__$1);
var state_31440__$1 = (function (){var statearr_31449 = state_31440;
(statearr_31449[(14)] = inst_31291);

(statearr_31449[(13)] = inst_31293__$1);

(statearr_31449[(15)] = inst_31290);

return statearr_31449;
})();
if(cljs.core.truth_(inst_31294)){
var statearr_31450_31535 = state_31440__$1;
(statearr_31450_31535[(1)] = (2));

} else {
var statearr_31451_31536 = state_31440__$1;
(statearr_31451_31536[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31441 === (24))){
var state_31440__$1 = state_31440;
var statearr_31452_31537 = state_31440__$1;
(statearr_31452_31537[(2)] = null);

(statearr_31452_31537[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31441 === (39))){
var inst_31394 = (state_31440[(16)]);
var state_31440__$1 = state_31440;
var statearr_31453_31538 = state_31440__$1;
(statearr_31453_31538[(2)] = inst_31394);

(statearr_31453_31538[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31441 === (46))){
var inst_31435 = (state_31440[(2)]);
var state_31440__$1 = state_31440;
var statearr_31454_31539 = state_31440__$1;
(statearr_31454_31539[(2)] = inst_31435);

(statearr_31454_31539[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31441 === (4))){
var inst_31338 = (state_31440[(2)]);
var inst_31339 = cljs.core.List.EMPTY;
var inst_31340 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_31339);
var inst_31341 = (function (){return ((function (inst_31338,inst_31339,inst_31340,state_val_31441,c__27751__auto__,map__31286,map__31286__$1,opts,before_jsload,on_jsload,reload_dependents,map__31287,map__31287__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31036_SHARP_){
var and__22566__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31036_SHARP_);
if(cljs.core.truth_(and__22566__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31036_SHARP_));
} else {
return and__22566__auto__;
}
});
;})(inst_31338,inst_31339,inst_31340,state_val_31441,c__27751__auto__,map__31286,map__31286__$1,opts,before_jsload,on_jsload,reload_dependents,map__31287,map__31287__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31342 = cljs.core.filter.call(null,inst_31341,files);
var inst_31343 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_31344 = cljs.core.concat.call(null,inst_31342,inst_31343);
var state_31440__$1 = (function (){var statearr_31455 = state_31440;
(statearr_31455[(17)] = inst_31338);

(statearr_31455[(18)] = inst_31340);

(statearr_31455[(12)] = inst_31344);

return statearr_31455;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_31456_31540 = state_31440__$1;
(statearr_31456_31540[(1)] = (16));

} else {
var statearr_31457_31541 = state_31440__$1;
(statearr_31457_31541[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31441 === (15))){
var inst_31328 = (state_31440[(2)]);
var state_31440__$1 = state_31440;
var statearr_31458_31542 = state_31440__$1;
(statearr_31458_31542[(2)] = inst_31328);

(statearr_31458_31542[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31441 === (21))){
var inst_31354 = (state_31440[(19)]);
var inst_31354__$1 = (state_31440[(2)]);
var inst_31355 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_31354__$1);
var state_31440__$1 = (function (){var statearr_31459 = state_31440;
(statearr_31459[(19)] = inst_31354__$1);

return statearr_31459;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31440__$1,(22),inst_31355);
} else {
if((state_val_31441 === (31))){
var inst_31438 = (state_31440[(2)]);
var state_31440__$1 = state_31440;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31440__$1,inst_31438);
} else {
if((state_val_31441 === (32))){
var inst_31394 = (state_31440[(16)]);
var inst_31399 = inst_31394.cljs$lang$protocol_mask$partition0$;
var inst_31400 = (inst_31399 & (64));
var inst_31401 = inst_31394.cljs$core$ISeq$;
var inst_31402 = (inst_31400) || (inst_31401);
var state_31440__$1 = state_31440;
if(cljs.core.truth_(inst_31402)){
var statearr_31460_31543 = state_31440__$1;
(statearr_31460_31543[(1)] = (35));

} else {
var statearr_31461_31544 = state_31440__$1;
(statearr_31461_31544[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31441 === (40))){
var inst_31415 = (state_31440[(20)]);
var inst_31414 = (state_31440[(2)]);
var inst_31415__$1 = cljs.core.get.call(null,inst_31414,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_31416 = cljs.core.get.call(null,inst_31414,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_31417 = cljs.core.not_empty.call(null,inst_31415__$1);
var state_31440__$1 = (function (){var statearr_31462 = state_31440;
(statearr_31462[(21)] = inst_31416);

(statearr_31462[(20)] = inst_31415__$1);

return statearr_31462;
})();
if(cljs.core.truth_(inst_31417)){
var statearr_31463_31545 = state_31440__$1;
(statearr_31463_31545[(1)] = (41));

} else {
var statearr_31464_31546 = state_31440__$1;
(statearr_31464_31546[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31441 === (33))){
var state_31440__$1 = state_31440;
var statearr_31465_31547 = state_31440__$1;
(statearr_31465_31547[(2)] = false);

(statearr_31465_31547[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31441 === (13))){
var inst_31314 = (state_31440[(22)]);
var inst_31318 = cljs.core.chunk_first.call(null,inst_31314);
var inst_31319 = cljs.core.chunk_rest.call(null,inst_31314);
var inst_31320 = cljs.core.count.call(null,inst_31318);
var inst_31301 = inst_31319;
var inst_31302 = inst_31318;
var inst_31303 = inst_31320;
var inst_31304 = (0);
var state_31440__$1 = (function (){var statearr_31466 = state_31440;
(statearr_31466[(7)] = inst_31302);

(statearr_31466[(8)] = inst_31301);

(statearr_31466[(9)] = inst_31303);

(statearr_31466[(10)] = inst_31304);

return statearr_31466;
})();
var statearr_31467_31548 = state_31440__$1;
(statearr_31467_31548[(2)] = null);

(statearr_31467_31548[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31441 === (22))){
var inst_31354 = (state_31440[(19)]);
var inst_31362 = (state_31440[(23)]);
var inst_31357 = (state_31440[(24)]);
var inst_31358 = (state_31440[(25)]);
var inst_31357__$1 = (state_31440[(2)]);
var inst_31358__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31357__$1);
var inst_31359 = (function (){var all_files = inst_31354;
var res_SINGLEQUOTE_ = inst_31357__$1;
var res = inst_31358__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_31354,inst_31362,inst_31357,inst_31358,inst_31357__$1,inst_31358__$1,state_val_31441,c__27751__auto__,map__31286,map__31286__$1,opts,before_jsload,on_jsload,reload_dependents,map__31287,map__31287__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31037_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__31037_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_31354,inst_31362,inst_31357,inst_31358,inst_31357__$1,inst_31358__$1,state_val_31441,c__27751__auto__,map__31286,map__31286__$1,opts,before_jsload,on_jsload,reload_dependents,map__31287,map__31287__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31360 = cljs.core.filter.call(null,inst_31359,inst_31357__$1);
var inst_31361 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_31362__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31361);
var inst_31363 = cljs.core.not_empty.call(null,inst_31362__$1);
var state_31440__$1 = (function (){var statearr_31468 = state_31440;
(statearr_31468[(26)] = inst_31360);

(statearr_31468[(23)] = inst_31362__$1);

(statearr_31468[(24)] = inst_31357__$1);

(statearr_31468[(25)] = inst_31358__$1);

return statearr_31468;
})();
if(cljs.core.truth_(inst_31363)){
var statearr_31469_31549 = state_31440__$1;
(statearr_31469_31549[(1)] = (23));

} else {
var statearr_31470_31550 = state_31440__$1;
(statearr_31470_31550[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31441 === (36))){
var state_31440__$1 = state_31440;
var statearr_31471_31551 = state_31440__$1;
(statearr_31471_31551[(2)] = false);

(statearr_31471_31551[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31441 === (41))){
var inst_31415 = (state_31440[(20)]);
var inst_31419 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_31420 = cljs.core.map.call(null,inst_31419,inst_31415);
var inst_31421 = cljs.core.pr_str.call(null,inst_31420);
var inst_31422 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_31421)].join('');
var inst_31423 = figwheel.client.utils.log.call(null,inst_31422);
var state_31440__$1 = state_31440;
var statearr_31472_31552 = state_31440__$1;
(statearr_31472_31552[(2)] = inst_31423);

(statearr_31472_31552[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31441 === (43))){
var inst_31416 = (state_31440[(21)]);
var inst_31426 = (state_31440[(2)]);
var inst_31427 = cljs.core.not_empty.call(null,inst_31416);
var state_31440__$1 = (function (){var statearr_31473 = state_31440;
(statearr_31473[(27)] = inst_31426);

return statearr_31473;
})();
if(cljs.core.truth_(inst_31427)){
var statearr_31474_31553 = state_31440__$1;
(statearr_31474_31553[(1)] = (44));

} else {
var statearr_31475_31554 = state_31440__$1;
(statearr_31475_31554[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31441 === (29))){
var inst_31394 = (state_31440[(16)]);
var inst_31360 = (state_31440[(26)]);
var inst_31354 = (state_31440[(19)]);
var inst_31362 = (state_31440[(23)]);
var inst_31357 = (state_31440[(24)]);
var inst_31358 = (state_31440[(25)]);
var inst_31390 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_31393 = (function (){var all_files = inst_31354;
var res_SINGLEQUOTE_ = inst_31357;
var res = inst_31358;
var files_not_loaded = inst_31360;
var dependencies_that_loaded = inst_31362;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31394,inst_31360,inst_31354,inst_31362,inst_31357,inst_31358,inst_31390,state_val_31441,c__27751__auto__,map__31286,map__31286__$1,opts,before_jsload,on_jsload,reload_dependents,map__31287,map__31287__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31392){
var map__31476 = p__31392;
var map__31476__$1 = ((((!((map__31476 == null)))?((((map__31476.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31476.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31476):map__31476);
var namespace = cljs.core.get.call(null,map__31476__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31394,inst_31360,inst_31354,inst_31362,inst_31357,inst_31358,inst_31390,state_val_31441,c__27751__auto__,map__31286,map__31286__$1,opts,before_jsload,on_jsload,reload_dependents,map__31287,map__31287__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31394__$1 = cljs.core.group_by.call(null,inst_31393,inst_31360);
var inst_31396 = (inst_31394__$1 == null);
var inst_31397 = cljs.core.not.call(null,inst_31396);
var state_31440__$1 = (function (){var statearr_31478 = state_31440;
(statearr_31478[(16)] = inst_31394__$1);

(statearr_31478[(28)] = inst_31390);

return statearr_31478;
})();
if(inst_31397){
var statearr_31479_31555 = state_31440__$1;
(statearr_31479_31555[(1)] = (32));

} else {
var statearr_31480_31556 = state_31440__$1;
(statearr_31480_31556[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31441 === (44))){
var inst_31416 = (state_31440[(21)]);
var inst_31429 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31416);
var inst_31430 = cljs.core.pr_str.call(null,inst_31429);
var inst_31431 = [cljs.core.str("not required: "),cljs.core.str(inst_31430)].join('');
var inst_31432 = figwheel.client.utils.log.call(null,inst_31431);
var state_31440__$1 = state_31440;
var statearr_31481_31557 = state_31440__$1;
(statearr_31481_31557[(2)] = inst_31432);

(statearr_31481_31557[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31441 === (6))){
var inst_31335 = (state_31440[(2)]);
var state_31440__$1 = state_31440;
var statearr_31482_31558 = state_31440__$1;
(statearr_31482_31558[(2)] = inst_31335);

(statearr_31482_31558[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31441 === (28))){
var inst_31360 = (state_31440[(26)]);
var inst_31387 = (state_31440[(2)]);
var inst_31388 = cljs.core.not_empty.call(null,inst_31360);
var state_31440__$1 = (function (){var statearr_31483 = state_31440;
(statearr_31483[(29)] = inst_31387);

return statearr_31483;
})();
if(cljs.core.truth_(inst_31388)){
var statearr_31484_31559 = state_31440__$1;
(statearr_31484_31559[(1)] = (29));

} else {
var statearr_31485_31560 = state_31440__$1;
(statearr_31485_31560[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31441 === (25))){
var inst_31358 = (state_31440[(25)]);
var inst_31374 = (state_31440[(2)]);
var inst_31375 = cljs.core.not_empty.call(null,inst_31358);
var state_31440__$1 = (function (){var statearr_31486 = state_31440;
(statearr_31486[(30)] = inst_31374);

return statearr_31486;
})();
if(cljs.core.truth_(inst_31375)){
var statearr_31487_31561 = state_31440__$1;
(statearr_31487_31561[(1)] = (26));

} else {
var statearr_31488_31562 = state_31440__$1;
(statearr_31488_31562[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31441 === (34))){
var inst_31409 = (state_31440[(2)]);
var state_31440__$1 = state_31440;
if(cljs.core.truth_(inst_31409)){
var statearr_31489_31563 = state_31440__$1;
(statearr_31489_31563[(1)] = (38));

} else {
var statearr_31490_31564 = state_31440__$1;
(statearr_31490_31564[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31441 === (17))){
var state_31440__$1 = state_31440;
var statearr_31491_31565 = state_31440__$1;
(statearr_31491_31565[(2)] = recompile_dependents);

(statearr_31491_31565[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31441 === (3))){
var state_31440__$1 = state_31440;
var statearr_31492_31566 = state_31440__$1;
(statearr_31492_31566[(2)] = null);

(statearr_31492_31566[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31441 === (12))){
var inst_31331 = (state_31440[(2)]);
var state_31440__$1 = state_31440;
var statearr_31493_31567 = state_31440__$1;
(statearr_31493_31567[(2)] = inst_31331);

(statearr_31493_31567[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31441 === (2))){
var inst_31293 = (state_31440[(13)]);
var inst_31300 = cljs.core.seq.call(null,inst_31293);
var inst_31301 = inst_31300;
var inst_31302 = null;
var inst_31303 = (0);
var inst_31304 = (0);
var state_31440__$1 = (function (){var statearr_31494 = state_31440;
(statearr_31494[(7)] = inst_31302);

(statearr_31494[(8)] = inst_31301);

(statearr_31494[(9)] = inst_31303);

(statearr_31494[(10)] = inst_31304);

return statearr_31494;
})();
var statearr_31495_31568 = state_31440__$1;
(statearr_31495_31568[(2)] = null);

(statearr_31495_31568[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31441 === (23))){
var inst_31360 = (state_31440[(26)]);
var inst_31354 = (state_31440[(19)]);
var inst_31362 = (state_31440[(23)]);
var inst_31357 = (state_31440[(24)]);
var inst_31358 = (state_31440[(25)]);
var inst_31365 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_31367 = (function (){var all_files = inst_31354;
var res_SINGLEQUOTE_ = inst_31357;
var res = inst_31358;
var files_not_loaded = inst_31360;
var dependencies_that_loaded = inst_31362;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31360,inst_31354,inst_31362,inst_31357,inst_31358,inst_31365,state_val_31441,c__27751__auto__,map__31286,map__31286__$1,opts,before_jsload,on_jsload,reload_dependents,map__31287,map__31287__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31366){
var map__31496 = p__31366;
var map__31496__$1 = ((((!((map__31496 == null)))?((((map__31496.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31496.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31496):map__31496);
var request_url = cljs.core.get.call(null,map__31496__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31360,inst_31354,inst_31362,inst_31357,inst_31358,inst_31365,state_val_31441,c__27751__auto__,map__31286,map__31286__$1,opts,before_jsload,on_jsload,reload_dependents,map__31287,map__31287__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31368 = cljs.core.reverse.call(null,inst_31362);
var inst_31369 = cljs.core.map.call(null,inst_31367,inst_31368);
var inst_31370 = cljs.core.pr_str.call(null,inst_31369);
var inst_31371 = figwheel.client.utils.log.call(null,inst_31370);
var state_31440__$1 = (function (){var statearr_31498 = state_31440;
(statearr_31498[(31)] = inst_31365);

return statearr_31498;
})();
var statearr_31499_31569 = state_31440__$1;
(statearr_31499_31569[(2)] = inst_31371);

(statearr_31499_31569[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31441 === (35))){
var state_31440__$1 = state_31440;
var statearr_31500_31570 = state_31440__$1;
(statearr_31500_31570[(2)] = true);

(statearr_31500_31570[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31441 === (19))){
var inst_31344 = (state_31440[(12)]);
var inst_31350 = figwheel.client.file_reloading.expand_files.call(null,inst_31344);
var state_31440__$1 = state_31440;
var statearr_31501_31571 = state_31440__$1;
(statearr_31501_31571[(2)] = inst_31350);

(statearr_31501_31571[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31441 === (11))){
var state_31440__$1 = state_31440;
var statearr_31502_31572 = state_31440__$1;
(statearr_31502_31572[(2)] = null);

(statearr_31502_31572[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31441 === (9))){
var inst_31333 = (state_31440[(2)]);
var state_31440__$1 = state_31440;
var statearr_31503_31573 = state_31440__$1;
(statearr_31503_31573[(2)] = inst_31333);

(statearr_31503_31573[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31441 === (5))){
var inst_31303 = (state_31440[(9)]);
var inst_31304 = (state_31440[(10)]);
var inst_31306 = (inst_31304 < inst_31303);
var inst_31307 = inst_31306;
var state_31440__$1 = state_31440;
if(cljs.core.truth_(inst_31307)){
var statearr_31504_31574 = state_31440__$1;
(statearr_31504_31574[(1)] = (7));

} else {
var statearr_31505_31575 = state_31440__$1;
(statearr_31505_31575[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31441 === (14))){
var inst_31314 = (state_31440[(22)]);
var inst_31323 = cljs.core.first.call(null,inst_31314);
var inst_31324 = figwheel.client.file_reloading.eval_body.call(null,inst_31323,opts);
var inst_31325 = cljs.core.next.call(null,inst_31314);
var inst_31301 = inst_31325;
var inst_31302 = null;
var inst_31303 = (0);
var inst_31304 = (0);
var state_31440__$1 = (function (){var statearr_31506 = state_31440;
(statearr_31506[(7)] = inst_31302);

(statearr_31506[(8)] = inst_31301);

(statearr_31506[(9)] = inst_31303);

(statearr_31506[(32)] = inst_31324);

(statearr_31506[(10)] = inst_31304);

return statearr_31506;
})();
var statearr_31507_31576 = state_31440__$1;
(statearr_31507_31576[(2)] = null);

(statearr_31507_31576[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31441 === (45))){
var state_31440__$1 = state_31440;
var statearr_31508_31577 = state_31440__$1;
(statearr_31508_31577[(2)] = null);

(statearr_31508_31577[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31441 === (26))){
var inst_31360 = (state_31440[(26)]);
var inst_31354 = (state_31440[(19)]);
var inst_31362 = (state_31440[(23)]);
var inst_31357 = (state_31440[(24)]);
var inst_31358 = (state_31440[(25)]);
var inst_31377 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_31379 = (function (){var all_files = inst_31354;
var res_SINGLEQUOTE_ = inst_31357;
var res = inst_31358;
var files_not_loaded = inst_31360;
var dependencies_that_loaded = inst_31362;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31360,inst_31354,inst_31362,inst_31357,inst_31358,inst_31377,state_val_31441,c__27751__auto__,map__31286,map__31286__$1,opts,before_jsload,on_jsload,reload_dependents,map__31287,map__31287__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31378){
var map__31509 = p__31378;
var map__31509__$1 = ((((!((map__31509 == null)))?((((map__31509.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31509.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31509):map__31509);
var namespace = cljs.core.get.call(null,map__31509__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__31509__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31360,inst_31354,inst_31362,inst_31357,inst_31358,inst_31377,state_val_31441,c__27751__auto__,map__31286,map__31286__$1,opts,before_jsload,on_jsload,reload_dependents,map__31287,map__31287__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31380 = cljs.core.map.call(null,inst_31379,inst_31358);
var inst_31381 = cljs.core.pr_str.call(null,inst_31380);
var inst_31382 = figwheel.client.utils.log.call(null,inst_31381);
var inst_31383 = (function (){var all_files = inst_31354;
var res_SINGLEQUOTE_ = inst_31357;
var res = inst_31358;
var files_not_loaded = inst_31360;
var dependencies_that_loaded = inst_31362;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31360,inst_31354,inst_31362,inst_31357,inst_31358,inst_31377,inst_31379,inst_31380,inst_31381,inst_31382,state_val_31441,c__27751__auto__,map__31286,map__31286__$1,opts,before_jsload,on_jsload,reload_dependents,map__31287,map__31287__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31360,inst_31354,inst_31362,inst_31357,inst_31358,inst_31377,inst_31379,inst_31380,inst_31381,inst_31382,state_val_31441,c__27751__auto__,map__31286,map__31286__$1,opts,before_jsload,on_jsload,reload_dependents,map__31287,map__31287__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31384 = setTimeout(inst_31383,(10));
var state_31440__$1 = (function (){var statearr_31511 = state_31440;
(statearr_31511[(33)] = inst_31382);

(statearr_31511[(34)] = inst_31377);

return statearr_31511;
})();
var statearr_31512_31578 = state_31440__$1;
(statearr_31512_31578[(2)] = inst_31384);

(statearr_31512_31578[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31441 === (16))){
var state_31440__$1 = state_31440;
var statearr_31513_31579 = state_31440__$1;
(statearr_31513_31579[(2)] = reload_dependents);

(statearr_31513_31579[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31441 === (38))){
var inst_31394 = (state_31440[(16)]);
var inst_31411 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31394);
var state_31440__$1 = state_31440;
var statearr_31514_31580 = state_31440__$1;
(statearr_31514_31580[(2)] = inst_31411);

(statearr_31514_31580[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31441 === (30))){
var state_31440__$1 = state_31440;
var statearr_31515_31581 = state_31440__$1;
(statearr_31515_31581[(2)] = null);

(statearr_31515_31581[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31441 === (10))){
var inst_31314 = (state_31440[(22)]);
var inst_31316 = cljs.core.chunked_seq_QMARK_.call(null,inst_31314);
var state_31440__$1 = state_31440;
if(inst_31316){
var statearr_31516_31582 = state_31440__$1;
(statearr_31516_31582[(1)] = (13));

} else {
var statearr_31517_31583 = state_31440__$1;
(statearr_31517_31583[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31441 === (18))){
var inst_31348 = (state_31440[(2)]);
var state_31440__$1 = state_31440;
if(cljs.core.truth_(inst_31348)){
var statearr_31518_31584 = state_31440__$1;
(statearr_31518_31584[(1)] = (19));

} else {
var statearr_31519_31585 = state_31440__$1;
(statearr_31519_31585[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31441 === (42))){
var state_31440__$1 = state_31440;
var statearr_31520_31586 = state_31440__$1;
(statearr_31520_31586[(2)] = null);

(statearr_31520_31586[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31441 === (37))){
var inst_31406 = (state_31440[(2)]);
var state_31440__$1 = state_31440;
var statearr_31521_31587 = state_31440__$1;
(statearr_31521_31587[(2)] = inst_31406);

(statearr_31521_31587[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31441 === (8))){
var inst_31301 = (state_31440[(8)]);
var inst_31314 = (state_31440[(22)]);
var inst_31314__$1 = cljs.core.seq.call(null,inst_31301);
var state_31440__$1 = (function (){var statearr_31522 = state_31440;
(statearr_31522[(22)] = inst_31314__$1);

return statearr_31522;
})();
if(inst_31314__$1){
var statearr_31523_31588 = state_31440__$1;
(statearr_31523_31588[(1)] = (10));

} else {
var statearr_31524_31589 = state_31440__$1;
(statearr_31524_31589[(1)] = (11));

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
});})(c__27751__auto__,map__31286,map__31286__$1,opts,before_jsload,on_jsload,reload_dependents,map__31287,map__31287__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__27639__auto__,c__27751__auto__,map__31286,map__31286__$1,opts,before_jsload,on_jsload,reload_dependents,map__31287,map__31287__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27640__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27640__auto____0 = (function (){
var statearr_31528 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31528[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27640__auto__);

(statearr_31528[(1)] = (1));

return statearr_31528;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27640__auto____1 = (function (state_31440){
while(true){
var ret_value__27641__auto__ = (function (){try{while(true){
var result__27642__auto__ = switch__27639__auto__.call(null,state_31440);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27642__auto__;
}
break;
}
}catch (e31529){if((e31529 instanceof Object)){
var ex__27643__auto__ = e31529;
var statearr_31530_31590 = state_31440;
(statearr_31530_31590[(5)] = ex__27643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31440);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31529;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31591 = state_31440;
state_31440 = G__31591;
continue;
} else {
return ret_value__27641__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27640__auto__ = function(state_31440){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27640__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27640__auto____1.call(this,state_31440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27640__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27640__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27640__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27640__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27640__auto__;
})()
;})(switch__27639__auto__,c__27751__auto__,map__31286,map__31286__$1,opts,before_jsload,on_jsload,reload_dependents,map__31287,map__31287__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__27753__auto__ = (function (){var statearr_31531 = f__27752__auto__.call(null);
(statearr_31531[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27751__auto__);

return statearr_31531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27753__auto__);
});})(c__27751__auto__,map__31286,map__31286__$1,opts,before_jsload,on_jsload,reload_dependents,map__31287,map__31287__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__27751__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__31594,link){
var map__31597 = p__31594;
var map__31597__$1 = ((((!((map__31597 == null)))?((((map__31597.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31597.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31597):map__31597);
var file = cljs.core.get.call(null,map__31597__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__31597,map__31597__$1,file){
return (function (p1__31592_SHARP_,p2__31593_SHARP_){
if(cljs.core._EQ_.call(null,p1__31592_SHARP_,p2__31593_SHARP_)){
return p1__31592_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__31597,map__31597__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__31603){
var map__31604 = p__31603;
var map__31604__$1 = ((((!((map__31604 == null)))?((((map__31604.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31604.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31604):map__31604);
var match_length = cljs.core.get.call(null,map__31604__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__31604__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__31599_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__31599_SHARP_);
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
var args31606 = [];
var len__23653__auto___31609 = arguments.length;
var i__23654__auto___31610 = (0);
while(true){
if((i__23654__auto___31610 < len__23653__auto___31609)){
args31606.push((arguments[i__23654__auto___31610]));

var G__31611 = (i__23654__auto___31610 + (1));
i__23654__auto___31610 = G__31611;
continue;
} else {
}
break;
}

var G__31608 = args31606.length;
switch (G__31608) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31606.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__31613_SHARP_,p2__31614_SHARP_){
return cljs.core.assoc.call(null,p1__31613_SHARP_,cljs.core.get.call(null,p2__31614_SHARP_,key),p2__31614_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__31615){
var map__31618 = p__31615;
var map__31618__$1 = ((((!((map__31618 == null)))?((((map__31618.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31618.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31618):map__31618);
var f_data = map__31618__$1;
var file = cljs.core.get.call(null,map__31618__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__31620,files_msg){
var map__31627 = p__31620;
var map__31627__$1 = ((((!((map__31627 == null)))?((((map__31627.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31627.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31627):map__31627);
var opts = map__31627__$1;
var on_cssload = cljs.core.get.call(null,map__31627__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__31629_31633 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__31630_31634 = null;
var count__31631_31635 = (0);
var i__31632_31636 = (0);
while(true){
if((i__31632_31636 < count__31631_31635)){
var f_31637 = cljs.core._nth.call(null,chunk__31630_31634,i__31632_31636);
figwheel.client.file_reloading.reload_css_file.call(null,f_31637);

var G__31638 = seq__31629_31633;
var G__31639 = chunk__31630_31634;
var G__31640 = count__31631_31635;
var G__31641 = (i__31632_31636 + (1));
seq__31629_31633 = G__31638;
chunk__31630_31634 = G__31639;
count__31631_31635 = G__31640;
i__31632_31636 = G__31641;
continue;
} else {
var temp__4657__auto___31642 = cljs.core.seq.call(null,seq__31629_31633);
if(temp__4657__auto___31642){
var seq__31629_31643__$1 = temp__4657__auto___31642;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31629_31643__$1)){
var c__23389__auto___31644 = cljs.core.chunk_first.call(null,seq__31629_31643__$1);
var G__31645 = cljs.core.chunk_rest.call(null,seq__31629_31643__$1);
var G__31646 = c__23389__auto___31644;
var G__31647 = cljs.core.count.call(null,c__23389__auto___31644);
var G__31648 = (0);
seq__31629_31633 = G__31645;
chunk__31630_31634 = G__31646;
count__31631_31635 = G__31647;
i__31632_31636 = G__31648;
continue;
} else {
var f_31649 = cljs.core.first.call(null,seq__31629_31643__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_31649);

var G__31650 = cljs.core.next.call(null,seq__31629_31643__$1);
var G__31651 = null;
var G__31652 = (0);
var G__31653 = (0);
seq__31629_31633 = G__31650;
chunk__31630_31634 = G__31651;
count__31631_31635 = G__31652;
i__31632_31636 = G__31653;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__31627,map__31627__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__31627,map__31627__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1474484609656