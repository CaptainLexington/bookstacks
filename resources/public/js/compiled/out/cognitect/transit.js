// Compiled by ClojureScript 1.9.89 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__29578_29582 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__29579_29583 = null;
var count__29580_29584 = (0);
var i__29581_29585 = (0);
while(true){
if((i__29581_29585 < count__29580_29584)){
var k_29586 = cljs.core._nth.call(null,chunk__29579_29583,i__29581_29585);
var v_29587 = (b[k_29586]);
(a[k_29586] = v_29587);

var G__29588 = seq__29578_29582;
var G__29589 = chunk__29579_29583;
var G__29590 = count__29580_29584;
var G__29591 = (i__29581_29585 + (1));
seq__29578_29582 = G__29588;
chunk__29579_29583 = G__29589;
count__29580_29584 = G__29590;
i__29581_29585 = G__29591;
continue;
} else {
var temp__4657__auto___29592 = cljs.core.seq.call(null,seq__29578_29582);
if(temp__4657__auto___29592){
var seq__29578_29593__$1 = temp__4657__auto___29592;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29578_29593__$1)){
var c__26381__auto___29594 = cljs.core.chunk_first.call(null,seq__29578_29593__$1);
var G__29595 = cljs.core.chunk_rest.call(null,seq__29578_29593__$1);
var G__29596 = c__26381__auto___29594;
var G__29597 = cljs.core.count.call(null,c__26381__auto___29594);
var G__29598 = (0);
seq__29578_29582 = G__29595;
chunk__29579_29583 = G__29596;
count__29580_29584 = G__29597;
i__29581_29585 = G__29598;
continue;
} else {
var k_29599 = cljs.core.first.call(null,seq__29578_29593__$1);
var v_29600 = (b[k_29599]);
(a[k_29599] = v_29600);

var G__29601 = cljs.core.next.call(null,seq__29578_29593__$1);
var G__29602 = null;
var G__29603 = (0);
var G__29604 = (0);
seq__29578_29582 = G__29601;
chunk__29579_29583 = G__29602;
count__29580_29584 = G__29603;
i__29581_29585 = G__29604;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__26176__auto__,writer__26177__auto__,opt__26178__auto__){
return cljs.core._write.call(null,writer__26177__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__26176__auto__,writer__26177__auto__,opt__26178__auto__){
return cljs.core._write.call(null,writer__26177__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args29605 = [];
var len__26645__auto___29608 = arguments.length;
var i__26646__auto___29609 = (0);
while(true){
if((i__26646__auto___29609 < len__26645__auto___29608)){
args29605.push((arguments[i__26646__auto___29609]));

var G__29610 = (i__26646__auto___29609 + (1));
i__26646__auto___29609 = G__29610;
continue;
} else {
}
break;
}

var G__29607 = args29605.length;
switch (G__29607) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29605.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__29612 = (i + (2));
var G__29613 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__29612;
ret = G__29613;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;

/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__26176__auto__,writer__26177__auto__,opt__26178__auto__){
return cljs.core._write.call(null,writer__26177__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__26176__auto__,writer__26177__auto__,opt__26178__auto__){
return cljs.core._write.call(null,writer__26177__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__29614_29618 = cljs.core.seq.call(null,v);
var chunk__29615_29619 = null;
var count__29616_29620 = (0);
var i__29617_29621 = (0);
while(true){
if((i__29617_29621 < count__29616_29620)){
var x_29622 = cljs.core._nth.call(null,chunk__29615_29619,i__29617_29621);
ret.push(x_29622);

var G__29623 = seq__29614_29618;
var G__29624 = chunk__29615_29619;
var G__29625 = count__29616_29620;
var G__29626 = (i__29617_29621 + (1));
seq__29614_29618 = G__29623;
chunk__29615_29619 = G__29624;
count__29616_29620 = G__29625;
i__29617_29621 = G__29626;
continue;
} else {
var temp__4657__auto___29627 = cljs.core.seq.call(null,seq__29614_29618);
if(temp__4657__auto___29627){
var seq__29614_29628__$1 = temp__4657__auto___29627;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29614_29628__$1)){
var c__26381__auto___29629 = cljs.core.chunk_first.call(null,seq__29614_29628__$1);
var G__29630 = cljs.core.chunk_rest.call(null,seq__29614_29628__$1);
var G__29631 = c__26381__auto___29629;
var G__29632 = cljs.core.count.call(null,c__26381__auto___29629);
var G__29633 = (0);
seq__29614_29618 = G__29630;
chunk__29615_29619 = G__29631;
count__29616_29620 = G__29632;
i__29617_29621 = G__29633;
continue;
} else {
var x_29634 = cljs.core.first.call(null,seq__29614_29628__$1);
ret.push(x_29634);

var G__29635 = cljs.core.next.call(null,seq__29614_29628__$1);
var G__29636 = null;
var G__29637 = (0);
var G__29638 = (0);
seq__29614_29618 = G__29635;
chunk__29615_29619 = G__29636;
count__29616_29620 = G__29637;
i__29617_29621 = G__29638;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__26176__auto__,writer__26177__auto__,opt__26178__auto__){
return cljs.core._write.call(null,writer__26177__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__26176__auto__,writer__26177__auto__,opt__26178__auto__){
return cljs.core._write.call(null,writer__26177__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__29639_29643 = cljs.core.seq.call(null,v);
var chunk__29640_29644 = null;
var count__29641_29645 = (0);
var i__29642_29646 = (0);
while(true){
if((i__29642_29646 < count__29641_29645)){
var x_29647 = cljs.core._nth.call(null,chunk__29640_29644,i__29642_29646);
ret.push(x_29647);

var G__29648 = seq__29639_29643;
var G__29649 = chunk__29640_29644;
var G__29650 = count__29641_29645;
var G__29651 = (i__29642_29646 + (1));
seq__29639_29643 = G__29648;
chunk__29640_29644 = G__29649;
count__29641_29645 = G__29650;
i__29642_29646 = G__29651;
continue;
} else {
var temp__4657__auto___29652 = cljs.core.seq.call(null,seq__29639_29643);
if(temp__4657__auto___29652){
var seq__29639_29653__$1 = temp__4657__auto___29652;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29639_29653__$1)){
var c__26381__auto___29654 = cljs.core.chunk_first.call(null,seq__29639_29653__$1);
var G__29655 = cljs.core.chunk_rest.call(null,seq__29639_29653__$1);
var G__29656 = c__26381__auto___29654;
var G__29657 = cljs.core.count.call(null,c__26381__auto___29654);
var G__29658 = (0);
seq__29639_29643 = G__29655;
chunk__29640_29644 = G__29656;
count__29641_29645 = G__29657;
i__29642_29646 = G__29658;
continue;
} else {
var x_29659 = cljs.core.first.call(null,seq__29639_29653__$1);
ret.push(x_29659);

var G__29660 = cljs.core.next.call(null,seq__29639_29653__$1);
var G__29661 = null;
var G__29662 = (0);
var G__29663 = (0);
seq__29639_29643 = G__29660;
chunk__29640_29644 = G__29661;
count__29641_29645 = G__29662;
i__29642_29646 = G__29663;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__26176__auto__,writer__26177__auto__,opt__26178__auto__){
return cljs.core._write.call(null,writer__26177__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__29664_29668 = cljs.core.seq.call(null,v);
var chunk__29665_29669 = null;
var count__29666_29670 = (0);
var i__29667_29671 = (0);
while(true){
if((i__29667_29671 < count__29666_29670)){
var x_29672 = cljs.core._nth.call(null,chunk__29665_29669,i__29667_29671);
ret.push(x_29672);

var G__29673 = seq__29664_29668;
var G__29674 = chunk__29665_29669;
var G__29675 = count__29666_29670;
var G__29676 = (i__29667_29671 + (1));
seq__29664_29668 = G__29673;
chunk__29665_29669 = G__29674;
count__29666_29670 = G__29675;
i__29667_29671 = G__29676;
continue;
} else {
var temp__4657__auto___29677 = cljs.core.seq.call(null,seq__29664_29668);
if(temp__4657__auto___29677){
var seq__29664_29678__$1 = temp__4657__auto___29677;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29664_29678__$1)){
var c__26381__auto___29679 = cljs.core.chunk_first.call(null,seq__29664_29678__$1);
var G__29680 = cljs.core.chunk_rest.call(null,seq__29664_29678__$1);
var G__29681 = c__26381__auto___29679;
var G__29682 = cljs.core.count.call(null,c__26381__auto___29679);
var G__29683 = (0);
seq__29664_29668 = G__29680;
chunk__29665_29669 = G__29681;
count__29666_29670 = G__29682;
i__29667_29671 = G__29683;
continue;
} else {
var x_29684 = cljs.core.first.call(null,seq__29664_29678__$1);
ret.push(x_29684);

var G__29685 = cljs.core.next.call(null,seq__29664_29678__$1);
var G__29686 = null;
var G__29687 = (0);
var G__29688 = (0);
seq__29664_29668 = G__29685;
chunk__29665_29669 = G__29686;
count__29666_29670 = G__29687;
i__29667_29671 = G__29688;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__26176__auto__,writer__26177__auto__,opt__26178__auto__){
return cljs.core._write.call(null,writer__26177__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__26176__auto__,writer__26177__auto__,opt__26178__auto__){
return cljs.core._write.call(null,writer__26177__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args29689 = [];
var len__26645__auto___29704 = arguments.length;
var i__26646__auto___29705 = (0);
while(true){
if((i__26646__auto___29705 < len__26645__auto___29704)){
args29689.push((arguments[i__26646__auto___29705]));

var G__29706 = (i__26646__auto___29705 + (1));
i__26646__auto___29705 = G__29706;
continue;
} else {
}
break;
}

var G__29691 = args29689.length;
switch (G__29691) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29689.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__29692 = obj;
G__29692.push(kfn.call(null,k),vfn.call(null,v));

return G__29692;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x29693 = cljs.core.clone.call(null,handlers);
x29693.forEach = ((function (x29693,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__29694 = cljs.core.seq.call(null,coll);
var chunk__29695 = null;
var count__29696 = (0);
var i__29697 = (0);
while(true){
if((i__29697 < count__29696)){
var vec__29698 = cljs.core._nth.call(null,chunk__29695,i__29697);
var k = cljs.core.nth.call(null,vec__29698,(0),null);
var v = cljs.core.nth.call(null,vec__29698,(1),null);
f.call(null,v,k);

var G__29708 = seq__29694;
var G__29709 = chunk__29695;
var G__29710 = count__29696;
var G__29711 = (i__29697 + (1));
seq__29694 = G__29708;
chunk__29695 = G__29709;
count__29696 = G__29710;
i__29697 = G__29711;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29694);
if(temp__4657__auto__){
var seq__29694__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29694__$1)){
var c__26381__auto__ = cljs.core.chunk_first.call(null,seq__29694__$1);
var G__29712 = cljs.core.chunk_rest.call(null,seq__29694__$1);
var G__29713 = c__26381__auto__;
var G__29714 = cljs.core.count.call(null,c__26381__auto__);
var G__29715 = (0);
seq__29694 = G__29712;
chunk__29695 = G__29713;
count__29696 = G__29714;
i__29697 = G__29715;
continue;
} else {
var vec__29701 = cljs.core.first.call(null,seq__29694__$1);
var k = cljs.core.nth.call(null,vec__29701,(0),null);
var v = cljs.core.nth.call(null,vec__29701,(1),null);
f.call(null,v,k);

var G__29716 = cljs.core.next.call(null,seq__29694__$1);
var G__29717 = null;
var G__29718 = (0);
var G__29719 = (0);
seq__29694 = G__29716;
chunk__29695 = G__29717;
count__29696 = G__29718;
i__29697 = G__29719;
continue;
}
} else {
return null;
}
}
break;
}
});})(x29693,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x29693;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;

/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args29720 = [];
var len__26645__auto___29726 = arguments.length;
var i__26646__auto___29727 = (0);
while(true){
if((i__26646__auto___29727 < len__26645__auto___29726)){
args29720.push((arguments[i__26646__auto___29727]));

var G__29728 = (i__26646__auto___29727 + (1));
i__26646__auto___29727 = G__29728;
continue;
} else {
}
break;
}

var G__29722 = args29720.length;
switch (G__29722) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29720.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit29723 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit29723 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta29724){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta29724 = meta29724;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit29723.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29725,meta29724__$1){
var self__ = this;
var _29725__$1 = this;
return (new cognitect.transit.t_cognitect$transit29723(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta29724__$1));
});

cognitect.transit.t_cognitect$transit29723.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29725){
var self__ = this;
var _29725__$1 = this;
return self__.meta29724;
});

cognitect.transit.t_cognitect$transit29723.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit29723.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit29723.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit29723.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit29723.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta29724","meta29724",31953865,null)], null);
});

cognitect.transit.t_cognitect$transit29723.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit29723.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit29723";

cognitect.transit.t_cognitect$transit29723.cljs$lang$ctorPrWriter = (function (this__26176__auto__,writer__26177__auto__,opt__26178__auto__){
return cljs.core._write.call(null,writer__26177__auto__,"cognitect.transit/t_cognitect$transit29723");
});

cognitect.transit.__GT_t_cognitect$transit29723 = (function cognitect$transit$__GT_t_cognitect$transit29723(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta29724){
return (new cognitect.transit.t_cognitect$transit29723(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta29724));
});

}

return (new cognitect.transit.t_cognitect$transit29723(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__25570__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__25570__auto__)){
return or__25570__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map?rel=1476657526995