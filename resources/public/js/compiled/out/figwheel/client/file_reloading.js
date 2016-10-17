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
var or__25570__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__25570__auto__){
return or__25570__auto__;
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
var or__25570__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__25570__auto__)){
return or__25570__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__34784_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__34784_SHARP_));
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
var seq__34789 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__34790 = null;
var count__34791 = (0);
var i__34792 = (0);
while(true){
if((i__34792 < count__34791)){
var n = cljs.core._nth.call(null,chunk__34790,i__34792);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34793 = seq__34789;
var G__34794 = chunk__34790;
var G__34795 = count__34791;
var G__34796 = (i__34792 + (1));
seq__34789 = G__34793;
chunk__34790 = G__34794;
count__34791 = G__34795;
i__34792 = G__34796;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34789);
if(temp__4657__auto__){
var seq__34789__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34789__$1)){
var c__26381__auto__ = cljs.core.chunk_first.call(null,seq__34789__$1);
var G__34797 = cljs.core.chunk_rest.call(null,seq__34789__$1);
var G__34798 = c__26381__auto__;
var G__34799 = cljs.core.count.call(null,c__26381__auto__);
var G__34800 = (0);
seq__34789 = G__34797;
chunk__34790 = G__34798;
count__34791 = G__34799;
i__34792 = G__34800;
continue;
} else {
var n = cljs.core.first.call(null,seq__34789__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34801 = cljs.core.next.call(null,seq__34789__$1);
var G__34802 = null;
var G__34803 = (0);
var G__34804 = (0);
seq__34789 = G__34801;
chunk__34790 = G__34802;
count__34791 = G__34803;
i__34792 = G__34804;
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

var seq__34855_34866 = cljs.core.seq.call(null,deps);
var chunk__34856_34867 = null;
var count__34857_34868 = (0);
var i__34858_34869 = (0);
while(true){
if((i__34858_34869 < count__34857_34868)){
var dep_34870 = cljs.core._nth.call(null,chunk__34856_34867,i__34858_34869);
topo_sort_helper_STAR_.call(null,dep_34870,(depth + (1)),state);

var G__34871 = seq__34855_34866;
var G__34872 = chunk__34856_34867;
var G__34873 = count__34857_34868;
var G__34874 = (i__34858_34869 + (1));
seq__34855_34866 = G__34871;
chunk__34856_34867 = G__34872;
count__34857_34868 = G__34873;
i__34858_34869 = G__34874;
continue;
} else {
var temp__4657__auto___34875 = cljs.core.seq.call(null,seq__34855_34866);
if(temp__4657__auto___34875){
var seq__34855_34876__$1 = temp__4657__auto___34875;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34855_34876__$1)){
var c__26381__auto___34877 = cljs.core.chunk_first.call(null,seq__34855_34876__$1);
var G__34878 = cljs.core.chunk_rest.call(null,seq__34855_34876__$1);
var G__34879 = c__26381__auto___34877;
var G__34880 = cljs.core.count.call(null,c__26381__auto___34877);
var G__34881 = (0);
seq__34855_34866 = G__34878;
chunk__34856_34867 = G__34879;
count__34857_34868 = G__34880;
i__34858_34869 = G__34881;
continue;
} else {
var dep_34882 = cljs.core.first.call(null,seq__34855_34876__$1);
topo_sort_helper_STAR_.call(null,dep_34882,(depth + (1)),state);

var G__34883 = cljs.core.next.call(null,seq__34855_34876__$1);
var G__34884 = null;
var G__34885 = (0);
var G__34886 = (0);
seq__34855_34866 = G__34883;
chunk__34856_34867 = G__34884;
count__34857_34868 = G__34885;
i__34858_34869 = G__34886;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__34859){
var vec__34863 = p__34859;
var seq__34864 = cljs.core.seq.call(null,vec__34863);
var first__34865 = cljs.core.first.call(null,seq__34864);
var seq__34864__$1 = cljs.core.next.call(null,seq__34864);
var x = first__34865;
var xs = seq__34864__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__34863,seq__34864,first__34865,seq__34864__$1,x,xs,get_deps__$1){
return (function (p1__34805_SHARP_){
return clojure.set.difference.call(null,p1__34805_SHARP_,x);
});})(vec__34863,seq__34864,first__34865,seq__34864__$1,x,xs,get_deps__$1))
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
var seq__34899 = cljs.core.seq.call(null,provides);
var chunk__34900 = null;
var count__34901 = (0);
var i__34902 = (0);
while(true){
if((i__34902 < count__34901)){
var prov = cljs.core._nth.call(null,chunk__34900,i__34902);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34903_34911 = cljs.core.seq.call(null,requires);
var chunk__34904_34912 = null;
var count__34905_34913 = (0);
var i__34906_34914 = (0);
while(true){
if((i__34906_34914 < count__34905_34913)){
var req_34915 = cljs.core._nth.call(null,chunk__34904_34912,i__34906_34914);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34915,prov);

var G__34916 = seq__34903_34911;
var G__34917 = chunk__34904_34912;
var G__34918 = count__34905_34913;
var G__34919 = (i__34906_34914 + (1));
seq__34903_34911 = G__34916;
chunk__34904_34912 = G__34917;
count__34905_34913 = G__34918;
i__34906_34914 = G__34919;
continue;
} else {
var temp__4657__auto___34920 = cljs.core.seq.call(null,seq__34903_34911);
if(temp__4657__auto___34920){
var seq__34903_34921__$1 = temp__4657__auto___34920;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34903_34921__$1)){
var c__26381__auto___34922 = cljs.core.chunk_first.call(null,seq__34903_34921__$1);
var G__34923 = cljs.core.chunk_rest.call(null,seq__34903_34921__$1);
var G__34924 = c__26381__auto___34922;
var G__34925 = cljs.core.count.call(null,c__26381__auto___34922);
var G__34926 = (0);
seq__34903_34911 = G__34923;
chunk__34904_34912 = G__34924;
count__34905_34913 = G__34925;
i__34906_34914 = G__34926;
continue;
} else {
var req_34927 = cljs.core.first.call(null,seq__34903_34921__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34927,prov);

var G__34928 = cljs.core.next.call(null,seq__34903_34921__$1);
var G__34929 = null;
var G__34930 = (0);
var G__34931 = (0);
seq__34903_34911 = G__34928;
chunk__34904_34912 = G__34929;
count__34905_34913 = G__34930;
i__34906_34914 = G__34931;
continue;
}
} else {
}
}
break;
}

var G__34932 = seq__34899;
var G__34933 = chunk__34900;
var G__34934 = count__34901;
var G__34935 = (i__34902 + (1));
seq__34899 = G__34932;
chunk__34900 = G__34933;
count__34901 = G__34934;
i__34902 = G__34935;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34899);
if(temp__4657__auto__){
var seq__34899__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34899__$1)){
var c__26381__auto__ = cljs.core.chunk_first.call(null,seq__34899__$1);
var G__34936 = cljs.core.chunk_rest.call(null,seq__34899__$1);
var G__34937 = c__26381__auto__;
var G__34938 = cljs.core.count.call(null,c__26381__auto__);
var G__34939 = (0);
seq__34899 = G__34936;
chunk__34900 = G__34937;
count__34901 = G__34938;
i__34902 = G__34939;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34899__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34907_34940 = cljs.core.seq.call(null,requires);
var chunk__34908_34941 = null;
var count__34909_34942 = (0);
var i__34910_34943 = (0);
while(true){
if((i__34910_34943 < count__34909_34942)){
var req_34944 = cljs.core._nth.call(null,chunk__34908_34941,i__34910_34943);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34944,prov);

var G__34945 = seq__34907_34940;
var G__34946 = chunk__34908_34941;
var G__34947 = count__34909_34942;
var G__34948 = (i__34910_34943 + (1));
seq__34907_34940 = G__34945;
chunk__34908_34941 = G__34946;
count__34909_34942 = G__34947;
i__34910_34943 = G__34948;
continue;
} else {
var temp__4657__auto___34949__$1 = cljs.core.seq.call(null,seq__34907_34940);
if(temp__4657__auto___34949__$1){
var seq__34907_34950__$1 = temp__4657__auto___34949__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34907_34950__$1)){
var c__26381__auto___34951 = cljs.core.chunk_first.call(null,seq__34907_34950__$1);
var G__34952 = cljs.core.chunk_rest.call(null,seq__34907_34950__$1);
var G__34953 = c__26381__auto___34951;
var G__34954 = cljs.core.count.call(null,c__26381__auto___34951);
var G__34955 = (0);
seq__34907_34940 = G__34952;
chunk__34908_34941 = G__34953;
count__34909_34942 = G__34954;
i__34910_34943 = G__34955;
continue;
} else {
var req_34956 = cljs.core.first.call(null,seq__34907_34950__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34956,prov);

var G__34957 = cljs.core.next.call(null,seq__34907_34950__$1);
var G__34958 = null;
var G__34959 = (0);
var G__34960 = (0);
seq__34907_34940 = G__34957;
chunk__34908_34941 = G__34958;
count__34909_34942 = G__34959;
i__34910_34943 = G__34960;
continue;
}
} else {
}
}
break;
}

var G__34961 = cljs.core.next.call(null,seq__34899__$1);
var G__34962 = null;
var G__34963 = (0);
var G__34964 = (0);
seq__34899 = G__34961;
chunk__34900 = G__34962;
count__34901 = G__34963;
i__34902 = G__34964;
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
var seq__34969_34973 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__34970_34974 = null;
var count__34971_34975 = (0);
var i__34972_34976 = (0);
while(true){
if((i__34972_34976 < count__34971_34975)){
var ns_34977 = cljs.core._nth.call(null,chunk__34970_34974,i__34972_34976);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34977);

var G__34978 = seq__34969_34973;
var G__34979 = chunk__34970_34974;
var G__34980 = count__34971_34975;
var G__34981 = (i__34972_34976 + (1));
seq__34969_34973 = G__34978;
chunk__34970_34974 = G__34979;
count__34971_34975 = G__34980;
i__34972_34976 = G__34981;
continue;
} else {
var temp__4657__auto___34982 = cljs.core.seq.call(null,seq__34969_34973);
if(temp__4657__auto___34982){
var seq__34969_34983__$1 = temp__4657__auto___34982;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34969_34983__$1)){
var c__26381__auto___34984 = cljs.core.chunk_first.call(null,seq__34969_34983__$1);
var G__34985 = cljs.core.chunk_rest.call(null,seq__34969_34983__$1);
var G__34986 = c__26381__auto___34984;
var G__34987 = cljs.core.count.call(null,c__26381__auto___34984);
var G__34988 = (0);
seq__34969_34973 = G__34985;
chunk__34970_34974 = G__34986;
count__34971_34975 = G__34987;
i__34972_34976 = G__34988;
continue;
} else {
var ns_34989 = cljs.core.first.call(null,seq__34969_34983__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34989);

var G__34990 = cljs.core.next.call(null,seq__34969_34983__$1);
var G__34991 = null;
var G__34992 = (0);
var G__34993 = (0);
seq__34969_34973 = G__34990;
chunk__34970_34974 = G__34991;
count__34971_34975 = G__34992;
i__34972_34976 = G__34993;
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
goog.require_figwheel_backup_ = (function (){var or__25570__auto__ = goog.require__;
if(cljs.core.truth_(or__25570__auto__)){
return or__25570__auto__;
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
var G__34994__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__34994 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34995__i = 0, G__34995__a = new Array(arguments.length -  0);
while (G__34995__i < G__34995__a.length) {G__34995__a[G__34995__i] = arguments[G__34995__i + 0]; ++G__34995__i;}
  args = new cljs.core.IndexedSeq(G__34995__a,0);
} 
return G__34994__delegate.call(this,args);};
G__34994.cljs$lang$maxFixedArity = 0;
G__34994.cljs$lang$applyTo = (function (arglist__34996){
var args = cljs.core.seq(arglist__34996);
return G__34994__delegate(args);
});
G__34994.cljs$core$IFn$_invoke$arity$variadic = G__34994__delegate;
return G__34994;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__34998 = cljs.core._EQ_;
var expr__34999 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__34998.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__34999))){
var path_parts = ((function (pred__34998,expr__34999){
return (function (p1__34997_SHARP_){
return clojure.string.split.call(null,p1__34997_SHARP_,/[\/\\]/);
});})(pred__34998,expr__34999))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__34998,expr__34999){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e35001){if((e35001 instanceof Error)){
var e = e35001;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35001;

}
}})());
});
;})(path_parts,sep,root,pred__34998,expr__34999))
} else {
if(cljs.core.truth_(pred__34998.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__34999))){
return ((function (pred__34998,expr__34999){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__34998,expr__34999){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__34998,expr__34999))
);

return deferred.addErrback(((function (deferred,pred__34998,expr__34999){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__34998,expr__34999))
);
});
;})(pred__34998,expr__34999))
} else {
return ((function (pred__34998,expr__34999){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__34998,expr__34999))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__35002,callback){
var map__35005 = p__35002;
var map__35005__$1 = ((((!((map__35005 == null)))?((((map__35005.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35005.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35005):map__35005);
var file_msg = map__35005__$1;
var request_url = cljs.core.get.call(null,map__35005__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__35005,map__35005__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__35005,map__35005__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__31929__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31929__auto__){
return (function (){
var f__31930__auto__ = (function (){var switch__31817__auto__ = ((function (c__31929__auto__){
return (function (state_35029){
var state_val_35030 = (state_35029[(1)]);
if((state_val_35030 === (7))){
var inst_35025 = (state_35029[(2)]);
var state_35029__$1 = state_35029;
var statearr_35031_35051 = state_35029__$1;
(statearr_35031_35051[(2)] = inst_35025);

(statearr_35031_35051[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35030 === (1))){
var state_35029__$1 = state_35029;
var statearr_35032_35052 = state_35029__$1;
(statearr_35032_35052[(2)] = null);

(statearr_35032_35052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35030 === (4))){
var inst_35009 = (state_35029[(7)]);
var inst_35009__$1 = (state_35029[(2)]);
var state_35029__$1 = (function (){var statearr_35033 = state_35029;
(statearr_35033[(7)] = inst_35009__$1);

return statearr_35033;
})();
if(cljs.core.truth_(inst_35009__$1)){
var statearr_35034_35053 = state_35029__$1;
(statearr_35034_35053[(1)] = (5));

} else {
var statearr_35035_35054 = state_35029__$1;
(statearr_35035_35054[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35030 === (6))){
var state_35029__$1 = state_35029;
var statearr_35036_35055 = state_35029__$1;
(statearr_35036_35055[(2)] = null);

(statearr_35036_35055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35030 === (3))){
var inst_35027 = (state_35029[(2)]);
var state_35029__$1 = state_35029;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35029__$1,inst_35027);
} else {
if((state_val_35030 === (2))){
var state_35029__$1 = state_35029;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35029__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_35030 === (11))){
var inst_35021 = (state_35029[(2)]);
var state_35029__$1 = (function (){var statearr_35037 = state_35029;
(statearr_35037[(8)] = inst_35021);

return statearr_35037;
})();
var statearr_35038_35056 = state_35029__$1;
(statearr_35038_35056[(2)] = null);

(statearr_35038_35056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35030 === (9))){
var inst_35013 = (state_35029[(9)]);
var inst_35015 = (state_35029[(10)]);
var inst_35017 = inst_35015.call(null,inst_35013);
var state_35029__$1 = state_35029;
var statearr_35039_35057 = state_35029__$1;
(statearr_35039_35057[(2)] = inst_35017);

(statearr_35039_35057[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35030 === (5))){
var inst_35009 = (state_35029[(7)]);
var inst_35011 = figwheel.client.file_reloading.blocking_load.call(null,inst_35009);
var state_35029__$1 = state_35029;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35029__$1,(8),inst_35011);
} else {
if((state_val_35030 === (10))){
var inst_35013 = (state_35029[(9)]);
var inst_35019 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_35013);
var state_35029__$1 = state_35029;
var statearr_35040_35058 = state_35029__$1;
(statearr_35040_35058[(2)] = inst_35019);

(statearr_35040_35058[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35030 === (8))){
var inst_35015 = (state_35029[(10)]);
var inst_35009 = (state_35029[(7)]);
var inst_35013 = (state_35029[(2)]);
var inst_35014 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_35015__$1 = cljs.core.get.call(null,inst_35014,inst_35009);
var state_35029__$1 = (function (){var statearr_35041 = state_35029;
(statearr_35041[(9)] = inst_35013);

(statearr_35041[(10)] = inst_35015__$1);

return statearr_35041;
})();
if(cljs.core.truth_(inst_35015__$1)){
var statearr_35042_35059 = state_35029__$1;
(statearr_35042_35059[(1)] = (9));

} else {
var statearr_35043_35060 = state_35029__$1;
(statearr_35043_35060[(1)] = (10));

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
});})(c__31929__auto__))
;
return ((function (switch__31817__auto__,c__31929__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__31818__auto__ = null;
var figwheel$client$file_reloading$state_machine__31818__auto____0 = (function (){
var statearr_35047 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35047[(0)] = figwheel$client$file_reloading$state_machine__31818__auto__);

(statearr_35047[(1)] = (1));

return statearr_35047;
});
var figwheel$client$file_reloading$state_machine__31818__auto____1 = (function (state_35029){
while(true){
var ret_value__31819__auto__ = (function (){try{while(true){
var result__31820__auto__ = switch__31817__auto__.call(null,state_35029);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31820__auto__;
}
break;
}
}catch (e35048){if((e35048 instanceof Object)){
var ex__31821__auto__ = e35048;
var statearr_35049_35061 = state_35029;
(statearr_35049_35061[(5)] = ex__31821__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35029);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35048;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35062 = state_35029;
state_35029 = G__35062;
continue;
} else {
return ret_value__31819__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__31818__auto__ = function(state_35029){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__31818__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__31818__auto____1.call(this,state_35029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__31818__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__31818__auto____0;
figwheel$client$file_reloading$state_machine__31818__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__31818__auto____1;
return figwheel$client$file_reloading$state_machine__31818__auto__;
})()
;})(switch__31817__auto__,c__31929__auto__))
})();
var state__31931__auto__ = (function (){var statearr_35050 = f__31930__auto__.call(null);
(statearr_35050[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31929__auto__);

return statearr_35050;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31931__auto__);
});})(c__31929__auto__))
);

return c__31929__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__35063,callback){
var map__35066 = p__35063;
var map__35066__$1 = ((((!((map__35066 == null)))?((((map__35066.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35066.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35066):map__35066);
var file_msg = map__35066__$1;
var namespace = cljs.core.get.call(null,map__35066__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__35066,map__35066__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__35066,map__35066__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__35068){
var map__35071 = p__35068;
var map__35071__$1 = ((((!((map__35071 == null)))?((((map__35071.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35071.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35071):map__35071);
var file_msg = map__35071__$1;
var namespace = cljs.core.get.call(null,map__35071__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__25558__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__25558__auto__){
var or__25570__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25570__auto__)){
return or__25570__auto__;
} else {
var or__25570__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25570__auto____$1)){
return or__25570__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__25558__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__35073,callback){
var map__35076 = p__35073;
var map__35076__$1 = ((((!((map__35076 == null)))?((((map__35076.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35076.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35076):map__35076);
var file_msg = map__35076__$1;
var request_url = cljs.core.get.call(null,map__35076__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__35076__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__31929__auto___35180 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31929__auto___35180,out){
return (function (){
var f__31930__auto__ = (function (){var switch__31817__auto__ = ((function (c__31929__auto___35180,out){
return (function (state_35162){
var state_val_35163 = (state_35162[(1)]);
if((state_val_35163 === (1))){
var inst_35136 = cljs.core.seq.call(null,files);
var inst_35137 = cljs.core.first.call(null,inst_35136);
var inst_35138 = cljs.core.next.call(null,inst_35136);
var inst_35139 = files;
var state_35162__$1 = (function (){var statearr_35164 = state_35162;
(statearr_35164[(7)] = inst_35139);

(statearr_35164[(8)] = inst_35138);

(statearr_35164[(9)] = inst_35137);

return statearr_35164;
})();
var statearr_35165_35181 = state_35162__$1;
(statearr_35165_35181[(2)] = null);

(statearr_35165_35181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35163 === (2))){
var inst_35139 = (state_35162[(7)]);
var inst_35145 = (state_35162[(10)]);
var inst_35144 = cljs.core.seq.call(null,inst_35139);
var inst_35145__$1 = cljs.core.first.call(null,inst_35144);
var inst_35146 = cljs.core.next.call(null,inst_35144);
var inst_35147 = (inst_35145__$1 == null);
var inst_35148 = cljs.core.not.call(null,inst_35147);
var state_35162__$1 = (function (){var statearr_35166 = state_35162;
(statearr_35166[(10)] = inst_35145__$1);

(statearr_35166[(11)] = inst_35146);

return statearr_35166;
})();
if(inst_35148){
var statearr_35167_35182 = state_35162__$1;
(statearr_35167_35182[(1)] = (4));

} else {
var statearr_35168_35183 = state_35162__$1;
(statearr_35168_35183[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35163 === (3))){
var inst_35160 = (state_35162[(2)]);
var state_35162__$1 = state_35162;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35162__$1,inst_35160);
} else {
if((state_val_35163 === (4))){
var inst_35145 = (state_35162[(10)]);
var inst_35150 = figwheel.client.file_reloading.reload_js_file.call(null,inst_35145);
var state_35162__$1 = state_35162;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35162__$1,(7),inst_35150);
} else {
if((state_val_35163 === (5))){
var inst_35156 = cljs.core.async.close_BANG_.call(null,out);
var state_35162__$1 = state_35162;
var statearr_35169_35184 = state_35162__$1;
(statearr_35169_35184[(2)] = inst_35156);

(statearr_35169_35184[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35163 === (6))){
var inst_35158 = (state_35162[(2)]);
var state_35162__$1 = state_35162;
var statearr_35170_35185 = state_35162__$1;
(statearr_35170_35185[(2)] = inst_35158);

(statearr_35170_35185[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35163 === (7))){
var inst_35146 = (state_35162[(11)]);
var inst_35152 = (state_35162[(2)]);
var inst_35153 = cljs.core.async.put_BANG_.call(null,out,inst_35152);
var inst_35139 = inst_35146;
var state_35162__$1 = (function (){var statearr_35171 = state_35162;
(statearr_35171[(7)] = inst_35139);

(statearr_35171[(12)] = inst_35153);

return statearr_35171;
})();
var statearr_35172_35186 = state_35162__$1;
(statearr_35172_35186[(2)] = null);

(statearr_35172_35186[(1)] = (2));


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
});})(c__31929__auto___35180,out))
;
return ((function (switch__31817__auto__,c__31929__auto___35180,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31818__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31818__auto____0 = (function (){
var statearr_35176 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35176[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31818__auto__);

(statearr_35176[(1)] = (1));

return statearr_35176;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31818__auto____1 = (function (state_35162){
while(true){
var ret_value__31819__auto__ = (function (){try{while(true){
var result__31820__auto__ = switch__31817__auto__.call(null,state_35162);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31820__auto__;
}
break;
}
}catch (e35177){if((e35177 instanceof Object)){
var ex__31821__auto__ = e35177;
var statearr_35178_35187 = state_35162;
(statearr_35178_35187[(5)] = ex__31821__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35177;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35188 = state_35162;
state_35162 = G__35188;
continue;
} else {
return ret_value__31819__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31818__auto__ = function(state_35162){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31818__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31818__auto____1.call(this,state_35162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31818__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31818__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31818__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31818__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31818__auto__;
})()
;})(switch__31817__auto__,c__31929__auto___35180,out))
})();
var state__31931__auto__ = (function (){var statearr_35179 = f__31930__auto__.call(null);
(statearr_35179[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31929__auto___35180);

return statearr_35179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31931__auto__);
});})(c__31929__auto___35180,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__35189,opts){
var map__35193 = p__35189;
var map__35193__$1 = ((((!((map__35193 == null)))?((((map__35193.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35193.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35193):map__35193);
var eval_body__$1 = cljs.core.get.call(null,map__35193__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__35193__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__25558__auto__ = eval_body__$1;
if(cljs.core.truth_(and__25558__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__25558__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e35195){var e = e35195;
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
return (function (p1__35196_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35196_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__35205){
var vec__35206 = p__35205;
var k = cljs.core.nth.call(null,vec__35206,(0),null);
var v = cljs.core.nth.call(null,vec__35206,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__35209){
var vec__35210 = p__35209;
var k = cljs.core.nth.call(null,vec__35210,(0),null);
var v = cljs.core.nth.call(null,vec__35210,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__35216,p__35217){
var map__35464 = p__35216;
var map__35464__$1 = ((((!((map__35464 == null)))?((((map__35464.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35464.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35464):map__35464);
var opts = map__35464__$1;
var before_jsload = cljs.core.get.call(null,map__35464__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__35464__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__35464__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__35465 = p__35217;
var map__35465__$1 = ((((!((map__35465 == null)))?((((map__35465.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35465.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35465):map__35465);
var msg = map__35465__$1;
var files = cljs.core.get.call(null,map__35465__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__35465__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__35465__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__31929__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31929__auto__,map__35464,map__35464__$1,opts,before_jsload,on_jsload,reload_dependents,map__35465,map__35465__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__31930__auto__ = (function (){var switch__31817__auto__ = ((function (c__31929__auto__,map__35464,map__35464__$1,opts,before_jsload,on_jsload,reload_dependents,map__35465,map__35465__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_35618){
var state_val_35619 = (state_35618[(1)]);
if((state_val_35619 === (7))){
var inst_35480 = (state_35618[(7)]);
var inst_35481 = (state_35618[(8)]);
var inst_35482 = (state_35618[(9)]);
var inst_35479 = (state_35618[(10)]);
var inst_35487 = cljs.core._nth.call(null,inst_35480,inst_35482);
var inst_35488 = figwheel.client.file_reloading.eval_body.call(null,inst_35487,opts);
var inst_35489 = (inst_35482 + (1));
var tmp35620 = inst_35480;
var tmp35621 = inst_35481;
var tmp35622 = inst_35479;
var inst_35479__$1 = tmp35622;
var inst_35480__$1 = tmp35620;
var inst_35481__$1 = tmp35621;
var inst_35482__$1 = inst_35489;
var state_35618__$1 = (function (){var statearr_35623 = state_35618;
(statearr_35623[(7)] = inst_35480__$1);

(statearr_35623[(8)] = inst_35481__$1);

(statearr_35623[(11)] = inst_35488);

(statearr_35623[(9)] = inst_35482__$1);

(statearr_35623[(10)] = inst_35479__$1);

return statearr_35623;
})();
var statearr_35624_35710 = state_35618__$1;
(statearr_35624_35710[(2)] = null);

(statearr_35624_35710[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (20))){
var inst_35522 = (state_35618[(12)]);
var inst_35530 = figwheel.client.file_reloading.sort_files.call(null,inst_35522);
var state_35618__$1 = state_35618;
var statearr_35625_35711 = state_35618__$1;
(statearr_35625_35711[(2)] = inst_35530);

(statearr_35625_35711[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (27))){
var state_35618__$1 = state_35618;
var statearr_35626_35712 = state_35618__$1;
(statearr_35626_35712[(2)] = null);

(statearr_35626_35712[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (1))){
var inst_35471 = (state_35618[(13)]);
var inst_35468 = before_jsload.call(null,files);
var inst_35469 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_35470 = (function (){return ((function (inst_35471,inst_35468,inst_35469,state_val_35619,c__31929__auto__,map__35464,map__35464__$1,opts,before_jsload,on_jsload,reload_dependents,map__35465,map__35465__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35213_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35213_SHARP_);
});
;})(inst_35471,inst_35468,inst_35469,state_val_35619,c__31929__auto__,map__35464,map__35464__$1,opts,before_jsload,on_jsload,reload_dependents,map__35465,map__35465__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35471__$1 = cljs.core.filter.call(null,inst_35470,files);
var inst_35472 = cljs.core.not_empty.call(null,inst_35471__$1);
var state_35618__$1 = (function (){var statearr_35627 = state_35618;
(statearr_35627[(14)] = inst_35468);

(statearr_35627[(15)] = inst_35469);

(statearr_35627[(13)] = inst_35471__$1);

return statearr_35627;
})();
if(cljs.core.truth_(inst_35472)){
var statearr_35628_35713 = state_35618__$1;
(statearr_35628_35713[(1)] = (2));

} else {
var statearr_35629_35714 = state_35618__$1;
(statearr_35629_35714[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (24))){
var state_35618__$1 = state_35618;
var statearr_35630_35715 = state_35618__$1;
(statearr_35630_35715[(2)] = null);

(statearr_35630_35715[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (39))){
var inst_35572 = (state_35618[(16)]);
var state_35618__$1 = state_35618;
var statearr_35631_35716 = state_35618__$1;
(statearr_35631_35716[(2)] = inst_35572);

(statearr_35631_35716[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (46))){
var inst_35613 = (state_35618[(2)]);
var state_35618__$1 = state_35618;
var statearr_35632_35717 = state_35618__$1;
(statearr_35632_35717[(2)] = inst_35613);

(statearr_35632_35717[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (4))){
var inst_35516 = (state_35618[(2)]);
var inst_35517 = cljs.core.List.EMPTY;
var inst_35518 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_35517);
var inst_35519 = (function (){return ((function (inst_35516,inst_35517,inst_35518,state_val_35619,c__31929__auto__,map__35464,map__35464__$1,opts,before_jsload,on_jsload,reload_dependents,map__35465,map__35465__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35214_SHARP_){
var and__25558__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35214_SHARP_);
if(cljs.core.truth_(and__25558__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35214_SHARP_));
} else {
return and__25558__auto__;
}
});
;})(inst_35516,inst_35517,inst_35518,state_val_35619,c__31929__auto__,map__35464,map__35464__$1,opts,before_jsload,on_jsload,reload_dependents,map__35465,map__35465__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35520 = cljs.core.filter.call(null,inst_35519,files);
var inst_35521 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_35522 = cljs.core.concat.call(null,inst_35520,inst_35521);
var state_35618__$1 = (function (){var statearr_35633 = state_35618;
(statearr_35633[(17)] = inst_35518);

(statearr_35633[(18)] = inst_35516);

(statearr_35633[(12)] = inst_35522);

return statearr_35633;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_35634_35718 = state_35618__$1;
(statearr_35634_35718[(1)] = (16));

} else {
var statearr_35635_35719 = state_35618__$1;
(statearr_35635_35719[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (15))){
var inst_35506 = (state_35618[(2)]);
var state_35618__$1 = state_35618;
var statearr_35636_35720 = state_35618__$1;
(statearr_35636_35720[(2)] = inst_35506);

(statearr_35636_35720[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (21))){
var inst_35532 = (state_35618[(19)]);
var inst_35532__$1 = (state_35618[(2)]);
var inst_35533 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_35532__$1);
var state_35618__$1 = (function (){var statearr_35637 = state_35618;
(statearr_35637[(19)] = inst_35532__$1);

return statearr_35637;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35618__$1,(22),inst_35533);
} else {
if((state_val_35619 === (31))){
var inst_35616 = (state_35618[(2)]);
var state_35618__$1 = state_35618;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35618__$1,inst_35616);
} else {
if((state_val_35619 === (32))){
var inst_35572 = (state_35618[(16)]);
var inst_35577 = inst_35572.cljs$lang$protocol_mask$partition0$;
var inst_35578 = (inst_35577 & (64));
var inst_35579 = inst_35572.cljs$core$ISeq$;
var inst_35580 = (inst_35578) || (inst_35579);
var state_35618__$1 = state_35618;
if(cljs.core.truth_(inst_35580)){
var statearr_35638_35721 = state_35618__$1;
(statearr_35638_35721[(1)] = (35));

} else {
var statearr_35639_35722 = state_35618__$1;
(statearr_35639_35722[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (40))){
var inst_35593 = (state_35618[(20)]);
var inst_35592 = (state_35618[(2)]);
var inst_35593__$1 = cljs.core.get.call(null,inst_35592,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_35594 = cljs.core.get.call(null,inst_35592,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_35595 = cljs.core.not_empty.call(null,inst_35593__$1);
var state_35618__$1 = (function (){var statearr_35640 = state_35618;
(statearr_35640[(20)] = inst_35593__$1);

(statearr_35640[(21)] = inst_35594);

return statearr_35640;
})();
if(cljs.core.truth_(inst_35595)){
var statearr_35641_35723 = state_35618__$1;
(statearr_35641_35723[(1)] = (41));

} else {
var statearr_35642_35724 = state_35618__$1;
(statearr_35642_35724[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (33))){
var state_35618__$1 = state_35618;
var statearr_35643_35725 = state_35618__$1;
(statearr_35643_35725[(2)] = false);

(statearr_35643_35725[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (13))){
var inst_35492 = (state_35618[(22)]);
var inst_35496 = cljs.core.chunk_first.call(null,inst_35492);
var inst_35497 = cljs.core.chunk_rest.call(null,inst_35492);
var inst_35498 = cljs.core.count.call(null,inst_35496);
var inst_35479 = inst_35497;
var inst_35480 = inst_35496;
var inst_35481 = inst_35498;
var inst_35482 = (0);
var state_35618__$1 = (function (){var statearr_35644 = state_35618;
(statearr_35644[(7)] = inst_35480);

(statearr_35644[(8)] = inst_35481);

(statearr_35644[(9)] = inst_35482);

(statearr_35644[(10)] = inst_35479);

return statearr_35644;
})();
var statearr_35645_35726 = state_35618__$1;
(statearr_35645_35726[(2)] = null);

(statearr_35645_35726[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (22))){
var inst_35536 = (state_35618[(23)]);
var inst_35535 = (state_35618[(24)]);
var inst_35540 = (state_35618[(25)]);
var inst_35532 = (state_35618[(19)]);
var inst_35535__$1 = (state_35618[(2)]);
var inst_35536__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35535__$1);
var inst_35537 = (function (){var all_files = inst_35532;
var res_SINGLEQUOTE_ = inst_35535__$1;
var res = inst_35536__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_35536,inst_35535,inst_35540,inst_35532,inst_35535__$1,inst_35536__$1,state_val_35619,c__31929__auto__,map__35464,map__35464__$1,opts,before_jsload,on_jsload,reload_dependents,map__35465,map__35465__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35215_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__35215_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_35536,inst_35535,inst_35540,inst_35532,inst_35535__$1,inst_35536__$1,state_val_35619,c__31929__auto__,map__35464,map__35464__$1,opts,before_jsload,on_jsload,reload_dependents,map__35465,map__35465__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35538 = cljs.core.filter.call(null,inst_35537,inst_35535__$1);
var inst_35539 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_35540__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35539);
var inst_35541 = cljs.core.not_empty.call(null,inst_35540__$1);
var state_35618__$1 = (function (){var statearr_35646 = state_35618;
(statearr_35646[(23)] = inst_35536__$1);

(statearr_35646[(26)] = inst_35538);

(statearr_35646[(24)] = inst_35535__$1);

(statearr_35646[(25)] = inst_35540__$1);

return statearr_35646;
})();
if(cljs.core.truth_(inst_35541)){
var statearr_35647_35727 = state_35618__$1;
(statearr_35647_35727[(1)] = (23));

} else {
var statearr_35648_35728 = state_35618__$1;
(statearr_35648_35728[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (36))){
var state_35618__$1 = state_35618;
var statearr_35649_35729 = state_35618__$1;
(statearr_35649_35729[(2)] = false);

(statearr_35649_35729[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (41))){
var inst_35593 = (state_35618[(20)]);
var inst_35597 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_35598 = cljs.core.map.call(null,inst_35597,inst_35593);
var inst_35599 = cljs.core.pr_str.call(null,inst_35598);
var inst_35600 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_35599)].join('');
var inst_35601 = figwheel.client.utils.log.call(null,inst_35600);
var state_35618__$1 = state_35618;
var statearr_35650_35730 = state_35618__$1;
(statearr_35650_35730[(2)] = inst_35601);

(statearr_35650_35730[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (43))){
var inst_35594 = (state_35618[(21)]);
var inst_35604 = (state_35618[(2)]);
var inst_35605 = cljs.core.not_empty.call(null,inst_35594);
var state_35618__$1 = (function (){var statearr_35651 = state_35618;
(statearr_35651[(27)] = inst_35604);

return statearr_35651;
})();
if(cljs.core.truth_(inst_35605)){
var statearr_35652_35731 = state_35618__$1;
(statearr_35652_35731[(1)] = (44));

} else {
var statearr_35653_35732 = state_35618__$1;
(statearr_35653_35732[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (29))){
var inst_35536 = (state_35618[(23)]);
var inst_35572 = (state_35618[(16)]);
var inst_35538 = (state_35618[(26)]);
var inst_35535 = (state_35618[(24)]);
var inst_35540 = (state_35618[(25)]);
var inst_35532 = (state_35618[(19)]);
var inst_35568 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_35571 = (function (){var all_files = inst_35532;
var res_SINGLEQUOTE_ = inst_35535;
var res = inst_35536;
var files_not_loaded = inst_35538;
var dependencies_that_loaded = inst_35540;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35536,inst_35572,inst_35538,inst_35535,inst_35540,inst_35532,inst_35568,state_val_35619,c__31929__auto__,map__35464,map__35464__$1,opts,before_jsload,on_jsload,reload_dependents,map__35465,map__35465__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35570){
var map__35654 = p__35570;
var map__35654__$1 = ((((!((map__35654 == null)))?((((map__35654.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35654.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35654):map__35654);
var namespace = cljs.core.get.call(null,map__35654__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35536,inst_35572,inst_35538,inst_35535,inst_35540,inst_35532,inst_35568,state_val_35619,c__31929__auto__,map__35464,map__35464__$1,opts,before_jsload,on_jsload,reload_dependents,map__35465,map__35465__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35572__$1 = cljs.core.group_by.call(null,inst_35571,inst_35538);
var inst_35574 = (inst_35572__$1 == null);
var inst_35575 = cljs.core.not.call(null,inst_35574);
var state_35618__$1 = (function (){var statearr_35656 = state_35618;
(statearr_35656[(28)] = inst_35568);

(statearr_35656[(16)] = inst_35572__$1);

return statearr_35656;
})();
if(inst_35575){
var statearr_35657_35733 = state_35618__$1;
(statearr_35657_35733[(1)] = (32));

} else {
var statearr_35658_35734 = state_35618__$1;
(statearr_35658_35734[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (44))){
var inst_35594 = (state_35618[(21)]);
var inst_35607 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35594);
var inst_35608 = cljs.core.pr_str.call(null,inst_35607);
var inst_35609 = [cljs.core.str("not required: "),cljs.core.str(inst_35608)].join('');
var inst_35610 = figwheel.client.utils.log.call(null,inst_35609);
var state_35618__$1 = state_35618;
var statearr_35659_35735 = state_35618__$1;
(statearr_35659_35735[(2)] = inst_35610);

(statearr_35659_35735[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (6))){
var inst_35513 = (state_35618[(2)]);
var state_35618__$1 = state_35618;
var statearr_35660_35736 = state_35618__$1;
(statearr_35660_35736[(2)] = inst_35513);

(statearr_35660_35736[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (28))){
var inst_35538 = (state_35618[(26)]);
var inst_35565 = (state_35618[(2)]);
var inst_35566 = cljs.core.not_empty.call(null,inst_35538);
var state_35618__$1 = (function (){var statearr_35661 = state_35618;
(statearr_35661[(29)] = inst_35565);

return statearr_35661;
})();
if(cljs.core.truth_(inst_35566)){
var statearr_35662_35737 = state_35618__$1;
(statearr_35662_35737[(1)] = (29));

} else {
var statearr_35663_35738 = state_35618__$1;
(statearr_35663_35738[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (25))){
var inst_35536 = (state_35618[(23)]);
var inst_35552 = (state_35618[(2)]);
var inst_35553 = cljs.core.not_empty.call(null,inst_35536);
var state_35618__$1 = (function (){var statearr_35664 = state_35618;
(statearr_35664[(30)] = inst_35552);

return statearr_35664;
})();
if(cljs.core.truth_(inst_35553)){
var statearr_35665_35739 = state_35618__$1;
(statearr_35665_35739[(1)] = (26));

} else {
var statearr_35666_35740 = state_35618__$1;
(statearr_35666_35740[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (34))){
var inst_35587 = (state_35618[(2)]);
var state_35618__$1 = state_35618;
if(cljs.core.truth_(inst_35587)){
var statearr_35667_35741 = state_35618__$1;
(statearr_35667_35741[(1)] = (38));

} else {
var statearr_35668_35742 = state_35618__$1;
(statearr_35668_35742[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (17))){
var state_35618__$1 = state_35618;
var statearr_35669_35743 = state_35618__$1;
(statearr_35669_35743[(2)] = recompile_dependents);

(statearr_35669_35743[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (3))){
var state_35618__$1 = state_35618;
var statearr_35670_35744 = state_35618__$1;
(statearr_35670_35744[(2)] = null);

(statearr_35670_35744[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (12))){
var inst_35509 = (state_35618[(2)]);
var state_35618__$1 = state_35618;
var statearr_35671_35745 = state_35618__$1;
(statearr_35671_35745[(2)] = inst_35509);

(statearr_35671_35745[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (2))){
var inst_35471 = (state_35618[(13)]);
var inst_35478 = cljs.core.seq.call(null,inst_35471);
var inst_35479 = inst_35478;
var inst_35480 = null;
var inst_35481 = (0);
var inst_35482 = (0);
var state_35618__$1 = (function (){var statearr_35672 = state_35618;
(statearr_35672[(7)] = inst_35480);

(statearr_35672[(8)] = inst_35481);

(statearr_35672[(9)] = inst_35482);

(statearr_35672[(10)] = inst_35479);

return statearr_35672;
})();
var statearr_35673_35746 = state_35618__$1;
(statearr_35673_35746[(2)] = null);

(statearr_35673_35746[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (23))){
var inst_35536 = (state_35618[(23)]);
var inst_35538 = (state_35618[(26)]);
var inst_35535 = (state_35618[(24)]);
var inst_35540 = (state_35618[(25)]);
var inst_35532 = (state_35618[(19)]);
var inst_35543 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_35545 = (function (){var all_files = inst_35532;
var res_SINGLEQUOTE_ = inst_35535;
var res = inst_35536;
var files_not_loaded = inst_35538;
var dependencies_that_loaded = inst_35540;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35536,inst_35538,inst_35535,inst_35540,inst_35532,inst_35543,state_val_35619,c__31929__auto__,map__35464,map__35464__$1,opts,before_jsload,on_jsload,reload_dependents,map__35465,map__35465__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35544){
var map__35674 = p__35544;
var map__35674__$1 = ((((!((map__35674 == null)))?((((map__35674.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35674.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35674):map__35674);
var request_url = cljs.core.get.call(null,map__35674__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35536,inst_35538,inst_35535,inst_35540,inst_35532,inst_35543,state_val_35619,c__31929__auto__,map__35464,map__35464__$1,opts,before_jsload,on_jsload,reload_dependents,map__35465,map__35465__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35546 = cljs.core.reverse.call(null,inst_35540);
var inst_35547 = cljs.core.map.call(null,inst_35545,inst_35546);
var inst_35548 = cljs.core.pr_str.call(null,inst_35547);
var inst_35549 = figwheel.client.utils.log.call(null,inst_35548);
var state_35618__$1 = (function (){var statearr_35676 = state_35618;
(statearr_35676[(31)] = inst_35543);

return statearr_35676;
})();
var statearr_35677_35747 = state_35618__$1;
(statearr_35677_35747[(2)] = inst_35549);

(statearr_35677_35747[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (35))){
var state_35618__$1 = state_35618;
var statearr_35678_35748 = state_35618__$1;
(statearr_35678_35748[(2)] = true);

(statearr_35678_35748[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (19))){
var inst_35522 = (state_35618[(12)]);
var inst_35528 = figwheel.client.file_reloading.expand_files.call(null,inst_35522);
var state_35618__$1 = state_35618;
var statearr_35679_35749 = state_35618__$1;
(statearr_35679_35749[(2)] = inst_35528);

(statearr_35679_35749[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (11))){
var state_35618__$1 = state_35618;
var statearr_35680_35750 = state_35618__$1;
(statearr_35680_35750[(2)] = null);

(statearr_35680_35750[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (9))){
var inst_35511 = (state_35618[(2)]);
var state_35618__$1 = state_35618;
var statearr_35681_35751 = state_35618__$1;
(statearr_35681_35751[(2)] = inst_35511);

(statearr_35681_35751[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (5))){
var inst_35481 = (state_35618[(8)]);
var inst_35482 = (state_35618[(9)]);
var inst_35484 = (inst_35482 < inst_35481);
var inst_35485 = inst_35484;
var state_35618__$1 = state_35618;
if(cljs.core.truth_(inst_35485)){
var statearr_35682_35752 = state_35618__$1;
(statearr_35682_35752[(1)] = (7));

} else {
var statearr_35683_35753 = state_35618__$1;
(statearr_35683_35753[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (14))){
var inst_35492 = (state_35618[(22)]);
var inst_35501 = cljs.core.first.call(null,inst_35492);
var inst_35502 = figwheel.client.file_reloading.eval_body.call(null,inst_35501,opts);
var inst_35503 = cljs.core.next.call(null,inst_35492);
var inst_35479 = inst_35503;
var inst_35480 = null;
var inst_35481 = (0);
var inst_35482 = (0);
var state_35618__$1 = (function (){var statearr_35684 = state_35618;
(statearr_35684[(7)] = inst_35480);

(statearr_35684[(8)] = inst_35481);

(statearr_35684[(32)] = inst_35502);

(statearr_35684[(9)] = inst_35482);

(statearr_35684[(10)] = inst_35479);

return statearr_35684;
})();
var statearr_35685_35754 = state_35618__$1;
(statearr_35685_35754[(2)] = null);

(statearr_35685_35754[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (45))){
var state_35618__$1 = state_35618;
var statearr_35686_35755 = state_35618__$1;
(statearr_35686_35755[(2)] = null);

(statearr_35686_35755[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (26))){
var inst_35536 = (state_35618[(23)]);
var inst_35538 = (state_35618[(26)]);
var inst_35535 = (state_35618[(24)]);
var inst_35540 = (state_35618[(25)]);
var inst_35532 = (state_35618[(19)]);
var inst_35555 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_35557 = (function (){var all_files = inst_35532;
var res_SINGLEQUOTE_ = inst_35535;
var res = inst_35536;
var files_not_loaded = inst_35538;
var dependencies_that_loaded = inst_35540;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35536,inst_35538,inst_35535,inst_35540,inst_35532,inst_35555,state_val_35619,c__31929__auto__,map__35464,map__35464__$1,opts,before_jsload,on_jsload,reload_dependents,map__35465,map__35465__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35556){
var map__35687 = p__35556;
var map__35687__$1 = ((((!((map__35687 == null)))?((((map__35687.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35687.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35687):map__35687);
var namespace = cljs.core.get.call(null,map__35687__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__35687__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35536,inst_35538,inst_35535,inst_35540,inst_35532,inst_35555,state_val_35619,c__31929__auto__,map__35464,map__35464__$1,opts,before_jsload,on_jsload,reload_dependents,map__35465,map__35465__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35558 = cljs.core.map.call(null,inst_35557,inst_35536);
var inst_35559 = cljs.core.pr_str.call(null,inst_35558);
var inst_35560 = figwheel.client.utils.log.call(null,inst_35559);
var inst_35561 = (function (){var all_files = inst_35532;
var res_SINGLEQUOTE_ = inst_35535;
var res = inst_35536;
var files_not_loaded = inst_35538;
var dependencies_that_loaded = inst_35540;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35536,inst_35538,inst_35535,inst_35540,inst_35532,inst_35555,inst_35557,inst_35558,inst_35559,inst_35560,state_val_35619,c__31929__auto__,map__35464,map__35464__$1,opts,before_jsload,on_jsload,reload_dependents,map__35465,map__35465__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35536,inst_35538,inst_35535,inst_35540,inst_35532,inst_35555,inst_35557,inst_35558,inst_35559,inst_35560,state_val_35619,c__31929__auto__,map__35464,map__35464__$1,opts,before_jsload,on_jsload,reload_dependents,map__35465,map__35465__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35562 = setTimeout(inst_35561,(10));
var state_35618__$1 = (function (){var statearr_35689 = state_35618;
(statearr_35689[(33)] = inst_35555);

(statearr_35689[(34)] = inst_35560);

return statearr_35689;
})();
var statearr_35690_35756 = state_35618__$1;
(statearr_35690_35756[(2)] = inst_35562);

(statearr_35690_35756[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (16))){
var state_35618__$1 = state_35618;
var statearr_35691_35757 = state_35618__$1;
(statearr_35691_35757[(2)] = reload_dependents);

(statearr_35691_35757[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (38))){
var inst_35572 = (state_35618[(16)]);
var inst_35589 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35572);
var state_35618__$1 = state_35618;
var statearr_35692_35758 = state_35618__$1;
(statearr_35692_35758[(2)] = inst_35589);

(statearr_35692_35758[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (30))){
var state_35618__$1 = state_35618;
var statearr_35693_35759 = state_35618__$1;
(statearr_35693_35759[(2)] = null);

(statearr_35693_35759[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (10))){
var inst_35492 = (state_35618[(22)]);
var inst_35494 = cljs.core.chunked_seq_QMARK_.call(null,inst_35492);
var state_35618__$1 = state_35618;
if(inst_35494){
var statearr_35694_35760 = state_35618__$1;
(statearr_35694_35760[(1)] = (13));

} else {
var statearr_35695_35761 = state_35618__$1;
(statearr_35695_35761[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (18))){
var inst_35526 = (state_35618[(2)]);
var state_35618__$1 = state_35618;
if(cljs.core.truth_(inst_35526)){
var statearr_35696_35762 = state_35618__$1;
(statearr_35696_35762[(1)] = (19));

} else {
var statearr_35697_35763 = state_35618__$1;
(statearr_35697_35763[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (42))){
var state_35618__$1 = state_35618;
var statearr_35698_35764 = state_35618__$1;
(statearr_35698_35764[(2)] = null);

(statearr_35698_35764[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (37))){
var inst_35584 = (state_35618[(2)]);
var state_35618__$1 = state_35618;
var statearr_35699_35765 = state_35618__$1;
(statearr_35699_35765[(2)] = inst_35584);

(statearr_35699_35765[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35619 === (8))){
var inst_35492 = (state_35618[(22)]);
var inst_35479 = (state_35618[(10)]);
var inst_35492__$1 = cljs.core.seq.call(null,inst_35479);
var state_35618__$1 = (function (){var statearr_35700 = state_35618;
(statearr_35700[(22)] = inst_35492__$1);

return statearr_35700;
})();
if(inst_35492__$1){
var statearr_35701_35766 = state_35618__$1;
(statearr_35701_35766[(1)] = (10));

} else {
var statearr_35702_35767 = state_35618__$1;
(statearr_35702_35767[(1)] = (11));

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
});})(c__31929__auto__,map__35464,map__35464__$1,opts,before_jsload,on_jsload,reload_dependents,map__35465,map__35465__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__31817__auto__,c__31929__auto__,map__35464,map__35464__$1,opts,before_jsload,on_jsload,reload_dependents,map__35465,map__35465__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31818__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31818__auto____0 = (function (){
var statearr_35706 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35706[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__31818__auto__);

(statearr_35706[(1)] = (1));

return statearr_35706;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31818__auto____1 = (function (state_35618){
while(true){
var ret_value__31819__auto__ = (function (){try{while(true){
var result__31820__auto__ = switch__31817__auto__.call(null,state_35618);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31820__auto__;
}
break;
}
}catch (e35707){if((e35707 instanceof Object)){
var ex__31821__auto__ = e35707;
var statearr_35708_35768 = state_35618;
(statearr_35708_35768[(5)] = ex__31821__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35707;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35769 = state_35618;
state_35618 = G__35769;
continue;
} else {
return ret_value__31819__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__31818__auto__ = function(state_35618){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31818__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31818__auto____1.call(this,state_35618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__31818__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31818__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__31818__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31818__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31818__auto__;
})()
;})(switch__31817__auto__,c__31929__auto__,map__35464,map__35464__$1,opts,before_jsload,on_jsload,reload_dependents,map__35465,map__35465__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__31931__auto__ = (function (){var statearr_35709 = f__31930__auto__.call(null);
(statearr_35709[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31929__auto__);

return statearr_35709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31931__auto__);
});})(c__31929__auto__,map__35464,map__35464__$1,opts,before_jsload,on_jsload,reload_dependents,map__35465,map__35465__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__31929__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35772,link){
var map__35775 = p__35772;
var map__35775__$1 = ((((!((map__35775 == null)))?((((map__35775.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35775.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35775):map__35775);
var file = cljs.core.get.call(null,map__35775__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__35775,map__35775__$1,file){
return (function (p1__35770_SHARP_,p2__35771_SHARP_){
if(cljs.core._EQ_.call(null,p1__35770_SHARP_,p2__35771_SHARP_)){
return p1__35770_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__35775,map__35775__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35781){
var map__35782 = p__35781;
var map__35782__$1 = ((((!((map__35782 == null)))?((((map__35782.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35782.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35782):map__35782);
var match_length = cljs.core.get.call(null,map__35782__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35782__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35777_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35777_SHARP_);
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
var args35784 = [];
var len__26645__auto___35787 = arguments.length;
var i__26646__auto___35788 = (0);
while(true){
if((i__26646__auto___35788 < len__26645__auto___35787)){
args35784.push((arguments[i__26646__auto___35788]));

var G__35789 = (i__26646__auto___35788 + (1));
i__26646__auto___35788 = G__35789;
continue;
} else {
}
break;
}

var G__35786 = args35784.length;
switch (G__35786) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35784.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__35791_SHARP_,p2__35792_SHARP_){
return cljs.core.assoc.call(null,p1__35791_SHARP_,cljs.core.get.call(null,p2__35792_SHARP_,key),p2__35792_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__35793){
var map__35796 = p__35793;
var map__35796__$1 = ((((!((map__35796 == null)))?((((map__35796.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35796.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35796):map__35796);
var f_data = map__35796__$1;
var file = cljs.core.get.call(null,map__35796__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35798,files_msg){
var map__35805 = p__35798;
var map__35805__$1 = ((((!((map__35805 == null)))?((((map__35805.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35805.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35805):map__35805);
var opts = map__35805__$1;
var on_cssload = cljs.core.get.call(null,map__35805__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__35807_35811 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__35808_35812 = null;
var count__35809_35813 = (0);
var i__35810_35814 = (0);
while(true){
if((i__35810_35814 < count__35809_35813)){
var f_35815 = cljs.core._nth.call(null,chunk__35808_35812,i__35810_35814);
figwheel.client.file_reloading.reload_css_file.call(null,f_35815);

var G__35816 = seq__35807_35811;
var G__35817 = chunk__35808_35812;
var G__35818 = count__35809_35813;
var G__35819 = (i__35810_35814 + (1));
seq__35807_35811 = G__35816;
chunk__35808_35812 = G__35817;
count__35809_35813 = G__35818;
i__35810_35814 = G__35819;
continue;
} else {
var temp__4657__auto___35820 = cljs.core.seq.call(null,seq__35807_35811);
if(temp__4657__auto___35820){
var seq__35807_35821__$1 = temp__4657__auto___35820;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35807_35821__$1)){
var c__26381__auto___35822 = cljs.core.chunk_first.call(null,seq__35807_35821__$1);
var G__35823 = cljs.core.chunk_rest.call(null,seq__35807_35821__$1);
var G__35824 = c__26381__auto___35822;
var G__35825 = cljs.core.count.call(null,c__26381__auto___35822);
var G__35826 = (0);
seq__35807_35811 = G__35823;
chunk__35808_35812 = G__35824;
count__35809_35813 = G__35825;
i__35810_35814 = G__35826;
continue;
} else {
var f_35827 = cljs.core.first.call(null,seq__35807_35821__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_35827);

var G__35828 = cljs.core.next.call(null,seq__35807_35821__$1);
var G__35829 = null;
var G__35830 = (0);
var G__35831 = (0);
seq__35807_35811 = G__35828;
chunk__35808_35812 = G__35829;
count__35809_35813 = G__35830;
i__35810_35814 = G__35831;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__35805,map__35805__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__35805,map__35805__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1476657531700