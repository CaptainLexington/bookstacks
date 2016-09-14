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
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__23358__auto__ = (function re_com$util$fmap_$_iter__24732(s__24733){
return (new cljs.core.LazySeq(null,(function (){
var s__24733__$1 = s__24733;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__24733__$1);
if(temp__4657__auto__){
var s__24733__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24733__$2)){
var c__23356__auto__ = cljs.core.chunk_first.call(null,s__24733__$2);
var size__23357__auto__ = cljs.core.count.call(null,c__23356__auto__);
var b__24735 = cljs.core.chunk_buffer.call(null,size__23357__auto__);
if((function (){var i__24734 = (0);
while(true){
if((i__24734 < size__23357__auto__)){
var vec__24742 = cljs.core._nth.call(null,c__23356__auto__,i__24734);
var k = cljs.core.nth.call(null,vec__24742,(0),null);
var val = cljs.core.nth.call(null,vec__24742,(1),null);
cljs.core.chunk_append.call(null,b__24735,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,val)], null));

var G__24748 = (i__24734 + (1));
i__24734 = G__24748;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24735),re_com$util$fmap_$_iter__24732.call(null,cljs.core.chunk_rest.call(null,s__24733__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24735),null);
}
} else {
var vec__24745 = cljs.core.first.call(null,s__24733__$2);
var k = cljs.core.nth.call(null,vec__24745,(0),null);
var val = cljs.core.nth.call(null,vec__24745,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,val)], null),re_com$util$fmap_$_iter__24732.call(null,cljs.core.rest.call(null,s__24733__$2)));
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
var len__23653__auto___24750 = arguments.length;
var i__23654__auto___24751 = (0);
while(true){
if((i__23654__auto___24751 < len__23653__auto___24750)){
args__23660__auto__.push((arguments[i__23654__auto___24751]));

var G__24752 = (i__23654__auto___24751 + (1));
i__23654__auto___24751 = G__24752;
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

re_com.util.deep_merge.cljs$lang$applyTo = (function (seq24749){
return re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24749));
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
var len__23653__auto___24757 = arguments.length;
var i__23654__auto___24758 = (0);
while(true){
if((i__23654__auto___24758 < len__23653__auto___24757)){
args__23660__auto__.push((arguments[i__23654__auto___24758]));

var G__24759 = (i__23654__auto___24758 + (1));
i__23654__auto___24758 = G__24759;
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

re_com.util.px.cljs$lang$applyTo = (function (seq24755){
var G__24756 = cljs.core.first.call(null,seq24755);
var seq24755__$1 = cljs.core.next.call(null,seq24755);
return re_com.util.px.cljs$core$IFn$_invoke$arity$variadic(G__24756,seq24755__$1);
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
var len__23653__auto___24766 = arguments.length;
var i__23654__auto___24767 = (0);
while(true){
if((i__23654__auto___24767 < len__23653__auto___24766)){
args__23660__auto__.push((arguments[i__23654__auto___24767]));

var G__24768 = (i__23654__auto___24767 + (1));
i__23654__auto___24767 = G__24768;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((2) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((2)),(0),null)):null);
return re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23661__auto__);
});

re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__24763){
var map__24764 = p__24763;
var map__24764__$1 = ((((!((map__24764 == null)))?((((map__24764.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24764.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24764):map__24764);
var id_fn = cljs.core.get.call(null,map__24764__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var index_fn = ((function (map__24764,map__24764__$1,id_fn){
return (function (index,item){
if(cljs.core._EQ_.call(null,id_fn.call(null,item),id)){
return index;
} else {
return null;
}
});})(map__24764,map__24764__$1,id_fn))
;
return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,index_fn,v));
});

re_com.util.position_for_id.cljs$lang$maxFixedArity = (2);

re_com.util.position_for_id.cljs$lang$applyTo = (function (seq24760){
var G__24761 = cljs.core.first.call(null,seq24760);
var seq24760__$1 = cljs.core.next.call(null,seq24760);
var G__24762 = cljs.core.first.call(null,seq24760__$1);
var seq24760__$2 = cljs.core.next.call(null,seq24760__$1);
return re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic(G__24761,G__24762,seq24760__$2);
});

/**
 * Takes a vector of maps 'v'. Returns the first item in 'v' whose id-fn (default :id) matches 'id'.
 * Returns nil if id not found
 */
re_com.util.item_for_id = (function re_com$util$item_for_id(var_args){
var args__23660__auto__ = [];
var len__23653__auto___24776 = arguments.length;
var i__23654__auto___24777 = (0);
while(true){
if((i__23654__auto___24777 < len__23653__auto___24776)){
args__23660__auto__.push((arguments[i__23654__auto___24777]));

var G__24778 = (i__23654__auto___24777 + (1));
i__23654__auto___24777 = G__24778;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((2) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((2)),(0),null)):null);
return re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23661__auto__);
});

re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__24773){
var map__24774 = p__24773;
var map__24774__$1 = ((((!((map__24774 == null)))?((((map__24774.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24774.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24774):map__24774);
var id_fn = cljs.core.get.call(null,map__24774__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__24774,map__24774__$1,id_fn){
return (function (p1__24769_SHARP_){
return cljs.core._EQ_.call(null,id_fn.call(null,p1__24769_SHARP_),id);
});})(map__24774,map__24774__$1,id_fn))
,v));
});

re_com.util.item_for_id.cljs$lang$maxFixedArity = (2);

re_com.util.item_for_id.cljs$lang$applyTo = (function (seq24770){
var G__24771 = cljs.core.first.call(null,seq24770);
var seq24770__$1 = cljs.core.next.call(null,seq24770);
var G__24772 = cljs.core.first.call(null,seq24770__$1);
var seq24770__$2 = cljs.core.next.call(null,seq24770__$1);
return re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic(G__24771,G__24772,seq24770__$2);
});

/**
 * Takes a vector of maps 'v', each of which has an id-fn (default :id) key.
 *   Return v where item matching 'id' is excluded
 */
re_com.util.remove_id_item = (function re_com$util$remove_id_item(var_args){
var args__23660__auto__ = [];
var len__23653__auto___24786 = arguments.length;
var i__23654__auto___24787 = (0);
while(true){
if((i__23654__auto___24787 < len__23653__auto___24786)){
args__23660__auto__.push((arguments[i__23654__auto___24787]));

var G__24788 = (i__23654__auto___24787 + (1));
i__23654__auto___24787 = G__24788;
continue;
} else {
}
break;
}

var argseq__23661__auto__ = ((((2) < args__23660__auto__.length))?(new cljs.core.IndexedSeq(args__23660__auto__.slice((2)),(0),null)):null);
return re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23661__auto__);
});

re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__24783){
var map__24784 = p__24783;
var map__24784__$1 = ((((!((map__24784 == null)))?((((map__24784.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24784.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24784):map__24784);
var id_fn = cljs.core.get.call(null,map__24784__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.filterv.call(null,((function (map__24784,map__24784__$1,id_fn){
return (function (p1__24779_SHARP_){
return cljs.core.not_EQ_.call(null,id_fn.call(null,p1__24779_SHARP_),id);
});})(map__24784,map__24784__$1,id_fn))
,v);
});

re_com.util.remove_id_item.cljs$lang$maxFixedArity = (2);

re_com.util.remove_id_item.cljs$lang$applyTo = (function (seq24780){
var G__24781 = cljs.core.first.call(null,seq24780);
var seq24780__$1 = cljs.core.next.call(null,seq24780);
var G__24782 = cljs.core.first.call(null,seq24780__$1);
var seq24780__$2 = cljs.core.next.call(null,seq24780__$1);
return re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic(G__24781,G__24782,seq24780__$2);
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
var G__24789 = current_node.parentNode;
var G__24790 = (sum_scroll_left + current_node.scrollLeft);
var G__24791 = (sum_scroll_top + current_node.scrollTop);
current_node = G__24789;
sum_scroll_left = G__24790;
sum_scroll_top = G__24791;
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

//# sourceMappingURL=util.js.map?rel=1473455228703