// Compiled by ClojureScript 1.9.89 {}
goog.provide('re_com.util');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('goog.date.DateTime');
goog.require('goog.date.UtcDateTime');
/**
 * Takes a function 'f' amd a map 'm'.  Applies 'f' to each value in 'm' and returns.
 * (fmap  inc  {:a 4  :b 2})   =>   {:a 5  :b 3}
 */
re_com.util.fmap = (function re_com$util$fmap(f,m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__23358__auto__ = (function re_com$util$fmap_$_iter__24421(s__24422){
return (new cljs.core.LazySeq(null,(function (){
var s__24422__$1 = s__24422;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__24422__$1);
if(temp__4657__auto__){
var s__24422__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24422__$2)){
var c__23356__auto__ = cljs.core.chunk_first.call(null,s__24422__$2);
var size__23357__auto__ = cljs.core.count.call(null,c__23356__auto__);
var b__24424 = cljs.core.chunk_buffer.call(null,size__23357__auto__);
if((function (){var i__24423 = (0);
while(true){
if((i__24423 < size__23357__auto__)){
var vec__24431 = cljs.core._nth.call(null,c__23356__auto__,i__24423);
var k = cljs.core.nth.call(null,vec__24431,(0),null);
var val = cljs.core.nth.call(null,vec__24431,(1),null);
cljs.core.chunk_append.call(null,b__24424,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,val)], null));

var G__24437 = (i__24423 + (1));
i__24423 = G__24437;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24424),re_com$util$fmap_$_iter__24421.call(null,cljs.core.chunk_rest.call(null,s__24422__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24424),null);
}
} else {
var vec__24434 = cljs.core.first.call(null,s__24422__$2);
var k = cljs.core.nth.call(null,vec__24434,(0),null);
var val = cljs.core.nth.call(null,vec__24434,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,val)], null),re_com$util$fmap_$_iter__24421.call(null,cljs.core.rest.call(null,s__24422__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__23358__auto__.call(null,m);
})());
});
/**
 * Recursively merges maps. If vals are not maps, the last value wins.
 */
re_com.util.deep_merge = (function re_com$util$deep_merge(var_args){
var args__23660__auto__ = [];
var len__23653__auto___24439 = arguments.length;
var i__23654__auto___24440 = (0);
while(true){
if((i__23654__auto___24440 < len__23653__auto___24439)){
args__23660__auto__.push((arguments[i__23654__auto___24440]));

var G__24441 = (i__23654__auto___24440 + (1));
i__23654__auto___24440 = G__24441;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((0) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((0)),(0),null)):null);
return re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__23661__auto__);
});

re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (vals){
if(cljs.core.every_QMARK_.call(null,cljs.core.map_QMARK_,vals)){
return cljs.core.apply.call(null,cljs.core.merge_with,re_com.util.deep_merge,vals);
} else {
return cljs.core.last.call(null,vals);
}
});

re_com.util.deep_merge.cljs$lang$maxFixedArity = (0);

re_com.util.deep_merge.cljs$lang$applyTo = (function (seq24438){
return re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24438));
});

re_com.util.deref_or_value = (function re_com$util$deref_or_value(val_or_atom){
if(((!((val_or_atom == null)))?((((val_or_atom.cljs$lang$protocol_mask$partition0$ & (32768))) || (val_or_atom.cljs$core$IDeref$))?true:(((!val_or_atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom))){
return cljs.core.deref.call(null,val_or_atom);
} else {
return val_or_atom;
}
});
re_com.util.get_element_by_id = (function re_com$util$get_element_by_id(id){
return document.getElementById(id);
});
/**
 * Left pad a string 's' with '0', until 's' has length 'len'. Return 's' unchanged, if it is already len or greater
 */
re_com.util.pad_zero = (function re_com$util$pad_zero(s,len){
if((cljs.core.count.call(null,s) < len)){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.take_last.call(null,len,cljs.core.concat.call(null,cljs.core.repeat.call(null,len,"0"),s)));
} else {
return s;
}
});
/**
 * return 'num' as a string of 'len' characters, left padding with '0' as necessary
 */
re_com.util.pad_zero_number = (function re_com$util$pad_zero_number(num,len){
return re_com.util.pad_zero.call(null,[cljs.core.str(num)].join(''),len);
});
/**
 * takes a number (and optional :negative keyword to indicate a negative value) and returns that number as a string with 'px' at the end
 */
re_com.util.px = (function re_com$util$px(var_args){
var args__23660__auto__ = [];
var len__23653__auto___24446 = arguments.length;
var i__23654__auto___24447 = (0);
while(true){
if((i__23654__auto___24447 < len__23653__auto___24446)){
args__23660__auto__.push((arguments[i__23654__auto___24447]));

var G__24448 = (i__23654__auto___24447 + (1));
i__23654__auto___24447 = G__24448;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((1) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((1)),(0),null)):null);
return re_com.util.px.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23661__auto__);
});

re_com.util.px.cljs$core$IFn$_invoke$arity$variadic = (function (val,negative){
return [cljs.core.str((cljs.core.truth_(negative)?(- val):val)),cljs.core.str("px")].join('');
});

re_com.util.px.cljs$lang$maxFixedArity = (1);

re_com.util.px.cljs$lang$applyTo = (function (seq24444){
var G__24445 = cljs.core.first.call(null,seq24444);
var seq24444__$1 = cljs.core.next.call(null,seq24444);
return re_com.util.px.cljs$core$IFn$_invoke$arity$variadic(G__24445,seq24444__$1);
});

/**
 * Removes the item at position n from a vector v, returning a shrunk vector
 */
re_com.util.remove_nth = (function re_com$util$remove_nth(v,n){
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.subvec.call(null,v,(0),n),cljs.core.subvec.call(null,v,(n + (1)),cljs.core.count.call(null,v))));
});
re_com.util.insert_nth = (function re_com$util$insert_nth(vect,index,item){
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.subvec.call(null,vect,(0),index),item,cljs.core.subvec.call(null,vect,index));
});
/**
 * Takes a vector of maps 'v'. Returns the position of the first item in 'v' whose id-fn (default :id) matches 'id'.
 * Returns nil if id not found
 */
re_com.util.position_for_id = (function re_com$util$position_for_id(var_args){
var args__23660__auto__ = [];
var len__23653__auto___24455 = arguments.length;
var i__23654__auto___24456 = (0);
while(true){
if((i__23654__auto___24456 < len__23653__auto___24455)){
args__23660__auto__.push((arguments[i__23654__auto___24456]));

var G__24457 = (i__23654__auto___24456 + (1));
i__23654__auto___24456 = G__24457;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((2) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((2)),(0),null)):null);
return re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23661__auto__);
});

re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__24452){
var map__24453 = p__24452;
var map__24453__$1 = ((((!((map__24453 == null)))?((((map__24453.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24453.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24453):map__24453);
var id_fn = cljs.core.get.call(null,map__24453__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var index_fn = ((function (map__24453,map__24453__$1,id_fn){
return (function (index,item){
if(cljs.core._EQ_.call(null,id_fn.call(null,item),id)){
return index;
} else {
return null;
}
});})(map__24453,map__24453__$1,id_fn))
;
return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,index_fn,v));
});

re_com.util.position_for_id.cljs$lang$maxFixedArity = (2);

re_com.util.position_for_id.cljs$lang$applyTo = (function (seq24449){
var G__24450 = cljs.core.first.call(null,seq24449);
var seq24449__$1 = cljs.core.next.call(null,seq24449);
var G__24451 = cljs.core.first.call(null,seq24449__$1);
var seq24449__$2 = cljs.core.next.call(null,seq24449__$1);
return re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic(G__24450,G__24451,seq24449__$2);
});

/**
 * Takes a vector of maps 'v'. Returns the first item in 'v' whose id-fn (default :id) matches 'id'.
 * Returns nil if id not found
 */
re_com.util.item_for_id = (function re_com$util$item_for_id(var_args){
var args__23660__auto__ = [];
var len__23653__auto___24465 = arguments.length;
var i__23654__auto___24466 = (0);
while(true){
if((i__23654__auto___24466 < len__23653__auto___24465)){
args__23660__auto__.push((arguments[i__23654__auto___24466]));

var G__24467 = (i__23654__auto___24466 + (1));
i__23654__auto___24466 = G__24467;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((2) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((2)),(0),null)):null);
return re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23661__auto__);
});

re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__24462){
var map__24463 = p__24462;
var map__24463__$1 = ((((!((map__24463 == null)))?((((map__24463.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24463.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24463):map__24463);
var id_fn = cljs.core.get.call(null,map__24463__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__24463,map__24463__$1,id_fn){
return (function (p1__24458_SHARP_){
return cljs.core._EQ_.call(null,id_fn.call(null,p1__24458_SHARP_),id);
});})(map__24463,map__24463__$1,id_fn))
,v));
});

re_com.util.item_for_id.cljs$lang$maxFixedArity = (2);

re_com.util.item_for_id.cljs$lang$applyTo = (function (seq24459){
var G__24460 = cljs.core.first.call(null,seq24459);
var seq24459__$1 = cljs.core.next.call(null,seq24459);
var G__24461 = cljs.core.first.call(null,seq24459__$1);
var seq24459__$2 = cljs.core.next.call(null,seq24459__$1);
return re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic(G__24460,G__24461,seq24459__$2);
});

/**
 * Takes a vector of maps 'v', each of which has an id-fn (default :id) key.
 *   Return v where item matching 'id' is excluded
 */
re_com.util.remove_id_item = (function re_com$util$remove_id_item(var_args){
var args__23660__auto__ = [];
var len__23653__auto___24475 = arguments.length;
var i__23654__auto___24476 = (0);
while(true){
if((i__23654__auto___24476 < len__23653__auto___24475)){
args__23660__auto__.push((arguments[i__23654__auto___24476]));

var G__24477 = (i__23654__auto___24476 + (1));
i__23654__auto___24476 = G__24477;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((2) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((2)),(0),null)):null);
return re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23661__auto__);
});

re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__24472){
var map__24473 = p__24472;
var map__24473__$1 = ((((!((map__24473 == null)))?((((map__24473.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24473.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24473):map__24473);
var id_fn = cljs.core.get.call(null,map__24473__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.filterv.call(null,((function (map__24473,map__24473__$1,id_fn){
return (function (p1__24468_SHARP_){
return cljs.core.not_EQ_.call(null,id_fn.call(null,p1__24468_SHARP_),id);
});})(map__24473,map__24473__$1,id_fn))
,v);
});

re_com.util.remove_id_item.cljs$lang$maxFixedArity = (2);

re_com.util.remove_id_item.cljs$lang$applyTo = (function (seq24469){
var G__24470 = cljs.core.first.call(null,seq24469);
var seq24469__$1 = cljs.core.next.call(null,seq24469);
var G__24471 = cljs.core.first.call(null,seq24469__$1);
var seq24469__$2 = cljs.core.next.call(null,seq24469__$1);
return re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic(G__24470,G__24471,seq24469__$2);
});

/**
 * (for [[index item first? last?] (enumerate coll)] ...)  
 */
re_com.util.enumerate = (function re_com$util$enumerate(coll){
var c = (cljs.core.count.call(null,coll) - (1));
var f = ((function (c){
return (function (index,item){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,item,cljs.core._EQ_.call(null,(0),index),cljs.core._EQ_.call(null,c,index)], null);
});})(c))
;
return cljs.core.map_indexed.call(null,f,coll);
});
/**
 * Given a DOM node, I traverse through all ascendant nodes (until I reach body), summing any scrollLeft and scrollTop values
 * and return these sums in a map
 */
re_com.util.sum_scroll_offsets = (function re_com$util$sum_scroll_offsets(node){
var current_node = node.parentNode;
var sum_scroll_left = (0);
var sum_scroll_top = (0);
while(true){
if(cljs.core.not_EQ_.call(null,current_node.tagName,"BODY")){
var G__24478 = current_node.parentNode;
var G__24479 = (sum_scroll_left + current_node.scrollLeft);
var G__24480 = (sum_scroll_top + current_node.scrollTop);
current_node = G__24478;
sum_scroll_left = G__24479;
sum_scroll_top = G__24480;
continue;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),sum_scroll_left,new cljs.core.Keyword(null,"top","top",-1856271961),sum_scroll_top], null);
}
break;
}
});
/**
 * Answer a goog.date.UtcDateTime based on local date/time.
 */
re_com.util.now__GT_utc = (function re_com$util$now__GT_utc(){
var local_date = (new goog.date.DateTime());
return (new goog.date.UtcDateTime(local_date.getYear(),local_date.getMonth(),local_date.getDate(),(0),(0),(0),(0)));
});

//# sourceMappingURL=util.js.map?rel=1474484603142