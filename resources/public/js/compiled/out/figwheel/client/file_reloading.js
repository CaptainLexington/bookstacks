// Compiled by ClojureScript 1.9.293 {}
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
var or__25974__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__25974__auto__){
return or__25974__auto__;
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
var or__25974__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__25974__auto__)){
return or__25974__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__35219_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__35219_SHARP_));
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
var seq__35224 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__35225 = null;
var count__35226 = (0);
var i__35227 = (0);
while(true){
if((i__35227 < count__35226)){
var n = cljs.core._nth.call(null,chunk__35225,i__35227);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__35228 = seq__35224;
var G__35229 = chunk__35225;
var G__35230 = count__35226;
var G__35231 = (i__35227 + (1));
seq__35224 = G__35228;
chunk__35225 = G__35229;
count__35226 = G__35230;
i__35227 = G__35231;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35224);
if(temp__4657__auto__){
var seq__35224__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35224__$1)){
var c__26788__auto__ = cljs.core.chunk_first.call(null,seq__35224__$1);
var G__35232 = cljs.core.chunk_rest.call(null,seq__35224__$1);
var G__35233 = c__26788__auto__;
var G__35234 = cljs.core.count.call(null,c__26788__auto__);
var G__35235 = (0);
seq__35224 = G__35232;
chunk__35225 = G__35233;
count__35226 = G__35234;
i__35227 = G__35235;
continue;
} else {
var n = cljs.core.first.call(null,seq__35224__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__35236 = cljs.core.next.call(null,seq__35224__$1);
var G__35237 = null;
var G__35238 = (0);
var G__35239 = (0);
seq__35224 = G__35236;
chunk__35225 = G__35237;
count__35226 = G__35238;
i__35227 = G__35239;
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

var seq__35290_35301 = cljs.core.seq.call(null,deps);
var chunk__35291_35302 = null;
var count__35292_35303 = (0);
var i__35293_35304 = (0);
while(true){
if((i__35293_35304 < count__35292_35303)){
var dep_35305 = cljs.core._nth.call(null,chunk__35291_35302,i__35293_35304);
topo_sort_helper_STAR_.call(null,dep_35305,(depth + (1)),state);

var G__35306 = seq__35290_35301;
var G__35307 = chunk__35291_35302;
var G__35308 = count__35292_35303;
var G__35309 = (i__35293_35304 + (1));
seq__35290_35301 = G__35306;
chunk__35291_35302 = G__35307;
count__35292_35303 = G__35308;
i__35293_35304 = G__35309;
continue;
} else {
var temp__4657__auto___35310 = cljs.core.seq.call(null,seq__35290_35301);
if(temp__4657__auto___35310){
var seq__35290_35311__$1 = temp__4657__auto___35310;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35290_35311__$1)){
var c__26788__auto___35312 = cljs.core.chunk_first.call(null,seq__35290_35311__$1);
var G__35313 = cljs.core.chunk_rest.call(null,seq__35290_35311__$1);
var G__35314 = c__26788__auto___35312;
var G__35315 = cljs.core.count.call(null,c__26788__auto___35312);
var G__35316 = (0);
seq__35290_35301 = G__35313;
chunk__35291_35302 = G__35314;
count__35292_35303 = G__35315;
i__35293_35304 = G__35316;
continue;
} else {
var dep_35317 = cljs.core.first.call(null,seq__35290_35311__$1);
topo_sort_helper_STAR_.call(null,dep_35317,(depth + (1)),state);

var G__35318 = cljs.core.next.call(null,seq__35290_35311__$1);
var G__35319 = null;
var G__35320 = (0);
var G__35321 = (0);
seq__35290_35301 = G__35318;
chunk__35291_35302 = G__35319;
count__35292_35303 = G__35320;
i__35293_35304 = G__35321;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__35294){
var vec__35298 = p__35294;
var seq__35299 = cljs.core.seq.call(null,vec__35298);
var first__35300 = cljs.core.first.call(null,seq__35299);
var seq__35299__$1 = cljs.core.next.call(null,seq__35299);
var x = first__35300;
var xs = seq__35299__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__35298,seq__35299,first__35300,seq__35299__$1,x,xs,get_deps__$1){
return (function (p1__35240_SHARP_){
return clojure.set.difference.call(null,p1__35240_SHARP_,x);
});})(vec__35298,seq__35299,first__35300,seq__35299__$1,x,xs,get_deps__$1))
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
var seq__35334 = cljs.core.seq.call(null,provides);
var chunk__35335 = null;
var count__35336 = (0);
var i__35337 = (0);
while(true){
if((i__35337 < count__35336)){
var prov = cljs.core._nth.call(null,chunk__35335,i__35337);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35338_35346 = cljs.core.seq.call(null,requires);
var chunk__35339_35347 = null;
var count__35340_35348 = (0);
var i__35341_35349 = (0);
while(true){
if((i__35341_35349 < count__35340_35348)){
var req_35350 = cljs.core._nth.call(null,chunk__35339_35347,i__35341_35349);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35350,prov);

var G__35351 = seq__35338_35346;
var G__35352 = chunk__35339_35347;
var G__35353 = count__35340_35348;
var G__35354 = (i__35341_35349 + (1));
seq__35338_35346 = G__35351;
chunk__35339_35347 = G__35352;
count__35340_35348 = G__35353;
i__35341_35349 = G__35354;
continue;
} else {
var temp__4657__auto___35355 = cljs.core.seq.call(null,seq__35338_35346);
if(temp__4657__auto___35355){
var seq__35338_35356__$1 = temp__4657__auto___35355;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35338_35356__$1)){
var c__26788__auto___35357 = cljs.core.chunk_first.call(null,seq__35338_35356__$1);
var G__35358 = cljs.core.chunk_rest.call(null,seq__35338_35356__$1);
var G__35359 = c__26788__auto___35357;
var G__35360 = cljs.core.count.call(null,c__26788__auto___35357);
var G__35361 = (0);
seq__35338_35346 = G__35358;
chunk__35339_35347 = G__35359;
count__35340_35348 = G__35360;
i__35341_35349 = G__35361;
continue;
} else {
var req_35362 = cljs.core.first.call(null,seq__35338_35356__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35362,prov);

var G__35363 = cljs.core.next.call(null,seq__35338_35356__$1);
var G__35364 = null;
var G__35365 = (0);
var G__35366 = (0);
seq__35338_35346 = G__35363;
chunk__35339_35347 = G__35364;
count__35340_35348 = G__35365;
i__35341_35349 = G__35366;
continue;
}
} else {
}
}
break;
}

var G__35367 = seq__35334;
var G__35368 = chunk__35335;
var G__35369 = count__35336;
var G__35370 = (i__35337 + (1));
seq__35334 = G__35367;
chunk__35335 = G__35368;
count__35336 = G__35369;
i__35337 = G__35370;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35334);
if(temp__4657__auto__){
var seq__35334__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35334__$1)){
var c__26788__auto__ = cljs.core.chunk_first.call(null,seq__35334__$1);
var G__35371 = cljs.core.chunk_rest.call(null,seq__35334__$1);
var G__35372 = c__26788__auto__;
var G__35373 = cljs.core.count.call(null,c__26788__auto__);
var G__35374 = (0);
seq__35334 = G__35371;
chunk__35335 = G__35372;
count__35336 = G__35373;
i__35337 = G__35374;
continue;
} else {
var prov = cljs.core.first.call(null,seq__35334__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35342_35375 = cljs.core.seq.call(null,requires);
var chunk__35343_35376 = null;
var count__35344_35377 = (0);
var i__35345_35378 = (0);
while(true){
if((i__35345_35378 < count__35344_35377)){
var req_35379 = cljs.core._nth.call(null,chunk__35343_35376,i__35345_35378);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35379,prov);

var G__35380 = seq__35342_35375;
var G__35381 = chunk__35343_35376;
var G__35382 = count__35344_35377;
var G__35383 = (i__35345_35378 + (1));
seq__35342_35375 = G__35380;
chunk__35343_35376 = G__35381;
count__35344_35377 = G__35382;
i__35345_35378 = G__35383;
continue;
} else {
var temp__4657__auto___35384__$1 = cljs.core.seq.call(null,seq__35342_35375);
if(temp__4657__auto___35384__$1){
var seq__35342_35385__$1 = temp__4657__auto___35384__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35342_35385__$1)){
var c__26788__auto___35386 = cljs.core.chunk_first.call(null,seq__35342_35385__$1);
var G__35387 = cljs.core.chunk_rest.call(null,seq__35342_35385__$1);
var G__35388 = c__26788__auto___35386;
var G__35389 = cljs.core.count.call(null,c__26788__auto___35386);
var G__35390 = (0);
seq__35342_35375 = G__35387;
chunk__35343_35376 = G__35388;
count__35344_35377 = G__35389;
i__35345_35378 = G__35390;
continue;
} else {
var req_35391 = cljs.core.first.call(null,seq__35342_35385__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35391,prov);

var G__35392 = cljs.core.next.call(null,seq__35342_35385__$1);
var G__35393 = null;
var G__35394 = (0);
var G__35395 = (0);
seq__35342_35375 = G__35392;
chunk__35343_35376 = G__35393;
count__35344_35377 = G__35394;
i__35345_35378 = G__35395;
continue;
}
} else {
}
}
break;
}

var G__35396 = cljs.core.next.call(null,seq__35334__$1);
var G__35397 = null;
var G__35398 = (0);
var G__35399 = (0);
seq__35334 = G__35396;
chunk__35335 = G__35397;
count__35336 = G__35398;
i__35337 = G__35399;
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
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__35404_35408 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__35405_35409 = null;
var count__35406_35410 = (0);
var i__35407_35411 = (0);
while(true){
if((i__35407_35411 < count__35406_35410)){
var ns_35412 = cljs.core._nth.call(null,chunk__35405_35409,i__35407_35411);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35412);

var G__35413 = seq__35404_35408;
var G__35414 = chunk__35405_35409;
var G__35415 = count__35406_35410;
var G__35416 = (i__35407_35411 + (1));
seq__35404_35408 = G__35413;
chunk__35405_35409 = G__35414;
count__35406_35410 = G__35415;
i__35407_35411 = G__35416;
continue;
} else {
var temp__4657__auto___35417 = cljs.core.seq.call(null,seq__35404_35408);
if(temp__4657__auto___35417){
var seq__35404_35418__$1 = temp__4657__auto___35417;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35404_35418__$1)){
var c__26788__auto___35419 = cljs.core.chunk_first.call(null,seq__35404_35418__$1);
var G__35420 = cljs.core.chunk_rest.call(null,seq__35404_35418__$1);
var G__35421 = c__26788__auto___35419;
var G__35422 = cljs.core.count.call(null,c__26788__auto___35419);
var G__35423 = (0);
seq__35404_35408 = G__35420;
chunk__35405_35409 = G__35421;
count__35406_35410 = G__35422;
i__35407_35411 = G__35423;
continue;
} else {
var ns_35424 = cljs.core.first.call(null,seq__35404_35418__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35424);

var G__35425 = cljs.core.next.call(null,seq__35404_35418__$1);
var G__35426 = null;
var G__35427 = (0);
var G__35428 = (0);
seq__35404_35408 = G__35425;
chunk__35405_35409 = G__35426;
count__35406_35410 = G__35427;
i__35407_35411 = G__35428;
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
goog.require_figwheel_backup_ = (function (){var or__25974__auto__ = goog.require__;
if(cljs.core.truth_(or__25974__auto__)){
return or__25974__auto__;
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
var G__35429__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__35429 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35430__i = 0, G__35430__a = new Array(arguments.length -  0);
while (G__35430__i < G__35430__a.length) {G__35430__a[G__35430__i] = arguments[G__35430__i + 0]; ++G__35430__i;}
  args = new cljs.core.IndexedSeq(G__35430__a,0);
} 
return G__35429__delegate.call(this,args);};
G__35429.cljs$lang$maxFixedArity = 0;
G__35429.cljs$lang$applyTo = (function (arglist__35431){
var args = cljs.core.seq(arglist__35431);
return G__35429__delegate(args);
});
G__35429.cljs$core$IFn$_invoke$arity$variadic = G__35429__delegate;
return G__35429;
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
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__35433 = cljs.core._EQ_;
var expr__35434 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__35433.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__35434))){
var path_parts = ((function (pred__35433,expr__35434){
return (function (p1__35432_SHARP_){
return clojure.string.split.call(null,p1__35432_SHARP_,/[\/\\]/);
});})(pred__35433,expr__35434))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__35433,expr__35434){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e35436){if((e35436 instanceof Error)){
var e = e35436;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35436;

}
}})());
});
;})(path_parts,sep,root,pred__35433,expr__35434))
} else {
if(cljs.core.truth_(pred__35433.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__35434))){
return ((function (pred__35433,expr__35434){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__35433,expr__35434){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__35433,expr__35434))
);

return deferred.addErrback(((function (deferred,pred__35433,expr__35434){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__35433,expr__35434))
);
});
;})(pred__35433,expr__35434))
} else {
return ((function (pred__35433,expr__35434){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__35433,expr__35434))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__35437,callback){
var map__35440 = p__35437;
var map__35440__$1 = ((((!((map__35440 == null)))?((((map__35440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35440.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35440):map__35440);
var file_msg = map__35440__$1;
var request_url = cljs.core.get.call(null,map__35440__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__35440,map__35440__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__35440,map__35440__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__28434__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28434__auto__){
return (function (){
var f__28435__auto__ = (function (){var switch__28412__auto__ = ((function (c__28434__auto__){
return (function (state_35464){
var state_val_35465 = (state_35464[(1)]);
if((state_val_35465 === (7))){
var inst_35460 = (state_35464[(2)]);
var state_35464__$1 = state_35464;
var statearr_35466_35486 = state_35464__$1;
(statearr_35466_35486[(2)] = inst_35460);

(statearr_35466_35486[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35465 === (1))){
var state_35464__$1 = state_35464;
var statearr_35467_35487 = state_35464__$1;
(statearr_35467_35487[(2)] = null);

(statearr_35467_35487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35465 === (4))){
var inst_35444 = (state_35464[(7)]);
var inst_35444__$1 = (state_35464[(2)]);
var state_35464__$1 = (function (){var statearr_35468 = state_35464;
(statearr_35468[(7)] = inst_35444__$1);

return statearr_35468;
})();
if(cljs.core.truth_(inst_35444__$1)){
var statearr_35469_35488 = state_35464__$1;
(statearr_35469_35488[(1)] = (5));

} else {
var statearr_35470_35489 = state_35464__$1;
(statearr_35470_35489[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35465 === (6))){
var state_35464__$1 = state_35464;
var statearr_35471_35490 = state_35464__$1;
(statearr_35471_35490[(2)] = null);

(statearr_35471_35490[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35465 === (3))){
var inst_35462 = (state_35464[(2)]);
var state_35464__$1 = state_35464;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35464__$1,inst_35462);
} else {
if((state_val_35465 === (2))){
var state_35464__$1 = state_35464;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35464__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_35465 === (11))){
var inst_35456 = (state_35464[(2)]);
var state_35464__$1 = (function (){var statearr_35472 = state_35464;
(statearr_35472[(8)] = inst_35456);

return statearr_35472;
})();
var statearr_35473_35491 = state_35464__$1;
(statearr_35473_35491[(2)] = null);

(statearr_35473_35491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35465 === (9))){
var inst_35450 = (state_35464[(9)]);
var inst_35448 = (state_35464[(10)]);
var inst_35452 = inst_35450.call(null,inst_35448);
var state_35464__$1 = state_35464;
var statearr_35474_35492 = state_35464__$1;
(statearr_35474_35492[(2)] = inst_35452);

(statearr_35474_35492[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35465 === (5))){
var inst_35444 = (state_35464[(7)]);
var inst_35446 = figwheel.client.file_reloading.blocking_load.call(null,inst_35444);
var state_35464__$1 = state_35464;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35464__$1,(8),inst_35446);
} else {
if((state_val_35465 === (10))){
var inst_35448 = (state_35464[(10)]);
var inst_35454 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_35448);
var state_35464__$1 = state_35464;
var statearr_35475_35493 = state_35464__$1;
(statearr_35475_35493[(2)] = inst_35454);

(statearr_35475_35493[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35465 === (8))){
var inst_35450 = (state_35464[(9)]);
var inst_35444 = (state_35464[(7)]);
var inst_35448 = (state_35464[(2)]);
var inst_35449 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_35450__$1 = cljs.core.get.call(null,inst_35449,inst_35444);
var state_35464__$1 = (function (){var statearr_35476 = state_35464;
(statearr_35476[(9)] = inst_35450__$1);

(statearr_35476[(10)] = inst_35448);

return statearr_35476;
})();
if(cljs.core.truth_(inst_35450__$1)){
var statearr_35477_35494 = state_35464__$1;
(statearr_35477_35494[(1)] = (9));

} else {
var statearr_35478_35495 = state_35464__$1;
(statearr_35478_35495[(1)] = (10));

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
});})(c__28434__auto__))
;
return ((function (switch__28412__auto__,c__28434__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__28413__auto__ = null;
var figwheel$client$file_reloading$state_machine__28413__auto____0 = (function (){
var statearr_35482 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35482[(0)] = figwheel$client$file_reloading$state_machine__28413__auto__);

(statearr_35482[(1)] = (1));

return statearr_35482;
});
var figwheel$client$file_reloading$state_machine__28413__auto____1 = (function (state_35464){
while(true){
var ret_value__28414__auto__ = (function (){try{while(true){
var result__28415__auto__ = switch__28412__auto__.call(null,state_35464);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28415__auto__;
}
break;
}
}catch (e35483){if((e35483 instanceof Object)){
var ex__28416__auto__ = e35483;
var statearr_35484_35496 = state_35464;
(statearr_35484_35496[(5)] = ex__28416__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35464);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35483;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35497 = state_35464;
state_35464 = G__35497;
continue;
} else {
return ret_value__28414__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__28413__auto__ = function(state_35464){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__28413__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__28413__auto____1.call(this,state_35464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__28413__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__28413__auto____0;
figwheel$client$file_reloading$state_machine__28413__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__28413__auto____1;
return figwheel$client$file_reloading$state_machine__28413__auto__;
})()
;})(switch__28412__auto__,c__28434__auto__))
})();
var state__28436__auto__ = (function (){var statearr_35485 = f__28435__auto__.call(null);
(statearr_35485[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28434__auto__);

return statearr_35485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28436__auto__);
});})(c__28434__auto__))
);

return c__28434__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__35498,callback){
var map__35501 = p__35498;
var map__35501__$1 = ((((!((map__35501 == null)))?((((map__35501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35501.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35501):map__35501);
var file_msg = map__35501__$1;
var namespace = cljs.core.get.call(null,map__35501__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__35501,map__35501__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__35501,map__35501__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__35503){
var map__35506 = p__35503;
var map__35506__$1 = ((((!((map__35506 == null)))?((((map__35506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35506.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35506):map__35506);
var file_msg = map__35506__$1;
var namespace = cljs.core.get.call(null,map__35506__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__25962__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__25962__auto__){
var or__25974__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25974__auto__)){
return or__25974__auto__;
} else {
var or__25974__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25974__auto____$1)){
return or__25974__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__25962__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__35508,callback){
var map__35511 = p__35508;
var map__35511__$1 = ((((!((map__35511 == null)))?((((map__35511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35511.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35511):map__35511);
var file_msg = map__35511__$1;
var request_url = cljs.core.get.call(null,map__35511__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__35511__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__28434__auto___35615 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28434__auto___35615,out){
return (function (){
var f__28435__auto__ = (function (){var switch__28412__auto__ = ((function (c__28434__auto___35615,out){
return (function (state_35597){
var state_val_35598 = (state_35597[(1)]);
if((state_val_35598 === (1))){
var inst_35571 = cljs.core.seq.call(null,files);
var inst_35572 = cljs.core.first.call(null,inst_35571);
var inst_35573 = cljs.core.next.call(null,inst_35571);
var inst_35574 = files;
var state_35597__$1 = (function (){var statearr_35599 = state_35597;
(statearr_35599[(7)] = inst_35574);

(statearr_35599[(8)] = inst_35573);

(statearr_35599[(9)] = inst_35572);

return statearr_35599;
})();
var statearr_35600_35616 = state_35597__$1;
(statearr_35600_35616[(2)] = null);

(statearr_35600_35616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35598 === (2))){
var inst_35580 = (state_35597[(10)]);
var inst_35574 = (state_35597[(7)]);
var inst_35579 = cljs.core.seq.call(null,inst_35574);
var inst_35580__$1 = cljs.core.first.call(null,inst_35579);
var inst_35581 = cljs.core.next.call(null,inst_35579);
var inst_35582 = (inst_35580__$1 == null);
var inst_35583 = cljs.core.not.call(null,inst_35582);
var state_35597__$1 = (function (){var statearr_35601 = state_35597;
(statearr_35601[(10)] = inst_35580__$1);

(statearr_35601[(11)] = inst_35581);

return statearr_35601;
})();
if(inst_35583){
var statearr_35602_35617 = state_35597__$1;
(statearr_35602_35617[(1)] = (4));

} else {
var statearr_35603_35618 = state_35597__$1;
(statearr_35603_35618[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35598 === (3))){
var inst_35595 = (state_35597[(2)]);
var state_35597__$1 = state_35597;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35597__$1,inst_35595);
} else {
if((state_val_35598 === (4))){
var inst_35580 = (state_35597[(10)]);
var inst_35585 = figwheel.client.file_reloading.reload_js_file.call(null,inst_35580);
var state_35597__$1 = state_35597;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35597__$1,(7),inst_35585);
} else {
if((state_val_35598 === (5))){
var inst_35591 = cljs.core.async.close_BANG_.call(null,out);
var state_35597__$1 = state_35597;
var statearr_35604_35619 = state_35597__$1;
(statearr_35604_35619[(2)] = inst_35591);

(statearr_35604_35619[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35598 === (6))){
var inst_35593 = (state_35597[(2)]);
var state_35597__$1 = state_35597;
var statearr_35605_35620 = state_35597__$1;
(statearr_35605_35620[(2)] = inst_35593);

(statearr_35605_35620[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35598 === (7))){
var inst_35581 = (state_35597[(11)]);
var inst_35587 = (state_35597[(2)]);
var inst_35588 = cljs.core.async.put_BANG_.call(null,out,inst_35587);
var inst_35574 = inst_35581;
var state_35597__$1 = (function (){var statearr_35606 = state_35597;
(statearr_35606[(7)] = inst_35574);

(statearr_35606[(12)] = inst_35588);

return statearr_35606;
})();
var statearr_35607_35621 = state_35597__$1;
(statearr_35607_35621[(2)] = null);

(statearr_35607_35621[(1)] = (2));


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
});})(c__28434__auto___35615,out))
;
return ((function (switch__28412__auto__,c__28434__auto___35615,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28413__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28413__auto____0 = (function (){
var statearr_35611 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35611[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28413__auto__);

(statearr_35611[(1)] = (1));

return statearr_35611;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28413__auto____1 = (function (state_35597){
while(true){
var ret_value__28414__auto__ = (function (){try{while(true){
var result__28415__auto__ = switch__28412__auto__.call(null,state_35597);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28415__auto__;
}
break;
}
}catch (e35612){if((e35612 instanceof Object)){
var ex__28416__auto__ = e35612;
var statearr_35613_35622 = state_35597;
(statearr_35613_35622[(5)] = ex__28416__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35597);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35612;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35623 = state_35597;
state_35597 = G__35623;
continue;
} else {
return ret_value__28414__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28413__auto__ = function(state_35597){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28413__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28413__auto____1.call(this,state_35597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28413__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28413__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28413__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28413__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28413__auto__;
})()
;})(switch__28412__auto__,c__28434__auto___35615,out))
})();
var state__28436__auto__ = (function (){var statearr_35614 = f__28435__auto__.call(null);
(statearr_35614[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28434__auto___35615);

return statearr_35614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28436__auto__);
});})(c__28434__auto___35615,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__35624,opts){
var map__35628 = p__35624;
var map__35628__$1 = ((((!((map__35628 == null)))?((((map__35628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35628.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35628):map__35628);
var eval_body = cljs.core.get.call(null,map__35628__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__35628__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__25962__auto__ = eval_body;
if(cljs.core.truth_(and__25962__auto__)){
return typeof eval_body === 'string';
} else {
return and__25962__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e35630){var e = e35630;
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
return (function (p1__35631_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35631_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__35640){
var vec__35641 = p__35640;
var k = cljs.core.nth.call(null,vec__35641,(0),null);
var v = cljs.core.nth.call(null,vec__35641,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__35644){
var vec__35645 = p__35644;
var k = cljs.core.nth.call(null,vec__35645,(0),null);
var v = cljs.core.nth.call(null,vec__35645,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__35651,p__35652){
var map__35900 = p__35651;
var map__35900__$1 = ((((!((map__35900 == null)))?((((map__35900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35900.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35900):map__35900);
var opts = map__35900__$1;
var before_jsload = cljs.core.get.call(null,map__35900__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__35900__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__35900__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__35901 = p__35652;
var map__35901__$1 = ((((!((map__35901 == null)))?((((map__35901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35901.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35901):map__35901);
var msg = map__35901__$1;
var files = cljs.core.get.call(null,map__35901__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__35901__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__35901__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28434__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28434__auto__,map__35900,map__35900__$1,opts,before_jsload,on_jsload,reload_dependents,map__35901,map__35901__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__28435__auto__ = (function (){var switch__28412__auto__ = ((function (c__28434__auto__,map__35900,map__35900__$1,opts,before_jsload,on_jsload,reload_dependents,map__35901,map__35901__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_36055){
var state_val_36056 = (state_36055[(1)]);
if((state_val_36056 === (7))){
var inst_35917 = (state_36055[(7)]);
var inst_35916 = (state_36055[(8)]);
var inst_35918 = (state_36055[(9)]);
var inst_35915 = (state_36055[(10)]);
var inst_35923 = cljs.core._nth.call(null,inst_35916,inst_35918);
var inst_35924 = figwheel.client.file_reloading.eval_body.call(null,inst_35923,opts);
var inst_35925 = (inst_35918 + (1));
var tmp36057 = inst_35917;
var tmp36058 = inst_35916;
var tmp36059 = inst_35915;
var inst_35915__$1 = tmp36059;
var inst_35916__$1 = tmp36058;
var inst_35917__$1 = tmp36057;
var inst_35918__$1 = inst_35925;
var state_36055__$1 = (function (){var statearr_36060 = state_36055;
(statearr_36060[(7)] = inst_35917__$1);

(statearr_36060[(8)] = inst_35916__$1);

(statearr_36060[(9)] = inst_35918__$1);

(statearr_36060[(11)] = inst_35924);

(statearr_36060[(10)] = inst_35915__$1);

return statearr_36060;
})();
var statearr_36061_36147 = state_36055__$1;
(statearr_36061_36147[(2)] = null);

(statearr_36061_36147[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36056 === (20))){
var inst_35958 = (state_36055[(12)]);
var inst_35966 = figwheel.client.file_reloading.sort_files.call(null,inst_35958);
var state_36055__$1 = state_36055;
var statearr_36062_36148 = state_36055__$1;
(statearr_36062_36148[(2)] = inst_35966);

(statearr_36062_36148[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36056 === (27))){
var state_36055__$1 = state_36055;
var statearr_36063_36149 = state_36055__$1;
(statearr_36063_36149[(2)] = null);

(statearr_36063_36149[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36056 === (1))){
var inst_35907 = (state_36055[(13)]);
var inst_35904 = before_jsload.call(null,files);
var inst_35905 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_35906 = (function (){return ((function (inst_35907,inst_35904,inst_35905,state_val_36056,c__28434__auto__,map__35900,map__35900__$1,opts,before_jsload,on_jsload,reload_dependents,map__35901,map__35901__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35648_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35648_SHARP_);
});
;})(inst_35907,inst_35904,inst_35905,state_val_36056,c__28434__auto__,map__35900,map__35900__$1,opts,before_jsload,on_jsload,reload_dependents,map__35901,map__35901__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35907__$1 = cljs.core.filter.call(null,inst_35906,files);
var inst_35908 = cljs.core.not_empty.call(null,inst_35907__$1);
var state_36055__$1 = (function (){var statearr_36064 = state_36055;
(statearr_36064[(13)] = inst_35907__$1);

(statearr_36064[(14)] = inst_35905);

(statearr_36064[(15)] = inst_35904);

return statearr_36064;
})();
if(cljs.core.truth_(inst_35908)){
var statearr_36065_36150 = state_36055__$1;
(statearr_36065_36150[(1)] = (2));

} else {
var statearr_36066_36151 = state_36055__$1;
(statearr_36066_36151[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36056 === (24))){
var state_36055__$1 = state_36055;
var statearr_36067_36152 = state_36055__$1;
(statearr_36067_36152[(2)] = null);

(statearr_36067_36152[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36056 === (39))){
var inst_36008 = (state_36055[(16)]);
var state_36055__$1 = state_36055;
var statearr_36068_36153 = state_36055__$1;
(statearr_36068_36153[(2)] = inst_36008);

(statearr_36068_36153[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36056 === (46))){
var inst_36050 = (state_36055[(2)]);
var state_36055__$1 = state_36055;
var statearr_36069_36154 = state_36055__$1;
(statearr_36069_36154[(2)] = inst_36050);

(statearr_36069_36154[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36056 === (4))){
var inst_35952 = (state_36055[(2)]);
var inst_35953 = cljs.core.List.EMPTY;
var inst_35954 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_35953);
var inst_35955 = (function (){return ((function (inst_35952,inst_35953,inst_35954,state_val_36056,c__28434__auto__,map__35900,map__35900__$1,opts,before_jsload,on_jsload,reload_dependents,map__35901,map__35901__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35649_SHARP_){
var and__25962__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35649_SHARP_);
if(cljs.core.truth_(and__25962__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35649_SHARP_));
} else {
return and__25962__auto__;
}
});
;})(inst_35952,inst_35953,inst_35954,state_val_36056,c__28434__auto__,map__35900,map__35900__$1,opts,before_jsload,on_jsload,reload_dependents,map__35901,map__35901__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35956 = cljs.core.filter.call(null,inst_35955,files);
var inst_35957 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_35958 = cljs.core.concat.call(null,inst_35956,inst_35957);
var state_36055__$1 = (function (){var statearr_36070 = state_36055;
(statearr_36070[(17)] = inst_35952);

(statearr_36070[(18)] = inst_35954);

(statearr_36070[(12)] = inst_35958);

return statearr_36070;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_36071_36155 = state_36055__$1;
(statearr_36071_36155[(1)] = (16));

} else {
var statearr_36072_36156 = state_36055__$1;
(statearr_36072_36156[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36056 === (15))){
var inst_35942 = (state_36055[(2)]);
var state_36055__$1 = state_36055;
var statearr_36073_36157 = state_36055__$1;
(statearr_36073_36157[(2)] = inst_35942);

(statearr_36073_36157[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36056 === (21))){
var inst_35968 = (state_36055[(19)]);
var inst_35968__$1 = (state_36055[(2)]);
var inst_35969 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_35968__$1);
var state_36055__$1 = (function (){var statearr_36074 = state_36055;
(statearr_36074[(19)] = inst_35968__$1);

return statearr_36074;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36055__$1,(22),inst_35969);
} else {
if((state_val_36056 === (31))){
var inst_36053 = (state_36055[(2)]);
var state_36055__$1 = state_36055;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36055__$1,inst_36053);
} else {
if((state_val_36056 === (32))){
var inst_36008 = (state_36055[(16)]);
var inst_36013 = inst_36008.cljs$lang$protocol_mask$partition0$;
var inst_36014 = (inst_36013 & (64));
var inst_36015 = inst_36008.cljs$core$ISeq$;
var inst_36016 = (cljs.core.PROTOCOL_SENTINEL === inst_36015);
var inst_36017 = (inst_36014) || (inst_36016);
var state_36055__$1 = state_36055;
if(cljs.core.truth_(inst_36017)){
var statearr_36075_36158 = state_36055__$1;
(statearr_36075_36158[(1)] = (35));

} else {
var statearr_36076_36159 = state_36055__$1;
(statearr_36076_36159[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36056 === (40))){
var inst_36030 = (state_36055[(20)]);
var inst_36029 = (state_36055[(2)]);
var inst_36030__$1 = cljs.core.get.call(null,inst_36029,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_36031 = cljs.core.get.call(null,inst_36029,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_36032 = cljs.core.not_empty.call(null,inst_36030__$1);
var state_36055__$1 = (function (){var statearr_36077 = state_36055;
(statearr_36077[(21)] = inst_36031);

(statearr_36077[(20)] = inst_36030__$1);

return statearr_36077;
})();
if(cljs.core.truth_(inst_36032)){
var statearr_36078_36160 = state_36055__$1;
(statearr_36078_36160[(1)] = (41));

} else {
var statearr_36079_36161 = state_36055__$1;
(statearr_36079_36161[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36056 === (33))){
var state_36055__$1 = state_36055;
var statearr_36080_36162 = state_36055__$1;
(statearr_36080_36162[(2)] = false);

(statearr_36080_36162[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36056 === (13))){
var inst_35928 = (state_36055[(22)]);
var inst_35932 = cljs.core.chunk_first.call(null,inst_35928);
var inst_35933 = cljs.core.chunk_rest.call(null,inst_35928);
var inst_35934 = cljs.core.count.call(null,inst_35932);
var inst_35915 = inst_35933;
var inst_35916 = inst_35932;
var inst_35917 = inst_35934;
var inst_35918 = (0);
var state_36055__$1 = (function (){var statearr_36081 = state_36055;
(statearr_36081[(7)] = inst_35917);

(statearr_36081[(8)] = inst_35916);

(statearr_36081[(9)] = inst_35918);

(statearr_36081[(10)] = inst_35915);

return statearr_36081;
})();
var statearr_36082_36163 = state_36055__$1;
(statearr_36082_36163[(2)] = null);

(statearr_36082_36163[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36056 === (22))){
var inst_35976 = (state_36055[(23)]);
var inst_35972 = (state_36055[(24)]);
var inst_35968 = (state_36055[(19)]);
var inst_35971 = (state_36055[(25)]);
var inst_35971__$1 = (state_36055[(2)]);
var inst_35972__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35971__$1);
var inst_35973 = (function (){var all_files = inst_35968;
var res_SINGLEQUOTE_ = inst_35971__$1;
var res = inst_35972__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_35976,inst_35972,inst_35968,inst_35971,inst_35971__$1,inst_35972__$1,state_val_36056,c__28434__auto__,map__35900,map__35900__$1,opts,before_jsload,on_jsload,reload_dependents,map__35901,map__35901__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35650_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__35650_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_35976,inst_35972,inst_35968,inst_35971,inst_35971__$1,inst_35972__$1,state_val_36056,c__28434__auto__,map__35900,map__35900__$1,opts,before_jsload,on_jsload,reload_dependents,map__35901,map__35901__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35974 = cljs.core.filter.call(null,inst_35973,inst_35971__$1);
var inst_35975 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_35976__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35975);
var inst_35977 = cljs.core.not_empty.call(null,inst_35976__$1);
var state_36055__$1 = (function (){var statearr_36083 = state_36055;
(statearr_36083[(23)] = inst_35976__$1);

(statearr_36083[(24)] = inst_35972__$1);

(statearr_36083[(26)] = inst_35974);

(statearr_36083[(25)] = inst_35971__$1);

return statearr_36083;
})();
if(cljs.core.truth_(inst_35977)){
var statearr_36084_36164 = state_36055__$1;
(statearr_36084_36164[(1)] = (23));

} else {
var statearr_36085_36165 = state_36055__$1;
(statearr_36085_36165[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36056 === (36))){
var state_36055__$1 = state_36055;
var statearr_36086_36166 = state_36055__$1;
(statearr_36086_36166[(2)] = false);

(statearr_36086_36166[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36056 === (41))){
var inst_36030 = (state_36055[(20)]);
var inst_36034 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_36035 = cljs.core.map.call(null,inst_36034,inst_36030);
var inst_36036 = cljs.core.pr_str.call(null,inst_36035);
var inst_36037 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_36036)].join('');
var inst_36038 = figwheel.client.utils.log.call(null,inst_36037);
var state_36055__$1 = state_36055;
var statearr_36087_36167 = state_36055__$1;
(statearr_36087_36167[(2)] = inst_36038);

(statearr_36087_36167[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36056 === (43))){
var inst_36031 = (state_36055[(21)]);
var inst_36041 = (state_36055[(2)]);
var inst_36042 = cljs.core.not_empty.call(null,inst_36031);
var state_36055__$1 = (function (){var statearr_36088 = state_36055;
(statearr_36088[(27)] = inst_36041);

return statearr_36088;
})();
if(cljs.core.truth_(inst_36042)){
var statearr_36089_36168 = state_36055__$1;
(statearr_36089_36168[(1)] = (44));

} else {
var statearr_36090_36169 = state_36055__$1;
(statearr_36090_36169[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36056 === (29))){
var inst_35976 = (state_36055[(23)]);
var inst_35972 = (state_36055[(24)]);
var inst_36008 = (state_36055[(16)]);
var inst_35974 = (state_36055[(26)]);
var inst_35968 = (state_36055[(19)]);
var inst_35971 = (state_36055[(25)]);
var inst_36004 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_36007 = (function (){var all_files = inst_35968;
var res_SINGLEQUOTE_ = inst_35971;
var res = inst_35972;
var files_not_loaded = inst_35974;
var dependencies_that_loaded = inst_35976;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35976,inst_35972,inst_36008,inst_35974,inst_35968,inst_35971,inst_36004,state_val_36056,c__28434__auto__,map__35900,map__35900__$1,opts,before_jsload,on_jsload,reload_dependents,map__35901,map__35901__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36006){
var map__36091 = p__36006;
var map__36091__$1 = ((((!((map__36091 == null)))?((((map__36091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36091.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36091):map__36091);
var namespace = cljs.core.get.call(null,map__36091__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35976,inst_35972,inst_36008,inst_35974,inst_35968,inst_35971,inst_36004,state_val_36056,c__28434__auto__,map__35900,map__35900__$1,opts,before_jsload,on_jsload,reload_dependents,map__35901,map__35901__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36008__$1 = cljs.core.group_by.call(null,inst_36007,inst_35974);
var inst_36010 = (inst_36008__$1 == null);
var inst_36011 = cljs.core.not.call(null,inst_36010);
var state_36055__$1 = (function (){var statearr_36093 = state_36055;
(statearr_36093[(28)] = inst_36004);

(statearr_36093[(16)] = inst_36008__$1);

return statearr_36093;
})();
if(inst_36011){
var statearr_36094_36170 = state_36055__$1;
(statearr_36094_36170[(1)] = (32));

} else {
var statearr_36095_36171 = state_36055__$1;
(statearr_36095_36171[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36056 === (44))){
var inst_36031 = (state_36055[(21)]);
var inst_36044 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36031);
var inst_36045 = cljs.core.pr_str.call(null,inst_36044);
var inst_36046 = [cljs.core.str("not required: "),cljs.core.str(inst_36045)].join('');
var inst_36047 = figwheel.client.utils.log.call(null,inst_36046);
var state_36055__$1 = state_36055;
var statearr_36096_36172 = state_36055__$1;
(statearr_36096_36172[(2)] = inst_36047);

(statearr_36096_36172[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36056 === (6))){
var inst_35949 = (state_36055[(2)]);
var state_36055__$1 = state_36055;
var statearr_36097_36173 = state_36055__$1;
(statearr_36097_36173[(2)] = inst_35949);

(statearr_36097_36173[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36056 === (28))){
var inst_35974 = (state_36055[(26)]);
var inst_36001 = (state_36055[(2)]);
var inst_36002 = cljs.core.not_empty.call(null,inst_35974);
var state_36055__$1 = (function (){var statearr_36098 = state_36055;
(statearr_36098[(29)] = inst_36001);

return statearr_36098;
})();
if(cljs.core.truth_(inst_36002)){
var statearr_36099_36174 = state_36055__$1;
(statearr_36099_36174[(1)] = (29));

} else {
var statearr_36100_36175 = state_36055__$1;
(statearr_36100_36175[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36056 === (25))){
var inst_35972 = (state_36055[(24)]);
var inst_35988 = (state_36055[(2)]);
var inst_35989 = cljs.core.not_empty.call(null,inst_35972);
var state_36055__$1 = (function (){var statearr_36101 = state_36055;
(statearr_36101[(30)] = inst_35988);

return statearr_36101;
})();
if(cljs.core.truth_(inst_35989)){
var statearr_36102_36176 = state_36055__$1;
(statearr_36102_36176[(1)] = (26));

} else {
var statearr_36103_36177 = state_36055__$1;
(statearr_36103_36177[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36056 === (34))){
var inst_36024 = (state_36055[(2)]);
var state_36055__$1 = state_36055;
if(cljs.core.truth_(inst_36024)){
var statearr_36104_36178 = state_36055__$1;
(statearr_36104_36178[(1)] = (38));

} else {
var statearr_36105_36179 = state_36055__$1;
(statearr_36105_36179[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36056 === (17))){
var state_36055__$1 = state_36055;
var statearr_36106_36180 = state_36055__$1;
(statearr_36106_36180[(2)] = recompile_dependents);

(statearr_36106_36180[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36056 === (3))){
var state_36055__$1 = state_36055;
var statearr_36107_36181 = state_36055__$1;
(statearr_36107_36181[(2)] = null);

(statearr_36107_36181[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36056 === (12))){
var inst_35945 = (state_36055[(2)]);
var state_36055__$1 = state_36055;
var statearr_36108_36182 = state_36055__$1;
(statearr_36108_36182[(2)] = inst_35945);

(statearr_36108_36182[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36056 === (2))){
var inst_35907 = (state_36055[(13)]);
var inst_35914 = cljs.core.seq.call(null,inst_35907);
var inst_35915 = inst_35914;
var inst_35916 = null;
var inst_35917 = (0);
var inst_35918 = (0);
var state_36055__$1 = (function (){var statearr_36109 = state_36055;
(statearr_36109[(7)] = inst_35917);

(statearr_36109[(8)] = inst_35916);

(statearr_36109[(9)] = inst_35918);

(statearr_36109[(10)] = inst_35915);

return statearr_36109;
})();
var statearr_36110_36183 = state_36055__$1;
(statearr_36110_36183[(2)] = null);

(statearr_36110_36183[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36056 === (23))){
var inst_35976 = (state_36055[(23)]);
var inst_35972 = (state_36055[(24)]);
var inst_35974 = (state_36055[(26)]);
var inst_35968 = (state_36055[(19)]);
var inst_35971 = (state_36055[(25)]);
var inst_35979 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_35981 = (function (){var all_files = inst_35968;
var res_SINGLEQUOTE_ = inst_35971;
var res = inst_35972;
var files_not_loaded = inst_35974;
var dependencies_that_loaded = inst_35976;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35976,inst_35972,inst_35974,inst_35968,inst_35971,inst_35979,state_val_36056,c__28434__auto__,map__35900,map__35900__$1,opts,before_jsload,on_jsload,reload_dependents,map__35901,map__35901__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35980){
var map__36111 = p__35980;
var map__36111__$1 = ((((!((map__36111 == null)))?((((map__36111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36111.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36111):map__36111);
var request_url = cljs.core.get.call(null,map__36111__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35976,inst_35972,inst_35974,inst_35968,inst_35971,inst_35979,state_val_36056,c__28434__auto__,map__35900,map__35900__$1,opts,before_jsload,on_jsload,reload_dependents,map__35901,map__35901__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35982 = cljs.core.reverse.call(null,inst_35976);
var inst_35983 = cljs.core.map.call(null,inst_35981,inst_35982);
var inst_35984 = cljs.core.pr_str.call(null,inst_35983);
var inst_35985 = figwheel.client.utils.log.call(null,inst_35984);
var state_36055__$1 = (function (){var statearr_36113 = state_36055;
(statearr_36113[(31)] = inst_35979);

return statearr_36113;
})();
var statearr_36114_36184 = state_36055__$1;
(statearr_36114_36184[(2)] = inst_35985);

(statearr_36114_36184[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36056 === (35))){
var state_36055__$1 = state_36055;
var statearr_36115_36185 = state_36055__$1;
(statearr_36115_36185[(2)] = true);

(statearr_36115_36185[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36056 === (19))){
var inst_35958 = (state_36055[(12)]);
var inst_35964 = figwheel.client.file_reloading.expand_files.call(null,inst_35958);
var state_36055__$1 = state_36055;
var statearr_36116_36186 = state_36055__$1;
(statearr_36116_36186[(2)] = inst_35964);

(statearr_36116_36186[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36056 === (11))){
var state_36055__$1 = state_36055;
var statearr_36117_36187 = state_36055__$1;
(statearr_36117_36187[(2)] = null);

(statearr_36117_36187[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36056 === (9))){
var inst_35947 = (state_36055[(2)]);
var state_36055__$1 = state_36055;
var statearr_36118_36188 = state_36055__$1;
(statearr_36118_36188[(2)] = inst_35947);

(statearr_36118_36188[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36056 === (5))){
var inst_35917 = (state_36055[(7)]);
var inst_35918 = (state_36055[(9)]);
var inst_35920 = (inst_35918 < inst_35917);
var inst_35921 = inst_35920;
var state_36055__$1 = state_36055;
if(cljs.core.truth_(inst_35921)){
var statearr_36119_36189 = state_36055__$1;
(statearr_36119_36189[(1)] = (7));

} else {
var statearr_36120_36190 = state_36055__$1;
(statearr_36120_36190[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36056 === (14))){
var inst_35928 = (state_36055[(22)]);
var inst_35937 = cljs.core.first.call(null,inst_35928);
var inst_35938 = figwheel.client.file_reloading.eval_body.call(null,inst_35937,opts);
var inst_35939 = cljs.core.next.call(null,inst_35928);
var inst_35915 = inst_35939;
var inst_35916 = null;
var inst_35917 = (0);
var inst_35918 = (0);
var state_36055__$1 = (function (){var statearr_36121 = state_36055;
(statearr_36121[(7)] = inst_35917);

(statearr_36121[(8)] = inst_35916);

(statearr_36121[(32)] = inst_35938);

(statearr_36121[(9)] = inst_35918);

(statearr_36121[(10)] = inst_35915);

return statearr_36121;
})();
var statearr_36122_36191 = state_36055__$1;
(statearr_36122_36191[(2)] = null);

(statearr_36122_36191[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36056 === (45))){
var state_36055__$1 = state_36055;
var statearr_36123_36192 = state_36055__$1;
(statearr_36123_36192[(2)] = null);

(statearr_36123_36192[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36056 === (26))){
var inst_35976 = (state_36055[(23)]);
var inst_35972 = (state_36055[(24)]);
var inst_35974 = (state_36055[(26)]);
var inst_35968 = (state_36055[(19)]);
var inst_35971 = (state_36055[(25)]);
var inst_35991 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_35993 = (function (){var all_files = inst_35968;
var res_SINGLEQUOTE_ = inst_35971;
var res = inst_35972;
var files_not_loaded = inst_35974;
var dependencies_that_loaded = inst_35976;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35976,inst_35972,inst_35974,inst_35968,inst_35971,inst_35991,state_val_36056,c__28434__auto__,map__35900,map__35900__$1,opts,before_jsload,on_jsload,reload_dependents,map__35901,map__35901__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35992){
var map__36124 = p__35992;
var map__36124__$1 = ((((!((map__36124 == null)))?((((map__36124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36124.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36124):map__36124);
var namespace = cljs.core.get.call(null,map__36124__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__36124__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35976,inst_35972,inst_35974,inst_35968,inst_35971,inst_35991,state_val_36056,c__28434__auto__,map__35900,map__35900__$1,opts,before_jsload,on_jsload,reload_dependents,map__35901,map__35901__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35994 = cljs.core.map.call(null,inst_35993,inst_35972);
var inst_35995 = cljs.core.pr_str.call(null,inst_35994);
var inst_35996 = figwheel.client.utils.log.call(null,inst_35995);
var inst_35997 = (function (){var all_files = inst_35968;
var res_SINGLEQUOTE_ = inst_35971;
var res = inst_35972;
var files_not_loaded = inst_35974;
var dependencies_that_loaded = inst_35976;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35976,inst_35972,inst_35974,inst_35968,inst_35971,inst_35991,inst_35993,inst_35994,inst_35995,inst_35996,state_val_36056,c__28434__auto__,map__35900,map__35900__$1,opts,before_jsload,on_jsload,reload_dependents,map__35901,map__35901__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35976,inst_35972,inst_35974,inst_35968,inst_35971,inst_35991,inst_35993,inst_35994,inst_35995,inst_35996,state_val_36056,c__28434__auto__,map__35900,map__35900__$1,opts,before_jsload,on_jsload,reload_dependents,map__35901,map__35901__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35998 = setTimeout(inst_35997,(10));
var state_36055__$1 = (function (){var statearr_36126 = state_36055;
(statearr_36126[(33)] = inst_35996);

(statearr_36126[(34)] = inst_35991);

return statearr_36126;
})();
var statearr_36127_36193 = state_36055__$1;
(statearr_36127_36193[(2)] = inst_35998);

(statearr_36127_36193[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36056 === (16))){
var state_36055__$1 = state_36055;
var statearr_36128_36194 = state_36055__$1;
(statearr_36128_36194[(2)] = reload_dependents);

(statearr_36128_36194[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36056 === (38))){
var inst_36008 = (state_36055[(16)]);
var inst_36026 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36008);
var state_36055__$1 = state_36055;
var statearr_36129_36195 = state_36055__$1;
(statearr_36129_36195[(2)] = inst_36026);

(statearr_36129_36195[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36056 === (30))){
var state_36055__$1 = state_36055;
var statearr_36130_36196 = state_36055__$1;
(statearr_36130_36196[(2)] = null);

(statearr_36130_36196[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36056 === (10))){
var inst_35928 = (state_36055[(22)]);
var inst_35930 = cljs.core.chunked_seq_QMARK_.call(null,inst_35928);
var state_36055__$1 = state_36055;
if(inst_35930){
var statearr_36131_36197 = state_36055__$1;
(statearr_36131_36197[(1)] = (13));

} else {
var statearr_36132_36198 = state_36055__$1;
(statearr_36132_36198[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36056 === (18))){
var inst_35962 = (state_36055[(2)]);
var state_36055__$1 = state_36055;
if(cljs.core.truth_(inst_35962)){
var statearr_36133_36199 = state_36055__$1;
(statearr_36133_36199[(1)] = (19));

} else {
var statearr_36134_36200 = state_36055__$1;
(statearr_36134_36200[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36056 === (42))){
var state_36055__$1 = state_36055;
var statearr_36135_36201 = state_36055__$1;
(statearr_36135_36201[(2)] = null);

(statearr_36135_36201[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36056 === (37))){
var inst_36021 = (state_36055[(2)]);
var state_36055__$1 = state_36055;
var statearr_36136_36202 = state_36055__$1;
(statearr_36136_36202[(2)] = inst_36021);

(statearr_36136_36202[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36056 === (8))){
var inst_35928 = (state_36055[(22)]);
var inst_35915 = (state_36055[(10)]);
var inst_35928__$1 = cljs.core.seq.call(null,inst_35915);
var state_36055__$1 = (function (){var statearr_36137 = state_36055;
(statearr_36137[(22)] = inst_35928__$1);

return statearr_36137;
})();
if(inst_35928__$1){
var statearr_36138_36203 = state_36055__$1;
(statearr_36138_36203[(1)] = (10));

} else {
var statearr_36139_36204 = state_36055__$1;
(statearr_36139_36204[(1)] = (11));

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
});})(c__28434__auto__,map__35900,map__35900__$1,opts,before_jsload,on_jsload,reload_dependents,map__35901,map__35901__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__28412__auto__,c__28434__auto__,map__35900,map__35900__$1,opts,before_jsload,on_jsload,reload_dependents,map__35901,map__35901__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28413__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28413__auto____0 = (function (){
var statearr_36143 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36143[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28413__auto__);

(statearr_36143[(1)] = (1));

return statearr_36143;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28413__auto____1 = (function (state_36055){
while(true){
var ret_value__28414__auto__ = (function (){try{while(true){
var result__28415__auto__ = switch__28412__auto__.call(null,state_36055);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28415__auto__;
}
break;
}
}catch (e36144){if((e36144 instanceof Object)){
var ex__28416__auto__ = e36144;
var statearr_36145_36205 = state_36055;
(statearr_36145_36205[(5)] = ex__28416__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36055);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36144;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36206 = state_36055;
state_36055 = G__36206;
continue;
} else {
return ret_value__28414__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28413__auto__ = function(state_36055){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28413__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28413__auto____1.call(this,state_36055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28413__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28413__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28413__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28413__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28413__auto__;
})()
;})(switch__28412__auto__,c__28434__auto__,map__35900,map__35900__$1,opts,before_jsload,on_jsload,reload_dependents,map__35901,map__35901__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__28436__auto__ = (function (){var statearr_36146 = f__28435__auto__.call(null);
(statearr_36146[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28434__auto__);

return statearr_36146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28436__auto__);
});})(c__28434__auto__,map__35900,map__35900__$1,opts,before_jsload,on_jsload,reload_dependents,map__35901,map__35901__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28434__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__36209,link){
var map__36212 = p__36209;
var map__36212__$1 = ((((!((map__36212 == null)))?((((map__36212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36212.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36212):map__36212);
var file = cljs.core.get.call(null,map__36212__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__36212,map__36212__$1,file){
return (function (p1__36207_SHARP_,p2__36208_SHARP_){
if(cljs.core._EQ_.call(null,p1__36207_SHARP_,p2__36208_SHARP_)){
return p1__36207_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__36212,map__36212__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__36218){
var map__36219 = p__36218;
var map__36219__$1 = ((((!((map__36219 == null)))?((((map__36219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36219.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36219):map__36219);
var match_length = cljs.core.get.call(null,map__36219__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__36219__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__36214_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__36214_SHARP_);
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
var args36221 = [];
var len__27082__auto___36224 = arguments.length;
var i__27083__auto___36225 = (0);
while(true){
if((i__27083__auto___36225 < len__27082__auto___36224)){
args36221.push((arguments[i__27083__auto___36225]));

var G__36226 = (i__27083__auto___36225 + (1));
i__27083__auto___36225 = G__36226;
continue;
} else {
}
break;
}

var G__36223 = args36221.length;
switch (G__36223) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36221.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__36228_SHARP_,p2__36229_SHARP_){
return cljs.core.assoc.call(null,p1__36228_SHARP_,cljs.core.get.call(null,p2__36229_SHARP_,key),p2__36229_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__36230){
var map__36233 = p__36230;
var map__36233__$1 = ((((!((map__36233 == null)))?((((map__36233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36233.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36233):map__36233);
var f_data = map__36233__$1;
var file = cljs.core.get.call(null,map__36233__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__36235,files_msg){
var map__36242 = p__36235;
var map__36242__$1 = ((((!((map__36242 == null)))?((((map__36242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36242.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36242):map__36242);
var opts = map__36242__$1;
var on_cssload = cljs.core.get.call(null,map__36242__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__36244_36248 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__36245_36249 = null;
var count__36246_36250 = (0);
var i__36247_36251 = (0);
while(true){
if((i__36247_36251 < count__36246_36250)){
var f_36252 = cljs.core._nth.call(null,chunk__36245_36249,i__36247_36251);
figwheel.client.file_reloading.reload_css_file.call(null,f_36252);

var G__36253 = seq__36244_36248;
var G__36254 = chunk__36245_36249;
var G__36255 = count__36246_36250;
var G__36256 = (i__36247_36251 + (1));
seq__36244_36248 = G__36253;
chunk__36245_36249 = G__36254;
count__36246_36250 = G__36255;
i__36247_36251 = G__36256;
continue;
} else {
var temp__4657__auto___36257 = cljs.core.seq.call(null,seq__36244_36248);
if(temp__4657__auto___36257){
var seq__36244_36258__$1 = temp__4657__auto___36257;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36244_36258__$1)){
var c__26788__auto___36259 = cljs.core.chunk_first.call(null,seq__36244_36258__$1);
var G__36260 = cljs.core.chunk_rest.call(null,seq__36244_36258__$1);
var G__36261 = c__26788__auto___36259;
var G__36262 = cljs.core.count.call(null,c__26788__auto___36259);
var G__36263 = (0);
seq__36244_36248 = G__36260;
chunk__36245_36249 = G__36261;
count__36246_36250 = G__36262;
i__36247_36251 = G__36263;
continue;
} else {
var f_36264 = cljs.core.first.call(null,seq__36244_36258__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_36264);

var G__36265 = cljs.core.next.call(null,seq__36244_36258__$1);
var G__36266 = null;
var G__36267 = (0);
var G__36268 = (0);
seq__36244_36248 = G__36265;
chunk__36245_36249 = G__36266;
count__36246_36250 = G__36267;
i__36247_36251 = G__36268;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__36242,map__36242__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__36242,map__36242__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1480126466460