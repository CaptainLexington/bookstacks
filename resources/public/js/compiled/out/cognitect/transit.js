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
var seq__31381_31385 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__31382_31386 = null;
var count__31383_31387 = (0);
var i__31384_31388 = (0);
while(true){
if((i__31384_31388 < count__31383_31387)){
var k_31389 = cljs.core._nth.call(null,chunk__31382_31386,i__31384_31388);
var v_31390 = (b[k_31389]);
(a[k_31389] = v_31390);

var G__31391 = seq__31381_31385;
var G__31392 = chunk__31382_31386;
var G__31393 = count__31383_31387;
var G__31394 = (i__31384_31388 + (1));
seq__31381_31385 = G__31391;
chunk__31382_31386 = G__31392;
count__31383_31387 = G__31393;
i__31384_31388 = G__31394;
continue;
} else {
var temp__4657__auto___31395 = cljs.core.seq.call(null,seq__31381_31385);
if(temp__4657__auto___31395){
var seq__31381_31396__$1 = temp__4657__auto___31395;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31381_31396__$1)){
var c__26387__auto___31397 = cljs.core.chunk_first.call(null,seq__31381_31396__$1);
var G__31398 = cljs.core.chunk_rest.call(null,seq__31381_31396__$1);
var G__31399 = c__26387__auto___31397;
var G__31400 = cljs.core.count.call(null,c__26387__auto___31397);
var G__31401 = (0);
seq__31381_31385 = G__31398;
chunk__31382_31386 = G__31399;
count__31383_31387 = G__31400;
i__31384_31388 = G__31401;
continue;
} else {
var k_31402 = cljs.core.first.call(null,seq__31381_31396__$1);
var v_31403 = (b[k_31402]);
(a[k_31402] = v_31403);

var G__31404 = cljs.core.next.call(null,seq__31381_31396__$1);
var G__31405 = null;
var G__31406 = (0);
var G__31407 = (0);
seq__31381_31385 = G__31404;
chunk__31382_31386 = G__31405;
count__31383_31387 = G__31406;
i__31384_31388 = G__31407;
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

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__26182__auto__,writer__26183__auto__,opt__26184__auto__){
return cljs.core._write.call(null,writer__26183__auto__,"cognitect.transit/MapBuilder");
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

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__26182__auto__,writer__26183__auto__,opt__26184__auto__){
return cljs.core._write.call(null,writer__26183__auto__,"cognitect.transit/VectorBuilder");
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
var args31408 = [];
var len__26651__auto___31411 = arguments.length;
var i__26652__auto___31412 = (0);
while(true){
if((i__26652__auto___31412 < len__26651__auto___31411)){
args31408.push((arguments[i__26652__auto___31412]));

var G__31413 = (i__26652__auto___31412 + (1));
i__26652__auto___31412 = G__31413;
continue;
} else {
}
break;
}

var G__31410 = args31408.length;
switch (G__31410) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31408.length)].join('')));

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
var G__31415 = (i + (2));
var G__31416 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__31415;
ret = G__31416;
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

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__26182__auto__,writer__26183__auto__,opt__26184__auto__){
return cljs.core._write.call(null,writer__26183__auto__,"cognitect.transit/KeywordHandler");
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

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__26182__auto__,writer__26183__auto__,opt__26184__auto__){
return cljs.core._write.call(null,writer__26183__auto__,"cognitect.transit/SymbolHandler");
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
var seq__31417_31421 = cljs.core.seq.call(null,v);
var chunk__31418_31422 = null;
var count__31419_31423 = (0);
var i__31420_31424 = (0);
while(true){
if((i__31420_31424 < count__31419_31423)){
var x_31425 = cljs.core._nth.call(null,chunk__31418_31422,i__31420_31424);
ret.push(x_31425);

var G__31426 = seq__31417_31421;
var G__31427 = chunk__31418_31422;
var G__31428 = count__31419_31423;
var G__31429 = (i__31420_31424 + (1));
seq__31417_31421 = G__31426;
chunk__31418_31422 = G__31427;
count__31419_31423 = G__31428;
i__31420_31424 = G__31429;
continue;
} else {
var temp__4657__auto___31430 = cljs.core.seq.call(null,seq__31417_31421);
if(temp__4657__auto___31430){
var seq__31417_31431__$1 = temp__4657__auto___31430;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31417_31431__$1)){
var c__26387__auto___31432 = cljs.core.chunk_first.call(null,seq__31417_31431__$1);
var G__31433 = cljs.core.chunk_rest.call(null,seq__31417_31431__$1);
var G__31434 = c__26387__auto___31432;
var G__31435 = cljs.core.count.call(null,c__26387__auto___31432);
var G__31436 = (0);
seq__31417_31421 = G__31433;
chunk__31418_31422 = G__31434;
count__31419_31423 = G__31435;
i__31420_31424 = G__31436;
continue;
} else {
var x_31437 = cljs.core.first.call(null,seq__31417_31431__$1);
ret.push(x_31437);

var G__31438 = cljs.core.next.call(null,seq__31417_31431__$1);
var G__31439 = null;
var G__31440 = (0);
var G__31441 = (0);
seq__31417_31421 = G__31438;
chunk__31418_31422 = G__31439;
count__31419_31423 = G__31440;
i__31420_31424 = G__31441;
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

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__26182__auto__,writer__26183__auto__,opt__26184__auto__){
return cljs.core._write.call(null,writer__26183__auto__,"cognitect.transit/ListHandler");
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

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__26182__auto__,writer__26183__auto__,opt__26184__auto__){
return cljs.core._write.call(null,writer__26183__auto__,"cognitect.transit/MapHandler");
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
var seq__31442_31446 = cljs.core.seq.call(null,v);
var chunk__31443_31447 = null;
var count__31444_31448 = (0);
var i__31445_31449 = (0);
while(true){
if((i__31445_31449 < count__31444_31448)){
var x_31450 = cljs.core._nth.call(null,chunk__31443_31447,i__31445_31449);
ret.push(x_31450);

var G__31451 = seq__31442_31446;
var G__31452 = chunk__31443_31447;
var G__31453 = count__31444_31448;
var G__31454 = (i__31445_31449 + (1));
seq__31442_31446 = G__31451;
chunk__31443_31447 = G__31452;
count__31444_31448 = G__31453;
i__31445_31449 = G__31454;
continue;
} else {
var temp__4657__auto___31455 = cljs.core.seq.call(null,seq__31442_31446);
if(temp__4657__auto___31455){
var seq__31442_31456__$1 = temp__4657__auto___31455;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31442_31456__$1)){
var c__26387__auto___31457 = cljs.core.chunk_first.call(null,seq__31442_31456__$1);
var G__31458 = cljs.core.chunk_rest.call(null,seq__31442_31456__$1);
var G__31459 = c__26387__auto___31457;
var G__31460 = cljs.core.count.call(null,c__26387__auto___31457);
var G__31461 = (0);
seq__31442_31446 = G__31458;
chunk__31443_31447 = G__31459;
count__31444_31448 = G__31460;
i__31445_31449 = G__31461;
continue;
} else {
var x_31462 = cljs.core.first.call(null,seq__31442_31456__$1);
ret.push(x_31462);

var G__31463 = cljs.core.next.call(null,seq__31442_31456__$1);
var G__31464 = null;
var G__31465 = (0);
var G__31466 = (0);
seq__31442_31446 = G__31463;
chunk__31443_31447 = G__31464;
count__31444_31448 = G__31465;
i__31445_31449 = G__31466;
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

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__26182__auto__,writer__26183__auto__,opt__26184__auto__){
return cljs.core._write.call(null,writer__26183__auto__,"cognitect.transit/SetHandler");
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
var seq__31467_31471 = cljs.core.seq.call(null,v);
var chunk__31468_31472 = null;
var count__31469_31473 = (0);
var i__31470_31474 = (0);
while(true){
if((i__31470_31474 < count__31469_31473)){
var x_31475 = cljs.core._nth.call(null,chunk__31468_31472,i__31470_31474);
ret.push(x_31475);

var G__31476 = seq__31467_31471;
var G__31477 = chunk__31468_31472;
var G__31478 = count__31469_31473;
var G__31479 = (i__31470_31474 + (1));
seq__31467_31471 = G__31476;
chunk__31468_31472 = G__31477;
count__31469_31473 = G__31478;
i__31470_31474 = G__31479;
continue;
} else {
var temp__4657__auto___31480 = cljs.core.seq.call(null,seq__31467_31471);
if(temp__4657__auto___31480){
var seq__31467_31481__$1 = temp__4657__auto___31480;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31467_31481__$1)){
var c__26387__auto___31482 = cljs.core.chunk_first.call(null,seq__31467_31481__$1);
var G__31483 = cljs.core.chunk_rest.call(null,seq__31467_31481__$1);
var G__31484 = c__26387__auto___31482;
var G__31485 = cljs.core.count.call(null,c__26387__auto___31482);
var G__31486 = (0);
seq__31467_31471 = G__31483;
chunk__31468_31472 = G__31484;
count__31469_31473 = G__31485;
i__31470_31474 = G__31486;
continue;
} else {
var x_31487 = cljs.core.first.call(null,seq__31467_31481__$1);
ret.push(x_31487);

var G__31488 = cljs.core.next.call(null,seq__31467_31481__$1);
var G__31489 = null;
var G__31490 = (0);
var G__31491 = (0);
seq__31467_31471 = G__31488;
chunk__31468_31472 = G__31489;
count__31469_31473 = G__31490;
i__31470_31474 = G__31491;
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

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__26182__auto__,writer__26183__auto__,opt__26184__auto__){
return cljs.core._write.call(null,writer__26183__auto__,"cognitect.transit/VectorHandler");
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

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__26182__auto__,writer__26183__auto__,opt__26184__auto__){
return cljs.core._write.call(null,writer__26183__auto__,"cognitect.transit/UUIDHandler");
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
var args31492 = [];
var len__26651__auto___31507 = arguments.length;
var i__26652__auto___31508 = (0);
while(true){
if((i__26652__auto___31508 < len__26651__auto___31507)){
args31492.push((arguments[i__26652__auto___31508]));

var G__31509 = (i__26652__auto___31508 + (1));
i__26652__auto___31508 = G__31509;
continue;
} else {
}
break;
}

var G__31494 = args31492.length;
switch (G__31494) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31492.length)].join('')));

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
var G__31495 = obj;
G__31495.push(kfn.call(null,k),vfn.call(null,v));

return G__31495;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x31496 = cljs.core.clone.call(null,handlers);
x31496.forEach = ((function (x31496,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__31497 = cljs.core.seq.call(null,coll);
var chunk__31498 = null;
var count__31499 = (0);
var i__31500 = (0);
while(true){
if((i__31500 < count__31499)){
var vec__31501 = cljs.core._nth.call(null,chunk__31498,i__31500);
var k = cljs.core.nth.call(null,vec__31501,(0),null);
var v = cljs.core.nth.call(null,vec__31501,(1),null);
f.call(null,v,k);

var G__31511 = seq__31497;
var G__31512 = chunk__31498;
var G__31513 = count__31499;
var G__31514 = (i__31500 + (1));
seq__31497 = G__31511;
chunk__31498 = G__31512;
count__31499 = G__31513;
i__31500 = G__31514;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31497);
if(temp__4657__auto__){
var seq__31497__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31497__$1)){
var c__26387__auto__ = cljs.core.chunk_first.call(null,seq__31497__$1);
var G__31515 = cljs.core.chunk_rest.call(null,seq__31497__$1);
var G__31516 = c__26387__auto__;
var G__31517 = cljs.core.count.call(null,c__26387__auto__);
var G__31518 = (0);
seq__31497 = G__31515;
chunk__31498 = G__31516;
count__31499 = G__31517;
i__31500 = G__31518;
continue;
} else {
var vec__31504 = cljs.core.first.call(null,seq__31497__$1);
var k = cljs.core.nth.call(null,vec__31504,(0),null);
var v = cljs.core.nth.call(null,vec__31504,(1),null);
f.call(null,v,k);

var G__31519 = cljs.core.next.call(null,seq__31497__$1);
var G__31520 = null;
var G__31521 = (0);
var G__31522 = (0);
seq__31497 = G__31519;
chunk__31498 = G__31520;
count__31499 = G__31521;
i__31500 = G__31522;
continue;
}
} else {
return null;
}
}
break;
}
});})(x31496,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x31496;
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
var args31523 = [];
var len__26651__auto___31529 = arguments.length;
var i__26652__auto___31530 = (0);
while(true){
if((i__26652__auto___31530 < len__26651__auto___31529)){
args31523.push((arguments[i__26652__auto___31530]));

var G__31531 = (i__26652__auto___31530 + (1));
i__26652__auto___31530 = G__31531;
continue;
} else {
}
break;
}

var G__31525 = args31523.length;
switch (G__31525) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31523.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit31526 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit31526 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta31527){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta31527 = meta31527;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit31526.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31528,meta31527__$1){
var self__ = this;
var _31528__$1 = this;
return (new cognitect.transit.t_cognitect$transit31526(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta31527__$1));
});

cognitect.transit.t_cognitect$transit31526.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31528){
var self__ = this;
var _31528__$1 = this;
return self__.meta31527;
});

cognitect.transit.t_cognitect$transit31526.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit31526.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit31526.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit31526.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit31526.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta31527","meta31527",154095749,null)], null);
});

cognitect.transit.t_cognitect$transit31526.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit31526.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit31526";

cognitect.transit.t_cognitect$transit31526.cljs$lang$ctorPrWriter = (function (this__26182__auto__,writer__26183__auto__,opt__26184__auto__){
return cljs.core._write.call(null,writer__26183__auto__,"cognitect.transit/t_cognitect$transit31526");
});

cognitect.transit.__GT_t_cognitect$transit31526 = (function cognitect$transit$__GT_t_cognitect$transit31526(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta31527){
return (new cognitect.transit.t_cognitect$transit31526(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta31527));
});

}

return (new cognitect.transit.t_cognitect$transit31526(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
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
var or__25576__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__25576__auto__)){
return or__25576__auto__;
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

//# sourceMappingURL=transit.js.map?rel=1480029280618