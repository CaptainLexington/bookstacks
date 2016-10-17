// Compiled by ClojureScript 1.9.89 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args31974 = [];
var len__26645__auto___31980 = arguments.length;
var i__26646__auto___31981 = (0);
while(true){
if((i__26646__auto___31981 < len__26645__auto___31980)){
args31974.push((arguments[i__26646__auto___31981]));

var G__31982 = (i__26646__auto___31981 + (1));
i__26646__auto___31981 = G__31982;
continue;
} else {
}
break;
}

var G__31976 = args31974.length;
switch (G__31976) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31974.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async31977 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31977 = (function (f,blockable,meta31978){
this.f = f;
this.blockable = blockable;
this.meta31978 = meta31978;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31977.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31979,meta31978__$1){
var self__ = this;
var _31979__$1 = this;
return (new cljs.core.async.t_cljs$core$async31977(self__.f,self__.blockable,meta31978__$1));
});

cljs.core.async.t_cljs$core$async31977.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31979){
var self__ = this;
var _31979__$1 = this;
return self__.meta31978;
});

cljs.core.async.t_cljs$core$async31977.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31977.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31977.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async31977.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async31977.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31978","meta31978",811973874,null)], null);
});

cljs.core.async.t_cljs$core$async31977.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31977.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31977";

cljs.core.async.t_cljs$core$async31977.cljs$lang$ctorPrWriter = (function (this__26176__auto__,writer__26177__auto__,opt__26178__auto__){
return cljs.core._write.call(null,writer__26177__auto__,"cljs.core.async/t_cljs$core$async31977");
});

cljs.core.async.__GT_t_cljs$core$async31977 = (function cljs$core$async$__GT_t_cljs$core$async31977(f__$1,blockable__$1,meta31978){
return (new cljs.core.async.t_cljs$core$async31977(f__$1,blockable__$1,meta31978));
});

}

return (new cljs.core.async.t_cljs$core$async31977(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args31986 = [];
var len__26645__auto___31989 = arguments.length;
var i__26646__auto___31990 = (0);
while(true){
if((i__26646__auto___31990 < len__26645__auto___31989)){
args31986.push((arguments[i__26646__auto___31990]));

var G__31991 = (i__26646__auto___31990 + (1));
i__26646__auto___31990 = G__31991;
continue;
} else {
}
break;
}

var G__31988 = args31986.length;
switch (G__31988) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31986.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args31993 = [];
var len__26645__auto___31996 = arguments.length;
var i__26646__auto___31997 = (0);
while(true){
if((i__26646__auto___31997 < len__26645__auto___31996)){
args31993.push((arguments[i__26646__auto___31997]));

var G__31998 = (i__26646__auto___31997 + (1));
i__26646__auto___31997 = G__31998;
continue;
} else {
}
break;
}

var G__31995 = args31993.length;
switch (G__31995) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31993.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args32000 = [];
var len__26645__auto___32003 = arguments.length;
var i__26646__auto___32004 = (0);
while(true){
if((i__26646__auto___32004 < len__26645__auto___32003)){
args32000.push((arguments[i__26646__auto___32004]));

var G__32005 = (i__26646__auto___32004 + (1));
i__26646__auto___32004 = G__32005;
continue;
} else {
}
break;
}

var G__32002 = args32000.length;
switch (G__32002) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32000.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_32007 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_32007);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_32007,ret){
return (function (){
return fn1.call(null,val_32007);
});})(val_32007,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args32008 = [];
var len__26645__auto___32011 = arguments.length;
var i__26646__auto___32012 = (0);
while(true){
if((i__26646__auto___32012 < len__26645__auto___32011)){
args32008.push((arguments[i__26646__auto___32012]));

var G__32013 = (i__26646__auto___32012 + (1));
i__26646__auto___32012 = G__32013;
continue;
} else {
}
break;
}

var G__32010 = args32008.length;
switch (G__32010) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32008.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__26485__auto___32015 = n;
var x_32016 = (0);
while(true){
if((x_32016 < n__26485__auto___32015)){
(a[x_32016] = (0));

var G__32017 = (x_32016 + (1));
x_32016 = G__32017;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__32018 = (i + (1));
i = G__32018;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async32022 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32022 = (function (alt_flag,flag,meta32023){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta32023 = meta32023;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32022.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_32024,meta32023__$1){
var self__ = this;
var _32024__$1 = this;
return (new cljs.core.async.t_cljs$core$async32022(self__.alt_flag,self__.flag,meta32023__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async32022.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_32024){
var self__ = this;
var _32024__$1 = this;
return self__.meta32023;
});})(flag))
;

cljs.core.async.t_cljs$core$async32022.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32022.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async32022.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32022.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32022.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32023","meta32023",-1340640022,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async32022.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32022.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32022";

cljs.core.async.t_cljs$core$async32022.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__26176__auto__,writer__26177__auto__,opt__26178__auto__){
return cljs.core._write.call(null,writer__26177__auto__,"cljs.core.async/t_cljs$core$async32022");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async32022 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32022(alt_flag__$1,flag__$1,meta32023){
return (new cljs.core.async.t_cljs$core$async32022(alt_flag__$1,flag__$1,meta32023));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async32022(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async32028 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32028 = (function (alt_handler,flag,cb,meta32029){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta32029 = meta32029;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32028.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32030,meta32029__$1){
var self__ = this;
var _32030__$1 = this;
return (new cljs.core.async.t_cljs$core$async32028(self__.alt_handler,self__.flag,self__.cb,meta32029__$1));
});

cljs.core.async.t_cljs$core$async32028.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32030){
var self__ = this;
var _32030__$1 = this;
return self__.meta32029;
});

cljs.core.async.t_cljs$core$async32028.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32028.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async32028.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32028.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async32028.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32029","meta32029",-308213290,null)], null);
});

cljs.core.async.t_cljs$core$async32028.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32028.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32028";

cljs.core.async.t_cljs$core$async32028.cljs$lang$ctorPrWriter = (function (this__26176__auto__,writer__26177__auto__,opt__26178__auto__){
return cljs.core._write.call(null,writer__26177__auto__,"cljs.core.async/t_cljs$core$async32028");
});

cljs.core.async.__GT_t_cljs$core$async32028 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32028(alt_handler__$1,flag__$1,cb__$1,meta32029){
return (new cljs.core.async.t_cljs$core$async32028(alt_handler__$1,flag__$1,cb__$1,meta32029));
});

}

return (new cljs.core.async.t_cljs$core$async32028(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32031_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32031_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32032_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32032_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__25570__auto__ = wport;
if(cljs.core.truth_(or__25570__auto__)){
return or__25570__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32033 = (i + (1));
i = G__32033;
continue;
}
} else {
return null;
}
break;
}
})();
var or__25570__auto__ = ret;
if(cljs.core.truth_(or__25570__auto__)){
return or__25570__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__25558__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__25558__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__25558__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__26652__auto__ = [];
var len__26645__auto___32039 = arguments.length;
var i__26646__auto___32040 = (0);
while(true){
if((i__26646__auto___32040 < len__26645__auto___32039)){
args__26652__auto__.push((arguments[i__26646__auto___32040]));

var G__32041 = (i__26646__auto___32040 + (1));
i__26646__auto___32040 = G__32041;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((1) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26653__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32036){
var map__32037 = p__32036;
var map__32037__$1 = ((((!((map__32037 == null)))?((((map__32037.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32037.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32037):map__32037);
var opts = map__32037__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32034){
var G__32035 = cljs.core.first.call(null,seq32034);
var seq32034__$1 = cljs.core.next.call(null,seq32034);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32035,seq32034__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args32042 = [];
var len__26645__auto___32092 = arguments.length;
var i__26646__auto___32093 = (0);
while(true){
if((i__26646__auto___32093 < len__26645__auto___32092)){
args32042.push((arguments[i__26646__auto___32093]));

var G__32094 = (i__26646__auto___32093 + (1));
i__26646__auto___32093 = G__32094;
continue;
} else {
}
break;
}

var G__32044 = args32042.length;
switch (G__32044) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32042.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__31929__auto___32096 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31929__auto___32096){
return (function (){
var f__31930__auto__ = (function (){var switch__31817__auto__ = ((function (c__31929__auto___32096){
return (function (state_32068){
var state_val_32069 = (state_32068[(1)]);
if((state_val_32069 === (7))){
var inst_32064 = (state_32068[(2)]);
var state_32068__$1 = state_32068;
var statearr_32070_32097 = state_32068__$1;
(statearr_32070_32097[(2)] = inst_32064);

(statearr_32070_32097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32069 === (1))){
var state_32068__$1 = state_32068;
var statearr_32071_32098 = state_32068__$1;
(statearr_32071_32098[(2)] = null);

(statearr_32071_32098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32069 === (4))){
var inst_32047 = (state_32068[(7)]);
var inst_32047__$1 = (state_32068[(2)]);
var inst_32048 = (inst_32047__$1 == null);
var state_32068__$1 = (function (){var statearr_32072 = state_32068;
(statearr_32072[(7)] = inst_32047__$1);

return statearr_32072;
})();
if(cljs.core.truth_(inst_32048)){
var statearr_32073_32099 = state_32068__$1;
(statearr_32073_32099[(1)] = (5));

} else {
var statearr_32074_32100 = state_32068__$1;
(statearr_32074_32100[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32069 === (13))){
var state_32068__$1 = state_32068;
var statearr_32075_32101 = state_32068__$1;
(statearr_32075_32101[(2)] = null);

(statearr_32075_32101[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32069 === (6))){
var inst_32047 = (state_32068[(7)]);
var state_32068__$1 = state_32068;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32068__$1,(11),to,inst_32047);
} else {
if((state_val_32069 === (3))){
var inst_32066 = (state_32068[(2)]);
var state_32068__$1 = state_32068;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32068__$1,inst_32066);
} else {
if((state_val_32069 === (12))){
var state_32068__$1 = state_32068;
var statearr_32076_32102 = state_32068__$1;
(statearr_32076_32102[(2)] = null);

(statearr_32076_32102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32069 === (2))){
var state_32068__$1 = state_32068;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32068__$1,(4),from);
} else {
if((state_val_32069 === (11))){
var inst_32057 = (state_32068[(2)]);
var state_32068__$1 = state_32068;
if(cljs.core.truth_(inst_32057)){
var statearr_32077_32103 = state_32068__$1;
(statearr_32077_32103[(1)] = (12));

} else {
var statearr_32078_32104 = state_32068__$1;
(statearr_32078_32104[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32069 === (9))){
var state_32068__$1 = state_32068;
var statearr_32079_32105 = state_32068__$1;
(statearr_32079_32105[(2)] = null);

(statearr_32079_32105[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32069 === (5))){
var state_32068__$1 = state_32068;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32080_32106 = state_32068__$1;
(statearr_32080_32106[(1)] = (8));

} else {
var statearr_32081_32107 = state_32068__$1;
(statearr_32081_32107[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32069 === (14))){
var inst_32062 = (state_32068[(2)]);
var state_32068__$1 = state_32068;
var statearr_32082_32108 = state_32068__$1;
(statearr_32082_32108[(2)] = inst_32062);

(statearr_32082_32108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32069 === (10))){
var inst_32054 = (state_32068[(2)]);
var state_32068__$1 = state_32068;
var statearr_32083_32109 = state_32068__$1;
(statearr_32083_32109[(2)] = inst_32054);

(statearr_32083_32109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32069 === (8))){
var inst_32051 = cljs.core.async.close_BANG_.call(null,to);
var state_32068__$1 = state_32068;
var statearr_32084_32110 = state_32068__$1;
(statearr_32084_32110[(2)] = inst_32051);

(statearr_32084_32110[(1)] = (10));


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
});})(c__31929__auto___32096))
;
return ((function (switch__31817__auto__,c__31929__auto___32096){
return (function() {
var cljs$core$async$state_machine__31818__auto__ = null;
var cljs$core$async$state_machine__31818__auto____0 = (function (){
var statearr_32088 = [null,null,null,null,null,null,null,null];
(statearr_32088[(0)] = cljs$core$async$state_machine__31818__auto__);

(statearr_32088[(1)] = (1));

return statearr_32088;
});
var cljs$core$async$state_machine__31818__auto____1 = (function (state_32068){
while(true){
var ret_value__31819__auto__ = (function (){try{while(true){
var result__31820__auto__ = switch__31817__auto__.call(null,state_32068);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31820__auto__;
}
break;
}
}catch (e32089){if((e32089 instanceof Object)){
var ex__31821__auto__ = e32089;
var statearr_32090_32111 = state_32068;
(statearr_32090_32111[(5)] = ex__31821__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32068);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32089;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32112 = state_32068;
state_32068 = G__32112;
continue;
} else {
return ret_value__31819__auto__;
}
break;
}
});
cljs$core$async$state_machine__31818__auto__ = function(state_32068){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31818__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31818__auto____1.call(this,state_32068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31818__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31818__auto____0;
cljs$core$async$state_machine__31818__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31818__auto____1;
return cljs$core$async$state_machine__31818__auto__;
})()
;})(switch__31817__auto__,c__31929__auto___32096))
})();
var state__31931__auto__ = (function (){var statearr_32091 = f__31930__auto__.call(null);
(statearr_32091[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31929__auto___32096);

return statearr_32091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31931__auto__);
});})(c__31929__auto___32096))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__32300){
var vec__32301 = p__32300;
var v = cljs.core.nth.call(null,vec__32301,(0),null);
var p = cljs.core.nth.call(null,vec__32301,(1),null);
var job = vec__32301;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__31929__auto___32487 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31929__auto___32487,res,vec__32301,v,p,job,jobs,results){
return (function (){
var f__31930__auto__ = (function (){var switch__31817__auto__ = ((function (c__31929__auto___32487,res,vec__32301,v,p,job,jobs,results){
return (function (state_32308){
var state_val_32309 = (state_32308[(1)]);
if((state_val_32309 === (1))){
var state_32308__$1 = state_32308;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32308__$1,(2),res,v);
} else {
if((state_val_32309 === (2))){
var inst_32305 = (state_32308[(2)]);
var inst_32306 = cljs.core.async.close_BANG_.call(null,res);
var state_32308__$1 = (function (){var statearr_32310 = state_32308;
(statearr_32310[(7)] = inst_32305);

return statearr_32310;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32308__$1,inst_32306);
} else {
return null;
}
}
});})(c__31929__auto___32487,res,vec__32301,v,p,job,jobs,results))
;
return ((function (switch__31817__auto__,c__31929__auto___32487,res,vec__32301,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31818__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31818__auto____0 = (function (){
var statearr_32314 = [null,null,null,null,null,null,null,null];
(statearr_32314[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31818__auto__);

(statearr_32314[(1)] = (1));

return statearr_32314;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31818__auto____1 = (function (state_32308){
while(true){
var ret_value__31819__auto__ = (function (){try{while(true){
var result__31820__auto__ = switch__31817__auto__.call(null,state_32308);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31820__auto__;
}
break;
}
}catch (e32315){if((e32315 instanceof Object)){
var ex__31821__auto__ = e32315;
var statearr_32316_32488 = state_32308;
(statearr_32316_32488[(5)] = ex__31821__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32308);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32315;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32489 = state_32308;
state_32308 = G__32489;
continue;
} else {
return ret_value__31819__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31818__auto__ = function(state_32308){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31818__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31818__auto____1.call(this,state_32308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31818__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31818__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31818__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31818__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31818__auto__;
})()
;})(switch__31817__auto__,c__31929__auto___32487,res,vec__32301,v,p,job,jobs,results))
})();
var state__31931__auto__ = (function (){var statearr_32317 = f__31930__auto__.call(null);
(statearr_32317[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31929__auto___32487);

return statearr_32317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31931__auto__);
});})(c__31929__auto___32487,res,vec__32301,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__32318){
var vec__32319 = p__32318;
var v = cljs.core.nth.call(null,vec__32319,(0),null);
var p = cljs.core.nth.call(null,vec__32319,(1),null);
var job = vec__32319;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__26485__auto___32490 = n;
var __32491 = (0);
while(true){
if((__32491 < n__26485__auto___32490)){
var G__32322_32492 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__32322_32492) {
case "compute":
var c__31929__auto___32494 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32491,c__31929__auto___32494,G__32322_32492,n__26485__auto___32490,jobs,results,process,async){
return (function (){
var f__31930__auto__ = (function (){var switch__31817__auto__ = ((function (__32491,c__31929__auto___32494,G__32322_32492,n__26485__auto___32490,jobs,results,process,async){
return (function (state_32335){
var state_val_32336 = (state_32335[(1)]);
if((state_val_32336 === (1))){
var state_32335__$1 = state_32335;
var statearr_32337_32495 = state_32335__$1;
(statearr_32337_32495[(2)] = null);

(statearr_32337_32495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32336 === (2))){
var state_32335__$1 = state_32335;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32335__$1,(4),jobs);
} else {
if((state_val_32336 === (3))){
var inst_32333 = (state_32335[(2)]);
var state_32335__$1 = state_32335;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32335__$1,inst_32333);
} else {
if((state_val_32336 === (4))){
var inst_32325 = (state_32335[(2)]);
var inst_32326 = process.call(null,inst_32325);
var state_32335__$1 = state_32335;
if(cljs.core.truth_(inst_32326)){
var statearr_32338_32496 = state_32335__$1;
(statearr_32338_32496[(1)] = (5));

} else {
var statearr_32339_32497 = state_32335__$1;
(statearr_32339_32497[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32336 === (5))){
var state_32335__$1 = state_32335;
var statearr_32340_32498 = state_32335__$1;
(statearr_32340_32498[(2)] = null);

(statearr_32340_32498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32336 === (6))){
var state_32335__$1 = state_32335;
var statearr_32341_32499 = state_32335__$1;
(statearr_32341_32499[(2)] = null);

(statearr_32341_32499[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32336 === (7))){
var inst_32331 = (state_32335[(2)]);
var state_32335__$1 = state_32335;
var statearr_32342_32500 = state_32335__$1;
(statearr_32342_32500[(2)] = inst_32331);

(statearr_32342_32500[(1)] = (3));


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
});})(__32491,c__31929__auto___32494,G__32322_32492,n__26485__auto___32490,jobs,results,process,async))
;
return ((function (__32491,switch__31817__auto__,c__31929__auto___32494,G__32322_32492,n__26485__auto___32490,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31818__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31818__auto____0 = (function (){
var statearr_32346 = [null,null,null,null,null,null,null];
(statearr_32346[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31818__auto__);

(statearr_32346[(1)] = (1));

return statearr_32346;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31818__auto____1 = (function (state_32335){
while(true){
var ret_value__31819__auto__ = (function (){try{while(true){
var result__31820__auto__ = switch__31817__auto__.call(null,state_32335);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31820__auto__;
}
break;
}
}catch (e32347){if((e32347 instanceof Object)){
var ex__31821__auto__ = e32347;
var statearr_32348_32501 = state_32335;
(statearr_32348_32501[(5)] = ex__31821__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32335);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32347;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32502 = state_32335;
state_32335 = G__32502;
continue;
} else {
return ret_value__31819__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31818__auto__ = function(state_32335){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31818__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31818__auto____1.call(this,state_32335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31818__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31818__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31818__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31818__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31818__auto__;
})()
;})(__32491,switch__31817__auto__,c__31929__auto___32494,G__32322_32492,n__26485__auto___32490,jobs,results,process,async))
})();
var state__31931__auto__ = (function (){var statearr_32349 = f__31930__auto__.call(null);
(statearr_32349[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31929__auto___32494);

return statearr_32349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31931__auto__);
});})(__32491,c__31929__auto___32494,G__32322_32492,n__26485__auto___32490,jobs,results,process,async))
);


break;
case "async":
var c__31929__auto___32503 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32491,c__31929__auto___32503,G__32322_32492,n__26485__auto___32490,jobs,results,process,async){
return (function (){
var f__31930__auto__ = (function (){var switch__31817__auto__ = ((function (__32491,c__31929__auto___32503,G__32322_32492,n__26485__auto___32490,jobs,results,process,async){
return (function (state_32362){
var state_val_32363 = (state_32362[(1)]);
if((state_val_32363 === (1))){
var state_32362__$1 = state_32362;
var statearr_32364_32504 = state_32362__$1;
(statearr_32364_32504[(2)] = null);

(statearr_32364_32504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32363 === (2))){
var state_32362__$1 = state_32362;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32362__$1,(4),jobs);
} else {
if((state_val_32363 === (3))){
var inst_32360 = (state_32362[(2)]);
var state_32362__$1 = state_32362;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32362__$1,inst_32360);
} else {
if((state_val_32363 === (4))){
var inst_32352 = (state_32362[(2)]);
var inst_32353 = async.call(null,inst_32352);
var state_32362__$1 = state_32362;
if(cljs.core.truth_(inst_32353)){
var statearr_32365_32505 = state_32362__$1;
(statearr_32365_32505[(1)] = (5));

} else {
var statearr_32366_32506 = state_32362__$1;
(statearr_32366_32506[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32363 === (5))){
var state_32362__$1 = state_32362;
var statearr_32367_32507 = state_32362__$1;
(statearr_32367_32507[(2)] = null);

(statearr_32367_32507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32363 === (6))){
var state_32362__$1 = state_32362;
var statearr_32368_32508 = state_32362__$1;
(statearr_32368_32508[(2)] = null);

(statearr_32368_32508[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32363 === (7))){
var inst_32358 = (state_32362[(2)]);
var state_32362__$1 = state_32362;
var statearr_32369_32509 = state_32362__$1;
(statearr_32369_32509[(2)] = inst_32358);

(statearr_32369_32509[(1)] = (3));


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
});})(__32491,c__31929__auto___32503,G__32322_32492,n__26485__auto___32490,jobs,results,process,async))
;
return ((function (__32491,switch__31817__auto__,c__31929__auto___32503,G__32322_32492,n__26485__auto___32490,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31818__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31818__auto____0 = (function (){
var statearr_32373 = [null,null,null,null,null,null,null];
(statearr_32373[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31818__auto__);

(statearr_32373[(1)] = (1));

return statearr_32373;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31818__auto____1 = (function (state_32362){
while(true){
var ret_value__31819__auto__ = (function (){try{while(true){
var result__31820__auto__ = switch__31817__auto__.call(null,state_32362);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31820__auto__;
}
break;
}
}catch (e32374){if((e32374 instanceof Object)){
var ex__31821__auto__ = e32374;
var statearr_32375_32510 = state_32362;
(statearr_32375_32510[(5)] = ex__31821__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32362);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32374;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32511 = state_32362;
state_32362 = G__32511;
continue;
} else {
return ret_value__31819__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31818__auto__ = function(state_32362){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31818__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31818__auto____1.call(this,state_32362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31818__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31818__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31818__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31818__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31818__auto__;
})()
;})(__32491,switch__31817__auto__,c__31929__auto___32503,G__32322_32492,n__26485__auto___32490,jobs,results,process,async))
})();
var state__31931__auto__ = (function (){var statearr_32376 = f__31930__auto__.call(null);
(statearr_32376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31929__auto___32503);

return statearr_32376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31931__auto__);
});})(__32491,c__31929__auto___32503,G__32322_32492,n__26485__auto___32490,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__32512 = (__32491 + (1));
__32491 = G__32512;
continue;
} else {
}
break;
}

var c__31929__auto___32513 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31929__auto___32513,jobs,results,process,async){
return (function (){
var f__31930__auto__ = (function (){var switch__31817__auto__ = ((function (c__31929__auto___32513,jobs,results,process,async){
return (function (state_32398){
var state_val_32399 = (state_32398[(1)]);
if((state_val_32399 === (1))){
var state_32398__$1 = state_32398;
var statearr_32400_32514 = state_32398__$1;
(statearr_32400_32514[(2)] = null);

(statearr_32400_32514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32399 === (2))){
var state_32398__$1 = state_32398;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32398__$1,(4),from);
} else {
if((state_val_32399 === (3))){
var inst_32396 = (state_32398[(2)]);
var state_32398__$1 = state_32398;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32398__$1,inst_32396);
} else {
if((state_val_32399 === (4))){
var inst_32379 = (state_32398[(7)]);
var inst_32379__$1 = (state_32398[(2)]);
var inst_32380 = (inst_32379__$1 == null);
var state_32398__$1 = (function (){var statearr_32401 = state_32398;
(statearr_32401[(7)] = inst_32379__$1);

return statearr_32401;
})();
if(cljs.core.truth_(inst_32380)){
var statearr_32402_32515 = state_32398__$1;
(statearr_32402_32515[(1)] = (5));

} else {
var statearr_32403_32516 = state_32398__$1;
(statearr_32403_32516[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32399 === (5))){
var inst_32382 = cljs.core.async.close_BANG_.call(null,jobs);
var state_32398__$1 = state_32398;
var statearr_32404_32517 = state_32398__$1;
(statearr_32404_32517[(2)] = inst_32382);

(statearr_32404_32517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32399 === (6))){
var inst_32379 = (state_32398[(7)]);
var inst_32384 = (state_32398[(8)]);
var inst_32384__$1 = cljs.core.async.chan.call(null,(1));
var inst_32385 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32386 = [inst_32379,inst_32384__$1];
var inst_32387 = (new cljs.core.PersistentVector(null,2,(5),inst_32385,inst_32386,null));
var state_32398__$1 = (function (){var statearr_32405 = state_32398;
(statearr_32405[(8)] = inst_32384__$1);

return statearr_32405;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32398__$1,(8),jobs,inst_32387);
} else {
if((state_val_32399 === (7))){
var inst_32394 = (state_32398[(2)]);
var state_32398__$1 = state_32398;
var statearr_32406_32518 = state_32398__$1;
(statearr_32406_32518[(2)] = inst_32394);

(statearr_32406_32518[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32399 === (8))){
var inst_32384 = (state_32398[(8)]);
var inst_32389 = (state_32398[(2)]);
var state_32398__$1 = (function (){var statearr_32407 = state_32398;
(statearr_32407[(9)] = inst_32389);

return statearr_32407;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32398__$1,(9),results,inst_32384);
} else {
if((state_val_32399 === (9))){
var inst_32391 = (state_32398[(2)]);
var state_32398__$1 = (function (){var statearr_32408 = state_32398;
(statearr_32408[(10)] = inst_32391);

return statearr_32408;
})();
var statearr_32409_32519 = state_32398__$1;
(statearr_32409_32519[(2)] = null);

(statearr_32409_32519[(1)] = (2));


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
});})(c__31929__auto___32513,jobs,results,process,async))
;
return ((function (switch__31817__auto__,c__31929__auto___32513,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31818__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31818__auto____0 = (function (){
var statearr_32413 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32413[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31818__auto__);

(statearr_32413[(1)] = (1));

return statearr_32413;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31818__auto____1 = (function (state_32398){
while(true){
var ret_value__31819__auto__ = (function (){try{while(true){
var result__31820__auto__ = switch__31817__auto__.call(null,state_32398);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31820__auto__;
}
break;
}
}catch (e32414){if((e32414 instanceof Object)){
var ex__31821__auto__ = e32414;
var statearr_32415_32520 = state_32398;
(statearr_32415_32520[(5)] = ex__31821__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32398);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32414;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32521 = state_32398;
state_32398 = G__32521;
continue;
} else {
return ret_value__31819__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31818__auto__ = function(state_32398){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31818__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31818__auto____1.call(this,state_32398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31818__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31818__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31818__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31818__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31818__auto__;
})()
;})(switch__31817__auto__,c__31929__auto___32513,jobs,results,process,async))
})();
var state__31931__auto__ = (function (){var statearr_32416 = f__31930__auto__.call(null);
(statearr_32416[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31929__auto___32513);

return statearr_32416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31931__auto__);
});})(c__31929__auto___32513,jobs,results,process,async))
);


var c__31929__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31929__auto__,jobs,results,process,async){
return (function (){
var f__31930__auto__ = (function (){var switch__31817__auto__ = ((function (c__31929__auto__,jobs,results,process,async){
return (function (state_32454){
var state_val_32455 = (state_32454[(1)]);
if((state_val_32455 === (7))){
var inst_32450 = (state_32454[(2)]);
var state_32454__$1 = state_32454;
var statearr_32456_32522 = state_32454__$1;
(statearr_32456_32522[(2)] = inst_32450);

(statearr_32456_32522[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (20))){
var state_32454__$1 = state_32454;
var statearr_32457_32523 = state_32454__$1;
(statearr_32457_32523[(2)] = null);

(statearr_32457_32523[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (1))){
var state_32454__$1 = state_32454;
var statearr_32458_32524 = state_32454__$1;
(statearr_32458_32524[(2)] = null);

(statearr_32458_32524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (4))){
var inst_32419 = (state_32454[(7)]);
var inst_32419__$1 = (state_32454[(2)]);
var inst_32420 = (inst_32419__$1 == null);
var state_32454__$1 = (function (){var statearr_32459 = state_32454;
(statearr_32459[(7)] = inst_32419__$1);

return statearr_32459;
})();
if(cljs.core.truth_(inst_32420)){
var statearr_32460_32525 = state_32454__$1;
(statearr_32460_32525[(1)] = (5));

} else {
var statearr_32461_32526 = state_32454__$1;
(statearr_32461_32526[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (15))){
var inst_32432 = (state_32454[(8)]);
var state_32454__$1 = state_32454;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32454__$1,(18),to,inst_32432);
} else {
if((state_val_32455 === (21))){
var inst_32445 = (state_32454[(2)]);
var state_32454__$1 = state_32454;
var statearr_32462_32527 = state_32454__$1;
(statearr_32462_32527[(2)] = inst_32445);

(statearr_32462_32527[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (13))){
var inst_32447 = (state_32454[(2)]);
var state_32454__$1 = (function (){var statearr_32463 = state_32454;
(statearr_32463[(9)] = inst_32447);

return statearr_32463;
})();
var statearr_32464_32528 = state_32454__$1;
(statearr_32464_32528[(2)] = null);

(statearr_32464_32528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (6))){
var inst_32419 = (state_32454[(7)]);
var state_32454__$1 = state_32454;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32454__$1,(11),inst_32419);
} else {
if((state_val_32455 === (17))){
var inst_32440 = (state_32454[(2)]);
var state_32454__$1 = state_32454;
if(cljs.core.truth_(inst_32440)){
var statearr_32465_32529 = state_32454__$1;
(statearr_32465_32529[(1)] = (19));

} else {
var statearr_32466_32530 = state_32454__$1;
(statearr_32466_32530[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (3))){
var inst_32452 = (state_32454[(2)]);
var state_32454__$1 = state_32454;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32454__$1,inst_32452);
} else {
if((state_val_32455 === (12))){
var inst_32429 = (state_32454[(10)]);
var state_32454__$1 = state_32454;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32454__$1,(14),inst_32429);
} else {
if((state_val_32455 === (2))){
var state_32454__$1 = state_32454;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32454__$1,(4),results);
} else {
if((state_val_32455 === (19))){
var state_32454__$1 = state_32454;
var statearr_32467_32531 = state_32454__$1;
(statearr_32467_32531[(2)] = null);

(statearr_32467_32531[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (11))){
var inst_32429 = (state_32454[(2)]);
var state_32454__$1 = (function (){var statearr_32468 = state_32454;
(statearr_32468[(10)] = inst_32429);

return statearr_32468;
})();
var statearr_32469_32532 = state_32454__$1;
(statearr_32469_32532[(2)] = null);

(statearr_32469_32532[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (9))){
var state_32454__$1 = state_32454;
var statearr_32470_32533 = state_32454__$1;
(statearr_32470_32533[(2)] = null);

(statearr_32470_32533[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (5))){
var state_32454__$1 = state_32454;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32471_32534 = state_32454__$1;
(statearr_32471_32534[(1)] = (8));

} else {
var statearr_32472_32535 = state_32454__$1;
(statearr_32472_32535[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (14))){
var inst_32434 = (state_32454[(11)]);
var inst_32432 = (state_32454[(8)]);
var inst_32432__$1 = (state_32454[(2)]);
var inst_32433 = (inst_32432__$1 == null);
var inst_32434__$1 = cljs.core.not.call(null,inst_32433);
var state_32454__$1 = (function (){var statearr_32473 = state_32454;
(statearr_32473[(11)] = inst_32434__$1);

(statearr_32473[(8)] = inst_32432__$1);

return statearr_32473;
})();
if(inst_32434__$1){
var statearr_32474_32536 = state_32454__$1;
(statearr_32474_32536[(1)] = (15));

} else {
var statearr_32475_32537 = state_32454__$1;
(statearr_32475_32537[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (16))){
var inst_32434 = (state_32454[(11)]);
var state_32454__$1 = state_32454;
var statearr_32476_32538 = state_32454__$1;
(statearr_32476_32538[(2)] = inst_32434);

(statearr_32476_32538[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (10))){
var inst_32426 = (state_32454[(2)]);
var state_32454__$1 = state_32454;
var statearr_32477_32539 = state_32454__$1;
(statearr_32477_32539[(2)] = inst_32426);

(statearr_32477_32539[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (18))){
var inst_32437 = (state_32454[(2)]);
var state_32454__$1 = state_32454;
var statearr_32478_32540 = state_32454__$1;
(statearr_32478_32540[(2)] = inst_32437);

(statearr_32478_32540[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (8))){
var inst_32423 = cljs.core.async.close_BANG_.call(null,to);
var state_32454__$1 = state_32454;
var statearr_32479_32541 = state_32454__$1;
(statearr_32479_32541[(2)] = inst_32423);

(statearr_32479_32541[(1)] = (10));


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
});})(c__31929__auto__,jobs,results,process,async))
;
return ((function (switch__31817__auto__,c__31929__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31818__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31818__auto____0 = (function (){
var statearr_32483 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32483[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31818__auto__);

(statearr_32483[(1)] = (1));

return statearr_32483;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31818__auto____1 = (function (state_32454){
while(true){
var ret_value__31819__auto__ = (function (){try{while(true){
var result__31820__auto__ = switch__31817__auto__.call(null,state_32454);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31820__auto__;
}
break;
}
}catch (e32484){if((e32484 instanceof Object)){
var ex__31821__auto__ = e32484;
var statearr_32485_32542 = state_32454;
(statearr_32485_32542[(5)] = ex__31821__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32454);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32484;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32543 = state_32454;
state_32454 = G__32543;
continue;
} else {
return ret_value__31819__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31818__auto__ = function(state_32454){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31818__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31818__auto____1.call(this,state_32454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31818__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31818__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31818__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31818__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31818__auto__;
})()
;})(switch__31817__auto__,c__31929__auto__,jobs,results,process,async))
})();
var state__31931__auto__ = (function (){var statearr_32486 = f__31930__auto__.call(null);
(statearr_32486[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31929__auto__);

return statearr_32486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31931__auto__);
});})(c__31929__auto__,jobs,results,process,async))
);

return c__31929__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args32544 = [];
var len__26645__auto___32547 = arguments.length;
var i__26646__auto___32548 = (0);
while(true){
if((i__26646__auto___32548 < len__26645__auto___32547)){
args32544.push((arguments[i__26646__auto___32548]));

var G__32549 = (i__26646__auto___32548 + (1));
i__26646__auto___32548 = G__32549;
continue;
} else {
}
break;
}

var G__32546 = args32544.length;
switch (G__32546) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32544.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args32551 = [];
var len__26645__auto___32554 = arguments.length;
var i__26646__auto___32555 = (0);
while(true){
if((i__26646__auto___32555 < len__26645__auto___32554)){
args32551.push((arguments[i__26646__auto___32555]));

var G__32556 = (i__26646__auto___32555 + (1));
i__26646__auto___32555 = G__32556;
continue;
} else {
}
break;
}

var G__32553 = args32551.length;
switch (G__32553) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32551.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args32558 = [];
var len__26645__auto___32611 = arguments.length;
var i__26646__auto___32612 = (0);
while(true){
if((i__26646__auto___32612 < len__26645__auto___32611)){
args32558.push((arguments[i__26646__auto___32612]));

var G__32613 = (i__26646__auto___32612 + (1));
i__26646__auto___32612 = G__32613;
continue;
} else {
}
break;
}

var G__32560 = args32558.length;
switch (G__32560) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32558.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__31929__auto___32615 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31929__auto___32615,tc,fc){
return (function (){
var f__31930__auto__ = (function (){var switch__31817__auto__ = ((function (c__31929__auto___32615,tc,fc){
return (function (state_32586){
var state_val_32587 = (state_32586[(1)]);
if((state_val_32587 === (7))){
var inst_32582 = (state_32586[(2)]);
var state_32586__$1 = state_32586;
var statearr_32588_32616 = state_32586__$1;
(statearr_32588_32616[(2)] = inst_32582);

(statearr_32588_32616[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32587 === (1))){
var state_32586__$1 = state_32586;
var statearr_32589_32617 = state_32586__$1;
(statearr_32589_32617[(2)] = null);

(statearr_32589_32617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32587 === (4))){
var inst_32563 = (state_32586[(7)]);
var inst_32563__$1 = (state_32586[(2)]);
var inst_32564 = (inst_32563__$1 == null);
var state_32586__$1 = (function (){var statearr_32590 = state_32586;
(statearr_32590[(7)] = inst_32563__$1);

return statearr_32590;
})();
if(cljs.core.truth_(inst_32564)){
var statearr_32591_32618 = state_32586__$1;
(statearr_32591_32618[(1)] = (5));

} else {
var statearr_32592_32619 = state_32586__$1;
(statearr_32592_32619[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32587 === (13))){
var state_32586__$1 = state_32586;
var statearr_32593_32620 = state_32586__$1;
(statearr_32593_32620[(2)] = null);

(statearr_32593_32620[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32587 === (6))){
var inst_32563 = (state_32586[(7)]);
var inst_32569 = p.call(null,inst_32563);
var state_32586__$1 = state_32586;
if(cljs.core.truth_(inst_32569)){
var statearr_32594_32621 = state_32586__$1;
(statearr_32594_32621[(1)] = (9));

} else {
var statearr_32595_32622 = state_32586__$1;
(statearr_32595_32622[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32587 === (3))){
var inst_32584 = (state_32586[(2)]);
var state_32586__$1 = state_32586;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32586__$1,inst_32584);
} else {
if((state_val_32587 === (12))){
var state_32586__$1 = state_32586;
var statearr_32596_32623 = state_32586__$1;
(statearr_32596_32623[(2)] = null);

(statearr_32596_32623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32587 === (2))){
var state_32586__$1 = state_32586;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32586__$1,(4),ch);
} else {
if((state_val_32587 === (11))){
var inst_32563 = (state_32586[(7)]);
var inst_32573 = (state_32586[(2)]);
var state_32586__$1 = state_32586;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32586__$1,(8),inst_32573,inst_32563);
} else {
if((state_val_32587 === (9))){
var state_32586__$1 = state_32586;
var statearr_32597_32624 = state_32586__$1;
(statearr_32597_32624[(2)] = tc);

(statearr_32597_32624[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32587 === (5))){
var inst_32566 = cljs.core.async.close_BANG_.call(null,tc);
var inst_32567 = cljs.core.async.close_BANG_.call(null,fc);
var state_32586__$1 = (function (){var statearr_32598 = state_32586;
(statearr_32598[(8)] = inst_32566);

return statearr_32598;
})();
var statearr_32599_32625 = state_32586__$1;
(statearr_32599_32625[(2)] = inst_32567);

(statearr_32599_32625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32587 === (14))){
var inst_32580 = (state_32586[(2)]);
var state_32586__$1 = state_32586;
var statearr_32600_32626 = state_32586__$1;
(statearr_32600_32626[(2)] = inst_32580);

(statearr_32600_32626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32587 === (10))){
var state_32586__$1 = state_32586;
var statearr_32601_32627 = state_32586__$1;
(statearr_32601_32627[(2)] = fc);

(statearr_32601_32627[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32587 === (8))){
var inst_32575 = (state_32586[(2)]);
var state_32586__$1 = state_32586;
if(cljs.core.truth_(inst_32575)){
var statearr_32602_32628 = state_32586__$1;
(statearr_32602_32628[(1)] = (12));

} else {
var statearr_32603_32629 = state_32586__$1;
(statearr_32603_32629[(1)] = (13));

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
});})(c__31929__auto___32615,tc,fc))
;
return ((function (switch__31817__auto__,c__31929__auto___32615,tc,fc){
return (function() {
var cljs$core$async$state_machine__31818__auto__ = null;
var cljs$core$async$state_machine__31818__auto____0 = (function (){
var statearr_32607 = [null,null,null,null,null,null,null,null,null];
(statearr_32607[(0)] = cljs$core$async$state_machine__31818__auto__);

(statearr_32607[(1)] = (1));

return statearr_32607;
});
var cljs$core$async$state_machine__31818__auto____1 = (function (state_32586){
while(true){
var ret_value__31819__auto__ = (function (){try{while(true){
var result__31820__auto__ = switch__31817__auto__.call(null,state_32586);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31820__auto__;
}
break;
}
}catch (e32608){if((e32608 instanceof Object)){
var ex__31821__auto__ = e32608;
var statearr_32609_32630 = state_32586;
(statearr_32609_32630[(5)] = ex__31821__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32586);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32608;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32631 = state_32586;
state_32586 = G__32631;
continue;
} else {
return ret_value__31819__auto__;
}
break;
}
});
cljs$core$async$state_machine__31818__auto__ = function(state_32586){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31818__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31818__auto____1.call(this,state_32586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31818__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31818__auto____0;
cljs$core$async$state_machine__31818__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31818__auto____1;
return cljs$core$async$state_machine__31818__auto__;
})()
;})(switch__31817__auto__,c__31929__auto___32615,tc,fc))
})();
var state__31931__auto__ = (function (){var statearr_32610 = f__31930__auto__.call(null);
(statearr_32610[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31929__auto___32615);

return statearr_32610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31931__auto__);
});})(c__31929__auto___32615,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__31929__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31929__auto__){
return (function (){
var f__31930__auto__ = (function (){var switch__31817__auto__ = ((function (c__31929__auto__){
return (function (state_32695){
var state_val_32696 = (state_32695[(1)]);
if((state_val_32696 === (7))){
var inst_32691 = (state_32695[(2)]);
var state_32695__$1 = state_32695;
var statearr_32697_32718 = state_32695__$1;
(statearr_32697_32718[(2)] = inst_32691);

(statearr_32697_32718[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32696 === (1))){
var inst_32675 = init;
var state_32695__$1 = (function (){var statearr_32698 = state_32695;
(statearr_32698[(7)] = inst_32675);

return statearr_32698;
})();
var statearr_32699_32719 = state_32695__$1;
(statearr_32699_32719[(2)] = null);

(statearr_32699_32719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32696 === (4))){
var inst_32678 = (state_32695[(8)]);
var inst_32678__$1 = (state_32695[(2)]);
var inst_32679 = (inst_32678__$1 == null);
var state_32695__$1 = (function (){var statearr_32700 = state_32695;
(statearr_32700[(8)] = inst_32678__$1);

return statearr_32700;
})();
if(cljs.core.truth_(inst_32679)){
var statearr_32701_32720 = state_32695__$1;
(statearr_32701_32720[(1)] = (5));

} else {
var statearr_32702_32721 = state_32695__$1;
(statearr_32702_32721[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32696 === (6))){
var inst_32682 = (state_32695[(9)]);
var inst_32675 = (state_32695[(7)]);
var inst_32678 = (state_32695[(8)]);
var inst_32682__$1 = f.call(null,inst_32675,inst_32678);
var inst_32683 = cljs.core.reduced_QMARK_.call(null,inst_32682__$1);
var state_32695__$1 = (function (){var statearr_32703 = state_32695;
(statearr_32703[(9)] = inst_32682__$1);

return statearr_32703;
})();
if(inst_32683){
var statearr_32704_32722 = state_32695__$1;
(statearr_32704_32722[(1)] = (8));

} else {
var statearr_32705_32723 = state_32695__$1;
(statearr_32705_32723[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32696 === (3))){
var inst_32693 = (state_32695[(2)]);
var state_32695__$1 = state_32695;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32695__$1,inst_32693);
} else {
if((state_val_32696 === (2))){
var state_32695__$1 = state_32695;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32695__$1,(4),ch);
} else {
if((state_val_32696 === (9))){
var inst_32682 = (state_32695[(9)]);
var inst_32675 = inst_32682;
var state_32695__$1 = (function (){var statearr_32706 = state_32695;
(statearr_32706[(7)] = inst_32675);

return statearr_32706;
})();
var statearr_32707_32724 = state_32695__$1;
(statearr_32707_32724[(2)] = null);

(statearr_32707_32724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32696 === (5))){
var inst_32675 = (state_32695[(7)]);
var state_32695__$1 = state_32695;
var statearr_32708_32725 = state_32695__$1;
(statearr_32708_32725[(2)] = inst_32675);

(statearr_32708_32725[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32696 === (10))){
var inst_32689 = (state_32695[(2)]);
var state_32695__$1 = state_32695;
var statearr_32709_32726 = state_32695__$1;
(statearr_32709_32726[(2)] = inst_32689);

(statearr_32709_32726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32696 === (8))){
var inst_32682 = (state_32695[(9)]);
var inst_32685 = cljs.core.deref.call(null,inst_32682);
var state_32695__$1 = state_32695;
var statearr_32710_32727 = state_32695__$1;
(statearr_32710_32727[(2)] = inst_32685);

(statearr_32710_32727[(1)] = (10));


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
});})(c__31929__auto__))
;
return ((function (switch__31817__auto__,c__31929__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__31818__auto__ = null;
var cljs$core$async$reduce_$_state_machine__31818__auto____0 = (function (){
var statearr_32714 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32714[(0)] = cljs$core$async$reduce_$_state_machine__31818__auto__);

(statearr_32714[(1)] = (1));

return statearr_32714;
});
var cljs$core$async$reduce_$_state_machine__31818__auto____1 = (function (state_32695){
while(true){
var ret_value__31819__auto__ = (function (){try{while(true){
var result__31820__auto__ = switch__31817__auto__.call(null,state_32695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31820__auto__;
}
break;
}
}catch (e32715){if((e32715 instanceof Object)){
var ex__31821__auto__ = e32715;
var statearr_32716_32728 = state_32695;
(statearr_32716_32728[(5)] = ex__31821__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32715;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32729 = state_32695;
state_32695 = G__32729;
continue;
} else {
return ret_value__31819__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__31818__auto__ = function(state_32695){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__31818__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__31818__auto____1.call(this,state_32695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__31818__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__31818__auto____0;
cljs$core$async$reduce_$_state_machine__31818__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__31818__auto____1;
return cljs$core$async$reduce_$_state_machine__31818__auto__;
})()
;})(switch__31817__auto__,c__31929__auto__))
})();
var state__31931__auto__ = (function (){var statearr_32717 = f__31930__auto__.call(null);
(statearr_32717[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31929__auto__);

return statearr_32717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31931__auto__);
});})(c__31929__auto__))
);

return c__31929__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args32730 = [];
var len__26645__auto___32782 = arguments.length;
var i__26646__auto___32783 = (0);
while(true){
if((i__26646__auto___32783 < len__26645__auto___32782)){
args32730.push((arguments[i__26646__auto___32783]));

var G__32784 = (i__26646__auto___32783 + (1));
i__26646__auto___32783 = G__32784;
continue;
} else {
}
break;
}

var G__32732 = args32730.length;
switch (G__32732) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32730.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__31929__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31929__auto__){
return (function (){
var f__31930__auto__ = (function (){var switch__31817__auto__ = ((function (c__31929__auto__){
return (function (state_32757){
var state_val_32758 = (state_32757[(1)]);
if((state_val_32758 === (7))){
var inst_32739 = (state_32757[(2)]);
var state_32757__$1 = state_32757;
var statearr_32759_32786 = state_32757__$1;
(statearr_32759_32786[(2)] = inst_32739);

(statearr_32759_32786[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32758 === (1))){
var inst_32733 = cljs.core.seq.call(null,coll);
var inst_32734 = inst_32733;
var state_32757__$1 = (function (){var statearr_32760 = state_32757;
(statearr_32760[(7)] = inst_32734);

return statearr_32760;
})();
var statearr_32761_32787 = state_32757__$1;
(statearr_32761_32787[(2)] = null);

(statearr_32761_32787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32758 === (4))){
var inst_32734 = (state_32757[(7)]);
var inst_32737 = cljs.core.first.call(null,inst_32734);
var state_32757__$1 = state_32757;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32757__$1,(7),ch,inst_32737);
} else {
if((state_val_32758 === (13))){
var inst_32751 = (state_32757[(2)]);
var state_32757__$1 = state_32757;
var statearr_32762_32788 = state_32757__$1;
(statearr_32762_32788[(2)] = inst_32751);

(statearr_32762_32788[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32758 === (6))){
var inst_32742 = (state_32757[(2)]);
var state_32757__$1 = state_32757;
if(cljs.core.truth_(inst_32742)){
var statearr_32763_32789 = state_32757__$1;
(statearr_32763_32789[(1)] = (8));

} else {
var statearr_32764_32790 = state_32757__$1;
(statearr_32764_32790[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32758 === (3))){
var inst_32755 = (state_32757[(2)]);
var state_32757__$1 = state_32757;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32757__$1,inst_32755);
} else {
if((state_val_32758 === (12))){
var state_32757__$1 = state_32757;
var statearr_32765_32791 = state_32757__$1;
(statearr_32765_32791[(2)] = null);

(statearr_32765_32791[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32758 === (2))){
var inst_32734 = (state_32757[(7)]);
var state_32757__$1 = state_32757;
if(cljs.core.truth_(inst_32734)){
var statearr_32766_32792 = state_32757__$1;
(statearr_32766_32792[(1)] = (4));

} else {
var statearr_32767_32793 = state_32757__$1;
(statearr_32767_32793[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32758 === (11))){
var inst_32748 = cljs.core.async.close_BANG_.call(null,ch);
var state_32757__$1 = state_32757;
var statearr_32768_32794 = state_32757__$1;
(statearr_32768_32794[(2)] = inst_32748);

(statearr_32768_32794[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32758 === (9))){
var state_32757__$1 = state_32757;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32769_32795 = state_32757__$1;
(statearr_32769_32795[(1)] = (11));

} else {
var statearr_32770_32796 = state_32757__$1;
(statearr_32770_32796[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32758 === (5))){
var inst_32734 = (state_32757[(7)]);
var state_32757__$1 = state_32757;
var statearr_32771_32797 = state_32757__$1;
(statearr_32771_32797[(2)] = inst_32734);

(statearr_32771_32797[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32758 === (10))){
var inst_32753 = (state_32757[(2)]);
var state_32757__$1 = state_32757;
var statearr_32772_32798 = state_32757__$1;
(statearr_32772_32798[(2)] = inst_32753);

(statearr_32772_32798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32758 === (8))){
var inst_32734 = (state_32757[(7)]);
var inst_32744 = cljs.core.next.call(null,inst_32734);
var inst_32734__$1 = inst_32744;
var state_32757__$1 = (function (){var statearr_32773 = state_32757;
(statearr_32773[(7)] = inst_32734__$1);

return statearr_32773;
})();
var statearr_32774_32799 = state_32757__$1;
(statearr_32774_32799[(2)] = null);

(statearr_32774_32799[(1)] = (2));


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
});})(c__31929__auto__))
;
return ((function (switch__31817__auto__,c__31929__auto__){
return (function() {
var cljs$core$async$state_machine__31818__auto__ = null;
var cljs$core$async$state_machine__31818__auto____0 = (function (){
var statearr_32778 = [null,null,null,null,null,null,null,null];
(statearr_32778[(0)] = cljs$core$async$state_machine__31818__auto__);

(statearr_32778[(1)] = (1));

return statearr_32778;
});
var cljs$core$async$state_machine__31818__auto____1 = (function (state_32757){
while(true){
var ret_value__31819__auto__ = (function (){try{while(true){
var result__31820__auto__ = switch__31817__auto__.call(null,state_32757);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31820__auto__;
}
break;
}
}catch (e32779){if((e32779 instanceof Object)){
var ex__31821__auto__ = e32779;
var statearr_32780_32800 = state_32757;
(statearr_32780_32800[(5)] = ex__31821__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32757);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32779;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32801 = state_32757;
state_32757 = G__32801;
continue;
} else {
return ret_value__31819__auto__;
}
break;
}
});
cljs$core$async$state_machine__31818__auto__ = function(state_32757){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31818__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31818__auto____1.call(this,state_32757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31818__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31818__auto____0;
cljs$core$async$state_machine__31818__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31818__auto____1;
return cljs$core$async$state_machine__31818__auto__;
})()
;})(switch__31817__auto__,c__31929__auto__))
})();
var state__31931__auto__ = (function (){var statearr_32781 = f__31930__auto__.call(null);
(statearr_32781[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31929__auto__);

return statearr_32781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31931__auto__);
});})(c__31929__auto__))
);

return c__31929__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__26233__auto__ = (((_ == null))?null:_);
var m__26234__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__26233__auto__)]);
if(!((m__26234__auto__ == null))){
return m__26234__auto__.call(null,_);
} else {
var m__26234__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__26234__auto____$1 == null))){
return m__26234__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__26233__auto__ = (((m == null))?null:m);
var m__26234__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__26233__auto__)]);
if(!((m__26234__auto__ == null))){
return m__26234__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__26234__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__26234__auto____$1 == null))){
return m__26234__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__26233__auto__ = (((m == null))?null:m);
var m__26234__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__26233__auto__)]);
if(!((m__26234__auto__ == null))){
return m__26234__auto__.call(null,m,ch);
} else {
var m__26234__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__26234__auto____$1 == null))){
return m__26234__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__26233__auto__ = (((m == null))?null:m);
var m__26234__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__26233__auto__)]);
if(!((m__26234__auto__ == null))){
return m__26234__auto__.call(null,m);
} else {
var m__26234__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__26234__auto____$1 == null))){
return m__26234__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async33027 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33027 = (function (mult,ch,cs,meta33028){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta33028 = meta33028;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33027.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33029,meta33028__$1){
var self__ = this;
var _33029__$1 = this;
return (new cljs.core.async.t_cljs$core$async33027(self__.mult,self__.ch,self__.cs,meta33028__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async33027.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33029){
var self__ = this;
var _33029__$1 = this;
return self__.meta33028;
});})(cs))
;

cljs.core.async.t_cljs$core$async33027.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async33027.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async33027.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async33027.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33027.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33027.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33027.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33028","meta33028",-274086913,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async33027.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33027.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33027";

cljs.core.async.t_cljs$core$async33027.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__26176__auto__,writer__26177__auto__,opt__26178__auto__){
return cljs.core._write.call(null,writer__26177__auto__,"cljs.core.async/t_cljs$core$async33027");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async33027 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async33027(mult__$1,ch__$1,cs__$1,meta33028){
return (new cljs.core.async.t_cljs$core$async33027(mult__$1,ch__$1,cs__$1,meta33028));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async33027(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__31929__auto___33252 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31929__auto___33252,cs,m,dchan,dctr,done){
return (function (){
var f__31930__auto__ = (function (){var switch__31817__auto__ = ((function (c__31929__auto___33252,cs,m,dchan,dctr,done){
return (function (state_33164){
var state_val_33165 = (state_33164[(1)]);
if((state_val_33165 === (7))){
var inst_33160 = (state_33164[(2)]);
var state_33164__$1 = state_33164;
var statearr_33166_33253 = state_33164__$1;
(statearr_33166_33253[(2)] = inst_33160);

(statearr_33166_33253[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33165 === (20))){
var inst_33063 = (state_33164[(7)]);
var inst_33075 = cljs.core.first.call(null,inst_33063);
var inst_33076 = cljs.core.nth.call(null,inst_33075,(0),null);
var inst_33077 = cljs.core.nth.call(null,inst_33075,(1),null);
var state_33164__$1 = (function (){var statearr_33167 = state_33164;
(statearr_33167[(8)] = inst_33076);

return statearr_33167;
})();
if(cljs.core.truth_(inst_33077)){
var statearr_33168_33254 = state_33164__$1;
(statearr_33168_33254[(1)] = (22));

} else {
var statearr_33169_33255 = state_33164__$1;
(statearr_33169_33255[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33165 === (27))){
var inst_33032 = (state_33164[(9)]);
var inst_33112 = (state_33164[(10)]);
var inst_33107 = (state_33164[(11)]);
var inst_33105 = (state_33164[(12)]);
var inst_33112__$1 = cljs.core._nth.call(null,inst_33105,inst_33107);
var inst_33113 = cljs.core.async.put_BANG_.call(null,inst_33112__$1,inst_33032,done);
var state_33164__$1 = (function (){var statearr_33170 = state_33164;
(statearr_33170[(10)] = inst_33112__$1);

return statearr_33170;
})();
if(cljs.core.truth_(inst_33113)){
var statearr_33171_33256 = state_33164__$1;
(statearr_33171_33256[(1)] = (30));

} else {
var statearr_33172_33257 = state_33164__$1;
(statearr_33172_33257[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33165 === (1))){
var state_33164__$1 = state_33164;
var statearr_33173_33258 = state_33164__$1;
(statearr_33173_33258[(2)] = null);

(statearr_33173_33258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33165 === (24))){
var inst_33063 = (state_33164[(7)]);
var inst_33082 = (state_33164[(2)]);
var inst_33083 = cljs.core.next.call(null,inst_33063);
var inst_33041 = inst_33083;
var inst_33042 = null;
var inst_33043 = (0);
var inst_33044 = (0);
var state_33164__$1 = (function (){var statearr_33174 = state_33164;
(statearr_33174[(13)] = inst_33042);

(statearr_33174[(14)] = inst_33041);

(statearr_33174[(15)] = inst_33082);

(statearr_33174[(16)] = inst_33044);

(statearr_33174[(17)] = inst_33043);

return statearr_33174;
})();
var statearr_33175_33259 = state_33164__$1;
(statearr_33175_33259[(2)] = null);

(statearr_33175_33259[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33165 === (39))){
var state_33164__$1 = state_33164;
var statearr_33179_33260 = state_33164__$1;
(statearr_33179_33260[(2)] = null);

(statearr_33179_33260[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33165 === (4))){
var inst_33032 = (state_33164[(9)]);
var inst_33032__$1 = (state_33164[(2)]);
var inst_33033 = (inst_33032__$1 == null);
var state_33164__$1 = (function (){var statearr_33180 = state_33164;
(statearr_33180[(9)] = inst_33032__$1);

return statearr_33180;
})();
if(cljs.core.truth_(inst_33033)){
var statearr_33181_33261 = state_33164__$1;
(statearr_33181_33261[(1)] = (5));

} else {
var statearr_33182_33262 = state_33164__$1;
(statearr_33182_33262[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33165 === (15))){
var inst_33042 = (state_33164[(13)]);
var inst_33041 = (state_33164[(14)]);
var inst_33044 = (state_33164[(16)]);
var inst_33043 = (state_33164[(17)]);
var inst_33059 = (state_33164[(2)]);
var inst_33060 = (inst_33044 + (1));
var tmp33176 = inst_33042;
var tmp33177 = inst_33041;
var tmp33178 = inst_33043;
var inst_33041__$1 = tmp33177;
var inst_33042__$1 = tmp33176;
var inst_33043__$1 = tmp33178;
var inst_33044__$1 = inst_33060;
var state_33164__$1 = (function (){var statearr_33183 = state_33164;
(statearr_33183[(13)] = inst_33042__$1);

(statearr_33183[(14)] = inst_33041__$1);

(statearr_33183[(16)] = inst_33044__$1);

(statearr_33183[(17)] = inst_33043__$1);

(statearr_33183[(18)] = inst_33059);

return statearr_33183;
})();
var statearr_33184_33263 = state_33164__$1;
(statearr_33184_33263[(2)] = null);

(statearr_33184_33263[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33165 === (21))){
var inst_33086 = (state_33164[(2)]);
var state_33164__$1 = state_33164;
var statearr_33188_33264 = state_33164__$1;
(statearr_33188_33264[(2)] = inst_33086);

(statearr_33188_33264[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33165 === (31))){
var inst_33112 = (state_33164[(10)]);
var inst_33116 = done.call(null,null);
var inst_33117 = cljs.core.async.untap_STAR_.call(null,m,inst_33112);
var state_33164__$1 = (function (){var statearr_33189 = state_33164;
(statearr_33189[(19)] = inst_33116);

return statearr_33189;
})();
var statearr_33190_33265 = state_33164__$1;
(statearr_33190_33265[(2)] = inst_33117);

(statearr_33190_33265[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33165 === (32))){
var inst_33104 = (state_33164[(20)]);
var inst_33106 = (state_33164[(21)]);
var inst_33107 = (state_33164[(11)]);
var inst_33105 = (state_33164[(12)]);
var inst_33119 = (state_33164[(2)]);
var inst_33120 = (inst_33107 + (1));
var tmp33185 = inst_33104;
var tmp33186 = inst_33106;
var tmp33187 = inst_33105;
var inst_33104__$1 = tmp33185;
var inst_33105__$1 = tmp33187;
var inst_33106__$1 = tmp33186;
var inst_33107__$1 = inst_33120;
var state_33164__$1 = (function (){var statearr_33191 = state_33164;
(statearr_33191[(22)] = inst_33119);

(statearr_33191[(20)] = inst_33104__$1);

(statearr_33191[(21)] = inst_33106__$1);

(statearr_33191[(11)] = inst_33107__$1);

(statearr_33191[(12)] = inst_33105__$1);

return statearr_33191;
})();
var statearr_33192_33266 = state_33164__$1;
(statearr_33192_33266[(2)] = null);

(statearr_33192_33266[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33165 === (40))){
var inst_33132 = (state_33164[(23)]);
var inst_33136 = done.call(null,null);
var inst_33137 = cljs.core.async.untap_STAR_.call(null,m,inst_33132);
var state_33164__$1 = (function (){var statearr_33193 = state_33164;
(statearr_33193[(24)] = inst_33136);

return statearr_33193;
})();
var statearr_33194_33267 = state_33164__$1;
(statearr_33194_33267[(2)] = inst_33137);

(statearr_33194_33267[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33165 === (33))){
var inst_33123 = (state_33164[(25)]);
var inst_33125 = cljs.core.chunked_seq_QMARK_.call(null,inst_33123);
var state_33164__$1 = state_33164;
if(inst_33125){
var statearr_33195_33268 = state_33164__$1;
(statearr_33195_33268[(1)] = (36));

} else {
var statearr_33196_33269 = state_33164__$1;
(statearr_33196_33269[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33165 === (13))){
var inst_33053 = (state_33164[(26)]);
var inst_33056 = cljs.core.async.close_BANG_.call(null,inst_33053);
var state_33164__$1 = state_33164;
var statearr_33197_33270 = state_33164__$1;
(statearr_33197_33270[(2)] = inst_33056);

(statearr_33197_33270[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33165 === (22))){
var inst_33076 = (state_33164[(8)]);
var inst_33079 = cljs.core.async.close_BANG_.call(null,inst_33076);
var state_33164__$1 = state_33164;
var statearr_33198_33271 = state_33164__$1;
(statearr_33198_33271[(2)] = inst_33079);

(statearr_33198_33271[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33165 === (36))){
var inst_33123 = (state_33164[(25)]);
var inst_33127 = cljs.core.chunk_first.call(null,inst_33123);
var inst_33128 = cljs.core.chunk_rest.call(null,inst_33123);
var inst_33129 = cljs.core.count.call(null,inst_33127);
var inst_33104 = inst_33128;
var inst_33105 = inst_33127;
var inst_33106 = inst_33129;
var inst_33107 = (0);
var state_33164__$1 = (function (){var statearr_33199 = state_33164;
(statearr_33199[(20)] = inst_33104);

(statearr_33199[(21)] = inst_33106);

(statearr_33199[(11)] = inst_33107);

(statearr_33199[(12)] = inst_33105);

return statearr_33199;
})();
var statearr_33200_33272 = state_33164__$1;
(statearr_33200_33272[(2)] = null);

(statearr_33200_33272[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33165 === (41))){
var inst_33123 = (state_33164[(25)]);
var inst_33139 = (state_33164[(2)]);
var inst_33140 = cljs.core.next.call(null,inst_33123);
var inst_33104 = inst_33140;
var inst_33105 = null;
var inst_33106 = (0);
var inst_33107 = (0);
var state_33164__$1 = (function (){var statearr_33201 = state_33164;
(statearr_33201[(20)] = inst_33104);

(statearr_33201[(21)] = inst_33106);

(statearr_33201[(11)] = inst_33107);

(statearr_33201[(27)] = inst_33139);

(statearr_33201[(12)] = inst_33105);

return statearr_33201;
})();
var statearr_33202_33273 = state_33164__$1;
(statearr_33202_33273[(2)] = null);

(statearr_33202_33273[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33165 === (43))){
var state_33164__$1 = state_33164;
var statearr_33203_33274 = state_33164__$1;
(statearr_33203_33274[(2)] = null);

(statearr_33203_33274[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33165 === (29))){
var inst_33148 = (state_33164[(2)]);
var state_33164__$1 = state_33164;
var statearr_33204_33275 = state_33164__$1;
(statearr_33204_33275[(2)] = inst_33148);

(statearr_33204_33275[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33165 === (44))){
var inst_33157 = (state_33164[(2)]);
var state_33164__$1 = (function (){var statearr_33205 = state_33164;
(statearr_33205[(28)] = inst_33157);

return statearr_33205;
})();
var statearr_33206_33276 = state_33164__$1;
(statearr_33206_33276[(2)] = null);

(statearr_33206_33276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33165 === (6))){
var inst_33096 = (state_33164[(29)]);
var inst_33095 = cljs.core.deref.call(null,cs);
var inst_33096__$1 = cljs.core.keys.call(null,inst_33095);
var inst_33097 = cljs.core.count.call(null,inst_33096__$1);
var inst_33098 = cljs.core.reset_BANG_.call(null,dctr,inst_33097);
var inst_33103 = cljs.core.seq.call(null,inst_33096__$1);
var inst_33104 = inst_33103;
var inst_33105 = null;
var inst_33106 = (0);
var inst_33107 = (0);
var state_33164__$1 = (function (){var statearr_33207 = state_33164;
(statearr_33207[(20)] = inst_33104);

(statearr_33207[(21)] = inst_33106);

(statearr_33207[(11)] = inst_33107);

(statearr_33207[(29)] = inst_33096__$1);

(statearr_33207[(30)] = inst_33098);

(statearr_33207[(12)] = inst_33105);

return statearr_33207;
})();
var statearr_33208_33277 = state_33164__$1;
(statearr_33208_33277[(2)] = null);

(statearr_33208_33277[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33165 === (28))){
var inst_33104 = (state_33164[(20)]);
var inst_33123 = (state_33164[(25)]);
var inst_33123__$1 = cljs.core.seq.call(null,inst_33104);
var state_33164__$1 = (function (){var statearr_33209 = state_33164;
(statearr_33209[(25)] = inst_33123__$1);

return statearr_33209;
})();
if(inst_33123__$1){
var statearr_33210_33278 = state_33164__$1;
(statearr_33210_33278[(1)] = (33));

} else {
var statearr_33211_33279 = state_33164__$1;
(statearr_33211_33279[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33165 === (25))){
var inst_33106 = (state_33164[(21)]);
var inst_33107 = (state_33164[(11)]);
var inst_33109 = (inst_33107 < inst_33106);
var inst_33110 = inst_33109;
var state_33164__$1 = state_33164;
if(cljs.core.truth_(inst_33110)){
var statearr_33212_33280 = state_33164__$1;
(statearr_33212_33280[(1)] = (27));

} else {
var statearr_33213_33281 = state_33164__$1;
(statearr_33213_33281[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33165 === (34))){
var state_33164__$1 = state_33164;
var statearr_33214_33282 = state_33164__$1;
(statearr_33214_33282[(2)] = null);

(statearr_33214_33282[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33165 === (17))){
var state_33164__$1 = state_33164;
var statearr_33215_33283 = state_33164__$1;
(statearr_33215_33283[(2)] = null);

(statearr_33215_33283[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33165 === (3))){
var inst_33162 = (state_33164[(2)]);
var state_33164__$1 = state_33164;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33164__$1,inst_33162);
} else {
if((state_val_33165 === (12))){
var inst_33091 = (state_33164[(2)]);
var state_33164__$1 = state_33164;
var statearr_33216_33284 = state_33164__$1;
(statearr_33216_33284[(2)] = inst_33091);

(statearr_33216_33284[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33165 === (2))){
var state_33164__$1 = state_33164;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33164__$1,(4),ch);
} else {
if((state_val_33165 === (23))){
var state_33164__$1 = state_33164;
var statearr_33217_33285 = state_33164__$1;
(statearr_33217_33285[(2)] = null);

(statearr_33217_33285[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33165 === (35))){
var inst_33146 = (state_33164[(2)]);
var state_33164__$1 = state_33164;
var statearr_33218_33286 = state_33164__$1;
(statearr_33218_33286[(2)] = inst_33146);

(statearr_33218_33286[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33165 === (19))){
var inst_33063 = (state_33164[(7)]);
var inst_33067 = cljs.core.chunk_first.call(null,inst_33063);
var inst_33068 = cljs.core.chunk_rest.call(null,inst_33063);
var inst_33069 = cljs.core.count.call(null,inst_33067);
var inst_33041 = inst_33068;
var inst_33042 = inst_33067;
var inst_33043 = inst_33069;
var inst_33044 = (0);
var state_33164__$1 = (function (){var statearr_33219 = state_33164;
(statearr_33219[(13)] = inst_33042);

(statearr_33219[(14)] = inst_33041);

(statearr_33219[(16)] = inst_33044);

(statearr_33219[(17)] = inst_33043);

return statearr_33219;
})();
var statearr_33220_33287 = state_33164__$1;
(statearr_33220_33287[(2)] = null);

(statearr_33220_33287[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33165 === (11))){
var inst_33063 = (state_33164[(7)]);
var inst_33041 = (state_33164[(14)]);
var inst_33063__$1 = cljs.core.seq.call(null,inst_33041);
var state_33164__$1 = (function (){var statearr_33221 = state_33164;
(statearr_33221[(7)] = inst_33063__$1);

return statearr_33221;
})();
if(inst_33063__$1){
var statearr_33222_33288 = state_33164__$1;
(statearr_33222_33288[(1)] = (16));

} else {
var statearr_33223_33289 = state_33164__$1;
(statearr_33223_33289[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33165 === (9))){
var inst_33093 = (state_33164[(2)]);
var state_33164__$1 = state_33164;
var statearr_33224_33290 = state_33164__$1;
(statearr_33224_33290[(2)] = inst_33093);

(statearr_33224_33290[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33165 === (5))){
var inst_33039 = cljs.core.deref.call(null,cs);
var inst_33040 = cljs.core.seq.call(null,inst_33039);
var inst_33041 = inst_33040;
var inst_33042 = null;
var inst_33043 = (0);
var inst_33044 = (0);
var state_33164__$1 = (function (){var statearr_33225 = state_33164;
(statearr_33225[(13)] = inst_33042);

(statearr_33225[(14)] = inst_33041);

(statearr_33225[(16)] = inst_33044);

(statearr_33225[(17)] = inst_33043);

return statearr_33225;
})();
var statearr_33226_33291 = state_33164__$1;
(statearr_33226_33291[(2)] = null);

(statearr_33226_33291[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33165 === (14))){
var state_33164__$1 = state_33164;
var statearr_33227_33292 = state_33164__$1;
(statearr_33227_33292[(2)] = null);

(statearr_33227_33292[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33165 === (45))){
var inst_33154 = (state_33164[(2)]);
var state_33164__$1 = state_33164;
var statearr_33228_33293 = state_33164__$1;
(statearr_33228_33293[(2)] = inst_33154);

(statearr_33228_33293[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33165 === (26))){
var inst_33096 = (state_33164[(29)]);
var inst_33150 = (state_33164[(2)]);
var inst_33151 = cljs.core.seq.call(null,inst_33096);
var state_33164__$1 = (function (){var statearr_33229 = state_33164;
(statearr_33229[(31)] = inst_33150);

return statearr_33229;
})();
if(inst_33151){
var statearr_33230_33294 = state_33164__$1;
(statearr_33230_33294[(1)] = (42));

} else {
var statearr_33231_33295 = state_33164__$1;
(statearr_33231_33295[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33165 === (16))){
var inst_33063 = (state_33164[(7)]);
var inst_33065 = cljs.core.chunked_seq_QMARK_.call(null,inst_33063);
var state_33164__$1 = state_33164;
if(inst_33065){
var statearr_33232_33296 = state_33164__$1;
(statearr_33232_33296[(1)] = (19));

} else {
var statearr_33233_33297 = state_33164__$1;
(statearr_33233_33297[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33165 === (38))){
var inst_33143 = (state_33164[(2)]);
var state_33164__$1 = state_33164;
var statearr_33234_33298 = state_33164__$1;
(statearr_33234_33298[(2)] = inst_33143);

(statearr_33234_33298[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33165 === (30))){
var state_33164__$1 = state_33164;
var statearr_33235_33299 = state_33164__$1;
(statearr_33235_33299[(2)] = null);

(statearr_33235_33299[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33165 === (10))){
var inst_33042 = (state_33164[(13)]);
var inst_33044 = (state_33164[(16)]);
var inst_33052 = cljs.core._nth.call(null,inst_33042,inst_33044);
var inst_33053 = cljs.core.nth.call(null,inst_33052,(0),null);
var inst_33054 = cljs.core.nth.call(null,inst_33052,(1),null);
var state_33164__$1 = (function (){var statearr_33236 = state_33164;
(statearr_33236[(26)] = inst_33053);

return statearr_33236;
})();
if(cljs.core.truth_(inst_33054)){
var statearr_33237_33300 = state_33164__$1;
(statearr_33237_33300[(1)] = (13));

} else {
var statearr_33238_33301 = state_33164__$1;
(statearr_33238_33301[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33165 === (18))){
var inst_33089 = (state_33164[(2)]);
var state_33164__$1 = state_33164;
var statearr_33239_33302 = state_33164__$1;
(statearr_33239_33302[(2)] = inst_33089);

(statearr_33239_33302[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33165 === (42))){
var state_33164__$1 = state_33164;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33164__$1,(45),dchan);
} else {
if((state_val_33165 === (37))){
var inst_33032 = (state_33164[(9)]);
var inst_33123 = (state_33164[(25)]);
var inst_33132 = (state_33164[(23)]);
var inst_33132__$1 = cljs.core.first.call(null,inst_33123);
var inst_33133 = cljs.core.async.put_BANG_.call(null,inst_33132__$1,inst_33032,done);
var state_33164__$1 = (function (){var statearr_33240 = state_33164;
(statearr_33240[(23)] = inst_33132__$1);

return statearr_33240;
})();
if(cljs.core.truth_(inst_33133)){
var statearr_33241_33303 = state_33164__$1;
(statearr_33241_33303[(1)] = (39));

} else {
var statearr_33242_33304 = state_33164__$1;
(statearr_33242_33304[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33165 === (8))){
var inst_33044 = (state_33164[(16)]);
var inst_33043 = (state_33164[(17)]);
var inst_33046 = (inst_33044 < inst_33043);
var inst_33047 = inst_33046;
var state_33164__$1 = state_33164;
if(cljs.core.truth_(inst_33047)){
var statearr_33243_33305 = state_33164__$1;
(statearr_33243_33305[(1)] = (10));

} else {
var statearr_33244_33306 = state_33164__$1;
(statearr_33244_33306[(1)] = (11));

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
});})(c__31929__auto___33252,cs,m,dchan,dctr,done))
;
return ((function (switch__31817__auto__,c__31929__auto___33252,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__31818__auto__ = null;
var cljs$core$async$mult_$_state_machine__31818__auto____0 = (function (){
var statearr_33248 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33248[(0)] = cljs$core$async$mult_$_state_machine__31818__auto__);

(statearr_33248[(1)] = (1));

return statearr_33248;
});
var cljs$core$async$mult_$_state_machine__31818__auto____1 = (function (state_33164){
while(true){
var ret_value__31819__auto__ = (function (){try{while(true){
var result__31820__auto__ = switch__31817__auto__.call(null,state_33164);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31820__auto__;
}
break;
}
}catch (e33249){if((e33249 instanceof Object)){
var ex__31821__auto__ = e33249;
var statearr_33250_33307 = state_33164;
(statearr_33250_33307[(5)] = ex__31821__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33164);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33249;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33308 = state_33164;
state_33164 = G__33308;
continue;
} else {
return ret_value__31819__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__31818__auto__ = function(state_33164){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__31818__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__31818__auto____1.call(this,state_33164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__31818__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__31818__auto____0;
cljs$core$async$mult_$_state_machine__31818__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__31818__auto____1;
return cljs$core$async$mult_$_state_machine__31818__auto__;
})()
;})(switch__31817__auto__,c__31929__auto___33252,cs,m,dchan,dctr,done))
})();
var state__31931__auto__ = (function (){var statearr_33251 = f__31930__auto__.call(null);
(statearr_33251[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31929__auto___33252);

return statearr_33251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31931__auto__);
});})(c__31929__auto___33252,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args33309 = [];
var len__26645__auto___33312 = arguments.length;
var i__26646__auto___33313 = (0);
while(true){
if((i__26646__auto___33313 < len__26645__auto___33312)){
args33309.push((arguments[i__26646__auto___33313]));

var G__33314 = (i__26646__auto___33313 + (1));
i__26646__auto___33313 = G__33314;
continue;
} else {
}
break;
}

var G__33311 = args33309.length;
switch (G__33311) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33309.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__26233__auto__ = (((m == null))?null:m);
var m__26234__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__26233__auto__)]);
if(!((m__26234__auto__ == null))){
return m__26234__auto__.call(null,m,ch);
} else {
var m__26234__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__26234__auto____$1 == null))){
return m__26234__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__26233__auto__ = (((m == null))?null:m);
var m__26234__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__26233__auto__)]);
if(!((m__26234__auto__ == null))){
return m__26234__auto__.call(null,m,ch);
} else {
var m__26234__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__26234__auto____$1 == null))){
return m__26234__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__26233__auto__ = (((m == null))?null:m);
var m__26234__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__26233__auto__)]);
if(!((m__26234__auto__ == null))){
return m__26234__auto__.call(null,m);
} else {
var m__26234__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__26234__auto____$1 == null))){
return m__26234__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__26233__auto__ = (((m == null))?null:m);
var m__26234__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__26233__auto__)]);
if(!((m__26234__auto__ == null))){
return m__26234__auto__.call(null,m,state_map);
} else {
var m__26234__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__26234__auto____$1 == null))){
return m__26234__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__26233__auto__ = (((m == null))?null:m);
var m__26234__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__26233__auto__)]);
if(!((m__26234__auto__ == null))){
return m__26234__auto__.call(null,m,mode);
} else {
var m__26234__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__26234__auto____$1 == null))){
return m__26234__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__26652__auto__ = [];
var len__26645__auto___33326 = arguments.length;
var i__26646__auto___33327 = (0);
while(true){
if((i__26646__auto___33327 < len__26645__auto___33326)){
args__26652__auto__.push((arguments[i__26646__auto___33327]));

var G__33328 = (i__26646__auto___33327 + (1));
i__26646__auto___33327 = G__33328;
continue;
} else {
}
break;
}

var argseq__26653__auto__ = ((((3) < args__26652__auto__.length))?(new cljs.core.IndexedSeq(args__26652__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26653__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33320){
var map__33321 = p__33320;
var map__33321__$1 = ((((!((map__33321 == null)))?((((map__33321.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33321.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33321):map__33321);
var opts = map__33321__$1;
var statearr_33323_33329 = state;
(statearr_33323_33329[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__33321,map__33321__$1,opts){
return (function (val){
var statearr_33324_33330 = state;
(statearr_33324_33330[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__33321,map__33321__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_33325_33331 = state;
(statearr_33325_33331[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33316){
var G__33317 = cljs.core.first.call(null,seq33316);
var seq33316__$1 = cljs.core.next.call(null,seq33316);
var G__33318 = cljs.core.first.call(null,seq33316__$1);
var seq33316__$2 = cljs.core.next.call(null,seq33316__$1);
var G__33319 = cljs.core.first.call(null,seq33316__$2);
var seq33316__$3 = cljs.core.next.call(null,seq33316__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33317,G__33318,G__33319,seq33316__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async33497 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33497 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33498){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33498 = meta33498;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33497.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33499,meta33498__$1){
var self__ = this;
var _33499__$1 = this;
return (new cljs.core.async.t_cljs$core$async33497(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33498__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33497.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33499){
var self__ = this;
var _33499__$1 = this;
return self__.meta33498;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33497.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async33497.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33497.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async33497.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33497.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33497.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33497.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33497.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33497.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33498","meta33498",528519727,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33497.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33497.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33497";

cljs.core.async.t_cljs$core$async33497.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__26176__auto__,writer__26177__auto__,opt__26178__auto__){
return cljs.core._write.call(null,writer__26177__auto__,"cljs.core.async/t_cljs$core$async33497");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async33497 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async33497(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33498){
return (new cljs.core.async.t_cljs$core$async33497(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33498));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async33497(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31929__auto___33662 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31929__auto___33662,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__31930__auto__ = (function (){var switch__31817__auto__ = ((function (c__31929__auto___33662,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_33599){
var state_val_33600 = (state_33599[(1)]);
if((state_val_33600 === (7))){
var inst_33515 = (state_33599[(2)]);
var state_33599__$1 = state_33599;
var statearr_33601_33663 = state_33599__$1;
(statearr_33601_33663[(2)] = inst_33515);

(statearr_33601_33663[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33600 === (20))){
var inst_33527 = (state_33599[(7)]);
var state_33599__$1 = state_33599;
var statearr_33602_33664 = state_33599__$1;
(statearr_33602_33664[(2)] = inst_33527);

(statearr_33602_33664[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33600 === (27))){
var state_33599__$1 = state_33599;
var statearr_33603_33665 = state_33599__$1;
(statearr_33603_33665[(2)] = null);

(statearr_33603_33665[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33600 === (1))){
var inst_33503 = (state_33599[(8)]);
var inst_33503__$1 = calc_state.call(null);
var inst_33505 = (inst_33503__$1 == null);
var inst_33506 = cljs.core.not.call(null,inst_33505);
var state_33599__$1 = (function (){var statearr_33604 = state_33599;
(statearr_33604[(8)] = inst_33503__$1);

return statearr_33604;
})();
if(inst_33506){
var statearr_33605_33666 = state_33599__$1;
(statearr_33605_33666[(1)] = (2));

} else {
var statearr_33606_33667 = state_33599__$1;
(statearr_33606_33667[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33600 === (24))){
var inst_33573 = (state_33599[(9)]);
var inst_33550 = (state_33599[(10)]);
var inst_33559 = (state_33599[(11)]);
var inst_33573__$1 = inst_33550.call(null,inst_33559);
var state_33599__$1 = (function (){var statearr_33607 = state_33599;
(statearr_33607[(9)] = inst_33573__$1);

return statearr_33607;
})();
if(cljs.core.truth_(inst_33573__$1)){
var statearr_33608_33668 = state_33599__$1;
(statearr_33608_33668[(1)] = (29));

} else {
var statearr_33609_33669 = state_33599__$1;
(statearr_33609_33669[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33600 === (4))){
var inst_33518 = (state_33599[(2)]);
var state_33599__$1 = state_33599;
if(cljs.core.truth_(inst_33518)){
var statearr_33610_33670 = state_33599__$1;
(statearr_33610_33670[(1)] = (8));

} else {
var statearr_33611_33671 = state_33599__$1;
(statearr_33611_33671[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33600 === (15))){
var inst_33544 = (state_33599[(2)]);
var state_33599__$1 = state_33599;
if(cljs.core.truth_(inst_33544)){
var statearr_33612_33672 = state_33599__$1;
(statearr_33612_33672[(1)] = (19));

} else {
var statearr_33613_33673 = state_33599__$1;
(statearr_33613_33673[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33600 === (21))){
var inst_33549 = (state_33599[(12)]);
var inst_33549__$1 = (state_33599[(2)]);
var inst_33550 = cljs.core.get.call(null,inst_33549__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33551 = cljs.core.get.call(null,inst_33549__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33552 = cljs.core.get.call(null,inst_33549__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33599__$1 = (function (){var statearr_33614 = state_33599;
(statearr_33614[(12)] = inst_33549__$1);

(statearr_33614[(13)] = inst_33551);

(statearr_33614[(10)] = inst_33550);

return statearr_33614;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_33599__$1,(22),inst_33552);
} else {
if((state_val_33600 === (31))){
var inst_33581 = (state_33599[(2)]);
var state_33599__$1 = state_33599;
if(cljs.core.truth_(inst_33581)){
var statearr_33615_33674 = state_33599__$1;
(statearr_33615_33674[(1)] = (32));

} else {
var statearr_33616_33675 = state_33599__$1;
(statearr_33616_33675[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33600 === (32))){
var inst_33558 = (state_33599[(14)]);
var state_33599__$1 = state_33599;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33599__$1,(35),out,inst_33558);
} else {
if((state_val_33600 === (33))){
var inst_33549 = (state_33599[(12)]);
var inst_33527 = inst_33549;
var state_33599__$1 = (function (){var statearr_33617 = state_33599;
(statearr_33617[(7)] = inst_33527);

return statearr_33617;
})();
var statearr_33618_33676 = state_33599__$1;
(statearr_33618_33676[(2)] = null);

(statearr_33618_33676[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33600 === (13))){
var inst_33527 = (state_33599[(7)]);
var inst_33534 = inst_33527.cljs$lang$protocol_mask$partition0$;
var inst_33535 = (inst_33534 & (64));
var inst_33536 = inst_33527.cljs$core$ISeq$;
var inst_33537 = (inst_33535) || (inst_33536);
var state_33599__$1 = state_33599;
if(cljs.core.truth_(inst_33537)){
var statearr_33619_33677 = state_33599__$1;
(statearr_33619_33677[(1)] = (16));

} else {
var statearr_33620_33678 = state_33599__$1;
(statearr_33620_33678[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33600 === (22))){
var inst_33558 = (state_33599[(14)]);
var inst_33559 = (state_33599[(11)]);
var inst_33557 = (state_33599[(2)]);
var inst_33558__$1 = cljs.core.nth.call(null,inst_33557,(0),null);
var inst_33559__$1 = cljs.core.nth.call(null,inst_33557,(1),null);
var inst_33560 = (inst_33558__$1 == null);
var inst_33561 = cljs.core._EQ_.call(null,inst_33559__$1,change);
var inst_33562 = (inst_33560) || (inst_33561);
var state_33599__$1 = (function (){var statearr_33621 = state_33599;
(statearr_33621[(14)] = inst_33558__$1);

(statearr_33621[(11)] = inst_33559__$1);

return statearr_33621;
})();
if(cljs.core.truth_(inst_33562)){
var statearr_33622_33679 = state_33599__$1;
(statearr_33622_33679[(1)] = (23));

} else {
var statearr_33623_33680 = state_33599__$1;
(statearr_33623_33680[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33600 === (36))){
var inst_33549 = (state_33599[(12)]);
var inst_33527 = inst_33549;
var state_33599__$1 = (function (){var statearr_33624 = state_33599;
(statearr_33624[(7)] = inst_33527);

return statearr_33624;
})();
var statearr_33625_33681 = state_33599__$1;
(statearr_33625_33681[(2)] = null);

(statearr_33625_33681[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33600 === (29))){
var inst_33573 = (state_33599[(9)]);
var state_33599__$1 = state_33599;
var statearr_33626_33682 = state_33599__$1;
(statearr_33626_33682[(2)] = inst_33573);

(statearr_33626_33682[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33600 === (6))){
var state_33599__$1 = state_33599;
var statearr_33627_33683 = state_33599__$1;
(statearr_33627_33683[(2)] = false);

(statearr_33627_33683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33600 === (28))){
var inst_33569 = (state_33599[(2)]);
var inst_33570 = calc_state.call(null);
var inst_33527 = inst_33570;
var state_33599__$1 = (function (){var statearr_33628 = state_33599;
(statearr_33628[(7)] = inst_33527);

(statearr_33628[(15)] = inst_33569);

return statearr_33628;
})();
var statearr_33629_33684 = state_33599__$1;
(statearr_33629_33684[(2)] = null);

(statearr_33629_33684[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33600 === (25))){
var inst_33595 = (state_33599[(2)]);
var state_33599__$1 = state_33599;
var statearr_33630_33685 = state_33599__$1;
(statearr_33630_33685[(2)] = inst_33595);

(statearr_33630_33685[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33600 === (34))){
var inst_33593 = (state_33599[(2)]);
var state_33599__$1 = state_33599;
var statearr_33631_33686 = state_33599__$1;
(statearr_33631_33686[(2)] = inst_33593);

(statearr_33631_33686[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33600 === (17))){
var state_33599__$1 = state_33599;
var statearr_33632_33687 = state_33599__$1;
(statearr_33632_33687[(2)] = false);

(statearr_33632_33687[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33600 === (3))){
var state_33599__$1 = state_33599;
var statearr_33633_33688 = state_33599__$1;
(statearr_33633_33688[(2)] = false);

(statearr_33633_33688[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33600 === (12))){
var inst_33597 = (state_33599[(2)]);
var state_33599__$1 = state_33599;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33599__$1,inst_33597);
} else {
if((state_val_33600 === (2))){
var inst_33503 = (state_33599[(8)]);
var inst_33508 = inst_33503.cljs$lang$protocol_mask$partition0$;
var inst_33509 = (inst_33508 & (64));
var inst_33510 = inst_33503.cljs$core$ISeq$;
var inst_33511 = (inst_33509) || (inst_33510);
var state_33599__$1 = state_33599;
if(cljs.core.truth_(inst_33511)){
var statearr_33634_33689 = state_33599__$1;
(statearr_33634_33689[(1)] = (5));

} else {
var statearr_33635_33690 = state_33599__$1;
(statearr_33635_33690[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33600 === (23))){
var inst_33558 = (state_33599[(14)]);
var inst_33564 = (inst_33558 == null);
var state_33599__$1 = state_33599;
if(cljs.core.truth_(inst_33564)){
var statearr_33636_33691 = state_33599__$1;
(statearr_33636_33691[(1)] = (26));

} else {
var statearr_33637_33692 = state_33599__$1;
(statearr_33637_33692[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33600 === (35))){
var inst_33584 = (state_33599[(2)]);
var state_33599__$1 = state_33599;
if(cljs.core.truth_(inst_33584)){
var statearr_33638_33693 = state_33599__$1;
(statearr_33638_33693[(1)] = (36));

} else {
var statearr_33639_33694 = state_33599__$1;
(statearr_33639_33694[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33600 === (19))){
var inst_33527 = (state_33599[(7)]);
var inst_33546 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33527);
var state_33599__$1 = state_33599;
var statearr_33640_33695 = state_33599__$1;
(statearr_33640_33695[(2)] = inst_33546);

(statearr_33640_33695[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33600 === (11))){
var inst_33527 = (state_33599[(7)]);
var inst_33531 = (inst_33527 == null);
var inst_33532 = cljs.core.not.call(null,inst_33531);
var state_33599__$1 = state_33599;
if(inst_33532){
var statearr_33641_33696 = state_33599__$1;
(statearr_33641_33696[(1)] = (13));

} else {
var statearr_33642_33697 = state_33599__$1;
(statearr_33642_33697[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33600 === (9))){
var inst_33503 = (state_33599[(8)]);
var state_33599__$1 = state_33599;
var statearr_33643_33698 = state_33599__$1;
(statearr_33643_33698[(2)] = inst_33503);

(statearr_33643_33698[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33600 === (5))){
var state_33599__$1 = state_33599;
var statearr_33644_33699 = state_33599__$1;
(statearr_33644_33699[(2)] = true);

(statearr_33644_33699[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33600 === (14))){
var state_33599__$1 = state_33599;
var statearr_33645_33700 = state_33599__$1;
(statearr_33645_33700[(2)] = false);

(statearr_33645_33700[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33600 === (26))){
var inst_33559 = (state_33599[(11)]);
var inst_33566 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_33559);
var state_33599__$1 = state_33599;
var statearr_33646_33701 = state_33599__$1;
(statearr_33646_33701[(2)] = inst_33566);

(statearr_33646_33701[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33600 === (16))){
var state_33599__$1 = state_33599;
var statearr_33647_33702 = state_33599__$1;
(statearr_33647_33702[(2)] = true);

(statearr_33647_33702[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33600 === (38))){
var inst_33589 = (state_33599[(2)]);
var state_33599__$1 = state_33599;
var statearr_33648_33703 = state_33599__$1;
(statearr_33648_33703[(2)] = inst_33589);

(statearr_33648_33703[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33600 === (30))){
var inst_33551 = (state_33599[(13)]);
var inst_33550 = (state_33599[(10)]);
var inst_33559 = (state_33599[(11)]);
var inst_33576 = cljs.core.empty_QMARK_.call(null,inst_33550);
var inst_33577 = inst_33551.call(null,inst_33559);
var inst_33578 = cljs.core.not.call(null,inst_33577);
var inst_33579 = (inst_33576) && (inst_33578);
var state_33599__$1 = state_33599;
var statearr_33649_33704 = state_33599__$1;
(statearr_33649_33704[(2)] = inst_33579);

(statearr_33649_33704[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33600 === (10))){
var inst_33503 = (state_33599[(8)]);
var inst_33523 = (state_33599[(2)]);
var inst_33524 = cljs.core.get.call(null,inst_33523,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33525 = cljs.core.get.call(null,inst_33523,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33526 = cljs.core.get.call(null,inst_33523,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33527 = inst_33503;
var state_33599__$1 = (function (){var statearr_33650 = state_33599;
(statearr_33650[(16)] = inst_33524);

(statearr_33650[(17)] = inst_33526);

(statearr_33650[(18)] = inst_33525);

(statearr_33650[(7)] = inst_33527);

return statearr_33650;
})();
var statearr_33651_33705 = state_33599__$1;
(statearr_33651_33705[(2)] = null);

(statearr_33651_33705[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33600 === (18))){
var inst_33541 = (state_33599[(2)]);
var state_33599__$1 = state_33599;
var statearr_33652_33706 = state_33599__$1;
(statearr_33652_33706[(2)] = inst_33541);

(statearr_33652_33706[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33600 === (37))){
var state_33599__$1 = state_33599;
var statearr_33653_33707 = state_33599__$1;
(statearr_33653_33707[(2)] = null);

(statearr_33653_33707[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33600 === (8))){
var inst_33503 = (state_33599[(8)]);
var inst_33520 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33503);
var state_33599__$1 = state_33599;
var statearr_33654_33708 = state_33599__$1;
(statearr_33654_33708[(2)] = inst_33520);

(statearr_33654_33708[(1)] = (10));


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
});})(c__31929__auto___33662,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__31817__auto__,c__31929__auto___33662,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__31818__auto__ = null;
var cljs$core$async$mix_$_state_machine__31818__auto____0 = (function (){
var statearr_33658 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33658[(0)] = cljs$core$async$mix_$_state_machine__31818__auto__);

(statearr_33658[(1)] = (1));

return statearr_33658;
});
var cljs$core$async$mix_$_state_machine__31818__auto____1 = (function (state_33599){
while(true){
var ret_value__31819__auto__ = (function (){try{while(true){
var result__31820__auto__ = switch__31817__auto__.call(null,state_33599);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31820__auto__;
}
break;
}
}catch (e33659){if((e33659 instanceof Object)){
var ex__31821__auto__ = e33659;
var statearr_33660_33709 = state_33599;
(statearr_33660_33709[(5)] = ex__31821__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33599);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33659;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33710 = state_33599;
state_33599 = G__33710;
continue;
} else {
return ret_value__31819__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__31818__auto__ = function(state_33599){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__31818__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__31818__auto____1.call(this,state_33599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__31818__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__31818__auto____0;
cljs$core$async$mix_$_state_machine__31818__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__31818__auto____1;
return cljs$core$async$mix_$_state_machine__31818__auto__;
})()
;})(switch__31817__auto__,c__31929__auto___33662,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__31931__auto__ = (function (){var statearr_33661 = f__31930__auto__.call(null);
(statearr_33661[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31929__auto___33662);

return statearr_33661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31931__auto__);
});})(c__31929__auto___33662,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__26233__auto__ = (((p == null))?null:p);
var m__26234__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__26233__auto__)]);
if(!((m__26234__auto__ == null))){
return m__26234__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__26234__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__26234__auto____$1 == null))){
return m__26234__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__26233__auto__ = (((p == null))?null:p);
var m__26234__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__26233__auto__)]);
if(!((m__26234__auto__ == null))){
return m__26234__auto__.call(null,p,v,ch);
} else {
var m__26234__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__26234__auto____$1 == null))){
return m__26234__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args33711 = [];
var len__26645__auto___33714 = arguments.length;
var i__26646__auto___33715 = (0);
while(true){
if((i__26646__auto___33715 < len__26645__auto___33714)){
args33711.push((arguments[i__26646__auto___33715]));

var G__33716 = (i__26646__auto___33715 + (1));
i__26646__auto___33715 = G__33716;
continue;
} else {
}
break;
}

var G__33713 = args33711.length;
switch (G__33713) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33711.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__26233__auto__ = (((p == null))?null:p);
var m__26234__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__26233__auto__)]);
if(!((m__26234__auto__ == null))){
return m__26234__auto__.call(null,p);
} else {
var m__26234__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__26234__auto____$1 == null))){
return m__26234__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__26233__auto__ = (((p == null))?null:p);
var m__26234__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__26233__auto__)]);
if(!((m__26234__auto__ == null))){
return m__26234__auto__.call(null,p,v);
} else {
var m__26234__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__26234__auto____$1 == null))){
return m__26234__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args33719 = [];
var len__26645__auto___33844 = arguments.length;
var i__26646__auto___33845 = (0);
while(true){
if((i__26646__auto___33845 < len__26645__auto___33844)){
args33719.push((arguments[i__26646__auto___33845]));

var G__33846 = (i__26646__auto___33845 + (1));
i__26646__auto___33845 = G__33846;
continue;
} else {
}
break;
}

var G__33721 = args33719.length;
switch (G__33721) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33719.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__25570__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__25570__auto__)){
return or__25570__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__25570__auto__,mults){
return (function (p1__33718_SHARP_){
if(cljs.core.truth_(p1__33718_SHARP_.call(null,topic))){
return p1__33718_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__33718_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__25570__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async33722 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33722 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33723){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33723 = meta33723;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33722.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_33724,meta33723__$1){
var self__ = this;
var _33724__$1 = this;
return (new cljs.core.async.t_cljs$core$async33722(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33723__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33722.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_33724){
var self__ = this;
var _33724__$1 = this;
return self__.meta33723;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33722.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async33722.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33722.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async33722.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33722.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33722.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33722.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33722.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33723","meta33723",1643320982,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33722.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33722.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33722";

cljs.core.async.t_cljs$core$async33722.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__26176__auto__,writer__26177__auto__,opt__26178__auto__){
return cljs.core._write.call(null,writer__26177__auto__,"cljs.core.async/t_cljs$core$async33722");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async33722 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async33722(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33723){
return (new cljs.core.async.t_cljs$core$async33722(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33723));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async33722(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31929__auto___33848 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31929__auto___33848,mults,ensure_mult,p){
return (function (){
var f__31930__auto__ = (function (){var switch__31817__auto__ = ((function (c__31929__auto___33848,mults,ensure_mult,p){
return (function (state_33796){
var state_val_33797 = (state_33796[(1)]);
if((state_val_33797 === (7))){
var inst_33792 = (state_33796[(2)]);
var state_33796__$1 = state_33796;
var statearr_33798_33849 = state_33796__$1;
(statearr_33798_33849[(2)] = inst_33792);

(statearr_33798_33849[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33797 === (20))){
var state_33796__$1 = state_33796;
var statearr_33799_33850 = state_33796__$1;
(statearr_33799_33850[(2)] = null);

(statearr_33799_33850[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33797 === (1))){
var state_33796__$1 = state_33796;
var statearr_33800_33851 = state_33796__$1;
(statearr_33800_33851[(2)] = null);

(statearr_33800_33851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33797 === (24))){
var inst_33775 = (state_33796[(7)]);
var inst_33784 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_33775);
var state_33796__$1 = state_33796;
var statearr_33801_33852 = state_33796__$1;
(statearr_33801_33852[(2)] = inst_33784);

(statearr_33801_33852[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33797 === (4))){
var inst_33727 = (state_33796[(8)]);
var inst_33727__$1 = (state_33796[(2)]);
var inst_33728 = (inst_33727__$1 == null);
var state_33796__$1 = (function (){var statearr_33802 = state_33796;
(statearr_33802[(8)] = inst_33727__$1);

return statearr_33802;
})();
if(cljs.core.truth_(inst_33728)){
var statearr_33803_33853 = state_33796__$1;
(statearr_33803_33853[(1)] = (5));

} else {
var statearr_33804_33854 = state_33796__$1;
(statearr_33804_33854[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33797 === (15))){
var inst_33769 = (state_33796[(2)]);
var state_33796__$1 = state_33796;
var statearr_33805_33855 = state_33796__$1;
(statearr_33805_33855[(2)] = inst_33769);

(statearr_33805_33855[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33797 === (21))){
var inst_33789 = (state_33796[(2)]);
var state_33796__$1 = (function (){var statearr_33806 = state_33796;
(statearr_33806[(9)] = inst_33789);

return statearr_33806;
})();
var statearr_33807_33856 = state_33796__$1;
(statearr_33807_33856[(2)] = null);

(statearr_33807_33856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33797 === (13))){
var inst_33751 = (state_33796[(10)]);
var inst_33753 = cljs.core.chunked_seq_QMARK_.call(null,inst_33751);
var state_33796__$1 = state_33796;
if(inst_33753){
var statearr_33808_33857 = state_33796__$1;
(statearr_33808_33857[(1)] = (16));

} else {
var statearr_33809_33858 = state_33796__$1;
(statearr_33809_33858[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33797 === (22))){
var inst_33781 = (state_33796[(2)]);
var state_33796__$1 = state_33796;
if(cljs.core.truth_(inst_33781)){
var statearr_33810_33859 = state_33796__$1;
(statearr_33810_33859[(1)] = (23));

} else {
var statearr_33811_33860 = state_33796__$1;
(statearr_33811_33860[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33797 === (6))){
var inst_33775 = (state_33796[(7)]);
var inst_33727 = (state_33796[(8)]);
var inst_33777 = (state_33796[(11)]);
var inst_33775__$1 = topic_fn.call(null,inst_33727);
var inst_33776 = cljs.core.deref.call(null,mults);
var inst_33777__$1 = cljs.core.get.call(null,inst_33776,inst_33775__$1);
var state_33796__$1 = (function (){var statearr_33812 = state_33796;
(statearr_33812[(7)] = inst_33775__$1);

(statearr_33812[(11)] = inst_33777__$1);

return statearr_33812;
})();
if(cljs.core.truth_(inst_33777__$1)){
var statearr_33813_33861 = state_33796__$1;
(statearr_33813_33861[(1)] = (19));

} else {
var statearr_33814_33862 = state_33796__$1;
(statearr_33814_33862[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33797 === (25))){
var inst_33786 = (state_33796[(2)]);
var state_33796__$1 = state_33796;
var statearr_33815_33863 = state_33796__$1;
(statearr_33815_33863[(2)] = inst_33786);

(statearr_33815_33863[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33797 === (17))){
var inst_33751 = (state_33796[(10)]);
var inst_33760 = cljs.core.first.call(null,inst_33751);
var inst_33761 = cljs.core.async.muxch_STAR_.call(null,inst_33760);
var inst_33762 = cljs.core.async.close_BANG_.call(null,inst_33761);
var inst_33763 = cljs.core.next.call(null,inst_33751);
var inst_33737 = inst_33763;
var inst_33738 = null;
var inst_33739 = (0);
var inst_33740 = (0);
var state_33796__$1 = (function (){var statearr_33816 = state_33796;
(statearr_33816[(12)] = inst_33738);

(statearr_33816[(13)] = inst_33762);

(statearr_33816[(14)] = inst_33739);

(statearr_33816[(15)] = inst_33740);

(statearr_33816[(16)] = inst_33737);

return statearr_33816;
})();
var statearr_33817_33864 = state_33796__$1;
(statearr_33817_33864[(2)] = null);

(statearr_33817_33864[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33797 === (3))){
var inst_33794 = (state_33796[(2)]);
var state_33796__$1 = state_33796;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33796__$1,inst_33794);
} else {
if((state_val_33797 === (12))){
var inst_33771 = (state_33796[(2)]);
var state_33796__$1 = state_33796;
var statearr_33818_33865 = state_33796__$1;
(statearr_33818_33865[(2)] = inst_33771);

(statearr_33818_33865[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33797 === (2))){
var state_33796__$1 = state_33796;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33796__$1,(4),ch);
} else {
if((state_val_33797 === (23))){
var state_33796__$1 = state_33796;
var statearr_33819_33866 = state_33796__$1;
(statearr_33819_33866[(2)] = null);

(statearr_33819_33866[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33797 === (19))){
var inst_33727 = (state_33796[(8)]);
var inst_33777 = (state_33796[(11)]);
var inst_33779 = cljs.core.async.muxch_STAR_.call(null,inst_33777);
var state_33796__$1 = state_33796;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33796__$1,(22),inst_33779,inst_33727);
} else {
if((state_val_33797 === (11))){
var inst_33751 = (state_33796[(10)]);
var inst_33737 = (state_33796[(16)]);
var inst_33751__$1 = cljs.core.seq.call(null,inst_33737);
var state_33796__$1 = (function (){var statearr_33820 = state_33796;
(statearr_33820[(10)] = inst_33751__$1);

return statearr_33820;
})();
if(inst_33751__$1){
var statearr_33821_33867 = state_33796__$1;
(statearr_33821_33867[(1)] = (13));

} else {
var statearr_33822_33868 = state_33796__$1;
(statearr_33822_33868[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33797 === (9))){
var inst_33773 = (state_33796[(2)]);
var state_33796__$1 = state_33796;
var statearr_33823_33869 = state_33796__$1;
(statearr_33823_33869[(2)] = inst_33773);

(statearr_33823_33869[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33797 === (5))){
var inst_33734 = cljs.core.deref.call(null,mults);
var inst_33735 = cljs.core.vals.call(null,inst_33734);
var inst_33736 = cljs.core.seq.call(null,inst_33735);
var inst_33737 = inst_33736;
var inst_33738 = null;
var inst_33739 = (0);
var inst_33740 = (0);
var state_33796__$1 = (function (){var statearr_33824 = state_33796;
(statearr_33824[(12)] = inst_33738);

(statearr_33824[(14)] = inst_33739);

(statearr_33824[(15)] = inst_33740);

(statearr_33824[(16)] = inst_33737);

return statearr_33824;
})();
var statearr_33825_33870 = state_33796__$1;
(statearr_33825_33870[(2)] = null);

(statearr_33825_33870[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33797 === (14))){
var state_33796__$1 = state_33796;
var statearr_33829_33871 = state_33796__$1;
(statearr_33829_33871[(2)] = null);

(statearr_33829_33871[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33797 === (16))){
var inst_33751 = (state_33796[(10)]);
var inst_33755 = cljs.core.chunk_first.call(null,inst_33751);
var inst_33756 = cljs.core.chunk_rest.call(null,inst_33751);
var inst_33757 = cljs.core.count.call(null,inst_33755);
var inst_33737 = inst_33756;
var inst_33738 = inst_33755;
var inst_33739 = inst_33757;
var inst_33740 = (0);
var state_33796__$1 = (function (){var statearr_33830 = state_33796;
(statearr_33830[(12)] = inst_33738);

(statearr_33830[(14)] = inst_33739);

(statearr_33830[(15)] = inst_33740);

(statearr_33830[(16)] = inst_33737);

return statearr_33830;
})();
var statearr_33831_33872 = state_33796__$1;
(statearr_33831_33872[(2)] = null);

(statearr_33831_33872[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33797 === (10))){
var inst_33738 = (state_33796[(12)]);
var inst_33739 = (state_33796[(14)]);
var inst_33740 = (state_33796[(15)]);
var inst_33737 = (state_33796[(16)]);
var inst_33745 = cljs.core._nth.call(null,inst_33738,inst_33740);
var inst_33746 = cljs.core.async.muxch_STAR_.call(null,inst_33745);
var inst_33747 = cljs.core.async.close_BANG_.call(null,inst_33746);
var inst_33748 = (inst_33740 + (1));
var tmp33826 = inst_33738;
var tmp33827 = inst_33739;
var tmp33828 = inst_33737;
var inst_33737__$1 = tmp33828;
var inst_33738__$1 = tmp33826;
var inst_33739__$1 = tmp33827;
var inst_33740__$1 = inst_33748;
var state_33796__$1 = (function (){var statearr_33832 = state_33796;
(statearr_33832[(12)] = inst_33738__$1);

(statearr_33832[(14)] = inst_33739__$1);

(statearr_33832[(15)] = inst_33740__$1);

(statearr_33832[(16)] = inst_33737__$1);

(statearr_33832[(17)] = inst_33747);

return statearr_33832;
})();
var statearr_33833_33873 = state_33796__$1;
(statearr_33833_33873[(2)] = null);

(statearr_33833_33873[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33797 === (18))){
var inst_33766 = (state_33796[(2)]);
var state_33796__$1 = state_33796;
var statearr_33834_33874 = state_33796__$1;
(statearr_33834_33874[(2)] = inst_33766);

(statearr_33834_33874[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33797 === (8))){
var inst_33739 = (state_33796[(14)]);
var inst_33740 = (state_33796[(15)]);
var inst_33742 = (inst_33740 < inst_33739);
var inst_33743 = inst_33742;
var state_33796__$1 = state_33796;
if(cljs.core.truth_(inst_33743)){
var statearr_33835_33875 = state_33796__$1;
(statearr_33835_33875[(1)] = (10));

} else {
var statearr_33836_33876 = state_33796__$1;
(statearr_33836_33876[(1)] = (11));

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
});})(c__31929__auto___33848,mults,ensure_mult,p))
;
return ((function (switch__31817__auto__,c__31929__auto___33848,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__31818__auto__ = null;
var cljs$core$async$state_machine__31818__auto____0 = (function (){
var statearr_33840 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33840[(0)] = cljs$core$async$state_machine__31818__auto__);

(statearr_33840[(1)] = (1));

return statearr_33840;
});
var cljs$core$async$state_machine__31818__auto____1 = (function (state_33796){
while(true){
var ret_value__31819__auto__ = (function (){try{while(true){
var result__31820__auto__ = switch__31817__auto__.call(null,state_33796);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31820__auto__;
}
break;
}
}catch (e33841){if((e33841 instanceof Object)){
var ex__31821__auto__ = e33841;
var statearr_33842_33877 = state_33796;
(statearr_33842_33877[(5)] = ex__31821__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33796);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33841;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33878 = state_33796;
state_33796 = G__33878;
continue;
} else {
return ret_value__31819__auto__;
}
break;
}
});
cljs$core$async$state_machine__31818__auto__ = function(state_33796){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31818__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31818__auto____1.call(this,state_33796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31818__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31818__auto____0;
cljs$core$async$state_machine__31818__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31818__auto____1;
return cljs$core$async$state_machine__31818__auto__;
})()
;})(switch__31817__auto__,c__31929__auto___33848,mults,ensure_mult,p))
})();
var state__31931__auto__ = (function (){var statearr_33843 = f__31930__auto__.call(null);
(statearr_33843[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31929__auto___33848);

return statearr_33843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31931__auto__);
});})(c__31929__auto___33848,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args33879 = [];
var len__26645__auto___33882 = arguments.length;
var i__26646__auto___33883 = (0);
while(true){
if((i__26646__auto___33883 < len__26645__auto___33882)){
args33879.push((arguments[i__26646__auto___33883]));

var G__33884 = (i__26646__auto___33883 + (1));
i__26646__auto___33883 = G__33884;
continue;
} else {
}
break;
}

var G__33881 = args33879.length;
switch (G__33881) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33879.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args33886 = [];
var len__26645__auto___33889 = arguments.length;
var i__26646__auto___33890 = (0);
while(true){
if((i__26646__auto___33890 < len__26645__auto___33889)){
args33886.push((arguments[i__26646__auto___33890]));

var G__33891 = (i__26646__auto___33890 + (1));
i__26646__auto___33890 = G__33891;
continue;
} else {
}
break;
}

var G__33888 = args33886.length;
switch (G__33888) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33886.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args33893 = [];
var len__26645__auto___33964 = arguments.length;
var i__26646__auto___33965 = (0);
while(true){
if((i__26646__auto___33965 < len__26645__auto___33964)){
args33893.push((arguments[i__26646__auto___33965]));

var G__33966 = (i__26646__auto___33965 + (1));
i__26646__auto___33965 = G__33966;
continue;
} else {
}
break;
}

var G__33895 = args33893.length;
switch (G__33895) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33893.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__31929__auto___33968 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31929__auto___33968,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__31930__auto__ = (function (){var switch__31817__auto__ = ((function (c__31929__auto___33968,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_33934){
var state_val_33935 = (state_33934[(1)]);
if((state_val_33935 === (7))){
var state_33934__$1 = state_33934;
var statearr_33936_33969 = state_33934__$1;
(statearr_33936_33969[(2)] = null);

(statearr_33936_33969[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33935 === (1))){
var state_33934__$1 = state_33934;
var statearr_33937_33970 = state_33934__$1;
(statearr_33937_33970[(2)] = null);

(statearr_33937_33970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33935 === (4))){
var inst_33898 = (state_33934[(7)]);
var inst_33900 = (inst_33898 < cnt);
var state_33934__$1 = state_33934;
if(cljs.core.truth_(inst_33900)){
var statearr_33938_33971 = state_33934__$1;
(statearr_33938_33971[(1)] = (6));

} else {
var statearr_33939_33972 = state_33934__$1;
(statearr_33939_33972[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33935 === (15))){
var inst_33930 = (state_33934[(2)]);
var state_33934__$1 = state_33934;
var statearr_33940_33973 = state_33934__$1;
(statearr_33940_33973[(2)] = inst_33930);

(statearr_33940_33973[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33935 === (13))){
var inst_33923 = cljs.core.async.close_BANG_.call(null,out);
var state_33934__$1 = state_33934;
var statearr_33941_33974 = state_33934__$1;
(statearr_33941_33974[(2)] = inst_33923);

(statearr_33941_33974[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33935 === (6))){
var state_33934__$1 = state_33934;
var statearr_33942_33975 = state_33934__$1;
(statearr_33942_33975[(2)] = null);

(statearr_33942_33975[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33935 === (3))){
var inst_33932 = (state_33934[(2)]);
var state_33934__$1 = state_33934;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33934__$1,inst_33932);
} else {
if((state_val_33935 === (12))){
var inst_33920 = (state_33934[(8)]);
var inst_33920__$1 = (state_33934[(2)]);
var inst_33921 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_33920__$1);
var state_33934__$1 = (function (){var statearr_33943 = state_33934;
(statearr_33943[(8)] = inst_33920__$1);

return statearr_33943;
})();
if(cljs.core.truth_(inst_33921)){
var statearr_33944_33976 = state_33934__$1;
(statearr_33944_33976[(1)] = (13));

} else {
var statearr_33945_33977 = state_33934__$1;
(statearr_33945_33977[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33935 === (2))){
var inst_33897 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_33898 = (0);
var state_33934__$1 = (function (){var statearr_33946 = state_33934;
(statearr_33946[(7)] = inst_33898);

(statearr_33946[(9)] = inst_33897);

return statearr_33946;
})();
var statearr_33947_33978 = state_33934__$1;
(statearr_33947_33978[(2)] = null);

(statearr_33947_33978[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33935 === (11))){
var inst_33898 = (state_33934[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33934,(10),Object,null,(9));
var inst_33907 = chs__$1.call(null,inst_33898);
var inst_33908 = done.call(null,inst_33898);
var inst_33909 = cljs.core.async.take_BANG_.call(null,inst_33907,inst_33908);
var state_33934__$1 = state_33934;
var statearr_33948_33979 = state_33934__$1;
(statearr_33948_33979[(2)] = inst_33909);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33934__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33935 === (9))){
var inst_33898 = (state_33934[(7)]);
var inst_33911 = (state_33934[(2)]);
var inst_33912 = (inst_33898 + (1));
var inst_33898__$1 = inst_33912;
var state_33934__$1 = (function (){var statearr_33949 = state_33934;
(statearr_33949[(7)] = inst_33898__$1);

(statearr_33949[(10)] = inst_33911);

return statearr_33949;
})();
var statearr_33950_33980 = state_33934__$1;
(statearr_33950_33980[(2)] = null);

(statearr_33950_33980[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33935 === (5))){
var inst_33918 = (state_33934[(2)]);
var state_33934__$1 = (function (){var statearr_33951 = state_33934;
(statearr_33951[(11)] = inst_33918);

return statearr_33951;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33934__$1,(12),dchan);
} else {
if((state_val_33935 === (14))){
var inst_33920 = (state_33934[(8)]);
var inst_33925 = cljs.core.apply.call(null,f,inst_33920);
var state_33934__$1 = state_33934;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33934__$1,(16),out,inst_33925);
} else {
if((state_val_33935 === (16))){
var inst_33927 = (state_33934[(2)]);
var state_33934__$1 = (function (){var statearr_33952 = state_33934;
(statearr_33952[(12)] = inst_33927);

return statearr_33952;
})();
var statearr_33953_33981 = state_33934__$1;
(statearr_33953_33981[(2)] = null);

(statearr_33953_33981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33935 === (10))){
var inst_33902 = (state_33934[(2)]);
var inst_33903 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_33934__$1 = (function (){var statearr_33954 = state_33934;
(statearr_33954[(13)] = inst_33902);

return statearr_33954;
})();
var statearr_33955_33982 = state_33934__$1;
(statearr_33955_33982[(2)] = inst_33903);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33934__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33935 === (8))){
var inst_33916 = (state_33934[(2)]);
var state_33934__$1 = state_33934;
var statearr_33956_33983 = state_33934__$1;
(statearr_33956_33983[(2)] = inst_33916);

(statearr_33956_33983[(1)] = (5));


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
});})(c__31929__auto___33968,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__31817__auto__,c__31929__auto___33968,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__31818__auto__ = null;
var cljs$core$async$state_machine__31818__auto____0 = (function (){
var statearr_33960 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33960[(0)] = cljs$core$async$state_machine__31818__auto__);

(statearr_33960[(1)] = (1));

return statearr_33960;
});
var cljs$core$async$state_machine__31818__auto____1 = (function (state_33934){
while(true){
var ret_value__31819__auto__ = (function (){try{while(true){
var result__31820__auto__ = switch__31817__auto__.call(null,state_33934);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31820__auto__;
}
break;
}
}catch (e33961){if((e33961 instanceof Object)){
var ex__31821__auto__ = e33961;
var statearr_33962_33984 = state_33934;
(statearr_33962_33984[(5)] = ex__31821__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33961;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33985 = state_33934;
state_33934 = G__33985;
continue;
} else {
return ret_value__31819__auto__;
}
break;
}
});
cljs$core$async$state_machine__31818__auto__ = function(state_33934){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31818__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31818__auto____1.call(this,state_33934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31818__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31818__auto____0;
cljs$core$async$state_machine__31818__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31818__auto____1;
return cljs$core$async$state_machine__31818__auto__;
})()
;})(switch__31817__auto__,c__31929__auto___33968,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__31931__auto__ = (function (){var statearr_33963 = f__31930__auto__.call(null);
(statearr_33963[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31929__auto___33968);

return statearr_33963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31931__auto__);
});})(c__31929__auto___33968,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args33987 = [];
var len__26645__auto___34045 = arguments.length;
var i__26646__auto___34046 = (0);
while(true){
if((i__26646__auto___34046 < len__26645__auto___34045)){
args33987.push((arguments[i__26646__auto___34046]));

var G__34047 = (i__26646__auto___34046 + (1));
i__26646__auto___34046 = G__34047;
continue;
} else {
}
break;
}

var G__33989 = args33987.length;
switch (G__33989) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33987.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31929__auto___34049 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31929__auto___34049,out){
return (function (){
var f__31930__auto__ = (function (){var switch__31817__auto__ = ((function (c__31929__auto___34049,out){
return (function (state_34021){
var state_val_34022 = (state_34021[(1)]);
if((state_val_34022 === (7))){
var inst_34000 = (state_34021[(7)]);
var inst_34001 = (state_34021[(8)]);
var inst_34000__$1 = (state_34021[(2)]);
var inst_34001__$1 = cljs.core.nth.call(null,inst_34000__$1,(0),null);
var inst_34002 = cljs.core.nth.call(null,inst_34000__$1,(1),null);
var inst_34003 = (inst_34001__$1 == null);
var state_34021__$1 = (function (){var statearr_34023 = state_34021;
(statearr_34023[(7)] = inst_34000__$1);

(statearr_34023[(8)] = inst_34001__$1);

(statearr_34023[(9)] = inst_34002);

return statearr_34023;
})();
if(cljs.core.truth_(inst_34003)){
var statearr_34024_34050 = state_34021__$1;
(statearr_34024_34050[(1)] = (8));

} else {
var statearr_34025_34051 = state_34021__$1;
(statearr_34025_34051[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (1))){
var inst_33990 = cljs.core.vec.call(null,chs);
var inst_33991 = inst_33990;
var state_34021__$1 = (function (){var statearr_34026 = state_34021;
(statearr_34026[(10)] = inst_33991);

return statearr_34026;
})();
var statearr_34027_34052 = state_34021__$1;
(statearr_34027_34052[(2)] = null);

(statearr_34027_34052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (4))){
var inst_33991 = (state_34021[(10)]);
var state_34021__$1 = state_34021;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34021__$1,(7),inst_33991);
} else {
if((state_val_34022 === (6))){
var inst_34017 = (state_34021[(2)]);
var state_34021__$1 = state_34021;
var statearr_34028_34053 = state_34021__$1;
(statearr_34028_34053[(2)] = inst_34017);

(statearr_34028_34053[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (3))){
var inst_34019 = (state_34021[(2)]);
var state_34021__$1 = state_34021;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34021__$1,inst_34019);
} else {
if((state_val_34022 === (2))){
var inst_33991 = (state_34021[(10)]);
var inst_33993 = cljs.core.count.call(null,inst_33991);
var inst_33994 = (inst_33993 > (0));
var state_34021__$1 = state_34021;
if(cljs.core.truth_(inst_33994)){
var statearr_34030_34054 = state_34021__$1;
(statearr_34030_34054[(1)] = (4));

} else {
var statearr_34031_34055 = state_34021__$1;
(statearr_34031_34055[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (11))){
var inst_33991 = (state_34021[(10)]);
var inst_34010 = (state_34021[(2)]);
var tmp34029 = inst_33991;
var inst_33991__$1 = tmp34029;
var state_34021__$1 = (function (){var statearr_34032 = state_34021;
(statearr_34032[(11)] = inst_34010);

(statearr_34032[(10)] = inst_33991__$1);

return statearr_34032;
})();
var statearr_34033_34056 = state_34021__$1;
(statearr_34033_34056[(2)] = null);

(statearr_34033_34056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (9))){
var inst_34001 = (state_34021[(8)]);
var state_34021__$1 = state_34021;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34021__$1,(11),out,inst_34001);
} else {
if((state_val_34022 === (5))){
var inst_34015 = cljs.core.async.close_BANG_.call(null,out);
var state_34021__$1 = state_34021;
var statearr_34034_34057 = state_34021__$1;
(statearr_34034_34057[(2)] = inst_34015);

(statearr_34034_34057[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (10))){
var inst_34013 = (state_34021[(2)]);
var state_34021__$1 = state_34021;
var statearr_34035_34058 = state_34021__$1;
(statearr_34035_34058[(2)] = inst_34013);

(statearr_34035_34058[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (8))){
var inst_34000 = (state_34021[(7)]);
var inst_34001 = (state_34021[(8)]);
var inst_33991 = (state_34021[(10)]);
var inst_34002 = (state_34021[(9)]);
var inst_34005 = (function (){var cs = inst_33991;
var vec__33996 = inst_34000;
var v = inst_34001;
var c = inst_34002;
return ((function (cs,vec__33996,v,c,inst_34000,inst_34001,inst_33991,inst_34002,state_val_34022,c__31929__auto___34049,out){
return (function (p1__33986_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__33986_SHARP_);
});
;})(cs,vec__33996,v,c,inst_34000,inst_34001,inst_33991,inst_34002,state_val_34022,c__31929__auto___34049,out))
})();
var inst_34006 = cljs.core.filterv.call(null,inst_34005,inst_33991);
var inst_33991__$1 = inst_34006;
var state_34021__$1 = (function (){var statearr_34036 = state_34021;
(statearr_34036[(10)] = inst_33991__$1);

return statearr_34036;
})();
var statearr_34037_34059 = state_34021__$1;
(statearr_34037_34059[(2)] = null);

(statearr_34037_34059[(1)] = (2));


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
});})(c__31929__auto___34049,out))
;
return ((function (switch__31817__auto__,c__31929__auto___34049,out){
return (function() {
var cljs$core$async$state_machine__31818__auto__ = null;
var cljs$core$async$state_machine__31818__auto____0 = (function (){
var statearr_34041 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34041[(0)] = cljs$core$async$state_machine__31818__auto__);

(statearr_34041[(1)] = (1));

return statearr_34041;
});
var cljs$core$async$state_machine__31818__auto____1 = (function (state_34021){
while(true){
var ret_value__31819__auto__ = (function (){try{while(true){
var result__31820__auto__ = switch__31817__auto__.call(null,state_34021);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31820__auto__;
}
break;
}
}catch (e34042){if((e34042 instanceof Object)){
var ex__31821__auto__ = e34042;
var statearr_34043_34060 = state_34021;
(statearr_34043_34060[(5)] = ex__31821__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34021);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34042;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34061 = state_34021;
state_34021 = G__34061;
continue;
} else {
return ret_value__31819__auto__;
}
break;
}
});
cljs$core$async$state_machine__31818__auto__ = function(state_34021){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31818__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31818__auto____1.call(this,state_34021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31818__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31818__auto____0;
cljs$core$async$state_machine__31818__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31818__auto____1;
return cljs$core$async$state_machine__31818__auto__;
})()
;})(switch__31817__auto__,c__31929__auto___34049,out))
})();
var state__31931__auto__ = (function (){var statearr_34044 = f__31930__auto__.call(null);
(statearr_34044[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31929__auto___34049);

return statearr_34044;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31931__auto__);
});})(c__31929__auto___34049,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args34062 = [];
var len__26645__auto___34111 = arguments.length;
var i__26646__auto___34112 = (0);
while(true){
if((i__26646__auto___34112 < len__26645__auto___34111)){
args34062.push((arguments[i__26646__auto___34112]));

var G__34113 = (i__26646__auto___34112 + (1));
i__26646__auto___34112 = G__34113;
continue;
} else {
}
break;
}

var G__34064 = args34062.length;
switch (G__34064) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34062.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31929__auto___34115 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31929__auto___34115,out){
return (function (){
var f__31930__auto__ = (function (){var switch__31817__auto__ = ((function (c__31929__auto___34115,out){
return (function (state_34088){
var state_val_34089 = (state_34088[(1)]);
if((state_val_34089 === (7))){
var inst_34070 = (state_34088[(7)]);
var inst_34070__$1 = (state_34088[(2)]);
var inst_34071 = (inst_34070__$1 == null);
var inst_34072 = cljs.core.not.call(null,inst_34071);
var state_34088__$1 = (function (){var statearr_34090 = state_34088;
(statearr_34090[(7)] = inst_34070__$1);

return statearr_34090;
})();
if(inst_34072){
var statearr_34091_34116 = state_34088__$1;
(statearr_34091_34116[(1)] = (8));

} else {
var statearr_34092_34117 = state_34088__$1;
(statearr_34092_34117[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34089 === (1))){
var inst_34065 = (0);
var state_34088__$1 = (function (){var statearr_34093 = state_34088;
(statearr_34093[(8)] = inst_34065);

return statearr_34093;
})();
var statearr_34094_34118 = state_34088__$1;
(statearr_34094_34118[(2)] = null);

(statearr_34094_34118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34089 === (4))){
var state_34088__$1 = state_34088;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34088__$1,(7),ch);
} else {
if((state_val_34089 === (6))){
var inst_34083 = (state_34088[(2)]);
var state_34088__$1 = state_34088;
var statearr_34095_34119 = state_34088__$1;
(statearr_34095_34119[(2)] = inst_34083);

(statearr_34095_34119[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34089 === (3))){
var inst_34085 = (state_34088[(2)]);
var inst_34086 = cljs.core.async.close_BANG_.call(null,out);
var state_34088__$1 = (function (){var statearr_34096 = state_34088;
(statearr_34096[(9)] = inst_34085);

return statearr_34096;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34088__$1,inst_34086);
} else {
if((state_val_34089 === (2))){
var inst_34065 = (state_34088[(8)]);
var inst_34067 = (inst_34065 < n);
var state_34088__$1 = state_34088;
if(cljs.core.truth_(inst_34067)){
var statearr_34097_34120 = state_34088__$1;
(statearr_34097_34120[(1)] = (4));

} else {
var statearr_34098_34121 = state_34088__$1;
(statearr_34098_34121[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34089 === (11))){
var inst_34065 = (state_34088[(8)]);
var inst_34075 = (state_34088[(2)]);
var inst_34076 = (inst_34065 + (1));
var inst_34065__$1 = inst_34076;
var state_34088__$1 = (function (){var statearr_34099 = state_34088;
(statearr_34099[(10)] = inst_34075);

(statearr_34099[(8)] = inst_34065__$1);

return statearr_34099;
})();
var statearr_34100_34122 = state_34088__$1;
(statearr_34100_34122[(2)] = null);

(statearr_34100_34122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34089 === (9))){
var state_34088__$1 = state_34088;
var statearr_34101_34123 = state_34088__$1;
(statearr_34101_34123[(2)] = null);

(statearr_34101_34123[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34089 === (5))){
var state_34088__$1 = state_34088;
var statearr_34102_34124 = state_34088__$1;
(statearr_34102_34124[(2)] = null);

(statearr_34102_34124[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34089 === (10))){
var inst_34080 = (state_34088[(2)]);
var state_34088__$1 = state_34088;
var statearr_34103_34125 = state_34088__$1;
(statearr_34103_34125[(2)] = inst_34080);

(statearr_34103_34125[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34089 === (8))){
var inst_34070 = (state_34088[(7)]);
var state_34088__$1 = state_34088;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34088__$1,(11),out,inst_34070);
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
});})(c__31929__auto___34115,out))
;
return ((function (switch__31817__auto__,c__31929__auto___34115,out){
return (function() {
var cljs$core$async$state_machine__31818__auto__ = null;
var cljs$core$async$state_machine__31818__auto____0 = (function (){
var statearr_34107 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34107[(0)] = cljs$core$async$state_machine__31818__auto__);

(statearr_34107[(1)] = (1));

return statearr_34107;
});
var cljs$core$async$state_machine__31818__auto____1 = (function (state_34088){
while(true){
var ret_value__31819__auto__ = (function (){try{while(true){
var result__31820__auto__ = switch__31817__auto__.call(null,state_34088);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31820__auto__;
}
break;
}
}catch (e34108){if((e34108 instanceof Object)){
var ex__31821__auto__ = e34108;
var statearr_34109_34126 = state_34088;
(statearr_34109_34126[(5)] = ex__31821__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34088);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34108;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34127 = state_34088;
state_34088 = G__34127;
continue;
} else {
return ret_value__31819__auto__;
}
break;
}
});
cljs$core$async$state_machine__31818__auto__ = function(state_34088){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31818__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31818__auto____1.call(this,state_34088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31818__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31818__auto____0;
cljs$core$async$state_machine__31818__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31818__auto____1;
return cljs$core$async$state_machine__31818__auto__;
})()
;})(switch__31817__auto__,c__31929__auto___34115,out))
})();
var state__31931__auto__ = (function (){var statearr_34110 = f__31930__auto__.call(null);
(statearr_34110[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31929__auto___34115);

return statearr_34110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31931__auto__);
});})(c__31929__auto___34115,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34135 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34135 = (function (map_LT_,f,ch,meta34136){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta34136 = meta34136;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34135.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34137,meta34136__$1){
var self__ = this;
var _34137__$1 = this;
return (new cljs.core.async.t_cljs$core$async34135(self__.map_LT_,self__.f,self__.ch,meta34136__$1));
});

cljs.core.async.t_cljs$core$async34135.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34137){
var self__ = this;
var _34137__$1 = this;
return self__.meta34136;
});

cljs.core.async.t_cljs$core$async34135.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async34135.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34135.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34135.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async34135.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async34138 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34138 = (function (map_LT_,f,ch,meta34136,_,fn1,meta34139){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta34136 = meta34136;
this._ = _;
this.fn1 = fn1;
this.meta34139 = meta34139;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34138.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34140,meta34139__$1){
var self__ = this;
var _34140__$1 = this;
return (new cljs.core.async.t_cljs$core$async34138(self__.map_LT_,self__.f,self__.ch,self__.meta34136,self__._,self__.fn1,meta34139__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async34138.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34140){
var self__ = this;
var _34140__$1 = this;
return self__.meta34139;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34138.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async34138.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34138.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34138.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34128_SHARP_){
return f1.call(null,(((p1__34128_SHARP_ == null))?null:self__.f.call(null,p1__34128_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async34138.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34136","meta34136",-1189709418,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34135","cljs.core.async/t_cljs$core$async34135",-1221961995,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34139","meta34139",-994751288,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34138.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34138.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34138";

cljs.core.async.t_cljs$core$async34138.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__26176__auto__,writer__26177__auto__,opt__26178__auto__){
return cljs.core._write.call(null,writer__26177__auto__,"cljs.core.async/t_cljs$core$async34138");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async34138 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34138(map_LT___$1,f__$1,ch__$1,meta34136__$1,___$2,fn1__$1,meta34139){
return (new cljs.core.async.t_cljs$core$async34138(map_LT___$1,f__$1,ch__$1,meta34136__$1,___$2,fn1__$1,meta34139));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async34138(self__.map_LT_,self__.f,self__.ch,self__.meta34136,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__25558__auto__ = ret;
if(cljs.core.truth_(and__25558__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__25558__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async34135.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async34135.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async34135.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34136","meta34136",-1189709418,null)], null);
});

cljs.core.async.t_cljs$core$async34135.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34135.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34135";

cljs.core.async.t_cljs$core$async34135.cljs$lang$ctorPrWriter = (function (this__26176__auto__,writer__26177__auto__,opt__26178__auto__){
return cljs.core._write.call(null,writer__26177__auto__,"cljs.core.async/t_cljs$core$async34135");
});

cljs.core.async.__GT_t_cljs$core$async34135 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34135(map_LT___$1,f__$1,ch__$1,meta34136){
return (new cljs.core.async.t_cljs$core$async34135(map_LT___$1,f__$1,ch__$1,meta34136));
});

}

return (new cljs.core.async.t_cljs$core$async34135(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34144 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34144 = (function (map_GT_,f,ch,meta34145){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta34145 = meta34145;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34144.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34146,meta34145__$1){
var self__ = this;
var _34146__$1 = this;
return (new cljs.core.async.t_cljs$core$async34144(self__.map_GT_,self__.f,self__.ch,meta34145__$1));
});

cljs.core.async.t_cljs$core$async34144.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34146){
var self__ = this;
var _34146__$1 = this;
return self__.meta34145;
});

cljs.core.async.t_cljs$core$async34144.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async34144.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34144.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async34144.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34144.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async34144.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async34144.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34145","meta34145",-204539862,null)], null);
});

cljs.core.async.t_cljs$core$async34144.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34144.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34144";

cljs.core.async.t_cljs$core$async34144.cljs$lang$ctorPrWriter = (function (this__26176__auto__,writer__26177__auto__,opt__26178__auto__){
return cljs.core._write.call(null,writer__26177__auto__,"cljs.core.async/t_cljs$core$async34144");
});

cljs.core.async.__GT_t_cljs$core$async34144 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34144(map_GT___$1,f__$1,ch__$1,meta34145){
return (new cljs.core.async.t_cljs$core$async34144(map_GT___$1,f__$1,ch__$1,meta34145));
});

}

return (new cljs.core.async.t_cljs$core$async34144(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async34150 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34150 = (function (filter_GT_,p,ch,meta34151){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta34151 = meta34151;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34150.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34152,meta34151__$1){
var self__ = this;
var _34152__$1 = this;
return (new cljs.core.async.t_cljs$core$async34150(self__.filter_GT_,self__.p,self__.ch,meta34151__$1));
});

cljs.core.async.t_cljs$core$async34150.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34152){
var self__ = this;
var _34152__$1 = this;
return self__.meta34151;
});

cljs.core.async.t_cljs$core$async34150.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async34150.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34150.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34150.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async34150.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34150.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async34150.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async34150.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34151","meta34151",1610938157,null)], null);
});

cljs.core.async.t_cljs$core$async34150.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34150.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34150";

cljs.core.async.t_cljs$core$async34150.cljs$lang$ctorPrWriter = (function (this__26176__auto__,writer__26177__auto__,opt__26178__auto__){
return cljs.core._write.call(null,writer__26177__auto__,"cljs.core.async/t_cljs$core$async34150");
});

cljs.core.async.__GT_t_cljs$core$async34150 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34150(filter_GT___$1,p__$1,ch__$1,meta34151){
return (new cljs.core.async.t_cljs$core$async34150(filter_GT___$1,p__$1,ch__$1,meta34151));
});

}

return (new cljs.core.async.t_cljs$core$async34150(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args34153 = [];
var len__26645__auto___34197 = arguments.length;
var i__26646__auto___34198 = (0);
while(true){
if((i__26646__auto___34198 < len__26645__auto___34197)){
args34153.push((arguments[i__26646__auto___34198]));

var G__34199 = (i__26646__auto___34198 + (1));
i__26646__auto___34198 = G__34199;
continue;
} else {
}
break;
}

var G__34155 = args34153.length;
switch (G__34155) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34153.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31929__auto___34201 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31929__auto___34201,out){
return (function (){
var f__31930__auto__ = (function (){var switch__31817__auto__ = ((function (c__31929__auto___34201,out){
return (function (state_34176){
var state_val_34177 = (state_34176[(1)]);
if((state_val_34177 === (7))){
var inst_34172 = (state_34176[(2)]);
var state_34176__$1 = state_34176;
var statearr_34178_34202 = state_34176__$1;
(statearr_34178_34202[(2)] = inst_34172);

(statearr_34178_34202[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34177 === (1))){
var state_34176__$1 = state_34176;
var statearr_34179_34203 = state_34176__$1;
(statearr_34179_34203[(2)] = null);

(statearr_34179_34203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34177 === (4))){
var inst_34158 = (state_34176[(7)]);
var inst_34158__$1 = (state_34176[(2)]);
var inst_34159 = (inst_34158__$1 == null);
var state_34176__$1 = (function (){var statearr_34180 = state_34176;
(statearr_34180[(7)] = inst_34158__$1);

return statearr_34180;
})();
if(cljs.core.truth_(inst_34159)){
var statearr_34181_34204 = state_34176__$1;
(statearr_34181_34204[(1)] = (5));

} else {
var statearr_34182_34205 = state_34176__$1;
(statearr_34182_34205[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34177 === (6))){
var inst_34158 = (state_34176[(7)]);
var inst_34163 = p.call(null,inst_34158);
var state_34176__$1 = state_34176;
if(cljs.core.truth_(inst_34163)){
var statearr_34183_34206 = state_34176__$1;
(statearr_34183_34206[(1)] = (8));

} else {
var statearr_34184_34207 = state_34176__$1;
(statearr_34184_34207[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34177 === (3))){
var inst_34174 = (state_34176[(2)]);
var state_34176__$1 = state_34176;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34176__$1,inst_34174);
} else {
if((state_val_34177 === (2))){
var state_34176__$1 = state_34176;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34176__$1,(4),ch);
} else {
if((state_val_34177 === (11))){
var inst_34166 = (state_34176[(2)]);
var state_34176__$1 = state_34176;
var statearr_34185_34208 = state_34176__$1;
(statearr_34185_34208[(2)] = inst_34166);

(statearr_34185_34208[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34177 === (9))){
var state_34176__$1 = state_34176;
var statearr_34186_34209 = state_34176__$1;
(statearr_34186_34209[(2)] = null);

(statearr_34186_34209[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34177 === (5))){
var inst_34161 = cljs.core.async.close_BANG_.call(null,out);
var state_34176__$1 = state_34176;
var statearr_34187_34210 = state_34176__$1;
(statearr_34187_34210[(2)] = inst_34161);

(statearr_34187_34210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34177 === (10))){
var inst_34169 = (state_34176[(2)]);
var state_34176__$1 = (function (){var statearr_34188 = state_34176;
(statearr_34188[(8)] = inst_34169);

return statearr_34188;
})();
var statearr_34189_34211 = state_34176__$1;
(statearr_34189_34211[(2)] = null);

(statearr_34189_34211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34177 === (8))){
var inst_34158 = (state_34176[(7)]);
var state_34176__$1 = state_34176;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34176__$1,(11),out,inst_34158);
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
});})(c__31929__auto___34201,out))
;
return ((function (switch__31817__auto__,c__31929__auto___34201,out){
return (function() {
var cljs$core$async$state_machine__31818__auto__ = null;
var cljs$core$async$state_machine__31818__auto____0 = (function (){
var statearr_34193 = [null,null,null,null,null,null,null,null,null];
(statearr_34193[(0)] = cljs$core$async$state_machine__31818__auto__);

(statearr_34193[(1)] = (1));

return statearr_34193;
});
var cljs$core$async$state_machine__31818__auto____1 = (function (state_34176){
while(true){
var ret_value__31819__auto__ = (function (){try{while(true){
var result__31820__auto__ = switch__31817__auto__.call(null,state_34176);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31820__auto__;
}
break;
}
}catch (e34194){if((e34194 instanceof Object)){
var ex__31821__auto__ = e34194;
var statearr_34195_34212 = state_34176;
(statearr_34195_34212[(5)] = ex__31821__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34176);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34194;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34213 = state_34176;
state_34176 = G__34213;
continue;
} else {
return ret_value__31819__auto__;
}
break;
}
});
cljs$core$async$state_machine__31818__auto__ = function(state_34176){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31818__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31818__auto____1.call(this,state_34176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31818__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31818__auto____0;
cljs$core$async$state_machine__31818__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31818__auto____1;
return cljs$core$async$state_machine__31818__auto__;
})()
;})(switch__31817__auto__,c__31929__auto___34201,out))
})();
var state__31931__auto__ = (function (){var statearr_34196 = f__31930__auto__.call(null);
(statearr_34196[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31929__auto___34201);

return statearr_34196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31931__auto__);
});})(c__31929__auto___34201,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args34214 = [];
var len__26645__auto___34217 = arguments.length;
var i__26646__auto___34218 = (0);
while(true){
if((i__26646__auto___34218 < len__26645__auto___34217)){
args34214.push((arguments[i__26646__auto___34218]));

var G__34219 = (i__26646__auto___34218 + (1));
i__26646__auto___34218 = G__34219;
continue;
} else {
}
break;
}

var G__34216 = args34214.length;
switch (G__34216) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34214.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__31929__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31929__auto__){
return (function (){
var f__31930__auto__ = (function (){var switch__31817__auto__ = ((function (c__31929__auto__){
return (function (state_34386){
var state_val_34387 = (state_34386[(1)]);
if((state_val_34387 === (7))){
var inst_34382 = (state_34386[(2)]);
var state_34386__$1 = state_34386;
var statearr_34388_34429 = state_34386__$1;
(statearr_34388_34429[(2)] = inst_34382);

(statearr_34388_34429[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (20))){
var inst_34352 = (state_34386[(7)]);
var inst_34363 = (state_34386[(2)]);
var inst_34364 = cljs.core.next.call(null,inst_34352);
var inst_34338 = inst_34364;
var inst_34339 = null;
var inst_34340 = (0);
var inst_34341 = (0);
var state_34386__$1 = (function (){var statearr_34389 = state_34386;
(statearr_34389[(8)] = inst_34341);

(statearr_34389[(9)] = inst_34338);

(statearr_34389[(10)] = inst_34339);

(statearr_34389[(11)] = inst_34340);

(statearr_34389[(12)] = inst_34363);

return statearr_34389;
})();
var statearr_34390_34430 = state_34386__$1;
(statearr_34390_34430[(2)] = null);

(statearr_34390_34430[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (1))){
var state_34386__$1 = state_34386;
var statearr_34391_34431 = state_34386__$1;
(statearr_34391_34431[(2)] = null);

(statearr_34391_34431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (4))){
var inst_34327 = (state_34386[(13)]);
var inst_34327__$1 = (state_34386[(2)]);
var inst_34328 = (inst_34327__$1 == null);
var state_34386__$1 = (function (){var statearr_34392 = state_34386;
(statearr_34392[(13)] = inst_34327__$1);

return statearr_34392;
})();
if(cljs.core.truth_(inst_34328)){
var statearr_34393_34432 = state_34386__$1;
(statearr_34393_34432[(1)] = (5));

} else {
var statearr_34394_34433 = state_34386__$1;
(statearr_34394_34433[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (15))){
var state_34386__$1 = state_34386;
var statearr_34398_34434 = state_34386__$1;
(statearr_34398_34434[(2)] = null);

(statearr_34398_34434[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (21))){
var state_34386__$1 = state_34386;
var statearr_34399_34435 = state_34386__$1;
(statearr_34399_34435[(2)] = null);

(statearr_34399_34435[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (13))){
var inst_34341 = (state_34386[(8)]);
var inst_34338 = (state_34386[(9)]);
var inst_34339 = (state_34386[(10)]);
var inst_34340 = (state_34386[(11)]);
var inst_34348 = (state_34386[(2)]);
var inst_34349 = (inst_34341 + (1));
var tmp34395 = inst_34338;
var tmp34396 = inst_34339;
var tmp34397 = inst_34340;
var inst_34338__$1 = tmp34395;
var inst_34339__$1 = tmp34396;
var inst_34340__$1 = tmp34397;
var inst_34341__$1 = inst_34349;
var state_34386__$1 = (function (){var statearr_34400 = state_34386;
(statearr_34400[(8)] = inst_34341__$1);

(statearr_34400[(9)] = inst_34338__$1);

(statearr_34400[(10)] = inst_34339__$1);

(statearr_34400[(11)] = inst_34340__$1);

(statearr_34400[(14)] = inst_34348);

return statearr_34400;
})();
var statearr_34401_34436 = state_34386__$1;
(statearr_34401_34436[(2)] = null);

(statearr_34401_34436[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (22))){
var state_34386__$1 = state_34386;
var statearr_34402_34437 = state_34386__$1;
(statearr_34402_34437[(2)] = null);

(statearr_34402_34437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (6))){
var inst_34327 = (state_34386[(13)]);
var inst_34336 = f.call(null,inst_34327);
var inst_34337 = cljs.core.seq.call(null,inst_34336);
var inst_34338 = inst_34337;
var inst_34339 = null;
var inst_34340 = (0);
var inst_34341 = (0);
var state_34386__$1 = (function (){var statearr_34403 = state_34386;
(statearr_34403[(8)] = inst_34341);

(statearr_34403[(9)] = inst_34338);

(statearr_34403[(10)] = inst_34339);

(statearr_34403[(11)] = inst_34340);

return statearr_34403;
})();
var statearr_34404_34438 = state_34386__$1;
(statearr_34404_34438[(2)] = null);

(statearr_34404_34438[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (17))){
var inst_34352 = (state_34386[(7)]);
var inst_34356 = cljs.core.chunk_first.call(null,inst_34352);
var inst_34357 = cljs.core.chunk_rest.call(null,inst_34352);
var inst_34358 = cljs.core.count.call(null,inst_34356);
var inst_34338 = inst_34357;
var inst_34339 = inst_34356;
var inst_34340 = inst_34358;
var inst_34341 = (0);
var state_34386__$1 = (function (){var statearr_34405 = state_34386;
(statearr_34405[(8)] = inst_34341);

(statearr_34405[(9)] = inst_34338);

(statearr_34405[(10)] = inst_34339);

(statearr_34405[(11)] = inst_34340);

return statearr_34405;
})();
var statearr_34406_34439 = state_34386__$1;
(statearr_34406_34439[(2)] = null);

(statearr_34406_34439[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (3))){
var inst_34384 = (state_34386[(2)]);
var state_34386__$1 = state_34386;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34386__$1,inst_34384);
} else {
if((state_val_34387 === (12))){
var inst_34372 = (state_34386[(2)]);
var state_34386__$1 = state_34386;
var statearr_34407_34440 = state_34386__$1;
(statearr_34407_34440[(2)] = inst_34372);

(statearr_34407_34440[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (2))){
var state_34386__$1 = state_34386;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34386__$1,(4),in$);
} else {
if((state_val_34387 === (23))){
var inst_34380 = (state_34386[(2)]);
var state_34386__$1 = state_34386;
var statearr_34408_34441 = state_34386__$1;
(statearr_34408_34441[(2)] = inst_34380);

(statearr_34408_34441[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (19))){
var inst_34367 = (state_34386[(2)]);
var state_34386__$1 = state_34386;
var statearr_34409_34442 = state_34386__$1;
(statearr_34409_34442[(2)] = inst_34367);

(statearr_34409_34442[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (11))){
var inst_34338 = (state_34386[(9)]);
var inst_34352 = (state_34386[(7)]);
var inst_34352__$1 = cljs.core.seq.call(null,inst_34338);
var state_34386__$1 = (function (){var statearr_34410 = state_34386;
(statearr_34410[(7)] = inst_34352__$1);

return statearr_34410;
})();
if(inst_34352__$1){
var statearr_34411_34443 = state_34386__$1;
(statearr_34411_34443[(1)] = (14));

} else {
var statearr_34412_34444 = state_34386__$1;
(statearr_34412_34444[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (9))){
var inst_34374 = (state_34386[(2)]);
var inst_34375 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_34386__$1 = (function (){var statearr_34413 = state_34386;
(statearr_34413[(15)] = inst_34374);

return statearr_34413;
})();
if(cljs.core.truth_(inst_34375)){
var statearr_34414_34445 = state_34386__$1;
(statearr_34414_34445[(1)] = (21));

} else {
var statearr_34415_34446 = state_34386__$1;
(statearr_34415_34446[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (5))){
var inst_34330 = cljs.core.async.close_BANG_.call(null,out);
var state_34386__$1 = state_34386;
var statearr_34416_34447 = state_34386__$1;
(statearr_34416_34447[(2)] = inst_34330);

(statearr_34416_34447[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (14))){
var inst_34352 = (state_34386[(7)]);
var inst_34354 = cljs.core.chunked_seq_QMARK_.call(null,inst_34352);
var state_34386__$1 = state_34386;
if(inst_34354){
var statearr_34417_34448 = state_34386__$1;
(statearr_34417_34448[(1)] = (17));

} else {
var statearr_34418_34449 = state_34386__$1;
(statearr_34418_34449[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (16))){
var inst_34370 = (state_34386[(2)]);
var state_34386__$1 = state_34386;
var statearr_34419_34450 = state_34386__$1;
(statearr_34419_34450[(2)] = inst_34370);

(statearr_34419_34450[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34387 === (10))){
var inst_34341 = (state_34386[(8)]);
var inst_34339 = (state_34386[(10)]);
var inst_34346 = cljs.core._nth.call(null,inst_34339,inst_34341);
var state_34386__$1 = state_34386;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34386__$1,(13),out,inst_34346);
} else {
if((state_val_34387 === (18))){
var inst_34352 = (state_34386[(7)]);
var inst_34361 = cljs.core.first.call(null,inst_34352);
var state_34386__$1 = state_34386;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34386__$1,(20),out,inst_34361);
} else {
if((state_val_34387 === (8))){
var inst_34341 = (state_34386[(8)]);
var inst_34340 = (state_34386[(11)]);
var inst_34343 = (inst_34341 < inst_34340);
var inst_34344 = inst_34343;
var state_34386__$1 = state_34386;
if(cljs.core.truth_(inst_34344)){
var statearr_34420_34451 = state_34386__$1;
(statearr_34420_34451[(1)] = (10));

} else {
var statearr_34421_34452 = state_34386__$1;
(statearr_34421_34452[(1)] = (11));

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
});})(c__31929__auto__))
;
return ((function (switch__31817__auto__,c__31929__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__31818__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__31818__auto____0 = (function (){
var statearr_34425 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34425[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__31818__auto__);

(statearr_34425[(1)] = (1));

return statearr_34425;
});
var cljs$core$async$mapcat_STAR__$_state_machine__31818__auto____1 = (function (state_34386){
while(true){
var ret_value__31819__auto__ = (function (){try{while(true){
var result__31820__auto__ = switch__31817__auto__.call(null,state_34386);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31820__auto__;
}
break;
}
}catch (e34426){if((e34426 instanceof Object)){
var ex__31821__auto__ = e34426;
var statearr_34427_34453 = state_34386;
(statearr_34427_34453[(5)] = ex__31821__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34386);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34426;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34454 = state_34386;
state_34386 = G__34454;
continue;
} else {
return ret_value__31819__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__31818__auto__ = function(state_34386){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__31818__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__31818__auto____1.call(this,state_34386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__31818__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__31818__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__31818__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__31818__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__31818__auto__;
})()
;})(switch__31817__auto__,c__31929__auto__))
})();
var state__31931__auto__ = (function (){var statearr_34428 = f__31930__auto__.call(null);
(statearr_34428[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31929__auto__);

return statearr_34428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31931__auto__);
});})(c__31929__auto__))
);

return c__31929__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args34455 = [];
var len__26645__auto___34458 = arguments.length;
var i__26646__auto___34459 = (0);
while(true){
if((i__26646__auto___34459 < len__26645__auto___34458)){
args34455.push((arguments[i__26646__auto___34459]));

var G__34460 = (i__26646__auto___34459 + (1));
i__26646__auto___34459 = G__34460;
continue;
} else {
}
break;
}

var G__34457 = args34455.length;
switch (G__34457) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34455.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args34462 = [];
var len__26645__auto___34465 = arguments.length;
var i__26646__auto___34466 = (0);
while(true){
if((i__26646__auto___34466 < len__26645__auto___34465)){
args34462.push((arguments[i__26646__auto___34466]));

var G__34467 = (i__26646__auto___34466 + (1));
i__26646__auto___34466 = G__34467;
continue;
} else {
}
break;
}

var G__34464 = args34462.length;
switch (G__34464) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34462.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args34469 = [];
var len__26645__auto___34520 = arguments.length;
var i__26646__auto___34521 = (0);
while(true){
if((i__26646__auto___34521 < len__26645__auto___34520)){
args34469.push((arguments[i__26646__auto___34521]));

var G__34522 = (i__26646__auto___34521 + (1));
i__26646__auto___34521 = G__34522;
continue;
} else {
}
break;
}

var G__34471 = args34469.length;
switch (G__34471) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34469.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31929__auto___34524 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31929__auto___34524,out){
return (function (){
var f__31930__auto__ = (function (){var switch__31817__auto__ = ((function (c__31929__auto___34524,out){
return (function (state_34495){
var state_val_34496 = (state_34495[(1)]);
if((state_val_34496 === (7))){
var inst_34490 = (state_34495[(2)]);
var state_34495__$1 = state_34495;
var statearr_34497_34525 = state_34495__$1;
(statearr_34497_34525[(2)] = inst_34490);

(statearr_34497_34525[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (1))){
var inst_34472 = null;
var state_34495__$1 = (function (){var statearr_34498 = state_34495;
(statearr_34498[(7)] = inst_34472);

return statearr_34498;
})();
var statearr_34499_34526 = state_34495__$1;
(statearr_34499_34526[(2)] = null);

(statearr_34499_34526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (4))){
var inst_34475 = (state_34495[(8)]);
var inst_34475__$1 = (state_34495[(2)]);
var inst_34476 = (inst_34475__$1 == null);
var inst_34477 = cljs.core.not.call(null,inst_34476);
var state_34495__$1 = (function (){var statearr_34500 = state_34495;
(statearr_34500[(8)] = inst_34475__$1);

return statearr_34500;
})();
if(inst_34477){
var statearr_34501_34527 = state_34495__$1;
(statearr_34501_34527[(1)] = (5));

} else {
var statearr_34502_34528 = state_34495__$1;
(statearr_34502_34528[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (6))){
var state_34495__$1 = state_34495;
var statearr_34503_34529 = state_34495__$1;
(statearr_34503_34529[(2)] = null);

(statearr_34503_34529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (3))){
var inst_34492 = (state_34495[(2)]);
var inst_34493 = cljs.core.async.close_BANG_.call(null,out);
var state_34495__$1 = (function (){var statearr_34504 = state_34495;
(statearr_34504[(9)] = inst_34492);

return statearr_34504;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34495__$1,inst_34493);
} else {
if((state_val_34496 === (2))){
var state_34495__$1 = state_34495;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34495__$1,(4),ch);
} else {
if((state_val_34496 === (11))){
var inst_34475 = (state_34495[(8)]);
var inst_34484 = (state_34495[(2)]);
var inst_34472 = inst_34475;
var state_34495__$1 = (function (){var statearr_34505 = state_34495;
(statearr_34505[(7)] = inst_34472);

(statearr_34505[(10)] = inst_34484);

return statearr_34505;
})();
var statearr_34506_34530 = state_34495__$1;
(statearr_34506_34530[(2)] = null);

(statearr_34506_34530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (9))){
var inst_34475 = (state_34495[(8)]);
var state_34495__$1 = state_34495;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34495__$1,(11),out,inst_34475);
} else {
if((state_val_34496 === (5))){
var inst_34475 = (state_34495[(8)]);
var inst_34472 = (state_34495[(7)]);
var inst_34479 = cljs.core._EQ_.call(null,inst_34475,inst_34472);
var state_34495__$1 = state_34495;
if(inst_34479){
var statearr_34508_34531 = state_34495__$1;
(statearr_34508_34531[(1)] = (8));

} else {
var statearr_34509_34532 = state_34495__$1;
(statearr_34509_34532[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (10))){
var inst_34487 = (state_34495[(2)]);
var state_34495__$1 = state_34495;
var statearr_34510_34533 = state_34495__$1;
(statearr_34510_34533[(2)] = inst_34487);

(statearr_34510_34533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (8))){
var inst_34472 = (state_34495[(7)]);
var tmp34507 = inst_34472;
var inst_34472__$1 = tmp34507;
var state_34495__$1 = (function (){var statearr_34511 = state_34495;
(statearr_34511[(7)] = inst_34472__$1);

return statearr_34511;
})();
var statearr_34512_34534 = state_34495__$1;
(statearr_34512_34534[(2)] = null);

(statearr_34512_34534[(1)] = (2));


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
});})(c__31929__auto___34524,out))
;
return ((function (switch__31817__auto__,c__31929__auto___34524,out){
return (function() {
var cljs$core$async$state_machine__31818__auto__ = null;
var cljs$core$async$state_machine__31818__auto____0 = (function (){
var statearr_34516 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34516[(0)] = cljs$core$async$state_machine__31818__auto__);

(statearr_34516[(1)] = (1));

return statearr_34516;
});
var cljs$core$async$state_machine__31818__auto____1 = (function (state_34495){
while(true){
var ret_value__31819__auto__ = (function (){try{while(true){
var result__31820__auto__ = switch__31817__auto__.call(null,state_34495);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31820__auto__;
}
break;
}
}catch (e34517){if((e34517 instanceof Object)){
var ex__31821__auto__ = e34517;
var statearr_34518_34535 = state_34495;
(statearr_34518_34535[(5)] = ex__31821__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34495);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34517;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34536 = state_34495;
state_34495 = G__34536;
continue;
} else {
return ret_value__31819__auto__;
}
break;
}
});
cljs$core$async$state_machine__31818__auto__ = function(state_34495){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31818__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31818__auto____1.call(this,state_34495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31818__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31818__auto____0;
cljs$core$async$state_machine__31818__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31818__auto____1;
return cljs$core$async$state_machine__31818__auto__;
})()
;})(switch__31817__auto__,c__31929__auto___34524,out))
})();
var state__31931__auto__ = (function (){var statearr_34519 = f__31930__auto__.call(null);
(statearr_34519[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31929__auto___34524);

return statearr_34519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31931__auto__);
});})(c__31929__auto___34524,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args34537 = [];
var len__26645__auto___34607 = arguments.length;
var i__26646__auto___34608 = (0);
while(true){
if((i__26646__auto___34608 < len__26645__auto___34607)){
args34537.push((arguments[i__26646__auto___34608]));

var G__34609 = (i__26646__auto___34608 + (1));
i__26646__auto___34608 = G__34609;
continue;
} else {
}
break;
}

var G__34539 = args34537.length;
switch (G__34539) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34537.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31929__auto___34611 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31929__auto___34611,out){
return (function (){
var f__31930__auto__ = (function (){var switch__31817__auto__ = ((function (c__31929__auto___34611,out){
return (function (state_34577){
var state_val_34578 = (state_34577[(1)]);
if((state_val_34578 === (7))){
var inst_34573 = (state_34577[(2)]);
var state_34577__$1 = state_34577;
var statearr_34579_34612 = state_34577__$1;
(statearr_34579_34612[(2)] = inst_34573);

(statearr_34579_34612[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34578 === (1))){
var inst_34540 = (new Array(n));
var inst_34541 = inst_34540;
var inst_34542 = (0);
var state_34577__$1 = (function (){var statearr_34580 = state_34577;
(statearr_34580[(7)] = inst_34542);

(statearr_34580[(8)] = inst_34541);

return statearr_34580;
})();
var statearr_34581_34613 = state_34577__$1;
(statearr_34581_34613[(2)] = null);

(statearr_34581_34613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34578 === (4))){
var inst_34545 = (state_34577[(9)]);
var inst_34545__$1 = (state_34577[(2)]);
var inst_34546 = (inst_34545__$1 == null);
var inst_34547 = cljs.core.not.call(null,inst_34546);
var state_34577__$1 = (function (){var statearr_34582 = state_34577;
(statearr_34582[(9)] = inst_34545__$1);

return statearr_34582;
})();
if(inst_34547){
var statearr_34583_34614 = state_34577__$1;
(statearr_34583_34614[(1)] = (5));

} else {
var statearr_34584_34615 = state_34577__$1;
(statearr_34584_34615[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34578 === (15))){
var inst_34567 = (state_34577[(2)]);
var state_34577__$1 = state_34577;
var statearr_34585_34616 = state_34577__$1;
(statearr_34585_34616[(2)] = inst_34567);

(statearr_34585_34616[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34578 === (13))){
var state_34577__$1 = state_34577;
var statearr_34586_34617 = state_34577__$1;
(statearr_34586_34617[(2)] = null);

(statearr_34586_34617[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34578 === (6))){
var inst_34542 = (state_34577[(7)]);
var inst_34563 = (inst_34542 > (0));
var state_34577__$1 = state_34577;
if(cljs.core.truth_(inst_34563)){
var statearr_34587_34618 = state_34577__$1;
(statearr_34587_34618[(1)] = (12));

} else {
var statearr_34588_34619 = state_34577__$1;
(statearr_34588_34619[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34578 === (3))){
var inst_34575 = (state_34577[(2)]);
var state_34577__$1 = state_34577;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34577__$1,inst_34575);
} else {
if((state_val_34578 === (12))){
var inst_34541 = (state_34577[(8)]);
var inst_34565 = cljs.core.vec.call(null,inst_34541);
var state_34577__$1 = state_34577;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34577__$1,(15),out,inst_34565);
} else {
if((state_val_34578 === (2))){
var state_34577__$1 = state_34577;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34577__$1,(4),ch);
} else {
if((state_val_34578 === (11))){
var inst_34557 = (state_34577[(2)]);
var inst_34558 = (new Array(n));
var inst_34541 = inst_34558;
var inst_34542 = (0);
var state_34577__$1 = (function (){var statearr_34589 = state_34577;
(statearr_34589[(7)] = inst_34542);

(statearr_34589[(8)] = inst_34541);

(statearr_34589[(10)] = inst_34557);

return statearr_34589;
})();
var statearr_34590_34620 = state_34577__$1;
(statearr_34590_34620[(2)] = null);

(statearr_34590_34620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34578 === (9))){
var inst_34541 = (state_34577[(8)]);
var inst_34555 = cljs.core.vec.call(null,inst_34541);
var state_34577__$1 = state_34577;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34577__$1,(11),out,inst_34555);
} else {
if((state_val_34578 === (5))){
var inst_34542 = (state_34577[(7)]);
var inst_34550 = (state_34577[(11)]);
var inst_34545 = (state_34577[(9)]);
var inst_34541 = (state_34577[(8)]);
var inst_34549 = (inst_34541[inst_34542] = inst_34545);
var inst_34550__$1 = (inst_34542 + (1));
var inst_34551 = (inst_34550__$1 < n);
var state_34577__$1 = (function (){var statearr_34591 = state_34577;
(statearr_34591[(11)] = inst_34550__$1);

(statearr_34591[(12)] = inst_34549);

return statearr_34591;
})();
if(cljs.core.truth_(inst_34551)){
var statearr_34592_34621 = state_34577__$1;
(statearr_34592_34621[(1)] = (8));

} else {
var statearr_34593_34622 = state_34577__$1;
(statearr_34593_34622[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34578 === (14))){
var inst_34570 = (state_34577[(2)]);
var inst_34571 = cljs.core.async.close_BANG_.call(null,out);
var state_34577__$1 = (function (){var statearr_34595 = state_34577;
(statearr_34595[(13)] = inst_34570);

return statearr_34595;
})();
var statearr_34596_34623 = state_34577__$1;
(statearr_34596_34623[(2)] = inst_34571);

(statearr_34596_34623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34578 === (10))){
var inst_34561 = (state_34577[(2)]);
var state_34577__$1 = state_34577;
var statearr_34597_34624 = state_34577__$1;
(statearr_34597_34624[(2)] = inst_34561);

(statearr_34597_34624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34578 === (8))){
var inst_34550 = (state_34577[(11)]);
var inst_34541 = (state_34577[(8)]);
var tmp34594 = inst_34541;
var inst_34541__$1 = tmp34594;
var inst_34542 = inst_34550;
var state_34577__$1 = (function (){var statearr_34598 = state_34577;
(statearr_34598[(7)] = inst_34542);

(statearr_34598[(8)] = inst_34541__$1);

return statearr_34598;
})();
var statearr_34599_34625 = state_34577__$1;
(statearr_34599_34625[(2)] = null);

(statearr_34599_34625[(1)] = (2));


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
});})(c__31929__auto___34611,out))
;
return ((function (switch__31817__auto__,c__31929__auto___34611,out){
return (function() {
var cljs$core$async$state_machine__31818__auto__ = null;
var cljs$core$async$state_machine__31818__auto____0 = (function (){
var statearr_34603 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34603[(0)] = cljs$core$async$state_machine__31818__auto__);

(statearr_34603[(1)] = (1));

return statearr_34603;
});
var cljs$core$async$state_machine__31818__auto____1 = (function (state_34577){
while(true){
var ret_value__31819__auto__ = (function (){try{while(true){
var result__31820__auto__ = switch__31817__auto__.call(null,state_34577);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31820__auto__;
}
break;
}
}catch (e34604){if((e34604 instanceof Object)){
var ex__31821__auto__ = e34604;
var statearr_34605_34626 = state_34577;
(statearr_34605_34626[(5)] = ex__31821__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34577);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34604;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34627 = state_34577;
state_34577 = G__34627;
continue;
} else {
return ret_value__31819__auto__;
}
break;
}
});
cljs$core$async$state_machine__31818__auto__ = function(state_34577){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31818__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31818__auto____1.call(this,state_34577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31818__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31818__auto____0;
cljs$core$async$state_machine__31818__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31818__auto____1;
return cljs$core$async$state_machine__31818__auto__;
})()
;})(switch__31817__auto__,c__31929__auto___34611,out))
})();
var state__31931__auto__ = (function (){var statearr_34606 = f__31930__auto__.call(null);
(statearr_34606[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31929__auto___34611);

return statearr_34606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31931__auto__);
});})(c__31929__auto___34611,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args34628 = [];
var len__26645__auto___34702 = arguments.length;
var i__26646__auto___34703 = (0);
while(true){
if((i__26646__auto___34703 < len__26645__auto___34702)){
args34628.push((arguments[i__26646__auto___34703]));

var G__34704 = (i__26646__auto___34703 + (1));
i__26646__auto___34703 = G__34704;
continue;
} else {
}
break;
}

var G__34630 = args34628.length;
switch (G__34630) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34628.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31929__auto___34706 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31929__auto___34706,out){
return (function (){
var f__31930__auto__ = (function (){var switch__31817__auto__ = ((function (c__31929__auto___34706,out){
return (function (state_34672){
var state_val_34673 = (state_34672[(1)]);
if((state_val_34673 === (7))){
var inst_34668 = (state_34672[(2)]);
var state_34672__$1 = state_34672;
var statearr_34674_34707 = state_34672__$1;
(statearr_34674_34707[(2)] = inst_34668);

(statearr_34674_34707[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34673 === (1))){
var inst_34631 = [];
var inst_34632 = inst_34631;
var inst_34633 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34672__$1 = (function (){var statearr_34675 = state_34672;
(statearr_34675[(7)] = inst_34632);

(statearr_34675[(8)] = inst_34633);

return statearr_34675;
})();
var statearr_34676_34708 = state_34672__$1;
(statearr_34676_34708[(2)] = null);

(statearr_34676_34708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34673 === (4))){
var inst_34636 = (state_34672[(9)]);
var inst_34636__$1 = (state_34672[(2)]);
var inst_34637 = (inst_34636__$1 == null);
var inst_34638 = cljs.core.not.call(null,inst_34637);
var state_34672__$1 = (function (){var statearr_34677 = state_34672;
(statearr_34677[(9)] = inst_34636__$1);

return statearr_34677;
})();
if(inst_34638){
var statearr_34678_34709 = state_34672__$1;
(statearr_34678_34709[(1)] = (5));

} else {
var statearr_34679_34710 = state_34672__$1;
(statearr_34679_34710[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34673 === (15))){
var inst_34662 = (state_34672[(2)]);
var state_34672__$1 = state_34672;
var statearr_34680_34711 = state_34672__$1;
(statearr_34680_34711[(2)] = inst_34662);

(statearr_34680_34711[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34673 === (13))){
var state_34672__$1 = state_34672;
var statearr_34681_34712 = state_34672__$1;
(statearr_34681_34712[(2)] = null);

(statearr_34681_34712[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34673 === (6))){
var inst_34632 = (state_34672[(7)]);
var inst_34657 = inst_34632.length;
var inst_34658 = (inst_34657 > (0));
var state_34672__$1 = state_34672;
if(cljs.core.truth_(inst_34658)){
var statearr_34682_34713 = state_34672__$1;
(statearr_34682_34713[(1)] = (12));

} else {
var statearr_34683_34714 = state_34672__$1;
(statearr_34683_34714[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34673 === (3))){
var inst_34670 = (state_34672[(2)]);
var state_34672__$1 = state_34672;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34672__$1,inst_34670);
} else {
if((state_val_34673 === (12))){
var inst_34632 = (state_34672[(7)]);
var inst_34660 = cljs.core.vec.call(null,inst_34632);
var state_34672__$1 = state_34672;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34672__$1,(15),out,inst_34660);
} else {
if((state_val_34673 === (2))){
var state_34672__$1 = state_34672;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34672__$1,(4),ch);
} else {
if((state_val_34673 === (11))){
var inst_34636 = (state_34672[(9)]);
var inst_34640 = (state_34672[(10)]);
var inst_34650 = (state_34672[(2)]);
var inst_34651 = [];
var inst_34652 = inst_34651.push(inst_34636);
var inst_34632 = inst_34651;
var inst_34633 = inst_34640;
var state_34672__$1 = (function (){var statearr_34684 = state_34672;
(statearr_34684[(7)] = inst_34632);

(statearr_34684[(8)] = inst_34633);

(statearr_34684[(11)] = inst_34650);

(statearr_34684[(12)] = inst_34652);

return statearr_34684;
})();
var statearr_34685_34715 = state_34672__$1;
(statearr_34685_34715[(2)] = null);

(statearr_34685_34715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34673 === (9))){
var inst_34632 = (state_34672[(7)]);
var inst_34648 = cljs.core.vec.call(null,inst_34632);
var state_34672__$1 = state_34672;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34672__$1,(11),out,inst_34648);
} else {
if((state_val_34673 === (5))){
var inst_34636 = (state_34672[(9)]);
var inst_34633 = (state_34672[(8)]);
var inst_34640 = (state_34672[(10)]);
var inst_34640__$1 = f.call(null,inst_34636);
var inst_34641 = cljs.core._EQ_.call(null,inst_34640__$1,inst_34633);
var inst_34642 = cljs.core.keyword_identical_QMARK_.call(null,inst_34633,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34643 = (inst_34641) || (inst_34642);
var state_34672__$1 = (function (){var statearr_34686 = state_34672;
(statearr_34686[(10)] = inst_34640__$1);

return statearr_34686;
})();
if(cljs.core.truth_(inst_34643)){
var statearr_34687_34716 = state_34672__$1;
(statearr_34687_34716[(1)] = (8));

} else {
var statearr_34688_34717 = state_34672__$1;
(statearr_34688_34717[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34673 === (14))){
var inst_34665 = (state_34672[(2)]);
var inst_34666 = cljs.core.async.close_BANG_.call(null,out);
var state_34672__$1 = (function (){var statearr_34690 = state_34672;
(statearr_34690[(13)] = inst_34665);

return statearr_34690;
})();
var statearr_34691_34718 = state_34672__$1;
(statearr_34691_34718[(2)] = inst_34666);

(statearr_34691_34718[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34673 === (10))){
var inst_34655 = (state_34672[(2)]);
var state_34672__$1 = state_34672;
var statearr_34692_34719 = state_34672__$1;
(statearr_34692_34719[(2)] = inst_34655);

(statearr_34692_34719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34673 === (8))){
var inst_34632 = (state_34672[(7)]);
var inst_34636 = (state_34672[(9)]);
var inst_34640 = (state_34672[(10)]);
var inst_34645 = inst_34632.push(inst_34636);
var tmp34689 = inst_34632;
var inst_34632__$1 = tmp34689;
var inst_34633 = inst_34640;
var state_34672__$1 = (function (){var statearr_34693 = state_34672;
(statearr_34693[(7)] = inst_34632__$1);

(statearr_34693[(8)] = inst_34633);

(statearr_34693[(14)] = inst_34645);

return statearr_34693;
})();
var statearr_34694_34720 = state_34672__$1;
(statearr_34694_34720[(2)] = null);

(statearr_34694_34720[(1)] = (2));


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
});})(c__31929__auto___34706,out))
;
return ((function (switch__31817__auto__,c__31929__auto___34706,out){
return (function() {
var cljs$core$async$state_machine__31818__auto__ = null;
var cljs$core$async$state_machine__31818__auto____0 = (function (){
var statearr_34698 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34698[(0)] = cljs$core$async$state_machine__31818__auto__);

(statearr_34698[(1)] = (1));

return statearr_34698;
});
var cljs$core$async$state_machine__31818__auto____1 = (function (state_34672){
while(true){
var ret_value__31819__auto__ = (function (){try{while(true){
var result__31820__auto__ = switch__31817__auto__.call(null,state_34672);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31820__auto__;
}
break;
}
}catch (e34699){if((e34699 instanceof Object)){
var ex__31821__auto__ = e34699;
var statearr_34700_34721 = state_34672;
(statearr_34700_34721[(5)] = ex__31821__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34672);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34699;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34722 = state_34672;
state_34672 = G__34722;
continue;
} else {
return ret_value__31819__auto__;
}
break;
}
});
cljs$core$async$state_machine__31818__auto__ = function(state_34672){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31818__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31818__auto____1.call(this,state_34672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31818__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31818__auto____0;
cljs$core$async$state_machine__31818__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31818__auto____1;
return cljs$core$async$state_machine__31818__auto__;
})()
;})(switch__31817__auto__,c__31929__auto___34706,out))
})();
var state__31931__auto__ = (function (){var statearr_34701 = f__31930__auto__.call(null);
(statearr_34701[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31929__auto___34706);

return statearr_34701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31931__auto__);
});})(c__31929__auto___34706,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1476657530799