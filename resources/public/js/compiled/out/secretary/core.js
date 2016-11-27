// Compiled by ClojureScript 1.9.293 {}
goog.provide('secretary.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.walk');

/**
 * @interface
 */
secretary.core.IRouteMatches = function(){};

secretary.core.route_matches = (function secretary$core$route_matches(this$,route){
if((!((this$ == null))) && (!((this$.secretary$core$IRouteMatches$route_matches$arity$2 == null)))){
return this$.secretary$core$IRouteMatches$route_matches$arity$2(this$,route);
} else {
var x__26637__auto__ = (((this$ == null))?null:this$);
var m__26638__auto__ = (secretary.core.route_matches[goog.typeOf(x__26637__auto__)]);
if(!((m__26638__auto__ == null))){
return m__26638__auto__.call(null,this$,route);
} else {
var m__26638__auto____$1 = (secretary.core.route_matches["_"]);
if(!((m__26638__auto____$1 == null))){
return m__26638__auto____$1.call(null,this$,route);
} else {
throw cljs.core.missing_protocol.call(null,"IRouteMatches.route-matches",this$);
}
}
}
});


/**
 * @interface
 */
secretary.core.IRouteValue = function(){};

secretary.core.route_value = (function secretary$core$route_value(this$){
if((!((this$ == null))) && (!((this$.secretary$core$IRouteValue$route_value$arity$1 == null)))){
return this$.secretary$core$IRouteValue$route_value$arity$1(this$);
} else {
var x__26637__auto__ = (((this$ == null))?null:this$);
var m__26638__auto__ = (secretary.core.route_value[goog.typeOf(x__26637__auto__)]);
if(!((m__26638__auto__ == null))){
return m__26638__auto__.call(null,this$);
} else {
var m__26638__auto____$1 = (secretary.core.route_value["_"]);
if(!((m__26638__auto____$1 == null))){
return m__26638__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRouteValue.route-value",this$);
}
}
}
});


/**
 * @interface
 */
secretary.core.IRenderRoute = function(){};

secretary.core.render_route = (function secretary$core$render_route(var_args){
var args31698 = [];
var len__27082__auto___31701 = arguments.length;
var i__27083__auto___31702 = (0);
while(true){
if((i__27083__auto___31702 < len__27082__auto___31701)){
args31698.push((arguments[i__27083__auto___31702]));

var G__31703 = (i__27083__auto___31702 + (1));
i__27083__auto___31702 = G__31703;
continue;
} else {
}
break;
}

var G__31700 = args31698.length;
switch (G__31700) {
case 1:
return secretary.core.render_route.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return secretary.core.render_route.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31698.length)].join('')));

}
});

secretary.core.render_route.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.secretary$core$IRenderRoute$render_route$arity$1 == null)))){
return this$.secretary$core$IRenderRoute$render_route$arity$1(this$);
} else {
var x__26637__auto__ = (((this$ == null))?null:this$);
var m__26638__auto__ = (secretary.core.render_route[goog.typeOf(x__26637__auto__)]);
if(!((m__26638__auto__ == null))){
return m__26638__auto__.call(null,this$);
} else {
var m__26638__auto____$1 = (secretary.core.render_route["_"]);
if(!((m__26638__auto____$1 == null))){
return m__26638__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderRoute.render-route",this$);
}
}
}
});

secretary.core.render_route.cljs$core$IFn$_invoke$arity$2 = (function (this$,params){
if((!((this$ == null))) && (!((this$.secretary$core$IRenderRoute$render_route$arity$2 == null)))){
return this$.secretary$core$IRenderRoute$render_route$arity$2(this$,params);
} else {
var x__26637__auto__ = (((this$ == null))?null:this$);
var m__26638__auto__ = (secretary.core.render_route[goog.typeOf(x__26637__auto__)]);
if(!((m__26638__auto__ == null))){
return m__26638__auto__.call(null,this$,params);
} else {
var m__26638__auto____$1 = (secretary.core.render_route["_"]);
if(!((m__26638__auto____$1 == null))){
return m__26638__auto____$1.call(null,this$,params);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderRoute.render-route",this$);
}
}
}
});

secretary.core.render_route.cljs$lang$maxFixedArity = 2;


secretary.core._STAR_config_STAR_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"prefix","prefix",-265908465),""], null));
/**
 * Gets a value for *config* at path.
 */
secretary.core.get_config = (function secretary$core$get_config(path){
var path__$1 = ((cljs.core.sequential_QMARK_.call(null,path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
return cljs.core.get_in.call(null,cljs.core.deref.call(null,secretary.core._STAR_config_STAR_),path__$1);
});
/**
 * Associates a value val for *config* at path.
 */
secretary.core.set_config_BANG_ = (function secretary$core$set_config_BANG_(path,val){
var path__$1 = ((cljs.core.sequential_QMARK_.call(null,path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
return cljs.core.swap_BANG_.call(null,secretary.core._STAR_config_STAR_,cljs.core.assoc_in,path__$1,val);
});
secretary.core.encode = encodeURIComponent;
if(typeof secretary.core.encode_pair !== 'undefined'){
} else {
/**
 * Given a key and a value return and encoded key-value pair.
 */
secretary.core.encode_pair = (function (){var method_table__26902__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26903__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26904__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26905__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26906__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"secretary.core","encode-pair"),((function (method_table__26902__auto__,prefer_table__26903__auto__,method_cache__26904__auto__,cached_hierarchy__26905__auto__,hierarchy__26906__auto__){
return (function (p__31705){
var vec__31706 = p__31705;
var k = cljs.core.nth.call(null,vec__31706,(0),null);
var v = cljs.core.nth.call(null,vec__31706,(1),null);
if((cljs.core.sequential_QMARK_.call(null,v)) || (cljs.core.set_QMARK_.call(null,v))){
return new cljs.core.Keyword("secretary.core","sequential","secretary.core/sequential",-347187207);
} else {
if((function (){var or__25974__auto__ = cljs.core.map_QMARK_.call(null,v);
if(or__25974__auto__){
return or__25974__auto__;
} else {
if(!((v == null))){
if(((v.cljs$lang$protocol_mask$partition0$ & (67108864))) || ((cljs.core.PROTOCOL_SENTINEL === v.cljs$core$IRecord$))){
return true;
} else {
if((!v.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IRecord,v);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IRecord,v);
}
}
})()){
return new cljs.core.Keyword("secretary.core","map","secretary.core/map",-31086646);
} else {
return null;
}
}
});})(method_table__26902__auto__,prefer_table__26903__auto__,method_cache__26904__auto__,cached_hierarchy__26905__auto__,hierarchy__26906__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26906__auto__,method_table__26902__auto__,prefer_table__26903__auto__,method_cache__26904__auto__,cached_hierarchy__26905__auto__));
})();
}
secretary.core.key_index = (function secretary$core$key_index(var_args){
var args31711 = [];
var len__27082__auto___31714 = arguments.length;
var i__27083__auto___31715 = (0);
while(true){
if((i__27083__auto___31715 < len__27082__auto___31714)){
args31711.push((arguments[i__27083__auto___31715]));

var G__31716 = (i__27083__auto___31715 + (1));
i__27083__auto___31715 = G__31716;
continue;
} else {
}
break;
}

var G__31713 = args31711.length;
switch (G__31713) {
case 1:
return secretary.core.key_index.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return secretary.core.key_index.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31711.length)].join('')));

}
});

secretary.core.key_index.cljs$core$IFn$_invoke$arity$1 = (function (k){
return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("[]")].join('');
});

secretary.core.key_index.cljs$core$IFn$_invoke$arity$2 = (function (k,index){
return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("["),cljs.core.str(index),cljs.core.str("]")].join('');
});

secretary.core.key_index.cljs$lang$maxFixedArity = 2;

cljs.core._add_method.call(null,secretary.core.encode_pair,new cljs.core.Keyword("secretary.core","sequential","secretary.core/sequential",-347187207),(function (p__31718){
var vec__31719 = p__31718;
var k = cljs.core.nth.call(null,vec__31719,(0),null);
var v = cljs.core.nth.call(null,vec__31719,(1),null);
var encoded = cljs.core.map_indexed.call(null,((function (vec__31719,k,v){
return (function (i,x){
var pair = ((cljs.core.coll_QMARK_.call(null,x))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secretary.core.key_index.call(null,k,i),x], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secretary.core.key_index.call(null,k),x], null));
return secretary.core.encode_pair.call(null,pair);
});})(vec__31719,k,v))
,v);
return clojure.string.join.call(null,"&",encoded);
}));
cljs.core._add_method.call(null,secretary.core.encode_pair,new cljs.core.Keyword("secretary.core","map","secretary.core/map",-31086646),(function (p__31722){
var vec__31723 = p__31722;
var k = cljs.core.nth.call(null,vec__31723,(0),null);
var v = cljs.core.nth.call(null,vec__31723,(1),null);
var encoded = cljs.core.map.call(null,((function (vec__31723,k,v){
return (function (p__31726){
var vec__31727 = p__31726;
var ik = cljs.core.nth.call(null,vec__31727,(0),null);
var iv = cljs.core.nth.call(null,vec__31727,(1),null);
return secretary.core.encode_pair.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secretary.core.key_index.call(null,k,cljs.core.name.call(null,ik)),iv], null));
});})(vec__31723,k,v))
,v);
return clojure.string.join.call(null,"&",encoded);
}));
cljs.core._add_method.call(null,secretary.core.encode_pair,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__31730){
var vec__31731 = p__31730;
var k = cljs.core.nth.call(null,vec__31731,(0),null);
var v = cljs.core.nth.call(null,vec__31731,(1),null);
return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("="),cljs.core.str(secretary.core.encode.call(null,[cljs.core.str(v)].join('')))].join('');
}));
/**
 * Convert a map of query parameters into url encoded string.
 */
secretary.core.encode_query_params = (function secretary$core$encode_query_params(query_params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,secretary.core.encode_pair,query_params));
});
/**
 * Like js/encodeURIComponent excepts ignore slashes.
 */
secretary.core.encode_uri = (function secretary$core$encode_uri(uri){
return clojure.string.join.call(null,"/",cljs.core.map.call(null,secretary.core.encode,clojure.string.split.call(null,uri,/\//)));
});
secretary.core.decode = decodeURIComponent;
/**
 * Parse a value from a serialized query-string key index. If the
 *   index value is empty 0 is returned, if it's a digit it returns the
 *   js/parseInt value, otherwise it returns the extracted index.
 */
secretary.core.parse_path = (function secretary$core$parse_path(path){
var index_re = /\[([^\]]*)\]*/;
var parts = cljs.core.re_seq.call(null,index_re,path);
return cljs.core.map.call(null,((function (index_re,parts){
return (function (p__31738){
var vec__31739 = p__31738;
var _ = cljs.core.nth.call(null,vec__31739,(0),null);
var part = cljs.core.nth.call(null,vec__31739,(1),null);
if(cljs.core.empty_QMARK_.call(null,part)){
return (0);
} else {
if(cljs.core.truth_(cljs.core.re_matches.call(null,/\d+/,part))){
return parseInt(part);
} else {
return part;

}
}
});})(index_re,parts))
,parts);
});
/**
 * Return a key path for a serialized query-string entry.
 * 
 *   Ex.
 * 
 *  (key-parse "foo[][a][][b]")
 *  ;; => ("foo" 0 "a" 0 "b")
 *   
 */
secretary.core.key_parse = (function secretary$core$key_parse(k){
var re = /([^\[\]]+)((?:\[[^\]]*\])*)?/;
var vec__31745 = cljs.core.re_matches.call(null,re,k);
var _ = cljs.core.nth.call(null,vec__31745,(0),null);
var key = cljs.core.nth.call(null,vec__31745,(1),null);
var path = cljs.core.nth.call(null,vec__31745,(2),null);
var parsed_path = (cljs.core.truth_(path)?secretary.core.parse_path.call(null,path):null);
return cljs.core.cons.call(null,key,parsed_path);
});
/**
 * Like assoc-in but numbers in path create vectors instead of maps.
 * 
 *   Ex.
 * 
 *  (assoc-in-query-params {} ["foo" 0] 1)
 *  ;; => {"foo" [1]}
 * 
 *  (assoc-in-query-params {} ["foo" 0 "a"] 1)
 *  ;; => {"foo" [{"a" 1}]}
 *   
 */
secretary.core.assoc_in_query_params = (function secretary$core$assoc_in_query_params(m,path,v){
var heads = (function (xs){
return cljs.core.map_indexed.call(null,(function (i,_){
return cljs.core.take.call(null,(i + (1)),xs);
}),xs);
});
var hs = heads.call(null,path);
var m__$1 = cljs.core.reduce.call(null,((function (heads,hs){
return (function (m__$1,h){
if((typeof cljs.core.last.call(null,h) === 'number') && (!(cljs.core.vector_QMARK_.call(null,cljs.core.get_in.call(null,m__$1,cljs.core.butlast.call(null,h)))))){
return cljs.core.assoc_in.call(null,m__$1,cljs.core.butlast.call(null,h),cljs.core.PersistentVector.EMPTY);
} else {
return m__$1;
}
});})(heads,hs))
,m,hs);
if((cljs.core.last.call(null,path) === (0))){
return cljs.core.update_in.call(null,m__$1,cljs.core.butlast.call(null,path),cljs.core.conj,v);
} else {
return cljs.core.assoc_in.call(null,m__$1,path,v);
}
});
/**
 * Extract a map of query parameters from a query string.
 */
secretary.core.decode_query_params = (function secretary$core$decode_query_params(query_string){
var parts = clojure.string.split.call(null,query_string,/&/);
var params = cljs.core.reduce.call(null,((function (parts){
return (function (m,part){
var vec__31751 = clojure.string.split.call(null,part,/=/,(2));
var k = cljs.core.nth.call(null,vec__31751,(0),null);
var v = cljs.core.nth.call(null,vec__31751,(1),null);
return secretary.core.assoc_in_query_params.call(null,m,secretary.core.key_parse.call(null,k),secretary.core.decode.call(null,v));
});})(parts))
,cljs.core.PersistentArrayMap.EMPTY,parts);
var params__$1 = clojure.walk.keywordize_keys.call(null,params);
return params__$1;
});
/**
 * Like re-matches but result is a always vector. If re does not
 *   capture matches then it will return a vector of [m m] as if it had a
 *   single capture. Other wise it maintains consistent behavior with
 *   re-matches. 
 */
secretary.core.re_matches_STAR_ = (function secretary$core$re_matches_STAR_(re,s){
var ms = cljs.core.re_matches.call(null,re,s);
if(cljs.core.truth_(ms)){
if(cljs.core.sequential_QMARK_.call(null,ms)){
return ms;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ms,ms], null);
}
} else {
return null;
}
});
secretary.core.re_escape_chars = cljs.core.set.call(null,"\\.*+|?()[]{}$^");
secretary.core.re_escape = (function secretary$core$re_escape(s){
return cljs.core.reduce.call(null,(function (s__$1,c){
if(cljs.core.truth_(secretary.core.re_escape_chars.call(null,c))){
return [cljs.core.str(s__$1),cljs.core.str("\\"),cljs.core.str(c)].join('');
} else {
return [cljs.core.str(s__$1),cljs.core.str(c)].join('');
}
}),"",s);
});
/**
 * Attempt to lex a single token from s with clauses. Each clause is a
 *   pair of [regexp action] where action is a function. regexp is
 *   expected to begin with ^ and contain a single capture. If the
 *   attempt is successful a vector of [s-without-token (action capture)]
 *   is returned. Otherwise the result is nil.
 */
secretary.core.lex_STAR_ = (function secretary$core$lex_STAR_(s,clauses){
return cljs.core.some.call(null,(function (p__31761){
var vec__31762 = p__31761;
var re = cljs.core.nth.call(null,vec__31762,(0),null);
var action = cljs.core.nth.call(null,vec__31762,(1),null);
var temp__4657__auto__ = cljs.core.re_find.call(null,re,s);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__31765 = temp__4657__auto__;
var m = cljs.core.nth.call(null,vec__31765,(0),null);
var c = cljs.core.nth.call(null,vec__31765,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,s,cljs.core.count.call(null,m)),action.call(null,c)], null);
} else {
return null;
}
}),clauses);
});
/**
 * Return a pair of [regex params]. regex is a compiled regular
 *   expression for matching routes. params is a list of route param
 *   names (:*, :id, etc.). 
 */
secretary.core.lex_route = (function secretary$core$lex_route(s,clauses){
var s__$1 = s;
var pattern = "";
var params = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.seq.call(null,s__$1)){
var vec__31774 = secretary.core.lex_STAR_.call(null,s__$1,clauses);
var s__$2 = cljs.core.nth.call(null,vec__31774,(0),null);
var vec__31777 = cljs.core.nth.call(null,vec__31774,(1),null);
var r = cljs.core.nth.call(null,vec__31777,(0),null);
var p = cljs.core.nth.call(null,vec__31777,(1),null);
var G__31780 = s__$2;
var G__31781 = [cljs.core.str(pattern),cljs.core.str(r)].join('');
var G__31782 = cljs.core.conj.call(null,params,p);
s__$1 = G__31780;
pattern = G__31781;
params = G__31782;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.re_pattern.call(null,[cljs.core.str("^"),cljs.core.str(pattern),cljs.core.str("$")].join('')),cljs.core.remove.call(null,cljs.core.nil_QMARK_,params)], null);
}
break;
}
});
/**
 * Given a route return an instance of IRouteMatches.
 */
secretary.core.compile_route = (function secretary$core$compile_route(orig_route){
var clauses = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/^\*([^\s.:*\/]*)/,(function (v){
var r = "(.*?)";
var p = ((cljs.core.seq.call(null,v))?cljs.core.keyword.call(null,v):new cljs.core.Keyword(null,"*","*",-1294732318));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,p], null);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/^\:([^\s.:*\/]+)/,(function (v){
var r = "([^,;?/]+)";
var p = cljs.core.keyword.call(null,v);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,p], null);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/^([^:*]+)/,(function (v){
var r = secretary.core.re_escape.call(null,v);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null);
})], null)], null);
var vec__31792 = secretary.core.lex_route.call(null,orig_route,clauses);
var re = cljs.core.nth.call(null,vec__31792,(0),null);
var params = cljs.core.nth.call(null,vec__31792,(1),null);
if(typeof secretary.core.t_secretary$core31795 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {secretary.core.IRouteValue}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {secretary.core.IRouteMatches}
*/
secretary.core.t_secretary$core31795 = (function (orig_route,clauses,vec__31792,re,params,meta31796){
this.orig_route = orig_route;
this.clauses = clauses;
this.vec__31792 = vec__31792;
this.re = re;
this.params = params;
this.meta31796 = meta31796;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
secretary.core.t_secretary$core31795.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (clauses,vec__31792,re,params){
return (function (_31797,meta31796__$1){
var self__ = this;
var _31797__$1 = this;
return (new secretary.core.t_secretary$core31795(self__.orig_route,self__.clauses,self__.vec__31792,self__.re,self__.params,meta31796__$1));
});})(clauses,vec__31792,re,params))
;

secretary.core.t_secretary$core31795.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (clauses,vec__31792,re,params){
return (function (_31797){
var self__ = this;
var _31797__$1 = this;
return self__.meta31796;
});})(clauses,vec__31792,re,params))
;

secretary.core.t_secretary$core31795.prototype.secretary$core$IRouteValue$ = cljs.core.PROTOCOL_SENTINEL;

secretary.core.t_secretary$core31795.prototype.secretary$core$IRouteValue$route_value$arity$1 = ((function (clauses,vec__31792,re,params){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.orig_route;
});})(clauses,vec__31792,re,params))
;

secretary.core.t_secretary$core31795.prototype.secretary$core$IRouteMatches$ = cljs.core.PROTOCOL_SENTINEL;

secretary.core.t_secretary$core31795.prototype.secretary$core$IRouteMatches$route_matches$arity$2 = ((function (clauses,vec__31792,re,params){
return (function (_,route){
var self__ = this;
var ___$1 = this;
var temp__4657__auto__ = secretary.core.re_matches_STAR_.call(null,self__.re,route);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__31798 = temp__4657__auto__;
var seq__31799 = cljs.core.seq.call(null,vec__31798);
var first__31800 = cljs.core.first.call(null,seq__31799);
var seq__31799__$1 = cljs.core.next.call(null,seq__31799);
var ___$2 = first__31800;
var ms = seq__31799__$1;
return cljs.core.merge_with.call(null,cljs.core.vector,cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,self__.params,cljs.core.map.call(null,secretary.core.decode,ms))));
} else {
return null;
}
});})(clauses,vec__31792,re,params))
;

secretary.core.t_secretary$core31795.getBasis = ((function (clauses,vec__31792,re,params){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"orig-route","orig-route",899103121,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null),new cljs.core.Symbol(null,"vec__31792","vec__31792",-477487451,null),new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"meta31796","meta31796",1130878796,null)], null);
});})(clauses,vec__31792,re,params))
;

secretary.core.t_secretary$core31795.cljs$lang$type = true;

secretary.core.t_secretary$core31795.cljs$lang$ctorStr = "secretary.core/t_secretary$core31795";

secretary.core.t_secretary$core31795.cljs$lang$ctorPrWriter = ((function (clauses,vec__31792,re,params){
return (function (this__26580__auto__,writer__26581__auto__,opt__26582__auto__){
return cljs.core._write.call(null,writer__26581__auto__,"secretary.core/t_secretary$core31795");
});})(clauses,vec__31792,re,params))
;

secretary.core.__GT_t_secretary$core31795 = ((function (clauses,vec__31792,re,params){
return (function secretary$core$compile_route_$___GT_t_secretary$core31795(orig_route__$1,clauses__$1,vec__31792__$1,re__$1,params__$1,meta31796){
return (new secretary.core.t_secretary$core31795(orig_route__$1,clauses__$1,vec__31792__$1,re__$1,params__$1,meta31796));
});})(clauses,vec__31792,re,params))
;

}

return (new secretary.core.t_secretary$core31795(orig_route,clauses,vec__31792,re,params,cljs.core.PersistentArrayMap.EMPTY));
});
secretary.core.render_route_STAR_ = (function secretary$core$render_route_STAR_(var_args){
var args__27089__auto__ = [];
var len__27082__auto___31804 = arguments.length;
var i__27083__auto___31805 = (0);
while(true){
if((i__27083__auto___31805 < len__27082__auto___31804)){
args__27089__auto__.push((arguments[i__27083__auto___31805]));

var G__31806 = (i__27083__auto___31805 + (1));
i__27083__auto___31805 = G__31806;
continue;
} else {
}
break;
}

var argseq__27090__auto__ = ((((1) < args__27089__auto__.length))?(new cljs.core.IndexedSeq(args__27089__auto__.slice((1)),(0),null)):null);
return secretary.core.render_route_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27090__auto__);
});

secretary.core.render_route_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,args){
if(((!((obj == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === obj.secretary$core$IRenderRoute$)))?true:(((!obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,secretary.core.IRenderRoute,obj):false)):cljs.core.native_satisfies_QMARK_.call(null,secretary.core.IRenderRoute,obj))){
return cljs.core.apply.call(null,secretary.core.render_route,obj,args);
} else {
return null;
}
});

secretary.core.render_route_STAR_.cljs$lang$maxFixedArity = (1);

secretary.core.render_route_STAR_.cljs$lang$applyTo = (function (seq31801){
var G__31802 = cljs.core.first.call(null,seq31801);
var seq31801__$1 = cljs.core.next.call(null,seq31801);
return secretary.core.render_route_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__31802,seq31801__$1);
});

secretary.core._STAR_routes_STAR_ = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
secretary.core.add_route_BANG_ = (function secretary$core$add_route_BANG_(obj,action){
var obj__$1 = ((typeof obj === 'string')?secretary.core.compile_route.call(null,obj):obj);
return cljs.core.swap_BANG_.call(null,secretary.core._STAR_routes_STAR_,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj__$1,action], null));
});
secretary.core.remove_route_BANG_ = (function secretary$core$remove_route_BANG_(obj){
return cljs.core.swap_BANG_.call(null,secretary.core._STAR_routes_STAR_,(function (rs){
return cljs.core.filterv.call(null,(function (p__31811){
var vec__31812 = p__31811;
var x = cljs.core.nth.call(null,vec__31812,(0),null);
var _ = cljs.core.nth.call(null,vec__31812,(1),null);
return cljs.core.not_EQ_.call(null,x,obj);
}),rs);
}));
});
secretary.core.reset_routes_BANG_ = (function secretary$core$reset_routes_BANG_(){
return cljs.core.reset_BANG_.call(null,secretary.core._STAR_routes_STAR_,cljs.core.PersistentVector.EMPTY);
});
secretary.core.locate_route = (function secretary$core$locate_route(route){
return cljs.core.some.call(null,(function (p__31819){
var vec__31820 = p__31819;
var compiled_route = cljs.core.nth.call(null,vec__31820,(0),null);
var action = cljs.core.nth.call(null,vec__31820,(1),null);
var temp__4657__auto__ = secretary.core.route_matches.call(null,compiled_route,route);
if(cljs.core.truth_(temp__4657__auto__)){
var params = temp__4657__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"route","route",329891309),compiled_route], null);
} else {
return null;
}
}),cljs.core.deref.call(null,secretary.core._STAR_routes_STAR_));
});
/**
 * Returns original route value as set in defroute when passed a URI path.
 */
secretary.core.locate_route_value = (function secretary$core$locate_route_value(uri){
return secretary.core.route_value.call(null,new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(secretary.core.locate_route.call(null,uri)));
});
secretary.core.prefix = (function secretary$core$prefix(){
return [cljs.core.str(secretary.core.get_config.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prefix","prefix",-265908465)], null)))].join('');
});
secretary.core.uri_without_prefix = (function secretary$core$uri_without_prefix(uri){
return clojure.string.replace.call(null,uri,cljs.core.re_pattern.call(null,[cljs.core.str("^"),cljs.core.str(secretary.core.prefix.call(null))].join('')),"");
});
/**
 * Ensures that the uri has a leading slash
 */
secretary.core.uri_with_leading_slash = (function secretary$core$uri_with_leading_slash(uri){
if(cljs.core._EQ_.call(null,"/",cljs.core.first.call(null,uri))){
return uri;
} else {
return [cljs.core.str("/"),cljs.core.str(uri)].join('');
}
});
/**
 * Dispatch an action for a given route if it matches the URI path.
 */
secretary.core.dispatch_BANG_ = (function secretary$core$dispatch_BANG_(uri){
var vec__31828 = clojure.string.split.call(null,secretary.core.uri_without_prefix.call(null,uri),/\?/);
var uri_path = cljs.core.nth.call(null,vec__31828,(0),null);
var query_string = cljs.core.nth.call(null,vec__31828,(1),null);
var uri_path__$1 = secretary.core.uri_with_leading_slash.call(null,uri_path);
var query_params = (cljs.core.truth_(query_string)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-params","query-params",900640534),secretary.core.decode_query_params.call(null,query_string)], null):null);
var map__31831 = secretary.core.locate_route.call(null,uri_path__$1);
var map__31831__$1 = ((((!((map__31831 == null)))?((((map__31831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31831.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31831):map__31831);
var action = cljs.core.get.call(null,map__31831__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var params = cljs.core.get.call(null,map__31831__$1,new cljs.core.Keyword(null,"params","params",710516235));
var action__$1 = (function (){var or__25974__auto__ = action;
if(cljs.core.truth_(or__25974__auto__)){
return or__25974__auto__;
} else {
return cljs.core.identity;
}
})();
var params__$1 = cljs.core.merge.call(null,params,query_params);
return action__$1.call(null,params__$1);
});
secretary.core.invalid_params = (function secretary$core$invalid_params(params,validations){
return cljs.core.reduce.call(null,(function (m,p__31837){
var vec__31838 = p__31837;
var key = cljs.core.nth.call(null,vec__31838,(0),null);
var validation = cljs.core.nth.call(null,vec__31838,(1),null);
var value = cljs.core.get.call(null,params,key);
if(cljs.core.truth_(cljs.core.re_matches.call(null,validation,value))){
return m;
} else {
return cljs.core.assoc.call(null,m,key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [value,validation], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.call(null,(2),validations));
});
secretary.core.params_valid_QMARK_ = (function secretary$core$params_valid_QMARK_(params,validations){
return cljs.core.empty_QMARK_.call(null,secretary.core.invalid_params.call(null,params,validations));
});
(secretary.core.IRouteMatches["string"] = true);

(secretary.core.route_matches["string"] = (function (this$,route){
return secretary.core.route_matches.call(null,secretary.core.compile_route.call(null,this$),route);
}));

RegExp.prototype.secretary$core$IRouteMatches$ = cljs.core.PROTOCOL_SENTINEL;

RegExp.prototype.secretary$core$IRouteMatches$route_matches$arity$2 = (function (this$,route){
var this$__$1 = this;
var temp__4657__auto__ = secretary.core.re_matches_STAR_.call(null,this$__$1,route);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__31841 = temp__4657__auto__;
var seq__31842 = cljs.core.seq.call(null,vec__31841);
var first__31843 = cljs.core.first.call(null,seq__31842);
var seq__31842__$1 = cljs.core.next.call(null,seq__31842);
var _ = first__31843;
var ms = seq__31842__$1;
return cljs.core.vec.call(null,ms);
} else {
return null;
}
});

cljs.core.PersistentVector.prototype.secretary$core$IRouteMatches$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.secretary$core$IRouteMatches$route_matches$arity$2 = (function (p__31844,route){
var vec__31845 = p__31844;
var seq__31846 = cljs.core.seq.call(null,vec__31845);
var first__31847 = cljs.core.first.call(null,seq__31846);
var seq__31846__$1 = cljs.core.next.call(null,seq__31846);
var route_string = first__31847;
var validations = seq__31846__$1;
var vec__31848 = this;
var seq__31849 = cljs.core.seq.call(null,vec__31848);
var first__31850 = cljs.core.first.call(null,seq__31849);
var seq__31849__$1 = cljs.core.next.call(null,seq__31849);
var route_string__$1 = first__31850;
var validations__$1 = seq__31849__$1;
var params = secretary.core.route_matches.call(null,secretary.core.compile_route.call(null,route_string__$1),route);
if(cljs.core.truth_(secretary.core.params_valid_QMARK_.call(null,params,validations__$1))){
return params;
} else {
return null;
}
});
(secretary.core.IRouteValue["string"] = true);

(secretary.core.route_value["string"] = (function (this$){
return secretary.core.route_value.call(null,secretary.core.compile_route.call(null,this$));
}));

RegExp.prototype.secretary$core$IRouteValue$ = cljs.core.PROTOCOL_SENTINEL;

RegExp.prototype.secretary$core$IRouteValue$route_value$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});

cljs.core.PersistentVector.prototype.secretary$core$IRouteValue$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.secretary$core$IRouteValue$route_value$arity$1 = (function (p__31851){
var vec__31852 = p__31851;
var seq__31853 = cljs.core.seq.call(null,vec__31852);
var first__31854 = cljs.core.first.call(null,seq__31853);
var seq__31853__$1 = cljs.core.next.call(null,seq__31853);
var route_string = first__31854;
var validations = seq__31853__$1;
var vec__31855 = this;
var seq__31856 = cljs.core.seq.call(null,vec__31855);
var first__31857 = cljs.core.first.call(null,seq__31856);
var seq__31856__$1 = cljs.core.next.call(null,seq__31856);
var route_string__$1 = first__31857;
var validations__$1 = seq__31856__$1;
return cljs.core.vec.call(null,cljs.core.cons.call(null,secretary.core.route_value.call(null,route_string__$1),validations__$1));
});
(secretary.core.IRenderRoute["string"] = true);

(secretary.core.render_route["string"] = (function() {
var G__31867 = null;
var G__31867__1 = (function (this$){
return secretary.core.render_route.call(null,this$,cljs.core.PersistentArrayMap.EMPTY);
});
var G__31867__2 = (function (this$,params){
var map__31858 = params;
var map__31858__$1 = ((((!((map__31858 == null)))?((((map__31858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31858.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31858):map__31858);
var m = map__31858__$1;
var query_params = cljs.core.get.call(null,map__31858__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var a = cljs.core.atom.call(null,m);
var path = this$.replace((new RegExp(":[^\\s.:*/]+|\\*[^\\s.:*/]*","g")),((function (map__31858,map__31858__$1,m,query_params,a){
return (function ($1){
var lookup = cljs.core.keyword.call(null,((cljs.core._EQ_.call(null,$1,"*"))?$1:cljs.core.subs.call(null,$1,(1))));
var v = cljs.core.get.call(null,cljs.core.deref.call(null,a),lookup);
var replacement = ((cljs.core.sequential_QMARK_.call(null,v))?(function (){
cljs.core.swap_BANG_.call(null,a,cljs.core.assoc,lookup,cljs.core.next.call(null,v));

return secretary.core.encode_uri.call(null,cljs.core.first.call(null,v));
})()
:(cljs.core.truth_(v)?secretary.core.encode_uri.call(null,v):$1));
return replacement;
});})(map__31858,map__31858__$1,m,query_params,a))
);
var path__$1 = [cljs.core.str(secretary.core.get_config.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prefix","prefix",-265908465)], null))),cljs.core.str(path)].join('');
var temp__4655__auto__ = (function (){var and__25962__auto__ = query_params;
if(cljs.core.truth_(and__25962__auto__)){
return secretary.core.encode_query_params.call(null,query_params);
} else {
return and__25962__auto__;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var query_string = temp__4655__auto__;
return [cljs.core.str(path__$1),cljs.core.str("?"),cljs.core.str(query_string)].join('');
} else {
return path__$1;
}
});
G__31867 = function(this$,params){
switch(arguments.length){
case 1:
return G__31867__1.call(this,this$);
case 2:
return G__31867__2.call(this,this$,params);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__31867.cljs$core$IFn$_invoke$arity$1 = G__31867__1;
G__31867.cljs$core$IFn$_invoke$arity$2 = G__31867__2;
return G__31867;
})()
);

cljs.core.PersistentVector.prototype.secretary$core$IRenderRoute$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.secretary$core$IRenderRoute$render_route$arity$1 = (function (this$){
var this$__$1 = this;
return secretary.core.render_route.call(null,this$__$1,cljs.core.PersistentArrayMap.EMPTY);
});

cljs.core.PersistentVector.prototype.secretary$core$IRenderRoute$render_route$arity$2 = (function (p__31860,params){
var vec__31861 = p__31860;
var seq__31862 = cljs.core.seq.call(null,vec__31861);
var first__31863 = cljs.core.first.call(null,seq__31862);
var seq__31862__$1 = cljs.core.next.call(null,seq__31862);
var route_string = first__31863;
var validations = seq__31862__$1;
var vec__31864 = this;
var seq__31865 = cljs.core.seq.call(null,vec__31864);
var first__31866 = cljs.core.first.call(null,seq__31865);
var seq__31865__$1 = cljs.core.next.call(null,seq__31865);
var route_string__$1 = first__31866;
var validations__$1 = seq__31865__$1;
var invalid = secretary.core.invalid_params.call(null,params,validations__$1);
if(cljs.core.empty_QMARK_.call(null,invalid)){
return secretary.core.render_route.call(null,route_string__$1,params);
} else {
throw cljs.core.ex_info.call(null,"Could not build route: invalid params",invalid);
}
});

//# sourceMappingURL=core.js.map?rel=1480126463074