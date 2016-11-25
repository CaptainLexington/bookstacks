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
var or__25576__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__25576__auto__){
return or__25576__auto__;
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
var or__25576__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__25576__auto__)){
return or__25576__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__35074_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__35074_SHARP_));
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
var seq__35079 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__35080 = null;
var count__35081 = (0);
var i__35082 = (0);
while(true){
if((i__35082 < count__35081)){
var n = cljs.core._nth.call(null,chunk__35080,i__35082);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__35083 = seq__35079;
var G__35084 = chunk__35080;
var G__35085 = count__35081;
var G__35086 = (i__35082 + (1));
seq__35079 = G__35083;
chunk__35080 = G__35084;
count__35081 = G__35085;
i__35082 = G__35086;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35079);
if(temp__4657__auto__){
var seq__35079__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35079__$1)){
var c__26387__auto__ = cljs.core.chunk_first.call(null,seq__35079__$1);
var G__35087 = cljs.core.chunk_rest.call(null,seq__35079__$1);
var G__35088 = c__26387__auto__;
var G__35089 = cljs.core.count.call(null,c__26387__auto__);
var G__35090 = (0);
seq__35079 = G__35087;
chunk__35080 = G__35088;
count__35081 = G__35089;
i__35082 = G__35090;
continue;
} else {
var n = cljs.core.first.call(null,seq__35079__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__35091 = cljs.core.next.call(null,seq__35079__$1);
var G__35092 = null;
var G__35093 = (0);
var G__35094 = (0);
seq__35079 = G__35091;
chunk__35080 = G__35092;
count__35081 = G__35093;
i__35082 = G__35094;
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

var seq__35145_35156 = cljs.core.seq.call(null,deps);
var chunk__35146_35157 = null;
var count__35147_35158 = (0);
var i__35148_35159 = (0);
while(true){
if((i__35148_35159 < count__35147_35158)){
var dep_35160 = cljs.core._nth.call(null,chunk__35146_35157,i__35148_35159);
topo_sort_helper_STAR_.call(null,dep_35160,(depth + (1)),state);

var G__35161 = seq__35145_35156;
var G__35162 = chunk__35146_35157;
var G__35163 = count__35147_35158;
var G__35164 = (i__35148_35159 + (1));
seq__35145_35156 = G__35161;
chunk__35146_35157 = G__35162;
count__35147_35158 = G__35163;
i__35148_35159 = G__35164;
continue;
} else {
var temp__4657__auto___35165 = cljs.core.seq.call(null,seq__35145_35156);
if(temp__4657__auto___35165){
var seq__35145_35166__$1 = temp__4657__auto___35165;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35145_35166__$1)){
var c__26387__auto___35167 = cljs.core.chunk_first.call(null,seq__35145_35166__$1);
var G__35168 = cljs.core.chunk_rest.call(null,seq__35145_35166__$1);
var G__35169 = c__26387__auto___35167;
var G__35170 = cljs.core.count.call(null,c__26387__auto___35167);
var G__35171 = (0);
seq__35145_35156 = G__35168;
chunk__35146_35157 = G__35169;
count__35147_35158 = G__35170;
i__35148_35159 = G__35171;
continue;
} else {
var dep_35172 = cljs.core.first.call(null,seq__35145_35166__$1);
topo_sort_helper_STAR_.call(null,dep_35172,(depth + (1)),state);

var G__35173 = cljs.core.next.call(null,seq__35145_35166__$1);
var G__35174 = null;
var G__35175 = (0);
var G__35176 = (0);
seq__35145_35156 = G__35173;
chunk__35146_35157 = G__35174;
count__35147_35158 = G__35175;
i__35148_35159 = G__35176;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__35149){
var vec__35153 = p__35149;
var seq__35154 = cljs.core.seq.call(null,vec__35153);
var first__35155 = cljs.core.first.call(null,seq__35154);
var seq__35154__$1 = cljs.core.next.call(null,seq__35154);
var x = first__35155;
var xs = seq__35154__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__35153,seq__35154,first__35155,seq__35154__$1,x,xs,get_deps__$1){
return (function (p1__35095_SHARP_){
return clojure.set.difference.call(null,p1__35095_SHARP_,x);
});})(vec__35153,seq__35154,first__35155,seq__35154__$1,x,xs,get_deps__$1))
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
var seq__35189 = cljs.core.seq.call(null,provides);
var chunk__35190 = null;
var count__35191 = (0);
var i__35192 = (0);
while(true){
if((i__35192 < count__35191)){
var prov = cljs.core._nth.call(null,chunk__35190,i__35192);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35193_35201 = cljs.core.seq.call(null,requires);
var chunk__35194_35202 = null;
var count__35195_35203 = (0);
var i__35196_35204 = (0);
while(true){
if((i__35196_35204 < count__35195_35203)){
var req_35205 = cljs.core._nth.call(null,chunk__35194_35202,i__35196_35204);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35205,prov);

var G__35206 = seq__35193_35201;
var G__35207 = chunk__35194_35202;
var G__35208 = count__35195_35203;
var G__35209 = (i__35196_35204 + (1));
seq__35193_35201 = G__35206;
chunk__35194_35202 = G__35207;
count__35195_35203 = G__35208;
i__35196_35204 = G__35209;
continue;
} else {
var temp__4657__auto___35210 = cljs.core.seq.call(null,seq__35193_35201);
if(temp__4657__auto___35210){
var seq__35193_35211__$1 = temp__4657__auto___35210;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35193_35211__$1)){
var c__26387__auto___35212 = cljs.core.chunk_first.call(null,seq__35193_35211__$1);
var G__35213 = cljs.core.chunk_rest.call(null,seq__35193_35211__$1);
var G__35214 = c__26387__auto___35212;
var G__35215 = cljs.core.count.call(null,c__26387__auto___35212);
var G__35216 = (0);
seq__35193_35201 = G__35213;
chunk__35194_35202 = G__35214;
count__35195_35203 = G__35215;
i__35196_35204 = G__35216;
continue;
} else {
var req_35217 = cljs.core.first.call(null,seq__35193_35211__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35217,prov);

var G__35218 = cljs.core.next.call(null,seq__35193_35211__$1);
var G__35219 = null;
var G__35220 = (0);
var G__35221 = (0);
seq__35193_35201 = G__35218;
chunk__35194_35202 = G__35219;
count__35195_35203 = G__35220;
i__35196_35204 = G__35221;
continue;
}
} else {
}
}
break;
}

var G__35222 = seq__35189;
var G__35223 = chunk__35190;
var G__35224 = count__35191;
var G__35225 = (i__35192 + (1));
seq__35189 = G__35222;
chunk__35190 = G__35223;
count__35191 = G__35224;
i__35192 = G__35225;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35189);
if(temp__4657__auto__){
var seq__35189__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35189__$1)){
var c__26387__auto__ = cljs.core.chunk_first.call(null,seq__35189__$1);
var G__35226 = cljs.core.chunk_rest.call(null,seq__35189__$1);
var G__35227 = c__26387__auto__;
var G__35228 = cljs.core.count.call(null,c__26387__auto__);
var G__35229 = (0);
seq__35189 = G__35226;
chunk__35190 = G__35227;
count__35191 = G__35228;
i__35192 = G__35229;
continue;
} else {
var prov = cljs.core.first.call(null,seq__35189__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35197_35230 = cljs.core.seq.call(null,requires);
var chunk__35198_35231 = null;
var count__35199_35232 = (0);
var i__35200_35233 = (0);
while(true){
if((i__35200_35233 < count__35199_35232)){
var req_35234 = cljs.core._nth.call(null,chunk__35198_35231,i__35200_35233);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35234,prov);

var G__35235 = seq__35197_35230;
var G__35236 = chunk__35198_35231;
var G__35237 = count__35199_35232;
var G__35238 = (i__35200_35233 + (1));
seq__35197_35230 = G__35235;
chunk__35198_35231 = G__35236;
count__35199_35232 = G__35237;
i__35200_35233 = G__35238;
continue;
} else {
var temp__4657__auto___35239__$1 = cljs.core.seq.call(null,seq__35197_35230);
if(temp__4657__auto___35239__$1){
var seq__35197_35240__$1 = temp__4657__auto___35239__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35197_35240__$1)){
var c__26387__auto___35241 = cljs.core.chunk_first.call(null,seq__35197_35240__$1);
var G__35242 = cljs.core.chunk_rest.call(null,seq__35197_35240__$1);
var G__35243 = c__26387__auto___35241;
var G__35244 = cljs.core.count.call(null,c__26387__auto___35241);
var G__35245 = (0);
seq__35197_35230 = G__35242;
chunk__35198_35231 = G__35243;
count__35199_35232 = G__35244;
i__35200_35233 = G__35245;
continue;
} else {
var req_35246 = cljs.core.first.call(null,seq__35197_35240__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35246,prov);

var G__35247 = cljs.core.next.call(null,seq__35197_35240__$1);
var G__35248 = null;
var G__35249 = (0);
var G__35250 = (0);
seq__35197_35230 = G__35247;
chunk__35198_35231 = G__35248;
count__35199_35232 = G__35249;
i__35200_35233 = G__35250;
continue;
}
} else {
}
}
break;
}

var G__35251 = cljs.core.next.call(null,seq__35189__$1);
var G__35252 = null;
var G__35253 = (0);
var G__35254 = (0);
seq__35189 = G__35251;
chunk__35190 = G__35252;
count__35191 = G__35253;
i__35192 = G__35254;
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
var seq__35259_35263 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__35260_35264 = null;
var count__35261_35265 = (0);
var i__35262_35266 = (0);
while(true){
if((i__35262_35266 < count__35261_35265)){
var ns_35267 = cljs.core._nth.call(null,chunk__35260_35264,i__35262_35266);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35267);

var G__35268 = seq__35259_35263;
var G__35269 = chunk__35260_35264;
var G__35270 = count__35261_35265;
var G__35271 = (i__35262_35266 + (1));
seq__35259_35263 = G__35268;
chunk__35260_35264 = G__35269;
count__35261_35265 = G__35270;
i__35262_35266 = G__35271;
continue;
} else {
var temp__4657__auto___35272 = cljs.core.seq.call(null,seq__35259_35263);
if(temp__4657__auto___35272){
var seq__35259_35273__$1 = temp__4657__auto___35272;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35259_35273__$1)){
var c__26387__auto___35274 = cljs.core.chunk_first.call(null,seq__35259_35273__$1);
var G__35275 = cljs.core.chunk_rest.call(null,seq__35259_35273__$1);
var G__35276 = c__26387__auto___35274;
var G__35277 = cljs.core.count.call(null,c__26387__auto___35274);
var G__35278 = (0);
seq__35259_35263 = G__35275;
chunk__35260_35264 = G__35276;
count__35261_35265 = G__35277;
i__35262_35266 = G__35278;
continue;
} else {
var ns_35279 = cljs.core.first.call(null,seq__35259_35273__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35279);

var G__35280 = cljs.core.next.call(null,seq__35259_35273__$1);
var G__35281 = null;
var G__35282 = (0);
var G__35283 = (0);
seq__35259_35263 = G__35280;
chunk__35260_35264 = G__35281;
count__35261_35265 = G__35282;
i__35262_35266 = G__35283;
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
goog.require_figwheel_backup_ = (function (){var or__25576__auto__ = goog.require__;
if(cljs.core.truth_(or__25576__auto__)){
return or__25576__auto__;
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
var G__35284__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__35284 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35285__i = 0, G__35285__a = new Array(arguments.length -  0);
while (G__35285__i < G__35285__a.length) {G__35285__a[G__35285__i] = arguments[G__35285__i + 0]; ++G__35285__i;}
  args = new cljs.core.IndexedSeq(G__35285__a,0);
} 
return G__35284__delegate.call(this,args);};
G__35284.cljs$lang$maxFixedArity = 0;
G__35284.cljs$lang$applyTo = (function (arglist__35286){
var args = cljs.core.seq(arglist__35286);
return G__35284__delegate(args);
});
G__35284.cljs$core$IFn$_invoke$arity$variadic = G__35284__delegate;
return G__35284;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__35288 = cljs.core._EQ_;
var expr__35289 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__35288.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__35289))){
var path_parts = ((function (pred__35288,expr__35289){
return (function (p1__35287_SHARP_){
return clojure.string.split.call(null,p1__35287_SHARP_,/[\/\\]/);
});})(pred__35288,expr__35289))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__35288,expr__35289){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e35291){if((e35291 instanceof Error)){
var e = e35291;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35291;

}
}})());
});
;})(path_parts,sep,root,pred__35288,expr__35289))
} else {
if(cljs.core.truth_(pred__35288.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__35289))){
return ((function (pred__35288,expr__35289){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__35288,expr__35289){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__35288,expr__35289))
);

return deferred.addErrback(((function (deferred,pred__35288,expr__35289){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__35288,expr__35289))
);
});
;})(pred__35288,expr__35289))
} else {
return ((function (pred__35288,expr__35289){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__35288,expr__35289))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__35292,callback){
var map__35295 = p__35292;
var map__35295__$1 = ((((!((map__35295 == null)))?((((map__35295.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35295.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35295):map__35295);
var file_msg = map__35295__$1;
var request_url = cljs.core.get.call(null,map__35295__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__35295,map__35295__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__35295,map__35295__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__28307__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28307__auto__){
return (function (){
var f__28308__auto__ = (function (){var switch__28286__auto__ = ((function (c__28307__auto__){
return (function (state_35319){
var state_val_35320 = (state_35319[(1)]);
if((state_val_35320 === (7))){
var inst_35315 = (state_35319[(2)]);
var state_35319__$1 = state_35319;
var statearr_35321_35341 = state_35319__$1;
(statearr_35321_35341[(2)] = inst_35315);

(statearr_35321_35341[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35320 === (1))){
var state_35319__$1 = state_35319;
var statearr_35322_35342 = state_35319__$1;
(statearr_35322_35342[(2)] = null);

(statearr_35322_35342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35320 === (4))){
var inst_35299 = (state_35319[(7)]);
var inst_35299__$1 = (state_35319[(2)]);
var state_35319__$1 = (function (){var statearr_35323 = state_35319;
(statearr_35323[(7)] = inst_35299__$1);

return statearr_35323;
})();
if(cljs.core.truth_(inst_35299__$1)){
var statearr_35324_35343 = state_35319__$1;
(statearr_35324_35343[(1)] = (5));

} else {
var statearr_35325_35344 = state_35319__$1;
(statearr_35325_35344[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35320 === (6))){
var state_35319__$1 = state_35319;
var statearr_35326_35345 = state_35319__$1;
(statearr_35326_35345[(2)] = null);

(statearr_35326_35345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35320 === (3))){
var inst_35317 = (state_35319[(2)]);
var state_35319__$1 = state_35319;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35319__$1,inst_35317);
} else {
if((state_val_35320 === (2))){
var state_35319__$1 = state_35319;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35319__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_35320 === (11))){
var inst_35311 = (state_35319[(2)]);
var state_35319__$1 = (function (){var statearr_35327 = state_35319;
(statearr_35327[(8)] = inst_35311);

return statearr_35327;
})();
var statearr_35328_35346 = state_35319__$1;
(statearr_35328_35346[(2)] = null);

(statearr_35328_35346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35320 === (9))){
var inst_35303 = (state_35319[(9)]);
var inst_35305 = (state_35319[(10)]);
var inst_35307 = inst_35305.call(null,inst_35303);
var state_35319__$1 = state_35319;
var statearr_35329_35347 = state_35319__$1;
(statearr_35329_35347[(2)] = inst_35307);

(statearr_35329_35347[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35320 === (5))){
var inst_35299 = (state_35319[(7)]);
var inst_35301 = figwheel.client.file_reloading.blocking_load.call(null,inst_35299);
var state_35319__$1 = state_35319;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35319__$1,(8),inst_35301);
} else {
if((state_val_35320 === (10))){
var inst_35303 = (state_35319[(9)]);
var inst_35309 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_35303);
var state_35319__$1 = state_35319;
var statearr_35330_35348 = state_35319__$1;
(statearr_35330_35348[(2)] = inst_35309);

(statearr_35330_35348[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35320 === (8))){
var inst_35305 = (state_35319[(10)]);
var inst_35299 = (state_35319[(7)]);
var inst_35303 = (state_35319[(2)]);
var inst_35304 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_35305__$1 = cljs.core.get.call(null,inst_35304,inst_35299);
var state_35319__$1 = (function (){var statearr_35331 = state_35319;
(statearr_35331[(9)] = inst_35303);

(statearr_35331[(10)] = inst_35305__$1);

return statearr_35331;
})();
if(cljs.core.truth_(inst_35305__$1)){
var statearr_35332_35349 = state_35319__$1;
(statearr_35332_35349[(1)] = (9));

} else {
var statearr_35333_35350 = state_35319__$1;
(statearr_35333_35350[(1)] = (10));

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
});})(c__28307__auto__))
;
return ((function (switch__28286__auto__,c__28307__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__28287__auto__ = null;
var figwheel$client$file_reloading$state_machine__28287__auto____0 = (function (){
var statearr_35337 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35337[(0)] = figwheel$client$file_reloading$state_machine__28287__auto__);

(statearr_35337[(1)] = (1));

return statearr_35337;
});
var figwheel$client$file_reloading$state_machine__28287__auto____1 = (function (state_35319){
while(true){
var ret_value__28288__auto__ = (function (){try{while(true){
var result__28289__auto__ = switch__28286__auto__.call(null,state_35319);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28289__auto__;
}
break;
}
}catch (e35338){if((e35338 instanceof Object)){
var ex__28290__auto__ = e35338;
var statearr_35339_35351 = state_35319;
(statearr_35339_35351[(5)] = ex__28290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35319);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35338;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35352 = state_35319;
state_35319 = G__35352;
continue;
} else {
return ret_value__28288__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__28287__auto__ = function(state_35319){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__28287__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__28287__auto____1.call(this,state_35319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__28287__auto____0;
figwheel$client$file_reloading$state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__28287__auto____1;
return figwheel$client$file_reloading$state_machine__28287__auto__;
})()
;})(switch__28286__auto__,c__28307__auto__))
})();
var state__28309__auto__ = (function (){var statearr_35340 = f__28308__auto__.call(null);
(statearr_35340[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28307__auto__);

return statearr_35340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28309__auto__);
});})(c__28307__auto__))
);

return c__28307__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__35353,callback){
var map__35356 = p__35353;
var map__35356__$1 = ((((!((map__35356 == null)))?((((map__35356.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35356.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35356):map__35356);
var file_msg = map__35356__$1;
var namespace = cljs.core.get.call(null,map__35356__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__35356,map__35356__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__35356,map__35356__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__35358){
var map__35361 = p__35358;
var map__35361__$1 = ((((!((map__35361 == null)))?((((map__35361.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35361.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35361):map__35361);
var file_msg = map__35361__$1;
var namespace = cljs.core.get.call(null,map__35361__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__25564__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__25564__auto__){
var or__25576__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25576__auto__)){
return or__25576__auto__;
} else {
var or__25576__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25576__auto____$1)){
return or__25576__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__25564__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__35363,callback){
var map__35366 = p__35363;
var map__35366__$1 = ((((!((map__35366 == null)))?((((map__35366.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35366.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35366):map__35366);
var file_msg = map__35366__$1;
var request_url = cljs.core.get.call(null,map__35366__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__35366__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__28307__auto___35470 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28307__auto___35470,out){
return (function (){
var f__28308__auto__ = (function (){var switch__28286__auto__ = ((function (c__28307__auto___35470,out){
return (function (state_35452){
var state_val_35453 = (state_35452[(1)]);
if((state_val_35453 === (1))){
var inst_35426 = cljs.core.seq.call(null,files);
var inst_35427 = cljs.core.first.call(null,inst_35426);
var inst_35428 = cljs.core.next.call(null,inst_35426);
var inst_35429 = files;
var state_35452__$1 = (function (){var statearr_35454 = state_35452;
(statearr_35454[(7)] = inst_35428);

(statearr_35454[(8)] = inst_35427);

(statearr_35454[(9)] = inst_35429);

return statearr_35454;
})();
var statearr_35455_35471 = state_35452__$1;
(statearr_35455_35471[(2)] = null);

(statearr_35455_35471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35453 === (2))){
var inst_35429 = (state_35452[(9)]);
var inst_35435 = (state_35452[(10)]);
var inst_35434 = cljs.core.seq.call(null,inst_35429);
var inst_35435__$1 = cljs.core.first.call(null,inst_35434);
var inst_35436 = cljs.core.next.call(null,inst_35434);
var inst_35437 = (inst_35435__$1 == null);
var inst_35438 = cljs.core.not.call(null,inst_35437);
var state_35452__$1 = (function (){var statearr_35456 = state_35452;
(statearr_35456[(11)] = inst_35436);

(statearr_35456[(10)] = inst_35435__$1);

return statearr_35456;
})();
if(inst_35438){
var statearr_35457_35472 = state_35452__$1;
(statearr_35457_35472[(1)] = (4));

} else {
var statearr_35458_35473 = state_35452__$1;
(statearr_35458_35473[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35453 === (3))){
var inst_35450 = (state_35452[(2)]);
var state_35452__$1 = state_35452;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35452__$1,inst_35450);
} else {
if((state_val_35453 === (4))){
var inst_35435 = (state_35452[(10)]);
var inst_35440 = figwheel.client.file_reloading.reload_js_file.call(null,inst_35435);
var state_35452__$1 = state_35452;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35452__$1,(7),inst_35440);
} else {
if((state_val_35453 === (5))){
var inst_35446 = cljs.core.async.close_BANG_.call(null,out);
var state_35452__$1 = state_35452;
var statearr_35459_35474 = state_35452__$1;
(statearr_35459_35474[(2)] = inst_35446);

(statearr_35459_35474[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35453 === (6))){
var inst_35448 = (state_35452[(2)]);
var state_35452__$1 = state_35452;
var statearr_35460_35475 = state_35452__$1;
(statearr_35460_35475[(2)] = inst_35448);

(statearr_35460_35475[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35453 === (7))){
var inst_35436 = (state_35452[(11)]);
var inst_35442 = (state_35452[(2)]);
var inst_35443 = cljs.core.async.put_BANG_.call(null,out,inst_35442);
var inst_35429 = inst_35436;
var state_35452__$1 = (function (){var statearr_35461 = state_35452;
(statearr_35461[(9)] = inst_35429);

(statearr_35461[(12)] = inst_35443);

return statearr_35461;
})();
var statearr_35462_35476 = state_35452__$1;
(statearr_35462_35476[(2)] = null);

(statearr_35462_35476[(1)] = (2));


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
});})(c__28307__auto___35470,out))
;
return ((function (switch__28286__auto__,c__28307__auto___35470,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28287__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28287__auto____0 = (function (){
var statearr_35466 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35466[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28287__auto__);

(statearr_35466[(1)] = (1));

return statearr_35466;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28287__auto____1 = (function (state_35452){
while(true){
var ret_value__28288__auto__ = (function (){try{while(true){
var result__28289__auto__ = switch__28286__auto__.call(null,state_35452);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28289__auto__;
}
break;
}
}catch (e35467){if((e35467 instanceof Object)){
var ex__28290__auto__ = e35467;
var statearr_35468_35477 = state_35452;
(statearr_35468_35477[(5)] = ex__28290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35467;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35478 = state_35452;
state_35452 = G__35478;
continue;
} else {
return ret_value__28288__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28287__auto__ = function(state_35452){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28287__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28287__auto____1.call(this,state_35452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28287__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28287__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28287__auto__;
})()
;})(switch__28286__auto__,c__28307__auto___35470,out))
})();
var state__28309__auto__ = (function (){var statearr_35469 = f__28308__auto__.call(null);
(statearr_35469[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28307__auto___35470);

return statearr_35469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28309__auto__);
});})(c__28307__auto___35470,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__35479,opts){
var map__35483 = p__35479;
var map__35483__$1 = ((((!((map__35483 == null)))?((((map__35483.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35483.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35483):map__35483);
var eval_body__$1 = cljs.core.get.call(null,map__35483__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__35483__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__25564__auto__ = eval_body__$1;
if(cljs.core.truth_(and__25564__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__25564__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e35485){var e = e35485;
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
return (function (p1__35486_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35486_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__35495){
var vec__35496 = p__35495;
var k = cljs.core.nth.call(null,vec__35496,(0),null);
var v = cljs.core.nth.call(null,vec__35496,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__35499){
var vec__35500 = p__35499;
var k = cljs.core.nth.call(null,vec__35500,(0),null);
var v = cljs.core.nth.call(null,vec__35500,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__35506,p__35507){
var map__35754 = p__35506;
var map__35754__$1 = ((((!((map__35754 == null)))?((((map__35754.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35754.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35754):map__35754);
var opts = map__35754__$1;
var before_jsload = cljs.core.get.call(null,map__35754__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__35754__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__35754__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__35755 = p__35507;
var map__35755__$1 = ((((!((map__35755 == null)))?((((map__35755.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35755.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35755):map__35755);
var msg = map__35755__$1;
var files = cljs.core.get.call(null,map__35755__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__35755__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__35755__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28307__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28307__auto__,map__35754,map__35754__$1,opts,before_jsload,on_jsload,reload_dependents,map__35755,map__35755__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__28308__auto__ = (function (){var switch__28286__auto__ = ((function (c__28307__auto__,map__35754,map__35754__$1,opts,before_jsload,on_jsload,reload_dependents,map__35755,map__35755__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_35908){
var state_val_35909 = (state_35908[(1)]);
if((state_val_35909 === (7))){
var inst_35771 = (state_35908[(7)]);
var inst_35769 = (state_35908[(8)]);
var inst_35772 = (state_35908[(9)]);
var inst_35770 = (state_35908[(10)]);
var inst_35777 = cljs.core._nth.call(null,inst_35770,inst_35772);
var inst_35778 = figwheel.client.file_reloading.eval_body.call(null,inst_35777,opts);
var inst_35779 = (inst_35772 + (1));
var tmp35910 = inst_35771;
var tmp35911 = inst_35769;
var tmp35912 = inst_35770;
var inst_35769__$1 = tmp35911;
var inst_35770__$1 = tmp35912;
var inst_35771__$1 = tmp35910;
var inst_35772__$1 = inst_35779;
var state_35908__$1 = (function (){var statearr_35913 = state_35908;
(statearr_35913[(7)] = inst_35771__$1);

(statearr_35913[(8)] = inst_35769__$1);

(statearr_35913[(9)] = inst_35772__$1);

(statearr_35913[(11)] = inst_35778);

(statearr_35913[(10)] = inst_35770__$1);

return statearr_35913;
})();
var statearr_35914_36000 = state_35908__$1;
(statearr_35914_36000[(2)] = null);

(statearr_35914_36000[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35909 === (20))){
var inst_35812 = (state_35908[(12)]);
var inst_35820 = figwheel.client.file_reloading.sort_files.call(null,inst_35812);
var state_35908__$1 = state_35908;
var statearr_35915_36001 = state_35908__$1;
(statearr_35915_36001[(2)] = inst_35820);

(statearr_35915_36001[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35909 === (27))){
var state_35908__$1 = state_35908;
var statearr_35916_36002 = state_35908__$1;
(statearr_35916_36002[(2)] = null);

(statearr_35916_36002[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35909 === (1))){
var inst_35761 = (state_35908[(13)]);
var inst_35758 = before_jsload.call(null,files);
var inst_35759 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_35760 = (function (){return ((function (inst_35761,inst_35758,inst_35759,state_val_35909,c__28307__auto__,map__35754,map__35754__$1,opts,before_jsload,on_jsload,reload_dependents,map__35755,map__35755__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35503_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35503_SHARP_);
});
;})(inst_35761,inst_35758,inst_35759,state_val_35909,c__28307__auto__,map__35754,map__35754__$1,opts,before_jsload,on_jsload,reload_dependents,map__35755,map__35755__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35761__$1 = cljs.core.filter.call(null,inst_35760,files);
var inst_35762 = cljs.core.not_empty.call(null,inst_35761__$1);
var state_35908__$1 = (function (){var statearr_35917 = state_35908;
(statearr_35917[(14)] = inst_35759);

(statearr_35917[(13)] = inst_35761__$1);

(statearr_35917[(15)] = inst_35758);

return statearr_35917;
})();
if(cljs.core.truth_(inst_35762)){
var statearr_35918_36003 = state_35908__$1;
(statearr_35918_36003[(1)] = (2));

} else {
var statearr_35919_36004 = state_35908__$1;
(statearr_35919_36004[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35909 === (24))){
var state_35908__$1 = state_35908;
var statearr_35920_36005 = state_35908__$1;
(statearr_35920_36005[(2)] = null);

(statearr_35920_36005[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35909 === (39))){
var inst_35862 = (state_35908[(16)]);
var state_35908__$1 = state_35908;
var statearr_35921_36006 = state_35908__$1;
(statearr_35921_36006[(2)] = inst_35862);

(statearr_35921_36006[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35909 === (46))){
var inst_35903 = (state_35908[(2)]);
var state_35908__$1 = state_35908;
var statearr_35922_36007 = state_35908__$1;
(statearr_35922_36007[(2)] = inst_35903);

(statearr_35922_36007[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35909 === (4))){
var inst_35806 = (state_35908[(2)]);
var inst_35807 = cljs.core.List.EMPTY;
var inst_35808 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_35807);
var inst_35809 = (function (){return ((function (inst_35806,inst_35807,inst_35808,state_val_35909,c__28307__auto__,map__35754,map__35754__$1,opts,before_jsload,on_jsload,reload_dependents,map__35755,map__35755__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35504_SHARP_){
var and__25564__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35504_SHARP_);
if(cljs.core.truth_(and__25564__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35504_SHARP_));
} else {
return and__25564__auto__;
}
});
;})(inst_35806,inst_35807,inst_35808,state_val_35909,c__28307__auto__,map__35754,map__35754__$1,opts,before_jsload,on_jsload,reload_dependents,map__35755,map__35755__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35810 = cljs.core.filter.call(null,inst_35809,files);
var inst_35811 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_35812 = cljs.core.concat.call(null,inst_35810,inst_35811);
var state_35908__$1 = (function (){var statearr_35923 = state_35908;
(statearr_35923[(17)] = inst_35808);

(statearr_35923[(12)] = inst_35812);

(statearr_35923[(18)] = inst_35806);

return statearr_35923;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_35924_36008 = state_35908__$1;
(statearr_35924_36008[(1)] = (16));

} else {
var statearr_35925_36009 = state_35908__$1;
(statearr_35925_36009[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35909 === (15))){
var inst_35796 = (state_35908[(2)]);
var state_35908__$1 = state_35908;
var statearr_35926_36010 = state_35908__$1;
(statearr_35926_36010[(2)] = inst_35796);

(statearr_35926_36010[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35909 === (21))){
var inst_35822 = (state_35908[(19)]);
var inst_35822__$1 = (state_35908[(2)]);
var inst_35823 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_35822__$1);
var state_35908__$1 = (function (){var statearr_35927 = state_35908;
(statearr_35927[(19)] = inst_35822__$1);

return statearr_35927;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35908__$1,(22),inst_35823);
} else {
if((state_val_35909 === (31))){
var inst_35906 = (state_35908[(2)]);
var state_35908__$1 = state_35908;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35908__$1,inst_35906);
} else {
if((state_val_35909 === (32))){
var inst_35862 = (state_35908[(16)]);
var inst_35867 = inst_35862.cljs$lang$protocol_mask$partition0$;
var inst_35868 = (inst_35867 & (64));
var inst_35869 = inst_35862.cljs$core$ISeq$;
var inst_35870 = (inst_35868) || (inst_35869);
var state_35908__$1 = state_35908;
if(cljs.core.truth_(inst_35870)){
var statearr_35928_36011 = state_35908__$1;
(statearr_35928_36011[(1)] = (35));

} else {
var statearr_35929_36012 = state_35908__$1;
(statearr_35929_36012[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35909 === (40))){
var inst_35883 = (state_35908[(20)]);
var inst_35882 = (state_35908[(2)]);
var inst_35883__$1 = cljs.core.get.call(null,inst_35882,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_35884 = cljs.core.get.call(null,inst_35882,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_35885 = cljs.core.not_empty.call(null,inst_35883__$1);
var state_35908__$1 = (function (){var statearr_35930 = state_35908;
(statearr_35930[(20)] = inst_35883__$1);

(statearr_35930[(21)] = inst_35884);

return statearr_35930;
})();
if(cljs.core.truth_(inst_35885)){
var statearr_35931_36013 = state_35908__$1;
(statearr_35931_36013[(1)] = (41));

} else {
var statearr_35932_36014 = state_35908__$1;
(statearr_35932_36014[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35909 === (33))){
var state_35908__$1 = state_35908;
var statearr_35933_36015 = state_35908__$1;
(statearr_35933_36015[(2)] = false);

(statearr_35933_36015[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35909 === (13))){
var inst_35782 = (state_35908[(22)]);
var inst_35786 = cljs.core.chunk_first.call(null,inst_35782);
var inst_35787 = cljs.core.chunk_rest.call(null,inst_35782);
var inst_35788 = cljs.core.count.call(null,inst_35786);
var inst_35769 = inst_35787;
var inst_35770 = inst_35786;
var inst_35771 = inst_35788;
var inst_35772 = (0);
var state_35908__$1 = (function (){var statearr_35934 = state_35908;
(statearr_35934[(7)] = inst_35771);

(statearr_35934[(8)] = inst_35769);

(statearr_35934[(9)] = inst_35772);

(statearr_35934[(10)] = inst_35770);

return statearr_35934;
})();
var statearr_35935_36016 = state_35908__$1;
(statearr_35935_36016[(2)] = null);

(statearr_35935_36016[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35909 === (22))){
var inst_35822 = (state_35908[(19)]);
var inst_35826 = (state_35908[(23)]);
var inst_35825 = (state_35908[(24)]);
var inst_35830 = (state_35908[(25)]);
var inst_35825__$1 = (state_35908[(2)]);
var inst_35826__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35825__$1);
var inst_35827 = (function (){var all_files = inst_35822;
var res_SINGLEQUOTE_ = inst_35825__$1;
var res = inst_35826__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_35822,inst_35826,inst_35825,inst_35830,inst_35825__$1,inst_35826__$1,state_val_35909,c__28307__auto__,map__35754,map__35754__$1,opts,before_jsload,on_jsload,reload_dependents,map__35755,map__35755__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35505_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__35505_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_35822,inst_35826,inst_35825,inst_35830,inst_35825__$1,inst_35826__$1,state_val_35909,c__28307__auto__,map__35754,map__35754__$1,opts,before_jsload,on_jsload,reload_dependents,map__35755,map__35755__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35828 = cljs.core.filter.call(null,inst_35827,inst_35825__$1);
var inst_35829 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_35830__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35829);
var inst_35831 = cljs.core.not_empty.call(null,inst_35830__$1);
var state_35908__$1 = (function (){var statearr_35936 = state_35908;
(statearr_35936[(23)] = inst_35826__$1);

(statearr_35936[(26)] = inst_35828);

(statearr_35936[(24)] = inst_35825__$1);

(statearr_35936[(25)] = inst_35830__$1);

return statearr_35936;
})();
if(cljs.core.truth_(inst_35831)){
var statearr_35937_36017 = state_35908__$1;
(statearr_35937_36017[(1)] = (23));

} else {
var statearr_35938_36018 = state_35908__$1;
(statearr_35938_36018[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35909 === (36))){
var state_35908__$1 = state_35908;
var statearr_35939_36019 = state_35908__$1;
(statearr_35939_36019[(2)] = false);

(statearr_35939_36019[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35909 === (41))){
var inst_35883 = (state_35908[(20)]);
var inst_35887 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_35888 = cljs.core.map.call(null,inst_35887,inst_35883);
var inst_35889 = cljs.core.pr_str.call(null,inst_35888);
var inst_35890 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_35889)].join('');
var inst_35891 = figwheel.client.utils.log.call(null,inst_35890);
var state_35908__$1 = state_35908;
var statearr_35940_36020 = state_35908__$1;
(statearr_35940_36020[(2)] = inst_35891);

(statearr_35940_36020[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35909 === (43))){
var inst_35884 = (state_35908[(21)]);
var inst_35894 = (state_35908[(2)]);
var inst_35895 = cljs.core.not_empty.call(null,inst_35884);
var state_35908__$1 = (function (){var statearr_35941 = state_35908;
(statearr_35941[(27)] = inst_35894);

return statearr_35941;
})();
if(cljs.core.truth_(inst_35895)){
var statearr_35942_36021 = state_35908__$1;
(statearr_35942_36021[(1)] = (44));

} else {
var statearr_35943_36022 = state_35908__$1;
(statearr_35943_36022[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35909 === (29))){
var inst_35822 = (state_35908[(19)]);
var inst_35862 = (state_35908[(16)]);
var inst_35826 = (state_35908[(23)]);
var inst_35828 = (state_35908[(26)]);
var inst_35825 = (state_35908[(24)]);
var inst_35830 = (state_35908[(25)]);
var inst_35858 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_35861 = (function (){var all_files = inst_35822;
var res_SINGLEQUOTE_ = inst_35825;
var res = inst_35826;
var files_not_loaded = inst_35828;
var dependencies_that_loaded = inst_35830;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35822,inst_35862,inst_35826,inst_35828,inst_35825,inst_35830,inst_35858,state_val_35909,c__28307__auto__,map__35754,map__35754__$1,opts,before_jsload,on_jsload,reload_dependents,map__35755,map__35755__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35860){
var map__35944 = p__35860;
var map__35944__$1 = ((((!((map__35944 == null)))?((((map__35944.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35944.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35944):map__35944);
var namespace = cljs.core.get.call(null,map__35944__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35822,inst_35862,inst_35826,inst_35828,inst_35825,inst_35830,inst_35858,state_val_35909,c__28307__auto__,map__35754,map__35754__$1,opts,before_jsload,on_jsload,reload_dependents,map__35755,map__35755__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35862__$1 = cljs.core.group_by.call(null,inst_35861,inst_35828);
var inst_35864 = (inst_35862__$1 == null);
var inst_35865 = cljs.core.not.call(null,inst_35864);
var state_35908__$1 = (function (){var statearr_35946 = state_35908;
(statearr_35946[(16)] = inst_35862__$1);

(statearr_35946[(28)] = inst_35858);

return statearr_35946;
})();
if(inst_35865){
var statearr_35947_36023 = state_35908__$1;
(statearr_35947_36023[(1)] = (32));

} else {
var statearr_35948_36024 = state_35908__$1;
(statearr_35948_36024[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35909 === (44))){
var inst_35884 = (state_35908[(21)]);
var inst_35897 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35884);
var inst_35898 = cljs.core.pr_str.call(null,inst_35897);
var inst_35899 = [cljs.core.str("not required: "),cljs.core.str(inst_35898)].join('');
var inst_35900 = figwheel.client.utils.log.call(null,inst_35899);
var state_35908__$1 = state_35908;
var statearr_35949_36025 = state_35908__$1;
(statearr_35949_36025[(2)] = inst_35900);

(statearr_35949_36025[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35909 === (6))){
var inst_35803 = (state_35908[(2)]);
var state_35908__$1 = state_35908;
var statearr_35950_36026 = state_35908__$1;
(statearr_35950_36026[(2)] = inst_35803);

(statearr_35950_36026[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35909 === (28))){
var inst_35828 = (state_35908[(26)]);
var inst_35855 = (state_35908[(2)]);
var inst_35856 = cljs.core.not_empty.call(null,inst_35828);
var state_35908__$1 = (function (){var statearr_35951 = state_35908;
(statearr_35951[(29)] = inst_35855);

return statearr_35951;
})();
if(cljs.core.truth_(inst_35856)){
var statearr_35952_36027 = state_35908__$1;
(statearr_35952_36027[(1)] = (29));

} else {
var statearr_35953_36028 = state_35908__$1;
(statearr_35953_36028[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35909 === (25))){
var inst_35826 = (state_35908[(23)]);
var inst_35842 = (state_35908[(2)]);
var inst_35843 = cljs.core.not_empty.call(null,inst_35826);
var state_35908__$1 = (function (){var statearr_35954 = state_35908;
(statearr_35954[(30)] = inst_35842);

return statearr_35954;
})();
if(cljs.core.truth_(inst_35843)){
var statearr_35955_36029 = state_35908__$1;
(statearr_35955_36029[(1)] = (26));

} else {
var statearr_35956_36030 = state_35908__$1;
(statearr_35956_36030[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35909 === (34))){
var inst_35877 = (state_35908[(2)]);
var state_35908__$1 = state_35908;
if(cljs.core.truth_(inst_35877)){
var statearr_35957_36031 = state_35908__$1;
(statearr_35957_36031[(1)] = (38));

} else {
var statearr_35958_36032 = state_35908__$1;
(statearr_35958_36032[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35909 === (17))){
var state_35908__$1 = state_35908;
var statearr_35959_36033 = state_35908__$1;
(statearr_35959_36033[(2)] = recompile_dependents);

(statearr_35959_36033[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35909 === (3))){
var state_35908__$1 = state_35908;
var statearr_35960_36034 = state_35908__$1;
(statearr_35960_36034[(2)] = null);

(statearr_35960_36034[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35909 === (12))){
var inst_35799 = (state_35908[(2)]);
var state_35908__$1 = state_35908;
var statearr_35961_36035 = state_35908__$1;
(statearr_35961_36035[(2)] = inst_35799);

(statearr_35961_36035[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35909 === (2))){
var inst_35761 = (state_35908[(13)]);
var inst_35768 = cljs.core.seq.call(null,inst_35761);
var inst_35769 = inst_35768;
var inst_35770 = null;
var inst_35771 = (0);
var inst_35772 = (0);
var state_35908__$1 = (function (){var statearr_35962 = state_35908;
(statearr_35962[(7)] = inst_35771);

(statearr_35962[(8)] = inst_35769);

(statearr_35962[(9)] = inst_35772);

(statearr_35962[(10)] = inst_35770);

return statearr_35962;
})();
var statearr_35963_36036 = state_35908__$1;
(statearr_35963_36036[(2)] = null);

(statearr_35963_36036[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35909 === (23))){
var inst_35822 = (state_35908[(19)]);
var inst_35826 = (state_35908[(23)]);
var inst_35828 = (state_35908[(26)]);
var inst_35825 = (state_35908[(24)]);
var inst_35830 = (state_35908[(25)]);
var inst_35833 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_35835 = (function (){var all_files = inst_35822;
var res_SINGLEQUOTE_ = inst_35825;
var res = inst_35826;
var files_not_loaded = inst_35828;
var dependencies_that_loaded = inst_35830;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35822,inst_35826,inst_35828,inst_35825,inst_35830,inst_35833,state_val_35909,c__28307__auto__,map__35754,map__35754__$1,opts,before_jsload,on_jsload,reload_dependents,map__35755,map__35755__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35834){
var map__35964 = p__35834;
var map__35964__$1 = ((((!((map__35964 == null)))?((((map__35964.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35964.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35964):map__35964);
var request_url = cljs.core.get.call(null,map__35964__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35822,inst_35826,inst_35828,inst_35825,inst_35830,inst_35833,state_val_35909,c__28307__auto__,map__35754,map__35754__$1,opts,before_jsload,on_jsload,reload_dependents,map__35755,map__35755__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35836 = cljs.core.reverse.call(null,inst_35830);
var inst_35837 = cljs.core.map.call(null,inst_35835,inst_35836);
var inst_35838 = cljs.core.pr_str.call(null,inst_35837);
var inst_35839 = figwheel.client.utils.log.call(null,inst_35838);
var state_35908__$1 = (function (){var statearr_35966 = state_35908;
(statearr_35966[(31)] = inst_35833);

return statearr_35966;
})();
var statearr_35967_36037 = state_35908__$1;
(statearr_35967_36037[(2)] = inst_35839);

(statearr_35967_36037[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35909 === (35))){
var state_35908__$1 = state_35908;
var statearr_35968_36038 = state_35908__$1;
(statearr_35968_36038[(2)] = true);

(statearr_35968_36038[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35909 === (19))){
var inst_35812 = (state_35908[(12)]);
var inst_35818 = figwheel.client.file_reloading.expand_files.call(null,inst_35812);
var state_35908__$1 = state_35908;
var statearr_35969_36039 = state_35908__$1;
(statearr_35969_36039[(2)] = inst_35818);

(statearr_35969_36039[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35909 === (11))){
var state_35908__$1 = state_35908;
var statearr_35970_36040 = state_35908__$1;
(statearr_35970_36040[(2)] = null);

(statearr_35970_36040[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35909 === (9))){
var inst_35801 = (state_35908[(2)]);
var state_35908__$1 = state_35908;
var statearr_35971_36041 = state_35908__$1;
(statearr_35971_36041[(2)] = inst_35801);

(statearr_35971_36041[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35909 === (5))){
var inst_35771 = (state_35908[(7)]);
var inst_35772 = (state_35908[(9)]);
var inst_35774 = (inst_35772 < inst_35771);
var inst_35775 = inst_35774;
var state_35908__$1 = state_35908;
if(cljs.core.truth_(inst_35775)){
var statearr_35972_36042 = state_35908__$1;
(statearr_35972_36042[(1)] = (7));

} else {
var statearr_35973_36043 = state_35908__$1;
(statearr_35973_36043[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35909 === (14))){
var inst_35782 = (state_35908[(22)]);
var inst_35791 = cljs.core.first.call(null,inst_35782);
var inst_35792 = figwheel.client.file_reloading.eval_body.call(null,inst_35791,opts);
var inst_35793 = cljs.core.next.call(null,inst_35782);
var inst_35769 = inst_35793;
var inst_35770 = null;
var inst_35771 = (0);
var inst_35772 = (0);
var state_35908__$1 = (function (){var statearr_35974 = state_35908;
(statearr_35974[(7)] = inst_35771);

(statearr_35974[(8)] = inst_35769);

(statearr_35974[(9)] = inst_35772);

(statearr_35974[(32)] = inst_35792);

(statearr_35974[(10)] = inst_35770);

return statearr_35974;
})();
var statearr_35975_36044 = state_35908__$1;
(statearr_35975_36044[(2)] = null);

(statearr_35975_36044[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35909 === (45))){
var state_35908__$1 = state_35908;
var statearr_35976_36045 = state_35908__$1;
(statearr_35976_36045[(2)] = null);

(statearr_35976_36045[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35909 === (26))){
var inst_35822 = (state_35908[(19)]);
var inst_35826 = (state_35908[(23)]);
var inst_35828 = (state_35908[(26)]);
var inst_35825 = (state_35908[(24)]);
var inst_35830 = (state_35908[(25)]);
var inst_35845 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_35847 = (function (){var all_files = inst_35822;
var res_SINGLEQUOTE_ = inst_35825;
var res = inst_35826;
var files_not_loaded = inst_35828;
var dependencies_that_loaded = inst_35830;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35822,inst_35826,inst_35828,inst_35825,inst_35830,inst_35845,state_val_35909,c__28307__auto__,map__35754,map__35754__$1,opts,before_jsload,on_jsload,reload_dependents,map__35755,map__35755__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35846){
var map__35977 = p__35846;
var map__35977__$1 = ((((!((map__35977 == null)))?((((map__35977.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35977.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35977):map__35977);
var namespace = cljs.core.get.call(null,map__35977__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__35977__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35822,inst_35826,inst_35828,inst_35825,inst_35830,inst_35845,state_val_35909,c__28307__auto__,map__35754,map__35754__$1,opts,before_jsload,on_jsload,reload_dependents,map__35755,map__35755__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35848 = cljs.core.map.call(null,inst_35847,inst_35826);
var inst_35849 = cljs.core.pr_str.call(null,inst_35848);
var inst_35850 = figwheel.client.utils.log.call(null,inst_35849);
var inst_35851 = (function (){var all_files = inst_35822;
var res_SINGLEQUOTE_ = inst_35825;
var res = inst_35826;
var files_not_loaded = inst_35828;
var dependencies_that_loaded = inst_35830;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35822,inst_35826,inst_35828,inst_35825,inst_35830,inst_35845,inst_35847,inst_35848,inst_35849,inst_35850,state_val_35909,c__28307__auto__,map__35754,map__35754__$1,opts,before_jsload,on_jsload,reload_dependents,map__35755,map__35755__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35822,inst_35826,inst_35828,inst_35825,inst_35830,inst_35845,inst_35847,inst_35848,inst_35849,inst_35850,state_val_35909,c__28307__auto__,map__35754,map__35754__$1,opts,before_jsload,on_jsload,reload_dependents,map__35755,map__35755__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35852 = setTimeout(inst_35851,(10));
var state_35908__$1 = (function (){var statearr_35979 = state_35908;
(statearr_35979[(33)] = inst_35845);

(statearr_35979[(34)] = inst_35850);

return statearr_35979;
})();
var statearr_35980_36046 = state_35908__$1;
(statearr_35980_36046[(2)] = inst_35852);

(statearr_35980_36046[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35909 === (16))){
var state_35908__$1 = state_35908;
var statearr_35981_36047 = state_35908__$1;
(statearr_35981_36047[(2)] = reload_dependents);

(statearr_35981_36047[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35909 === (38))){
var inst_35862 = (state_35908[(16)]);
var inst_35879 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35862);
var state_35908__$1 = state_35908;
var statearr_35982_36048 = state_35908__$1;
(statearr_35982_36048[(2)] = inst_35879);

(statearr_35982_36048[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35909 === (30))){
var state_35908__$1 = state_35908;
var statearr_35983_36049 = state_35908__$1;
(statearr_35983_36049[(2)] = null);

(statearr_35983_36049[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35909 === (10))){
var inst_35782 = (state_35908[(22)]);
var inst_35784 = cljs.core.chunked_seq_QMARK_.call(null,inst_35782);
var state_35908__$1 = state_35908;
if(inst_35784){
var statearr_35984_36050 = state_35908__$1;
(statearr_35984_36050[(1)] = (13));

} else {
var statearr_35985_36051 = state_35908__$1;
(statearr_35985_36051[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35909 === (18))){
var inst_35816 = (state_35908[(2)]);
var state_35908__$1 = state_35908;
if(cljs.core.truth_(inst_35816)){
var statearr_35986_36052 = state_35908__$1;
(statearr_35986_36052[(1)] = (19));

} else {
var statearr_35987_36053 = state_35908__$1;
(statearr_35987_36053[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35909 === (42))){
var state_35908__$1 = state_35908;
var statearr_35988_36054 = state_35908__$1;
(statearr_35988_36054[(2)] = null);

(statearr_35988_36054[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35909 === (37))){
var inst_35874 = (state_35908[(2)]);
var state_35908__$1 = state_35908;
var statearr_35989_36055 = state_35908__$1;
(statearr_35989_36055[(2)] = inst_35874);

(statearr_35989_36055[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35909 === (8))){
var inst_35769 = (state_35908[(8)]);
var inst_35782 = (state_35908[(22)]);
var inst_35782__$1 = cljs.core.seq.call(null,inst_35769);
var state_35908__$1 = (function (){var statearr_35990 = state_35908;
(statearr_35990[(22)] = inst_35782__$1);

return statearr_35990;
})();
if(inst_35782__$1){
var statearr_35991_36056 = state_35908__$1;
(statearr_35991_36056[(1)] = (10));

} else {
var statearr_35992_36057 = state_35908__$1;
(statearr_35992_36057[(1)] = (11));

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
});})(c__28307__auto__,map__35754,map__35754__$1,opts,before_jsload,on_jsload,reload_dependents,map__35755,map__35755__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__28286__auto__,c__28307__auto__,map__35754,map__35754__$1,opts,before_jsload,on_jsload,reload_dependents,map__35755,map__35755__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28287__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28287__auto____0 = (function (){
var statearr_35996 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35996[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28287__auto__);

(statearr_35996[(1)] = (1));

return statearr_35996;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28287__auto____1 = (function (state_35908){
while(true){
var ret_value__28288__auto__ = (function (){try{while(true){
var result__28289__auto__ = switch__28286__auto__.call(null,state_35908);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28289__auto__;
}
break;
}
}catch (e35997){if((e35997 instanceof Object)){
var ex__28290__auto__ = e35997;
var statearr_35998_36058 = state_35908;
(statearr_35998_36058[(5)] = ex__28290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35908);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35997;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36059 = state_35908;
state_35908 = G__36059;
continue;
} else {
return ret_value__28288__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28287__auto__ = function(state_35908){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28287__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28287__auto____1.call(this,state_35908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28287__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28287__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28287__auto__;
})()
;})(switch__28286__auto__,c__28307__auto__,map__35754,map__35754__$1,opts,before_jsload,on_jsload,reload_dependents,map__35755,map__35755__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__28309__auto__ = (function (){var statearr_35999 = f__28308__auto__.call(null);
(statearr_35999[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28307__auto__);

return statearr_35999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28309__auto__);
});})(c__28307__auto__,map__35754,map__35754__$1,opts,before_jsload,on_jsload,reload_dependents,map__35755,map__35755__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28307__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__36062,link){
var map__36065 = p__36062;
var map__36065__$1 = ((((!((map__36065 == null)))?((((map__36065.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36065.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36065):map__36065);
var file = cljs.core.get.call(null,map__36065__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__36065,map__36065__$1,file){
return (function (p1__36060_SHARP_,p2__36061_SHARP_){
if(cljs.core._EQ_.call(null,p1__36060_SHARP_,p2__36061_SHARP_)){
return p1__36060_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__36065,map__36065__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__36071){
var map__36072 = p__36071;
var map__36072__$1 = ((((!((map__36072 == null)))?((((map__36072.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36072.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36072):map__36072);
var match_length = cljs.core.get.call(null,map__36072__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__36072__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__36067_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__36067_SHARP_);
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
var args36074 = [];
var len__26651__auto___36077 = arguments.length;
var i__26652__auto___36078 = (0);
while(true){
if((i__26652__auto___36078 < len__26651__auto___36077)){
args36074.push((arguments[i__26652__auto___36078]));

var G__36079 = (i__26652__auto___36078 + (1));
i__26652__auto___36078 = G__36079;
continue;
} else {
}
break;
}

var G__36076 = args36074.length;
switch (G__36076) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36074.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__36081_SHARP_,p2__36082_SHARP_){
return cljs.core.assoc.call(null,p1__36081_SHARP_,cljs.core.get.call(null,p2__36082_SHARP_,key),p2__36082_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__36083){
var map__36086 = p__36083;
var map__36086__$1 = ((((!((map__36086 == null)))?((((map__36086.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36086.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36086):map__36086);
var f_data = map__36086__$1;
var file = cljs.core.get.call(null,map__36086__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__36088,files_msg){
var map__36095 = p__36088;
var map__36095__$1 = ((((!((map__36095 == null)))?((((map__36095.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36095.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36095):map__36095);
var opts = map__36095__$1;
var on_cssload = cljs.core.get.call(null,map__36095__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__36097_36101 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__36098_36102 = null;
var count__36099_36103 = (0);
var i__36100_36104 = (0);
while(true){
if((i__36100_36104 < count__36099_36103)){
var f_36105 = cljs.core._nth.call(null,chunk__36098_36102,i__36100_36104);
figwheel.client.file_reloading.reload_css_file.call(null,f_36105);

var G__36106 = seq__36097_36101;
var G__36107 = chunk__36098_36102;
var G__36108 = count__36099_36103;
var G__36109 = (i__36100_36104 + (1));
seq__36097_36101 = G__36106;
chunk__36098_36102 = G__36107;
count__36099_36103 = G__36108;
i__36100_36104 = G__36109;
continue;
} else {
var temp__4657__auto___36110 = cljs.core.seq.call(null,seq__36097_36101);
if(temp__4657__auto___36110){
var seq__36097_36111__$1 = temp__4657__auto___36110;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36097_36111__$1)){
var c__26387__auto___36112 = cljs.core.chunk_first.call(null,seq__36097_36111__$1);
var G__36113 = cljs.core.chunk_rest.call(null,seq__36097_36111__$1);
var G__36114 = c__26387__auto___36112;
var G__36115 = cljs.core.count.call(null,c__26387__auto___36112);
var G__36116 = (0);
seq__36097_36101 = G__36113;
chunk__36098_36102 = G__36114;
count__36099_36103 = G__36115;
i__36100_36104 = G__36116;
continue;
} else {
var f_36117 = cljs.core.first.call(null,seq__36097_36111__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_36117);

var G__36118 = cljs.core.next.call(null,seq__36097_36111__$1);
var G__36119 = null;
var G__36120 = (0);
var G__36121 = (0);
seq__36097_36101 = G__36118;
chunk__36098_36102 = G__36119;
count__36099_36103 = G__36120;
i__36100_36104 = G__36121;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__36095,map__36095__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__36095,map__36095__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1480029284630